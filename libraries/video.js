var skillset = document.getElementById("skillset");
var thumbnail = document.getElementById('thumbnail');
var id = 'FS1ywr8v1w0';
var player;
var interval = setInterval(checkTime, 100);

function loadThumbnail(){
    //loads thumbnail with maximum image quality directly, if it exists, faster
	  //thumbnail.src="https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
    //temporarily disabled because the new video thumbnail is not available yet
    thumbnail.src="https://img.youtube.com/vi/" + "XbJKyNycJHc" + "/maxresdefault.jpg";
}

function loadThumbnailFlexibler(){
  //loads a thumbnail with low image quality slowly, but it is safe and flexible
  var url = "https://www.youtube.com/oembed?url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + id) + "&format=json";
  fetch(url).then(function(response){return response.json()}).then(function(jsonResponse){
	  thumbnail.src=jsonResponse.thumbnail_url;
	});
}

function loadVideo(){
  // modified ytplayer code: https://developers.google.com/youtube/player_parameters#IFrame_Player_API
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  thumbnail.remove();
}

  function onYouTubePlayerAPIReady() {
      player = new YT.Player('skills_video', {
          height: '1080',
          width: '1920',
          host: 'https://www.youtube-nocookie.com',
          videoId: id,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
      });
  }

  function onPlayerReady(event) {
    event.target.setVolume(100);
    event.target.playVideo();
  }

  //If the video ends, we reset the position to 0
  function onPlayerStateChange(event) {
      if(event.data === 0) {
          player.seekTo(0);
          player.pauseVideo();
    }
  }

  function checkTime() {
    if (player) (player.playerInfo.currentTime>=24 & player.playerInfo.currentTime <= 38) ? skillset.style.display = "inline-block" : skillset.style.display = "none";
  }

//I disable it in JS instead of in HTML/CSS to ensure that skillset will be shown even if JS is deactivated
skillset.style.display = "none";

loadThumbnail();