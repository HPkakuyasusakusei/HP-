// ハンバーガーメニューの開閉のみを扱う最小限のスクリプト
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("site-nav");
  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});
