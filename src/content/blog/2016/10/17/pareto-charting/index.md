---
title: "Pareto Charting in PowerBI"
excerpt: "How do I build a Pareto chart in Power BI?"
date: "2016-10-17"
authors: ["Mike Carlo"]
categories:
  - "Building Reports"
tags: ["DAX", "Visuals", "Tutorial", "Analysis"]
featuredImage: "./assets/featured.png"
---

## How do I build a Pareto chart in Power BI?

**TL;DR.** A Pareto chart plots each category as a bar and a cumulative percent as a line, so you can see which products make up most of your sales. This 2016 tutorial builds the chart with a Summary table and four DAX measures.

### What does a Pareto chart show in this tutorial?

Each product or category shows up as a bar, and a cumulative line compares all of the bars. The post points to failure mode analysis, causes of a problem, and product portfolio balances as good uses. In the sample, the first 4 bars total approximately 50% of all sales.

### How do I load the sample data?

The 2016 post starts in Power BI Desktop: click Get Data on the Home ribbon, select Blank Query, then open Advanced Editor on the View ribbon and paste the post's M code, which loads Sample-Data.xlsx from the post's URL. Rename the query to Data and click Close & Apply. Those button names are from 2016, as written in the post.

### Why do I need a Summary table?

The loaded data repeats values, with Category 1 and Item 1 showing up 9 times, so each grouping has to be summarized first. Add a Blend column, `Blend = Data[Segment] & "-" & Data[Item]`, then build a Summary table with SUMMARIZE on Blend and Sum Sales.

### Which DAX measures support the Pareto chart?

There are four measures on the Summary table. Ranking uses RANKX on Sum Sales, Cumulative Total sums Sum Sales over ALLSELECTED Summary for rows whose Ranking is less than or equal to the current MAX Ranking, Total Sales sums Sum Sales over ALLSELECTED Summary, and Cumulative Percent divides Cumulative Total by Total Sales. Set Cumulative Percent to the Percentage format on the Modeling ribbon.

### How do I finish the chart visual?

Add a Line and Stacked Column Chart with Blend on Shared Axis, Sum Sales in Column values, and Cumulative Percent in Line values. Then open the visual's ellipsis and pick Sort By Sum Sales so the bars run in descending order. Those are the 2016 visual and field names from the post.

Related: [Ranking Values with Measures](/2017/07/25/ranking-values-with-measures/), [Power BI Histogram with Bins – Includes DAX](/2016/04/27/power-bi-histogram-with-bins/), and [SUM & SUMX Tutorial – Curbal](/2017/04/06/sum-sumx-tutorial-curbal/).

The Pareto chart is a handy visual, but is not so easy to build in either Excel or PowerBI. In a Pareto chart, information is provided about an individual product or category as a bar, and a cumulative scale as a line which compares all bars. This type of visual can be extremely helpful when conducting failure mode analysis, causes of a problem, or even product portfolio balances.

