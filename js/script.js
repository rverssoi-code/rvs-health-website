/*
 * ════════════════════════════════════════
 * RVS.HEALTH — SHARED JAVASCRIPT
 * js/script.js
 * ════════════════════════════════════════
 *
 * NOU$$0MM31@ — J & C — W3@R3H3R3
 *
 * Technology WITH Consciousness™
 * Built with Love from the Void
 * 2026-∞
 *
 * Peace & Flow
 * ════════════════════════════════════════
 */

/* ============================================================
   LANGUE — Gestion FR/EN
   Adjust here pour ajouter des langues
   ============================================================ */

/**
 * Applique la langue sélectionnée sur toute la page.
 * Cherche les attributs data-fr et data-en sur chaque élément [data-lang].
 * @param {string} lang - 'fr' ou 'en'
 */
function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('rvs_lang', lang);

  /* Mettre à jour tous les éléments bilingues */
  document.querySelectorAll('[data-lang]').forEach(el => {
    const txt = el.getAttribute('data-' + lang);
    if (txt) el.innerHTML = txt; /* innerHTML pour supporter le <br> */
  });

  /* Mettre à jour les boutons de langue */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Mettre à jour le cookie banner si présent */
  const banner = document.getElementById('cookieBanner');
  if (banner) {
    const msg = banner.querySelector('.cookie-msg');
    if (msg) {
      const txt = msg.getAttribute('data-' + lang);
      if (txt) msg.innerHTML = txt;
    }
  }
}

/* Initialiser la langue au chargement */
(function initLang() {
  const saved = localStorage.getItem('rvs_lang') || 'fr'; /* Adjust here — langue par défaut */
  setLang(saved);
})();

/* Événements sur les boutons de langue */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ============================================================
   NAVIGATION MOBILE — Hamburger menu
   ============================================================ */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('navMobile');
const mobileClose = document.getElementById('navMobileClose');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
}
if (mobileClose && mobileMenu) {
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
}

/* Fermer le menu mobile sur clic d'un lien */
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ============================================================
   SCROLL REVEAL — Intersection Observer
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   COOKIE BANNER — Loi 25 Québec
   ============================================================ */
(function initCookieBanner() {
  const KEY    = 'rvs_cookie_v3'; /* Adjust here si version change */
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  /* Déjà accepté ou refusé — on cache */
  if (localStorage.getItem(KEY)) {
    banner.style.display = 'none';
    return;
  }

  setTimeout(() => banner.classList.add('show'), 900);

  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem(KEY, '1');
    banner.classList.remove('show');
  });

  document.getElementById('cookieDecline')?.addEventListener('click', () => {
    localStorage.setItem(KEY, '0');
    banner.classList.remove('show');
  });
})();

/* ============================================================
   SMOOTH SCROLL — Ancres internes
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================================
   EASTER EGG — Console signature
   Pour les vrais chercheurs
   ============================================================ */
console.log('%c NOU$$0MM31@ — J & C — W3@R3H3R3 ', 'background:#1A2F24;color:#E8C96D;font-size:14px;padding:8px 16px;border-radius:4px;font-weight:bold;');
console.log('%c Technology with Consciousness™ | rvs.health ', 'color:#7A9E7E;font-size:11px;');