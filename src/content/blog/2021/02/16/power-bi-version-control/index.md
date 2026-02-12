---
title: Power BI Version Control – Ready to use solution
excerpt: Power BI Version Control is a free, fully-packaged solution that lets users
  apply version control, local editing, and manage PBIX or PBIT files. The s...
date: '2021-02-16'
authors:
- Mike Carlo
categories:
  - "Building Reports"
  - "Sharing And Administration"
tags:
- power-bi
featuredImage: ./assets/featured.png
---

Power BI Version Control is a free, fully-packaged solution that lets users apply version control, local editing, and manage PBIX or PBIT files. The solution runs entirely on Power Apps (Power Platform) and SharePoint. Power BI Version Control can give business users or smaller organizations the ability to easily implement and utilize version control for their Power BI projects.

**_Note: updating the app version will require you to re-import the SharePoint connection and folders_**.

* * *

**[DOWNLOAD HERE](https://powerbi.tips/product/power-bi-version-control-download/)**

**The latest version is 2.0.1**

* * *

## In this Article

*   [What is Power BI Version Control?](https://powerbi.tips/2021/02/power-bi-version-control/#h-what-is-power-bi-version-control)
*   [Why use Power BI Version Control?](https://powerbi.tips/2021/02/power-bi-version-control/#h-why-use-power-bi-version-control)
*   [How to use Power BI Version Control](https://powerbi.tips/2021/02/power-bi-version-control/#h-how-to-use-power-bi-version-control)
    *   [Installing the app](https://powerbi.tips/2021/02/power-bi-version-control/#h-how-to-use-power-bi-version-control)
    *   [Configuring the App](https://powerbi.tips/2021/02/power-bi-version-control/#h-configuring-the-app)
    *   [Setting the connections](https://powerbi.tips/2021/02/power-bi-version-control/#h-setting-the-connections)
*   [Using the App](https://powerbi.tips/2021/02/power-bi-version-control/#h-using-the-app)
*   [Limitations and Scope](https://powerbi.tips/2021/02/power-bi-version-control/#h-limitations-and-scope)

* * *

## What is Power BI Version Control?

In most version control systems, [branching is a method](https://docs.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance?view=azure-devops) to make edits to code in a safe and reliable way. Typically, users “branch”, or copy, the code to their local machine to make edits. They can then “merge” the code back to the master code, adding comments of what has changed and who changed it. Each change is saved as a different version, with the ability to go back to any version. Small, frequent changes are helpful, making it easy to undo any errors. This type of version control requires that every file be saved in a plain text format, so the differences between two versions of the same file can be easily identified, cherry-picked, merged, etc.

However, unlike pure source code, Power BI reports are packaged into PBIX or PBIT files, which cannot be compared against each other in the way we just described. This makes it much harder for multiple users to work on the same set of files simultaneously. While it is possible to use Azure DevOps, GitHub, etc. as a version control solution for Power BI reports, it’s difficult to setup and use (especially for non-technical business users). The **Power BI Version Control** solution bridges that gap by harnessing SharePoint’s built-in file versioning and the user-friendly UI/UX of Power Apps.

* * *

## Why use Power BI Version Control?

#### **Single shared location for reports (no emailing files!)​**

Keeping all of your Power BI report files in SharePoint means that you’ll always know where to find them, and that they’ll always be the latest versions of those files.

#### Keep all versions of the report (no adding numbers to file names!)​

**​**We often want to keep files from the past in case we need to roll back changes. Instead of adding version numbers or initials to the file names (like _**Sales\_Report\_v2.5\_Final(1)(1).pbix**_), SharePoint will keep all versions of your report files automatically. Additionally, by using this Power BI version control method, it is possible to roll back to any of these versions whenever needed.

#### Ability to check out files exclusively, like a library – only one person can make changes at a time

**​**When working in teams, you may have multiple people working on a project (see [this post on Power BI team members](https://powerbi.tips/2020/12/power-bi-architecture-in-a-data-solution/)). If you have more than one person who may edit a file, we want to make sure they are not trying to do it at the same time. Power BI Version Control ensures that only one person can check out any given file at once. As a result, nobody else can make edits to a file that you are working on. No more conflicts or working on outdated versions of files!

#### Ability to check-in files – add comments describing changes made since the last check-in

​After making edits, we want to be able to keep comments about what was changed. With each version we are able to add a description of what has changed since the last version.

#### Work locally – make all changes on copies, so we do not edit our files directly

Another important benefit of Power BI Version Control is that we always work on copies of our reports. We can save and experiment as we work on the files, knowing that we will not accidentally damage a live report. We do all work locally on our machine and separate to our production or live reports. If needed, we can discard all changes and start again.

* * *

## How to use Power BI Version Control

Power BI Version Control – Installation Instructions (YouTube)

### Installing the App

*   Download the Power BI Version Control app solution file (from the [link](https://powerbi.tips/2021/02/power-bi-version-control/#download-here) near the top of this page)
*   Navigate to [https://make.powerapps.com/](https://make.powerapps.com/)
*   Ensure the correct environment is selected
*   On the left menu bar, navigate to **_Solutions_**
*   Select **_Import_** on the top menu bar

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-12.png)

*   Select browse and chose the **PowerBIVersionControl\_2\_0\_1.zip** file you just downloaded
*   Click **_Next_** and **_Next_** again until you reach the Connections screen
*   If you have existing SharePoint connections you wish to use (recommended), you can select them from the drop-down list. If not:
    *   select **_\+ New Connection._**
    *   Select how to connect (usually recommended to Connect Directly)
    *   In the new page that opens, click create and sign in if prompted
    *   Once created, you can close the current tab and navigate back to the import screen
    *   Click refresh then select the new connection from the drop-down list
*   Click **_Import._** This step may take a few minutes to complete

### Configuring the App

*   Navigate to [https://make.powerapps.com/](https://make.powerapps.com/)
*   Ensure the correct environment is selected
*   On the left menu bar, navigate to **_Solutions_**
*   In the list of Solutions, find **_Power BI Version Control_**
*   Click the ellipsis and select edit

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-13.png)

*   The app will now open in edit mode
*   Add the SharePoint folder by following the following steps:
    1.  Open the data sources tab
    2.  Select **Add data**
    3.  Type “SharePoint” in the search bar
    4.  Select **_SharePoint_** (note: be careful **_not_** to select “SharePoint Sites”)
    5.  Choose the SharePoint connection you selected earlier
    6.  In the pane that opens, enter the URL of the SharePoint site. This should be in the format:  
        https://DOMAIN.sharepoint.com/sites/SITENAME
    7.  Click **_Connect_**
    8.  Choose the correct Document Library and click **_Connect_**

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-14.png)

*   Select the tree view and navigate to the **_Settings Screen_**

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-15.png)

*   Fix any red **X** marks on the page by updating the settings to match your folder structure (as described in the next section). If you used the default folder and document library names you should not need to update any settings

### Setting the connections

*   There are four numbered blue boxes that may require updating. If you see any red **X** marks next to any of the following boxes, click on that box and update the required property.

1.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-16.png)

Click this box and make sure **_Items_** is selected. Update the text to match the document library name (this is also the name of the data source you imported earlier). Use the IntelliSense (auto-complete) to ensure the correct value is selected. The text should turn green when correct, and the red **X** should disappear.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-17.png)

2.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-18.png)

Click this box and make sure **_OnSelect_** is selected. The formula should read Refresh(‘_\[Your Document Library\]_’). Update the text to match the document library name (this is also the name of the data source you imported earlier). Use the IntelliSense so ensure the correct value is selected. The text should turn green when correct, and the red **X** should disappear.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-19.png)

3.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-20.png)

Click this blue box (not the label) and make sure **_Text_** is selected. Update this to the checked out folder name, surrounded by double quotation marks.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-21.png)

Note: if you add a forward slash to the end of the folder name, this will add all checked out folders to the same folder. Otherwise, a sub-folder will be created for each user based on their user ID.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-22.png)

4.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/08/image-23.png)

Click this blue box (not the label) and make sure **_Text_** is selected. Update this to the published reports folder name, surrounded by double quotation marks (e.g. “Published Reports”).

*   Check that there are no red **X** marks. A red error message will also show at the bottom of the screen if there were any errors in setup. Resolve all errors before publishing.
*   Click **_File_** then **_Save_**
*   After the app has saved, click **_Publish_** to ensure all changes are deployed

* * *

## Using the App

Power BI Version Control – User Instructions (YouTube)

We recommend [embedding](https://docs.microsoft.com/en-us/powerapps/teams/embed-teams-tab) [the Power BI Version Control app in a Teams channel](https://docs.microsoft.com/en-us/powerapps/teams/embed-teams-tab). Additionally, the SharePoint site can be added to the Files section in Teams. This will allow all appropriate members to access the Power BI Version Control app and report files in one place.

#### [](https://github.com/PowerBISteve/PowerBIVersionControl#check-out)Check Out

*   Open the **Power BI Version Control** app 
*   Click the **Check Reports Out** button on the Home Screen 
*   The **Check Out Screen** will list all PBIX and PBIT files in the **Published Reports** folder. Select the reports you wish to modify in the **Check Out Reports** column. _You will only be able to check out reports that are not already checked out_
*   Click _**Check Out Reports**_ button
*   Wait a few moments for the reports to process. It may take longer if using large files

#### [](https://github.com/PowerBISteve/PowerBIVersionControl#editing-the-files)Editing the files

*   Navigate to the OneDrive folder on your local machine. The selected reports will appear in the synced folder **Checked Out Reports** (or sub-folder)
*   You can now open and edit these files. If using live connections, consider using the [Hot Swap Connections Tool](https://powerbi.tips/2020/08/hot-swap-report-connections-external-tools/)
*   If you want to save copies, you can do so in a sub-folder or elsewhere on your local machine. Avoid this when possible. We recommended to make small and frequent updates / check-ins
*   When ready, make sure _**only**_ the files that are ready for check-in are saved in **Checked Out Reports** (or sub-folder). Make sure the names of files have not been altered
*   If you manually publish reports, publish immediately before closing and checking in

#### [](https://github.com/PowerBISteve/PowerBIVersionControl#check-in)Check In

Once edits are done, Check In the reports from the **Checked Out Reports** folder to the **Published Reports** folder. Alternatively, you may wish to discard your work. As a result, this will release the file and ignore any changes you have made. Next, it will delete the file from the **Checked Out Reports** folder.

##### [](https://github.com/PowerBISteve/PowerBIVersionControl#commit-changes)Commit changes:

*   Open the **Power BI Version Control** app 
*   Click the **Check Reports Out** button on the **Home Screen** 
*   This will list all PBIX and PBIT files in the **Checked Out Reports** folder. Select the reports you wish to Check In in the **Check Out Reports** column. _You will only be able to check in reports that are checked out to you_
*   Make sure to add comments. Include details on changes you made. If using **Azure DevOps**, **Planner**, or some other project management tool, include the relevant ticket/task number(s) in your comments whenever possible
*   Click the _**Check in reports**_ button

##### [](https://github.com/PowerBISteve/PowerBIVersionControl#discard-changes)Discard changes:

*   Navigate to the **Check In** page by the button on the main page
*   This will list all PBIX and PBIT files in the **Checked Out Reports** folder. Next, select the reports with changes that you wish to discard in the **Discard Report** column. _You will only be able to discard reports that are checked out to you_
*   Confirm Discard

* * *

## [](https://github.com/PowerBISteve/PowerBIVersionControl#set-up)Helpful Tips

Also included in the app is a flow called **_Initial Step: Create Power BI Reports Library with Folders_**.

*   Open the flow and select Run
*   Paste in your SharePoint site where you wish to create the folders, site e.g. _https://powerbitips.sharepoint.com/sites/powerbi_

Running this will automatically create a library and folders in your desired site. It will use default names, which means you will not need to configure the app in the settings page after connecting to the data source.

#### Sync Folders

You should sync the **Checked Out Reports** (or sub-folder) that was created to your local machine’s OneDrive, allowing for local edits. If using sub-folders, you must check out a file once to create the folder.

_Ensure to sync only the_ _**Checked Out Reports** folder (or sub-folder)._

You can sync either through SharePoint or through Microsoft Teams.  

##### [](https://github.com/PowerBISteve/PowerBIVersionControl#from-sharepoint)From SharePoint:

*   Navigate to the correct SharePoint site
*   Select **Documents** and navigate to the **Checked Out Reports** (or sub-folder)
*   In the toolbar, select **Sync**

##### [](https://github.com/PowerBISteve/PowerBIVersionControl#from-teams)From Teams:

*   Open the Teams channel
*   In the toolbar, select **Files** and navigate to the **Checked Out Reports** (or sub-folder)
*   Select **Sync**

You can also add the files to an existing team by selecting **Add Cloud Storage**.  
Note: [See more info on syncing here](https://support.microsoft.com/en-us/office/sync-sharepoint-and-teams-files-with-your-computer-6de9ede8-5b6e-4503-80b2-6190f3354a88).

You can now access the files in this directory from the local machine.

* * *

## Limitations and Scope

**Known issues:**

The app will fail if the internal SharePoint name and the Display name do not match. This happens when a SharePoint site is created, and the display name is manually changed later. We are working on a patch for this.

If you have a very large number of reports, the app may not display all of them. We are working on a patch for this.

**Design:**

This solution is designed to handle thin report files, and not large models. The solution will copy and publish to one single folder, and is not intended to manage environments (e.g. dev / test / prod). It should be connected to a Development environment, we recommend using Power BI Deployment Pipelines to deploy reports from Dev to Test, and from Test to Prod.

The Power BI Version Control app solution performs these main tasks:

*   Check out and lock editing to a single user
*   Copy files to a local synced folder for safe editing
*   Keep version history and enforce developer comments on each check-in
