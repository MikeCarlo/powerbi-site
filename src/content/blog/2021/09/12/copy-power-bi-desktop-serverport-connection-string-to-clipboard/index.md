---
title: "Copy Power BI Desktop Server:Port Connection String to Clipboard"
excerpt: "Howdy, folks!  A few months ago, I was writing and running various PowerShell scripts to manipulate the connected data models in my Power BI Desktop f..."
date: "2021-09-12"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Howdy, folks!

A few months ago, I was writing and running various PowerShell scripts to manipulate the connected data models in my Power BI Desktop files. During model development, I was constantly having to open DAX Studio to copy the Server:Port connection string, and thinking, “there’s got to be a faster way to do this.”

So, I developed and released [a simple External Tool for Power BI Desktop](https://gist.github.com/JamesDBartlett3/82e3889f4dc741b4e1109595b0752d6c), which copies the Server:Port connection string for the currently-connected data model directly to the clipboard.

I’m a strong believer in modular design, so when I build something, I try to make it do one thing, and do it well. I believe this External Tool for Power BI Desktop is a great example of that philosophy in action.

This external tool is now in the [Business Ops tool from PowerBI.tips](https://powerbi.tips/product/business-ops/).

Enjoy!

James
