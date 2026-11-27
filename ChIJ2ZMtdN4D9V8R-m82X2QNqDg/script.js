document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニュー
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("site-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // お客様の声(回転寿司レーン風カルーセル)の矢印ボタン
  var track = document.getElementById("reviews-track");
  var prevBtn = document.getElementById("reviews-prev");
  var nextBtn = document.getElementById("reviews-next");

  if (track && prevBtn && nextBtn) {
    var scrollByCard = function (direction) {
      var card = track.querySelector(".review-card");
      var gap = 20;
      var distance = card ? card.offsetWidth + gap : 280;
      track.scrollBy({ left: direction * distance, behavior: "smooth" });
    };
    prevBtn.addEventListener("click", function () { scrollByCard(-1); });
    nextBtn.addEventListener("click", function () { scrollByCard(1); });
  }
});
