document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("siteHeader");
  var nav = document.getElementById("siteNav");
  var hamburger = document.getElementById("hamburgerBtn");
  var body = document.body;

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      body.classList.toggle("nav-open", isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
      });
    });
  }

  var currentPage = body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      if (link.getAttribute("data-nav") === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
});
