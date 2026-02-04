---
title: "PowerBI.tips"
excerpt: "_Much thanks must go to both [Ferry Bouwman](https://www.linkedin.com/in/ferrybouwman/)_ _and [Rui Romano](https://www.linkedin.com/in/ruiromano/) for..."
date: "2021-10-06"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

_Much thanks must go to both [Ferry Bouwman](https://www.linkedin.com/in/ferrybouwman/)_ _and [Rui Romano](https://www.linkedin.com/in/ruiromano/) for inspiration and building off the work they have done already for the use cases for the Scanner API. Ferry created the initial Microsoft Flow to automate the request and pull of data, and design ideas were taken by Rui Romano’s existing Report. Please give them a shoutout because this would not be possible without them!_

Recently the Power BI team announced a major advancement in the ability for Power BI admins to extract tenant-level metadata with the ability to collect information such as tables, columns, measures, and DAX expressions in datasets in the Power BI Service. This feature is a huge step and something that any Power BI Champion should strongly focus on the use cases and integrating this solution into their catalog.

Let’s start with the what and the why of using the Scanner API as a Power BI Admin.

## What is the Power BI Scanner API?

The Power BI Scanner API allows organizations to request and collect the entire metadata of a tenant’s Power BI schema and catalog. Using the Power BI REST API, users can push a scan and more importantly extract nearly all of a dataset’s information and schema. The Scanner API returns the entire tenant metadata such as:

*   Datasets & Workspaces
*   Data Sources
*   Dataflows
*   Dataset
    *   Tables
    *   Columns
    *   Measures, including the actual DAX expressions
*   Table M Expressions

## Why Use the Power BI Scanner API

The ability as a Power BI Admin or champion to consume and understand the datasets and information of their tenant is vital both from an Governance and Adoption perspective. Firstly, the Scanner API enables admins to discover and easily understand the workspaces, measures used, and what datasets are active in their tenant. Rather than relying on various methods of manual input of datasets into a system, the automated fashion to pull in this information positions admins to better enforce and manage the organization of datasets.

## Governance

Along with dataset information, the newly updated Scanner API pulls in dataset metadata which creates more potential of how to better govern and unify the business logic used in datasets. A primary use case is to ensure that datasets and the tables being used are using the proper logic (columns, data sources, merges) by easily viewing the M code behind any table dataset. In the same fashion, champions can now ensure that datasets are 1) using Explicit Measures in their reports, and 2) those measures which are universal to the company are using the correct formulas (think Net New Members in multiple reports, ensuring that the correct relationship for date and Member ID is being used).

## Adoption

There are many workarounds in the community to best provide discoverability of data for users. Unfortunately, many of these require manual input and do not synchronize with one’s active data. Using the Scanner API, admins can create automated solutions to easily provide datasets that are active for users to discover, and further can be integrated with other platforms to include custom fields.

One idea is creating a Data Lexicon for an organization, which includes a company’s report catalog and terminology. A Data Lexicon should include helpful content for consumers, such as a report’s purpose, intended audience, and refresh schedule. Using the Scanner API, anytime a dataset is added to the tenant, report authors can easily integrate these custom fields with active datasets.

# Understanding the Goal

This article is not going to cover the intricate details of the API requests and parameters. Rather, the TL;DR version of the required calls / steps of the API are:

1.  Call the Scanner API to trigger a Scan
    1.  This call must include a body of what Workspaces to be scanned
2.  If more than 100 workspaces, than loop through the request (limit per call is 100 workspaces)
3.  Wait until a Scan is completed (depending on how many scans)
4.  Get the Scan Result and collect the array as JSON

The goal here is then to try to accomplish the following:

*   Create an easy-to-use process to automate the API workflow
*   Store the scan results into a JSON file into SharePoint
*   Transform the metadata into a structured model (Tables, relationships, etc)
*   Use the structured tables in multiple products (Data Flows, Power BI, Power Apps)

