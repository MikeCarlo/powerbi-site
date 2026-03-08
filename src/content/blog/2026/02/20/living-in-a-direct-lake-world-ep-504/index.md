---
title: "Living in a Direct Lake World – Ep. 504"
date: "2026-02-20"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Direct Lake"
  - "Microsoft Fabric"
  - "Lakehouse"
  - "Semantic Model"
excerpt: "Mike and Tommy dive deep into what it means to live in a Direct Lake world, exploring the practical realities of building semantic models on top of Fabric lakehouses. They cover the trade-offs, gotchas, and best practices for teams making the shift from Import mode to Direct Lake."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive deep into what it means to live in a Direct Lake world, exploring the practical realities of building semantic models on top of Fabric lakehouses. They cover the trade-offs, gotchas, and best practices for teams making the shift from Import mode to Direct Lake.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/r_AsPpWZvEk" 
  title="Living in a Direct Lake World - Ep. 504"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Billing updates: new operations for Fabric AI functions and AI services | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/billing-updates-new-operations-for-fabric-ai-functions-and-ai-services/)** — We’re introducing billing reporting updates that make it easier to track AI-related usage in Microsoft Fabric. New AI Functions operation Until now, Fabric AI functions usage was reported under other operations, such...

## Main Discussion: Living in a Direct Lake World

Mike and Tommy tackle one of the biggest architectural decisions facing Power BI teams today — when and how to move to Direct Lake mode in Microsoft Fabric. Direct Lake promises the performance of Import with the freshness of DirectQuery, but the reality on the ground is more nuanced.

### The Direct Lake Promise

Direct Lake mode allows semantic models to read directly from Delta tables in a Fabric lakehouse, eliminating the need for scheduled refreshes while maintaining in-memory query performance. For teams already invested in Fabric, this is the natural evolution from traditional Import models.

### Practical Considerations

The conversation covers the real-world trade-offs teams face when adopting Direct Lake. Not every workload is a fit — data volume, query patterns, and lakehouse design all play a role in whether Direct Lake delivers on its promise. Mike and Tommy break down the scenarios where it shines and where teams might want to stick with Import or consider a hybrid approach.

### Best Practices for the Transition

Moving to Direct Lake isn't just flipping a switch. It requires rethinking how data lands in the lakehouse, how tables are structured, and how the semantic model references them. The duo shares practical guidance on lakehouse design patterns that set Direct Lake models up for success.

## Looking Forward

