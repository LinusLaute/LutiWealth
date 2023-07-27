$(function() {
  $('.menu-button').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.menu li').click(function() {
    $(this).toggleClass('open');
    $(this).find('.subpages').toggle();
  });
});
