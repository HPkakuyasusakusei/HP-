document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // 送信先メールアドレス未確定のため、入力内容をmailto下書きとして開く簡易実装
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.name.value || "";
      var tel = contactForm.tel.value || "";
      var method = contactForm.method.value || "";
      var topic = contactForm.topic.value || "";
      var subject = encodeURIComponent("【HPお問い合わせ】" + topic);
      var body = encodeURIComponent(
        "お名前: " + name + "\n" +
        "お電話番号: " + tel + "\n" +
        "ご希望の連絡方法: " + method + "\n" +
        "お問い合わせ内容: " + topic + "\n"
      );
      window.location.href = "mailto:info@puppyland-kenken.example?subject=" + subject + "&body=" + body;
    });
  }
});
