// ハンバーガーメニューの開閉と現在ページのナビ強調のみを扱う
(function () {
  var toggle = document.getElementById("hamburgerBtn");
  var nav = document.getElementById("siteNav");

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

  var currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("a[data-nav-link]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
