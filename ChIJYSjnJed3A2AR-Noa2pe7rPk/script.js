(function () {
  "use strict";

  // ハンバーガーメニュー開閉
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // index.html#menu のようにハッシュ付きURLで開いた場合、
  // 唐突な中間表示を避けるため一旦トップに戻し、その後対象セクションへ遅延スクロールする
  function scrollToHashThenCleanUrl() {
    var hash = window.location.hash;
    if (!hash) {
      return;
    }

    window.scrollTo(0, 0);

    window.setTimeout(function () {
      var target = null;
      try {
        target = document.querySelector(hash);
      } catch (e) {
        target = null;
      }

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (window.history && window.history.replaceState) {
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search
        );
      }
    }, 200);
  }

  document.addEventListener("DOMContentLoaded", scrollToHashThenCleanUrl);
  window.addEventListener("load", scrollToHashThenCleanUrl);
})();
