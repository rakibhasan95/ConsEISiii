$(document).ready(function () {
  "use strict";

/*=======================================================
            // Vertical Center Welcome
    ======================================================*/
    // setInterval(function () {
    //     var widnowHeight = $(window).height();
    //     var introHeight = $(".banner-content").height();
    //     var paddingTop = widnowHeight - introHeight;
    //     $(".banner-content").css({
    //         'padding-top': Math.round(paddingTop / 2) + 'px',
    //         'padding-bottom': Math.round(paddingTop / 2) + 'px'
    //     });
    // }, 10);


     // page smooth scrolling 
    $("#navbar-menu a").mPageScroll2id({
        scrollSpeed: 1500
    });

    // clients mission section slider
    $(".mission-slider").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Team slider
    $(".team-slider").slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // clients testimonial slider
     $(".testimonial-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='fas fa-chevron-left nextprevleft'></i>",
        nextArrow: "<i class='fas fa-chevron-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Back to top
    $('.backToTop').tottTop({
        scrollTop: 100
    });

    //  Mixitup Portfolio

    $('#mixcontent').mixItUp({
        animation: {
            effects: 'fade translateX(50%)',
            reverseOut: true,
            duration: 1000
        },
        load: {
            filter: 'all'
        }
    });

    //Counting section script

    $("#counter-one").animateNumbers(183, true, 2000);
    $("#counter-two").animateNumbers(125, true, 2000);
    $("#counter-three").animateNumbers(165, true, 2000);
    $("#counter-four").animateNumbers(43, true, 2000);

    // Wow initialization
    wow = new WOW(
        {
          mobile: false // default is true
        }
    )
    wow.init();
   

});