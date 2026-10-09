(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Add subtle scroll-in motion without hiding content if the observer is unavailable.
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.project, .section-heading, .about-intro, .detail-section, .contact');
  targets.forEach((item) => item.classList.add('reveal'));
  document.documentElement.classList.add('js-ready');

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  targets.forEach((item) => observer.observe(item));
})();
