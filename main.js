// Import
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // 覆蓋 bootstrap

import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';

import AOS from 'aos';
import './node_modules/aos/dist/aos.css';

import jQuery from 'jquery';
window.$ = jQuery;



// JavaScript
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


// aos
AOS.init();


// jQuery
// Signin/ login
$('.needs-validation').each(function(index) {
  $(this).on('submit', function(e) {
    e.preventDefault();
    $(this).addClass('was-validated');
  });
});


// 
//scrollbar
const hitSwiper = new Swiper(".hitSwiper", {
  spaceBetween: 24,
  //滑鼠中間滾輪可滑動
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  slidesPerView: "auto",
});

