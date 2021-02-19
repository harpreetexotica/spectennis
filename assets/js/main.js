$(document).ready(function () {

   //   Testimonial Slider
	jQuery('.test-slider').slick({     
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		adaptiveHeight: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				vertical: false,
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				vertical: false,
				slidesToShow: 1,
			}
		}
		]
	});

});