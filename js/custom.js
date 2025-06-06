$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });

    });
    
    
    $(window).scroll(function(){
      var header = $("header");
      header.toggleClass("sticky", $(window).scrollTop() > 0 );
    });

   
    
    
  });


  // Showcase Slider
var showcaseSwiper = new Swiper(".showcase-slider", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".showcase-next", // Unique selector
    prevEl: ".showcase-prev", // Unique selector
  },
  pagination: {
    el: ".showcase-pagination", // Unique selector
    clickable: true,
  },
});


var swiper = new Swiper('.awards-slider', {
  slidesPerView: 8, 
  spaceBetween: 42, 
  autoplay: {
    delay: 1500, 
    disableOnInteraction: false, // Keep autoplaying after interactions
  },
  loop: true, 
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 8,
    },
  },
});


var swiper = new Swiper(".popular-areas-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






