---
title: "Map it, Map it Real Good"
date: "2016-04-14"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "Power BI"
  - "Maps"
  - "Visualization"
  - "Tutorial"
excerpt: "Learn how to create impressive map visualizations in Power BI Desktop using latitude and longitude data with this step-by-step mapping tutorial."
featuredImage: "./assets/featured.png"
---

This tutorial is a real simple mapping exercise. I was talking with a colleague today about Power BI and I was challenged to map something using latitude and longitude. I had played with mapping before but not using latitude or longitude.

I'd have to say if you want to impress someone with your PowerBI skills adding a map is a good way to do so. Typically this is functionality that you can't add into excel, well at least not without some serious effort.

## Resources for this Project

- Power BI Desktop (I'm using the March 2016 version, 2.33.4337.281) download the latest version from Microsoft [Here](https://powerbi.microsoft.com/en-us/desktop/)
- Excel file with a table in it with our location information that can be downloaded here: [Locations Data Set](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Locations.xlsx)

## Loading the Data

After downloading the Locations Data Set, Open up PowerBI and load the Excel file into Power BI. If you need to learn how to load Excel files you can follow the [loading excel tutorial](/2016/03/29/import-an-excel-file-into-powerbi/).

Click the Get Data on the Home ribbon. Select the first option Excel and click Connect at the bottom of the Get Data window.

Navigate to the downloaded file called Locations.xlsx and open the file by clicking Open in the bottom right hand corner.

Next, the navigator window will open. Select the table (denoted with the grid with a blue top header) called Locations. Then Click Load to load the data into the data model.

![Navigator Window Selection](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Navigator-Window.png)

> **Note:** There are two different icons in the Navigator window. One is called Locations which is a Table within the Excel document. While the other is called Sheet1, which is simply the first sheet in the excel workbook. For future references it is much easier to make tables in excel and use them to load data into PowerBI than using just a worksheet. So whenever possible try to form your data in Excel into Tables. When loading a table the headers of the table automatically load into the column names in the PowerBI data models.

We now have loaded the data into a new Table in PowerBI called Locations.

## Creating the Map

To make the map check the boxes for Latitude and Longitude. Power BI intelligently understands that latitude and Longitude are mapping functions and we are now presented with a map with tiny blue dots.

![Map from our Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Map-from-our-Data.png)

## Enhancing the Map

Lets add some more data to enhance the map. We can change the size of the circles at each location by dragging the column called Attenders over to the Values field for this visual.

![Change Bubble Size](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Change-Bubble-Size.png)

We have now changed the size of the circles relative to each other to show the number of people that we saw at each location. To add color to the map drag the column called Event to the Legend option of the visual. This yields a map that now has each circle with a different color according to the event name.

![Colored Bubbles on a Map](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Colored-Circles.png)

## Adding a Bar Chart

To enhance our visual further we will add a bar chart with the total count of attenders per event. To do this click anywhere on the visual page (this will de-select the map visual on the page). Now click the Event column and then the Attenders column. This will present you with a table list of events and the corresponding attendees. Leaving the table visual highlighted click the Stacked Bar Chart which is in the upper left hand corner of the Visualizations window.

![Adding a Bar Chart](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Adding-a-Bar-Chart.png)

I circled the triple dots on the bar chart. Click the triple dots and a menu will appear. First click Sort By, then click Attenders. This will sort the attenders in descending order from the largest amount at Kohl's Corp. down to Harley Davidson. Drag the column labeled Event to the visualization option called Legend. This colors the bar chart.

![Colored Bar Chart](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Colored-Bar-Chart.png)

> **Note:** The colors in the bar chart match the colors in the map we made earlier. This builds uniformity in your reports and when your filtering items colors across visuals make sense.

## Interactive Filtering

Take some time to click on each of the bars on the bar chart. Notice how the map re-draws with only the data for that selected item. To select multiple bars on the bar chart hold the CTRL button and click on the multiple bars.

Nice job. We have finished the mapping tutorial. Share if you liked it below.
