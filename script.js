// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP animations for hero text
gsap.from(".hero h1", {duration: 1, y: -50, opacity: 0, ease: "power3.out", delay: 0.5});
gsap.from(".hero p", {duration: 1, y: -20, opacity: 0, ease: "power3.out", delay: 1});
gsap.from(".cta-button", {duration: 1, y: 20, opacity: 0, ease: "power3.out", delay: 1.5});

// Parallax effect on about image
gsap.to(".parallax-image", {
    scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    y: -50,
});

// Animation for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

// Menu toggle for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
