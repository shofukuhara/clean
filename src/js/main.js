let image = document.getElementsByClassName("thumbnail");
new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
});

$(".slider").slick({
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 600,
      settings: "unslick",
    },
  ],
});
//リサイズした時に実行
$(window).on("resize orientationchange", function () {
  $(".slider").slick("resize");
});

jQuery(function ($) {
  $(".header__hamburger").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("active");
    $(".header__list").toggleClass("active", $(this).hasClass("active"));
  });
  $(".header__list").on("click", function () {
    $(".header__hamburger").click();
  });
});

ScrollTrigger.matchMedia({
  // 1025px以上
  "(min-width: 1025px)": function () {
    gsap.fromTo(
      ".about__sectitle-bg",
      {
        x: "600px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".about__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
          delay: 0.6,
        },
      }
    );

    gsap.fromTo(
      ".service__sectitle-bg",
      {
        x: "480px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".service__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".news__sectitle-bg",
      {
        x: "560px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".news__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".company__sectitle-bg",
      {
        x: "300px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".company__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    const pop01 = ".pop01";
    // const start01 = 1000;
    gsap.set(pop01, {
      opacity: 0,
      top: "10px",
      left: "60%",
      markers: true,
    });
    gsap.to(pop01, {
      scrollTrigger: {
        trigger: pop01,
        start: "top center+=100",
        end: "bottom center",
      },
      duration: 1,
      opacity: 1,
    });
  },

  // 600px以上1025px以下
  "(min-width: 600px) and (max-width: 1025px)": function () {
    gsap.fromTo(
      ".about__sectitle-bg",
      {
        x: "100px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".about__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
          delay: 0.6,
        },
      }
    );

    gsap.fromTo(
      ".service__sectitle-bg",
      {
        x: "80px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".service__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".news__sectitle-bg",
      {
        x: "100px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".news__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".company__sectitle-bg",
      {
        x: "60px",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".company__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    const pop01 = ".pop01";
    // const start01 = 1000;
    gsap.set(pop01, {
      opacity: 0,
      top: "10px",
      left: "60%",
      markers: true,
    });
    gsap.to(pop01, {
      scrollTrigger: {
        trigger: pop01,
        start: "top center+=100",
        end: "bottom center",
      },
      duration: 1,
      opacity: 1,
    });
  },

  // 599px以下
  "(max-width: 599px)": function () {
    gsap.fromTo(
      ".about__sectitle-bg",
      {
        x: "10vw",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".about__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
          delay: 0.6,
        },
      }
    );

    gsap.fromTo(
      ".service__sectitle-bg",
      {
        x: "10vw",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".service__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".news__sectitle-bg",
      {
        x: "10vw",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".news__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".company__sectitle-bg",
      {
        x: "10vw",
      },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".company__sectitle-bg",
          start: "top center+=160",
          end: "bottom center",
          scrub: 0.8,
        },
      }
    );
    const pop01 = ".pop01";
    gsap.set(pop01, {
      opacity: 0,
      top: "10px",
      left: "60%",
      markers: true,
    });
    gsap.to(pop01, {
      scrollTrigger: {
        trigger: pop01,
        start: "top center+=100",
        end: "bottom center",
      },
      duration: 1,
      opacity: 1,
    });
  },
});
