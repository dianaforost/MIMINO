$(document).ready(function () {
  $('.variable-width').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.slider-nav'),
    speed: 300,
  });
});

$(document).ready(function () {
    $('.triple-slider').slick({
        arrows: true,
        slidesToShow: 2,
        variableWidth: true,
        appendArrows: $('.slider-navigation'),
        speed: 300,
    });
});

$(document).ready(function () {
    $('.double-lux').slick({
        arrows: true,
        slidesToShow: 2,
        variableWidth: true,
        appendArrows: $('.double-lux__slider-nav'),
        speed: 300,
    });
});
