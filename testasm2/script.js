const songs = [
    { src: 'testasm2/music/763527__lolamoore__chill-lo-fi-melancholy-for-reflection.mp3', title: 'Chill Lo Fi Melancholy For Reflection' },
    { src: 'SONG_LINK_2', title: 'Forest Whisper' },
    { src: 'SONG_LINK_3', title: 'Focus Piano' }
     //MP3 URLs
  ];
  
  const backgrounds = [
    'https://archive.org/details/13206225-3840-2160-60fps/13163069_3840_2160_60fps.mp4',
    'https://archive.org/details/13206225-3840-2160-60fps/13206225_3840_2160_60fps.mp4', 
    'https://archive.org/details/13206225-3840-2160-60fps/1171471-hd_1920_1080_30fps.mp4',
    'https://archive.org/details/13206225-3840-2160-60fps/1484703-hd_1920_1080_25fps.mp4', 
    'https://archive.org/details/13206225-3840-2160-60fps/2248541-uhd_3840_2160_24fps.mp4',
    'https://archive.org/details/13206225-3840-2160-60fps/3163534-uhd_3840_2160_30fps.mp4', 
    'https://archive.org/details/13206225-3840-2160-60fps/3850436-hd_1920_1080_24fps.mp4',
    'https://archive.org/details/13206225-3840-2160-60fps/3969469-uhd_3840_2160_25fps.mp4', 
    'https://archive.org/details/13206225-3840-2160-60fps/855633-hd_1920_1080_25fps.mp4', 
    'https://archive.org/details/13206225-3840-2160-60fps/855633-hd_1920_1080_25fps.mp4' 
    //video URLs
  ];
  
  let currentSong = 0;
  let currentBg = 0;
  const player = document.getElementById('audioPlayer');
  const bgVideo = document.getElementById('bgVideo');
  
  function togglePopup() {
    const popup = document.getElementById('musicPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  }
  
  function playSong(index) {
    currentSong = index;
    player.src = songs[index].src;
    player.play();
  }
  
  function togglePlayPause() {
    if (player.paused) player.play();
    else player.pause();
  }
  
  function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    playSong(currentSong);
  }
  
  function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    playSong(currentSong);
  }
  
  function toggleLoop() {
    player.loop = !player.loop;
  }
  
  function changeBackground() {
    currentBg = (currentBg + 1) % backgrounds.length;
    bgVideo.src = backgrounds[currentBg];
  }