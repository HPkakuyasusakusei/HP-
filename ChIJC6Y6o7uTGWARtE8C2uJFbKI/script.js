(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // 固定バーの高さ(折り返しで変わる)を電話バーと本文余白に反映する
  var note = document.querySelector('.hp-photo-note');
  function sync() {
    if (note) document.documentElement.style.setProperty('--note-h', note.offsetHeight + 'px');
  }
  sync();
  window.addEventListener('resize', sync);
  window.addEventListener('load', sync);
})();
