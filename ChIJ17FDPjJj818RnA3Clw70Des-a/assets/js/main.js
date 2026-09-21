(function () {
  var doc = document;
  var body = doc.body;
  var btn = doc.querySelector('.nav-toggle');
  var nav = doc.getElementById('site-nav');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setNav(open) {
    body.classList.toggle('is-nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '章の一覧を閉じる' : '章の一覧を開く');
  }

  if (btn && nav) {
    btn.addEventListener('click', function () {
      setNav(!body.classList.contains('is-nav-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('is-nav-open')) {
        setNav(false);
        btn.focus();
      }
    });
  }

  var items = doc.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          revealIo.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { revealIo.observe(el); });
  }

  if ('IntersectionObserver' in window && nav) {
    var links = nav.querySelectorAll('a[href^="#"]');
    var currentIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) {
            a.setAttribute('aria-current', 'true');
          } else {
            a.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    doc.querySelectorAll('section[id]').forEach(function (s) { currentIo.observe(s); });
  }
})();
