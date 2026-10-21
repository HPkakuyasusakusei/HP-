document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.querySelector(".nav-panel");
  var overlay = document.querySelector(".nav-overlay");

  function closeNav() {
    panel.classList.remove("is-open");
    overlay.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function openNav() {
    panel.classList.add("is-open");
    overlay.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }
  if (toggle && panel && overlay) {
    toggle.addEventListener("click", function () {
      panel.classList.contains("is-open") ? closeNav() : openNav();
    });
    overlay.addEventListener("click", closeNav);
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  var fab = document.querySelector(".floating-cta");
  var fabMain = document.querySelector(".floating-cta__main");
  if (fab && fabMain) {
    fabMain.addEventListener("click", function () {
      fab.classList.toggle("is-open");
    });
    document.addEventListener("click", function (e) {
      if (!fab.contains(e.target)) {
        fab.classList.remove("is-open");
      }
    });
  }
});
