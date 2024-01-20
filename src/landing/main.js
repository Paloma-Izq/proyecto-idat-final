const container = document.querySelector('.scroll-container');
const items = document.querySelectorAll('.scroll-item');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: 'smooth'
  });
});

//pop up

document.querySelector("#show-register-popup").addEventListener("click", function(){
  document.querySelector(".register-popup").classList.add("active");
});

document.querySelector(".register-popup .register-close-btn").addEventListener("click", function(){
  document.querySelector(".register-popup").classList.remove("active");
});

// toggle menu

function toggleMenu(){
  const menu = document.getElementById("menu")
  menu.classList.toggle("overlay-menu--is-open")
}