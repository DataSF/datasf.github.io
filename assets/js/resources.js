---
---

// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}
{% for topic in site.resource_topics %}
  {% for resource in topic.resources_list %}
    index.add({
      title: {{resource.name | jsonify}},
      description: {{resource.description | jsonify}},
      topic: {{ topic.title | jsonify }},
      topic_content: {{ topic.content | strip_html | jsonify }},
      id: {{count}}
    })
  {% assign count = count | plus: 1 %}
  {% endfor %}
{% endfor %}

console.log( jQuery.type(index) );
// builds reference data
var store = [{% for topic in site.resource_topics %}{% for resource in topic.resources_list %}{
  "title": {{ resource.name | jsonify}},
  "link": {{ topic.url | jsonify }},
  "description": {{ resource.description | jsonify }},
  "topic": {{ topic.title | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search

$(document).ready(function() {
    $('input#search').on('keyup', function () {
      var resultdiv = $('#results')
      var topicsdiv = $('#topics')
      // Get query
      var query = $(this).val();
      console.log(query.length)
      // Search for it
      if (query.length === 0) {
        topicsdiv.show()
        resultdiv.empty()
      } else {
        var result = index.search(query);
        // Show results
        resultdiv.empty()
        topicsdiv.hide()
        // Add status
        resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
        // Loop through, match, and add results
        for (var item in result) {
          var ref = result[item].ref;
          var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><p>'+store[ref].topic+'<p>'+store[ref].description+'</p></div>';
          resultdiv.append(searchitem);
        }
      }
    })
    
    $('#resources-table').DataTable();
} );