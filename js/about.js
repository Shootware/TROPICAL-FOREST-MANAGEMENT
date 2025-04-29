document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au scroll
    const animatedElements = document.querySelectorAll(
        '.history-text, .history-image, ' +
        '.founder-image, .founder-bio, ' +
        '.experience-item, .divider'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Effet de parallaxe sur l'image du fondateur
    const founderImage = document.querySelector('.founder-image img');
    if (founderImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            founderImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    }

    // Animation des gradients
    const gradients = document.querySelectorAll('[style*="gradient"]');
    gradients.forEach(gradient => {
        gradient.addEventListener('mousemove', function(e) {
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            this.style.backgroundPosition = `${x/20}px ${y/20}px`;
        });
    });

    // Effet de typewriter pour le titre
    const heroTitle = document.querySelector('.about-header .hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
});