$(document).ready(function() {
	$('.main-content').css({
		top: '20px',
		transition: 'all 1s ease',
	});

	$('.close-icon').click(function(){
		$('div').removeClass("open");
	});

	$('.icon-box').click(function(){
		$(this).addClass('open');
	});
});
