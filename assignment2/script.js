// queue song
const songs = [
  { src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3", title: "Ambient Wave" },
  { src: "https://dn720700.ca.archive.org/0/items/792340-zhr-chill-background-music-3/792340__zhr__chill-background-music-3.mp3", title: "Chill" },
  { src: "https://dn721705.ca.archive.org/0/items/763527-lolamoore-chill-lo-fi-melancholy-for-reflection_202505/763527__lolamoore__chill-lo-fi-melancholy-for-reflection.mp3", title: "Lolamoore Chill Lo-fi" }
];

// Settings of song that is current played
let currentSongIndex = 0;
const player = document.getElementById('audioPlayer');
const seekBar = document.getElementById('seekBar');
const titleDisplay = document.getElementById('currentSongTitle');

// Load the first song
seekBar.value = 0;
seekBar.max = 0;
loadSong(currentSongIndex);

function loadSong(index) {
  player.src = songs[index].src;
  titleDisplay.textContent = songs[index].title;
  player.load();
  player.play().catch(e => {
    console.log("Autoplay blocked, waiting for user gesture:", e);
  });
}

// Media controls
function togglePlayPause() {
  const icon = document.getElementById('playPauseIcon');

  if (player.paused) {
    player.play();
    icon.src = "https://img.icons8.com/ios-glyphs/FFFFFF/30/pause--v2.png";
    icon.alt = "Pause";
  } else {
    player.pause();
    icon.src = "https://img.icons8.com/ios-glyphs/30/FFFFFF/play--v2.png"; 
    icon.alt = "Play";
  }
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
}

function toggleLoop() {
  player.loop = !player.loop;
}

// Seek Bar
player.addEventListener('timeupdate', () => {
  seekBar.max = Math.floor(player.duration);
  seekBar.value = Math.floor(player.currentTime);
});

seekBar.addEventListener('input', () => {
  player.currentTime = seekBar.value;
});

// Timer
let studyDuration = 25 * 60; // 25 minutes
let breakDuration = 5 * 60;  // 5 minutes
let currentTime = studyDuration;
let isStudy = true;
let timerInterval;

function startDualTimer() {
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateTimerDisplay();
    } else {
      // Switch timer
      isStudy = !isStudy;
      currentTime = isStudy ? studyDuration : breakDuration;
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  // Convert the current time format (minutes and seconds)
  const mins = String(Math.floor(currentTime / 60)).padStart(2, '0');
  const secs = String(currentTime % 60).padStart(2, '0');

  if (isStudy) {
    document.getElementById('study-time').textContent = `${mins}:${secs}`;
    document.getElementById('break-time').textContent = "05:00"; // reset timer
  } else {
    document.getElementById('break-time').textContent = `${mins}:${secs}`;
    document.getElementById('study-time').textContent = "25:00"; // reset timer
  }
}

// Start when page loads
startDualTimer();