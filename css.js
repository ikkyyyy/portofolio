document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('stars');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 10 + 's';
        aboutSection.appendChild(star);
    }
});
