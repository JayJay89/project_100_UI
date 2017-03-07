// $(function(){
  
//  var currentSlide = 2;
//  // If currentSlide is 1, currentSlide == $clickedSlide, this will return false, which means nothing will load.
//  // This hack change currentSlide to 2, currentSlide != $clickedSlide, therefore the function will run

//  select($('.consl-content-list li:first'));

//  $('.consl-content-list li').on('click',function(e){
//    // clearTimeout(slidemode);
//    select($(this));
//    // e.preventDefault();
//  })

//  function select(slide) {
//    var $slide = slide;
//    var $clickedSlide = parseInt($slide.index() + 1);

//    if(currentSlide == $clickedSlide) {
//      return false;
//    } else {
//      $('.consl-content-list').find('li:nth-child('+currentSlide+') a').stop(true,true)
//      .animate({
//        'marginTop':'-10px'
//      },300);
//    }

//    /*Why adding var here will cause an errors?*/
//    currentSlide = $clickedSlide;

//    var currentSlide_link = $('.consl-navlink',$slide);
//    // var currentSlide_info = currentSlide_link.next();
//    var currentSlide_info = $('.consl-content',$slide);

//    // console.log(currentSlide_link);

//    currentSlide_link.stop(true,true).animate({
//      'marginTop':'0px'
//    },300);

//    $('.consl-slider-header').animate({'marginLeft':'-35%'},300,function(){
//      $(this).find('h1').html(currentSlide_info.find('.consl-content-head').html());
//      $(this).animate({'marginLeft':'0%'});
//    });

//    $('.consl-slider-description').animate({'marginTop':'80px'},300,function(){
//      $(this).find('p').html(currentSlide_info.find('.consl-content-desc').html());
//      $(this).animate({'marginTop':'0px'});
//    });
//  }

//  // var iterate = function(){
//  //  var i = parseInt (currentSlide + 1);
//  //  var lis = $('.consl-content-list').children('li').length;
//  //  if (i > lis) {
//  //    i = 1;
//  //  }
//  //  select($('.consl-content-list li:nth-child('+i+')'));
//  // }

//  // var slidemode = setInterval(iterate,3000);
// });

document.addEventListener("DOMContentLoaded", function(event) {
  var currentSlide = 1;
  var list_object = document.querySelectorAll('.consl-content-list li');
  var first_object = document.querySelector('.consl-content-list li:first-child');

  var container_header = document.querySelector('.consl-slider-header > h1');
  var container_desc = document.querySelector('.consl-slider-description > p');

  var test = document.querySelector('#whereami');

  /*default*/
  updateContent(first_object);
  currentSlide = findIndex(first_object);
  console.log(currentSlide);

  [...list_object].forEach(function(elem){
    elem.addEventListener('mousedown', function(e){
      updateContent(e.target);
      currentSlide = findIndex(e.target);
      console.log(currentSlide);

      console.log(e.target.parentNode);
      console.log(e.target.parentNode.children);
    })
  });

  function findIndex(node) {
    var parent = node.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, node);
    return (index);
  }

  function updateContent(elem){
    var description = elem.querySelector('.consl-content-desc');
    var target_header = elem.querySelector('.consl-content-head');

    container_desc.innerHTML = description.innerHTML;
    container_header.innerHTML = target_header.innerHTML;
  }

  function select(slide) {
    var slide_content = slide.node;
    console.log(slide);
    console.log(slide_content);
  }

});