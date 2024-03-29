window.onload = function () {
    $(".loader").fadeOut(1000, function () {
        $(this).parent().hide();
        $('html, body').css("overflow", "auto");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
}
$(document).ready(function () {

    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('.page-body').css("overflow-y", "hidden");
        $('html').css("overflow-y", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $('.closebtn').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $(".main-xs-nav").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.open-search').click(function () {
        $('.search-pop').fadeIn(700);

    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(700);
    });
    $(".search-container").click(function (e) {
        e.stopPropagation();
    });


    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            768: {
                items: 1,
                dots: true,
                nav: true
            },
        }
    });

    $('.clients-slider').owlCarousel({
        items: 6,
        margin: 28,
        autoplay: false,
        autoplayTimeout: 2500,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        rewind: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 3,
                dots: true,
            },
            768: {
                items: 4,
                dots: true,
            },
            992: {
                items: 5,
                dots: true,
            },
            1200: {
                items: 6
            }
        }
    });
    ////////////////////////////////////////////////////////
    if ($(window).width() < 768) {
        $(".foot-nav-links-header").addClass("moaccordion");
        $(".foot-links").addClass("mopanel");
        $(".contact-header").addClass("moaccordion");
        $(".contact-list").addClass("mopanel");
    }
    var acc = document.getElementsByClassName("moaccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    AOS.init();
});