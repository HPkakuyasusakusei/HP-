// ハンバーガーメニューの開閉(モバイル時のナビ整理のため必要な最小限のJS)
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  var label = toggle.querySelector('.sr-only');

  function setState(isOpen) {
    nav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (label) label.textContent = isOpen ? 'メニューを閉じる' : 'メニューを開く';
  }

  toggle.addEventListener('click', function () {
    setState(!nav.classList.contains('is-open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setState(false); });
  });
})();
