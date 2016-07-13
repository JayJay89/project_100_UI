$(function(){
    var totalImg = $('.sp-gallery-container img').length;
    var currentImgIndex = 0;

    var navigateTo = function(target, direction) {
        var $this = target;
        var $imgSrc = $this.attr('src');

        $('.sp-image-container img').removeClass('active');

        setTimeout(function(){
            $('.sp-image-container img').remove();
            $('.sp-image-container').append("<img src=" + $imgSrc +">");

            setTimeout(function(){
                $('.sp-image-container').find('img').addClass('active');
            },100);
        },500);

        if (direction == "previous") {
            currentImgIndex--;
        } else if (direction == "next") {
            currentImgIndex++;
        }

        console.log("current index is " + currentImgIndex);
        pointerHideShow();
    }

    var pointerHideShow = function(){
        if (currentImgIndex == 0) {
            $('#prev').css('display','none');
        } else {
            $('#prev').css('display','inline-block');
        }

        if (currentImgIndex == parseInt(totalImg - 1)) {
            $('#next').css('display','none');
        } else {
            $('#next').css('display','inline-block');
        }
    }

    $('.sp-gallery-container > li').on('click',function(){
        var $this           = $(this); //this is the currently selected li
        var $thisImage      = $(this).find('img');
        var $thisImageSrc   = $(this).find('img').attr('src');
        
        currentImgIndex = $this.index();

        $($thisImage).on('load',function(){
            console.log('loaded');
        })

        $('.sp-gallery-container').stop().animate({'height':'0%'},500,function(){
            $(this).find('li').hide();
        });

        $('.sp-display-panel').stop().animate({'height':'100%'},500,function(){
            $('.sp-display-pointer').css('display','inline-block');

            setTimeout(function(){
                $('.sp-display-pointer').addClass('active');
            },300);

            $('.sp-image-container').append("<img src=" + $thisImageSrc +">");

            setTimeout(function(){
                $('.sp-image-container').find('img').addClass('active');
            },100);

            pointerHideShow();
        });

        console.log(currentImgIndex);
    });

    $('.sp-image-container').on('click', 'img', function(){
        $('.sp-gallery-container').css('z-index','1').show().find('li').show();

        $('.sp-gallery-container').stop().animate({'height':'100%'},500,function(){
            $('.sp-image-container').find('img').remove();
        });

        $('.sp-display-panel').stop().animate({'height':'0%'},500,function(){
            $('.sp-display-pointer').hide().removeClass('active');
        });
    });

    $('#prev').on('click', function(){
        var $prevImg = $('.sp-gallery-container li:nth-child('+parseInt(currentImgIndex)+') img');
        navigateTo($prevImg, "previous");
    });

    $('#next').on('click', function(){
        var $nextImg = $('.sp-gallery-container li:nth-child('+parseInt(currentImgIndex+2)+') img');
        navigateTo($nextImg, "next");
    });
});