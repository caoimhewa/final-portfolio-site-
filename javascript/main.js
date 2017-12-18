$(window).scroll(function(){
    if ($(window).scrollTop() >= 160) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});