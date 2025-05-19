/**
 * Responsive enhancements for portfolio
 * - Optimizes image loading based on screen size
 * - Improves touch interactions for mobile devices
 * - Adapts animations for different screen sizes
 * - Enhances project filtering for mobile
 */

document.addEventListener('DOMContentLoaded', function() {
    // Detect device type for touch optimizations
    detectTouchDevice();
    
    // Optimize flip cards for mobile
    optimizeFlipCards();
    
    // Enhance mobile filter buttons
    enhanceMobileFilters();
    
    // Image lazy loading based on screen size
    setupLazyLoading();
    
    // Fix 100vh issue on mobile browsers
    fixMobileVhUnit();
    
    // Optimize animations for mobile
    optimizeMobileAnimations();
    
    // Window resize handling
    handleWindowResize();
});

// Detect and apply styles for touch devices
function detectTouchDevice() {
    const isTouchDevice = ('ontouchstart' in window) || 
                         (navigator.maxTouchPoints > 0) ||
                         (navigator.msMaxTouchPoints > 0);
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        
        // Add touch indicators to interactive elements
        document.querySelectorAll('.flip-card-container').forEach(card => {
            const indicator = document.createElement('div');
            indicator.className = 'touch-indicator';
            indicator.innerHTML = '<i class="fas fa-hand-pointer"></i>';
            card.appendChild(indicator);
        });
        
        // Hide cursor styles on touch devices
        document.querySelectorAll('.cursor-dot, .cursor-outline').forEach(el => {
            el.style.display = 'none';
        });
    }
}

// Optimize flip cards for mobile interaction
function optimizeFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card-container');
    
    flipCards.forEach(card => {
        // For touch devices, convert hover to tap
        if (document.body.classList.contains('touch-device')) {
            const flipCardFront = card.querySelector('.flip-card-front');
            if (flipCardFront) {
                flipCardFront.addEventListener('click', function(e) {
                    const flipCard = this.closest('.flip-card');
                    
                    // Toggle flip state
                    if (flipCard) {
                        flipCard.classList.toggle('manual-flip');
                        
                        // Hide touch indicator after first tap
                        const indicator = card.querySelector('.touch-indicator');
                        if (indicator) {
                            indicator.classList.add('touched');
                        }
                    }
                    
                    e.preventDefault();
                });
            }
            
            // Add ability to flip back on mobile
            const flipCardBack = card.querySelector('.flip-card-back');
            if (flipCardBack) {
                // Add a back button for mobile
                const backBtn = document.createElement('button');
                backBtn.className = 'flip-back-btn';
                backBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Back';
                flipCardBack.prepend(backBtn);
                
                backBtn.addEventListener('click', function(e) {
                    const flipCard = this.closest('.flip-card');
                    if (flipCard) {
                        flipCard.classList.remove('manual-flip');
                    }
                    e.preventDefault();
                    e.stopPropagation();
                });
            }
        }
    });
}

// Enhance filtering buttons for mobile
function enhanceMobileFilters() {
    const filterContainer = document.querySelector('.filter-container');
    if (!filterContainer) return;
    
    // Add scroll indicators for mobile
    if (window.innerWidth <= 576) {
        // Add scroll hint for filter buttons
        const scrollHint = document.createElement('div');
        scrollHint.className = 'filter-scroll-hint';
        scrollHint.innerHTML = '<i class="fas fa-chevron-right"></i>';
        filterContainer.appendChild(scrollHint);
        
        // Fade out scroll hint after scrolling
        filterContainer.addEventListener('scroll', function() {
            if (this.scrollLeft > 20) {
                scrollHint.classList.add('fade-out');
            } else {
                scrollHint.classList.remove('fade-out');
            }
        });
    }
}

// Setup lazy loading for images based on screen size
function setupLazyLoading() {
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src') || img.getAttribute('src');
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Fix 100vh issue on mobile browsers
function fixMobileVhUnit() {
    // Set a CSS variable for the actual viewport height
    const setVhVariable = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Set on initial load
    setVhVariable();
    
    // Reset on resize and orientation change
    window.addEventListener('resize', setVhVariable);
    window.addEventListener('orientationchange', setVhVariable);
}

// Optimize animations for mobile devices
function optimizeMobileAnimations() {
    if (window.innerWidth <= 768) {
        // Reduce or disable heavy animations on mobile
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.setAttribute('data-aos-once', 'true'); // Only animate once
            el.setAttribute('data-aos-duration', '800'); // Shorter duration
        });
        
        // Reduce particle count for better performance
        const particles = document.querySelectorAll('.particle');
        if (particles.length > 3) {
            for (let i = 3; i < particles.length; i++) {
                particles[i].style.display = 'none';
            }
        }
    }
}

// Handle window resizing
function handleWindowResize() {
    let resizeTimer;
    const handleResize = () => {
        // Avoid excessive function calls during resize
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            optimizeFlipCards();
            enhanceMobileFilters();
            optimizeMobileAnimations();
        }, 250);
    };
    
    window.addEventListener('resize', handleResize);
}