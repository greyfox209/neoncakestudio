// swiper

const initSwiper = () => {
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

    var modal = document.querySelector('.modal-photo');
    const modalPhotoContainer = document.querySelector('.modal-photo__container');
    const modalPhotoWrapper = document.querySelector('.modal-photo__wrapper');
    var slides = document.querySelectorAll('.mySwiper .swiper-slide');

    var prevButton = modal.querySelector('.modal-photo__arrow-button--left');
    var nextButton = modal.querySelector('.modal-photo__arrow-button--right');

    slides.forEach(function (slide, index) {
      slide.addEventListener('click', function () {
        var currentSlideIndex = getCurrentSlideIndex();
        var slideImage = slide.querySelector('img');

        var modalImage = modal.querySelector('.modal-photo__cover-photo');
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
        modalPhotoWrapper.classList.add('modal-photo__wrapper--show');
        modalPhotoContainer.classList.add('modal-photo__container--visible');
      });
    });

    // Добавляем обработчик события click для кнопки влево
    prevButton.addEventListener('click', function () {
      // Убираем все классы анимаций
      modalPhotoContainer.classList.remove(
        'modal-photo__container--visible',
        'modal-photo__container--slide-left-in',
        'modal-photo__container--slide-right-in'
      );

      // Срабатывает анимация
      void modalPhotoContainer.offsetWidth;
      modalPhotoContainer.classList.add('modal-photo__container--slide-left-in');

      showPreviousSlide();
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'ArrowLeft') {
        evt.preventDefault();
        if (modal.classList.contains('modal-photo--show')) {
          modalPhotoContainer.classList.remove(
            'modal-photo__container--visible',
            'modal-photo__container--slide-left-in',
            'modal-photo__container--slide-right-in'
          );

          void modalPhotoContainer.offsetWidth;
          modalPhotoContainer.classList.add('modal-photo__container--slide-left-in');

          showPreviousSlide();
        }
      }
    });

    // Добавляем обработчик события click для кнопки вправо
    nextButton.addEventListener('click', function () {
      modalPhotoContainer.classList.remove(
        'modal-photo__container--visible',
        'modal-photo__container--slide-left-in',
        'modal-photo__container--slide-right-in'
      );

      void modalPhotoContainer.offsetWidth;
      modalPhotoContainer.classList.add('modal-photo__container--slide-right-in');

      showNextSlide();
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'ArrowRight') {
        evt.preventDefault();
        if (modal.classList.contains('modal-photo--show')) {
          modalPhotoContainer.classList.remove(
            'modal-photo__container--visible',
            'modal-photo__container--slide-left-in',
            'modal-photo__container--slide-right-in'
          );

          void modalPhotoContainer.offsetWidth;
          modalPhotoContainer.classList.add('modal-photo__container--slide-right-in');

          showNextSlide();
        }
      }
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
    const closeButton = modal.querySelector('.modal-photo__close-button');
    closeButton.addEventListener('click', function () {
      document.body.style.overflow = 'auto';

      modalPhotoWrapper.classList.remove('modal-photo__wrapper--show');
      modalPhotoWrapper.classList.add('modal-photo__wrapper--hide');
      void modalPhotoWrapper.offsetWidth;
      setTimeout(function () {
        modalPhotoWrapper.classList.remove('modal-photo__wrapper--hide');
      }, 200);

      modalPhotoContainer.classList.remove('modal-photo__container--visible');
      modalPhotoContainer.classList.add('modal-photo__container--hide');
      setTimeout(function () {
        modalPhotoContainer.classList.remove('modal-photo__container--hide');
      }, 200);

      modalPhotoContainer.classList.remove('modal-photo__container--slide-left-in');
      modalPhotoContainer.classList.remove('modal-photo__container--slide-right-in');

      setTimeout(function () {
        modal.classList.remove('modal-photo--show');
      }, 200);

      resetArrowButtonVisibility();
    });


    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (modal.classList.contains('modal-photo--show')) {
          evt.preventDefault();
          document.body.style.overflow = 'auto';

          modalPhotoWrapper.classList.remove('modal-photo__wrapper--show');
          modalPhotoWrapper.classList.add('modal-photo__wrapper--hide');
          void modalPhotoWrapper.offsetWidth;
          setTimeout(function () {
            modalPhotoWrapper.classList.remove('modal-photo__wrapper--hide');
          }, 200);

          modalPhotoContainer.classList.remove('modal-photo__container--visible');
          modalPhotoContainer.classList.add('modal-photo__container--hide');
          setTimeout(function () {
            modalPhotoContainer.classList.remove('modal-photo__container--hide');
          }, 200);

          modalPhotoContainer.classList.remove('modal-photo__container--slide-left-in');
          modalPhotoContainer.classList.remove('modal-photo__container--slide-right-in');

          setTimeout(function () {
            modal.classList.remove('modal-photo--show');
          }, 200);

          resetArrowButtonVisibility();
        }
      }
    });
  });
};

export { initSwiper };
