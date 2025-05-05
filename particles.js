// Particle animation system using tsparticles
window.addEventListener('load', async () => {
  await tsParticles.load({
    id: 'particles-canvas',
    options: {
      particles: {
        number: { value: 80 }, 
        color: { value: '#6FFFE9' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          outModes: 'bounce'
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' }
        }
      },
      background: { color: 'transparent' }
    }
  });
});