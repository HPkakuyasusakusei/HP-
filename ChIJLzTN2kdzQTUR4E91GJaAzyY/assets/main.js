document.documentElement.classList.add('js');
(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('gnav');
  if(b&&n){
    b.addEventListener('click',function(){
      var o=n.classList.toggle('open');
      b.setAttribute('aria-expanded',o);
      b.setAttribute('aria-label',o?'メニューを閉じる':'メニューを開く');
    });
    n.addEventListener('click',function(e){if(e.target.closest('a'))n.classList.remove('open');});
  }
  var v=document.querySelectorAll('.vine');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}});},{threshold:.15});
    v.forEach(function(x){io.observe(x);});
  }else{v.forEach(function(x){x.classList.add('on');});}
})();
