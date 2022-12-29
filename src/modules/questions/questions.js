export default function() {
    const questions = document.querySelector('.questions');
  }


  const question = document.querySelectorAll('.question');

  function handleClickFunction(i) {
    question[i].classList.toggle('question__active');
  }
  
  for (let index = 0; index < question.length; index++) {
    const element = question[index].addEventListener('click', function () { handleClickFunction(index)});
  }
 