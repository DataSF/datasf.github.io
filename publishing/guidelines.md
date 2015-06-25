---
layout: default
permalink: /publishing/guidelines/
---

#Publishing Guidelines
We’ve created some guidelines for publishing data on [SF Open Data](https://data.sfgov.org). Following these guidelines will help maximize the value of publishing your data and support a consistent experience for our users.

##Publish data in the rawest form possible
One of the cool things about open data is that people are always surprising us by what they do with it. Publishing data in the rawest form possible helps make the data as flexible as possible.

For example, if you collect data on fruit and vegetable purchases, you could publish summarized or raw data. In the picture below, if you publish the raw data - you can derive the other two. Publishing your raw data is the best way to foster new uses! We understand, of course, your ability to publish in raw formats may be limited by legal and privacy constraints, so that’s why it's the rawest form **possible**.

Image here

##Include the dataset steward in the publishing process
Data stewards are responsible for the dataset and can answer questions about the data and help make decisions about how to publish it. You should not be publishing a dataset without input from the data steward. They are key to helping us actively manage and answer dataset questions. 

##Don’t publish data from another department
This is a corollary to the previous - if your department doesn’t manage the data, you should not publish it. Otherwise we won’t be able to effectively respond to data questions or ensure that the right or best data is being published. There may be occasions when multiple departments contribute to a single dataset, but we’ll handle these on a case by case basis.

##Publish address or point data in tabular format - not as a shapefile
Most users are confused by or don’t have the resources to use shapefiles. (Whereas our savvier users find it simple to go from tabular to mapped data). Tabular data makes it easier for most users to use. Plus, our open data platform allows us to create maps on top of the tabular view anyway. SF crime incident data, for example, [is published in this way](https://data.sfgov.org/Public-Safety/SFPD-Incidents-from-1-January-2014/tmnf-yvry) and users can make a bunch of maps from it, [like this one](https://data.sfgov.org/Public-Safety/West-Portal-Area/yani-faij). Overall, this increases the flexibility and usability of those point layer datasets.

##Publish non-point geographic data natively
Upload geographic lines or polygons so that they are hosted natively on the platform (versus a zipped shapefile). We are moving toward native hosting of all datasets to create a more consistent platform experience for users.

For less volatile datasets that change very little or are historical in nature, you can [upload the shapefile directly](https://support.socrata.com/hc/en-us/articles/202950488-Host-geospatial-files-using-Socrata-Mondara). For more complex, changing datasets, you can [load ESRI Map Layer links](https://support.socrata.com/hc/en-us/articles/202950498-Connect-an-ESRI-map-layer) to keep the dataset synced to a source mapping service. You can learn more on that approach here.

##Publish data about geographic boundaries in keyed tables - not as a shapefile
If you have a dataset by a certain geography (e.g. neighborhood, tract or supervisor district) publish the data as a table using the geography as a key field. This will allow others to access the data regardless of GIS capabilities.

If your dataset is a novel analysis and includes a series of indicators, publish it as a single dataset and include documentation on the analysis. This will help signal to the user that this is an analysis dataset that represents a point in time and not a source for the original data. See [DPH’s Community Resiliency Indicator system](https://www.google.com/url?q=https://data.sfgov.org/Health-and-Social-Services/Community-Resiliency-Indicator-System/banc-xdvr) for an example of this.

##Understanding Publishing Methods
When publishing a dataset there are several approaches. The open data team will guide you through picking the method most appropriate for your data. Filling out the Publisher’s Packet and sending that to us allows us to assess options quickly before guiding you through the process. So you do not have to make the determination of how you’ll publish before you fill out the packet. The nature of the data and the particular context it sits in will help determine the best approach.

The [open data team](http://datasf.org/about) provides central automation support where appropriate that can either connect to a read only table or view in your data system over a secure connection (this is preferred) or pick up data dropped regularly at a secure FTP site. Direct connections allow us to set up more robust automated notifications and reduce the number of potential failure points in the publishing chain. Automation out of the source system can be scheduled off business hours to avoid unnecessary load. Central automation also makes it easier to monitor the system-wide health of dataset publishing.

We will provide more detailed support and training through the publishing process, especially if you have not been exposed to our central automation services. However, we understand you may appreciate a preview of the publishing methods and what’s involved. The following outline the primary methods. Over time, we will likely add options and best practices as the open data program scales.

###Manual publishing options
While manual updates are not preferred, there are certain cases where this option does make sense. Particularly if the frequency of updates are low, the costs of automation are likely not justified. Historic, static and annually updated datasets are examples. In certain cases, even quarterly updates could be done manually, although this will likely vary by dataset. In cases where manual updates are employed, we will send automated notifications to the data steward to make sure the data are updated at the service level indicated in the metadata. While the updates may not be automated, we can monitor the SLAs across the platform in an automated fashion. You can learn more about how to upload data manually in our [open data vendor’s documentation](https://support.socrata.com/hc/en-us/articles/202950098-Publishing-Workflow-Accessing-the-Import-User-Interface).

###Automation Services
This is a bit more involved in the beginning, but automation services are designed to save time and aid in monitoring data publishing across the enterprise. The open data team uses [Safe FME](http://www.safe.com/) to automate publishing. FME provides a desktop authoring environment and server to run automated jobs that can connect to various data systems and formats, run transformations, and load the data into the portal. This process is generally referred to as Extract-Transform-Load (or ETL). 

When deploying automation services, the open data team works closely with technical staff and data stewards to define the appropriate views (often created as stored SQL queries or procedures depending on the system), develop a secure connection and review the data in the portal rigorously before publishing. Through the process the appropriate transformations, quality checks, and notifications are set up and the department representatives are involved at each step, including giving the green light for publishing. Central automation also gets you some additional great benefits like:

- Automatic geocoding (where well formed addresses or consistent block and lot can be provided) - allowing the creation of point based maps
- Automatic geo-obfuscation - if you don’t want addresses available to the data user for privacy reasons, the data can be assigned to another level of geography, like Census, neighborhood or supervisor district
- Automatic geo-assignment - similar to the above, you can pass in an address and get boundaries that address falls in as a new column in the dataset.
- And more

###Advanced Automation
On a case by case basis, we may determine that a different automated method is more appropriate. The ETL process above is robust across many different contexts, but there may be opportunity to develop processes that push data directly to the platform using the platform’s available Publisher API or other emerging toolkits. For example, in cases where streaming or near real-time data is involved, this may merit some investigation. Based on the dataset inventory, these kinds of data are rarer. We welcome opportunity to explore these kinds of integrations, but likely these will be larger efforts requiring more commitment from the partner department.

###Phased Publishing
In some cases, the demand will outstrip the supply of automation service support. We may elect to publish a dataset manually first to be responsive and add the dataset to the queue for automation. Regardless, the Publisher’s Packet is still essential and some of the work to get ready for automation can be done by the department. This will happen on a case by case basis, and we’ll guide you through this if this option is the most appropriate. We will attempt to avoid this, but we want to remain flexible to the needs of departments across the City, while balancing against available resources.