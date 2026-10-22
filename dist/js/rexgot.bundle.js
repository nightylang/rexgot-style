/* ==========================================
   Rexgot Style Framework - JavaScript Bundle
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Alerts
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-dismiss="alert"]');
    if (!trigger) return;
    const alert = trigger.closest('.alert');
    if (alert) {
      alert.style.opacity = '0';
      setTimeout(() => alert.remove(), 200);
    }
  });

  // 2. Dropdowns
  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-toggle="dropdown"]');
    if (!toggle) {
      document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
      return;
    }
    event.preventDefault();
    const parent = toggle.closest('.dropdown');
    const menu = parent ? parent.querySelector('.dropdown-menu') : null;
    if (menu) {
      document.querySelectorAll('.dropdown-menu.show').forEach(m => { if (m !== menu) m.classList.remove('show'); });
      menu.classList.toggle('show');
    }
  });

  // 3. Modals
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-toggle="modal"]');
    if (trigger) {
      event.preventDefault();
      const target = document.querySelector(trigger.getAttribute('data-target') || trigger.getAttribute('href'));
      if (target) { target.classList.add('show'); document.body.classList.add('modal-open'); }
    }
    
    const dismiss = event.target.closest('[data-dismiss="modal"]');
    const modal = event.target.closest('.modal');
    if (dismiss || (modal && event.target === modal)) {
      const activeModal = dismiss ? dismiss.closest('.modal') : modal;
      if (activeModal) { activeModal.classList.remove('show'); document.body.classList.remove('modal-open'); }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const activeModal = document.querySelector('.modal.show');
      if (activeModal) { activeModal.classList.remove('show'); document.body.classList.remove('modal-open'); }
    }
  });
});
