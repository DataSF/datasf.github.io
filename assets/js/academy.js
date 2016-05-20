$(function() {
    //Filter academy list
  var $btns = $('.filter-topic').click(function(ev) {
    ev.preventDefault();
    if ($(this).data("filter") == '*') {
      $('#courseList > div').fadeIn(450);
    }
    else {
      var $el = $($(this).data('filter')).fadeIn(450);
      $('#courseList > div').not($el).fadeOut(450);
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  });

  $("#mc-embedded-subscribe-form-academy").validate({
    rules: {
      EMAIL: {
        required: true,
        email: true,
        matchGov: true
      }
    },
    submitHandler: function(form) {
      $.ajax({
          url: $(form).attr('action'),
          method: $(form).attr('method'),
          data: $(form).serialize(),
          cache: false,
          dataType: "json",
          contentType: "application/json; charset=utf-8"
        })
        .done(function(ret) {
          if (ret.result != "success") {
            $('#mce-error-response').html(ret.msg);
            $('#mce-error-response').show();
            $('#mce-success-response').hide();
          }
          else {
            $('#mce-success-response').html(ret.msg + " Please check your junk folder if you do not receive the email.");
            $('#mce-error-response').hide();
            $('#mce-success-response').show();
          }
        });
    }
  });
});