# Building the Solution

The majority of credit needs to go to [Ferry Bouwman](https://www.linkedin.com/in/ferrybouwman/) who initially created a viable solution that can easily be integrated into a report. He created a [GitHub repo](https://github.com/ferrybouwman/Power-BI-Read-Only-REST-API) that included a Power Automate flow that truly covers the entire process of automating the API call.

The following is building off Ferry’s solution, including the new metadata schema that is now available. There is more that I want to accomplish in this solution, but to get the Scanner API and a template to connect to the data, you can do so using the steps below.

### Pre-Requisites Before Use

Before starting, you must have already completed the following in order to use the Scanner API at all. Please see the documentation for each to set up:

*   [Enable Service Principal Authentication for Read-Only Admin API’s](https://docs.microsoft.com/en-us/power-bi/admin/read-only-apis-service-principal-authentication)
*   [Create an Azure AD app](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)
    *   Ensure there are no Power BI admin-consent required permissions on the application
    *   Create a client secret / key and copy the value for later use
*   Create a new Security Group in AD, add the app to the group
*   [Enable Allow Service Principals to use read-only Power BI admin API’s in the Power BI Tenant](https://docs.microsoft.com/en-us/power-bi/admin/service-admin-enhanced-metadata-scanning#enabling-enhanced-metadata-scanning)

### The Solution Bundle

The solution includes the following to implement:

*   A Power Automate Flow that handles the entire API request and call
*   A Scheduled Refresh Flow that refreshing daily and triggers the Flow above
*   A Power BI Template report to connect to the metadata results

[Download the Solution on GitHub.](https://github.com/pugliathomas/powerbiscannermetadata)

# Installing & Using

#### Import the API Scanner Flow

The first step is to import the Flow pbitips\_ScannerAPI into your tenant. Once you do this, there are a few variables and actions to update before running.

*   **tenant**: The tenant of your Active Directory
*   **clientId**: The Client ID of your registered App
*   **clientSecret**: The Client Secret value of your registered App
*   **SharePoint Library**: What SharePoint library you want to save the files
    *   NOTE: Remember this location as it will be used in Power Query
*   **Folder Location**: The folder location to save all returned scans
    *   **NOTE: Remember this location as it will be used in Power Query**
*   **Folder Location Trigger**: A different folder with a different name, to trigger the refresh run.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/variables-1024x482.png)

#### Set up the Automation Flows

The next part is we want to set up the automation of the Flow, so that it triggers on a daily basis, or even a manual basis.

Import the Flow PBI\_Scanner\_Refresh into Power Automate. Once imported, you will need to grab parts of the initial Flow’s HTTP trigger and add them to the variables in the PBI\_Scanner\_Refresh Flow:

*   **Initialize string URI-first-part**: The first part of the HTTP Request Received, everything from the start up to _modifiedsince/._
*   **Initialize string URI-last-part**: The parameters. Simply copy from the _?_ part of the URL to the end
*   **Initialize string modifiedSince**: write _all_

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/09/image-1.png)

_Copy the HTTP Get URL from the initial Flow to grab the variables needed_

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/09/image-3.png)

_Paste the parts of the HTTP GET URL into the variables in the daily refresh Flow_

Additionally, The Power BI Template also includes a visual to trigger the Flow within the Report. You can simply copy and paste the variables and the _HTTP Call other flow with all Power BI API logic_ actions using the _When a Power BI Button was clicked_ as the trigger.

#### Run the Flow: Ensure It is successful & saves the files

Run the flow manually. Note that the first time you ever call the Scanner API, it will return a subset of the metadata. The more that you run it (daily) the more complete metadata will be returned.

Once you can confirm that 3 files have been saved to the folder specified above (a MetaData\_, a WorkspaceArrary\_, and RequestStatus\_ json file), you know the Flow works.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/09/image.png)

