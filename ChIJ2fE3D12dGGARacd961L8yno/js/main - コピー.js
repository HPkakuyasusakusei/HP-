(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('site-nav');
  var scrim = document.getElementById('navScrim');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (scrim) scrim.classList.remove('is-open');
  }
  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (scrim) scrim.classList.add('is-open');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    if (isOpen) { closeNav(); } else { openNav(); }
  });
  if (scrim) scrim.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 960) closeNav();
  });
})();
