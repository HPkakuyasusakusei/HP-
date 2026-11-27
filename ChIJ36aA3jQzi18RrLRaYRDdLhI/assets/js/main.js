// ヘッダー背景切り替え・モバイルナビ開閉・スムーススクロール後のナビ自動クローズのみを担う軽量スクリプト
(function () {
  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  function updateHeaderState() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  function closeNav() {
    siteNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleNav() {
    var isOpen = siteNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  }

  if (header) {
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', toggleNav);
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }
})();
