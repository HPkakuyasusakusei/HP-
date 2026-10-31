(function () {
  var nav = document.getElementById('gnav');
  var open = document.querySelector('.menu-btn');
  var close = document.querySelector('.gnav-close');
  if (!nav || !open) return;
  function set(state) {
    nav.classList.toggle('is-open', state);
    open.setAttribute('aria-expanded', state ? 'true' : 'false');
    document.body.style.overflow = state ? 'hidden' : '';
  }
  open.addEventListener('click', function () { set(true); });
  if (close) close.addEventListener('click', function () { set(false); });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') set(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
})();
