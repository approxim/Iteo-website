// Подключение jquery
import $ from 'jquery';
// import { node } from 'webpack';

// Подключение Slick-Slider
// import  "slick-carousel";

// подключение слайдера Swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

// Проверка браузеров на поддержку webp
import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

// burger-menu
$(document).ready(function () {
  $('.header__burger').click(function () {
    $(this).toggleClass('open');
  });
});

// Появление-скрытие меню сортировки
$('.projects__tagcontainer').click(function () {
  $('.projects__tags').toggleClass('visible');
});

// Нажатие на кнопки пунктов сортера
$('.projects__tag').each(function () {
  $(this).click(function () {
    var textValue = $(this).html();
    $('.projects__tagcontainer').html(textValue);
    $('.projects__tags').removeClass('visible');
  });
});

// В случае если ткнуть мимо пунктов сортера то список скроется
window.addEventListener('click', (e) => {
  const NODES = ['BUTTON'];
  let container = document.querySelector('.projects__tags');
  if (NODES.includes(e.target.nodeName)) return;
  container.classList.remove('visible');
});

// Управление сортировкой в секции Проекты
$(document).ready(function () {
  $('.projects__tag').click(function () {
    var value = $(this).attr('data-filter');
    var elem = $('.projects__item');
    if (value == 'all') {
      $(elem).show('500');
    } else {
      $(elem)
        .not(".projects__item[data-sort~='" + value + "']")
        .hide('500');
      $(elem)
        .filter(".projects__item[data-sort~='" + value + "']")
        .show('500');
    }
  });
});

// Драг анд Дроп панорамы
let animationTimer = '';

let panoram = document.querySelector('.panoram__image');

panoram.addEventListener('pointerdown', function (event) {
  if (animationTimer) {
    clearTimeout(animationTimer);
  }
  let comp = getComputedStyle(panoram);
  let shiftX = event.clientX - +comp.backgroundPositionX.slice(0, -2);
  let currShift = comp.backgroundPositionX;
  panoram.classList.remove('panoram__image_animation');
  panoram.style.backgroundPositionX = currShift;

  document.addEventListener('pointermove', onMouseMove);
  document.addEventListener('pointerup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - panoram.getBoundingClientRect().left;
    panoram.style.backgroundPositionX = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('pointerup', onMouseUp);
    document.removeEventListener('pointermove', onMouseMove);
    animationTimer = setTimeout(
      () => panoram.classList.add('panoram__image_animation'),
      2000
    );
  }
});
document.querySelector('.panoram').style.height =
  document.documentElement.clientHeight;

// Смена заголовков панорамы при её прокручивании
const titleNodes = document.querySelectorAll('.panoram__title');
let computedStylesPanoram = getComputedStyle(panoram);
setInterval(() => {
  // 3444px - width
  // 1148px - 1 часть
  let currBackgroundPosition =
    computedStylesPanoram.backgroundPositionX.slice(0, -2) % 3444;
  currBackgroundPosition = Math.abs(currBackgroundPosition)
  if (currBackgroundPosition < 1148) {
    titleNodes[0].classList.add('active');
    titleNodes[1].classList.remove('active');
    titleNodes[2].classList.remove('active');
  } else if (currBackgroundPosition < 2296) {
    titleNodes[0].classList.remove('active');
    titleNodes[1].classList.add('active');
    titleNodes[2].classList.remove('active');
  } else {
    titleNodes[0].classList.remove('active');
    titleNodes[1].classList.remove('active');
    titleNodes[2].classList.add('active');
  }
}, 0);
