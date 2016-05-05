$(document).ready(function(){

	var is_playing = false;
	const progress_bar = $('.mp-progress-bar ');

	$('.mp-pause-icon').hide();

	$('.mp-play-pause').on('click',function(){
		is_playing = !is_playing;
		console.log (is_playing);
		console.log (progress_bar_width);
		if (is_playing) {
			$('.mp-play-icon').hide();
			$('.mp-pause-icon').show();

			progress_bar.stop(true, true).animate({
				width: "+=100%"
			}, 10000);


		} else {
			$('.mp-pause-icon').hide();
			$('.mp-play-icon').show();

			progress_bar.stop(true, true);
		}
	});
});