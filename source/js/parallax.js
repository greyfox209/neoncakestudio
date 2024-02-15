// Паралакс эффект секций .intro и .main__content

const initParallax = () => {
  let ADDITIONALMARGIN;
  const introRef = document.querySelector(".intro");
  const viewportHeight = window.innerHeight;

  if (viewportHeight < 1088) {
    ADDITIONALMARGIN = 240;
  } else {
    ADDITIONALMARGIN = 240;
  }

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
};

export { initParallax };
