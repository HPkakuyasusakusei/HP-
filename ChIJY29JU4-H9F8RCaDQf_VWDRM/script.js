document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");

  const updateHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    toggle.classList.toggle("is-active", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
    document.body.classList.toggle("nav-open", willOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
});
