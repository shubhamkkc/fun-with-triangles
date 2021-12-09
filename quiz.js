const quizform = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswers = ["180°","55°","12cm2","10cm","90°"];

function calculateScore(e) {
  // console.log(FormData)
  e.preventDefault();
  const formResults = new FormData(quizform);

  console.log(formResults)
  let score = 0;
    let index = 0;
  for (let value of formResults.values()) {
    console.log(value)
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  
  output.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);