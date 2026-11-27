// ハンバーガーメニューの開閉と、アンカー選択時の自動クローズのみを扱う小さなスクリプト
(function () {
  var toggle = document.getElementById("navToggle");
  var drawer = document.getElementById("navDrawer");
  if (!toggle || !drawer) return;

  function closeDrawer() {
    drawer.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var isOpen = drawer.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });
})();
