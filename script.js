$(function() {
  $('.menu-button').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.menu li').click(function() {
    $(this).toggleClass('open');
    $(this).find('.subpages').toggle();
  });
  
  $('.faq-question-container').click(function() {
    $(this).find('.faq-question').toggleClass('open');
    $(this).siblings('.faq-answer').toggle();
  });
});
