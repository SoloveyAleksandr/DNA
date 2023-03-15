document.addEventListener("DOMContentLoaded", () => {
  // const hrzContainer = document.querySelector(".hrz-container");
  // const hrzInner = hrzContainer.querySelector(".hrz-inner");

  // gsap.to(hrzContainer, {
  //   scrollTrigger: {
  //     trigger: hrzContainer,
  //     pin: true,
  //     scrub: 2,
  //     // markers: true,
  //   },
  //   x: -1 * (hrzInner.getBoundingClientRect().width - hrzContainer.getBoundingClientRect().width),
  //   ease: "none",
  // })

  const hrzContainers = gsap.utils.toArray(".hrz-container");
  hrzContainers.forEach(container => {
    const inner = container.querySelector(".hrz-inner");
    const innerWidth = inner.getBoundingClientRect().width;
    const containerWidth = container.getBoundingClientRect().width;

    // gsap.to(inner, {
    //   scrollTrigger: {
    //     trigger: container,
    //     pin: true,
    //     scrub: 2,
    //     // markers: true,
    //   },
    //   x: -1 * (innerWidth - containerWidth),
    //   ease: "none",
    // })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        // markers: true,
      },
    })

    tl.to(inner, {
      x: -1 * (innerWidth - containerWidth),
      duration: 1,
      ease: "none"
    }, 0.05)
  });

  if (document.querySelector(".main-about-wrapper")) {

    const mainAboutWrapper = document.querySelector(".main-about-wrapper");
    const mainAboutTimeline = mainAboutWrapper.querySelector(".main-about-timeline__fill");
    const mainAbout = mainAboutWrapper.querySelector(".main-about");

    const mainAboutBoxList = gsap.utils.toArray(".main-about-box");
    let scrollWidth = mainAboutBoxList.reduce((acc, item) => {
      return acc += item.scrollWidth;
    }, 0)

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: mainAboutWrapper,
        scrub: 1,
        pin: true,
        // markers: true,
        end: "500%",
        onUpdate: self => mainAboutTimeline.style.width = `${self.progress * 100}%`
      }
    })

    mainTL.to(".main-about-slide_1", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_1 .main-about-box_1").offsetWidth - mainAboutWrapper.clientWidth) + "px",
      onComplete: () => console.log("complete slide_1")
    })
    mainTL.to(".main-about-slide_2", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_2 .main-about-box_2").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_2").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_2").classList.remove("_active"),
    })
    mainTL.to(".main-about-slide_3", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_3 .main-about-box_3").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_3").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_3").classList.remove("_active"),
    })
    mainTL.to(".main-about-slide_4", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_4 .main-about-box_4").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_4").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_4").classList.remove("_active"),
    })

    mainTL.to(".main-about-slide_5", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_5 .main-about-box_5").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_5").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_5").classList.remove("_active"),
    })
    mainTL.to(".main-about-slide_6", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_6 .main-about-box_6").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_6").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_6").classList.remove("_active"),
    })
    mainTL.to(".main-about-slide_7", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_7 .main-about-box_7").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_7").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_7").classList.remove("_active"),
    })
    mainTL.to(".main-about-slide_8", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_8 .main-about-box_8").offsetWidth) + "px",
      onComplete: () => document.querySelector(".main-about-slide__number_8").classList.add("_active"),
      onStart: () => document.querySelector(".main-about-slide__number_8").classList.remove("_active"),
    })


    // mainTL.to(".main-about-slide_3", {
    //   duration: 1,
    //   ease: "none",
    //   x: -1 * document.querySelector(".main-about-slide_3 .main-about-box_3").scrollWidth + "px",
    //   onComplete: () => console.log("complete")
    // })
    // mainTL.to(".main-about-slide_4", {
    //   duration: 1,
    //   ease: "none",
    //   x: -1 * document.querySelector(".main-about-slide_4 .main-about-box_4").scrollWidth + "px",
    //   onComplete: () => console.log("complete")
    // })
    // mainTL.to(".main-about-slide_5", {
    //   duration: 1,
    //   ease: "none",
    //   x: -1 * document.querySelector(".main-about-slide_5 .main-about-box_5").scrollWidth + "px",
    //   onComplete: () => console.log("complete")
    // })
  }
});