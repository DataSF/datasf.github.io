---
title: Appraiser Workload Report
background_image_path: /uploads/asr-banner.png
card_image_path: /uploads/accurate-taxingV2_Icon.png
resources:
  - name: Presentation Slidedeck
    url: >-
      https://drive.google.com/file/d/11O7PenczvDONvvH6FGNTXIpDVq-S8R9Q/view?usp=sharing
categories:
  - showcase
  - datascience
featured: false
---

*Streamlining distribution of work with user-centered design and quality control tools*

## Background

Everyday in San Francisco, new buildings and residences are being constructed. &nbsp;In an average year, there are over 20,000 new and ongoing construction projects. The Office of the &nbsp;Assessor-Recorder is responsible for providing a fair and impartial appraisal of a property’s value for the purpose of property taxation. &nbsp;Every year, the Assessor’s Office brought in over $3 billion in property tax revenue and two-thirds of the fund stays local supporting City services, such as public safety, parks, libraries, and health and social services.

![](/uploads/accurate-taxingv2.png){: width="1392" height="783"}

## What was the problem

With over 20,000 active construction projects, the Assessor’s Office had developed a process to prioritize and assign these projects. &nbsp;It was a largely manual and labor intensive process. &nbsp;As a result, sixty separate workbooks would be generated and these sixty workbooks would also need to be augmented with additional data for each project before the appraisers could use them as the primary tools to evaluate a property. The additional data scattered across various sources such as:

* Data submitted by taxpayers stored in their Document Management System
* Building Inspection notes from the[DBI Permits dataset](https://data.sfgov.org/Housing-and-Buildings/Building-Permits/i98e-djp9) on the open data portal
* [Historical Tax Rolls dataset](https://data.sfgov.org/Housing-and-Buildings/Assessor-Historical-Secured-Property-Tax-Rolls/wv5m-vpq2) from Open Data Portal

Further complicating matters, appraisers would need to process and enter the data into five different screens in their internal AS-400 system. &nbsp;This was then pulled into an “Error Report” for eight principal appraisers to review, identify quality control issues, and send back to appraisers for manual correction. They confirmed corrections were made by waiting until the next report in two weeks.

![](/uploads/workflow.png){: width="1089" height="556"}

As the picture above conveys, this was a complicated undertaking, impacting almost all members of appraisal team &nbsp;There were numerous pain points, the biggest of which were:

* **Time consuming** - The manual Excel based system meant that managing and maintaining the workbooks and associate processes would require many hours of work of a single analyst. &nbsp;
* **Quality issues** - Due to the manual process, Data Quality issues &nbsp;were only caught after the fact and required additional manual work to fix.

## What was done

The daunting task of improving this process fell to the data analyst team and the project overhaul landed on Operations Analyst, Michelle Wong. &nbsp;The result was a radical transformation of the tool from a manual static Excel workbook to an automated, dynamic, Power BI report with enhanced functionality. The project was accomplished through an iterative, user-centered approach that minimized effort and maximized user buy-in.

By taking advantage of DataSF’s PowerBI courses and office hours, Michelle quickly &nbsp;recognized the potential to radically transform process via PowerBI. In particular, the DataSF Data Modeling course gave her the theoretical foundation to structure a system built on PowerBI which would automate the entire process. &nbsp;The resulting data model embedded the existing business logic into PowerBI. &nbsp;Instead of sixty excel workbooks, there &nbsp;is now a single report powered by an elegant and flexible data model. &nbsp;The development transition time from data model to V1 was only three weeks\!

In addition, Michelle incorporated a Data Quality page that instantly alerted Appraisers if they forgot to enter a field. &nbsp;This caught errors (which the focus group rebranded as “Incomplete”) before they reached the principal appraisers. Furthermore, she integrated user feedback by adding advanced features such as interactive maps and additional columns to facilitate the appraisers’ tasks.<br>&nbsp;

![](/uploads/user-centered-feedback-process.png){: width="922" height="568"}

&nbsp;

A large part of the success came from the iterative and user-centered approach Michelle took to the roll out of the new PowerBI report. &nbsp;Michelle created a V1 of the report that simply recreated what the appraisers were used to seeing. &nbsp;She created focus groups and provided office hours within ASR to help ease the transition. &nbsp;This built trust and excitement among staff. For example, staff &nbsp;asked for novel features like a searchable map to identify which sites to visit that day. &nbsp;This involved incorporating an entirely new dataset, but, due to the data model’s flexibility, it only took hours to deliver.

## What was the outcome

The analyst tasked with shepherding the process went from 100% of time spent on this project to 5%, drastically freeing up their time for more pressing analytical needs.&nbsp; He went from managing the excel workbooks to managing the project as a whole. In effect, the report provided the Assessor-Recorder a new analyst.

![](/uploads/overall-automation.png){: width="1099" height="611"}

The data quality page drastically cut the amount of errors in the final report given to Principal Appraisers to review which saved hours of staff time.&nbsp; It also helped change the dynamic between the Analysts and Appraisers. Before the automated data quality flags, the Analysts had to play the very unfun role of data drill sergeants.&nbsp; Appraisers small but consistent pain-points such as lack of a map and immediate access to information from external systems were resolved making work life more efficient.&nbsp;&nbsp;

Appraisers’ responses to the tool and the user centered process have been overwhelmingly positive.

## Team

Michelle Wong, Assessor Recorder<br>Benjamin Lau, Assessor Recorder&nbsp;