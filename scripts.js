// Smooth Scroll Functionality for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back-to-Top Button with Beachy Style
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerText = '🏄'; // Beach-themed emoji for fun touch
    button.id = 'backToTop';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background-color: #008cba; /* Ocean blue */
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        display: none; /* Initially hidden */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Shadow for depth */
    `;
    document.body.appendChild(button);

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        button.style.display = (window.scrollY > 100) ? 'block' : 'none';
    });

    // Scroll to top functionality
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return button;
};
const backToTopButton = createBackToTopButton();

// Image Carousel for Window Cleaning Before and After Photos
const createImageCarousel = () => {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    const showImage = (index) => {
        carouselImages.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    };

    // Auto change image every 5 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }, 5000);

    // Initialize carousel
    showImage(currentImageIndex);
};

createImageCarousel();
