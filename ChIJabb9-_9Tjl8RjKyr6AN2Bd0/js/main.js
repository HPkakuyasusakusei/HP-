(function(){
var b=document.querySelector(".menu-btn"),r=document.getElementById("rail");
if(!b||!r)return;
b.addEventListener("click",function(){
var o=r.classList.toggle("open");
b.setAttribute("aria-expanded",o?"true":"false");
});
})();
