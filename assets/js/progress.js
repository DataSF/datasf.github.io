$(function() {
  //buildPage();
  // Dataset invnentory q6xv-9c3b 
  // Inventory status wuym-j7si
  var baseIDs = ['wuym-j7si', 'wuym-j7si', 'q6xv-9c3b', 'q6xv-9c3b', 'q6xv-9c3b','q6xv-9c3b','q6xv-9c3b','q6xv-9c3b','q6xv-9c3b','q6xv-9c3b','wuym-j7si','q6xv-9c3b','q6xv-9c3b'];

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
      '$select=date_trunc_ym(first_published)+AS+month,count(*)',
      '$group=month',
      '$order=month'
    ].join('&'), [
      '$select=date_trunc_y(first_published)+AS+year,count(*)',
      '$group=year',
      '$order=year'
    ].join('&'), [
      '$select=publishing_status,count(dataset_name)+AS+count',
      '$group=publishing_status',
      '$where=publishing_status="Published"+OR+publishing_status="Not Published"',
      '$order=count+desc'
    ].join('&'), [
      '$select=category,count(*)+AS+number_of_datasets',
      '$group=category',
      '$order=number_of_datasets+desc',
      '$where=category<>""'
    ].join('&'), [
      '$select=CASE(natively_hosted=true,"Natively hosted",natively_hosted=false,"Not natively hosted")+as+natively_hosted_status,count(*)',
      '$group=natively_hosted_status',
      '$where=publishing_status="Published"'
    ].join('&'), [
      '$select=on_time,count(*)',
      '$group=on_time',
      '$where=publishing_status="Published" and on_time<>""'  
    ].join('&'), [
      '$select=CASE(lag=true,"Data lag",lag=false,"No data lag")+as+lag_status,count(*)',
      '$group=lag_status',
      '$where=publishing_status="Published"'
    ].join('&'), [
      '$select=CASE(metadata_complete=true,"Complete",metadata_complete=false,"Not complete")+as+metadata_status,count(*)',
      '$group=metadata_status',
      '$where=publishing_status="Published"'
    ].join('&'), [
      '$select=sum(published_through_december_2016)+as+published,(sum(target_december_2016)-published)+as+not_published',
    ].join('&'), [
      '$select=data_classification,sum(CASE(publishing_status="Published",1))%20as%20published,%20sum(CASE(publishing_status="Not%20Published",%201))%20as%20not_published,count(*)%20as%20total',
      '$group=data_classification',
      '$order=total+desc'
    ].join('&'), [
      '$select=department_priority,sum(CASE(publishing_status="Published",1))%20as%20published,%20sum(CASE(publishing_status="Not%20Published",%201))%20as%20not_published,count(*)%20as%20total',
      '$group=department_priority',
      '$order=department_priority+asc'
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
  }, {
    type: "pie",
    label: "natively_hosted_status"
  },
  {
    type: "pie",
    label: "on_time"
  },
  {
    type: "pie",
    label: "lag_status"
  },
  {
    type: "pie",
    label: "metadata_status"
  },
  {
    type: "pie"
  },
  {
    type: "bar",
    keys: {
      x: 'data_classification',
      value: ['published','not_published']
    },
    groups: [['published','not_published']],
    transform: 'normalize',
    yFormat: '.2p'
  },
  {
    type: "bar",
    keys: {
      x: 'department_priority',
      value: ['published','not_published']
    },
    groups: [['published','not_published']],
    transform: 'normalize',
    yFormat: '.2p'
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
