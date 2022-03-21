 
$(document).ready(function(){
	// Initiate Custom Cursor
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
 

	// Home Page Testimonial Carousel Initialization
	$(".owl-carousel-testimonial").owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		margin: 30,
		dots: false,
		responsive : {
		    0 : {
		        items: 1,
		    },
		    480 : {
		        items: 4,
		    },
		    768 : {
		        items: 6,
		    }
		}
	});
	var owl = $('.owl-carousel-testimonial');
	owl.owlCarousel();
	// Go to the next item
	$('.gv').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.gg').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	})
	function activeTitle(e) {
		if (e.item) {
			var index = e.item.index - 1;
			var count = e.item.count;
			if (index > count) {
			index -= count;
			}
			if (index <= 0) {
			index += count;
			}
			$('.carousel-navigation').find('.line').removeClass('active');
			$('.carousel-navigation').children('div').eq(index-1).find('.line').addClass('active');
		}
	}

	// Initiate Aos
	AOS.init();
});
var timelineSwiper = new Swiper ('.timeline .swiper-container', {
	direction: 'vertical',
	loop: false,
	speed: 1600,
	pagination: '.swiper-pagination',
	paginationBulletRender: function (swiper, index, className) {
	  var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
	  return '<span class="' + className + '">' + year + '</span>';
	},
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints: {
	  768: {
		direction: 'horizontal',
	  }
	}
  });

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openPage(pageName,elmnt,color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();
window.onload = function () {
	firstTab();
};

function firstTab() {
document.getElementById("defaultOpen").click();

}
const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});