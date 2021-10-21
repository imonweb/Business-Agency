/*  Navbar start */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('change')
  menu.classList.toggle('change')
})
/*  Navbar end */