_Ensuring that the files were saved to the correct SharePoint Library and Folder_

Once you have verified the flow runs and saves to the correct file, you are ready to start using the Power BI Report.

#### Connect to the Data – Power BI Template

Using the Scanner Tenant Metadata Power BI Template file, open it and it will prompt you to input two parameters.

*   **SharePoint Folder**: The SharePoint Document Library url specified in the variable from the Flow
*   **FolderFiter**: The deepest subfolder that the files live (for example, if the files live in _PBI\_Admin/MetaData/MetaFiles/,_ then enter in “**MetaFiles**“)

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/pbiparame-1.png)

_Entering in the Parameters in the Power BI Template_

Once you enter the parameters, click on load, and wait for the magic to happen!

# Using the Scanner API Report

The Report contains tons of information across the entire organization’s content in Power BI. From Datasets all the way to the DAX expressions per table and report. The template and report is meant to be a starting point for authors to further build out additional functionality to meet their needs. Much thanks to [Rui Romano’s Scanner Template](https://github.com/RuiRomano/pbimonitor) as well:

## Summary Page

The Template starts with the Summary Page, providing a high level overview of Workspaces and Datasets active in the tenant. Included in the high level overview is the created date of a particular dataset, the number of tables, data sources, and users who have access to it.

Selecting a dataset will highlight a drill through button to navigate to a detailed dataset page.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-7-1024x665.png)

_Summary Page in the Tenant Data Catalog_

## Dataset Drill through Details

The drill through page for a dataset provides vital information such as the tables, fields, and even the query and DAX expressions within a dataset. Along with this, an information panel of the ID, storage mode, and even users is available here.

Selecting a table will display the M query in it’s entirety. Expanding the Measures & Calculated Columns displays the DAX expressions beneath it. Along with this, the list of data sources by type is available.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-8-1024x651.png)

_Dataset Drill Through Page, showing expressions and Users who have access_

## Datasets Page

The Datasets page is a overview showing the number of entities (columns, calculated columns, and measures) within a dataset, including what Data sources are being used. Tracking datasets by created time is a helpful feature allowing admins to monitor the creation of new datasets overtime.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-9-1024x572.png)

_Datasets Summary Page_

## Tables Summary Page

Tables allows admins to monitor what tables are being used throughout the tenant’s datasets. This a powerful feature, allowing admins to monitor tables that may be used across datasets.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-10-1024x650.png)

_Tables Page allows admins to see the columns, along with what datasets the table may be included in_

## Data Sources Page

Looking at the metadata in another way, admins can monitor the type of datasources used throughout the tenant, including the information such as the data source type (SharePoint, SQL, etc) and even the source. Selecting a datasource will display what datasets they are included in.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-11-1024x579.png)

_Datasources Page shows by type what datasets, the source of the source ,and even Dataflows_

## Users Page

The Users page is using the new ability to append to the Scanner API metadata, _getArtifactUsers=true,_ to pull what users have access to various datasets. Again, the ability to select and display is a powerful feature for Admins.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-13-1024x574.png)

__Users Page showing access__

## Details Page

Understanding needs to get the metadata displayed as a list, the Details page provides all of the underlying information about each artifact in the tenant, such as the ID’s used in Power BI, types, and who last configured an entity.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-14-1024x587.png)

_Details Page showing all of the underlying information_

# Conclusion

The ability for a Power BI champion to have full visibility into the organization’s Power BI content has and will be a vital piece of adoption and governance of Power BI. The amount of information available and to act on will allow admins to readily understand the activity happening at all times.

[You can find the full solution here:](https://github.com/pugliathomas/powerbiscannermetadata)

This template is just a starting point. The community here should be able to take this and expand on this, and please [provide your suggestions to the GitHub Repo here](https://github.com/pugliathomas/powerbiscannermetadata/issues):

Again, many thanks to Ferry Bouwman and Rui Romano for building the foundation.
