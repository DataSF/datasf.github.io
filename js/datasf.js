---
---
$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $('button.ext-sf-opendata').on('click', function(ev) {
    ga('send', 'event', 'Catalog', 'Search', $('#search-catalog .search-input').val(), 1);
  });

  $('a.ext-sf-opendata').on('click', function(ev) {
    ga('send', 'event', 'Catalog', 'Click Link', 'From ' + window.location.pathname, 1)
  });
  
  $('a.take-survey').on('click', function(ev) {
    ga('send', 'event', 'Take Survey', 'Click', 'Link', 1)
  });
  
   $('a.download').on('click', function(ev) {
    ga('send', 'event', 'Download', $(ev.target).data('download-type'), $(ev.target).parent().data('download-name'), 1)
  });
  

  // Set up custom validators to check for gov domains
  jQuery.validator.addMethod("matchGov", function(value, element) {
    return this.optional(element) || /[_a-z0-9-]+(\.[_a-z0-9-]+)*@(sfgov.org|sfmta.com|sfwater.org|sfmta.org|sfdph.org|sfport.com|flysfo.com|sfdpw.org|sfenvironment.org|sfpl.org)/.test(value);
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
      if (element.parent('.input-group').length) {
        error.insertAfter(element.parent());
      }
      else {
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

  $("#mc-embedded-subscribe-form").validate({
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
          console.log(ret);
          if (ret.result != "success") {
                $('#mce-error-response').html(ret.msg);
                $('#mce-error-response').show();
                $('#mce-success-response').hide();
            } else {
                $('#mce-success-response').html(ret.msg);
                $('#mce-error-response').hide();
                $('#mce-success-response').show();
            }
        });
    }
  });

  var table = $('#inventory').DataTable({
    "columns": [{
      "data": "department_or_division" 
    }, {
      "data": "dataset_name"
    }, {
      "data": "dataset_description"
    }],
    "columnDefs": [{
      "data": null,
      "defaultContent": "",
      "targets": -1
    }]
  });
  // Construct a SODA query string - I'm using the farmers market data for my experiment
  url = 'https://data.sfgov.org/resource/q6xv-9c3b.json';

  $.getJSON(url, function(data, textstatus) {
    table.rows.add(data).draw();
  }); // end $.getJSON
  
  /*
  var chart = c3.generate({
    data: {
      url: '../js/q6xv-9c3b.csv',
      x: 'publishing_status',
      type: 'pie'
    },
    axis: {
      x: {
        type: 'category'
      }
    }
  });
  
  var filters = [
    {
      field: 'field_3',
      operator: 'is',
      value: 'Assessor-Recorder'
    }
  ]
  
   $.ajax({
    url: "https://api.knackhq.com/v1/scenes/scene_1/views/view_2/records?filters="+encodeURIComponent(JSON.stringify(filters)),
    type: "GET",
    headers: {"X-Knack-Application-Id": "554d59e67bc4aa8c081a4b65", "X-Knack-REST-API-Key":"knack"},
    success: function(response) { 
       console.log(response.records);
    }
  });*/
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