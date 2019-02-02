const main = document.body.querySelector('main');
main.addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
        const id = e.target.getAttribute('data-id');
        const children = document.getElementById(`${id}`).children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('video_hide');
        }
        e.target.style.display = 'none';
    }
});


const slick = {
    init: function () {
        this.toggleSliders();
        this.events();

    },

    events: function () {
        $(window).on('resize', function () {
            slick.toggleSliders();
        });
    },
    slickInit: function () {
        $('.thumb-wrap').not('.slick-initialized').slick({
            infinite: true,
            arrows: true,
            prevArrow: '<span class="slick-prev"><img class="arrow" src="../img/ico_dropdown_grey.svg" alt=""></span>',
            nextArrow: '<span class="slick-next"><img class="arrows" src="../img/ico_dropdown_grey.svg" alt=""></span>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: 'unslick'
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 1145,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    },

    toggleSliders: function () {
        if ($(window).width() > 768) {
            slick.slickInit();
        }

    }
};

$(document).ready(function () {
    slick.init();
});

$('.menu').on('click', function () {
    $('.navigation').slideToggle(300, function () {
        if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
        }
    });
});

