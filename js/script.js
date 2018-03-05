
/* Start NiceScroll */

$(document).ready(function () {

    $("body").niceScroll({
        zindex:"999999",
        cursorcolor:"#41cb52",
        cursorwidth:"10px",
        scrollspeed : "40",
    });
    
});


/* End NiceScroll */



/* Start Bx-slider */

$(document).ready(function () {

    $('.bxslider').bxSlider({
    controls:false,
    pager: true,
    pause:3000,
    auto: true,
    infiniteLoop : true,
    touchEnabled: false,
    autoDirection: 'next',    
});

});

/* End Bx-slider */

/* Start Loading */
$(document).ready(function () {
    $('.loading').delay(1500).fadeOut(1500);
});

/* End Loading */


/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});

/* End Scrolling To top */


/* Start Navbar Functions */

$(document).ready(function () {
    window.onscroll = function () {

        if(pageYOffset >= 55) {
            $('.contact-nav').hide();
            $('nav').css({
                position:'fixed',
                top:'0',
                right:'0',
                left: '0'
            });

            $('.scrolltop').fadeIn();

        } 
        
        else {

            $('.contact-nav').show();
            $('nav').css('position', 'static');
            $('.scrolltop').hide();
        }
    }
});

/* End Navbar Functions */


/* Start Beside Nav functions */
$(document).ready(function () {
    $('.show-beside-nav').click(function () {
        $(this).toggleClass('nav-toggle-button')
        $('.beside-nav').toggleClass('nav-toggle');
    });
});
/* End Beside Nav functions */


/* Start Services Function */
$(document).ready(function () {

    $('.services .service1').hover(function () {
        $('.services .plus-img1').css({border:"1px solid #41cb52", color:"#41cb52"});
        $('.services .service1 h3').css({ color:"#41cb52"});
    });
    $('.services .service1').mouseleave(function () {
        $('.services .plus-img1').css({border:"1px solid #DDD", color:"#DDD"});
        $('.services .service1 h3').css({ color:"#333"});
    });


    $('.services .service2').hover(function () {
        $('.services .plus-img2').css({border:"1px solid #41cb52", color:"#41cb52"});
        $('.services .service2 h3').css({ color:"#41cb52"});
    });
    $('.services .service2').mouseleave(function () {
        $('.services .plus-img2').css({border:"1px solid #DDD", color:"#DDD"});
        $('.services .service2 h3').css({ color:"#333"});
    });


    $('.services .service3').hover(function () {
        $('.services .plus-img3').css({border:"1px solid #41cb52", color:"#41cb52"});
        $('.services .service3 h3').css({ color:"#41cb52"});
    });
    $('.services .service3').mouseleave(function () {
        $('.services .plus-img3').css({border:"1px solid #DDD", color:"#DDD"});
        $('.services .service3 h3').css({ color:"#333"});
    });


    $('.services .service4').hover(function () {
        $('.services .plus-img4').css({border:"1px solid #41cb52", color:"#41cb52"});
        $('.services .service4 h3').css({ color:"#41cb52"});
    });
    $('.services .service4').mouseleave(function () {
        $('.services .plus-img4').css({border:"1px solid #DDD", color:"#DDD"});
        $('.services .service4 h3').css({ color:"#333"});
    });



    $('.services .service5').hover(function () {
        $('.services .plus-img5').css({border:"1px solid #41cb52", color:"#41cb52"});
        $('.services .service5 h3').css({ color:"#41cb52"});
    });
    $('.services .service5').mouseleave(function () {
        $('.services .plus-img5').css({border:"1px solid #DDD", color:"#DDD"});
        $('.services .service5 h3').css({ color:"#333"});
    });



    $('.services .service6').hover(function () {
        $('.services .plus-img6').css({border:"1px solid #41cb52", color:"#41cb52"});
        $('.services .service6 h3').css({ color:"#41cb52"});
    });
    $('.services .service6').mouseleave(function () {
        $('.services .plus-img6').css({border:"1px solid #DDD", color:"#DDD"});
        $('.services .service6 h3').css({ color:"#333"});
    });

});

/* End Services Function */






/* Start getstart Functions */

