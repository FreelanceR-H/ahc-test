$(document).ready(function(){ 
	const cursor = new CustomCursor({
		color: '#fff',
		blending: 'difference',
	});
    // Home Page Top Carousel Initialization
	$(".owl-carousel-home").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: false,
		onTranslated: activeTitle,
	});
	