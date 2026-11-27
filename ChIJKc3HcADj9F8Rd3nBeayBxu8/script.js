// ハンバーガーメニューの開閉(aria-expandedをボタンの状態と同期させるため)
(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // ナビ内リンクをタップしたら自動で閉じる(スマホでのスクロール導線を妨げないため)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  // デスクトップ幅にリサイズされたら開閉状態をリセットする
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) closeNav();
  });
})();

// 各セクションの控えめなフェードイン(design.mdの「湯気の上昇フェード程度」に留める)
(function () {
  var targets = document.querySelectorAll(
    ".commit-card, .menu-card, .voice-card, .owner__media, .owner__text, .interior__layout > *"
  );
  if (!targets.length) return;

  targets.forEach(function (el) { el.classList.add("fade-in"); });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) { observer.observe(el); });
})();
