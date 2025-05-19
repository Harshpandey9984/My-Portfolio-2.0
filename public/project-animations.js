// Project section animations and enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize only once
    if (window.projectAnimationsInitialized) return;
    window.projectAnimationsInitialized = true;
    
    // Wait for GSAP to be loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Create staggered entrance animation for project section title
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            const projectTitle = projectsSection.querySelector('.section-title');
            const filterContainer = projectsSection.querySelector('.filter-container');
            
            // Title animation
            if (projectTitle) {
                // Split title text into individual characters for animation
                const titleText = projectTitle.textContent;
                projectTitle.innerHTML = '';
                
                // Create wrapper for animation
                const titleWrapper = document.createElement('div');
                titleWrapper.classList.add('title-animation-wrapper');
                
                // Add each character in a span
                [...titleText].forEach(char => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char; // Replace space with non-breaking space
                    span.style.display = 'inline-block';
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(20px)';
                    titleWrapper.appendChild(span);
                });
                
                projectTitle.appendChild(titleWrapper);
                
                // Create title animation
                gsap.to(titleWrapper.children, {
                    scrollTrigger: {
                        trigger: titleWrapper,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'back.out(1.5)'
                });
            }
            
            // Filter buttons animation
            if (filterContainer) {
                gsap.from(filterContainer, {
                    scrollTrigger: {
                        trigger: filterContainer,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.7,
                    ease: 'power2.out',
                    delay: 0.3
                });
                
                // Add individual button animations
                const buttons = filterContainer.querySelectorAll('.filter-btn');
                gsap.from(buttons, {
                    scrollTrigger: {
                        trigger: filterContainer,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 15,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'back.out(1.2)',
                    delay: 0.5
                });
            }
        }
        
        // Add scroll indicator to project section
        const addScrollIndicator = () => {
            const projectsFlipGrid = document.querySelector('.projects-flip-grid');
            if (!projectsFlipGrid) return;
            
            // Create scroll indicator
            const scrollIndicator = document.createElement('div');
            scrollIndicator.className = 'projects-scroll-indicator';
            scrollIndicator.innerHTML = '<div class="scroll-arrow"><i class="fas fa-chevron-down"></i></div><div class="scroll-text">Scroll to see more projects</div>';
            
            // Add to DOM after projects title
            const projectTitle = document.querySelector('#projects .section-title');
            if (projectTitle && window.innerWidth < 992) {
                projectTitle.parentNode.insertBefore(scrollIndicator, projectTitle.nextSibling);
                
                // Animate the scroll indicator
                const arrowAnimation = gsap.timeline({ repeat: -1 });
                arrowAnimation.to('.scroll-arrow', {
                    y: 10,
                    duration: 1,
                    ease: 'power1.inOut'
                });
                arrowAnimation.to('.scroll-arrow', {
                    y: 0,
                    duration: 1,
                    ease: 'power1.inOut'
                });
                
                // Hide indicator when scrolled
                ScrollTrigger.create({
                    trigger: projectsFlipGrid,
                    start: 'top 30%',
                    end: 'bottom 70%',
                    onEnter: () => {
                        gsap.to('.projects-scroll-indicator', {
                            opacity: 0,
                            y: -20,
                            duration: 0.5,
                            onComplete: () => {
                                scrollIndicator.style.display = 'none';
                            }
                        });
                    }
                });
            }
        };
        
        // Add the scroll indicator
        setTimeout(addScrollIndicator, 1500);
    }
});
