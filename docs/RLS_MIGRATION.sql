-- ============================================================
-- SimASSP — Option B : isolation réelle des données par élève
-- 19/11/2026
-- ============================================================
-- À exécuter dans Supabase → SQL Editor, avec le compte propriétaire.
--
-- PRÉALABLE OBLIGATOIRE :
--   Dashboard → Authentication → Providers → Anonymous Sign-Ins → ENABLE
--   (le client JS appelle supabase.auth.signInAnonymously() au démarrage).
--
-- Ce script ne supprime AUCUNE donnée applicative. Il ajoute une table de
-- correspondance, des fonctions sécurisées et des policies RLS. Les identifiants
-- applicatifs u_... / t_... / global restent inchangés : aucune migration de
-- lignes n'est nécessaire.
--
-- Modèle retenu :
--   - un uid Supabase (appareil/navigateur) = AU PLUS UN compte applicatif ;
--   - un compte applicatif peut être revendiqué depuis PLUSIEURS appareils
--     (PC + téléphone) : la table autorise plusieurs uid pour un même owner ;
--   - la revendication se fait à chaque connexion avec la preuve PBKDF2.
-- ============================================================

begin;

-- ------------------------------------------------------------
-- 1. Correspondance identifiant applicatif ↔ uid Supabase Auth
--    Table SANS policy : inaccessible en direct. Seules les fonctions
--    SECURITY DEFINER ci-dessous y accèdent.
-- ------------------------------------------------------------
create table if not exists public.simassp_identities (
  app_owner  text not null,                      -- u_... ou t_...
  auth_uid   uuid not null references auth.users(id) on delete cascade,
  kind       text not null check (kind in ('student', 'teacher')),
  created_at timestamptz not null default now(),
  primary key (app_owner, auth_uid)
);

alter table public.simassp_identities enable row level security;
revoke all on public.simassp_identities from anon, authenticated;
grant select, insert, update, delete on public.simassp_identities to service_role;

-- ------------------------------------------------------------
-- 2. Helpers appelés par les policies (SECURITY DEFINER)
-- ------------------------------------------------------------
create or replace function public.simassp_my_owner()
returns text
language sql stable security definer set search_path = public
as $$
  select i.app_owner
    from public.simassp_identities i
   where i.auth_uid = auth.uid()
   limit 1;
$$;

create or replace function public.simassp_is_teacher()
returns boolean
language sql stable security definer set search_path = public
as $$
  select coalesce((
    select i.kind = 'teacher'
      from public.simassp_identities i
     where i.auth_uid = auth.uid()
     limit 1
  ), false);
$$;

revoke all on function public.simassp_my_owner() from public;
revoke all on function public.simassp_is_teacher() from public;
grant execute on function public.simassp_my_owner() to authenticated;
grant execute on function public.simassp_is_teacher() to authenticated;

-- ------------------------------------------------------------
-- 3. RLS sur simassp_kv
--    - enseignant : lit/écrit/supprime TOUT (rôle pédagogique)
--    - élève : UNIQUEMENT ses lignes (progress/autoeval/history/accounts)
--    - les blobs owner='global' (students_data, pfmp, tuteur_evals...) ne
--      sont accessibles qu'à l'enseignant. L'élève y accède par des RPC
--      ciblées qui ne touchent QUE sa propre clé (§6).
-- ------------------------------------------------------------
alter table public.simassp_kv enable row level security;

-- Nettoyage de TOUTES les policies existantes (option A, policies par défaut
-- Supabase du type « Enable read access for all users », exécutions précédentes
-- de ce script...). Une policy anon résiduelle rendrait la RLS inopérante.
do $$
declare
  pol record;
begin
  for pol in
    select policyname
      from pg_policies
     where schemaname = 'public'
       and tablename = 'simassp_kv'
  loop
    execute format('drop policy if exists %I on public.simassp_kv', pol.policyname);
  end loop;
end
$$;

-- Privilèges : plus rien pour anon, tout pour authenticated.
revoke all on public.simassp_kv from anon;
grant select, insert, update, delete on public.simassp_kv to authenticated;
grant select, insert, update, delete on public.simassp_kv to service_role;

-- Pas de FORCE ROW LEVEL SECURITY : les fonctions SECURITY DEFINER (§4 à §6)
-- lisent la table en tant que propriétaire et doivent pouvoir le faire.

