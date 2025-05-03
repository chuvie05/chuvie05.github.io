const songs = [
    { src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3", title: "Ambient Wave" },
    { src: "https://dn720700.ca.archive.org/0/items/792340-zhr-chill-background-music-3/792340__zhr__chill-background-music-3.mp3", title: "Song 2" }
  ];
  
  let currentSongIndex = 0;
  const player = document.getElementById('audioPlayer');
  const seekBar = document.getElementById('seekBar');
  const titleDisplay = document.getElementById('currentSongTitle');
  
  // Load the first song
  loadSong(currentSongIndex);
  
  function loadSong(index) {
    player.src = songs[index].src;
    titleDisplay.textContent = songs[index].title;
    player.load();
    player.play();
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