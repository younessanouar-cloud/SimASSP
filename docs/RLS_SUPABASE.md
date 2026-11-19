# RLS Supabase — SimASSP (19/11/2026)

## 1. Audit initial

Requête en lecture seule effectuée avec la clé **publishable** exposée dans `js/supabase.js` :

```text
GET https://jipiobgwkunqgkffdmqk.supabase.co/rest/v1/simassp_kv?select=namespace,owner&limit=5
→ 200 OK
→ [{"namespace":"tuteur_eval","owner":"global"},
    {"namespace":"teachers","owner":"t_default"},
    {"namespace":"pfmp","owner":"global"},
    {"namespace":"accounts","owner":"u_..."}, ...]
```

👉 **La table `simassp_kv` était lisible anonymement depuis n'importe quel navigateur.**
RLS était soit désactivée, soit configurée avec une politique autorisant le rôle `anon` à tout lire.

Aucune écriture n'a été effectuée pendant cet audit : les tests Playwright bloquent `*.supabase.co`
via `context.route(...)` pour éviter toute modification du projet de production.

## 2. Pourquoi une policy `owner = auth.uid()` ne suffit pas

L'application utilisait uniquement la clé publishable et **jamais Supabase Auth**
(`persistSession: false`, aucun `signIn*`). Tous les navigateurs partageaient donc le rôle `anon`,
pour lequel `auth.uid()` vaut `NULL` : une policy `owner = auth.uid()::text` aurait rendu la table
totalement inaccessible.

Le champ `owner` (`u_...`, `t_...`, `global`) est un identifiant **applicatif**, pas une identité
Supabase. Une isolation réelle exige donc une migration vers Supabase Auth, sans renommer les
identifiants existants.

## 3. Décision : Option B — isolation réelle

L'utilisateur a retenu l'**Option B** le 19/11/2026.

### Principe

- Le client Supabase ouvre une **session anonyme persistée** sur l'appareil
  (`supabase.auth.signInAnonymously()`, `storageKey: "simassp-auth"`).
- À chaque connexion à SimASSP, le client appelle une RPC qui **revendique le compte** :
  il envoie une **preuve PBKDF2** calculée localement (jamais le mot de passe en clair).
- Une table `simassp_identities` associe `app_owner` (`u_...`/`t_...`) ↔ `auth_uid`.
  Les policies RLS comparent `owner` à `simassp_my_owner()`.
- **Un uid = au plus un compte**, mais **un compte = plusieurs uid** : PC et téléphone peuvent
  revendiquer le même élève. Le rattachement est donc réversible et sans migration des lignes.
- Les blobs globaux ne sont plus lisibles en entier par un élève. Des RPC ciblées ne touchent
  que sa clé de login dans `students_data`, `pfmp` et `tuteur_evals`. L'enseignant garde un accès
  direct complet.

### Fichiers

| Fichier | Rôle |
|---|---|
| `docs/RLS_MIGRATION.sql` | Script à exécuter **une fois** dans le dashboard Supabase |
| `js/supabase.js` | Session anonyme + `SimASSPAuth` (lookup, claim, snapshot, repli) |
| `js/crypto.js` | `proofFor()` : preuve PBKDF2 sans exposer le mot de passe |
| `js/app.js` | Câblage login élève/prof, migration legacy, écritures ciblées |
| `tools/verif_rls_option_b.py` | Test navigateur avec RPC simulées (aucune écriture production) |

## 4. Procédure côté dashboard Supabase (action enseignant)

1. **Authentication → Providers → Anonymous Sign-Ins → Enable**, puis Save.
2. **SQL Editor → New query** : coller l'intégralité de `docs/RLS_MIGRATION.sql`, exécuter.
   Le script est transactionnel (`begin`/`commit`) et ne supprime aucune donnée applicative.
3. Vérification en lecture seule (fournie en fin de script) :
   - les policies `simassp_kv lecture/insertion/modification/suppression` existent ;
   - les fonctions `simassp_*` existent ;
   - un navigateur **non connecté** obtient `0 ligne` sur `GET /rest/v1/simassp_kv`.
4. **Si la lecture anonyme renvoie encore des lignes**, une policy héritée subsiste
   (souvent « Enable read access for all users », créée par défaut par Supabase).
   Exécuter alors `docs/RLS_CORRECTIF.sql` : il supprime **toutes** les policies de
   `simassp_kv` par leur nom réel, puis recrée uniquement les 4 policies authentifiées.
   ⚠️ Ne l'exécuter qu'**après** l'étape 1 (Anonymous Sign-Ins actifs) : sans session
   anonyme, le rôle `anon` n'aurait plus aucun accès et l'app cesserait de fonctionner.
