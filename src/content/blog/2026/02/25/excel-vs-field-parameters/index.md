---
title: "Excel vs. Field Parameters – Ep. 505"
date: "2026-02-25"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "AI"
  - "Field Parameters"
  - "Excel"
  - "Semantic Models"
excerpt: "Mike and Tommy debate the implications of AI on app development and data platforms, then tackle a mailbag question on whether field parameters hinder Excel compatibility in semantic models. They explore building AI-ready models and the future of report design beyond Power BI-specific features."
featuredImage: "./assets/featured.png"
---

In Episode 505 of Explicit Measures, Mike and Tommy kick off with a deep dive into AI's transformative role, inspired by Naval's podcast and Miles Deutscher's insights—debating vibe coding, hyperpersonalized apps, and whether AI centralizes or democratizes power. The conversation shifts to a practical mailbag dilemma: field parameters boost Power BI reports but break Excel access, prompting reflections on semantic models as the keystone for multi-tool ecosystems like AI visuals and paginated reports.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/8Y7hEhcNvvg" 
  title="Excel vs. Field Parameters – Ep. 505"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

Mike and Tommy start with AI-heavy discussions, pulling from recent Fabric blogs and a viral tweet. No major Fabric updates this week, but these pieces tie into the episode's themes of AI readiness and efficient data handling.

