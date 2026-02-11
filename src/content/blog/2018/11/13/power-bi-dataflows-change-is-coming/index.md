---
title: "Power BI Dataflows: Change is Coming"
excerpt: "I have been holding on to a copy of Satya Nadella’s book “Hit Refresh” for quite some time. With all the Power BI goodness, the job, etc.… I just hadn..."
date: "2018-11-13"
authors:
  - "Seth Bauer"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

I have been holding on to a copy of Satya Nadella’s book “Hit Refresh” for quite some time. With all the Power BI goodness, the job, etc.… I just hadn’t gotten around to it. However, it made its way into my bag on a recent flight and I found it to be an exceptional story and a very clear view into how Satya plans to take Microsoft into the future. You might say he “open sourced” his plans. After reading this and comparing it to what I’ve been hearing and seeing regarding the fundamental changes in culture and products coming out of Microsoft, I think I’m in a familiar group of those that say he appears to be an exceptional leader who has the talent, vision, and focus to achieve the goals he has set out for himself and Microsoft.

The main three focus areas for the direction of Microsoft according to Satya revolve around Mixed Reality, Artificial Intelligence (AI), and Quantum Computing. It is important to understand this direction, because it can provide insight into the changes we see in product suites and what future these changes might hold. Setting aside Mixed Reality and Quantum Computing for the moment, we’re already being exposed to how AI is starting to augment Power BI. The latest announcements at PASS Summit revolve around exposing AI delivery mechanisms to business users via [Automated Machine Learning features](https://docs.microsoft.com/en-us/business-applications-release-notes/october18/intelligence-platform/power-bi-service/automated-ml-dataflows) to gain even deeper insights. The work to introduce AI automatically into the tool is already present in features like Explain the Increase/Decrease, Quick Insights and Q&A. Innovations in bringing AI into reporting and analytics is going to continue to change how we look at information in a future that is much closer than I think many are prepared for.

With the book in mind I was also doing a lot more study in architecture and design in the Azure ecosystem and strengthening my understanding of how the modern data platform is built and can expand to support multiple business needs. Without getting too involved, the overall gist of what I’m seeing is that the process of data ingestion, movement, transformations and storage are being made easier. The 2nd generations of the initial services are being rolled out and the suite of services are starting to do a large part of the heavy lifting in some of the most challenging areas. As a result, these services have a greater potential for wider adoption and becoming a large part of newer modern solutions. In addition, after tying all the services together from source to analytics I started to see a specific service that could be considered the hub for all this analytics activity. Azure Data Lake Storage Gen 2. This service is certainly being positioned as the main storage entity and seems to hold the architectural location as the de facto place where both Enterprise and Business are being funneled for interaction. Data cleansing, machine learning, warehousing, event hubs, etc., etc. can all pull/push from Azure Data Lake Storage Gen 2, and these interactions and manipulations are being made easier with each release.

Taking what we understand about the overall goals of Microsoft, the centralization around a hub data and activity begins to not just make sense, but be a pivotal part of enabling future objectives to grow and be accessible to every business. Getting “All” of your business data in a single location for analysis will allow you to leverage current and future services to enhance and make use of AI and other technologies quickly, more efficiently and at a much lower cost.

Power BI Dataflows is the first step in integrating the business into this ecosystem. Power BI Dataflows leverage a familiar product in Power Query, to connect to many sources and perform Extract, Transform and Load operations. They allow flexibility to map data to existing data entities and create new entities that have the potential to streamline and consolidate data silos. These objects that are the result of data flows are stored as CDM folders in Power BI.

![CDM Structure](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2018/11/CDM-Structure-1024x542.png)

**_CDM Structure_**

Two main things to hit here: First, a CDM folder consists of a CSV file for your data, and a model.json structure for metadata definition. Second, “in Power BI” means Azure Data Lake Storage Gen 2 behind the scenes, Microsoft just creates it for you so you don’t need it as a separate service if you aren’t using it for anything else.

Where this new feature gets exciting is when it is used with your own Azure Data Lake Storage Gen 2. Power BI can connect to your existing Azure Data Lake Gen 2 storage instead and the CDM folders will be put there. This brings the business user into the Enterprise space and allows IT, Data Scientists and business users to collaborate in a single data repository. In addition to the above, we’ve already heard earlier this year that all of Dynamics and now 3rd party line of business and collection tools like SAP and Adobe will also plug into the Azure Data Lake Storage Gen 2 using the CDM folder structure. This means data will be constantly being added to the entities themselves. Power BI Dataflows offer up a unique opportunity to bridge some of the widest gaps that exist between business and IT in the data space.

![CDM Architecture](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2018/11/CDM-Architecture-1024x488.png)

_**CDM Architecture**_

For more details on how to use data flows be sure to check out Matthew Roche’s video here -> [https://www.youtube.com/watch?v=0bJpCVj3JfQ](https://www.youtube.com/watch?v=0bJpCVj3JfQ)

And for the full technical details, take a look at the “Power BI and Dataflows” Whitepaper here by Amir Netz -> [https://docs.microsoft.com/en-us/power-bi/whitepapers](https://docs.microsoft.com/en-us/power-bi/whitepapers)

In short order, to be at the top of the competition you’ll have to use Artificial Intelligence to be competitive and stay relevant, and I assume Mixed Reality is going to be a part of that as well. I would argue that what we are seeing here are the building blocks for that future and the efforts to adopt these services will allow us to make exponentially faster gains in analysis and decision making that will give businesses significant competitive advantages. Power BI is front and center in this endeavor as the analytics platform, and that should make any user of the tool excited indeed.

The preview of Power BI Dataflows is out, based on how these pieces are falling into place across the board, and understanding the direction of Microsoft based on where the ship is being steered, I have a strong inclination that we’re going to be busy re-architecting solutions very soon and that platforms of services will allow businesses to make even more rapid innovations and advancements in their data journey’s. Power BI has already made for a fun ride, but this last month has me feeling like I may have just strapped a rocket to my back that is now being prepped for ignition.

_This is an opinion piece, and as such, I reserve the right to change my opinion as more information is learned. That being said, I’d love to hear feedback from you the reader if you have any on the subject._
