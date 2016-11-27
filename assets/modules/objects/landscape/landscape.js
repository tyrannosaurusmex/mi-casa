$(window).on('scroll', function() {

    var scrollTop = $(this).scrollTop();

    $('.landscape_hola').css({
        'opacity' : 1 - scrollTop/900
    }); 

});