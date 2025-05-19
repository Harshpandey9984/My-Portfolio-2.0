/**
 * Responsive image loading and optimization script
 * - Implements lazy loading for images
 * - Handles responsive image swapping based on screen size
 * - Implements blur-up loading technique
 * - Handles image loading failures gracefully
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize lazy loading for images
    initLazyLoading();
    
    // Set up responsive image sources
    setupResponsiveImages();
    
    // Add window resize handler for responsive images
    window.addEventListener('resize', handleWindowResize);
    
    // Handle orientation change for mobile devices
    window.addEventListener('orientationchange', handleOrientationChange);
});

// Initialize lazy loading for images
function initLazyLoading() {
    // Check if Intersection Observer API is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Load image when it enters the viewport
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Handle data-src attribute if it exists
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        
                        // Optional: Handle srcset for responsive images
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        
                        // Add load event to handle transitions
                        img.onload = function() {
                            img.classList.add('loaded');
                            
                            // Remove the placeholder if it exists
                            const placeholder = img.previousElementSibling;
                            if (placeholder && placeholder.classList.contains('img-placeholder')) {
                                placeholder.style.opacity = '0';
                                setTimeout(() => placeholder.remove(), 300);
                            }
                        };
                        
                        // Handle image loading errors
                        img.onerror = function() {
                            // Set a fallback image or add error class
                            img.src = 'assets/images/image-placeholder.png';
                            img.classList.add('img-error');
                        };
                    }
                    
                    // Stop observing the image once loaded
                    observer.unobserve(img);
                }
            });
        }, {
            // Root margin adds a buffer around the viewport
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            // Create placeholder element
            const parent = img.parentElement;
            const placeholder = document.createElement('div');
            placeholder.className = 'img-placeholder';
            placeholder.innerHTML = '<i class="fas fa-image"></i>';
            
            // Add placeholder before the image
            if (parent) {
                parent.insertBefore(placeholder, img);
            }
            
            // Begin observing the image
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        loadImagesImmediately();
    }
}

// Fallback function for browsers without Intersection Observer support
function loadImagesImmediately() {
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
        }
        img.classList.add('loaded');
    });
}

// Set up responsive image sources based on screen size
function setupResponsiveImages() {
    const screenWidth = window.innerWidth;
    
    document.querySelectorAll('img[data-mobile-src]').forEach(img => {
        // Use mobile image source if screen width is less than 768px
        if (screenWidth < 768) {
            if (img.src !== img.dataset.mobileSrc) {
                img.src = img.dataset.mobileSrc;
            }
        } else {
            // Use default (desktop) image source if screen width is >= 768px
            const desktopSrc = img.dataset.src || img.dataset.desktopSrc;
            if (desktopSrc && img.src !== desktopSrc) {
                img.src = desktopSrc;
            }
        }
    });
}

// Handle window resize for responsive images
function handleWindowResize() {
    // Use debounce to prevent excessive function calls
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        setupResponsiveImages();
    }, 250);
}

// Handle orientation change on mobile devices
function handleOrientationChange() {
    // Reset and update responsive images on orientation change
    setupResponsiveImages();
}

// Function to add responsive attributes to images
function makeImagesResponsive() {
    const projectImages = document.querySelectorAll('.flip-card-image img, .modal-image img');
    
    projectImages.forEach(img => {
        // Skip already processed images
        if (img.hasAttribute('data-responsive')) return;
        
        const src = img.getAttribute('src');
        
        // Mark as responsive
        img.setAttribute('data-responsive', 'true');
        
        // Add loading="lazy" attribute for native lazy loading
        img.setAttribute('loading', 'lazy');
        
        // Set data attributes for better SEO
        img.setAttribute('data-src', src);
        
        // Generate srcset if needed
        if (!img.hasAttribute('srcset') && src && !src.includes('placeholder')) {
            // Add srcset for responsive loading (example with image width pattern)
            // This assumes you have images in different sizes with naming pattern: image-500.jpg, image-800.jpg, etc.
            const baseUrl = src.replace(/\.(jpg|jpeg|png|webp)$/, '');
            const ext = src.match(/\.(jpg|jpeg|png|webp)$/)[0];
            
            const srcset = `
                ${baseUrl}-500${ext} 500w,
                ${baseUrl}-800${ext} 800w,
                ${baseUrl}-1200${ext} 1200w
            `;
            
            img.setAttribute('srcset', srcset);
            img.setAttribute('sizes', '(max-width: 576px) 500px, (max-width: 992px) 800px, 1200px');
        }
    });
}

// Add event listener for DOM content loaded to initialize responsive image functions
window.addEventListener('load', makeImagesResponsive);