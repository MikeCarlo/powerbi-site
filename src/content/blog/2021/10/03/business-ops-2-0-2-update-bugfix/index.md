---
title: "PowerBI.tips"
excerpt: "**UPDATE**: All downloads for business ops has moved to github releases page dedicated to this project here: [https://github.com/MikeCarlo/BusinessOps..."
date: "2021-10-03"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

**UPDATE**: All downloads for business ops has moved to github releases page dedicated to this project here: [https://github.com/MikeCarlo/BusinessOps/releases](https://github.com/MikeCarlo/BusinessOps/releases)

Howdy folks!

We have just published a bugfix release for Business Ops; [Version 2.0.2 is now available for download](https://github.com/MikeCarlo/BusinessOps/releases). Please see the instructions below for details.

## Instructions

If you have installed Business Ops 2.0 or 2.0.1, you should use the “Edit External Tools” menu to remove the External Tools you have installed, then close and uninstall Business Ops.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-1-1024x989.png)

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2021/10/image-3-1024x804.png)

Then, just [download and install the latest version of Business Ops](https://powerbi.tips/product/business-ops/), and reinstall your favorite External Tools. That’s it!

## What Happened?

In previous versions of Business Ops, its installation path was **_C:\\Users\\<Username>\\AppData\\Local\\Programs\\pbi-tips-business-ops\\_**, which could be accessed by any process running on the machine. This struck us as somewhat insecure, so we decided to beef up the security. When we released Business Ops 2.0, we changed the installation path to **_C:\\Program Files\\PowerBI.tips Business Ops\\_**, which requires elevated permissions to modify any files inside. This change increased the security of Business Ops, but those of you who are familiar with how file paths work can probably guess how it also had some other, unintended consequences. For those who aren’t, here’s what happened:

The installation path in previous versions did not have any spaces in it, and everything was working fine. But when we changed the installation path to one that includes spaces, several of the included External Tools in Business Ops stopped working. This wasn’t immediately obvious because it only affected the handful of External Tools which launch a PowerShell script by calling its absolute path. Once we identified the cause of the issue, the fix was pretty straightforward, and we got everything working again.

Thanks for reading!

James
