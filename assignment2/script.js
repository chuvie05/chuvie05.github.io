const songs = [
  { src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3", title: "Ambient Wave" },
  { src: "https://dn720700.ca.archive.org/0/items/792340-zhr-chill-background-music-3/792340__zhr__chill-background-music-3.mp3", title: "Song 2" }
];

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

// Controls
function togglePlayPause() {
  if (player.paused) player.play();
  else player.pause();
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
      // Switch mode
      isStudy = !isStudy;
      currentTime = isStudy ? studyDuration : breakDuration;
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = String(Math.floor(currentTime / 60)).padStart(2, '0');
  const secs = String(currentTime % 60).padStart(2, '0');

  if (isStudy) {
    document.getElementById('study-time').textContent = `${mins}:${secs}`;
    document.getElementById('break-time').textContent = "05:00"; // reset display
  } else {
    document.getElementById('break-time').textContent = `${mins}:${secs}`;
    document.getElementById('study-time').textContent = "25:00"; // reset display
  }
}

// Start when page loads
startDualTimer();