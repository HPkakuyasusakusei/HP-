(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('mnav'),close=document.querySelector('.mnav-close');
  if(!btn||!nav)return;
  function set(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);document.body.classList.toggle('menu-open',o);document.body.style.overflow=o?'hidden':''}
  btn.addEventListener('click',function(){set(true)});
  close.addEventListener('click',function(){set(false)});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
})();
