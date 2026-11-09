const preloader = document.querySelector('.preloader');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js-ready');

// Keep the intro brief and show it only once per browser session.
let hasVisited = true;
try {
  hasVisited = sessionStorage.getItem('portfolio-intro-seen') === 'true';
} catch {
  // Storage can be unavailable in hardened browser contexts.
}
if (hasVisited || reducedMotion) {
  preloader?.classList.add('is-gone');
} else {
  preloader?.classList.add('is-active');
  try { sessionStorage.setItem('portfolio-intro-seen', 'true'); } catch {
    // The intro still runs once for this page load without session storage.
  }
  window.setTimeout(() => preloader?.classList.add('is-gone'), 760);
}

// Reveal sections as they enter the reading area.
const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Lightweight page progress, updated once per animation frame.
const progress = document.querySelector('.scroll-progress');
let progressPending = false;
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  progressPending = false;
};
window.addEventListener('scroll', () => {
  if (!progressPending) {
    window.requestAnimationFrame(updateProgress);
    progressPending = true;
  }
}, { passive: true });
updateProgress();

// Let a mouse wheel browse the experience timeline horizontally.
const timeline = document.querySelector('.experience-track');
timeline?.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX) && timeline.scrollWidth > timeline.clientWidth) {
    event.preventDefault();
    timeline.scrollLeft += event.deltaY;
  }
}, { passive: false });

document.querySelector('#year').textContent = new Date().getFullYear();
