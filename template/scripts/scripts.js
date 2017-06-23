$(document).ready(function($) {
	$('.reviews__list').slick({
		slidesToShow: 3,
		vertical: true,
		swipe: false,
		prevArrow: '<button type="button" class="slick-prev slick-arrow icon icon-arrow-default rotate"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow icon icon-arrow-default"></button>'
	});

	$('.slider__list').slick({
		slidesToShow: 5,
		appendArrows: $('.slider__arrows')
		// centerPadding: '60px',
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





	// Select
	var select = $('.select');
	select.each(function() {
		var parent = $(this),
			selectTitle = $(this).find($('.select__title')),
			selectList = $(this).find($('.select__list')),
			selectParsing = $(this).find($('.select__parsing')),
			selectParsingItem = $(this).find($('.select__parsing option'));
		if (selectParsing) {
			selectParsingItem.each(function() {
				selectParsingItemText = $(this).text();
				selectParsingItemValue = $(this).attr('value');
				var selectString = '<li class="select__list-item" data-target="' + selectParsingItemValue + '">' + selectParsingItemText + '</li>';
				selectList.append(selectString);
				if ($(this).attr('selected')) {
					selectTitle.text(selectParsingItemText);
				}
				selectParsingItemText = selectParsingItemValue = null;
			});
		}
		parent = selectTitle = selectList = selectParsing = selectParsingItem = selectString = null;
	});
	function selectOpen(){
		$('.select__title').click(function() {
			var parent = $(this).parents('.select');
			parent.toggleClass('select_open');
			parent = null;

		});
	}
	selectOpen();

	function selectItemActive() {
		$('.select__list-item').click(function() {
			var parent = $(this).parents('.select'),
				parsingItem = parent.find($('.select__parsing option')),
				attr = $(this).attr('data-target'),
				title = parent.find($('.select__title'));
			parsingItem.each(function() {
				$(this).removeAttr('selected');
				if ($(this).attr('value') == attr) {
					var text = $(this).text();
					title.text(text);
					$(this).attr('selected', 'selected');
				}
			});
			parent.toggleClass('select_open');
			parent = parsingItem = attr = title = null;

		});
	}
	selectItemActive();
	select = null;






});