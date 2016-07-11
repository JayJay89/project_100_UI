$(function(){
    var currentImgIndex = 0;
    var totalImg = $('.sp-gallery-container img').length;

    $('.sp-gallery-container > li').on('click',function(){
        var $this           = $(this); //this is the currently selected li
        var currentImgIndex = $this.index();
        var $thisImage      = $(this).find('img');
        var $thisImageSrc   = $(this).find('img').attr('src');

        $($thisImage).on('load',function(){
            console.log('loaded');
        })

        console.log($thisImageSrc);
        // console.log(currentImgIndex);

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

        });
    });


    $('.sp-image-container').on('click', 'img', function(){
        $('.sp-gallery-container').find('li').show();
        $('.sp-gallery-container').css('z-index','1').show();

        $('.sp-gallery-container').animate({'height':'100%'},500,function(){
            $('.sp-image-container').find('img').remove();
        });

        $('.sp-display-panel').animate({'height':'0%'},500,function(){
            $('.sp-display-pointer').hide().removeClass('active');
        });
    });

});


// $('.sp-gallery-container img').on('load',function(){
//     console.log("loaded");
// })