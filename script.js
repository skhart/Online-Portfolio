// script.js
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const section1 = document.querySelector('#section1');
  const section2 = document.querySelector('#section2');
  const section2Top = section2.offsetTop;
  const section1Top = section1.offsetTop;

  if (window.scrollY >= section1Top) {
      navbar.classList.add('navbar-dark');
      navbar.classList.remove('navbar-light');
  }else if (window.scrollY <= section2Top){
      navbar.classList.add('navbar-light');
      navbar.classList.remove('navbar-dark');
  }
});
