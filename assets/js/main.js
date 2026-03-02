'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

    //slick
    $('.slider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 3,   // ← PC基準にする
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}