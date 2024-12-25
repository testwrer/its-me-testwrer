// Example of a simple parallax effect with mouse movement
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.querySelector('.parallax').style.backgroundPosition = `${x}% ${y}%`;
});

// Simple button interaction (like redirecting to GitHub)
document.getElementById('github-button').addEventListener('click', () => {
    window.location.href = 'https://github.com/testwrer';
});
