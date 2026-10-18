// 身体修理工房 lu'turo -ﾙﾄﾛ- サンプルサイト 共通スクリプト
// 直接アンカー付きURL(例: access.html#map)で開いた場合も正しく初期化する

document.addEventListener('DOMContentLoaded', function () {
  initNavToggle();
  initActiveNav();
  initHashScroll();
  initYear();
});

function initNavToggle() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  var links = nav.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
}

function initActiveNav() {
  var current = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.primary-nav a[href]');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href').split('#')[0];
    if (href === current) {
      links[i].classList.add('is-current');
      links[i].setAttribute('aria-current', 'page');
    }
  }
}

function initHashScroll() {
  if (!location.hash) return;
  var target;
  try {
    target = document.querySelector(location.hash);
  } catch (e) {
    return;
  }
  if (!target) return;
  window.requestAnimationFrame(function () {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initYear() {
  var el = document.querySelector('[data-year]');
  if (el) {
    el.textContent = String(new Date().getFullYear());
  }
}
