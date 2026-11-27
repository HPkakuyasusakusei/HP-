(function () {
  "use strict";

  var hamburger = document.getElementById("hamburger");
  var siteNav = document.getElementById("site-nav");

  if (hamburger && siteNav) {
    hamburger.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      hamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "メニューを開く");
      });
    });
  }

  // 現在地ナビ表示: body[data-page] と各リンクの data-nav を照合する
  var currentPage = document.body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      if (link.getAttribute("data-nav") === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
})();
