const correctAnswer =  ["a" ,"b" ,"b" ,"c" ,"a"];




const form =  document.querySelector("form");
const resultDisplay = document.getElementById("score");
const resultShow = document.getElementById("show");



form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const totalQuestions = correctAnswer.length;
  const scorePerQuestion = 100 / totalQuestions;

  correctAnswer.forEach((correct, idx) => {
    const questionName = `Q${idx + 1}`;
    const selected = form.querySelector(`input[name="${questionName}"]:checked`);

    if (selected && selected.value === correct) {
      score += scorePerQuestion;
    }
  });

  resultShow.style.display = "block";
  resultDisplay.textContent = score;

});

function theme() {
  const body = document.body;

  if (body.style.backgroundColor === "gray") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "gray";
    body.style.color = "white";
  }
}