$(function() {
  var baseIDs = ['q6xv-9c3b'];

  var queryStrings = [
    [
      '$select=date_trunc_ym(first_published)+AS+month,count(*)',
      '$group=month',
      '$order=month'
    ].join('&')
  ];

  var options = [{
    type: "timeseries",
    tick_count: 0,
    x_show: false,
    colors: ['#ffffff'],
    padding: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    },
    keys: {
      x: 'month',
      value: ['count']
    }
  }];
  
  processCharts(0,baseIDs,queryStrings,options,[]);

});