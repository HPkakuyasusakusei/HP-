(function () {
  var root = document.documentElement;
  var note = document.querySelector('.hp-photo-note');
  function setNoteHeight() {
    if (note) root.style.setProperty('--note-h', note.offsetHeight + 'px');
  }
  setNoteHeight();
  window.addEventListener('resize', setNoteHeight);
  window.addEventListener('load', setNoteHeight);

  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 区切り弧がスクロールでわずかにせり上がる(最大20px)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var arcs = document.querySelectorAll('.arc svg');
  if (!reduce.matches && arcs.length) {
    var ticking = false;
    var update = function () {
      var vh = window.innerHeight;
      arcs.forEach(function (svg) {
        var r = svg.getBoundingClientRect();
        var p = Math.min(Math.max((vh - r.top) / vh, 0), 1);
        var dir = svg.parentNode.classList.contains('arc-up') ? 1 : -1;
        svg.style.transform = 'translateY(' + (dir * p * 20).toFixed(1) + 'px)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
