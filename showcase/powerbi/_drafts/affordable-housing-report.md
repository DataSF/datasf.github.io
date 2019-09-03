---
title: Affordable Housing Report
background_image_path:
card_image_path:
resources:
  - name: Powerpoint Presentation
    url:
categories:
  - showcase
  - datascience
featured: false
---

## Background

The Mayor’s Office of Housing and Community development provides stable, healthy, and &nbsp;affordable housing to the residents of San Francisco. &nbsp;They accomplish this primarily through a suite of lottery and preference programs designed to match available affordable housing to help low-income residents and communities in need.<br>Information about who applied and who was accepted to MOHCD’s Affordable Housing Programs is highly valuable for programmatic and equity purposes. &nbsp;MOHCD receives constant inquiries from the public, stakeholders, advocates, and politicians about they number of applicants by project, demographics, and program type.<br>&nbsp;

## What was the problem

The majority of the data for the Affordable Housing programs is stored in a Salesforce database. &nbsp;However this only makes up 60% of the overall total. &nbsp;The rest is stored across nearly a 100 spreadsheets managed by different managers of different MOHCD partners. &nbsp;Each spreadsheet had different naming conventions and a variety of data quality issues.

![](/uploads/mohcd-salesfo.png){: width="644" height="322"}

A lack of a single true source of information lead to a lack of consistency. &nbsp;This appeared in two broad ways. &nbsp;

* **Timeliness** - Answers to questions could not be given in timely fashion. Inquiries required major undertakings to clean and analyze the data. &nbsp;Some request were simple to answer and others would take potentially weeks. Some request could not be answered due to the amount of time to answer and competing priorities.
* **Accuracy** - The manual nature of the process occasionally resulted in different analyst getting different answers to the same question, forcing additional time to reconcile the results

These consistency issues resulted in the reliance on standard reports which answered established questions. &nbsp;

## What was done

The work was spearheaded by Charles MacNulty, Program Development and Data Specialist at MOHCD, and proceeded in 2 phases.

First he needed to tackle the extreme lack of standardization across the 100+ datasets. &nbsp;He thought through the analytical needs and created a harmonized structure each file needed to be in. &nbsp;To implement he engaged the help of a Intern at the Goldman School of Public Policy, Lindsay Rosenfeld. She helped standardize and clean the 100+ data sources. &nbsp;This intense process laid the groundwork for modeling in PowerBI.<br>![](/uploads/mohcd-datastandard.png){: width="671" height="344"}

From these revamped sources, PowerBI was used to build out data model that supported a series of reports. &nbsp;He designed the data model to maximize flexibility. &nbsp;This ensured the same data model could be used it to build multiple reports for different stakeholders with different demands.&nbsp;

## What was the outcome

The new automated reports greatly reduced staff time required to respond &nbsp;to the questions of stakeholders.. &nbsp;A single, consistent data model reduces the chance of small errors entering the data wrangling stage for each new project, further saving staff time. &nbsp;These results were immediately felt soon after V1 was finished. &nbsp;He generated a report for the Board of Supervisors and then used the same data model to answer a different set of questions for the City Administrator. &nbsp;Before the adoption of PowerBI, this new question would have required program staff resources.

## Team

Charlie MacNulty, MOHCD

&nbsp;