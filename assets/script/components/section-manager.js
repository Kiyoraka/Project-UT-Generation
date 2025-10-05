/**
 * ===================================
 * SECTION-MANAGER.JS
 * Handles section switching with rise-from-below animations
 * =================================== */

class SectionManager {
    constructor() {
        this.sections = [];
        this.currentSection = null;
        this.navLinks = [];
        this.isAnimating = false;

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
        // Get all sections
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.navbar-link');

        if (this.sections.length === 0) {
            console.warn('No sections found');
            return;
        }

        // Setup initial state - show home by default
        this.showSection('home', false);

        // Setup navigation links
        this.setupNavigation();

        // Setup hash navigation
        this.setupHashNavigation();

        // Listen for logo animation completion
        document.addEventListener('logoAnimationComplete', () => {
            this.showSection('home', true);
        });
    }

    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#')) return;

                const sectionId = href.substring(1);
                this.showSection(sectionId, true);

                // Update URL hash
                history.pushState(null, null, href);
            });
        });

        // Handle CTA buttons (About Us, Contact Us)
        this.setupCTAButtons();
    }

    setupCTAButtons() {
        // These will be added after HTML is updated
        setTimeout(() => {
            const aboutBtn = document.querySelector('[data-navigate="about"]');
            const contactBtn = document.querySelector('[data-navigate="contact"]');

            if (aboutBtn) {
                aboutBtn.addEventListener('click', () => {
                    this.showSection('about', true);
                    history.pushState(null, null, '#about');
                });
            }

            if (contactBtn) {
                contactBtn.addEventListener('click', () => {
                    this.showSection('contact', true);
                    history.pushState(null, null, '#contact');
                });
            }
        }, 100);
    }

    setupHashNavigation() {
        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                this.showSection(hash, true);
            }
        });

        // Check initial hash on load
        const initialHash = window.location.hash.substring(1);
        if (initialHash && initialHash !== 'home') {
            setTimeout(() => {
                this.showSection(initialHash, true);
            }, 100);
        }
    }

    showSection(sectionId, animate = true) {
        // Prevent multiple animations at once
        if (this.isAnimating) return;

        const targetSection = document.getElementById(sectionId);
        if (!targetSection) {
            console.warn(`Section ${sectionId} not found`);
            return;
        }

        // If same section, don't do anything
        if (this.currentSection === sectionId) return;

        this.isAnimating = true;

        // Hide current section
        if (this.currentSection) {
            const currentElement = document.getElementById(this.currentSection);
            if (currentElement) {
                this.hideSection(currentElement);
            }
        }

        // Show new section after brief delay
        setTimeout(() => {
            this.revealSection(targetSection, animate);
            this.currentSection = sectionId;

            // Update active nav link
            this.updateActiveNav(sectionId);

            this.isAnimating = false;
        }, 300);
    }

    hideSection(section) {
        section.classList.add('hide');
        section.classList.remove('active');

        setTimeout(() => {
            section.style.display = 'none';
            section.classList.remove('hide');
        }, 300);
    }

    revealSection(section, animate = true) {
        // Show section
        section.style.display = 'block';
        section.classList.add('active');

        // Trigger rise animations for cards
        if (animate) {
            this.triggerRiseAnimations(section);
        } else {
            // Instantly show without animation
            const elements = section.querySelectorAll('.rise-animation');
            elements.forEach(el => el.classList.add('show'));
        }
    }

    triggerRiseAnimations(section) {
        const elements = section.querySelectorAll('.rise-animation');

        // Reset all animations
        elements.forEach(el => {
            el.classList.remove('show');
        });

        // Trigger animations after small delay
        setTimeout(() => {
            elements.forEach(el => {
                el.classList.add('show');
            });
        }, 100);
    }

    updateActiveNav(sectionId) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Public method to navigate programmatically
    navigateTo(sectionId) {
        this.showSection(sectionId, true);
        history.pushState(null, null, `#${sectionId}`);
    }

    // Public method to get current section
    getCurrentSection() {
        return this.currentSection;
    }
}

// Initialize section manager
const sectionManager = new SectionManager();

// Make globally available
window.sectionManager = sectionManager;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SectionManager;
}
