---
title: "PowerBI.tips"
excerpt: "Sometimes, we want the users to see different metrics, but do not want to take up too much space on our page. The scenario we are going to walk throug..."
date: "2019-08-08"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Sometimes, we want the users to see different metrics, but do not want to take up too much space on our page. The scenario we are going to walk through is how to build just one visual (in this case a bar graph). It will include a toggle that allows the user to select their desired calculation, either the sum of Volume, Dollars or Margin.

### Final Solution

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/Buttons.gif)

With buttons, we can change specific visuals on a page. Recently, with the release of conditional formatting on titles and backgrounds, we have some new methods to make this easier for the report author and cleaner for the report consumer.

### The Build

Before we start, turn on the selection pane and bookmark pane. They can be turned on by clicking on the View ribbon and checking the correct boxes.

First, we’re going to create our **control table**. This will be a disassociated table. This table should not have any relationships to any of the other tables in our model. We just need to enter a numeric ID and a description of what we want.  **Click** on the **Enter Data** button found on the **Home** ribbon. Enter the following data as shown. **Click** the **OK** button to close the **Create Table** dialog box**.**

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/01-Create-Table.png)

Now that’s set up, we can write our measure. This measure will see what is selected in the **_Number\_ID_** column of our control table, then return the appropriate calculation. Use a switch statement to select the correct calculation. Create the following measure:

```
Selected Calculation = 
SWITCH(
  SELECTEDVALUE(Control[Number_ID])
   ,1,SUM(Sales[Volume])
   ,2,SUM(Sales[Dollars])
   ,3,Sum(Sales[Margin])
   ,SUM(Sales[Volume])
)
```

Note: See there is a default value listed in the switch statement. The default calculation means that if nothing is selected, SUM( Sales\[Volume\] ) will be returned. The default value is represented by the last property in the switch statement.  
  
Time to set up our visual. Add a bar graph with **_Category_** on the axis and the new measure, **_Selected Calculation_**, in the values fields. Then add a slicer for the **_Number\_ID_** column. The **Number\_**ID column comes from the control table we added earlier.            

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/02-Bar-Graph-Slicer.png)

Switching the slicer can now change the graph to show the different calculations.

The next stage is to add three buttons to the top of the graph. In the Home tab of the ribbon, click Buttons and select Blank. Make sure the outline colors and outline width match on all objects, Buttons and chart outline.

_Tip: Make sure you label your buttons in the Selection Pane. The selection pane can be turned on by clicking on the View ribbon and checking the box labeled Selection Pane. To Change the name of the button, double click the name listed in the Selection Pane. Giving a title (such as Button\_Volume) will make it easily to see what visual items are on the page._

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/03-Tabbed-Chart.png)

After this, it’s time to add the bookmarks.

**_The bookmark pane can be turned on by clicking on the View ribbon and checking the box labeled Bookmark Pane._**

Step 1:

*   Select a value of **1** in the **_Number\_ID_** slicer.
*   Select the slicer (and only the slicer) in the Selection pane.
*   Click “Add Bookmark” in the Bookmarks pane.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/04-Adding-a-Bookmark.png)

Step 2:

*   In the Bookmarks pane, right click the bookmark and rename it to **Select 1.**
*   **Right click** again, and untick “**Display**” and “**Current Page**”. Select “Selected Visuals”.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/06-Changing-Bookmark-Properties.png)

Now repeat step 1 and step 2, but do so with the values of 2 and 3 from **Number\_ID** slicer. Name these bookmarks Select 2 and Select 3. You should finish with three bookmarks, each that filters **Number\_ID** to a different value. You can test the bookmarks by clicking on them once in the bookmark pane.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/08-Bookmark-List.png)

On Button\_Volume, assign the **Select 1** bookmark (as **_Number\_ID_** 1 refers to volume). To do this, click on Button\_Volume in the selection pane. In the visualizations pane for this button, go to the property named “Action”. Turn it on, change the type to bookmark, and choose Select 1 in the dropdown.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/09-Assign-Bookmark.png)

Repeat for Button\_Dollars and assign **Select 2.** Then for Button\_Margin and assign **Select 3**. Now the buttons can change the graph, but it’s a bit hard to see what is selected.

### Add Conditional Formatting

This is where conditional formatting can help us! Select Button\_Volume in the selection pane. Then in the visualizations pane, turn on the background property, select the ellipsis and click conditional formatting

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/10-Add-Conditional-Formatting.png)

Here’s the settings we want:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/11-Color-Rules.png)

This is going to apply a rule if the **_Number\_ID_** selected is 1, to give the button a blue background. As there are no other rules, any other number selected will default to the white.

Now, apply the same steps to the other two buttons, but make the rule “If value is 2” for Dollars, and “If value is 3” for Margin.

To tidy up, hide the slicer and turn the visual headers of all buttons off. You can click on the eye next to the slicer in the selection pane to hide it.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/12-Hide-Slicer.png)

Turn the visual headers off by clicking the button, then in the visualizations pane.

Great! Now the tab shows the selected button and correct measure:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/13-Volume-Selected.png)

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/14-Dollars-Selected.png)

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/15-Margin-Dollars.png)

To make it even clearer, apply conditional formatting to the title of the graph. On the graph, open conditional formatting. Set it to field value and use the **_type_** field in the control panel.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/16-Add-Conditional-Formatting.png)

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/08/17-Chart-with-Dynamic-Title.png)

Using this control table allows for greater flexibility. We can add more calculations, easily edit them or even sync across pages, all without having to re-record any bookmarks.
