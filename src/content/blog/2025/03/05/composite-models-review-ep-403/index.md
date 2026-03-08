---
title: "Composite Models Review – Ep. 403"
date: "2025-03-05"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Composite Models"
  - "DirectQuery"
  - "Power BI"
  - "Microsoft Fabric"
excerpt: "Mike and Tommy dive deep into composite models in Power BI, reviewing how they work and when to use them. They also cover the new Spark connector for Fabric Data Warehouse now in public preview."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive deep into composite models in Power BI, reviewing how they work and when to use them. They also cover the new Spark connector for Fabric Data Warehouse now in public preview.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/NzvS2Znoh7Q" 
  title="Composite Models Review – Ep. 403"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Spark Connector for Fabric Data Warehouse (Preview) | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/spark-connector-for-fabric-data-warehouse-dw-public-preview//)** — We are pleased to announce the availability of the Fabric Spark connector for Fabric Data Warehouse (DW) in the Fabric Spark runtime. This connector enables Spark developers and data scientists to access and work...

## Main Discussion

Mike and Tommy take a close look at composite models in Power BI — a feature that allows you to combine import and DirectQuery storage modes within a single model.

### What Are Composite Models?

Composite models let you mix import and DirectQuery tables in the same Power BI dataset. This gives you the performance benefits of import mode for smaller, frequently-accessed tables while maintaining real-time connectivity to large data sources through DirectQuery. It's a flexible architecture that bridges the gap between fully imported models and pure DirectQuery solutions.

### When to Use Composite Models

The guys discuss practical scenarios where composite models shine — particularly when you have large fact tables that don't make sense to fully import, but dimension tables that benefit from being cached locally. They walk through the trade-offs between performance, data freshness, and complexity.

### Key Considerations and Gotchas

Mike and Tommy cover the nuances of working with composite models, including how relationships behave across storage modes, performance implications of cross-mode queries, and best practices for structuring your model to get the most out of the hybrid approach.

## Looking Forward

