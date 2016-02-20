$(document).ready(function(){

    $("#btn-click").click(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("click()");
    });

    $("#btn-clickdown").mousedown(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("mousedown()");
    }).mouseup(function(event) {
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("mouseup()");
    });

    $("#btn-dblclick").dblclick(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("dblclick()");
    });

    $("#btn-hover").mouseenter(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("mouseenter()");
    }).mouseleave(function(event) {
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("mouseleave()");
    });

    $("#btn-mouseover").mouseover(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("mouseover()");
    });

    $("#btn-mouseout").mouseout(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("mouseout()");
    });

    // $("#btn-clickdownbind").bind('mousedown mouseup', function(){
    //     $(this).toggleClass('btn--yellow btn--red');
    //     $(".feedback").html("bind() mousedown and mouseup");
    // })

    $("#btn-clickdownbind").on('mousedown mouseup', function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("bind() mousedown and mouseup");
    })

    $("#btn-contextmenu").contextmenu(function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("contextmenu()");
    });

    /*Key and Focus Events*/
    $("#input-keypress").keypress(function(){
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("keypress()");
    });

    $("#input-keyupdown").keydown(function(){
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("keydown()");
    }).keyup(function() {
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("keyup()");
    });

    $("#input-focus").focus(function(){
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("focus()");
    });

    $("#input-focusinout").focusin(function(){
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("focusin()");
    }).focusout(function(event) {
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("focusout()");
    });

    $("#input-blur").blur(function(){
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("blur()");
    });

    $("#input-focusblurbind").bind("focus blur",function(){
        $(this).toggleClass('input--yellow input--red');
        $(".feedback").html("bind focus() blur()");
    });

    $("#input-select").select(function(){
        $("#input-select + div").text("Selected!").show().fadeOut(1000);
        $(".feedback").html("select()");
    })

    /*Change Events*/
    $("#selector").change(function(){
        var car = $(this).val();
        if (car == "select") {
            car = "Please Select a Car";
        }
        $(".selector__feedback").html(car);
        $(".feedback").html("change()");
    });

    $(window).resize(function() {
        $(".feedback").html("window resize()");
    });

    /*Scroll Events*/
    $(".boxscroll").scroll(function() {
        $(this).toggleClass('boxscroll--yellow');
        $(".feedback").html("boxscroll scroll()");
    });

    /*Delegate Events*/
    /*This adds new line of code on each click*/
    $("#btn-delegate").click(function(){
        $(".list-item").append('<li><a href="#/">Click me to remove</a></li>');
        $(".feedback").html("append()");
    });

    /*
        If you are asking why not do it this way?
        This would not work because these li does not exist yet, and therefore
        cannot be assign a handler
    */
    $(".list-item").find("li").click(function(){
        $(this).fadeOut(300);
    });

    /*Delegate*/
    // $(".list-item").delegate('li', 'click', function() {
    //     $(this).fadeOut(300);
    //     $(".feedback").html("delegate()");
    // });

    /*On Click has superseded delegate*/
    $(".list-item").on("click", "li", function(){
        $(this).fadeOut(300);
        $(".feedback").html('on("click") > delegate()');
    })

    /*Trigger*/
    $("#btn-trigger-1").on("click", function(){
        // $(this).hide();
        $(this).animate({opacity: "0.5"},100).animate({opacity: "1"},500);
        $(".feedback").html('btn1 animate()');
    });

    $("#btn-trigger-2").on("click",function(){
        $("#btn-trigger-1").trigger('click');
        $(this).animate({opacity: "0.5"},100).animate({opacity: "1"},500);
        $(".feedback").html('btn2 animate() triggers btn1 animate()');
    });

    /*Event Current Target*/
    $( "#btn-curTarget1" ).click(function( event ) {
      alert( event.currentTarget === this ); // true
      $(".feedback").html('event.currentTarget');
    });


});
    



