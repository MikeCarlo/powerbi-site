---
title: Power BI Architecture in a Data Solution
excerpt: This article will focus on Power BI architecture within a data solution.   In
  this context, Power BI architecture describes how Power BI can slot in a...
date: '2020-12-13'
authors:
- Mike Carlo
categories:
  - "Articles Opinions"
tags:
- power-bi
featuredImage: ./assets/featured.png
---

This article will focus on Power BI architecture within a data solution.  
In this context, Power BI architecture describes how Power BI can slot in as a piece of this strategy. For instance, this includes not only the reports, but the data retrieval, storage and machine learning involved. Next, it discusses different roles and responsibilities involved. This can expand on Power BI skills, looking at the entire solution.

In addition, we hope it to provide ideas for current developers looking to expand Power BI skills or change directions in their career. It can provide a look at areas of need in organizations and give thought of learning opportunities available.

## Power BI is Greater than a Report

[In my previous article](https://powerbi.tips/2020/10/power-bi-is-part-of-the-greater-data-solution), I discussed how Power BI should not be thought of as a separate product to ETL, AI/ML or overall data strategy. Rather, organizations need to include Power BI architecture as part of a data culture with all of the products working in union.  
  
As a recap from the last article, a modern data platform typically has 4 steps:

*   _Load and Ingest_ – extract the data out of the source system and transform it.
*   _Store_ – Land this data somewhere so we can run analysis on it.
*   _Process (or transform)_ – Run analytics on your data and draw out KPIs, AI and predictions.
*   _Serve_ – present this data in an easily way for stakeholders to consume it.  
    

#### Medium Size – Power BI Services

![Power BI dataflow Architecture](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-7-1024x574.png)

It is possible to implement a reporting strategy entirely in Power BI. First, we can load data using dataflows. Next, these can be stored as a dataflow in the service or backed by Data Lake Gen 2 storage. It is good practice to separate our Power Query models and reports.

#### Large Size – Azure Services

![Power BI azure synapse architecture](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-6-1024x577.png)

Sometimes, we want to use more services than just Power BI. This may be due to huge datasets, use of data in other applications, or writing custom machine learning. The above diagram shows an enterprise scale reporting solution. Azure data factory can move and transform the data. Afterwards, we can store in a variety of storage options, depending on the nature of the data. Many options are available to run machine learning on the data. This ranges from custom code to autoML. Lastly, we create data models and we can produce reports off them. This integrates the Power BI architecture into a whole reporting solution. There is also a path for streaming data – through Event hub and Stream analytics.

Azure has a host of services available. If you are new to these, it can seem a lot to learn. Luckily, Microsoft are rolling out Synapse! This includes a portal that houses many of these services, enabling you to use them all in a single place. If interested, Nicola Ilic I has a [great series](https://datamozart.medium.com/power-bi-synapse-part-1-the-art-of-im-possible-aee1cec5ebfa) on Synpase and Power BI.

## Different Roles in a Data Solution

If we want to design a data culture, we often need more roles and skills than just designing reports. The below list looks to identify some different roles and responsibilities in a data solution. This is not intended to be a fully comprehensive list. Rather, we explore some different and common roles that could be involved within a project.

It is unlikely a single project will require all roles. Usually, one person may take on two or more of these roles. Instead, the aim is to distinguish different areas of the data strategy. This can help us to view Power BI in the bigger picture, seeing where it fits in.

We will look at the following architecture – a company that uses Synapse as well as dataflows. For simplicity, we are not looking at any streaming reports. In this diagram the dataflows storage is implied to make the diagram easier to understand.  

![Power BI architecture in a data solution](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-15-1024x522.png)

Each role will look at some common responsibilities and skills. It will also highlight the area in the above architecture diagram that they are responsible for.

### Power BI Developer

The Power BI Developer is responsible for building and owning data models for KPI and user reports. Therefore they will spend large parts of their time modeling and transforming data in Power Query or dataflows. In addition, a BI developer has good understanding of tabular models and how to write custom business logic in DAX. They may also be required to set up the Power BI architecture.

#### Skills

Expert in Power Query and DAX. Familiarity in tabular editor and DAX Studio. Plus knowledge on database designs and tabular modeling such as implementing good STAR schema. Great Power BI skills and ability on Power BI desktop.

![Roles of a Power BI developer](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-9-1024x536.png)

Roles of a Power BI developer

### UI/UX Engineer

In larger projects, report design can benefit from a UI/UX specialist. Power BI developers will often complete this, but specialists can be brought in to help design layouts, flow and brand consistency within the project.  Usually, the Power BI developer will look after the models and logic. However, the UI/UX Engineer helps make sure the final reports are professional looking. In addition, they can be involved in storyboarding the design of reports. A UI/UX specialist is needed for projects with many reports, external facing reports or embedded solutions.

#### Skills

Design skills as in products such as Adobe Illustrator. Dashboard design (such as gestalt principles).

![Roles of a UI/UX developer ](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-10-1024x552.png)

Roles of a UI/UX developer

### Data Engineer

A Data Engineer is responsible to get the data from the source and load it into Power BI. Smaller reporting projects may use only dataflows or power query, but larger ones might require more steps. The Data Engineer will move the data using tools such as data factory into a SQL database or Synapse storage. This allows larger enterprise solutions with massive volumes of data, or for complex machine learning to be performed on the data. In addition, Data Engineers will transform and clean the data making it suitable for reporting analysis or machine learning. They will then integrate this back into the solution.

#### Skills

Tools such as Azure Data Factory, Stream Analytics, Data Lakes or other data storage. In some projects a Data Engineer might work exclusively with dataflows or Power Query. Databricks, Spark Analytics and SQL are important for prepping and transforming big data. Engineers also can benefit from automating in languages such as PowerShell.  Strong Power BI skills.

![Roles of a Data Engineer ](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-11-1024x531.png)

Roles of a Data Engineer

### Data Architect

Data Architects are responsible for designing, managing and maintaining the reporting solution.  Architects will suggest the best selection of tools and methods used. They would be the ones to recommend the team involved, the technologies used and the correct approach. Overall, they will set up the Power BI Architecture and machine learning solution.

#### Skills

Architects need to have vast knowledge and experience across all the technologies that can be used. This includes deep knowledge on Azure or Synapse, Power BI and data governance methodologies. They have solid understanding how machine learning can be integrated into a solution.

![Roles of a Data Architect](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-12-1024x530.png)

Roles of an Data Architect

### AI Engineer

You may incorporate an AI Engineer in large projects that have a machine learning focus. Data Scientists spend large amounts of time writing custom algorithms. In contrast, AI Engineers use tools such as Azure cognitive services or Azure machine learning studio. On large projects they may work in tandem with Data Scientists helping to merge their code into the reporting system. They often spend time cleaning, transforming and prepping data. In many cases, this job is regularly undertaken by Data Engineers. However, projects with a heavy AI focus may benefit on having an AI Engineer or both a Data and AI Engineer.

#### Skills

While AI Engineers may not write custom algorithms from scratch, they need a solid understanding of machine learning principles. They also need to know how to prepare and clean data ready for machine learning solutions.

![Roles of an AI Engineer ](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-13-1024x538.png)

Roles of an AI Engineer

### Data Scientist

The data science field has exploded in popularity over the recent years. Typically, a Data Scientist will spend their time cleaning, prepping and analyzing large volumes of data. Next, they write custom algorithms that can detect deeper insights. A Data Scientist often has years of experience and training coming from various backgrounds. Data Scientists write custom code in Synapse, Databricks or Apache Spark notebooks.

#### Skills

Expert in an analytical programming language, typically R or Python. They will have a unique blend of programming skills and statistics. Deep knowledge of designing and implementing different machine learning algorithms. In addition, they will be proficient at cleaning and preparing data.  

![Roles of Data Scientist in Power BI](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2020/12/image-14-1024x536.png)

Roles of a Data Scientist

## Conclusion

As we can see, there can be many different roles involved in a data solution. Many times, one must wear many hats. Other times, organizations can benefit from having several specialists in different areas.

Microsoft is looking to unify the Power BI architecture and overall data solution through Synapse. This portal will make these roles easier to be completed by fewer people within the same portal. Still, there will always be a need for specialists. So if you are looking to expand your power bi skills, or finding new areas to expand into, make sure you familiarize yourself with these.
