$(function(){

  $('.top-slider__inner').slick({
    prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prev"><svg class="top-slider__arrow top-slider__arrow--prev"><use xlink:href="./images/sprite.svg#icon-arrow-left"></use></svg></button>',

		nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"><svg class="top-slider__arrow top-slider__arrow--next"><use xlink:href="./images/sprite.svg#icon-arrow-right"></use></svg></button>',

    infinite: false,
  });

  $('.header__catalog-btn').on("click",function (event) {
    $('.dropdown').toggleClass('dropdown--active')
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});


$(function(){
  $('.header__catalog-btn').on('click', function(){
      $(this).toggleClass('header__catalog-btn--active');
  });
});





