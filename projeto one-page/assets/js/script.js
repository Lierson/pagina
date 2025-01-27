/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
particlesJS("particlesContainer", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "triangle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  let count_particles, stats, update;
  stats = new stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  
  $("i").click(function () {
    $("ul").toggleClass("open");
  });
  
  /*função mudança de estilo */

  function activeMenuItem(menuItem) { 
    const selector = "#itemMenu1, #itemMenu2, #itemMenu3, #itemMenu4, #itemMenu5"; 
    const menuItems = document.querySelectorAll(selector); 
    menuItems.forEach((item) => item.classList.remove("active")); 
    menuItem.classList.add("active"); 
  } 
  
  function activeFirstMenuItem() { 
    activeMenuItem(document.querySelector("#itemMenu1")); 
  } 
  
  function activeSecondMenuItem() { 
    activeMenuItem(document.querySelector("#itemMenu2")); 
  } 
  
  function activeThirdMenuItem() { 
    activeMenuItem(document.querySelector("#itemMenu3")); 
  } 
  
  function activeFourthMenuItem() { 
    activeMenuItem(document.querySelector("#itemMenu4")); 
  } 
  
  function activeFifthMenuItem() { 
    activeMenuItem(document.querySelector("#itemMenu5"));  
  } 
  



  
  
 
 
 
  
 

