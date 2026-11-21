# SimASSP — Simulateur professionnel pour Bac Pro ASSP

Application web accessible en ligne qui aide les élèves de Bac Pro ASSP à acquérir et autoévaluer les compétences professionnelles tout au long des 3 années (Seconde, Première, Terminale), en centre et en structure.

## ✨ Fonctionnalités

- 🗺️ **Parcours de compétences** : les 4 blocs et 16 compétences du référentiel, filtrables par année, bloc et contexte (centre/structure). Niveau de maîtrise réglable (0 à 3).
- 🎬 **Scénarios professionnels** : 102 situations réalistes (EHPAD, domicile, centre) avec arbres de décision, feedback immédiat et bilan pédagogique. Recherche textuelle accent-insensible et filtres par bloc/année avec compteur de résultats.
- 🪞 **Autoévaluation et carnet réflexif** : par critères observables (bientraitance, communication, sécurité, limites professionnelles, transmission, réflexivité, qualité, éducation à la santé). La réflexion saisie à la fin d'un scénario est conservée et valorisée dans le tableau de bord, l'export bilan PDF et le carnet de bord de l'espace enseignant.
- 📊 **Tableau de progression** : KPI, progression par bloc et par compétence, historique (avec colonne « Réflexivité »), export JSON.
- 👩‍🏫 **Espace enseignant/tuteur** : suivi, liste des scénarios, bilan de progression et carnet de bord réflexif par élève (mot de passe par défaut `ecbg2026`). Un bouton de retour permanent et un logo contextuel évitent d'être bloqué sur l'accueil après un clic sur le bandeau « Bac Pro ASSP ».
- 🗑️ **Gestion des comptes** : création, réinitialisation et **suppression multiple** des comptes élèves (cases à cocher + « Tout sélectionner » + bouton « Supprimer la sélection »). Chaque champ de mot de passe dispose d'un bouton **👁 / 🙈** pour afficher ou masquer la saisie.
- 🖨️ **Fiche d'identifiants imprimable** : bouton « Imprimer les identifiants » avec filtre par classe, ouvrant une fiche A4 prête à imprimer ou à enregistrer en PDF (nom, identifiant, classe, mot de passe provisoire). Le mot de passe en clair est conservé dans le compte au moment de sa création/réinitialisation et supprimé dès que l'élève choisit le sien ; les anciens hashes base64 encore présents sont décodés automatiquement. Les comptes déjà convertis en PBKDF2 sans mot de passe conservé affichent « — » (utiliser « 🔄 Reset mdp »).

## 📘 Guide rapide (Word)

Un guide visuel **recto / verso** est fourni dans le dépôt : [`Guide_Rapide_SimASSP.docx`](Guide_Rapide_SimASSP.docx).
- **Recto — Élèves** : connexion, parcours de compétences, scénarios, autoévaluation et progression, avec maquettes d'écran.
- **Verso — Enseignants** : accès à l'espace prof, gestion des comptes (création, reset, suppression multiple), impression des identifiants par classe et suivi de la classe.

Le pied de page de l'application et du guide mentionne **DWYN Solutions** avec son logo.

## 🚀 Accès en ligne

👉 https://younessanouar-cloud.github.io/SimASSP/

## 🔄 Synchronisation PC ↔ téléphone

SimASSP utilise **Supabase** pour synchroniser les données en temps réel entre tous les appareils :
- Comptes élèves et enseignants
- Progression, autoévaluation, historique
- PFMP (structures, dates, objectifs)
- Évaluations tuteur et bilans

Les données sont stockées dans le cloud (Supabase, plan gratuit) avec un cache local (localStorage) pour le mode hors-ligne. La migration depuis l'ancien stockage local est automatique au premier démarrage.

