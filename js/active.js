;(function ($){
    'use strict';
    $(document).ready(function () {
        const swiper = new Swiper('.mm-main-slider', {
            speed: 400,
            spaceBetween: 100,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
          });
          $('.left-arrow-slider').on('click', function(){
            $('.swiper-button-next').trigger('click');
          });
          $('.right-arrow-slider').on('click', function(){
            $('.swiper-button-prev').trigger('click');
          });
    });
})(jQuery);