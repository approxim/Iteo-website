// Подключение jquery
import $ from "jquery";

// Подключение Slick-Slider
// import  "slick-carousel";

// подключение слайдера Swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

// Проверка браузеров на поддержку webp
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();







// burger-menu
$(document).ready(function(){
	$('.header__burger').click(function(){
		$(this).toggleClass('open');
	});
});

// Появление-скрытие меню сортировки
$('.projects__tagcontainer').click(function() {
	$('.projects__tags').toggleClass('visible');
});

// document.addEventListener("click", (e) => {
// 	// let projectsButtons = document.querySelectorAll('.projects__tag');
// 	let container = document.querySelector('.projects__tags');

// 	if (e.target.matches('.projects__tag')) return;
// 	container.classList.remove("visible");
// });




window.addEventListener("click", (e) => {
	const NODES = ["BUTTON"];
	let container = document.querySelector('.projects__tags');
  	if (NODES.includes(e.target.nodeName)) return;
  	container.classList.remove("visible");
});

$('.projects__tag').each(function() {
	$(this).click(function() {
	  var textValue = $(this).html();
	  $('.projects__tagcontainer').html(textValue);
	  $('.projects__tags').removeClass('visible');
	});
});


// document.addEventListener()

// Управление сортировкой в секции Проекты
$(document).ready(function(){
	$(".projects__tag").click(function(){
	  var value = $(this).attr("data-filter");
	  var elem = $(".projects__item");
	  if(value == "all"){
		$(elem).show("500");
	  }
	  else{
		$(elem).not("."+value).hide("500");
		$(elem).filter("."+value).show("500");
	  }
	});
})