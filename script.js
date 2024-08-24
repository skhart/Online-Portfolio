window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const section1 = document.querySelector('#section1');
  const section2 = document.querySelector('#section2');
  const section2Top = section2.offsetTop;

  // When the scroll position is below the top of Section 2, apply navbar-dark
  if (window.scrollY >= section2Top) {
      navbar.classList.add('navbar-dark');
      navbar.classList.remove('navbar-light');
  } 
  // When the scroll position is above Section 2, revert to navbar-light
  else {
      navbar.classList.add('navbar-light');
      navbar.classList.remove('navbar-dark');
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const songs = [
      { title: "Odo", src: "https://open.spotify.com/track/7z6qHGEKxRtwtYym2epV7l?si=ee56c83f32f345a3" },
      { title: "Usseewa", src: "https://open.spotify.com/track/6EzZn96uOc9JsVGNRpx06n?si=cf2ac03f5e514ed8" },
      { title: "Gira Gira", src: "https://open.spotify.com/track/0vHCmjN8pepvdu41r69gcB?si=dc7a8d8a85044e16" }
  ];

  function setRandomSong() {
      const randomIndex = Math.floor(Math.random() * songs.length);
      const selectedSong = songs[randomIndex];
      const audioPlayer = document.getElementById("audioPlayer");
      const audioSource = document.getElementById("audioSource");
      const songTitle = document.getElementById("songTitle");

      audioSource.src = selectedSong.src;
      audioPlayer.load();
      audioPlayer.play();

      songTitle.textContent = `Ado - ${selectedSong.title}`;
  }

  document.getElementById("refreshButton").addEventListener("click", setRandomSong);

  // Set an initial song when the page loads
  setRandomSong();
});

