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
