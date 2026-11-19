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

## 🛠️ Stack

- HTML5 / CSS3 / JavaScript vanilla (aucune dépendance, aucune build)
- Stockage : **Supabase** (sync temps réel PC ↔ téléphone) avec cache local (localStorage) pour le mode hors-ligne
- Données RGPD-friendly, aucune donnée de santé réelle
- Déployable sur GitHub Pages, Hugging Face Spaces (static) ou tout hébergeur statique

## 📂 Structure

```
SimASSP/
├── index.html
├── css/style.css
├── js/data.js              # compétences, scénarios, critères
├── js/scenarios_extra.js   # scénarios additionnels (total 102)
├── js/storage.js           # cache local + passerelle Supabase + garde anti-effacement
├── js/app.js               # logique applicative (navigation, filtres, carnet, bilans)
├── tools/
│   ├── audit_scenarios.js  # validation structurelle des 102 scénarios
│   └── verif_ameliorations.py # test navigateur Playwright (filtres, carnet, navigation)
└── README.md
```

## 🔧 Développement local

Ouvrir `index.html` dans un navigateur. Aucune installation requise.

Vérifications avant publication :
```bash
node --check js/app.js
node tools/audit_scenarios.js
python -X utf8 tools/verif_ameliorations.py
```

## 🎯 Évolutions prévues

- Scénarios vocaux et vidéos de gestes professionnels
- Cas aléatoires et variantes (personne anxieuse, famille présente, urgence)
- Recommandations personnalisées et parcours adaptatif
- Renforcement de la sécurité des comptes (remplacement de `btoa` par PBKDF2)
- PWA / installation hors-ligne complète

## 📄 Licence

Projet pédagogique — usage éducatif.
