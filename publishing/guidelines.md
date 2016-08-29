---
layout: fixed
permalink: /publishing/guidelines/
title: Publishing Guidelines
section: publishing-guidelines
toc: true
js: publishing.js
index: publishing
subnav: true
---

We’ve created some guidelines for publishing data on [the City's open data catalog](https://data.sfgov.org). Following these guidelines will help maximize the value of publishing your data and support a consistent experience for data users.

## Publish data in the rawest form possible
One of the cool things about open data is that people are always surprising us by what they do with it. Publishing data in the rawest form possible helps make the data as flexible as possible.

For example, if you collect data on fruit and vegetable purchases, you could publish summarized or raw data. In the picture below, if you publish the raw data - you can derive the other two. Publishing your raw data is the best way to foster new uses! We understand, of course, your ability to publish in raw formats may be limited by legal and privacy constraints, so that’s why it's the rawest form **possible**.

!['Getting to raw, just like fruits and veggies']({{site.baseurl}}/assets/img/publishing/fruits_veggies.png)

## Understand roles and responsiblities
Publishing often involves different people with different roles and responsibilities including data stewards and data custodians. Sometimes a single person plays both roles, while in many cases the roles are split among people or teams.

### Data Steward
Data Stewards are individuals in charge of individual databases, datasets, or information systems. In general, a data steward has business knowledge of the data and can answer questions about the data itself. General responsibilities likely include:

- Managing the dataset or source and authorizing changes to it
- Managing access to and use of the data, including documentation
- Managing accuracy, quality and completeness of the data
- Answering questions related to data as needed

### Data Custodian
Data Custodians are individuals that assist with the technical implementation of individual databases, datasets, or information systems. Not all systems or data sources will have a data custodian. General responsibilities likely include:

- Implementing technical changes requested by the data steward
- Administration and maintenance for the database or system
- Coordinating any technical work necessary for automated open data publishing. You can learn more about this in the [automation services guidance](/publishing/services/).


## Include the data steward in the publishing process
Data stewards are responsible for the dataset and can answer questions about the data and help make decisions about how to publish it. You should not be publishing a dataset without input from the data steward. They are key to helping us actively manage and answer dataset questions. 

## Conduct an internal review

### All Datasets

Before you publish the data, make sure you review your plans to publish the data with your internal stakeholders:

- **Data Coordinator**. At a minimum, work with your Data Coordinator to plan how to publish your data.
- **Program subject matter experts**. They can help identify what data fields are most useful or important. They can also generate ideas for how the data can be used.
- **Reporting staff**. Open data is a great way to help streamline reporting. Reporting staff can help identify what summary tables and fields are needed to help with their work.
- **Leadership**. Depending on the dataset, you may need to communicate the publication with leadership. Consult with your Data Coordinator on this.
- **Public Information Officer and Sunshine responders**. These folks are a great source of insight on common questions that you can address with open data. Posting and keeping a dataset up to date is a great way to answer ongoing Sunshine requests.
- **Legal and privacy staff**. If there is any question whether your data is sensitive or protected, the City Attorney&#39;s Office and any privacy or security staff can serve as a resource.

During the publishing process, we'll ask you to document the internal stakeholders that were part of the review.

### Sensitive and Protected Datasets

As part of the publishing process, you will classify your data as public, sensitive or protected:

- **Public**. This data could be publicly disseminated without any concerns.
- **Sensitive**. In its raw form, this data poses security concerns, could be misused to target individuals or poses other concerns.
- **Protected**. This data is protected by law or regulation and can only be shared or accessed internally and per organizational procedures; OR this information includes individually identified information.

If your data is sensitive or protected, we will walk you through a decision-making process to help assess whether de-identified data should be published. The primary steps are:

1. Review the [Open Data Release Toolkit](https://docs.google.com/document/d/1MhvEuGKFuGY2vLcNqiXBsPjCzxYebe4dJicRWe6gf_s/edit?usp=sharing) for familiarity with this topic and instructions.
2. Fill out the [Open Data Release Form](https://docs.google.com/document/d/1cxjyIivWzlG4Rf_8c0XAq-I-z3Dd3lJOEaI-UP2c_4g/edit?usp=sharing) based on the instructions provided  in the Toolkit.
3. Review your completed [Open Data Release Form](https://docs.google.com/document/d/1cxjyIivWzlG4Rf_8c0XAq-I-z3Dd3lJOEaI-UP2c_4g/edit?usp=sharing) with DataSF staff.

If you have any questions about this process or the Toolkit, or require help at any step, please [contact us](http://support.datasf.org/customer/portal/emails/new).

## Clearly define your datasets for an external audience
Not everyone will have as deep an understanding of the data's context. As part of the publishing process we capture a certain amount of metadata that helps provide context. While many of these are drop downs, there are a handful of fields that are open text. Below are some guidelines and examples for the dataset's **title** and **description**

### Title guidelines

Make sure your title is descriptive and as concise as possible.

- Spell out acronyms or avoid jargon if at all possible
- Include date ranges only if appropriate


### Description guidelines

Make sure your description addresses the following points where appropriate:

- Who collects the data or who is the source of the data
- How is the data collected
- Why is this data collected and what is it used for (include relevant ordinance references, if applicable)
- What are the programs or policies that this data supports

### Examples

**Title:** Buyout Agreements
**Description:** Contains buyout declarations and buyout agreements filed at the Rent Board. Rent Ordinance Section 37.9E, effective March 7, 2015, is a new provision that regulates "buyout agreements" between landlords and tenants under which landlords pay tenants money or other consideration to vacate their rent-controlled rental units. For more information, please see: http://sfrb.org/new-ordinance-amendment-regulating-buyout-agreements

**Title:** Affordable Housing Pipeline
**Description:** Snapshot of Mayor’s Office of Housing and Community Development (MOHCD) and the Office of Community Investment and Infrastructure (OCII) affordable housing pipeline. Projects listed are in the process of or anticipated to be developed in partnership with non-profit and for-profit developers and financed through City Funding Agreements, Ground Leases, Disposition & Participation Agreements and Conduit Mortgage Revenue Bond Financing. Data used for tracking affordable housing production that is financed or supported by MOHCD and OCII and informs affordable housing production policies and initiatives. as of June 30, 2016.

## Don’t publish data from another department
This is a corollary to the previous - if your department doesn’t manage the data, you should not publish it. Otherwise we won’t be able to effectively respond to data questions or ensure that the right or best data is being published. There may be occasions when multiple departments contribute to a single dataset, but we’ll handle these on a case by case basis.

## Publish address or point data in tabular format - not as a shapefile
Most users are confused by or don’t have the resources to use shapefiles. (Whereas our savvier users find it simple to go from tabular to mapped data). Tabular data makes it easier for most users to use. Plus, our open data platform allows us to create maps on top of the tabular view anyway. SF crime incident data, for example, [is published in this way](https://data.sfgov.org/Public-Safety/SFPD-Incidents-from-1-January-2014/tmnf-yvry) and users can make a bunch of maps from it, [like this one](https://data.sfgov.org/Public-Safety/West-Portal-Area/yani-faij). Overall, this increases the flexibility and usability of those point layer datasets.

## Publish non-point geographic data natively
Upload geographic lines or polygons so that they are hosted natively on the platform (versus a zipped shapefile). We are moving toward native hosting of all datasets to create a more consistent platform experience for users.

For less volatile datasets that change very little or are historical in nature, you can [upload the shapefile directly](https://support.socrata.com/hc/en-us/articles/202950488-Host-geospatial-files-using-Socrata-Mondara). For more complex, changing datasets, you can [load ESRI Map Layer links](https://support.socrata.com/hc/en-us/articles/202950498-Connect-an-ESRI-map-layer) to keep the dataset synced to a source mapping service.

## Publish data about geographic boundaries in keyed tables - not as a shapefile
If you have a dataset by a certain geography (e.g. neighborhood, tract or supervisor district) publish the data as a table using the geography as a key field. This will allow others to access the data regardless of GIS capabilities.

If your dataset is a novel analysis and includes a series of indicators, publish it as a single dataset and include documentation on the analysis. This will help signal to the user that this is an analysis dataset that represents a point in time and not a source for the original data. See [DPH’s Community Resiliency Indicator system](https://www.google.com/url?q=https://data.sfgov.org/Health-and-Social-Services/Community-Resiliency-Indicator-System/banc-xdvr) for an example of this.

## Automate data publishing where appropriate
In order to maintain timely data available across the City, we prefer automation and provide a set of services to help in the automation process. The best way to start publishing data is to fill out a Publisher Packet for the dataset completely. The information in this packet will help the open data team work with you to determine the most appropriate data publishing method. You can [read more about data automation]({{site.baseurl}}/publishing/automation) services, if you want to learn more about the options.

## Responsibly publish private or sensitive data
If your dataset has private or sensitive data, there are several ways to responsibly publish this data. We will help you with this - you are not alone!

During the process of publication, we will work with you to implement the appropriate method. So at this stage, focus on flagging areas of concern - **not on how to implement it**. In the publication packet we give you a chance to flag your concerns. The table below provides a quick overview of the basic methods we use.

| Method | What it is | Best for |
| ------------- |-------------| -----|
| Column Removal | *Remove the privacy implicating columns.* The simplest way to avoid any privacy issues, is to simply not publish the columns that include private data. For example, if a dataset is a list of users and includes their name, address or other information, you can simply remove those columns from the dataset.| Datasets that include individual information that is not necessary for consuming and understanding the data.|
| Obfuscation | *Mask or transcribe the data.* Obfuscation can happen in a number of ways but a common case is with address data. Sometimes we want to retain a proxy of the address without aggregating the data. | Datasets that include individual information that is not necessary for consuming and understanding the data. |
| Banding | *Group the data.* Banding is a way to obscure individual values. For example, instead of publishing age, you can publish age group. Other examples of banding include time (date to month to quarter) or race (breakouts to other). | Datasets where individual record data is important to publish but where too much detail can make it easy to identify individuals with uncommon mixes of characteristics. |
| Aggregation | *Summarize the data based on a data property.* Sometimes de-identifying the data is not sufficient. Your data might need to be aggregated either by geography or some other factor such as a category in the dataset. | Datasets where the individual records pose a privacy risk even if the identifying columns are removed. A common example of this is health related data. If the individual records (rows) are important to publish, use one of the other methods. |
