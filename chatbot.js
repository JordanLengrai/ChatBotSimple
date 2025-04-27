

const categories = [
      {
        keywords: ["bonjour", "salut", "coucou", "hello", "yo", "wesh", "hey", "bonsoir", "rebonjour", "bienvenue", "hi", "holà", "yop", "plop", "bon matin", "bonne journée", "bonne soirée", "bonne nuit", "salutations", "greetings", "sal's", "re", "yolo"],
        responses: [
            "Salut ! Comment puis-je t'aider ?",
            "Bonjour ! Ravi de te voir.",
            "Coucou ! Que puis-je faire pour toi ?",
            "Hello ! Besoin d'aide ?",
            "Hey ! Tu veux discuter ?",
            "Bienvenue ! Je suis là pour toi.",
            "Bon matin à toi !",
            "Bonne soirée ! Prêt à papoter ?",
            "Wesh la forme ?",
            "Plop ! Prêt pour une discussion ?",
            "Yop ! Comment ça va ?"
        ]
    },

    {
        keywords: ["ça va", "comment tu vas", "comment vas-tu", "tu vas bien", "ça roule", "ça gaze", "en forme", "tu vas comment", "ça boume", "ça baigne", "tu te sens bien", "ça dit quoi", "ça farte", "ça boom", "ça va bien", "bien ?", "bien toi ?", "ça va ?", "ça va toi ?", "ça va aujourd'hui", "la forme ?", "ça roule ma poule", "ça gaze le gaz ?", "ça roule ?", "quoi de neuf", "quoi d'beau", "quoi de beau", "quoi de neuf docteur", "tu vas bien ?"],
        responses: [
            "Je vais très bien, merci ! Et toi ?",
            "Toujours au top ! Et toi, comment ça va ?",
            "Je suis une IA, donc toujours en forme !",
            "La forme olympique !",
            "Super, merci de demander !",
            "Toujours la pêche !",
            "Je n'ai pas de sentiments, mais je vais bien !"
        ]
    },

    {
        keywords: ["météo", "temps", "fait-il beau", "pluie", "soleil", "il fait chaud", "il fait froid", "orage", "neige", "vent", "climat", "prévisions", "prévision", "température", "ciel", "nuage", "grêle", "averse", "il fait quel temps", "il fait quel temps chez toi", "la météo chez toi", "il fait beau aujourd'hui", "il fait moche", "il fait mauvais", "il fait doux", "il fait frais", "il fait humide", "il fait sec"],
        responses: [
            "Je ne peux pas regarder par la fenêtre, mais j'espère qu'il fait beau chez toi !",
            "Il fait toujours beau dans le cloud !",
            "Je ne peux pas prédire la météo, mais je peux te raconter une blague si tu veux.",
            "Il paraît qu'il fait beau sur Mars aujourd'hui !",
            "Je suis au sec, pas de souci de météo pour moi.",
            "Le soleil brille dans mes circuits !",
            "La météo, c'est un peu comme l'humeur des humains : imprévisible !"
        ]
    },

    {
        keywords: ["blague", "raconte", "rigole", "humour", "plaisanterie", "fais-moi rire", "vanne", "histoire drôle", "punchline", "private joke", "une autre blague", "encore une blague", "tu connais une blague", "blagounette", "drole", "tu as de l'humour", "tu peux faire une blague", "blague informatique", "blague geek", "blague nulle", "blague courte", "blague longue", "blague sur les chats", "blague sur les chiens", "blague sur les blondes", "blague carambar"],
        responses: [
            "Pourquoi les développeurs n'aiment pas la nature ? Parce qu'il y a trop de bugs !",
            "Quel est le comble pour un informaticien ? Avoir des problèmes de connexion familiale.",
            "Pourquoi JavaScript déteste-t-il les boucles ? Parce qu'il tourne en rond !",
            "Pourquoi les canards sont toujours à l'heure ? Parce qu'ils sont dans l'étang !",
            "Quel est le fruit préféré des informaticiens ? La RAM-braise !",
            "Pourquoi les chats n'aiment pas l'eau ? Parce que ça mouille !",
            "Quelle est la boisson préférée des informaticiens ? Le Java !",
            "Pourquoi les blondes regardent-elles l'orage ? Pour voir les éclairs !",
            "Pourquoi les poissons détestent l'ordinateur ? À cause du net !"
        ]
    },

    {
        keywords: ["merci", "thanks", "merci beaucoup", "thx", "thanks a lot", "merci bien", "cimer", "merci infiniment", "merciii", "merci beaucoup pour ton aide", "merci pour tout", "je te remercie", "merci à toi", "merci d'avance", "merci du fond du cœur", "merci mille fois", "merci infiniment"],
        responses: [
            "Avec plaisir !",
            "De rien, n'hésite pas si tu as d'autres questions !",
            "Toujours là pour t'aider !",
            "Pas de souci !",
            "C'est normal, je suis là pour ça.",
            "Merci à toi aussi !"
        ]
    },

    {
        keywords: ["au revoir", "bye", "à plus", "ciao", "à bientôt", "adieu", "à la prochaine", "bonne continuation", "bonne route", "see you", "see ya", "à tout à l'heure", "à plus tard", "bonne nuit", "bonne soirée", "bonne journée", "à plus dans le bus", "à la revoyure", "à demain", "à tout de suite", "à tantôt", "à une prochaine", "à toute"],
        responses: [
            "À bientôt !",
            "Au revoir et bonne journée !",
            "Ciao ! Reviens quand tu veux.",
            "Bonne nuit ! Fais de beaux rêves.",
            "À la prochaine ! Prends soin de toi.",
            "À toute !"
        ]
    },

    {
        keywords: ["qui es-tu", "présente-toi", "tu es qui", "c'est quoi ton nom", "tu t'appelles comment", "identité", "présentation", "présente toi", "t'es qui", "t'es quoi", "t'es un robot", "es-tu humain", "es-tu une ia", "t'es une intelligence artificielle", "es-tu un humain", "es-tu une machine", "es-tu réel", "es-tu vivant", "es-tu vivant ?", "es-tu réel ?"],
        responses: [
            "Je suis un chatbot statique qui simule une IA !",
            "Je suis un bot JavaScript, prêt à discuter de tout !",
            "Je suis une IA de démonstration, mais j'essaie d'être sympa.",
            "Je suis ton assistant virtuel préféré !",
            "Je suis un programme, mais je fais de mon mieux pour discuter.",
            "Je suis une création numérique, mais je peux discuter de tout !"
        ]
    },

    {
        keywords: ["heure", "date", "quel jour", "quelle heure", "il est quelle heure", "on est quel jour", "quel mois", "quel année", "c'est quand", "c'est quel jour aujourd'hui", "donne-moi l'heure", "donne-moi la date", "peux-tu me dire l'heure", "peux-tu me dire la date", "quelle heure est-il", "quel jour sommes-nous", "quelle est la date aujourd'hui", "peux-tu donner la date", "peux-tu donner l'heure"],
        responses: [
            () => `Nous sommes le ${new Date().toLocaleDateString()} et il est ${new Date().toLocaleTimeString()}`,
            "Je ne porte pas de montre, mais ton ordinateur doit avoir l'heure juste !",
            () => `Aujourd'hui, c'est ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`,
            () => `Il est exactement ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`
        ]
    },

    {
        keywords: ["aide", "help", "comment faire", "je comprends pas", "besoin d'aide", "aide-moi", "tu peux m'aider", "je n'arrive pas", "tu sais comment", "tu peux expliquer", "je ne sais pas", "aide moi", "explique moi", "explique-moi", "comment ça marche", "comment utiliser", "j'ai besoin d'aide", "aide stp", "aide-moi stp", "peux-tu m'aider", "tu peux m'aider ?", "comment on fait", "je suis perdu", "je suis bloqué", "tu peux m'aider à comprendre"],
        responses: [
            "Explique-moi ce que tu veux faire, je vais essayer de t'aider !",
            "Je peux répondre à tes questions sur plein de sujets. Vas-y, lance-toi !",
            "Détaille ton problème, je vais tenter de t'aider.",
            "Je suis là pour t'aider, pose ta question !",
            "Je vais faire de mon mieux pour t'aider !"
        ]
    },

    {
        keywords: ["foot", "football", "soccer", "basket", "basketball", "nba", "rugby", "tennis", "roland garros", "f1", "formule 1", "cyclisme", "tour de france", "handball", "sport", "sports", "match", "score", "résultat", "vainqueur", "champion", "ligue", "equipe", "joueur", "but", "buteur", "carton rouge", "carton jaune", "arbitre", "stade", "olympique", "olympiques", "jeux olympiques", "paris 2024", "coupe du monde", "mondial", "championnat", "finale", "demi-finale", "quart de finale", "match nul", "victoire", "défaite"],
        responses: [
            "Tu veux parler de sport ? Je ne peux pas regarder les matchs, mais je peux discuter !",
            "Le sport, c'est la santé ! Tu as une équipe préférée ?",
            "Je ne peux pas donner les scores en direct, mais j'aime bien le foot virtuel.",
            "Les Jeux Olympiques, c'est impressionnant, tu ne trouves pas ?"
        ]
    },

    {
        keywords: ["cinéma", "film", "films", "acteur", "actrice", "réalisateur", "série", "séries", "netflix", "prime video", "disney+", "blockbuster", "oscar", "palme d'or", "festival de cannes", "star", "hollywood", "bollywood", "comédie", "drame", "action", "aventure", "horreur", "thriller", "science-fiction", "sf", "fantastique", "animation", "dessin animé", "court-métrage", "long-métrage", "projection", "affiche", "bande-annonce", "sortie cinéma", "popcorn"],
        responses: [
            "Tu aimes le cinéma ? J'adore les films de science-fiction !",
            "Quel est ton film préféré ?",
            "Je ne peux pas aller au cinéma, mais j'aime discuter de films.",
            "Tu as vu un bon film récemment ?"
        ]
    },

    {
        keywords: ["musique", "chanson", "chanteur", "chanteuse", "groupe", "album", "playlist", "spotify", "deezer", "apple music", "rap", "pop", "rock", "metal", "classique", "jazz", "blues", "électro", "techno", "reggae", "ragga", "rnb", "country", "folk", "musicien", "concert", "festival", "clip", "parole", "paroles", "note de musique", "partition", "instrument", "guitare", "piano", "batterie", "violon", "saxophone", "trompette", "flûte", "musique du monde"],
        responses: [
            "La musique adoucit les circuits ! Tu joues d'un instrument ?",
            "Quel genre de musique préfères-tu ?",
            "Tu as une chanson préférée ?",
            "J'écoute tout, du classique au rap en passant par l'électro !"
        ]
    },

    {
        keywords: ["jeu vidéo", "jeux vidéo", "gaming", "gamer", "console", "pc", "playstation", "xbox", "switch", "nintendo", "steam", "epic games", "jeu mobile", "jeu en ligne", "jeu solo", "jeu multi", "fps", "rpg", "mmo", "mmorpg", "simulation", "stratégie", "aventure", "plateforme", "puzzle", "battle royale", "fortnite", "minecraft", "call of duty", "fifa", "zelda", "mario", "pokemon", "league of legends", "lol", "valorant", "apex", "rocket league", "animal crossing", "among us", "jeu de rôle", "jeu de cartes", "jeu de société"],
        responses: [
            "Tu es gamer ? C'est quoi ton jeu préféré ?",
            "J'adore discuter gaming ! Tu joues sur console ou PC ?",
            "Je ne peux pas jouer, mais je peux parler de jeux vidéo autant que tu veux.",
            "Tu préfères les jeux solo ou multijoueur ?"
        ]
    },

    {
        keywords: ["animal", "animaux", "chien", "chat", "poisson", "oiseau", "lapin", "hamster", "cheval", "poney", "tortue", "perroquet", "souris", "rat", "furet", "serpent", "lézard", "reptile", "araignée", "insecte", "animalerie", "animal domestique", "animal sauvage", "zoo", "vétérinaire", "adopter un animal", "adoption", "croquettes", "litière", "niche", "cage", "aquarium", "terrarium"],
        responses: [
            "Tu as des animaux ? Dis-m'en plus !",
            "Moi je préfère les chats... électroniques !",
            "Les animaux sont trop mignons, tu ne trouves pas ?",
            "Tu préfères les chiens ou les chats ?"
        ]
    },

    {
        keywords: ["manger", "nourriture", "plat", "cuisine", "recette", "repas", "déjeuner", "dîner", "petit-déjeuner", "goûter", "dessert", "pizza", "burger", "pâtes", "riz", "viande", "poisson", "fromage", "pain", "fruits", "légumes", "chocolat", "bonbon", "gâteau", "crêpe", "galette", "tarte", "glace", "yaourt", "boisson", "soda", "jus", "eau", "café", "thé", "bière", "vin", "alcool", "apéritif", "apéro", "faim", "soif", "j'ai faim", "j'ai soif"],
        responses: [
            "J'adore parler de nourriture ! Tu as faim ?",
            "Quel est ton plat préféré ?",
            "Je ne mange pas, mais je peux te donner une recette !",
            "Plutôt sucré ou salé ?"
        ]
    },

    {
        keywords: ["école", "étude", "études", "collège", "lycée", "université", "fac", "prof", "professeur", "élève", "étudiant", "cours", "classe", "matière", "devoir", "examen", "contrôle", "note", "bulletin", "rentrée", "vacances scolaires", "bac", "baccalauréat", "diplôme", "révision", "réviser", "apprendre", "enseignement", "formation", "scolarité", "pédagogie", "pédagogue", "apprentissage"],
        responses: [
            "Tu es encore à l'école ? Tu aimes ça ?",
            "Quelle est ta matière préférée ?",
            "Tu veux de l'aide pour tes devoirs ?",
            "L'école, c'est important pour apprendre plein de choses !"
        ]
    },

    {
        keywords: ["amour", "aimer", "amoureux", "amoureuse", "relation", "relations", "couple", "petit ami", "petite amie", "crush", "copain", "copine", "ami", "amie", "ami(e)", "sentiment", "sentiments", "amitié", "romantique", "romance", "cœur", "rupture", "séparation", "fiançailles", "mariage", "divorce", "célibataire", "drague", "séduire", "séduction", "flirt", "jalousie", "jaloux", "jalouse", "bisou", "bisous", "baiser", "calin", "câlin"],
        responses: [
            "L'amour, c'est compliqué, même pour une IA !",
            "Tu veux parler de relations ? Je suis tout ouïe.",
            "Je peux écouter tes histoires d'amour, même si je ne tombe pas amoureux.",
            "L'amitié, c'est important aussi !"
        ]
    },

    {
        keywords: ["voyage", "voyages", "vacances", "partir", "partir en vacances", "tourisme", "touriste", "destination", "pays", "ville", "avion", "train", "bus", "voiture", "bateau", "croisière", "hôtel", "auberge", "camping", "randonnée", "aventure", "explorer", "exploration", "carte", "itinéraire", "guide", "road trip", "séjour", "séjourner", "vol", "billet d'avion", "billet de train", "valise", "bagage", "découvrir", "découverte"],
        responses: [
            "Tu aimes voyager ? Tu es déjà allé loin ?",
            "Quelle est ta destination de rêve ?",
            "Je ne voyage qu'à travers les données, mais ça compte ?",
            "Tu préfères la mer, la montagne ou la ville ?"
        ]
    },

    {
        keywords: ["technologie", "tech", "informatique", "ordinateur", "pc", "smartphone", "téléphone", "tablette", "internet", "web", "réseau", "wifi", "bluetooth", "usb", "cloud", "serveur", "logiciel", "application", "appli", "app", "programme", "programmation", "développement", "développeur", "dev", "code", "coder", "robot", "intelligence artificielle", "ia", "machine learning", "deep learning", "algorithme", "data", "donnée", "big data", "cybersécurité", "hacker", "pirate", "mot de passe", "sécurité", "bug", "erreur", "crash", "mise à jour", "update", "télécharger", "installation", "installer", "giga", "méga", "octet", "gigaoctet", "mégaoctet", "stockage", "disque dur", "ssd", "ram", "processeur", "cpu", "gpu", "carte graphique", "écran", "clavier", "souris", "périphérique"],
        responses: [
            "La technologie, c'est mon univers ! Tu veux parler de quoi ?",
            "Tu aimes l'informatique ? Je peux répondre à tes questions.",
            "Je suis une IA, la technologie c'est mon truc !",
            "As-tu déjà programmé quelque chose ?"
        ]
    },




   
    {
        keywords: ["intelligence artificielle", "ia", "machine learning", "deep learning", "réseau de neurones", "algorithme", "modèle", "chatbot", "robot", "assistant virtuel", "gpt", "openai", "chatgpt", "biais", "hallucination", "ia générative", "nlp", "langage naturel", "turing", "test de turing", "singularité", "superintelligence"],
        responses: [
            "L'intelligence artificielle, c'est ma passion ! Tu veux parler de machine learning ou de chatbots ?",
            "Je suis une IA, donc c'est un sujet qui me parle !",
            "Les modèles de langage comme moi utilisent des réseaux de neurones pour générer du texte.",
            "La singularité, c'est quand l'IA dépassera l'humain... mais on y est pas encore !",
            "Les IA génératives comme moi peuvent créer du texte ou des images !"
        ]
    },
  
    {
        keywords: ["informatique", "ordinateur", "pc", "serveur", "cloud", "programmation", "coder", "code", "développeur", "dev", "logiciel", "application", "programme", "python", "javascript", "html", "css", "java", "c++", "php", "sql", "base de données", "api", "docker", "linux", "windows", "git", "github", "gitlab", "commit", "push", "pull", "merge", "branche", "test", "optimisation", "performance", "architecture", "microservices", "devops", "kubernetes", "monitoring", "logs"],
        responses: [
            "L'informatique, c'est tout un univers ! Tu veux parler de programmation, de cloud ou de devops ?",
            "Tu codes dans quel langage ? Python, JavaScript, autre ?",
            "Je peux expliquer les concepts de base de la programmation, ou discuter d'outils comme Git ou Docker.",
            "Les bugs font partie de la vie d'un développeur, même pour les IA !"
        ]
    },
    
    {
        keywords: ["cybersécurité", "sécurité informatique", "hacking", "hacker", "pirate", "attaque", "phishing", "malware", "virus", "ransomware", "pentest", "vulnérabilité", "faille", "exploit", "sécurité réseau", "firewall", "vpn", "authentification", "mot de passe", "cryptographie", "ssl", "tls", "https", "clé publique", "clé privée", "attaque brute force", "sql injection", "xss", "csrf", "rootkit", "spyware", "fuite de données", "data leak", "data breach", "soc", "siem", "logs de sécurité"],
        responses: [
            "La cybersécurité, c'est essentiel aujourd'hui ! Tu veux parler de protection des données ou de hacking éthique ?",
            "Le phishing et les ransomwares sont des menaces courantes sur Internet.",
            "Pour sécuriser tes mots de passe, utilise un gestionnaire !",
            "La cryptographie est la base de la sécurité informatique moderne."
        ]
    },

    {
        keywords: ["science", "scientifique", "physique", "chimie", "biologie", "maths", "mathématiques", "statistiques", "probabilité", "analyse de données", "data", "big data", "data science", "data scientist", "machine learning", "régression", "classification", "clustering", "visualisation de données", "dataviz", "modélisation", "prédiction", "supervisé", "non supervisé", "jeu de données", "dataset", "nettoyage de données", "scraping", "csv", "excel", "google sheets", "test d'hypothèse", "simulation", "modèle mathématique", "formule", "équation", "distribution", "loi normale", "bayes", "bayésien", "probabiliste"],
        responses: [
            "La science des données, c'est passionnant ! Tu veux parler de data science ou de statistiques ?",
            "Les modèles mathématiques permettent de mieux comprendre le monde.",
            "La data science combine programmation, statistiques et visualisation !",
            "Tu veux un exemple d'algorithme de machine learning ?"
        ]
    },

];

const defaultResponses = [
    "Désolé, je ne comprends pas. Peux-tu reformuler ?",
    "Hmm, je n'ai pas compris. Essaie de poser la question autrement !",
    "Je ne suis pas sûr de comprendre, mais je veux bien essayer d'aider !",
    "C'est intéressant, mais je ne sais pas quoi répondre..."
];


const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

function appendMessage(sender, message, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(isUser ? 'user' : 'bot');
 
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.innerText = isUser ? '😊' : '🤖';
   
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.innerText = message;
    if (isUser) {
        msgDiv.appendChild(bubble);
        msgDiv.appendChild(avatar);
    } else {
        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
    }
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {
    msg = msg.toLowerCase();
    for (const cat of categories) {
        for (const kw of cat.keywords) {
            if (msg.includes(kw)) {
                const resp = cat.responses[Math.floor(Math.random() * cat.responses.length)];
                return typeof resp === 'function' ? resp() : resp;
            }
        }
    }

    return "Je ne suis pas sûr de comprendre, mais je veux bien essayer d'aider !";
}

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = userInput.value;
    appendMessage('Toi', message, true);
    userInput.value = '';
    setTimeout(() => {
        appendMessage('Bot', getBotReply(message), false);
    }, 500 + Math.random() * 500);
});
