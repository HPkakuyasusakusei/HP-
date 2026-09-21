(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  var body = document.body;
  function setNav(open) {
    body.classList.toggle('is-nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'ページの一覧を閉じる' : 'ページの一覧を開く');
  }
  btn.addEventListener('click', function () { setNav(!body.classList.contains('is-nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('is-nav-open')) { setNav(false); btn.focus(); }
  });
  var mq = window.matchMedia('(min-width: 860px)');
  var onChange = function (e) { if (e.matches) setNav(false); };
  if (mq.addEventListener) { mq.addEventListener('change', onChange); } else if (mq.addListener) { mq.addListener(onChange); }
})();
