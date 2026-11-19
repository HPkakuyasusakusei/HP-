(function () {
  var btn = document.querySelector('.burger');
  var drawer = document.getElementById('drawer');
  var scrim = document.querySelector('.scrim');
  var closeBtn = document.querySelector('.drawer-close');
  if (!btn || !drawer) return;
  function set(open) {
    drawer.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    if (open) { closeBtn.focus(); } else { btn.focus(); }
  }
  btn.addEventListener('click', function () { set(!drawer.classList.contains('open')); });
  closeBtn.addEventListener('click', function () { set(false); });
  scrim.addEventListener('click', function () { set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) set(false);
  });
})();
