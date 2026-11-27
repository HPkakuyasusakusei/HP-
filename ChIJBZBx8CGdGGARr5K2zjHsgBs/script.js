// GOODIES FLOWER 試作サイト 共通スクリプト(章番号ナビ・しおり型CTAの開閉のみ)
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var bookmarkTab = document.getElementById("bookmarkTab");
  var bookmarkCta = document.getElementById("bookmarkCta");

  if (bookmarkTab && bookmarkCta) {
    bookmarkTab.addEventListener("click", function () {
      var isOpen = bookmarkCta.classList.toggle("is-open");
      bookmarkTab.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.addEventListener("click", function (event) {
      if (!bookmarkCta.contains(event.target)) {
        bookmarkCta.classList.remove("is-open");
        bookmarkTab.setAttribute("aria-expanded", "false");
      }
    });
  }
});
