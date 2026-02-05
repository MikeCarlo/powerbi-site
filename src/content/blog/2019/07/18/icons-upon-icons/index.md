---
title: "Icons upon Icons"
excerpt: "I am just bursting with excitement!! This month the amazing Power BI team has yet again come out with a great new feature, Icon sets. In addition to t..."
date: "2019-07-18"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

I am just bursting with excitement!! This month the amazing Power BI team has yet again come out with a great new feature, Icon sets. In addition to this you can enhance these icon sets by adding your own custom icons to your Power BI reports. Woo Hoo….

So what does this mean? Well, now you have a new Conditional Formatting box found in the settings of the Table and the Matrix properties. To use a built in Icon from Power BI. Create either a table or a Matrix visual with some data.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/image.png)

**Select** the visual and adjust it’s properties by clicking on the **Paint Roller** and opening the **Conditional Formatting** window.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/image-1.png)

Scroll down until you see the toggle button for Icons. Turn the **Icons** On.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/image-2.png)

**Click** on the **Advanced Controls** to set the properties of the icons based on the data properties. This type of dialog box should look familiar as it is similar to the previous boxes for conditional formatting. Opening this window shows Icons for each Rule in the list. To adjust an icon **Click** on the **Drop Down** **Arrow** next to the icon you wish to change. There are multiple icons to choose from.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/image-3.png)

There are limited selections by default, but you can enhance this by adding your own icons with the custom Json theme files. At PowerBI.tips we love our theme files. They make using standard settings so much easier.

#### Loading the Custom Icons

For starters we have already done the hard work of creating an additional **50** icons for you to use in your reports. [Download the Icon Theme File Here](https://powerbi.tips/product/theme-file-with-icon-set/)

_Update: Special thanks to Reid Havens from Havens Consulting for contributing extra icons to this Icon Set._

With this file you get these additional icons:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/IconSetv2.png)

To add these additional icons follow these steps:

1.  Download the theme file -> [Here](https://powerbi.tips/product/theme-file-with-icon-set/)
2.  **Unzip** the downloaded file to find the **PowerBITips Icons v1.json** file
3.  Navigate to the **Home** ribbon in Power BI Desktop
4.  **Click** on the **Switch Theme** button
5.  **Select** the list item **Import Theme** from the drop down menu
6.  The open file dialog box will open. Select the **PowerBITips Icons v1.json** file that you downloaded earlier.

Boom, and just like that you have loaded your new icons. Now you can return to the icons for your table or matrix and adjust until your heart is content.

Here is a sample of a table and a matrix with some custom icons applied:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/07/image-5.png)

_Update 2019/08/06: When publishing the Power BI file to the PowerBI.com service, the fill colors for the shapes need to have a %23 instead of a # (HASH) infront of the HEX codes. Thus, the format should look like_ **_fill=’%23FF0000′_** _instead of_ **_fill=’#FF0000′_**

If you liked the tables from this blog they came from one of our [Layouts that we produce](https://powerbi.tips/layouts/). The Microsoft Layout September 2018, [download it here](https://powerbi.tips/product/layouts-microsoft-sept-2018/).
