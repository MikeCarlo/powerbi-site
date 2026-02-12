---
title: "Load Multiple Excel (xls or xlsx) Files"
excerpt: "Learn how to load multiple Excel files from a folder into Power BI using a custom function. Combine workbooks with multiple sheets into a single query."
date: "2016-08-10"
authors: ["Mike Carlo"]
categories:
  - "Building Reports"
tags: ["Power Query", "Excel", "Data Loading", "Tutorial"]
featuredImage: "./assets/featured.png"
---

Previously we've done a tutorial on loading multiple text files within one query. This is nice, however we will also need to import multiple Excel files. First, to understand the procedure of querying multiple excel files you have to understand the basics between the CSV (comma separated values) file and an excel (.xls or .xlsx) file.

## Understanding CSV vs Excel Files

In a CSV file you have only one data set. The beginning of the file starts with values and separates each field with a "," a carriage return starts a new row of data. This is an easy and efficient way to store millions of rows of data.

By contrast the excel file is way more complicated. Excel files can have multiple sheets of tables of data. Think of this as a stack of CSV type files. For example if you have an excel workbook with three sheets of data, Sheet 1, Sheet 2, Sheet 3. You can think of those three sheets as a grid of data, similar to the CSV file.

The multiple sheet aspects of an excel file makes the data ingestion into PowerBI a little bit more complicated. To add to the complication, when you're loading data from either multiple sheets, or selecting a specific sheet out of many sheets of data. For illustration purposes imagine working with two excel files with three sheets each: 2 x 3 = 6, a total of 6 sheets of data, or what I will call "pages" of data. This is why it is more complex to load excel files than CSV files.

> **Note:** If you want to learn how to load multiple CSV files visit [this tutorial](/2016/04/07/folder-of-files-loaded-to-power-bi-desktop/).

## Data Structure Overview

Not only do you have to figure out what data you want to ingest on the page you must also tell PowerBI which sheets do you want to look at, and from which excel file. Think of loading the following data sample:

**Workbook 1 – Year 2000 Olympic Medals**
- Sheet 1: Olympic Medals Table (Rank, Country, Gold, Silver, Bronze, Total)
- Sheet 2
- Sheet 3

**WorkBook 2 – Year 2004 Olympic Medals**
- Sheet 1: Olympic Medals Table (Rank, Country, Gold, Silver, Bronze, Total)
- Sheet 2
- Sheet 3

The data structure for both workbook 1 and 2 are similar but the names of the files are different and there can be multiple pages.

To resolve this we will have to write M language code that will load each file using specific functions.

## Getting Started

Here is the data source information for Olympic medals won by each country from 2000 to 2012, [download here](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Medal-Counts.zip). Inside the Medal Count zip file are four xlsx files, extract them to your desktop. Move the files into a folder on your desktop labeled Medals.

![Medals Folder](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Medals-Folder.png)

## Loading the Folder

Now, open up PowerBI. We will begin shaping our data to load all the excel files. On the Home ribbon click on the Get Data button. Select Folder on the right side and click Connect.

![Get Folder Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Get-Folder-Data.png)

Next select the folder path that you want to acquire the files from. Click OK to continue.

![Load Folder Screen](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Load-Folder-Screen.png)

Next we are presented with the loaded files within our selected folder. Click Edit at the bottom of the screen to proceed. The Query Editor window will now open. Select the first two columns labeled Content, and Name. With those two columns selected right click on the header and select Remove Other Columns. This will remove all the useless data associated with the files.

![Remove Other Columns](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Remove-Other-Columns.png)

## Adding Custom Column for Excel Files

Click the Add Column ribbon and press the Add Custom Column on the left side of the ribbon.

![Add Custom Column](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Add-Custom-Column.png)

Name the new column ExcelFileLoad and enter the following equation:

```m
= Excel.Workbook([Content])
```

![Excel.Workbook Equation](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Excel.Workbook-Equation.png)

> **Note:** Once you type "Excel.Workbook(" you can click on the column labeled Content on the right side of the screen to have the name automatically added. This is useful when you have many columns to choose from or if the naming of those columns becomes complex.

Click OK to proceed. Notice we now have a new column called ExcelFileLoad. Next click the Expand button (the one with the arrows) located at the right of our newly added column. Click OK to proceed.

![Expand Column Button](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Expand-Column-Button.png)

## Viewing and Expanding the Data

Now we have a new column labeled ExcelFileLoad.Data, which is the data contained in our excel files. Now click in the Grey Area next to the word labeled Table. This will open up the file and reveal the information present in the file. Notice that we can see the headers and the data in our file. Row 1 contains the headers of each column. Rows after row 1 contains the medal data.

![View Data of File](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/View-Data-of-File.png)

Next select the columns labeled Name and ExcelFileLoad.Data and right click on the column header, then select Remove Other Columns.

![Remove Other Columns Again](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Remove-Other-Columns-Again.png)

On the Add Column ribbon click Add Custom Column again. Name the column PromoteHeaders and enter the following formula. Click OK to proceed.

```m
= Table.PromoteHeaders([ExcelFileLoad.Data])
```

![Promote Headers Step](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Promote-Headers-Step.png)

Clicking again on the grey area in our newly created column reveals our tables with promoted headers.

![View of Data with Promoted Headers](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/View-of-Data-with-Promoted-Headers.png)

## Finalizing the Query

Next click the Expand Button, un-check the Use original column name as prefix and click the OK button to proceed.

![Expand Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Expand-Data.png)

Remove the following columns: ExcelFileLoad.Data, Rank, and Total, by selecting the columns and right clicking on the header and selecting Remove Columns. Now we want to parse out the year name from the Name column. To do this click on Name Column. Then click the Transform ribbon and click the Extract button, then select First Characters from the drop down menu.

![Extract First Characters](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Extract-First-Characters.png)

In the Extract First Characters menu enter the number 4 and click OK to proceed.

![Extract First 4 Characters](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Extract-First-4-Characters.png)

Change the following columns to whole numbers: Name, Gold, Silver, Bronze. Do this on the Transform ribbon in the Data Type drop down.

![Change Data Types](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Change-Data-Types.png)

We are now ready to load all the data. Rename the Query to Medals, click the Home ribbon and select Close & Apply.

![Name Query](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Name-Query.png)

And there you have it. We have successfully loaded four excel files into one query.

## Bonus: Adding a Total Measure

For added flair add the following measure:

```dax
Total Medal Count = sum(Medals[Gold]) + sum(Medals[Silver]) + sum(Medals[Bronze])
```

Now you can add the following Visualizations:

![Bar Chart Visual](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Bar-Chart-Visual.png)

![Stacked Bar Chart](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Stacked-Bar-Chart.png)

![Map Visual](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Map-Visual.png)
