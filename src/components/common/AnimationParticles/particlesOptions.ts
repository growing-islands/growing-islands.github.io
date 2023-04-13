export const particlesOptions: Record<App.DeviceSize, any> = {
  pc: {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'polygon',
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
        },
      },
      size: {
        value: 8,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        out_mode: 'bounce',
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        resize: true,
      },
      modes: {
        grab: {
          distance: 10,
          line_linked: {
            opacity: 0.4,
          },
        },
        bubble: {
          distance: 10,
          size: 40,
          duration: 2,
          opacity: 8,
        },
        repulse: {
          distance: 20,
        },
      },
    },
    retina_detect: true,
  },
  sp: {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'polygon',
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
        },
      },
      size: {
        value: 8,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        out_mode: 'bounce',
      },
    },
    interactivity: {
      detect_on: 'canvas',
      modes: {
        grab: {
          distance: 10,
          line_linked: {
            opacity: 0.4,
          },
        },
        bubble: {
          distance: 10,
          size: 40,
          duration: 2,
          opacity: 8,
        },
        repulse: {
          distance: 20,
        },
      },
    },
    retina_detect: true,
  },
}
