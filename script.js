
// Mobile menu toggle
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    menuButton.setAttribute('aria-expanded', isExpanded);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuButton.setAttribute('aria-expanded', false);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = items.length - 1;
        } else if (index >= items.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function showNextSlide() {
        showSlide(currentIndex + 1);
    }

    function showPrevSlide() {
        showSlide(currentIndex - 1);
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    // Auto-play functionality
    let intervalId = setInterval(showNextSlide, 5000);

    // Pause auto-play when hovering over the carousel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Resume auto-play when mouse leaves the carousel
    carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(showNextSlide, 5000);
    });

    // Show the first slide initially
    showSlide(0);
});





