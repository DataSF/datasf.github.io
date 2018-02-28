---
title: 'Part 3: How to tame open data with standards'
author: jason_lally
image:
  thumb: /data-standard-ref/centerlines.png
  feature: /data-standard-ref/centerlines.png
  caption: >-
    What's a centerline node network (CNN) identifier? The new data standards
    reference from DataSF sets out to clarify common definitions and references
    as well as set publishing standards.
  source:
    title:
    author:
    source_link:
    author_link:
    license:
    license_link:
description: >-
  In celebration of Open Data Day on March 3, 2018, we are releasing a 4 part
  series on how to manage an open data program. In Part 3, we reveal our new
  handbook on standards for open data publishing.
date: 2018-02-28 00:00:00
categories:
  - blog
---

---

*In celebration of [Open Data Day on March 3, 2018](http://opendataday.org/), we are releasing a 4 part series on how to manage an open data program.*

1. *[Part 1: DataSF’s operating manual for open data](/blog/part-1-datasfs-operating-manual-for-open-data/)*
2. *Part 2: How to monitor your open data portal*
3. *Part 3: How to tame open data with standards*
4. *Part 4: Why you need to profile your open data*

---

Over the past 4 years, [we've added well over 200](https://datasf.org/progress) new datasets to the portal, many of them automated and considered highly valuable, such as [building permits](https://data.sfgov.org/Housing-and-Buildings/Building-Permits/i98e-djp9) or [medical and fire emergency calls](https://data.sfgov.org/Public-Safety/Fire-Department-Calls-for-Service/nuek-vuh3).

But across these many datasets, inconsistencies have invariably emerged in how the data is published. For example, neighborhood columns that don't clearly identify their associated boundary or different ways of encoding a parcel number.

## The missing manual: Taming our datasets with standards

To begin taming these issues, we've launched a [Data Standards Reference Handbook](https://www.gitbook.com/book/datasf/draft-publishing-standards/details). This is our "missing manual" that focuses on data publishing decisions regarding:

1. **[Formats and data structure](https://datasf.gitbooks.io/draft-publishing-standards/content/formats/).** How the structure of columns and rows should be handled across any dataset (e.g. when providing a date/time field or a coordinate).
2. **[Standard references](https://datasf.gitbooks.io/draft-publishing-standards/content/reference-data.html).** Which datasets represent standard references within the city and how those should be used in any referring datasets (e.g. parcels or department codes).

As a practical matter it becomes a guide for DataSF staff and department publishers as they're publishing new data. It also provides a baseline reference for some common questions we get about data across datasets, like:

* [What's a CNN](https://datasf.gitbooks.io/draft-publishing-standards/content/basemap/street-centerlines-nodes.html)? (hint: it's not the Cable News Network)
* [What are the fields block, lot and apn? Are they related?](https://datasf.gitbooks.io/draft-publishing-standards/content/basemap/parcels.html)
* [What's a mapblocklot?](https://datasf.gitbooks.io/draft-publishing-standards/content/basemap/parcels.html)
* [Is there an official reference of department codes somewhere?](https://datasf.gitbooks.io/draft-publishing-standards/content/generalreference/department-names-and-codes.html)

## A little note on implementation

Any of our enterprising data users will probably be thinking: well this is great, but the existing datasets haven't changed, so what? This handbook is just a starting point. Going forward, new data will be published per the handbook. For existing data, we'll use our [comprehensive dataset field profiles](https://data.sfgov.org/City-Management-and-Ethics/Field-Profiles/ekxv-883u), web analytics and other signals to prioritize resets over time.

We're excited as this marks another milestone for managing data as an important City asset. We hope over time these efforts at standardization will bring down barriers to use and promote novel analysis across related datasets.

## Special thanks

There are many reviewers who have helped flesh out this document, but we want to give a special shout out to our friends working on open data in Singapore. They had a [handy data quality guide](https://github.com/datagovsg/data-quality) that we lifted heavily [for our section on data structure and formats](https://datasf.gitbooks.io/draft-publishing-standards/content/formats/).