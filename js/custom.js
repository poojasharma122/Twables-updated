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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});



var swiper = new Swiper(".inner-pages-slider1", {
  slidesPerView: 3,
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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


$(document).ready(function(){
  if (window.matchMedia("(max-width: 1400px)").matches) {
      $(".dropdown").click(function(e){
          // Prevent default action if needed
          e.preventDefault();
          $(this).next().slideToggle();
      });
  }
});