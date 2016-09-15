---
---
var median = function(values) {

  values.sort(function(a, b) {
    return a - b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];
  else
    return (+values[half - 1] + +values[half]) / 2.0;
}

$(function() {
  if (typeof $.fn.toc == 'function') {
    $('#article-toc').toc({
      'container': 'article',
      'scrollToOffset': 125,
      'prefix': 'toc',
      'anchorName': function(i, heading, prefix) {
        return prefix + i;
      }
    });

    var affix = $('.toc-wrap');
    var width = $('.sidebar').width();
    affix.width(width);

    $('.toc-wrap').affix({
      offset: {
        top: $('.toc-wrap').offset().top - 142
      }
    })
  }

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
    return this.optional(element) || /[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@(sfgov.org|sfusd.edu|ucsf.edu|sfmta.com|sfwater.org|sfmta.org|sfdph.org|sfport.com|flysfo.com|sfdpw.org|sfenvironment.org|sfpl.org|dcyf.org|first5sf.org|sfcta.org)/.test(value);
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
    padding: (options.padding) ? options.padding : {
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
  if (label === undefined) {
    for (var key in data[0]) {
      if (data[0].hasOwnProperty(key)) {
        output.push([key.replace(/_/g, " ").toTitleCase(), data[0][key]])
      }
    }
    return output
  }
  else {
    $.each(data, function(idx, rec) {
      if (typeof rec[label] === 'boolean') {
        output.push([rec[label] ? 'Yes' : 'No', rec.count]);
      }
      else {
        output.push([rec[label].toTitleCase(), rec.count]);
      }
      total += +rec.count;
    });
    if (total == 0) {
      return false;
    }
    else {
      return output;
    }
  }
}

var transformNormalize = function(data, groups) {
  $.each(data, function(idx, rec) {
    for (group in groups[0]) {
      rec[groups[0][group]] = Math.round((rec[groups[0][group]] / rec.total) * 100) / 100
    }
  });
  return data;
}

var processCharts = function(c, baseIDs, queryStrings, options, charts) {
  $.ajax({
    url: "https://data.sfgov.org/resource/" + baseIDs[c] + ".json?" + queryStrings[c],
    type: 'GET',
    success: function(response) {
      var opts = {
        bindto: "#chart" + c,
        size: {},
        color: {
          pattern: ['#133140', '#408bae', '#2a6b8c', '#378eb9', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
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
          position: 'bottom'
        }
      }
      else if (options[c].type == 'timeseries' || options[c].type == 'bar') {
        opts.data = {
          xFormat: (options[c].type == 'timeseries' ? '%Y-%m-%dT%H:%M:%S.%L' : ''),
          json: (options[c].transform == 'normalize') ? transformNormalize(response, options[c].groups) : response,
          mimeType: 'json',
          keys: options[c].keys,
          names: {
            not_published: "Not Published",
            published: "Published",
            count: "Count"
          },
          type: 'bar',
          groups: (options[c].groups) ? options[c].groups : ''
        }
        opts.padding = (options[c].padding) ? options[c].padding : {
          top: 0
        }
        opts.axis = {
          x: {
            show: (options[c].x_show == false ? false : true),
            type: (options[c].type == 'timeseries' ? 'timeseries' : 'category'),
            tick: {
              format: (options[c].keys.x == 'month' ? '%b %Y' : (options[c].keys.x == 'year' ? '%Y' : ''))
            }
          },
          y: {
            show: true,
            padding: {
              top: 3,
              bottom: 0
            },
            tick: {
              format: (options[c].yFormat) ? d3.format(options[c].yFormat) : null
            }
          }
        };
      }
      var chart = constructChart(opts);
      charts.push(chart);
      if (c < baseIDs.length - 1) {
        c++
        processCharts(c, baseIDs, queryStrings, options, charts);
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
  $('#stat-inventoried-datasets .stat-number').html(+charts[4].data.values('Published') + +charts[4].data.values('Not Published'));
  $('#stat-published-datasets .stat-number').html(+charts[4].data.values('Published'));
  $('#stat-published-plan .stat-number').html(+charts[10].data.values('Published'));
  $('#stat-targeted-datasets .stat-number').html(+charts[10].data.values('Published') + +charts[10].data.values('Not Published'));
  $.getJSON('https://data.sfgov.org/resource/q6xv-9c3b.json?$select=lag_days&$where=lag_days%3E0&$order=lag_days', function(data) {
    var lagDays = data.map(function(obj) {
      return +obj['lag_days']
    });
    $('#stat-median-lag .stat-number').html(median(lagDays));
  })
}
