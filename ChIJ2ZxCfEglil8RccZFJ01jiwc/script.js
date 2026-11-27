(function () {
  var t = document.querySelector('.nav-toggle');
  var n = document.getElementById('gnav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // 追従バーの実高さに合わせて下余白と電話ボタン位置を決める
  var note = document.querySelector('.hp-photo-note');
  function setH() {
    if (note) document.documentElement.style.setProperty('--note-h', note.offsetHeight + 'px');
  }
  setH();
  window.addEventListener('resize', setH);
})();
