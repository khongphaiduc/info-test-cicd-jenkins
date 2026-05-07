document.addEventListener("DOMContentLoaded", function () {
    // 1. NAVBAR SCROLL EFFECT
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // 2. CREATE TWINKLING STARS
    function createTwinklingStars() {
        const container = document.getElementById('star-container');
        if (!container) return;

        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(star);
        }
    }
    createTwinklingStars();

    // 3. METEORS EFFECT
    function initMeteors() {
        const container = document.getElementById('meteor-container');
        if (!container) return;

        function spawnMeteor() {
            const meteor = document.createElement('div');
            meteor.className = 'meteor';
            const startY = Math.random() * 60;
            meteor.style.top = `${startY}%`;
            const direction = Math.floor(Math.random() * 2);

            if (direction === 0) {
                meteor.style.left = '-100px';
                meteor.classList.add('meteor-right');
            } else {
                meteor.style.left = 'calc(100% + 100px)';
                meteor.classList.add('meteor-left');
            }

            const duration = Math.random() * 1.5 + 2;
            meteor.style.animationDuration = `${duration}s`;
            container.appendChild(meteor);
            setTimeout(() => { meteor.remove(); }, duration * 1000);
        }

        setInterval(() => {
            const count = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < count; i++) {
                setTimeout(spawnMeteor, Math.random() * 500);
            }
        }, 1200);
    }
    initMeteors();
});