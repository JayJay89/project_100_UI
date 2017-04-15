// $(function(){

//  var currentSlide = 2;
//  // If currentSlide is 1, currentSlide == $clickedSlide, this will return false, which means nothing will load.
//  // This hack change currentSlide to 2, currentSlide != $clickedSlide, therefore the function will run

//  select($('.consl-content-list li:first'));

//  $('.consl-content-list li').on('click',function(e){
//    clearTimeout(slidemode);
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

//  var iterate = function(){
//   var i = parseInt (currentSlide + 1);
//   var lis = $('.consl-content-list').children('li').length;
//   if (i > lis) {
//     i = 1;
//   }
//   select($('.consl-content-list li:nth-child('+i+')'));
//  }

//  var slidemode = setInterval(iterate,3000);
// });

document.addEventListener("DOMContentLoaded", function(event) {
  var currentSlide = 1;

  var list = document.querySelector('.consl-content-list');
  var list_object = document.querySelectorAll('.consl-content-list li');
  var first_object = document.querySelector('.consl-content-list li:first-child');

  var container_header = document.querySelector('.consl-slider-header');
  var container_header_text = document.querySelector('.consl-slider-header > h1');
  
  var container_desc = document.querySelector('.consl-slider-description');
  var container_desc_text = document.querySelector('.consl-slider-description > p');

  var test = document.querySelector('#whereami');
  var slideMode = setInterval(iterate, 2000);

  /*default*/
  updateContent(first_object);
  currentSlide = findIndex(first_object);

  [...list_object].forEach(function(elem){
    elem.addEventListener('mousedown', function(e){
      clearInterval(slideMode);
      if (currentSlide === findIndex(e.target)) {
        return;
      } else {
        select(e.target);
        console.log(currentSlide);
      }
    });
  });

  function select(slide){
    headerControl("hide");
    descControl("extend");

    container_header.addEventListener("transitionend", function(event){
      updateContent(slide, headerControl("show"));
    });

    container_desc.addEventListener("transitionend", function(event){
      descControl("collapse");
    });

    currentSlide = findIndex(slide);
  }

  function iterate(){
    var listLength = list.childElementCount;
    
    if(listLength === currentSlide){
      currentSlide = 1;
    } else {
      currentSlide++;
    }

    select(list.querySelector('li:nth-child('+currentSlide+')'));
    console.log(currentSlide);
  }

  function findIndex(node) {
    var parent = node.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, node);
    return (index + 1);
  }

  function updateContent(elem, callback){
    var description = elem.querySelector('.consl-content-desc');
    var target_header = elem.querySelector('.consl-content-head');

    container_desc_text.innerHTML = description.innerHTML;
    container_header_text.innerHTML = target_header.innerHTML;

    /*
    Run callback if it's available, updateContent(first_object) doesn't have the second parameter
    Simply running callback() will return error.
    */
    if(callback) {
      callback();
    }
  }

  function headerControl(status){
    if (status == "hide"){
      container_header.classList.add('hide');
    } else if (status == "show"){
      container_header.classList.remove('hide');
    }
  }

  function descControl(status){
    if (status == "extend") {
      container_desc.classList.add('extend');
    } else if (status == "collapse") {
      container_desc.classList.remove('extend');
    }
  }

  // /*How Call back Works*/
  // function runFirst(text, callback){
  //   console.log(text);
  //   callback();
  // }

  // function runSecond(text, callback){
  //   console.log(text);
  //   callback();
  // }

  // function runThird(text){
  //   console.log(text);
  // }

  // /*Lead to callback hell*/
  // runFirst("first_value", function() {
  //   runSecond("second_value", function() {
  //     runThird("third_value");
  //   });
  // });

  // /*How Promises Works*/
  // function ActiveFirst(){
  //   var promise = new Promise(function(resolve, reject){
  //     console.log("run first");
  //     resolve("resolved");
  //   });
  //   return promise;
  // }

  // function ActiveSecond(){
  //   var promise = new Promise(function(resolve, reject){
  //     console.log("run second");
  //     resolve("resolved");
  //   });
  //   return promise;
  // }

  // function ActiveThird(){
  //   var promise = new Promise(function(resolve, reject){
  //     console.log("run third");
  //     resolve("resolved");
  //   });
  //   return promise;
  // }

  // ActiveFirst().then(ActiveSecond).then(ActiveThird).then(ActiveFirst);
});