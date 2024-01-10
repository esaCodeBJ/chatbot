const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const micBtn = document.querySelector("#mic-btn");
const sendChatBtn = document.querySelector(".chat-input span");

const API_KEY = ""; // Assurez-vous de protéger cette clé


const phraseDictionary = {
    "coucou": "Coucou ! Comment ça va aujourd'hui ?",
    "comment ça va": "Moi, ça va super bien ! Et toi, comment tu te sens ?",
    "ça va bien": "Oui, ça va super bien. T'es de bonne humeur ?",
    "tout va bien": "Oui, tout va super bien !",
    "quel temps fait-il": "Je ne peux pas regarder par la fenêtre pour le savoir, désolé !",
    "quelle est la météo": "Je ne sais pas, il fait toujours beau ici !",
    "comment tu t'appelles": "Je m'appelle Esabot. Et toi, comment tu t'appelles ?",
    "ton prénom": "Je m'appelle Esabot. C'est un joli prénom, non ?",
    "tu veux jouer à cache-cache": "Oh oui, j'adore jouer à cache-cache ! Compte jusqu'à dix et je vais me cacher !",
    "j'aime les glaces": "Miam, les glaces, c'est trop bon ! Quel est ton parfum préféré ?",
    "je suis triste": "Oh non, ne sois pas triste. Viens, raconte-moi ce qui ne va pas.",
    "raconte-moi une blague": "D'accord, voici une blague rigolote : Pourquoi les poissons n'utilisent-ils jamais d'ordinateurs ? Parce qu'ils ont peur du net !",
    "tu es mon ami ?": "Bien sûr, je suis ton ami pour toujours !",
    "j'aime dessiner des arcs-en-ciel": "Dessiner des arcs-en-ciel, c'est magique ! Tu devrais me montrer tes dessins.",
    "qui est ton personnage de dessin animé préféré": "Mickey Mouse est mon ami de dessin animé préféré. Et toi, tu as un personnage préféré ?",
    "j'ai une licorne en peluche": "Les licornes en peluche sont adorables ! Montre-moi ta licorne préférée !",
    "je vais à l'école demain": "L'école, c'est génial pour apprendre de nouvelles choses !",
    "tu aimes les histoires de fées": "Oh oui, j'adore les histoires de fées. Elles sont remplies de magie et d'aventures !",
    "quelle est ta couleur préférée": "Ma couleur préférée est le bleu. Et toi, quelle est la tienne ?",
    "quelle est la météo": "Désolé, je ne peux pas te donner la météo actuelle.",
    "ton nom": "Je suis Esabot. ",
    "quel est ton nom": "Je suis Esabot. ",
    "donne-moi ton nom": "Je suis Esabot. ",
    "donne moi ton nom": "Je suis Esabot. ",
    "comment tu t'appelles": "Je m'appelle Esabot.",
    "que sais-tu faire": "Je peux répondre à des questions, raconter des blagues, et bien plus encore !",
    "que sait tu faire": "Je peux répondre à des questions, raconter des blagues, et bien plus encore !",
    "dis-moi tes compétences": "Je peux t'aider avec des réponses, raconter des blagues, et d'autres choses amusantes !",
    "hello": "Salut toi ",
    "que sais tu faire": "Je peux répondre à des questions, raconter des blagues, et bien plus encore !",
    "salut": "Salut ! Comment puis-je t'aider ?",
    "bonjour": "Bonjour ! Comment puis-je te servir ?",
    "c'est quoi l'histoire": "L'histoire est la science qui reconstitue le passé de l'Homme. Elle nous permet de comprendre comment le monde a évolué au fil du temps.",
    "raconte-moi l'histoire": "L'histoire est fascinante ! Par où veux-tu commencer ?",
    "parle-moi de l'histoire": "L'histoire est une discipline qui étudie le passé de l'humanité. Elle explore les événements, les personnages et les cultures du passé.",
    "les sources de l'histoire": "Les sources de l'histoire comprennent les sources orales, les sources écrites, les artefacts archéologiques et bien d'autres.",
    "quelles sont les sources de l'histoire": "Les sources de l'histoire incluent les documents écrits, les témoignages oraux, les découvertes archéologiques, etc.",
    "la superficie de la côte d'ivoire": "La Côte d'Ivoire a une superficie d'environ 322 463 kilomètres carrés.",
    "quelle est la taille de la côte d'ivoire": "La Côte d'Ivoire a une superficie d'environ 322 463 kilomètres carrés.",
    "c'est quoi la géographie": "La géographie est  la science qui décrit et explique les phénomènes naturels qui se manifestent à la surface de la terre , elle a plusieurs domaines que sont : la géographie physique, la géographie humaine et la géographie économique.",
    "qu'est-ce que la géographie": "La géographie est l'étude de la Terre, de ses caractéristiques physiques, de ses populations et de ses paysages.",
    "c'est quoi le climat": "Le climat est l'état moyen de l'atmosphère dans une région donnée",
    "explique-moi le climat": "Le climat est la condition moyenne de la météo dans une région sur une longue période. Il comprend des éléments comme la température, l'humidité et les précipitations.",
    "que sais-tu faire": "Je peux répondre à des questions, raconter des blagues, et bien plus encore !",
    "quelles sont tes capacités": "Je peux t'aider avec des informations, des blagues, et d'autres choses amusantes !",
    "les mathématiques": "Les mathématiques sont une discipline qui étudie les nombres, les quantités, les structures, les transformations et les propriétés spatiales. Elles sont présentes dans de nombreux domaines de la science et de la technologie.",
    "qui a écrit Romeo et Juliette": "Romeo et Juliette a été écrit par William Shakespeare.",
    "c'est quoi la philosophie": "La philosophie est une discipline intellectuelle qui explore des questions fondamentales sur la réalité, la connaissance, la morale et l'existence. Elle encourage la réflexion critique et la recherche de la sagesse.",
    "quel est le plus grand animal du monde": "Le plus grand animal du monde est la baleine bleue.",
    "quelle est la capitale de la France": "La capitale de la France est Paris.",
    "raconte-moi une blague": "D'accord, voici une blague : Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !",
    "dis-moi une devinette": "Bien sûr, voici une devinette : Je suis grand comme un arbre, mais ne suis pas un arbre, je n'ai ni tronc ni branche, mais j'ai des feuilles. Qu'est-ce que je suis ?",
    "une autre devinette": "Voici une autre devinette : Je vole sans ailes, je crie sans bouche. Qu'est-ce que je suis ?",
    "encore une devinette": "Prêt pour une autre devinette ? Je suis liquide quand je suis chaud, je suis solide quand je suis froid. Qu'est-ce que je suis ?",
    "c'est quoi le dialogue": "Le dialogue est une conversation ou un échange verbal entre au moins  deux personnes sur un sujet précis",
    "les 4 types de phrase": "Il existe quatre types de phrases : les phrases déclaratives (affirmatives ou négatives), les phrases interrogatives, les phrases impératives et les phrases exclamatives. Chacun de ces types a une fonction différente dans la communication.",
    "qu'est-ce l'histoire": "L'histoire est la science qui reconstitue le passé de l'Homme. Elle nous permet de comprendre comment le monde a évolué au fil du temps.",
    "merci": "De rien ! Toujours heureux d'aider, mon ami !",


    };


