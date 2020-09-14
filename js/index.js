window.onload = function () {
  //hide the preloader
  // document.querySelector(".preloader").style.display = "none";
  const tl = new TimelineMax({ delay: 3 })
    .to(".logo-splash", 0.4, {
      opacity: 0,
      delay: 0.4,
    })
    .to(".preloader", 0.4, {
      //opacity: "0",
      pointerEvents: "none",
      height: 0,
    });
};
