/**
 * T3IP
 * Dependecies: Modernizr, jQuery
 */

(function (exports, $) {

	// Init namespace
	var T3IP = exports.T3IP || {};


	// TYPO3 function for decrypting the mail address
	// decrypt helper function
	T3IP.decryptCharcode = function (n, start, end, offset) {
		n = n + offset;
		if (offset > 0 && n > end) {
			n = start + (n - end - 1);
		} else if (offset < 0 && n < start) {
			n = end - (start - n - 1);
		}
		return String.fromCharCode(n);
	};

	// decrypt string
	T3IP.decryptString = function (enc, offset) {
		var dec = "";
		var len = enc.length;
		var i = 0;
		var n;

		for (; i < len; i++) {
			n = enc.charCodeAt(i);
			if (n >= 0x2B && n <= 0x3A) {
				dec += decryptCharcode(n, 0x2B, 0x3A, offset);	// 0-9 . , - + / :
			} else if (n >= 0x40 && n <= 0x5A) {
				dec += decryptCharcode(n, 0x40, 0x5A, offset);	// A-Z @
			} else if (n >= 0x61 && n <= 0x7A) {
				dec += decryptCharcode(n, 0x61, 0x7A, offset);	// a-z
			} else {
				dec += enc.charAt(i);
			}
		}
		return dec;
	};

	// decrypt spam-protected emails
	T3IP.linkTo_UnCryptMailto = function (s) {
		location.href = decryptString(s, 3);
	}

	T3IP.toggleNavigation = function (e) {
		e.preventDefault();
		$('#nav_main').toggleClass('active');
	};

	T3IP.initNavigationIcon = function () {

		// Append icon
		$('.hassub').each(function () {
			if ($('.icon-chevron-down', $(this)).length < 1) {
				$(this).append('<span class="icon-chevron-down" />');
			}
		});

		// Handle click
		$(document)
			.off('click', '.icon-chevron-down')
			.on('click', '.icon-chevron-down', function (e){
				e.preventDefault();

				$(this).parent().toggleClass('open');
			});
	};

	T3IP.appendNavigationSlide = function ($element) {

		if ($('#nav_morebtn', $element).length < 1) {
			$element
				.prepend('<div id="nav_lessbtn">&#171;</div>')
				.append('<div id="nav_morebtn">&#187;</div>');
		}

		$('#nav_lessbtn').hide();
	};

	// Postion of subnavigation
	T3IP.currentSubnavigationPosition = 0;

	// Helper function to use transform or left
	T3IP.transformNavigation = function (value) {
		var cssChange;

		if (Modernizr.csstransforms) {
			cssChange = {
				transform: 'translateX(' + value + ')'
			};
		} else {
			cssChange = {
				left: value
			};
		}

		return cssChange;
	};

	T3IP.handleNavigationSlide = function ($subnav, totalWidth, navWidth) {
		var diffX;
		var difforg;
		var screenWidth = window.innerWidth;


		diffX = totalWidth - navWidth;
		difforg = totalWidth - navWidth;

		if (diffX > screenWidth) {
			diffX = screenWidth;
		}

		$(document)
			.on('click', '#nav_morebtn', function () {

				$subnav.css(T3IP.transformNavigation('-' + diffX + 'px'));

				if (diffX < screenWidth) {
					$(this).hide();
				}

				$ ('#nav_lessbtn').show();

				diffX = difforg;
			})

			.on('click', '#nav_lessbtn', function () {
				$subnav.css(T3IP.transformNavigation('0'));

				if (diffX < screenWidth) {
					$(this).hide();
				}

				$('#nav_morebtn').show();
			});
	};

	T3IP.initNavigationSlide = function () {
		var $subnav = $('.hassub.act .second-level, .hassub.cur .second-level');
		var totalWidth = 0;
		var navWidth = $subnav.width();

		$('> li', $subnav).each(function () {
			totalWidth += $(this).outerWidth();
		});


		if (totalWidth > navWidth) {
			T3IP.appendNavigationSlide($subnav.parent());
			T3IP.handleNavigationSlide($subnav, totalWidth, navWidth);
		}
	}

	// Check if on small screen and apply options for navigation
	T3IP.initNavigation = function () {

		if (Modernizr.mq('only screen and (max-width: 599px)')) {
			T3IP.initNavigationIcon();
		}

		if (Modernizr.mq('only screen and (min-width: 600px)')) {
			T3IP.initNavigationSlide();
		}

	};


	// Initialize application
	(function () {

		// Toggle for navigation
		$(document).on('click', '#nav_anchor', T3IP.toggleNavigation);

		// Detect navigation changes
		$(window).on('load orientationchange resize', T3IP.initNavigation);
	}());


	// Make namespace globally available
	exports.T3IP = T3IP;

}(window, jQuery));


// Global functions for TYPO3
var decryptCharcode = T3IP.decryptCharcode;
var decryptString = T3IP.decryptString;
var linkTo_UnCryptMailto = T3IP.linkTo_UnCryptMailto;
