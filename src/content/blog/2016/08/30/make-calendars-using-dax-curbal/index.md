---
title: "Make Calendars Using DAX – Curbal"
excerpt: "Learn how to create custom calendars in Power BI using DAX with Calendar() and CalendarAuto() functions. Video tutorial from Ruth Pozuelo at Curbal."
date: "2016-08-30"
authors: ["Mike Carlo"]
categories:
  - "Building Reports"
tags: ["DAX", "Date Table", "Tutorial", "Video"]
featuredImage: "./assets/featured.png"
---

Often you will need to create some custom calendars within your PowerBI reports. Ruth Pozuelo from Curbal does a great video tutorial on using Calendar() and CalendarAuto(). I have used the Calendar() DAX function many times and find it very helpful.

## Different Approaches to Date Tables

The following videos are built directly within DAX. This approach is one of many different methods that can be used to generate a list of dates. In a previous tutorial I talked about how to build a date table within the Query Editor ([build date table in the Query Editor](/2016/08/31/building-date-table-from-scratch/)).

One method that Ruth talks about is the ability to use the CalendarAuto(). I have not used this expression in any previous reports, but seeing how simple it is to implement this will definitely have to be added to the toolbox.

## DAX Calendar Functions

[Microsoft Docs on Calendar()](https://msdn.microsoft.com/en-us/library/dn802546.aspx)

See Calendar DAX example below:

```dax
= CALENDAR (DATE (2005, 1, 1), DATE (2015, 12, 31))
```

[Microsoft Docs on CalendarAuto()](https://msdn.microsoft.com/en-us/library/dn802534.aspx)

See CalendarAuto DAX Example below:

```dax
= CALENDARAUTO()
```

## Video Tutorials from Curbal

Here are the highlights from Ruth's video:

### Using Calendar

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/RGX6n2PCXxo" 
  title="Using Calendar DAX"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

### Using CalendarAuto

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/Xc6-9QZXD60" 
  title="Using CalendarAuto DAX"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Learn More

Curbal has been generating a lot of great content. To learn about more information you can visit the website [found here](https://curbal.com/dax-fridays-by-curbal), or visit the [YouTube Channel](https://www.youtube.com/channel/UCJ7UhloHSA4wAqPzyi6TOkw).

For more great videos about Power BI check out our [videos page](/videos/).
