// ナビゲーション開閉とご予約フォームの仮送信(送信先未確定のためダミー表示)のみを扱う
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
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
  }

  var form = document.querySelector("#reservation-form");
  var success = document.querySelector("#reservation-success");

  if (form && success) {
    form.addEventListener("submit", function (e) {
      // 送信先(宛先メール/予約システム)が未確定のため、本番までは仮送信表示に留める
      e.preventDefault();
      success.classList.add("is-visible");
      success.setAttribute("tabindex", "-1");
      success.focus();
      form.reset();
    });
  }
});
