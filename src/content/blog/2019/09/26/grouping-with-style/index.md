---
title: "Grouping with Style"
excerpt: "# Grouping with Style  The release of grouping visuals was an extremely welcomed feature. As one who builds lots of reports grouping elements together..."
date: "2019-09-26"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

# Grouping with Style

The release of grouping visuals was an extremely welcomed feature. As one who builds lots of reports grouping elements together is essential to stay organized and to increase report building speed. Since I’ve been using this great new, I found an interesting design element to style groupings for reporting impact. The grouped visuals feature enables a new property, background color.  This can be applied for the entire group of visuals.

See the following example of setting a background around two visuals.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/01-Sample-of-Background-Color-1024x582.png)

In this example the intent is to show the user that these two visuals are related. The graph on the left shows the number of units sold for a selected time period. The bar chart on the right shows the relative sales over time represented as a percent change. This illustrates the principle of position and direction. The number of units sold is what happened right now. It is my place in time with respect to sales. However, this does not show any context to performance. The percent change provides the directional context.  Since the position and direction are an important insight as a paired visual, we use the grouping to visually bind the two.

For those who have done some research around design principals inevitably you will stumble across the [Gestalt Principals](https://www.interaction-design.org/literature/topics/gestalt-principles#targetText=Gestalt%20principles%20or%20laws%20are,the%20separate%20simpler%20elements%20involved.) of design.  Grouping visuals with a common background falls into the Law of Common Region or Law of Proximity.

Alright let’s walk through how to use grouping with backgrounds colors. 

Once you have created the visuals which will be grouped together; **select** each visual by holding **CTRL** and **Selecting** each visual.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/02-Select-Visuals-1024x405.png)

**Right Click** on one of the visuals and select the menu item labeled **Group**, in the flyout menu select the option called **Group**.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/03-Group-the-Visuals.png)

A grouped element will be created in the **Selection Pane**. 

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/04-Created-Grouping.png)

_Note: If you don’t see the Selection Pane, you will need to turn this on.  The setting to turn the Selection Pane is found in the **View** ribbon with the check box for **Selection Pane**. See below for reference._

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/05-Turn-on-Selection-Pane.png)

With the newly created group being selected, **Click** on the **Paint Roller** (Format) icon in the **Visualizations Pane**.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/06-Format-on-Visualization-Pane.png)

**Expand** the property section called **Background**. **Toggle** the background to be **On** and select a **Color** from the drop-down menu.  For this example, I selected the very first shade of grey in the first column of colors.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/07-Pick-Background-Color.png)

The final product will be a grouped arrangement of visuals with a shaded background.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/08-Sample-Visual-Group-1024x397.png)

To extend this idea further we can take the same approach when working with Text boxes and Visuals.  Often, I find I need more style for applying a Text box or header to a visual.  In these cases, I will use two visual elements to create one visual.  See this example of two visuals with custom titles created with a textbox.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/09-Two-Custom-Groups-1024x416.png)

_Note: Backgrounds are colored differently to illustrate that each background for the grouped visuals is different._

While this meets the need the boxes are not identical in size.  This violates yet another Gestalt Principle, symmetry.  The bounding regions of the elements inside the grouping define the outer perimeter of the background shading.  Knowing this we can modify the visuals within the groups to provide a symmetrical background shape.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/10-Two-Custom-Visuals-Matched-in-Size-1024x392.png)

Here are the same before and after images with each visual object colored to see the adjustments in size for each visual type.  This creates the proper background sizes. 

Before:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/11-Before-Adjustments-1024x410.png)

After:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/12-After-Adjustments-1024x397.png)

The visual on the left required an increase of the text box at the top to get the desired width of the background shape.  By contrast the visual on the right required an extension of the bar chart in length to acquire the desired length of the background.  The result provides a symmetric view of both visual groups.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/09/13-Final-Solution-1024x395.png)
