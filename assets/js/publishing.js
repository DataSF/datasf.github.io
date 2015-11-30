$(function() {
  var baseURL = 'https://data.sfgov.org/resource/q6xv-9c3b.json';
  var dataQueryString = [
    '$where=date_published>="2015-01-01"+AND+dataset_description+!=""',
    '$limit=3',
    '$order=date_published+desc'
  ].join('&')

  $.getJSON(baseURL + "?" + dataQueryString, function(response){
    var template = $.templates("#datasetTmpl");
    var htmlOutput = template.render(response);
    $(".recent-datasets").html(htmlOutput);
  });
});