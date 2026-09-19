// ハンバーガーメニューの開閉のみを担うシンプルなスクリプト（過剰な演出は追加しない）
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".hamburger");
  var gnav = document.getElementById("gnav");
  if (!btn || !gnav) return;
  btn.addEventListener("click", function () {
    var isOpen = gnav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
