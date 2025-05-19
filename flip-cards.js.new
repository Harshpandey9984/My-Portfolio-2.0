// Flip Cards Animation and Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check if it's the first time loading the script to avoid duplication
    if (window.flipCardsInitialized) return;
    window.flipCardsInitialized = true;
    
    // Initialize flip cards with animation
    const flipCards = document.querySelectorAll('.flip-card-reveal');
    const flipCardContainers = document.querySelectorAll('.flip-card-container');
    
    // Initial animation for flip cards
    setTimeout(() => {
        flipCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, 100 * index);
        });
    }, 500);
    
    // Add touch/click functionality for mobile devices
    flipCardContainers.forEach(container => {
        const card = container.querySelector('.flip-card');
        
        // Detect touch devices
        const isTouchDevice = 'ontouchstart' in window || 
                              navigator.maxTouchPoints > 0 || 
                              navigator.msMaxTouchPoints > 0;
        
        if (isTouchDevice) {
            container.addEventListener('click', function(e) {
                e.preventDefault();
                card.classList.toggle('manual-flip');
            });
        }
    });
    
    // Update filter buttons to work with flip cards
    // First, check if script-new.js already handles this
    if (!window.filterButtonsInitialized) {
        // Mark as initialized to avoid duplication
        window.filterButtonsInitialized = true;
        
        const projectsSection = document.getElementById('projects');
        const existingFilterButtons = projectsSection ? projectsSection.querySelectorAll('.filter-btn') : [];
        const flipCardContainers = document.querySelectorAll('.flip-card-container');
        
        if (existingFilterButtons.length > 0 && flipCardContainers.length > 0) {
            // Check if we're the first script to handle filtering
            if (!existingFilterButtons[0].hasAttribute('data-filter-initialized')) {
                existingFilterButtons.forEach(button => {
                    // Mark button as having a filter handler
                    button.setAttribute('data-filter-initialized', 'true');
                    
                    // Add fresh event listener for flip card filtering
                    button.addEventListener('click', function() {
                        // Remove active class from all buttons
                        existingFilterButtons.forEach(btn => btn.classList.remove('active'));
                        
                        // Add active class to clicked button
                        this.classList.add('active');
                        
                        // Get filter value
                        const filterValue = this.getAttribute('data-filter');
                        
                        // Filter flip cards with animation
                        flipCardContainers.forEach(card => {
                            const categories = card.getAttribute('data-category');
                            
                            if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
                                // Show card with animation
                                gsap.to(card, {
                                    autoAlpha: 1,
                                    y: 0,
                                    scale: 1,
                                    duration: 0.5,
                                    ease: "back.out(1.2)",
                                    clearProps: "scale",
                                    onStart: () => {
                                        card.style.display = '';
                                    }
                                });
                            } else {
                                // First fade out with animation, then hide
                                gsap.to(card, {
                                    autoAlpha: 0,
                                    y: 20,
                                    scale: 0.95,
                                    duration: 0.4,
                                    ease: "power2.in",
                                    onComplete: () => {
                                        card.style.display = 'none';
                                    }
                                });
                            }
                        });
                    });
                });
                
                // Trigger the "all" filter on initial load
                const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
                if (allFilterBtn) {
                    // Simulate a click event after a short delay to make sure everything is rendered
                    setTimeout(() => {
                        allFilterBtn.click();
                    }, 100);
                }
            }
        }
    }
    
    // Add enhanced cursor interaction for flip cards
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorOutline && cursorDot) {
        // Only apply on non-touch devices
        if (window.matchMedia('(hover: hover)').matches) {
            flipCardContainers.forEach(container => {
                container.addEventListener('mouseenter', () => {
                    gsap.to(cursorOutline, {
                        scale: 1.5, 
                        borderColor: 'rgba(138, 43, 226, 0.4)', 
                        backgroundColor: 'rgba(138, 43, 226, 0.1)',
                        duration: 0.3
                    });
                    gsap.to(cursorDot, {
                        scale: 0.5,
                        backgroundColor: 'var(--primary)',
                        duration: 0.3
                    });
                });
                
                container.addEventListener('mouseleave', () => {
                    gsap.to(cursorOutline, {
                        scale: 1, 
                        borderColor: 'var(--primary)', 
                        backgroundColor: 'transparent',
                        duration: 0.3
                    });
                    gsap.to(cursorDot, {
                        scale: 1,
                        backgroundColor: 'var(--primary)',
                        duration: 0.3
                    });
                });
            });
        }
    }
    
    // Apply enhanced GSAP animations to flip cards
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Create a timeline for initial appearance
        const cardsTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-flip-grid',
                start: 'top 80%'
            }
        });
        
        // Add cards to timeline with staggered effect
        cardsTL.from('.flip-card-container', {
            opacity: 0,
            y: 50,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            onComplete: () => {
                // Apply a subtle hover animation to all cards
                gsap.to('.flip-card-container', {
                    y: -5,
                    duration: 1.5,
                    ease: 'power1.inOut',
                    repeat: 1,
                    yoyo: true,
                    stagger: 0.1
                });
            }
        });
        
        // Add hover animations for cards on desktop
        if (window.matchMedia('(hover: hover)').matches) {
            // Add 3D tilt effect to cards
            flipCardContainers.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const xPercent = (x / rect.width - 0.5) * 10; // -5 to 5 degrees
                    const yPercent = (y / rect.height - 0.5) * -10; // -5 to 5 degrees
                    
                    gsap.to(this.querySelector('.flip-card'), {
                        rotationY: xPercent,
                        rotationX: yPercent,
                        duration: 0.5,
                        ease: 'power1.out'
                    });
                });
                
                card.addEventListener('mouseleave', function() {
                    gsap.to(this.querySelector('.flip-card'), {
                        rotationY: 0,
                        rotationX: 0,
                        duration: 1,
                        ease: 'elastic.out(1, 0.5)'
                    });
                });
            });
        }
    }
});
