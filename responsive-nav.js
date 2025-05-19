/**
 * Enhanced responsive navigation functionality
 * This script improves the mobile navigation experience with:
 * - Improved touch interactions
 * - Accessibility improvements
 * - Smooth transitions and animations
 * - Auto-closing menu when clicking outside
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navItems = document.querySelectorAll('.nav-links li a');
    
    // Function to enable slide-in mobile navigation
    function setupMobileNavigation() {
        if (!burger || !navLinks) return;
        
        // Toggle navigation visibility on burger click
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
            
            // Toggle aria-expanded attribute for accessibility
            const expanded = navLinks.classList.contains('nav-active');
            burger.setAttribute('aria-expanded', expanded);
            
            // Animate burger menu lines
            burger.classList.toggle('toggle');
            
            // Prevent body scrolling when menu is open
            document.body.classList.toggle('nav-open');
            
            // Add slide-in animation to individual nav items
            if (expanded) {
                animateNavItems(true);
            } else {
                animateNavItems(false);
            }
        });
        
        // Close mobile navigation when clicking on links
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    burger.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('nav-open');
                    animateNavItems(false);
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            
            if (!isClickInsideNav && navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
                animateNavItems(false);
            }
        });
    }
    
    // Function to animate nav items staggered entrance/exit
    function animateNavItems(isEntering) {
        navItems.forEach((link, index) => {
            const parentLi = link.parentElement;
            
            if (isEntering) {
                parentLi.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                parentLi.style.animation = '';
            }
        });
    }
    
    // Add scrolled class to navigation on scroll
    function handleNavbarScroll() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Handle scroll event for sticky navbar with opacity
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initialize mobile navigation
    setupMobileNavigation();
    
    // Update navigation on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Reset navigation state if screen size changes from mobile to desktop
            if (window.innerWidth > 768 && navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
                navItems.forEach(link => {
                    link.parentElement.style.animation = '';
                });
            }
        }, 250);
    });
});