$(function(){

  var highlight_timeout;

  $('.ih > li')
  .on('mouseenter', function(){
    var $target = $(this).find('img');
    var $overlay = $('.ih-overlay');

    var $clone = $('<div />',{
      'id'        : 'ih_clone',
      'class'     : 'ih-image-clone-container',
      'html'      : '<div class="ih-image-clone"><img src="'+$target.attr('src')+'" alt="'+$target.attr('alt')+'"/><span class="ih-zoom-btn"></span></div>',
    });

    $clone.css({
      'top': $target.offset().top,
      'left': $target.offset().left,
      'width': $target.outerWidth(),
      'height': $target.outerHeight()
    });

    var highlight = function (){
      $('.ih-overlay').before($clone);
      $('.ih-overlay').addClass('active');
    }

    if($('#ih_clone').length) {
      return
    } else {
      highlight_timeout = setTimeout(highlight, 300);
    };

    $clone.find('.ih-zoom-btn').on('click',function(){
      // $(this).fadeOut();
      $('#ih_clone').animate({
        "left"    : "0px",
        "height"  : "100vh",
        "width"   : "100%",
        "padding" : "20px"
      });

      $('.ih-container').off('mouseleave','#ih_clone');

      $(this).off().on('click', function(){
          $('#ih_clone').remove();
          $('.ih-overlay').removeClass('active');
      });

    });


  })
  .on('mouseleave', function(){
    // if($('#ih_clone').length) return;
    clearTimeout(highlight_timeout);
  });

  $('.ih-container').on('mouseleave','#ih_clone',function(){
    var $clone = $(this);
    $clone.remove();
    $('.ih-overlay').removeClass('active');
    clearTimeout(highlight_timeout);
  });
});