const myOwnScriptElement = document.createElement('script');
myOwnScriptElement.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
const mapElement = document.querySelector('#map');
let switcher = false;
mapElement.style.display = 'block';

window.addEventListener('scroll', activateMapOnScroll);

function initYandexMap() {
  let myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323037],
    zoom: 16,
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
}

const insertApiToHead = () => {
  document.head.appendChild(myOwnScriptElement);
};

const initMap = () => {
  ymaps.ready(initYandexMap);
};

function activateMapOnScroll() {
  if (mapElement.getBoundingClientRect().top - window.innerHeight < 2000 && !switcher) {
    switcher = true;
    insertApiToHead();
    myOwnScriptElement.addEventListener('load', () => {
      if (typeof ymaps !== 'undefined') {
        initMap();
      }
    });
    window.removeEventListener('scroll', activateMapOnScroll);
  }
}

activateMapOnScroll();
