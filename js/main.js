window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

new WOW().init();

jQuery(document).ready(function ($) {
  $(".counter").counterUp({ delay: 10, time: 1000 });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});
$(".scrollup").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 200);
  return false;
});

$("svg.radial-progress").each(function (index, value) {
  $(this).find($("circle.complete")).removeAttr("style");
});
$(window)
  .scroll(function () {
    $("svg.radial-progress").each(function (index, value) {
      if (
        $(window).scrollTop() >
          $(this).offset().top - $(window).height() * 0.75 &&
        $(window).scrollTop() <
          $(this).offset().top + $(this).height() - $(window).height() * 0.25
      ) {
        percent = $(value).data("percentage");
        radius = $(this).find($("circle.complete")).attr("r");
        circumference = 2 * Math.PI * radius;
        strokeDashOffset = circumference - (percent * circumference) / 100;
        $(this)
          .find($("circle.complete"))
          .animate({ "stroke-dashoffset": strokeDashOffset }, 2500);
      }
    });
  })
  .trigger("scroll");
