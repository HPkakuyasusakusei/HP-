var t=document.querySelector('.nav-toggle'),n=document.getElementById('gnav');
if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('is-open');t.setAttribute('aria-expanded',o);});}
