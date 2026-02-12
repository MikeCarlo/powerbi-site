---
title: "Measures – Calculating % Change"
date: "2016-05-02"
authors:
  - "Mike Carlo"
categories:
  - "Building Reports"
tags:
  - "Power BI"
  - "DAX"
  - "Measures"
  - "Tutorial"
excerpt: "Learn how to create percent change calculations in Power BI using DAX measures with practical examples using real-world automotive production data."
featuredImage: "./assets/featured.png"
---

In our last post we built our first measure to make calculated buckets for our data, found [here](/2016/04/27/power-bi-histogram-with-bins/). For this tutorial we will explore the power making measures using Data Analysis Expressions (DAX).

When starting out in Power BI one area where I really struggled was how to create % change calculations. This seems like a simple ask and it is if you know DAX.

## Getting Data from Wikipedia

Alright lets go find some data. We are going to go grab data from Wikipedia again. I know, the data isn't too reliable but it is fun to play with something that resembles real data. Below is the source of data:

https://en.wikipedia.org/wiki/Automotive_industry

To acquire the data from Wikipedia refer to [this tutorial](/2016/04/20/from-wikipedia-to-colorful-map/) on the process. Use the Get Data button, click on Other on the left, select the first item, Web. Enter the webpage provided above in the URL box. Click OK to load the data from the webpage. For our analysis we will be completing a year over year percent change. Thus, select the table labeled By Year[edit]. Data should look like the following:

![Global Auto Production Wikipedia](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Global-Auto-Production-Wikipedia.png)

This is the total number of automotive vehicles made each year globally from 1997 to 2014. Click Edit to edit the data before it loads into the data model. While in the Query Editor remove the two columns labeled % Change and Source. Change the Name to be Global Production. Your data will look like the following:

![Global Production Data](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Global-Production-Data.png)

Click Close & Apply on the Home ribbon to load the data into the Data Model.

## Creating Visuals

Add a quick visual to see the global production. Click the Area Chart icon, and add the following fields to the visual:
- **Axis** = Year
- **Values** = Production

Your visual should look something like this:

![Area Chart of Global Production](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Area-Chart-of-Global-Production.png)

Next we will add a table to see all the individual values for each year. Click the Table visual to add a blank table to the page. Add Both Year and Production to the Values field of the visual. Notice how we have a total for both the year and production volumes. Click the triangle next to Year and change the drop down to Don't summarize.

![Change to Don't Summarize](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Change-to-Dont-Summarize.png)

This will remove the totaled amount in the year column and will now show each year with the total of Global Production for each year. Your table visual should now look like the following:

![Table of Global Production](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Table-of-Global-Production.png)

## Building DAX Measures

Now that we have the set up lets calculate some measures with DAX. Click on the button called New Measure on the Home ribbon. The formula bar will appear. We will first calculate the total production for 2014. We will build on this equation to create the percent change. Use the following equation to calculate the sum of all the items in the production column that have a year value of 2014.

```dax
Total 2014 = CALCULATE(sum('Global Production'[Production]),FILTER('Global Production','Global Production'[Year] = 2014))
```

> **Note:** I know there is only one data point in our data but go along with me according to the principle. In larger data sets you'll most likely have multiple numbers for each year, thus you'll have to make a total for a period time, a year, the month, the week, etc.

This yields a measure that is calculating only the total global production in 2014. Add a Card visual and add our new measure "Total 2014" to the Fields. This shows the visual as follows, we have 90 million vehicles produced in 2014.

![2014 Production](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/2014-Production.png)

Repeat the process above instead use 2013 in the Measure as follows:

```dax
Total 2013 = CALCULATE(sum('Global Production'[Production]),FILTER('Global Production','Global Production'[Year] = 2013))
```

This creates another measure for all the production in 2013. Below is the Card for the 2013 Production total.

![2013 Production](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/2013-Production.png)

## Calculating Percent Change

And for my final trick of the evening I'll calculate the percent change between 2014 and 2013. To do this we will copy the portions of the two previously created measure to create the percent change calculation which follows the formula:

**[(New Value) / (Old Value)] - 1**

```dax
% Change = CALCULATE(sum('Global Production'[Production]),FILTER('Global Production','Global Production'[Year] = 2014)) / CALCULATE(sum('Global Production'[Production]),FILTER('Global Production','Global Production'[Year] = 2013)) - 1
```

This makes for a long equation but now we have calculated % change between 2013 and 2014.

![Percent Change](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Percent-Change.png)

## Formatting as Percentage

Wait you say. That seems really small, 0.03 % change is next to nothing. Well, I applaud you for catching that. This number is formatted as a decimal number and not a percentage, even though we labeled it as % change. Click the measure labeled % Change and then Click on the Modeling ribbon. Change the formatting from General to Percentage with one decimal. Notice we now have a percentage.

![Change Format to Percentage](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2016/04/Change-Format-to-Percentage.png)

Thanks for working along with me. Stay tuned for more on percent change. Next we will work on calculating the percent change dynamically instead of hard coding the year values into the measures.

Want to learn more about PowerBI and Using DAX? Check out this great book from Rob Collie talking the power of DAX. The book covers topics applicable for both PowerBI and Power Pivot inside excel. I've personally read it and Rob has a great way of interjecting some fun humor while teaching you the essentials of DAX.

Please share if you liked this tutorial.
