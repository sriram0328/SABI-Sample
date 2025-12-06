// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    // Toggle menu visibility with animation
    menu.classList.toggle('active');
    hamburger.classList.toggle('cross');
    
    // Prevent body scroll when menu is open
    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
        hamburger.innerHTML = '&#10005;';
        // Animate menu items
        menu.querySelectorAll('.menu-item').forEach((item, index) => {
            item.style.animationDelay = `${0.1 * index}s`;
        });
    } else {
        body.style.overflow = '';
        hamburger.innerHTML = '&#9776;';
    }

    // Close menu when clicking outside
    if (menu.classList.contains('active')) {
        const closeOnClick = (e) => {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('active');
                hamburger.classList.remove('cross');
                body.style.overflow = '';
                hamburger.innerHTML = '&#9776;';
                document.removeEventListener('click', closeOnClick);
            }
        };
        setTimeout(() => {
            document.addEventListener('click', closeOnClick);
        }, 100);
    }
}

// Add smooth scroll for menu items
document.addEventListener('DOMContentLoaded', function() {
    // Close menu when clicking menu items
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    
    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove('cross');
            document.body.style.overflow = '';
            hamburger.innerHTML = '&#9776;';
        });
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize navbar state on page load
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    }
});