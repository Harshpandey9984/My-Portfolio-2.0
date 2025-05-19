/**
 * This script ensures the flip card animations work correctly
 * It's added as a direct injected script at the end of the body
 */
document.addEventListener("DOMContentLoaded", function() {
    // Fix for flip card animations
    setTimeout(function() {
        // Force show all flip cards
        document.querySelectorAll('.flip-card-reveal').forEach(function(card) {
            card.classList.add('show');
        });
        
        // Initialize flip card functionality for touch devices
        document.querySelectorAll('.flip-card-container').forEach(function(container) {
            const card = container.querySelector('.flip-card');
            
            // Add click listener for mobile devices
            container.addEventListener('click', function(e) {
                // Only flip if we didn't click on a link
                if (!e.target.closest('a')) {
                    card.classList.toggle('manual-flip');
                }
            });
            
            // Make sure GitHub links work properly
            const links = container.querySelectorAll('a');
            links.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    // Stop event propagation to prevent card from flipping
                    e.stopPropagation();
                });
            });
        });
    }, 500);
});
