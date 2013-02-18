$(document).ready(function() {
	
	$(".essence").fitText(1.6, {minFontSize: '18px', maxFontSize: '68px'});

	isStarsVisible = true;
	var windowWidth = $('.banner').width();
	var windowHeight = $('.banner').height();
	var $stars;


	$stars = $('#stars');

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		isStarsVisible = false;
		$('#stars').css({ 'visibility': 'hidden' });
	}


	function twinkle(v)
	{
		v.attr('class','twinkle');
		var randX = Math.floor(Math.random() * windowWidth);
		var randY = Math.floor(Math.random() * windowHeight);
		if(isStarsVisible)
		{
			v.css({'transform': 'translate3d(' + randX + 'px,'+randY+'px,0)',
					'webkitTransform': 'translate3d(' + randX + 'px,'+randY+'px,0)',
					'mozTransform': 'translate3d(' + randX + 'px,'+randY+'px,0)',
					'msTransform': 'translate3d(' + randX + 'px,'+randY+'px,0)',
					'oTransform': 'translate3d(' + randX + 'px,'+randY+'px,0)'});
		}
		setTimeout(function() {
			v.attr('class','');
			setTimeout(twinkle,0,v);
		}, 2000);
	}

	for(var i = 0; i < 10; i ++)
	{
		$stars.append('<div class="star" />');
	}

	$.each($('.star'), function(i, v) {
		var randIn =  i * 100 + 2000;
		setTimeout(function() {
			var $v = $(v);
			twinkle($v);
		}, randIn);
	});

	$(window).bind('resize', function() {
		windowWidth = $('.banner').width();
		windowHeight = $('.banner').height();
	});


});

