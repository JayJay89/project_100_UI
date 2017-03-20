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
  const gallery = document.querySelector('.sp-gallery-container');
  const gallery_li = document.querySelectorAll('.sp-gallery-container > li');
  const display_panel = document.querySelector('.sp-display-panel');
  const image_container = document.querySelector('.sp-image-container');
  const pointer = document.querySelectorAll('.sp-display-pointer');
  const left_pointer = document.querySelector('.sp-display-pointer.left');
  const right_pointer = document.querySelector('.sp-display-pointer.right');

  var currentPic = 0;

  var findIndex = function(node) {
    var parent = node.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, node);
    return (index + 1);
  };

  const hideShowPointer = function(){
    var image_count = gallery.children.length;
    if (currentPic === 1) {
      left_pointer.classList.remove('active');
    } else {
      left_pointer.classList.add('active');
    };

    if (currentPic === image_count) {
      right_pointer.classList.remove('active');
    } else {
      right_pointer.classList.add('active');
    };
  };

  const displayImage = function(target){

    const image_tag = document.createElement('img');
    const target_src = target.querySelector('img').getAttribute('src');

    const switchDisplay = function(){
      display_panel.addEventListener('transitionend', activateImage);
      display_panel.classList.add('expand');
      gallery.classList.add('hide');
    }

    const createImg = function(callback){
      image_tag.setAttribute('src', target_src);
      image_container.appendChild(image_tag);

      if(callback){
        callback()
      }
    };

    const activateImage = function(){
      image_tag.addEventListener('transitionend', hideShowPointer);
      image_tag.classList.add('active');
      display_panel.removeEventListener('transitionend', activateImage);
    };

    switchDisplay();
    createImg();

    currentPic = findIndex(target);
    console.log(currentPic);
  };

  const hideImage = function(){
    const image = image_container.querySelector('img');

    const showGallery = function(){
      gallery.addEventListener('transitionend', removeImg);
      gallery.classList.remove('hide');
    }

    const switchDisplay = function(){
      display_panel.classList.remove('expand');

      [...pointer].forEach(function(elem){
        elem.removeEventListener('transitionend', switchDisplay);
      });

      showGallery();
    };

    const removeImg = function(){
      image.remove();
    };

    const hidePointers = function(){
      [...pointer].forEach(function(elem){
        elem.classList.remove('active');
        elem.addEventListener('transitionend', switchDisplay);
      });
    };
    
    hidePointers();
  };

  const switchImage = function(dir){
    const current_image = document.querySelector('.sp-image-container > img');
    var image_count = gallery.children.length;

    const changeImg = function(dir){

      const updateCurrentPic = function(callback){
        if (dir === "next") {
          currentPic++;
        } else if (dir === "prev") {
          currentPic--;
        }
        current_image.setAttribute('src', "images/img" + currentPic + ".jpg");
        setTimeout(showImage, 100);
      
        current_image.removeEventListener('transitionend', updateCurrentPic);
      }

      const showImage = function(){
        current_image.classList.add('active');
      }

      current_image.addEventListener('transitionend', updateCurrentPic);
      current_image.classList.remove('active');
    }

    if (dir === "next") {
      if (currentPic === image_count) {
        return;
      } else {
        changeImg("next");
        // console.log(currentPic);
      }
    } else if (dir === "previous") {
      if (currentPic === 1) {
        return;
      } else {
        changeImg("prev");
        // console.log(currentPic);
      }
    }

    hideShowPointer();
  };

  display_panel.addEventListener('click', function(e){
    if(e.target.classList.contains('right')){
      switchImage("next");
    } else if(e.target.classList.contains('left')){
      switchImage("previous");
    }
  });

  gallery.addEventListener('click',function(e){
    if(e.target && e.target.nodeName == "LI") {
      displayImage(e.target);
    }
  });

  /*Original Even Handler - Switch to the one above(event delegation)*/
  // [...gallery_li].forEach(function(elem){
  //   elem.addEventListener('click', function(e){
  //     displayImage(e.target);
  //   });
  // });

  image_container.addEventListener('click', function(e){
    /*Assigning Event Handlers to the img tag which wasn't added yet*/
    if (e.target.tagName.toLowerCase() === 'img') {
      hideImage();
    }
  })

});

/*Lesson 1*/
/* Event Delegation

  image_container_image.addEventListener('click', function(e){
    console.log(e.target);

    if (e.target.tagName.toLowerCase() === 'img') {
      //do something
    }

    if(e.tagName == 'A' && e.classList.contains("someBtn")){
      //do something
    }

    if ( e.target.className === 'my-button') {
      //do something
    }

    if(e.target && e.target.nodeName == "LI") {
      //do something
    }
  })
*/

/*Lesson 2*/
/*

  This won't work
  ======================================
  left_pointer.addEventListener('transitionend', function(){
    closeGallery();
  });
  left_pointer.removeEventListener('transitionend');
  ======================================

  To remove event listeners, This'll work
  ======================================
  left_pointer.addEventListener('transitionend', switchDisplay);
  left_pointer.removeEventListener('transitionend', switchDisplay);
  ======================================
*/

/*Lesson 3 */
/*
  Always remember to remove event listeners after they are not in used!!!
*/