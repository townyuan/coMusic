import 'swiper/css/bundle';

import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';

import Swiper from 'swiper/bundle';


// init Swiper:
const commentSwiper = new Swiper(".commentSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  
  breakpoints: {
    576: {
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
    nextEl: ".swiper-comment-btn-next",
    prevEl: ".swiper-comment-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});