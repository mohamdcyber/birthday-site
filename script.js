/**
 * Gentle confetti particles - soft falling animation
 * Pastel birthday color palette
 */
(function () {
  'use strict';

  const CONFETTI_COLORS = [
    '#ffb3d9', '#ffcce0', '#ffe0ec',
    '#c2185b', '#f48fb1', '#f8bbd9',
    '#ffecb3', '#fff8e1', '#ffffff'
  ];

  const PARTICLE_COUNT = 35;
  const CONTAINER = document.getElementById('confetti-container');

  if (!CONTAINER) return;

  function createConfetti() {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';

    const size = 6 + Math.random() * 8;
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 6;
    const delay = Math.random() * 5;

    particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;

    CONTAINER.appendChild(particle);

    particle.addEventListener('animationend', function () {
      particle.remove();
      createConfetti();
    });
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    setTimeout(createConfetti, i * 200);
  }
})();
