# SimASSP — Simulateur professionnel pour Bac Pro ASSP

Application web accessible en ligne qui aide les élèves de Bac Pro ASSP à acquérir et autoévaluer les compétences professionnelles tout au long des 3 années (Seconde, Première, Terminale), en centre et en structure.

## ✨ Fonctionnalités

- 🗺️ **Parcours de compétences** : les 4 blocs et 16 compétences du référentiel, filtrables par année, bloc et contexte (centre/structure). Niveau de maîtrise réglable (0 à 3).
- 🎬 **Scénarios professionnels** : 102 situations réalistes (EHPAD, domicile, centre) avec arbres de décision, feedback immédiat et bilan pédagogique. Recherche textuelle accent-insensible et filtres par bloc/année avec compteur de résultats.
- 🪞 **Autoévaluation et carnet réflexif** : par critères observables (bientraitance, communication, sécurité, limites professionnelles, transmission, réflexivité, qualité, éducation à la santé). La réflexion saisie à la fin d'un scénario est conservée et valorisée dans le tableau de bord, l'export bilan PDF et le carnet de bord de l'espace enseignant.
- 📊 **Tableau de progression** : KPI, progression par bloc et par compétence, historique (avec colonne « Réflexivité »), export JSON.
- 👩‍🏫 **Espace enseignant/tuteur** : suivi, liste des scénarios, bilan de progression et carnet de bord réflexif par élève (mot de passe par défaut `ecbg2026`). Un bouton de retour permanent et un logo contextuel évitent d'être bloqué sur l'accueil après un clic sur le bandeau « Bac Pro ASSP ».

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

⚠️ **Point de vigilance RLS** : la table Supabase `simassp_kv` est actuellement lisible avec la clé publishable (rôle `anon`). L'audit complet et les deux options de correction sont décrits dans [`docs/RLS_SUPABASE.md`](docs/RLS_SUPABASE.md). Aucune donnée de santé réelle n'est stockée.

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
│   ├── supabase.js         # client Supabase + realtime
│   └── app.js              # logique applicative (navigation, filtres, carnet, bilans)
├── docs/
│   └── RLS_SUPABASE.md     # audit RLS + options de correction
├── tools/
│   ├── audit_scenarios.js        # validation structurelle des 102 scénarios
│   ├── gen_icons.py              # régénération des icônes PWA
│   ├── verif_ameliorations.py    # filtres, carnet, navigation, PBKDF2, PWA hors-ligne
│   ├── verif_auth_pbkdf2.py      # migration, création, reset, changement de mot de passe
│   └── verif_navigateur_plage.py # validation navigateur de tous les scénarios
└── README.md
```

## 🔧 Développement local

Ouvrir `index.html` dans un navigateur. Aucune installation requise.

Vérifications avant publication :
```bash
node --check js/app.js && node --check js/crypto.js && node --check sw.js
node tools/audit_scenarios.js S1-S126
python -X utf8 tools/verif_auth_pbkdf2.py
python -X utf8 tools/verif_navigateur_plage.py 1 126
python -X utf8 tools/verif_ameliorations.py
```

Les tests Playwright bloquent `*.supabase.co` : ils n'écrivent jamais dans le projet de production.

## 🎯 Évolutions prévues

- Scénarios vocaux et vidéos de gestes professionnels
- Cas aléatoires et variantes (personne anxieuse, famille présente, urgence)
- Recommandations personnalisées et parcours adaptatif
- Isolation réelle des données par élève : migration vers Supabase Auth + RLS (voir `docs/RLS_SUPABASE.md`, nécessite une décision et un accès au dashboard Supabase)

## 📄 Licence

Projet pédagogique — usage éducatif.
