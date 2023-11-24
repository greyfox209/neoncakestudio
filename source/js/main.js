const header = document.querySelector('.header__block');
const headerToggle = document.querySelector('.header__toggle');
const headerModal = document.querySelector('.header__modal--wrapper');

// intersection observer for header

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        header.classList.add('header__block--hidden');
        header.classList.remove('header__block--visible');
      } else {
        header.classList.remove('header__block--hidden');
        header.classList.add('header__block--visible');
      }

      if (!headerModal.classList.contains('header__modal--opened')) {
        headerToggle.classList.toggle('header__toggle--show', entry.isIntersecting);
      }
    });
  },
  {
    rootMargin: '102px',
  }
);

const hideHeader = document.querySelector('.main__content');
observer.observe(hideHeader);

// header modal toggle

headerToggle.addEventListener('click', () => {
  headerModal.classList.toggle('header__modal--opened');
  headerToggle.classList.add('header__toggle--show');
  if (header.classList.contains('header__block--visible')) {
    headerToggle.classList.remove('header__toggle--show');
  }
});



/*
const header = document.querySelector('.header__block');
const headerToggle = document.querySelector('.header__toggle');

// intersection observer for header

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      header.classList.toggle('header__block--hidden', entry.isIntersecting);

      if (!headerModal.classList.contains('header__modal--opened')) {
        headerToggle.classList.toggle('header__toggle--show', entry.isIntersecting);
      }
    });
  },
  {
    rootMargin: '102px',
  }
);

const hideHeader = document.querySelector('.main__content');
observer.observe(hideHeader);

// header modal toggle

const headerModal = document.querySelector('.header__modal--wrapper');

headerToggle.addEventListener('click', () => {
  headerModal.classList.toggle('header__modal--opened');
  headerToggle.classList.add('header__toggle--show');
});
*/

/*
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('page__body--color-test');
    } else {
      entry.target.classList.remove('page__body--color-test');
    }
  });
}, options);

const hideHeader = document.querySelector('.main__content');
observer.observe(hideHeader);
*/


// hide header on scroll

/*
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
*/

/*
headerToggle.addEventListener('click', () => {
  if (headerModal.classList.contains('header__modal--closed')) {
    headerModal.classList.toggle('header__modal--closed');
    headerToggle.classList.add('header__toggle--show');
  } else {
    headerModal.classList.toggle('header__modal--closed');
  }
});
*/
