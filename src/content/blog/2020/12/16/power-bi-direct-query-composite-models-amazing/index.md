---
title: Power BI Direct Query Composite Models = Amazing
excerpt: Well Microsoft has done it again. They have added a great feature in the
  Power BI desktop release for December 2020. Direct Query to Power BI data sou...
date: '2020-12-16'
authors:
- Mike Carlo
categories:
  - "Building Reports"
tags:
- power-bi
featuredImage: ./assets/featured.png
---

Well Microsoft has done it again. They have added a great feature in the Power BI desktop release for December 2020. Direct Query to Power BI data sources is a thing. As a result, this means we unlock new Architectural patterns.

## Enterprise Modeling

In the Microsoft Release notes we get a glimpse of our new normal. Previously, Power BI datasets could only direct query certain data sources. Here is a [full list of data sources for Power BI Desktop](https://docs.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources). The Enterprise Sematic model is simply larger view of a data model.

![Sample Direct Query diagram](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-16.png)

Read more about Composite [Models on the 2020 Power BI release plan](https://docs.microsoft.com/en-us/power-platform-release-plan/2020wave2/power-bi/direct-query-over-power-bi-azure-analysis-services?_lrsc=3af8827f-24a4-4982-8d6a-4130a9fbb2b9).

## What is a Power BI Composite Model?

Quick background on Composite Models. A Composite model is a data model. More specifically, a Power BI data model. Typically Power BI models have multiple data sources. Such as, Excel, or SQL server. For certain data sources we load data in one of two ways, Importing, or Direct Query. The Import method loads data into the Power BI file. While, Direct Query leaves the data inside the data source, but sends queries to retrieve data on demand. Learn more about [Import](https://powerbi.tips/2017/11/power-bi-connections-import/) and [Direct Query](https://powerbi.tips/2017/11/power-bi-connections-import/) in these articles.

Read more about Composite models from the [Microsoft documentation found here](https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-composite-models).

### Why is this Important?

When we think of an organization there are likely hundreds of data models. These data models support by many different teams. Each model is solves some sort of problem. As an example, we can think about models developed for Human Resources. The Human Resource model informs the HR team about acquiring new talent, or track an interview process. Other teams such as Engineering track spend or project details.

![Organization Reporting](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-17.png)

Using this method, imagine a user who needs to see data from both human resources and engineering. Thus, a user would need to visit two different reports. Obviously value can given by combining multiple data models. This would enable the creation of a single report using data from both sources.

## Direct Query for Power BI datasets

Now, lets consider the Enterprise Data model. In the Microsoft documentation this is called the Enterprise Semantic Model. We can think of the Enterprise Semantic Model as storing metadata linking tables of data and storing relationships between tables. Direct Query to PowerBI.com now lets us make models of models.

From our previous example now consider this architecture.

![Direct Query used on PowerBI.com data models](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-18.png)

Report builders can now create a single model that queries other data models. This provides data from multiple subject matter areas. Thus, enabling a single report to combine data from multiple locations.

## Centrally Managed Models

Often in larger organizations there will be different teams creating models. This means, you might not have access to modify an Enterprise build model. Again, Direct Query to models to the rescue. As a report author, I want to reuse an existing model. However, I would like to add more data to the model that would enrich my reporting. This may come in the form of a connected excel document. For this architecture consider the following diagram.

![Referencing an Enterprise model and adding supplement data through direct query](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-19.png)

This new architecture is the ultimate success for self service business intelligence. Enterprise governed models can be enhanced by business users. Therefore, providing flexibility while controlling model governance and standards.

### More Architecture thoughts

Power BI is evolving at a rapid pace. Because of this, Power BI is rapidly becoming one of the key tools. Therefore, more thought to Enterprise Architecture must be considered. Learn more about key architectural decision points in our previous articles, [Data Architecture](https://powerbi.tips/2020/12/power-bi-architecture-in-a-data-solution/), and [The Greater Data Solution](https://powerbi.tips/2020/10/power-bi-is-part-of-the-greater-data-solution/).

### Composite Models Conclusion

These are just some of my initial thoughts on this amazing new world we have. There will likely be many more designs and implementations from the community of Power BI developers. I’m extremely excited to see other patterns emerge from using Direct Query against Power BI datasets.

Read more from the official blog release and Microsoft documentation:

*   [December Feature Release notes](https://powerbi.microsoft.com/en-us/blog/power-bi-december-2020-feature-summary/)
*   [Direct Query for Power BI Data Models](https://powerbi.microsoft.com/en-us/blog/directquery-for-power-bi-datasets-and-azure-analysis-services-preview/)
