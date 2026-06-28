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

const openBtn = document.querySelector('.js-openTrailer');
const modal = document.querySelector('#trailerModal');
const closeBtn = document.querySelector('.modal__close');
const overlay = document.querySelector('.modal__overlay');
const video = document.querySelector('#trailerVideo');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();

    modal.classList.add('active');

    video.currentTime = 0;
    video.play();
});

function closeModal() {
    modal.classList.remove('active');

    video.pause();
    video.currentTime = 0;
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
