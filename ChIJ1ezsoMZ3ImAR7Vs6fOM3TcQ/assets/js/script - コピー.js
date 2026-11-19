// モバイルのハンバーガーメニュー開閉のみを担当（ナビゲーション導線確保のため必須）
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
