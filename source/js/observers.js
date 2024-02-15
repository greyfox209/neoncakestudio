// hideHeader observer

const initHeaderObserver = () => {
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
      rootMargin: '140px'
    }
  );

  const hideHeader = document.querySelector('.main__content');
  headerObserver.observe(hideHeader);
};

// aboutVisible observer

const initAboutObserver = () => {
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
};

// videosTitle observer

const initVideosTitleObserver = () => {
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
};

// videosItems observer

const initVideosItemsObserver = () => {
  const videosItems = document.querySelectorAll('.videos__item');
  const observerOptions = {
    rootMargin: '10px'
  };

  const isMobileViewport = window.innerWidth < 640;

  videosItems.forEach((videosItem, index) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const visibleClass = 'videos__item--visible';

          // Добавление класса с анимацией только для текущего элемента
          if (isMobileViewport) {
            videosItem.classList.add(visibleClass);

            observer.unobserve(videosItem);

            // Удаление класса после завершения анимации
            videosItem.addEventListener('animationend', () => {
              videosItem.classList.remove(visibleClass);
            }, { once: true });
          } else {
            const leftClass = 'videos__item-left--visible';
            const rightClass = 'videos__item-right--visible';

            // Четность индекса элемента
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

            // Задержка перед снятием классов
            setTimeout(() => {
              videosItem.classList.remove(leftClass);
              videosItem.classList.remove(rightClass);

              const sibling = videosItems[index % 2 === 0 ? index + 1 : index - 1];
              if (sibling) {
                sibling.classList.remove(leftClass);
                sibling.classList.remove(rightClass);
              }
            }, 1000);
          }
        }
      });
    }, observerOptions);

    observer.observe(videosItem);
  });
};

// videosCta observer

const initVideosCtaObserver = () => {
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
};

// galleryTitle observer

const initGalleryTitleObserver = () => {
  const galleryTitle = document.querySelector('.gallery__title');
  const galleryTitleObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          galleryTitle.classList.add('gallery__title--visible');
        }
      });
    },
    {
      rootMargin: '-30px'
    }
  );
  const galleryTitleVisible = document.querySelector('.gallery--wrapper');
  galleryTitleObserver.observe(galleryTitleVisible);
};

// galleryCarousel observer

const initGalleryCarouselObserver = () => {
  const galleryCarousel = document.querySelector('.gallery__carousel');
  const galleryCarouselObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          galleryCarousel.classList.add('gallery__carousel--visible');
        }
      });
    },
    {
      rootMargin: '-30px'
    }
  );
  const galleryCarouselVisible = document.querySelector('.gallery__title');
  galleryCarouselObserver.observe(galleryCarouselVisible);
};

// cta observer

const initCtaObserver = () => {
  const ctaWrapper = document.querySelector('.cta--wrapper');
  const ctaObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ctaWrapper.classList.add('cta--wrapper--visible');
        }
      });
    },
    {
      rootMargin: '-30px'
    }
  );
  const ctaVisible = document.querySelector('.cta');
  ctaObserver.observe(ctaVisible);
};


export {
  initHeaderObserver,
  initAboutObserver,
  initVideosTitleObserver,
  initVideosItemsObserver,
  initVideosCtaObserver,
  initGalleryTitleObserver,
  initGalleryCarouselObserver,
  initCtaObserver
};
