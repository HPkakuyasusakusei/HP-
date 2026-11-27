(function () {
  var btn = document.querySelector('.nav-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // 固定バーの実高さをCSS変数へ渡し、本文・スマホCTAが隠れないようにする
  var note = document.querySelector('.hp-photo-note');
  function sync() {
    if (note) document.documentElement.style.setProperty('--note-h', note.offsetHeight + 'px');
  }
  sync();
  window.addEventListener('resize', sync);
})();
