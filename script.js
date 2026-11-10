
// ==========================================
// ARENA BIOLÓGICA
// 16 PERGUNTAS - 8 PARA CADA EQUIPE
// ==========================================


// BANCO DE PERGUNTAS

const questionBank = [

    // ========== TENÍASE ==========

    {
        disease: "TENÍASE",
        question: "Uma pessoa apresenta desconforto abdominal, náuseas e alterações no apetite após consumir carne malcozida. Qual doença pode estar relacionada?",
        options: ["Teníase", "Cisticercose", "Ancilostomose", "Dengue"],
        answer: 0,
        hint: "É conhecida popularmente como doença da solitária.",
        explanation: "A teníase pode causar sintomas digestivos, como dor abdominal, náuseas e alterações no apetite."
    },

    {
        disease: "TENÍASE",
        question: "Qual situação pode transmitir a teníase para os seres humanos?",
        options: [
            "Picada de mosquito",
            "Consumir carne bovina ou suína crua ou malcozida contendo larvas",
            "Andar descalço em solo contaminado",
            "Beber água contaminada com larvas de ancilostomídeos"
        ],
        answer: 1,
        hint: "Pense em um alimento de origem animal que precisa ser bem preparado.",
        explanation: "A teníase acontece quando a pessoa ingere cisticercos presentes em carne bovina ou suína crua ou malcozida."
    },

    {
        disease: "TENÍASE",
        question: "Em qual parte do corpo humano a tênia adulta normalmente se desenvolve?",
        options: ["Pulmões", "Cérebro", "Intestino delgado", "Coração"],
        answer: 2,
        hint: "É um órgão responsável pela digestão e absorção dos nutrientes.",
        explanation: "Na teníase, a tênia adulta vive principalmente no intestino delgado."
    },

    {
        disease: "TENÍASE",
        question: "Qual medida é importante para evitar a teníase?",
        options: [
            "Usar repelente diariamente",
            "Evitar contato com animais domésticos",
            "Tomar antibióticos preventivamente",
            "Consumir carnes bem cozidas ou assadas"
        ],
        answer: 3,
        hint: "A prevenção está relacionada ao preparo correto dos alimentos.",
        explanation: "Cozinhar adequadamente as carnes ajuda a destruir os cisticercos que podem causar a teníase."
    },

    {
        disease: "TENÍASE",
        question: "Quais parasitas podem causar teníase em seres humanos?",
        options: [
            "Taenia saginata e Taenia solium",
            "Ancylostoma duodenale e Necator americanus",
            "Plasmodium vivax e Plasmodium falciparum",
            "Ascaris lumbricoides e Giardia"
        ],
        answer: 0,
        hint: "Os dois nomes começam com Taenia.",
        explanation: "As espécies Taenia saginata e Taenia solium são responsáveis pela teníase humana."
    },


    // ========== CISTICERCOSE ==========

    {
        disease: "CISTICERCOSE",
        question: "Qual doença pode ocorrer quando uma pessoa ingere ovos de Taenia solium presentes em alimentos ou água contaminados?",
        options: [
            "Teníase",
            "Cisticercose",
            "Ancilostomose",
            "Leptospirose"
        ],
        answer: 1,
        hint: "Essa doença pode afetar o cérebro, os músculos e os olhos.",
        explanation: "A cisticercose ocorre quando a pessoa ingere ovos de Taenia solium. As larvas podem se alojar em diferentes tecidos."
    },

    {
        disease: "CISTICERCOSE",
        question: "Como acontece principalmente a transmissão da cisticercose humana?",
        options: [
            "Ingestão de ovos de Taenia solium em água ou alimentos contaminados",
            "Picada de insetos",
            "Contato com suor de pessoas infectadas",
            "Consumo de carne bem cozida"
        ],
        answer: 0,
        hint: "A transmissão está relacionada à contaminação por fezes humanas.",
        explanation: "A cisticercose humana é adquirida pela ingestão de ovos da Taenia solium, geralmente por contaminação fecal."
    },

    {
        disease: "CISTICERCOSE",
        question: "Quando a cisticercose atinge o sistema nervoso central, quais sintomas podem aparecer?",
        options: [
            "Somente coceira nos pés",
            "Dor de garganta e espirros",
            "Dor de cabeça e convulsões",
            "Apenas dor nos dentes"
        ],
        answer: 2,
        hint: "Pense em sintomas relacionados ao cérebro.",
        explanation: "Quando as larvas atingem o sistema nervoso central, podem provocar neurocisticercose, com manifestações como dores de cabeça e convulsões."
    },

    {
        disease: "CISTICERCOSE",
        question: "Qual alternativa apresenta uma medida importante para prevenir a cisticercose?",
        options: [
            "Andar sempre descalço",
            "Consumir carne crua",
            "Evitar qualquer atividade física",
            "Lavar as mãos e consumir água tratada"
        ],
        answer: 3,
        hint: "A higiene é fundamental para evitar a ingestão de ovos do parasita.",
        explanation: "Higiene das mãos, água tratada, lavagem adequada dos alimentos e saneamento básico ajudam a interromper a transmissão."
    },

    {
        disease: "CISTICERCOSE",
        question: "Qual é a principal diferença entre teníase e cisticercose?",
        options: [
            "São exatamente a mesma doença",
            "Teníase envolve a tênia adulta no intestino; cisticercose envolve larvas nos tecidos",
            "A teníase é causada por bactérias",
            "A cisticercose é causada por vírus"
        ],
        answer: 1,
        hint: "Uma está relacionada à fase adulta e a outra à fase larval do parasita.",
        explanation: "Na teníase, a tênia adulta vive no intestino. Na cisticercose, larvas podem se alojar em tecidos do corpo."
    },


    // ========== ANCILOSTOMOSE ==========

    {
        disease: "ANCILOSTOMOSE",
        question: "Uma pessoa apresenta palidez, fraqueza e anemia. Qual doença parasitária pode estar relacionada a esses sintomas?",
        options: [
            "Dengue",
            "Cisticercose",
            "Ancilostomose",
            "Catapora"
        ],
        answer: 2,
        hint: "É uma doença popularmente conhecida como amarelão.",
        explanation: "A ancilostomose pode causar anemia devido à perda de sangue provocada pelos vermes no intestino."
    },

    {
        disease: "ANCILOSTOMOSE",
        question: "Como acontece principalmente a transmissão da ancilostomose?",
        options: [
            "Por picada de mosquito",
            "Pela penetração de larvas na pele em contato com solo contaminado",
            "Pela ingestão de carne malpassada",
            "Por contato com objetos de metal"
        ],
        answer: 1,
        hint: "O contato direto dos pés com a terra contaminada pode facilitar a infecção.",
        explanation: "As larvas infectantes podem penetrar na pele, principalmente quando uma pessoa anda descalça em solo contaminado."
    },

    {
        disease: "ANCILOSTOMOSE",
        question: "Qual é o nome popular da ancilostomose?",
        options: [
            "Amarelão",
            "Solitária",
            "Dengue",
            "Elefantíase"
        ],
        answer: 0,
        hint: "O nome está relacionado à palidez que pode aparecer em pessoas com anemia.",
        explanation: "A ancilostomose é popularmente conhecida como amarelão."
    },

    {
        disease: "ANCILOSTOMOSE",
        question: "Qual atitude ajuda a prevenir a ancilostomose?",
        options: [
            "Comer carne crua",
            "Evitar frutas",
            "Compartilhar calçados",
            "Usar calçados e melhorar o saneamento básico"
        ],
        answer: 3,
        hint: "A prevenção está relacionada ao contato com o solo.",
        explanation: "Usar calçados evita o contato direto com o solo contaminado. O saneamento básico também é essencial."
    },

    {
        disease: "ANCILOSTOMOSE",
        question: "Por que a ancilostomose pode provocar anemia?",
        options: [
            "Porque destrói os ossos",
            "Porque impede a respiração",
            "Porque os vermes se fixam no intestino e provocam perda de sangue",
            "Porque destrói os músculos"
        ],
        answer: 2,
        hint: "Pense no que acontece quando os parasitas se alimentam no intestino.",
        explanation: "Os vermes adultos se fixam na parede intestinal e podem provocar perda de sangue, levando à anemia."
    },

    {
        disease: "ANCILOSTOMOSE",
        question: "Onde os vermes adultos da ancilostomose vivem no corpo humano?",
        options: [
            "No cérebro",
            "Nos pulmões permanentemente",
            "No coração",
            "No intestino delgado"
        ],
        answer: 3,
        hint: "É o órgão onde ocorre parte do processo digestivo.",
        explanation: "Os vermes adultos se estabelecem no intestino delgado, onde se fixam à parede intestinal."
    }

];


