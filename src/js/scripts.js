function TakeImgTransformToSvg(){
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
}
const slick = {
    init: function() {
        this.toggleSliders();
        this.events();

    },

    events: function() {
        $(window).on('resize', function() {
            slick.toggleSliders();
        });
    },
    slickInit: function() {
        $('.thumb-wrap').not('.slick-initialized').slick({
            infinite: true,
            arrows:true,
            prevArrow:'<span class="slick-prev"><img class="arrow" src="img/ico_dropdown_grey.svg" alt=""></span>',
            nextArrow:'<span class="slick-next"><img class="arrows" src="img/ico_dropdown_grey.svg" alt=""></span>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings:'unslick'
                },

                {
                    breakpoint: 768,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 1145,
                    settings:{
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
    TakeImgTransformToSvg();
});

$('.menu').on('click', function() {
    $('.navigation').slideToggle(300, function(){
        if( $(this).css('display') === "none"){
            $(this).removeAttr('style');
        }
    });
});
