---
title: >-
  Streamlining distribution of work with user-centered design and quality
  control tools
background_image_path: /uploads/accurate-taxing-2.png
card_image_path: /uploads/accurate-taxing-2-1.png
resources:
  - name: Powerpoint Presentation
    url: 'https://drive.google.com/open?id=0B3nQt7K8TDq0NmtUT2d6TndBYWc'
featured: false
---

Everyday in San Francisco, new buildings and residences are being constructed.&nbsp; In an average year, there are over 20,000 new and ongoing construction projects. Sixty Appraisers in the Assessor-Recorder Office are in charge of making a fair and impartial appraisal of a property’s value for the purpose of assessing a fair tax.&nbsp; For FY18 property tax brought in $70 million dollars in the revenue for the general fund, which supports City services, such as public safety, parks, libraries, and health and social services.

![](/uploads/accurate-taxing.png){: width="1106" height="622"}

# What was the problem

With over 20,000 active construction projects, the Assessor-Recorder had developed a process to prioritize and assign these projects to the sixty appraisers.&nbsp; This was the full time responsibility of a single analyst. Every year they would generate sixty separate workbooks which become the primary tool the appraisers use to evaluate a property.

Further complicating matters, for each project the sixty workbooks need to be augmented with additional data scattered across various sources such as:

* Data submitted by taxpayers stored in their Document Management System
* Building Inspection notes from the[DBI Permits dataset](https://data.sfgov.org/Housing-and-Buildings/Building-Permits/i98e-djp9) on the open data portal
* [Historical Tax Rolls dataset](https://data.sfgov.org/Housing-and-Buildings/Assessor-Historical-Secured-Property-Tax-Rolls/wv5m-vpq2) from Open Data Portal

Appraisers processed and entered the data into five different screens in their internal AS-400 system.&nbsp; This was then pulled into an “Error Report” for eight principal appraisers to review, identify quality control issues, and send back to appraisers for manual correction. They confirmed corrections were made by waiting until the next report in two weeks.

![](/uploads/workflow.png){: width="1089" height="556"}

As the picture above conveys, this was a complicated undertaking, impacting over seventy members of the Assessor staff.&nbsp; There were numerous pain points, the biggest of which were:

* **Time consuming** - The manual Excel based system meant that managing and maintaining the workbooks and associate processes was the full time job of a single analyst.&nbsp; Nearly all the analyst’s working hours were spent keeping this engine running
* **Quality issues** - Due to the manual process, Data Quality issues&nbsp; were only caught after the fact and required additional manual work to fix

# What was done

## *Partner/Team*

Michelle Wong

## *Approach*

The daunting task of improving this process fell to Operations Analyst, Michelle Wong.&nbsp; The result was an radical transformation of the tool from a manual static Excel workbook to an automated, dynamic, Power BI report with enhanced functionality. She accomplished this through an iterative, user-centered approach that minimized effort and maximized user buy-in.

By taking advantage of DataSF’s PowerBI co![](/uploads/user-centered-feedback-process.png){: width="922" height="568"}urses and office hours, Michelle recognized the potential to radically transform process via PowerBI. In particular, the DataSF Data Modeling course gave her the theoretical foundation to structure a system built on PowerBI which would automate the entire process.&nbsp; The resulting data model embedded the existing business logic into PowerBI. Instead of sixty excel workbooks, there is now a single report powered by an elegant and flexible data model. The development transition time from data model to V1 was only three weeks\!

But Michelle didn’t stop at mere automation.&nbsp; Instead, she chose to rethink what the tool could be. She incorporated a Data Quality page that instantly alerted Appraisers if they forgot to enter a field.&nbsp; This caught errors (which the focus group rebranded as “Incomplete”) before they reached the principal appraisers. Furthermore, she integrated user feedback by adding advanced features such as interactive maps and additional columns to facilitate the appraisers’ tasks.

&nbsp;

A large part of the success came from the iterative and user-centered approach Michelle took to the roll out of the new PowerBI report.&nbsp; Change management can be hard, and appraisers were used to viewing their workload and making notes in Excel. Michelle created a V1 of the report that simply recreated what the appraisers were used to seeing.&nbsp; She created focus groups and provided office hours within ASR to help ease the transition.&nbsp;

Importantly, she rapidly responded to feedback that surfaced in the focus groups, often making changes within days.&nbsp; This built trust and excitement among staff. For example, staff asked for novel features like a searchable map to identify which sites to visit that day.&nbsp; This involved incorporating an entirely new dataset, but, due to the data model’s flexibility, it only took hours to deliver.&nbsp;&nbsp;

## *Tools & Services Used*

**Tags:Power BI**

## What was the outcome

The analyst tasked with shepherding the process went from 100% of time spent on this project to 5%, drastically freeing up their time for more pressing analytical needs.&nbsp; He went from managing the excel workbooks to managing the project as a whole. In effect, the report provided the Assessor-Recorder a new analyst.

![](/uploads/overall-automation.png){: width="1099" height="611"}

The data quality page drastically cut the amount of errors in the final report given to Principal Appraisers to review which saved hours of staff time.&nbsp; It also helped change the dynamic between the Analysts and Appraisers. Before the automated data quality flags, the Analystsanalyst had to play the very unfun role of data drill sergeants.&nbsp; Appraisers small but consistent pain-points such as lack of a map and immediate access to information from external systems were resolved making work life more efficient.&nbsp;&nbsp;

Appraisers’ responses to the tool and the user centered process have been overwhelmingly positive.

## Testimony

\[quote from ASR about DataSF\]