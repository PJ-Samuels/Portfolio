$(document).ready(function() {
    var $projectCardLeft = $(".project-card-left");
    var $projectCardRight = $(".project-card-right");
    
    $(window).on("scroll", function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $projectCardLeft.each(function() {
            var cardTop = $(this).offset().top;
            var cardHeight = $(this).outerHeight();

            if (cardTop <= scrollTop + windowHeight && cardTop + cardHeight >= scrollTop) {
                $(this).addClass("animate-left");

            } else {
                $(this).removeClass("animate-left");
            }
        });
        $projectCardRight.each(function() {
            var cardTop = $(this).offset().top;
            var cardHeight = $(this).outerHeight();

            if (cardTop <= scrollTop + windowHeight && cardTop + cardHeight >= scrollTop) {
                $(this).addClass("animate-right");

            } else {
                $(this).removeClass("animate-right");
            }
        });
    });
});