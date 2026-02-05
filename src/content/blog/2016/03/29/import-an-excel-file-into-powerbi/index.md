---
title: "Import an Excel file into PowerBI"
date: "2016-03-29"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "Power BI"
  - "Excel"
  - "Get Data"
  - "Tutorial"
excerpt: "Learn how to load data from Excel into Power BI Desktop with this simple step-by-step tutorial covering the Get Data function and basic visualizations."
---

We are going to kick this blog off with a simple example of how to load data from excel into Power BI Desktop.

> **Note:** I'm a firm believer of always understanding your data. If you are receiving data files or extracts from an automated system or from an individual, trust me it will make a difference. So, make sure you understand the source of the data and how the structure of your data may change over time. For example, you may have a column that has both text values and number values; or the data may add additional columns in the future. Thus, the data load into Power BI Desktop (PBID) will need to be flexible.

## Sample Data in Excel

Lets start off with some simple data in excel:

![Sample of Data in Excel](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/sample1.png)

We have three columns of data, two have numbers in it and one has text values.

## Loading the Data

For now we will close out of excel and jump over to Power BI Desktop. Once the program loads we will click the Home ribbon then select the Get Data button.

![Button for Get Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/getdata.png)

After pressing the button a new menu will pop up showing us all the sources where data can be ingested from. The very first item in the list is Excel. Click the Excel then click the Connect button in the lower right hand corner.

![Select Excel as Data Source](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/Excel.png)

After clicking Connect a new window will pop up asking for the location of the Excel file. Navigate to our sample data called Book1.xlsx. You can download the actual file I used here: [Book1](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/Book1.xlsx)

I saved my Book1.xlsx file on the desktop of my computer. Select Book1 and then Click Open.

![Open Excel File Dialog Box](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/open.png)

## Using the Navigator

Next we are presented with the Navigator screen that reveals what is inside the workbook. There are two sheets. For now we are only interested in the data on Sheet1. Select Sheet1 and then click Load. This will load our data from Sheet1 into the Power BI Desktop data model.

![Navigator Selection Screen](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/Sheet1.png)

Now our data has been added to the Power BI Desktop data model. The data and the various columns we loaded can be found in the tool bar at the far right of PBI called Fields.

![Location of Loaded Excel Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/Fields.png)

> **Tech Tip:** Power BI Desktop (PBI) opening the file and loading the relevant data into the memory of the computer. This has an approximate 4 to 1 compression ratio. In practical terms this means that a 100MB file will only consume 25MB of file size in PBI when it is saved. This is extremely useful as the data model can be quite large when loading multiple data files but the PBI file will compress down to a manageable size.

## Creating Your First Visual

![Make a Data from Column Sales and Category](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/table.png)

Finally, the Sheet1 data table can be expanded into its respective columns by clicking the triangle next to the table icon. Finally you can drag and drop the column names into the visualization page to begin making visualizations. For this demo I used the Category Column and the Sales column to make a table.

By selecting a different visualization in the visualizations bar you can change your data table into a Bar Chart.

![Data Transformed into a Bar Chart](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/03/barchart.png)

Well that is it for the first tutorial. Share your thoughts and comments below. Let me know if you have any suggestions on what you would like to see next.
