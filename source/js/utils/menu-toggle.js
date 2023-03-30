const mainHeader = document.querySelector('.main-header');
const menuToggler = document.querySelector('.main-header__menu-toggle');
const navigatorMenu = document.querySelector('.main-header__nav');
const menu = document.querySelector('.main-header__first-line');
const overlayMobileMenu = menu.querySelector('.main-header__mobile-overlay');
const bodyElement = document.body;
const menuItem = document.querySelectorAll('.main-header__nav-item');

mainHeader.classList.add('main-header__navigation--hidden');

menuToggler.classList.add('main-header__menu-toggle--with-js');

navigatorMenu.classList.add('main-header__nav--mobile-hidden');

menu.classList.add('main-header__first-line--hidden');
menu.classList.add('main-header__first-line--moving');

const closeMenu = () => {
  mainHeader.classList.remove('main-header--mobile-with-js-open');
  navigatorMenu.classList.add('main-header__nav--mobile-hidden');
  menuToggler.classList.remove('main-header__menu-toggle--opened');
  bodyElement.style.overflow = 'unset';
};

menuToggler.addEventListener('click', () => {
  if (navigatorMenu.classList.contains('main-header__nav--mobile-hidden')) {
    mainHeader.classList.add('main-header--mobile-with-js-open');
    navigatorMenu.classList.remove('main-header__nav--mobile-hidden');
    menuToggler.classList.add('main-header__menu-toggle--opened');
    bodyElement.style.overflow = 'hidden';
  } else {
    closeMenu();
  }
});

overlayMobileMenu.addEventListener('click', () => {
  closeMenu();
});

menuItem.forEach((el) => {
  el.addEventListener('click', () => {
    closeMenu();
  });
});
