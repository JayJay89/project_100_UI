document.addEventListener("DOMContentLoaded", function(event) { 
  
  var current_active = $('.mo-btn-first');
  var container = document.querySelector('.mo-main-container');
  var mo_container_list = document.querySelectorAll('.mo-main-container > section');
  var mo_button_list_btn = document.querySelectorAll('.mo-button-list > li > button');


  /*Default*/
  $("button[data-target='sg_data_logo']").parent('li').addClass('active');
  $('.mo-sidebar-hide').find('.triangle').toggleClass('inverse');
  $('.mo-sidebar').toggleClass('slide-in');
  $('.mo-main-container').toggleClass('expand');

  [...mo_button_list_btn].forEach( function(elem) {
    elem.addEventListener('mousedown', function(){

      /*Remove all active and slide-in class from */
      [...mo_container_list].forEach( function(elem){
        elem.classList.remove('active');
        elem.classList.remove('slide-in');
      });

      var target = elem.getAttribute('data-target');
      document.querySelector('#' + target).classList.add('active');
      setTimeout(function(){
        document.querySelector('#' + target).classList.add('slide-in');
      }, 200)
    });
  });



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
});