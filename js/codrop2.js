var feedback = document.querySelectorAll('.scrollheight-feedback')[0];
var scrollbox = document.querySelectorAll('.scrollbox')[0];
var scroll_btn = document.querySelectorAll('#scroll-btn')[0];

document.addEventListener("DOMContentLoaded", function(event){

  scrollbox.addEventListener('scroll', function(){
    feedback.innerHTML = "scrollbox's height is " + scrollbox.scrollTop;
  });

  window.addEventListener('scroll', function(){
    feedback.innerHTML = "window's height is " + window.scrollY;
  });

  var scrollAnimate;

  scroll_btn.addEventListener('click', function(){

    scrollTheBox();
    // scrollAnimate = setInterval(scrollTheBox, 1000);

    // if (scrollbox.scrollTop === scrollbox.scrollHeight - scrollbox.clientHeight) {
    //   clearInterval(scrollAnimate);
    // }

  });

  function scrollTheBox(){

    var diff = scrollbox.scrollHeight - scrollbox.clientHeight;
    var milisecs = 20;
    var scrollDuration = 1000;
    var scrollAnimate;

    function scrolltoTop(){
      scrollbox.scrollBy( 0, -diff/(scrollDuration/milisecs));
    }

    function scrolltoBottom(){
      scrollbox.scrollBy( 0, diff/(scrollDuration/milisecs));
    }

    /*if scroll is at bottom, scroll to top*/
    if (scrollbox.scrollHeight - scrollbox.clientHeight === scrollbox.scrollTop) {
      setInterval(scrolltoTop, milisecs);
    } else {
      /*if scroll is anywhere, scroll to bottom*/
     setInterval(scrolltoBottom, milisecs);
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