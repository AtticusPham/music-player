// Select all the elements in the html page
// And assign them to a variable
let nowPlaying = document.querySelector(".now-playing");
let trackArt = document.querySelector(".track-art");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

let prevTrack = document.querySelector(".prev-track");
let playpauseBtn = document.querySelector(".playpause-track");
let nextTrack = document.querySelector("next-track");

let seekSlider = document.querySelector(".seek_slider");
let volumnSlider = document.querySelector(".volumn_slider");
let currTime = document.querySelector("current-time");
let totalDuration = document.querySelector("total-duration");

// Specify globally used values
let trackIndex = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let currTrack = document.createElement("audio");

// Define the list of tracks that have to be played
let track_list = [
    {
      name: "Night Owl",
      artist: "Broke For Free",
      image: "Image URL",
      path: "Night_Owl.mp3"
    },
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "Image URL",
      path: "Enthusiast.mp3"
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "Image URL",
      path: "Shipping_Lanes.mp3",
    },
];

function loadTrack(trackIndex) {
  // clear the previous seek timer
  clearInterval(updateTimer);
  resetValue();

  // load a new track
  currTrack.src = track_list[trackIndex].path;
  currTrack.load();

  //update details of the track
  trackArt.style.backgroundImage = "url(" + track_list[trackIndex].image + ")";
  trackName.textContent = track_list[trackIndex].name;
  trackArtist = track_list[trackIndex].artist;
  nowPlaying.textContent = "PLAYING" + (trackIndex + 1) + " OF " + track_list.length;

  //set an interval of 1000 miliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // move to the next track if the current finishes playing 
  // use the ended event
  currTrack.addEventListener("ended", nextTrack);
  
  // apply a random background color
  random_bg_color();
}
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  
  // Construct a color withe the given values
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  
  // Set the background to the new color
  document.body.style.background = bgColor;
}
// function to reset all values to their default
function resetValue() {
  currTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
  seekSlider.value = 0;
}