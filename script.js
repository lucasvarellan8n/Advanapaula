document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // 2. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.style.opacity = '1';
                el.style.transform = 'translate(0, 0)';
            }
        });
    };

    // Initial styles for reveals
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'all 0.8s ease-out';
        if (el.classList.contains('reveal-up')) el.style.transform = 'translateY(50px)';
        if (el.classList.contains('reveal-left')) el.style.transform = 'translateX(-50px)';
        if (el.classList.contains('reveal-right')) el.style.transform = 'translateX(50px)';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 3. Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
        }
    });

    // 4. Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // If mobile menu is open, close it
                if (window.innerWidth <= 991) {
                    nav.classList.remove('active');
                    menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }

                window.scrollTo({
                    top: target.offsetTop - 70, // Header offset
                    behavior: 'smooth'
                });
            }
        });
    });
});
