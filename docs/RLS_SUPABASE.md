# Audit RLS Supabase — SimASSP (19/11/2026)

## Constat

Requête en lecture seule effectuée avec la clé **publishable** exposée dans `js/supabase.js` :

```text
GET https://jipiobgwkunqgkffdmqk.supabase.co/rest/v1/simassp_kv?select=namespace,owner&limit=5
→ 200 OK
→ [{"namespace":"tuteur_eval","owner":"global"},
    {"namespace":"teachers","owner":"t_default"},
    {"namespace":"pfmp","owner":"global"},
    {"namespace":"accounts","owner":"u_..."}, ...]
```

👉 **La table `simassp_kv` est lisible anonymement depuis n'importe quel navigateur.**
RLS est soit désactivée, soit configurée avec une politique autorisant le rôle `anon` à tout lire.

Aucune écriture n'a été effectuée pendant cet audit (les tests Playwright bloquent désormais
`*.supabase.co` via `context.route(...)` pour éviter toute modification du projet de production).

## Pourquoi ce n'est pas corrigeable uniquement côté client

L'application utilise uniquement la clé publishable et **ne fait jamais appel à Supabase Auth**
(`persistSession: false`, aucun `signIn*`). Tous les élèves partagent donc le même rôle PostgREST `anon`.

Une politique RLS du type :

```sql
owner = auth.uid()::text
```

**casserait l'application** : `auth.uid()` est `NULL` pour toutes les requêtes, donc plus aucune
ligne ne serait lisible/écrivable.

Le champ `owner` utilisé aujourd'hui (`u_...`, `t_...`, `global`) est un identifiant applicatif,
pas une identité Supabase. Le rendre étanche exige une migration vers Supabase Auth.

## Ce qui a été renforcé maintenant

- Les mots de passe ne sont plus stockés en base64 réversible : **PBKDF2-SHA-256, 150 000 itérations,
  sel aléatoire 16 octets** (`js/crypto.js`). Les anciens hash base64 sont convertis à la première
  connexion réussie.
- Les tests n'écrivent plus dans Supabase.

Reste exposé tant que RLS n'est pas corrigée : noms/prénoms des comptes, classes, progression,
historique de scénarios, PFMP, évaluations tuteur. Aucune donnée de santé réelle n'est stockée.

## Deux options

### Option A — minimale (dashboard Supabase, sans casser l'existant)

Activer RLS tout en conservant le comportement actuel, pour au moins rendre la situation explicite
et auditable. Dans **Supabase → Authentication / Policies** (ou SQL Editor) :

```sql
ALTER TABLE public.simassp_kv ENABLE ROW LEVEL SECURITY;

-- Lecture/écriture autorisées pour le rôle anon afin de préserver le fonctionnement actuel.
CREATE POLICY "simassp_kv anon select" ON public.simassp_kv
  FOR SELECT TO anon USING (true);
CREATE POLICY "simassp_kv anon insert" ON public.simassp_kv
  FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "simassp_kv anon update" ON public.simassp_kv
  FOR UPDATE TO anon USING (true) WITH CHECK (true);
CREATE POLICY "simassp_kv anon delete" ON public.simassp_kv
  FOR DELETE TO anon USING (true);
```

⚠️ Cela ne protège pas les données : cela documente seulement l'accès. À ne faire que si l'option B
est repoussée.

### Option B — isolation réelle (à valider avant chantier)

1. Activer **Anonymous Sign-Ins** dans Supabase Auth.
2. Dans `js/supabase.js` : `await supabase.auth.signInAnonymously()` au démarrage, session persistée.
3. Remplacer les `owner` applicatifs par `auth.uid()` pour `progress`, `autoeval`, `history`, `pfmp`.
4. RLS : `owner = auth.uid()::text` pour ces namespaces.
5. Les comptes élèves (`accounts`) doivent rester lisibles par l'enseignant : soit table séparée avec
   policy `role enseignant` (JWT custom claim), soit vue RPC sécurisée.
6. Migration one-time des données existantes (mapping `u_...` → nouvel uid) + test PC/téléphone.

C'est le seul moyen d'obtenir une vraie séparation des données par élève. Chantier à décider.
