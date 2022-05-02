window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("header").className = "nav_mod";
  } else {
    document.getElementById("header").className = "";
  }
}
