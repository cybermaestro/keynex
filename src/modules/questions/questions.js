export default function() {
    const questions = document.querySelector('.questions');
  }

  const nena = "25";
  console.log(nena);

  const question = document.querySelectorAll('.question');

  function handleClickFunction(i) {
    question[i].classList.toggle('question__active');
  }
  question[0].addEventListener('click', function () { handleClickFunction(0)});
  question[1].addEventListener('click', function () { handleClickFunction(1)});
  question[2].addEventListener('click', function () { handleClickFunction(2)});
  question[3].addEventListener('click', function () { handleClickFunction(3)});
  question[4].addEventListener('click', function () { handleClickFunction(4)});
