//Functions

var constructFilter = function(string, dept) {
  if (string == '') {
    if (!dept || dept == '') {
      return '';
    }
    else {
      return '&$where=department_or_division="' + dept + '"';
    }
  }
  else {
    return "&$where=" + string + (dept ? '+AND+department_or_division="' + dept + '"' : '');
  }
}

var constructChart = function(options) {
  var constructed = c3.generate({
    bindto: options.bindto,
    size: {
      height: 100,
      width: 100
    },
    data: options.data,
    legend: {
      show: false
    },
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

var buildPage = function(dept, url, table) {
  var deptFilter = dept;
  var baseURL = url;

  //queries
  var dataQueryString = [
    '$select=publishing_status,count(dataset_name)',
    '$group=publishing_status',
    '$order=count_dataset_name+desc'
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
      var output = [];
      var total = 0;
      $.each(response, function(idx, rec) {
        output.push([rec.publishing_status, rec.count_dataset_name]);
        total += +rec.count_dataset_name;
      });
      if (total > 0) {
        $("#chart-number-published").show();
        $("#chart-published-since").show();
        var opts = {
          bindto: '#chart',
          data: {
            columns: output,
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
    url: baseURL + "?" + dataQueryString2 + constructFilter('month>="2015-01-01"+AND+month+IS+NOT+NULL', deptFilter),
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
    url: baseURL + "?" + dataQueryString3 + constructFilter('date_published>="2015-01-01"', deptFilter),
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
        if (response.total_records > 0) {
          if (response.records[0].field_44) {
            $("#chart-targeted").show();
            $("#chart-targeted .chart-number").html(response.records[0].field_44);
          }
          else {
            $("#chart-targeted").hide();
          }
          $(".mission").html((response.records[0].field_21 ? response.records[0].field_21 : ""));
          $(".narrative-maintenance").html((response.records[0].field_17 ? response.records[0].field_17 : ""));
          $(".narrative-publishing").html((response.records[0].field_60 ? response.records[0].field_60 : ""));
          $(".narrative-planning").html((response.records[0].field_59 ? response.records[0].field_59 : ""));
          $("#inventory-incomplete").hide();
        }
        else {
          $(".mission").html('The plan for ' + deptFilter + ' is not ready yet.');
          $(".narrative-maintenance").html('');
          $(".narrative-publishing").html('');
          $(".narrative-planning").html('');
          $("#chart-targeted").hide();
        }
      }
    });
  }
  else {
    $(".mission").html('');
    $(".narrative-maintenance").html('');
    $(".narrative-publishing").html('');
    $(".narrative-planning").html('');
    $("#chart-targeted").hide();
    $("#chart-targeted").hide();
  }

  if (table) {
    table.columns(0).search(deptFilter).draw();
  }
}

$(function() {
  var baseURL = 'https://data.sfgov.org/resource/q6xv-9c3b.json';

  $('.selectize-select').selectize();

  buildPage('', baseURL);

  //Dataset inventory
  var table = $('#inventory').DataTable({
    "columns": [{
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
    buildPage($(ev.target).val(), baseURL, table);
  });

});