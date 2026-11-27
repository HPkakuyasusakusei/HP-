// モバイル用グローバルナビの開閉のみを扱う（他ページ共通）
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("global-nav");
  var overlay = document.getElementById("nav-overlay");

  if (!toggle || !nav) {
    return;
  }

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    if (overlay) {
      overlay.classList.remove("is-open");
    }
    document.body.style.overflow = "";
  }

  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    if (overlay) {
      overlay.classList.add("is-open");
    }
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) {
      closeNav();
    }
  });
});
