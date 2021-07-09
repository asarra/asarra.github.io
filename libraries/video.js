var interval = setInterval(checkTime, 100);
var skillset = document.getElementById("skillset");



// modified ytplayer code: https://developers.google.com/youtube/player_parameters#IFrame_Player_API
var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubePlayerAPIReady() {
      player = new YT.Player('skills_video', {
          height: '1080',
          width: '1920',
          videoId: 'aPrGES-PcQ4',
          events: {
            //onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
      });}

    //If the video ends, we reset the position to 0
    function onPlayerStateChange(event) {
        if(event.data === 0) {
            player.seekTo(0);
            player.pauseVideo();
    }
  }


//I disable it in JS instead of in HTML/CSS to ensure that skillset will be shown even if JS is deactivated
skillset.style.display = "none";

function checkTime() {
        (player.playerInfo.currentTime>=24 & player.playerInfo.currentTime <= 32) ? skillset.style.display = "inline-block" : skillset.style.display = "none";
}
