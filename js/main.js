$(function () {
    var jumboHeight = $('.jumbotron').outerHeight();
    var parallax = function () {
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    };

    $(window).scroll(function(e){
        parallax();
    });

});
