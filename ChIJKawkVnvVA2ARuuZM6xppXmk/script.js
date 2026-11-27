document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  // 現在地のナビリンクにアクセント色の下線を付けるため、body の data-page を見て判定する
  var page = document.body.getAttribute('data-page');
  if (page) {
    var link = document.querySelector('.site-nav__list a[href="' + page + '.html"]');
    if (link) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  }
});
