let image = document.getElementsByClassName("thumbnail");
new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
});

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
      // markers: true,
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
      // markers: true,
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
      // markers: true,
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
      // markers: true,
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
    // markers: true,
  },
  duration: 1,
  opacity: 1,
});
