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
});