create policy "simassp_kv lecture" on public.simassp_kv
  for select to authenticated
  using (
    public.simassp_is_teacher()
    or owner = public.simassp_my_owner()
  );

create policy "simassp_kv insertion" on public.simassp_kv
  for insert to authenticated
  with check (
    public.simassp_is_teacher()
    or owner = public.simassp_my_owner()
  );

create policy "simassp_kv modification" on public.simassp_kv
  for update to authenticated
  using (
    public.simassp_is_teacher()
    or owner = public.simassp_my_owner()
  )
  with check (
    public.simassp_is_teacher()
    or owner = public.simassp_my_owner()
  );

create policy "simassp_kv suppression" on public.simassp_kv
  for delete to authenticated
  using (
    public.simassp_is_teacher()
    or owner = public.simassp_my_owner()
  );

-- ------------------------------------------------------------
-- 4. Connexion : lookup public MINIMAL (id / login / hash)
--    Risque résiduel documenté : ce hash PBKDF2 est exposed au rôle anon.
--    Il permet à un attaquant de tenter une attaque hors-ligne. Les comptes
--    de cette simulation sont fictifs ; voir docs/RLS_SUPABASE.md.
-- ------------------------------------------------------------
create or replace function public.simassp_public_account(p_login text)
returns jsonb
language sql security definer set search_path = public
as $$
  select jsonb_build_object(
           'id', k.data->>'id',
           'login', k.data->>'login',
           'passwordHash', k.data->>'passwordHash'
         )
    from public.simassp_kv k
   where k.namespace = 'accounts'
     and k.data->>'login' = p_login
   limit 1;
$$;

create or replace function public.simassp_public_teacher(p_login text)
returns jsonb
language sql security definer set search_path = public
as $$
  select jsonb_build_object(
           'id', k.data->>'id',
           'login', k.data->>'login',
           'passwordHash', k.data->>'passwordHash'
         )
    from public.simassp_kv k
   where k.namespace = 'teachers'
     and k.data->>'login' = p_login
   limit 1;
$$;

revoke all on function public.simassp_public_account(text) from public;
revoke all on function public.simassp_public_teacher(text) from public;
grant execute on function public.simassp_public_account(text) to anon, authenticated;
grant execute on function public.simassp_public_teacher(text) to anon, authenticated;

-- ------------------------------------------------------------
-- 5. Revendication de compte à la connexion
--    p_proof = empreinte PBKDF2 (ou hash legacy) calculée côté client.
--    p_new_hash = nouveau hash PBKDF2 si l'ancien base64 a été validé.
--    Un uid ne peut posséder qu'UNE identité à la fois (les autres sont
--    supprimées), mais plusieurs uid peuvent revendiquer le même owner.
-- ------------------------------------------------------------
create or replace function public.simassp_claim(
  p_owner text,
  p_proof text,
  p_kind text,
  p_new_hash text default null
)
returns boolean
language plpgsql security definer set search_path = public
as $$
declare
  v_ns   text;
  v_hash text;
begin
  if auth.uid() is null then return false; end if;
  if p_kind not in ('student', 'teacher') then return false; end if;

  v_ns := case when p_kind = 'teacher' then 'teachers' else 'accounts' end;

  select k.data->>'passwordHash'
    into v_hash
    from public.simassp_kv k
   where k.namespace = v_ns
     and k.data->>'id' = p_owner;

  if v_hash is null then return false; end if;

  if v_hash like 'pbkdf2$%' then
    if p_proof is distinct from split_part(v_hash, '$', 4) then
      return false;
    end if;
  else
    if p_proof is distinct from v_hash then
      return false;
    end if;
  end if;

  if p_new_hash is not null and p_new_hash like 'pbkdf2$%' then
    update public.simassp_kv
       set data = jsonb_set(data, '{passwordHash}', to_jsonb(p_new_hash)),
           updated_at = now()
     where namespace = v_ns
       and data->>'id' = p_owner;
  end if;

  -- Un navigateur ne conserve qu'une seule identité à la fois.
  delete from public.simassp_identities where auth_uid = auth.uid();

  insert into public.simassp_identities (app_owner, auth_uid, kind)
  values (p_owner, auth.uid(), p_kind)
  on conflict (app_owner, auth_uid)
  do update set kind = excluded.kind;

  return true;
end;
$$;

