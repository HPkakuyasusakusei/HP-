document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".hp-nav-toggle");
  var nav = document.querySelector(".hp-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
});
