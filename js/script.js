$(document).ready(function() {
	$('.main-content').css({
		top: '300px',
		opacity: '1',
		transition: 'all 1s ease 1s',
	});

	$('.main-content .icon-box').css({
		height: '200px',
		transition: 'height .8s ease 1s',
	});

	$('.main-content .icon-box').mouseleave(function() {
		$('.icon-box').css({
			transition: 'all .8s ease 0s'
		});
	});

	$('.close-icon').click(function(){
		$('div').removeClass("open");
	});

	$('.icon-box').click(function(){
		$(this).addClass('open');
	});
});
