###Drafting
Blog posts will eventually need to be written in markdown. You can draft in Google docs or use a tool like [Stackedit](https://stackedit.io) to author directly in markdown. If you author in Google Docs, you can use [Gdocs2md](https://github.com/mangini/gdocs2md) to convert your document into markdown.

###Reviewing
Have someone on the team take a look at the post in it's draft form for feedback. Once it looks good, we will send it to the City's communications team for review and approval.

###Creating a blog post file
To create a new blog post, save your post in the [`_posts` directory](https://github.com/datasf/datasf.github.io/tree/staging/_posts) with the name `2015-02-23-new-post.md` where '2015-02-23' is today's date and `new-post` is the title of your post.

####Include metadata in your post

Begin the new file by adding "YAML front-matter." This is where the post's title, author, tags, banner image, and excerpt/description live.

Here's each required field:

* `title` - The plain-text title of your post. Surrounded with quotation marks. This will be displayed prominently above the post, will show up in browser tabs, and will be included in "share text" when the link appears on Twitter, Facebook, and other social media platforms.
* `image` - Defines the feature and thumb image for your post along with optional caption and source fields (see below for more advanced configurations). Links should be relative to `/assets/img/` with no leading slash. This will appear in social media platforms when the post is shared. This image also appears at the lead of the post.
* `description` - A short plain-text description of your post. Surround with quotation marks. No Markdown or HTML allowed. This does not need to be an excerpt, but instead can be a sentence or two that you feel represents your post well. It may appear next to your post on social media and other places which fetch article metadata.
* `author` - The author's handle. It must be lowercase, and must match a name that appears in [`_data/authors.yml`](_data/authors.yml)

You can see an example from Joy Bonaguro's post on the launch of the housing data hub.

```yaml
---
title: Housing Data Hub - from Open Data to Information
author: joy_bonaguro
image:
  thumb: housing-hub-screen.png
  feature: housing-hub-screen.png
description: "Today we launched the Housing Data Hub - your go to resource to learn about housing programs in San Francisco and the data behind them. This is also the first of what we hope to be a series of strategic open data releases over time."
---
```