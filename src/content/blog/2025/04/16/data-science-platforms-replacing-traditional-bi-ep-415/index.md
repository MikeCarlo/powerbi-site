---
title: "Data Science Platforms Replacing Traditional BI? – Ep. 415"
date: "2025-04-16"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Data Science"
  - "Analytics"
  - "Business Intelligence"
  - "Microsoft Fabric"
  - "Azure Maps"
excerpt: "Mike and Tommy tackle a community question about whether data science platforms are poised to replace traditional BI tools. They explore where analytics is heading and what it means for Power BI practitioners."
featuredImage: "./assets/featured.png"
---

Mike and Tommy tackle a community question about whether data science platforms are poised to replace traditional BI tools. They explore where analytics is heading and what it means for Power BI practitioners.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/5ej6S0Vik5k" 
  title="Data Science Platforms Replacing Traditional BI? - Ep.415"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[New mapping and location analytics capabilities in Microsoft Power BI | Microsoft Power BI Blog | Microsoft Power BI](https://powerbi.microsoft.com/en-us/blog/new-mapping-and-location-analytics-capabilities-in-microsoft-power-bi/?WT.mc_id=DP-MVP-5002621)** — The Microsoft Azure Maps visual in Microsoft Power BI enables all Power BI users to visualize and analyze their data on maps to uncover patterns and trends.

- **[Empowering businesses with smart capacity planning: Introducing the Microsoft Fabric SKU estimator (Preview) | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/empowering-businesses-with-smart-capacity-planning-introducing-the-microsoft-fabric-sku-estimator//)** — We’re excited to unveil the Microsoft Fabric SKU estimator, now available in preview—an enhanced version of the previously introduced Microsoft Fabric Capacity Calculator. This advanced tool has been refined based on...

## Main Discussion: Are Data Science Platforms Replacing Traditional BI?

A community member posed a thought-provoking question: with the rise of data science platforms and AI-driven analytics, is traditional BI on its way out? Mike and Tommy dig into what this shift actually looks like in practice.

### The Evolving Analytics Landscape

The lines between traditional BI and data science continue to blur. Tools like Microsoft Fabric are bringing data engineering, data science, and business intelligence onto a single platform, making it easier for organizations to move between dashboards and notebooks. Mike and Tommy discuss how this convergence doesn't necessarily mean replacement — it means expansion of what's possible.

### Where Traditional BI Still Wins

Despite the hype around data science platforms, traditional BI remains essential for the vast majority of business users. Self-service reporting, governed data models, and interactive dashboards solve real problems that most organizations still need. Tommy and Mike emphasize that not every question requires a machine learning model — sometimes a well-built Power BI report is exactly the right answer.

### The Data Science Opportunity

Where data science platforms shine is in predictive analytics, advanced statistical modeling, and AI-driven insights that go beyond what traditional BI can offer. The key is knowing when to reach for each tool. Mike argues that the smartest organizations will use both, with Power BI as the presentation and exploration layer and data science platforms handling the heavy computational work underneath.

## Looking Forward

Mike and Tommy see a future where BI and data science coexist more tightly than ever, especially within platforms like Microsoft Fabric. The advice for practitioners: don't panic about replacement, but do invest in understanding the broader analytics stack. The more you know about what's possible across both worlds, the more valuable you become.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=33s" target="_blank">0:33</a> Welcome back to the Explicit Measures podcast with Tommy and Mike. Tommy, good morning. Good morning, Mike. It's a pretty good Tuesday. Not a bad one.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=41s" target="_blank">0:41</a> It's been decent. This week turned into a long week. It's only been one day and I already feel like it's been two. So, one of those weeks for me. How about you, Tommy?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=51s" target="_blank">0:51</a> We're good. We feel fresh and clean. We had a PC issue on Saturday. That uncorrectable error. So, I was forced into my normal spring cleaning of cleaning the computer. Oh boy.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=63s" target="_blank">1:03</a> Like I started, I do think this is a thing. I haven't done one in like two years now. So, I feel like I'm on borrowed time at this point, but I feel like every year there needs to be like, okay, save everything you need to OneDrive. And then just reinstall your software. Just clean it all up.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=78s" target="_blank">1:18</a> Cuz there's things you install randomly at random times, you don't use them anymore. It just feels good to get a clean install of Windows on your machine. We are, and again, forced to because went to sign in again or start the computer and it said, "Hey, install Windows." I'm like, "Well, I guess we're doing that today."

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=97s" target="_blank">1:37</a> Yeah, dude. It was a whole thing, like we had to mount an ISO, get that installed on another drive. So, good gracious. We're blazing right now. How fast my desktop's clean. It's great.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=110s" target="_blank">1:50</a> Awesome. All right, let's quickly just introduce our topic today and then we'll go through the news. Today our topic is around data science replacing traditional BI. There's a lot of talk about this AI and where is it creeping into our business intelligence?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=124s" target="_blank">2:04</a> How do we use it? What's the surface area here? We actually have a mailbag question that's asking more questions about this, particularly around a lot of other platforms. There's other platforms that are out in the space. Everyone's heard of Databricks. There's Snowflake. Microsoft has their Microsoft Fabric experience.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=141s" target="_blank">2:21</a> So, what does this mean? What persona are we bringing to Power BI now? And does this even fit? I don't know. We're going to unpack that today. But before we get into our main topic, let's do a couple items around the news.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=156s" target="_blank">2:36</a> Tommy, we have I think an interesting one. I think this is quite interesting. Why this hasn't been supported until now, I don't know. But I'm looking at the first topic here, the Azure Maps is now being supported in publish to web.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=170s" target="_blank">2:50</a> Which is interesting, that's a pretty interesting item there. What do you think? Do you use, I don't use publish to web other than like my personal reports and things like that. What do you think?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=180s" target="_blank">3:00</a> I have one report with buddies and it's about just baseball data that I pull, but no, from an organization point of view I do know some government organizations who do use publish to web. It's actually pretty important for them to actually share some of that information.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=199s" target="_blank">3:19</a> The districts and parcels and all that information and maps are a big part of that. So honestly I'm surprised this wasn't more supported because usually if you're publishing to web there's a lot of organizations where that's important.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=214s" target="_blank">3:34</a> Yes. And published to web, it's just on the internet. Azure Maps, you can literally go to Bing and just look at an Azure map there. So there must have been some technical hurdle or something they didn't want to deal with. They had Bing Maps, that's why. But this is all on Azure. This is a better experience in my opinion.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=238s" target="_blank">3:58</a> The maps, I think maps are interesting. I think maps have varying degrees of success with me. They're pretty, they go on a page, they fill up some space. They do handle some really creative things, but I feel like a lot of times maps are just there to be some frill for the report.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=257s" target="_blank">4:17</a> I'm not sure if it really tells me deep insights. For a lot of local intensive companies like even sales teams in your stores, they are pretty integral. And more than just like I can see where we are now. But do you really need a map to show me like Texas has a higher number of sales because there's more people there, or California has higher number of sales because there's more people?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=279s" target="_blank">4:39</a> I'm more like active stores and they want to see what's closer to them in the region and zip code 557 is not as helpful. So, well, I understood that one, but also if you look at that, there's no distance mapping. This is where I would go, if you're going to be doing things, that's where I would go towards like the Icon Map which is a custom visual that does a lot more of the features there.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=301s" target="_blank">5:01</a> So I'm just looking at it going, if you just plop a map, some of the more interesting visuals that I've seen in reporting have this really interesting like when you click a region the map zooms into place and you can see all these zooming in features. There's amazing things that people have done with them to make a really good looking report, but to me it feels a lot more polished than it actually is deep analytics around the thing.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=325s" target="_blank">5:25</a> I'll change your opinion with one. There's one map that's critical to you and that's where your package is on Amazon. What stop is it at? You always look on that map. Okay, how far are we? So depending on the data, but no, I'm glad this is available. I know a lot of reports that are going to be very happy with this.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=344s" target="_blank">5:44</a> I think so, too. I think it's a good rounding out feature. So, I'm very happy that that feature exists. The blog post is in the chat window if you want to check it out. It's also in the description below if you want to go see more about that new feature that has just recently been released.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=358s" target="_blank">5:58</a> All right, Tommy, you found something. And it's fun when our community is engaged because I even got someone emailing me this link like, "Hey, do you know about this?" There is now a new tool. You can go estimate your Fabric capacity. What size Fabric capacity do you need?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=377s" target="_blank">6:17</a> Based on your workloads, what your workloads are, what size Fabric capacity do you want? All right, Tommy, you've read the article, you've played with the tool a little bit. What is your initial impression?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=389s" target="_blank">6:29</a> So, my first thoughts, this was going to be like the old Power BI Premium. Enter users, enter how many creators you'll basically get, what your capacity is. This is obviously a little more intense. That's much closer to what you would do in a pricing for Azure.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=405s" target="_blank">6:45</a> Basically what this is, is a price skew estimator. We're just putting in our information. How much data do you have? How much of it's compressed? How much does it move? What workloads are you using? From everything from the amount of people who are processing to how long you're going to be running data flow on a daily basis. And it'll spit out for you your capacity that you probably need.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=425s" target="_blank">7:05</a> All that being said, I would like to know some of the behind the scenes metrics that were used to create this. I don't know how far I'm going to go with that, but let me say this. Use this as a starting point.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=441s" target="_blank">7:21</a> I would agree. It told me based on what I do for a company that I needed a 164, which sounds great. And maybe it's because all those dang data flows, that one data flow that I ran. But I was very surprised to see some of the outputs there. Mike, what was your thoughts?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=461s" target="_blank">7:41</a> Yeah, okay, so this is a Fabric-based tool. Let's just talk about that. You may be looking at this going, also here they said what's the total size of your data compressed in gigabytes? I was trying to pick something less than one gig in size. So they've already put you at like one.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=481s" target="_blank">8:01</a> So my first thought here is they're already doing like one gig and you can't go any lower than one gig. So if I'm thinking about my capacities or things that I've built, I'm playing with some initial things and I don't know exactly the size of all these things. So that's one challenge there.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=497s" target="_blank">8:17</a> The number of tables across sources. Okay, maybe that's interesting as well. Okay fine. I selected only the option for Power BI, just the Power BI option and it told me I needed an F2 just to select an option there. And even then, I added just a couple extra users and it automatically pushed me to an F-16.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=519s" target="_blank">8:39</a> So even when I wasn't adding no workloads of anything else, there needs to be something there. It's like a provision of like you could probably just get away with a Pro or Premium Per User item. Like if I have anything less than 100 gigabytes and I'm only using Power BI, there should at least be a provision here. And again I get it. This is a Fabric skew estimator.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=537s" target="_blank">8:57</a> So it's trying to estimate which size Fabric capacity you would need. I understand. But I also feel like the story isn't just Fabric. The story is Pro, Premium Per User, and Fabric.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=550s" target="_blank">9:10</a> Well, no. I was going to say the story isn't just people migrating where they're like oh yeah I have all my data in SQL database and I have all these different things that are running in data, some in other platforms. A lot of organizations are taking their old unstructured data and moving it to the Lakehouse for the first time, so how do you estimate that?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=568s" target="_blank">9:28</a> And the other thing here too, when I selected a workload of just Data Factory, and then picked out the Data Factory option for dataflows gen 2 ETL. So, I just picked that and said, okay, I'm going to do Data Factory and I'm going to have two hours of dataflow gen 2 running.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=592s" target="_blank">9:52</a> When you look at the little metered bar, only two hours of daily running, you've basically maxed out your F2. So, I also disagree with that as well. If we're doing two hours of dataflows gen 2 on an F2, it's not nearly as highly used as what the indication shows.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=608s" target="_blank">10:08</a> Highly used as what the indication of the notebook looks like. So it just feels like a very rough estimate and it feels like it's overly estimating high on a lot of things.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=620s" target="_blank">10:20</a> Well, let me put it this way. I just tested, I said I have one gig of data, one batch cycle, one table, but I run five hours of data flows and that's it. That's it. You're done.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=630s" target="_blank">10:30</a> I know for a fact you could do five hours of data flows in a day and still fit it on F2. I know for a fact and it's saying F8, I'm like whoa.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=660s" target="_blank">11:00</a> This is where my reality is telling me this is a little bit different. And the other thing I haven't gone into too deep on this one would be, it's not like I also want to go back and forth between what does it say for Spark jobs and Power BI.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=682s" target="_blank">11:22</a> Because I'll also argue here, I've done a number of Spark jobs on an F2 and the Spark jobs are way more efficient than a dataflow gen two job. So again, when I look at this analysis, I'm thinking if I'm using Spark jobs, I'm starting at the F2 and working my way up.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=717s" target="_blank">11:57</a> But this is one of these places where people are still trying to think like a SQL server in my opinion, right? People are thinking that I need to understand the total capacity first and then go buy the unit. I don't think that's the right approach here, especially with cloud features.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=736s" target="_blank">12:16</a> You realize within a minute or less I can go into the Azure environment and I can change my F2 to an F4 at a drop of a hat. So why wouldn't you always just start with the F2, run some of your jobs in test, see if you start falling over, and then okay, well that wasn't big enough. Let's go up to an F4.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=774s" target="_blank">12:54</a> Okay, let's go up to an F8. And now there's this whole option of autoscale billing for Spark, which is more like pay as you go, which I love by the way. Then you don't even need to include Spark as part of the purchasing agreement here. That doesn't even include it.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=811s" target="_blank">13:31</a> So there's, I think this is an overly simplified tool that's not really going to tell you what you need. And I would argue you really just need to get in and just use Fabric a bit. Start at the smallest SKU, run a couple jobs, see what it does, and then from there you'll be able to gauge what size capacity you actually need.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=851s" target="_blank">14:11</a> This is very concerning for my data flows though. I've switched over a lot because maybe this is true. Remember the test that I did when you were traveling and that was a single data flow and I still maxed out.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=864s" target="_blank">14:24</a> So yes, I agree Tommy. This is very concerning for data flows. This is very concerning. I will also argue though, Tommy, this page where they made this, it looks like a Power BI embedded report into an actual website. That's what it looks like to me.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=900s" target="_blank">15:00</a> It looks like someone made a Power BI embedded report. Oh, those are all what-if parameters. You kidding me? There's one page with 18 sliders. So I have to inspect the page and figure out how they actually built that thing in there, but I'm guessing it is an embedded iframe, but I'm not even quite sure there.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=919s" target="_blank">15:19</a> So maybe someone even built a little web client. Looks like I'm looking at the page code right now. It looks like it's coming from deep fabricator estimator prod as your datafactory.net. So it looks like the web page has actually built a web app. So it's a little tiny mini web app that people are using and not a Power BI report.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=958s" target="_blank">15:58</a> So anyways, interesting. I will say this, away from embedded Power BI, why wouldn't you just make this an embedded Power BI report and publish it? The dumb thing. Anyways, whatever it is what it is.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=973s" target="_blank">16:13</a> I will also argue, I think what KratosBI is saying here in the chat, you should always just start at an F2 and work your way up to what you need. Because I again just really feel passionate about that being the right approach.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1007s" target="_blank">16:47</a> And the fact that if it was a week to procure a bigger machine or a week or two to get a bigger size, then I would be a bit more cautious around scaling up and getting the right size initially. But since I don't even care about that, start the smallest thing, save yourself some money and then only scale up when you need to for your workloads.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1046s" target="_blank">17:26</a> Anyways, that's totally a side note. Anything else, Tommy? I think, yeah, let's go back to your favorite topic. One last news item and then we'll get into our main topic today.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1060s" target="_blank">17:40</a> Tommy has found the VS Code for Fabric extension. Tell me about this, Tommy. Mike, it's plural. One, Tommy loves it. I'll say that. Yeah, dude, I love it. I love VS Code. And honestly, I just like the environment.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1094s" target="_blank">18:14</a> And for me it was getting used to how it all works, but once you do it's just more comfortable. This goes back to one thing we've talked about too where right now your whole world will live on app.powerbi.com to do all of your workflows.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1111s" target="_blank">18:31</a> But I think Microsoft has realized this is a lot of developer-based things that we have. We have notebooks, we have user-defined functions, we have building your model in TMDL. And those are all things that typically someone likes a better environment than just the web.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1146s" target="_blank">19:06</a> Obviously, that's the thing — if you wanted to play with Fabric, you had to have a good browser. And again, don't click Alt+Q, you'll close your machine. So now they've realized too that all these things make sense as part of a local environment or on your desktop.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1166s" target="_blank">19:26</a> And what we have now are, I believe, three extensions. We have our Fabric extension which gives you some information about your capacity, you can look up a bunch of things. They have the previously Synapse remote engineering which basically allows you to connect to your notebooks and run a Spark job locally connecting to your Spark pool.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1208s" target="_blank">20:08</a> And we now have the new user-defined functions as its own extension. So I will say this, I really love VS Code. The experience of editing code, writing things in there, super awesome. I even pay for GitHub Copilot because it's so powerful. It's so great when writing code.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1230s" target="_blank">20:30</a> So all that is amazing. And I really want this to work very seamlessly. We're not quite there yet. I feel like there's a little bit of friction for me. I haven't quite got it to work reliably all the time. Maybe I have too many extensions. Maybe I'm not sure how to use it correctly.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1262s" target="_blank">21:02</a> But I really want to go into Fabric, get to my notebook, and say open in either VS Code online or open in VS Code locally for me, and then just be able to have the full editing code experience right there. And I want to be able to run notebook commands against the Fabric cluster to return the results that I want, which you can do. It just, I've had varied success.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1307s" target="_blank">21:47</a> Sometimes the connection works, sometimes it doesn't. It's been a bit hard to sign in correctly for me. Maybe I signed into too many things. I'm not quite sure. The experience is a little bit rough around the edges at this point. And it needs to be a bit more reliable for me, but I think we'll get there. I think it'll get improved. Things in VS Code seem to move really fast anyways.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1347s" target="_blank">22:27</a> So I love this experience, Tommy. Yeah. There, I think there are three things until I'm using this full-time. One, connect to my Git already. Right now the notebook extension will download local copies of just the notebooks and then you have to connect to that.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1382s" target="_blank">23:02</a> So if you open your own notebook from Git, you can't do anything with it. So this is a separate thing. So let me just unpack that idea real quick before we go to the next one. You're saying that you would like to go right to the Git repo. It's already on my PC.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1416s" target="_blank">23:36</a> Yeah, I already have it connected to Git. Let's just go there in a notebook. And then you can be in the notebook and say, "Oh, I'm in the notebook." And then you can say, "Okay, I'm gonna go, hey, notebook, go fire up the corresponding workspace, right? Give me a cluster that I need to run on." Exactly.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1434s" target="_blank">23:54</a> And then just run the notebooks directly there. And then when I'm done, I can check my changes right back. Yeah, I agree with that. Yeah, that's 100% on point. I love that feature.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1462s" target="_blank">24:22</a> Spark utilities — you can connect to your Spark cluster. I don't know if it recognizes the local lakehouse that's pinned to that notebook. And there is no MSpark utilities which are pretty essential. So you can do a lot but okay, do it all.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1496s" target="_blank">24:56</a> Okay. Anyways, we're on a great track. We're on the right track and that's what I'm excited about. Awesome. Oh, one other random thought here, Tommy. Just around this whole notebook experience in notebooks. Did you know that there is a magic command called configure?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1529s" target="_blank">25:29</a> Yeah. In notebooks. I did not know this. It allows you to tune the notebook. You can magic command your way in the documentation. What on earth, dude? I was just watching a YouTube seminar with Santosh and he was showing me, you could do percent configure inside the notebook and you could set up the notebook settings right there in one command.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1553s" target="_blank">25:53</a> And it gives you a starting point. It gives you the features you may want to turn on. I thought that was amazing. So I didn't even know that existed. I want to point that out and say that's a feature in notebooks that you might love, and just use the magic command for configure.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1567s" target="_blank">26:07</a> Okay. Anything else Tommy, want to jump into our main topic for today? Let's go on to the main topic. All right. Today our main topic will be around data science platforms replacing our traditional BI. Data science — we don't talk about data science. You hear that Tommy?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1586s" target="_blank">26:26</a> Yeah. Looks like today we have a guest. So we'd love to bring on a guest today. Ginger Grant. Welcome to the podcast today. We're very happy to have you. Ginger Grant is an amazing MVP, does a ton of educational content and consulting around data science.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1604s" target="_blank">26:44</a> So I think we have the right person to talk about data science with us today. Ginger, welcome to the podcast. Thanks. Really happy that you had me on, Mike. Well, let's jump into our topic today. Tommy, give us the topic for today.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1214s" target="_blank">20:14</a> Tommy, give us the topic for today. And then we're going to react to this and give our impressions of where does this fit? Is data science actually going to replace our regular dashboards and business intelligence?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1226s" target="_blank">20:26</a> All right, Tommy, give us our mailbag question and we'll kick off the topic for today. We got a mailbag. It's a great mailbag. And it's a pretty long one, so hang tight.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1254s" target="_blank">20:54</a> Hello, I work for a Dutch company and we make software solutions for local governments, as a position as a BI consultant. In recent years, I see our customers, main municipalities, switching from Cognos to Power BI with the main reason as an attractive price model, integration with Office, and the simplicity of Power BI.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1277s" target="_blank">21:17</a> In my view, there's a shift coming to data platforms such as Databricks, Snowflake, and Microsoft Fabric. But reporting analytics is certainly not becoming cheaper or less complex with the arrival of, let's say for example, notebooks, integration in Delta Lake, Iceberg for storage.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1314s" target="_blank">21:54</a> Furthermore, in addition to a semantic layer in the above mentioned data platforms, a thin semantic layer in Power BI or Cognos is also necessary for business users to create reports themselves. Specifically with Fabric as a business-oriented data platform, it is more attractive for an organization to set up a data warehouse without the consultancy.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1335s" target="_blank">22:15</a> But in my opinion it is a pitfall for organizations because it looks very simple from the outside. I attended Databricks in Amsterdam two weeks ago and they also talked about the shift coming to data platforms. In essence the main goal is, and Michael's favorite phrase, democratizing data.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1374s" target="_blank">22:54</a> The focus is now on commonly used BI tools, but this will diminish in the future as AI will enrich the data in the platforms. Do the less fun jobs for the data engineer with higher quality and business users will just ask a question and create a dashboard for sales.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1397s" target="_blank">23:17</a> In this topic or the near future of analytics and data science, is the shift to data platforms and the associated complexity worth the conversation? Regards, Bastion. And I don't know if I can say your last name, but Bastion from the Netherlands.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1411s" target="_blank">23:31</a> So a lot to unpack here. Oh yes. All right, let's pick out a couple key areas we want to maybe touch on or topics around this as well. So first thing that stands out to me, migrations. What do we see here going for migrations? Are people... what do we see happening? Tommy, what do you see? Ginger, what do you see? Who's migrating to Power BI?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1453s" target="_blank">24:13</a> Oh, Keith said a couple of things that I thought were really interesting. For one, there already is a thin semantic layer inside of Power BI. So I think you missed that one entirely. But in terms of migrations, one of the things that I think is great about Fabric is how it helps data scientists because they want that raw data and it's very hard for them to get.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1476s" target="_blank">24:36</a> I worked with a bunch of data scientists recently and they were all ticked off that they couldn't get access to the raw data. They only had access to the data warehouse which they did not want. It does not help them.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1489s" target="_blank">24:49</a> And that's the warehouse is the sanitized layer of data. That's where we've already removed errors, we remove problems. And maybe even depending on where you are in your organization, that warehouse could be like your star schema almost already. And that, to your point Ginger, that's not what data scientists want.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1525s" target="_blank">25:25</a> Where do you feel like, Ginger, in your experience, we have this whole medallion architecture, this is the modern way of building warehouses. Storage is cheap, compute is a bit more expensive. So we store a bunch of data in bronze, silver, and gold. Where do you see data scientists wanting to touch the data, in what layer of this medallion?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1562s" target="_blank">26:02</a> Oh, they want raw data. They don't want anything curated, bronze, nothing. Nothing cleaned up in silver. Cleaned up, absolutely nothing. Not deduplicated.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1573s" target="_blank">26:13</a> And what tools are you seeing them use the most often? I'm assuming notebooks, just from that's what I see here. But where do you see the most use coming from? They generally write a lot of code in Python and there's some that are still using R because of the libraries that have been created that are specific to their industry to do analysis.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1612s" target="_blank">26:52</a> But the analysis that you ask a data scientist to do is not the same as you would ask a BI developer to do. You need both of them but they answer very different questions.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1643s" target="_blank">27:23</a> So this creates a very interesting conversation with these different platforms and the semantic layers. I think it is always going to be there, right, that's for hyperfast queries. I would also think there's some layer here where I saw a slide where Databricks is now messaging there is this semantic layer that exists for the BI user.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1667s" target="_blank">27:47</a> BI users don't want to go in, they don't want to write a bunch of Python to go get the data. They want something that's drag and drop, here's some fields that all relates together, that makes sense for that business user.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1696s" target="_blank">28:16</a> And to be clear, I think you pulled out a great point here. Power BI has had this for what, 10 years, 20 years if you count Excel when it had pivot tables. Like a long time ago, that semantic layer has been around for a long time in the Power BI space. Absolutely.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1730s" target="_blank">28:50</a> What's funny is that I think one of the big reasons that people don't... my cousin who works for a large entertainment company, she was saying that they tried using Power BI but their models were so complex that it took like eight hours in Tableau before it gave up. And in Power BI she couldn't get it to work because it was just spinning.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1774s" target="_blank">29:34</a> That doesn't tell me that it's a failure of the semantic layer. That just says that you probably need people that are dedicated to build a good semantic layer for reporting. Those aren't the same people. Report people are not semantic layer creation people.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1812s" target="_blank">30:12</a> So I'm curious because Mike and I have talked a lot about the shift with the data engineering side and I think we've shifted mindsets where we thought okay all these data engineers are coming to Fabric and it was really the other way around. It's like well a lot of business users are coming to data engineering, shifting up.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1831s" target="_blank">30:31</a> I have an opinion with the data science thing. They want the raw data because at least from the Microsoft data platform, the semantic model was not something very easily accessible and not in the structure or format that they want. But that's completely changed and it's almost like they would rather the raw data because that was the best method or approach at the time.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1877s" target="_blank">31:17</a> I feel like there's an argument to be made now with the lakehouse, with at least Semantic Link Labs too, where even just taking the company's data coming in through the right platform where you have right now with data science a really good avenue, not just to grab a CSV but to grab something semi-clean.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1897s" target="_blank">31:37</a> They only want the raw thing because they need it as raw or as unstructured as possible and fast. But now we have Fabric and I feel does that change anything? To me it does.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1909s" target="_blank">31:49</a> Well, there's also an issue of trust, right? Because a lot of people are like, well I wasn't the one who engineered this data. Really, is it... did you clean some stuff out of there that I might need?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1928s" target="_blank">32:08</a> That's an interesting question. Is that a data culture problem more so than a technology problem, you think? Oh, if you work with data scientists and BI people in the same organization, I did that recently at a large hospital, and yeah that's an adversarial relationship believe it or not. It's a huge culture thing.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1969s" target="_blank">32:49</a> Oh yeah. So this begs the question in my mind, can we actually have... so there's maybe two thoughts in my mind I'm thinking about. One is, is Fabric the right place for data science to come to? Ginger, in your mind based on your experience in data science previously, and now when we have Fabric, how do you feel? Is the tooling correct for what they need? Can we get the job done in Fabric, let's just start there maybe.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2015s" target="_blank">33:35</a> I think it's a lot better because a lot of the times the problem with data, the biggest thing that data scientists were spending their time doing is figuring out where the data lives and how they were going to get access to it in the way that they wanted it.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2028s" target="_blank">33:48</a> So having a data estate where you can just go to your bronze layer and get what you need, hey that's great. And I can tell you, they love VS Code too.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2046s" target="_blank">34:06</a> So my comment earlier about the more we can have Fabric integrate closer with VS Code, the happier data scientists will be in that space, which I would totally agree with. I really like that idea a lot. Yeah.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2059s" target="_blank">34:19</a> They would rather want to use anything other than VS Code. Well, but it's not just notebooks too. The pure data scientist, even though we work in data, it really is like saying how culturally similar you are to someone across the world. It's like we're both human, but that's where the similarities end.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2084s" target="_blank">34:44</a> Because they're much closer to that developer role where they're not just doing notebooks, it's Python scripts, they're writing their own packages too. So they need usually the raw like local or raw data accessible because I just don't need to connect to some runtime. I'm writing packages, I'm writing a ton of things that need these local installs.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2106s" target="_blank">35:06</a> So it's not just the data that's the problem making it accessible. Which is curious because Microsoft's doing a big push with the data science space right now in Fabric, and I think there's like three features available in pure data science.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1819s" target="_blank">30:19</a> Available and pure data science, it's the environments, it's notebooks, which is the same thing for data engineering, and it's the machine learning or the experiments. Are those just like stamped on to me? Because they feel like they are not nearly what a lot of data scientists are looking for.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1837s" target="_blank">30:37</a> Well I can tell that it's missing some. I was working with an organization, they're basically like cool, we can save money, everybody's going into Fabric, we're gonna push all the data scientists in there. And they were not happy with that because they really liked some of the features and functionalities of Azure Machine Learning that aren't in Fabric.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1857s" target="_blank">30:57</a> So if you want model management, yeah you can create a model in Power BI but you can't manage it. It's not monitoring it for spread, all the stuff that you have. Azure ML is not there. So they're like, we're losing stuff if we move to Fabric.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1879s" target="_blank">31:19</a> And that Azure ML model management, what's the language? I want to say the words flow but that's wrong. What's the model management? There's like an open source tool that helps you manage models but what's the name of that? It's dropping my name. It's MLflow. Okay.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1897s" target="_blank">31:37</a> So MLflow is like tracks, you can track all kinds of things like the input parameters, what model you used, what version of data you tested on inside MLflow. So the idea is as you run tests, and I work with a team that did some data science stuff, and they were explaining to me like we need something that allows us the ability to run a test, add new data, do changes to parameters and verify that these new models we're building are better or not compared to that original model.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1926s" target="_blank">32:06</a> And we may need to go back to the original state because again, machine learning, you have to understand the version of the data that you're running the ML on is important. You need a state in time of what was the state of that data that you trained that original model on.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1945s" target="_blank">32:25</a> Yeah. And if I'm connecting to something like a semantic model that's changing rapidly all the time, that doesn't help me. You're right Tommy. That's a really good point Tommy. Semantic models don't have snapshots into them. There is no concept of a snapshotted semantic model.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1963s" target="_blank">32:43</a> And if you're using the semantic model as a reference point to your machine learning or your MLflow, yeah, we have no way of knowing what the version of that data is because that data is constantly fluid. It's changing every day. We're getting more new information.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1978s" target="_blank">32:58</a> So that could influence your tests and then retraining a model that was done a month ago on some data that was stored a month ago probably won't be a thing if you use the semantic model. Well, you got to think too. Think about data changes all the time.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=1993s" target="_blank">33:13</a> Like for example, I'm going to talk about some machine learning that I'm sure that we have all run into. You get that call or that text from your credit card company saying we think that you have an invalid transaction. And you're like oh what is that?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2007s" target="_blank">33:27</a> Well I worked for a company and at the time if you changed your credit card address to Hollywood, Florida, they immediately flagged your card. Why? Really? Because that was a place that had a lot of fraud from it. Yeah. Because a criminal set up there.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2028s" target="_blank">33:48</a> Yeah. So in Florida, no offense, but they move right, and they realize well that's not working for us anymore. We'll do something different. You need to have your model do something different.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2049s" target="_blank">34:09</a> And that data is changing coming in. You're not getting transactions like you were before, and that's fraud. You need that constant analysis. Well, if you've got a model that was trained on old data, the crooks move around and they do different things. You have to have data drift saying wait a minute, this isn't what we used. This isn't what we did when we trained it.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2068s" target="_blank">34:28</a> And you can automatically monitor data drift in some existing tools that Fabric doesn't have anything like that. Another way your card gets flagged is if you, and I'm not proud of this, spending $60 at Taco Bell immediately.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2084s" target="_blank">34:44</a> So that is an outlier and I skewed their data. So now Tommy, were you feeding your entire neighborhood or is this just a Tommy run? I'd like 16 gordas and I need 45 — what's the saucer looking thing they have? Those crunch wrap supremes, right? I need 45, one of each please. Oh yeah.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2108s" target="_blank">35:08</a> So, but that's a really great note. I didn't mean to cut you off, but that is a great point where there's a lot of non-starters right now for the pure data scientists. Yes. So, but it's not BI. BI is so different.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2125s" target="_blank">35:25</a> So this is what I wanted to touch on. What's your reaction, Ginger, to these AI functions that are coming to the Fabric layer here? So we have these things like data agents that are coming for us in the Fabric world. We have these AI functions that are coming.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2144s" target="_blank">35:44</a> I've been of the impression that look, as a company, some companies are large enough that require a full-time data science on staff. I get that. I understand. But I feel like Microsoft is a huge company and they've got tons of data scientists just trying to figure out things for us.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2163s" target="_blank">36:03</a> So really like that they're doing this, but they're also bringing — there's a gap between what the data scientists are trying to do and what the business users need. And I think what they're trying to accomplish with these data agents potentially, to some degree, and maybe even these AI functions, is here we have some common patterns that you will do AI with.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2184s" target="_blank">36:24</a> We're probably not going to do fraud detection with a common AI pattern because Ginger, to your point, it's so niche to what that company needs. They're going to need someone to figure it out. But these other things like key term extraction, sentiment analysis, these basic lower level elements, we could just make this a product and give you functions that do that.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2205s" target="_blank">36:45</a> What's your opinion on this, Ginger? And how are you seeing AI seep into our BI stack? Well, what's interesting? So ML has been seeping into the BI stack for years. I've worked at companies where all of the people, there's generally speaking a cadre of Excel data people who report to the executive community and provide them the answers that they need.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2229s" target="_blank">37:09</a> And they're all about weird one-offs. Well, there is a tool that's existed for years, a machine learning tool inside of Excel that you can buy for forecasting data and budget. And a lot of people have it because that helps them do their budgeting job and they're Excel jockeys.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2248s" target="_blank">37:28</a> I see AI in Fabric as a similar sort of thing. We have this need where we want to incorporate other technology. We want to provide answers. But it's funny. I also remember at one point in time working, explaining how Power BI was going to work to an executive and he's like, and I said you can create your own reports.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2272s" target="_blank">37:52</a> And he looked at me and said, "That's not in my pay grade." A lot of people are like, "Well, I'm not going to use — asking questions about AI is great, but I don't know what to ask. What do I ask it?" And so they just want someone to give them a dashboard because that's easier.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2294s" target="_blank">38:14</a> Give me a dashboard. Show me what I need to know. And then I'll tell you what's wrong with it. Yeah. And then go dive into that, what I know, what interests me, that prompts it. Because staring — we've all done this. Stare at a blank screen. You're like, "What do I put in there? I don't know."

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2309s" target="_blank">38:29</a> Yeah, one question and then you're like, "Ah, forget it." And Ginger, I think you hit the nail on the head there with another note here. When we look at my experience of the business intelligence side of machine learning, I think I have a sour taste in my mouth a little bit for the natural language Q&A, there's all these AI visuals that are built into Power BI Desktop.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2332s" target="_blank">38:52</a> The only one that I think I actually use is the decomposition tree that actually adds any value to me. The other ones I think are very difficult to work with, and I think it's very hard for people to understand the output of those custom AI visuals.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2347s" target="_blank">39:07</a> The key influencer one, it's pretty, it does things. I can't even understand it. I just throw data at it, I'm like what am I missing here? Is there something here that I'm looking at that I don't understand? And I think maybe that's part of the role of the data scientist at some level, they're going to do maths and sciency things on the data for you.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2366s" target="_blank">39:26</a> How are we going to bring that technology over to the business user side? That's where I'm still trying to figure out how this relationship's going to work. Tommy, you're going to say something.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2376s" target="_blank">39:36</a> No, it's funny with all those tools. I remember when automated insights came out, and I think there's two areas Microsoft's trying to focus on right now. There's data science for the business user and data science for the developer. And for the business user we have the visuals but yeah, all those tools don't work.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2396s" target="_blank">39:56</a> And I try to love the key influencers report and I try to love automated insights, I love the concept, but the problem with both of those and where it's always going to be a non-starter is me as the creator or even the one playing with it, I have no control on the weights. So with key influencers, something increased or decreased, well by how much? What's my weights here that I'm going to say is statistically significant? What if I want to weight a field more than something else?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2426s" target="_blank">40:26</a> If they complained, that should be a higher weight towards showing if it's significant or not. Right now with automated insights, with all those visuals, I have no control, so it's just giving me the standard template, which usually for your data, for someone if you're using public data, it probably works great, but usually for custom data, it's not going to be helpful.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2451s" target="_blank">40:51</a> So we have the visuals, we have the data agents, but I wouldn't call that data science. But then the other area we have is the developer, but I'll focus where we had data flow, which is gen one data science. If you remember all those machine learning fields in data flow, which was neat, but anyways, trying to get back on track.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2471s" target="_blank">41:11</a> I think we have all those influencers where we have the business user, where right now for them what Microsoft's trying to focus on is simple ask questions, generalizations, because that's all you can get right now because a data scientist can't control any of those outputs yet in Fabric.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2492s" target="_blank">41:32</a> Yeah, I agree with you there, Tommy. Okay. Where do you feel about, so as I think about this question again, I'm unpacking some of the other pieces here, focusing on commonly used BI tools, or we're seeing different tools out here in the marketplace.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2507s" target="_blank">41:47</a> The main ones I'm thinking about here is like Snowflake, Databricks, and Fabric. I feel like this is a three-horse race at this point, and where I see things. I think initially when I was talking with a friend of mine who his company does use Snowflake, he was saying Snowflake initially had no plans to do any data science. It was all Iceberg. It was all BI reporting.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2526s" target="_blank">42:06</a> It was bring everything to this Snowflake warehouse, basically just a data warehouse, and they have recently, I think Snowflake has changed their tune here and they're now adding AI-based things inside of it because I think the competition is ramping this up.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2540s" target="_blank">42:20</a> Databricks for sure is all about the AI and the data engineering. And to be frankly honest, I think Databricks is really leading this data science space in my opinion. They've got superb data engineering tools. They've got easy ways of loading data through. They have ML flow already built into the product.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2557s" target="_blank">42:37</a> There's a lot of things that I think they're doing, but it's also a very code-heavy centric space, and it feels like Databricks is trying to break that ceiling into the BI AI dashboards space a bit, and they're playing catch-up there. Whereas I look at Power BI coming at it from, well, Power BI is this great visualization front-end tool.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2578s" target="_blank">42:58</a> They're capturing, I think, again I keep saying this over and over again, but Microsoft on their recent call was saying there's 30 million monthly active users of Power BI. There's a huge audience that's already using the product and the tool.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2593s" target="_blank">43:13</a> Again, trying to unpack this question a bit more. What do we think is the ability for people that are in the business that get bit by the data science bug, that start looking at it and going, "Huh, I like this." This is my story a bit. I started as a mechanical engineer and I liked the data and AI space.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2614s" target="_blank">43:34</a> And thought, oh, I think I want to be a data scientist. Now, I wound up, I'm probably not a data scientist. I did half a masters in data science, so I understand the things of it, but I really liked the data, the notebooks, the code. What is your thoughts, Ginger?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2630s" target="_blank">43:50</a> Are you seeing the market? Are there other people in the business that like this and are maybe doing more data science because of Fabric?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2636s" target="_blank">43:56</a> Well, I think it's one of the things that's interesting is that if you looked at, since you mentioned your degree, if you looked at what everybody wanted to hire is a data scientist, and if you look at what data scientist positions are paying now, you can see that the bloom is off the rose there. There's not that demand.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2658s" target="_blank">44:18</a> And I know several people majored in data science and are doing BI. And the reason why is a lot of organizations got frustrated because data scientists, especially they hired people in from academia, take like six weeks to come up with an answer.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2672s" target="_blank">44:32</a> Yeah. And because some of that analysis takes a lot of time. Like I worked at a client and they wanted to know what moved their best customers to purchase, to invest in more products at the bank. And we took like months of analyzing data to determine we didn't have the data that showed anything.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2699s" target="_blank">44:59</a> But like thank you very much, you're still paying for my six weeks rate to find this out. But right, from an ROI perspective they'd be like, if I had that money would I be better served at monitoring what's going on with those current customers by looking at a dashboard?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2717s" target="_blank">45:17</a> Wow, I might as well ask Copilot. And another good point too is with the Copilot reference, just zinging it in. So who needs data scientists? Just ask Copilot. Hey Copilot, do I need to do a basket analysis? Should I even hire data science? Can I just ask you, Mr. Copilot? Where are all the fraudsters? Are they still in Florida?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2740s" target="_blank">45:40</a> Well, and the data scientists too, that's an established industry and career. I don't think there's a lot of pure data scientists who don't have a degree in data science, unlike our space where it's like, I'm a marketer and I come because I was reminiscing about the whole Power BI career.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2764s" target="_blank">46:04</a> It's like when I started Power BI there was nothing to look back to on what best practices were because Power BI just came out, there's nothing like it. Data science is data science. In the academia, the practice, the environment, the education has been around for a long time and very established.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2782s" target="_blank">46:22</a> Interesting you say that though about the cost piece. Yeah, usually they were worth a pretty penny, but we're finding with that rapid speed of data right now. Anyways, I'm going to go on a tangent here and this is maybe a very bad tangent. Ginger, you can correct me and put me back on track here if I get too far off the rails.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2802s" target="_blank">46:42</a> When I think of data science, I think we maybe put a bit too much weight on it, and there's also been a couple terms, right? There's ML, machine learning, then there's data science. Now what we're seeing, at least hearing Microsoft voice, but at the end of the day isn't this just fancy statistics, lots of statistics at scale with computers?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2823s" target="_blank">47:03</a> A lot of this is, let's go back. Before we started seeing ML and data science, it was like heavy statistics, like what's the most probable outcome from all these different things, and there are ways to group things, but it's just computer algorithms that are doing very heavy computes on things. And again, it's probably much more involved than I'm oversimplifying the problem here.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2846s" target="_blank">47:26</a> But like that was the original step, so we've had data science for multiple years now. It's been around for way longer than we've had the term, but it's just been called different things over time. Is that your impression too, Ginger?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2858s" target="_blank">47:38</a> I've worked with several insurance companies, and they're like, now they're calling us data scientists. They used to call us statisticians. Yes! That's what I'm saying all the time. Like, how much money would we lose if we have a hurricane that hits North Carolina? Run the math.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2880s" target="_blank">48:00</a> And what's the statistical probability of that occurring? I actually worked at an insurance company, and it was a high-risk insurance company, and they did all sorts of wacky stuff. Like they insured a golf tournament. So what's a statistical probability that they're going to have to pay out if somebody hits a hole in one on the 19th hole and they give them new cash?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2899s" target="_blank">48:19</a> My goodness, that's a great problem. Casino. Yeah. Okay. You called that statistics, but they called that an insurance policy. And guess what? They wrote that policy and they didn't pay out because nobody got that hole in one.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2910s" target="_blank">48:30</a> And I talked to the guy. He was happy he got to play golf to do his analysis. I'm in the wrong career. I picked the wrong job. I need to do golf statistics insurance. It sounds like that's the place I need to get. Yeah, I'm shifting jobs. Insurance golf. So that's amazing.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2929s" target="_blank">48:49</a> That sounds like a really fun project. I'm also thinking like all the variables that could be, like what is the wind like, every golf course is slightly different. Who are the golfers that are playing on it? Again, this is where my mind goes with this. But I love the idea of that, but my mind instantly gets hurt by how do you get all the data sources together?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2949s" target="_blank">49:09</a> Like you have to scrape all this data and shape this data together to get it. Like any metric you have, you need the numbers from it to help you do the prediction. So where are they getting that data from? That's in my opinion pure data engineering. That's all like suck it out, Python it, put it in a lakehouse. That's the stuff that you need to be playing with.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2974s" target="_blank">49:34</a> Yeah, you're in baseball, Tommy. Baseball is nothing but stats. I remember I was watching baseball with my dad and they're like, well, this particular batter has got like a blah blah blah against pitchers that have more than three syllables in their last name. I'm like, that is crap.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=2994s" target="_blank">49:54</a> A lot of data points. Tommy missed his calling. Tommy really should have tried. I tried. So that's when I started in the data space. I want to be a data scientist and I'm going to be a data scientist with the New York Yankees because I need a bunch of them.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3006s" target="_blank">50:06</a> I have a friend who she works with a ton of players. She's like, you don't want to do that because everyone who's a data scientist wants to work in baseball. So the turnover is like 80%. And they all have doctorates. You mean turnover? The turnover in sports. So anyways, that's a big point too.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3031s" target="_blank">50:31</a> Can I get your take? I want to get your guys' take or what's more likely here, a scenario for you. The premise here is we've seen this with the data engineering right now where we knew that there's the pure data engineers and they lived in this world and the tools are becoming so accessible with a business user.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3053s" target="_blank">50:53</a> I'm not just playing in like I'm not just driving a toy car around right now in Fabric in terms of being able to do a lot. I can drive the full Ferrari and we're seeing now where a lot of the concepts I can do a ton of the engineering in Fabric and it's a light inversion with someone who didn't have that experience.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3073s" target="_blank">51:13</a> What's more likely? Is data science also going to follow that? Are they going to improve Fabric in the tooling and the user interface to allow someone who maybe does not have the background or the environment to do a ton of the things that you're talking about, the weights, the snapshots, or will data science still live in its own black box in a different environment with different platform?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3097s" target="_blank">51:37</a> Which one's more likely? Is Fabric going to become more seamless with data science for a business user or is it always going to live in that black box? Ginger, you go first and then I'll give my response next.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3108s" target="_blank">51:48</a> I will say that the big thing that people like nobody gets rid of their data anymore because it's cheap and they can keep it and that's the thing that data scientists want. I was working with a company and I said, "Well, how much data do you want to look at for your analysis?"

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3125s" target="_blank">52:05</a> And they said, "Well, we have to have at least five years and we're looking to probably do 11." And I said, "Well, why is that?" Wow. And they have a change in business cycle every presidential election.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3140s" target="_blank">52:20</a> You need a couple changeovers to figure out what's happening through each change. Yeah. Because it changes. So if Fabric is the data store for that, if you've got archive data, and nobody gets rid of anything anymore.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3154s" target="_blank">52:34</a> And the other then that's great. Then you can go through and do business cycle analysis for years and look at ongoing trends because you have the data. Now it's great if it's Fabric because it's accessible and cheap. Then it's much easier to do that and figure out where's that data live and how do I get my grubby hands on it.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3173s" target="_blank">52:53</a> So I love that answer. So Ginger your answer is exactly what I was thinking in my mind. I was thinking Tommy, at the end of the day it doesn't matter where you do it right. You can connect to OneLake with third-party tools if you need to, right, if you want to run, if you have a mega machine on your local machine you want to run the machine learning on this machine here locally or whatever.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3195s" target="_blank">53:15</a> Wherever that may be, OneLake is just the storage location, it's just a blob storage account at the end of the day. So I guess there's maybe two parts to my thought here. One, I think Ginger you're 100% right man. I see this, whoever has the data has the control, that's the story here for data science whether it's in raw form and coming right from the API or right from the web scrape or whatever.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3218s" target="_blank">53:38</a> You've got to stick it somewhere and I think Microsoft knows this and they say look if we can get people to bring their data to the lakehouse or the OneLake experience, well now we can bolt on experiences to that that let you use this in other places.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3232s" target="_blank">53:52</a> So maybe we don't get the Azure ML type experience on top of Fabric 100%. But what if Azure ML can just connect to the lakehouse and still have the same bronze level source access of data to everything else we're already doing in Fabric.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3252s" target="_blank">54:12</a> So then we have some of this where there's a pile of data showing up in lakehouses that are all raw form for data scientists, do your experiments, right. But then from that same raw data you can also go through and start building out the warehouse of things.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3265s" target="_blank">54:25</a> So I think the idea for me, if I look at this, I don't think a business user is going to come in and be super excited to become the data scientist. And we're going to continually see these, I'm going to call them watered down experiences of a data scientist coming to the BI user.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3282s" target="_blank">54:42</a> I think AI functions is a great opportunity for that. Right? This is a great opportunity where we can take the best learnings from data scientists, package it up in a module. And my experience has been those first couple projects where companies have been doing just BI reporting and they start doing a little bit of AI, you get a really large return on investment on those initial couple projects of doing some AI projects.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3307s" target="_blank">55:07</a> That's where your biggest return comes. You've had none and now you're doing something predictive. I think it gets much harder at the other end of that curve when you're trying to really tune the model, trying to squeak out the last bit of performance on things, that last 20% of how you really integrate those, it's much more difficult. You need much cleaner data.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3328s" target="_blank">55:28</a> And I would also argue, I've read some articles on this one back from my data science days. If you want better models, give it better data. Period. You can tune the variables, you can tune all the things, but the quality of your data increasing has the largest effect on the AI.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3346s" target="_blank">55:46</a> So, all this to say, I'm trying to wrap up my final thought here because I'm just going all over the place. So, I apologize. So, let's come back to a real thought here. I think we're going to continue to see larger intersections between data science and Fabric.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3359s" target="_blank">55:59</a> I would personally like to see deeper integrations to tools that data scientists already use and are very happy with. Either you bring fully that experience into Fabric, like all the things, MLflow, the AutoML experiences, the Azure ML studio, bring everything to Fabric. It's either got to all come over or the alternative is you give very deep hooks into Fabric and allow those users to push and pull data in and out of the lakehouse easily with other tools that data scientists are already comfortable with, they're already using.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3394s" target="_blank">56:34</a> So that's where I land on that perspective. All right, I think we're just about at time. Tommy, any final thoughts, Tommy, for you?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3400s" target="_blank">56:40</a> No, I was just going to slightly disagree or agree to a point. You can always do that, of course. I think if you look, I think we're taking a lot of what data engineering and Fabric is for granted right now in terms of the seamlessness and how much is available.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3414s" target="_blank">56:54</a> It's really not a watered down version except for that last 5-10%. If you look at the Fabric grow up story with engineering right now with data engineering, you realize how much of that was impossible even if you had access to that if you weren't a data engineer.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3436s" target="_blank">57:16</a> Look at because of the user interface. Look at shortcuts and connecting to your lakehouse. That was all code and the data pipelines used to be so focused on your variables and you had to have so much educational background. Now they have the UI to do a ton of that.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3451s" target="_blank">57:31</a> And when I started with Synapse years ago when I first was trying on myself, I'm like what the heck am I looking at or doing? And you're reading documentation. A lot of that is logical sense. Obviously there's still something there, but I'm not writing nearly as much code if it's already in the lakehouse.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3470s" target="_blank">57:50</a> Sure. To me, I think that Microsoft's master plan is first step, we're going to get a data scientist to work with their Fabric data. Step two is a lot of things that are previously code only could absolutely be made in some type of user interface or some type of seamlessness.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3487s" target="_blank">58:07</a> Because again, I think a lot of us just are taking already for granted what the engineering side of Fabric can do without writing any code or little code, just because we have that environment. So to me, I'm a big proponent that the technology changes the process.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3504s" target="_blank">58:24</a> I would always slightly argue that there's no methodology that's perfect because the technology is always going to change. I personally think Fabric's going to change how we look at the medallion or the standard process with a lot of different things, with shortcuts, with some of that seamlessness.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3522s" target="_blank">58:42</a> To me, I haven't seen it yet but it would make sense with a lot of concepts that data science has. So that will be my closing thought here.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3532s" target="_blank">58:52</a> Awesome. Well, Ginger, thank you for joining us today. I really appreciate your time. I know you're busy. You are traveling. We can tell by your background. So, thank you very much for taking the time out of your day. It's probably very early where you are, but thank you very much for getting up extra early and hanging out with us on the podcast. We really appreciate you.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3548s" target="_blank">59:08</a> We're going to have you on for some more episodes. So, stay tuned if you want to hear more about data science, the story around it, and Ginger will help us add a real perspective of someone who actually does data science as opposed to Tommy and I who play data scientists on as an actor on TV.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3564s" target="_blank">59:24</a> We'll continue to talk about data science and where we think this fits inside Microsoft Fabric. Thank you very much, listeners. We appreciate your ears. We know you could be busy. You could be doing a bunch of other things, washing your hair, going to the grocery store, doing something else.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3577s" target="_blank">59:37</a> It's very productive, but yet you spend your time with us. So, we thank you so much for joining us on the podcast. We appreciate you and our only ask is if you found this conversation enjoyable, please let us know in the comments what would you like to hear about. Are there any other data science topics you'd like to know about?

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3592s" target="_blank">59:52</a> We've got Ginger for a couple episodes. So, this is your direct feed to Ginger, getting to pick her brain, all the consultancy that she's done. Give us some more questions and some more ammunition.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3602s" target="_blank">1:00:02</a> That being said, please share the episode to other people if you don't mind. Tommy, where else can you find the podcast? You can find us on Apple, Spotify, or wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3615s" target="_blank">1:00:15</a> Share with a friend since we do this for free. Do you have a question, an idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/mpodcast. Leave your name and a great question.

<a href="https://www.youtube.com/watch?v=5ej6S0Vik5k&t=3625s" target="_blank">1:00:25</a> And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all PowerBI.tips social media channels. Thank you all very much, and we'll see you next time. Thanks.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
