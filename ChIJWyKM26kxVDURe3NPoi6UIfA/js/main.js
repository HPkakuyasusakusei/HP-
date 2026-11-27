// SPの横スクロールナビで現在ページが画面外にならないよう位置を合わせる
(function () {
  var nav = document.querySelector('.gnav');
  var cur = nav && nav.querySelector('[aria-current="page"]');
  if (!cur || nav.scrollWidth <= nav.clientWidth) return;
  nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
})();
