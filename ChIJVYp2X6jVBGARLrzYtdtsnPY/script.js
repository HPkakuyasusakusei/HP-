(function () {
  var b = document.querySelector('.nav-toggle');
  var n = document.getElementById('gnav');
  if (!b || !n) return;
  b.addEventListener('click', function () {
    var open = n.classList.toggle('open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
