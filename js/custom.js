$(document).ready(function () {
  var $window = $(window);
  function scroll_elements() {
    var scroll = $window.scrollTop();
    var scrollLayer1 = scroll / 1.4;
    var scrollLayer2 = scroll / 1.2;
    $(".layer1").css(
      "-webkit-transform", "translate3d(0," + scrollLayer1 + "px,0)",
      "transform", "translate3d(0," + scrollLayer1 + "px,0)"
    );
    $(".layer2").css(
      "-webkit-transform", "translate3d(0," + scrollLayer2 + "px,0)",
      "transform", "translate3d(0," + scrollLayer2 + "px,0)"
    );
  }
  $window.scroll(scroll_elements);
  //jQuery(".box").hide();
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $(".box").hide();
    } else {
      $(".box").show();
    }
    lastScrollTop = st;
  });
});
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}