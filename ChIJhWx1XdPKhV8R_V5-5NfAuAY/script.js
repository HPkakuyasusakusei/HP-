const nav = document.querySelector('.site-nav');
const btn = document.querySelector('.nav-toggle');
if (nav && btn) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
