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
      // onComplete: () => document.querySelector(".main-about-slide__number_8").classList.add("_active"),
      // onStart: () => document.querySelector(".main-about-slide__number_8").classList.remove("_active"),
    })

    const delayTL = gsap.timeline({
      duration: 0.2,
    })
    mainTL.add(delayTL);


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

  const canvas = document.querySelector(".main-top-canvas");
  const FPS = document.getElementById("fps");

  let be = Date.now();
  let fps = 0;

  function fpsCounter() {
    let now = Date.now();
    fps = Math.round(1000 / (now - be));
    be = now;
    FPS.textContent = fps
  }

  if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      context: canvas.getContext("webgl"),
      antialias: true,
      alpha: true
    });

    const simplex = new SimplexNoise();

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

    // console.log(minBreakpoint, maxBreakpoint)

    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    const canvasWidthPrec = canvasWidth / (window.innerWidth / 100) / 100;
    const canvasHeightPrec = canvasHeight / (window.innerWidth / 100) / 100;

    renderer.setSize(canvasWidth, canvasHeight);

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      renderer.setSize(window.innerWidth * canvasWidthPrec, window.innerWidth * canvasHeightPrec);
      if (width >= maxBreakpoint || width <= minBreakpoint) {
        location.reload();
      }
    })

    renderer.setPixelRatio(window.devicePixelRatio || 1);

    camera.position.z = 10;

    //==>точечный свет
    // let lightTop = new THREE.DirectionalLight("#5F9A94", 1);
    // lightTop.position.set(0, 500, 200);
    // lightTop.castShadow = true;
    // scene.add(lightTop);

    let light_1 = new THREE.DirectionalLight("#88E5CB", 0.8);
    light_1.position.set(100, 100, 100);
    light_1.castShadow = true;
    scene.add(light_1);

    let light_2 = new THREE.DirectionalLight("#436759", 0.5);
    light_2.position.set(-100, -100, 100);
    light_2.castShadow = true;
    scene.add(light_2);
    //<==

    //основной свет
    let ambientLight = new THREE.AmbientLight("#00C8B7", 0.5);
    scene.add(ambientLight);

    const pivot = new THREE.Group();
    scene.add(pivot);

    if (window.matchMedia("(max-width: 744px)").matches) {
      pivot.position.x = 0.25;
    } else {
      pivot.position.x = 0.25;
      pivot.rotation.z = -0.2;
    }
    // pivot.scale.set(2, 2, 2);

    const loader = new THREE.GLTFLoader();

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const dnaList = [];

      loader.load("./assets/models/DNA.glb", (gltf) => {
        gltf.scene.castShadow = true;
        gltf.scene.scale.set(0.5, 0.5, 0.5);

        const humanDNA_1 = gltf.scene.clone();
        pivot.add(humanDNA_1);
        dnaList.push(humanDNA_1);
        humanDNA_1.position.y = 3;

        const humanDNA_2 = gltf.scene.clone();
        pivot.add(humanDNA_2);
        dnaList.push(humanDNA_2);
        humanDNA_2.position.y = -6.4;
        humanDNA_2.rotateY(-1.56);

        const humanDNA_3 = gltf.scene.clone();
        pivot.add(humanDNA_3);
        dnaList.push(humanDNA_3);
        humanDNA_3.position.y = -15.8;
      });

      function animate() {
        fpsCounter();
        pivot.rotateY(-0.006);

        dnaList.forEach((item, index) => {
          item.position.y += 0.003;
          if (item.position.distanceTo(pivot.position) >= 10 && item.position.y >= 10) {
            item.position.y = -18.2;
            item.rotateY(-1.56);
          }
        })

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
      pivot.position.z = -110;

      loader.load("./assets/models/DNA.glb", (gltf) => {
        gltf.scene.castShadow = true;
        gltf.scene.scale.set(0.5, 0.5, 0.5);

        const humanDNA_1 = gltf.scene.clone();
        humanDNA_1.scale.set(5, 5, 5);
        pivot.add(humanDNA_1);
      });

      function animate() {
        fpsCounter();
        pivot.rotateY(-0.003);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
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