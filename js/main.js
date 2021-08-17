$(document).ready(function () {

  //Слайдер 1
  const heroSlider = new Swiper('.hero__slider', {
    // Бесконечный режим прокрутки слайдов
    loop: true,

    // Скорость прокрутки
    speed: 3000,

    // Переключение при помощи стрелок
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.hero__slider-button--next',
      prevEl: '.hero__slider-button--prev',
    },

    //Точки в слайдере
    pagination: {
      clickable: true,
      el: ".swiper-pagination"
    },

    //Автопрокрутка слайдов
    autoplay: {
      delay: 5000,
      // Отключить после ручного переключения
      disableOnInteraction: false
    }

  })



})