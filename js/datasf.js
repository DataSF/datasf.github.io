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
    return this.optional(element) || /[_a-z0-9-]+(\.[_a-z0-9-]+)*@(sfgov.org|sfmta.com|sfwater.org|sfmta.org|sfdph.org|sfport.com|flysfo.com|sfdpw.org|sfenvironment.org|sfpl.org|dcyf.org|first5sf.org)/.test(value);
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
          if (ret.result != "success") {
                $('#mce-error-response').html(ret.msg);
                $('#mce-error-response').show();
                $('#mce-success-response').hide();
            } else {
                $('#mce-success-response').html(ret.msg + " Please check your junk folder if you do not receive the email.");
                $('#mce-error-response').hide();
                $('#mce-success-response').show();
            }
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

var constructFilter = function(string, dept) {
  if (string == '') {
    if (!dept || dept == '') {
      return '';
    }
    else {
      return '&$where=department_or_division="' + encodeURIComponent(dept) + '"';
    }
  }
  else {
    return "&$where=" + string + (dept ? '+AND+department_or_division="' + encodeURIComponent(dept) + '"' : '');
  }
}

var constructChart = function(options) {
  if (!options.size) {
    options.size = {
      width: 100,
      height: 100
    }
  }
  var constructed = c3.generate({
    bindto: options.bindto,
    size: options.size,
    data: options.data,
    legend: (options.legend ? options.legend : {
      show: false
    }),
    color: (options.color ? options.color : {}),
    padding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    pie: {
      label: {
        show: false
      }
    },
    axis: (options.axis ? options.axis : {})
  });
  
  return constructed;
}

var transform = function(data, label) {
  var output = [];
  var total = 0;
  $.each(data, function(idx, rec) {
    output.push([rec[label], rec.count]);
    total += +rec.count;
  });
  if (total == 0) {
    return false;
  }
  else {
    return output;
  }
}

var processCharts = function(c,baseIDs,queryStrings,options,charts) {
  $.ajax({
    url: "https://data.sfgov.org/resource/" + baseIDs[c] + ".json?" + queryStrings[c],
    type: 'GET',
    success: function(response) {
      var opts = {
        bindto: "#chart" + c,
        size: {},
        color: {
          pattern: ['#133140','#1c485e','#2a6b8c','#378eb9', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
        }
      }
      if (options[c].size) {
        opts.size = options[c].size
      }
      
      if (options[c].colors) {
        opts.color = {
          pattern: options[c].colors
        }
      }
      
      if (options[c].type == 'pie') {
        response = transform(response, options[c].label);
        opts.data = {
          columns: response,
          type: 'pie'
        };
        opts.legend = {
          show: true,
          position: 'right'
        }
      }
      else if (options[c].type == 'timeseries' || options[c].type == 'bar') {
        opts.data = {
          xFormat: (options[c].type == 'timeseries' ? '%Y-%m-%dT%H:%M:%S.%L' : ''),
          json: response,
          mimeType: 'json',
          keys: options[c].keys,
          type: 'bar'
        }
        opts.axis = {
          x: {
            show: (options[c].x_show == false ? false : true),
            type: (options[c].type == 'timeseries' ? 'timeseries' : 'category'),
            tick: {
              format: (options[c].keys.x == 'month' ? '%b %Y' : (options[c].keys.x == 'year' ? '%Y' : ''))
            }
          }
        };
      }
      var chart = constructChart(opts);
      charts.push(chart);
      if (c < baseIDs.length - 1) {
        c++
        processCharts(c,baseIDs,queryStrings,options,charts);
      }
      else {
        processText(charts);
        return;
      }
    }
  });
}

var processText = function(charts) {
  $('#stat-inventory .stat-number').html(charts[0].data.values('Complete'));
  $('#stat-plans-complete .stat-number').html(charts[1].data.values('Complete'));
  $('#stat-inventoried-datasets .stat-number').html( +charts[4].data.values('Published') + +charts[4].data.values('Not Published'));
  $('#stat-published-datasets .stat-number').html( +charts[4].data.values('Published'));
}