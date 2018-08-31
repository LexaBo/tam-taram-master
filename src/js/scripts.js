const slick = {
    init: function() {
        this.cache();
        this.toggleSliders();
        this.events();
    },
    cache: function (){
        this.$sliders = $('.thumb-wrap');
        this.slickInited = false;
    },
    events: function() {
        $(window).on('resize', function() {
            slick.toggleSliders();
        });
    },
    slickInit: function() {
        slick.$sliders.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows:true,
            prevArrow:'<span class="slick-prev"></span>',
            nextArrow:'<span class="slick-next"></span>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings:'unslick'
                },

                {
                    breakpoint: 768,
                    settings:'slick'
                }
            ]
        });
    },
    slickDestroy: function() {
        this.$sliders.slick('unslick');
        this.slickInited = false;
    },
    toggleSliders: function () {
        if ($(window).width() > 768) {

            if (!slick.slickInited) {
                slick.slickInit();
            }
        } else if(slick.slickInited) {
            slick.slickDestroy();
        }
    }
};

$(document).ready(function () {
    slick.init();

    jQuery('img.svg').each(function(){
        const $img = jQuery(this);
        const imgID = $img.attr('id');
        const imgClass = $img.attr('class');
        const imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            let $svg = jQuery(data).find('svg');

            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            $img.replaceWith($svg);

        }, 'xml');

    });
});

$('.menu').on('click', function() {
    $("body").toggleClass("fixed");
    $('.navigation').slideToggle(300, function(){
        if( $(this).css('display') === "none"){
            $(this).removeAttr('style');
        }
    });
});
