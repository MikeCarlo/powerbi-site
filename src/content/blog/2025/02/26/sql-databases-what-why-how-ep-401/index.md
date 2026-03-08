---
title: "SQL Databases - What, Why, How? – Ep. 401"
date: "2025-02-26"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "SQL Database"
  - "Microsoft Fabric"
  - "Fabric Quotas"
  - "Azure SQL"
excerpt: "Mike and Tommy dive deep into SQL databases in Microsoft Fabric — what they are, why they matter, and how to get started. They also cover the new Fabric Quotas feature and debate which social media platform they'd keep if they could only have one."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive deep into SQL databases in Microsoft Fabric — what they are, why they matter, and how to get started. They also cover the new Fabric Quotas feature and debate which social media platform they'd keep if they could only have one.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/V32ndLd67ls" 
  title="SQL Databases - What, Why, How? - Ep.401"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Announcing the launch of Microsoft Fabric Quotas | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/announcing-the-launch-of-microsoft-fabric-quotas//)** — On February 24, 2025, we launched Microsoft Fabric Quotas, a new feature designed to control resource governance for the acquisition of your Microsoft Fabric capacities. Fabric quotas aimed at helping customers...

## Main Discussion: SQL Database in Fabric

Mike and Tommy tackle the SQL database workload in Microsoft Fabric — a topic that's generating a lot of buzz as organizations figure out where it fits in their data architecture. They use Nikola Ilic's comprehensive article from Data Mozart as a jumping-off point to break down the what, why, and how.

### What Is the SQL Database in Fabric?

The SQL database in Fabric is essentially a SaaS version of Azure SQL Database, fully integrated into the Fabric ecosystem. Unlike lakehouses and warehouses that rely on massively parallel processing (MPP) architecture, the SQL database provides a traditional OLTP (online transaction processing) engine within Fabric. This fills a gap for teams that need transactional workloads — think application backends, operational data stores, and scenarios where you need ACID compliance and row-level operations.

### Why Does It Matter?

Before this, Fabric's native storage options (lakehouse, warehouse, eventhouse) were all optimized for analytical workloads. If you needed a transactional database, you had to go outside Fabric to Azure SQL Database or SQL Managed Instance and then pipe data back in. The SQL database in Fabric brings that capability under one roof, meaning your transactional data lives in OneLake alongside everything else — no shortcuts or data movement required.

### How to Get Started

