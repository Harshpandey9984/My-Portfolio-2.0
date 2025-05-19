/* filepath: c:\My portfolio 4.0\particle-animation.js */
// Interactive particle system for hero section

document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Add pattern background
    const bgPattern = document.createElement('div');
    bgPattern.className = 'bg-pattern';
    hero.appendChild(bgPattern);
    
    // Add floating particles
    for (let i = 1; i <= 5; i++) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${i}`;
        hero.appendChild(particle);
    }
    
    // Create interactive particles that follow mouse movement
    let numParticles = window.innerWidth > 768 ? 20 : 10;
    let interactiveParticles = [];
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'interactive-particle';
        
        // Random starting positions
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity and size for variety
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        hero.appendChild(particle);
        interactiveParticles.push(particle);
    }
    
    // Make particles interactive
    document.addEventListener('mousemove', function(event) {
        // Only apply effects if user is hovering over hero section
        if (event.clientY > hero.offsetHeight) return;
        
        const x = event.clientX;
        const y = event.clientY;
        
        interactiveParticles.forEach((particle, index) => {
            // Calculate distance from mouse to particle
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            // Calculate angle and distance
            const dx = particleX - x;
            const dy = particleY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Move particles away from mouse with varying strengths and delays
            if (distance < 100) {
                const translateX = (dx / distance) * (100 - distance) * 0.5;
                const translateY = (dy / distance) * (100 - distance) * 0.5;
                
                // Add slight delay for each particle for more natural movement
                setTimeout(() => {
                    particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
                }, index * 5);
            } else {
                // Return to original position if not affected by mouse
                setTimeout(() => {
                    particle.style.transform = 'translate(0, 0)';
                }, index * 5);
            }
        });
    });
    
    // Add pulsing glow effect to the orb
    const glowOrb = document.querySelector('.glow-orb');
    if (glowOrb) {
        // Random subtle movements
        setInterval(() => {
            const xPos = 50 + (Math.random() * 4 - 2); // 48-52%
            const yPos = 50 + (Math.random() * 4 - 2); // 48-52%
            glowOrb.style.left = `${xPos}%`;
            glowOrb.style.top = `${yPos}%`;
        }, 2000);
    }
    
    // Adjust for mobile devices
    function handleResize() {
        if (window.innerWidth <= 768) {
            // Simplify animations on mobile
            interactiveParticles.forEach(p => {
                p.style.display = 'none';
            });
        } else {
            // Restore particles on desktop
            interactiveParticles.forEach(p => {
                p.style.display = 'block';
            });
        }
    }
    
    // Initial check
    handleResize();
    
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
});
