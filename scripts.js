// Smooth Scroll Functionality for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back-to-Top Button with Enhanced Style and Animations
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerText = '🏄'; // Beach-themed emoji for a fun touch
    button.id = 'backToTop';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 18px;
        border: none;
        border-radius: 50%;
        background-color: #008cba; /* Ocean blue */
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        display: none; /* Initially hidden */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Shadow for depth */
        transition: transform 0.3s ease, opacity 0.3s ease;
    `;
    document.body.appendChild(button);

    // Show or hide button based on scroll position with fade effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            button.style.display = 'block';
            button.style.opacity = '1';
            button.style.transform = 'scale(1)'; // Scale to full size when shown
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)'; // Slightly smaller and transparent when hidden
            setTimeout(() => (button.style.display = 'none'), 300); // Hide after fade
        }
    });

    // Scroll to top functionality with easing animation
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return button;
};

const backToTopButton = createBackToTopButton();

// Image Carousel with Smooth Transitions and Auto-Slide
const createImageCarousel = () => {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    // Function to show current image with fade-in effect
    const showImage = (index) => {
        carouselImages.forEach((img, i) => {
            img.style.opacity = (i === index) ? '1' : '0';
            img.style.transition = 'opacity 1s ease';
            img.style.position = (i === index) ? 'relative' : 'absolute';
        });
    };

    // Auto change image every 5 seconds with slide effect
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }, 5000);

    // Initialize carousel with first image visible
    showImage(currentImageIndex);
};

createImageCarousel();

// Animated Element Appearance on Scroll
const scrollRevealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;
    scrollRevealElements.forEach((el) => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < viewportHeight * 0.85) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
};

// Style elements for initial hidden position
scrollRevealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
});

// Attach scroll listener for reveal on scroll
window.addEventListener('scroll', revealOnScroll);

// Initial call to reveal elements in case they are already in view
revealOnScroll();
