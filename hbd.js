const confettiContainer = document.querySelector('.confetti-container');
const confettiElements = [];

for (let i = 0; i < 100; i++) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.top = `${Math.random() * window.innerHeight}px`;
  confetti.style.left = `${Math.random() * window.innerWidth}px`;
  confettiContainer.appendChild(confetti);
  confettiElements.push(confetti);
}

function animateConfetti() {
  confettiElements.forEach((confetti) => {
    confetti.style.transform = `translateY(${Math.random() * 100}px)`;
  });
  requestAnimationFrame(animateConfetti);
}

animateConfetti();