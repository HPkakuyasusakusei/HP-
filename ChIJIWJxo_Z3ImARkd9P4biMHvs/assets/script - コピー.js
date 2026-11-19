// 珈琲いと 共通スクリプト: ドリップラインのスクロール進捗 / モバイルナビ開閉
document.addEventListener("DOMContentLoaded", function () {
  var progressPath = document.querySelector(".drip-line-progress");

  function updateDripProgress() {
    if (!progressPath) return;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop;
    var scrollable = doc.scrollHeight - doc.clientHeight;
    var ratio = scrollable > 0 ? scrollTop / scrollable : 0;
    ratio = Math.min(1, Math.max(0, ratio));
    progressPath.style.strokeDashoffset = String(100 - ratio * 100);
  }

  window.addEventListener("scroll", updateDripProgress, { passive: true });
  window.addEventListener("resize", updateDripProgress);
  updateDripProgress();

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
