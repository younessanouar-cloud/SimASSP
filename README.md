# SimASSP — Simulateur professionnel pour Bac Pro ASSP

Application web accessible en ligne qui aide les élèves de Bac Pro ASSP à acquérir et autoévaluer les compétences professionnelles tout au long des 3 années (Seconde, Première, Terminale), en centre et en structure.

## ✨ Fonctionnalités

- 🗺️ **Parcours de compétences** : les 4 blocs et 16 compétences du référentiel, filtrables par année, bloc et contexte (centre/structure). Niveau de maîtrise réglable (0 à 3).
- 🎬 **Scénarios professionnels** : plus de 100 situations réalistes (EHPAD, domicile, centre) avec arbres de décision, feedback immédiat et bilan pédagogique.
- 🪞 **Autoévaluation** : par critères observables (bientraitance, communication, sécurité, limites professionnelles, transmission, réflexivité, qualité, éducation à la santé).
- 📊 **Tableau de progression** : KPI, progression par bloc et par compétence, historique, export JSON.
- 👩‍🏫 **Espace enseignant/tuteur** : suivi, liste des scénarios, bilan de progression (mot de passe par défaut `ecbg2026`).

## 🚀 Accès en ligne

👉 https://younessanouar-cloud.github.io/SimASSP/

## 🛠️ Stack

- HTML5 / CSS3 / JavaScript vanilla (aucune dépendance, aucune build)
- Stockage local (localStorage) — données RGPD-friendly, aucune donnée de santé réelle
- Déployable sur GitHub Pages, Hugging Face Spaces (static) ou tout hébergeur statique

## 📂 Structure

```
SimASSP/
├── index.html
├── css/style.css
├── js/data.js       # compétences, scénarios, critères
├── js/app.js        # logique applicative
└── README.md
```

## 🔧 Développement local

Ouvrir `index.html` dans un navigateur. Aucune installation requise.

## 🎯 Évolutions prévues

- Scénarios vocaux et vidéos de gestes professionnels
- Cas aléatoires et variantes (personne anxieuse, famille présente, urgence)
- Recommandations personnalisées et parcours adaptatif
- Connexion à une base partagée pour le suivi enseignant
- Export PDF des bilans

## 📄 Licence

Projet pédagogique — usage éducatif.
