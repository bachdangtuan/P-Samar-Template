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

// BACK TO TOP
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// SWIPER
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // fade: true,
  speed: 4000,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  speed: 3000,
  arrows: false,
  focusOnSelect: true
});