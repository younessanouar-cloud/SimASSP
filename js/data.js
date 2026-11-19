/* ============================================================
   SimASSP — Données : compétences, scénarios, critères
   Fidèle au référentiel Bac Pro ASSP (4 blocs)
   Enrichi : indices progressifs, variantes, difficulté, compétences liées
   ============================================================ */

window.SIM_DATA = (function () {
  "use strict";

  // ---------- SOURCE OFFICIELLE ----------
  // Arrêté du 2 février 2022 portant création du bac pro ASSP
  // (JORF n° 0053 du 04/03/2022, texte 11) — annexe III : référentiel de compétences.
  // Les intitulés ci-dessous sont reproduits MOT À MOT (apostrophes typographiques comprises).
  const SOURCE_OFFICIELLE = "Arrêté du 2 février 2022 (JORF n° 0053 du 04/03/2022), annexe III — Référentiel de compétences du bac pro ASSP";

  // ---------- BLOCS ----------
  const BLOCS = [
    { code: "B1", emoji: "🤝", title: "Accompagner la personne dans une approche globale et individualisée",
      color: "#1e3a5f", desc: "Posture professionnelle, accueil, communication, projet individualisé, animation d'activités favorisant l'autonomie et la vie sociale." },
    { code: "B2", emoji: "🛁", title: "Intervention auprès de la personne lors des soins d’hygiène, de confort et de sécurité, dans les activités de la vie quotidienne",
      color: "#2e7d32", desc: "Activités d'hygiène et de confort, surveillance de l'état de santé, environnement proche, aides techniques, repas adaptés." },
    { code: "B3", emoji: "👥", title: "Travailler et communiquer en équipe pluriprofessionnelle",
      color: "#2c5282", desc: "Organisation des activités, transmission d'informations, démarche qualité, bionettoyage, tutorat des stagiaires." },
    { code: "B4", emoji: "📚", title: "Réaliser des actions d’éducation à la santé pour un public ciblé, dans un contexte donné",
      color: "#f9a825", desc: "Analyser les besoins du public, concevoir, mettre en œuvre et évaluer une action d'éducation à la santé." }
  ];

  // ---------- COMPÉTENCES ----------
  // `ref` = numérotation officielle de l'annexe III. Les champs `desc`, `annees`
  // et `contexte` sont des aides pédagogiques SimASSP (ils ne figurent PAS dans l'annexe III).
  const COMPETENCES = [
    { id: "C1.1", ref: "1.0", bloc: "B1", titre: "Adopter une posture professionnelle adaptée", desc: "Compétence transversale (asterisque dans le texte officiel) : respect des valeurs de l'autre, éthique, confidentialité, bientraitance, gestion des émotions, limites de compétences.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C1.2", ref: "1.1", bloc: "B1", titre: "Accueillir, communiquer avec la personne, sa famille, son entourage", desc: "Écoute active, reformulation, adaptation du langage, relation de confiance.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C1.3", ref: "1.2", bloc: "B1", titre: "Participer à la conception, au suivi, à la mise en œuvre et à l’évaluation du projet individualisé, du projet de vie, en lien avec l’équipe pluriprofessionnelle", desc: "Recueil d'informations, objectifs, participation à l'équipe, suivi et réajustement.", annees: ["1","T"], contexte: ["centre","structure"] },
    { id: "C1.4", ref: "1.3", bloc: "B1", titre: "Concevoir et mettre en œuvre des activités d’acquisition ou de maintien de l’autonomie et de la vie sociale pour une personne ou un groupe", desc: "Choix de l'activité, adaptation au public, animation, bilan.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C2.1", ref: "2.1", bloc: "B2", titre: "Réaliser les activités liées à l’hygiène, au confort de la personne et à la sécurisation", desc: "Toilette, habillage, mobilisation, confort, sécurité de la personne.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C2.2", ref: "2.2", bloc: "B2", titre: "Surveiller l’état de santé de la personne et intervenir en conséquence", desc: "Observation, signes d'alerte, prise de constantes, alerte à l'infirmier/médecin.", annees: ["2","1","T"], contexte: ["structure"] },
    { id: "C2.3", ref: "2.3", bloc: "B2", titre: "Assurer l’hygiène de l’environnement proche de la personne et veiller au bon état de fonctionnement du lit, des aides techniques, des dispositifs médicaux dans l’environnement de la personne", desc: "Bionettoyage, rangement, vérification des dispositifs médicaux et aides techniques.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C2.4", ref: "2.4", bloc: "B2", titre: "Distribuer des repas équilibrés conformes aux besoins de la personne (régimes, allergies, texture…), installer la personne et accompagner la prise des repas", desc: "Respect du régime, aide à l'alimentation, observation de l'ingestion, transmission.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C3.1", ref: "3.1", bloc: "B3", titre: "Gérer ses activités en inter agissant avec l’équipe pluriprofessionnelle dans une posture professionnelle adaptée", desc: "Planification, répartition des tâches, priorités, gestion du temps.", annees: ["1","T"], contexte: ["structure"] },
    { id: "C3.2", ref: "3.2", bloc: "B3", titre: "Traiter et transmettre des informations en intégrant les différents outils numériques", desc: "Transmissions écrites et orales, dossiers, outils numériques, RGPD.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C3.3", ref: "3.3", bloc: "B3", titre: "Participer à la démarche qualité et à la prévention des risques professionnels", desc: "Démarche qualité, signalement, prévention des chutes, infections, ergonomie.", annees: ["1","T"], contexte: ["structure"] },
    { id: "C3.4", ref: "3.4", bloc: "B3", titre: "Coordonner et conduire une équipe de bio nettoyage", desc: "Planification et conduite de l'équipe de bionettoyage, répartition des tâches, contrôle de la qualité du nettoyage.", annees: ["1","T"], contexte: ["structure"] },
    { id: "C3.5", ref: "3.5", bloc: "B3", titre: "Participer à l’accueil, à l’encadrement et à la formation de stagiaires, à l’accueil des nouveaux agents, des bénévoles", desc: "Tutorat, transmission de savoirs, accompagnement des stagiaires, des nouveaux agents et des bénévoles.", annees: ["T"], contexte: ["structure"] },
    { id: "C4.1", ref: "4.1", bloc: "B4", titre: "Analyser les besoins du public", desc: "Recueil, observation, diagnostic de situation, priorités.", annees: ["1","T"], contexte: ["centre","structure"] },
    { id: "C4.2", ref: "4.2", bloc: "B4", titre: "Concevoir une action d’éducation à la santé", desc: "Objectifs, contenu, méthodes, supports, public cible.", annees: ["1","T"], contexte: ["centre"] },
    { id: "C4.3", ref: "4.3", bloc: "B4", titre: "Mettre en œuvre et évaluer l’action d’éducation à la santé", desc: "Animation, gestion du groupe, adaptation en temps réel, indicateurs, bilan, ajustement et restitution.", annees: ["1","T"], contexte: ["centre","structure"] }
  ];

  // ---------- CRITÈRES D'AUTOÉVALUATION ----------
  // Grille PÉDAGOGIQUE SimASSP : synthèse d'indicateurs de l'annexe III,
  // présentée à l'élève comme aide à la réflexion, PAS comme un intitulé officiel.
  const CRITERES = [
    { id: "cr_bientraitance", label: "Bientraitance", question: "Ai-je tenu compte des préférences, du confort et de la dignité de la personne ?", bloc: "B1" },
    { id: "cr_communication", label: "Communication", question: "Ai-je écouté, reformulé et adapté mon langage ?", bloc: "B1" },
    { id: "cr_securite", label: "Sécurité", question: "Ai-je identifié les risques avant d'agir ?", bloc: "B2" },
    { id: "cr_limites", label: "Limites professionnelles", question: "Ai-je demandé de l'aide ou alerté lorsque la situation dépassait mon champ ?", bloc: "B2" },
    { id: "cr_transmission", label: "Transmission", question: "Ma transmission est-elle précise, objective, hiérarchisée et adressée à la bonne personne ?", bloc: "B3" },
    { id: "cr_reflexivite", label: "Réflexivité", question: "Ai-je analysé ce qui a fonctionné et ce que je modifierais ?", bloc: "B1" },
    { id: "cr_qualite", label: "Qualité / prévention", question: "Ai-je respecté les protocoles et participé à la prévention des risques ?", bloc: "B3" },
    { id: "cr_education", label: "Éducation à la santé", question: "Ai-je adapté mon message au public et vérifié sa compréhension ?", bloc: "B4" }
  ];

  // ---------- TIMELINE 3 ANS ----------
  const TIMELINE = [
    { annee: "Seconde", focus: "Découverte & gestes de base", centre: ["Découverte des publics, bientraitance, communication", "Hygiène, sécurité, alimentation", "Outils numériques et transmissions simples"], structure: ["Observer, accueillir, participer à des activités simples", "Réaliser des gestes de base sous tutorat"], objectifs: ["Posture professionnelle", "Écoute et respect", "Hygiène et sécurité", "Transmissions simples"] },
    { annee: "Première", focus: "Approfondissement & autonomie encadrée", centre: ["Soins d'hygiène et de confort", "Surveillance de l'état de santé", "Repas, environnement, équipe pluriprofessionnelle"], structure: ["Activités plus complètes avec accompagnement", "Participation aux transmissions et à l'organisation"], objectifs: ["Raisonnement professionnel", "Alerte et traçabilité", "Coordination", "Prévention des risques"] },
    { annee: "Terminale", focus: "Projet individualisé & autonomie", centre: ["Projet individualisé, conduite d'activités", "Éducation à la santé", "Démarche qualité, autonomie professionnelle"], structure: ["Participer à un projet individualisé", "Animer une activité", "Concevoir/évaluer une action de prévention"], objectifs: ["Analyse de besoins", "Conception et évaluation", "Adaptation", "Réflexivité"] }
  ];

  // ---------- SCÉNARIOS ----------
  // Structure enrichie : hints (3 niveaux), variantes, difficulté (1-3), competences [], remediation
  const SCENARIOS = [
    {
      id: "S1", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
      competences: ["C1.1","C1.2","C3.2"],
      titre: "Le refus de toilette de madame D.",
      description: "Madame D., 84 ans, se lève avec peine et repousse la bassine ce matin. Sa fille, assise au chevet, insiste pour qu'on la lave « comme d'habitude », tandis que l'aide-soignante évoque une fatigue inhabituelle. Tu es en PFMP et dois arbitrer avant le changement de service.",
      hints: ["Avant tout geste, entre en contact : annonce-toi, regarde la personne, écoute ce qu'elle exprime.","Un refus n'est pas un caprice : il peut traduire une douleur, une gêne ou une fatigue à comprendre.","Trace des faits datés, pas un jugement, et indique ce que l'équipe doit réévaluer."],
      variantes: [
        { titre: "Variante — La fille prend la décision", description: "La fille de madame D. exige la toilette complète et menace de se plaindre. Tu dois expliquer ton choix sans la braquer ni trahir la confidentialité." },
        { titre: "Variante — Douleur au moment du lever", description: "Madame D. accepte la toilette mais grimace quand on lui prend le bras. Le protocole prévoit d'alerter l'infirmier si la gêne persiste." }
      ],
      steps: [
        { q: "Tu entres dans la chambre : quelle est ta première action ?",
          choices: [
            { text: "Annoncer ta présence, t'installer à sa hauteur et lui demander comment elle se sent ce matin.", correct: true, feedback: "Juste : l'accueil et l'écoute viennent avant le geste ; en te mettant à sa hauteur, tu adoptes une posture professionnelle et tu recueilles les éléments décisifs avant d'agir." },
            { text: "Préparer le matériel de toilette et commencer sans attendre pour respecter le planning.", correct: false, feedback: "Séduisant : le planning impose une cadence et l'on veut éviter d'accumuler le retard. Mais commencer sans accord transforme un soin en contrainte et fait perdre l'information que la personne aurait donnée." },
            { text: "Demander à sa fille ce qu'elle souhaite, puis agir selon sa demande pour la rassurer.", correct: false, feedback: "Séduisant : la fille connaît sa mère et sa parole rassure l'équipe. Mais la personne reste décisionnaire ; l'entourage est un partenaire, pas un substitut de son consentement." },
            { text: "Observer la gêne à la marche depuis le seuil et prévenir l'infirmier avant de parler.", correct: false, feedback: "Séduisant : la gêne à la marche mérite une surveillance et l'infirmier doit être informé. Mais alerter avant tout échange prive la résidente d'une parole essentielle et retarde le soin." }
          ] },
        { q: "Madame D. dit : « Je ne veux pas me laver aujourd'hui, je suis trop fatiguée. » Que proposes-tu ?",
          choices: [
            { text: "Respecter le refus, proposer une toilette partielle plus tard et prévenir l'équipe pour réévaluer.", correct: true, feedback: "Juste : le refus est entendu et le compromis maintient le lien ; la fatigue signalée devient un élément de surveillance à transmettre." },
            { text: "Insister avec douceur en expliquant que l'hygiène évite les escarres et les infections.", correct: false, feedback: "Séduisant : prévenir les complications d'escarre est une vraie préoccupation de l'équipe. Mais une explication répétée malgré un refus clair devient une pression et détruit la confiance." },
            { text: "Laisser la toilette à la fille, qui saura mieux que toi la convaincre dans le calme.", correct: false, feedback: "Séduisant : la fille est un soutien précieux et son arrivée peut apaiser sa mère. Mais déléguer le soin à la famille déplace la responsabilité professionnelle et expose la résidente à un geste non évalué." },
            { text: "Faire un signalement immédiat pour refus de soin, sans explorer les raisons de ce refus.", correct: false, feedback: "Séduisant : un refus répété doit effectivement être tracé dans la démarche qualité. Mais le signaler avant d'en chercher la cause transforme une fatigue passagère en incident et braque la personne." }
          ] },
        { q: "Après l'accord pour une toilette partielle, que consignes-tu dans le dossier ?",
          choices: [
            { text: "« Toilette partielle acceptée, fatigue signalée, refus initial, à réévaluer ce soir par l'équipe. »", correct: true, feedback: "Juste : la transmission distingue les faits, le refus, l'action acceptée et la suite à donner, sans porter de jugement." },
            { text: "« Madame D. est difficile ce matin ; sa fille s'est mêlée de la toilette sans rien dire. »", correct: false, feedback: "Séduisant : le comportement et la présence de la fille ont marqué le service et méritent d'être évoqués. Mais « difficile » est un jugement : il faut décrire le geste refusé et les paroles entendues." },
            { text: "« Toilette refusée, aucune action réalisée, à voir avec l'infirmier demain. »", correct: false, feedback: "Séduisant : noter l'absence de soin et prévenir l'infirmier montre une vraie vigilance. Mais la toilette partielle a eu lieu et attendre demain laisse la fatigue sans surveillance ce soir." },
            { text: "« Toilette effectuée sans incident, rien de particulier à signaler pour la suite. »", correct: false, feedback: "Séduisant : une transmission rassurante évite d'alarmer l'équipe de nuit sans raison. Mais effacer le refus initial et la fatigue prive la collègue suivante des éléments d'adaptation." }
          ] }
      ],
      bilan: "Tu as arbitré entre la cadence du service et le respect du rythme de madame D., et entre l'avis de sa fille et sa propre parole. Point fort : tu as obtenu une toilette partielle sans contraindre. À retravailler : relier la fatigue observée à une surveillance et vérifier la réévaluation ce soir."
    },
    {
      id: "S2", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C2.1","C2.2","C3.2"],
      titre: "Vertiges de monsieur L. après le petit-déjeuner",
      description: "Monsieur L., 76 ans, diabétique, s'appuie sur la table et se dit étourdi au sortir du petit-déjeuner. L'infirmière est en réunion ; l'aide-soignante collègue pense à une simple fatigue et propose de le recoucher. Tu es en PFMP et dois décider de la première mesure.",
      hints: ["Sécurise d'abord l'environnement : éviter la chute prime sur toute autre préoccupation.","Observe, mesure, puis applique le protocole connu plutôt que d'improviser.","Une transmission utile situe l'heure, les chiffres, l'action et son effet."],
      variantes: [
        { titre: "Variante — Infirmier joignable", description: "L'infirmier répond au téléphone mais demande d'attendre la fin de sa réunion. Tu dois préciser ce que tu fais en attendant sans quitter monsieur L." },
        { titre: "Variante — Repas du soir", description: "Le même épisode survient avant le dîner, alors que le reste de l'équipe est au réfectoire et que le téléphone de l'infirmier sonne dans le vide." }
      ],
      steps: [
        { q: "Quelle est ta première action auprès de monsieur L. ?",
          choices: [
            { text: "Le faire asseoir sans le lever, sécuriser l'espace et prendre les constantes avant tout geste.", correct: true, feedback: "Juste : asseoir sans lever et dégager l'espace protège de la chute ; les constantes donnent à l'infirmier un élément décisif avant tout traitement." },
            { text: "Lui donner un sucre immédiatement, puis l'aider à regagner sa chambre en marchant lentement.", correct: false, feedback: "Séduisant : le diabète rend l'hypoglycémie probable et le sucre est le réflexe connu. Mais sans mesure ni avis, tu traites une cause supposée et le lever augmente le risque de chute." },
            { text: "Le recoucher comme le propose ta collègue et observer seul dans un quart d'heure.", correct: false, feedback: "Séduisant : recoucher quelqu'un qui se dit fatigué est un geste de confort immédiat. Mais installé seul, il peut glisser du lit et l'on perd les signes d'évolution des premières minutes." },
            { text: "Appeler l'infirmier en urgence et attendre son arrivée près de la porte du service.", correct: false, feedback: "Séduisant : l'alerte est indispensable et l'infirmier décidera mieux que toi. Mais te placer près de la porte éloigne la surveillance de la personne au moment où elle en a besoin." }
          ] },
        { q: "La glycémie est basse et le protocole prévoit un apport sucré. Que fais-tu ?",
          choices: [
            { text: "Appliquer le protocole prescrit, rester à ses côtés et alerter l'infirmier dès le geste fait.", correct: true, feedback: "Juste : le protocole cadre le geste, la surveillance maintient la sécurité et l'alerte permet à l'infirmier de compléter l'évaluation." },
            { text: "Servir un repas complet pour traiter la cause durablement et éviter une rechute.", correct: false, feedback: "Séduisant : un repas équilibré évite la rechute et rassure sur le plan nutritionnel. Mais la correction d'une hypoglycémie doit être rapide et adaptée, pas différée par un service." },
            { text: "Attendre la fin de la réunion de l'infirmier pour ne pas le déranger inutilement.", correct: false, feedback: "Séduisant : ménager la réunion de l'infirmier témoigne d'un respect de l'organisation. Mais une glycémie basse ne peut attendre ; le protocole autorise l'alerte immédiate devant un malaise." },
            { text: "Demander à la famille de lui donner le sucre qu'elle apporte habituellement.", correct: false, feedback: "Séduisant : la famille connaît ses habitudes et son sucre est déjà là. Mais un apport non prescrit, préparé par un proche, échappe au protocole et à la traçabilité du soin." }
          ] },
        { q: "Après l'épisode, que transmets-tu à l'équipe ?",
          choices: [
            { text: "Heure exacte, symptômes, glycémie, geste réalisé, évolution et nom de l'infirmier prévenu.", correct: true, feedback: "Juste : la transmission relie le moment, les chiffres, l'action et son effet, ce qui permet à l'équipe suivante de surveiller la récidive." },
            { text: "« Monsieur L. a eu un petit malaise, il est maintenant bien reposé. »", correct: false, feedback: "Séduisant : dire que tout est rentré dans l'ordre rassure l'équipe et évite d'alarmer. Mais sans heure ni chiffre, la collègue suivante ne peut ni comparer ni repérer une nouvelle baisse." },
            { text: "« Hypoglycémie corrigée, sucre donné, aucune suite à prévoir pour le prochain service. »", correct: false, feedback: "Séduisant : nommer l'hypoglycémie et le sucre montre que tu as suivi le protocole. Mais affirmer qu'il n'y a rien à prévoir supprime la surveillance nécessaire après un épisode." },
            { text: "« Vertiges au réveil, collègue présente, avis infirmier demandé, merci de vérifier le dossier. »", correct: false, feedback: "Séduisant : signaler la présence de la collègue et l'avis demandé donne une piste à l'équipe. Mais l'heure, la valeur mesurée et l'effet du geste manquent pour décider de la suite." }
          ] }
      ],
      bilan: "Tu as arbitré entre la rapidité du geste correctif et la prudence de la mesure préalable. Point fort : tu as sécurisé la personne et suivi le protocole. À retravailler : rendre chaque transmission datée et chiffrée pour que l'équipe repère une récidive."
    },
    {
      id: "S3", bloc: "B3", annee: "1", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C3.2","C3.3"],
      titre: "Relève du service : transmettre l'essentiel",
      description: "Il est 13 h 45 et la relève attend dans le couloir. Tu as noté une chute sans gravité, un repas mal pris et un collègue qui a sauté la désinfection des mains. L'aide-soignante sortante veut tout raconter par ordre chronologique, tu n'as que trois minutes.",
      hints: ["Une transmission orale se structure en quatre temps : situation, contexte, constat, suite proposée.","Même sans gravité, un événement doit être tracé pour la sécurité de la suite du service.","Un écart de protocole se traite d'abord en privé, avec des faits et sans accusation."],
      variantes: [
        { titre: "Variante — Relève tardive", description: "La collègue de l'après-midi arrive avec vingt minutes de retard et presse le passage. Tu dois garder les points de sécurité malgré la hâte." },
        { titre: "Variante — Désaccord sur la priorité", description: "Ta collègue estime que le repas mal pris est plus urgent que la chute. Tu dois défendre un ordre de transmission sans la braquer." }
      ],
      steps: [
        { q: "Quel cadre utilises-tu pour transmettre en trois minutes ?",
          choices: [
            { text: "Situation, contexte, constat et suite proposée, en commençant par ce qui engage la sécurité.", correct: true, feedback: "Juste : ce cadre donne un ordre et une recommandation ; commencer par la sécurité permet à la relève d'agir avant de tout savoir." },
            { text: "Le récit chronologique complet de la matinée, du lever du premier résident au dernier soin.", correct: false, feedback: "Séduisant : le récit complet semble garantir l'exhaustivité et rassure celui qui l'écoute. Mais trois minutes ne suffisent pas et l'essentiel se noie dans les détails." },
            { text: "Une liste des seuls problèmes, sans préciser ce qui a déjà été fait ni par qui.", correct: false, feedback: "Séduisant : éliminer ce qui va bien paraît efficace quand le temps manque. Mais sans actions déjà réalisées ni responsable identifié, la relève peut refaire un soin ou ne pas le faire." },
            { text: "La lecture intégrale du cahier de liaison, page par page, pour ne rien oublier.", correct: false, feedback: "Séduisant : le cahier est la trace officielle et le relire ensemble évite une omission. Mais le lire à voix haute consomme le temps de la relève et ne hiérarchise pas les risques." }
          ] },
        { q: "Un résident a chuté ce matin, sans douleur apparente. Que dis-tu à la relève ?",
          choices: [
            { text: "L'heure, le lieu, la cause supposée, l'état après, les actions faites et la surveillance à poursuivre.", correct: true, feedback: "Juste : une chute même bénigne se transmet avec les circonstances et la surveillance à tenir, pour décider d'un examen complémentaire." },
            { text: "« Il est tombé, mais il a dit que ça allait ; on n'a rien fait de spécial. »", correct: false, feedback: "Séduisant : rapporter les paroles du résident et l'absence de geste paraît fidèle à ce que tu as vu. Mais l'absence de douleur immédiate n'exclut pas une complication et rien n'est tracé." },
            { text: "« Chute sans gravité ce matin, l'infirmier est prévenu, la suite est dans le dossier. »", correct: false, feedback: "Séduisant : prévenir l'infirmier et renvoyer au dossier évite de surcharger la relève orale. Mais le dossier peut être lu plus tard et l'état après la chute reste à dire maintenant." },
            { text: "« Il a glissé dans le couloir, c'est la troisième fois cette semaine, il faut le signaler. »", correct: false, feedback: "Séduisant : la répétition des chutes est un vrai sujet de démarche qualité. Mais sans heure, état ni action réalisée, l'information arrive sans éléments pour décider ce soir." }
          ] },
        { q: "Tu vois un collègue ne pas respecter le protocole d'hygiène. Que fais-tu ?",
          choices: [
            { text: "Lui en parler en privé avec des faits précis, puis signaler à la hiérarchie si l'écart se répète.", correct: true, feedback: "Juste : l'échange privé respecte la personne tout en posant le fait ; la hiérarchie est saisie seulement si l'écart persiste." },
            { text: "Faire un signalement écrit immédiat à la direction, sans en parler au collègue.", correct: false, feedback: "Séduisant : écrire immédiatement montre une exigence de qualité et protège les résidents. Mais un signalement sans échange préalable fragilise le collectif et peut reposer sur une observation incomplète." },
            { text: "Intervenir devant le groupe pour que chacun entende rappeler la règle.", correct: false, feedback: "Séduisant : rappeler la règle devant tous peut éviter d'autres écarts dans l'équipe. Mais l'exposition publique humilie le collègue et installe un climat qui nuit à la démarche qualité." },
            { text: "Rappeler la règle à voix basse sur le moment, sans rien noter ni en parler ensuite.", correct: false, feedback: "Séduisant : un mot discret évite l'escalade et corrige le geste dans l'instant. Mais sans trace ni suivi, l'écart peut se répéter et rester invisible dans l'analyse des risques." }
          ] }
      ],
      bilan: "Tu as arbitré entre l'exhaustivité et la hiérarchisation des informations, et entre la discrétion et la remontée d'un écart. Point fort : ta trame en quatre temps rend la relève opérationnelle. À retravailler : distinguer le signalement d'un fait de la mise en cause d'une personne."
    },
    {
      id: "S4", bloc: "B4", annee: "T", contexte: "centre", duree: "20 min", difficulte: 3,
      competences: ["C4.1","C4.2","C4.3"],
      titre: "Action hydratation : comprendre avant de convaincre",
      description: "Tu prépares une action d'éducation à la santé sur l'hydratation pour les résidents d'un centre. La responsable veut une affiche pour demain, mais les aides-soignantes disent que plusieurs résidents refusent de boire par peur des toilettes. Tu dois trancher avant le comité.",
      hints: ["Analyse les besoins et les freins avant de choisir un support ou une date.","Une action utilise les leviers du quotidien et associe l'équipe qui accompagne les résidents.","Évaluer suppose des indicateurs observables, pas seulement un avis global."],
      variantes: [
        { titre: "Variante — Public adolescent", description: "L'action s'adresse à des adolescents en lycée : la peur des toilettes disparaît, mais la boisson sucrée et le déni de soif dominent." },
        { titre: "Variante — Contrainte de moyens", description: "La responsable impose une affiche unique et refuse tout atelier. Tu dois tout de même intégrer les freins recueillis dans le support." }
      ],
      steps: [
        { q: "Quelle est la première étape de ton action ?",
          choices: [
            { text: "Analyser connaissances, habitudes, capacités et freins des résidents avant toute conception.", correct: true, feedback: "Juste : l'analyse des besoins est la base de l'éducation à la santé ; elle évite une action qui parle dans le vide." },
            { text: "Choisir une affiche claire et la diffuser dans les chambres dès demain matin.", correct: false, feedback: "Séduisant : une affiche est visible et rassure la responsable qui attend un résultat rapide. Mais sans diagnostic des freins, le message restera sans effet sur ceux qui refusent de boire." },
            { text: "Fixer la date, le lieu et la durée pour réserver la salle avant le comité.", correct: false, feedback: "Séduisant : réserver la salle sécurise le calendrier et évite une annulation de dernière minute. Mais l'organisation vient après le contenu, sinon l'action répond à une contrainte et non à un besoin." },
            { text: "Demander à l'infirmier de prescrire une quantité d'eau identique pour tous les résidents.", correct: false, feedback: "Séduisant : une prescription rend la consommation d'eau mesurable et engage l'équipe soignante. Mais une quantité uniforme ignore les régimes, les capacités et la volonté de la personne." }
          ] },
        { q: "Tu apprends que la peur d'aller aux toilettes freine la boisson. Comment adaptes-tu l'action ?",
          choices: [
            { text: "Aborder cette peur, proposer des prises fractionnées et associer l'équipe pour accompagner les passages.", correct: true, feedback: "Juste : partir du frein réel rend le message crédible ; les prises fractionnées et l'équipe rendent la solution applicable." },
            { text: "Rappeler les apports recommandés sans tenir compte de la gêne exprimée par les résidents.", correct: false, feedback: "Séduisant : s'appuyer sur les recommandations officielles donne un cadre scientifique solide. Mais répéter une norme sans écouter la peur renforce le sentiment de ne pas être compris." },
            { text: "Reporter l'action à un comité suivant pour préparer un argumentaire plus convaincant.", correct: false, feedback: "Séduisant : attendre d'avoir un argumentaire abouti évite une action improvisée devant le comité. Mais différer laisse la gêne s'installer et la participation se dégrader." },
            { text: "Confier aux familles le soin de convaincre leurs proches de boire davantage.", correct: false, feedback: "Séduisant : la famille est un relais affectif puissant et connaît les habitudes de son proche. Mais l'éducation à la santé est conduite par l'équipe ; la déléguer rend l'action dépendante des proches." }
          ] },
        { q: "Comment évalues-tu l'action après sa mise en œuvre ?",
          choices: [
            { text: "Comparer participation, consommation d'eau et retours des résidents et de l'équipe, puis ajuster.", correct: true, feedback: "Juste : des indicateurs simples et observables permettent de mesurer l'effet et de réorienter l'action." },
            { text: "Demander à chacun s'il a aimé l'atelier et classer les réponses en trois catégories.", correct: false, feedback: "Séduisant : la satisfaction donne un retour immédiat et valorise l'équipe qui a animé. Mais aimer un atelier ne dit pas si les personnes boivent davantage dans la durée." },
            { text: "Mesurer uniquement le nombre de verres distribués pendant la séance, sans autre indicateur.", correct: false, feedback: "Séduisant : compter les verres fournit un chiffre simple à collecter après la séance. Mais distribuer n'est pas consommer et l'indicateur ne capte ni le frein ni son évolution." },
            { text: "Attendre le prochain bilan de l'établissement pour juger de l'effet global de l'action.", correct: false, feedback: "Séduisant : attendre un bilan institutionnel évite de conclure trop vite sur une action récente. Mais sans mesures intermédiaires, tu ne peux plus corriger l'action en cours." }
          ] }
      ],
      bilan: "Tu as arbitré entre la demande d'une affiche immédiate et l'analyse des freins réels, puis entre la satisfaction déclarée et des indicateurs observables. Point fort : l'action part de la peur des résidents. À retravailler : fixer dès la conception les mesures qui permettront d'ajuster."
    },
    {
      id: "S5", bloc: "B1", annee: "2", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C1.1","C1.2","C1.4"],
      titre: "Atelier mémoire : garder le groupe ensemble",
      description: "Tu animes un atelier mémoire pour six résidents. Monsieur P., agité, interrompt chaque consigne tandis que madame S., en retrait, ne dit rien et regarde la porte. La collègue présente propose d'écourter la séance pour éviter l'agitation générale.",
      hints: ["Une animation s'ajuste en direct : l'attention est un équilibre fragile.","Donner un rôle occupe sans contraindre et préserve la dignité de la personne.","Un retrait silencieux est une information à observer et à transmettre."],
      variantes: [
        { titre: "Variante — Deux agitations", description: "Deux résidents interrompent en même temps et le groupe rit. Tu dois répartir les rôles sans transformer l'atelier en spectacle." },
        { titre: "Variante — Résident absent", description: "Madame S. quitte la salle en silence au bout de cinq minutes. Tu dois décider qui va la chercher sans abandonner le groupe." }
      ],
      steps: [
        { q: "Monsieur P. interrompt sans cesse : que fais-tu ?",
          choices: [
            { text: "L'accueillir, lui confier la distribution des cartes, puis recentrer le groupe sur la consigne.", correct: true, feedback: "Juste : le rôle valorise sa participation et canalise son énergie ; le recentrage garde le cadre pour les autres." },
            { text: "Lui demander fermement de se taire jusqu'à la fin de l'atelier devant tout le groupe.", correct: false, feedback: "Séduisant : poser une limite nette peut calmer un groupe qui se disperse. Mais un silence imposé sans alternative transforme l'agitation en humiliation et coupe la relation." },
            { text: "Écourter la séance comme le propose ta collègue pour éviter l'agitation générale.", correct: false, feedback: "Séduisant : écourter évite une montée d'agitation et protège la sécurité de tous. Mais priver les cinq autres résidents de l'activité traite le symptôme et non le besoin de monsieur P." },
            { text: "L'installer à l'écart avec une autre activité jusqu'à la fin de l'atelier, sans un mot.", correct: false, feedback: "Séduisant : une activité individuelle respecte son rythme et soulage le groupe. Mais l'éloigner sans le comprendre risque d'aggraver son agitation et de le faire sentir exclu." }
          ] },
        { q: "Madame S. reste silencieuse et regarde la porte : que fais-tu ?",
          choices: [
            { text: "L'inviter sans pression, lui proposer une tâche simple et observer son état pour le transmettre.", correct: true, feedback: "Juste : l'invitation douce respecte son rythme, et l'observation distingue une tristesse d'un simple désintérêt à transmettre." },
            { text: "La laisser tranquille pour ne pas la gêner, en notant seulement son absence de participation.", correct: false, feedback: "Séduisant : respecter son silence est une forme de bientraitance et évite la pression. Mais noter seulement qu'elle ne participe pas manque le signe de mal-être à faire remonter." },
            { text: "Insister pour qu'elle réponde à la question posée au groupe, afin de la faire participer.", correct: false, feedback: "Séduisant : donner la parole à chacun est une règle d'animation qui valorise la personne. Mais une réponse imposée à quelqu'un qui regarde la porte transforme l'inclusion en exposition." },
            { text: "Demander à la famille de venir la chercher, car elle semble vouloir partir.", correct: false, feedback: "Séduisant : son regard vers la porte peut exprimer l'envie de rentrer et la famille est un soutien. Mais décider à sa place devance sa parole : un échange avec elle vient avant l'appel." }
          ] },
        { q: "À la fin de l'atelier, monsieur P. réclame de recommencer demain. Que réponds-tu ?",
          choices: [
            { text: "Valoriser son engagement, expliquer le programme prévu et transmettre sa demande à l'équipe.", correct: true, feedback: "Juste : la demande est entendue sans engagement unilatéral ; le projet d'activité se construit avec l'équipe." },
            { text: "Promettre une nouvelle séance demain pour ne pas le décevoir, sans en parler à l'équipe.", correct: false, feedback: "Séduisant : une réponse positive entretient la motivation et évite une déception immédiate. Mais promettre sans accord de l'équipe crée un engagement que tu ne pourras peut-être pas tenir." },
            { text: "Rappeler qu'il a interrompu le groupe et qu'il doit d'abord se calmer.", correct: false, feedback: "Séduisant : rappeler le cadre rappelle les règles collectives et protège les autres résidents. Mais après un atelier réussi, cette remarque ramène l'attention sur la faute et éteint son élan." },
            { text: "Proposer qu'il anime lui-même la séance de demain, sans prévenir l'équipe.", correct: false, feedback: "Séduisant : confier l'animation valorise son rôle et développe son autonomie. Mais décider seul un changement de programme empiète sur la coordination de l'équipe." }
          ] }
      ],
      bilan: "Tu as arbitré entre le cadre collectif et l'élan de monsieur P., et entre le respect du silence de madame S. et l'attention à son mal-être. Point fort : le rôle donné a transformé une interruption en participation. À retravailler : transmettre les signes discrets sans devancer la parole de la personne."
    },
    {
      id: "S6", bloc: "B2", annee: "1", contexte: "structure", duree: "14 min", difficulte: 2,
      competences: ["C2.1","C2.4","C3.2"],
      titre: "Repas mixé de madame R. : la toux au milieu",
      description: "Tu aides madame R. à déjeuner. Elle présente une dysphagie et un régime mixé ; le plateau arrive avec une texture qui semble plus liquide que d'habitude. L'aide-soignante de table dit qu'il ne faut pas la faire attendre. À la troisième bouchée, madame R. tousse.",
      hints: ["Avant le repas, vérifie l'identité, la prescription, la texture et la posture.","Une toux pendant un repas mixé est un signe d'inhalation à traiter immédiatement.","La transmission relie la quantité prise, l'incident et son évolution."],
      variantes: [
        { titre: "Variante — Refus de manger", description: "Madame R. repousse la cuillère et tourne la tête. Tu dois distinguer un refus de texture d'une douleur sans forcer la prise." },
        { titre: "Variante — Plateau erroné", description: "Le plateau porte le nom d'une autre résidente, mais la texture correspond à madame R. Tu dois décider avant de servir." }
      ],
      steps: [
        { q: "Avant de servir le repas, que vérifies-tu en priorité ?",
          choices: [
            { text: "Identité, prescription de régime, texture, position assise et environnement calme.", correct: true, feedback: "Juste : ce contrôle croise la prescription et l'installation, ce qui protège la déglutition et évite une erreur de plateau." },
            { text: "La texture seulement, pour éviter de retarder le service des autres plateaux.", correct: false, feedback: "Séduisant : la texture est le point sensible de la dysphagie et la vérifier est indispensable. Mais sans identifier la personne ni confirmer la prescription, tu peux servir le bon repas à la mauvaise table." },
            { text: "La présence de la collègue pour partager la tâche et finir le service plus vite.", correct: false, feedback: "Séduisant : travailler à deux fluidifie le service et limite l'attente des autres résidents. Mais la rapidité ne remplace pas la vérification individuelle de l'identité et de la position." },
            { text: "Les quantités indiquées par la famille la veille, pour respecter ses habitudes alimentaires.", correct: false, feedback: "Séduisant : la famille connaît les habitudes et sa parole aide à adapter la portion. Mais ces indications ne valent pas prescription et ne dispensent pas de vérifier la texture prescrite." }
          ] },
        { q: "À la troisième bouchée, madame R. tousse. Que fais-tu ?",
          choices: [
            { text: "Arrêter la prise, vérifier sa position, la laisser se rétablir et alerter si la toux revient.", correct: true, feedback: "Juste : arrêter et observer est la règle face à une toux ; la position et la surveillance limitent le risque d'inhalation." },
            { text: "Continuer plus lentement pour terminer le plateau avant la fin du service.", correct: false, feedback: "Séduisant : finir le plateau évite le gaspillage et respecte le rythme du service. Mais une toux est un signal d'aspiration : poursuivre augmente le risque d'étouffement." },
            { text: "Lui donner un verre d'eau pour faire passer la bouchée et reprendre aussitôt.", correct: false, feedback: "Séduisant : boire pour dégager la gorge est un réflexe naturel et souvent efficace. Mais en cas de dysphagie, l'eau peut passer dans les voies respiratoires et aggraver la situation." },
            { text: "L'installer en position allongée pour la détendre et reprendre le repas cinq minutes plus tard.", correct: false, feedback: "Séduisant : allonger quelqu'un qui tousse peut sembler reposant après l'effort du repas. Mais la position allongée favorise le reflux et l'inhalation : il faut garder la tête haute." }
          ] },
        { q: "Après le repas, que transmets-tu ?",
          choices: [
            { text: "Quantité ingérée, toux observée, comportement, évolution et personne alertée si besoin.", correct: true, feedback: "Juste : quantité, incident et évolution permettent à l'équipe de juger de la déglutition et de la suite à donner." },
            { text: "« Madame R. a bien mangé son plateau, rien à signaler pour ce service. »", correct: false, feedback: "Séduisant : une formule courte rassure et évite de charger le dossier. Mais elle efface la toux et la quantité réellement prise, deux éléments décisifs pour le prochain repas." },
            { text: "« Toux à la troisième bouchée, repas interrompu, à voir avec l'infirmier demain. »", correct: false, feedback: "Séduisant : noter la toux et prévenir l'infirmier montre une surveillance active. Mais sans quantité ni état après l'incident, la transmission ne permet pas de décider ce soir." },
            { text: "« Texture trop liquide signalée à la collègue, plateau changé, repas terminé. »", correct: false, feedback: "Séduisant : signaler la texture et le changement de plateau aide à corriger le circuit des repas. Mais l'incident de déglutition de la résidente passe au second plan derrière la logistique." }
          ] }
      ],
      bilan: "Tu as arbitré entre la cadence du service et la sécurité de la déglutition, puis entre la simplicité d'une transmission et sa précision. Point fort : tu as arrêté le repas dès la toux. À retravailler : consigner la quantité et l'évolution pour éclairer le prochain service."
    },
    {
      id: "S7", bloc: "B1", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
      competences: ["C1.1","C1.2","C1.3"],
      titre: "Retour à domicile : le projet de monsieur A.",
      description: "Monsieur A., 82 ans, est en EHPAD depuis trois mois et répète qu'il veut rentrer chez lui. Sa fille, présente pour la réunion d'équipe, affirme que la maison n'est plus adaptée. L'ergothérapeute propose une visite à domicile, mais l'équipe craint de donner de l'espoir : tu dois apporter des éléments à la discussion.",
      hints: ["Le projet individualisé part des souhaits exprimés par la personne, pas d'une décision prise à sa place.","Une demande ne se juge pas sans évaluation de l'autonomie et du logement.","Accompagner l'attente, c'est expliquer les étapes et transmettre ce que la personne ressent."],
      variantes: [
        { titre: "Variante — Famille opposée", description: "La fille refuse toute visite du domicile et demande une sortie définitive immédiate. Tu dois entendre sa charge sans faire taire le souhait de son père." },
        { titre: "Variante — Délai imposé", description: "La direction annonce un délai de six mois avant tout essai. Tu dois accompagner l'attente sans promettre une date." }
      ],
      steps: [
        { q: "Comment recueilles-tu les éléments avant la réunion ?",
          choices: [
            { text: "Entretien individuel : souhaits, craintes, habitudes antérieures et observation de son autonomie.", correct: true, feedback: "Juste : l'entretien met la personne au centre du projet et l'observation apporte des éléments objectifs à l'équipe." },
            { text: "Demander à sa fille de résumer ses souhaits, puisqu'elle le connaît mieux que l'équipe.", correct: false, feedback: "Séduisant : la fille accompagne son père depuis des mois et sa description est précieuse. Mais sa parole ne remplace pas la sienne : le projet se construit avec la personne." },
            { text: "Consulter uniquement le dossier médical pour décider de la faisabilité du retour.", correct: false, feedback: "Séduisant : le dossier contient les antécédents et les prescriptions nécessaires à toute décision. Mais il ne dit rien des souhaits, des habitudes et de la motivation qui fondent le projet." },
            { text: "Lui expliquer franchement les risques du maintien à domicile pour éviter un faux espoir.", correct: false, feedback: "Séduisant : dire les risques est une forme d'honnêteté et évite de promettre un retour irréaliste. Mais conclure sans évaluer transforme un souhait en impossibilité et coupe le dialogue." }
          ] },
        { q: "En réunion, que proposes-tu pour faire avancer le projet ?",
          choices: [
            { text: "Une évaluation de l'autonomie à domicile, puis un essai encadré avec un accompagnement renforcé.", correct: true, feedback: "Juste : l'évaluation puis l'essai encadré permettent de confronter le souhait à la réalité sans le rejeter d'emblée." },
            { text: "Un retour immédiat dans son ancien logement, sans attendre l'évaluation du domicile.", correct: false, feedback: "Séduisant : respecter une volonté claire est la priorité et le retour est souhaité depuis longtemps. Mais sans évaluation, tu exposes monsieur A. à un domicile devenu dangereux." },
            { text: "Une sortie définitive décidée par la fille, qui connaît les lieux et les habitudes de son père.", correct: false, feedback: "Séduisant : la fille gère déjà les démarches et sa décision paraît pragmatique. Mais l'équipe doit porter le projet de la personne, pas déléguer l'arbitrage à la famille." },
            { text: "L'inscription sur une liste d'attente, en attendant que la famille change d'avis.", correct: false, feedback: "Séduisant : la liste d'attente évite de s'engager trop vite et laisse le temps à chacun de réfléchir. Mais sans évaluation ni étapes, l'attente devient une réponse sans contenu pour monsieur A." }
          ] },
        { q: "Monsieur A. est déçu d'attendre. Que fais-tu lors de ton prochain échange ?",
          choices: [
            { text: "Écouter sa déception, expliquer les étapes, le rassurer et transmettre ses ressentis à l'équipe.", correct: true, feedback: "Juste : expliquer les étapes respecte sa dignité ; transmettre son ressenti permet à l'équipe d'adapter l'accompagnement." },
            { text: "Lui demander de patienter sans explication, pour ne pas lui donner d'espoir avant la réunion.", correct: false, feedback: "Séduisant : garder le silence jusqu'à la décision évite une annonce qui pourrait être démentie. Mais sans explication, l'attente devient une exclusion et la confiance se dégrade." },
            { text: "Lui annoncer une date précise pour le rassurer, même si l'équipe ne l'a pas encore validée.", correct: false, feedback: "Séduisant : une date précise soulage l'incertitude et donne quelque chose à attendre. Mais l'annoncer sans validation engage l'équipe et expose la personne à un nouveau démenti." },
            { text: "Lui proposer de ne plus évoquer le retour, pour éviter de raviver sa tristesse à chaque visite.", correct: false, feedback: "Séduisant : éviter le sujet peut protéger une personne qui souffre de cet éloignement. Mais faire taire le projet revient à reprendre la décision et isole monsieur A. dans sa tristesse." }
          ] }
      ],
      bilan: "Tu as arbitré entre le souhait de monsieur A. et les réserves de sa fille, et entre la prudence de l'équipe et la nécessité d'avancer. Point fort : tu as fait entendre sa voix avant tout autre avis. À retravailler : expliquer les délais sans promesse et faire circuler son ressenti dans l'équipe."
    },
    {
      id: "S8", bloc: "B2", annee: "T", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C2.1","C2.2","C3.3"],
      titre: "Lever sécurisé de M. T. et prévention des chutes",
      description: "M. T., 78 ans, a des troubles de l'équilibre et veut aller aux toilettes pendant que tu ranges encore le chariot. Sa fille, présente, le presse de marcher sans aide, alors que le carrelage vient d'être lavé.",
      hints: ["Indice 1 : la sécurité commence avant le lever, avec le sol, les chaussures, l'aide technique et les paroles.","Indice 2 : si le corps vacille, tu stabilises d'abord, puis tu réévalues au lieu de poursuivre le trajet.","Indice 3 : note le vacillement, les circonstances et la décision pour nourrir la démarche qualité."],
      variantes: [
        { titre: "Variante — famille pressée", description: "La fille de M. T. insiste pour qu'il marche sans déambulateur, car elle le juge encore capable. Tu dois expliquer ton choix sans la braquer." },
        { titre: "Variante — imprévu au moment du lever", description: "Le déambulateur a été prêté à un autre résident. Tu dois réévaluer le transfert avec le matériel disponible et l'aide d'un collègue." }
      ],
      steps: [
        { q: "Avant le lever, comment arbitrer entre l'urgence de M. T. et la sécurité ?",
          choices: [
            { text: "Sécuriser le sol et les chaussures, expliquer le geste, vérifier l'aide, puis lever avec lui.", correct: true, feedback: "Juste : tu as arbitré entre l'urgence et la prévention des chutes en sécurisant l'environnement, l'explication et l'équipement ; la pression familiale ne dispense pas de ces vérifications." },
            { text: "Respecter son autonomie : le laisser se lever seul comme il le demande, en restant tout près.", correct: false, feedback: "Séduisant : l'autonomie de M. T. et la demande de sa fille incitent à le laisser agir. Mais ses troubles de l'équilibre sur un sol humide exposent à une chute évitable." },
            { text: "Attendre le collègue qui connaît ce résident, pour ne pas multiplier les intervenants sur ce transfert.", correct: false, feedback: "Séduisant : faire intervenir un collègue expérimenté limite les erreurs et respecte l'habitude du service. Mais l'attente retarde le besoin pressant et diffère les vérifications que tu peux faire." },
            { text: "Le lever sans attendre pour éviter une incontinence, en contrôlant le sol du regard en marchant.", correct: false, feedback: "Séduisant : répondre vite à une envie d'aller aux toilettes évite l'inconfort et la honte. Mais un contrôle du sol en marchant ne remplace pas une préparation avant le lever." }
          ] },
        { q: "Pendant le transfert, M. T. vacille. Quel est le bon réflexe ?",
          choices: [
            { text: "Le stabiliser contre toi, le rassurer, le ramener au fauteuil, puis réévaluer avec l'équipe.", correct: true, feedback: "Juste : face au vacillement, la priorité est la sécurisation puis la réévaluation ; revenir au fauteuil permet de comprendre la cause avant de reprendre." },
            { text: "Le laisser se rattraper seul pour préserver son autonomie, en tendant simplement le bras.", correct: false, feedback: "Séduisant : préserver l'autonomie reste une valeur forte en accompagnement. Mais un déséquilibre installé ne se corrige pas seul et la main tendue arrive trop tard." },
            { text: "Poursuivre jusqu'aux toilettes en le tenant fermement, car le trajet est court et le besoin urgent.", correct: false, feedback: "Séduisant : le besoin est réel et le soutien physique peut sembler suffisant sur un court trajet. Mais poursuivre après un vacillement expose à une chute et à une lésion." },
            { text: "Partir chercher le déambulateur en lui demandant de patienter debout, le temps d'un geste rapide.", correct: false, feedback: "Séduisant : aller chercher l'aide technique montre la volonté de bien faire. Mais le laisser debout seul aggrave le risque alors que tu peux le stabiliser maintenant." }
          ] },
        { q: "Après l'épisode, que transmets-tu dans le dossier de suivi ?",
          choices: [
            { text: "Le vacillement, l'heure, le lieu, les actions menées et la demande de réévaluation de l'aide.", correct: true, feedback: "Juste : transmettre les circonstances, les actions et la recommandation alimente la démarche qualité et permet d'adapter l'aide technique." },
            { text: "Une phrase courte sur l'incident, en laissant le détail à l'infirmière qui a vu le résident.", correct: false, feedback: "Séduisant : déléguer le détail à l'infirmière évite de surcharger le dossier. Mais sans trace écrite, l'épisode reste invisible pour l'équipe et la prévention échoue." },
            { text: "Seulement la réussite du transfert, pour ne pas inquiéter la famille lors de la prochaine visite.", correct: false, feedback: "Séduisant : préserver la sérénité de la famille est une préoccupation légitime. Mais taire un vacillement empêche d'adapter le projet individualisé et la surveillance." },
            { text: "L'avis de la fille sur l'autonomie de son père, en légitimant sa demande de marche sans aide.", correct: false, feedback: "Séduisant : l'avis de la famille participe au projet de vie de la personne. Mais le relater comme une validation masque l'observation professionnelle et le risque." }
          ] }
      ],
      bilan: "Tu as arbitré entre l'urgence d'un besoin et la prévention des chutes, puis entre autonomie et sécurisation. Point fort : l'environnement a été vérifié avant le lever. À retravailler : la traçabilité des vacillements et la réévaluation de l'aide technique."
    },
    {
      id: "S9", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C2.3","C3.2","C3.3"],
      titre: "Bionettoyage d'une chambre infectée : ordre et traçabilité",
      description: "La chambre de Mme D., porteuse d'une infection, doit être bionettoyée avant 10 heures. Une collègue débordée te demande d'aider au lever d'un autre résident au même moment : tu dois arbitrer entre le protocole et l'entraide.",
      hints: ["Indice 1 : la prise de poste commence par la lecture du protocole et le choix des équipements de protection.","Indice 2 : le retrait des équipements suit un ordre précis, puis le lavage des mains reste indispensable.","Indice 3 : une action tracée dans l'outil numérique protège l'équipe et sert la démarche qualité."],
      variantes: [
        { titre: "Variante — matériel manquant", description: "Le désinfectant habituel est en rupture. Tu dois vérifier la fiche du produit de remplacement avant de l'employer dans cette chambre." },
        { titre: "Variante — collègue pressé", description: "Un collègue veut entrer sans équipement pour récupérer un dossier. Tu dois lui rappeler le circuit sans le braquer." }
      ],
      steps: [
        { q: "Quelle est ta première action avant d'entrer dans la chambre ?",
          choices: [
            { text: "Lire la procédure, revêtir les équipements adaptés et préparer le matériel dédié à la chambre.", correct: true, feedback: "Juste : la lecture de la procédure et le bon équipement protègent la résidente, toi et l'équipe ; l'urgence du lever ne supprime pas cette étape." },
            { text: "Entrer avec le matériel du chariot commun pour gagner du temps sur le créneau de 10 heures.", correct: false, feedback: "Séduisant : utiliser le chariot commun fait gagner quelques minutes et paraît cohérent. Mais le matériel dédié évite de transporter l'infection vers les autres résidents." },
            { text: "Demander à l'infirmière de choisir elle-même les produits, car la procédure est de sa responsabilité.", correct: false, feedback: "Séduisant : l'infirmière connaît la situation infectieuse et sa validation rassure. Mais le bionettoyage est de ta compétence et sa délégation retarde l'action." },
            { text: "Prévenir le collègue que tu l'aides d'abord pour le lever, quitte à commencer le nettoyage plus tard.", correct: false, feedback: "Séduisant : aider un collègue débordé renforce le travail d'équipe. Mais repousser un bionettoyage programmé laisse la chambre contaminée plus longtemps." }
          ] },
        { q: "Une fois le nettoyage terminé, quel enchaînement choisis-tu ?",
          choices: [
            { text: "Désinfecter le matériel, retirer les équipements dans l'ordre, se laver les mains, puis tracer.", correct: true, feedback: "Juste : la désinfection du matériel, le retrait ordonné et le lavage des mains rompent la chaîne de transmission avant la traçabilité." },
            { text: "Retirer les gants en premier, puis ranger le chariot, le lavage des mains pouvant attendre un peu.", correct: false, feedback: "Séduisant : retirer les gants soulage immédiatement et le rangement paraît prioritaire. Mais les gants souillés contaminent les mains et le lavage ne peut être différé." },
            { text: "Tracer l'action immédiatement, puis retirer les équipements une fois arrivée dans le couloir.", correct: false, feedback: "Séduisant : tracer vite sécurise le dossier et libère l'attention. Mais tracer encore équipé reporte le lavage des mains et contamine le support de saisie." },
            { text: "Laisser le matériel à l'air libre pour qu'il sèche, en notant simplement la fin de l'intervention.", correct: false, feedback: "Séduisant : le séchage à l'air paraît simple et évite de manipuler le matériel. Mais sans désinfection, il reste un réservoir de micro-organismes pour la chambre suivante." }
          ] },
        { q: "Que consignes-tu dans l'outil numérique de suivi ?",
          choices: [
            { text: "La date, l'heure, la chambre, la procédure appliquée et tout incident constaté pendant l'action.", correct: true, feedback: "Juste : tracer la date, la procédure et les incidents rend l'action vérifiable et nourrit la démarche qualité." },
            { text: "Seulement la mention « chambre faite », car les détails de la procédure sont connus de l'équipe.", correct: false, feedback: "Séduisant : une mention courte va vite et suffit quand la routine est connue. Mais sans détail, aucune vérification n'est possible en cas d'infection nosocomiale." },
            { text: "Un compte rendu oral à la relève, la saisie numérique étant réservée aux soins de la personne.", correct: false, feedback: "Séduisant : le compte rendu oral transmet immédiatement l'information à la relève. Mais sans trace numérique, l'information disparaît dès le changement d'équipe." },
            { text: "Le nom du produit utilisé uniquement, le registre papier du service portant les autres détails.", correct: false, feedback: "Séduisant : noter le produit est utile pour la sécurité et la traçabilité. Mais le registre papier reste hors de l'outil partagé et l'équipe ne le consulte pas à temps." }
          ] }
      ],
      bilan: "Tu as arbitré entre le respect strict du protocole et l'entraide attendue, puis entre rapidité et traçabilité. Point fort : le matériel dédié et l'ordre de retrait ont été respectés. À retravailler : la remontée des incidents dans l'outil numérique."
    },
    {
      id: "S10", bloc: "B4", annee: "1", contexte: "centre", duree: "15 min", difficulte: 2,
      competences: ["C4.1","C4.2","C4.3"],
      titre: "Atelier d'éducation à la santé : l'hygiène des mains",
      description: "Tu animes un atelier de quinze minutes sur l'hygiène des mains. Le responsable réclame un message très court, mais plusieurs résidents âgés ne saisissent pas la consigne de friction. Tu dois concevoir, animer puis évaluer l'action.",
      hints: ["Indice 1 : analyse d'abord le public et son niveau de compréhension avant de choisir le contenu.","Indice 2 : un exemple concret et une vérification de la compréhension valent mieux qu'une consigne répétée.","Indice 3 : l'évaluation porte sur les gestes observés et le retour des participants, pas sur la seule présence."],
      variantes: [
        { titre: "Variante — public très hétérogène", description: "Certains résidents sont autonomes, d'autres ont des troubles cognitifs. Tu dois adapter un seul message à deux niveaux de compréhension." },
        { titre: "Variante — imprévu matériel", description: "Le gel hydroalcoolique prévu vient à manquer. Tu dois maintenir l'atelier avec un autre support de démonstration." }
      ],
      steps: [
        { q: "Comment prépares-tu cet atelier ?",
          choices: [
            { text: "Définir un objectif précis, analyser les besoins du groupe, prévoir une démonstration et du matériel simple.", correct: true, feedback: "Juste : analyser le public puis construire un objectif et une démonstration concrète rend l'action d'éducation à la santé réellement accessible." },
            { text: "Recopier une affiche institutionnelle sans l'adapter : elle fait foi et évite toute erreur de contenu.", correct: false, feedback: "Séduisant : reprendre un support officiel sécurise le contenu et fait gagner du temps. Mais sans adaptation aux besoins du groupe, le message reste abstrait." },
            { text: "Laisser le responsable choisir le message, car il connaît mieux que toi les attentes du centre.", correct: false, feedback: "Séduisant : le responsable porte la responsabilité pédagogique et sa consigne doit être respectée. Mais l'analyse des besoins et la conception de l'action relèvent de ta compétence." },
            { text: "Prévoir un long exposé théorique, pour être sûr que l'information soit complète et scientifique.", correct: false, feedback: "Séduisant : un exposé complet garantit l'exactitude des informations transmises. Mais quinze minutes avec ce public appellent une démonstration courte, pas une théorie." }
          ] },
        { q: "Pendant l'atelier, un résident ne comprend pas la consigne. Que fais-tu ?",
          choices: [
            { text: "Reformuler avec un geste concret, vérifier sa compréhension, puis reprendre le rythme du groupe.", correct: true, feedback: "Juste : reformuler, montrer le geste et vérifier la compréhension permettent à chacun d'accéder au même objectif sans le mettre à l'écart." },
            { text: "Répéter la même phrase plus fort, car la consigne est réglementaire et ne doit pas être modifiée.", correct: false, feedback: "Séduisant : la consigne doit rester conforme et la répétition témoigne de ta patience. Mais monter le ton ne lève pas une incompréhension et peut gêner le résident." },
            { text: "Passer au suivant pour ne pas retarder l'atelier, en prévoyant un rattrapage individuel après.", correct: false, feedback: "Séduisant : garder le rythme protège la durée de l'atelier et le rattrapage paraît prévenant. Mais le résident repart avec une consigne qu'il n'a pas saisie." },
            { text: "Demander à un autre résident de lui expliquer, pour valoriser l'entraide entre les participants.", correct: false, feedback: "Séduisant : l'entraide entre résidents est précieuse et valorise le groupe. Mais le pair peut transmettre une version approximative du geste, à vérifier ensuite." }
          ] },
        { q: "Comment évalues-tu l'action à la fin de l'atelier ?",
          choices: [
            { text: "Observer les gestes reproduits, recueillir le retour des participants et ajuster la prochaine séance.", correct: true, feedback: "Juste : observer les gestes et recueillir le retour permettent d'évaluer l'action et de l'améliorer, au cœur de la compétence." },
            { text: "Compter uniquement les personnes présentes, la fréquentation prouvant l'intérêt de l'action menée.", correct: false, feedback: "Séduisant : la fréquentation est un indicateur simple et une salle pleine encourage l'équipe. Mais elle ne dit rien de la compréhension ni des gestes réalisés." },
            { text: "Demander au responsable de valider l'atelier, sa signature suffisant à attester de la qualité.", correct: false, feedback: "Séduisant : la validation du responsable rassure et cadre l'action. Mais une signature ne mesure pas l'effet de l'atelier sur les résidents." },
            { text: "Remettre un questionnaire écrit à chaque résident, malgré les difficultés de lecture du groupe.", correct: false, feedback: "Séduisant : un questionnaire donne une trace écrite et paraît rigoureux. Mais dans ce groupe, l'écrit exclut ceux qui ont précisément besoin d'un autre format." }
          ] }
      ],
      bilan: "Tu as arbitré entre un message simple et l'exigence scientifique, puis entre le rythme du groupe et l'accès de chacun. Point fort : la démonstration concrète a été prévue dès la conception. À retravailler : les indicateurs d'évaluation observés pendant l'atelier."
    },
    {
      id: "S11", bloc: "B1", annee: "2", contexte: "centre", duree: "12 min", difficulte: 2,
      competences: ["C1.1","C1.2"],
      titre: "Échange avec la fille de Mme B. : écoute et limites professionnelles",
      description: "La fille de Mme B. arrive très inquiète après une chute de sa mère. Elle réclame des détails médicaux et veut consulter le dossier, alors que l'infirmière est en visite et que tu n'as aucune information validée à transmettre.",
      hints: ["Indice 1 : l'écoute et l'empathie viennent avant la réponse, sans empiéter sur le rôle de l'infirmière.","Indice 2 : rassurer avec des faits observables vaut mieux qu'une interprétation médicale.","Indice 3 : le dossier reste confidentiel : expliquer la règle puis orienter vers la personne habilitée."],
      variantes: [
        { titre: "Variante — famille en colère", description: "La fille élève la voix et accuse l'équipe de ne pas assez surveiller sa mère. Tu dois garder une posture calme sans entrer en opposition." },
        { titre: "Variante — demande devant les autres", description: "La conversation a lieu dans le salon, devant les autres résidents. Tu dois protéger la confidentialité sans braquer la famille." }
      ],
      steps: [
        { q: "Comment réponds-tu à son inquiétude ?",
          choices: [
            { text: "Écouter sans interrompre, rassurer avec des faits observés, puis orienter vers l'infirmière.", correct: true, feedback: "Juste : l'écoute, les faits observables et l'orientation vers l'infirmière respectent la confidentialité tout en traitant l'émotion de la famille." },
            { text: "Donner immédiatement les résultats et le diagnostic connus, pour calmer son inquiétude.", correct: false, feedback: "Séduisant : transmettre ce que tu sais peut sembler rassurer. Mais un diagnostic sans habilitation peut être mal compris et dépasse ton rôle." },
            { text: "Répondre que ce n'est pas ton rôle et renvoyer la discussion à plus tard, sans plus d'explication.", correct: false, feedback: "Séduisant : rappeler ton rôle évite de t'engager au-delà de ta compétence. Mais un refus sec laisse la famille sans réponse et aggrave son sentiment d'abandon." },
            { text: "Promettre un compte rendu détaillé dès ce soir, quitte à demander l'information ensuite.", correct: false, feedback: "Séduisant : une promesse de compte rendu montre ta volonté d'aider et apaise sur le moment. Mais t'engager sans accord de l'infirmière crée une attente difficile à tenir." }
          ] },
        { q: "Elle demande à consulter le dossier médical de sa mère. Que réponds-tu ?",
          choices: [
            { text: "Expliquer que le dossier est confidentiel et la mettre en relation avec l'infirmière ou le médecin.", correct: true, feedback: "Juste : nommer la confidentialité puis orienter vers la personne habilitée respecte le devoir professionnel sans laisser la famille sans suite." },
            { text: "Lui montrer la dernière page du dossier, en masquant le nom des autres professionnels.", correct: false, feedback: "Séduisant : masquer certains noms paraît protéger la vie privée. Mais le dossier reste confidentiel et seul le professionnel habilité peut autoriser sa consultation." },
            { text: "Lui dire qu'il faut une autorisation écrite de sa mère, sans préciser à qui elle doit s'adresser.", correct: false, feedback: "Séduisant : l'accord écrit de la personne est en effet une règle essentielle. Mais sans orienter vers l'infirmière, la famille reste bloquée et l'inquiétude grandit." },
            { text: "Proposer de lire le dossier à voix haute dans le bureau, car elle est la fille de la résidente.", correct: false, feedback: "Séduisant : la qualité de proche crée une légitimité évidente et le bureau offre un cadre discret. Mais la lecture à voix haute reste une divulgation interdite." }
          ] },
        { q: "La famille veut que la chute soit cachée aux autres résidents. Quel est ton choix ?",
          choices: [
            { text: "Refuser le silence, expliquer que la prévention passe par une information limitée à l'équipe.", correct: true, feedback: "Juste : tu as arbitré entre discrétion et sécurité en réservant l'information à l'équipe, ce qui permet d'adapter la surveillance." },
            { text: "Respecter la demande de la famille pour préserver l'image de la mère auprès des autres résidents.", correct: false, feedback: "Séduisant : respecter la volonté de la famille honore la parole du proche et protège la dignité de Mme B. Mais taire l'événement empêche de prévenir une nouvelle chute." },
            { text: "En parler librement au salon, car la chute est déjà connue de plusieurs résidents de la table.", correct: false, feedback: "Séduisant : l'information circule déjà et une discussion ouverte peut dédramatiser. Mais la diffuser au salon expose la résidente et trahit la confidentialité." },
            { text: "Laisser l'infirmière décider seule, en évitant d'évoquer la règle de confidentialité avec la famille.", correct: false, feedback: "Séduisant : l'infirmière est habilitée et tranchera avec l'équipe. Mais te désister sans expliquer la règle laisse croire que le silence est acceptable." }
          ] }
      ],
      bilan: "Tu as arbitré entre l'émotion de la famille et le devoir de confidentialité, puis entre discrétion et prévention. Point fort : une écoute empathique a ouvert l'échange. À retravailler : la formulation des limites professionnelles et l'orientation vers l'infirmière."
    },
    {
      id: "S12", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C2.1","C2.2","C3.2"],
      titre: "Constantes avant la visite : mesurer et transmettre sans alarmer",
      description: "La visite médicale commence dans dix minutes. M. C. est agité parce qu'il a déjà reçu une mauvaise annonce, et une collègue débordée propose de prendre ses constantes à ta place. Tu dois mesurer, noter et transmettre.",
      hints: ["Indice 1 : expliquer, installer, utiliser du matériel propre puis noter : l'ordre des gestes compte.","Indice 2 : une valeur inhabituelle se transmet à l'infirmière sans commentaire alarmiste.","Indice 3 : la transmission écrite doit être lisible, datée et complétée de la personne prévenue."],
      variantes: [
        { titre: "Variante — tension chiffrée", description: "La tension relevée est de 16/9, alors que le résident reste calme et ne signale aucun symptôme. Tu dois décider du bon niveau d'alerte." },
        { titre: "Variante — matériel défectueux", description: "Le tensiomètre affiche une valeur incohérente. Tu dois vérifier la mesure avant de la consigner dans le dossier." }
      ],
      steps: [
        { q: "Comment réalises-tu la prise des constantes ?",
          choices: [
            { text: "Expliquer le geste, installer M. C. au calme, utiliser du matériel propre puis noter les valeurs.", correct: true, feedback: "Juste : expliquer, installer et utiliser du matériel propre garantit une mesure fiable et respecte le confort de la personne." },
            { text: "Prendre les mesures sans prévenir pour ne pas augmenter son agitation, puis les noter ensuite.", correct: false, feedback: "Séduisant : éviter une parole qui agite paraît protecteur. Mais sans explication, le geste est vécu comme une contrainte et la mesure peut être faussée." },
            { text: "Laisser la collègue le faire pendant que tu vérifies le dossier, quitte à recopier les chiffres après.", correct: false, feedback: "Séduisant : répartir les tâches est efficace et ta collègue est compétente. Mais une mesure que tu n'as pas réalisée est difficile à commenter et à tracer." },
            { text: "Mesurer debout, sans temps de repos, car le temps manque avant la visite du médecin.", correct: false, feedback: "Séduisant : gagner quelques minutes avant la visite est tentant. Mais une mesure sans repos ni position adaptée donne une valeur peu exploitable." }
          ] },
        { q: "La tension relevée est de 16/9. Quel est le bon réflexe ?",
          choices: [
            { text: "Noter la valeur, rester calme auprès de M. C. et transmettre sans délai à l'infirmière.", correct: true, feedback: "Juste : consigner la valeur et alerter l'infirmière sans dramatiser contribue à la surveillance de l'état de santé et à la transmission." },
            { text: "Lui annoncer qu'il fait une hypertension grave, pour qu'il comprenne l'importance du suivi.", correct: false, feedback: "Séduisant : un langage clair peut sembler responsabiliser la personne. Mais annoncer un diagnostic sans habilitation inquiète et dépasse ton rôle." },
            { text: "Refaire la mesure trois fois et ne transmettre que si la valeur élevée se répète.", correct: false, feedback: "Séduisant : vérifier une valeur inhabituelle est un réflexe de rigueur. Mais différer la transmission retarde l'évaluation par l'infirmière, seule habilitée à décider." },
            { text: "Rassurer en disant que tout va bien, pour ne pas augmenter son agitation avant la visite.", correct: false, feedback: "Séduisant : le calme du résident est précieux et une parole rassurante soulage. Mais nier une valeur anormale prive l'équipe d'une information utile." }
          ] },
        { q: "Comment traces-tu cette mesure dans le dossier ?",
          choices: [
            { text: "Inscrire l'heure, les valeurs, le contexte et la personne prévenue, de façon lisible et datée.", correct: true, feedback: "Juste : une trace datée, lisible et complétée de la personne alertée rend la transmission fiable pour toute l'équipe." },
            { text: "Noter seulement la tension, la température ayant déjà été renseignée la veille.", correct: false, feedback: "Séduisant : ne saisir que l'anomalie fait gagner du temps et attire l'attention. Mais un dossier incomplet ne permet pas de suivre l'évolution des constantes." },
            { text: "Attendre la fin de la visite pour saisir, afin de compléter avec les consignes du médecin.", correct: false, feedback: "Séduisant : compléter après la visite donne un dossier plus cohérent. Mais retarder la saisie risque l'oubli et rend la valeur moins utile au moment de décider." },
            { text: "Consigner la valeur dans ton carnet personnel, plus pratique à consulter pendant la relève.", correct: false, feedback: "Séduisant : un carnet personnel est pratique et évite d'encombrer le dossier. Mais une information non partagée ne circule pas et ne peut être vérifiée." }
          ] }
      ],
      bilan: "Tu as arbitré entre la pression du temps et la qualité de la mesure, puis entre rassurer et transmettre. Point fort : la valeur anormale a été signalée sans retard. À retravailler : la précision et la date de la trace écrite."
    },
    {
      id: "S13", bloc: "B2", annee: "T", contexte: "structure", duree: "12 min", difficulte: 3,
      competences: ["C2.2","C3.2","C3.3"],
      titre: "Détresse respiratoire de Mme E. : alerte et surveillance",
      description: "Mme E., 88 ans, s'essouffle brutalement en salle à manger. L'infirmière est en réunion et le médecin n'est pas encore arrivé ; sa voisine de table s'inquiète et son fils, au téléphone, demande qu'on ne la laisse pas seule.",
      hints: ["Indice 1 : en urgence, la sécurité et l'alerte passent avant le confort et la politesse.","Indice 2 : une position demi-assise et une surveillance continue aident en attendant le professionnel.","Indice 3 : la transmission d'urgence doit être datée, précise et nommer la personne alertée."],
      variantes: [
        { titre: "Variante — seul en salle", description: "Tu es seul avec Mme E. : tu dois déclencher l'alerte tout en restant auprès d'elle et en rassurant les autres résidents." },
        { titre: "Variante — famille au téléphone", description: "Le fils de Mme E. exige d'être informé en direct. Tu dois répondre sans quitter la résidente ni retarder l'alerte." }
      ],
      steps: [
        { q: "Quelle est ta première action ?",
          choices: [
            { text: "Alerter l'infirmière, installer la résidente en position demi-assise et rester à ses côtés.", correct: true, feedback: "Juste : alerter immédiatement, adopter une position favorable et ne pas laisser la personne seule constituent la priorité en situation d'urgence." },
            { text: "Lui donner un verre d'eau fraîche, car la gorge semble sèche et cela peut la détendre.", correct: false, feedback: "Séduisant : faire boire peut sembler apaiser une respiration difficile. Mais une boisson peut gêner la respiration et retarde l'alerte indispensable." },
            { text: "Attendre la fin de la réunion de l'infirmière pour ne pas interrompre une discussion importante.", correct: false, feedback: "Séduisant : ménager la réunion de l'infirmière respecte l'organisation du service. Mais une détresse respiratoire ne peut attendre : chaque minute compte." },
            { text: "Rassurer d'abord la voisine de table et le fils au téléphone, puis revenir vers Mme E.", correct: false, feedback: "Séduisant : calmer l'entourage évite la panique autour de la table. Mais la surveillance de Mme E. passe avant : l'alerte et son accompagnement priment." }
          ] },
        { q: "En attendant l'infirmière, que fais-tu ?",
          choices: [
            { text: "Surveiller la respiration, la couleur et la conscience, rassurer Mme E. et préparer le matériel.", correct: true, feedback: "Juste : surveiller les signes, maintenir un contact rassurant et préparer le matériel permet d'attendre l'intervention sans laisser la situation évoluer seule." },
            { text: "Quitter la salle pour chercher le médecin, en demandant à la voisine de la surveiller.", correct: false, feedback: "Séduisant : aller chercher le médecin paraît accélérer la prise en charge. Mais confier la surveillance à une résidente laisse Mme E. sans professionnel." },
            { text: "L'installer allongée complètement pour qu'elle se repose, en réduisant le bruit autour d'elle.", correct: false, feedback: "Séduisant : le repos et le calme sont agréables et semblent logiques. Mais la position allongée aggrave la gêne respiratoire ; la position demi-assise s'impose." },
            { text: "Lui poser beaucoup de questions sur ses antécédents pour orienter le diagnostic du médecin.", correct: false, feedback: "Séduisant : rassembler des antécédents aide le médecin et montre ton implication. Mais un interrogatoire prolongé fatigue la personne et détourne la surveillance." }
          ] },
        { q: "Après l'intervention, que transmets-tu ?",
          choices: [
            { text: "L'heure de début, les signes observés, les actions réalisées, l'évolution et le professionnel alerté.", correct: true, feedback: "Juste : dater les signes, les actions et l'évolution avec le nom du professionnel alerté rend la transmission d'urgence exploitable par l'équipe." },
            { text: "Une phrase générale sur la gêne respiratoire, les détails étant inutiles une fois la crise passée.", correct: false, feedback: "Séduisant : une formulation courte va vite et la crise est terminée. Mais sans détails, l'équipe ne peut ni comprendre le déclenchement ni adapter la surveillance." },
            { text: "Seulement l'heure d'arrivée de l'infirmière, car c'est le moment qui compte pour le suivi.", correct: false, feedback: "Séduisant : l'heure d'intervention est en effet un repère important. Mais sans le début des signes ni leur évolution, le dossier ne mesure pas la durée de l'épisode." },
            { text: "Le ressenti de la voisine de table, qui a vu la scène et peut témoigner de l'état de Mme E.", correct: false, feedback: "Séduisant : le témoignage d'une autre résidente apporte un regard sur la scène. Mais il ne remplace pas ton observation datée et ne peut être consigné à sa place." }
          ] }
      ],
      bilan: "Tu as arbitré entre l'organisation du service et l'urgence vitale, puis entre rassurer l'entourage et surveiller. Point fort : l'alerte a été donnée sans attendre. À retravailler : la précision des transmissions en situation d'urgence."
    },
    {
      id: "S14", bloc: "B3", annee: "T", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C3.1","C3.2","C3.5"],
      titre: "Accompagner un stagiaire : accueil et montée en autonomie",
      description: "Un stagiaire arrive à 7 h 30 alors que l'équipe est déjà débordée par deux entrées. L'infirmière souhaite qu'il participe vite aux soins, mais il hésite devant un geste qu'il n'a jamais réalisé. Tu es chargé de son accueil et de son encadrement.",
      hints: ["Indice 1 : préparer l'arrivée, c'est déjà transmettre les consignes de sécurité et le cadre de l'équipe.","Indice 2 : accompagner un geste se fait par étapes, avec une supervision adaptée au niveau du stagiaire.","Indice 3 : l'évaluation de l'intégration se partage avec l'équipe et s'inscrit dans le suivi."],
      variantes: [
        { titre: "Variante — stagiaire très assuré", description: "Le stagiaire affirme connaître le geste et veut le faire seul immédiatement. Tu dois vérifier ses acquis sans le décourager." },
        { titre: "Variante — service en sous-effectif", description: "Deux collègues sont absents : tu dois concilier l'encadrement du stagiaire et la charge de travail du service." }
      ],
      steps: [
        { q: "Comment prépares-tu son arrivée ?",
          choices: [
            { text: "Prévoir le tableau de service, les consignes de sécurité et présenter l'équipe dès son arrivée.", correct: true, feedback: "Juste : préparer le cadre, les consignes de sécurité et la présentation de l'équipe installe le stagiaire dans une posture professionnelle dès les premières minutes." },
            { text: "Lui envoyer uniquement l'horaire par message, le reste s'apprendra sur le terrain.", correct: false, feedback: "Séduisant : un message rapide respecte son temps et son autonomie. Mais sans consignes de sécurité ni contact humain, il commence sans repères." },
            { text: "Demander à l'infirmière de faire l'accueil, car elle connaît mieux l'organisation du service.", correct: false, feedback: "Séduisant : l'infirmière a une vue d'ensemble et l'accueil entre dans ses habitudes. Mais l'encadrement t'engage à préparer son intégration avec l'équipe." },
            { text: "Prévoir une longue visite de la structure avant même de lui expliquer les règles de sécurité.", correct: false, feedback: "Séduisant : faire visiter le service montre l'attention portée au nouvel arrivant. Mais sans les règles de sécurité d'abord, la découverte se fait dans l'improvisation." }
          ] },
        { q: "Il hésite à réaliser un soin pour la première fois. Que fais-tu ?",
          choices: [
            { text: "Expliquer le geste, le superviser, puis laisser faire progressivement selon ce qu'il maîtrise.", correct: true, feedback: "Juste : expliquer, superviser puis retirer progressivement ton aide forme à la fois la compétence et l'autonomie du stagiaire." },
            { text: "Réaliser le soin à sa place pour ne pas le mettre en difficulté devant la résidente.", correct: false, feedback: "Séduisant : prendre le relais protège la résidente et évite l'embarras du stagiaire. Mais sans mise en pratique, il ne construit pas le geste et restera dépendant." },
            { text: "Le laisser essayer seul, car c'est en agissant qu'il prendra confiance et apprendra.", correct: false, feedback: "Séduisant : l'essai personnel est formateur et la confiance se gagne dans l'action. Mais un premier geste non supervisé peut nuire à la personne et à la qualité." },
            { text: "Lui demander de regarder un collègue faire, puis de revenir plus tard pour recommencer.", correct: false, feedback: "Séduisant : l'observation est une étape utile et respecte son rythme. Mais sans accompagnement actif ni reprise rapide, la leçon reste théorique." }
          ] },
        { q: "Comment évalues-tu son intégration en fin de matinée ?",
          choices: [
            { text: "Observer ses gestes, échanger avec lui, ajuster l'accompagnement et en informer l'équipe.", correct: true, feedback: "Juste : l'observation, l'échange et la transmission à l'équipe permettent d'ajuster l'accompagnement aux besoins du stagiaire." },
            { text: "Attendre la fin du stage pour une évaluation complète, une matinée étant trop courte pour juger.", correct: false, feedback: "Séduisant : une évaluation en fin de stage offre du recul et évite les jugements hâtifs. Mais sans retours réguliers, les difficultés du premier jour s'installent." },
            { text: "Demander uniquement à l'infirmière son avis, car elle a supervisé la majorité des soins.", correct: false, feedback: "Séduisant : l'avis de l'infirmière est précieux et son regard sur les soins fait autorité. Mais ton observation complète la sienne et l'intégration concerne l'équipe." },
            { text: "Noter ses erreurs dans le dossier de suivi des résidents, pour que l'équipe les voie directement.", correct: false, feedback: "Séduisant : consigner les difficultés rend visible le besoin d'accompagnement. Mais le dossier d'un résident n'est pas le lieu d'une évaluation de stagiaire." }
          ] }
      ],
      bilan: "Tu as arbitré entre l'urgence du service et le temps d'encadrement, puis entre protection et autonomie du stagiaire. Point fort : les consignes de sécurité ont été données avant la mise en situation. À retravailler : les échanges réguliers et la transmission de ton observation."
    },
    {
      id: "S15", bloc: "B4", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
      competences: ["C4.1","C4.2","C4.3"],
      titre: "Prévention des chutes à domicile : choisir par où commencer",
      description: "Tu prépares avec l'équipe une action de prévention des chutes pour six personnes âgées de 78 à 91 ans vivant chez elles. La responsable veut diffuser une brochure identique dès demain, mais Mme Roy, 84 ans, refuse qu'on entre chez elle : tu ignores encore quels sont ses vrais risques.",
      hints: ["Indice 1 : avant de concevoir, identifie les besoins réels plutôt que les suppositions.","Indice 2 : l'action doit tenir compte du lieu de vie et de l'accord de la personne.","Indice 3 : prévois un retour sur le terrain pour vérifier ce qui a changé."],
      variantes: [
        { titre: "Variante — une chute avant la visite", description: "Mme Roy téléphone le matin même : elle a glissé dans son couloir. La responsable veut accélérer la diffusion de la brochure, alors que tu n'as toujours pas vu son logement." },
        { titre: "Variante — la famille décide à la place", description: "Le fils de Mme Roy annonce qu'il a déjà fait poser un tapis neuf et demande qu'on ne touche plus rien. Mme Roy n'a pas été consultée et l'équipe s'interroge sur la conduite à tenir." }
      ],
      steps: [
        { q: "La responsable propose de lancer la brochure dès demain. Que décides-tu dans un premier temps ?",
          choices: [
            { text: "Reporter le lancement et visiter chaque domicile pour repérer les risques et entendre les habitudes.", correct: true, feedback: "Juste : tu analyses d'abord les besoins du public, comme l'exige la démarche d'éducation à la santé. La brochure était tentante par sa rapidité, mais elle aurait parlé de chutes sans connaître les logements." },
            { text: "Diffuser la brochure dès demain à tous les foyers, puis corriger le contenu grâce aux retours de l'équipe.", correct: false, feedback: "Séduisant : l'action démarre vite et reste réversible. Mais tu conçois un message avant d'avoir analysé les situations réelles, et les personnes les plus isolées ne formuleront peut-être jamais de retour." },
            { text: "Classer les foyers par priorité à partir du dossier de suivi, sans se déplacer chez les personnes.", correct: false, feedback: "Séduisant : le dossier donne un classement immédiat et évite d'imposer une visite. Mais il ne dit rien des tapis, de l'éclairage ou des gestes quotidiens qui font le risque réel à domicile." },
            { text: "Concevoir l'action à partir des recommandations nationales, puis l'adapter au fil des ateliers organisés.", correct: false, feedback: "Séduisant : les recommandations offrent un cadre solide et rassurant. Mais cette conception reste générale et ne répond pas au refus de Mme Roy, qui est justement la première question à traiter." }
          ] },
        { q: "Mme Roy accepte la visite, mais s'oppose à ce qu'on touche à son tapis, cadeau de son fils. Que proposes-tu ?",
          choices: [
            { text: "Écouter son attachement, lui proposer de fixer le tapis ou de le remplacer, et décider avec elle.", correct: true, feedback: "Juste : tu concilies la sécurité et le respect de la personne en l'associant au choix. Retirer le tapis aurait été plus rapide, mais aurait transformé une action d'accompagnement en une décision prise à sa place." },
            { text: "Retirer le tapis pendant la visite pour garantir la sécurité, puis expliquer le geste à la famille.", correct: false, feedback: "Séduisant : le danger est visible et le geste protège immédiatement. Mais tu décides sans son accord et tu préviens la famille avant elle, ce qui abîme la confiance nécessaire à la suite de l'action." },
            { text: "Laisser le tapis en place puisqu'elle s'y oppose, et inscrire simplement son refus dans le dossier.", correct: false, feedback: "Séduisant : tu respectes sa parole et évites d'imposer une solution. Mais le risque demeure intact : ton rôle est aussi de chercher avec elle une autre réponse, pas de prendre acte du refus." },
            { text: "Demander à son fils de convaincre sa mère de s'en séparer avant la prochaine visite à domicile.", correct: false, feedback: "Séduisant : le fils est un allié naturel et il a offert ce tapis. Mais tu déplaces la décision vers la famille, alors que c'est Mme Roy qui doit rester au centre de son propre projet de vie." }
          ] },
        { q: "Trois mois plus tard, comment mesures-tu l'effet de l'action auprès des six personnes ?",
          choices: [
            { text: "Revenir chez chacun, observer les aménagements, recueillir son ressenti et ajuster l'action en fonction des retours.", correct: true, feedback: "Juste : l'évaluation passe par un retour sur le terrain et par la parole des personnes. Les statistiques seules étaient plus simples, mais elles ne disent pas si les changements ont été acceptés et tenus dans le temps." },
            { text: "Comparer le nombre de chutes avant et après l'action, en attendant les données de l'année suivante.", correct: false, feedback: "Séduisant : l'indicateur est objectif et permet une comparaison chiffrée. Mais attendre un an diffère l'évaluation et prive l'équipe d'ajustements rapides pour les personnes qui restent exposées." },
            { text: "Envoyer un questionnaire aux familles et considérer l'action comme terminée dès les premières réponses.", correct: false, feedback: "Séduisant : le questionnaire est facile à diffuser et donne une réponse écrite. Mais les familles ne voient pas toujours le quotidien, et les premières réponses ne remplacent pas un retour auprès des résidents eux-mêmes." },
            { text: "Demander aux soignants de noter les chutes dans le dossier, sans autre retour sur le terrain auprès des personnes.", correct: false, feedback: "Séduisant : la traçabilité est utile et s'intègre au travail de l'équipe. Mais un relevé de chutes ne montre ni les aménagements réellement conservés ni ce que les personnes ont compris de l'action." }
          ] }
      ],
      bilan: "Tu as arbitré entre la vitesse de diffusion et la connaissance réelle des lieux de vie. Point fort : tu as associé Mme Roy à la décision concernant son tapis. À retravailler : prévoir un suivi rapproché et mesurer l'effet de l'action dans la durée."
    },
    {
      id: "S16", bloc: "B1", annee: "1", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C1.1","C1.2","C1.4"],
      titre: "Gymnastique douce : accueillir la peur de tomber",
      description: "Tu animes à 10 heures une séance de gymnastique douce dans le salon de la résidence. Mme F., 82 ans, reste au bout de son fauteuil, serre son sac et répète : « Je ne tiens plus debout, je vais tomber. » Le responsable compte sur toi pour faire participer tout le groupe et deux résidents attendent déjà leur tour.",
      hints: ["Indice 1 : entends la peur avant de proposer le moindre mouvement.","Indice 2 : une participation assise reste une véritable participation.","Indice 3 : la surveillance du groupe continue pendant une adaptation individuelle."],
      variantes: [
        { titre: "Variante — le groupe s'impatiente", description: "Les autres résidents commencent les exercices sans attendre et Mme F. se recroqueville. Le responsable te fait signe de lancer l'échauffement général rapidement." },
        { titre: "Variante — une chute la semaine dernière", description: "Mme F. est tombée dans sa chambre huit jours avant la séance. L'infirmière te dit qu'elle a peur depuis, mais le programme prévoit aujourd'hui des exercices debout." }
      ],
      steps: [
        { q: "Mme F. refuse de se lever. Quelle réponse lui apportes-tu d'abord ?",
          choices: [
            { text: "L'écouter, lui proposer une participation assise et l'assurer qu'elle pourra arrêter à tout moment.", correct: true, feedback: "Juste : tu accueilles sa parole et tu adaptes l'activité sans la mettre à l'écart. Lui proposer de se lever avec ton appui semblait bienveillant, mais obligeait à agir contre sa peur." },
            { text: "Lui proposer de se lever avec ton appui, en expliquant que tu seras là pour la retenir.", correct: false, feedback: "Séduisant : ton appui rassure et tu restes auprès d'elle. Mais sa peur porte précisément sur la perte d'équilibre : la faire lever transforme l'accompagnement en une épreuve qu'elle redoute." },
            { text: "Lui suggérer de regarder la séance depuis son fauteuil jusqu'à la prochaine séance collective.", correct: false, feedback: "Séduisant : tu évites la confrontation et tu lui laisses le temps d'observer. Mais la renvoyer à la séance suivante risque d'installer durablement son retrait au lieu de construire une participation possible." },
            { text: "Demander à sa voisine de l'aider à se lever, pour qu'elle suive les mouvements avec le groupe.", correct: false, feedback: "Séduisant : l'entraide entre résidents est précieuse et la voisine la connaît bien. Mais tu délègues une décision qui engage sa sécurité et tu prends le risque d'un geste à deux personnes non préparées." }
          ] },
        { q: "Pendant la séance, M. L. porte la main à sa poitrine et pâlit. Que fais-tu ?",
          choices: [
            { text: "Arrêter l'exercice, l'installer au calme, évaluer ce qu'il ressent et alerter l'infirmier si cela dure.", correct: true, feedback: "Juste : tu combines sécurité, observation et alerte proportionnée, tout en gardant le lien avec le groupe. Continuer la séance aurait été plus confortable pour l'organisation, mais aurait laissé un malaise sans réponse." },
            { text: "Poursuivre la séance avec les autres en demandant à un résident de le surveiller attentivement.", correct: false, feedback: "Séduisant : le groupe avance et M. L. n'est pas laissé seul. Mais un résident n'a pas le rôle de surveiller un malaise, et toi seul peux juger de l'évolution et prévenir l'équipe." },
            { text: "Lui proposer un verre d'eau et attendre la fin de la séance pour en parler à l'équipe soignante.", correct: false, feedback: "Séduisant : le geste est simple et tu évites d'interrompre tout le salon. Mais attendre la fin retarde l'évaluation d'un signe qui peut demander une intervention rapide." },
            { text: "Arrêter la séance pour toute la salle et demander à l'infirmier de le voir avant la fin du repas.", correct: false, feedback: "Séduisant : la prudence est réelle et l'infirmier sera prévenu. Mais interrompre tout le groupe et fixer une échéance aussi lointaine ne correspondent pas à ce que tu observes à cet instant." }
          ] },
        { q: "À la fin de la séance, le responsable te demande un compte rendu. Que transmets-tu ?",
          choices: [
            { text: "Noter la participation assise de Mme F., le malaise de M. L. et les adaptations prévues pour la prochaine séance.", correct: true, feedback: "Juste : ta transmission est factuelle et utile à la continuité de l'accompagnement. Un simple effectif était plus rapide, mais il aurait fait disparaître les deux situations qui doivent être suivies." },
            { text: "Indiquer seulement le nombre de participants, pour rester synthétique et ne pas surcharger le dossier.", correct: false, feedback: "Séduisant : la synthèse est lisible et respecte le temps de l'équipe. Mais elle efface précisément ce qui compte ici : l'adaptation réussie et le malaise survenu pendant l'activité." },
            { text: "Raconter verbalement l'incident à l'équipe, sans trace écrite dans l'outil de suivi de la résidence.", correct: false, feedback: "Séduisant : le récit oral est direct et permet une réaction immédiate. Mais sans trace écrite, l'information sera perdue pour les collègues qui prendront le relais après toi." },
            { text: "Proposer de remplacer la séance par un atelier assis réservé aux résidents les plus fragiles du salon.", correct: false, feedback: "Séduisant : l'idée part d'une vraie volonté d'inclusion. Mais créer un groupe séparé risque d'enfermer Mme F. dans une catégorie alors qu'une adaptation individuelle lui permet de rester avec les autres." }
          ] }
      ],
      bilan: "Tu as arbitré entre la pression du programme collectif et le respect du rythme de Mme F. Point fort : tu as su proposer une participation assise sans l'exclure. À retravailler : surveiller le groupe tout en gérant un incident individuel et tracer les adaptations."
    },
    {
      id: "S17", bloc: "B2", annee: "1", contexte: "centre", duree: "12 min", difficulte: 1,
      competences: ["C2.1","C2.3"],
      titre: "Toilette au lit de M. G. : soigner sans précipiter",
      description: "Tu dois réaliser la toilette au lit de M. G., 79 ans, alité après une fracture. Il accepte ton aide mais demande que sa porte reste fermée ; l'infirmière passera dans dix minutes pour un pansement. Il te reste encore trois chambres à faire avant le repas de midi.",
      hints: ["Indice 1 : prépare le soin avant d'entrer et demande son accord.","Indice 2 : l'intimité reste protégée même quand le temps manque.","Indice 3 : ce que tu observes pendant le soin doit être noté et transmis."],
      variantes: [
        { titre: "Variante — la famille arrive en avance", description: "La fille de M. G. entre dans la chambre au moment où tu commences la toilette. M. G. se tend et regarde la porte : le soin est à peine entamé et le pansement est attendu." },
        { titre: "Variante — une aide technique manque", description: "L'infirmière te prévient que le lève-personne est encore utilisé dans l'autre aile. M. G. a besoin d'une aide partielle pour se tourner et trois chambres attendent encore ton passage." }
      ],
      steps: [
        { q: "Comment prépares-tu ce soin avec M. G. ?",
          choices: [
            { text: "Expliquer le soin, recueillir son accord, préparer le matériel et organiser son intimité avant de commencer.", correct: true, feedback: "Juste : tu prépares le soin dans le respect de la personne, ce qui est attendu d'une toilette au lit. Commencer directement aurait fait gagner quelques minutes, mais aurait transformé un soin en une contrainte subie." },
            { text: "Préparer tout le matériel et commencer sans explication, pour gagner du temps sur les autres chambres.", correct: false, feedback: "Séduisant : l'organisation est efficace et tu évites de multiplier les allers-retours. Mais M. G. ne sait pas ce que tu vas faire et ne peut donc pas donner son accord éclairé." },
            { text: "Demander à l'infirmière de faire la toilette à ta place, puisqu'un pansement l'amène déjà dans la chambre.", correct: false, feedback: "Séduisant : la coordination évite deux passages et l'infirmière connaît son dossier. Mais tu délègues un soin d'hygiène qui relève de ton rôle, alors que tu es déjà auprès de lui." },
            { text: "Lui expliquer le soin et lui demander de se lever seul, pour entretenir son autonomie après sa fracture.", correct: false, feedback: "Séduisant : favoriser l'autonomie est une vraie préoccupation. Mais il est alité et encore fragile : lever seul une personne concernée expose à une chute et sort du cadre du soin prévu." }
          ] },
        { q: "Pendant la toilette, tu découvres une rougeur au talon. Que fais-tu ?",
          choices: [
            { text: "Adapter le soin sans frotter, noter l'observation avec l'heure et la transmettre à l'infirmière.", correct: true, feedback: "Juste : tu protèges la peau, tu observes et tu rends l'information utilisable pour l'équipe. Attendre la fin du service était plus simple, mais la rougeur devait être signalée sans délai." },
            { text: "Terminer la toilette comme prévu et signaler la rougeur à la famille lors de sa visite de l'après-midi.", correct: false, feedback: "Séduisant : la famille sera informée et tu évites de perturber le déroulé du soin. Mais elle ne peut pas décider de la conduite à tenir et l'infirmière doit voir la zone concernée aujourd'hui." },
            { text: "Nettoyer plus vigoureusement la zone pour la faire disparaître avant le passage du pansement.", correct: false, feedback: "Séduisant : l'hygiène est au cœur de ton geste et tu veux préparer la peau au pansement. Mais frotter une rougeur peut aggraver l'irritation et masque un signe qui doit être observé tel quel." },
            { text: "Noter la rougeur dans le dossier et attendre le pansement de l'infirmière pour lui en parler de vive voix.", correct: false, feedback: "Séduisant : la trace écrite existe et tu comptes sur un échange avec l'infirmière. Mais attendre son passage retarde la décision et l'information écrite risque de ne pas être lue à temps." }
          ] },
        { q: "En quittant la chambre, tu vois le lit encore humide et la sonnette hors de portée. Que fais-tu ?",
          choices: [
            { text: "Réinstaller le lit au sec, remettre la sonnette à portée de main et vérifier l'aide technique avant de partir.", correct: true, feedback: "Juste : tu termines le soin en sécurisant l'environnement proche de M. G. Reporter ces gestes aurait été compréhensible avec trois chambres en attente, mais le confort et l'appel restent liés à la toilette." },
            { text: "Noter les deux points dans le dossier et prévenir l'agent de service pour qu'il intervienne après le repas.", correct: false, feedback: "Séduisant : la note et la demande de renfort sont professionnelles. Mais M. G. reste plusieurs heures avec un lit humide et sans sonnette accessible : la correction doit être immédiate." },
            { text: "Demander à la famille de vérifier la sonnette lors de sa visite et de prévenir l'équipe si besoin.", correct: false, feedback: "Séduisant : la famille est présente et peut servir de relais. Mais veiller au bon état du lit et des aides techniques fait partie de ton rôle, pas d'une visite de courtoisie." },
            { text: "Régler la sonnette uniquement, le linge sera changé lors de la prochaine toilette demain matin.", correct: false, feedback: "Séduisant : tu traites le risque le plus urgent et tu respectes le rythme des soins. Mais laisser le lit humide jusqu'à demain nuit au confort de M. G. et peut fragiliser sa peau." }
          ] }
      ],
      bilan: "Tu as arbitré entre le respect de l'intimité et la pression des chambres restantes. Point fort : tu as préparé le soin et préservé le consentement de M. G. À retravailler : observer et transcrire sans attendre, puis vérifier l'environnement avant de quitter la chambre."
    },
    {
      id: "S18", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C3.2","C3.3"],
      titre: "Erreur de distribution : alerter sans accuser",
      description: "À 8 heures 30, tu vois un collègue donner le comprimé de Mme T. à M. R., alors que celui-ci est à jeun pour un examen. Le collègue te dit : « Je gère mon secteur, je vais rectifier, n'en parle pas à l'infirmière. » Celle-ci est en réunion jusqu'à 9 heures et les deux résidents attendent leur repas.",
      hints: ["Indice 1 : la sécurité des résidents passe avant la solidarité entre collègues.","Indice 2 : alerte la personne compétente sans mise en cause publique.","Indice 3 : une trace factuelle permettra l'analyse de l'événement."],
      variantes: [
        { titre: "Variante — le collègue est un stagiaire", description: "Le collègue est un stagiaire que tu accompagnes depuis trois semaines. Il te dit qu'il a voulu gagner du temps avant le repas et te demande de couvrir l'erreur pour le reste du stage." },
        { titre: "Variante — l'infirmière est joignable", description: "L'infirmière sort de sa réunion et te croise dans le couloir. Le collègue est juste derrière toi et t'implore de régler cela entre vous deux, sans formaliser l'incident." }
      ],
      steps: [
        { q: "Que fais-tu immédiatement après avoir vu la scène ?",
          choices: [
            { text: "Prévenir l'infirmière responsable, rester auprès des deux résidents et consigner les faits observés.", correct: true, feedback: "Juste : tu protèges les personnes, tu alertes la personne compétente et tu prépares la traçabilité. Laisser le collègue rectifier seul était séduisant par solidarité, mais le risque restait entier sans intervention de l'infirmière." },
            { text: "Laisser le collègue rectifier lui-même, en lui demandant de prévenir l'infirmière après sa réunion.", correct: false, feedback: "Séduisant : tu respectes son secteur et tu lui fais confiance pour réparer. Mais tu reportes l'alerte d'une demi-heure et tu fais dépendre la sécurité de M. R. de la seule bonne volonté du collègue." },
            { text: "Interpeller le collègue devant les résidents pour qu'il reconnaisse l'erreur séance tenante.", correct: false, feedback: "Séduisant : tu veux que la vérité soit établie immédiatement. Mais une confrontation publique met en cause la personne devant les usagers et rend l'analyse ensuite plus difficile, sans protéger davantage M. R." },
            { text: "Vérifier d'abord le dossier de M. R. pour confirmer l'erreur, puis attendre la fin de la réunion de l'infirmière.", correct: false, feedback: "Séduisant : tu veux éviter une fausse alerte et tu vérifies avant d'agir. Mais la lecture du dossier ne remplace pas l'alerte : M. R. doit être pris en charge sans attendre la fin de la réunion." }
          ] },
        { q: "L'infirmière arrive et te demande un compte rendu précis. Que lui transmets-tu ?",
          choices: [
            { text: "Les faits datés, les personnes concernées et ce que tu as vu, sans interpréter l'intention du collègue.", correct: true, feedback: "Juste : une transmission factuelle permet d'agir et d'analyser ensuite. Donner ton sentiment sur le collègue aurait été plus direct, mais l'intention n'est pas ce que tu as observé." },
            { text: "Ton sentiment sur le comportement du collègue, afin qu'il comprenne la gravité de la situation.", correct: false, feedback: "Séduisant : ton jugement exprime l'urgence et tu veux que l'erreur soit prise au sérieux. Mais un compte rendu d'événement doit distinguer les faits des interprétations pour rester utilisable par l'équipe." },
            { text: "Un résumé oral rapide, la formalisation écrite pouvant attendre la fin du service de l'équipe.", correct: false, feedback: "Séduisant : l'oral est immédiat et tu évites de bloquer l'infirmière dans un long écrit. Mais sans trace dans l'outil prévu, l'information ne sera pas retrouvée lors de l'analyse de l'événement." },
            { text: "Seulement le nom du médicament, pour ne pas surcharger le dossier de l'événement indésirable.", correct: false, feedback: "Séduisant : tu vas à l'essentiel et tu protèges la lisibilité du dossier. Mais le nom du produit sans l'heure, le lieu et les personnes ne permet ni de comprendre ni de corriger l'organisation." }
          ] },
        { q: "L'équipe se réunit pour analyser l'événement. Quelle est ta contribution ?",
          choices: [
            { text: "Décrire les circonstances, proposer une clarification des doses et participer à la traçabilité des actions.", correct: true, feedback: "Juste : tu alimentes la démarche qualité par des faits et une piste d'amélioration concrète. Demander une sanction était compréhensible, mais l'analyse d'événement vise d'abord à éviter que cela se reproduise." },
            { text: "Demander une sanction immédiate du collègue, pour montrer que ce type d'erreur n'est pas toléré.", correct: false, feedback: "Séduisant : l'exigence est légitime et tu protèges la sécurité future. Mais une sanction décidée avant l'analyse court-circuit la compréhension des causes et peut empêcher les autres de signaler." },
            { text: "Proposer d'allonger le temps réservé à la distribution, sans autre changement dans l'organisation du service.", correct: false, feedback: "Séduisant : moins de précipitation peut effectivement limiter les erreurs. Mais agir sur un seul levier ne traite ni la clarification des doses ni le contrôle croisé qui ont manqué ce matin." },
            { text: "Laisser l'encadrant mener l'analyse seul, ton témoignage ayant déjà été transmis à l'infirmière.", correct: false, feedback: "Séduisant : tu évites de reprendre le récit et tu respectes le rôle de l'encadrant. Mais ta participation est utile : tu es celui qui a vu la scène et qui peut préciser les circonstances." }
          ] }
      ],
      bilan: "Tu as arbitré entre la solidarité envers un collègue et la sécurité des résidents. Point fort : tu as alerté sans mettre en cause publiquement la personne. À retravailler : rédiger une transmission factuelle complète et contribuer activement à l'analyse de l'événement."
    },
    {
      id: "S19", bloc: "B4", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
      competences: ["C4.1","C4.2"],
      titre: "Hygiène du sommeil : écouter avant d'expliquer",
      description: "Tu dois concevoir une action d'éducation à la santé sur l'hygiène du sommeil pour douze résidents. Mme B. s'endort vers 22 h 30 mais est réveillée chaque nuit par les passages dans le couloir. Le responsable veut un atelier vendredi, et la fille de Mme B. réclame une heure de coucher unique pour tout l'étage.",
      hints: ["Indice 1 : commence par les habitudes et les difficultés racontées par les résidents.","Indice 2 : un contenu utile tient compte du bruit et des rythmes réels.","Indice 3 : les consignes se construisent avec l'équipe et avec les personnes."],
      variantes: [
        { titre: "Variante — l'atelier est avancé", description: "Le responsable déplace l'atelier à jeudi matin : tu n'auras pas eu le temps d'interroger les résidents. La fille de Mme B. propose de préparer elle-même le support à partir d'internet." },
        { titre: "Variante — deux habitudes s'opposent", description: "Mme B. veut garder sa veilleuse, tandis que M. D., dans la chambre d'à côté, dort mal à cause de cette lumière. Le responsable attend une proposition unique pour l'étage." }
      ],
      steps: [
        { q: "Avant de rédiger l'atelier, que fais-tu en premier ?",
          choices: [
            { text: "Recueillir les habitudes, les difficultés et les attentes des résidents auprès d'eux-mêmes.", correct: true, feedback: "Juste : tu analyses les besoins du public avant de concevoir le message. Partir des conseils généraux semblait plus rapide, mais tu aurais parlé du sommeil abstrait au lieu des nuits réelles du groupe." },
            { text: "Partir des conseils généraux sur le sommeil et les expliquer tels quels pendant l'atelier.", correct: false, feedback: "Séduisant : les conseils sont clairs, validés et faciles à présenter à douze personnes. Mais sans recueil préalable, tu ne sais pas si le bruit, la lumière ou les horaires sont leurs vraies difficultés." },
            { text: "Demander à la fille de Mme B. ce qu'il faut enseigner, puisqu'elle connaît bien sa mère.", correct: false, feedback: "Séduisant : la famille connaît les habitudes et se montre très impliquée. Mais elle ne parle que pour une résidente et transformer son avis en contenu collectif reviendrait à concevoir pour elle seule." },
            { text: "Consulter les dossiers pour repérer les résidents qui prennent un traitement et cibler l'atelier sur eux.", correct: false, feedback: "Séduisant : le dossier donne un point de départ précis et évite un discours trop général. Mais limiter l'action aux personnes sous traitement laisse de côté celles qui se lèvent la nuit sans aucun soin." }
          ] },
        { q: "Tu confirmes que le bruit nocturne gêne Mme B. Que proposes-tu ?",
          choices: [
            { text: "Associer l'équipe et les résidents pour aménager les passages et proposer des solutions simples.", correct: true, feedback: "Juste : tu conçois une action adaptée au lieu de vie et tu associes ceux qui peuvent la faire tenir. Donner seulement des bouchons était plus simple, mais ne traitait pas l'organisation des passages." },
            { text: "Donner des bouchons d'oreille à Mme B. et considérer que sa difficulté est réglée.", correct: false, feedback: "Séduisant : la solution est immédiate, peu coûteuse et acceptée par beaucoup de personnes. Mais elle demande à la résidente de s'adapter seule à un bruit que l'équipe peut aussi réduire à la source." },
            { text: "Déplacer les chambres les plus exposées au calme, en prévenant les résidents le jour même.", correct: false, feedback: "Séduisant : changer de chambre supprime le bruit sans demander un effort aux personnes. Mais c'est une mesure lourde, décidée sans leur avis, qui perturbe leurs repères pour une action d'éducation à la santé." },
            { text: "Inscrire la gêne dans le dossier de Mme B. et attendre l'avis du médecin avant toute proposition.", correct: false, feedback: "Séduisant : la trace existe et tu évites de prendre une décision seule. Mais le bruit nocturne relève d'abord d'une organisation à discuter avec l'équipe, sans attendre un avis médical." }
          ] },
        { q: "La fille de Mme B. exige une heure de coucher identique pour tout l'étage. Que lui réponds-tu ?",
          choices: [
            { text: "Expliquer que l'action respecte les rythmes de chacun et proposer un engagement collectif sur le calme du soir.", correct: true, feedback: "Juste : tu gardes la personne au centre tout en offrant à la famille une réponse concrète. Accepter l'heure unique aurait évité la discussion, mais aurait imposé un rythme à douze personnes différentes." },
            { text: "Accepter l'heure unique pour satisfaire la famille et éviter un conflit ouvert dans l'étage pendant le repas.", correct: false, feedback: "Séduisant : le conflit s'éteint vite et la famille se sent écoutée. Mais une consigne identique pour tous ignore les habitudes réelles et risque d'échouer dès la première nuit." },
            { text: "Renvoyer la décision à l'équipe soignante, sans donner de réponse à la famille avant la fin de la semaine.", correct: false, feedback: "Séduisant : tu évites de t'engager seul sur une règle collective. Mais la famille attend une explication, et ton silence laisse croire que sa demande est simplement écartée." },
            { text: "Proposer une heure unique seulement aux résidents qui se lèvent pendant la nuit, sans consulter l'équipe.", correct: false, feedback: "Séduisant : le compromis paraît raisonnable et rassure la fille de Mme B. Mais il désigne un sous-groupe et règle le problème par une contrainte, alors que l'action vise à comprendre les habitudes." }
          ] }
      ],
      bilan: "Tu as arbitré entre la demande de la famille et les rythmes individuels des résidents. Point fort : tu as fondé l'action sur les habitudes recueillies auprès d'eux. À retravailler : impliquer davantage l'équipe et formuler des engagements collectifs sans imposer une heure unique."
    },
    {
      id: "S20", bloc: "B1", annee: "3", contexte: "structure", duree: "15 min", difficulte: 3,
      competences: ["C1.1","C1.2","C1.3"],
      titre: "Fin de vie : accompagner Mme H. et sa famille",
      description: "Mme H., 88 ans, est en fin de vie dans sa chambre. Sa fille et son gendre se disputent près du lit sur les heures de visite, alors que Mme H. a murmuré à l'infirmière qu'elle voulait du calme et une lumière basse. Le médecin passera dans une heure et tu restes seul auprès d'elle en attendant.",
      hints: ["Indice 1 : la parole de la personne guide l'accompagnement, même quand la famille s'impose.","Indice 2 : écouter la famille ne veut pas dire répondre à sa place.","Indice 3 : après le décès, le respect des procédures et la transmission restent essentiels."],
      variantes: [
        { titre: "Variante — la petite-fille arrive", description: "La petite-fille de Mme H. arrive avec des photos et veut les montrer immédiatement, alors que la lumière a été baissée et que Mme H. s'endort à peine. La fille soutient sa nièce contre la consigne donnée par sa mère." },
        { titre: "Variante — une question médicale pressante", description: "Le gendre demande dans le couloir ce qui se passe et exige un chiffre précis avant l'arrivée du médecin. La fille de Mme H. enregistre la conversation avec son téléphone pour la relire ensuite." }
      ],
      steps: [
        { q: "Comment respecter les souhaits de Mme H. face à la dispute de la famille ?",
          choices: [
            { text: "Installer le calme et une lumière douce, redire ses souhaits avec tact et prévenir l'infirmière.", correct: true, feedback: "Juste : tu fais respecter le projet de la personne et tu associe l'équipe sans braquer la famille. Laisser la famille décider était plus simple sur le moment, mais aurait effacé la parole de Mme H." },
            { text: "Laisser la famille décider des visites, pour ne pas ajouter de tension supplémentaire dans la chambre.", correct: false, feedback: "Séduisant : tu préserves l'entourage et évites une confrontation douloureuse. Mais les derniers souhaits de Mme H. restent sans effet, alors que c'est précisément ton rôle de les faire respecter." },
            { text: "Demander à la famille de sortir immédiatement, au nom de la consigne donnée par la résidente.", correct: false, feedback: "Séduisant : tu protèges la tranquillité demandée et tu n'hésites pas à faire respecter la règle. Mais une expulsion brutale prive Mme H. et ses proches d'un dernier moment partagé, sans recherche d'accord." },
            { text: "Attendre le passage du médecin pour évoquer les souhaits de Mme H. et laisser la discussion se poursuivre.", correct: false, feedback: "Séduisant : tu renvoies un sujet délicat à la personne la plus légitime. Mais attendre une heure prolongerait le bruit et la lumière que Mme H. a justement demandé de réduire." }
          ] },
        { q: "La fille te demande : « Combien de temps lui reste-t-il ? » Que réponds-tu ?",
          choices: [
            { text: "Écouter son inquiétude, dire que tu ne peux pas faire de pronostic et orienter vers le médecin.", correct: true, feedback: "Juste : tu accueilles la détresse sans empiéter sur le rôle médical et tu indiques un interlocuteur. Donner une estimation aurait pu rassurer, mais un pronostic ne relève pas de ta compétence." },
            { text: "Donner une estimation prudente, pour lui permettre de s'organiser avec le reste de sa famille.", correct: false, feedback: "Séduisant : la famille a besoin de se préparer et ton hypothèse peut sembler compatissante. Mais avancer un délai sans compétence médicale engage ta parole et peut être vécu comme une promesse." },
            { text: "Répondre que l'équipe ne communique jamais ces informations, pour rester parfaitement neutre.", correct: false, feedback: "Séduisant : la règle est claire et tu évites de dire ce que tu ne sais pas. Mais une formule fermée sans écoute laisse la famille seule avec son inquiétude, au moment où elle a besoin d'être entendue." },
            { text: "Proposer de transmettre la question à l'infirmière dès son retour, sans autre parole maintenant.", correct: false, feedback: "Séduisant : tu trouves la bonne personne et tu évites une réponse hasardeuse. Mais renvoyer la discussion à plus tard, sans écouter la fille, donne l'impression que sa question est écartée." }
          ] },
        { q: "Après le décès de Mme H., que fais-tu auprès de la famille et de l'équipe ?",
          choices: [
            { text: "Respecter la procédure de la structure, accompagner la famille et transmettre les derniers souhaits à l'équipe.", correct: true, feedback: "Juste : tu articules dignité, accompagnement et continuité pour l'équipe. Laisser la famille gérer seule les démarches aurait paru respectueux, mais tu avais un rôle à tenir jusqu'au bout." },
            { text: "Laisser la famille s'occuper des formalités, pour lui préserver un moment d'intimité auprès de Mme H.", correct: false, feedback: "Séduisant : l'intimité est précieuse et tu ne veux pas imposer des papiers dans cet instant. Mais les procédures de la structure existent aussi pour protéger la famille et garantir le respect de la personne." },
            { text: "Raconter à l'équipe ce que tu as ressenti pendant l'accompagnement, sans noter les faits survenus.", correct: false, feedback: "Séduisant : partager ton émotion peut aider un groupe éprouvé. Mais le vécu personnel ne remplace pas la transmission des derniers souhaits et des informations utiles à l'équipe qui prend le relais." },
            { text: "Attendre le retour de l'infirmière avant de parler à la famille, pour ne rien dire de travers.", correct: false, feedback: "Séduisant : ta prudence évite une parole maladroite dans un moment fragile. Mais la famille reste sans accompagnement pendant ce temps, alors que ta présence et ton écoute sont justement attendues." }
          ] }
      ],
      bilan: "Tu as arbitré entre la volonté exprimée par Mme H. et l'emprise émotionnelle de sa famille. Point fort : tu as su écouter sans donner de pronostic et orienter vers le médecin. À retravailler : rester présent après le décès en respectant la procédure et en transmettant les derniers souhaits."
    }
  ];

  // ---------- NIVEAUX DE MAÎTRISE ----------
  const NIVEAUX = [
    { code: 0, label: "Non acquis", color: "#cbd5e1" },
    { code: 1, label: "En cours", color: "#f9a825" },
    { code: 2, label: "Acquis", color: "#42a5f5" },
    { code: 3, label: "Maîtrisé", color: "#2e7d32" }
  ];

  // ---------- RÈGLES D'ADAPTATION (remédiation) ----------
  // Si score < 70% sur un scénario, proposer ces scénarios de remédiation
  const REMEDIATION = {
    "B1": ["S1","S5","S11","S16","S20"],
    "B2": ["S2","S6","S8","S12","S13","S17"],
    "B3": ["S3","S9","S14","S18"],
    "B4": ["S4","S10","S15","S19"]
  };

  return { SOURCE_OFFICIELLE, BLOCS, COMPETENCES, CRITERES, TIMELINE, SCENARIOS, NIVEAUX, REMEDIATION };
})();