As more organizations adopt Microsoft Fabric, Direct Lake will become the default mode for many new semantic models. Mike and Tommy encourage teams to start experimenting now, even if a full migration isn't on the immediate roadmap. Understanding the capabilities and constraints of Direct Lake today will pay dividends as the platform continues to mature.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=22s" target="_blank">0:22</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Hello everyone. And how are you doing, Tommy?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=28s" target="_blank">0:28</a> Mike, I'm still digging the intro. It was nice for a change. It's catchy.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=34s" target="_blank">0:34</a> I feel like it's way better than the last one. And also, this morning while Tommy and I were talking, I saw a little Tommy show up on his screen. And Tommy's like, "This is the guy. This is Mike. He's the guy who made the song for dad."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=48s" target="_blank">0:48</a> They made dad's song. I guess they're calling it dad's song now, which is — they call it the Tommy Pulia song.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=54s" target="_blank">0:54</a> The Tommy Pulia song. All right. Good. Well, I like it. I think that's good. They have something to look up to. Their dad is now famous. You weren't famous before, but now —

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=62s" target="_blank">1:02</a> Oh, no. Now that I'm on Apple Music. So, now you're on Apple Music. You've leveled up, Tommy. You've leveled up.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=70s" target="_blank">1:10</a> Let's jump into some topic pieces today here. Before we get into our main topics, we want to just talk about what we've been doing — some reflection here at the beginning part of this year. One of them has been, where does Fabric sit? Do we trust it? That was one of our recent topics.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=84s" target="_blank">1:24</a> This one's going to be a bit around what does the world feel like with Direct Lake? How are we using Direct Lake? It's been out for a while now. We're starting to explore it a bit more. People should have some runtime on it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=95s" target="_blank">1:35</a> Let's just unpack the idea of what is Direct Lake and are we finding value from it. So, let's unpack that feature there and dig into the Direct Lake world. And this is more of a specific area where we're talking about the lakehouse has tables, the semantic model connects to those tables and automatically caches and is able to update itself with the Direct Lake experience.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=119s" target="_blank">1:59</a> It's not direct query and it's not import mode. It's this new thing — not hybrid, but it's a mix. It's a little bit different than those two experiences when you're loading data to a semantic model.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=130s" target="_blank">2:10</a> 100%. Right. That'll be our main topic. With that being said, let's move over to our news. Tommy, you found some AI shocker. It's in the news.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=138s" target="_blank">2:18</a> All right. So the first one, or really the main one we have, is from the Fabric blog. What they're simply doing now is before, if you were using any of the operations for Fabric AI, specifically in notebooks or Dataflows Gen 2 related operations, and you wanted to know how much am I actually spending on these AI operations, you really couldn't know.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=161s" target="_blank">2:41</a> It was under Spark operations. It wasn't really segmented out. Now simply with billing, you can see in the Copilot AI capacity usage there's a billing meter that simply allows you to see three different ways — looking at AI functions and AI services are now split out so I can actually see them based on notebooks, the compute cost using the Fabric functions, or the compute cost using the Azure AI services, or using the AI functions and Dataflows or the notebook.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=193s" target="_blank">3:13</a> So this is nice to know, especially if you are beginning to dabble in this and one of the things you're doing is experimenting with cost, to actually see how much am I actually spending, what percentage, even if I'm doing some functions.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=205s" target="_blank">3:25</a> Okay, I'm going to go to cost and spending and CU consumption here for a little bit. I've been playing around with my tenant here a little bit. Tommy, do you use the Microsoft Fabric capacities app?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=216s" target="_blank">3:36</a> I do. Oh yeah.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=219s" target="_blank">3:39</a> Okay. I found an interesting edge case. This is maybe somewhat related to this conversation as well, not necessarily to the AI and CU usage, but I just recently spun up a Fabric capacities app and I was in my tenant. I have a trial capacity and one that I pay for. So, I have one that's just an F2 because I'm just testing out some things on my trial capacity.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=241s" target="_blank">4:01</a> You can go in to the admin portal and you can rename it. So, I went in and I renamed my trial capacity. For whatever reason, and I don't understand exactly why, I've reinstalled the Microsoft Fabric capacities app. So, I could look at the CU usage of that new Fabric SKU. It won't update. There's no information on the renamed capacity.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=267s" target="_blank">4:27</a> Now, I think if you rename your normal capacities, like your paid capacities, it figures it out. But there's some weird data thing happening when you look at the capacities in the capacity app when you rename them and they are a trial. For whatever reason, I'm not able to get the data back out.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=284s" target="_blank">4:44</a> I'm actually going back to the Microsoft team — I think this is a bug. Something's missing here. I can't quite see why I can't observe data for that particular capacity.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=294s" target="_blank">4:54</a> If you rename a capacity that you purchased, I think you do that in Azure. And I think that's actually renaming it. There is no capacity for trial in Azure. So I think that's more of a display name. So I bet if you renamed it, which it would take you to Azure to rename it, I don't think you would rename the capacity if it was an F2 or an F SKU.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=314s" target="_blank">5:14</a> Oh yeah. I think you have to go — well, that's a good question, Tommy. I think you have to rename it there.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=321s" target="_blank">5:21</a> You have to rename it in Azure, which there is no location in Azure for renaming it. It doesn't exist.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=328s" target="_blank">5:28</a> It's so weird. It's just like all the data, if there was any, just doesn't exist now. And there's nothing on the trial capacity — it's just gone. There's just nothing on it. All the metrics are blank. There's no direct use. Nothing there. I'm like, great. I got a whole bunch of free stuff.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=342s" target="_blank">5:42</a> Oh, that's even worse. Oh, wow.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=344s" target="_blank">5:44</a> And I can't see anything. I don't know. So if I'm trying something, if I'm looking at testing out some new feature or a combination of stuff and I want to see what the usage looks like before I actually put it into production, I got no visibility.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=355s" target="_blank">5:55</a> So, I've reached out to the Microsoft team to see if that's fixed. If you are working on trials, my recommendation right now would be do not rename them. If you rename them, you will break your Fabric capacity metrics app. It will not work.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=369s" target="_blank">6:09</a> So, I don't know if it's a bug I just found or what, but just FYI for those of you who have trial capacities laying around, do not rename them in the admin portal because if you do, you potentially could break things.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=380s" target="_blank">6:20</a> Anyways, that's going back to the related topic — the CU consumption cost, man. It's a necessary conversation.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=386s" target="_blank">6:26</a> I really think so, Tommy. There's a lot of things in Fabric that we build something one way and then we build it initially with Dataflows Gen 2, it works, but I really do think there's this idea of coming back and revisiting as your team gets more knowledgeable, as you get more comfortable with Fabric — there is this concept of we need to rebuild stuff, like we have to take a good look at this.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=407s" target="_blank">6:47</a> And I'm gonna — I hate to say it, Tommy, but we have so much AI laying around. Like AI is really good at looking at things and saying, "Hey, here's some M code. Can you please just rebuild this into a notebook?"

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=420s" target="_blank">7:00</a> Oh yeah. Like you could just build what you want and just say read through this M code, figure out what I'm doing, make it more efficient, and then turn it into a notebook. And you could ditch the whole Dataflows Gen 2 experience.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=434s" target="_blank">7:14</a> I think the AI now with these new Opus models that came out and some of these new ChatGPT codecs that came out — they're really good and they're writing amazing code.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=447s" target="_blank">7:27</a> Well, the important distinction here, Mike — I actually mentioned this on a podcast last week or the week before — but I have a few projects and I am such a proponent, if you're using any of these AI products, that you create a project on these with relevant context.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=466s" target="_blank">7:46</a> So, to your point, doing that translation, if you just send that in a chat in ChatGPT, you're going to get mixed results. But I have a Fabric guru project and then I have a notebook guru in projects. So they're two separate projects.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=480s" target="_blank">8:00</a> Interesting. My wife has an API for a timesheet thing and I'm like, all right, I could do all the research on the API here and create the connection. First I created a notebook — was great — but I'm like, my wife's small business is not going to be using notebooks. So I said translate this into a direct Power Query. I'm going to use this in a Power BI just direct connection.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=498s" target="_blank">8:18</a> Done. So yeah, all that's possible. But going back to what you're talking about from the administration side, my previous life, that's what I was. I was the admin of premium capacity, and my responsibility — and the responsibility of anyone who has the capacity app — it was just premium at the time — is to monitor these things to see where things are going.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=524s" target="_blank">8:44</a> And it's not just cost, it's what's taking up the most. And that was my responsibility to go through and let teams know, "Hey, your models here are killing us at these times."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=535s" target="_blank">8:55</a> So we got to do something about that. Now you have 1,800 other things to monitor, other products and artifacts.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=541s" target="_blank">9:01</a> Yeah. And Tommy, also to this end, right, there's also something here that says there's a lot of this going on where when we look at the scope of what's being able to be built here — the scope of what we can do — we really should be looking at how can we leverage different tooling or AI pieces to help us build this stuff.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=562s" target="_blank">9:22</a> So to your point, Tommy, right, I think everyone would argue today, it's not really easy for you to go around Fabric and use AI where you want to, what AI you want to supply to some space, right? Let's just go back to your example, Tommy. Hey, I've got some M code. I want to rework it or refactor it. I want to make it more efficient.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=581s" target="_blank">9:41</a> There's not a really good experience to get that code out and put it into some editor and say, "Hey, help me work through how can I make this better? Can I test this? Can I run this M code against the space and see if it actually runs better or more efficient?"

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=595s" target="_blank">9:55</a> Or, I see a lot of novice people, they'll do like a rename, a drop column, a rename, some more things, another rename, another drop columns, change type, change type.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=603s" target="_blank">10:03</a> Yeah. I'm guilty. I've done it. I just got into the mode of just shaping and building data. You get those things just hanging around. Not that it's inefficient, but there's some patterns there.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=614s" target="_blank">10:14</a> And also to your point, Tommy, there should be like a skill. Hey, when I build data flows, here's the pattern we like to follow. Here's what's most efficient. Check this data flow and see when query folding breaks. That's the stuff that we should be having AIs or other things to review with us and giving suggestions. How can I extend the experience here to make this go farther without having to do more?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=642s" target="_blank">10:42</a> SQL query folding back?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=643s" target="_blank">10:43</a> I'm going to slightly disagree because you're technically right — in Fabric there's not a really easy experience to basically do this seamlessly, but the MCP is great at this.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=655s" target="_blank">10:55</a> Great. Okay, so there's a couple MCPs here.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=661s" target="_blank">11:01</a> First Tommy, give us what the name MCP stands for. It's called model context protocol is what it stands for.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=667s" target="_blank">11:07</a> For those of you who are just hearing this word for the first time, we've talked on this a number of times in the podcast, but the model context protocol is an application layer between the large language model and then whatever the thing is that talks to the MCP server and they call it a server. Is it really a server, Tommy?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=686s" target="_blank">11:26</a> I don't know. I don't know. Maybe in the most bare definition of what a server is. It could be.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=693s" target="_blank">11:33</a> I don't know if it's running a machine. That's what I don't understand.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=697s" target="_blank">11:37</a> It's got to run on your computer or in the service. And that is technically a server because usually you're not to get too nerdy here, but you're either doing npm packages that's running something. So it is running something technically. It is running hosting somewhere.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=714s" target="_blank">11:54</a> Yeah. But there's all these — this is what I don't understand exactly. Is it just a list of instructions that the AI can talk to?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=721s" target="_blank">12:01</a> So no, it's not — it's much more than just a markdown file or a skill. It has that information, yeah.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=727s" target="_blank">12:07</a> But for it to run, it is more intensive than your normal system instructions.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=735s" target="_blank">12:15</a> And to be clear here, everything has an MCP server at this point. They're all over the place. GitHub's got one, Azure's got one, Azure AI Foundry has one. We have two currently for Fabric. One for Fabric and one for Power BI. Specifically. So we already have two MCP servers already there, built by Microsoft.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=755s" target="_blank">12:35</a> Built by Microsoft. There's also other community ones that I've seen pop up. I just saw someone try to sell one for 40 bucks a month.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=760s" target="_blank">12:40</a> What?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=762s" target="_blank">12:42</a> For an MCP server. And so I'm looking at all these different MCP server spaces and there's a lot of them showing up. And any other app that you probably have, there's probably an MCP server for it. I use Figma a lot. There's an MCP server for that. All kinds of things.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=777s" target="_blank">12:57</a> So okay Tommy, give me your experience. What made you so excited about the MCP? What were you doing?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=784s" target="_blank">13:04</a> So in a nutshell, if you're wondering what the heck's an MCP, isn't that just a skill? In a nutshell, it allows you more than just giving it context for, hey, here's what Power Query is. It can either have a much more intimate relationship with whatever the service or product is.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=802s" target="_blank">13:22</a> And the best example is the Power BI one that runs on your machine. It can direct connect with a set of commands to a running Power BI model on your computer in the same way you would connect to Tabular Editor or DAX Studio whereas the local host. So has this direct connection to the model and it can really modify the model. It can take a look at it. It has a ton of instructions and but it can directly integrate and fix, modify, transform, load, and really build off that model.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=834s" target="_blank">13:54</a> Now this is really cool because you can go and Claude, let's say, and say, "Hey, I have a model open. Tell me about it. How many measures are there?" And that's cool, and it can even fix things for you.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=845s" target="_blank">14:05</a> But I know we did an episode about this before, but in the last few weeks, Mike, I have seen my use of this exponentially grow because when you think about it, I can just directly talk to a model by itself and that's fine. But I use a lot of other tools, especially with my clients.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=864s" target="_blank">14:24</a> One of them is Notion. I have my customers, my project notes, the transcripts, all the things we're working on.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=875s" target="_blank">14:35</a> Yeah. And I was curious. I said, well, I know what this milestone is and all the things that we have to do and the measures we have to create. I said, hey, take a look at X, Y, and Z, this milestone and what we have to do.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=903s" target="_blank">15:03</a> Also, I have the data up in this model. What are we missing? Based on what the requirements are, based on what we're trying to build from the dashboard and a little loading and it basically outlined for me what's in my model, what we can transform now, what are some stop gaps that we have.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=928s" target="_blank">15:28</a> And I was like okay, right back to Notion, basically a technical outline plan of what else we need based on the model that I have open right now.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=938s" target="_blank">15:38</a> And to me it's more than just doing these quick fixes — is when you give it that road map. This is incredible. This is so much more than just doing a simple chatbot. We are well past that.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=954s" target="_blank">15:54</a> Now for a lot of people you probably have — you're probably running things in OneNote or wherever your project notes are. You probably related to some data that you have, and odds are Claude can talk to it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=965s" target="_blank">16:05</a> Yes. Agreed. So this is something. I love this Tommy that you're giving this example. I had a very similar experience. My experience was very closely related. I had a Databricks semantic model, or a semantic metrics view basically was what their version is.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=961s" target="_blank">16:01</a> So Databricks doesn't do the same thing as semantic models that Power BI does. Basically Databricks says look we already store all the data in tables, we're just going to write a bunch of SQL and define names, columns, relationships, predefined SQL statements that we then can run on demand when you need this to be run. So you basically are building a semantic model in a little bit less Power BI semantic model level, but it's their version of a semantic model. Metrics views.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1008s" target="_blank">16:48</a> Well, I was given a metrics view basically and then I had a Power BI report. The Power BI report had no descriptions, no measures, no columns and folders, nothing.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1017s" target="_blank">16:57</a> And so I was like, there's a lot of tables here. There's like 50 tables I got to go through and I don't want to write all this down. So I went back — to your point Tommy — I brought in the MCP server. I pointed it at the Power BI report. I brought in the documentation into a folder inside VS Code and said hey go search through all of this 3,000 lines of code that was given to me that was all the documentation and find the equivalent tables in the Power BI report.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1063s" target="_blank">17:43</a> And then I want you to find the table. And so I did all the work on just one table. Find this table. Go find each column and measures definition based on the other document. And this document I was given had a whole bunch of SQL in it. It had every measure or every column calculation. If I'm calculating a column or doing some logic there, all of that was built into the metrics view that was given to me.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1088s" target="_blank">18:08</a> Great. So I just threw Claude at it and said, "Check this out. Go figure out what's there. Go read it." And then after it figured it all out, it said, "Okay great. I have definitions for every single column" and in a couple seconds it wrote.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1104s" target="_blank">18:24</a> And again, to be honest, Tommy, this is another one of these use cases that I think people are more willing to tell you something's wrong than to be able to make it up from nothing on the spot.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1113s" target="_blank">18:33</a> Right. So people — at least a prompt. A point to react to and then people will let you know if something's wrong. They'll have more opinion if something exists and it's not what they expect it to be. As if you ask them to define it, it seems to be harder to discuss and define something that's not been materialized into someone's mind.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1133s" target="_blank">18:53</a> So I found that to be very useful. I did all this model documentation in like 30 minutes, which normally if I was going to document all these columns and write them up all myself, we're talking like a day, two days of just solid work. It was so efficient for me.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1150s" target="_blank">19:10</a> So I really like this one. I've had a great experience with the MCP server. The other thing I would probably highlight here that I think is really interesting with the MCP server, and I think what you're finding as well, Tommy, in larger models, if you have a really big model, if you wanted to make a measure, you have to write the measure and then hit okay to go on to make the next measure.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1168s" target="_blank">19:28</a> Every time you do that, you're submitting changes to the model. It's got to revalidate everything and then be good with the changes. For whatever reason, when the MCP server is talking to the Power BI models, it's doing batch edits. It's very efficient.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1186s" target="_blank">19:46</a> Probably doing like Tabular Editor. Yeah. No, Tabular Editor is doing it like MCP.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1194s" target="_blank">19:54</a> Oh my friend, which one came first? Well, Tabular Editor did come first with the idea of bulk edits, but Microsoft has always had this concept. The whole idea exists — editing multiple things at once and you could submit all the changes at one time. That's like ALM Toolkit's idea and other things as well.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1212s" target="_blank">20:12</a> So very interesting. The behavior is really good. I thoroughly enjoy the behavior of this. So anyways, I just want to point out this is really good. I am finding a lot of value from the MCP server. If nothing else, learning agents and AI things just to talk to the MCP server, I think is a big win. I think it'll save you tons and tons of time later on.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1230s" target="_blank">20:30</a> Any other thoughts on the news items, Tommy, before we move on to the main topic?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1234s" target="_blank">20:34</a> I am ready to roll, my friend. All right, we are rolling. Okay, let's hop on over to our main topic today, Tommy. Our main topic will be all around living in the Direct Lake world. I feel like this is a song. Living in the Direct Lake world.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1250s" target="_blank">20:50</a> That is Living in America. Yeah, something like that. Yeah, write a song about it. We'll see what AI says.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1259s" target="_blank">20:59</a> All right. I gotta fire up my hand. Try to have some copyright infringement. Amazing, amazing. All right, give us some vision here Tommy. Where do you want to take this conversation?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1270s" target="_blank">21:10</a> All right, so with more and more of our process and what we talk about more is the lakehouses and that's the integration, the primary point of pushing our data, storing our data, which obviously logically within reason I'm going to use that lakehouse to build my report and build my model.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1291s" target="_blank">21:31</a> We now no longer use the default semantic model. So we can build our semantic models off of the lakehouse, which is really the preferred method. If you're using Fabric, that capability — when you do that you are using a mode called Direct Lake.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1306s" target="_blank">21:46</a> So no longer importing our data. If I open a semantic model or open a Power BI file and I'm going to connect to a lakehouse, immediately we're using Direct Lake. That is near real-time freshness, scalability, and basically as soon as the lakehouse updates, my model updates. No importing, refreshing everything, going through all the transformations.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1330s" target="_blank">22:10</a> And which is disruption when you talk about the first nine years of our lives in Power BI. What did we always say? It was import mode. There were three modes and we 99.9% of the time were using import mode. I'm going to connect to even if it was a dataflow gen one, but I'm importing the data using Power Query to transform the data. It's going to have to do the refresh, the transformations, connect to the source.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1352s" target="_blank">22:32</a> Yes. Now we're two years into Fabric. Lakehouses are all the rage. It's still the preferred method. So the question that I think then arises, are we now...

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1323s" target="_blank">22:03</a> arises, are we now primarily using direct lake, pushing people to use direct lake? Is that now the number one option? Just like we used to say that import was the primary way, the preferred way, the best practice way. Or does import still have some claim to the throne?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1345s" target="_blank">22:25</a> >> Wow, Tommy, >> You like that? I cuss. >> Yeah, a lot of your comments are very like not polarizing, but they're like very strongly worded like >> Yeah, it's a podcast. So, >> I said I don't care either way. What do you think? So, >> yeah, it makes for a good TV.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1361s" target="_blank">22:41</a> >> Makes it good for TV. Yeah, so there are there are some advantages of the direct lake things that I really like right when you're talking really large data or you're talking about I don't want to have an extra load step or load processing step for the import I don't want to spend extra compute to import data into a semantic model. Think of it this way. Here's some of my mental model. What's happening here, right? If I have a direct lake, if I have a lakehouse with tables in it and I'm trying to get the data from the lakehouse into the PowerBI semantic model, the direct lake format is delta and it has parquet files under the hood.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1397s" target="_blank">23:17</a> >> That format is already depending on where you write it in from and if you have the spark settings turned on, it will automatically reorder the data. Vertipac order the data. So Microsoft has a proprietary formula where they try to repack the data in a way that's most efficient. So that way when the report needs to access the chunks of data, it's very efficient for it to go get that information and pull it into the reporting. All right. So this vorder thing is very important. Data bricks has a very equivalent feature called zorder where it like lines things up for you.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1430s" target="_blank">23:50</a> That was that was there first basically. But the zordering is like another way of optimizing how you store the files and like which rows of the data go together and that way when you read it it's efficient. Okay. The reason I bring this up is because if I don't have that if I'm doing import again, right, think of it think what has to happen. I'm using the semantic model to go talk to the lakehouse. Now I'm not 100% confident this is what's actually happening but in my mental model I need to go model connect to lakehouse, send rows of data recompact them into v order put them in import mode store inside semantic model and then semantic model in import mode can then service data.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1476s" target="_blank">24:36</a> So there's always another step of compute whenever you're doing import the data doesn't just automatically show up because the model can automatically refresh the direct lake connection and again I'm saying automatically I'm saying within like I've observed within like 5 minutes of the data being updated in the lakehouse the semantic model is trying to get like new information so it's fairly quick, it's not instant, but it's fairly quick >> so that being said there's if I'm trying to be more efficient with my pipeline and my process and I don't want to worry about the import step or I have a bunch of series of processes that are running and they're going to get done at different times like I'm loading different tables at different speeds at different times maybe throughout the day certain tables are getting updated certain tables are not.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1524s" target="_blank">25:24</a> If I don't want to worry about any of that and continually having to like do very fancy refreshing on or reimpporting the model I think directly it's the way to go right because it just handles it. Does that make sense what I'm saying?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1535s" target="_blank">25:35</a> >> 100%. Oh, 100%. >> Okay. Then on the flip side of this, I go back the other way is okay, one, if I let's just say I don't really want all that, right? Let's just say we're really doing like batch loading. I'm doing the processing, everything's done. We have like tables completed in Lakehouse and then I want to import the semantic model. It's all it's running through a pipeline. That's a lot of my architecture, right? a lot of my pipelines or orchestration events using notebooks to process data, move tables from bronze, silver to gold, and then I have import models hanging off of that.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1565s" target="_blank">26:05</a> I would argue, Tommy, the import model gives you more flexibility with how you design your workspaces. So, let me give you some context here, right? If I have an import model, I can keep the lakehouse in a very small Fabric capacity. If you watch the usage on background application running, so running your data flow, running your notebook, those seem to have a much lower consumption rate than interactive or report or semantic model consumption.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1599s" target="_blank">26:39</a> So as I look at that, I think, well, I don't really want to put my semantic model in the fabric capacity. I don't really want to put my report in the fabric capacity. I don't need them to be there. And let's also imagine Tommy, we have a number of pro users, but we're starting to get really large models, right? If I want to use a semantic model in a fabric capacity that is 100 gigabytes in size, you've got to go to a pretty expensive fabric skew >> to allow the semantic model to grow to that size. So, conversely, if I don't do that, I can pay $14 per user and get a 100 gigabyte model per user who's using the workspace.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1637s" target="_blank">27:17</a> So, there I think there's some there is some design cost considerations where if you're a small team, the premium per user is still a bargain of a deal. Really good deal. And if you need really large models in a small team, still premium per user is a bargain of a deal. Now, do I use direct link in that? Probably not because you put the model over in a different workspace. You want it to probably import and do incremental importing of things.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1669s" target="_blank">27:49</a> So, I'll probably do the import model in a premium per user workspace because I get a really high threshold on what how much that memory that model can use. >> This is true. This is true. That's >> versus in the fabric space. So, I'm seeing shifting designs now, right? Before it was like throw everything in a fabric space for the data engineering and then make a new fabric workspace for the reporting and the semantic model. I don't know if that always holds true anymore.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1692s" target="_blank">28:12</a> >> I think a blend of these designs depending on what you need. >> And we might have just lost Tommy. I think he accidentally closed the window here. So, let me bring him back up here. One second.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1705s" target="_blank">28:25</a> >> We're still here. I didn't do anything. I just said waiting for host to join. I was like, I don't know. I know who host is here. Okay, can you hear me? >> We're back. >> Cool. Hey, 500 episodes in. We still got problems. So, >> we're still not getting Yeah. the important distinction that you made here because I was going to argue with you about the fact that, okay, I'm not going to I don't want to put that capacity, the usage on my fabric skew. Well, my friend, you would still do import though and import is expensive in itself.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1738s" target="_blank">28:58</a> The important distinction that you made is premium per user which still has this not unlimited ability in terms of what it can handle, >> But you're not paying extra. >> Correct.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1750s" target="_blank">29:10</a> >> This you do have actually a lot of leeway with a premium per user. >> You're right, Tommy. Like in the premium per user, you are using import mode and you are waiting for the refresh. So really the trade-off to me is not cost at this point, right? So if you go so >> if if we're talking premium per user >> or even pro for that pro users too like pro.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1768s" target="_blank">29:28</a> >> So let me let me just tease out the idea that you're describing here which I think is a very good a very valid point actually Tommy right if I make a lakehouse in a fabric workspace and I make an import model in the pro and premium per user workspace the only thing I'm penalized is the twohour time of window to load the data. That's the only penalty I get because I could refresh that model up to eight times per day up to what 24 what is it? 36 every 30 minutes.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1794s" target="_blank">29:54</a> >> Mhm. >> So you you could refresh your model up to 24 times a day. No 48 times a day in premium per user. So all of that could just happen and now it's just a matter of how long do you want to wait for the model refresh? Like that's all you have to worry about. You are speaking though about a 100 gigabyte model and in my head I can see a bell curve and I'm considering how big are the tails on the ends in terms of how often is that the case for especially a midsize small business in your situation here.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1825s" target="_blank">30:25</a> >> Good question Tommy. 100 gigabytes is not the threshold you should be worrying about. >> It should be the it's the one gigabyte level because that's the tipping point between moving from a pro license to a premium per user license. But even a gig I know that definitely happens and that's definitely the case >> more and more now I think like if you had asked me like a couple months ago I'd probably say most your models will sit underneath a one gig limit.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1853s" target="_blank">30:53</a> >> Why now? >> I think there's just this idea well the proliferation of data right if I have a lakehouse and I have the ability to make or get access to more data. I think companies are maturing here. They're bringing in more data. They're getting better at loading lots of information. And I think because of that, models are now starting to bloat beyond the 1 GB size limit more often than you would think.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1872s" target="_blank">31:12</a> >> And so I think this is becoming more common and now you're getting and why again, why would you put a premium per user workspace skew in there if you weren't needing to get people to push over that threshold and start buying more, buying the $24 skew as opposed to the $14 skew?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1888s" target="_blank">31:28</a> >> Yeah. >> Right. >> Sure. Yeah. And honestly too, for smaller for models that are under 20 gigs, the benefits of direct link are pretty minimal. direct link really shines when it comes to your let's say the common size of a model. Let's say like whatever whatever's in the middle of that bell curve, which I don't imagine would be, anywhere from 100 megabytes to 900 megabytes. If you were to say what is the most common size? If if Microsoft were to take a median looking at all the sizes of your models, I would still argue that it's still pretty low, not low, but I don't think it's close to a gig yet of all the models out there.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1926s" target="_blank">32:06</a> >> So then what you described to me is not a bell curve because bell curves would have a normal distribution around the middle of the distribution there. >> I'm trying to figure out what that middle of the distribution is.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1938s" target="_blank">32:18</a> >> Well, I would argue it's skewed to the left. It's a distribution that has a left a heavy that yeah >> it's got a lot of heavy skew to the left. >> Okay. >> so I would argue with you Tommy like I agree with you but I think you're right. If we had a plot on a graph or put all the dots on a graph, right? If you had the x-axis be the size of the model and the y-axis be like the number of models that are there. This is great. We're doing a podcast and we're describing charts to people.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1963s" target="_blank">32:43</a> >> It's better than doing a meme podcast. >> This is going to be this is going over so well. But if I had to visualize what that map would look like, I would argue heavily on the under

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=1981s" target="_blank">33:01</a> I would argue heavily on the under one gig limit size. Oh yeah. A lot of people can play. And I think also Tommy, if you looked at the distribution of data points, you're going to see a huge amount of data points right up butting up against the one gigabyte limit.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2014s" target="_blank">33:34</a> And I have a reason for this. There's going to be a good amount of small data points, but you're going to see a huge pile of dots just in front. Yeah, right in front of the one gig limit and then just after the one gig limit you'll see another pile because there's a lot of people avoiding the one gigabyte limit like a plague.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2037s" target="_blank">33:57</a> And so people will get as close as they can to not have to pay for the higher level SKU. And so I would argue if we do have a pileup of semantic models they're all going to be at the 900 megabytes, 950 megabyte level. There's going to be a huge pile right there because people are going to be intentionally trying to trim as much fat as they can to keep it below so having to pay for a premium per user workspace for all their users.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2082s" target="_blank">34:42</a> And outside of size, I think we've touched on the size one. Outside of size, there's also the conversation too of where import still shines and maybe why you would want to prevent that because you still have the developer experience. If I'm using import because I can import data and I can still do all the transformations I need to.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2106s" target="_blank">35:06</a> In direct lake, you are making the assumption the data is ready to go as is. When I'm connecting to a direct link, you're not in power query at that point, right? I am assuming when I'm connecting to it, yeah. So the assumption should already be there. But what you're saying when you're doing direct link is I assume and I trust the data is in the right format and structure.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2132s" target="_blank">35:32</a> And usually you create that semantic model anyways beforehand. So right now that experience for a developer to create a semantic model off direct lake is I open up Power BI, I connect to my OneLake and I'm not building the report in there. In fact there is no canvas, you are building the semantic model only. That is a file you don't have to save, it auto saves. It's a pretty cool experience.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2155s" target="_blank">35:55</a> I like it. So when I build a report, right, I am no longer having the developer experience we just talked about, the report developer. Now with import I still, even off clean data, if I need to see the data in a different way, maybe we're doing a customer churn or whatever the case may be, we need to do some filtering or whatever the situation calls for, I still have the ability to transform the data anyway I deem fit in import.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2189s" target="_blank">36:29</a> So there are two distinctions from the purpose here. Yes, and Donald's doing a really good job here as well keeping us honest. In the direct lake mode, right, you do have the ability of changing column and table names inside the semantic model, but you're not adding net new columns. I'm not going back into the M code and shaping or adding things there.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2207s" target="_blank">36:47</a> Well, so those are things that we're not yet doing. And I think — polish, you cannot transform — but this fits I think the best. So yes, I agree with you. I think the developer experience changes when you go over to direct lake mode. But then I would also argue Tommy, the reason, the whole reason we're doing direct lake mode is we're taking the time and compute that we would need to do every import and we're centralizing it into another set of tools.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2236s" target="_blank">37:16</a> Right? So you're bringing upstream another level upstream. Well, this is Matthew Roach's maxim — transform the data as far upstream as possible and as far downstream as necessary. This fits with good practice when you're building data design, right? You don't want a whole bunch of imported models.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2256s" target="_blank">37:36</a> And I would also argue — Whoa, whoa, whoa, whoa. Hot take there. You wait, what did you tell me that again? You don't want a lot of import models. That's what you said. No, I don't want — let me rephrase what I'm saying there. Right. You don't want when you are doing a lot of transformations downstream, you don't want all your data transformations to live only in the import models, right?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2283s" target="_blank">38:03</a> So ideally you can still do the imports, that happens, right? But the best practice here for doing data engineering is move some of that computing upstream. And the other thing here too is when you do the data engineering in the semantic model with an import mode and you shape tables and do things there, you are locking that business logic or whatever you've created into that semantic model.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2313s" target="_blank">38:33</a> Now yes, there's some effects of like you can take a semantic model and you can have the tables dumped out to the OneLake and there's some synchronization things that happen there already. But in general you've locked business logic into a single semantic model. So if any of those tables you're using need to be reused somewhere else, you really need to take in effect Roach's maxim and start transforming the data somewhere else and only importing the table.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2348s" target="_blank">39:08</a> I will also argue the point that when I started moving more towards direct lake I was much happier as a developer just in general because I had a whole bunch of extra tools that I really like working in. And again I'll keep encouraging people — don't be scared of notebooks. Don't be scared of Python. It's a great developer experience. I really like it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2369s" target="_blank">39:29</a> And I am more comfortable now than ever jumping into notebook-like experiences, shaping data, pushing things around, using lakehouses to do the transformations upstream. I think that's a much better process for reusability of data. I think it's a much better process for maintaining the code to transform the data. I in general will push that even on very small projects.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2396s" target="_blank">39:56</a> I'm very comfortable pushing into notebooks and lakehouses because I think that's a very efficient way to build. Oh man, you go right into a reoccurring conversation we always have on the skill level here because there are trade-offs here. And I'll say this first, I completely agree with you in terms of for me, my own personal opinion, is the preferred method to go.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2415s" target="_blank">40:15</a> Especially if you're trying to work on governance, if you're trying to work on adoption, is to centralize things in the lakehouse and use the direct link mode. Especially if you're building, if I'm building a certified model, it better at this point, in more uncertain terms, it better be in direct lake rather than import. That sucker better be in a lakehouse and that semantic model better be connected to that.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2442s" target="_blank">40:42</a> Rather than, to your point, that isolated environment of transformations that would happen in a semantic model and import. However, there are trade-offs though. There are trade-offs where I don't think we can bury import mode right now. For one, your MCP server, if you're using that — yep — well, becomes irrelevant at that point.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2455s" target="_blank">40:55</a> Because you're not doing transformations with an MCP server. An MCP server allows you to do transformations to the semantic model. Now, I don't believe — there's no power query there. You cannot do transformations in Power BI desktop. Let's say you had a direct link model and I said Mike you need to change the table here. We need to add this logic in this column.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2477s" target="_blank">41:17</a> Well, where do you have to go back to? You have to go back to your notebook or wherever you did that transformation to the lakehouse, not to the model, to make those transformations. So that's a big distinction. You may be able to do DAX with MCP server, but any transformation to the table obviously you can't.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2499s" target="_blank">41:39</a> I'm trying to remember — I'm trying to look, I'm literally trying to bring up my VS Code right now. I'm trying to think of does the MCP server have any ability to modify the M code? The only — no, it can't, there's no M code really within direct link. In direct lake, I know, but I thought you were saying the MCP server can't manipulate the M code. It can if it's import. Oh, I see your point now.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2525s" target="_blank">42:05</a> Yeah. No, no, no, no, no. So, but to edit — yeah, you lose that capability. But again, I agree — but fair tradeoff for reusability. Fair trade-off for not having to reimport everything every time you're doing it. Yes, I agree.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2539s" target="_blank">42:19</a> The other thing too, but again to the question I asked you, I know you're looking it up, but if I needed you to make a change to the table in the semantic model, if it was direct, you're not doing that in Power BI desktop. You have to go back to your notebook to make that change to modify the table, right?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2558s" target="_blank">42:38</a> If I said, hey, the semantic model is missing X, Y, and Z. Well, you're going back to notebook. You're going back to Fabric to update the lakehouse and which in turn will update the semantic model. And this is where, still to this day Mike, we were talking about this offline right before.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2574s" target="_blank">42:54</a> Of the listeners, how many people are actually using AI now? I would make the same argument about how many people are using notebooks. If you were a pure Power BI developer — hold on, let's quantify what you mean by "use AI."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2591s" target="_blank">43:11</a> Okay sure, let's define it. I think your expectation of what "use AI" is, is different than maybe what I'm thinking "use AI" is, right? In the context of this conversation I am saying those who are using AI, relying on it in their professional use case, in their professional lives, in their career. Not to build things or to see what the recipes are, saying that they're using it to integrate with their job, especially in the world of data and Fabric.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2618s" target="_blank">43:38</a> There are some limitations that I think just naturally exist there, right? So I would agree your organization has to buy off on "can we use the thing." Right, if you are only given access to Copilot, Copilot M365, Copilot and Fabric, the experience in my opinion has been somewhat limiting. It does some things well, but it's not really wowed me in any way.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2640s" target="_blank">44:00</a> I'm not looking at going, "Wow, this really made my time and life easier." 20% more efficient. Not even. Maybe. And then it'll make you 20% maybe more efficient, but then 15% of the time you're mad at it. And then maybe you start saying "you're stupid." And I'll tell it how I really feel.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2657s" target="_blank">44:17</a> I wonder how many comments are coming in like "you dumb AI, I don't know what you're doing." Have you ever cursed at your AI before? Never cursed at it, but I have definitely said "you're stupid, stop it, that's not what I want, you're an idiot." Like I have said that to the AI. It's just like, "oh, I'm sorry, I'll rethink what you were doing." Like, okay.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2674s" target="_blank">44:34</a> Don't be sorry. Just fix it. Yeah. Think harder. Use more compute. You need more tokens. So I'll get pretty bent about that. But to your point Tommy, okay, but the broader idea here — saying AI, right — AI tips over the threshold of "sometimes I use it" to "everyone's using it" like when your parents start using it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2641s" target="_blank">44:01</a> When your parents are starting to send you like they ask you "Oh I'm feeling whatever, I'm feeling sick" and you say "Oh here just take some Emergen-C and some vitamin C, it really helps me out." And then they send you back a ChatGPT article that says vitamin C has been statistically proven not to really help out with colds.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2660s" target="_blank">44:20</a> And you're like, okay, well, it's working for me right now. I feel like it's working, if it's placebo or not, right? It's working for me. And now that my parents are now sending me things they're using ChatGPT for, right? It just tells me that people are becoming more normalized to be able to use AI to assist them.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2696s" target="_blank">44:56</a> Fine. That's still a personal use case. Agreed. But I think it starts there and it's going to continue to bleed in. So people are going to find value from AI in personal use cases. It's going to continue to bleed into "Well if I use the AI at home to go research why my nose is sniffly, why can't I use the same AI to help me build other things other places?"

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2698s" target="_blank">44:58</a> I see there's a button here. I'm going to try it and see if it adds value. So to your point though Tommy, I agree this is a weird off case story but I think the use of AI is greatly coming more mainstream and the expectation that people aren't willing to use it is becoming more normalized. I think it's just becoming better.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2718s" target="_blank">45:18</a> All right, I'm going to put you on the spot here. Let me ask you a question. What are we going to see in the next two years? Because I mentioned that if you need to do transformations on a direct lake, you got to go back to the notebook. Where are we going to see a higher rate of adoption for data people?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2738s" target="_blank">45:38</a> Is it going to be in notebooks and Python or is it going to be in AI? If you were to ask the question two years from now, more people will be using X in their data operations or adopting X.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2751s" target="_blank">45:51</a> This is going to really largely depend on what Microsoft actually builds for us, right? One of the things I think that's very much strapping us right now is I don't know what model you're using in Fabric to run Copilot. I just don't know. Is it ChatGPT-4 mini? Is it ChatGPT-4o?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2772s" target="_blank">46:12</a> I don't know what version. Is it Sonnet? Is it Haiku? I'm guessing it's not anything from Claude because I'm feeling like right now Microsoft is being inundated with Anthropic and Claude models. And the reason I say this is because I just read the article around Claude Co-work is now able to build PowerPoint slides and Excel files better.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2793s" target="_blank">46:33</a> Much better than Copilot can. So let's have a buildoff between Copilot and Claude Code and you're going to see that I think Claude Code right now is by far in the lead.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2804s" target="_blank">46:44</a> Let's be real Mike. Just Claude in general is better at building PowerPoints than Copilot. Sorry Microsoft.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2811s" target="_blank">46:51</a> Well that just means there's — you need Co-work. I know. Yeah. When they land a Claude experience as a plugin or an add-in to Excel and Word and PowerPoint and it just does so much better than the native application, there's got to be heads rolling at the top.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2828s" target="_blank">47:08</a> Oh, yeah. There's got to be — I don't know the stories or what's happening inside, but there's got to be at the leadership levels going, "What are we doing wrong? Why can't our own product deliver this level of value and we're getting third parties to do this for us?"

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2843s" target="_blank">47:23</a> If Microsoft doesn't step in here and just say — well a couple things. Microsoft should just squash this bug right now. They should go buy right now.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2853s" target="_blank">47:33</a> They need to do it. It would be like AOL buying Time Warner. But it's like Apple going over to Gemini and saying "Look, Siri sucks. It's not good. We need Gemini to come in and do it."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2869s" target="_blank">47:49</a> So if you're not good in the area, if it's not coming out, it's not working for your people, right? If you're bleeding money, no one's using the tool, right? Then you got to go acquire the skill or get the thing in and quickly pay.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2880s" target="_blank">48:00</a> We're in a space right now where things can be won and lost very quickly. The wins can change very quickly between using one to another. All we need is a decision from a handful of businesses to say, we're dropping all M365 Copilot and we're just going to go all in on Claude Co-work and then a huge amount of money just moves out of Microsoft into these tools that do provide value.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2901s" target="_blank">48:21</a> So you've got to be the company that provides value. Now, one of the big misses I think that's been here is a lot of the Copilot experience hasn't been built around the creator experience. I think we're still not there in the Microsoft spaces. The creator, the person who creates, making their life easy, making it really easy for you to create things. That's the thing we need.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2927s" target="_blank">48:47</a> And so I think this is where Microsoft is starting to gain momentum. And again, they're never the first to any of these ideas. They always come in late and they usually do a good job and do it more efficiently because they're a little bit late to the game.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2936s" target="_blank">48:56</a> But I think they're going to get it figured out here and it's going to get better. I don't even know where I was going with all this, Tommy.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2942s" target="_blank">49:02</a> Yeah. So, I'm gonna answer my question because I got you off a rant. I realized your trigger word's AI. So, okay.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2954s" target="_blank">49:14</a> So, my question — in the next two years, if you were to say in the data world, data operations, are more people going to adopt notebooks or are they going to adopt AI in general using that on their day-to-day?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=2987s" target="_blank">49:47</a> As of today, Mike, even though I recommended that direct lake is the preferred method for your semantic models, I am not going into an organization and building all these notebooks to do semantic model then handing this off especially to a midsize company where they do not have the skill around Python or notebooks or operations.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3007s" target="_blank">50:07</a> Because I can do a dashboard in a day. I am not doing a notebook in a day for new users. It's easy to do import. This is an important trade-off going back to our real conversation here. Even though we know the limitations of import — it only exists in the semantic model, yada yada yada.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3028s" target="_blank">50:28</a> You, by using notebooks, by virtue of using that higher level skill, lose a lot of people in terms of their ability to create and develop using their own data. When I am using notebooks in that experience as of today, I'm not using AI.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3044s" target="_blank">50:44</a> Listen, I'm doing an Excel training right now. There are still people who would not consider themselves by any means developers or data professionals but use Power BI and build off Power BI and they're not technical but they use it and they use it pretty well and they rely on it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3062s" target="_blank">51:02</a> Now if I change that to a notebook, they're gone. They're not going to just immediately adopt that or begin that process when I am using Power Query. And this is still such a selling point for import and this is still such a selling point for Power BI Desktop — the fact that anyone can use it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3086s" target="_blank">51:26</a> 90% of what you can do, you can do clicking and dragging in a user interface and we cannot forget about this part. This is why we can't bury import — because companies rely on this and it's not just a centralized BI team who knows all the DAX and is using Tabular Editor 3 and their enterprise tooling.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3106s" target="_blank">51:46</a> So for me, I can't go to an organization, tell them we're moving everything to direct lake and to lakehouses. Oh, by the way, you need — if you want to transform any of your data, please go to these notebooks and learn Python and learn Spark.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3120s" target="_blank">52:00</a> I don't think you're doing that anymore, Tommy. I honestly — yes, I agree with you. I think you're going to have import. Yeah. But Tommy, I don't write notebooks anymore. My first pass on a notebook is not me writing it. Okay. In the last month.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3140s" target="_blank">52:20</a> That's you though. I'm telling you — it's not that I can do it. It's the fact that the capability exists. It's just Microsoft hasn't built it yet. So let me imagine something for you, Tommy, right?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3155s" target="_blank">52:35</a> I have an OpenClaw bot that I have provisioned with an app registration that can talk to a workspace. It treats just like an employee and I can go talk to it and say "I have this data set, go look at the data set and build a notebook that does this."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3176s" target="_blank">52:56</a> I've written a handful of notebooks. I'm just experimenting. This is all experimentation for me right at this point. I tell it what I want. Go build this. It builds the markdown. It writes the documentation. It builds additional functions. Everything.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3193s" target="_blank">53:13</a> And I'm getting to the point where I'm getting so lazy that I don't even want to write or manipulate the function. I just tell it what I want. "Hey, I didn't like this part of it." Because not only am I doing it on one cell, I'm maybe having it repeat a pattern across many different cells.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3210s" target="_blank">53:30</a> So me, I'm probably way more ahead than most people in this space, which is fine. I get it. But if I'm doing it now, what tooling needs to be introduced or brought into the Fabric ecosystem where I can say, "Hey, bot thing, whatever the thing is — what I'm going to call it an agent or a bot."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3230s" target="_blank">53:50</a> "I need a notebook that reads this data from this SQL view in this SQL server in Fabric. I need you to parse through that information. I need you to XYZ the things." I want to program with natural language. I want to talk to it with how I'm talking to it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3247s" target="_blank">54:07</a> So Tommy, I understand your hesitation to push people towards Python and everything like that, but there should be zero risk for anyone to step into this and say, "I can't write this because I don't know." Because already you've got a free Copilot sitting in your browser that knows the language of Python better than you ever will.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3268s" target="_blank">54:28</a> Or SQL better than you ever will or M better than you ever will. You've already got a buddy. The thing is you just don't know how to use it yet and we don't quite have the tooling inside Fabric to do it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3279s" target="_blank">54:39</a> I always say — in six months or less Tommy, you will be writing notebooks with an agent. You will describe what you want it to do, how you want it to connect and the first pass on many notebooks will just be AI-driven. 100%, predict that one.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3300s" target="_blank">55:00</a> I will bet — today is February 19th. You heard it here first, everyone. Tommy is gonna owe me a steak in six months. Deal. So all right, I'll see you then. I hate disagreeing with you on this because I agree with you in terms of the experience and how much better and yes all the things. However, I think where we really differ...

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3303s" target="_blank">55:03</a> I think where you and I really differ here is that level of who we're talking about here. If I'm talking about someone who's already in our case listening to the podcast, who's already a developer and use all the tools, yeah, they're going to adopt this too.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3316s" target="_blank">55:16</a> But let me ask you this. Rather than just pure arguing with you, if the experience that you said is available in 6 months, which puts us into August, start of the school year. If this experience you said is available to the tee, it's available in fabric, it's seamless by your definition, then we're burying import mode, right?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3345s" target="_blank">55:45</a> Because then everyone, if this experience, because at that point then you expect every person who's building Power BI from Nancy who doesn't know how to extract a zip file or Tim who doesn't know where Power BI Desktop is on their computer — making up names here — to those people who are still building right now, they're all going to the notebook experience and just chatting in natural language and just trusting that the data is right.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3369s" target="_blank">56:09</a> The difference even with AI today and as much as I use it and I use it a lot, there is still a developer experience there because you have to test and verify, you have to go through the data. It is not — we're still not at a point now where actually we're close where I can call my AI and just say yeah but I'm saying I still —

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3387s" target="_blank">56:27</a> Dude, we're getting close.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3389s" target="_blank">56:29</a> Okay, so let me go back to my question then here in six months.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3393s" target="_blank">56:33</a> No, no, hold on. Why do I even need any of this crap? Why do I even need — the data engineering world is going to get rocked in the next six months. It's going to get rocked and you're gonna skyrocket. You're gonna skyrocket.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3405s" target="_blank">56:45</a> Oh, Poly Market. That's really funny. Someone made a comment here. You guys should make these bets on Poly Market and then have people take bets.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3413s" target="_blank">56:53</a> Oh yeah, I love that.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3414s" target="_blank">56:54</a> I don't think Poly Market is in the US, but if it was —

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3417s" target="_blank">56:57</a> That may be an MVP thing, too. We're not going to touch that. So we lose our — [laughter]

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3421s" target="_blank">57:01</a> That's one way to — hey, how do you not become an MVP anymore? Start betting on it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3425s" target="_blank">57:05</a> Betting on Polymarket. [laughter]

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3428s" target="_blank">57:08</a> So, that's an interesting concept. But back to your point, Tommy, I think in general the general feel for me here is the data engineering world is going to get rocked in the next couple months.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3447s" target="_blank">57:27</a> It's going to be so — in the software world, we're already getting this earth shaking of changing things that happen in a totally different level. Let me give you some concepts in the software world, Tommy, that I'm observing.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3461s" target="_blank">57:41</a> Well, Mike —

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3463s" target="_blank">57:43</a> Tell me about this from the import mode — tell me about this in the data world. I know we know what's happening in the software.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3469s" target="_blank">57:49</a> Well, it's happening. So I'm trying to overlay what is already occurring in the software world which is I can devise the requirements around what I want to build. This is what I expect to be created. It's the PRD, the product requirements document. That's what is so important.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3491s" target="_blank">58:11</a> Once I have the requirements of what I need, the agent is really good at figuring it out. So at some point why do I even care what the pipeline looks like? Why do I even care what the SQL notebook is doing or fabric notebook or Python notebook is doing if I can just communicate to the AI.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3509s" target="_blank">58:29</a> And back to your point Tommy about tests, right? This is a skill that I don't think people have developed yet, which is if we're going to trust the AI to do more of the data transformations, we should really start with the tests and write the tests first.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3522s" target="_blank">58:42</a> I know John Kursky is on the chat here right as well. So, I'm gonna call on the powers of John Kursky, who's in the chat right now, and I'm pretty sure he'll agree with me. Testing and data quality is paramount.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3535s" target="_blank">58:55</a> And we should probably start with what do we define as quality data first? Define the tests we care about that we would want to run on the data. And then once we know those, those become instructions, requirements that then tell us how to go do the rest of the actual data engineering.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3553s" target="_blank">59:13</a> A lot of the times I think, me personally, I think of going from okay data in the lakehouse, now let's build the notebook, now let's build the table. And I think from the back forward, I think in this new agentic world or building things with agentic developer experiences, we're going to need to focus more on what are the requirements, what are the tests I want to make sure are good, start with that and then work my way back down to given these tests, shape the data for these tests. And then we work backwards down to the data. And all that can be done with the AI.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3586s" target="_blank">59:46</a> And there's not a lick of code or notebook that I could write better than any AI at this point.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3591s" target="_blank">59:51</a> And so you're telling me then that really at this point if this is the world that we're living in, then import mode, we're burying import mode where import mode becomes the niche use case at this point. And even if you are doing import —

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3605s" target="_blank">1:00:05</a> I think import mode now just lives more in licensing. So let's go back to import versus direct lake, right? Yeah. It's more of a licensing issue than anything else, right?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3610s" target="_blank">1:00:10</a> Really? If you take the effort to data engineer in more efficient systems — let's just think of it this way, let's just say right now today, right, I got to know notebooks, I got to know Python, I got to know all the things, what is a lakehouse, how do I store the data.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3630s" target="_blank">1:00:30</a> Right, if you take all that knowledge and stack that up against I can just do it in import mode and Power Query, you're gonna obviously say most people are going to be more comfortable just starting with Power Query and going there. The bar is so low and the knowledge is already known. Adding all this other tech stack on top of it is difficult and hard to learn.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3646s" target="_blank">1:00:46</a> Let's just say what do you do when that tech stack shrinks in knowledge difference and you're almost at the same level where instead of just going to Power Query and telling it what to do, you talk to it and say I want to do this. And then I would argue all the technical hurdles that we are identifying here are actually just gone. They've melted away and we're almost at the same level as Power Query and maybe even a bit better than Power Query because now I don't have to know what buttons to build in Power Query. I just describe what I want and it just does it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3682s" target="_blank">1:01:22</a> So to me I'm looking at this going the best practice for Matthew Roach's maxim is transform the data as far upstream as possible. Will my import have transformations in it in the future? And they are already having less and less transformations right now. Import for me is almost always load a table from somewhere, put it in the report. I almost 100% do transformations outside of the Power Query.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3705s" target="_blank">1:01:45</a> And I would agree with that.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3706s" target="_blank">1:01:46</a> So we're already there on that part on that front. So then the only thing left is well what kind of licensing do you need? Do you have any issues around lag time or lead time to do data processing in something and then have another cost time delay that is now import mode?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3724s" target="_blank">1:02:04</a> So that's what you have to weigh — is it worth it to keep your model in a lower premium per user or pro user workspace? Then you stick with import. You're going to have to stay there if you're pulling data from the lake. If you want the direct lake experience, you're going to have to move the model and report into fabric.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3743s" target="_blank">1:02:23</a> And then now it's a licensing decision, right? Do we have enough size of fabric SKU to support the size model that we want? Because on those lower-end SKUs, you're getting a really small semantic model. It's like one gig. F2 through F4, maybe even up to F8 is all one gigabyte size models.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3762s" target="_blank">1:02:42</a> So, if you have small models, you can do it. Unless you want to get to those larger models, you got to start pushing up higher SKUs. So then I think it just becomes a story of how do I negotiate the right licensing and pricing for my organization.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3774s" target="_blank">1:02:54</a> Are we small? Great. We'll just go premium per user. Done. Easy. All managed. It just works. If you're a bigger organization, you're going to need to think more about this. You're not going to want to just throw a bunch of people into a very high big fabric SKU.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3789s" target="_blank">1:03:09</a> Even though you have a bigger company, it may not be the best monetary decision for you. Does that make sense what I'm describing there?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3794s" target="_blank">1:03:14</a> Here's what I'm hearing and I know we're at time — we're not burying import mode right now.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3801s" target="_blank">1:03:21</a> No, but we're making plans. We're [laughter] — we're talking to it about how are you going to take care of everyone after basically —

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3812s" target="_blank">1:03:32</a> And Microsoft's not dumb and they're not doing dumb things with the licensing, right? They're going to try and maximize their value out of whatever you're paying for. So, if they can keep this decision point in a way that says, "Look, you can start with fabric."

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3822s" target="_blank">1:03:42</a> They like it, but what they want to do as soon as your models get large, Microsoft is going to want to push you higher. It's going to want to push you into a bigger SKU because then they get more money, right, to run all the things and they're running a lot of infrastructure.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3836s" target="_blank">1:03:56</a> So, I get it, Tommy, there's definitely decisions here and I think both positions are being jockeyed, right? The user who's consuming the SKUs, they're trying to jockey for the most efficient. They're min-maxing, right? I want the max amount of performance for the minimum amount of cost.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3852s" target="_blank">1:04:12</a> Microsoft on the other hand has different objectives which is maximize revenue and minimize pain and suffering but also give a good experience. So they're trying to give you the most efficient experience at the best price but also they can't give it away for free either. They got to make something.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3869s" target="_blank">1:04:29</a> So there's this dichotomy that's getting played out here I think across these two experiences.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3873s" target="_blank">1:04:33</a> It's beautiful. Well, what a topic today my friend.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3876s" target="_blank">1:04:36</a> Isn't it beautiful? It's beautiful that we end this episode now. We are finally wrapping this up here. So, thank you all very much for listening on the podcast. We really appreciate you.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3884s" target="_blank">1:04:44</a> If you like these heated discussions, which I think this was a pretty good one by the way, let us know also in the chat if there's particular topics that you care about, topics you want to hear more about. Hey, we haven't talked about Excel in a while. Is that interesting to you? Let us know in the comments.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3900s" target="_blank">1:05:00</a> Go hit up our forums. We need to make sure that you let us know what you want to talk about. That way Mike and Tommy don't continually talk about AI every single episode from here on for the near future. Although I think it's really making moves these days. I really am liking it.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3915s" target="_blank">1:05:15</a> That being said, Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3917s" target="_blank">1:05:17</a> You'll find us on Apple, Spotify, or wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. You have a question, idea, or topic that you want us to talk about in a future episode, head over to PowerBI.tips/podcast.

<a href="https://www.youtube.com/watch?v=r_AsPpWZvEk&t=3930s" target="_blank">1:05:30</a> Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all PowerBI.tips social media channels. Thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
