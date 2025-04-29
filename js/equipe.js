document.addEventListener('DOMContentLoaded', function() {
    // Animation du hero section
    const heroTitle = document.querySelector('.equipe-hero h1');
    const heroSubtitle = document.querySelector('.equipe-hero p');
    
    if (heroTitle && heroSubtitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        heroSubtitle.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
            
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animation de la section présentation
    const presentationContent = document.querySelector('.presentation-content');
    if (presentationContent) {
        animateText(presentationContent);
    }

    // Animation des compétences
    const competenceCards = document.querySelectorAll('.competence-card');
    competenceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 500);
        
        // Animation au survol
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
    });

    // Animation du contenu organisationnel
    const organisationContent = document.querySelector('.organisation-content');
    if (organisationContent) {
        animateText(organisationContent, 0.5);
    }

    // Animation des directions
    const directionsSection = document.querySelector('.directions-section');
    const directionCards = document.querySelectorAll('.direction-card');
    
    if (directionsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animation du titre
                    const title = entry.target.querySelector('h2');
                    if (title) {
                        title.style.opacity = '1';
                        title.style.transform = 'translateY(0)';
                    }
                    
                    // Animation des cartes
                    directionCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) rotateY(0)';
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(directionsSection);
        
        // Préparation des animations
        const sectionTitle = directionsSection.querySelector('h2');
        if (sectionTitle) {
            sectionTitle.style.opacity = '0';
            sectionTitle.style.transform = 'translateY(30px)';
            sectionTitle.style.transition = 'all 0.8s ease';
        }
        
        directionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) rotateY(30deg)';
            card.style.transition = `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
            card.style.transformOrigin = 'bottom center';
        });
    }

    // Animation CTA
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('h2').style.animation = 'fadeInUp 0.8s ease-out forwards';
                    entry.target.querySelector('p').style.animation = 'fadeInUp 0.8s ease-out 0.3s forwards';
                    entry.target.querySelector('.cta-button').style.animation = 'pulse 1.5s ease-in-out 0.6s infinite alternate';
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(ctaSection);
    }

    // Fonction pour animer le texte ligne par ligne
    function animateText(element, delayFactor = 0.3) {
        const paragraphs = element.querySelectorAll('p');
        paragraphs.forEach((p, pIndex) => {
            const text = p.textContent;
            p.textContent = '';
            
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    p.textContent += text[i];
                }, (i + (pIndex * text.length * delayFactor)) * 20);
            }
        });
    }
});

// Ajout des keyframes dynamiquement
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(46, 125, 50, 0.4);
        }
        100% {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(46, 125, 50, 0.6);
        }
    }
`;
document.head.appendChild(style);