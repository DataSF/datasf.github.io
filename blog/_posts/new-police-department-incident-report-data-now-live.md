---
title: New police department incident report data now live!
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
date:
categories:
  - blog
---

On September 9, [we launched the updated police incident report dataset](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/wg3w-h783). This has been a long standing goal since I started with DataSF 4 years ago. The Police Department has since then made incredible strides migrating to the new Crime Data Warehouse. Before, we were publishing data that came from a legacy mainframe called CABLE which was not without its challenges (to say the least).

## What's new: some exciting changes enabled by Crime Data Warehouse

1. **Recent data available without additional lag.** The prior dataset had a 2 week offset to deal with delay in processing of records into CABLE. Reports are generated through the Crime Data Warehouse so data is captured at the time of report creation. The dataset updates daily and will reflect the data from up to the day before.
2. **A much simpler data pipeline.** Rube Goldberg would have been proud! [The previous dataset](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-Historical-2003/tmnf-yvry#) moved from mainframe to flat files, hopping around multiple servers, knocking a ball down a long tube before arriving on the open data portal. Now we have a single, simple pipe that is easier to maintain and monitor.
3. **Updated police district boundaries.** The prior dataset did not reflect redistricting because the legacy system could not be changed. The Police District field now reflects [the updated boundaries](https://data.sfgov.org/Public-Safety/Current-Police-Districts/wkhw-cjsf).
4. **New fields.** Important new fields are now included. For example, report types allow users to understand the nature of the report like if the report was filed online and whether it was an initial or supplemental report.
5. **Improved documentation.** We've gotten a lot of questions about these data over the years, [we've compiled our most asked questions into a dataset primer](https://bit.ly/2x7Ta2P) that will make it easier to use.

## Now, take a look

But enough talking about it, go ahead and poke around yourself. Below is an embedded map, which you can also see on the portal. And of course, [you can check out the data](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/wg3w-h783) and [visualize](https://support.socrata.com/hc/en-us/articles/115000813847-Creating-a-Visualization-in-the-New-Visualization-Canvas), [download](https://support.socrata.com/hc/en-us/articles/202949658-Export-formats-for-downloading-data) and [access via the API](https://support.socrata.com/hc/en-us/articles/202949298-Where-do-I-find-the-API-Endpoint-)!

[View the data](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/nwbb-fxkq?referrer=embed){: .socrata-visualization-embed target="_blank"}

## A special thanks

It takes many hands to lift up a dataset. None of this would have been possible without the great staff at the Police Department including those in the [Professional Standards and Principled Policing Bureau](https://sanfranciscopolice.org/professional-standards-and-principled-policing-bureau), the [Technology Division](http://sanfranciscopolice.org/administration#technology), and the [Crime Analysis Unit in the Planning Division](http://sanfranciscopolice.org/administration#planning). Additionally, our colleagues on the SFGIS Enterprise GIS program were instrumental in getting this over the finish line.