// ==========================================
// VARIÁVEIS DO JOGO
// ==========================================

let teams = ["Equipe 1", "Equipe 2"];
let scores = [0, 0];
let currentTeam = 0;
let currentIndex = 0;
let questions = [];
let currentQuestion = null;

let timeLeft = 45;
let timerInterval = null;
let nextTimeout = null;

let gameLocked = false;
let gameRunning = false;
let soundEnabled = true;
let audioContext = null;

let eliminatedOptions = [];

let cardsUsed = [
    { fifty: false, hint: false, time: false },
    { fifty: false, hint: false, time: false }
];


// ==========================================
// ELEMENTOS HTML
// ==========================================

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const setupForm = document.getElementById("setupForm");

const timerElement = document.getElementById("timer");
const timerBar = document.getElementById("timerBar");

const questionText = document.getElementById("questionText");
const questionCategory = document.getElementById("questionCategory");

const optionsContainer = document.getElementById("optionsContainer");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const hintBox = document.getElementById("hintBox");
const hintText = document.getElementById("hintText");


// ==========================================
// EFEITOS SONOROS
// ==========================================

function playSound(type) {

    if (!soundEnabled) return;

    const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    try {

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const patterns = {
            correct: [660, 880],
            wrong: [220],
            tick: [540],
            timeout: [330, 220],
            click: [480]
        };

        const frequencies = patterns[type] || [440];

        frequencies.forEach((frequency, index) => {

            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();

            const startTime = audioContext.currentTime + index * 0.13;

            oscillator.type = "sine";

            oscillator.frequency.setValueAtTime(
                frequency,
                startTime
            );

            gain.gain.setValueAtTime(0.0001, startTime);

            gain.gain.exponentialRampToValueAtTime(
                0.12,
                startTime + 0.025
            );

            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                startTime + 0.16
            );

            oscillator.connect(gain);
            gain.connect(audioContext.destination);

            oscillator.start(startTime);
            oscillator.stop(startTime + 0.17);

        });

    } catch (error) {
        console.log("Não foi possível reproduzir o som.");
    }

}


