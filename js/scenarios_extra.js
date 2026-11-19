window.SIM_SCENARIOS_EXTRA = [
  {
    id: "S41", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C1.1", "C1.2"],
    titre: "Accueillir M. K. sans décider à sa place",
    description: "M. K., 45 ans, en situation de handicap moteur, arrive en structure pour la première fois. Il hésite sur le seuil, sa canne reste dans son sac. La salle d'attente est déjà occupée.",
    hints: ["Une aide proposée n'est pas une aide imposée.", "L'organisation du service ne dispense pas de l'accueil.", "La famille est une ressource, pas un porte-parole automatique."],
    variantes: [
      { titre: "Variante — famille très présente", description: "La sœur de M. K. répond à ta place et souhaite le pousser dans son fauteuil. Comment garder M. K. au centre de l'échange ?" },
      { titre: "Variante — heure de pointe", description: "Trois personnes arrivent en même temps que M. K. Tu dois arbitrer sans le faire attendre debout." }
    ],
    steps: [
      { q: "M. K. hésite à l'entrée. Quelle est ta première action ?",
        choices: [
          { text: "Te présenter à sa hauteur et lui demander comment il préfère être accompagné.", correct: true, feedback: "Juste : tu prends en compte la situation et l'interlocuteur. Le réflexe de sécurité est compréhensible, mais décider avant d'avoir écouté retire à M. K. la maîtrise de son déplacement." },
          { text: "Aller chercher un fauteuil par précaution avant même de lui adresser la parole.", correct: false, feedback: "Séduisant : tu veux sécuriser. Mais le fauteuil s'impose sans évaluation de ses capacités : l'annexe III attend un questionnement et une réponse adaptée, pas une solution unique." },
          { text: "L'installer en salle d'attente et revenir après l'accueil des autres arrivants.", correct: false, feedback: "Séduisant : tu gères le flux. Mais le report de l'accueil laisse une personne en difficulté sans interlocuteur, ce qui contredit la création d'un climat de confiance." },
          { text: "Demander à sa sœur ce qu'il aime, sans l'interroger lui-même.", correct: false, feedback: "Séduisant : tu recueilles une information utile. Mais l'entourage complète la parole de la personne, il ne la remplace pas." }
        ] },
      { q: "Il accepte ton bras pour marcher mais refuse le fauteuil proposé par l'établissement. Que fais-tu ?",
        choices: [
          { text: "Respecter son refus, adapter ton rythme au sien et rester disponible.", correct: true, feedback: "Juste : tu respectes ses choix tout en assurant un accompagnement. L'arbitrage ici est entre la sécurité souhaitée par l'équipe et l'autonomie exprimée par la personne : c'est elle qui tranche." },
          { text: "Insister : le fauteuil est plus sûr et l'équipe l'a recommandé.", correct: false, feedback: "Séduisant : tu suis une recommandation collective. Mais une recommandation ne vaut pas accord de la personne concernée." },
          { text: "Le laisser seul pour ne pas le contraindre, en restant à quelques pas.", correct: false, feedback: "Séduisant : tu crois préserver son autonomie. Mais tu confonds non-ingérence et retrait : il a accepté ton aide, tu dois l'assurer." },
          { text: "Demander à l'infirmière de décider à sa place, par prudence.", correct: false, feedback: "Séduisant : tu évites une erreur. Mais tu déplaces la décision alors que la situation ne dépasse pas ton champ de compétences." }
        ] },
      { q: "Après l'installation, que consignes-tu dans la transmission ?",
        choices: [
          { text: "Son mode de déplacement, son refus du fauteuil et les gestes qui l'ont rassuré.", correct: true, feedback: "Juste : l'information est factuelle, utilisable par l'équipe suivante et respectueuse de la personne. Elle permet d'éviter de lui reproposer le fauteuil dès demain." },
          { text: "Son heure d'arrivée et le numéro de sa chambre uniquement.", correct: false, feedback: "Séduisant : c'est la donnée administrative attendue. Mais elle ne permet pas d'assurer la continuité de l'accompagnement." },
          { text: "« Accueil réalisé, tout s'est bien passé. »", correct: false, feedback: "Séduisant : le bilan est positif. Mais une formulation globale efface les informations qui servent aux collègues." },
          { text: "Laisser la famille transmettre ses besoins lors du prochain repas.", correct: false, feedback: "Séduisant : la famille est impliquée. Mais la transmission professionnelle reste de la responsabilité de l'équipe." }
        ] }
    ],
    bilan: "Tu as arbitré entre sécurité, autonomie et organisation du service. Point fort : avoir écouté avant de proposer. À retravailler : transformer ce qui a été observé en transmission réellement utilisable."
  },

  {
    id: "S42", bloc: "B1", annee: "1", contexte: "structure", duree: "20 min", difficulte: 3,
    competences: ["C1.2", "C1.4"],
    titre: "Atelier cuisine : interrompre sans abandonner le groupe",
    description: "Tu animes un atelier cuisine avec six résidents. Mme B. se coupe légèrement le doigt en éminçant des légumes. Le groupe attend la suite de la recette et leFour est en marche.",
    hints: ["La sécurité de la personne prime sur le déroulé de l'activité.", "Une tâche adaptée vaut mieux qu'une exclusion.", "Ce qui a été constaté doit être transmis."],
    variantes: [
      { titre: "Variante — four en marche", description: "La coupure survient alors que le plat doit entrer au four dans deux minutes. Comment gérer simultanément la plaie et le four ?" },
      { titre: "Variante — groupe agité", description: "Deux résidents commencent à s'impatienter et plaisantent sur l'incident." }
    ],
    steps: [
      { q: "Mme B. montre son doigt qui saigne peu. Quelle est ta priorité ?",
        choices: [
          { text: "Arrêter ton animation, sécuriser le plan de travail et rejoindre Mme B.", correct: true, feedback: "Juste : tu interromps l'activité le temps nécessaire. Continuer aurait été séduisant pour le rythme du groupe, mais une plaie même légère doit être évaluée avant toute reprise." },
          { text: "Demander à un résident de surveiller le four pendant que tu soignes.", correct: false, feedback: "Séduisant : tu évites d'interrompre la cuisson. Mais tu confies une responsabilité de sécurité à une personne non formée, sans vérifier la zone de coupe." },
          { text: "Poursuivre la recette : la coupure est superficielle et le groupe attend.", correct: false, feedback: "Séduisant : tu préserves la dynamique du groupe. Mais l'annexe III attend le respect du confort et de la sécurité pendant l'activité." },
          { text: "Envoyer Mme B. seule au cabinet de soins avec une compresse.", correct: false, feedback: "Séduisant : tu respectes son autonomie. Mais tu laisses une personne blessée circuler seule alors que tu es l'adulte référent de l'atelier." }
        ] },
      { q: "Le pansement tient, mais Mme B. veut reprendre son couteau. Que proposes-tu ?",
        choices: [
          { text: "Lui confier une tâche sans lame et vérifier que le pansement reste propre.", correct: true, feedback: "Juste : tu maintiens sa participation tout en écartant le risque. Exclure aurait été plus simple, mais l'activité doit rester un levier de valorisation." },
          { text: "L'autoriser à reprendre si elle dit ne plus avoir mal.", correct: false, feedback: "Séduisant : tu suis son souhait. Mais l'absence de douleur ne garantit ni la propreté du pansement ni la sécurité du geste." },
          { text: "L'écarter de l'atelier jusqu'à la fin, par mesure de prudence.", correct: false, feedback: "Séduisant : le risque est écarté. Mais l'isolement transforme un incident mineur en exclusion." },
          { text: "Demander à un autre résident de prendre son couteau à sa place.", correct: false, feedback: "Séduisant : la recette avance. Mais tu déplaces le problème sans proposer à Mme B. une participation adaptée." }
        ] },
      { q: "Le groupe a vu l'incident et s'agite. Que dis-tu à la reprise ?",
        choices: [
          { text: "Nommer brièvement ce qui s'est passé, rassurer, puis relancer la recette.", correct: true, feedback: "Juste : tu restes factuel et tu restaures un climat de sécurité. Faire comme si rien ne s'était passé aurait été séduisant pour calmer, mais le groupe a besoin de repères." },
          { text: "Annuler l'atelier et raccompagner tout le monde en chambre.", correct: false, feedback: "Séduisant : tu supprimez toute source de risque. Mais une coupure légère ne justifie pas d'interrompre une activité pour l'ensemble du groupe." },
          { text: "Faire comme si rien ne s'était passé pour ne pas inquiéter les résidents.", correct: false, feedback: "Séduisant : tu évites l'agitation. Mais le non-dit alimente souvent plus d'inquiétude qu'une phrase calme et factuelle." },
          { text: "Laisser le groupe décider seul de la suite de l'atelier.", correct: false, feedback: "Séduisant : tu valorises leur autonomie. Mais la conduite de l'activité et la gestion du risque restent de ta responsabilité." }
        ] }
    ],
    bilan: "Tu as dû arbitrer entre la sécurité individuelle, la continuité du groupe et la place de la résidente. Point fort : avoir maintenu sa participation. À retravailler : la transmission de l'incident à l'équipe soignante."
  },

  {
    id: "S43", bloc: "B2", annee: "2", contexte: "structure", duree: "18 min", difficulte: 2,
    competences: ["C2.1", "C2.4", "C1.1"],
    titre: "Repas : vérifier avant de servir, accompagner sans forcer",
    description: "Tu distribues les repas du soir. Deux plateaux se ressemblent ; l'un concerne un résident allergique aux fruits à coque. Mme L., à une autre table, repousse son assiette en disant qu'elle n'a pas faim.",
    hints: ["Une allergie connue ne dispense pas d'une vérification.", "Un refus de repas est une information, pas un caprice.", "La quantité ingérée s'observe et se transmet."],
    variantes: [
      { titre: "Variante — plateau déjà servi", description: "Le plateau du résident allergique a déjà été posé devant lui. Que fais-tu immédiatement ?" },
      { titre: "Variante — refus répété", description: "Mme L. a déjà refusé son repas hier soir et ce midi." }
    ],
    steps: [
      { q: "Avant de servir les deux plateaux identiques, que fais-tu ?",
        choices: [
          { text: "Comparer les étiquettes au plan de repas et confirmer auprès de la cuisine.", correct: true, feedback: "Juste : tu vérifies la conformité au besoin de la personne. Se fier à l'habitude est compréhensible, mais une erreur d'étiquetage reste possible." },
          { text: "Servir le plateau habituel : l'allergie est connue de l'équipe depuis longtemps.", correct: false, feedback: "Séduisant : tu fais confiance à l'organisation en place. Mais une information ancienne ne remplace pas un contrôle au moment du service." },
          { text: "Retirer les fruits à coque visibles et servir le reste du plateau.", correct: false, feedback: "Séduisant : tu agis immédiatement. Mais une préparation peut contenir des traces invisibles : seul le circuit de la cuisine peut confirmer." },
          { text: "Demander au résident s'il est toujours allergique avant de servir.", correct: false, feedback: "Séduisant : tu l'associes à la décision. Mais sa réponse ne remplace pas la vérification du plateau, qui relève de ta responsabilité." }
        ] },
      { q: "Mme L. repousse son assiette. Elle a peu mangé la veille. Que fais-tu ?",
        choices: [
          { text: "Reformuler son propos, proposer un autre format et transmettre l'observation.", correct: true, feedback: "Juste : tu respectes son choix tout en restant attentif au risque nutritionnel. L'arbitrage est entre la liberté de la personne et la surveillance dont tu es chargé." },
          { text: "Insister pour qu'elle mange au moins le plat principal, elle en a besoin.", correct: false, feedback: "Séduisant : tu veux préserver sa santé. Mais contraindre une adulte à manger contredit le respect de son autonomie." },
          { text: "Retirer le plateau sans rien dire pour ne pas la contrarier.", correct: false, feedback: "Séduisant : tu évites la discussion. Mais tu perds une information importante pour la suite du suivi." },
          { text: "Proposer un complémentnutritionnel de ta propre initiative.", correct: false, feedback: "Séduisant : tu apportes une réponse concrète. Mais un changement nutritionnel dépasse ton champ de compétences sans avis de l'équipe." }
        ] },
      { q: "Après le repas, que notes-tu ?",
        choices: [
          { text: "L'estimation de ce qui a été ingéré, le refus et la comparaison avec la veille.", correct: true, feedback: "Juste : la transmission est factuelle et permet de repérer une tendance. C'est exactement ce qui sert à l'équipe suivante." },
          { text: "« Repas refusé », sans autre précision.", correct: false, feedback: "Séduisant : c'est rapide. Mais l'information est trop pauvre pour décider d'une suite." },
          { text: "L'heure de service et le numéro de table uniquement.", correct: false, feedback: "Séduisant : tu respectes le cadre administratif. Mais tu omets l'observation qui a du sens pour la santé de la résidente." },
          { text: "Rien pour l'instant : tu attendras de voir si le refus se reproduit.", correct: false, feedback: "Séduisant : tu évites de signaler un événement banal. Mais tu prives l'équipe d'un élément de suivi daté." }
        ] }
    ],
    bilan: "Tu as arbitré entre la sécurité alimentaire et le respect du choix de la personne. Point fort : la vérification avant service. À retravailler : rendre la transmission assez précise pour permettre un suivi."
  },

  {
    id: "S44", bloc: "B2", annee: "1", contexte: "structure", duree: "20 min", difficulte: 3,
    competences: ["C2.2", "C2.3"],
    titre: "Retour d'hospitalisation : alerter sans attendre la certitude",
    description: "Mme C., 70 ans, est rentrée hier d'une intervention chirurgicale. En début de matinée, tu la trouves confuse, avec une tension basse et un pansement humide. L'infirmière est en réunion jusqu'à 10 h.",
    hints: ["Un changement d'état se signale immédiatement.", "Transmettre, c'est aussi dire ce que l'on ne sait pas.", "L'hygiène de l'environnement fait partie de la surveillance."],
    variantes: [
      { titre: "Variante — infirmière joignable", description: "L'infirmière est dans le couloir. Quel message lui adresses-tu en premier ?" },
      { titre: "Variante — résidente rassurante", description: "Mme C. affirme qu'elle se sent bien et refuse qu'on 'l'embête'." }
    ],
    steps: [
      { q: "Tu observes ces signes. Que fais-tu en premier ?",
        choices: [
          { text: "Ne pas la lever, alerter l'infirmière et décrire précisément les signes vus.", correct: true, feedback: "Juste : tu signales sans retard et sans inventer de diagnostic. L'envie de 'vérifier encore une fois' est compréhensible, mais ici elle repousserait l'alerte." },
          { text: "La faire asseoir pour voir si la confusion passe rapidement.", correct: false, feedback: "Séduisant : tu cherches à vérifier avant de déranger. Mais mobiliser une personne confuse et hypotendue expose à une chute." },
          { text: "Attendre la fin de la réunion : l'état est peut-être passager.", correct: false, feedback: "Séduisant : tu respectes l'organisation de l'équipe. Mais une dégradation post-opératoire ne peut pas attendre une réunion." },
          { text: "Prendre une deuxième tension pour être certain avant de prévenir.", correct: false, feedback: "Séduisant : tu veux une donnée fiable. Mais une seule mesure anormale associée à d'autres signes suffit à déclencher l'alerte." }
        ] },
      { q: "L'infirmière te demande depuis quand les signes ont commencé. Tu n'en es pas sûr.",
        choices: [
          { text: "Dire ce que tu as constaté, préciser l'incertitude et l'heure de ta dernière observation.", correct: true, feedback: "Juste : une transmission honnête est plus utile qu'une heure inventée. L'annexe III attend un recueil fiable, pas une réponse complète à tout prix." },
          { text: "Donner une heure plausible pour que la transmission paraisse complète et rassure l'infirmière.", correct: false, feedback: "Séduisant : tu remplis la case. Mais une donnée fausse peut orienter à tort une décision médicale." },
          { text: "Répondre simplement « je ne sais pas » sans autre élément.", correct: false, feedback: "Séduisant : tu es honnête. Mais tu prives l'infirmière des observations que tu as réellement faites." },
          { text: "Demander à Mme C. de se souvenir à ta place.", correct: false, feedback: "Séduisant : tu associes la personne. Mais elle est confuse : sa réponse ne peut pas servir de repère fiable." }
        ] },
      { q: "Après l'alerte, le linge de lit est humide. Que fais-tu ?",
        choices: [
          { text: "Renouveler le linge avec des gants et signaler le matériel utilisé.", correct: true, feedback: "Juste : tu participes à l'hygiène de l'environnement proche sans négliger les précautions. Le signalement permet à l'infirmière de compléter son évaluation." },
          { text: "Laisser le linge en place jusqu'au passage de l'infirmière.", correct: false, feedback: "Séduisant : tu n'interviens pas sur un geste qui pourrait gêner l'examen. Mais un linge humide prolongé nuit au confort et à l'hygiène." },
          { text: "Secouer le drap avant de le changer pour enlever les plis.", correct: false, feedback: "Séduisant : tu veux faire un lit propre. Mais secouer un linge potentiellement contaminé disperse des particules." },
          { text: "Garder le même gant pour le reste de la chambre après le changement.", correct: false, feedback: "Séduisant : tu évites de refaire un geste. Mais tu risques de transporter ce qui était sur le linge vers d'autres surfaces." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'attente d'une certitude et la rapidité de l'alerte. Point fort : avoir transmis une observation nuancée. À retravailler : les gestes d'hygiène qui accompagnent la surveillance."
  },

  {
    id: "S45", bloc: "B3", annee: "2", contexte: "structure", duree: "18 min", difficulte: 2,
    competences: ["C3.2", "C3.3"],
    titre: "Transmission numérique : tracer sans exposer",
    description: "Ton identifiant du dossier numérique ne fonctionne pas. La transmission de 17 h doit partir avant le changement d'équipe. Un collègue te propose d'utiliser son compte et te donne son mot de passe.",
    hints: ["Un identifiant personnel n'est jamais partagé.", "Une donnée factuelle et datée vaut mieux qu'un commentaire.", "La confidentialité continue après la saisie."],
    variantes: [
      { titre: "Variante — urgence", description: "L'infirmière part en urgence et te demande la transmission oralement avant ton retour au poste." },
      { titre: "Variante — collègue insistant", description: "Le collègue insiste : « On a toujours fait comme ça, tu perds du temps. »" }
    ],
    steps: [
      { q: "Le collègue te tend son mot de passe. Que fais-tu ?",
        choices: [
          { text: "Refuser, prévenir le référent et utiliser le support papier prévu à cet effet.", correct: true, feedback: "Juste : la traçabilité est assurée sans usurper une identité. Accepter aurait été séduisant pour gagner du temps, mais l'action n'aurait plus été attribuée à la bonne personne." },
          { text: "Utiliser son compte pour ne pas retarder la transmission.", correct: false, feedback: "Séduisant : le service continue. Mais tu écris sous une identité qui n'est pas la tienne : responsabilité et confidentialité sont brouillées." },
          { text: "Attendre que ton accès soit rétabli et ne rien transmettre d'ici là.", correct: false, feedback: "Séduisant : tu n'enfreins aucune règle. Mais l'équipe suivante part sans information, ce qui est un risque pour la personne." },
          { text: "Poser un post-it sur le bureau de l'infirmière avec l'essentiel.", correct: false, feedback: "Séduisant : tu transmets vite. Mais un papier visible dans un espace partagé ne respecte pas la confidentialité." }
        ] },
      { q: "Tu rédiges la transmission sur le support prévu. Quelle formulation retiens-tu ?",
        choices: [
          { text: "« 17 h : a refusé son repas, a bu 100 ml d'eau, aucune plainte signalée. »", correct: true, feedback: "Juste : les faits sont datés, observables et neutres. C'est ce qui permet une suite sans porter de jugement." },
          { text: "« Mme D. est encore de mauvaise humeur et fait des difficultés. »", correct: false, feedback: "Séduisant : tu décris une impression réelle. Mais un jugement de valeur n'aide pas l'équipe à agir et peut coller une étiquette à la personne." },
          { text: "« Tout va bien, surveillance simple ce soir. »", correct: false, feedback: "Séduisant : tu rassures. Mais tu effaces un refus de repas qui mérite d'être suivi." },
          { text: "« Elle a encore refusé de manger, comme d'habitude. »", correct: false, feedback: "Séduisant : tu donnes du contexte. Mais « comme d'habitude » transforme une observation en habitude supposée." }
        ] },
      { q: "Tu retournes au poste où un collègue attend le dossier. Que fais-tu ?",
        choices: [
          { text: "Verrouiller la session avant de lui laisser l'accès au poste.", correct: true, feedback: "Juste : la confidentialité reste effective jusqu'au bout. Le verrouillage est un geste court qui protège toutes les personnes du service." },
          { text: "Lui laisser le poste ouvert : il ne fait que lire une ligne.", correct: false, feedback: "Séduisant : tu fais confiance à un collègue. Mais une session ouverte permet aussi l'accès à tous les autres dossiers." },
          { text: "Lui dicter ton mot de passe pour qu'il termine la saisie à ta place.", correct: false, feedback: "Séduisant : la tâche est finie rapidement. Mais tu partages ton identifiant personnel, ce qui est interdit." },
          { text: "Éteindre l'écran sans verrouiller la session.", correct: false, feedback: "Séduisant : l'écran n'est plus lisible. Mais une simple pression sur une touche rend l'accès à nouveau possible." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'urgence de la transmission et la protection des données. Point fort : avoir trouvé une solution conforme. À retravailler : la neutralité du vocabulaire employé dans les transmissions."
  },
  {
    id: "S46", bloc: "B3", annee: "T", contexte: "structure", duree: "18 min", difficulte: 3,
    competences: ["C3.1", "C3.3"],
    titre: "Un collègue critique ton travail devant une résidente",
    description: "Dans la chambre de Mme T., un collègue commente à voix haute la façon dont tu as installé le fauteuil. La résidente regarde alternativement l'un puis l'autre. L'équipe a une réunion de service dans dix minutes.",
    hints: ["La personne présente n'a pas à être témoin d'un désaccord professionnel.", "Un fait précis est plus utile qu'un jugement.", "Transparence et confidentialité ne s'excluent pas."],
    variantes: [
      { titre: "Variante — la résidente prend parti", description: "Mme T. prend la défense du collègue et te demande de « ne pas en faire une histoire »." },
      { titre: "Variante — désaccord sur une consigne", description: "Le collègue estime que tu n'as pas suivi la consigne de l'équipe du matin." }
    ],
    steps: [
      { q: "Sur le moment, que fais-tu ?",
        choices: [
          { text: "Ne pas riposter devant Mme T. et proposer d'en parler sitôt la chambre quittée.", correct: true, feedback: "Juste : tu protèges la résidente sans laisser le désaccord s'installer. Répondre sur le champ serait compréhensible pour défendre ton travail, mais la chambre devient alors le témoin d'un conflit qui ne la concerne pas." },
          { text: "Répondre du même ton pour défendre les consignes que tu as suivies et ne pas perdre la face.", correct: false, feedback: "Séduisant : tu défends ta compétence. Mais l'escalade transforme un désaccord en spectacle et place la résidente dans une position très inconfortable." },
          { text: "Demander à Mme T. de dire qui elle pense avoir raison.", correct: false, feedback: "Séduisant : tu sembles chercher un arbitre neutre. Mais tu demandes à une personne accompagnée de trancher entre deux professionnels : ce n'est pas son rôle." },
          { text: "Sortir de la chambre sans un mot pour couper court à l'échange.", correct: false, feedback: "Séduisant : tu évites l'escalade. Mais tu laisses Mme T. seule avec un commentaire en suspens et sans explication." }
        ] },
      { q: "En privé, comment engages-tu l'échange avec le collègue ?",
        choices: [
          { text: "Nommer le fait précis, dire son effet sur toi et convenir de la suite ensemble.", correct: true, feedback: "Juste : tu restes dans le cadre professionnel. Accuser en bloc aurait été plus simple, mais un fait daté permet de discuter sans attaquer la personne." },
          { text: "Rapporter immédiatement le comportement au cadre, sans lui en parler.", correct: false, feedback: "Séduisant : tu suis une voie hiérarchique sécurisante. Mais un premier échange direct règle souvent le malentendu avant d'escalader." },
          { text: "Lui dire que toute l'équipe est de ton avis pour le convaincre.", correct: false, feedback: "Séduisant : tu renforces ta position. Mais parler au nom des autres sans les avoir consultés fabrique une opinion collective qui n'existe peut-être pas." },
          { text: "Faire comme si rien ne s'était passé pour garder une bonne ambiance.", correct: false, feedback: "Séduisant : tu préserves le climat de l'équipe. Mais un désaccord non dit revient généralement au prochain incident." }
        ] },
      { q: "Mme T. te demande ensuite : « Ça va, toi ? ». Que réponds-tu ?",
        choices: [
          { text: "La rassurer brièvement, sans détailler le conflit ni nommer le collègue.", correct: true, feedback: "Juste : tu reconnais son inquiétude sans lui transmettre un désaccord qui ne la regarde pas. C'est l'arbitrage entre transparence humaine et confidentialité professionnelle." },
          { text: "Lui expliquer en détail ce que le collègue a dit et pourquoi il a tort.", correct: false, feedback: "Séduisant : tu es honnête. Mais tu fais porter à la résidente un conflit d'équipe et tu écorches la réputation d'un collègue." },
          { text: "Lui répondre sèchement que cela ne la concerne pas.", correct: false, feedback: "Séduisant : tu protèges la zone professionnelle. Mais la forme peut être vécue comme un rejet alors qu'elle t'a simplement interpellée avec bienveillance." },
          { text: "Lui proposer d'en parler elle-même au cadre lors du prochain conseil.", correct: false, feedback: "Séduisant : tu donnes une suite. Mais tu déplaces encore une fois la responsabilité du conflit vers la personne accompagnée." }
        ] }
    ],
    bilan: "Tu as arbitré entre la défense de ton travail, la sérénité de la résidente et la cohésion de l'équipe. Point fort : avoir différé l'échange. À retravailler : rester factuel sans faire de la personne un témoin du désaccord."
  },

  {
    id: "S47", bloc: "B4", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C4.1", "C4.2"],
    titre: "Concevoir une affiche sur l'hygiène des mains",
    description: "Tu prépares une action d'éducation à la santé sur le lavage des mains pour un groupe de huit personnes âgées, dont deux ont des difficultés de lecture. Le directeur souhaite une affiche « propre et sérieuse » pour la salle commune.",
    hints: ["Analyser le public vient avant de dessiner.", "Un support efficace n'est pas forcément le plus complet.", "Tester, c'est déjà évaluer."],
    variantes: [
      { titre: "Variante — public mixte", description: "L'affiche doit convenir à la fois aux résidents et aux membres de la famille qui les accompagnent." },
      { titre: "Variante — budget serré", description: "Tu ne peux imprimer qu'une seule affiche en noir et blanc." }
    ],
    steps: [
      { q: "Avant de concevoir le support, que fais-tu en premier ?",
        choices: [
          { text: "Observer les pratiques du groupe, repérer les freins et formuler un objectif court.", correct: true, feedback: "Juste : tu pars d'un besoin du public, comme l'exige la démarche d'éducation à la santé. Choisir un visuel d'abord est tentant parce que c'est concret, mais sans diagnostic l'affiche risque de répondre à une question que personne ne se pose." },
          { text: "Choisir les couleurs et la police en demandant l'avis de l'équipe.", correct: false, feedback: "Séduisant : tu associes les collègues. Mais l'équipe n'est pas le public cible : ses goûts ne disent rien des difficultés de lecture des résidents." },
          { text: "Reprendre une affiche trouvée en ligne en changeant seulement le titre.", correct: false, feedback: "Séduisant : tu gagnes du temps avec un support déjà validé ailleurs. Mais un support conçu pour un autre public ne répond pas à celui que tu as devant toi." },
          { text: "Demander aux résidents de rédiger intégralement le support à ta place.", correct: false, feedback: "Séduisant : tu valorises leur parole. Mais concevoir l'action fait partie de ta compétence : ton rôle est de structurer leur contribution, pas de la déléguer." }
        ] },
      { q: "Quelle version retiens-tu pour l'affiche ?",
        choices: [
          { text: "De grands pictogrammes, peu de mots et le geste montré en trois étapes.", correct: true, feedback: "Juste : tu adaptes le support aux difficultés de lecture repérées. La version très documentée paraît plus sérieuse, mais elle risque de ne jamais être lue." },
          { text: "Un texte dense avec les références réglementaires et les données microbiologiques.", correct: false, feedback: "Séduisant : la rigueur scientifique est réelle. Mais une affiche que le public ne peut pas lire n'enseigne rien, et le directeur ne demandait pas un document technique." },
          { text: "Une affiche identique à celle déjà utilisée dans le service handicap.", correct: false, feedback: "Séduisant : tu harmonises l'établissement. Mais les besoins et les capacités de lecture diffèrent d'un public à l'autre." },
          { text: "Quelques phrases en français écrit uniquement, sans image pour rester sobre.", correct: false, feedback: "Séduisant : tu évites l'infantilisation. Mais pour deux personnes en difficulté de lecture, le pictogramme est un appui, pas un luxe." }
        ] },
      { q: "Avant de l'afficher, comment vérifies-tu qu'elle fonctionne ?",
        choices: [
          { text: "La faire regarder par trois personnes du groupe et corriger ce qui les bloque.", correct: true, feedback: "Juste : tu testes auprès du public réel et tu restes temps gagnant. L'avis du directeur seul est utile, mais il ne remplace pas une mise à l'épreuve auprès de ceux qui devront l'utiliser." },
          { text: "La valider uniquement en réunion d'équipe, puis l'afficher le jour même.", correct: false, feedback: "Séduisant : tu suis le circuit hiérarchique. Mais une affiche validée par les professionnels peut rester incompréhensible pour les résidents." },
          { text: "L'afficher sans test : le contenu est scientifiquement correct.", correct: false, feedback: "Séduisant : tu fais confiance au contenu. Mais exactitude et lisibilité sont deux critères différents." },
          { text: "Attendre qu'une campagne nationale fournisse un support clé en main.", correct: false, feedback: "Séduisant : tu évites de te tromper. Mais tu renonces à adapter l'action au contexte précis de ton établissement." }
        ] }
    ],
    bilan: "Tu as arbitré entre le sérieux souhaité par la direction et la lisibilité réelle pour le public. Point fort : avoir diagnostiqué avant de concevoir. À retravailler : faire du test une étape systématique, même quand le temps manque."
  },

  {
    id: "S48", bloc: "B4", annee: "T", contexte: "structure", duree: "20 min", difficulte: 3,
    competences: ["C4.3"],
    titre: "Évaluer une action de prévention des chutes",
    description: "Il y a trois mois, tu as conduit une action de prévention des chutes dans l'établissement. Le bilan doit être présenté à l'équipe. Les chutes ont diminué, mais une résidente est tombée la semaine dernière malgré les mesures mises en place.",
    hints: ["Mesurer l'effet n'est pas compter les actions réalisées.", "Un résultat nuancé se dit sans se cacher derrière un pourcentage.", "L'évaluation débouche sur une décision et une date de reprise."],
    variantes: [
      { titre: "Variante — peu de données", description: "Les relevés de chutes sont incomplets : deux mois seulement sont renseignés." },
      { titre: "Variante — pression de la direction", description: "La direction attend un bilan « positif » pour un dossier de certification." }
    ],
    steps: [
      { q: "Quel premier indicateur retiens-tu pour mesurer l'action ?",
        choices: [
          { text: "Le nombre de chutes et le nombre de personnes appliquant les gestes enseignés.", correct: true, feedback: "Juste : tu mesures à la fois l'effet et l'adoption. Le nombre d'affiches posées est plus facile à compter, mais il mesure ton activité, pas l'évolution du risque." },
          { text: "Le nombre d'affiches posées et de réunions tenues pendant l'action.", correct: false, feedback: "Séduisant : c'est traçable et valorisable. Mais une action très documentée peut très bien ne rien changer sur le terrain." },
          { text: "L'impression générale de l'équipe, recueillie oralement.", correct: false, feedback: "Séduisant : le ressenti est une information utile. Mais seul, il ne permet pas de juger de l'efficacité dans le temps." },
          { text: "Le coût de l'action rapporté au budget du service.", correct: false, feedback: "Séduisant : tu penses à la gestion. Mais le coût répond à une question économique, pas à la question de santé posée ici." }
        ] },
      { q: "La chute de la semaine dernière contredit en partie tes résultats. Que conclus-tu ?",
        choices: [
          { text: "Noter la baisse observée et analyser ce cas précis avant de décider d'un ajustement.", correct: true, feedback: "Juste : tu refuses le bilan binaire. L'arbitrage est entre l'envie de conclure au succès et l'exigence d'examiner ce qui n'a pas fonctionné." },
          { text: "Déclarer l'action parfaitement efficace et classer le dossier.", correct: false, feedback: "Séduisant : tu mets en avant une vraie amélioration. Mais un cas isolé peut révéler une limite du dispositif qu'il faut comprendre." },
          { text: "Considérer l'action comme un échec et interrompre toutes les mesures.", correct: false, feedback: "Séduisant : tu réagis avec lucidité. Mais une seule chute après une baisse nette ne suffit pas à effacer trois mois d'effets." },
          { text: "Ne rien consigner tant que le bilan n'est pas entièrement positif.", correct: false, feedback: "Séduisant : tu veux présenter un dossier propre. Mais reporter l'écriture, c'est perdre la trace d'un événement utile à la prévention." }
        ] },
      { q: "Que présentes-tu à l'équipe à la fin ?",
        choices: [
          { text: "Les chiffres, les limites des données et deux ajustements avec une date de réévaluation.", correct: true, feedback: "Juste : l'évaluation se prolonge par une décision et un calendrier. C'est exactement ce qui distingue un bilan d'une simple constatation." },
          { text: "Les chiffres seuls, en laissant l'équipe en déduire les suites.", correct: false, feedback: "Séduisant : tu restes neutre. Mais sans proposition, le travail d'évaluation s'arrête à la mesure." },
          { text: "Une affiche dans la salle de pause avec le nom et la chambre de la résidente concernée.", correct: false, feedback: "Séduisant : tu rends le résultat visible. Mais tu exposes une personne accompagnée à tous les regards : la confidentialité reste due après l'évaluation." },
          { text: "Une demande à un autre service pour refaire l'évaluation à ta place.", correct: false, feedback: "Séduisant : un regard extérieur peut aider. Mais tu transfères une compétence que tu es en train de mettre en œuvre et d'évaluer." }
        ] }
    ],
    bilan: "Tu as arbitré entre un bilan flatteur et une lecture exigeante des données. Point fort : avoir relié mesure, limite et ajustement. À retravailler : garder la confidentialité même dans un support de restitution."
  },

  {
    id: "S49", bloc: "B1", annee: "2", contexte: "structure", duree: "18 min", difficulte: 2,
    competences: ["C1.1", "C1.2"],
    titre: "Accueillir M. P. après une hospitalisation",
    description: "M. P., 78 ans, arrive en EHPAD en fin de matinée après une hospitalisation. Son fils l'accompagne et répond à ta place aux premières questions. M. P. regarde la chambre sans rien dire.",
    hints: ["L'accueil commence avant l'arrivée.", "Une émotion s'accueille avant d'être rassurée.", "La famille complète la parole de la personne, elle ne la remplace pas."],
    variantes: [
      { titre: "Variante — famille absente", description: "M. P. arrive seul et refuse qu'on appelle son fils pour l'instant." },
      { titre: "Variante — arrivée retardée", description: "Son arrivée a deux heures de retard et le déjeuner est déjà servi." }
    ],
    steps: [
      { q: "Avant son arrivée, que prépares-tu ?",
        choices: [
          { text: "Lire la transmission, préparer la chambre et repérer son nom, ses horaires et son référent.", correct: true, feedback: "Juste : l'accueil commence en amont. Attendre la personne pour tout découvrir paraît plus spontané, mais elle arrive déjà en situation de vulnérabilité." },
          { text: "Installer ses affaires toi-même selon l'usage du service, sans l'interroger sur ses habitudes.", correct: false, feedback: "Séduisant : tu lui évite une fatigue. Mais ses repères personnels restent à recueillir auprès de lui, pas à deviner." },
          { text: "Demander au fils de préparer la chambre à sa place.", correct: false, feedback: "Séduisant : la famille connaît ses habitudes. Mais tu délègues une part de ton accueil à une personne qui n'a pas ton rôle." },
          { text: "Prévoir uniquement les documents d'admission à faire signer.", correct: false, feedback: "Séduisant : tu sécurises l'administratif. Mais l'administratif ne fait pas un accueil et peut donner le sentiment d'être un dossier avant d'être une personne." }
        ] },
      { q: "M. P. dit : « Je ne connais personne ici, j'ai peur. » Que fais-tu ?",
        choices: [
          { text: "Reformuler ce qu'il exprime, puis donner des repères concrets sur la journée et l'équipe.", correct: true, feedback: "Juste : tu valides l'émotion avant d'apporter une réponse pratique. Dire que tout le monde s'adapte est souvent bien intentionné, mais minimise ce qu'il vient de confier." },
          { text: "Lui répondre que tout le monde s'adapte en quelques jours dans ce type de structure.", correct: false, feedback: "Séduisant : tu veux le rassurer vite. Mais une formule générale peut être entendue comme « tes craintes ne sont pas fondées »." },
          { text: "Lui proposer de retourner immédiatement à l'hôpital.", correct: false, feedback: "Séduisant : tu sembles respecter son choix. Mais une décision aussi lourde ne se propose pas dans l'émotion de l'arrivée et dépasse ton champ de compétence." },
          { text: "Changer de sujet en lui montrant le téléviseur de la chambre.", correct: false, feedback: "Séduisant : tu cherches à le distraire. Mais éviter le sujet laisse sa phrase sans réponse et installe une distance au moment où il se confie." }
        ] },
      { q: "Le fils décide que son père doit aller à l'atelier dès demain, alors que M. P. hésite. Que fais-tu ?",
        choices: [
          { text: "Associer le fils, puis confirmer directement avec M. P. ce qu'il souhaite et le transmettre.", correct: true, feedback: "Juste : tu tiens compte de la famille sans effacer la parole de la personne. L'arbitrage est entre la bienveillance du fils et le droit de M. P. de décider pour lui." },
          { text: "Suivre l'avis du fils : la famille connaît mieux les goûts de son père.", correct: false, feedback: "Séduisant : tu t'appuies sur une connaissance ancienne. Mais son hésitation à lui est une information plus actuelle que le souhait de son entourage." },
          { text: "Écarter le fils de la conversation afin d'interroger M. P. seul, sans lui expliquer pourquoi.", correct: false, feedback: "Séduisant : tu protèges son autonomie. Mais la famille est une ressource pour l'accompagnement : la mettre à distance sans explication est contre-productif." },
          { text: "Demander au cadre de trancher sans avoir écouté M. P.", correct: false, feedback: "Séduisant : tu évites de choisir. Mais une décision sur sa participation lui appartient en premier lieu." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'urgence administrative, l'émotion de l'arrivée et la place de la famille. Point fort : avoir écouté avant de rassurer. À retravailler : faire confirmer par la personne elle-même ce que l'entourage avance pour elle."
  },

  {
    id: "S50", bloc: "B2", annee: "2", contexte: "structure", duree: "20 min", difficulte: 3,
    competences: ["C2.1", "C2.3"],
    titre: "Toilette au lit : confort, pudeur et bionettoyage",
    description: "M. R., 82 ans, hémiplégique gauche, est dépendant pour sa toilette que tu réalises au lit. Il dit avoir froid dès le début du geste et regarde avec gêne le matériel posé sur la table de chevet.",
    hints: ["La préparation fait partie de la sécurité.", "Le confort ajusté ne veut pas dire la qualité réduite.", "Le bionettoyage se termine par une transmission."],
    variantes: [
      { titre: "Variante — douleur à la mobilisation", description: "M. R. grimace lorsque tu l'aides à se tourner." },
      { titre: "Variante — matériel manquant", description: "Il manque un gant de toilette propre au moment de commencer." }
    ],
    steps: [
      { q: "Avant de commencer, que vérifies-tu ?",
        choices: [
          { text: "Le dossier, ses préférences, le matériel prévu et la propreté de l'environnement proche.", correct: true, feedback: "Juste : tu réunis les conditions de sécurité et de respect de la personne. Commencer sans préparation paraît plus rapide, mais c'est souvent là que se perdent le confort et la pudeur." },
          { text: "Rien de particulier : tu connais déjà la procédure et le matériel est toujours au même endroit.", correct: false, feedback: "Séduisant : tu comptes sur ton habitude. Mais les préférences et l'état de la chambre doivent être vérifiés à chaque intervention." },
          { text: "Les préférences uniquement, en laissant le rangement de la chambre pour plus tard.", correct: false, feedback: "Séduisant : tu respectes la personne. Mais l'hygiène de l'environnement proche fait partie de la compétence, au même titre que le geste de toilette." },
          { text: "Le matériel uniquement, sans expliquer les gestes à M. R.", correct: false, feedback: "Séduisant : tu es efficace. Mais une toilette sans explication peut être vécue comme une intrusion, surtout chez une personne qui exprime déjà une gêne." }
        ] },
      { q: "M. R. a froid et détourne le regard. Que fais-tu ?",
        choices: [
          { text: "Couvrir les zones non lavées, adapter la température de la pièce et garder ton rythme de geste.", correct: true, feedback: "Juste : tu protèges le confort et la pudeur sans sacrifier la qualité. Accélérer serait compréhensible pour limiter l'exposition, mais le geste rapide augmente le risque de mauvaise installation." },
          { text: "Accélérer la toilette en enchaînant les gestes, pour limiter le temps où il a froid.", correct: false, feedback: "Séduisant : tu réponds à l'inconfort. Mais la vitesse n'améliore pas la sécurité et peut laisser une peau mal nettoyée ou mal séchée." },
          { text: "Continuer exactement comme prévu : le froid passera tout seul.", correct: false, feedback: "Séduisant : tu suis le protocole. Mais ignorer une plainte exprimée contredit la prise en compte de la situation et des interlocuteurs." },
          { text: "Interrompre la toilette et revenir plus tard dans la journée.", correct: false, feedback: "Séduisant : tu respectes son inconfort. Mais reporter sans avoir cherché un ajustement simple laisse le problème entier pour la prochaine fois." }
        ] },
      { q: "La toilette terminée, que fais-tu avant de quitter la chambre ?",
        choices: [
          { text: "Installer M. R. en confort, évacuer le linge, nettoyer le matériel et transmettre l'observation de sa peau.", correct: true, feedback: "Juste : bionettoyage et transmission font partie de l'intervention. Partir après avoir habillé le résident est tentant, mais laisser le matériel souillé expose l'équipe suivante à un risque." },
          { text: "L'habiller et quitter la chambre : la toilette est terminée.", correct: false, feedback: "Séduisant : l'essentiel pour la personne est fait. Mais tu laisses l'environnement et le matériel en l'état." },
          { text: "Ranger le linge propre et le linge souillé dans le même sac pour gagner un trajet et finir plus vite.", correct: false, feedback: "Séduisant : tu optimises tes déplacements. Mais tu contamines le linge propre et tu annules l'intérêt du bionettoyage." },
          { text: "Noter uniquement l'heure de la toilette dans la transmission.", correct: false, feedback: "Séduisant : la traçabilité est assurée. Mais une rougeur ou une douleur observée doit être décrite, pas remplacée par une heure." }
        ] }
    ],
    bilan: "Tu as arbitré entre la rapidité, le confort ressenti et l'hygiène de l'environnement. Point fort : avoir gardé les trois exigences en même temps. À retravailler : décrire précisément dans la transmission ce qui a été observé pendant le geste."
  },
  {
    id: "S51", bloc: "B3", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1","C3.2"],
    titre: "Une matinée à réorganiser en équipe",
    description: "Il est 7 h 45 à l'EHPAD Les Tilleuls. Quatre lever, une toilette avant 9 h et un transfert à 10 h sont inscrits au planning, quand l'infirmière annonce son départ en urgence pour accompagner une résidente à l'hôpital. L'aide-soignante du matin veut garder le programme initial.",
    hints: ["Repère ce qui ne peut pas attendre et ce qui peut glisser.","Un point rapide avec l'équipe évite les doublons.","Prévois une marge pour l'imprévu et trace tes décisions."],
    variantes: [
      { titre: "Variante — Collègue en retard", description: "L'aide-soignante du matin accuse vingt minutes de retard et le transfert est avancé à 9 h 30." },
      { titre: "Variante — Nouvelle résidente", description: "Une résidente arrive à 9 h avec une prescription de surveillance toutes les deux heures." }
    ],
    steps: [
      {
        q: "Comment réorganises-tu la matinée avec l'équipe ?",
        choices: [
          { text: "Repérer les soins urgents, répartir les tâches et garder une marge pour l'imprévu.", correct: true, feedback: "Juste : tu arbitrages entre le respect du programme et l'adaptation au départ de l'infirmière. Repérer l'urgent, se répartir les tâches et garder une marge sécurise la matinée. Le planning initial restait tentant pour ne pas déstabiliser les résidents." },
          { text: "Respecter le planning initial pour préserver les repères des résidents.", correct: false, feedback: "Séduisant : maintenir le planning rassure les résidents qui comptent sur leurs repères. Mais le départ de l'infirmière change les priorités : garder le programme tel quel laisse le transfert sans accompagnement adapté." },
          { text: "Commencer par le transfert afin de dégager du temps pour la suite.", correct: false, feedback: "Séduisant : traiter le transfert d'abord libère la suite de la matinée. Mais sans avoir revu les lever avec l'équipe, tu risques de laisser une résidente attendre son aide au lever." },
          { text: "Enchaîner les soins sans faire de point avec l'équipe pour gagner du temps.", correct: false, feedback: "Séduisant : éviter la réunion de coordination paraît efficace et fait gagner quelques minutes. Mais sans point d'équipe, chacun peut croire que l'autre s'occupe du transfert." }
        ] },
      {
        q: "Une résidente appelle au moment où tu commences la toilette prévue. Que décides-tu ?",
        choices: [
          { text: "Évaluer l'urgence en quelques secondes, puis demander à la collègue de prendre le relais.", correct: true, feedback: "Juste : tu arbitrages entre la toilette en cours et un appel qui peut être urgent. Évaluer d'abord évite de répondre à tout indistinctement, et le relais protège l'intimité de la personne. Terminer la toilette avant de bouger paraissait respectueux, mais faisait attendre un appel possiblement urgent." },
          { text: "Terminer la toilette d'abord pour respecter l'intimité de la personne.", correct: false, feedback: "Séduisant : achever le soin préserve la dignité de la résidente et évite de la laisser à moitié habillée. Mais l'appel peut signaler une chute ou une douleur : le différer sans l'évaluer retarde l'aide." },
          { text: "Répondre à l'appel sans délai, en laissant la résidente seule au milieu de la toilette.", correct: false, feedback: "Séduisant : se précipiter témoigne de ton souci de répondre présent au premier signe. Mais quitter la chambre sans organiser le relais expose la résidente à rester découverte et au froid." },
          { text: "Prévenir l'infirmière par téléphone avant de quitter la chambre et de répondre à l'appel.", correct: false, feedback: "Séduisant : demander l'avis de l'infirmière cadre ton action dans la hiérarchie et sécurise ta décision. Mais elle est partie à l'hôpital : attendre son retour laisse l'appel sans réponse." }
        ] },
      {
        q: "En fin de service, comment assures-tu la continuité ?",
        choices: [
          { text: "Transmettre les changements de planning, les soins faits et les points à surveiller à l'équipe.", correct: true, feedback: "Juste : tu arbitrages entre la charge de la journée et le besoin de l'équipe suivante de reprendre le fil. Une transmission écrite et orale des écarts au planning est la règle. Un simple récit oral avait du charme par sa rapidité, mais il ne laisse aucune trace vérifiable." },
          { text: "Noter seulement les soins réalisés, en laissant les décisions à la collègue du soir.", correct: false, feedback: "Séduisant : consigner les actes faits paraît suffisant et évite de surcharger le dossier. Mais l'équipe du soir ignore alors pourquoi le transfert a été avancé et ce qui reste à surveiller." },
          { text: "Raconter oralement les imprévus à la personne qui prend le relais, sans trace écrite.", correct: false, feedback: "Séduisant : le échange direct transmet le ton et le contexte, plus rapide qu'une écriture. Mais un récit oral s'oublie et n'est accessible ni au médecin ni au service suivant." },
          { text: "Attendre le retour de l'infirmière pour lui faire un compte rendu détaillé.", correct: false, feedback: "Séduisant : réserver le bilan à l'infirmière garantit une information hiérarchique complète. Mais son retour est incertain et la relève partira sans savoir ce qui a changé dans la journée." }
        ] }
    ],
    bilan: "Tu as arbitré entre la fidélité au planning et l'adaptation à l'absence de l'infirmière. Point fort : tu as su répartir les tâches et garder une marge. À retravailler : tracer immédiatement chaque décision pour que l'équipe du soir reprenne le fil sans ambiguïté."
  },
  {
    id: "S52", bloc: "B4", annee: "T", contexte: "centre", duree: "25 min", difficulte: 3,
    competences: ["C4.1","C4.2","C4.3"],
    titre: "Éduquer à l'hygiène des mains sans surcharger le support",
    description: "Au centre de jour, tu prépares une action sur le lavage des mains pour douze personnes âgées. La responsable veut un affichage synonyme de sérieux, tandis que l'ergothérapeute rappelle que plusieurs résidents ont des troubles de la mémoire et lisent difficilement. Le temps de préparation est limité à une heure.",
    hints: ["Interroge les résidents et les collègues avant de choisir le support.","Alterne démonstration et gestes reproduits.","Prévois un moyen simple de vérifier ce qui a été retenu."],
    variantes: [
      { titre: "Variante — Public non francophone", description: "Trois résidents ne parlent pas français : les consignes écrites ne suffisent pas à transmettre le geste." },
      { titre: "Variante — Contrainte de temps", description: "La responsable réduit l'action à quinze minutes et réclame un bilan écrit avant la fin de la journée." }
    ],
    steps: [
      {
        q: "Avant de concevoir l'action, comment identifies-tu les besoins ?",
        choices: [
          { text: "Questionner les résidents et l'équipe sur leurs habitudes, leurs difficultés et leurs connaissances.", correct: true, feedback: "Juste : tu arbitrages entre l'habitude de l'établissement et l'analyse réelle des besoins. Écouter les résidents et l'équipe permet d'adapter le contenu aux difficultés signalées. L'affiche de l'an dernier semblait fiable, mais elle ne dit rien des troubles de mémoire." },
          { text: "Choisir une affiche déjà utilisée l'an dernier, reconnue par la responsable du centre.", correct: false, feedback: "Séduisant : reprendre un support validé rassure la hiérarchie et fait gagner du temps. Mais sans analyse des besoins, il peut ignorer les résidents qui ne lisent plus l'affiche." },
          { text: "Demander au médecin de rédiger une note claire destinée à l'ensemble des résidents du centre.", correct: false, feedback: "Séduisant : une note du médecin apporte une légitimité scientifique indiscutable. Mais une consigne écrite ne révèle pas ce que les résidents comprennent réellement." },
          { text: "Observer seulement les résidents qui se lavent déjà les mains correctement avant chaque repas.", correct: false, feedback: "Séduisant : regarder les gestes déjà justes donne un repère concret et rapide. Mais en observant les plus habiles, tu passes à côté de ceux qui ont précisément besoin de l'action." }
        ] },
      {
        q: "Comment animes-tu la séance pour que le geste soit retenu ?",
        choices: [
          { text: "Montrer le geste lentement, le faire reproduire par chacun et vérifier l'usage du savon.", correct: true, feedback: "Juste : tu arbitrages entre un savoir transmis et un geste réellement acquis. La démonstration accompagnée de la reproduction engage la mémoire motrice des résidents. L'exposé sur les bactéries avait l'avantage du sérieux, mais restait trop abstrait pour ce public." },
          { text: "Faire un exposé clair sur les bactéries, puis distribuer l'affiche à la fin.", correct: false, feedback: "Séduisant : expliquer les risques donne du sens et satisfait l'exigence de sérieux de la responsable. Mais sans mise en pratique, les résidents repartent avec une idée et non avec un geste." },
          { text: "Laisser les résidents regarder une vidéo et répondre à un questionnaire ensuite.", correct: false, feedback: "Séduisant : la vidéo capte l'attention et le questionnaire donne l'illusion d'un contrôle. Mais un trouble de la mémoire rend la réponse écrite peu fiable et ne garantit pas le geste." },
          { text: "Demander à l'infirmière de faire la démonstration à ta place devant le groupe.", correct: false, feedback: "Séduisant : l'infirmière porte la légitimité du soin et connaît les pathologies des résidents. Mais te retirer de l'animation prive l'action de ta présence éducative et de ton suivi." }
        ] },
      {
        q: "Après l'action, comment mesures-tu son effet ?",
        choices: [
          { text: "Observer les gestes le lendemain, relever les difficultés et transmettre un bilan à l'équipe.", correct: true, feedback: "Juste : tu arbitrages entre la satisfaction immédiate du groupe et la preuve que le geste est entré dans les habitudes. Revenir sur le terrain donne une mesure réelle. Le nombre de participants était plus simple à relever, mais il ne dit rien de l'acquisition." },
          { text: "Compter le nombre de participants et considérer l'action comme réussie.", correct: false, feedback: "Séduisant : une feuille d'émargement fournit un indicateur chiffré que la direction aime lire. Mais la présence ne prouve ni la compréhension ni la reproduction du geste." },
          { text: "Demander à chaque résident de noter sa satisfaction sur une échelle de un à dix.", correct: false, feedback: "Séduisant : la note de satisfaction donne la parole aux résidents et valorise leur ressenti. Mais être content d'une séance ne signifie pas savoir se laver les mains correctement." },
          { text: "Attendre le prochain contrôle d'hygiène pour juger de l'effet de la séance.", correct: false, feedback: "Séduisant : s'appuyer sur un contrôle existant évite d'ajouter une évaluation lourde. Mais ce contrôle viendra trop tard pour corriger l'action ou aider les résidents en difficulté." }
        ] }
    ],
    bilan: "Tu as arbitré entre la rigueur d'un support institutionnel et l'adaptation aux capacités réelles du public. Point fort : la démonstration reproduite par chacun ancre le geste. À retravailler : l'évaluation à court terme, pour ajuster l'action plutôt que d'en supposer l'effet."
  },
  {
    id: "S53", bloc: "B1", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C1.1","C1.2"],
    titre: "Accueillir M. K. sans parler à sa place",
    description: "M. K., 45 ans, arrive à 10 h en fauteuil roulant pour un séjour de répit. Sa fille répond à ta place et veut remplir les papiers sans le laisser s'exprimer, tandis que l'agent d'accueil presse de l'installer dans la chambre libre. M. K. regarde ses mains sans rien dire.",
    hints: ["Adresse-toi d'abord à la personne, même si la famille répond.","Laisse un temps de réponse avant de proposer ton aide.","Note ce qui a été dit et ce qui reste à clarifier."],
    variantes: [
      { titre: "Variante — Famille insistante", description: "La fille de M. K. s'oppose à ce qu'on l'interroge : elle craint de le fatiguer avant le repas." },
      { titre: "Variante — Information manquante", description: "Le dossier transmis ne précise pas comment transférer M. K. de son fauteuil vers le lit." }
    ],
    steps: [
      {
        q: "À l'arrivée, comment engages-tu l'accueil ?",
        choices: [
          { text: "Te présenter à M. K., le regarder et l'inviter à dire comment il souhaite être appelé.", correct: true, feedback: "Juste : tu arbitrages entre l'empressement de l'agent et le temps d'établir un contact respectueux. T'adresser d'abord à la personne pose le cadre professionnel. Répondre à la fille en premier paraissait efficace, mais plaçait la famille comme porte-parole de M. K." },
          { text: "Répondre d'abord à la fille pour lancer vite l'installation dans la chambre.", correct: false, feedback: "Séduisant : la fille connaît son père et son accord débloque les formalités rapidement. Mais elle répond à sa place et prive M. K. de son premier échange dans la structure." },
          { text: "Installer le fauteuil près du comptoir pour dégager le hall d'entrée.", correct: false, feedback: "Séduisant : dégager le passage fluidifie l'accueil des autres visiteurs. Mais installer avant d'avoir salué et écouté transforme la personne en bagage à poser." },
          { text: "Consulter le dossier avant de saluer, pour connaître les gestes autorisés.", correct: false, feedback: "Séduisant : lire le dossier sécurise le transfert et évite une maladresse. Mais le consulter avant tout contact retarde la reconnaissance de la personne et trouve déjà sa réponse ailleurs." }
        ] },
      {
        q: "M. K. dit qu'il veut rester seul un moment, sa fille s'y oppose. Que fais-tu ?",
        choices: [
          { text: "Reformuler sa demande, la confirmer auprès de lui et expliquer le choix à sa fille.", correct: true, feedback: "Juste : tu arbitrages entre l'inquiétude de la fille et la parole de M. K. Reformuler et confirmer avec lui replace la personne au centre de la décision. Suivre l'avis de la fille était plus paisible, mais faisait prévaloir son anxiété sur un souhait clairement exprimé." },
          { text: "Suivre l'avis de la fille, qui connaît mieux ses habitudes que lui.", correct: false, feedback: "Séduisant : la fille accompagne son père depuis longtemps et son avis évite un conflit. Mais connaître ses habitudes ne donne pas le droit de décider à sa place pour ce moment précis." },
          { text: "Laisser M. K. seul sans rien dire à sa fille, pour éviter la discussion.", correct: false, feedback: "Séduisant : appliquer la demande sans débat va vite et respecte en apparence sa parole. Mais la fille, ainsi exclue, peut s'inquiéter et revenir interpeller l'équipe dans la foulée." },
          { text: "Proposer un compromis en installant la fille dans la chambre avec lui.", correct: false, feedback: "Séduisant : le compromis concilie le besoin de solitude et la présence rassurante de la famille. Mais M. K. a demandé à être seul : installer sa fille ignore sa demande." }
        ] },
      {
        q: "Que consignes-tu après cet accueil ?",
        choices: [
          { text: "Noter ses préférences de nom et d'aide, la demande de solitude et les points à éclaircir.", correct: true, feedback: "Juste : tu arbitrages entre le détail de l'échange et l'utile pour la suite. Consigner les préférences et les zones d'ombre permet à l'équipe de prolonger l'accueil. Une inscription minimale paraissait plus discrète, mais elle perdait l'essentiel de ce que M. K. a exprimé." },
          { text: "Inscrire seulement l'heure d'arrivée et le numéro de chambre dans le registre.", correct: false, feedback: "Séduisant : le registre reste léger et se limite aux données administratives attendues. Mais aucun collègue ne saura comment nommer M. K. ni qu'il souhaite un moment de calme." },
          { text: "Raconter la discussion à la fille pour qu'elle valide ce que tu as retenu.", correct: false, feedback: "Séduisant : faire relire par la fille réduit le risque de mal comprendre les habitudes de M. K. Mais tu transfères à la famille la validation d'une parole qui appartient à la personne." },
          { text: "Attendre la visite de l'infirmière pour lui confier ce que M. K. a dit.", correct: false, feedback: "Séduisant : l'infirmière centralise les informations et saura quoi en faire. Mais son passage peut tarder et les observations se perdent entre-temps." }
        ] }
    ],
    bilan: "Tu as arbitré entre la pression de la famille et la parole de la personne accueillie. Point fort : avoir reformulé sa demande devant sa fille. À retravailler : noter sur le moment les préférences recueillies, pour éviter qu'elles se perdent d'un service à l'autre."
  },
  {
    id: "S54", bloc: "B1", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C1.3","C1.4"],
    titre: "Atelier mémoire : adapter le groupe sans exclure",
    description: "Tu animes à 14 h un atelier mémoire pour six résidents du centre de jour. L'ergothérapeute juge l'exercice trop difficile pour deux d'entre eux et propose de les dispenser, tandis que Mme R., qui aime les mots croisés, refuse de participer à un jeu d'images. Le groupe attend le début de la séance.",
    hints: ["Le projet individualisé guide l'adaptation, pas le programme prévu.","Propose des modalités différentes pour un même objectif.","Relève ce qui a fonctionné pour chacun."],
    variantes: [
      { titre: "Variante — Résidente qui quitte la table", description: "Mme R. se lève au bout de cinq minutes et demande à retourner dans sa chambre." },
      { titre: "Variante — Nouvelle participante", description: "Une résidente non inscrite arrive et veut rejoindre l'atelier déjà commencé." }
    ],
    steps: [
      {
        q: "Avant de lancer l'atelier, que décides-tu avec l'équipe ?",
        choices: [
          { text: "Vérifier les projets individualisés et adapter les consignes aux capacités de chacun.", correct: true, feedback: "Juste : tu arbitrages entre un programme collectif et les besoins inscrits dans chaque projet. Adapter les consignes garde tous les résidents dans l'activité. Dispenser les deux personnes signalées paraissait bienveillant, mais les excluait de l'objectif visé." },
          { text: "Suivre exactement le programme prévu, validé par l'équipe la semaine dernière.", correct: false, feedback: "Séduisant : le programme a été construit ensemble et le respecter évite de le dénaturer. Mais il ne tient pas compte des difficultés que l'ergothérapeute vient de signaler." },
          { text: "Dispenser les deux résidents signalés et travailler avec les quatre autres.", correct: false, feedback: "Séduisant : écarter les deux personnes en difficulté simplifie le groupe et protège leur estime de soi. Mais la dispense les prive de la stimulation visée par l'atelier." },
          { text: "Laisser l'ergothérapeute conduire l'atelier à ta place, puisqu'elle connaît les dossiers.", correct: false, feedback: "Séduisant : l'ergothérapeute maîtrise les troubles cognitifs et sait ajuster les exercices. Mais te retirer empêche la continuité avec le projet que tu dois suivre toi aussi." }
        ] },
      {
        q: "Mme R. refuse le jeu d'images. Comment réagis-tu ?",
        choices: [
          { text: "Lui proposer les mots croisés pour travailler le même objectif avec un autre support.", correct: true, feedback: "Juste : tu arbitrages entre l'unité du groupe et l'adhésion de Mme R. Changer de support tout en gardant l'objectif respecte son projet individualisé. Insister pour le jeu d'images avait l'avantage de la cohérence collective, mais ignorait sa motivation." },
          { text: "Insister pour qu'elle essaye le jeu d'images, afin de garder l'unité du groupe.", correct: false, feedback: "Séduisant : un support unique évite de multiplier les préparations et maintient le rythme commun. Mais imposer le jeu à Mme R. risque de la fermer à toute participation." },
          { text: "Lui suggérer de revenir à la prochaine séance, pour ne pas perturber les autres.", correct: false, feedback: "Séduisant : préserver le calme du groupe compte et son refus peut contaminer les autres. Mais la renvoyer sans alternative transforme un refus de support en exclusion de l'atelier." },
          { text: "Demander à l'ergothérapeute de la raccompagner immédiatement en chambre.", correct: false, feedback: "Séduisant : une collègue formée peut accueillir son désagrément et la rassurer. Mais la raccompagner sans proposer d'autre activité valide son retrait comme une évidence." }
        ] },
      {
        q: "Comment fais-tu vivre le projet individualisé après l'atelier ?",
        choices: [
          { text: "Noter pour chaque résident ce qui a réussi, ce qui a bloqué et l'ajout prévu ensuite.", correct: true, feedback: "Juste : tu arbitrages entre un bilan global rapide et des observations qui font avancer chaque projet. Relever les réussites et les blocages nourrit la prochaine séance. Un bilan unique était plus vite écrit, mais il effaçait les différences entre résidents." },
          { text: "Écrire un bilan unique pour le groupe, en signalant seulement le nombre de participants.", correct: false, feedback: "Séduisant : un chiffre de fréquentation satisfait le suivi d'activité et prend peu de temps. Mais il ne dit rien des progrès ni des difficultés de Mme R. ou des deux résidents signalés." },
          { text: "Rapporter oralement à l'équipe que l'atelier s'est bien passé dans l'ensemble.", correct: false, feedback: "Séduisant : un retour oral immédiat informe les collègues sans attendre la prochaine réunion. Mais une appréciation globale ne permet pas d'ajuster le projet de chacun." },
          { text: "Proposer d'emblée le même atelier la semaine suivante, puisqu'il a été apprécié.", correct: false, feedback: "Séduisant : reconduire une séance plébiscitée rassure le groupe et simplifie ta préparation. Mais sans observations individuelles, tu risques de reproduire les mêmes blocages." }
        ] }
    ],
    bilan: "Tu as arbitré entre un déroulé collectif et les besoins singuliers inscrits au projet individualisé. Point fort : avoir gardé le même objectif en changeant de support pour Mme R. À retravailler : tracer les observations individuelles pour nourrir la séance suivante."
  },
  {
    id: "S55", bloc: "B1", annee: "T", contexte: "centre", duree: "15 min", difficulte: 2,
    competences: ["C1.1","C1.2"],
    titre: "Dispute dans la salle commune : écouter avant de trancher",
    description: "À 16 h, dans la salle commune du centre, M. D. accuse Mme T. d'avoir déplacé son fauteuil. Celle-ci s'énerve et refuse de se taire. Un stagiaire propose de les séparer de force, tandis que la fille de M. D., présente, réclame qu'on donne raison à son père immédiatement.",
    hints: ["Sécurise sans prendre parti.","Écoute chaque version avant toute décision.","Distingue le conflit de ce qui doit être transmis."],
    variantes: [
      { titre: "Variante — Stagiaire déjà en action", description: "Le stagiaire a commencé à pousser le fauteuil de Mme T. quand tu arrives dans la salle." },
      { titre: "Variante — Témoins gênants", description: "Trois résidents commentent la scène à voix haute et attendent clairement ton verdict." }
    ],
    steps: [
      {
        q: "En arrivant, quelle est ta première priorité ?",
        choices: [
          { text: "Intervenir calmement, créer un espace entre eux et écarter les objets qui peuvent blesser.", correct: true, feedback: "Juste : tu arbitrages entre l'arrêt de l'escalade et le respect de chacun. Sécuriser d'abord sans prendre parti permet ensuite d'écouter les deux versions. La séparation de force proposée par le stagiaire était plus rapide, mais elle tranchait avant tout échange." },
          { text: "Séparer les deux résidents de force pour arrêter l'escalade immédiatement.", correct: false, feedback: "Séduisant : intervenir physiquement stoppe net les gestes et rassure les témoins. Mais sans explication, cette contrainte peut humilier et avoir raison d'une personne qui se sent agressée." },
          { text: "Demander au stagiaire de raccompagner Mme T. dans sa chambre sans explication.", correct: false, feedback: "Séduisant : éloigner l'une des deux personnes désamorce vite la tension dans la salle. Mais déléguer un geste aussi délicat à un stagiaire sans consigne le place en difficulté." },
          { text: "Donner raison à M. D. devant sa fille pour calmer la situation rapidement.", correct: false, feedback: "Séduisant : confirmer le ressenti de M. D. apaise immédiatement sa fille et le groupe. Mais trancher sans avoir écouté Mme T. transforme une médiation en verdict partial." }
        ] },
      {
        q: "Chacun donne sa version. Comment conduis-tu l'échange ?",
        choices: [
          { text: "Écouter les deux sans jugement, reformuler ce que tu as compris et chercher un compromis.", correct: true, feedback: "Juste : tu arbitrages entre le besoin de calme et le droit de chacun d'être entendu. La reformulation montre que tu as saisi les deux points de vue avant d'ouvrir une solution. Le témoignage des autres résidents paraissait éclairant, mais il transformait la salle en tribunal." },
          { text: "Couper court à l'échange et proposer une activité pour changer d'ambiance.", correct: false, feedback: "Séduisant : détourner l'attention vers une activité calme peut faire retomber la colère. Mais le désaccord sur le fauteuil reste entier et ressurgira au prochain croisement." },
          { text: "Demander à la fille de M. D. de confirmer les faits, puis clore le sujet.", correct: false, feedback: "Séduisant : la fille a assisté à la scène et son témoignage semble décisif. Mais elle est partie prenante et son avis ne peut tenir lieu d'écoute de Mme T." },
          { text: "Faire témoigner les résidents présents pour établir qui a commencé.", correct: false, feedback: "Séduisant : multiplier les regards devrait, croit-on, rapprocher la vérité. Mais en public, cette recherche de coupable humilie les deux personnes et durcit les positions." }
        ] },
      {
        q: "Que transmets-tu après l'incident ?",
        choices: [
          { text: "Consigner les faits, les paroles entendues, l'issue trouvée et le besoin de surveillance.", correct: true, feedback: "Juste : tu arbitrages entre l'envie de tourner la page et l'intérêt d'une trace factuelle. Les faits datés permettront à l'équipe de repérer une répétition. Un compte rendu confié au stagiaire paraissait pratique, mais il n'a vu que le début de la scène." },
          { text: "Noter seulement le nom des deux résidents concernés dans le cahier de suivi.", correct: false, feedback: "Séduisant : une inscription minimale protège la vie privée et évite d'écrire des propos blessants. Mais elle prive l'équipe du contexte nécessaire pour prévenir un nouvel incident." },
          { text: "Raconter l'altercation à la fille de M. D. pour qu'elle rassure son père ce soir.", correct: false, feedback: "Séduisant : informer la famille montre ta transparence et peut apaiser le retour à domicile. Mais ce récit détaille un conflit entre résidents qui ne regarde pas la famille." },
          { text: "Laisser le stagiaire rédiger le compte rendu, puisqu'il a vu le début de la scène.", correct: false, feedback: "Séduisant : déléguer l'écriture fluidifie la fin de service et valorise le stagiaire. Mais il n'a pas entendu les deux versions et saura mal distinguer les faits des impressions." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'envie de trancher vite et l'exigence d'écoute des deux parties. Point fort : avoir reformulé chaque version devant le groupe. À retravailler : une transmission factuelle et datée, pour que l'équipe repère une possible répétition."
  },
  {
    id: "S56", bloc: "B1", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C1.4"],
    titre: "Gymnastique douce : ajuster l'effort à chaque résident",
    description: "Tu proposes à 11 h une séance de gymnastique douce à huit résidents de la structure. Mme P., 86 ans, dit avoir mal aux épaules ce matin, alors que l'aide-soignante l'encourage à participer pour ne pas perdre l'habitude. Le créneau se termine dans vingt minutes.",
    hints: ["Observe les capacités du jour avant de proposer un mouvement.","Une activité adaptée peut se limiter à un seul geste.","Note ce qui a été fait pour chacun."],
    variantes: [
      { titre: "Variante — Douleur après une chute", description: "Mme P. précise que la douleur est apparue après une chute sans gravité la veille." },
      { titre: "Variante — Créneau réduit", description: "Le temps d'activité est divisé par deux et six résidents attendent déjà leur collation." }
    ],
    steps: [
      {
        q: "Avant de commencer, comment prépares-tu la séance ?",
        choices: [
          { text: "Demander à chacun comment il se sent et repérer les gestes à éviter ce jour-là.", correct: true, feedback: "Juste : tu arbitrages entre le déroulé prévu et l'état réel des résidents ce matin. Écouter avant l'effort permet d'adapter l'activité sans exclure personne. Lancer les échauffements habituels aurait fait gagner du temps, mais ignorait la douleur de Mme P." },
          { text: "Lancer les échauffements habituels pour ne pas démarrer la séance en retard.", correct: false, feedback: "Séduisant : respecter l'horaire rassure le groupe et garde le rythme de la structure. Mais commencer sans recueillir les ressentis peut aggraver une douleur déjà présente." },
          { text: "Répartir les résidents en deux groupes selon leur âge indiqué au dossier.", correct: false, feedback: "Séduisant : l'âge fournit un repère simple pour former des groupes homogènes. Mais il ne dit rien des capacités du jour ni de la gêne que Mme P. vient de signaler." },
          { text: "Laisser l'aide-soignante décider des exercices, puisqu'elle connaît les habitudes du groupe.", correct: false, feedback: "Séduisant : sa connaissance des résidents et de leurs goûts peut guider le choix des mouvements. Mais elle ne remplace pas ton observation des limitations du moment." }
        ] },
      {
        q: "Mme P. hésite à lever les bras. Que proposes-tu ?",
        choices: [
          { text: "Lui suggérer un mouvement d'amplitude réduite, assise, et l'arrêter si la douleur revient.", correct: true, feedback: "Juste : tu arbitrages entre le maintien de la mobilité et le respect d'une douleur. Réduire l'amplitude garde Mme P. dans l'activité tout en protégeant ses épaules. La forcer un peu paraissait fidèle à l'objectif, mais transformait l'effort en risque." },
          { text: "L'encourager à forcer un peu pour entretenir sa mobilité malgré la gêne signalée ce matin.", correct: false, feedback: "Séduisant : l'idée de ne pas perdre l'habitude est saine et partageable. Mais une douleur d'épaule n'est pas un simple manque d'entraînement et peut s'aggraver." },
          { text: "Lui demander de s'asseoir et de regarder les autres sans participer.", correct: false, feedback: "Séduisant : l'installer au calme soulage immédiatement et évite tout geste risqué. Mais l'éloigner du mouvement renonce à l'objectif d'autonomie de l'activité." },
          { text: "Interrompre la séance pour prévenir l'infirmière avant tout nouveau geste.", correct: false, feedback: "Séduisant : faire valider la douleur par l'infirmière est prudent et conforme à une démarche d'équipe. Mais interrompre tout le groupe est disproportionné pour un inconfort que tu peux d'abord adapter." }
        ] },
      {
        q: "Comment rends-tu compte de cette séance ?",
        choices: [
          { text: "Noter les gestes réalisés, les adaptations apportées et l'attitude de Mme P.", correct: true, feedback: "Juste : tu arbitrages entre une simple présence cochée et une trace utile à la suite. Les adaptations notées aideront à préparer la prochaine séance. La feuille de présence était plus vite remplie, mais elle ne disait rien de l'effort fourni." },
          { text: "Inscrire simplement la présence des huit résidents sur la feuille d'activité.", correct: false, feedback: "Séduisant : la liste de présence répond aux attentes administratives et prend quelques secondes. Mais elle ignore la douleur signalée et l'adaptation que tu as trouvée." },
          { text: "Dire à l'aide-soignante que tout s'est bien passé, sans détail supplémentaire.", correct: false, feedback: "Séduisant : un retour oral bref rassure la collègue qui t'a aidée à lancer la séance. Mais sans détail, l'information sur les épaules de Mme P. ne circulera pas." },
          { text: "Proposer de reconduire exactement la même séance demain, sans adaptation.", correct: false, feedback: "Séduisant : garder un programme identique rassure les résidents qui aiment leurs repères. Mais il ignore la douleur du jour et les ajustements que tu as dû faire." }
        ] }
    ],
    bilan: "Tu as arbitré entre le maintien du rythme collectif et l'attention portée à une douleur individuelle. Point fort : avoir réduit l'amplitude du geste sans exclure Mme P. À retravailler : noter précisément les adaptations, pour que la séance suivante en tienne compte."
  },
  {
    id: "S57", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C2.1","C2.4"],
    titre: "Repas de M. G. : régime, texture et parole de la famille",
    description: "M. G., 80 ans, doit manger une texture mixée à cause de troubles de la déglutition. À 12 h, sa nièce arrive avec un gâteau au chocolat en disant qu'il en raffolait avant, tandis que l'aide-soignante a déjà posé le plateau service. M. G. repousse la cuillère sans un mot.",
    hints: ["Vérifie la prescription avant tout changement de texture.","Une plainte silencieuse se lit aussi dans le comportement.","Trace ce qui a été servi et ce qui a été refusé."],
    variantes: [
      { titre: "Variante — Gâteau déjà posé", description: "Le plateau est monté et le gâteau est déjà sur la table, à portée de main de M. G." },
      { titre: "Variante — Nièce mécontente", description: "La nièce menace de se plaindre à la direction si son oncle ne reçoit pas son gâteau." }
    ],
    steps: [
      {
        q: "Que fais-tu en premier avant d'installer M. G. ?",
        choices: [
          { text: "Vérifier le régime prescrit et la texture autorisée dans le dossier de soins.", correct: true, feedback: "Juste : tu arbitrages entre l'élan de générosité de la nièce et la prescription qui protège M. G. Vérifier le dossier avant de servir évite une erreur de texture. Faire confiance au plateau préparé paraissait naturel, mais le dossier fait foi en cas de trouble de la déglutition." },
          { text: "Installer M. G. et attendre qu'il demande lui-même son repas.", correct: false, feedback: "Séduisant : laisser la personne manifester son appétit respecte son rythme et évite de la presser. Mais M. G. est dépendant et ne peut pas toujours exprimer clairement son besoin." },
          { text: "Proposer le gâteau de la nièce, en petite quantité, pour le faire manger.", correct: false, feedback: "Séduisant : une petite part semble un compromis doux qui valorise le plaisir et le lien familial. Mais une texture non mixée est dangereuse ici, quelle que soit la quantité." },
          { text: "Demander à l'aide-soignante de confirmer ce qu'elle a prévu au plateau.", correct: false, feedback: "Séduisant : celle qui a préparé le plateau connaît le service et sait ce qui a été commandé. Mais une habitude de service ne remplace pas la vérification de la prescription." }
        ] },
      {
        q: "M. G. repousse la cuillère. Comment interprètes-tu ce geste ?",
        choices: [
          { text: "Observer son état, chercher une gêne ou une douleur et prévenir l'infirmière si cela dure.", correct: true, feedback: "Juste : tu arbitrages entre la consigne de faire manger et l'écoute d'un refus muet. Observer avant d'insister permet de repérer une cause possible. Forcer doucement semblait bienveillant, mais ignorait ce que M. G. essayait de signaler." },
          { text: "Insister doucement en expliquant que le repas est équilibré et nécessaire à son rétablissement.", correct: false, feedback: "Séduisant : rappeler l'intérêt nutritionnel motive l'équipe et peut rassurer la nièce. Mais un refus silencieux peut exprimer une douleur que les paroles n'expliqueront pas." },
          { text: "Proposer le gâteau pour le remotiver, en laissant le plateau de côté.", correct: false, feedback: "Séduisant : céder au plaisir semble être une réponse humaine à son désagrément. Mais tu contournes la texture prescrite au moment précis où son état doit être évalué." },
          { text: "Appeler la nièce pour qu'elle persuade son oncle de manger son plat.", correct: false, feedback: "Séduisant : la nièce a son écoute et sa voix peut le rassurer plus que la tienne. Mais tu demandes à la famille de trancher un refus qui relève de ton observation professionnelle." }
        ] },
      {
        q: "Que transmets-tu à la fin du repas ?",
        choices: [
          { text: "Noter l'heure, la texture servie, le refus observé et l'action engagée auprès de l'infirmière.", correct: true, feedback: "Juste : tu arbitrages entre un dossier léger et une trace qui suit l'évolution de M. G. Heure, texture et refus permettent d'évaluer la prise réelle. Indiquer que le repas a été pris était plus simple, mais masquait le refus." },
          { text: "Indiquer que le repas a été pris, sans préciser la quantité réellement avalée ni le refus observé.", correct: false, feedback: "Séduisant : une mention courte suffit aux statistiques de service et évite d'alourdir le dossier. Mais elle fait croire à un apport correct alors que M. G. a repoussé la cuillère." },
          { text: "Consigner uniquement la demande de la nièce, pour que la direction réponde.", correct: false, feedback: "Séduisant : noter la plainte protège l'établissement et prépare la réponse à la famille. Mais elle détourne l'attention du refus de M. G. et de son suivi nutritionnel." },
          { text: "Attendre le prochain repas pour voir si le refus se reproduit avant d'écrire.", correct: false, feedback: "Séduisant : observer une deuxième fois évite d'enregistrer un geste isolé comme une tendance. Mais l'équipe de relève doit savoir dès aujourd'hui que ce repas a été refusé." }
        ] }
    ],
    bilan: "Tu as arbitré entre la générosité de la nièce et la prescription qui protège M. G. Point fort : avoir cherché une cause au refus avant d'insister. À retravailler : transcrire sans délai la quantité ingérée, pour que l'équipe suive l'évolution."
  },
  {
    id: "S58", bloc: "B2", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C2.2","C2.4"],
    titre: "Mme B. a des sueurs avant le déjeuner",
    description: "À 11 h 45, Mme B., 72 ans, diabétique, devient pâle et tremblante juste avant le repas. L'aide-soignante penche pour une simple fatigue et veut l'installer à table, tandis que Mme B. refuse le jus de fruits proposé. Le protocole de l'établissement prévoit une glycémie capillaire.",
    hints: ["Un signe inhabituel se vérifie avant d'être interprété.","Le protocole guide le geste, même quand le doute persiste.","Note l'heure, la mesure et l'évolution."],
    variantes: [
      { titre: "Variante — Refus de la piqûre", description: "Mme B. repousse la glycémie capillaire et dit avoir peur d'avoir mal au doigt." },
      { titre: "Variante — Plateau déjà servi", description: "Le repas est arrivé et la collègue veut absolument que Mme B. mange d'abord." }
    ],
    steps: [
      {
        q: "Quelle est ta première action ?",
        choices: [
          { text: "Observer les signes, installer Mme B. au calme et prévenir l'infirmière sans attendre.", correct: true, feedback: "Juste : tu arbitrages entre l'envie de rassurer vite et la vérification imposée par le protocole. Alerter sans attendre permet une mesure et une décision adaptées. L'idée d'une simple fatigue était tentante parce qu'elle évitait d'inquiéter la résidente." },
          { text: "Installer Mme B. à table et la laisser manger, la fatigue finira par passer.", correct: false, feedback: "Séduisant : donner le repas à l'heure rassure le service et évite de dramatiser un moment de faiblesse. Mais des sueurs et des tremblements chez une personne diabétique exigent une vérification." },
          { text: "Lui donner du sucre en attendant de voir si les tremblements cessent.", correct: false, feedback: "Séduisant : le sucre semble une réponse immédiate et logique face à une hypoglycémie supposée. Mais tu agis sans mesure ni prescription, et tu masques l'évolution des signes." },
          { text: "Demander à l'aide-soignante de noter les signes et d'en parler au médecin demain.", correct: false, feedback: "Séduisant : consigner et prévoir un avis médical inscrit ton action dans une démarche d'équipe. Mais reporter au lendemain laisse Mme B. sans surveillance pendant le repas." }
        ] },
      {
        q: "L'infirmière demande une glycémie, Mme B. refuse. Que fais-tu ?",
        choices: [
          { text: "Expliquer le geste simplement, respecter son refus et transmettre immédiatement ce refus.", correct: true, feedback: "Juste : tu arbitrages entre l'utilité de la mesure et le droit de Mme B. de refuser. Expliquer, puis transmettre le refus, respecte la personne sans renoncer à la surveillance. Faire la mesure sans accord paraissait dans son intérêt, mais outrepassait son consentement." },
          { text: "Faire la mesure sans son accord, dans son intérêt, puis la rassurer ensuite.", correct: false, feedback: "Séduisant : obtenir la glycémie permettrait d'agir vite et d'écarter une hypoglycémie. Mais un geste imposé rompt la confiance et n'est pas autorisé par son refus." },
          { text: "Insister jusqu'à ce qu'elle accepte, en lui expliquant le risque d'hypoglycémie.", correct: false, feedback: "Séduisant : expliquer le risque est important et peut lever une peur liée à la piqûre. Mais répéter l'insistance devant son refus transforme l'information en pression." },
          { text: "Proposer à la nièce de convaincre sa tante pendant que tu prépares le matériel.", correct: false, feedback: "Séduisant : la nièce rassure souvent mieux que l'équipe et connaît les peurs de Mme B. Mais tu délègues une décision de soin à la famille au lieu de respecter le refus." }
        ] },
      {
        q: "Quels éléments dois-tu transmettre ?",
        choices: [
          { text: "L'heure des signes, les constantes observées, la glycémie si elle a été faite et l'évolution.", correct: true, feedback: "Juste : tu arbitrages entre un message bref et les données qui permettent de décider. Heure, mesures et évolution rendent la transmission exploitable. Une simple mention de pâleur paraissait suffisante, mais elle perdait le contexte utile à l'infirmière." },
          { text: "La simple mention que Mme B. était pâle et tremblante juste avant le déjeuner, sans plus de détail.", correct: false, feedback: "Séduisant : noter l'essentiel en quelques mots fait gagner du temps et reste lisible. Mais sans heure ni évolution, l'équipe ne peut pas juger de la gravité ni du suivi." },
          { text: "Le nom du médecin traitant, pour qu'il décide seul de la conduite à tenir ensuite.", correct: false, feedback: "Séduisant : identifier le médecin prépare un relais médical et montre que tu anticipes. Mais son nom ne remplace pas les observations recueillies au moment de l'épisode." },
          { text: "Une synthèse de la journée, à remettre à la famille en fin de service avec le bilan.", correct: false, feedback: "Séduisant : informer la famille en fin de journée témoigne de ta transparence. Mais la transmission à l'équipe doit être immédiate et ne pas attendre la sortie." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'envie de rassurer vite et la vérification imposée par le protocole. Point fort : avoir alerté sans attendre que les signes disparaissent. À retravailler : la précision de la transmission, surtout quand un geste n'a pas pu être réalisé."
  },
  {
    id: "S59", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C2.1","C2.3"],
    titre: "Bionettoyage d'une chambre isolée avant la visite",
    description: "À 13 h 30, tu dois bionettoyer la chambre de M. L., en isolement contact. La collègue propose de garder la même serpillère que pour le couloir pour gagner du temps, et la fille de M. L. doit arriver à 14 h. Le triangle d'hygiène est encore en place.",
    hints: ["Respecte le circuit du propre vers le sale.","Le temps de contact du produit compte autant que le geste.","Trace la fin de l'intervention et les anomalies vues."],
    variantes: [
      { titre: "Variante — Visite avancée", description: "La fille arrive à 13 h 45 et demande à entrer avant la fin du temps de contact." },
      { titre: "Variante — Matériel manquant", description: "Le distributeur de solution hydroalcoolique est vide à l'entrée de la chambre." }
    ],
    steps: [
      {
        q: "Avant d'entrer, comment organises-tu le bionettoyage ?",
        choices: [
          { text: "Préparer le matériel dédié à la chambre et respecter le circuit du propre vers le sale.", correct: true, feedback: "Juste : tu arbitrages entre le gain de temps proposé par la collègue et le respect du circuit. Un matériel dédié évite de transporter des germes d'une pièce à l'autre. Réutiliser la serpillère du couloir paraissait anodin, mais rompait le principe de marche en avant." },
          { text: "Commencer par le sol pour libérer la pièce avant l'arrivée de la famille.", correct: false, feedback: "Séduisant : traiter le sol en premier dégage vite l'espace et rassure sur l'heure de la visite. Mais le sol se nettoie en dernier, après les surfaces hautes et le lit." },
          { text: "Utiliser la même serpillère que pour le couloir, puis la rincer à l'eau claire.", correct: false, feedback: "Séduisant : une seule serpillère réduit les manipulations et le rinçage donne une impression de propreté. Mais le rinçage ne désinfecte pas et rapporte des germes dans la chambre isolée." },
          { text: "Demander à la collègue de faire la chambre à ta place pendant que tu accueilles la famille.", correct: false, feedback: "Séduisant : répartir les deux tâches évite le retard et valorise l'entraide entre collègues. Mais laisser le bionettoyage à quelqu'un qui proposait de raccourcir le protocole est risqué." }
        ] },
      {
        q: "La fille veut entrer avant la fin du temps de contact. Que décides-tu ?",
        choices: [
          { text: "Lui expliquer le délai nécessaire, l'installer au salon et l'accompagner après rinçage.", correct: true, feedback: "Juste : tu arbitrages entre la ponctualité de la visite et l'efficacité du produit. Expliquer le délai obtient souvent plus qu'un refus muet. La faire entrer avec une blouse paraissant protecteur, mais le temps de contact restait indispensable." },
          { text: "La faire entrer avec une blouse, en lui demandant de ne rien toucher.", correct: false, feedback: "Séduisant : la blouse et la consigne de ne rien toucher donnent un sentiment de sécurité. Mais sa présence interrompt le bionettoyage et risque de contaminer une surface déjà traitée." },
          { text: "Raccourcir le temps de contact pour libérer la chambre à l'heure dite.", correct: false, feedback: "Séduisant : gagner quelques minutes respecte le programme de la famille et évite l'attente. Mais un produit qui n'a pas agi assez longtemps perd son effet désinfectant." },
          { text: "La laisser attendre dans le couloir sans explication pour ne pas la contrarier.", correct: false, feedback: "Séduisant : éviter une discussion devant la porte maintient le calme et fait gagner du temps. Mais sans explication, elle peut croire à un oubli et revenir au mauvais moment." }
        ] },
      {
        q: "Que consignes-tu en terminant ?",
        choices: [
          { text: "Noter l'heure de fin, le matériel utilisé, l'état du lit et toute anomalie repérée.", correct: true, feedback: "Juste : tu arbitrages entre une validation rapide et une trace qui sécurise la relève. Heure, matériel et anomalies permettent de vérifier que le protocole a été respecté. Une simple case cochée paraissait suffisante, mais elle ne signalerait rien en cas de matériel manquant." },
          { text: "Cocher la case du bionettoyage sur la grille, sans détail supplémentaire.", correct: false, feedback: "Séduisant : la grille est prévue pour cet usage et se remplit en un geste. Mais elle ne dit rien des anomalies vues, comme un distributeur vide à l'entrée." },
          { text: "Prévenir seulement la collègue oralement que la chambre est prête.", correct: false, feedback: "Séduisant : le message oral passe immédiatement et évite d'ouvrir le dossier. Mais il s'oublie et ne laisse aucune trace pour la relève ou le contrôle." },
          { text: "Attendre la relève de nuit pour signaler le distributeur vide à l'entrée.", correct: false, feedback: "Séduisant : regrouper les signalements à la relève limite les interruptions pendant le service. Mais un distributeur vide expose le prochain agent à entrer sans pouvoir se désinfecter les mains." }
        ] }
    ],
    bilan: "Tu as arbitré entre la ponctualité de la visite et le respect du protocole de bionettoyage. Point fort : avoir expliqué le délai à la famille au lieu de le subir. À retravailler : signaler immédiatement tout matériel défaillant, pour ne pas reporter le risque sur la relève."
  },
  {
    id: "S60", bloc: "B2", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C2.2","C2.1"],
    titre: "Chute de M. H. : observer avant de relever",
    description: "M. H., 85 ans, est tombé dans sa chambre à 7 h. Tu le trouves au sol, conscient mais plaintif ; l'infirmière est en réunion et l'aide-soignante de nuit assure qu'il « va bien, il est un peu gauche aujourd'hui ».",
    hints: ["Observe avant tout déplacement.","Applique le protocole chute.","Transmets les faits datés et les actions réalisées."],
    variantes: [
      { titre: "Variante — chute dans la salle de bain", description: "M. H. est tombé sur le carrelage mouillé : la plaque antidérapante a été retirée pour le nettoyage et personne n'a prévenu l'équipe soignante." },
      { titre: "Variante — famille présente", description: "La fille de M. H. arrive au moment où tu le trouves et s'oppose à l'appel de l'infirmière, affirmant qu'il a déjà refusé les secours la semaine dernière." }
    ],
    steps: [
      {
        q: "Quelle est ta première action avant tout déplacement du résident ?",
        choices: [
          { text: "Observer la position, la douleur et les constantes avant de le déplacer.", correct: true, feedback: "Juste : surveiller son état impose d'évaluer douleur, conscience et constantes avant tout mouvement. Relever vite était tentant pour éviter l'immobilité, mais pouvait aggraver une fracture." },
          { text: "Relever M. H. sans attendre pour éviter qu'il reste au sol trop longtemps.", correct: false, feedback: "Séduisant : limiter le temps au sol paraît protéger sa sécurité. Mais sans évaluation d'une éventuelle fracture, le déplacement peut aggraver la situation." },
          { text: "Demander à l'aide-soignante de nuit de le relever, elle le connaît mieux.", correct: false, feedback: "Séduisant : cette collègue connaît ses habitudes et sait le rassurer. Mais cette connaissance ne remplace pas ton observation, et déléguer retarde l'analyse des signes." },
          { text: "Glisser un coussin sous sa tête en attendant le retour de l'infirmière.", correct: false, feedback: "Séduisant : installer un coussin apporte un confort immédiat en attendant l'infirmière. Mais ce geste retarde les constantes et peut masquer une douleur qui s'installe." }
        ] },
      {
        q: "Tu notes une déformation du poignet et une plainte accrue. Que fais-tu ?",
        choices: [
          { text: "Appliquer le protocole, protéger le membre et alerter sans attendre.", correct: true, feedback: "Juste : le protocole chute et l'alerte immédiate relèvent de la surveillance de son état. Attendre l'infirmière était compréhensible, mais faisait perdre un temps utile." },
          { text: "Attendre la fin de la réunion pour déranger le moins possible l'équipe.", correct: false, feedback: "Séduisant : ménager la réunion évite de perturber le service. Mais une déformation avec plainte accrue impose une alerte sans délai, quel que soit l'agenda." },
          { text: "Donner l'antalgique prescrit la veille en notant la douleur au dossier.", correct: false, feedback: "Séduisant : soulager avec un traitement déjà prescrit semble raisonnable. Mais sans validation de l'infirmière, tu ne peux exclure une fracture ni décider de la dose." },
          { text: "L'assurer que cette déformation est sûrement un simple hématome.", correct: false, feedback: "Séduisant : rassurer la personne apaise son angoisse face à une déformation. Mais affirmer qu'il s'agit d'un hématome retarde le diagnostic et peut laisser une fracture." }
        ] },
      {
        q: "Que transmets-tu à l'infirmière qui prend le relais ?",
        choices: [
          { text: "Heure de la chute, signes vus, constantes, gestes faits et évolution.", correct: true, feedback: "Juste : ces repères permettent à l'équipe de décider et d'assurer la continuité. Un récit oral seul perdrait les éléments essentiels à la traçabilité." },
          { text: "Un compte rendu oral rapide, le dossier papier sera rempli à la réunion d'équipe.", correct: false, feedback: "Séduisant : un récit rapide gagne du temps au moment du relais. Mais l'infirmière part en fin de service : sans trace écrite datée, l'information se perd." },
          { text: "Les seules constantes chiffrées, en laissant le reste au médecin.", correct: false, feedback: "Séduisant : ne transmettre que des chiffres paraît factuel et rapide. Mais le contexte de la chute et les gestes réalisés sont indispensables à la décision médicale." },
          { text: "Ton hypothèse sur la cause probable, en laissant les faits détaillés au rapport.", correct: false, feedback: "Séduisant : une hypothèse aide à chercher la cause du heurt. Mais une supposition présentée comme un fait peut orienter à tort l'analyse et effacer les observations." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'envie de relever vite et l'évaluation préalable, puis entre discrétion et alerte. Point fort : observation structurée. À retravailler : précision des faits transmis."
  },
  {
    id: "S61", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.2","C3.3"],
    titre: "Transmission écrite : un traitement discordant à 16 h 40",
    description: "À 16 h 40, tu dois tracer la transmission de M. J. avant 17 h. L'infirmière part à 17 h, et le dossier papier ne mentionne pas le traitement du soir indiqué sur le logiciel. Le téléphone sonne : sa fille attend des nouvelles.",
    hints: ["Sécurise la trace écrite avant le départ.","Signale la divergence sans trancher seul.","Vérifie que le relais a bien pris connaissance."],
    variantes: [
      { titre: "Variante — relais retardé", description: "L'infirmière est retenue par une admission : le relais oral n'aura lieu qu'à 17 h 20 et la soignante de nuit arrive directement." },
      { titre: "Variante — consigne contradictoire", description: "Le médecin a noté « à jeun ce soir » dans le dossier papier, tandis que le logiciel prescrit une collation : la famille, elle, affirme que rien n'a changé." }
    ],
    steps: [
      {
        q: "Comment organises-tu cette fin de service ?",
        choices: [
          { text: "Rédiger d'abord la trace écrite, puis signaler la divergence à l'équipe.", correct: true, feedback: "Juste : traiter et transmettre l'information passe par une trace fiable avant le départ. Répondre d'abord à la famille était humain, mais laissait le relais sans écrit." },
          { text: "Répondre à la famille, quitte à rédiger après le départ de l'infirmière.", correct: false, feedback: "Séduisant : la fille attend une réponse et l'écoute fait partie du rôle. Mais sans transmission datée avant 17 h, le relais part avec une information incomplète." },
          { text: "Suivre l'ordre d'arrivée des tâches en rangeant la salle avant le dossier.", correct: false, feedback: "Séduisant : finir le rangement évite de laisser une salle en désordre à l'équipe suivante. Mais l'échéance de 17 h rend la transmission prioritaire sur le rangement." },
          { text: "Corriger le logiciel sans en parler pour éviter de perturber le service.", correct: false, feedback: "Séduisant : effacer la divergence simplifie la lecture du dossier pour chacun. Mais modifier une donnée sans validation ni trace contrevient aux règles de transmission." }
        ] },
      {
        q: "Le logiciel et le dossier papier se contredisent. Que fais-tu ?",
        choices: [
          { text: "Signaler la divergence et consigner les deux sources sans arbitrer seul.", correct: true, feedback: "Juste : transmettre, c'est rendre visible l'incertitude et laisser décider l'infirmière. Choisir la source « la plus fiable » aurait été une décision hors de ton rôle." },
          { text: "Recopier la dernière mention du dossier papier, jugé plus sûr que le numérique.", correct: false, feedback: "Séduisant : le papier est souvent perçu comme la référence en cas de doute. Mais trancher sans validation peut faire administrer un traitement inadapté." },
          { text: "Demander à la famille quel traitement est prévu, elle connaît ses habitudes.", correct: false, feedback: "Séduisant : la famille détient souvent des informations utiles sur les habitudes de M. J. Mais la prescription relève de l'équipe soignante, pas du témoignage familial." },
          { text: "Attendre le médecin de garde demain en notant que les données diffèrent.", correct: false, feedback: "Séduisant : ne pas décider à ta place paraît prudent face à une prescription. Mais le traitement du soir doit être éclairci ce soir, pas renvoyé au lendemain." }
        ] },
      {
        q: "Avant de quitter le service, que vérifies-tu en priorité ?",
        choices: [
          { text: "Que l'écrit est daté, lisible et que l'infirmière a vu le point sensible.", correct: true, feedback: "Juste : une transmission n'est utile que si le relais en prend connaissance. Un accord oral rapide ne garantit ni la date ni la lisibilité de la trace." },
          { text: "Que le dossier papier est rangé et le logiciel fermé proprement.", correct: false, feedback: "Séduisant : vérifier les outils avant de partir est une bonne habitude de service. Mais ces contrôles ne remplacent pas la lecture de la transmission par le relais." },
          { text: "Que ta collègue a dit d'accord devant la porte, sans plus de détail.", correct: false, feedback: "Séduisant : un accord verbal semble sceller le passage de relais. Mais sans trace visible, rien ne prouve que la divergence a été comprise et prise en compte." },
          { text: "Que le message reste très court pour ne pas surcharger l'équipe de nuit.", correct: false, feedback: "Séduisant : un écrit bref est plus lisible pour une équipe pressée. Mais supprimer le contexte prive le relais des éléments nécessaires à sa décision." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'urgence de répondre à la famille et la priorité à l'écrit, puis entre une donnée commode et la divergence à signaler. Point fort : traçabilité. À retravailler : gestion du temps."
  },
  {
    id: "S62", bloc: "B3", annee: "1", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1","C3.3"],
    titre: "Réunion qualité : trois chutes après le changement de literie",
    description: "À 10 h, en réunion qualité, l'animatrice ne veut présenter que le taux trimestriel de chutes. Or tu as vu trois chutes depuis le changement de literie. Un collègue coupe court : « Ce sont des faits isolés, pas la peine de tout remettre en cause. »",
    hints: ["Apporte des faits datés, pas une conclusion.","Cherche un croisement simple des informations.","Propose un suivi avec un référent et une échéance."],
    variantes: [
      { titre: "Variante — données manquantes", description: "Les dates exactes des chutes ne figurent pas dans le registre : seules les heures ont été notées par trois soignants différents." },
      { titre: "Variante — collègue en désaccord", description: "Le responsable du service technique assure que le nouveau matériel est identique à l'ancien et refuse que son choix soit discuté en réunion." }
    ],
    steps: [
      {
        q: "Que dis-tu au groupe avant l'analyse des indicateurs ?",
        choices: [
          { text: "Relater les trois chutes observées après le changement de literie.", correct: true, feedback: "Juste : la démarche qualité s'appuie sur des faits terrain transmis à l'équipe. Valider un bilan déjà présenté aurait été plus confortable, mais aurait tué une piste utile." },
          { text: "Valider le bilan trimestriel déjà retenu par l'encadrement et le médecin.", correct: false, feedback: "Séduisant : un bilan validé par la direction évite de rouvrir un dossier clos. Mais écarter les observations du terrain prive l'analyse d'informations décisives." },
          { text: "Demander au responsable de la literie de justifier le choix du matériel.", correct: false, feedback: "Séduisant : questionner le fournisseur semble aller droit au problème. Mais sans avoir d'abord établi les faits, la discussion devient une mise en cause plutôt qu'une analyse." },
          { text: "Proposer une formation des aides-soignants avant tout examen des cas.", correct: false, feedback: "Séduisant : former l'équipe répond à l'envie d'agir vite. Mais sans savoir ce qui s'est passé, la formation risque de cibler une cause qui n'est pas la bonne." }
        ] },
      {
        q: "Le collègue parle de faits isolés. Comment réagis-tu ?",
        choices: [
          { text: "Proposer de croiser les dates des chutes avec celles du changement de literie.", correct: true, feedback: "Juste : confronter deux sources est un réflexe de prévention des risques. Contester frontalement aurait été plus direct, mais moins convaincant que des données." },
          { text: "Accepter son avis pour préserver l'ambiance, en taisant ton observation.", correct: false, feedback: "Séduisant : éviter la confrontation garde une bonne atmosphère de réunion. Mais renoncer à transmettre un fait observé va à l'encontre de ton rôle dans l'équipe." },
          { text: "Contester sa conclusion devant toute l'équipe en rappelant fermement les cas.", correct: false, feedback: "Séduisant : défendre ton observation avec fermeté montre ton engagement. Mais une opposition sans élément vérifiable peut braquer le groupe et fermer le débat." },
          { text: "Suggérer d'attendre le prochain trimestre pour reparler de ces chutes.", correct: false, feedback: "Séduisant : attendre un bilan plus complet paraît plus solide scientifiquement. Mais trois chutes méritent un examen rapide, pas un report de plusieurs mois." }
        ] },
      {
        q: "En fin de réunion, que proposes-tu pour la démarche qualité ?",
        choices: [
          { text: "Inscrire un suivi court des chutes et des réglages, avec un référent.", correct: true, feedback: "Juste : un suivi daté, confié à une personne, transforme une observation en amélioration. Laisser le sujet classé aurait été plus simple mais sans effet sur le terrain." },
          { text: "Classer le dossier, la direction ayant retenu le bilan présenté en séance.", correct: false, feedback: "Séduisant : s'aligner sur la décision de la direction évite un désaccord ouvert. Mais la démarche qualité exige aussi de faire remonter les signaux du terrain." },
          { text: "Confier au service technique le soin de revoir les lits, sans suivi sur place.", correct: false, feedback: "Séduisant : déléguer au service technique utilise la bonne compétence. Mais sans observation après intervention, rien ne permet de savoir si la mesure a fonctionné." },
          { text: "Convoquer une nouvelle réunion dès demain sans document de travail défini.", correct: false, feedback: "Séduisant : réunir vite l'équipe montre la volonté d'avancer. Mais sans indicateur ni support préparé, la séance risque de tourner en échange d'impressions." }
        ] }
    ],
    bilan: "Tu as arbitré entre cautionner un bilan rassurant et faire remonter des faits gênants, puis entre débat d'opinions et données croisées. Point fort : esprit de prévention. À retravailler : formulation des propositions."
  },
  {
    id: "S63", bloc: "B3", annee: "T", contexte: "structure", duree: "20 min", difficulte: 2,
    competences: ["C3.5","C3.2"],
    titre: "Premier jour de stage : accueillir Léa sans la mettre en difficulté",
    description: "À 7 h 30, Léa arrive pour sa première PFMP. Tu es son référent, mais l'infirmière veut partir au petit-déjeuner avec elle ; le livret n'est pas imprimé et Léa répète qu'elle « préfère observer d'abord ».",
    hints: ["Accueille l'étudiante avant de la placer.","Avance par gestes simples et retours immédiats.","Laisse une trace écrite de son suivi."],
    variantes: [
      { titre: "Variante — retard au petit-déjeuner", description: "Le petit-déjeuner est déjà entamé : l'infirmière propose de faire l'accueil plus tard, alors que les soins du matin commencent." },
      { titre: "Variante — stagiaire expérimentée", description: "Léa a déjà effectué un stage en EHPAD et conteste qu'on la fasse seulement observer : elle veut participer d'emblée à la toilette." }
    ],
    steps: [
      {
        q: "Comment commences-tu réellement l'accueil de Léa ?",
        choices: [
          { text: "Te présenter, vérifier son identité et lui remettre les documents prévus.", correct: true, feedback: "Juste : accueillir un nouvel agent commence par la présentation et le cadre. Partir directement au petit-déjeuner était chaleureux, mais sautait les repères nécessaires." },
          { text: "L'emmener au petit-déjeuner pour qu'elle se sente intégrée tout de suite.", correct: false, feedback: "Séduisant : le repas est un moment convivial qui détend une étudiante. Mais sans présentation ni documents, elle arrive sur le terrain sans repère ni consigne." },
          { text: "La laisser observer seule au poste de soins en attendant le livret imprimé.", correct: false, feedback: "Séduisant : respecter son souhait d'observer paraît adapté à sa demande. Mais une observation sans explication ni accompagnement ne construit pas d'apprentissage." },
          { text: "Confier l'accueil à une autre stagiaire, toi étant débordé ce matin.", correct: false, feedback: "Séduisant : une pair peut rassurer plus vite qu'un référent occupé. Mais le tutorat engage ta responsabilité : déléguer sans encadrer laisse Léa sans interlocuteur clair." }
        ] },
      {
        q: "Léa hésite à participer à la toilette, par peur de mal faire. Comment l'accompagnes-tu ?",
        choices: [
          { text: "Lui proposer une observation guidée puis un geste simple, avec ton retour.", correct: true, feedback: "Juste : encadrer un stagiaire, c'est graduer la difficulté et donner un retour rapide. Insister pour un geste complet aurait été formateur en apparence, mais risqué pour elle." },
          { text: "Insister pour qu'elle fasse la toilette entière, la pratique étant formatrice.", correct: false, feedback: "Séduisant : mettre tout de suite les mains dans le soin peut créer une confiance rapide. Mais sans préparation, sa peur peut se transformer en un geste maladroit ou forcé." },
          { text: "La dispenser de tout geste pendant la semaine, le stage servant à observer.", correct: false, feedback: "Séduisant : protéger Léa de toute pression respecte son rythme du moment. Mais une PFMP sans mise en situation ne permet pas d'acquérir les gestes attendus." },
          { text: "La placer avec la collègue la plus occupée pour apprendre par imprégnation.", correct: false, feedback: "Séduisant : l'imprégnation auprès d'une soignante expérimentée paraît efficace. Mais une collègue débordée n'a ni le temps ni la posture pour expliquer et corriger." }
        ] },
      {
        q: "En fin de journée, que prévois-tu pour son suivi ?",
        choices: [
          { text: "Noter les gestes vus et à revoir, puis convenir d'un point avec le tuteur.", correct: true, feedback: "Juste : le tutorat comprend un suivi écrit et un échange régulier. Se contenter d'un récit oral aurait été plus rapide, mais sans trace pour la suite du stage." },
          { text: "Laisser le livret vide, la première journée n'ayant pas d'enjeu d'évaluation.", correct: false, feedback: "Séduisant : préserver une journée découverte sans notation respecte le rythme de Léa. Mais le livret sert aussi à garder la mémoire des gestes abordés." },
          { text: "Raconter oralement à l'infirmière ce que tu as vu, sans trace dans le livret.", correct: false, feedback: "Séduisant : un échange verbal immédiat transmet l'essentiel à l'équipe. Mais sans consignation, le suivi dépend de la mémoire de chacun au fil des jours." },
          { text: "Remplir le livret à sa place à partir de tes impressions, pour lui gagner du temps.", correct: false, feedback: "Séduisant : écrire à sa place soulage une étudiante encore hésitante. Mais le livret doit refléter son vécu et son analyse, pas seulement le regard du référent." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'accueil cadre et l'intégration rapide au petit-déjeuner, puis entre protection et mise en situation. Point fort : gradation des gestes. À retravailler : traçabilité du suivi."
  },
  {
    id: "S64", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.2","C3.3"],
    titre: "Heurt d'un fauteuil : signaler sans trahir la confiance de Mme R.",
    description: "À 11 h, un chariot heurte le fauteuil de Mme R. dans le couloir. Elle est effrayée mais dit qu'elle va bien ; ta collègue suggère de « juste remettre le fauteuil en place ». Le registre des incidents est sur le bureau.",
    hints: ["Vérifie la personne avant le matériel.","Explique pourquoi le signalement protège.","Décris les faits sans interpréter."],
    variantes: [
      { titre: "Variante — témoin absent", description: "Personne n'a vu le heurt : seul le chariot déplacé et la plainte de Mme R. permettent de reconstituer l'incident." },
      { titre: "Variante — consigne de la responsable", description: "La responsable de phase demande de limiter les inscriptions au registre, craignant une hausse du nombre d'incidents déclarés." }
    ],
    steps: [
      {
        q: "Quelle est ta première préoccupation ?",
        choices: [
          { text: "Vérifier l'état de Mme R., la rassurer et prévenir l'infirmière.", correct: true, feedback: "Juste : la surveillance de la personne prime sur le matériel, puis le signalement permet d'analyser. Vérifier les roues d'abord était logique, mais moins urgent." },
          { text: "Remettre le fauteuil en place et contrôler les roues, sans gravité apparente.", correct: false, feedback: "Séduisant : rétablir le matériel évite une nouvelle chute dans le couloir. Mais l'état de Mme R. reste à vérifier avant de conclure à un incident sans suite." },
          { text: "Prévenir le service technique, seul juge de l'état du chariot et du fauteuil.", correct: false, feedback: "Séduisant : le service technique a les compétences pour contrôler le matériel. Mais le premier réflexe concerne la résidente, pas l'équipement." },
          { text: "Noter l'heure du heurt dans le registre avant de retourner la voir.", correct: false, feedback: "Séduisant : consigner tout de suite évite d'oublier un détail dans le remue-ménage. Mais la personne doit être examinée avant l'administratif." }
        ] },
      {
        q: "Mme R. demande de n'en parler à personne. Comment réponds-tu ?",
        choices: [
          { text: "Respecter sa parole en expliquant que le signalement protège sa sécurité.", correct: true, feedback: "Juste : l'écoute et le respect de la personne s'accompagnent d'une information claire. Promettre le secret aurait été plus agréable pour elle, mais aurait bloqué la prévention." },
          { text: "Promettre le secret, sa demande étant claire et sa conscience intacte.", correct: false, feedback: "Séduisant : respecter sa consigne renforce la confiance installée avec elle. Mais un heurt doit être consigné pour identifier un risque pour les autres résidents." },
          { text: "Passer outre sans explication, le règlement primant sur son souhait.", correct: false, feedback: "Séduisant : appliquer la procédure sans discussion garantit le signalement. Mais agir sans expliquer peut être vécu comme une trahison et nuire à la relation." },
          { text: "Demander à sa fille de trancher, elle connaît mieux ses volontés.", correct: false, feedback: "Séduisant : la famille est une interlocutrice légitime sur les souhaits de Mme R. Mais sa parole suffit ici : le signalement concerne la sécurité collective." }
        ] },
      {
        q: "Comment renseigner le registre des incidents ?",
        choices: [
          { text: "Décrire les faits, l'heure, les présents et les suites, sans interpréter.", correct: true, feedback: "Juste : un signalement factuel permet à l'équipe d'analyser le risque. Un récit orienté aurait été plus rapide à écrire, mais aurait pollué l'analyse." },
          { text: "Indiquer « heurt sans conséquence » pour éviter de mobiliser la direction.", correct: false, feedback: "Séduisant : une formulation courte rassure et évite d'inquiéter inutilement. Mais elle efface la peur ressentie et empêche toute analyse de prévention." },
          { text: "Écrire un long récit avec tes suppositions sur la responsabilité du collègue.", correct: false, feedback: "Séduisant : détailler les circonstances peut aider à comprendre le déroulé. Mais mettre en cause une personne sans fait établi transforme le registre en accusation." },
          { text: "Laisser la case vide jusqu'à l'avis du médecin, les faits n'étant pas avérés.", correct: false, feedback: "Séduisant : attendre un avis médical paraît prudent avant d'écrire. Mais le registre doit recevoir le fait constaté maintenant, même avant toute conclusion médicale." }
        ] }
    ],
    bilan: "Tu as arbitré entre le confort de ne rien signaler et la sécurité collective, puis entre respect de la parole et nécessité de tracer. Point fort : écoute de Mme R. À retravailler : rigueur factuelle."
  },
  {
    id: "S65", bloc: "B4", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C4.1","C4.2"],
    titre: "Atelier hydratation : un support validé qui ne convient pas au groupe",
    description: "Tu prépares une action d'éducation à la santé sur l'hydratation pour douze résidents du centre. Le support « eau et santé » est déjà prêt, mais la moitié du groupe suit une restriction de boissons et deux personnes ont des troubles de la déglutition. La responsable dit : « Garde le support tel quel, il est validé. »",
    hints: ["Analyse les besoins avant de choisir le support.","Fais valider les adaptations avec l'équipe soignante.","Teste avant de généraliser."],
    variantes: [
      { titre: "Variante — informations insuffisantes", description: "Les régimes ne sont pas tous inscrits au dossier : une résidente évoque une restriction que l'équipe ignorait jusqu'ici." },
      { titre: "Variante — contrainte de calendrier", description: "L'atelier doit avoir lieu dans une heure : le temps manque pour refaire entièrement les documents prévus." }
    ],
    steps: [
      {
        q: "Avant de choisir le support, que fais-tu ?",
        choices: [
          { text: "Repérer les besoins et restrictions du groupe, puis adapter le support.", correct: true, feedback: "Juste : analyser les besoins du public précède la conception de l'action. Garder le support validé aurait fait gagner du temps, mais aurait exclu une partie du groupe." },
          { text: "Utiliser le support validé par la direction, déjà diffusé l'an dernier.", correct: false, feedback: "Séduisant : un document éprouvé rassure et évite de recommencer. Mais son contenu ne tient pas compte des restrictions alimentaires actuelles du groupe." },
          { text: "Demander aux résidents de se répartir par régime pour simplifier l'atelier.", correct: false, feedback: "Séduisant : séparer les sous-groupes paraît clarifier les consignes. Mais cela stigmatise les personnes concernées et morcelle l'action d'éducation à la santé." },
          { text: "Réduire le support à une affiche, la diététique relevant du médecin.", correct: false, feedback: "Séduisant : limiter le contenu évite de donner des conseils hors de ton rôle. Mais l'éducation à la santé peut transmettre des repères généraux sans empiéter sur la prescription." }
        ] },
      {
        q: "Certains résidents ne peuvent pas boire d'eau plate. Comment construis-tu l'action ?",
        choices: [
          { text: "Prévoir des exemples adaptés aux textures autorisées, validés avec l'équipe.", correct: true, feedback: "Juste : concevoir une action accessible suppose de tenir compte des besoins réels. Expliquer la règle générale à tout le monde aurait été plus simple mais inadapté." },
          { text: "Expliquer la règle générale au groupe, chacun appliquant son régime ensuite.", correct: false, feedback: "Séduisant : un message unique est plus clair pour un groupe nombreux. Mais les résidents avec trouble de la déglutition ne peuvent pas appliquer cette règle sans l'adapter." },
          { text: "Écarter les personnes concernées pour ne pas créer d'exception pour deux cas.", correct: false, feedback: "Séduisant : limiter les exceptions simplifie l'organisation de l'atelier. Mais exclure justement ceux qui ont le plus besoin d'information va à l'encontre de l'action." },
          { text: "Laisser chacun choisir librement sa boisson, l'autonomie primant sur la consigne.", correct: false, feedback: "Séduisant : respecter le choix de la personne est une valeur forte en accompagnement. Mais ici, la liberté de choix entre en conflit avec une restriction médicale." }
        ] },
      {
        q: "Comment vérifies-tu la pertinence de l'action avant de la généraliser ?",
        choices: [
          { text: "Tester le support sur un petit groupe, recueillir les retours puis l'ajuster.", correct: true, feedback: "Juste : évaluer et ajuster fait partie de la conception d'une action. Généraliser tout de suite aurait été plus rentable, mais aurait diffusé un support inadapté." },
          { text: "Conserver le support initial, les ajustements relevant de la direction seule.", correct: false, feedback: "Séduisant : attendre une validation hiérarchique évite de prendre une décision seule. Mais les retours du terrain doivent aussi remonter avant une diffusion plus large." },
          { text: "Demander au médecin de relire le contenu, sans recueillir l'avis des résidents.", correct: false, feedback: "Séduisant : l'avis médical sécurise les consignes sur les boissons. Mais sans retour des résidents, rien ne dit que le support est compréhensible pour eux." },
          { text: "Généraliser immédiatement à tous les groupes pour rentabiliser la préparation.", correct: false, feedback: "Séduisant : utiliser le support pour tous évite de refaire le travail plusieurs fois. Mais une généralisation sans évaluation risque de propager une erreur à tout le centre." }
        ] }
    ],
    bilan: "Tu as arbitré entre un support validé et les besoins réels du groupe, puis entre autonomie et consignes de santé. Point fort : analyse des restrictions. À retravailler : évaluation avant diffusion."
  },
  {
    id: "S66", bloc: "B4", annee: "T", contexte: "centre", duree: "25 min", difficulte: 3,
    competences: ["C4.3"],
    titre: "Prévention des chutes : animer quand le groupe décroche",
    description: "Tu animes un atelier de prévention des chutes pour huit résidents. À mi-parcours, Mme D. déclare qu'elle « connaît déjà tout ça », deux participants détournent le regard, et l'animatrice propose d'écourter pour enchaîner un autre atelier.",
    hints: ["Relance par une démonstration concrète.","Négocie le temps de l'exercice pratique.","Évalue ce que les résidents savent faire."],
    variantes: [
      { titre: "Variante — salle bruyante", description: "Un autre groupe attend dans le même hall : le bruit couvre tes consignes et plusieurs résidents n'entendent pas la démonstration." },
      { titre: "Variante — résidente opposée", description: "Mme D. affirme que les consignes sont faites pour les « autres » et encourage les voisins à ne pas participer à l'exercice." }
    ],
    steps: [
      {
        q: "Comment relances-tu l'atelier sans braquer le groupe ?",
        choices: [
          { text: "Proposer une démonstration avec le fauteuil et solliciter Mme D. en premier.", correct: true, feedback: "Juste : mettre en œuvre une action passe par des démonstrations et des échanges. Poursuivre le plan initial était plus simple, mais le groupe avait déjà décroché." },
          { text: "Continuer le programme prévu sans tenir compte des remarques entendues.", correct: false, feedback: "Séduisant : respecter le déroulé garantit que tous les points seront abordés. Mais un groupe qui décroche ne retiendra rien d'un exposé poursuivi malgré lui." },
          { text: "Demander à Mme D. de se taire pour ne pas décourager les plus attentifs.", correct: false, feedback: "Séduisant : recadrer une remarque désagréable protège l'ambiance du groupe. Mais fermer la parole d'une résidente renforce son opposition et coupe un échange utile." },
          { text: "Interrompre l'atelier et distribuer la brochure à lire chacun de son côté.", correct: false, feedback: "Séduisant : donner un document laisse à chacun le temps de lire à son rythme. Mais une brochure sans démonstration ni échange ne constitue pas une animation." }
        ] },
      {
        q: "L'animatrice veut écourter. Quelle est ta réponse professionnelle ?",
        choices: [
          { text: "Négocier quelques minutes pour l'exercice, en expliquant son utilité.", correct: true, feedback: "Juste : l'évaluation et la mise en pratique font partie de l'action. Accepter sans discuter aurait préservé le programme, mais aurait vidé l'atelier de son contenu." },
          { text: "Accepter sans discussion, le centre fixant le calendrier des ateliers.", correct: false, feedback: "Séduisant : respecter le planning évite de désorganiser les autres groupes. Mais renoncer à l'exercice supprime le moment où les gestes s'ancrent réellement." },
          { text: "Refuser catégoriquement au nom de la qualité, quitte à décaler le reste.", correct: false, feedback: "Séduisant : défendre la qualité montre ton engagement pédagogique. Mais imposer ton point de vue sans tenir compte du calendrier met l'équipe en difficulté." },
          { text: "Poursuivre sans prévenir, le groupe ayant déjà commencé l'exercice.", correct: false, feedback: "Séduisant : continuer une activité entamée évite de laisser les résidents sur leur élan. Mais sans accord sur le temps, tu prends seul une décision qui engage l'équipe." }
        ] },
      {
        q: "Comment évalues-tu l'action à la fin de la séance ?",
        choices: [
          { text: "Recueillir ce que chacun sait faire et noter les points à reprendre.", correct: true, feedback: "Juste : évaluer une action d'éducation à la santé, c'est vérifier les compétences acquises. Un simple vote de satisfaction aurait été plus rapide mais bien moins informatif." },
          { text: "Compter les présents et les brochures distribuées comme preuve de réussite.", correct: false, feedback: "Séduisant : ces chiffres sont faciles à relever et donnent un bilan chiffré. Mais ils mesurent la participation, pas ce que les résidents ont appris." },
          { text: "Demander au groupe s'il a aimé, en résumant le bilan à ce ressenti global.", correct: false, feedback: "Séduisant : recueillir l'avis des participants est utile pour l'ambiance. Mais une appréciation globale ne dit pas si les gestes de prévention ont été compris." },
          { text: "Reporter l'évaluation à la prochaine réunion, le temps manquant après l'atelier.", correct: false, feedback: "Séduisant : différer l'évaluation permet de libérer la salle pour le groupe suivant. Mais le souvenir des réactions s'estompe vite : le bilan perd en précision." }
        ] }
    ],
    bilan: "Tu as arbitré entre un déroulé confortable et une animation relancée, puis entre le calendrier du centre et le temps nécessaire à la pratique. Point fort : écoute du groupe. À retravailler : évaluation des acquis."
  },
  {
    id: "S67", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C1.1","C1.2"],
    titre: "Arrivée de M. P. : la fille répond à sa place",
    description: "M. P., 78 ans, arrive à 10 h en EHPAD après une hospitalisation pour fracture du col. Sa fille répond aux questions à sa place : « Il n'aime pas qu'on le questionne. » M. P. regarde ses chaussures sans rien dire, et l'infirmière t'attend pour la toilette.",
    hints: ["Adresse-toi d'abord à la personne.","Reformule sa crainte avant de répondre.","Transmets les faits observés, pas un jugement."],
    variantes: [
      { titre: "Variante — fils présent", description: "Le fils de M. P. coupe également la parole et exige que les soins soient faits exactement comme à l'hôpital." },
      { titre: "Variante — arrivage retardé", description: "L'admission a deux heures de retard : l'infirmière doit partir à une réunion juste après la toilette et n'aura pas le temps d'échanger avec toi." }
    ],
    steps: [
      {
        q: "Comment engages-tu cette première rencontre ?",
        choices: [
          { text: "Te présenter à M. P., le regarder et laisser sa fille répondre après lui.", correct: true, feedback: "Juste : accueillir la personne, c'est s'adresser à elle en premier. Questionner sa fille d'abord allait plus vite, mais installait l'habitude de parler à sa place." },
          { text: "Questionner sa fille, qui connaît ses habitudes et répond plus vite.", correct: false, feedback: "Séduisant : la famille détient des informations précieuses et sait formuler les réponses. Mais commencer par elle exclut M. P. de sa propre arrivée." },
          { text: "Enchaîner sur la toilette pour installer la relation par le geste.", correct: false, feedback: "Séduisant : le soin est un moment privilégié pour créer un contact. Mais sans présentation ni parole, il peut être vécu comme une intrusion." },
          { text: "Garder un silence complet, sans rien dire, pour respecter son aversion.", correct: false, feedback: "Séduisant : ne pas poser de question respecte ce que sa fille a rapporté. Mais un silence sans accueil ne rassure personne et laisse le doute s'installer." }
        ] },
      {
        q: "M. P. murmure qu'il a peur de ne plus jamais marcher. Que réponds-tu ?",
        choices: [
          { text: "Reformuler sa crainte, l'écouter, puis proposer d'en parler à l'équipe.", correct: true, feedback: "Juste : écoute active et reformulation caractérisent une posture adaptée. Affirmer qu'il remarchera aurait été encourageant, mais aurait nié sa peur." },
          { text: "L'assurer qu'il remarchera très vite pour lui redonner confiance.", correct: false, feedback: "Séduisant : un message optimiste peut immédiatement apaiser une personne inquiète. Mais promettre une évolution que tu ne peux garantir risque de le décevoir ensuite." },
          { text: "Lui citer les chiffres de récupération après opération pour appuyer tes propos.", correct: false, feedback: "Séduisant : des données chiffrées donnent un cadre rassurant et concret. Mais elles répondent à une question statistique, pas à la peur qu'il vient d'exprimer." },
          { text: "Changer de sujet en parlant du repas de midi pour éviter son inquiétude.", correct: false, feedback: "Séduisant : détourner l'attention limite la montée de l'émotion au moment de l'arrivée. Mais éviter le sujet revient à laisser sa crainte sans réponse." }
        ] },
      {
        q: "Que transmets-tu à l'équipe après cet accueil ?",
        choices: [
          { text: "Ses propos, son attitude et la place de sa fille, en séparant faits et impressions.", correct: true, feedback: "Juste : une transmission utile distingue ce qui a été observé de ton interprétation. Ne rien noter aurait été plus rapide, mais l'équipe perdrait un repère sur son arrivée." },
          { text: "Les seules données administratives, l'accueil n'ayant rien révélé de grave.", correct: false, feedback: "Séduisant : l'administratif est indispensable à l'admission et suffit à la procédure. Mais l'équipe a aussi besoin de ce qui s'est joué dans la rencontre." },
          { text: "Ton avis sur son caractère, en notant qu'il semble être une personnalité difficile.", correct: false, feedback: "Séduisant : une étiquette rapide aide à anticiper les difficultés de l'accompagnement. Mais un jugement de ce type n'est ni un fait ni une information transmissible." },
          { text: "La consigne de sa fille de limiter les questions, sans rapporter ses paroles.", correct: false, feedback: "Séduisant : noter la demande familiale permet d'adapter les échanges. Mais sans les propos de M. P., l'équipe ne mesure pas l'importance de sa peur." }
        ] }
    ],
    bilan: "Tu as arbitré entre la parole de la fille et celle de M. P., puis entre consolation rapide et écoute réelle. Point fort : posture d'accueil. À retravailler : anticipation du relais."
  },
  {
    id: "S68", bloc: "B1", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C1.3","C1.4"],
    titre: "Atelier cuisine : une coupure et un projet individualisé à respecter",
    description: "Au centre, six résidents préparent une salade de fruits. Mme L. se coupe légèrement le doigt et veut continuer ; l'autre animatrice dit : « Ce n'est rien, on a encore trois groupes à enchaîner. » Son projet individualisé mentionne une phobie des soins.",
    hints: ["Sécurise le geste avant de poursuivre l'atelier.","Explique et laisse choisir avant tout soin.","Fais remonter l'incident dans le suivi du projet."],
    variantes: [
      { titre: "Variante — plaie plus importante", description: "Le saignement ne s'arrête pas avec un simple linge propre et Mme L. commence à avoir le vertige." },
      { titre: "Variante — projet individualisé inaccessible", description: "Le dossier de Mme L. n'est pas disponible : seule une collègue se souvient de sa phobie des soins." }
    ],
    steps: [
      {
        q: "Quelle est ta première action auprès de Mme L. ?",
        choices: [
          { text: "Arrêter le geste, poser un pansement propre et regarder la plaie.", correct: true, feedback: "Juste : sécuriser la personne fait partie de l'accompagnement et du maintien de l'autonomie. Continuer la découpe était tentant pour ne pas casser le rythme de l'atelier." },
          { text: "Lui proposer de finir avec l'autre main pour ne pas interrompre l'atelier.", correct: false, feedback: "Séduisant : poursuivre l'activité valorise son implication et évite de la mettre à l'écart. Mais une plaie non protégée au contact des fruits présente un risque pour elle." },
          { text: "L'envoyer seule au lavabo rincer son doigt avant de revenir à sa place.", correct: false, feedback: "Séduisant : l'eau courante nettoie la plaie et lui laisse un moment d'intimité. Mais seule, elle risque de minimiser la coupure ou de ne pas savoir comment la protéger." },
          { text: "Demander à l'autre animatrice de s'en occuper, toi surveillant le four.", correct: false, feedback: "Séduisant : répartir les tâches évite de négliger la cuisson des autres préparations. Mais transférer le suivi sans expliquer la situation laisse Mme L. sans repère adapté." }
        ] },
      {
        q: "Elle refuse qu'on touche à sa main. Comment respecter son projet ?",
        choices: [
          { text: "Expliquer les gestes, lui laisser choisir qui l'accompagne et noter son refus.", correct: true, feedback: "Juste : le projet individualisé guide l'action : expliquer, proposer, respecter. Passer outre aurait protégé la plaie, mais aurait traité sa peur comme sans importance." },
          { text: "Passer outre son refus, une plaie ouverte imposant un soin sans attendre.", correct: false, feedback: "Séduisant : l'urgence apparente de la plaie justifie une intervention rapide. Mais imposer un soin à une personne qui en a peur abîme la relation et le sens de son projet." },
          { text: "Renoncer au pansement et lui proposer simplement de poser sa main sur un linge.", correct: false, feedback: "Séduisant : éviter tout contact respecte sa phobie et préserve son autonomie. Mais une coupure restée à l'air libre au contact des aliments reste exposée." },
          { text: "Faire intervenir l'autre animatrice sans explication, pour ne pas la braquer.", correct: false, feedback: "Séduisant : changer de personne peut diminuer la tension si la relation est tendue. Mais sans explication, le même geste impose abruptement ce qu'elle vient de refuser." }
        ] },
      {
        q: "Que fais-tu après l'atelier pour le suivi de son projet ?",
        choices: [
          { text: "Consigner l'incident et sa réaction, puis informer l'équipe pour ajuster le projet.", correct: true, feedback: "Juste : participer au suivi du projet individualisé, c'est faire remonter ce qui s'est passé. Ne rien tracer aurait été plus léger, mais l'équipe ne pourrait pas adapter l'atelier suivant." },
          { text: "Rédiger une note pour le seul dossier de l'atelier, la plaie étant bénigne.", correct: false, feedback: "Séduisant : la noter dans le dossier de l'activité garde une trace de l'incident. Mais le suivi individuel de Mme L. n'en profitera pas lors des prochaines séances." },
          { text: "Attendre la prochaine réunion de l'équipe pluriprofessionnelle pour en parler.", correct: false, feedback: "Séduisant : la réunion est le lieu prévu pour réévaluer les projets. Mais différer prive les collègues d'une information utile dès le prochain atelier." },
          { text: "En parler à sa voisine de table, qui relaiera l'information à l'équipe.", correct: false, feedback: "Séduisant : la voisine est présente et connaît bien Mme L. Mais confier une information à une tierce personne ne garantit ni la discrétion ni la transmission." }
        ] }
    ],
    bilan: "Tu as arbitré entre le rythme de l'atelier et la sécurité de Mme L., puis entre efficacité du soin et respect de son projet. Point fort : accompagnement respectueux. À retravailler : remontée dans le suivi."
  },
  {
    id: "S69", bloc: "B2", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C2.1","C2.4"],
    titre: "Repas du soir : le gâteau de la famille et le régime",
    description: "Il est 19 h, tu distribues les repas du soir à l'étage. Mme Bertin, 84 ans, suit un régime sans sel strict, mais sa fille vient de déposer un gâteau « spécialement pour elle ». Le collègue te presse : le service doit finir avant 19 h 30.",
    hints: ["Vérifie le régime prescrit avant de proposer tout aliment.","Écoute la famille sans promettre ce que tu ne décides pas.","Trace l'incident et alerte l'infirmier si le régime est contesté."],
    variantes: [
      { titre: "Variante — le colis arrive au petit déjeuner", description: "La fille revient le lendemain matin avec une boîte de chocolats. Le petit déjeuner est déjà servi et l'équipe de nuit n'a rien consigné sur le régime de Mme Bertin." },
      { titre: "Variante — la résidente réclame le gâteau", description: "Mme Bertin, qui avait refusé son plat, réclame le gâteau devant les autres convives. Le collègue suggère de céder pour éviter une scène au réfectoire." }
    ],
    steps: [
      {
        q: "La fille insiste pour que sa mère goûte le gâteau. Quelle est ta première action ?",
        choices: [
          { text: "Consulter le plan de soins pour confirmer le régime avant de répondre à la fille.", correct: true, feedback: "Juste : le régime est une prescription que tu vérifies dans le plan de soins avant tout engagement. La remarque du collègue est tentante, mais la sécurité alimentaire prime sur la rapidité du service." },
          { text: "Remercier la fille et servir le gâteau, elle connaît mieux sa mère que l'équipe.", correct: false, feedback: "Séduisant : la fille connaît les habitudes de sa mère et son geste est touchant. Mais le régime sans sel a été prescrit par le médecin : tu ne peux pas déléguer cette décision à la famille." },
          { text: "Refuser le gâteau sans expliquer pourquoi, pour ne pas perdre de temps au service.", correct: false, feedback: "Séduisant : refuser immédiatement évite tout risque et fait gagner du temps. Mais sans explication, la fille se sent rejetée et peut revenir plus tard avec un autre aliment." },
          { text: "Laisser la fille décider seule de ce que sa mère mangera ce soir au repas.", correct: false, feedback: "Séduisant : impliquer la famille respecte son rôle et évite un conflit ouvert. Mais laisser décider seule revient à contourner la prescription, dont tu es garante pendant le repas." }
        ] },
      {
        q: "Tu installes Mme Bertin, qui tousse et repousse son assiette. Que fais-tu ?",
        choices: [
          { text: "Interrompre le service, l'installer en position assise et prévenir l'infirmier.", correct: true, feedback: "Juste : une toux pendant le repas peut signaler une fausse route ; arrêter l'alimentation, installer et alerter relève de la sécurité. L'envie de finir le service est compréhensible, mais l'urgence prime." },
          { text: "Lui proposer une gorgée d'eau pour l'aider à avaler, puis reprendre le service.", correct: false, feedback: "Séduisant : faire boire semble soulager et garde le service à l'heure. Mais en cas de fausse route, donner à boire peut aggraver l'obstruction : il faut d'abord évaluer et alerter." },
          { text: "Noter la toux sur la feuille de route et passer au résident suivant sans attendre.", correct: false, feedback: "Séduisant : noter le signe témoigne de ta vigilance et respecte le rythme du service. Mais une toux pendant le repas demande une intervention immédiate, pas une inscription différée." },
          { text: "Réduire la texture de son repas de ta propre initiative pour faciliter la prise.", correct: false, feedback: "Séduisant : adapter la texture part d'une bonne intention et correspond à ton rôle d'installation. Mais modifier une texture prescrite sans accord de l'infirmier dépasse ta compétence." }
        ] },
      {
        q: "À la fin du repas, que consignes-tu dans le dossier de Mme Bertin ?",
        choices: [
          { text: "L'heure, le refus du gâteau, la toux, l'alerte donnée et l'évolution de la personne.", correct: true, feedback: "Juste : une transmission utile est datée, factuelle et suit l'évolution. Le collègue qui voulait « juste prévenir » serait tenté de se contenter d'un mot, mais l'équipe de nuit a besoin du déroulé." },
          { text: "Le bilan chiffré du service : repas servis, heures de passage et avis de la cuisine.", correct: false, feedback: "Séduisant : ces chiffres intéressent la cuisine et facilitent le bilan du service. Mais ils ne disent rien de l'état de Mme Bertin, qui est précisément l'objet de la transmission." },
          { text: "La seule remarque de la fille, en espérant que l'infirmier vérifiera le régime plus tard.", correct: false, feedback: "Séduisant : relater la demande de la famille montre que tu l'as écoutée. Mais sans les signes observés ni l'heure, l'infirmier ne peut ni juger ni poursuivre la surveillance." },
          { text: "La prescription de régime telle que tu la connais, sans l'heure ni les signes observés.", correct: false, feedback: "Séduisant : rappeler le régime paraît essentiel et évite de noyer le message. Mais une prescription seule, sans chronologie ni évolution, ne permet pas de mesurer l'effet de ton alerte." }
        ] }
    ],
    bilan: "Tu as arbitré entre la pression du service et la sécurité alimentaire de Mme Bertin. Point fort : tu as vérifié la prescription avant de répondre à la famille. À retravailler : la précision des horaires dans ta transmission."
  },
  {
    id: "S70", bloc: "B2", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C2.2","C2.3"],
    titre: "Surveillance post-opératoire : lever seul ou sécuriser ?",
    description: "Mme C., 70 ans, est rentrée hier d'hospitalisation après une opération de la hanche. Ce matin, elle se dit « un peu essoufflée » et veut se lever seule pour aller aux toilettes, alors que le protocole prévoit une aide. L'ascenseur est en panne et un chariot bloque le couloir.",
    hints: ["Compare les signes observés aux consignes écrites du protocole.","Sécurise l'environnement avant de laisser un déplacement.","Alerte sans attendre que les signes s'aggravent."],
    variantes: [
      { titre: "Variante — la famille veut la lever", description: "Le fils de Mme C. est arrivé et veut l'aider à marcher pour « lui prouver qu'elle va mieux ». L'infirmier est en réunion et ne répond pas à l'appel." },
      { titre: "Variante — le cathéter est déplacé", description: "En l'installant, tu remarques que le dispositif médical posé à l'hôpital s'est déplacé. Mme C. assure qu'elle n'a pas mal et demande qu'on ne « fasse pas tout un drame »." }
    ],
    steps: [
      {
        q: "Mme C. veut se lever seule. Quelle est ta première action ?",
        choices: [
          { text: "Évaluer son essoufflement et l'aider à se lever selon le protocole de la hanche.", correct: true, feedback: "Juste : surveiller l'état de la personne et intervenir suppose d'abord d'évaluer, puis d'appliquer le protocole de mobilisation. Sa motivation est tentante à respecter, mais l'essoufflement change la donne." },
          { text: "Féliciter sa motivation et la laisser se lever, l'ascenseur étant en panne.", correct: false, feedback: "Séduisant : soutenir son autonomie après une opération est légitime et la panne d'ascenseur presse. Mais un essoufflement avec appui unipodal expose à une chute : l'aide n'est pas facultative." },
          { text: "Lui demander d'attendre l'infirmier, assise au bord du lit sans bouger.", correct: false, feedback: "Séduisant : attendre l'infirmier évite de prendre une décision seule sur une mobilisation. Mais la laisser assise au bord du lit sans surveillance ni aide entretient le risque au lieu de le lever." },
          { text: "Déplacer le chariot du couloir d'abord, puis revenir l'installer tranquillement.", correct: false, feedback: "Séduisant : dégager le couloir relève bien de ton rôle sur l'environnement proche. Mais le chariot attendra : la priorité est l'évaluation de la personne, pas l'ordre du nettoyage." }
        ] },
      {
        q: "Tu notes une respiration rapide et une plainte au moment du lever. Que fais-tu ?",
        choices: [
          { text: "Interrompre le lever, la réinstaller et appeler l'infirmier sans différer l'alerte.", correct: true, feedback: "Juste : une modification respiratoire après une opération doit être signalée immédiatement. L'habitude de « voir si ça passe » est compréhensible, mais l'aggravation peut être rapide." },
          { text: "Lui proposer de respirer lentement et attendre cinq minutes avant de prévenir.", correct: false, feedback: "Séduisant : la respiration guidée est une technique utile et le réflexe de ne pas déranger est humain. Mais cinq minutes d'attente retardent un avis qui doit être pris sans délai." },
          { text: "Consigner la plainte dans le dossier et attendre la visite médicale de l'après-midi.", correct: false, feedback: "Séduisant : tracer le signe prouve ton attention et le dossier reste la mémoire de l'équipe. Mais une consignation seule n'alerte personne : il faut prévenir l'infirmier avant la visite." },
          { text: "Appeler le médecin traitant directement, sans passer par l'infirmier de l'étage.", correct: false, feedback: "Séduisant : le médecin connaît l'intervention et tu veux gagner du temps. Mais la voie hiérarchique passe par l'infirmier, seul habilité à décider de la conduite à tenir ici." }
        ] },
      {
        q: "Après l'alerte, que vérifies-tu dans l'environnement de Mme C. ?",
        choices: [
          { text: "Le lit réglé bas, les barres relevées et le chemin vers la salle d'eau dégagé.", correct: true, feedback: "Juste : sécuriser l'environnement proche, c'est régler le lit, vérifier les aides et libérer le passage. Ranger la chambre est tentant, mais la prévention de la chute prime maintenant." },
          { text: "La propreté de la table de nuit et le remplacement des draps du jour avant midi.", correct: false, feedback: "Séduisant : l'hygiène de la chambre fait partie de ton rôle et les draps doivent être changés. Mais ce n'est pas le risque immédiat après une alerte sur une mobilisation." },
          { text: "La présence du chariot de nettoyage, pour qu'il soit rangé avant le passage du soir.", correct: false, feedback: "Séduisant : dégager le chariot avait du sens tout à l'heure et reste dans tes attributions. Mais l'important est le trajet de la personne, pas le rangement du matériel de nettoyage." },
          { text: "L'état de l'ascenseur, en espérant qu'il soit réparé pour la sortie de l'après-midi.", correct: false, feedback: "Séduisant : l'ascenseur conditionne la sortie et sa panne complique l'étage. Mais tu n'y peux rien ici : concentrer ton attention dessus détourne de la sécurité du lit." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'autonomie revendiquée par Mme C. et la surveillance post-opératoire. Point fort : tu as alerté sans attendre une aggravation. À retravailler : la hiérarchie des gestes de sécurisation du lit et du couloir."
  },
  {
    id: "S71", bloc: "B3", annee: "2", contexte: "structure", duree: "12 min", difficulte: 1,
    competences: ["C3.2","C3.3"],
    titre: "Dossier numérique : l'alerte, la panne et la relève",
    description: "Tu dois renseigner le dossier numérique avant la relève de 13 h. Le tableau affiche une alerte « donnée manquante » pour un résident, l'imprimante du poste est hors service, et l'infirmier te demande en plus un état des lieux pour la réunion qualité de 14 h.",
    hints: ["Vérifie la source avant de corriger une donnée.","Signale l'alerte plutôt que de la masquer.","Prépare une transmission écrite lisible pour la relève."],
    variantes: [
      { titre: "Variante — le mot de passe ne fonctionne plus", description: "À dix minutes de la relève, ton identifiant est refusé par le logiciel. Le collègue du poste voisin propose de te prêter le sien pour que tu termines la saisie." },
      { titre: "Variante — la panne touche tout l'étage", description: "L'imprimante est hors service et le réseau ralentit : le dossier numérique met plusieurs minutes à s'ouvrir. L'infirmier propose de reporter la réunion qualité au lendemain." }
    ],
    steps: [
      {
        q: "Le dossier signale une donnée manquante. Quelle est ta première action ?",
        choices: [
          { text: "Comparer avec le relevé papier et signaler l'écart avant toute correction.", correct: true, feedback: "Juste : traiter une information suppose de vérifier sa source et de tracer l'anomalie. Compléter « pour faire propre » est tentant, mais une donnée inventée deviendra une donnée tenue pour vraie." },
          { text: "Saisir la valeur la plus probable pour que l'alerte disparaisse du tableau.", correct: false, feedback: "Séduisant : une valeur plausible fait disparaître l'alerte et soulage l'équipe. Mais cette estimation n'a aucune source et fausse le suivi de la personne." },
          { text: "Attendre la relève en espérant que le collègue de l'après-midi la renseigne.", correct: false, feedback: "Séduisant : la relève est proche et le collègue connaît peut-être la valeur. Mais sans signalement, l'information risque d'être perdue et l'alerte restera ouverte." },
          { text: "Demander à l'infirmier de décider à ta place de la donnée à saisir au dossier.", correct: false, feedback: "Séduisant : l'infirmier est responsable du dossier et tu veux éviter une erreur seule. Mais lui demander de choisir à ta place te dispense de la vérification qui t'incombe." }
        ] },
      {
        q: "L'imprimante ne répond plus alors que tu prépares le support qualité. Que fais-tu ?",
        choices: [
          { text: "Prévenir le responsable et prévoir une version numérique pour la réunion.", correct: true, feedback: "Juste : la démarche qualité comprend la prévention des risques et l'adaptation des outils. Annoncer la panne est plus utile que de bricoler, car l'équipe peut modifier le support." },
          { text: "Reporter la réunion qualité en attendant la réparation de l'imprimante.", correct: false, feedback: "Séduisant : une réunion sans support visible perd de son efficacité et tu veux la réussir. Mais déplacer une instance collective pour une panne matérielle est disproportionné." },
          { text: "Recopier à la main les documents et les distribuer sans les faire valider.", correct: false, feedback: "Séduisant : recopier permet d'avoir un document malgré la panne et montre ton investissement. Mais une copie non validée peut diffuser une version obsolète du support qualité." },
          { text: "Utiliser l'imprimante de l'autre étage sans prévenir, pour ne pas retarder la réunion.", correct: false, feedback: "Séduisant : l'autre imprimante fonctionne et tu gagnes du temps avant 14 h. Mais l'utiliser sans accord contourne la procédure et le service technique ne saura pas quoi réparer." }
        ] },
      {
        q: "Juste avant la relève, que transmets-tu à ton collègue ?",
        choices: [
          { text: "L'alerte ouverte, la panne signalée et le support numérique prêt à l'emploi.", correct: true, feedback: "Juste : une transmission numérique efficace désigne les points ouverts et les outils disponibles. Le collègue pressé pourrait se contenter d'un « c'est dans le dossier », mais il perdrait le fil." },
          { text: "Le nom du résident concerné, sans préciser l'alerte ni la vérification en attente.", correct: false, feedback: "Séduisant : identifier le résident aide le collègue à cibler sa lecture. Mais sans l'alerte et la vérification en attente, il ne saura pas ce qui reste à faire." },
          { text: "Un résumé oral rapide, en comptant sur le dossier pour contenir le détail.", correct: false, feedback: "Séduisant : l'oral est rapide et le dossier reste la source officielle de l'équipe. Mais un résumé sans écrit ne laisse aucune trace de l'anomalie ni de la panne." },
          { text: "Les seules tâches accomplies, pour montrer que ton service se termine à l'heure.", correct: false, feedback: "Séduisant : faire le point sur tes tâches rassure sur la continuité du service. Mais une liste d'actions accomplies ne dit rien des points encore ouverts." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'envie de rendre un dossier impeccable et l'obligation de signaler une donnée incertaine. Point fort : tu as gardé la trace de l'anomalie. À retravailler : la forme écrite de la transmission de relève."
  },
  {
    id: "S72", bloc: "B3", annee: "T", contexte: "structure", duree: "15 min", difficulte: 2,
    competences: ["C3.1","C3.3"],
    titre: "Remarque publique d'un collègue devant un résident",
    description: "Au réfectoire, l'agent de cuisine reproche devant M. Pascal, 78 ans, d'avoir « encore oublié le plateau » alors que tu l'accompagnais aux toilettes. Le résident sourit gêné, ta collègue reste silencieuse et l'infirmier t'attend pour la remise du dossier de l'après-midi.",
    hints: ["Protège la dignité du résident avant la discussion.","Désamorce sur le moment, puis échange à l'écart.","Trace le fait sans transformer le conflit en rapport."],
    variantes: [
      { titre: "Variante — la remarque vient d'un résident", description: "Un autre résident proteste à voix haute parce que le service prend du retard. L'agent de cuisine regarde la scène sans intervenir et attend ta réaction devant la salle." },
      { titre: "Variante — la famille a entendu", description: "La fille de M. Pascal était présente au repas et demande ensuite à l'infirmier pourquoi tu as été « repris comme un débutant ». L'agent de cuisine s'est déjà excusé auprès d'elle." }
    ],
    steps: [
      {
        q: "L'agent critique ton travail devant le résident. Quelle est ta première réaction ?",
        choices: [
          { text: "Couper court avec calme et éloigner la discussion pour préserver le résident.", correct: true, feedback: "Juste : la posture professionnelle protège la personne d'une scène et garde le service en mouvement. Répliquer est humain, mais le résident ne doit pas devenir le témoin d'un conflit d'équipe." },
          { text: "Répondre du même ton pour rétablir immédiatement ton autorité devant lui.", correct: false, feedback: "Séduisant : se défendre sur le moment restaure ton image et évite de passer pour fautive. Mais la vivacité du ton transforme un reproche en escarmouche sous les yeux du résident." },
          { text: "Baisser les yeux et terminer le service, en attendant que l'agent s'excuse.", correct: false, feedback: "Séduisant : garder le silence et finir le service évite l'escalade et respecte la consigne de calme. Mais sans mise au point, le malentendu se rejouera au prochain repas." },
          { text: "Demander au résident de dire ce qu'il a vu pour clarifier les faits.", correct: false, feedback: "Séduisant : faire témoigner le résident paraît impartial et donne des faits concrets. Mais le placer au centre du désaccord le met mal à l'aise et l'expose à un rôle qu'il n'a pas choisi." }
        ] },
      {
        q: "Ta collègue, témoin de la scène, reste silencieuse. Que lui demandes-tu ?",
        choices: [
          { text: "De te dire ce qu'elle a compris, pour préparer un échange factuel avec l'agent.", correct: true, feedback: "Juste : gérer son activité avec l'équipe suppose de reconstituer les faits avant tout échange. Lui demander de prendre parti est tentant, mais un récit partagé vaut mieux qu'une accusation." },
          { text: "De confirmer que l'agent a tort, afin que tu puisses le signaler à l'infirmier.", correct: false, feedback: "Séduisant : un témoin qui confirme renforce ta position et facilite un signalement. Mais lui demander de trancher transforme son témoignage en prise de parti et durcit le conflit." },
          { text: "D'intervenir elle-même auprès de l'agent pendant que tu vas voir le résident.", correct: false, feedback: "Séduisant : déléguer l'échange te laisse libre pour rassurer le résident. Mais charger un collègue d'un message que tu n'as pas préparé risque d'aggraver le malentendu." },
          { text: "De laisser passer l'incident, l'agent étant connu pour ses remarques fréquentes.", correct: false, feedback: "Séduisant : l'agent a déjà fait des remarques et tout relayer peut sembler excessif. Mais accumuler les non-dits entretient un climat qui nuit à la qualité du service." }
        ] },
      {
        q: "L'infirmier attend le dossier. Que consignes-tu de cet incident ?",
        choices: [
          { text: "Les faits observés, l'impact sur le résident et l'échange prévu avec l'agent.", correct: true, feedback: "Juste : la traçabilité qualité retient les faits, les effets et les suites prévues. L'envie d'expédier le dossier est compréhensible, mais sans suite écrite rien n'est réellement clôturé." },
          { text: "Le nom de l'agent et une appréciation sévère de sa manière de parler au personnel.", correct: false, feedback: "Séduisant : nommer l'agent donne une responsable à l'incident et soulage l'équipe. Mais un jugement personnel n'a pas sa place dans un dossier : seuls les faits sont transmissibles." },
          { text: "Un simple mot sur la tension, en laissant l'infirmier deviner le contexte du repas.", correct: false, feedback: "Séduisant : un mot bref évite de charger le dossier et préserve l'agent. Mais sans le contexte, l'infirmier ne peut ni comprendre ni accompagner la suite." },
          { text: "Le déroulé du service uniquement, l'incident étant réglé verbalement selon toi.", correct: false, feedback: "Séduisant : l'échange verbal te paraît suffisant et évite d'éterniser l'incident. Mais ce qui n'est pas écrit échappe au suivi qualité et se rejouera sans trace." }
        ] }
    ],
    bilan: "Tu as arbitré entre la défense immédiate de ton image et la protection du résident. Point fort : tu as choisi le calme puis un échange factuel. À retravailler : la trace écrite de l'incident dans le dossier."
  },
  {
    id: "S73", bloc: "B4", annee: "1", contexte: "centre", duree: "15 min", difficulte: 1,
    competences: ["C4.1","C4.2"],
    titre: "Affiche sur l'hygiène des mains : concevoir pour ce public",
    description: "Au centre de jour, tu prépares une affiche sur l'hygiène des mains. La responsable veut un support « pour demain matin », mais tu as remarqué que les personnes âgées du groupe lisent difficilement les petits caractères et que deux d'entre elles portent des gants pour raisons de santé.",
    hints: ["Observe ce que le public sait déjà faire.","Choisis un format lisible avant de dessiner.","Prévois un moyen de vérifier la compréhension."],
    variantes: [
      { titre: "Variante — trois arrivées dans le groupe", description: "Le groupe accueille demain trois nouvelles personnes qui ne connaissent pas encore le centre. La responsable propose de garder le même support que d'habitude pour ne pas les perturber." },
      { titre: "Variante — une résidente propose son aide", description: "Une résidente du groupe, ancienne institutrice, propose de dessiner elle-même l'affiche. Elle écrit en très petites lettres et la responsable trouve l'idée « touchante »." }
    ],
    steps: [
      {
        q: "Avant de dessiner l'affiche, que fais-tu ?",
        choices: [
          { text: "Observer les usages du groupe et demander leurs habitudes de lavage des mains.", correct: true, feedback: "Juste : analyser les besoins du public commence par ce qu'il fait et comprend déjà. Réutiliser un support connu rassure, mais il peut passer à côté des difficultés de lecture observées." },
          { text: "Reprendre une affiche de l'année dernière en changeant seulement la date.", correct: false, feedback: "Séduisant : le support de l'année dernière est validé et fait gagner un temps précieux. Mais il ignore les gants et la lecture difficile vus ce matin : il ne parlera pas à ce groupe." },
          { text: "Demander à la responsable de choisir le mot exact à mettre en titre.", correct: false, feedback: "Séduisant : la responsable connaît le public et son aval sécurise ta conception. Mais lui déléguer le titre te dispense de l'analyse des besoins qui fonde l'action." },
          { text: "Rédiger le texte d'abord, quitte à adapter le format après l'impression.", correct: false, feedback: "Séduisant : le texte est le cœur du message et tu veux avancer vite avant demain. Mais écrire avant de choisir le format revient à ignorer la contrainte de lisibilité." }
        ] },
      {
        q: "Comment conçois-tu le support pour ce public ?",
        choices: [
          { text: "De grands caractères, peu de mots et des images montrant le geste avec des gants.", correct: true, feedback: "Juste : concevoir une action d'éducation à la santé adapte le support aux capacités du public. Le modèle de la salle d'attente est cohérent, mais il ne tient pas compte des gants ni de la vue." },
          { text: "Une affiche densément rédigée avec l'ensemble des recommandations officielles.", correct: false, feedback: "Séduisant : citer toutes les recommandations rend l'affiche irréprochable sur le plan scientifique. Mais un texte dense ne sera pas lu par des personnes qui lisent difficilement." },
          { text: "Un document uniquement textuel, posé sur chaque table de la salle commune.", correct: false, feedback: "Séduisant : un document posé sur chaque table est pratique et peut être consulté à son rythme. Mais sans image, le geste à reproduire reste abstrait pour le groupe." },
          { text: "Le visuel de la salle d'attente, pour garder une unité graphique au centre.", correct: false, feedback: "Séduisant : l'unité graphique rassure et facilite le repérage dans le centre. Mais reprendre un visuel conçu pour une autre salle ignore les besoins que tu as observés." }
        ] },
      {
        q: "La responsable veut l'affiche pour demain. Comment vérifies-tu qu'elle fonctionnera ?",
        choices: [
          { text: "Faire lire le projet à deux personnes du groupe et ajuster avant l'impression.", correct: true, feedback: "Juste : tester le support auprès du public est la première étape de l'évaluation. Le délai court pousse à imprimer tout de suite, mais deux minutes de vérification évitent une affiche incompréhensible." },
          { text: "Valider le projet seul, la responsable ayant déjà donné son accord de principe.", correct: false, feedback: "Séduisant : l'accord de la responsable t'autorise à avancer sans autre étape. Mais son aval porte sur le principe, pas sur la lisibilité réelle pour les personnes concernées." },
          { text: "Imprimer d'abord, puis corriger lors d'une prochaine réunion du centre.", correct: false, feedback: "Séduisant : imprimer maintenant respecte l'échéance et permet de réagir plus tard. Mais une affiche diffusée mal lue restera en place longtemps avant d'être corrigée." },
          { text: "Demander à l'infirmier de relire le texte médical avant l'impression.", correct: false, feedback: "Séduisant : l'avis infirmier sécurise le contenu sanitaire et évite une erreur. Mais il ne dit rien de la lisibilité, qui est précisément la difficulté du groupe." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'échéance imposée par la responsable et l'adaptation au public. Point fort : tu as intégré les gants et la lisibilité dès la conception. À retravailler : la vérification du support avant diffusion."
  },
  {
    id: "S74", bloc: "B4", annee: "T", contexte: "structure", duree: "20 min", difficulte: 2,
    competences: ["C4.3"],
    titre: "Bilan d'une prévention des chutes entre chiffres et terrain",
    description: "Tu évalues la campagne de prévention des chutes menée le mois dernier. Les chiffres montrent une baisse, mais l'aide-soignante qui a animé les ateliers affirme que les résidents ont surtout retenu le jeu, pas les consignes. La direction attend un bilan positif pour le rapport qualité.",
    hints: ["Croise les indicateurs avec le vécu des équipes.","Distingue ce qui est mesuré de ce qui est observé.","Propose une suite qui ne masque pas les limites."],
    variantes: [
      { titre: "Variante — les chiffres sont inverses", description: "Les chutes ont augmenté malgré les ateliers, et l'animatrice affirme au contraire que les consignes ont été comprises. La direction demande d'attendre le prochain trimestre avant de conclure." },
      { titre: "Variante — le questionnaire est incomplet", description: "Seuls huit résidents sur vingt ont répondu au questionnaire de satisfaction. Ceux qui ont le plus participé aux ateliers sont justement ceux qui n'ont pas répondu." }
    ],
    steps: [
      {
        q: "Les chiffres baissent mais l'animatrice doute. Quelle est ta première démarche ?",
        choices: [
          { text: "Confronter les données aux observations de l'équipe et aux retours des résidents.", correct: true, feedback: "Juste : évaluer une action croise les indicateurs et les retours de terrain. S'appuyer sur le seul chiffre est tentant, mais il ne dit pas ce que les personnes ont compris." },
          { text: "Valider la baisse des chutes comme preuve suffisante de l'efficacité de l'action.", correct: false, feedback: "Séduisant : une baisse des chutes est un résultat concret qui rassure la direction. Mais elle peut venir d'autres mesures et ne prouve pas l'effet de l'éducation à la santé." },
          { text: "Demander à l'animatrice de refaire les ateliers avant tout bilan chiffré.", correct: false, feedback: "Séduisant : refaire les ateliers semble corriger le tir et retarder un bilan discutable. Mais sans analyse, tu reprendrais le même format sans savoir ce qui a coincé." },
          { text: "Écarter son avis, les indicateurs étant plus fiables qu'un ressenti personnel.", correct: false, feedback: "Séduisant : les indicateurs sont objectifs et faciles à présenter en réunion. Mais écarter le retour de terrain prive l'évaluation de l'expérience de celles qui ont animé." }
        ] },
      {
        q: "La direction attend un bilan positif. Comment le présentes-tu ?",
        choices: [
          { text: "La baisse observée, le doute de l'équipe et une piste d'amélioration à court terme.", correct: true, feedback: "Juste : une évaluation honnête met en regard les résultats et les limites. Plaire à la direction est tentant, mais masquer le doute empêche d'adapter l'action." },
          { text: "Un bilan uniquement chiffré, en omettant les réserves exprimées par l'animatrice.", correct: false, feedback: "Séduisant : un bilan chiffré est clair et correspond à ce que la direction a demandé. Mais taire les réserves de l'équipe donne une image trompeuse de l'action menée." },
          { text: "Une conclusion critique, en présentant l'action comme un échec malgré les chiffres.", correct: false, feedback: "Séduisant : dire franchement que le message n'est pas passé montre ton exigence. Mais qualifier l'action d'échec ignore la baisse réelle et décourage les équipes." },
          { text: "Le rapport de la direction tel quel, en le signant sans le relire.", correct: false, feedback: "Séduisant : reprendre le rapport validé fait gagner du temps et respecte la hiérarchie. Mais le signer sans lecture te rend responsable d'affirmations que tu n'as pas vérifiées." }
        ] },
      {
        q: "Que proposes-tu pour la suite de l'action ?",
        choices: [
          { text: "Un rappel court sur le terrain, avec une vérification des consignes retenues.", correct: true, feedback: "Juste : mettre en œuvre et évaluer suppose d'ajuster au plus près du public. Refaire une grande campagne est plus visible, mais un rappel ciblé répond au doute observé." },
          { text: "Une nouvelle campagne complète, avec les mêmes supports et le même rythme.", correct: false, feedback: "Séduisant : reconduire l'action rassure et occupe l'équipe dans l'urgence. Mais sans changement de support, tu reproduiras la même confusion entre jeu et consignes." },
          { text: "L'arrêt de l'action, puisque les résidents n'ont retenu que le jeu.", correct: false, feedback: "Séduisant : arrêter une action qui ne semble pas comprise évite de dépenser pour rien. Mais la baisse des chutes existe : supprimer l'action ferait perdre un repère utile." },
          { text: "La diffusion du rapport à toutes les familles, sans attendre les ajustements.", correct: false, feedback: "Séduisant : informer les familles valorise la démarche et répond à la transparence. Mais diffuser un bilan non ajusté expose l'établissement avant les corrections nécessaires." }
        ] }
    ],
    bilan: "Tu as arbitré entre un bilan flatteur attendu par la direction et l'analyse critique du terrain. Point fort : tu as associé les chiffres aux retours de l'équipe. À retravailler : la formulation d'une suite réaliste et mesurable."
  },
  {
    id: "S75", bloc: "B1", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C1.1","C1.2"],
    titre: "Accueil de M. Lambert : la fille répond à sa place",
    description: "M. Lambert arrive ce matin en EHPAD. Sa fille, pressée, répond à sa place et explique qu'il « n'aime pas qu'on l'appelle par son prénom ». Lui regarde la fenêtre sans rien dire, et l'agent d'accueil t'invite à installer son sac vite, avant le déjeuner.",
    hints: ["Laisse la personne parler avant de répondre à la famille.","Reformule pour vérifier ce qu'elle souhaite vraiment.","Transmets les préférences observées sans les inventer."],
    variantes: [
      { titre: "Variante — le fils contredit sa sœur", description: "Le fils arrive après la fille et affirme que leur père préfère au contraire qu'on l'appelle par son prénom. M. Lambert ne réagit pas et le déjeuner est servi dans cinq minutes." },
      { titre: "Variante — la fille repart aussitôt", description: "La fille doit partir immédiatement et te dit « demandez-lui, de toute façon il ne répond jamais ». M. Lambert serre son sac contre lui quand elle franchit la porte." }
    ],
    steps: [
      {
        q: "La fille répond à la place de son père. Quelle est ta première action ?",
        choices: [
          { text: "Te tourner vers M. Lambert et l'inviter à confirmer lui-même ses préférences.", correct: true, feedback: "Juste : accueillir la personne, c'est s'adresser d'abord à elle, même quand la famille est pressée. Noter la consigne est rapide, mais elle peut ne pas refléter ce que M. Lambert veut." },
          { text: "Noter la consigne de la fille comme préférence officielle dans le dossier.", correct: false, feedback: "Séduisant : la fille accompagne son père depuis longtemps et sa parole paraît fiable. Mais une préférence enregistrée sans accord de la personne s'imposera à toute l'équipe." },
          { text: "Demander à l'agent d'accueil de trancher, il connaît les habitudes de l'établissement.", correct: false, feedback: "Séduisant : l'agent d'accueil connaît les usages et peut éviter une erreur de protocole. Mais son avis porte sur l'établissement, pas sur le souhait intime de M. Lambert." },
          { text: "Enchaîner l'installation du sac pour ne pas retarder le déjeuner de l'étage.", correct: false, feedback: "Séduisant : installer vite fluidifie l'accueil et respecte l'horaire du repas. Mais installer sans cette vérification commence la relation sur un malentendu qui durera." }
        ] },
      {
        q: "M. Lambert murmure qu'il préfère qu'on l'appelle « Monsieur Lambert ». Que fais-tu ?",
        choices: [
          { text: "Reformuler ce qu'il vient de dire et demander à la fille de confirmer avec lui.", correct: true, feedback: "Juste : reformuler vérifie la compréhension et associe la famille sans la discréditer. Corriger la fille est tentant, mais le lien avec elle reste nécessaire pour la suite." },
          { text: "Répondre à la fille que son instruction était erronée, pour clarifier les rôles.", correct: false, feedback: "Séduisant : rectifier publiquement rétablit la parole du résident et ta posture. Mais dire à la fille qu'elle s'est trompée la met sur la défensive et complique l'accueil." },
          { text: "Choisir le prénom, plus chaleureux, pour créer un contact immédiat avec lui.", correct: false, feedback: "Séduisant : le prénom crée une proximité qui rassure souvent les personnes âgées. Mais ici la personne a précisément demandé l'inverse : l'intention ne suffit pas." },
          { text: "Noter les deux versions dans le dossier et laisser l'équipe choisir plus tard.", correct: false, feedback: "Séduisant : conserver les deux versions paraît prudent et évite un choix arbitraire. Mais une consigne ambiguë sera interprétée différemment par chaque agent." }
        ] },
      {
        q: "Que transmets-tu à l'équipe après cet accueil ?",
        choices: [
          { text: "La préférence confirmée par M. Lambert et le rôle de sa fille dans l'échange.", correct: true, feedback: "Juste : transmettre ce qui a été validé par la personne évite les rumeurs. Noter le comportement de la famille est plus tentant, mais c'est un jugement, pas une donnée de suivi." },
          { text: "Le seul horaire d'arrivée et le numéro de chambre, nécessaires au service.", correct: false, feedback: "Séduisant : l'horaire et la chambre sont des repères utiles pour le service. Mais ils ne disent rien des souhaits de la personne, qui font l'objet de l'accueil." },
          { text: "Une description de la tenue et du ton de la fille, jugée révélatrice.", correct: false, feedback: "Séduisant : le ton de la fille peut aider à comprendre la dynamique familiale. Mais une impression personnelle n'a pas sa place dans une transmission factuelle." },
          { text: "L'avis de l'agent d'accueil sur la personnalité de M. Lambert, sans le vérifier.", correct: false, feedback: "Séduisant : l'agent d'accueil a vu arriver M. Lambert et son avis semble expérimenté. Mais le relayer sans vérification transforme une hypothèse en étiquette." }
        ] }
    ],
    bilan: "Tu as arbitré entre la parole de la fille, pressée, et celle de M. Lambert, silencieux. Point fort : tu as demandé confirmation sans discréditer la famille. À retravailler : la distinction entre observation et interprétation dans la transmission."
  },
  {
    id: "S76", bloc: "B1", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C1.1","C1.4"],
    titre: "Atelier de cuisine : accompagner une personne anxieuse",
    description: "Au centre de jour, Mme Normand, 82 ans, serre son sac et refuse de participer à l'atelier de cuisine, disant qu'elle « ne sait plus rien faire ». L'éducatrice propose de l'inscrire malgré tout pour « la sortir de chez elle » ; pendant que tu prépares le matériel, elle ajoute que le groupe commence dans dix minutes.",
    hints: ["Entends le refus avant de proposer une activité.","Adapte la tâche au lieu d'insister sur le groupe.","Observe ce qu'elle fait réellement pour ajuster."],
    variantes: [
      { titre: "Variante — l'atelier est déjà complet", description: "Le groupe prévoit six participants et une place seulement reste libre. Mme Normand hésite, tandis qu'une autre personne insiste pour prendre cette dernière place." },
      { titre: "Variante — la famille pousse aussi", description: "Le petit-fils de Mme Normand est venu l'accompagner et dit qu'il faut « la forcer un peu ». L'éducatrice renchérit en rappelant que l'atelier est inscrit au projet de la personne." }
    ],
    steps: [
      {
        q: "Mme Normand dit qu'elle ne sait plus rien faire. Quelle est ta première réaction ?",
        choices: [
          { text: "L'écouter sans la contredire, puis chercher avec elle une tâche à sa portée.", correct: true, feedback: "Juste : une posture professionnelle accueille le ressenti avant de construire une activité d'autonomie. La rassurer par dénégation est tentant, mais son vécu doit être entendu." },
          { text: "Lui assurer qu'elle sait encore très bien faire, pour la rassurer rapidement.", correct: false, feedback: "Séduisant : un compliment immédiat peut redonner confiance et éviter une plainte. Mais nier ce qu'elle dit sans l'écouter lui donne le sentiment de ne pas être crue." },
          { text: "Suivre l'avis de l'éducatrice et l'inscrire au groupe pour la stimuler.", correct: false, feedback: "Séduisant : l'éducatrice connaît le groupe et l'inscrire lutte contre le repli. Mais une participation imposée peut renforcer l'anxiété au lieu de maintenir l'autonomie." },
          { text: "Lui proposer de regarder l'atelier sans y participer, en attendant qu'elle change d'avis.", correct: false, feedback: "Séduisant : rester simple spectatrice respecte son rythme et garde la porte ouverte. Mais sans tâche adaptée, elle risque de confirmer l'idée qu'elle n'est plus capable." }
        ] },
      {
        q: "Le groupe commence dans dix minutes. Comment adaptes-tu l'activité ?",
        choices: [
          { text: "Lui confier une préparation simple et mesurable, à son rythme, près du groupe.", correct: true, feedback: "Juste : concevoir une activité de maintien de l'autonomie revient à fractionner la tâche. L'inscrire au groupe est plus simple, mais un geste réussi vaut mieux qu'une présence passive." },
          { text: "Lui demander de rejoindre le groupe complet, en l'aidant uniquement à s'installer.", correct: false, feedback: "Séduisant : l'intégrer au groupe entier respecte le projet de l'éducatrice et le calendrier. Mais sans tâche à sa mesure, elle se comparera aux autres et se taira." },
          { text: "Reporter l'atelier pour elle seule, quitte à faire attendre les autres participants.", correct: false, feedback: "Séduisant : un atelier individuel lui évite le regard des autres et respecte son anxiété. Mais faire attendre tout le groupe n'est pas tenable et l'isole un peu plus." },
          { text: "Choisir à sa place la tâche la plus facile, sans lui expliquer le but de l'atelier.", correct: false, feedback: "Séduisant : choisir une tâche simple va dans son sens et évite une discussion longue. Mais sans expliquer le but, la réussite reste incompréhensible pour elle." }
        ] },
      {
        q: "Après l'atelier, que notes-tu dans le suivi de Mme Normand ?",
        choices: [
          { text: "Le geste réellement réalisé, son degré d'aide et sa réaction après l'activité.", correct: true, feedback: "Juste : évaluer une activité suppose de décrire précisément ce que la personne a fait. L'ambiance du groupe est agréable à noter, mais elle ne mesure pas son autonomie." },
          { text: "Le nombre de participants présents et le menu préparé pendant la séance.", correct: false, feedback: "Séduisant : ces éléments comptent pour le bilan de l'atelier et sont faciles à renseigner. Mais ils ne disent rien de la progression de Mme Normand." },
          { text: "L'impression générale de l'éducatrice sur l'ambiance du groupe ce matin.", correct: false, feedback: "Séduisant : le regard de l'éducatrice est utile et elle a animé la séance. Mais une impression collective ne remplace pas l'observation individuelle de la personne." },
          { text: "La conclusion qu'elle ne souhaite plus participer aux ateliers du centre.", correct: false, feedback: "Séduisant : son refus initial peut laisser penser qu'elle arrête les ateliers. Mais un geste réussi contredit cette conclusion et l'inscrire comme décision serait prématuré." }
        ] }
    ],
    bilan: "Tu as arbitré entre la pression du groupe et le rythme de Mme Normand. Point fort : tu as trouvé une tâche adaptée sans la forcer. À retravailler : la description fine de l'aide apportée dans le suivi."
  },
  {
    id: "S77", bloc: "B1", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C1.2","C1.3"],
    titre: "Atelier mémoire : l'opposition de la fille de M. Daniel",
    description: "Tu animes un atelier mémoire avec six résidents. La fille de M. Daniel s'oppose à ce qu'il participe : « il se fatigue, et puis il ne reconnaît plus personne, à quoi bon ? » L'ergothérapeute, présente, pense au contraire que l'atelier entretient ses repères. L'emploi du temps impose de commencer dans cinq minutes.",
    hints: ["Écoute la famille sans abandonner le projet de la personne.","Appuie-toi sur l'avis de l'équipe pluriprofessionnelle.","Propose une participation souple et évaluée."],
    variantes: [
      { titre: "Variante — la fille est venue avec le dossier", description: "La fille de M. Daniel présente un compte rendu médical récent mentionnant une fatigue accrue. L'ergothérapeute conteste l'interprétation qu'elle en donne et le groupe attend." },
      { titre: "Variante — M. Daniel refuse ce matin", description: "Au dernier moment, M. Daniel dit qu'il ne veut pas venir à l'atelier. Sa fille triomphe, tandis que l'ergothérapeute suggère de l'accompagner quelques minutes seulement pour tester." }
    ],
    steps: [
      {
        q: "La fille s'oppose à la participation de son père. Quelle est ta première action ?",
        choices: [
          { text: "Écouter sa crainte et rappeler que le projet individualisé guide l'atelier.", correct: true, feedback: "Juste : communiquer avec la famille ne signifie pas lui transférer la décision ; le projet individualisé construit avec l'équipe reste le cadre. Son inquiétude mérite pourtant d'être entendue." },
          { text: "Céder immédiatement et retirer M. Daniel de l'atelier avant le début.", correct: false, feedback: "Séduisant : retirer M. Daniel apaise la famille et simplifie le démarrage. Mais priver la personne d'un atelier inscrit à son projet pour éviter un échange est un renoncement." },
          { text: "Répondre à la fille que l'équipe a décidé, sans autres explications.", correct: false, feedback: "Séduisant : invoquer la décision collective est rapide et évite un débat devant les autres. Mais une consigne sans explication laisse la famille avec son inquiétude intacte." },
          { text: "Demander à l'ergothérapeute de convaincre la famille à ta place.", correct: false, feedback: "Séduisant : l'ergothérapeute a l'habitude de ces échanges et sait argumenter. Mais lui confier ce rôle te dispense de construire toi-même ce lien avec la famille." }
        ] },
      {
        q: "L'ergothérapeute maintient son avis. Comment construisez-vous la participation ?",
        choices: [
          { text: "Prévoir une présence courte et observée, avec une sortie possible à tout moment.", correct: true, feedback: "Juste : le projet individualisé s'ajuste avec l'équipe pluriprofessionnelle. Une présence souple est moins confortable à organiser qu'une règle unique, mais elle respecte la fatigue et le suivi." },
          { text: "Imposer la séance complète pour montrer que la famille a tort de s'inquiéter.", correct: false, feedback: "Séduisant : tenir la séance entière affirme la compétence de l'équipe et rassure. Mais imposer une durée ignore la fatigue invoquée et transforme l'atelier en épreuve." },
          { text: "Annuler l'atelier pour tout le groupe afin de ne pas créer de précédent.", correct: false, feedback: "Séduisant : annuler évite le conflit et protège le groupe d'une tension visible. Mais priver cinq autres résidents d'un atelier prévu est une réponse disproportionnée." },
          { text: "Laisser M. Daniel décider seul, sans en référer à l'équipe ni à sa fille.", correct: false, feedback: "Séduisant : respecter le choix de M. Daniel paraît respectueux de son autonomie. Mais sans accord de l'équipe ni information de la famille, tu le laisses seul face aux conséquences." }
        ] },
      {
        q: "À la fin de l'atelier, que prévois-tu avec l'équipe ?",
        choices: [
          { text: "Un point sur les réactions observées et une réévaluation du projet avec l'ergothérapeute.", correct: true, feedback: "Juste : évaluer et faire évoluer le projet individualisé se fait en équipe. Classer l'incident comme « réglé » est tentant, mais les réactions observées doivent nourrir la suite." },
          { text: "Un compte rendu pour la direction, en signalant l'opposition de la fille.", correct: false, feedback: "Séduisant : informer la direction montre la traçabilité et protège l'établissement. Mais signaler l'opposition sans les observations ne donne aucun élément pour réévaluer." },
          { text: "Une notification à la famille disant que tout s'est bien passé, sans détail.", correct: false, feedback: "Séduisant : rassurer la famille clôt l'échange et évite de nouvelles objections. Mais sans détail sur les réactions, tu ne lui donnes aucune prise pour comprendre." },
          { text: "Le maintien automatique de la même participation aux prochaines séances.", correct: false, feedback: "Séduisant : reconduire la même formule garantit la continuité et fait gagner du temps. Mais sans réévaluation, tu ignores ce que l'atelier a réellement apporté ce jour." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'opposition de la fille et le projet individualisé porté par l'équipe. Point fort : tu as proposé une participation souple et observée. À retravailler : la réévaluation partagée du projet après l'atelier."
  },
  {
    id: "S78", bloc: "B1", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C1.1","C1.2","C1.4"],
    titre: "Conflit entre deux résidentes avant l'atelier",
    description: "À 10 heures, Mme Bertin, 82 ans, reste dans sa chambre : la veille, Mme Rolland lui a pris son fauteuil près de la fenêtre. Sa fille, au téléphone, exige que sa mère reprenne le dessus et rejoigne l'atelier.",
    hints: ["L'accueil vient avant l'activité.","Reformuler vaut mieux que convaincre.","Une tension se transmet à l'équipe."],
    variantes: [
      { titre: "Variante — la fille arrive sur place", description: "La fille arrive à 10 h 15 et interpelle directement Mme Rolland dans le salon : l'arbitrage doit se faire devant les deux résidentes." },
      { titre: "Variante — conflit autour du goûter", description: "Le désaccord porte sur la dernière part de gâteau : même tension, mais la collègue propose de trancher à pile ou face." }
    ],
    steps: [
      {
        q: "Mme Bertin boude dans sa chambre et sa fille s'impatiente : quelle est ta première action ?",
        choices: [
          { text: "M'approcher, me présenter et observer son état avant d'aborder l'atelier.", correct: true, feedback: "Juste : la posture professionnelle et l'observation priment sur l'activité. La fille pressait, mais l'accueil restait la première marche." },
          { text: "Rassurer la fille en promettant que sa mère rejoindra vite le groupe.", correct: false, feedback: "Séduisant : cela calme la famille immédiatement. Mais tu prends un engagement à la place de Mme Bertin, qui n'a rien décidé." },
          { text: "Installer Mme Bertin au centre du salon pour qu'elle se sociabilise.", correct: false, feedback: "Séduisant : l'atelier est un vrai levier d'autonomie. Mais l'imposer maintenant ignore sa colère et risque de la braquer." },
          { text: "Demander à l'infirmier de décider si elle doit participer ou non.", correct: false, feedback: "Séduisant : l'avis soignant est légitime. Mais rien n'indique un problème de santé ici, et tu délègues un simple accueil." }
        ] },
      {
        q: "Mme Bertin murmure qu'elle a perdu sa place : comment réponds-tu ?",
        choices: [
          { text: "Écouter, reformuler sa peur et valider son ressenti sans la contredire.", correct: true, feedback: "Juste : l'écoute active et la reformule restaurent sa dignité. Minimiser aurait été plus simple, mais aurait coupé la parole." },
          { text: "Minimiser : ce n'est qu'un fauteuil, elle en retrouvera un autre demain.", correct: false, feedback: "Séduisant : la relative bénignité du fait peut rassurer. Mais elle disqualifie une blessure réelle et referme l'échange." },
          { text: "Lancer tout de suite l'atelier pour lui changer les idées au plus vite.", correct: false, feedback: "Séduisant : l'action détourne l'attention de la tristesse. Mais sans reformulation, le conflit reste entier et ressurgira." },
          { text: "Demander à sa fille de lui expliquer qu'elle doit se raisonner.", correct: false, feedback: "Séduisant : la famille connaît ses habitudes et sait la remotiver. Mais déléguer l'écoute à la fille renforce le conflit." }
        ] },
      {
        q: "L'atelier commence sans Mme Bertin : que transmets-tu à l'équipe ?",
        choices: [
          { text: "Le conflit, l'échange avec la fille et l'activité proposée plus tard.", correct: true, feedback: "Juste : une transmission complète éclaire la relève. Le risque était de ne garder que le déroulé de l'atelier." },
          { text: "Un simple mot : elle a préféré rester seule ce matin, rien de plus.", correct: false, feedback: "Séduisant : c'est bref et cela évite de commenter la famille. Mais la cause du retrait disparaît et l'équipe repassera à côté." },
          { text: "La version de la fille uniquement, pour ne pas surcharger le dossier.", correct: false, feedback: "Séduisant : un récit unique fait gagner du temps à la relève. Mais il efface la parole de Mme Bertin, qui est la personne concernée." },
          { text: "Une demande de sanction pour Mme Rolland, responsable de la dispute.", correct: false, feedback: "Séduisant : nommer un responsable donne l'illusion de régler le problème. Mais une sanction judiciaire n'a rien à faire dans un dossier d'accompagnement." }
        ] }
    ],
    bilan: "Tu as arbitré entre la pression de la famille et le respect du rythme de Mme Bertin. Point fort : ton écoute a restauré sa dignité. À retravailler : anticiper les frictions autour des places."
  },
  {
    id: "S79", bloc: "B1", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C1.1","C1.2"],
    titre: "Accompagner un résident en deuil",
    description: "M. Lefèvre, 88 ans, a perdu son épouse hier. Il refuse de voir sa fille arrivée ce matin et reste prostré. L'infirmier doit partir en visite dans dix minutes.",
    hints: ["La présence précède les mots.","Ne pas corriger le chagrin.","Un refus se transmet aussi."],
    variantes: [
      { titre: "Variante — la fille veut forcer la porte", description: "La fille pousse la porte et veut secouer son père : tu dois protéger son temps de silence sans la braquer." },
      { titre: "Variante — annonce différée", description: "Le décès n'a pas encore été annoncé à la famille, qui appelle toutes les heures : information manquante et urgence." }
    ],
    steps: [
      {
        q: "M. Lefèvre reste assis, silencieux : quelle est ta première action ?",
        choices: [
          { text: "Rester à côté de lui, me présenter et respecter son silence.", correct: true, feedback: "Juste : une présence discrète est une vraie posture professionnelle. Lancer la conversation aurait été plus facile, mais intrusif." },
          { text: "Ouvrir la fenêtre et lancer une conversation sur le temps.", correct: false, feedback: "Séduisant : changer de sujet détend souvent l'atmosphère. Mais ici cela revient à éviter la peine qu'il exprime sans mots." },
          { text: "Appeler sa fille pour qu'elle vienne le consoler immédiatement.", correct: false, feedback: "Séduisant : la famille est un soutien précieux. Mais il vient justement de refuser sa visite, et tu passerais outre ce refus." },
          { text: "Proposer un jeu de société pour lui changer les idées.", correct: false, feedback: "Séduisant : l'activité est un réflexe d'accompagnement. Mais imposée sur un deuil frais, elle nie son besoin de silence." }
        ] },
      {
        q: "Il dit qu'elle lui manque et qu'il n'a plus rien à faire ici : que fais-tu ?",
        choices: [
          { text: "Écouter, reformuler sa peine et rester présent sans la réfuter.", correct: true, feedback: "Juste : la reformule accueille le chagrin sans le discuter. Le réflexe de consoler à tout prix aurait été tentant." },
          { text: "Répondre qu'il aura vite d'autres occupations dans le service.", correct: false, feedback: "Séduisant : montrer des perspectives peut redonner espoir. Mais dit maintenant, cela sonne comme un déni de sa perte." },
          { text: "Lui expliquer que sa fille a aussi besoin de lui, pour le responsabiliser.", correct: false, feedback: "Séduisant : se sentir utile peut aider. Mais charger un homme en deuil de consoler les autres déplace le problème." },
          { text: "Lui suggérer de ne garder que ses souvenirs heureux.", correct: false, feedback: "Séduisant : les souvenirs heureux sont une ressource. Mais trier ses émotions à sa place revient à interdire la tristesse." }
        ] },
      {
        q: "À la relève, que transmets-tu de ce moment ?",
        choices: [
          { text: "Son refus de voir sa fille, ses paroles et l'attitude adoptée.", correct: true, feedback: "Juste : transmettre le refus et le ressenti évite une nouvelle intrusion. L'émotion fait partie de l'observation." },
          { text: "Qu'il va mieux depuis que tu es restée à ses côtés.", correct: false, feedback: "Séduisant : ta présence a apaisé le moment. Mais conclure qu'il va mieux est une interprétation optimiste et non vérifiable." },
          { text: "La demande de la fille, sans mentionner le refus de son père.", correct: false, feedback: "Séduisant : noter la demande évite d'écrire un refus douloureux. Mais l'équipe risque alors d'envoyer la fille quand même." },
          { text: "Un avis personnel sur la façon dont la famille aurait dû agir.", correct: false, feedback: "Séduisant : le jugement peut soulager après une scène tendue. Mais un avis personnel n'a pas sa place dans un dossier de suivi." }
        ] }
    ],
    bilan: "Tu as arbitré entre consoler et respecter le silence de M. Lefèvre. Point fort : ta présence sans paroles l'a sécurisé. À retravailler : transmettre le refus sans le commenter."
  },
  {
    id: "S80", bloc: "B1", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C1.1","C1.4"],
    titre: "Entretien avec la famille contre l'avis de la résidente",
    description: "Mme Caron, 79 ans, a clairement dit vouloir rester chez elle, mais sa fille a déjà visité un EHPAD et presse l'équipe de trancher. Le cadre demande un compte rendu avant 17 heures.",
    hints: ["La parole de la personne prime.","L'équipe décide ensemble.","Écrire n'est pas décider à sa place."],
    variantes: [
      { titre: "Variante — la fille menace de saisir la justice", description: "La fille évoque un recours juridique si sa mère n'est pas placée : la tension monte et le cadre presse pour une réponse écrite." },
      { titre: "Variante — propos contradictoires", description: "Le fils affirme le contraire de sa sœur et Mme Caron change de discours dès qu'ils sont là : information manquante." }
    ],
    steps: [
      {
        q: "La fille exige que vous tranchiez : quelle est ta première posture ?",
        choices: [
          { text: "Écouter la famille puis rappeler que la décision revient d'abord à Mme Caron.", correct: true, feedback: "Juste : écouter sans céder à la pression est une posture professionnelle. Accepter de trancher aurait semblé plus efficace." },
          { text: "Donner raison à la fille pour éviter un conflit avec la famille.", correct: false, feedback: "Séduisant : la paix sociale est précieuse dans un service. Mais le confort de l'échange ne peut effacer la volonté de la résidente." },
          { text: "Répondre que le dossier est clos et renvoyer la discussion au cadre.", correct: false, feedback: "Séduisant : se protéger derrière la hiérarchie évite une confrontation. Mais la famille repart sans réponse et le problème reste entier." },
          { text: "Promettre un placement rapide pour soulager la fille.", correct: false, feedback: "Séduisant : cela apaise une famille épuisée. Mais tu engages la structure sur une décision qui n'a pas été prise." }
        ] },
      {
        q: "Mme Caron chuchote qu'elle a peur d'être enfermée : que fais-tu ?",
        choices: [
          { text: "Reformuler sa peur et proposer d'en parler seule avec elle avant l'écrit.", correct: true, feedback: "Juste : sa parole est recueillie à l'abri du regard des siens. La pression du compte rendu rendait la réponse rapide tentante." },
          { text: "La rassurer en disant que sa fille décidera pour son bien.", correct: false, feedback: "Séduisant : invoquer l'intention de la famille rassure. Mais cela retire à Mme Caron un droit de décision qui lui appartient." },
          { text: "Couper court pour ne pas la mettre en difficulté devant les siens.", correct: false, feedback: "Séduisant : préserver sa pudeur est louable. Mais sans reprise privée, sa peur ne sera jamais transmise à l'équipe." },
          { text: "Noter sa phrase et passer vite à la visite de l'EHPAD.", correct: false, feedback: "Séduisant : consigner le propos donne l'impression d'avoir agi. Mais une phrase notée sans échange ne remplace pas l'écoute." }
        ] },
      {
        q: "Le compte rendu de 17 heures : que rédiges-tu ?",
        choices: [
          { text: "Les propos de chacun, le refus exprimé et une réunion pluriprofessionnelle.", correct: true, feedback: "Juste : l'écrit restitue le désaccord sans trancher et saisit l'équipe. Une conclusion hâtive aurait été plus nette mais fausse." },
          { text: "La seule conclusion attendue par la fille, pour clore le dossier.", correct: false, feedback: "Séduisant : cela satisfait le demandeur et libère du temps. Mais l'écrit devient un outil de pression contre la résidente." },
          { text: "Une recommandation personnelle de placement, argumentée et ferme.", correct: false, feedback: "Séduisant : un avis clair peut rassurer le cadre. Mais une recommandation individuelle n'engage que toi et dépasse ton rôle." },
          { text: "Le résumé de la visite, sans les paroles de Mme Caron.", correct: false, feedback: "Séduisant : décrire les faits paraît neutre et rapide. Mais omettre sa parole rend le compte rendu incomplet et trompeur." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'urgence familiale et l'autonomie de Mme Caron. Point fort : sa parole a été entendue avant l'écrit. À retravailler : impliquer l'équipe dès le désaccord."
  },
  {
    id: "S81", bloc: "B1", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C1.2","C1.3"],
    titre: "Accueillir une résidente non voyante",
    description: "Mme Perrin, 71 ans, arrive avec une déficience visuelle. Sa fille répond à toutes les questions à sa place et le projet individualisé n'est pas encore renseigné dans le dossier.",
    hints: ["S'adresser d'abord à la personne.","Observer ses repères.","Signaler le dossier incomplet."],
    variantes: [
      { titre: "Variante — déficience auditive", description: "Mme Perrin entend mal et a retiré son appareil : la fille parle très fort à sa place et l'équipe n'a pas le matériel adapté." },
      { titre: "Variante — chambre non préparée", description: "Les repères convenus ne sont pas installés dans la chambre et l'arrivée est prévue dans vingt minutes." }
    ],
    steps: [
      {
        q: "La fille répond à ta place : quelle est ta première action ?",
        choices: [
          { text: "Saluer Mme Perrin, te présenter et t'adresser directement à elle.", correct: true, feedback: "Juste : la communication s'adresse d'abord à la personne. La fille semblait vouloir aider, mais elle prenait toute la place." },
          { text: "Questionner la fille pour gagner du temps sur l'accueil.", correct: false, feedback: "Séduisant : elle connaît les habitudes de sa mère et répond vite. Mais ce raccourci installe une relation de tiers permanent." },
          { text: "Attendre le cadre pour ouvrir le dossier d'admission.", correct: false, feedback: "Séduisant : le dossier est une affaire de coordination. Mais l'accueil, lui, commence maintenant et ne peut être différé." },
          { text: "Emmener Mme Perrin dans sa chambre sans lui expliquer le trajet.", correct: false, feedback: "Séduisant : gagner du temps et éviter une longue description soulage. Mais une personne non voyante a besoin de connaître son trajet." }
        ] },
      {
        q: "Elle hésite à se lever : comment l'accompagnes-tu ?",
        choices: [
          { text: "Lui décrire le trajet et lui proposer ton bras sans le lui imposer.", correct: true, feedback: "Juste : décrire puis proposer préserve son autonomie. La tentation était de la guider sans parler, plus rapide mais moins respectueuse." },
          { text: "La guider en silence en la tenant fermement par le coude.", correct: false, feedback: "Séduisant : la prise ferme rassure et sécurise le déplacement. Mais sans description, elle reste dépendante de ton geste." },
          { text: "Demander à sa fille de la lever à ta place, elle la connaît.", correct: false, feedback: "Séduisant : la fille a des gestes éprouvés et rassure sa mère. Mais l'accompagnement revient à l'équipe, pas à la famille." },
          { text: "Attendre qu'elle se décide seule pour respecter son autonomie.", correct: false, feedback: "Séduisant : ne pas imposer est une vraie valeur. Mais l'attendre sans proposition la laisse seule face à un trajet inconnu." }
        ] },
      {
        q: "Le projet individualisé manque : que fais-tu ?",
        choices: [
          { text: "Noter les besoins observés et signaler le dossier à l'équipe pluriprofessionnelle.", correct: true, feedback: "Juste : ton observation alimente le projet sans le rédiger seule. Remplir le dossier soi-même aurait été plus commode." },
          { text: "Attendre la prochaine réunion, le dossier se remplira bien tout seul.", correct: false, feedback: "Séduisant : la réunion existe précisément pour cela. Mais les premiers jours d'admission sont ceux où les besoins se repèrent le mieux." },
          { text: "Remplir toi-même le projet à partir des dires de la fille.", correct: false, feedback: "Séduisant : la fille apporte des éléments utiles et évite d'attendre. Mais un projet écrit sans Mme Perrin perd sa valeur." },
          { text: "Demander à la famille de rédiger le projet à ta place.", correct: false, feedback: "Séduisant : la famille a une connaissance longue de la personne. Mais rédiger un projet professionnel ne peut être délégué à la famille." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'aide de la fille et la parole de Mme Perrin. Point fort : tu t'es adressé à la personne d'abord. À retravailler : repérer vite les champs du projet encore vides."
  },
  {
    id: "S82", bloc: "B1", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C1.1","C1.2","C1.4"],
    titre: "Atelier cuisine avec un résident diabétique",
    description: "L'atelier pâtisserie démarre, mais il ne reste que quatre tabliers pour six participants et M. Nour, diabétique, veut goûter le gâteau avant la fin. La collègue veut distribuer sans attendre.",
    hints: ["Adapter l'activité, pas l'imposer.","Vérifier avant de servir.","Un imprévu se transmet."],
    variantes: [
      { titre: "Variante — four en panne", description: "Le four tombe en panne à mi-parcours : l'atelier doit être réorienté avec les ingrédients déjà préparés." },
      { titre: "Variante — allergie oubliée", description: "Une résidente signale une allergie non notée sur la liste : la collègue a déjà commencé à répartir les parts." }
    ],
    steps: [
      {
        q: "Il manque deux tabliers : que fais-tu en premier ?",
        choices: [
          { text: "Réorganiser les postes pour que chacun participe avec les tabliers disponibles.", correct: true, feedback: "Juste : l'activité est adaptée pour que tous restent inclus. Interrompre le groupe aurait été le réflexe le plus simple." },
          { text: "Commencer sans tabliers, la pâte se prépare très vite.", correct: false, feedback: "Séduisant : le temps est court et la manipulation reste courte. Mais faire l'impasse sur la protection expose inutilement les participants." },
          { text: "Renvoyer deux participants en chambre le temps de l'atelier.", correct: false, feedback: "Séduisant : cela résout le problème de matériel en un geste. Mais exclure deux personnes d'un atelier d'autonomie est contre-productif." },
          { text: "Interrompre l'atelier jusqu'à ce que la collègue retrouve les tabliers.", correct: false, feedback: "Séduisant : attendre le matériel complet paraît plus sûr. Mais le groupe reste oisif et l'élan de l'activité se perd." }
        ] },
      {
        q: "M. Nour veut goûter maintenant : que réponds-tu ?",
        choices: [
          { text: "Vérifier son régime et lui proposer une part adaptée à son besoin.", correct: true, feedback: "Juste : le régime est vérifié avant de servir, tout en incluant la personne. Donner une part normale aurait été plus rapide." },
          { text: "Lui dire d'attendre la fin comme tout le monde, sans vérifier.", correct: false, feedback: "Séduisant : l'égalité de traitement est une règle claire. Mais ici elle empêche d'adapter un régime qui doit être respecté." },
          { text: "Lui donner une part normale pour ne pas le frustrer devant les autres.", correct: false, feedback: "Séduisant : éviter une remarque publique préserve sa dignité. Mais son régime existe justement pour protéger sa santé." },
          { text: "Demander à la collègue de trancher à sa place, elle connaît le dossier.", correct: false, feedback: "Séduisant : la collègue a l'habitude de ce groupe. Mais se décharger de la vérification retarde la réponse et déplace la responsabilité." }
        ] },
      {
        q: "Après l'atelier, que transmets-tu ?",
        choices: [
          { text: "La participation de chacun, l'ajustement du goûter et le manque de tabliers.", correct: true, feedback: "Juste : la transmission couvre l'activité et les incidents utiles à la suite. Un résumé flatteur aurait masqué les ajustements." },
          { text: "Que l'atelier s'est bien passé, sans détail sur les imprévus.", correct: false, feedback: "Séduisant : une phrase positive clôt vite le dossier. Mais le manque de matériel se reproduira si personne ne le consigne." },
          { text: "La liste des parts distribuées, sans préciser les adaptations.", correct: false, feedback: "Séduisant : la liste est une trace précise et rapide à écrire. Mais sans les adaptations, elle ne reflète pas les besoins réels." },
          { text: "Une plainte sur le manque de matériel, sans parler des participants.", correct: false, feedback: "Séduisant : signaler le problème aide la direction à réagir. Mais un dossier d'activité doit d'abord dire ce qu'ont vécu les résidents." }
        ] }
    ],
    bilan: "Tu as arbitré entre le rythme de l'atelier et l'adaptation aux besoins. Point fort : M. Nour a été inclus sans oublier son régime. À retravailler : anticiper le matériel avant de commencer."
  },
  {
    id: "S83", bloc: "B1", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C1.1","C1.2"],
    titre: "Réévaluer un projet individualisé contesté",
    description: "Mme Dufour, 84 ans, veut arrêter la gymnastique douce inscrite à son projet, jugée trop lente. Le cadre rappelle que le projet est validé et qu'il faut s'y tenir. Aucun compte rendu récent n'explique ce revirement.",
    hints: ["Le projet se réévalue avec la personne.","Chercher la cause du refus.","L'équipe se réunit."],
    variantes: [
      { titre: "Variante — la fille s'oppose", description: "La fille de Mme Dufour s'oppose à l'arrêt de l'activité et accuse l'équipe de laisser sa mère renoncer à tout." },
      { titre: "Variante — douleur non dite", description: "Mme Dufour a mal aux épaules depuis trois jours mais ne l'a signalé à personne : l'information manque." }
    ],
    steps: [
      {
        q: "Le cadre veut maintenir l'activité : quelle est ta première action ?",
        choices: [
          { text: "Écouter Mme Dufour et demander ce qui la gêne avant toute décision.", correct: true, feedback: "Juste : le projet se réévalue avec la personne concernée. Obéir au cadre aurait été plus simple mais aurait ignoré un changement réel." },
          { text: "Appliquer le projet validé sans discussion, par discipline.", correct: false, feedback: "Séduisant : respecter un document validé est une règle solide. Mais un projet individualisé doit suivre l'évolution de la personne." },
          { text: "Suivre l'avis de la fille, qui connaît sa mère depuis longtemps.", correct: false, feedback: "Séduisant : son regard est précieux et facile à obtenir. Mais elle n'a pas à décider de l'activité à la place de sa mère." },
          { text: "Proposer une activité plus rapide sans en parler à l'équipe.", correct: false, feedback: "Séduisant : adapter sur le champ répond au besoin exprimé. Mais modifier seul un projet écrit prive l'équipe de cette information." }
        ] },
      {
        q: "Elle évoque une douleur aux épaules : que fais-tu ?",
        choices: [
          { text: "Écouter, noter le symptôme et alerter l'infirmier pour une évaluation.", correct: true, feedback: "Juste : la douleur devient une donnée de suivi et l'avis soignant est requis. La mettre sur le compte de l'âge aurait été plus vite fait." },
          { text: "Lui dire que la douleur est normale à son âge et continuer.", correct: false, feedback: "Séduisant : rassurer permet de ne pas interrompre la séance. Mais une douleur non évaluée peut avoir une cause qu'il faut traiter." },
          { text: "Remplacer l'activité par une autre sans en informer l'équipe.", correct: false, feedback: "Séduisant : l'adapter immédiatement respecte son confort. Mais le symptôme disparaît du suivi et personne ne le reprendra." },
          { text: "Attendre la prochaine réunion, le projet sera réévalué alors.", correct: false, feedback: "Séduisant : la réunion est le lieu prévu pour cela. Mais reporter une douleur à plusieurs jours n'est pas une surveillance." }
        ] },
      {
        q: "La réunion arrive : que proposes-tu ?",
        choices: [
          { text: "Une réévaluation du projet avec la personne, l'équipe et la famille.", correct: true, feedback: "Juste : la décision est collective et partagée avec Mme Dufour. Une décision individuelle aurait été plus rapide mais fragile." },
          { text: "Le maintien strict de l'activité, tel qu'il a été signé.", correct: false, feedback: "Séduisant : le document signé donne une sécurité juridique. Mais il devient un carcan dès que la personne exprime un changement." },
          { text: "Une décision individuelle de ta part, prise avec Mme Dufour.", correct: false, feedback: "Séduisant : l'accord direct avec elle paraît respectueux. Mais le projet engage l'équipe et doit être réécrit avec elle." },
          { text: "Le report de toute décision à la prochaine évaluation trimestrielle.", correct: false, feedback: "Séduisant : ce délai cadre le travail et évite de décider dans l'urgence. Mais laisser une douleur sans suivi pendant des mois est négligent." }
        ] }
    ],
    bilan: "Tu as arbitré entre la fidélité au projet écrit et l'écoute du changement de Mme Dufour. Point fort : la douleur a été prise au sérieux. À retravailler : documenter vite les motifs de réévaluation."
  },
  {
    id: "S84", bloc: "B1", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C1.1","C1.4"],
    titre: "Médiation entre deux résidents au salon",
    description: "M. Lemoine et Mme Roy se disputent le journal et le fauteuil exposé au soleil. La collègue propose de trancher au hasard ; le groupe regarde la scène sans intervenir.",
    hints: ["Entendre les deux avant de trancher.","Le hasard n'éduque pas.","Une règle collective peut aider."],
    variantes: [
      { titre: "Variante — un tiers prend parti", description: "Un autre résident prend ouvertement le parti de Mme Roy : la médiation doit aussi gérer ce troisième participant." },
      { titre: "Variante — journal déchiré", description: "Le journal abîmé est au cœur du conflit : la collègue propose d'en acheter un autre sans en parler au groupe." }
    ],
    steps: [
      {
        q: "La collègue veut tirer au sort : que fais-tu d'abord ?",
        choices: [
          { text: "Écouter séparément chacun pour comprendre l'attachement à la place.", correct: true, feedback: "Juste : la médiation commence par l'écoute des deux parties. Le tirage au sort aurait éteint l'incident sans rien régler." },
          { text: "Tirer au sort pour trancher vite et calmer le groupe.", correct: false, feedback: "Séduisant : la méthode paraît juste et ne prend pas parti. Mais elle évite de comprendre le besoin de chacun et recommencera." },
          { text: "Donner raison à Mme Roy, qui est la plus âgée des deux.", correct: false, feedback: "Séduisant : l'âge est un critère de respect évident. Mais il ne dit rien de l'attachement de M. Lemoine à ce fauteuil." },
          { text: "Demander au groupe de voter à main levée sous tes yeux.", correct: false, feedback: "Séduisant : le vote associe tout le salon et paraît démocratique. Mais il expose les deux résidents au jugement des autres." }
        ] },
      {
        q: "M. Lemoine dit qu'il a toujours ce fauteuil : comment réponds-tu ?",
        choices: [
          { text: "Reformuler son besoin de repères et chercher une solution partagée.", correct: true, feedback: "Juste : la reformule ouvre une solution sans désavouer personne. Rappeler le règlement aurait été plus autoritaire." },
          { text: "Rappeler fermement le règlement du salon, sans discussion.", correct: false, feedback: "Séduisant : le règlement est une réponse claire et immédiate. Mais il ne prend pas en compte l'attachement réel à cette place." },
          { text: "Lui proposer de garder le fauteuil et d'ignorer Mme Roy.", correct: false, feedback: "Séduisant : donner raison au premier qui parle calme vite la scène. Mais l'autre résidente reste sans réponse devant le groupe." },
          { text: "Lui suggérer de s'en remettre à la décision de la collègue.", correct: false, feedback: "Séduisant : déléguer évite de prendre position devant les autres. Mais la collègue n'a pas entendu les deux et tranchera à l'aveugle." }
        ] },
      {
        q: "Une solution est trouvée : que transmets-tu ?",
        choices: [
          { text: "L'accord obtenu, les paroles de chacun et la règle convenue.", correct: true, feedback: "Juste : l'accord écrit permet à la relève de tenir la règle. Le simple fait de dire que le calme est revenu ne suffit pas." },
          { text: "Qu'il n'y a plus de conflit, sans préciser l'accord trouvé.", correct: false, feedback: "Séduisant : une phrase courte clôt le dossier. Mais sans la règle convenue, chacun repartira avec sa version." },
          { text: "Le seul point de vue de Mme Roy, pour éviter de rouvrir le débat.", correct: false, feedback: "Séduisant : garder une seule version évite de raviver la tension. Mais elle donne tort à M. Lemoine sans qu'il ait été entendu." },
          { text: "Une demande d'exclure M. Lemoine du salon pendant une semaine.", correct: false, feedback: "Séduisant : éloigner un résident semble garantir le calme. Mais une exclusion transforme un désaccord en sanction durable." }
        ] }
    ],
    bilan: "Tu as arbitré entre une décision rapide et l'écoute des deux résidents. Point fort : chacun a pu dire son besoin. À retravailler : transformer l'accord en règle lisible pour le groupe."
  },
  {
    id: "S85", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C2.1","C2.3"],
    titre: "Toilette et rougeur inattendue",
    description: "Pendant la toilette de Mme Simon, 86 ans, tu remarques une rougeur au talon. La collègue veut terminer comme d'habitude et Mme Simon a honte qu'on regarde son pied.",
    hints: ["Observer avant d'agir.","Le protocole guide.","Toute anomalie se transmet."],
    variantes: [
      { titre: "Variante — lit inconfortable", description: "La rougeur semble liée au drap froissé et le lit paraît trop dur : l'aide technique doit être vérifiée." },
      { titre: "Variante — refus de soin", description: "Mme Simon refuse qu'on poursuive et demande à être laissée seule : respect de son intimité et vigilance s'opposent." }
    ],
    steps: [
      {
        q: "Tu vois la rougeur : quelle est ta première action ?",
        choices: [
          { text: "Observer la zone, noter son aspect et poursuivre avec délicatesse.", correct: true, feedback: "Juste : observer avant d'agir respecte le protocole et la pudeur. Passer vite aurait été plus discret mais aurait perdu l'information." },
          { text: "Passer vite sur la zone pour ne pas gêner davantage la résidente.", correct: false, feedback: "Séduisant : préserver sa honte est une vraie préoccupation. Mais l'anomalie disparaît alors sans être décrite ni transmise." },
          { text: "Appliquer une crème personnelle sans en parler à l'équipe.", correct: false, feedback: "Séduisant : soulager immédiatement paraît bienveillant. Mais un produit non prescrit et non tracé sort du protocole de soin." },
          { text: "Demander à la collègue de décider à ta place, elle a plus d'expérience.", correct: false, feedback: "Séduisant : son expérience sécurise face à un signe inattendu. Mais l'observation te revient et ne peut être déléguée." }
        ] },
      {
        q: "La collègue veut aller plus vite : que fais-tu ?",
        choices: [
          { text: "Suivre le protocole et alerter l'infirmier avec les signes observés.", correct: true, feedback: "Juste : alerter avec des signes précis permet une évaluation. Suivre le rythme de la collègue aurait été plus fluide." },
          { text: "Accélérer pour respecter l'emploi du temps, la rougeur est bénigne.", correct: false, feedback: "Séduisant : le service a un rythme à tenir. Mais décider seul que la rougeur est bénigne n'est pas une évaluation." },
          { text: "Cacher la rougeur pour ne pas ralentir le service.", correct: false, feedback: "Séduisant : éviter une alerte préserve le déroulé de la matinée. Mais dissimuler une anomalie expose la résidente et l'équipe." },
          { text: "Demander à la famille de regarder le pied à ta place.", correct: false, feedback: "Séduisant : la famille connaît la peau de sa mère et peut rassurer. Mais une anomalie de soin relève de l'équipe soignante." }
        ] },
      {
        q: "À la fin du soin, que transmets-tu ?",
        choices: [
          { text: "L'heure, l'aspect de la rougeur, l'alerte donnée et l'état de la peau.", correct: true, feedback: "Juste : une transmission datée et précise rend l'alerte utile à la relève. Un compte rendu global aurait noyé le signe." },
          { text: "Que la toilette s'est déroulée normalement, sans mention du pied.", correct: false, feedback: "Séduisant : une phrase rassurante clôt le soin. Mais l'anomalie n'existe plus pour la suite de l'équipe." },
          { text: "La seule remarque de la collègue, sans ton observation.", correct: false, feedback: "Séduisant : rapporter le regard d'une collègue expérimentée peut rassurer. Mais ton observation directe est la plus fiable." },
          { text: "Une demande de changer de chambre, sans décrire la rougeur.", correct: false, feedback: "Séduisant : changer de lit peut sembler régler la cause. Mais sans description du signe, la décision est prise à l'aveugle." }
        ] }
    ],
    bilan: "Tu as arbitré entre la pudeur de Mme Simon et la vigilance sur sa peau. Point fort : la rougeur a été documentée. À retravailler : contrôler le lit et le drap en même temps."
  },
  {
    id: "S86", bloc: "B2", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C2.2","C2.4"],
    titre: "Constantes anormales avant le repas",
    description: "Avant le déjeuner, M. Garnier, 90 ans, a une fréquence cardiaque élevée et se dit essoufflé. La famille attend qu'on serve le repas et l'infirmier est en pause déjeuner.",
    hints: ["Observer avant de servir.","Le repas peut attendre.","Alerter et tracer."],
    variantes: [
      { titre: "Variante — plateau déjà servi", description: "Le plateau est déjà posé et la famille s'impatiente : la tension porte sur le maintien ou le report du repas." },
      { titre: "Variante — collègue pressée", description: "La collègue estime que la valeur est due à l'agitation de la visite et veut servir quand même : information manquante." }
    ],
    steps: [
      {
        q: "La famille veut qu'on serve : quelle est ta première action ?",
        choices: [
          { text: "Reprendre les constantes et observer son état avant de servir.", correct: true, feedback: "Juste : la surveillance précède le repas quand un signe apparaît. Servir pour ne pas décevoir la famille aurait été tentant." },
          { text: "Servir le repas pour ne pas faire attendre la famille.", correct: false, feedback: "Séduisant : la ponctualité du service compte pour le confort de tous. Mais un signe cardiaque mérite d'abord une vérification." },
          { text: "Demander à la famille de décider à ta place, elle le connaît.", correct: false, feedback: "Séduisant : son avis sur ses habitudes est utile. Mais surveiller l'état de santé est une responsabilité de l'équipe." },
          { text: "Donner un médicament habituel sans avis pour le calmer.", correct: false, feedback: "Séduisant : le traitement connu semble une réponse immédiate. Mais administrer sans prescription ni évaluation est hors protocole." }
        ] },
      {
        q: "La valeur reste élevée : que fais-tu ?",
        choices: [
          { text: "Alerter l'infirmier, décrire les signes et adapter l'installation.", correct: true, feedback: "Juste : l'alerte est donnée avec des éléments observables. Attendre la fin de la pause aurait retardé l'évaluation." },
          { text: "Attendre la fin de la pause, la valeur va se corriger seule.", correct: false, feedback: "Séduisant : un chiffre isolé peut se corriger. Mais l'essoufflement signalé est un signe à ne pas laisser sans suite." },
          { text: "Minimiser la gêne pour ne pas inquiéter la famille.", correct: false, feedback: "Séduisant : garder une atmosphère calme aide au repas. Mais taire un symptôme empêche toute surveillance adaptée." },
          { text: "Laisser M. Garnier se lever seul pour aller à table.", correct: false, feedback: "Séduisant : préserver son autonomie est un objectif permanent. Mais essoufflé, il a besoin d'aide et de précautions." }
        ] },
      {
        q: "Le repas est finalement différé : que transmets-tu ?",
        choices: [
          { text: "L'heure, les chiffres, l'alerte donnée et le report du repas.", correct: true, feedback: "Juste : la trace permet de comprendre pourquoi le repas a été décalé. Une note vague aurait perdu l'essentiel." },
          { text: "Qu'il a refusé de manger, sans parler des constantes.", correct: false, feedback: "Séduisant : le refus est une information simple à retenir. Mais il est ici la conséquence de ton observation, pas la cause." },
          { text: "La version de la famille, sans les valeurs mesurées.", correct: false, feedback: "Séduisant : leur inquiétude explique la scène. Mais une transmission de soin repose sur des mesures, pas sur un ressenti." },
          { text: "Une remarque sur la ponctualité de l'infirmier, sans suite.", correct: false, feedback: "Séduisant : signaler une difficulté d'organisation est utile. Mais elle ne remplace pas la donnée de surveillance sur la personne." }
        ] }
    ],
    bilan: "Tu as arbitré entre le rythme du repas et la surveillance de M. Garnier. Point fort : l'alerte a été donnée avec des chiffres. À retravailler : tracer le report du repas dans le dossier."
  },
  {
    id: "S87", bloc: "B2", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C2.1","C2.2"],
    titre: "Toilette du matin : écouter avant d'agir",
    description: "À 8 h, en EHPAD, Mme Fabre, 84 ans, refuse sa toilette et se tient l'épaule. Sa fille, présente, s'oppose à ce qu'on insiste, tandis que le protocole impose le soin avant 9 h. Tu dois décider de la première action sans braquer la famille ni ignorer la plainte.",
    hints: ["Une douleur nouvelle se vérifie avant tout geste.","La surveillance prime sur l'horaire du soin.","Toute anomalie observée doit être tracée et remontée."],
    variantes: [
      { titre: "Variante — la fille impose son départ", description: "La fille annonce qu'elle doit partir à 8 h 30 et exige que la toilette soit terminée avant. La pression familiale s'ajoute à la douleur observée." },
      { titre: "Variante — douleur au moment du lever", description: "La plainte n'apparaît que lorsque tu aides Mme Fabre à quitter le lit : c'est le geste de lever, et non la toilette, qui déclenche la douleur." }
    ],
    steps: [
      {
        q: "Quelle est ta première action face à cette résidente qui a mal ?",
        choices: [
          { text: "Suspendre la toilette, observer la douleur et prendre les constantes avant de poursuivre.", correct: true, feedback: "Juste : tu mets la surveillance de l'état de santé avant la cadence du soin. Poursuivre l'hygiène était tentant pour respecter le protocole, mais la plainte doit d'abord être évaluée." },
          { text: "Poursuivre la toilette à l'heure habituelle et noter la plainte pour la fin du service.", correct: false, feedback: "Séduisant : tu gardes le rythme du service et tu ne perds pas l'information. Mais tu reportes l'évaluation d'une douleur qui peut révéler un problème aigu." },
          { text: "Demander à la fille de rassurer sa mère afin de terminer la toilette sans retard.", correct: false, feedback: "Séduisant : la fille connaît sa mère et semble pouvoir calmer la situation. Mais tu délègues une évaluation clinique à la famille et tu banalises la douleur." },
          { text: "Installer la résidente au fauteuil et différer la toilette après le petit-déjeuner.", correct: false, feedback: "Séduisant : tu respectes le refus et tu gardes un temps de soin pour plus tard. Mais tu n'as vérifié ni la douleur ni les constantes avant de modifier le programme." }
        ] },
      {
        q: "Tu mesures 38,4 °C et une douleur à la palpation de l'épaule. Que décides-tu ?",
        choices: [
          { text: "Installer la résidente au calme, appliquer le protocole et prévenir l'infirmier sans attendre.", correct: true, feedback: "Juste : tu combines le confort de la personne et l'alerte immédiate auprès de l'infirmier. Attendre la visite de 10 h était tentant pour éviter de déranger, mais l'alerte ne peut pas être différée." },
          { text: "Continuer la toilette en douceur puis attendre la visite de l'infirmier à 10 heures.", correct: false, feedback: "Séduisant : tu termines le soin commencé et tu restes dans le protocole d'hygiène. Mais tu laisses une fièvre et une douleur sans alerte pendant près de deux heures." },
          { text: "Rassurer la fille en disant que la douleur est banale à cet âge et terminer le soin.", correct: false, feedback: "Séduisant : tu évites l'inquiétude de la famille et tu maintiens le déroulé du matin. Mais tu avances une conclusion médicale qui ne t'appartient pas." },
          { text: "Noter la température sur la feuille de soins et prévenir l'infirmier en fin de matinée.", correct: false, feedback: "Séduisant : tu gardes une trace écrite de la mesure et tu préviens bien l'infirmier. Mais le report de l'alerte prive la résidente d'une prise en charge rapide." }
        ] },
      {
        q: "Que transmets-tu à l'infirmier après cette intervention ?",
        choices: [
          { text: "L'heure, la douleur de l'épaule, la température, la toilette suspendue et l'évolution observée.", correct: true, feedback: "Juste : ta transmission est datée, complète et exploitable pour le prochain soin. Un récit court était plus rapide, mais il aurait perdu les repères essentiels à la continuité." },
          { text: "Un message oral bref disant que Mme Fabre a mal à l'épaule depuis le réveil ce matin.", correct: false, feedback: "Séduisant : l'oral est immédiat et l'infirmier est prévenu sans attendre. Mais il manque l'heure, la température et l'action déjà menée au chevet." },
          { text: "Seulement la température relevée, en précisant que la fille était présente au moment du soin.", correct: false, feedback: "Séduisant : tu rapportes un chiffre précis et le contexte familial. Mais tu omets la douleur, pourtant le motif réel de l'alerte et du suivi." },
          { text: "Une synthèse unique en fin de service, avec les autres observations de la matinée.", correct: false, feedback: "Séduisant : tu regroupes les informations en un seul compte rendu lisible. Mais l'infirmier doit agir maintenant, pas seulement à la fin de la matinée." }
        ] }
    ],
    bilan: "Tu as arbitré entre le respect du protocole de toilette et la surveillance d'une douleur inattendue. Point fort : tu as su t'arrêter et évaluer avant d'agir. À retravailler : la précision des constantes et de l'heure dans la transmission."
  },
  {
    id: "S88", bloc: "B2", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C2.3","C2.4"],
    titre: "Service du repas : sécuriser avant de servir",
    description: "Au centre, il est 12 h. Le déambulateur de M. Leroy, 78 ans, empiète sur le passage et Mme Bensaïd, qui doit manger une texture hachée, attend son plateau. Ton collègue veut lancer le service tout de suite. Tu dois trancher entre la cadence et la sécurité de l'environnement proche.",
    hints: ["Un passage dégagé précède le service.","Vérifie la texture avant de poser le plateau.","Un incident corrigé se trace aussi."],
    variantes: [
      { titre: "Variante — le collègue s'impatiente", description: "Ton collègue a déjà commencé à distribuer les autres plateaux et te presse de suivre. Le déambulateur reste au milieu du passage et les résidents commencent à se lever." },
      { titre: "Variante — plateau déjà posé", description: "Le plateau de Mme Bensaïd a déjà été posé sur sa table avec une texture normale. Il faut corriger l'erreur sans la faire attendre davantage ni la mettre mal à l'aise." }
    ],
    steps: [
      {
        q: "Quelle est ta première action avant de commencer le service ?",
        choices: [
          { text: "Écarter le déambulateur du passage et vérifier l'installation des tables avant de servir.", correct: true, feedback: "Juste : tu sécurises l'environnement proche avant tout service. Suivre le collègue était tentant pour gagner du temps, mais un passage obstré expose les résidents à une chute." },
          { text: "Commencer par les plateaux déjà prêts en contournant le déambulateur avec précaution.", correct: false, feedback: "Séduisant : tu avances le service sans interrompre le collègue. Mais contourner l'obstacle ne le supprime pas et laisse le risque de chute en place." },
          { text: "Demander à M. Leroy de reculer lui-même son déambulateur pour dégager le passage.", correct: false, feedback: "Séduisant : tu sollicites son autonomie et tu évites de toucher à son matériel. Mais tu lui demandes un geste difficile alors que le service n'a même pas commencé." },
          { text: "Prévenir l'équipe d'entretien pour qu'elle déplace le déambulateur après le repas.", correct: false, feedback: "Séduisant : tu respectes les rôles de chacun et tu préviens une intervention adaptée. Mais attendre la fin du repas laisse le danger persister pendant toute la distribution." }
        ] },
      {
        q: "Le plateau de Mme Bensaïd porte une texture normale au lieu du haché prescrit. Que fais-tu ?",
        choices: [
          { text: "Remplacer le plateau par une texture hachée conforme avant de le poser devant elle.", correct: true, feedback: "Juste : tu corriges l'erreur avant la prise alimentaire. Servir en expliquant était tentant pour ne pas la faire attendre, mais la prescription prime sur la cadence." },
          { text: "Servir ce plateau tel quel en recommandant à la résidente de manger très lentement.", correct: false, feedback: "Séduisant : tu évites un retard et tu donnes une consigne prudente. Mais une texture non conforme expose une personne à un risque de fausse route." },
          { text: "Retirer les morceaux durs et servir en expliquant que tu as adapté le plat sur place.", correct: false, feedback: "Séduisant : tu réagis vite et tu proposes une solution immédiate. Mais une adaptation improvisée ne remplace pas une texture hachée préparée selon la prescription." },
          { text: "Prévenir la cuisine pour le repas de demain et servir celui-ci en l'état.", correct: false, feedback: "Séduisant : tu évites de refaire le plateau et tu corriges la cause pour plus tard. Mais la résidente doit manger un repas conforme dès aujourd'hui." }
        ] },
      {
        q: "En fin de service, que consignes-tu dans le dossier de liaison ?",
        choices: [
          { text: "Le déambulateur déplacé et le plateau remplacé, avec l'heure et l'action menée.", correct: true, feedback: "Juste : tu traces les deux incidents corrigés pour assurer la continuité. Ne rien écrire était tentant puisque tout est rentré dans l'ordre, mais l'équipe doit connaître ces faits." },
          { text: "Un compte rendu oral au collègue, sans laisser de trace écrite dans le dossier.", correct: false, feedback: "Séduisant : l'échange est rapide et le collègue était présent. Mais le relais de nuit n'aura aucun repère écrit pour comprendre la situation." },
          { text: "Uniquement l'erreur de texture, en considérant le déambulateur comme un simple geste d'ordre.", correct: false, feedback: "Séduisant : tu notes l'incident le plus médical. Mais l'obstacle dans le passage reste une donnée utile à la prévention des chutes." },
          { text: "Les deux faits regroupés dans le bilan hebdomadaire, avec les autres observations du service.", correct: false, feedback: "Séduisant : tu évites d'alourdir le dossier avec des détails mineurs. Mais un retard d'une semaine rend la prévention inefficace pour les prochains repas." }
        ] }
    ],
    bilan: "Tu as arbitré entre la cadence du service et la sécurité de l'environnement proche de la personne. Point fort : tu as dégagé le passage avant de distribuer. À retravailler : la traçabilité des incidents pourtant corrigés."
  },
  {
    id: "S89", bloc: "B2", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C2.1","C2.3"],
    titre: "Accompagner le repas : une installation à vérifier",
    description: "En structure, Mme Perrin, 88 ans, s'installe pour manger. Sa chaise est instable et la sonnette est posée hors de portée sur la table. Elle veut manger seule, mais ton collègue propose de l'installer près de l'infirmerie pour la surveiller. Tu dois arbitrer entre son autonomie et sa sécurité.",
    hints: ["La sonnette doit rester à portée de main.","Une chaise instable se signale avant le repas.","Vérifier n'est pas empêcher de manger seule."],
    variantes: [
      { titre: "Variante — la résidente refuse ton aide", description: "Mme Perrin repousse ta main et affirme qu'elle se débrouille toujours seule. Le collègue en profite pour dire qu'il vaut mieux la laisser faire et passer au service." },
      { titre: "Variante — sonnette déjà en panne", description: "La sonnette est à portée mais ne fonctionne plus depuis la veille, sans que personne l'ait signalé. La résidente compte pourtant dessus pour appeler en cas de besoin." }
    ],
    steps: [
      {
        q: "Comment installes-tu Mme Perrin avant de la laisser manger ?",
        choices: [
          { text: "Stabiliser la chaise, approcher la sonnette et vérifier son installation avec elle.", correct: true, feedback: "Juste : tu concilies son autonomie et la sécurisation de son installation. La solution du collègue était tentante pour simplifier la surveillance, mais elle retire à la résidente son repas en autonomie." },
          { text: "L'installer près de l'infirmerie comme proposé, pour faciliter la surveillance du repas.", correct: false, feedback: "Séduisant : tu réponds à l'avis du collègue et tu places la résidente sous contrôle visuel. Mais tu sacrifies son habitude de manger seule sans avoir vérifié le matériel." },
          { text: "Caler la chaise avec un coussin et lui demander d'appeler si elle a besoin de quelque chose.", correct: false, feedback: "Séduisant : tu apportes une réponse rapide sans changer ses habitudes. Mais un coussin ne stabilise pas une chaise et la sonnette reste hors de portée." },
          { text: "Demander au collègue de rester à côté d'elle pendant tout le repas, sans toucher à rien.", correct: false, feedback: "Séduisant : une présence continue rassure et compense le matériel défectueux. Mais immobilise un collègue ne règle ni la chaise ni la sonnette pour les repas suivants." }
        ] },
      {
        q: "Pendant le repas, le plateau glisse vers le bord de la table. Que fais-tu ?",
        choices: [
          { text: "Retenir le plateau et réinstaller la vaisselle sans interrompre brutalement la prise du repas.", correct: true, feedback: "Juste : tu protèges la prise alimentaire tout en respectant son rythme. Déplacer tout le repas était tentant pour éviter une nouvelle glissade, mais cela la déstabiliserait inutilement." },
          { text: "Transférer tout le repas sur une autre table que tu juges plus stable pour la suite.", correct: false, feedback: "Séduisant : tu supprimes la cause immédiate du glissement. Mais tu déplaces la résidente en plein repas et tu ne vérifies pas l'état de la table d'origine." },
          { text: "Demander à la résidente de tenir fermement son assiette jusqu'à la fin du repas.", correct: false, feedback: "Séduisant : tu sollicites sa participation et tu évites d'intervenir à sa place. Mais tu lui demandes un effort de préhension qu'elle n'est peut-être plus en mesure de fournir." },
          { text: "Prévenir l'équipe pour faire remplacer la table après le repas, sans y toucher maintenant.", correct: false, feedback: "Séduisant : tu prévois une solution durable et adaptée au matériel. Mais le repas en cours reste exposé à une nouvelle glissade." }
        ] },
      {
        q: "Que transmets-tu après ce repas ?",
        choices: [
          { text: "L'instabilité de la chaise et la sonnette déplacée, pour une intervention de maintenance.", correct: true, feedback: "Juste : tu remontes les deux anomalies d'environnement avec les gestes déjà faits. Une mention courte était plus rapide, mais elle ne déclencherait aucune intervention." },
          { text: "Une phrase unique disant que l'installation s'est bien passée, sans préciser les incidents.", correct: false, feedback: "Séduisant : tu confirmes que le repas s'est déroulé correctement. Mais tu perds l'information qui permettrait d'éviter le même problème demain." },
          { text: "Seulement l'avis adressé à l'infirmier, sans trace dans le dossier de liaison.", correct: false, feedback: "Séduisant : l'infirmier est informé rapidement et peut décider. Mais le service d'entretien n'aura pas connaissance du matériel à réparer." },
          { text: "La chaise instable uniquement, en jugeant la sonnette sans importance pour le repas.", correct: false, feedback: "Séduisant : tu signales le risque de chute le plus visible. Mais une sonnette hors de portée prive la résidente de la possibilité d'appeler." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'autonomie de la résidente et la sécurisation de son installation. Point fort : tu as vérifié les aides techniques avant de la laisser manger. À retravailler : la remontée systématique des anomalies d'environnement."
  },
  {
    id: "S90", bloc: "B2", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C2.2","C2.4"],
    titre: "Retour d'intervention : le plat de la famille",
    description: "Au centre, M. Garnier, 72 ans, revient d'une intervention ce matin. Sa fille a apporté son plat préféré, alors que l'ordre médical prescrit une texture mixée et une surveillance des constantes. Elle insiste pour le nourrir elle-même. Tu dois arbitrer entre la place de la famille et la sécurité alimentaire.",
    hints: ["Vérifie l'ordre avant toute prise alimentaire.","Une alerte se donne sans attendre la visite.","Tout écart se consigne avec l'heure."],
    variantes: [
      { titre: "Variante — la fille reste au chevet", description: "La fille s'installe à côté du lit et tient déjà la cuillère. Elle promet de faire attention, mais l'heure de la surveillance des constantes approche et l'IDE n'est pas encore passée." },
      { titre: "Variante — constantes déjà anormales", description: "Le pouls de M. Garnier est plus rapide que d'habitude avant le repas. La fille interprète cela comme la fatigue du retour et veut quand même donner à manger." }
    ],
    steps: [
      {
        q: "Que priorises-tu avant toute prise alimentaire ?",
        choices: [
          { text: "Prendre les constantes et vérifier la prescription de texture avant de servir le repas.", correct: true, feedback: "Juste : tu assures la surveillance et la conformité du repas avant de nourrir. Servir d'abord pour ne pas contrarier la fille était tentant, mais l'ordre médical prime." },
          { text: "Servir d'abord le plat apporté par la fille pour ne pas la contrarier au chevet.", correct: false, feedback: "Séduisant : tu préserves la relation avec la famille et tu évites une dispute. Mais tu passes outre la texture prescrite et tu retardes la surveillance." },
          { text: "Laisser la fille nourrir son père en lui recommandant simplement d'être prudente.", correct: false, feedback: "Séduisant : tu respectes la place de la famille et tu restes disponible. Mais la prudence d'un proche ne remplace pas une prescription de texture ni une vérification." },
          { text: "Attendre le passage du médecin à 13 h pour confirmer l'ordre avant de servir quoi que ce soit.", correct: false, feedback: "Séduisant : tu évites de décider à sa place et tu attends une validation officielle. Mais le repas peut être servi plus tôt selon l'ordre déjà écrit." }
        ] },
      {
        q: "La fille donne une bouchée du plat apporté. Que fais-tu ?",
        choices: [
          { text: "Interrompre la prise avec tact, écarter le plat et prévenir l'infirmier sans attendre.", correct: true, feedback: "Juste : tu protèges la déglutition et tu alertes immédiatement. Laisser finir la bouchée était tentant pour ne pas brusquer la famille, mais l'écart doit être arrêté." },
          { text: "Laisser terminer la bouchée en surveillant attentivement la déglutition de M. Garnier.", correct: false, feedback: "Séduisant : tu évites un geste brutal et tu surveilles le risque de fausse route. Mais tu autorises tacitement un aliment non conforme à la prescription." },
          { text: "Proposer à la fille de mélanger son plat avec la purée prescrite pour concilier les deux.", correct: false, feedback: "Séduisant : tu cherches un compromis qui respecte la famille et soigne le résident. Mais tu modifies une texture prescrite sans validation de l'équipe soignante." },
          { text: "Noter l'écart dans le dossier sans intervenir, pour respecter l'autorité de la famille au chevet.", correct: false, feedback: "Séduisant : tu gardes une trace et tu ne confrontes pas la fille. Mais tu laisses se poursuivre une prise alimentaire dangereuse sous tes yeux." }
        ] },
      {
        q: "Que transmets-tu à l'équipe soignante après cet épisode ?",
        choices: [
          { text: "L'écart alimentaire, les constantes relevées, l'action menée et l'heure de l'alerte.", correct: true, feedback: "Juste : ta transmission permet à l'infirmier de décider de la suite en connaissance de cause. Un simple appel téléphonique était plus rapide, mais il n'aurait pas laissé de trace fiable." },
          { text: "Uniquement les constantes de surveillance, en considérant le repas comme un incident mineur.", correct: false, feedback: "Séduisant : tu transmets les chiffres attendus après une intervention. Mais l'écart de texture est justement l'élément à signaler au médecin." },
          { text: "Un appel direct au médecin, sans passer par l'infirmier référent du centre ce soir.", correct: false, feedback: "Séduisant : tu préviens le prescripteur au plus vite. Mais tu contournes la chaîne de transmission et l'infirmier ignore ce qui s'est passé." },
          { text: "Un compte rendu remis à la visite de contrôle, une fois la situation revenue au calme.", correct: false, feedback: "Séduisant : tu attends d'avoir du recul pour rédiger un texte clair. Mais l'équipe de nuit doit connaître l'écart dès aujourd'hui." }
        ] }
    ],
    bilan: "Tu as arbitré entre le respect de la prescription alimentaire et la place de la famille au chevet. Point fort : tu as su interrompre la prise avec tact. À retravailler : la remontée immédiate de l'écart à l'équipe soignante."
  },
  {
    id: "S91", bloc: "B2", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C2.1","C2.2"],
    titre: "Distribution du soir : un résident essoufflé",
    description: "En structure, tu distribues les repas du soir à 19 h. M. Dubois, 81 ans, est essoufflé avant même d'attaquer son plateau, et sa voisine te demande de servir tout le monde d'abord. Ton collègue est en pause. Tu dois arbitrer entre la cadence de la distribution et une surveillance qui ne peut pas attendre.",
    hints: ["Un essoufflement se vérifie avant le plateau.","L'alerte ne se délègue pas à un proche.","Note l'heure, les signes et la réponse de l'IDE."],
    variantes: [
      { titre: "Variante — le collègue en pause", description: "Ton collègue te propose de finir la distribution à ta place pendant qu'il va chercher l'infirmier. Les plateaux refroidissent et les résidents commencent à s'impatienter." },
      { titre: "Variante — essoufflement à l'effort", description: "M. Dubois n'est essoufflé que lorsqu'il se penche pour atteindre son plateau. Sa voisine affirme que c'est toujours comme ça lorsqu'il fait un effort." }
    ],
    steps: [
      {
        q: "Quelle est ta première action face à M. Dubois ?",
        choices: [
          { text: "Observer son état, l'installer au calme et prendre ses constantes avant de poursuivre.", correct: true, feedback: "Juste : tu fais de la surveillance la priorité tout en assurant son confort. Terminer la distribution était tentant pour ne pas faire attendre les autres, mais les signes doivent être évalués." },
          { text: "Terminer la distribution des plateaux puis revenir voir M. Dubois juste après.", correct: false, feedback: "Séduisant : tu évites de bloquer le service et tu gardes le résident en tête. Mais quelques minutes de retard peuvent aggraver une détresse respiratoire." },
          { text: "Lui proposer de manger lentement en attendant que son tour de surveillance arrive.", correct: false, feedback: "Séduisant : tu lui donnes un repère simple et tu maintiens le calendrier du soin. Mais un essoufflement non évalué ne se règle pas par une consigne de lenteur." },
          { text: "Demander à la voisine de prévenir l'infirmier à ta place pendant que tu continues.", correct: false, feedback: "Séduisant : tu trouves une aide immédiate sans interrompre le service. Mais tu délègues une alerte à une résidente qui ne sait pas ce qu'elle doit décrire." }
        ] },
      {
        q: "Sa respiration est rapide et ses lèvres sont bleutées. Que décides-tu ?",
        choices: [
          { text: "Appliquer le protocole d'alerte, l'installer en position adaptée et appeler l'infirmier.", correct: true, feedback: "Juste : tu agis sur la sécurité et tu déclenches l'alerte sans délai. Ouvrir la fenêtre d'abord était tentant pour essayer de le soulager, mais l'avis infirmier reste indispensable." },
          { text: "Ouvrir la fenêtre et attendre une amélioration avant de donner l'alerte à l'infirmier.", correct: false, feedback: "Séduisant : tu tentes un geste simple et peu invasif pour l'aider. Mais des lèvres bleutées exigent une alerte immédiate, pas une période d'observation." },
          { text: "Faire appel au collègue en pause pour qu'il décide de la conduite à tenir à ta place.", correct: false, feedback: "Séduisant : tu partages la responsabilité avec un pair plus disponible. Mais le diagnostic et l'alerte relèvent de l'infirmier, pas d'un collègue en pause." },
          { text: "Noter les signes sur la feuille de service pour le relais de nuit, sans alerte maintenant.", correct: false, feedback: "Séduisant : tu gardes une trace précise pour la suite de la prise en charge. Mais le relais de nuit arrive trop tard pour une situation qui s'aggrave ce soir." }
        ] },
      {
        q: "Que consignes-tu dans le dossier de surveillance ?",
        choices: [
          { text: "L'heure, les signes observés, les constantes, l'alerte donnée et la réponse de l'infirmier.", correct: true, feedback: "Juste : ton compte rendu est daté et complet pour le relais. Une mention courte était tentante pour aller plus vite, mais elle perdrait les repères de l'alerte." },
          { text: "Le simple mot essoufflement, sans heure ni précision sur les lèvres bleutées.", correct: false, feedback: "Séduisant : tu rédiges rapidement l'essentiel et tu passes au service. Mais cette mention ne permet pas de mesurer l'urgence ni de suivre l'évolution." },
          { text: "Un appel à la famille avant l'équipe soignante, pour la prévenir de l'épisode.", correct: false, feedback: "Séduisant : tu informes les proches d'un signe inquiétant. Mais l'équipe soignante doit être alertée en premier, et la famille attendra le bilan de l'IDE." },
          { text: "Le rapport complet une fois la situation stabilisée, pour éviter une rédaction précipitée.", correct: false, feedback: "Séduisant : tu privilégies un texte rédigé au calme et plus lisible. Mais attendre la stabilisation retarde la trace dont le relais a besoin immédiatement." }
        ] }
    ],
    bilan: "Tu as arbitré entre la cadence du service et la surveillance d'un résident essoufflé. Point fort : tu as alerté sans attendre. À retravailler : la précision des signes et de l'heure dans le dossier."
  },
  {
    id: "S92", bloc: "B2", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C2.3","C2.4"],
    titre: "Observation d'une résidente : le plateau révélateur",
    description: "Au centre, Mme Vallée, 85 ans, laisse la moitié de son repas depuis trois jours. Aujourd'hui, son verre est intact et la sonnette est retournée sur la table. Sa voisine affirme qu'elle n'a pas faim, tandis que l'infirmière soupçonne une infection. Tu dois arbitrer entre une explication rapide et une observation à creuser.",
    hints: ["La quantité consommée est une donnée de surveillance.","Une sonnette hors de portée change l'interprétation.","Vérifie la texture avant de conclure à un refus."],
    variantes: [
      { titre: "Variante — la voisine s'en mêle", description: "La voisine affirme connaître Mme Vallée et répète qu'elle est difficultueuse depuis toujours. L'infirmière, occupée, te demande de trancher toi-même sur la conduite à tenir." },
      { titre: "Variante — prothèses douloureuses", description: "Mme Vallée explique qu'elle a mal aux gencives avec ce plat. La texture servie est trop dure pour ses prothèses et personne ne l'avait noté dans le dossier de liaison." }
    ],
    steps: [
      {
        q: "Que fais-tu en premier devant ce plateau à moitié plein ?",
        choices: [
          { text: "Observer l'installation, la sonnette et les restes du plateau avant de conclure.", correct: true, feedback: "Juste : tu recueilles les faits avant d'interpréter. Croire la voisine était plus simple, mais une baisse d'apport peut révéler un problème qu'il faut objectiver." },
          { text: "Suivre l'avis de la voisine et retirer le plateau sans vérification supplémentaire.", correct: false, feedback: "Séduisant : tu fais confiance à quelqu'un qui côtoie la résidente chaque jour. Mais une habitude rapportée ne remplace pas une observation directe et datée." },
          { text: "Proposer directement un complément sucré pour rattraper l'apport de ce repas.", correct: false, feedback: "Séduisant : tu réagis vite pour éviter une dénutrition. Mais tu ajoutes des calories sans comprendre la cause de la baisse de consommation." },
          { text: "Demander à la cuisine de modifier le menu dès demain pour ce résident.", correct: false, feedback: "Séduisant : tu anticipe une solution concrète pour les prochains repas. Mais tu changes une prescription collective avant même d'avoir identifié le problème." }
        ] },
      {
        q: "La sonnette est hors de portée et la texture servie est trop dure pour ses prothèses. Que fais-tu ?",
        choices: [
          { text: "Rapprocher la sonnette, signaler la texture inadaptée et prévenir l'infirmière.", correct: true, feedback: "Juste : tu corriges l'environnement et tu remontes l'observation à l'équipe. Simplement émincer le plat était tentant pour dépanner, mais la texture doit être prescrite." },
          { text: "Rapprocher la sonnette et émincer le plat sur place pour qu'elle puisse manger.", correct: false, feedback: "Séduisant : tu rends le repas accessible immédiatement sans attendre la cuisine. Mais tu modifies une texture sans validation et tu ne préviens pas l'infirmière." },
          { text: "Lui demander d'utiliser la sonnette de la table voisine si elle a besoin d'aide.", correct: false, feedback: "Séduisant : tu trouves une ressource proche sans intervenir sur le matériel. Mais une sonnette chez la voisine n'est pas un moyen d'appel fiable pour elle." },
          { text: "Noter un refus de manger, sans faire le lien avec la texture proposée ce midi.", correct: false, feedback: "Séduisant : tu consignes un fait simple et rapide à rédiger. Mais tu orientes l'équipe vers une explication comportementale alors que la cause est matérielle." }
        ] },
      {
        q: "Que transmets-tu à l'équipe après ce repas ?",
        choices: [
          { text: "La quantité restée, la sonnette déplacée, la gêne de mastication et l'action menée.", correct: true, feedback: "Juste : tu donnes à l'équipe des éléments objectifs pour décider. Une simple alerte sur l'appétit était plus courte, mais elle aurait égaré le raisonnement." },
          { text: "Une seule information : la baisse d'appétit observée depuis trois repas consécutifs.", correct: false, feedback: "Séduisant : tu signales une tendance qui mérite une attention médicale. Mais tu omets les causes matérielles que tu as pourtant identifiées au chevet." },
          { text: "Un message à la cuisine pour changer la texture, sans prévenir l'infirmière référente.", correct: false, feedback: "Séduisant : tu agis directement auprès de ceux qui préparent les plateaux. Mais le changement de texture doit être validé et tracé par l'équipe soignante." },
          { text: "Une note à remettre au prochain repas, une fois l'observation confirmée une quatrième fois.", correct: false, feedback: "Séduisant : tu évites de signaler un fait qui pourrait être isolé. Mais la sonnette et la texture ont déjà été corrigées et doivent être connues dès maintenant." }
        ] }
    ],
    bilan: "Tu as arbitré entre une explication rapide et une observation approfondie du repas et de l'environnement. Point fort : tu as lié la sonnette et la texture. À retravailler : la transmission des quantités réellement consommées."
  },
  {
    id: "S93", bloc: "B2", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C2.1","C2.3"],
    titre: "Toilette au lit : le matériel fait défaut",
    description: "En structure, tu prépares la toilette au lit de Mme Cissé, 79 ans, à 9 h. Le lit ne descend plus et le système d'appel est débranché depuis la veille. Ta collègue propose de faire le soin quand même pour respecter le programme, et la résidente, gênée, n'ose rien dire. Tu dois trancher entre le confort et la conformité du matériel.",
    hints: ["Un système d'appel débranché est une alerte.","La gêne de la personne est une information.","Signaler une panne ne suffit pas à sécuriser le geste."],
    variantes: [
      { titre: "Variante — la collègue commence déjà", description: "Ta collègue a déjà préparé le chariot et commence à déshabiller la résidente. Le lit reste bloqué en hauteur et elle te dit de ne pas perdre de temps avec le système d'appel." },
      { titre: "Variante — panne signalée la veille", description: "La panne du lit a déjà été notée hier par l'équipe de nuit, sans qu'aucune intervention n'ait eu lieu. Le dossier mentionne un rendez-vous avec le service technique seulement demain." }
    ],
    steps: [
      {
        q: "Quelle est ta première action devant ce matériel défectueux ?",
        choices: [
          { text: "Arrêter le geste, vérifier le lit et l'appel, puis prévenir l'équipe avant de poursuivre.", correct: true, feedback: "Juste : tu protèges la personne et tu traites l'anomalie d'environnement. Suivre la collègue était tentant pour respecter le programme, mais un appel débranché isole la résidente." },
          { text: "Poursuivre la toilette en demandant à la collègue de rester surveiller le lit.", correct: false, feedback: "Séduisant : une deuxième paire d'yeux limite le risque de chute et le soin est fait. Mais la présence humaine ne remplace pas un système d'appel fonctionnel." },
          { text: "Forcer doucement le mécanisme du lit pour le descendre, sans prévenir personne.", correct: false, feedback: "Séduisant : tu essayes de rétablir une hauteur sûre par toi-même. Mais forcer un dispositif médical peut l'endommager davantage et engage ta responsabilité." },
          { text: "Rebrancher l'appel.toi-même sans le signaler, puis enchaîner le soin comme prévu.", correct: false, feedback: "Séduisant : tu rétablis une fonction utile en un geste rapide. Mais une panne non tracée peut se reproduire et rester invisible pour les autres équipes." }
        ] },
      {
        q: "Le lit reste bloqué en hauteur. Comment assurer la sécurité du soin ?",
        choices: [
          { text: "Réinstaller la résidente avec des aides adaptées et prévenir le service technique.", correct: true, feedback: "Juste : tu sécurises la personne et tu déclenches la réparation adaptée. Demander à la collègue de supporter la résidente était tentant, mais cela expose les deux professionnelles." },
          { text: "Continuer en s'appuyant sur la collègue pour soutenir la résidente pendant la toilette.", correct: false, feedback: "Séduisant : l'entraide entre collègues permet de terminer le soin au plus vite. Mais un maintien humain improvisé reste instable et fatigue les deux soignantes." },
          { text: "Demander à Mme Cissé de se tenir au bord du lit pendant que tu lui fais la toilette.", correct: false, feedback: "Séduisant : tu sollicites sa participation et tu réduis le besoin de matériel. Mais son appui est insuffisant avec un lit trop haut et le risque de chute reste réel." },
          { text: "Reporter la toilette au lendemain en attendant l'intervention du service technique.", correct: false, feedback: "Séduisant : tu évites un geste dangereux et tu attends une solution durable. Mais priver la résidente de soin d'hygiène pendant une journée n'est pas acceptable sans alternative." }
        ] },
      {
        q: "Que transmets-tu en fin d'intervention ?",
        choices: [
          { text: "La panne du lit, l'appel débranché, l'heure et les mesures de sécurité prises.", correct: true, feedback: "Juste : tu fournis à l'équipe tous les éléments pour la continuité et la maintenance. Un simple mot sur le dossier était plus rapide, mais il ne déclencherait aucune réparation." },
          { text: "Une mention indiquant que la toilette a été faite, sans détailler les problèmes de matériel.", correct: false, feedback: "Séduisant : tu consignes l'activité réalisée comme d'habitude. Mais tu caches au relais que le lit et l'appel restent dangereux pour la prochaine soignante." },
          { text: "Un appel à la famille pour l'informer de la panne avant d'avertir le service technique.", correct: false, feedback: "Séduisant : tu rends des comptes aux proches d'un matériel défectueux. Mais la priorité est la sécurité de la résidente et la remontée interne, pas l'information familiale." },
          { text: "Les pannes regroupées dans le rapport de fin de service, avec les autres faits du jour.", correct: false, feedback: "Séduisant : tu centralises les informations en une seule écriture. Mais le service technique doit être prévenu maintenant pour intervenir dans la journée." }
        ] }
    ],
    bilan: "Tu as arbitré entre le respect du programme des soins et la sécurité du matériel. Point fort : tu as entendu la gêne de la résidente sans la brusquer. À retravailler : la remontée immédiate des dysfonctionnements."
  },
  {
    id: "S94", bloc: "B2", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C2.2","C2.4"],
    titre: "Confort et repas : une plainte à écouter",
    description: "Au centre, M. Robert, 76 ans, repousse son plateau en disant qu'il a mal à la bouche. Sa voisine affirme qu'il est toujours difficile et l'infirmière est en réunion jusqu'à 13 h. Tu dois arbitrer entre la cadence du service et une douleur qui peut empêcher l'alimentation.",
    hints: ["Une douleur buccale change la texture à servir.","Un refus de repas se vérifie toujours.","Préviens l'infirmière sans attendre la fin de sa réunion."],
    variantes: [
      { titre: "Variante — l'infirmière injoignable", description: "L'infirmière est en réunion et son téléphone ne répond pas. Le plateau de M. Robert reste intact et les autres résidents attendent leur service. Tu dois décider sans elle." },
      { titre: "Variante — la voisine insiste", description: "La voisine répète que M. Robert refuse de manger chaque fois qu'il veut attirer l'attention. Elle te conseille de passer au suivant sans t'attarder à son cas." }
    ],
    steps: [
      {
        q: "Que fais-tu en premier devant ce refus de repas ?",
        choices: [
          { text: "Écouter la plainte, examiner la bouche et adapter la texture avant de servir.", correct: true, feedback: "Juste : tu lies surveillance et alimentation en cherchant la cause du refus. Suivre l'avis de la voisine était tentant pour avancer plus vite, mais une douleur mérite d'être vérifiée." },
          { text: "Servir le plateau en expliquant que l'infirmière repassera après sa réunion.", correct: false, feedback: "Séduisant : tu maintiens la cadence et tu renvoies la question à la personne compétente. Mais tu laisses le résident face à un repas qu'il ne peut pas manger." },
          { text: "Demander à la voisine de convaincre M. Robert de manger comme d'habitude.", correct: false, feedback: "Séduisant : tu comptes sur une personne qu'il connaît bien pour le rassurer. Mais tu transformes une douleur en caprice et tu délèges ton observation." },
          { text: "Retirer le plateau et prévenir la cuisine d'un simple refus de repas ce midi.", correct: false, feedback: "Séduisant : tu libères la place et tu informes ceux qui préparent les repas. Mais tu renonces à l'alimentation sans chercher une texture adaptée." }
        ] },
      {
        q: "Tu vois une lésion douloureuse dans sa bouche. Que décides-tu ?",
        choices: [
          { text: "Suspendre la prise orale, installer M. Robert confortablement et prévenir l'infirmière.", correct: true, feedback: "Juste : tu protèges la prise alimentaire et tu alertes malgré la réunion. Attendre 13 h était tentant pour ne pas déranger, mais une lésion doit être évaluée rapidement." },
          { text: "Proposer une texture plus froide pour soulager la bouche et poursuivre le repas.", correct: false, feedback: "Séduisant : le froid peut apaiser et tu évites de couper l'appétit. Mais une lésion non évaluée peut s'aggraver et la douleur reste présente." },
          { text: "Faire un soin de bouche improvisé avec le matériel dont tu disposes au chariot.", correct: false, feedback: "Séduisant : tu soulages immédiatement le résident avec les moyens du service. Mais un soin non prescrit sur une lésion peut faire plus de mal que de bien." },
          { text: "Attendre la fin de la réunion pour prévenir l'infirmière sans l'interrompre.", correct: false, feedback: "Séduisant : tu respectes le temps de réunion de l'équipe et tu évites une interruption. Mais le repas est déjà compromis et l'avis infirmier ne peut pas attendre." }
        ] },
      {
        q: "Que transmets-tu à l'infirmière dès son retour ?",
        choices: [
          { text: "L'heure, la localisation de la lésion, la quantité non consommée et l'alerte donnée.", correct: true, feedback: "Juste : ton compte rendu est précis et directement utilisable pour la suite. Une phrase courte était tentante pour gagner du temps, mais elle perdrait les repères utiles." },
          { text: "Une mention de refus de repas sur la feuille de service, sans autre détail.", correct: false, feedback: "Séduisant : tu notes rapidement l'incident et tu passes à la suite du service. Mais l'infirmière ne saura rien de la lésion ni de l'heure de la plainte." },
          { text: "Un appel à la famille avant l'équipe soignante, pour expliquer la situation au résident.", correct: false, feedback: "Séduisant : tu associes les proches à une difficulté qui touche leur parent. Mais l'évaluation de la douleur revient d'abord à l'infirmière." },
          { text: "La plainte relatée sans heure ni action menée, en attendant un examen plus complet.", correct: false, feedback: "Séduisant : tu rapportes fidèlement ce que le résident a dit. Mais sans heure ni geste déjà réalisé, la transmission ne permet pas d'assurer la continuité." }
        ] }
    ],
    bilan: "Tu as arbitré entre la cadence du service et l'écoute d'une douleur qui bloque l'alimentation. Point fort : tu as adapté la texture avant de servir. À retravailler : la précision de la transmission à l'infirmière."
  },
  {
    id: "S95", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.1","C3.2"],
    titre: "Transmission de fin de service : le support fait défaut",
    description: "En fin de service à 17 h, tu dois transmettre la journée à l'équipe. Le logiciel de transmission est indisponible et ton collègue veut partir en laissant un simple mot griffonné. L'infirmière réclame un compte rendu pour le relais de nuit. Tu dois arbitrer entre la rapidité et la fiabilité de l'information transmise.",
    hints: ["Préviens l'équipe du problème technique.","Une trace écrite reste exploitable même sans logiciel.","Les faits datés priment sur le récit."],
    variantes: [
      { titre: "Variante — le relais arrive tôt", description: "Le relais de nuit arrive à 17 h 15 et demande des nouvelles tout de suite. Le logiciel est toujours bloqué et ton collègue a déjà quitté le service avec son brouillon." },
      { titre: "Variante — l'infirmière réclame un détail", description: "L'infirmière te demande de faire remonter un changement de traitement survenu à 15 h. Le collègue estime que ce n'est pas la peine de l'écrire puisque l'IDE était présente." }
    ],
    steps: [
      {
        q: "Comment organises-tu la transmission de fin de service ?",
        choices: [
          { text: "Regrouper les faits utiles et signaler la panne à l'équipe avant de choisir un support.", correct: true, feedback: "Juste : tu coordonnes l'équipe et tu sécurises le contenu avant le format. Recopier le mot du collègue était tentant pour gagner du temps, mais son contenu peut être incomplet." },
          { text: "Recopier fidèlement le mot griffonné du collègue dans le dossier de liaison.", correct: false, feedback: "Séduisant : tu conserves une trace et tu valorises le travail d'un pair. Mais un brouillon personnel n'a ni structure ni garantie d'exhaustivité pour le relais." },
          { text: "Attendre le retour du logiciel pour transmettre les informations au relais de nuit.", correct: false, feedback: "Séduisant : tu gardes le support habituel et tu évites une écriture parallèle. Mais le relais arrive avant la réparation et partirait sans information." },
          { text: "Faire un compte rendu oral rapide au seul collègue encore présent dans le service.", correct: false, feedback: "Séduisant : l'échange est immédiat et le collègue connaît déjà le service. Mais l'équipe de nuit n'aura ni trace écrite ni élément vérifiable après ton départ." }
        ] },
      {
        q: "Le support numérique reste bloqué. Que fais-tu alors ?",
        choices: [
          { text: "Rédiger une transmission écrite lisible et horodatée, puis la saisir dès le rétablissement.", correct: true, feedback: "Juste : tu garantis la continuité avec un support de secours et tu prévois la saisie. Un appel téléphonique était tentant pour aller plus vite, mais il ne laisse aucune trace durable." },
          { text: "Téléphoner au relais de nuit pour lui dicter verbalement les faits essentiels du service.", correct: false, feedback: "Séduisant : le message arrive immédiatement à la personne concernée. Mais une information orale peut être oubliée ou mal comprise pendant la relève." },
          { text: "Noter les faits sur un brouillon personnel, sans les intégrer au dossier de liaison.", correct: false, feedback: "Séduisant : tu gardes une aide mémoire pour toi et pour le service. Mais un document personnel n'est pas accessible à l'équipe qui te succède." },
          { text: "Ajouter les informations au mot du collègue, en complétant son texte au même endroit.", correct: false, feedback: "Séduisant : tu exploites une trace déjà commencée au lieu d'en créer une nouvelle. Mais tu mélanges deux écritures sans date ni auteur identifiable pour le relais." }
        ] },
      {
        q: "Que doit contenir ta transmission pour le relais de nuit ?",
        choices: [
          { text: "Les faits datés, les actions menées et les points à suivre pendant la nuit.", correct: true, feedback: "Juste : tu donnes à l'équipe de quoi assurer la continuité en toute sécurité. Une liste des seules tâches faites était plus simple, mais elle laisse de côté les points à surveiller." },
          { text: "La liste des seules tâches accomplies au cours de la journée, sans les points à suivre.", correct: false, feedback: "Séduisant : tu rédiges un inventaire clair de ton activité. Mais le relais a surtout besoin des situations encore ouvertes et des surveillances à poursuivre." },
          { text: "Le récit détaillé des conversations avec les familles, sans sélection des faits utiles.", correct: false, feedback: "Séduisant : tu rapportes tout ce qui s'est dit pour ne rien perdre. Mais le relais se noie dans des détails et ne repère pas l'essentiel à surveiller." },
          { text: "Uniquement les incidents non résolus, sans rappeler les actions correctives déjà engagées.", correct: false, feedback: "Séduisant : tu mets en avant ce qui reste à gérer pendant la nuit. Mais l'équipe doit aussi savoir ce qui a déjà été fait pour ne pas le refaire." }
        ] }
    ],
    bilan: "Tu as arbitré entre la rapidité du départ et la fiabilité de la transmission. Point fort : tu as gardé une trace écrite exploitable pour le relais. À retravailler : la saisie différée dans l'outil numérique dès son rétablissement."
  },
  {
    id: "S96", bloc: "B3", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C3.2","C3.3"],
    titre: "Transmission sous pression au centre de jour",
    description: "À 10 h 40, au centre d'accueil de jour, la fille de Martine arrive sans prévenir et veut savoir pourquoi sa mère refuse l'atelier. Paul part accompagner un autre résident à un rendez-vous et te laisse le cahier de transmission à compléter avant 11 h, alors que trois dossiers numériques attendent encore ta validation.",
    hints: ["Indice 1 : la famille a droit à une écoute, pas à un avis clinique non validé.","Indice 2 : une transmission utile distingue l'urgence du reste.","Indice 3 : le cahier et la relève orale se complètent, ils ne se remplacent pas."],
    variantes: [
      { titre: "Variante — une consigne contradictoire", description: "La responsable te demande de terminer les trois dossiers avant de répondre à la famille, tandis que Martine attend toujours une réponse." },
      { titre: "Variante — une information manquante", description: "Le cahier de la veille est illisible sur le refus de Martine : tu dois transmettre sans savoir ce qui s'est passé avant ton arrivée." }
    ],
    steps: [
      {
        q: "La fille de Martine réclame une explication immédiate : que lui réponds-tu ?",
        choices: [
          { text: "Je l'écoute, je note sa demande et je préviens l'infirmière avant de donner une information sur l'état de sa mère.", correct: true, feedback: "Juste : tu réserves à l'infirmière l'information clinique tout en traitant la demande de la famille, ce qu'attend la compétence de transmission (C3.2)." },
          { text: "Je lui raconte ce que j'ai observé ce matin pour la rassurer sans attendre l'avis de l'infirmière présente.", correct: false, feedback: "Séduisant : répondre vite et rassurer les proches est une vraie préoccupation. Mais tu transmets un avis non validé et tu franchis le cadre de ta fonction." },
          { text: "Je l'invite à lire le cahier de transmission où tous les faits de la matinée sont déjà consignés par l'équipe.", correct: false, feedback: "Séduisant : le cahier est l'outil de référence et tu évites une réponse improvisée. Mais des notes internes ne sont pas un message adapté à une famille." },
          { text: "Je lui propose de patienter et je demande à Paul, déjà en route pour son rendez-vous, de lui répondre à ma place.", correct: false, feedback: "Séduisant : déléguer à un collègue peut sembler plus légitime. Mais Paul est parti et n'a pas les éléments, la demande reste sans réponse." }
        ] },
      {
        q: "Paul est parti ; comment compléter le cahier avant 11 h ?",
        choices: [
          { text: "Je consigne d'abord les faits utiles à la sécurité, datés et précis, puis je renvoie les dossiers moins urgents après la relève.", correct: true, feedback: "Juste : tu hiérarchises selon le risque et tu produis une trace datée et exploitable, au service de la qualité et de la prévention (C3.3)." },
          { text: "Je recopie intégralement les trois dossiers du logiciel dans le cahier pour ne rien perdre de l'information du service.", correct: false, feedback: "Séduisant : l'exhaustivité rassure et évite l'oubli. Mais tu doubles la saisie et tu retiens l'attention sur des éléments sans urgence." },
          { text: "J'attends le retour de Paul pour qu'il relise ce que j'ai écrit et valide chaque ligne du cahier de transmission.", correct: false, feedback: "Séduisant : la validation par un collègue est une garantie de qualité. Mais l'échéance de 11 h sera dépassée et la relève partira sans information." },
          { text: "Je me limite au refus de Martine, seul événement qui me semble devoir être signalé à la collègue de relève.", correct: false, feedback: "Séduisant : choisir un fait marquant paraît être une priorisation. Mais tu écartes des informations nécessaires à la continuité des soins." }
        ] },
      {
        q: "À 11 h, la relève prend le service : comment assures-tu la continuité ?",
        choices: [
          { text: "Je fais une transmission orale courte appuyée sur le cahier et je signale les points de vigilance à surveiller pendant l'après-midi.", correct: true, feedback: "Juste : l'oral et l'écrit se complètent, et les points de vigilance protègent la personne, ce que demandent les deux compétences mobilisées." },
          { text: "Je laisse le cahier à jour sur le bureau et je rejoins l'atelier où les résidents m'attendent déjà depuis un moment.", correct: false, feedback: "Séduisant : le cahier est complet, donc la transmission semble faite. Mais sans échange oral, la relève ne sait pas ce qui compte le plus." },
          { text: "Je demande à la collègue de consulter elle-même les trois dossiers dans le logiciel, jugés plus complets que le cahier.", correct: false, feedback: "Séduisant : l'outil numérique contient l'historique et évite un résumé partial. Mais la lire prend du temps et ne remplace pas un point de vigilance." },
          { text: "Je résume seulement les activités réalisées ce matin, sans évoquer les incidents ni les refus de participation des résidents.", correct: false, feedback: "Séduisant : un bilan positif donne une image rassurante du service. Mais tu masques les éléments qui exposent la personne à un risque." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'empressement de la famille et la rigueur de la transmission, puis entre l'exhaustivité du cahier et l'urgence des faits. Point fort : tu as distingué l'information clinique de l'écoute. À retravailler : rendre la relève orale plus concise et datée."
  },
  {
    id: "S97", bloc: "B3", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C3.1","C3.3"],
    titre: "La sonnette muette et le cercle qualité",
    description: "En réunion qualité, à la résidence Les Tilleuls, l'infirmière coordinatrice évoque un incident sans gravité : la sonnette de la chambre 12 n'a pas sonné cette nuit et madame Leroi a attendu une heure. Le collègue de nuit, gêné, propose de corriger le dossier sans rien signaler. La responsable qualité te demande ton avis devant toute l'équipe.",
    hints: ["Indice 1 : un événement sans conséquence peut encore révéler un risque.","Indice 2 : la démarche qualité protège la personne, pas la réputation du service.","Indice 3 : signaler n'est pas accuser, le ton et le canal comptent aussi."],
    variantes: [
      { titre: "Variante — un collègue s'oppose", description: "Le collègue de nuit maintient que le dossier est déjà corrigé et refuse que l'événement soit inscrit au registre des incidents." },
      { titre: "Variante — une famille informée", description: "La fille de madame Leroi a déjà appris l'attente d'une heure et demande pourquoi personne ne l'a prévenue." }
    ],
    steps: [
      {
        q: "L'infirmière propose de classer l'événement sans suite : que défends-tu ?",
        choices: [
          { text: "Je demande l'inscription de l'événement au registre des incidents, même sans conséquence, afin d'analyser la cause réelle.", correct: true, feedback: "Juste : un événement indésirable sans dommage doit remonter pour analyser la cause, c'est le cœur de la démarche qualité (C3.3)." },
          { text: "Je suis l'avis de l'infirmière pour éviter de transformer un fait isolé en procédure lourde pour le service.", correct: false, feedback: "Séduisant : la proportionnalité est légitime et évite la paperasse. Mais l'absence de conséquence ne prouve pas l'absence de risque." },
          { text: "Je propose d'en parler seulement au collègue concerné, en privé, pour ne pas l'exposer devant l'équipe réunie.", correct: false, feedback: "Séduisant : protéger un collègue est une marque de solidarité. Mais le signalement collectif est indispensable pour traiter la cause du dysfonctionnement." },
          { text: "Je demande d'abord une vérification technique de la sonnette avant tout signalement écrit dans le registre du service.", correct: false, feedback: "Séduisant : comprendre la panne est utile et rassure. Mais attendre le diagnostic retarde la traçabilité de l'événement." }
        ] },
      {
        q: "Le collègue de nuit se sent accusé : comment garder une posture professionnelle ?",
        choices: [
          { text: "Je décris les faits sans nommer de coupable et je rappelle que le but est d'éviter que cela se reproduise.", correct: true, feedback: "Juste : tu dissocies la personne de l'événement et tu restes dans une posture professionnelle adaptée à l'équipe (C3.1)." },
          { text: "Je prends sa défense en expliquant à l'équipe que la charge de travail de la nuit explique largement l'oubli.", correct: false, feedback: "Séduisant : comprendre la charge de travail est humain et évite la stigmatisation. Mais justifier l'oubli détourne l'analyse de la cause du risque." },
          { text: "Je lui suggère de s'excuser devant le groupe pour clore l'incident et apaiser rapidement la réunion qualité.", correct: false, feedback: "Séduisant : une excuse peut désamorcer la gêne et rétablir le calme. Mais la culpabilité individuelle ne remplace pas l'examen collectif du problème." },
          { text: "Je demande à la responsable de mener l'entretien à sa place pour éviter tout échange direct entre collègues ce jour.", correct: false, feedback: "Séduisant : déléguer à l'encadrement paraît plus neutre et protège la relation. Mais tu te prives d'un échange professionnel direct et constructif." }
        ] },
      {
        q: "La réunion se termine : quelle suite donnes-tu à ce signalement ?",
        choices: [
          { text: "Je vérifie que l'action corrective est inscrite, datée et confiée à une personne, puis je relance son suivi dans la semaine.", correct: true, feedback: "Juste : une démarche qualité n'aboutit que si l'action est tracée, responsabilisée et suivie, ce que vérifie la compétence C3.3." },
          { text: "Je considère le dossier clos puisque la sonnette a été réparée dans la matinée par le technicien du service.", correct: false, feedback: "Séduisant : la réparation supprime le défaut visible et rassure. Mais sans vérification du suivi, le risque peut se reproduire ailleurs." },
          { text: "Je prépare un compte rendu détaillé pour la direction, sans informer l'équipe de nuit des conclusions de la réunion.", correct: false, feedback: "Séduisant : tracer vers la hiérarchie est nécessaire et valorise le travail. Mais l'équipe concernée reste sans retour sur l'action à mener." },
          { text: "J'attends le prochain cercle qualité pour reparler de l'incident et décider ensemble d'une action corrective adaptée.", correct: false, feedback: "Séduisant : réexaminer en équipe garantit une décision partagée. Mais reporter le suivi laisse le risque installer jusqu'à la prochaine séance." }
        ] }
    ],
    bilan: "Tu as arbitré entre la protection de l'image du service et l'exigence de la démarche qualité, puis entre la gêne du collègue et la parole à l'équipe. Point fort : tu as séparé les faits des personnes. À retravailler : faire aboutir l'action corrective dans un délai court."
  },
  {
    id: "S98", bloc: "B3", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C3.2","C3.5"],
    titre: "Les premiers pas de Nadia au centre",
    description: "Nadia, stagiaire de première année, arrive à 9 h au centre d'accueil. L'éducatrice propose de l'emmener immédiatement accompagner monsieur Perrin à la toilette, alors que le tour des chambres et la lecture du cahier de transmission ne sont pas encore faits. Nadia, nerveuse, demande à ouvrir les dossiers sur l'ordinateur partagé pour être prête.",
    hints: ["Indice 1 : l'observation est formatrice, mais elle a besoin d'un cadre.","Indice 2 : l'accès aux dossiers dépend d'un profil et d'une finalité.","Indice 3 : valider une trace, c'est aussi vérifier ce qui a été compris."],
    variantes: [
      { titre: "Variante — une consigne pressée", description: "L'éducatrice doit partir à 9 h 30 et demande que le stagiaire participe à la toilette avant son départ." },
      { titre: "Variante — une demande excessive", description: "Nadia veut photographier les fiches de soins avec son téléphone pour les relire tranquillement ce soir." }
    ],
    steps: [
      {
        q: "Comment organiser cette première matinée avec Nadia ?",
        choices: [
          { text: "Je fais d'abord le tour des chambres avec elle, puis je lui explique le cahier avant toute participation à un soin.", correct: true, feedback: "Juste : tu donnes au stagiaire le contexte et les repères avant l'action, ce que demande l'accompagnement des stagiaires (C3.5)." },
          { text: "Je l'emmène tout de suite à la toilette avec l'éducatrice pour la mettre en situation réelle dès sa première matinée.", correct: false, feedback: "Séduisant : la mise en situation est formatrice et motive le stagiaire. Mais sans repères, Nadia risque d'agir sans comprendre le projet de la personne." },
          { text: "Je lui demande de lire seule le cahier de transmission pendant que je prépare les chambres avec l'éducatrice.", correct: false, feedback: "Séduisant : la lecture du cahier est une bonne première étape. Mais la laisser seule sans explication ne lui donne pas vraiment ses repères." },
          { text: "Je la laisse suivre l'éducatrice et je rattrape le tour des chambres après le déjeuner, avec le reste de l'équipe.", correct: false, feedback: "Séduisant : le tour peut être décalé sans danger apparent. Mais tu prives Nadia du contexte dont elle a besoin pour interpréter ce qu'elle voit." }
        ] },
      {
        q: "Nadia veut ouvrir les dossiers sur l'ordinateur partagé : que lui réponds-tu ?",
        choices: [
          { text: "J'explique que l'accès dépend du profil et de la finalité, puis je lui montre seulement les fiches utiles à sa mission.", correct: true, feedback: "Juste : tu expliques la règle d'accès et tu limites la consultation à ce qui sert sa mission, ce que demande la transmission (C3.2)." },
          { text: "Je lui donne mon identifiant pour qu'elle puisse consulter les dossiers tranquillement pendant la matinée entière.", correct: false, feedback: "Séduisant : partager ton identifiant semble pratique et évite d'attendre un compte. Mais tu casses la traçabilité des accès aux données de santé." },
          { text: "Je refuse tout accès aux dossiers et je lui demande de se contenter du cahier papier pendant tout son stage au centre.", correct: false, feedback: "Séduisant : le refus protège la confidentialité et simplifie la règle. Mais une interdiction sans explication ne lui apprend rien sur les outils." },
          { text: "Je l'invite à noter ce qu'elle observe dans un carnet personnel, sans ouvrir l'ordinateur du poste de transmissions.", correct: false, feedback: "Séduisant : le carnet permet de retenir sans exposer les dossiers. Mais un carnet personnel échappe au circuit de transmission du service." }
        ] },
      {
        q: "En fin de service, que fais-tu de sa fiche d'observation ?",
        choices: [
          { text: "Je relis sa fiche avec elle, je corrige les termes imprécis et je la date avant de la transmettre au tuteur désigné.", correct: true, feedback: "Juste : relire avec le stagiaire et dater la trace allie formation et transmission fiable, au croisement des compétences C3.5 et C3.2." },
          { text: "Je signe sa fiche sans la relire pour valoriser sa première journée devant l'équipe réunie à la fin du service.", correct: false, feedback: "Séduisant : valoriser le stagiaire encourage son engagement. Mais valider sans vérifier laisse passer des termes imprécis dans une trace écrite." },
          { text: "Je lui demande de refaire sa fiche seule ce soir et de la déposer demain dans le cahier de transmission du service.", correct: false, feedback: "Séduisant : lui laisser refaire construit son autonomie. Mais sans retour immédiat, elle reproduira les mêmes approximations demain." },
          { text: "Je garde sa fiche pour la compléter moi-même et la transmettre avec mon propre compte rendu à la responsable.", correct: false, feedback: "Séduisant : reprendre la fiche garantit un document propre. Mais tu prives Nadia du retour qui lui permet de progresser." }
        ] }
    ],
    bilan: "Tu as arbitré entre la mise en situation immédiate et le cadre nécessaire à un stagiaire, puis entre l'accès aux dossiers et la confidentialité. Point fort : tu as expliqué le pourquoi des règles. À retravailler : laisser Nadia formuler elle-même ce qu'elle a compris."
  },
  {
    id: "S99", bloc: "B3", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C3.1","C3.2"],
    titre: "La chute sans conséquence apparente",
    description: "À 7 h 30, à la résidence, monsieur Garnier a glissé en sortant de sa chambre. Il affirme que ça va, mais il est sous anticoagulant. L'aide-soignante présente l'a déjà relevé et estime inutile de prévenir l'infirmière. Sa fille arrive à 8 h et demande des nouvelles ; le cahier de transmission doit être remis à 8 h 15.",
    hints: ["Indice 1 : l'absence de douleur immédiate ne supprime pas le risque.","Indice 2 : un signalement va au bon interlocuteur, au bon moment.","Indice 3 : une transmission dit ce qui a été fait et ce qui reste à vérifier."],
    variantes: [
      { titre: "Variante — le résident refuse", description: "Monsieur Garnier refuse formellement qu'on appelle l'infirmière, par peur d'être hospitalisé." },
      { titre: "Variante — une consigne ambiguë", description: "L'infirmière de nuit a laissé un mot disant surveillance renforcée, sans autre précision dans le cahier." }
    ],
    steps: [
      {
        q: "L'aide-soignante veut classer la chute : quelle est ta décision ?",
        choices: [
          { text: "Je préviens immédiatement l'infirmière en décrivant les faits et le traitement anticoagulant, sans attendre une douleur.", correct: true, feedback: "Juste : tu signales sans délai au professionnel compétent en donnant les éléments de risque, posture professionnelle et transmission (C3.1, C3.2)." },
          { text: "Je respecte l'avis de l'aide-soignante et je me contente de noter la chute dans le cahier pour la relève de 8 h 15.", correct: false, feedback: "Séduisant : faire confiance à un collègue présent évite la surenchère. Mais le traitement anticoagulant exige un avis immédiat, pas une simple note." },
          { text: "J'attends 8 h 15 et la relève pour signaler la chute à l'équipe qui prend le service dans le couloir.", correct: false, feedback: "Séduisant : regrouper les informations au changement de service est une habitude pratique. Mais ce délai retarde l'examen d'un résident à risque." },
          { text: "Je demande d'abord à monsieur Garnier de marcher quelques pas pour vérifier qu'il n'a vraiment rien après sa chute.", correct: false, feedback: "Séduisant : tester la mobilité paraît rassurant et respecte son refus. Mais on ne mobilise pas une personne avant l'évaluation de l'infirmière." }
        ] },
      {
        q: "Comment consigner l'événement dans le cahier de transmission ?",
        choices: [
          { text: "J'écris l'heure, le lieu, l'état observé, le traitement et le signalement fait à l'infirmière, avec ce qui reste à surveiller.", correct: true, feedback: "Juste : une transmission exploitable distingue les faits, l'action réalisée et la surveillance à venir, ce qu'exige la compétence C3.2." },
          { text: "J'écris simplement une chute sans gravité avec un résident rassuré, pour ne pas inquiéter inutilement la relève.", correct: false, feedback: "Séduisant : une formulation courte évite l'alarme et va à l'essentiel. Mais elle gomme le risque réel et prive la relève d'éléments utiles." },
          { text: "Je laisse la ligne à l'aide-soignante, puisqu'elle a vu la chute et qu'elle a elle-même relevé le résident.", correct: false, feedback: "Séduisant : confier la trace à la personne qui a agi respecte les rôles. Mais tu perds le signalement fait à l'infirmière et la surveillance à prévoir." },
          { text: "J'enregistre la chute dans le dossier numérique sans prévenir oralement l'équipe qui arrive au petit matin.", correct: false, feedback: "Séduisant : le dossier numérique garde une trace durable et consultable. Mais sans signal oral, l'urgence peut passer inaperçue au changement de service." }
        ] },
      {
        q: "La fille arrive à 8 h : que fais-tu de sa demande ?",
        choices: [
          { text: "Je l'écoute, je lui confirme que l'infirmière a été prévenue et je laisse la soignante référente l'informer ensuite.", correct: true, feedback: "Juste : tu accueilles la famille sans anticiper un avis clinique et tu orientes vers la personne habilitée, dans une posture professionnelle (C3.1)." },
          { text: "Je lui décris la chute en détail pour la rassurer, avant même que l'infirmière ait pu examiner son père ce matin.", correct: false, feedback: "Séduisant : parler franchement à la famille instaure la confiance. Mais tu communiques des faits non encore évalués, qui peuvent inquiéter à tort." },
          { text: "Je lui dis que son père va bien, en m'appuyant uniquement sur ce qu'il a lui-même déclaré après sa chute.", correct: false, feedback: "Séduisant : relayer les paroles du résident respecte son point de vue. Mais tu prends pour vraie une affirmation qui ne remplace pas un examen." },
          { text: "Je l'invite à attendre la visite du médecin, sans lui expliquer pourquoi l'infirmière a été appelée ce matin.", correct: false, feedback: "Séduisant : respecter le temps du médecin évite une information incomplète. Mais le silence nourrit l'inquiétude et ne prend pas en compte sa demande." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'avis rassurant du collègue et le risque lié au traitement, puis entre une note brève et une transmission exploitable. Point fort : tu as signalé au bon interlocuteur. À retravailler : distinguer ce qui est observé de ce qui est seulement déduit."
  },
  {
    id: "S100", bloc: "B3", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C3.2","C3.3"],
    titre: "Le logiciel en panne et la tentation du raccourci",
    description: "À 16 h 20, le logiciel de transmission du centre est indisponible depuis une heure. L'éducatrice propose d'envoyer les nouvelles de la journée à la famille par sa messagerie personnelle, et un collègue veut noter les soins sur des papiers volants avant de les saisir demain. La traçabilité doit être assurée avant 17 h.",
    hints: ["Indice 1 : un outil défaillant ne dispense pas de la traçabilité.","Indice 2 : le canal choisi est aussi une question de confidentialité.","Indice 3 : une procédure de secours doit être connue, datée et testée."],
    variantes: [
      { titre: "Variante — une pièce jointe hâtive", description: "Un collègue propose d'envoyer une photo du cahier de transmission au groupe de messagerie du service." },
      { titre: "Variante — un mot de passe partagé", description: "Le mot de passe du logiciel est noté sur un papier près du poste et tout le monde l'utilise sans distinction." }
    ],
    steps: [
      {
        q: "L'éducatrice veut écrire à la famille sur sa messagerie personnelle : que fais-tu ?",
        choices: [
          { text: "Je propose d'attendre le canal officiel ou un message validé par la responsable, sans détail de santé dans le texte.", correct: true, feedback: "Juste : tu protèges les données en choisissant un canal maîtrisé et une information limitée, ce que demande la transmission (C3.2)." },
          { text: "J'envoie le message depuis mon téléphone pour ne pas faire attendre plus longtemps la famille inquiète.", correct: false, feedback: "Séduisant : la réactivité rassure les proches et évite un retard de réponse. Mais un message personnel échappe au contrôle du service." },
          { text: "Je demande à l'éducatrice d'écrire le message et de le faire valider par la famille elle-même avant l'envoi.", correct: false, feedback: "Séduisant : associer la famille paraît garantir l'acceptation du message. Mais elle ne peut pas valider une information qu'elle ne détient pas." },
          { text: "Je suggère d'appeler la famille pour donner les nouvelles oralement, sans laisser de trace écrite de l'échange.", correct: false, feedback: "Séduisant : l'appel est direct et rassurant quand l'outil est en panne. Mais l'absence de trace empêche de prouver ce qui a été dit." }
        ] },
      {
        q: "Les soins sont notés sur des papiers volants : comment sécuriser la transmission ?",
        choices: [
          { text: "Je regroupe les notes sur une feuille datée et signée, puis je la fais saisir dès le retour du logiciel du service.", correct: true, feedback: "Juste : tu crées une trace datée et identifiée, puis tu prévois la bascule dans l'outil, ce qui sécurise la démarche qualité (C3.3)." },
          { text: "Je laisse les papiers sur le poste : ils seront saisis demain par l'équipe de jour, qui connaît le fonctionnement du service.", correct: false, feedback: "Séduisant : différer la saisie évite de perdre du temps pendant la panne. Mais des feuilles non datées peuvent être égarées ou mal attribuées." },
          { text: "Je photographie les papiers avec mon téléphone et je les envoie au collègue de nuit pour qu'il les recopie ce soir.", correct: false, feedback: "Séduisant : la photo garde une copie immédiate et aide la relève. Mais elle stocke des données de santé sur un appareil personnel." },
          { text: "Je recopie les notes dans le cahier papier, sans mentionner l'heure ni le nom du soignant qui a effectué les soins.", correct: false, feedback: "Séduisant : le cahier papier reste lisible pour tous, même sans logiciel. Mais une trace sans heure ni auteur perd une partie de sa valeur." }
        ] },
      {
        q: "La panne se prolonge : quelle prévention pour la prochaine fois ?",
        choices: [
          { text: "Je signale la panne dans le registre des incidents et je propose une procédure de secours écrite et testée avec l'équipe.", correct: true, feedback: "Juste : tu alimentes le retour d'expérience et tu prépares une procédure testée, exactement ce qu'attend la prévention des risques (C3.3)." },
          { text: "Je considère que la panne est purement technique et ne relève pas de la démarche qualité menée dans le service.", correct: false, feedback: "Séduisant : séparer l'informatique du soin paraît raisonnable. Mais une panne qui bloque la transmission est bien un risque pour la personne." },
          { text: "Je propose d'acheter une tablette de secours sans définir qui saisit les données ni comment on les vérifie ensuite.", correct: false, feedback: "Séduisant : un appareil de remplacement apporte une réponse concrète et rapide. Mais sans règle d'usage, le risque se déplace simplement." },
          { text: "J'attends le rapport du prestataire pour écrire quoi que ce soit dans le registre des incidents du service.", correct: false, feedback: "Séduisant : attendre l'analyse externe évite une conclusion hâtive. Mais le retard empêche l'équipe de tirer parti de l'événement." }
        ] }
    ],
    bilan: "Tu as arbitré entre la rapidité du message et la protection des données, puis entre l'improvisation et une procédure de secours. Point fort : tu as gardé une trace datée. À retravailler : anticiper la panne avant qu'elle ne bloque la relève."
  },
  {
    id: "S101", bloc: "B3", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C3.1","C3.3"],
    titre: "La consigne contradictoire de Karim",
    description: "À la résidence, Karim affirme que la responsable a supprimé la désinfection du fauteuil de la salle d'activité entre deux résidents pour gagner du temps. La procédure affichée au poste dit le contraire. Deux collègues accusent du retard et la famille de madame Bertin arrive dans dix minutes.",
    hints: ["Indice 1 : une consigne orale ambiguë se vérifie, elle ne s'improvise pas.","Indice 2 : la prévention des risques ne se négocie pas au regard du retard.","Indice 3 : on peut dire non sans discréditer le collègue."],
    variantes: [
      { titre: "Variante — la responsable est joignable", description: "Tu peux appeler la responsable avant l'arrivée de la famille, mais Karim trouve cette vérification exagérée." },
      { titre: "Variante — un résident pressé", description: "Madame Bertin veut rejoindre l'atelier tout de suite et Karim propose de passer outre la désinfection du fauteuil." }
    ],
    steps: [
      {
        q: "Karim te demande d'aller plus vite : comment réagis-tu ?",
        choices: [
          { text: "Je lui demande précisément qui a décidé et je vérifie la procédure affichée avant de modifier ma pratique.", correct: true, feedback: "Juste : tu vérifies la source de la consigne avant d'agir, ce qui relève d'une posture professionnelle adaptée et de la prévention (C3.1, C3.3)." },
          { text: "Je suis sa consigne pour ne pas le contredire devant les collègues qui sont déjà en retard dans les chambres.", correct: false, feedback: "Séduisant : éviter une contradiction publique préserve l'ambiance de l'équipe. Mais appliquer une consigne non vérifiée expose les résidents." },
          { text: "Je lui réponds que la procédure prime, sans chercher à comprendre d'où vient son information ni pourquoi il l'a dite.", correct: false, feedback: "Séduisant : affirmer la règle est clair et protège la personne. Mais refuser l'échange bloque la compréhension et crispe la relation." },
          { text: "Je propose de lui laisser le fauteuil et de prendre une autre salle pour l'atelier, afin de ne pas le ralentir.", correct: false, feedback: "Séduisant : changer de salle règle le problème sans affrontement. Mais tu contournes la consigne au lieu de vérifier son origine." }
        ] },
      {
        q: "La vérification donne tort à Karim : comment lui en parles-tu ?",
        choices: [
          { text: "Je lui explique calmement ce que j'ai vérifié et je cherche avec lui une organisation qui respecte la procédure.", correct: true, feedback: "Juste : tu communicates le désaccord sur les faits et tu cherches une solution partagée, posture attendue dans le travail en équipe (C3.1)." },
          { text: "Je préviens toute l'équipe qu'il a inventé une consigne, pour que personne ne suive son indication par la suite.", correct: false, feedback: "Séduisant : alerter le groupe évite que l'erreur se propage. Mais accuser publiquement détériore la relation et bloque l'apprentissage collectif." },
          { text: "Je note son nom dans le cahier de transmission pour que la responsable puisse le sanctionner dès son retour.", correct: false, feedback: "Séduisant : la trace écrite est habituelle dans le service et implique l'encadrement. Mais le cahier sert à transmettre des soins, pas à sanctionner." },
          { text: "Je n'en parle plus et je fais le nécessaire sans rien dire, pour éviter un conflit devant les autres collègues.", correct: false, feedback: "Séduisant : garder le silence maintient la paix et évite l'escalade. Mais Karim garde sa fausse consigne et pourra la répéter." }
        ] },
      {
        q: "La famille arrive : comment gérer ce moment sans perdre le fil ?",
        choices: [
          { text: "J'accueille la famille, je fais respecter la désinfection avant l'atelier et j'explique le délai sans blâmer Karim.", correct: true, feedback: "Juste : tu combines l'accueil, le respect de la procédure et le respect du collègue, arbitrage demandé par les compétences C3.1 et C3.3." },
          { text: "Je lance l'atelier immédiatement pour ne pas faire attendre la famille, qui a déjà un temps de visite limité.", correct: false, feedback: "Séduisant : éviter l'attente respecte le temps de la famille. Mais tu sacrifiez la désinfection, donc la prévention des risques." },
          { text: "Je demande à Karim d'accueillir la famille pendant que je termine la désinfection du fauteuil avant l'atelier.", correct: false, feedback: "Séduisant : répartir les rôles permet de gagner du temps sans rien lâcher. Mais tu laisses Karim présenter une situation dont il a une lecture fausse." },
          { text: "Je raconte à la famille le désaccord pour justifier le retard pris dans le démarrage de l'atelier ce jour.", correct: false, feedback: "Séduisant : expliquer le retard montre de la transparence. Mais un désaccord interne ne regarde pas la famille et nuit à l'image du service." }
        ] }
    ],
    bilan: "Tu as arbitré entre la solidarité entre collègues et le respect de la procédure de prévention. Point fort : tu as vérifié avant de contredire. À retravailler : formuler le désaccord sans laisser de doute sur la règle à suivre."
  },
  {
    id: "S102", bloc: "B3", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C3.2","C3.1"],
    titre: "Trois réservations pour un même après-midi",
    description: "Au centre de jour, la responsable doit partir à 14 h et te demande de coordonner l'après-midi. Trois activités sont prévues pour madame Clair, qui refuse la sortie à 15 h, tandis que Léa a déjà deux accompagnements et que Samir est disponible. La famille a fait savoir qu'elle viendrait finalement à 16 h.",
    hints: ["Indice 1 : coordonner, c'est arbitrer entre le choix de la personne et les disponibilités.","Indice 2 : une modification de planning se transmet à toute l'équipe concernée.","Indice 3 : le refus de la résidente est une information, pas une contrainte à contourner."],
    variantes: [
      { titre: "Variante — une collègue surchargée", description: "Léa refuse de prendre une troisième activité, estimant qu'elle n'a pas le temps de faire ses transmissions." },
      { titre: "Variante — un imprévu de transport", description: "Le véhicule prévu pour la sortie est en panne et la sortie doit être annulée dès 14 h 30." }
    ],
    steps: [
      {
        q: "Comment répartir les accompagnements de l'après-midi ?",
        choices: [
          { text: "Je demande à madame Clair ce qu'elle souhaite garder, puis je répartis les autres activités selon les disponibilités.", correct: true, feedback: "Juste : tu fais remonter le choix de la personne et tu répartis selon les présents, ce qu'attend le travail en équipe (C3.1)." },
          { text: "Je conserve les trois activités au programme, puisqu'il a été validé par la responsable la veille pour l'après-midi.", correct: false, feedback: "Séduisant : respecter un planning validé évite l'improvisation. Mais il est incompatible avec le refus exprimé par madame Clair." },
          { text: "Je donne toutes les activités à Samir, puisqu'il est le seul membre de l'équipe à être libre à 14 h.", correct: false, feedback: "Séduisant : concentrer les activités sur une personne disponible simplifie l'organisation. Mais cela surcharge Samir et ignore l'avis de la résidente." },
          { text: "Je demande à Léa de garder ses deux accompagnements et d'ajouter la sortie de madame Clair à la dernière minute.", correct: false, feedback: "Séduisant : garder les soins déjà commencés limite les changements. Mais Léa est déjà chargée et la sortie est refusée." }
        ] },
      {
        q: "La famille annonce 16 h au lieu de 15 h : comment transmettre ?",
        choices: [
          { text: "Je préviens l'équipe et je note le nouveau créneau dans le cahier et le logiciel, en précisant qui a informé qui.", correct: true, feedback: "Juste : tu combines l'information orale et les deux outils de transmission, avec la traçabilité de la source (C3.2)." },
          { text: "Je note le changement sur un papier volant près du téléphone pour que la relève puisse le voir en arrivant.", correct: false, feedback: "Séduisant : un papier près du poste est visible immédiatement. Mais il n'est ni daté ni versé dans le circuit officiel du service." },
          { text: "J'attends d'avoir une confirmation écrite de la famille avant d'en parler à l'équipe réunie dans la salle.", correct: false, feedback: "Séduisant : exiger une confirmation évite de diffuser une rumeur. Mais l'équipe organise son après-midi sur une heure déjà fausse." },
          { text: "Je préviens seulement Léa, qui s'occupe de madame Clair depuis le matin et connaît bien ses habitudes.", correct: false, feedback: "Séduisant : informer la soignante la plus proche est utile et rapide. Mais Samir et la relève restent sans information sur le changement." }
        ] },
      {
        q: "La responsable revient à 17 h : que lui présentes-tu ?",
        choices: [
          { text: "Je lui fais un point court sur ce qui a été réorganisé, ce qui a été refusé et ce qui reste encore à valider.", correct: true, feedback: "Juste : ton point distingue décisions, refus et attentes, ce qui permet à l'encadrement de reprendre le fil avec l'équipe (C3.1, C3.2)." },
          { text: "Je lui laisse le cahier et le logiciel, où tout est tracé, sans faire de point oral à la fin du service.", correct: false, feedback: "Séduisant : les outils contiennent l'ensemble des éléments et évitent un discours redondant. Mais ils ne disent pas ce qui a coincé." },
          { text: "Je lui raconte surtout les difficultés de Léa pour qu'elle mesure la charge de travail supportée par l'équipe.", correct: false, feedback: "Séduisant : faire connaître la charge de l'équipe aide la responsable à arbitrer. Mais le suivi de madame Clair passe au second plan." },
          { text: "Je lui dis que l'après-midi s'est bien passé, sans évoquer le refus de sortie ni le changement d'heure.", correct: false, feedback: "Séduisant : un bilan positif rassure l'encadrement après son absence. Mais tu caches des décisions qui engagent la suite du projet." }
        ] }
    ],
    bilan: "Tu as arbitré entre le programme prévu et le choix de la résidente, puis entre l'économie de transmissions et l'information de toute l'équipe. Point fort : tu as fait remonter le refus. À retravailler : tracer précisément qui a décidé quoi."
  },
  {
    id: "S103", bloc: "B3", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C3.1","C3.2"],
    titre: "La synthèse en dix minutes",
    description: "À la résidence, la réunion de synthèse sur monsieur Dubois commence dans dix minutes. Le médecin réclame un résumé court, la fille du résident veut des exemples précis, et le dossier numérique est incomplet pour la semaine dernière. L'équipe compte sur toi pour présenter les éléments de transmission.",
    hints: ["Indice 1 : une synthèse n'est pas un rapport intégral.","Indice 2 : une donnée manquante se signale, elle ne se devine pas.","Indice 3 : le détail destiné à la famille relève de la soignante référente."],
    variantes: [
      { titre: "Variante — un désaccord d'équipe", description: "L'aide-soignante estime que tu présentes le résident trop favorablement, alors que le médecin veut des faits chiffrés." },
      { titre: "Variante — une pièce manquante", description: "Le compte rendu de la semaine dernière n'a jamais été validé et personne ne sait qui devait le faire." }
    ],
    steps: [
      {
        q: "Comment préparer ton intervention devant l'équipe ?",
        choices: [
          { text: "Je sélectionne les faits datés les plus utiles et je repère ceux qui manquent pour les signaler en séance.", correct: true, feedback: "Juste : tu construis une synthèse lisible et tu assumes la lacune du dossier, posture professionnelle et transmission (C3.1, C3.2)." },
          { text: "Je relis intégralement le dossier pour ne rien omettre, quitte à dépasser largement le temps imparti à la réunion.", correct: false, feedback: "Séduisant : l'exhaustivité évite le reproche d'avoir oublié un élément. Mais un rapport complet n'est pas une synthèse et bloque la séance." },
          { text: "Je prépare une synthèse uniquement positive pour ne pas inquiéter la fille du résident, qui sera présente.", correct: false, feedback: "Séduisant : ménager la famille est une attention réelle. Mais une présentation biaisée prive l'équipe des éléments utiles à la décision." },
          { text: "Je demande à l'aide-soignante de présenter à ma place, puisqu'elle connaît le résident depuis plus longtemps que moi.", correct: false, feedback: "Séduisant : s'appuyer sur la connaissance d'un collègue est pertinent. Mais tu évites une responsabilité de transmission qui t'a été confiée." }
        ] },
      {
        q: "Le médecin veut aller vite, la fille veut des détails : que proposes-tu ?",
        choices: [
          { text: "Je donne les faits essentiels au médecin et je renvoie la fille vers la soignante référente pour le détail.", correct: true, feedback: "Juste : tu réponds à chaque interlocuteur sur ce qui le concerne, sans empiéter sur le rôle de la soignante référente (C3.1)." },
          { text: "Je réponds à la fille en détail pour la rassurer, même si le médecin attend encore le résumé qu'il a demandé.", correct: false, feedback: "Séduisant : prendre le temps de la famille montre de l'attention. Mais tu retardes le médecin et tu donnes des détails hors de ton rôle." },
          { text: "Je coupe court à la fille au nom du temps, sans lui dire où elle pourra retrouver l'information plus tard.", correct: false, feedback: "Séduisant : respecter le temps de la réunion est nécessaire. Mais refuser sans orienter laisse la famille sans réponse et sans interlocuteur." },
          { text: "Je demande au médecin de répondre lui-même à la famille pour gagner du temps devant l'équipe réunie.", correct: false, feedback: "Séduisant : le médecin a l'autorité pour répondre et la réponse serait validée. Mais tu déplaces la charge sans préparer sa venue." }
        ] },
      {
        q: "Un élément de la semaine dernière manque : comment le traiter ?",
        choices: [
          { text: "Je le signale explicitement comme non renseigné et je propose une date et un responsable pour le compléter.", correct: true, feedback: "Juste : nommer la lacune et prévoir qui la comble maintient la fiabilité de la transmission dans le dossier (C3.2)." },
          { text: "Je le déduis des observations de la semaine précédente pour ne pas laisser de vide dans la synthèse du dossier.", correct: false, feedback: "Séduisant : combler par déduction rend le dossier plus lisible. Mais une déduction n'est pas une donnée observée et peut induire l'équipe en erreur." },
          { text: "J'écris que la semaine s'est bien passée pour ne pas laisser de vide apparent dans le dossier du résident.", correct: false, feedback: "Séduisant : une formulation positive évite d'éveiller l'inquiétude. Mais elle remplace une absence d'information par une affirmation inventée." },
          { text: "J'attends la prochaine synthèse pour compléter, en espérant que quelqu'un s'en chargera d'ici là dans l'équipe.", correct: false, feedback: "Séduisant : reporter permet de ne pas bloquer la séance en cours. Mais sans responsable désigné, la lacune risque de rester entière." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'exhaustivité du dossier et la clarté d'une synthèse, puis entre la demande du médecin et celle de la famille. Point fort : tu as nommé le manque. À retravailler : vérifier la complétude du dossier avant la séance."
  },
  {
    id: "S104", bloc: "B3", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C3.2","C3.3"],
    titre: "Deux soins à la même heure",
    description: "Au centre, le planning de 9 h prévoit l'accompagnement de madame Rolland pour sa toilette et celui de monsieur Sébire pour sa collation à 9 h 15. Les deux créneaux se chevauchent, la fille de madame Rolland demande un report, et le cahier mentionne une recommandation de l'équipe précédente que tu n'as pas encore lue.",
    hints: ["Indice 1 : un soin programmé se réorganise au regard de la personne, pas de l'horloge.","Indice 2 : une consigne non lue se cherche avant de décider.","Indice 3 : toute modification se trace pour la relève."],
    variantes: [
      { titre: "Variante — une collègue absente", description: "L'aide-soignante prévue pour la collation est absente et la responsable propose de reporter le soin de monsieur Sébire." },
      { titre: "Variante — une préférence contredite", description: "La fille de madame Rolland veut décaler la toilette, alors que le projet individualisé la fixe à 9 h." }
    ],
    steps: [
      {
        q: "Comment construire ton planning de matinée ?",
        choices: [
          { text: "Je lis d'abord la recommandation du cahier, puis j'échange avec l'équipe pour répartir les deux soins.", correct: true, feedback: "Juste : tu cherches l'information manquante avant de décider et tu coordonnes l'équipe, ce que demandent la transmission et la prévention (C3.2, C3.3)." },
          { text: "Je respecte l'ordre du planning affiché, qui a été validé par la responsable la veille au soir pour la matinée.", correct: false, feedback: "Séduisant : suivre un planning validé garantit la continuité. Mais il ignore la recommandation du cahier et le chevauchement réel." },
          { text: "Je commence par le soin le plus rapide pour être sûre d'être à l'heure aux deux rendez-vous de 9 h et 9 h 15.", correct: false, feedback: "Séduisant : optimiser le temps rassure quand deux soins se chevauchent. Mais la durée n'est pas le critère du projet de la personne." },
          { text: "Je demande à madame Rolland de choisir seule l'heure qui lui convient, sans consulter le reste de l'équipe présente.", correct: false, feedback: "Séduisant : laisser la personne décider respecte son autonomie. Mais sans accord de l'équipe, le soin de monsieur Sébire reste sans solution." }
        ] },
      {
        q: "La fille demande de reporter la toilette : que décides-tu ?",
        choices: [
          { text: "J'écoute la demande, je vérifie le projet individualisé et je propose un créneau compatible avec la collation.", correct: true, feedback: "Juste : tu confrontes le souhait de la famille au projet écrit et tu proposes une solution compatible, dans une logique de prévention (C3.3)." },
          { text: "J'accepte le report sans vérifier le dossier, pour respecter la parole de la famille qui connaît bien sa mère.", correct: false, feedback: "Séduisant : croire la famille valorise sa place auprès de la personne. Mais le projet individualisé peut fixer un soin à une heure précise." },
          { text: "Je refuse le report au motif que le projet individualisé fixe l'heure, sans donner d'explication à la fille.", correct: false, feedback: "Séduisant : s'appuyer sur le projet évite une décision arbitraire. Mais un refus sans échange ferme la discussion avec la famille." },
          { text: "Je laisse la responsable trancher à 9 h 30 et je garde le créneau initial jusque-là, quoi qu'il arrive.", correct: false, feedback: "Séduisant : remonter à l'encadrement est prudent quand les avis divergent. Mais tu laisses deux soins se chevaucher en attendant." }
        ] },
      {
        q: "Le planning a changé : comment assurer la traçabilité ?",
        choices: [
          { text: "Je note l'heure retenue, le motif du changement et le nom de la personne informée dans le cahier de transmission.", correct: true, feedback: "Juste : heure, motif et interlocuteur forment une trace complète pour la relève, ce que vise la compétence de transmission (C3.2)." },
          { text: "Je préviens oralement la relève et je considère que le cahier n'a pas besoin d'être modifié pour ce changement.", correct: false, feedback: "Séduisant : l'oral suffit souvent pour un ajustement simple. Mais sans trace écrite, la décision disparaît dès la fin du service." },
          { text: "J'écris seulement la nouvelle heure dans le logiciel, sans préciser pourquoi ni qui a demandé ce report de soin.", correct: false, feedback: "Séduisant : le logiciel est le support officiel et la nouvelle heure y est visible. Mais sans motif, la relève ne comprend pas le choix." },
          { text: "Je demande à la fille de noter elle-même le changement dans le cahier du service, en présence de l'équipe.", correct: false, feedback: "Séduisant : associer la famille à l'écriture montre de la transparence. Mais une transmission engage la responsabilité du professionnel." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'heure prévue et le souhait de la famille, puis entre la souplesse et la traçabilité de la décision. Point fort : tu as cherché la consigne manquante. À retravailler : expliciter le motif de chaque changement de planning."
  },
  {
    id: "S105", bloc: "B4", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C4.1","C4.2"],
    titre: "Sommeil des apprentis : analyser avant d'agir",
    description: "Au lycée professionnel, Mme Diallo, l'infirmière, te confie un atelier sur le sommeil pour douze élèves de 2de à 8 h. Le conseiller d'éducation insiste : son diaporama est prêt et validé. Pourtant, plusieurs élèves arrivent chaque matin épuisés. Comment procèdes-tu ?",
    hints: ["Écoute les élèves avant de choisir le contenu.","Conçois une action avec eux, pas pour eux.","Évalue l'effet et transmets le bilan."],
    variantes: [
      { titre: "Variante — le conseiller s'oppose", description: "Le conseiller juge l'écoute des élèves superflue et veut lancer son diaporama immédiatement devant la classe." },
      { titre: "Variante — contrainte de temps", description: "L'atelier est réduit à trente minutes et l'infirmière doit partir avant la fin de la séance." }
    ],
    steps: [
      {
        q: "Avant de concevoir l'atelier, comment identifies-tu le vrai besoin ?",
        choices: [
          { text: "Écouter les élèves et croiser leurs propos avec les observations de l'équipe éducative.", correct: true, feedback: "Juste : tu analyses le public avant de concevoir, en croisant les dires des élèves et le regard de l'équipe. Le diaporama tentait parce qu'il était prêt, mais il ne répondait pas au besoin réel." },
          { text: "Utiliser le diaporama du conseiller, déjà validé, pour démarrer sans attendre.", correct: false, feedback: "Séduisant : le support est prêt et fait gagner du temps. Mais l'utiliser sans vérifier les besoins des élèves revient à imposer un contenu qui peut passer à côté de leur problème de sommeil." },
          { text: "Laisser l'infirmière décider seule du thème, elle connaît très bien ce public.", correct: false, feedback: "Séduisant : l'infirmière a une vraie expertise et sa notation rassure. Mais déléguer toute l'analyse te prive de l'écoute directe des élèves et de ta propre lecture de la situation." },
          { text: "Reprendre un support d'un autre lycée, loué pour son efficacité très vantée ailleurs.", correct: false, feedback: "Séduisant : un support éprouvé ailleurs semble fiable et sécurise. Mais un public différent appelle une analyse adaptée : ce qui a marché ailleurs ne prouve rien ici." }
        ] },
      {
        q: "Comment conçois-tu l'action avec ce que tu as entendu ?",
        choices: [
          { text: "Bâtir un atelier participatif avec mises en situation, appuyé sur les mots des élèves.", correct: true, feedback: "Juste : tu conçois une action d'éducation à la santé en partant des besoins exprimés. La participation rend le contenu parlant pour les élèves, ce qu'un simple exposé n'aurait pas fait." },
          { text: "Commenter le diaporama du conseiller en ajoutant quelques explications supplémentaires.", correct: false, feedback: "Séduisant : conserver le travail du collègue entretient une bonne entente et fait gagner du temps. Mais ajouter quelques mots ne transforme pas un support conçu pour d'autres en action adaptée." },
          { text: "Laisser les élèves chercher leurs réponses sur Internet sans cadre ni consigne précise.", correct: false, feedback: "Séduisant : l'autonomie des élèves est un objectif louable et valorisant. Mais sans cadrage, la recherche dispersée ne garantit ni la justesse des contenus ni la construction d'un savoir partagé." },
          { text: "Réduire l'action à une brochure remise individuellement à chaque élève.", correct: false, feedback: "Séduisant : la brochure est simple, rapide et laisse une trace écrite. Mais une distribution solitaire ne crée pas d'échange et ne correspond pas à une action d'éducation à la santé réellement conduite." }
        ] },
      {
        q: "Une fois l'atelier terminé, quelle suite donnes-tu ?",
        choices: [
          { text: "Interroger les élèves, noter les changements observés et transmettre le bilan à l'équipe.", correct: true, feedback: "Juste : tu évalues l'action et transmets le bilan, ce qui permet à l'équipe de réajuster. Le nombre de présents ne disait rien de l'effet produit, alors que leur avis éclaire la suite." },
          { text: "Réutiliser le même diaporama pour la session suivante, sans rien modifier.", correct: false, feedback: "Séduisant : garder un support qui a servi rassure et évite de refaire le travail. Mais sans évaluation, tu reconduis ses faiblesses au lieu de les corriger pour la prochaine session." },
          { text: "Demander au seul conseiller s'il a trouvé l'atelier convaincant.", correct: false, feedback: "Séduisant : le regard du collègue est utile et son avis compte dans l'équipe. Mais à lui seul, il ne remplace pas le retour des élèves, seuls capables de dire ce qu'ils ont compris et changé." },
          { text: "Se contenter du nombre de présents comme preuve de la réussite.", correct: false, feedback: "Séduisant : la participation est un indicateur simple et facile à consigner dans un dossier. Mais être présent ne prouve ni la compréhension ni un changement de comportement durable." }
        ] }
    ],
    bilan: "Tu as arbitré entre le support clé en main et l'écoute du public avant de concevoir l'atelier. Point fort : tu as ancré l'action dans les besoins exprimés. À retravailler : rendre l'évaluation plus concrète en questionnant chaque élève."
  },
  {
    id: "S106", bloc: "B4", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C4.3"],
    titre: "Hydratation : un support accessible à tous",
    description: "Dans un centre d'accueil, Nora, la responsable, te demande un support sur l'hydratation pour quinze usagers dès cet après-midi. Elle veut imprimer une feuille rapidement. Tu remarques que plusieurs usagers lisent difficilement. Comment réagis-tu ?",
    hints: ["Identifie qui fréquente le centre.","Conçois un support accessible à tous.","Vérifie ensuite s'il est réellement utilisé."],
    variantes: [
      { titre: "Variante — imprimerie en panne", description: "L'imprimante tombe en panne une heure avant l'arrivée des usagers : le support papier prévu n'est plus possible." },
      { titre: "Variante — collègue réticent", description: "Un collègue estime qu'un support illustré fait trop enfantin et préfère un texte écrit dense, jugé plus sérieux." }
    ],
    steps: [
      {
        q: "Avant de créer le support, que vérifies-tu en priorité ?",
        choices: [
          { text: "Qui sont les usagers et ce qu'ils comprennent, pour adapter le fond et la forme.", correct: true, feedback: "Juste : tu analyses le public avant de concevoir, en tenant compte de la lecture difficile repérée. C'est ce qui permet de choisir un fond et une forme réellement accessibles." },
          { text: "Lancer l'impression tout de suite pour respecter l'heure demandée par Nora.", correct: false, feedback: "Séduisant : respecter le délai imposé par la responsable montre ton sens de l'organisation. Mais imprimer sans vérifier la compréhension produit un support que plusieurs usagers ne pourront pas lire." },
          { text: "Recopier le document d'un autre centre, jugé complet par la direction.", correct: false, feedback: "Séduisant : un document validé ailleurs donne un sentiment de sécurité et évite de rédiger. Mais son contenu et son niveau de lecture ne sont pas garantis pour les usagers de ce centre." },
          { text: "Photocopier le support de l'an dernier, déjà validé par l'équipe du centre.", correct: false, feedback: "Séduisant : réutiliser un support connu de l'équipe est rapide et rassurant. Mais l'an dernier, les usagers étaient peut-être différents, et rien ne dit qu'ils comprenaient ce texte." }
        ] },
      {
        q: "Comment conçois-tu ce support pour qu'il soit utile ?",
        choices: [
          { text: "Avec des pictogrammes et peu de mots, testés auprès de deux usagers avant diffusion.", correct: true, feedback: "Juste : tu conçois une action adaptée et tu la testes avant de la diffuser. Les pictogrammes compensent la lecture difficile, et l'essai auprès des usagers vérifie l'accessibilité réelle." },
          { text: "Avec un texte dense et complet, pour donner l'image d'un centre sérieux.", correct: false, feedback: "Séduisant : un texte élaboré peut sembler plus professionnel et rassurer la direction. Mais trop de mots excluent justement les usagers qui lisent difficilement, et l'image se dégrade." },
          { text: "En traduisant mot pour mot un document trouvé sur Internet, sans vérification.", correct: false, feedback: "Séduisant : trouver un document tout prêt fait gagner du temps et paraît fiable. Mais une traduction littérale garde le niveau de lecture d'origine et peut véhiculer des informations non vérifiées." },
          { text: "En laissant chaque éducateur inventer sa propre version pendant l'accueil.", correct: false, feedback: "Séduisant : l'initiative de l'équipe est précieuse et valorise chacun. Mais sans support commun, les messages divergent et les usagers reçoivent des consignes inégales selon l'éducateur." }
        ] },
      {
        q: "Comment vérifies-tu que l'action a été utile ?",
        choices: [
          { text: "Observer les usagers et leur demander ce qu'ils ont retenu, puis ajuster le support.", correct: true, feedback: "Juste : tu évalues l'action en observant et en écoutant, puis tu prévois un ajustement. C'est le retour des usagers qui dit si le support a vraiment été compris et utilisé." },
          { text: "Classer le support dans le dossier des actions réalisées sans autre vérification.", correct: false, feedback: "Séduisant : archiver la trace de l'action satisfait à la traçabilité demandée. Mais classer ne prouve pas que le support a été compris, et aucune amélioration ne sera possible." },
          { text: "Compter le nombre d'exemplaires imprimés comme indicateur de réussite.", correct: false, feedback: "Séduisant : le nombre d'exemplaires est un chiffre simple à relever et à reporter. Mais imprimer beaucoup ne dit rien de la lecture réelle ni de l'effet sur les habitudes d'hydratation." },
          { text: "Demander à la seule Nora si le support lui paraît bien fait.", correct: false, feedback: "Séduisant : l'avis de la responsable compte et elle a commandé le support. Mais son jugement ne remplace pas celui des usagers, qui sont les seuls à pouvoir dire s'ils ont compris." }
        ] }
    ],
    bilan: "Tu as arbitré entre la rapidité voulue par Nora et l'accessibilité du support pour les usagers. Point fort : tu as pensé à la forme autant qu'au fond. À retravailler : organiser un vrai retour des usagers pour guider l'ajustement."
  },
  {
    id: "S107", bloc: "B4", annee: "T", contexte: "structure", duree: "15 min", difficulte: 3,
    competences: ["C4.1","C4.3"],
    titre: "Nutrition en Terminale : animer et évaluer",
    description: "En Terminale, tu dois animer un atelier sur l'équilibre alimentaire pour vingt élèves. Le professeur de sciences souhaite un cours magistral, mais tu veux faire participer la classe. Une élève t'avertit à l'entrée qu'elle porte une allergie alimentaire. Comment gères-tu la situation ?",
    hints: ["Clarifie les attentes et les contraintes avant de commencer.","Intègre la contrainte allergie dans l'animation.","Évalue l'action avec des critères partagés."],
    variantes: [
      { titre: "Variante — allergie signalée tard", description: "L'allergie d'une élève n'est signalée qu'une fois l'atelier commencé, alors que des aliments sont déjà sur la table." },
      { titre: "Variante — professeur réticent", description: "Le professeur craint que l'animation participative ne soit pas sérieuse et demande un exposé structuré à la place." }
    ],
    steps: [
      {
        q: "Avant l'atelier, comment réunis-tu les informations utiles ?",
        choices: [
          { text: "Échanger avec l'équipe et les élèves pour cerner leurs habitudes et les contraintes.", correct: true, feedback: "Juste : tu analyses les besoins et les contraintes avant d'agir. Le souhait du professeur est entendu, mais le vécu des élèves et l'allergie signalée doivent aussi orienter l'action." },
          { text: "Suivre le programme du professeur sans questionner les élèves sur leurs besoins.", correct: false, feedback: "Séduisant : le programme est clair et le collègue attend une réponse rapide. Mais ignorer les habitudes des élèves et l'allergie annoncée prive l'action de tout ajustement nécessaire." },
          { text: "Copier le plan d'une animation vue l'an dernier dans une autre structure.", correct: false, feedback: "Séduisant : un plan déjà utilisé rassure et limite la préparation. Mais un autre public, avec une allergie particulière, exige une analyse nouvelle et non une reprise aveugle." },
          { text: "Laisser les élèves décider seuls du contenu, sans apport de ta part.", correct: false, feedback: "Séduisant : donner la parole aux élèves favorise leur engagement. Mais sans ton apport pédagogique, l'action perd sa visée d'éducation à la santé et peut véhiculer des idées fausses." }
        ] },
      {
        q: "Pendant l'animation, comment intégrer l'allergie signalée ?",
        choices: [
          { text: "Adapter les exemples et les aliments manipulés, en vérifiant avec l'élève concernée.", correct: true, feedback: "Juste : tu mets en œuvre l'action en intégrant la contrainte, sans exclure l'élève. Vérifier avec elle respecte sa sécurité tout en la maintenant dans le groupe." },
          { text: "Poursuivre le programme prévu en demandant à l'élève de simplement ne pas goûter.", correct: false, feedback: "Séduisant : continuer le programme évite de perturber la classe et respecte le cadre demandé. Mais demander à l'élève de s'abstenir seul la met à l'écart et ne garantit pas sa sécurité." },
          { text: "Interrompre l'atelier pour prévenir la famille, sans reprendre l'animation ensuite.", correct: false, feedback: "Séduisant : prévenir la famille est une réaction de protection compréhensible. Mais interrompre tout l'atelier prive le groupe de l'action et ne règle pas la gestion immédiate de l'allergie." },
          { text: "Confier à l'élève le soin d'expliquer elle-même son allergie à la classe.", correct: false, feedback: "Séduisant : responsabiliser l'élève peut valoriser son autonomie et sa parole. Mais lui demander de se justifier devant vingt camarades la expose et transfère la gestion du risque sur elle." }
        ] },
      {
        q: "Après l'atelier, comment évalues-tu l'action ?",
        choices: [
          { text: "Recueillir l'avis des élèves et mesurer ce qu'ils savent faire, puis ajuster.", correct: true, feedback: "Juste : tu évalues l'action avec des critères concrets et tu prévois un ajustement. L'avis du professeur reste utile, mais ce sont les acquis des élèves qui disent si l'action a atteint son but." },
          { text: "Demander au seul professeur si l'atelier lui a convenu, sans autre avis.", correct: false, feedback: "Séduisant : le professeur a un regard pédagogique et son avis est précieux. Mais à lui seul, il ne mesure pas ce que les élèves ont réellement compris ni retenu de l'atelier." },
          { text: "Remplir la fiche de présence comme unique bilan de l'action menée.", correct: false, feedback: "Séduisant : la fiche de présence est une trace simple et conforme aux usages. Mais elle ne renseigne en rien sur la qualité de l'animation ni sur les connaissances acquises." },
          { text: "Conserver le même scénario pour l'an prochain, sans le réexaminer.", correct: false, feedback: "Séduisant : garder un scénario qui a été conduit évite de tout reconstruire. Mais sans évaluation, tu répéteras les mêmes limites et la contrainte allergie restera mal traitée." }
        ] }
    ],
    bilan: "Tu as arbitré entre le cadre souhaité par le professeur et la prise en compte réelle des élèves, y compris l'allergie signalée. Point fort : tu as intégré une contrainte imprévue sans exclure l'élève. À retravailler : construire des critères d'évaluation partagés avec l'équipe."
  },
  {
    id: "S108", bloc: "B4", annee: "2", contexte: "centre", duree: "20 min", difficulte: 1,
    competences: ["C4.2","C4.3"],
    titre: "Hygiène des mains au centre de loisirs",
    description: "Au centre de loisirs, tu prévois un atelier sur le lavage des mains pour dix enfants de 6 à 10 ans. Un animateur estime que c'est une évidence et veut passer au jeu. Le matin même, le savon manque dans le local. Comment procèdes-tu ?",
    hints: ["Rends l'hygiène concrète pour les enfants.","Trouve une solution avec les moyens du centre.","Vérifie que le geste est acquis ensuite."],
    variantes: [
      { titre: "Variante — savon manquant", description: "Le distributeur de savon est vide et la réserve n'arrivera qu'en fin de journée : l'atelier doit s'improviser autrement." },
      { titre: "Variante — animateur pressé", description: "L'animateur veut enchaîner sur le jeu et considère que l'hygiène des mains est déjà acquise par les enfants." }
    ],
    steps: [
      {
        q: "Comment rends-tu l'atelier concret pour ces enfants ?",
        choices: [
          { text: "Avec une démonstration du geste et une chanson pour rythmer les étapes du lavage.", correct: true, feedback: "Juste : tu conçois une action adaptée à de jeunes enfants, avec une démonstration et un repère chanté. La chanson rend les étapes mémorisables, ce qu'une explication abstraite ne permet pas." },
          { text: "En expliquant verbalement les règles d'hygiène comme à des adultes.", correct: false, feedback: "Séduisant : expliquer les règles est direct et ne demande aucun matériel. Mais un discours d'adulte reste abstrait pour des enfants de 6 à 10 ans et ne laisse pas de repère concret." },
          { text: "En montrant une vidéo d'information diffusée sans temps d'échange.", correct: false, feedback: "Séduisant : la vidéo est attrayante et transmet le message sans préparation lourde. Mais sans échange ni manipulation, les enfants regardent sans s'approprier le geste." },
          { text: "En demandant aux enfants de lire une affiche accrochée au mur.", correct: false, feedback: "Séduisant : l'affiche est simple à poser et reste visible toute la journée. Mais la lecture ne suffit pas pour des enfants qui ont besoin de voir et de refaire le geste eux-mêmes." }
        ] },
      {
        q: "Le savon manque : que fais-tu ?",
        choices: [
          { text: "Installer un point d'eau avec une solution de repli propre et prévenir l'équipe.", correct: true, feedback: "Juste : tu trouves une solution réaliste avec les moyens disponibles et tu informes l'équipe. L'improvisation reste sûre et le manque de savon est signalé pour être résolu durablement." },
          { text: "Reporter l'atelier à demain sans proposer de geste alternatif aux enfants.", correct: false, feedback: "Séduisant : attendre le retour du savon garantit des conditions idéales. Mais reporter prive les enfants de l'atelier aujourd'hui, alors qu'un geste alternatif restait possible immédiatement." },
          { text: "Demander aux enfants d'apporter leur propre savon le lendemain.", correct: false, feedback: "Séduisant : impliquer les enfants les responsabilise et solutionne le manque. Mais cela repousse l'action et rend le lavage dépendant de ce que chaque famille peut fournir." },
          { text: "Passer directement au jeu en estimant que la leçon est déjà comprise.", correct: false, feedback: "Séduisant : suivre l'avis de l'animateur préserve l'ambiance et le programme prévu. Mais considérer le geste comme acquis sans l'avoir travaillé ne repose sur aucune observation réelle." }
        ] },
      {
        q: "Comment vérifies-tu que le geste est acquis ?",
        choices: [
          { text: "Observer les enfants au moment du goûter et reprendre ceux qui oublient une étape.", correct: true, feedback: "Juste : tu évalues l'action dans un moment de vie réel et tu corriges aussitôt. L'observation au goûter dit bien plus que le seul souvenir de l'atelier." },
          { text: "Demander à l'animateur s'il a trouvé l'atelier amusant, sans vérifier les gestes.", correct: false, feedback: "Séduisant : l'avis de l'animateur aide à juger l'ambiance et la forme de l'atelier. Mais son appréciation ne dit pas si les enfants savent vraiment se laver les mains." },
          { text: "Compter les enfants présents comme preuve que l'atelier a été bénéfique.", correct: false, feedback: "Séduisant : le nombre de présents est facile à consigner et témoigne de la participation. Mais être là ne prouve pas que le geste d'hygiène a été compris et reproduit." },
          { text: "Envoyer une note aux familles sans avoir vérifié ce que les enfants savent faire.", correct: false, feedback: "Séduisant : informer les familles valorise l'action et prolonge le message à la maison. Mais écrire avant d'avoir vérifié les acquis risque d'annoncer une réussite qui n'est pas réelle." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'envie de l'animateur d'aller au jeu et la nécessité d'ancrer un geste d'hygiène, malgré le savon manquant. Point fort : tu as trouvé une solution de repli adaptée aux enfants. À retravailler : organiser un contrôle des gestes dans la durée."
  },
  {
    id: "S109", bloc: "B4", annee: "1", contexte: "structure", duree: "10 min", difficulte: 2,
    competences: ["C4.1","C4.2"],
    titre: "Prévention des chutes : convaincre sans imposer",
    description: "Au foyer, Mme Laurent, 84 ans, a déjà glissé deux fois dans sa chambre. Tu prépares une action de prévention des chutes, mais sa fille s'oppose à l'installation de barres, estimant que sa mère se sentirait prisonnière. Le dossier ne précise pas ses antécédents. Comment avances-tu ?",
    hints: ["Analyse le risque réel avant de proposer.","Associe la résidente et sa fille à la réflexion.","Vérifie l'efficacité de l'action ensuite."],
    variantes: [
      { titre: "Variante — fille opposée", description: "La fille de Mme Laurent refuse toute modification de la chambre et accuse l'équipe de vouloir tout sécuriser." },
      { titre: "Variante — dossier incomplet", description: "Le dossier de soins ne mentionne aucune chute alors que l'aide-soignante en a observé deux la semaine dernière." }
    ],
    steps: [
      {
        q: "Avant de proposer une action, que fais-tu ?",
        choices: [
          { text: "Observer le logement et parler avec Mme Laurent et sa fille pour comprendre le risque.", correct: true, feedback: "Juste : tu analyses le besoin et le risque réel en croisant l'observation du lieu et la parole de la résidente et de sa fille. L'absence d'antécédents écrits rend cette écoute indispensable." },
          { text: "Installer les barres immédiatement, la sécurité primant sur l'avis de la famille.", correct: false, feedback: "Séduisant : protéger Mme Laurent après deux glissades est une priorité évidente. Mais imposer l'équipement sans échange avec elle et sa fille risque d'être vécu comme une contrainte et d'être rejeté." },
          { text: "Suivre l'avis de la fille et renoncer à toute modification de la chambre.", correct: false, feedback: "Séduisant : respecter la parole de la fille entretient la confiance et évite le conflit. Mais renoncer sans analyser le risque laisse Mme Laurent exposée à une nouvelle chute." },
          { text: "Copier le plan de prévention utilisé pour un autre résident du foyer.", correct: false, feedback: "Séduisant : un plan déjà appliqué dans le foyer est connu de l'équipe et rassurant. Mais chaque résident a ses capacités et ses envies : recopier ne répond pas au besoin particulier de Mme Laurent." }
        ] },
      {
        q: "Comment construis-tu l'action avec la résidente et sa fille ?",
        choices: [
          { text: "Leur proposer plusieurs options, dont des aides discrètes, et expliquer les bénéfices de chacune.", correct: true, feedback: "Juste : tu conçois une action avec la personne et sa famille, en présentant des options. Les aides discrètes répondent à la crainte de se sentir prisonnière tout en réduisant le risque." },
          { text: "Imposer la solution la plus sûre en expliquant qu'il n'y a pas le choix.", correct: false, feedback: "Séduisant : la solution la plus sûre protège efficacement et simplifie la décision. Mais l'imposer sans laisser de choix heurte la fille et peut conduire au rejet de l'équipement." },
          { text: "Laisser la fille décider seule, estimant qu'elle connaît sa mère.", correct: false, feedback: "Séduisant : la fille connaît sa mère et sa parole mérite d'être entendue. Mais décider seule écarte Mme Laurent elle-même et l'avis de l'équipe sur le risque réel." },
          { text: "Proposer uniquement une surveillance renforcée, sans rien modifier dans la chambre.", correct: false, feedback: "Séduisant : renforcer la surveillance rassure et respecte le refus de la fille. Mais une présence accrue ne remplace pas une aide adaptée et ne peut pas être constante." }
        ] },
      {
        q: "Après la mise en place, comment vérifies-tu l'action ?",
        choices: [
          { text: "Suivre les déplacements de Mme Laurent et recueillir son avis ainsi que celui de sa fille.", correct: true, feedback: "Juste : tu évalues l'action en observant les déplacements et en écoutant la résidente et sa fille. L'avis de la famille reste utile, mais le vécu de Mme Laurent est le premier indicateur." },
          { text: "Considérer l'action réussie dès que le matériel est posé, sans suivi.", correct: false, feedback: "Séduisant : voir l'équipement installé donne un sentiment de travail achevé. Mais la pose ne dit pas si l'aide est utilisée, acceptée, ni si elle réduit vraiment le risque de chute." },
          { text: "Demander au seul médecin si l'installation lui paraît adaptée.", correct: false, feedback: "Séduisant : l'avis médical est légitime sur le plan de la santé. Mais à lui seul, il ne remplace pas l'observation quotidienne ni le ressenti de Mme Laurent et de sa fille." },
          { text: "Noter l'absence de chute sur un mois comme unique résultat, sans avis de la résidente.", correct: false, feedback: "Séduisant : ne plus observer de chute est un résultat encourageant et mesurable. Mais sur un mois, cela peut tenir au hasard, et sans son avis tu ignores si l'aide est réellement vécue comme utile." }
        ] }
    ],
    bilan: "Tu as arbitré entre la protection de Mme Laurent et le respect de l'avis de sa fille, en cherchant une solution acceptable par tous. Point fort : tu as associé la résidente à la décision. À retravailler : documenter le suivi et les antécédents dans le dossier."
  },
  {
    id: "S110", bloc: "B4", annee: "T", contexte: "centre", duree: "12 min", difficulte: 3,
    competences: ["C4.3"],
    titre: "Nutrition : parler aux adolescents sans les exclure",
    description: "Au centre, tu prépares une action sur la nutrition pour seize adolescents. La diététicienne du centre réclame un discours médical précis, tandis que tu veux partir de leurs habitudes réelles. Un adolescent lance : « De toute façon, on s'en fiche de ce qu'on mange. » Comment réagis-tu ?",
    hints: ["Pars de ce que les adolescents vivent.","Construis une action qui les implique.","Évalue l'action avec des indicateurs clairs."],
    variantes: [
      { titre: "Variante — diététicienne opposée", description: "La diététicienne insiste pour un exposé médical et juge que les jeux ne sont pas sérieux pour un public adolescent." },
      { titre: "Variante — désintérêt affiché", description: "Plusieurs adolescents affichent leur désintérêt et détournent la conversation vers les réseaux et les jeux vidéo." }
    ],
    steps: [
      {
        q: "Avant l'action, comment réunis-tu les informations utiles ?",
        choices: [
          { text: "Questionner les adolescents sur leurs repas et leurs envies, puis compléter avec l'équipe.", correct: true, feedback: "Juste : tu analyses les besoins du public en partant de ses habitudes, puis tu croises avec l'équipe. Le discours de la diététicienne est intégré, mais il ne remplace pas la parole des jeunes." },
          { text: "Demander à la diététicienne de tout préparer, son expertise faisant autorité.", correct: false, feedback: "Séduisant : son expertise est réelle et déléguer fait gagner du temps. Mais une action conçue sans les adolescents risque de ne pas répondre à leurs préoccupations et de renforcer leur désintérêt." },
          { text: "Reprendre des chiffres généraux trouvés dans un ancien dossier du centre.", correct: false, feedback: "Séduisant : des chiffres existants donnent une base chiffrée et évitent une recherche. Mais des données anciennes et générales ne décrivent pas les habitudes de ce groupe d'adolescents." },
          { text: "Deviner les habitudes des jeunes sans les interroger, pour aller plus vite.", correct: false, feedback: "Séduisant : anticiper pour gagner du temps paraît efficace. Mais deviner à leur place expose à construire une action sur des suppositions, en ignorant la remarque de désintérêt entendue." }
        ] },
      {
        q: "Comment animes-tu l'action pour les impliquer ?",
        choices: [
          { text: "Avec des mises en situation concrètes, comme composer un repas à partir de contraintes.", correct: true, feedback: "Juste : tu mets en œuvre une action qui implique les adolescents par des situations concrètes. Composer un repas les rend acteurs, ce qui répond directement à leur désintérêt affiché." },
          { text: "Avec un exposé médical détaillé, conformément à la demande de la diététicienne.", correct: false, feedback: "Séduisant : satisfaire la diététicienne garantit un contenu scientifique et une bonne entente. Mais un exposé magistral devant des jeunes qui viennent de dire qu'ils s'en fichent renforcera leur retrait." },
          { text: "En projetant un documentaire sans prévoir de temps d'échange ensuite.", correct: false, feedback: "Séduisant : le documentaire est visuel et capte l'attention plus facilement qu'un cours. Mais sans échange, les adolescents restent spectateurs et ne construisent pas eux-mêmes le propos." },
          { text: "En distribuant des conseils imprimés à lire individuellement en silence.", correct: false, feedback: "Séduisant : les conseils écrits sont rapides à remettre et laissent une trace. Mais une lecture solitaire ne crée pas d'adhésion chez un public qui manifeste déjà son désintérêt." }
        ] },
      {
        q: "Comment évalues-tu l'action menée ?",
        choices: [
          { text: "Demander ce que les adolescents ont retenu et observer leurs choix lors du prochain repas.", correct: true, feedback: "Juste : tu évalues l'action par ce que les jeunes retiennent et par leurs choix concrets. Tes observations complètent utilement le regard de la diététicienne sans le remplacer." },
          { text: "Rédiger un rapport positif sans recueillir l'avis des adolescents concernés.", correct: false, feedback: "Séduisant : un rapport positif clôt vite le dossier et donne une image relative de l'action. Mais l'écrire sans retour des jeunes revient à affirmer une réussite que rien ne confirme." },
          { text: "Se fier uniquement au nombre de participants pour juger de l'utilité.", correct: false, feedback: "Séduisant : le nombre de participants est un indicateur simple et immédiat. Mais une salle pleine ne prouve pas que les adolescents ont compris ou changé quoi que ce soit à leurs habitudes." },
          { text: "Laisser la diététicienne seule juger si l'action atteint bien ses objectifs fixés.", correct: false, feedback: "Séduisant : son regard professionnel sur les objectifs nutritionnels est légitime. Mais la laisser décider seule écarte le vécu des adolescents, qui est au cœur de l'action." }
        ] }
    ],
    bilan: "Tu as arbitré entre le discours médical attendu et le vécu réel des adolescents pour construire une action qui les concerne. Point fort : tu es parti de leurs habitudes. À retravailler : associer la diététicienne à la conception pour éviter l'opposition."
  },
  {
    id: "S111", bloc: "B4", annee: "2", contexte: "structure", duree: "15 min", difficulte: 1,
    competences: ["C4.1","C4.3"],
    titre: "Bien-être et relaxation : respecter les limites",
    description: "En structure, tu proposes un atelier de relaxation à huit résidents. Un animateur estime que ce n'est pas une priorité et préfère une sortie. Une résidente te confie que sa fille juge ces activités inutiles. Tu ignores qui accepte d'être touché. Comment procèdes-tu ?",
    hints: ["Respecte les limites de chacun.","Conçois une action sans contact imposé.","Vérifie le ressenti après l'atelier."],
    variantes: [
      { titre: "Variante — animateur réticent", description: "L'animateur considère que la relaxation n'est pas une priorité et réclame une sortie à la place de l'atelier." },
      { titre: "Variante — limite physique", description: "Une résidente a des douleurs articulaires : les postures classiques au sol lui sont impossibles." }
    ],
    steps: [
      {
        q: "Avant l'atelier, que vérifies-tu en priorité ?",
        choices: [
          { text: "Les limites et les envies de chaque résident, notamment sur le contact et les postures.", correct: true, feedback: "Juste : tu analyses les besoins et les limites de chacun avant d'agir. Ne pas savoir qui accepte le contact est une information essentielle pour conduire l'atelier en sécurité." },
          { text: "Organiser la séance comme prévu, la relaxation convenant à tout le monde.", correct: false, feedback: "Séduisant : suivre le programme prévu est simple et évite de multiplier les questions. Mais supposer que la relaxation convient à tous ignore les limites physiques et le rapport au contact." },
          { text: "Demander à la fille de la résidente de décider qui participera.", correct: false, feedback: "Séduisant : la fille s'exprime et l'associer peut apaiser son avis critique. Mais elle ne peut pas décider à la place des huit résidents, seuls capables de dire ce qu'ils souhaitent." },
          { text: "Recopier un enchaînement de relaxation vu dans une autre structure.", correct: false, feedback: "Séduisant : un enchaînement déjà utilisé fait gagner du temps et rassure. Mais il a été conçu pour d'autres personnes et ne tient compte ni des douleurs ni du consentement au contact." }
        ] },
      {
        q: "Comment conduis-tu l'atelier en respectant chacun ?",
        choices: [
          { text: "En proposant des exercices assis, sans contact imposé, avec une option de retrait possible.", correct: true, feedback: "Juste : tu conduis l'action en respectant les limites repérées. Les exercices assis évitent les postures au sol douloureuses et l'option de retrait préserve la liberté de chacun." },
          { text: "En guidant des postures au sol pour tous, sans tenir compte des douleurs déjà signalées.", correct: false, feedback: "Séduisant : les postures au sol sont classiques en relaxation et donnent une séance structurée. Mais les imposer à tous exclut la résidente qui a des douleurs articulaires." },
          { text: "En imposant un contact physique pour aider les résidents à mieux se détendre.", correct: false, feedback: "Séduisant : le contact peut effectivement aider certaines personnes à se relâcher. Mais l'imposer sans consentement viole une limite intime et peut être vécu comme une agression." },
          { text: "En laissant l'animateur mener la sortie à la place de l'atelier.", correct: false, feedback: "Séduisant : accéder à l'animateur préserve l'ambiance de l'équipe et occupe les résidents. Mais renoncer à l'atelier ne répond ni au besoin de bien-être ni à la demande initiale." }
        ] },
      {
        q: "Après l'atelier, comment mesures-tu l'effet ?",
        choices: [
          { text: "Recueillir le ressenti des résidents et noter ce qui a aidé ou gêné, puis ajuster.", correct: true, feedback: "Juste : tu évalues l'action par le ressenti des résidents et tu prévois un ajustement. L'avis de l'animateur compte, mais ce sont les participants qui disent si la séance leur a convenu." },
          { text: "Considérer que l'atelier a réussi parce que personne ne s'est plaint.", correct: false, feedback: "Séduisant : l'absence de plainte peut sembler un bon signe et simplifie le bilan. Mais le silence ne dit pas si les résidents ont aimé la séance ni s'ils ont réellement ressenti un effet apaisant." },
          { text: "Demander au seul animateur s'il a apprécié la séance de relaxation.", correct: false, feedback: "Séduisant : son avis éclaire la forme de la séance et l'ambiance générale. Mais il ne remplace pas le ressenti des résidents, qui sont les destinataires de l'action." },
          { text: "Remplir la feuille de présence comme unique trace de l'action menée.", correct: false, feedback: "Séduisant : la feuille de présence est une trace simple et conforme aux habitudes. Mais elle ne renseigne en rien sur l'effet de la relaxation ni sur les ajustements nécessaires." }
        ] }
    ],
    bilan: "Tu as arbitré entre l'envie de l'animateur et le besoin réel des résidents, en respectant les limites de chacun. Point fort : tu as évité d'imposer le contact. À retravailler : rendre le retour des résidents plus systématique après chaque séance."
  },
  {
    id: "S112", bloc: "B4", annee: "1", contexte: "centre", duree: "20 min", difficulte: 2,
    competences: ["C4.2","C4.3"],
    titre: "Prévention des infections : réagir avec discrétion",
    description: "Au centre, tu prépares une action sur la prévention des infections pour douze usagers. Un soignant estime les gestes barrières excessifs et les applique lui-même mollement. Un usager se met à tousser au début de la séance. Comment réagis-tu ?",
    hints: ["Rappelle les gestes avec des exemples concrets.","Gère l'imprévu sans stigmatiser.","Vérifie que les gestes sont appliqués."],
    variantes: [
      { titre: "Variante — soignant réticent", description: "Un soignant applique les gestes barrières de façon approximative et les présente comme une contrainte inutile aux usagers." },
      { titre: "Variante — usager qui tousse", description: "Un usager tousse pendant l'atelier et les autres le regardent, attendant ta réaction pour savoir quoi faire." }
    ],
    steps: [
      {
        q: "Comment conçois-tu l'action pour qu'elle soit comprise ?",
        choices: [
          { text: "Avec des démonstrations courtes et des exemples tirés de la vie du centre.", correct: true, feedback: "Juste : tu conçois une action d'éducation à la santé avec des démonstrations et des exemples proches du quotidien. L'avis du soignant est entendu, mais l'approche concrète lève son objection." },
          { text: "Avec un texte réglementaire lu à voix haute, sans mise en situation.", correct: false, feedback: "Séduisant : le texte réglementaire fait autorité et sécurise sur le plan des règles. Mais lu sans mise en situation, il reste abstrait et n'aide pas les usagers à appliquer les gestes." },
          { text: "En affichant des consignes générales sans expliquer leur utilité concrète.", correct: false, feedback: "Séduisant : afficher des consignes est rapide et laisse une trace visible. Mais sans expliquer à quoi elles servent ici, les usagers les voient comme une contrainte, comme le soignant réticent." },
          { text: "En laissant chaque usager inventer sa propre méthode de protection.", correct: false, feedback: "Séduisant : valoriser l'autonomie des usagers peut favoriser leur adhésion. Mais sans repères communs, chacun bricole une méthode dont l'efficacité n'est pas garantie." }
        ] },
      {
        q: "L'usager tousse : que fais-tu ?",
        choices: [
          { text: "Lui proposer un masque et un point d'eau avec discrétion, puis poursuivre l'animation.", correct: true, feedback: "Juste : tu protèges le groupe en agissant tout de suite, tout en préservant la dignité de l'usager. La discrétion évite de l'exposer, et la reprise de l'animation maintient l'action pour tous." },
          { text: "Interrompre l'atelier pour l'isoler sans explication devant les autres usagers.", correct: false, feedback: "Séduisant : isoler immédiatement limite le risque de contamination pour le groupe. Mais le faire sans explication et devant les autres expose l'usager et rompt l'ambiance de l'atelier." },
          { text: "Attendre la fin de l'atelier pour lui parler, afin de ne pas perturber le groupe.", correct: false, feedback: "Séduisant : préserver le déroulé de l'atelier évite de gêner l'usager devant les autres. Mais attendre la fin laisse le risque de contamination agir pendant toute la séance." },
          { text: "Renvoyer l'usager chez lui en lui conseillant de revenir quand il ira mieux.", correct: false, feedback: "Séduisant : éloigner la source du risque protège le groupe de façon radicale. Mais renvoyer quelqu'un pour une toux est excessif et le prive de l'accueil auquel il a droit." }
        ] },
      {
        q: "Comment vérifies-tu que les gestes sont appliqués ?",
        choices: [
          { text: "Observer les usagers lors d'un moment de vie réel et reprendre les gestes avec eux.", correct: true, feedback: "Juste : tu évalues l'action en observant les pratiques dans un moment concret et tu corriges avec les usagers. L'avis du soignant compte, mais l'observation dit ce qui est réellement appliqué." },
          { text: "Demander au soignant réticent s'il estime l'action utile, sans observation.", correct: false, feedback: "Séduisant : son avis aide à comprendre la résistance de l'équipe. Mais lui seul ne peut pas attester des gestes des usagers, d'autant qu'il les applique lui-même mollement." },
          { text: "Consigner l'atelier comme réalisé sans vérifier les pratiques ensuite.", correct: false, feedback: "Séduisant : noter l'action satisfait à la traçabilité et clôt le dossier. Mais sans vérification, tu ignores si les consignes ont été comprises et reprises dans la vie quotidienne." },
          { text: "Compter le nombre de masques distribués comme preuve de l'application des gestes.", correct: false, feedback: "Séduisant : le nombre de masques distribués est un chiffre simple à relever. Mais distribuer ne prouve pas que les gestes sont correctement exécutés au bon moment." }
        ] }
    ],
    bilan: "Tu as arbitré entre la discrétion due à l'usager qui tousse et la nécessaire protection du groupe. Point fort : tu as réagi sans stigmatiser. À retravailler : impliquer le soignant réticent pour aligner les pratiques de l'équipe."
  },
  {
    id: "S113", bloc: "B4", annee: "T", contexte: "structure", duree: "10 min", difficulte: 3,
    competences: ["C4.1","C4.2"],
    titre: "Éducation à la mobilité : avancer avec M. Bernard",
    description: "En structure, M. Bernard, 78 ans, doit apprendre à utiliser un déambulateur après une hospitalisation. Son fils s'y oppose : « Il doit marcher sans aide. » Le kinésithérapeute veut le laisser essayer seul, sans consigne. Le dossier ne précise pas ses capacités réelles. Comment procèdes-tu ?",
    hints: ["Évalue les capacités réelles avant de proposer.","Associe le résident et sa famille.","Conçois une progression adaptée et sûre."],
    variantes: [
      { titre: "Variante — fils opposé", description: "Le fils de M. Bernard refuse le déambulateur, le jugeant humiliant, et menace de retirer son père de la structure." },
      { titre: "Variante — sans consigne", description: "Le kinésithérapeute laisse M. Bernard se lever seul, sans expliquer comment utiliser l'aide technique." }
    ],
    steps: [
      {
        q: "Avant de proposer une action, que fais-tu ?",
        choices: [
          { text: "Évaluer les capacités de M. Bernard avec l'équipe et écouter ses envies et celles de son fils.", correct: true, feedback: "Juste : tu analyses le besoin en évaluant les capacités réelles et en écoutant le résident et son fils. Le dossier muet et les avis opposés rendent cette étape indispensable avant toute action." },
          { text: "Suivre l'avis du fils et écarter le déambulateur sans aucune évaluation préalable.", correct: false, feedback: "Séduisant : respecter la volonté du fils entretient la confiance et évite un conflit. Mais écarter l'aide sans évaluer les capacités expose M. Bernard à une chute et ignore son propre avis." },
          { text: "Laisser le kinésithérapeute décider seul, son expertise en mobilité primant sur tout.", correct: false, feedback: "Séduisant : son expertise est légitime et déléguer simplifie la décision. Mais le laisser décider seul écarte le résident et le fils, alors que le dossier manque d'informations sur ses capacités." },
          { text: "Copier le programme de rééducation d'un autre résident au profil pourtant proche.", correct: false, feedback: "Séduisant : un programme similaire semble adapté et fait gagner du temps. Mais un profil proche n'est pas identique, et recopier ne tient compte ni des envies de M. Bernard ni de l'avis du fils." }
        ] },
      {
        q: "Comment conçois-tu l'accompagnement à la marche ?",
        choices: [
          { text: "Avec une progression courte et sécurisée, en montrant les gestes et en restant à ses côtés.", correct: true, feedback: "Juste : tu conçois une action progressive et sûre, avec un apprentissage des gestes. Rester à ses côtés répond à l'absence de consigne du kinésithérapeute sans exclure le résident." },
          { text: "En le laissant essayer seul pour juger de ses limites réelles sur le terrain.", correct: false, feedback: "Séduisant : l'essai autonome peut révéler ce qu'il sait vraiment faire. Mais le laisser seul sans consigne, alors qu'on ignore ses capacités, prend un risque de chute inutile." },
          { text: "En imposant le déambulateur sans expliquer son usage, pour aller plus vite.", correct: false, feedback: "Séduisant : imposer l'aide règle vite l'opposition du fils et sécurise le déplacement. Mais sans explication, M. Bernard ne saura pas s'en servir et l'aide restera inefficace." },
          { text: "En confiant l'essai au fils, qui connaît son père et saura bien le guider.", correct: false, feedback: "Séduisant : le fils connaît son père et l'associer peut apaiser son opposition. Mais lui confier l'essai transfère un geste technique à quelqu'un qui n'a pas les compétences pour l'enseigner." }
        ] },
      {
        q: "Comment adaptes-tu l'action après les premiers essais ?",
        choices: [
          { text: "Observer sa démarche, noter les difficultés et ajuster la progression avec l'équipe.", correct: true, feedback: "Juste : tu évalues l'action en observant la démarche et tu l'ajustes avec l'équipe. L'avis du fils est pris en compte, mais ce sont les difficultés observées qui guident la suite." },
          { text: "Considérer l'essai réussi du moment qu'il a fait quelques pas, sans suivi.", correct: false, feedback: "Séduisant : voir quelques pas accomplis est encourageant et montre une première réussite. Mais sans observation ni suivi, tu ignores si la démarche est sûre et si l'aide est bien utilisée." },
          { text: "Rédiger un bilan positif sans avoir observé M. Bernard en situation réelle.", correct: false, feedback: "Séduisant : un bilan écrit clôt rapidement le dossier et rassure l'équipe. Mais l'écrire sans observation ne dit rien de la qualité réelle de la marche ni des ajustements à prévoir." },
          { text: "Laisser le fils seul juger des progrès, sans recueillir d'autres avis.", correct: false, feedback: "Séduisant : le fils est proche de son père et son regard compte dans le suivi. Mais le laisser juger seul écarte l'observation de l'équipe et le ressenti de M. Bernard lui-même." }
        ] }
    ],
    bilan: "Tu as arbitré entre la volonté du fils et le besoin de sécurité de M. Bernard, en t'appuyant sur une évaluation réelle. Point fort : tu as associé le résident à la décision. À retravailler : formaliser l'évaluation initiale dans le dossier de soins."
  },
  {
    id: "S114", bloc: "B4", annee: "2", contexte: "centre", duree: "12 min", difficulte: 1,
    competences: ["C4.3"],
    titre: "Évaluer une action d'éducation à la santé",
    description: "Au centre, tu animes un atelier sur l'hygiène des mains auprès de huit résidents. Ton collègue veut suivre le script à la lettre, mais plusieurs participants décrochent et l'un d'eux conteste le message. Comment conduis-tu puis évalues-tu l'action ?",
    hints: ["Observe l'engagement réel du groupe avant de décider.","La mise en œuvre s'ajuste au public présent.","Évalue l'impact avant de transmettre le bilan."],
    variantes: [
      { titre: "Variante — participants peu réceptifs", description: "La moitié du groupe reste silencieuse et détourne le regard : le formateur doit-il poursuivre le plan initial ou réorienter l'animation ?" },
      { titre: "Variante — consigne contradictoire", description: "La responsable demande de terminer à l'heure, alors que la discussion soulève une question importante sur laquelle tu hésites à t'attarder." }
    ],
    steps: [
      {
        q: "En cours d'atelier, ton collègue veut enchaîner le script prévu alors que le groupe décroche : que fais-tu ?",
        choices: [
          { text: "Adapter le rythme et reformuler avec un geste concret, tout en restant fidèle à l'objectif de l'action.", correct: true, feedback: "Juste : la mise en œuvre s'ajuste au public : tu gardes l'objectif tout en rendant le geste compréhensible. Le script restait tentant pour sa cohérence, mais il ne suffit pas si le groupe décroche." },
          { text: "Poursuivre le script prévu sans le modifier, pour garantir la cohérence avec le support validé par l'équipe.", correct: false, feedback: "Séduisant : suivre le script rassure sur le respect du contenu validé. Mais une mise en œuvre rigide ignore le décrochage observé et réduit l'efficacité de l'action." },
          { text: "Interrompre l'atelier et demander au groupe ce qu'il préfère aborder, en laissant de côté le programme.", correct: false, feedback: "Séduisant : consulter le groupe valorise son avis. Mais abandonner le programme laisse l'objectif de santé sans fil conducteur et disperse l'animation." },
          { text: "Demander à la responsable de prendre le relais, car tu doutes de ta capacité à gérer ce public.", correct: false, feedback: "Séduisant : passer le relais paraît prudent face à un public difficile. Mais c'est une posture d'évitement : la mise en œuvre t'appartient et tu peux t'adapter." }
        ] },
      {
        q: "Un résident affirme que le geste enseigné est inutile : comment réagis-tu dans l'animation ?",
        choices: [
          { text: "Écouter son objection, la reformuler et expliquer avec bienveillance en quoi le geste protège sa santé et celle du groupe.", correct: true, feedback: "Juste : écouter puis reformuler maintient l'alliance tout en réaffirmant le message de santé. La rectification ferme était tentante pour préserver la rigueur, mais elle aurait braqué le participant." },
          { text: "Rectifier fermement l'erreur en t'appuyant sur le protocole affiché, pour éviter qu'une idée fausse ne se propage dans l'assistance.", correct: false, feedback: "Séduisant : rectifier vite protège la rigueur du message. Mais le faire fermement, sans écoute, risque de braquer le résident et de couper l'échange." },
          { text: "Reporter la discussion à la fin de l'atelier, pour préserver le déroulé collectif et éviter de braquer le résident devant le groupe.", correct: false, feedback: "Séduisant : reporter préserve le rythme de l'atelier et évite une confrontation. Mais laisser l'objection sans réponse diffuse un doute chez les autres participants." },
          { text: "Inviter le résident à présenter son point de vue au groupe, pour transformer sa contestation en échange constructif.", correct: false, feedback: "Séduisant : donner la parole valorise l'avis du résident. Mais sans cadrage, son point de vue peut installer une contre-vérité devant le groupe." }
        ] },
      {
        q: "Après l'atelier, comment évalues-tu l'action et son effet sur les participants ?",
        choices: [
          { text: "Recueillir leurs retours, confronter les acquis observés aux objectifs et consigner un bilan d'évaluation argumenté.", correct: true, feedback: "Juste : évaluer suppose de croiser les retours du public, les acquis constatés et les objectifs fixés. Le simple comptage était tentant par simplicité, mais il ne dit rien de l'effet produit." },
          { text: "Consigner uniquement le nombre de participants présents, indicateur simple et facile à reporter dans le dossier.", correct: false, feedback: "Séduisant : compter les présents donne un chiffre objectif rapide à saisir. Mais ce seul indicateur ne mesure ni la compréhension ni le changement de pratique visé." },
          { text: "Demander à la responsable de juger l'action elle-même, car elle a observé l'atelier depuis le couloir.", correct: false, feedback: "Séduisant : l'avis de la responsable apporte un regard extérieur utile. Mais déléguer toute l'évaluation renonce à ta propre analyse de terrain et à la parole des résidents." },
          { text: "Rédiger le bilan en te fiant à ta seule impression, jugée suffisante après une animation que tu maîtrises.", correct: false, feedback: "Séduisant : ton ressenti reflète l'ambiance de l'atelier. Mais une impression personnelle reste subjective et ne peut étayer un bilan d'évaluation fiable." }
        ] }
    ],
    bilan: "Tu as arbitré entre fidélité au script et adaptation au public, entre rigueur du message et écoute de l'objection. Point fort : tu as ajusté l'animation sans perdre l'objectif de santé. À retravailler : construis une évaluation qui croise plusieurs sources au lieu de te fier à une seule impression."
  },
  {
    id: "S119", bloc: "B1", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C1.1","C1.2"],
    titre: "Accueillir Madame Bertin, nouvelle résidente",
    description: "Madame Bertin, 82 ans, arrive en EHPAD ce matin. Sa fille, pressée, répond à ta place et lui coupe la parole. La résidente serre son sac et regarde la porte. Comment engages-tu l'accueil ?",
    hints: ["La personne est la première source d'information sur elle-même.","Une écoute active et respectueuse installe la confiance.","Transmets les observations utiles à l'équipe."],
    variantes: [
      { titre: "Variante — famille envahissante", description: "La fille de la résidente s'installe dans le fauteuil et raconte l'histoire familiale à ta place, sans laisser sa mère placer un mot." },
      { titre: "Variante — arrivage simultané", description: "Deux autres admissions arrivent en même temps et une collègue t'appelle pour une toilette urgente : l'accueil doit s'organiser malgré la charge." }
    ],
    steps: [
      {
        q: "Au premier contact, la fille répond pour sa mère : quelle est ta première action ?",
        choices: [
          { text: "Te présenter à Madame Bertin, la regarder et l'inviter à parler elle-même de ses besoins et de ses habitudes.", correct: true, feedback: "Juste : l'accueil commence par la personne elle-même : te présenter et l'inviter à parler pose les bases d'une relation respectueuse. Le récit de la fille était utile, mais il ne remplace pas la parole de la résidente." },
          { text: "Remercier la fille pour ces renseignements précieux et noter son récit comme source principale d'information.", correct: false, feedback: "Séduisant : la fille connaît bien sa mère et son récit paraît fiable. Mais en faire la source principale écarte la personne de son propre accueil et installe l'habitude de parler à sa place." },
          { text: "Demander à la fille de sortir, pour laisser la résidente s'exprimer sans la présence de sa famille.", correct: false, feedback: "Séduisant : écarter la famille peut sembler protéger la liberté de parole. Mais demander à la fille de sortir la brusque sans nécessité et risque de braquer la résidente." },
          { text: "Conduire directement la résidente vers sa chambre, pour lui éviter une attente debout dans le hall.", correct: false, feedback: "Séduisant : installer la résidente rapidement soulage une personne fatiguée. Mais partir sans ce temps d'échange manque le premier moment de connaissance et de repérage de son état." }
        ] },
      {
        q: "Madame Bertin murmure qu'elle a peur de ne pas retrouver ses repères : que fais-tu ?",
        choices: [
          { text: "T'asseoir à sa hauteur, reformuler sa crainte et la rassurer en décrivant concrètement ses premiers repères.", correct: true, feedback: "Juste : se mettre à hauteur, reformuler et rassurer avec des repères concrets respecte la personne tout en l'apaisant. L'activité collective était tentante pour détourner l'attention, mais elle éviterait la crainte au lieu de l'accueillir." },
          { text: "La rassurer d'un geste rapide en affirmant que tout ira bien, pour ne pas amplifier son inquiétude.", correct: false, feedback: "Séduisant : dire que tout ira bien part d'une bonne intention. Mais une formule rapide, sans écoute, minimise une peur réelle et ne rassure que sur le moment." },
          { text: "Proposer tout de suite une activité collective, pour détourner son attention de cette peur du changement.", correct: false, feedback: "Séduisant : proposer une activité occupe l'esprit et montre de l'attention. Mais détourner l'attention ne traite pas l'inquiétude et peut laisser la résidente seule avec sa peur." },
          { text: "Noter sa crainte dans le dossier et prévenir l'équipe, en attendant qu'elle s'exprime plus clairement plus tard.", correct: false, feedback: "Séduisant : consigner la crainte et prévenir l'équipe assure la continuité. Mais différer l'écoute prive la personne d'un réconfort immédiat au moment où elle en a besoin." }
        ] },
      {
        q: "En fin d'accueil, que transmets-tu à l'équipe dans le dossier ?",
        choices: [
          { text: "Les observations sur son état, ses habitudes exprimées, les mots de sa fille et l'accompagnement réalisé.", correct: true, feedback: "Juste : une transmission utile distingue les observations, les propos de la personne, ceux de l'entourage et l'action menée. Le récit de la fille seul était pratique, mais il effacerait la voix de la résidente." },
          { text: "Le récit complet de la fille, en précisant qu'il est plus fiable que les propos parfois confus de la résidente.", correct: false, feedback: "Séduisant : le récit de la fille paraît précis et structuré. Mais le hiérarchiser au-dessus de la parole de sa mère entretient une erreur d'attribution et nuit à l'individualisation." },
          { text: "Un résumé bref de l'installation dans la chambre, en laissant les détails à la prochaine réunion de service.", correct: false, feedback: "Séduisant : un résumé court va au gain de temps pour l'équipe. Mais remettre les détails à plus tard prive les collègues des repères dont ils ont besoin dès ce soir." },
          { text: "Une note globale sur l'ambiance de l'accueil, sans distinguer ce qui vient de la résidente ou de sa famille.", correct: false, feedback: "Séduisant : noter l'ambiance donne un ton général rapide à lire. Mais sans distinguer les sources, la note mêle les faits aux interprétations et perd sa fiabilité." }
        ] }
    ],
    bilan: "Tu as arbitré entre la parole de la famille et celle de la résidente, entre réconfort immédiat et transmission différée. Point fort : tu as replacé Madame Bertin au centre de son accueil. À retravailler : explicite davantage dans le dossier la provenance de chaque information."
  },
  {
    id: "S120", bloc: "B1", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C1.1","C1.4"],
    titre: "Accompagner une personne anxieuse vers l'autonomie",
    description: "Au centre, Monsieur Diallo, 68 ans, refuse de participer à l'atelier de marche ce matin : il dit qu'il va tomber. L'infirmière propose d'annuler sa séance, tandis que tu penses qu'un accompagnement adapté peut le rassurer. Comment arbitres-tu ?",
    hints: ["L'anxiété ne doit pas être confondue avec une incapacité.","Une activité adaptée peut maintenir l'autonomie.","La décision se construit avec la personne et l'équipe."],
    variantes: [
      { titre: "Variante — chute récente", description: "Monsieur Diallo est tombé la semaine dernière : la crainte est désormais justifiée et l'équipe craint une rechute pendant l'atelier." },
      { titre: "Variante — pression du groupe", description: "Les autres participants attendent le départ du groupe pour commencer, et le créneau ne sera pas renouvelé avant une semaine." }
    ],
    steps: [
      {
        q: "Monsieur Diallo dit qu'il va tomber : comment réagis-tu d'abord ?",
        choices: [
          { text: "L'écouter sans le contredire, explorer avec lui ce qui l'inquiète et proposer un premier geste très encadré.", correct: true, feedback: "Juste : écouter puis proposer un geste très encadré respecte la personne tout en maintenant son autonomie. L'avis de l'infirmière compte, mais il ne remplace pas la recherche de ce qui le bloque." },
          { text: "Le rassurer en affirmant qu'il est en pleine forme, pour lui redonner confiance avant le début de l'atelier.", correct: false, feedback: "Séduisant : affirmer qu'il va bien peut motiver sur l'instant. Mais nier sa peur sans l'explorer laisse le risque intact et peut le braquer." },
          { text: "Accepter son refus et proposer une séance assise à sa place, pour éviter toute contrainte ce matin.", correct: false, feedback: "Séduisant : une séance assise respecte son refus et évite la contrainte. Mais sans tenter d'adaptation, elle renonce au maintien de la marche et entretient la peur." },
          { text: "Demander à l'infirmière de confirmer qu'il peut marcher, pour trancher médicalement avant toute proposition.", correct: false, feedback: "Séduisant : l'avis médical sécurise la décision face à un risque de chute. Mais le demander avant toute écoute transforme une inquiétude en simple question de capacité." }
        ] },
      {
        q: "L'infirmière suggère d'annuler la séance : quelle réponse professionnelle apportes-tu ?",
        choices: [
          { text: "Proposer un compromis avec appui rapproché et déplacement court, en en parlant avec elle et avec monsieur Diallo.", correct: true, feedback: "Juste : un compromis appuyé concilie sécurité et maintien de l'autonomie, dans le dialogue avec l'équipe. Suivre l'annulation sans débat paraissait plus sûr, mais elle ferait de la peur une règle." },
          { text: "Suivre l'avis de l'infirmière sans discussion, car sa compétence médicale prime sur le projet d'activité.", correct: false, feedback: "Séduisant : l'avis de l'infirmière est légitime et sécurise l'équipe. Mais l'appliquer sans rechercher d'adaptation renonce à l'activité par précaution et réduit l'autonomie." },
          { text: "Maintenir la séance initiale contre l'avis de l'infirmière, pour ne pas céder à une peur qui te paraît excessive.", correct: false, feedback: "Séduisant : maintenir le programme évite de céder à la peur. Mais passer outre un avis professionnel et une chute récente expose la personne à un risque réel." },
          { text: "Laisser monsieur Diallo décider seul, en lui expliquant qu'il est libre de marcher ou de rester assis.", correct: false, feedback: "Séduisant : laisser décider seul respecte la liberté de la personne. Mais sans accompagnement ni cadre, cette liberté la laisse face à son anxiété et à un risque de chute." }
        ] },
      {
        q: "Après l'atelier, comment tires-tu le bilan de ta conduite ?",
        choices: [
          { text: "Observer ce qu'il a réussi avec l'appui apporté, noter les points de vigilance et en discuter avec l'équipe.", correct: true, feedback: "Juste : relever les réussites, les vigilances et en débattre en équipe nourrit le projet individualisé. La simple mention « il a marché » était plus rapide, mais elle perd les informations utiles à la suite." },
          { text: "Consigner seulement qu'il a marché, sans préciser l'accompagnement ni les signes d'inconfort observés.", correct: false, feedback: "Séduisant : noter le résultat est concret et rapide. Mais sans décrire l'appui ni les signes d'inconfort, la trace ne permet pas d'ajuster l'accompagnement suivant." },
          { text: "Demander à l'infirmière d'évaluer seule les bénéfices, car elle connaît mieux son état de santé.", correct: false, feedback: "Séduisant : l'évaluation de l'infirmière fait autorité sur le plan de santé. Mais elle ne rend pas compte de la conduite de l'activité ni de l'expérience vécue par la personne." },
          { text: "Considérer que le résultat parle de lui-même et ne rien ajouter au suivi individualisé déjà renseigné.", correct: false, feedback: "Séduisant : s'en tenir au suivi existant évite d'alourdir les écritures. Mais sans bilan de cette séance, l'équipe ne saura pas quelles conditions ont permis la réussite." }
        ] }
    ],
    bilan: "Tu as arbitré entre annuler par prudence et adapter pour maintenir l'autonomie, entre soupçon professionnel et parole de la personne. Point fort : tu as cherché un compromis sécurisant sans renoncer à l'activité. À retravailler : rends visible dans le suivi ce qui a rendu la réussite possible."
  },
  {
    id: "S121", bloc: "B2", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C2.1","C2.3"],
    titre: "Toilette et sécurisation de Madame Laurent",
    description: "En structure, tu prépares la toilette de Madame Laurent, 89 ans. Son fauteuil est posé sur un tapis qui glisse et le disque de douche semble desserré. La collègue du matin t'assure que cela tient depuis des semaines. Que fais-tu ?",
    hints: ["Observe l'environnement avant d'installer la personne.","Le protocole prime sur l'habitude.","Toute anomalie se note et se transmet."],
    variantes: [
      { titre: "Variante — matériel remplacé récemment", description: "Le disque de douche a été changé la veille par un collègue qui affirme l'avoir bien vissé : le doute porte sur le montage plutôt que sur l'usure." },
      { titre: "Variante — retard de prise en charge", description: "Le petit-déjeuner attend et la résidente s'impatiente : sécuriser l'installation prend du temps sur un créneau déjà serré." }
    ],
    steps: [
      {
        q: "Avant de commencer la toilette, que fais-tu face au tapis et au disque ?",
        choices: [
          { text: "Observer, écarter le tapis et vérifier la fixation du disque avant toute installation de la personne.", correct: true, feedback: "Juste : observer et sécuriser l'environnement avant d'agir relève de la sécurisation et de l'hygiène de l'environnement proche. L'avis de la collègue rassurait, mais l'habitude ne vaut pas vérification." },
          { text: "Installer la résidente en tenant compte du tapis, en demandant à une collègue de surveiller le disque.", correct: false, feedback: "Séduisant : faire surveiller le disque par une collègue ajoute une paire d'yeux. Mais cela n'élimine ni le tapis glissant ni le risque, et répartit mal la responsabilité." },
          { text: "Suivre l'habitude de l'équipe et procéder comme d'habitude, puisque l'installation n'a jamais posé de problème.", correct: false, feedback: "Séduisant : l'absence d'incident depuis des semaines est un argument rassurant. Mais l'habitude masque une anomalie visible et expose la personne à une chute." },
          { text: "Prévenir la responsable et attendre son passage, en laissant la toilette pour plus tard dans la matinée.", correct: false, feedback: "Séduisant : prévenir la responsable respecte la hiérarchie et évite d'improviser. Mais différer la toilette pour une vérification simple pénalise la personne sans nécessité." }
        ] },
      {
        q: "Tu confirmes que le disque est desserré : quelle action conduis-tu ?",
        choices: [
          { text: "Interrompre l'installation, sécuriser le matériel selon le protocole et alerter l'infirmière ou la responsable.", correct: true, feedback: "Juste : face à une anomalie, on arrête, on applique le protocole et on alerte : la sécurité prime sur la continuité du geste. Continuer prudemment était tentant mais insuffisant." },
          { text: "Continuer la toilette en évitant de prendre appui sur le disque, en restant très attentif à chaque geste.", correct: false, feedback: "Séduisant : éviter l'appui sur le disque réduit le danger immédiat. Mais un matériel desserré reste instable et la vigilance seule ne constitue pas une sécurisation." },
          { text: "Resserrer le disque toi-même comme tu peux, puis poursuivre, pour ne pas interrompre le soin commencé.", correct: false, feedback: "Séduisant : resserrer soi-même paraît efficace et rapide. Mais hors protocole, le geste peut être inadapté et engage ta responsabilité sans contrôle." },
          { text: "Noter l'anomalie sur la feuille de transmission et poursuivre la toilette, en prévenant à la fin du service.", correct: false, feedback: "Séduisant : consigner l'anomalie garantit qu'elle sera traitée plus tard. Mais reporter l'alerte laisse la personne exposée pendant toute la toilette." }
        ] },
      {
        q: "Que transmets-tu après cet incident ?",
        choices: [
          { text: "L'heure précise, l'anomalie constatée, le matériel sécurisé, l'alerte donnée et l'état de la personne.", correct: true, feedback: "Juste : une transmission datée qui relie anomalie, action et alerte permet à l'équipe de suivre la situation. La mention « toilette faite » était plus courte, mais elle effacerait un risque pour la suite." },
          { text: "La mention que la toilette a été réalisée, sans détailler l'incident matériel déjà réglé selon toi.", correct: false, feedback: "Séduisant : indiquer le soin réalisé montre que le travail est fait. Mais taire l'incident empêche de vérifier la réparation et de prévenir une récidive." },
          { text: "Un avertissement oral à la collègue du matin, en estimant que l'écrit n'est pas utile pour un simple détail.", correct: false, feedback: "Séduisant : prévenir oralement la collègue concernée peut corriger l'habitude. Mais sans trace écrite, l'information se perd au fil des services et des relèves." },
          { text: "Une description longue de l'état de la personne, en laissant de côté les actions menées sur le matériel.", correct: false, feedback: "Séduisant : décrire l'état de la personne est utile au suivi. Mais omettre les actions de sécurisation prive l'équipe de la part technique de l'intervention." }
        ] }
    ],
    bilan: "Tu as arbitré entre continuer le soin et sécuriser l'environnement, entre geste rapide et application du protocole. Point fort : tu as interrompu l'installation face au risque. À retravailler : sois systématique dans la transmission datée des anomalies matérielles."
  },
  {
    id: "S122", bloc: "B2", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C2.2","C2.4"],
    titre: "Constantes et repas d'une personne à risque",
    description: "Au centre, tu prépares le déjeuner de Monsieur Mercier, 76 ans, diabétique. Il réclame un deuxième sucre dans son café alors que sa glycémie du matin est basse. L'aide-soignante du service dit qu'il le fait souvent sans incident. Que décides-tu ?",
    hints: ["Une constante anormale appelle une vigilance renforcée.","Le régime prescrit cadre la distribution du repas.","Toute adaptation se décide avec l'équipe et se transmet."],
    variantes: [
      { titre: "Variante — demande insistante", description: "Monsieur Mercier insiste et trouve que tu le traites comme un enfant : il menace de refuser son plateau si tu ne lui donnes pas le sucre." },
      { titre: "Variante — constante manquante", description: "Le relevé de glycémie du matin n'a pas été saisi dans le dossier : tu dois décider sans donnée récente, alors que le repas est déjà servi." }
    ],
    steps: [
      {
        q: "Avant de servir le plateau, que fais-tu de la glycémie basse signalée ?",
        choices: [
          { text: "Vérifier la valeur et l'heure du relevé, puis adapter le repas au régime prescrit en attendant un avis.", correct: true, feedback: "Juste : vérifier la donnée puis respecter le régime prescrit concilie surveillance de l'état de santé et repas adapté. L'avis de l'aide-soignante rassurait, mais une constante basse appelle une précaution." },
          { text: "Servir le repas habituel sans tenir compte du chiffre, en estimant qu'une seule valeur ne change pas le régime.", correct: false, feedback: "Séduisant : écarter un chiffre isolé évite de désorganiser le service. Mais une glycémie basse est un signal à prendre en compte avant de distribuer le repas." },
          { text: "Rajouter le sucre demandé pour éviter un malaise, en considérant que la glycémie basse va dans le même sens.", correct: false, feedback: "Séduisant : ajouter du sucre part d'une intention de prévenir un malaise. Mais modifier le régime prescrit sans avis médical sort du cadre de la distribution des repas." },
          { text: "Demander à l'infirmière de refaire le relevé avant tout service, en laissant le plateau en attente sur le chariot.", correct: false, feedback: "Séduisant : refaire le relevé sécurise la décision. Mais retarder le repas d'une personne affamée n'est pas nécessaire si l'infirmière peut être alertée rapidement." }
        ] },
      {
        q: "Monsieur Mercier réclame son sucre : comment réagis-tu ?",
        choices: [
          { text: "Lui expliquer la consigne, proposer une alternative autorisée et prévenir l'infirmière de sa demande.", correct: true, feedback: "Juste : expliquer, proposer une solution autorisée et alerter respecte la personne tout en tenant le régime. Céder aurait préservé la paix du repas, mais aurait rompu la prescription." },
          { text: "Céder à sa demande pour préserver son plaisir et éviter une opposition, en notant l'écart après coup.", correct: false, feedback: "Séduisant : accéder à sa demande maintient le climat et son plaisir. Mais un écart au régime noté après coup ne peut pas être validé rétroactivement." },
          { text: "Lui répondre que le régime est obligatoire, sans explication, pour ne pas ouvrir de discussion à table.", correct: false, feedback: "Séduisant : rappeler fermement la règle fait gagner du temps. Mais sans explication, la consigne est vécue comme un refus arbitraire et génère du ressentiment." },
          { text: "Laisser l'aide-soignante décider, puisqu'elle connaît ses habitudes et le suit depuis plusieurs mois.", correct: false, feedback: "Séduisant : s'en remettre à la collègue valorise son expérience. Mais une habitude ancienne ne remplace pas la prescription ni une décision d'équipe documentée." }
        ] },
      {
        q: "Après le repas, que transmets-tu concernant cette situation ?",
        choices: [
          { text: "La glycémie relevée, la demande du résident, la réponse apportée et l'avis attendu de l'infirmière.", correct: true, feedback: "Juste : relier constante, demande, réponse et avis attendu donne une trace exploitable pour le prochain repas. Se contenter de « repas pris » était plus simple, mais perdait le contexte." },
          { text: "Uniquement le fait que le repas a été pris, en jugeant la demande de sucre sans conséquence particulière.", correct: false, feedback: "Séduisant : signaler la prise du repas suffit au suivi courant. Mais sans la demande de sucre ni la glycémie, l'équipe ne dispose d'aucun élément pour anticiper." },
          { text: "La plainte du résident dans le dossier, sans préciser le contexte de glycémie ni la consigne rappelée.", correct: false, feedback: "Séduisant : noter la plainte rend visible le ressenti du résident. Mais sans le contexte médical et la consigne, elle peut être lue comme un simple caprice." },
          { text: "Un message oral à l'infirmière, sans écriture, car le sujet te paraît secondaire une fois le repas terminé.", correct: false, feedback: "Séduisant : prévenir oralement est rapide et direct. Mais sans trace écrite, l'information ne parviendra ni au service du soir ni à la prochaine relève." }
        ] }
    ],
    bilan: "Tu as arbitré entre plaire au résident et respecter le régime prescrit, entre vigilance sur la constante et fluidité du service. Point fort : tu as associé l'infirmière à la décision. À retravailler : trace systématiquement le contexte médical de chaque adaptation de repas."
  },
  {
    id: "S123", bloc: "B3", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C3.1","C3.2"],
    titre: "Transmission écrite au changement de service",
    description: "En structure, il est 19 h et l'équipe de nuit arrive. Le dossier de transmission n'est pas encore rempli : tu as trois vestes à changer, un appel de famille à traiter et une collègue qui part en retard. Comment organises-tu la relève ?",
    hints: ["La transmission garantit la continuité des soins.","Priorise selon l'urgence, pas selon l'ordre d'arrivée.","Les outils numériques facilitent le suivi des informations."],
    variantes: [
      { titre: "Variante — pic d'activité", description: "Deux résidents appellent en même temps et la responsable demande un compte rendu écrit pour 19 h 30 : les priorités s'accumulent." },
      { titre: "Variante — collègue réticente", description: "Ta collègue estime que la transmission peut attendre demain, car « rien de grave ne s'est passé » : tu dois argumenter." }
    ],
    steps: [
      {
        q: "Avant de te lancer, comment réorganises-tu la fin de service ?",
        choices: [
          { text: "Repérer les situations urgentes, prévenir l'équipe de nuit et répartir les tâches restantes avec les collègues.", correct: true, feedback: "Juste : repérer l'urgence et coordonner l'équipe permet une relève sûre même sous pression. L'ordre d'arrivée paraissait équitable, mais il ne distingue pas le vital de l'accessoire." },
          { text: "Traiter les tâches dans l'ordre où elles sont arrivées, pour ne rien oublier par excès de réorganisation.", correct: false, feedback: "Séduisant : suivre l'ordre d'arrivée donne l'impression d'être juste et exhaustif. Mais une tâche urgente traitée tard peut nuire à un résident alors qu'un détail attendait." },
          { text: "T'isoler pour remplir le dossier en premier, en laissant les soins en attente derrière toi.", correct: false, feedback: "Séduisant : s'isoler pour bien écrire évite les erreurs de rédaction. Mais négliger les soins pendant ce temps inverse les priorités de la fin de service." },
          { text: "Proposer à la collègue qui part de rédiger la transmission à ta place, pour gagner du temps.", correct: false, feedback: "Séduisant : déléguer à une collègue disponible peut accélérer la tâche. Mais lui confier la transmission sans connaître tous les événements risque des informations inexactes." }
        ] },
      {
        q: "Un imprévu survient : une résidente est tombée dans le couloir. Que fais-tu ?",
        choices: [
          { text: "Évaluer son état, appliquer le protocole, alerter l'infirmière et réorganiser les tâches en cours.", correct: true, feedback: "Juste : évaluer, protéger et alerter prime, puis on réorganise le reste. Terminer l'écrit d'abord était compréhensible pour la traçabilité, mais fait perdre du temps à une personne à terre." },
          { text: "Achever d'abord la transmission écrite, pour qu'elle soit complète avant de t'occuper de la chute.", correct: false, feedback: "Séduisant : compléter la transmission avant d'agir garantit une trace écrite. Mais laisser une personne au sol sans évaluation aggrave le risque et retarde la prise en charge." },
          { text: "Arrêter toutes les autres activités de l'équipe jusqu'à la résolution complète de cette situation.", correct: false, feedback: "Séduisant : concentrer tout le monde sur l'incident montre la gravité accordée. Mais suspendre les soins des autres résidents crée une nouvelle urgence évitable." },
          { text: "Demander à la résidente ce qu'elle préfère et attendre son accord avant d'appeler qui que ce soit.", correct: false, feedback: "Séduisant : demander son avis respecte l'autonomie de la résidente. Mais après une chute, l'évaluation et l'alerte ne peuvent attendre un accord qui peut être altéré." }
        ] },
      {
        q: "Juste avant de partir, que fais-tu du dossier de transmission ?",
        choices: [
          { text: "Consigner de façon datée les événements, les actions, l'état des personnes et les points à surveiller pour la nuit.", correct: true, feedback: "Juste : une transmission datée et structurée sécurise la continuité pour l'équipe de nuit. Le simple mot griffonné paraissait pratique, mais une note orale se perd et n'a pas de valeur de trace." },
          { text: "Laisser une note rapide sur un coin de feuille, en comptant sur le passage oral de la collègue pour compléter.", correct: false, feedback: "Séduisant : une note hâtive et l'oral vont vite en fin de service. Mais sans écriture structurée, les éléments importants se diluent et la relève repose sur la mémoire." },
          { text: "Renvoyer la saisie numérique au lendemain matin, pour éviter de surcharger l'outil en fin de service.", correct: false, feedback: "Séduisant : différer la saisie ménage un temps déjà chargé. Mais l'équipe de nuit a besoin de l'information immédiatement, pas seulement le lendemain." },
          { text: "Insister uniquement sur la chute, en estimant que les autres informations sont déjà connues de l'équipe.", correct: false, feedback: "Séduisant : mettre en avant la chute retient l'attention sur l'essentiel. Mais occulter les autres surveillances prive l'équipe de nuit d'une vision complète de la situation." }
        ] }
    ],
    bilan: "Tu as arbitré entre urgence vitale et traçabilité, entre coordination d'équipe et accomplissement individuel des tâches. Point fort : tu as su réévaluer les priorités après l'imprévu. À retravailler : finalise une transmission datée, même quand le service déborde."
  },
  {
    id: "S124", bloc: "B3", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C3.2","C3.3"],
    titre: "Organisation d'une journée et prévention des risques",
    description: "Au centre, tu coordonnes la journée quand un collègue signale une flaque d'eau devant l'ascenseur. La responsable veut que la formation des nouveaux agents commence à l'heure, et le planning affiche déjà trois rendez-vous. Comment arbitres-tu ?",
    hints: ["Un risque identifié se traite immédiatement.","La qualité et la prévention concernent toute l'équipe.","Une information transmise protège la continuité du service."],
    variantes: [
      { titre: "Variante — formation déjà lancée", description: "La session de formation a commencé et les stagiaires suivent la visite : interrompre pour sécher la flaque perturbe le programme." },
      { titre: "Variante — responsable absente", description: "La responsable est en réunion et injoignable : tu dois décider seul de la priorité entre sécurité et formation." }
    ],
    steps: [
      {
        q: "Face à la flaque, quelle première décision prends-tu ?",
        choices: [
          { text: "Faire sécuriser la zone aussitôt, signaler le danger puis reprendre le déroulé une fois le risque écarté.", correct: true, feedback: "Juste : écarter un risque de chute immédiatement relève de la prévention, avant la formation. Terminer la présentation paraissait respectueux du programme, mais le danger reste actif pendant ce temps." },
          { text: "Finir la présentation de formation avant de traiter la flaque, pour ne pas couper la session en cours.", correct: false, feedback: "Séduisant : éviter d'interrompre la session garde la cohérence pédagogique. Mais une flaque non traitée peut provoquer une chute pendant que tout le monde regarde ailleurs." },
          { text: "Demander à un stagiaire de s'en occuper, pour associer la formation à une mise en situation réelle.", correct: false, feedback: "Séduisant : confier la tâche à un stagiaire est formateur et valorisant. Mais sans encadrement ni consigne de sécurité, tu délègues un risque à une personne encore en apprentissage." },
          { text: "Prévenir la responsable et attendre sa décision, en laissant la zone en l'état jusqu'à son retour.", correct: false, feedback: "Séduisant : attendre l'aval de la responsable respecte la chaîne de décision. Mais l'absence de réponse ne doit pas laisser un danger persister dans un couloir fréquenté." }
        ] },
      {
        q: "La responsable maintient que la formation doit rester à l'heure : que lui réponds-tu ?",
        choices: [
          { text: "Expliquer que la sécurité est traitée et proposer un rattrapage court, pour concilier prévention et formation.", correct: true, feedback: "Juste : expliquer et proposer un rattrapage concilie deux exigences légitimes. Obéir sans débat aurait simplifié l'échange, mais aurait fait passer l'horaire avant la sécurité." },
          { text: "Accepter sans discussion et reporter le traitement de la flaque à la fin de la journée.", correct: false, feedback: "Séduisant : se plier à la consigne évite un conflit avec la responsable. Mais reporter un risque de chute à la fin de journée n'est pas acceptable en prévention." },
          { text: "Suspendre toute la formation jusqu'à la résolution complète du problème, sans proposer d'alternative.", correct: false, feedback: "Séduisant : arrêter la formation marque la priorité à la sécurité. Mais sans alternative, tu pénalises les nouveaux agents et désorganises le service pour une solution simple." },
          { text: "Faire valoir ton autorité pour imposer l'arrêt, sans prendre en compte les contraintes de planning de la responsable.", correct: false, feedback: "Séduisant : affirmer ton autorité peut faire respecter la consigne de sécurité. Mais imposer sans dialogue crispe la collaboration et ignore les contraintes réelles du planning." }
        ] },
      {
        q: "En fin de journée, que fais-tu de cet épisode dans le suivi qualité ?",
        choices: [
          { text: "Consigner l'incident, la cause recherchée et les mesures prises, puis proposer une amélioration à l'équipe.", correct: true, feedback: "Juste : tracer l'incident, chercher la cause et proposer une amélioration alimente la démarche qualité. La note « flaque séchée » était rapide, mais elle ne prévient pas la récidive." },
          { text: "Noter seulement que la flaque a été séchée, sans chercher pourquoi l'eau avait coulé.", correct: false, feedback: "Séduisant : indiquer l'action menée montre que le problème est réglé. Mais sans recherche de cause, le même écart peut se reproduire dès demain." },
          { text: "En parler oralement à l'équipe, en estimant qu'un incident sans victime ne mérite pas d'écrit.", correct: false, feedback: "Séduisant : échanger oralement diffuse vite l'information. Mais sans trace dans le suivi qualité, l'épisode disparaît et aucune amélioration n'est engagée." },
          { text: "Attendre un prochain incident avant de réagir, pour confirmer qu'il s'agit bien d'un problème récurrent.", correct: false, feedback: "Séduisant : attendre une récidive évite de signaler un fait isolé. Mais la prévention consiste justement à agir avant qu'une chute ne survienne." }
        ] }
    ],
    bilan: "Tu as arbitré entre prévention immédiate et respect du programme, entre autorité et dialogue avec la responsable. Point fort : tu as traité le risque sans renoncer à la formation. À retravailler : documente chaque incident pour nourrir la démarche qualité."
  },
  {
    id: "S125", bloc: "B4", annee: "2", contexte: "structure", duree: "10 min", difficulte: 1,
    competences: ["C4.1","C4.2"],
    titre: "Analyser les besoins avant une action d'éducation à la santé",
    description: "En structure, tu prépares une action sur le sommeil pour douze résidents. Le médecin suggère cet atelier, mais les résidents se plaignent surtout de leurs repas et de la chaleur des chambres. La responsable veut garder le thème prévu. Comment construis-tu l'action ?",
    hints: ["Les besoins se recueillent auprès du public lui-même.","Une action pertinente part de ce que vivent les personnes.","Concevoir l'action suppose de hiérarchiser les priorités."],
    variantes: [
      { titre: "Variante — enquête rapide", description: "Tu ne peux interroger que quatre résidents avant la date prévue : comment éviter de généraliser leurs réponses à tout le groupe ?" },
      { titre: "Variante — injonction hiérarchique", description: "La responsable a déjà validé le support sur le sommeil avec la direction : changer de thème devient délicat sur le plan organisationnel." }
    ],
    steps: [
      {
        q: "Avant de concevoir l'action, comment identifies-tu les besoins ?",
        choices: [
          { text: "Écouter les résidents, croiser leurs plaintes avec les observations de l'équipe et hiérarchiser les besoins.", correct: true, feedback: "Juste : recueillir la parole du public et la croiser avec les observations de l'équipe fonde une action pertinente. Le thème du médecin comptait, mais il ne remplace pas l'analyse des besoins." },
          { text: "Partir du thème validé par le médecin, en considérant que son avis suffit à justifier l'action.", correct: false, feedback: "Séduisant : l'avis du médecin est légitime et donne une base solide. Mais imposer un thème sans écouter les résidents risque une action qui ne répond à rien pour eux." },
          { text: "Reprendre le support de l'an dernier, qui avait déjà traité le sommeil avec un autre groupe.", correct: false, feedback: "Séduisant : réutiliser un support éprouvé fait gagner du temps et rassure. Mais un autre groupe, une autre année et d'autres besoins rendent la transposition hasardeuse." },
          { text: "Interroger uniquement les quatre résidents les plus bavards, pour gagner du temps dans la préparation.", correct: false, feedback: "Séduisant : interroger quelques personnes volontaires est rapide. Mais rester sur les plus bavards biaise l'analyse et exclut les résidents les plus discrets." }
        ] },
      {
        q: "Les plaintes portent sur les repas et la chaleur : que proposes-tu à la responsable ?",
        choices: [
          { text: "Argumenter pour ajuster le thème ou l'angle de l'action, en restant dans le champ de l'éducation à la santé.", correct: true, feedback: "Juste : faire évoluer l'angle de l'action à partir des besoins exprimés, tout en restant dans l'éducation à la santé, est une conception réfléchie. Garder le support validé était plus simple, mais moins utile." },
          { text: "Maintenir le sommeil tel quel, en expliquant que le programme de la direction ne peut pas être modifié.", correct: false, feedback: "Séduisant : respecter le programme décidé évite un conflit avec la direction. Mais une action imposée malgré les besoins exprimés perd son intérêt pour les résidents." },
          { text: "Proposer une action sur l'alimentation et le logement, en sortant du cadre des compétences de l'action.", correct: false, feedback: "Séduisant : répondre aux plaintes sur les repas et le logement paraît plus utile. Mais ces domaines ne relèvent pas de l'éducation à la santé et dépassent ton rôle." },
          { text: "Laisser les résidents choisir entre deux supports déjà prêts, sans revoir le fond du contenu.", correct: false, feedback: "Séduisant : laisser choisir entre deux supports valorise l'avis du public. Mais si le fond reste identique, ce choix donne une illusion de participation sans répondre aux besoins." }
        ] },
      {
        q: "Une fois le thème retenu, comment finalises-tu la conception de l'action ?",
        choices: [
          { text: "Définir un objectif clé, des messages simples et des modalités adaptées au rythme et aux capacités du groupe.", correct: true, feedback: "Juste : un objectif précis, peu de messages et des modalités adaptées rendent l'action accessible. Tout dire dans un long exposé paraissait exhaustif, mais noie l'information essentielle." },
          { text: "Préparer un long exposé complet, pour être sûr de transmettre toutes les informations utiles aux résidents.", correct: false, feedback: "Séduisant : valoriser l'exhaustivité rassure sur le sérieux de l'action. Mais trop de messages perdent l'attention d'un public âgé et nuisent à la mémorisation." },
          { text: "Laisser le contenu se construire pendant la séance, en comptant sur les échanges spontanés du groupe.", correct: false, feedback: "Séduisant : laisser le groupe construire l'action privilégie sa liberté. Mais sans objectif défini, l'échange dérive et l'action d'éducation à la santé perd sa finalité." },
          { text: "Calquer la durée et le niveau d'une action prévue pour des personnes plus jeunes et autonomes.", correct: false, feedback: "Séduisant : réutiliser une durée connue simplifie la préparation. Mais un public plus jeune et plus autonome ne peut pas servir de référence pour ce groupe." }
        ] }
    ],
    bilan: "Tu as arbitré entre le thème institutionnel et les besoins exprimés, entre participation apparente et réelle utilité. Point fort : tu as fondé la conception sur l'écoute des résidents. À retravailler : cadre davantage l'objectif et les messages de l'action."
  },
  {
    id: "S126", bloc: "B4", annee: "1", contexte: "centre", duree: "12 min", difficulte: 2,
    competences: ["C4.3"],
    titre: "Concevoir puis évaluer un support de prévention",
    description: "Au centre, tu dois créer un support pour une action sur la prévention des chutes. La responsable a déjà fait imprimer une affiche très textuelle, mais les résidents lisent difficilement les petits caractères. Tu hésites entre corriger l'existant et repartir d'un autre format. Que fais-tu ?",
    hints: ["Un support lisible est une condition de la mise en œuvre.","L'évaluation commence dès la conception.","Le bilan d'action s'appuie sur des retours d'usage."],
    variantes: [
      { titre: "Variante — délai d'impression court", description: "L'action a lieu demain et toute nouvelle impression prend deux jours : tu dois composer avec l'affiche déjà disponible." },
      { titre: "Variante — collègue attachée au support", description: "La collègue qui a conçu l'affiche y tient beaucoup et craint que tu ne remettes son travail en cause devant l'équipe." }
    ],
    steps: [
      {
        q: "Face à l'affiche peu lisible, quelle première décision prends-tu ?",
        choices: [
          { text: "Tester la lisibilité avec quelques résidents, puis adapter le support en conservant les messages essentiels.", correct: true, feedback: "Juste : tester la lisibilité puis adapter le support relève de la mise en œuvre et de l'évaluation. Garder l'affiche pour son coût était tentant, mais un support illisible ne remplit pas son rôle." },
          { text: "Utiliser l'affiche telle quelle, en expliquant de vive voix les passages les plus difficiles pendant l'action.", correct: false, feedback: "Séduisant : compenser à l'oral garde l'affiche et évite des frais. Mais un document illisible reste un obstacle et l'explication orale disparaît dès la fin de l'action." },
          { text: "Jeter l'affiche et concevoir un support radicalement différent, sans en discuter avec la responsable.", correct: false, feedback: "Séduisant : repartir d'un support neuf garantit une meilleure lisibilité. Mais écarter le travail déjà réalisé sans échange risque de braquer la responsable et de perdre du temps." },
          { text: "Réduire le texte de moitié sans tester, en supposant que moins de mots suffiront à rendre lisible.", correct: false, feedback: "Séduisant : raccourcir le texte paraît une solution rapide. Mais sans test auprès du public, rien ne prouve que la nouvelle version sera comprise." }
        ] },
      {
        q: "Pendant l'action, tu vois que les résidents ne regardent pas le support : que fais-tu ?",
        choices: [
          { text: "Observer ce qui accroche leur attention, adapter ta présentation et noter les réactions pour le bilan.", correct: true, feedback: "Juste : observer l'usage réel et ajuster permet d'évaluer la mise en œuvre en direct. Insister paraissait plus fidèle au support, mais l'absence d'attention signale un problème à traiter." },
          { text: "Insister en montrant l'affiche plus longuement, en supposant qu'une exposition répétée finira par convaincre.", correct: false, feedback: "Séduisant : montrer plus longuement renforce le message. Mais si le support n'accroche pas, répéter la même présentation ne corrigera pas la cause du décrochage." },
          { text: "Interrompre l'action pour refaire le support sur place, avec le matériel dont tu disposes.", correct: false, feedback: "Séduisant : refaire le support sur place répond vite au problème. Mais improviser devant le groupe interrompt l'action et produit souvent un document moins soigné." },
          { text: "Demander à la responsable de prendre la parole, pour vérifier si le message passe mieux avec elle.", correct: false, feedback: "Séduisant : faire intervenir la responsable peut relancer l'attention. Mais déplacer la parole ne dit rien de la qualité du support et te décharge de l'évaluation." }
        ] },
      {
        q: "Après l'action, comment construis-tu le bilan du support ?",
        choices: [
          { text: "Croiser les retours des résidents, les réactions observées et les objectifs, puis proposer une version révisée.", correct: true, feedback: "Juste : confronter retours, observations et objectifs donne un bilan d'action exploitable et une piste d'amélioration. Se dire que l'affiche est restée affichée était plus commode, mais ne mesure aucun effet." },
          { text: "Estimer le bilan positif parce que l'affiche a été affichée jusqu'au bout, sans recueillir d'avis.", correct: false, feedback: "Séduisant : constater que le support est resté en place rassure sur la logistique. Mais sa simple présence ne prouve ni la compréhension ni le changement de comportement visé." },
          { text: "Demander uniquement à la responsable si elle est satisfaite, en considérant que son avis suffit à juger l'action.", correct: false, feedback: "Séduisant : l'avis de la responsable compte dans le suivi de l'action. Mais à lui seul, il remplace la parole du public auquel le support était destiné." },
          { text: "Reporter l'évaluation à la prochaine campagne, en attendant plus de recul sur l'usage du support.", correct: false, feedback: "Séduisant : attendre davantage de recul peut affiner le jugement. Mais sans bilan maintenant, les retours frais se perdent et la prochaine version partira du même constat." }
        ] }
    ],
    bilan: "Tu as arbitré entre conserver l'existant et repenser le support, entre fidélité au document et écoute de son usage réel. Point fort : tu as testé la lisibilité auprès des résidents. À retravailler : construis le bilan à partir de plusieurs sources de retour."
  }
];
