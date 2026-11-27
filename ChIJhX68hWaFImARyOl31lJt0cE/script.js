// ハンバーガーメニューの開閉のみを担当(演出過多を避け最小限の挙動に留める)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var scrim = document.querySelector(".nav-scrim");
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove("is-open");
    if (scrim) scrim.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function toggleNav() {
    var isOpen = nav.classList.toggle("is-open");
    if (scrim) scrim.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.addEventListener("click", toggleNav);
  if (scrim) scrim.addEventListener("click", closeNav);
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
});
