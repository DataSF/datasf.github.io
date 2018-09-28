---
title: New police department incident report data now live!
author:
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

## What&#39;s new: some exciting changes enabled by Crime Data Warehouse

1. **Recent data available without additional lag.** The prior dataset had a 2 week offset to deal with delay in processing of records into CABLE. Reports are generated through the Crime Data Warehouse so data is captured at the time of report creation. The dataset updates daily and will reflect the data from up to the day before.
2. **A much simpler data pipeline.** Rube Goldberg would have been proud! [The previous dataset](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-Historical-2003/tmnf-yvry#) moved from mainframe to flat files, hopping around multiple servers, knocking a ball down a long tube before arriving on the open data portal. Now we have a single, simple pipe that is easier to maintain and monitor.
3. **Updated police district boundaries.** The prior dataset did not reflect redistricting because the legacy system could not be changed. The Police District field now reflects [the updated boundaries](https://data.sfgov.org/Public-Safety/Current-Police-Districts/wkhw-cjsf).
4. **New fields.** Important new fields are now included. For example, report types allow users to understand the nature of the report like if the report was filed online and whether it was an initial or supplemental report.
5. **Improved documentation.** We&#39;ve gotten a lot of questions about these data over the years, [we&#39;ve compiled our most asked questions into a dataset primer](https://bit.ly/2x7Ta2P) that will make it easier to use.

## Now, take a look

But enough talking about it, go ahead and poke around yourself. Below is an embedded map, which you can also see on the portal. And of course, [you can check out the data](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/wg3w-h783) and [visualize](https://support.socrata.com/hc/en-us/articles/115000813847-Creating-a-Visualization-in-the-New-Visualization-Canvas), [download](https://support.socrata.com/hc/en-us/articles/202949658-Export-formats-for-downloading-data) and [access via the API](https://support.socrata.com/hc/en-us/articles/202949298-Where-do-I-find-the-API-Endpoint-)!

<a class="socrata-visualization-embed" data-embed-version="1" data-height="600" data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;mapCenterAndZoom&quot;:{&quot;center&quot;:{&quot;lng&quot;:-122.3155644149258,&quot;lat&quot;:37.7654032996965},&quot;zoom&quot;:10.941017182917218},&quot;basemapOptions&quot;:{&quot;maxClusteringZoomLevel&quot;:12,&quot;searchBoundaryLowerRightLongitude&quot;:-122.34400563252592,&quot;searchBoundaryUpperLeftLongitude&quot;:-122.54361748543666,&quot;searchBoundaryUpperLeftLatitude&quot;:37.83826795856962,&quot;navigationControl&quot;:true,&quot;basemapStyle&quot;:&quot;https://a.tiles.mapbox.com/v3/socrata-apps.ibp0l899/{z}/{x}/{y}.png&quot;,&quot;geoCoderControl&quot;:true,&quot;geoLocateControl&quot;:true,&quot;searchBoundaryLowerRightLatitude&quot;:37.70052095944854,&quot;clusterRadius&quot;:30,&quot;maxClusterSize&quot;:30},&quot;mapPitchAndBearing&quot;:{&quot;bearing&quot;:0,&quot;pitch&quot;:0},&quot;datasetMetadata&quot;:false,&quot;panAndZoom&quot;:true,&quot;locateUser&quot;:false},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;Incident Records&quot;,&quot;one&quot;:&quot;Incident Record&quot;},&quot;visible&quot;:true,&quot;color&quot;:{&quot;primary&quot;:&quot;#eb6900&quot;},&quot;mapOptions&quot;:{&quot;mapFlyoutTitleColumnName&quot;:&quot;incident_description&quot;,&quot;mapType&quot;:&quot;pointMap&quot;,&quot;additionalFlyoutColumns&quot;:[&quot;incident_datetime&quot;,&quot;report_datetime&quot;,&quot;incident_category&quot;,&quot;incident_number&quot;,&quot;cad_number&quot;,&quot;resolution&quot;,&quot;intersection&quot;]},&quot;showLegend&quot;:true,&quot;type&quot;:&quot;map&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;data.sfgov.org&quot;,&quot;name&quot;:&quot;Police Department Incident Reports: 2018 to Present&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;incident_datetime&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;police_district&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;supervisor_district&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;analysis_neighborhood&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;incident_category&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null}],&quot;source&quot;:&quot;Police Department Incident Reports: 2018 to Present&quot;,&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;nwbb-fxkq&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;point&quot;,&quot;aggregationFunction&quot;:null}},&quot;primary&quot;:true,&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://data.sfgov.org/d/jq29-s5wp&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:3},&quot;description&quot;:&quot;This dataset includes police incident reports filed by officers and by individuals through self-service online reporting for non-emergency cases. Reports included are those for incidents that occurred starting January 1, 2018 onward and have been approved by a supervising officer. Please see https://bit.ly/2x7Ta2P for additional documentation.\n\nDisclaimer: The San Francisco Police Department does not guarantee the accuracy, completeness, timeliness or correct sequencing of the information as the data is subject to change as modifications and updates are completed.&quot;,&quot;id&quot;:&quot;19b506c6-4f38-467b-9e7a-18b7e1fef5f7&quot;,&quot;title&quot;:&quot;Map of Police Department Incident Reports: 2018 to Present&quot;,&quot;currentMapLayerIndex&quot;:0}" data-width="100%" href="https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/nwbb-fxkq?referrer=embed" rel="external" target="_blank">View the data</a>

## A special thanks

It takes many hands to lift up a dataset. None of this would have been possible without the great staff at the Police Department including those in the [Professional Standards and Principled Policing Bureau](https://sanfranciscopolice.org/professional-standards-and-principled-policing-bureau), the [Technology Division](http://sanfranciscopolice.org/administration#technology), and the [Crime Analysis Unit in the Planning Division](http://sanfranciscopolice.org/administration#planning). Additionally, our colleagues on the SFGIS Enterprise GIS program were instrumental in getting this over the finish line.

