

// Classes
class Facult {
    constructor(title, subtitle, image) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.points = 0;
    }
}

class Quiz {
    constructor(title, a, b, c, callback) {
        this.title = title;
        this.a = a;
        this.b = b;
        this.c = c;
        this.callback = callback;
    }
}

// Направления
const facults = [
    new Facult("ИФСТ", "Высокопрофессиональное обучение программированию,\n" +
        "разработке компьютерных игр и мобильных приложений,\n" +
        "облачным вычислениям, базам данных, интернет-технологиям,\n" +
        "технологиям искусственного интеллекта, виртуальной и\n" +
        "дополненной реальности, мультимедийным технологиям."),
    new Facult("PINF", "Ну так чутб хуже..."),
    new Facult("DIZN", "Дизайнеры ежжи"),
    new Facult("TLVD", "Телевизионщики")
];

// Пулы вопросов
const quizMainPull = [
    new Quiz("Хотели бы научиться программировать?", "Да", "Нет", "Возможно", (answer) => {
        if (answer === "a" || answer === "c") progPoints+=2;
        if (answer === "b") gumPoints++;
    }),
    new Quiz("Нравится ли вам заниматься творчеством?", "Да", "Нет", "Возможно", (answer) => {
        if (answer === "a") gumPoints++;
        if (answer === "b") progPoints++;
    })

];
const quizProgPull = [
    new Quiz("Хотели ли вы делать игры??", "Да", "Нет", "Возможно", (answer) => {
        if (answer === "a") facults.find(x => x.title === "ИФСТ").points++;
        if (answer === "b") facults.find(x => x.title === "PINF").points++;
    }),
    new Quiz("вы пинф?", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.title === "PINF").points++;
        if (answer === "b") facults.find(x => x.title === "ИФСТ").points++;
    })
];
const quizOtherPull = [
    new Quiz("Нравится ли вам работать с людьми?", "Да", "Нет", "Возможно", (answer) => {
        if (answer === "a") facults.find(x => x.title === "TLVD").points++;
        if (answer === "b") facults.find(x => x.title === "DIZN").points++;
    }),
    new Quiz("Вы креативны??", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.title === "TLVD").points++;
        facults.find(x => x.title === "DIZN").points++;
    })
];

let currentPull = quizMainPull // Текущий пулл

// Счетчики
let progPoints = 0;
let gumPoints = 0;
let questCount = 0;

// Элементы
const container = document.getElementById("container"); // главный контейнер

// Start
const loadButton = document.getElementById("quizLoad");
const startDisplay = document.getElementById("start");

// Quiz
const quiz_box = document.getElementById("quiz");
const quest_text = document.getElementById("question-text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const answerElems = document.querySelectorAll('.answer');
const submit = document.getElementById("submit");

// Result
const retryButton = document.getElementById("retry");
const resultBox = document.getElementById("result-box");
const resultContent = document.getElementById("result-content");



loadQuiz();


function loadQuiz() {
    unselectAnswers();

    let currentQuiz = currentPull[questCount];

    quest_text.innerHTML = currentQuiz.title;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
}

function cleanQuiz() {
    for(let i =0; i<facults.length; i++) {
        facults[i].points = 0;
    }
    progPoints = 0;
    gumPoints = 0;
    questCount = 0;
    currentPull = quizMainPull;
}

function unselectAnswers() {
    answerElems.forEach(answerEl => answerEl.checked = false)
}

function getSelect() {
    let answer;

    answerElems.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function loadResult() {
    quiz_box.style.display = "none";
    resultBox.style.display = 'block';
    container.style.width = '500px';
    let maxPointIndex = facults.reduce((acc, curr, i) => facults[acc].points > curr.points ? acc : i, 0);
    resultContent.innerHTML = `<p class="facult-name">Вам подходит ${facults[maxPointIndex].title}</p>
                               <p class="facult-subtitle" id="facult-subtitle">${facults[maxPointIndex].subtitle}</p`;
}

submit.addEventListener('click', () => {
    const answer = getSelect();

    if (answer) {
        currentPull[questCount].callback(answer);

        questCount++;
        if (questCount < quizMainPull.length) {
            loadQuiz();
        } else if (currentPull === quizMainPull) {
            if (progPoints > gumPoints) {
                currentPull = quizProgPull;
            }
            else {
                currentPull = quizOtherPull;
            }
            questCount = 0;
            loadQuiz();
        } else {
            loadResult();
        }
    }
});

loadButton.addEventListener('click', ()=>{
    startDisplay.style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
});

retryButton.addEventListener('click', () => {
    resultBox.style.display = 'none';
    cleanQuiz();
    container.style.width = 'auto';
    quiz_box.style.display = 'block';
    loadQuiz();
});