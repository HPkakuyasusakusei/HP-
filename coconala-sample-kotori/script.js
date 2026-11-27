(function () {
  var b = document.body;
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', nav.classList.toggle('open'));
    });
  }
  if ('IntersectionObserver' in window) {
    var rail = document.querySelectorAll('.rail li');
    var map = { morning: 0, noon: 1, dusk: 2, night: 3 };
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var t = e.target.dataset.t;
        b.dataset.time = t;
        rail.forEach(function (li, i) { li.classList.toggle('on', i === map[t]); });
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    document.querySelectorAll('[data-t]').forEach(function (s) { io.observe(s); });
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io2.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal,.fire').forEach(function (s) { io2.observe(s); });
  } else {
    document.documentElement.classList.remove('fx');
  }
  var hero = document.querySelector('.hero-img');
  if (hero && !rm) {
    var tick = false;
    window.addEventListener('scroll', function () {
      if (tick) return;
      tick = true;
      requestAnimationFrame(function () {
        hero.style.setProperty('--s', 1 + 0.08 * Math.min(scrollY / innerHeight, 1));
        tick = false;
      });
    }, { passive: true });
  }
})();
