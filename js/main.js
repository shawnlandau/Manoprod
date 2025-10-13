// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link:not(.btn-primary)');
    
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            navLinks.style.display = 'flex';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            navLinks.style.display = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 968) {
                navLinks.classList.remove('active');
                navLinks.style.display = 'none';
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Initialize Calendly widget
window.addEventListener('load', () => {
    const calendlyWidget = document.querySelector('.calendly-inline-widget');
    if (calendlyWidget) {
        // The Calendly widget will auto-initialize from the data-url attribute
        console.log('Calendly widget ready');
    }
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about, .pricing, .booking');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Handle logo error - create SVG fallback if image doesn't load
document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.getElementById('logo-img');
    
    logoImg.addEventListener('error', function() {
        // Create SVG baseball icon as fallback
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "50");
        svg.setAttribute("height", "50");
        svg.setAttribute("viewBox", "0 0 100 100");
        
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "45");
        circle.setAttribute("fill", "#c41e3a");
        circle.setAttribute("stroke", "#fff");
        circle.setAttribute("stroke-width", "3");
        
        // Add baseball stitching
        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("d", "M30 20 Q50 30 70 20");
        path1.setAttribute("stroke", "#fff");
        path1.setAttribute("stroke-width", "2");
        path1.setAttribute("fill", "none");
        
        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("d", "M30 80 Q50 70 70 80");
        path2.setAttribute("stroke", "#fff");
        path2.setAttribute("stroke-width", "2");
        path2.setAttribute("fill", "none");
        
        svg.appendChild(circle);
        svg.appendChild(path1);
        svg.appendChild(path2);
        
        this.parentNode.replaceChild(svg, this);
    });
});
