/**
 * This script ensures the flip card animations work correctly
 * It's added as a direct injected script at the end of the body
 */
document.addEventListener("DOMContentLoaded", function() {
    // Check if it's the first time loading the script to avoid duplication
    if (window.flipCardsFixed) return;
    window.flipCardsFixed = true;
    
    // Fix for flip card animations
    setTimeout(function() {
        // Force show all flip cards
        document.querySelectorAll('.flip-card-reveal').forEach(function(card) {
            card.classList.add('show');
        });
        
        // Make links extra visible by adding attributes
        document.querySelectorAll('.flip-card-links a').forEach(function(link) {
            link.setAttribute('style', 'display: inline-flex !important; visibility: visible !important; opacity: 1 !important; z-index: 999 !important;');
        });
        
        // Initialize flip card functionality for all devices
        document.querySelectorAll('.flip-card-container').forEach(function(container) {
            const card = container.querySelector('.flip-card');
            
            // Create a manual flip trigger that's always available
            const flipTrigger = document.createElement('button');
            flipTrigger.textContent = '';
            flipTrigger.className = 'flip-trigger';
            flipTrigger.setAttribute('aria-label', 'Flip card');
            flipTrigger.setAttribute('style', 'position: absolute; top: 10px; right: 10px; z-index: 20; background: rgba(138, 43, 226, 0.3); border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;');
            container.appendChild(flipTrigger);
            
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
                link.setAttribute('style', 'pointer-events: auto !important; position: relative !important; z-index: 100 !important; display: inline-flex !important;');
                
                link.addEventListener('click', function(e) {
                    // Stop event propagation to prevent card from flipping
                    e.stopPropagation();
                    
                    // Force the link to work even if JS issues occur
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('http')) {
                        if (link.getAttribute('target') === '_blank') {
                            window.open(href, '_blank');
                        } else {
                            window.location.href = href;
                        }
                    }
                });
            });
        });
    }, 500);
});
