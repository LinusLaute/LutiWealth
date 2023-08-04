$(function() {
  $('.menu-button').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.menu li').click(function() {
    $(this).toggleClass('open');
    $(this).find('.subpages').toggle();
  });

  // Add the following code for the FAQ section
  $('.faq-question').click(function() {
    $(this).toggleClass('open');
    $(this).parent().siblings('.faq-answer').toggle();
  });
});
