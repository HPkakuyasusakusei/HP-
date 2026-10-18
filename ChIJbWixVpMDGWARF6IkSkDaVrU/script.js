// ドッグサロンワンワグタイム試作HP 共通スクリプト
// ハンバーガーメニュー開閉 + アンカースクロール(固定ヘッダー分オフセット)対応

(function () {
  "use strict";

  function initHamburger() {
    var hamburger = document.getElementById("hamburger-btn");
    var nav = document.getElementById("site-nav");
    if (!hamburger || !nav) return;

    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  function getHeaderOffset() {
    var header = document.querySelector(".site-header");
    return header ? header.offsetHeight : 0;
  }

  // 固定ヘッダー分のオフセットを考慮してアンカー位置へスムーズスクロールする
  function scrollToHash(hash) {
    if (!hash || hash === "#") return;
    var target;
    try {
      target = document.querySelector(hash);
    } catch (err) {
      return;
    }
    if (!target) return;

    var top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset() - 16;
    window.scrollTo({ top: top < 0 ? 0 : top, behavior: "smooth" });
  }

  // ハッシュ付きURLで直接開いた場合、まずページ最上部を表示してからアンカーへスクロールする
  function initDeepLinkScroll() {
    if (!window.location.hash) return;
    var hash = window.location.hash;

    window.scrollTo(0, 0);

    window.setTimeout(function () {
      scrollToHash(hash);
    }, 80);
  }

  // 同一ページ内のアンカーリンククリック時も、オフセットを考慮したスムーズスクロールにする
  function initInPageAnchorClicks() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest('a[href*="#"]') : null;
      if (!link) return;

      var url;
      try {
        url = new URL(link.getAttribute("href"), window.location.href);
      } catch (err) {
        return;
      }

      if (url.pathname !== window.location.pathname || !url.hash) return;

      var target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      scrollToHash(url.hash);
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", url.hash);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHamburger();
    initInPageAnchorClicks();
    initDeepLinkScroll();
  });
})();
