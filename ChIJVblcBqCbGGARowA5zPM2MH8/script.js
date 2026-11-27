// ヘッダーはモバイル幅で折り返して高さが変わるため、実測値で --header-h を追従させる
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeaderHeight = function () {
      document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    };
    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);
  }
});

// .line-navは900px未満でヘッダー直下にfixed表示される水平バーになるため、その高さを実測して本文の重なりを防ぐ
document.addEventListener("DOMContentLoaded", function () {
  var lineNav = document.querySelector(".line-nav");
  if (!lineNav) return;
  var mobileQuery = window.matchMedia("(max-width: 899px)");
  var syncLineNavHeight = function () {
    var height = mobileQuery.matches ? lineNav.offsetHeight : 0;
    document.documentElement.style.setProperty("--line-nav-h", height + "px");
  };
  syncLineNavHeight();
  window.addEventListener("resize", syncLineNavHeight);
});

// 路線図インジケーター(Line Diagram Nav): 現在表示中の層に対応する駅ドットを点灯させる
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".line-nav");
  if (!nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
  var targets = links
    .map(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || targets.length === 0) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = nav.querySelector('a[href="#' + entry.target.id + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  targets.forEach(function (target) { observer.observe(target); });
});
