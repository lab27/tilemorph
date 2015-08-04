'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();



$('#image1').on('click',function(){
	$('.thumb-image-holder').toggleClass('no-margin');
	$(this).toggleClass('success')
});


$('#image-color').on('click',function(){
	$('.thumb-image').toggleClass('filters');
	$(this).toggleClass('success')
});


$('#tile-width').on('click',function(){
	$('.thumbnail').toggleClass('old-width');
	$(this).toggleClass('success')
});


$('#oldpub').on('click',function(){
	$('.old-publisher').toggleClass('hide-for-small-up');
	$('.old-date').toggleClass('hide-for-small-up');
	$('.thumb-meta').toggleClass('hide-for-small-up');
	$(this).toggleClass('success')
});


$('#tilebg').on('click',function(){
	$('.thumbnail-inside').toggleClass('oldbackground');
	$(this).toggleClass('success')
});


$('#title').on('click',function(){
	$('.thumb-title').toggleClass('old-style');
	$('.thumb-logline').toggleClass('old-style');
	$(this).toggleClass('success')
});


$('#actions').on('click',function(){
	$('.thumb-actions').toggleClass('hide-for-small-up');
	$(this).toggleClass('success')
});

