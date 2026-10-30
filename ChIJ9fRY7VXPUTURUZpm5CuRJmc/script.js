(function () {
  var btn = document.querySelector(".menu-btn");
  var panel = document.getElementById("mpanel");
  if (!btn || !panel) return;
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    btn.setAttribute("aria-label", open ? "メニューを開く" : "メニューを閉じる");
    panel.hidden = open;
  });
})();
