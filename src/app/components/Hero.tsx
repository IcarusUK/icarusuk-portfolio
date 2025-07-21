'use client';

import { useCallback, useEffect, useState } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const fullText = "Hi, I'm Marcus";
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [particlesVisible, setParticlesVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typing);
        setShowCursor(true);
        setTimeout(() => setShowSubtext(true), 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 400 && particlesVisible) {
      setParticlesVisible(false);
    } else if (scrollY <= 400 && !particlesVisible) {
      setParticlesVisible(true);
    }
  }, [scrollY, particlesVisible]);

  return (
    <>
      {/* Hero overlay */}
      <div
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white z-50 pointer-events-none"
        style={{
          opacity: 1 - scrollY / 400,
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
        }}
      >
        {particlesVisible && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 w-full h-full z-0 will-change-transform"
            style={{ transform: 'translateZ(0)' }}
            options={{
              fullScreen: { enable: false },
              background: { color: { value: '#1e293b' } },
              particles: {
                number: { value: 80, density: { enable: true, area: 500 } },
                color: { value: '#ffffff' },
                opacity: {
                  value: { min: 0.3, max: 0.8 },
                  animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
                },
                size: { value: { min: 1, max: 3 } },
                move: {
                  enable: true,
                  speed: 1.5,
                  direction: 'none',
                  outModes: 'out',
                  straight: false,
                },
                links: {
                  enable: true,
                  distance: 130,
                  color: '#ffffff',
                  opacity: 0.4,
                  width: 1,
                },
                shadow: {
                  enable: true,
                  color: '#ffffff',
                  blur: 5,
                },
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: 'grab' },
                  onClick: { enable: false, mode: 'push' },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    links: { opacity: 0.8 },
                  },
                  push: { quantity: 4 },
                },
              },
              detectRetina: true,
              responsive: [
                {
                  maxWidth: 768,
                  options: {
                    particles: {
                      number: { value: 40 },
                      links: { distance: 100 },
                    },
                  },
                },
              ],
              fpsLimit: 60,
            }}
          />
        )}

        {/* Hero Text */}
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            {displayText}
            {showCursor && <span className="blink">_</span>}
          </h1>
          <p
            className={`text-xl transition-opacity duration-1000 ${
              showSubtext ? 'opacity-100' : 'opacity-0'
            }`}
          >
            A First Class Honours Software Engineering Graduate
          </p>
        </div>
      </div>

      {/* Filler section to create scroll offset */}
      <div className="h-screen" />
    </>
  );
}
