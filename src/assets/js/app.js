document.addEventListener("DOMContentLoaded", () => {

  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 60,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  })

  if (document.querySelector(".main-top") && window.matchMedia("(min-width: 1024px)").matches) {
    const mainTopWrapper = document.querySelector(".main-top-wrapper");
    const mainTop = mainTopWrapper.querySelector(".main-top");

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: mainTopWrapper,
        scrub: 0,
        pin: true,
        end: "300%",
      }
    })
      .to(mainTop, {
        duration: 1,
        ease: "none",
        x: -1 * (mainTop.scrollWidth - mainTopWrapper.clientWidth) + "px",
      })
    const delayTL = gsap.timeline({
      duration: 0.2,
    })
    mainTL.add(delayTL);
  }

  if (document.querySelector(".main-about-wrapper") && window.matchMedia("(min-width: 1024px)").matches) {

    const mainAboutWrapper = document.querySelector(".main-about-wrapper");
    const mainAboutTimeline = mainAboutWrapper.querySelector(".main-about-timeline__fill");

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: mainAboutWrapper,
        scrub: 0,
        pin: true,
        end: "900%",
        onUpdate: self => mainAboutTimeline.style.width = `${self.progress * 100}%`
      }
    })

    mainTL.to(".main-about-slide_1", {
      duration: 1,
      ease: "none",
      x: -1 * (document.querySelector(".main-about-slide_1 .main-about-box_1").offsetWidth - mainAboutWrapper.clientWidth) + "px",
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
    })

    const delayTL = gsap.timeline({
      duration: 0.2,
    })
    mainTL.add(delayTL);
  } else if (document.querySelector(".main-about-wrapper") && window.matchMedia("(max-width: 1023px)").matches) {
    const template = document.querySelector(".main-about-wrapper template").content.cloneNode(true);
    const templateSwiper = template.querySelector(".main-about-swiper-wrapper");

    const mainSection = document.querySelector(".main-about");

    const slides = gsap.utils.toArray(".main-about-slide");
    const fragment = document.createDocumentFragment();

    slides.forEach((slide, index) => {
      if (index === 0) {
        template.querySelector(".main-about__title").innerHTML = slide.querySelector(".main-about__title").innerHTML;
      } else {
        const newSlide = template.querySelector(".main-about-swiper-slide").cloneNode(true);
        const newSlideContainer = newSlide.querySelector(".main-about-swiper-slide__container");

        newSlideContainer.appendChild(slide.querySelector(".main-about-slide__number"));
        newSlideContainer.appendChild(slide.querySelector(".main-about__subtitle"));
        newSlideContainer.appendChild(slide.querySelector(".main-about__description"));
        newSlide.appendChild(slide.querySelector(".main-about-box-img"));

        fragment.appendChild(newSlide);
      }
    })

    mainSection.innerHTML = "";
    templateSwiper.innerHTML = "";
    templateSwiper.appendChild(fragment);
    mainSection.appendChild(template);

    new Swiper(".main-about-swiper", {
      speed: 800,
      autoHeight: true,
      navigation: {
        nextEl: '.main-about-swiper-btns__bnt_next',
        prevEl: '.main-about-swiper-btns__bnt_prev',
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
      },
    })
  }

  if (document.querySelector(".main-slider")) {
    const swiper = new Swiper('.main-slider-swiper', {
      speed: 1000,
      navigation: {
        nextEl: ".main-slider .main-slider__btn_next",
        prevEl: ".main-slider .main-slider__btn_prev",
      },
    });
  }

  if (document.querySelector(".header")) {
    class Menu {
      constructor(btn, profileBtn, menu) {
        this.btn = document.querySelector(btn);
        this.menu = document.querySelector(menu);
        this.profileBtn = document.querySelector(profileBtn)
        this.isOpen = false;

        if (this.btn) {
          this.init();
        }
      }

      init() {
        this.btn.addEventListener("click", this.handleClick.bind(this));
      }

      handleClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      open() {
        this.btn.classList.add("_active");
        this.profileBtn.classList.add("_active");
        this.menu.classList.add("_active");
        this.isOpen = true;
      }

      close() {
        this.btn.classList.remove("_active");
        this.profileBtn.classList.remove("_active");
        this.menu.classList.remove("_active");
        this.isOpen = false;
      }
    }

    new Menu(".header-nav-btns__btn_burger", ".header-nav-btns__btn_profile", ".menu");
  }

  const footer = document.querySelector(".footer");
  if (footer && window.matchMedia("(max-width: 1023px)").matches) {
    const container = footer.querySelector(".footer-container");
    const fragment = document.createDocumentFragment();
    const logo = footer.querySelector(".footer-logo").cloneNode(true);
    const nav = footer.querySelector(".footer-nav").cloneNode(true);
    const contacts = footer.querySelector(".footer-contacts").cloneNode(true);
    const legal = footer.querySelector(".footer-legal").cloneNode(true);
    const btn = footer.querySelector(".footer-right__btn").cloneNode(true);
    const list = footer.querySelector(".footer-right-list").cloneNode(true);

    container.innerHTML = "";
    fragment.appendChild(logo);
    fragment.appendChild(nav);
    fragment.appendChild(contacts);
    fragment.appendChild(legal);
    fragment.appendChild(btn);
    fragment.appendChild(list);

    container.appendChild(fragment);
  }

  const canvas = document.querySelector(".main-top-canvas");
  const FPS = document.getElementById("fps");

  // let be = Date.now();
  // let fps = 0;

  // function fpsCounter() {
  //   let now = Date.now();
  //   fps = Math.round(1000 / (now - be));
  //   be = now;
  //   FPS.textContent = fps
  // }

  const startWindowSize = window.innerWidth;

  const breakpoints = [480, 744, 1023, 1920];
  let maxBreakpoint = Infinity;
  let minBreakpoint = 0;

  for (let i = 0; i < breakpoints.length; i++) {
    if (startWindowSize < breakpoints[i]) {
      maxBreakpoint = breakpoints[i];
      break;
    }
  }

  for (let i = breakpoints.length - 1; i > -1; i--) {
    if (startWindowSize > breakpoints[i]) {
      minBreakpoint = breakpoints[i];
      break;
    }
  }

  if (breakpoints.includes(startWindowSize)) {
    maxBreakpoint = startWindowSize;
  }

  window.addEventListener("resize", () => {
    if (width >= maxBreakpoint || width <= minBreakpoint) {
      location.reload();
    }
  })

  const aboutWrapper = document.querySelector(".about-wrapper");
  const aboutContent = document.querySelector(".about");

  if (aboutWrapper && aboutContent && window.matchMedia("(min-width: 1024px)").matches) {
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: aboutWrapper,
        scrub: 0,
        pin: true,
        end: "500%"
      }
    });

    mainTL.to(aboutContent, {
      x: -1 * (aboutContent.scrollWidth - aboutWrapper.offsetWidth) + "px",
      duration: 1,
    })
    const delayTL = gsap.timeline({
      duration: 0.2,
    })
    mainTL.add(delayTL);

    const infoListTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-info",
        start: "50% right",
        end: "right left",
        containerAnimation: mainTL,
      }
    })
    const infoListTitles = gsap.utils.toArray(".about-info-list__title");
    const infoListTexts = gsap.utils.toArray(".about-info-list__text");
    infoListTitles.forEach((item, index) => {
      infoListTL.from(item, {
        opacity: 0,
        x: "100%",
        duration: 1,
        delay: index * 0.5,
      }, "sin")
    });
    infoListTexts.forEach((item, index) => {
      infoListTL.from(item, {
        opacity: 0,
        y: "100%",
        duration: 1,
        delay: index * 0.3,
      }, "sin_2")
    });
  }

  if (aboutContent && window.matchMedia("(max-width: 1023px)").matches) {
    new Swiper(".about-team-list-wrapper", {
      slidesPerView: "auto",
      freeMode: true,
      speed: 500,
    })
  }

  const aboutDna = document.querySelector(".about-team-dna");
  if (aboutDna) {
    const fragment = document.createDocumentFragment();
    const dnaItem = aboutDna.querySelector(".about-team-dna__box");

    const startColor = {
      r: 50,
      g: 168,
      b: 158,
    };
    const endColor = {
      r: 89,
      g: 168,
      b: 244,
    }

    // for (let i = 0; i < 20; i++) {
    for (let i = 0; i < Math.round(aboutDna.offsetHeight / 50); i++) {
      const item = dnaItem.cloneNode(true);
      const spin_1 = item.querySelector(".about-team-dna__item_left");
      const spin_2 = item.querySelector(".about-team-dna__item_right");

      spin_1.style.animationDelay = (i + 1) * -1200 + 'ms';
      spin_2.style.animationDelay = (i + 1) * -1200 + 'ms';
      spin_1.style.backgroundColor = `rgb(${startColor.r + ((endColor.r - startColor.r) / 20 * i)}, 168, ${startColor.b + ((endColor.b - startColor.b) / 20 * i)})`;
      spin_2.style.backgroundColor = `rgb(${startColor.r + ((endColor.r - startColor.r) / 20 * i)}, 168, ${startColor.b + ((endColor.b - startColor.b) / 20 * i)})`;

      fragment.appendChild(item);
    }

    aboutDna.appendChild(fragment);
  }
});

window.onload = () => {
  const spinner = document.querySelector(".spinner");
  if (spinner) {
    spinner.addEventListener("animationend", () => {
      document.body.classList.remove("_hidden");
      spinner.style.display = "none";
    })
    spinner.classList.add("_hidden");
  }
}