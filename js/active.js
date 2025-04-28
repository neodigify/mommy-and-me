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
      loop: false,
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
      autoHeight: true,
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

  });
})(jQuery);