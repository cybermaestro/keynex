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

//Видеоплеер

const press = document.querySelectorAll('.video_player__list-item');
const videoAll = document.querySelectorAll('video');
const videoHeder = document.querySelector('.video_player__name');
const videoText = document.querySelector('.video_text');
const videoHeaderList = document.querySelectorAll('h5');
const videoTextList = document.querySelectorAll('.video_text-list');




function replacement (i) {
  let srcClick = videoAll[i].getAttribute('src')
  let videoImg = videoAll[i].getAttribute('poster')
  videoHeder.textContent = videoHeaderList[i-1].textContent
  videoText.textContent = videoTextList[i-1].textContent
  videoAll[0].removeAttribute('src')
  videoAll[0].setAttribute('src', srcClick)
  videoAll[0].removeAttribute('poster')
  videoAll[0].setAttribute('poster', videoImg)
}

for (let index = 0; index < videoAll.length; index++) {
  press[index].addEventListener('click', function () {replacement (index+1)});
}


// let lister = document.querySelectorAll('video');
// console.log(lister);
// let mas = lister[0];
// console.log(mas.getAttribute('src'));