const pageHeader = document.querySelector('.page__header');
const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__navigation');

headerToggle.addEventListener('click', () => {
  headerNav.hasAttribute('data-visible')
    ? headerToggle.setAttribute('aria-expanded', false)
    : headerToggle.setAttribute('aria-expanded', true);
    headerNav.toggleAttribute('data-visible');
    pageHeader.toggleAttribute('data-overlay');
});
