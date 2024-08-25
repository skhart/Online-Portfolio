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
document.getElementById('refreshButton').addEventListener('click', function() {
  // Array of songs with title and Spotify embed link
  const songs = [
      { title: 'Ado - odo', src: 'https://open.spotify.com/embed/track/7z6qHGEKxRtwtYym2epV7l?utm_source=generator' },
      { title: 'Ado - Gira Gira', src: 'https://open.spotify.com/embed/track/0vHCmjN8pepvdu41r69gcB?utm_source=generator' },
      { title: 'Ado - RULE', src: 'https://open.spotify.com/embed/track/3qik29BKjJFcucGkhGbhHj?utm_source=generator' },
      { title: 'Ado - Aishite Aishite', src: 'https://open.spotify.com/embed/track/4gpvY7b9wHA9G1ZsMDu15b?utm_source=generator' },
      { title: 'Gura & Mori Calliope - Q', src: 'https://open.spotify.com/embed/track/51CXAV2GNNL3deCtcXpCeu?utm_source=generator' },
      { title: 'Hakos Baelz - Psycho', src: 'https://open.spotify.com/embed/track/5QXpY51wFeGQ51WdPNMyru?utm_source=generator' },
      { title: 'Ado - RULE', src: 'https://open.spotify.com/embed/track/3qik29BKjJFcucGkhGbhHj?utm_source=generator' },
  ];
  
  // Randomly select a song
  const randomSong = songs[Math.floor(Math.random() * songs.length)];

  // Update the song title and Spotify player source
  document.getElementById('songTitle').textContent = randomSong.title;
  document.getElementById('spotifyPlayer').src = randomSong.src;
});
document.addEventListener("DOMContentLoaded", function() {
  // Select all read-more buttons
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          event.preventDefault();

          // Toggle the visibility and animation of the more-text paragraph
          const moreText = this.previousElementSibling;
          if (moreText.classList.contains("open")) {
              moreText.classList.remove("open");
              this.textContent = "Read More";
          } else {
              moreText.classList.add("open");
              this.textContent = "Read Less";
          }
      });
  });
});

