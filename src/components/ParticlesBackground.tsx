'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, ISourceOptions } from '@tsparticles/engine';

interface ParticlesBackgroundProps {
  className?: string;
}

export default function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Log container for debugging
    console.log('Particles loaded:', container);
  }, []);

  const options: ISourceOptions = {
    fullScreen: false,
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            blink: false,
            consent: false,
            opacity: 0.8,
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#00d9ff', '#ff006e', '#b100ff'],
      },
      links: {
        color: '#00d9ff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
      number: {
        density: {
          enable: true,
          height: 800,
          width: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 40,
            },
          },
        },
      },
      {
        maxWidth: 480,
        options: {
          particles: {
            number: {
              value: 25,
            },
          },
        },
      },
    ],
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className={className}
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
