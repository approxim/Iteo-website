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



}
