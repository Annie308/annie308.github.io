function show(id){
var d=id&&document.getElementById(id),on=!!(d&&d.classList.contains("detail"));
document.querySelectorAll(".detail").forEach(function(e){e.style.display=(on&&e===d)?"block":"none"});
document.getElementById("home").style.display=on?"none":"block";
if(on){window.scrollTo(0,0)}else if(d){d.scrollIntoView()}else{window.scrollTo(0,0)}
}
document.addEventListener("click",function(e){
var a=e.target.closest&&e.target.closest('a[href^="#"]');
if(!a||a.getAttribute("href")==="#")return;
e.preventDefault();
show(a.getAttribute("href").slice(1));
});
try{addEventListener("hashchange",function(){show(location.hash.slice(1))});show(location.hash.slice(1))}catch(x){show("")}
(function(){var lb=document.createElement("div");lb.id="lb";lb.innerHTML='<button type="button">Close</button><img alt="">';document.body.appendChild(lb);var im=lb.querySelector("img");
function close(){lb.style.display="none";document.body.style.overflow=""}
document.addEventListener("click",function(e){var z=e.target.closest&&e.target.closest(".zoombtn");
if(z){var s=z.querySelector("img");im.src=s.src;im.alt=s.alt;lb.style.display="block";document.body.style.overflow="hidden";lb.scrollTop=0;lb.scrollLeft=0;return}
if(e.target===lb||(e.target.tagName==="BUTTON"&&lb.contains(e.target)))close()});
addEventListener("keydown",function(ev){if(ev.key==="Escape")close()})})();
