import 'swiper/css/bundle'; // 覆蓋 bootstrap
import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';


// News swiper
const newsSwiper = new Swiper(".newSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})


// Comment swiper
const commentSwiper = new Swiper(".commentSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});