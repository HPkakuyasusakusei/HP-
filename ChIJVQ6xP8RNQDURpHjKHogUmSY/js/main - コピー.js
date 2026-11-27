(function () {
  var b = document.querySelector('.nav-toggle');
  var h = document.querySelector('.side');
  if (!b || !h) return;
  b.addEventListener('click', function () {
    var open = h.classList.toggle('is-open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
