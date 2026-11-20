/* JS無効でもナビと固定CTAが使えるよう、折りたたみはこのクラスが付いた時だけ有効化する */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      toggle.setAttribute('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');
      nav.classList.toggle('is-open', !isOpen);
    });
  }

  var bar = document.querySelector('.mobile-cta');

  if (bar) {
    var update = function () {
      bar.classList.toggle('is-visible', window.pageYOffset > 320);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
});
