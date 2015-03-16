---
layout: blog
title: "DataSF’s corner of the web: building lighter and faster"
date: 2015-03-14 21:33:12
category: blog
published: true
author: jason_lally
image:
  thumb: data-sf-website-dev.png
  feature: data-sf-website-dev.png
description: "When Joy first started as Chief Data Officer, DataSF, the program, was represented only by the open data portal, the product. Early on, she recognized that part of maturing the open data program meant giving DataSF a true home on the web."
---
When Joy first started as Chief Data Officer, DataSF, the program, was represented only by the open data portal, the product. Early on, she recognized that part of maturing the open data program meant giving DataSF a true home on the web that encapsulated not just the portal, but all the other institutional work that DataSF represents. The first foray in this direction was to work with Socrata to make [some usability improvements on the platform](http://datasf.org/blog/the-new-datasf/), and spin up two wordpress sites, one that would house the blog and resources and another that would act as a portal for our data coordinators.

As time went on, the websites began to show some wear, not for lack of technical knowledge, but because the architecture just didn't support the flexibility we needed, and frankly, we have bigger things to worry about than whether a plugin is updated or the finer points of Wordpress templating.

## Charting a new course

When I first joined the DataSF team, one of the things Joy and I both got excited about was creating a fresh, agile face for DataSF and rethinking the relationship of the program to the open data portal. We've been busy with a lot of things, some of which you'll start to see evidence of on the site now, but we cleared the path early this year for relaunching the website. The gist of which you can [read about here](http://datasf.org/blog/our-new-home), and the result of which you are looking at right now.

To get here, we evaluated our options carefully. Inspired in [part by 18F](https://18f.gsa.gov/2014/11/17/taking-control-of-our-website-with-jekyll-and-webhooks/) and [Code for America](http://www.codeforamerica.org/blog/2014/02/14/welcome-to-the-new-codeforamerica-org/), and wanting to optimize for speed, flexibility and being responsive to feedback, we chose to consolidate our wordpress content and relaunch the site in Jekyll.

## What is Jekyll?

Jekyll is a basic framework that applies templates to content (stored in files) to generate static HTML. These static pages can then be efficiently served to you, our reader, with very little overhead, specifically no databases and no complex backend code.

## Why Jekyll?

Now I know we're the open data people, so why in the world would we put the kibosh on a database-driven website? Well, in this case, it just makes sense. At the end of the day, this little corner on the web is mostly content, and whenever we need dynamic data, we can leverage APIs to serve up that content. For example, we can pull data from the portal if we need to, leveraging the Socrata platform to do so -- don't worry, we're keeping a database driven portal ;-)

Basically, we don't want to waste technical resources on something that's, at the end of the day, nothing more than a bundle of HTML pages. Also, Jekyll allows us to do the following:

1. **Prototype faster.** When Joy and I have an idea, it's actually easier to test it out in quick iterations and get feedback from real users. We can leverage open source code to build faster and then refine to something more polished.&nbsp;
2. **Collaborate easier.** Our [code is open source](https://github.com/datasf/datasf.github.io/) and it's easier for others to copy, test and create their own version or just look through our code to see what we're doing (it's honestly not too complicated, and admittedly has a ways to go, but it's all there)&nbsp;
3. **Ship sooner.** We're a small team with a lot to do, and while managing a server on it's own isn't overly complicated, it can be a lot in combination with everything else that needs to get done. Jekyll helps us reduce unnecessary dependencies so we can focus on the most important things, like enabling use of the City's data.&nbsp;

## So how does this thing work?

Now, there are plenty of resources that can [explain](http://code.tutsplus.com/tutorials/using-jekyll--cms-20956) [Jekyll](http://jekyllrb.com/) [better](https://help.github.com/articles/using-jekyll-with-pages/) [than](http://code.tutsplus.com/articles/building-static-sites-with-jekyll--net-22211) I can, but let me give you an example of how these blog pages are built.

Jekyll is built around [templates](https://github.com/datasf/datasf.github.io/tree/master/_layouts) and simple documents written in Markdown. [According to John Gruber](http://daringfireball.net/projects/markdown/), its creator, "Markdown's syntax is intended for one purpose: to be used as a format for writing for the web." It provides a simple syntax for creating documents with punctuation and simple text syntax conventions.

For example. If you want to emphasize text, you can do the following:

```yaml

*this text would be the same as italicizing*

**for bold statements, use two asterisks**

```

What's awesome about this, is that it gives a very simple way to write content without worrying about HTML. And then with Jekyll, we take these simple documents and turn them into content formatted for the web. So that [this](https://github.com/datasf/datasf.github.io/tree/master/) becomes the blog post you're looking at now.

Additionally, we can add data about the post and use it in our templates. For example at the front of this blog post markdown file is the following:

```yaml

---
layout: blog
title: "DataSF’s corner of the web: building lighter and faster"
date: 2015-03-14 21:33:12
category: blog
published: true
author: jason_lally
image:
  thumb: data-sf-website-dev.png
  feature: data-sf-website-dev.png
description: "When Joy first started as Chief Data Officer, DataSF, the program, was represented only by the open data portal, the product. Early on, she recognized that part of maturing the open data program meant giving DataSF a true home on the web."
---
```

This metadata, called "YAML front-matter" in Jekyll parlance can be used to do things like, display the author and updated date and define a thumbnail for the post.

There's lots of other fun things you can do like compile RSS feeds and build resource libraries, but I'll leave that for future posts.

## And where does it live?

Currently, we're keeping the hosting of this simple. [GitHub allows us to host public facing webpages](https://pages.github.com/) for free using GitHub pages. This is a feature available to anyone that has an open source project on GitHub. This approach is limited, as noted by 18F, because they don't allow plugins.

At this stage, this is actually okay for us. We aren't doing anything too complicated yet that requires custom plugins. As we roll out more and begin to hit the limits of GitHub pages, we will evaluate if it makes sense to move to a more robust staging/production model on our own servers. Again, the project is small, the team is small and we still have room to grow into our corner of the web.

When it comes to that, 18F has an excellent primer on how they're hosting their Jekyll-enabled blog that will be very handy. Special thanks to them for sharing their work!

## Just the beginning

There's so much more to tell you! But we'll be rolling out new things over the next couple months and I can't wait to tell you more about our approach. I'm also looking forward to learning how we can do what we do better.