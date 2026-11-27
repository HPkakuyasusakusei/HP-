document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var headerRight = document.querySelector('.header-right');
  if (!toggle || !headerRight) return;

  toggle.addEventListener('click', function () {
    var isOpen = headerRight.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  headerRight.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      headerRight.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
