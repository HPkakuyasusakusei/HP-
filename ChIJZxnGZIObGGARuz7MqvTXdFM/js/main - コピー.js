document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburgerBtn');
  var nav = document.getElementById('gnav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });
});
