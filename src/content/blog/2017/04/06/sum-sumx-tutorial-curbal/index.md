---
title: "SUM & SUMX Tutorial – Curbal"
excerpt: "What is the difference between SUM and SUMX in DAX?"
date: "2017-04-06"
authors:
  - "Mike Carlo"
categories:
  - "Building Reports"
tags:
  - "power-bi"
featuredImage: "./assets/featured.png"
---

## What is the difference between SUM and SUMX in DAX?

**TL;DR.** SUM adds all the numbers in one column. SUMX is an iterator: it evaluates an expression for each row of a table, then adds the results. Use SUMX when the value must be calculated row by row. Curbal's video walks through both.

### What does SUM do in DAX?

SUM adds all the numbers in a column. Microsoft Learn gives the syntax as `SUM(<column>)`, so it takes a single column reference.

### What does SUMX do in DAX?

SUMX returns the sum of an expression evaluated for each row in a table. Microsoft Learn gives the syntax as `SUMX(<table>, <expression>)` and documents it as an iterator function.

### When should I use SUMX instead of SUM?

Use SUMX when the number you need is not already a column and has to be computed for each row first, or when you want to sum over a filtered table. Microsoft's SUM page points to SUMX for filtering the values you sum.

### Which video does this post use?

The post embeds Curbal's "DAX Fridays! #3: SUM and SUMX" from YouTube, starting at 1:52. Curbal publishes more DAX Fridays videos on its website and YouTube channel.

### Where can I read more about DAX functions?

Start with Microsoft's DAX function reference, plus the SUM and SUMX pages on Microsoft Learn. The post also links a PowerPivotPro article, now hosted by P3 Adaptive, on choosing between SUM, SUMX, and CALCULATE.

Related: [Measures - Calculating a SUM](/2016/05/07/measures-calculating-a-sum/), [Using Variables within DAX](/2017/05/05/using-variables-within-dax/), and [UseRelationship DAX Tutorial – Curbal](/2017/07/03/userelationship-dax-tutorial-curbal/).

Learn how to use SUM() and SUMX() with this great video from Curbal. As you become more familiar with PowerBI you will increase your understanding of DAX (Database Analysis Expressions). Microsoft has an extensive list of all the expressions you can use [found here](https://learn.microsoft.com/en-us/dax/dax-function-reference).  One of the more common expressions you will use is SUM and SUMX.

[Example of SUM, SUMX and Calculate from PowerPivotPro](https://powerpivotpro.com/2014/10/sum-sumx-or-calculatechoices-choices/)

[Microsoft Documentation of SUM](https://learn.microsoft.com/en-us/dax/sum-function-dax)

[Microsoft Documentation of SUMX](https://learn.microsoft.com/en-us/dax/sumx-function-dax)

Using the SUMX and SUM expressions:

<iframe
  width="100%"
  height="415"
  src="https://www.youtube.com/embed/vcYz0XPklXg?start=112"
  title="DAX Fridays! #3: SUM and SUMX - Curbal"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

To learn more about DAX I have read both of these book and found them extremely helpful.  They both cover the basics and then quickly get you understand how to make complex calculations which you will need to make the right visual work.

Curbal has been generating a lot of great content.  To learn about for more information you can visit the website [found here](https://curbal.com/dax-fridays-by-curbal), or visit the [YouTube Channel](https://www.youtube.com/channel/UCJ7UhloHSA4wAqPzyi6TOkw).

For more great videos about Power BI click the image below:

[![PBI Videos](https://powerbitips.azurewebsites.net/wp-content/uploads/2017/04/PBI-Videos-e1491326922444.png)](https://www.youtube.com/@PowerBITips)
