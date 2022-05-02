window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("header").className = "nav_mod";
  } else {
    document.getElementById("header").className = "";
  }
}
