/**     scroll     **/

window.onscroll = function () {
  scroll = document.documentElement.scrollTop;

  header = document.getElementById("header");

  if (scroll > 10) {
    header.classList.add("nav_mod");
  } else if (scroll < 10) {
    header.classList.remove("nav_mod");
  }
};

/**     menu hamburguesa     **/

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu() {
  menu.classList.toggle("move_content");
  body.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});
