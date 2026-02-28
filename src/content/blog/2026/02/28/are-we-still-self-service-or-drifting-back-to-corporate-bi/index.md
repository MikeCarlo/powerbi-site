---
title: "Are We Still Self Service Or Drifting Back to Corporate BI – Ep. 425"
date: "2026-02-28"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Self-Service BI"
  - "Corporate BI"
  - "Microsoft Fabric"
  - "Semantic Models"
  - "Lakehouse"
  - "Data Governance"
excerpt: "Mike and Tommy debate whether the Power BI and Fabric ecosystem is still truly self-service or quietly drifting back toward corporate BI, exploring semantic model-to-lakehouse sync, data contracts, managed self-service, and where the line between central IT and business users really falls."
featuredImage: "./assets/featured.png"
---

In Episode 425 of Explicit Measures, Mike and Tommy tackle a provocative question inspired by a Marco Russo and Rui Romano LinkedIn conversation: with Fabric adding git integration, deployment pipelines, lakehouses, and notebooks, are we still doing self-service BI—or have we quietly circled back to corporate BI? They unpack the definitions, debate where the ownership line falls, and explore how semantic model-to-lakehouse synchronization changes the game for both camps.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/yoBSoq6111A" 
  title="Are We Still Self Service Or Drifting Back to Corporate BI – Ep. 425"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Beat from the Street

Tommy shares his growing enthusiasm for pushing semantic model tables to a lakehouse—a feature that sounds counterintuitive but is proving incredibly useful in real projects.

