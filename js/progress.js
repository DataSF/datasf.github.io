var processCharts = function(c,baseIDs,queryStrings,options,charts) {
  $.ajax({
    url: "https://data.sfgov.org/resource/" + baseIDs[c] + ".json?" + queryStrings[c],
    type: 'GET',
    success: function(response) {
      var opts = {
        bindto: "#chart" + c,
        size: {},
        color: {
          pattern: ['#133140','#296b8c','#378eb9', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
        }
      }
      if (options[c].size) {
        opts.size = options[c].size
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

$(function() {
  //buildPage();
  // Dataset invnentory q6xv-9c3b 
  // Inventory status wuym-j7si
  var baseIDs = ['wuym-j7si', 'wuym-j7si', 'q6xv-9c3b', 'q6xv-9c3b', 'q6xv-9c3b','q6xv-9c3b'];

  var queryStrings = [
    [
      '$select=inventory_status,count(department_or_division)+AS+count',
      '$group=inventory_status',
      '$order=inventory_status'
    ].join('&'), [
      '$select=publication_plan_status,count(department_or_division)+As+count',
      '$group=publication_plan_status',
      '$order=publication_plan_status'
    ].join('&'), [
      '$select=date_trunc_ym(date_published)+AS+month,count(*)',
      '$group=month',
      '$order=month'
    ].join('&'), [
      '$select=date_trunc_y(date_published)+AS+year,count(*)',
      '$group=year',
      '$order=year'
    ].join('&'), [
      '$select=publishing_status,count(dataset_name)+AS+count',
      '$group=publishing_status',
      '$order=count+desc'
    ].join('&'), [
      '$select=category,count(*)+AS+number_of_datasets',
      '$group=category',
      '$order=number_of_datasets+desc',
      '$where=category<>""'
    ].join('&')
  ];

  var options = [{
    type: "pie",
    label: "inventory_status"
  }, {
    type: "pie",
    label: "publication_plan_status"
  }, {
    type: "timeseries",
    keys: {
      x: 'month',
      value: ['count']
    }
  }, {
    type: "timeseries",
    keys: {
      x: 'year',
      value: ['count']
    }, 
    size: {
      height: 200  
    }
  }, {
    type: "pie",
    label: "publishing_status"
  }, {
    type: "bar",
    keys: {
      x: 'category',
      value: ['number_of_datasets']
    }
  }];
  
  processCharts(0,baseIDs,queryStrings,options,[]);
  
  
  
  $('.by-year').on('click', function(ev){
    $('#chart2').toggle();
    $('#chart3').toggle();
    ev.preventDefault();
  })
});

//query string, transformer (optional), chart, text