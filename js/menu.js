// let menu = document.getElementById("menu");
// let menuNav = document.getElementById("menu-nav");
// let row = document.getElementById("row");
// let menuRight = document.getElementById("menu-right");
// let menuLeft = document.getElementById("menu-left");

//const $menu = $("#menu");
const $menuNav = $("#menu-nav");
const $menuRight = $("#menu-right");
const $menuLeft = $("#menu-left");

const $bothSides = $("#menu-left, #menu-right");
const $contentRight = $("#menu-content-right");
const $contentLeft = $("#menu-content-left");
const $menuSocial = $("#menu-social");

const isMobile = window.innerWidth < 480;

const menuTl = new TimelineMax({
  // ease: Linear.easeNone,
  paused: true,

  reversed: true,
  //delay: "0",
})

  //.to($menu, { width: "100vw" })
  .fromTo(
    $menuNav,
    {
      visibility: "hidden",
    },
    {
      visibility: "unset",
    }
  )
  .call(() => {
    $("#menuNav").toggleClass("open");
  })
  .set("#menuNavText", {
    text: "CLOSE",
  })
  .to($menuRight, {
    left: "50%",
  })

  .fromTo(
    $bothSides,
    0.25,
    {
      width: "0",
    },
    {
      width: "50vw",
    }
  )
  .call(() => {
    $bothSides.addClass("backdrop-filter");
    // $menuSocial.addClass("backdrop-filter");
  })
  .call(() => {
    if (isMobile) {
      $menuNav.addClass("backdrop-filter");
      // $menuSocial.addClass("backdrop-filter");
    }
  })
  .set($contentLeft, {
    visibility: "hidden",
    y: "25",
    ease: " back.out",
  })
  .to($contentLeft, 0.1, {
    visibility: "unset",
    y: "0",
    ease: " back.out",
  })
  .set($contentRight, {
    visibility: "hidden",
    y: "25",
    ease: "back.out",
  })
  .to($contentRight, 0.1, {
    visibility: "unset",
    y: "0",
    ease: "back.out",
  })
  .set($menuSocial, {
    visibility: "hidden",
    y: "25",
    ease: "back.out",
  })
  .to($menuSocial, 0.1, {
    visibility: "unset",
    y: "0",
    ease: "back.out",
  });

document.getElementById("menuNav").addEventListener("click", () => {
  // menuTl.reversed() ? menuTl.play() : menuTl.reverse();

  if (menuTl.reversed()) {
    menuTl.play();
    $(".main").addClass("no-scroll");
  } else {
    menuTl.reverse();
    $(".main").removeClass("no-scroll");
  }

  // isMobile ? $("#menu-social, #nav").toggleClass("backdrop-filter") : null;
});
