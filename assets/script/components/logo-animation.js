/**
 * ===================================
 * LOGO-ANIMATION.JS
 * Logo screen fade-out animation handler
 * 3-second display then fade out
 * ===================================
 */

class LogoAnimation {
    constructor() {
        this.logoScreen = null;
        this.animationDuration = 3000; // 3 seconds
        this.fadeDuration = 500; // 0.5 seconds fade
        this.hasShownBefore = false;

        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        // Check if logo has been shown this session
        this.hasShownBefore = sessionStorage.getItem('logoShown') === 'true';

        this.logoScreen = document.querySelector('.logo-screen');

        if (!this.logoScreen) {
            console.warn('Logo screen element not found');
            return;
        }

        // If already shown this session, hide immediately
        if (this.hasShownBefore) {
            this.hideImmediate();
            return;
        }

        // Start animation sequence
        this.playAnimation();
    }

    playAnimation() {
        // After 3 seconds, start fade out
        setTimeout(() => {
            this.fadeOut();
        }, this.animationDuration);
    }

    fadeOut() {
        if (!this.logoScreen) return;

        // Add fade-out class
        this.logoScreen.classList.add('fade-out');

        // After fade completes, hide completely
        setTimeout(() => {
            this.logoScreen.classList.add('hidden');

            // Mark as shown in session storage
            sessionStorage.setItem('logoShown', 'true');

            // Trigger custom event for other components
            this.dispatchCompleteEvent();
        }, this.fadeDuration);
    }

    hideImmediate() {
        if (!this.logoScreen) return;

        this.logoScreen.classList.add('fade-out');
        this.logoScreen.classList.add('hidden');
    }

    dispatchCompleteEvent() {
        // Dispatch custom event when animation completes
        const event = new CustomEvent('logoAnimationComplete', {
            detail: { timestamp: Date.now() }
        });
        document.dispatchEvent(event);
    }

    // Public method to replay animation
    replay() {
        if (!this.logoScreen) return;

        // Remove classes to replay
        this.logoScreen.classList.remove('fade-out', 'hidden');

        // Clear session storage
        sessionStorage.removeItem('logoShown');

        // Restart animation
        this.playAnimation();
    }

    // Public method to skip animation
    skip() {
        if (!this.logoScreen) return;

        this.fadeOut();
    }
}

// Initialize logo animation
const logoAnimation = new LogoAnimation();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LogoAnimation;
}
