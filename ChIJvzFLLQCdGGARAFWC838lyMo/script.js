(function () {
  var topbar = document.querySelector(".topbar");
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (!topbar || !toggle || !links) return;

  function closeMenu() {
    topbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var isOpen = topbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();

(function () {
  // 5ページ共通ヘッダーで現在地のナビを示すため、body の data-page と一致する data-nav に is-active を付与する
  var page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll("[data-nav]").forEach(function (el) {
    if (el.dataset.nav === page) el.classList.add("is-active");
  });
})();
