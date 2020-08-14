$(".accordion .foreground-section").each(function (index, el) {
  const stepTime = 0.2;

  const $this = $(el);
  const thisIndex = el.dataset.index;
  const $thisBackground = $this
    .parent()
    .prev()
    .find(`.background--section[data-index="${thisIndex}"]`);
  const $otherBackgrounds = $this
    .parent()
    .prev()
    .find(".background--section")
    .not(`[data-index="${thisIndex}"]`);

  $(el)
    .mouseenter((e) => {
      if (window.innerWidth >= 800) {
        $(el).parents(".accordion").addClass("mouseentered");

        // animate in this background
        gsap.to($thisBackground, 1, {
          opacity: 1,
        });

        // fade out other backgrounds
        gsap.to($otherBackgrounds, 1, {
          opacity: 0,
        });
      }

      if (window.innerWidth >= 1200) {
        const $description = $(el).find(".foreground-section__description");
        const desTl = new TimelineMax()
          .set($description, {
            height: "auto",
          })
          .from($description, 0.1, {
            height: 0,
          })
          .to($description, 0.1, {
            opacity: 1,
            y: 0,
            marginTop: 20,
          });
      }
    })

    .mouseleave((e) => {
      $(el).parents(".accordion").removeClass("mouseentered");

      if (window.innerWidth >= 1200) {
        const $description = $(el).find(".foreground-section__description");
        const desTl = new TimelineMax().to($description, 0.3, {
          height: 0,
          opacity: 0,
          y: 50,
          marginTop: 0,
        });
      }
    });
});
