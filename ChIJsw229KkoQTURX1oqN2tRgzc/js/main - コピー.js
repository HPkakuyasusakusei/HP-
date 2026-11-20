(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('gnav');
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 860) setOpen(false);
  });
})();
