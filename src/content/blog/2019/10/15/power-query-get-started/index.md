---
title: "PowerBI.tips"
excerpt: "As a user that builds Power BI reports, did you know the different technologies that come into play when you interact with the tool? This is one of th..."
date: "2019-10-15"
authors:
  - "mike-carlo"
categories: []
tags:
  - "power-bi"
featuredImage: ""
---

As a user that builds Power BI reports, did you know the different technologies that come into play when you interact with the tool? This is one of the first questions I ask to new audiences or people I’m training on Power BI. Why is this important? The reason is that it is crucial to understand what part of the tool you are in so that you can separate out the different tasks that you should be doing or trying to accomplish in each area. The other biggest reason is you need to know what you should be searching for in your favorite web browser when you are looking for answers to your current problem.

With that said, there are two main components to the Power BI Desktop, Power Query (aka. Edit Queries) and the Tabular Model that you have access to in the main part of the tool. I’ll mention the tabular model first, but we won’t be diving into that in this article. It is responsible for compressing our dataset and gives us the speed we see over all the data we want to slice and dice. We can create relationships in our model window, and we can create additional calculations to extend our original dataset by using measures or calculated columns. The underlying language in the Tabular model is “DAX”.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/model.png)

model

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/measures-and-calculated-columns.png)

measures and calculated columns

Power Query is our ingestion engine, it connects to our data sources and allows us to perform the ETL (Extract, Transform, Load) activities on our raw datasets. This is extremely helpful and an absolute must to create clean data, and shape it into the best form for loading our models that we want to work with in our reports. The underlying language in Power Query is called “M”. When you toggle open edit queries

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/edit-queries.png)

edit queries

You are presented with a new window that makes a clean separation between the two interfaces. Connecting to or creating data creates a new query, clicking the “Advanced Editor” will open another popup window where we can see the “M” code for all of the steps we have taken in that query. Most of everything you do in Power Query will be in the interface as you get started, but getting to the point of understanding how to manipulate the code in the Advanced Editor will change the way you can build reports immensely.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/advanced-editor.png)

advanced editor

The vast majority of Power BI users are extremely new to Power Query, so today I wanted to spend a little time talking about a book that has helped me immensely in understanding how to get the most out of that aspect of the tool.

One of the best things you can do when trying to understand something is to get an expert to show you how to do it, whether that is in a class setting, a presentation or a book. They have knowledge around the area and can streamline your learning process. There are people who learn in different ways, but I would argue that each type has different levels of retention. For instance, when I go to a session that is heavy in coding and techniques, I take a bunch of notes because I know that while it all makes sense in the session, I’ll forget the specifics and have to refer to my notes when I need to apply what I learned. The same goes with books I read, I grab snippets of techniques and write down a bunch of reference things for later. Whereas, if I go to a class and have to walk through the steps on my own or take them away as homework, it forces me to practically walk through an exercise and the steps in order to complete it. Doing this locks the technique in, and I’m able to recall how to do it when I need it instead of having to look things up again.

If you are serious about getting better at the ETL portion of your Power BI report building there are numerous resources out there, but today I’d like to spend some time talking about one in particular that I would highly recommend authored by Gil Raviv.

_(Disclaimer: Gil Raviv is a friend, and his book was gifted to me)_

Suffice to say Gil is one of the best to learn from since he was part of the MSFT team that created Power Query. To read more about Gil, check out his bio on his website here -> [https://datachant.com/about/](https://datachant.com/about/)

https://www.amazon.com/Collect-Combine-Transform-Business-Skills/dp/1509307958/ref=cm\_cr\_arp\_d\_product\_top?ie=UTF8

The main reason I’m recommending this method to learn is that it isn’t JUST a book. Think of this as an instructional class, where you have a bunch of material for both preparation and homework. What Gil does here is amazing from a sharing perspective. Along with the book, you are given access to almost 200 files that include the data sources and the Power BI Desktop files with the solutions built into them… Take a moment to digest how much content is in here, it is quite astounding.

![](https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/2019/10/collect-combine-transform-1024x463.png)

The layout of the book is designed with the business user in mind, and focuses on the most often used steps and how you perform them. As you advance through the book, you will have the opportunity to build along with each lesson, if you get stuck or don’t quite understand a lesson, then you have the solution file as a reference. I loved the interaction here, in most of the lessons I just created my own queries right along side the solution queries and if I ever got jammed up I could just click in to the solution query for the correct step. This made things really conducive to staying engaged in the lesson and moving through a lot of material.

Like our journey with Power BI, it starts simple and moves towards advanced concepts. About mid-way to ¾ of the way through you will be introduced to the advanced editor and M, here you will start to learn how you can manipulate the queries themselves without the UI… Getting here puts you in such a powerful position with your ETL. Working through these lessons has empowered me to easily understand how to manipulate my backend sources, modify my steps I built in the UI with additional filters or actions, and troubleshoot potential issues in Power Query. If all that isn’t enough, Gil gives his top pitfalls and things to avoid section which is an invaluable resource section.

I really enjoyed this book, and it sets a high bar for me moving forward in that I will be looking for other materials from other authors to provide this level of engagement with something I want to learn. The structure of the book, using the chapters to read through the step by step way to perform the action, having the source material and the solution files all in one spot makes for a fantastic way to learn. Whether this book is your first foray into Power Query, or you choose to go it alone, I highly recommend that you get started in the journey.
