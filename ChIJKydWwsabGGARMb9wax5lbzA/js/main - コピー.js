document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("global-nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "メニューを開く");
    });
  });
});
