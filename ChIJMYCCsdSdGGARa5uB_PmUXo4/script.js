// 現在地のナビリンクに aria-current を付与する(視覚的な現在地表示のため)
document.addEventListener("DOMContentLoaded", function () {
  var current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".global-nav a[href]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.setAttribute("aria-current", "page");
    }
  });
});
