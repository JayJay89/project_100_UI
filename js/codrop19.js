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

}); //$(function(){})