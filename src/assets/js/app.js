document.addEventListener("DOMContentLoaded", () => {
  // const VW = window.innerWidth / 100;
  // const scrollContainer = document.querySelector(".scroll-container");
  // const scrollItem = scrollContainer.querySelector(".horizontal-scroll");
  // const scrollContainerRect = scrollContainer.getBoundingClientRect();
  // const scrollItemRect = scrollItem.getBoundingClientRect();

  // const scrollTL = gsap.timeline();

  // scrollTL.to(scrollItem, {
  //   x: `-${scrollItemRect.width}px`,
  //   scrollTrigger: {
  //     trigger: scrollContainer,
  //     pin: true,
  //     scrub: 2,
  //     end: "+=300%",
  //   }
  // })
  const scrollContainer = document.querySelector(".scroll-container");

  const pinList = [...scrollContainer.querySelectorAll(".scroll-pin")];

  pinList.forEach(pinItem => {
    const wrapper = pinItem.querySelector(".pin-wraper");
    const width = wrapper.clientWidth;
    gsap.to(wrapper, {
      scrollTrigger: {
        trigger: scrollContainer,
        x: "-100%",
        pin: true,
        scrab: 2,
        end: "+=300%",
      }
    })
  })
});