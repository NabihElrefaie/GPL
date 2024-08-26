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
    spinner(0);

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
        });

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        });
    });

    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Language Dropdown Functionality
    window.changeLanguage = function (labelId, flagSrc, lang) {
        const langLabel = document.getElementById(labelId);
        langLabel.innerHTML = `<img src="${flagSrc}" alt="${lang}" style="width: 20px; height: auto; margin-right: 5px;"> ${lang}`;
        
        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', JSON.stringify({ labelId, flagSrc, lang }));
        // Get the language name in both languages
        const langText = lang === 'en' ? 'Eng' : 'عربى'; // Arabic text for "Arab"
        langLabel.childNodes[1].nodeValue = langText; // Update the displayed text
        // Update content and styles based on the selected language
        updateContentAndStyles(lang);
    };

    // Restore selected language on page load
    $(document).ready(function () {
        const savedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'));
        if (savedLanguage) {
            changeLanguage(savedLanguage.labelId, savedLanguage.flagSrc, savedLanguage.lang);
        } else {
            // Default to English if no language is saved
            changeLanguage('langLabel1', 'img/lang/logo-lang.png', 'en');  // Change to your default flag path
        }
    });

})(jQuery);