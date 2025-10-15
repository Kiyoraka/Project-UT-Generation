/* ===================================
   MODAL.JS - Modal Component Controller
   Handles project detail modal popup
   =================================== */

class ProjectModal {
    constructor() {
        this.modal = null;
        this.modalOverlay = null;
        this.isOpen = false;
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
        // Get modal elements
        this.modalOverlay = document.querySelector('.modal-overlay');

        if (!this.modalOverlay) {
            console.warn('Modal overlay not found');
            return;
        }

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close button
        const closeBtn = this.modalOverlay.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Backdrop click
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.close();
            }
        });

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // View Details buttons
        document.querySelectorAll('.btn-view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectData = this.getProjectData(btn);
                this.open(projectData);
            });
        });
    }

    getProjectData(button) {
        // Get data from button's data attributes
        return {
            title: button.dataset.projectTitle || '',
            scope: button.dataset.projectScope || '',
            client: button.dataset.projectClient || '',
            cost: button.dataset.projectCost || '',
            date: button.dataset.projectDate || '',
            category: button.dataset.projectCategory || ''
        };
    }

    open(projectData) {
        if (!this.modalOverlay) return;

        // Populate modal content
        this.populateModal(projectData);

        // Show modal
        this.modalOverlay.classList.add('active');
        this.isOpen = true;

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.modalOverlay) return;

        // Hide modal
        this.modalOverlay.classList.remove('active');
        this.isOpen = false;

        // Restore body scroll
        document.body.style.overflow = '';
    }

    populateModal(data) {
        // Update modal title
        const modalTitle = this.modalOverlay.querySelector('.modal-title');
        if (modalTitle) {
            modalTitle.textContent = data.title;
        }

        // Update category badge
        const modalBadge = this.modalOverlay.querySelector('.modal-badge');
        if (modalBadge) {
            modalBadge.textContent = data.category;
        }

        // Update project scope
        const scopeContent = this.modalOverlay.querySelector('[data-modal-scope]');
        if (scopeContent) {
            scopeContent.innerHTML = this.formatScope(data.scope);
        }

        // Update client
        const clientContent = this.modalOverlay.querySelector('[data-modal-client]');
        if (clientContent) {
            clientContent.textContent = data.client;
        }

        // Update cost
        const costContent = this.modalOverlay.querySelector('[data-modal-cost]');
        if (costContent) {
            costContent.textContent = this.formatCost(data.cost);
        }

        // Update date
        const dateContent = this.modalOverlay.querySelector('[data-modal-date]');
        if (dateContent) {
            dateContent.textContent = data.date;
        }
    }

    formatScope(scope) {
        // Split by periods or line breaks and create paragraphs
        if (!scope) return '<p>No details available</p>';

        const lines = scope.split(/\.\s+|\n+/).filter(line => line.trim());
        return lines.map(line => `<p>${line.trim()}.</p>`).join('');
    }

    formatCost(cost) {
        // Format cost with RM prefix
        if (!cost) return 'Contact for quote';

        // If already has RM, return as is
        if (cost.includes('RM')) return cost;

        // Add RM prefix
        return `RM ${cost}`;
    }
}

// Initialize modal when script loads
const projectModal = new ProjectModal();
