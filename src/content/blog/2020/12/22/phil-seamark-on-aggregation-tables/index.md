---
title: "PowerBI.tips"
excerpt: "I was having a candid conversation with Phil Seamark from [DAX.tips](https://dax.tips/) about Aggregation Tables. During that conversation, I was aski..."
date: "2020-12-22"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

I was having a candid conversation with Phil Seamark from [DAX.tips](https://dax.tips/) about Aggregation Tables. During that conversation, I was asking about patterns in using Aggregation tables. Within that 10 minute conversation I was blow away by all the possible patterns. Because of this, we pleaded for Phil to present these patterns to the [Milwaukee Brew City User Group](https://www.linkedin.com/company/milwaukee-brew-city-pug).

## Patterns in Aggregation Tables

Watch the [full webinar](https://youtu.be/-UQYKmF72Ek) below from our user group:

## Aggregation Patterns

While these patterns are described in detail here are the various patterns that can be used for Aggregation tables. Also, Phil includes a great [introduction, found here](https://dax.tips/2019/10/18/creative-aggs-part-i-introduction/). For each of these articles Phil describes proper usage for the pattern.

[Horizontal Aggs](https://dax.tips/2019/10/21/creative-aggs-part-ii-horizontal-aggs/)

The Horizontal Aggs is typically developed using a time dimension. Thus, most aggregation tables would fit this pattern.

![Example of a horizontal Aggregation table](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-22.png)

[Accordion Aggs](https://dax.tips/2019/10/25/creative-aggs-part-iii-accordion-aggs/)

The Accordion Aggs are similar to a horizontal Agg. However, the time periods are not equal.

![Accordion Aggregation table. Non uniform incremental aggregations.](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-23.png)

[Filtered Aggs](https://dax.tips/2019/10/30/creative-aggs-part-iv-filtered-aggs/)

The Filtered Aggs would contain multiple Aggregation tables of the same data. But, each Agg table could contain different gains of data. For Example, data aggregated by Week, Month or Year.

![Filtered Aggregation example.](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-24.png)

[Incremental Aggs](https://dax.tips/2019/11/11/creative-aggs-part-v-incremental-aggs/)

Finally, the Incremental Aggs. This type of aggregation would be used when aggregating transactions per day by store, and or product.

![Incremental Aggregation where you can aggregated transactions over time](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-25.png)

## Thanks Phil

A special thanks to Phil for presenting. Since, we know you are a busy guy doing tons of great work. Thank you for taking time out of your day to present this wonderful topic. We hope you enjoy this exploration into Agg Tables.

#### Check out Phil’s other contributions

Phil has been quite active on the PowerBI.tips site. C[heck out all his other fun contributions](https://powerbi.tips/product-tag/phil-seamark/).

## Like and Follow
