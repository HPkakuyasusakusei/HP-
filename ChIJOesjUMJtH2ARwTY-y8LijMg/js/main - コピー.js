(function () {
  var marks = document.querySelectorAll('.fp');
  if (!marks.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    marks.forEach(function (m) { m.classList.add('on'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  marks.forEach(function (m) { io.observe(m); });
})();
