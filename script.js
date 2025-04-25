const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Rome", "Berlin", "Madrid"],
    correct: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1
  }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answersElement.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  showQuestion();
});

showQuestion();