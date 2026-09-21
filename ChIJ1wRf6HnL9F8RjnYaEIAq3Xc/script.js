(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // フェードイン(先頭で実行。head側の3秒タイマーは、ここまで正常に動いた場合だけ解除する)
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealIO.observe(el); });
  }
  clearTimeout(window.__revealTimer);

  // 固定の写真注記バーの高さを測り、その上に下部バーを積む・末尾の余白を確保する
  var note = document.querySelector('.hp-photo-note');
  if (note) {
    var setNoteHeight = function () {
      root.style.setProperty('--note-h', note.offsetHeight + 'px');
    };
    setNoteHeight();
    if ('ResizeObserver' in window) {
      new ResizeObserver(setNoteHeight).observe(note);
    } else {
      window.addEventListener('resize', setNoteHeight);
    }
  }

  // スマホ下部バーは「場所」セクションが見えている間は隠す
  var dock = document.querySelector('.dock');
  var info = document.getElementById('info');
  if (dock && info && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(info);
  }

  // 潮位ゲージ(PC)・進捗バー(スマホ)・丼の断面図の点灯
  var sections = ['surface', 'layers', 'menu', 'visit', 'voice', 'info'].map(function (id) {
    return document.getElementById(id);
  });
  var gaugeLinks = document.querySelectorAll('.gauge__list a');
  var bar = document.querySelector('.progress__fill');
  var stage = document.querySelector('.layers__stage');
  var strata = document.querySelectorAll('.stratum');
  var ticking = false;

  function update() {
    ticking = false;
    var vh = window.innerHeight;
    var max = root.scrollHeight - vh;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (bar && !reduce) { bar.style.transform = 'scaleX(' + p.toFixed(4) + ')'; }

    var current = 0;
    sections.forEach(function (el, i) {
      if (el && el.getBoundingClientRect().top <= vh * 0.4) { current = i; }
    });
    gaugeLinks.forEach(function (a, i) {
      if (i === current) { a.setAttribute('aria-current', 'location'); }
      else { a.removeAttribute('aria-current'); }
    });
    root.style.setProperty('--gauge-i', current);

    if (stage && strata.length) {
      var active = 1;
      strata.forEach(function (el, i) {
        if (el.getBoundingClientRect().top <= vh * 0.5) { active = i + 1; }
      });
      stage.setAttribute('data-active', active);
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
