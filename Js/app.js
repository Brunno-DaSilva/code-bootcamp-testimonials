console.log("Ciao bella me piace una buona sfida");

// [x] Set Content Loader
document.addEventListener("DOMContentLoaded", () => {
  /*
    [] Main Variables
        [] sliderInterval
        [] prev and next btn
        [] get all domNodes to an array
        [] isClickable
        []isActive
        []newActive

    */
  const sliderInterval = 500;
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const allSlides = [...document.querySelectorAll(".slide-changer")];

  let isClickable = true;
  let isActive = null;
  let newActive = null;

  /*
  []init Function 
    => Sets the attribute style of transition to the interval we created above
  */

  function initSlider() {
    allSlides.forEach((slide) =>
      slide.setAttribute(
        "style",
        `transition: transform ${sliderInterval}ms ease;
                     animation-duration: ${sliderInterval}ms`
      )
    );
  }

  function changeSlide(next) {
    if (isClickable) {
      clickable = false;
      isActive = document.querySelector(".active");
      const isActiveSlideIndex = allSlides.indexOf(isActive);

      if (next) {
        console.log("isActiveSlideIndex: ", isActiveSlideIndex);
        console.log("allSlides.length: ", allSlides.length);
        console.log("new slide: ", (isActiveSlideIndex + 1) % allSlides.length);

        newActive = allSlides[(isActiveSlideIndex + 1) % allSlides.length];
        isActive.classList.add("slideOutLeft");
        newActive.classList.add("slideInRight", "active");
      } else {
        console.log("isActiveSlideIndex: ", activeSlideIndex);
        console.log("allSlides.length: ", allSlides.length);
        console.log(
          "new slide: ",
          (isActiveSlideIndex - 1 + allSlides.length) % allSlides.length
        );

        newActive =
          allSlides[
            (isActiveSlideIndex - 1 + allSlides.length) % allSlides.length
          ];
        active.classList.add("slideOutRight");
        newActive.classList.add("slideInLeft", "active");
      }
    }
  }

  allSlides.forEach((slide) => {
    slide.addEventListener("transitionend", (e) => {
      // Check for the old active transition and if clickable is false
      // to not trigger it more than once
      if (slide === isActive && !isClickable) {
        isClickable = true;
        // Remove all CSS animation classes on old active
        isActive.className = "testimonials__slide-One";
      }
    });
  });

  /*
    [] Event Listeners
        [] change prev and next btn state to true
  
  */

  nextButton.addEventListener("click", () => {
    changeSlide(true);
  });

  prevButton.addEventListener("click", () => {
    changeSlide(false);
  });

  // Init the slider
  initSlider();

  var faqContainers = document.getElementsByClassName("displayNone");
  var faqToggle = document.getElementsByTagName("body")[0];
  for (var i = 0; i < faqContainers.length; i++) {
    faqContainers[i].addEventListener("click", function () {
      if (faqToggle.classList.contains("displayNone")) {
        faqToggle.classList.remove("displayNone");
        // alert("remove faq display!");
      } else {
        faqToggle.classList.add("displayNone");
        // alert("add faq display!");
      }
    });
  }
});
