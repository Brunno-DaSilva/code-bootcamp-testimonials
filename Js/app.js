// const carousel = document.querySelector("[data-target='carousel']");

// const slide = document.querySelector(`[data-targe="slide"]`);

// const carouselWidth = carousel.offsetWidth;
// const cardStyle = slide.currentStyle || window.getComputedStyle(slide);
// const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// // Count the number of total cards you have
// const cardCount = carousel.querySelectorAll(`[data-targe="slide"]`).length;

// let offset = 0;
// const maxX = -(
//   (cardCount / 3) * carouselWidth +
//   cardMarginRight * (cardCount / 3) -
//   carouselWidth -
//   cardMarginRight
// );

// console.log(maxX);

// // Add the click events
// prevBtn.addEventListener("click", function () {

// });

// nextBtn.addEventListener("click", function () {

// });

const carousel = document.querySelector("[data-target='carousel']");
const slide = document.querySelectorAll(`[data-targe="slide"]`);

const prevBtn = document.querySelector(`[data-action="prevBtn"]`);
const nextBtn = document.querySelector(`[data-action="nextBtn"]`);

prevBtn.addEventListener("click", function () {
  slide[0].classList.remove("displayNone");
  slide[1].classList.add("displayNone");
});

nextBtn.addEventListener("click", function () {
  slide[1].classList.remove("displayNone");
  slide[0].classList.add("displayNone");
});
