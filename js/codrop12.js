// $(function(){
//   var totalImg = $('.sp-gallery-container img').length;
//   var currentImgIndex = 0;

//   var navigateTo = function(target, direction) {
//     var $this = target;
//     var $imgSrc = $this.attr('src');

//     $('.sp-image-container img').removeClass('active');

//     setTimeout(function(){
//       $('.sp-image-container img').remove();
//       $('.sp-image-container').append("<img src=" + $imgSrc +">");

//       setTimeout(function(){
//         $('.sp-image-container').find('img').addClass('active');
//       },100);
//     },500);

//     if (direction == "previous") {
//       currentImgIndex--;
//     } else if (direction == "next") {
//       currentImgIndex++;
//     }

//     console.log("current index is " + currentImgIndex);
//     pointerHideShow();
//   }

//   var pointerHideShow = function(){
//     if (currentImgIndex == 0) {
//       $('#prev').css('display','none');
//     } else {
//       $('#prev').css('display','inline-block');
//     }

//     if (currentImgIndex == parseInt(totalImg - 1)) {
//       $('#next').css('display','none');
//     } else {
//       $('#next').css('display','inline-block');
//     }
//   }

//   $('.sp-gallery-container > li').on('click',function(){
//     //this is the currently selected li
//     var $this           = $(this); 
//     var $thisImage      = $(this).find('img');
//     var $thisImageSrc   = $(this).find('img').attr('src');

//     currentImgIndex = $this.index();

//     $($thisImage).on('load',function(){
//       console.log('loaded');
//     })

//     $('.sp-gallery-container').stop().animate({'height':'0%'},500,function(){
//       $(this).find('li').hide();
//     });

//     $('.sp-display-panel').stop().animate({'height':'100%'},500,function(){
//       $('.sp-display-pointer').css('display','inline-block');

//       setTimeout(function(){
//         $('.sp-display-pointer').addClass('active');
//       },300);

//       $('.sp-image-container').append("<img src=" + $thisImageSrc +">");

//       setTimeout(function(){
//         $('.sp-image-container').find('img').addClass('active');
//       },100);

//       pointerHideShow();
//     });

//     console.log(currentImgIndex);
//   });

//   $('.sp-image-container').on('click', 'img', function(){

//     var $this = $(this);
//     $this.animate({'height':'0%'},500);

//     $('.sp-gallery-container').css('z-index','1').show().find('li').show();

//     $('.sp-gallery-container').stop().animate({'height':'100%'},500,function(){
//       $('.sp-image-container').find('img').remove();
//     });

//     $('.sp-display-panel').stop().animate({'height':'0%'},500,function(){
//       $('.sp-display-pointer').hide().removeClass('active');
//     });
//   });

//   $('#prev').on('click', function(){
//     var $prevImg = $('.sp-gallery-container li:nth-child('+parseInt(currentImgIndex)+') img');
//     navigateTo($prevImg, "previous");
//   });

//   $('#next').on('click', function(){
//     var $nextImg = $('.sp-gallery-container li:nth-child('+parseInt(currentImgIndex+2)+') img');
//     navigateTo($nextImg, "next");
//   });
// });

/*
nth-child:          1  2  3  4  5
currentImgIndex:    0  1  2  3  4
*/

/*If you are at Index2 and you want to go to the next img, that next image is the 4th-child */
/*If you are at Index2 and you want to go to the prev img, that next image is the 2th-child */
/*Hence the calculation above*/

document.addEventListener('DOMContentLoaded', function(event){
  var gallery = document.querySelector('.sp-gallery-container');
  var gallery_li = document.querySelectorAll('.sp-gallery-container > li');
  var display_panel = document.querySelector('.sp-display-panel');
  var image_container = document.querySelector('.sp-image-container');

  var displayImage = function(target){
    var target_src = target.querySelector('img').getAttribute('src');
    var image_tag = document.createElement('img');

    var expandPanel = function(){
      display_panel.classList.add('expand');
      display_panel.addEventListener('transitionend', activateImage);
    };

    var activateImage = function(){
      image_tag.classList.add('active')
    };

    gallery.classList.add('hide');
    image_tag.setAttribute('src', target_src);
    image_container.appendChild(image_tag);
    expandPanel();
  };

  var hideImage = function(){

  };

  [...gallery_li].forEach(function(elem){
    elem.addEventListener('click', function(e){
      displayImage(e.target);
    });
  });

  image_container.addEventListener('click', function(e){

    /*Assigning Event Handlers to the img tag which wasn't added yet*/
    if (e.target.tagName.toLowerCase() === 'img') {
      console.log("HI");
    }
  })

});


/* Adding Events to objects that isn't added into the DOM yet

  image_container_image.addEventListener('click', function(e){
    console.log(e.target);

    if (e.target.tagName.toLowerCase() === 'img') {
    }

    if(e.tagName == 'A' && e.classList.contains("someBtn")){
        console.log("hi");
    }

    if ( e.target.className === 'my-button') {
         //Do your magic
    }

  })

*/