5. Recharger SimASSP sur le PC **et** le téléphone, se connecter avec un compte élève, puis
   vérifier que la progression remonte dans l'espace enseignant depuis les deux appareils.

## 5. Repli automatique

Tant que le SQL n'est pas appliqué ou si Anonymous Sign-Ins est désactivé :

- `SimASSPAuth.ready` reste `false` (ou les RPC renvoient « function does not exist ») ;
- `lookup()` renvoie `null`, `claim()` n'est pas appelé, le snapshot n'est pas chargé ;
- l'authentification et la sauvegarde continuent par le cache local + l'ancienne passerelle
  Supabase, exactement comme avant le 19/11.

Aucune casse fonctionnelle n'est donc à craindre entre le déploiement du code et l'application
du SQL.

## 6. Risques résiduels assumés

| Risque | Analyse |
|---|---|
| **Le lookup public renvoie le hash PBKDF2 au rôle `anon`** | Nécessaire pour dériver la preuve côté client sans envoyer le mot de passe. Un attaquant peut tenter une attaque hors-ligne (PBKDF2 150 000 itérations ralentit fortement l'attaque). Comptes fictifs, aucune donnée de santé réelle. Une future version pourrait déplacer la vérification côté serveur. |
| **Un uid réassigné à chaque connexion** | Si le même navigateur se connecte successivement à deux comptes, seule la dernière identité reste active. Il suffit de se reconnecter pour retrouver l'accès. Choix délibéré : un navigateur = un compte à la fois. |
| **Conflit d'écritures concurrentes sur les blobs globaux** | Deux élèves qui enregistrent simultanément fusionnent leur clé dans le même JSON. La RPC lit et réécrit le blob en une instruction ; un verrou optimiste pourrait être ajouté si le besoin se présentait. |
| **Cache localStorage partagé** | Sur un poste partagé, le cache local d'un élève peut contenir les données d'un autre compte si ceux-ci se sont succédé sans nettoyage du navigateur. La RLS protège le cloud, pas le stockage local du navigateur. |
| **Lecteur de l'enseignant** | L'enseignant lit tout par conception (rôle pédagogique). C'est un choix fonctionnel, pas une faille. |

## 7. Options écartées

- **Option A** — activer RLS en laissant le rôle `anon` tout voir : rendait l'accès explicite et
  auditable, mais n'apportait **aucune** protection réelle. Écartée au profit de l'option B.
- **Laisser en l'état** : écarté après confirmation de la lecture anonyme.

## 8. Diagnostic réel du 19/11/2026 après première application

Contrôles effectués en lecture seule avec la clé publishable :

| Contrôle | Résultat | Interprétation |
|---|---|---|
| `GET /auth/v1/settings` → `external.anonymous_users` | `false` | Anonymous Sign-Ins toujours désactivés dans le dashboard |
| `POST /auth/v1/signup` | `422 anonymous_provider_disabled` | Conséquence directe du point précédent |
| `GET /simassp_kv` sans token | `200` + lignes `global`/`teachers`/`accounts` | Une policy `anon` héritée autorise encore la lecture |
| `GET /simassp_identities` sans token | `401 permission denied` | Correct : table sans grant pour `anon` |
| RPC `simassp_public_account/teacher`, `simassp_my_owner`, `simassp_is_teacher`, `simassp_student_global_set` | répondent | Le SQL de l'Option B a bien été appliqué |

### Validation finale (19/11/2026, après correction)

Tous les contrôles réels en lecture sont conformes :

| Contrôle | Résultat |
|---|---|
| `GET /auth/v1/settings` → `external.anonymous_users` | `true` |
| `POST /auth/v1/signup` (anonyme) | `200` + JWT `role=authenticated`, `is_anonymous=true` |
| `GET /simassp_kv` **sans token** | `401 permission denied` |
| `GET /simassp_kv` avec token mais sans `claim` | `[]` |
| `simassp_student_snapshot_get` sans `claim` | `{}` |
| `simassp_claim` avec un mauvais mot de passe | `false`, aucune ligne créée |
| RPC de lookup (`simassp_public_account` / `_teacher`) | répondent |
| `GET /simassp_identities` sans token | `401 permission denied` |

La suite de tests locale reste verte : `node --check` (app/crypto/supabase/storage/sw),
`verif_auth_pbkdf2.py`, `verif_rls_option_b.py`, `verif_ameliorations.py`,
`verif_navigateur_plage.py` (102/102), `audit_scenarios.js`.

Reste à valider côté utilisateur : chargement de l'app sur **PC + téléphone**, connexion avec
un compte élève existant, puis vérification que la progression remonte dans l'espace enseignant.
Aucun test d'écriture n'a été effectué sur le projet de production.
