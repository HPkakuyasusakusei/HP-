(function () {
  var toggle = document.querySelector('.nav-toggle');
  var close = document.querySelector('.nav-close');
  var nav = document.getElementById('site-nav');
  var scrim = document.querySelector('.nav-scrim');
  if (!toggle || !nav || !scrim) { return; }

  function openNav() {
    nav.classList.add('is-open');
    scrim.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    nav.classList.remove('is-open');
    scrim.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    if (nav.classList.contains('is-open')) { closeNav(); } else { openNav(); }
  });
  if (close) { close.addEventListener('click', closeNav); }
  scrim.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });
})();
