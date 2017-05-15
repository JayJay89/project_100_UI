document.addEventListener('DOMContentLoaded', function(){
  var card = document.querySelectorAll('.csn-card');
  var card_first = document.querySelector('.csn-card:first-child');
  var card_width = document.querySelector('.csn-card:first-child').offsetWidth;
  var content = document.querySelector('.csn-content-container');

  var folded = false;
  console.log(card_first);

  const foldCards = function(except){
    [...card].forEach(function(elem){
      elem.classList.add('fold');
    });
    except.classList.remove('fold');
    folded = true;
  };

  const unfoldCards = function(){
    [...card].forEach(function(elem){
      elem.classList.remove('fold');
    });
    folded = false;
  };

  const showContent = function(){
    content.style.left = card_width + "px";
  };

  const hideContent = function(){
    content.style.left = "-100%";
  };

  [...card].forEach(function(elem){
    var link = elem.querySelector('.csn-link > span');
    
    link.addEventListener('click', function(e){
      var clicked = e.currentTarget.closest('.csn-card');

      if (folded === true) {
        content.addEventListener('transitionend', unfoldCards, {once: true});
        hideContent();
      } else {
        card_first.addEventListener('transitionend', showContent, {once: true});
        foldCards(clicked);
      }
    });
  });

});


// jquery
/*
$(function(){
  var $cards = $('.csn-card');

  var cardWidth = document.getElementsByClassName('csn-card')[0].offsetWidth;

  // Note that both ways below are different ways to get an element
  // console.log them to see how different they would appear

  var card1 = $('.csn-card:first-child');
  var card2 = document.getElementsByClassName('csn-card')[0];

  console.log(card1);
  console.log(card2);

  var folded = false;

  var foldCards = function(selected_card, callback){
    $cards.not(selected_card).each(function(){
      var $card = $(this);
      $card.stop().animate({
        "margin-left":"-130px"
      }, 500, callback);
      folded = true;
    }) //$cards.not(selected_card).each(function(){});
  }; //var foldCards = function(selected_card){})

  var unfoldCards = function(){
    $cards.each(function(){
      var $card = $(this);
      $card.stop().animate({
        "margin-left":"0px"
      }, 500);
      folded = false;
    });
  }; //var unfoldCards = function(){};

  var showContent = function(){
    $('.csn-content-container').animate({
      "left": cardWidth
    }, 500);
  }; //var showContent = function(){};

  var hideContent = function(callback){
    $('.csn-content-container').animate({
      "left": "-100%"
    }, 500, callback);
  }; //var hideContent = function(){};

  $('.csn-link > span').on('click',function(){
    $thiscard = $(this).closest('.csn-card');
    console.log(folded);

    if (folded) {
      hideContent(unfoldCards);
    } else {
      foldCards($thiscard, showContent);
    }
  });
}); 
*/