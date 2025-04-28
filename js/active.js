; (function ($) {
  'use strict';
  $(document).ready(function () {
    const swiperThumb = new Swiper('.mm-thumb-slider', {
      speed: 400,
      slidesPerView: "auto",
      spaceBetween: 13,
    });
    const swiperHero = new Swiper('.mm-main-slider', {
      speed: 400,
      spaceBetween: 100,
      loop: true,
      autoHeight: true,
      thumbs: {
        swiper: swiperThumb
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $('.hero-wrapper .left-arrow-slider').on('click', function () {
      $('.hero-wrapper .swiper-button-next').trigger('click');
    });
    $('.hero-wrapper .right-arrow-slider').on('click', function () {
      $('.hero-wrapper .swiper-button-prev').trigger('click');
    });

    // review slider
    const swiperRV = new Swiper('.mm-review-slider', {
      speed: 400,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $('.right-arrow-slider-review').on('click', function () {
      $('.review-container .swiper-button-prev').trigger('click');
    });
    $('.left-arrow-slider-review').on('click', function () {
      $('.review-container .swiper-button-next').trigger('click');
    });

    // animation
    function checkSectionVisibility() {
      $('section').each(function () {
        const section = $(this);
        const sectionTop = section.offset().top;
        const sectionHeight = section.outerHeight();
        const windowHeight = $(window).height();
        const windowScrollTop = $(window).scrollTop();

        // Calculate visibility (50% of the section must be visible)
        const isVisible = (
          (sectionTop + (sectionHeight * 0.5) <= windowScrollTop + windowHeight) &&
          (sectionTop + sectionHeight - (sectionHeight * 0.5) >= windowScrollTop)
        );

        if (isVisible) {
          section.addClass('active');
        } else {
          section.removeClass('active');
        }
      });
    }

    // Run on load and scroll
    checkSectionVisibility();
    $(window).on('scroll', checkSectionVisibility);


  });
})(jQuery);