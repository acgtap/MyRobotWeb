// *************************************************************************//
// ! This is main JS file that contains custom scripts used in this template*/
// *************************************************************************//
/**
	Navigation File

	01. Carousel
	02. Custom Select
	03. Mobile Menu

 */

$( document ).ready(function() {
	"use strict";
	// **********************************************************************//
	// 01. Carousel
	// **********************************************************************//
	$('.base-slider, .slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='templates/vultr/assets/images/arrow-left.png'>","<img src='templates/vultr/assets/images/arrow-right.png'>"],
		dots: false,
		item: 1,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('.partner-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		dots: false,
		item: 5,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});


	// **********************************************************************//
	// 03. Mobile Menu
	// **********************************************************************//
	$('.mobile-menu-btn').on('click', function(){
		$(this).toggleClass('active');
		$('header').toggleClass('active');
		$('body').toggleClass('mobile-menu-open');
	});

});
