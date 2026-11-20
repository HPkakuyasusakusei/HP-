(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.sr').textContent = open ? 'メニューを閉じる' : 'メニューを開く';
    });
  }

  var path = document.querySelector('.flow path');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (path && !reduce) {
    document.querySelector('.flow').classList.add('flow-ready');
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, (window.scrollY + window.innerHeight * 0.5) / (max + window.innerHeight * 0.5)) : 1;
      path.style.strokeDashoffset = String(1 - p);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
