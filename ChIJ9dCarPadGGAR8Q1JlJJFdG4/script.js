// アビコキャリー 共通スクリプト(全5ページ共有)
document.addEventListener('DOMContentLoaded', function () {
  // 現在地ナビのハイライト
  var page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    if (el.dataset.nav === page) el.classList.add('is-active');
  });

  // モバイル用ハンバーガーメニューの開閉
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'メニューを開く');
      });
    });
  }
});
