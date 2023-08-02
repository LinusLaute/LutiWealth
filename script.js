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
  $('.faq-question-container').click(function() {
    $(this).find('.faq-question').toggleClass('open');
    $(this).siblings('.faq-answer').toggle();
  });
});

