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
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
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
        var section = $(this);
        var sectionTop = section.offset().top;
        var sectionHeight = section.outerHeight();
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();

        // Calculate visibility (50% of the section must be visible)
        var isStart = (
          (sectionTop + (sectionHeight * 0.01) <= windowScrollTop + windowHeight) && 
          (sectionTop + sectionHeight >= windowScrollTop)
        );

        if (isStart) {
          section.addClass('start');
        } else {
          // section.removeClass('start');
        }
        var isVisible = (
          (sectionTop + (sectionHeight * 0.5) <= windowScrollTop + windowHeight) &&
          (sectionTop + sectionHeight - (sectionHeight * 0.5) >= windowScrollTop)
        );

        if (isVisible) {
          section.addClass('active');
        } else {
          // section.removeClass('active');
        }
      });

      $(' .mm-bed-section').each(function () {
        var section = $(this);
        var sectionTop = section.offset().top;
        var sectionHeight = section.outerHeight();
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();

        // Calculate visibility (50% of the section must be visible)
        var isStart = (
          (sectionTop + (sectionHeight * 0.01) <= windowScrollTop + windowHeight) && 
          (sectionTop + sectionHeight >= windowScrollTop)
        );

        if (isStart) {
          section.addClass('start');
        } else {
          // section.removeClass('start');
        }
        var isVisible = (
          (sectionTop + (sectionHeight * 0.5) <= windowScrollTop + windowHeight) &&
          (sectionTop + sectionHeight - (sectionHeight * 0.5) >= windowScrollTop)
        );

        if (isVisible) {
          section.addClass('active');
        } else {
          // section.removeClass('active');
        }
      });


    }


    // mobile menu
    $('.hamburger-icon').on('click', function(){
      $('.mobile-menu-popup').addClass('active');
    });
    $('.close-icon-popup').on('click', function(){
      $('.mobile-menu-popup').removeClass('active');
    });
    // Run on load and scroll
    checkSectionVisibility();
    $(window).on('scroll', checkSectionVisibility);

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       $(entry.target).addClass('start');
    //     } else {
    //       $(entry.target).removeClass('start');
    //     }
    //   });
    // }, {threshold: 0.01}); // 5% visible threshold
  
    // $('section').each(function() {
    //   observer.observe(this);
    // });

    // header active
    const $header = $('header.header');
    const scrollThreshold = 50;
    let isScrolling;
  
    function checkScroll() {
      if ($(window).scrollTop() > scrollThreshold) {
        $header.addClass('hd-active');
      } else {
        $header.removeClass('hd-active');
      }
    }  
    // Initial check
    checkScroll();

    // Optimized scroll handler
    $(window).on('scroll', function() {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(checkScroll, 100);
    });


    // accordion
    // $('.faq-question-bar').on('click', function(e){
    //   e.preventDefault();
    //   $(this).parent('.faq-question-wrap-2').toggleClass('active');
    //   $(this).parent('.faq-question-wrap-2').find( '.faq-content-2').slideToggle();
    //   $(this).parent('.faq-question-wrap').toggleClass('active');
    //   $(this).parent('.faq-question-wrap').find( '.faq-content-2').slideToggle();
    // });
    $('.faq-question-wrap-2 .faq-question-bar').on('click', function(e){
      e.preventDefault();
      $(this).parent('.faq-question-wrap-2').toggleClass('active');
      $(this).parent('.faq-question-wrap-2').find( '.faq-content-2').slideToggle();
      // $(this).parent('.faq-question-wrap').toggleClass('active');
      // $(this).parent('.faq-question-wrap').find( '.faq-content-2').slideToggle();
    });
    
    $('.faq-question-wrap').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $( '.faq-content-2', this).slideToggle();
    });



    // $('.faq-question-bar-main').on('click', function(e){
    //   e.preventDefault();
    //   $(this).parent('.faq-question-wrap-main').toggleClass('active');
    //   $(this).parent('.faq-question-wrap-main').find( '.faq-content-main').slideToggle();
    // });
    $('.faq-question-wrap-main').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).find( '.faq-content-main').slideToggle();
    });




    // counter
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight * 0.9) && // 90% from top
        rect.bottom >= (window.innerHeight * 0.1) // 10% from bottom
      );
    }

    function checkCounters() {
      var counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        if (!counter.classList.contains('animated') && isInViewport(counter)) {
          counter.classList.add('animated');
          let current = 0;
          const target = parseInt(counter.dataset.target);
          const step = target / 100;
          
          const timer = setInterval(() => {
            current += step;
            counter.textContent = Math.floor(current);
            if (current >= target) {
              clearInterval(timer);
              counter.textContent = target;
            }
          }, 20);
        }
      });
    }
    window.addEventListener('scroll', checkCounters);
    checkCounters(); 

    var $element = $('.footer');
    var position = 0;
    var speed = 1; // Adjust speed (higher = faster)
    
    // Infinite background scroll loop
    // setInterval(function() {
    //     position -= speed; // Move left (use `+=` to move right)
    //     $element.css('background-position', position + 'px 0');
    // }, 20); // Lower interval = smoother animation

    
  });
})(jQuery);

// Track which counters are currently animating
var activeCounters = {};

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
    rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.1
  );
}

function checkCounters() {
  var counters = document.querySelectorAll('.counter');
  
  for (var i = 0; i < counters.length; i++) {
    var counter = counters[i];
    var counterId = counter.id || 'counter_' + i;
    
    if (isInViewport(counter)) {
      // Start counter if not already running
      if (!activeCounters[counterId]) {
        startCounter(counter, counterId);
      }
    } else {
      // Reset counter when out of view
      if (activeCounters[counterId]) {
        resetCounter(counter, counterId);
      }
    }
  }
}

function startCounter(counter, counterId) {
  activeCounters[counterId] = true;
  var current = 0;
  var target = parseInt(counter.getAttribute('data-target'), 10);
  var step = target / 100;
  
  // Clear any existing interval just in case
  if (counter._interval) {
    clearInterval(counter._interval);
  }
  
  counter._interval = setInterval(function() {
    current += step;
    counter.textContent = Math.floor(current);
    
    if (current >= target) {
      clearInterval(counter._interval);
      counter.textContent = target;
      activeCounters[counterId] = false;
      delete counter._interval;
    }
  }, 20);
}

function resetCounter(counter, counterId) {
  clearInterval(counter._interval);
  counter.textContent = '0';
  activeCounters[counterId] = false;
  delete counter._interval;
}

// Throttle scroll events for better performance
var isScrolling;
// window.addEventListener('scroll', function() {
//   window.clearTimeout(isScrolling);
//   isScrolling = setTimeout(function() {
//     checkCounters();
//   }, 100);
// }, false);

// Initial check
// window.addEventListener('load', checkCounters);
// checkCounters();