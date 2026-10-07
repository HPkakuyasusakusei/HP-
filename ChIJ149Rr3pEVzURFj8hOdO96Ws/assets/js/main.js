// ページ内アンカーへのスムーススクロール(固定ヘッダー分のオフセットを補正)
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var headerHeight = header ? header.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }
      var target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
});
