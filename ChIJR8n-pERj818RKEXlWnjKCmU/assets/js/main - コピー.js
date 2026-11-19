// スマホ幅で折りたたむグローバルナビの開閉のみを担当する(過剰な演出は追加しない)
(function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("global-nav");
  if (!toggle || !nav) return;

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
})();
