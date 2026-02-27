---
title: "Evolution of an Analyst – Ep. 445"
date: "2025-07-30"
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
  - "Data Analyst"
  - "Power BI 10th Anniversary"
  - "Default Semantic Model"
  - "Multi-Agent Orchestration"
  - "Copilot Studio"
excerpt: "Mike and Tommy celebrate Power BI's 10th anniversary by reflecting on the evolution of the data analyst role. Plus: the default semantic model is finally being sunset, and Fabric data agents get multi-agent orchestration."
featuredImage: "./assets/featured.png"
---

Power BI turns 10, and Mike and Tommy take a trip down memory lane. They reflect on how the data analyst role has evolved over the past decade, celebrate the sunsetting of the default semantic model, and explore multi-agent orchestration in Fabric.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/FqspjFkUId8" 
  title="Evolution of an Analyst – Ep. 445"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News

### Default Semantic Model Being Sunset

The news everyone's been waiting for:
- Fabric is sunsetting the auto-created default semantic model on lakehouses
- Existing ones stay, but new lakehouses won't get one
- Nobody recommended using them anyway
- Less clutter, cleaner workspaces

### Fabric Data Agents + Copilot Studio

Multi-agent orchestration arrives in preview:
- Fabric data agents can now integrate with Microsoft Copilot Studio
- Agents with specialized skills can work together
- Orchestrate across Fabric data, SharePoint, Excel, and more
- The "conductor's era" — orchestrating agents rather than executing manually

