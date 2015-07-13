---
layout: publishing
permalink: /publishing/automation/
title: DataSF | Publishing Automation
section: publishing-guidelines
toc: true
js: publishing.js
---
#Data Automation
##Why Automate Data Publishing
Data is most valuable when it is timely and recent. But manually updating data is time-consuming, resource-intensive, and prone to error. As a result, we prefer automation and provide a set of services to help automate the publication of data. 

##How to Obtain Automation Support
The best way to obtain automation support is to completely fill out the Publisher Packet included in the [steps to publishing data](http://datasf.org/publishing/). There are several ways to publish a dataset. Based on the [Publisher Packet]({{site.baseurl}}/publishing), the open data team will help you pick the best method for your data. You do not have to figure out how you’ll publish before you fill out the packet.

##What is Automation
The [open data team](http://datasf.org/about) provides central automation support where appropriate that can either connect to a read only table or view in your data system over a secure connection (this is preferred) or pick up data dropped regularly at a secure FTP site. Direct connections allow us to set up more robust automated notifications and reduce the number of potential failure points in the publishing chain. Automation out of the source system can be scheduled off business hours to avoid unnecessary load. Central automation also makes it easier to monitor the system-wide health of dataset publishing.

We will provide more detailed support and training through the publishing process, especially if you have not been exposed to our central automation services. However, we understand you may appreciate a preview of the publishing methods and what’s involved. The following outline the primary methods. Over time, we will likely add options and best practices as the open data program scales.

##Manual publishing options
We don't recommend manual publishing updates. But in certain cases this option does make sense (e.g. if the frequency of updates are low, the costs of automation are likely not justified). Historic, static and annually updated datasets are usually good candidates for manual updates. For manual updates, we will send automated notifications to the data steward to make sure the data are updated at the service level indicated in the dataset's metadata. While the dataset updates may not be automated, we will monitor the status of publishing updates in an automated fashion. You can learn more about how to upload data manually in our [open data vendor’s documentation](https://support.socrata.com/hc/en-us/articles/202950098-Publishing-Workflow-Accessing-the-Import-User-Interface).

##Automation Services
This is a bit more involved in the beginning, but automation services are designed to save time and aid in monitoring data publishing across the enterprise. The open data team uses [Safe FME](http://www.safe.com/) to automate publishing. FME provides a desktop authoring environment and server to run automated jobs that can connect to various data systems and formats, run transformations, and load the data into the portal. This process is generally referred to as Extract-Transform-Load (or ETL). 

When deploying automation services, the open data team works closely with technical staff and data stewards to define the appropriate views (often created as stored SQL queries or procedures depending on the system), develop a secure connection and review the data in the portal rigorously before publishing. Through the process, the appropriate transformations, quality checks, and notifications are set up and the department representatives are involved at each step, including giving the green light for publishing. Central automation also gets you some additional great benefits like:

- Automatic geocoding (where well formed addresses or consistent block and lot can be provided) - allowing the creation of point based maps
- Automatic geo-obfuscation - if you don’t want addresses available to the data user for privacy reasons, the data can be assigned to another level of geography, like street segment, Census block or tract, neighborhood or supervisor district
- Automatic geo-assignment - similar to the above, you can use an address to assign geographic boundaries and add it as a new column in the dataset (e.g. supervisor districts and neighborhoods)

##Advanced Automation
On a case by case basis, we may determine that a different automated method is more appropriate. The ETL process above is robust across many different contexts, but there may be opportunity to develop processes that push data directly to the platform using the platform’s [available Publisher API](http://dev.socrata.com/publishers/getting-started.html) or other emerging toolkits. For example, in cases where streaming or near real-time data is involved, we may need a different approach. Based on [the dataset inventory](https://data.sfgov.org/City-Management-and-Ethics/Dataset-Inventory/y8fp-fbf5), these kinds of data are rare. We welcome opportunities to explore these kinds of integrations, but expect them to be larger efforts requiring more upfront commitment from the partner department.

##Phased Publishing
In some cases, the demand will outstrip the supply of automation service support. We may elect to publish a dataset manually first to be responsive and add the dataset to the queue for automation. Regardless, the Publisher’s Packet is still essential and much of the work to get ready for automation can be done by the department before the automation is in place. This will happen on a case by case basis, and we’ll guide you through this if this option is the most appropriate. We will attempt to avoid this, but we want to remain flexible to the needs of departments across the City, while balancing against available resources.
