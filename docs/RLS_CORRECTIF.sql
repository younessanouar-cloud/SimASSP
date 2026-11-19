-- ============================================================
-- SimASSP — CORRECTIF RLS (19/11/2026)
-- ============================================================
-- À exécuter APRÈS avoir activé :
--   Dashboard → Authentication → Providers → Anonymous Sign-Ins → ENABLE → Save
--
-- Pourquoi ce correctif ?
--   Le premier script créait les policies Option B mais ne supprimait que
--   celles portant ses propres noms. Une policy héritée (par exemple
--   « Enable read access for all users », créée par défaut par Supabase)
--   autorisait encore le rôle anon à lire toute la table.
--
-- Ce script supprime TOUTES les policies de simassp_kv, puis recrée
-- uniquement les 4 policies authentifiées de l'Option B.
-- AUCUNE donnée applicative n'est supprimée ni modifiée.
-- ============================================================

begin;

-- 1. Suppression de TOUTES les policies existantes, quels que soient leurs noms.
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

-- 2. RLS activée (les fonctions SECURITY DEFINER restent propriétaires de la
--    lecture : PAS de FORCE ROW LEVEL SECURITY, sinon les lookup cassent).
alter table public.simassp_kv enable row level security;

-- 3. Privilèges : plus rien pour anon, tout pour authenticated.
revoke all on public.simassp_kv from anon;
grant select, insert, update, delete on public.simassp_kv to authenticated;
grant select, insert, update, delete on public.simassp_kv to service_role;

-- 4. Les 4 seules policies autorisées.
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

commit;

-- ============================================================
-- VÉRIFICATION (lecture seule, dans le SQL Editor)
-- ============================================================
-- select policyname, cmd, roles from pg_policies
--  where schemaname = 'public' and tablename = 'simassp_kv';
-- Attendu : exactement 4 lignes (lecture/insertion/modification/suppression),
--           roles = {authenticated}.
--
-- select relrowsecurity from pg_class where oid = 'public.simassp_kv'::regclass;
-- Attendu : true.
--
-- Puis relancer : python -X utf8 tools/.../verif_lecture.py
-- Attendu : GET /rest/v1/simassp_kv SANS token -> [] et signup 201 avec token.
