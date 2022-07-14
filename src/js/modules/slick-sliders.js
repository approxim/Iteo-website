import $ from "jquery";

export function slickSliders() {

    // страница Проекта
    $('.project-promo__slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
    $('.moreprojects__sliderlist').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // autoplay: true,
        speed: 500,
        fade: true,
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
            }
          },
          {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
            }
          },
        ]
      });


}
