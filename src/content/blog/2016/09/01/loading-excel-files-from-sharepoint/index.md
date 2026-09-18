---
title: "Loading Excel Files from SharePoint"
excerpt: "How do I load Excel files from SharePoint into Power BI Desktop?"
date: "2016-09-01"
authors: ["Mike Carlo"]
categories:
  - "Building Reports"
tags: ["SharePoint", "Excel", "Data Loading", "Tutorial"]
featuredImage: "./assets/featured.png"
---

## How do I load Excel files from SharePoint into Power BI Desktop?

**TL;DR.** Copy the SharePoint site URL without SitePages/Home.aspx. In Desktop use Get Data, SharePoint Folder, sign in with an organizational account, then expand the Excel file and pick the table. Close and Apply, then check column types.

### Why load Excel from SharePoint instead of a local folder?

SharePoint can connect to the Power BI service, so the dataset can refresh on a schedule when you already have a SharePoint O365 account. A local folder usually cannot refresh the same way.

### What URL do I paste into SharePoint Folder?

Use the site root only, such as https://partner.onmicrosoft.com/sites/[Your Site Name]/. Drop SitePages/Home.aspx. Power BI needs the site name, not the home page address.

### How do I authenticate?

After you enter the URL, sign in with the credentials your IT group issued. In this walkthrough that was Organization Account, then Sign in, and the right apply-to level in the dropdown.

### How do I get the Excel table after the folder lists?

Click Edit on the preview, find the file (SampleData in SampleDocs here), expand it, then open the Excel table (MyDataTable). Close and Apply, and set each column data type on the Home ribbon.

Related: [Load Multiple Excel (xls or xlsx) Files](https://powerbi.tips/2016/08/10/load-multiple-excel-xlsx-files/), [Folder of Files Loaded to Power BI Desktop](https://powerbi.tips/2016/04/07/folder-of-files-loaded-to-power-bi-desktop/), and [Power BI Refresh Overview](https://powerbi.tips/2019/09/03/power-bi-refresh-overview/).

This is a quick tutorial on how to load Excel files from a SharePoint page. SharePoint is a nice landing place for your data because it can be connected to the PowerBI.com service and thus can be used to schedule refreshes of data within your company (if you already have a SharePoint O365 account).

This tutorial will be slightly different than my previous tutorials as I don't have a publicly available SharePoint site that can be used to connect to. So you will have to slightly adapt what I'm presenting to you to fit your particular SharePoint needs.

## Prerequisites

First you must start off with a SharePoint site with a document library that includes an Excel file.

![SharePoint Location](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/Sharepoint-Location.png)

The document library is titled SampleDocs, and the file we want to bring into PowerBI is called SampleData.

## Getting the SharePoint URL

Clicking on the Home in the left navigation will take you to the home location of the SharePoint site. Copy down the HTML site address from your browser of this location. It should look similar to the following:

```
https://partner.onmicrosoft.com/sites/[Your Site Name]/SitePages/Home.aspx
```

## Connecting Power BI to SharePoint

Open up PowerBI Desktop and on the home ribbon click Get Data. Highlight the SharePoint Folder and click Connect to continue.

![SharePoint Folder Connection](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/SharePoint-Folder-Connection.png)

Upon clicking connect you will be presented with another screen asking for the SharePoint folder location. In the URL window you will add the SharePoint site that we identified above. However, it is important to note that you don't need the entire web address. Rather PowerBI only needs the specific site name, thus all that needs to be inserted into the URL field is:

```
https://partner.onmicrosoft.com/sites/[Your Site Name]/
```

The ending "SitePages/Home.aspx" can be removed.

![Enter Shortened Site URL](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/Enter-Shortened-Site-URL.png)

## Authentication

Clicking OK will present an authentication screen. Depending on your company or SharePoint authentication you will need to enter the credentials to log into the SharePoint Site. You may have to try a couple different connection methods until you are able to properly connect to the SharePoint site.

In my example I had to select Organization Account then click Sign in. I signed in with my credentials given to me via my I.T. group. Also, I had to use the drop down to select the proper level to apply the settings.

![User Sign In Page](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/User-Sign-In-Page.png)

## Loading the Data

After signing in click Connect to proceed. PowerBI Desktop will then load all the files from the SharePoint site in a preview window. Click Edit to modify the query.

![Query Editor View](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/Query-Editor-View.png)

We can now see our SampleData File and the folder path. Each document library will be a separate folder path, thus if you have multiple document libraries then you will have all the files in those different folder paths.

Next click the double down arrows to load the excel file.

![Load File](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/Load-File.png)

Power BI Desktop will then go to the SharePoint site and download the information inside your excel file. For my data I have all the information retained in a table within my excel document. The table name is called MyDataTable. Thus, clicking on the Table link in the MyDataTable row I will be able to open all the data within this table.

![Load Table of Data from Excel File](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/Load-Table-of-Data-from-Excel-File.png)

Finally the data is loaded from the excel table. Click Close & Apply on the Home ribbon to load the data into PowerBI.

> **Note:** It is always important to check your columns and verify that your data types are correct. Highlight each column and make sure you select the proper Data Type for each column. Data Type can be found on the Home ribbon.

![Final Load Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/09/Final-Load-Data.png)

Thanks for visiting. Make sure you stop by again for more great tutorials.
