document.addEventListener("DOMContentLoaded", function() {
    const confettiContainer = document.querySelector('.confetti-container');

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 3 + 4 + 's'; // Longer duration for smoother fall
        confetti.style.animationDelay = Math.random() * 2 + 's'; // Add delay for staggered fall
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = Math.random() * 0.7 + 0.3;

        confettiContainer.appendChild(confetti);

        // Remove confetti after it falls out of view
        setTimeout(() => {
            confetti.remove();
        }, 10000); // Increased timeout to match longer animation duration
    }

    // Create multiple confetti with a reduced interval
    setInterval(createConfetti, 50); // More frequent creation for smoother flow
});
