$(function() {
  $('.home-animate1').show().addClass("animated flipInY");
  window.setTimeout(function() {
    $('.home-animate2').show().addClass("animated flipInY");
  }, 500);
  window.setTimeout(function() {
    $('.home-animate3').show().addClass("animated flipInY");
  }, 1000);
  window.setTimeout(function() {
    $('.home-animate4').show().addClass("animated rotateInUpLeft");
  }, 1500);
});