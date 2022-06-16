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
$('.header__burger, .header__overlay').click(function(){
	$('.header__burger').toggleClass('open');
	$('.header__overlay').toggleClass('open');
	// $('nav').toggleClass('show');
	// $('body').toggleClass('overflow');
  });



// Появление-скрытие меню сортировки
$('.projects__tagcontainer').click(function() {
	$('.projects__tags').toggleClass('visible');
});

// Нажатие на кнопки пунктов сортера
$('.projects__tag').each(function() {
	$(this).click(function() {
	  var textValue = $(this).html();
	  $('.projects__tagcontainer').html(textValue);
	  $('.projects__tags').removeClass('visible');
	});
});

// В случае если ткнуть мимо пунктов сортера то список скроется
window.addEventListener("click", (e) => {
	const NODES = ["BUTTON"];
	let container = document.querySelector('.projects__tags');
  	if (NODES.includes(e.target.nodeName)) return;
  	container.classList.remove("visible");
});

// Управление сортировкой в секции Проекты
$(document).ready(function(){
	$(".projects__tag").click(function(){
	  var value = $(this).attr("data-filter");
	  var elem = $(".projects__item");
	  if(value == "all"){
		$(elem).show("500");
	  }
	  else{
		$(elem).not(".projects__item[data-sort~='"+value+"']").hide("500");
		$(elem).filter(".projects__item[data-sort~='"+value+"']").show("500");
	  }
	});
})

