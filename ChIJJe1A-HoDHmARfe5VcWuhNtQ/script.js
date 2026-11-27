document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("hamburger");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    if (isOpen) {
      nav.setAttribute("hidden", "");
    } else {
      nav.removeAttribute("hidden");
    }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 859px)").matches) {
        toggle.setAttribute("aria-expanded", "false");
        nav.setAttribute("hidden", "");
      }
    });
  });
});
