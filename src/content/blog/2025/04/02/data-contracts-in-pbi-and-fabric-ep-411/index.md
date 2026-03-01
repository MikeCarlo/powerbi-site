---
title: "Data Contracts in PBI and Fabric – Ep. 411"
date: "2025-04-02"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Data Contracts"
  - "Microsoft Fabric"
  - "Data Governance"
excerpt: "Mike and Tommy dive into data contracts and how they apply to Power BI and Microsoft Fabric environments. They explore why formalizing expectations between data producers and consumers is key to building trustworthy, scalable data platforms."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into data contracts and how they apply to Power BI and Microsoft Fabric environments. They explore why formalizing expectations between data producers and consumers is key to building trustworthy, scalable data platforms.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/fyGLEcq8oX4" 
  title="Data Contracts in PBI and Fabric - Ep.411"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- [Data Contracts Explained: Key Aspects, Tools, Setup](https://atlan.com/data-contracts/) — Atlan's comprehensive guide breaks down what data contracts are and why they matter for modern data teams. The article covers the five defining characteristics of trustworthy data contracts — including version control, enforceability via quality rules, and extensibility. A great companion read for understanding the concepts Mike and Tommy discuss in this episode.

## Main Discussion: Data Contracts in Power BI and Fabric

Mike and Tommy tackle the concept of data contracts and what they mean for Power BI and Microsoft Fabric practitioners. Data contracts formalize expectations between data producers and consumers, setting clear rules for schema, quality, and ownership.

### What Are Data Contracts?

Data contracts are agreements that define the structure, semantics, and quality expectations for data exchanged between teams. Just like business contracts formalize expectations between suppliers and consumers, data contracts set enforceable rules for data exchange. They help prevent downstream breakages, shift quality responsibility left, and improve overall data reliability and trust.

### Data Contracts in the Fabric Ecosystem

The conversation explores how data contracts apply specifically within Microsoft Fabric. With Fabric's lakehouse architecture and multiple compute engines, having clear contracts between data layers becomes critical. Mike and Tommy discuss how teams can use contracts to manage expectations around schema changes, data freshness, and quality checks as data flows through medallion architecture layers.

### Practical Implementation

Mike and Tommy get into the practical side of implementing data contracts — how to start small, what to formalize first, and how to build a culture of accountability between data producers and consumers. They emphasize that data contracts aren't just documentation — they need to be enforceable and embedded into the development workflow to deliver real value.

## Looking Forward

Data contracts are becoming an essential part of mature data platforms. As organizations scale their Fabric and Power BI deployments, formalizing the expectations between teams will be key to maintaining trust and reliability. Mike and Tommy encourage listeners to start thinking about where data contracts can add value in their own environments.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=35s" target="_blank">0:35</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Hello everyone and welcome back. How you doing Mike? How you doing Tommy?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=43s" target="_blank">0:43</a> I'm doing well. Thank you very much. Thanks for asking. It's another early episode. We are up a little bit early today. We are doing a recorded episode.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=52s" target="_blank">0:52</a> Tommy and I are doing some traveling at this time. So, we won't be able to make these meetings or these podcast calls. So, for that being said, this is going to be maybe a little bit shorter of a topic around some of our main items.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=64s" target="_blank">1:04</a> We don't really have any news items for this one. We're just going to jump into our main topic today. How do you feel about that one, Tommy?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=70s" target="_blank">1:10</a> I love it. I think it's just hard to do the news one when it's a podcast. Just like how much television's changing too. Especially when it's recorded.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=82s" target="_blank">1:22</a> Yeah. So, you love to do everything. But dude, this is a topic that I'm really happy with some of the latest topics that we've done. We're diving into some heavy heavy things.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=95s" target="_blank">1:35</a> I think a couple episodes ago, we had discussed this idea of how do you transition data from one person to another and so that's where the topic came out of, the spun out of what is a data contract or unpacking what data contracts mean in lieu of items inside Fabric.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=111s" target="_blank">1:51</a> And so we have a number of control mechanisms that are inside Fabric for security, but security just means you can read it or not or interact with it or not. That's not necessarily a data contract.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=122s" target="_blank">2:02</a> And so, Tommy, you said something I believe it was in an earlier podcast episode. You're talking about how much you're loving OneLake catalogues, which is a form of what I think we'll unpack here in a bit.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=136s" target="_blank">2:16</a> Around that's part of what data cataloging is, part of a data contract. What data is in this source, what's the column information in it, what is the column name. There are rules around how this data should be used or be built so that way when a consumer consumes the data they have confidence that the data is consistent every time they look at it.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=159s" target="_blank">2:39</a> So that being said, go ahead Tommy. No, I was going to say this is if you want to hear this, this is literally from our agile development that we talked about and trying to apply things that usually don't fit in the business intelligence world or in the world that we worked in.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=172s" target="_blank">2:52</a> And trying to apply that to what we do today. So, let's unpack. So, I want to just go through maybe like a for people who haven't heard what data contract is. I think we've thrown around this term a couple times on the podcast and I would just like to unpack what it means.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=187s" target="_blank">3:07</a> And so for me, my definition around this is a data contract is a written or documented, maybe not written per se, but like a documented agreement around what data I'm giving you.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=200s" target="_blank">3:20</a> And it comes with things beyond just like this is the columns I will give you and this is the data that's in there. And when I think about specifying things in SQL, data contracts remind me of like the SQL create table phase, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=214s" target="_blank">3:34</a> This is the table. These are the columns I'm going to tell you. This is a column and it's a varchar 90, right? This is a varchar 50, right? So this is a boolean on this column. This is a string on that one or whatever.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=230s" target="_blank">3:50</a> There's data types that are associated with columns. And so sometimes you have, I think about this table creation experience in SQL because some columns get a whole long line of text but what happens if the text is longer than the data you're bringing it to in the column.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=247s" target="_blank">4:07</a> So sometimes you have this feature where you truncate data or the text field gets too long, you can't store the whole thing and you just abbreviate it and put what's left into the cell in SQL. So I think that's the expectation here.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=261s" target="_blank">4:21</a> In this article that I'm going to share in the description. And so this will be in the description of the video. ATLAN, I think is how you say them, has got a really good article around what is a data contract.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=269s" target="_blank">4:29</a> But they talk a little bit more about than just the data contract. It talks about what it is, why they're important, and then it says what is inside the data contract: the schema, the semantics, a service level agreement, which is something I actually really like to talk about when I talk about contracts.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=289s" target="_blank">4:49</a> That's one of the main things I think about, like how often is the data refreshed and what happens when it's wrong. Who's maintaining it? What's the owner of the data? And then they also talk about here something around the metadata of that source of information.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=303s" target="_blank">5:03</a> What does the governance look like? And so let me just pause right there. I'm seeing a lot of things Tommy, like what's your thought on these topics? What's your impression of data contracts?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=312s" target="_blank">5:12</a> So, and especially you may read this and it really, I feel like this is what I'll call the classic data contract because really the bulk of this is very technical in terms of implementation and agreement to it.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=325s" target="_blank">5:25</a> Again, you're talking about the metadata. We're talking about how large a column can be or how many values can be in it, what are the outliers that are allowed, right? And those are all a lot of things that from the business side is fine, but from a per column point of view, this is much more on the developer on the technical side.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=347s" target="_blank">5:47</a> It's really not until the very end do you actually get into I think more of the meat of the thing that what people really care about, especially if you're going to put an agreement with the business when it comes to again those SLAs and the data governance.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=361s" target="_blank">6:01</a> But it's very very metadata focused in the original idea of a data contract. I disagree with your statement there. I don't think it's technical.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=373s" target="_blank">6:13</a> You said it's very technical. I don't think it is. I would probably address like if I had to put a hierarchy of needs on these things, technical is probably part of it. But I think really the important thing that I think about data contracts, I'm more interested in the service level agreements.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=386s" target="_blank">6:26</a> The security of it and then just having like, you could do some very vanilla things in a data contract between one team and another or one person and another. You're inadvertently already making data contracts every time you publish something to PowerBI.com.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=404s" target="_blank">6:44</a> You're making your own data contract. It may not be documented but the tool allows for aspects of a data contract to exist but you don't even know you're doing it, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=415s" target="_blank">6:55</a> No so I agree with you in terms of what we focus on. I'm saying the Atlan article and all the research, if you were to say define a data contract, it does go heavy usually into the schema metadata.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=428s" target="_blank">7:08</a> But no, I'm with you in terms of the data contracts that I focus on or what I try to focus on is the SLA, the governance side of things.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=442s" target="_blank">7:22</a> Yes this article, I think schema is part of the solution here. It's part of the idea, the semantics of what they're talking about. So yes those are part of the solution but I don't think it makes it technical. I don't agree with that statement around that it's very technical and this article is really pushing towards technical.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=464s" target="_blank">7:44</a> I think it's just something that they're putting in here or applying with this. So I don't really understand that part of your comment. But I think the schema is valid. I think the schema is important to put on top of whatever data contract you're applying. So that does make sense to me.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=482s" target="_blank">8:02</a> So I don't know. We'll see where this conversation goes. But I want to move forward then. So talking about these different aspects, starting with schema.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=489s" target="_blank">8:09</a> So starting with schema, semantics, service level agreement and then metadata. The schema is just what columns, how many columns do we have, what are the names of said columns and what's the min max length of them. Right, something like that so that could be very simple.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=504s" target="_blank">8:24</a> When you get into a semantic model, when you build a semantic model you've already defined a schema. It already exists for everything, it's all there. So that's not a problem. I don't see there's any issue with the semantic model, it has a definition, it's a description. That's a place where you can add that, you could also think about it upstream inside lakehouses as well.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=526s" target="_blank">8:46</a> Lakehouses also have schemas for all the tables. So there's two main areas that I'm thinking about for where schemas exist, right? And again you're talking about how technical it is and I don't agree necessarily because in order to make a table in the lakehouse the semantic model has to read the schema and bring it in and just use it.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=548s" target="_blank">9:08</a> Like those things, I think it just comes along with the pattern. So yeah go ahead. I was going to give you a question with this one Tommy. So schema to me, just very easy to understand. These are the names of the columns, this is the data that's in them and it's defined somewhere easy.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=565s" target="_blank">9:25</a> The other things I want to talk about is semantics. So semantics is a little bit different. These are more I think business level rules. When you provide definitions to individual columns defining what they mean. And so that's more of where I want to unpack, the semantics of the schema or the data contract. What do you think about those points?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=590s" target="_blank">9:50</a> So this is where it gets interesting especially that you brought up the one like catalog to me as well. And I think this has always been one of the biggest hurdles for a lot of people working in a tool like Power BI because of the ease of creation, the ease of use, the fact that it is quick to change. It's very easy to update a column compared to I think a lot of legacy systems.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=614s" target="_blank">10:14</a> But the problem is the ownership of this. In terms of like I'm creating the model, I'm creating the tables for even before the business and maybe their data. But I think a lot of times we run into trouble of okay, how do we actually define this, what are the allowed values. And there's a problem here because I think the biggest struggle that a lot of BI teams have is not the report building, it's who owns what.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=641s" target="_blank">10:41</a> And not just who owns the data. That's not semantics though. Okay, that's something different. Semantics is not who owns any. That's metadata. You're jumping ahead. So we're talking about semantics right now. Just focus on the semantics part of it. So that's the business rules. Like this column cannot be null. This key is identified in the dim user table.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=660s" target="_blank">11:00</a> Like that's what I'm— So I think you're jumping ahead too far. The semantics is defining the business rules of what you expect about the data. So give me your definition. So semantics, it's the business entity. So if you read the article, it's talking about semantics are about capturing the rules of each business domain, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=679s" target="_blank">11:19</a> So I have sales information, right? This is Tommy what you've talked about before in prior episodes, right? What is a definition of a customer? How do we define it? Is a customer someone who purchases something from us? Is it someone who purchases something from us in the last 6 months, like one year? What is that definition?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=696s" target="_blank">11:36</a> So the semantics of that, when we have a table of data and we say customer column or customer table, we're defining this information. When we say transaction, what does that mean? There's a language here that all teams must adhere to. And you may not agree with the standard definition, you may make up your own definition for your department or whatever you need to report on.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=714s" target="_blank">11:54</a> Well you can't use the word transaction in that, you need to think of something else like microtransaction or some other term that defines what you're using. But those general terms, and I think the semantics— this is actually where we need a lot of effort. And I don't think Fabric does a good job defining the semantics of things.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=732s" target="_blank">12:12</a> This is where you use things like in Python notebooks you would use Great Expectations to rip through a bunch of data and say hey, this customer key column cannot be null and you can test it. It's a test that every time the data loads, that is done, it's there. It has passed the test.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=749s" target="_blank">12:29</a> So to me this is a lot of those things where deviation from normal is another example, right? Hey we expect this column to have whatever, it's a percentage, right? Okay well that percentage should never be more than 100%. If you add up all these items or if you group by this and add it up it should never equal more than 100%. Those things are tests you apply to the data.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=775s" target="_blank">12:55</a> And so this is an area where I think a lot of organizations don't have this set up in their environment, but they want it. I'm doing a lot of project work right now helping customers figure out where to put data quality or business conditions that require data to be of a certain quality. Does that make sense?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=789s" target="_blank">13:09</a> No, that's perfect. I'm going to table my tangent because I think you were talking ahead of where we were. Honestly though, my tangent being, and again I'm going to mention it, I want to see if you highly disagree that it's a very chicken or the egg. All those rules and definitions have to come from someone.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=806s" target="_blank">13:26</a> But no, I completely right. But do we document it? Do you actually, how many data sets do you build that has a test that says I'm going to load the table and I'm going to confirm on every data load that we pass this test? You have to build that, that's all custom stuff. You build like building the tool.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=825s" target="_blank">13:45</a> And like I said, so again my argument of the chicken and the egg is who's making those rules and who's agreeing to it. But I agree that we never had a process in Power BI. There's been some attempts at it in terms of an integrated tooling system to do that, especially with a semantic model. Yes, we've never had that.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=844s" target="_blank">14:04</a> There's other tools that do this. Like there are tools that you can go by. When you use Databricks, Databricks has this thing called assertions on a table. And so Databricks has a feature that when you load data in on a row by row detail, do you assert that this value is of a certain type or data set type.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=862s" target="_blank">14:22</a> And what you can do is you can flag records and basically add a new column that says this row of data was discovered to not adhere to a data rule or policy. You can flag it and when you flag it, you can come back and you can either filter that information out and move forward. You could fail the job and say, "Don't process the data. There's a problem. You need to fix something."

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=879s" target="_blank">14:39</a> There's different ways or methods on how you'd handle this. But your comment around who should decide this, it's a collective decision, right? It's a decision on the person making the data engineering to build the table and the person consuming the data. Typically, I think the person consuming the data has more vested interest in making sure those rules are right. Does that make sense?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=904s" target="_blank">15:04</a> No. You would think they would have the bulk of the interest there. Well, if it doesn't work, the person consuming the data comes back to the person who made the data and says it don't work. And then the expectation is if it's not running correctly, if you don't state these— this is another thing.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=926s" target="_blank">15:26</a> Let me go another example here. Working with my kids. So let's say someone's acting up, they're being loud, they're being obnoxious or whatever. If I just walk into a room and just immediately give out a punishment on one of my kids, they're really bent out of shape.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=945s" target="_blank">15:45</a> Like, "That's not fair. I didn't know what was the expectation." So, they get bent out of shape. They get angry at me if I just come in and discipline without any prior expectations as to what's going on. Sure. So, when I drive to someone's house and we have our kids, we're going there and I'm like, "Okay, look, before we get out of the car, here's my expectations on some behavior."

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=961s" target="_blank">16:01</a> "I expect you guys to do before I go into the house." It's my family contract or my behavioral contract with my kids. We want you to be respectful. We want you to be kind. Don't eat with your mouth full. Just things that they do. And you're like, I don't want you to do these things. This is what I want you to do. If you don't have that conversation, there's no

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=980s" target="_blank">16:20</a> There's no responsibility for anyone. And then when you come in and say, "Look, you're being a ding-dong. Don't do that." Now I have, remember in the car when I said the thing and we said, "We're going to not do this." And they and you did it anyways.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1013s" target="_blank">16:53</a> This is to me, this is what semantics is. Semantics is the same thing for two business groups to say, "I'm expecting it to be this way. And you need to get better at describing what your expectations are because I don't think anyone and it's very difficult for people to do this. Not done well."

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1050s" target="_blank">17:30</a> And I like the kid analogy and I can't tell you how many times I've told my own stakeholders to get you ding-dong for something that they've been working on as well. Right. It does. There is a wrench here though because in principle, you're a thousand percent correct.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1085s" target="_blank">18:05</a> But I want to throw a wrench in here because especially when you're introducing this idea for the first time, these concepts, this is much more than simply saying, "Hey, don't hit your sister," because we need those requirements and not just requirements, but it's like, okay, what are the outliers? What are the things that are the constraints?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1107s" target="_blank">18:27</a> A lot of teams in business, especially the people you're talking to when we're building, they may not be aware of all the junk or things that are unnecessary. They just know what their number is because they've done it a certain way. So there is a conversation here that needs to happen that they also have to put work in.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1130s" target="_blank">18:50</a> And a lot of times you find that a lot of leaders, they, unless there's someone in operations who's going to represent them, "I want a report, why am I the one doing the work?" Yes, is completely essential because again to your point, if we run into something that's not allowed, if we run into something that we need to alert, again we can't just write that on the fly.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1172s" target="_blank">19:32</a> But we need to have those constraints and we need to have those guidelines. But then if I hand someone like, "Okay, here's everything we found, 25 values," when you said that it's either prospect or sale, are we discarding the others? And that's just one situation where, whoa, they're not aware of all these things.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1213s" target="_blank">20:13</a> So, that's what I'm trying to say is the big wrench here is this all has to be established before we even get into nearly anything else. And it's a hard conversation to have, especially when you're not dealing with a data representative.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1249s" target="_blank">20:49</a> Let me give you another example that I've discovered. I agree with Tom, I think you're right onto something here with the whole idea of like, look, the business doesn't necessarily know all the rules that they need. So, couple things. You don't know there's a problem until there's a problem, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1287s" target="_blank">21:27</a> So, I'll give you the data. Let me play out a scenario here. I'm the business. I'm complaining about I don't have data. I can't get data. I need data. Give me data. Fine, I'll give you data. Here, I'm going to make a lakehouse. I'm going to make a semantic model. Here's your data.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1324s" target="_blank">22:04</a> And the business goes, "Oh great, I now have access to the data." And then the business says, "Wait a minute, this doesn't make sense. I'm trying to do the join tables and it's not matching." Or "Where did this value come from? I don't understand where that came from."

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1360s" target="_blank">22:40</a> And so then the business comes back and says, "Wait a minute, something doesn't look right." And then they are asking for the data without any expectations towards the data or not really even understanding how the data is related to each other, different tables and things like that.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1398s" target="_blank">23:18</a> Sometimes, and again, not every business unit is the same. Some business units are great and they have a great understanding of how their data is woven together and they understand it and they see it. But when you abstract the tables of data so far away from the business, sometimes the business doesn't understand how dirty the data is.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1437s" target="_blank">23:57</a> And so I guess what I'm saying is, you have to start small. You start with very few rules initially and then as you discover them or as you discover the problems, you're going to have to update these contracts and modernize them a bit and get both teams to agree upon this, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1473s" target="_blank">24:33</a> A common example I find is, let's call it Salesforce. Salesforce is pulling data out. Data engineering sucks out the tables. Salesforce has lots of many tables in them. You do the joins the way that Salesforce joins the data together. You now have a final user table or customer table.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1511s" target="_blank">25:11</a> And when the business gets it, they're like, "Well, this is not right. Why is the data in this column or the data on this row is wrong?" Well, whose problem is it? It's not data engineering's fault. And this is where I think Tommy, you and I get stuck in the middle a lot because we're data engineering and we get the blowback of like, "Well, this is wrong."

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1549s" target="_blank">25:49</a> Like, no, no, no, time out. My data coming to you is exactly as it came from Salesforce. So, business, we're just giving you what's already in there. Actually it's you, business, making the problem because you wrote the wrong data into the column. What you need to go do is go fix your data in Salesforce and that way it comes through the system correctly.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1586s" target="_blank">26:26</a> But what we find a lot of times is the business comes back to data engineering and says, "Fix it." And so data engineering builds additional business logic or rules or filtering to fix an existing problem that should have been fixed in the source system.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1622s" target="_blank">27:02</a> But here's the thing. What I'm getting hung up on is because I literally had this type of project or situation almost a year ago on our migration. So, I like the idea of, "Okay, we're going to build as we go." But here's the thing. We can't continue once we find something if we're building as we go until we get the okay or the updated definition.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1660s" target="_blank">27:40</a> Okay, we finally found this is what's allowed. But that's not going to only usually, especially with new data, a new contract, that doesn't just happen once. "Oh, I found one column out of everything," right? So here's the thing. If I'm tasked with building a model or report, and again, we're not just talking your standard run-of-the-mill quick report. This is something that is going to be relied on for a department.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1715s" target="_blank">28:35</a> Well, we have to have that ample time because that is going to cause more time to actually get a result. People are coming to me as the report guy, the Power BI guy. It's like, okay, here's my table. We get the data in whatever legacy system or Excel file and I just get it and every time I look on Monday, it's updated.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1760s" target="_blank">29:20</a> Now you're coming to me every three days and I have to do all this more discovery on what these things are I've never seen before or I have no idea what this definition is. This is taking more work than the Excel file. And this is a common situation where if you're building as you go and you find a hurdle, I need to get the confirmation or I need to get the rules from the business.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1811s" target="_blank">30:11</a> We keep doing that. That just delays any fruit, any results. No, I had a project where the stakeholders, they were getting pretty frustrated on why it was taking so long. But we finally had a conversation. Look, I've been working with the team and we don't have a definition. So, we can't create any number because no one knows what the rules are.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1856s" target="_blank">30:56</a> So before we can move forward, we're not going to build a report that's wrong numbers. And that realization that all these different things under the rock, so to speak, that were not discovered are usually what we are the ones that are taking on. Yes, I agree with your point there, but I think it's unreasonable to not do any work proactively. So, I'm on two ends of the spectrum here. One end of the spectrum is like, do we take on any project? Do we not do any?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1469s" target="_blank">24:29</a> Do we not start any project until all the rules are defined? The answer is no, we don't do that. Do we start every project with no rules? The answer is also no. Those are the two ends of the spectrum, you can't go one way all to the other end.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1497s" target="_blank">24:57</a> As your team matures over time, hopefully they'll be like, oh, in my last projects or my last items, I was able to figure out a little bit of — oh yes, we've done this table work before. We know that this column needs to be filled out for the relationships to work or we know there's going to be some bad data.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1526s" target="_blank">25:26</a> We're going to filter it out. I'm just going to tell someone the bad data exists. Right? So these are things that you've learned from experience with working with your data in your company.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1554s" target="_blank">25:54</a> The other point of this I'm trying to maybe make here as well is the data culture is very important in this experience. Yes. So one thing that was going through my mind here is what happens when you find there's a problem in data.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1588s" target="_blank">26:28</a> Like my example I just gave earlier, right, the business team finds that there's a problem with the data and you have to trace it all the way back to the Salesforce system. Who's really responsible to fix it in the Salesforce system?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1621s" target="_blank">27:01</a> Well, there's a lot of potential pointing of fingers in that situation and you need someone like the CTO or someone at the higher level that can say look, let me hear your arguments. Let me figure out what's going on.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1655s" target="_blank">27:35</a> Okay, let's identify in our process who's the actual part in the failure here. Is it a data engineering loading problem? Is it a source system issue? Where's the issue in the pipeline? Let's identify where that is.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1689s" target="_blank">28:09</a> And say okay, this team, you had the data quality problem, it's in your area, go fix it. And give them a timeline or a deadline to go in and fix these data issues because to your point Tommy, right, we want to build all the net new things but there is an amount of supporting old stuff or existing things that we have to balance as well.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1727s" target="_blank">28:47</a> So I also see new teams to the data world seem to focus on only building new things but not really providing enough time or support to maintain existing things. So it has to be a balance. You can't just keep running forward as fast as you can.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1758s" target="_blank">29:18</a> Leadership would always love you to build only new things moving forward but then that removes the support for all the existing stuff that falls over and then yes you can't use it. A lot of again with depending on the data culture they just have the perception that we're very good at bar charts, not all these other things too.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1797s" target="_blank">29:57</a> So and this is a perfect point I think why bringing data culture into this now, right, because this has to be part of the expectations. And I think to me when we are really talking about the data contract, oh my gosh, if we just say yeah we'll build a model, we'll do some discovery and we'll ask you if any questions, you're asking for failure, you're asking for frustration.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1842s" target="_blank">30:42</a> For people to not be happy with the results because it's going to take too long, there's going to be too many questions. If we're going in with some model that we know it's going to be reused, something that has that path to certified, this has to be part of honestly when we're talking about a data contract.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1880s" target="_blank">31:20</a> Something that is signed, confirmed, and read by all parties involved before we start. You don't want to make it bigger than it is because for every single model, right, where it's like, well certain. So this is again I agree, I like where you're going with this.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1916s" target="_blank">31:56</a> Because I'll go back to, is it certified or is it not, right? So certified things I think require a little bit more rigor, right? So I do think on certified data sets you'd have for sure at least a data contract written out or at least something documented on a SharePoint site or at least write down some very simple things.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1955s" target="_blank">32:35</a> Yeah. And so going back to the documented business rules around the semantics, there's nothing in PowerBI today that defines where we would store the semantics of that model. There is an area. So when we move on to the next section of the article, it talks about what else is in a data contract.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1991s" target="_blank">33:11</a> Service level agreements, the SLA, that I think would be very useful to put that in the description of the model itself. So this is one thing we say, let's add descriptions to things. Well, in the description here on the article, it's talking about what's the latest time the data is expected to be in the product, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2030s" target="_blank">33:50</a> So data should be loaded by 9:00 a.m. Central Standard Time or Eastern time zone, right? And if this doesn't work, set up at least notify in the description, automatic notifications have been set up. If this thing fails the data team will be aware of this.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2069s" target="_blank">34:29</a> And write the conditions — an email will be sent out to the users of this data set or a note will be made on the SharePoint page when the system's down and we're fixing and investigating it. So the SLA of things I think that's really a trust gathering element.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2105s" target="_blank">35:05</a> Oh huge, right. There's other things they call metrics here. I've never really heard of these terms before but they make sense to me. They talk about mean time between failures, MTBF, and then they say mean time to recovery.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2141s" target="_blank">35:41</a> Like when it does fail, what's the average time it takes to recover the data or get the data back in there. Those could be metrics that you put on top of this for when you do ticketing or ticketing systems. If something fails, you can figure out when it failed and how long it took you to resolve and complete the issue.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2178s" target="_blank">36:18</a> But at the end of the day, right, I think the service level agreement is something that the data team or if the data — the person building the table — they should take a swing at that first and say here's what I can commit to based on the technical pieces on the back end.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2215s" target="_blank">36:55</a> Right? If the data doesn't come in till 5 in the morning, well it takes us 2 hours to load it. It's going to be a minimum of 7 a.m. minimum because then give yourself some padding there. So by 8 a.m. we could have the data there, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2250s" target="_blank">37:30</a> Is that going to meet the business needs? And if the business says no, we need it earlier, then you've got to figure out a different solution how to get the data there faster. So I think there's things — that's a conversation that should be happening.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2283s" target="_blank">38:03</a> And again, this was — we were very limited when we were just in the world of PowerBI semantic models because it was read only. It was hard to go through the metadata of that and add that, right? So a lot of times we could do the refresh schedule for all the things.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2318s" target="_blank">38:38</a> But I think what we're really diving into here when it comes to the column quality, the business quality of that — we were more or less at the mercy of the data coming in. We didn't have the data engineering, the semantic model. If something broke in a power query or something broke in a data flow, before we asked anyone we're immediately going to the power queries.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2363s" target="_blank">39:23</a> Like was it the database, did someone input something wrong? And that was much tougher because we didn't control that process. Which but now, and I don't know if you want to table this or move into this now, but this is going to change drastically, I think, with having fabric available to us.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2405s" target="_blank">40:05</a> Well, I was just in a conference and at the conference, it was in the PowerBI Netherlands group and they're doing a really good conference. I was in one of the sessions and they were talking about things and one of the common notes was Microsoft was on the stage presenting a new feature and everyone was like, "Okay, interesting."

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2442s" target="_blank">40:42</a> They're unpacking the feature, looking at it going, "Okay, this is interesting." And a question came out from the audience, "Is this fabric only?" And the number of organizations in that region that didn't have fabric yet or their central team did not allow fabric to turn on was quite large honestly.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2465s" target="_blank">41:05</a> So there's a lot of teams that were still trying to figure out if fabric is a play for us. So when we talk about pure PowerBI and what fabric is doing, I think you have a lot more opportunity to build more data. You're adding more data engineering. You're bringing all the tools that came from other worlds like the data platform in fabric.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1960s" target="_blank">32:40</a> Like the data platform in Azure over to Fabric event hubs, lakehouses, storage tables. There's a lot more surface area now. And what's happening I believe is the business is getting more access or more direct access when Fabric is turned on.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=1995s" target="_blank">33:15</a> So there's a couple hurdles I see here. One, you've just got to be able to turn on Fabric to begin with. If it's not turned on, then you're out of luck. Yeah. And again, we're seeing that even too with people who listen to the podcast, we're getting there, Mike. We're getting there for everyone to turn it on.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2018s" target="_blank">33:38</a> But so I guess for a lot of people then still in the Power BI world, if it's still something that you think is going to have a slower adoption, what are some of the approaches that we'd want to do? Because I really think the data contracts conversation is one that at least on my end those discussions have really been in the data engineering world and I would say closer to the back end in terms of something being established as part of any process.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2048s" target="_blank">34:08</a> It was something new and exciting when we brought it to the business, the reporting into the business, but it was always harder to do in terms of for every approach. So if Fabric is not going to be the way or the quick adoption, we're talking just Power BI. Then what are some of the approaches then?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2067s" target="_blank">34:27</a> Well, I guess what I'm looking at here when I look at the article, I think things like metadata or the data governance portion that seems to be pretty well handled by the security of the resource group, right? So I have the workspace, I have admins, contributors, members, and viewers, right? So that's some level of data control of who can even see the data to begin with.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2108s" target="_blank">35:08</a> You have another layer of that metadata governance by adding row level security or object level security. Which tables can you not see? Which rows of data can you see or not see? So I think a lot of the metadata, the data governance portion is already really built into the tool.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2147s" target="_blank">35:47</a> So yes, maybe you're talking about those requirements. Those are requirements that you're probably gathering at the beginning of your semantic model build and using them to generate the actual semantic model. When I look at the service level agreement, that's information that I feel like should be captured at the description of the semantic model. Like this is an area where we could put it right next to the model.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2187s" target="_blank">36:27</a> When I start talking about semantics, and this is where I'm talking about the business rules, the data tests of the data. To me these are not really built into the tool yet, right? I have to build a separate process that does tests on columns or tests on loading of data to make sure the net new data I'm bringing in adheres to a quality standard.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2211s" target="_blank">36:51</a> Another thing here I want to point out is Databricks already has this. Databricks has this thing called table monitoring. So table monitoring, what it does is every time you load data it monitors a table and provides all the statistics of that table. How many records were loaded? What's the distribution of data in each of these columns?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2251s" target="_blank">37:31</a> So to me, that's really interesting because that starts covering the semantics of what's happening in these columns. Now, to liken this to an example that Power BI does, when you're in Power Query and you see the table statistics at the top, when you open Power Query and the column statistics, that's what it's doing. It's basically collecting statistics information there, keeping that and then showing you that over time.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2275s" target="_blank">37:55</a> So every time you load, I want to be able to observe the column statistics and then say there are rules that I want to apply in a very simple way. Again, going back to this rules engine or how to test the data. You're building all that homegrown. There's parts of the tool that show you the data, but you don't actually get to build quality checks on top of the data.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2314s" target="_blank">38:34</a> And that's you building a custom notebook, you're building another data flow to test the data and make sure it's right. And then if that passes then you can say okay the data quality is good. So I think when we talk about data contracts there's parts of this that are, schema seems very well defined to me. Like when you build a semantic model, when you build a table lakehouse, that's very well defined.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2354s" target="_blank">39:14</a> So again thinking about these data contracts I think it's important to talk about this topic with people. I think you should spend a good amount of time working on the semantics of the data and what does that mean? The business probably doesn't know what the semantics should look like and the business or data engineering team should really have a conversation around what does this mean.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2393s" target="_blank">39:53</a> And I think over time you'll get better at understanding how to define the semantics and those should definitely be documented and placed somewhere. It just doesn't feel like the tool today supports this. No, and I completely agree and especially when you're dealing with the only real approach you would have in Fabric is a custom notebook, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2415s" target="_blank">40:15</a> But again, you still have to write all the code. It's not a tool that has expectations built in. It helps you out a little bit. It gives you a way to write a rule and then say make a data frame and run this rule against it. Yeah. But it's not really intended for a semantic model. And again, that's the meat and the bones of what we're doing.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2454s" target="_blank">40:54</a> Well, the semantic model is just an output, right? The semantic model is just the output of whatever the tables are being produced as, right? So if you're doing pure Power BI, you're building the semantic model and you could have tables in your Power Query that refer to those and do the data quality test inside the semantic model, right? Or if you're building in Fabric, you could just have a Python notebook that does that for you as well.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2501s" target="_blank">41:41</a> That's true. Yeah. But it's still just very custom and again if you're trying to repeat this for every lakehouse, every table, that's compared to something like Databricks where there's already something built in. You just turn it on. Yeah, I'm with you. The table statistics is something that would be interesting to see if Fabric could produce something like that. That to me feels a bit more like a missing feature and maybe no one's asking for it yet.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2532s" target="_blank">42:12</a> But why wouldn't table monitoring or statistics on a table just become part of the OneLake catalog, right? I feel like in OneLake catalog there should be a health score, right? Yeah. You go to the OneLake catalog. Here's a table of data. I'm going to specify a couple rules. I'm gonna assert some things of this table. This table must have this, this, this, and this. This column is a number. This column can't have nulls.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2562s" target="_blank">42:42</a> If you give me a couple of those things and then just generally collect statistics of the table, then you can watch the table and what you're trying to identify. You're trying to identify data drift, right? The data will change over time. What does the drift of that data look like over time in that table?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2598s" target="_blank">43:18</a> So, I'm gonna propose something and you could tell me how out of line this is. I think when we're dealing with people, the interaction in someone's relationship with Power BI or Microsoft Fabric, yes, all those things are definitely important. But I think something that would even be more approachable for Microsoft to integrate is what are people really caring about at the end of the day? It's their metrics, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2633s" target="_blank">43:53</a> And it's really those things that define them, right? So these sales teams are in these regions. The five allowed values. Our metrics are always updated and they should be right more or less if you just took that subset. Obviously a lot of that's going to be defined by the engineering side. But if you think about it, we already have metric sets and metric sets already has a lot of custom ability.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2679s" target="_blank">44:39</a> I feel like it'd be easier for Microsoft to have an input or user input field for just some parameters around metrics, like what's the maximum value allowed, the

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2450s" target="_blank">40:50</a> What's the maximum value allowed, the lowest level allowed, show me the change over time on some of my metrics. Hey, this column should have five distinct values, right? And that's part of this metric set because rather than trying to boil the ocean with all those, again not saying it's not important, but all the things in the semantics right in terms of last refresh, processing errors.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2478s" target="_blank">41:18</a> I don't think that's going to be the Microsoft space and the interface for it, but more or less the output of those things. Like, again, what are the values currently in our sales team or sales regions, what are the current metrics, and having that as a hub.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2499s" target="_blank">41:39</a> Because if it's going to be something that Microsoft's going to build or something readily available, there has to be some global parameters, right, rather than everything being so custom. Parameters like maximum low value, hey, if any metric you could input like what's the maximum allowed, how much has it changed per day?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2525s" target="_blank">42:05</a> I don't agree with that at all. There's no global. There's no global anything. Hold on. I'm not saying, I'm saying if we're going to have a nice user interface, I would call them basic parameters, basic things that could apply to any measure.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2538s" target="_blank">42:18</a> You're describing a rule engine. You need an easy way to make the rules that's simple to use. Yes. Yeah. So, it's not global. You're talking global parameters. I think I'm interpreting yours as like that's not what we're talking about.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2555s" target="_blank">42:35</a> We're talking about we need an easier way, like there's no easy way to apply data quality principles to tables that exist today, right? And that's to me that's the semantics of these models.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2570s" target="_blank">42:50</a> There is a little bit of semantics that are applied, right? If you have a dimension table that has duplicate records and you have a one to many relationship to a fact table, well if the dimension table has dupes, it automatically throws out this can't be, it's not a true error, right? It's going to fail.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2596s" target="_blank">43:16</a> So you can go just determine what that is and like, oh yes, I know what that problem is. But that's just part of the limitations that the semantic model has. I don't think you want to start refreshing your semantic model and then find out you have dupes in your DM table. I think you want to find out that a little earlier in the process, right?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2626s" target="_blank">43:46</a> So if you're pure Power BI, you have to let the semantic model be the determination of these things. Yeah. But if you're in Fabric, you should be testing these things earlier in the process.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2635s" target="_blank">43:55</a> Okay. I think I'm on the same page as you. I think you were describing what I'm saying. Different name. Yeah. You were saying global and I'm like, I'm not going to put one rule across everything. No. Yeah. I just want a nice interface Microsoft creates for me that I can input the numbers.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2653s" target="_blank">44:13</a> I wonder if this is something that the community will eventually develop where we could have like data monitoring on tables. Why wouldn't that be just something that people would just build and have part of a solution that users could use inside their data quality for certified data sets, define rules of the data and it just runs them against the data set itself.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2675s" target="_blank">44:35</a> Right, it doesn't have to be a notebook but what about more like a, this feels like something that could be useful and I like your point Tommy around the metric sets. Metric sets makes sense to put it there. But ultimately, I think when you're trying to build data discovery for people, you want the data discovery to occur in the OneLake catalog.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2695s" target="_blank">44:55</a> I feel like you may be building these rules in other places, but you want to surface the information in OneLake catalog. Yeah. I'm saying like there should be, I feel like every table needs a health score. And this is maybe where AI could take over. Could AI generate these rules and say, "Hey, based on the usage pattern of this table, here's the columns that are most frequently used and we would recommend on these most frequently used columns in these tables, here's some recommended requirements, business expectations, you should apply. Do you want me to apply them?"

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2730s" target="_blank">45:30</a> Yes, I'll track them. Okay, great. Because there's a lot of things you just don't care to track. You don't need to, you don't want to make extra tracking just for the sake of doing it.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2740s" target="_blank">45:40</a> Those AI functions. This is interesting. I'm trying to unpack what this means now a little bit. Interesting. Okay. Anyways, all this being said, I think this is really good. Let me give you some of my final thoughts.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2756s" target="_blank">45:56</a> I think this article from Atlan was really good. It really helps solidify different key aspects of what I think are a data contract. A data contract is a schema. It sounds like there's semantics or business logic that's applied in the contract. The service level agreement, how often the data set's available and who's responsible for making sure it loads. What happens when it fails to load? And then the last one is like data governance. Who can see what of the data set?

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2783s" target="_blank">46:23</a> I think these are really good aspects. When I talk to data contracts, this really helps me round out the conversation around we should be talking about these buckets of things with stakeholders of tables and figuring out what they need. Let's talk data contract. Let's talk about these four areas. Tell me what you mean by these things. I think if you have at least introducing those topics, people will be able to give you a better definition of like this is what I expect the data to look like.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2807s" target="_blank">46:47</a> Any final thoughts, Tommy? No, I think this is something that just needs to be brought up more and I'm really personally in the future really interested to see how this is going to really integrate with business users in the Fabric platform and in the workspace, rather than being at the mercy of a semantic model that's already been built where they can actually hopefully also have a part of ownership.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2830s" target="_blank">47:10</a> Not just saying what's wrong or what's right but being able to go into Fabric too. And I think that's part of Microsoft's overall goal but man is that going to help. But there's different users that you can identify, right? There's consumers, there's advanced users, and there's expert users.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2848s" target="_blank">47:28</a> Consumers would be just, I just give you a semantic model, and you're done. Here's your app. You're done. Basic or advanced users would be like, okay, here's some shortcuts in a lakehouse. Here's a SQL endpoint inside Fabric. You can go use that. And maybe advanced users can go all the way back to the source data.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2867s" target="_blank">47:47</a> Like, hey advanced users, you're not just getting gold data, you're getting silver level data access, but in order for you to promote your content out to consumers, we had to have a process to do that.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2876s" target="_blank">47:56</a> So, good thoughts. I think there's probably more topics around this one as well. Like this article. Thought this was relevant for data contracts, some things to unpack. I'd highly recommend the read through and see how you could use it in your organization.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2888s" target="_blank">48:08</a> That being said, we really appreciate your ears. We know you have lots of things to do and you could be spending your time doing a million other things. We hope this episode was slightly entertaining and or thought-provoking for you. If you liked it, please share with somebody else.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2906s" target="_blank">48:26</a> With that being said, Tommy, where else can you find the podcast? You can find us on Apple, Spotify, wherever your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. Share with a friend since we do this for free.

<a href="https://www.youtube.com/watch?v=fyGLEcq8oX4&t=2916s" target="_blank">48:36</a> You have a question, idea, or topic that you want us to talk about a future episode, head over to powerbi.tips podcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all of PowerBI tips social media channels. Thank you all very much, and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
