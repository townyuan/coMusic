import 'swiper/css/bundle';
import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';


// search Swiper:
const searchSwiper = new Swiper(".searchSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
    clickable: true,
  },
});

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