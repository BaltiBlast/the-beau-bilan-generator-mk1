const data = [
  {name: "Fondations",
  categories:[
      {name: "Introduction"},
      {name: "Point parcours 1-2-3"},
      {name: "Participation cockpit"},
      {name: "Participation vie promo"},
      {name: "Conseils pour la suite"},
      {name: "Conclusion"},
   ]},
  {name: "Approfondissement",
  categories:[
    {name: "Introduction"},
    {name: "Point parcours 4-5-6"},
    {name: "Participation cockpit"},
    {name: "Participation vie promo"},
    {name: "Conseils pour la suite"},
    {name: "Conseil orientation spé"},
    {name: "Conclusion"},
    ]},
  {name: "Apothéose",
  categories:[
      {name: "Introduction"},
      {name: "Implication technique (commits Git)"},
      {name: "Soft skills (patience, autonomie, communication)"},
      {name: "Conseil pour le titre pro"},
      {name: "Conclusion"},
    ]},
  {name: "Fin de formation",
  categories:[
      {name: "Introduction",
      levels: [
        {level: 1,
        name: "Étudiant à l'aise, bon niveau",
        notes: [
          {id: 1,
          note: `Ça y est, la folle aventure O'clock s'achève et tu t'en es sorti comme un chef [studentName]!`},
          {id: 2,
          note: `Quelle formation [studentName] ! Tu as excellé tout en gardant ta bonne humeur tout du long. Tu n'hésite pas à aider les autres et ça s'est vraiment super pour les autres et toi même. Comme on vous l'a déjà dit, c'est gagnant gagnant :)`},
          {id: 3,
          note: `Un grand bravo à toi [studentName], tu as excellé pendant toute la formation.`},
          {id: 4,
          note: `Tout simplement bravo pour la totalité de ta formation [studentName]. Ca a été un immense plaisir de t'avoir dans la formation et je peux dire sans me tromper que beaucoup d'étudiants ont été heureux de t'avoir eux aussi`},
        ]
        },
        {level: 2,
        name: "Étudiant correct, des points à améliorer",
        notes: [
          {id: 5,
          note: `Te voici [arrive.ee] au bout de ces 5 mois de formation, et tu t'en es très bien sorti !`},
          {id: 5,
          note: `Ça y est, les 5 mois de ta formation s'achevent, et tu t'en es très bien tire !`},
          {id: 5,
          note: `Tu as franchi la ligne d'arrivée de ce long marathon de 5 mois, et laisse moi te dire que tu t'en es très sorti !`},
        ]},
        {level: 3,
        name: "Étudiant avec un certain retard, niveau moyen",
        notes: [
          {id: 6,
          note: `La formation est à présent terminée, tu peux souffler un bon coup et réaliser tout le chemin parcouru !`},
          {id: 6,
          note: `Ça y est, tu es parvenu au bout du chemin. Ces 5 mois n'ont pas toujours été faciles, mais tu peux désormais souffler un coup et te rendre compte de tout le parcours que tu as réalisé`},
          {id: 6,
          note: `C'est la fin du marathon O'Clock, tu peux souffler un bon coup et réaliser tout le que tu as chemin arpenté !`},
        ]},
        {level: 4,
        name: "Étudiant en difficulté, niveau faible",
        notes: [
          {id: 7,
          note: `Ces 5 mois intenses sont à présent terminés. Bravo à toi pour avoir tenu jusqu'ici !`},
          {id: 7,
          note: `Le marathon O'Clock est officiellement terminé. Ça n'a pas toujours été facile, mais un grand bravo à toi pour avoir tenu jusqu'ici !`},
          {id: 7,
          note: `Te voici [arrive.ee] au bout de ces 5 mois de formation [studentName]. Ce ne fut pas de tout repos, néanmois bravo à toi pour avoir le coup jusqu'au bout !`},
        ]},
      ]},
      {name: "Évolution technique",
      levels: [
        {level: 1,
        name: "Tout est réussi",
        notes: [
          {id: 1,
          note: `Tu as le soucis du détail et du travail bien fait, et tu ne laisse rien au hasard. Tes parcours sont exemplaires. `},
          {id: 2,
          note: `Trouver une phrase`},
          {id: 3,
          note: `Trouver une phrase`},
        ]},
        {level: 2,
        name: "C'est en progression",
        notes: [
          {id: 1,
          note: `Je tiens à te féliciter pour la motivation dont tu as fait preuve pendant cette formation. Ce n'était pas de tout repos mais tu as tenu bon en te donnant au maximum pour réussir et on note une très bonne progression tout le long de la formation.`},
          {id: 2,
          note: `Trouver une phrase`},
          {id: 3,
          note: `Trouver une phrase`},
        ]},
        {level: 3,
        name: "En dent de scie",
        notes: [
          {id: 1,
          note: `Ça n'a pas été de tout repos pour toi, avec des parcours mieux réussis que d'autres. `},
          {id: 2,
          note: `Trouver une phrase`},
          {id: 3,
          note: `Trouver une phrase`},
        ]},
        {level: 4,
        name: "En diminution graduelle",
        notes: [
          {id: 1,
          note: `Tu as bien réussis les parcours au départ, mais a eu de plus en mal de mal à chaque parcours. `},
          {id: 2,
          note: `Trouver une phrase`},
          {id: 3,
          note: `Trouver une phrase`},
        ]},
        {level: 5,
        name: "C'est la galère partout",
        notes: [
          {id: 1,
          note: `La formation a été difficile pour toi, avec beaucoup de parcours non aboutis.`},
          {id: 2,
          note: `Trouver une phrase`},
          {id: 3,
          note: `Trouver une phrase`},
        ]},
      ]},
      {name: "Vie dans la promo",
      levels: [
        {level: 1,
        name: "Moteur en cockpit et sur Slack",
        notes: [
          {id: 1,
          note: `Ta participation a été exemplaire tout du long en cockpit et sur slack. Tu as été d'une grande aide pour les autres apprenants, et tu as participé à la bonne ambiance de la classe. Nul doute que tu en as toi retiré beaucoup de bénéfices !`}
        ]},
        {level: 2,
        name: "Moteur sur Slack mais timide en cockpit",
        notes: [
          {id: 1,
          note: `Tu as eu une super participation sur Slack où tu n'as pas hésité à poser des questions et aider les autres. Tu as été un peu plus discrèt en cockpi, c'est dommage car tu aurais pu poser des questions supplémentaires au prof ou tenter d'aider les autres ce qui est très bénéfique. `}
        ]},
        {level: 3,
        name: "Moteur en cockpit mais timide sur Slack",
        notes: [
          {id: 1,
          note: `Tu as été actif en cockpit, en n'hésitant pas à aider les autres ou à poser des questions, c'est super ! Par contre tu as été plus discrèt sur slack, c'est dommage car ça peut te permettre de participer à des discussions intéressantes ou de toi même en lancer.`}
        ]},
        {level: 1,
        name: "Discret sur les deux",
        notes: [
          {id: 1,
          note: `Tu as été discrèt pendant toute la formation. C'est dommage car tu n'as pas profiter à 100% de l'intérêt d'avoir un formateur et une communauté d'apprenant au bout de ton clavier. Pour la suite, je te conseille d'être plus proactif sur ce point, ça te permettra d'obtenir des réponses à des questions que tu peux avoir ou bien d'échanger sur des sujets intéressants qui t'apporteront beaucoup.`}
        ]},
      ]},
      {name: "Conseils projet pro",
      levels: [
        {level: 1,
        name: "Souhaite passer le TP prochainement",
        notes: [
          {id: 1,
          note: `Vu que tu souhaites passer le TP prochainement, nous te conseillons de retravailler sur le projet d'apothéose afin de t'approprier le code réalisé par ton groupe.`}
        ]},
        {level: 1,
        name: "Souhaite passer le TP plus tard",
        notes: [
          {id: 1,
          note: `Vu que tu souhaites passer le TP, nous te conseillons de retravailler sur le projet d'apothéose afin de t'approprier le code réalisé par ton groupe. Mais tu peux aussi prendre le temps de refaire un projet qui te sera propre si tu le souhaites, tu as toutes les cartes en main pour y parvenir.`}
        ]},
        {level: 1,
        name: "Autre",
        notes: [
          {id: 1,
          note: `Ta formation est finie mais pas ton apprentissage ! N'hésite pas à reprendre les challenges pour les maîtriser comme il se doit et continuer ta progression.`}
        ]},
      ]},
      {name: "Conclusion",
      levels: [
        {level: 1,
        name: "",
        notes: [
          {id: 1,
          note: `Ajouter une phrase ici`}
        ]}
      ]},
      {name: "Félicitations/Encouragements",
      levels: [
        {level: 1,
        name: "",
        notes: [
          {id: 1,
          note: `Ajouter une phrase ici`}
        ]}
      ]},
      {name: "Conclusion",
      levels: [
        {level: 1,
        name: "Étudiant à l'aise, bon niveau",
        notes: [
          {id: 1,
          note: `Avec ce que tu nous as proposé durant toute la formation, nous ne sommes vraiment pas inquiet pour la suite !`},
          {id: 1,
          note: `Ton futur employeur aura de la chance de t'avoir dans son équipe ! Je te souhaite de t'amuser dans ton futur job.`},
        ]},
        {level: 2,
        name: "Étudiant correct, des points à améliorer",
        notes: [
          {id: 1,
          note: `Ta rigueur et ton bon apprentissage font de toi un bon étudiant. Garde le cap et tu deviendras un bon développeur !`}
        ]},
        {level: 3,
        name: "Étudiant avec un certain retard, niveau moyen",
        notes: [
          {id: 1,
          note: `Avec une formation aussi intensive, normal de ne pas tout maîtriser sous le bout des doigts. Laisse toi un peu de temps et de pratique pour comprendre que tu te débrouilles au final pas si mal !`}
        ]},
        {level: 4,
        name: "Étudiant en difficulté, niveau faible",
        notes: [
          {id: 1,
          note: `Tu as su démontrer tout au long de la formation que tu étais capable de t'accrocher malgré la difficulté. C'est une qualité importante quand on est développeur, avec du temps et du travail tu finiras par être à l'aise !`}
        ]},
      ]},
  ]},
]