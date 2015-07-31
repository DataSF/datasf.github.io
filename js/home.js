$(function() {
  var baseIDs = ['q6xv-9c3b'];

  var queryStrings = [
    [
      '$select=date_trunc_ym(date_published)+AS+month,count(*)',
      '$group=month',
      '$order=month'
    ].join('&')
  ];

  var options = [{
    type: "timeseries",
    tick_count: 0,
    x_show: false,
    colors: ['#ffffff'],
    keys: {
      x: 'month',
      value: ['count']
    }
  }];
  
  processCharts(0,baseIDs,queryStrings,options,[]);

});