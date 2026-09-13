// 木札固定CTA(デスクトップ幅のみ開閉トグル。モバイルは常時表示の帯なのでCSS側で対応)
document.addEventListener('DOMContentLoaded', function () {
  var kifuda = document.querySelector('.kifuda');
  var tab = document.querySelector('.kifuda-tab');
  if (!kifuda || !tab) return;

  function closeKifuda() {
    kifuda.classList.remove('is-open');
    tab.setAttribute('aria-expanded', 'false');
  }

  tab.addEventListener('click', function () {
    var isOpen = kifuda.classList.toggle('is-open');
    tab.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (event) {
    if (!kifuda.contains(event.target)) closeKifuda();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeKifuda();
  });
});
