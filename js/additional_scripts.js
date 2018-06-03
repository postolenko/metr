$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

	if( bodyWidth <= 900 ) {

		$(".resp-nav").mCustomScrollbar();

	} else {

		$(".resp-nav").mCustomScrollbar("destroy");

	}

	// --------------------------

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

		parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

	});

});

$(window).resize(function() {

	if( bodyWidth <= 900 ) {

		$(".resp-nav").mCustomScrollbar();

	} else {

		$(".resp-nav").mCustomScrollbar("destroy");

	}

	initialRangeSliders();

	$("select").each(function() {

        parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

});

$(document).ready(function() {

	initialRangeSliders();

	// --------------------------

	$(".testimonilas-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

});


function initialRangeSliders() {

	if( document.getElementById('range_1') ) {

		var range1 = document.getElementById('range_1');		

		if( bodyWidth > 768 && !$("#range_1").hasClass("noUi-target") ) {

			var pipFormats = {'0':'Квартира', '1':'Загородный дом', '2':'Комм. недвижимость'};

			noUiSlider.create(range1, {
				start: 0,
				range: {
					'min': [0, 1],
					'50%': [1,1],
					'max': [2,1]
				},
				connect: [true, false],
				pips: {
				mode: 'range',
				format: {
					to: function(a){
						return pipFormats[a];
					}
				}
				}
			});

		} else if( bodyWidth <= 768 && $("#range_1").hasClass("noUi-target") ){

			range1.noUiSlider.destroy();

		}

	}

	if( document.getElementById('range_2') ) {

		var range2 = document.getElementById('range_2');

		if( bodyWidth > 768 && !$("#range_2").hasClass("noUi-target") ) {

			noUiSlider.create(range2, {
				start: 0,
				range: {
					'min': 10,
					'max': 200
				},
				connect: [true, false],
				pips: {
					mode: 'range'
				}
			});

			range2.noUiSlider.on('update', function( values, handle ) {
				$(".msqVal").text(parseInt( values[handle]) );
			});

			if( $("#range_2").hasClass("noUi-target") ) {

				$("#range_2").find(".noUi-value-large").append(" м<sup>2</sup>");

			}

		} else if( bodyWidth <= 768 && $("#range_2").hasClass("noUi-target") ){

			range2.noUiSlider.destroy();

		}

	}

	if( document.getElementById('range_3') ) {

		var range3 = document.getElementById('range_3');

		if( bodyWidth > 768 && !$("#range_3").hasClass("noUi-target") ) {

			var pipFormats3 = {'0':'Неоклассик', '1':'Лофт', '2':'Современный', '3':'Скандинавский', '4':'Прованс'};

			noUiSlider.create(range3, {
				start: 0,
				range: {
					'min': [0, 1],
					'25%': [1,1],
					'50%': [2,1],
					'75%': [3,1],
					'max': [4,1]
				},
				connect: [true, false],
				pips: {
				mode: 'range',
				format: {
					to: function(a){
						return pipFormats3[a];
					}
				}
				}
			});

		} else if( bodyWidth <= 768 && $("#range_3").hasClass("noUi-target") ){

			range3.noUiSlider.destroy();

		}

	}

	if( $(".range").length > 0 ) {

		$(".range").each(function() {

			if( $(this).hasClass("noUi-target") ) {

				$(this).find(".noUi-value-large:eq(0)").addClass("firs_child");

				$(this).find(".noUi-value-large:eq("+ ( $(this).find(".noUi-value-large").length - 1 ) +")").addClass("last_child");

			}

		});

	}

}
