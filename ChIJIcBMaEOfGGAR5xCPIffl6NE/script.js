// ハンバーガーメニューの開閉(モバイル表示でナビが隠れるため)
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('siteNav');
  if (!toggleBtn || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggleBtn.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
});
