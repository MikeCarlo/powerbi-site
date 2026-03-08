---
title: "FabCon Rundown – Ep. 413"
date: "2025-04-09"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "FabCon"
  - "Microsoft Fabric"
  - "Lakehouse"
  - "Data Warehouse"
  - "Power BI Embedded"
excerpt: "Mike and Tommy break down the biggest announcements from FabCon 2025, covering agentic AI capabilities, new warehouse functions, and metadata-driven lakehouse patterns. They also spotlight the Power Designer Workload and Entelexos for Power BI Embedded."
featuredImage: "./assets/featured.png"
---

Mike and Tommy break down the biggest announcements from FabCon 2025, covering agentic AI capabilities, new warehouse functions, and metadata-driven lakehouse patterns. They also spotlight the Power Designer Workload and Entelexos for Power BI Embedded.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/779k13VVoU8" 
  title="FabCon Rundown - Ep.413"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[FabCon 2025: Fueling tomorrow’s AI with new agentic capabilities and security innovations in Fabric | Microsoft Fabric Blog](https://www.microsoft.com/en-us/microsoft-fabric/blog/2025/03/31/fabcon-2025-fueling-tomorrows-ai-with-new-agentic-capabilities-and-security-innovations-in-fabric/)** — The Microsoft Fabric Community Conference returns to Las Vegas this week—bigger and better than ever. Learn more.

- **[Playbook for metadata driven Lakehouse implementation in Microsoft Fabric | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/playbook-for-metadata-driven-lakehouse-implementation-in-microsoft-fabric/)** — Co-Author – Gyani Sinha, Abhishek Narain Overview A well-architected lakehouse enables organizations to efficiently manage and process data for analytics, machine learning, and reporting. To achieve governance,...

- **[Another dimension of Functions in Data Warehouse | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/functions-in-data-warehouse/)** — Today, we are announcing new types of Functions in Fabric Data Warehouse and Lakehouse SQL endpoint. Continue reading to find out more and if interested refer to sign up form for Functions preview in Fabric Data...

- **[Power BI](https://app.powerbi.com/workloadhub/detail/tips.tools.Product?ctid=72445baa-314f-4c92-9364-1cb2c4924bf6&experience=power-bi)** — Sign in to Microsoft Power BI for intuitive data visualization, detailed analytics, and interactive dashboards. Unlock your data's full potential.

- **[Entelexos](https://www.entelexos.com/)** — Entelexos is a Data as a Service embedded solution for Power BI reports.

## Main Discussion

Mike and Tommy dive into the highlights from FabCon 2025 in Las Vegas, unpacking what the announcements mean for the Power BI and Fabric community.

### Agentic AI in Fabric

The biggest theme from FabCon was Microsoft's push into agentic AI capabilities within Fabric. The announcements signal a shift from AI-assisted to AI-driven workflows, where agents can take action on data processes autonomously. Mike and Tommy discuss what this means practically for data teams and whether organizations are ready to trust agentic workflows in production.

### New Warehouse Functions

The introduction of SQL-based, Fabric-based (Python), and AI-based functions in Data Warehouse represents a significant expansion of what's possible directly in warehouse queries. The ability to call LLMs from within SQL queries opens up new patterns for data enrichment and transformation that previously required separate pipelines.

### Metadata-Driven Lakehouse Patterns

The metadata-driven lakehouse playbook caught their attention as a practical resource for teams building out their Fabric data estates. The approach of using control tables to orchestrate ingestion and processing aligns with best practices for scalable, governed implementations.

### Power Designer Workload & Entelexos

Mike highlights the Power Designer Workload now available in the Power BI Workload Hub, and Tommy discusses Entelexos as an accelerator for teams looking to embed Power BI into customer-facing applications without building the infrastructure from scratch.

## Looking Forward

FabCon 2025 set the stage for a Fabric platform that's increasingly AI-native. The agentic capabilities, expanded warehouse functions, and community tools like Power Designer and Entelexos point to a maturing ecosystem where both Microsoft and the community are building out the platform together. Mike and Tommy encourage listeners to explore the new preview features and share feedback.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=15s" target="_blank">0:15</a> Heat. Heat.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=32s" target="_blank">0:32</a> Welcome back to the Explicit Measures podcast with Tommy and Mike. We are here despite technical issues starting a little late this morning. Wow, that was rough. We made it. I don't care.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=43s" target="_blank">0:43</a> Yeah, this is what happens when you take two weeks off and you do other things and stuff stops working. Passwords won't let you in for you. Oh my gosh. Just was not happy. He was not happy.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=54s" target="_blank">0:54</a> But we're here. We made it. Oh my gosh. It's good to see your face and hear your voice. Even though I could have done this every week, but still. We're live.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=65s" target="_blank">1:05</a> Tommy would rather do this every day if he could, honestly. Dude, it brightens my day. All right. So, I don't know if we have any news items. This whole episode might be just news, I guess.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=78s" target="_blank">1:18</a> I think is where we're going to land on this one. So, today's topic is going to be all about the Fabric Conference Las Vegas rundown. We're going to go through the whole conference, talk about things that were announced, features that were out on the Microsoft blog.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=91s" target="_blank">1:31</a> There's a ton of new announcements, things that are going, I think a lot of public preview right now, that are coming out and seeing where the excitement of things are. Let's quickly catch up here, Tommy.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=104s" target="_blank">1:44</a> We were gone for two weeks. How did things go? Did you keep yourself busy for two weeks while you didn't have a podcast to talk about? It was trying to see how much I can run on an F2 and apparently it's not that much.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=117s" target="_blank">1:57</a> So, I was doing some experiments because I know a lot of people like, "Can we just do the F2?" I'm like, "All right, well, how much would that actually in a sense, pull from throttling?"

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=127s" target="_blank">2:07</a> So dude, I had some major throttling issues with Fabric because I'm like, "All right, so explain more like what were you doing? Like what kind of things were you running?"

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=137s" target="_blank">2:17</a> So it was all about integration, baby. It was all right, I'm going to take data, put in a Lakehouse, push it to PowerBI, going to do a bunch of transformation in PowerBI. I'm going to push that back into the lakehouse.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=149s" target="_blank">2:29</a> Some stress testing there. Like basically that one lake integration side of things. I have a lot of notebooks. I want to test a lot of things out. I want to test my notebook or my semantic models out with the semantic link labs.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=162s" target="_blank">2:42</a> And I want to work in Python as much as I can. And because it's still a PowerBI tool, we're going to do a lot with data flows. So, I was running a lot of data flows and I think that's what really was the issue.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=178s" target="_blank">2:58</a> So I was wondering what's tipping over here and I was hoping you were gonna say data flows gen two because that's what it seems to eat a lot of CUs more than the other tools that are out there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=188s" target="_blank">3:08</a> Mike, not only was it so bad, it was so bad that I couldn't even view my capacity monitoring app because that was on the capacity. Yeah. So it was like dude. So yeah, it was totally angry.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=208s" target="_blank">3:28</a> How did you resolve it? You just waited it out after you ran out of space. You have to wait it out and then you just got to go through whenever you get your access to the capacity app because that seems to spin up everything again.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=220s" target="_blank">3:40</a> But it was just like okay data flows as much as I love them and it really is I'm never not going to say it's a cool feature because it really is especially pushing data. I 100% agree with you there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=234s" target="_blank">3:54</a> But what I was starting to do? I was starting to take a lot of those things in data flows pushing. Yeah, I was going and I'm like, "All right, Copilot. Let's see what we can do."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=245s" target="_blank">4:05</a> So, no, but seriously, I have a Raspberry Pi that has Jupyter Hub, so it has its own instance there. Jupyter Hub just like a notebook experience that you can run on the Raspberry Pi.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=258s" target="_blank">4:18</a> Yeah, exactly. So that way you're not eating up your computer and there's all the environments. So I've never seen that before. So you have a separate monitor. The Raspberry Pi is on that. I go to the browser. It's like a local network.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=269s" target="_blank">4:29</a> So yeah, it spins up. So I just go to my local network at this port and I can connect to that in VS Code too, but as my PC anyways. So I basically gave VS well Cursor sorry because it's really there's no contest anymore.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=284s" target="_blank">4:44</a> But I gave him one of these tools, Power Query. Gave him the documentation of Power Query and said, "Here's what I'm trying to do." Interesting. So, he basically used a large language model using Cursor.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=298s" target="_blank">4:58</a> Basically and said, "Here's the M documentation. Here's the M code" and said rewrite this in Python basically, right? Exact. Yeah. No, exactly. Exactly. How spot on was it? Did it do pretty good?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=308s" target="_blank">5:08</a> There were a few edits, but I wanted to test it out because of PySpark in like also you can just run Python. They said, "Imagine I'm going to run one notebook using PySpark because it knew Microsoft Fabric was doing MS Spark utilities."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=323s" target="_blank">5:23</a> It was doing semantic link labs on its own. Like assume I'm running the Python instance. You can't use this. You can't use that. Yep. I'm not kidding. It was frighteningly easy.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=338s" target="_blank">5:38</a> Because yeah, I could go into the actual thing I was doing in Power Query. It was this index lookup. I was basically trying to get like a lot of looping within a lot of list generate and Copilot did it in 15 to 25 seconds.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=355s" target="_blank">5:55</a> Wow. It doesn't take anything to load. So yeah, you open up an interesting conundrum by starting this way, Tommy. So you start off, so will Microsoft allow a Copilot, their Copilot.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=373s" target="_blank">6:13</a> Could you even ask like would they even allow you to go to a data flow that's costing you a lot of CUs, run a Copilot that's expensive to run inside Fabric right now and say, turn this M code, turn this data flow pipeline into a Python script.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=391s" target="_blank">6:31</a> And then you can literally just migrate yourself off of all the old Power Query into notebooks experiences. Yeah. I mean, oh, absolutely. That's almost like the tool itself can obsolete itself, right?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=408s" target="_blank">6:48</a> It's a little bit of an inception moment here. Like you can use its own tool to make it more efficient. Yeah. I mean, there's still other things like, well, why did it do that? It's like, well, no, I don't want it exactly like that.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=419s" target="_blank">6:59</a> And all the things you can do in Power Query but honestly yeah man especially for what it was doing to my capacity and it's just me, I was trying to stress test it but that shouldn't happen.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=433s" target="_blank">7:13</a> So give me just a rough looking at your capacity app right so you're looking at capacity app you use a bunch of things you're doing a bunch of data flows some notebooks and then reading and writing from lake that's basically what you're doing to overload it correct right. Exactly.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=448s" target="_blank">7:28</a> Okay. When you were looking at the capacity metrics app, if you looked at the ratio of the things you were doing in notebooks versus the data flow, what was the percentage like when it tipped over and it wasn't working?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=461s" target="_blank">7:41</a> Was it like 90% of your consumption was from data flows or did you have like 30-70% like what was the ratio of what you were seeing when it was working or before it tipped over? Does that make sense what I'm asking?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=474s" target="_blank">7:54</a> Do you want the honest opinion? Yeah. I'll keep you updated because I still haven't gotten to it. It's been bugging out so trying to load that. So, but honestly, it wasn't until I started running these notebooks and when to load the data, when to push to a lakehouse, when it just yeah.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=497s" target="_blank">8:17</a> So, it's a weird thing that they have no that they focus so much on data flows and it is such a nice tool where it's like almost like you almost want them to take away some of the features in it because you're asking for it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=517s" target="_blank">8:37</a> One thing I just learned was inside Spark you have the ability to tune a little bit of what Spark is doing. So the Microsoft team and there's a couple YouTube videos that we've done around optimizing your cluster for reading and writing and there's actually some Spark settings you can adjust.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=537s" target="_blank">8:57</a> So for example, if you're reading and writing data from the lakehouse, one of the more expensive operations than just purely writing the data to and from the lakehouse is using the V-Order sorting.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=551s" target="_blank">9:11</a> So if you're getting data from somewhere and you're using the Spark engine, you can say, hey, when you're writing this delta table to the lakehouse, don't use the V-Order sorting, just standard stuff. So there's actually a number of settings you can set inside the notebook to make the reading and writing more efficient.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=568s" target="_blank">9:28</a> So if your delta table or your table that you're making in the lakehouse is not going to be directly accessed from PowerBI, there's really not a lot of use case for you to optimize the V-Order of the bronze and silver tables.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=580s" target="_blank">9:40</a> Because maybe occasionally you'll read them from PowerBI desktop but the gold tables for sure because that's where you will consume data from the semantic model. The semantic model will connect to that and load there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=593s" target="_blank">9:53</a> So there's actually even techniques in there and to your point Tommy I don't see any controls in data flows to just say well we don't really care where the data goes right just land the data somewhere. The assumption is like they're always trying to prepare the data directly for PowerBI.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=609s" target="_blank">10:09</a> One of the patterns that I have found that has worked and is very efficient from a CU consumption standpoint is the pipelines are highly efficient. Like when you run a pipeline compared to everything else, right? If you do a copy job from a pipeline, it almost uses no CUs at all to run the pipeline with a copy activity.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=629s" target="_blank">10:29</a> So often I'm trying to build and bring the data to bronze and do everything by bringing that initial data in only using a pipeline and then I'll do yeah well.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=640s" target="_blank">10:40</a> Think of it right, the pipeline is a very optimized .NET backend thing. It doesn't take a lot of compute, so if the pipeline can run at a very low CU — again we're talking about CU consumption — all you need to do in the bronze layer is just get the data there. Get the flat files, get the JSONs, get whatever the thing is there to the bronze layer.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=661s" target="_blank">11:01</a> And then you pick up the notebooks and say, "Okay, now that we have the files, the delta tables or whatever you want at the bronze layer, then you pick it up and you transform it with notebooks." And then that's what moves the data from bronze to silver and then ultimately silver to gold.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=694s" target="_blank">11:34</a> And you have, again, my point here is you have more control about tuning the amount of how you want that Spark notebook to run. Again, this is probably a bit more of a pro-user perspective on things because you probably don't optimize step one. You just get it working in step one and then you come back and optimize in step two and then you figure out the rest.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=713s" target="_blank">11:53</a> Yeah. And you figure out, oh, this was inefficient. I want to adjust this and make it faster or whatever. Does that make sense?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=718s" target="_blank">11:58</a> No, there's a ton of the stuff on the back end with Spark that I've been seeing. What I've been doing a lot though? I've been like, let's say I didn't want to do Spark. Let's say I just wanted to work on Python too. It's incredibly fast, their Python environment.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=733s" target="_blank">12:13</a> I'm intrigued about the cost, like the pure Python notebook. Yeah, just the pure Python. It's cheaper. It's cheaper than Spark because it's only one cluster. The Spark cluster uses two machines, a driver and a worker by default. The Python notebook is just one machine.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=769s" target="_blank">12:49</a> So, cut the Spark compute in half and just use pure Python, it's there. It works. So, if you're looking for automation, if you're using small data and it doesn't require a lot, I just start using just pure Python notebooks now. I really like it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=785s" target="_blank">13:05</a> Yeah. And honestly I've been finding myself doing more and more of that because a lot of things I'm doing right now at least for my internal company don't need thousands and millions of rows. I really just need Python. Yes. Correct.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=800s" target="_blank">13:20</a> The only thing I have a little bit of trouble here with the pure Python notebooks is you lose a little bit of the PySpark experience and so you have to do other things in like DuckDB. But DuckDB is super fast. It's weird because you're like, well, I was writing SQL. DuckDB does write SQL. It is a SQL-like engine. It's just built inside of pure Python notebooks.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=842s" target="_blank">14:02</a> There's a couple nuances of how you have to write notebooks. And I do have some Python notebooks that are currently running other places. And I'm trying to learn how to write this DuckDB SQL language. So, you can make a data frame, write SQL against it to get the data out. But I think that's something that copilots should be easily able to translate for you.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=861s" target="_blank">14:21</a> Hey, I got this thing. Right. I have the Spark thing. Just go to DuckDB and say write this equivalent SQL statement in DuckDB from PySpark. That's exactly what I did yesterday. Yeah.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=874s" target="_blank">14:34</a> So, it's crazy how a lot of these tools, especially now that we're seeing the integration with Fabric — what I've been on my bucket or my Christmas list, so to speak, is the outside integration of Fabric, like how well it's getting in VS Code.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=897s" target="_blank">14:57</a> Now with the API thing, there's a freaking command line tool now. I can access Fabric in other places. So again, I may have my own model or I may have my own tooling that I want to work with my data with. I love Fabric, but I may want to use Claude or Gemini to go through the data because it's on my machine. It's just more seamless, too.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=920s" target="_blank">15:20</a> I feel like at the Fabric conference I had this epiphany around that exact moment, Tommy. Microsoft has their flavor of what Copilot should be, but there's a lot of other copilots that are out there across the internet. How do you quickly get those experiences? Like maybe I want to use Cursor in a notebook.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=957s" target="_blank">15:57</a> What I'm finding — I'm actually working with my engineers on software development and one of the things that we're looking at is going, oh, it's interesting because certain AI agents do a better job and every week or month or so, there's already someone releasing a new version of a copilot that's doing something better than the last one.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=977s" target="_blank">16:17</a> So, like, today Grok might be better, but in a week you might see Copilot show up and they've done a change or OpenAI did an adjustment or Llama just appears with their new version. They've got a Llama Scout, I think is what they were saying, that has 10 million token context. Oh, yeah. It would take out whole Harry Potters in one prompt.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1001s" target="_blank">16:41</a> Yeah, you could put the whole book as a prompt into the engine. The stuff they're doing now is getting incredibly efficient and this is again, we're still discovering this whole space — how does it work? How do you use it? So for me my struggle is I just don't know where to leverage it best in my business work. So I'm still looking for patterns. Yeah.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1020s" target="_blank">17:00</a> Well I think that's enough. We haven't even touched anything yet. That's Mike. Welcome back, by the way, because you were the one who was the rocket man, so to speak. You were the one traveling. Oh, jeez. Lots of travel. Lots of traveling.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1037s" target="_blank">17:17</a> So, you were at FabCon in person. I was. I got to make it to Fabric conference. So, this year Microsoft put the MVP summit. It's a special summit that MVPs go to. They talk to Microsoft and they have direct time with the PMs and spend time on the Microsoft campus. Had a blast this year. It was a great event.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1059s" target="_blank">17:39</a> And then right after that, literally right after the MVP summit, we traveled directly to Las Vegas and then did all the conference there for Las Vegas, which was super fun. I would say the combination of this year's MVP summit and the combination of Fabric Conference has been the best two events back-to-back I've ever been to.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1079s" target="_blank">17:59</a> Yeah, and I think it was a little bit more self-imposed than anything else because at the Fabric conference, we released two major pieces of software. My company was developing for PowerBI for a number of years now and we released our new Fabric workload. Have you seen or played with any of the workloads, Tommy?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1098s" target="_blank">18:18</a> I think I last looked last week so I didn't see it yet, but dude I haven't used your designer.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1104s" target="_blank">18:24</a> So, workloads are this ability for applications, companies to show up to PowerBI and develop what they want inside the PowerBI Fabric ecosystem. So, PowerBI Tips has updated, migrated, whatever you want to call it. We were the first company to go GA, general availability for our workload.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1126s" target="_blank">18:46</a> So, our workload is officially generally available. It's the theme generator, but now built directly into Fabric. So, it's all the goodness and riches you would do for theme editing before. You have templating, you have page building, you can have AI that helps you build visuals on top of pages. But in addition to that, you can now preview your designs against an existing report.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1147s" target="_blank">19:07</a> And so, we're actively working on additional features to make it even easier for you to get your designed template published into a workspace and connected to a semantic model. So, very exciting things coming there. So, that's our workload — theme and template generator moved to PowerBI. So that was one, very exciting.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1167s" target="_blank">19:27</a> The other release that we had was another product called Intellexos. So Intellexos is Intel external. And so now you can go buy Intellexos off of the Azure marketplace. There's a lot of work to get through that. We did a lot of rebuilding. We did a huge amount of updating the back end to just really get things polished and ready to go for Fabric conference.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1189s" target="_blank">19:49</a> So I think this is why the event was so exciting to me because it was like this culmination of meeting my friends, seeing other MVPs, talking to the product team, and then having real excitement of news of two substantial pieces of software that we've been developing for years at this point, both of them actually. And everything's landing and launching at the same time.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1206s" target="_blank">20:06</a> So mad kudos to the Carlo Solutions team. You guys did an amazing job. Worked really hard at it. Thank you all for your feedback and the hard work. But yeah, that was part of the reason why it made the event so exciting for me because I had real things to deliver and I was showing them to Microsoft and other people and they're like, "Wow, this is really helpful. This could be really useful."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1225s" target="_blank">20:25</a> Like I hope so because that's what I've been working on, right? So yeah. Well, congratulations on that, man. Dude, that's awesome.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1235s" target="_blank">20:35</a> I don't see Intellexos out there yet, so at least in my — What do you mean? It's not on — It's not a workload. Oh, it's not a workload. I thought this was also a workload, too. Yeah. You just go to intellexos.com. So, that's where you can get the information. You can actually buy it off of the Azure marketplace.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1250s" target="_blank">20:50</a> So, it's a standalone software product that aids you with PowerBI embedded solutions. Intellexos is embedding your PowerBI reports for either internal or external users if you're using the Fabric SKU. If you're just using an A SKU, you can only embed for external users. But the idea here is here's an accelerator.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1266s" target="_blank">21:06</a> We've taken years of development to build something like this and we've been refining the idea, making it easier to use. And so here we are landing the software and now everyone can start embedding in hours — you can start embedding a whole entire solution, users, signups, authorization in hours versus having to spend months or a long time.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1287s" target="_blank">21:27</a> Microsoft was talking on this when they said most development projects were going anywhere between 9 to 12 months to build a PowerBI embedded solution. It's just a lot of work. It's a lot of figuring things out. So you can go from 9 to 12 months of development time down to an hour. That's a huge win. That's a very fast project to get done. So anyways, that's where the embedded accelerators are coming out as well.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1315s" target="_blank">21:55</a> That's awesome. Well, did Aaron mention you as well during the keynote? I don't think I was noted because they didn't really talk about the Power Designer but I had a number of sessions that were mentioning my workload and showing it and demonstrating it. So it was very exciting to see.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1334s" target="_blank">22:14</a> I was a little miffed — at one of the sessions I had done all this work to get to GA and in one of the sessions they were showing all these new tools, like hey look these are all the workloads, these are the ones that are coming out. And they showed my slides for my company, they showed a slide of the workload but I had prepared like a one minute video to put in the slide so we could show it and they cut my video. So the other company that went GA, they showed their video and they didn't show mine. I was like hey guys, I spent like, dude, real money.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1283s" target="_blank">21:23</a> Guys, I spent real money and dollars and time to develop this to get to GA and yet you cut my video. I was miffed about that. It is what it is. There's a lot of things to talk about.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1312s" target="_blank">21:52</a> There's a lot of workloads that are out there, but it feels like right now the product team is giving a lot of the data engineering workloads a lot more love than PowerBI workloads. But if I think about it, the PowerBI workloads that are going to be coming out are actually going to be the ones that are more impactful because that's the larger audience.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1349s" target="_blank">22:29</a> Microsoft said on their last earnings call there's 30 million monthly active users in PowerBI. So crazy, you should highlight those workloads and make sure they get their runtime for people to understand what the solution is. The team's making decisions and cutting where they need to cut.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1365s" target="_blank">22:45</a> But I felt a little bit jipped because they weren't able to run my video that I worked hard on to get in there and I was like I'll change the video. You want a different video? I'll make it different. So hopefully they'll figure it out. We'll see.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1380s" target="_blank">23:00</a> Anyways, you just move on. You take the punch and just keep doing your thing. All that being said, the links if you want to learn more about Intelos or you want to learn more about Power Designer, they are both down below in the chat window. I put them out on YouTube and I'll also put them out on the other social media platforms as well, just in case you want to check it out on your own, learn about it. We'd be happy for you to check it out and see more about the workload things.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1425s" target="_blank">23:45</a> Anyways, let's — there's a whole bunch of news items, Tommy. Let's talk about the news. Okay, this is just fluff stuff. This is Fabber Conference. A ton of announcements. This is like their big event. I think Microsoft was holding back a lot of announcements. Tommy, what did you find on the blog that was impactful and then I'll give you some of my read on what happened while I was there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1464s" target="_blank">24:24</a> First off, if you were not at Fabcon, I think just for the sheer fact of trying, it's like drinking through a water hose. Just trying to go through every new thing that came up and all the features. It's amazing how much they've been working on this. But yeah, let's start with obviously where we always start with. It's the big keynote. It's like the iPhone drop. That's always Aun's talk.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1511s" target="_blank">25:11</a> Obviously we always start with security. I get it, and it's very important. It's just not everyone's favorite one. But then we talked about more AI and just that seamless integration. But Mike, they're really going all in. PowerBI was our thing, but it's now just a child of fabric.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1556s" target="_blank">25:56</a> And I thought that was one of — it's always been that way, honestly. I agree with your comment there, it's a good observation but we were always a child of the data platform anyways, right? There's data platform — fabric was previously like synapse, Azure data factory, SQL database, Cosmos DB.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1579s" target="_blank">26:19</a> There's all these data systems, Azure functions — these are all data movement things but they all existed inside Azure, we just couldn't touch them. So even looking at the perspective Tommy, there's probably way more than 30 million monthly active users in all the data platform Azure things, right? So you're now just getting that ability to move those items over to fabric now.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1600s" target="_blank">26:40</a> Yeah. And I think that was a big thing too about just how easy is it to just take your data and just push it to fabric. It's just going to be one of those things — I was talking to my wife and we were with our kids and we were talking about how when we had to travel, we talked about this before, a lot of the stuff that we had to do and we had to learn.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1625s" target="_blank">27:05</a> And the processes are going away because of the UI, because of the seamless ability — not saying best practices, but they're going to adapt because how we're going to work with the tool is going to adapt. We almost have so many stop gaps right now. And I think that's the biggest thing where you want to copy data somewhere.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1646s" target="_blank">27:26</a> Before it was okay, maybe you bought something that was expensive and you uploaded a document, but I can take all my different sources may or may not be on my machine. I don't have a dang coding language or really know what the heck I'm doing and I can easily get it into a centralized place which again we've been able to do for the last two years.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1668s" target="_blank">27:48</a> So it sounds pretty simple but it's not. And I think that was a big part too with the databing to what they were doing with the databases. It's like oh wow, this is even beyond to me the commoditization of data. It's almost something else. But anyways, that was a big focus at least for me in the onset.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1690s" target="_blank">28:10</a> So where were you at in terms of some of those major announcements? Yeah, let's talk about some of these. So one of the ones that was — OneLake security is here. This has been like the security piece that Microsoft made an announcement I think it was like last year early on, they're like hey we're going to be building fabric.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1712s" target="_blank">28:32</a> Oh, and by the way, we're going to have this thing called one security. It's this unified security thing across all the things that are fabric. And they delayed a lot on this. They didn't get it out immediately. And people I think had this impression that like, well, fabric's not secure because one security didn't come with it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1730s" target="_blank">28:50</a> I don't think that's really the story here. I think actually the story was more along the lines of one security was intended to be detailed security very in the artifacts themselves, right? So for example, think about like hey I'm going to make a table in the lakehouse. I want to give permissions down to the individual — let's add row level security to a lakehouse table.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1751s" target="_blank">29:11</a> Let's add column level security on a lakehouse table and actually set that up so that I could give Tommy very specific access to the artifact itself. I think what happened here, for my impression as an outsider looking at this one, was it got really difficult to have all the security pieces figured out through all these different compute engines.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1769s" target="_blank">29:29</a> Let me do a quick comparison. Databricks has two compute engines. It has a SQL engine that they run and they have a Python engine that they run — two. Microsoft has like over nine of them. There's like a Rust viewer that runs the lakehouse so you can see the tables that are there. They have the SQL engine. They have a Python engine.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1794s" target="_blank">29:54</a> They have a Spark Python notebook engine. They have the SQL serverless engine. They have the data warehouse engine. They have a semantic model engine that can go read the lakehouse directly. They have so many other compute engines that are doing things. There's a Kusto engine. And all these things are supposed to read and write directly from the lakehouse.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1811s" target="_blank">30:11</a> So I think what happened here was there's so much more surface area for them to secure. Each team — this is not one big team building this stuff. Every compute team has their own security challenges. Like how a Spark notebook attaches to a lakehouse is different than a semantic model.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1831s" target="_blank">30:31</a> The security model has to be handled the same in both instances, but each team had to build their own security relationships or things that it would all be obeyed the same way. So it just seemed like a really hard problem to solve. I'm thankful they solved it. No issue there, but it also to me feels like this is a much clearer understanding as to why this was so difficult to resolve.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1854s" target="_blank">30:54</a> Does that make sense, dude? Do you remember the white paper you made me read? I did make you read the white paper. Yes. And I think that's honestly — it is not the most fun to talk about security, but if you don't understand it and it has not been a very straightforward thing to your point.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1877s" target="_blank">31:17</a> Something's going to happen. So good on them too for making this a little easier to understand where you're like I need to really figure out who has access to what and how does this flow through. It seems like it's implementing a very simple exchange on how to load data which is good. Yes, I agree with that.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1900s" target="_blank">31:40</a> What I will say is it's not out yet. They've announced it. I think it's going out for private preview is what they maybe announced or something like that. I'm not quite sure when it's going GA, but I'd have to read the article a little closer. Anyways, one thing is I'm happy it's simple and I'm happy it's there and I'm happy it's working.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1917s" target="_blank">31:57</a> So that's something — honestly, I don't want to build more lakehouses. I don't want to build more and more workspaces just to secure things. Yeah, I should be able to give detailed access to tables and rows in the lakehouse from any engine — SQL engine, data warehouse engine, semantic model — all these things should just work.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1940s" target="_blank">32:20</a> And so I think this is a lot of hard work from the team. Kudos to Microsoft getting it all together. Kudos pushing hard. I guarantee you, as this person who's doing software development for fabric conference, it was probably a race and rush to the end to get these last couple features out in the last couple months just so they could have things to announce and get it done.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1960s" target="_blank">32:40</a> So remember — that was my one comment. The other comment here, Tommy, I know what you're going to say. Can I say or no, you say it. Hold on, I'll get close to it. We'll play the game here. Let's play the game.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1975s" target="_blank">32:55</a> There's another feature that I'll just preempt it and I'll let you announce it, Tommy. So I won't actually say it. I promise. Oh, I thought you were talking. Okay. We've been ragging on the Microsoft team for a number of episodes and we've been so vocal about this issue for weeks now that we've directly called it out and we've been miffed and it's finally here. So Tommy, announce the feature.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1999s" target="_blank">33:19</a> Introducing co-pilot for everyone who has fabric. Wow, you saw that one coming a mile away. I didn't know they were going to land that feature, but I was very pleasantly surprised that the fabric co-pilot experiences coming down to the F2. We've complained about on the podcast for a number of episodes.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2022s" target="_blank">33:42</a> It makes no sense, right? If I'm going to abuse the co-pilot and run it out and use all the tokens up, I should have the ability to do that. And also you can now use a co-pilot per capacity, dedicated co-pilot per capacity. So that means you can spin up an F2 and just say that is the only item I want people to use for co-pilot.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1922s" target="_blank">32:02</a> Use for Copilot and then everyone in the organization uses a single Copilot and when it runs out, it runs out. It just says you're out of tokens. Fine, that's okay.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1931s" target="_blank">32:11</a> But I was looking at the price comparison. Tommy, do you pay for Cursor right now? Yeah. Okay, how much is it for Cursor to run? What's the price for Cursor?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1945s" target="_blank">32:25</a> Hey Ryan, right now it can never be enough but it's about $9.99. So it's 100 bucks a month for just one person, right?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1955s" target="_blank">32:35</a> Yeah. Okay, so you're paying $100 a month for Cursor to run. $100 a month. No, for 10 that would be for 10 people. I'm paying $9.99.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1961s" target="_blank">32:41</a> Okay, so you're paying $10. Isn't there a Copilot that was like $100, $200 a month? That was GPT. Okay, so ChatGPT has a $200 a month subscription, right? That's another Copilot.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=1993s" target="_blank">33:13</a> Okay. If you put a Fabric F2 capacity out, it's $250 a month. If you put it on reserve capacity pricing, reserve it for a year, it's $150 a month.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2008s" target="_blank">33:28</a> This is right in line with buying a Copilot from some other thing. Now, will you get unlimited queries and will it run out of capacity? I don't know. I don't know yet. I haven't tested any of it yet.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2037s" target="_blank">33:57</a> But the fact that we can go all the way down to an F2 and I can turn things on and Copilot will work. Very pleased about this feature, right? Let us manage the capacities.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2070s" target="_blank">34:30</a> Maybe looking back on this trail, maybe we needed the dedicated Copilot feature first before they could bring the Copilot all the way down to the F2. That makes sense to me, right?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2100s" target="_blank">35:00</a> Because if you just said everyone uses Copilot, stuff will just start falling over all over the place and it'd be a very poor experience. But the fact that you can have all users who are allowed to use Copilot use a dedicated Fabric SKU to just run their Copilot, that makes more sense.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2135s" target="_blank">35:35</a> Yeah. What I just thought, and I think the reason why Microsoft's been so hesitant on this, I know we've been ragging at them, but I think my experience the last two weeks without you has seen how quickly F2 can go there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2168s" target="_blank">36:08</a> I think there's someone at Microsoft going, "We warned you. Be afraid of what you wish for." Because I don't know what it does or how much capacity — well, we've never been able to test it down that low.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2202s" target="_blank">36:42</a> So Tommy, you and I, we don't just stand up an F64 and just start ripping Copilot and say, "Okay, let's measure how much it's going to consume." So the threshold for us, we weren't even able to do testing at our levels because we want a lower F2, F4 SKU level to actually test anything.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2237s" target="_blank">37:17</a> So to your point, Tommy, I think you're right. I don't think we actually know the implication of how much consumption a Fabric capacity will use.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2264s" target="_blank">37:44</a> I will say this though, I have directly been using Copilot in the web browser. So I have Copilot on Edge, and my understanding is if you have Copilot in Edge, if you pay for the Office Copilot, you're able to integrate that with the Edge Copilot as well.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2306s" target="_blank">38:26</a> Does that make sense? Like the M365 Copilot? Yes. No, it knows who you are. It knows your organization. Okay, but that's because you're paying for the M365 Copilot. So that's $20 a month for that Copilot for me, the user.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2340s" target="_blank">39:00</a> Yeah. I go there and I will be in a Python notebook and I will open the web browser Copilot and I'll just start talking to it. Hey, here's my function, fix it. Hey, here's the error that I got.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2373s" target="_blank">39:33</a> I had a really interesting use case two weeks ago. I had an M code. It failed. I just sent, "Here's my error in M code," and it said, "Oh, you should do this, this, and this." It interpreted the error message a bit more.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2406s" target="_blank">40:06</a> And I said, "Okay, fine. Here's the actual M code. Can you fix it?" And then in doing that, it said, "Oh, yeah, sure. Here's the new M code that you need." And I popped it right in and it worked just fine.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2438s" target="_blank">40:38</a> So that was a not free Copilot, but I was just using a Copilot that's not integrated with the product. I didn't need to turn it on. I didn't even need to go to Fabric to use their Copilot and it worked just fine.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2469s" target="_blank">41:09</a> So that's an area that makes sense to me. Well, I think we're going to see a few things here, and to be honest, when I'm thinking about needing Copilot in Fabric, I think it's shifted over the last few weeks too because I've gone away with my own copy and paste code somewhere and then just implemented it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2509s" target="_blank">41:49</a> But I think the bigger thing that I know Copilot is not going to have, and this is one of the more major announcements at the keynote at least — Microsoft was really touting this — was the data agent.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2546s" target="_blank">42:26</a> And this is still not to be touched by — I don't know if I've played around with data agents enough to really have a good opinion with it. I think it has potential, Tommy. It's really changing. They're really changing what their initial idea was here.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2579s" target="_blank">42:59</a> Yeah, go keep going, Tommy. Sorry. No, I was gonna say, their initial thing was the AI skill. That was going to be their initial thought with that. Yes, the forefather, so to speak.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2609s" target="_blank">43:29</a> But just reading up, it's not just a branding thing where we're like, "This name will work better." They're understanding too that that skill alone, it needs to be able to do more things. It needs to act, for lack of a better word, like how AI agents work now, or it's not going to be used.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2652s" target="_blank">44:12</a> So in terms of the thing, Mike, I have no idea if you've heard of what's been the other big thing in the tech world — what's called model context protocols, the MCPs. I've been researching this, yes.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2686s" target="_blank">44:46</a> So I was just watching videos. I'm actually looking at this MCP experience. So model context protocol is what it stands for, and the idea is you have a large language model and you want your large language model to do actions inside some sort of software.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2722s" target="_blank">45:22</a> So I've seen it do things like apparently there's a Figma MCP. So you can go to Figma and literally talk to Figma using natural language and say, "Hey, build me a square that is this by this by this and has this color on it," or "Build me a web page that looks like this," or "Build me a diagram."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2764s" target="_blank">46:04</a> To me, I'm looking at going, "Wow, this really changes the game. You actually don't need to know how to do something. You could just roughly talk to it and it may not be perfect, but it gives you a starting point inside an existing tool."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2797s" target="_blank">46:37</a> So a lot of this feels to me like it's not going to do the whole job for you. It won't do everything. No. But what it will do is it'll get you 75, 85, 95% of the way there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2831s" target="_blank">47:11</a> That's interesting to me. So if I can just tell it to do something and have it create 80% of what I want and then I just tweak the last little bit to make it perfect the way I want it, that's a timesaver for me.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2863s" target="_blank">47:43</a> This is worth it for me to spend money on these tools if they can start doing something that would take me two hours and take it to 15 minutes.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2893s" target="_blank">48:13</a> Here's the thing though too, where I think that AI skill initially was just specialized on a single data set. I think a lot of people now are really expecting if there's an AI tool, it's not just going to give me an answer, right? It's actually got to do something.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2936s" target="_blank">48:56</a> We really need that, right? And I think the AI skill initially was "We're going to be the most knowledgeable about your model" and be able to give you answers. And I think we realized we're either not there yet.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2971s" target="_blank">49:31</a> Either we haven't gone through a semantic model yet enough to really been able to do that. But really, there's still a lot you can do, and they're saying they're having great success with the Copilot agents.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3003s" target="_blank">50:03</a> So this is a big, major announcement, but like I said, I'm gonna say "but" because this is only F64, Mike. So that's a bit frustrating and I have no idea why. Like, is it that intensive? The data agents you're talking about?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3044s" target="_blank">50:44</a> Yeah, the data agents. I think it's honestly a feature that they're giving to large organizations and they want it to hang on that feature. I don't look at Fabric saying before there was this threshold, right? It was like all the other embedded SKUs and then there was a P1 and then you really start turning things on.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3082s" target="_blank">51:22</a> So somewhere in the marketing or the finance team, they said a P1 is where we start, and now somehow that's gotten hung on to this F64 level. I'm honestly like, why would you push people to move to that threshold of an F64 to get them to that price point?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3125s" target="_blank">52:05</a> When in reality, you could probably adopt more people, or more organizations would adopt the lower-end SKUs, and then they would realize, "Oh, that's expensive, I will ramp up, I will add more capacity."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3154s" target="_blank">52:34</a> If people are — to your point, Tommy — if data agents are able to save people an hour of time and drop it down to 10 minutes, it's worth the price to scale up your SKU 100%. It's the value to money proposition that we're talking about here.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3191s" target="_blank">53:11</a> So one thing I'm just confused around with data agents — I don't really understand how to easily build them inside Fabric today. It's doing something, it's integrating with AI Foundry, which is like the data studio for AI things for Fabric, but you're paying for that separately.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3228s" target="_blank">53:48</a> And how does it work inside the Power — I don't really understand what it's doing per se. So the story is a bit lost on me. I probably just need to read up on it a bit. Admittedly, I'm not as clear as what's going on there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3255s" target="_blank">54:15</a> One thing I would just say is, as a workload developer, as one who builds workloads, I would love to have access as a third party developer to use a data agent in my workload that can then be used to help produce content in my app.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3294s" target="_blank">54:54</a> That's something that's just not there today. Like, I can't even use it. So that's something I would like to do, and I'd like to have it charge CUs back to the capacity.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3321s" target="_blank">55:21</a> So if I find an interesting use feature, great, I'll just use this cool feature and I'll just send data back to the Microsoft team and they'll just do their agent thing and then the CU will get charged back to capacity.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3353s" target="_blank">55:53</a> Then I'm none the wiser. They're happy because they get more CU usage. I'm happy because my tool gets this cool AI feature in it. To me, it's a win-win.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2563s" target="_blank">42:43</a> I don't want to touch too much more on the AI, even though that's obviously probably mentioned. I cannot count the times and how it's there, but let's give a little love to the developers too. There's some things we haven't even talked about for the normal folk with what these announcements were about, right?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2580s" target="_blank">43:00</a> I think a lot about the enterprise. So, Mike, I'm just going to touch on a few briefly that's now available. By the way, I've been refreshing my admin portal every three hours waiting for the Copilot capacity to show up.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2593s" target="_blank">43:13</a> Yeah, I don't know when it's supposed to land at some point. This month maybe, I don't know, end of April I guess I think is when they said. I'm not quite sure what the timing of that was but I am very excited. So there's a few things I think that are major that we can actually get our hands on.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2607s" target="_blank">43:27</a> So okay, few platform things. There's a command line tool. So, you want to talk about that? Want to do our capacity dude? I love me some terminal.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2621s" target="_blank">43:41</a> I know you do. Tommy, you are 100% a pro user. This is just oozing pro user to me all over the place here on this one.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2629s" target="_blank">43:49</a> So, I understand I even know that you can in the command terminal, it said something about you can write a script and put the script and store it inside a lakehouse as a file and then you can change directory to that file location and run the script.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2644s" target="_blank">44:04</a> So if you can start scripting things from the command line. Okay, I understand it's going to be useful. On the other hand, I'm like this is a feature for pro and admins only.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2660s" target="_blank">44:20</a> I'm going to change your mind right now. Here's the only thing you have to do — you're gonna go on your terminal, you're gonna type in npm install shell ask, and then the only thing you have to do for the rest of your life is when you want to do something you write the word "ask" and then what you want to do and this LLM runs and it will give you the command, and then you're good.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2685s" target="_blank">44:45</a> You're like "ask, what was that, I want to copy this but I only want to copy the subfolder" — done. So that's the only thing I use. You want to talk about games? Wow. Yeah. Okay.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2696s" target="_blank">44:56</a> Well, I didn't know you could do that. But then on the other hand of this too, I'm thinking this is an area where I'm going to need the community, other people who are in command line things. There's also an Azure command line utility as well.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2717s" target="_blank">45:17</a> Yeah. Honestly, I don't use it. I don't leverage it. It's not something that I'm very comfortable with. They made a note in the keynote talking about if you are a bash script person or a PowerShell person, there's syntax for both.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2735s" target="_blank">45:35</a> There's Linux and Windows and they're using both command prompts for both. So if you're a Linux person and there's commands that you want to use, both the commands for Windows and Linux work together in this experience, which I think is pretty interesting.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2748s" target="_blank">45:48</a> Usually Microsoft makes you use whatever the heck they're using at the time. But the fact that Linux is there as well and you can start scripting things with Linux commands — I see every Azure developer tools like "yeah, this is our own language, our own syntax, get used to it."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2763s" target="_blank">46:03</a> Yes, here's an ARM template. Here's a bicep template. This is the way we do things — why is that easier? Make it easier. So I agree with you Tommy. Command line interface is interesting. I think it will be interesting.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2775s" target="_blank">46:15</a> We will definitely have to talk about it more after we play with it a bit more. And I think I'm still waiting for what are the use cases? What is the actual practical use case around the CLI? When should I use it? What's the hook here for me? And I'm not sure I see it yet.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2790s" target="_blank">46:30</a> Great. Thankful it exists. Apparently, someone was asking for it. Fine. How do I use it? Not sure yet. The only thing I can maybe make a note here, Tommy, is if the command line interface can somehow be triggered using an API or something where I could use an API to copy a script into a lakehouse and then run said script using an API call — I think I could really get behind that.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2820s" target="_blank">47:00</a> Think about the ability to sequence or turn on or do CI/CD or DevOps essentially. If there's something DevOps related around the command line that I could use, then I think I could start seeing the effectiveness here.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2837s" target="_blank">47:17</a> That's maybe one of the use cases I potentially could get behind, because I don't see a lot of good tooling right now for CI/CD stuff.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2845s" target="_blank">47:25</a> Yeah. No, I completely agree. There's a few CI/CD enhancements actually, speaking of which that's also true too. This is another one — go ahead, say it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2858s" target="_blank">47:38</a> So no, it's the idea of variable libraries, which yes, very intriguing, and I know something like that is available in GitHub. That's pretty cool, but did you hear anything else from the CI/CD stuff or in detail?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2874s" target="_blank">47:54</a> That is the main thing that came out from CI/CD. More and more of the workloads are going to be using this variable library. So think of a variable library as this, right? It's a single file that describes all of your environments.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2888s" target="_blank">48:08</a> So as you move from dev to test to production, there's notebooks that need to repoint to a new lakehouse. There's new lakehouses with new GUIDs in each environment. There's semantic models that need to repoint to things. There's pipelines that need to repoint to different lakehouses and such things.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2902s" target="_blank">48:22</a> What the variable library does is it allows you to build all those parameters in mass. You're not going to have three or four. You're going to have 10 or 15 of these things in a single variable set. The variable library allows you to then pick which environment you're in.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2920s" target="_blank">48:40</a> And I think this is an ease of use for a deployment pipeline. I have a deployment pipeline. I need to set up all these variables. I need to make a pipeline, a notebook, a lakehouse, a semantic model and all of those things need to be programmed together and that way they can move as one unit across all the environments.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2937s" target="_blank">48:57</a> This is the way to do that. This is what Microsoft is building. I think it handles a good majority of use cases around CI/CD. But what it does not handle is the workspace Fabric SKU designation. It does not handle the users of that security group that live inside that workspace. It does not attach the security groups.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2960s" target="_blank">49:20</a> This is just variable set. This is all stuff for moving the infrastructure. There's no data processing in this. So yes, I do think this works well, but the variable set does not have a pre-script action and a post-script action that let you do additional code manipulation before you get things into different places.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=2979s" target="_blank">49:39</a> So as one who actually deploys software using Azure, you need some sort of runner computer — whatever you need, something that executes code that you can manipulate data or the definition, the schema before it gets deployed. And then you need post deployment actions to load the data, set some security groups, whatever the things are — there needs to be more automation around the whole surface area of what Power BI is.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3008s" target="_blank">50:08</a> I think this is a good starting point. This is a very good CI/CD type pattern for business users who are coming in from Power BI, but I think there's more on the table that needs to be built here. But it's a good first step on this. I like first steps at least. We're getting there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3024s" target="_blank">50:24</a> Mike, I don't know if this is the bigger thing because this is another code thing. So, I want to touch it briefly because we're already at 50 minutes. But one thing I'm excited about the potential of is the user data functions. Did you see that?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3046s" target="_blank">50:46</a> So, a couple things here, Tommy. All right. Copilot at F2 and then the ability to write user data functions. There's two data functions. There's user data functions and there's user-defined functions — two things that came out. Which one are you talking about? Because I get confused.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3062s" target="_blank">51:02</a> So, I was talking about the almost like the app platform for — Okay. Yeah. Let me just clarify what's going on here. There's two UDFs. Someone changed the name slightly. So, there's a user data function which I believe you're describing, Tommy — it's an Azure function brought to Fabric and it's a software as a service function.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3086s" target="_blank">51:26</a> It's just write Python code, deploy the function, and then run it. So, Mim was on X talking about how user data functions are the cheapest way to get data to your lakehouse. It's just cheap and fast and works really well. It's literally running the Python code and writing data directly.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3113s" target="_blank">51:53</a> Make an API call, go get the data, save the data down to the lakehouse, done. End of story. And I would agree with them. It's very heavy code, but is the most efficient way to do it. Everyone's going to be intimidated with it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3128s" target="_blank">52:08</a> However, if you can bring Copilot to user data functions, I can just ask it, "hey, write me a function that talks to this API. Here's how you secure it, and I want you to send the data to this file location here." It should just write the whole function for you.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3148s" target="_blank">52:28</a> And that's useful like that. That is a low barrier to entry. It brings me back to the days of VBA, like record this macro, right? I'm going to click on a bunch of things in Excel. It's going to record all the steps and now I have code that I can go use to execute on. So that I'm very excited about.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3164s" target="_blank">52:44</a> So I would agree with you Tommy. I'm extremely excited about user data functions. There's another one called user-defined functions. And that's where you define a function inside DAX. So you can actually have a DAX defined function. Yes, that was also announced. Too many user-defined things.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3184s" target="_blank">53:04</a> I'm so lost on everything. There's so many things happening that people were talking about. So Marco Russo actually wrote out a really good article around the two functions that were being released, and he in the article said a lot of people are using SVG files inside DAX measures. So you can now use a user-defined function in DAX that handles that.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3206s" target="_blank">53:26</a> Use a user-defined function in DAX that will keep all the SVG code for you and then if you want to do fancy spark lines, you want to draw your own thing, if you want to draw something as an SVG and have it land on the core visuals that are Power BI, you can now do so. I think that's also something very useful.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3240s" target="_blank">54:00</a> One of the things that's missing in the user-defined functions, the DAX functions, is a library. Where's the library of these things? There needs to be a gallery of user-defined functions that you can then go add to any semantic model wherever you want. To me that's an experience that needs to exist somewhere and we don't really have that yet.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3278s" target="_blank">54:38</a> So I'm actually looking at Power Designer to see if that's something I can add there. A library, a gallery of user-defined function things, in addition to report templates, user-defined functions. That would make sense to put it there. So we could have a number of sample pieces of code there that people could just go use and go edit or copy into their reports or projects.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3318s" target="_blank">55:18</a> That seems to me to be very interesting. So again, it's a useful helper adder of things as well. Does that make sense? No, honestly we are still, it's still going to be in preview for a while. I don't think they had a date being announced.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3337s" target="_blank">55:37</a> So this is going to be part, honestly I think for a lot of people, once they start getting started with everything it's just like you do need everything in a shared way. So all right, I don't want to blow through everything too quickly, but as I'm going through all the major announcements here, can we give some love to Power BI?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3358s" target="_blank">55:58</a> It's all the way at the bottom. I get it. Not a huge, a lot of data engineering so to speak. I think the only major announcement was just the copilot experience and AI functions, notebook wise. There's a lot of enhancements I think going on, right?

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3375s" target="_blank">56:15</a> So user-defined functions. One thing I'll just call out that's an unknown, not an unknown. There's one feature here that I do want to call that I think is useful. Tags. Tags is now GA. So that was very useful there.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3388s" target="_blank">56:28</a> Tommy, I don't know if you caught my text. Did you see on April 1st that there was an announcement that was made? They announced that shape maps is now GA. Really? Did you see that? That is probably the bigger thing. Yeah, that's one of the more major announcements.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3404s" target="_blank">56:44</a> That was an April Fool's joke that I put out on April 1st. So shape map, sorry for those who follow me on Twitter. I tweeted out on all the social media, I'm like "Oh, shape map is now GA." And everyone's like "Yay, finally here. Good for graphics and visualization."

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3418s" target="_blank">56:58</a> I was like "I don't think you guys know what day I posted this on." So that was totally an April Fool's joke. Sorry. Shape Map is not GA yet. It's still waiting to get GA. We're not quite there yet.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3455s" target="_blank">57:35</a> Well I would say this Tommy, there's a lot of enhancements, right? So they're talking about Dataflows Gen 2, they're talking about incremental refreshes now going GA. I got to be honest, Dataflows Gen 2, you're dead to me. You're too expensive. I don't even want to use incremental refresh.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3489s" target="_blank">58:09</a> I can't make the move. You've made it too pricey and too expensive. It's not useful to me, so I'm going to go do notebooks. I'm going to go use copilot to go lift my Dataflow Gen 2 away from that experience and use something else.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3520s" target="_blank">58:40</a> Database mirroring has got some enhancements. Apache Airflow jobs has got enhancements. Copy job is now GA, which is very good. Very happy about that one. There's orchestration improvements. So Dataflow Gen 2 now gets CI/CD parameterization.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3556s" target="_blank">59:16</a> So if you are using Dataflows Gen 2, you can now parameterize things and use it in the deployment pipelines, which is very much needed. And then there's just various other Data Factory enhancements as well. So there I think there's a pretty solid data engineering story.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3575s" target="_blank">59:35</a> One of the other features that I got to, there's just so many announcements here. I have to call out this one, Tommy. Autoscale billing for Spark. It's the feature's totally named wrong. It's not autoscale billing for Spark. It's pay as you go for Spark. That is going to be huge.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3609s" target="_blank">1:00:09</a> So some people, Tommy, your example here, right? You've got a couple notebooks running. You've got your F2 that's doing its job or it's doing some things. This autoscale billing for Spark allows you to decouple the amount of CUs that you use in Spark away from the F2 subscription.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3646s" target="_blank">1:00:46</a> So you can have an F2 subscription that allows you to have access to all the Fabric things, but then you seriously pay for what you use. The feature should be pay as you go Spark. That's the feature. It should be renamed. It's the wrong name here.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3681s" target="_blank">1:01:21</a> Yeah, it's pay as you go Spark. It's literally as you use more Spark, you pay only what you use for it. This is the model, what Microsoft is doing with this pay as you go modeling. It's literally mirroring what Databricks was already been doing for years now.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3715s" target="_blank">1:01:55</a> And now we have an entirely Spark pay as you go. Now to be fair, Azure had this whole pay as you go Spark thing already. It was already there, we just didn't get access to it inside Fabric. So to me that one's a huge win.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3757s" target="_blank">1:02:37</a> And then I'm really interested to see what this AI functions can do. So AI functions in the data engineering space looks very interesting to me. It's in notebooks. You can easily use them. One line of code and you can start using AI functions. So I'm really interested to see what the AI functions are going to do.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3793s" target="_blank">1:03:13</a> Yeah, anyway, that was the other one that caught my eye as well. So I will note Tommy, on this link here for the main blog, you do see PowerBI.tips on the main page. So under the partner ISV integrations, the workload development kit has been released. It's GA, the workload development is GA. It's still very rough around the edges.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3834s" target="_blank">1:03:54</a> So if you want to build a workload, hit me up. Call my company, we'll help you figure it out because it's not quite smooth yet. But they have a lot of companies that are out there. When I look at the workloads that are out there today, Prophecy, Power Designer, and Osmosis. There's only three companies that have gone GA on workloads.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3878s" target="_blank">1:04:38</a> So I'm one of the three companies. Prophecy and PowerBI.tips have all gone GA on workloads. And there's other workloads coming from CluedIn, Neo4j, Lumel. But most of these workloads are data engineering workloads. Most of them are not Power BI related.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3917s" target="_blank">1:05:17</a> And I'm one of the few. I think Lumel is the only other one that's actually building Power BI related features. So it'll be interesting to see where these workloads go and if people actually start adopting them.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3948s" target="_blank">1:05:48</a> Yeah. Anyways, any other quick things we want to hit here before we wrap? They did introduce a new style to tables in Power BI. So tables are still getting a little love too. They're still working on table visuals and the cards, that's a big thing. And the exploration's going to get an AI feature as well.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=3994s" target="_blank">1:06:34</a> Man Mike, I don't know if I've seen this many announcements at really what usually is reserved for a major Microsoft conference. So I think that's the biggest thing, this was just Fabric and they treated this as their Super Bowl and I love that.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4013s" target="_blank">1:06:53</a> So it's good, and you could tell they were holding back features the last couple months just to get into this. So one, it was a great Fabric conference. We had 6,500 people. They filled an entire arena of people in a stadium. There was just tons of people there. A lot of energy, a lot of excitement, great announcements.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4047s" target="_blank">1:07:27</a> I had a blast. I thought it was a really well-run event. It was very busy. There was a lot of people moving around. If you ask people about how Power Hour went, it was absurd. I didn't even go to it because I couldn't even get in the door. There was so many people packed out for it.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4083s" target="_blank">1:08:03</a> Oh yeah, they needed a much bigger room for Power Hour. It was not nearly big enough. Really big event, and if you haven't been to a Fabric conference and you haven't been to a Power Hour event, they literally need to do the conference and they need a second venue or a second announcement of a Power Hour thing.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4122s" target="_blank">1:08:42</a> What they've done is they've realized that Power Hour can't be on top of any other sessions because then no one will go to the other sessions and you'll only have everyone going to Power Hour. So what they did is they did an after-hours Power Hour session where it's basically the Microsoft product team having fun.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4157s" target="_blank">1:09:17</a> I think they did a Family Feud type thing with the leadership, which was fun as well. Yes, that went off really well. I think those were well-received in the Power Hour. Having the most popular features or some questions that the product team had a guess on, what is the most needed feature inside Fabric, top 10 answers thing. That was fun.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4198s" target="_blank">1:09:58</a> But anyways, it was a great conference. Super enjoyed it. There's probably going to be many more discussions, Tommy. We're going to have to dive into. I want to start playing with AI things and figuring out what that looks like and how we can start incorporating that with our Fabric environments.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4234s" target="_blank">1:10:34</a> So all right, we are at time. Thank you Tommy for bearing with us here. Sorry we started a little late today. We're a little bit over on time. We hope you enjoyed the episode. You still get a full long hour of Tommy and Mike rambling. And with that, we'll just say thank you all very much.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4268s" target="_blank">1:11:08</a> We really appreciate your time. We know it's extremely valuable. If you did go to Fabric Conference, I hope you said hi. If not, maybe I'll see you next year. And if you like this podcast, if you like what we're doing here, if you like the conversations that we're having, we'd really highly recommend please, please, please let other people know.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4309s" target="_blank">1:11:49</a> You like what we're talking about, you like what the conversation is. We're not trying to do just standard interviews like every other podcast seems to be doing nowadays. We're trying to have real topics, real conversation around what is Fabric and how do we use it in our organization.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4339s" target="_blank">1:12:19</a> That being said, Tommy, where else can you find the podcast? You can find us on Apple, Spotify, wherever your podcast. Make sure to subscribe and leave a rating. It helps us out a ton and we do this for free. Do you have a question, idea, or a topic that you want us to talk about in a future episode? Head over to PowerBI.tips/podcast. Leave your name and a great question.

<a href="https://www.youtube.com/watch?v=779k13VVoU8&t=4378s" target="_blank">1:12:58</a> And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all of PowerBI.tips social media channels. Thank you all so much, and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
