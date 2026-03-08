---
title: "Tools in Power BI – Ep. 423"
date: "2025-05-14"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Power BI Tools"
  - "SQLBI"
  - "DAX Studio"
  - "Tabular Editor"
  - "Microsoft Fabric"
excerpt: "Mike and Tommy dive into the rich ecosystem of third-party and first-party tools that help Power BI developers build, test, deploy, and optimize their models and reports. From SQLBI's comprehensive overview to hands-on favorites, this episode is a toolbox tour for every Power BI practitioner."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into the rich ecosystem of third-party and first-party tools that help Power BI developers build, test, deploy, and optimize their models and reports. From SQLBI's comprehensive overview to hands-on favorites, this episode is a toolbox tour for every Power BI practitioner.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/RmlqH74Hn64" 
  title="Tools in Power BI - Ep. 423"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Manage connections for shortcuts | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/manage-connections-for-shortcuts//)** — Shortcuts in OneLake provide a quick and easy way to make your data available in Fabric without having to copy it.&nbsp; Simply create a new shortcut and your data is instantly available to all Fabric workloads. When...

- **[Shortcut cache and on-prem gateway support (Generally Available) | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/shortcut-cache-and-on-prem-gateway-support-now-generally-available//)** — Shortcut cache and on-prem gateway support are now generally available (GA) Shortcut cache Shortcuts in OneLake allow you to quickly and easily source data from external cloud providers and use it across all Fabric...

- **[Announcing Copilot for SQL Analytics Endpoint in Microsoft Fabric (Preview) | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/announcing-copilot-for-sql-analytics-endpoint-in-microsoft-fabric/)** — We&#8217;re excited to introduce Copilot for SQL Analytics Endpoint, now in preview – a transformative, AI-powered assistant built to change how you query, explore, and analyze data within Microsoft Fabric’s SQL...

## Main Discussion

This episode centers on a comprehensive SQLBI article by Marco Russo and Alberto Ferrari that catalogs the ecosystem of tools available to Power BI developers. Mike and Tommy walk through the article and share their own experiences with many of these tools.

- [Tools in Power BI – SQLBI](https://www.sqlbi.com/articles/tools-in-power-bi/) — SQLBI published an extensive overview of the Power BI tool ecosystem, mapping tools to each phase of the content lifecycle: design, build, test, deploy, manage, optimize, and monitor. The article covers both third-party community tools and first-party Microsoft features.

### The Power BI Content Lifecycle

The SQLBI article frames tools around the content lifecycle — design, build, test, deploy, manage, optimize, and monitor. Mike and Tommy discuss how each phase benefits from dedicated tooling and why relying solely on Power BI Desktop limits what you can accomplish. The key insight is that you don't need every tool, but knowing what's available helps you pick the right one when a specific problem arises.

### Essential Third-Party Tools

The guys highlight their go-to tools from the ecosystem. DAX Studio remains indispensable for query testing and performance analysis. Tabular Editor is a must-have for model development, enabling faster editing, best practice analysis, and advanced deployment scenarios. Bravo and VertiPaq Analyzer from SQLBI round out the toolkit for model analysis and documentation. The conversation touches on how these tools have matured from community passion projects into professional-grade solutions.

### First-Party Features Catching Up

Microsoft has been steadily adding capabilities that overlap with what third-party tools traditionally provided. The discussion covers newer first-party features in both Power BI and Fabric that are closing the gap — from improved deployment pipelines to built-in performance monitoring. Mike and Tommy weigh in on where first-party still falls short and where third-party tools continue to offer a significant edge.

### Choosing the Right Tools for Your Workflow

Not every developer needs the same toolkit. Mike and Tommy talk through how to evaluate which tools make sense for your specific scenarios — whether you're a solo developer building reports from Excel files or part of an enterprise team managing hundreds of semantic models in Fabric. The practical advice: start with the problem you're trying to solve, then find the tool that fits.

## Looking Forward

The Power BI tool ecosystem continues to grow as Microsoft Fabric expands the platform's capabilities. Expect more integration between first-party and third-party tools as the developer experience matures. Mike and Tommy encourage listeners to explore the SQLBI article as a reference guide and experiment with tools they haven't tried yet.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=31s" target="_blank">0:31</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone. Welcome back. Good morning Mike. How are you? How was your weekend?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=43s" target="_blank">0:43</a> Doing well. Weekend was okay. It was just busy. Lots of things with the kids doing different stuff. Getting some stuff around the house done. We've had some finally some good warm weather.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=53s" target="_blank">0:53</a> So we spent a lot more time outside than we usually do. Yeah. So, I've enjoyed this. It feels like summer is finally starting to get here. We'll see. It might still snow. It's Wisconsin.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=65s" target="_blank">1:05</a> It's going to snow a little in May, but it's only going to be an inch. Nothing. Then it'll melt and go away. Will melt. So, I'm totally fine.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=72s" target="_blank">1:12</a> Mother's Day was this past Sunday, and it was just basically my wife and I were just on our deck, which cicada free because you guys didn't have cicadas last year, right? In Wisconsin.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=85s" target="_blank">1:25</a> I think we did, just not nearly as bad as other places. Like, we're in the band, I guess. When you look at the maps, we get some, but not a ton, which is crazy, especially how insane it was here.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=98s" target="_blank">1:38</a> Like, we lost half the summer being able to go on our deck that someone just built because how many bugs there were. So, now we're like, "Oh, wow. Nice." May is a great time of year to be outside. Nice. Excellent.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=111s" target="_blank">1:51</a> Well, enjoy that warm sunny weather because the rest of your day is spent in the basement working on things and getting stuff done for clients. So, I know how that game goes. You're in the studio most of the time.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=127s" target="_blank">2:07</a> Oh, yeah. Which is funny. All right. Anyways, jumping into our main topic today. So, our main topic for today will be talking an article through SQLBI. It's talking about the different tools in PowerBI.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=137s" target="_blank">2:17</a> And so, we're probably going to need to react to this a little bit. Kurt Buer wrote the article. There's a great comprehensive list of which tools can do what things. What can you do with various tools?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=150s" target="_blank">2:30</a> And I want to unpack some of this. I think there's a lot of interesting things that are outlined here. There's actually a lot of tools that are distributed across all these experiences. So, yeah, I'm really curious to see where we're going to take this one.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=164s" target="_blank">2:44</a> There's a lot of information packed out on this one single visual that they have going on here. So, it'll be interesting. Yeah. And there's a few things I think we're going to have some fun with.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=178s" target="_blank">2:58</a> We're going to debate a couple things on here. So, we'll see where it goes. And also, I'm going to give you a little bit of a vision of where I'm going with some of my tools, things that I've built. So, very exciting there as well.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=190s" target="_blank">3:10</a> Awesome. That being said, let's jump over to some of our news for today. Tommy, what kind of news items have you found for us?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=197s" target="_blank">3:17</a> Two shortcut based announcements by the Fabric team. So, the first one is really awesome. We can now manage your shortcuts in a lakehouse. So, shortcuts.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=209s" target="_blank">3:29</a> Yeah. Which is odd that this hasn't been available. You had to make one and then use it and then if you got it wrong or you wanted to update it, you had to like delete it and make another one.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=221s" target="_blank">3:41</a> And that's what I usually did. I was okay with that, how cool it was. But now they're like, we're gonna add a little more admin to this. So what you can do is actually right click on the lakehouse or go to the lakehouse and actually manage all the shortcuts.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=236s" target="_blank">3:56</a> Excellent. Shortcut connections because it is a connection. It's not, again something which I was like you Mike very much going I don't need to delete. It's fine.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=249s" target="_blank">4:09</a> Exactly right. Yes. I think this is very very helpful. A very needed added feature. This is like a creature comfort at this point. It was good before, but much better now.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=259s" target="_blank">4:19</a> And again, this is probably an expected feature to be there. Anyways, now Tommy, is shortcuts out of preview or shortcuts still in preview?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=267s" target="_blank">4:27</a> So, I believe there are many things in shortcuts that are still preview and GA. Yeah, that's actually the shortcut cache are now GA.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=275s" target="_blank">4:35</a> Okay, so this is where it gets a little bit hard. So we say shortcuts like not every feature of a shortcut is available yet or generally available. Some of it is, some of it isn't. So it's a little bit hard to know what features are really out right now.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=289s" target="_blank">4:49</a> Yeah. I know there's that preview page, but that is a ton of stuff that Microsoft's putting on there, but shortcuts and the ability to cache a shortcut is GA. A shortcut. Awesome. I'm not sure if it's GA.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=306s" target="_blank">5:06</a> That's amazing. All right, we have to dig more on that a little bit later. If chat knows if shortcuts are GA, throw something down in chat. And I'm looking at the article right now. I'm just trying to figure out, it doesn't appear.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=321s" target="_blank">5:21</a> It's doing like a create a OneLake shortcut. Depends on what kind of shortcut you're trying to make. Looks like when I look at OneLake shortcuts or ADLS Gen 2 shortcuts, those are already released. It doesn't say anything about preview on those items.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=335s" target="_blank">5:35</a> So, I think shortcuts are GA, just maybe some of the features are not quite GA yet. Well, yeah, I'm going to try to see if I can find that giant announcement that always has the what's new features in preview. I'll get back to that.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=350s" target="_blank">5:50</a> Mike, have you tested out the manage connections yet? The shortcut, that new interface. I haven't had a chance to go in there and manage the shortcuts yet. I need to start playing with those a bit more.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=358s" target="_blank">5:58</a> One thing that we do a lot of work with is we manage a lot of shortcuts going directly to Databricks or Databricks creates tables of data and then our Fabric environment makes shortcuts to that gold layer of tables inside Databricks.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=374s" target="_blank">6:14</a> So in doing that, we do a lot of API-driven stuff. So we don't manage these shortcuts manually. We do a lot of it with automation, talking directly to the Unity Catalog getting the information out that we want.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=386s" target="_blank">6:26</a> We have been exploring using the Databricks Unity Catalog connector to connect to the Unity Catalog and get all those shortcuts out directly from the Unity Catalog which is actually looking pretty promising.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=401s" target="_blank">6:41</a> There's a couple weird things around Databricks does some weird stuff around materialized views. When Databricks says materialized, I'm learning this. When Databricks says materialized view it is not the same thing as a Fabric materialized view. They are two different things it seems like.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=418s" target="_blank">6:58</a> So I got to unpack that a little bit more and understand a bit more what's the difference between the two spaces.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=422s" target="_blank">7:02</a> difference between the two spaces. but you don't want to connect directly to a materialized view inside data bricks. You need a managed table to connect to.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=454s" target="_blank">7:34</a> few things. It's not just shortcuts. So the things Yeah.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=484s" target="_blank">8:04</a> another article. I'll make sure I put both of these in the chat window as well for everyone to go read up or check out these links as well. So the first link I'll point out right now is the first article managing connections.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=516s" target="_blank">8:36</a> available. So Tommy maybe unpack this feature. What is this doing?.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=546s" target="_blank">9:06</a> basically how everything whenever anything touches your public error APIs. The other part of this is on premise gateway support with shortcuts is also generally available. So those are two separate features the shortcut cache and the onremise gateway with shortcuts.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=577s" target="_blank">9:37</a> shortcuts., with all I don't know. I'm trying to think of are we doing too much because if we have all the shortcuts in my lakehouse and then I'm going to create a shortcut from No, your shortcut the gateway is just the gateway is just a connection back to your on-prem, right? Yeah.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=607s" target="_blank">10:07</a> with this? I'm not sure I understand what you're asking. Can you maybe refine it?.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=638s" target="_blank">10:38</a> like if you mirror a SQL database it's going to physically move like records into the lakehouse okay I understand that one but if you do like a datab bricks mirroring data bricks mirroring doesn't copy the physical rows of data over from datab bricks into the datab bricks object It basically just makes the shortcuts for you and then you read back from the source. The data stays in data bricks in this ads gen 2 storage account and you read directly from that. Okay, also makes sense.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=672s" target="_blank">11:12</a> is you have data source information on the other side of the gateway on prem and then the gateway is just supporting the ability for you to real time go back and look at that on-prem information through the shortcut would be my understanding. So there's no I'm not again I could be reading the feature wrong here but I'm not envisioning that the shortcut is actually doing anything on the gateway other than and the gateway is holding the connection and then when your semantic model needs that information or the you're reading like

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=703s" target="_blank">11:43</a> so the table lives in the lakehouse but it's a shortcut that's not there's not data underneath that shortcut it's just a link back to like oh by the way this is where you would go get the data from oh it just happens to go through the gateway and then back to the on-prem solution again the example they give here is they have a cache so I think there's also some things here too. The example is let's say let's say you have a semantic model or a spark job reading something from the lakehouse. I believe

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=735s" target="_blank">12:15</a> the caching portion of this is let's see we're talking about shortcut. Yeah. Okay.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=766s" target="_blank">12:46</a> that way, as long as you're trying to read the information, it's super fast. You're going right from data sets right to the lakehouse. The cache is then being used to hydrate the data.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=796s" target="_blank">13:16</a> you'd want to cache the data have it cached in the lakehouse and that just feels more efficient to me. Does that make sense what I'm describing there? No that's perfect.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=826s" target="_blank">13:46</a> of security, right? We have to put the gateway inside AWS to go connect to those things or and again I think the other the other concept here is you need if you had onrem data, right, it has to be in an S3 compatible storage

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=843s" target="_blank">14:03</a> So you could put data directly on prem but an S3 storage format is what you need to use in order to leverage this shortcutting with caching through the OneLake or through the lakehouse. So that's how I interpret it.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=858s" target="_blank">14:18</a> Interesting feature. I don't know how much it's going to be. Someone's probably asking for it. I'm probably not just going to be heavily using that. I'm probably going to be more focused on just moving my data directly to the lakehouse in general.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=873s" target="_blank">14:33</a> All right, let's go to our last topic for today. Announcing Copilot for SQL Analytics Endpoint. What do you think about this one, Tommy?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=880s" target="_blank">14:40</a> How about this announcement? So, when now that we have support for Copilot for all of us and is for all the people now, this is something that I think it just needs to be part of everything. And I know the expectation and I'm going to sound bratty, but it should be pretty easy for autocompletion in every part of Fabric.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=903s" target="_blank">15:03</a> I know it's a big deal with the announcement. I'm super stoked about it, but it's like come on. This is that we're dealing with just code here regardless if it's a SQL endpoint or a database or a lakehouse. Common things I should be able to try to do in Copilot.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=924s" target="_blank">15:24</a> I get they're treating different models but again none of these Copilots are touching in a sense or really looking at my data in a sense of scanning it unless it's a data agent. So it should be very quick to implement. So this is just honestly are we getting to the point where these Copilots and AI is just the expectation now?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=942s" target="_blank">15:42</a> Oh that's interesting you go there Tommy because I was going to actually make a note around this one on this particular topic. More and more whenever I buy a program or look at a program, I'm expecting — I think we're hitting a moment where if you don't have something that's AI based as part of your application, you're missing the boat.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=968s" target="_blank">16:08</a> There's an expectation of simple things like generating images or having anytime I'm writing text for things. Almost every single one of my tools that I use nowadays has some sort of rewrite with AI, do something with AI. There's these little nuggets here that are just refinements, right?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=987s" target="_blank">16:27</a> It's almost like having a second set of eyes to read over whatever you're doing. And I really think there's something to that. There's definitely something that is very much important around that. It's becoming an expectation.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1003s" target="_blank">16:43</a> I think now we may be seeing this expectation a little bit earlier than other people, but just because we're in the tech space, right? We're in places where there's a lot of code, it makes sense to put agents and Copilots against those things.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1017s" target="_blank">16:57</a> So now I'm actually looking for if I have a program that I'm using and it doesn't really incorporate AI. I'm actually looking at the program going, man, they could put AI right here or I'm writing a lot of text in this area. Maybe Copilot should be written over there. It's becoming very common.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1031s" target="_blank">17:11</a> And I think the expectation is being set. Does that make sense? I'll do you one better there. Not only am I expecting an AI tool in most things now, whether it's Confluence or Cursor or whatever, I'm expecting it to be good.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1048s" target="_blank">17:28</a> And there are a few out there where I'm like, I know you have an AI tool. I know you're calling this an agent, but this is not helping me. And it's frustrating too because we also are getting to the point where we're familiar with an expected output with a lot of these things regardless if it's code or documentation or writing.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1068s" target="_blank">17:48</a> And so honestly with Copilot and Fabric because all the actions that it is being able to simply go through and like I said help me do autocomplete, help me see what I can do next. Yes, I know they are working with being able to with the SQL analytics endpoint to actually go over your data and actually understand the schema.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1096s" target="_blank">18:16</a> So they're saying basically some of the questions that you can ask it is like hey show me total revenue. So well one thing I'm finding interesting is I don't think the agents are going to be — so I just started playing with data agents slightly just trying to get into a model and started to play with some of the data.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1111s" target="_blank">18:31</a> Not super impressed with data agents. My initial reaction — I tried it. I caught a couple major errors right at the very beginning. It did a little bit of something. And to your point, Tommy, I was looking at some of the usage on it. Every time I was submitting prompts very quickly looking back on the usage, back on my capacity metrics app.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1129s" target="_blank">18:49</a> When I was using it I was running it at around whatever prompts I was sending in, 100 to 400 CUs was used every time I submitted some sort of prompt. So that's a pretty good amount of compute units because I run a pipeline every night and the pipeline runs in one day.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1149s" target="_blank">19:09</a> It loads a series of data and it runs for maybe 4,000 CUs every night. It's just this slow bleed of things. So I'm trying to get my feet ready — what does this look like? What's the impact going to mean to me?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1164s" target="_blank">19:24</a> One thing I've been doing a lot that's free that I don't have to pay for is in my Chrome or my Edge browser I have a Copilot attached to that. There's literally Copilot attached to that. So I go right there and I click on the Copilot and just talk to it, open it up.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1179s" target="_blank">19:39</a> I don't need to actually use it in the experience that's given to me through Fabric. I can actually use the browser version of Copilot. So I find I'm often spending time trying different Copilots now.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1194s" target="_blank">19:54</a> So this is one thing I think is a little bit not misleading, but I wish it would do a little bit better. When I use VS Code Copilot, I can pick from multiple different engines or different models. Right now I have my Copilot and my VS Code up right now.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1208s" target="_blank">20:08</a> I can use Claude 3.5 Sonnet. I can use Claude 3.7 Sonnet. I can use Gemini, which I believe is Google's version. And then there's OpenAI GPT 4.1, GPT 4o and 4o Mini. It's in preview.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1226s" target="_blank">20:26</a> So there's all these models I can go pick from and I can manage additional models if I wanted to. I could go to Anthropic. I could go to things in Azure. I could add Grok as well. So there's other APIs you can add to different things and add them to VS Code.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1248s" target="_blank">20:48</a> I feel like that's what I need because maybe Microsoft is making the best decision on which AI to use. Maybe they're using Gemini to write SQL. Maybe they're using Claude Sonnet to write. I don't know which one they're picking.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1260s" target="_blank">21:00</a> And so for me, the user, I sometimes feel like I get stuck occasionally. Like I write a prompt,

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1266s" target="_blank">21:06</a> Occasionally like I write a prompt, the AI tries to answer a question and I don't understand it or it doesn't solve it correctly. And I think at that moment I'm almost like I'd like to try a different engine. Maybe the same prompt on a different large language model. What do you think Tom?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1281s" target="_blank">21:21</a> No, I completely agree because I think right now Copilot in Fabric, there's only eight copilots, but really there's one persona I think they're reaching out to there and it's just that general like, hey, we're going to be a general copilot, be a general agent for general questions and generally answer things because depending on the skill level.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1306s" target="_blank">21:46</a> What I'm looking at here, Mike, and this is different with other copilots, is with the SQL analytics endpoint, and I'm trying to find this in the documentation, is not only can I do code completion and like how do I do something, but it's saying, hey, you can actually look at your SQL endpoint and you can actually generate the SQL query like, hey, get customer orders from a CRM with fulfillment data and it should spit that back out.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1337s" target="_blank">22:17</a> But the thing is compared to you or me, like I can't necessarily say hey I'm really in dev, I'm an expert Fabric developer, I know what I'm doing, so help me with advanced things. Compared to I'm a business user and I just want to look at data, it's the same copilot.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1353s" target="_blank">22:33</a> So I think you and I are probably getting more frustrated or not getting the results we want because it's saying hey you probably don't know what you're doing or you're very general. So yeah, regardless of the model it's using, right now the only customization is Copilot Studio, but that doesn't touch Fabric. So it's frustrating from a Microsoft customization standpoint.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1380s" target="_blank">23:00</a> Yeah, that's, I really need us just like with automated insights, man. Like I need, they got to give the ability for people to be able to customize their copilot for their organization or model it themselves. I think so a little bit.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1398s" target="_blank">23:18</a> Yes. And what we're going to probably talk about today as well is where does Copilot start eating some of these external tools and helping you build some of them, build with them as well.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1411s" target="_blank">23:31</a> So there's this idea of like some of the things that I really like is I like being able to be critical of what the AI is doing, right? I like being able to see that it's doing some work. I can actually give it a lot of simple things to do. Hey, write general descriptions for everything and then I can review the output of the results of that.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1437s" target="_blank">23:57</a> That's where I think a lot of these copilot things work well for me. I've been doing a lot of experimentation with building websites, building applications, building UI experiences with Copilot and agents and I'm quite impressed, like it's amazing how much the agents are doing things for me.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1446s" target="_blank">24:06</a> And then also I would go back to, I was watching through YouTube, I was just scrolling through YouTube Shorts and I saw a conversation between Mark Zuckerberg and Satya Nadella. And Satya was, Mark basically asked him, how much of your code is probably being generated by AI.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1461s" target="_blank">24:21</a> And so Satya's metrics were saying Microsoft is roughly seeing 25 to 35% of the AI doing code writing generation for them and it's getting pretty accurate and they're able to use it in their programming.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1477s" target="_blank">24:37</a> So I think particularly with Microsoft, can you imagine that Tommy, 20 to 30% of your company, so I'm just looking at this going from a standpoint of like what tools should I be providing to my team to help them build things. And 25 to 35% of my code or things that I'm trying to build should be starting to get built by AI.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1501s" target="_blank">25:01</a> I should, this is to me this is a really big game changer and your teams need to start figuring out how to use this to their advantage. And honestly man, here's the thing though too, that skill is that really that prompt engineering or understanding, it's not just being able to sit and chat with it.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1519s" target="_blank">25:19</a> So I'll give you a really good example over the weekend. One of the things that has always bugged me with command line tools is autocomplete and suggestions. And there's this great article by someone who's more of a developer, but basically I have a whole GitHub repo with custom instructions or rules that are basically set up that is dedicated to you're going to write Python with these dependencies.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1545s" target="_blank">25:45</a> And guess what it's done for me? It's written for me a PBI Tools autocomplete. So basically it's written, so I have all these now shell-based tools but it's because you got to understand how to in a sense get to that point where it's going to get you what you want. But we don't have that ability right now with Copilot and Fabric.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1567s" target="_blank">26:07</a> Yes. So well dude I think it's time to get into the tools. I think it's time to get into tools now. I think we've been talking about a specific tool but let's talk about all the other things. And I hope on this list that Kurt gives us, there is, I hope there's a copilot on here somewhere. I didn't even check for it actually.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1584s" target="_blank">26:24</a> They have, he hasn't even have copilot on here. There's where it is far down. Oh, maybe not. He's got LLM tools. Okay, maybe LLM tools where he's lumping that in there. Okay, maybe that's where he's going with it.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1602s" target="_blank">26:42</a> Okay. Anyways, this is where I think there needs to be a copilot item on here as well, probably at some point. Maybe LLM tools is what he's looking for. All right. Anyways, let's drop the article here. So, let me drop the full article. This is from SQLBI. This is their tool assessment, which is interesting here. And let's unpack.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1624s" target="_blank">27:04</a> What do you think, Tommy? What's your looking at this one at your initial blush of where these tools are going and which tools are doing what things, what do you think, what do you see here going on?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1637s" target="_blank">27:17</a> So what Kurt basically broke it down to first with the, let's break it down not just random tools but the life cycle of building a Power BI model and report. You're going to design, build, test, deploy, manage, optimize, monitor. Those are your basic phases.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1653s" target="_blank">27:33</a> And with that he basically categorized the main tools and where they fit into that. Which ones are more for reporting, which ones are based on some of those phases, which ones are report and which ones are more semantic based tools.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1665s" target="_blank">27:45</a> We have, and I'm actually looking at the list right now, well over 20 outside of Power BI Desktop, not Microsoft built applications. And all of these are, yeah, some of them are standalone for Windows, some are just the web, some are custom visuals, but these are all things.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1686s" target="_blank">28:06</a> Custom visuals, but these are all things that go through that different life cycle. And the crazy thing is I would say the majority of them are semantic model based tools. I think only a few of them are just for solely for report and design.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1701s" target="_blank">28:21</a> And Mike, we got a lot of tools over the years. It started with external tools. That's where this whole idea, this whole initial seed came from. And now we have Tabular Editor, Bravo, Analyze in Excel, PBI Tools, VertiPaq Analyzer.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1720s" target="_blank">28:40</a> We have things like Power Designer which is the theme generator, and I don't know man there's a lot of tools. I know well and above a lot of these and familiar with them. But that being said, Mike, this is like your worst nightmare I feel like, or this is the thing that when it comes to so many choices here for tooling.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1745s" target="_blank">29:05</a> It's almost like, what was the word I'm thinking of? This is something I see you easing concern on, urging concern on with just the fact that there's so many tools out there. Do you like that there's over 25 independent tools out there?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1766s" target="_blank">29:26</a> Well, let me say this. So, of a lot of these tools, let's talk about these tools that are out here. Power Designer, which is one that I'm familiar with. That's one we build. Tabular Editor, Bravo, Analyze in Excel, DAX Studio, PBI Tools, ALM Toolkit, VertiPaq Analyzer, Measure Killer, PBI Explorer, PBI Inspector, DAX Optimizer.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1788s" target="_blank">29:48</a> All of those tools, maybe with the exception of DAX Optimizer, I'm not sure if DAX Optimizer is actually in my tool. All those can be installed with one tool. I'll just point out, this is one of the things I saw very early on was this proliferation of random tools that you were going to need to go figure out how to build things with.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1804s" target="_blank">30:04</a> And so looking at all these different tools through the build, test, optimize, develop things. When I look at the spectrum of all those tools, you can actually download and use almost all of them with Business Ops. So Business Ops is a tool that I've produced to help you install all these different tools.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1822s" target="_blank">30:22</a> And so I will put the link here for those of you who do not know what this is. But we've been continually updating and keeping our Business Ops tool up to date, current, versioning all these items today, currently. So you can get all this down, we're at version 3.1.5.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1840s" target="_blank">30:40</a> And we've just been really keeping the tool experience up to date. So, I'll just put that out there right now. If you want to get a lot of these tools and test them out very quickly, you can easily do that with Business Ops. So, I'll just point that out there.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1851s" target="_blank">30:51</a> To your point though, Tommy, this having lots of tools like this indicates to me like there's something missing in the raw part of the product potentially, right? When I look across these tools, I would expect that the tool that Microsoft builds, right, Power BI Desktop, Power BI Desktop should be able to do all these things.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1877s" target="_blank">31:17</a> If not very well, it should be able to do everything, right? So the one thing here that just boggles my mind is why isn't Power BI Desktop part of the deploy option, right? Power BI Desktop does have some level of optimize as well. So I'm not sure.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1896s" target="_blank">31:36</a> So to me when I look at this chart here on the very bottom they have Power BI Desktop, they have DAX query view, Tabular Editor. Okay, fine. Those are more about authoring experiences. And then there's a performance analyzer pane for query limit simulations. Okay, fine.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1914s" target="_blank">31:54</a> But there's also like optimize. You do have the performance analyzer pane in general. Why wouldn't that be something around optimizing? I don't know why that doesn't exist. And now that Copilot exists inside the web creation experience, can we not use Copilot against a semantic model to talk to it yet?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1933s" target="_blank">32:13</a> Like that's like optimize this model, optimize these measures. So, I'm not sure I really agree with the optimize portion of this. Even inside VS Code, Visual Studio Code does a lot of these things. It can create models. It can build reports. It can do a lot of these things as well.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1952s" target="_blank">32:32</a> But I just feel like there's something missing here. The whole desktop version of this just seems to be underrated to what it needs to be called. So, does that make sense?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1962s" target="_blank">32:42</a> Yeah. It's interesting you say that too because have you noticed too in the web, really neat feature now, if I go to semantic model I can do the best practice analyzer or view the performance of that semantic model and there's these two new buttons you're like oh that's neat and all they are is notebooks.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=1984s" target="_blank">33:04</a> To your point, yeah, Power BI does some of these things fine, like the performance analyzer's good, but you can't... Semantic Link Labs, like where's Semantic Link Labs on this one? Semantic Link Labs does all this stuff, right? Semantic Link Labs can design reports, can build reports, can test things.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2005s" target="_blank">33:25</a> Like designing reports, that's a little far walk to say it can design reports. Sure, can it change the colors and the visual of a report? Sure. But is anyone actually in their workflow going to prefer to use Semantic Link Labs or be more proficient at it at this time?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2023s" target="_blank">33:43</a> Well, I don't know. This is the point of extending things with code, right? So, this is another one here I don't see on this list that I think would be very useful to put there. What also throws us for a loop is there's a mix of like, okay, what are we talking about, the report side? Are we talking about the semantic model side?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2040s" target="_blank">34:00</a> Right? So, all these tools have two different patterns to them, right? I think they should have been grouped into these are tools that are model-based tools and these are tools that are report or visual based tools. And to me, those are two things that are different, right? Those are two different worlds in this report.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2062s" target="_blank">34:22</a> So to me it should be broken down into two separate sections. You're focusing on the model and you're focusing on the report. Because I think tools are built in two different patterns that way. And then maybe you have a section where okay, look, here are some tools that actually do both, right? Desktop being the one I would say would be doing both.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2081s" target="_blank">34:41</a> It does a lot of modeling as well as it also does a lot of report building. So that would be one tool I would say you'd have to have that in both sections.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2091s" target="_blank">34:51</a> You may want to scroll down on our agenda my friend because he does break it out that way, and again thanks to our lovely LLMs it makes a nice table. But yeah, so it is broken out that way. So he does have tools that support semantic models, not necessarily better for that, but that it supports it.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2108s" target="_blank">35:08</a> It supports it. And then tools that support reports and tools that do both. And the majority of them are semantic models. Tabular Editor, like you said, DAX Studio, Vertipaq Analyzer.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2121s" target="_blank">35:21</a> It's funny if you just took, Mike, the old school, the original three to me of external tools — Tabular Editor, DAX Studio, ALM Toolkit. Right, back in the day they were pretty more or less required, or at least one of them was if you were going to do anything advanced.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2143s" target="_blank">35:43</a> To me, and where we still are now, if you were to say what's required — like if everything else from the DAX Optimizer, which is to me it's a nice to have. The data generator is nice to have. I really wouldn't put that in here.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2159s" target="_blank">35:59</a> The DAX date template is nice to have, but I'm not recommending for people to use DAX dates. I'm going to tell them you need to have a master date. Sure, we still have the main three, but I think the only one that I think to your point, TMDL is not here, but it's not a — it's a language.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2177s" target="_blank">36:17</a> Well, yes and no. There's the TMDL view that is used and TMDL view can be used in multiple places. So the TMDL view is a desktop feature that lives only in desktop. It's not in the service yet. But then you can also use a TMDL-like view that's a language and you can get that in VS Code.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2195s" target="_blank">36:35</a> So like pattern reusing — there's some things here that I think are also a bit misleading a little bit because I'll argue all day long, they've commandeered Power Designer and put us in the only create theme files. Well that's not all that it does.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2211s" target="_blank">36:51</a> It doesn't just create theme files. It creates theme files. It also creates wireframes. It also creates pages. You can build a full report without any data in it. So, I'd also argue Power Designer should also be part of the create wireframes or create mockups of reports. That's part of that solution.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2227s" target="_blank">37:07</a> Figma was the big one there. I would argue Figma's okay, but that could be like PowerPoint. That could also be Paint. Figma is a very complex tool for building report design or graphics. It's amazing. It does a great job.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2247s" target="_blank">37:27</a> I've never heard of Excalidraw, so I don't even know what that means. I haven't even checked out that tool. That's one I would probably want to check out on my own. But what about Canva? What about Adobe Express? I think those are also tools that are very good at building background images for pages.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2263s" target="_blank">37:43</a> So, I think those are also really good experiences for helping you to wireframe out or mock out what a report might or might not look like. Just some other options there as well.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2277s" target="_blank">37:57</a> So I do think there are some really interesting points later on the article. So I do like the fact that Kurt goes through a section here and he starts talking about the different areas he's talking about — design, build, test, deploy, manage, optimize, and monitor.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2293s" target="_blank">38:13</a> I do think these are really important to call out because I do think this is part of the progression of people and how they learn how to build Power BI. I think a lot of times you start focusing on the build first, but you don't really spend a lot of time doing the design work.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2307s" target="_blank">38:27</a> I think you do a lot around deploying and managing stuff, but you really don't do a lot with optimizing, monitoring, and testing until later on. So I think there's a maturity portion of this that not every tool is needed at every point in your user's journey essentially.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2325s" target="_blank">38:45</a> So I was curious your thoughts there, Tommy. What do you think about the different sections and using them at different times?

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2336s" target="_blank">38:56</a> So, first off, I'm glad I'm still here because my browser almost said, "Do you want to kill the page?" But we're still here. So, the beauty of a live. But from what I did hear from you about breaking them up, Mike, honestly, there are 25 cool tools here and I've used them all, but in my normal workflow, I use three of them truly.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2361s" target="_blank">39:21</a> Yeah. And I think that's the biggest thing. I believe if you get a question again — but what tool, if you're using a couple tools, I would argue in the beginning version of your beginning world of working with Power BI and tools, you'd focus more on building, deploying, and maybe managing.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2383s" target="_blank">39:43</a> Right, those are maybe your three things, there's three topical areas that you would actually spend more time around. Everything else is not — there's a whole bunch of other stuff that I didn't initially start with the design, I didn't initially start with testing things.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2396s" target="_blank">39:56</a> I didn't initially build optimizing or monitoring. So the tools that I focused more my attention around is all around the build, deploy, and manage in my early career. And then as I got better, as I got more knowledge over time, I spent more time building out design things, building out test elements.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2415s" target="_blank">40:15</a> I found that made a better impact on my reports. And then as I got to scale and we started deploying things out to large organizations, then I needed to have optimizing and monitoring. So that's when I started doing those later on in my career.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2431s" target="_blank">40:31</a> Would you agree with those steps as well, Tommy? Yeah. And honestly, it's the same — I did test everything out like DAX Studio. It's good and it's a good training course, but I think the only people that when you really need that is if I already have Tabular Editor.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2451s" target="_blank">40:51</a> And you have a really good point about everything that's going on with TMDL. Whether or not I am completely on board with it yet, I still love Tabular Editor. I still like some of the other workflows, but TMDL — you can take away a lot of the descriptions in TMDL editor.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2473s" target="_blank">41:13</a> You can write your measures in it and you can use VS Code. That's a huge, huge win.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2480s" target="_blank">41:20</a> All right, Tommy. Well, you're breaking up pretty bad now. It looks like your computer's not going to be happy. So, we're going to probably end this episode a little early because your computer is not working.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2489s" target="_blank">41:29</a> So, we'll wrap it there. I will recommend go jump in, check out the article from the SQLBI team. I'll put that down here in the description below. Go check out the SQLBI article. It is sqlbi.com.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2506s" target="_blank">41:46</a> With that, we want to thank you very much for joining the episode today. We appreciate you. Thank you so much for joining the episode today. Sorry, some technical issues here towards the end. We hope you go enjoy the article.

<a href="https://www.youtube.com/watch?v=RmlqH74Hn64&t=2516s" target="_blank">41:56</a> Go figure out some things that you like to use and tools. There's actually a lot of good recommendations and tools out there. Check out some tools you haven't seen before. With that being said, thank you so much for watching the podcast and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
