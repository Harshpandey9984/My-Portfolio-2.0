// 3D Name Animations
document.addEventListener('DOMContentLoaded', function() {
    initHero3DName();
    
    // Add mousemove effect for 3D rotation
    document.addEventListener('mousemove', function(e) {
        rotate3DName(e);
    });
    
    // Add device orientation support for mobile
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(e) {
            handleDeviceOrientation3D(e);
        });
    }
});

// Initialize the 3D name effect
function initHero3DName() {
    const nameContainer = document.querySelector('.hero-3d-name');
    if (!nameContainer) return;
    
    // GSAP animation for initial appearance
    if (typeof gsap !== 'undefined') {
        // Set initial state
        gsap.set(nameContainer, { 
            opacity: 0,
            y: 30
        });
        
        // Create animation timeline
        const tl = gsap.timeline({ delay: 0.8 });
        
        tl.to(nameContainer, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out"
        });
        
        // Add subtle continuous floating animation
        gsap.to(nameContainer, {
            y: '+=5',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// 3D rotation effect on mouse move
function rotate3DName(e) {
    const nameContainer = document.querySelector('.hero-3d-name');
    if (!nameContainer) return;
    
    const nameTitle = nameContainer.querySelector('h1');
    if (!nameTitle) return;
    
    // Calculate rotation based on mouse position
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Apply rotation with GSAP for smoother transitions
    if (typeof gsap !== 'undefined') {
        gsap.to(nameContainer, {
            rotationY: -xAxis,
            rotationX: yAxis,
            duration: 0.8,
            ease: "power1.out"
        });
    } else {
        // Fallback without GSAP
        nameContainer.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    }
}

// Handle device orientation for mobile devices
function handleDeviceOrientation3D(e) {
    if (!e.beta || !e.gamma) return;
    
    const nameContainer = document.querySelector('.hero-3d-name');
    if (!nameContainer) return;
    
    // Convert orientation data to rotation angles
    // Beta is front-to-back tilt in degrees, where front is positive
    // Gamma is left-to-right tilt in degrees, where right is positive
    const xAxis = (e.gamma / 3); // Divide by 3 to reduce sensitivity
    const yAxis = (e.beta / 3); // Divide by 3 to reduce sensitivity
    
    // Apply rotation with GSAP for smoother transitions
    if (typeof gsap !== 'undefined') {
        gsap.to(nameContainer, {
            rotationY: xAxis,
            rotationX: -yAxis,
            duration: 0.5,
            ease: "power1.out"
        });
    } else {
        // Fallback without GSAP
        nameContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    }
}
