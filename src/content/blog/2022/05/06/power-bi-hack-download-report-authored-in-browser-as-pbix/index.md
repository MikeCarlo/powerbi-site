---
title: 'Power BI Hack: Download Report Authored in Browser as PBIX'
excerpt: '## The Problem  Most of you have probably run into a situation where someone
  in your organization has authored a report in the Power BI web service, a...'
date: '2022-05-06'
authors:
- Mike Carlo
categories:
  - "Sharing And Administration"
tags:
- power-bi
featuredImage: ./assets/featured.png
---

## The Problem

Most of you have probably run into a situation where someone in your organization has authored a report in the Power BI web service, and now they want to make changes that can only be done with Power BI Desktop. So, you try to download the PBIX file from the Power BI web service, only to discover that you can’t, because if it wasn’t _created_ as a PBIX, it can’t be _downloaded_ as a PBIX. **_Infuriating!_**

![:rage:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f621@2x.png)

## The Solution (sorta…)

There’s actually a way to get around this problem. If you publish a blank PBIX file to the Power BI web service, you can copy the _**contents**_ of the report that was originally authored in the browser **_into_** that blank report. And since **_that_** report was originally a PBIX file, you can download **_that_** instead!

Unfortunately, the only way to do this right now is to use the [Power BI REST API](https://docs.microsoft.com/en-us/rest/api/power-bi/) and hit the [Update Report Content In Group](https://docs.microsoft.com/en-us/rest/api/power-bi/reports/update-report-content-in-group) endpoint, and this process is just about as straightforward as Lombard Avenue in San Francisco. _(Actually, probably even less so.)_

![File:Lombard Street SFA.jpg - Wikimedia Commons](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F83%2FLombard_Street_SFA.jpg%2F800px-Lombard_Street_SFA.jpg&f=1&nofb=1)

Lombard Avenue in San Francisco: Famously bendy, but still more straightforward than manually hitting Power BI APIs.

## PowerShell to the Rescue!

![:powershell:](https://emoji.slack-edge.com/T1LTZ0BQV/powershell/842dccb4bfacf8f2.png)

Hooray for PowerShell!

So, I wrote a **PowerShell** function to simplify and streamline this process, and its only prerequisite is the [MicrosoftPowerBIMgmt.Profile module for PowerShell](https://www.powershellgallery.com/packages/MicrosoftPowerBIMgmt.Profile). Just run the script file (linked below) in your PowerShell terminal, and then call the _**Copy-**_**_PowerBIReportContentToBlankPBIXFile_** function directly from that same window. The expected parameters are:

*   _**sourceReportId**: The ID of the report to copy from_
*   _**sourceWorkspaceId**: The ID of the workspace to copy from_
*   _**targetReportId**: The ID of the report to copy to_
*   _**targetWorkspaceId**: The ID of the workspace to copy to (this one is optional – if you leave it blank, the function will assume both source and target are in the same workspace)_

[**Download the Copy-PowerBIReportContentToBlankPBIXFile.ps1 PowerShell script file here.**](https://github.com/JamesDBartlett3/PowerBits/blob/main/PowerShell/Copy-PowerBIReportContentToBlankPBIXFile.ps1)

As always, feedback and suggestions are 100% welcome and encouraged. 

![:sunglasses:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f60e@2x.png)

Cheers!

~ James

  
_**Acknowledgements:**  
This PS function was inspired by a blog article written by one of the top minds in the Power BI space, Mathias Thierbach. [Check out his article here](https://bit.ly/37ofVou). And if you’re not already using his **pbi-tools** for Power BI version control, you should [check that out too](https://pbi.tools)._
