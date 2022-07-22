import $ from 'jquery';
let slickWrappers = [
  {
    wrapper: '.project-promo__slider-wrapper',
    slider: '.project-promo__slider-list',
  },
];

export function slickSliders() {
  // страница Проекта
  $('.project-promo__slider-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
  $('.project-description__sliderlist').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $(function () {
    let temp = $('.moreprojects__sliderlist').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      // autoplay: true,
      speed: 500,
      // fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            fade: false,
            arrows: true,
            //   autoplay: true,
            speed: 500,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });

    slickWrappers.forEach((slickWrapperObject) => {
      let slickSlider = slickWrapperObject.slider;
      let slickWrapper = slickWrapperObject.wrapper;
      $(slickSlider).on('afterChange', function (event, slick, currentSlide) {
        $(slickWrapper + ' .current-slide').text(currentSlide + 1);
      });
      $(slickWrapper + ' .max-slide').text($(slickSlider + ' .slick-track').children().length);
    });
  });
}

export function slickCounter() {
  // let slickSlider = document.querySelector('.project-promo__slider-list');
  // let slidesQuantity = slickSlider.querySelectorAll(
  //   ':scope .slick-slide'
  // ).length;
  // let slickCounterItem = document.querySelector('.slider-counter');
  // let slickAmounts = slickCounterItem.querySelectorAll(':scope span.symbol');
  // console.log(slickAmounts[0].innerHTML);
  // slickAmounts[0].innerHTML =
  // slickAmounts[1].innerHTML = slidesQuantity;
}
