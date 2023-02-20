const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "HyperText Transfer Product",
    b: "HyperText Test Protocol",
    c: "Hey Transfer Protocol",
    d: "HyperText Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "Javascript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JordanShoes",
    ans: "ans1",
  },
];

const ques = document.querySelector(".ques");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const opt4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
let answers = document.querySelectorAll(".answer");

let quesCnt = 0;
let score = 0;
const loadQues = () => {
  const quesList = quizDB[quesCnt];
  ques.innerText = quesList.question;
  option1.innerText = quesList.a;
  option2.innerText = quesList.b;
  option3.innerText = quesList.c;
  option4.innerText = quesList.d;
};

loadQues();

const getAns = () => {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return answers[i].id;
    }
  }
};

const deSelectAll = () => {
  answers.forEach((curr) => {
    curr.checked = false;
  });
};

submit.addEventListener("click", () => {
  let storeAns = getAns();
  // console.log(storeAns);

  if (storeAns === quizDB[quesCnt].ans) {
    score++;
  }

  // de-selecting all options of prev ques before loading new ques
  deSelectAll();

  if (++quesCnt < quizDB.length) {
    loadQues();
  } else {
    showScore.innerHTML = `
    <h3>Your Score: ${score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;

    showScore.setAttribute("style", "display:flex");
  }
});
