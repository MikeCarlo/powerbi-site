---
title: "PowerBI.tips"
excerpt: "Shared datasets are a great way to share data models across the organization. This enables users to maintain one source of the truth and increase effi..."
date: "2020-06-08"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Shared datasets are a great way to share data models across the organization. This enables users to maintain one source of the truth and increase efficiency. However, models should be built separate to reports. Meaning it can be difficult to transform an existing report into a shared dataset.

This post describes how to split a pbix file with report and model, into two separate files One for the model and one for the report. This is accomplished using a PowerShell Script. By using this technique any report can quickly be split into a data model file and live connection report file.

_Note: that this script is not officially supported by Microsoft. This code is provided as is without any guarantees. The code will alter the internal files, so please keep a backup if you are unsure of anything._

## Think like the Business, Act like I.T

Being a great Power BI developer can often mean more than just building visually impressive reports. Focus should be given to efficiency, reusing design and data modelling where possible. In addition, there should be “one source of the truth” – different reports should not have different methods to calculate the same KPI.

This is accomplished by the creation of Shared Datasets. Users can publish a report that contains no visuals, only a data model. Multiple reports can then be built off this model by using a live connection and use the same data model. The model contains global measures. A Global measure is written and stored in the model file. Then the Global measures are re-used by other reports via the Live Connection. This ensures all reports have the same data model, logic and refresh status.

There are many reasons you should consider this approach, which is out of scope for this article. If you are less familiar with shared datasets, I encourage you to visit the following resources:

[Think like the Business, Act like I.T user group – global models  
](https://youtu.be/ykRKkwEKhmo?t=2857)  
[Power BI datasets: A Method to the Madness article](https://powerbi.tips/2019/10/power-bi-datasets-a-method-to-the-madness/)  
  
[Planning A Power BI Enterprise Deployment whitepaper DOWNLOAD](https://aka.ms/PBIEnterpriseDeploymentWP)  
[( Chris Webb and Melissa Coates)](https://aka.ms/PBIEnterpriseDeploymentWP) – section 9

## Use Cases

Shared datasets are great, but what if you already have a file with a model and report in one? Currently in order to split a file this would need to be manual, by either copying all the visuals over to a new report (you would also need to re-record any bookmarks, filters, layouts etc. ) or to copy all the Power Query queries (you would then need to set up relationships and re write all measures). This can be time consuming, especially on a large report or model.

Luckily for you, this code will do all the hard work for you. Simply run the code and select a PBIX file. It will create two new files, a report and a model.

## Running the code

**Right click** and **select** the option **Run with PowerShell** in the menu.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/06/image.png)

A menu will open up. **Select** the power bi file that you wish to split.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/06/image-1.png)

**Click** the button **OPEN** to allow the script to modify your file.  
  
The script will then create two copies of the file and add the suffix \_model and \_report. Feel free to **rename** these, if you desire.

## Publishing to the Service

**Model File**

**Open** the \_model file. It’s a good idea to add some text to the report explaining this is only a model file, so others understand the purpose. Example:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/06/image-5-1024x535.png)

**Publish** this file to the desired workspace.

**Report File**

**Open** the \_report file. The script will leave all visualizations and report features intact, but all connections will be removed. When you open the report in power bi desktop, all visuals will appear broken:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/05/Annotation-2020-05-28-225206.png)

If prompted, make sure you **discard** changes – this will completely detach the report from the source.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/06/image-4-1024x152.png)

  
**Click** Get Data and **Select** Power BI Datasets.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/06/image-2.png)

In the pop up window, **select** the model report you published in the previous step. This will now restore all visuals to display again.

**Publish** the report to the desired location.  
  
That’s it! you can now share your new model file and continue to build reports off it.

## Download the Script

[You can download the script described below](https://pbitipsblob.blob.core.windows.net/externalshare/SplitReportsFiles.ps1)

**Download** the PowerShell file and **save** it to your local machine.

## Script

```
#This script was designed by Steve Campbell and provided by PowerBI.tips
#BE WARNED this will alter Power BI files so please make sure you know what you are doing, and always back up your files!
#This is not supported by Microsoft and changes to future file structures could cause this code to break

#--------------- Released 6/2/2020 ---------------
#--- By Steve Campbell provided by PowerBI.tips ---


#Choose pbix funtion
Function Get-FileName($initialDirectory)
{
    [System.Reflection.Assembly]::LoadWithPartialName("System.windows.forms") | Out-Null
    
    $OpenFileDialog = New-Object System.Windows.Forms.OpenFileDialog
    $OpenFileDialog.initialDirectory = $initialDirectory
    $OpenFileDialog.filter = "PBIX (*.pbix)| *.pbix"
    $OpenFileDialog.ShowDialog() | Out-Null
    $OpenFileDialog.filename
}


#Error check function
function IsFileLocked([string]$filePath){
    Rename-Item $filePath $filePath -ErrorVariable errs -ErrorAction SilentlyContinue
    return ($errs.Count -ne 0)
}


#Function to Modify files
Function Modify-PBIX([string]$inputpath, [string[]]$filestoremove){

    #Make temp folder
    $temppth = $env:TEMP  + "\PBI TEMP"
    If(!(test-path $temppth))
    {New-Item -ItemType Directory -Force -Path $temppth}

    #Unpackage pbix
    $zipfile = ($inputpath).Substring(0,($inputpath).Length-4) + "zip"
    Rename-Item -Path $inputpath -NewName  $zipfile
              
    #Initialise object
    $ShellApp = New-Object -COM 'Shell.Application'
    $InputZipFile = $ShellApp.NameSpace( $zipfile )

    #Move files to temp
    foreach ($fn in $filestoremove){ 
       $InputZipFile.Items() | ? {  ($_.Name -eq $fn) }  | % {
       $ShellApp.NameSpace($temppth).MoveHere($_)   }  
    }
    
    #Delete temp
    Remove-Item ($temppth) -Recurse
    
    #Repackage 
    Rename-Item -Path $zipfile -NewName $inputpath  
}




#Choose file
try {$pathn = Get-FileName}
catch { "Incompatible File" }


#Check for errors
If([string]::IsNullOrEmpty($pathn )){            
    exit } 

elseif ( IsFileLocked($pathn) ){
    exit } 

#Run Script
else{    

    #set variables
    $modelfiles   = @( 'SecurityBindings', 'Report')
    $reportfiles   = @('Connections','DataModel',  'SecurityBindings')
    
    #Copy files
    $pathf = Get-ChildItem $pathn
    $reportname = [io.path]::GetFileNameWithoutExtension($pathn)
    $model = ($pathf).toString().Replace('.pbix', '_model.pbix')
    $report = ($pathf).toString().Replace('.pbix', '_report.pbix')    
    Copy-Item $pathn -Destination $model
    Copy-Item $pathn -Destination $report

    #modify files
    Modify-PBIX $model $modelfiles
    Modify-PBIX $report $reportfiles
    
}


```

## Script Usage License

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
>   
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
>   
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
