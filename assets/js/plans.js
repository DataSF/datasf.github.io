// each planning period, add the start date of the ***next*** period at the top of the array below

var planPeriods = [
  '01/01/2017',
  '07/01/2016',
  '01/01/2016',
  '07/01/2015'
  ]
  
//putting this in a variable until we have some time to automate sums, the system of record for plans (Knack) doesn't let us do aggregations yet through the API, so looking at doing a simple js sum on the records

var cityWideTargets = [43, 64, 121]

//Functions
var fetchStats = function(baseURL, deptFilter, index) {
  
  if(!index) {
    var index = 0
  }
  
  var before = moment(planPeriods[index + 1],'MM/DD/YYYY').add(6,'months').format("YYYY-MM-DD")
  var after = moment(planPeriods[index + 1],'MM/DD/YYYY').format("YYYY-MM-DD")
  
   var dataQueryString2 = [
    '$select=date_trunc_ym(first_published)+AS+month,count(*)',
    '$group=month',
    '$order=month'
  ].join('&')

  var dataQueryString3 = [
    '$select=count(*)'
  ].join('&')
  
  $.ajax({
    url: baseURL + "?" + dataQueryString2 + constructFilter('month>="'+after+'"+AND+month<"'+before+'"+AND+month+IS+NOT+NULL', deptFilter),
    type: 'GET',
    success: function(response) {
      var opts = {
        bindto: '#chart2',
        data: {
          xFormat: '%Y-%m-%dT%H:%M:%S.%L',
          json: response,
          mimeType: 'json',
          keys: {
            x: 'month',
            value: ['count']
          },
          type: 'bar',
          colors: {
            "count": "#ffffff"
          }
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: function (x) { var m = ['J','F','M','A','M','J','J','A','S','O','N','D']; return m[x.getMonth()]; }
            }
          }
        }
      }
      var bar = constructChart(opts);
    }
  });
  
  $.ajax({
    url: baseURL + "?" + dataQueryString3 + constructFilter('first_published>="'+after+'"+AND+first_published<"'+before+'"', deptFilter),
    type: "GET",
    success: function(response) {
      var targetDate = moment(before).subtract(1,"day").format('MMM DD, YYYY'),
        sinceDate = moment(after).format('MMM YYYY')
        
      $("#chart-published-since .chart-number").html(response[0].count);
      $("#chart-targeted-citywide .chart-number").html(cityWideTargets[index]);
      
      $("#chart-published-since .chart-published-since-date").html(sinceDate);
      $('.published-since-date').html(sinceDate)
      
      $("#chart-targeted .chart-targeted-date").html(moment(before).subtract(1,"day").format('MMM, DD YYYY'));
      $("#chart-targeted-citywide .chart-targeted-date").html(targetDate);
      $('.targeted-date').html(targetDate)
    }
  });
  
}


var fetchPlan = function(deptFilter, index) {
  if(!index) {
    var index = 0
  }
  var after = moment(planPeriods[index + 1],'MM/DD/YYYY').subtract(2,"months").format("MM/DD/YYYY")
  var before = planPeriods[index]
  
  if (deptFilter && deptFilter != '') {
    //department plans
    var filters = [{
      field: 'field_20',
      operator: 'is',
      value: deptFilter
    }, {"field":"field_18","operator":"is before","value":before,"field_name":"Submission"},
    {"field":"field_18","operator":"is after","value":after,"field_name":"Submission"}
    ]

    $.ajax({
      url: "https://api.knack.com/v1/scenes/scene_42/views/view_57/records?filters=" + encodeURIComponent(JSON.stringify(filters)),
      type: "GET",
      headers: {
        "X-Knack-Application-Id": "554d59e67bc4aa8c081a4b65",
        "X-Knack-REST-API-Key": "knack"
      },
      success: function(response) {
        $("#citywide-narrative").hide();
        if (response.total_records > 0) {
          if (response.records[0].field_44) {
            $("#chart-targeted").show();
            $("#chart-targeted .chart-number").html(response.records[0].field_44);
          }
          else {
            $("#chart-targeted").hide();
          }
          $('#dept-link').show();
          $(".department-mission").html((response.records[0].field_21 ? response.records[0].field_21 : ""));
          $("#dept-link .website-text").html((response.records[0].field_21 ? response.records[0].field_28 : ""));
          $(".narrative-maintenance").html((response.records[0].field_17 ? response.records[0].field_17 : ""));
          $(".narrative-publishing").html((response.records[0].field_60 ? response.records[0].field_60 : ""));
          $(".narrative-planning").html((response.records[0].field_59 ? response.records[0].field_59 : ""));
          $("#inventory-incomplete").hide();
        }
        else {
          $(".department-mission").html('The plan for this period is not available.');
          $("#dept-link").hide();
          $(".narrative-maintenance").html('');
          $(".narrative-publishing").html('');
          $(".narrative-planning").html('');
          $("#chart-targeted").hide();
        }
        $("#chart-targeted-citywide").hide();
      }
    });
  }
  else {
    $("#citywide-narrative").show();
    $(".department-mission").html('');
    $("#dept-link").hide();
    $(".narrative-maintenance").html('');
    $(".narrative-publishing").html('');
    $(".narrative-planning").html('');
    $("#chart-targeted").hide();
    $("#chart-targeted").hide();
    $("#chart-targeted-citywide").show();
  }
}

