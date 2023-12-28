$(document).ready(function () {
  $(".wrapper1").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true
  });
});

$(document).ready(function () {
  $(".wrapper2").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay:true,
    autoplaySpeed:1000,
    cssEase: "linear",
  });
});

$(document).ready(function () {
  $(".wrapper3").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000
  });
});
