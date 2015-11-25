DataSF Website
==============
This repository contains DataSF's website, [http://datasf.org](http://datasf.org).

##Publishing a blog post

Go to the [DataSF Blogging Guide](https://github.com/datasf/datasf.github.io/tree/staging/blog/_posts/README.md) to read how you can write and publish a blog post.

##Publishing a new page

Pages are created by placing an index file (index.md or index.html) in a folder. This creates simple, clean URLs for the page, so the folder name should correspond to 

##Contributing
###Getting started
If you want to take a look on your own machine, here's how you can get up and running:

Do this the first time:

1. Fork and clone the repo to a directory on your machine
2. Make sure you have Ruby installed by running `ruby --version` You should have either `1.9.3` or `2.0.0` If you don't, follow [these installation instructions](https://www.ruby-lang.org/en/downloads/).
3. Get Bundler by running `gem install bundler`. Bundler is a package mangager that makes versioning Ruby software a lot easier.
4. Now issue the command `bundle install` in the cloned repo root directory, this will set you up with Jekyll and the key dependencies

To run the site on your machine:

Issue the command `bundle exec jekyll serve` and the site should be available at `http://localhost:4000`

Check out the Jekyll documentation [here](http://jekyllrb.com/docs/usage/) and the Github Pages documentation [here](https://help.github.com/articles/using-jekyll-with-pages/) for more.