revoke all on function public.simassp_claim(text, text, text, text) from public;
grant execute on function public.simassp_claim(text, text, text, text) to authenticated;

-- ------------------------------------------------------------
-- 6. Accès ciblé aux blobs globaux par l'élève connecté
--    Une seule clé (son login) est lue/écrite. L'enseignant garde un accès
--    direct complet aux lignes owner='global'.
-- ------------------------------------------------------------
create or replace function public.simassp_my_login()
returns text
language sql stable security definer set search_path = public
as $$
  select k.data->>'login'
    from public.simassp_kv k
   where k.namespace = 'accounts'
     and k.owner = public.simassp_my_owner()
   limit 1;
$$;

create or replace function public.simassp_student_snapshot_get()
returns jsonb
language sql security definer set search_path = public
as $$
  select coalesce(
    (select k.data -> public.simassp_my_login()
       from public.simassp_kv k
      where k.namespace = 'students_data' and k.owner = 'global'),
    '{}'::jsonb
  );
$$;

create or replace function public.simassp_student_pfmp_get()
returns jsonb
language sql security definer set search_path = public
as $$
  select coalesce(
    (select k.data -> public.simassp_my_login()
       from public.simassp_kv k
      where k.namespace = 'pfmp' and k.owner = 'global'),
    '{}'::jsonb
  );
$$;

create or replace function public.simassp_student_tuteur_eval_get()
returns jsonb
language sql security definer set search_path = public
as $$
  select coalesce(
    (select k.data -> public.simassp_my_login()
       from public.simassp_kv k
      where k.namespace = 'tuteur_evals' and k.owner = 'global'),
    '{}'::jsonb
  );
$$;

create or replace function public.simassp_student_global_set(p_namespace text, p_value jsonb)
returns boolean
language plpgsql security definer set search_path = public
as $$
declare
  v_login text;
begin
  if p_namespace not in ('students_data', 'pfmp') then return false; end if;
  v_login := public.simassp_my_login();
  if v_login is null then return false; end if;

  update public.simassp_kv
     set data = coalesce(data, '{}'::jsonb) || jsonb_build_object(v_login, p_value),
         updated_at = now()
   where namespace = p_namespace and owner = 'global';

  if not found then
    insert into public.simassp_kv (namespace, owner, data, updated_at)
    values (p_namespace, 'global', jsonb_build_object(v_login, p_value), now());
  end if;

  return true;
end;
$$;

revoke all on function public.simassp_my_login() from public;
revoke all on function public.simassp_student_snapshot_get() from public;
revoke all on function public.simassp_student_pfmp_get() from public;
revoke all on function public.simassp_student_tuteur_eval_get() from public;
revoke all on function public.simassp_student_global_set(text, jsonb) from public;
grant execute on function public.simassp_my_login() to authenticated;
grant execute on function public.simassp_student_snapshot_get() to authenticated;
grant execute on function public.simassp_student_pfmp_get() to authenticated;
grant execute on function public.simassp_student_tuteur_eval_get() to authenticated;
grant execute on function public.simassp_student_global_set(text, jsonb) to authenticated;

-- ------------------------------------------------------------
-- 7. Compte enseignant par défaut (si absent)
--    Hash legacy volontaire : le client le convertit en PBKDF2 dès la
--    première connexion via p_new_hash de simassp_claim().
-- ------------------------------------------------------------
insert into public.simassp_kv (namespace, owner, data, updated_at)
values (
  'teachers',
  't_default',
  jsonb_build_object(
    'id', 't_default',
    'login', 'enseignant',
    'passwordHash', encode(convert_to('simassp::ecbg2026', 'UTF8'), 'base64'),
    'prenom', 'Enseignant',
    'nom', '',
    'role', 'enseignant',
    'created', '19/11/2026',
    'mustChangePassword', true
  ),
  now()
)
on conflict (namespace, owner) do nothing;

commit;

-- ============================================================
-- VÉRIFICATION (lecture seule, à exécuter après)
-- ============================================================
-- select tablename, policyname, cmd from pg_policies
--  where schemaname = 'public' and tablename = 'simassp_kv';
--
-- select proname from pg_proc
--  where pronamespace = 'public'::regnamespace and proname like 'simassp_%';
--
-- Depuis un navigateur NON connecté, ceci doit renvoyer 0 ligne :
--   GET /rest/v1/simassp_kv?select=namespace,owner
-- ============================================================
