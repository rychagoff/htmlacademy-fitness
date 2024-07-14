// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import 'swiper/css';

const swiperJuri = new Swiper('.juri__slider', {
  modules: [ Navigation ],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  // speed: 400,
  spaceBetween: 40,
});
