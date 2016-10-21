/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 *
 * Modifications made by Jason Lally
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = $('header').height() - 100;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$(header).addClass('navbar-shrink');
		}
		else {
			$(header).removeClass('navbar-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

//Todo: incorporate code into above

$(document).scroll(function() {
  var opac = $(document).scrollTop() / ($('header').height() - 200);
  var size = opac * 1.25 > 1.25 ? 1.25 : opac * 1.25 < 0 ? 0 : opac * 1.25;
  var padding = opac * 15 > 15 ? 15 : opac * 15 < 0 ? 0 : opac * 15;
  var anchorSize = 3.75;
  var anchorPadding = 25;
  $('.header-wrapper').css({
  	'background': 'linear-gradient(rgba(36,95,123,' + opac + '),rgba(36,95,123,' + opac + '))'
  });
  $('header').css({
    'background': 'linear-gradient(rgba(36,95,123,' + opac + '),rgba(36,95,123,' + opac + ')), url(../assets/img/sf-bg.jpg)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center center'
  });
  $('.navbar-brand').css({
    'fontSize': anchorSize - size + "em"
  });
  $('.navbar-default').css({
    'padding': anchorPadding - padding + "px" + " 0"
  });
  $('.navbar-default').css({
  	'background': 'linear-gradient(rgba(36,95,123,' + opac + '),rgba(36,95,123,' + opac + '))'
  });
});