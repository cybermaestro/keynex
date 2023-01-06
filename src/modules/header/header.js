//Карта на страницу contact.html

export default function() {
  const header = document.querySelector('.header');
}

let center = [56.04168502938834,92.85757377116387];

ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: center, // ваши данные
    zoom: 17
  });

  let placemark = new ymaps.Placemark(center, {}, {
	});
  
  map.geoObjects.add(placemark);
}

//открывющееся окна на кейсы со страницы career

const open = document.querySelectorAll('.open-case');
const window = document.querySelectorAll('.window');
const cross = document.querySelectorAll('.cross');
const windowCon = document.querySelectorAll('.window__content');



function handleClickFunctionCase(i) {
  window[i].classList.toggle('hide');
}

for (let index = 0; index < open.length; index++) {
  open[index].addEventListener('click', function () {handleClickFunctionCase(index)}); //открытие по нажатию на блок
  cross[index].addEventListener('click', function () {handleClickFunctionCase(index)}); //закрытие по нажати на крест
  addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
      window[index].classList.add('hide');
    }
  });    //закрытие окна при нажатии на Esc

  window[index].addEventListener('click', function (e) {
    let con = e.target.closest('.window__content');
    if (con == null) {;
      window[index].classList.add('hide');
    }
  });   //закрытие окна при нажатии на фон 

}
