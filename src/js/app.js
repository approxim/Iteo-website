// Подключение jquery
import $ from "jquery";

// Подключение Slick-Slider
import  "slick-carousel";

// подключение слайдера Swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

// Проверка браузеров на поддержку webp
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();







// $('.carousel').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });

// burger-menu
$(document).ready(function(){
	$('.header__burger').click(function(){
		$(this).toggleClass('open');
	});
});
