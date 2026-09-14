// Cuisine Nakayama — モバイルナビの開閉のみを扱う最小限のスクリプト
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".hamburger");
  var nav = document.querySelector(".mobile-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
});
