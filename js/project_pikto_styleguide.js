document.addEventListener("DOMContentLoaded", function(event) { 
  
  var current_active = $('.sg-btn-first');
  var container = document.querySelector('.sg-main-container');
  var sg_button_list_btn = document.querySelectorAll('.sg-button-list > li > button');
  var sg_btn = document.querySelectorAll('.sg-btn');

  // console.log(sg_button_list_btn);

  /*Default*/
  container.innerHTML = sg_data_website_colour.innerHTML;

  function changeContent( ev ) {
    // console.log( 'changeContent', ev);
    const data = ev.currentTarget.dataset.active;
    const target = document.getElementById(data);
    ev.currentTarget.innerHTML = target.innerHTML;
    ev.currentTarget.classList.remove('slide-out');
  }

  container.addEventListener( 'transitionend', changeContent );

  function makeSlideOut( selector ) {
    return function slideOut( ev ) {
      // console.log('slideOut', ev);
      const container = document.querySelector( selector );
      container.dataset.active = ev.currentTarget.dataset.target;
      container.classList.add('slide-out');
    }
  }

  [...sg_button_list_btn].forEach( function(elem) {
    elem.addEventListener('mousedown', makeSlideOut( '.sg-main-container' ) );
    // console.log(elem);
  });

  // [...sg_btn].forEach( function(elem) {
  //   elem.addEventListener('mousedown', function(){
  //     $('.sg_btn').parent().addClass('active');
  //     elem.parentElement.classList.add('active');
  //   });
  // });

  // $('.sg-btn').on('click', function(){
  //   $('.sg-btn').closest('li').removeClass('active');
  //   $(this.closest('li')).addClass('active');
  //   current_active = this;
  // })

  $('.sg-button-list--outer').find('li').on('click', function(){
    $('.sg-button-list--outer').find('li').removeClass('active');
    $(this).addClass('active');
  });

  $('.sg-button-list--inner').find('li').on('click', function(e){
    $('.sg-button-list--outer').find('li').removeClass('active--inner');
    $(this).addClass('active--inner');
  })
});

/*OLD*/
// document.addEventListener("DOMContentLoaded", function(event) { 
  
//   var container = document.getElementsByClassName('sg-main-container')[0];

//   /*Default*/
//   container.innerHTML = sg_data_logo.innerHTML;

//   $('button').on('click', function(){
//     container.classList.add('slide-out');

//     var data = this.getAttribute('data-target');
//     var target = document.getElementById(data);
//     container.innerHTML = target.innerHTML;

//     container.classList.remove('slide-out');
//   });

// });