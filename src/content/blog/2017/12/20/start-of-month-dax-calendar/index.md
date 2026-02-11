---
title: "Start of Month DAX Calendar"
excerpt: "While on a recent project I needed to build a variation of the DAX date table with start-of-month dates. Here's how to create one."
date: "2017-12-20"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: "./assets/featured.png"
---

While on a recent project I needed to build a variation of the DAX date table.  In my previous post, found here [Creating DAX Date Tables](https://powerbi.tips/2017/11/creating-a-dax-calendar/) I was built a date table for every day of the month for multiple years.  I’ve only ever needed to consume a fully populated date calendar, but in this instance because the data I was collecting was already aggregated to the first of the month I only needed a date calendar with each month’s start date.  After some playing around with my previous DAX functions I think I was able to come up with an elegant solution.

Let’s get into it.

Let’s begin by making a basic table.  Open Power BI Desktop, on the **Modeling** ribbon click **New Table**.

Enter the following code:

Dates = 
  GENERATE ( 
    CALENDAR ( DATE ( 2017, 1, 1 ), DATE ( 2017, 12, 31 ) ), 
    VAR currentDay = \[Date\]
    VAR day = DAY( currentDay )
    VAR month = MONTH ( currentDay ) 
    VAR year = YEAR ( currentDay )
  RETURN ROW ( 
    "day", day, 
    "month", month, 
    "year", year )
  )

This will produce our standard table from January 1st to December 31st, 2017 with every day populated in between.  In, addition we get numerical values for Day, Month and Year.

_Note: This table is producing a list of dates using the Calendar DAX function then iterating row by row to calculate each numerical value for the Day, Month and Year._

Add the **Table** visual with the following **Values** from our created DAX table.

![Dates Table](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/11/Dates-Table.png)

Dates Table

_Note: When you drag over the field labeled **Date** the field will be naturally added as a Date Hierarchy.  To remove the Date Hierarchy, you have to click the **little drop down arrow** next to the word **DATE** and select the word **Date** in the drop down menu.  This will remove the Year, Quarter, Month and Day date context from the visual._

The date calendar we made has every date, but we want only the first of each month.

Lets build a new table by following the previous steps and adding the following:

Start of Month Dates =
  GENERATE (
    GENERATESERIES(1,12),
    VAR inc = \[Value\]
  RETURN ROW (
    "date", DATE(2017,inc,1)
    )
  )

Add the **Table** visual to the report page and add the following fields:

![Start of Month Date Table](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/11/Start-of-Month-Date-Table.png)

Start of Month Date Table

_Note: I already removed the Date Hierarchy using the instructions listed above in the previous note._

This new DAX Date table is first generating a list of numbers 1 to 12 one for each month.  Then it iterates through the list and produces a date using the Date function were we manually provide the Year, and the day.  You can see the Generate function produces a column of data called \[Value\].  The variable denoted by VAR _inc_ is capturing the number for each month.  So, now what if we want to produce more than one year of dates?  Super simple, just change the generate series from 1 to 12 to 1 to 48.  This will produce three years of dates.

Change your Start of Months Dates to the following:

Start of Month Dates =
  GENERATE (
    GENERATESERIES(1,**48**),
    VAR inc = \[Value\]
  RETURN ROW (
    "date", DATE(2017,inc,1)
    )
  )

With one number change we can produce 4 years of dates.

![Four Years of Dates](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/11/Four-Years-of-Dates.png)

Four Years of Dates

Cool, let’s go a little further.  Just in case we need it we can also produce a list of dates that contain the end of the month.  Add the following your Start of Month Dates with the following DAX table (_don’t forget the comma on line 1 in the ROW function_):

Start of Month Dates =
  GENERATE (
    GENERATESERIES(1,48),
    VAR inc = \[Value\]
  RETURN ROW (
    "Date", DATE(2017,inc,1) **,**
    **"Month End", EOMONTH( DATE(2017,inc,1), 0)**
    )
  )

We have added a new column to note the end of each month.

![Date Table with Start and End Columns](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2017/11/Date-Table-with-Start-and-End-Columns.png)

Date Table with Start and End Columns

Well, thanks for following along.  In my use case this start of month date table was exactly what I needed.  I thought this was a handy little DAX table, and I hope you have found this helpful as well.  Be sure to share this post if you found this helpful.
