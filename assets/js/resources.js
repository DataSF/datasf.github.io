---
---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('description', {boost: 10})
  this.field('topic')
  this.field('topic_content')
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

// builds reference data
var store = [{% for topic in site.resource_topics %}{% for resource in topic.resources_list %}{
  "title": {{ resource.name | jsonify}},
  "resouce_type": {{ resource.resource_type | jsonify }},
  "link": {{ topic.url | jsonify }},
  "description": {{ resource.description | jsonify }},
  "topic": {{ topic.title | jsonify }},
  "links": [{% for link in resource.links %}{
    "link": {{ link.link | jsonify }},
    "text": "{{site.data.actions[link.media_type].action | append:' ' | append:link.media_type}}"
  }{% unless forloop.last %},{% endunless %}{% endfor %}]
}{% unless forloop.last %},{% endunless %}{% endfor %}{% unless forloop.last %},{% endunless %}{% endfor %}]

// builds search

$(document).ready(function() {
  // define results, topics and resources containers
  var resultdiv = $('#results')
  var resourcesdiv = $('#resources')
  var topicsdiv = $('#topics')
    
  var clearInput = function (e) {
    e.preventDefault()
    
    if(!e) return
    if(!e.data.target) return
    
    $(e.data.target).val('')
    showAllResources()
  }
  
  // show collections
  
  var showCollections = function (collections, resources, results) {
    activateTab('collections')
    collections.show()
    resources.hide()
    
  } 
  
  var activateTab = function (target) {
    $('.data-' + target).tab('show')
  }
  
  var showResources = function (collections, resources, results) {
    activateTab('resources')
    resources.show()
    if($('#search').val() === '') {
      showAllResources()
    }
    collections.hide()
  }
  
  var showAllResources = function () {
    resultdiv.empty()
    
    var length = store.length
    var searchitem
    for (var i = 0; i < length; i++) {
      searchitem = buildItem(store[i])
      resultdiv.append(searchitem)
    }
    $('.clear-filter-button').hide()
  }
  
  var buildItem = function(itemObj) {
    var resourceTypeL = itemObj.resouce_type.toLowerCase().replace(/\s+/g, "-")
    var numLinks = itemObj.links.length
    var item = '<div class="resource-list-item"><small class="color-'+resourceTypeL+'" style="font-weight: bold">'+itemObj.resouce_type+'</small><h3 class="resource-title"><i class="fa resource-icon-'+resourceTypeL+' color-'+resourceTypeL+'" aria-hidden="true"></i> '+itemObj.title+'</h3><div class="resource-content">'
    
    item += '<div class="resource-downloads">'
    for(var i=0; i < numLinks; i++) {
      item += '<a href="'+itemObj.links[i].link+'" class="btn btn-xs btn-primary">'+itemObj.links[i].text+'</a> '
    }
    item += '</div><p>'+itemObj.description+'</p><p>Part of the collection: <strong><a href="'+itemObj.link+'">'+itemObj.topic+'</a></strong></p></div>'
    
    return item
  }

  $('.js-clear-input').on('click', { target: '#search' }, clearInput)
  
  $('.js-click-tab').on('click', function (e) {
    if (!e) return
    
    if (e.currentTarget.className.indexOf('data-resources') !== -1) {
      showResources(topicsdiv, resourcesdiv, resultdiv)
    } else {
      console.log(e)
      showCollections(topicsdiv, resourcesdiv, resultdiv)
    }
  })
  
  $('input#search').on('keyup', function () {
    // Get query
    var query = $(this).val();
    // Search for it
    if (query.length === 0) {
      showAllResources()
    } else {
      $('.clear-filter-button').show()
      var result = index.search(query);
      // Show results
      resourcesdiv.show()
      resultdiv.empty()
      topicsdiv.hide()
      // Add status
      resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
      // Loop through, match, and add results
      for (var item in result) {
        var ref = result[item].ref;
        var resourceTypeL = store[ref].resouce_type.toLowerCase().replace(/\s+/g, "-")
        var searchitem = '<div class="resource-list-item"><small class="color-'+resourceTypeL+'" style="font-weight: bold">'+store[ref].resouce_type+'</small><h3 class="resource-title"><i class="fa resource-icon-'+resourceTypeL+' color-'+resourceTypeL+'" aria-hidden="true"></i> '+store[ref].title+'</h3><div class="resource-content">'
        var numLinks = store[ref].links.length
        searchitem += '<div class="resource-downloads">'
        for(var i=0; i < numLinks; i++) {
          searchitem += '<a href="'+store[ref].links[i].link+'" class="btn btn-xs btn-primary">'+store[ref].links[i].text+'</a> '
        }
        searchitem += '</div><p>'+store[ref].description+'</p><p>Part of the collection: <strong><a href="'+store[ref].link+'">'+store[ref].topic+'</a></strong></p></div>'
        resultdiv.append(searchitem);
      }
    }
  })
  
  $('#resources-table').DataTable();
  
  // Bind an event to window.onhashchange that, when the history state changes,
  // gets the url from the hash and displays either our cached content or fetches
  // new content to be displayed.
  $(window).bind( 'hashchange', function(e) {
    var hash = window.location.hash
    if ( hash && hash === '#all') {
      showResources(topicsdiv, resourcesdiv, resultdiv)
    } else {
      showCollections(topicsdiv, resourcesdiv, resultdiv)
    }
  })
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
    
});

// clear search terms

