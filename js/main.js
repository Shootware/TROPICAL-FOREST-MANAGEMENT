document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburger.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // Mise à jour de l'année dans le footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});