$(document).ready(function () {

    $('.getstart1 h3').click(function () { // H3 First-of-type
        $('.getstart1 p').slideToggle();
        $('.getstart1 h3 i').toggle();

        $('.getstart2 p').slideUp();
        $('.getstart2 h3 i:first-of-type').hide();
        $('.getstart2 h3 i:last-of-type').show();


        $('.getstart3 p').slideUp();
        $('.getstart3 h3 i:first-of-type').hide();
        $('.getstart3 h3 i:last-of-type').show();
    });

    $('.getstart2 h3').click(function () { // H3 Second-of-type
        $('.getstart2 p').slideToggle();
        $('.getstart2 h3 i').toggle();

        $('.getstart1 p').slideUp();
        $('.getstart1 h3 i:first-of-type').hide();
        $('.getstart1 h3 i:last-of-type').show();


        $('.getstart3 p').slideUp();
        $('.getstart3 h3 i:first-of-type').hide();
        $('.getstart3 h3 i:last-of-type').show();
    });

    $('.getstart3 h3').click(function () { // H3 last-of-type
        $('.getstart3 p').slideToggle();
        $('.getstart3 h3 i').toggle();

        $('.getstart1 p').slideUp();
        $('.getstart1 h3 i:first-of-type').hide();
        $('.getstart1 h3 i:last-of-type').show();


        $('.getstart2 p').slideUp();
        $('.getstart2 h3 i:first-of-type').hide();
        $('.getstart2 h3 i:last-of-type').show();
    });
});


/* End getstart Functions */




/* Start Recent Projects Functions */

$(document).ready(function () {

    $('.project1').hover(function () {
        $('.project-details1').fadeToggle();
    });

    $('.project2').hover(function () {
        $('.project-details2').fadeToggle();
    });

    $('.project3').hover(function () {
        $('.project-details3').fadeToggle();
    });

    $('.project4').hover(function () {
        $('.project-details4').fadeToggle();
    });

    $('.project5').hover(function () {
        $('.project-details5').fadeToggle();
    });

    $('.project6').hover(function () {
        $('.project-details6').fadeToggle();
    });


    $('.all').click(function () {
        $(this).css({background:"#41cb52", color:"#FFF"});
        $('.marketing').css({background:"#FFF", color:"#000"});
        $('.seo').css({background:"#FFF", color:"#000"});
        $('.projects-bttn').css({background:"#FFF", color:"#000"});
        $('.social').css({background:"#FFF", color:"#000"});

        $('.project1, .project2, .project3, .project4, .project5, .project6').fadeIn();
        $('.projects div').css('margin-top', '30px');
    });



    $('.marketing').click(function () {
        $(this).css({background:"#41cb52", color:"#FFF"});
        $('.all').css({background:"#FFF", color:"#000"});
        $('.seo').css({background:"#FFF", color:"#000"});
        $('.projects-bttn').css({background:"#FFF", color:"#000"});
        $('.social').css({background:"#FFF", color:"#000"});


        $('.project1, .project3, .project5, .project6').slideUp();
        $('.project2, .project4').fadeIn();
        $('.projects div').css('margin-top', '0px');
    });

    $('.seo').click(function () {
        $(this).css({background:"#41cb52", color:"#FFF"});
        $('.all').css({background:"#FFF", color:"#000"});
        $('.marketing').css({background:"#FFF", color:"#000"});
        $('.projects-bttn').css({background:"#FFF", color:"#000"});
        $('.social').css({background:"#FFF", color:"#000"});

        $('.project2, .project4, .project5, .project6').slideUp();
        $('.project1, .project3').fadeIn();
        $('.projects div').css('margin-top', '0px');
    });


    $('.projects-bttn').click(function () {
        $(this).css({background:"#41cb52", color:"#FFF"});
        $('.all').css({background:"#FFF", color:"#000"});
        $('.marketing').css({background:"#FFF", color:"#000"});
        $('.seo').css({background:"#FFF", color:"#000"});
        $('.social').css({background:"#FFF", color:"#000"});

        $('.project1, .project3, .project4, .project6').slideUp();
        $('.project2, .project5').fadeIn();
        $('.projects div').css('margin-top', '0px');
    });


    $('.social').click(function () {
        $(this).css({background:"#41cb52", color:"#FFF"});
        $('.all').css({background:"#FFF", color:"#000"});
        $('.marketing').css({background:"#FFF", color:"#000"});
        $('.seo').css({background:"#FFF", color:"#000"});
        $('.projects-bttn').css({background:"#FFF", color:"#000"});

        $('.project1, .project2, .project3, .project5').slideUp();
        $('.project4, .project6').fadeIn();
        $('.projects div').css('margin-top', '0px');
    });

});


/* End Recent Projects Function */