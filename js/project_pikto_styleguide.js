document.addEventListener("DOMContentLoaded", function(event) { 
  
  var current_active = $('.sg-btn-first');
  var container = document.querySelector('.sg-main-container');
  var sg_container_list = document.querySelectorAll('.sg-main-container > section');
  var sg_button_list_btn = document.querySelectorAll('.sg-button-list > li > button');
  var sg_code_box = document.querySelectorAll('.sg-code-box');
  var sg_content_box = document.querySelectorAll('.sg-content-box');
  var sg_code_content = document.querySelectorAll('.sg-code-content');
  var sg_code_box_sidebar = document.querySelectorAll('.sg-code-box-sidebar');
  var sg_code_box_display = document.querySelectorAll('.sg-code-box-display');
  var sg_nav_tabs = document.querySelector('.js-sg-nav-tabs');
  var sg_nav_tabs_li = document.querySelectorAll('.js-sg-nav-tabs li');
  var sg_onboarding_overlay_btn = document.querySelector('#myOnboardingLayoutBtn');
  var sg_onboarding_overlay_close = document.querySelector('#myOnboardingLayoutClose');
  var sg_onboarding_overlay = document.querySelector('#myOnboardingLayout');

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

  /*INIT*/
  $("button[data-target='sg_data_selects']").parent('li').addClass('active');
  $("#sg_data_selects").addClass('active slide-in');

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

  /*Hide Show Function on The codebox*/

  /*Animate the show hide boxes*/
  // var pages = document.querySelectorAll( 'section' );
  // [ ...pages ].forEach( elem =>
  //   elem.addEventListener( 'transitionend', e => {
  //     if ( e.propertyName !== 'opacity' ) return;
  //     var codeElems = e.target.querySelectorAll( '.sg-code-content' );
  //     [ ...codeElems ].forEach( elm => elm.style.height = elm.offsetHeight + 'px' );
  //   })
  // );

  /*Instantiate - Hide all Codes on loade*/
  [...sg_code_content].forEach(function(elem){
    elem.classList.add('sg-code-hidden');
  });

  /*Hide Show function for all the codeboxes*/
  [...sg_code_box].forEach(function(elem){

    elem.addEventListener('click', function(e){
      var current_codebox = elem.querySelector('.sg-code-content');

      if ( e.target.className === 'sg-show-code') {
        current_codebox.classList.remove('sg-code-hidden');
      }

      if ( e.target.className === 'sg-hide-code') {
        current_codebox.classList.add('sg-code-hidden');
      }
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
    }, 1000)
  });

  /*Popover Arrow Change*/
  function popover_control(selected, classes) {
    const current_section = document.querySelector(selected);
    const current_popover = current_section.querySelector('.popover');
    const current_content_box = current_section.querySelector(".sg-content-box");
    const current_codebox = current_section.querySelector('.sg-code-content pre code');
    const sg_arrow_control = current_section.querySelectorAll('.sg-popover-arrow-control > button');

    [...sg_arrow_control].forEach(function(elem){
      elem.addEventListener('mousedown', function(e){
        var pos = e.target.getAttribute("data-style");
        current_popover.classList = classes + " " + pos;

        injectCode(current_content_box);
        /*reinitialized highlighting*/
        $(current_codebox).each(function(i, block) {
          hljs.highlightBlock(block);
        });
      });
    });
  }

  popover_control('.js-sg-popover-normal', 'popover popover-teal-grey');
  popover_control('.js-sg-popover-footer', 'popover popover-white popover-with-footer');
  popover_control('.js-sg-popover-header', 'popover popover-white popover-with-header');

  // console.log(sg_nav_tabs);

  sg_nav_tabs.addEventListener('click', function(e){
    if (e.target && e.target.nodeName == "A" ) {
      [...sg_nav_tabs_li].forEach(function(elem){
        elem.classList.remove('active');
      });

      e.target.parentNode.classList.add('active');
    }
  });

  sg_onboarding_overlay_btn.addEventListener('click', function(e){
    sg_onboarding_overlay.classList.add('active');
  });

  sg_onboarding_overlay_close.addEventListener('click', function(e){
    sg_onboarding_overlay.classList.remove('active');
  });
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