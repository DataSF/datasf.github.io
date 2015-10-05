//Functions

var buildPage = function(dept, url, table) {
  var deptFilter = dept;
  var baseURL = url;

  //queries
  var dataQueryString = [
    '$select=publishing_status,count(dataset_name)+AS+count',
    '$group=publishing_status',
    '$order=count+desc'
  ].join('&')

  var dataQueryString2 = [
    '$select=date_trunc_ym(date_published)+AS+month,count(*)',
    '$group=month',
    '$order=month'
  ].join('&')

  var dataQueryString3 = [
    '$select=count(*)'
  ].join('&')

  //construct charts
  $.ajax({
    url: baseURL + "?" + dataQueryString + constructFilter("", deptFilter),
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
        $("#chart-number-published .chart-number").html(Math.round(pie.data.values('Published') / total * 1000) / 10 + '%');
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

  $.ajax({
    url: baseURL + "?" + dataQueryString2 + constructFilter('month>="2015-07-01"+AND+month+IS+NOT+NULL', deptFilter),
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
              format: '%b'
            }
          }
        }
      }
      var bar = constructChart(opts);
    }
  });

  $.ajax({
    url: baseURL + "?" + dataQueryString3 + constructFilter('date_published>="2015-07-01"', deptFilter),
    type: "GET",
    success: function(response) {
      $("#chart-published-since .chart-number").html(response[0].count);
    }
  });
  if (deptFilter && deptFilter != '') {
    //department plans
    var filters = [{
      field: 'field_20',
      operator: 'is',
      value: deptFilter
    }]

    $.ajax({
      url: "https://api.knackhq.com/v1/scenes/scene_42/views/view_57/records?filters=" + encodeURIComponent(JSON.stringify(filters)),
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
          $(".mission").html((response.records[0].field_21 ? response.records[0].field_21 : ""));
          $("#dept-link .website-text").html((response.records[0].field_21 ? response.records[0].field_28 : ""));
          $("#dept-link .website-link").attr('href',(response.records[0].field_21 ? response.records[0].field_28 : ""));
          $(".narrative-maintenance").html((response.records[0].field_17 ? response.records[0].field_17 : ""));
          $(".narrative-publishing").html((response.records[0].field_60 ? response.records[0].field_60 : ""));
          $(".narrative-planning").html((response.records[0].field_59 ? response.records[0].field_59 : ""));
          $("#inventory-incomplete").hide();
        }
        else {
          $(".mission").html('The plan for ' + deptFilter + ' is not ready yet.');
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
    $(".mission").html('');
    $("#dept-link").hide();
    $(".narrative-maintenance").html('');
    $(".narrative-publishing").html('');
    $(".narrative-planning").html('');
    $("#chart-targeted").hide();
    $("#chart-targeted").hide();
    $("#chart-targeted-citywide").show();
  }

  if (table) {
    table.columns(1).search(deptFilter).draw();
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
    }],
    "pageLength": 10
  });

  $.getJSON(baseURL, function(data, textstatus) {
    table.rows.add(data).draw();
  });

  $('#select-department').on('change', function(ev) {
    window.location.hash = $(ev.target).val();
  });
  
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