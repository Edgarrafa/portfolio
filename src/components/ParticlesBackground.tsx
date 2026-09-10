'use client';

import { useEffect, useState, useMemo, useSyncExternalStore } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

interface ParticlesBackgroundProps {
  className?: string;
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener('change', onChange);
  return () => mediaQuery.removeEventListener('change', onChange);
}

export default function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
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
          enable: !prefersReducedMotion,
          mode: 'push',
        },
        onHover: {
          enable: !prefersReducedMotion,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          quantity: 3,
        },
        grab: {
          distance: 120,
          links: {
            blink: false,
            consent: false,
            opacity: 0.6,
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
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: !prefersReducedMotion,
        speed: prefersReducedMotion ? 0 : 0.8,
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
        value: 60, // Reduced from 80 for better performance
      },
      opacity: {
        value: { min: 0.3, max: 0.6 },
        animation: {
          enable: !prefersReducedMotion,
          speed: 0.8,
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
              value: 35,
            },
          },
        },
      },
      {
        maxWidth: 480,
        options: {
          particles: {
            number: {
              value: 20,
            },
          },
        },
      },
    ],
  }), [prefersReducedMotion]);

  if (!init) return null;

  // Don't render particles at all if reduced motion is strongly preferred
  if (prefersReducedMotion) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <Particles
      id="tsparticles"
      className={className}
      options={options}
      aria-hidden="true"
    />
  );
}