Une fenêtre de protection de 5 secondes après chaque écriture locale empêche le chargement asynchrone du cloud de réécrire une valeur obsolète dans le cache (perte d'historique observée sur le suivi des scénarios).

## 🔐 Sécurité des comptes

Les mots de passe sont hachés avec **PBKDF2-SHA-256** (150 000 itérations, sel aléatoire de 16 octets, empreinte 256 bits) via l'API Web Crypto (`js/crypto.js`). L'ancien format `btoa` réversible est encore accepté **une seule fois** lors d'une connexion réussie, puis automatiquement remplacé par un hash PBKDF2.

Pour permettre l'impression de la fiche d'identifiants, le mot de passe provisoire est également conservé en clair dans le champ `plainPassword` du compte (visible uniquement par l'enseignant via RLS, jamais exposé par la RPC publique de connexion) et supprimé dès que l'élève change son mot de passe. Les comptes de démonstration étant fictifs, ce compromis est acceptable ; ne pas l'employer pour de vrais comptes.

**Isolation des données (Option B — retenue le 19/11/2026).** Le client ouvre une session **Supabase Auth anonyme** persistée sur l'appareil. À chaque connexion, il revendique son compte auprès du serveur avec une **preuve PBKDF2** : le mot de passe en clair ne quitte jamais le navigateur. Les policies RLS limitent alors chaque élève à ses propres lignes ; l'enseignant conserve un accès complet. Les blobs partagés (`students_data`, `pfmp`, `tuteur_evals`) ne sont accessibles à l'élève que par des RPC ciblées sur sa propre clé.

⚠️ **Action requise côté dashboard Supabase** : activer *Authentication → Providers → Anonymous Sign-Ins*, puis exécuter [`docs/RLS_MIGRATION.sql`](docs/RLS_MIGRATION.sql). Tant que ce script n'est pas appliqué, l'application replie automatiquement sur son mode de fonctionnement antérieur (via le cache local et les RPC absentes). L'audit initial, le détail de l'option retenue et les risques résiduels sont dans [`docs/RLS_SUPABASE.md`](docs/RLS_SUPABASE.md). Aucune donnée de santé réelle n'est stockée.

## 📱 Installation hors-ligne (PWA)

SimASSP est installable sur ordinateur et téléphone : manifeste `manifest.webmanifest`, icônes 192/512 px (dont une version maskable) et service worker `sw.js` (app shell mis en cache, stratégie réseau d'abord pour la navigation, cache d'abord pour les assets). L'application reste utilisable hors connexion une fois chargée ; la synchronisation Supabase reprend au retour du réseau.

## 🛠️ Stack

- HTML5 / CSS3 / JavaScript vanilla (aucune dépendance, aucune build)
- Stockage : **Supabase** (sync temps réel PC ↔ téléphone) avec cache local (localStorage) pour le mode hors-ligne
- Authentification : **PBKDF2-SHA-256** via Web Crypto (migration automatique depuis l'ancien base64)
- **PWA** : manifeste + service worker + icônes, installation et fonctionnement hors-ligne
- Données RGPD-friendly, aucune donnée de santé réelle
- Déployable sur GitHub Pages, Hugging Face Spaces (static) ou tout hébergeur statique

## 📂 Structure

```
SimASSP/
├── index.html
├── manifest.webmanifest    # PWA (icônes, thème, mode standalone)
├── sw.js                   # service worker (app shell hors-ligne)
├── css/style.css
├── icons/                  # icon-192, icon-512, icon-maskable-512
├── js/
│   ├── crypto.js           # PBKDF2-SHA-256 + migration depuis base64
│   ├── data.js             # compétences, scénarios, critères
│   ├── scenarios_extra.js  # scénarios additionnels (total 102)
│   ├── storage.js          # cache local + passerelle Supabase + garde anti-effacement
│   ├── supabase.js         # session anonyme, helpers RLS (lookup/claim/snapshot) + realtime
│   └── app.js              # logique applicative (navigation, filtres, carnet, bilans)
├── docs/
│   ├── RLS_SUPABASE.md     # audit RLS, option B retenue, risques résiduels
│   └── RLS_MIGRATION.sql   # script à exécuter dans le dashboard Supabase
├── tools/
│   ├── audit_scenarios.js        # validation structurelle des 102 scénarios
│   ├── gen_icons.py              # régénération des icônes PWA
│   ├── verif_ameliorations.py    # filtres, carnet, navigation, PBKDF2, PWA hors-ligne
│   ├── verif_auth_pbkdf2.py      # migration, création, reset, changement de mot de passe
│   ├── verif_comptes.py          # suppression multiple + bouton 👁 afficher/masquer
│   ├── verif_rls_option_b.py     # RPC simulées : claim, migration, isolation, repli
│   └── verif_navigateur_plage.py # validation navigateur de tous les scénarios
└── README.md
```

## 🔧 Développement local

Ouvrir `index.html` dans un navigateur. Aucune installation requise.

Vérifications avant publication :
```bash
node --check js/app.js && node --check js/crypto.js && node --check js/supabase.js && node --check sw.js
node tools/audit_scenarios.js S1-S126
python -X utf8 tools/verif_auth_pbkdf2.py
python -X utf8 tools/verif_rls_option_b.py
python -X utf8 tools/verif_navigateur_plage.py 1 126
python -X utf8 tools/verif_ameliorations.py
```

Les tests Playwright bloquent `*.supabase.co` : ils n'écrivent jamais dans le projet de production. `verif_rls_option_b.py` remplace le SDK par un faux injecté dans le navigateur : les RPC sont simulées en mémoire et le vrai code client est exercé.

## 🎯 Évolutions prévues

- Scénarios vocaux et vidéos de gestes professionnels
- Cas aléatoires et variantes (personne anxieuse, famille présente, urgence)
- Recommandations personnalisées et parcours adaptatif
- Application de [`docs/RLS_MIGRATION.sql`](docs/RLS_MIGRATION.sql) dans le dashboard Supabase + validation croisée PC/téléphone (action enseignant, une seule fois)

## 📄 Licence

Projet pédagogique — usage éducatif.
