---
title: "Measures – Dynamic Percent Change – Using DAX"
excerpt: "Build a DAX measure that dynamically calculates percent change as you select different items in Power BI visuals. Learn to use DIVIDE and FILTER functions."
date: "2016-06-10"
authors: ["Mike Carlo"]
categories: []
tags: ["DAX", "Measures", "Tutorial", "Percent Change"]
featuredImage: "./assets/featured.png"
---

This tutorial will produce a measure that will dynamically calculate a percent change every time an item is selected in a visual. The previous tutorial can be found [here](/2016/05/02/measures-calculating-change/). In the previous tutorial we calculated the percent change between two time periods, 2014 and 2013. In practice it is not always desirable to force your measure to only look at two time periods. Rather it would be nice that your measure calculations change with changes in your selections on visuals. Thus, for this tutorial we will add some dynamic intelligence to the measures.

## Loading the Data

First here is the data we will be using. This data is the same data source as used in the previous % change tutorial. To make things easy I'll give you the M code used to generate this query. Name this query Auto Production.

```m
let
 Source = Web.Page(Web.Contents("https://en.wikipedia.org/wiki/Automotive_industry")),
 Data0 = Source{0}[Data],
 #"Removed Columns" = Table.RemoveColumns(Data0,{"Change", "Source"}),
 #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns",{{"Production", Int64.Type}, {"Year", Int64.Type}})
in
 #"Changed Type"
```

> **Note:** The code shown above should be added as a blank query into the query editor. Add the code using the Advanced Editor. Another tutorial showing you how to add advanced editor code is [here](/2016/05/19/query-editor-editing-m-code/).

Once you've loaded the query called Auto Production, the Field list should look like the following:

![Auto Production](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Auto-Production.png)

## Setting Up the Table Visual

Next add a Table with Production and Year. This will allow us to see the data we are working with. When you initially make the table the Year and Production columns are automatically summed, thus why there is one number under year and production.

![Table of Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Table-of-Data.png)

Rather we want to see every year and the production values for each of those years. To change this view click on the triangle in the Values section of the Visualizations pane. This will reveal a list, in this list it shows that our numbers are aggregated by Sum - change this to Don't Summarize.

![Change to Don't Summarize](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Change-to-Dont-Summarize.png)

Now we have a nice list of yearly production levels with a total production at the bottom of our table.

![Table of Production Values by Year](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Table-of-Production-Values-by-Year.png)

## Building the Dynamic Percent Change Measure

Next we will build our measure using DAX to calculate the percent changes by year. Our Calculation for % change is the following:

**% Change = ( New Value / Old Value ) - 1**

Below is the DAX statement we use as our measure. Copy the below statement into a new measure.

```dax
% Change =
DIVIDE(
 CALCULATE(
 SUM('Auto Production'[Production]),
 FILTER('Auto Production','Auto Production'[Year]=MAX('Auto Production'[Year])
 )
 ),
 CALCULATE(
 SUM('Auto Production'[Production]),
 FILTER('Auto Production','Auto Production'[Year]=MIN('Auto Production'[Year])))
,0)
- 1
```

> **Note:** We are using the DIVIDE function for division. This is important because if we run into a case where we have a denominator = 0 then an error is returned. Using DIVIDE allows us to return a zero instead of an error.

## Creating the Visuals

Next add our newly created measure as a Card.

![Add Card](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Add-Card.png)

Change the % Change measure format from General to Percentage, do this on the Modeling ribbon under Formatting.

![Change Measure Formatting](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Change-Measure-Formatting.png)

Next add a slicer for Year.

![Slicer for Year](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Slicer-for-Year.png)

## Testing the Dynamic Calculation

Now you can select different years and the % change will automatically change based on our selection. The % change will always select the smallest year's production and the largest year's production to calculate the % Change. By selecting the Year 2013 and 2007, the percent change is 19.15%. The smallest year is 2007 and the largest is 2013.

![Selecting Two Years](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Selecting-Two-Years.png)

If we select a year between 2013 and 2007 the measure will not change.

![Multiple Years Selected](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Multiple-Years-Selected.png)

The measure will only change when the starting and ending years are changed. By selecting the year 2014, the measure finally changes.

![Selecting Additional Year](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/06/Selecting-Additional-Year.png)

Pretty cool wouldn't you say? Thanks for taking the time to walk through another tutorial with me.
