import $ from "jquery";

export function moreProjects() {

    $(function(){
        $('.moreprojects__wrapper .moreprojects__slideritem').height($('.moreprojects__wrapper .moreprojects__slideritem').width()/2);
      
        $(window).resize(function(){
          $('.moreprojects__wrapper .moreprojects__slideritem').height($('.moreprojects__wrapper .moreprojects__slideritem').width()/2);
        });
    });

    
}