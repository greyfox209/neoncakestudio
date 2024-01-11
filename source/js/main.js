const header = document.querySelector('.header__block');
const headerToggle = document.querySelector('.sidebar__toggle');
const headerModal = document.querySelector('.sidebar__wrapper');

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

      if (!headerModal.classList.contains('sidebar--opened')) {
        headerToggle.classList.toggle('sidebar__toggle--show', entry.isIntersecting);
      }
    });
  },
  {
    rootMargin: '-10px'
  }
);


const hideHeader = document.querySelector('.main__content');
observer.observe(hideHeader);

// header modal toggle

headerToggle.addEventListener('click', () => {
  headerModal.classList.toggle('sidebar--opened');
  headerToggle.classList.add('sidebar__toggle--show');
  if (header.classList.contains('header__block--visible')) {
    headerToggle.classList.remove('sidebar__toggle--show');
  }
});

//videos

// videos show on hover .videos__item

document.querySelectorAll('.videos__item').forEach(item => {
  item.addEventListener('mouseover', (event) => {
    const coverImage = item.querySelector('.videos__cover-image');
    const coverVideo = item.querySelector('.videos__cover-video');

    coverImage.classList.add('videos__cover-image--hide');
    coverVideo.classList.add('videos__cover-video--show');
  });

  item.addEventListener('mouseout', (event) => {
    const coverImage = item.querySelector('.videos__cover-image');
    const coverVideo = item.querySelector('.videos__cover-video');

    coverImage.classList.remove('videos__cover-image--hide');
    coverVideo.classList.remove('videos__cover-video--show');
  });
});

// .modal-video opens on click .videos__item

document.querySelectorAll('.videos__item').forEach(item => {
  item.addEventListener('click', (event) => {
    const modalVideo = document.querySelector('.modal-video');

    document.body.style.overflow = 'hidden';
    modalVideo.classList.add('modal-video--show');
  });
});

// modal-video close

const modalVideo = document.querySelector('.modal-video');
const modalVideoClose = document.querySelector('.modal-video__close-button');

modalVideoClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  document.body.style.overflow = 'auto';
  modalVideo.classList.remove('modal-video--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modalVideo.classList.contains('modal-video--show')) {
      evt.preventDefault();
      document.body.style.overflow = 'auto';
      modalVideo.classList.remove('modal-video--show');
    }
  }
});

// swiper carousel

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper
  var mySwiper = new Swiper('.mySwiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  // Получаем элемент модального окна
  var modal = document.querySelector('.modal-photo');

  // Получаем элементы слайдов
  var slides = document.querySelectorAll('.mySwiper .swiper-slide');

  // Добавляем обработчик события click для каждого слайда
  slides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
      // Получаем изображение слайда
      var slideImage = slide.querySelector('img');

      // Получаем элемент с изображением в модальном окне
      var modalImage = modal.querySelector('.modal-photo__cover-photo');

      // Устанавливаем изображение слайда в модальное окно
      modalImage.src = slideImage.src;

      document.body.style.overflow = 'hidden';

      // Открываем модальное окно
      modal.classList.add('modal-photo--show');
    });
  });

  // Добавляем обработчик события click для кнопки закрытия модального окна
  var closeButton = modal.querySelector('.modal-photo__close-button');
  closeButton.addEventListener('click', function () {
    // Закрываем модальное окно
    document.body.style.overflow = 'auto';
    modal.classList.remove('modal-photo--show');
  });
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


,
  {
    rootMargin: '102px',
  }
*/
