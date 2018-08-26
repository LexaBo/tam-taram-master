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





$('.thumb-wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows:true,
    prevArrow:'<span class="slick-prev"><</span>',
    nextArrow:'<span class="slick-next">></span>',
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: 'slick'

        },
        {
            breakpoint: 320,
            settings: 'unslick'
        },

    ]
});

