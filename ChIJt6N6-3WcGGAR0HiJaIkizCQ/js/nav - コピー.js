(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (!toggle || !nav) { return; }

  function setState(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { setState(false); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setState(false);
      toggle.focus();
    }
  });

  // 幅が広がった時に開いたままの状態が残らないようにする
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 960) { setState(false); }
  });
})();
