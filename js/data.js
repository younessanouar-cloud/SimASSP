/* ============================================================
   SimASSP — Données : compétences, scénarios, critères
   Fidèle au référentiel Bac Pro ASSP (4 blocs)
   Enrichi : indices progressifs, variantes, difficulté, compétences liées
   ============================================================ */

window.SIM_DATA = (function () {
  "use strict";

  // ---------- BLOCS ----------
  const BLOCS = [
    { code: "B1", emoji: "🤝", title: "Accompagner la personne dans une approche globale et individualisée",
      color: "#1e3a5f", desc: "Posture professionnelle, accueil, communication, projet individualisé, animation d'activités favorisant l'autonomie et la vie sociale." },
    { code: "B2", emoji: "🛁", title: "Intervenir lors des soins d'hygiène, de confort et de sécurité",
      color: "#2e7d32", desc: "Activités d'hygiène et de confort, surveillance de l'état de santé, environnement proche, aides techniques, repas adaptés." },
    { code: "B3", emoji: "👥", title: "Travailler et communiquer en équipe pluriprofessionnelle",
      color: "#2c5282", desc: "Organisation des activités, transmission d'informations, qualité et prévention des risques, bionettoyage, accueil de nouveaux agents." },
    { code: "B4", emoji: "📚", title: "Réaliser des actions d'éducation à la santé",
      color: "#f9a825", desc: "Analyser les besoins d'un public, concevoir, mettre en œuvre, évaluer et ajuster une action d'éducation à la santé." }
  ];

  // ---------- COMPÉTENCES ----------
  const COMPETENCES = [
    { id: "C1.1", bloc: "B1", titre: "Adopter une posture professionnelle adaptée", desc: "Respect, bientraitance, limites de compétence, confidentialité, gestion des émotions.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C1.2", bloc: "B1", titre: "Accueillir et communiquer avec la personne, sa famille et son entourage", desc: "Écoute active, reformulation, adaptation du langage, relation de confiance.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C1.3", bloc: "B1", titre: "Participer à la conception, au suivi et à l'évaluation d'un projet individualisé", desc: "Recueil d'informations, objectifs, participation à l'équipe, évaluation.", annees: ["1","T"], contexte: ["centre","structure"] },
    { id: "C1.4", bloc: "B1", titre: "Concevoir et animer des activités favorisant l'autonomie et la vie sociale", desc: "Choix de l'activité, adaptation au public, animation, bilan.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C2.1", bloc: "B2", titre: "Réaliser les activités d'hygiène, de confort et de sécurisation", desc: "Toilette, habillage, mobilisation, confort, sécurité de la personne.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C2.2", bloc: "B2", titre: "Surveiller l'état de santé et intervenir en conséquence", desc: "Observation, signes d'alerte, prise de constantes, alerte à l'infirmier/médecin.", annees: ["2","1","T"], contexte: ["structure"] },
    { id: "C2.3", bloc: "B2", titre: "Entretenir l'environnement proche et vérifier les aides techniques", desc: "Bionettoyage, rangement, vérification des dispositifs médicaux et aides techniques.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C2.4", bloc: "B2", titre: "Distribuer des repas adaptés et accompagner la prise des repas", desc: "Respect du régime, aide à l'alimentation, observation de l'ingestion, transmission.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C3.1", bloc: "B3", titre: "Organiser ses activités avec l'équipe", desc: "Planification, répartition des tâches, priorités, gestion du temps.", annees: ["1","T"], contexte: ["structure"] },
    { id: "C3.2", bloc: "B3", titre: "Traiter et transmettre les informations, y compris numériques", desc: "Transmissions écrites et orales, dossiers, outils numériques, RGPD.", annees: ["2","1","T"], contexte: ["centre","structure"] },
    { id: "C3.3", bloc: "B3", titre: "Participer à la qualité et à la prévention des risques", desc: "Démarche qualité, signalement, prévention des chutes, infections, ergonomie.", annees: ["1","T"], contexte: ["structure"] },
    { id: "C3.4", bloc: "B3", titre: "Participer à l'accueil et à l'accompagnement de stagiaires", desc: "Tutorat, transmission de savoirs, accompagnement de nouveaux agents.", annees: ["T"], contexte: ["structure"] },
    { id: "C4.1", bloc: "B4", titre: "Analyser les besoins d'un public", desc: "Recueil, observation, diagnostic de situation, priorités.", annees: ["1","T"], contexte: ["centre","structure"] },
    { id: "C4.2", bloc: "B4", titre: "Concevoir une action d'éducation à la santé", desc: "Objectifs, contenu, méthodes, supports, public cible.", annees: ["1","T"], contexte: ["centre"] },
    { id: "C4.3", bloc: "B4", titre: "Mettre en œuvre l'action", desc: "Animation, communication, gestion du groupe, adaptation en temps réel.", annees: ["T"], contexte: ["centre","structure"] },
    { id: "C4.4", bloc: "B4", titre: "Évaluer et ajuster l'action", desc: "Indicateurs, bilan, amélioration continue, restitution.", annees: ["T"], contexte: ["centre"] }
  ];

  // ---------- CRITÈRES D'AUTOÉVALUATION ----------
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
      titre: "Mme D. refuse sa toilette",
      description: "Mme D., 84 ans, présente une gêne à la marche et refuse partiellement sa toilette ce matin. Tu es en PFMP en EHPAD.",
      hints: ["Pense à l'accueil et à la communication avant l'action.", "La bientraitance implique le respect des choix de la personne.", "Une bonne transmission = faits + contexte + suite à donner."],
      variantes: [
        { titre: "Variante : famille présente", description: "La fille de Mme D. est présente et s'inquiète. Adapte ta communication." },
        { titre: "Variante : urgence", description: "Mme D. présente un saignement. Tu dois alerter en priorité." }
      ],
      steps: [
        { q: "Tu entres dans la chambre. Quelle est ta première action ?",
          choices: [
            { text: "Annoncer ta présence et demander à Mme D. comment elle se sent.", correct: true, feedback: "✅ Bon réflexe : tu accueilles, tu observes l'état général et tu respectes la personne." },
            { text: "Commencer directement la toilette pour gagner du temps.", correct: false, feedback: "❌ Tu passes à l'acte sans accueil ni consentement. Cela peut générer de la résistance et nuire à la relation de confiance." },
            { text: "Appeler l'infirmier tout de suite.", correct: false, feedback: "❌ Pas d'urgence identifiée. Tu dois d'abord observer et communiquer avec Mme D. avant d'alerter." }
          ] },
        { q: "Mme D. dit : « Je ne veux pas me laver aujourd'hui, je suis fatiguée. » Que fais-tu ?",
          choices: [
            { text: "Respecter son refus, proposer un compromis (toilette partielle, plus tard) et transmettre.", correct: true, feedback: "✅ Tu respectes son autonomie et ses préférences, tout en maintenant la sécurité et la traçabilité." },
            { text: "Insister fermement pour la toilette complète.", correct: false, feedback: "❌ Tu ignores son refus et sa fatigue. Risque de conflit et de non-respect de la dignité." },
            { text: "Partir sans rien dire et ne rien transmettre.", correct: false, feedback: "❌ Tu abandonnes la personne et tu ne traces pas l'information. L'équipe ne peut pas assurer le suivi." }
          ] },
        { q: "Mme D. accepte une toilette partielle. Quelle observation transmets-tu ?",
          choices: [
            { text: "« Toilette partielle réalisée, personne fatiguée, refus initial, à réévaluer ce soir. »", correct: true, feedback: "✅ Transmission précise, objective, hiérarchisée, avec un élément à suivre." },
            { text: "« Mme D. est difficile ce matin. »", correct: false, feedback: "❌ Jugement subjectif, non professionnel. La transmission doit être factuelle." },
            { text: "« Rien à signaler. »", correct: false, feedback: "❌ Tu omets une information importante pour le suivi (refus initial, fatigue)." }
          ] }
      ],
      bilan: "Tu as mobilisé : accueil, écoute, respect de l'autonomie, bientraitance, transmission. Points forts : communication et respect. À retravailler : anticipation de l'alerte si la fatigue persiste."
    },
    {
      id: "S2", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C2.1","C2.2","C3.2"],
      titre: "Surveillance de l'état de santé",
      description: "M. L., 76 ans, diabétique, se plaint de vertiges après le petit-déjeuner. Tu es en PFMP.",
      hints: ["Sécuriser + observer + mesurer avant d'agir.", "Connais le protocole et alerte toujours.", "Une transmission utile = quand, quoi, comment, qui, évolution."],
      variantes: [
        { titre: "Variante : personne seule", description: "Tu es seul avec M. L. et tu dois gérer l'urgence." }
      ],
      steps: [
        { q: "Quelle est ta première action ?",
          choices: [
            { text: "Observer l'état général, prendre les constantes (tension, glycémie si possible), sécuriser (allonger, ne pas laisser seul).", correct: true, feedback: "✅ Tu priorises la sécurité et le recueil d'informations objectives." },
            { text: "Lui donner du sucre immédiatement.", correct: false, feedback: "❌ Tu agis sans évaluation. Le vertige peut avoir d'autres causes. Tu dois d'abord observer et mesurer." },
            { text: "Le laisser se reposer seul dans sa chambre.", correct: false, feedback: "❌ Risque de chute et d'aggravation. Tu ne peux pas laisser une personne symptomatique seule." }
          ] },
        { q: "Les constantes montrent une hypoglycémie. Que fais-tu ?",
          choices: [
            { text: "Appliquer le protocole (sucre rapide selon prescription), alerter l'infirmier, surveiller.", correct: true, feedback: "✅ Tu respectes le protocole et tu alertes la personne compétente." },
            { text: "Donner un repas complet tout de suite.", correct: false, feedback: "❌ Un repas complet est trop lent pour une hypoglycémie aiguë. Suis le protocole (sucre rapide)." },
            { text: "Ne rien faire et attendre que ça passe.", correct: false, feedback: "❌ L'hypoglycémie peut s'aggraver. Tu dois agir et alerter." }
          ] },
        { q: "Après l'épisode, que transmets-tu ?",
          choices: [
            { text: "Heure, symptômes, constantes, action réalisée, évolution, transmission à l'infirmier.", correct: true, feedback: "✅ Transmission complète et traçable." },
            { text: "« Il a eu un petit malaise. »", correct: false, feedback: "❌ Trop vague. L'équipe a besoin de détails pour assurer le suivi." }
          ] }
      ],
      bilan: "Tu as mobilisé : observation, prise de constantes, protocole, alerte, transmission. Points forts : sécurité. À retravailler : précision des transmissions."
    },
    {
      id: "S3", bloc: "B3", annee: "1", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C3.2","C3.3"],
      titre: "Transmission orale en équipe",
      description: "Fin de service. Tu dois transmettre les informations importantes à l'équipe de l'après-midi.",
      hints: ["Une transmission efficace est structurée et priorisée.", "La chute doit être tracée même sans gravité.", "La qualité se construit avec bienveillance et fermeté."],
      variantes: [],
      steps: [
        { q: "Quel format utilises-tu pour une transmission orale efficace ?",
          choices: [
            { text: "SBAR : Situation, Background, Assessment, Recommendation.", correct: true, feedback: "✅ Méthode structurée, reconnue et efficace pour la transmission." },
            { text: "Raconter tout ce qui s'est passé dans l'ordre chronologique.", correct: false, feedback: "❌ Trop long et peu hiérarchisé. L'équipe a besoin de l'essentiel et des priorités." },
            { text: "Donner uniquement les problèmes.", correct: false, feedback: "❌ Tu omets les éléments positifs et le contexte. La transmission doit être complète et équilibrée." }
          ] },
        { q: "Un résident a eu une chute sans gravité apparente. Que transmets-tu ?",
          choices: [
            { text: "Heure, circonstances, état après la chute, actions réalisées, surveillance à poursuivre, personne alertée.", correct: true, feedback: "✅ Informations complètes et traçables." },
            { text: "« Il est tombé mais ça va. »", correct: false, feedback: "❌ Trop imprécis. Manque de détails pour le suivi et la prévention." }
          ] },
        { q: "Tu remarques qu'un collègue ne respecte pas un protocole d'hygiène. Que fais-tu ?",
          choices: [
            { text: "En parler avec bienveillance au collègue, et si besoin signaler à la hiérarchie.", correct: true, feedback: "✅ Posture professionnelle : communication constructive et respect de la qualité." },
            { text: "Ne rien dire pour éviter les conflits.", correct: false, feedback: "❌ Tu laisses un risque pour les résidents. La qualité et la sécurité priment." },
            { text: "Le dénoncer publiquement devant l'équipe.", correct: false, feedback: "❌ Approche non constructive. Privilégie d'abord le dialogue direct." }
          ] }
      ],
      bilan: "Tu as mobilisé : transmission structurée, traçabilité, communication d'équipe, qualité. Points forts : méthode SBAR. À retravailler : gestion des situations délicates entre collègues."
    },
    {
      id: "S4", bloc: "B4", annee: "T", contexte: "centre", duree: "20 min", difficulte: 3,
      competences: ["C4.1","C4.2","C4.3","C4.4"],
      titre: "Concevoir une action d'éducation à la santé",
      description: "Tu dois concevoir une action d'éducation à la santé sur l'hydratation pour des résidents d'EHPAD.",
      hints: ["Analyser avant de concevoir.", "L'éducation à la santé s'adapte aux freins réels.", "Évaluer = mesurer + ajuster."],
      variantes: [
        { titre: "Variante : public adolescent", description: "L'action porte sur l'hydratation pour des adolescents en lycée." }
      ],
      steps: [
        { q: "Quelle est la première étape ?",
          choices: [
            { text: "Analyser les besoins du public : connaissances, habitudes, freins, capacités.", correct: true, feedback: "✅ Tu pars des besoins réels du public, base de toute action pertinente." },
            { text: "Choisir un support (affiche, brochure) et le distribuer.", correct: false, feedback: "❌ Tu produis un support sans connaître les besoins. Risque d'action inadaptée." },
            { text: "Fixer la date et le lieu de l'action.", correct: false, feedback: "❌ La logistique vient après l'analyse des besoins et la conception." }
          ] },
        { q: "Tu identifies que les résidents boivent peu par peur d'aller aux toilettes. Que fais-tu ?",
          choices: [
            { text: "Adapter l'action : aborder la peur, proposer des astuces (boire par petites quantités, horaires), associer l'équipe.", correct: true, feedback: "✅ Tu adaptes ton action à la réalité du public. C'est la clé de l'éducation à la santé." },
            { text: "Insister sur les recommandations officielles sans tenir compte de la peur.", correct: false, feedback: "❌ Tu ignores le frein principal. L'action sera inefficace." },
            { text: "Abandonner l'action.", correct: false, feedback: "❌ Tu dois adapter, pas renoncer. La peur est une opportunité pédagogique." }
          ] },
        { q: "Comment évalues-tu l'action ?",
          choices: [
            { text: "Indicateurs simples : nombre de participants, augmentation de la consommation d'eau, retour des résidents et de l'équipe.", correct: true, feedback: "✅ Évaluation par indicateurs observables et ajustement possible." },
            { text: "Demander au résident s'il a aimé.", correct: false, feedback: "❌ Trop subjectif. Tu as besoin d'indicateurs mesurables." }
          ] }
      ],
      bilan: "Tu as mobilisé : analyse des besoins, conception adaptée, mise en œuvre, évaluation. Points forts : adaptation. À retravailler : définition d'indicateurs précis."
    },
    {
      id: "S5", bloc: "B1", annee: "2", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C1.1","C1.2","C1.4"],
      titre: "Animer une activité mémoire",
      description: "Tu animes un atelier mémoire pour 6 résidents en EHPAD. M. P. est agité et interrompt.",
      hints: ["L'animation, c'est s'adapter en temps réel.", "Observer et inclure, sans forcer."],
      variantes: [],
      steps: [
        { q: "M. P. interrompt sans cesse. Que fais-tu ?",
          choices: [
            { text: "L'accueillir, lui donner un rôle (distribuer les cartes), puis recentrer le groupe.", correct: true, feedback: "✅ Tu transformes la perturbation en participation et tu maintiens l'animation." },
            { text: "Lui demander de se taire fermement.", correct: false, feedback: "❌ Risque d'escalade et de blessure. Privilégie l'inclusion." },
            { text: "Arrêter l'atelier.", correct: false, feedback: "❌ Tu prives les autres résidents de l'activité. Adapte plutôt." }
          ] },
        { q: "Un résident ne participe pas et semble triste. Que fais-tu ?",
          choices: [
            { text: "L'inviter doucement, proposer une tâche simple, observer et transmettre si besoin.", correct: true, feedback: "✅ Tu respectes son rythme et tu observes pour la suite." },
            { text: "L'ignorer pour ne pas le gêner.", correct: false, feedback: "❌ Tu manques une opportunité d'inclusion et tu ne traces pas une observation importante." }
          ] }
      ],
      bilan: "Tu as mobilisé : animation, adaptation, observation, communication. Points forts : gestion du groupe. À retravailler : observation et transmission des signes de mal-être."
    },
    {
      id: "S6", bloc: "B2", annee: "1", contexte: "structure", duree: "14 min", difficulte: 2,
      competences: ["C2.1","C2.4","C3.2"],
      titre: "Repas et aide à l'alimentation",
      description: "Tu aides Mme R. à déjeuner. Elle a une dysphagie et un régime mixé.",
      hints: ["Sécurité d'abord : identité, prescription, position.", "La toux pendant le repas = alerte aspiration.", "Quantité + incidents + comportement = transmission utile."],
      variantes: [
        { titre: "Variante : refus de manger", description: "Mme R. refuse de manger. Adapte ton approche." }
      ],
      steps: [
        { q: "Avant le repas, que vérifies-tu ?",
          choices: [
            { text: "Identité, régime prescrit, texture, position assise, environnement calme.", correct: true, feedback: "✅ Tu respectes le protocole et tu sécurises le repas." },
            { text: "La texture du repas sans vérifier la prescription.", correct: false, feedback: "❌ Risque d'erreur. Vérifie toujours la prescription et l'identité." },
            { text: "Donner le repas rapidement pour libérer la table.", correct: false, feedback: "❌ Tu négliges la sécurité et le confort. Prends le temps nécessaire." }
          ] },
        { q: "Pendant le repas, Mme R. tousse. Que fais-tu ?",
          choices: [
            { text: "Arrêter, laisser reposer, vérifier la position, observer, alerter si récidive.", correct: true, feedback: "✅ Bonne réaction face à un risque d'aspiration." },
            { text: "Continuer plus vite pour finir.", correct: false, feedback: "❌ Risque d'aspiration grave. Tu dois arrêter et évaluer." },
            { text: "Lui donner de l'eau pour faire passer.", correct: false, feedback: "❌ L'eau peut aggraver l'aspiration. Arrête et évalue d'abord." }
          ] },
        { q: "Après le repas, que transmets-tu ?",
          choices: [
            { text: "Quantité ingérée, toux observée, comportement, évolution, personne alertée si besoin.", correct: true, feedback: "✅ Transmission complète pour le suivi nutritionnel." },
            { text: "« Elle a bien mangé. »", correct: false, feedback: "❌ Trop vague. L'équipe a besoin de détails (quantité, incidents)." }
          ] }
      ],
      bilan: "Tu as mobilisé : protocole repas, sécurité alimentaire, observation, transmission. Points forts : respect du protocole. À retravailler : réaction face à un incident (toux)."
    },
    {
      id: "S7", bloc: "B1", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
      competences: ["C1.1","C1.2","C1.3"],
      titre: "Projet individualisé — M. A. veut rentrer chez lui",
      description: "M. A., 82 ans, en EHPAD depuis 3 mois, exprime le souhait de rentrer chez lui. Tu participes à la réunion d'équipe.",
      hints: ["Le projet individualisé part des souhaits de la personne.", "Le projet se construit avec l'équipe et la personne.", "L'accompagnement inclut la dimension émotionnelle."],
      variantes: [],
      steps: [
        { q: "Comment recueilles-tu les éléments pour comprendre sa demande ?",
          choices: [
            { text: "Entretien individuel, écoute des souhaits, des craintes, des habitudes antérieures, observation de son autonomie.", correct: true, feedback: "✅ Tu recueilles des informations complètes et respectueuses pour nourrir le projet." },
            { text: "Lui dire que c'est impossible et passer à autre chose.", correct: false, feedback: "❌ Tu fermes la discussion et tu ignores ses souhaits." },
            { text: "Décider seul de ce qui est le mieux pour lui.", correct: false, feedback: "❌ Tu usurpes le rôle de l'équipe et tu ne respectes pas son autonomie." }
          ] },
        { q: "En réunion, que proposes-tu ?",
          choices: [
            { text: "Proposer une évaluation de l'autonomie à domicile, un essai de retour, un accompagnement renforcé.", correct: true, feedback: "✅ Tu proposes une démarche progressive et sécurisée, en équipe." },
            { text: "Demander un transfert immédiat sans évaluation.", correct: false, feedback: "❌ Risque de mise en danger. Il faut évaluer avant d'agir." }
          ] },
        { q: "M. A. est déçu car le projet prend du temps. Que fais-tu ?",
          choices: [
            { text: "L'écouter, expliquer les étapes, le rassurer, maintenir le lien et transmettre ses ressentis.", correct: true, feedback: "✅ Tu accompagnes émotionnellement et tu maintiens la relation de confiance." },
            { text: "Lui dire de patienter sans explication.", correct: false, feedback: "❌ Tu ignores sa frustration. Le lien thérapeutique s'affaiblit." }
          ] }
      ],
      bilan: "Tu as mobilisé : recueil, projet individualisé, travail en équipe, accompagnement émotionnel. Points forts : écoute. À retravailler : coordination avec l'équipe et temporalité du projet."
    },
    {
      id: "S8", bloc: "B2", annee: "T", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C2.1","C2.2","C3.3"],
      titre: "Mobilisation et prévention des chutes",
      description: "M. T., 78 ans, a des troubles de l'équilibre. Tu dois l'aider à se lever du fauteuil pour aller aux toilettes.",
      hints: ["Sécurité = environnement + explication + équipement.", "En cas de vacillement, sécuriser d'abord.", "La prévention des chutes repose sur des observations précises."],
      variantes: [],
      steps: [
        { q: "Avant de l'aider à se lever, que fais-tu ?",
          choices: [
            { text: "Vérifier l'environnement (sol sec, obstacle), expliquer le geste, mettre les chaussures, utiliser l'aide technique.", correct: true, feedback: "✅ Tu prépares la sécurité de la personne et de toi-même." },
            { text: "Le lever rapidement sans préparation.", correct: false, feedback: "❌ Risque de chute pour lui et de blessure pour toi." },
            { text: "Lui dire d'attendre qu'un collègue soit disponible sans agir.", correct: false, feedback: "❌ Tu retardes un besoin et tu ne proposes pas de solution sécurisée." }
          ] },
        { q: "Pendant le transfert, M. T. vacille. Que fais-tu ?",
          choices: [
            { text: "Le stabiliser contre toi, le rassurer, le ramener au fauteuil, réévaluer.", correct: true, feedback: "✅ Tu réagis avec calme et sécurité." },
            { text: "Le laisser se rattraper seul.", correct: false, feedback: "❌ Risque de chute grave. Tu dois intervenir immédiatement." },
            { text: "Le forcer à continuer.", correct: false, feedback: "❌ Tu ignores le risque. Arrête et réévalue." }
          ] },
        { q: "Après l'épisode, que transmets-tu ?",
          choices: [
            { text: "Vacillement observé, circonstances, actions, recommandation de réévaluation de la mobilisation et de l'aide technique.", correct: true, feedback: "✅ Transmission complète pour la prévention des chutes." },
            { text: "« Il a failli tomber. »", correct: false, feedback: "❌ Trop vague pour mettre en place une prévention efficace." }
          ] }
      ],
      bilan: "Tu as mobilisé : prévention des chutes, mobilisation sécurisée, observation, transmission. Points forts : sécurité. À retravailler : utilisation des aides techniques et traçabilité."
    },
    {
      id: "S9", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C2.3","C3.2","C3.3"],
      titre: "Bionettoyage et prévention des infections",
      description: "Tu dois réaliser le bionettoyage de la chambre d'un résident porteur d'une infection.",
      hints: ["Le bionettoyage suit un protocole précis.", "Le retrait des EPI et le lavage des mains sont des étapes clés."],
      variantes: [],
      steps: [
        { q: "Quelle est ta première action ?",
          choices: [
            { text: "Lire le protocole, mettre les EPI adaptés, préparer le matériel dédié.", correct: true, feedback: "✅ Tu respectes le protocole et tu te protèges." },
            { text: "Commencer le nettoyage sans EPI pour gagner du temps.", correct: false, feedback: "❌ Risque de contamination pour toi et l'environnement." },
            { text: "Demander à un collègue de le faire à ta place.", correct: false, feedback: "❌ Tu dois réaliser le geste dans ton champ, avec les protections adaptées." }
          ] },
        { q: "Tu termines le nettoyage. Que fais-tu ?",
          choices: [
            { text: "Désinfecter le matériel, retirer les EPI dans l'ordre, se laver les mains, tracer l'action.", correct: true, feedback: "✅ Tu respectes la chaîne de prévention des infections." },
            { text: "Retirer les gants et sortir sans se laver les mains.", correct: false, feedback: "❌ Risque de contamination croisée. Le lavage des mains est indispensable." }
          ] }
      ],
      bilan: "Tu as mobilisé : protocole d'hygiène, prévention des infections, traçabilité. Points forts : respect du protocole. À retravailler : rigueur dans le retrait des EPI."
    },
    {
      id: "S10", bloc: "B4", annee: "1", contexte: "centre", duree: "15 min", difficulte: 2,
      competences: ["C4.1","C4.2","C4.3"],
      titre: "Sensibiliser à l'hygiène des mains",
      description: "Tu dois animer une courte sensibilisation à l'hygiène des mains pour un groupe de résidents.",
      hints: ["L'éducation à la santé se prépare.", "Vérifier la compréhension est essentiel.", "Évaluer pour améliorer."],
      variantes: [],
      steps: [
        { q: "Comment prépares-tu l'animation ?",
          choices: [
            { text: "Définir l'objectif, adapter le contenu au public, prévoir du matériel simple et une démonstration.", correct: true, feedback: "✅ Tu prépares une animation adaptée et concrète." },
            { text: "Improviser sans préparation.", correct: false, feedback: "❌ Risque d'action peu efficace et mal adaptée." }
          ] },
        { q: "Pendant l'animation, un résident ne comprend pas. Que fais-tu ?",
          choices: [
            { text: "Reformuler, utiliser un exemple concret, vérifier la compréhension.", correct: true, feedback: "✅ Tu adaptes et tu vérifies la compréhension." },
            { text: "Continuer sans tenir compte de sa difficulté.", correct: false, feedback: "❌ Tu perds un participant. Adapte ton message." }
          ] },
        { q: "Comment évalues-tu l'action ?",
          choices: [
            { text: "Observation des gestes réalisés, retour des participants, ajustement de l'animation.", correct: true, feedback: "✅ Évaluation par observation et retour." },
            { text: "Ne pas évaluer.", correct: false, feedback: "❌ Tu ne peux pas améliorer l'action sans évaluation." }
          ] }
      ],
      bilan: "Tu as mobilisé : conception, animation, adaptation, évaluation. Points forts : préparation. À retravailler : évaluation par indicateurs."
    },
    {
      id: "S11", bloc: "B1", annee: "2", contexte: "centre", duree: "12 min", difficulte: 2,
      competences: ["C1.1","C1.2"],
      titre: "Communication avec la famille",
      description: "La fille de Mme B. est inquiète et te pose des questions sur l'état de sa mère.",
      hints: ["Écoute, empathie, limites professionnelles.", "La confidentialité est un devoir professionnel."],
      variantes: [],
      steps: [
        { q: "Comment réponds-tu ?",
          choices: [
            { text: "Écouter ses inquiétudes, rassurer avec des faits, respecter la confidentialité, orienter vers l'infirmier si besoin.", correct: true, feedback: "✅ Tu communiques avec empathie et professionnalisme." },
            { text: "Donner des informations médicales détaillées sans vérification.", correct: false, feedback: "❌ Risque de dépasser ton champ et de violer la confidentialité." },
            { text: "Lui dire que ce n'est pas ton rôle et l'ignorer.", correct: false, feedback: "❌ Tu manques d'empathie et de posture professionnelle." }
          ] },
        { q: "La fille demande à voir le dossier médical. Que fais-tu ?",
          choices: [
            { text: "Expliquer que le dossier est confidentiel et orienter vers l'infirmier/médecin.", correct: true, feedback: "✅ Tu respectes la confidentialité et tu orientes correctement." },
            { text: "Lui montrer le dossier.", correct: false, feedback: "❌ Violation de la confidentialité. Le dossier est réservé aux professionnels." }
          ] }
      ],
      bilan: "Tu as mobilisé : communication, empathie, confidentialité, limites professionnelles. Points forts : écoute. À retravailler : orientation vers les professionnels compétents."
    },
    {
      id: "S12", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C2.1","C2.2","C3.2"],
      titre: "Prise de constantes",
      description: "Tu dois prendre la tension et la température de M. C. avant la visite médicale.",
      hints: ["Expliquer + installer + hygiène + notation.", "Transmettre sans alarmer."],
      variantes: [],
      steps: [
        { q: "Comment procèdes-tu ?",
          choices: [
            { text: "Expliquer le geste, installer confortablement, utiliser le matériel propre, noter les valeurs.", correct: true, feedback: "✅ Geste professionnel respectueux et rigoureux." },
            { text: "Prendre les constantes sans expliquer.", correct: false, feedback: "❌ Tu négliges la communication et le consentement." }
          ] },
        { q: "La tension est élevée (16/9). Que fais-tu ?",
          choices: [
            { text: "Noter, ne pas alarmer la personne, transmettre à l'infirmier/médecin.", correct: true, feedback: "✅ Tu gères avec calme et tu transmets correctement." },
            { text: "Lui dire qu'il a un grave problème.", correct: false, feedback: "❌ Tu alarmes inutilement. Transmets à la personne compétente." },
            { text: "Ne rien dire et ne rien noter.", correct: false, feedback: "❌ Tu omets une information importante pour le suivi médical." }
          ] }
      ],
      bilan: "Tu as mobilisé : prise de constantes, communication, transmission. Points forts : rigueur. À retravailler : gestion de l'annonce des résultats."
    },
    // ---- NOUVEAUX SCÉNARIOS (axe 1 : richesse) ----
    {
      id: "S13", bloc: "B2", annee: "T", contexte: "structure", duree: "12 min", difficulte: 3,
      competences: ["C2.2","C3.2","C3.3"],
      titre: "Détresse respiratoire",
      description: "Mme E., 88 ans, présente une détresse respiratoire soudaine en salle à manger.",
      hints: ["En urgence : sécurité, alerte, position, surveillance.", "Ne jamais laisser seul une personne en détresse.", "La transmission d'urgence doit être claire et immédiate."],
      variantes: [
        { titre: "Variante : seul", description: "Tu es seul avec Mme E. et tu dois gérer l'alerte." }
      ],
      steps: [
        { q: "Quelle est ta première action ?",
          choices: [
            { text: "Alerter immédiatement l'infirmier/médecin, sécuriser la personne (position demi-assise), ne pas la laisser seule.", correct: true, feedback: "✅ Tu priorises l'alerte et la sécurité." },
            { text: "Lui donner de l'eau.", correct: false, feedback: "❌ Risque d'aggravation. Tu dois alerter et sécuriser d'abord." },
            { text: "Attendre que ça passe.", correct: false, feedback: "❌ La détresse respiratoire est une urgence. Alerte immédiatement." }
          ] },
        { q: "En attendant l'infirmier, que fais-tu ?",
          choices: [
            { text: "Surveiller la respiration, le pouls, la conscience, rassurer, préparer le matériel.", correct: true, feedback: "✅ Tu surveilles et tu prépares pour l'équipe." },
            { text: "La laisser seule pour aller chercher de l'aide.", correct: false, feedback: "❌ Ne jamais laisser une personne en détresse seule." }
          ] },
        { q: "Après l'intervention, que transmets-tu ?",
          choices: [
            { text: "Heure, circonstances, signes observés, actions, évolution, personne alertée.", correct: true, feedback: "✅ Transmission d'urgence complète." },
            { text: "« Elle a eu du mal à respirer. »", correct: false, feedback: "❌ Trop vague pour le suivi médical." }
          ] }
      ],
      bilan: "Tu as mobilisé : alerte, sécurité, surveillance, transmission d'urgence. Points forts : réactivité. À retravailler : précision des transmissions en urgence."
    },
    {
      id: "S14", bloc: "B3", annee: "T", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C3.1","C3.2","C3.4"],
      titre: "Accueil d'un stagiaire",
      description: "Un nouveau stagiaire arrive dans ton service. Tu es chargé de l'accueillir et de l'accompagner.",
      hints: ["L'accueil se prépare et s'organise.", "La transmission des savoirs se fait progressivement.", "L'encadrement inclut la sécurité et la qualité."],
      variantes: [],
      steps: [
        { q: "Comment prépares-tu son arrivée ?",
          choices: [
            { text: "Préparer le planning, les consignes de sécurité, présenter l'équipe et les résidents.", correct: true, feedback: "✅ Tu prépares un accueil structuré et sécurisé." },
            { text: "Le laisser se débrouiller seul.", correct: false, feedback: "❌ Manque d'encadrement et de sécurité." }
          ] },
        { q: "Le stagiaire hésite à réaliser un soin. Que fais-tu ?",
          choices: [
            { text: "L'accompagner, expliquer, superviser, puis laisser faire progressivement.", correct: true, feedback: "✅ Tu accompagnes dans la progression." },
            { text: "Le forcer à réaliser seul.", correct: false, feedback: "❌ Risque d'erreur et de stress. Accompagne d'abord." }
          ] },
        { q: "Comment évalues-tu son intégration ?",
          choices: [
            { text: "Observation, feedback régulier, ajustement de l'accompagnement, transmission à l'équipe.", correct: true, feedback: "✅ Évaluation continue et constructive." },
            { text: "Ne pas évaluer.", correct: false, feedback: "❌ Tu ne peux pas améliorer l'accompagnement sans évaluation." }
          ] }
      ],
      bilan: "Tu as mobilisé : accueil, transmission de savoirs, encadrement, évaluation. Points forts : organisation. À retravailler : feedback et accompagnement progressif."
    },
    {
      id: "S15", bloc: "B4", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
      competences: ["C4.1","C4.2","C4.3","C4.4"],
      titre: "Action de prévention — chutes à domicile",
      description: "Tu dois concevoir et animer une action de prévention des chutes pour des personnes âgées à domicile.",
      hints: ["Analyser les besoins et les risques à domicile.", "Adapter l'action au lieu de vie.", "Évaluer et ajuster avec les personnes accompagnées."],
      variantes: [],
      steps: [
        { q: "Quelle est la première étape ?",
          choices: [
            { text: "Visiter le domicile, identifier les risques (tapis, éclairage, sol), recueillir les habitudes.", correct: true, feedback: "✅ Tu analyses le contexte réel." },
            { text: "Distribuer une brochure générale.", correct: false, feedback: "❌ Trop générique. Analyse d'abord le contexte." }
          ] },
        { q: "Tu identifies un tapis glissant. Que proposes-tu ?",
          choices: [
            { text: "Proposer de le retirer ou de le fixer, avec l'accord de la personne, et proposer des alternatives.", correct: true, feedback: "✅ Tu proposes une solution respectueuse et pratique." },
            { text: "Le retirer sans demander.", correct: false, feedback: "❌ Tu ne respectes pas l'autonomie et le lieu de vie." }
          ] },
        { q: "Comment évalues-tu l'action ?",
          choices: [
            { text: "Visite de suivi, observation des changements, retour de la personne, ajustement.", correct: true, feedback: "✅ Évaluation par suivi et retour." },
            { text: "Ne pas suivre.", correct: false, feedback: "❌ Tu ne peux pas savoir si l'action a été efficace." }
          ] }
      ],
      bilan: "Tu as mobilisé : analyse de besoins, conception, mise en œuvre, évaluation. Points forts : adaptation au contexte. À retravailler : suivi et évaluation à long terme."
    },
    {
      id: "S16", bloc: "B1", annee: "1", contexte: "structure", duree: "12 min", difficulte: 2,
      competences: ["C1.1","C1.2","C1.4"],
      titre: "Activité physique adaptée",
      description: "Tu animes une séance de gymnastique douce pour des résidents. Mme F. a peur de tomber.",
      hints: ["L'animation s'adapte aux peurs et aux capacités.", "La sécurité est prioritaire.", "L'inclusion passe par l'adaptation."],
      variantes: [],
      steps: [
        { q: "Mme F. refuse de participer. Que fais-tu ?",
          choices: [
            { text: "L'accueillir, lui proposer une participation assise, la rassurer, observer.", correct: true, feedback: "✅ Tu adaptes et tu respectes ses limites." },
            { text: "L'inscrire de force.", correct: false, feedback: "❌ Risque de stress et de refus. Respecte son rythme." },
            { text: "L'ignorer.", correct: false, feedback: "❌ Tu manques une opportunité d'inclusion." }
          ] },
        { q: "Pendant la séance, un résident se sent mal. Que fais-tu ?",
          choices: [
            { text: "Arrêter, sécuriser, évaluer, alerter si besoin, rassurer le groupe.", correct: true, feedback: "✅ Tu priorises la sécurité et tu gères le groupe." },
            { text: "Continuer la séance.", correct: false, feedback: "❌ Risque d'aggravation. Arrête et évalue." }
          ] }
      ],
      bilan: "Tu as mobilisé : animation, adaptation, sécurité, inclusion. Points forts : respect des limites. À retravailler : gestion d'incident pendant l'animation."
    },
    {
      id: "S17", bloc: "B2", annee: "1", contexte: "centre", duree: "12 min", difficulte: 1,
      competences: ["C2.1","C2.3"],
      titre: "Hygiène et confort — toilette au lit",
      description: "Tu dois réaliser la toilette au lit de M. G., alité, avec aide partielle.",
      hints: ["Respect, intimité, sécurité.", "La toilette se prépare et se réalise avec consentement.", "L'observation pendant le soin est importante."],
      variantes: [],
      steps: [
        { q: "Avant la toilette, que fais-tu ?",
          choices: [
            { text: "Présenter le soin, demander le consentement, préparer le matériel, préserver l'intimité.", correct: true, feedback: "✅ Tu respectes la personne et tu prépares le soin." },
            { text: "Commencer sans explication.", correct: false, feedback: "❌ Manque de respect et de consentement." }
          ] },
        { q: "Pendant la toilette, tu observes une rougeur. Que fais-tu ?",
          choices: [
            { text: "Noter l'observation, adapter le soin, transmettre à l'infirmier.", correct: true, feedback: "✅ Tu observes et tu transmets." },
            { text: "Ignorer la rougeur.", correct: false, feedback: "❌ Tu manques une observation importante pour la prévention des escarres." }
          ] }
      ],
      bilan: "Tu as mobilisé : soin d'hygiène, respect, observation, transmission. Points forts : préparation. À retravailler : observation et traçabilité."
    },
    {
      id: "S18", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
      competences: ["C3.2","C3.3"],
      titre: "Signalement d'un événement indésirable",
      description: "Tu observes une erreur de distribution de médicaments par un collègue.",
      hints: ["La sécurité des résidents est prioritaire.", "Le signalement se fait avec respect et professionnalisme.", "La traçabilité est essentielle."],
      variantes: [],
      steps: [
        { q: "Que fais-tu ?",
          choices: [
            { text: "Informer immédiatement l'infirmier responsable, ne pas cacher l'erreur, accompagner le résident.", correct: true, feedback: "✅ Tu priorises la sécurité et la transparence." },
            { text: "Ne rien dire pour protéger le collègue.", correct: false, feedback: "❌ Tu mets en danger le résident et tu manques à ton devoir professionnel." },
            { text: "Confronter le collègue publiquement.", correct: false, feedback: "❌ Approche non constructive. Alerte d'abord la hiérarchie." }
          ] },
        { q: "Après l'alerte, que fais-tu ?",
          choices: [
            { text: "Participer à l'analyse de l'événement, proposer des améliorations, tracer.", correct: true, feedback: "✅ Tu contribues à la démarche qualité." },
            { text: "Oublier l'événement.", correct: false, feedback: "❌ Tu manques une opportunité d'amélioration de la sécurité." }
          ] }
      ],
      bilan: "Tu as mobilisé : qualité, prévention, transmission, professionnalisme. Points forts : réactivité. À retravailler : démarche qualité et analyse d'événement."
    },
    {
      id: "S19", bloc: "B4", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
      competences: ["C4.1","C4.2"],
      titre: "Concevoir une action sur le sommeil",
      description: "Tu dois concevoir une action d'éducation à la santé sur l'hygiène du sommeil pour des résidents.",
      hints: ["Analyser les besoins et les habitudes.", "Adapter le contenu au public.", "Évaluer et ajuster."],
      variantes: [],
      steps: [
        { q: "Quelle est la première étape ?",
          choices: [
            { text: "Recueillir les habitudes de sommeil, les difficultés, les attentes des résidents.", correct: true, feedback: "✅ Tu analyses les besoins réels." },
            { text: "Distribuer un dépliant sur le sommeil.", correct: false, feedback: "❌ Trop générique. Analyse d'abord." }
          ] },
        { q: "Tu identifies que le bruit nocturne gêne le sommeil. Que fais-tu ?",
          choices: [
            { text: "Proposer des solutions (bouchons, horaires, organisation) et associer l'équipe.", correct: true, feedback: "✅ Tu proposes des solutions concrètes et concertées." },
            { text: "Ignorer le problème.", correct: false, feedback: "❌ Tu manques une opportunité d'amélioration." }
          ] }
      ],
      bilan: "Tu as mobilisé : analyse, conception, adaptation. Points forts : recueil. À retravailler : évaluation et ajustement."
    },
    {
      id: "S20", bloc: "B1", annee: "3", contexte: "structure", duree: "15 min", difficulte: 3,
      competences: ["C1.1","C1.2","C1.3"],
      titre: "Fin de vie — accompagnement",
      description: "Mme H. est en fin de vie. Sa famille est présente et en détresse. Tu accompagnes.",
      hints: ["L'accompagnement en fin de vie est global et respectueux.", "La communication avec la famille est essentielle.", "Le respect de la dignité et des souhaits est prioritaire."],
      variantes: [],
      steps: [
        { q: "Comment accompagnes-tu Mme H. ?",
          choices: [
            { text: "Respecter ses souhaits, préserver son confort, sa dignité, sa tranquillité.", correct: true, feedback: "✅ Tu accompagnes avec respect et professionnalisme." },
            { text: "Éviter la chambre pour ne pas être confronté.", correct: false, feedback: "❌ Tu abandonnes la personne. L'accompagnement est un devoir." }
          ] },
        { q: "La famille te pose des questions. Que fais-tu ?",
          choices: [
            { text: "Écouter, rassurer avec empathie, orienter vers l'infirmier/médecin pour les questions médicales.", correct: true, feedback: "✅ Tu communiques avec empathie et dans ton champ." },
            { text: "Donner des pronostics médicaux.", correct: false, feedback: "❌ Tu dépasses ton champ. Oriente vers le professionnel compétent." }
          ] },
        { q: "Après le décès, que fais-tu ?",
          choices: [
            { text: "Respecter les protocoles, accompagner la famille, transmettre les informations, participer au soutien.", correct: true, feedback: "✅ Tu accompagnes dans la continuité." },
            { text: "Partir sans rien dire.", correct: false, feedback: "❌ Tu manques à ton devoir d'accompagnement." }
          ] }
      ],
      bilan: "Tu as mobilisé : accompagnement, communication, respect, professionnalisme. Points forts : empathie. À retravailler : gestion de la fin de vie et communication avec la famille."
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

  return { BLOCS, COMPETENCES, CRITERES, TIMELINE, SCENARIOS, NIVEAUX, REMEDIATION };
})();
