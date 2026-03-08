---
title: "Investing $100 in Fabric and Power BI – Ep. 406"
date: "2025-03-14"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Microsoft Fabric"
  - "Power BI"
  - "Investing"
  - "PowerTable"
excerpt: "Mike and Tommy explore what you can accomplish with just $100 invested in Microsoft Fabric and Power BI. They also check out PowerTable's new private preview for building data apps on modern data platforms."
featuredImage: "./assets/featured.png"
---

Mike and Tommy explore what you can accomplish with just $100 invested in Microsoft Fabric and Power BI. They also check out PowerTable's new private preview for building data apps on modern data platforms.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/CmiNNxVY5J0" 
  title="Investing $100 in Fabric and Power BI - Ep.406"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Main Discussion

Mike and Tommy dive into the practical question of what you can do if you only have $100 to invest in the Microsoft Fabric and Power BI ecosystem. This is a great exploration for newcomers or budget-conscious teams looking to get started.

### Getting Started on a Budget

The hosts break down where that $100 goes furthest — whether it's a Fabric capacity, Power BI Pro licensing, or a combination of tools and learning resources. They discuss the realistic outcomes you can expect from a small investment.

### Maximizing Value

Mike and Tommy share tips on how to stretch a limited budget across the platform, covering which features deliver the most bang for the buck and where free tiers or trials can supplement your spend.

### Practical Recommendations

The episode wraps with actionable advice for anyone looking to dip their toes into Fabric and Power BI without breaking the bank, including what to prioritize and what to skip at this price point.

## Looking Forward

