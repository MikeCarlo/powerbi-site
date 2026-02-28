---
title: "Uses for TMDL & VS Code – Ep. 424"
date: "2025-05-16"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "TMDL"
  - "VS Code"
  - "GitHub Copilot"
  - "Semantic Model"
  - "AI"
  - "Microsoft Fabric"
excerpt: "Mike and Tommy unpack TMDL — the Tabular Model Definition Language — tracing its origins from the monolithic BIM file to today's human-readable, file-per-object format. They explore practical use cases in VS Code, from find-and-replace renaming to AI-powered measure descriptions and unused-object cleanup with GitHub Copilot."
featuredImage: "./assets/featured.png"
---

In Episode 424 of Explicit Measures, Mike and Tommy dive into TMDL (Tabular Model Definition Language) and how it pairs with VS Code to transform the Power BI development experience. They cover the history behind TMDL, practical use cases they're finding in their daily work, and how GitHub Copilot and agent mode are unlocking capabilities the community has wanted for years — like full semantic model auditing across reports in seconds.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/Y-U5Os2mvk8" 
  title="Uses for TMDL & VS Code – Ep. 424"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

### Orchestrate Databricks Jobs with Fabric Data Pipelines

Tommy kicks off the news with a big update for data engineers: you can now orchestrate Azure Databricks Jobs directly from Fabric Data Pipelines. This adds a Databricks Job connector to pipelines, letting you trigger any Databricks workflow — serverless jobs, SQL tasks, Delta Live Tables, batch inferencing, or even automatic semantic model refreshes — right from your pipeline. Mike shares his enthusiasm for this integration, noting it fills a feature gap that existed between Azure Data Factory and Fabric pipelines for years. He describes his preferred pattern: use a pipeline to copy data into the lake, kick off Databricks notebooks, then let the pipeline finish with additional steps like refreshing the semantic model. Both hosts agree pipelines are the right place for orchestration and sequencing.

