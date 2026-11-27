(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var note = document.querySelector('.hp-photo-note');
  function setH() {
    if (note) document.documentElement.style.setProperty('--note-h', note.offsetHeight + 'px');
  }
  setH();
  window.addEventListener('resize', setH);
})();