var buildPage = function(dept, url, table) {
  var deptFilter = dept;
  var baseURL = url;
  
  $("#plan-picker select").val("0");

  //queries
  var dataQueryString = [
    '$select=publishing_status,count(dataset_name)+AS+count',
    '$group=publishing_status',
    '$order=count+desc'
  ].join('&')


  //construct charts
  $.ajax({
    url: baseURL + "?" + dataQueryString + constructFilter("publishing_status <> 'Retired'", deptFilter),
    type: "GET",
    success: function(response) {
      var columns = transform(response,"publishing_status");
      if (columns) {
        $("#chart-number-published").show();
        $("#chart-published-since").show();
        var opts = {
          bindto: '#chart',
          data: {
            columns: columns,
            type: 'pie',
            colors: {
              "Published": '#ffffff',
              "Not Published": '#8bc34a'
            },
            color: function(color, d) {
              return d && d === "Not Published" ? d3.rgb(color).darker(.6) : color;
            }
          },
          other: {
            pie: {
              label: {
                show: false
              }
            }
          }
        }
        var pie = constructChart(opts);
        
        var total = +pie.data.values('Published') + +pie.data.values('Not Published');
        $("#chart-number-published .chart-number").html(Math.round(pie.data.values('Published') / total * 100)+'%');
        $("#chart-number-published .ratio").html((pie.data.values('Published') ? pie.data.values('Published') : 0 ) + "/" + total + " datasets");
        $("#inventory-incomplete").hide();
      }
      else {
        $("#chart-number-published").hide();
        $("#chart-published-since").hide();
        $("#inventory-incomplete").show();
      }
    }
  });

  fetchStats(baseURL,deptFilter)
  fetchPlan(deptFilter)

  if (table) {
    var search = deptFilter == '' ? '' : '(^' + deptFilter + '$)'
    table.columns(1).search(search, true, false).draw()
  }
}

$(function() {
  var baseURL = 'https://data.sfgov.org/resource/q6xv-9c3b.json';

  var $select = $('.selectize-select').selectize();

  buildPage('', baseURL);

  //Dataset inventory
  var table = $('#inventory').DataTable({
    "columns": [{
      "data": "inventory_id"
    }, {
      "data": "department_or_division"
    }, {
      "data": "dataset_name"
    }, {
      "data": "dataset_description"
    }, {
      "data": "publishing_status"
    }],
    "columnDefs": [{
      "data": null,
      "defaultContent": "",
      "targets": -2
    },
    {
      "targets": -1,
      "data": "publishing_status",
      "render": function ( data, type, full, meta ) {
        if(data === 'Published') {
          return '<a href="'+full.dataset_link+'" target="_blank">' + data + '</a>';
        } else {
          return data
        }
      }
    },
    {
      "targets": 2,
      "data": "dataset_name",
      "render": function ( data, type, full, meta ) {
        if(full.publishing_status === 'Published') {
          return '<a href="'+full.dataset_link+'" target="_blank">'+ data + '</a>';
        } else {
          return data
        }
      }
    }],
    "pageLength": 10
  });

  $.getJSON(baseURL, function(data, textstatus) {
    table.rows.add(data).draw();
  });

  $('#select-department').on('change', function(ev) {
    window.location.hash = $(ev.target).val();
  });
  
  $('#plan-picker').on('change', function(ev) {
    fetchPlan($('#select-department').text(),parseInt($(ev.target).val()))
    fetchStats(baseURL, $('#select-department').text(),parseInt($(ev.target).val()))
  })
  
  // Bind an event to window.onhashchange that, when the history state changes,
  // gets the url from the hash and displays either our cached content or fetches
  // new content to be displayed.
  $(window).bind( 'hashchange', function(e) {
    if(window.location.hash.split("#")[1] != $('#select-department').val()) {
      var selectize = $select[0].selectize;
      selectize.setValue(window.location.hash.split("#")[1]);
    }
    buildPage($('#select-department').text(), baseURL, table);
  })
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );

});
