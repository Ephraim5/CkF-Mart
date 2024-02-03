var preload=document.querySelector('.preload');
var preloadDuration=3000;

var hidePreload=()=>{
    setTimeout(()=>{
     preload.classList.add('hide');
    },preloadDuration);
}
window.addEventListener('load',hidePreload);

