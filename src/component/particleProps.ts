type ShapeType =
  | "circle"
  | "edge"
  | "triangle"
  | "polygon"
  | "star"
  | "image"
  | "images";

type MoveDirection =
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "top-left"
  | "none";

type MoveOutMode = "bounce" | "out";

type InteractivityMode = "grab" | "push" | "remove" | "bubble" | "repulse";

const type: ShapeType = "circle";
const direction: MoveDirection = "bottom";
const outMode: MoveOutMode = "bounce";
const modeHover: InteractivityMode = "bubble";
const modeClick: InteractivityMode = "repulse";

const particlesProps = {
  particles: {
    color: {
      value: "#0DA7EE"
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 200
    },
    shape: {
      image: {
        height: 100,
        src: "img/github.svg",
        width: 100
      },
      polygon: {
        nb_sides: 5
      },
      stroke: {
        color: "#000000",
        width: 0
      },
      type
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: Math.ceil(Math.random() * 3),
      direction,
      random: true,
      straight: false,
      outMode,
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: modeHover
      },
      onclick: {
        enable: true,
        mode: modeClick
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
export default particlesProps;
