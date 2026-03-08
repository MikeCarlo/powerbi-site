---
title: "Naming Conventions – Ep. 405"
date: "2025-03-12"
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
  - "Naming Conventions"
  - "AI Functions"
  - "Best Practices"
excerpt: "Mike and Tommy dive into naming conventions for Microsoft Fabric items and why a consistent structure matters as your workspace grows. Plus, news on AI functions in Fabric and the February 2025 feature summary."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into naming conventions for Microsoft Fabric items and why a consistent structure matters as your workspace grows. Plus, news on AI functions in Fabric and the February 2025 feature summary.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/6qsdrEayuhE" 
  title="Naming Conventions – Ep. 405"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Announcing AI functions for seamless data engineering with GenAI | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/announcing-ai-functions-for-easy-llm-powered-data-enrichment//)** — With AI functions, you can harness the power of Fabric&#8217;s native large-language model endpoint for seamless summarization, classification, text generation, and much more—all with a single line of code.

- **[Fabric February 2025 Feature Summary | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/fabric-february-2025-feature-summary//)** — Welcome to the Fabric 2025 update There are a lot of exciting features for you this month! Here are some highlights: In Power BI, Explore from Copilot visual answers which lets you do easy ad-hoc exploration. In Data...

## Main Discussion: Naming Conventions in Microsoft Fabric

Mike and Tommy discuss a blog post by Marc Lelijveld on structuring Fabric items through naming conventions — a topic that resonates with anyone managing a growing Fabric workspace.

### The Problem: Workspace Chaos

As Fabric workspaces grow with lakehouses, notebooks, pipelines, dataflows, semantic models, and more, finding the right item becomes a real challenge. Even with folders and taskflows, inconsistent naming makes it hard to quickly identify what an item does and where it fits in the data flow.

### Marc's Naming Convention Approach

The article from [Data-Marc](https://data-marc.com/2025/02/13/structure-fabric-items-by-applying-naming-conventions/) proposes a structured naming pattern: the first two characters identify the item type (e.g., DP for Data Pipeline, NB for Notebook, LH for Lakehouse), followed by an underscore, then a purpose code indicating the layer (like ingest, transform, or serve), another underscore, and finally free text for a descriptive name. This creates immediately scannable, self-documenting item names across the workspace.

### Why It Matters

Mike and Tommy explore why naming conventions are more than just organizational tidiness. When you're working across teams or handing off projects, a consistent naming scheme dramatically reduces onboarding time and confusion. It also helps with governance — you can quickly audit what items exist and their purpose without opening each one. The discussion touches on how different organizations might adapt the convention to their own needs while keeping the core structure intact.

## Looking Forward

Naming conventions are one of those foundational practices that pay dividends as your Fabric environment scales. Mike and Tommy encourage listeners to think about establishing conventions early in their projects rather than retrofitting them later.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=31s" target="_blank">0:31</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Hello everyone, welcome back to the show. Good morning Mike, welcome back from out of town or out of country.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=42s" target="_blank">0:42</a> We've been, we recorded last Tuesday, that was like the last recording we did live last Tuesday and then we recorded something for THS for that Thursday that week last week. So after that I was traveling, Tommy you've been traveling, we've been all over the place a little bit here recently.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=57s" target="_blank">0:57</a> I just want to open up with a very interesting topic. Before I do that and before we do the news, let's talk about our main topic for today. Our main topic for today is going to be around naming conventions.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=87s" target="_blank">1:27</a> Data Mark has a great article around fabric items and how he likes to apply naming conventions. I'd like to unpack this, let's understand what he's talking about, like what naming conventions are, how he likes to use them, what syntax he's using.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=103s" target="_blank">1:43</a> I disagree with a lot of, not a lot, there's a couple areas here that I really disagree with some of his naming conventions, I don't like them. So I'm going to give you some of my opinion on some of this because I believe there's a lot of redundancy in his naming conventions, so we'll unpack that as we go.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=130s" target="_blank">2:10</a> And also something he doesn't talk about here which I want to explore, some new features that Fabric is doing that I think will make it also easier for you to assist with your naming conventions. Okay, that being said, let's jump into the news for today.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=155s" target="_blank">2:35</a> All right Tommy, before we get going into the news I just want to ask you, I had some, as I was contemplating traveling around doing things, I don't know your travel routine. I've, we've gone on trips together a couple times, we've shown up. So what is your stance on travel, and are you a carryon person or do you check a suitcase, like what's your vibe when you travel?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=199s" target="_blank">3:19</a> Dude, I'm all about optimization and just like thinking someone's always behind you. So I have a pretty optimized travel routine especially when flying. My shoes are off at the same time I'm taking out my laptop before I even get to security.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=217s" target="_blank">3:37</a> You don't have TSA pre-check? I need to, I'm so fast, I'm faster than pre-check. No, so I have, the fact that there's a line to get through pre-check, that's like just getting to the place where you're going to be doing security, that's the part I don't want to deal with, lines everywhere.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=254s" target="_blank">4:14</a> Dude Tommy, go get TSA pre-check, it's the best. I don't know, $85 or $100 you've ever spent traveling. That is worth your time to not hassle getting through the security lines. You would love that part. So funny, that is funny.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=279s" target="_blank">4:39</a> So I do have a system though. Do you wear specific clothes going to the airport that you know will get through the metal detector, like no jeans, no belts? You're intentionally wearing like slip-on shoes. Do you think about those things when you go through the airport?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=307s" target="_blank">5:07</a> Yeah, oh yeah, no my belt and watch are already off, I put them in my shoes. No no, time out, you're one step behind where I'm at. I don't even wear, you're saying packing, not even what I wear to go to the airport. I have a travel outfit that I use when I travel.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=329s" target="_blank">5:29</a> And the travel outfit doesn't even allow me to wear a belt, it's a beltless outfit. And the shoes that I'm wearing, again I'm TSA pre-check so I don't have to take off my shoes, but I intentionally pick shoes. So everything I pack has to be a certain way, I'm literally changing how I even get to the airport or what I wear the day of travel because I want to be more efficient.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=370s" target="_blank">6:10</a> Ah see, I don't do all the packing and I also need to wear the belt, the nice shoes, rather than putting that in your suitcase. So I am not a check, I am carryon. Yeah, okay, me too. I'm a carry on person.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=387s" target="_blank">6:27</a> And how long can you go in a carryon? Like how far? Six days. I think I can get two weeks in a carryon. I think I can stretch it. And I think for me when I think about carryons, the weakness of a carryon is the size of your pants.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=406s" target="_blank">6:46</a> If you're bringing jeans and like thicker pants wherever you go, those things just take up so much space. You got to find like, even going back to the travel thing, I go out and buy efficient rollable pants that take up even less space. Pants are one of the largest items in your suitcase.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=425s" target="_blank">7:05</a> For women it's probably very different, they pack up a whole bunch of different things. But like me, pants take up the majority of the room, everything else is pretty small. Yeah, I'm pretty efficient in the travel routine.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=437s" target="_blank">7:17</a> Getting there to the airport, I always have a place for my luggage. I always try to do one of the first few rows after first class, that's where I put my suitcase. Because why would you want to put something in front of you?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=457s" target="_blank">7:37</a> Yeah, but you have been traveling really forever, even before your own thing too. What are some tips of the trade that you know? All right, well let me give you some, Michael's lens of things going through travel stuff.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=470s" target="_blank">7:50</a> So one, I don't bring a second pair of shoes. Whatever shoes I'm wearing are the shoes I'm going to wear the entire trip. So I basically designed my whole outfit thing around the shoes. If it's comfortable shoes that I'm going with, I have like these pair of Hokas right now, I like them but they're running shoes, they're not very classy shoes.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=507s" target="_blank">8:27</a> But I would say when you travel to other countries, especially over in Europe, they don't wear sneakers everywhere. Maybe a couple places you'll find them wearing some like running or jogger shoes, but mostly people wear like nice leather good-looking shoes. I haven't found a good-looking pair of shoe that I like that's comfortable that lets me walk, so I'm still hunting for that.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=540s" target="_blank">9:00</a> So that's one thing. The thing is, to your point Tommy, I optimize on the pair of pants. Pants feel like they're a waste of time for me. And when I'm going through the airport I'm always looking for other what appears to be business people.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=562s" target="_blank">9:22</a> So if I'm going through security lines, I'm trying to align myself behind the individuals that have a suit coat or slacks on, or even the airline people. Sometimes you'll get in like the TSA pre-check and all of the stewardesses will go through the checkout. Get behind them because they travel so often and they're super efficient, they don't waste any time.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=588s" target="_blank">9:48</a> So what you want to avoid is the mom, the dad, the kids, the stroller, anything like that. If there's kids involved it's going to be slow and there's going to be confusion going on. Again I have kids, I travel with them, I am that person sometimes, so I understand that. So I intentionally pick lines where there's less kids and things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=629s" target="_blank">10:29</a> So those are some of my travel techniques. When I get to a place, when I'm getting to a location, I can never sleep the first night. The first night is always rough and I think it's just whenever I get somewhere new, whatever bed it is, it could be a comfortable bed, I'm just not exhausted enough to go to sleep, my mind's racing, I can't really calm down.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=666s" target="_blank">11:06</a> So this is probably me admitting publicly like I have a sleep apnea, sleep disorder or something like that. But when I don't sleep that first day, I do the whole day of training or conference or whatever the thing is. When I'm around a lot of people I get really excited, I exert a lot of energy.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=688s" target="_blank">11:28</a> And then the second and third day I get much better sleep. So I'm up late that first night, don't get a lot of sleep, do the second day of activities, and then usually I'm exhausted enough from walking around activities and then I really start crashing and going to sleep. So that's some of my tips or tricks.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=720s" target="_blank">12:00</a> I'm trying to think of any other tips or tricks that I use. I have realized if I go to Fabric conferences, I'm less inclined to bring a carryon to big conferences where I know there's going to be swag or giveaways or something like that, because I just don't want to be cramming everything into my backpacks and things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=748s" target="_blank">12:28</a> Oh, I remembered one. Your computer. So when you're going to places, I have found bringing a decent Bluetooth mouse wherever you go, it's worth investing to get a good mouse and travel with it. So that's one, that's pretty cool.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=764s" target="_blank">12:44</a> The second thing is a travel monitor. You can buy these like 15-inch thin panel displays that you just put in your bag and it just goes with your computer, high resolution. Dude, I'm telling you, the higher resolution you can get, like a 15-inch little second monitor, holy cow, that's a game changer.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=786s" target="_blank">13:06</a> Dude, I saw you do that. That external monitor is a game changer, integral. Especially if you're presenting like a training thing, you could have your notes on the one screen but you can present from your main screen onto their projector or whatever. So if you don't have a second travel screen, you have to get one. I have an Asus version, I'm going to go see if I can find it on Amazon and I'll put it in the chat window.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=812s" target="_blank">13:32</a> In case anyone who's actually traveling and looking to get a travel monitor, I'll go find that and put it in the chat window here. But highly recommended, it's the way to go dude, a thousand percent.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=827s" target="_blank">13:47</a> I know we keep talking about traveling but there are rules of the road when it comes to traveling. Another day I want to just talk about things that bug me about traveling. Give me one or two things that bug you, just give me one thing, let's do that, just give me one thing that bugs you about traveling.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=623s" target="_blank">10:23</a> Thing that bugs you about traveling when you're in line somewhere, because you're always in line at the airport or at the hotel. They always going to be in the line. What's going to happen, people know that they're going to have to take their shoes off or take their computer out. Why aren't people doing this as fast as possible and trying to plan it out?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=644s" target="_blank">10:44</a> Yeah people taking their time, I cannot stand. Also the biggest thing I learned, when you arrive somewhere go to departures, that's where you want to leave from, not the arrival section. That's a game changer. I've heard about that too. I haven't done that one but it's easier for you to walk through departures back up to the arrivals or the security desks than it is to go right to the departures.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=673s" target="_blank">11:13</a> Because the departures especially in Seattle feels like another hack where there's a lot more people, especially when you're traveling a lot of people are coming in when you're coming in because conferences and things like that. So if you're leaving there's usually another wave of people coming in, so there's a lot of people leaving at the same time as well.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=688s" target="_blank">11:28</a> That's interesting. Yeah okay, I wonder if that's something else, the idea of when you're arriving to an airport there's a condensed area. If you think about where people leave for the airport, some go to public transportation, some get an Uber which is hidden away inside the parking garage, some people just get a taxi and there's a whole taxi area.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=711s" target="_blank">11:51</a> So I guess maybe the idea is if you arrive at departures, the distribution of people is much wider because they're going different places to get out of the airport. But when you come into arrivals it's like one road with the list of the airlines in one area, it's a very condensed area compared to when you leave it's not very condensed. Yeah exactly, which makes total sense.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=737s" target="_blank">12:17</a> Interesting. Okay fair, any other things that annoy you or bug you? Ah I think that's good dude, we have a lot to talk about. All right let's move on, let's actually do some news articles. Tommy you picked up a couple things here that are relevant to talk about.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=752s" target="_blank">12:32</a> Before we do, Fabric just released their February update blog recently, that was released last week. Tommy we weren't around for that right? Okay so Patrick from GY Cube released the blog, there's a lot of really good content there. We'll get to that in a moment but one feature that was announced by I believe Aaron released AI functions for seamless integration with generative AI.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=788s" target="_blank">13:08</a> What does gen AI mean, is that like generative? Generative, okay. So let's talk about this one, let's unpack it. It comes with a little YouTube video, there's some things on there. What does this mean Tommy, what is this, why do we care about this stuff?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=817s" target="_blank">13:37</a> So obviously we know that AI is just being a part of more and more what we do and we have our co-pilots, we have our assistants and tools, we have our ChatGPT. But what the AI function and especially more customized in Fabric, this is a big deal because there's a ton of things that we can now interact with, not just co-pilot helping us with code but actually going through functions that were almost an Azure machine learning type thing.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=845s" target="_blank">14:05</a> Analyzing the sentiment, fix grammar in a column, which co-pilot right now cannot do. It cannot iterate row by row or in a data frame. It can tell you based on what you want to do but it's not going to look at the values and tell you if the values are good or bad, and to summarize your data.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=865s" target="_blank">14:25</a> These AI functions in generative AI is simply just taking gobs and gobs of content, both text and I believe I read even images work with this as well. Gobs and gobs of content as input and being able to classify, generalize, and condense that into something that's legible. So some of these out-of-the-box functions that are available.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=895s" target="_blank">14:55</a> Let me understand, I'm trying to wrap my head around the mechanics of this. So it sounds to me like what you're doing is this is on a Spark notebook. So let's clarify here, couple things to quantify about what these AI functions mean. They're not just running in a Power BI report, they're not running in Power Query, they're specifically designed for data engineering workloads. When we start talking data engineering we're immediately talking notebooks.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=919s" target="_blank">15:19</a> So with the release of this now you can go to a notebook, and from said notebook you can write a data frame and it does talk about starting to use these AI functions. You have to hard install on the machine, the cluster that you're going to run. It's doing a pip install which means go get packages from the internet, bring them forward and load them on the machines that you're going to run the AI on. So you're physically adding code to your clusters to make this work.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=949s" target="_blank">15:49</a> Cool, I like it. But then the different functions you can use are like tuned models, they're distilled down to just a single function or group of functions. Yeah so what functions are we looking at here Tommy?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=964s" target="_blank">16:04</a> So some of the bigger ones, if you had a data frame you wanted to analyze the sentiment and text. I think the biggest ones for users are going to be looking at fixing grammar. Slow down, let's go. AI analyze sentiment, so sentiment is on a bit of text or phrases of text, it gives you a score typically between like negative being a zero or lower score and a higher like to one would be a more positive score.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=993s" target="_blank">16:33</a> So you could do sentiment, favorable or non-favorable based on sentiment analysis. I think that's what that's doing. Yeah but sentiment analysis, when I look at data science things, every intern or beginner program of whatever data science is doing, it's always step one first project you do. Make a data frame, throw some text at it and say okay let's do a sentiment analysis. Super basic stuff.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1023s" target="_blank">17:03</a> All right so that, okay fine. Let's go through another one. I think one of the biggest ones is probably going to be this translate for a lot of users. So it can actually translate from one language to another. I don't think that's a big deal, maybe in Europe this is a bigger deal but in the US I don't think we're doing a whole lot of translation between different languages.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1062s" target="_blank">17:42</a> Potentially if we're getting text from a system that has potential input from other sources, there's not a lot of data sources that I'm translating in my report. For some other people maybe that's a use case, definitely a use case, but is it common? No I don't think so. Okay then I know what you're looking for.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1080s" target="_blank">18:00</a> The big winner here is going to be your AI extract and AI classify. But obviously I think those are going to be more useful because you're going to take a bunch of text and extract key topics. Imagine snippets of text from the podcast, this is something I'd like to get into Tommy. I'd like to take transcripts of our podcast and run this through classifying and AI extracting to get keywords, topics, things that we're talking about out of this and see what it does.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1110s" target="_blank">18:30</a> AI summary, I think when I think about what AI is best at doing from my perspective, I like the AI that's becoming commonplace. It's not really AI anymore but it feels so commonplace, when you record a meeting on Teams and you have Teams Premium I guess is what it's called. It has this whole readout, the transcript and then it gives you the key topics, here's the main points. Tommy talked about this, Mike talked about this.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1141s" target="_blank">19:01</a> I can't tell you how useful that is, that's really important. So I think summarize is going to be pretty important as well. And then the extract is just going to be easy for people too because it's easy just to get hey from this column get the email address, get the domain, find a company name, which are things we've tried to Google in Power Query forever.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1163s" target="_blank">19:23</a> Yes so that's going to be really nice. But I think another big part here Mike, besides the out of the box, is if you were to try to use this right now with the current AI functions you would need a high capacity to do so from Fabric. However they are allowing you to configure AI functions to work with Azure OpenAI. So you can actually have your own custom setup.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1194s" target="_blank">19:54</a> To me this is pretty important and I'm very happy to see this. Yeah you're a big AI person in general and so there's a bit of notes you have to click on the documentation to get out of the article into some other places. But it starts talking about how you want to install OpenAI. So couple caveats here, when you're installing these things this is only available in Spark 1.3 runtime or Microsoft's runtime of Spark.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1220s" target="_blank">20:20</a> Right so Microsoft versions their runtime in 1.1, 1.2, 1.3 and that is a bundle of Python libraries, the Python version. So it's a little bit behind what's actually out there in open source but Microsoft fairly quickly updates their things and has them come along for the ride. So you have to be on runtime 1.3 or higher to use this stuff, and then it's pretty simple. You can just import the OpenAI library and you can start using it. That's actually pretty helpful.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1253s" target="_blank">20:53</a> Yeah I'm trying to make sure here because right now I'm looking at the prerequisites, and at least with the transform with AI functions this is what it says. You also need an F64 or higher SKU, or a P SKU with a smaller capacity resource. You need to provide AI functions with your own Azure OpenAI resource using custom configs. So I don't know if that means if I don't have it, that means you're spinning up a piece of hardware in Azure and you're connecting to that and using that as the runner. Yeah it feels like what they're saying.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1246s" target="_blank">20:46</a> It feels like what they're saying is you're offloading an OpenAI resource. So instead of having the Fabric Spark do the compute, and what it probably does is it's running some compute units and it's charging you CU back to your library. So here, send some data to this thing, do a processing thing, and then it just counts up how many CUs you use and just charges back to your account.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1264s" target="_blank">21:04</a> But I think what they're saying is on these smaller clusters, because AI is so much more expensive than other things, they're trying to give you an out that says okay, you can configure it. If you want to have your own OpenAI resource in Azure that's not in Fabric, then you're building totally separately. It's just whatever the OpenAI cost is.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1284s" target="_blank">21:24</a> I gotta be frankly honest, I have not spun up an Azure-based resource that is OpenAI, so I don't really know how you get that or how you would configure or turn that on. It's pretty simple, it's just the AI Foundry. But hopefully that means two other things are going to open up for us — not just AI functions, but where we can use our own Azure resource.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1307s" target="_blank">21:47</a> I don't like using the word Copilot in this situation, Tommy, just for the fact that Copilot implies it's Microsoft's flavor of Copilot. I want to talk about how you can use your own language model. Because in this example here they're using OpenAI. That's not Copilot.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1324s" target="_blank">22:04</a> Copilot is not OpenAI. Microsoft has invested heavily in OpenAI but it's not Copilot. Copilot is this branded experience. And the thing I get stuck with is I've seen people trying to take DAX statements and put it into Word Copilot because they think it's the same Copilot across all tools. It's not.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1342s" target="_blank">22:22</a> Copilot is different. You can't write DAX queries in Copilot designed for Word, or you can't take DAX and shove it over in Excel. It's not the same thing, it's not the same Copilot. You have to use the Copilot where it's at because that Copilot is tuned for the experience you're looking for.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1359s" target="_blank">22:39</a> I think people are trying this because they want to start using Copilot and Power BI, but they can't get it unless they're at an F64 level. Which again, I'll reach out to Microsoft, I'll say it again — Microsoft, you need to figure out how to bring Copilot down to a lower SKU. People want to use it but they can't because it's at an F64 threshold. I don't think it's a good solution.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1379s" target="_blank">22:59</a> So I think this is a big deal and I'm glad to see this. Again, hopefully the integration with Azure AI resources where you can build your own functions can be a big help for teams.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1389s" target="_blank">23:09</a> That's another thing too, Tommy. I don't really build my own OpenAI functions, but I guess if you had other functions you were bringing, you could bring those in as well. There is — so just out of curiosity I went to the Azure Marketplace to see if I could go install something in my Azure Resource Group, and there is an Azure OpenAI service that you can create inside Azure directly.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1414s" target="_blank">23:34</a> So you can use OpenAI powerful language models directly in the service. I do know there's also GitHub too. GitHub has a whole bunch of GitHub models. I don't know if you could integrate with that either, that'd be also interesting. Because with the AI resource you basically configure the tokens, the prompt, and it's integrated with Microsoft's services and your tenant.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1441s" target="_blank">24:01</a> But when you bring the custom one, that was where I would like — so yes, Microsoft needs to think, my opinion here on this one, Microsoft needs to think more holistically. Not just OpenAI for everything, but there's a lot of models on GitHub. Help me integrate with those models. And again they're just API calls, so I'm pretty sure you could probably integrate them anyways and just make a REST call to the models on GitHub.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1467s" target="_blank">24:27</a> But GitHub's doing a lot of things around models as well. I'd like to see some more integration between what GitHub's doing and what the Fabric environment is also doing. Anyways, okay that's another big topic.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1479s" target="_blank">24:39</a> Last news item, and I promise we'll get on the main topic here. All right Tommy, what's the other news article you have for us today? So I did have just a few other highlights from the Fabric updates, but Mike you have a Microsoft announcement, a PSA. And this is crazy but I'll let you jump into it.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1503s" target="_blank">25:03</a> There's a couple announcements I'm making. I do want to point out, at the very beginning of their blog they point out upgrade Power BI Desktop to the 64-bit version. And also I believe there's a note here about third party visuals that I think have been fixed in the most recent February version as well.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1531s" target="_blank">25:31</a> So a couple big points. The 32-bit of Power BI — if you're on a computer or your organization is only deploying 32-bit Power BI to you, be aware the 32-bit version of Power BI Desktop is disappearing on June 30th, 2025. So you've got three months to transition to a 64-bit version of Power BI.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1554s" target="_blank">25:54</a> Now I'm not sure how big the audience is with that. I did hear a couple other MVPs chatting about this, like "oh my work computer doesn't let me have it, there's restrictions." They're just installing the 32-bit version just because that's what they set up eons ago and never made the migration.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1566s" target="_blank">26:06</a> But if you're in the center of excellence or if you're in the admin area of Power BI, you might want to make sure that your IT group is in line with the move to going to 64-bit Power BI Desktop versions. They're going to stop support. I think you could probably still download it and keep it, but you're going to stop getting updates. There's going to be no more support, they're not going to release any more 32-bit versions of software.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1588s" target="_blank">26:28</a> So I just want to point that out. It's more common than you think. Really, you think? I remember when we got our PC probably five years ago, everyone got a new PC, everything was 32. And the only reason I knew was because the Microsoft Access connector didn't work with 32. Yeah, so now just be aware, you've got to move to 64-bit. That's the only thing you're going to be able to use moving forward, and I think it makes sense.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1617s" target="_blank">26:57</a> Microsoft doesn't need to support all these other things anymore. Because I'd also agree, Microsoft's doing a lot in the space of app.powerbi.com. App.powerbi.com is becoming pretty rich for building reporting experiences. And to me, Desktop feels a lot like the report pages, the report authoring.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1636s" target="_blank">27:16</a> But if I think about what's actually happening in the service, we have a lot of other tools that really aid analytics for the business team — metric sets, KPIs, scorecards, exploration, notebooks. Viewing notebooks is like a view-only inside. So there's an experience of a report with pages, a data app, basically.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1662s" target="_blank">27:42</a> And I saw a demo of Translytical. So I went out to the Power BI Netherlands user group, and they did a demo of Translytical inside the Netherlands. Amazing. Stay tuned, there's a session coming at FabCon talking about Translytical. It's coming to Power BI. You're going to want to stay in tune with this because this is really making less of a Power BI report read-only — it's a very interactive report at some point. Really interesting things you can start doing there, as well when you start using Translytical in your reports.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1696s" target="_blank">28:16</a> Yeah, I like this one, this is a good update. Just a note about that one. Any other things that came out in the February release, Tommy, that you would want to point out or highlight? Yeah, there's a ton on the AI side. I do want to just mention a few things on the OneLake catalog just because it's getting more and more integrated.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1716s" target="_blank">28:36</a> And I think with so many things it's hard for everything to be the highlight. But two things on the OneLake catalog that I really like because I'm using it more and more. I'm really using it to find and organize. So the first one I think for teams — and I love that they've done this — is the OneLake catalog is now available in Microsoft Teams.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1739s" target="_blank">28:59</a> Which I think is a great experience. People are living in Teams. You mean like when they're using Power BI inside Teams, the catalog now exposes information to you? Yes, yeah, exactly as a channel in Microsoft Teams. And I think that's great because a lot of people just live in Teams. So just a little but I think necessary thing.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1757s" target="_blank">29:17</a> But the thing I really like — I don't know if you saw this yet — but in the OneLake catalog, what we saw from Microsoft Ignite, there is the "govern your individual data estate with the OneLake catalog." There's a new tab in the OneLake, all around governing, which is awesome.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1774s" target="_blank">29:34</a> This is what we should be starting to see. So to me, the OneLake catalog is turning into a place to discover data, a place to find certified, promoted content. This is the thing that actually reduces data silos. And one thing I don't see quite yet but I'm hoping it gets there — imagine Tommy, you and I are creators of content or authoring of certified or not certified content.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1797s" target="_blank">29:57</a> I think we need a little bit more control around us as creators saying, look, we're really going to focus in on who is allowed to discover the data, what descriptions of the data, and then can you see samples of that data. There needs to be more layers, think of like an onion — more layers to the onion of how much as a data author do I want to allow people to discover and use or see samples of that data.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1823s" target="_blank">30:23</a> One thing that I think will definitely drive this, it just re-emphasizes to me how important it is to document your models. My gosh, this is — even if you had the world's best AI, if the AI can't understand what the description of a column is and how it might be used, there's no use throwing AI at a model to help you discover it.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1848s" target="_blank">30:48</a> So in all these situations it's going to increase the importance of developers building proper descriptions, writing out detailed information about what's either in the column, what kind of data is there, what the data type looks like. You're going to need a lot more summary statistics around what this column is doing, and putting that back into the model as descriptions.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1868s" target="_blank">31:08</a> Into the model as descriptions or annotations because then you can throw this at the AI, the catalog, all these other things and users can then go see exactly what they're looking for. I think this is going to be a great next step. I really hope that this is also something that we're going to be able to customize as admins or as the developers.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1897s" target="_blank">31:37</a> Because right now again the big ticket items are items that are endorsed, items that are not inactive or need to be refreshed. Sure, add tags, right, so items with descriptions, items with the last refresh date which is I think great. But again from actually having columns and how important that is, column descriptions or meta descriptions, that's not something that's going to show up here yet.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1914s" target="_blank">31:54</a> So I think a lot of this is already built utilizing domains and tags. So I agree with that, this domains and tags is actually going to lead us right into our main topic. So is there anything else Tommy you want to call here on the February monthly?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1929s" target="_blank">32:09</a> And again I'll also argue here there's some good things coming out in the February release. There's not a ton because I think they're holding back some announcements for the Microsoft Fabric conference that's coming up at the end of the month. I think they're going to open up more things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1946s" target="_blank">32:26</a> One thing you'll note though if you even look at the Fabric blog, it does contain some things about Power BI but look at all the sections here. Data engineering, data science, data warehousing, realtime intelligence, there's a lot of bullet points coming out every month of things to explore. A lot of things are being added so there's a lot of really exciting new features coming out. The product's moving along at a good clip.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1972s" target="_blank">32:52</a> All right Tommy, anything else for news or should we just move on? I think we're ready to dive in. Okay so let me grab the main article here. So this is an article by Mark, he goes by Data Mark is his blog, and he's talking through structuring Fabric items by using naming conventions.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=1990s" target="_blank">33:10</a> So I'll put the link here in the chat window. All right Tommy, what do you think? Let's unpack naming, let's define what naming conventions are, why would we use naming conventions, let's talk about that.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2003s" target="_blank">33:23</a> Oh man I am so happy to see this in Fabric. So naming conventions, nomenclature, abbreviations, you may have used them or heard of them. But it's really all about creating a consistent and reliable set of wording to help understand what content you have.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2022s" target="_blank">33:42</a> For example you may have a sales department and your sales abbreviation maybe just sales, marketing's MKT, Finance F. So these abbreviations and these code words that help understand more about your business. With all the things we have in Fabric, more than just dashboards and reports and models, we have so many types of artifacts that as we start creating items it gets very difficult to understand not just what type of item it is but where does that item fit in what workflow and what process and what project is it being worked on.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2063s" target="_blank">34:23</a> We can add task flows, we can add tags, but it's very hard just by looking at a name if you have notebook data pull, notebook one, notebook two. So this is something very commonly used in Azure or usually IT, but this is actually something Mike that we implemented in one of my first data analyst roles. Nomenclature or name conventions for our reports and dashboards.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2094s" target="_blank">34:54</a> Sure, so especially when it was consumer based, to help people understand it. Sales operations or sales, we didn't have apps at the time and we were very set around this. So yes I agree with all these things. Let me abstractly talk about naming conventions at a very high level.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2115s" target="_blank">35:15</a> Right, I think the reason naming conventions exist is because the UI that you're given from whatever that may be. So people talk about this, what's the naming convention in Azure, what's our naming convention in Fabric. There's like a standard or something you would adopt around naming conventions. So let's unpack that.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2134s" target="_blank">35:34</a> Why do they exist? They exist to sort things in a specific way for you to easily understand what it is you're trying to go access or edit or change. Right, so that's how I unpack it. The naming conventions is a way of you digesting information, how do you relate to the items that are inside that workspace.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2159s" target="_blank">35:59</a> Now when you first had Power BI there was no folders and it was like reports and semantic models, yeah right, and the icons distinguish. So one of the things that really gets me here, I'm going to read Mark's article a little bit. He talks at the beginning of the article about the structure.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2175s" target="_blank">36:15</a> He has this structure type, he says he usually uses one or two characters to define the item type. So this is the item type that he's building, and then he has other things. He puts an underscore and then he has the next four to eight characters as what is the item's purpose, what does it do, and he has abbreviations that go along with this.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2194s" target="_blank">36:34</a> One of these things is my opinion, I don't like this. I don't like this very hardened rigid schema. For me I like to organize content on how it's used, what is the lineage of the content. Let me give you an example.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2209s" target="_blank">36:49</a> Imagine you have an orchestration pipeline. The orchestration pipeline calls a series of notebooks, data flows, and maybe other things. So that orchestration pipeline goes 1, 2, 3, 4, 5, there's different actions that are happening in a sequence. I want the items that are attached to that pipeline to have a naming convention that maps what the pipeline's doing.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2232s" target="_blank">37:12</a> So for example if I have a pipeline that is orchestrating things, I like to start the main pipeline with numbers. Actually I don't really like to use this item type. Really? Yeah, so in this example Mark uses item type as the first two things of the name of something, what it is. I'm like that's redundant.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2251s" target="_blank">37:31</a> That's wasted information and wasted space. I absolutely hate this. Why would you use the icon for data flow and start it with the words DF for data flow? There's two other indicators that this is a data flow. And honestly if you can't recognize the item based on the icon itself you shouldn't be in Fabric honestly.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2271s" target="_blank">37:51</a> Like if you don't know what a... That is a hot take dude! Dude I'm telling you it's not hard. This is not hard and if you don't know what a Lakehouse is versus a data warehouse icon, you should learn that. I would rather lean on the icon of the object more than I would the name of it.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2288s" target="_blank">38:08</a> That's irrelevant to me. Now maybe if you're pulling a lot of this data from APIs, maybe that's going to provide you some assistance. But we're in a graphical world in Power BI, everything comes with an icon no matter where you are. So I disagree with this whole naming convention on the item type first. Don't like it.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2306s" target="_blank">38:26</a> I instead like to do the order in which things are called. Sorry my connection dropped there for a second. Are you still there? I'm here. Was too hot of a take, the internet said no! So let me pause on my hot take there Tommy and I'll just stand back and let you digest my hot take.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2328s" target="_blank">38:48</a> So item type is the first section Mark talks about in the naming convention where you say copy job is CJ, data pipeline would be DP, data flow would be DF. I don't like that, I think that's a waste of space. What do you think?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2343s" target="_blank">39:03</a> At first I was going to pooh-pooh what you were going to say, but I was thinking about when all my nomenclatures and naming conventions that we've always created, it makes sense. Because I'm looking at Power BI right now or Fabric. Just look at items that have dependencies in them.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2365s" target="_blank">39:25</a> You can go to the dependency tree and see it but it's not as easy as saying okay this is the master pipeline. This is double zero nightly run, right, that's the main pipeline. Or you have zero weekly run. And then that pipeline calls another pipeline and calls another notebook and you should sequence those things by numbers.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2383s" target="_blank">39:43</a> So that way when I'm going to the portal I can see zero, one, two, three, four and I know the sequence of things right in line. All right there, boom, easy. To your point with when it comes to the type, not just the icon but literally the second column, it also says that you can't remove the column. It's there anyways so why am I adding a third layer of information on a row of data in powerbi.com? That's not relevant, I don't think it's useful.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2413s" target="_blank">40:13</a> So I understand why Mark's doing it. It may be more of a programmatic or coding thing that he's trying to get out later on, but I don't like it. Yeah, never start a report with the... Yeah, Garrett you're right on point. I hate this. I'm sorry, I'm burnt on this one. I'm already hot on this.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2430s" target="_blank">40:30</a> Don't start your report with the thing that says RPT report. I know what the icon looks like for a report. Don't need it. Don't put report in front of it. Name the dumb thing what it is because now when you go to an org app or an app you're now renaming it to be something else anyways and it's actually named what it is. It's meaningless to me.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2451s" target="_blank">40:51</a> That is an old convention from an era long gone. It doesn't need to be used anymore. I think I can drive with that. With the types, but what you're saying then is for your first type is more or less what process? Yeah, so my thing is a bit more designed towards data engineering.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2474s" target="_blank">41:14</a> Data engineering has a lot of artifacts that depend on other artifacts to be used. If you have a single semantic model I'm not going to name semantic model 01 and then every report that depends on it 02, 03, 04. That doesn't make sense, right, there is the semantic model or main sales semantic model.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2490s" target="_blank">41:30</a> Semantic model or main sales semantic model, right, you do need to have some information on what information is in it, what information is there. And also I'll argue too, power.com gives you the ability to go into your semantic models and have descriptions of them.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2501s" target="_blank">41:41</a> You should have descriptions on your semantic model. So if it's sales master data or sales data, that's what you should be calling it. Call it what it is as early as possible and then use the description, write a description like this is sales data from this year to this year.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2517s" target="_blank">41:57</a> That's what that part's for. And now Tommy, back to your point, I've done the data catalog. Do I really care now? Now here's where things get a little bit more interesting. Later on in Mark's article he starts talking about abbreviations.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2530s" target="_blank">42:10</a> So what is the item's purpose? Here is a little bit more gray in my mind. If you're doing orchestration, maybe I want to know that on the name of the item. Is it ingestion? Is it transformations? Is it storing data?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2544s" target="_blank">42:24</a> So Mark has abbreviated a couple things and I think this is medium level useful to me. But what I would also argue, these naming conventions feel like they were made in a time where we didn't have tags or domains.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2559s" target="_blank">42:39</a> So to me the item purpose should be a tag. That should not be the name of the item. And so traditionally I would have named what he — traditionally I would have made the item purpose a name item. But now with tagging I don't care. Take all of Mark's tags, add them as actual tags, and they don't need to be abbreviated anymore.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2584s" target="_blank">43:04</a> So I agree, I disagree with this one too. Okay so I'm gonna push back a little here because I think you got a step too far. There's a few things here. One, yes, I want to at least make a point for the item type two because I think there's still something to be said.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2602s" target="_blank">43:22</a> But I really want to focus on what you're talking about with the purpose. How does Power BI sort by default? Alphabetically, the front. Okay, and it just automatically orders the things in the order in which they're used. Fine, so we have numbers for projects.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2621s" target="_blank">43:41</a> Numbers always mean a lot to people, especially when they're one — okay I'm gonna get you on this one because there's actually version numbers. I do think that matters and that's at the end of your line.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2634s" target="_blank">43:54</a> So one thing I think there is something to be said, that the start of your item, the naming convention is important because it's a lot easier to see. I need to find my notebooks because that's the one — if anything has to be the most consistent or in a sense a set of allowed values.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2649s" target="_blank">44:09</a> I've gotten so lost in notebooks that call other notebooks and that they're not sequenced. I don't know which notebook's calling which notebook and you have to go into every notebook to see when it's called in what sequence. That's not helpful.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2661s" target="_blank">44:21</a> And I think that's where the item purpose is — I like the idea here but I agree with you, this is something that could be a tag. It doesn't need to be in the name of it. Yes, this needs to be a little more flexible, this middle part here.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2676s" target="_blank">44:36</a> Where it's to me it's dealing with purpose you're talking about. Yeah, we're in the second part of the convention here. Yeah, correct. So first one was the abbreviation. So we agree, naming it by what it actually is — that's irrelevant. You shouldn't be using that.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2693s" target="_blank">44:53</a> The second part here is what do you use it for, what's the item description. And I think this one we have a little bit more leeway here. I'm not sure I would be so rigid as what Mark has here, but I also would argue I don't know if I need the item description because now we have tags and tags can be applied everywhere.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2708s" target="_blank">45:08</a> And what you'll notice is if you go into the orchestration or the OneLake catalog, you can filter by tag. So the idea is I know what I'm looking for, Tommy. I'm going to my workspace, I'm looking for a raw data format or I'm looking for something that's ingestion only.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2729s" target="_blank">45:29</a> Right, if you define that, that's an ingestion tag. You add that tag to the item and you just filter by it and boom, everything in your list is now automatically filtered by ingestion stuff.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2741s" target="_blank">45:41</a> The only problem with the tags is I wish it was an easier way to quickly add a tag. It's driven only by the admin. Yeah, I agree 100%. I want that space. To me this item purpose — you're just going to get a lot of redundancy I think with what he's saying here.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2760s" target="_blank">46:00</a> On the what type of thing you're trying to do — what do you mean? So right now some of the things that Mark has is ingest, transform, store, analyze. It's basically all the different types of task flows.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2776s" target="_blank">46:16</a> Really it's just those. And so again your argument here may also be, well don't even use these, use tags to hold that information. I would agree. Right, to me, yeah I'm with you. We need something custom because here's the thing, I think this is where you're getting, Mike.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2792s" target="_blank">46:32</a> With the first two codes, the item type, item purpose — yep, this was a world that I used to work in. Yeah, for no filtering. This is a world I lived in when this was essential, when you were tracking things, when there's browser cookies going. I need to create an ID.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2814s" target="_blank">46:54</a> I don't need to create a custom ID for the name to follow this because I have things. What I want in this middle part — I want something flexible for projects. To me this is where you can search for, hey, all my projects that are dealing with our marketing integration data in.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2834s" target="_blank">47:14</a> That's the middle part here, this is the meat that's custom to you, not something global for anyone who's in Fabric. Yes, so if we're doing marketing, our e-commerce to lakehouse.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2848s" target="_blank">47:28</a> Yeah, and to Mike, to your point, it does need to stay the same. But I think there's some Confluence or Center of Excellence that does have here's all the current projects. Correct, I would agree with this 100%.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2859s" target="_blank">47:39</a> The point of having the code is not just the organizing but your point is searching. And it's making sure everyone knows what you're talking about. Right, so he has a lot of things in here like ingestion — a new user that's coming into your organization, I wouldn't expect for them to know what "INGST" means. We know it means ingestion.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2880s" target="_blank">48:00</a> But this is where I would also argue a little bit here — lean on actual information. And this is what's funny, because when I go look at his article in the bottom part here, it shows exactly what I'm talking about. He has literally an example of an orchestration pipeline where there's a task that has batch orchestration.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2901s" target="_blank">48:21</a> So he's using an abbreviation on an item that's already colored by green and he has the full word called batch orchestration already in the line item. So all you're doing is taking up more space that should just be z0 nightly batch, that's it.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2916s" target="_blank">48:36</a> The information of the item should tell you what it does. All the other tagging, domain — you have the data, the task flows, that's going to carry all the other characteristics of what it does. And you can even define the task flow description.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2933s" target="_blank">48:53</a> So when items are in that box, in that color, you can even say okay this is orchestration and you can write a description — this is orchestrating data from these different things, it runs every night. You can define all of that inside the task on the page. I completely agree.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2954s" target="_blank">49:14</a> So are we in agreement on that second character code where it's a project that you set up, like it's our marketing? I think I would probably put more emphasis on the first two or three digits. Sometimes I do a three-digit number in the very beginning because sometimes I'm thinking if my project is going to be unstable and I might need to add things in the middle.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2977s" target="_blank">49:37</a> So I'll do z00 for starting things and if I have to do something where it's like okay I'm doing a level 10 — level 10 might be initially loading things. So be like 10 and then I would use 10, 11, 12, 13. That only gives you 10 items in that space so you can do some weird things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=2995s" target="_blank">49:55</a> Because again you're trying to filter it, so the ordering of things in the list — you want things to sort out correctly when you look at it by name. That's what I'm doing there.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3003s" target="_blank">50:03</a> Okay, question. Let's dive into your first character because I think a lot of people are gonna have contention with this. Walk me through — because you said version history. You're saying version at the end.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3015s" target="_blank">50:15</a> So I would typically, when I build things in Azure, I'm always putting like an 01, 02, 03 on the end of things. Just because I'm usually confident I've got it right, but inevitably I need to make a second version of some artifact inside Azure.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3036s" target="_blank">50:36</a> And so when I do that I like having the version number, a two-digit number at the end where I can version things with. And I'll do this even with my lakehouse. Tommy, we did a Learning Fabric series on YouTube and we made the great lake lakehouse.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3055s" target="_blank">50:55</a> I would have named — so the great lake is the name of the lake. I would have put a version number at the end of that, 01. Right, so that way when I want to test out a new thing or build a new version, I would do a great lake 02 and that would be the next iteration of that data or that object. So I think that's relevant.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3075s" target="_blank">51:15</a> Okay so I'm listening to that. But what are you — is this first part, if we're not doing the item type, if we're not doing the project, how do you decide what the first three characters are?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3091s" target="_blank">51:31</a> Sometimes a couple different things, right. So it depends on how much stuff you're orchestrating or pulling together. So for example, if it's the very first thing I'm doing to touch data it usually starts with all zeros, and then the thing that I'm doing. So if I'm in a data engineering process I'll do three zeros and then the name of the item, the data topical area of what that is. Right, this is the orchestration pipeline.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3112s" target="_blank">51:52</a> Is the orchestration pipeline, SAP data load, something like that, something that's descriptive. And then I would put a version number at the end of that. Then I start moving into the next layer of things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3124s" target="_blank">52:04</a> So if I'm doing a series of notebooks, I'll use like 20, 21, 22, or 10, 11, 12, 13. So 10, 11, 12, 13 means I'm now in the space of I'm going to run a bunch of notebooks or I'm going to run a series of pipelines.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3139s" target="_blank">52:19</a> So my double zero is the very first pipeline that I run that orchestrates everything. The second version is our 10 or 20 whatever keeps. So 10, 20, 30 — so 10 would be the first item in the pipeline that's called, 11 would be the second item, 12 would be the next item.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3160s" target="_blank">52:40</a> So then you'd have the ability to sequence those pipelines together. And then if you're doing notebooks or further transformations, 20 is the next section after that. So when you think about a data engineering process, I'm usually running an orchestration pipeline.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3181s" target="_blank">53:01</a> I'm running a pipeline to load the raw data into that first layer, and then I'm doing silver transformation or gold transformations. And those notebooks are typically sequenced behind each other. I had to finish all the data calculations for silver before I go to the next section called gold.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3207s" target="_blank">53:27</a> So I'll start sequencing those things in order of numbers. And sometimes I like leaving gaps between like okay these are the tens, these are the 20s, these are the 30s. But regardless however I'm looking at the information, I can always step back and say okay there's already an ordered sequence of things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3234s" target="_blank">53:54</a> And I know if I want to go earlier in the process I go to the lower numbers. So that's just instinctively how I think about it. It depends on how many items I think I need to make, how many notebooks are going to be there.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3254s" target="_blank">54:14</a> And maybe the tens are all pipelines, maybe the 20s are all notebooks, it changes maybe per project. But again generally thinking is as I mature the data deeper and deeper, I'll just keep increasing the numbers.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3266s" target="_blank">54:26</a> And the final thought here is you can use this, you don't have to, but when you get the semantic model — semantic models can pull from different areas in the system. So semantic model could pull from silver. Semantic models typically pull from gold.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3299s" target="_blank">54:59</a> And now with Direct Lake we could pull a mix of both now a little bit. So when I build semantic models I'll probably just pick a very simple number like 60 and just all the semantic models will start with 60. So that's at the end of my pipeline and it may skip a couple numbers to get there.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3321s" target="_blank">55:21</a> I'll also do things like 100 or something — 100 maybe testing only. Everything in the 100 levels like 101, 102, 103, something I'm going to throw away. It doesn't have to live on perpetually but that falls down to the end or the bottom of the list because that's not core of what we're doing.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3353s" target="_blank">55:53</a> Okay so maybe I'll use that on semantic models. Typically I do not though. So semantic models when I build them, those are typically just the domain name or the domain or topic — sales data — because I want that to be more human readable.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3377s" target="_blank">56:17</a> As I'm going further through the pipeline I'm being more mindful of a wider audience appearing for that item. I don't want a bunch of numbers when I have hundreds of people trying to search for which data set is this — is this 60 or 70, doesn't make sense.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3405s" target="_blank">56:45</a> When you go to catalog you have to search for the number. So I think we need a whole other episode on how we actually implement this. Because I love the article and I want to say this to Data Mark too — this is essential. This is so important that you got to think this through.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3426s" target="_blank">57:06</a> You have to think this through. And it's easier said than done too, especially when you're dealing with even a team. And I would love to talk about in a future point just about how do you actually ensure people follow the process, how do you create your own nomenclature.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3446s" target="_blank">57:26</a> But man, this is just basic stuff especially that I see even in some of my folders. I'm like I need to quickly create something, I'm testing something, and immediately I don't know where the lineage is. I need to go through OneLake, I need to find the lineage.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3464s" target="_blank">57:44</a> So this is something that takes time to start because again this is that blessing and the curse of it's so easy to create anything in Fabric. It's too easy to create an item and an artifact that things can get very cluttered very quickly.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3482s" target="_blank">58:02</a> But I would like to argue the point of there are a lot of — so Microsoft is very much enhancing the discoverability of items. And so when I was first building things I've changed a lot of how I've naming conventioned things.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3502s" target="_blank">58:22</a> I think in the beginning what Data Mark describes is something I would have started using in the very beginning when it was not as clear. But now that I have domains, tagging, I now have the ability to use task flows. All of these things are really required to help you understand where they are in the process.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3533s" target="_blank">58:53</a> And I also would argue more of this naming convention is important for things that are certified than things that are not. So non-certified things I'm going to be more lenient around — sure, name it what makes sense to you. If you don't like my number naming convention in the front, don't care, build what you want.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3568s" target="_blank">59:28</a> I'm not going to be as hard, but I will say in order to move your items from where they were to now a certified data set, then I think you for sure sit back and say let's apply our naming convention that is by the way documented in our center of excellence and people can refer to it.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3598s" target="_blank">59:58</a> So then yes, you can say no, this is not what we're doing. I can't tell you no to something unless you have a documented resource that tells you what you should do. This is what we're going to follow. And it only takes a couple nos for people to start getting their mind around like oh, I should be doing this. This is important to us as an organization.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3629s" target="_blank">1:00:29</a> I can't stress that enough — that's going to be important for you to spend some time evaluating and thinking through. Anyways, any other final thoughts here Tommy?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3639s" target="_blank">1:00:39</a> For you? No, honestly for me it's about freaking time that someone wrote and tried to create a universal standardized naming convention for Fabric. Because a lot of people are not coming from that Azure world or that IT world or Databricks where this is just a fundamental part of your workflow.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3683s" target="_blank">1:01:23</a> Especially I'm surprised I haven't seen more writing and talking about this just from other MVPs. No one cares — naming conventions come from when I talk to people in Power BI, no one cares about naming conventions. They just name it whatever it is, they just figure it out. There's lineage — that's a Power BI world thing, that is a business mindset of coming into Power BI.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3717s" target="_blank">1:01:57</a> When you come at this from data engineering, naming conventions are very important. In Azure that's much more important because you could have hundreds of items across hundreds of resource groups. It gets way more difficult to find things. And billing on Azure is really difficult too — am I getting billed a bunch of money based on a data science activity or an ingestion activity?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3754s" target="_blank">1:02:34</a> That is much more relevant when you're in the Azure space. So that way you can use those names of items to actually help you distinguish what's going on. Again Azure has tagging as well. I don't think it's utilized to the best of its ability.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3770s" target="_blank">1:02:50</a> And I would argue Tommy, there's not a good way of using tagging today. The reason I'm so hot on this is I just did a session for my live events group — it's a user group of people. We just did a whole section on domains and tags. And I think those are two great features that are underutilized to organize your tenant and clean it up.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3805s" target="_blank">1:03:25</a> Make it like dev, test, prod, QA — all those should be tags. Those should be tagged things. You shouldn't need to have a whole bunch of items that are added with that information on the name of things. Yeah so anyways that's great.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3822s" target="_blank">1:03:42</a> I'll pause — I'm getting really heated about all these things dude. It's awesome man. So yes, I think this is like I said — this was a game changer for me and our Power BI development in the past just to organize everything on other teams.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3838s" target="_blank">1:03:58</a> Because the way you think about naming things and the way your brain works is very different than the person sitting next to you, which is very different than another department with their own acronyms and abbreviations. Exactly.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3870s" target="_blank">1:04:30</a> And that's I think to your point there Tommy, that just stresses the importance of having regular communication and setting a standard, making sure everyone's on the same page. This is data culture we're talking about. This is a data culture item and you have to groom this together.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3909s" target="_blank">1:05:09</a> Okay, that being said, thank you all very much. We really appreciate everyone on the podcast. Thank you for joining us today. Only ask is if you like this, if you enjoy what we're doing here on the podcast, if you enjoy this content, if you're learning from us, we're happy you're learning from us.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3927s" target="_blank">1:05:27</a> We love your engagement and chatting on the discussion here in live chat. Our only request is please make sure you follow us online and share it with somebody else. Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3940s" target="_blank">1:05:40</a> You can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating, it helps us out a ton. Share with a friend since we do this for free. Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/podcast, leave your name and a great question.

<a href="https://www.youtube.com/watch?v=6qsdrEayuhE&t=3958s" target="_blank">1:05:58</a> And finally join us live every Tuesday and Thursday 7:30 a.m. Central and join the conversation on all PowerBI.tips social media channels. Awesome, thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
