var swiper = new Swiper(".swiper-container", {
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOninteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
