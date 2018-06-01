var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// -----------------

var parentBlock;

// -----------------

var thumbsHeightArr;
var thumb;
var thumbHeight;
var maxThumbHeight;

// -----------------

$(window).load(function() {

    getPromoImgPosition();
    getTHumbsHeight();

    // -------------------

    $(".lines_row .row").css({
        "height" : $(".lines_row").height() + "px"
    });

    console.log($(".lines_wrapp").height() ) ;

});

$(window).resize(function() {

    getPromoImgPosition();
    getTHumbsHeight();

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

});

function getPromoImgPosition() {

    $(".promo-article").each(function() {

        var promoImg = $(this).find(".promo-img_wrapp");

        var promoArticleWidth = $(this).width();

        var leftCoord = $(this).find(".desc-inner").offset().left + $(this).find(".desc-inner").outerWidth();

        promoImg.css({
            "width" : promoArticleWidth - leftCoord + "px"
        });

    });

}

function getTHumbsHeight() {

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

// function getContactsSectionSize() {

//     // var contactsWrappHeight = $(".contacts-sect .contacts_wrapp").outerHeight(true);

//     // $(".contacts-sect").css({
//     //     "height" : contactsWrappHeight + "px"
//     // });

//     console.log(contactsWrappHeight);

// }