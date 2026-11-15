window.SIM_SCENARIOS_EXTRA = [
  {
    id: "S41", bloc: "B1", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C1.1", "C1.2"],
    titre: "Accueil d'une personne en situation de handicap",
    description: "M. K., 45 ans, en situation de handicap moteur, arrive en structure. Tu dois l'accueillir.",
    hints: ["Respecte son autonomie.", "Adapte ton langage et ton attitude.", "Ne fais pas a sa place."],
    variantes: [

    ],
    steps: [
      { q: "Comment accueilles-tu M. K. ?",
        choices: [
      { text: "Te presenter, lui demander ses besoins et ses preferences.", correct: true, feedback: "Tu respectes son autonomie et ses preferences." },
      { text: "Faire les choses a sa place sans lui demander.", correct: false, feedback: "Tu ne respectes pas son autonomie." }
        ] },
      { q: "M. K. a besoin d'aide pour se deplacer. Que fais-tu ?",
        choices: [
      { text: "Lui proposer de l'aide et respecter son refus si il prefere seul.", correct: true, feedback: "Tu respectes ses choix." },
      { text: "Le prendre par le bras sans demander.", correct: false, feedback: "Tu ne respectes pas son autonomie." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Besoins, preferences, autonomie de M. K.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations importantes." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, respect de l'autonomie, communication, transmission. Points forts : respect. A retravailler : anticipation."
  },
  {
    id: "S42", bloc: "B1", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C1.2", "C1.4"],
    titre: "Animation d'un atelier cuisine",
    description: "Tu animes un atelier cuisine pour des residents. Un resident se blesse legerement.",
    hints: ["La securite est prioritaire.", "Adapte l'activite au niveau de chacun.", "Transmets l'incident."],
    variantes: [

    ],
    steps: [
      { q: "Un resident se coupe le doigt. Que fais-tu ?",
        choices: [
      { text: "Securiser, desinfecter, mettre un pansement, alerter si necessaire.", correct: true, feedback: "Tu securises et tu soignes." },
      { text: "Continuer l'activite sans soigner.", correct: false, feedback: "Tu ne soignes pas la blessure. Risque d'infection." }
        ] },
      { q: "Apres l'incident, que fais-tu ?",
        choices: [
      { text: "Reprendre l'activite en adaptant, transmettre l'incident.", correct: true, feedback: "Tu adaptes et tu traces." },
      { text: "Annuler l'activite.", correct: false, feedback: "Tu n'adaptes pas. L'activite peut continuer avec precautions." }
        ] }
    ],
    bilan: "Tu as mobilise : securite, adaptation, transmission. Points forts : reactivite. A retravailler : prevention."
  },
  {
    id: "S43", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C2.1", "C2.4"],
    titre: "Distribution des repas et accompagnement",
    description: "Tu distribues les repas du soir et accompagnes les residents.",
    hints: ["Respecte les regimes.", "Observe l'ingestion.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Avant la distribution, que verifies-tu ?",
        choices: [
      { text: "Les regimes, les preferences et les allergies.", correct: true, feedback: "Tu respectes les contraintes alimentaires." },
      { text: "Rien, tu distribues les plateaux.", correct: false, feedback: "Risque d'erreur alimentaire." }
        ] },
      { q: "Un resident refuse de manger. Que fais-tu ?",
        choices: [
      { text: "L'encourager, proposer un alternative, transmettre.", correct: true, feedback: "Tu accompagnes et tu traces." },
      { text: "Forcer a manger.", correct: false, feedback: "Tu ne respectes pas son autonomie." }
        ] },
      { q: "Apres le repas, que transmets-tu ?",
        choices: [
      { text: "Quantites ingerees, appetit, difficultes.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations importantes." }
        ] }
    ],
    bilan: "Tu as mobilise : respect du regime, accompagnement, transmission. Points forts : attention. A retravailler : gestion du refus."
  },
  {
    id: "S44", bloc: "B2", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C2.2", "C2.3"],
    titre: "Observation d'un resident post-operatoire",
    description: "Mme C., 70 ans, rentree d'hospitalisation apres une operation. Tu dois surveiller son etat.",
    hints: ["Observe les signes d'alerte.", "Prends les constantes.", "Alerte si anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Que surveilles-tu en priorite ?",
        choices: [
      { text: "Douleur, temperature, tension, etat de la plaie.", correct: true, feedback: "Tu surveilles les signes d'alerte." },
      { text: "Rien de particulier.", correct: false, feedback: "Tu ne surveilles pas. Risque de complication." }
        ] },
      { q: "Mme C. a de la fievre. Que fais-tu ?",
        choices: [
      { text: "Prendre la temperature, alerter l'infirmier, transmettre.", correct: true, feedback: "Tu alertes et tu traces." },
      { text: "Lui donner un antipiretique.", correct: false, feedback: "Ce n'est pas ton role de prescrire." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Temperature, symptomes, actions realisees.", correct: true, feedback: "Transmission complete." },
      { text: "Elle a de la fievre.", correct: false, feedback: "Trop vague." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, surveillance, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S45", bloc: "B3", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C3.2", "C3.3"],
    titre: "Utilisation d'outils numeriques",
    description: "Tu dois utiliser le dossier numerique du resident pour une transmission.",
    hints: ["Respecte le RGPD.", "Verifie les informations.", "Signe electroniquement."],
    variantes: [

    ],
    steps: [
      { q: "Avant d'acceder au dossier, que fais-tu ?",
        choices: [
      { text: "Te connecter avec ton identifiant, ne pas laisser l'ecran ouvert.", correct: true, feedback: "Tu respectes la confidentialite." },
      { text: "Utiliser le compte d'un collegue.", correct: false, feedback: "Tu ne respectes pas la confidentialite." }
        ] },
      { q: "Que saisis-tu ?",
        choices: [
      { text: "Des informations factuelles et structurees.", correct: true, feedback: "Tu saisis des donnees de qualite." },
      { text: "Des opinions personnelles.", correct: false, feedback: "Le dossier doit etre factuel." }
        ] },
      { q: "Apres la saisie, que fais-tu ?",
        choices: [
      { text: "Verifier, signer et fermer la session.", correct: true, feedback: "Tu assures la tracabilite et la securite." },
      { text: "Laisser la session ouverte.", correct: false, feedback: "Risque de consultation non autorisee." }
        ] }
    ],
    bilan: "Tu as mobilise : outils numeriques, confidentialite, tracabilite. Points forts : rigueur. A retravailler : organisation."
  },
  {
    id: "S46", bloc: "B3", annee: "T", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1", "C3.3"],
    titre: "Gestion d'un conflit avec un collegue",
    description: "Un collegue te critique devant un resident. Tu dois gerer la situation.",
    hints: ["Reste professionnel.", "Ne pas repondre devant le resident.", "Dialoguer en prive."],
    variantes: [

    ],
    steps: [
      { q: "Que fais-tu sur le moment ?",
        choices: [
      { text: "Rester calme, ne pas repondre devant le resident, proposer de discuter plus tard.", correct: true, feedback: "Tu preserves la relation professionnelle." },
      { text: "Repondre vivement devant le resident.", correct: false, feedback: "Tu aggraves le conflit et tu perturbes le resident." }
        ] },
      { q: "Apres, que fais-tu ?",
        choices: [
      { text: "Dialoguer en prive avec le collegue, exprimer tes ressentis, chercher une solution.", correct: true, feedback: "Tu resous le conflit de maniere constructive." },
      { text: "Se plaindre a l'infirmier.", correct: false, feedback: "Tu ne resous pas le conflit directement." }
        ] }
    ],
    bilan: "Tu as mobilise : communication, gestion de conflit, professionnalisme. Points forts : maitrise de soi. A retravailler : dialogue."
  },
  {
    id: "S47", bloc: "B4", annee: "1", contexte: "centre", duree: "15 min", difficulte: 1,
    competences: ["C4.1", "C4.2"],
    titre: "Conception d'un support d'education a la sante",
    description: "Tu dois concevoir un support (affiche) pour une action sur l'hygiene des mains.",
    hints: ["Adapte le support au public.", "Utilise des visuels clairs.", "Teste le support."],
    variantes: [

    ],
    steps: [
      { q: "Que dois-tu faire en premier ?",
        choices: [
      { text: "Analyser le public et ses besoins, puis concevoir le support.", correct: true, feedback: "Tu pars des besoins." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." }
        ] },
      { q: "Comment testes-tu le support ?",
        choices: [
      { text: "Le faire tester par quelques residents et ajuster.", correct: true, feedback: "Tu valides avec le public." },
      { text: "Ne pas tester.", correct: false, feedback: "Tu ne sais pas si le support est adapte." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse de besoins, conception, test. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S48", bloc: "B4", annee: "T", contexte: "structure", duree: "20 min", difficulte: 2,
    competences: ["C4.3", "C4.4"],
    titre: "Evaluation d'une action de prevention",
    description: "Tu evalues une action de prevention des chutes realisee le mois dernier.",
    hints: ["L'evaluation mesure l'efficacite.", "Les indicateurs sont essentiels.", "L'ajustement est necessaire."],
    variantes: [

    ],
    steps: [
      { q: "Comment evalues-tu ?",
        choices: [
      { text: "Par des indicateurs (nombre de chutes, connaissances) et un bilan.", correct: true, feedback: "Tu mesures l'efficacite." },
      { text: "Sans evaluation formelle.", correct: false, feedback: "Tu ne sais pas si l'action a ete efficace." }
        ] },
      { q: "Que fais-tu avec les resultats ?",
        choices: [
      { text: "Ajuster l'action et transmettre le bilan a l'equipe.", correct: true, feedback: "Tu ameliores et tu traces." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : evaluation, ajustement, transmission. Points forts : rigueur. A retravailler : suivi."
  }
,
  {
    id: "S49", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C1.1", "C1.2"],
    titre: "Accueil d'un nouveau resident en EHPAD",
    description: "M. P., 78 ans, arrive aujourd'hui en EHPAD apres une hospitalisation. Tu es en PFMP. Il semble anxieux.",
    hints: ["L'accueil commence avant l'arrivee.", "L'ecoute et la reformulation rassurent.", "La transmission assure la continuite."],
    variantes: [
      { titre: "Variante : famille presente", description: "Le fils de M. P. est present." }
    ],
    steps: [
      { q: "M. P. arrive dans sa chambre. Quelle est ta premiere action ?",
        choices: [
      { text: "Te presenter, lui souhaiter la bienvenue et lui montrer sa chambre.", correct: true, feedback: "Tu accueilles, tu rassures et tu personnalises." },
      { text: "Lui demander de signer les documents d'admission immediatement.", correct: false, feedback: "Tu priorises l'administratif avant l'accueil humain." },
      { text: "Le laisser seul pour qu'il s'installe.", correct: false, feedback: "Tu l'abandonnes dans un moment d'anxiete." }
        ] },
      { q: "M. P. dit : Je ne connais personne ici, j'ai peur. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler ses craintes, lui presenter l'equipe et le programme.", correct: true, feedback: "Tu valides ses emotions et tu donnes des reperes." },
      { text: "Lui dire que tout le monde s'adapte.", correct: false, feedback: "Tu minimises ses craintes." },
      { text: "Lui proposer de retourner a l'hopital.", correct: false, feedback: "Tu ne peux pas proposer cela." }
        ] },
      { q: "Apres l'accueil, que transmets-tu ?",
        choices: [
      { text: "M. P. arrive aujourd'hui, anxieux, desoriente, a besoin d'accompagnement.", correct: true, feedback: "Transmission factuelle et utile." },
      { text: "Tout va bien, il s'est adapte.", correct: false, feedback: "Tu masques la realite." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, reformulation, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S50", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C2.1", "C2.3"],
    titre: "Toilette et confort d'un resident dependant",
    description: "M. R., 82 ans, hemiplegique gauche, dependant pour la toilette. Tu dois realiser sa toilette au lit.",
    hints: ["La securite et le confort priment.", "Respecte la pudeur et l'autonomie restante.", "Le bionettoyage est essentiel."],
    variantes: [
      { titre: "Variante : resident agressif", description: "M. R. devient agressif pendant la toilette." }
    ],
    steps: [
      { q: "Avant de commencer, que verifies-tu ?",
        choices: [
      { text: "Le dossier de soins, les preferences de M. R., le materiel necessaire et la chambre propre.", correct: true, feedback: "Tu prepares et tu respectes les preferences." },
      { text: "Rien, tu commences directement.", correct: false, feedback: "Tu ne verifies pas les preferences ni le materiel." }
        ] },
      { q: "Pendant la toilette, M. R. dit qu'il a froid. Que fais-tu ?",
        choices: [
      { text: "Couvrir les parties non lavees, augmenter le chauffage si possible, accelerer sans negliger.", correct: true, feedback: "Tu adaptes pour le confort tout en maintenant la qualite." },
      { text: "Continuer normalement, le froid passera.", correct: false, feedback: "Tu ignores son inconfort." }
        ] },
      { q: "Apres la toilette, que fais-tu ?",
        choices: [
      { text: "Habiller M. R., le mettre en confort, ranger et nettoyer le materiel, transmettre.", correct: true, feedback: "Tu assures le confort et le bionettoyage, puis la transmission." },
      { text: "Partir sans ranger.", correct: false, feedback: "Tu ne fais pas le bionettoyage. Risque d'infection." }
        ] }
    ],
    bilan: "Tu as mobilise : preparation, confort, bionettoyage, transmission. Points forts : respect de la personne. A retravailler : gestion du temps."
  },
  {
    id: "S51", bloc: "B3", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1", "C3.2"],
    titre: "Organisation d'une journee en EHPAD",
    description: "Tu dois organiser tes activites avec l'equipe pour la journee. Plusieurs residents ont des soins et des activites prevues.",
    hints: ["Priorise les soins urgents.", "Communique avec l'equipe.", "Anticipe les imprevus."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ta journee ?",
        choices: [
      { text: "Lister les soins prioritaires, repartir les taches avec l'equipe et prevoir des marges.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les soins dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas. Risque de retard sur les soins urgents." }
        ] },
      { q: "Un resident demande une aide imprevue. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence, reporter si possible ou demander de l'aide a un collegue.", correct: true, feedback: "Tu geres l'imprevu sans negliger le reste." },
      { text: "Tout arreter pour s'occuper de lui.", correct: false, feedback: "Tu negliges les autres residents. Il faut prioriser." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations importantes et faire le bilan avec l'equipe.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe de l'apres-midi n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, priorisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S52", bloc: "B4", annee: "T", contexte: "centre", duree: "25 min", difficulte: 3,
    competences: ["C4.1", "C4.2", "C4.3", "C4.4"],
    titre: "Conception et animation d'une action d'education a la sante",
    description: "Tu dois concevoir et animer une action d'education a la sante sur l'hygiene des mains pour des residents en EHPAD.",
    hints: ["Analyse d'abord les besoins du public.", "Adapte le contenu et les supports.", "Evalue et ajuste."],
    variantes: [
      { titre: "Variante : public non francophone", description: "Certains residents ne parlent pas francais. Adapte ta communication." }
    ],
    steps: [
      { q: "Avant de concevoir l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public, ses connaissances et ses capacites.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Choisir un support deja existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public specifique." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Utiliser des demonstrations, des supports visuels et des exercices pratiques adaptes.", correct: true, feedback: "Tu adaptes les methodes au public." },
      { text: "Faire un expose magistral.", correct: false, feedback: "Peu adapte a des residents avec troubles cognitifs." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer la comprehension, ajuster et transmettre un bilan a l'equipe.", correct: true, feedback: "Tu evalues et tu ajustes." },
      { text: "Partir sans evaluation.", correct: false, feedback: "Tu ne sais pas si l'action a ete efficace." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse de besoins, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation des acquis."
  }
,
  {
    id: "S53", bloc: "B1", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C1.1", "C1.2"],
    titre: "Accueil d'un resident en situation de handicap",
    description: "M. K., 45 ans, en situation de handicap moteur, arrive en structure. Tu dois l'accueillir.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S54", bloc: "B1", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C1.3", "C1.4"],
    titre: "Animation d'un atelier memoire",
    description: "Tu animes un atelier memoire pour des residents atteints de troubles cognitifs.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S55", bloc: "B1", annee: "T", contexte: "centre", duree: "15 min", difficulte: 2,
    competences: ["C1.1", "C1.2"],
    titre: "Gestion d'un conflit entre residents",
    description: "Deux residents se disputent dans la salle commune. Tu dois intervenir.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S56", bloc: "B1", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C1.4"],
    titre: "Animation d'une activite physique adaptee",
    description: "Tu animes une seance de gymnastique douce pour des residents ages.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S57", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C2.1", "C2.4"],
    titre: "Aide au repas d'un resident dependant",
    description: "M. G., 80 ans, dependant pour l'alimentation. Tu dois l'accompagner au repas.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S58", bloc: "B2", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C2.2", "C2.4"],
    titre: "Surveillance d'un resident diabetique",
    description: "Mme B., 72 ans, diabetique, presente des signes d'hypoglycemie. Tu dois intervenir.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S59", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C2.1", "C2.3"],
    titre: "Bionettoyage d'une chambre",
    description: "Tu dois realiser le bionettoyage de la chambre d'un resident infecte.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S60", bloc: "B2", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C2.2", "C2.1"],
    titre: "Gestion d'une chute d'un resident",
    description: "M. H., 85 ans, est tombe dans sa chambre. Tu le trouves au sol.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S61", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.2", "C3.3"],
    titre: "Transmission ecrite dans le dossier",
    description: "Tu dois rediger une transmission ecrite dans le dossier de M. J.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S62", bloc: "B3", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1", "C3.3"],
    titre: "Participation a la demarche qualite",
    description: "Tu participes a une reunion qualite sur la prevention des chutes.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S63", bloc: "B3", annee: "T", contexte: "structure", duree: "20 min", difficulte: 2,
    competences: ["C3.4", "C3.2"],
    titre: "Accueil d'un stagiaire",
    description: "Tu accueilles un nouveau stagiaire en PFMP. Tu dois l'accompagner.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S64", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.2", "C3.3"],
    titre: "Signalement d'un incident",
    description: "Tu observes un incident de securite. Tu dois le signaler.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S65", bloc: "B4", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C4.1", "C4.2"],
    titre: "Analyse des besoins d'un public",
    description: "Tu dois analyser les besoins d'un groupe de residents pour une action d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S66", bloc: "B4", annee: "T", contexte: "centre", duree: "25 min", difficulte: 3,
    competences: ["C4.3", "C4.4"],
    titre: "Animation et evaluation d'une action de prevention",
    description: "Tu animes et evalues une action de prevention des chutes pour des residents.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S67", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C1.1", "C1.2"],
    titre: "Accueil d'un nouveau resident en EHPAD",
    description: "M. P., 78 ans, arrive aujourd'hui en EHPAD apres une hospitalisation. Tu es en PFMP.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S68", bloc: "B1", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C1.3", "C1.4"],
    titre: "Animation d'un atelier cuisine",
    description: "Tu animes un atelier cuisine pour des residents. Un resident se blesse legerement.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S69", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C2.1", "C2.4"],
    titre: "Distribution des repas et accompagnement",
    description: "Tu distribues les repas du soir et accompagnes les residents.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S70", bloc: "B2", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C2.2", "C2.3"],
    titre: "Observation d'un resident post-operatoire",
    description: "Mme C., 70 ans, rentree d'hospitalisation apres une operation. Tu dois surveiller son etat.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S71", bloc: "B3", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C3.2", "C3.3"],
    titre: "Utilisation d'outils numeriques",
    description: "Tu dois utiliser le dossier numerique du resident pour une transmission.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S72", bloc: "B3", annee: "T", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1", "C3.3"],
    titre: "Gestion d'un conflit avec un collegue",
    description: "Un collegue te critique devant un resident. Tu dois gerer la situation.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S73", bloc: "B4", annee: "1", contexte: "centre", duree: "15 min", difficulte: 1,
    competences: ["C4.1", "C4.2"],
    titre: "Conception d'un support d'education a la sante",
    description: "Tu dois concevoir un support (affiche) pour une action sur l'hygiene des mains.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S74", bloc: "B4", annee: "T", contexte: "structure", duree: "20 min", difficulte: 2,
    competences: ["C4.3", "C4.4"],
    titre: "Evaluation d'une action de prevention",
    description: "Tu evalues une action de prevention des chutes realisee le mois dernier.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  }
,
  {
    id: "S75", bloc: "B1", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C1.1", "C1.2"],
    titre: "Accueil d'un nouveau resident",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S76", bloc: "B1", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C1.1", "C1.4"],
    titre: "Communication avec une personne anxieuse",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S77", bloc: "B1", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C1.2", "C1.3"],
    titre: "Animation d'un atelier memoire",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S78", bloc: "B1", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C1.1", "C1.2", "C1.4"],
    titre: "Gestion d'un conflit",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S79", bloc: "B1", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C1.1", "C1.2"],
    titre: "Accompagnement d'une personne en deuil",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S80", bloc: "B1", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C1.1", "C1.4"],
    titre: "Entretien avec la famille",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S81", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C1.2", "C1.3"],
    titre: "Accueil d'un resident en situation de handicap",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S82", bloc: "B1", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C1.1", "C1.2", "C1.4"],
    titre: "Animation d'un atelier cuisine",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S83", bloc: "B1", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C1.1", "C1.2"],
    titre: "Projet individualise",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S84", bloc: "B1", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C1.1", "C1.4"],
    titre: "Mediation entre residents",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S85", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C2.1", "C2.3"],
    titre: "Toilette et confort",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S86", bloc: "B2", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C2.2", "C2.4"],
    titre: "Prise de constantes",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S87", bloc: "B2", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C2.1", "C2.2"],
    titre: "Bionettoyage",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S88", bloc: "B2", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C2.3", "C2.4"],
    titre: "Gestion d'une chute",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S89", bloc: "B2", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C2.1", "C2.3"],
    titre: "Aide au repas",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S90", bloc: "B2", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C2.2", "C2.4"],
    titre: "Surveillance post-operatoire",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S91", bloc: "B2", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C2.1", "C2.2"],
    titre: "Distribution des repas",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S92", bloc: "B2", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C2.3", "C2.4"],
    titre: "Observation d'un resident",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S93", bloc: "B2", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C2.1", "C2.3"],
    titre: "Soins d'hygiene",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S94", bloc: "B2", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C2.2", "C2.4"],
    titre: "Confort et bien-etre",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S95", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.1", "C3.2"],
    titre: "Transmission ecrite",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S96", bloc: "B3", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C3.2", "C3.3"],
    titre: "Organisation d'une journee",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S97", bloc: "B3", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C3.1", "C3.3"],
    titre: "Participation a la qualite",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S98", bloc: "B3", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C3.2", "C3.4"],
    titre: "Accueil d'un stagiaire",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S99", bloc: "B3", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C3.1", "C3.2"],
    titre: "Signalement d'incident",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S100", bloc: "B3", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C3.2", "C3.3"],
    titre: "Utilisation d'outils numeriques",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S101", bloc: "B3", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C3.1", "C3.3"],
    titre: "Gestion de conflit avec collegue",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S102", bloc: "B3", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C3.2", "C3.4"],
    titre: "Coordination d'equipe",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S103", bloc: "B3", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C3.1", "C3.2"],
    titre: "Reunion de synthese",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S104", bloc: "B3", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C3.2", "C3.3"],
    titre: "Planification des soins",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S105", bloc: "B4", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C4.1", "C4.2"],
    titre: "Analyse des besoins",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S106", bloc: "B4", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C4.3", "C4.4"],
    titre: "Conception d'un support",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S107", bloc: "B4", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C4.1", "C4.4"],
    titre: "Animation et evaluation",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S108", bloc: "B4", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C4.2", "C4.3"],
    titre: "Education a l'hygiene",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S109", bloc: "B4", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C4.1", "C4.2"],
    titre: "Prevention des chutes",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S110", bloc: "B4", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C4.3", "C4.4"],
    titre: "Sante et nutrition",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S111", bloc: "B4", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C4.1", "C4.4"],
    titre: "Bien-etre et relaxation",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S112", bloc: "B4", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C4.2", "C4.3"],
    titre: "Prevention des infections",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S113", bloc: "B4", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C4.1", "C4.2"],
    titre: "Education a la mobilite",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S114", bloc: "B4", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C4.3", "C4.4"],
    titre: "Bilan d'une action",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  }
