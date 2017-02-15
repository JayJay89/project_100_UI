document.addEventListener("DOMContentLoaded", function(event) { 
  
  var current_active = $('.mo-btn-first');
  var container = document.querySelector('.mo-main-container');
  var mo_container_list = document.querySelectorAll('.mo-main-container > section');
  var mo_side_module_list = document.querySelectorAll('.mo-side-modules > section');
  var mo_button_list_btn = document.querySelectorAll('.mo-button-list > li > button');
  var mo_call_modal = document.querySelectorAll('.info-call-modal');
  var mo_call_modal_close = document.querySelector('.mo-overlay-close');

  /*Default*/
  $("#info_position").addClass('active slide-in');
  $('.mo-sidebar-hide').find('.triangle').toggleClass('inverse');
  $('.mo-sidebar').toggleClass('slide-in');
  $('.mo-main-container').toggleClass('expand');

  /*Calling Different Pages*/
  [...mo_button_list_btn].forEach( function(elem) {
    elem.addEventListener('mousedown', function(){

      /*Remove all active and slide-in class from */
      [...mo_container_list].forEach( function(elem){
        elem.classList.remove('active');
        elem.classList.remove('slide-in');
      });

      var target = elem.getAttribute('data-target');
      addActive(document.querySelector('#' + target), 200);
    });
  });

  /*Calling Different Modal Pages*/
  [...mo_call_modal].forEach(function(elem){
    elem.addEventListener('mousedown', function(){

      var target = elem.getAttribute('data-target');
      
      /*Call modal close button*/
      addActive(mo_call_modal_close, 200);
      /*Call modal*/
      addActive(document.querySelector('#' + target), 200);
    });
  });

  /*Close Modals*/
  mo_call_modal_close.addEventListener('mousedown', function(e){
    /*Close Self*/
    removeActive(e.target, 200);

    [...mo_side_module_list].forEach( function(obj){
      removeActive(obj, 200);
    });

  });

  function addActive(elem, time){
    elem.classList.add('active');
    setTimeout(function(){
      elem.classList.add('slide-in');
    }, time)
  }

  function removeActive(elem, time){
    elem.classList.remove('slide-in');
    setTimeout(function(){
      elem.classList.remove('active');
    }, time)
  }

  $('.mo-sidebar-hide').on('click', function(){
    $('.mo-sidebar-hide').find('.triangle').toggleClass('inverse');
    $('.mo-sidebar').toggleClass('slide-in');
    $('.mo-main-container').toggleClass('expand');
  });

  $('.mo-button-list--outer').find('li').on('click', function(){
    $('.mo-button-list--outer').find('li').removeClass('active');
    $(this).addClass('active');
  });

  $('.mo-button-list--inner').find('li').on('click', function(e){
    $('.mo-button-list--inner').find('li').removeClass('active--inner');
    $(this).addClass('active--inner');
  })

  /*Display: Duplicate Box*/
  $('.info-display-test-btn').on('click', function(){
    $('.info-display-test-text').clone().appendTo('.js-info-duplicate-here');
    $(this).addClass('disabled');
  })

  // /*Summon Modal*/
  // $('.info-call-modal').on('click', function(){
  //   $('.mo-overlay').addClass('active');
  //   setTimeout(function(){
  //     $('.mo-overlay').addClass('slide-in');
  //   }, 200)
  // });
  
  // /*Close Modal*/
  // $('.mo-overlay-close').on('click', function(){
  //   $('.mo-overlay').removeClass('slide-in');
  //   setTimeout(function(){
  //     $('.mo-overlay').removeClass('active');
  //   }, 200)
  // });



});