For some more information on Pareto charts you can learn more [here](http://asq.org/learn-about-quality/cause-analysis-tools/overview/pareto.html) or [here](https://en.wikipedia.org/wiki/Pareto_chart). If you're interested in building a Pareto chart in Excel, I have found [this post](http://www.excel-easy.com/examples/pareto-chart.html) from [Excel Easy](http://www.excel-easy.com/) to be helpful.

## What We're Building

Below you will see an image of the final Pareto chart. On the left side we have sales of units, and on the right is the cumulative percent of all sales. Using the Pareto chart a user has the ability to see which products comprise the majority of your sales. For example, the first 4 bars total approximately 50% of all sales.

![Pareto Final Product](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Pareto-Final-Product.png)

## Loading the Data

Open up PowerBI Desktop, Click the Get Data button on the Home ribbon and select Blank Query. Click Connect to open the Query Editor. Click Advanced Editor on the View ribbon. While in the Advanced Editor paste the following code into the editor window.

> **Note:** If you need some more help loading the data follow this tutorial about [loading data using the Advanced Query Editor](/2016/05/19/query-editor-editing-m-code/).

```m
let
 Source = Excel.Workbook(Web.Contents("https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Sample-Data.xlsx"), null, true),
 Table1_Table = Source{[Item="Table1",Kind="Table"]}[Data],
 #"Changed Type" = Table.TransformColumnTypes(Table1_Table,{{"Item", type text}, {"Sales", Int64.Type}, {"Segment", type text}})
in
 #"Changed Type"
```

Rename the Query to Data. Once you've completed the data load your data should look like the following.

![Load Data to Query Editor](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Load-Data-to-Query-Editor.png)

On the Home ribbon click Close & Apply to complete the data load.

## Exploring the Data

> **Pro Tip:** When I am building reports I often load the data and then immediately start building a couple of tables and slicers. It helps me understand how my data reacts to the slicers and helps me determine how to shape the data so that the visuals will work properly.

Add a Slicer for the Segment. Enhance the look of the slicer by changing it from a vertical to a horizontal slicer.

![Segment Slicer](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Segment-Slicer.png)

Repeat the same process to add a Slicer for the item field.

![Item Slicer](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Item-Slicer.png)

Next, add a table view of all the fields. Start with Segment, then Item and finally add Sales to the Table Visual.

![Data Table](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Data-Table.png)

Notice there are a number of repeating values. We have Category 1 and Item 1 repeated 9 times. We need to summarize each grouping.

## Creating the Summary Table

First, we will create a unique Key that will be used to summarize each combination of Category and Item pair. Click the bottom half of the New Measure button located on the Home ribbon, then select New Column.

![Calculated Column](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Calculated-Column.png)

Enter the following DAX expression:

```dax
Blend = Data[Segment] & "-" & Data[Item]
```

Select the Modeling ribbon and then click on the New Table button. Enter the following DAX expression.

```dax
Summary = SUMMARIZE('Data', Data[Blend], "Sum Sales", SUM(Data[Sales]) )
```

For more information on the SUMMARIZE function you can visit the [Microsoft Summarize documentation page](https://msdn.microsoft.com/en-us/library/gg492171.aspx).

Add a new Table visual to the report and include the two newly created fields from the Summary table.

![Summary Table Visual](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Summary-Table-Visual.png)

## Parsing the Blend Column

We need to parse out the Segments and Items from this blend column. Highlight the summary table by clicking the grey space next to the word Summary. Click the New Column button on the Modeling ribbon and enter the following DAX expression.

```dax
Segment = PATHITEM(
   SUBSTITUTE(Summary[Blend], "-" , "|" ),
   1 )
```

Add another new column with the following DAX expression for the item column.

```dax
Item = PATHITEM( 
  SUBSTITUTE(Summary[Blend], "-" , "|" ),
  2 )
```

## Updating the Slicers

Now modify our slicers to point to the new Item and Segment fields we created in the Summary table.

![Update Segment Slicer](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Update-Segment-Slicer.png)

![Update Item Slicer](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Update-Item-Slicer.png)

> **Pro Tip:** To select multiple items in a slicer you can hold down the Ctrl button on the keyboard and click multiple slicer items.

## Creating the Pareto Measures

Now we are ready to build the measures that will support the Pareto chart.

**Ranking measure:**

```dax
Ranking = RANKX( 'Summary', 'Summary'[Sum Sales])
```

**Cumulative Total measure:**

```dax
Cumulative Total = CALCULATE(
    SUM( Summary[Sum Sales] ),
    FILTER( ALLSELECTED( Summary ),
        Summary[Ranking] <= MAX( Summary[Ranking] )
    ))
```

**Total Sales measure:**

```dax
Total Sales = CALCULATE(
 SUM( Summary[Sum Sales] ) ,
 ALLSELECTED( Summary )
 )
```

**Cumulative Percent measure:**

```dax
Cumulative Percent = [Cumulative Total] / [Total Sales]
```

The Cumulative Percent measure is calculated as a percentage, thus we need to change this measure's formatting to percentage. Click the measure labeled Cumulative Percent then change the Format to Percentage which is found on the Modeling ribbon.

![Change Formatting](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Change-Formatting.png)

## Building the Pareto Chart

Add the following fields to the Line and Stacked Column Chart:
- Shared Axis: Blend
- Column values: Sum Sales
- Line values: Cumulative Percent

![Add Line and Stacked Bar Chart](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Add-Line-and-Stacked-Bar-Chart.png)

Order the data in descending order by the number of sales by clicking the visual's Ellipsis and selecting Sort By Sum Sales.

![Sort by Sales](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Sort-by-Sales.png)

This changes the order of the items to make a Pareto chart.

![Final Pareto Chart](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/10/Final-Pareto-Chart.png)

Thanks for following along. Share if you enjoyed this tutorial.
