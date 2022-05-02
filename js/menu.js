window.onscroll = function () {
  scroll = document.documentElement.scrollTop;

  header = document.getElementById("header");

  if (scroll > 1) {
    header.classlist.add("nav_mod");
  } else if (scroll < 1) {
    header.classlist.remove("nav_mod");
  }
};
