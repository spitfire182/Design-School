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
    $('div[class*="js--portfolio-"]').waypoint(function (direction) {
        $('div[class*="js--portfolio-"]').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('div[class*="js--service-"]').waypoint(function (direction) {
        $('div[class*="js--service-"]').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('div[class*="js--skill-"]').waypoint(function (direction) {
        $('div[class*="js--skill-"]').addClass('animated zoomIn');
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
        offset: '50%'
    });
});
