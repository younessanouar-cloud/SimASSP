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
    competences: ["C4.1", "C4.2", "C4.3"],
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
    competences: ["C3.5", "C3.2"],
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
    competences: ["C4.3"],
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
    competences: ["C4.3"],
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
    competences: ["C3.2", "C3.5"],
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
    competences: ["C3.2", "C3.1"],
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
    competences: ["C4.3"],
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
    competences: ["C4.1", "C4.3"],
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
    competences: ["C4.3"],
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
    competences: ["C4.1", "C4.3"],
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
    competences: ["C4.3"],
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
    competences: ["C4.3"],
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
