document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector(".hamburger-btn");
  var nav = document.getElementById("global-nav");

  if (!toggleBtn || !nav) {
    return;
  }

  toggleBtn.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // ページ遷移後もメニューが開いたままにならないよう、リンク選択時に閉じる
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
});
