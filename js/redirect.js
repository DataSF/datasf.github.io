---
---
//this is a convenience to make sure that a limited number of links get redirected to their new links, this will be retired as soon as we feel these links aren't floating around as much
var parseQueryString = function(queryString) {
  var params = {},
    queries, temp, i, l;

  // Split into key/value pairs
  queries = queryString.split("&");

  // Convert the array of strings into an object
  for (i = 0, l = queries.length; i < l; i++) {
    temp = queries[i].split('=');
    if(temp[0] == "page_id") {
      temp[0] = "p";
    }
    params[temp[0]] = temp[1];
  }
  return params;
};

var redirectPage = function(url) {
  window.location.replace(url);
}

var queryString = window.location.search;
var p = parseQueryString(queryString.substring(1));


var pageMapping = {
  127: "{{site.baseurl}}/blog/data-license-liberation-day/",
  111: "{{site.baseurl}}/blog/u-heart-metadata/",
  101: "{{site.baseurl}}/blog/the-new-datasf/",
  36: "{{site.baseurl}}/blog/dating-data-what-do-you-look-for/",
  60: "{{site.baseurl}}/blog/open-data-grows-up/",
  1: "{{site.baseurl}}/blog/hello-world/",
  96: "{{site.baseurl}}/coordinators/#resources",
  50: "{{site.baseurl}}/coordinators/#resources",
  13: "{{site.baseurl}}/coordinators/#resources",
  54: "{{site.baseurl}}/coordinators/#quicktips",
  48: "{{site.baseurl}}/resources/"
}

if (p.p && pageMapping[p.p] != undefined) {
  redirectPage(pageMapping[p.p]);
}
