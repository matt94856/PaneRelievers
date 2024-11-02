// Smooth Scroll Functionality for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Title Slide-In Effect
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.slide-in-title');
    if (title) {
        title.classList.add('slide-in'); // Add class to trigger slide-in effect
    }
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
        transition: transform 0.4s ease, opacity 0.4s ease;
    `;
    document.body.appendChild(button);

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            button.style.display = 'block';
            button.style.opacity = '1'; // Make the button visible
            button.style.transform = 'scale(1)'; // Reset scale
        } else {
            button.style.opacity = '0'; // Fade out
            button.style.transform = 'scale(0.8)'; // Scale down
            setTimeout(() => {
                if (button.style.opacity === '0') {
                    button.style.display = 'none'; // Hide button after fade out
                }
            }, 400); // Match this to the transition duration
        }
    });

    // Scroll to top functionality with easing animation
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return button;
};

const backToTopButton = createBackToTopButton();

// Image Carousel with Smooth Transitions and Auto-Slide (if applicable)
// Uncomment this section if you have an image carousel to implement
/*
const createImageCarousel = () => {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    // Function to show current image with fade-in effect
    const showImage = (index) => {
        carouselImages.forEach((img, i) => {
            img.style.opacity = (i === index) ? '1' : '0';
            img.style.transition = 'opacity 1s ease, transform 1s ease';
            img.style.transform = (i === index) ? 'scale(1)' : 'scale(0.95)';
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
*/

// Animated Element Appearance on Scroll
const scrollRevealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;
    scrollRevealElements.forEach((el) => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < viewportHeight * 0.85) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
};

// Style elements for initial hidden position
scrollRevealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px) scale(0.9)';
});

// Attach scroll listener for reveal on scroll
window.addEventListener('scroll', revealOnScroll);

// Initial call to reveal elements in case they are already in view
revealOnScroll();
