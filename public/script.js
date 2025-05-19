// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Handle preloader
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after content loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('fade-out');
        }, 500);
    });
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }
    
    // Page transitions
    const pageTransition = document.querySelector('.page-transition');
    const navAnchorLinks = document.querySelectorAll('.nav-links a');
    
    // Handle navigation with page transition
    navAnchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only trigger for same-page navigation
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                // Trigger transition animation
                gsap.to(pageTransition, {
                    duration: 0.5,
                    y: '0%',
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // Scroll to section after transition
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 70,
                                behavior: 'instant'
                            });
                        }
                        
                        // Hide transition overlay
                        gsap.to(pageTransition, {
                            duration: 0.5,
                            y: '-100%',
                            delay: 0.3,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                // Reset overlay position
                                gsap.set(pageTransition, { y: '100%' });
                                
                                // Re-enable scrolling
                                document.body.style.overflow = 'auto';
                            }
                        });
                    }
                });
                
                // Close mobile menu if open
                const burger = document.querySelector('.burger');
                const nav = document.querySelector('.nav-links');
                
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    
                    document.querySelectorAll('.nav-links li').forEach(link => {
                        link.style.animation = '';
                    });
                }
            }
        });
    });
    
    // Custom cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Add some delay to cursor outline for smooth effect
        setTimeout(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        }, 80);
    });
    
    // Cursor hover effect
    const hoverElements = document.querySelectorAll('a, button, .btn, .skill-box, .project-card, .theme-toggle');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = 'rgba(138, 43, 226, 0.4)';
            cursorOutline.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'var(--primary)';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        enableLightMode();
    }
    
    themeToggle.addEventListener('click', () => {
        if (themeToggle.classList.contains('light-mode')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });
    
    function enableLightMode() {
        themeToggle.classList.add('light-mode');
        htmlElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
    
    function disableLightMode() {
        themeToggle.classList.remove('light-mode');
        htmlElement.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    }
    
    // Navigation scroll effect and back to top button
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        // Navbar effect
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navListLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function() {
        // Toggle nav menu
        nav.classList.toggle('nav-active');
        
        // Animate links
        navListLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `fadeInLinks 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking a link
    navListLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navListLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });    // Typing animation
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');
    
    const textArray = [
        "Front-End Developer",
        "Blockchain Enthusiast",
        "Web3 Developer",
        "Solana Ecosystem Developer",
        "Computer Science Student"
    ];
    
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 500);
        }
    }

    // Start typing effect if elements exist
    if (typedTextElement && cursorElement) {
        setTimeout(type, 1000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project section filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 100);
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 100);
                } else {
                    item.classList.remove('show');
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });    // Skills progress animation on scroll
    const skillsSection = document.querySelector('.skills');
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function showProgress() {
        if (skillsSection && isElementInViewport(skillsSection)) {
            skillLevels.forEach(skillLevel => {
                const width = skillLevel.style.width;
                skillLevel.style.width = "0%";
                setTimeout(() => {
                    skillLevel.style.width = width;
                }, 200);
            });
        }
    }

    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add scroll event for skill progress animation
    window.addEventListener('scroll', showProgress);

    // Initialize AOS animation library if it exists
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});

// GSAP Animations
window.addEventListener('DOMContentLoaded', function() {
    // Create a timeline for hero animations
    const heroTimeline = gsap.timeline({delay: 0.2});
    
    // Animate hero text with improved sequence
    heroTimeline.from('.hero-content h1', {duration: 1, y: 50, opacity: 0, ease: 'back.out(1.2)'})
                .from('.typed-container', {duration: 1, y: 30, opacity: 0, ease: 'power3.out'}, "-=0.5")
                .from('.hero-content p', {duration: 1, y: 20, opacity: 0, ease: 'power3.out'}, "-=0.7")
                .from('.hero-buttons a', {
                    duration: 0.8,
                    y: 20,
                    opacity: 0,
                    stagger: 0.2,
                    ease: 'power3.out'
                }, "-=0.5");
      // Register ScrollTrigger plugin
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    
        // Animate section titles with ScrollTrigger
        gsap.utils.toArray('.section-title').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
        
        // Animate timeline items
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%'
                },
                opacity: 0,
                x: i % 2 === 0 ? 50 : -50,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
        
        // Animate skill boxes
        gsap.utils.toArray('.skill-box').forEach((box, i) => {
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    start: 'top 90%'
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Animate filter buttons with a staggered appearance
        gsap.from('.filter-btn', {
            scrollTrigger: {
                trigger: '.filter-container',
                start: 'top 90%'
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out'
        });
    }
});

// Three.js animated background for hero section
window.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    // Create canvas
    const bgDiv = document.createElement('div');
    bgDiv.style.position = 'absolute';
    bgDiv.style.top = 0;
    bgDiv.style.left = 0;
    bgDiv.style.width = '100%';
    bgDiv.style.height = '100%';
    bgDiv.style.zIndex = 0;
    bgDiv.style.overflow = 'hidden';
    hero.style.position = 'relative';
    hero.prepend(bgDiv);

    // Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, hero.offsetWidth / hero.offsetHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(hero.offsetWidth, hero.offsetHeight);
    bgDiv.appendChild(renderer.domElement);

    // Responsive resize
    window.addEventListener('resize', () => {
        camera.aspect = hero.offsetWidth / hero.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(hero.offsetWidth, hero.offsetHeight);
    });

    // Create animated particles
    const particles = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    let i;
    for (i = 0; i < particles; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        // Purple gradient
        colors[i * 3] = 0.54 + Math.random() * 0.3; // R
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.2; // G
        colors[i * 3 + 2] = 0.7 + Math.random() * 0.3; // B
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 0.15, vertexColors: true, transparent: true, opacity: 0.7 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animate
    function animateParticles() {
        const pos = geometry.attributes.position.array;
        for (let j = 0; j < particles; j++) {
            pos[j * 3 + 1] += Math.sin(Date.now() * 0.001 + j) * 0.002;
            if (pos[j * 3 + 1] > 3) pos[j * 3 + 1] = -3;
        }
        geometry.attributes.position.needsUpdate = true;
    }

    function animate() {
        requestAnimationFrame(animate);
        animateParticles();
        points.rotation.y += 0.0015;
        renderer.render(scene, camera);
    }
    animate();
});

// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize filter buttons
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                  // Filter projects with improved animation
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || categories?.includes(filterValue)) {
                        // Show card with animation
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.classList.remove('fade-out');
                            gsap.to(card, {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.5,
                                ease: 'power2.out',
                                clearProps: 'scale'
                            });
                        }, 10);
                    } else {
                        // First fade out with animation, then hide
                        gsap.to(card, {
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                            duration: 0.4,
                            ease: 'power2.in',
                            onComplete: () => {
                                card.classList.add('fade-out');
                                card.classList.add('hidden');
                            }
                        });
                    }
                });
            });
        });
    }
    
    // Project modal functionality
    const viewProjectLinks = document.querySelectorAll('.view-project');
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    const projectModals = document.querySelectorAll('.project-modal');
    const modalContainer = document.querySelector('.modal-container');
    
    // Open modal when clicking on "View Details"
    viewProjectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectId = this.getAttribute('data-project');
            const targetModal = document.getElementById(`modal-${projectId}`);
            
            if (targetModal) {
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                targetModal.classList.add('active');
                
                // Add animation to modal content
                const modalContent = targetModal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.style.animation = 'modalFadeIn 0.5s ease forwards';
                }
            }
        });
    });
    
    // Close modal when clicking on close button
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.project-modal');
            
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });
    
    // Close modal when clicking outside of modal content
    projectModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            projectModals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto'; // Re-enable scrolling
                }
            });
        }
    });
});