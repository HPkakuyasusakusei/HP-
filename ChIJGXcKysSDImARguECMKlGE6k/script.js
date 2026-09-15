document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('globalNav');
  var scrim = document.getElementById('navScrim');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (scrim) scrim.classList.remove('is-open');
  }

  function toggleNav() {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (scrim) scrim.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', toggleNav);
  if (scrim) scrim.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
});
