var preload=document.querySelector('.preload');
var preloadDuration=4000;

var hidePreload=()=>{
    setTimeout(()=>{
     preload.classList.add('hide');
    },preloadDuration);
}
window.addEventListener('load',hidePreload);

