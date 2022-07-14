import $ from "jquery";

export function headerJS() {
    
    // burger-menu
    $('.header__burger, .header__overlay').click(function(){
        $('.header__burger').toggleClass('open');
        $('.header__overlay').toggleClass('open');
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

}