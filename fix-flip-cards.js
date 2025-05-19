/**
 * This script ensures the flip card animations work correctly
 * It's added as a direct injected script at the end of the body
 * This is the STRONGER VERSION for Vercel deployment
 */
document.addEventListener("DOMContentLoaded", function() {
    // Check if it's the first time loading the script to avoid duplication
    if (window.flipCardsFixed) return;
    window.flipCardsFixed = true;
    
    // Immediate fixes for flip cards
    document.querySelectorAll('.flip-card-reveal').forEach(function(card) {
        card.classList.add('show');
    });
    
    // Fix for flip card animations with multiple attempts
    function attemptFlipCardFixes() {
        console.log("Applying flip card fixes...");
        
        // Force show all flip cards
        document.querySelectorAll('.flip-card-reveal').forEach(function(card) {
            card.classList.add('show');
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.visibility = 'visible';
            card.style.display = 'block';
        });
        
        // Make links extra visible by adding attributes
        document.querySelectorAll('.flip-card-links a').forEach(function(link) {
            link.style.display = 'inline-flex';
            link.style.visibility = 'visible';
            link.style.opacity = '1';
            link.style.zIndex = '999';
            link.style.position = 'relative';
            link.style.pointerEvents = 'auto';
        });
        
        // Force the back of cards to be visible in light theme
        if (document.documentElement.classList.contains('light-theme')) {
            document.querySelectorAll('.flip-card-back-content, .flip-card-back ul li').forEach(function(element) {
                element.style.color = '#333';
                element.style.opacity = '0.9';
            });
        }
        
        // Initialize flip card functionality for all devices
        document.querySelectorAll('.flip-card-container').forEach(function(container) {
            const card = container.querySelector('.flip-card');
            
            // Create a manual flip trigger that's always available
            if (!container.querySelector('.flip-trigger')) {
                const flipTrigger = document.createElement('button');
                flipTrigger.textContent = '';
                flipTrigger.className = 'flip-trigger';
                flipTrigger.setAttribute('aria-label', 'Flip card');
                flipTrigger.style.position = 'absolute';
                flipTrigger.style.top = '10px';
                flipTrigger.style.right = '10px';
                flipTrigger.style.zIndex = '20';
                flipTrigger.style.background = 'rgba(138, 43, 226, 0.3)';
                flipTrigger.style.border = 'none';
                flipTrigger.style.width = '30px';
                flipTrigger.style.height = '30px';
                flipTrigger.style.borderRadius = '50%';
                flipTrigger.style.cursor = 'pointer';
                flipTrigger.style.display = 'flex';
                flipTrigger.style.alignItems = 'center';
                flipTrigger.style.justifyContent = 'center';
                container.appendChild(flipTrigger);
                
                flipTrigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    card.classList.toggle('manual-flip');
                });
            }
            
            // Add click listener for all devices
            container.addEventListener('click', function(e) {
                // Only toggle the flip if we're not clicking on a link
                if (!e.target.closest('a')) {
                    e.preventDefault();
                    card.classList.toggle('manual-flip');
                }
            });
            
            // Make sure GitHub links work properly with enhanced protection
            const links = container.querySelectorAll('a');
            links.forEach(function(link) {
                // Add additional styles to ensure visibility
                link.style.pointerEvents = 'auto';
                link.style.position = 'relative';
                link.style.zIndex = '1000';
                link.style.display = 'inline-flex';
                
                // Remove any existing event listeners
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                newLink.addEventListener('click', function(e) {
                    // Stop event propagation to prevent card from flipping
                    e.stopPropagation();
                    e.preventDefault();
                    
                    // Force the link to work even if JS issues occur
                    const href = newLink.getAttribute('href');
                    console.log("Link clicked:", href);
                    
                    if (href && href.startsWith('http')) {
                        if (newLink.getAttribute('target') === '_blank') {
                            window.open(href, '_blank');
                        } else {
                            window.location.href = href;
                        }
                    }
                    
                    return false;
                });
            });
        });
    }
    
    // Apply fixes immediately
    attemptFlipCardFixes();
    
    // And also after a delay to ensure it works
    setTimeout(attemptFlipCardFixes, 500);
    setTimeout(attemptFlipCardFixes, 1000);
    setTimeout(attemptFlipCardFixes, 2000);
    
    // Watch for theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
                attemptFlipCardFixes();
            }
        });
    });
    
    observer.observe(document.documentElement, {
        attributes: true
    });
});
