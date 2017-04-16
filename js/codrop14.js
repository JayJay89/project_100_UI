document.addEventListener("DOMContentLoaded", function(){
 
  var frame = document.querySelector('.sf-frame');
  var containerFrame = document.querySelector('.sf-content-container');
  var contentSlides = document.querySelectorAll('.sf-content');
  var navigation = document.querySelector('.sf-nav');

  var frameWidth = frame.offsetWidth;
  var slideCount = contentSlides.length;
  var currentSlide = 1;

  function findIndex(node) {
    var parent = node.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, node);
    return (index + 1);
  }

  /*Set Container Width*/
  containerFrame.style.width = (slideCount * frameWidth) + "px";

  /*Set Slides Width*/
  [...contentSlides].forEach(function(elem){
    elem.style.width = frameWidth + "px";
  });

  /**/
  navigation.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "LI") {
      currentSlide = findIndex(e.target);
      console.log(currentSlide);

      // containerFrame.style.marginLeft = -(frameWidth * (currentSlide - 1)) + "px";
      
      $(containerFrame).stop().animate({
        marginLeft: -(frameWidth * (currentSlide - 1)) + "px"
      }, 500);

    }
  });

});