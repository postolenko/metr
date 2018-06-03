var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// -----------------

var parentBlock;

// -----------------

var promoImg;
var promoArticleWidth;
var leftCoord;

// -----------------

var thumbsHeightArr;
var thumb;
var thumbHeight;
var maxThumbHeight;

// -----------------

var items;
var lastItem;
var defaultHeight;
var visibleItemsDefaultCount = 4;
var itemsWrappName;
var itemsWrapp;

// -----------------

$(window).load(function() {

    getPromoImgPosition();
    getTHumbsHeight();
    getItemsWrappHeight();

    // -------------------

    $(".lines_row .row").css({
        "height" : $(".lines_row").height() + "px"
    });

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getPromoImgPosition();
    getTHumbsHeight();
    getItemsWrappHeight();

    // -------------------

    $(".lines_row .row").css({
        "height" : $(".lines_row").height() + "px"
    });

});

$(document).ready(function() {

    $(".main-nav a").click(function(e) {

        e.preventDefault();

        var hrefAttr = $(this).attr("href");

        var visibleBlock = $(hrefAttr);

        $(".main-nav li").removeClass("active");
        $(".main-nav").find("a[href = '"+ hrefAttr +"']").closest("li").addClass("active");

        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top
        }, 800);

    });

    $(".scroll_link").click(function(e) {

        e.preventDefault();

        var hrefAttr = $(this).attr("href");

        var visibleBlock = $(hrefAttr);

        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top
        }, 800);

    });

    // -----------------

    $( ".article_2 .imgThumb" ).bind({
      mouseenter: function() {
        parentBlock = $(this).closest(".article_2");
        parentBlock.find(".imgThumb").css({"opacity" : ".5"});
        $( this ).css({"opacity" : "1"});
      },
      mouseleave: function() {
        $( this ).css({"opacity" : ".5"});
      }
    });

    $(".article_2 .imgThumbs").mouseleave(function() {
        parentBlock = $(this).closest(".article_2");
        parentBlock.find(".imgThumb").css({"opacity" : "1"});
    });

    // -----------------

    // var items;
    // var lastItem;
    // var defaultHeight;
    // var visibleItemsDefaultCount = 4;
    // var itemsWrappName;
    // var itemsWrapp;


    $(".showItems").click(function(e) {

        e.preventDefault();

        itemsWrappName = $(this).attr("data-items");

        itemsWrapp = $(".items_wrapp").filter("[data-items = '"+ itemsWrappName +"']");

        defaultHeight = itemsWrapp.find(".items_wrapp-inner").height();

        itemsWrapp.animate({
            "height" : defaultHeight + "px"
        }, 300);

        setTimeout(function() {

            itemsWrapp.css({
                "height" : "auto"
            });

            itemsWrapp.addClass("fullHeight");

            $(".showItems").filter("[data-items = '"+ itemsWrappName +"']").css({"display" : "none"})

        }, 500);


    });

    // ------------


    $(".respmenubtn").click(function() {

        if( $(".resp-nav_wrapp").is(":hidden") ) {

            $(".resp-nav_wrapp").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".resp-nav_wrapp").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".resp-nav_wrapp").is(":visible") ) {

                $(".resp-nav_wrapp").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });


    // --------------------

    $(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup").click(function(e) {

        e.preventDefault();

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });

    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

    // ----------------

    $("input[type='tel']").mask("+7 (999) 999-99-99");


});

function getPromoImgPosition() {

    if( bodyWidth > 900 ) {

        $(".promo-article").each(function() {

            promoImg = $(this).find(".promo-img_wrapp");

            promoArticleWidth = $(this).width();

            leftCoord = $(this).find(".desc-inner").offset().left + $(this).find(".desc-inner").outerWidth();

            promoImg.css({
                "width" : promoArticleWidth - leftCoord + "px"
            });

        });

    }

}

function getTHumbsHeight() {

    if( bodyWidth >= 480 ) {

        $(".set_height").each(function() {

            thumbsHeightArr = [];

            thumb = $(this).find(".thumb");

            thumb.each(function() {

                thumbHeight = $(this).find(".inner").outerHeight();

                thumbsHeightArr.push(thumbHeight);

            });

            maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

            $(this).find(".thumb_bg").height(maxThumbHeight);

        });

    }

}


function getItemsWrappHeight() {

    $(".items_wrapp").each(function() {

        if( $(this).find(".article_2").length > visibleItemsDefaultCount 
            && !$(this).hasClass("fullHeight")) {

            lastItem = $(this).find(".article_2").eq(visibleItemsDefaultCount - 1);

            defaultHeight = lastItem.position().top + lastItem.height() - parseInt(lastItem.css("margin-bottom"));

            $(this).css({
                "height" : defaultHeight + "px"
            });

        } else {

            $(this).addClass("fullHeight");

            itemsWrappName = $(this).attr("data-items");

            $(".showItems[data-items = '" + itemsWrappName + "']").css({
                "display" : "none"
            });

        }

    });

}