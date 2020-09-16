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

// gsap.fromTo(
//   ".anim",
//   0.5,
//   {
//     scrollTrigger: {
//       trigger: ".anim",
//       toggleActions: "restart none none none",
//     },
//   },
//   {
//     y: "-20",
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//   }
// );

let firstAccordionElements = document.querySelectorAll(".first-acc__el");
let secondAccordionElements = document.querySelectorAll(".second-acc__el");
let tl1 = new TimelineMax({
  scrollTrigger: {
    trigger: ".accordion",
    start: "5% 80%",
    toggle: "restart none none none",
  },
  paused: true,
});

let tl2 = new TimelineMax({
  scrollTrigger: {
    trigger: ".accordion-two",
    start: "4% 80%",
    toggle: "restart none none none",
  },
  paused: true,
});

firstAccordionElements.forEach((element) => {
  tl1.from(element, {
    y: 100,
    opacity: 0,
    duration: 0.4,
  });
});

secondAccordionElements.forEach((element) => {
  tl2.from(element, {
    y: 100,
    opacity: 0,
    duration: 0.4,
  });
});

const bookingTl = new TimelineMax({
  scrollTrigger: ".section-booking",
  toggle: "restart none none none",
  markers: true,
}).from(".section-booking", {
  y: 80,
  opacity: 0,
});
