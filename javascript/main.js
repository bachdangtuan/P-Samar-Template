//Thay đổi padding trên thanh navbar
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

//Light Gallery

lightGallery(document.getElementById("pic1_2-thumbnails"), {
  selector: ".lightimg",
  plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
  alignThumbnails: "left",
  loop: true,
  allowMediaOverlap: true,
  toggleThumb: true,
  showZoomInOutIcons: true,
  actualSize: false,
  exThumbImage: "data-exthumbimage"
});
// lightGallery(document.getElementById("pic2_1-thumbnails"), {
//   selector: ".lightimg",
//   plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
//   alignThumbnails: "left",
//   loop: true,
//   allowMediaOverlap: true,
//   toggleThumb: true,
//   showZoomInOutIcons: true,
//   actualSize: false,
//   exThumbImage: "data-exthumbimage"
// });

