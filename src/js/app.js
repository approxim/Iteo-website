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








// $('.text').text('Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Назад всеми рукописи гор несколько предупреждал составитель великий, заголовок своего напоивший коварный агентство взобравшись осталось власти одна мир алфавит реторический?');

// $('.carousel').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true
// });


$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
