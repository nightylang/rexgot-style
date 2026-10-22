/**
 * Rexgot Style Framework - JavaScript Core
 * Lightweight, vanilla JavaScript component handlers (Bootstrap-inspired)
 */

document.addEventListener('DOMContentLoaded', () => {
  initAlerts();
  initDropdowns();
  initModals();
});

// ==========================================
// 1. Dismissible Alerts
// ==========================================
function initAlerts() {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-dismiss="alert"]');
    if (!trigger) return;

    const alert = trigger.closest('.alert');
    if (alert) {
      alert.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      alert.style.opacity = '0';
      alert.style.transform = 'scale(0.95)';
      setTimeout(() => alert.remove(), 200);
    }
  });
}

// ==========================================
// 2. Interactive Dropdowns
// ==========================================
function initDropdowns() {
  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-toggle="dropdown"]');
    
    // Close all open dropdowns if clicking outside
    if (!toggle) {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
      return;
    }

    event.preventDefault();
    const parent = toggle.closest('.dropdown');
    const menu = parent ? parent.querySelector('.dropdown-menu') : null;

    if (menu) {
      // Close other open menus
      document.querySelectorAll('.dropdown-menu.show').forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });
      menu.classList.toggle('show');
    }
  });
}

// ==========================================
// 3. Modals
// ==========================================
function initModals() {
  // Open modal triggers
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-toggle="modal"]');
    if (!trigger) return;

    event.preventDefault();
    const targetSelector = trigger.getAttribute('data-target') || trigger.getAttribute('href');
    const modal = document.querySelector(targetSelector);

    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  });

  // Close modal triggers (buttons with data-dismiss="modal" or backdrop click)
  document.addEventListener('click', (event) => {
    const dismissTrigger = event.target.closest('[data-dismiss="modal"]');
    const modal = event.target.closest('.modal');

    if (dismissTrigger || (modal && event.target === modal)) {
      const activeModal = dismissTrigger ? dismissTrigger.closest('.modal') : modal;
      if (activeModal) {
        activeModal.classList.remove('show');
        activeModal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const activeModal = document.querySelector('.modal.show');
      if (activeModal) {
        activeModal.classList.remove('show');
        activeModal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    }
  });
}
