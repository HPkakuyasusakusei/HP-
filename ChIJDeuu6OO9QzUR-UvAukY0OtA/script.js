document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 現在地ナビのハイライト(plan.md 5-3節: body[data-page]に連動)
  var page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.main-nav a[data-nav]').forEach(function (link) {
      if (link.getAttribute('data-nav') === page) {
        link.classList.add('is-active');
      }
    });
  }

  var noteClose = document.querySelector('.hp-photo-note-close');
  var note = document.querySelector('.hp-photo-note');
  if (noteClose && note) {
    noteClose.addEventListener('click', function () {
      note.classList.add('is-hidden');
    });
  }
});
