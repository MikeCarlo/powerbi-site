---
title: "PowerBI.tips"
excerpt: "### Get Data – Power BI Connection Types: An Introduction  [![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/..."
date: "2017-10-16"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

### Get Data – Power BI Connection Types: An Introduction

[![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/02/Seth-Grey.jpg)](https://www.linkedin.com/in/seth-bauer/)

Hi, I’m Seth, I am very excited to be a contributing on PowerBI.tips.  Mike has done an incredible job curating fantastic content for the PowerBI Community.  In this first blog I will introduce you to the different types of connections that you can make using the Power BI Desktop. We will identify the various types of connections.  In future posts we will dive into specific examples of usage and tips in tricks.

When I say “Types”, I don’t mean connecting to databases, Excel, SharePoint, etc. Those are just different data sources. I’m referring how Power BI ingests or interacts with data sources that you want to connect to. Believe it or not, Power BI doesn’t always have to pull all your data into the Power BI Desktop file. Depending on what sources of data you are connecting to, you could not even realize that there are more options, or be uncertain of what they do. In fact, depending on what type of connection you choose you are also altering how the Power BI Desktop functionality works! Now that I have your attention, let’s jump into the good stuff.

First things first. The only time you will be faced with an option to choose a type of connection, are when you connect to a data source that support multiple connection types. If all you connect to is Excel, you would never see an option in the dialogues because it only supports one type of connection.

There are really 3 main types of connections. The first is the most widely used, and is the default when connecting to most data sources. It is **Import**. This connection will ingest or pull the data from the data source and become part of the PBI Desktop file.  An example of where you would select import Is in the SQL Server dialog box.

![SQL Server Import](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/10/SQL-Server-Import.png)

SQL Server Import

You can import data from a SQL Server by clicking **Get Data** on the **Home** ribbon.

![Get Date SQL Server](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/10/Get-Date-SQL-Server.png)

Get Date SQL Server

The import connection type allows you to use the full capabilities of the Power BI Desktop and you can manipulate it however you see fit. A way to validate this is by looking at the left-hand navigation and you will see three selections.  The top selection which resembles a bar chart is the Report Page.  This is where you would place all your visuals and develop your report pages.  The second item from the top, which looks like a table is just that, the Data view in a table form.  This lets you see all the data contained with a loaded data table.  Finally, at the very bottom, the relationships selection.  This is where you will see multiple tables and the connections between the tables.  The relationships section feels like working SQL or in Microsoft Access.

![Import Options](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/10/Import-Options.png)

Import Options

The 2nd connection type is **Direct Query**.  Notice in direct query mode the third item, relationships has been removed.  The direct query connection type is only available when you connect to certain data sources. The list of the data sources that are accessed using direct query can be found [here](https://powerbi.microsoft.com/en-us/documentation/powerbi-desktop-directquery-data-sources/).  This connection is unique in that the data does not get loaded into the PBI Desktop.  What happens, is that Power BI can communicate in the language of the data source and request information as you interact with your Power BI Visuals. The useful thing about this connection is that the data never leaves the data sources, it is only queried.  Direct Query does limit what you can do from a data manipulation perspective.  Power BI assumes you are already doing all the necessary data manipulations in your source. As a result, you don’t even have the option to mashup data and that selection is removed in the left-hand nav.

![Direct Query](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/10/Direct-Query.png)

Direct Query Options

The 3rd type is **Live Connection**. There are only 3 data sources that support the live connection method at this time.  All of them are a type of (SSAS) SQL Server Analysis Services. Those types are Multidimensional, Azure Tabular and Tabular on premises. The live connection type is the most unique in that it recognizes the full model or cube that you’ve created.  Power BI Desktop turns off all data prep features.  Thus, the user is given a bare minimum in formatting and report side calculations.  All the heavy lifting is done on the server that supports the model and Power BI is only used as a reporting tool. This connection is used mainly by IT and enterprise implementations. If one looks at the left-hand navigation, you quickly realize that it is the most restrictive in terms of what can be done in the Desktop itself.

There is a fourth Live Connection that defaults to the connection type, and this occurs when you use the Power BI Service as a data source. This connection is using a SSAS connection, only the end users don’t need to set anything up other than having dataset to connect to in the Service.

![Live Connection Options](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/10/Live-Connection-Options.png)

Live Connection Options

Finally, there are two types of connections that dive a bit deeper than what comes with the Desktop out of the box. Those are [Custom Data Connectors](https://powerbi.microsoft.com/en-us/blog/data-connectors-developer-preview/) and API/Streaming. For the time being, we’ll leave these as just high-level points for now, and dive deeper into them in the specific articles in the future.

I hope you’ve found this initial primer useful. As this series continues we’ll dive into some of the reasons for using each of these types of connections, why you would want to, and the positives and negatives in choosing which one, provided you have a choice.
