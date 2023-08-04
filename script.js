$(function() {
  $('.menu-button').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.menu li').click(function() {
    $(this).toggleClass('open');
    $(this).find('.subpages').toggle();
  });

  
  $('.faq-question').click(function() {
    $(this).toggleClass('open');
    $(this).next('.faq-answer').toggleClass('show');
  });
});
