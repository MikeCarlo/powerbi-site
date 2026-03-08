---
title: "DAX Performance Testing – Ep. 408"
date: "2025-03-21"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "DAX"
  - "Performance Testing"
  - "Fabric Toolbox"
  - "Tabular Editor"
  - "Microsoft Fabric"
excerpt: "Mike and Tommy dive into the new DAX Performance Testing notebook from Microsoft's Fabric Toolbox, a powerful open-source tool for automating query benchmarks across cold, warm, and hot cache states. They also cover the latest Tabular Editor releases and code actions features."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into the new DAX Performance Testing notebook from Microsoft's Fabric Toolbox, a powerful open-source tool for automating query benchmarks across cold, warm, and hot cache states. They also cover the latest Tabular Editor releases and code actions features.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/i33gY4961tk" 
  title="DAX Performance Testing - Ep.408 - Power BI tips"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Tabular Editor Blog](https://tabulareditor.com/blog)** — Latest news and insights, blog posts on Tabular Editor


## Main Discussion

Mike and Tommy take a deep look at a new open-source tool from Microsoft's Azure Data Insights & Analytics team — the DAX Performance Testing notebook, available in the [Fabric Toolbox](https://github.com/microsoft/fabric-toolbox) GitHub repo.

### What Is the DAX Performance Testing Notebook?

The notebook automates running a series of DAX queries against your semantic models under different cache states — cold, warm, and hot — and logs the results to an attached Lakehouse. This eliminates the tedious manual process of benchmarking query performance and provides repeatable, consistent results. The queries are pulled from an Excel file, making it easy to configure and scale testing across multiple models.

### Cache States Explained

The tool tests three distinct cache scenarios. Cold cache clears all caching — for Import and Direct Lake models this involves pausing capacity and clearing VertiPaq cache, while Direct Query assumes your data store lives in a Fabric workspace. Warm cache provides partial caching by priming the model with an initial query after clearing cache. Hot cache runs the query multiple times before measuring to ensure all caches are fully populated, giving you the best-case performance numbers.

### Why This Matters for Power BI Practitioners

Performance testing is one of those things everyone knows they should do but few have automated well. This notebook gives teams a standardized, repeatable approach to measuring DAX query performance across different storage modes and cache states. Whether you're optimizing a large Import model, tuning Direct Lake queries, or benchmarking Direct Query performance, having automated tooling removes guesswork and makes it easy to track improvements over time.

## Looking Forward

The Fabric Toolbox repo is just getting started — the DAX Performance Testing notebook is the first tool shared, with more community-facing tools and frameworks expected from Microsoft's internal testing team. Mike and Tommy encourage listeners to check out the repo, try it on their own models, and contribute feedback.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=30s" target="_blank">0:30</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning, Tommy. Good morning, Mike. How you doing? I'm doing well. Just clipping along. I can't believe it's the 20th of March already. It feels like it's almost over.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=45s" target="_blank">0:45</a> It's gone by so fast. And all of a sudden, we're going to be off to the MVP Summit and out to Fabric Conference that we'll be at here shortly. Well, Chicago's fooling me because just this morning we had a really nice weather last week.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=58s" target="_blank">0:58</a> My daughters, we had a walk to the bus and just like slap snow coming from the side. The bus was late. It's 20 degrees. You're like, "You thought you were out of it?" My kids had this phrase they use when this happens. It's called a false spring.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=84s" target="_blank">1:24</a> So it's like you get that one day of like 70°. It was really warm. Everything melts. You're like, "Yay!" It's summer time. All of a sudden, it's snow. You're done. It's cold again. So we're at that time of year again. You never know what you're going to get. You don't like the weather, just wait a day and it'll be different.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=92s" target="_blank">1:32</a> So that's how we roll this time. I think they said in the Midwest there's six seasons. I don't remember the fifth, but the one before spring is called the spring of deception. Yes, I thought it was a very good name. Yeah, I would totally agree with that one 100%.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=104s" target="_blank">1:44</a> Awesome. Before we get into our main topic today, let's talk about just some general news. But our main topic today will be talking about an article that came out from DAX Noob, Fabric Tools and DAX performance testing.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=118s" target="_blank">1:58</a> So this is going to be interesting, doing some performance testing on your DAX statements and what can you do in this notebook that DAX Noob is presenting. So the article is in the description below in case you want to check out his article. We're going to go through it, unpack the article here and just get a feel for what's going on here. This is really interesting.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=136s" target="_blank">2:16</a> So I like where this is going. Anyways, with that, any news items, Tommy, that you have? Yeah, I think to give a little due love, we have not really dived into it on our podcast before, but the Tabular Editor team has been doing an awesome job with finally having a nice blog and a nice documentation.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=155s" target="_blank">2:35</a> They've always had an extensive documentation, but they're always coming out with new features, it feels like. And one of the big ones is something called code actions. This actually was introduced in October. But some people may disagree. I love Tabular Editor. It is my best friend.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=176s" target="_blank">2:56</a> And with code actions that's now available to you. You also get DAX optimizer, simply going through and it's actually will look in your code or in your measure you'll basically get this nice light bulb saying hey there's something you can do here. So letting you know different actions you can do.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=192s" target="_blank">3:12</a> I think there's a keyboard shortcut, but it just gives you the highlight on something's modified, not necessarily an error. Very similar like VS Code when there's a syntax or just a formatting issue depending on the language. It's letting you know like, oh, you never reference this or there's a better way to write this and all you have to do is simply click on it and it will do the rest for you.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=215s" target="_blank">3:35</a> And these are — yeah, go ahead. No, go ahead. Keep going about the code action pieces. Because there's a lot of them that are like by default standard out of the box. You just get the new update and code actions are available but there's also a cool thing that we'll table it but you can also write your own custom ones.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=233s" target="_blank">3:53</a> Awesome. I agree with you Tommy that Tabular Editor makes a lot of things that were typically hidden and not exposed easily inside your Power BI files. The semantic model, it just gives you all the properties that you need.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=248s" target="_blank">4:08</a> Tommy, you and I were debating a lot of this in the beginning here of, could we use Tabular Editor? Is this something, a tool that we need to use anymore? I think a lot of the features of Tabular Editor where it really shines are around a lot of the automation things.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=263s" target="_blank">4:23</a> The code actions, right? Hey, you didn't know you're writing DAX this way, but you should use a divide statement. Hey, you're using a divide statement where the same statement is made two times. You should probably be using a variable to help you define what that property is, and then help you go through and make the code changes for you.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=282s" target="_blank">4:42</a> So there's little recommendations that are popping up in there as well inside the tool. It's recognizing patterns and giving you little tips or tricks to make your code easier to read or it's giving you some slight performance improvements based on best practices. So that's something that's really helpful.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=300s" target="_blank">5:00</a> I would hope in the future that's something that you can go get from like a Copilot or something else that would be helpful. I will admit though, anymore I'm more heavily using Copilot — not Microsoft Copilot inside Fabric. I just realized the other day if you put Copilot on your browser, your web browser, you can talk Python to it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=322s" target="_blank">5:22</a> And so one of the things I struggle with is like I don't have a helper or assistance in writing Python inside notebooks. Just yesterday I was doing a workshop and someone asked a question around, hey, can we use this table and make an SVG out of it and can you render it as HTML inside the notebook?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=338s" target="_blank">5:38</a> I'm like, I think we can do that. I just literally opened up Copilot, prompted it with a couple phrases and here's my data. Here's what it looks like. Build me a function that does this. And boom, we've got a function that outputs SVGs directly in my notebook right there in front of me.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=353s" target="_blank">5:53</a> And I'm thinking to myself, this is amazing, like what this stuff can do. I don't know how to write all this code, but I can read it after it's been written. This is really going to help people learn code quickly, I think. Anyways, these code helping things are very important, I think, as well in Tabular Editor.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=367s" target="_blank">6:07</a> Tommy, what else do you think about? There's another part of this too. You use a lot of scripting inside and there's nothing else that I'm aware of that lets you save scripts or have them or collect them. Tabular Editor is the only place to do this.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=381s" target="_blank">6:21</a> Yeah. Across devices and also with much context. Everything else is very local in terms of how you want it to be installed. But the feature alone for Tabular Editor, the macros are pretty incredible and all of them no matter how many you have is just stored as one very nice actual JSON file on your computer that gets converted into C# scripts.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=405s" target="_blank">6:45</a> But the breadth and width of what it can do and that I can easily copy and paste that to a different machine because I have my Surface, my PC that I have Tabular Editor on and I want things in sync. But the scripting is by far and away maybe one of the coolest things I've worked with.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=424s" target="_blank">7:04</a> I would agree with that one. So for those of you who are interested, and for those of you who are not familiar with it, if you want to go learn more about Tabular Editor, go check out tabulareditor.com. It's a really good tool. I like it. They're doing a great job innovating on the tool.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=441s" target="_blank">7:21</a> My only gripe with this one is how do you get it inside Fabric? What's the opportunity there? So that's one of my challenges here. It's all localized. It can touch models that are in the service, but I need a version of this that I don't want to install honestly.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=460s" target="_blank">7:40</a> So there needs to be something more here a little bit. I know you hate installing things. Well, here's the thing. It works with TMDL. So it works with the definition of the model file that once it gets converted into the new format. Sure. You can connect to your Fabric semantic models as well. They've done a lot of updates there.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=475s" target="_blank">7:55</a> So I get it. It's in another application on your PC and I know we all know how Mike feels about applications. It should be in the browser. It should be in the service at this point. So we'll see if the team can build this. I think there's actually a large barrier from organizations that will not let you add tools to your computer.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=494s" target="_blank">8:14</a> If it doesn't come from Microsoft, if you can't use the Microsoft tooling, you can't use the tool. So some organizations have a resistance against this. Seeing that tool eventually come to a workload would be very helpful. I think that would be a very useful thing. So we'll see what happens. I don't know what the team's doing.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=512s" target="_blank">8:32</a> But this would be, I think, a great opportunity for the tool to grow and add more capability to users of the tool. All right. Anything else? One other note here I'll point out, Tommy. Do you use the other feature from Fabric called Copy Job? Have you used that one before?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=528s" target="_blank">8:48</a> I have heard of it, but I know where you're going with this. So, well, there was a blog recently put out from Copy Job directly in the Microsoft Fabric blog. It was put out on March 18th, just a couple days ago. I really like the idea of Copy Job experiences.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=545s" target="_blank">9:05</a> You define your data mapping, you define some key columns. This is a pretty nice experience. It's very user-friendly. It's a very simple UI and it helps you figure out are you doing full copies every time? Are you doing incremental copies? And it looks like based on the blog they have something here around stream copy, which I don't really know what that is, but looks like that's a feature that they might be building out here eventually.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=569s" target="_blank">9:29</a> But I really like this feature. And this is something that I've been complaining about to Microsoft for quite a while now, which has been look, we have data. It's in tables. I should be able to easily tell you how to get that data into my lakehouse. I'm either going to bring the whole table in, do a full initial copy and then load in incremental copies after the fact.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=591s" target="_blank">9:51</a> After the fact. So to me, I'm looking at this going, this is a pretty common problem to solve. Full or incremental copies. This is important to me. The one thing I don't know how to do here is it'd be nice if it would also handle deletes.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=608s" target="_blank">10:08</a> So this is copied everything. Some data systems do not do any deletes and it's great because then they have the record never leaves. It just the record shows up and then it has a deleted date which is great. That's very nice.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=621s" target="_blank">10:21</a> But other systems actually physically delete records and that is so difficult to find in data engineering. You have to build an entirely separate process around data deletes.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=633s" target="_blank">10:33</a> I think you'd have to do something along the line of run a copy job for all the columns and then define the key columns and then here's the column that's updated date, right? That's the record you're going to use to go find the new records.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=649s" target="_blank">10:49</a> But then also you would need to do a second copy job where you're going to say grab all the keys and do a full copy every time. And then you have to join the two tables together. So that way you basically catch the deletes that way.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=660s" target="_blank">11:00</a> So it'd be nice if this system would also catch deletes as well. But anyways regardless I like the system. I like the UI. It feels very Power Queryesque to me.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=671s" target="_blank">11:11</a> I don't know if you can run it in a pipeline though. That's another part here. I wish you could run the copy job inside a fabric pipeline. I don't think you can do that. I feel it's more just the UI because it's really something that's already been available in the Synapse warehouse.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=688s" target="_blank">11:28</a> And boy, do you remember back in the day when I was just learning Synapse, when you wanted to copy something in, it did not have this pretty of a UI. So this makes it incredibly easy to do so.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=699s" target="_blank">11:39</a> You needed variables. So yeah, I get what you're saying, but it's not really a function, right? It's a feature. It's a workload. Yeah, it's a full thing. Yeah, I agree.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=714s" target="_blank">11:54</a> So all this to say is whenever you're loading data, you're going to face how do I load only the data that's changed? How do I get full loads of data in? And how do I handle deletes of records that are not coming from the source system?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=729s" target="_blank">12:09</a> Those are the things that I'm interested in. If you can solve those problems with an easy UI, this is common. Everyone does this and no matter what data project I'm on, every single one has these common problems.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=740s" target="_blank">12:20</a> Give me a UI like this that makes it easier for me. We know what we're doing. Someone should be able to efficiently figure out the best, fastest, cheapest way to do copy or things like this as well.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=751s" target="_blank">12:31</a> Another feature that I haven't, I got to be honest, Tommy, I haven't played with it as much, but mirroring looks like a really sweet option as well. A couple button clicks and it works and it just turns on and mirroring does handle deletes and updates, all the things.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=767s" target="_blank">12:47</a> So that's a lot. I'm really excited about that one as well. Anyways, those are the thoughts I have around those two blog posts. Anyways, any other final thoughts, Tom, before we move on to our main topic?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=780s" target="_blank">13:00</a> I think that's going to go in well to what we're going to dive into today. Okay. Excellent. Let's move over to our main topic. Our main topic today is coming from data DAX noob, which by the way, great website name.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=793s" target="_blank">13:13</a> I think that's just hilarious. It's almost as good as the explicit measures podcast just to say that. So punny on the puns. Okay, random side note here. We're going to get to the article from Dax Noob. He's talking about DAX performance testing inside a fabric toolbox notebook, which is cool.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=814s" target="_blank">13:34</a> Real quick tangent here, Tommy. What if one day there was a conference and at that conference everything had to be a pun? I wouldn't go. You wouldn't go. This is like a meme conference.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=830s" target="_blank">13:50</a> Yeah, it's like a meme conference. Or every single thing in the conference is dad jokes. It's like one whole big dad joke conference. I think that would be hilarious. All your sessions would have to be pun.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=844s" target="_blank">14:04</a> So if you are listening online right now and you're on YouTube or some of the other social medias too, give us your best session title, but make it a pun. And if there's enough interest here, maybe we should build our own conference.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=857s" target="_blank">14:17</a> Tommy, it would be the pun conference, data puns. We'll do something like that and then we'll have an amazing conference around all these sessions that are just based on puns.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=870s" target="_blank">14:30</a> If you could spend three days looking at gifts, memes, and other little blurbs like that around PowerBI, I don't think you would ever eat. Oh yeah, it would be. I've never seen more entertained by those things, especially on PowerBI. They're hilarious to me.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=885s" target="_blank">14:45</a> I think it's so funny. That was on 50th. You're like, "Yeah, what we should do for 50 episodes? Let's talk about the whole time on an audio format." You had a big aversion to that one, but I think it went over fairly well and I had fun during that episode.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=903s" target="_blank">15:03</a> I found there were some funny ones out there. Definitely have fun. Anyways, all right, back to the article. Dax Noob. So the article talks about giving us a brief overview, talks about the concepts inside the notebooks.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=915s" target="_blank">15:15</a> It talks about model definitions, your query inputting, building a cache state. So imagine you have a DAX statement and you want to run it multiple times. What happens when the cache is cold? What happens when the cache is warm? What happens when the cache is hot?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=931s" target="_blank">15:31</a> So has the data already been loaded for the DAX statement or is the cache cleared out and it's no longer loaded and you have to go read the data from the table? Because that makes a difference in your performance when you're caching the data or not.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=943s" target="_blank">15:43</a> He also has other options here. You can pause and resume capacities with this and then you could take the output of information and log it directly to a lakehouse, which in my opinion that's really effective.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=957s" target="_blank">15:57</a> The data will drift over time. Write some tests around your DAX statements, run them, save the results to a lakehouse, and then the next time you make changes to the model or you do another load of data, you could then again run those tests on DAX to verify that your data isn't losing something.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=981s" target="_blank">16:21</a> So this is all part of a bigger repository. It's called the fabric toolbox that Microsoft's worked on. They've always done a good job around their products building toolboxes and toolkits, but I don't think they've ever had as much fun or had the flexibility with PowerBI before to really do this.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1002s" target="_blank">16:42</a> Because now that fabric is so much more open source or there's so much more that we call code. Because really PowerBI was desktop and then in your own tenant and now this entire repository, so again this is a Microsoft repository, the name is the fabric toolbox and it has all of these features and services in here that you can start using right away.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1028s" target="_blank">17:08</a> And again to your point Mike, there's notebooks, accelerators, scripts and all you have to do is just upload those to fabric and you're really going to start running. Yes. And there's no install time. All the libraries are pretty much out there and available for you already.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1044s" target="_blank">17:24</a> You can use things like semantic link. You can use things like Semantic Link Labs. There's a lot of tools that are out there that are helping you build. So if you had to build all this from scratch, it would probably be a pain.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1057s" target="_blank">17:37</a> But the fact that people are already building tools and installable things that you can install into your notebook makes it really easy because they simplify the functions. There's a simplified function of what's going on here and it makes it much easier for you to quickly get into leveraging these notebooks or experiences.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1078s" target="_blank">17:58</a> Now it's less of a matter of building everything from scratch. You just have to understand how the existing tools work. And I really do like this performance testing that Dax actually shared here.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1090s" target="_blank">18:10</a> And what I also love too is that the community is actually contributing to this repository. It's not just only Microsoft who's putting things in here. But one of the things here is again I have this notebook.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1102s" target="_blank">18:22</a> There's a few things Mike, I want to see what you think and maybe we need to table it. But there's a lot more setup than I thought because a lot of times with repositories you can simply start using a notebook and basically let it run wherever you're downloading it from.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1119s" target="_blank">18:39</a> We're still dealing with something with fabric where I got to upload this to my fabric tenant. In this case, I need an Excel file of all my DAX queries. So running through the actual steps of this performance testing, there's actually three files apparently that you need.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1135s" target="_blank">18:55</a> I need the notebook. I need to have an Excel file that has all my queries in it, which I imagine there's a way to get that from the API or semantic link labs. But you basically need an Excel file that has for every row a different evaluation or different DAX statement.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1153s" target="_blank">19:13</a> So that's fine, but that's not really if I was in the spirit of automation like you are, Mike. So the few steps, you definitely need to really configure that before you start running with it. I agree.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1169s" target="_blank">19:29</a> All right. As I keep thinking about our pun conference that we're going to be putting on here shortly. Thank you co-pilot for giving me a couple other helps here. I'm going to go back to the article. I promise I really will come back.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1179s" target="_blank">19:39</a> So one of our sessions, if everyone is interested in this one, we should probably call one of our sessions

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1183s" target="_blank">19:43</a> Probably call one of our sessions measure twice cut once best practices and making accurate measures with performance. Okay. Not bad. All right. We'll keep, I'll come back with some more later on.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1196s" target="_blank">19:56</a> But back to our article. So in this article some items here that I think are very relevant. Tommy, think with me also about testing DAX across multiple models. So in this example here, you can actually have, let's see he's talking about, well again everything we do in notebooks can be done on a single model, right?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1220s" target="_blank">20:20</a> Here's some DAX statements. These are DAX expressions I'm going to run against that model. Now I would argue let's think about your ecosystem of Power BI. There are dimension tables that potentially will sit in many different semantic models or whatever the business is desiring to be built, maybe there's multiple fact tables in multiple models.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1244s" target="_blank">20:44</a> So if you're the data and BI team you want to make sure that your data is consistent whenever you're publishing things. Yeah. I can't tell you the number of times that we've had issues with data drift on items like, sorry there's so many thoughts in my head. There's two main thoughts I'm trying to get at right now.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1261s" target="_blank">21:01</a> Sorry, the data puns is literally throwing me for a loop here. I apologize. There's this one concept of I have multiple models with similar dimensions or fact tables in them and I'm reusing them because I'm trying to make topical models for my company and I don't think having the monolithic model works very well.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1280s" target="_blank">21:20</a> When you're in the space where you're going to give the model to end users to go consume it, it's easiest to consume a simple star model. Look, there's two fact tables. Here's a handful of dimensions. Go build. People can understand that. I think if you start giving a whole bunch of snowflaking items and you start having a whole bunch of extra fact tables and there's an invoice details and invoice header information, you're trying to put, I think at some point people get a little bit confused and the model itself becomes a little bit less effective.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1312s" target="_blank">21:52</a> So from my one side I'm thinking okay every night we're going to reload this data and I need to make sure that these two separate models are loading correctly and the data drift that we're seeing on the source system isn't impacting the number of records in those systems. For example, Tommy we want to build a test around, I want to know number of sales units by month, right?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1335s" target="_blank">22:15</a> And I know February has already happened so those numbers are locked in, they shouldn't be changing. Well, what if something doesn't load correctly or what if we overwrite some data when we're doing a reload and something's missing there? So there's this idea of like within a certain reasonable amount of tolerance, what are those prior month numbers?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1355s" target="_blank">22:35</a> And as I run the model refreshes, does the data drift, does it change? And for whatever reason, right, something could break and I could have missing data for not my fault, but something upstream of me broke and I'm not getting the data in. So there's also this idea of we want to have people trust our data. We need to produce reports at some level to verify that this stuff is true.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1380s" target="_blank">23:00</a> So this is where I'm looking at this notebook here and thinking to myself, well great. If I write this DAX statement, count number of records or count number of records group by customer ID, something along those lines or some simple aggregation. I could run that analysis across multiple models and get back the same results and then I can confirm with 100% certainty I'm writing the data to my lakehouse.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1405s" target="_blank">23:25</a> I can perform tests on it and in part of my process I can do data quality checks and I can report back out to people. Here's all the tables we have. Here's customer data in model A, customer data in model B. Look, they're the same. You can then now verify to your customers, hey, this is all good stuff. There's trust now. I can give people more trust because they can see the results of their test.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1430s" target="_blank">23:50</a> I think this is the thing that people have honestly that I've had the hardest time with, verifying with others in Power BI where they're like, okay, how do I — they were thousand percent sure that last week one of the numbers was one thing and now it's completely off. And it might have been a model that you might have not touched either. You haven't gone through and edited but something in the output of the data affected it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1457s" target="_blank">24:17</a> But again who's that on, like when that does happen, because this always happens, we can't go back in time and normally look back and see what, okay on February 5th what was the state of the semantic model. Even if I have the formulas and definitions that's a huge problem because the only answer that we had was you can do a subscription and you could get an email every day. But that still doesn't show you, to your point, just show me that sum of the sales as it was on that day.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1491s" target="_blank">24:51</a> And so that's a huge thing. But Mike, to your point, you're talking about this and this has always eluded us, but you're saying this is in the fabric toolbox.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1498s" target="_blank">24:58</a> Yeah. Well, the toolbox is telling you to run, hey, here's models, here's their configuration, right? It's running DAX statement against it and it's executing, it's outputting a result. So the notebook comes back with logs. Here's the statement that you're going to make. Select something from this and then boom, here comes output.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1518s" target="_blank">25:18</a> But you can run the test now. It's like I can evaluate, I can run the evaluate this row or this summarize statement, right? Inject the DAX directly in there and boom, it will run that DAX statement and return the results. So that's what you want. You want those results coming back out and that's the useful part of this.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1535s" target="_blank">25:35</a> It's the idea that now this is potentially something that we can start automating. So to me now this is like yes this is DAX performance testing and we can always run DAX against the model and I'll still probably concede that right now today the DAX studio is probably by far the best tool out there for doing performance testing on DAX.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1558s" target="_blank">25:58</a> I still think it is. It gives you the formula engine and the storage engine and that's really what impacts a lot of, from my understanding that's a lot of what I'd use notebooks now in semantic link labs. You can use VertiPaq analyzer or VertiPaq, which is cool. Again one more reason why I don't need tabular editor or DAX studio, I can just do it in a notebook.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1582s" target="_blank">26:22</a> So that's again that's to me that's a check in the box for notebooks, can just do it for free and not have to go download extra software. So I like that, I'm going to always err on the side of does it come with the actual tool itself.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1596s" target="_blank">26:36</a> So from that, like looking at cardinality of columns, that information is already given to me directly from there and again I can't save DAX studio results back to a lakehouse. I can't save tabular editor results to the lakehouse or other outputs. So on one hand I like the notebook experience better because if I go do some analysis on things I can start saving those off.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1618s" target="_blank">26:58</a> Think of it this way. Let me give you another color here. The VertiPaq analysis that you get from notebooks, as your data changes over time, you can continually update those records and you'll get a new version every time you load the model. You can always save off how much cardinality is coming and then you could look at anomalies and does any one column ramp up in cardinality quickly? Did something change?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1643s" target="_blank">27:23</a> So again, this is I'm trying to think about sustainability too here. Anyways, that's where my mind goes.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1648s" target="_blank">27:28</a> And that's all so, one I do love that and well and good that you can now do VertiPaq analyzer in a notebook. Mike I'm always going to go back to this where and I really wish people would respond to us, but please if you had this problem put it in the mail bag so we know where everyone stands.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1672s" target="_blank">27:52</a> But if you are already well-versed in notebooks this is what a win. Check the box. Great. But don't even go to this whole like you don't know how to do it, copilot, like I was just there the other day. I just told you that my example, I don't know how to write SVGs and DAX, I just, you have an F64.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1689s" target="_blank">28:09</a> So no I didn't even use it, I'm telling you, you didn't understand my comment. I went to copilot in the browser, I didn't even use copilot from Fabric. I'm literally in the Fabric notebook right there and I go to copilot in the browser which is free by the way and said write me a Python function that does this. I don't even need to pay for F64.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1708s" target="_blank">28:28</a> For whatever reason I've missed this whole point, like I can just go to my browser window and just open copilot up and just copy code in. I mean you can do the same thing with OpenAI, open another browser tab, talk to, open your sidebar. I do that all the time too. Part of it you want the copilot because it's more integrated but anyways.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1727s" target="_blank">28:47</a> No that's fine, that everyone can do copilot to just get started. But here's the thing Mike, if you're going to DAX studio because you need to evaluate your queries and you're from the Power BI world, you're already well-versed in DAX and you know what you're doing well and writing functions I would argue.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1746s" target="_blank">29:06</a> Yes. So how far away, so Python has a slightly different syntax on a couple things versus what DAX is doing. Like you're already writing code. So my argument is writing Python is not that much farther of a step beyond writing DAX code for someone who does Python now every day. And I feel like I have somewhat a leg to speak on here because I was at a point where I didn't do any Python.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1774s" target="_blank">29:34</a> It was all PowerBI. Sure. And then I started making the journey. It's different. I don't know if that's such a seamless transition because really the whole fabric toolbox is notebooks more or less in scripting.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1793s" target="_blank">29:53</a> Yes, correct. It is. I would agree with that. And I'm okay with that though. No, and I love it too, but we don't have to keep touching on our Python versus — I'm just waiting for you to come around to some point here. You'll just figure it out and you'll just come along for the ride.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1811s" target="_blank">30:11</a> You'll be like, "Yes, this is what we want." Listen, I love notebooks. I love Python. I do it all the time. I know all the extensions. Great. But I'm saying for PowerBI users, PowerBI pros, it's like, well, I could do a DAX queries statement because I'm already in the DAX mode of thought. Now I have to go to a notebook.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1831s" target="_blank">30:31</a> Anyways, so I'm going to change gears a little here with the toolbox because there's — we're barely touching on all the things available. What do you think they're trying to do here with fabric toolbox? I don't know how familiar you are with the power platform solutions at all.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1851s" target="_blank">30:51</a> Not really. I spend most of my time in fabric and PowerBI, that's my main world. I don't do a lot of power apps or other power things. Not just canvas apps but just business records, basically how business is run.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1864s" target="_blank">31:04</a> They basically you can package all the components and it's incredible how they actually set it up. And this is old dynamic ways and now you can bundle it, run and then just upload it and you have all these apps and automations for your business.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1880s" target="_blank">31:20</a> I think Microsoft, I think the team at fabric realized too where it was really almost impossible when it was just PowerBI to do anything like that where you could actually upload something and change something in your tenant or configure something in PowerBI because it was really just PowerBI desktop and your model and that tenant.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1898s" target="_blank">31:38</a> And I feel like this is their attempt with the fabric toolbox because again especially if you go through some more of the different things that are in here like different automation, CI/CD, there's a ton of things that would just completely change how I use fabric here.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1916s" target="_blank">31:56</a> So I think this is their take at trying to do these solutions that's so common in other Microsoft products. So you can take a fabric PowerBI data mart and move it right to the fabric data warehouse. That's a mailback question we had. Here's the script to do that.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1937s" target="_blank">32:17</a> Now if I want to take my data mart and just start running with it. That's my point though. So I think again I'm going to harp on you here a little bit Tommy just because I think the value to learn Python is so immense at this point.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1951s" target="_blank">32:31</a> And the amount of content I'm seeing, just look at the content that's coming out from the community, right? DAX tools, all these notebook experiences, semantic link labs which is an unsupported project from Microsoft that does a bajillion things around all these — I'm finding immense amount of value of this stuff.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1969s" target="_blank">32:49</a> So the more I look at this, man, if you don't learn Python and notebooks, you're missing out on a huge amount of time savings for yourself. So it's all you have to do is learn it. There's no cost to it other than the fact you have to cost compute units to run it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=1984s" target="_blank">33:04</a> I'm becoming as we're even talking about this conversation, Tommy, I'm becoming more and more convinced this is going to be a must-have in the next 6 months to a year of anyone that's in fabric development. You will need to know how to use notebooks and become substantially proficient at writing Python and using Python to do things because that's where a lot of the automation's coming from.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2005s" target="_blank">33:25</a> Automation saves you time and money. It's just good. It's huge. Well, here's the difference. And tell me if I'm mistaken or if I'm wrong about this. But all the notebooks here, I can't run them locally from VS Code. I have to upload this. It has to be in a fabric environment, right?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2024s" target="_blank">33:44</a> I can't use the synapse or the fabric extension in VS Code, right? I believe that's true with anything that's gonna touch fabric still from a notebook. Like if I have a fabric notebook, these notebooks in the fabric toolbox, if I want to run it, I have to upload that document to my fabric workspace in order to do so.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2046s" target="_blank">34:06</a> I can't run this from a normal Jupyter notebook where you could run it from your local machine. Yeah, you can as long as you're connecting to the Spark cluster that's inside the service. So you can remotely run notebooks from VS Code, right? So you have to go create a notebook in the service, connect to VS Code locally and then you're remotely connected to the Spark server that's inside the machine.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2072s" target="_blank">34:32</a> And then you can run these notebooks locally, but you're running them remotely to the machine that's inside Fabric. So yes, but you can't, to your point, right? If you were going to run the notebook on your own Spark environment on your local machine, the answer is no.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2087s" target="_blank">34:47</a> You can't do that because then you'd need to connect to the service and obviously authentication. There's also some really tight integrations that come between Semantic Link Labs or Semantic Link and the models that make it easier for you — if you use it in the service, it just automatically connects and authorizes you.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2106s" target="_blank">35:06</a> Right. My argument here is you can probably still do it. It can still work on local. You just have to change the code. The standard stuff that Microsoft's building or fabric tools, they're not able to be used right out of the box. You have to do some custom authentication inside the notebook to then authenticate who you are and then you can run the notebook against APIs that are in the service.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2128s" target="_blank">35:28</a> And that's the thing. We already got to upload them. I can't just test any of these out. These have to be saved in my fabric tenant in order to run it. Yep. So I think that's the next step. But I don't think — again my opinion here, that's not a big barrier at this point.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2145s" target="_blank">35:45</a> Okay. Are you doing any of your notebooks in VS Code at all? I was exploring VS Code locally a bit more in my notebooks just because I wanted to use GitHub Copilot right inside my experience of code.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2162s" target="_blank">36:02</a> Great, good experience. But now I just figured out you can use Copilot right next to my notebook in the service using my browser. I'm like, well then I don't need that anymore. So I've gone back to just using the service and only for notebooks. I don't mind it. It's gotten a lot better.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2177s" target="_blank">36:17</a> So the last conference I was at with Ben Ferry. We were doing a conference around a precon around DB in a Day. So we're doing a detailed DB in a Day experience. And the realization we both came away with was many many people at the conference were all talking about doing things with notebooks.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2197s" target="_blank">36:37</a> Administration things with notebooks. Yeah. Oh yeah. And Ben was like, I think from five different people he said I heard people touting the capabilities of what notebooks can do and he goes I really need to learn notebooks. This is going to be my takeaway from this conference, that's a thing that I need to learn.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2211s" target="_blank">36:51</a> So I'm even hearing the community start really ramping up noise about this and making a lot of very useful tools inside the notebook experience. I think the challenge that will come from notebooks here in the near term is there's going to be so many tools you're going to need to figure out what's the right one for your needs.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2232s" target="_blank">37:12</a> Yeah, that's going to be the new problem. There's going to be so many options to do things. How do you find which one is the most performant or does all the features that you want? Is there a comprehensive look of all these different tools that are out there and which ones can do what and which ones can't?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2245s" target="_blank">37:25</a> So some things semantic link labs can do that senpai can't do and fabric toolbox does some performance testing on DAX but can you still do that somewhere else? Configurations you may want to change on where you want to save it or you want to see it a different way — what are the options available?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2263s" target="_blank">37:43</a> So no, I completely agree. And Mike, honestly from an admin point of view what was your alternative? It was PowerShell. So yeah, that's a pretty easy transition. Seriously. Yeah, not a fan of PowerShell. I get people do it and write a lot about it, but I'm just not a fan. I don't use it enough. That's not my default go-to.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2280s" target="_blank">38:00</a> I want to use less Microsoft specific things like PowerShell. I would agree. So Mike, as I'm going through this with the example here with the DAX tester and also some of the other tools — again, the fabric management, the performance testing, the semantic model audit.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2301s" target="_blank">38:21</a> I think one thing that I'm hearing you speak to a lot is more than just I can do this, I can run it once — is that I think you're seeing the value too is I can also then output this somewhere and save it somewhere and store my results or what I'm trying to do.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2319s" target="_blank">38:39</a> Because really any other time we've dealt with a PowerBI API, again with PowerShell or something else. So it's like I can quickly get a pull statement, get some data and see it in a terminal but I'm not storing it somewhere localized or centralized. And you mentioned that a few times.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2338s" target="_blank">38:58</a> So do you see the toolbox not just for the personal user or the personal modeler but for a team? Yeah. Oh yeah. In the notebook experience you're talking about. So you mean like running tests and then running them back down like a common — I would agree. I don't think this is for the single developer.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2357s" target="_blank">39:17</a> Also if you think about what your team can do, there's always going to be someone in your team that really gravitates towards this technology. I think there's going to be someone in there that's going to understand it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2364s" target="_blank">39:24</a> They're going to understand DAX performance testing or even now, right? Look at your team in companies today. There's someone who's doing a lot of model work and they're learning a lot of things about modeling.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2394s" target="_blank">39:54</a> So they're probably your expert in data modeling experiences already. This is a tool that I think I would easily give to that expert modeler and write down a list of common features or functions or what tests are we going to do on our models.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2412s" target="_blank">40:12</a> So when something goes south and the model becomes slow or we're running a table of data coming back from a report or something like that, why not use a combination of hey I'm in desktop, I'm going to do a little bit of performance analyzer.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2407s" target="_blank">40:07</a> I can see which visual on the page is slow. I can take that DAX out and bring it right over to DAX toolbox or the DAX performance testing, run it there, and then I can tweak the code.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2421s" target="_blank">40:21</a> So then I can go back in and say, okay, where are my functions coming from? What should I adjust? Is there anything I can do to make the performance of this DAX faster? What part of my DAX is slow?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2450s" target="_blank">40:50</a> And maybe that means I need to go make a model change. So to me, I'm looking at this going that expert of data modeling and DAX elements, they should definitely be using this because they're going to find common problems with multiple models they're interacting with.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2485s" target="_blank">41:25</a> And people are going to come to them with issues. So having a single notebook and say, "Okay, let me just point it at my model and just go and it just gives me a whole bunch of details." Now you've done maybe 30, 40, 50% of the work that you were initially going to go look at the model. It could just do it all for you.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2464s" target="_blank">41:04</a> So when I do a lot of Power BI adoption or the advisory, one of the things that we always focus on first is getting the audit log and getting that stored somewhere. Especially for organizations who are just starting off.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2496s" target="_blank">41:36</a> And I tell them as soon as you can, get me a developer, give them the prereqs. But the sooner the better that we can start storing and collecting the activity data in Power BI with all these things here with the notebooks.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2518s" target="_blank">41:58</a> Because to a layman these may seem like all maturity level of 400 plus to start using this or for a team. As I'm thinking about this and I'm going through the journey of an organization moving to Fabric because that's going to be the next five years of our life, just organizations that are probably just moving or transitioning to Fabric.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2558s" target="_blank">42:38</a> So at a certain point in time it needs to be, I don't want to say required, but it's going to be probably recommended to start using these notebooks and actually pushing that data, your performance, your evaluations, and to your point from the drifting to also just our best practices.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2580s" target="_blank">43:00</a> And now we can actually get a comprehensive view. What I'm trying to go through in my head is at what point does this get introduced to a team and then at what point is this something where we should really look at this, to we needed to be using this yesterday.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2601s" target="_blank">43:21</a> Well, I guess part of this I look at this going, when are you really starting to tune models? When are you really running DAX to like, okay, does the performance of your queries really require understanding what does it look like from a cold cache?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2636s" target="_blank">43:56</a> What does it look like from a warm cache? What is the hot caching doing? So there's other things here that I think are very nuanced to when you're testing and performance tuning DAX statements.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2649s" target="_blank">44:09</a> Tommy, we can write the same DAX statement three different ways and get the same result. Some of them are more efficient than other ways of doing it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2677s" target="_blank">44:37</a> So one thing here though, it'd be nice if this tool gave you, this almost feels a little bit like the tabular editor, the code actions. This potentially with a little bit of work here, right? Why not run the DAX statement against something here?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2714s" target="_blank">45:14</a> Code actions. From what I understand, code actions are simple things like, hey, you should use a divide statement here instead of using the same parameter twice. This tool doesn't quite give you that yet, but there's nothing that says they couldn't be adding that as part of the function library of this open source library.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2749s" target="_blank">45:49</a> So run this DAX, it could use a little bit of logic behind the scenes of, hey, this is a good pattern in DAX, this is a bad pattern in DAX, and it could provide some recommendations about it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2764s" target="_blank">46:04</a> And it does allow you to input the query information, and then it lets you save the data out. A lot of these other tools that do performance and DAX, it's much more difficult to run DAX from Tabular Editor or DAX Studio and save the results in a place where you could then check them every time you run a model.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2798s" target="_blank">46:38</a> So for me, I think this is very interesting. Imagine you're doing a pipeline to load data into your semantic models, right? You have the pipeline runs the copy activity or copy data job and then now you have data in your lakehouse.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2835s" target="_blank">47:15</a> Then you run some notebooks to do bronze, silver, gold, right? Well, this is just part of a notebook. This notebook can be triggered as part of your data loading process which means those DAX statements are automatically getting used and tested while you're loading your data.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2868s" target="_blank">47:48</a> So you've loaded the semantic model, you can check these things, check out your data drift. This query comes right back and now you can have the performance of that query over time. So back to your question originally Tommy, when do you introduce this?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2901s" target="_blank">48:21</a> I think you start introducing this tool to people when you're at a scale where you're having problems with production and things are falling over because people aren't catching errors. So you need some more automated testing.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2937s" target="_blank">48:57</a> You use this when your team gets a little bit larger and you have mission critical reporting that you can't have fail. So to me that's where I'm starting to apply this to those experts in my team when we start having certified content that needs to be updated and we can't have failures on it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2974s" target="_blank">49:34</a> So that's maybe the decision point. They're probably already doing this to some level anyways. It's just not in an automated and in a notebook fashion.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2963s" target="_blank">49:23</a> And I think that makes sense too because I think there's a lot of this here you could see being part of just a daily routine or just part of the normal cadence for an enterprise team, right?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2997s" target="_blank">49:57</a> I think there's a lot here that is, I don't want to say it's meant for enterprise, but it makes the most sense when you're dealing with a large amount of data and a large company. But there's definitely those use cases too there for a mid-sized team or even solo or one or two people.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3037s" target="_blank">50:37</a> I think the biggest thing, and this is where I'm trying to work, a lot of these are cool, awesome. But I think a lot of things we have done in Power BI, there's been some automation but there's been a lot of one-offs, like well I need for this semantic model to do this.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3074s" target="_blank">51:14</a> I think the only time I wanted to do something globally to every single model was, I don't remember who generated the best performance optimizer in Power BI, but there's this PowerShell script that would go through all your models and run the best performance optimizer through PowerShell.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3110s" target="_blank">51:50</a> It took hours, but it was incredible. And it was stored to some local file. That was neat. But I think a lot of these are very big. We're focused more on use cases right now, especially the semantic model audit, copy of the warehouse.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3152s" target="_blank">52:32</a> Not so much on like, hey, we're just going to let these things run. To your point, I see there's a lot of potential here to create start it and run it and let it go types of solutions. But right now, I think there are still a lot more one-off types of features in the toolbox.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3170s" target="_blank">52:50</a> I think you're right. Again, this is all if you think about this, these are, and if you go back to the repo, this is Fabric Tools, right? So Fabric Tools, this is coming from Microsoft. This is a Microsoft developed repo coming from aka.ms/toolbox.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3189s" target="_blank">53:09</a> So there's a lot of other things in here too. So if Microsoft is finding this valuable enough for them to build these tools, there's a reason why they're building this stuff. They want you to go here and use this information.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3223s" target="_blank">53:43</a> Because other organizations, think about what Microsoft does. They have hundreds of customers to serve with probably a lot of the same problems. My DAX is slow. This doesn't work right. This thing keeps falling over. I can't refresh these things.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3256s" target="_blank">54:16</a> These common problems are there. So what Microsoft is doing instead of going in and solving one problem at a time, they're going out and building tools or tool systems that you can then give out to the broader community and say, "Look, go use these things."

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3289s" target="_blank">54:49</a> These are tools that multiple Microsoft people are building for you that you can go use to help you become more efficient. So if Microsoft is putting this out, it means there's a need for it. Someone's got to figure this stuff out.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3301s" target="_blank">55:01</a> That's where I'm going with a lot of this. This is making a lot more sense to me now that I'm looking at this in the lens of new tools that Microsoft is producing. So you can get information out of here. As a side note, I'm looking through the actual Fabric toolbox.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2956s" target="_blank">49:16</a> Through the actual fabric toolbox. There's a lot of other tools in here that are new as well. They have Gen 2 dedicated pool, fabric DW2 table copies, semantic model audits.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2970s" target="_blank">49:30</a> They also have some other ones. Copy warehouse. I don't know what TPCH benchmarking is, but that's something that's in there as well. Then they have the DAX performance testing.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=2999s" target="_blank">49:59</a> There's a lot of other things that are coming out here that I think are really useful. They also have a number of accelerators. CI/CD, git based deployments, deploying fabric pipelines, talking about real-time intelligence in the event house, real time intelligence in the event stream.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3016s" target="_blank">50:16</a> These are really good, I think, examples and pieces of code that we can pick from that really help us out. I thought we were looking at the same one and one of the really cool ones, I don't know if you saw the visualizing linked table data flows.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3034s" target="_blank">50:34</a> Yeah, that looks awesome. But this is my point though, these are little tiny things. To your point Tommy, this could be very useful for that professional developer of models. Again, a lot of these notebooks, if you stitch a lot of these little ideas together you can build a singular notebook that actually does a lot of work for you before you even do anything.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3072s" target="_blank">51:12</a> You can automate a lot of these. Let's visualize the table relationships inside semantic link labs. I think you can even link up to the traces of the semantic model. So you can actually have the traces, connect to the semantic model and then connect to the traces and have them showing up inside a notebook.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3094s" target="_blank">51:34</a> Again, if you're watching your semantic model do a refresh or you don't know what's going on with it or something's running slow, you can tap into those traces, collect the data. And if I go back to the project here, Tommy, one more time, for what Microsoft is describing here is at the end of this article, it talks about why is this important? Why use this notebook?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3132s" target="_blank">52:12</a> It describes you get consistent testing. It's scalable. You can run as many queries as you want, as many times as you want. It gives you centralized logging so everything can come back down to your lakehouse. And it gives you versatility.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3147s" target="_blank">52:27</a> So you can do different testing of different DAX measures comparing the performance or the impact changes of those. You can compare performance across different storage modes of models. Import versus direct query versus direct lake. See which one works better because those are all going to be there.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3182s" target="_blank">53:02</a> There's so many options to do something now. It'll give you information to make decisions on what you need to build. So I really love this. I think this is a super cool tool. I think we need to talk about more of these things because I think this is general knowledge that people should just know at this point.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3199s" target="_blank">53:19</a> Dude, half this stuff I didn't even realize was in here. And here's the thing. There's a good amount of actual fabric repositories out there, not just from Microsoft. This was the thing that honestly I was maybe one of the more excited when we started seeing what fabric was going to be.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3217s" target="_blank">53:37</a> It was like oh, this is all things that can be easily converted and shared with users and open source, because we're dealing with notebooks, you're dealing with these scripts, it's a very common way to share and distribute. And again that was just not something available to us in Power BI because it's still binary or you need a Tabular Editor.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3258s" target="_blank">54:18</a> But there's still nothing like, hey, I'm gonna put this out into, we had the macros. You have the repositories. It's the most popular macro repository for Tabular Editor. But you still have to copy and paste it in. You can't start running with it.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3290s" target="_blank">54:50</a> Correct. And how can we build tools that remove friction like this? This is one of the reasons why I love semantic link labs because it's like pip install semantic link labs. Boom. I'm off to the races. Let it run for 10 seconds. My notebook's up. We're ready to go. Let's run.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3308s" target="_blank">55:08</a> So to me that's a lot of really exciting things there because it's all just very easy that way. So anyway, I really like that. Awesome. So I guess going from here, this may be the rest of my day or we just going through some of these.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3326s" target="_blank">55:26</a> Where do we go from here? Well, I don't know. We'll see where the toolbox goes next. I would say definitely check it out. Go get the toolbox today. You want to go check out this one, DAX Performance. There's some really good examples.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3357s" target="_blank">55:57</a> I think it's actually got a really good getting started example. Go here, upload the notebook, connect your lakehouse, and then you can add an Excel file with the DAX query in it. So you can then automate the load of that information. It's a pretty good example.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3391s" target="_blank">56:31</a> I'd recommend go read the blog, check it out, see if this helps you out a little bit. Start thinking about automation. I just want to get your mind around though, this is a performance tool to help automate. So as you're learning DAX, as you're building better DAX with your models, this is going to be a tool that you're going to want to use to keep testing different patterns in DAX.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3432s" target="_blank">57:12</a> Different ways so you can get a better feel for when you're writing good DAX and when you're not. Because sometimes it's a bit of a learning curve with DAX. It's easy to start, simple to write very basic measures. But often I think people, there's a trend that I see when you come at DAX as a SQL developer, you build your semantic models differently than if you just learn DAX from scratch without having a whole bunch of SQL background.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3464s" target="_blank">57:44</a> And so I think sometimes I can look at the semantic models and I can see, oh you come from a SQL background because your DAX is incredibly complex and your model is not simplified enough to make it easy for people, easy to aggregate things.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3497s" target="_blank">58:17</a> So there's a balance between shaping the tables the right way to get your DAX to be simpler. And I think SQLBI does a good job pointing this out. If your DAX gets really gnarly and super difficult, your model shape is probably wrong. You probably want to think about a different shape of data tables and then that will make your DAX simpler and give you the answers that you want without having to write a bunch of extra DAX.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3540s" target="_blank">59:00</a> Because sometimes DAX is unpredictable if you really don't know what you're doing. So anyways, all this to say, good notebook. I would say read the article, get started there, download it, start running it. It'll give you really neat tests. See what you think, see if it actually works well for you when you're using the test there.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3577s" target="_blank">59:37</a> Anyways, I believe the post was made by Justin Martin on DAX Noob. Just want to give a big call out, thank you Justin for all the awesome content you produced. Anything else Tommy? You got any other final thoughts?

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3593s" target="_blank">59:53</a> No, I love this. I absolutely love the open source part of this. I love all the different applications and I'm excited to see too what happens with the community as this begins to pick up as well. This is exactly where I live, man.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3608s" target="_blank">1:00:08</a> Well, as we wrap here, if you have any punny or any puns for data sessions for our new conference that's coming out, it's not a real thing, it's totally fictitious. But if you do have any other conference names, I saw some really good ones in the chat here.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3643s" target="_blank">1:00:43</a> I think John Kursky gave me a couple here. He said one called Pandemonium, learning pandas inside fabric. That would be a great one. I'd like that one a lot. Pandemonium.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3672s" target="_blank">1:01:12</a> Anyways, if you have other session titles, please put them in the chat window. You never know, maybe someday there will be a DAX pun related conference or a data pun related conference at some point. Maybe Tommy and I will get bold enough to put one on. I will be supporting you in spirit.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3709s" target="_blank">1:01:49</a> Excellent. That being said, thank you all very much for listening. We appreciate your time today. I hope you learned a little bit more about DAX. I hope you learned a little bit more about this toolbox. There's a lot of other things here that you may want to check out. Go check out the fabric toolbox and you can go find that at aka.ms/fabric toolbox.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3751s" target="_blank">1:02:31</a> I'll put that in the chat window just in case you want to go check it out. There's a lot of other tools above and beyond just the one that we talked about today. There's a lot of new tools coming out. You should check it out.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3780s" target="_blank">1:03:00</a> That being said, we appreciate your ears. We know that there's a lot of things that you are doing throughout your day. We appreciate you paying attention to our podcast and giving us your ears for an hour. Hopefully it was entertaining and you learned something new, or you didn't, or you thought of a bunch of puns that were not even relevant to your normal day job.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3814s" target="_blank">1:03:34</a> Whatever it is, it is. It's entertainment as well as informational. So we're just trying to blend that line between both. That being said, thank you for your time. Please let somebody else know if you like this podcast. If you found this was interesting or fun or the things that we're talking about is impacting your daily job, we'd love to hear from you.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3855s" target="_blank">1:04:15</a> Please let us know in the chat, in the comments, and let somebody else know you found this to be valuable as well. Tommy, where else can you find the podcast? All right, you can find us in Apple, Spotify, or wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3889s" target="_blank">1:04:49</a> Do you have a question or idea or a topic that you want us to talk about in a future episode? Head over to PowerBI.tips podcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all PowerBI.tips social media channels.

<a href="https://www.youtube.com/watch?v=i33gY4961tk&t=3925s" target="_blank">1:05:25</a> All right, on my last note here, David from LinkedIn, thank you so much. David just said his session title will be DAX to the future. Come on. This is good. It makes you laugh. All right. Well, good. With that note, I'm going to end on the awkward dad jokes. Thank you so much. We appreciate you all so much. Have a great week and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
