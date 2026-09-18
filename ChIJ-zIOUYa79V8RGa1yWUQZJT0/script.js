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
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
})();