// LIGA E DESLIGA O SOM

function updateSoundButtons() {

    const buttons = [
        document.getElementById("soundToggle"),
        document.getElementById("gameSoundToggle")
    ];

    buttons.forEach(button => {

        if (soundEnabled) {

            button.textContent =
                button.id === "soundToggle"
                    ? "🔊 Som ligado"
                    : "🔊";

        } else {

            button.textContent =
                button.id === "soundToggle"
                    ? "🔇 Som desligado"
                    : "🔇";

        }

    });

}

document.getElementById("soundToggle").addEventListener("click", () => {

    soundEnabled = !soundEnabled;
    updateSoundButtons();

});

document.getElementById("gameSoundToggle").addEventListener("click", () => {

    soundEnabled = !soundEnabled;
    updateSoundButtons();

});


// ==========================================
// INICIAR PARTIDA
// ==========================================

setupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    teams[0] =
        document.getElementById("team1Input").value.trim()
        || "Equipe 1";

    teams[1] =
        document.getElementById("team2Input").value.trim()
        || "Equipe 2";

    startGame();

});


function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


function startGame() {

    clearInterval(timerInterval);
    clearTimeout(nextTimeout);

    // Embaralha as 16 perguntas
    questions = shuffleArray(questionBank);

    scores = [0, 0];

    currentTeam = 0;
    currentIndex = 0;

    gameLocked = false;
    gameRunning = true;

    cardsUsed = [
        { fifty: false, hint: false, time: false },
        { fifty: false, hint: false, time: false }
    ];

    setupScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    document.getElementById("teamName0").textContent = teams[0];
    document.getElementById("teamName1").textContent = teams[1];

    updateScores();

    showQuestion();

    playSound("click");

}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function showQuestion() {

    if (currentIndex >= questions.length) {
        finishGame();
        return;
    }

    gameLocked = false;

    currentQuestion = questions[currentIndex];

    timeLeft = 45;
    eliminatedOptions = [];

    feedback.classList.add("hidden");
    hintBox.classList.add("hidden");

    questionText.textContent = currentQuestion.question;
    questionCategory.textContent = currentQuestion.disease;

    document.getElementById("questionCounter").textContent =
        `QUESTÃO ${String(currentIndex + 1).padStart(2, "0")}/${questions.length}`;

    renderOptions();

    updateTurn();
    updateCards();

    startTimer();

}