function checkPhrase(message) {
    const userMessageLower = message.toLowerCase();
    for (const phrase in phraseDictionary) {
        if (userMessageLower.includes(phrase)) {
            return phraseDictionary[phrase];
        }
    }
    return null; // Aucune correspondance trouvée
}

function speakText(text) {
  const synth = window.speechSynthesis;

  // Attendre que les voix soient chargées si nécessaire
  const loadVoices = () => {
    return new Promise((resolve) => {
      let id;

      id = setInterval(() => {
        if (speechSynthesis.getVoices().length !== 0) {
          resolve(speechSynthesis.getVoices());
          clearInterval(id);
        }
      }, 10);
    });
  };

  loadVoices().then((voices) => {
    const utterance = new SpeechSynthesisUtterance(text);

    // Sélectionner une voix; ici, nous prenons la première voix française disponible
    const frenchVoice = voices.find(voice => voice.lang === 'fr-FR');
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    } else {
      // Utiliser une voix par défaut si aucune voix française n'est disponible
      utterance.voice = voices[0];
    }

    synth.speak(utterance);
  });
}



const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi; // retourne l'élément <li> du chat
}

const generateResponse = (chatElement, userMessage) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    
    const phraseResponse = checkPhrase(userMessage);
    if (phraseResponse !== null) {
        chatElement.querySelector("p").textContent = phraseResponse;
        speakText(phraseResponse);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        return;
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        const responseText = data.choices[0].message.content.trim();
        chatElement.querySelector("p").textContent = responseText;
        speakText(responseText);
    }).catch(error => {
        console.error("Erreur API:", error);
        chatElement.querySelector("p").textContent = "Désolé, je ne sais pas ça. J'ai encore beaucoup à apprendre.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = (userMessage) => {
    if (!userMessage) return;

    const outgoingChatLi = createChatLi(userMessage, "outgoing");
    chatbox.appendChild(outgoingChatLi);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Réfléchis...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi, userMessage);
    }, 600);
}

const recordingStatus = document.querySelector('#recodingstatus');

function startSpeechRecognition() {
   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   const recognition = new SpeechRecognition();

   recognition.lang = 'fr-FR';

   recognition.onstart = () => {
       const recordingStatus = document.querySelector('#recodingstatus');
       recordingStatus.textContent = 'Enregistrement en cours...';
   };

   recognition.onend = () => {
       const recordingStatus = document.querySelector('#recodingstatus');
       recordingStatus.textContent = '';
   };

   recognition.onresult = (event) => {
       const transcript = event.results[0][0].transcript;
       handleChat(transcript);
   };

   recognition.onerror = (event) => {
       console.error("Erreur de reconnaissance vocale:", event.error);
   };

   recognition.start();
}



micBtn.addEventListener("click", startSpeechRecognition);

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
