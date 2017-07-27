$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('#cssmenu').removeClass('original');
      $('#cssmenu').addClass('fixed');
    }
    if ($(window).scrollTop() < 600) {
      $('#cssmenu').addClass('original');
      $('#cssmenu').removeClass('fixed');
    }
  });
});