,
  {
    id: "S119", bloc: "B1", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C1.1", "C1.2"],
    titre: "Accueil d'un nouveau resident",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S120", bloc: "B1", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C1.1", "C1.4"],
    titre: "Communication avec une personne anxieuse",
    description: "Situation professionnelle en structure d'accueil pour personnes agees. Tu dois accompagner la personne dans une approche globale et individualisee.",
    hints: ["L'accueil est essentiel.", "L'ecoute active rassure.", "La transmission assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Accueillir la personne, se presenter et observer son etat.", correct: true, feedback: "Tu accueilles et tu observes." },
      { text: "Commencer l'activite sans accueil.", correct: false, feedback: "Tu ne prends pas le temps d'accueillir." },
      { text: "Appeler l'infirmier immediatement.", correct: false, feedback: "Pas d'urgence identifiee." }
        ] },
      { q: "La personne exprime une crainte. Que fais-tu ?",
        choices: [
      { text: "Ecouter, reformuler et rassurer.", correct: true, feedback: "Tu valides ses emotions." },
      { text: "Minimiser la crainte.", correct: false, feedback: "Tu ne valides pas ses emotions." },
      { text: "Ignorer et passer a autre chose.", correct: false, feedback: "Tu n'accompagnes pas." }
        ] },
      { q: "Que transmets-tu a l'equipe ?",
        choices: [
      { text: "Observations, actions realisees, etat de la personne.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : accueil, ecoute, transmission. Points forts : communication. A retravailler : anticipation."
  },
  {
    id: "S121", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C2.1", "C2.3"],
    titre: "Toilette et confort",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S122", bloc: "B2", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C2.2", "C2.4"],
    titre: "Prise de constantes",
    description: "Situation professionnelle en structure d'accueil. Tu dois intervenir lors des soins d'hygiene, de confort et de securite.",
    hints: ["Observe avant d'agir.", "Respecte le protocole.", "Transmets les anomalies."],
    variantes: [

    ],
    steps: [
      { q: "Quelle est ta premiere action ?",
        choices: [
      { text: "Observer l'etat general et prendre les constantes.", correct: true, feedback: "Tu recueilles des donnees objectives." },
      { text: "Agir sans evaluer.", correct: false, feedback: "Tu agis sans evaluation. Risque d'erreur." },
      { text: "Laisser la personne seule.", correct: false, feedback: "Tu ne surveilles pas." }
        ] },
      { q: "Tu observes une anomalie. Que fais-tu ?",
        choices: [
      { text: "Appliquer le protocole et alerter l'infirmier.", correct: true, feedback: "Tu respectes le protocole et tu alertes." },
      { text: "Ne rien faire et attendre.", correct: false, feedback: "L'anomalie peut s'aggraver." },
      { text: "Donner un medicament sans prescription.", correct: false, feedback: "Ce n'est pas ton role." }
        ] },
      { q: "Que transmets-tu ?",
        choices: [
      { text: "Heure, symptomes, constantes, action, evolution.", correct: true, feedback: "Transmission complete." },
      { text: "Rien a signaler.", correct: false, feedback: "Tu omets des informations." }
        ] }
    ],
    bilan: "Tu as mobilise : observation, protocole, alerte, transmission. Points forts : vigilance. A retravailler : precision."
  },
  {
    id: "S123", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.1", "C3.2"],
    titre: "Transmission ecrite",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S124", bloc: "B3", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C3.2", "C3.3"],
    titre: "Organisation d'une journee",
    description: "Situation professionnelle en structure d'accueil. Tu dois travailler et communiquer en equipe pluriprofessionnelle.",
    hints: ["Priorise les taches.", "Communique avec l'equipe.", "Assure la continuite."],
    variantes: [

    ],
    steps: [
      { q: "Comment organises-tu ton activite ?",
        choices: [
      { text: "Prioriser les taches et communiquer avec l'equipe.", correct: true, feedback: "Tu planifies et tu coordonnes." },
      { text: "Faire les taches dans l'ordre d'arrivee.", correct: false, feedback: "Tu ne priorises pas." },
      { text: "Travailler seul sans communiquer.", correct: false, feedback: "Tu ne coordonnes pas avec l'equipe." }
        ] },
      { q: "Un imprevu survient. Que fais-tu ?",
        choices: [
      { text: "Evaluer l'urgence et adapter l'organisation.", correct: true, feedback: "Tu geres l'imprevu." },
      { text: "Tout arreter.", correct: false, feedback: "Tu negliges les autres taches." },
      { text: "Ignorer l'imprevu.", correct: false, feedback: "Tu ne geres pas la situation." }
        ] },
      { q: "En fin de journee, que fais-tu ?",
        choices: [
      { text: "Transmettre les informations et faire le bilan.", correct: true, feedback: "Tu assures la continuite." },
      { text: "Partir sans transmettre.", correct: false, feedback: "L'equipe suivante n'aura pas les informations." }
        ] }
    ],
    bilan: "Tu as mobilise : organisation, communication, transmission. Points forts : coordination. A retravailler : gestion du temps."
  },
  {
    id: "S125", bloc: "B4", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C4.1", "C4.2"],
    titre: "Analyse des besoins",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  },
  {
    id: "S126", bloc: "B4", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C4.3", "C4.4"],
    titre: "Conception d'un support",
    description: "Situation professionnelle en centre. Tu dois realiser des actions d'education a la sante.",
    hints: ["Analyse les besoins.", "Adapte l'animation.", "Evalue et ajuste."],
    variantes: [

    ],
    steps: [
      { q: "Avant l'action, que fais-tu ?",
        choices: [
      { text: "Analyser les besoins du public et concevoir l'action.", correct: true, feedback: "Tu pars des besoins reels." },
      { text: "Copier un support existant sans l'adapter.", correct: false, feedback: "Tu ne tiens pas compte du public." },
      { text: "Improviser sans preparation.", correct: false, feedback: "Tu ne prepares pas l'action." }
        ] },
      { q: "Comment animes-tu l'action ?",
        choices: [
      { text: "Avec des demonstrations, des exercices et des echanges.", correct: true, feedback: "Tu rends l'action interactive." },
      { text: "Par un expose magistral.", correct: false, feedback: "Peu adapte au public." },
      { text: "Sans animation, tu distribues un document.", correct: false, feedback: "Tu ne animes pas." }
        ] },
      { q: "Apres l'action, que fais-tu ?",
        choices: [
      { text: "Evaluer, ajuster et transmettre le bilan.", correct: true, feedback: "Tu evalues et tu ameliores." },
      { text: "Ne rien faire.", correct: false, feedback: "Tu ne suis pas la demarche." }
        ] }
    ],
    bilan: "Tu as mobilise : analyse, conception, animation, evaluation. Points forts : adaptation. A retravailler : evaluation."
  }
];
