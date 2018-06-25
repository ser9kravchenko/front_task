//= partials/jquery.min.js
//= partials/slick.min.js

$('.items-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:'.controls.next',
    prevArrow:'.controls.prev',
    dots:true,
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