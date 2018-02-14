$(document).ready(function() {

    // Adaptive menu toggle
    // ==========================================================

    $('.adaptive-manu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggle--open');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');
    });

    // Add active class to header menu after click
    // ==========================================================

    $('.header-menu__link').on('click', function(e) {
        e.preventDefault();
        $('.header-menu__link').removeClass('header-menu__link--active');
        $(this).addClass('header-menu__link--active');
    });

    // Add active class to header adaptive menu after click
    // ==========================================================

    $('.adaptive-menu__link').on('click', function(e) {
        e.preventDefault();
        $('.adaptive-menu__link').removeClass('adaptive-menu__link--active');
        $(this).addClass('adaptive-menu__link--active');
    })

    // Add class to header after scroll > 300 px
    // ==========================================================

    $(window).on('scroll', function() {
        if($(this).scrollTop() > 300) {
            $('.header').addClass('header--scrolled');
        } else {
            $('.header').removeClass('header--scrolled');
        }
    });

    // Scroll to target button
    // ==========================================================

    $('.js-scrollto').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        if(target) {
            $('html, body').animate({scrollTop: $('#' + target).offset().top - 80}, 400);
        }
    });


    // Fancybox config
    // ==========================================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch:false,
    });

    // Perfect slider init
    // ==========================================================

    if($('.perfect-slider').length) {
        $('.perfect-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
        });
    }
    // Review slider init
    // ==========================================================

   if ($('.reviews-slider').length) {
       $('.reviews-slider').owlCarousel({
           loop: true,
           items: 3,
           nav: true,
           dots: false,
           center: true,
           responsive: {
               0: {
                   items: 1,
                   nav: false,
                   dots: true,
               },
               640: {
                   items: 1,
                   nav: false,
                   dots: true,
               },
               768: {
                   items: 2,
                   center: false,
                   margin: 15,
                   nav: false,
               },
               1000: {
                   items: 3,
               },
           },
       });
   }


    // Review modal
    // ==========================================================

  $(document).on('click', '.js-review-modal', function (e) {
      e.preventDefault();
      var review_text = $(this).parents('.reviews-slider__item').find('.reviews-slider-text--formodal').text(),
          review_name = $(this).parents('.reviews-slider__item').find('.reviews-slider__name').text(),
          review_avatar = $(this).parents('.reviews-slider__item').find('.reviews-slider__avatar').html(),
          review_rating = $(this).parents('.reviews-slider__item').find('.reviews-slider__rating').html();
      review_photos = $(this).parents('.reviews-slider__item').find('.reviews-slider__photos').html();

      $('.review-modal__text').text(review_text);
      $('.review-modal__name').text(review_name);
      $('.review-modal__rating').html(review_rating);
      $('.review-modal__avatar').html(review_avatar);
      $('.review-modal__photolist').html('');
      $('.review-modal__photolist').html(review_photos);
  });

    // Buy array: psd, color, quantity, link
    // ==========================================================
    
    // Change active link after click psc__btn
    // ==========================================================

    // Change active link after click quantity__btn
    // ==========================================================

    // Change active link after click: color__btn
    // ==========================================================

    // Change href link after choise params
    // ==========================================================

    // Scroll to target button
    // ==========================================================





});