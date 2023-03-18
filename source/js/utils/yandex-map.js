const INITIAL_LATITUDE = 59.938631;
const INITIAL_LONGITUDE = 30.323037;
const ZOOM = 16;

const ymaps = window.ymaps;

const map = document.querySelector('#map');

if (map) {
  map.style.display = 'block';

  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [INITIAL_LATITUDE, INITIAL_LONGITUDE],
      zoom: ZOOM,
    }, {
      searchControlProvider: 'yandex#search',
    });

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Метка',
      balloonContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/map-marker.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
    });

    myMap.geoObjects.add(myPlacemark);
  });
}