- [SQL Database in Fabric – What, Why, and How? (Data Mozart)](https://data-mozart.com/fabric-sql-database-what-why-and-how/) — Nikola Ilic's thorough walkthrough covers the evolution from SQL Server to cloud offerings, compares IaaS/PaaS/SaaS models, and explains how the SQL database fits into the broader Fabric data platform. A great resource for understanding when to use SQL database versus lakehouse or warehouse.

## Looking Forward

SQL database in Fabric is still relatively new, and Mike and Tommy expect it to become a key part of the Fabric story as more organizations look to consolidate their data platforms. Keep an eye on how Microsoft evolves the feature set — especially around integration with other Fabric workloads and governance capabilities like the newly launched Fabric Quotas.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=30s" target="_blank">0:30</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone, welcome back. Good morning, we are on the other side of 400! Let's go, 1,000 baby!

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=40s" target="_blank">0:40</a> Just keep clipping along right, just slow consistent work, it gets you to 400. Oh man, how you doing this morning? I'm okay, really still struggling with this cold thing that's going on, been a mess.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=54s" target="_blank">0:54</a> So I apologize if I sound a little bit nasally more than normal. So if that bothers you, sorry, this is the episode for today. I'm going to try to keep my nose as clear as I can and be able to mitigate any extra noise from blowing tissues and such.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=69s" target="_blank">1:09</a> So it's been hanging for a while, it's been a really bad cold. The positive thing is we're getting closer to Spring, our snow melted over the weekend and it's like all right, this may be a sign.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=83s" target="_blank">1:23</a> Yeah it's definitely like the warm weather, got out a little bit yesterday, walked around a bit with the warmer weather, I was like this is nice. So finally out of our northern areas, the bear can come out of the cave now right.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=98s" target="_blank">1:38</a> And roam around a bit, we're starting to wake up from this slumber that is our winter. You could really sympathize on hibernation when you have a Chicago winter or Midwest, totally.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=107s" target="_blank">1:47</a> Yeah I'm just gonna stay inside, I don't want to go outside, it's too cold. To the point I'm a little jealous, true, you just skip whole winter, sleep it all off. Yeah that would be nice.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=120s" target="_blank">2:00</a> Awesome, well jump into today. Our main topic is going to just be around SQL databases, more specifically Fabric SQL databases. Just going through the what, the why, and the how of SQL databases.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=132s" target="_blank">2:12</a> What are we experimenting with right now, what are we doing with them, and our initial reactions to some more around what the SQL databases are doing inside Fabric. That's a new feature that's out, it's currently in preview, it's not officially GA yet but we're already playing with the features.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=147s" target="_blank">2:27</a> And let's give a shout out to Nicola Ilic who wrote the article that was our inspiration for today and also how we're going to frame today. So awesome article.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=162s" target="_blank">2:42</a> And he's going through and just doing the what, why, and how of SQL databases. So we're going to unpack his article, talk about what he was describing there and just see how that relates to our experiences as well.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=174s" target="_blank">2:54</a> All right, that being said let's go into some news here. We actually do have some news for once. Tommy, you got a topic for us here around news.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=180s" target="_blank">3:00</a> So not just news but I'm going to give you a scenario. And with all the social media out there today, made me think. Imagine in front of you there are four buttons, you can only choose one of these buttons.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=193s" target="_blank">3:13</a> Choosing that button is the social media platform. And what I'm going to put in front of you is LinkedIn, YouTube, X, and GitHub. You can only choose one of those and the one you choose is the only one you will have for the rest of your life.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=214s" target="_blank">3:34</a> Now you consider the entertainment, for work, for Power BI, all the things you love to do online. Out of those four social media platforms, which one are you choosing?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=229s" target="_blank">3:49</a> That's a good question. If I had to pick all the channels or the different ways that I get connectivity through them, right. Not sure I would really call GitHub a social media platform, but X for sure, YouTube, LinkedIn.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=244s" target="_blank">4:04</a> Facebook, I could go without Facebook, doesn't really help me at all. I will say that most of my mentality right now around anything social media is it's not about personal stuff anymore, it's just about work stuff.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=255s" target="_blank">4:15</a> Everything I put on there is work stuff, there's very few personal experiences. And I think it just feels like bragging, it feels too fake to put a lot of personal things on social media anymore.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=266s" target="_blank">4:26</a> It's that one happy moment with everyone smiling in the picture and you didn't realize like before that moment there was screaming and crying and yelling. And like get in line, stop doing that, put that down.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=275s" target="_blank">4:35</a> And then all of a sudden you get the snapshot of everyone smiling, looks like this happy moment. So maybe I'm a bit more cynical than that and don't post as much stuff anymore.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=285s" target="_blank">4:45</a> But of all the content pieces though, I think they're out there, I think YouTube would probably have to be the one that I'm on the most. And I think I find the most opportunity for YouTube for both professional and personal growth through the YouTube platform.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=299s" target="_blank">4:59</a> So if I had to pick only one platform that I had to stick with forever, it would probably be YouTube. Yeah, maybe for me right now a close second is X, I like what they're doing with things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=308s" target="_blank">5:08</a> It seems like I get a good amount of engagement when I post content around data platform things. So from the two platforms that seem to have the most richer engagement for me and what I'm posting, I think those are probably my top two.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=323s" target="_blank">5:23</a> LinkedIn I could take it or leave it. It was interesting, LinkedIn was growing fairly quickly for a bit and it just stalled out for me, it just hasn't really been growing but just really slowly. So LinkedIn doesn't seem to be as engaging of content as the other platforms that I've seen.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=339s" target="_blank">5:39</a> What about you? I figured, I already made a side bet with myself that you choose YouTube, and it makes sense right. Obviously a ton we do here, you tell me you're one of the ways you learn too, or really taking information is also on that medium.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=354s" target="_blank">5:54</a> Yeah, get help in there. And I called it a social media platform, it has a news feed, it's a developer social media. You get updates, it's definitely in a very different platform. But honestly I chose it to make it harder for myself, really using one.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=369s" target="_blank">6:09</a> So YouTube I love, I get a ton out of it. It's something I during work have it on, but it's also one of those ones where you're like, for Lent you're like I may take it out. It's one of those also like it would be good to have it out.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=385s" target="_blank">6:25</a> You can spend a lot of time on YouTube, that's also the other downside of it, it's a good fasting choice. Yeah, you could spend a lot of time on there.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=395s" target="_blank">6:35</a> I will, I do feel like I keep saying this to people and I don't know if this is actually ever going to come to a reality, but the amount of information and knowledge that people are out there just teaching you for free.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=405s" target="_blank">6:45</a> Like I look at the classes and the things that people can learn on Power BI, not all of them perfect all the time, but I really do feel like there needs to be some kind of YouTube education.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=418s" target="_blank">6:58</a> There's probably something already out there but almost like hey, there's content creators that are making content that is educational in nature. And focusing on highlighting their content.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=428s" target="_blank">7:08</a> And what I found is when you make content that people trade on or learn or educate around, they'll easily consume free content, like there's no barrier to entry for free content.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=440s" target="_blank">7:20</a> However, free content comes with the idea of like it may be good, it may not be good, right. So people pay for content that is organized, it's sanitized, it has a direction, it has some pattern to it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=454s" target="_blank">7:34</a> I think that's where people start like okay, I could go learn all these things on my own but I really just need someone to guide me through. And I think there needs to be some kind of YouTube University, YouTube learning.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=465s" target="_blank">7:45</a> YouTube, something that teaches you, you could learn full like there's whole MIT classes on there that are on programming and data science. And learning things and all these AI things now, how to chat with an AI bot to build apps.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=477s" target="_blank">7:57</a> And how quickly that, I'm watching this is impressive stuff. I just wish I had more time to really dive in and learn and understand what these apps and AIs could do for us.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=486s" target="_blank">8:06</a> And we've contributed to it too, we had our Learn Fabric series, you have a ton of other series on there too. All that being said, I'm keeping YouTube for the kids because like Crash Course, you want something for them when they get to junior high, high school for history. Crash Course is awesome.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=502s" target="_blank">8:22</a> But for me, I'm picking GitHub. And I'm picking GitHub because it's the one I really do get the most I think in enjoyment and learning out of. I love it and it's because I get to do something. Like everything else is a consumer, I am consuming something.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=518s" target="_blank">8:38</a> With GitHub yeah I can learn things but I can also clone a repository, anything I want, try it out, test it out. And I love that aspect of it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=529s" target="_blank">8:49</a> I'll be very sad missing YouTube and I will be pretty sad missing X because I hit a lot of my like Power BI stuff and Yankee stuff there. But I love the doing side of things and it would be very hard to not have the GitHub and all the things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=544s" target="_blank">9:04</a> Training materials are on there, I just saw, I'll have to give the shout out where it's due, but someone has PowerShell scripts now to create 30 workspaces for a training class and then to remove that with pseudo users. It's like that's awesome, I would never have thought of that.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=563s" target="_blank">9:23</a> Yeah, GitHub's given me a lot of joy and learning. The other ones I think fail, and I could get by with podcasts for my entertainment, I think I could live with that if I need to.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=575s" target="_blank">9:35</a> Interesting, that's an interesting take on that. Because I wouldn't have qualified GitHub as a social media platform, I would more stick it into a tool or a work something, it feels more work to me.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=590s" target="_blank">9:50</a> Yeah, well it's got all the ingredients of a social media platform. It's got a news feed, you can mention people, you can follow people, like people. So yeah, anyways, you can make a repo, put issues on it, talk about it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=605s" target="_blank">10:05</a> Yeah, right, I never really thought of it that way. But now that you put that light on there, it could really yeah, it could totally be a social media platform.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=615s" target="_blank">10:15</a> Interesting. All right, well let's move on. One more other item here, Tommy you found something else off of the Microsoft blog here, announcing the launch of Microsoft Fabric quotas.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=625s" target="_blank">10:25</a> What do we think this is? So this has just came out I believe yesterday evening. And what Fabric quotas are is simply giving constraints for each region on for paid customers.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=638s" target="_blank">10:38</a> Simply safeguarding the service against activities that can exploit resources. Quotas are also used by Azure services so if you've already used Azure this shouldn't be too foreign to you.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=650s" target="_blank">10:50</a> But if you haven't, again coming from the world of Fabric, it simply limits the number of capacity units a customer can provision. And it makes sense too because I think this goes to my blessing and a curse philosophy around a lot of Microsoft products, it's so easy.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=664s" target="_blank">11:04</a> With a lot of Microsoft products it's so easy to create something that you may not know the cost behind it until it's too late, and this is one of the ways to do it. The way I read this article, there's a little language in here around making sure we protect our computer, make sure there's not fraudulent activities, make sure there's not other things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=690s" target="_blank">11:30</a> The other day I just went into a client's environment. You remember when you were getting your trial, your Fabric trial? Yes. I had never seen a dialogue box when you get your free trial that let you pick the region. You can do that now.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=705s" target="_blank">11:45</a> I didn't know that on a trial, but I know what you're talking about. I saw that online, on social media. In Azure you can go pick your region of where you live, but now if you go to get a Microsoft Fabric trial, you can pick what region the trial lives and it doesn't automatically go to your default region for Power BI.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=725s" target="_blank">12:05</a> One, this creates a little bit of challenge for me because, well, one I understand that it's a trial, I get it, that makes sense. But I'm a little bit nervous about that feature because now you could potentially pick a trial for a Fabric SKU that is not even near your data centers or not even near where the rest of your Fabric environment is.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=748s" target="_blank">12:28</a> Which could I think incur some additional costs for you. Again it's a trial, but there still is egress and ingress to data if you're having things talked to a blob storage account outside of the scope of Fabric. So if you keep everything inside Fabric you're probably going to have very little risk, but if you start connecting to blob storage accounts or external storage things with Spark, those computes can get really chatty and could cost you some money, real money, between talking between regions or something like that.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=779s" target="_blank">12:59</a> The other thing I look at here, I'm reading this one, it goes they talked about "we must safeguard against fraudulent activities to exploit compute resources." If I remember correctly, I have a quota for Synapse, I had a quota for something, so you could only have two Synapse environments and you had to go call Microsoft or fill out a help desk ticket to get more quotas.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=801s" target="_blank">13:21</a> Or let's say you're going to go get a virtual machine and you're going to get a VS D3P or whatever, there's a limited amount of those things you can go request and your quota is only of a certain amount. Your quota only lets you use 10 or 100 or 20 cores, virtual cores to use that computer. And then you had to go into Azure and change that quota, request more cores so you could buy a bigger machine.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=830s" target="_blank">13:50</a> Somewhat of a pain when you were using Spark, and the fact that Fabric is not getting quotas makes me feel like this is a problem that they saw arising because of the Spark engine. Because I think the Spark engine and how Microsoft has implemented it, it's aggressively grabbing a bunch of cores. Every user that's out there, every time you spin up a Fabric, you could have a lot of cores getting absorbed and those F SKUs can really eat up, especially in the trials you've got 64 compute units.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=862s" target="_blank">14:22</a> Which I think, what, one compute unit is two cores I think is how it goes. I think it's a one to two ratio, so that means that would be 128 cores you could potentially go use. Anyways, all this to say, I'm going way into the weeds on technical here. It's interesting that they're doing this. I think this is more around them being able to budget their cores better than it is a feature for us.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=884s" target="_blank">14:44</a> I think they're trying to pitch it as a good thing, and in my opinion I'm like, yeah, I think this is more of you protecting yourselves and making sure there's a good consistent experience for people. So I'm not really seeing this as a protection for us the users, it's more of a protection for Microsoft to start limiting us and adding one more layer of things we need to know how to do.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=910s" target="_blank">15:10</a> So as an admin you for sure should know about this, this is something you're going to want to understand, especially as you move over to Fabric from P SKUs or F SKUs or A SKUs. Because this is definitely uniquely different, and it makes a little sense too because they're doing this same thing right now with a lot of the AI virtual machines. If you want an AI virtual machine which needs a GPU, you have to request a quota for that VM.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=935s" target="_blank">15:35</a> And I think again, we're dealing with a ton of, to your point, all the different cores, all the different services, all in one. Yeah well, it's very easy and I imagine it could be incredibly easy for that to get out of hand very quickly on their end. So what do you think is the abuse that's happening here?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=949s" target="_blank">15:49</a> I'm not that I don't know, I can't quite figure that out. They're saying fraudulent or abuse of the computer, I don't really understand that comment in the blog post. Because if I look at it, you're turning on the F SKU, you're paying for it. I don't understand, what I wonder if it has to do with buying really big F SKUs and paying a ton of money for no reason, that doesn't seem right.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=976s" target="_blank">16:16</a> I imagine it has something to do with Python, since you can really run most Python packages and Python has a lot of capabilities. That's the only place I can imagine you can actually in a sense hack the system or actually do something that would cause that. I can create a Python script, the only thing I can really think about here would be maybe some people are starting a bunch of trial Fabric trials and they're somehow absorbing a bunch of cores.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1007s" target="_blank">16:47</a> And we want to limit in a different way how many cores are being used. But at the end of the day honestly, I think this is a constraint issue on Microsoft. As Fabric is growing they don't have enough cores available for us to run everything at this point. So that's what they're doing, the quota is to slowly roll out by region, like hey this region's got two million cores or whatever.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1024s" target="_blank">17:04</a> Right, I can only, when they start getting to where they need something that's going to require quotas. So that this also may be something where they can shift that quota amount. Companies that are bigger in nature, larger customers, they can shift that quota to them versus others. I don't really know how it all goes behind the scenes here, I'm just speculating on all this stuff.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1041s" target="_blank">17:21</a> No, I imagine it's like when my debit card company notifies me that I spent $40 for breakfast at Taco Bell, where there's like "that doesn't seem normal." And I bet with all these people spinning up trials, it just sets off some red flags and they don't know that 40,000 people out of a company are doing a trial at the same time. I don't know either, it just seems interesting.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1063s" target="_blank">17:43</a> It maybe is a way of Microsoft governing the ability for them to shift the cores to companies that are actually using it at scale versus the ones that are just dabbling in it and starting out a little bit. That's what I found in the past with cores, if you're a small company you have to request cores, it's a little bit more pain for you to get what you need. When you're a big company you just type in a big number and boom it's done.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1084s" target="_blank">18:04</a> They're, you're not paying for the items, you're just reserving them. You're saying this is a quota that I think I may want to use. Interesting article, definitely check it out. If you're an admin of Power BI you definitely want to understand what Fabric quotas are doing, and you may even want to go check to see what your Fabric quotas are right now currently and see what that looks like for you. So anyways, very interesting thing there as well.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1107s" target="_blank">18:27</a> All right, moving on. Main topic for today, are we good for main topics? Let's dive in. Okay, let's dive into our main topic. Today is our topic from Data Mozart, Fabric SQL Database: what, why, and how. So that's going to be our main link here, we're going to go through that item.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1131s" target="_blank">18:51</a> Initial reactions Tommy, what do you think about this article? Well, I want, and I think for today's conversation, I think those three questions in the way that we see it, the what, why, and how, is a great way. We've already talked about the SQL database and Fabric, but it's really important that we back up too and again really hopefully we've already done this, but pound the significance of this being available to us.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1158s" target="_blank">19:18</a> I always start my Dashboard in a Day trainings and I always love to talk to them about, once upon a time if you worked in an office there's a back room that was 10 degrees warmer than every other room in the office that only IT was allowed in, the ledger was off, and there were Matrix-like machines in there. Yes, that's Power BI now just packaged.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1178s" target="_blank">19:38</a> But the joke around there is SQL Analysis Services. But we're coming from a time not long ago, I was still working Mike, when many of my offices had SQL servers on premise that were managed that way. And but the company, it wasn't, obviously there was no Power BI, but companies survived and thrived, needed those SQL servers in order to function because it was transactional.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1207s" target="_blank">20:07</a> And when you buy a SQL server on prem there's some considerations, a lot, yeah, a lot of conversations around what size of machine do I need, how much hard drive space do I want, what size of data am I going to have. So there's a lot of planning that goes into buying that box, right, on prem.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1223s" target="_blank">20:23</a> And so this is a mindset shift. When I was talking to people around Fabric or Microsoft products comparing that to cloud-based products, right, in the on-prem world you buy the box, the machine's purchased, it's a capital expense. You pay for it, you buy the box, it shows up, you install it, it's locked in.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1244s" target="_blank">20:44</a> You're basically buying the compute, the compute's purchased, you already bought it all. There's no need to use any less of it. So to maximize your investment on prem, you don't want to overrun the machine so much that it falls over, but you want to run it like 70-80% of its capacity all the time, because that's the machine you've already paid for. You want to best utilize that investment, it's cost you a lot of dollars to get it there.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1271s" target="_blank">21:11</a> And the storage on that machine is very expensive, you're talking thousands of dollars. And maybe it's cheaper now, but it was expensive to store things on that machine. So to get more disc drive space with server grade, all the things, right. I bring this up to say the compute was cheap because it was prepaid and the storage was expensive.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1296s" target="_blank">21:36</a> Because you had to go buy more of it whenever the machine ran out of space or when you were trying to store more things. And it was physical. I lived in Florida for a bit and I remember during the hurricanes they would have to move it, the company had to shut down. No way! Yeah, so when everyone's evacuating it's like hey we're going to be offline for the next three days in terms of anything you can do because we got to move the machine to another safe place, we got to move it out of the office.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1322s" target="_blank">22:02</a> And these are all the considerations. And again it wasn't just your reporting, to your point too, it was everything. I didn't even think of that.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1328s" target="_blank">22:08</a> Was everything I didn't even think of, but that's a really good point because if you're in the hurricane path and all your data's gone. So someone would physically turn off the machine, put it in their car and drive it somewhere. Exactly, that seems so unsafe, but that was what other options did you have at the time, true.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1349s" target="_blank">22:29</a> So Nicola does a good job now walking you through the story. So in the beginning part of his article he talks a little bit about this, the move. One thing he doesn't put on here was the on-prem SQL Server, right. So that would be the precursor to all the things he's talking about here.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1363s" target="_blank">22:43</a> But he jumps in and he does I think a really good diagram here of like, look, we had infrastructure as a service which means a SQL Server on Azure VM. This would be like a physical box, turn on the VM, install the software of the SQL Server. So you're paying the license for the VM and you're paying the license for the SQL Server.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1386s" target="_blank">23:06</a> And then he moves over to platform as a service which is Azure SQL Managed Instance. So it takes a little bit of your control away, like what you can do on the SQL Server itself because you're not installing things, you're not installing your own patches. I think this is you're taking a little bit of management away from the users but you're giving still the full capability of storing tables, making things, you have all the richness of infrastructure as a service but you've given a little more control to Microsoft.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1410s" target="_blank">23:30</a> Then we move over to, again it's platform as a service again but now it's Azure SQL Database. And now you stop worrying about the hardware, you don't care what the machine it's on, you're not picking the VM. You're saying I want this database, turn it on, Microsoft you figure out all the hardware side, just give me a connection string, let me connect to it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1429s" target="_blank">23:49</a> Which actually my preference in cloud things, I love the Azure SQL Database, it's been really rich from that perspective. I was going to say, okay yeah, go ahead, do you want to jump in there real quick? Before I was going to say, all those things you're pointing out here, the critical part of this from the data analyst point of view, that I just wanted to briefly touch on too.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1451s" target="_blank">24:11</a> Again most organizations even really before Power BI, part of what made Power BI so significant was it was more than just SQL, right. Because a lot of your reporting tools, it's like you can upload a document but you can refresh that document. You can upload your CSV file, create a report, interesting, but most business intelligence tools the requirement was some SQL type server.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1477s" target="_blank">24:37</a> Anything that was a local file had to upload that document, it wasn't going to connect to that document. And again a lot of what data analysts have done was relied, you had to rely on a SQL Server in all these capacities in the networks. But a big part here of what we've done over the past 15 years, over the last 10 years, has been on well, hopefully there's a SQL Server, can I get a connection to this so we can actually refresh this.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1507s" target="_blank">25:07</a> Yeah I agree with that. And so that's the thing of Fabric, is you're getting a lot of the analytics side of things but you're not necessarily having to do all the management of the infrastructure of things. And that's the part that I think I'm going to point out here. Yeah, we're over one more environment to software as a service and that's where now Fabric SQL Database shows up.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1526s" target="_blank">25:26</a> So this is another shift in what Microsoft has done with SQL. So it was infrastructure, platform, and now it's software as a service. So now you don't, and this is what I feel like has happened here, is the management of the item has slowly moved away more and more. So you used to have to have a database administrator, DBA, and they would work on making sure the machine stays up and has the right memory and all the things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1554s" target="_blank">25:54</a> That DBA role has slowly been pulled out of these different systems. There's still probably some DBA work that needs to be done but it's more of focusing on optimizing the tables, making sure they're performant, maybe cleaning up things that are not in there. But the management of the actual hardware has now been removed.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1571s" target="_blank">26:11</a> Yeah and that's where we put ourselves in Fabric SQL Databases, which is now still SQL, you can still write your normal T-SQL on it, but it's now, there's been features removed that you just don't worry about. Microsoft handles all that for you which I really like this experience.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1589s" target="_blank">26:29</a> It feels like they missed a market here though. It feels like they should have had an icon with some sort of word of SQL on it, because instead of the F thing. Well every single database for SQL has always had the word SQL on it and all of a sudden you get the Fabric SQL Database and you get an icon that's like totally different, it doesn't even look like a database.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1605s" target="_blank">26:45</a> So maybe that was intentional, but the Fabric database doesn't look like a SQL database in any sense. Well because even Synapse looked like an S too, the logo for that too, and a lot of people didn't catch that.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1618s" target="_blank">26:58</a> But I love, to the point where we're at with a Fabric SQL Database, I love how Nicola really outlines what the SQL Database is. Because obviously it's a SQL database, yeah, but there are important components that make it different than what you've experienced in the past.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1634s" target="_blank">27:14</a> One, like Azure, it relies on massive parallel processing and simply means the data is across multiple nodes. But the difference, and I believe correct me if I'm wrong, unlike an Azure database, basically the data is stored in Parquet. And I do not believe that is the case with normal Azure SQL Databases.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1656s" target="_blank">27:36</a> I don't know if it's actually stored in, well, I don't know if it's actually stored in Delta. Well let me say it this way, yes it's probably stored in Parquet, but I think it's stored in like a Delta table is what I think it's maybe stored as. So it's like they've shifted the technology stack, it's like they've gone so far.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1677s" target="_blank">27:57</a> This has been interesting because it feels like a lot of what they're doing with most of the technology around, it feels like a lot of the technology pieces that they're playing with is, hey we're going to give you Spark, we're going to give you Python notebooks, we're going to give you all the other things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1694s" target="_blank">28:14</a> And by the way this SQL platform as a service is not going to directly read from the Lakehouse, the OneLake. And this is something that was actually produced back in Synapse. I used this feature in Synapse and one of the reasons I liked Synapse was because I could pay per query, the compute it needed to go get the data from the Lakehouse.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1719s" target="_blank">28:39</a> So it was, the whole charging mechanism for SQL inside Synapse was very different. It was charged by the terabyte. You could run the query and how many terabytes it accessed was how much it charged you for it. And it was like one terabyte for $5, like you had a really good amount of capacity for very cheap honestly.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1736s" target="_blank">28:56</a> And so what was happening is the SQL Server was running the queries but then it was passing those queries down to the Delta table beneath it. It could read things at the Delta table levels which to me, that's really the point that I really like here. That's what I really like about the SQL stuff in general.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1752s" target="_blank">29:12</a> Yeah it's using a, what I would say, maybe it's not more modern but it's using a more open standard to store data into it. And then it'll make it easier for you to get data in and out of the Lakehouse and or read it with other compute things all in the same experience. And that's what I really like about this one, that's the part that makes this shine for me.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1771s" target="_blank">29:31</a> And I think it's the underrated win here too, is the SQL data is still stored in OneLake. And I don't think we give enough credit to the architecture of what OneLake is, because how significant, how easy that makes our lives. Like OneLake is almost like the iTunes of data, where it's like it just works.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1788s" target="_blank">29:48</a> When I had my iPad I didn't have to worry about where my music was. I just log in, I get my music. And how that changed our lives, the fact that all these different services and now a SQL Database is stored in OneLake and I have it in that same capacity and it just works.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1806s" target="_blank">30:06</a> We've never had an easier way to have our data ever in our lives. Yes, it's almost to the point where you're almost like a little jaded. When people didn't realize what life was like before iPhones, like no no no no no. You had to memorize a phone number, right. Like you almost don't know what life was like my friend.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1826s" target="_blank">30:26</a> Do you remember driving somewhere and had to print out the directions? Oh yeah, I had MapQuest, I had Google directions and it would have like turn left here and had a little map with like a little arrow. Like it was all the things you should have had on your phone but it was printed out beforehand.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1847s" target="_blank">30:47</a> Yeah, when I was in college I took a couple trips across country for work and I remember having a big map, like just a huge map in my car and I put it between my seat and the center console. And I'd pick out my map, I'd be reading the map, okay where am I, what road am I on. You had to pay a lot more attention to what you're doing on the road, reading signs.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1872s" target="_blank">31:12</a> Now the little blue screen sits in your car and tells you you've got 3.1 miles till your next turn. You're just dozing out because you're like a robot, the mapping thing takes care of it all for you. But you're right, do you remember when you were a kid and you didn't have a phone and when you went somewhere you went there and no one knew what you were doing. When you were there you were just there, it wasn't like they could track your location.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1898s" target="_blank">31:38</a> Part of my planning for traveling was also the CDs I had with me. Oh yeah, because what you brought with you is the only thing you could listen to. That's true too. Get unlimited music, stream from Spotify. Like I hope I remember my Weird Al CDs because that's what I was gonna jam out.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1914s" target="_blank">31:54</a> Yeah but all that being said is we're on that other side of ease of data where really it has been not this convoluted way and terrible process to get data. But the fact that we have this OneLake integration with SQL Databases, it's so easy that I feel like it's not getting the credit it deserved. But this is a really significant part of our own lives in data.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1941s" target="_blank">32:21</a> I agree and I think, I've been talking about this a lot of times Tommy. I keep talking about the idea that data and analytics is becoming a commodity, like everyone can do it, everyone can use it, it's going to be more accessible to everyone. I think this is another attempt from Microsoft to do the same thing with what they've done with Power BI semantic modeling.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1963s" target="_blank">32:43</a> Like they've taken a very complex thing, the Analysis Services Cube was a pretty complex item, but they made it very easy to get data into it. They made it very easy to get data shaped, modified, right. Data flows or Power Query is incredibly powerful. And a lot of the data shaping I need to do, I still today to this day, whenever I need to have data I'm downloading from the internet, just yesterday I had a project I was working on and in that project I spun up an Excel document and sat down.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=1991s" target="_blank">33:11</a> An Excel document and sat down and said hey I'm going to just modify, shape this data in power query. I knew exactly what I was doing, bip bip bip, couple clicks done, shape the way I wanted, add my steps, great, done. And then I'm off to the races.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2004s" target="_blank">33:24</a> The speed in which I can automate loading of things, and the sooner you recognize anytime you shape data or modify manipulate data, the odds of you having to do that one time only, very small.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2020s" target="_blank">33:40</a> Even my little side project, I did my little side project, I'm just gonna shape this data once. I wound up shaping it again the same thing three separate times. The first time I did it I just deleted some stuff and moved things around, I'm like oh dang it, I didn't even listen to my own wisdom here, which is don't do that, build it in power query, at least automate it to some degree.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2043s" target="_blank">34:03</a> Then the second time I did it I did it in Power Query in Excel, great. And then things didn't go right, I had to go do the analysis again, and now that I had already built everything in power query, the third time I just downloaded the file, hit refresh, and it was already done.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2060s" target="_blank">34:20</a> So you now learn, I don't delete anything anymore, I put everything in OneDrive. Every little thing I do now, if I need to get data, download it from somewhere, I immediately go to Power to build what I want to build, and then if I ever need to move it to Fabric or something like that, I can at least upload it to Fabric as well.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2078s" target="_blank">34:38</a> One of my first conferences I ever spoke at, I remember the two slides I said. One of them was who's all created a Power BI model and uploaded it and never touched it again. Two people would raise their hand. The next slide said you're lying or you just don't know it yet. Yes, you haven't had the request to update your stuff yet, right? Because it always happens.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2097s" target="_blank">34:57</a> But it's true, doesn't matter how experienced you are, a lot of that's not up to you. To your point, it's a business request, business change.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2109s" target="_blank">35:09</a> So I feel like we've hit the hammer pretty well on what the SQL Server is. I want to go through how Nicole's gone through the article because I really like the questions here. So let's dive into the why use a Microsoft SQL database.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2121s" target="_blank">35:21</a> And this goes to episode 400, we just talked about the choose a data store. But yes I think it also deserves how Nia really outlines it, but also our own opinion and how it's changed with the SQL database.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2135s" target="_blank">35:35</a> Because let's also put in context, Microsoft has been throwing a ton of products to us. When it first started, obviously the benefits of a lakehouse. And I think our initial conversations around SQL databases, you're like well but I have a lakehouse, right? So why would I then use a SQL database?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2158s" target="_blank">35:58</a> So let me ask you, how is that changed? Where's the mentality now on when or why to use a SQL database?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2165s" target="_blank">36:05</a> Yeah so that's one of his first bullet points here, which it's again the when portion of the article is actually really good. And I really think the one point that stands out to me here that really resonates with me is the unification of the Fabric experiences and how easy it is to move between different products in Fabric.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2188s" target="_blank">36:28</a> And use the Fabric SQL database as a source or a sync, the place where you store data very seamlessly in the system. So at the very bottom of the article he says, let me give you a quick bullet list. And Nicola, thank you very much for giving me the bullet list at the end here, it's awesome. It's a good summary on the bottom, you made a lot of great points.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2205s" target="_blank">36:45</a> But at the bottom here says when you should consider a Fabric SQL database is when you're dealing with transactional data. There's no one item, and I actually have a couple projects that I've done, some not fully transactional data but I've done some changes that are happening very rapidly on top of Delta tables.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2221s" target="_blank">37:01</a> And there is, I have experience in the Delta tables. If you're using Databricks or Spark, it's actually always up to date and it's very responsive when you're making changes. However, if you're using some of the automatic built-in Fabric SQL database or Fabric data warehouse experiences, those don't always get the data as fresh as possible.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2244s" target="_blank">37:24</a> There's some job running on the back end, it's not on demand all the time. I've seen a little bit of lag between some of the Delta tables inside the Fabric experience. So if you're trying to write and read data very quickly to a table, it's part of a process, it's part of a loading process, it's doing something, you're tracking something in a log, something along those lines.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2264s" target="_blank">37:44</a> You might want to consider using the SQL database, it's more transactional in nature. So for that reason, if you're dealing with transactional data or you're building an application, yeah, Power App, something like that, that's going to be moving it in and out quickly, I would really consider using the Fabric SQL database because that seems like a great pairing.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2283s" target="_blank">38:03</a> It's T-SQL is your language of choice. Again I'm not, that's a great comment, but for me, Python, Spark SQL, T-SQL, it doesn't really matter. The languages all feel so close to me. People have their preference man, I get it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2308s" target="_blank">38:28</a> But I know where you're going anymore, it's just a quick call to Copilot and say I want to do this, what's the equivalent of this command from T-SQL in Spark SQL. It knows what to do. So to me, to really heavily say one language is the only language you're going to learn, as long as you have the conceptual pieces of what's going on in the language, it should be just fine for you to figure out what the new function is.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2332s" target="_blank">38:52</a> I very rarely find that there are any major gaps between languages that I just couldn't do. Maybe one language is slightly more efficient in handling something a certain way than another language, fine. But in general the stuff you're going to need to do with those items, they're pretty much the same in my opinion.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2350s" target="_blank">39:10</a> Over 400 episodes, the one thing I really do appreciate more than anything are Carlo complaints over Python and Spark notebooks. It's really one of the things I look forward to now when it comes up.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2362s" target="_blank">39:22</a> And to your point though, yeah you have Copilot, some people are going to have their preference. But yeah, I see where you're coming from, some people may not be as comfortable. But no, a Carlo complaint over Python is something that I look forward to on a weekly basis now.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2378s" target="_blank">39:38</a> I'm not gonna complain about that, I'm not going to worry about it too much. My one complaint would be, freaking Copilot is not in enough places, that's my problem right now. Give me Copilot, I don't need Copilot a lot, but I need it when I need it, and it's usually when I'm writing a little bit of code somewhere.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2396s" target="_blank">39:56</a> Here, there, wherever, and I'm like I just need a little bit of extra help. So I have to go open another browser, go somewhere else, take my notebook, download the notebook, put it in VS Code so I can use the GitHub Copilot. That's what I do. You're the same one.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2412s" target="_blank">40:12</a> Oh my gosh, I have a free Copilot that I want to use right now and I can't because it's stuck in stinking Fabric. So dog gone it, if you can give me Copilot in GitHub for free, why the heck can't I get Copilot for some experiences in Fabric for free? Or part of, I'm already paying for the dumb thing.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2425s" target="_blank">40:25</a> Fine, consume some of my CUs, I'm willing to take the hit on it because I need those figured out, I need the code figured out. So Copilot for reports, Copilot for insights on data, don't care, don't need it, not using it right now. I don't go looking for help for those things. However, if I'm writing language or code, dude, I'm always about let's find a Copilot that will work with me.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2448s" target="_blank">40:48</a> Yeah, 80% of my code in my notebooks right now, I've downloaded it, used Cursor or Copilot, yes, and wrote it and just sent it right back up the stream, good to go.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2459s" target="_blank">40:59</a> So the other three points he makes here around when to use Fabric SQL is: no provisioning, no configuring, no managing the individual resource, it just comes along for the ride. So this one, I think I've gotten so used to Platform as a Service, I've gotten so used to it, that's just like yep, that's why I'm choosing this. It's just a checkbox for me anymore.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2482s" target="_blank">41:22</a> Does it manage everything for me? Can I just turn it on, can it just work? Great, let's just do that. So that I really like. It's part of source control with Fabric. This is the story Microsoft is trying to produce with Git integration and CI/CD. They're doing a better job of giving us tooling around how to properly do source control in Fabric. It's getting better, it's not what I want it to be yet, but it's definitely getting better.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2510s" target="_blank">41:50</a> So using Fabric is becoming very refined, I feel like it's getting a lot better in general. The Git things, the professional developer pieces of Fabric, they're still working on a lot of those mechanics. I think you're going to need more time for them to really dial that in.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2529s" target="_blank">42:09</a> I just saw the Fabric CI/CD Python library that just got published recently, very promising. They're already making changes to it. When it first came out I had some really big questions. They had some of this stuff called find and replace, for example, you have a notebook that's pointing to a Lakehouse, the Lakehouse has a GUID.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2543s" target="_blank">42:23</a> And therefore you would need to replace that GUID in potentially multiple places as you move the notebook between different environments, dev, test, prod, because you might have different lakehouses. That was a problem, you couldn't easily move those things. So they're trying to give you more control there.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2561s" target="_blank">42:41</a> Ideally they would just bake all this stuff into deployment pipelines and make deployment pipelines be the thing that we do. But deployment pipelines is more talking about the artifacts, and that's about it, right? So there's a lot more to consider when you're doing deployments of things that I think we want to control as developers.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2583s" target="_blank">43:03</a> Stuff that Microsoft gives us access to but it's not available to us right now. I'm okay with the Git one because I know they're working on it, and obviously I would love all the products in there. But that wouldn't be my deal breaker at this point.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2601s" target="_blank">43:21</a> Really it's the first bullet point that Nicole talks about that is really the winner here. It's really the meat of what a SQL database is. Mike, I can give you stories of utilizing SQL databases in the Power Platform and the flexibility here.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2619s" target="_blank">43:39</a> One of my favorite projects I worked on is we had 600 documents we had to write that used the Word template, but it had to fill in all these invoices. It had to be 600, we had to send them out all at the same time. Well, we had all the data in SQL, we just sent a trigger and it would fill out 600 Word documents and the emails out to those people all at once.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2641s" target="_blank">44:01</a> Yep, and the fact that it was so easy in T-SQL and a SQL database was incredible. And again, half the things we migrated, the amount of projects I've worked on, we migrated off of Excel or SharePoint into a database.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2655s" target="_blank">44:15</a> The database is incredible because of Power Platform and tools like that, the flexibility to be able to do that. And the need for organizations, just like ease of analytical reporting has become more and more of a want and a desire. Sure, that's the same with being able to touch my data and being able to manage my data and own my data.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2676s" target="_blank">44:36</a> And the fact that now we have this, to me that's the meat and potatoes of the SQL database. And then the last point I'm supposed to point out here with Nicola, he says the seamless integration of Fabric workloads. So to me that's the win.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2692s" target="_blank">44:52</a> And someone in chat, I think it was Donald, pointing out in chat here when you get a Fabric SQL database, by default it has mirroring turned on for you. Which is nice because this means all the SQL tables that you get can be mirrored to the Lakehouse automatically.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2710s" target="_blank">45:10</a> So if you're pulling these tables from other stuff, the automatic mirroring of this, to me I again think mirroring is an underrated value-added feature. That Microsoft, I don't even think the name of the word mirroring is the right word giving it justice.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2727s" target="_blank">45:27</a> It sounds like mirroring is like a copy activity. I think there's more things happening behind the scenes that mirroring is doing. If I think about what we do in Power Query, right, we do incremental refreshes. We're taking all the net new data and updating records so it's all loaded correctly into your table.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2749s" target="_blank">45:49</a> Mirroring is doing a lot of the similar features as the experience of, not mirroring, but it's the same experience as the incremental refresh but way better honestly. And that's one area I need to unpack more, I think it's an underrated feature, the mirroring experience.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2769s" target="_blank">46:09</a> Being able to get your Lakehouse tables just up to date. This is what mirroring to me is, right. You have a table, it sits in the Lakehouse and you're going to add changed records to it. So I just throw it an Excel file, a list of records, whatever it is, here's the records I have that are going to be updated or inserted.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2790s" target="_blank">46:30</a> And the mirroring experience just figures it out and knows what to do with it. And so that's really intriguing to me of how they're just making that mirroring experience simpler to use. And that's the power of the SQL database portion of this, it just works and it's out of the box.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2805s" target="_blank">46:45</a> And it's looking at the change log, transactional log of the SQL database and making sure your Delta table matches that other experience. Which is also very interesting to me as well, so I think it's cool technology.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2818s" target="_blank">46:58</a> Interesting you say mirroring because for me the take-my-money aspect is the shortcuts, which I believe work with SQL tables and views. And if you were to ask me personally, if I could only choose one, mirroring or a shortcut with SQL databases, I'm choosing shortcuts nine out of ten times.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2839s" target="_blank">47:19</a> The mirroring is awesome but that's another feature here. And I think that goes back to what Nicole is talking about with the seamless integration. It's not just a SQL database that lives in Fabric, yes it's a SQL database that has all the features of Fabric in it. And that is really what makes it incredible.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2856s" target="_blank">47:36</a> Yeah, and if you're in the data flow, SQL database shows up as an option into it, or like it's a source. It may not work yet but well it will, it will be there, like they'll figure it out. First world problems here.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2873s" target="_blank">47:53</a> That's an experience that's there right. If you're in the Python notebook you can then connect to it, it's already authenticated the user. So there's a lot of other things that you have to manage as a DBA like who has access to it, what tables do they have access to, what are all the rights of these things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2886s" target="_blank">48:06</a> Right, you can now with Fabric it's just available to you and you can use Entra ID to secure things all the way down to a table level inside the SQL database. Because it's a SQL database, there's already a pattern of how to give permissions to things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2901s" target="_blank">48:21</a> So this is where things get very interesting, because now all the other richness of Fabric is really close to what you liked about SQL databases and it's just there available to you.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2912s" target="_blank">48:32</a> You're jumping in some uncharted territories here because I may save this for another topic, but I just want to mention this and you see where you want to go with this. The fact that what you mentioned in the beginning of the conversation today, that data is for everyone, right.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2928s" target="_blank">48:48</a> That idea and that Fabric's making that well. Always SQL databases have been managed, the data coming in has always been owned by DBAs. That's because you needed that talent, that expertise. Generally speaking I wouldn't say the DBA owned it, but the business asked for it, the DBA managed it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2945s" target="_blank">49:05</a> Right, problem, you had a single person to go to. Hey this data is wrong, it's not loading, DBA would show up and just make sure the tables are working the way they wanted to. Right, Joe from marketing wasn't going in to Azure to do that. He wasn't writing stored procedures.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2965s" target="_blank">49:25</a> But there's definitely, to me right now to your point, if data is for everyone and this ease of use with a SQL database, I really think we're getting to a point Mike where marketing and Joe from marketing can own and manage the SQL database.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2980s" target="_blank">49:40</a> Yes, and I think that's going to change our lives when we get to that point, but that's the direction we're going. Yes, would you agree? Yeah I think so. And this is where database as a commodity, that's exactly right.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=2996s" target="_blank">49:56</a> So again this is one of the things, like with Power BI right, if everyone can get easy access to it and easily use it and manipulate it and push things in and out of it, that's it. SQL databases are becoming the commodity.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3011s" target="_blank">50:11</a> Right, what was the commodity before? The Azure SQL database. The commodity before that was Access databases. Oh yeah. So like if you were a business user and you needed to make a database, a lightweight version of a SQL Server without all the management controls, without all the overhead, you could make an Access database on your local machine.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3031s" target="_blank">50:31</a> You could have seven, eight, nine, ten of them. You could have tons of these things. I walked into a company one time where everyone in the whole company was trained and educated on SQL, it was great.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3043s" target="_blank">50:43</a> But the downside was their massive servers that had all the information on them. Every time someone wanted data, nothing was cached, it was coming from the main servers. So what they would do is they needed like a little mini database on top of a bigger database that they could go query.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3056s" target="_blank">50:56</a> And say look, I'm going to go hit this really big table on my really big server one time, I'm going to load the data down locally and then I can continue to manipulate it. Right, but I needed something that was bigger than Excel but not quite the full entire database that we had originally.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3074s" target="_blank">51:14</a> So there was like 1,200 Access databases and they didn't even have 1,200 employees. So there was more Access databases in the company than there were people that were there, because everyone was just building little mini models of the big models.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3090s" target="_blank">51:30</a> That's the point though, that was a commodity. When you make something free and almost doesn't cost you any extra money, everyone had their computers, you could build as many databases as you needed to on your local machine. It became the commodity.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3106s" target="_blank">51:46</a> And what happens with the commodity? You make a lot of them. Some of them are good, some of them are not so good, but that's the reality of it. You have to figure out how to manage that. Does that make sense?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3116s" target="_blank">51:56</a> Yes. Microsoft Access was the MapQuest of data. It served its purpose. I was one of those classes, I remember even earlier than that Tommy, Access databases was the Oregon Trail of games in middle school.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3135s" target="_blank">52:15</a> That's what it is. The only difference, I would still play Oregon Trail now. But they have newer versions of it. That's a good one. Access databases, but everyone and their friend played Oregon Trail growing up. That was the game. Tommy has typhoid again, like whatever.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3154s" target="_blank">52:34</a> And just like Access databases, he killed more than he wanted to. Mike just died, your databases fell over, it's dead now.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3161s" target="_blank">52:41</a> I remember six months after Power BI came out, we were in an Access training session. They wanted us to do that, I remember all I could think the whole time was why, why this? Did you not see what just came out? And it was just this revelation that was coming, like why are we learning Access? I can do better in this new tool.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3179s" target="_blank">52:59</a> Yes, and but that's the point though. And what if they do this with SQL databases? Holy crap. Was Access too hard to learn and frustrating? A little, I mean it did a good job of introducing the business user to SQL.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3192s" target="_blank">53:12</a> I mean yeah, it wasn't ideal, I'll say that. It wasn't the best tool out there. But how did I learn how to build a select statement? How did I learn how to do a join? I used Access databases. It had a very slight graphical interface where I could build the relationship between two tables.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3211s" target="_blank">53:31</a> I could grab two columns and put it down and I could click on the SQL view and it would just write out the SQL. This column, this column, this column, join on this thing here. That's where I started. I took a full graduate class on SQL eventually later on, but that was my first exposure to SQL.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3227s" target="_blank">53:47</a> And it was like the same concept as Power Query for learning M or data manipulation, right, same concept. Here's a user interface that is slightly GUI in nature, you can drag and drop and make some graphical things on the page, but then you can push them down to a table which would then result into an actual SQL statement that's doing the real work for you.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3251s" target="_blank">54:11</a> I mean this is the same thing that I really like about Data Wrangler in Python, right, same experience. I have a UI that I can see the changes, I don't really need to know how to write every little line of code. But you realize all you're doing when you're writing SQL is you're building steps of things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3268s" target="_blank">54:28</a> Oh I need these columns, great, I need these columns from two different tables. A lot of those are known quantities, you just do those things. Now you can get a lot more fancy with the SQL. So that's where I started, but then you're doing very complex things that couldn't be represented with graphical interfaces.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3283s" target="_blank">54:43</a> Right, inner joins or left outer joins or some other, you can get more complicated with the joining solutions inside SQL. But again you need a place to start from. And I think that leads us to the how of this question, how do we start with SQL databases?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3301s" target="_blank">55:01</a> And for me I'm going through some of my own patterns right now, where honestly it's starting with, I think we're still at the limit of three databases in a capacity. That is currently what I've seen and tested out, I can only create three SQL databases in a Fabric capacity.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3318s" target="_blank">55:18</a> Three SQL databases in a Fabric capacity, at least in an F1 or F2. So that's the least argument there. I don't know, I haven't seen that specifically, I'd have to dig around the docs a bit more to see if that actually has a problem there.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3333s" target="_blank">55:33</a> But yes you might be right, but it is still a preview feature. But honestly where I've started is really easy if you want to get data in, because obviously when you create the SQL database it doesn't say what data do you want, it just creates a blank database with blank tables, blank views.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3350s" target="_blank">55:50</a> And I started with a pipeline and all I want to do is just copy data in. You can mirror, but I want to get that data stored in Fabric. So one of the big things I've done is I already have existing Azure databases and I just copied the data in through a pipeline.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3362s" target="_blank">56:02</a> The ease of that is incredible and it's just another thing, like my gosh is really incredible. So I have the data in and back to my point earlier, the slightly graphical user interface, there's a lot of code behind that graphical user interface.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3376s" target="_blank">56:16</a> Pipelines you had before would have been like, right it's now represented as these little cards, these little actions. The whole experience of the data pipeline, and I remember when Azure Data Factory came out earlier.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3391s" target="_blank">56:31</a> I remember way back in the day when Azure Data Factory came out we were trying to use it and there was no easy to use graphical interface. It was all JSON, you had to write everything and I was like lost, I don't know what I'm doing.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3402s" target="_blank">56:42</a> You could build them but there was almost no user interface to them and all the features were buried somewhere inside JSON. And they've changed all that now, so it's all graphical user interface.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3412s" target="_blank">56:52</a> You have the activities, again back to my point, right, we're going to give you a semi-graphical interface of the things that you need to be doing. And most of the options are fill out these boxes, fill out these sections.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3425s" target="_blank">57:05</a> When I know that the Azure Data Factory pipeline is JSON, I can see how they're representing the UI that actually mirrors JSON. You have the activity and you have the general section, the comments, the title, and then you have the properties.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3439s" target="_blank">57:19</a> Well all those are just sections of JSON code that they're just giving you. And instead of you writing JSON they're just giving you a menu that is actually building the JSON for you but in a graphical form. That's all they've done.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3455s" target="_blank">57:35</a> We don't have a lot of those situations anymore where I remember creating things in Azure you're like, oh I've created Synapse, now what do I do? Now what? And that doesn't happen. So copying that data in, once I have that SQL database, I've already been able to create views.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3471s" target="_blank">57:51</a> Because I had something I was pushing from a data flow, I'm like well I don't want these columns and I want a little aggregated. Yes well I could use data flow, but I could create — they have this great interface which is basically Power Query in SQL.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3486s" target="_blank">58:06</a> It's called the visual query, the visual native query. Yes, yep. And as you do that you go through these transformation steps and this goes, oh do you want to create a view from what you just did rather than just viewing it? And I was like, I would, well I thank you very much.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3504s" target="_blank">58:24</a> So I can start getting started once I have data in incredibly fast. And that's what I absolutely love. And I think that goes to the ethos of all of Power BI and now Fabric, right. The ethos has been initially it was five by five — five minutes to set up, five minutes to wow.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3525s" target="_blank">58:45</a> That was the initial experience and I think now it's like a five by five — five minutes to set up, five minutes to load data, five minutes to something else. There's a new language they're trying to say. Regardless though, to your point Tommy, doing some of the simple things — data in, data accessing — that makes things a lot easier.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3548s" target="_blank">59:08</a> One of the last points I want to make here as I'm wrapping up and giving my final thoughts is I do want to call out at the end of the article. So there is a very clear callout here — when we had this thing called Data Marts. Data Marts was a SQL database for Power BI only.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3569s" target="_blank">59:29</a> That was really the experience of it and Data Marts never really got finished. Didn't quite make it all the way through and it felt like there was a good initial effort at a data mart. But what happened was Fabric came out, literally Data Marts came out and maybe three to six months into it Microsoft said we're pivoting, we're going to be doing Fabric.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3590s" target="_blank">59:50</a> And so a lot of the resources I think got plucked and moved over to Fabric, it feels like to me. So Data Marts never really got finished. It was pretty reliable, it does that transactional level things to some degree, it gives you a SQL endpoint, does some pretty good things.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3603s" target="_blank">1:00:03</a> So now, my opinion, I think it aligns with Nicola's opinion in this article, right. He says he could be wrong but he says Data Marts are typically thinking like a dead man walking. It's just a matter of time until they're officially sunsetted and replaced by the Fabric SQL database.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3623s" target="_blank">1:00:23</a> I think this is the right approach and I would like to see all of the features that Data Marts do, making sure that all those — I'd like to see a comparison chart. What does Data Marts do right now currently and what are all the equivalent features that the Fabric SQL database can do as well? And make sure they're all lined up.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3641s" target="_blank">1:00:41</a> So if you can give me all the features that Data Marts did, which again wasn't a very long list anyways, just push those features and make sure that all the equivalent features — there's going to be — I'm waiting for the article here that says here's how to migrate.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3653s" target="_blank">1:00:53</a> From Microsoft, not just us but MVPs, like if you have a Data Mart here's how to migrate over to the Fabric SQL database. Now I know people are going to be a bit bent out of shape because a Data Mart is a unit that is accessible inside Power BI only.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3671s" target="_blank">1:01:11</a> So this is one area where I think we're going to have some friction and I'm just going to call it right now. Right, if you are using Data Marts you do need some SQL database inside Power BI. I think it makes good sense to put it there. I believe the Data Mart was only a premium per user feature.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3694s" target="_blank">1:01:34</a> The reason I'm calling that out is because if there's one thing of Fabric that I want to come back into Power BI only, and just for the premium per user, it would be the Fabric SQL database. So what I'd like to see happen here is yes Microsoft, you're going to deprecate the Data Mart, yes get rid of it, let's just use Fabric SQL databases as the right solution.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3717s" target="_blank">1:01:57</a> Because you're building the right thing. What I'd like to see is the same bits, the same code — I'd like to see the Fabric database show up for Power BI premium per user users inside Power BI. I don't think that's going to happen because I really think Microsoft's going to push all the users into Fabric anyways.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3740s" target="_blank">1:02:20</a> But if I was running things for the day, right — we should do one of those again — like where would you spend your money? I think I would spend a little bit of investment or see how much work it would take to actually give the Fabric SQL database to the Power BI premium per user users. I think if you did that you'll make a lot of premium per user customers very happy.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3763s" target="_blank">1:02:43</a> Because they can actually feel confident that they can sunset their Data Marts, move into a more robust solution that would be Fabric SQL. And it'll just work, and then when they're ready they can migrate or upgrade into proper Fabric, and then the SQL database will still just work.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3782s" target="_blank">1:03:02</a> I look at it as an opportunity to bring more of those premium per user customers into the Fabric ecosystem by giving them the Fabric SQL database and then saying, oh by the way, all the other richness and goodness that you do need is still inside Fabric — if you want pipelines and notebooks and all the other richness that's there, real time analytics — come over to Fabric.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3804s" target="_blank">1:03:24</a> But I do think you need to keep treating those premium per user customers really well. That's my opinion.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3809s" target="_blank">1:03:29</a> Yeah and I know we're getting close to time. I just feel as you say this, because I agree with you, but there are a few listeners who have sent mailbags about Data Marts — that if they're exercising they're exercising a little faster right now. So they are feeling that.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3824s" target="_blank">1:03:44</a> But yeah, I know we're well past time. I'll do a quick close out. Great, great article. It's going to be in the episode description both on YouTube and in the podcast. Please take a look at it, it's an awesome way to really summarize all the things with SQL databases.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3838s" target="_blank">1:03:58</a> You know where I stand on this, you know where I see the potential here. It's a great way to get started with SQL databases and start getting that implemented in processes and data that could be desired to be better. What a great opportunity.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3852s" target="_blank">1:04:12</a> That's exactly it — if I want to get started with SQL databases, where I would is migrating that data to SQL. Here we go. Nicola, I would say thank you very much for the article, very well thought out. I really liked the what is it, the why you're using it, and then the how to implement it. So that was very good.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3869s" target="_blank">1:04:29</a> Your great example here, you had a little bit of tutorial part in the middle there, also really good. So if you haven't read this article, go check it out, it's in the description below. Definitely go read the article, check it out, very very good, highly recommend it.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3881s" target="_blank">1:04:41</a> And Nicola is a genius, like honestly I learned stuff from him all the time. Really good writer, very well educated, he does a lot of teaching, really good stuff that he's doing. So if you're not following him you should definitely follow him on the social medias.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3892s" target="_blank">1:04:52</a> Listen to his articles that he's popping out because he's just a really sharp guy. And I tell you the amount of things I've learned from him myself personally. So definitely follow Nicola, he's definitely worth it. And you would follow him at datamozart.com. I'll just throw the website in there in the chat as well. Definitely check him out, one worth watching.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3913s" target="_blank">1:05:13</a> Anyways, with that being said, thank you all so much for listening to the podcast. We hope your exercise has gone well. We pushed you here an extra five minutes at the end so finish strong. And you get a little extra couple minutes here while we're talking to you.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3926s" target="_blank">1:05:26</a> Thank you so much for your ears and your time, we know your time is valuable. Please if you like this podcast, if you like what we're talking about here and this was relevant to you unpacking the things of Fabric, we'd really like you to share it with somebody else.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3941s" target="_blank">1:05:41</a> We'd really encourage you to share with other people so we can keep growing the audience here and we can talk about more things. With that being said Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3950s" target="_blank">1:05:50</a> You can find us on Apple and Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating, it helps us out a ton. And please share with a friend since we do this for free.

<a href="https://www.youtube.com/watch?v=V32ndLd67ls&t=3960s" target="_blank">1:06:00</a> Do you have a question, idea, or a topic that you want us to talk about in a future episode? Head over to powerbi.tips/podcast, leave your name and a great question. And finally, join us live every Tuesday and Thursday 7:30 AM Central and join the conversation on all Power BI Tips social media channels. Thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
