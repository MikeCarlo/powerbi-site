---
title: "Power BI Connections: Direct Query"
excerpt: "Now that we've covered the basics of connection types, let's dive into Direct Query and when to use it for your Power BI reports."
date: "2017-12-29"
authors:
  - "Seth Bauer"
categories:
  - "Building Reports"
tags:
  - "power-bi"
featuredImage: "./assets/featured.png"
---

Now that we've solidly gotten through the basics in terms of what connection types are in the opening blog, found [here](https://powerbi.tips/2017/10/power-bi-connection-types/), and detailed out what is included in the default connection type of Import found [here](https://powerbi.tips/2017/11/power-bi-connections-import/), let's get on with some of the more interesting connections.

![Connection Type Outline](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/11/Connection-Type-Outline.png)

_Connection Type Outline_

Direct Query is the first connection type that we will discuss that extends, but at the same time limits functionality in the tool itself. In terms of data access this connection type allows us to access our data in the source system. The supported data sources for direct query can be found [here](https://docs.microsoft.com/en-us/power-bi/desktop-directquery-data-sources). This is distinctly different than what we observed in the [import method](https://powerbi.tips/2017/11/power-bi-connections-import/).  When using Import, the data is a snapshot and refreshed on a periodic basis, but with Direct Query it is live. "Live" means that with Direct Query the data stays in the source system and Power BI sends queries to the source system to return only the data it needs in order to display the visualizations properly. There are some pros and cons in using this connection so it is important to understand when you might use it, and when you should probably avoid this connection.

#### **Cons:**

*   When Direct Query is used you can no longer do many of the data mashup actions in the "Edit Queries" section of Power BI. It is assumed that you will have already done this in the backend. You can do simple actions such as removing columns, but don't expect to be able to manipulate the data much. The Query Editor will allow you to make transformations, but when you try to load to the model you will most likely get an error that looks something like this

![Direct Query Error](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/12/Direct-Query-Error-1024x440.png)

_Direct Query Error_

*   The data tab is also disabled in the model layer and thus you need to make sure that all the formatting and data transformations are completed in the source.

![Data Tab no longer present](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/12/Data-Tab-no-longer-present-227x300.png)

_Data Tab No Longer Present_

*   You can do some minor adjustments to format, but this could be a heavy restriction if you don't have access to the data source.
*   There are performance impacts to the report that need to be taken into consideration. How large is the audience that will be interacting with the report? How busy is the source system, are there other processes that could be impacted?
*   Troubleshooting skills in source system language
*   Multiple applications required to adjust data ingestion and formatting

#### **Pros:**

*   The Direct Query connection does not store any data. It constantly sends queries to the source to display the visuals with the appropriate filter contexts selected.
*   In the November 2017 release there is a new capability in Power BI allows you to reduce the traffic and enhance this connection method exponentially. The feature is called Query reduction, and allows you to enable an "apply" button on a slicer or filter. The benefit with this option is that you can set all your selections of a filter prior to Power BI executing the query. Before this feature was available, every selection you made would fire off a query to the source database. To enable this feature, go to File -> Options and Settings -> Options -> Query Reduction you will find these options to help with Direct Query Performance.

![Query Reduction Options](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/12/Query-Reduction-Options.png)

_Query Reduction Options_

> _Note: This enhancement greatly increases the performance of a Power BI report against the data source, but be aware that there could be poor query performance, or aspects of the solution that would require troubleshooting in the data source depending on what queries are being passed. This would require understanding of how to performance tune the source._

*   Deployment of the Direct Query connection requires the use of the gateway previously called the Enterprise Gateway. Note that the _Enterprise_ Gateway is different than the personal Gateway.
*   No data is ingested into the model using Direct Query thus, there is no need to schedule a refresh. Once the dataset is connected to the Gateway, the data source feeds information to the report as the user interacts with the report.
*   It will always show the latest information when you are interacting with the report.

Direct Query is a powerful connection type in that it produces the most up to date data. However, as we have seen, it does come with some considerations that need to be taken into account. The Pros and Cons of the connection mostly revolve around whether or not the end user can understand and deal with potential performance issues, updating data retrieval processes, and understand the downstream implications of a wider audience. Typically, Direct Query is used in extremely large datasets, or in reports that require the most up to date information. It will most likely always perform slower than an import connection and requires an understanding of tuning and troubleshooting of the data source to alleviate any performance issues.
