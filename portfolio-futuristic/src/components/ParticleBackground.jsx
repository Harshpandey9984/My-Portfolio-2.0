import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = ({ config = 'network' }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  // Different particle configurations
  const configs = {
    network: {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#00ffff',
        },
        links: {
          color: '#00ffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    },
    
    matrix: {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ['#00ff00', '#00ffff', '#ff00ff'],
        },
        move: {
          direction: 'bottom',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: 'char',
          character: {
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C'],
            font: 'Verdana',
            style: '',
            weight: '400',
            fill: true,
          },
        },
        size: {
          value: { min: 8, max: 16 },
        },
      },
      detectRetina: true,
    },

    stars: {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1,
            },
          },
        },
      },
      particles: {
        color: {
          value: ['#ffffff', '#00ffff', '#ff00ff', '#ffff00'],
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: 'star',
          star: {
            sides: 5,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
          },
        },
      },
      detectRetina: true,
    },

    bubbles: {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'bubble',
          },
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
        },
      },
      particles: {
        color: {
          value: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
        },
        move: {
          direction: 'top',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: { min: 0.1, max: 0.8 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 10, max: 30 },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 0.1,
          },
        },
      },
      detectRetina: true,
    },
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={configs[config] || configs.network}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;
