document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.textContent = 'MENU';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var current = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.site-nav a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('is-current');
    }
  });
});
