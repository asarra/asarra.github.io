var vid = document.getElementById("skills_video");
var interval = setInterval(checkTime, 100);
var skillset = document.getElementById("skillset");

//If the video ends, we reset the position to 0
vid.addEventListener('ended',(e)=>{vid.currentTime = 0},false);

//I disable it in JS instead of in HTML/CSS to ensure that skillset will be shown even if JS is deactivated
skillset.style.display = "none";

function checkTime() {
    (vid.currentTime>=24 & vid.currentTime <= 32) ? skillset.style.display = "inline-block" : skillset.style.display = "none";
}