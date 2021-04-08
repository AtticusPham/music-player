// Select all the elements in the html page
// And assign them to a variable
let nowPlaying = document.querySelector(".now-playing");
let trackArt = document.querySelector(".track-art");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

let prevBtn = document.querySelector(".prev-track");
let playpauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector("next-track");

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