- [Miles Deutscher on Naval's AI Podcast](https://twitter.com/milesdeutscher/status/1760000000000000000) — Miles summarizes Naval Ravikant's latest podcast, framing AI as a "motorcycle for the mind" that amplifies human effort beyond basic computing. Key takeaways include vibe coding as the new product management, no room for average apps in a hyperpersonalized world, and a warning that unaligned humans with AI pose bigger risks than the tech itself—resonating with data pros building AI-first workflows.

- [Under the Hood: Native Execution Engine for Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/under-the-hood-an-introduction-to-the-native-execution-engine-for-microsoft-fabric/) — This deep dive reveals Fabric's new C++-based execution layer, powered by Velox and Apache Gluten, for vectorized Spark processing without code changes. It promises massive performance gains for data engineering tasks like ETL and queries, making Fabric more competitive for AI-scale workloads by optimizing compute at the engine level.

- [Something Big Is Happening: Is Your Data Platform Ready?](https://blog.fabric.microsoft.com/en-US/blog/something-big-is-happening-is-your-data-platform-ready/) — Drawing from Matt Shumer's viral essay (73M+ views), the post likens the AI boom to pre-COVID uncertainty, urging data teams to future-proof platforms like Fabric for agentic AI. It emphasizes embedding AI hooks—like vector search and semantic layers—from day one, as raw data alone won't cut it in an era where AI rebuilds apps on demand.

- [Recent Data: Get Back to Your Data Faster in Fabric (Preview)](https://blog.fabric.microsoft.com/en-US/blog/recent-data-get-back-to-your-data-faster-in-fabric-preview/) — A handy Power Query upgrade in Dataflows Gen2 remembers specific tables, files, folders, and sheets—not just connections—for quicker re-access. Available via the ribbon or modern Get Data experience, it cuts navigation friction in complex sources, supporting Fabric's push for seamless onboarding in data prep workflows.

## Main Discussion: AI's Impact on Development and Data Platforms

The episode opens with a spirited debate on AI's societal and professional ripple effects, sparked by Miles Deutscher's tweet on Naval's podcast. Mike and Tommy unpack how AI lowers barriers to custom tools, but question its scalability for enterprise needs.

### Vibe Coding and Hyperpersonalized Apps

Mike shares how AI floods his feeds, citing MVPs pivoting to AI builds and Naval's "motorcycle for the mind" analogy—elevating humans from bicycle-level efficiency. Key insights from Miles: vibe coding redefines product management, top apps monopolize categories, and niches will aggregate while mediums crumble. Tommy pushes back on the black-and-white tone, noting politics and human factors prevent "best app wins" in reality—consultants thrive precisely because perfection isn't always adopted.

They explore AI as a "magic wand" democratizing creation: anyone can prompt hyperpersonalized apps, ditching mediocre tools like half-baked Salesforce features. Mike argues this erodes tolerance for average products, enabling quick exits to AI-built alternatives (e.g., replacing Trello/Loop/Miro combos). Tommy counters that individual wins don't scale enterprise-wide—hyperpersonalization fragments processes, undermining shared apps like Fabric's lakehouses. Mike envisions API/MCP-first futures where AI-first building (not UI) dominates, with data remaining the irreplaceable human element.

### Fabric's AI Readiness and Platform Gaps

Tying into "Something Big Is Happening," Tommy stresses building AI-friendly data from the start: vector search in schemas, semantic hooks for DAX/SQL queries. Mike agrees Fabric is the "keystone" arch—left side (Spark/warehousing), right side (reports/AI)—but laments missing front-end customization (e.g., Lovable integration). They debate developer vs. organizational lenses: Mike champions agentic experiences (e.g., Vega-Lite visuals via AI), while Tommy focuses on outputs like AI-ready models for clients.

Frustrations surface on Fabric gaps: no built-in vector search (unlike SQL Server 2025), lagging Copilot vs. Claude. Mike teases a Vega preview for "vibe coding" visuals, ditching button-clicking for zero-effort rebuilds. Recent Data in Dataflows Gen2 gets praise for UX wins, but both call for agentic Power Query to automate mundane tasks like parameters—bridging new-user simplicity with pro efficiency.

## Main Discussion: Excel vs. Field Parameters

A mailbag from Elvin highlights field parameters' Power BI exclusivity: great for dynamic slicers (metrics/measures/dimensions), but they vanish in Excel/AI/paginated reports. Mike and Tommy weigh trade-offs, advocating semantic models as multi-tool foundations over report-specific hacks.

### Field Parameters: Power BI's Double-Edged Sword

Tommy notes field parameters solve report-specific pivots (e.g., swap brand/category for color/continent without recalc groups), but they're niche—used situationally, not standard. Adoption lags (<20% of listeners?), as users prefer fixed views over widget-turning. Mike agrees: they're UI conveniences for Power BI, but sacrifice broader compatibility—e.g., no Excel pivot equivalent, blocking Analyze in Excel for finance teams clinging to spreadsheets.

They debate usage: Tommy builds on-demand; Mike rarely, favoring AI-rebuilds. Core issue: semantic models must serve ecosystems. If Excel/AI dominate consumption, field parameters bloat models unnecessarily—better as "thin report" features via composite/direct query.

### Semantic Models as the Keystone

The duo positions semantic models as the "lynchpin": describe data once for Fabric (left: storage/ETL) and consumption (right: reports/Excel/AI/SQL). Excel fits the right side but demands frictionless access—push models to organizational dropdowns, add diagrams/measures in pivots (Mike's Anthropic extension wish). AI accelerates: brute-force visuals (e.g., "rebuild table with color/continent") outpaces field parameter wiring, potentially obsoleting them.

Enterprise ontology emerges: central metadata catalog (tables/measures/lineage) auto-generates models on-demand, avoiding replication. No need for dual models—leverage PBIP/PBIR for diffs. Tommy warns against monolithic models bloating Power BI; Mike counters with AI making maintenance trivial. Closing: Prioritize audience—field parameters for pure Power BI? Fine. Broader tools/AI? Skip for fundamentals (facts/dims/measures).

## Looking Forward

Mike and Tommy predict AI slashing field parameter needs—rebuild visuals via prompts faster than slicers. Stay tuned for Mike's Vega-Lite agentic visual builder preview. Broader: Build AI-ready semantics now; Excel momentum grows in finance. Ontology tools could revolutionize model gen, but start simple: audience-first, keystone models over report silos.

## Episode Transcript

Full verbatim transcript—click timestamps to jump:

[0:02](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2s) Tommy and Mike lighting up the sky. Dance to the day to laugh in the mix. Fabric and A. I get your fix. Explicit measures. Drop the beat now. Pumpkins feel the crowd. Explicit measures. Explicit measures.

[0:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=22s) Good morning everyone and welcome back to the explicit measures podcast with Tommy and Mike. Hello everyone. How's things How's everything going Tommy? Things are hanging. Things are doing well.

[0:32](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=32s) Excellent. All right. Well, we are jumping in today. There's some really cool topics. We're going to talk a little bit about our beloved friend. We don't talk about him very much. His name is Excel and we're going to talk about how Excel and F and field parameters work together. what do you pick? Do you use field parameters? Because that blocks you in some areas. So, we're going to unpack a little bit around field parameters and Excel and see where we take it from here. That being said, Tommy, let's go jump into some news. What do you have for us today?

[1:00](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=60s) Well, you got a really interesting article that I cannot wait to argue with you on this. So, there's an blog post by Miles Ducher Disher and he's talking about this AI podcast. Mike, you found this. So, tell me a little about what you found, what your thoughts were first because some context.

[1:23](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=83s) Yeah. Everything I look at on the internet is like filtered by the lens of AI.

[1:28](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=88s) My ex algorithms, my YouTube algorithms, any anything I'm on doesn't matter. Like we even post little shorts and videos over to Tik Tok. It doesn't matter. Every single platform I'm on, it's serving me. Like AI can do this, AI does this. Like it knows that I spend time researching and learning about this AI space. It's just happening so fast. It's changing so quickly. So that's that's first and foremost what's happening here. What you find though is constantly I'm seeing people like talking about podcasts and speaking about new topics or things that are related to AI. So Miles is one that I've been following.

[2:00](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=120s) He was in the crypto space for a number of years, but he's really heavily pivoted into just AI and the AI space. I also think I see a trend here too, Tommy. When I look when I look at other MVPs and what they're building and what they're doing, there's a lot more now discovering building and creating directly with AI which I find very interesting. These are MVPs that were in our data space like in

[2:25](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=145s) Data platform MVPs from Microsoft.

[2:28](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=148s) I'm just hearing a lot of people picking up these tools and really diving in really understanding them., and so I think this is a little bit of my experience as well. But Miles goes through and summarizes this podcast from Naval, I think is how you say his name. He has a new episode. He talks about AI is now the motorcycle for the mind., is is where AI fits here. It's, we used to be using computers. That was us moving around on bicycles. We would be more efficient. We're able to take what we were able to do, effort-wise and multiply our effort by being on a bicycle. We move

[2:59](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=179s) Farther. Right. Tom, this. You're you're a big biker. big cyclist. Yeah. I

[3:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=186s) Yeah., do you agree with everything that is not at least in the tweet here?

[3:12](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=192s) So, let me give you some So, you're asking if I agree. Let me just give a couple bullet points out of the tweet.

[3:18](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=198s) These are extracted insights that he thought he heard from the podcast. So, I'll just rip out a couple here just so you can hear what's going on. Right., vibe coding is the new product management. training and tuning models is now the new coding that we're doing in the new future here., there's no demand for average. The best app will always win 100% of every category. Everyone else gets nothing. So, it's like a a feast or famine, right? If you can design a good app or have a really good solution, solutions are going to win over the proliferation of just half and mediocre

[3:50](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=230s) Apps. Right? That that's something there., it's saying medium-sized companies will get blown apart. giant aggregations of tiny niches will survive. So, you're going to have a lot of niche areas that are going to solidify, come together. Those will be really well do really well here. Don't bother don't bother learning prompt engineering. AI is adapting faster than you can adapt to the AI. I find that one interesting. I'm not sure how I feel about that comment., every human is now a spellcaster. AI is a

[4:21](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=261s) Magic wand that just got handed to everyone. And I agree with this a little bit, Tommy. I think that's a little bit of a true statement there., no entrepreneur is worried about AI taking their job because being an entrepreneur isn't a job. Any AI that shows up is really just another one of their allies. Okay., and then let's see here. I don't worry about unaligned AI. I worry about unaligned humans with AI. I think that's actually interesting concept there. And then let's see here. looking for the the

[4:53](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=293s) Towards the bottom of the article here. Become the best in the world at what you do. Keep refining what you do until this is true. This still applies in the age of AI. I thought that comment towards the end was actually really good because as MVPs, we spend a lot of time becoming the best at MVP stuff and we like the PowerBI tool and we like educating and learning. That I think resonates with me very well. the means of learning are now abundant. It's the desire to learn that is scarce. I thought that one was

[5:25](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=325s) Another really insightful part. and then the finally he lands on a computer used to be a bicycle for the mind. Now with AI, it's a motorcycle, but you still need someone to ride it. Okay, those are the couple key comments that came out with those. Your reaction, Tommy?

[5:45](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=345s) Mike? I thought I was one of for hot takes. But there there are parts of this I agree. But I I I I don't care for the tone here where it's like, oh no, there's a lot here where he's saying way it's, black or white here, which I don't think is the case. Like for example, he's saying there's, the best Apple 100% of the time. Listen, unless machines are running everything, that's not going to be the case because you still have the politics. You still have to get in. Mike, I could build the best app for whatever the product. First off,

[6:17](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=377s) This whole idea

[6:20](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=380s) Of everything's an app.

[6:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=382s) Finish your idea. I I have

[6:23](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=383s) Yeah. Yeah. Yeah.

[6:24](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=384s) This one particularly, I think I have some words towards, but keep going.

[6:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=386s) Okay. Yeah. So, anyways, this idea that the best app always wins. It's not the case. You still have the politics of people and you still have people. If you still have people, it's not always going to be perfect and it's not always going to be the desired, the best outcome always wins because that's listen, if that was not if that was the case, you and I wouldn't be consultants. So, let me what I think he's alluding to here. So, I think you're taking the read on this one a little bit differently than I'm taking the read on this one. So, let me give you my perspective on this particular comment, right? And I'll read the comment again one more time.

[6:57](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=417s) There is no demand for average. The best app wins 100% of the category. Everyone else gets nothing. What I'm saying here is let's just say I'm going to play out just a a rough little story here, right?

[7:09](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=429s) All right. And I'm seeing a lot of this also on my feed as well. And me personally, I'm also finding this to be very true, right? For my workflow when I do a podcast, there are certain tools that we use that we pull together to help produce the podcast. Trello is part of this.

[7:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=446s) We have loop where we take notes on things. We do that, right? We have Miro maybe taking some ideas down. So all these tools, right, have something that is useful to me in that tool.

[7:40](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=460s) Yeah, with that. Okay.

[7:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=462s) And what he's saying here is if you have an average tool, if someone buys your tool and you only do 80% of what the customer needs, if you only do 50% of what the customer needs, it's very easy for you to go out and say, "I don't like this application. I'm going to vibe code something better that does exactly what I want 100% of every task I need through the entire workflow. So to me what this is saying is any other person. So the magic wand piece right

[8:13](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=493s) Anyone can show up and build anything. Let me give you another example here of this. I think there's

[8:21](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=501s) I think there's a token war coming, Tommy. If you if you access so I have a thesis that I've been really mulling over here for the last couple of weeks, and I think it's actually more true than ever. Technology is a technology is awesome. I like it. I use it. But technology centralizes power. Think about that. Technology only centralizes power. All the messaging you hear from like Microsoft and the big tech companies are use our tools, buy our stuff. Technology is so great. It'll help you be so much more productive. But

[8:52](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=532s) What has to happen is that technology now requires me to go to Microsoft, to Google, to anyone, give them dollars, and in exchange they give me the software, the technology that I need to do my job.

[9:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=546s) So last 30 years, sir.

[9:08](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=548s) Yep. and and it's getting worse and I think AI is going to continue to cons concentrate this right and so the idea is does Anthropic have the spend that I need does does Microsoft have the servers that I want does Google meta whatever other company right I have to pay them to get access to this technology that knows every single coding language every single book has read all the literature has ability to make images like it is the tool that I need to make my team and my company extremely successful So this better technology all it does is

[9:39](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=579s) It just concentrations. So this is something I like I understand it but I'm not sure how to impact it right and so when I look at yeah

[9:54](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=594s) AI distributes this for the first time like yes you still need the AI yes that's still a centralized power here but in this in the advantage Tommy you don't need to know how to write an app anymore you can just say I need an app that does this this this and this and the AI can be really good at getting you a first pass at this and you may be replacing yellow loop content generation, Adobe Express, like there's all these other programs that we use to build things for the podcast. We don't need them anymore. I don't need to pay $5 here, $20 here,

[10:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=626s) $10 there. I can go out and build exactly what I want, which is exactly what he's talking about here is if you have an average product and you don't do everything your customer needs, the barrier for you to leave and go build exactly what you want or go find someone else who's building exactly what you want is almost nothing.

[10:43](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=643s) Okay, counterpoint here. counterpoint.

[10:46](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=646s) In this world that you're talking about of hyperpersonalized apps, which I use all the time and I've built for myself and I know you're doing too, then nobody's making money. And here's the problem here because you and I have talked about this. I know some things you're building. I've built I have like those model managers. We've talked about things for our own process, for our own individual work. This goes back to the idea of micro versus macro in the world of AI. micro or the AI works great with micro with the individual. You can build your hyperpersonalized app. But the

[11:19](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=679s) Problem, Mike, is that's hyperpersonalized to you. Maybe to one or two other people who are also in that same process. But the problem is if everyone gets hyperpersonalized, there's no such thing as enterprise applications or enterprise process. The reason why Microsoft exists is because they've been able to build apps that can be used in an enterprise, right? And this is the problem. All the apps that you may build. They may solve your problems 100%.

[11:50](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=710s) But in the next individual may not be their process. So what they have to build their own application and now everyone has their own individual applications or own individual processes

[12:03](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=723s) Where that doesn't equate. in a business.

[12:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=726s) So what? It doesn't matter. I think I think this is the point of what AI

[12:10](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=730s) Nothing gets scaled. Nothing gets scaled at this point or and more importantly at some point nobody's making money.

[12:16](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=736s) It's not a problem. I don't see. So if you're getting to a place where people need to have the same so moving we're continually moving away from UI and front-end stuff, things that you need to build to use and interact with the app. We're moving more and more towards MCPs and APIs. I thought we were already in the era of APIs like months ago, even more so now. Now everything needs to be scanned for like the bots, the AIs, the the how can I interact it with like a chat something, right? So it the

[12:47](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=767s) Companies that are winning right now are not winning just because they have AI. It's because they're building everything with AI as AI is first in their build process.

[12:57](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=777s) That is like it's helping you create. It's helping you build. It's helping you organize. that's going to be everywhere. To your point, Tommy, the data is still the data. This the process is still the process. There's still how we do business, but the AI is so disruptive. we're having people now I'm in insurance and I've been using chat GPT to write copy for me to help sell something, right? Everyone else is doing what they need to do.

[13:23](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=803s) Yeah. someone on the team is selling inordinately amount more insurance policies than anyone else because they're using AI to help build their language and they're saying these things work, these things didn't. Write more like this. Write more like this. These things didn't work. Get rid of that. Add this. Get So they're constantly refining their process, but they're doing it at hyper fast speed. So the process still exists. The the bigger story will always be there. We're not going to throw away the organization and the plan and and the the bigger step here. What I'm going to say is it's people now solving in

[13:54](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=834s) Their daily jobs highly stylized, highly built things that you have to you can build quickly, right? And so I think what this is really saying is the the the tolerance for having anything that's mediocre, right? You're using let's just say Salesforce,

[14:13](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=853s) And and Salesforce says like, "Oh man, I wish it would do that." Well, if Salesforce doesn't give you the ability to say, here's the core fundamental of my program and oh, by the way, you can bolt on AI to do everything else. Like this is one of my beefs right now with Microsoft Fabric, which is I can go to fabric and I can build lakehouses, I can build tables, I can build all these things, but where is the front-end creation experience that I need to customize to actually make fabric extremely efficient for my team?

[14:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=884s) Really process. So,

[14:45](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=885s) Let me take let me take lovable and bolt that directly onto the fabric data system. Right.

[14:51](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=891s) I'm glad you said this because you're speaking of two things I I was going to mention. One, well, first I would have to ask you are is apps be all end all in the world that we're living in because the the conversation around applications or AI right now, especially this whole vibe coding thing, which to your point, you and I have been talking about this. I talked about years ago when this first came out about the whole ven diagram of BI and AI is going to definitely intersect,

[15:20](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=920s) But it's not all apps. And the thing is, have we solved this with fabric?

[15:25](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=925s) Not even close.

[15:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=926s) I don't even know apps is the thing anymore. I think it's more like there's something there's something new evolving out this Tommy. I don't even want to call it an app anymore because it's more like can I Yes, maybe it's an app, but it's more like can I just describe what I want? Can I can I stub together something that's just there? Yes, it's an app in the fact that, it has like a front end. There's like maybe fields that you enter in. It's going to maybe do something. It's going to represent some information, but there's a back end to it as well where the data gets stored. So, yes, it's it feels like an app, Tommy, but I think when I look at the word app, I think about a

[15:58](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=958s) Development team that has built an app with someone's vision very specifically for a process. I want to think of an app as here's a starting point. Like Lovable is doing a really good job of this. You can build a lovable app that has a front end to it. There's some data being stored on the back side and you can go when you build it and deploy this app. You can say edit with lovable and so it it basically takes you to the application and then you customize it for what you need. So here's the starting part. Here's the starting point of this app.

[16:28](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=988s) And then what happens if you can customize everything you want and I think this is where this article is going for me, right? this article is indicating to me is the barrier to customize and make things that are very niche for exactly what we want is almost gone to nothing with AI.

[16:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1002s) I do want to end here. We're talking a lot about

[16:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1004s) Yeah, because there's actually a good segue here, a really good article

[16:47](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1007s) Here. Let's roll into the next thing.

[16:49](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1009s) Yeah. So, actually speaking off of this there's an article off on the Microsoft blog that they're taking from Matt Schumer who is the CEO of Hyperite and co-founder of other stuff or the PowerBI blog. This is on the blog, but they're mentioning on X, formerly Twitter., there's there's this shockwave, this article that was pretty pretty impactful. In case you haven't read it, it's called something big is happening. It's been viewed over 73 million times. And it basically compares this moment. This is the article I was talking about last week or two weeks

[17:20](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1040s) Ago. I couldn't find.

[17:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1042s) The moment in AI to this period just before the world understood the true scale of COVID, that window where few people saw what was coming, but most haven't caught on yet. And they're equating this to what they're trying to do in fabric because this is again when you think about our lives, our world, the data professional,

[17:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1062s) The data developer, you're like this is all great. Five coding is great. But to your point, we're limited with tools right now in fabric to build. However, I think we're sometimes we miss the point here where we realize that just because we as developers cannot build completely in AI does not mean that what we can do with our clients can be built and ready for AI. And because you think about it, Mike, we can build native vector semantic search. That's a huge thing we need to be think about when we create

[18:13](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1093s) Databases. Like if I'm creating a database or a storage for someone, I have to have AI in mind. I had a conversation yesterday a discovery call and they're like

[18:23](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1103s) Wherever we put our data

[18:24](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1104s) It needs to be AI friendly and that honestly

[18:30](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1110s) Dare I say the primary requirement of our job now

[18:34](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1114s) Outside of rather than a semantic model

[18:37](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1117s) 100% agree with that so

[18:39](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1119s) And so the idea here is what hooks do you have that allow AI to talk to a semantic model and write DAX against it what hooks do you have that allows you to put data in a lakehouse and have an AI talk to those files that are there. What hooks do you have to be to build out a fabric SQL database and hook into that the ability for people to talk to the the SQL database with the AI like build literally build things on top of that. So I'm now actively building multiple apps on all of fabric stuff. Mhm.

[19:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1151s) The app is outside of fabric and I'm building specifically designed apps for customers using the transactional side of fabric and also the sorry the the operational so the OAP and OOLTP I'm transactional side and the operational side of reporting all of that's being built in fabric. So that that is fabric is the fundamental and this is the only thing that I think people are maybe not talking about but AI can build anything but B AI can't make up customer stories can't make up customer data can't make

[19:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1184s) Up customer sales information so the only thing that AIs can't do is how like the actual data of what you're producing how do people interact with what your products and services are something that's purely human and has to be part of your system,

[20:04](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1204s) You have to collect the data. The data is now ultimately way more important now because everyone else can replicate everything else in the software space.

[20:14](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1214s) Here's what frustrates me about this though too because if fabric's trying to be that AI space, it doesn't have all the AI capabilities for our customer. Not again not thinking about me as a developer building using AI but storing the data. SQL Server 2025 does it has rag ready without a separate vector with without without a vector DB it has built-in vector and similarity search existing SQL stills carry forward but the fabric database has trans analytical by design

[20:45](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1245s) Real-time mirroring but it doesn't have the vector search and it doesn't have the similarity so we are missing features and this is stuff we have to be aware of Mike when it comes to the world we're living And oh man, are we really no longer building for semantic models when it comes to if I'm building in fabric? Because I feel like we're getting closer and closer to that. If we are getting to this aha moment, this something big is happening and I need to build my data that way. Like there there's an argument there. I don't know

[21:17](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1277s) If I agree with that, but there's an argument there.

[21:20](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1280s) Yeah, there is. But I'm also going to maybe note here as well like there's a there's a heavy amount of change that's coming through. I think the Microsoft team is very well aware of like where they are in this life cycle of things. I think again if I look at my experiences recently with co-pilot PowerPoint versus claude code work inside PowerPoint night and day different dude night and day difference. It's it's not even comparable this point. So I think heads are rolling at the leadership level of Microsoft to get this stuff worked out and figured out. And I I think finally we're getting the

[21:51](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1311s) Where I feel like we're getting is Microsoft is I think repivoting and focusing on the creator of content more so than the consumer of content, right? I think the more we focus on the creator of content,

[22:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1326s) The better off we'll be. We really need an agentic coding space area for building visuals and stuff like that. That's that's got to happen. I this

[22:16](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1336s) We are so far down this path that like this has got to be a thing. Like I'll be honest, Vega and Vega and Vega Light are great standards and AI agents know them really well and there's lots of examples and you can build a ton of really cool stuff by talking to an agent with in concert with what you're doing in Vega and Vegaite. So stay tuned community. You're going to see something come out for in preview from Mike pretty soon around Vega and Vega Light and the ability to vibe code your own visuals. Like I'm I'm building it now

[22:47](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1367s) And again I have no tolerance for any half-hearted product. Like the fact that I have to click buttons on a visual in a PowerB report is almost like I'm looking at this article and saying, "Yeah, that's that's not that's that's average for me, right? I don't want it to do that. I have a better vision of how I want to make vehicles now."

[23:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1386s) All right. I'm on the edge of my seat. I'm on the edge of my seat. Now, it's funny because you and I I think we're I'm glad you and I not differ, but we see this differently. I go back to like one of our first episodes. I think it was like episode nine and it was basically what does a BI developer look like in two years. You are taking this when you look at AI from the lens of the developer, the individual building in fabric. How does that process with AI look better for me and how is that a better experience for me? All the things

[23:37](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1417s) You've been building and focusing on are that developers experience with AI, which is awesome, but I'm looking at this, Mike, and I'm seeing this as what is the developer doing for companies with AI? And I think both of them are valid and important. It's just funny because I feel like every time you and I are talking about AI, you and I always take that differing opinion. They don't conflict. They're not a they're not in conflict with one another. It's just they are two different lenses on this

[24:08](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1448s) Where I think there needs to be a better experience for the data professional to build using AI.

[24:16](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1456s) But in the same fashion, what output am I creating with data? And I think that's just as important because there's going to be so much on how am I building in a way for organizations whether it's a report a semantic model or a d a vector database that's going to be for the organization. So it's funny because you and I are taking I feel like different tracks on this which is great one it makes the podcast more entertaining and they don't conflict., but I think I find that interesting that you and I are every

[24:49](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1489s) Time something with AI comes up, you always take that lens and I'm always going, okay, but what does what's the output like? What's the product that I'm going to be creating here?

[24:59](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1499s) So, it is interesting here when we look at them. So, I know we've hit that a bunch., there's one more news item. We'll just give some love to data flows and then let's get into our topic. So,

[25:09](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1509s) Hey data flows gen two Mike. This is a new article. It's called recent data. Get your data faster. Get back your data faster in fabric

[25:19](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1519s) Preview. So add that to your preview list, Mike.

[25:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1522s) So the recent data, what this is? If you're in PowerBI and you've connected to a source and you want to go to the recent data, cool.

[25:31](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1531s) Now the difference here is the new recent data module goes beyond tracking recent connections, which is what we're used to. It actually remembers specific items you worked with, including the tables, files, folders, databases, and even the sheets, which is a big difference, rather than just simply the data source. So, you can jump back into the exact data that you need without navigating through the folder structures.

[25:57](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1557s) And this is available in the Power Query ribbon inside an existing data flow or the modern get data experience. I like that a lot. And again it supports browsing the source location so you can pull up the related items. And again it's this is a data flow only at this point. This is not PowerBI desktop. So they are looking at this and again this is coming from the fabric data factory ideas which is where someone asked for this. So nice that they're still looking at this.

[26:27](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1587s) A little love. So a little love for dataf flows gen two here. I the more we can make this easier for people to use the better people will like this one.

[26:37](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1597s) So anytime you're talking about getting your data in faster working with data flows gen two

[26:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1602s) It is not the most cost effective version of writing code or building things is loading data but I have to also argue like the lion share of probably what people have been building or have found valuable has been coming from the PowerBI world. So, if you're trying to bring in the PowerBI world into more of a fabric world, you're going to have to have stuff like this. Like, this is going to have to be easier and onboarding is going to have to be simple and and create these things. Now, I would also maybe argue here again, I'm going to go back to my AI space.

[27:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1631s) I was going to do it, too.

[27:14](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1634s) I I understand this is great, right? This is all UI driven, but where's the where is the Power Query agentic space? Where where is the just tell me what I want. Hey, look. I've got this Excel file. Go look at the Excel file. Pull in this this this and this. Right. That should be really straightforward. And it should be able to build multiple flows or tables inside Power Query. Extremely to look, let's let's be honest here, Tommy. Like where when you're in Power Query, what are you spending a lot of

[27:45](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1665s) Your time on?

[27:47](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1667s) Okay. It's it's the mundane setup of stuff like, hey, I know I need to use a parameter to get multiple I'm going to connect to multiple tables with the same source. I'm going to have, it's a it's a SQL database and I'm bringing in a lot of tables. I want to set up a parameter to set up all these things. And right now, I have to go through each individual item and say, okay, load this table. Okay, that's not what I want. I don't want a hard-coded, endpoint here. I have to go through each table and connection and update it or go take out the M code and do something over there or export the entire template. Where's the agent

[28:19](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1699s) Experience in this? Where where's the AI to help me with this thing? Time out, man. Time out. I agree with you. However, this goes back to the idea this whole 100% the best app wins or the best process. Mike, according to whom? Because this is phenomenal for new users. Not everyone is going to want the same experience. So when you say I want the best app or the best experience to who right so is it I can code the best I can have the best user interface right

[28:50](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1730s) So everyone's going to have their own different experience here is it only cost then we shouldn't be using this at all right then we should not be working at all on the data flows at all doing anything agentic with it if it's only a cost thing but it's not there are so many other factors here Mike I know what you're saying I know I would love to go to data flows. Heck, I can do this with cloud and they just copy and paste the query. But to say, what, I'm trying to do this. Translate this. Cool. Here's my query.

[29:21](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1761s) But what? That's not everyone's situation right now. That's not the best case, the 100% best app or process for every person. And we I think we have to be very conscious of this. Mike, I need you to take yourself out of nerd, agentic land of I am you're you are swimming in the deep end of you're doing backstrokes. You're

[29:49](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1789s) I'm swimming in the deep end because the what

[29:53](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1793s) People keep saying it's AI is not is going to do things that are going to shift how fundamentally I'm already seeing it. I'm already seeing it with my developers. I'm already seeing with everything I'm doing and it's not about the story here is the creator of things, the creator of what you want to build. That's that is the hook. That's the change that is actually shifting everything right now. And so it doesn't matter what experience you're in. Power Query, SQL,,, notebooks, Fab, Python, everything I'm touching now becomes better when I can just talk to

[30:25](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1825s) The thing and say, I want you to do this. Now, if I, if I go to Power Query and say in Power Query, I want you to make a parameter, load these tables using said parameter into into Power Query, right? I can I should be able to have it start that step. And it should take me something that normally would have taken 30 minutes to an hour to do. It should compress it down to I just tell it what I want. And I think there's nothing more universally acceptable than just talking to something and having it give you the results that you need or

[30:58](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1858s) Recommending things. So to me there's this gap between even in even in dataf flows gen 2 there's this gap between what is best practices in dataf flows gen 2 versus what I know as a developer or builder of things. a builder just to say a builder not even a developer at this point because anyone can build now. So to me the barrier has just gone down to to the very smallest amount. I know what I want to do with my data. I know I need to get into fabric. I should be able to say make this happen and then it should just go and Microsoft should be really talking about what is are the users needing to ask for? What are

[31:29](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1889s) Common tasks there? Because that is really where I think you're going to gain a lot of efficiency. I have so many other things to say. I'm going to save it for an episode. I'm going to put this as a topic on our backlog because I feel we can we can completely take over this. This is a great convers great conversation.

[31:49](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1909s) Yeah. So, I'm gonna I'm going to shelf that. I'm going to put that in the parking lot because I think other people would like to hear that conversation. Let me just say this and then we'll move on. All I see is you in a swimming pool just water spinning out doing the backstrokes and just aging.

[32:04](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1924s) No, it's just not even water. just like little ones and zeros and just spinning out little ones and zeros everywhere.

[32:08](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1928s) Right. All right. So, let's get to the topic because I this was great conversation and I'm glad you brought that up too because this was this is very good. we got a mailbag again. We're going to say it's mailbag mania here and let's dive in. Bridging the gap for live connection consumers following the calculation group episode which when did we do that? and a follow-up post I sent. There's one thing I forgot to mention. Tommy was heavily using field parameters. Oh, this was a while ago.

[32:39](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1959s) But this is a limitation if the semantic model is going to be the source of our favorite BI tool Excel. All my models have several PE field parameters as well. And this is even hugen Hagen I'm going to say here. So we're going to dive right in Mike where not all the features in PowerBI work for all the in a sense solutions. This goes back to right off the bat Mike this goes back to a conversation on

[33:10](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=1990s) Semantic models are not the beall endall or reports are not the end of the road when it comes to our process and when it comes to the product that we're creating. And I'm more and more like thinking about everything we do in fabric as a product. Whether it's a lakehouse or a model or a database, it is a product. And field parameters for those who may not know is really the ability to circumvent calculation groups where you can basically have a slice or a drop down to say, what, I

[33:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2022s) Want to see metric A and everything can update very si behaves similarly to calculation groups. It allows the user interface to do that. Or you can do this based on metrics, measures or dimensions. Dynamically change visuals on a page based on a slicer. Very powerful, very very featurerich and something that I have implemented for clients. Not 100% all the time, but definitely when the need arises, it has been very impactful. But to Elvin's point here,

[34:15](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2055s) Well, no use case here in Excel

[34:19](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2059s) Does not really translate and I think this brings up a bigger conversation too, Mike, where there's a lot of things we can do in the report

[34:27](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2067s) Does not translate to the semantic model. So I think it starts off here, how conscious should we be of when we build a semantic model of the Excel user?, I think this is really this is going to really look at what your users are trying to do with the report, right? That's that's where I'm going to go with this initially. Where are your what is your audience look like?

[34:49](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2089s) Identify that first and foremost. And then let me I want to have a I know what you're going at here, Tommy. I'm going to I'm going to let you get there. I want to answer more of your question.

[34:57](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2097s) Yeah. But but I also want to ask you right now directly like

[35:01](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2101s) Right now when you build a report or you're building reports for people or models for people,

[35:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2106s) How often are you trying to incorporate field parameters into your report builds?

[35:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2111s) Oh, like today like the last three weeks

[35:15](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2115s) If if honestly if the need or request arises. So I think a better way for me to answer that question is in the normal process of building a report I have my checklist. It's not part of the checklist or the primary checklist. It's very more on a situation by situation basis.

[35:31](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2131s) Great. And that's exactly I didn't even have to tell you to answer it that way. That's exactly my point. So I think field parameters are a solution to a very particular problem. And I think the particular problem exists only inside PowerBI reports. the concept of being able to have this selection slicer pick what fields you want and therefore it changes the data that's actually represented on other parts of your right

[35:58](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2158s) Model or your calculations or the field parameters that are there. I think this is a very PowerBI report centric solution for building reports, right? I want this report. I had a very specific need. I don't want to select and I got them I shared the link here to SQLBI's article which is phenomenal explaining like what they are but I don't want brand and category. I want brand and color or I want category and continent or I want country and continent. Right? this this ability to pivot through data and have different results shown. The calculations are

[36:30](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2190s) Still the same. Sum of sales, sum of units, whatever, but I'm then changing out the different columns as needed. Right? That to me that is a very PowerBI report specific problem we're trying to solve. And so the my challenge to this is when you go back to Excel, we're doing things differently. It doesn't need that same level of like context switching. And if you do need it, you can actually just handle the same experience by building something different in Excel. You're

[37:02](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2222s) Building different stuff.

[37:04](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2224s) Two two big thoughts there. I like where you're going with this. I'm frustrated, Mike. I'm frustrated because

[37:12](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2232s) If you had AI all this like months ago. I'm just saying.

[37:14](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2234s) All right. Okay.

[37:15](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2235s) All right. All right.

[37:16](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2236s) Okay. All right. Listen, why do anything? Why should we even do the podcast at this point? Just let AI run with it. So, it has enough transcripts. I'm sure it can do our voices. I digress. I'm frustrated, Mike, because when the old parameters came out, I I thought that it was the game changer. I thought this was going to be 95% of my reports were going to have this.

[37:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2262s) And I felt the need for it. I definitely felt the need for it. That hasn't been the case. I think there there's reasons for that. Part of it I think is for users. Is it as intuitive as you would want? I don't know what else you would do, but I think users like to know what they're looking at. for someone who's look turning the widgets that I like to say in reports, great feature, but a lot of reports again, you're trying to see a specific thing. With that being said, the other part of this too, Mike, is

[38:14](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2294s) Field parameters, if not a universally universally accepted thing, and and I would argue too that most people who are listening to the podcast,

[38:24](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2304s) They use them, but I bet it's less than 20%.

[38:28](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2308s) Yeah, very very few. But it's also it's also solving a very specific problem. Like, so I think this is a this is a solution to a very specific problem. And I think Wagner is bringing up some really good points here in the chat, which I want to call out. Chris, you're doing a great job of like really leading the conversation here, but you're but you're saying some things like the question should be I'm saying this as well in chat but like the question is who's your audience? How are they trying to consume this? Right? If you're only building reports PowerBI reports and you're only going to let anyone consume that report using this feature, then great field

[38:59](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2339s) Parameters are acceptable be part of the model. If you want to take that same exact semantic model and give it to Excel users, this is one of those trade-offs you're gonna have to be mindful of. This just won't work. And so if again the the lens is what is your user going to be looking for? Are they looking for the same exact experience that you have inside the report which is built with a field parameter and then go over to Excel and see the exact same thing? If that's what you're looking for, field parameters isn't the best

[39:30](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2370s) Solution for you. So, you asked me a pointed question. Let me do the same and return that favor to you.

[39:38](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2378s) Here we go. The volley's coming back to me now. All right.

[39:40](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2380s) The volley's coming back, my friend, with a vengeance.

[39:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2384s) With your clients, not only how much are you training them on semantic models in Excel, but how much do they're actually using that in their daily or weekly workflow?

[39:57](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2397s) It's increasing. The surface area of this is increasing. I think it's gaining momentum right this is a I'm and it's also potentially the work that you're working in Tommy right so if you're working on teams that are like we're going to do everything in PowerBI and that's only the thing that we're going to share through yes I've recently been doing a lot of work with like financial and finance teams and so there's no pulling away Excel from their hands like they will

[40:23](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2423s) They will be buried with their Excel sheets in hand when they're done their career because there's that that's how that's how they think about data that's how they look at things. So we definitely have to have that as part of that that feature set. So what's find what I'm finding is interesting now is the traditional pattern has been go to SSRS go build an export of data export or have that data sent to you in the morning pick up said data with the tables and then go to Excel and then do the data crunching right so what we're able to do now is slightly shift that

[40:54](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2454s) And where I think the advantage is coming in is we're now using analyze in Excel a lot more because that allows me to put the model into people's hands and the underrated feature here which I think Tommy is really interesting. When you build the semantic model, you can expose tables of data that are enterprise or organizational tables. When I show people this and show them that you can build a semantic model, push it to the service and that table just appears in the little

[41:25](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2485s) Organizational data dropown menu as data.

[41:30](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2490s) People are like what what is this? Like so there there's I think there needs to be more of that emphasis. I I think the idea of make it as frictionless as possible to push not just connect to the semantic model and say here's your Excel document like that's a little bit it's not too much friction but there's some friction there but the the other side of this is how quickly can we get useful information into those Excel sheets and I think one of them is pushing that data to every user in a little UI that says here's all the

[42:03](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2523s) Tables that you have access to from semantic models here's what you can go build. Another one I think is a big miss here, Tommy, is when you go into Excel and you get these tables from semantic models. Where's the model diagram? Where's the definition of measures? How do I extend this experience a little bit? So, to me, that's what I'd like to see. I'd like to see like almost like a custom widget., let's I'm I'm going to throw shots here. Tommy, you

[42:32](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2552s) Got to build this.

[42:32](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2552s) I'm I'm going to throw shots here. Okay. Right here. Here it comes. I'm going to announce here., anthropic, would you please add another extension to Excel that lets me go to see my semantic model and the relationships and all of the semantic model diagrams directly inside Excel? Could you could you go build that for me?

[42:50](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2570s) He's not calling Microsoft here.

[42:52](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2572s) Whoa. I'm just saying I'm throwing shots. So, I think they have crushed it in building extensions for Excel already with being able to make Excel file and make manipulating things. I am really excited about this and also to this point Tommy Anthropic and particularly Claude code is doing some incredible things when it comes to coding languages disrupting technology. I think someone just announced there's like an accelerator where I think Anthropic just did a we can now program in Cobalt now. Cobalt

[43:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2606s) Runs the entire like airline industry and the banking industry and there's a whole bunch of developers that are retiring that can't write Cobalt. Well, now we don't need to worry about it. I can just show up and just say here's here's an AI that knows every single thing around Cobalt. You just tell it what you want it to do. It'll go debug it.

[43:46](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2626s) Excel on field parameters. Excel and field parameters.

[43:49](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2629s) Well, I'm just saying this.

[43:50](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2630s) Yeah. Yeah. Yeah. Yeah.

[43:51](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2631s) Bring that same analogy over to what we're doing in Excel, right? bring that same analysis. It's saying, "Okay, where's where's the

[43:58](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2638s) Extensions? Where's the We can This is my point, Tommy. Maybe I'll have to go vibe code one. I'll probably have to go I'll have one by next podcast. I'm going to go give my bot a task and say, "Hey, I need you to go build an Excel plugin that when I connect to a semantic model will show me the diagram of the ex of the model in addition to all the measures in it. And then when I build my pivot table, I can just select things from it and just have it work." Like, I don't know, Tommy. Okay,

[44:24](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2664s) This could be a thing.

[44:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2666s) As of today, we don't have that. So,

[44:29](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2669s) True, but I may have to prove to you I can build it in a couple days.

[44:33](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2673s) I don't I don't doubt you can do it. I I listen, we can vive code race that if you want, but the fact is as of right now of recording, as of recording right now, that ain't here. And by the way, just a quick side note, what other podcast are you going to hear about Agentic Data Flows and SSRS? Nowhere. Yeah, the only place you're going to find that. But Mike, I think there's still a question though with the field even with the field parameters. Let's say you do create a lot with field parameters and I would bet who

[45:04](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2704s) Bernard Aguello, right? He's a huge calculation group. or not

[45:10](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2710s) He he's some amazing things in calculation

[45:12](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2712s) And we know enterprise organizations are using these I don't want to call them niche tooling of semantic models but the things that are not your standards let's say because I I would I think it would be you and I would both agree that field parameters calculation groups are not a standard report that has the you very particular use cases am I building semantic models now for powerbi or am I building semantic models for all the other applications that can be designed. And I think that goes both with Excel and even AI and even semantic

[45:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2744s) Link labs. I think that's to me I'm looking at the question here and I think that's the bigger the bigger conversation the bigger dial discussion here.

[45:56](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2756s) This is great. What I think you're touching on is and again I'm going to just also I'm going to I'm going to throw my understanding of this Tommy what you're describing. You're describing organizational patterning, right?

[46:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2771s) Yeah. Yeah.

[46:12](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2772s) Very generic terms here because

[46:16](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2776s) What we really want what I think we really want here is we want the entire example of every piece of data we've ever built into a single semantic model. Now, I don't want the data loaded to the semantic model.

[46:30](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2790s) What I want is I want the ability to have

[46:33](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2793s) Every table related to every table. Right? Hold on, hold on. You said I don't want the data loaded to the semantic model.

[46:40](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2800s) Hold on. Let me finish the idea.

[46:41](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2801s) Yeah. Yeah. Yeah. Yeah. I just want to make sure.

[46:43](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2803s) So, this is like the data. This is like the data catalog for things, right? So, this is the enterprise data estate, right? This is there's a lot of, lakehouse, whatever you want to call there's there's a lake estate of everything that we're working on as an organization. Think about this. I need to know the metadata of every table, every semantic model, every measure. As an organization, this is common to your point, Tommy, right? Where do we use field parameters? How do they leverage? Do we do we need them in this model or that model? Like fine, we have tables, we have relationships. This

[47:14](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2834s) Table is now being produced here and that has a relationship to this fact table or this dimension or whatever the whatever the things are, right? We need the ability to say here's all of the tables and data. And this is what an ontology is supposed to do. Describe your business in these ways. Now the interesting thing I find here is from an ontology of your organization how data comes in what data where does it come from what system does it originate in how do you join it together with other systems right so all these like business rules of us bringing this data estate together

[47:45](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2865s) Ultimately what I think we want is I don't really want to build a semantic model I want to have someone come into a central place describe everything we need and then pluck out hey Tommy we're going to work on social media data for our organization. It's not sales data per per se, but it's like all these other random feeds. And what I can say is grab this fact table out of all the real metrics of our data. And then by default, the system should say, "Oh,

[48:15](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2895s) I see from that fact table, you have these measures. We can automatically bring them in. Here's all the dimensions that may or may not touch that table. You want me to bring them in or not?" And so here is where I want to on the fly build an entire semantic model based on definitions of how my company works with its data. Like that's what we're doing, but right now we're all doing this like oneoff of semantic model, a collection of semantic models. Oh, I have to bring more tables to the lakehouse. We're not really defining how they're related to everything else. So I

[48:46](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2926s) There's this idea of the creators experience that can be so much more enriched if we just have this larger pile of what our data what are what data uses is used to run our business. bit of a carriage before the horse here my friend that you're speaking about and because Mike

[49:08](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2948s) We have to remember when we talk about all the AI stuff that we want the data is already there like you're talking about billions and billions of records and parts of points of data and

[49:21](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2961s) Model doesn't yeah but an organization does not want have the volume of data nor has it been trained or structured yet to work with him and this so Marco Russo right Marco Russo is the first to say that the semantic model is the best version or structure for AI to work right

[49:43](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2983s) I said does not disagree with that in any way all I'm saying

[49:46](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2986s) Someone has to build it

[49:48](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=2988s) Yes and that's what I'm also saying that's what needs to be built at the companywide central organizational level we should be focusing on these are all the tables and all the lakeouses if you high up, right? I've got 30 lakeous across a couple different teams. We're building all this data. We're bringing everything in. All of those tables are just storage of data and things that we need. Why can't I from that list of tables and related relationships and or measures that we're building, why can't I select I want this

[50:19](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3019s) Table from this model from this lakehouse and say find me all related tables that match or would be useful to that thing. And then I pick what measures I want, what I'm trying to calculate, what dimensions are needed or not. And all of that just auto. So I'm not saying away the semantic model.

[50:37](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3037s) Yeah. This is all fodder for the semantic model.

[50:41](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3041s) At this point in time, you mentioned this about the field parameters in Excel. If you choose to do field parameters, you are sacrificing use cases in Excel.

[50:53](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3053s) But you're saying the same thing to me when it comes to building a semantic model in that fashion. that like that should be something allowed to like hey here's a model or here's here's the definition here's the the schema of what the field would do

[51:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3066s) The problem

[51:07](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3067s) Do I do I pull it along for the ride or do I just say no

[51:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3071s) Now in your

[51:12](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3072s) There's no reason why I can't have the exact same two models pointing at the exact same tables of data one having field parameters and one not there's no reason

[51:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3082s) No yeah there's no reason but I don't think there's a good reason to because you Here's the problem with what you're saying to me. You're building this giant, at least what I'm hearing, and I may be hearing this wrong. We're building a very large semantic model that's all-encompassing. And the problem is that's not going to work well with PowerBI, right? And so like that goes against the very workflow that we've done with PowerBI up until this point. And maybe you're right. Maybe that is going to be the preferred way. But for the last 10

[51:55](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3115s) Years, we have built semantic models in a certain fashion. And that that leeway of flexibility of what we've been able to do is not too wide because whether you're enterprise, managed self-service, or midsize company.

[52:13](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3133s) We're not bloating the models. We're not putting all the tables in a single one then picking and choosing one. the infrastructure is not there and two we've always built for PowerBI reports.

[52:24](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3144s) That's always been the be all end all.

[52:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3146s) And you're if we're going to build everything all

[52:29](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3149s) Do that like

[52:31](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3151s) So we're saying that we're not that is we're moving away from that. Is that is that what I'm hearing?

[52:36](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3156s) No, I'm saying that's one of many ways we're now starting to build reports for. So

[52:40](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3160s) Okay. So what's the primary way?

[52:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3162s) Me person me personally right now it's going it's we're starting to evolve. It's still primary power bay reports is what you're building semantic models for. But now with co-pilot on home you're now building semantic models like is your model AI ready? There's a whole there's a whole series of blogs and people trying to figure out how do you make model AI ready now. So now we're building semantic models not just for the report. We're building semantic models for the reports AI Excel page report building. Right. So there's more the the semantic.

[53:13](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3193s) Don't bring that up. It is. Regardless, you're going to need to export data and people are not going to want pretty pictures and pretty graphics all the time. People are going to want tables of data. And when you hand data to external customers or people that you're giving data to, you're not going to give them a pretty report every single time. They just sometimes want the data. So, what's happening is more and more of our organization is saying, look, if you look on on if you if you look at the semantic model, the semantic model is the lynch pin. It's the keystone to everything we're building. On one side

[53:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3224s) Of the archway, we're building all the fabric, spark, data warehousing, storage, lakehouse, everything on that side is supporting the lefthand side. The right hand side is PowerBI reports, semantic models, AI generated queries, DAX queries, SQL queries, all the other things on the other side of the but all of that the lynch pin, the keystone is the semantic model. You have to describe and every single tool is doing it. You don't give you cannot give me a tool that doesn't

[54:16](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3256s) Have some level of semantic model stuck in the middle and it's a semantics layer. It's data bricks with metrics views and it's snowflake building their own version of a semantic model. Okay,

[54:27](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3267s) PowerBI and Microsoft just came out with it first and has been using it just much longer. So with that in mind starting to build this

[54:35](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3275s) With that in mind, where does Excel fit into the picture? Because to me, more part of the other side of the archway. again, it still hangs off of the semantic model.

[54:47](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3287s) Is not the Okay, well, this is another question then. Is not the preferred design for a report also the preferred design for Excel, right? Would would you agree with that?

[54:58](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3298s) Totally two different things.

[54:59](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3299s) So, you would build two separate semantic models. One for people analyzing in Excel or using the Excel module and one for report building. depends on what you need in the report side. So I would what I would prefer is I would simplify the PowerBI report side enough to get it down to a place where I could only use a simplified semantic model. Again, if you're if you're trying to go for high usage on a semantic model and you want large distribution for it, the more you customize it for like things like field parameters, the less availability you have of those people

[55:31](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3331s) Applying to other tools, period.

[55:34](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3334s) Like I don't hear anyone using field parameters in pageionate reports. you're not going to probably use it in an AI thing.

[55:41](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3341s) Parameters are pretty important in

[55:44](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3344s) Field parameters. It's not built anything there for you with that. You're not going to use that there. So, it's it's that is a pure PowerBI report thing. So, this would also be an argument to say if you're building field parameter like things, maybe that should only live in the thin report. The core of your semantic model should be fundamentals, measures, relationships, fact tables, and dimensions. Like that's your fundamentals. when you start going to field parameters, that's something that now I'm going to say that feels more like a thin report that has field parameters built into it now or a direct

[56:15](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3375s) Connection analysis services

[56:20](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3380s) Becomes a composite model at that point, does it not?

[56:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3382s) Composite model now. So there's all these other things that are going on here. I think, I'm probably going to shy away more from using field parameters in lie of if I add them and I give someone an experience around that report, I'm going to shortcut myself away from being able to use all these other tools that still need to hang off the semantic model. And so I would also maybe argue too, Tommy, right, we have tools now that can do diffs between models. the the barrier that we need to be able to maintain a model that has

[56:54](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3414s) Field parameters and a model that does not have it. I I would argue PBIP, TimL, PBIR format, all of that makes it way easier for me to like leverage the same model twice. The downside means you've got to make sure you have the same source tables for both. And so

[57:14](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3434s) But then you also run into the problem though too Mike of measure dependencies or really measure replication right so you can do that

[57:22](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3442s) But then we run into the same issue but everything

[57:24](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3444s) That's what I'm saying

[57:26](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3446s) When I go I'm going back to my bigger plan of like the ontology of all my data across my company if you have that

[57:33](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3453s) Every every copy semantic model is only a representation of the original thing like the the PowerBI ecosystem already has all the stuff that we need it's already got lineage lineage tag ids for every single measure. So you build a central version of this that has a single lineage tag and every time you change that item the lineage tag updates or stays the same depending on what your business logic is.

[57:56](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3476s) Oh lot of other stuff there

[57:58](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3478s) And so I think for me a lot of that stuff just gets happens by default. This is a great discussion and I was thinking that we were going to go down like the enterprise ontology mapping of my data with field parameters. But it does. It does. It absolutely does. And my last thoughts here is I think I'm very conscious about building field parameters. We're getting to the point now where you have to make a choice whether you're actually going to build them at all.

[58:28](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3508s) Right. And I think where where are we going with this? We're are we at the point right now where our semantic models have another primary case in report creation? Not today. But I think we're getting there. We are that movement is happening. And I think you need to start considering that. But most organizations, they're behind and it's only because they're behind. Every organization is behind the technology. But that does not mean you need to start planning that way. And that's where I'm thinking. Mike,

[58:55](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3535s) Let me post

[58:56](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3536s) That's my closing thought. Yeah.

[58:57](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3537s) Let me pose another question there to you. The question is is the effort to learn and build and maintain because maintain a big part of this too. Effort build maintain

[59:08](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3548s) A field parameter is that more effort than just getting the semantic model with AI to rebuild what you want like

[59:17](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3557s) I would disagree not I would say field parameters are pretty straightforward. Calculation groups are one thing but it's easier it's easier for I'm going to 100% disagree with you on this one. A field parameter switches out data parts on a table so you can select it and switch it.

[59:34](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3574s) It's a switcher. It's a lot of technology to build that thing. You got to understand how it works. If SQLBI is written about it, it's going to be

[59:41](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3581s) There's there's stuff to it. You got to understand how it works, right? So, it's not it's not as simple as sum of column drop on page, right? Which is what I think a lot of people are still getting their head around what DAX can do and how to leverage it. So, that being said, I'd argue the AI is going to know how to build stuff way faster. And so, it's easier for me to communicate to the the visual and say, "Don't build this visual with country." And going back to like the the SQLBI article, right?

[1:00:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3611s) Don't build this table with brand and category. Just rebuild the table with color and continent,

[1:00:17](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3617s) Right? It's easier for me to just say that to the model than have to understand the calculation group than to understand the slicer than to understand how to wire everything together and to say what's blocking what's not blocking. There's there's just a lot of things that maybe cause friction that if I just say AI just go build it. And this is my point. If the cost to build the new visual is dropping down to almost zero effort, then all these extra little bells and whistle features that we've been building into PowerBI desktop because we didn't have AI to do it for us go away.

[1:00:48](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3648s) You don't need it. You can you can you can brute force a lot more things because the AI is good at brute forcing things faster than you can even think about them. Like that that's where we're at on things. So

[1:01:01](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3661s) That's really good.

[1:01:02](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3662s) Really interesting thoughts here., sorry for all the AI talk at the beginning.

[1:01:06](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3666s) No, it was good.

[1:01:07](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3667s) It it's going to continue to happen, guys. I'm sorry on Thank you for listening to the to the podcast, but this is so revolutionary. Things are changing so fast right now in the AI space. You have to be paying attention to this stuff because it will fundamentally shift what you can do, how you can work on things, and how fast you can get stuff delivered. I It's It's

[1:01:28](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3688s) Already happening for me

[1:01:29](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3689s) 100%. And I honestly with that in mind, you're seeing this too. Whether you're going to use AI, your organization's going to. So, how are you thinking that way no matter what? So, dude, I love it. I love it.

[1:01:40](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3700s) Great conversation. Thank you all very much for pay for hanging out and talking with us today. We thank you very much for the chat. Chat has been very lively., thank you very much, Chris Wagner. Thank you very much for the donation. I saw that earlier today. So, thank you. Got to shout you out very much. We appreciate that for supporting the channel. We really do appreciate that as well., for anyone else who wants to get involved, we are coming into March. Tommy and I will be traveling a lot. So, FYI, you will see a lot more videos being pre-recorded and released early., if you want to become a member of our channel, become a member

[1:02:11](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3731s) Of our channel and you can get our videos as soon as they are released, as soon as we build and publish them., they will be on our YouTube channel for members only. And if you are not wanting to do that, that's totally okay. They will come out live after the fact and they will only exist on the day that they're actually released. So, if you want early content, March is going to have a ton of it coming out. You may want to check out our our membership area if you'd like to see our content as we build it. You'll actually get for for the next couple weeks. If you if you subscribe, you'll actually be getting four episodes a week if you'd like for the couple weeks because

[1:02:42](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3762s) Pretty good.

[1:02:43](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3763s) We're going to be cranking out a lot of stuff here for recorded recordings and such. All right, that being said, thank you all so much. We really appreciate your time. Tommy, where else can you find the podcast? You

[1:02:51](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3771s) Find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/mpodcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central. Join the conversation all PowerBI tips social media channels. Thank you all so much. We appreciate you. We'll see you next time. High Tommy and Mike lighting up the sky.

[1:03:23](https://www.youtube.com/watch?v=8Y7hEhcNvvg&t=3803s) Dance to the day to laugh in the mix. Fabric and A. I get your fix. Explicit measures. Drop the beat now. H feel the crowd. Explicit measures.

## Thank You

Thanks for tuning into Explicit Measures Episode 505! Catch us live Tuesdays and Thursdays at 7:30 AM Central on YouTube and LinkedIn.

Got questions or topic ideas? Submit at [powerbi.tips/empodcast](https://powerbi.tips/empodcast).

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or your favorite platform. Join our membership for early access and bonus content—March is packed with pre-recorded episodes!