// pleasure(美容室)試作HP 共通スクリプト
(function () {
  'use strict';

  // --- モバイルナビの開閉 ---
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');

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

  // --- アンカー付きURLで開いた場合、トップから正しい位置へスムーズスクロール ---
  // 理由: ブラウザ既定のジャンプだと中途半端な位置で止まるため、一度トップに戻してから改めてスクロールする
  window.addEventListener('load', function () {
    if (window.location.hash) {
      var hash = window.location.hash;
      window.scrollTo(0, 0);
      window.requestAnimationFrame(function () {
        var target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });

  // --- ページ内リンクのスムーズスクロール(読み込み後のクリック時) ---
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var url = new URL(link.href, window.location.href);
      var samePage = url.pathname === window.location.pathname || url.pathname.endsWith('/' + window.location.pathname.split('/').pop());
      if (samePage && url.hash) {
        var target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, '', url.hash);
        }
      }
    });
  });
})();
