document.addEventListener("DOMContentLoaded", function(event) { 
  
  var current_active = $('.sg-btn-first');
  var container = document.querySelector('.sg-main-container');
  var sg_container_list = document.querySelectorAll('.sg-main-container > section');
  var sg_button_list_btn = document.querySelectorAll('.sg-button-list > li > button');
  var sg_code_box = document.querySelectorAll('.sg-code-box');
  var sg_content_box = document.querySelectorAll('.sg-content-box');
  var sg_popover_teal = document.querySelector('.sg-popover > .popover-teal-grey');
  var sg_popover_purple = document.querySelector('.sg-popover > .popover-dark-purple');
  var popover_arrow_control = document.querySelectorAll('.sg-popover-arrow-control > button');

  var sg_code_box_sidebar = document.querySelectorAll('.sg-code-box-sidebar');

  /*Instantiate clipboard*/
  /*Clipboard uses a library call clipboard.min.js*/
  var clipboard = new Clipboard('.sg-colorbox');
  clipboard.on('success', function(e) {
      console.log(e);
  });
  clipboard.on('error', function(e) {
      console.log(e);
  });

  /*http://stackoverflow.com/questions/33584392/bootstraps-tooltip-doesnt-disappear-after-button-click-mouseleave*/
  /*Instantiate Bootstrap Tooltip*/
  $('[data-toggle="tooltip"]').tooltip({
      trigger : 'hover'
  });

  /*Default*/
  [...sg_container_list].forEach( function(elem){
    elem.classList.remove('active');
    elem.classList.remove('slide-in');
  });
  $("button[data-target='sg_data_ui_combo']").parent('li').addClass('active');
  $("#sg_data_ui_combo").addClass('active slide-in');

  function injectCode (contentbox){
    var current_content = contentbox.innerHTML;
    const target = contentbox.getAttribute('data-content');
    const target_content = document.querySelector('#' + target);
    const target_child = target_content.querySelector('.sg-code-syntax');
    const target_sidebar = target_content.querySelector('.sg-code-box-sidebar');

    var mapObj = {
      "<": "&lt;",
      ">": "&gt;",
      /*This removes the white spaces in front of each line*/
      "            ":""
    };

    /*Regex Replacement */
    current_content = current_content.replace(/<|>|            /gi, function(matched){
      return mapObj[matched];
    }).trim();

    /*Put the copied strings into the codebox*/
    target_child.innerHTML = current_content;
  }

  function populateNumber (contentbox){
    var current_content = contentbox.innerHTML;
    const target = contentbox.getAttribute('data-content');
    const target_content = document.querySelector('#' + target);
    const target_child = target_content.querySelector('.sg-code-syntax');
    const target_sidebar = target_content.querySelector('.sg-code-box-sidebar');

    const new_line = current_content.match(/\n/g);
    const numLines = new_line ? new_line.length - 1 : 1;

    /*Populate line numbers*/
    for(i = 1; i <= numLines; i++) {
      target_sidebar.innerHTML += ("<span>" + i + "</span>");
    }
  }

  [...sg_content_box].forEach( function(elem){
    injectCode(elem);
    populateNumber(elem);
  });

  [...sg_button_list_btn].forEach( function(elem) {
    elem.addEventListener('mousedown', function(){

      /*Remove all active and slide-in class from */
      [...sg_container_list].forEach( function(elem){
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

  $('.sg-button-list--outer').find('li').on('click', function(){
    $('.sg-button-list--outer').find('li').removeClass('active');
    $(this).addClass('active');
  });

  $('.sg-button-list--inner').find('li').on('click', function(e){
    $('.sg-button-list--inner').find('li').removeClass('active--inner');
    $(this).addClass('active--inner');
  })

  /*Generate Background Color from HTML Content*/
  $('.sg-colorbox').each(function(){
    $(this).html(this.getAttribute('data-clipboard-text'));
    $(this).css("background-color",this.getAttribute('data-clipboard-text'));
  })

  $('.sg-colorbox').on('click', function(){
    $('.sg-color-copy-label').addClass('fade-in');
    setTimeout(function(){
      $('.sg-color-copy-label').removeClass('fade-in');
    }, 500)
  });

  /*Popover Arrow Change*/
  [...popover_arrow_control].forEach( function(elem) {

    const sg_popover = document.querySelector('.sg-popover');

    elem.addEventListener('mousedown', function(e){
      var style = e.target.getAttribute('data-style');
      sg_popover_teal.classList = "popover popover-teal-grey" + " " + style;
      sg_popover_purple.classList = "popover popover-dark-purple" + " " + style;
      injectCode(sg_popover);
      /*reinitialized highlighting*/
      $('.sg-popover + .sg-code-box pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });
  });

  

  /*Slider Config*/
  // http://codepen.io/thebabydino/pen/JoOomG?editors=0010
  var input_sel = 'input[type=range]',
      slider = document.querySelector(input_sel), 
      style = document.createElement('style'), 
      track_sel = input_sel + 
        '::-webkit-slider-runnable-track';

  document.body.appendChild(style);

  slider.addEventListener('input', function() {
    var max = this.max || 100, 
        min = this.min || 0, 
        val = Math.round(100*(this.value - min)/(max - min));
    
    style.textContent = track_sel + '{background-size:' + val + '% 50%,100%,100%}' + track_sel + ':after{content:"' + val + '%"}';
  }, false);

});

$(function() {

});



/* Old Codes
  function changeContent( ev ) {
    // console.log( 'changeContent', ev);
    const data = ev.currentTarget.dataset.active;
    const target = document.getElementById(data);
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
  });
*/

/*OLD*/
/*
document.addEventListener("DOMContentLoaded", function(event) { 
  
  var container = document.getElementsByClassName('sg-main-container')[0];

  container.innerHTML = sg_data_logo.innerHTML;

  $('button').on('click', function(){
    container.classList.add('slide-out');

    var data = this.getAttribute('data-target');
    var target = document.getElementById(data);
    container.innerHTML = target.innerHTML;

    container.classList.remove('slide-out');
  });
});
*/

/*Number Counter System*/
/*When an element is not rendered on the page, we can't get the height value of the element. Hence, some elements doesn't render the numbers.*/
/*
[...sg_code_box].forEach( function(elem) {
  var pre_code = elem.querySelector('.sg-code-syntax');
  var side_bar = elem.querySelector('.sg-code-box-sidebar');

  var style = window.getComputedStyle(pre_code);
  var line_height = parseInt(style.getPropertyValue('line-height'), 10);
  var numLines = parseInt($( pre_code ).height(), 10)/(line_height);

  console.log( style.getPropertyValue('height') );
  for(i = 1; i <= numLines; i++) {
    side_bar.innerHTML += ("<span>" + i + "</span>");
  }
});
*/