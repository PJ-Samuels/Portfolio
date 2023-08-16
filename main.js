$(document).ready(function() {
    var $projectCards = $(".project-card");
    
    $(window).on("scroll", function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $projectCards.each(function() {
            var cardTop = $(this).offset().top;
            var cardHeight = $(this).outerHeight();

            if (cardTop <= scrollTop + windowHeight && cardTop + cardHeight >= scrollTop) {
                $(this).addClass("animate-left");
                $(this).addClass("animate-right");

            } else {
                $(this).removeClass("animate-left");
                $(this).removeClass("animate-right");
            }
        });
    });
});