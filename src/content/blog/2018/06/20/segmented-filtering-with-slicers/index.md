---
title: "PowerBI.tips"
excerpt: "This weeks tutorial focuses on the need to control groups of visuals independently.  This recently came up in a project where I needed to adjust all t..."
date: "2018-06-20"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

This weeks tutorial focuses on the need to control groups of visuals independently.  This recently came up in a project where I needed to adjust all the items on the left side of the screen independently from the right side.  By using the **Edit Interactions** button found on the **Format** ribbon you are able to adjust how different visuals interact with each other.  Finally, adding multiple Slicers to the page for controls finishes out the report.  I hope you enjoy this weeks tutorial.

#### Followup:

On the demo page of the report you’ll notice that when various items are selected, some of the non-selected items dis-appear.  This is handled by using some formatting within the measures for the visuals.  All the measures used in this tutorial are listed below:

Taking an Average of a Numerical Column:

Average of Values = 
VAR calc = AVERAGE( Data\[Value\] )
RETURN if( calc = BLANK(), "", calc )

Making Dynamic Titles off of a list of items in a table:

Title = 
VAR title = CONCATENATEX( VALUES( Data\[Customer\] ), Data\[Customer\], " & " )
RETURN if( title = BLANK(), "", title )

Producing a sum of values:

Total of Values = 
VAR calc = SUM( Data\[Value\] )
RETURN if( calc = BLANK(), "", calc )

#### Want the file:

Need a little more help? Like the content from PowerBI.Tips.  Please consider purchasing the demo PBIX file to support more great content.

\[product id=”17894″ \]
