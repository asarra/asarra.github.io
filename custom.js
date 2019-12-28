var dialogue=document.getElementById("greeting")
dialogue.style.cssText="position:relative;font-size:2.5em";
setTimeout(function(){
    dialogue.classList.remove('fa-hand-peace');    
    dialogue.classList.add("fa-eye");
    dialogue.innerHTML=" I am glad to see you!";},2000);
setTimeout(function(){
    dialogue.classList.remove('fa-eye');
    dialogue.classList.add('fa-smile-beam');
    dialogue.innerHTML=" I am Mehmet-Ali!";},4000);
const scale_factor=10, prefix=3;
document.onkeydown = function _() {
    e = event.keyCode || window.event;
    switch(e){
        case 32:
            window.scrollBy({top: prefix*10*scale_factor,left: 0});
            break;
        case 38:
            window.scrollBy({top: -1*prefix*scale_factor,left: 0});
            break;
        case 40:
            window.scrollBy({top: prefix*scale_factor,left: 0});
            break;
        case 37:
            window.scrollBy({top: 0,left: -1*prefix*scale_factor});
            break;
        case 39:
            window.scrollBy({top: 0,left: prefix*scale_factor});
            break;
    }
}
function bright(){
    document.body.style.backgroundColor="#666";
}
function dark(){
    document.body.style.backgroundColor="#000";
}
function original(){
    document.body.style.backgroundColor="#444";
}

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});