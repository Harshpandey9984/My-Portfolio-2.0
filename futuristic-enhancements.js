// 🚀 FUTURISTIC PORTFOLIO JAVASCRIPT ENHANCEMENTS 🚀

class FuturisticPortfolio {
    constructor() {
        this.cursor = {
            dot: null,
            outline: null,
            delay: 8
        };
        this.mousePosition = { x: 0, y: 0 };
        this.cursorPosition = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.setupCustomCursor();
        this.setupTypewriter();
        this.setupScrollAnimations();
        this.setupParticleSystem();
        this.setupInteractiveElements();
        this.setupGlitchEffects();
        this.setupHoverEffects();
        this.setupSmoothScrolling();
    }

    // ===== CUSTOM CURSOR SYSTEM =====
    setupCustomCursor() {
        this.cursor.dot = document.querySelector('.cursor-dot');
        this.cursor.outline = document.querySelector('.cursor-outline');
        
        if (!this.cursor.dot || !this.cursor.outline) return;

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });

        // Animate cursor
        this.animateCursor();

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-bar');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });

        // Cursor click effect
        document.addEventListener('mousedown', () => {
            document.body.classList.add('cursor-click');
        });
        document.addEventListener('mouseup', () => {
            document.body.classList.remove('cursor-click');
        });
    }

    animateCursor() {
        // Smooth cursor following
        this.cursorPosition.x += (this.mousePosition.x - this.cursorPosition.x) / this.cursor.delay;
        this.cursorPosition.y += (this.mousePosition.y - this.cursorPosition.y) / this.cursor.delay;

        if (this.cursor.dot) {
            this.cursor.dot.style.left = this.cursorPosition.x + 'px';
            this.cursor.dot.style.top = this.cursorPosition.y + 'px';
        }

        if (this.cursor.outline) {
            this.cursor.outline.style.left = (this.cursorPosition.x - 20) + 'px';
            this.cursor.outline.style.top = (this.cursorPosition.y - 20) + 'px';
        }

        requestAnimationFrame(() => this.animateCursor());
    }

    // ===== TYPEWRITER EFFECT =====
    setupTypewriter() {
        const typedTextSpan = document.querySelector('.typed-text');
        if (!typedTextSpan) return;

        const textArray = [
            'Full-Stack Developer',
            'Blockchain Enthusiast',
            'Creative Coder',
            'Problem Solver',
            'Tech Innovator'
        ];
        
        let textArrayIndex = 0;
        let charIndex = 0;
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;

        const type = () => {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        };

        const erase = () => {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        };

        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }

    // ===== SCROLL ANIMATIONS =====
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.fade-up, .slide-left, .slide-right');
        animateElements.forEach(el => observer.observe(el));

        // Animated skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const percentage = progress.getAttribute('data-skill');
                    progress.style.width = percentage + '%';
                }
            });
        }, observerOptions);

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // ===== PARTICLE SYSTEM =====
    setupParticleSystem() {
        // Create particle container if it doesn't exist
        let particleContainer = document.querySelector('.particle-container');
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.className = 'particle-container';
            document.body.appendChild(particleContainer);
        }

        // Generate particles
        for (let i = 0; i < 15; i++) {
            this.createParticle(particleContainer);
        }

        // Continuous particle creation
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.createParticle(particleContainer);
            }
        }, 2000);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 8 + 8;
        const delay = Math.random() * 2;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;

        container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + delay) * 1000);
    }

    // ===== INTERACTIVE ELEMENTS =====
    setupInteractiveElements() {
        // Floating tech icons
        this.createFloatingIcons();

        // Interactive project cards
        this.setupProjectCards();

        // Enhanced form interactions
        this.setupContactForm();

        // Theme toggle enhancement
        this.enhanceThemeToggle();
    }

    createFloatingIcons() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const icons = ['fab fa-js', 'fab fa-react', 'fab fa-node-js', 'fab fa-ethereum', 'fas fa-code'];
        
        icons.forEach((iconClass, index) => {
            const icon = document.createElement('i');
            icon.className = `floating-tech-icon ${iconClass}`;
            heroSection.appendChild(icon);
        });
    }

    setupProjectCards() {
        const projectCards = document.querySelectorAll('.project-card, .flip-card');
        
        projectCards.forEach(card => {
            // Add glassmorphism class
            card.classList.add('glass-card');
            
            // Enhanced hover effect
            card.addEventListener('mouseenter', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });

            // Tilt effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'none';
            });
        });
    }

    setupContactForm() {
        const formControls = document.querySelectorAll('.form-control');
        
        formControls.forEach(input => {
            // Focus effects
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });

            // Typing effects
            input.addEventListener('input', () => {
                if (input.value) {
                    input.parentElement.classList.add('has-value');
                } else {
                    input.parentElement.classList.remove('has-value');
                }
            });
        });
    }

    enhanceThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        themeToggle.addEventListener('click', () => {
            // Add transition effect
            document.body.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                document.body.style.transition = '';
            }, 500);
        });
    }

    // ===== GLITCH EFFECTS =====
    setupGlitchEffects() {
        const glitchElements = document.querySelectorAll('.hero-3d-name h1');
        
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.triggerGlitch(element);
            });
        });
    }

    triggerGlitch(element) {
        const originalText = element.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let iterations = 0;

        const glitchInterval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');

            if (iterations >= originalText.length) {
                clearInterval(glitchInterval);
                element.textContent = originalText;
            }

            iterations += 1 / 3;
        }, 30);
    }

    // ===== HOVER EFFECTS =====
    setupHoverEffects() {
        // Button hover effects
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                this.createRipple(e, btn);
            });
        });

        // Skill bar hover effects
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            bar.addEventListener('mouseenter', () => {
                bar.style.transform = 'scaleX(1.02)';
            });
            bar.addEventListener('mouseleave', () => {
                bar.style.transform = 'scaleX(1)';
            });
        });
    }

    createRipple(event, element) {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = element.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        element.appendChild(circle);
    }

    // ===== SMOOTH SCROLLING =====
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===== KEYBOARD SHORTCUTS =====
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Only trigger if not typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch(e.key.toLowerCase()) {
                case 'p':
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 's':
                    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'c':
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'h':
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        });
    }
}

// ===== ADDITIONAL CSS FOR RIPPLE EFFECT =====
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Add ripple CSS to document
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// ===== INITIALIZE ON DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', () => {
    new FuturisticPortfolio();
    
    // Add loading animation
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 500);
        }, 1500);
    }

    // Add initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = throttle(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.parallax');
    
    parallax.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16);

window.addEventListener('scroll', handleScroll);

// ===== EXPORT FOR POTENTIAL MODULE USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FuturisticPortfolio;
}
