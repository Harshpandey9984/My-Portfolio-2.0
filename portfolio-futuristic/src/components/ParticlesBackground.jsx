import React, { useCallback, useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const customInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  
  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);
  
  const particleColor = isDark ? '#00ffff' : '#3b82f6';
  const backgroundColor = 'transparent'; // Let the main app handle background

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      options={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: particleColor },
          links: { color: particleColor, distance: 150, enable: true, opacity: 0.5, width: 1 },
          move: { enable: true, speed: 2, outModes: 'bounce' },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
