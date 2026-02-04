---
title: "PowerBI.tips"
excerpt: "This article is the second part in a series on API calls. It will look at some best practices and considerations when using API calls in Power Query...."
date: "2020-02-10"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

This article is the second part in a series on API calls. It will look at some best practices and considerations when using API calls in Power Query. While it does not serve as a definitive list, it is an important start to consider performance when using such queries.

The articles in the first part of the series can be read here:

[Historical Stock Price Function in Power Query  
](https://powerbi.tips/2019/10/historical-stock-price-function-in-power-query/)  
[Average Household Income Function in Power Query](https://powerbi.tips/2019/11/average-household-income-function-in-power-query/)

## Performance Considerations

#### **Use Batch Queries where possible**

Batch queries refer to sending information in “batches”. Making an API call requires information to be sent to an external source, that information returned, then the information parsed and then loaded. Imagine we are doing this for thousands of different dimensions. Consequently, you will have the exact same process to be repeated this many times. Instead, check in the API documentation if batch queries are available. As a result, you may be able to send many of the dimensions in the same API call. This will drastically reduce the amount of times this process happens.

#### **Use Data Factory**

Data Factory is an Azure service that offers no/low code solution to Extract, Transform and Load (ETL) or ELT (Extract Load, Transform) processes. These are called “pipelines”. Pipelines are repeatable processes that allow you to copy and move data from one source to another ([read the documentation here](https://docs.microsoft.com/en-us/azure/data-factory/)).

Let’s say you’re trying to load a high level of stock data for thousands of stocks. By doing this in Power Query may put big stress on your gateway. Your gateway may get overloaded and cannot handle sending so many complex API calls. It may be a better idea to load the data into a separate table (such as Azure Synapse). Then your power BI report can read this file directly. [Read this documentation](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/data/enterprise-bi-adf) for a good overview of this architecture.

Shifting this to the Azure cloud can leverage Data Factory’s auto-scalability and ability to handle large volumes of data. This results in a more reliable and robust process.

#### **Consider the most efficient design**

Always consider the way that will send the least number of queries. For example, if you are using historical data that doesn’t change, think if you need to refresh this data every day. In addition, try and avoid sending the same information multiple times. Do queries off unique lists.

#### **Only return the correct data**

If you load data into Power Query from a source such as SQL Server and then remove columns, a process called [Query Folding](https://docs.microsoft.com/en-us/power-bi/guidance/power-query-folding) will take place. Essentially, the data isn’t even loaded into Power Query – it edits the SQL query to not include these columns.

This can only be done on certain sources. Custom APIs will not do this. Therefore, make sure you send the correct queries. Don’t return extra bits of data that is not needed and make sure you only return columns you will use.

## Review

While this is by no way a definitive list, it should serve as a starting point to acknowledge performance considerations. Pay attention to how many queries are sent out and try to limit duplication. Remember, Power Query is a powerful tool, but make sure you are using the right tool for the job. Very large and complex operations can be improved with the help of other tools, such as Data Factory.
