// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperJuri = new Swiper('.juri__slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
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
});

const swiperReviews = new Swiper('.reviews__slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 50,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  }
})

swiperJuri.init();
swiperReviews.init();
