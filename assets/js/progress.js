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
      '$select=publishing_plan_status,count(department_or_division)+As+count',
      '$group=publishing_plan_status',
      '$order=publishing_plan_status'
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
    label: "publishing_plan_status"
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
  
  var table = $('#status').DataTable({
    "columns": [{
      "data": "department_or_division"
    }, {
      "data": "inventory_status"
    }, {
      "data": "publishing_plan_status"
    }],
    "pageLength": 100,
    "lengthChange": false
  });
  
  $.getJSON('https://data.sfgov.org/resource/wuym-j7si.json', function(data, textstatus) {
    table.rows.add(data).draw();
  });
  
  
  $('.by-year').on('click', function(ev){
    $('#chart2').toggle();
    $('#chart3').toggle();
    ev.preventDefault();
  })
});

//query string, transformer (optional), chart, text