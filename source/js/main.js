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

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal-video');
  const modalVideo = modal.querySelector('.modal-video__cover-video');
  const modalTitle = modal.querySelector('.modal-video__card-title');
  const modalText = modal.querySelector('.modal-video__card-text');

  const videoItems = document.querySelectorAll('.videos__item');

  videoItems.forEach(item => {
    item.addEventListener('click', function () {
      const coverVideo = item.querySelector('.videos__cover-video source').getAttribute('src');
      const title = item.querySelector('.videos__card-title').textContent;
      const text = item.querySelector('.videos__card-text').textContent;

      modalVideo.setAttribute('src', coverVideo);
      modalTitle.textContent = title;
      modalText.textContent = text;

      document.body.style.overflow = 'hidden';

      modal.classList.add('modal-video--show');
    });
  });
});

const modalVideo = document.querySelector('.modal-video');
const modalVideoClose = document.querySelector('.modal-video__close-button');

modalVideoClose.addEventListener('click', function (evt) {
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

      // Получаем ссылку на полноразмерное изображение из атрибута data-fullsize
      var fullSizeImage = slide.getAttribute('data-fullsize');

      // Устанавливаем изображение слайда в модальное окно
      modalImage.src = slideImage.src;

      // Устанавливаем ссылку на полноразмерное изображение в атрибут href для ссылки в модальном окне
      modal.querySelector('.modal-photo__link').href = fullSizeImage;

      document.body.style.overflow = 'hidden';

      // Открываем модальное окно
      modal.classList.add('modal-photo--show');
    });
  });

  // Добавляем обработчик события click для кнопки закрытия модального окна
  var closeButton = modal.querySelector('.modal-photo__close-button');
  closeButton.addEventListener('click', function () {
    document.body.style.overflow = 'auto';
    modal.classList.remove('modal-photo--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (modal.classList.contains('modal-photo--show')) {
        evt.preventDefault();
        document.body.style.overflow = 'auto';
        modal.classList.remove('modal-photo--show');
      }
    }
  });
});

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

// открытие и закрытие модального окна

/*
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
*/
