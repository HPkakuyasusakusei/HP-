(function(){
  var side=document.getElementById('side');
  var btn=side.querySelector('.menu-btn');
  btn.addEventListener('click',function(){
    var open=side.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
})();
