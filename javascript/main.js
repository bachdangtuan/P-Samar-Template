// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "90px";
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.boxShadow = "0 0 50px 0 rgb(0 0 0 / 10%)";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.height = "130px";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("navbar").style.background = "transparent";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}