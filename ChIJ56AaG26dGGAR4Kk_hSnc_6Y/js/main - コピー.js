// おうちネイル 試作サイト共通スクリプト(モバイルナビ / フローティング予約ボタンの開閉)
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var floatReserve = document.getElementById("floatReserve");
  var floatTrigger = document.getElementById("floatReserveTrigger");
  if (floatReserve && floatTrigger) {
    floatTrigger.addEventListener("click", function () {
      var isOpen = floatReserve.classList.toggle("is-open");
      floatTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.addEventListener("click", function (event) {
      if (!floatReserve.contains(event.target)) {
        floatReserve.classList.remove("is-open");
        floatTrigger.setAttribute("aria-expanded", "false");
      }
    });
  }
});
