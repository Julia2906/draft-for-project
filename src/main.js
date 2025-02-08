import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const projectSwiper = new Swiper('.swiper-projects', {
  modules: [Navigation, Keyboard],
  spaceBetween: 32,
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
    disabledClass: 'projects-swiper-button-disabled',
  },
  allowTouchMove: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      // Для планшетів
      slidesPerView: 1,
    },
    1440: {
      // Для десктопів
      slidesPerView: 1,
    },
  },
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault(); // Зупиняємо прокрутку вниз

    if (event.shiftKey) {
      projectSwiper.slidePrev(); // Shift + Tab — перемикання назад
    } else {
      projectSwiper.slideNext(); // Tab — перемикання вперед
    }
  }
});

document
  .querySelector('.projects-button')
  .addEventListener('click', function () {
    window.open(
      'https://github.com/graudu12/portfolio-js-goit-team10',
      '_blank'
    );
  });

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const aboutSwiper = new Swiper('.swiper-about', {
  modules: [Navigation, Keyboard],
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.about-swiper-button-next',
  },
  allowTouchMove: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      // Для планшетів
      slidesPerView: 3,
    },
    1440: {
      // Для десктопів
      slidesPerView: 5,
    },
  },
  on: {
    slideChangeTransitionEnd: function () {
      document.querySelectorAll('.skills-circle').forEach(circle => {
        circle.style.backgroundColor = 'transparent';
        circle.style.border = '1px solid rgba(250, 250, 250, 0.2)';
      });

      const activeSlide = document.querySelector(
        '.swiper-slide-active .skills-circle'
      );
      if (activeSlide) {
        activeSlide.style.backgroundColor = '#ED3B44';
        activeSlide.style.border = 'none';
      }
    },
  },
});
