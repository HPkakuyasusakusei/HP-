(function () {
  var m = document.getElementById('sp-menu');
  var o = document.getElementById('menu-open');
  if (!m || !o) return;
  function set(v) {
    m.classList.toggle('open', v);
    o.setAttribute('aria-expanded', v ? 'true' : 'false');
  }
  o.addEventListener('click', function () { set(true); });
  m.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' || e.target.classList.contains('close')) set(false);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
