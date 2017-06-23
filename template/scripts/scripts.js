$(document).ready(function($) {
	$.noConflict();
	$('.reviews__list').slick({
		slidesToShow: 3,
		vertical: true,
		swipe: false,
		prevArrow: '<button type="button" class="slick-prev slick-arrow icon icon-arrow-default rotate"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow icon icon-arrow-default"></button>'
	});
	// $(".input-phone").mask("+7 (999) 999-9999");

	// Nav 
	var nav = $('.nav'),
		navClassFixed = 'nav_fixed',
		navPosition = nav.offset().top,
		navHeight = nav.height(),
		navSum = navPosition + navHeight;

	console.log(navSum);
	$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		console.log
		if (scrollTop > navPosition) {
			nav.addClass(navClassFixed);
		} else {
			nav.removeClass(navClassFixed);
		}
	});
	var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
	var delay = 1000; // Задержка прокрутки
	$(document).ready(function() {
		$(window).scroll(function () { // При прокрутке попадаем в эту функцию
			if ($(this).scrollTop() > top_show) $('#go-up').fadeIn();
			else $('#go-up').fadeOut();
		});
		$('#go-up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
			/* Плавная прокрутка наверх */
			$('body, html').animate({
				scrollTop: 0
			}, delay);
		});
	});



	$('.popup .button').click(function() {
		parent.jQuery.fancybox.getInstance().close();
		$.fancybox.open({
			src  : '#thanks',
			type : 'inline'
		});
	});
});