// videos show on hover .videos__item

const initVideoHover = () => {
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
};

// .modal-video opens on click .videos__item

const modalVideo = document.querySelector('.modal-video');
const modalWrapper = document.querySelector('.modal-video__wrapper');
const modalContainer = document.querySelector('.modal-video__container');
const modalVideoClose = document.querySelector('.modal-video__close-button');

const initVideoModal = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const modalVideoCover = modalVideo.querySelector('.modal-video__cover-video');
    const modalTitle = modalVideo.querySelector('.modal-video__card-title');
    const modalText = modalVideo.querySelector('.modal-video__card-text');

    const videoItems = document.querySelectorAll('.videos__item');

    videoItems.forEach(item => {
      item.addEventListener('click', () => {
        const coverVideo = item.querySelector('.videos__cover-video source').getAttribute('src');
        const title = item.querySelector('.videos__card-title').textContent;
        const text = item.querySelector('.videos__card-text').textContent;

        modalVideoCover.setAttribute('src', coverVideo);
        modalTitle.textContent = title;
        modalText.textContent = text;

        document.body.style.overflow = 'hidden';

        modalVideo.classList.add('modal-video--show');
        modalWrapper.classList.add('modal-video__wrapper--show');
        modalContainer.classList.add('modal-video__container--visible');
      });
    });
  });
};

const initVideoModalClose = () => {
  modalVideoClose.addEventListener('click', () => {
    document.body.style.overflow = 'auto';

    modalWrapper.classList.remove('modal-video__wrapper--show');
    modalWrapper.classList.add('modal-video__wrapper--hide');
    void modalWrapper.offsetWidth;
    setTimeout(() => {
      modalWrapper.classList.remove('modal-video__wrapper--hide');
    }, 200);

    modalContainer.classList.remove('modal-video__container--visible');
    modalContainer.classList.add('modal-video__container--hide');
    setTimeout(() => {
      modalContainer.classList.remove('modal-video__container--hide');
    }, 200);

    setTimeout(() => {
      modalVideo.classList.remove('modal-video--show');
    }, 200);

    resetArrowButtonVisibility();
  });

  window.addEventListener('keydown', evt => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (modalVideo.classList.contains('modal-video--show')) {
        evt.preventDefault();
        document.body.style.overflow = 'auto';

        modalWrapper.classList.remove('modal-video__wrapper--show');
        modalWrapper.classList.add('modal-video__wrapper--hide');
        void modalWrapper.offsetWidth;
        setTimeout(() => {
          modalWrapper.classList.remove('modal-video__wrapper--hide');
        }, 200);

        modalContainer.classList.remove('modal-video__container--visible');
        modalContainer.classList.add('modal-video__container--hide');
        setTimeout(() => {
          modalContainer.classList.remove('modal-video__container--hide');
        }, 200);

        setTimeout(() => {
          modalVideo.classList.remove('modal-video--show');
        }, 200);

        resetArrowButtonVisibility();
      }
    }
  });
};

export { initVideoHover, initVideoModal, initVideoModalClose };
