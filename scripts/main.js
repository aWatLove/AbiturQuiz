// Classes
class Facult {
    constructor(name, title, subtitle, profiles, formStudy, exams) {
        this.name = name;
        this.title = title;
        this.subtitle = subtitle;
        this.profiles = profiles;
        this.formStudy = formStudy;
        this.exams = exams;
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
    new Facult("ИФСТ", "Информационные системы и технологии (ИФСТ)",
        "Высокопрофессиональное обучение программированию,\n" +
        "разработке компьютерных игр и мобильных приложений,\n" +
        "облачным вычислениям, базам данных, интернет-технологиям,\n" +
        "технологиям искусственного интеллекта, виртуальной и\n" +
        "дополненной реальности, мультимедийным технологиям",
        "информационные системы и технологии, информационные технологии в медиаиндустрии",
        "очная, заочная",
        "математика, русский язык, физика или информатика на выбор"),
    new Facult("ПИНФ", "Прикладная информатика (ПИНФ)",
        "Изучение средств разработки прикладного программного\n" +
        "обеспечения, моделирования информационных процессов в\n" +
        "целях разрешения конкретных практических проблем,\n" +
        "проектирования информационных систем. Отдельное внимание\n" +
        "уделяется произведению тестирования программного обеспечения,\n" +
        "осуществлению анализа качества тестового покрытия,\n" +
        "разработке технического задания на систему, оцениванию\n" +
        "соответствия требованиям существующих систем и их аналогов",
        "прикладная информатика в информационной среде",
        "очная",
        "математика, русский язык, физика или информатика на выбор"),
    new Facult("ИВЧТ", "Информатика и вычислительная техника (ИВЧТ)",
        "Изучение современных информационных технологий, облачных\n" +
        "технологий, языков программирования, математических основ\n" +
        "информатики. Отдельное внимание уделяется аппаратному\n" +
        "обеспечению компьютерных систем, администрированию\n" +
        "операционных систем и компьютерных сетей",
        "вычислительные машины, комплексы, системы и сети",
        "очная, заочная",
        "математика, русский язык, физика или информатика на выбор"),
    new Facult("ПИНЖ", "Программная инженерия (ПИНЖ)",
        "Программа обучения предполагает детальное изучение всех\n" +
        "этапов создания программного продукта. Особое внимание\n" +
        "уделяется освоению инструментов проектирования, разработки,\n" +
        "тестирования программного обеспечения, изучаются технологии\n" +
        "управления программными проектами и IT-услугами",
        "управление разработкой программных проектов",
        "очная",
        "математика, русский язык, физика или информатика на выбор"),
    new Facult("РКЛМ", "Реклама и связи с общественностью (РКЛМ)",
        "Студенты учатся создавать полный цикл рекламной кампании - от\n" +
        "разработки концепции до создания цифровых рекламных\n" +
        "медийных продуктов (графика, видео, трехмерная визуализация).\n" +
        "Выпускники успешно работают специалистами по рекламе и\n" +
        "связям с общественностью, маркетологами, разработчиками\n" +
        "рекламных графических, видео и аудио-продуктов, дизайнерами,\n" +
        "копирайтерами и др.",
        "информационные технологии в рекламе и связях с общественностью",
        "очная, заочная",
        "обществознание, русский язык, история или информатика на выбор"),
    new Facult("ТЛВД", "Телевидение (ТЛВД)",
        "Студенты изучают операторское искусство, технологии\n" +
        "видеомонтажа, тележурналистику, теле- и кинорежиссуру,\n" +
        "сценаристику и редактуру телепрограмм. Стать успешным\n" +
        "специалистом в сфере видеоиндустрии выпускникам помогают\n" +
        "навыки создания мультимедийных проектов и прохождение\n" +
        "практики в ведущих телекомпаниях региона",
        "техника и технология телевизионного производства",
        "очная",
        "литература, русский язык, история или обществознание на выбор"),
    new Facult("ДИЗН", "Дизайн (ДИЗН)",
        "Мастерство дизайнера-графика позволит выпускнику\n" +
        "разрабатывать концепт-арт компьютерных игр, макетировать\n" +
        "сайты, разрабатывать рекламные макеты веб-пространства и\n" +
        "полиграфии, создавать иллюстрации, видеозаставки, трехмерные\n" +
        "модели пространств и персонажей, анимацию, обрабатывать\n" +
        "фотографии\n" +
        "Промышленные дизайнеры получают навыки\n" +
        "многофункциональных специалистов, совмещающих творчество,\n" +
        "логику и инженерные навыки. Выпускники разрабатывают дизайн\n" +
        "бытовой и промышленной техники, гаджетов, транспорта, мебели,\n" +
        "товаров массового потребления",
        "графический дизайн, промышленный дизайн",
        "очная, очно-заочная",
        "литература, русский язык, история или обществознание на выбор")
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
        if (answer === "a") facults.find(x => x.name === "ИФСТ").points++;
        if (answer === "b") facults.find(x => x.name === "ПИНФ").points++;
    }),
    new Quiz("вы пинф?", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.name === "ПИНФ").points++;
        if (answer === "b") facults.find(x => x.name === "ИФСТ").points++;
    })
];
const quizOtherPull = [
    new Quiz("Нравится ли вам работать с людьми?", "Да", "Нет", "Возможно", (answer) => {
        if (answer === "a") facults.find(x => x.name === "ТЛВД").points++;
        if (answer === "b") facults.find(x => x.name === "ДИЗН").points++;
    }),
    new Quiz("Вы креативны??", "Да", "Нет", "Не знаю", (answer) => {
        if (answer === "a") facults.find(x => x.name === "ТЛВД").points++;
        facults.find(x => x.name === "ДИЗН").points++;
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
    // container.style.width = '500px';
    let maxPointIndex = facults.reduce((acc, curr, i) => facults[acc].points > curr.points ? acc : i, 0);
    let res = facults[maxPointIndex];
    resultContent.innerHTML = `<p class="result-text">Вам подходит</p>
                               <p class="facult-name">${res.title}</p>
                               <p class="profiles"><span>Профили:</span> ${res.profiles}</p>
                               <p class="formStudy"><span>Форма обучения:</span> ${res.formStudy}</p>
                               <p class="exams"><span>Прием по результатам ЕГЭ:</span> ${res.exams}</p>
                               <p class="facult-subtitle" id="facult-subtitle">${res.subtitle}</p`;
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
    // container.style.width = 'auto';
    quiz_box.style.display = 'block';
    loadQuiz();
});