Mike and Tommy encourage listeners to experiment with small investments in Fabric and Power BI to build hands-on experience, emphasizing that getting started doesn't require a massive budget.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=31s" target="_blank">0:31</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone and good morning Tommy, how you doing? Good morning Mike, hi it's a great Thursday this week is blowing by.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=43s" target="_blank">0:43</a> I like how you change your sentence mid sentence there. Hi how you, and then changed. I just realized how late in the week it already was. We are almost at Friday already, things are going crazy. A lot of things are happening, yeah it's very exciting right now.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=56s" target="_blank">0:56</a> I'm extremely busy myself, lots of software development happening. So yeah very excited for this month, it's been going very fast. I can't believe it's already mid-march almost, where did the time go. February just zoomed by for me.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=90s" target="_blank">1:30</a> I don't know if anyone else feels the same way. The weather's already changed, I'm expecting a little more snow. You say that now, you just jinxed it. Like that was your fault, I'm not sure that was a good idea Tommy.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=109s" target="_blank">1:49</a> Am I the culprit in mid-march to be the reason why we're gonna have — listen I'll take one more snow, just one more cold night because guess what all the bugs are coming out. This is when it gets hot.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=142s" target="_blank">2:22</a> Yeah true, I'm happy for the warmer weather but it was just like 60 degrees up where we were so it's crazy warm. Before we get into that let's go do our main introduction here. We'll have a little bit of news here but our main topic today, this is a fun topic that we do — spend $100 on Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=165s" target="_blank">2:45</a> So this is our exercise where we spend a little bit of time working through Fabric. We describe what we would spend our efforts or where we put more of our time or energy to develop things directly for Fabric. All right that's our topic for today but our news, let's go through some news items.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=144s" target="_blank">2:24</a> So I have a question for you Tommy. My question's around an experience that I didn't understand exist for Power Query. Okay so Dataflows Gen 2. Let me set some things up. Dataflows Gen 2, and inside Dataflows Gen 2, what is your normal workflow with Dataflows Gen 2? Just walk me through what your normal workflow is for something very specific here.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=174s" target="_blank">2:54</a> So I'm just trying not to give away the answer but I'll also ask you a question. Really there's only one sole purpose and is pushing data in. Really what I've been doing mostly now is if I'm getting raw data into from a notebook there's some additional things I want to do for cleaning a dataset up, I just push data back into a table in either the Lakehouse or a SQL database in Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=198s" target="_blank">3:18</a> So at the end of your data flow whatever you're doing, how often does it come out and get into a table? Oh every time, yeah I barely use Dataflow Gen 1 now for Power BI reporting. Everything right now is a data flow and it's going to store the data in another service. Okay got it, all right excellent.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=226s" target="_blank">3:46</a> So that's what I thought you were going to say. All right, did you know when you make a Dataflow table, you can make a Dataflow table and you can walk away and come back to Desktop, not load the data table to anything, but just make the data flow. And you can connect to it from Desktop.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=246s" target="_blank">4:06</a> Well that's Gen 1 right, that was the concept with Gen 1 Dataflows. But where is the data stored? This is my question. Okay, all right so in Gen 1 you would run the data flow, so I'd have a data flow, I'd make it, the data flow would make a table. The data table would then be saved somewhere in a CDV file somewhere.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=275s" target="_blank">4:35</a> If you managed it, it would be in your storage account. If Microsoft managed it, it would be in their thing somewhere right, somewhere they're storing the data. I was on a call yesterday and I had a client asking me like hey, when I connect my data flow it just works.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=281s" target="_blank">4:41</a> I'm like wait wait, what are you talking about? You don't write it down to the lake and then pick it up from somewhere else? Like no no, I make a Dataflow Gen 2, I go into Desktop and I connect. I open Desktop up and say go to this workspace and connect to that Dataflow Gen 2 without writing the data anywhere.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=300s" target="_blank">5:00</a> And what happened, Desktop went up to the service, grabbed the M code and immediately loaded the table in Desktop for me. I didn't write it down anywhere. Did you know that was a feature? Yeah your knitted eyebrows tells me.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=319s" target="_blank">5:19</a> No because I'm going through this. Okay so my typical workflow pattern, I'm with you Tommy right up until this point. Every time I did a Dataflow Gen 2 I would run a Dataflow Gen 2, I would connect the data from SharePoint or Excel or whatever where I'm getting the data from, SQL Server, doesn't matter.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=338s" target="_blank">5:38</a> And then I would on the tables that are coming out of Dataflows Gen 2, I would connect them to a Lakehouse or a SQL server, or I would write the data, I would make the data flow do something and push the data into an actual area. Well I never have connected, just made the data flow and didn't publish the dataset anywhere.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=359s" target="_blank">5:59</a> And instead just use Power BI Desktop to use the Dataflow Gen 2 to load the data or import the data. I didn't even know that was a thing. Huh, because I know Gen 1 Dataflows were technically stored in an Azure blob as CSV. So you had to process them.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=376s" target="_blank">6:16</a> It sounds like now they're processing them in real time and when you hit Refresh on the semantic model, it goes back to Dataflows Gen 2, runs what it needs to run and returns the data to you from the service to whatever semantic model you're doing.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=393s" target="_blank">6:33</a> Yeah I know, my mind was blown. I was like I did not even know this feature existed. I've never attempted to go connect to Dataflows Gen 2 with Desktop. And if I didn't know this I'm like who else didn't know this. So anyways, PSA, Public Service Announcement.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=411s" target="_blank">6:51</a> You can make a Dataflow Gen 2, not push the data anywhere, and every table that is made in the Dataflow Gen 2, you can take Desktop and you can go into the experience and Desktop and you can connect directly to the data flow without writing the data down to any physical area. It just stays in the semantic model.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=432s" target="_blank">7:12</a> Now I don't know, again I just discovered this yesterday, so I don't know if there's any performance implications of this. I don't know if anyone else is doing this. So this is also to the audience here, anyone who's on the call or the live session here, does anybody else use this? Is anybody else directly connecting to a data flow or is everyone else trying to write the data down to somewhere?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=452s" target="_blank">7:32</a> I was shocked, I was literally shocked. I was like I didn't think this was going to work. I was actually questioning the customer and be like no that doesn't work, that's not a thing. And I was floored that when it did work just fine.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=463s" target="_blank">7:43</a> Question though, why wouldn't you just use the Gen 1 Dataflows if that's what you wanted to do, connected to Power BI? That's literally the same in a sense, process workload. Okay good question, great question. Around why would you just use Gen 1. To your point Tommy, right, yeah you're right then why wouldn't you just use Gen 1.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=485s" target="_blank">8:05</a> But Gen 1 doesn't support CI/CD. A deployment pipeline doesn't move Gen 1 between workspaces right. So I think that's an unsupported item for that. And I believe a Dataflow Gen 2 is now either in preview or it was just recently announced somewhere that Dataflow Gen 2 is now storable in git as well.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=509s" target="_blank">8:29</a> So that's another one, yes but with a gotcha because I enabled it for one of my data flows. You have to create a new one. It doesn't work with pipelines. So with a data pipeline you can refresh a Dataflow Gen 2, which obviously makes a lot of sense. With a pipeline you can refresh a Dataflow Gen 2, but you don't need to.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=531s" target="_blank">8:51</a> What I just described tells you, you don't even need to refresh it, you just need to have it there. Well I'm saying in general, if you had some workflow where you're pushing data from a notebook, then you wanted to refresh a Dataflow Gen 2, you could do that all in the pipeline.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=552s" target="_blank">9:12</a> But if you enable git it doesn't see that artifact. So let me ask a question, it doesn't see the artifact, you mean you can't — so just let me be clear what you said, I didn't understand exactly. You said if it's in a pipeline it will work. You can, sorry, if you have a Dataflow Gen 2 you can call it from a pipeline, right.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=574s" target="_blank">9:34</a> Right, it's just that the Dataflow Gen 2 can't be used in a deployment pipeline to go between environments. Right, and if you create a Dataflow Gen 2 and you enable the git support, then the pipeline won't find it. You can't use any git-enabled Gen 2 data flow.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=596s" target="_blank">9:56</a> Okay so it's weird. But still regardless I see what you're saying though with the git integration. Because really the bare bones of what you're saying, you're doing connecting to a Power BI data flow in a semantic model, that was our lives with Gen 1, that's what we did. Yes, yeah I agree.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=618s" target="_blank">10:18</a> Awesome, yeah anyways just want to bring that point up because I didn't know that was a feature. And I usually I'm pretty good about working through workflows and how things happen inside Power BI. But I was shocked when I realized that it just worked. I was floored.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=638s" target="_blank">10:38</a> Anyways that was interesting. All right moving on, let's do another news item here. I saw something come across my radar today. Are you familiar with the company named Lumel? Lumel, L-U-M-L. Have you seen them? I think I've seen the logo, I just looked it up but can't say I've called them. Okay so Lumel is a

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=661s" target="_blank">11:01</a> So Lumel is a company made by Gopal. Gopal is a really amazing owner and developer of a lot of software and applications and things inside Power BI in the ecosystem. He's done some really amazing things, he's got I believe he has EDI table or something like that, some custom visuals that his team has been building and they've been building some pretty impressive things.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=682s" target="_blank">11:22</a> Well I just saw an announcement come across. Let me give you some context here, right. Lumel just announced, are you a Microsoft Fabric user, are you using no code applications, do you want to have right back to Fabric, Snowflake, Databricks, Redshift, and Azure SQL. These are all the things that we do, we like these things.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=709s" target="_blank">11:49</a> Do you need it with enterprise security and governance? Introducing Power Table. So this is their pitch here for a Power Table private preview, it's actually out right now. So this is a rack table from Lumel, they're building a workload and this is fun for me because I'm starting to see for the first time companies building workloads for Power BI.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=734s" target="_blank">12:14</a> This is a pure Power BI feature or something that came out of the Power BI world. My company, we have released Power Designer. Everything has to come with the word power apparently, that's just the way it goes. So we have Power Designer and Power Designer allows, it's basically our theme generator that we've brought over to Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=753s" target="_blank">12:33</a> And so we are actively developing and pushing GA. We're going to go GA on our tool by Fabric Conference, that's the goal. So it's a big day for us, that's why we've been working so hard. We've got all the code done, we're ready, really ready to go.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=767s" target="_blank">12:47</a> And if you haven't checked out Power Designer inside Fabric as a workload, you should definitely go check it out because you can go try the full features of the Power BI theme generator for free, all inside Fabric. So I'll put the link there as well down in the chat window and I'll make sure I put it in the description for those who are listening online.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=785s" target="_blank">13:05</a> But going back to Lumel's version here, they have a little short video talking about what their product is. It has to be done inside Fabric so it is a Fabric only workload. But this is what we need, we want, Microsoft has built this really great ecosystem of objects and Fabric and using all these different things.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=804s" target="_blank">13:24</a> Well now this Power Table is really interesting to me and I'm very excited to see where this is going to go. I'd love to try it out and inside a preview and see how this works with my Power BI data sources. This is the use case of hey, I've got a team that's doing budgeting and they all need to enter numbers into a table.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=822s" target="_blank">13:42</a> I need to edit lots of things and need to go to a table. So the idea here is I have a table, potentially even in SQL Server, and I need to make multiple edits or changes all at once. This is the tool to help you do rich table editing and get the data back to SQL or Lakehouse or something. And then what happens is you can then pull that forward into reporting.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=845s" target="_blank">14:05</a> So this is a really interesting tool and I'm going to, this is going to be part of where Microsoft should invest money as well. That's part of my story, but that's another part of my story as well. Here I'm going to actually add that here as well.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=861s" target="_blank">14:21</a> Anyways, just wanted to point that out. Tommy, do you do any, let me just ask, let me pause right there for a minute. Tommy, do you do any writeback? Do you have any writeback projects?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=869s" target="_blank">14:29</a> The only ones that have been at Power Apps. There's always obviously the need for it. I don't have a lot of custom development but really everything I do is usually Power Apps.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=884s" target="_blank">14:44</a> Yeah, okay, so just Power Apps is basically the thing that you do, right? Yeah, and because that integrates really well with Power BI too, especially if I don't need to edit a record. Now obviously with Lumel's is a little different but just from a Power BI point of view, it's really been Power Apps and then just building some quick things that I can modify or add records to.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=906s" target="_blank">15:06</a> Okay, the reason another thing here I'll point out as well, so let's, I'm going to give you a little bit more context here as well, right. The reason I'm also interested in this feature, when I saw the post from this, I looked at the people who liked it, the people who were engaged with this. Let me give you some of the names here.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=919s" target="_blank">15:19</a> Kurt Bauer was one of the people that liked it. Arun Ulag also liked it. Nicola Ilic, Daniel Otero. We're trying to find other famous names here in the Power BI community, I'm just scrolling through the list of names. There's a lot of people at the upper parts of Microsoft that are taking note and very I would say influential people in the community around this workload.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=946s" target="_blank">15:46</a> People are taking notice and either Gopal's been working with them or helping them along or doing things with them. But apparently there's other really big leaders in the community that are actually pushing this tool, are going to be very excited about it. So I'm very excited to see where this is going to go.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=962s" target="_blank">16:02</a> I'm very happy that other development companies are doing what I feel like is really powerful. The workloads is going to be quite amazing I think for companies because it really gives you control about things you can build in Fabric. Anyways, very excited about it, want to point that out.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=977s" target="_blank">16:17</a> Go check it out, go look at the little preview video. If you want to preview Lumel's Power Table, there is a fill out form you can go fill that out and go preview it. Excellent, I don't have any other really news announcements. Tommy, do you have anything else that you would like?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=993s" target="_blank">16:33</a> I'm hoping to see more of a video with the Power Table because he took some of my budget as well. So oh see, yeah, okay. All right, so Tommy let's go to our main topic today. So if you don't have any other news or articles, things you want to talk about, I'm ready to dive in. Okay, let's go.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1013s" target="_blank">16:53</a> So let's jump into the main topic today. So Tommy, phrase this out, this is something that we typically do, sometimes it's around Christmas, wish lists and things like that. But what is it, it's a game to some degree, right? Describe the game so people know what we're doing here.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1028s" target="_blank">17:08</a> So we've, I've done this a few times but really the exercise today is, congratulations, you are now Arun for the day. Hello Arun! Yes, hello Arun. Welcome, for those who are new to our community, who is Arun, what responsibility does he have?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1048s" target="_blank">17:28</a> Arun is the one who's responsible for everything that is Fabric. He does it all, does it all. So he's corporate vice president of all data, right, all data at Microsoft. So obviously controls the whole Fabric platform but and expands more than that. Obviously I'm sure his major focus has been Fabric lately.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1073s" target="_blank">17:53</a> So but he's basically got the budget, he's got the say, he's the czar so to speak. So you're Arun for the day and Microsoft executives and the finance team, well they've given you for the next year $100 to spend on anything for Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1092s" target="_blank">18:12</a> So this is a budget, so it's not just yours to spend for everything new. So our exercise is how would you divvy up that $100 based on your own needs, where you think the product is going, what the product needs to invest in. Obviously the more money you spend, the more importance or priority that you'd want to give that.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1113s" target="_blank">18:33</a> Few things to keep in mind too, obviously we can always say new products, new products, new products. But again if you're Arun, it's not just about what do you want to integrate but it's also making sure that things are working well, what are the things that we find since we're in it every day that would be a better process or be just a better experience.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1135s" target="_blank">18:55</a> Because obviously your goal is to get as many companies as possible to adopt Fabric. I agree and I'm going to probably come out, this is a fun way of just saying what is our wish list of things that we wish we could see around Fabric or Power BI. And this could be anything you want creative wise.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1155s" target="_blank">19:15</a> Yeah and I think I've got a couple good list items. So the idea here is you're in charge of the budget, you're in charge of what money is going to go where and you're going to start allocating it to various features of the platform to make it most useful to people to use the platform. So that's going to be our goal here.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1170s" target="_blank">19:30</a> Tommy, do you want to kick us off with your first item here, your budget? Do we need to go from most expensive down to least expensive or least expensive to most? Do you care? Which one do you want to do? I'll let you drive that.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1183s" target="_blank">19:43</a> So I obviously have it sorted a certain way, but do you want to hear the heavy hitters right off the bat? I'm probably gonna take one heavy hitter at the beginning and then I'll probably ramp up in price from there.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1196s" target="_blank">19:56</a> But to be perfectly honest and clear, what did I do to make this a reality? I immediately went to Excel, made a table and started writing everything down. So I have everything, I can sort it however we want. So you just tell me what you want Tommy and I can sort my answers however you need.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1212s" target="_blank">20:12</a> All right, I'm gonna start with a teaser. I'm not gonna start with the easy one first. So really what I'm gonna focus on, if on my run I get my coffee and we're saying hey, we're focusing on our API support. I need better resources around our API documentation and full integration.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1234s" target="_blank">20:34</a> We have so many different products that are coming from other backgrounds, other technologies such as Synapse and Data Factory and everything else in between. A lot of the code is copy-paste, some of this is really hard to authenticate to. What we want to do with our API is make it as easy as possible for users.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1256s" target="_blank">20:56</a> Not just to get a list of records from something, but also to be able to, I can work on a notebook outside of the Fabric browser, I have that access to do that. There's all these amazing things we could do but we need to be easier to find and easier to use. And I'm putting $20 on that.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1278s" target="_blank">21:18</a> Whoa, you really, I think you realize that much money spent on the professional, the developer, that just means that's money you can't throw towards Power BI or Data Factory or Real-Time Intelligence. Tommy, you're not going to put at least half the money in Real-Time Intelligence and data science?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1301s" target="_blank">21:41</a> No, I'm adding a new column saying what persona is this for, because it may be very heavily in one way. So your whole experience is I'm giving all the money to the developers, they're going to be a developer experience only for everything. Oh that's hilarious Tommy.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1319s" target="_blank">21:59</a> For this particular episode I found this actually extremely challenging because there's a lot of little things that I wish I could talk about. All the things I don't want to have a massive list, there's a lot of things you could be building and developing here.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1330s" target="_blank">22:10</a> So let me give you one that's just not an annoyance or just hard to work with. So this is going to be a little bit of a weird item here. Maybe when you use Spark, and again I'm going to go Tommy, I'm doing right what you're doing, I'm going to work on the professional developer. This is data engineering pure and simple.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1349s" target="_blank">22:29</a> So this is the data engineering persona, that's what I'm going to spend some money on here. So the reporting on Spark is good, it's definitely a lot better than it has been in the past. So we've done a really good investment so far.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1361s" target="_blank">22:41</a> One of the things that I feel like I still can't get my hands around right now is when you run a Spark cluster, there's basically three things that you care about. At least that I cared about when I was running in Databricks, in Databricks I would run a Spark cluster and I'd care about the network traffic.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1377s" target="_blank">22:57</a> Which usually wasn't an issue, but when you look at the network traffic on a Spark cluster that's usually telling you when it's reading or writing data to and from disk. So if you think about your job inside Spark, you need to go talk to the lakehouse, read in a bunch of data.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1391s" target="_blank">23:11</a> Once the data is loaded you can then transform it in memory and then you can write the data back down. Or you're constantly shuffling data between the different workers. So that's where network traffic comes from. So if you think about the mechanics of the system, you've got to load data in and you got to move data between machines potentially, and that's your network traffic.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1409s" target="_blank">23:29</a> So when you're again if I'm looking at a Spark cluster, that's one measurement I use, like am I writing efficient code. Right, if I only have a single cluster node and all the processing happens on that one machine and there's no network traffic between stuff, I know that it's working on one machine only. Does that make sense?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1424s" target="_blank">23:44</a> Yeah sure. Okay then the second thing is I focus on the memory of the machine. So when you pick a computer, a VM, to run Spark, you pick a machine and there's a certain amount, 16 gigabytes, 32 gig, 64, whatever you have, different size memory machines.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1445s" target="_blank">24:05</a> And some of them are on high speed or whatever, they've got different memory allocations. So in Databricks I could pick what kind of machine I wanted, a memory optimized or a compute optimized. So in my job I would run my job, load this data, move these things around, do this transformation, read and write things.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1463s" target="_blank">24:23</a> And I would watch the cluster and say okay how much memory am I using, and does the memory like do we run out of memory on a single machine. And then it forces me to spin up another machine and another machine to actually complete the job.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1477s" target="_blank">24:37</a> Right so I like to watch this time-bound experience of when do the machines turn on, how much memory is being used or how much compute is being used. Because then I could tweak my cluster towards memory optimized or compute optimized based on my job.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1490s" target="_blank">24:50</a> Okay I've been doing this Spark thing for quite a while and what I learned was if you're using lots of small files, let's imagine you have a lot of tiny small JSON files that you're going to consume, right you're going to load them into something. Small JSON files require a lot more compute than it does memory.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1509s" target="_blank">25:09</a> And then the driver node, the one that's at the top orchestrating everything, it also needs to be larger compared to all the workers. So the driver is the machine that plans all the work. So if you've got two million little tiny files that are all JSON, the driver machine has to say I need to read all 2 million files and figure out the plan.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1531s" target="_blank">25:31</a> Like how are we going to do the job to get everything done. And then once it's done it starts allocating to the machines. Okay here's what we need to do, everyone go do your jobs, plan out the work, here you go. Logically it makes a lot of sense but I just have a hard time finding memory and compute optimizations inside Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1550s" target="_blank">25:50</a> So that's one area that I just can't see it and so it really bothers me. So I'm going to give $10 to the Spark engine a little bit there around Spark reporting. I'm also going to probably throw a little bit of money, in this one I'm going to give myself the world here because I can build whatever I want.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1568s" target="_blank">26:08</a> So I'm also going to allocate some money of that $10, part of that is around let's decide on making more versions of Spark clusters. Because today I think the only thing I can pick is memory optimized large and small, and maybe there's an extra small or something like that. I want more decisions, I want more machines to choose from.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1588s" target="_blank">26:28</a> Because I feel like I might be overpaying for some of my Spark clusters because the job I'm running might be more compute intensive and I don't need as much memory. So I can't quite tell if my job is one way or the other because I don't have the reporting yet. So I need the reporting and then I need a little bit more clusters.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1610s" target="_blank">26:50</a> And in the future I really would like to have a GPU cluster. Like why can't I have one of those? So right now I don't think there's an ability to go grab a GPU cluster either. So that would be something I would like to see, is to have more variety there just for me because I'm pretty technical in that space.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1628s" target="_blank">27:08</a> And I just want to see more options to continue to tune. And this is less about features that are missing, this is more about Michael trying to optimize and spend less compute units and really tune my jobs. Because data engineering workloads once you figure it out, it's very consistent, it just does the same thing every time every day. Anyways I'll just pause there.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1649s" target="_blank">27:29</a> So you want, I thought mine was a little developer based, wow. So yeah I'm just telling you but it's only $10 though so it's a $10, like I'm not spending 20 bucks on it. Gosh I feel bad for those people working on this, here's all the things I want a little bit of.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1668s" target="_blank">27:48</a> But that makes a lot of sense. You unfortunately though you're still playing that Microsoft playground so all the customization that you could want in the world, it's always going to be that little limited. Where it's not just an environment, it's really the whole configuration.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1681s" target="_blank">28:01</a> Yeah I understand what they're trying to do here, they're trying to make it simple for you. Business users or people coming from the Power BI world, you have to admit though like who's using Fabric? Are data engineers coming over from other experiences to come to Fabric? No they're not.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1697s" target="_blank">28:17</a> In Microsoft's recent earnings call I think they said they have 30 million monthly active users. That's a pretty good number but those are the people that are coming, those are the ones that are exploring like what is Fabric, are we going to use it.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1720s" target="_blank">28:40</a> That's the user base that you're talking to because they're already inside Power BI already today and they're seeing the messaging for Fabric. So to me that's the user base, hey you are a Power BI user. And so that's why they're making this experience simple. They just need to do a better job of making this richer for that business user coming over to Spark.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1735s" target="_blank">28:55</a> Yeah all right so that's where you're starting. So your turn.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1743s" target="_blank">29:03</a> I'm going to go with something and these are all things we've talked about a ton. But I'm going to go with lineage and really enhancing that because I know they're already doing a push with Purview and integrating that. But I'm like no this is essential.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1762s" target="_blank">29:22</a> I've realized how many artifacts are being created by my own team and the disorganization. And it's so hard to see that workflow in just a table interface. So I'm going to put down $25 here and we're really going to work on how everything actually in a sense touches or connects to each other.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1782s" target="_blank">29:42</a> Sure, but also having an interface and something for users to see. Obviously a ton of work on the back end but really the end goal is for users to be able to quickly navigate, find what is actually getting pushed. Not just hey this is downstream, but what data is getting pushed.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1802s" target="_blank">30:02</a> So it can actually say this is important, this is not important. So it's going to be a lot of metadata on top of just the artifact itself. Going into each of those, for example a data frame from a notebook is pushing that data frame to this particular lakehouse.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1818s" target="_blank">30:18</a> So you want lineage not only of the items themselves but inside the items. So like Tommy if you have a notebook that's pushing multiple cells, there's cells in a notebook. So if I had three cells and each cell is pushing to a different table in the lakehouse, you would see table by table lineage on that stuff as well, like where did this column really come from.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1838s" target="_blank">30:38</a> Yeah you're talking like column level lineage through the entire system. And there really is nothing today that does that, and there's no passive way to do that. You'd have to describe what you're doing to get that out. That's really hard.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1857s" target="_blank">30:57</a> You have to even think about like when you're loading data using a notebook, that fundamentally changes what you're doing in that notebook. Well if you think about it though too, we already had the activity logs. And every time I write something to a lakehouse it's gonna update a column.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1877s" target="_blank">31:17</a> Right, every time I would add a record or, let's just talk like the lineage of a column. Every time my notebook is going to write to a lakehouse table, it's going to modify that column. So that would be in a sense another record. But because everything is all seamless in Fabric, you're not really going outside of the Fabric environment.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1899s" target="_blank">31:39</a> Yeah and everything is already saying hey we're modifying these records. It would just have to find that essential repository because I think that's gonna be a big part for especially the business users. It's okay I know this data came from this Gen 2 and I had this shortcut and this notebook.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1919s" target="_blank">31:59</a> Yeah but how did we actually get this column, like what were the steps, in a sense what was the journey. So that's where I have focused a ton.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1930s" target="_blank">32:10</a> Interesting that you note that. So one thing let me just give you some context here. From what I'm aware of, Databricks does this. Databricks does column level lineage in their notebooks. But they do it in, like if you just write a regular notebook and just say this is the notebook, this is what I'm doing, Databricks doesn't do that the same way.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1947s" target="_blank">32:27</a> You can't just write a notebook and just have it automatically grab the lineage. They use this thing called Delta Live Tables, and the Delta Live Tables is like a mix of streaming and notebooks that help you produce, to your point Tommy, like I have this table it's in bronze.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1962s" target="_blank">32:42</a> I'm going to pick up that table in bronze and I'm going to move it over to Silver. And it knows column by column, you define the SQL commands and then you write them out in a way that lets you follow the lineage there. Maybe it's not down to the column level but it's at least by the table level, but like when you build a schema. So it almost sounds like...

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=1980s" target="_blank">33:00</a> Build a schema so it almost sounds like you're describing Tommy, like I want to define the schema from raw data all the way into my reports. And if you define the schema you can just say okay this is what I'm going to do along these steps.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2015s" target="_blank">33:35</a> And then now Power BI can, or Fabric can just trace the lineage of those things. Exactly. All right that's good. How much are you spending on this one? So like I said I'm putting a pretty penny on this one. It's the back end and also what that user interface is going to be. So I'm putting 25...

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2049s" target="_blank">34:09</a> Whoa! You're spending a lot of money quickly here. Well I may have too many items here on my list now. So I'm going to leave the technical space here for a bit and I'm going to jump up. Are you good for me to go to my next?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2083s" target="_blank">34:43</a> I guess it's okay that you don't talk about developer things. So well I'm gonna try and pick one at least, right? So I'm gonna step back here, I'm gonna say I think the Power BI community could use some love.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2115s" target="_blank">35:15</a> The Power BI community or even just the communities in general. I'm not seeing a lot of user groups, I'm not seeing a lot of activity on the Power BI community or the Fabric communities sites.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2147s" target="_blank">35:47</a> Tommy you own, we run the Chicago one, I run the Milwaukee one. There's been no one interacts with the sites. The whole community website version of things is just dead. I don't want to spend time on it, no one's interacting with it.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2182s" target="_blank">36:22</a> I don't have any effort there. So I think I would spend about $10 on just investing back into community and starting to figure out how do I revamp the site to make it more engaging for users.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2216s" target="_blank">36:56</a> Make it easier for like, I'm a leader on my group, it's very difficult to get a Meetup. So I use Meetup to run my user group but it's very difficult to get that on the actual Power BI page. And there's very little tie-in between the community sites and the forums.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2253s" target="_blank">37:33</a> The whole experience just feels very disjointed. We have communities and user groups but then we have the technical forum. And for whatever reason the technical forum is just okay for me right now. I don't know how often Tommy do you go into the technical...

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2288s" target="_blank">38:08</a> I use it but it's hard to read honestly. If I go, I'm finding I'm going to Reddit more and more for help on things.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2305s" target="_blank">38:25</a> You mean the tried and true community.powerbi.com? When you go there a lot, there man there's a lot of content there and you can search for it. It finds it on Google, okay, but I don't really like the experience of it.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2337s" target="_blank">38:57</a> I want it to feel more like Reddit honestly. And again I'll be very honest, Reddit is very sarcastic, there's a lot of people there that you guys are a little bit mean sometimes on Reddit.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2369s" target="_blank">39:29</a> But I like Reddit's ability to upvote things and find solutions. I feel like I spend a bit more time on there and the way the information is packed, it's a little bit more condensed and easier to read.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2399s" target="_blank">39:59</a> I feel like some of the community stuff is just harder to sift through and find answers in my opinion. Does that make sense what I'm saying? Honestly I've never had a, I've been using that community.powerbi for so long that it's never bothered me too much.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2436s" target="_blank">40:36</a> I know you're a big Reddit guy. And I think people are either really in love with Reddit and how it works and some people just, it doesn't connect. Well I think it's more like either people have used Reddit and they love it. The other people who don't love it haven't used it enough yet to love it.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2475s" target="_blank">41:15</a> I'm going to table that conversation because we could talk about that offline. Because my best friend in the world told me how much I would love Reddit. And I think it's funny, it's got funny stuff on there, but also just how the forums work, just how the UI is laid out in a way that I can understand the conversations.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2514s" target="_blank">41:54</a> It seems like there can be little sub conversations on a single question or comment there, which I like. I like being able to find those things. So I feel like information is fairly discoverable on Reddit.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2544s" target="_blank">42:24</a> All I'm trying to say is the Power BI community not as discoverable. And we're having a hard time getting communities going. Communities just aren't easy for a leader to run the community. And what would I do as Microsoft? I would really hone in and say what can we do to really engage the communities.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2583s" target="_blank">43:03</a> I don't know how you do this but Tommy when was the last time you went to a conference in the US run by community users? Like three years ago, four years ago. My point right there.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2615s" target="_blank">43:35</a> The whole idea of communities is start organizing live events with people in areas. Even if it's just $10 that I'm giving here to the community part, right? It's also me just pushing out content to the community and helping. Let's help people run a conference.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2648s" target="_blank">44:08</a> Like having a local conference in Milwaukee, let's have a local conference in Chicago. Let's start emphasizing people getting together and doing little mini cons.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2677s" target="_blank">44:37</a> I go to Europe, I've been to Europe in the last couple years, almost every year I've been going to Europe for a speaking engagement. They're running conferences all the time and it's from their user groups. Their user groups are like a thousand members large and then they're putting on conferences that are like 1,500 to 2,000 people show up.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2714s" target="_blank">45:14</a> That's amazing. Why don't we have that in America? That's something I really would like to borrow from that team. Honestly I also have a community thing too. And I agree too, I think we're definitely at this stage now where if I'm leading this and I want the community to really help drive a lot of it.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2759s" target="_blank">45:59</a> I think what that forum site especially for the user groups, we need some upgrades and we need some features. Yes, especially with everything virtual now, rather than just hey I can blog and write markdown on the site as a user group leader.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2793s" target="_blank">46:33</a> Really like what Meetup is right now but I think even more for doing video calls on there, from user group leaders to actually meet with everyone or a quick call. Have all these things that are in a sense readily available but build it into that environment just on in community.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2834s" target="_blank">47:14</a> Yeah so yeah no I completely agree with that. Update with the latest and greatest but make it more than just a forum. Yes. And I don't know how you do this, as a content creator I really want to highlight the work that I'm doing.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2870s" target="_blank">47:50</a> How can I get my content out in front of more people? I don't really feel like the community is able to do that very well. There's a lot of voices in the community which are great. And where can I go to a single spot and just follow my favorite creator and find all the things that they're doing across all social media and all platforms?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2905s" target="_blank">48:25</a> There's really nothing out there that does that at this point. So anyways maybe that's an area that I should just figure out how to do it and just solve it myself. Maybe Tips should go out and solve that community piece for the community.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2937s" target="_blank">48:57</a> You need that $100 though because we know it is not easy to do. Yeah and you got to actively invest in it for sure, 100%. All right how much did you put in that? I put $10. So far I'm at 20 bucks spent.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2975s" target="_blank">49:35</a> Okay, oh and oh wow you spent a lot more time, I got $50 spent. So okay I'm gonna go with my heaviest hitter. And then the other ones will let us land. But the one I'm putting $35 down. Whoa! Oh well this better be amazing.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3012s" target="_blank">50:12</a> This better be for pure Power BI, better not be a Fabric thing. One would say that I had some help today because some inspiration from your shirt. But I wrote this on beforehand. So my shirt does say "co-pilot told me to say it," that is what I'm wearing now.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3049s" target="_blank">50:49</a> And co-pilot told Microsoft that we need it readily available per user for certain functions. Not a co-pilot license, not a co-pilot per user, but a co-pilot for help navigating, just an LLM co-pilot that's already available in Microsoft.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3087s" target="_blank">51:27</a> That's interesting Tommy. So but why not co-pilot per user? Because sure we can absolutely try to do that but the reason why is because I want this adoption. And all this navigating, the co-pilot that you can have with if you already have a Fabric SKU is all just about hey I want to write code.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3128s" target="_blank">52:08</a> I'm trying to do this, it doesn't have to look at my data or a data frame or records or the semantic model. It's just literally understanding here's my script in front of me. Okay so again you can download 25 products in the next hour that do this for free right now and they do it well.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3170s" target="_blank">52:50</a> Okay all right yeah okay I see you're saying something. Yeah that's interesting. So I'm going to probably move up one of my items here then because I also had a co-pilot enhancement as well.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3205s" target="_blank">53:25</a> So Tommy you're saying a co-pilot lower SKU or you're saying co-pilot as a what are you? It's a co-pilot for everyone thing. Right so like how do I create a tag, where do I navigate to find X? Hey I'm in a notebook, how do I convert a data frame to a Spark table?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3246s" target="_blank">54:06</a> Is your co-pilot going to be available for Power BI Pro users or is it only going to be Fabric users? Fabric only. Okay see that's so I understand your sentiment. I'm going to probably do the same here Tommy.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3278s" target="_blank">54:38</a> I'm going to probably pick up one of my items. I'm going to also throw a large amount of money at this. I'm going to throw $30 at co-pilot as well. This is one of my larger investments that I would make.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3308s" target="_blank">55:08</a> Microsoft's talking about it right? And to be honest I've seen co-pilot or AI, large language models be effective in other areas. I just don't see it being effective in the Power BI space as well either.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3340s" target="_blank">55:40</a> So where do I think co-pilot fits? I think Microsoft's doing a good job incorporating co-pilot, like hey you're in desktop and you can use co-pilot to write descriptions of columns, descriptions of measures.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3372s" target="_blank">56:12</a> But I think in here I want to add a little bit of flavor to this one. I want the ability to pre-prompt the co-pilot on things. I don't want to overwhelm the users so I want to give some pre-prompt, like here's the pre-prompt I'm going to use to help you build a table or measure description.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3407s" target="_blank">56:47</a> But you can edit it Michael, like here's what I'm going to start with, you can change that. Hey as a business user that does XYZ things, here's the pre-prompt, make this very human readable.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3441s" target="_blank">57:21</a> And I'd also like the co-pilot to say, for example let's say I'm writing a column or a measure description. Why can't I tell co-pilot to okay write a description of this measure? The output format should be in this format, grab the formula of the measure and format it and put it inside the measure description.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2640s" target="_blank">44:00</a> Inside the measure description so that the formula is there. So first two lines, make two sentences about describing this measure, add the formula from the measure here, and then at the end write last updated date on this date time and when it was modified or something along those lines. But a more enriched version because that way when I use Copilot later on to go ask about things about the model, it'll have more context around what it's looking for.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2664s" target="_blank">44:24</a> So I think I would like to have Power BI Copilot all down to probably Pro level honestly. I think Copilot should be per user, I think is what I'm thinking as well. Copilot per user, so you would still make it a license base.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2685s" target="_blank">44:45</a> I already have Copilot for my Office and my Excel, I've already paid for it other places. Why can't I just pick various users to use them and put Copilot towards those users? I think that would be effective, I think that would help out some of my creators and that way me as a company I could decide, I could basically adjust and find who's using powerbi.com the most and only give the heavy users or heavy developers the Copilot to speed them up.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2714s" target="_blank">45:14</a> Right, I don't know if this is also a feature here too Tommy, but it might be a nice feature to actually add my own Copilot. Like what if DeepSeek does a good job writing DAX, what if ChatGPT o3 mini does a good job writing what I want? Like I can't use those things, incorporate them into the tools that we have now.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2732s" target="_blank">45:32</a> So there might be another opportunity here, like well yes we have Copilot. I don't think Microsoft would ever do this, but I would like to see other Copilots being used in the platform as well. Yes, and I think that additional integration, I don't even think you have to spend a lot to even get that started.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2749s" target="_blank">45:49</a> So from a budget point of view, but no, I think regardless what we're both saying here is the need for some type of Fabric integration for everyone is just essential. And it is just, we've talked about this a ton. And even if it's not the hardest thing to implement and this is not a lofty goal, it's just this is the world we live in now. So I completely agree.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2775s" target="_blank">46:15</a> Okay moving on to your next item Tommy. All right, so I guess we put that one together. All right, so I do have a community one, I only put five dollars on it. Okay, this was very similar to you where we just have to do some outreach, some working. I know how fast things are running in my day-to-day running Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2797s" target="_blank">46:37</a> But we spotlight people on the blog, but how do we make sure we get the right feedback? Because we're running 20 different products right now, so how can we organize this? Yeah, maybe some even central organizing from Microsoft saying look, we're going to do this event, we need volunteers to help us produce this. But like dedicating someone to try to put events in cities and lead a little bit of that effort from Microsoft's side, I think would be helpful.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2820s" target="_blank">47:00</a> Yeah, I agree with you, the community thing needs a little bit more love now. I think people are looking for community other places at this point. No, I completely agree. So that's it, I only had five dollars. But my last one, because we are almost close to time, is I only did fifteen as all I had left.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2840s" target="_blank">47:20</a> But I'm considering allocating it differently. The rest of my time is focused on the OneLake catalog. But it's going to be that governance section, not just the monitoring and governing those global things like hey how many tags you have in domains, sure. But to make it custom for an admin or a team to actually go in and actually go through a series of steps of prompts on what they want to monitor, what are their thresholds, and what's important to them.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2877s" target="_blank">47:57</a> And obviously this would be a lot of work, everyone's custom. But some organizations they may not care about tags or domains, but other ones, the refresh schedule is huge for them. So really allowing individual teams to go in and actually customize the OneLake catalog to actually highlight what's important to them.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2898s" target="_blank">48:18</a> Okay, interesting. All right, is that your last one Tommy? That is my last one. So does that sound like a hard thing to do, does that sound like something that's not going to be used? I don't know, it sounds like you're replacing a lot of functionality that already exists in Purview. Which I think Purview does some of these things, but I would also argue Purview hasn't been a really good launch for Power BI.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2923s" target="_blank">48:43</a> It doesn't feel like it's a good fit, it just has always felt like a very weird bolt-on on things. And so I like OneLake catalog a lot more, it feels a lot more fluid. It seems to fit the program a lot better. And I think this is like the Power BI or Microsoft way of like, this is the Fabric and Power BI lens of how do we handle lineage, how do we handle information and tables. And I like OneLake catalog a lot better.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2945s" target="_blank">49:05</a> I think the challenge I wish we could solve a little bit better here, and again Tommy I think I agree with you, is how do we make our data discoverable? And I actually have an item on my list here. I also want with that Tommy, with OneLake integration, I want table statistics. I want to be able to add rules to a table to tell me if it's adhering to my principles, right? And it needs to be built into the product.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2969s" target="_blank">49:29</a> Right, there's also this thing, have you heard of the concept of data drift? Yeah, so data drift is this concept of like you create a table day one and then over time it loads up with more information. And you can see the data changing every time you load it, the data itself starts to change over time because that's what it does, you're adding new information, potentially you're updating old records, maybe you get more nulls that you weren't expecting.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=2997s" target="_blank">49:57</a> Or so the data itself has this natural drift to itself. I'd like to identify a way of starting to spend some time or effort automating data table quality, table statistics, and data drift. Like those are things I think that should be part of the OneLake catalog. That would help me as a developer, and I'm going to put ten dollars towards that.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3017s" target="_blank">50:17</a> I think Tommy that's very close to what you were saying, the governance piece of it as well. Okay, we don't have much time left, we've got a couple minutes left here, so I'm going to burn through some of my other features here and things that I spend some money on.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3032s" target="_blank">50:32</a> So if I think about my main audience of people that are coming from Power BI and introducing them to Fabric, I feel like there's this common story. And maybe this is already mirroring and maybe I'm just not using it correctly, so this feature could already exist, maybe I'm spending money on marketing to let people know this feature exists and how great it is.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3052s" target="_blank">50:52</a> But there is this feature called open mirroring and I'd really like to spend more money, so I'm putting twenty-five dollars down to just a better loading data experience. Right, so let me give you some more context here. A better loading data experience, something like whether I've defined it with a notebook, whether I defined it with data flows Gen 2 or whatever the thing is.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3072s" target="_blank">51:12</a> I want the system to be a bit more aware of hey, I'm loading this data in, these are the transformations that I want. And I want to be able to really focus on how easy it is to either full load a table or incrementally load a table. Right, so define a key or these key columns to define uniqueness, these are my keys.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3100s" target="_blank">51:40</a> Every day I'm going to give you a partial or a full load of information and I'll give you a timestamp of when the data is, just figure it out, just make it work. It's the idea like I feel like incremental refresh and data flows Gen 2 is not right, there's not a lot of things. I don't use it, it doesn't write to lakehouses. It's helpful, so that feature in my opinion totally missed its initial release, it doesn't help me at all.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3122s" target="_blank">52:02</a> Mirroring seems really interesting, copy job seems really interesting. But I don't even know if I can run a copy job from the pipeline yet. So like I want copy job first or open mirroring, these are features that I need the pipeline to be able to trigger, and then once they run then I can run other notebooks or things that transform data downstream.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3148s" target="_blank">52:28</a> So what I'm maybe thinking more about is like I want more of a streaming process, right? I don't want real-time analytics, that's not really helpful for me, but I want to be able to stream the data in and have the system be aware of I'm bringing data into the system. It knows what records are changing and automatically it's either updating or inserting or deleting.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3164s" target="_blank">52:44</a> I can't tell you how hard it is to handle deletes. Deletes has been very difficult. So I don't really know how, there needs to be a better way of identifying when deletes are occurring in the system to keep things in sync. So that's my challenge, I spent a lot of time and mental effort around loading data, is it a full load, is it incremental, and how do I handle deletes? So make that story for me easier to digest, does that make sense Tommy?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3187s" target="_blank">53:07</a> Yeah, that goes with to me my one about the lineage. How do we deal with it? Because right, so we're still dealing with the metadata here. I completely agree because so often when we're dealing with all the different services, like okay, I know I have my nomenclature, I have written everything down, I've gone through this.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3211s" target="_blank">53:31</a> But at what point did this get modified? Because I think we're also used to looking in a single product, whether it's just a single semantic model or code, or if you're a developer where you're in a repository. We still don't have this concept right now where things just refresh and I don't really have that records and that additional logging. It's like you're looking for good logs too, logs that I can easily access. Yes, exactly.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3240s" target="_blank">54:00</a> So anyways, just another note there as well. Okay, very cool. All right, I have two more here and then I'll wrap. I'm going to go quick. Data flows Gen 2, too expensive to run. I think you have 30 million users in Power BI and they're coming over to Fabric slightly or a little bit. Every time I see a Power BI user coming to Fabric, the first thing they love to go grab is data flows Gen 2.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3259s" target="_blank">54:19</a> Right, we know it, it works, we know how the UI is, comfortable. It's just too expensive to run. I just saw someone do a blog post about it, maybe this is getting better right now. But data flows Gen 2 to load a table from on-prem, he did the numbers. Data flow Gen 2 was 2,000 CUs to run, data flows Gen 1 was like a thousand, half the cost. And a pipeline activity, a copy activity in pipeline was like even less than that, like way less.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3285s" target="_blank">54:45</a> So loading data into the lakehouse or getting things done, the numbers show that using anything else other than data flows Gen 2 is cheaper, basically to load data in. Crazy.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3300s" target="_blank">55:00</a> I realize you can't make everything super cheap but at least make data flows Gen 2 the same price as the data flow gen run or maybe even just slightly more. There's some new UI, it's a little bit easier to work with, it's easier to save and get in and out, there's been some improvements with data flow Gen 2.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3316s" target="_blank">55:16</a> But the doggone thing can't be twice the price, that's ridiculous. Make it like 10% more, that makes more sense. Same job, make it about 10, that makes more sense. Something is going wrong there, I don't understand.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3330s" target="_blank">55:30</a> I was just at a conference Tommy, everyone I probably had about four or five conversations and they're like yeah we're not using data flow Gen 2. We're teaching all of our people to learn Python and notebooks. Everyone learning Python and notebooks.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3343s" target="_blank">55:43</a> Yes, I've been saying this for a while in the podcast and I think this was even more evident now because everyone's like well we're moving that direction because it's cheaper to run. I think if they don't fix this you're going to lose a lot of Power BI customers to the notebook experience.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3360s" target="_blank">56:00</a> And again I don't know how the internal politics of Microsoft works but I imagine there's a lot of internal conflict between the different teams. Because now you have the same way to load data, you still have the same user base, but now the same user base can use many different tools to do their thing.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3396s" target="_blank">56:16</a> One tool is like hey you should use KQL, that's the best tool. No you should use data flows Gen 2, that's the best tool. Or no now you should use notebooks, that's the best. So now there's competing teams to do the same work and you're now dividing that 30 million monthly active users across multiple teams.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3393s" target="_blank">56:33</a> It's probably very difficult to get funding, to see which team is growing better in the different areas. So it feels to me like Microsoft has to be very careful here to not make all these tools competing against each other but to work well with each other.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3408s" target="_blank">56:48</a> So this is a really big point that you're making here because I think the success story of Power BI was really Power Query in Excel, correct. This nice jump and then this Power BI blog that came out was only again all the things that we're dealing with.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3425s" target="_blank">57:05</a> To your point Mike, if I check the Fabric blog there are like hey here we're gonna quickly create an event house and it's a step by step for someone who's not the first time walking into this. And you're still dealing with those different personas.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3445s" target="_blank">57:25</a> It really bugs me about the cost difference because I know how many tests have already been out there. If you want people to jump to Fabric you shouldn't have to make them required to learn Python or required to learn KQL. That was one of the selling points of Power BI.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3468s" target="_blank">57:48</a> And the fact that right now it's wow, yeah we've got to figure out, I think I'll pull some of my money in for you to how do we actually optimize data flows Gen 2. I still love them, I still use them all the time. If you have a lot of extra compute and you're not doing heavy jobs they still seem to do really well.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3487s" target="_blank">58:07</a> But they don't seem to scale all the way up to very large jobs, they seem to have a little bit of problem with larger data. So if you're doing really big data problems, it does a great job pulling things from SharePoint. Like if I could get a notebook to easily pull things from SharePoint, that's one more thing where I really need to use data flows Gen 2.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3501s" target="_blank">58:21</a> Anyways let me get my last one in here. So that was data flows Gen 2 and last one here, this is a very dev centric one. I feel like there's a trend in the market with third party applications, whatever any company that's building things nowadays, there feels like there's this movement towards webhooks and APIs.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3520s" target="_blank">58:40</a> So Tommy to your first design of the whole system here, more support for APIs right, more real-time eventing. Set up a webhook. I really think, I'm actually very convinced here, I think webhooks and the API era is still growing quickly.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3537s" target="_blank">58:57</a> If you build an application and you don't have some sort of webhook that you can subscribe to, it feels like you're not building the right software. So I feel like in general when I look across the landscape of companies building software and programs, there's always some solution that has a webhook attached to it, they're everywhere.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3558s" target="_blank">59:18</a> And so what I'd like to do is I'd like to have Microsoft make it a little bit easier for me to tap Fabric into webhooks of different systems. Okay imagine this, let me just give you what I mean by webhooks.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3571s" target="_blank">59:31</a> Let's think about, I have a customer relationship management system, maybe it's Salesforce, maybe it's some other homegrown solution, maybe it's some third party that's not quite as big as Salesforce. When you change a record or have a user input a piece of data, sometimes those software pieces can then send a message.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3588s" target="_blank">59:48</a> A new customer has been updated in the system, send a message to this URL that this is an update on the record, here's the update. So these systems now are collecting data but they're able to push little tiny messages out that says here's the message of this thing.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3606s" target="_blank">1:00:06</a> As you're updating your user table in this third party app, I want Power BI to easily absorb those messages. And I need it to be like a dial, how fast do I want this data to be updated. I'm talking maybe this is real-time analytics, but as these messages come over to Power BI I need an easy way to catch the message, put it in the lakehouse, and then queue those messages up until I'm ready to process them and then process them all in batch.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3638s" target="_blank">1:00:38</a> So this is like data activator to some degree, there's a little bit of things you can do on data activator. But right now the whole experience seems very disjointed, there's a lot of little nuggets and pieces and you really got to know how to design the system to make it work. I feel like there should be an easier simpler method to just turn it on.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3653s" target="_blank">1:00:53</a> So I'm going to spend $5 making that experience more seamless, easier to use, easier to digest. So that's my webhook for third-party apps, so I'm going to improve that process, spend $5 there. It's probably a little bit of use of real-time analytics, maybe some streaming, maybe it uses a little bit of KQL in there, I don't know what it does but I think this solution runs across many different products.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3680s" target="_blank">1:01:20</a> So we'll see. And to your point Mike, right now really the primary way that they're doing that is in the SQL database to create an API for the GraphQL. Which is not the universal language, but that's not a webhook.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3707s" target="_blank">1:01:47</a> GraphQL is not webhooks. No I'm not saying it's a webhook, what I'm saying is to touch the API right now, if you want to use the user interface in Microsoft Fabric, that's really the only way where you can actually generate that. To your point you want to be able to set up the configuration in Fabric.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3724s" target="_blank">1:02:04</a> Yes. Yeah so John KY is on the chat here, John you're right on point. Thank you for joining John. Exactly spot on John, I want that kind of functionality. That is a user data function which comes from Fabric. I think they've announced them, I don't know if they're out in public preview yet.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3744s" target="_blank">1:02:24</a> User data functions are potentially an opportunity where you write code and it can handle these things. But I like it, but again what's our audience right? If I'm a data engineer, fine, user data functions no problem. But I've got a huge pool of Power BI users that are coming to the product, what do they use, how do we make it easy for them?

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3764s" target="_blank">1:02:44</a> So to me there's another part of this, it's like yes but it doesn't quite work the way I want. So I need a little bit more help here for that business user to get into it. So maybe there's a UI on top of it that writes the code.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3780s" target="_blank">1:03:00</a> Exactly, hey put Copilot in user defined functions so I can just talk to it and say hey write me a user defined function that takes this information in, process it, write a file and put it down the lakehouse. To me this is where Copilot should excel.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3793s" target="_blank">1:03:13</a> I should be able to interact with the Copilot and Copilot should say I'm going to build most of this thing for you and then once the code's there then I can tweak it to my satisfaction. This is great because then I could learn with it. So maybe throw Copilot at user data functions, that might be where we need things to go.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3807s" target="_blank">1:03:27</a> Great, take $30 from my Copilot per user and put it there, I don't know. Anyways, yeah and I agree John, logic apps are way better for the user interface. A logic app does the same thing essentially and I do like the UI of logic apps, they're maybe a bit more expensive to run.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3824s" target="_blank">1:03:44</a> But man that graphical interface of like do this, do that, grab these data points, that's way better for me. Yeah I agree, that works really well for me.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3832s" target="_blank">1:03:52</a> All right I think we've exhausted this episode, we really went hard and long on this episode, just so many topics, so many things we'd spend our time on. Regardless though these are all just ideas. I will say I absolutely love the Fabric and Power BI product.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3849s" target="_blank">1:04:09</a> So even though we're playing if I was Arun at this point, Arun thank you very much. If you are listening to this, I want the job. I don't want the job, you've got a really hard job on top of this. The team you're building is really very well done, you're doing a great job on the product.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3861s" target="_blank">1:04:21</a> I'm very excited to get to Fabric Conference and see more of the new things that are coming out. And there's going to be more roadmap probably coming out and more announcements coming out as well. So we're very excited to hear that as well.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3872s" target="_blank">1:04:32</a> I'm looking forward to meeting with the community there and enjoying all the other experiences and learning from other people. That being said let's wrap this episode. Thank you all very much for listening, I know your time is valuable, we do appreciate you listening to our podcast.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3885s" target="_blank">1:04:45</a> If you don't mind, if you like this episode, if there are features here that you like, let us know in the comments. Chat to us, Tommy and I watch these videos and we'll respond to your comments down below on the video, please do that.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3897s" target="_blank">1:04:57</a> If you thought this was valuable share it with somebody else, let them know you also found this episode was fun and engaging. Tommy where else can you find the podcast? You can find us on Apple, Spotify, wherever your podcast. Make sure to subscribe and leave a rating, it helps us out a ton. Share with friends since we do this for free.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3914s" target="_blank">1:05:14</a> Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/podcast, leave your name and a great question. And finally join us live every Tuesday and Thursday at 7:30 a.m. Central and join the conversation on all Power BI Tips social media channels.

<a href="https://www.youtube.com/watch?v=CmiNNxVY5J0&t=3930s" target="_blank">1:05:30</a> Awesome, thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
