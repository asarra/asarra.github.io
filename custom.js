const scale_factor=10, prefix=3;
var dialogue=document.getElementById("greeting");
var personal = document.getElementById("personal");
var hero = document.getElementById("hero");
var accounts = document.getElementById("accounts");
var menu = document.getElementById("menu");
var superToggle = function(element, class0, class1) {
    if(!element.classList.toggle(class0)){
        element.classList.toggle(class1);
    }
}

window.onload = function() {
    setTimeout(function(){
        this.personal.style.transform="translate(0,1em)";
        this.hero.style.transform="translate(0,1em)";
        this.accounts.style.transform="translate(0,1em)";
    },1000);
    dialogue.style.cssText="position:relative;font-size:2.5em";
    setTimeout(function(){
        this.personal.style.transform="translate(0,0)";
        this.hero.style.transform="translate(0,0)";
        this.accounts.style.transform="translate(0,0)";
        dialogue.classList.remove('fa-hand-peace');    
        dialogue.classList.add("fa-eye");
        dialogue.innerHTML=" I am ...";},2000);
    setTimeout(function(){        
        dialogue.classList.remove('fa-eye');
        dialogue.classList.add('fa-smile-beam');
        dialogue.classList.add('add_hr');
        dialogue.innerHTML=" Mehmet-Ali!";},4000);
}


document.onkeydown = function _() {
    e = event.keyCode || window.event;
    switch(e){
        case 32:
            //Leertaste
            window.scrollBy({top: prefix*10*scale_factor,left: 0});
            break;
        case 38:
            window.scrollBy({top: -1*prefix*scale_factor,left: 0});
            break;
        case 40:
            //nach unten
            window.scrollBy({top: prefix*scale_factor,left: 0});
            superToggle(personal,"turn_right", "turn_back");
            superToggle(hero,"turn_right", "turn_back");
            superToggle(accounts,"turn_right", "turn_back");
            break;
        case 37:
            //nach links
            window.scrollBy({top: 0,left: -1*prefix*scale_factor});
            superToggle(personal,"turn_right", "turn_back");
            superToggle(hero,"turn_right", "turn_back");
            superToggle(accounts,"turn_right", "turn_back");
            break;
        case 39:
            //nach rechts
            window.scrollBy({top: 0,left: prefix*scale_factor});            
            superToggle(personal,"turn_right", "turn_back");
            superToggle(hero,"turn_right", "turn_back");
            superToggle(accounts,"turn_right", "turn_back");
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


menu.addEventListener('click', function(event) {
    event.stopPropagation();
    menu.classList.toggle('is-active');
});

window.onscroll = function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}