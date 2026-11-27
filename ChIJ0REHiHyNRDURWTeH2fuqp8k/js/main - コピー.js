(function(){
  var b=document.querySelector('.nav-toggle'),n=document.getElementById('gnav');
  if(!b||!n)return;
  b.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'ナビゲーションを閉じる':'ナビゲーションを開く');
  });
})();
