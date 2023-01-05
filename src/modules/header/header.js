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