$(function () {

  $('.product-slider__items').slick({
    prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prev top-slider__btn--leftproduct"><svg class="top-slider__arrow top-slider__arrow--prev"><use xlink:href="./images/sprite.svg#icon-arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next top-slider__btn--rightproduct"><svg class="top-slider__arrow top-slider__arrow--next"><use xlink:href="./images/sprite.svg#icon-arrow-right"></use></svg></button>',
    infinite: false,
    dots: false,
  });

  $('.interested__slider').slick({
    prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--leftinterested"><svg class="top-slider__arrow top-slider__arrow--prev"><use xlink:href="./images/sprite.svg#icon-arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="top-slider__btn  top-slider__btn--rightinterested"><svg class="top-slider__arrow top-slider__arrow--next"><use xlink:href="./images/sprite.svg#icon-arrow-right"></use></svg></button>',
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        }
      },
    ]
  });

  $('.top-slider__inner').slick({
    prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prev"><svg class="top-slider__arrow top-slider__arrow--prev"><use xlink:href="./images/sprite.svg#icon-arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"><svg class="top-slider__arrow top-slider__arrow--next"><use xlink:href="./images/sprite.svg#icon-arrow-right"></use></svg></button>',

    infinite: false,
    dots: true,
  });

  $('.product-tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
    $(this).addClass('product-tabs__top-link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active')
  });



  $(".star").rateYo({
    spacing: "6px",
    starWidth: "16px",
    normalFill: "#C1C1C14D",
    ratedFill: "#FFB800",
    readOnly: true,
    starSvg: '<svg><use xlink:href="./images/sprite.svg#icon-star"></use></svg>'
  });


  $(function () {
    $(".comment__raiting").rateYo({
      fullStar: true,
      spacing: "6px",
      starWidth: "16px",
      normalFill: "#C1C1C14D",
      ratedFill: "#FFB800",
      starSvg: '<svg><use xlink:href="./images/sprite.svg#icon-star"></use></svg>'
    });
  });


  $('.shop-content__filter-btn').on("click", function (event) {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.shop-content__filter-btn-list').on("click", function (event) {
    $('.product-card').addClass('product-card--list');
  });

  $('.shop-content__filter-btn-grid').on("click", function (event) {
    $('.product-card').removeClass('product-card--list');
  });

  $('.shop-content__filter-btn-list').on("click", function (event) {
    $('.products__items').addClass('products__items--list');
  });

  $('.shop-content__filter-btn-grid').on("click", function (event) {
    $('.products__items').removeClass('products__items--list');
  });


  $('.select-style__sort, .select-style__show').styler();
  
  $('.number__input').styler();

  $('.partners__list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '300px',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });


  $('.burger-btn').on("click", function (event) {
    $('.mobile-menu').toggleClass('mobile-menu--active')
  });




  $('.burger-btn').on("click", function (event) {
    $('.mobile-menu').toggleClass('overlay')
  });

  $('.shop-content__catalogbtn').on("click", function (event) {
    $('.catalog__filter').toggleClass('overlay--filter')
  });

  $('.shop-content__catalogbtn').on("click", function (event) {
    $('.catalog__filter').toggleClass('catalog__filter--active')
  });

  $('.catalog__closebtn').on("click", function (event) {
    $('.catalog__filter').removeClass('catalog__filter--active')
  });

  $('.burger-btn').on("click", function (event) {
    $('.overlay').toggleClass('overlay--active')
  });

  $('.mobile-menu__closebtn').on("click", function (event) {
    $('.mobile-menu').removeClass('mobile-menu--active')
  });

  $('.user-nav__btn--search').on("click", function (event) {
    $('.search-form').toggleClass('search-form--active')
  });

  $('.header__catalog-btn').on("click", function (event) {
    $('.dropdownmenu').toggleClass('dropdownmenu--active')
  });

  $('.categories__btn').on("click", function (event) {
    $('.categories__btn').toggleClass('categories__btn--active')
  });

  $('.categories__btn').on("click", function (event) {
    $('.categories__list').toggleClass('categories__list--active')
  });

  $('.offer-filter__btn').on("click", function (event) {
    $('.offer-filter__btn').toggleClass('offer-filter__btn--active')
  });

  $('.offer-filter__btn').on("click", function (event) {
    $('.offer-filter__list').toggleClass('offer-filter__list--active')
  });

  $('.brands__btn').on("click", function (event) {
    $('.brands__btn').toggleClass('brands__btn--active')
  });

  $('.brands__btn').on("click", function (event) {
    $('.brands__list').toggleClass('brands__list--active')
  });

  $('.price-filter__btn').on("click", function (event) {
    $('.price-filter__btn').toggleClass('price-filter__btn--active')
  });

  $('.price-filter__btn').on("click", function (event) {
    $('.price-filter__list').toggleClass('price-filter__list--active')
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


var inp = document.querySelector('.search-form__input');
window.addEventListener('resize', changePlaceholder);
changePlaceholder.call(window);

function changePlaceholder() {
  inp.setAttribute('placeholder', this.innerWidth >= 1024 ? 'Найти в магазине ...' : 'Я ищу...');

}
$(function () {
  $('.header__catalog-btn').on('click', function () {
    $(this).toggleClass('header__catalog-btn--active');
  });
});



var $range = $(".price-filter__sliderinput");
var $inputFrom = $(".price-filter__from");
var $inputTo = $(".price-filter__to");
var instance;
var min = 0;
var max = 1000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  type: "double",
  min: 0,
  max: 1100,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});
