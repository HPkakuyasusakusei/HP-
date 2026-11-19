document.documentElement.classList.add('js');
(function () {
  var lines = document.querySelectorAll('.wl-line');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lines.forEach(function (l) { l.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  lines.forEach(function (l) { io.observe(l); });
})();
