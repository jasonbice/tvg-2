// Swiper js

// Slider
var swiper = new Swiper(".sliderSwiper", {
   loop: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

// Logo Slider
var swiper = new Swiper(".logoSwiper", {
   slidesPerView: 5,
   loop: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 5,
         spaceBetween: 50,
      },
   },
});

// IT Company Slider

var swiper = new Swiper(".sliderSwiperThumbanil", {
   loop: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: false,
   },
   navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});
