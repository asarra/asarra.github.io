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


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}




function bright(){
    setCookie("mode","bright",7);
    document.body.style.backgroundColor="#666";
    personal.getElementsByTagName("path")[0].setAttribute("fill","orange");
    accounts.getElementsByTagName("path")[0].style="fill:orange";//setAttribute("fill","black");
    document.getElementsByTagName("img")[0].style="opacity:1";
    document.getElementsByTagName("img")[1].style="opacity:1";
    hero.getElementsByTagName("path")[0].style="opacity:1";//setAttribute("fill","black");
    accounts.getElementsByTagName("path")[0].style="opacity:1";//setAttribute("fill","black");    
}
function dark(){
    setCookie("mode","dark",7);
    document.body.style.backgroundColor="#222";
    personal.getElementsByTagName("path")[0].setAttribute("fill","#FF8C00");
    accounts.getElementsByTagName("path")[0].style="fill:#FF8C00";//setAttribute("fill","black");
    document.getElementsByTagName("img")[0].style="opacity:0.3";
    document.getElementsByTagName("img")[1].style="opacity:0.3";
    hero.getElementsByTagName("path")[0].style="opacity:0.6";//setAttribute("fill","black");
    accounts.getElementsByTagName("path")[0].style="opacity:0.8";//setAttribute("fill","black");    
}
function original(){
    setCookie("mode","original",7);
    document.body.style.backgroundColor="#444";
    personal.getElementsByTagName("path")[0].setAttribute("fill","orange");
    accounts.getElementsByTagName("path")[0].style="fill:orange";//setAttribute("fill","black");
    document.getElementsByTagName("img")[0].style="opacity:1";
    document.getElementsByTagName("img")[1].style="opacity:1";
    hero.getElementsByTagName("path")[0].style="opacity:1";//setAttribute("fill","black");
    accounts.getElementsByTagName("path")[0].style="opacity:1";//setAttribute("fill","black");
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

window.onload = function() {
    var mode = getCookie("mode");

    if (mode){
        if (mode==="bright"){
            bright();
        }
        else if (mode==="dark"){
            dark();
        }
        else if (mode==="original"){
            original();
        }
    }

    setTimeout(function(){
        personal.style.transform="translate(0,1em)";
        hero.style.transform="translate(0,1em)";
        accounts.style.transform="translate(0,1em)";
    },1000);
    dialogue.style.cssText="position:relative;font-size:2.5em";
    setTimeout(function(){
        personal.style.transform="";
        hero.style.transform="";
        accounts.style.transform="";
        dialogue.classList.remove('fa-hand-peace');    
        dialogue.classList.add("fa-eye");
        dialogue.innerHTML=" I am ...";},2000);
    setTimeout(function(){
        dialogue.classList.remove('fa-eye');
        dialogue.classList.add('fa-smile-beam');
        dialogue.classList.add('add_hr');
        dialogue.innerHTML=" Mehmet-Ali!";},4000);
}