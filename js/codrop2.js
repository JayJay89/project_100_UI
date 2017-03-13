var feedback = document.querySelector('.scrollheight-feedback');
var scrollbox = document.querySelector('.scrollbox');
var scroll_btn = document.querySelector('#scroll-btn');

document.addEventListener("DOMContentLoaded", function(event){

  scrollbox.addEventListener('scroll', function(){
    feedback.innerHTML = "scrollbox's height is " + scrollbox.scrollTop;
  });

  window.addEventListener('scroll', function(){
    feedback.innerHTML = "window's height is " + window.scrollY;
  });

  scroll_btn.addEventListener('click', function(){

    scrollTheBox();
    // scrollAnimate = setInterval(scrollTheBox, 1000);

    // if (scrollbox.scrollTop === scrollbox.scrollHeight - scrollbox.clientHeight) {
    //   clearInterval(scrollAnimate);
    // }

  });

  var diff = scrollbox.scrollHeight - scrollbox.clientHeight

  function scrollTheBox(){

    var animate;
    // var diff = scrollbox.scrollHeight - scrollbox.clientHeight
    var seconds = 2;
    var miliseconds = seconds * 1000;
    var steps = (0.005 * diff) / seconds;

    function scrolltoTop(){
      console.log(scrollbox.scrollTop);
      /*If scroll reach top, clear interval*/
      if (scrollbox.scrollTop === 0) {
        clearInterval(animate);
      } else {
        scrollbox.scrollBy(0, -steps);
      }
    }

    function scrolltoBottom(){
      console.log(scrollbox.scrollTop);
      /*If scroll reach bottom, clear interval*/
      if (scrollbox.scrollTop === diff) {
        clearInterval(animate);
      } else {
        scrollbox.scrollBy(0, steps);
      }
    }

    /*if scroll is at bottom, scroll to top*/
    if (scrollbox.scrollTop === diff ) {
      console.log("scroll to top");
      var animate = setInterval(scrolltoTop, 5);
      scrolltoTop();
    } else {
      /*if scroll is anywhere, scroll to bottom*/
      console.log("scroll to bottom");
      var animate = setInterval(scrolltoBottom, 5);
      scrolltoBottom();
    } 
  }

});

/* Some explanations on scroll properties
  scrollbox.clientHeight = 200  (this is the height of the div, purely height)
  scrollbox.offsetHeight = 202  (this is the height of the div +  border)
  scrollbox.scrollTop = 0       (When scroll is at top)
  scrollbox.scrollTop = 398     (When scroll is at bottom)
  scrollbox.scrollHeight = 598  (Full height of the long text)
  */

// function scrollToTop(scrollDur){
//   var scrollStep = -scrollbox.scrollTop / (scrollDur / 15),
//       scrollInterval = setInterval(function(){
//       if ( scrollbox.scrollTop != 0 ) {
//           scrollbox.scrollBy( 0, scrollStep );
//       }
//       else clearInterval(scrollInterval); 
//   },15);
// }