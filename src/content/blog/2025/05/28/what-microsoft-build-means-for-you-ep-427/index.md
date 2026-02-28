---
title: "What Microsoft Build Means For You – Ep. 427"
date: "2025-05-28"
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
  - "Microsoft Build"
  - "Copilot"
  - "Open Mirroring"
  - "SQL Database"
  - "Data Warehouse"
  - "AI"
excerpt: "Mike and Tommy unpack Microsoft Build 2025 announcements through a practical lens — from open mirroring and SQL database tooling to the new standalone Copilot for Power BI. The main topic: a role-play exercise on how you'd actually roll out Copilot standalone in your organization."
featuredImage: "./assets/featured.png"
---

Mike and Tommy unpack Microsoft Build 2025 announcements through a practical lens — from open mirroring and SQL database tooling to the new standalone Copilot for Power BI. The main topic: a role-play exercise on how you'd actually roll out Copilot standalone in your organization.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/MPSPMj70fMg" 
  title="What Microsoft Build Means For You - Ep. 427"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

### Open Mirroring Explained for Microsoft Fabric

Tommy kicks off the news with a breakdown of open mirroring versus standard mirroring in Fabric. Standard mirroring uses built-in connectors to replicate from sources like SQL Server or Azure PostgreSQL. Open mirroring is a flexible approach that allows any application to write change data into Fabric — even an Excel file. Microsoft provides one terabyte of free mirroring storage, which goes a long way for smaller database replications.

Mike raises a key concern around **delete handling** in open mirroring. While inserts and updates are straightforward (mirroring identifies changed records by key values and applies them), deletes are less clear. How does the system know a record has been removed from the source? Mike suggests soft deletes as one pattern but notes the documentation doesn't clearly address purging or hard deletes. This is a data governance and compliance consideration that teams need to test before rolling out to production.

The hosts also note differences in how mirroring behaves across data sources — SQL Database mirroring physically copies data to the lakehouse, while Databricks catalog mirroring functions more like an elaborate shortcut.

