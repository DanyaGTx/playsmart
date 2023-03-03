const winners__slider = new Swiper('.winners-slider', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 5,
  slidesPerGroup: 2,
  speed: 500,
  spaceBetween: 10,

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    650: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
    1250: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 10,
    },
  },
});
