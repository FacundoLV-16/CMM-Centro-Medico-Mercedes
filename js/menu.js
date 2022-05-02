document.getElementById("btn_menu").addEventListener("click, mostrar_menu");
menu = document.getElementbyid("header");
nav = document.getElementbyid("nav");

function mostrar_menu() {
  menu.classList.toggle("move_conten");
  nav.classList.toggle("move_nav");
}
