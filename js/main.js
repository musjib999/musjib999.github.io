(function ($) {
    "use strict";


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Facts counter with comma formatting
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
        formatter: function (n) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).text().toLowerCase();
        
        if (filterValue.includes('all')) {
            portfolioIsotope.isotope({ filter: '*' });
        } else if (filterValue.includes('enterprise')) {
            portfolioIsotope.isotope({ filter: '.portfolio-item[data-category="enterprise"]' });
        } else if (filterValue.includes('mobile')) {
            portfolioIsotope.isotope({ filter: '.portfolio-item[data-category="mobile"]' });
        } else if (filterValue.includes('web')) {
            portfolioIsotope.isotope({ filter: '.portfolio-item[data-category="web"]' });
        } else {
            portfolioIsotope.isotope({ filter: '*' });
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

// Contact form submission
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = $('#name').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const message = $('#message').val();
    
    // Validate form
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Create mailto link with form data
    const mailtoLink = `mailto:musjib999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client should open with the message. If not, please email musjib999@gmail.com directly.');
    
    // Reset form
    this.reset();
});

function sendEmail() {
    console.log(document.getElementById('email').value);
    return `mailto:musjib999@gmail.com?cc=d${document.getElementById('email').value}, subject=Hello`
}