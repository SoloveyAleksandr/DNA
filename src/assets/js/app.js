document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".main-top")) {
    const mainTopWrapper = document.querySelector(".main-top-wrapper");
    const mainTop = mainTopWrapper.querySelector(".main-top");

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: mainTopWrapper,
        scrub: 1,
        pin: true,
        end: "200%",
      }
    })
      .to(mainTop, {
        duration: 1,
        ease: "none",
        x: -1 * (mainTop.scrollWidth - mainTopWrapper.clientWidth) + "px",
      })
  }

  if (document.querySelector(".main-about-wrapper")) {

    const mainAboutWrapper = document.querySelector(".main-about-wrapper");
    const mainAboutTimeline = mainAboutWrapper.querySelector(".main-about-timeline__fill");

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: mainAboutWrapper,
        scrub: 1,
        pin: true,
        end: "500%",
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

    const breakpoints = [375, 500, 850, 1200, 1920];
    let maxBreakpoint = Infinity;
    let minBreakpoint = null;

    for (let i = 0; i < breakpoints.length; i++) {
      if (startWindowSize < breakpoints[i]) {
        maxBreakpoint = breakpoints[i];
        break;
      }
    }

    for (let i = breakpoints.length - 1; i > 0; i--) {
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

    let geometry = new THREE.SphereGeometry(0.8, 32, 32);
    let material = new THREE.MeshPhongMaterial({
      color: "#87E3CA",
      shininess: 100
    });
    // let sphere = new THREE.Mesh(geometry, material);
    // scene.add(sphere);

    // function removeObject(item) {
    //   pivot.remove(item);
    //   sphereList.shift();
    // }
    const pivot = new THREE.Group();
    scene.add(pivot);
    pivot.position.x = 0.25;
    pivot.rotation.z = -0.2;

    // const sphereList = [];

    // let start = 5;
    // for (let i = 0; i < 30; i++) {
    //   let geometry = new THREE.SphereGeometry(gsap.utils.random(0.1, 0.6), 16, 16);
    //   const sphere = new THREE.Mesh(geometry, material);
    //   sphere.position.x = gsap.utils.random(-1, 1);
    //   sphere.position.z = gsap.utils.random(-1, 1);
    //   sphere.position.y = start;

    //   start -= 0.4;
    //   // scene.add(sphere);
    //   pivot.add(sphere);
    //   sphereList.push(sphere);

    //   setTimeout(() => {
    //     removeObject(sphere);
    //   }, 15000)
    // }

    // setInterval(() => {
    //   let geometry = new THREE.SphereGeometry(gsap.utils.random(0.1, 0.6), 16, 16);
    //   const sphere = new THREE.Mesh(geometry, material);
    //   sphere.position.x = gsap.utils.random(-1, 1);
    //   sphere.position.z = gsap.utils.random(-1, 1);
    //   sphere.position.y = -5;

    //   // scene.add(sphere);
    //   pivot.add(sphere);
    //   sphereList.push(sphere);

    //   setTimeout(() => {
    //     removeObject(sphere);
    //   }, 15000)
    // }, 800);

    // renderer.render(scene, camera);

    const loader = new THREE.GLTFLoader();

    const dnaList = [];
    let humanDNA_1 = null;
    let humanDNA_2 = null;
    let humanDNA_3 = null;

    loader.load("./assets/models/humanDNA.gltf", (gltf) => {
      gltf.scene.castShadow = true;
      gltf.scene.position.z = -2.3;
      humanDNA_1 = gltf.scene.clone();
      humanDNA_1.scale.set(4, 4, 4);
      humanDNA_1.position.y = 1;
      pivot.add(humanDNA_1);
      dnaList.push(humanDNA_1);

      humanDNA_2 = gltf.scene.clone();
      humanDNA_2.scale.set(4, 4, 4);
      humanDNA_2.position.y = -4;
      pivot.add(humanDNA_2);
      dnaList.push(humanDNA_2);

      humanDNA_3 = gltf.scene.clone();
      humanDNA_3.scale.set(4, 4, 4);
      humanDNA_3.position.y = -9;
      pivot.add(humanDNA_3);
      dnaList.push(humanDNA_3);

    }, (e) => {
      console.log(e);
    })

    // loader.load("./assets/models/dna.glb", (gltf) => {
    //   scene.add(gltf.scene);
    // }, (e) => {
    //   console.log(e);
    // })

    // let model = null;
    // loader.load("./assets/models/dna.glb", (glb) => {
    //   // loader.load("./assets/models/DNA.gltf", (glb) => {
    //   model = glb.scene;
    //   model.position.x = -1;
    //   model.scale.set(3, 3, 3);
    //   scene.add(model);
    //   console.log(model);
    // }, (e) => {
    //   console.log(e);
    // })

    function animate() {
      // sphereList.forEach(el => {
      //   el.position.y += 0.01;
      //   // el.position.x += 0.002;
      // })
      pivot.rotateY(0.003)

      dnaList.forEach(item => {
        item.position.y += 0.003;
        if (item.position.distanceTo(pivot.position) > 6 && item.position.y >= 6) {
          item.position.y = -9;
        }
      })

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }
});

window.onload = () => {
  const spinner = document.querySelector(".spinner");
  if (spinner) {
    spinner.addEventListener("animationend", () => {
      // spinner.remove();
      document.body.classList.remove("_hidden");
      spinner.style.display = "none";
    })
    spinner.classList.add("_hidden");
  }
}