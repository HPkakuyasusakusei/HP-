// CAFE&BAKE Lily's — script.js
// モバイルナビの開閉、ギャラリーのライトボックス表示のみを扱う（過剰な演出は追加しない）
document.addEventListener("DOMContentLoaded", function () {
  // ---- ハンバーガーメニュー開閉 ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("global-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "メニューを開く");
      });
    });
  }

  // ---- ギャラリー ライトボックス ----
  var lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  var lightboxImg = lightbox.querySelector("img");
  var lightboxCaption = lightbox.querySelector(".lightbox-caption");
  var lightboxClose = lightbox.querySelector(".lightbox-close");
  var triggers = document.querySelectorAll("[data-lightbox-src]");

  function openLightbox(src, alt, caption) {
    lightboxImg.setAttribute("src", src);
    lightboxImg.setAttribute("alt", alt || "");
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.setAttribute("src", "");
    document.body.style.overflow = "";
  }

  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(
        btn.getAttribute("data-lightbox-src"),
        btn.getAttribute("data-lightbox-alt"),
        btn.getAttribute("data-lightbox-caption")
      );
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
