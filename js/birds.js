function removeElement(element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  return function () {
    element.parentNode.removeChild(element);
  };
}
gsap.fromTo(
  ".bird",
  { top: "15%", left: "-3%" },
  {
    top: "50%",
    left: "101%",
    ease: Linear.easeNone,
    duration: 10,
    onComplete: function removeBird() {
      $(".bird-container").remove();
    },
  }
);
// $('.bird-container').remove();

initBirdAnimation();

function initBirdAnimation() {
  const numOfBirds = 7;
  const $birdWrapper = $(".bird-wrapper");
  const windowsWidth = window.innerWidth;

  const $bird = $(".bird").remove();

  for (var i = 0; i <= numOfBirds - 1; i++) {
    const $this = $bird.clone();
    $birdWrapper.append($this);

    const minMoveTime = windowsWidth < 800 ? 8 : 15;
    const maxMoveTime = windowsWidth < 800 ? 14 : 25;

    const moveTime = getRandomInt(minMoveTime, maxMoveTime);

    const isEven = i % 2 === 0;

    //Starting top position
    const topPercent = getRandomInt(0, 100);

    gsap.set($this, { top: `${Math.abs(topPercent)}%` });

    const tl = new TimelineMax({
      ease: Linear.easeNone,
      delay: randomFloatBetween(i + 2, i + 4, 2),
      repeat: -1,
    });

    tl.set($this, {
      left: "-25px",
      y: isEven ? getRandomInt(30, 60) : getRandomInt(-60, -30),
      ease: Power0.easeNone,
    })
      .to($this, moveTime / 4, {
        left: "25%",
        y: isEven ? getRandomInt(-40, -20) : getRandomInt(20, 40),
        ease: Power0.easeNone,
      })
      .to($this, moveTime / 4, {
        left: "50%",
        y: isEven ? getRandomInt(20, 40) : getRandomInt(-40, -20),
        ease: Power0.easeNone,
      })
      .to($this, moveTime / 4, {
        left: "75%",
        y: isEven ? getRandomInt(-60, -30) : getRandomInt(30, 60),
        ease: Power0.easeNone,
      })
      .to($this, moveTime / 4, {
        left: "100%",
        y: isEven ? getRandomInt(-20, 50) : getRandomInt(-50, 20),
        ease: Power0.easeNone,
      });
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloatBetween(minValue, maxValue, precision) {
  if (typeof precision == "undefined") {
    precision = 2;
  }
  return parseFloat(
    Math.min(
      minValue + Math.random() * (maxValue - minValue),
      maxValue
    ).toFixed(precision)
  );
}
