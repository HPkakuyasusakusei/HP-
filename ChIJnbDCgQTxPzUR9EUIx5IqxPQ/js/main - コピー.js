(function () {
  var btn = document.querySelector('.menu-btn');
  var head = document.querySelector('.site-head');
  if (!btn || !head) return;
  btn.addEventListener('click', function () {
    var open = head.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
