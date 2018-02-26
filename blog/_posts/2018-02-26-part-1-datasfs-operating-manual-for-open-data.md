---
title: 'Part 1: DataSF''s "operating manual" for open data'
author: jason_lally
image:
  thumb: /publishing-toolkit/trello.png
  feature: /publishing-toolkit/trello.png
  caption: >-
    We use loosely coupled tools to help us manage the publishing process.
    Trello is used to move datasets through process for example and data is
    captured automatically as staff update the Trello board.
  source:
    title:
    author:
    source_link:
    author_link:
    license:
    license_link:
description: >-
  In celebration of Open Data Day on March 3, 2018, we are releasing a 4 part
  series on how to manage an open data program. In Part 1, we reveal the Open
  Data Publishing Toolkit as a means to documenting our operations. We wrote
  this for us, but hope it's helpful for other open data programs.
date: 2018-02-26 00:00:00
categories:
  - blog
published: true
---

<hr />

In celebration of [Open Data Day on March 3, 2018](http://opendataday.org/), we are releasing a 4 part series on how to manage an open data program.

1. Part 1: DataSF’s operating manual for open data
2. Part 2: How to monitor your open data portal
3. Part 3: How to tame open data with standards
4. Part 4: Why you need to profile your open data

<hr />

How do you operationalize open data? Our peers ask us this question quite a bit. We can answer this question - but it can be a lot to absorb in a single conversation.

We’ve been iterating and improving on how we run the program since 2014. Lots of collateral has been developed over time, but we wanted to thread together all of the work into a “operating manual” for open data.

We were inspired by [Chicago’s Open Data ETL toolkit](http://open-data-etl-utility-kit.readthedocs.io/en/stable/), but wanted to capture all of the surrounding processes that go into writing an appropriate ETL and ultimately publishing data.

The result is the [DataSF Open Data Publishing Toolkit](https://www.gitbook.com/book/datasf/datasf-publishing-toolkit/details).

The toolkit is meant to be an enduring resource for our team (one that will update as we change) as well as a reference for others grappling with running an open data program.

By no means do we believe this is THE way. Your context will differ, your needs will evolve (as will ours). But feel free to plunder the toolkit and take what works for you.

No matter what you take away, we do have a set of principles that contribute to running a flexible program, and we don’t want you to miss them, so I’ll call them out here.

## Leverage lightly coupled systems rather than monolithic solutions

There is no artisanal, off-the-shelf technology for running an open data program soup to nuts. The market is just not big enough and anyone telling you otherwise is stretching the truth at best.

We opted for an integration approach rather than waiting for one magical system (that will likely never come). It started as a [simple, un-exciting decision to assign unique identifiers to each dataset in our inventory](https://datasf.gitbooks.io/datasf-publishing-toolkit/content/0_publishing_process_overview/#the-importance-of-unique-inventory-ids), and now we can link multiple pieces together without thinking too hard.

## Design processes and systems that meet people where they are

We work with 52 data coordinators across highly variable IT environments. It is impossible to design the “perfect” system. But what you can do is listen to the users of your systems and iterate.

For example, our initial publishing intake was in an Excel workbook. It was our best effort to design something useful without a lot of investment. It had macros and automated “all the things.” And it worked, kind of. We learned a lot and lifted what we learned into [an online form](https://datasf.gitbooks.io/datasf-publishing-toolkit/content/technology/screendoor.html) that now [serves as our intake for publishing](https://datasf.gitbooks.io/datasf-publishing-toolkit/content/1_submission/).

## Reduce duplication of effort

Notice, I say reduce, not eliminate. It is a high bar to completely avoid duplication, but you can always scan for ways to strike out duplicative work and should. For example, our open data vendor, [Socrata](https://www.socrata.com), recently released a [r](__notset__)[ead/write metadata API](https://socratametadataapi.docs.apiary.io/#) that will allow us to sync metadata collected during publishing intake automatically. This will help us eliminate copy and pasting from one system to another.

## Orient toward scaling where possible

You can think about scale in many different ways. In this context, we attempt to [identify reusable patterns](https://datasf.gitbooks.io/datasf-publishing-toolkit/content/5_etl_specification/) and [code](https://datasf.gitbooks.io/datasf-publishing-toolkit/content/6_etl_development/) that allow us to move publishing faster over time. There are trade-offs between building up scalable infrastructure and delivering a widget faster. The tension is always present, but it can be managed by being thoughtful about when to invest in scaling projects.

## Continuously evaluate and improve

Operating over everything is a process of continuous improvement. In practical terms that means collecting data that helps you make decisions and trade-offs and having touch points (like a regular meeting) to make those decisions. As we’ve built our processes, we’ve [tried to capture data in ways that will allow us to make smarter decisions](https://datasf.gitbooks.io/datasf-publishing-toolkit/content/technology/powerbi.html) about where to optimize. And even that is a continuous process.

Read more in our [Open Data Publishing Toolkit](https://www.gitbook.com/book/datasf/datasf-publishing-toolkit/details).