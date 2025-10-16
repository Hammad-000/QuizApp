const correctAnswer =  ["a" ,"b" ,"b" ,"c" ,"a"];




const form =  document.querySelector("form");
const resultDisplay = document.getElementById("score");
const resultShow = document.getElementById("show");
const  body = document.querySelector("body");




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


   window.scrollTo({ top: 0, behavior: "smooth" });

});



function theme() {
    const body = document.body;
    const toggle = document.getElementById('toggle');
    
 
    if (toggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const savedTheme = localStorage.getItem('theme');

   
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
