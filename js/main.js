/// <reference types="../@types/jquery" />


$(function () {
    
    // loading screen
    $('.loader').fadeOut(500 , function(){
        $('#loading').slideUp(500)
        $('body').css('overflow','auto');
        $('body').remove('overflow','hidden');
    });


    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

});
