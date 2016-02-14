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

    $("#btn-clickdownbind").bind('mousedown mouseup', function(){
        $(this).toggleClass('btn--yellow btn--red');
        $(".feedback").html("bind() mousedown and mouseup");
    })


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
    })


    /*Scroll Events*/
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

    $(".boxscroll").scroll(function(event) {
        $(this).toggleClass('boxscroll--yellow');
        $(".feedback").html("boxscroll scroll()");
    });
});
    



