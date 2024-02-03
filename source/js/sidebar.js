// header modal toggle

const initSidebar = () => {
  const header = document.querySelector('.header__block');
  const headerToggle = document.querySelector('.sidebar__toggle');
  const headerModal = document.querySelector('.sidebar__wrapper');

  headerToggle.addEventListener('click', () => {
    headerModal.classList.toggle('sidebar--opened');
    headerToggle.classList.add('sidebar__toggle--show');
    if (header.classList.contains('header__block--visible')) {
      headerToggle.classList.remove('sidebar__toggle--show');
    }
  });
};

export { initSidebar };
