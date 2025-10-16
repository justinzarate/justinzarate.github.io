// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll for in-page anchors (e.g., #resume)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  });
});

// Optional theme toggle support (only if you add a button with id="themeToggle")
const toggle = document.getElementById('themeToggle');
if (toggle) {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.dataset.theme = 'light';

  toggle.addEventListener('click', () => {
    const isLight = root.dataset.theme === 'light';
    if (isLight) {
      delete root.dataset.theme;
      localStorage.removeItem('theme');
    } else {
      root.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
}
