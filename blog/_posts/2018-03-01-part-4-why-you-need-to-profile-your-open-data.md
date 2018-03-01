---
title: 'Part 4: Why you need to profile your open data'
author: janine_heiser
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
description: >-
  In celebration of Open Data Day on March 3, 2018, we are releasing a 4 part
  series on how to manage an open data program. In this final part, we discuss
  how we use dataset and field profiling to monitor the health and quality of
  the data on the open data portal.
date: 2018-03-01 20:06:00
categories:
  - blog
---

---

*In celebration of [Open Data Day on March 3, 2018](http://opendataday.org/), we are releasing a 4 part series on how to manage an open data program.*

1. *[Part 1: DataSF’s operating manual for open data](/blog/part-1-datasfs-operating-manual-for-open-data/)*
2. [*Part 2: How to monitor your open data portal*](/blog/part-2-how-to-monitor-your-open-data-portal/)
3. [*Part 3: How to tame open data with standards*](null)
4. *Part 4: Why you need to profile your open data*

---

Data profiling is a tool that helps us better understand the quality of data available on the open data portal. Data profiling is the process of examining the data available and collecting statistics and informative summaries about that data.

## Why you should profile your open data

Data profiling helps our open data program in many ways:

* It provides a quantified assessment of data quality.
* It assists in the discovery of anomalies within the data.
* It helps users understand content, structure, relationship, etc. about the data.
* It surfaces issues/problems that we might run into before we start working with the data.
* It helps us assess and validate metadata.

## How profiling leads to greater data quality

At DataSF, we collect metrics to quantify the quality of the data on our portal. Our data profiling allows us to examine then take action on the following aspects of data quality:

* **Completeness**: Is the data complete? How often is a given attribute populated vs blank or null?
* **Validity**: Is the data valid? Do the values for a given attribute in the data make sense?
* **Timeliness**: Is the data getting updated on time?
* **Uniqueness**: How many distinct values are found for a given attribute across all records? Are there duplicates?
* **Consistency**: Is there a single version of truth or is it different depending on source/version?
* **Accuracy**: Does the data accurately describe the real world?

## Profile both your datasets and your data fields

Data can be profiled at both the dataset level and at the field level. Each level is needed to understand the health of your open data publishing and the quality of the data published.

### Dataset Level Profiling

Profiling at the dataset level allows you to measure the overall health of a dataset and its major characteristics. DataSF monitors the following for each dataset:

* **Frequency counts:** the total number of records in the dataset, the total number of fields in the dataset (including the number of fields that are of a certain data type), which provides a sense of the size and structure of the dataset
* **Duplicate Count and Percentage:**Count/Percentage of the number of row level duplicates- aka rows that are exact copies, which helps flag possible errors
* **Documented Count and Percentage:** Count/Percentage of the number of fields that have been documented and have completed field definitions, which helps monitor compliance with our data dictionary requirements
* **Global Field Count And Percentage:** Count/Percentage of the number of global fields in a dataset. A dataset with a high percentage of global fields may indicate that its a reference dataset, which helps flag data that could be standardized
* **Various timestamp information:** the timestamp of when the dataset was last updated and first created, which helps monitor dataset health

### Field Level Profiling

Field level profiling helps you dig into the individual fields that make up the dataset and identify field specific data quality issues. It also helps potential dataset users quickly understand the range of data in the dataset and see at glance which fields might be most useful. We profile the following for every field in every dataset:

* **Total Count, Null Count, Missing Count, Actual Count:**Count of the number of records that are null, missing or have actual values
* **Completeness:** Percentage calculated as Actual divided by the total number of records
* **Cardinality:** Count of the number of distinct values in a field
* **Distinctness:** Percentage calculated as Cardinality divided by the total number of records
* **Uniqueness:** Percentage calculated as Cardinality divided by Actual
* I**sPrimaryKeyCandidate:** Looks to see if a column is a 100% unique and 100% complete; if both are true, the column is a good candidate to become a primary key
* **Min, Max, Avg Field Length:** The minimum, maximum and average number of characters/digits in a field
* **Min, Max, Mean, Median, Mode, Range, Sum, Standard Deviation, Variance, Kurtosis, Skewness:** We collect descriptive statistics for all numeric type fields

## Resources to Help You Start

We've profiled all the datasets and fields on our open data portal. You can view these as datasets:

* [Dataset Profiles](https://data.sfgov.org/City-Management-and-Ethics/Dataset-Profiles/w6q6-i3uv/data): Data profiling information about the published datasets on the DataSF open data portal
* [Field Profiles](https://data.sfgov.org/City-Management-and-Ethics/Field-Profiles/ekxv-883u/data): Data profiling information about the published fields on the DataSF open data portal

To profile our city's data in bulk and continuously, we wrote an open source data profiling tool. Check out the **datasf-profiler** on GitHub: [https://github.com/DataSF/datasf-profiler](https://github.com/DataSF/datasf-profiler)

We would love to hear about your experiences profiling the data on your open data portal. If you have comments, questions, additions, corrections or complaints, let us know on twitter!