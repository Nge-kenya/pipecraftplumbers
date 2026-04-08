// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    
    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        
        // Simulate sending (in real site you would send to backend)
        alert(`Thank you, ${name}! 🎉\n\nYour message has been received.\n\nA PipeCraft technician will contact you within 60 minutes.`);
        
        // Reset form
        contactForm.reset();
    });
    
    console.log('%c✅ PipeCraft Co. website loaded successfully with Pacific Blue & Light water theme!', 'color:#0099CC; font-weight:bold;');
});
// Portfolio Lightbox
const lightbox = document.createElement('div');
lightbox.id = 'imageLightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img id="lightboxImage" src="" alt="">
`;
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});