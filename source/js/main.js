// hideHeader observer

const header = document.querySelector('.header__block');
const headerToggle = document.querySelector('.sidebar__toggle');
const headerModal = document.querySelector('.sidebar__wrapper');

const headerObserver = new IntersectionObserver(
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
headerObserver.observe(hideHeader);

// informationBlockVisible observer

const information = document.querySelector('.information');
const aboutImage = document.querySelector('.about__image');

const aboutObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        information.classList.add('information--visible');
        aboutImage.classList.add('about__image--visible');
      }
    });
  },
  {
    rootMargin: '-100px'
  }
);

const aboutVisible = document.querySelector('.about__image-block');
aboutObserver.observe(aboutVisible);

// videosTitle observer

const videosTitle = document.querySelector('.videos__title');

const videosTitleObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        videosTitle.classList.add('videos__title--visible');
      }
    });
  },
  {
    rootMargin: '-30px'
  }
);

const videosTitleVisible = document.querySelector('.main__videos');
videosTitleObserver.observe(videosTitleVisible);

// videosItems observer

const videosItems = document.querySelectorAll('.videos__item');

const observerOptions = {
  rootMargin: '10px'
};

videosItems.forEach((videosItem, index) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const leftClass = 'videos__item-left--visible';
        const rightClass = 'videos__item-right--visible';

        // Проверяем четность индекса элемента
        if (index % 2 === 0) {
          videosItem.classList.add(leftClass);
          const sibling = videosItems[index + 1];
          if (sibling) {
            sibling.classList.add(rightClass);
          }
        } else {
          videosItem.classList.add(rightClass);
          const sibling = videosItems[index - 1];
          if (sibling) {
            sibling.classList.add(leftClass);
          }
        }

        // Остановить наблюдение после первого пересечения
        observer.unobserve(videosItem);
      }
    });
  }, observerOptions);

  observer.observe(videosItem);
});

// videosTitle observer

const videosCta = document.querySelector('.videos__cta');

const videosCtaObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        videosCta.classList.add('videos__cta--visible');
      }
    });
  },
  {
    rootMargin: '-50px'
  }
);

const videosCtaVisible = document.querySelector('.videos__cta--wrapper');
videosCtaObserver.observe(videosCtaVisible);


// header modal toggle

headerToggle.addEventListener('click', () => {
  headerModal.classList.toggle('sidebar--opened');
  headerToggle.classList.add('sidebar__toggle--show');
  if (header.classList.contains('header__block--visible')) {
    headerToggle.classList.remove('sidebar__toggle--show');
  }
});

// Паралакс эффект секций .intro и .main__content

const ADDITIONALMARGIN = 120;

const introRef = document.querySelector(".intro");
const mainContentRef = document.querySelector(".main__content");
const layerRefs = document.querySelectorAll(".layer");

const etalonTop = introRef.getBoundingClientRect().top;
const etalonBottom = introRef.getBoundingClientRect().bottom;
const etalonHeight = introRef.offsetHeight;
const etalonDistance = etalonTop + etalonHeight;

let currentIndex = 0;
let currentRef = layerRefs[currentIndex];
currentRef.style.marginTop = etalonHeight + ADDITIONALMARGIN + "px";

let currentPos = window.scrollY;

function toggleStickyBehavior() {
  let scrollPosition = window.scrollY;
  let isScrollUp = currentPos > scrollPosition;

  function getDownDistance() {
    return (
      etalonBottom * (currentIndex + 1) -
      etalonTop * (currentIndex + 1) +
      etalonTop
    );
  }

  function getUpDistance() {
    return (
      etalonBottom * currentIndex + etalonTop * (currentIndex + 1) - etalonTop
    );
  }

  if (!isScrollUp && scrollPosition >= getDownDistance()) {
    currentRef.style.marginTop = 0;

    if (!introRef.classList.contains("intro--fixed") && currentIndex < 4) {
      introRef.classList.add("intro--fixed");

      currentIndex += 1;
      currentRef = layerRefs[currentIndex];
    }
    currentRef.style.marginTop = getDownDistance() + ADDITIONALMARGIN + "px";
  }

  if (isScrollUp && getUpDistance() > scrollPosition && currentIndex > 0) {
    currentRef.style.marginTop = 0;
    currentIndex -= 1;
    currentRef = layerRefs[currentIndex];
    if (introRef.classList.contains("intro--fixed")) {
      introRef.classList.remove("intro--fixed");
    }

    if (currentIndex < 1) {
      currentRef.style.marginTop =
        getUpDistance() + etalonBottom - etalonTop + ADDITIONALMARGIN + "px";
    } else {
      currentRef.style.marginTop = getUpDistance() + etalonBottom + "px";
    }
  }

  currentPos = window.scrollY;
}

window.addEventListener("scroll", toggleStickyBehavior);
toggleStickyBehavior();

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

