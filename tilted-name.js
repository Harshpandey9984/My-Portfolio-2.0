// Tilted Name Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create and animate tilted names once DOM is fully loaded
    initTiltedNames();
    
    // Add scroll parallax effect
    window.addEventListener('scroll', function() {
        parallaxTiltedNames();
    });

    // Add mousemove effect for additional interactivity
    document.addEventListener('mousemove', function(e) {
        mouseTiltEffect(e);
    });
    
    // Add device orientation support for mobile
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(e) {
            handleDeviceOrientation(e);
        });
    }
});

// Initialize the tilted names
function initTiltedNames() {
    // Make sure we have the container
    const tiltedNameContainer = document.querySelector('.tilted-name-container');
    if (!tiltedNameContainer) return;
    
    // Get all tilted name elements
    const tiltedNames = document.querySelectorAll('.tilted-name');
    
    // Animation timeline with GSAP
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ delay: 0.8 }); // Delay a bit more for hero section to load first
        
        // Set initial positions for animation
        gsap.set(tiltedNames, { opacity: 0, scale: 0.8 });
        
        // Animate each tilted name with different timing and effects
        tl.to(tiltedNames[0], {
            opacity: 1,
            scale: 1.2,
            duration: 1.6, 
            ease: "elastic.out(1, 0.5)"
        });
        
        tl.to(tiltedNames[1], {
            opacity: 1,
            scale: 1.2,
            duration: 1.6,
            ease: "elastic.out(1, 0.5)"
        }, "-=1.3");
        
        tl.to(tiltedNames[2], {
            opacity: 1,
            scale: 1.2,
            duration: 1.6,
            ease: "elastic.out(1, 0.5)"
        }, "-=1.3");
    } else {
        // Fallback if GSAP isn't available
        tiltedNames.forEach((name, index) => {
            setTimeout(() => {
                name.style.opacity = 1;
            }, 800 + (index * 200));
        });
    }
}

// Parallax scroll effect
function parallaxTiltedNames() {
    const scrollY = window.scrollY;
    
    // Only apply parallax if scrollY is within hero section height
    if (scrollY < window.innerHeight) {
        const tiltedNames = document.querySelectorAll('.tilted-name');
        
        if (tiltedNames.length >= 3) {            // Apply different parallax rates to each tilted name
            // Use transform to maintain performance
            if (typeof gsap !== 'undefined') {
                gsap.to(tiltedNames[0], {
                    y: 25 * window.innerHeight/100 + (scrollY * 0.15),
                    rotate: -15 - (scrollY * 0.01),
                    duration: 0.5,
                    ease: "power1.out"
                });
                
                gsap.to(tiltedNames[1], {
                    y: (scrollY * -0.1),
                    rotate: 10 + (scrollY * 0.005),
                    duration: 0.5,
                    ease: "power1.out"
                });
                
                gsap.to(tiltedNames[2], {
                    y: -25 * window.innerHeight/100 - (scrollY * 0.18),
                    rotate: -5 - (scrollY * 0.008),
                    duration: 0.5,
                    ease: "power1.out"
                });
            }
        }
    }
}

// Mouse movement effect
function mouseTiltEffect(e) {
    const tiltedNames = document.querySelectorAll('.tilted-name');
    
    // Check if it's a touch device (mousemove doesn't behave well on touch)
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;
    
    // Calculate mouse position relative to center of screen
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mouseX - centerX) / 50; // Reduce effect intensity
    const moveY = (mouseY - centerY) / 50;
    
    // Apply subtle movement based on mouse position
    if (tiltedNames.length >= 3 && typeof gsap !== 'undefined') {
        gsap.to(tiltedNames[0], {
            rotationY: moveX * -0.1,
            rotationX: moveY * 0.1,
            x: moveX * 0.5,
            duration: 1,
            ease: "power1.out"
        });
        
        gsap.to(tiltedNames[1], {
            rotationY: moveX * 0.08,
            rotationX: moveY * -0.08,
            x: moveX * -0.3,
            duration: 1,
            ease: "power1.out"
        });
        
        gsap.to(tiltedNames[2], {
            rotationY: moveX * -0.06,
            rotationX: moveY * 0.06,
            x: moveX * 0.2,
            duration: 1, 
            ease: "power1.out"
        });
    }
}

// Handle device orientation for mobile devices
function handleDeviceOrientation(e) {
    if (!e.beta || !e.gamma) return;
    
    const tiltedNames = document.querySelectorAll('.tilted-name');
    if (tiltedNames.length < 3) return;
    
    // Get the device orientation values
    const tiltX = e.beta; // -180 to 180 (front/back tilt)
    const tiltY = e.gamma; // -90 to 90 (left/right tilt)
    
    // Scale down the values for subtle effect
    const moveX = tiltY * 0.1; 
    const moveY = tiltX * 0.1;
    
    if (typeof gsap !== 'undefined') {
        // Apply different effects to each name layer for depth
        gsap.to(tiltedNames[0], {
            x: moveX * 2,
            y: moveY * 1.5,
            rotationY: moveX * 0.2,
            rotationX: moveY * 0.2,
            duration: 0.5,
            ease: "power1.out"
        });
        
        gsap.to(tiltedNames[1], {
            x: moveX * -1.5,
            y: moveY * 1,
            rotationY: moveX * -0.15,
            rotationX: moveY * 0.15,
            duration: 0.5,
            ease: "power1.out"
        });
        
        gsap.to(tiltedNames[2], {
            x: moveX * 1,
            y: moveY * -1.2,
            rotationY: moveX * 0.1,
            rotationX: moveY * -0.1,
            duration: 0.5,
            ease: "power1.out"
        });
    }
}
