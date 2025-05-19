// Mobile touch functionality for flip cards
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if not already done
    if (window.mobileFlipInitialized) return;
    window.mobileFlipInitialized = true;
    
    // Detect if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 || 
                         navigator.msMaxTouchPoints > 0;
    
    // If it's a touch device, add special touch handling
    if (isTouchDevice) {
        const flipCards = document.querySelectorAll('.flip-card');
        const flipCardContainers = document.querySelectorAll('.flip-card-container');
        
        // Add a visual indicator for touch interaction
        flipCardContainers.forEach(container => {
            const touchIndicator = document.createElement('div');
            touchIndicator.className = 'touch-indicator';
            touchIndicator.innerHTML = '<i class="fas fa-hand-pointer"></i>';
            container.appendChild(touchIndicator);
            
            // Listen for touch events
            container.addEventListener('click', function(e) {
                // Find the .flip-card element in this container
                const flipCard = this.querySelector('.flip-card');
                if (!flipCard) return;
                
                // Toggle the flip state manually
                flipCard.classList.toggle('manual-flip');
                
                // Hide the touch indicator when card is flipped
                const touchIndicator = this.querySelector('.touch-indicator');
                if (touchIndicator) {
                    if (flipCard.classList.contains('manual-flip')) {
                        touchIndicator.classList.add('touched');
                    } else {
                        touchIndicator.classList.remove('touched');
                    }
                }
            });
        });
        
        // Add identifiers to the document body
        document.body.classList.add('touch-device');
    }
});
