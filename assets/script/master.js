/**
 * ===================================
 * MASTER.JS - Main JavaScript Entry Point
 * Engineering Company Website
 * Modular Component Import System
 * ===================================
 */

// Application state
const App = {
    components: {},
    config: {
        debug: false,
        enableAnimations: true,
        mobileBreakpoint: 768
    },

    // Initialize application
    init() {
        console.log('🚀 Initializing Engineering Company Website...');

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    },

    // Start application
    start() {
        this.log('DOM Ready - Starting components...');

        // Load components
        this.loadComponents();

        // Setup global event listeners
        this.setupGlobalListeners();

        // Initialize smooth scroll
        this.initSmoothScroll();

        this.log('✅ Application initialized successfully');
    },

    // Load all components
    loadComponents() {
        // Component initialization will happen in separate files
        // They auto-initialize when loaded

        this.log('Components loaded');
    },

    // Setup global event listeners
    setupGlobalListeners() {
        // Listen for logo animation completion
        document.addEventListener('logoAnimationComplete', (e) => {
            this.log('Logo animation completed', e.detail);
            this.onLogoComplete();
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });
    },

    // Initialize smooth scroll for all anchor links
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();

                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // Handle logo animation completion
    onLogoComplete() {
        // Trigger any post-logo animations
        this.animateHomeSection();
    },

    // Animate home section elements
    animateHomeSection() {
        const homeElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta');

        homeElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
            }, index * 100);
        });
    },

    // Handle window resize
    handleResize() {
        const width = window.innerWidth;
        this.log(`Window resized: ${width}px`);

        // Update mobile state
        const isMobile = width < this.config.mobileBreakpoint;
        document.body.classList.toggle('is-mobile', isMobile);
    },

    // Handle visibility change
    handleVisibilityChange() {
        if (document.hidden) {
            this.log('Page hidden');
        } else {
            this.log('Page visible');
        }
    },

    // Handle keyboard shortcuts
    handleKeyboardShortcuts(e) {
        // Home - Press 'H' key
        if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
            const homeSection = document.getElementById('home');
            if (homeSection && !this.isInputFocused()) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Debug mode - Press 'Ctrl/Cmd + D'
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            this.toggleDebug();
        }
    },

    // Check if input element is focused
    isInputFocused() {
        const activeElement = document.activeElement;
        return activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        );
    },

    // Toggle debug mode
    toggleDebug() {
        this.config.debug = !this.config.debug;
        console.log(`Debug mode: ${this.config.debug ? 'ON' : 'OFF'}`);
    },

    // Logging utility
    log(...args) {
        if (this.config.debug) {
            console.log('[App]', ...args);
        }
    },

    // Error logging
    error(...args) {
        console.error('[App Error]', ...args);
    }
};

// Initialize app
App.init();

// Make App globally available
window.App = App;

/**
 * ===================================
 * NOTE: COMPONENT SCRIPTS LOADED VIA HTML
 * All component JavaScript files are loaded directly in index.html
 * for better browser compatibility and to avoid path resolution issues:
 * - components/logo-animation.js
 * - components/navigation.js
 * - master.js (this file)
 *
 * Component scripts auto-initialize when loaded.
 * ===================================
 */

/**
 * ===================================
 * UTILITY FUNCTIONS
 * Global utility functions
 * ===================================
 */

// Debounce function
function debounce(func, wait) {
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

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export utilities
window.Utils = {
    debounce,
    throttle,
    isInViewport
};