Composite models continue to evolve within the Power BI and Microsoft Fabric ecosystem. As Fabric matures, the interplay between DirectQuery, import, and new connectivity options like the Spark connector will give practitioners even more flexibility in designing their data architectures.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=32s" target="_blank">0:32</a> Good morning and welcome back to the Explicit Measures podcast on this bright sunny maybe cold could be rainy wherever you are, I don't know, Tuesday. Hello everyone, welcome, good morning.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=44s" target="_blank">0:44</a> Mike, I'm not too bad. It's a little earlier for me this morning, you can tell by my background and where I'm at. Out of town, so the life of a consultant right, things change rapidly, taking on work very quickly.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=59s" target="_blank">0:59</a> Sorry we weren't able to record this episode earlier. Tommy got called out to do some work and it had to happen quickly, so that's where we're at right now and we'll figure it out as we go.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=67s" target="_blank">1:07</a> Jumping in today we have a couple news items but before we get to our news, let's talk about our main topic here. Our main topic is going to unpack the idea of composite models, where to use them, how have you seen them being used, and just understanding more about composite models in general.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=87s" target="_blank">1:27</a> All right, with that we'll come back to our news items. Tommy what news do we have here today?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=91s" target="_blank">1:31</a> So I feel like we have a pretty big update by the Fabric blog and this is a Spark connector, or the Spark connector is now available for Fabric data warehouses which allows us to read, write, and PySpark support all in a warehouse in a SQL analytics endpoint. Pretty big deal.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=111s" target="_blank">1:51</a> Yeah this is going to be pretty interesting. I think again Microsoft keeps extending the Spark surface area for more and more tools to use it. I really wasn't aware that Spark wasn't able to natively directly connect to the SQL engine.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=124s" target="_blank">2:04</a> I guess you could use a regular ODBC or T-SQL connection or T-SQL notebook to connect to it, but this will be interesting because I believe there are probably some drivers that are required to talk directly to SQL. Maybe that's why they're allowing this now, they have to build something into Spark or their version of Spark that's going to allow it to talk with the drivers directly to SQL.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=148s" target="_blank">2:28</a> And this makes a lot of sense to me because people are getting more and more acquainted with PySpark in a Lakehouse. And then if they want to do something in the warehouse it's a complete change, it's a new language, they have to do T-SQL.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=164s" target="_blank">2:44</a> I can imagine for people on that adoption roadmap for their own skill that's a little frustrating. So now it's much more seamless because well you're using the same environment, you're using the same language that you've already been doing with the Lakehouse.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=178s" target="_blank">2:58</a> Couple things I call out here that I think are important is the connector now supports the writing of a data frame to a Fabric data warehouse table. Maybe before they were only allowing read.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=194s" target="_blank">3:14</a> It's designed with security in mind. It does obey object level security and row level security and column level security as defined by the SQL engine. So that's a good win, it's using the existing SQL Server security model for security pieces.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=215s" target="_blank">3:35</a> That's great because you don't want to just give blanket access to those tables and see everything. If you're building the SQL data warehouse you're probably thinking about applying some layer of security to it. That's awesome as well.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=228s" target="_blank">3:48</a> I don't have anything else short, I'll put the article in the chat window. Go ahead Tommy, I want to review with you later because I think we're underrating the row level security and how much that's expanded. Because we've only talked about it I think at least on the podcast only in the world of the semantic model, but my gosh is that expanded.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=249s" target="_blank">4:09</a> And from the dynamic access I think more needs to be talked about that because a warehouse is really expanding on the same level field of a semantic model. This makes a ton of sense but also that dynamic access for users to get the information they need that's only available to them. To me this is something that needs to be discussed more and how can we implement that more in a lot of organizations.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=274s" target="_blank">4:34</a> I still think a lot of people are coming at Power BI or coming from Power BI and exploring more of Fabric. I still feel like my opinion is we're not quite there yet as far as every user is not comfortable in Python notebooks, but I think people are getting more comfortable in it as they explore more time inside Python and using Python notebooks.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=295s" target="_blank">4:55</a> So I think it's, or PySpark, I think it's growing. I think we're seeing a wealth of knowledge happening here. Again the same way that Power BI made data and reporting reports a commodity, I see Fabric also making it become a commodity as well. So that's another opportunity there.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=311s" target="_blank">5:11</a> I think it'll be really interesting to see how Microsoft continues to enrich that Spark space. It doesn't seem like they're stepping away from it, if anything they're ramping it up and using it more and more across the platform.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=324s" target="_blank">5:24</a> All right let's jump into our main topic for the day. Our main topic for the day will be composite models and using composite models inside Power BI. I'll go grab a little article here around composite models inside Power BI and we can unpack some of that as well.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=340s" target="_blank">5:40</a> So as maybe a quick note here, is anyone using, from the chat window we'll check out the chat, has anyone been using composite models today or currently in their own world?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=352s" target="_blank">5:52</a> So the article I just sent out here in the chat window, just pointing out the article here talks about multiple different composite models. There's this concept of an island inside composite models. You can do a direct query and import mode on different tables and so it's a composition of two different methods to load data in.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=380s" target="_blank">6:20</a> You can also build direct query through Analysis Services which is another form of composite models. I think in there we talk a little bit more around like we have two semantic models that live inside your report or your data model and they're considered islands.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=398s" target="_blank">6:38</a> So I think Microsoft talks in this concept of an island expectation and so you can have these other models of models. It melts your brain a little bit there but you can do things there as well. And so maybe we'll just pause right there a minute and Tommy what is your understanding of composite models, why should we care about them, what's the point of a composite model?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=420s" target="_blank">7:00</a> Yeah and I think it's good to circle back too and I know we mentioned when composite models first were announced in preview. I remember specifically talking about it with you, it was a big deal because at the time we didn't have any Fabric, was not even close to being announced.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=441s" target="_blank">7:21</a> And the idea that I can expand an already live connection to a semantic model was in a sense unheard of. Just this idea where well I already have my sales data but people are using this Excel file and rather than having to go back to the source system I can simply just add on a random Excel file or add on something from CRM.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=463s" target="_blank">7:43</a> And I still have my live connection to this semantic model and I can still create relationships with that semantic model. Which to me was mind blown, I think everyone needs to do this. I remember you mentioned it with caution.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=478s" target="_blank">7:58</a> And I think that was one of the big things where it's like okay this is neat but from a security, from a product shelf life point of view, how is this actually going to work? And for me having this conversation now in 2025, which crazy to say we're in 2025, I think we have to mention this in the world of Fabric too and how much this plays with Fabric and the other alternatives now we have with the Lakehouse.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=505s" target="_blank">8:25</a> And also too I think with how managed self-service has taken off as well, there's a big discussion here on how much do we actually push this if we already have self-service and/or if organizations are pushing Fabric.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=520s" target="_blank">8:40</a> So that's probably a start. Yeah we can start there I guess. Well let me start very quickly, I think the chat's already jumping in here a little bit of some of their comments as well. With this one, do I use composite models? No I don't. I typically steer away from them, I don't encourage them. There are some performance challenges that come with composite models, particularly.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=535s" target="_blank">8:55</a> Per with composite models, particularly direct query over analysis services. A really good talk from Kevin Arnold, he has one on YouTube. Go Google him on YouTube, I'll see if I can go find the YouTube link. He talks a lot about where there might be good use cases for a composite model and when you would want to use them versus when you would not.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=554s" target="_blank">9:14</a> But to your point Tommy, I think when composite models came out there's a lot of fanfare around it, like oh this is going to solve all my problems, this is going to make it really easy for me to make lots of mini models and then put one big model together and pull together everything that we need. I don't think that story ever really came true.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=574s" target="_blank">9:34</a> Just because when you span again, I'm going to come back to these island concepts. So I have potentially data being loaded in import mode and I have a direct query over analysis services. Those are two different connection methods to data sets, and so because there's two different connection methods, that's what causes the model to be called composite. It's using two different connection modes.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=598s" target="_blank">9:58</a> I think Tommy, just correct me if I'm wrong, if you're in only import mode or if your whole model is in direct query, that's not a composite model, right? We would not call that composite models. Correct, no it has to have a semantic model or an existing model. Yeah, in order, and then you have to have another source in order for it to be composite.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=620s" target="_blank">10:20</a> Yes, so in that situation when you're in these islands and you're trying to pass data from one island to another, let's imagine you have a common dimension between two islands. Maybe it's a date dimension, maybe it's a product master dimension where one island supports the product master or the date dimension and you want to pass that information over to the other island.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=642s" target="_blank">10:42</a> So that it can use that same dimension character, and the idea would be when you use that date field on the report or in the visuals, that one date field could filter both islands independently.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=652s" target="_blank">10:52</a> Yeah, and the challenge I think there becomes the island that is getting the data sent to it, the data is bundled up into a text string, all the properties or all the details of it, and it's being sent over as a filter for the other model. And if you have a small list of items in that filter, it works fairly well. You're not filtering an egregious amount of data, but you're adding extra compute, you're adding extra time for other engines to do a calculation and return the results to you.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=680s" target="_blank">11:20</a> And I think this is where people run into problems, and they were just running into really slow performance issues because we really didn't understand when the composite model came out what was the implication of connecting a common dimension across two models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=695s" target="_blank">11:35</a> Now honestly, I'm looking at this with composite models in the lens of Fabric now. I don't want to use composite models, I'd rather just bring the data down to my lakehouse and keep it there and maintain it there and then bring out from that single area multiple semantic models that live on top of the lakehouse data. I think my pattern has changed now that Fabric is here, and I would really encourage users to move away from composite models if you really think you need them and focus solely on the lakehouse.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=724s" target="_blank">12:04</a> I'll be honest, I think there are some use cases where composite models do a good job. And those are really good points because these are one of the cases to me that it looks great on paper but it didn't play out the same way. Just like the Yankees lineup this year, looks great, let's see how they actually perform.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=746s" target="_blank">12:26</a> And be honest, I remember using it, I remember there's a lot of times and situations where we were testing a lot of things out and the numbers just didn't seem right. Something I remember seeing off when I was connecting two semantic models together, even an existing source. I would love to give credit where credit's due, I do not remember who wrote the article years ago and it was basically the gotchas of composite models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=770s" target="_blank">12:50</a> One of the issues I was dealing with composite models was writing a DAX measure over a filter on the live semantic model side, the one that the live connection of the direct query over analysis services, into an aggregation onto my import. The number was not right, and filtering works differently.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=791s" target="_blank">13:11</a> So it's not just what you would think of having an imported mode where all the tables have the same filter rules. Composite models have a little different nuance, and you don't know this right off the bat, you just expect it to work like they're all import, like a normal semantic model, right? But it doesn't, and there's a lot of things that are not explicitly said when you look at composite models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=814s" target="_blank">13:34</a> And this is a big deal because again, the situations to your point, why would someone want to use a composite model? Well, they want to add another source, they want to combine two semantic models together and they want that to work as seamless as a normal imported semantic model. That would be the ideal approach, but you're limited, and I think that's been one of the harder growth stories here. On paper, theoretically sure, it makes a lot of sense.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=842s" target="_blank">14:02</a> And this is something I would love to push for my managed self-service, because people ask for something like this all the time. If I give them a semantic model and we've pushed out semantic models, they're like well this is great, but we have another source, we have another table, it'd be great if we could add this on. Which you need to have that discussion in a self-service environment, do we add that to this already certified or this already created semantic model just for this use case.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=873s" target="_blank">14:33</a> So it's easy to think a composite model makes a lot of sense here, but again you have to be aware of the limitations. This is one of these golden rules especially with a feature like this, where it's not going to play as you expect it to.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=889s" target="_blank">14:49</a> Yeah, in the performance documentation I sent out earlier in the chat, there's a whole big section around performance implications. And I think what we're talking about here is this idea of the literals, a literal value that's being passed from one island to another island. And so that's where they throw out a lot of cautionary tales.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=908s" target="_blank">15:08</a> So typically when you build a visual in a semantic model, you would build a visual, that visual would then generate its DAX query to generate that visual. There would be one query that goes back to the model, the model would then calculate its measures, its columns, it's summarized by, group by, order by, all the things that you normally have in a DAX statement, and that would come back to the visual and the visual would render.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=929s" target="_blank">15:29</a> And then as you click on other things on the page, that visual then updates with that. That query will slightly change based on how it's being written to go get the data for the visual. When you are running a composite model, one visual doesn't necessarily make one query anymore. One visual may make multiple queries.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=950s" target="_blank">15:50</a> They call that out here, a source query that has lower granularity. There might be for a single visual now multiple queries are running at the same time, and I think this is really where we start seeing the performance hit on things. Traditionally when you're building on top of a single semantic model, you're going to build it in a way that Power BI knows how to build a single query to get all the data out.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=973s" target="_blank">16:13</a> When you have these multiple queries happening for the same visual, inevitably it will take longer, right? Anytime you add more queries to get the data out, each one of those will run a certain amount of time. Unless you have a really tuned model or you really have high performance, talk about 150 milliseconds for maybe a normal visual or 300 milliseconds for a normal visual.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=994s" target="_blank">16:34</a> Take that query and multiply by two or three times. Well now 300 milliseconds, a third of a second, right? So instead of a third of a second to return data, multiply that by three, well now you've got 900, almost a second to return the visual. So if you're running multiple queries from that same visual, no wonder it feels a little bit slow, no wonder it feels a bit laggy, because you're adding extra processing time for other things to go get the information. It's not instantaneous like you would have expected with a single semantic model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1025s" target="_blank">17:05</a> So anyways, I just want to point that out, the performance implications. I'm just trying to align the language of what we're talking about here, about literal values and things that are going there. One thing I want to unpack Tommy is your question here around the business need.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1039s" target="_blank">17:19</a> So the business is always going to ask for these little additions, these little extra things here that are going to be bolted onto a model. And so what I don't understand here is how do we control those requests? It seems to me if you're building, my mind goes towards what you said around certified, right? Hey we have this certified data set, this is what reporting we're giving here.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1067s" target="_blank">17:47</a> And then users are looking at that certified data set and saying, not quite.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1070s" target="_blank">17:50</a> Certified data set and saying not quite exactly what we need. Now this is where I need to dive into the requirements a bit more on what they're asking for specifically. Are you asking, is it something that we missed when we built the semantic model with certification data, or is this a one-off scenario where someone has a request around a single edge case?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1093s" target="_blank">18:13</a> Hey there's something wrong here, we need to enhance this data in some way. Can we just get a small extract of the data and play with it? So I'm of the opinion that I would be more the opinion of we don't change our certified data sets on a whim like that.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1110s" target="_blank">18:30</a> If a large team of people are asking for data to be added, then I think I would sit back and say yeah maybe we really should stand back, evaluate and add that data to the semantic model. But that's going to take a little bit of time to really build the process, get the data in.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1124s" target="_blank">18:44</a> Hopefully it's not coming from Excel, it's coming from somewhere else. Where does the data come from? So there is some time required to build the business required to run that. And I think initially I would just say no, here's a copy of the semantic model, go play with it on your own and add what you want to add.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1143s" target="_blank">19:03</a> Because Donald is in the chat here saying, for if you have a dimension table, if you're adding some dimensional things to this model, that's going to be slicing, filtering, cutting, slicing, dicing the information. That's not as much of a weight on the model, but as soon as you start adding a whole bunch of really granular things or lots of details, then the composite models start getting really slow.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1170s" target="_blank">19:30</a> Yeah and you would love this to be a one-off thing but it's not. And I think another big part, regardless if it's certified or not but especially certified, is lineage. From a governance point of view too, the way lineage works changes when you make it a composite model. It does not follow the flow, it in a sense creates its own artifact that way as well.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1193s" target="_blank">19:53</a> So you lose a lot of the lineage too, which from a governance point of view, if you're going to implement managed self-service correctly, you really need to see for all your certified models what downstream has been created. And you lose that with a composite model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1209s" target="_blank">20:09</a> Now to your point Mike, if people want simple add-ons and it's a one-off thing, this is something I think with a certified model, unless it's going to be used throughout the business in multiple scenarios, it's a dead no to add on one additional thing because your model needs to be really just the core.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1232s" target="_blank">20:32</a> We don't want to add on random things especially if there are sources that have not been vetted. To your point, a lot of those sources are going to be not from a database or not going through any rigor. It's probably something from Excel or a random thing to do a quick analysis.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1247s" target="_blank">20:47</a> So yeah that's not something that we're gonna just add to a semantic model for the use case for that one team. You can, but it's still a need. Just to be clear though, you can use a semantic model and you can point to a different semantic model. You can take your semantic model on your local desktop and you can point to a different semantic model, but you can also import tables from another semantic model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1274s" target="_blank">21:14</a> So from a SQL table point of view, yeah, I almost would err on the side of if you need the one-off request around things, I think my answer would be look, this is our semantic model, it's certified, we're not adding things to it. You can submit a request to add something to it, we can evaluate it and see if it goes back to our process to actually add that table or dimension or column.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1297s" target="_blank">21:37</a> Extra things like adding columns and stuff like that, that's probably fine. It's not that big a deal, it fits in, conforms with your existing semantic model. And then when you need to do the one-off analysis, it's more of a okay, you're going to use import mode, go build your own model, add what you need to add.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1312s" target="_blank">21:52</a> And then periodically refresh your model to get what you want. And then once you prove out that the thing you made or the additional data is adding value to the model, then we can step back and say okay let's pull that back in.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1326s" target="_blank">22:06</a> Can I, yeah go ahead. No go ahead Tommy, I'm sorry. No I want to propose an alternative. But just to say, if this is such a need and if we don't want to do composite models, then what? Maybe parking lot that. I have another point I want to maybe bring up here, just slightly different around this one.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1346s" target="_blank">22:26</a> So if you think about what the Analysis Services engine does, just unpacking the mechanics of it. The Analysis Services engine hashes data. A lot of times I describe and explain what does a semantic model do. They're like, well why are we copying the data again? You already have it in the lakehouse, why do we need to copy it again and import it into the semantic model?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1367s" target="_blank">22:47</a> And I describe it as the semantic model is yes copying the data from your tables, whatever that may be, SQL, whatever. But it's building a cache, an in-memory cached version of that data. So that is one of the strengths of the semantic model, is the fact that it does have the ability to use in-memory caching.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1388s" target="_blank">23:08</a> It can operate on the data in compressed formats, so it's already using the compressed format of the data in columnar store to make the analysis complete, which is great. That's what makes it super fast. But that caching experience is the same thing that is a strength but it's also the semantic model's weakness, especially when you're doing things like composite models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1409s" target="_blank">23:29</a> So Tommy, I don't know, maybe in the past you worked on other tools, but have you worked on other tools like business objects, or I'm thinking like Tableau or other tools as well? Have you had experience with those tools building some dashboard report with them?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1424s" target="_blank">23:44</a> Unfortunately I have, but briefly, not enough. So it was one of those, we were vetting it or I was testing out for migration. I'm like, I don't want to touch this anymore, this is frustrating.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1437s" target="_blank">23:57</a> Well when I look at other tools, tools that are not, I think MicroStrategy is another one that has a very good reporting tool, which they're not all about Bitcoin, they're not so much about reporting anymore but whatever.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1449s" target="_blank">24:09</a> So when I look at these other companies that do reporting, as we think about what they're doing with reporting, it feels to me like they're using SQL more on the back end. And so if you think about the difference between a cached semantic model versus a SQL-accessed data set, SQL doesn't really care where the data comes from.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1473s" target="_blank">24:33</a> If you're writing one query or three queries or doing a join or union between both of them, to me building visuals on top of SQL seems a bit more flexible. And it's doing a better job of being able to quickly get the data aggregated in from these various sources.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1494s" target="_blank">24:54</a> So I feel like in tools that use just pure SQL to access the data, yes they might be slightly slower to build the visuals initially or get that data loaded in because it's not necessarily caching. You could have a really performant backend, a really performant SQL server, but that ability for you to create that quick connection I think really changes things.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1513s" target="_blank">25:13</a> Oh someone brings up a really good point in the chat here. What about Direct Lake and shortcuts? And does that change our thinking for composite models? Because now, yeah, before we were like you got to cache the data and get it into the model. Direct Lake changes the game here a little bit.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1535s" target="_blank">25:35</a> All right I'll pause there. So before we get to Direct Lake, and I want to get to Direct Lake too, but before we get to Direct Lake, just the point on the SQL table which was very close to what I was going to say.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1547s" target="_blank">25:47</a> The alternative where okay you're adding the tables rather than having the model and semantic model, but that leads to an issue because you lose relationships and you lose the metrics or you lose your measures that way. Which is why someone wants a semantic model usually in the first place, because we already have all the relationships established, we already have all the measures established.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1569s" target="_blank">26:09</a> I'm just trying to add data to that. So when you have just the SQL tables, even if coming from a semantic model, then someone still has to recreate the business rules and really the rules that govern that semantic model. You're just at that point basically might as well create data flows and have people connect to that for the tables.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1594s" target="_blank">26:34</a> Because again you lose the benefits of what a composite model can do. And I think that's a big, big point here. Because I wanted, before we get to Direct Lake, which I think that's the next thing I want to talk about.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1605s" target="_blank">26:45</a> I think that's the next thing I want to ask. If you're the data architect in an organization, what's going to be your rules? What would be your ideal rules around composite models?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1614s" target="_blank">26:54</a> I don't think we're going to use them at all if I can, right? So I'm going to try and not use them as much as possible. Again, my landscape of what we're building, I'm assuming Fabric's already available in my organization.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1628s" target="_blank">27:08</a> Not every organization can assume that. So I'm going to make some assumptions about your question. I'm going to assume lakehouses are there and I'm going to push everything to go to Lakehouse. Honestly that's where I'm going to push the data to go because that to me that's easier to work on.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1659s" target="_blank">27:39</a> If I need to change the data, shape it slightly differently, I need to make changes, that's where the semantic models pointing directly to the Lakehouse. That's where I have a lot more capability.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1671s" target="_blank">27:51</a> And if I think about it right, the reason why we're caching information, the whole reason the cache exists is you're pre-computing the data transformations. You're trying to shape the data the best way you can so your DAX stays simple.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1705s" target="_blank">28:25</a> We build star schemas and we shaped it like a star schema for the visuals and the reports because that makes it efficient for the model to go grab the data at scale. And you can have hundreds of millions of rows, hundreds of billions of rows.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1720s" target="_blank">28:40</a> But if you build the model in a good way, it's able to quickly filter out the data and get down to the answers that you need. So for me I'm really focusing on optimizing that semantic model and making sure that the tables are shaped the best way you can.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1755s" target="_blank">29:15</a> Now that's a very BI data engineering centered way of thinking. And I can't assume that every organization is at that level of thinking all the time. So there's what if you're purely a Power BI shop, what do you do then? How do you bring lots of different sources together?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1793s" target="_blank">29:53</a> Because you don't have the advantage of Direct Lake or the Lakehouse to bring those composite model pieces together. One thing I'll just maybe point out here very briefly is I've had a couple use cases where composite models seem to make sense.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1816s" target="_blank">30:16</a> Let me give you this scenario. Let's talk about the master and the mini model. The master model has lots of tables in it, there's tons of tables, right? And maybe this is a composite model because Direct Query over Analysis Services is part of the composite model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1853s" target="_blank">30:53</a> But what we were doing was we were having this concept of we have one large model, everything is contained in that model, and then what I wanted to do is I wanted to just give users a narrowed down version of that model. Not all of it but just a portion of it.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1888s" target="_blank">31:28</a> So I don't need all fact tables, I don't need all the dimensions, I only need a handful of things that I'm trying to produce to those people. So what we were doing was we were taking a main master model and from there carving out a handful of tables, something smaller for a topical area, and using that as a reference point.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1930s" target="_blank">32:10</a> And in that mini model we were also adding documentation from the master model by using info view. So technically I was building a composite model where in the composite model I was able to go grab the measures and the columns and the definitions, the explanation of that model. But I didn't want to give everything to that user.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1970s" target="_blank">32:50</a> Right, so there's this idea of using a portion of it that was connected to the main model. Jake you bring up an interesting point, you're talking about a perspective. Perspectives have their advantages but perspectives are more difficult to work with.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=1986s" target="_blank">33:06</a> And you technically can't carve out like a perspective needs to be applied with object level security. And the perspectives don't necessarily remove tables that shouldn't be accessed to users. So if you're going to give users the ability to build their own reports on that model, perspectives don't seem to be obeyed very well.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2023s" target="_blank">33:43</a> So this was really like I was trying to think of the master model and then mini models that describe certain areas. So that's one area that if you're pure Power BI I would work on that design. But again I'm probably going to be very cautious around where I open up composite models for others to use.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2062s" target="_blank">34:22</a> Sorry I'll just pause there, there's a lot of things I just said. Yeah so I'm going to go on a quick mini rant about perspectives here because I think it deserves to be said. First off, I'm a little peeved that perspectives were not more globally available in Power BI.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2079s" target="_blank">34:39</a> Because it's a really powerful feature. And if you're not aware of what it is, it's simply different views of the same semantic model where I may have a sales and marketing semantic model and has all the tables for facts and dimensions for marketing and sales.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2115s" target="_blank">35:15</a> Well if I would just want a view of the marketing model, just those tables and measures, I can create a perspective that is hiding and showing columns, measures, and tables for just a certain subset of users. Like hey show me the marketing perspective.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2151s" target="_blank">35:51</a> It still is the semantic model connected to the whole thing but it's object level security. Now the only place you used to be able to create it was in Tabular Editor. But the only place you saw it in Power BI was for personalized visuals. It wasn't even for connecting to this.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2190s" target="_blank">36:30</a> Correct, so the reason this has not been part of the manage the security or in my semantic model settings to say these people can see this perspective or these people can see this perspective is beyond me. Why that hasn't taken off, because you want to talk about solving a lot of people's issues.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2228s" target="_blank">37:08</a> Having those different perspectives and not just a default one, but having those multiple perspectives would, to your point, be that issue solved about the master model. You can have those subset of tables, you can create a much larger model, and you can have those additional add-ons.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2248s" target="_blank">37:28</a> But your master model is just the core view of the core items and then you can have those add-ons as the perspectives. So that's the one thing I just want to say about perspectives. Why it's not more part of the Power BI workflow is beyond me.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2279s" target="_blank">37:59</a> We weren't even able really to build perspectives in desktop until recently, until TMDL showed up, right? Yeah, you couldn't even really start a perspective at all. When they did the model preview in the diagram view, you can now create one.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2298s" target="_blank">38:18</a> Before you had to use, so this is weird, the semantic models could use perspectives. You could see them only in the model view in the modeling tab on the left hand side. And then I think only now recently you can actually describe the perspectives using TMDL.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2321s" target="_blank">38:41</a> So TMDL is the definition language of a model and now you can script the model and then in the model scripting you can now see the perspectives that you're able to show and hide to people. Which is fine but again the only implementation, the only action of that is on a personalized visual.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2357s" target="_blank">39:17</a> If someone's going to use a personalized visual, which perspective should be shown. Which again, I feel like that's missing, it's missing a big win to me.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2369s" target="_blank">39:29</a> Sure, yeah makes sense. So yeah, quickly before we move on, the lakehouses, I'm going to tease that. But yeah, if I'm a data architect and I am a Power BI shop, composite models are by approval only. And that would be the ideal world that I'm going to live in.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2404s" target="_blank">40:04</a> And this is a big reason why, and I know I can see already you have some qualms with this. Your own data architects, they're not going to, the natives will get restless and they'll go do their own things.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2423s" target="_blank">40:23</a> For composite models, yeah I would argue you're right. Yes composite models are not acceptable in a certified space. It's just not going to perform well. So I would kick them out of there for sure. If you're certifying stuff, that would be one of my rules. Is it a composite model, yes or no? Yes, probably shouldn't be certified. What can we do to fix that?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2461s" target="_blank">41:01</a> But keep going, you're saying no to composite models. I'm really saying no to composite models because the value, the benefits are not worth the risk and the limitations. Especially if people are not aware of the performance issues.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2477s" target="_blank">41:17</a> But to me, as much as I'm concerned about the performance issues, if I'm doing managed self-service, I am equally if not more concerned about the accuracy issues. About people being aware how the context is going to flow through these.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2494s" target="_blank">41:34</a> If most Power BI pros are not aware, I guarantee you the self-service world's not. So I am very cautious of that. So I'm going to put that by approval only.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2141s" target="_blank">35:41</a> I'm gonna put that by approval only. You got to submit a form. You want to do a composite model on, you want to add on, okay submit a form and we'll review it. But this is not something that just anyone can do if they're in the self-service world. It's not worth the risk.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2156s" target="_blank">35:56</a> How do you turn that off though? This is the ideal world we talked about, but in Power BI Desktop you can set up whether or not you want a composite model added based on how much lineage. Desktop you can, but you can't, if your users have Desktop, one you either teach them about composite models or you say don't use them.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2181s" target="_blank">36:21</a> But what's stopping them from actually making composite models in their own workspace, in their own team? Let me ask this question, are there any controls at the Power BI admin level that restrict that? And I would say no.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2199s" target="_blank">36:39</a> The setting in Power BI, if I'm on the imported, the actual source model, and I'm in Power BI Desktop, sure there's a setting to control how much lineage occurs afterwards and whether or not I want direct query over that. I can only establish, say, just for it to be live connection.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2215s" target="_blank">36:55</a> But stop if someone tries to do direct query, which would entail model. Yeah so you're saying on the models that you would publish, you would turn off the ability for people to directly query them, which would effectively kill composite models. I have to double check that feature.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2230s" target="_blank">37:10</a> So yeah, that would be something. So again I'm thinking about the admin portion of this now, trying to unpack that a little bit. Trying to go through all the composite model pieces, right? If you're going to do that you would need some sort of tooling that would be able to scan all your data sets.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2264s" target="_blank">37:44</a> I'm assuming that's a property on the model somewhere and you would need to have a scanner, something that could list all the data sets, semantic models, and then for each one of them look for that property and see a coverage of how many of your models are set in that fashion.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2281s" target="_blank">38:01</a> I understand what you're saying. I get it. Certified things, probably you're right. I'm with you, that you have control of what's going on there. But I really don't think we have the ability to give that level of control down to individual teams and individual users building models and things.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2282s" target="_blank">38:02</a> I don't think you're gonna have to have a very heavy hand, a proactive hand of scanning everything to figure out if it's using composite models or not. No, you create your own semantic model on your team, if you mess it up that's on you.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2294s" target="_blank">38:14</a> But if I'm controlling the models that are certified, yeah, that's you're driving your own car on your own gasoline, your own dime. Where I'm pushing back on you here is the ability to fill out a form and require that you have a form filled out to do composite, that's not possible, that's not enforceable.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2312s" target="_blank">38:32</a> You can't change that. The only thing I think you can really enforce is some regulation around processing people that are saying, if you're trying to certify something, there's a limited amount of people that can certify. And then those people have to agree, or the Center of Excellence has to agree.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2328s" target="_blank">38:48</a> We're going to stay away from composite models. And if there is a composite model that shows up that we need to certify, we really need to think hard about, are we doing something wrong? Does the data not exist in the right places?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2343s" target="_blank">39:03</a> What is causing the model to be composite? And then once you understand that question, then you can say, do we actually allow this or permit this model to move forward with using a composite model?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2355s" target="_blank">39:15</a> One other use case here, I was Googling Kevin Arnold's chat about this video. I'm going to see if I can go get the link here, I accidentally canceled the browser window. But Kevin also pointed out the practical use cases for composite models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2372s" target="_blank">39:32</a> This is the video that he did for a user group session. I believe he did it for one of these user groups, so I'll copy the video here. It was done quite a long time ago, it hasn't really changed too much. So here's the YouTube video, it's in the chat window as well from Kevin.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2385s" target="_blank">39:45</a> Great speaker, does a really good job, very thorough about his analysis here. But one of the things he also points out in his talk is the ability to use what-if parameters. Something that is small, that is added to the model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2398s" target="_blank">39:58</a> If I want to project something into a measure, right? So let's imagine we lose these contracts, let's imagine we did an increase in percent sales or something, whatever the thing is, some sort of what-if parameterization where you're adding very small tables to an existing model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2413s" target="_blank">40:13</a> To have new measures that will then be able to be dialed up and dialed down. That sounds to me like a reasonable use case because it ticks the box for me in the various areas where it feels acceptable, right?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2425s" target="_blank">40:25</a> You're adding smaller tables, you're adding a very minimal amount of information that you're going to be using in a measure to go hit the regular part of the model. That feels to me like a reasonable use case to use composite model pieces.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2444s" target="_blank">40:44</a> So anyways, just gonna point that out as well, an area that I felt was worth calling out. Dude, anything Kevin produces is as thorough as it gets too. So yeah, definitely Kevin Arnold shout out. I think he leads the Dallas User Group, Dallas Fort Worth I believe, deep in the Heart of Texas.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2463s" target="_blank">41:03</a> Yeah, so I think it's time Mike. I think it's finally time. To your point, well we'll take it back. Now it needs to be said about Microsoft Direct Lake. And let's go there.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2474s" target="_blank">41:14</a> I'm gonna, I don't think this is gonna be a hot take, it may be. But as soon as you sign up for Microsoft Fabric, the benefits of a composite model become moot. You lose it. Because I really think so.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2489s" target="_blank">41:29</a> The Direct Lake is very interesting to me. So let me just unpack to you my understanding of what Direct Lake does for me and how I think about it. I'll just unpack it real quick.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2502s" target="_blank">41:42</a> So Direct Lake is taking all the compression of the import mode and putting it in a different compute engine, right? So imagine with me, you have an import model, you're going to go connect to a SQL Server.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2515s" target="_blank">41:55</a> The SQL Server stores data or sends data to the semantic model in row level detail. Here's one row of data, here's a second row, row, row, row, all the data is sent to you in individual rows.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2523s" target="_blank">42:03</a> The semantic model needs to take all of that table information, say look I have to have all of that table and I need to pack it in a columnar store. So you're going from row level storage to columnar storage and that's the big difference.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2539s" target="_blank">42:19</a> For me here, the compute required to go from that transition, I'm coming from my Excel file, I'm going to go into Power BI, it's going to take that row by row level detail and pack it differently and compress it down to a smaller subset. So I've seen anywhere between 4 to 10x size differences between the source data in table form and what Power BI can store in columnar form.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2563s" target="_blank">42:43</a> So what happens with Direct Lake is that compaction, the compression of the columnar store, can happen not in the semantic model but it can actually happen in the Lakehouse. And that's to me the real beauty of this.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2578s" target="_blank">42:58</a> When they introduced the Lakehouse, when they introduced Direct Lake, it's the idea that you can pre-calculate the columnar storage of data and push it into a Lakehouse. Parquet now becomes that format of storing the data, and then Power BI only needs to go read into memory that compressed table.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2597s" target="_blank">43:17</a> So it's not reading, uncompressing it, and then reading it and putting it back in Power BI and recompressing it. It's just reading the compressed form, the columnar storage of that data, and bringing it directly into the semantic model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2610s" target="_blank">43:30</a> And the also neat thing around Parquet files is everything's stacked in columns. So Power BI can be smart enough and say, I don't need this 100 column table, I only need the first five columns. So when Power BI is reading data from that table, yes it has the definition for where all the columns exist, but it doesn't necessarily need to bring all the columns in.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2631s" target="_blank">43:51</a> I've been playing with recently the DMVs, Dynamic Management Views, of Power BI. And those Dynamic Management Views are letting you query the temperature of the different columns in a semantic model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2651s" target="_blank">44:11</a> So as a report runs, you can get temperatures of how often a column is hit throughout a report, which is really interesting. Because now it actually starts showing you, here's your full model, here's each column that is important to the users using the report because of the heat coming off of those columns. Anyways, I'll pause right there, your thoughts.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2679s" target="_blank">44:39</a> Tommy I think it's time to lose the idea of the Lakehouse being just like your normal semantic model. There's a big thing here where I think a lot of people are still just identifying a Lakehouse as the same thing as a semantic model. I'm just going to import those particular tables or add those tables to the Lakehouse default semantic model and then I can add and expand it with additional semantic models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2703s" target="_blank">45:03</a> But the Lakehouse can be so much more. Let's talk about those add-ons that we already talked about where people want these particular tables, they want some of those sources added on to a semantic model. And again that issue with the composite model was the fact that well you have to now add this other source.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2722s" target="_blank">45:22</a> Well if I have shortcuts and I have a Lakehouse, I can still have a default semantic model with just the core info. The Lakehouse could have 25 other tables, it could have 200 other tables in it. That's never part of the semantic model except in unique situations.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2738s" target="_blank">45:38</a> Again just because you have a table in the Lakehouse, by no means does that mean it has to be in the semantic model. And I think a lot of people are still not identifying the full value of what a Lakehouse can be in terms of what it can store. It's so much more than just I'm building a Lakehouse so I can build a semantic model or this particular semantic model.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2762s" target="_blank">46:02</a> Yep, if you wanted to you could have a general marketing Lakehouse that can have 25 tables that can build all of your different semantic models. And I think the reason why people have that misconception is because as soon as you build a Lakehouse you have a default semantic model which is gonna pull in everything. And I don't think people are aware of building those additional semantic models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2785s" target="_blank">46:25</a> Yeah I don't typically use that very often honestly. I get a Lakehouse and you get the default semantic model, I very rarely use the default semantic model for any report building creation because it's slightly limited in what you can do there. I typically prefer to build my own new semantic model built on top of a Lakehouse and then pull in those composite tables.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2807s" target="_blank">46:47</a> But imagine, I don't think we're too far away from, and I think Britain is making some really good comments in the chat here talking about well direct Lake needs to allow you to pull tables from multiple semantic models. This makes a lot of sense to me and honestly the barrier shouldn't be too difficult to do that.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2824s" target="_blank">47:04</a> Right if you think about it, the tables are already compressed, the table's already being stored in a Lakehouse. It really makes sense to me that you would have the ability to span, again what Britain was saying here, direct Lake needs to support across Lakehouse models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2838s" target="_blank">47:18</a> I'm not really sure the models is the right word for it but at least cross Lakehouse tables. You should be able to consider all your Lakehouses as different parts and then you could think about different ways of securing that data. Because now you could have security at the Lakehouse level.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2852s" target="_blank">47:32</a> You could build common dimensions in a single Lakehouse, you could go to different Lakehouses to make models. There's also this concept of schemas now in Lakehouses, so a single Lakehouse can have a schema with it. Again I would also imagine you could span multiple between different schemas and pull out which tables you care about from which schema.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2873s" target="_blank">47:53</a> In my mind there's no physical limitation here because the Lakehouse has the tables in it. You're not doing the joins between two tables in the Lakehouse, you're doing the joins in the semantic model. The semantic model regardless needs to pull in the columns into memory to do the work of joining the relationships together and the measures.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2893s" target="_blank">48:13</a> So to me there feels like there's not a lot of barrier between whether it's just definition to one Lakehouse versus pulling tables from eight Lakehouses. It shouldn't really matter. So I don't know when or if that feature will be built, but to me that seems like a really reasonable logical next step for the direct Lake experience.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2914s" target="_blank">48:34</a> That'll open up a whole other world. But to your point Tommy, now do we think of composite models as composite models, I'm using air quotes here for those of you online. Composite models, right, or are our air quotes for composite models now focusing more on well it doesn't matter where your tables come from, they should just be in a Lakehouse somewhere or they should be somewhere else.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2934s" target="_blank">48:54</a> So again all I feel like I'm continually reinforcing with Microsoft as I'm using the product is more and more I'm getting excited about bringing tables to the Lakehouse. It makes things easier for me, it's easier to connect to them, it's easier to build semantic models on top of it. Sorry I said a lot of things there Tommy, any reactions?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2958s" target="_blank">49:18</a> No I think that's really where I stand on this and this is going to be my closing thoughts here. But honestly as soon as the minute you sign up for Microsoft Fabric and your organization does, the composite model loses its value. It loses any additional benefits that you may have because of what the Lakehouse can do.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2979s" target="_blank">49:39</a> You can keep your lineage, you have direct Lake, but more importantly you can have it add on all the things you'd want to do in a composite model. And I think the ideal structure, the ideal workflow, which is just better managed, better performance, and you can still keep your models and relationships with something default.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=2998s" target="_blank">49:58</a> So to me the day Fabric signed up for you, the day I stopped using composite models. That's a good point Tommy. I'm going to just randomly put out one other thought here, my final thought here.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3010s" target="_blank">50:10</a> When I think about composite models, direct Lake, Lakehouses, I really feel like there needs to be something a bit more around, let me just go really big picture here. Let's just stand back and say let's look at many Lakehouses, many tables. All those tables and Lakehouses have relationships between tables and measures, there's a lineage that goes along with that.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3034s" target="_blank">50:34</a> Why isn't there an ability to just define the relationships, define the measures across everything in one large area? And why can't we just have this Master model and mini model scenario? Why not define a series of tables and why not just define the measures and the relationships and then step back and say I'm going to build, especially when you're talking direct Lake, I can build any mini models.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3064s" target="_blank">51:04</a> So I should be able to have a view of information where I pick this fact table, that fact table has measures in it, that fact table has relationships to dimensions. I should be able just to say I need a model that has just this fact table in it or these two fact tables.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3084s" target="_blank">51:24</a> And what should happen is, you go to the model view today and you make a new tab and you say grab this fact table and show related tables. I want that big model that has everything in it and I want to be able to go narrow down to hey I want this fact table, this fact table, this fact table.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3100s" target="_blank">51:40</a> And it on the fly builds me the semantic model, pulls in all the related measures of those columns, and only the measures that span those tables. You may have other measures in the model that span additional tables, if it doesn't attach then you can't use it. So to me that would be really impactful.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3117s" target="_blank">51:57</a> So let's use the technology we have, build that massive model that's across everything, and then you select the tables you care about and the model is smart enough to say I will build you a mini model of the things you care about. And I will auto inject all the measures and the columns and the tables and the definitions that has been designed globally.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3139s" target="_blank">52:19</a> To me Lakehouse makes this a reality. You can actually do this now with Lakehouses. So I think technically I'm literally having an epiphany right now with this. This is like, I just made this up, so Microsoft here's your next multi-million dollar idea. Go build the Master model where you can pluck out tables and suck them down into mini models and we can use them from there.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3160s" target="_blank">52:40</a> All right that's my final thought, it's not really a final thought it's more like a final idea. With that being said, thank you all very much for listening to the podcast, we really appreciate your time here. Thank you for listening with us, we really appreciate your listenership.

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3176s" target="_blank">52:56</a> If you like this episode, if you like what we're talking about here, if you're using composite models or thinking about using them, go read the article we put in the link here of this video and check it out and read up on what you can and cannot do with it. That being said Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=NzvS2Znoh7Q&t=3202s" target="_blank">53:22</a> All right your audio must not be working so with that I'll say thank you very much, please like and subscribe and we'll catch you next time. Thank you.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
