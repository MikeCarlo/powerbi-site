---
title: "Center the X-Axis on a Line Chart"
excerpt: "Sometimes when your working on a line chart you want the x-axis to stay centered on a chart. This tutorial will walk you through how to create an X-Ax..."
date: "2018-07-09"
authors:
  - "Seth Bauer"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Sometimes when your working on a line chart you want the x-axis to stay centered on a chart. This tutorial will walk you through how to create an X-Axis that will always center it’s self on the graph.

#### Video Support Material:

The measures discussed within this tutorial are:

Variance All = SUM(Sales\[Variance\])

The column name Variance is found in the data table called sales.  This is just a numerical column.

After summing up all the variances we can calculate the min and max lines.

Const Max Line = \[Variance All\] \* 1.2

Const Min Line = -1 \* \[Const Max Line\]

Finally to calculate the variance to date you can use this filtered measure, which will only produce historical values.

Variance To Date = CALCULATE(\[Variance All\], FILTER('Sales','Sales'\[Date\] <= EOMONTH(TODAY(),0)))

Thanks for watching our short tutorial.  If you like this video please be sure to follow me (Seth Bauer) on [Twitter](https://twitter.com/Seth_C_Bauer), [LinkedIn](https://www.linkedin.com/in/seth-bauer/) and be sure to subscribe to the [PowerBI.Tips YouTube channel](https://www.youtube.com/powerbitips).
