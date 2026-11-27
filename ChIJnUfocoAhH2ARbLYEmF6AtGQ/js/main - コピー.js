(function () {
  var btn = document.querySelector('.menu-toggle');
  var panel = document.getElementById('mobile-menu');
  if (!btn || !panel) return;
  var closeBtn = panel.querySelector('.menu-close');
  function setOpen(open) {
    panel.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-locked', open);
    if (open && closeBtn) closeBtn.focus();
    if (!open) btn.focus();
  }
  btn.addEventListener('click', function () { setOpen(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
  panel.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) setOpen(false);
  });
})();
