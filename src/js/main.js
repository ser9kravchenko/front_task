//= partials/jquery.min.js
//= partials/slick.min.js

$('.items-slider .items-slider__content').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:'.items-slider__controls.items-slider__controls_next',
    prevArrow:'.items-slider__controls.items-slider__controls_prev',
    dots:true,
    appendDots:'.items-slider__dots',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }
    ]
});