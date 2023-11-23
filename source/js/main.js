const pageHeader = document.querySelector('.page__header');
const headerToggle = document.querySelector('.header__toggle');

// header toggle

const headerNav = document.querySelector('.header__navigation');

headerToggle.addEventListener('click', () => {
  headerNav.hasAttribute('data-visible')
    ? headerToggle.setAttribute('aria-expanded', false)
    : headerToggle.setAttribute('aria-expanded', true);
    headerNav.toggleAttribute('data-visible');
    pageHeader.toggleAttribute('data-overlay');
});

// hide header on scroll

let lastScrollY = window.scrollY;

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    pageHeader.classList.add('page__header--hidden');
  } else {
    pageHeader.classList.remove('page__header--hidden');
  }

  if (!isElementInViewport(pageHeader)) {
    headerToggle.classList.add('header__toggle--show');
  } else {
    headerToggle.classList.remove('header__toggle--show');
  }

  lastScrollY = window.scrollY;
});




/*
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    pageHeader.classList.add('page__header--hidden'),
    headerToggle.classList.add('header__toggle--show');
  } else {
    pageHeader.classList.remove('page__header--hidden');
  }

  lastScrollY = window.scrollY;
});
*/

