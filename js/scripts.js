$(document).ready(function () {
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually going to happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top + 1
                    }, 1000);
                }
            }
        });

    /* Animations on scroll */
    $('.js--portfolio-1').waypoint(function (direction) {
        $('.js--portfolio-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-2').waypoint(function (direction) {
        $('.js--portfolio-2').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-3').waypoint(function (direction) {
        $('.js--portfolio-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-4').waypoint(function (direction) {
        $('.js--portfolio-4').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-5').waypoint(function (direction) {
        $('.js--portfolio-5').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-6').waypoint(function (direction) {
        $('.js--portfolio-6').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-7').waypoint(function (direction) {
        $('.js--portfolio-7').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--portfolio-8').waypoint(function (direction) {
        $('.js--portfolio-8').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--service-1').waypoint(function (direction) {
        $('.js--service-1').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
    
    $('.js--service-2').waypoint(function (direction) {
        $('.js--service-2').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--service-3').waypoint(function (direction) {
        $('.js--service-3').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--service-4').waypoint(function (direction) {
        $('.js--service-4').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--service-5').waypoint(function (direction) {
        $('.js--service-5').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--service-6').waypoint(function (direction) {
        $('.js--service-6').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--service-7').waypoint(function (direction) {
        $('.js--service-7').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--service-8').waypoint(function (direction) {
        $('.js--service-8').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--skill-1').waypoint(function (direction) {
        $('.js--skill-1').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });

    $('.js--skill-2').waypoint(function (direction) {
        $('.js--skill-2').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });

    $('.js--skill-3').waypoint(function (direction) {
        $('.js--skill-3').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });

    $('.js--skill-4').waypoint(function (direction) {
        $('.js--skill-4').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });

    $('.js--brands').waypoint(function (direction) {
        $('.js--brands').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });

    $('.js--testimonials').waypoint(function (direction) {
        $('.js--testimonials').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });

    $('.js--contact').waypoint(function (direction) {
        $('.js--contact').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--map').waypoint(function (direction) {
        $('.js--map').addClass('animated pulse');
    }, {
        offset: '0%'
    });
});
