document.addEventListener('DOMContentLoaded', () => {
    // Animation des éléments au scroll
    const animatedElements = document.querySelectorAll(
        '.values-section, .parallax-section, .news-section, ' +
        '.value-card, .section-header, .news-slide'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
                entry.target.classList.remove('animate-in');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Animation d'opacité du header
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            header.style.opacity = 1 - Math.min(scrollY / 300, 0.5);
        });
    }

    // Animation des barres de défilement
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        :root {
            scrollbar-color: #2e7d32 #f1f1f1;
            scrollbar-width: thin;
        }
    `;
    document.head.appendChild(styleElement);
});