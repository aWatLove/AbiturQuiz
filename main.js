// Classes
class Facult {
    constructor(title, subtitle) {
        this.title = title;
        this.subtitle = subtitle;
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
    new Facult("IFST", "Крутое направление!"),
    new Facult("PINF", "Ну так чутб хуже..."),
    new Facult("DIZN", "Дизайнеры ежжи"),
    new Facult("TLVD", "Телевизионщики")
]

// Пулы вопросов
const quizMainPull = [
    new Quiz("Нравиться ли вам программировать?", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") progPoints++;
        if (answer === "b") gumPoints++;
    }),
    new Quiz("Нравится ли вам заниматься творчеством?", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") gumPoints++;
        if (answer === "b") progPoints++;
    }),
]
const quizProgPull = [
    new Quiz("Хотели ли вы делать игры??", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.title === "IFST").points++;
        if (answer === "b") facults.find(x => x.title === "PINF").points++;
    }),
    new Quiz("вы пинф?", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.title === "PINF").points++;
        if (answer === "b") facults.find(x => x.title === "IFST").points++;
    })
]
const quizOtherPull = [
    new Quiz("Нравится ли вам работать с людьми?", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.title === "TLVD").points++;
        if (answer === "b") facults.find(x => x.title === "DIZN").points++;
    }),
    new Quiz("Вы креативны??", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.title === "TLVD").points++;
        facults.find(x => x.title === "DIZN").points++;
    })
]

let progPoints = 0;
let gumPoints = 0;
let currentPull = quizMainPull
let questCount = 0;

const quest_text = document.getElementById("question-text");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const answerElems = document.querySelectorAll('.answer');
const submit = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
    unselectAnswers();

    let currentQuiz = currentPull[questCount];

    quest_text.innerText = currentQuiz.title;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
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
    console.log(facults)
    let maxIndex = facults.reduce((acc, curr, i) => facults[acc].points > curr.points ? acc : i, 0);
    console.log(facults[maxIndex])
}

submit.addEventListener('click', () => {
    const answer = getSelect();

    if (answer) {
        currentPull[questCount].callback(answer); //

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