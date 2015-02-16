---
layout: blog
title: Data License Liberation Day
date: 2015-01-23 09:00:00
category: blog
published: true
author: joy_bonaguro
image:
  thumb: DataUnlocked-01.png
description: It’s official – we have legal sign off on a single licensing strategy for DataSF! Going forward, all data will be released under the friendly, no obligation Public Domain Dedication License (PDDL).
---
<img class="pull-left" style="margin-right: 10px; width: 230px;" src="{{site.baseurl}}/img/blog/DataUnlocked-01.png" alt="Icon representing unlocked data" >

It’s official – we have legal sign off on a single licensing strategy for [DataSF](https://data.sfgov.org/)! Going forward, all data will be released under the friendly, no obligation Public Domain Dedication License (PDDL). [Read the super cute friendly description](http://opendatacommons.org/licenses/pddl/summary/).

## Ouch! Too many licenses

One of our early goals was to remove ambiguity about how we license our data. Data on DataSF was available under 7 licenses.

**Table: Data Licensing on DataSF as of Summer 2014**

License | Dataset Count
--------|--------------
Creative Commons 1.0 Universal | 348
Creative Commons Attribution 3.0 Unported | 2
Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported | 6
Creative Commons Attribution-Share Alike 3.0n Unported | 83
Open Database License | 1
Public Domain | 145
None | 296

### Why this is a problem:

*   No logic or underlying strategy
*   Inconsistent obligations for data users – some have to attribute, some don’t, why?
*   Scared off corporate users with legal teams

For now, some of these licenses will have to stay in place, but as we reissue our existing datasets, we’ll migrate them to the new license.

## Why PDDL?

Our [research review of licensing](https://docs.google.com/document/d/1nT4EF6C8so2Qv6Y61MMn2FH-IATrOymfk0Z9A3DvN6w/edit?usp=sharing), highlighted three key issues that pushed us in this direction:

1.  **Licenses designed for data.** Content licenses didn’t have the special considerations needed for data. So we narrowed our choices to those designed for datasets.
2.  **Attribution stacking.** Let’s say you are building an app and use data from us, another city, and the feds but this data gets all munched together and represented and re-represented. And then someone else grabs it and reuses. Pretty soon you have 40 things to attribute and it’s just ugly. And how will we even enforce that? &nbsp;If you note us as a source, that’s awesome, but gosh, don’t mess up your UI doing it.
3.  **License interoperability.** When you’re mushing data together, we want to minimize the overhead of managing multiple licenses. If other open data releases insist on more restrictive licenses, you’ll have to deal – but we don’t want to be a drag.

We also heard from companies that having no license is ambiguous and annoying.

### Learn more about our thinking

*   [Licensing Open Data: Resources and Practices](https://docs.google.com/document/d/1nT4EF6C8so2Qv6Y61MMn2FH-IATrOymfk0Z9A3DvN6w/edit?usp=sharing) (gdoc). Research conducted by our intern (Peri Weisberg/rock star) on data licensing options available and considerations for deployment in San Francisco.
*   [Licenses – Inventory](https://docs.google.com/spreadsheets/d/1gZHgJig0BYlKdpSDieUfY-9pS5B6Tn6l3azWM7twbPw/edit?usp=sharing) (gsheet). Inventory of available licenses we reviewed and licensing policies across cities and states.
*   [Licensing Open Data: A practical guide](http://discovery.ac.uk/files/pdf/Licensing_Open_Data_A_Practical_Guide.pdf) (PDF). Our favorite resource on licensing we uncovered during our research.

## A note on ensuring PDDL

One of the things our research suggested was that enforcing licensing standards was an issue. So we’ll simply take it out of the equation. Right now, we’ll enforce through policy and process. But once Socrata implements some needed metadata improvements, we’ll make it a technical control on our portal.