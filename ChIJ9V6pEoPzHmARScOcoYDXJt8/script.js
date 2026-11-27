// URLにアンカー(#access等)が付いていても、開いた直後はトップ画面を表示する
(function () {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    window.addEventListener('load', function () {
      window.scrollTo(0, 0);
    });
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }
})();

// ハンバーガーメニューの開閉のみを扱う最小限のスクリプト
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
