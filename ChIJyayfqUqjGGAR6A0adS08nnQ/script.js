// ハンバーガーメニュー
(function () {
  var btn = document.getElementById('hamburger');
  var nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();

// 評価・クチコミ件数(4.7 / 64件)は現時点では固定表示。
// 月次の自動更新(GitHub Actions)は別リポジトリ・Secrets権限の準備が整い次第、別途対応する。
