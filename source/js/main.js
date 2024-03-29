import {
  initHeaderObserver,
  initAboutObserver,
  initVideosTitleObserver,
  initVideosItemsObserver,
  initVideosCtaObserver,
  initGalleryTitleObserver,
  initGalleryCarouselObserver,
  initCtaObserver
} from './observers.js';
import { initSidebar } from './sidebar.js';
import { initParallax } from './parallax.js';
import { initVideoHover, initVideoModal, initVideoModalClose } from './videos.js';
import { initSwiper } from './carousel.js';

initHeaderObserver();
initSidebar();
initParallax();

initAboutObserver();

initVideosTitleObserver();
initVideosItemsObserver();
initVideosCtaObserver();
initVideoHover();
initVideoModal();
initVideoModalClose();

initSwiper();
initGalleryTitleObserver();
initGalleryCarouselObserver();

initCtaObserver();
