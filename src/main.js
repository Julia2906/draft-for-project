import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

// const projectSwiper = new Swiper('.swiper-projects', {
//   modules: [Navigation, Keyboard],
//   spaceBetween: 64,
//   slidesPerView: 'auto',
//   loop: false,
//   navigation: {
//     nextEl: '.projects-swiper-button-next',
//     prevEl: '.projects-swiper-button-prev',
//     disabledClass: 'projects-swiper-button-disabled',
//   },
//   allowTouchMove: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
// });

// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Tab') {
//     event.preventDefault(); // Зупиняємо прокрутку вниз

//     if (event.shiftKey) {
//       projectSwiper.slidePrev(); // Shift + Tab — перемикання назад
//     } else {
//       projectSwiper.slideNext(); // Tab — перемикання вперед
//     }
//   }
// });

// document
//   .querySelector('.projects-button')
//   .addEventListener('click', function () {
//     window.open(
//       'https://github.com/graudu12/portfolio-js-goit-team10',
//       '_blank'
//     );
//   });
