---
layout: post
title: "Raising the digital barn, or how we're building the Housing Data Hub"
category: blog
published: true
author: jason_lally
image:
  thumb: white_board_NDoCH.jpg
  feature: white_board_NDoCH.jpg
  caption: National Day of Civic Hacking 2014 brought together lots of ideas and a working prototype. That work influences the approach to this day.
description: "The Housing Data Hub was born out of the notion that in order to mature our open data practice at the City, we needed to diversify our approach to publishing data. In the City’s open data strategy, a quick look at datasets over time reveals a publishing stagnation."
---

A couple weeks ago, [we announced the Housing Data Hub](http://datasf.org/blog/housing-data-hub-launched/)! In this post, read about our technical and process approach to building the hub and what's next.

##Prototyping together: the Housing Data Hub as process
The [Housing Data Hub](http://housing.datasf.org) was born out of the notion that in order to mature our open data practice at the City, we needed to diversify our approach to publishing data. In the [City's open data strategy](https://docs.google.com/document/d/1hvp_wls8KuJrfHW_NwX1qtyFR4EFdWCkxcULnNlhKNw/edit?usp=sharing), a quick look at datasets over time reveals a publishing stagnation. While the inventory process will help us bring institutional focus and planning to citywide data, Joy hit on the idea early on that we also needed to release datasets strategically around common themes or topics. Housing affordability is our first one.

These strategic (or thematic) releases allow us to apply focused, collaborative effort around a number of related datasets. [Joy lays out more about this approach](http://datasf.org/blog/housing-data-hub-launched/) in her housing data hub announcement. The key challenge was how to turn a concept into action - this is where technology met process.

###Getting started
One of the key parts of a strategic release is to bundle data with a product. This could be a website, a report, a study, or any product that helps frame and focus the activity around the data. In this case, we imagined a website that presented the portfolio of local policies that affect housing affordability in San Francisco in a clearer manner.

With a concept and buy in from departments, Joy began work. Starting with paper prototypes and content drafts, the first push on code began during the 2014 [National Day of Civic Hacking](http://hackforchange.org) weekend in San Francisco. Working with local [Code for San Francisco](http://codeforsanfrancisco.org) volunteers ([read about our weekend](http://www.codeforamerica.org/blog/2014/06/24/peer-network-spotlight-joy-bonaguro/) ), the concept was fleshed out in code using the [Ruby on Rails framework](http://rubyonrails.org/).

###Changing technical direction
The volunteer work was incredibly useful for crystallizing the concepts you see in the hub today like the data browser and policy pages. But we hit some challenges using Ruby on Rails for both a content management system (CMS) and to store data. 

It was hard to iterate fast enough to get content in for review by our content partners. And loading data into a separate database introduced failure points between the source data and the visuals.

####Using Prose as a lightweight CMS
After huddling and laying out the options, we decided to adopt a lighter weight approach. It turned out we didn't really need full CMS-like capability. The content could be edited in iterations outside the website, and once the content was set, changes would be infrequent. Any CMS capabilities that ended up being built would go underused. It just didn't make sense to apply the effort there. Instead, we focused on making it easy to configure visuals and consume external data sources. We leaned on emerging [CMS-less](https://developmentseed.org/blog/2012/07/27/build-cms-free-websites/) [practices](http://thinkshout.com/blog/2014/10/success-building-cmsless-production-sites-with-jekyll/) for content including using [Prose.io](http://prose.io) as a basic editing interface.

####From database to dogfood
And instead of using a separate database via Ruby on Rails - we used [open data APIs from our portal](http://dev.socrata.com/docs/endpoints.html). This allows us to have the data in a single place and use the same set of tools as our open data portal users. This approach is often referred to as dogfooding, which you can [read more about in the great post by Anthea Watson Strong](https://medium.com/@antheaws/hey-uncle-sam-eat-your-own-dogfood-9f0c110c13c8).

And we were able to save much of the original front-end work from National Day of Civic Hacking weekend ([sign up for 2015](http://codeforsanfrancisco.org/hackforchange/)) even though we changed the underlying technology. Ultimately, I don't see this as a failure, but as an important learning moment and maybe even a necessary part of working in the open. We had to travel down some roads to discover what would work, and being able to put eyes on some code helped us crystallize the approach.

<!--
<figure>
	<img src="{{ site.baseurl }}/img/blog/white_board_NDoCH.jpg">
	<figcaption>National Day of Civic Hacking 2014 brought together lots of ideas and a working prototype. That work influences the approach to this day.</figcaption>
	Manu Koenig (right) works on the white board with Victoria Ngo (left), designing what would become the start of the Housing Data Hub interface.
</figure>
-->

###The technology stack
To implement the desired changes, we evaluated and then picked a mix of frameworks and code libraries that would help us ship the product. The core ones being:

 1. **[Jekyll](http://jekyllrb.com)** - a static site compiler and the core of our CMS-less approach. It allows us to quickly develop content and templates to display that content. You can read [more about how we've applied it on the DataSF website](http://datasf.org/blog/building-lighter-and-faster).
 2. **[C3js](http://c3js.org)** - a javascript library that allows the creation of reusable charts wrapped around the incredible D3 visualiztion library. The most important feature here for our process is that we could throw a CSV  or JSON file at it, allowing us to prototype with CSVs and swap in JSON API endpoints from our portal later.
 3. **[Mapbox.js](https://www.mapbox.com/mapbox.js/api/v2.1.9/)** - a javascript library wrapped around the mapping library, Leaflet, that makes consuming map tiles from Mapbox easy and inherits all of the sweet  capabilities of Leaflet. This lets us present the user with mapped data, consuming geojson for breakfast, which is great because our open data portal [now supports that format](http://dev.socrata.com/changelog/2015/04/27/new-higher-performance-apis.html).

There are many other libraries and inspirations [mentioned in our acknowledgements](http://housing.datasf.org/about#acknowledgements), but these three drive the primary features of the Hub.

##It takes a village
The change in technology direction removed a major bottleneck and allowed us to implement changes quickly. We worked with department and citizen user reviewers to check content for accuracy as well as ease of understanding (government prose is not always the easiest to decipher :wink:). By having prototypes in place fast, we were able to gather around a real thing and not just an abstract concept: ***the technology didn't drive the development, it supported our process of co-creating with multiple stakeholders of varying degrees of technical ability***.

Hopefully, you can tell by now, that many many hands (and hearts) touched this project. Not just the folks we've [acknowledged on the hub already](http://housing.datasf.org/about#acknowledgements), but the countless coders that have contributed thousands of lines of code to the open source projects on which we're building. 

And that goes to an even broader takeaway. This whole opengov, open data, civic tech (whatever you call it) movement must be built on community. We learn together, which is why we attempt to share as much as we can here on our website. We hope in sharing, we learn even more from everyone else.

##What's next?
The Hub remains a work in progress. You'll notice, if you look closely, that not all datasets are being fed directly from the portal. We are simultaneously working on getting datasets published to the portal regularly and consistently (per Goal 1 of our Open Data Strategy). As we get those up, we'll swap out the generated CSVs for an API call to the portal. As mentioned, C3js enables this flexible pattern. You can track the progress of that transition [on the Hub's about page](http://housing.datasf.org/about#our-process).

###A little spring cleaning
If [you look even closer](http://github.com/datasf/housing-data-hub), you'll notice the code is a bit sloppy :grimacing:! We're about to freeze the featureset and refactor and document the project in greater detail. We're kicking the tires on this approach, so I'll be develop standards for documenting earlier and often and employing better code practices. There's plenty of inspiration here from [18F](http://18f.gsa.gov) and various open source communities that I can't wait to borrow from.

We'll work on getting some issues up on the repo and working more with civic hackers and volunteers on the next rounds of improvements. Keep an eye out, and if you want to help, let us know! (Oh, and [maybe swing by National Day of Civic Hacking 2015](http://codeforsanfrancisco.org/hackforchange))

###From product to platform
Now that we've gone deep, we're thinking broad. What if we want to spin up something similar again? Or what if another city would like to do the same? After we get the fundamentals down with the refactor, we'll be looking to abstract the approach so others can follow suit. At a minimum, this means really great documentation, cleaning out the specific content, and using good conventions to maintain the project.

<figure>
	<img src="{{ site.baseurl }}/img/blog/get_dataset.png">
	<figcaption>A "Get the source dataset" button exists wherever there is raw data available on the open data portal. Over time, all visuals will have this link.</figcaption>
</figure>

Even more broadly, I'll point you to a seemingly small feature that actually has larger implications for our strategic approach. On [visualizations](http://housing.datasf.org/data-browser/rent-control/eviction-notices-over-time/) [for](http://housing.datasf.org/data-browser/rent-control/annual-allowable-increases/) [which](http://housing.datasf.org/data-browser/inclusionary-housing/principal-projects-by-declaration/) the underlying data are available on the open data portal, you'll see a "Get the source dataset" button. Following this takes you to the full dataset on [SF OpenData](http://data.sfgov.org), where you can explore and download the data. This is a small but important step toward creating *enduring sources of truth* and *unbroken data lineages*. Gone will be the days of shipping spreadsheets and reports around and losing track of what came from where, and it all starts with that simple, blue button.