[Read the announcement →](https://blog.fabric.microsoft.com/blog/fabric-data-agents-microsoft-copilot-studio-a-new-era-of-multi-agent-orchestration)

### Azure MCP in VS Code

Mike notices Azure MCP servers appearing as VS Code notifications:
- Following the Fabric real-time analytics MCP
- Expanding programmatic AI access to Azure services

## Main Discussion: Evolution of an Analyst

### Power BI Turns 10

Mike and Tommy watched the Guy in a Cube 10th anniversary livestream:
- Reflections on Power BI's evolution from 2015 to today
- Behind-the-scenes stories from the early days
- PBI10 data visualization contest winners announced

[Watch the celebration →](https://powerbi.microsoft.com/blog/marking-10-years-of-power-bi-celebrate-with-the-global-community/?WT.mc_id=DP-MVP-5002621)

### How the Analyst Role Has Changed

Looking back over a decade:
- From Excel pivot tables to full data platform engineering
- The rise of self-service BI
- Direct Lake closing the gap between lakehouse and semantic models
- AI agents introducing a new paradigm for data interaction

### The Road Ahead

- Agents are becoming the new interface for data
- The analyst role is shifting from execution to orchestration
- Multi-agent systems mean analysts become conductors, not solo performers
- The tools have matured — it's an exciting time to be in the data space

## Resources

- [Marking 10 Years of Power BI — Power BI Blog](https://powerbi.microsoft.com/blog/marking-10-years-of-power-bi-celebrate-with-the-global-community/?WT.mc_id=DP-MVP-5002621)
- [Fabric Data Agents + Copilot Studio — Fabric Blog](https://blog.fabric.microsoft.com/blog/fabric-data-agents-microsoft-copilot-studio-a-new-era-of-multi-agent-orchestration)

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=0s" target="_blank">0:00</a> [Music] Good morning and welcome back to the Explicit Measures podcast with Tommy and

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=32s" target="_blank">0:32</a> Mike. Good morning, everyone. How's it going?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=35s" target="_blank">0:35</a> Going? Good morning, Mike. It's good to be back and see your face again.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=39s" target="_blank">0:39</a> Yes, it is good to be back again. All right. , let's just jump into some things. So, our main topic for today, we'll just talk around the evolution of the analyst, data analyst, or however you want to call it here, but we're going to talk about the evolution of an analyst inside the Microsoft eco e ecosystem or environment. just unpack that. We're going to talk through some some memories. I think a little bit of we watched the PowerBI turns 10 podcast with Guy Cube. we'll have some thoughts on that and then we'll maybe dive from there and give some of our own memories recalling

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=71s" target="_blank">1:11</a> The early days of PowerBI and where we're at now and just getting a feel for u what's happening with PowerBI as we've seen it over the last 10 years or so. Okay, excellent. let's get into some news items. Tommy, do you have any items for news here? , do we ever I don't know which one I want to do first. I think I'm just going to dive into one that I'm actually incredibly happy to see. And it's not a new feature, Mike. It's actually taking away a feature that I don't know if anybody liked. , Mike, what one of the big things that

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=104s" target="_blank">1:44</a> Came out of the box with fabric was this weird concept with the lakehouse was every lakehouse always created a semantic model. And this was called the default semantic model. And it was strange. It was very strange. And it was very frustrating because they're like, "No, no, you can modify this and you can always build off of it." But one, it was a it was a a little buggy. It just not what you wanted to do. You wanted to build your own especially from the naming point of view. So it was a little

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=137s" target="_blank">2:17</a> Bit frustrating, but it was what it was. That and 18 artifacts when every time a lakehouse was created in a you created data flows. So, we just took that with like, all right, that's fine. It's just part of the , part of the part of the purchase, but Mike, officially Microsoft Fabric is sunsetting the default semantic model.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=158s" target="_blank">2:38</a> Yes, they are. So, let's let's get into this topic of the article here. The article is actually in the chat window as well if you want to go read about it yourself. For those of you who are using lakehouses, when you create a lakehouse, the lakehouse automatically came with a SQL analytics endpoint and a default semantic model. And I believe when it came out, it was like a good starting point at the very beginning, right? I think it was good to have this initial run. Okay, you get a lakehouse, you get a semantic model, you can immediately start reporting things. I think the idea here, the the premise was

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=189s" target="_blank">3:09</a> You can get your lakehouse started and you can immediately get a report built within very quick time. That that was the idea. But I think now we've learned that when you create a lakehouse, there's still things you got to wire up and table relationships you have to build. And so you can either get this like watered down experience of like the default semantic model that gives you some experience but not really everything that you need or you can just go build your own semantic model. And I think Microsoft has discovered that everyone's just going to build their own semantic models. Like that's that's what

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=220s" target="_blank">3:40</a> People are going to do.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=225s" target="_blank">3:45</a> All right. We don't have any audio from you, Tommy. You're going to have to figure your audio out. But I'll keep on mute because I didn't want No, no, no. This one user error this morning. Okay. No, no. Mike, I I I love that they're actually responding to realizing it's not worth the hassle, too.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=241s" target="_blank">4:01</a> Not

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=242s" target="_blank">4:02</a> Not with this. So, I'm I actually I've never been more happy to be seeing something be taken away from me. So,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=249s" target="_blank">4:09</a> Yeah, I think it's going to add less clutter. I think it's a good move. I don't honestly I no one I think even recommends using the default semantic model. You may be using it a little bit here and there, but your old default semantic models I believe will stay around. It's just if you create a new lakehouse, you're not going to get a new default semantic model. And I think that's the right choice. I think you want to create the lakehouse, you want to create the tables. , and maybe Tommy, there was something here else that was maybe there was something else that was going on a little bit because when you created the lakehouse

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=280s" target="_blank">4:40</a> Initially, but back in the day, right, there was no direct lake capability, right? When you first had lakeouses, there was no direct lake feature. And so maybe this was like that initial step of like, okay, you have to have some stop gap explanation between, okay, I have a lakehouse, how do I quickly get those tables into a semantic model without having to import them every single time? And this might have been like an early version of that. And now that we actually have

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=303s" target="_blank">5:03</a> Proper direct lake and building semantic models and service because there's that feature gap is now closed. You can now build some stuff. So I anyways I think our audience and everyone else will be happy to see that disappear and go away. No one's going to be sad about the default semantic model being gone. And Mike, to your point too, not only was Direct Lake not what it is today, I don't know how much of what we're seeing right now with Direct Lake and the capabilities was in the initial idea from Microsoft. The fact that I can do direct link off of multiple lakeous

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=334s" target="_blank">5:34</a> Now now

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=337s" target="_blank">5:37</a> Now and it just really rendered me. I'm very happy to see this. , but just just one of those nice things. So, less artifacts the better.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=347s" target="_blank">5:47</a> I'd agree with that one. Another one here that came out, another news or article here that Tommy, I want to get your feedback on this one. I I got to be honest, candidly, I have not played with this specific item here. So, I I can't directly claim that I know what's going on here, but it's on my it's on my to-do list of things that I need to adjust or play with or figure out. So there's another topic here called fabric data agents co-pilot I'm sorry Microsoft copilot studio a new era of multi- aent orchestration it's out in

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=379s" target="_blank">6:19</a> Preview so now it it's talking about fabric data agents and then we start talking about how that fabric data agent can work with co-pilot studio and then they start talking about what is a multi-agent orchestration why is it important so Tommy what are your thoughts on this what is multi-agent orchestration look like here for us? How do we leverage this?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=403s" target="_blank">6:43</a> Man, honestly, Microsoft is following the playbook right now in terms of we're a lot of companies and I think a lot of services are seeing success. You may have also heard Open AI now has an their own agent as well. a little bit of different concept but really the idea here is rather than having a simple chat with a single service or all the services at once.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=428s" target="_blank">7:08</a> You can almost consider that these agents are have a particular skill and they perform one thing. It was fine but now again they all worked individually. So I okay this agent's going to do this now I have to talk to this one. Well

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=442s" target="_blank">7:22</a> Now I can utilize my whole environment. Actually, I just had a great conversation with a few colleagues of mine that work they were Microsoft Team shop and they were doing a lot of co-pilot on sure

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=454s" target="_blank">7:34</a> They're navigating these waters too and they know a lot about the the teams and the the shareepoint side but now that we have this access to data guess what people are asking for. So rather than right now we're if I had the initially I had a data agent in fabric well it's just going to talk to fabric data. What if I did want to combine that with our Excel sheets or the other services that we have now again that this is the Mike this is the whole idea again where this is the conductor's era my job and what the jobs of the

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=485s" target="_blank">8:05</a> These AI services is not so much to be about me trying to execute but how I'm going to in a sense orchestrate the play or orchestrate the the music and I think all of these parts to play in that

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=500s" target="_blank">8:20</a> Yeah I think we're learning right now that one agent isn't going to solve all the problems It's like stringing multiple agents together. It's like each one is specializing in its own little domain potentially. Some are going to be really good at writing blogs. Some are going to be really good at writing code. Others are going to be really good at generating images. So, , I think that makes sense because each company's going to focus on their niche of the market. But the neat part here is you can then orchestrate a lot of things together because now I want to pass context from one agent into other agents. I want to run the same prompt in multiple agents. and then have

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=531s" target="_blank">8:51</a> The other agents evaluate. Hey, here's a response from other agents. What do you think? And so, there's this this whole idea of like processing this across different things. So, it's very interesting, very different. very excited to see where this goes. I have not played with this feature directly, but I'm I I agree with you, Tommy. Microsoft is falling in line with a lot of other very relevant ones. very other relevant tools as well. One thing I also I'll know as well, I don't know if you saw this. Have you been using VS Code recently? Okay, I had a

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=562s" target="_blank">9:22</a> Notice. I have been in and out of VS Code recently and I just saw a little notification it on the right hand side of VS Code. It gives you little notifications in the bottom right corner and the notification it just gave me was hello, you now have a Microsoft Azure MCP available to you. So, I believe we saw like real-time analytics MCP show up for fabric. Now, we're starting to see Azure MCP items showing up. So,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=593s" target="_blank">9:53</a> Tommy, give the audience quickly what is an MCP,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=601s" target="_blank">10:01</a> An MCP, also known as a model context protocol. It's simply a way for an agent or some AI service, doesn't necessarily have to be AI, but that's we're using for to enhance or communicate with another service.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=616s" target="_blank">10:16</a> Service. very common ones to your point say there's a lot of connector based ones where it's not only just access to the data but in the format that's going to work for AI and the agent. , again, Notion has one, all your external services, GitHub in terms of you're you're working with an Asian VS Code, you have the GitHub MCP installed, quote unquote, it's like, hey, we're doing this workflow. Please do a pull request, and can you make sure to catch any issues? Well, the agent can do that as

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=647s" target="_blank">10:47</a> Well. You don't have to necessarily create something else to do that. There's another concept with agent or MC. MC.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=653s" target="_blank">10:53</a> MC. Hold on, hold on. You're going

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=655s" target="_blank">10:55</a> I I I don't need every detail on it. I just want to know what is it like. So it's it's a way slow down. You're going too deep.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=663s" target="_blank">11:03</a> Too deep. You It's literally a way for an agent to talk to an API. That's what it is in in its core essence. So you're now seeing all these different APIs appear, Azure Fabric, and you're starting to see more of these. And I like the fact that Microsoft is building the MCP land for our API. So I I I don't want to go down to explain what it is. I just want to know the name of it.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=685s" target="_blank">11:25</a> Proud of it.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=687s" target="_blank">11:27</a> You're going too far.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=688s" target="_blank">11:28</a> Okay. I just Let me tell you my favorite one because it's the one I I swear by and it's

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=693s" target="_blank">11:33</a> And it's Don't make it less than five minutes. Tommy,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=695s" target="_blank">11:35</a> Tommy, it's got it will be less than 30. It's all it is is simply it's task planner and then one's called sequential thinking. It basically forces your agent to plan out its steps in a completely different way and do everything in sequential steps and it will outline that for you and also write a task. So not that you couldn't do that before but it once you say hey do research planning all of a sudden you're going to get everything tasked out before anything's done. So again it's not just a connector to it is really connected to an api but not just the

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=726s" target="_blank">12:06</a> Data in it. So veryful.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=731s" target="_blank">12:11</a> There's some really interesting things that are coming out right now. And and just to give you one example, I didn't really use an MCP in this example, but I was using just an AI in general. , now that you can add files, images, other things to what you give to an AI. Now, it's pretty interesting. , I took a CSV file of a whole bunch of information, basically domains off of a lot of users because I have an app that I rerun and basically said, "Okay, here's a whole bunch of domains." and their company like URLs go through this whole list and tell me

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=764s" target="_blank">12:44</a> Which one of these have the largest market share, which ones have the highest S&P 500 rating. And it literally just took, , I just let it I just gave it the instructions and just said this is the output. This is how I want it to look. Went away and it did its thing. So, it was very interesting. All right, moving on. on. on. Let me give you one beat from the street here, Tommy. Tommy, have you been have you been playing with copy jobs at all?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=793s" target="_blank">13:13</a> , Mike, the literally why I was wearing glasses before we got online

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=799s" target="_blank">13:19</a> Is because I needed to buy finally I caved in. Fabric has forced me to buy blue light glasses.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=805s" target="_blank">13:25</a> So, and it literally copy jobs one of them. But yes, a lot. So, but I'll I want to hear you elaborate on this. So I'm reformulating this and this is maybe not a copy job specific experience but this is more of like I'm reformulating like what does it mean to be efficient inside fabric.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=825s" target="_blank">13:45</a> Okay. So I I'm just trying to unpack like okay when I look at all the different tools or solutions in fabric how do we evaluate as a an analyst as a designer as a data engineer how do we vet is this the right tool for the job. Okay. So, when I look at it, , each team in Microsoft bills compute units back to the CU side of things and in whatever rate they want. I I don't know. I don't know how they do it. It's just like this arbitrary unit of measure that they use just to build back to you as far as I understand. So, , I was using copy job and I was doing a

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=858s" target="_blank">14:18</a> Couple tests on it and I was like, "Oh my word." One, it's incredibly easy. Like, it's just a couple clicks. You pick the source, you pick the destination, you say you want incrementals, you want full loads, you just tell it what you want. Boom, it just runs. Awesome. Love the UI. Love how easy it was. There's a couple buggess things around the UI. Like I had a really long list of like 75 tables I was copying out of a database and you couldn't scroll past halfway unless you zoomed out on the screen until it was like 50% browser size and then you could sc. So there appears to

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=889s" target="_blank">14:49</a> Be some bugs in there still. So again, it's in preview. I I'll give him that. It's in preview. very annoying. , I also had some really weird issues where I was trying to edit an existing copy job and the tables were not like reappearing. So, I like edited the copy job, added tables, ran it again, and it only loaded one table cuz I had one table initially loaded and then I had to like leave, come back, refresh the browser, do it again, and then all the tables shut. It was just weird like not saving right things. Anyways, all that aside,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=921s" target="_blank">15:21</a> Have you been looking at the compute usage on copy job?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=926s" target="_blank">15:26</a> I I haven't dived into it because what what

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=930s" target="_blank">15:30</a> What caution to our listeners, caution to our listeners,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=933s" target="_blank">15:33</a> Listeners, copy job is very easy to use, but it seems quite expensive compared to other items that you can use inside the workspace. So, one thing I would just like while it's in preview, while it's out there, just make sure what it's doing. Like, make sure what how many compute units you're using on different things inside the copy job. It seemed quite aggressive. And let me give you what my how I measured this, Tommy. Like, how do you measure different services against each other? I was looking at the number of seconds and the number of CU seconds.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=964s" target="_blank">16:04</a> Okay. So, there's a ratio here. I think there's a ratio. And again, I'm just I'm still just toying with this idea. And I'd be curious, anyone in the chat here, if you are doing the same analysis, if this makes sense to you as well. But what if you take the ratio of the number of seconds something ran to the ratio of the number of compute units that were consumed? Let me give you for example here, right? In a in a month, I'm managing my fabric capacities based

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=995s" target="_blank">16:35</a> On number of units. I have an F64. I have a F2, an F8, whatever. Right? That unit, that purchased item comes with a certain amount of units. An F2 comes, I think, with like roughly like around 5 million compute units per month. That's like 24/7. The whole month, you get 5 million of them. And you can burn them down however you want. Now, I think what that works out to roughly is you get roughly around 60 CUS per second to consume all through for the whole month. That's roughly, I think, the number that

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1027s" target="_blank">17:07</a> It comes out. So if you get 60 C use per second for the entire month, any job that runs at like 100, a thousand CUS at a certain run, you start paying attention to it because that's like impacting your overall capacity. So you're like trying to figure what things should be on the capacity, which things are like required, which ones like I can't have my reports failing, so I have to maybe move some things off. So there's a little bit of negotiation there with those compute units. And so what I found was when I was looking at the number of seconds consumed versus

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1058s" target="_blank">17:38</a> The number of compute units consumed for copy job the ratio was 16 to1.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1066s" target="_blank">17:46</a> Wa.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1067s" target="_blank">17:47</a> Wa. Okay. So 1 second in consumption on seconds cost me 16 cus. I think that was the right ratio. So I basically took the number of seconds and divided it by the number of or so the number of compute units seconds divided by the number of seconds which basically gave me a that that ratio there or basically I was dividing out the seconds. So I got 16 cus basically for the job. By contrast I did the exact same job with a pipeline. I did a pipeline just straight

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1099s" target="_blank">18:19</a> Up copied all the tables. Nothing fancy replaced copy all job all the tables. When I did the pipeline, I I came up with a ratio of 10. The ratio was better. So even though it took a little bit longer, I used less compute units for the duration of the job. Now, I didn't try this on notebooks. I didn't try this in other places. I didn't try this in dataf flows gen 2, but my my argument here is you need some metric to be able to compare different loading processes across different jobs, right? So I could

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1131s" target="_blank">18:51</a> Load things with dataf flows gen 2. It could load things with pipelines or now copy job or a notebook or Tommy what you're doing a lot now user data functions. functions. So th this is where I'm trying to like figure out I think there's a ratio now. So let me let me pause right there.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1152s" target="_blank">19:12</a> A few questions here because I think let me ask you what was the destination of the copy

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1158s" target="_blank">19:18</a> The copy lake house. like okay and the

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1160s" target="_blank">19:20</a> Same as my pipeline they they were and they were writing to the same I all I did was make a new schema so every so I did a test I did one copy job to a schema the copy job schema

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1172s" target="_blank">19:32</a> Enabled schema lakehouse

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1174s" target="_blank">19:34</a> Yep schema enabled lakehouse and then I did a second copy job pipeline so I did one for the copy job only same database same source same connection string everything was identical the only difference was a new schema and then I used a pipeline and the pipeline was call it more efficient for what it did. Now again, I don't know what's happening behind the scenes. I don't know how many chords are being simultaneously run up. I don't know what the system's doing, but in my world, I was looking at going, "Okay, copy copy job was nice, but I didn't want to kill my entire F2 skew

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1206s" target="_blank">20:06</a> All at once." Like, I would rather throttle it a little bit and say, "Look, I don't want you to burn through it all that fast. It does I don't need the data quickly.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1216s" target="_blank">20:16</a> Quickly. Give me a little bit more time." and it just seemed overly expensive.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1220s" target="_blank">20:20</a> Well, Mike, that concept, there's no such thing as a free lunch. Here's the thing with copy job. It's meant to be easy to set up, right? And it's it the easier these us the user interface is and the less I have to do. Well, there's still the stuff is still happening on the background. It's just making it just more accessible to users rather than hey, go learn this in Python or you have to convert these data types and there mapping is enabled on your table. You don't have to worry about that with copyright

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1248s" target="_blank">20:48</a> Dream.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1250s" target="_blank">20:50</a> Dream. So you have this nice easy interface just to get that in. But again you are you still have to pay for that somewhere. And again contrast that with if you're doing a pipeline and you're setting it up manual. Well you may need to make sure all your tables have certain things on that on those source tables. You need to make sure that the time those data types are right or it's going to fail.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1274s" target="_blank">21:14</a> But what's but what's the balance here? Right.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1277s" target="_blank">21:17</a> Right. That's the dude. This is my This is my the hill I'm dying on.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1281s" target="_blank">21:21</a> This is like what's what is the like to me it's like I don't

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1287s" target="_blank">21:27</a> I'm going to intentionally pick I'm intentionally going to pick harder experiences if it saves me money. Period. Everyone will do this. Like Microsoft, isn't it in your best advantage to make it as easy as possible to get data to the lakehouse? all of your all of your experiences around data flows gen 2 pipelines copy jobs anything that anything that gets you data to the lake should be as cheap and as easy and and free as possible to use cover your costs move on I don't like this mentality I feel like every time they

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1319s" target="_blank">21:59</a> Give me an easier experience right now like there's something weird going on in the data engineering team that I do not like and they're they're literally every time there's an easier experience showing up it feels like I'm being charged more cus to use that experience. And I don't like it. That seems that seems silly to me. I should be able to pick what I need to pick and like, okay, I'll be willing to pay a little bit more for something like that. But to go from 10 a ratio of 10 to 16, that's a pretty large jump. And I'm not digging it so much. And all that's doing is pushing me to higher fabric capacity. So, I don't

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1351s" target="_blank">22:31</a> Know. Maybe I'm just dying on a hill that shouldn't be talked about or whatever, but I I disagree with it. I don't like the the mentality of it.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1361s" target="_blank">22:41</a> Mike, first off, I'm going to vehemently disagree on you that no one's going to use it if it's they're always going to use the harder thing. Mike, the reason why these easier things exist is also the reason why you and I still have jobs in the consulting space because oh look at this in a couple of clicks I can do something that that took my 18 weeks to do. What a miracle. It's not. It's not. So, and that's basically you're there's always going to be that compensation because unfortunately Unfortunately, yes, we can integrate all these amazing services, but they've

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1392s" target="_blank">23:12</a> Existed with their own logic that Microsoft still has to account for and they it's as easy as it can get, but there's still all these backend configuration, settings, mappings that again

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1408s" target="_blank">23:28</a> Again I don't I don't agree with you, Tommy. I don't I understand there's maybe complexity that they're handling for us but at the end of the day when I look at all these services like okay I'm looking at it from like a business or cost perspective right

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1422s" target="_blank">23:42</a> Whenever a service comes up to show up in a fabric there is there's always this balance of like is there a certain amount of profit margin that goes along with that compute unit for the the cost that you get to use the thing right you can you can back your math in to every single one of these copy jobs or any single one of the pipelines or ads and say look a every time I use a CU it cost me a nickel whatever right you can do the math back out and you can say look I've I've used a 100 CUS this one activity cost me x number of dollars to run that experience we can do the math right so it's up to us to decide what's

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1454s" target="_blank">24:14</a> The right balance of these tools what's what's going to be easier what's going to be more cost effective right it's they don't seem to go hand in hand and so this is this is where I'm torn a little bit is it feels like Microsoft is pushing higher margin on experiences that are easier to use. And I think you're going to alienate some people and you're going to you're going to cause this like experience of I don't like using this because it runs out of compute units and therefore our business is not going to buy the service because it's just overly priced for what it is.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1486s" target="_blank">24:46</a> And so I don't really think that's the right mantra that they should be having. And I I feel like I'm getting a bit more rad over the coals with every time I want to get data to fabric, the easier the experience is, the more I'm going to be expected to pay

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1501s" target="_blank">25:01</a> Or yeah, the

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1502s" target="_blank">25:02</a> Make it consistent.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1503s" target="_blank">25:03</a> When they say the it's only going to happen in three clicks, it's not something else is going to happen. My really these easier experiences are the equivalent of when we looked at semantic models. You're like, so tell me why you have 18 filters on that single visual. It's like, well, it works this way. He's like, "Okay, okay. Okay, I see that's it's these I don't want to say hacked solutions but unfortunately unfortunately Mike they have not that they have to build these easier experiences but this has been the I think the challenge that fabric's

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1537s" target="_blank">25:37</a> Going to have for a long time too is you are constantly providing and integrating these incredibly developed and rich services with their own context language age, etc., and trying to seamlessly integrate that. And listen, I'm going to say that ain't easy to do. It's amazing what we have now. But yeah, there's a lot of compos I think things that are being compensated on those nice user experiences. But

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1568s" target="_blank">26:08</a> Yeah,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1568s" target="_blank">26:08</a> Yeah, I think I want to park that for that's a whole episode, dude.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1571s" target="_blank">26:11</a> That's a whole another episode. We should probably get into CU capacity. I'm doing a lot more tuning there. Michael also in the chat here is also doing a lot of that, but , they're evaluating the same thing, right? Do we stay in R2 or do we go up to the next level? And I think that's a lot of the optimization decisions. And I think rightfully so, you should be paying attention to those things early on and making decisions based on that. So anyways, let's move on. Main topic for today. I'm going to stop worrying about things. Let's get over to our main topic today. So let's talk about the evolution of an analyst. This is just Tommy and I just reminiscing about Fabric and PowerBI over the last 10 years. maybe going a

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1603s" target="_blank">26:43</a> Bit further down there. And let's get into some I'm going to go a little bit down the memory lane here. Remembering the initial days of Microsoft Fabric. how we started learning things initially. I really liked the I again my world coming into PowerBI was starting in Excel and that's how we started there. Tommy, give us some framing for the topic for today. What do you think? Where should we take this? Yeah, you and I were speaking before and we're just talking about, hey, there's all these new features that came out

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1634s" target="_blank">27:14</a> As always and with the 10 years that Microsoft celebrated with PowerBI, we almost like maybe we take a step back a little and just remember what it was like in just PowerBI in terms of just trying to navigate that when it came out. And really when you look back at the last 10 years on where we are and what we did and what what skills we've acquired that was so much I remember it was like at the mercy of whatever Microsoft PowerBI blog was

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1665s" target="_blank">27:45</a> That month that you could play with. But also too when Mike when you and I started there was no playbook for this. It wasn't just new for us. It was new for everyone including organizations including individuals. So it's like well I don't where do where do we start? Where do I spend my time? More importantly what are other people doing? So there's this all these this really this uncharted waters that we had to go through and this idea of this taking what I an analyst does in the Microsoft data feature set right

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1698s" target="_blank">28:18</a> And seeing how that's changed because I think the best thing that I've acquired over the last 10 years is not a technical skill but really the ability to learn how to learn and I I've been forced to do that and I if I wanted to learn listen right now how to surf. I think I I have the now I have the skills to do so because everything that last 10 years has been a constant. Oh, this is a new thing. All right. And now I how do I master this? Oh, a

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1729s" target="_blank">28:49</a> Calculation group. Never heard of that. Got to find out what this is and all these things that's now really blowing up with fabric. But yeah, let's let's just start with we've told our story about where we started so many times, but I I'm I was thinking back when you mentioned it the first few years on I didn't know anyone else was doing PowerBI and more importantly I didn't know there was no someone that I can look at to who's been doing it for five years before and I had these amazing experiences. We had user groups

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1762s" target="_blank">29:22</a> But it really started with a lot of people and was meeting people that was so essential for me. Mike, when you were that first starting out and there were a few, , Microsoft Docs, there were Power Pivot books, , hey, here's the Excel, it translates to PowerBI. That whole initial idea of getting, , really your feet under you with PowerBI and getting to the place where you wanted to be. What did that look like for you?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1792s" target="_blank">29:52</a> Yeah, I'm going to probably start with you. my very initial days I think a lot of my initial learning was power query I really liked power query I thought that was while I while I didn't quite understand I think in the initial days I didn't understand the semantic model very well I didn't understand why it was there I didn't understand why we needed it analysis services was the engine that drove everything I didn't really get it I also didn't really understand for a long time when you made a pivot table inside Excel the pivot table was analysis services oh okay So for me in those initial days it was a

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1825s" target="_blank">30:25</a> Lot about like learning power query how to shape data. I really gravitated towards the automation of data loading. That was something that was very interesting to me. So that was my initial early days is learning learning a lot about those experiences having to and this was I think that gate the ability to be able to columner store data using power query into the analysis services engine and excel that really opened the door for like multi-million row table data

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1856s" target="_blank">30:56</a> For me and so at the time I was working in a place where we had lots of data to the tune of 200,000 records a week data And so in a couple weeks or a year, like you've got a couple million rows of data. And so I remember at some point thinking to myself, wow, someone asked for a a short-term solution. We built a little short-term solution and Power Query and Excel. And I came back after looking at the solution like a year and a half later. I'm like, yeah, the main solution really

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1887s" target="_blank">31:27</a> Never got figured out. The database, the the business objects universe never really got created correctly. We're still figuring out how to clean it. And here we go. We now have this Excel file that has like 12.5 million rows of data in it and it's all being loaded into memory. So it's like, yeah, slow, but at least it got the job done while we're waiting for someone to like officially finish the actual database, right? So a lot of these things here were like, wow, this is impressive things we can do. So that that was to me like my initial days. And I think over time once I got comfortable with Power Query and like

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1919s" target="_blank">31:59</a> Loading and shaping data then I started getting better at like learning DAX and getting okay there's this interplay relationship between visuals and interactions of the user. And so I think my next wave of like really learning or or things that I really enjoyed was this experience of building user interfaces around visuals. a user interface, a a a web page, basically a data application that you could give to users. Do you remember, Tommy, do you remember the the moment? Was it was there a moment for you? I don't know if I I had this

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1950s" target="_blank">32:30</a> Moment, but I had this moment where I was explaining to other Excel users why we wanted to use PowerBI and I was making the analogy of there's this world that is it that is it complex systems, SQL servers like you can't as a business user can't touch those things. On the other hand, we have Excel which is I have full control of everything I want. There was no world in which those two individuals were able to like work in the same ecosystem. And so the aha moment when I was explaining this to people was if we do things in Power Query, Excel, PowerBI,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=1982s" target="_blank">33:02</a> We're easily able to upgrade things we did in PowerB in Excel into PowerBI assets. That was one advantage. Yes. But then I could hand these PowerBI things over to it and they could read through the Power Query steps. They could see the data transformations that I'm doing. So the business can lead with like, okay, here's how to shape the data. Here's how to get actionable reports and visuals in front of my people that like we can do business with, but then we're not waiting for it to like come up with some ideas and have to explain every little detail. And sometimes they miss

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2013s" target="_blank">33:33</a> Some requirements and sometimes they had the requirements and sometimes they send us bad data because we didn't explain. And again, the business I think does a hard time explaining all the nuances of the data, how to clean it, how to create it, how to groom it, and then get it individuals. So, if we get rid of that work and just give it only to the business and then hand that back to the IT group or data engineering team, it makes it a lot faster. So, I'll just pause right there. Did you have that moment, too?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2039s" target="_blank">33:59</a> No. Very, very similar. Mine was more equivalent to Tom Hanks in Castaway when he's like when he first made his fire and he's like I have made fire. But honestly, I remember I remember feeling like that where

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2057s" target="_blank">34:17</a> There were these pre- PowerBI there was this impossible task not task but these goals that we wanted to how we what we wanted to report on and the trouble was they were coming from all these different tables and there was no relation to them that was easy. , I think one of it was like this customer journey report and it was like it just couldn't be done with what we had. And I remember working on this in Power Query and taking all of these different sources that no one's been able to in a sense have let them talk to each other

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2088s" target="_blank">34:48</a> In the way that was needed and then it worked and I like after understanding like okay unique ID a little thing about relationships and what what tables do I need and literally when we first when I first put that into a visual and you clicked on a customer and it would show you each of the steps that they took in each to these different services.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2112s" target="_blank">35:12</a> It was like I literally gone this was impossible. Like this was not

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2116s" target="_blank">35:16</a> This did not exist until now thing. And that to me was this moment of oh my goodness like I have the ability not just to connect all my data but I have this ability now to like again things that would not been able to be conceived before I can now actually in visualize it. to your point Sue, the automation side was another huge thing because all of a sudden Mike was like, well, if we just set it up this way, well, this could, , these conversations that you would never

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2148s" target="_blank">35:48</a> Think to have where not just from automation, but just from u I think people's trust in the data.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2156s" target="_blank">35:56</a> It's like feeding things into a semantic model but also from an Excel sheet because it came earlier and it took a while to get to the database and it was like we could just feed that into the same table in PowerBI no one else would know and it's like this is incredible the way that we can combine everyone's business effort and then and graduated to the same table that's been working with it and then it's this almost set and forget. It's like, oh my goodness, we have a source

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2187s" target="_blank">36:27</a> Now. We have this is it thing, , like there's this is the one place you look. And to me, those are my two moments of

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2196s" target="_blank">36:36</a> Like this is something something else.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2200s" target="_blank">36:40</a> But I like I think those are good points and I want to move on to some other things here. So I want to transition a little bit. Like one of the things that we started talking about before the meeting here was just how do we find content? Those initial days I feel like a lot of was done with like a lot of desktop. So a lot of our discovery, a lot of our learning happened in PowerBI desktop and people would share files, there'd be git repos. And Tommy, you made an interesting observation which I did not really like latch on to until you said it.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2226s" target="_blank">37:06</a> In the initial days, people were able to build PowerBI files and share them. You could go see them in git repos. You could download files from other people on blogs or whatever. Once you had those items, you're then able to easily like use them in your

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2242s" target="_blank">37:22</a> Mhm. desktop application. But I think now that most things are moving more towards the cloud, it's a lot more difficult to share like a dataf flow or some M code or a notebook experience. Building the lakehouse like there's there's a lot of other experiences now that we have with fabric that are more difficult to share like a user data function. Okay, it's a function. It's written in Python, but the sharing mechanism of that isn't as easy as downloading to desktop, saving the file, and just, , sending it out to

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2273s" target="_blank">37:53</a> People, right? So, I think you made a really good observation around this, and I think it's changing. I to be honest, like when we go back to episode one of the of the explicit measure podcast, we made the call very early on that said, look, everything is going to go to the browser. It's going to be all in the cloud, and I'm using PowerBI desktop less and less. To be honest, Tommy, I'm finding that with the lakeouses and all the user defined functions, all the data engineering pieces that I get from the web browser, I don't really want to do it in desktop anymore.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2305s" target="_blank">38:25</a> And Mike, I I'm agree with you, but there is this great irony that we're moving into where everything's at our fingertips in the service and I have all these great retooling, but what's getting lost is that almost open-source concept that we had with PowerBI desktop because that's what it was and in a sense of I could download anyone else's PowerBI desktop report, see all the things in it and I can make sense of it. to your point about you want to learn something or there's maybe a new DAX concept. Well, I would go to the

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2337s" target="_blank">38:57</a> Forum or go to GitHub or someone's blog and I can download that file. I can look at all the mechanics underneath it. And Mike, a lot of what I did was literally just taking bits from every different sample or demo that I saw like, okay, well, this works here, this works here. More importantly, I was able to again whatever you plug and play any e x for whatever the concept is here but everything was okay this new concept or maybe it's a DAX function I could go through all these examples and

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2370s" target="_blank">39:30</a> See the use cases for it right because I could actually see okay not just a single example of the code or the formula but okay how does that interact because I have that ability to you really interact with But the where we're shifting now is to to our point is well I was looking for user data function examples outside of just Microsoft's blog and they have I think like five on their docs and they have a GitHub repo but again they're so specific because everything in fabric is

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2402s" target="_blank">40:02</a> Based on an environment

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2405s" target="_blank">40:05</a> Right it's based on your own ind user environment

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2410s" target="_blank">40:10</a> Outside of just plugging and playing well Again this all everything in fabrics is dependent on the lakehouse and the structure of that particular lakehouse whereas with everything with PBX was well we'll just download it open it and then you can take components of it. It's really hard now to find like user and community examples of a lot of the new tooling in PowerBI. A lot of people are doing stuff with notebooks that you can download, but user data functions the data

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2441s" target="_blank">40:41</a> Portion, right? Exactly. Exactly. And it's not

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2445s" target="_blank">40:45</a> If you're and if you're going to do something like that where you're going to share some work that you've done you now need to take like a route like Michael Kolski is doing with like semantic link labs where there's a lot more you're building packages you're bundling them up you're distributing them

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2459s" target="_blank">40:59</a> Few more artifacts in your in your service

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2461s" target="_blank">41:01</a> Service you're distributing them to like a service that can people can download and use directly from there. So I do think the your observation of like how we get content and what we share has greatly shifted more more recently and it's a lot less again maybe also to the fact here too Tommy like when we were building like visuals on a report page it was about like setting the right properties on the visual getting the visual to look the way we wanted or adding a collection of like multiple visuals together right so when I'm working on the visual side of things it

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2493s" target="_blank">41:33</a> Was a little bit more easy to like lock down what that code was or how to do it and say here's my video, here's my example. Oh, by the way, here's the artifact that you can download. It just loads up and works. But but now we're in a world where it's not as easy. And I I will say this though, one of the things I have been enjoying is the SQL server that Microsoft provides you.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2516s" target="_blank">41:56</a> A lot of these new data engineering storage systems give you the ability to make a sample data set in them when you start them. Now, you can delete it when you're done. You don't have to keep it there, but I really like this idea of being able to create a sample data set with the item because when I'm teaching people, it's as easy as click this button, create the SQL server, click this second button, get the sample adventure works data set automatically populated. And so, , when I'm looking at a project I was just recently doing,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2548s" target="_blank">42:28</a> It was sales LT, so sales light. it was that that adventure works or Kontoso data set and it had a lot of neat elements in it and so I could just pull from that so that from you now it's becoming more important like if you're going to teach or train people we need the same starting point we all need to be able to start with the same data set and so that way when you build the notebook or the other things that are interesting you can say okay I started with the default SQL server sales database and then boom everyone knows where that came from and so like I

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2581s" target="_blank">43:01</a> That's also a good move that Microsoft is doing, but I don't think everyone's leveraging that yet and the community hasn't really

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2588s" target="_blank">43:08</a> Built that together yet.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2590s" target="_blank">43:10</a> That may be one of the more underrated features because I I think you made a really great point where what we're dealing with now with fabric. So, you're talking about like let's say you Mike, you developed a really cool PowerB report and one of the visuals is awesome. The the conditional formatting and there's a bunch of few layers on them like I I want this. I I want to put this in my report. Well, I would open your file. I would copy and paste it. It would have some errors. Fine. I there's a few things I could twe need to tweak. So, it would just show up, but it there was nothing , it was nothing

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2621s" target="_blank">43:41</a> Substantial. It's like, oh well, I just have to remove that conditional format. It doesn't exist. And then and then it was working. But what we have to do now if we want someone's example, it's like that on steroids, right? Because you can't just c even if you could copy and paste it. Well, again, there's all all these other things that are required to set it up. But yeah, and that's the thing, too, because again, we're we're playing in our own environments. So, it just makes it harder to unfortunately see examples. And my I I have to be

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2652s" target="_blank">44:12</a> Honest, that's been something I've been navigating too because I love to reverse engineer things. I love to break something down so I can understand not just figure out how it works,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2663s" target="_blank">44:23</a> Right? Well, not not just how it works, but why to do it? When could I use this? Like, sure.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2668s" target="_blank">44:28</a> I I think the user data functions is something that's just so unexplored. , they have a few examples now. I'm like, I feel like this could do a million things like and and but I need to figure out the ones I want to focus on. So,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2682s" target="_blank">44:42</a> On. So, but yeah,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2684s" target="_blank">44:44</a> Let's talk about that too as well. I think that's another area here that we've seen evolving over the initial days versus where we're at now. I think in the initial days it was very like narrow. We had one path to get data in. It was input or direct query. It was it was it was the semantic model and a report.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2706s" target="_blank">45:06</a> But on both ends of the spectrum, right? On the data getting data inside loading data for the semantic model and now also consuming the semantic model. I think we actually have, this is interesting to me because when you step back and say like what has been evolving over the number of years, the semantic model has been getting better every single year. There's always a lot of new improvements. There's a lot of new features. It's great. And the semantic model has been adapting to the different technologies that are being presented, right? Lakeouses, table column storage, all those things are coming in from the data engineering side of things.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2737s" target="_blank">45:37</a> When I look at the spectrum though, everything all the data comes in from the left side. The semantic model is the core centerpiece of what we're building and the output is an exploration, a report, a pageionated report, an API call, a DAX query. Like you can have all these other rich experiences on other on the other side. And the neat thing here is I think all of these experiences whether you're bringing data in and you're serving the data out, everything lands at the at the cornerstone of the semantic model. The semantic model is

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2769s" target="_blank">46:09</a> Key to like everything here. And this reminds me of an article that I think SQLBI or Rob Collie was talking about on the P3 podcast, raw P3 raw data podcast. Rob Collie made the statement that said any consulting firm that tells you move away from the semantic model and present flat tables so that the large language models can be better at understanding your data is a bold-faced flatout lie. Because when you do that, all you do is rebuild a semantic model

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2800s" target="_blank">46:40</a> In a different form. So that way the relationships are there, the measures are there, the columns are there. So the semantic model and I think Marco Russo picked up on that comment from the podcast and also echoed this is the way to go. Like there's nothing that has been built and Marco doesn't see anything in the near future that's going to be able to compete with the semantic model level. I would agree with this and when I observe snowflake and data bricks and what they're doing they're they're building flavors of a semantic model to do exactly what we're doing already in

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2833s" target="_blank">47:13</a> PowerBI and we've already been here for like 20 years already.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2837s" target="_blank">47:17</a> No and the only different and could not be more well said and however however Mike the difference is how we get there. So the first seven years of PowerBI, I know you were doing the same thing I did in terms of or as the same as anyone was in PowerBI. They were going to PowerBI desktop. They were creating a bunch of queries and they were pushing that in. So everyone had that same direct road of getting to your semantic model. That's why everything in the blog

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2869s" target="_blank">47:49</a> Updates were completely relevant to us because there was that standard path. Again, the first time data flows came out, I was like, whoa, you're using a data flow to do that? I didn't. Okay, so that's a different in a sense journey or a different process, a method. But I think Mike was like the first six years, you really only had one option. It was the queries and that semantic model. But to your point, Mike, even if everything still is the core of semantic model, you you may you and I may have very different ways of getting there. You may

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2902s" target="_blank">48:22</a> Be doing it and some are more relevant for others in terms of the data that you have etc. But again, you may never touch power query again. Everything's going through the lakehouse. I may get to a semantic model and I am using power query still or whatever the case may be. But we have like six, seven different ways to build a semantic model. So it's almost we're not that everyone the drifting apart's the wrong way of saying this but

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2933s" target="_blank">48:53</a> This but some of us are losing a common language with each other who are an analyst because there are different directions we can go in terms of the process. some are more project based. You're going to learn what's needed for what you're working on. But again, the difference now is I have just a ton more options to choose from in terms of how I want to get there.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2957s" target="_blank">49:17</a> I would totally agree. And I think that's really what's giving you your choose you remember those books you used to read when you were a kid, the choose your own adventure books. You' like, okay, I'd read two pages like, okay,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2967s" target="_blank">49:27</a> Which way do I want do I want to take the left path through the dark scary woods or I want to take the right path through the sunny valley? And then, okay, well, I'm going to flip to page six. And then you go to page six and you read the next page. It feels like the book that we've been able to play, the playbook that we're pulling from, we now have a lot more pages here to to pick from. , one other analogy here that I want to just point out before we wrap here. I think we're going to we're going to do final thoughts here fairly shortly. Tommy, we were also talking about an analogy of what it felt like to be working in PowerBI in the initial days versus a person who starts now

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=2998s" target="_blank">49:58</a> Today. So, in the initial days, I made the analogy because I love Legos. Legos are my thing, my jam. I love playing with them. , I like came out with my family. We like building things with them as well. But when I was a kid, when I was little and I was first introduced to Legos, I didn't get the big elaborate set day one. And even now, as an adult, when I buy sets for my children, I buy age appropriate sets for them, how long they've had experience with them, how comfortable they are with working in the sets and whatnot. And so, my wife was not a Lego fan

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3029s" target="_blank">50:29</a> Growing up. They they her brothers had some Legos, but she never had they didn't really design like Legos for girls at the time, like when they was little. They're just cars and like houses, square blocks and bricks of things, right? That's basically what it was. So, in our early So, let's bring the analogy back. I'm going to stop gushing around Legos. We're going to go back back to PowerBI.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3050s" target="_blank">50:50</a> Come back to the beginning.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3050s" target="_blank">50:50</a> Bring it back. Bring it back. So, if we take that analogy back to the early days of PowerBI, it was we were giving like a small set. PowerBI was limited. Couldn't do everything. You had to get creative with a couple of the things inside there. There was there was only a couple standard pieces. We had like some doors, some windows, and square blocks. That was it. But then as you get better at that, Microsoft kept releasing, let's call it, new sets, new pieces, new new colors in new pieces. And so as you started from that very beginning stage,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3081s" target="_blank">51:21</a> My collection of Legos got larger and larger. And then I was able to build more elaborate things. So introduce bookmarks, introduce all the buttons, introduce actions on buttons like all these other things that introduce more visuals and features on those visuals. So all these experiences we could continue building from what started as a very simple report which was slap on a visual, click a bar and things change. That was basically it at the early days. But here we are, you

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3112s" target="_blank">51:52</a> Know, 10 years later and now we've got like fabric, data engineering, data science, all these other experiences. We've got real-time analytics, event driven things. Like, so what has happened now if you step into the world, you're now being given like this monolithic super big set and you have a ton more pieces to work with. Very fun, but when you do that to new users, they're very quickly overwhelmed. And I felt like this analogy fit really well with how I learned and started with

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3143s" target="_blank">52:23</a> PowerBI. I started with the small sets. I slowly acquired over time and then when I got older, I had these much bigger sets I could play from and it was really interesting. So that just seemed to really resonate with me. I'll just pause there. Tommy, what are your thoughts?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3158s" target="_blank">52:38</a> Thoughts? So, as much as I was never a fan of Legos, just I think my fingers were too sweaty all the time. So just never never

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3166s" target="_blank">52:46</a> You couldn't hold on to long enough.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3170s" target="_blank">52:50</a> I just wanted to make a dinosaur and I could not do it. And that's when I

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3173s" target="_blank">52:53</a> The patience thing killed you.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3175s" target="_blank">52:55</a> No, I

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3177s" target="_blank">52:57</a> No, I but honestly the concept though too is when I I always think about everyone would always talk about the PowerBI blog when it came out. And to your point, not only was it a new Lego set or new blocks that you had you could play with, but everyone was it was relevant to everyone who was playing in PowerBI. It's like, oh wow, bookmarks. Well, I do bookmarks because everyone did because it was that direct path. , , it everything was relevant if you were a PowerBI analyst. , so you're like, okay, because again, there's that one story and so to speak. Well, now it's like

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3209s" target="_blank">53:29</a> It's not even just choose data engineering. Okay, what are you going to do in data engineering? Like to your to your beat from the street, we talked about four different concepts and that was all data engineering. So, not only is it more blocks than ever or more pieces than ever, but it's really now expanded on not just am I a data engineer or am I an analyst? And I think it's such the wrong way to think about all this now. And unfortunately, you say, okay, what's the way to think? I'm

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3240s" target="_blank">54:00</a> Still not sure if I know directly because because someone going into this now and if they were I'm thinking like okay what advice could you give me? I want to do what you did when you you started out with PowerBI. And I don't think that answer is as direct as it was for me because I could say this concepts. I could say some concepts, , but again to your point, you and I may not be doing the same stuff in fabric and we you and I are working fabric every day. You and I may never do the same maybe using the

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3272s" target="_blank">54:32</a> Same services and we're still spending all our time in it. and so that's where all of there's this bit of a divide in terms of where do I spend my time? Where am I gonna most spend my time to for my own career for the computing engine I have to what needs to get done? And I think that's really the biggest I think fork in the road for a lot of people.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3298s" target="_blank">54:58</a> Yeah. I would somewhat agree with your point Tommy, but I also would disagree as well. I don't I don't think you need to worry about that. I think you just need to start. I think it's the same. I don't think the learning progression is any different than what you started with originally. I would argue you you should you should first get some of the like start using some of the easy parts of programming in Power Query. Load data using Power Query in your PowerBI desktop file, right? It's cheap, it's free, you can download it, you can use it until you're blue in the face.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3329s" target="_blank">55:29</a> There's no cost or penalty around doing that initially, right? So just starting out I think I would take the same approach. I don't think I would I don't think I would throw everyone into fabric and say start everything here and do everything perfectly the first time.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3341s" target="_blank">55:41</a> You can

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3342s" target="_blank">55:42</a> You can I think I would want to at least get people familiar with like okay what what is desktop doing? What's the separation between the vertip engine the semantic model and now the report I think those are concepts you must understand first. So, I would rather instead of just saying you you you have to throw everyone at the at at the all the ideas, I don't think everyone's at the same place. And I'm going to clearly first figure out where your knowledge sits and start you with where you're at. Right? If you're already comfortable

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3373s" target="_blank">56:13</a> With Power Query, if you already understand the basics of data movement or data shaping, we can skip ahead and bring you into chapter two or chapter three of the book. We don't need to give you all the basics again. But I really think it's going to be very important to evaluate when you're bringing people to PowerBI and Fabric, where are they in the journey? What things will make sense to you? Because I've seen it over and over again. Many people come into fabric thinking, I'm just going to do everything the way everything the way I did in Power Query, data flows, , not use lakeous, just use the semantic model. And yes, that will work, but there are alternative

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3405s" target="_blank">56:45</a> Options that maybe work better. And again, we're going back to like the three V's of data, volume, variety, and velocity,

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3417s" target="_blank">56:57</a> Velocity, right? So, if if any of those start changing to now you're going to fabric and we're expecting to get larger data, faster data, it's going to change and be more diverse. Okay. Well, now we're probably picking different tools, right? So, there there are other tools that are probably better positioned to do those things. And so again, I I would I wouldn't take I wouldn't change anything. I would start people assess where they're at and figure out how to get them from there into what they need to know for fabric.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3446s" target="_blank">57:26</a> Listen, we're we're near the end of the episode on love the conversation. While I still may disagree with you because

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3452s" target="_blank">57:32</a> You're allowed to.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3453s" target="_blank">57:33</a> , listen, you're wrong.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3454s" target="_blank">57:34</a> The day we're agreeing on everything is the day I'm hanging up the podcast, by the way. So, but I the the only thing I just I got to say because it's going to bug me if I don't is I'm dealing with that with right now where it's like okay I do I need to master user data functions right because right now I don't have to use them right everything in PowerBI you had to learn you at least had to know power query and you had to know DAX you had to know those concepts but I don't have to touch user data functions ever right now

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3483s" target="_blank">58:03</a> But it could be really useful this seems like a lot of use cases I don't have to use the SQL database or do I? Correct.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3490s" target="_blank">58:10</a> Right. And those are the questions that we never had to worry about.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3494s" target="_blank">58:14</a> To your point with PowerBI, it was hey, you got to know this Power Query thing and you got to know how you're going to load the thing in because this is universal.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3503s" target="_blank">58:23</a> You're still going to need to know that.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3504s" target="_blank">58:24</a> Yeah. I would still argue like that's still universal.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3507s" target="_blank">58:27</a> That's the getting your license to drive. Okay. So, we're we're agreeing there thing. You don't get a car unless you can do that.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3514s" target="_blank">58:34</a> But this is my point. You're talking about an architect of things being able to choose which service, which things to use in what situation. That's a different skill set than I just need to make a report skill set initially.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3527s" target="_blank">58:47</a> Of course.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3527s" target="_blank">58:47</a> So, I think I think I think all you're doing is reaffirming my point is you really need to assess like what is the what is the points you're making my point.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3535s" target="_blank">58:55</a> No, you're making my point like you're doing what does the person need to do? Like what are their skills? like figure out who they are, what role they're fitting, and then we can talk about the different stuff that they're trying to build inside Fabric. Because you're right, I would not want to throw a SQL database at every single new user and be like, "All right, now write a store procedure, figure it out." So, I don't think that's the right approach.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3557s" target="_blank">59:17</a> I completely I I have no idea why we're not matching, of course. But

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3561s" target="_blank">59:21</a> Do we agree?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3562s" target="_blank">59:22</a> Okay, great. Yeah. what? I'm glad I'm glad that we can't do an agreement there. Honestly though, it is fun. , and I I know we're getting time, but the where we are now and you think about that is a constant navigation, Mike, of for for myself from the individual side on what do I want to master, what do I what I want to be, what I excel at, and what's going to be important for companies, and just also what's new and get to try things out. It is my favorite part of what I get to do.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3593s" target="_blank">59:53</a> I I always bring up like there are so many ways you can build a bridge. They do come up with different concepts but there's it doesn't come like hey there's a completely new feature set in terms of the bare metrics of a bridge. And for me, Mike, I'm like, dude, not only do I have this awesome smith model and they're coming out with new ways to do that, but I'm like, I can completely not touch a report for the next three months and I'm going to be busy in PowerBI because I'm like, what, maybe I'm going to just focus on these data agents because this is really cool and

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3624s" target="_blank">60:24</a> Or , I'm just going to do this data functions. Let me dive down that rabbit hole. I think that's the questions we have to ask. But it's so awesome that we actually have these at our fingertips. like I what ? Like all these different things I can just start plugging in and playing with right away and just being to test things out. So that's what I love about what we do is is going through going that iterative learning and honestly seeing what's possible.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3656s" target="_blank">60:56</a> Cool. Excellent. I agree with that. So I'm going to wrap this thought with I'm going to say looking back on things it's it's a progression. , I think you start with PowerBI, start getting the fundamentals figured out there, and then you expand to that to fabric and have all these other data engineering experiences. What I'm going to do though is I'm also going to throw a little bit of a predictor down as well as where I think we're going. Yeah. So, 10 years in, right, Tommy? Let's Where are we at?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3680s" target="_blank">61:20</a> Are we at? We we started the podcast four years ago, right? So, what do we look like four years from now? What what is the next next

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3688s" target="_blank">61:28</a> Next piece that we're going to put ourselves into?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3690s" target="_blank">61:30</a> I can't wait to hear this. So, I'm I'm probably going to move way more towards the we're we're still going to do the same things. We're still going to shape data. We're still going to transform it and we're going to get it into reports. However, I think the programming language we use to get it there will just be natural English language. And we're going to use a lot more of the MCP MCPs, the LLMs, large language models. We're going to use a lot more AI to help us shape and conform and shape

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3721s" target="_blank">62:01</a> Data in a way that is an efficient user optimization of stuff. So the AI will be able to know every bit of language of SQL. The AI will be able to know every bit of language of Python, Spark. it already does. It already knows more of these experiences than Tommy you and I could ever learn in a lifetime. We could read all the books all day long. The AI has been already trained on them right now at this moment. So to have something that is super knowledgeable around the syntax, the language of

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3752s" target="_blank">62:32</a> Things, we don't need to program all the details anymore. We can focus more on these flow diagrams and what is conceptually need to happen with the information in the data and we can let the AI figure out the code it needs to write in an efficient way even to build that table or that information that we want to produce. So I really do think there's a lot of interest around I want to chat or talk or say words to a model and get visuals back basically. I think that's where we're going and I

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3785s" target="_blank">63:05</a> Think Microsoft with their co-pilot home experience is getting there.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3788s" target="_blank">63:08</a> I don't think any one company seems to have this dialed in and nailed. I have not seen any experiences in the space that really wow me yet. So, I think in the next four years, Tommy, we're going to do a whole lot less of building and clicking the buttons and writing our own code. We're probably going to do a lot more of checking and verifying that the AIS are doing things. And some point, it's going to get so good, we're going to not even need to do that anymore. We'll be able to say, write a Python notebook that does this and have tests at the end that do this

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3819s" target="_blank">63:39</a> And write the data here, and it'll just figure it all out and just know how to build everything for us. And so we'll do a lot more of the code will still be under the hood, but we're going to be able to spend a lot more time at the at the higher levels thinking through what we want to do with the information. So that's my prediction there. I think it's going to be a lot I don't know what it looks like yet. there's going to be a lot more of these experiences there on that side. And maybe one other side note, I'm already seeing AI build entire web applications that are throwaway.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3851s" target="_blank">64:11</a> So, I I've said this for a while now, and I'm starting I'm starting to see this appear. I'm just saying it because that people will be aware of it when they see it. Large language models will be able to build dedicated data applications that you use to answer one specific question. The AI will get so good at generating all this information for you in a single shot. It's going to write hundreds, if not thousands of lines of code to answer one question, and that's it. And then it'll throw it away and you'll move on. So, this is really interesting. I think where we're

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3883s" target="_blank">64:43</a> Going to go here in the future and I think that's what we're going to get. We're going to get a lot of little mini data apps that answer a single question and you you throw them away when you're done and move on. So, anyways, enough said. Thank you all so much for listening to the podcast. This was our evolution of PowerBI analysts and potentially a little prediction of what it may look like in the future. With that being said, please make sure you like and subscribe. We really appreciate the listeners. , you make this community fun for us. We really enjoy engaging with you on all the different social media platforms. Ask us

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3914s" target="_blank">65:14</a> Questions. Let us know what's going on. , and if you please if you like this conversation, if you like what you're hearing here, please recommend it to somebody else and let them know that you found some really good information on the explicit measures podcast. Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3929s" target="_blank">65:29</a> You can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. Do you have a question, idea, or topic that you want us to talk about in a future episode? Well, head over to powerbi.tipsodcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central on all power.tips social media channels. Thank you all so much, and we'll see you next time. [Music] Get out.

<a href="https://www.youtube.com/watch?v=FqspjFkUId8&t=3981s" target="_blank">66:21</a> Get out. [Music]
