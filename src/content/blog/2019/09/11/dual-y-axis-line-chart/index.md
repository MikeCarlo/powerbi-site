---
title: "PowerBI.tips"
excerpt: "Ever need two different scales on the Y-Axis of a line chart? If so, then this tutorial is for you. While creating a [dual y-axis line chart](https://..."
date: "2019-09-11"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Ever need two different scales on the Y-Axis of a line chart? If so, then this tutorial is for you. While creating a [dual y-axis line chart](https://www.youtube.com/watch?v=8vzhSjNGcSo) is pretty common in excel, it is not as easy in power BI. The only standard chart that comes with Power BI Desktop that enables dual y-axis is the Column and line combo chart types.

For this particular visual I needed to show correlation between two time series with different Y-axis scales. The Y-axis on the left of the chart had data elements in the thousands, but the right side needed percentages. The tutorial below illustrates how to accomplish by building a custom visual using the [Charts.PowerBI.Tips](https://charts.powerbi.tips/) tool.

## Video Tutorial

_note: there are a bunch of really good custom visuals that can be downloaded from the [Microsoft App Source](https://appsource.microsoft.com/en-us/marketplace/apps?product=power-bi-visuals) store. However, this article will not review all third party visuals that are able to produce a dual Y-axis line chart._

## Source files

All files used to create this visual are located [here on GitHub](https://github.com/MikeCarlo/PowerBI-Dual-y-axis-Line-Chart).

## Layout file

The file used in this tutorial was a derivation of the Sunset layout from PowerBI.Tips. If you like this file, you can download it here:
