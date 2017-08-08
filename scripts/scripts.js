$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('#cssmenu').removeClass('original');
      $('#cssmenu').addClass('fixed');
    }
    if ($(window).scrollTop() < 500) {
      $('#cssmenu').addClass('original');
      $('#cssmenu').removeClass('fixed');
    }
  });
});
