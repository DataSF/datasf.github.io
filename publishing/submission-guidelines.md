---
layout: fixed
permalink: /publishing/submission-guidelines/
title: Submission Guidelines
section: submission-guidelines
toc: true
index: publishing
subnav: true
---

## Understand roles and responsiblities

Publishing often involves different people with different roles and responsibilities including data stewards and data custodians. Sometimes a single person plays both roles, while in many cases the roles are split among people or teams.

### Data Steward

Data Stewards are individuals in charge of individual databases, datasets, or information systems. In general, a data steward has business knowledge of the data and can answer questions about the data itself. General responsibilities likely include:

* Managing the dataset or source and authorizing changes to it
* Managing access to and use of the data, including documentation
* Managing accuracy, quality and completeness of the data
* Answering questions related to data as needed

**Note:** You should not be publishing a dataset without input from the data steward.

### Data Custodian

Data Custodians are individuals that assist with the technical implementation of individual databases, datasets, or information systems. Not all systems or data sources will have a data custodian. General responsibilities likely include:

* Implementing technical changes requested by the data steward
* Administration and maintenance for the database or system
* Coordinating any technical work necessary for automated open data publishing. You can learn more about this in the [automation services guidance](/publishing/services/).

## Conduct an internal review

### All Datasets

Before you publish the data, make sure you review your plans to publish the data with your internal stakeholders.

**Note:** this is a list of possible stakeholders, you will not have to consult all of them in every situation:

* **Data Coordinator**. At a minimum, work with your Data Coordinator to plan how to publish your data.
* **Program subject matter experts**. They can help identify what data fields are most useful or important. They can also generate ideas for how the data can be used.
* **Reporting staff**. Open data is a great way to help streamline reporting. Reporting staff can help identify what summary tables and fields are needed to help with their work.
* **Leadership**. Depending on the dataset, you may need to communicate the publication with leadership. Consult with your Data Coordinator on this.
* **Public Information Officer and Sunshine responders**. These folks are a great source of insight on common questions that you can address with open data. Posting and keeping a dataset up to date is a great way to answer ongoing Sunshine requests.
* **Legal and privacy staff**. If there is any question whether your data is sensitive or protected, the City Attorney's Office and any privacy or security staff can serve as a resource.

### Sensitive and Protected Datasets

