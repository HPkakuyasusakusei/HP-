(function () {
  var b = document.querySelector('.ok-toggle');
  var n = document.getElementById('ok-nav');
  if (!b || !n) return;
  b.addEventListener('click', function () {
    var open = n.classList.toggle('is-open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.setAttribute('aria-label', open ? 'ページ一覧を閉じる' : 'ページ一覧を開く');
  });
})();
