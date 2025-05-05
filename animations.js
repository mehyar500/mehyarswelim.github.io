// Scroll animation trigger system
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-visible');
    }
  });
}, {
  threshold: 0.25
});

document.querySelectorAll('.scroll-animate').forEach((element) => {
  observer.observe(element);
});

// Initialize particle system after DOM load
window.addEventListener('load', () => {
  const canvas = document.getElementById('particles-canvas');
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector('header').offsetHeight;
});