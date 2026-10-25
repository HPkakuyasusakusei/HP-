// ビストロ・シェ・ミリュー 共通スクリプト(ハンバーガーメニュー開閉のみ)
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".cm-hamburger");
  var header = document.querySelector(".cm-header");
  if (!btn || !header) return;
  btn.addEventListener("click", function () {
    var expanded = header.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", expanded ? "true" : "false");
  });
  document.querySelectorAll(".cm-nav__list a").forEach(function (a) {
    a.addEventListener("click", function () {
      header.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
});
