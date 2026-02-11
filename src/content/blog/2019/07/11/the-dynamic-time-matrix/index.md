---
title: "The Dynamic Time Matrix"
excerpt: "Time and time again when I begin talking with Excel users and ask to see what current reports they are using, they usually show me a table with a mixe..."
date: "2019-07-11"
authors:
  - "Seth Bauer"
categories: []
tags:
  - "power-bi"
featuredImage: "./assets/featured.png"
---

Time and time again when I begin talking with Excel users and ask to see what current reports they are using, they usually show me a table with a mixed bag of columns split by different time ranges. A comparison of month over month, or year over year, mixed in with a few daily totals or cumulative totals all rolled up from values on other tabs to produce their preferred view (or dashboard). Typically, the first approach I take is to describe how we can break up this single table view of things and start looking at the aggregations of these values in easily digestible pieces and slice and dice them in different times ranges. I’ve explained that the goal should be to produce easy to consume visuals for comparison using measures and plotting these out in different ways to glean insights quicker. Most of the time, this works, but other times… it is second best to what the analyst or uber Excel user wants to see… they want to see their numbers, and they want to see them the same way they have them in Excel.

**The Challenge:**

Recently, I encountered this all too familiar scenario (Time Ranges in a table/matrix) except this time, I wanted to see if I could reproduce the output exactly as the end user wanted it rather than move them in a different direction.

The first group of columns showed the days in the current week, the second group showed the weeks in the current month, followed by the Months to date, a year to date column and static columns of a Goal and Forecast.

I’ll spare you the details of researching a better way than producing these as individual measures,  and suffice to say that I was able to come up with a solution based on a few calculated columns, a disassociated table, and a single measure to produce the output I was searching for.

**The Solution:**

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/Dynamic-Time-Matrix-1024x461.png)

The above screenshot is of the dynamic matrix that you can download from the link at the end of this blog. As I developed this solution it came to my attention that there are actually a couple ways we could build this solution. The first of those would be to have a time slicer drive all the different time ranges, this would be useful for analyzing older datasets in the different ranges, but my goal was to create a solution that follows the “Set it and forget it” train of thought. This solution will restrict the view of data to never exceed the current day, the neat thing is, the current day is when you read this blog, not a static point in time. I’ve pre-loaded data out to the end of 2020, so the sample should continue to work and change each time the file is opened.

Before we dig into things, I want to convey that the DAX dove a bit deeper into the weeds than I initially expected, and I’ll do my best to describe what I did and why.

**The Data**

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/Sample-Data.png)

Sample Data

I’ve modified my original solution to use a sample of Adventure works data that I created, this simple dataset consists of a column to group things by (ModelName), a date (StartDate) and the value to aggregate (ListPrice). This solution should cover a wide range of different use cases so don’t get hung up on the exact columns here. A grouping column, a date column and a value column are all you need.

Here are the steps I took after creating the dataset and loading it into Excel:

**Load Data table from Excel into Power Query, Close & Apply**

**Create a calculated date table (DAX):**

```
Date = 
VAR MinYear = 2018
VAR MaxYear = 2020
RETURN
ADDCOLUMNS (
    FILTER (
        CALENDARAUTO( ), 
        AND ( YEAR ( [Date] ) >= MinYear, YEAR ( [Date] ) <= MaxYear )
    ),
    "Calendar Year", YEAR ( [Date] ),
    "Month Name", FORMAT ( [Date], "mmmm" ),
    "Month Number", MONTH ( [Date] ),
    "Weekday", FORMAT ( [Date], "dddd" ),
    "Week Number", WEEKNUM([Date]),
    "Weekday number", WEEKDAY( [Date] ),
    "Quarter", "Q" & TRUNC ( ( MONTH ( [Date] ) - 1 ) / 3 ) + 1
)
```

Your MinYear / MaxYear will obviously be different, but the core columns for what we need are in this output.

**Add Calculated Columns**

Now we need to add some filter columns to the date table we just created in order to get the current time frames we care about.

```
IsInCurrentYear = if(YEAR(NOW())= [Calendar Year],1,0)
IsInCurrentMonth = if([isInCurrentYear] && MONTH(NOW())=[Month Number],1,0)
IsInCurrentWeek = if([isInCurrentYear] && WEEKNUM(NOW())=[Week Number],1,0)
```

**Create a Disassociated table (Dax Table)**

This is our grouping table, this is the first key element in which we create a series of different DAX calculated tables to create the different time range groups we want to roll up our aggregate amount by. In each case, we are pulling all current and previous years, the current months in this year to date, the current weeks in the current month and the current days in the week. Then we union those values together where the “Group” is the top level time range, and the value is the specific time range values. Then we add an index column so that we can order the values in the way that we want.

The final output should look something like this:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/TimeRange-Group-Table.png)

This is the DAX code to create the calculated table. Each “Summarize” creates the time groups and values rolled up for the particular time range we are interested in. This is wrapped in the “AddColumns” function to add in a workable index that allows us to order all the values in the correct order dynamically. Initially, the static Index column works to sort the Group column, but the dates won’t sort as Calendar dates so I added the second way to dynamically generate an index to sort the values by. I retain the original Index value and ensure the counts returned from the date table align in sequential order. Essentially retaining the Group/Value index to sort by. Then we wrap all that in “SelectColumns” so that we can specify the column names. If we didn’t do this, the first column name would be “Calendar Year”.

