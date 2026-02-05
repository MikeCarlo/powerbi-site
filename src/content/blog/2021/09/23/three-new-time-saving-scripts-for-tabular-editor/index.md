---
title: "PowerBI.tips"
excerpt: "Howdy folks!  I just published three new scripts for [Tabular Editor](https://tabulareditor.com/) to [the PowerBI.tips “TabularEditor-Scripts” reposit..."
date: "2021-09-23"
authors:
  - "Mike Carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

Howdy folks!

I just published three new scripts for [Tabular Editor](https://tabulareditor.com/) to [the PowerBI.tips “TabularEditor-Scripts” repository on GitHub](https://github.com/PowerBI-tips/TabularEditor-Scripts) yesterday. So, I wanted to take a moment to explain what they do, and why you should have them in your Tabular Editor Scripts arsenal.

1.  **[Replace String Across All Power Queries](https://github.com/PowerBI-tips/TabularEditor-Scripts/blob/master/Basic/Replace%20String%20Across%20All%20Power%20Queries.csx)**
    *   Replaces a string in Power Query on all partitions in the model
    *   Useful for automating updates to connection strings, filter conditions, etc.
2.  **[Replace Dataset Source Dataflow IDs](https://github.com/PowerBI-tips/TabularEditor-Scripts/blob/master/Basic/Replace%20Dataset%20Source%20Dataflow%20IDs.csx)**
    *   Replaces the source DataflowID & WorkspaceID on all Power Query partitions in the model
    *   Similar to the previous script, this one is specialized for automatically replacing old DataflowID and WorkspaceID references in Power Query with new ones. Helpful in situations where you need to re-deploy an existing Dataflow and Dataset to a new workspace, and then re-link the new Dataset to the new Dataflow
3.  **[Exclude Selected Tables From Model Refresh](https://github.com/PowerBI-tips/TabularEditor-Scripts/blob/master/Basic/Exclude%20Selected%20Tables%20From%20Model%20Refresh.csx)**
    *   Excludes the selected tables from model refresh
    *   Useful for quickly excluding specific tables from the model refresh, which you may need to do for any number of reasons, including troubleshooting, performance, etc.

This repo has lots of other useful Tabular Editor Scripts, and we add more every day, so check it out! Also, if you have some handy scripts of your own, you can Fork the repo and submit a Pull Request. Then, we will add your scripts to the collection.

Happy scripting, everyone!

James
