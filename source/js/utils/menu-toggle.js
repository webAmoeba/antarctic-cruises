const mainHeader = document.querySelector('.main-header');
const menuToggler = document.querySelector('.main-header__menu-toggle');
const navigatorMenu = document.querySelector('.main-header__nav');

mainHeader.classList.add('main-header__navigation--hidden');

menuToggler.classList.add('main-header__menu-toggle--with-js');

navigatorMenu.classList.add('main-header__nav--mobile-hidden');


menuToggler.addEventListener('click', () => {
  if (navigatorMenu.classList.contains('main-header__nav--mobile-hidden')) {
    mainHeader.classList.add('main-header--mobile-with-js-open');
    navigatorMenu.classList.remove('main-header__nav--mobile-hidden');
    menuToggler.classList.add('main-header__menu-toggle--opened');
  } else {
    mainHeader.classList.remove('main-header--mobile-with-js-open');
    navigatorMenu.classList.add('main-header__nav--mobile-hidden');
    menuToggler.classList.remove('main-header__menu-toggle--opened');
  }
});
