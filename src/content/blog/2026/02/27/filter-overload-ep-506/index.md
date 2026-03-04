---
title: "Filter Overload – Ep. 506"
date: "2026-02-27"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Power BI"
  - "Microsoft Fabric"
  - "Input Slicer"
  - "Feature Summary"
  - "FabCon"
excerpt: "Mike and Tommy dive into the February 2026 feature updates for Power BI and Fabric, with a deep focus on the new input slicer going GA and what it means for report filtering. The conversation gets into filter overload — when too many slicers and options hurt more than they help."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into the February 2026 feature updates for Power BI and Fabric, with a deep focus on the new input slicer going GA and what it means for report filtering. The conversation gets into filter overload — when too many slicers and options hurt more than they help.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/bs2ZazYRZkI" 
  title="Filter Overload - Ep. 506"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- [Fabric February 2026 Feature Summary](https://blog.fabric.microsoft.com/en-US/blog/fabric-february-2026-feature-summary/) — Microsoft's February 2026 Fabric update brings enhancements across the platform including OneLake Catalog improvements, Data Engineering updates like enhanced notebook version history, and more. With FabCon weeks away in Atlanta, this release sets the stage for what's coming next. Free Fabric certification vouchers are also available through February 28.

- [Power BI February 2026 Feature Summary](https://powerbi.microsoft.com/en-us/blog/power-bi-february-2026-feature-summary/) — The Power BI-specific February update includes smarter Copilot and AI experiences, more flexible report interaction options, polished visuals, and modeling enhancements. Notable deprecations include hierarchies in Power BI scorecards and SSRS/PBIRS management packs in SCOM.

- [Input Slicer: Filter Reports and Collect User Input (Generally Available)](https://powerbi.microsoft.com/en-us/blog/input-slicer-filter-reports-and-collect-user-input-generally-available/) — The input slicer (previously the "text slicer" in preview) is now GA. It lets report consumers type or paste values directly into a slicer to filter reports — no more scrolling through endless dropdown lists. It supports multiple filter values, partial text matching, and can even collect free-form input for translytical workflows like comments and data writebacks.

## Main Discussion: Filter Overload

### The February Feature Drop

Mike and Tommy break down the highlights from the February 2026 feature summaries for both Fabric and Power BI. There's a lot packed into this release — from platform-level Fabric improvements to Power BI-specific visual and modeling updates. The conversation touches on what's actually useful day-to-day versus what's more of a roadmap signal.

### Input Slicer Goes GA

The big headline this episode is the input slicer hitting general availability. Mike and Tommy dig into what this means for report design — being able to type values directly instead of picking from dropdowns is a game-changer for reports with high-cardinality fields like order IDs, customer names, or product codes. They discuss the practical scenarios where this shines and where traditional slicers still make sense.

### When Filters Become the Problem

The core theme of the episode — filter overload. Mike and Tommy talk about the common trap of adding too many slicers and filter options to a report page. Just because you *can* give users every possible filter doesn't mean you *should*. The discussion covers how over-filtering leads to confusion, performance issues, and reports that nobody actually uses effectively. The takeaway: thoughtful filter design is just as important as the data model behind it.

## Looking Forward

FabCon is right around the corner in Atlanta (March 16-20, 2026) and the guys encourage everyone to check it out. With the February feature drops landing, there's plenty of new functionality to explore and discuss. Use code FABCOMM to save $200 on registration.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=0s" target="_blank">0:00</a> Kings feel the crowd. Explicit measures. Drop it loud.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=14s" target="_blank">0:14</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Hello everyone and welcome back to the show. I still love the intro. Good morning Mike.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=21s" target="_blank">0:21</a> The intro is good. It's really solid. Super fun. I do the whole song. I actually do listen to it fairly frequently.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=31s" target="_blank">0:31</a> And also, I've been the a couple episodes ago, we shared the other song, Expense It. Another one that I think it was another banger from Carlo Solutions as well. So, it's throwing some heat.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=43s" target="_blank">0:43</a> Both those songs are now out on Spotify and they're fun to listen to. I've actually got a whole litany more of songs that I want to release here pretty soon.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=50s" target="_blank">0:50</a> And so I'm probably going to do a monthly batch release of a couple songs or things that I'm noodling on or work music that I'm building that I work to. So we'll see what happens.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=60s" target="_blank">1:00</a> I don't know. That Expense It song, that beat, that chorus is so catchy.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=66s" target="_blank">1:06</a> Catchy. It's so catchy. It is so catchy. So that one I'm like this could be something. I'm thinking to myself, yeah.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=73s" target="_blank">1:13</a> Awesome. Today's topic is called filter overload. Let's talk about where your filters should live on the report in the pages, other places you can apply filtering. What does this look like and how should we start unpacking what this looks like?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=87s" target="_blank">1:27</a> This actually comes from a mailbag question. So individuals have some comments around this one. So this is a great question from the audience. This is you. So this is actually you participating.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=96s" target="_blank">1:36</a> So we really want to encourage you go to PowerBI tips podcast. Make sure you jump over there. You can fill out our mailbag on the PowerBI tips podcast page. We have a question area where you can add your own questions. Say hello to us.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=111s" target="_blank">1:51</a> Ask us what you want us to talk about for the show. You've been coming up with great stuff. I really encourage really really like this. It's a lot of fun.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=117s" target="_blank">1:57</a> All right, that being said, before we get into the main topic, we have a lot of news articles coming out. There are some announcements from Microsoft blog, the Fabric blog, the PowerBI blog. And we have some general availability, I think, of a very appropriate topic as well.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=134s" target="_blank">2:14</a> Tommy, kick us off. What do you want to start with?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=135s" target="_blank">2:15</a> So, I think we start with our favorite thing to my favorite thing to do is our draft. And it's funny when we say there's a lot of news updates. Really, that just simply means that the Fabric blog came out with their monthly update because five pages.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=149s" target="_blank">2:29</a> I'm always amazed, still amazed how many updates they have in a given month for what's going on and we miss January's. January's was okay, but this one is feature-packed and I think it's probably best with how it is.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=164s" target="_blank">2:44</a> Let's start with our draft and we'll go ahead. We'll go back and forth. You pick your favorite, don't pick mine, and we'll go from there. So, I'll kick us off, Mike.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=173s" target="_blank">2:53</a> Hey, kick us off, Tommy.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=175s" target="_blank">2:55</a> This one's near and dear to my heart. I don't think this is a normal blue chip prospect, but this is one of those where I knew a player like this back in the day. I knew the skill.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=186s" target="_blank">3:06</a> And it's interesting that they came out with this. It's the ODBC driver for Fabric data engineering. And this is something for a lot of companies still utilize is ODBC drivers.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=200s" target="_blank">3:20</a> Simply allows one lakehouse data environment-based Spark execution. It follows all your normal appliances. Entra ID authentication, works with .NET, Python, or any ODBC compatible tool.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=214s" target="_blank">3:34</a> What this means, if you're not aware with ODBC is, it's another way to connect directly to a source data system. This is common with SQL data sources or even Access. It's simply a driver that you install on your machine.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=229s" target="_blank">3:49</a> So commonly you're going to do this on your virtual machines that allows you direct connect, works with your gateway. But Mike, for me, am I going to be using this potentially because I used to rely on ODBC drivers, that was basically the only way our virtual gateway worked.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=247s" target="_blank">4:07</a> And now that we have this it's cool. It should just be, I'd almost argue Tommy, like the world of what we're doing now should all just be API based as we move more towards this agentic AI building code doing things for us, the less we have to install drivers and have specific ways of talking to different systems the better I honestly think.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=270s" target="_blank">4:30</a> Have you used GraphQL Tommy at all?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=273s" target="_blank">4:33</a> I tried. It's a pain.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=276s" target="_blank">4:36</a> It's a bit of a pain but again bots know how to program in it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=280s" target="_blank">4:40</a> Yeah. And my understanding is GraphQL doesn't require any additional libraries, installation or packages. It's like an abstraction. It's like an API only layer for talking to and from data.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=293s" target="_blank">4:53</a> So the reason why you want to use GraphQL is I have maybe the ODBC driver. Maybe I have some other things I need. GraphQL doesn't do any of that. It doesn't need any of that. It's just an API call.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=303s" target="_blank">5:03</a> And the neat thing about the GraphQL experience, you can do what they call a mutation. You can mutate the record, change it or delete something or make a change to the database as well as just read it. And you can have changes and reads all happening at the same time.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=322s" target="_blank">5:22</a> Right. This is like Microsoft's API right for all things from Office to products. There's something called Graph.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=334s" target="_blank">5:34</a> Yeah that's a graph database or Cosmos DB but that's something different. I think GraphQL is like an open standard. It's like an open standard that anyone can use.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=345s" target="_blank">5:45</a> And the thought being well you put GraphQL on top of whatever data system you have, right? If your data system is a MongoDB or Cosmos DB or a SQL database or Postgres or all these are databases that require drivers.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=359s" target="_blank">5:59</a> While I like this, I like the idea of having GraphQL. So, I'm beginning to explore more around the GraphQL side of things, how can I work with my data without having to have a whole bunch of drivers installed?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=375s" target="_blank">6:15</a> So I think maybe one of my picks now should be there's actually an item here that is there's now a CI/CD API for the GraphQL which is now generally available.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=385s" target="_blank">6:25</a> This is your pick. Well I'm talking about GraphQL in your list of your things. I feel like I have to pick it now. So I'm all for making it easier for us to build something in dev and move it through different environments.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=400s" target="_blank">6:40</a> Oh yes I see. So this is just more of like you can now take the API for GraphQL that you could do, you could build it in dev, manipulate your database, talk to it with an API. Okay, great. But that now can be moved through different environments.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=414s" target="_blank">6:54</a> So what I would argue here is I'm very pleased anytime we're seeing more robustness around CI/CD pipelines. It's difficult to get items from dev to test. All the connections are very much a pain to move between the different environments.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=431s" target="_blank">7:11</a> We now have workspace identities. It's slowly getting rolled out to all the products. We're able to add more workspace identities across different products, meaning like reports, semantic models, things like that that can own these items as opposed to having me the user own the items, which I think is a great move, right?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=449s" target="_blank">7:29</a> Honestly, the workspace, if I publish something in a workspace with five people as team members, the workspace should own everything because that way if I roll people on or I roll people off of the workspace, nothing breaks.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=463s" target="_blank">7:43</a> And that's something I really want to have to be consistent. If we're really building enterprise grade things, we need to have consistency around that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=469s" target="_blank">7:49</a> This is what I was going to say. There's a bigger story with both our picks here is if you're going to have a feature source or whatever the artifact may be, in order for that adoption it has to be more or less universally available.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=485s" target="_blank">8:05</a> Just like ODBC you may see as a legacy product. Well guess what, and you know this, go to any company, go to a random company out of 10 and two of them, three of them are relying on that legacy products or features that we couldn't call them.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=499s" target="_blank">8:19</a> And the same thing with here. If you're going to have GraphQL be something that's going to be relied on in a process, well, guess what? If you're going to make Git part of that process, it better be available. So, I completely see that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=513s" target="_blank">8:33</a> Mike, I got an interesting one here.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=515s" target="_blank">8:35</a> Okay, Tommy, what do you got? And I was going back and forth whether I was going to the adoption world or I was going to go another way, but I'm actually going to go with the copy job.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=530s" target="_blank">8:50</a> Here we go. Ah, copy job. There are two updates for copy job. We did a trade so we got them two in one.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=537s" target="_blank">8:57</a> This was the center and the yeah. Okay. So, keep going.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=541s" target="_blank">9:01</a> The incremental copy in Microsoft Fabric now. And what this simply allows us to do is support change data feed CDF and watermark based methods for copy job. And Mike, this is just removing limitation for teams for doing incremental pipelines.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=558s" target="_blank">9:18</a> Previously, if you wanted to do the copy job, it was great, but it was a very one-off thing. If you had more data, you had to overwrite, but we know for a lot of enterprise companies, that's not the case.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=569s" target="_blank">9:29</a> If you need to incrementally add data, an add record. So, it's neat that we're seeing this. Yes, I'm going to also so there's two things I want to maybe pick on here for things I think are interesting to note here.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=584s" target="_blank">9:44</a> One of them I guess I'll go along those lines as well, Tommy. Copy job now supports the service principal and the workspace identity authentication methods.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=591s" target="_blank">9:51</a> Again, very much pleased to see this happening. This is how I'm materializing this, right? So the workspace gets an identity. That identity is now able to be added to the copy job, right, as an owner of that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=606s" target="_blank">10:06</a> But then you can take that identity and say that identity is added to your SQL database. It's a physical Entra ID that exists that you can go add to other assets that are outside of the copy job.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=616s" target="_blank">10:16</a> So if you're making a connection, if you need to have authentication, the workspace itself can authenticate itself into other systems.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=624s" target="_blank">10:24</a> Yeah, this is again copy job is great. I think it's very simple. It's got a good simple UI. I'm not quite sure on the pricing of it yet. I'm still a little bit leery on like it seems a bit expensive compared to other things I can do. Spark still by far is leading the helm on pricing.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=642s" target="_blank">10:42</a> And for that reason, I'm going to continually encourage people to go down the Spark route. But if you are needing something quick to get done or something to prototype quickly to get things moving, copy job might be a useful starting point for you to get started and copy in some data.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=659s" target="_blank">10:59</a> It's really easy to use. I like the interface of it. I just wish the pricing was a bit more in line with what I could build equivalently inside Spark.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=666s" target="_blank">11:06</a> Yeah. Speaking of things that I may have used in the past, but probably not as a major feature. I'm just going to call out one here that I find interesting that I think I thought would have been much more exciting for me, but I realized I'm not going to use it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=680s" target="_blank">11:20</a> Is notebooks. You can expand a cell to be full size here. I don't know if you saw that. And that's great, but I think to our point and again we're going to go back to that wagon, but I'm doing so much building and generating using AI to verify that I'm not really writing in cells anymore.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=700s" target="_blank">11:40</a> Maybe I'm doing some of the import. So I'm not seeing this as a feature that a year ago I think I would have been relying on a lot more.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=708s" target="_blank">11:48</a> Which feature is this one specifically? Tell me.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=710s" target="_blank">11:50</a> This is the notebook. You can expand a cell notebook full size mode. It expands a single notebook cell to fill the full screen.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=717s" target="_blank">11:57</a> Oh, full size mode. Yep. I see it now.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=718s" target="_blank">11:58</a> Yeah. And again, I didn't actually see that one come out, but that's interesting. Notebook full size mode. That's interesting. I'll have to play with this one.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=729s" target="_blank">12:09</a> I'm not sure if I understand this one exactly what it's doing. One thing I would say I'm quite annoyed about, which

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=734s" target="_blank">12:14</a> I would say I'm quite annoyed about, which was there was like this whole data table checker thing that was weird that it did in the past. I think they fixed some of that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=742s" target="_blank">12:22</a> I will say this though, I'm going to jump on the notebook bandwagon. Again, all the features that are coming out for notebooks are just rock solid. It's really good to use.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=769s" target="_blank">12:49</a> I think there's a lot of users using Fabric for notebooks and the Spark experience. It's fast. It runs well. It's efficient. It's one of the cheaper items to use inside the data loading, data engineering space for Fabric.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=805s" target="_blank">13:25</a> So, the fact that it's priced so well for what it does, I really like it. The one that I'm going to jump on here, Tommy, is this run command. So, Python notebooks added a run support, which I'm shocked that wasn't already available to us, but maybe just not in this shorthand, the way it's so easy to run.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=784s" target="_blank">13:04</a> So, what you can do now in a notebook, and this is what I do a lot with when I was designing things in Databricks, which was at the beginning of my notebook, I want it to be clean. I don't want to have a whole bunch of imports and function building and potentially I want to reuse a lot of that content over and over again.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=820s" target="_blank">13:40</a> I'm going to build a whole bunch of loader functions or how to work with my lakehouse or so these are functions I'm going to reuse over and over again on every notebook.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=847s" target="_blank">14:07</a> So what I would do is I would build a common functions notebook and then I would run that notebook using the run command. So run common functions one of the first cells in every one of my notebooks. And so that made all of my code very simple and so I could build only the functions I need.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=866s" target="_blank">14:26</a> And so then it's almost like good programming, right? Build your own package. Yeah. It was instead of having to go compile and build a whole npm and get it loaded like done. Now it just lives somewhere else as a notebook and I can just reuse that notebook over and over again.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=841s" target="_blank">14:01</a> So I found that to be extremely useful in Databricks and I'm excited to see it here as well inside Fabric. So I think this is a feature people should definitely check out.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=849s" target="_blank">14:09</a> Go look at how to use it, reference another notebook and how to run it. I believe there's probably some more documentation around this. Usually you can send in parameters or if you want to send in information between notebooks, you can do that. So check out that function as well, run cells. That run notebook experience would be really useful.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=869s" target="_blank">14:29</a> So that makes me think my quick shout out to also the AI trenches here. Have you used the Claude extension for Chrome or for Edge? I have not for Claude Edge. I have been using Claude Co-work for PowerPoint. Okay.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=886s" target="_blank">14:46</a> Two things, two observations. I watched Matias Tarbach build basically a stubbed out HTML page that was a full slideshow.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=895s" target="_blank">14:55</a> Okay. And with the agents, the ability for them to build such rich full page HTML document type stuff, there is like zero need for people to be building PowerPoint slide decks anymore.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=913s" target="_blank">15:13</a> Like if I didn't like PowerPoint before, agents came around and made it 10 times worse for me to go use PowerPoint. I cannot stand the program. It is so hard to use, clunky to get around.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=923s" target="_blank">15:23</a> And I had a really bad experience recently with a file that was given to me. It was 120 megabytes in size. Just files, images, things were stuck in the file that was given to me and I didn't know where it was coming from.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=939s" target="_blank">15:39</a> So I opened up the extension. I added Claude Co-work to PowerPoint, started using it. Let me just say this way. If you are a person who's using PowerPoint today and you do not pay for the $20 Claude Co-work function to get added into your PowerPoint presentation, that's $20 way worth spending.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=963s" target="_blank">16:03</a> Honestly because it's so good. It's very easy to get around the document. It can read the slides that you have and I went from a 230 megabyte file to 10 megabytes. It found junk in there and we were digging around in the master slides.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=979s" target="_blank">16:19</a> We were getting rid of things we didn't need. I was asking to find compare master slides to the other slides in the presentation. Which ones did I need to keep? Which ones did I not need to keep? It was doing a great job.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=990s" target="_blank">16:30</a> And it wasn't like immediate. It couldn't do every single thing in the PowerPoint slide deck, but I got a lot done in a very short amount of time. And I thought, okay, I'd rather talk to it and tell it what I want this slide to do on the slides and have it do a first pass at things and then come back and clean it up.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1009s" target="_blank">16:49</a> That was amazing for me.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1011s" target="_blank">16:51</a> So, this is such I love this topic. We both love this topic so much. I think this goes back, we were talking offline about this, Mike, the wisdom and the intelligence that we need doesn't go away, but honestly, I think just the expectation is going to be how much more we need to get done or what's expected of people.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1033s" target="_blank">17:13</a> Because to your point like if you didn't know what the heck you're talking about, what a PowerPoint, how valuable that's going to be. But the fact that all that tedious work and I was telling you about a workflow that I'm working on now.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1048s" target="_blank">17:28</a> Yep. The amount of tedious work that I would have to do maybe would be 70% of the time. That 30% is the value of the experience that I have of 10 years of doing this and six years of the MVP and the consulting work that is so necessary.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1062s" target="_blank">17:42</a> But I'm not worrying about formatting, and those little things on, those special skills in PowerPoint to make sure everything's aligned just right or to build out the slide.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1072s" target="_blank">17:52</a> So, that's a huge win. Now, let me go back to the extension because we've talked about this before with notebooks explicitly.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1083s" target="_blank">18:03</a> We've talked about having like in the sidebar that you can talk to ChatGPT and allow it to, hey, this is what I'm working on. You copy paste the Claude code extension. While right now takes a little bit of time, can completely build and modify an entire notebook in Fabric.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1103s" target="_blank">18:23</a> What it does, it actually takes screenshots. It will control your browser or your web page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1106s" target="_blank">18:26</a> I don't even use that. That's not I wouldn't even do that way. I gave my bot API access to my workspace and it wrote the whole notebook. Like you're doing the same thing. You're signing in and giving the bot that but I wrote I gave it API access and said here's the API on how to create a notebook.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1122s" target="_blank">18:42</a> I'm making a Jupyter notebook and it wrote the whole thing. I or start the notebook and have your agent. Dude, this is insane. Yes. 100% agree this one.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1133s" target="_blank">18:53</a> So I had and this is cool Mike too because the Chrome extension is free to download too and it took a little time but it modified everything and I created a Power Query skill in Claude and I said hey take a look at this Python notebook which I downloaded and I said convert all this to a Power BI model and all Power Queries.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1150s" target="_blank">19:10</a> I want a direct connect. I don't want this going to lakehouse did it. So done. But I digress. The other things those things are not in the blog.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1158s" target="_blank">19:18</a> Mike, I think there's two major updates we need to talk about. One's going to be our segue for our article here or for our mailbag.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1166s" target="_blank">19:26</a> There are two. We always hey, we love AI, but we still love DAX. DAX still near and dear to us.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1175s" target="_blank">19:35</a> We do. We've got some new announcements there. So, Mike, what do we got? We've got two new functions right now from the Microsoft blog.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1183s" target="_blank">19:43</a> Now tell me remind me that I'm trying to pull it up here real quick. TABLEOF and NAMEOF are the DAX functions.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1190s" target="_blank">19:50</a> So again every time a new DAX function appears I'm expecting okay the function appears where is the SQLBI article. Where can I go actually read the real information as to why this really exists and what performance is happening when the update comes out.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1206s" target="_blank">20:06</a> Yeah. So I'm waiting for the other shoe to drop at this point. I'm not sure if there's a SQLBI article to talk about NAMEOF or TABLEOF or NAMEOF DAX functions but these are probably some useful functions. Tommy, what do these do for us?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1218s" target="_blank">20:18</a> I haven't had time to really dive in or use them yet. Why does this help us?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1223s" target="_blank">20:23</a> This is probably going to be more useful for those who are doing user defined functions, UDFs. But TABLEOF returns a table reference from a column, measure or calendar. NAMEOF returns the name as a string.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1239s" target="_blank">20:39</a> Both auto adapt and rename if you rename the table will bring the right value. And again, they're really meant for UDFs and calculation groups. So, you're not going to be using them for your normal DAX day-to-day, but if you are doing UDFs right now, this is going to be a huge upgrade for advanced modelers because it has that dynamic table reference without hard-coded strings, which is what you had to do before.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1270s" target="_blank">21:10</a> I think I don't quite understand this a little bit. So let me I think I understand it but I don't quite understand it yet. So it's basically allowing you to do parameterization inside DAX to some degree. It's going to support these other things that are more parameter driven like user defined functions.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1286s" target="_blank">21:26</a> Now interesting thing the NAMEOF option was actually already there for field parameters that was already there. It's been existing but it really wasn't documented. It was just used as a part of this which is nice as having some official documentation. It's been documented on DAX.guide for months now. So that's not a new surprise.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1310s" target="_blank">21:50</a> This is where I get a little bit more the documentation or no the documentation that they give us here is just I'm not as something's not right because they do this evaluate row something and they're giving you an example.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1322s" target="_blank">22:02</a> Okay, I understand when in their example they're literally using count rows TABLEOF and then they throw in a column table reference. Like okay I understand that table but like you literally using the table name in the definition of TABLEOF by giving a column measure.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1349s" target="_blank">22:29</a> So maybe that example isn't the best one to lead with. That's what they do for all the functions though. The row count and create a row just like you do if you create a DAX query. It always has that as your output.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1360s" target="_blank">22:40</a> If you're creating a new DAX function or doing a query, that's the same formula or set of functions that happens in a DAX query by default. And it's just to return some data. Here's an easy way to return data, Mike. They're trying to make it easy for you.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1374s" target="_blank">22:54</a> I get it. I get it. But just the examples they give me are like just this is just dumb. Like the table name is in the thing that you're trying to pass into the function. Like obviously you know what the table name is.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1385s" target="_blank">23:05</a> I feel like a diagram would probably be worth way more words than what examples in code they're giving and then again I'm going to just wait till SQLBI comes out with the article and I'll read that one and then I'll understand.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1399s" target="_blank">23:19</a> I guarantee you that because Microsoft docs run on GitHub pages there or GitHub repos. I guarantee you when you create a DAX function and create a new page, it's just some parameters that auto-generates that bottom half.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1410s" target="_blank">23:30</a> Granted, I wish Oh, Mike, I wish that there were comments on Microsoft Docs just to see how many of those comments would start with Mike going, "This is dumb."

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1419s" target="_blank">23:39</a> This doesn't make sense. I don't understand why we're already documenting something with something so simple.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1425s" target="_blank">23:45</a> I get that it's a simple pattern and they're just trying to show you the pattern, but come on. That's one of the things I think I would argue about like the most of the functions that come out of DAX, Microsoft has these examples that are just way too basic.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1439s" target="_blank">23:59</a> And if when you get into a problem and you're stuck, you just can't use one example. You need like three or four examples and you need like the simple example, the more complicated example, like the very verbose example.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1454s" target="_blank">24:14</a> That's why you went to DAX.guide and not Microsoft Docs first. It's just to me it's just a bit like look Microsoft this is your product this is your language you've written everything about it why are other people building better documentation than you do when people use your stuff or not.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1467s" target="_blank">24:27</a> When I do, anytime I have DAX training, Mike, I lead people to DAX.do guide. 100%, I do the same thing.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1495s" target="_blank">24:55</a> Sometimes I reference there's Microsoft docs. It's there's Daxguide and there's Microsoft docs, right? It's like the afterthought of everything else. And there's others, yeah.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1525s" target="_blank">25:25</a> All right. So, there's a quick one I want to recap and then this one will go perfectly into our mailbag. Yeah, let's do it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1550s" target="_blank">25:50</a> So, something again. Why wasn't this here before? Love it though. Users paste selections into any slicer. Users can paste new line separated list of values into any slicer using control-V or context menu.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1585s" target="_blank">26:25</a> Previously limited to button and list slicer types. So, now it works for really anything. It's called a power user feature. And this is great for filtering lists.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1614s" target="_blank">26:54</a> But the main one is the input slicer, formerly known as the text slicer, is generally available. And again, this for me, I used to use a custom visual for this. And this is free form text filtering with contains, starts with, does not contain, and more.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1650s" target="_blank">27:30</a> It supports write-back also for transactional task flows when no data column is bound. So really interesting there. So, this can really reduce page clutter because I can use a single input slicer to say just find anything with this, which oh my goodness, I can't believe this wasn't here year one of Power BI. Maybe it was complicated, but...

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1694s" target="_blank">28:14</a> This is a huge one that I have always asked for, or when I was in my first few years when I put slicers in a page and filters, like, hey, we have like an ID and I don't want to go through this list. Can we just input it? Like, no.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1730s" target="_blank">28:50</a> And I would argue — yes, you're right, Tony. And I would also argue, to your point, it's difficult to do that when you're on the slicer on the page. Yes.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1758s" target="_blank">29:18</a> And so I think for me, there was this idea of, okay, slicers on page don't really do what I want. And some people made some custom visuals and there was some other things that were doing slicer-based things where you could do shorthand of finding things or starts with, begins with stuff, which is great. I love that. That was what we needed.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1795s" target="_blank">29:55</a> To your point, Tommy, why wasn't this just built into the product? This seems like a very big — you look at any other visualization tool out there, there's always some general text search type thing that's a bit more robust. And so having this here I think is useful.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1830s" target="_blank">30:30</a> But then I would also argue when the filter pane came out, I think the filter pane, while people don't like it, it's hidden on the side, and I think it could definitely probably use a bit more love and some design to it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1861s" target="_blank">31:01</a> But it's very capable and a lot of the times when I'm training people I'm like, you're undervaluing the filter pane because it could do things like this. It could do starts with, it could do ends with, it could do contains. Those were things we couldn't typically do in a slicer.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1899s" target="_blank">31:39</a> And also my argument here, and I think we're going to get into this in our actual topic here, is people demand lots of selection of things in order to get down to the data they care about. Right?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1928s" target="_blank">32:08</a> The filter pane did a really good job of showing up, giving you a whole bunch of things you could cut and slice and dice the data by, either the page or the entire report. That was great. That saves me space on the actual report page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=1966s" target="_blank">32:46</a> And so I have a rule of thumb, and I think we're going to get into this in a moment. You could have one or two slicers on the page of the report, and anything else that's not the most important filters that you're going to apply, I really do think you want to push them to some other experience.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2002s" target="_blank">33:22</a> Whether it's a bookmark that shows them all as a single page, whether it's the filter pane that shows up on the side. You can cater the experience you want users to have, but I really do think that dropping lots of filters, 10, 15 of them on the page of the report is meaningless.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2041s" target="_blank">34:01</a> And all you're doing is you're just limiting the amount of space on the actual report canvas that you can use for visuals.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2066s" target="_blank">34:26</a> So, I have some feelings there. Let's get into the question. I think this is probably a good transition. Yeah.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2091s" target="_blank">34:51</a> I used to be a proponent of filter pane, but how do I spell it now? P-A-I-N, I believe it is. P-A-I-N. Yeah. Very good. Very good. What a — that's only dad jokes.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2125s" target="_blank">35:25</a> Dude, I get it. I'm with you, Tommy. So, your pain — great mailbag. It's a long one, so bear with me. We'll see how many errors we'll make here, but one day we'll have an AI to read it for us. Sure.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2156s" target="_blank">35:56</a> All right, here we go. I don't think we have a name here. So, my company's typical report page has at least one-third of the UI taken up by slicers. About 15 to 20 of them per page. Typically, all the same ones on each page, but not synced.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2191s" target="_blank">36:31</a> Oh gosh, I'm getting — my heart's — I feel like my blood pressure. Not synced across pages now. Yeah, I'm feeling it. I need to check my blood. But very few people know how to use the filter pane. P-A-N.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2225s" target="_blank">37:05</a> This feels like what we — as an — I feel like I'm leading into this question very well here. Keep going, Tommy. This is good. This is — it's like you read it beforehand. As an individual contributor, I prefer to keep slicers to a maximum of two per page and optionally encourage users to cross-filter or cross-highlight using the visuals on the page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2263s" target="_blank">37:43</a> Okay, I promise I did not read this before you read it, Tommy. I'm literally just saying things the way I like to say them. So this is coinciding very well with me.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2292s" target="_blank">38:12</a> Hey, as you're reading the mailbag — whoever wrote this — I wrote it — with you. This mailbag is so great. Very applicable to our show. Wonder where that came from.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2327s" target="_blank">38:47</a> Yeah, this is good. Okay. Oh, there's — I know you didn't write this because later down I'm gonna have to censor. This has gotten my reports recognition among leadership and recently leadership has requested the whole team for reports to use a more user-friendly, simpler report to engage with.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2362s" target="_blank">39:22</a> Now I'm getting involved in the project management aspect of shifting a report to a more mature level. Way to go. I would like to have a design discussion with the team and set a limit to the number of slicers on a page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2396s" target="_blank">39:56</a> Here's our question. What guidelines do you typically use when deciding on the number of slicers to use? What I've used so far is a common sense approach to reduce the number of clicks a user has to make to get insights or actions. However...

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2430s" target="_blank">40:30</a> I think for the sake of standardizing things in a team, we might need it to be spelled out in addition to layering out theoretical principles behind limitation.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2459s" target="_blank">40:59</a> Here are two general use cases for slicers I can think of. Ones you can expect a user to set once, i.e., sales rep selects their own name and defaults that every time they reopen the report. And ones you expect to be modified frequently. Brand managers will check on the health of each of their brands individually.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2497s" target="_blank">41:37</a> Do you ever use the first type of slicers or are they better suited for the filter pain? Also, is there any justifiable reason to have more than two slicers on a page? Thanks so much for the podcast, by the way. I've learned a crap ton and listen on my commute every day in both directions.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2532s" target="_blank">42:12</a> Well, my friend, first — way to go. And this is a great podcast, whoever you are. Thank you for the recommendation, Mike.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2562s" target="_blank">42:42</a> I think we got three questions. Yeah, we do. Mike, thanks for the question, Mike. My commute is extremely long. It's two flights of stairs to my basement. That is my commute. And I listen to our podcast the entire time.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2594s" target="_blank">43:14</a> Oh, this was OpenClaw writing this for you. Great mailbag. No, we don't even have real people. Can you please tell me as OpenClaw, how would I better write reports for my humans? I'm gonna have OpenClaw submit a few. Please don't because then Tommy will be overwhelmed with all these questions from OpenClaws.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2631s" target="_blank">43:51</a> We're going to have to have an "are you human" check on the mailbag pretty soon. Just do a basic math. So, I think we got three questions here we got to talk about. One, how many slicers are on a page? What is the general recommendation?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2669s" target="_blank">44:29</a> Two, we need to talk about the two types of slicers — if I have a slicer that's report level, what's a recommendation to do that? And then what do we do about slicers that are more for a given circumstances?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2704s" target="_blank">45:04</a> And I think these are really the three types of things we need to dive into and I got — times we should have talked about this earlier but Mike, this is such a full topic that has hit near and dear to — that I've seen, I've tried to push and I've also really had conflict in my own head about what is the best approach here.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2748s" target="_blank">45:48</a> This is a great question. All right. I have a lot of opinions on this one. I'm just going to start throwing out opinions on these questions. Yeah. And we'll see where we land on the topic on this because there's a lot of thought around this one.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2778s" target="_blank">46:18</a> One of the points that are brought up in this mailbag which I thought is very relevant — you have been getting a lot of good feedback by simplifying what's on the pages, simplifying your reports.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2811s" target="_blank">46:51</a> I generally think people get quite overwhelmed with how much stuff can be on a page. When you're building for an audience, I like a lot of data. Reports that I build for me personally have an analyst level reporting. Slice it this way, slice it that way, I want to know this, I want to know that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2854s" target="_blank">47:34</a> And then as I go through the data, I'm continually building more visuals, more slicers and things there. Now, I really believe, me personally, the visuals themselves are actually slicers. And let me explain what I mean by that. I'm listening.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2885s" target="_blank">48:05</a> I do this thing every so often and I heard Microsoft call it a rainbow chart, which I wasn't quite sure of what that meant, but they called it a rainbow. I was showing them something — I like to do this kind of building.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2915s" target="_blank">48:35</a> So, I will have a bar chart that shows values for category, values for something. And because I'm either on mobile or I'm on desktop, I like to think of that visual as the slicer that I want to use. And the colors of those bars are precursors to where those data points will show up.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2956s" target="_blank">49:16</a> So, for example, if I have a bar chart and it's by category and I've got five or six categories, each category will be its own color. So, this page should be primary around category information. The colors that I'm supplying to the rest of the page should link back to the original categories that I built.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2993s" target="_blank">49:53</a> I think that's a very easy way for people to digest. If I'm looking at category A and it's red, it better be red in other places where I'm trying to highlight total sales or units or number of customers or late orders. Anything related to the red category should just be red all over the page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3034s" target="_blank">50:34</a> So I think that is a very good stance here. When you think this way, if you evolve your thinking into the visual itself becomes the selection tool, the slicer. And I don't need the slicers as much. I can leave some visuals on the page that represent two parts — the data, the stacking of that, and then the selection of those items that'll let me pick what I want.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3078s" target="_blank">51:18</a> Most of my reports operate this way. I think it's clean. I think it does — every visual does two things. Shows you the data you care about and lets you select it and filter down to the data that you want. Let me just pause there. What about that thought, Tommy?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3113s" target="_blank">51:53</a> You're not going to like this at all. But I would agree that's the first part that you do like. The second part is — you agree. Move on. Yeah. Right. So you wish that was as easy as it was.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3148s" target="_blank">52:28</a> But here's the problem with that. There's a few problems. First, the functional side of this — where when I select something using cross-filter, right? Well, just right-clicking or clicking anywhere on white space, that filter goes away. So, I lose that feature. It's great if I understand it, which is what I use. I build my reports that way for me and for more mature clients. Yeah.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3192s" target="_blank">53:12</a> But the problem is they don't stick. Again, let's talk about intention here. And to me, this is when I think about the intention of a slicer compared to the intention of the cross-highlight.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2203s" target="_blank">36:43</a> They do not fit all the use cases of cross filtering, does not fit all the use cases of a slicer or the filter.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2210s" target="_blank">36:50</a> You bring up an interesting point. You're talking about cross highlighting and I just want to hang on that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2214s" target="_blank">36:54</a> Cross filtering. Yeah, I don't like cross highlighting. That's my point. I was going to—

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2219s" target="_blank">36:59</a> I don't want to talk about that. Well, I wanted to make a note. You said cross highlighting.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2225s" target="_blank">37:05</a> There's a setting in the Power BI report settings that let you change the default setting from cross filtering, which means if I select this bar—

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2234s" target="_blank">37:14</a> No, it starts with cross highlighting. Still you have to change it across. That's what I'm saying, oh sorry I said that backwards. It's the default setting is cross highlighting.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2241s" target="_blank">37:21</a> Right, when I select the category feature it highlights everywhere on the page where that category has been selected and it leaves the other data available on the page for everything else to see.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2253s" target="_blank">37:33</a> To your point Tommy, I don't like cross highlighting. That is actually the worst feature. The first thing I do on all my reports, or if I'm building something from scratch, I'm always going to cross filtering.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2264s" target="_blank">37:44</a> I select this, everything filters down to that. Now, there are situations where I want to go back to a particular visual and show parts of a whole or some comparison and I do want it to cross highlight and not cross filter, but that's the exception.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2283s" target="_blank">38:03</a> So the default behavior should be cross filter everything. When you need it, drop back to cross highlighting when required. That's how I look at it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2295s" target="_blank">38:15</a> Let me tell you, I am jazzed up today. Let me tell you how much I hate cross highlighting. The three times my computer's crashed and I've had to reinstall everything, Windows and then Power BI.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2305s" target="_blank">38:25</a> My first intention is after I open up Power BI for the first time on my new machine, is I go to autodate. Yep. Turn off, turn that off and I make sure that the cross highlighting is off. That's how much I hate it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2315s" target="_blank">38:35</a> But that's not our discussion today. But the cross filtering is a cool feature. It's a necessary feature, but it is not the universal filter for filtering, Mike.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2327s" target="_blank">38:47</a> And I think you have to think of two things here. I think the functional side and the person side. Functional side, cross filtering is temporary. To your point, it is a fleeting thing. As soon as I click on white space, it's gone.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2343s" target="_blank">39:03</a> But the other side here is the person side, where I may not have a wide adoption. Maybe if I have 10 people, maybe eight of them use cross filtering. And they know how to use it and more importantly they're comfortable with it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2359s" target="_blank">39:19</a> They understand, they have the cognitive load that the report has built in to select values on the report to filter it. Not just they know it's available, but they know the report's designed that way.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2374s" target="_blank">39:34</a> Let me pause. Yeah, pause there. Let me just give you — so I want to react to your comment. I agree with you, and I also want to say I'm not going to exclusively use this whole visuals as filter, visuals as slicer method, right?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2388s" target="_blank">39:48</a> Where does this work well? Let me just talk about where I think this works really well. This works well when you have a low number of categories, right?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2396s" target="_blank">39:56</a> I have a lot of reporting I do internally for me. One example of this would be billable, non-billable work, right? My team works on billable work for clients and then some of it is non-billable where we're just doing work internally or working on software or something that I need for our internal company.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2411s" target="_blank">40:11</a> So for me, this is an on or off switch. So I actually have a tree map for all the — I do it in financial terms, right? It's either black because you're in the black, if it's red you're spending money or you're making money.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2427s" target="_blank">40:27</a> So I have this very simple slicer which does the ratio of a percentage, basically how much of our time is spent on non-billable work versus billable work, and it's a simple slicer to your point.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2438s" target="_blank">40:38</a> I can click on one of it and the whole report changes. So this technique I think is very nuanced but it works really well at the top of your report when you have categories or groupings that are very small in number and I want to rapidly change between topics.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2455s" target="_blank">40:55</a> In this example, I want to rapidly change between where are we spending all our time on billable work. Boom. What does that look like? Where are we spending all of our time on non-billable work? Boom. The whole report changes.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2466s" target="_blank">41:06</a> So in that regard, I don't need two separate reports. I can use the same report just by toggling or clicking on something on the page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2474s" target="_blank">41:14</a> Now the reason this is a visual and not a slicer on the page and not something else — one, I want to see the representation of the data for that. So I want to serve an extra purpose, but also I use it a lot on my phone.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2487s" target="_blank">41:27</a> And if I'm on my phone, it's very easy to click on almost like buttons on visuals. It's much easier to use that than to go find the slicer on the page, click the dropdown menu, and use it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2499s" target="_blank">41:39</a> So I'm building more and more reports for me personally that I'm on the move. I'm doing stuff. I do need more of the reporting on mobile experiences, and as I move more towards a smaller form factor, I can't have these really wide pages. I don't have the precision of a mouse.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2515s" target="_blank">41:55</a> Usually a dropdown menu is clunky or filters are clunky when you're on the report page. It doesn't really work that well.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2522s" target="_blank">42:02</a> Well, they've gotten better. They've gotten better. To your point though, the filter pane with the list, that is actually I think a much better experience when you're on mobile.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2538s" target="_blank">42:18</a> So when you're in mobile the filter pane doesn't show up. You don't see it. You go over to the filters section, there's a dedicated screen, and if you're clicking on dates or slicer things, it's much easier on a small form factor to use the filter pane.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2551s" target="_blank">42:31</a> The difference with the filter pane — and where I spell P-A-I-N — is when it's done without intention, when it's auto-built and you quickly add things. It's a very complicated experience and there is a place where slicers—

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2565s" target="_blank">42:45</a> I disagree with your phrase "it's a complicated experience." It's not complicated. It can be when it's auto-generated. If you don't have intention behind it, it becomes complicated.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2577s" target="_blank">42:57</a> Even then it's just a list of stuff you filter. I don't see why this is difficult to people. I take issue with that comment specifically because it's not complicated. It's actually quite simple to do it and it's very understandable for people to know how to do it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2595s" target="_blank">43:15</a> Now, are people actually taking the time to fully leverage what the filter panel can do? The answer is no, they're not. And I think — so is it Microsoft's fault for not educating people and making it easier for people to understand why the filter pane exists?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2613s" target="_blank">43:33</a> I think this is an educational part that's just a miss on Microsoft, not being more clear as to the advantages of going over to the filter pane.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2625s" target="_blank">43:45</a> Let me tell you a story, Mike. Quick story about the filter especially. Okay. All right. Well, we have this ready. Go. Tell me a story, Tommy.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2638s" target="_blank">43:58</a> When the filter pane came out, remember reading the blog. I remember explicitly the new filter pane, not the black one which we've talked about, the dark one, the one where we can format it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2648s" target="_blank">44:08</a> I changed three of my major reports immediately to it and was like, "Oh my gosh." And immediately published those reports.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2656s" target="_blank">44:16</a> The next thing — and this was at a company where I would say the adoption, the maturity was mid to high. This was not a company that was not using Power BI, they relied on Power BI.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2668s" target="_blank">44:28</a> Messages immediately going, "What happened to the report? What is this?" And it was a moment that I realized very quickly you cannot force-feed people new features. I don't care if it's a great feature or not. And I don't care if your adoption maturity is high.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2685s" target="_blank">44:45</a> And the reason why I've also realized this too — take Microsoft Outlook and imagine that the UI drastically changed overnight and you had no idea what the new features were. You would be mad.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2700s" target="_blank">45:00</a> And there's the same context here when it comes to reports. Even if it's a great feature and it will help people, without me notifying people and then going through and educating and letting people know there's a new feature on this report, you're going to deal with these issues.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2714s" target="_blank">45:14</a> And I think the filter pane is a huge part about this. There is the application adoption process, and you are building an application when you build a UI in Power BI. There's no buts around that. There's no getting around that. We have to be aware of.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2729s" target="_blank">45:29</a> I'm going to let you say your thing and then I'm going to tell you you're wrong. All right. All right. Here it is. I'm sparks. Here we go. Let's see if we got a sound for this guy.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2743s" target="_blank">45:43</a> The only thing I've got left in the bucket here. I'm going to adamantly disagree with what you said there. And I think it's not — you didn't do anything wrong. It's not wrong in what you did. I think you were very much good-intentioned.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2758s" target="_blank">45:58</a> I thought I was wrong. Well, I don't think you were. And I think you're misinterpreting the stance of the people interacting with your report.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2765s" target="_blank">46:05</a> What I heard you say was we added these filter things on the filter pane. People show up to the report again and it wasn't easily evident to them on the page. Where do I filter down the data?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2782s" target="_blank">46:22</a> And so I think what you're addressing is that part of the issue, right? Unless you have the filter pane automatically open and saved open on the reports when they're published, people are not going to understand that's what you're supposed to use.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2798s" target="_blank">46:38</a> Additionally to this, if you have a filter page, and again you're building a data UI, a UI experience, if you have the filter icon on the top, I found people to be very interested — they'll look at the page, they'll look at the data, and if you have a proper navigation menu or bar, you can put an icon there. People will click the icon.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2818s" target="_blank">46:58</a> Now the downside is that icon needs to fly out the filter pane, the filter panel, which you can do with bookmarks. You can do interactions on reports that actually push out the filter pane and hide the filter pane. So those are bookmarks you can supply.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2832s" target="_blank">47:12</a> So when you click the filter, the filter pane opens. I think the gap what you're seeing here, Tommy, wasn't necessarily the feature of the filter pane. I think it was the ability to communicate to the users. This is how we do filtering because it's more capable in this way.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2848s" target="_blank">47:28</a> And this is where I think Microsoft dropped the ball here on the educational part of this. Where's the ability for me to have a little icon show up and say — this is almost like, hey, we need a GIF on a different page that says "click this button."

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2865s" target="_blank">47:45</a> Here's the instructions you need, right? You just made a drastic change to a report. People were bent out of shape because they weren't used to seeing it that way. They didn't understand where their stuff went. That was the problem.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2875s" target="_blank">47:55</a> The problem wasn't the filter pane was bad. It was we hid something away. We simplified the page. There was no like, "Hey, this changed. This is new."

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2888s" target="_blank">48:08</a> No. And I agree with that. But I'm just saying, I think your interpretation of "it's too complex, people can't get it" — I still take issue with some of that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2901s" target="_blank">48:21</a> No, no, no. So those are to me — it's usability of getting it in place, making sure your people know how to use it. No, we actually don't disagree there. We agree on that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2914s" target="_blank">48:34</a> Because the thing is, and I want to try to answer this first question — how many slicers on a page? I think there's a part here with all what we're trying to say and what I'm trying to communicate here.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2925s" target="_blank">48:45</a> There is a very conscious way of usability that we have to be aware of. There's a conscious intention that we have to build when we're building our reports, and Mike, I really want to get into two and—

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2935s" target="_blank">48:55</a> I really want to get into two and three of the questions there but when I look at let's just say how many slices should be on a page, honestly I look at it two ways. How wide is my report or how tall is my report? If I need, when I think of maximum, not necessarily the preferred.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2951s" target="_blank">49:11</a> So because I generally put if there are slicers—keep going this is great. So first off, is that slicer needed to look at the report and selecting other things like a region or the sales manager? That deserves to be there.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2967s" target="_blank">49:27</a> I think usually like regions, one of those two or whatever those case may be, but I try to keep slicers from a functional point of view to be on my header. And every report that I have has—I love that Tommy, I've seen the report design, we are in alignment man, what I do. [laughter]

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=2984s" target="_blank">49:44</a> We are so in alignment, so I would also agree with this one, I will double down on this one. Every report should have a header, there should be a title bar, there should be some logo, there should be like what page we're on. That's information that's useful, every web page, everything anyone's been trained on has a header on it. It's got a header.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3000s" target="_blank">50:00</a> And I agree with you, Tommy. If you can't fit the filters that you need in the header, I'm not going to give you a number. I'm not going to give you like how many there are, but if you can't fit what you need in the header bar, I'm going to argue you're overbuilding the report page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3016s" target="_blank">50:16</a> And I've seen a lot of good reports that look really well, but there's like a whole line of filters on the left hand side. It's just stacked with filters. And I've lost a third of my page just for filtering. It just feels like this is something that I need it to show up when it needs to be there and I need it to disappear when it's not.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3034s" target="_blank">50:34</a> And when there was no filter pane, Tommy, we built a copious amount of filter pane flyouts, bookmarks. And it was just so, I don't like doing it on the page anymore because the bookmarks are tremendously difficult to update. They're tremendously hard to make sure they're right.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3055s" target="_blank">50:55</a> If you miss one little item and you don't do the grouping exactly right, you don't show something you should be showing. It's such the room for error and risk. Uphill backwards in the snow.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3066s" target="_blank">51:06</a> It's the room for error with bookmarks and filter pane experiences that pop out. You can do them and it can look brilliant and it'll be customized exactly what your user wants from the top, from the left, from the right, from the bottom. You can do anything you want. It's so creative.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3081s" target="_blank">51:21</a> The trick is the doggone bookmarks are immensely difficult to get through. I can't edit them and I don't know how to do it in a good way and it's just difficult. So I'm like I don't want to use everything I build now is like I'll teach people how to use a bookmark because it sometimes is useful.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3097s" target="_blank">51:37</a> But if I have to do some skills with people or trainer education, the most difficult thing is getting anyone to build a bookmark correctly. It is just almost impossible.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3110s" target="_blank">51:50</a> What I will say though, Tommy, is let's go down a couple other areas here. Circumstantial slicers. I'm coming into my report and I've got, I need to set this parameter first before I get in the report—would be a good candidate for the header.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3126s" target="_blank">52:06</a> This is question number three. I want to save these filters and revisit them over and over again. Using the filter pane in concert with a bookmark seems to be much more useful to me. So to me, when I'm on the report page, the report page has been pushed to the service.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3147s" target="_blank">52:27</a> Personalized bookmarks are pretty dang sweet. That I do like. I don't have to manage them. I select the data I want and I grab my personalized bookmark based on the page I want. I save what I need. And the idea of this is I think bookmarks were really not intended to hide and show a bunch of things and do a bunch of filter pane like things.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3165s" target="_blank">52:45</a> I think bookmarks are really intended to be these are filters for your data. We will let you save them. I think that's the word that Microsoft uses, a snapshot.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3175s" target="_blank">52:55</a> Yes, that is a really good way of using bookmarks. Much easier to maintain and I like using the filter pane with those bookmarks because then I have the filter pane open. I set my parameters. I save my bookmark and then I have instant observability when I switch to a different bookmark.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3194s" target="_blank">53:14</a> I can see in one glance a scrollable list of all the filters I've just applied. That to me is incredibly useful. So I'll just pause right there. There's a lot of things I just said.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3201s" target="_blank">53:21</a> So you're going into I think really the bigger question here and I think the question that is all three here. So the other two questions that the mailbag asked was two use cases for slicers. One, you set once and then defaults every time they reopen the report, or modify frequently.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3218s" target="_blank">53:38</a> And this honestly goes to even our the question of how many slicers on a page. And I think we're asking the wrong question here, Mike, because this is all when you deal with slicers, Mike, we're dealing with the question of what's the user story here.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3238s" target="_blank">53:58</a> And what is their intention when they get to the report. I've built reports completely differently based on slicers, based on conversations with the right people, based on what are they trying to do, what are the three actions they need to take on that report.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3255s" target="_blank">54:15</a> Are they trying to look at this, are they trying to understand this, what are they going to do after the report? Is actually the better way of putting that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3262s" target="_blank">54:22</a> And to example, the one type of slicer, like setting a slicer once, if that's the use case, then we build reports where we had the first page was a landing page. Set your filters here and the rest of reports filtered. There are no filters on the other page. There was always a home button to bring you back to that main slicer page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3283s" target="_blank">54:43</a> But honestly even with how many slicers are on a page, there is that functional side. But the bigger question here is what are the user stories? What are the three actions that people are doing when they go to the report? And that is going to determine to me always what slicers you need on a page and what types of slicers you need on a page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3305s" target="_blank">55:05</a> I think you're going to find in my opinion here, the slicers, right? There's going to be like a handful of slicers, two, three, four in the header only on your report. So how many slicers on a page? Fill the header with reasonable things and not overload it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3319s" target="_blank">55:19</a> Once you're done with that, everything else in my opinion goes to the filter pane. All the other things. You also, I think, to your point Tommy, around use case, what are they trying to do? There is the what are the most common things you want to cut and chop your data by—customer and dates, very common, product.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3343s" target="_blank">55:43</a> Those are some fairly common things that I'm going to see almost always. I'm cutting things by date ranges. Doesn't matter what you do. Usually data sets are much longer than you need them to be and I'm doing some comparison. I'm looking at things over time. The data set has 10 years. I'm only really care about two years of data.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3360s" target="_blank">56:00</a> You can tune semantic models to not be so large in the number of dates. But I think one of the major factors I think is useful here is using the date range or selecting a date range. Every tool I've ever used, Tommy, with any analytics—Google Analytics, Clarity, Microsoft Clarity for website analytics, anything that I see, YouTube—almost everything is filtered by most recent and a date range.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3386s" target="_blank">56:26</a> Every report I look at, there's not a single product that's in the market today where they don't let you start with a seven or 28 day range of information. Period.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3399s" target="_blank">56:39</a> Okay, I'm gonna, I gotta jump in right here because if that's the case, Mike, and what I've seen much more impact is especially when people are looking at time like that, especially when it is that 7-day or 14 day span, I don't update the slicers, I update the measures.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3416s" target="_blank">56:56</a> Because what people are trying to do is they want a snapshot in a comparison. If I'm looking at the last seven days and to your point, when you go to Google Analytics and you look at your 14-day running, what's the next thing you do? You use that little toggle that says compare the previous 14 days.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3433s" target="_blank">57:13</a> Correct. Yes. Right. So, and this goes back to the user stories, Mike. And because I would challenge you, rather than asking people what do they need to slice it by, you're going to get all of them, right? You're going to get all of them.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3447s" target="_blank">57:27</a> There's a bigger question here. Everyone wants to cut and slice and dice data by everything, but that's not the question you should get. The question is what do you do first? Yes, it is because you're going to start, so even at the measure level, Tommy, I don't want people, even if you're doing Power BI reports or something.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3467s" target="_blank">57:47</a> Like yes, I understand there is the ability for you to make additional measures, but the measures can override filter context fairly easily. And so your measures are not impacted by the slicing filters. You can use the slicers, those can detect date ranges for you, the selected date range, and then you use the calculate statement to just adjust that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3485s" target="_blank">58:05</a> So if your report page requires that second set, now what I would agree with you Tommy is there is no concept in Power BI of select time period A and get by default time period B behind it. You have to build that custom as part of the model.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3498s" target="_blank">58:18</a> Complicated. You can do it but—you could do it but it's just not as easy. You got to do a lot more work to say I need two slicers now selecting two different date ranges. That's not built into like the simple date slicer, that doesn't exist.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3514s" target="_blank">58:34</a> So to your point, like that's something that we need to figure out because now we need two variables—this set of dates for now, this set of dates for compare—and then all of your functions and formulas down below should leverage both of those compare pieces.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3529s" target="_blank">58:49</a> But you understand, and this is honestly the hot take here, the question that I ask to at the interface that I need. It's not what do you do first, it's what are you doing after you look at this report. And what I mean by that, what actions do you take after you see the world?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3544s" target="_blank">59:04</a> Right, are you trying to understand so you can contact Jim or Tina to say, hey we need to take a look at this? And to your point, that seven days, like that rolling seven days, this was such an aha moment for me, this like four years ago we're building this report and they wanted all the date slicers.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3561s" target="_blank">59:21</a> And like, well what are you trying to see? Like, well I just want, I need to know what we last week compared to the week before. And I didn't know if we're still above that. It's like, so the measures were built. No, there was no date slicer on that page. We had the long trending.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3576s" target="_blank">59:36</a> And because of the actions people are taking after, and to me slicers are no different. You may not need slicers. You may need updated measures based on the user. Like I storyboard this crap out man, when I'm dealing with report building. What are they trying to do after they look at the—is going to determine what slicers I need.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3595s" target="_blank">59:55</a> I'm not disagreeing with you. I think you're doing very well, good speced out purpose driven things. Not going to disagree with you in there.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3603s" target="_blank">1:00:03</a> I know where you're going. I'm not going to disagree with you. I think all that's really really good.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3609s" target="_blank">1:00:09</a> I know what you're going to say. My mental model, how I like to think about slicers and visuals on a page, I would err on the side of can I build less measures and make them simpler, but giving more capability like slicers on the page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3630s" target="_blank">1:00:30</a> And the reason I'm saying this is as soon as you make the measure that is last week's total only, that one measure can only be used for that last week. Now, what you're doing is you're applying a measure and you're applying a filtered range to that measure to get the answer that you want. I totally get it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3646s" target="_blank">1:00:46</a> Not disagreeing with you, Tommy. Like, I'm going to be clear. You're building a very purpose-driven measure for a very specific thing on a page that's answering a very specific question. You still need to do that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3659s" target="_blank">1:00:59</a> Is that all in the thin report or is that in your main model? And so, this is where I think I waffle a bit more. I'm like, this is a good question. You're doing slicing and filtering, but you're talking about it at the measure level.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3669s" target="_blank">61:09</a> And filtering, but you're talking about very specific things. And I almost would argue if we're going to have really hyper stylized measures for that, you have to ask yourself the question, does the base model need that same level of last week, two weeks ago comparison?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3687s" target="_blank">61:27</a> Because what you're doing is you're hard coding that in a bit. It's going to be for the user side. It's a bit they get exactly what they need. It's the information they want. It's last week versus the prior week, but that's it. That limits the functionality of what that can do.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3702s" target="_blank">61:42</a> Now, let me give you where my mental model goes with this one. If I did the same thing, if I just did a sum of website hits or sales or whatever, if I just did a sum and put it on a visual and then filter the visual to last week or added a date field in my date calendar that said last week.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3719s" target="_blank">61:59</a> Here's literally pick this field and it says last week and then it says two weeks ago. I can achieve the same result as your complex measure. Now albeit more complexity lives in the thin report. I'm designing the report to be exactly what I want.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3736s" target="_blank">62:16</a> But now I have flexibility of if I really did want to have — I don't burden the measures or lots of extra measures. The model gets simpler. And if I ever wanted someone to go build their own, I could instruct them to say, "Look, this measure just sums everything you see."

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3751s" target="_blank">62:31</a> Let's talk about filter context. If you want this measure to only have the last seven days, here's how you do it. And then we're applying this filter to the visual, even though it's all data, you can hover.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3765s" target="_blank">62:45</a> And so this is where I do think Microsoft did a good job. When you go to the visual and there's that little filter icon and you hover it and say this visual is impacted by this date filter and here's the range of date filters, that's really good.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3780s" target="_blank">63:00</a> And so I think that part is — I struggle with this. I struggle with doing too much for the user to make it easy and simple for them but then I also want it to be flexible enough where I can give you a semantic model maybe and the more advanced users can use that.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3793s" target="_blank">63:13</a> It just becomes a balancing act. It's a balance.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3797s" target="_blank">63:17</a> There is a usage here. Yeah. So, and I know we're getting your time, but I like where you're going with this because there is that balance of —

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3805s" target="_blank">63:25</a> Well, if this report only gets viewed a few times, is more general or am I going to put all the time? However — correct?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3811s" target="_blank">63:31</a> You ever heard of the phrase manners maketh the man?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3815s" target="_blank">63:35</a> I have heard the phrase, Tommy. Isn't that about speaking with proper English language?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3819s" target="_blank">63:39</a> Well, I'm going to give you another one. Filters maketh.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3823s" target="_blank">63:43</a> Oh, I like that one. That's great. Gold. That's gold.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3826s" target="_blank">63:46</a> And why? Let's say you're like, Tommy, I don't have the luxury of diving these user stories with people. They don't even know what they want. Okay. Well, this is what I would challenge you.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3838s" target="_blank">63:58</a> This is what I've done this method, Mike, time and time again to how my model becomes the right model and the report becomes the right report. We add the slicers. We add the filter pane.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3851s" target="_blank">64:11</a> I'm in a high usage report. I'm a model. I'm viewing with people. What are you doing with the model? Because I've taught them personal bookmarks.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3857s" target="_blank">64:17</a> And time and time again, the same patterns emerge. Like well, I always have to slice by sales rep and we always go by 14 days, I'm always looking at the United States.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3868s" target="_blank">64:28</a> It's like oh, you're doing that every time. Then you realize that's a measure, that's a pre — I can pre-bake that measure for that user and I can dwindle down. Even if I have to start with five slicers.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3880s" target="_blank">64:40</a> I guarantee you there's patterns that emerge with what slicers people do that can build a simpler report. The models may be more complex, but the filters can dwindle down.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3895s" target="_blank">64:55</a> What actions they're doing can be simplified into the visuals, into what measures you're building. Time and time again, the most impactful reports I've ever built in my life are based off a report that was generalized with filters.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3909s" target="_blank">65:09</a> And then we saw the patterns that they did, the bookmarks that they were creating. Every single time they need us to do this rows of data with these filters. Let's pre-bake that. Let's make that a measure.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3919s" target="_blank">65:19</a> Oh, look, I don't need those filters anymore. Oh, look, I don't need this visual anymore.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3923s" target="_blank">65:23</a> So, filters can make the model if you're just starting off. If you are in that more generalized side, I'm not going to go as far to say that any report with five slicers is just asking — has a pattern to it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3941s" target="_blank">65:41</a> But maybe I am. And so really my argument here is, and again don't know if you would agree with this, is if you have five slicers on your page whether they're in the filter pane or not.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3955s" target="_blank">65:55</a> Odds are there are common patterns people are doing with them that could be simplified or pre-baked into measures and pre-baked into a simplified report.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3966s" target="_blank">66:06</a> In fact, I'll go another step further. That's a great method to build a model — is start with the general report and then you can understand their patterns.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3981s" target="_blank">66:21</a> I wish I had better data as to what people were filtering. Everything you're describing to me — I'm resonating with it, it resonates with me.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=3989s" target="_blank">66:29</a> I want to get to a place where I can get better context when people interact with my report to support this information. I know there's data there. It's just not easy.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4000s" target="_blank">66:40</a> So, let me say this way. I know you can get to it. I know where it is. It's in the log analytics of the report and it sends every single query for every single report at any time back to log analytics.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4014s" target="_blank">66:54</a> The challenge is the data that comes back from log analytics is very verbose. Every time you click a visual, every visual changes on the whole page. So, what is the common filtering context that's constantly being applied over and over and over again?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4027s" target="_blank">67:07</a> To your point, Tommy, this exists. The data is there. We need to be able to leverage that and extract it out from this feed of data so we can go use it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4035s" target="_blank">67:15</a> So, I'm with you, Tommy. It just frustrates me that we have the ability to get this information to understand — we're going to build a report, throw it out there, let people use it.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4044s" target="_blank">67:24</a> And then get back what is the appropriate filter context people are using. We just can't get our hands on it. And the counterargument to my point too is that's hyperpersonalized and it takes a lot of time to do so because you're right, we don't have that automated.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4058s" target="_blank">67:38</a> That takes me interviewing, discovering too. But —

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4060s" target="_blank">67:40</a> All this being said, when I view slicers, I view them in the realm whether they're going to be for the entire report, they're on the filter pane or not. For me, it's an eventual story for something else.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4077s" target="_blank">67:57</a> But with a company and you are doing the project management, if I'm trying to adopt this for an organization, I would honestly really — I can't get anywhere else but saying ensure that your developers, your project — if you're project managing this, ensure you're doing discovery calls first before you build reports.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4096s" target="_blank">68:16</a> Or you are going to end up with more complicated filters than you need. From there, fill the width. And if there are universal filters that you need for the entire report, odds are there's another story there, too. And that's where I'm going to land here.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4113s" target="_blank">68:33</a> Mike, I like this, Tommy. I think this is a good topic. I think we're going to debate around all these little pieces. So, let's summarize our thoughts here, right?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4120s" target="_blank">68:40</a> How many slicers on a page? As many as you need as long as they fit in the header. General rule of thumb, right? I think that's where we're landing. There are two types of slicers — slicers that are immediately needed and there's ones that are optionals. They may be used with bookmarking, they may be other things.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4137s" target="_blank">68:57</a> Those are candidates for the filter pane and then there are immediate filters I need right now. I would argue there are two types of filters — there's filters that are always used every single time, common ones, that's the ones that make it to the header.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4150s" target="_blank">69:10</a> When you have the filter pane you really want to educate your team on the filter pane. Now I would argue if you need a little button to help people see and discover the filter panel, use a button with a bookmark.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4162s" target="_blank">69:22</a> And when they click it, the filter pane shows up right on the report page.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4168s" target="_blank">69:28</a> Set the button in a way you switch out the icon and then when you click it again, the filter pane will disappear. I think that's just enough of a friction remover to start getting people to see like there's a thing on the report page I can visually see.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4183s" target="_blank">69:43</a> It helps you bring attention to the filter pane on the right hand side. So that's a technique you can use to help you push more of the filters to the right hand side of the panel.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4192s" target="_blank">69:52</a> I will argue this all day long and I will die on this hill. When you're on mobile devices or mobile experiences, the filter pane is much better of an experience than slicers the way it exists today. Just bar none. You can't convince me otherwise.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4209s" target="_blank">70:09</a> It's better to throw stuff in the filter pane and use it on the filter section. It's just done better for mobile. I also agree that 90 probably percent of your reports are all in desktop. So this is also a very edge case scenario.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4221s" target="_blank">70:21</a> Another reason why I like to use the filter pane but not all the time. Last one is circumstantial filters — when to use it, when to not use it. Does the bookmarks panel?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4231s" target="_blank">70:31</a> So I think circumstantial filters are things where you want to clearly communicate to users what you're selecting and having them use the personalized bookmarks. I think that's really strong. I think it's a very strong story.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4244s" target="_blank">70:44</a> You should educate your users on how to use personalized bookmarks. I think this is an undervalued feature from Power BI that no one knows about and very few people use. I do think the return on using that feature is immensely valuable, right?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4259s" target="_blank">70:59</a> Build a report that is general in nature. Use the filter context and the personalized bookmarks to help you get down to the data you need. I think that's really great. Any other final thoughts, Tommy, for you?

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4274s" target="_blank">71:14</a> I think I said everything I need to say. This mailbag brings me back, Mike. This is a good old-fashioned Power BI mailbag. It was love talking.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4281s" target="_blank">71:21</a> Heck yes, dude. I like this as well. It's been a lot of fun. Thoroughly have enjoyed this one. Having a blast here as well.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4290s" target="_blank">71:30</a> So, all that being said, this has been a super super good topic to get our heads around. I think this is very relevant. And I really enjoy this topic. This brings us back home.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4303s" target="_blank">71:43</a> That being said, thank you so much. If we are doing a number of episodes that we're recording, so over the next 3 weeks, you're going to see a ton of other episodes on the YouTube channel.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4311s" target="_blank">71:51</a> We are doing this because Tommy and I are traveling for next month. March is going to be a busy month. There's a lot of conferences and places we need to be.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4318s" target="_blank">71:58</a> So, because of that, there's going to be a lot of pre-recorded episodes. If you like these episodes and you want four episodes a week for the next three weeks, please become a member down below in our YouTube channel.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4328s" target="_blank">72:08</a> All the episodes will be released to YouTube early as soon as we record them. So, there's another one coming tomorrow. We're going to record another one tomorrow for March.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4337s" target="_blank">72:17</a> So, if you want to have all the episodes early before we talk about them, consider going down to the link below and consider becoming a member.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4352s" target="_blank">72:32</a> That being said, Tommy, where else can you find the podcast? You can find us on Apple, Spotify, or wherever your podcast. Make sure to subscribe and leave a rating. It helps us out a ton.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4361s" target="_blank">72:41</a> Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/mpodcast. Leave your name and a great question.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4372s" target="_blank">72:52</a> And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all of PowerBI.tips social media channels.

<a href="https://www.youtube.com/watch?v=bs2ZazYRZkI&t=4380s" target="_blank">73:00</a> Thank you all so much for a great time, great conversation. Thank you, chat, for jumping in and saying things as well. We appreciate you. We'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
