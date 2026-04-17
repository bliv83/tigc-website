/* ── MOBILE NAVIGATION ──────────────────────────────────────── */
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('nav__mobile--open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

/* ── ACTIVE NAV LINK ────────────────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('nav__links--active');
  }
});

/* ── SCROLL-TRIGGERED FADE-INS ──────────────────────────────── */
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => {
  animateObserver.observe(el);
});

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── PUBLICATIONS FILTER ────────────────────────────────────── */
const filterTabs = document.querySelectorAll('.filter-tab');
const pubItems = document.querySelectorAll('.publication-item[data-type]');

if (filterTabs.length) {
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('filter-tab--active'));
      tab.classList.add('filter-tab--active');

      const filter = tab.dataset.filter;
      pubItems.forEach(item => {
        item.style.display =
          filter === 'all' || item.dataset.type === filter ? '' : 'none';
      });
    });
  });
}
