// シャンティーイ 共通スクリプト(全5ページ共有)
document.addEventListener('DOMContentLoaded', function () {
  // 現在地ナビのハイライト(plan.md 4-1節)
  var page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    if (el.dataset.nav === page) el.classList.add('is-active');
  });

  // モバイル用ハンバーガーメニュー
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
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
  }
});
