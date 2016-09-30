---
title: 'Show me the Data Dictionary!'
author: jason_lally
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
categories:
  - blog
---


What does that field mean? An oft-asked question that can normally be answered by a little documentation. For San Francisco's open data, finding that documentation can be, ahem, inconsistent, and it's high time we address that for all of our sanity! We are beginning a project to make the collection, maintenance and dissemination of data documentation more consistent for data publishers, DataSF staff and data users.

## Where we are today

Across the open data portal, there are many ways to access and find documentation about a dataset. These include:

1. **In the description of the dataset.&nbsp;**This is rare, but sometimes a dataset will list field definitions in the description or link to a place that contains definitions.
2. **As descriptions within the open data platform.&nbsp;**You can access these descriptions by mousing over the (i)nfo icon.
3. **As an attachment.&nbsp;**This will be the case for almost all datasets published in the past year or so. As part of the updated DataSF publishing process, we generate a template and attach to each dataset.


The reality is there's no way for a user to know which one of these above is the case for a given dataset. That's a pain, and we understand.

## Where we're headed

When we introduced new publishing processes, templates were the best solution at the time. And they've served us well at the point of initial publishing, but they hardly scale. Imagine getting a question about a dataset, answering the question, and then having to update an attachment and re-upload it. Now imagine that across over 400 datasets, 52 data coordinators and thousands of users.

So we're centralizing and systematizing to support continuous improvement of documentation. We'll be doing this in phases, so it won't all be done over night, but when complete, we will have:

1. A single point of access for all field definitions and eventually profiled information about those fields.
2. Consistent, printer-friendly documentation to accompany datasets.
3. Global field definitions written once and propagated across any dataset with that field. There's no reason we should write the definition of Supervisor District more than one time, for example.
4. Integration with our publishing process so that field definitions collected show up in the master record.


## Write once, read anywhere

One of our primary goals is to reduce the overhead of maintaining and accessing field documentation. We know that stewards of data spend a good bit of time explaining data to users. Maybe something gets written down, but many times, the documentation hasn't been systematic. Or, even if it has, it sits with the steward and requires asking for the documentation.

As of today, we're releasing a working dataset of all fields stored in the open data portal with and without documentation. We have a bit of work to do to get complete field coverage, but this dataset will allow you to see our progress as it gets updated.

The finished dataset and its API will ultimately power more user-friendly documentation. It will also be useful for doing interesting meta-analyses on the portal. We also anticipate it informing our efforts to introduce consistent field-level standards and practices.

## Follow along with us

At current count there over 7000 fields. About 32% of them are documented either within the open data platform or through the template attachments. That leaves us with nearly 5000 fields with no documentation. That may sound like a lot, but we can break it down into smaller pieces:

1. **Define unique, undocumented fields.&nbsp;**We'll rely on the data stewards to submit definitions for the currently undocumented fields that aren't global. This averages to about 25 fields per steward.
2. **Define global fields.** There are many fields that show up in multiple datasets. We can define these once and propagate them.
3. **Migrate documentation from templates.&nbsp;**Of the 32% of fields already documented, we'll need to pull over the information from the attachments. We'll script what we can and systematically enter the rest.
4. **Deal with the rest as needed.&nbsp;**If we get to 80% coverage using the above 3 tactics, we're okay with rolling on the rest as needed. Priorities can be determined based on where we're seeing confusion through our help desk and other signals.


To help you track our progress, we've created a simple PowerBI dashboard. It is linked to the field dataset and will update automatically.

&lt;insert PowerBI report&gt;

&nbsp;