- [Open Mirroring Explained for Microsoft Fabric](https://blog.fabric.microsoft.com/blog/open-mirroring-explained-for-microsoft-fabric?ft=All&WT.mc_id=DP-MVP-5002621) — Microsoft's breakdown of when to use standard mirroring versus open mirroring, with guidance on supported scenarios and architecture patterns.

### Database Development Tools for SQL Database in Fabric

Tommy highlights four major tooling updates for Fabric SQL databases: source control integration, Microsoft SQL build projects, VS Code development updates, and a roadmap that includes deployment pipelines, REST API, and CI/CD Python module integration.

Mike shares his evolving perspective on Fabric SQL databases. He was initially skeptical — "I have a lakehouse, I have a data warehouse, why do I care?" — but the **pay-per-use model** changed his thinking. Unlike traditional SQL Server that sits running and consuming costs 24/7, Fabric SQL only charges when queries execute. This makes it practical for transactional apps, staging areas, and small-to-medium datasets. Tommy adds that pointing a Power App at a Fabric database was seamless, calling it a "mini game changer."

The caveat: the article is written squarely for DBAs, packed with acronyms like CI/CD, SQL projects, and DACPAC. For newcomers wanting to get started with SQL in Fabric, the onboarding story still needs work.

- [Updates to Database Development Tools for SQL Database in Microsoft Fabric](https://blog.fabric.microsoft.com/blog/updates-to-database-development-tools-for-sql-database-in-microsoft-fabric?ft=All&WT.mc_id=DP-MVP-5002621) — Details on source control, VS Code integration, SQL build projects, and the roadmap for Fabric SQL database tooling.

### Intelligent Data Cleanup — Smart Purging for Warehouses

An underrated but impactful announcement: automatic garbage collection for Fabric data warehouses. The feature uses storage optimization to identify and clean up expired data files without manual intervention — what the article calls "no knobs" (metaphorical knobs, as Tommy eventually realizes).

Mike shares a customer story: a lakehouse running for 5 years without optimize/vacuum operations had storage costs balloon to $4,000–$5,000/month. After cleanup, costs dropped below $1,000. He argues this auto-cleanup should extend to lakehouses, materialized views, and Spark engines too. The current 30-day data retention period is fixed and not yet configurable.

- [Intelligent Data Cleanup: Smart Purging for Smarter Data Warehouses](https://blog.fabric.microsoft.com/blog/intelligent-data-cleanup-smart-purging-for-smarter-data-warehouses?ft=All&WT.mc_id=DP-MVP-5002621) — How Fabric's new storage optimization automatically identifies and removes expired data files from warehouses.

## Main Topic: Rolling Out Copilot Standalone for Power BI

The centerpiece of the episode is a role-play scenario: **You're tasked with getting your organization to adopt the new standalone Copilot for Power BI within 12 months.** How do you approach it?

### What Is Copilot Standalone?

Announced at Microsoft Build 2025, the standalone Copilot is a full-screen experience accessible from a new button in the Power BI left-hand navigation pane. Unlike the previous report-scoped Copilot, this version works across all your data — you can ask about marketing data and then pivot to sales without switching reports. It understands metadata including report names, descriptions, visual titles, workspace names, and weights results based on your recently viewed content, endorsed items, and favorites. It's now accessible down to F2 capacity levels.

- [Get to Insights Faster with SaaS Databases and Chat with Your Data Experiences](https://blog.fabric.microsoft.com/blog/get-to-insights-faster-with-saas-databases-and-chat-with-your-data-experiences?ft=All&WT.mc_id=DP-MVP-5002621#) — Microsoft's article on the new standalone Copilot experience, including capabilities, data agent integration, and data preparation guidance.

### Don't Start with "Everyone Must Use Copilot"

Mike pushes back on the premise immediately: mandating Copilot adoption is a **solution looking for a problem**. Instead, flip it — identify the biggest pain points in your data culture first, then evaluate whether Copilot's capabilities align with those gaps.

His framework:
1. **Survey your team's skills and struggles** — Where are the biggest knowledge gaps? What tasks consume the most time?
2. **Map Copilot capabilities to real problems** — Search/discovery, report summarization, asking questions about data, and data agents each serve different needs.
3. **Start small** — Pick a focused team, teach prompting, run mini-projects, and refine.
4. **Measure and expand** — Document where Copilot adds real value before rolling out broadly.

### The "Time Trial" Approach

Mike borrows a concept from retail operations: measure how long tasks actually take across your team's workday. The longest-running, most effort-intensive tasks are your optimization targets. Don't throw Copilot at "explain this visual" — throw it at the two-hour analysis that could become 20 minutes.

For consumers, the sweet spot is quick information retrieval from multiple data sources — sales reps who need to know which customers to call today, managers tracking targets. For developers, it's condensing week-long projects into hours (Mike shares how he rebuilt an entire website with AI-assisted coding in the time he'd spent struggling with a single Google Analytics integration).

### Data Prep Is the Non-Negotiable

Tommy's closing argument: **none of this works without prepared data.** Previous AI features in Power BI (Q&A, automated insights, key influencers, decomposition trees) were unreliable because teams couldn't customize or weight the underlying models. Copilot standalone is different because it reads semantic models — but that means semantic models must have proper descriptions, relationships, and metadata.

Key takeaways:
- Don't roll out Copilot until you've vetted at least one semantic model for AI readiness
- Start with a small group on a well-prepared dataset
- The weight is on builders, not consumers — you can't expect end users to know metadata or visual properties
- Expect a CU cost vs. value reckoning as organizations discover Copilot's capacity consumption

### The Value Test

Every report and every AI feature should answer one question: **Does this help someone make money or save money?** If Copilot can't tie to one of those outcomes, it may not be worth the capacity cost. Success isn't measured by how many questions people ask per day — it's measured by whether those answers lead to better decisions and saved time.

- [Powering the Next AI Frontier with Microsoft Fabric and the Azure Data Portfolio](https://azure.microsoft.com/en-us/blog/powering-the-next-ai-frontier-with-microsoft-fabric-and-the-azure-data-portfolio/) — Microsoft's broader vision for AI integration across the Fabric and Azure data platform.

## Transcript

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=23s" target="_blank">0:23</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Today's main topic: we're going to do a what-if scenario. Imagine if you are adopting Copilot standalone for Power BI. What does this look like for your organization? How are you using it and what does it look like for you to roll this out?

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=86s" target="_blank">1:26</a> Tommy, you want to do any introductions or news items? Summer's upon us. Tomorrow in Chicago it's our last day of school. With an eight, a six, and a four, it can be a little hard to think about how to keep them busy. Mike, what good tips do you have? We're PowerBI.tips, Fabric tips, but what parent tips do you have for us for the summer?

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=147s" target="_blank">2:27</a> We do a lot of adventury things nearby — museums, kids museums that are interactive, parks. There's an age bracket where kids start getting old enough to start doing work. Last summer my son was working at a restaurant nearby and that really occupied a lot of his time.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=267s" target="_blank">4:27</a> I wrote a contract — we call it the summer contract. If you want to watch TV, Nintendo, whatever, you have to achieve these things first. Go read it, come back if you disagree with anything before you sign it, because once you sign it, that's the expectation.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=451s" target="_blank">7:31</a> This summer we're doing something unique. My son is really interested in computers and computer science. A friend and I are going to start teaching him how to program — what does programming look like, how do you build a UI, what's a website. There's a lot of free Stanford and Harvard classes out there. You can audit them without taking credits.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=575s" target="_blank">9:35</a> I don't think AI will give you everything. You still need core fundamentals — what padding looks like, what a flexbox is. Understand the concept, then let the AI figure out the code.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=637s" target="_blank">10:37</a> Welcome to prompt engineering. I think it's going to really shift how people do work in the future. Let's move to some news items.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=669s" target="_blank">11:09</a> First up: Open Mirroring Explained for Microsoft Fabric. The biggest difference: mirroring has standard connections to known sources. Open mirroring is a flexible approach that allows any application to write changes to Fabric — legacy databases, external data providers, or your own custom-made one. Someone even used an Excel file as their open mirroring source.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=763s" target="_blank">12:43</a> My understanding is SQL DB mirroring and Azure Postgres mirroring actually make physical copies and bring data to the lakehouse. But the Databricks catalog — it's more like an elaborate shortcut. The mirroring language is different between sources and the distinction isn't always clear.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=915s" target="_blank">15:15</a> Microsoft is giving away one terabyte of mirroring for free. If you have a small SQL database, that goes a long way when you're doing copies of smaller tables. But Fabric SQL databases don't get that same trial — you get two gigs and then start paying for storage immediately.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1007s" target="_blank">16:47</a> One challenge with open mirroring: when you update records, the mirroring figures out how to apply changes efficiently. But what happens when your database physically removes records? Deletes are harder to manage. You have to compare IDs that existed versus what's current. I don't see a lot of clear language around how open mirroring handles the delete side.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1191s" target="_blank">19:51</a> Some data systems allow soft deletes — the record stays but is marked as deleted. That's a great solution but it means your database could get really large. There should be two queries: one to get changed records and one with the master key list, and it should figure it out on the back end.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1283s" target="_blank">21:23</a> Next up: updates to database development tools for SQL Database in Fabric. Source control integration, Microsoft SQL build projects, VS Code development updates, and a roadmap including deployment pipelines, REST API, and CI/CD Python module integration. That's a mouthful.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1373s" target="_blank">22:53</a> I was not a fan of working with SQL databases before Fabric SQL. Why would we need this? I have a lakehouse, I have a data warehouse. But the pay-per-use model changed my thinking. I can start a SQL database and only when I'm running it does it actually charge me. This makes total sense.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1469s" target="_blank">24:29</a> I'm seriously rethinking — maybe Fabric is the place for my transactional data. The back end of my transactional app is now part of Fabric. Tommy pointed a Power App at a Fabric database and it was seamless. It smells, looks, and tastes like a SQL database.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1593s" target="_blank">26:33</a> The only comment about the article: know the audience. Everything in this is for a DBA. There are so many acronyms — CI/CD, MSQL extension tool, SQL.NET, SQL projects, DACPAC. Nothing in this article says "I want to be a SQL player too."

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1686s" target="_blank">28:06</a> One more news item: intelligent data cleanup, smart purging for smarter data warehouses. This is an underrated feature. Garbage collection with "no knobs" — which are metaphorical knobs, as Tommy eventually figures out.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1812s" target="_blank">30:12</a> My customer had a lakehouse running for 5 years. Storage costs were really high. They'd never run optimize or vacuum. We took costs from almost $5,000 a month down to less than $1,000. Microsoft needs to provide better auto-optimization. This should be a feature of lakehouses and materialized views too.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=1966s" target="_blank">32:46</a> Main topic: What is Copilot standalone? This is a newer feature announced at Build 2025. A full-screen experience accessible as a new button on the left-hand pane, globally available in Power BI. The main difference: you don't worry about which report you're in. Talk about marketing data, then pivot to sales data, all in the same location.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2089s" target="_blank">34:49</a> It understands metadata — report names, descriptions, visual titles, text boxes, workspace names. It weights results based on what you recently viewed, what's endorsed, and your favorites. This is completely different from the Q&A feature.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2185s" target="_blank">36:25</a> This is a preview feature just announced at Build. It's coming in the next couple weeks. Microsoft is making Copilot extremely accessible — it's in Windows, Outlook, Excel, even Paint. AI is becoming so pervasive that every company is trying to produce some experience around it.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2370s" target="_blank">39:30</a> Microsoft has tried a lot of intelligent features for Power BI that haven't taken the world by storm. Automated insights, key influencers, Q&A, decomposition tree, quick insights — none of those were something people depended on. They were unreliable. Now we have something more promising.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2432s" target="_blank">40:32</a> The role play: you're tasked in the next 12 months to make sure your organization adopts standalone Copilot for Power BI. You have some budget, some people, but the data culture is skeptical from previous AI tooling. What's the process?

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2526s" target="_blank">42:06</a> I don't necessarily agree with a mandate to use Copilot. That's a solution looking for a problem. I want to think about it as a problem looking for a solution. What part of my organization is struggling the most? What in our data culture is the weakest? Then step back and see what Copilot capabilities can address those gaps.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2617s" target="_blank">43:37</a> Capabilities to evaluate: searching and finding content, summarizing reports, asking questions about data, and using Fabric data agents. Data agents are interesting — you can change what the AI focuses on, pre-train it, give it instructions. That might actually make the experience useful.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2742s" target="_blank">45:42</a> Start with a small team of capable people. Teach them how to prompt. Do mini-projects together. As we learn things, refine the process. Then roll it out larger to the organization. Use Copilot where it's most effective, document that, refine that.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=2834s" target="_blank">47:14</a> Every report should answer: does this help someone make money or save money? If it can't tie to one of those things, does it even need to exist? If you're tasked with making everyone use Copilot standalone, you're probably setting yourself up for failure.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3053s" target="_blank">50:53</a> I think about time trials — measure how long tasks take across your team's workday. Focus on where people spend the most time. The part with the most effort is usually the part I can improve. Throwing Copilot at a 2-hour analysis that could become 20 minutes — that's the target.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3334s" target="_blank">55:34</a> I spent 4 hours trying to add Google Analytics to my static web app. It wasn't working. I bought Cursor, started over with AI, and in the same 4 hours I rebuilt the entire app with everything I needed. A week's worth of work condensed to hours. That's the stuff I'm looking for.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3489s" target="_blank">58:09</a> The biggest thing is data prep. I don't care what model it's using — Claude, ChatGPT, whatever. It's using semantic models to render answers. If the data is bad or not weighted and ready for AI, this is not going to catch on. We have never had the ability to customize and weight a model for AI, which is probably why previous features never worked.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3645s" target="_blank">60:45</a> My number one focus is: what data are we going to vet? What models are going to provide the quickest path to answers? I'm spending a lot of time prepping that, and that's where we start.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3707s" target="_blank">61:47</a> Is this lemon worth the squeeze? I want AI and Copilot to tackle the things my team spends the most time on. Semantic models aren't always in the right shape. We don't understand requirements cleanly. Some questions don't even have data in the models yet. Identify the gaps first.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3832s" target="_blank">63:52</a> Copilots are going to make the complex simple. I should be able to talk to a visual and say "highlight the selected bar" and have Copilot create the measure and conditional formatting. I want to talk to AI in concepts — "which customers are most likely to churn?" — and get an actionable list.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=3926s" target="_blank">65:26</a> How do we roll this out? Figure out what your team knows and doesn't know. Figure out what AI does well. Align your team's long-running tasks against what AI can do quickly. See how well it blends. This is a value proposition — does Copilot add enough value for the CU cost? I guarantee in a couple months people will say it's interesting but using all their CU.

<a href="https://www.youtube.com/watch?v=MPSPMj70fMg&t=4017s" target="_blank">66:57</a> Thank you all for listening. Let us know if you're using Copilot. Head to powerbi.tips/podcast for questions. Find us on Apple, Spotify, wherever you get your podcast. Join us live every Tuesday and Thursday, 7:30 AM Central.
