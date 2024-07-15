// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import 'swiper/css';

const swiperJuri = new Swiper('.juri__slider', {
  loop: true,
  // slidesPerView: 1,
  // spaceBetween: 40,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  // centeredSlides: true,
  // centeredSlidesBounds: true,
});