- [Orchestrate your Databricks Jobs with Fabric Data Pipelines](https://blog.fabric.microsoft.com/blog/orchestrate-your-databricks-jobs-with-fabric-data-pipelines/?WT.mc_id=DP-MVP-5002621) — Microsoft announces native support for triggering Azure Databricks Jobs from Fabric Data Pipelines. The new Job type appears in the Azure Databricks activity settings, with a drop-down to select any job from your Databricks workspace. Mike praises the pipeline-as-orchestrator pattern and notes Fabric's Spark engine is becoming a strong competitor to Databricks with the native execution engine delivering 4–8x speed improvements. Tommy highlights how he's increasingly using pipelines even for simple jobs, appreciating the visual management and scheduling capabilities over Databricks' built-in scheduler.

### Fabric Data Agents Python SDK

The second news item introduces the Fabric Data Agent SDK — a Python package that lets you programmatically create, configure, and evaluate data agents. Tommy sees this as a natural fit: while there's a UI for everything in Fabric, data agents feel purpose-built for code. The SDK supports creating agents, connecting lakehouse data sources, defining ground-truth evaluation datasets, and running structured evaluations. Mike explores how data agents might pair with user-defined functions to return AI-generated results directly into semantic models.

- [Evaluate your Fabric Data Agents programmatically with the Python SDK](https://blog.fabric.microsoft.com/blog/evaluate-your-fabric-data-agents-programmatically-with-the-python-sdk/?WT.mc_id=DP-MVP-5002621) — Microsoft releases a Python SDK for Fabric Data Agents in preview. You can create or connect to a data agent, add lakehouse tables, define few-shot evaluation queries with expected answers, and run structured evaluations — all from a notebook or automation pipeline. Tommy walks through how this enables prompt engineering workflows (few-shot prompting with question-answer pairs), while Mike questions whether the SDK creates new agents or configures existing ones. Both hosts note the missing consumer-facing piece: a Copilot Studio connector for Fabric data agents that would let users interact with them across Office 365.

## Main Discussion: TMDL and VS Code

Before diving into the main topic, Mike and Tommy bond over their gear setups — Tommy's obsessive stockpiling of discontinued mice from eBay, Mike's overbuilt streaming desktop and collection of backup laptops. Mike describes his multi-monitor workflow: a 49-inch Samsung ultrawide split into thirds with Power Toys, two flanking 27-inch monitors, and a presentation screen below the camera. This setup, he explains, is exactly why TMDL and VS Code matter — he can have Fabric data engineering, semantic model editing, and report building all open simultaneously in separate browser windows, something Power BI Desktop has never supported.

### What Is TMDL and Where Did It Come From?

Mike traces the history: semantic models originally lived in a single monolithic JSON file called the BIM file (TMSL — Tabular Model Scripting Language). It worked for computers but was nearly impossible for humans — DAX measures wrapped in JSON required escaped quotes and backslashes, and any small change could cause hundreds of lines to rearrange in version control. Mathias Thierbach (creator of PBI Tools) proposed a solution: break the monolith into individual files per object (one per table, measure, schema, perspective) in a YAML-like format that's indentation-based and human-readable. Microsoft adopted the idea, and TMDL was born. The key insight: TMDL compiles down to TMSL for the engine, but developers work in the friendlier format. Git integration in Fabric now produces TMDL folders for each artifact automatically.

### Practical Use Cases in VS Code

Tommy shares his most-used feature: **find and replace across the entire project**. When renaming a table, every measure and report visual referencing the old name breaks. In VS Code, a global find-and-replace across both the semantic model and report folders fixes everything in seconds — no need to open Desktop at all. He also uses TMDL to strip the report folder entirely when he only needs to publish a standalone semantic model.

Mike highlights **perspectives** — a feature that exists in the semantic model but has never been manageable from Desktop in its 10-year history. With TMDL files, creating and editing perspectives is straightforward. He describes how Carlo Solutions uses perspectives in their Entexos embedded product to provide curated views of semantic models for custom table-building experiences. He also mentions **annotations** — hidden metadata properties used by tools like SQLBI's Bravo to tag date tables and ensure consistent DAX patterns across models.

### The AI Game-Changer: Copilot + TMDL

Tommy shares two use cases that he says have "blown him away":

**1. AI-Generated Measure Descriptions** — Using custom instructions in VS Code (or Cursor), Tommy sets up an agent with context about TMDL syntax, the semantic model, and even the report folder. He asks it to write business-friendly descriptions for every measure, informed by where each measure appears in report visuals. In about 15 seconds, 35+ measures get detailed, context-aware descriptions — something that would have taken hours manually.

**2. Unused Object Detection and Cleanup** — The "holy grail" the Power BI community has chased for years. Previous tools could partially detect unused measures or columns, but none could cross-reference the semantic model with report visuals, filters, and dependencies in one pass. With Copilot in agent mode, Tommy writes custom instructions that scan the entire TMDL project — model and reports — to identify every measure, column, and table that isn't referenced anywhere. The agent writes a categorized log file and can even delete the unused objects automatically. What took the community years of external tooling attempts now takes 30 seconds.

### The Bigger Picture: LLMs and the Future of Development

Mike reflects on how large language models are reshaping development. He draws a parallel to Microsoft's Power Apps vision — the idea that the world needs millions more apps built by more people was correct, but the implementation vehicle turned out to be LLMs, not low-code platforms. He notes that prompting is becoming its own skill, and the community needs shared prompt libraries (they announce a new public GitHub repo for Power BI prompts). Mike shares plans to teach his son programming this summer using Python alongside LLMs — learning to code and learning to leverage AI in concert. Both hosts emphasize that AI doesn't eliminate the need to understand code; it makes code accessible to more people and dramatically accelerates those who already understand it.

## Transcript

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=22s" target="_blank">0:22</a> Yeah. Ow. Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone. Oh, good morning Mike. How you doing? What's going on in the world of Tommy? we're ramping down the end of school year. We're getting closer to summer. Is that the beginning the time of year for you where the kids are getting all antsy and trying to get out of school? Oh. Oh yeah. what's the topic today by the way before we

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=54s" target="_blank">0:54</a> dive in? Yeah. Before we jump into things, let's just jump into our topic today. Our our main topic for today is just going to unpack what TMDL is. And then that's timode. What is what are these tools? How would we use them? And how how should we be thinking about these tools as part of our development cycle? where are Tommy and I using them? Where are we finding value from them? what are maybe tips or tricks that we're using with these tools today currently? And we'll unpack that as well. Also, community, if you're listening on either, X or YouTube, we'd love

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=87s" target="_blank">1:27</a> to have your opinion as well. Let us know what you're thinking about these tools and how are you using them as well. That being said, let's jump into the news. Tommy, let's do some news items today. So, before we get into some news, Mike, my mouse died and I'm very, very particular about the tools that I use physically, not just the software, but I like my keyboard. I have a ducky keyboard. It lights up, but it's more the mechanical keyboard. But I have this old mouse from my old job that I just loved. It died on me a week and a half ago. Very frustrating. So, I scoured the

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=122s" target="_blank">2:02</a> web and I have set myself up for life. I have now not two, not three, but I bought four on eBay because they don't sell them anymore. They're old. They're very old. But I love it. I love the feel. I love how it moves. Because here's the thing — your screen, your keyboard, your mouse. That's what you're doing all day. It's not just software. That's what your hands are touching. That's what you're moving around with. So, you want it to be something that you're comfortable with.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=188s" target="_blank">3:08</a> I'm going to not talk about mice per se, but I will talk about just general computer gear stuff. I way over-bought on my desktop machine. I bought the most expensive machine I could afford at the time. Way overbuilt a desktop. It's super silent. It's made for streaming. I had it custom-built from an online retailer shipped to my house. And I've made the opinion — this is what I do every day. I also justified the acquisition of many different laptops just because I didn't want to have one machine go down and not have a backup or two.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=287s" target="_blank">4:47</a> I don't mince on buying high-quality computer equipment because that's what I use every day. I'm a wired guy — I have a Razer gaming mouse intentionally wired into the computer. The only wireless thing is my Apple headphones. And my keyboard is a Microsoft keyboard — I like flat, low, short travel keys that match the laptop feel. I made a decision back in corporate America that I wasn't going to use a separate keyboard. I'd work on the laptop keyboard so I'd be equally fast in meetings and at my desk.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=418s" target="_blank">6:58</a> What's your monitor setup like? Because you got me into the nice curved screen. I look like a Wall Street trader — I got two in front, three on the side. My main screen is a 49-inch Samsung ultrawide, like two screens side by side. I use Power Toys for Windows and divide the screen into thirds — three full browser windows side by side. Then two 27-inch monitors on the sides, and below the camera a 1080p presentation screen. When I share screen, that's the one I share. Everything else stays private.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=482s" target="_blank">8:02</a> This is maybe one of the reasons why I really like what we're doing with VS Code. I really like being able to have lakehouses and semantic models and reports all open in separate browser windows. If I think about my development cycle for Power BI and Fabric — I'll have Fabric data engineering, notebooks, and lakehouses on one browser window. An entirely separate window for the semantic model where I make measures and refresh tables. And a third window where I start stubbing out the report. I can engineer the data, model the data, and build reports all on the same screen.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=577s" target="_blank">9:37</a> I feel like desktop doesn't give you the ability to do modeling properly and then report building at the same time. You pick one or the other. The formula bar at this point is a last-ditch effort for me now. Anytime I use it, it's because I can't get the DAX query view. DAX query view is my go-to for building DAX measures — it's second to none, the best experience for me.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=645s" target="_blank">10:45</a> Two quick news items. You can now orchestrate your Databricks jobs with Fabric Data Pipelines — this adds the Databricks connector action to pipelines. I'm using pipelines more and more. It's becoming my default for a lot of jobs, even simple ones. I love the management and the visual side of it.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=709s" target="_blank">11:49</a> This was something that existed in Azure Data Factory for years. I really like using this one. A lot of organizations have already built data engineering processes around Databricks and it's a solid tool — number one in the marketplace for data engineering. The whole experience feels like it was built by engineers for engineers. However, Microsoft Fabric is quickly becoming a strong competitor in the Spark space with security features you get by default and the native execution engine delivering 4–8x speed improvements.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=872s" target="_blank">14:32</a> I really think the pipeline is the right place to do orchestration and sequencing. I love using a pipeline to copy data into the lake, kick off the Databricks notebooks, run the job, complete it, then go back to the pipeline to finish with extra things like refreshing the semantic model.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=904s" target="_blank">15:04</a> Another update — we now have a Python SDK for Fabric Data Agents. It's called the Fabric Data Agent SDK, and it allows us to programmatically create, manage, and evaluate data agents using Python. There are some things that are just better with code. The data agents UI exists, but this feels like it was made for a Python package. You can create or connect to a data agent, add your lakehouse, select tables, put evaluation queries and expected answers — this is few-shot prompting where you're saying here's the question, expect this answer.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1034s" target="_blank">17:14</a> The gap is going to be when we can use this with Copilot Studio — the Microsoft tool that allows you to create agents and every connector, but we don't have one for Fabric yet. That would let you connect to a data agent from Office 365, already preset up and connected to your data. The data agent is really the first step, but we don't have the consumer face for what it's actually going to look like yet.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1295s" target="_blank">21:35</a> I think that's a really good transition as we dive into a very developer-based tooling today. We're talking about TMDL — the Tabular Model Definition Language. And the intention was to be in a code IDE like VS Code or Cursor where I can see all the files and have a project-based approach. We're at the point now in the BI space where AI is just going to be part of our life.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1426s" target="_blank">23:46</a> Let me give you some history. TMDL is an abstraction of TMSL — the Tabular Model Scripting Language. This is the BIM file. When you built a semantic model on Analysis Services, you got a single JSON file with the full definition — all tables, columns, measures, relationships. Great for computers, bad for humans. DAX measures had quotations and backslashes everywhere just to manage the JSON syntax.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1525s" target="_blank">25:25</a> The challenge with one monolithic file in git: any time you change something, the JSON structure rearranges. You could have hundreds of lines of code changes but all you did was add a little code in one section. Mathias Thierbach solved this with PBI Tools, which would unzip a PBIX file and break it into individual files — one per table, per schema, per perspective. This was revolutionary because now a single object could be compiled into the BIM but broken apart into tiny components for version control.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1690s" target="_blank">28:10</a> Mathias pitched the idea to Microsoft and they adopted it. The TMDL format is more like YAML — all the brackets, quotes, and arrays are simplified. Indenting is important like Python, but now it's much easier to read and use. TMDL doesn't run desktop directly — TMSL still runs the models — but you take TMDL, compile it down to TMSL, and desktop uses that format.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1789s" target="_blank">29:49</a> If you're using Git integration, you get two folders for each artifact — the report and the semantic model. The VS Code extension is really a requirement because it does syntax highlighting, shows warnings and errors for wrong indentation or naming conventions. Add source control and now I can see what Mike changed in a measure and review the diff.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=1917s" target="_blank">31:57</a> We are diving into heavier developer things. I don't know if I'd call this citizen developer or self-service. But if you're full-time Power BI and you love what you're doing, I highly encourage you to get started because this is going to be the de facto way. This is pro users who have been doing this for a while and are looking to build lots of things quickly.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=2046s" target="_blank">34:06</a> Where are you finding value from this, Tommy? Just the changes — I wanted to create a model without the report, so I just deleted the report folder. The renaming ability is huge. I changed a table name and everything broke because measures reference the old name. Find and replace across the whole project fixed it in 10 seconds. I have the semantic folder with schema, relationships, DAX, and tables, and a report folder with the theme, pages, and visual properties. I don't have to open Desktop — I can do this in VS Code.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=2176s" target="_blank">36:16</a> There are things inside the semantic model you can't manage from Desktop. Perspectives, for example — they let you create curated custom views limiting which columns and measures are visible. Desktop has never supported creating or managing perspectives in its 10-year history. But in TMDL files, it's straightforward. Every time the semantic model gets an update, the TMDL format supports it by default. We're no longer reliant on Desktop.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=2473s" target="_blank">41:13</a> Annotations are another area — properties that exist inside columns or measures. SQLBI's Bravo uses annotations to tag date tables so its DAX patterns can consistently find them across any model. You can only really see annotations inside the semantic model files. There's a whole world of automation and programming under annotations that most people never touch.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=2538s" target="_blank">42:18</a> Do you need to learn the TMDL language? It's pretty easy, but honestly, the last two months I haven't been writing much code manually. I've been using Copilot and agents in VS Code — the amount of code produced has been extensive but I haven't actually written a lot of it myself. If you're going to get the most out of TMDL and VS Code, you really need to invest in Copilot.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=2636s" target="_blank">43:56</a> This starts with the agent concept. VS Code and Cursor both have custom instructions — in Cursor it's a .cursor/rules folder, in VS Code it's copilot custom instructions. I write what I want the agent to know: its objective, who it is (an expert at TMDL, Power BI), and importantly — before editing anything, write your plan to a log folder for my approval. I also feed it the Microsoft TMDL documentation so it knows the syntax.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=2736s" target="_blank">45:36</a> Example: I wanted business-friendly descriptions for every measure. I gave the agent context about the report folder too, so it could see where measures appear in visuals. In about 15 seconds, over 35 measures had detailed, context-aware descriptions. This has never been possible with any tool before.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3001s" target="_blank">50:01</a> Here's the one that's been the holy grail for the Power BI community — finding what's unused in your model. How many tools have tried to evaluate what measures, columns, or tables are being used in both the model and the report? It's been almost impossible because external tools could only touch the semantic model, not cross-reference with report visuals and filters. Enter Copilot. I write custom instructions: go through the entire semantic model, check if it's used in any dependencies, business logic, visuals, or filters. Write a log file categorizing everything. Then delete the unused ones. For the first time in 10 years, I can accomplish this in 30 seconds.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3166s" target="_blank">52:46</a> I'm flabbergasted by how well large language models work. You need to know enough to verify what they write, but these models have been trained on every bit of SQL, Python, React, and programming code ever written. I could never learn that much. The knowledge they have around programming is astronomical.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3262s" target="_blank">54:22</a> Microsoft had the right vision — the world needs millions more apps built by more people. But the implementation wasn't Power Apps. Since large language models came out, there's been no talk of low-code, no-code solutions anymore. You can now draw a wireframe, send it to an LLM, and say build this. Microsoft was 100% right about the vision but had the wrong tooling. It was large language models driving this, not Power Apps.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3359s" target="_blank">55:59</a> I'm teaching my son programming this summer — MIT free courses for Python, and then learning to use large language models alongside the code. Not just understanding code but using AI in concert with writing it. If you understand divs, flexboxes, how websites are built, you can use LLMs to prompt and change things. This is going to greatly shift how people use Power BI, Fabric, and VS Code.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3459s" target="_blank">57:39</a> Fabric is heavy developer, but code isn't scary when you have a large language model to explain it to you. You don't have to be a Python expert to write a user-defined function anymore. There's a skill around prompting and getting the right results — it's becoming part of the Venn diagram of BI skills alongside engineering and visualization.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3556s" target="_blank">59:16</a> I pay for GitHub Copilot with agent mode turned on. With that subscription you get Claude 3.5 Sonnet, Claude 3.7, Gemini 2.5 Pro, OpenAI GPT 4.1, 4.0, and o4 Mini. You can also bolt on Azure-hosted models with API keys. There's a new public GitHub repo for Power BI prompts — no prompts in there yet, so Tommy's tasked with adding the first ones.

<a href="https://www.youtube.com/watch?v=Y-U5Os2mvk8&t=3723s" target="_blank">62:03</a> Thank you so much for listening. We hope you found value in us unpacking VS Code, TMDL, the history, and how large language models are assisting us in developing semantic models. If you like this episode, recommend it to somebody else. Find us on Apple, Spotify, or wherever you get your podcast. Subscribe and leave a rating. Have a question or topic? Head to powerbi.tips/podcast. Join us live every Tuesday and Thursday, 7:30 AM Central.