As part of the publishing process, you will classify your data as per the [City's Data Classification Standard](https://sfcoit.org/datastandard):

* **Level 1 -****Public.** Data available for public access or release.
* **Level 2 - Internal Use.** Normal operating information, but is not proactively released to the public. Viewing and use is intended for employees; it could be made available Citywide or to specific employees in a department, division or business unit. Certain data may be made available to external parties upon their request.
* **Level 3 -****Sensitive.** Data intended for release on a need-to-know basis. Data regulated by privacy laws or regulations or restricted by a regulatory agency or contract, grant, or other agreement terms and conditions.<br>
* **Level 4 -****Protected.** Data that triggers requirement for notification to affected parties or public authorities in case of a security breach.
* **Level 5 - Restricted.** This data poses direct threats to human life or catastrophic loss of major assets and critical infrastructure (e.g. triggering lengthy periods of outages to critical processes or services for residents).\*

  *\*Before classifying data as Level 5 Restricted, you should speak with leadership in your department and the City’s Chief Information Security Officer. Only in rare instances will data be classified at this level. For example, in the federal NIST guidance, homeland security, national defense and intelligence information is classified as “high” impact.*

If your data is sensitive or protected, we will walk you through a decision-making process to help assess whether de-identified data should be published. The primary steps are:

1. Review the [Open Data Release Toolkit](https://docs.google.com/document/d/1MhvEuGKFuGY2vLcNqiXBsPjCzxYebe4dJicRWe6gf_s/edit?usp=sharing) for familiarity with this topic and instructions.
2. Fill out the [Open Data Release Form](https://docs.google.com/document/d/1cxjyIivWzlG4Rf_8c0XAq-I-z3Dd3lJOEaI-UP2c_4g/edit?usp=sharing) based on the instructions provided in the Toolkit.
3. Review your completed [Open Data Release Form](https://docs.google.com/document/d/1cxjyIivWzlG4Rf_8c0XAq-I-z3Dd3lJOEaI-UP2c_4g/edit?usp=sharing) with DataSF staff.

If you have any questions about this process or the Toolkit, or require help at any step, please [contact us](http://support.datasf.org/customer/portal/emails/new).

## Clearly define your datasets for another audience

Not everyone will have as deep an understanding of the data's context. As part of the publishing process we capture a certain amount of metadata that helps provide context. While many of these are drop downs, there are a handful of fields that are open text. Below are some guidelines and examples for the dataset's **title** and **description** as well as definitions for **categories**.

### Title guidelines

Make sure your title is descriptive and as concise as possible.

* Spell out acronyms or avoid jargon if at all possible
* Include date ranges only if appropriate

### Description guidelines

Make sure your description addresses the following points where appropriate:

* Who collects the data or who is the source of the data?
* How is the data collected?
* Why is this data collected and what is it used for (include relevant ordinance references, if applicable)?
* What are the programs or policies that this data supports?

### Title and description examples

**Title:** Buyout Agreements **Description:** Contains buyout declarations and buyout agreements filed at the Rent Board. Rent Ordinance Section 37.9E, effective March 7, 2015, is a new provision that regulates "buyout agreements" between landlords and tenants under which landlords pay tenants money or other consideration to vacate their rent-controlled rental units. For more information, please see: http://sfrb.org/new-ordinance-amendment-regulating-buyout-agreements

**Title:** Affordable Housing Pipeline **Description:** Snapshot of Mayor’s Office of Housing and Community Development (MOHCD) and the Office of Community Investment and Infrastructure (OCII) affordable housing pipeline. Projects listed are in the process of or anticipated to be developed in partnership with non-profit and for-profit developers and financed through City Funding Agreements, Ground Leases, Disposition & Participation Agreements and Conduit Mortgage Revenue Bond Financing. Data used for tracking affordable housing production that is financed or supported by MOHCD and OCII and informs affordable housing production policies and initiatives. as of June 30, 2016.

### Category definitions

When choosing a category for the dataset, pick the one that best captures the data.

| Category | Definition |
| --- | --- |
| City Infrastructure | Data on maintenance and management of public buildings and facilities, spaces, streets and right of way |
| City Management and Ethics | Data on finance, budgets, taxes, employees, elections, campaigns, ethics reporting, etc |
| Culture and Recreation | Data on arts, museums, public spaces and events |
| Economy and Community | Data on businesses, community and economic development |
| Energy and Environment | Data on sustainability, energy and resource use, and environmental conditions |
| Geographic Locations and Boundaries | Geographic data on city locations and boundaries; Available as shapefiles, jsons, kml |
| Health and Social Services | Data about health, public health, and services provided to individuals, children and families |
| Housing and Buildings | Data on permitting, construction, housing units, building inspections, rent control, etc |
| Public Safety | Data on crime, fire, accidents, and enforcement |
| Transportation | Data about public transit, biking, driving, parking, and flying |

### Defining fields

Field definitions are important pieces of information to anyone using data. They should be written with an external, naive user in mind. They are also helpful to DataSF staff, especially for defining business rules or transforms for open data.

State definitions as a descriptive phrase or sentence. Be precise, unambiguous and concise. Make it unique and state it in the singular. State what it is, not what it is not. Can the definition stand alone? Define units of measure (e.g. miles or meters or feet).

Depending on the field consider also including:

* **Standard Definition References.** Does the field use any industry or organizational standards? If so, include a brief reference to the standard in use.
* **Allowable Values or Ranges.** If the field is a category, what’s the list of allowable values. If a date or number, what is the allowable or expected range?
* **Guidance on Use.** Provide non-obvious guidance for use of the field. These include any known limitations of the data collected. For example, if a field wasn’t collected for a certain period of time, state that clearly.

### Field definition examples

The following are example definitions for different fields (not from the same dataset)

**Field:** NAICS Code

**Definition:** The North American Industry Classification System (NAICS) is a standard used by Federal statistical agencies for the purpose of collecting, analyzing and publishing statistical data related to the U.S. business economy. A registrant indicates the business activity on the City and County's tax registration forms. These business activities map onto a subset of NAICS codes. Refer to http://sftreasurer.org/NAICS for these mappings.

---

**Field:** Class Code

**Definition:** The Class Code is used for differentiating between classes of street segments: 1, Freeways; 2, Highways; 3, Major Streets; 4, Secondary Streets; 5, Local Streets; 6, Freeway Ramps; 0, Private Streets.

---

**Field:** Fiscal Year

**Definition:** An accounting period of 12 months. The City and County of San Francisco operates on a fiscal year that begins on July 1 and ends on June 30 the following year. For example, the Fiscal Year ending June 30, 2012 is represented as FY2011-2012.