$(function() {
  if(location.hash) {
    $('header [class^="home-animate"]').show();
    } else {
    $('.home-animate1').show().addClass("animated flipInY");
    window.setTimeout(function() {
      $('.home-animate2').show().addClass("animated flipInY");
    }, 500);
    window.setTimeout(function() {
      $('.home-animate3').show().addClass("animated flipInY");
    }, 800);
    window.setTimeout(function() {
      $('.home-animate4').show().addClass("animated flipInY");
    }, 1000);
    window.setTimeout(function() {
      $('.home-animate5').show().addClass("animated flipInX");
    }, 1200);
  }
  $('a').click(function() {
    var self = $(this);
    if(self.attr('href').charAt(0) == "#" &&
      self.attr('href').slice(1).length > 0) {
      $('header').addClass('header-header', 400);
      $('header .button').addClass('button-header', 400);
      $('header .name').addClass('name-header', 400);
      $('#content section').hide();
      $('#content').show();
      $(self.attr('href')).show('blind', 800);
    } else {
      $('header').removeClass('header-header', 400);
      $('header .button').removeClass('button-header', 400);
      $('header .name').removeClass('name-header', 400);
      $('#content').hide();
    }
  });
  
  if(location.hash) {
    $('a[href="'+location.hash+'"]').click();
  }
  
  
  
  $('.button[rel="tooltip"]').tooltip({placement: 'right'});
});