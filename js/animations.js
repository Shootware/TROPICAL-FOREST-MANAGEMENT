document.addEventListener('DOMContentLoaded', () => {
    // Initialisation de AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-quart',
        once: true,
        mirror: false,
        offset: 120,
        debounceDelay: 50,
        throttleDelay: 99
    });

    // Animation des statistiques (si vous avez une section stats)
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 1500;
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentValue = Math.floor(progress * target);
                
                stat.textContent = currentValue.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    // Observer pour les stats
    const statsSection = document.querySelector('.operations-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        statsObserver.observe(statsSection);
    }
});