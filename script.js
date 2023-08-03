$(function() {
  $('.menu-button').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.menu li').click(function() {
    $(this).toggleClass('open');
    $(this).find('.subpages').toggle();
  });

  // Add click event listener to direct children of the wrapper
  $('.about-section-wrapper > .about-section').click(function(event) {
    // Get the ID of the clicked "About" section
    const aboutID = $(this).attr('id');
    // Redirect based on the clicked section's ID
    if (aboutID === 'about1') {
      window.location.href = 'information.html';
    } else if (aboutID === 'about2') {
      window.location.href = 'casefund.html';
    } else if (aboutID === 'about3') {
      window.location.href = 'information.html';
    }
  });

  $('.faq-question').click(function() {
    $(this).toggleClass('open');
    $(this).next('.faq-answer').toggleClass('show');
  });
});