```
TimeRange = 
SELECTCOLUMNS(
UNION(
    ADDCOLUMNS(
    SUMMARIZE(FILTER('Date', 'Date'[Calendar Year] <= YEAR(NOW())), 'Date'[Calendar Year], "Group", "By Year", "Index", 4),
        "DayIndex", CONCATENATE(4, FORMAT(CALCULATE(COUNT('Date'[Date]), ALL('Date'), FILTER('Date', 'Date'[Calendar Year]<=EARLIER('Date'[Calendar Year]))),"000"))
            ),
    ADDCOLUMNS(
               SUMMARIZE(FILTER('Date', 'Date'[Month Number] <= MONTH(NOW()) && 'Date'[Calendar Year] = YEAR(NOW())), 'Date'[Month Number], "Group", "By Month", "Index", 3),
        "DayIndex", CONCATENATE(3, FORMAT(CALCULATE(COUNT('Date'[Date]), ALL('Date'), FILTER('Date', 'Date'[Month Number]<=EARLIER('Date'[Month Number]))),"000"))
            ),
    ADDCOLUMNS(
               SUMMARIZE(FILTER('Date', 'Date'[IsInCurrentMOnth] = 1 && 'Date'[Week Number] <= WEEKNUM(NOW()) && 'Date'[Calendar Year] = YEAR(NOW())), 'Date'[Week Number], "Group", "By Week", "Index", 2),
        "DayIndex", CONCATENATE(2, FORMAT(CALCULATE(COUNT('Date'[Date]), ALL('Date'), FILTER('Date', 'Date'[Week Number]<=EARLIER('Date'[Week Number]))),"000"))
            ),
    ADDCOLUMNS(
        SUMMARIZE(FILTER('Date', 'Date'[IsInCurrentWeek] = 1 && 'Date'[Date] <= NOW()), 'Date'[Date], "Group", "By Day", "Index", 1),
        "DayIndex", CONCATENATE(1, FORMAT(CALCULATE(COUNT('Date'[Date]), ALL('Date'), FILTER('Date', 'Date'[Date]<=EARLIER('Date'[Date]))),"000"))
            ),
               DATATABLE("Header", STRING, "Group", STRING, "Index", INTEGER, "DayIndex", INTEGER,
                   {{"Goal", "Overall", 5,0}, {"Forecast", "Overall", 5,0}})),
    "Value", 'Date'[Calendar Year], "Group", [Group], "Index", [Index], "DayIndex", [DayIndex]
)
```

**Create a relationship between the Date table and the Data Table**

This would be on ‘Date’\[Date\] and ‘Data’\[StartDate\]

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/Model.png)

**Create our Measures**

Now we need to take the grouping table and merge it with the aggregated value via our measures. In the Data table we want to create the following measures.

```
First Measure:
List Price = SUM(Data[ListPrice])

Second Measure:
TimeValue = 
    VAR Val =
    SWITCH(SELECTEDVALUE('TimeRange'[Group]),
        "By Year", CALCULATE(TOTALYTD([List Price], 'Date'[Date], FILTER('Date', 'Date'[Date]<= TODAY())), FILTER('Date', 'Date'[Calendar Year] = VALUE(MAX('TimeRange'[Value])))),
        "By Month", CALCULATE(TOTALMTD([List Price], 'Date'[Date], FILTER('Date', 'Date'[Date]<= TODAY())), FILTER('Date', 'Date'[Month Number] = VALUE(MAX('TimeRange'[Value])) && 'Date'[Calendar Year] = YEAR(NOW()))),
        "By Week", CALCULATE(SUM(Data[ListPrice]), FILTER('Date', 'Date'[Week Number] = VALUE(MAX('TimeRange'[Value])) && 'Date'[Calendar Year] = YEAR(NOW()) && 'Date'[Date]<= TODAY())),
        "By Day", CALCULATE(SUM(Data[ListPrice]), FILTER('Date', 'Date'[Date] = DATEVALUE(MAX('TimeRange'[Value])))),
        --Remove SWITCH below if you only want time range
        SWITCH(SELECTEDVALUE(TimeRange[Value]),
           "Goal", [List Price] * 1.2,
           "Forecast", [List Price] * RAND() 
            )
    )
    RETURN
        FORMAT(Val, "CURRENCY")
```

**Create the Matrix**

Create a Matrix visual and drop the columns into the following rows and columns:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/Create-Matrix.png)

You will have something that looks like this:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/Dynamic-Time-Matrix-First-Level.png)

Dynamic Time Matrix First Level

**Are you ready for the magic? Head over to the far right of the visual and click down on the “Expand all down one level in the Hierarchy” button ->  and BOOM!**

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/Dynamic-Time-Matrix-Complete.png)

Dynamic Time Matrix Complete

We have our fully functional time range matrix that will adjust dynamically based on the current day. No need to update, change or alter anything! I hope you enjoyed this tip, I certainly was excited to put this solution together. There are so many different ways you could alter this solution, using different dates (swap in fiscal calendar dates), add different final total or percentage columns at the end, my mind keeps coming up with new solutions, and I hope you can use this as well!

You can find the full solution in this [PBIX download](https://pbitipsblob.blob.core.windows.net/externalshare/Blog%20-%20Dynamic%20Time%20Matrix.zip) which includes the sample data set.
