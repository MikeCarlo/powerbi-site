---
title: "Building Date Table from Scratch"
excerpt: "Create a custom dynamic date table in Power BI Query Editor using M language. Build week-based selectors that automatically update when refreshed."
date: "2016-08-31"
authors: ["Mike Carlo"]
categories:
  - "Building Reports"
tags: ["Power Query", "M Language", "Date Table", "Tutorial"]
featuredImage: "./assets/featured.png"
---

Recently at work I've been working with a number of large data warehouses with time series data. Often when working on such data you need to incorporate a data calendar to compute date ranges. So, for this tutorial we will build a custom date table directly inside PowerBI.

## Creating the Initial Date List

Start by opening up Power BI and clicking Get Data on the home ribbon, then select Blank Query. Like always make sure you start by renaming the query into something meaningful. Change the name of the Query to Date List. Next enter the following equation into the formula bar:

```m
List.Dates( #date(2016,1,1), 10, #duration(1,0,0,0))
```

> **Note:** For more information on the M language you can visit [here](https://msdn.microsoft.com/en-us/library/mt211003.aspx). Also, here is the link to the List.Dates function found [here](https://msdn.microsoft.com/en-us/library/mt253613.aspx).

Once we enter the formula into the formula bar the list of dates will appear below.

![Date List](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Date-List.png)

The quick explanation about the List.Dates function is below:

```
List.Dates( Start Date , Number of intervals , Type of interval )
```

## Making the Date List Dynamic

While this is interesting it does not help us make a report that updates the date range dynamically. The real world use case for this would be you have a report with data that is being generated daily, say for example a website. Maybe you want a custom date range that automatically changes every day you log into PowerBI. For example if today is 08-20-2016, I want the first date to be today and then list the dates from the previous 10 days.

Now change the formula to the following formula:

```m
= List.Dates( DateTime.Date( DateTime.FixedLocalNow() ) , 10 , #duration(-1,0,0,0) )
```

> **Note:** In this equation we have changed the duration to -1. This is important to note because now our date table returns older dates. In our previous equation we used a positive 1 and we returned future dates.

In this new equation we have defined the Start Date to the following statement: `DateTime.Date( DateTime.FixedLocalNow() )`. This is tricky because if you only use `DateTime.FixedLocalNow()` the statement will error out. The error occurs because the `DateTime.FixedLocalNow()` is a date and time. The List.Dates function is expecting a Date only value. Hence why we use the `DateTime.Date()` function to remove the time stamp and only return today's date.

![Date List Using Date of Today](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Date-List-Using-Date-of-Today.png)

It is most likely your date ranges will be different than the ones in the example because the `DateTime.FixedLocalNow()` function will be pulling in your computer's current date.

## Expanding to 90 Days

Next modify the equation to now pull the last 90 days:

```m
List.Dates(DateTime.Date(DateTime.FixedLocalNow()), 90, #duration(-1,0,0,0))
```

The list of dates is just that - a list. We really can't do too many other enhancements to our data with only a list of dates. Now transform the list into a table. Click on the Transform ribbon and select To Table. Notice now that we have a new column and a new applied step.

![New Column](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/New-Column.png)

The code for the new applied step is as follows:

```m
Table.FromList(Source , Splitter.SplitByNothing() , null , null , ExtraValues.Error)
```

The first null in the equation is actually a parameter that you can use to name the new column. Modify the equation to the following:

```m
Table.FromList(Source , Splitter.SplitByNothing() , {"Date"} , null, ExtraValues.Error)
```

Our table is updated and now has the name Date. Nice work!

## Adding Week Number Column

Now let's make our date list useful. Click on the ribbon labeled Add Column and then the button labeled Add Custom Column. Add the following equation to the new column and name it Week #, then click OK to continue.

```m
Number.RoundDown( Number.From(Date.AddDays( List.Max( Table.Column(#"Converted to Table", "Date" ) ) , -1 * Number.From( List.Max( Table.Column(#"Converted to Table", "Date" ) ) - Date.StartOfWeek( List.Max( Table.Column( #"Converted to Table", "Date" ) ) , Day.Saturday ) ) ) -[Date] ) / 7 + 1 , 0)
```

This equation defines the start of the week. Since today is Tuesday 8/30/16, then the days 8/30 (Tues), 8/29 (Mon), 8/27 (Sunday) are considered week 0 or the current week. All dates prior will start with weekly increment.

![Date List](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Date-List-1.png)

## Adding Week Description Columns

Now we can add some logic to define week variables. Click on the Add Column ribbon and select the Conditional Column button. Enter the following for Current Week:

![Current Week Logic](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Current-Week-Logic.png)

Click OK to proceed. We have now added an additional column with a text description of the week.

![Current Week Column](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Current-Week-Column.png)

Add the Last Week conditional column:

![Last Week Logic](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Last-Week-Logic.png)

Continue adding columns for Last 2 Weeks, Last 3 Weeks, and Last 4 Weeks. For each, you'll want to modify the code to exclude week 0 (current week):

```m
= Table.AddColumn(#"Added Conditional Column1", "Last 2 Weeks", each if [Week Number] < 3 and [Week Number] > 0 then "Last 2 Weeks" else null )
```

```m
= Table.AddColumn(#"Added Conditional Column2", "Last 3 Weeks", each if [Week Number] < 4 and [Week Number] > 0 then "Last 3 Weeks" else null )
```

```m
= Table.AddColumn(#"Added Conditional Column3", "Last 4 Weeks", each if [Week Number] < 5 and [Week Number] > 0 then "Last 4 Weeks" else null )
```

After all those additional columns you should have something that looks similar to the following:

![Date Table](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Date-Table.png)

## Unpivoting the Week Columns

Next we will pivot all the data down to one column. This will enable us to select a time period and automatically have our date table update to the specific range.

First, shift select the following columns: Current Week, Last Week, Last 2 Weeks, Last 3 Weeks, and Last 4 Weeks. Then on the Transform ribbon click the Unpivot Columns button.

![Unpivot Columns Command](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Unpivot-Columns-Command.png)

Next delete the Attribute column using a right click on the Attribute column and selecting Remove Columns.

![Remove Attribute Column](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Remove-Attribute-Column.png)

Rename the Value column to Selector by right clicking on the Value column.

![Rename the Value Column](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Rename-the-Value-Column.png)

## Setting Data Types

Modify each column to have the correct Data Type on the Home ribbon:
- Date column data type should be Date
- Week Number column data type should be Whole Number
- Selector column data type should be Text

> **Note:** It is important to always check your data types for each column before you leave the Query Editor. If you don't you'll find that the visuals that you're trying to build later on in the page view will not work as expected.

Next, click the Home ribbon and select Close & Apply.

## Building the Visuals

You can now build the following visuals:

A slicer for the Selector column:

![Selector Column as a Slicer](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Selector-Column-as-a-Slicer.png)

Table visual for the Date column:

> **Note:** When you use the Date Column as the data source for the Table Visual the data will automatically be added as a Date Hierarchy. This does not work well with our data so you will need to change the date from a Date Hierarchy to a standard Date.

![Date Table](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Date-Table-1.png)

Now you can finally play around with your data and by selecting different items in the Selector slicer you can filter down to different date ranges. Below I selected the Last Week item, which filters down my dates to only the 7 days from last week.

![Last Week Slicer Selected](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/08/Last-Week-Slicer-Selected.png)

Nice job making a custom date table in PowerBI. The nice part about this table is that it will always refresh with the latest dates whenever the queries are refreshed for this PowerBI file.

## Bonus: Complete M Code

For those of you who want to cheat and just have the M code to generate this custom date table:

```m
let
 Source = List.Dates(DateTime.Date(DateTime.FixedLocalNow()), 90, #duration(-1,0,0,0)),
 #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), {"Date"}, null, ExtraValues.Error),
 #"Added Custom1" = Table.AddColumn(#"Converted to Table", "Week Number", each Number.RoundDown( Number.From(Date.AddDays( List.Max( Table.Column(#"Converted to Table", "Date" ) ) , -1 * Number.From( List.Max( Table.Column(#"Converted to Table", "Date" ) ) - Date.StartOfWeek( List.Max( Table.Column( #"Converted to Table", "Date" ) ) , Day.Saturday ) ) ) -[Date] ) / 7 + 1 , 0)),
 #"Added Conditional Column" = Table.AddColumn(#"Added Custom1", "Current Week ", each if [Week Number] = 0 then "Current Week" else null ),
 #"Added Conditional Column1" = Table.AddColumn(#"Added Conditional Column", "Last Week", each if [Week Number] = 1 then "Last Week" else null ),
 #"Added Conditional Column2" = Table.AddColumn(#"Added Conditional Column1", "Last 2 Weeks", each if [Week Number] < 3 and [Week Number] > 0 then "Last 2 Weeks" else null ),
 #"Added Conditional Column3" = Table.AddColumn(#"Added Conditional Column2", "Last 3 Weeks", each if [Week Number] < 4 and [Week Number] >0 then "Last 3 Weeks" else null ),
 #"Added Conditional Column4" = Table.AddColumn(#"Added Conditional Column3", "Last 4 Weeks", each if [Week Number] < 5 and [Week Number] > 0 then "Last 4 Weeks" else null ),
 #"Unpivoted Columns" = Table.UnpivotOtherColumns(#"Added Conditional Column4", {"Date", "Week Number"}, "Attribute", "Value"),
 #"Removed Columns" = Table.RemoveColumns(#"Unpivoted Columns",{"Attribute"}),
 #"Renamed Columns" = Table.RenameColumns(#"Removed Columns",{{"Value", "Selector"}}),
 #"Changed Type" = Table.TransformColumnTypes(#"Renamed Columns",{{"Date", type date}, {"Week Number", Int64.Type}, {"Selector", type text}})
in
 #"Changed Type"
```
