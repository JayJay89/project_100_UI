$(function(){
    
    var expandSlider = function(elem){
        var $this = elem
        var $imageBar = $this.find('.tng-slider-images');
        var childCount = $imageBar.find('li').length;

        var imgPadding = $imageBar.find('li').outerWidth();
        var slideBarWidth = childCount * imgPadding ;
        $imageBar.css('width', slideBarWidth  + 'px');
    }

    $('.tng-slider-bar').on('click', function(){
        var $bar = $(this);

        if($bar.hasClass('expand')){
            $bar.removeClass('expand');
        } else {
            $('.tng-slider-bar').removeClass('expand');
            $bar.addClass('expand');
            expandSlider($bar);
        }
    })

    $('.tng-slider-images-wrapper').off('mousemove').on('mousemove', function(e){

        var $extra          = 500;

        var $this           = $(this);
        var $outerWidth     = $(this).width();
        var $innerWidth     = $(this).find('.tng-slider-images').width() + (2 * $extra);
        var $widthDiff      = $innerWidth - $outerWidth;

        // var $left           = e.pageX * (2.333);
        var $left           = e.pageX * ($widthDiff/$outerWidth) - $extra;

        $this.scrollLeft($left);

        // console.log("e.pageX: " + e.pageX)
        console.log("$widthDiff " + $widthDiff);
        console.log("$outerWidth " + $outerWidth);
    });
});