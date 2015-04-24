---
---
/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  // Set up custom validators to check for gov domains
  jQuery.validator.addMethod("matchGov", function(value, element) {
    return this.optional(element) || /[_a-z0-9-]+(\.[_a-z0-9-]+)*@(sfgov.org|sfmta.com|sfwater.org|sfmta.org|sfdph.org|sfport.com|flysfo.com|sfdpw.org)/.test(value);
  }, "Please enter a valid SFGov email address");
  
  //Reset validator defaults to integrate with Bootstrap 3 conventions
  $.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    var $bodyMargin = $('body').css('margin-top').split("px")[0];
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - (+$bodyMargin + 10)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

  $('.navbar a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
  });
  
  var $container = $('.isotope').isotope({
    itemSelector: '.course-item',
    masonry: {},
    filter: "*"
  });


  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };
  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });
  // change is-checked class on buttons
  $('.btn-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  $("#form-learn-more").validate({
    rules: {
      _replyto: {
        required: true,
        email: true,
        matchGov: true
      }
    },
    submitHandler: function(form) {
      var data = $(form).serialize();
      data += '&_subject=Please add me to the Data Academy list';
      console.log(data);
      $.ajax({
        url: "//formspree.io/jason.lally@sfgov.org",
        method: "POST",
        data: data,
        dataType: "json"
      })
      .done(function() {
        $('#form-learn-more-success').show();
      });
    }
  });
});

// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
  target: '.navbar-fixed-top'
})*/

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

var now = moment();
var dueDate = moment('2015-03-13');

var weeks = dueDate.diff(now, 'weeks');

$('.due-in').html('in ' + weeks + ' weeks on ');

$('table').addClass('table table-striped');