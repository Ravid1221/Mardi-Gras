const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What are the origins of Mardi Gras?",
    choice1: "Medieval Asia ",
    choice2: "Medieval Europe",
    choice3: "Medieval Africa ",
    choice4: "Medieval America ",
    answer: 2,
  },
  {
    question: "What are the familiar colors of Mardi Gras?",
    choice1: "purple, green and gold",
    choice2: "green, yellow and purple",
    choice3: "red, yellow and orange",
    choice4: "orange, green and yellow",
    answer: 1,
  },
  {
    question:
      "What is the meaning of the French name Mardi Gras?",
    choice1: "Fat Friday",
    choice2: "Noisy Thursday ",
    choice3: "Fat Tuesday",
    choice4: "The big Wednesday ",
    answer: 3,
  },
  {
    question:
      "The Carnival is the final festivity before what?",
    choice1: "the commencement of the austere 40 days of Lent, during of Roman Catholics",
    choice2: "The beginning of the holidays",
    choice3: "the commencement of the austere 40 days of Lent, during of the Americans",
    choice4: "The beginning of the foreign year",
    answer: 1,
  },
  {
    question:
      "What do the floating riders throw to the crowd?",
    choice1: "beads, cups, doubloons and stuffed animals",
    choice2: "Cups, beads and candies ",
    choice3: "Snacks, beads and dolls ",
    choice4: " beads, cups, doubloons and stuffed animals",
    answer: 4,
  },
  {
    question:
      "How does Mardi Gras benefit the New Orleans economy?",
    choice1: "Attracts a lot of tourists to New Orleans ",
    choice2: "Thanks to buying tickets to the festival  ",
    choice3: "Mardi Gras generates over $ 1 billion in annual spending",
    choice4: " The festival contributes to business owners in New Orleans ",
    answer: 3,
  },
  {
    question:
      "What is Twelfth Night? ",
    choice1: "February 6th and is the official start of Mardi Gras every year",
    choice2: "February 5th and is the official start of Mardi Gras every year.",
    choice3: "January 6th and is the official start of Mardi Gras every year",
    choice4: " January 5th and is the official start of Mardi Gras every year",
    answer: 3,
  },
    {
    question:
      " Is there an official Mardi Gras? ",
    choice1: "yes, sure!",
    choice2: "just in New Orleans",
    choice3: "No! Mardi Gras is a holiday, just like Christmas and Easter.",
    choice4: "yes, there is claims of businesses that offer official Mardi Gras merchandise ",
    answer: 3,
  },
    {
    question:
      "When does Mardi Gras start? ",
    choice1: "The Carnival season always begins on Jan 6",
    choice2: "The Carnival season always begins on Fabuary 8",
    choice3: "The Carnival season always begins on Jan 10",
    choice4: " The Carnival season always begins on Febuary 7",
    answer: 1,
  },
    {
    question:
      "When is Fat Tuesday? ",
    choice1: "Fat Tuesday is always the day before Ash Wednesday.",
    choice2: "on Jan 6",
    choice3: "Fat Tuesday is always the day before the holidays",
    choice4: " Fat Tuesday is always the day after the holiday",
    answer: 1,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
