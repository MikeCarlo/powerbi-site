---
title: "Power Query, Skills to Know and Learn – Ep. 421"
date: "2025-05-07"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Power Query"
  - "Data Transformation"
  - "M Language"
  - "Power BI"
excerpt: "Mike and Tommy dive into the Power Query skills every Power BI user should master. From essential daily transforms to advanced M language techniques, they break down what to learn first and what to tackle as you level up."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into the Power Query skills every Power BI user should master. From essential daily transforms to advanced M language techniques, they break down what to learn first and what to tackle as you level up.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/_JmrI-a-7iw" 
  title="Power Query, Skills to Know and Learn – Ep. 421"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[How to Rebind a Power BI Report to a different Semantic Model using Power BI Studio - FourMoo | Microsoft Fabric | Power BI](https://www.fourmoo.com/2025/04/16/how-to-rebind-a-power-bi-report-to-a-different-semantic-model-using-power-bi-studio/)** — There is an easy way to rebind Power BI reports to another semantic model. using Power BI Studio where it is as simple as a few clicks to rebind the report.

- **[All the different ways to authenticate to Azure SQL, Synapse, and Fabric - Sam Debruyn](https://debruyn.dev/2025/all-the-different-ways-to-authenticate-to-azure-sql-synapse-and-fabric/)** — In this post I’ll go over all the details on acquiring access tokens to authenticate to any Microsoft SQL engine, including Azure SQL, Azure Synapse and Microsoft Fabric. We’ll explore users, service principals,...

- **[Use AI to turn whiteboard sketches into pipelines - Microsoft Fabric | Microsoft Learn](https://learn.microsoft.com/en-us/fabric/data-factory/image-to-pipeline-with-ai?WT.mc_id=DP-MVP-5002621)** — This article shows how AI can easily transform images directly to pipelines for Data Factory for Microsoft Fabric.

## Main Discussion

Mike and Tommy tackle one of the most important foundations in Power BI — Power Query. They discuss the skills that provide the most impact for everyday users, breaking them down by experience level and practical application.

### Essential Skills for Every User

The guys start with the basics that every Power BI user needs in their toolkit. These are the bread-and-butter transforms that you'll use in nearly every project — things like removing columns, filtering rows, changing data types, and merging queries. These readily available actions in the Power Query UI are often underutilized despite providing significant impact on data quality and report performance.

### Intermediate Power Query Techniques

Moving beyond the basics, Mike and Tommy discuss the intermediate skills that separate casual users from power users. This includes understanding query folding, working with parameters, and leveraging the Applied Steps pane effectively. They highlight how these techniques can dramatically improve refresh times and make models more maintainable.

### Advanced M Language

For those ready to level up, the discussion moves into the M language that powers Power Query under the hood. Writing custom functions, handling errors gracefully, and working with APIs are all part of the advanced toolkit. Mike and Tommy share their perspectives on when it makes sense to dive into M code versus sticking with the visual editor.

## Looking Forward

Mike and Tommy encourage listeners to assess their current Power Query skill level and identify gaps. The key takeaway: don't just learn features in isolation — understand how they connect to build efficient, maintainable data pipelines in Power BI.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=32s" target="_blank">0:32</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning, Tommy. Oh, buddy boy. How you doing? I'm doing well. We're just clipping along.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=41s" target="_blank">0:41</a> Coming a little bit out of a cold here, so I'm feeling a little more energized today. It's been rough a little bit, but that's what happens this time of year. You get those colds move through and just keep pushing ahead.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=53s" target="_blank">0:53</a> We had all the family come in town. My sister said she was sick. My daughter got sick for six days. And I'm waiting for the domino to drop. So far, I'm actually more concerned I haven't gotten sick.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=64s" target="_blank">1:04</a> Yeah. See, that's the problem because you're like, "Everyone else got sick. I should have gotten sick as well." Yeah, I'm with you. All right, let's jump into some topics.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=71s" target="_blank">1:11</a> Well, before we jump into some topics, let's give you our main topic today. Today, we're doing a deeper dive into Power Query. What skills should we know? What should we learn?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=82s" target="_blank">1:22</a> How do we know if we're a basic user in Power Query versus an advanced user in Power Query? We're just going to unpack the idea around Power Query. I got to be honest, Power Query was the tool that brought me into the PowerBI space.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=95s" target="_blank">1:35</a> Like that was the tool that I really fell in love with when I started working with data. I found it in Excel and it made so much sense to me. So I really really love the experience of Power Query particularly in Excel.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=109s" target="_blank">1:49</a> I now use it in various forms across PowerBI and PowerBI.com. Also picking and choosing where selectively that I use it in order to make it the most efficient part of my data loading process.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=120s" target="_blank">2:00</a> With that being said, let's go through some news here. Tommy, you got some news items for us. What's the first one you found? We got some good ones, Mike.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=128s" target="_blank">2:08</a> So, first one is officially official — task flows are now generally available in Microsoft Fabric. All right. So, and that's the little cardi thing when you go into the workspaces now, right?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=140s" target="_blank">2:20</a> Well, you can actually check off a preview item off our list. They deleted it, I guess. So, they didn't really say — they have this update saying with GA you'll be able to, and then it's everything you're more or less already able to do.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=158s" target="_blank">2:38</a> Import and export task flows which I like. That's a newer thing, right? That's a newer thing. Yeah. Which I'm intrigued how that works if I don't have the same artifacts in another environment.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=171s" target="_blank">2:51</a> Okay. Yes, makes sense. Create a recommended task flow for the workspace. Maybe you can bind a workspace to a certain task flow setting. Select the event medallion pre-designed task flow.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=189s" target="_blank">3:09</a> And that's about it. They said they're also going to be working on doing task flows across workspaces. So Mike, that's not available today but task flows GA — check it off the list.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=201s" target="_blank">3:21</a> We've talked about it before. I initially said this was a game changer and I had to revert a little based on the visceral reaction by people I talked to on this podcast.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=216s" target="_blank">3:36</a> Yep. Do you use them? Not really. It's a feature that I show to people. I show that you can filter items down below. It's more of a novelty item to me. Like it helps you organize when you have lots of items in the workspace.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=230s" target="_blank">3:50</a> I think more than task flows, I actually use folders more prevalently than a task flow at this point. Anyways, I think I definitely demo it anytime I go with a new client or new customer.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=241s" target="_blank">4:01</a> I definitely demo why it exists, how to use it, put it there. I use it a little bit maybe just to do some filtering of some — here's some storage of data, here's some loading of data.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=252s" target="_blank">4:12</a> But once you've made the diagram and you understand the architecture — again I'm a smaller team, work with a small number of people — it's not as relevant to see what's going on there. I think with a larger team with more items in the workspace it could be more helpful but I don't use it a ton.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=269s" target="_blank">4:29</a> Yeah I really have tried to use it and honestly right now I know you've seen it's a bit buggy when you try to rename one of the tasks. I think the concept is to me I still think the concept is truly something that is essential to what we do especially with all the artifacts.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=288s" target="_blank">4:48</a> But like I said, it's that window which is really frustrating to look at. It's wonky. It's these predefined settings. So, it's not something that I love looking at it and it's actually has helped in different situations.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=302s" target="_blank">5:02</a> But to get it set up, this should be like a diagram, like a whiteboard type of feel to it, right? This should be easy to build. Yeah. So, I think it's a bit frustrating. So, I'm intrigued to see what they're going to do with that.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=316s" target="_blank">5:16</a> The across workspace task flow, I think, will be much more impactful. Honestly, being able to see what is in this workspace versus what's coming from other workspaces. I think actually that's a much better story for what Task Flows is doing.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=330s" target="_blank">5:30</a> Again, there's not a lot of diagrams or images that you get that are very clearly zooming out on all the things that could be spanning like a pipeline of data. So, I think that's actually really neat. I'd like to see that a little bit more.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=343s" target="_blank">5:43</a> And then one thing I just would want to also note out here, I look at the considerations and limitations of task flows now, and I don't know, the article is not too super clear. Maybe I'm missing it here, Tommy. Is there something about CI/CD in it now?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=357s" target="_blank">5:57</a> I don't think it's picked up by the deployment pipeline at this point. I do not believe so, I didn't see anything about that. So we have a guest in the chat here — Alex from YouTube is saying not yet supported for task flow.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=379s" target="_blank">6:19</a> So that would be one thing I would say for me — that it doesn't have to be for GA to have that in there. But if I'm going to use a task flow and I'm going to spend time investing in building one of those things, I would expect it to carry through dev, test, and prod.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=394s" target="_blank">6:34</a> Right? That's something I do think I would expect it to do. So I like Task Flows. I think it's good. Is it all the way there? Does it have all the features I need to make it polished? Not quite yet.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=403s" target="_blank">6:43</a> Yeah, I agree. But I'm still holding on hope. So that's our first quick item for today. Yeah. What else you got? Oh yeah. So our good friend Gilbert — I know he's listening. Gilbert from New Zealand. Australia. One of those places.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=425s" target="_blank">7:05</a> He's in Australia. He's in Gold Coast. That's right. So it could be New Zealand, too. Gilbert I met at the MVP summit last year. Love him. A lot of fun. He helped save my keys and my debit card.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=436s" target="_blank">7:16</a> Anyways, he has a great article and he has a great website for a ton of things that he was working on. One of them is how to rebind a PowerBI report to a different semantic model which is actually something the last 24 hours I've been working on.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=451s" target="_blank">7:31</a> Oh nice — attempting to use TMDL but using VS Code only, using an extension in VS Code. So there is an extension not by Microsoft, actually by Gerald Buckroll. He created this VS Code extension called PowerBI Studio.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=468s" target="_blank">7:48</a> All you have to do is install it and pretty simple. There's not a lot of code here. You actually just right click on your semantic model that you want to change, or the report, and you right click and there's an option to rebind and you basically just choose how you want to move it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=486s" target="_blank">8:06</a> That's dead simple, man. So, Gard has done a really good job and he's been maintaining these tools for quite a number of years now. He's got one for Fabric, he's got one for PowerBI.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=497s" target="_blank">8:17</a> And it's a lot of interacting with workspaces and items, but all inside VS Code, which I love working in VS Code. So, it's a really very well thought out idea. And the software that he's building is just incredible.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=509s" target="_blank">8:29</a> So, yeah — Gard is the creator of it and you can check out his blog and his page here. I'll put that in the chat here as well just so you can see that. So it's a really good article from Gilbert and then a really good tool from Gard.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=523s" target="_blank">8:43</a> I think it's also showing too what these extensions can do and I think this is your mindset to where we're going with all these different products. Microsoft has four different Fabric extensions right now.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=537s" target="_blank">8:57</a> And I don't know if you've used the Fabric Studio. It's a great way to explore the API, the Fabric API. There's basically this notebook view where you choose the domain. It's really easy to generate an API call to Fabric which I'm like oh this is nice. So I can actually do that exploration.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=559s" target="_blank">9:19</a> So yeah, a ton to look out for. Yeah, I like that as well. There's a lot of really rich — like Microsoft has built a lot of core parts. Like it's built the core portion of the car — the engine, the frame, the suspension. Microsoft has done a lot of the core builds.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=574s" target="_blank">9:34</a> What we're seeing now, I think, is some of these tools that are on the periphery, some free, some paid. Those are the things like, okay, I'm going to upgrade the seats. I'm going to upgrade the shifter. I'm going to add a turbo to it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=589s" target="_blank">9:49</a> Like all these other things you can now add or bolt on. They're now being allowed to build these extra tools. And now it's just a matter of — I think the challenge for people becomes which tools are the right ones to continue to learn and invest in so you can continue to grow and become more effective when you're building things with PowerBI.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=608s" target="_blank">10:08</a> So that's the other area here that I think is happening. You're seeing a proliferation of really rich tools that have been developed over years now and now which ones are the ones I should be investing in. Totally awesome.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=621s" target="_blank">10:21</a> You have another one here Tom. You got two more topics. Let's go through these. So this is a quick one too. This is San De Brun. I always love his articles and I think a lot of people have confusion on all the different ways now we can externally

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=631s" target="_blank">10:31</a> Different ways now we can externally connect to Fabric. In the initial documentation I believe was like this C sharp project. I was like that shouldn't be right when PowerBI used to just be a nice PowerShell module.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=645s" target="_blank">10:45</a> So what Sam's done is has broken out all the different ways that we can connect to Fabric whether database, talking about all the things in Microsoft Entra. So some of this you probably are aware of already if you've done any API calls to PowerBI or Fabric in the past.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=665s" target="_blank">11:05</a> But I really think this needs to get clearer for me because there are a ton of ways we can access this. And I'm trying to figure out why it's so different from PowerBI's API in terms of authentication and how that worked because it is pretty drastically different.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=683s" target="_blank">11:23</a> I'm not sure why it's drastically different. It's a token and then with that token you go connect to things. I'm not sure what's the difference there. So initially with the PowerBI you can do PowerShell and you can do OAuth and I don't believe right now the API calls actually support OAuth.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=699s" target="_blank">11:39</a> They initially only supported the service principal over the last few months but it seems to be multiple ways and I think it's depending on the artifact too since we're not just dealing with semantic models.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=714s" target="_blank">11:54</a> Mike, are you doing any training on the developer calls for authentication Fabric? Yeah, I haven't gotten a lot of requests around those things. The OAuth providing or how you get a token, it's the same across Fabric or PowerBI.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=728s" target="_blank">12:08</a> There's two different endpoints. Not endpoints, there's the same endpoint that you would talk to to get the authentication stuff done. I think what you're just seeing though is what you're describing here, Tommy, is it's just when you authenticate with PowerShell, it's just a different user experience.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=741s" target="_blank">12:21</a> There's different libraries. There's like a window that may pop up that has you log in or not. Service principals are like a token that you would provide or a secret that you would give to the API call and that's what would be securely drawn back to you with a token that you would use on your call.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=759s" target="_blank">12:39</a> So I don't think the security portion has changed. I still think it's all OAuth. It's just each of these tools like when you're using a notebook or you're using other things, they command a different way of connecting to things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=772s" target="_blank">12:52</a> So you have to figure out what way you're connecting to PowerBI. Am I connecting as a user on behalf of a service principal? Like a service principal is basically delegating permissions on my permissions to it to do things or am I signing in purely as a service principal.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=789s" target="_blank">13:09</a> Those are the two ways you sign into things. And I would agree with you Tommy. There's a lot of different ways that you authenticate just to get that token experience done. And that's what may be confusing here is in this article there's actually multiple ways of getting through that token experience.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=808s" target="_blank">13:28</a> In order to then talk to, and again he's doing PyODBC and then he's using SQL Alchemy as the other connector but there's other ways you can connect to things as well not just those two items. You can use SemPy, and again each of these tools take their own flavor of how they authenticate the user.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=826s" target="_blank">13:46</a> So SemPy actually is able to take the context of the user and just use it. So it's an interesting article. I think it's good to learn these things. There's a lot of different takes on this as well.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=840s" target="_blank">14:00</a> Anyways, I think it's the scanner API is all normal, but once you get down into like a notebook artifact, if you want to run it, if you want to edit it, completely different. So yeah, I'm glad that there's a little more documentation out here. People are talking about it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=857s" target="_blank">14:17</a> All right. So we're doing some rapid fire. The last one, Mike, news item and I'm saving the best for last here. I did not really see a major announcement about this. This actually I don't even know how I found it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=873s" target="_blank">14:33</a> But did you know that as of September 2024, you can use Azure OpenAI to turn your whiteboard sketches into a data pipeline? I did not know this and you sent me this article and I'm like what the heck is going on here? Like this is wild.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=892s" target="_blank">14:52</a> What's going on here? Yeah. Go ahead, Tommy. What is this feature? So I'm honestly I'm not entirely sure. So what I think it's trying to do is very similar. Power Apps had this about two years ago. You could do Figma or a sketch and it would draw the user interface to start your app.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=910s" target="_blank">15:10</a> This is making it so you can actually draw a pipeline which again how do you draw a pipeline of arrows and squares. And then you basically upload the image and you basically use GPT-4 to describe your pipeline saying what you want it to do and then it's going to generate a pipeline in JSON.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=934s" target="_blank">15:34</a> And there's a ton here but it's funny because it's like hey use a sketch, use an image, quickly upload a sketch and you're done. However, all the documentation, Mike, is not user friendly. It is not the user interface.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=948s" target="_blank">15:48</a> So why would I want the image if I'm already dealing with the code? Okay, I'm very confused. I think this is just a very novel example of them trying to show you, hey, by the way, we can use OpenAI built on Azure to do tasks of things and have something created inside Fabric using the APIs.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=973s" target="_blank">16:13</a> I think that's really what's going on here. But to your point, Tommy, I would agree with you. If I look at this article and I'll put this in the chat window as well for people to see it just so you have this as well for reference here.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=985s" target="_blank">16:25</a> Yeah, link is coming. Sorry, Michael. Link is there in the chat window now. It should be sent out. So here's the link to the item. There is quite an egregious amount of Python code that's happening here. So they're giving you the example like the use case at the very top.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1000s" target="_blank">16:40</a> Hey, you've got to have a Microsoft Fabric workspace. You've got to be able to have OpenAI turned on, an API key for GPT-4o, and then you've got to have an image of what you want. So those are the three prerequisites.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1013s" target="_blank">16:53</a> But then when you get into the steps of what you can do with it, there's a lot of like three or four windows of just copious amounts of Python text. Now, my argument here would be put this on a GitHub page, give me a single notebook that I can download that's just hyper parameterized and I can just go in and say run and it just works.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1039s" target="_blank">17:19</a> And so I get that you can do it, but to your point, it feels like this is not a lightweight task, right? The whole purpose of drawing the image and getting to go through GPT is for it to be easy and it just makes the thing for you.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1053s" target="_blank">17:33</a> Yeah. The fact that I have to go to a notebook and write all the code aligned and then do all this stuff just to get the pipeline, it might have been just faster for me just to get the pipeline working. Yeah. Maybe if I have a pipeline that's really complex and maybe there's a lot of things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1067s" target="_blank">17:47</a> But then I would argue if your pipeline gets so complex, how good will it actually build the right pipeline for you? You're basically writing all your commit. Oh, and the settings and the variables here. So what's the image?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1079s" target="_blank">17:59</a> Yes. So, and where do you set up the connection settings? So I think I understand it's a good example. It's the power of things you could build with an experience like Fabric and PowerBI and ChatGPT with images.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1091s" target="_blank">18:11</a> But at the end of the day, I'm like looking at going, "Okay, it's cool, but really this, if you're going to build something like this, it should be built into the UI of data flows or the pipelines, and you should be able to walk in, submit an image, and it should just work."

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1105s" target="_blank">18:25</a> Like there's no reason why this just can't work on the back side of your pipeline. So, interesting article. Confused why it exists. You're right, Tommy. I'm agreeing with you on that one.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1119s" target="_blank">18:39</a> No, a thousand percent. And there is actually at the very bottom of the documentation a link to a Python branch for off the Azure Data Factory with a notebook sample but it's just all Python. I see it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1136s" target="_blank">18:56</a> Yeah. So I would have led with that. I think I would have led with here's the notebook you need to run. It's got 283 lines of code in it. So it's not for the light-hearted.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1146s" target="_blank">19:06</a> No, I agree. And part of this marketing sell of Power Apps is upload an image, just get started. You literally have a button that says upload and you basically run go. Yes, I think that's more appropriate of what I'd like to see there in that one.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1163s" target="_blank">19:23</a> Anyways, okay. With that, I think we burned enough time just getting the introduction done here. So let's get into our main topic. Oh, I think we've got a caller again today, Tommy. We'll give you a ring here.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1181s" target="_blank">19:41</a> There it is. Oh, there we go. We've got another guest on the show today. I'd love to introduce everyone to Alex Powers, the one, the only Alex Powers is with us today. Alex, thanks for joining. Look, it looks great. Looks like you're ready.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1199s" target="_blank">19:59</a> I had no idea you guys were going to be talking about Task Flows to open up the hour. I would have spent 60 minutes talking about them. I love that. Task flow everything. Hashtag it everywhere on socials.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1211s" target="_blank">20:11</a> Interesting. I love it. Well, I think it serves a purpose. What is your two big wins with Task Flows, Alex? What are two things that you just love about it? They're easy to look at, the filtering? What's your favorite feature of it? Recommended items.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1228s" target="_blank">20:28</a> Excellent. Yeah, it recommends new pipelines for you. So as you go and create your task flow project, imagine like a medallion, when you go to the high volume task and you click new item on that task, it will then take you to the flyout pane, it'll say here are the recommended items that I suggest that you should use for high data volume.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1249s" target="_blank">20:49</a> Which are data pipelines, could be like an event stream, could be something else as opposed to the massive Fabric window of here are 200 things you go figure it out. Yeah, true. So from training and recommendations, I love them for recommended items.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1263s" target="_blank">21:03</a> I love them for recommended items. The areas where I was always like, man, if I could import export, especially as a consultant to be like, yeah, here's a common pattern. And then my mind starts racing of Terraform and all these other things of like, well, hold on, if I could import this and it could deploy all my resources, oh my gosh, I could be sold tomorrow.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1280s" target="_blank">21:20</a> But I do agree CI/CD that would be the big gap to close here. But oh my gosh, man. And I love love love task flows. Let me ask this question. When you export and then import, I'm assuming when you export it you're getting a JSON file out of it somewhere. That's what I assume.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1296s" target="_blank">21:36</a> Yeah, since it just got released. I haven't played with it yet, but I assume it's simple text or JSON output and that you import and export. I wonder if that allows us to — so what I'm hoping, we'll see what happens here, but this will be maybe have to go to ideas.powerbi.com for this one.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1314s" target="_blank">21:54</a> If I export the task flow or export something or get an import export thing going on here, I would really like to your point that recommended area that makes more sense to me. Having recommendations there I think makes a lot more sense. Like hey this is my medallion architecture. I'm going to recommend the different things in that architecture that actually make sense for me.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1337s" target="_blank">22:17</a> And I do agree though, one of my big gripes with the task flows was Microsoft has a whole bunch of templates, but there's no community collection of templates around that. So I look at it from an outsider going, man, I have patterns that I like to use, but they're not quite the Microsoft patterns that they are providing and I may not have all the things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1354s" target="_blank">22:34</a> So what I may want to do is I may want to tweak what my pattern is and then give it to my clients or put it out someplace where people can go download it and use it. So, I think the import export thing is an opportunity for someone to go create a GitHub repo, build a couple patterns, bring some things together and describe how to make their own patterns that people can just go draw in.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1374s" target="_blank">22:54</a> Don't go build it, just don't go build it, just how you love building template galleries. Anything that has JSON attached to it, I'm like, let's just make that a tool because no one likes writing JSON straight up. Yep. It's not for the faint of hearted.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1389s" target="_blank">23:09</a> Love it. Tommy, we'll pass back to you, man. I apologize for interjecting there on the task list. I was just so excited to hear that. It's good. No, I'm intrigued. Like I said earlier, I'm looking for something, I just want the ease of use thing because is there a bug or is it just me in Edge where every time I try to name my task it immediately goes away? Like I cannot actually write in that text.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1417s" target="_blank">23:37</a> I have no idea why it's in every browser in every computer. It's so frustrating. You should pay your Azure bill.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1431s" target="_blank">23:51</a> So, dude, I want to get into this. Let's get into this. All right. Let's jump in for our main topic today. Our main topic today, it's just going to be the reason we bring in Alex P here is we are talking about Power Query today.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1444s" target="_blank">24:04</a> So, let's get into our main topic around skills that we have learned over the years. What skills should I be learning? For those of you who don't know where Power Query is or where it sits inside the product, let's maybe talk about where the service area some of that lives. So this is a general conversation around the either things that we've learned, things we would know or how we would identify an expert user.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1465s" target="_blank">24:25</a> One thing I do a lot and Alex, I'm sure you do this a lot as well. You're always assessing where people are in their journey with various parts of the product or tool. So you're on that phone call, you're talking to people or I do a lot of interviews for companies to find talent for them to bring on for Power BI and Fabric related things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1485s" target="_blank">24:45</a> Because of that, I'm always gauging where's the skill level of this person? What do they know how to do? And then I poke a couple questions at that interview person like do you know how to do this? Have you built these things before? Tell me how you use Power Query to connect to APIs. What does that look like? So I can gauge how much time you spent in Power Query based on what they know.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1506s" target="_blank">25:06</a> Anyways, so let's just kick things off. Tommy, give us some context here about our conversation today and then we'll open the conversation there.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1515s" target="_blank">25:15</a> Yeah, I think there's really three areas to focus on and especially having you on, Alex, it's perfect. But really, what's the base that you see of people knowing Power Query? I don't want to say the minimum amount but the average, what do they know just by virtue of using it? And I think it's pretty basic but there's even a ton from enterprise to normal users, there's a lot you can do learn reading a few docs and just going to the user interface.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1548s" target="_blank">25:48</a> And I think a lot of people have the trouble going to that next step and you've done a great job on your keynotes that I've seen where we're going into the code itself, we're going to go into the parameters and iterations here. I think the conversation lends into well how do people know what to where the art of the possible here because I think there's some unknowns on what Power Query can do.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1570s" target="_blank">26:10</a> And how do people get over that first step of really this is when Power Query changes for them from nice UI to something very much more on an advanced level. What can people do? What are good exercises or methodologies to get comfortable with that?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1588s" target="_blank">26:28</a> So, a lot to unpack here. Using my own background as an Excel user, I always love the quote of 95% of Excel users only use 5% of the product. It's true. I'd agree with that. Yeah. Probably even smaller if we're being honest with ourselves with the Power Query and Power Pivot and all the other fun developer tabs.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1611s" target="_blank">26:51</a> So coming from that background, for you to even discover Power Query in that application, that's a huge leap. How did you find the button? What were you trying to solve? Did you end up on a YouTube video that someone was like hey click this and oh my gosh that was the thing I've been missing the entire time.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1628s" target="_blank">27:08</a> I remember going to an Excel boot camp long time ago with Mike Alexander, former MVP data pig, and he was going through all the new power tools especially from Rob Collie's perspective. He's been talking about modern Excel for a very long time.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1643s" target="_blank">27:23</a> From there I see a massive skill difference between someone who has an awful spreadsheet that they work with all the time — their Power Query skill level is insane. People who are just connecting to databases, they're very fundamental.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1658s" target="_blank">27:38</a> And I say this, I don't know that there's a level of mastery per se. It's more of well what are you trying to do and where are you coming from? Because if you have spreadsheets you are going to be writing some custom columns. Eventually you will be writing some custom code.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1676s" target="_blank">27:56</a> You'll be like Rick de Groot and Melissa de Court and everyone else where you're just like they're writing some insane stuff at levels that are beyond comprehension. And I'm also like why are you doing this? You've mastered it to a level that's like couldn't you just ask the person to go upstream in the source and just fix one or two values for your data export as opposed to forcing the application to do all of it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1699s" target="_blank">28:19</a> So yeah, I noticed the difference and I also noticed those of us who came from the edX background of Will Thompson and Amanda Rivera whenever they taught edX courses, we were all doing it. We all learned at the same time and our level of depth is much deeper than others who were just now learning Power BI.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1718s" target="_blank">28:38</a> Tommy, so the dashboard in a day, it's a great inspirational tutorial. Does it skip over a lot of the things? Absolutely. And then you go back to your desk and you're alone by yourself. You're like, well, what is it that I need to do when I look at my dirty spreadsheet the first time? And more than likely they're just going to press load and it's going to load the table and not build a dimensional model, not do these other things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1743s" target="_blank">29:03</a> Yeah. So, the thing that comes after Power Query is even more important, but if you don't know what that is, it's a very interesting skill ramp.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1754s" target="_blank">29:14</a> It's interesting that you bring that out and I want to maybe keep talking about to your point about that basic user, those initial needs, right? I think there's always this maybe it's a ramp up, maybe it's a knowledge gap, a knowledge wall, I don't know what you want to call it, but there's this always this experience of I'm getting data from somewhere else. I don't necessarily have the ability to control that source system, right?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1779s" target="_blank">29:39</a> And I feel like Power Query is really this rich business user centric tool that is like okay I need to do something. One of the things I try to teach in a lot of my classes especially to people who have never seen Power Query in Power BI or Excel is automate automate automate. This is about automation of the steps you would normally do to clean your data.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1801s" target="_blank">30:01</a> The number of people I've seen copy down data, delete this column, go through the individual data itself, replace values. I did it myself in Excel. I would build an Excel sheet that would clean the data and then I'd have a separate table that was the output of that clean data and I would use that and copy that over to a different Excel sheet and maybe append the records or something like that.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1822s" target="_blank">30:22</a> So, I would do something very complicated, but it was a process I was building. I was trying to get from data that was not as clean to cleaner data at the end of it. Always. That's always the task there.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1830s" target="_blank">30:30</a> And I think there's with Power Query, especially in Excel, it's do you even know it exists? Did you even know when you download those files? And I guess I would try to show people the basic things of data cleaning in Power Query as quickly as I can. Right? Here's how you remove columns. Here's how you rename columns. Here's how you filter and update records at the row level of detail. I think that's really important.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1858s" target="_blank">30:58</a> How you add columns. I think those features to me are most essential because people don't even understand how much data cleaning can happen inside just Power Query. Would you agree there Alex? Is that where you start with people where you see their knowledge beginning?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1870s" target="_blank">31:10</a> Oh yeah, absolutely. So if I was to hire someone, Mike, the first week could be like here I want you to take this LinkedIn Learning Power Query tutorial, just something very basic, right? To here's how to navigate the UI, here's how to do a couple basic operations. Sure, will infinitely pay for itself for a lifetime.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1889s" target="_blank">31:29</a> What is your — before I go too far on that one, Alex, what is your what is your main source, if you were to

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1892s" target="_blank">31:32</a> Is your main source, if you were to give someone brand new, where do you go to learn the 101s of Power Query? Where do you point them to? You said LinkedIn maybe a course there. I know you have a zero dimes learning thing that you've done a lot of things around.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1904s" target="_blank">31:44</a> Yeah, but that's too query folding. That's too niche already. The very first person, Ozu Oz Ducle from the XLVP side, is an amazing course. I'm sure he's redone it a little bit, but whenever I was getting my colleagues into it, and this is another thing, because we all live in this space, this nerd wake up in the morning, find articles and read them and have this fun.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1929s" target="_blank">32:09</a> I went to this workshop, I came back to my team and I said, "Power Query and Power Pivot is going to change everything." And in their mind, they said, "It feels like one new thing that we're going to have to learn." They were already exhausted from doing the job, doing the copy and paste. They didn't see what I saw.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1946s" target="_blank">32:26</a> So, I had to be like, well, no, here's the explanation for them though is a huge time commitment and investment in learning. So, I'm very conscious of the fact that people have to get the job done and asking them to learn something else at the same time on a parallel track. That's a lot of investment.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1961s" target="_blank">32:41</a> Ideally though, my mom is doing Power Query now. We hang out for dinners on Thursdays and she's like, I got this spreadsheet, can we take a look at it? That's the coolest thing for me. It's awesome once people are in it, they start figuring it out.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=1979s" target="_blank">32:59</a> I love Gil Raviv. His book, he has an awesome Pareto there where he's like hey 60% of problems can be solved with really the UI, 75 or so with the add custom column. He gets in the very long tail, advanced editor custom code, you're at 99.9% of problems. And he's accurate, you don't need to go into the code and he's really right.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2004s" target="_blank">33:24</a> Yeah, he is right there on that one. I agree with that one. Go ahead, Tommy. We're talking all about just the cleaning so far and not so much about what takes Power Query to that next step. Yeah, dashboard in a day, honestly after a few weeks of using Power Query you should know how to clean, rename, trim the basics.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2024s" target="_blank">33:44</a> And there's obviously some practices that we'll consider the prerequisites, like always trim, always make sure the data types. But that to me is the fundamentals, right? And even when you start adding a column, that's when you begin to think about what's possible. Creating your first function that's going to iterate over things, that's when I started my ramp up for my skill in Power Query.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2052s" target="_blank">34:12</a> Man I'm doing all the steps in this nested binary file or JSON. Man it would be great if I could just iterate over this. And finding out how to actually create a custom function was like oh yeah! That was the first step of really understanding how Power Query also works because I think a lot of people just think oh it's do an action there's a step. But that's really just how it looks for your normal transformations.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2089s" target="_blank">34:49</a> How do people actually get started with that because that's not necessarily something that is in your face in Power Query about you can do this. So that is a very interesting look back in time. So for those who were very early in the Power Query, there was no IntelliSense in the product. No there wasn't. You just had to just go with it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2112s" target="_blank">35:12</a> Yeah. So, I remember reading the Power Query M formula language technical function spec doc that they had out in PDF form back in the day. Download 90 pages, the most dry content you've ever read because it's written by engineers. You understand it, you're like oh my gosh, now I get it, all these different things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2135s" target="_blank">35:35</a> So I came up in a time where I was very much forced. Of course I can tell you since IntelliSense exists now, yes we debate if it's broken. I think it is. And then of course we can always be like, "Hey, when are they going to release an updated one, stay tuned, the P in PowerBI for patients?" So I'll be very excited, Tommy, when there's a functional working IntelliSense once again.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2160s" target="_blank">36:00</a> But to get into the advanced editor and type up your first formula, my gosh, Tommy, that's a huge jump for anyone. You have to find an article, you have to find community content. So, yes, it's not present. It's not right in front of you.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2176s" target="_blank">36:16</a> I think the new things though, like columns from examples and some of the AI capabilities that have been introduced, they help out immensely. Just type in what you want, the WYSIWYG, what you see is what you get. And from there, absolutely, it does a really good job in my opinion of simplifying things.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2194s" target="_blank">36:34</a> But again, should this be the tool and application that you need to go code first? I'm always like absolutely not. I hope that you can get as far as you need to just with the UI. And then shout out to Donald. I see here in the comments he said, "Yes, I love the old Power Query PDF." Those of us who used it, I think you'll see out in the community levels adapt, just insane because we were forced.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2218s" target="_blank">36:58</a> Totally agree there. And I'll also argue I think there was really no need for IntelliSense initially, right? Because again to your point and back to what Gil talks about in his book, which I also put in the chat window as well if you want to go grab that, it's from Amazon. But in Gil's book he talks about 80 to 90% of what you need to get done, data shaping, data engineering, all the things you want to do, that can be done with just the UI.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2261s" target="_blank">37:41</a> So there was no need to click on buttons. It was the after effect. It was only after I turned on the formula bar and I started playing with the steps and becoming more efficient, that's when I started really trying to adjust things. To me it's the only time I really look at the formula bar is when oh I've renamed a bunch of columns or I'm reordering columns or something like that and I need to go in and just modify, switching some things around, adjusting the code for that particular function.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2310s" target="_blank">38:30</a> That's really the only time that I feel like I need to get into the formula bar. But then there's advanced users like hey I want to use table.buffer, which you're not going to get a button for that. That's going to be pure code you're going to write and there's a reason why you're applying that somewhere in your steps to make the Power Query more efficient.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2349s" target="_blank">39:09</a> So to me it's a lot of trial and error. And again Alex I'll even point out here as well, in the early days of Power Query we had no performance tuning, there was no tooling to help us figure out what's slow, where things are happening and where they're not. But now we have in PowerBI desktop, we have Power Query, you can record or have the performance of M. There's a little bit of a readout there as well.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2394s" target="_blank">39:54</a> Those are the areas where it's getting more helpful. I would say one of the areas for me that's still always been very weak is whenever I'm talking to APIs directly, it just feels like Power Query just hasn't quite been there yet. There's this whole experience of get a token, use said token back in the functions. I just wish there was a little bit more automated help there.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2418s" target="_blank">40:18</a> In the same way when I do a load tables from a folder, right? It'll pick up the files, it'll build some functions for you. It just makes it all work behind the scenes. I wish there was something around that a little bit more, which was like a narration of okay give me your API endpoint, help me build the token experience whatever that may be, because they vary between APIs.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2441s" target="_blank">40:41</a> But that's one of the things that I find is just friction filled with me. And that's usually when I'm like okay I'm going to look for other tools. I'm probably not going to go build a Power Query to go hit an API and bring data in, it's just harder to do I feel like for me.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2454s" target="_blank">40:54</a> Yeah and I don't want to skim past the fact, calling REST APIs in any form, it's an interesting process. Python makes it super easy. I would say Power Query with list.generate, you can do some amazing API calls. Agree but it's the level of depth and skill, well what's the return on investment? What's the return on performance?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2477s" target="_blank">41:17</a> I think a lot of the people are going after large data volumes with Power Query. I don't know that that's the best tool. Do something else where you can page the results to disk and then pick them up after the fact. Like we were talking yesterday with this whole ELT pattern, extract the data, load it, and then transform it and then flatten your JSON with Power Query. That's my approach there.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2497s" target="_blank">41:37</a> I like that a lot. Question here in the chat, Mike, if you don't mind us picking that up here. Let's pick it up. So he was asking about prompt chaining and Power Query, when it would be available in PowerBI desktop or even data flows. I'll ignore the "without a Fabric Copilot license." It requires a license, Paul. I'm sorry to say, but luckily now on all SKU levels, so F2 and above.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2516s" target="_blank">41:56</a> We talked about this a little bit yesterday, Mike, the concept of the host of Power Query. Excel is hosting Power Query. PowerBI is hosting a version of Power Query. Power Apps, Azure Analysis Services, one of my favorite implementations to be honest with you.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2535s" target="_blank">42:15</a> One of the very cool ones that we don't talk about is PowerBI Report Builder with paginated reports that host Power Query and it has the new modern Power Query interface. Yes, it does. That one does. And also Excel for Mac. Those are the two that have the same modern updated interface.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2553s" target="_blank">42:33</a> So Paul, I don't want your question to be when will X feature be available. I want it to be when will the modern Power Query online interface be available in PowerBI desktop? Give me all, give me folding indicators, give me everything, and then give me the cherry on top here with the AI.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2570s" target="_blank">42:50</a> Well, how many, let's talk about how many flavors of Power Query there are. There's a number. So, I don't know all of them. I think Alex, you probably know more of the different flavors of Power Query. So, when we say Power Query, Power Query in Excel is different than Power Query in desktop, which is different than now Power Query in Mac, right? So all of those are similar in nature, but they're on slightly different code bases a little bit.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2594s" target="_blank">43:14</a> Okay. So there are different code. Yeah. Where else are we talking about Power Query? Where else does this thing live? Oh my gosh, Mike. So I'm going to go through the mental map here. So we're talking about it started as Excel 2010 add-in. People loved it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2526s" target="_blank">42:06</a> People loved it so much that they said let's build it natively in the product Excel 2013. Excel 2016 had a weird transition period where we went from Power Query to being called get and transform and then we came back to being called Power Query again. A little rebranding exercise in there.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2543s" target="_blank">42:23</a> We're hosted in Power Apps. We're hosted in SQL Server Integration Services. It's also available in Azure Data Factory. It's available in Azure Analysis Services. Power BI desktop, Power BI data flows, Fabric Data Factory data flows gen 2, hosted over in Power BI report builder with paginated reports.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2566s" target="_blank">42:46</a> What else did I miss? Microsoft Teams has a Power Query host. I don't think I've ever used that one. What is that one doing? What are you doing with Power Query in Teams? You're loading it into a Dataverse and Teams instance.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2578s" target="_blank">42:58</a> We're also hosted over in customer insights with Dynamics, which I had no idea about. There's different applications where Power Query is hosted. So the fact that if we could get the same code base distributed across each one of those, the team's maintenance of code, they could just focus on one thing and deploy it everywhere.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2602s" target="_blank">43:22</a> Then all the latest greatest features will be available in each place. That feels to me like that should be the highest priority of that team is to say we will make a single, I'm going to talk developer for a second here, we have a single NuGet package. We have a single library. We have a single thing that every tool must use.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2623s" target="_blank">43:43</a> Also whenever you put this Power Query into these different experiences, there's always something that Dataverse needs slightly different than data flows. There's always these little nuances so it must be really difficult to say here's the core thing that I need and here's how I bolt little add-on elements to it that let you tweak it enough for that particular tool so it's efficient for that tool.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2647s" target="_blank">44:07</a> There's always these edge cases like Analysis Services needs things slightly different than where you have it somewhere else. We have data flows gen 2 now which is still running, it feels like Power Query but it feels like a totally different animal as well, that whole thing is different.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2681s" target="_blank">44:41</a> So we have physical software tools and then we have online service tools and it feels like there's a dichotomy between what data flows or Power Query is doing and different experiences there as well. So yeah, I'm agreeing with you, Alex. The fact that most of the UI is consistent across all these experiences is also a win.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2701s" target="_blank">45:01</a> Yeah. So even though the code may be shifting underneath the hood, the same buttons exist, I can still do most of my same operations. It looks very similar everywhere you go, which I love. And that's the selling point from a talent perspective, right? I know Power Query and I've now got a skill set I could ramp up on in 12 different applications overnight.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2726s" target="_blank">45:26</a> Hey, if you want to move me into a Power Apps project, because I know Power Query, I can slot in. That's to me the huge win, is it worth your time from an investment standpoint? Absolutely. You can help your organization in many ways.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2756s" target="_blank">45:56</a> Long term, is that the place where you want to plant the flag? That's up to you to decide. I love data integration. So I went heavy into it. I enjoy it. But I also put on, I'm trying to make a little triangle here of like if you're just reading clean data from a source like a foldable engine, you're going to have an amazing time with Power Query.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2796s" target="_blank">46:36</a> The farther you get up, the more you're sacrificing time in performance. Well, are you reading from a dirty spreadsheet? You're just going to see the spinning wheels and then you're getting into table buffers, list buffers, and you're going to a level of depth and mastery.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2812s" target="_blank">46:52</a> But I would be like, hey, can you go talk to your DBA? Can you talk to your data engineer? Could you collaborate and have better discussions? Some people have that path and some people don't. And it's really going to be up to you, is this worth the time and investment?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2845s" target="_blank">47:25</a> That's really interesting that you make that note. I guess I'm thinking about my experiences in Power BI and what I've done going back to prior sources, right? I really think Tommy and I lean on Roche's maxim here a lot. Transform your data as far upstream as possible and as far downstream as necessary.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2870s" target="_blank">47:50</a> As one who is probably more data engineer than anything else in my career right now, I have a lot of control of what happens before Power BI touches the data, right? I have a lot of Fabric at my disposal. I can do a lot of different data engineering things there. I have Databricks. I own that experience.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2906s" target="_blank">48:26</a> So I can then shape the data and when I get down to when we're ready to do Power BI or Analysis Services things, we're just literally select this table, load it in, and we're done, right? It's literally a two-stepper. Set some column data types and you're done. We're basically finished.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2934s" target="_blank">48:54</a> So to me it's become much less of my world because I control that upstream experience. And I think this is really where I like to have those conversations with clients. How much upstream can you control? If you can't control a lot of it, you're probably going to have to spend more time in Power Query because that's a free tool that we're giving to you in all your products basically that lets you shape the data.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2978s" target="_blank">49:38</a> And I think of the report building or table building in Excel. It's this dance between what is the data given to you versus what you need it to be to get your analysis done and you're always jumping back and forth and tweaking and adding and adjusting till you get it right and then you have the final output product that's actually useful data to you.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=2995s" target="_blank">49:55</a> But are you just painting on the canvas to hand over to Tommy and say here's what I want you to go build or is that the final product? I've seen that example a ton actually, in teams and even recommended that where especially with the divide with data engineering teams and the business intelligence team, they actually used Power Query and that workflow to say hey we do need these tables, we're building them here but this is what we want, this is the idea of the transformations we need.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3027s" target="_blank">50:27</a> So it's been more than just proof of concept. So that is a big win. We'll see how that works now with Fabric because that was again usually reserved for just that pure data engineering team.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3041s" target="_blank">50:41</a> I've just been listening here and in the background for a bit, but I need to ask you, we could go down rabbit holes with what Power Query can do. There are some things I am immensely proud of, some things I'm immensely not proud of in the transformations.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3059s" target="_blank">50:59</a> But that being said, for people listening, how much do I think the biggest thing is if I want to be considered an expert in Power Query or really just an expert in Power BI, how much do I need to know? I could keep going down the rabbit hole of all the different advanced functions like list generate and try to understand that.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3084s" target="_blank">51:24</a> For the normal user who's seeking to take the next step, is there a cutoff point? Where's a point where you would say this is adequate?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3092s" target="_blank">51:32</a> My god, Tommy. I don't like technology. I like problems being solved. So this technology is just helping me solve a problem. The level of expertise is can you get your job done? Can you move on to the next thing?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3109s" target="_blank">51:49</a> Transfer of ownership is huge for me. I don't want complex code. I want very simple elegant code that anyone can pick up. If I can't replace you, I can't promote you. That was the thing that was told to me a long time ago.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3123s" target="_blank">52:03</a> So knowing that you can do these list generates, list accumulates, all these other fun things, it's awesome from an individual challenging yourself but my gosh can you hand off your solution? Yeah, that's for me.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3139s" target="_blank">52:19</a> And then I'm not a huge code person. I love the UI and then at the very end I like coming back and cleaning stuff up in code. I may open VS Code and do something else. But I try and challenge myself to be like can I accomplish as much as I need to if I was a new user in this journey.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3158s" target="_blank">52:38</a> And ideally I think we talked about that a little bit in our previous session too, I just want to do the UI and see how far I can get, see if the application helps me with folding indicators. Of course Tommy I have some weird solutions too where I've got some table buffers I think I was building that last week for some sample data so I've just got some nasty things that work.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3178s" target="_blank">52:58</a> At the very end I do look at the experts and I greatly appreciate what they're doing. I have the massive book that they just wrote, the definitive guide to Power Query M. I'm glad that someone wrote it. I'm glad that I didn't write it.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3194s" target="_blank">53:14</a> So I am benefiting from a lot of these people's knowledge but I feel like that's very niche, to know Power Query for that level of depth for the language in the sense that the solutions that they're solving are generally text or CSV based or Excel based.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3211s" target="_blank">53:31</a> I want to know can you connect to SharePoint meaningfully. I want to know can you connect to databases. I want to know can I connect to blob storage and navigate through hierarchies and keep things performant.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3222s" target="_blank">53:42</a> How do you do that? You add parameters, you add some filters, you limit things before you move on to the next. That's what I really think about, more of an operational process.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3235s" target="_blank">53:55</a> And I think we talk about that a little bit too, are you using functions? Are you using parameters? So that way you don't have to go into each individual query and update your data source connections. Those are the things that when I see someone share their screen, I look at the nav and I'm like, oh my gosh, they have folder groups for their queries, they have things labeled, these are functions and parameters, these are my dims, these are my facts.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3257s" target="_blank">54:17</a> That is the level of mastery that I look for Tommy, not code. Interesting. I like that. I think this is a really good approach and I will say here I still absolutely love Power Query. I think it was a tool that was way before its time. I do think we are in a land now, so back to your point earlier Alex.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3155s" target="_blank">52:35</a> So back to your point earlier Alex, I love using Power Query with the businesses and saying here, here's a raw form of data. We don't know what you want to do with it yet. Go have fun. Go play with it. Go figure out how to shape it, delete things, add things, clean it up what you need.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3168s" target="_blank">52:48</a> And then everything is now documented. All those steps are created and captured and we can then go work on the upstream processes to do that for you. So you don't have to do that every single time. So I think there's always going to be a need for some hands-on data manipulation stuff.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3183s" target="_blank">53:03</a> And I really love the Power Query experience. I'm more falling in love with the notebook experience. I think it's becoming better and better of a usage case for me, but again, I would put myself more in that advanced user space and not the common business user.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3200s" target="_blank">53:20</a> I just want to play one last note here, Alex. You made a really incredible point here that I think is underrated. You were talking about ownership and responsibility and data transition responsibility between teams.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3211s" target="_blank">53:31</a> And I heard that and I thought, man, Tommy and I argue about this a lot. There's a lot of debate that we have on the podcast around who is supposed to own what part of data across the different spaces.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3225s" target="_blank">53:45</a> And I don't think I can emphasize enough your point there because I really do think in organizations I see a lack of the ability to successfully transition data responsibility from one team to the next.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3241s" target="_blank">54:01</a> And I think now in this Fabric and Power BI and Power Query space, we have a lot more tools that are more available to any user. At your disposal the horsepower of those tools have greatly increased.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3257s" target="_blank">54:17</a> I remember doing a project where I had an Excel file. We were trying to summarize data. We couldn't bring in more than a million rows. That's just a limitation of Excel. But I was bringing in 12 million rows using Power Query in the model of the Excel file and then I was using pivot tables to summarize and aggregate and do all the things you would normally do with the aggregations that come out of the model portion.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3282s" target="_blank">54:42</a> That's amazing to me. And so you're given a tool that has much more horsepower and maybe I'm not going to put on the same level — access is not at the same level as Power Query but it's this idea of I'm giving you an Access database thing that you can do these really complex stuff with but then adds a lot of value at the end of the day.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3300s" target="_blank">55:00</a> But I think that transition period, I think more conversations need to talk about their data culture and what does it look like to transition from central IT, the BI central team, to business users and what does the acceptable ownership look like.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3316s" target="_blank">55:16</a> What does a transition of responsibility look like between different teams or users? How does that look? I think if you can outline that fairly well and come up with a culture that enables that to happen, I think you're going to get a lot of people happier and people can get stuff done and they'll be more successful with their data.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3335s" target="_blank">55:35</a> I'll just pause there. I said a lot of things around that whole transition of responsibility across people and data. Any final thoughts on that one? Donald Parish is having fun here in the chat. So I'll quote his new maxim — the Parish Maxim: push as much downstream to business but pull off as much as necessary. That Donald, delegate, delegate, delegate.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3360s" target="_blank">56:00</a> We talk about the grow-up story of solutions a lot, like starts in the business, how does it grow up. I do think with AI and the whole LLM thing that's going on right now, like I don't like writing documentation — here, have an AI document the solution, you verify that these things are accurate and then you just give me the check off and then pass it along.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3382s" target="_blank">56:22</a> If I'm going to rewrite things, absolutely. Code refactoring is another thing now where it's like all right, give me your Power Query block and I'll throw it in a Python generator and we'll see how we do. There's amazing little things if you want to grow things up.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3396s" target="_blank">56:36</a> The part that I care about is collaboration. If Tommy's going to own it from now until the end of eternity until he retires and passes on to his kids, I need to think about how I'm going to orchestrate that.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3408s" target="_blank">56:48</a> All right, we'll incorporate that into our data pipelines or into our REST API batch calls, whatever it may be. If there's going to be joint ownership, that needs to also be clearly defined and then it's coming back to supportability — all right, if this thing breaks, do we own it or you?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3427s" target="_blank">57:07</a> You own it, you're maintaining it. So do they rely on it in a pinch? Criticality of the solution — low, medium, high. Of course if it's going to the executives, that needs to be owned at the highest levels. So those are the transfer things that I like to think about.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3443s" target="_blank">57:23</a> And then Tommy, I don't know if you're seeing differently with some of your work.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3447s" target="_blank">57:27</a> No, honestly for me, it's been — Power Query has been — it's not the technology, it's always been what I'm trying to achieve and then it's just you go down that rabbit hole, you're like oh my gosh I can do this now.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3462s" target="_blank">57:42</a> I will say I've been very surprised, and I know we're getting your time. I'm very surprised at ChatGPT's ability to understand Power Query. When I first tested that, I'm like, I don't know how much you're going to know this. It may be a little too niche, but oh my, I've given a few problems even using the agents to say, hey, just create me a function that does this.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3484s" target="_blank">58:04</a> If I had this eight years ago, I would have saved so many weekends. Yeah. So many weekends.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3489s" target="_blank">58:09</a> Well, I can let you in on a little backstory here. I was the PM helping drive the Copilot in Power Query experience. Really? So, we were there the weekend that GPT blew up and everyone was talking about AI bots. And a lot of the things that we started with obviously shifted and changed.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3508s" target="_blank">58:28</a> So, we can do single-step operations, multi-step chaining, we can do complete documentation. The things that we're focusing on next is things like code refactoring. Hey, I recognize you broke a step. Do you want me to maybe fix this for you or refactor it? Do you want me to optimize your code?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3526s" target="_blank">58:46</a> Like these are the next things that we can do with Power Query and AI. And then at that point, it's not replacing your points and clicks, but it's augmenting. All right, you got this far. Let me help you with the last bits here.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3540s" target="_blank">59:00</a> And then that way you can perform it. Yesterday we talked a little bit about the ELT patterns. Hey, I recognized your code execution. Would you like me to split it up, be more optimized? These are things that could be the next wave of Power Query integration.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3556s" target="_blank">59:16</a> So, I'll be very excited to see where we go with it. Yeah, I like those opportunities you're laying out there. And I think that's where I'm aggressively trying to learn — where do I apply large language models, Copilots? Where do I apply the AI in my workflow?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3575s" target="_blank">59:35</a> I know Alex, we've talked about this in the past, but giving better prompts to the large language models really helps out. I've had it — literally just the Copilot in my browser, just the standard web version of it, not even one that's designed for Copilot experiences or data or Power Query experiences, just a general one.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3595s" target="_blank">59:55</a> And I've gone in and said, "Hey, I have this error coming out of Power Query. Oh, and here's by the way, here's the steps that I use to produce this error. Can you help me just rearrange the steps? What would I need to do to fix it?" Yep.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3606s" target="_blank">1:00:06</a> And to your point, Tommy, earlier, it's pretty dang good about understanding — it can understand the code. It's functional based programming. It seems to pick up on it pretty well and it figures it out.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3616s" target="_blank">1:00:16</a> Yeah, can't argue with you there. And I think just the more that we can give it that experience, the more we can sand some of those rough edges by using large language models, I think the better.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3627s" target="_blank">1:00:27</a> All right, with that being said, any final thoughts for everyone before we wrap here today? Tommy, any final thoughts?

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3632s" target="_blank">1:00:32</a> Honestly, this has been awesome. It's just good to see Alex's face and you realize too, Mike, you and I have done Power Query forever and then you talk to Alex and you're like, okay, this is like feeling like you were pretty good at baseball then you just see a guy throwing 90 miles an hour.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3649s" target="_blank">1:00:49</a> So same, it's awesome. I'm a little starstruck when it comes to Power Query things because Alex is the man when it comes to all these things around Power Query. And I love how you've just taken it and ran with it and whether you've hate-learned it or whatever, you've become an expert in it and it's awesome.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3667s" target="_blank">1:01:07</a> I've personally just want to say thank you Alex, I've learned a lot from you around Power Query, the different folding experiences, how to optimize, how to tune it a lot. You feel like you're hitting home runs all the time and then you meet the guy who really does hit home runs all the time. So Alex, thank you very much for showing up today. I appreciate you being on the podcast.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3686s" target="_blank">1:01:26</a> Your perspective on things is always spot-on and I love learning from you. So thank you very much for being on today, appreciate you.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3694s" target="_blank">1:01:34</a> That being said, we do appreciate you all as your listeners. We know this went fast for you. There was a lot of conversation that we had here and we know your time is valuable. You could be doing a million other things like reading the Definitive Guide to Power Query. You could be doing your laundry, washing your hair, anything else other than listening to the podcast.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3710s" target="_blank">1:01:50</a> So, we do appreciate your ears. We thank you very much for hanging out with us for this period of time. And we want to respect that. For those of you who like this podcast and found this useful, we'd really love it if you would share it. Let other people know that we had this great conversation around Power Query.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3726s" target="_blank">1:02:06</a> Share it across your social media platforms. We really need the help there to share it out as well. Tommy, where else can you find the podcast? You can find us in Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3739s" target="_blank">1:02:19</a> Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/mpodcast. Leave your name and a great question.

<a href="https://www.youtube.com/watch?v=_JmrI-a-7iw&t=3749s" target="_blank">1:02:29</a> And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all of PowerBI.tips social media channels. Thank you all so much, and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
