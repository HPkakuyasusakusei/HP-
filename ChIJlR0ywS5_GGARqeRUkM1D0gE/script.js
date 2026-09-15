// ハンバーガーメニューの開閉のみを担当する軽量スクリプト
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburgerBtn");
  var drawer = document.getElementById("navDrawer");
  var backdrop = document.getElementById("navBackdrop");

  if (!hamburger || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", function () {
    var isOpen = drawer.classList.contains("is-open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  backdrop.addEventListener("click", closeDrawer);

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });
});
