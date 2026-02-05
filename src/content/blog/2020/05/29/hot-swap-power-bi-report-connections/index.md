---
title: "PowerBI.tips"
excerpt: "Let’s say you have a Power BI file connected to an Analysis Services machine. Then you want to change the data source to PowerBI.com using a Live Conn..."
date: "2020-05-29"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Let’s say you have a Power BI file connected to an Analysis Services machine. Then you want to change the data source to PowerBI.com using a Live Connection. Well, you are out of luck. Until NOW!!

This post describes how to remove a connection from a report using a PowerShell Script. This means any source you can just delete the data source and then re-point your report.

_Note: that this script is not officially supported by Microsoft. This code is provided as is without any guarantees. The code will alter the internal files, so please keep a backup if you are unsure of anything._

## Use Cases

Image the following diagram. Here we have a Power BI Report Connected to an analysis services model. Now, you wish to re-point the model to a Power BI dataset.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/05/Re-Point-Data-Connection.png)

_Note: we assume the analysis services model and the Power BI dataset model have the same definition. Meaning all the columns and measures are the same._

The below script removes connections Power BI Report.

## Download Script

[Download the Power Shell Script here](https://pbitipsblob.blob.core.windows.net/externalshare/StripPowerBIConnection.ps1)

_Note: Running it on a file without a live connection will not have an effect on the file._

## Running the code

**Download** the PowerShell file and **save** it to your local machine.

**Right click** and **select** the option **Run with PowerShell** in the menu.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/05/1.png)

A menu will open up. **Select** the power bi file that you wish to remove the connection from.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/05/2.png)

**Click** the button **OPEN** to allow the script to modify your file.

The script will leave all visualizations and report features intact. But, all connections will be removed. When you open the report again in power bi desktop, all visuals will appear broken:

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/05/Annotation-2020-05-28-225206.png)

This is because you have removed all data from the report. **Select** a new data source to connect the report to. If the new source matches the names of the columns and measures used in the visuals, they will all repopulate.

## How the Code Works

Internally, PBIX files contain a selection of metadata and media files. The files are zipped and packaged into a pbix file.  
  
The PowerShell script will alter these internal files, removing the Connections file which holds the information to the live connection.  
  
It then removes a security file, SecurityBindings, that is necessary to remove in order to not corrupt the file. SecurityBindings will be repopulated the next time you edit and save the file.

## Script

```
#This script was designed by Steve Campbell and provided by PowerBI.tips
#BE WARNED this will alter Power BI files so please make sure you know what you are doing, and always back up your files!
#This is not supported by Microsoft and changes to future file structures could cause this code to break

#--------------- Released 5/28/2020 ---------------
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
   
    #Unzip pbix
    [Reflection.Assembly]::LoadWithPartialName('System.IO.Compression')
    $zipfile = $pathn.Substring(0,$pathn.Length-4) + "zip"
    Rename-Item -Path $pathn -NewName  $zipfile

    #Delete files
    $files   = 'Connections', 'SecurityBindings'
    $stream = New-Object IO.FileStream($zipfile, [IO.FileMode]::Open)
    $mode   = [IO.Compression.ZipArchiveMode]::Update
    $zip    = New-Object IO.Compression.ZipArchive($stream, $mode)
    ($zip.Entries | ? { $files -contains $_.Name }) | % { $_.Delete() }

    #Close zip
    $zip.Dispose()
    $stream.Close()
    $stream.Dispose()

    #Repackage and open
    Rename-Item -Path $zipfile -NewName $pathn 
    Invoke-Item $pathn 
}
```

## Editing the Code

The code runs on [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7). PowerShell is a cross-platform task automation and configuration management framework, consisting of a command-line shell and scripting language.

If you want to view or edit the code, first **open** [PowerShell ISE](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/ise/introducing-the-windows-powershell-ise?view=powershell-7). We recommended to _**run as administrator**_. Afterwards, you can **paste** the code below into the editor.

## Other Considerations

The script can be useful when using two power bi files for development and deployment to the PowerBI.com service. In this use case you will have one Power BI that is the bifurcated model and one report that has just report pages. To speed up development you can Open both the Model file and the Report file. The Report file can point to a LocalHost version of the running Analysis Services.

Here is an example of what this architecture would look like.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/05/Re-Point-Data-Connection-–-1-1024x378.png)

## Script Usage License

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
