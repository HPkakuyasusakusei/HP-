(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    var wide = window.matchMedia('(min-width:960px)');

    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    };

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });

    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener('click', function (e) {
      var el = e.target;
      while (el && el !== nav) {
        if (el.tagName === 'A') {
          setOpen(false);
          return;
        }
        el = el.parentNode;
      }
    });

    var onWide = function (e) {
      if (e.matches) setOpen(false);
    };
    if (wide.addEventListener) {
      wide.addEventListener('change', onWide);
    } else if (wide.addListener) {
      wide.addListener(onWide);
    }
  }

  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add('is-in');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  for (var j = 0; j < items.length; j++) io.observe(items[j]);
})();
