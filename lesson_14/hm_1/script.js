const initSlider = () => {
  const slideContainer = document.querySelector(".easy-slider");

  if (!slideContainer) {
    return;
  }

  const sliderElems = slideContainer.querySelectorAll(".easy-slider__slide");
  const slideButtonPrev = slideContainer.querySelector(
    ".easy-slider__button--prev"
  );
  const slideButtonNext = slideContainer.querySelector(
    ".easy-slider__button--next"
  );
  const slidesPagination = slideContainer.querySelector(
    ".easy-slider__pagination"
  );
  const ACTIVE_SLIDE_CLASS = "active";
  const BUTTON_DISABLED_CLASS = "disabled";

  if (
    !sliderElems.length ||
    !slideButtonNext ||
    !slideButtonPrev ||
    !slidesPagination
  ) {
    return;
  }

  const TIMEOUT_DURATION = 3000;
  let currentSlide = 0;
  let interval = null;

  const setIntervalForSlides = () => {
    interval = setInterval(() => {
      currentSlide += 1;

      removeActiveSlide();
      setSliderPosition();
    }, TIMEOUT_DURATION);
  };

  const resetInterval = () => {
    clearInterval(interval);
    interval = null;
    setIntervalForSlides();
  };

  const renderPagination = () => {
    sliderElems.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("slide-bullet");
      dot.dataset.count = index;

      slidesPagination.appendChild(dot);
    });
  };

  const setInitialValues = () => {
    renderPagination();

    sliderElems[0].classList.add(ACTIVE_SLIDE_CLASS);
    slidesPagination.children[0].classList.add(ACTIVE_SLIDE_CLASS);
    // slideButtonPrev.classList.add(BUTTON_DISABLED_CLASS);
    setIntervalForSlides();
  };

  const removeActiveSlide = () => {
    sliderElems.forEach((el) => el.classList.remove(ACTIVE_SLIDE_CLASS));
    [...slidesPagination.children].forEach((el) =>
      el.classList.remove(ACTIVE_SLIDE_CLASS)
    );
  };

  const setSliderPosition = () => {
    if (currentSlide === -1) {
      currentSlide = sliderElems.length - 1;
    }

    if (currentSlide === sliderElems.length) {
      currentSlide = 0;
    }

    sliderElems[currentSlide].classList.add(ACTIVE_SLIDE_CLASS);
    slidesPagination.children[currentSlide].classList.add(ACTIVE_SLIDE_CLASS);
  };

  //   const changePrevButtonState = () => {
  //     if (currentSlide === 0) {
  //       slideButtonPrev.classList.add(BUTTON_DISABLED_CLASS);
  //     }

  //     if (currentSlide > 0) {
  //       slideButtonNext.classList.remove(BUTTON_DISABLED_CLASS);
  //     }
  //   };

  //   const changeNextButtonState = () => {
  //     if (currentSlide === sliderElems.length - 1) {
  //       slideButtonNext.classList.add(BUTTON_DISABLED_CLASS);
  //     }

  //     if (currentSlide <= sliderElems.length - 1 && currentSlide !== 0) {
  //       slideButtonPrev.classList.remove(BUTTON_DISABLED_CLASS);
  //     }
  //   };

  setInitialValues();

  slideButtonPrev.addEventListener("click", () => {
    currentSlide -= 1;

    // changePrevButtonState();
    removeActiveSlide();
    setSliderPosition();
    resetInterval();
  });

  slideButtonNext.addEventListener("click", () => {
    currentSlide += 1;

    // changeNextButtonState();
    removeActiveSlide();
    setSliderPosition();
    resetInterval();
  });

  slidesPagination.addEventListener("click", (event) => {
    if (event.target && event.target.closest(".slide-bullet")) {
      const activeEl = event.target.closest(".slide-bullet");
      const dataCount = parseInt(activeEl.dataset.count);

      if (dataCount === 0 || dataCount) {
        currentSlide = dataCount;

        // changePrevButtonState();
        // changeNextButtonState();
        removeActiveSlide();
        setSliderPosition();
        resetInterval();

        activeEl.classList.add("active");
      }
    }
  });
};

initSlider();
