$(function(){
	
	var currentSlide = 1;

	var iterate = function(){
		var i = parseInt (currentSlide + 1);
		var lis = $('.consl-content-list').children('li').length;
		if (i > lis) {
			i = 1;
		}
		select($('.consl-content-list li:nth-child('+i+')'));
		console.log(lis);
	}

	var slidemode = setInterval(iterate,3000);

	select($('.consl-content-list li:first'));

	$('.consl-content-list li').on('click',function(e){
		clearTimeout(slidemode);
		select($(this));
		e.preventDefault();
	})


	function select(slide){

		var $slide = slide;
		var same_btn_clicked = false;

		if(currentSlide == parseInt($slide.index() + 1)) {
			same_btn_clicked = true;
		}

		if(!same_btn_clicked) {
			$('.consl-content-list').find('li:nth-child('+currentSlide+') a').stop(true,true)
			.animate({
				'marginTop':'-10px'
			},300);
		}

		/*Why adding var here will cause an errors?*/
		currentSlide = parseInt($slide.index() + 1);

		var currentSlide_link = $('.consl-navlink',$slide);
		// var currentSlide_info = currentSlide_link.next();
		var currentSlide_info = $('.consl-content',$slide);

		currentSlide_link.stop(true,true).animate({
			'marginTop':'0px'
		},300);

		$('.consl-slider-header').animate({'marginLeft':'-35%'},300,function(){
			$(this).find('h1').html(currentSlide_info.find('.consl-content-head').html());
			$(this).animate({'marginLeft':'0%'});
		});

		$('.consl-slider-description').animate({'marginTop':'80px'},300,function(){
			$(this).find('p').html(currentSlide_info.find('.consl-content-desc').html());
			$(this).animate({'marginTop':'0px'});
		});
	}

});