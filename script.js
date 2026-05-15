// ===== Sticky nav shadow on scroll =====
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Mobile nav toggle =====
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Apple-style scroll reveals =====
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  // Targets that should fade/rise into view. Children of group selectors get staggered.
  const soloSelectors = [
    '.hero-stats',
    '.section-eyebrow',
    '.section-title',
    '.section-sub',
    '.lede',
    '.reveal-note',
    '.cta-banner',
    '.contact-form',
    '.contact-list',
  ];
  const groupSelectors = [
    { parent: '.pillars',          child: '.pillar' },
    { parent: '.team-grid',        child: '.member' },
    { parent: '.build-progress',   child: '.phase' },
    { parent: '.timeline',         child: '.t-item' },
    { parent: '.sponsor-grid',     child: '.sponsor-card' },
  ];

  const tagReveal = (el, index = 0) => {
    el.classList.add('reveal');
    if (index) el.style.setProperty('--rd', index);
  };

  soloSelectors.forEach(sel => document.querySelectorAll(sel).forEach(el => tagReveal(el)));
  groupSelectors.forEach(({ parent, child }) => {
    document.querySelectorAll(parent).forEach(group => {
      group.querySelectorAll(child).forEach((el, i) => tagReveal(el, i));
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ===== Hero parallax fade =====
  const hero = document.querySelector('.hero');
  if (hero) {
    let ticking = false;
    const updateHero = () => {
      const rect = hero.getBoundingClientRect();
      const h = hero.offsetHeight || 1;
      // progress: 0 at top of hero, 1 when fully scrolled past
      const progress = Math.min(Math.max(-rect.top / h, 0), 1);
      const shift   = (progress * 80).toFixed(2);   // headline lifts up
      const bgShift = (progress * 40).toFixed(2);   // bg drifts slower (parallax)
      const fade    = (1 - progress * 1.2).toFixed(3);
      hero.style.setProperty('--hero-shift',    `-${shift}px`);
      hero.style.setProperty('--hero-bg-shift', `${bgShift}px`);
      hero.style.setProperty('--hero-fade',     Math.max(fade, 0));
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(updateHero); ticking = true; }
    }, { passive: true });
    updateHero();
  }
}
