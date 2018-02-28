---
title: Part 3 How to tame open data with standards
author:
image:
  thumb:
  feature:
  caption:
  source:
    title:
    author:
    source_link:
    author_link:
    license:
    license_link:
description:
date:
categories:
  - blog
---

Over the past 4 years, [we&#39;ve added well over 200](https://datasf.org/progress) new datasets to the portal, many of them automated and considered highly valuable, such as building permits or medical and fire emergency calls.

But across these many datasets, inconsistencies have invariably emerged in how the data is published. For example, neighborhood columns that don&#39;t clearly identify their associated boundary or different ways of encoding the parcel number.

## The missing manual: Taming our datasets with standards

To begin taming these issues, we&#39;ve launched a Data Standards Reference Handbook. This is our &quot;missing manual&quot; that focuses on data publishing decisions regarding:

1. **Formats and data structure.** How the structure of columns and rows should be handled across any dataset (e.g. when providing a date/time field or a coordinate).
2. **Standard references.** Which datasets represent standard references within the city and how those should be used in referring datasets (e.g. parcels or department codes).

As a practical matter it becomes a guide for DataSF staff and department publishers as they&#39;re publishing new data. It also provides a baseline reference for some common questions we get about data across the universe of datasets, like:

- [What&#39;s a CNN](https://datasf.gitbooks.io/draft-publishing-standards/content/basemap/street-centerlines-nodes.html)? (hint: it&#39;s not the Cable News Network)
- [What are the fields block, lot and apn? Are they related?](https://datasf.gitbooks.io/draft-publishing-standards/content/basemap/parcels.html)
- [What&#39;s a mapblocklot?](https://datasf.gitbooks.io/draft-publishing-standards/content/basemap/parcels.html)
- [Is there an official reference of department codes somewhere?](https://datasf.gitbooks.io/draft-publishing-standards/content/generalreference/department-names-and-codes.html)

## A little note on implementation

Any of our enterprising data users will probably be thinking: well this is great, but the existing datasets haven&#39;t changed, so what? This handbook is just a starting point. Going forward, new data will be published per the handbook. For existing data, we&#39;ll use our comprehensive profiling about every field, data on use and searches and other data to prioritize resets over time.

We&#39;re excited as this marks another milestone for managing data as an important City asset. We hope over time these efforts at standardization will bring down barriers to use and promote novel analysis across related datasets.

## Special thanks

There are many reviewers who have helped flesh out this document, but we want to give a special shout out to our friends working on open data in Singapore. They had a [handy data quality guide](https://github.com/datagovsg/data-quality) that we lifted heavily [for our section on data structure and formats](https://datasf.gitbooks.io/draft-publishing-standards/content/formats/).