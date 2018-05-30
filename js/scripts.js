var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    getPromoImgPosition();

});

$(window).resize(function() {

    getPromoImgPosition();

});

$(document).ready(function() {

   

});

function getPromoImgPosition() {

    $(".promo-article").each(function() {

        var promoImg = $(this).find(".promo-img_wrapp");

        var promoArticleWidth = $(this).width();

        var leftCoord = $(this).find(".descript").offset().left + $(this).find(".descript").width();

        promoImg.css({
            "width" : promoArticleWidth - leftCoord + "px"
        });

    });

}