// ==========================================
// MOSTRAR ALTERNATIVAS
// ==========================================

function renderOptions() {

    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    currentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-button";
        button.dataset.index = index;

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = letters[index];

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = option;

        button.appendChild(letter);
        button.appendChild(text);

        if (eliminatedOptions.includes(index)) {

            button.classList.add("is-eliminated");
            button.disabled = true;

        }

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);

    });

}


// ==========================================
// SELECIONAR RESPOSTA
// ==========================================

function selectAnswer(selectedIndex) {

    if (gameLocked) return;

    gameLocked = true;

    clearInterval(timerInterval);

    const correct = selectedIndex === currentQuestion.answer;

    const optionButtons =
        document.querySelectorAll(".option-button");

    optionButtons.forEach(button => {

        const index = Number(button.dataset.index);

        button.disabled = true;

        if (index === currentQuestion.answer) {
            button.classList.add("correct-answer");
        }

        if (index === selectedIndex && !correct) {
            button.classList.add("wrong-answer");
        }

    });

    if (correct) {

        scores[currentTeam] += 10;

        updateScores();

        feedbackTitle.textContent = "✅ RESPOSTA CORRETA! +10 PONTOS";
        feedbackTitle.style.color = "#53D6A3";

        playSound("correct");

    } else {

        feedbackTitle.textContent = "❌ RESPOSTA INCORRETA!";
        feedbackTitle.style.color = "#FF697D";

        playSound("wrong");

    }

    showFeedback();
    updateCards();

    nextTurn();

}


// ==========================================
// QUANDO O TEMPO ACABA
// ==========================================

function timeIsOver() {

    if (gameLocked) return;

    gameLocked = true;

    clearInterval(timerInterval);

    const buttons =
        document.querySelectorAll(".option-button");

    buttons.forEach(button => {

        button.disabled = true;

        const index = Number(button.dataset.index);

        if (index === currentQuestion.answer) {
            button.classList.add("correct-answer");
        }

    });

    feedbackTitle.textContent = "⏰ TEMPO ESGOTADO!";
    feedbackTitle.style.color = "#FF697D";

    playSound("timeout");

    showFeedback();
    updateCards();

    nextTurn();

}


// ==========================================
// FEEDBACK DA RESPOSTA
// ==========================================

function showFeedback() {

    feedbackText.textContent =
        currentQuestion.explanation;

    feedback.classList.remove("hidden");

}


// ==========================================
// PRÓXIMO TURNO
// ==========================================

function nextTurn() {

    nextTimeout = setTimeout(() => {

        currentIndex++;

        // Alterna entre as duas equipes
        currentTeam = currentTeam === 0 ? 1 : 0;

        showQuestion();

    }, 2300);

}


// ==========================================
// CRONÔMETRO
// ==========================================

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(() => {

        if (!gameRunning || gameLocked) return;

        timeLeft--;

        updateTimer();

        if (timeLeft === 10 || timeLeft === 5) {
            playSound("tick");
        }

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timeIsOver();

        }

    }, 1000);

}


function updateTimer() {

    timerElement.textContent = timeLeft;

    const percentage = (timeLeft / 45) * 100;

    timerBar.style.width = `${percentage}%`;

    if (timeLeft <= 10) {

        timerElement.style.color = "#FF697D";
        timerBar.classList.add("danger");

    } else {

        timerElement.style.color = "#53D6A3";
        timerBar.classList.remove("danger");

    }

}


// ==========================================
// ATUALIZAR PLACAR E TURNO
// ==========================================

function updateScores() {

    document.getElementById("score0").textContent = scores[0];
    document.getElementById("score1").textContent = scores[1];

}


