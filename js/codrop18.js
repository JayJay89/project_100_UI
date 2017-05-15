document.addEventListener('DOMContentLoaded',function(){
  var slider_bar = document.querySelectorAll('.tng-slider-bar');

  [...slider_bar].forEach(function(elem){
    const images_wrapper = elem.querySelector('.tng-slider-images-wrapper');
    const slider_image_container = elem.querySelector('.tng-slider-images');
    const slider_image = slider_image_container.querySelector('li:first-child');
    const slider_image_width = slider_image.offsetWidth;
    const slider_image_count = slider_image_container.children.length;

    slider_image_container.style.width = slider_image_count * slider_image_width + "px";

    elem.addEventListener('click', function(e){
      var obj = e.currentTarget;
      obj.classList.toggle('expand');
    });

    images_wrapper.addEventListener('mousemove', function(e){

      var extra_section = 500;

      var wrapper_width = e.currentTarget.offsetWidth;
      var images_width = parseInt(slider_image_container.style.width) + (2 * extra_section);
      var ratio = images_width/wrapper_width;

      e.currentTarget.scrollLeft = (e.pageX * ratio - extra_section);
      
      console.log("pageX: " + e.pageX);
      console.log("scrollLeft: " + e.currentTarget.scrollLeft);

    });
  });
});

// jQuery
// $(function(){
    
//     var expandSlider = function(elem){
//         var $this = elem
//         var $imageBar = $this.find('.tng-slider-images');
//         var childCount = $imageBar.find('li').length;

//         var imgPadding = $imageBar.find('li').outerWidth();
//         var slideBarWidth = childCount * imgPadding ;
//         $imageBar.css('width', slideBarWidth  + 'px');
//     }

//     $('.tng-slider-bar').on('click', function(){
//         var $bar = $(this);

//         if($bar.hasClass('expand')){
//             $bar.removeClass('expand');
//         } else {
//             $('.tng-slider-bar').removeClass('expand');
//             $bar.addClass('expand');
//             expandSlider($bar);
//         }
//     })

//     $('.tng-slider-images-wrapper').off('mousemove').on('mousemove', function(e){

//         var $extra          = 500;

//         var $this           = $(this);
//         var $outerWidth     = $(this).width();
//         var $innerWidth     = $(this).find('.tng-slider-images').width() + (2 * $extra);
//         var $widthDiff      = $innerWidth - $outerWidth;

//         // var $left           = e.pageX * (2.333);
//         var $left           = e.pageX * ($widthDiff/$outerWidth) - $extra;

//         $this.scrollLeft($left);

//         // console.log("e.pageX: " + e.pageX)
//         // console.log("$widthDiff " + $widthDiff);
//         // console.log("$outerWidth " + $outerWidth);
//     });
// });