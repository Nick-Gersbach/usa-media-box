const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", function(){
  document.querySelector(".main-nav").classList.toggle('show')
})