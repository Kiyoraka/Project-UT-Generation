/**
 * ===================================
 * NAVIGATION.JS
 * Navigation bar interactions
 * Mobile menu toggle, scroll effects, active states
 * ===================================
 */

class Navigation {
    constructor() {
        this.navbar = null;
        this.navbarToggle = null;
        this.navbarMenu = null;
        this.navLinks = [];
        this.scrollThreshold = 50;
        this.activeSection = 'home';

        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Get DOM elements
        this.navbar = document.querySelector('.navbar');
        this.navbarToggle = document.querySelector('.navbar-toggle');
        this.navbarMenu = document.querySelector('.navbar-menu');
        this.navLinks = document.querySelectorAll('.navbar-link');

        if (!this.navbar) {
            console.warn('Navbar element not found');
            return;
        }

        // Setup event listeners
        this.setupScrollListener();
        this.setupMobileToggle();
        this.setupNavLinks();
        this.setupSectionObserver();
    }

    setupScrollListener() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class based on scroll position
            if (currentScroll > this.scrollThreshold) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    setupMobileToggle() {
        if (!this.navbarToggle || !this.navbarMenu) return;

        this.navbarToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.navbarToggle.classList.toggle('active');
        this.navbarMenu.classList.toggle('active');
    }

    closeMobileMenu() {
        this.navbarToggle?.classList.remove('active');
        this.navbarMenu?.classList.remove('active');
    }

    setupNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Handle anchor links
                if (href && href.startsWith('#')) {
                    e.preventDefault();

                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        // Smooth scroll to section
                        this.scrollToSection(targetSection);

                        // Update active state
                        this.setActiveLink(link);

                        // Close mobile menu
                        this.closeMobileMenu();
                    }
                }
            });
        });
    }

    scrollToSection(section) {
        const navbarHeight = this.navbar.offsetHeight;
        const targetPosition = section.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    setActiveLink(activeLink) {
        // Remove active class from all links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        activeLink.classList.add('active');
    }

    setupSectionObserver() {
        // Observe sections to update active nav link
        const sections = document.querySelectorAll('section[id]');

        if (sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    this.updateActiveNavLink(sectionId);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    updateActiveNavLink(sectionId) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');

            if (href === `#${sectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Public method to set active section programmatically
    setActiveSection(sectionId) {
        this.activeSection = sectionId;
        this.updateActiveNavLink(sectionId);
    }

    // Public method to get current active section
    getActiveSection() {
        return this.activeSection;
    }
}

// Initialize navigation
const navigation = new Navigation();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}
