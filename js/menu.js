window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 5) {
    document.getElementById("header").className = "nav_mod_1";
  } else {
    document.getElementById("header").className = "";
  }
}
