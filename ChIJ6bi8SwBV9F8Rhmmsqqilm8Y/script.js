// BooちゃんCafe 共通スクリプト: 現在地ナビ(.is-active)とハンバーガーメニューの開閉制御
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const currentPage = body.getAttribute('data-page');

  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.getAttribute('data-nav') === currentPage) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('site-nav');

  if (hamburger && nav) {
    const closeNav = () => {
      nav.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      body.classList.remove('nav-open');
    };

    hamburger.addEventListener('click', () => {
      const willOpen = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', willOpen);
      hamburger.classList.toggle('is-active', willOpen);
      hamburger.setAttribute('aria-expanded', String(willOpen));
      body.classList.toggle('nav-open', willOpen);
    });

    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }
});
