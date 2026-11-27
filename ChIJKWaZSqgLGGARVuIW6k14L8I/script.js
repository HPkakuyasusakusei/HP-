/* ==========================================================================
   Cafe Plumeri — 共通スクリプト(5ページ共有)
   - ハンバーガーメニューの開閉
   - body[data-page] と nav[data-nav] を突き合わせて現在地ナビをアクティブ表示
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHamburgerMenu();
    initActiveNav();
  });

  function initHamburgerMenu() {
    var toggle = document.getElementById("hamburger-toggle");
    var nav = document.getElementById("nav-primary");
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
    }
    function openMenu() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "メニューを閉じる");
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // ナビ内のリンクをクリックしたら閉じる(モバイル)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    // Escキーで閉じる
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // デスクトップ幅にリサイズされたら状態をリセット
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 880) closeMenu();
    });
  }

  function initActiveNav() {
    var currentPage = document.body.getAttribute("data-page");
    if (!currentPage) return;
    var links = document.querySelectorAll("[data-nav]");
    links.forEach(function (link) {
      if (link.getAttribute("data-nav") === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
})();
