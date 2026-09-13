(function () {
  // ハンバーガーメニューの開閉自体はCSS(checkbox hack)で完結する。
  // このスクリプトはリンククリック時・Escキー押下時に自動で閉じる付加的なUXのみを担当する。
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function closeNav() {
    toggle.checked = false;
  }

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
