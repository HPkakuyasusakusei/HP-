(function () {
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".site-nav a[data-nav]");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  var linkMap = {};
  navLinks.forEach(function (link) {
    linkMap[link.dataset.nav] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = linkMap[entry.target.id];
        if (!link || !entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.classList.remove("is-active"); });
        link.classList.add("is-active");
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();
