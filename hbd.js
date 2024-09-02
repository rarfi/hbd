document.addEventListener("DOMContentLoaded", function() {
  const confettiContainer = document.querySelector('.confetti-container');

  function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.opacity = Math.random() * 0.9 + 0.1;

      confettiContainer.appendChild(confetti);

      // Remove confetti after it falls out of view
      setTimeout(() => {
          confetti.remove();
      }, 5000);
  }

  // Create multiple confetti
  setInterval(createConfetti, 100);
});