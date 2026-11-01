(function () {
  var b = document.querySelector('.nav-toggle');
  var n = document.getElementById('gnav');
  if (!b || !n) return;
  b.addEventListener('click', function () {
    var open = n.classList.toggle('is-open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    var t = open ? '閉じる' : 'メニューを開く';
    b.textContent = t;
    b.setAttribute('aria-label', t);
  });
})();