function updateTurn() {

    const teamCard0 = document.getElementById("teamCard0");
    const teamCard1 = document.getElementById("teamCard1");

    const turnLabel0 = document.getElementById("turnLabel0");
    const turnLabel1 = document.getElementById("turnLabel1");

    teamCard0.classList.remove("active-team");
    teamCard1.classList.remove("active-team");

    if (currentTeam === 0) {

        teamCard0.classList.add("active-team");

        turnLabel0.textContent = "SUA VEZ";
        turnLabel1.textContent = "AGUARDANDO";

    } else {

        teamCard1.classList.add("active-team");

        turnLabel0.textContent = "AGUARDANDO";
        turnLabel1.textContent = "SUA VEZ";

    }

    document.getElementById("turnText").textContent =
        `VEZ DA ${teams[currentTeam].toUpperCase()}`;

}


// ==========================================
// SISTEMA DE CARTAS ESPECIAIS
// ==========================================

document.querySelectorAll(".special-card").forEach(button => {

    button.addEventListener("click", () => {

        const cardType = button.dataset.card;

        useCard(cardType);

    });

});


function useCard(cardType) {

    if (gameLocked || !gameRunning) return;

    if (cardsUsed[currentTeam][cardType]) return;

    cardsUsed[currentTeam][cardType] = true;

    playSound("click");

    switch (cardType) {

        // CARTA 50/50

        case "fifty":

            const wrongAnswers = currentQuestion.options
                .map((option, index) => index)
                .filter(index =>
                    index !== currentQuestion.answer &&
                    !eliminatedOptions.includes(index)
                );

            const shuffledWrong = shuffleArray(wrongAnswers);

            eliminatedOptions = [
                ...eliminatedOptions,
                ...shuffledWrong.slice(0, 2)
            ];

            renderOptions();

            break;


        // CARTA DE DICA

        case "hint":

            hintText.textContent = currentQuestion.hint;

            hintBox.classList.remove("hidden");

            break;


        // CARTA DE TEMPO

        case "time":

            timeLeft += 20;

            updateTimer();

            break;

    }

    updateCards();

}


// ==========================================
// ATUALIZAR CARTAS
// ==========================================

function updateCards() {

    document.querySelectorAll(".special-card").forEach(button => {

        const cardType = button.dataset.card;

        const used = cardsUsed[currentTeam][cardType];

        const status = button.querySelector(".card-status");

        button.disabled = used || gameLocked;

        button.classList.toggle("used", used);

        status.textContent = used
            ? "UTILIZADA"
            : "DISPONÍVEL";

    });

}


// ==========================================
// FINALIZAR PARTIDA
// ==========================================

function finishGame() {

    gameRunning = false;

    clearInterval(timerInterval);
    clearTimeout(nextTimeout);

    gameScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const title = document.getElementById("resultTitle");
    const winnerName = document.getElementById("winnerName");
    const finalScores = document.getElementById("finalScores");

    finalScores.innerHTML = "";

    if (scores[0] > scores[1]) {

        title.textContent = "TEMOS UM VENCEDOR!";
        winnerName.textContent = `🏆 ${teams[0]} VENCEU!`;

    } else if (scores[1] > scores[0]) {

        title.textContent = "TEMOS UM VENCEDOR!";
        winnerName.textContent = `🏆 ${teams[1]} VENCEU!`;

    } else {

        title.textContent = "DEU EMPATE!";
        winnerName.textContent = "🤝 AS EQUIPES EMPATARAM!";

    }

    teams.forEach((team, index) => {

        const card = document.createElement("div");
        card.className = "final-team";

        const name = document.createElement("strong");
        name.textContent = team;

        const score = document.createElement("span");
        score.textContent = `${scores[index]} pts`;

        card.appendChild(name);
        card.appendChild(score);

        finalScores.appendChild(card);

    });

    playSound("correct");

}


// ==========================================
// RECOMEÇAR
// ==========================================

document.getElementById("restartButton").addEventListener("click", () => {

    clearInterval(timerInterval);
    clearTimeout(nextTimeout);

    gameRunning = false;

    resultScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");

});


// ==========================================
// SAIR DA PARTIDA
// ==========================================

document.getElementById("exitButton").addEventListener("click", () => {

    const confirmExit = confirm(
        "Tem certeza que deseja sair da partida?"
    );

    if (confirmExit) {

        clearInterval(timerInterval);
        clearTimeout(nextTimeout);

        gameRunning = false;

        gameScreen.classList.add("hidden");
        resultScreen.classList.add("hidden");
        setupScreen.classList.remove("hidden");

    }

});


// ==========================================
// ESTADO INICIAL
// ==========================================

updateSoundButtons();