// swiper

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.mySwiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Получаем элемент модального окна
  var modal = document.querySelector('.modal-photo');

  // Получаем элементы слайдов
  var slides = document.querySelectorAll('.mySwiper .swiper-slide');

  // Получаем кнопки влево и вправо
  var prevButton = modal.querySelector('.modal-photo__arrow-button--left');
  var nextButton = modal.querySelector('.modal-photo__arrow-button--right');

  slides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
      var currentSlideIndex = getCurrentSlideIndex();
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

      if (index === 0) {
        prevButton.classList.add('modal-photo__arrow-button--hide');
        nextButton.classList.remove('modal-photo__arrow-button--hide');
      } else if (index === slides.length - 1) {
        prevButton.classList.remove('modal-photo__arrow-button--hide');
        nextButton.classList.add('modal-photo__arrow-button--hide');
      } else {
        // Если не первый и не последний, обнуляем классы
        resetArrowButtonVisibility();
      }

      document.body.style.overflow = 'hidden';

      // Открываем модальное окно
      modal.classList.add('modal-photo--show');
    });
  });

  // Добавляем обработчик события click для кнопки влево
  prevButton.addEventListener('click', function () {
    showPreviousSlide();
  });

  // Добавляем обработчик события click для кнопки вправо
  nextButton.addEventListener('click', function () {
    showNextSlide();
  });

  // Функция для отображения предыдущего слайда
  function showPreviousSlide() {
    var currentSlideIndex = getCurrentSlideIndex();

    // Если текущий слайд не первый, отобразить предыдущий слайд
    if (currentSlideIndex > 0) {
      var previousSlide = slides[currentSlideIndex - 1];
      showSlide(previousSlide);
    }

    // Обновляем видимость кнопок в зависимости от текущего слайда
    updateArrowButtonVisibility();
  }

  // Функция для отображения следующего слайда
  function showNextSlide() {
    var currentSlideIndex = getCurrentSlideIndex();

    // Если текущий слайд не последний, отобразить следующий слайд
    if (currentSlideIndex < slides.length - 1) {
      var nextSlide = slides[currentSlideIndex + 1];
      showSlide(nextSlide);
    }

    // Обновляем видимость кнопок в зависимости от текущего слайда
    updateArrowButtonVisibility();
  }

  // Функция для отображения конкретного слайда
  function showSlide(slide) {
    var slideImage = slide.querySelector('img');
    var modalImage = modal.querySelector('.modal-photo__cover-photo');
    var fullSizeImage = slide.getAttribute('data-fullsize');

    modalImage.src = slideImage.src;
    modal.querySelector('.modal-photo__link').href = fullSizeImage;
  }

  // Функция для получения индекса текущего слайда
  function getCurrentSlideIndex() {
    var modalImageSrc = modal.querySelector('.modal-photo__cover-photo').src;

    for (var i = 0; i < slides.length; i++) {
      var slideImage = slides[i].querySelector('img');
      if (slideImage.src === modalImageSrc) {
        return i;
      }
    }

    return -1;
  }

  // Функция для обновления видимости кнопок в зависимости от текущего слайда
  function updateArrowButtonVisibility() {
    var currentSlideIndex = getCurrentSlideIndex();

    // Проверяем, является ли текущий слайд первым
    if (currentSlideIndex === 0) {
      prevButton.classList.add('modal-photo__arrow-button--hide');
    } else {
      prevButton.classList.remove('modal-photo__arrow-button--hide');
    }

    // Проверяем, является ли текущий слайд последним
    if (currentSlideIndex === slides.length - 1) {
      nextButton.classList.add('modal-photo__arrow-button--hide');
    } else {
      nextButton.classList.remove('modal-photo__arrow-button--hide');
    }
  }

  // Функция для сброса видимости кнопок в начальное состояние
  function resetArrowButtonVisibility() {
    prevButton.classList.remove('modal-photo__arrow-button--hide');
    nextButton.classList.remove('modal-photo__arrow-button--hide');
  }

  // Добавляем обработчик события click для кнопки закрытия модального окна
  var closeButton = modal.querySelector('.modal-photo__close-button');
  closeButton.addEventListener('click', function () {
    document.body.style.overflow = 'auto';
    modal.classList.remove('modal-photo--show');

    resetArrowButtonVisibility();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (modal.classList.contains('modal-photo--show')) {
        evt.preventDefault();
        document.body.style.overflow = 'auto';
        modal.classList.remove('modal-photo--show');

        resetArrowButtonVisibility();
      }
    }
  });
});

/*
const introRef = document.querySelector(".intro");
const mainContentRef = document.querySelector(".main__content");

const etalonTop = introRef.getBoundingClientRect().top;
const etalonBottom = introRef.getBoundingClientRect().bottom;
const etalonHeight = introRef.offsetHeight;
const etalonDistance = etalonTop + etalonHeight;

let isIntroFixed = false;

function toggleStickyBehavior() {
  let scrollPosition = window.scrollY;

  if (scrollPosition >= etalonDistance && !isIntroFixed) {
    introRef.classList.add("intro--fixed");
    mainContentRef.style.marginTop = etalonHeight + "px";
    isIntroFixed = true;
  } else if (scrollPosition < etalonTop && isIntroFixed) {
    introRef.classList.remove("intro--fixed");
    mainContentRef.style.marginTop = 0;
    isIntroFixed = false;
  }
}

window.addEventListener("scroll", toggleStickyBehavior);
toggleStickyBehavior();
*/
