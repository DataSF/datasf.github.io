$(function() {
  $('.read-more-button').click(function(){
    console.log($( this ).siblings('.instructor-bio'))
    $( this ).siblings( '.instructor-bio' ).toggleClass('read-less');
    if($(this).text()=='Show Less') $(this).text('Show More'); 
    else  $(this).text('Show Less'); 
  });
})
