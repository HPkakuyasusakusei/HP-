document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("global-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  if (track && dotsWrap) {
    const cards = Array.from(track.children);
    const dots = Array.from(dotsWrap.children);
    const prevBtn = document.querySelector(".carousel-arrow.prev");
    const nextBtn = document.querySelector(".carousel-arrow.next");

    const scrollToIndex = (i) => {
      const card = cards[i];
      if (card) {
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
      }
    };

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => scrollToIndex(i));
    });

    const setActiveDot = () => {
      const trackLeft = track.scrollLeft;
      let closest = 0;
      let minDiff = Infinity;
      cards.forEach((card, i) => {
        const diff = Math.abs(card.offsetLeft - track.offsetLeft - trackLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closest = i;
        }
      });
      dots.forEach((d, i) => d.classList.toggle("is-active", i === closest));
    };

    track.addEventListener(
      "scroll",
      () => window.requestAnimationFrame(setActiveDot),
      { passive: true }
    );

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -track.clientWidth * 0.85, behavior: "smooth" });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: track.clientWidth * 0.85, behavior: "smooth" });
      });
    }
  }
});
