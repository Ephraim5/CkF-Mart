var preload=document.querySelector('.preload');
var preloadDuration=1500;

var hidePreload=()=>{
    setTimeout(()=>{
     preload.classList.add('hide');
    },preloadDuration);
}
window.addEventListener('load',hidePreload);

