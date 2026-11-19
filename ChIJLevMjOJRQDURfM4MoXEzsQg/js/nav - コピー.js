(function () {
  var b = document.querySelector('.menu-btn');
  var n = document.getElementById('gnav');
  if (!b || !n) return;
  b.addEventListener('click', function () {
    var open = n.classList.toggle('is-open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
