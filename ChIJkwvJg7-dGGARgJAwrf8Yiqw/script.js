// ハンバーガーメニューの開閉のみを扱う最小限のJS
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".hamburger");
  var nav = document.querySelector(".global-nav");
  var overlay = document.querySelector(".nav-overlay");

  if (!toggle || !nav || !overlay) return;

  function closeNav() {
    nav.classList.remove("is-open");
    overlay.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    nav.classList.add("is-open");
    overlay.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    if (nav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.addEventListener("click", closeNav);

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
});
