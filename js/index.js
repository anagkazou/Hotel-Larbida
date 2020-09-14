window.onload = function () {
  //hide the preloader
  // document.querySelector(".preloader").style.display = "none";
  gsap.to(".preloader", 0.5, {
    opacity: "0",
    pointerEvents: "none",
    delay: 3,
    y: -50,
  });
};