- [OneLake Integration for Semantic Models](https://learn.microsoft.com/en-us/power-bi/enterprise/onelake-integration-overview?WT.mc_id=DP-MVP-5002621) — Microsoft's new feature lets you automatically synchronize semantic model tables to a lakehouse in delta table format whenever the model refreshes. This opens the door for SQL queries, notebooks, and other Fabric experiences on data that was previously locked inside the semantic model. Mike highlights how this could be a strategic on-ramp for the 30 million Power BI monthly active users who haven't yet engaged with Fabric—just turn on auto-sync and suddenly those users can experiment with SQL, notebooks, and new reporting patterns without any additional data engineering.

## Main Topic: Self-Service vs. Corporate BI

The core discussion was sparked by a [Marco Russo interview with Rui Romano on LinkedIn](https://www.linkedin.com/video/live/urn:li:ugcPost:7308073142726369281/) about the proliferation of professional tools in the Fabric ecosystem and what that means for self-service BI.

### Key Definitions

**Corporate BI** — A central team serving data to multiple departments. They own the data contracts: where data comes from, how it's stored, when it refreshes, and ensuring accuracy. They build for sustainability and long-term reliability.

**Self-Service BI** — Business users building their own reports and analyses on top of data provided by central teams. They're solving immediate problems, often with ad hoc solutions, and typically aren't thinking about dev/test/prod environments or version control.

### The Fabric Complication

Tommy argues there are now *two* definitions of self-service: one for Power BI (report building, basic Power Query) and one for Fabric (which requires understanding lakehouses, pipelines, notebooks, git, and more). Mike agrees—Microsoft is making data engineering so accessible that anyone with a browser can spin up a lakehouse, but that accessibility blurs the line between self-service and corporate BI territory.

### Where Does the Buck Stop?

Mike frames the handoff as a data contract: corporate BI provides tables, semantic models, and lakehouses. Whatever the business builds on top of that is their responsibility. When something breaks in a self-service report, the ticket goes back to the person who built it—not central IT.

Tommy pushes back: every Fabric self-service scenario Mike described still requires corporate BI to create and manage the source data in the lakehouse. That makes it "managed self-service" at best, not true self-service like the old days of connecting Power Query to your own Excel files and Mailchimp exports.

### The Spectrum of Skills

Mike breaks down self-service by user capability:
- **Basic users** — View reports, change filters, download data. That's their self-service.
- **Intermediate users** — Connect to semantic models, build their own reports, use shortcuts to lakehouse tables, write SQL queries.
- **Advanced users** — Write Python notebooks, do regression analysis, clustering, and other data science work against lakehouse data.

### Self-Service BI vs. Self-Service Data Engineering

The key insight: what Mike was actually describing wasn't self-service BI—it was *self-service data engineering*. Self-service BI (building reports and visuals) still lives squarely in Power BI. Self-service data engineering (working with lakehouses, notebooks, SQL endpoints) is a Fabric story that requires a different skill set and a different governance model.

### The Corporate BI Drift

Both agree that Fabric's new features—git integration, deployment pipelines, environments—are traditionally corporate BI tools being brought into the Power BI ecosystem. Large organizations are driving these feature requests, and those organizations think in corporate BI terms. The result: the platform is getting more powerful but also more complex, and the gap between "self-service" and "corporate BI" is narrowing.

### Practical Takeaways

1. **Define your terms** — Self-service BI and self-service data engineering are different things requiring different governance approaches.
2. **Draw the ownership line** — Use data contracts to clarify where corporate BI's responsibility ends and self-service begins.
3. **Invest in enablement** — Support, training, and clear ownership are the three pillars for transitioning workloads from corporate BI to self-service.
4. **Use semantic model sync strategically** — Auto-synchronizing tables to lakehouse is a low-friction way to bring Power BI users into the Fabric ecosystem.
5. **Build for the right audience** — Corporate BI should focus on high-impact, repeatable solutions; self-service handles the ad hoc, one-off needs.

### Reference

- [Managed Self-Service BI Usage Scenario](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-usage-scenario-managed-self-service-bi?WT.mc_id=DP-MVP-5002621) — Microsoft's implementation planning guide for managed self-service BI, covering the governance patterns and architectural decisions that bridge corporate BI and self-service.

## Transcript

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=0s" target="_blank">0:00</a> Welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone and welcome back. This is a pre-recorded episode since Tommy and Mike are traveling, so no live YouTube chat this time. Mike mentions they've been busy with lots of Fabric projects recently.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=66s" target="_blank">1:06</a> Mike introduces the main topic: are we still in self-service mode, or are we drifting more and more back towards a corporate BI stance? Fabric is adding a lot of corporate features—git integration, deployment pipelines, automation of data loads. It feels like a big shift away from "go to powerbi.com and build whatever you want."

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=126s" target="_blank">2:06</a> Credit goes to Marco Russo who did an interview with Rui Romano on LinkedIn about what all these proliferating tools mean for companies. Some tools for modeling, some for visual editing, some for reports—where do we invest our time?

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=182s" target="_blank">3:02</a> Tommy shares his beat from the street: Microsoft's new ability to push semantic model data to a lakehouse. Initially skeptical, he's now becoming a believer. Anytime a semantic model refreshes, you can choose individual tables to push to a lakehouse as delta tables.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=240s" target="_blank">4:00</a> Mike confirms they have a customer actively looking at this. He breaks down the user personas—basic users just want to see reports, intermediate users want to build their own reports from the semantic model, and advanced users want direct access to lakehouse tables for SQL, notebooks, and experimentation.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=358s" target="_blank">5:58</a> Mike explains the architecture: synchronize semantic model tables to lakehouse, create shortcuts, and hand the business both a curated report and raw tables. As the semantic model refreshes, the lakehouse tables update automatically. For Excel users, this is better than hitting the semantic model directly—let them use their local Excel compute via Power Query against lakehouse tables instead.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=416s" target="_blank">6:56</a> Mike highlights the strategic play: with 30 million monthly active Power BI users who mostly aren't using Fabric yet, auto-synchronizing semantic model tables to lakehouse is the easiest on-ramp. Instantly people start wanting to write SQL and notebooks—Fabric experiences that weren't available before.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=473s" target="_blank">7:53</a> Tommy shares two lightbulb moments: first, this essentially acts like dataflows in desktop—doing Power Query, publishing to lakehouse without the semantic metadata. Second, he's using it for additional transformations that Power BI and dataflows couldn't handle, pushing tables through to a notebook for processing, then building a second semantic model that's part Power BI, part lakehouse.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=618s" target="_blank">10:18</a> They discuss the OneLake Integration for Semantic Models documentation, which clearly diagrams the flow: multiple data sources → Analysis Services import → delta tables in lake → direct lake semantic model on top. Mike notes he'd rather have Excel users touch lakehouse tables directly than abuse the semantic model with flat wide table exports.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=705s" target="_blank">11:45</a> Transition to the main topic. Tommy frames the history: they've done multiple series on self-service and corporate governance, all in the pre-Fabric world. Now with Fabric, the lines are blurring. Anyone with a browser can use Fabric, but you need to know pipelines, git, Python, notebooks, lakehouses—that's a lot of skills.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=794s" target="_blank">13:14</a> Tommy drops a bold claim: there are now two definitions of self-service—one for Power BI and one for Fabric. And similarly two definitions of corporate BI. Mike responds by defining corporate BI: a central group serving data to multiple departments with repeatable data processes.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=882s" target="_blank">14:42</a> Mike defines self-service by contrast: like the old Business Objects days—grab some measures and dimensions, build a table, export it, do other things with it. You get tables and relationships, you understand how they stitch together, and you build your own reports and Excel documents.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=969s" target="_blank">16:09</a> Mike describes the handshake between corporate BI and self-service as a data contract. Corporate BI produces tables and commits to refresh schedules; what the business builds on top is their responsibility. This applies to master data too—owned by many departments but collected centrally.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1089s" target="_blank">18:09</a> Tommy raises managed self-service as a concept. Mike suggests parking that for now and focusing on defining self-service vs corporate BI cleanly. He notes that git integration, deployment pipelines, and lakehouses are traditionally corporate BI tools now showing up in Fabric right next to Power BI.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1177s" target="_blank">19:37</a> Tommy notes that Fabric is way easier than Azure for provisioning—just click, name it, and it works. No resource groups, regions, or cost calculators. But the ease is deceptive: for experienced users it's great, but self-service users who aren't developers may struggle with concepts like dev/test/prod environments.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1324s" target="_blank">22:04</a> Mike observes that as soon as you introduce environments and version control, you've graduated beyond self-service into building sustainable products. Large organizations with corporate BI mindsets are driving the features coming into Fabric and Power BI.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1412s" target="_blank">23:32</a> Mike clarifies that business users focus on solving immediate problems—they're not thinking about sustaining solutions over time. That's perhaps the biggest distinction: corporate BI builds for sustainability with data contracts; self-service builds for immediate results.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1555s" target="_blank">25:55</a> Tommy shares his corporate BI experience: the team kept getting buried in ad hoc requests that weren't sustainable. Moving to self-service meant the business could handle their own ad hoc needs while corporate BI focused on high-impact, long-lifecycle solutions worth the investment.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1821s" target="_blank">30:21</a> Mike asks what Tommy's team did to enable self-service. Tommy's answer: support, training, and ownership—the three pillars. Mike confirms this aligns perfectly: support means answering questions, training means teaching people to fish, and ownership means clear handoff of responsibility.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=1998s" target="_blank">33:18</a> Tommy challenges Mike: eliminate Power BI products from the equation—what's truly self-service in Fabric? Mike responds with a spectrum: from basic report consumers to SQL-writing intermediate users to Python-notebook advanced users. Corporate BI draws the line at providing lakehouse shortcuts; everything beyond is self-service.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=2233s" target="_blank">37:13</a> Tommy pushes back: all of Mike's Fabric self-service scenarios are really managed self-service because they all start with corporate BI creating and managing the source data. Unlike the old Power BI world where marketing could own their own Mailchimp data end-to-end, Fabric self-service requires BI involvement at the foundation.

<a href="https://www.youtube.com/watch?v=yoBSoq6111A&t=2354s" target="_blank">39:14</a> Mike has the key realization: what he was describing wasn't self-service BI—it was self-service data engineering. There's self-service BI (report building in Power BI), self-service data engineering (working with lakehouses and notebooks in Fabric), and each needs different governance and enablement approaches.
