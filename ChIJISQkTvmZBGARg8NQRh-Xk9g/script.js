(function () {
  var b = document.querySelector('.burger');
  var s = document.getElementById('side');
  if (b && s) {
    b.addEventListener('click', function () {
      var o = s.classList.toggle('open');
      if (o) { window.scrollTo(0, 0); }
      document.body.classList.toggle('menu-open', o);
      b.setAttribute('aria-expanded', o ? 'true' : 'false');
      b.setAttribute('aria-label', o ? 'メニューを閉じる' : 'メニューを開く');
    });
  }
  document.querySelectorAll('.gbtn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = btn.querySelector('img');
      var lb = document.createElement('div');
      lb.className = 'lb';
      var im = document.createElement('img');
      im.src = src.src;
      im.alt = src.alt;
      var c = document.createElement('button');
      c.type = 'button';
      c.setAttribute('aria-label', '閉じる');
      c.textContent = '×';
      lb.appendChild(im);
      lb.appendChild(c);
      lb.addEventListener('click', function () { lb.remove(); });
      document.body.appendChild(lb);
    });
  });
})();
