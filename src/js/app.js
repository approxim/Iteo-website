// Подключение jquery
import $ from 'jquery';

// Подключение Slick-Slider
import 'slick-carousel';

// подключение слайдера Swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

// Проверка браузеров на поддержку webp
import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

// header
import * as header from './modules/header.js';
header.headerJS();

// Подключение модуля с инициализацией слайдеров
import * as slicks from './modules/slick-sliders.js';
slicks.slickSliders();
slicks.slickCounter();

//
import * as project from './modules/project-page.js';
project.projectPage();

import * as otherProjects from './modules/moreprojects.js';
otherProjects.moreProjects();

// задание зависимости высоты блока в зависимости от ширины
$(function () {
  $('.resize-height').height($('.resize-height').width() / 2);

  $(window).resize(function () {
    $('.resize-height').height($('.resize-height').width() / 2);
  });
});

// В случае если ткнуть мимо пунктов сортера то список скроется
let projectsTagContainer = document.querySelector('.projects__tagcontainer');
projectsTagContainer.addEventListener('click', (e) => {
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
