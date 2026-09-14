// ハンバーガーメニューの開閉のみを担当(スマホ幅でのナビ表示切替)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  var header = document.querySelector(".site-header");

  // ヘッダーの実描画高さをCSS変数に反映し、ナビの位置ズレを防ぐ
  function syncHeaderHeight() {
    if (!header) return;
    document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
    });
  });
});
