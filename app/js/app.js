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
	$(this).toggleClass('alert')
});


$('#image-color').on('click',function(){
	$('.thumb-image').toggleClass('filters');
	$(this).toggleClass('alert')
});


$('#tile-width').on('click',function(){
	$('.thumbnail').toggleClass('old-width');
	$(this).toggleClass('alert')
});


$('#oldpub').on('click',function(){
	$('.old-publisher').toggleClass('hide-for-small-up');
	$('.old-date').toggleClass('hide-for-small-up');
	$('.thumb-meta').toggleClass('hide-for-small-up');
	$(this).toggleClass('alert')
});


$('#tilebg').on('click',function(){
	$('.thumbnail-inside').toggleClass('oldbackground');
	$(this).toggleClass('alert')
});


$('#title').on('click',function(){
	$('.thumb-title').toggleClass('old-style');
	$('.thumb-logline').toggleClass('old-style');
	$(this).toggleClass('alert')
});


$('#actions').on('click',function(){
	$('.thumb-actions').toggleClass('hide-for-small-up');
	$(this).toggleClass('alert')
});

$('#gray').on('click',function(){
	$('body').toggleClass('gray');
	$(this).toggleClass('alert')
});

$('#gold').on('click',function(){
	$('body').toggleClass('gold');
	$(this).toggleClass('alert')
});