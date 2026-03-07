---
title: "C# Scripting in TE vs TMDL View – Ep. 396"
date: "2025-02-07"
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
  - "Tabular Editor"
  - "C#"
  - "PBIP"
  - "Source Control"
  - "Developer Mode"
  - "Power BI Desktop"
excerpt: "Mike and Tommy compare the classic Tabular Editor workflow—C# scripting, macros, and model metadata automation—with the newer TMDL-based experience showing up in PBIP and Power BI’s TMDL view. They break down where TMDL makes collaboration and source control dramatically better, and where Tabular Editor still earns its place in a serious semantic model toolbelt."
featuredImage: "./assets/featured.png"
---

Mike and Tommy compare the classic Tabular Editor workflow—C# scripting, macros, and model metadata automation—with the newer TMDL-based experience showing up in PBIP and Power BI’s TMDL view. They break down where TMDL makes collaboration and source control dramatically better, and where Tabular Editor still earns its place in a serious semantic model toolbelt.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/AIjYRO4RdTI" 
  title="C# Scripting in TE vs TMDL View - Ep.396 - Power BI tips"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- [Introducing enhanced conversation with Microsoft Fabric Copilot and AI Skill (Preview)](https://blog.fabric.microsoft.com/blog/introducing-enhanced-conversation-with-microsoft-fabric-copilot-preview/?WT.mc_id=DP-MVP-5002621#) — Microsoft shared updates to how Fabric Copilot (and AI Skill chat) can store prompts and chat history to improve response quality and keep better context across conversations. The post also highlights a tenant setting for cross-geo data storage that can be required outside the US/EU, and clarifies that the stored conversation history isn’t used to train Microsoft models (and can be deleted by users).

- [Microsoft Fabric Copilot to write DAX queries in Power BI update](https://powerbi.microsoft.com/blog/microsoft-fabric-copilot-to-write-dax-queries-in-power-bi-update/?WT.mc_id=DP-MVP-5002621) — Copilot for DAX Query View can now use more semantic-model context like descriptions, synonyms, and column sample values to write better DAX queries. The big takeaway: investing time in model documentation (descriptions/synonyms) now directly improves both human usability and Copilot accuracy.

- [Submit a topic idea / mailbag](https://bit.ly/3i8LdBo) — Have a question you want covered on the show? Drop it in the mailbag form—episodes are best when they start with real-world scenarios.

- [Subscribe to the podcast](https://powerbi.tips/podcast) — One hub page to catch the live stream and find Spotify/Apple links to listen later.

- [Tips+ Theme Generator](https://bit.ly/3Ymso48) — Generate consistent Power BI themes quickly so your team can stop hand-tweaking colors and fonts across reports.

## Main Discussion: C# Scripting in Tabular Editor vs TMDL View

With TMDL showing up more and more in the Power BI developer workflow (PBIP projects, Git integration, and the new TMDL view in Desktop), Mike and Tommy step back and ask the practical question: **when should you still reach for Tabular Editor + C# scripts, and when does a TMDL-first workflow win?**

### Why TMDL changes the “source control” conversation

TMDL (Tabular Model Definition Language) pushes semantic model definitions into a clean, text-based, folder structure. That seemingly simple change unlocks a bunch of developer-grade benefits:

- **Readable diffs and reviewable changes** (instead of opaque model updates)
- **Better merge conflict behavior** when multiple people touch a model
- **A path toward “treat the model like code”** workflows in VS Code and pull requests

Microsoft also calls out that Fabric Git integration is expected to shift from exporting TMSL to exporting **TMDL** over time—so learning TMDL now is an investment that should pay off as the ecosystem stabilizes.

- [Announcing general availability of Tabular Model Definition Language (TMDL)](https://powerbi.microsoft.com/en-us/blog/announcing-general-availability-of-tabular-model-definition-language-tmdl/) — TMDL is now GA, with continued investments planned for VS Code tooling, serialization control, and eventually TMDL commands (similar to TMSL commands) that can be executed against the XMLA endpoint.

### Where Tabular Editor still shines

Even with TMDL improving the “model as files” experience, Tabular Editor remains a powerhouse for semantic model development—especially when you want to automate repetitive metadata tasks.

In the episode, Mike and Tommy emphasize that Tabular Editor’s strengths show up when you need to:

- **Generate or refactor at scale** (measures, calculation groups, display folders, format strings)
- **Apply consistent patterns** across many tables/columns/measures
- **Run scripting-based automation** with guardrails and repeatability

Practically speaking, they frame it as: **TMDL improves collaboration and transparency**, while **Tabular Editor improves speed and bulk-edit capability**.

### Workflow framing: “tools, files, and the skill split”

One of the more useful parts of the conversation is how they frame the human side of these tools:

- TMDL makes it more approachable for teams that already live in git, PRs, and code reviews.
- Tabular Editor scripting rewards people comfortable with object models and programmatic refactoring.

The likely future is not “either/or”—it’s a workflow where teams can use **both**, depending on the task and the skill set of the person making the change.

### Bonus: scripting beyond the model (report layer)

The broader theme of the episode is automation—and that includes what’s happening on the report side too. Tommy highlights that the direction of Power BI developer mode and file-based projects creates opportunities to script “things that used to be click-only.”

- [C# Scripting the report layer with Tabular Editor](https://www.esbrina-ba.com/c-scripting-the-report-layer-with-tabular-editor/) — A deep dive into leveraging the newer PBIR report format (developer mode) plus C# to programmatically create/modify report elements. It’s an early signal of where Power BI projects are headed: more granular files, more schema stability, and more automation potential (with the usual preview caveats).

## Looking Forward

TMDL going GA is a big signal: Power BI semantic models are moving toward a more developer-native workflow—where changes are reviewable, testable, and versionable. But as Mike and Tommy point out, there’s still plenty of room for Tabular Editor in the toolchain—especially for the high-leverage, automation-heavy work that teams do when they’re standardizing modeling patterns.

If you’re building a team workflow today, the practical play is to start getting comfortable with **both**: use TMDL/PBIP to level up collaboration in git, and use Tabular Editor scripting to move fast (and safely) when you need bulk changes.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=32s" target="_blank">0:32</a> good morning everyone and welcome back
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=32s" target="_blank">0:32</a> good morning everyone and welcome back to the explicit measur podcast with Mike
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=34s" target="_blank">0:34</a> to the explicit measur podcast with Mike
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=34s" target="_blank">0:34</a> to the explicit measur podcast with Mike and Tommy hello good morning oh good
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=37s" target="_blank">0:37</a> and Tommy hello good morning oh good
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=37s" target="_blank">0:37</a> and Tommy hello good morning oh good morning Mike how you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=38s" target="_blank">0:38</a> morning Mike how you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=38s" target="_blank">0:38</a> morning Mike how you doing well have you ever had those weeks
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=42s" target="_blank">0:42</a> doing well have you ever had those weeks
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=42s" target="_blank">0:42</a> doing well have you ever had those weeks where you underestimated how much work
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=44s" target="_blank">0:44</a> where you underestimated how much work
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=44s" target="_blank">0:44</a> where you underestimated how much work it was for things I feel like I do that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=47s" target="_blank">0:47</a> it was for things I feel like I do that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=47s" target="_blank">0:47</a> it was for things I feel like I do that all the time but is it like every day
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=49s" target="_blank">0:49</a> all the time but is it like every day
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=49s" target="_blank">0:49</a> all the time but is it like every day for you it feels like that sometimes
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=53s" target="_blank">0:53</a> for you it feels like that sometimes
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=53s" target="_blank">0:53</a> for you it feels like that sometimes well this week I was trying to rebuild
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=55s" target="_blank">0:55</a> well this week I was trying to rebuild
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=55s" target="_blank">0:55</a> well this week I was trying to rebuild some of my existing content for training
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=56s" target="_blank">0:56</a> some of my existing content for training
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=56s" target="_blank">0:56</a> some of my existing content for training pieces which it all went well training's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=58s" target="_blank">0:58</a> pieces which it all went well training's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=58s" target="_blank">0:58</a> pieces which it all went well training's gone well I have some the last is today
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=61s" target="_blank">1:01</a> gone well I have some the last is today
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=61s" target="_blank">1:01</a> gone well I have some the last is today so I'm got the content built it's done
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=64s" target="_blank">1:04</a> so I'm got the content built it's done
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=64s" target="_blank">1:04</a> so I'm got the content built it's done it's ready to go I think it went well
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=66s" target="_blank">1:06</a> it's ready to go I think it went well
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=66s" target="_blank">1:06</a> it's ready to go I think it went well but man I thought I had it more together
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=68s" target="_blank">1:08</a> but man I thought I had it more together
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=68s" target="_blank">1:08</a> but man I thought I had it more together than I did and I was like yeah I'm good
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=69s" target="_blank">1:09</a> than I did and I was like yeah I'm good
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=69s" target="_blank">1:09</a> than I did and I was like yeah I'm good I got a lot of things prepared and I've
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=70s" target="_blank">1:10</a> I got a lot of things prepared and I've
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=70s" target="_blank">1:10</a> I got a lot of things prepared and I've been up like late every night just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=73s" target="_blank">1:13</a> been up like late every night just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=73s" target="_blank">1:13</a> been up like late every night just preparing and cleaning and making new
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=75s" target="_blank">1:15</a> preparing and cleaning and making new
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=75s" target="_blank">1:15</a> preparing and cleaning and making new slides and like H it's been very good
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=78s" target="_blank">1:18</a> slides and like H it's been very good
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=78s" target="_blank">1:18</a> slides and like H it's been very good very rewarding but I just I'm exhausted
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=81s" target="_blank">1:21</a> very rewarding but I just I'm exhausted
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=81s" target="_blank">1:21</a> very rewarding but I just I'm exhausted dude I'm sorry to hear that I I know
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=84s" target="_blank">1:24</a> dude I'm sorry to hear that I I know
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=84s" target="_blank">1:24</a> dude I'm sorry to hear that I I know what you mean there's a lot of coffee in
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=87s" target="_blank">1:27</a> what you mean there's a lot of coffee in
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=87s" target="_blank">1:27</a> what you mean there's a lot of coffee in my house right now in my office that I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=89s" target="_blank">1:29</a> my house right now in my office that I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=89s" target="_blank">1:29</a> my house right now in my office that I have myess machine and I was saying it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=91s" target="_blank">1:31</a> have myess machine and I was saying it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=91s" target="_blank">1:31</a> have myess machine and I was saying it's a good and bad thing that it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=93s" target="_blank">1:33</a> a good and bad thing that it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=93s" target="_blank">1:33</a> a good and bad thing that it's here so yes I agree with you so let me
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=96s" target="_blank">1:36</a> here so yes I agree with you so let me
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=96s" target="_blank">1:36</a> here so yes I agree with you so let me let me
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=98s" target="_blank">1:38</a> let me
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=98s" target="_blank">1:38</a> let me I have my coffee machine here as well
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=100s" target="_blank">1:40</a> I have my coffee machine here as well
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=100s" target="_blank">1:40</a> I have my coffee machine here as well at my house so mine's sadly upstairs I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=103s" target="_blank">1:43</a> at my house so mine's sadly upstairs I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=103s" target="_blank">1:43</a> at my house so mine's sadly upstairs I have to go upstairs to go get it but
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=104s" target="_blank">1:44</a> have to go upstairs to go get it but
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=104s" target="_blank">1:44</a> have to go upstairs to go get it but before we do that so we're talk about
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=106s" target="_blank">1:46</a> before we do that so we're talk about
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=106s" target="_blank">1:46</a> before we do that so we're talk about news and things let's just give you the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=107s" target="_blank">1:47</a> news and things let's just give you the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=107s" target="_blank">1:47</a> news and things let's just give you the main topic for today our main topic
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=109s" target="_blank">1:49</a> main topic for today our main topic
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=109s" target="_blank">1:49</a> main topic for today our main topic today is going to talk about C scripting
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=111s" target="_blank">1:51</a> today is going to talk about C scripting
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=111s" target="_blank">1:51</a> today is going to talk about C scripting in tabular editor te as we like to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=114s" target="_blank">1:54</a> in tabular editor te as we like to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=114s" target="_blank">1:54</a> in tabular editor te as we like to abbreviate the names versus using tmdl
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=117s" target="_blank">1:57</a> abbreviate the names versus using tmdl
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=117s" target="_blank">1:57</a> abbreviate the names versus using tmdl or timel View and I'm actually going to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=120s" target="_blank">2:00</a> or timel View and I'm actually going to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=120s" target="_blank">2:00</a> or timel View and I'm actually going to throw in a a little bit of Dax quer
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=122s" target="_blank">2:02</a> throw in a a little bit of Dax quer
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=122s" target="_blank">2:02</a> throw in a a little bit of Dax quer review as well because I'm loving these
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=123s" target="_blank">2:03</a> review as well because I'm loving these
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=123s" target="_blank">2:03</a> review as well because I'm loving these two tools that are now solely inside
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=126s" target="_blank">2:06</a> two tools that are now solely inside
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=126s" target="_blank">2:06</a> two tools that are now solely inside desktop so that's our main topic for
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=128s" target="_blank">2:08</a> desktop so that's our main topic for
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=128s" target="_blank">2:08</a> desktop so that's our main topic for today let's go talk about some news
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=131s" target="_blank">2:11</a> today let's go talk about some news
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=131s" target="_blank">2:11</a> today let's go talk about some news real quick here before we get going on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=132s" target="_blank">2:12</a> real quick here before we get going on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=132s" target="_blank">2:12</a> real quick here before we get going on the podcast all right Tomy what are you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=134s" target="_blank">2:14</a> the podcast all right Tomy what are you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=134s" target="_blank">2:14</a> the podcast all right Tomy what are you finding what's what's the news happening
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=136s" target="_blank">2:16</a> finding what's what's the news happening
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=136s" target="_blank">2:16</a> finding what's what's the news happening so we have some two great powerbi
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=139s" target="_blank">2:19</a> so we have some two great powerbi
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=139s" target="_blank">2:19</a> so we have some two great powerbi updates and curious with the blog do you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=142s" target="_blank">2:22</a> updates and curious with the blog do you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=142s" target="_blank">2:22</a> updates and curious with the blog do you think they're going to combine the two
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=144s" target="_blank">2:24</a> think they're going to combine the two
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=144s" target="_blank">2:24</a> think they're going to combine the two and the fabric blog and powerbi blog
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=146s" target="_blank">2:26</a> and the fabric blog and powerbi blog
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=146s" target="_blank">2:26</a> and the fabric blog and powerbi blog into one because I'm going to a lot of
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=148s" target="_blank">2:28</a> into one because I'm going to a lot of
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=148s" target="_blank">2:28</a> into one because I'm going to a lot of different places all right it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=150s" target="_blank">2:30</a> different places all right it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=150s" target="_blank">2:30</a> different places all right it's confusing to have two of them honestly I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=153s" target="_blank">2:33</a> confusing to have two of them honestly I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=153s" target="_blank">2:33</a> confusing to have two of them honestly I get that they are separate tools and I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=154s" target="_blank">2:34</a> get that they are separate tools and I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=154s" target="_blank">2:34</a> get that they are separate tools and I think even the community is pushing back
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=156s" target="_blank">2:36</a> think even the community is pushing back
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=156s" target="_blank">2:36</a> think even the community is pushing back a little bit I've just read some
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=157s" target="_blank">2:37</a> a little bit I've just read some
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=157s" target="_blank">2:37</a> a little bit I've just read some articles who just been like why
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=158s" target="_blank">2:38</a> articles who just been like why
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=158s" target="_blank">2:38</a> articles who just been like why are we trying to make fabrick everything
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=160s" target="_blank">2:40</a> are we trying to make fabrick everything
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=160s" target="_blank">2:40</a> are we trying to make fabrick everything that powerbi is but Microsoft just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=162s" target="_blank">2:42</a> that powerbi is but Microsoft just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=162s" target="_blank">2:42</a> that powerbi is but Microsoft just recently announced I thought I just saw
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=164s" target="_blank">2:44</a> recently announced I thought I just saw
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=164s" target="_blank">2:44</a> recently announced I thought I just saw a couple tweets and or Microsoft
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=167s" target="_blank">2:47</a> a couple tweets and or Microsoft
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=167s" target="_blank">2:47</a> a couple tweets and or Microsoft earnings call that Microsoft powerbi has
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=171s" target="_blank">2:51</a> earnings call that Microsoft powerbi has
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=171s" target="_blank">2:51</a> earnings call that Microsoft powerbi has 30 million monthly viewer users every
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=174s" target="_blank">2:54</a> 30 million monthly viewer users every
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=174s" target="_blank">2:54</a> 30 million monthly viewer users every month I was like Wow Tommy we chose the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=177s" target="_blank">2:57</a> month I was like Wow Tommy we chose the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=177s" target="_blank">2:57</a> month I was like Wow Tommy we chose the right career to be in this in a growing
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=179s" target="_blank">2:59</a> right career to be in this in a growing
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=179s" target="_blank">2:59</a> right career to be in this in a growing space where they have that many users
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=181s" target="_blank">3:01</a> space where they have that many users
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=181s" target="_blank">3:01</a> space where they have that many users who need help with things that's like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=182s" target="_blank">3:02</a> who need help with things that's like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=182s" target="_blank">3:02</a> who need help with things that's like that's a pretty substantial number dude
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=186s" target="_blank">3:06</a> that's a pretty substantial number dude
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=186s" target="_blank">3:06</a> that's a pretty substantial number dude that's we have a lot of more people to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=188s" target="_blank">3:08</a> that's we have a lot of more people to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=188s" target="_blank">3:08</a> that's we have a lot of more people to reach that's what that's what that means
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=191s" target="_blank">3:11</a> reach that's what that's what that means
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=191s" target="_blank">3:11</a> reach that's what that's what that means well this is me even years ago when we
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=193s" target="_blank">3:13</a> well this is me even years ago when we
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=193s" target="_blank">3:13</a> well this is me even years ago when we when I was just starting to do teaching
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=195s" target="_blank">3:15</a> when I was just starting to do teaching
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=195s" target="_blank">3:15</a> when I was just starting to do teaching about stuff I always I kept forget I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=196s" target="_blank">3:16</a> about stuff I always I kept forget I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=196s" target="_blank">3:16</a> about stuff I always I kept forget I kept thinking like everyone should know
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=198s" target="_blank">3:18</a> kept thinking like everyone should know
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=198s" target="_blank">3:18</a> kept thinking like everyone should know powerbi I've been doing it everyone else
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=199s" target="_blank">3:19</a> powerbi I've been doing it everyone else
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=199s" target="_blank">3:19</a> powerbi I've been doing it everyone else should know it but I keep remembering
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=201s" target="_blank">3:21</a> should know it but I keep remembering
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=201s" target="_blank">3:21</a> should know it but I keep remembering like powerbi has been out for like what
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=203s" target="_blank">3:23</a> like powerbi has been out for like what
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=203s" target="_blank">3:23</a> like powerbi has been out for like what 10 years now and now people are still
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=205s" target="_blank">3:25</a> 10 years now and now people are still
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=205s" target="_blank">3:25</a> 10 years now and now people are still just getting started with powerbi right
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=206s" target="_blank">3:26</a> just getting started with powerbi right
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=206s" target="_blank">3:26</a> just getting started with powerbi right now I can't I couldn't imagine just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=209s" target="_blank">3:29</a> now I can't I couldn't imagine just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=209s" target="_blank">3:29</a> now I can't I couldn't imagine just starting with powerb right now I'm
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=211s" target="_blank">3:31</a> starting with powerb right now I'm
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=211s" target="_blank">3:31</a> starting with powerb right now I'm looking at it I'm doing this class I'm
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=212s" target="_blank">3:32</a> looking at it I'm doing this class I'm
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=212s" target="_blank">3:32</a> looking at it I'm doing this class I'm teaching right now there's a lot of
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=214s" target="_blank">3:34</a> teaching right now there's a lot of
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=214s" target="_blank">3:34</a> teaching right now there's a lot of things to learn like Dax where to write
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=216s" target="_blank">3:36</a> things to learn like Dax where to write
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=216s" target="_blank">3:36</a> things to learn like Dax where to write things I have Dax quer viiew
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=218s" target="_blank">3:38</a> things I have Dax quer viiew
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=218s" target="_blank">3:38</a> things I have Dax quer viiew I've updated my this is one of the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=219s" target="_blank">3:39</a> I've updated my this is one of the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=219s" target="_blank">3:39</a> I've updated my this is one of the reasons why I updated my training
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=221s" target="_blank">3:41</a> reasons why I updated my training
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=221s" target="_blank">3:41</a> reasons why I updated my training material I wanted to include timle
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=223s" target="_blank">3:43</a> material I wanted to include timle
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=223s" target="_blank">3:43</a> material I wanted to include timle editor and Dax query view because these
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=226s" target="_blank">3:46</a> editor and Dax query view because these
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=226s" target="_blank">3:46</a> editor and Dax query view because these are really good experiences for like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=229s" target="_blank">3:49</a> are really good experiences for like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=229s" target="_blank">3:49</a> are really good experiences for like automating and making multiple changes
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=231s" target="_blank">3:51</a> automating and making multiple changes
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=231s" target="_blank">3:51</a> automating and making multiple changes all at once way different than it used
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=233s" target="_blank">3:53</a> all at once way different than it used
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=233s" target="_blank">3:53</a> all at once way different than it used to be I think we we're the tool is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=235s" target="_blank">3:55</a> to be I think we we're the tool is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=235s" target="_blank">3:55</a> to be I think we we're the tool is getting very very very powerful nowadays
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=238s" target="_blank">3:58</a> getting very very very powerful nowadays
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=238s" target="_blank">3:58</a> getting very very very powerful nowadays no I 100% and so I think with that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=241s" target="_blank">4:01</a> no I 100% and so I think with that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=241s" target="_blank">4:01</a> no I 100% and so I think with that number just means that we need to expand
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=244s" target="_blank">4:04</a> number just means that we need to expand
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=244s" target="_blank">4:04</a> number just means that we need to expand our audience so if if everyone
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=246s" target="_blank">4:06</a> our audience so if if everyone
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=246s" target="_blank">4:06</a> our audience so if if everyone knows five people that's the Kevin Bacon
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=248s" target="_blank">4:08</a> knows five people that's the Kevin Bacon
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=248s" target="_blank">4:08</a> knows five people that's the Kevin Bacon effect yeah and then we'll eventually
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=250s" target="_blank">4:10</a> effect yeah and then we'll eventually
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=250s" target="_blank">4:10</a> effect yeah and then we'll eventually get to everyone knowing the powerbi our
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=253s" target="_blank">4:13</a> get to everyone knowing the powerbi our
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=253s" target="_blank">4:13</a> get to everyone knowing the powerbi our wonderful podcast that nobody listens to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=255s" target="_blank">4:15</a> wonderful podcast that nobody listens to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=255s" target="_blank">4:15</a> wonderful podcast that nobody listens to we probably have like less than one than
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=257s" target="_blank">4:17</a> we probably have like less than one than
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=257s" target="_blank">4:17</a> we probably have like less than one than 0.1% of the population listening to the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=259s" target="_blank">4:19</a> 0.1% of the population listening to the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=259s" target="_blank">4:19</a> 0.1% of the population listening to the podcast at this point so tell your
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=261s" target="_blank">4:21</a> podcast at this point so tell your
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=261s" target="_blank">4:21</a> podcast at this point so tell your friends about the explicit M podcast
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=263s" target="_blank">4:23</a> friends about the explicit M podcast
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=263s" target="_blank">4:23</a> friends about the explicit M podcast this is talking about one of the most
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=265s" target="_blank">4:25</a> this is talking about one of the most
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=265s" target="_blank">4:25</a> this is talking about one of the most prolific and popular bi tools in the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=268s" target="_blank">4:28</a> prolific and popular bi tools in the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=268s" target="_blank">4:28</a> prolific and popular bi tools in the world so let your friends know that this
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=271s" target="_blank">4:31</a> world so let your friends know that this
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=271s" target="_blank">4:31</a> world so let your friends know that this is a good waste of your time for an hour
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=273s" target="_blank">4:33</a> is a good waste of your time for an hour
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=273s" target="_blank">4:33</a> is a good waste of your time for an hour exactly
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=276s" target="_blank">4:36</a> exactly
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=276s" target="_blank">4:36</a> exactly exactly so my friends the first article
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=279s" target="_blank">4:39</a> exactly so my friends the first article
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=279s" target="_blank">4:39</a> exactly so my friends the first article we had speaking of which is has to do
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=282s" target="_blank">4:42</a> we had speaking of which is has to do
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=282s" target="_blank">4:42</a> we had speaking of which is has to do with co-pilot and all the co-pilot
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=284s" target="_blank">4:44</a> with co-pilot and all the co-pilot
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=284s" target="_blank">4:44</a> with co-pilot and all the co-pilot Updates this is introducing enhanced
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=288s" target="_blank">4:48</a> Updates this is introducing enhanced
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=288s" target="_blank">4:48</a> Updates this is introducing enhanced conversations Microsoft co-pilot and of
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=291s" target="_blank">4:51</a> conversations Microsoft co-pilot and of
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=291s" target="_blank">4:51</a> conversations Microsoft co-pilot and of course slash preview any
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=294s" target="_blank">4:54</a> course slash preview any
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=294s" target="_blank">4:54</a> course slash preview any Improvement is what a better improvement
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=296s" target="_blank">4:56</a> Improvement is what a better improvement
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=296s" target="_blank">4:56</a> Improvement is what a better improvement over what you had I even have my
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=298s" target="_blank">4:58</a> over what you had I even have my
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=298s" target="_blank">4:58</a> over what you had I even have my shirt on today does co-pilot told me to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=300s" target="_blank">5:00</a> shirt on today does co-pilot told me to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=300s" target="_blank">5:00</a> shirt on today does co-pilot told me to say it
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=303s" target="_blank">5:03</a> say it
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=303s" target="_blank">5:03</a> say it yeah great choice how fitting how
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=305s" target="_blank">5:05</a> yeah great choice how fitting how
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=305s" target="_blank">5:05</a> yeah great choice how fitting how fitting so this actually has to do with
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=309s" target="_blank">5:09</a> fitting so this actually has to do with
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=309s" target="_blank">5:09</a> fitting so this actually has to do with just a better functionality for
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=312s" target="_blank">5:12</a> just a better functionality for
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=312s" target="_blank">5:12</a> just a better functionality for accuracy and the chat and context and I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=316s" target="_blank">5:16</a> accuracy and the chat and context and I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=316s" target="_blank">5:16</a> accuracy and the chat and context and I think you're seeing all these other
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=317s" target="_blank">5:17</a> think you're seeing all these other
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=317s" target="_blank">5:17</a> think you're seeing all these other tools with context becoming more and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=318s" target="_blank">5:18</a> tools with context becoming more and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=318s" target="_blank">5:18</a> tools with context becoming more and more of a bigger thing sure that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=321s" target="_blank">5:21</a> more of a bigger thing sure that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=321s" target="_blank">5:21</a> more of a bigger thing sure that simply with co-pilot you're going to be
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=323s" target="_blank">5:23</a> simply with co-pilot you're going to be
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=323s" target="_blank">5:23</a> simply with co-pilot you're going to be able to enable this additional context
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=326s" target="_blank">5:26</a> able to enable this additional context
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=326s" target="_blank">5:26</a> able to enable this additional context so not a whole ton on features and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=329s" target="_blank">5:29</a> so not a whole ton on features and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=329s" target="_blank">5:29</a> so not a whole ton on features and seeing it yet they're just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=330s" target="_blank">5:30</a> seeing it yet they're just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=330s" target="_blank">5:30</a> seeing it yet they're just that it's on the way okay but I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=333s" target="_blank">5:33</a> that it's on the way okay but I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=333s" target="_blank">5:33</a> that it's on the way okay but I think it's the like Microsoft now has on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=336s" target="_blank">5:36</a> think it's the like Microsoft now has on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=336s" target="_blank">5:36</a> think it's the like Microsoft now has on their AI Foundry like deep seek and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=339s" target="_blank">5:39</a> their AI Foundry like deep seek and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=339s" target="_blank">5:39</a> their AI Foundry like deep seek and all everything else so they're like oh I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=341s" target="_blank">5:41</a> all everything else so they're like oh I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=341s" target="_blank">5:41</a> all everything else so they're like oh I wonder if we can integrate that so more
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=343s" target="_blank">5:43</a> wonder if we can integrate that so more
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=343s" target="_blank">5:43</a> wonder if we can integrate that so more context for my data
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=345s" target="_blank">5:45</a> context for my data
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=345s" target="_blank">5:45</a> context for my data please I will I will say this you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=347s" target="_blank">5:47</a> please I will I will say this you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=347s" target="_blank">5:47</a> please I will I will say this copilot is interesting of the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=350s" target="_blank">5:50</a> know copilot is interesting of the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=350s" target="_blank">5:50</a> know copilot is interesting of the places that I like to use copilot I'm
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=351s" target="_blank">5:51</a> places that I like to use copilot I'm
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=351s" target="_blank">5:51</a> places that I like to use copilot I'm going to talk about copilot as a general
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=353s" target="_blank">5:53</a> going to talk about copilot as a general
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=353s" target="_blank">5:53</a> going to talk about copilot as a general item I think co-pilot is deceiving a
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=356s" target="_blank">5:56</a> item I think co-pilot is deceiving a
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=356s" target="_blank">5:56</a> item I think co-pilot is deceiving a little bit because it's like there's a
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=357s" target="_blank">5:57</a> little bit because it's like there's a
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=357s" target="_blank">5:57</a> little bit because it's like there's a powerbi co-pilot there's like the fabric
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=359s" target="_blank">5:59</a> powerbi co-pilot there's like the fabric
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=359s" target="_blank">5:59</a> powerbi co-pilot there's like the fabric co-pilot there is a co-pilot for office
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=362s" target="_blank">6:02</a> co-pilot there is a co-pilot for office
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=362s" target="_blank">6:02</a> co-pilot there is a co-pilot for office like they're all they're all co-pilot
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=365s" target="_blank">6:05</a> like they're all they're all co-pilot
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=365s" target="_blank">6:05</a> like they're all they're all co-pilot but obviously the code is not the same
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=366s" target="_blank">6:06</a> but obviously the code is not the same
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=366s" target="_blank">6:06</a> but obviously the code is not the same for all of them right it has to be more
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=368s" target="_blank">6:08</a> for all of them right it has to be more
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=368s" target="_blank">6:08</a> for all of them right it has to be more contextually aware of like what's going
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=370s" target="_blank">6:10</a> contextually aware of like what's going
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=370s" target="_blank">6:10</a> contextually aware of like what's going on in the places that I find co-pilot is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=372s" target="_blank">6:12</a> on in the places that I find co-pilot is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=372s" target="_blank">6:12</a> on in the places that I find co-pilot is most effective for me it's has been
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=374s" target="_blank">6:14</a> most effective for me it's has been
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=374s" target="_blank">6:14</a> most effective for me it's has been always inside the notebooks writing code
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=377s" target="_blank">6:17</a> always inside the notebooks writing code
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=377s" target="_blank">6:17</a> always inside the notebooks writing code co-pilots are really good and I really
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=379s" target="_blank">6:19</a> co-pilots are really good and I really
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=379s" target="_blank">6:19</a> co-pilots are really good and I really enjoy that part of the experience so
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=381s" target="_blank">6:21</a> enjoy that part of the experience so
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=381s" target="_blank">6:21</a> enjoy that part of the experience so anyways I'll just point out like they're
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=383s" target="_blank">6:23</a> anyways I'll just point out like they're
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=383s" target="_blank">6:23</a> anyways I'll just point out like they're talking about co-pilot for data
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=384s" target="_blank">6:24</a> talking about co-pilot for data
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=384s" target="_blank">6:24</a> talking about co-pilot for data engineering and data science yeah 100% I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=387s" target="_blank">6:27</a> engineering and data science yeah 100% I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=387s" target="_blank">6:27</a> engineering and data science yeah 100% I when I'm writing code or asking it how
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=389s" target="_blank">6:29</a> when I'm writing code or asking it how
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=389s" target="_blank">6:29</a> when I'm writing code or asking it how do I write a python function can create
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=391s" target="_blank">6:31</a> do I write a python function can create
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=391s" target="_blank">6:31</a> do I write a python function can create a a class how do I create a class it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=394s" target="_blank">6:34</a> a a class how do I create a class it's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=394s" target="_blank">6:34</a> a a class how do I create a class it's spoton it's really good so that in that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=396s" target="_blank">6:36</a> spoton it's really good so that in that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=396s" target="_blank">6:36</a> spoton it's really good so that in that regard I I really like copil still
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=399s" target="_blank">6:39</a> regard I I really like copil still
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=399s" target="_blank">6:39</a> regard I I really like copil still jury's out about everything else with
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=401s" target="_blank">6:41</a> jury's out about everything else with
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=401s" target="_blank">6:41</a> jury's out about everything else with co-pilot and powerbi I haven't I've
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=404s" target="_blank">6:44</a> co-pilot and powerbi I haven't I've
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=404s" target="_blank">6:44</a> co-pilot and powerbi I haven't I've tried a couple times it wasn't too
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=406s" target="_blank">6:46</a> tried a couple times it wasn't too
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=406s" target="_blank">6:46</a> tried a couple times it wasn't too impressive it did some things that were
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=408s" target="_blank">6:48</a> impressive it did some things that were
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=408s" target="_blank">6:48</a> impressive it did some things that were helpful but and where I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=412s" target="_blank">6:52</a> helpful but and where I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=412s" target="_blank">6:52</a> helpful but and where I think what open AI just released what is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=415s" target="_blank">6:55</a> think what open AI just released what is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=415s" target="_blank">6:55</a> think what open AI just released what is it their their
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=416s" target="_blank">6:56</a> it their their
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=416s" target="_blank">6:56</a> it their their actions so they have they have two
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=419s" target="_blank">6:59</a> actions so they have they have two
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=419s" target="_blank">6:59</a> actions so they have they have two things they have their deep research or
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=421s" target="_blank">7:01</a> things they have their deep research or
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=421s" target="_blank">7:01</a> things they have their deep research or their which is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=423s" target="_blank">7:03</a> their which is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=423s" target="_blank">7:03</a> their which is basically or the O3 model which is just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=426s" target="_blank">7:06</a> basically or the O3 model which is just
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=426s" target="_blank">7:06</a> basically or the O3 model which is just basically that like the reasoning and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=428s" target="_blank">7:08</a> basically that like the reasoning and
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=428s" target="_blank">7:08</a> basically that like the reasoning and thinking right but then the other thing
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=430s" target="_blank">7:10</a> thinking right but then the other thing
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=430s" target="_blank">7:10</a> thinking right but then the other thing is the operator you might be talking
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=431s" target="_blank">7:11</a> is the operator you might be talking
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=431s" target="_blank">7:11</a> is the operator you might be talking about that's what I'm talking about okay
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=433s" target="_blank">7:13</a> about that's what I'm talking about okay
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=433s" target="_blank">7:13</a> about that's what I'm talking about okay so I think for me my my personal
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=436s" target="_blank">7:16</a> so I think for me my my personal
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=436s" target="_blank">7:16</a> so I think for me my my personal preference here is I I was
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=438s" target="_blank">7:18</a> preference here is I I was
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=438s" target="_blank">7:18</a> preference here is I I was calling this about a year ago saying
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=439s" target="_blank">7:19</a> calling this about a year ago saying
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=439s" target="_blank">7:19</a> calling this about a year ago saying like AI is good but just giving me like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=442s" target="_blank">7:22</a> like AI is good but just giving me like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=442s" target="_blank">7:22</a> like AI is good but just giving me like reasoning and thinking like that's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=444s" target="_blank">7:24</a> reasoning and thinking like that's
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=444s" target="_blank">7:24</a> reasoning and thinking like that's somewhat helpful I can use it to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=446s" target="_blank">7:26</a> somewhat helpful I can use it to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=446s" target="_blank">7:26</a> somewhat helpful I can use it to start my ideas about a topic or
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=447s" target="_blank">7:27</a> start my ideas about a topic or
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=447s" target="_blank">7:27</a> start my ideas about a topic or something I want to write about
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=450s" target="_blank">7:30</a> something I want to write about
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=450s" target="_blank">7:30</a> something I want to write about where I find AI has been really useful
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=452s" target="_blank">7:32</a> where I find AI has been really useful
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=452s" target="_blank">7:32</a> where I find AI has been really useful for me is in the generative space right
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=454s" target="_blank">7:34</a> for me is in the generative space right
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=454s" target="_blank">7:34</a> for me is in the generative space right generating images backgrounds things are
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=455s" target="_blank">7:35</a> generating images backgrounds things are
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=455s" target="_blank">7:35</a> generating images backgrounds things are not copyright protected like that's huge
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=457s" target="_blank">7:37</a> not copyright protected like that's huge
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=457s" target="_blank">7:37</a> not copyright protected like that's huge for me so having stuff like that is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=459s" target="_blank">7:39</a> for me so having stuff like that is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=459s" target="_blank">7:39</a> for me so having stuff like that is massively improving what I work with
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=463s" target="_blank">7:43</a> massively improving what I work with
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=463s" target="_blank">7:43</a> massively improving what I work with but when I start having the agents or
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=466s" target="_blank">7:46</a> but when I start having the agents or
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=466s" target="_blank">7:46</a> but when I start having the agents or the the co-pilot when I can tell
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=468s" target="_blank">7:48</a> the the co-pilot when I can tell
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=468s" target="_blank">7:48</a> the the co-pilot when I can tell co-pilot to align all my visuals when I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=470s" target="_blank">7:50</a> co-pilot to align all my visuals when I
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=470s" target="_blank">7:50</a> co-pilot to align all my visuals when I can tell co-pilot to switch out all the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=473s" target="_blank">7:53</a> can tell co-pilot to switch out all the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=473s" target="_blank">7:53</a> can tell co-pilot to switch out all the pie charts for bar charts and remove the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=475s" target="_blank">7:55</a> pie charts for bar charts and remove the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=475s" target="_blank">7:55</a> pie charts for bar charts and remove the title axes like right that's to me that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=478s" target="_blank">7:58</a> title axes like right that's to me that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=478s" target="_blank">7:58</a> title axes like right that's to me that when the action part of it when the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=480s" target="_blank">8:00</a> when the action part of it when the
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=480s" target="_blank">8:00</a> when the action part of it when the operator version of co-pilot comes out
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=482s" target="_blank">8:02</a> operator version of co-pilot comes out
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=482s" target="_blank">8:02</a> operator version of co-pilot comes out that we can start operating on reports
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=484s" target="_blank">8:04</a> that we can start operating on reports
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=484s" target="_blank">8:04</a> that we can start operating on reports and having it do multiple actions on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=486s" target="_blank">8:06</a> and having it do multiple actions on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=486s" target="_blank">8:06</a> and having it do multiple actions on things I think that's where I'm going to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=488s" target="_blank">8:08</a> things I think that's where I'm going to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=488s" target="_blank">8:08</a> things I think that's where I'm going to really start finding value from co-pilot
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=490s" target="_blank">8:10</a> really start finding value from co-pilot
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=490s" target="_blank">8:10</a> really start finding value from co-pilot so I don't I don't think we're there yet
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=491s" target="_blank">8:11</a> so I don't I don't think we're there yet
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=491s" target="_blank">8:11</a> so I don't I don't think we're there yet I I'm really hoping that that's where we
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=493s" target="_blank">8:13</a> I I'm really hoping that that's where we
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=493s" target="_blank">8:13</a> I I'm really hoping that that's where we eventually land but just as a an
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=495s" target="_blank">8:15</a> eventually land but just as a an
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=495s" target="_blank">8:15</a> eventually land but just as a an outsider looking at that's where I'd
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=496s" target="_blank">8:16</a> outsider looking at that's where I'd
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=496s" target="_blank">8:16</a> outsider looking at that's where I'd like to see it go no I I'm a thousand
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=499s" target="_blank">8:19</a> like to see it go no I I'm a thousand
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=499s" target="_blank">8:19</a> like to see it go no I I'm a thousand per with you just make that integration
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=502s" target="_blank">8:22</a> per with you just make that integration
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=502s" target="_blank">8:22</a> per with you just make that integration if it was as seamless as the GitHub
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=504s" target="_blank">8:24</a> if it was as seamless as the GitHub
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=504s" target="_blank">8:24</a> if it was as seamless as the GitHub co-pilot was oh my goodness would that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=508s" target="_blank">8:28</a> co-pilot was oh my goodness would that
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=508s" target="_blank">8:28</a> co-pilot was oh my goodness would that be incredible for us right because
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=510s" target="_blank">8:30</a> be incredible for us right because
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=510s" target="_blank">8:30</a> be incredible for us right because you use the copil fabric and it's fine
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=514s" target="_blank">8:34</a> you use the copil fabric and it's fine
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=514s" target="_blank">8:34</a> you use the copil fabric and it's fine it's fine but compared to actually using
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=518s" target="_blank">8:38</a> it's fine but compared to actually using
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=518s" target="_blank">8:38</a> it's fine but compared to actually using the like the GitHub integration we like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=519s" target="_blank">8:39</a> the like the GitHub integration we like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=519s" target="_blank">8:39</a> the like the GitHub integration we like hey I can take any repositor I can take
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=524s" target="_blank">8:44</a> hey I can take any repositor I can take
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=524s" target="_blank">8:44</a> hey I can take any repositor I can take any package it doesn't matter what it is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=526s" target="_blank">8:46</a> any package it doesn't matter what it is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=526s" target="_blank">8:46</a> any package it doesn't matter what it is give it to the co-pilot in GitHub
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=529s" target="_blank">8:49</a> give it to the co-pilot in GitHub
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=529s" target="_blank">8:49</a> give it to the co-pilot in GitHub like a repo which repos and we've talked
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=532s" target="_blank">8:52</a> like a repo which repos and we've talked
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=532s" target="_blank">8:52</a> like a repo which repos and we've talked about this it's like hey could you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=535s" target="_blank">8:55</a> about this it's like hey could you
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=535s" target="_blank">8:55</a> about this it's like hey could basically take a look at this
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=536s" target="_blank">8:56</a> know basically take a look at this
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=536s" target="_blank">8:56</a> know basically take a look at this what's broken what can I do how do I use
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=538s" target="_blank">8:58</a> what's broken what can I do how do I use
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=538s" target="_blank">8:58</a> what's broken what can I do how do I use it why can we do that if we have tinle
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=541s" target="_blank">9:01</a> it why can we do that if we have tinle
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=541s" target="_blank">9:01</a> it why can we do that if we have tinle context yeah yes and I think I I feel
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=544s" target="_blank">9:04</a> context yeah yes and I think I I feel
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=544s" target="_blank">9:04</a> context yeah yes and I think I I feel like I saw Alex power say something like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=546s" target="_blank">9:06</a> like I saw Alex power say something like
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=546s" target="_blank">9:06</a> like I saw Alex power say something like co-pilot now has the ability to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=548s" target="_blank">9:08</a> co-pilot now has the ability to
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=548s" target="_blank">9:08</a> co-pilot now has the ability to read descriptions of measures and names
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=551s" target="_blank">9:11</a> read descriptions of measures and names
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=551s" target="_blank">9:11</a> read descriptions of measures and names and names of measures and a little bit
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=552s" target="_blank">9:12</a> and names of measures and a little bit
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=552s" target="_blank">9:12</a> and names of measures and a little bit more context around what's going on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=554s" target="_blank">9:14</a> more context around what's going on
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=554s" target="_blank">9:14</a> more context around what's going on there I think I think that's where we're
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=556s" target="_blank">9:16</a> there I think I think that's where we're
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=556s" target="_blank">9:16</a> there I think I think that's where we're going to go though like I think this is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=558s" target="_blank">9:18</a> going to go though like I think this is
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=558s" target="_blank">9:18</a> going to go though like I think this is going to emphasize more of the point

### [00:09:20](https://youtu.be/AIjYRO4RdTI?t=560)
going to emphasize more of the point that you need well documented models you need more context about what's happening in the model and I think co-pilot particularly as a gets closer and closer to like now it can see maybe it can write see daxer viiew queries maybe it can see timle maybe it can see all the descriptions out of the measures and things that makes more sense it's going to push us to make sure we when we certify a data set or a semantic model we're going to be focusing more of our attention on getting the descriptions and everything populated into the model

### [00:09:51](https://youtu.be/AIjYRO4RdTI?t=591)
and everything populated into the model the model will be the documentation a yeah so I can't wait but and it's funny because we always talk about co-pilot to from the developer point of view and I I guess that makes sense but they're trying to build both sides of the coin like you have the AI skills I don't know if you've touched that yet I have not I don't I haven't really spent a lot of time getting in there I again I busy on things I've been I'm up late training people getting used getting started with powerbi I'm not I'm not having a lot of extra time to go

### [00:10:21](https://youtu.be/AIjYRO4RdTI?t=621)
not having a lot of extra time to go spend on agents I also don't have a lot of customers in my world asking me to help them build agents right so is the demand there not that I see for my customers so if a customer wants me to help figure something out they think it's valuable to them then maybe I'll spend some more time on it but right now I don't have time to I I'm still more just trying to get people started with powerbi getting them using the the regular powerbi interface and governing that part that's where we're struggling right now right now yeah we'll get there well speaking of more co-pilot updates something that has

### [00:10:53](https://youtu.be/AIjYRO4RdTI?t=653)
more co-pilot updates something that has to do with more code and this is the second update this is on the powerbi blog not the fabric Blog the other one that we're were talking about even though it was powerbi was on the fabric blog this is Microsoft fabric co-pilot to write queries in powerbi update it almost sounds like a New York Times title too rather than AI generated this is really cool and this is from our good friend Zoe So unless she's using a AI to generate

### [00:11:23](https://youtu.be/AIjYRO4RdTI?t=683)
unless she's using a AI to generate titles and said please make this read like a news headline or PR release I like this much better than then amazing change your world thing with our new settings update yeah exactly right so going back to what copilot does best is this is what I'm talking about yeah I just made the comment something about like this with this update right just scri skipping the object I knew I thought I heard it somewhere this is what it was descriptions are proper in the model synonyms are there and simple

### [00:11:53](https://youtu.be/AIjYRO4RdTI?t=713)
the model synonyms are there and simple value sample values all those now can be fed into the co-pilot to help you get answers that makes sense like that's the kind this this is what I was talking about yeah so this is this is pretty cool this is pretty awesome we and we just talked about this too in our announcements or we did our fabric draft about the descriptions and titles in one L catalog well holy crap you want to talk about generation you don't need know stinking script and custom code just ask copilot to help you look at

### [00:12:25](https://youtu.be/AIjYRO4RdTI?t=745)
just ask copilot to help you look at descriptions go through them also they also talked about synonyms too we've talked about a ton when it done and it's like that's a almost a daunting task for an individual to do to go through an entire model and it takes a lot of time for something you may not use co-pilot's got it so you can actually tell co-pilot to make the synonyms exactly that's that's the kind synonyms exactly that's that's the stuff that we're talking about this of stuff that we're talking about this is we're starting to get to the point where things are actionable

### [00:12:55](https://youtu.be/AIjYRO4RdTI?t=775)
where things are actionable right to me it it also feels like a point where we're imagine you wanted to do some documenting of your model you should be able to like pop open co-pilot and just say hey co-pilot docum my document my model by adding descriptions and synonyms for all my measures and columns and what it should come back with is like a menu a screen that says here's all the things that I think you should should add I've already pre-written everything for you just read them over do they make sense is am I right in what I've assumed about this information that would be really

### [00:13:26](https://youtu.be/AIjYRO4RdTI?t=806)
this information that would be really helpful that and that's exactly what we have because Mike I've gone through descriptions and been that person where you they want to use the chat feature and or even like the natural language feature with having the proper information there and it it's a lot of time to do if you want to get it right for something you may not be sure that it's going to be widely used and oh so this is a great way that copile will come in again going back to her point it doesn't necessarily have to

### [00:13:57](https://youtu.be/AIjYRO4RdTI?t=837)
her point it doesn't necessarily have to have the most perfect description off the bat for a lot of people as long something and then we can update we can prioritize it rather than looking at all blanks I I'll be very clear here I was in I was showing people how to use some of the AI visuals the two AI visuals that I like to use that Microsoft has produced is the decomposition tree which I think is pretty fantastic it's a it's a goodlook visual and it makes with a little bit of clicking around it makes sense immediately what you're doing with it like oh it's decompressing or

### [00:14:27](https://youtu.be/AIjYRO4RdTI?t=867)
like oh it's decompressing or decomposing this single number into all the different parts of that number where do it break down great makes total sense the other one I was giving an example around was the Q&A the Q&A Visual and so I was showing the settings of the Q&A visual which is where you can like do all the extra things right add the synonyms add the the terms add the descriptions like all the other things you need to do to make the natural Q&A better for users and my

### [00:14:58](https://youtu.be/AIjYRO4RdTI?t=898)
natural Q&A better for users and my guidance was like look you guys are just starting out in powerbi don't worry about this right now right don't use the Q&A visual because it just gives so many not different but it gives it gives such a a broad spectrum of results that I feel like when I've used Q&A in the past I've gotten frustrated because I in my mind had I know what I want and the AI wasn't able to I wasn't able to speak to the AI or type in words the right way to the AI to tell it how to get the visual back out right so we weren't

### [00:15:28](https://youtu.be/AIjYRO4RdTI?t=928)
visual back out right so we weren't quite there yet so I said look hold off first get good at getting your data together your first stage of powerbi is just automate everything get some solid semantic models done get people using the tool teach them how to use the filter Paine right here's the pain points we typically see people having start there once you have really good working models and they're being used a lot now let's introduce Q&A on top of them so to me it's like not a phase one thing it's like a phase two or three thing where I'm going to really dive in and use the Q&A

### [00:16:00](https://youtu.be/AIjYRO4RdTI?t=960)
and use the Q&A visuals yeah I can't wait to see where this goes and honestly this is the really cool stuff that I'm I'm happy with with co-pilot and this is all going to be in powerbi desktop too right if I'm not mistaken I believe the images they're showing is powerbi desktop and all this okay so but the trick is like you have to have something so this is this is the episode we had a a couple weeks ago where Adam Saxon jumped in and got us

### [00:16:31](https://youtu.be/AIjYRO4RdTI?t=991)
where Adam Saxon jumped in and got us got our hopes up with gy a cube and then immediately dashed them halfway through the episode where we were like oh co-pilot can be used on F2 SKS like on a smaller skew you can use it wherever you want because my my developers may want to use co-pilot like if we're if we're finding all this value in like adding descriptions and adding measures and synonyms like if it's a timesaver now it's worth my effort to use these tools use copal to help me save time like that's that's worth to me I guess the question would be is how much is how

### [00:17:02](https://youtu.be/AIjYRO4RdTI?t=1022)
question would be is how much is your time Worth right at that point if you're doing a lot of documentation on models is it worth 20 bucks a month are you saving a couple hours of your time using these things maybe we're getting probably are you probably are but it would require like so it's the idea of like if I'm making lots of semantic models then makes sense to use this but if you did one model and you're done it doesn't make sense to keep co- pilot on forever and ever because you don't need it all the time oh my gosh and it to and also too if some of it's just going through code

### [00:17:33](https://youtu.be/AIjYRO4RdTI?t=1053)
some of it's just going through code right if if I'm just going through either the timle queries that's really just text at that point no you wouldn't have to connect to connect to anything theoretically so theoretically if I'm looking you're talking I don't have to connect to anything what are you talking about what is I don't have to connect to a fat like a fabric Model if I'm looking at timle okay really it's all text right like I don't need to have a connection to the fabric

### [00:18:03](https://youtu.be/AIjYRO4RdTI?t=1083)
need to have a connection to the fabric service and look at the semantic model that way all the information is available in the timle are you just talking about like what you're trying to prompt the co-pilot with yeah so let's say I wanted like give me a summary I'm looking at everything in Tindle and I have that available and I'm in power by desktop well I say hey add descript to everything well it doesn't have it shouldn't have to go to the fabric

### [00:18:34](https://youtu.be/AIjYRO4RdTI?t=1114)
shouldn't have to go to the fabric service look at that model and grab the

### [00:18:37](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1117s)
**Speaker:** service look at that model and grab the information if it's already on desktop information if it's already on desktop in timle and text in the text format in timle and text in the text format right like there's no what information right like there's no what information would it need to get so that should what would it need to get so that should what I'm trying to say is that request I'm trying to say is that request shouldn't be that large on your For shouldn't be that large on your For Your Capacity okay you're saying Your Capacity okay you're saying something yeah so because something yeah so because basically right you don't have to go basically right you don't have to go look at rows of data you're only looking look at rows of data you're only looking at the metadata yeah but you're at the metadata yeah but you're the copad doesn't run on your machine the copad doesn't run on your machine there's no the model regardless if it's there's no the model regardless if it's local the model doesn't come down to local the model doesn't come down to desktop it doesn't run there so you're

### [00:19:08](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1148s)
**Speaker:** desktop it doesn't run there so you're always going to use some version of always going to use some version of compute on Microsoft where I compute on Microsoft where I think things maybe get a little more think things maybe get a little more interesting here is what if interesting here is what if someone lets you use timle like you have someone lets you use timle like you have the desktop you can get timle down I the desktop you can get timle down I don't really understand your mean I don't really understand your point here very much you're going point here very much you're going to have to connect to the service at to have to connect to the service at some level you're going to have to get some level you're going to have to get the model down anyways the co-pilot the model down anyways the co-pilot runs in the service regardless what I runs in the service regardless what I think we're finding though is that think we're finding though is that Microsoft is getting more efficient on Microsoft is getting more efficient on the models like deep seek came

### [00:19:39](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1179s)
**Speaker:** the models like deep seek came out and now we have models that can run out and now we have models that can run at a fraction of the cost right so yeah at a fraction of the cost right so yeah obviously Microsoft and open AI are obviously Microsoft and open AI are going to pick up on that immediately and going to pick up on that immediately and start ripping that off and start making start ripping that off and start making models that are third of the price to models that are third of the price to run and train like this all this is run and train like this all this is going to do is just going to make the going to do is just going to make the whole economy more efficient whole the whole economy more efficient and yes DC came out and and yes DC came out and like I thought it would take out like a like I thought it would take out like a trillion dollars of capital that came a trillion dollars of capital that came out like it just you wiped out a ton of out like it just you wiped out a ton of money from these big companies but I

### [00:20:10](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1210s)
**Speaker:** money from these big companies but I think all this is going to do is going think all this is going to do is going to add competition now and these big to add competition now and these big companies will now have to make their companies will now have to make their models faster more efficient and this is models faster more efficient and this is all this is doing is making co-pilots or all this is doing is making co-pilots or AI agents or whatever you want to call AI agents or whatever you want to call them more like a commodity it's going to them more like a commodity it's going to be the same thing be the same thing as everything else we use we take for as everything else we use we take for granted right computers electricity granted right computers electricity water like all these things that you water like all these things that you just consume so much of it because you just consume so much of it because you it's easy to get it that's what AI is it's easy to get it that's what AI is going to be doing AI is going to get so going to be doing AI is going to get so efficient and easy that everyone's going efficient and easy that everyone's going to want to use it it's going to be to want to use it it's going to be interesting this will be the next

### [00:20:43](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1243s)
**Speaker:** interesting this will be the next couple years I think are going to be couple years I think are going to be really interesting to see what happens really interesting to see what happens here any other topics we want to cover here any other topics we want to cover before we get into our main topic before we get into our main topic today I think we're good I'm excited to

### [00:20:55](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1255s)
**Tommy:** today I think we're good I'm excited to talk about this Mike all right well I'm talk about this Mike all right well I'm this second topic here talking this second topic here talking about like timle and how timle works about like timle and how timle works with co-pilot is very interesting to with co-pilot is very interesting to me it also is our main part of me it also is our main part of the topic today so I'm going to focus a the topic today so I'm going to focus a lot of our conversation on jumping into lot of our conversation on jumping into tabular editor so tab editor is

### [00:21:12](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1272s)
**Mike:** tabular editor so tab editor is something that you use Tommy to it's an something that you use Tommy to it's an advanced modeling tool for the pro advanced modeling tool for the pro developer I would argue and then we're developer I would argue and then we're going to see where does timle going to see where does timle fit and I'm also going to throw in here fit and I'm also going to throw in here Dax cor riew how do these different Dax cor riew how do these different tools help us and did timle just OB tools help us and did timle just OB solete tabular editor do we not need solete tabular editor do we not need tabular editor anymore I old statement tabular editor anymore I old statement let's unpack this Tommy give us some let's unpack this Tommy give us some a overview of what we're going a overview of what we're going to talk about for the main topic today to talk about for the main topic today yeah so really it's just with all the yeah so really it's just with all the announcements and updates to timle

### [00:21:43](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1303s)
**Mike:** announcements and updates to timle that's been going on I really I think that's been going on I really I think it's probably due time to actually it's probably due time to actually compare the timle way of scripting and compare the timle way of scripting and you because you've talked a ton about you because you've talked a ton about this in the automation compared to what this in the automation compared to what the only option was available which what the only option was available which was tablet editor and macros and scripts was tablet editor and macros and scripts C scripting and its C scripting and its finest now you can use them side by side finest now you can use them side by side but really they are different workflows but really they are different workflows and you're kind you're dealing with and you're kind you're dealing with data in a different way you're

### [00:22:14](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1334s)
**Mike:** data in a different way you're dealing with different files so to speak dealing with different files so to speak one's tablet editor 3 one's still one's tablet editor 3 one's still going through the metadata of a model of going through the metadata of a model of a Bim Tims all this new language and a Bim Tims all this new language and it's much more structured against it's much more structured against something you'd be using vs code something you'd be using vs code you can open a timle project in power you can open a timle project in power or taable editor totally fine but again or taable editor totally fine but again when it comes to what I can actually do when it comes to what I can actually do once I'm looking at code versus tabl once I'm looking at code versus tabl editor really I think a few things we editor really I think a few things we wanted to discuss today is this coming

### [00:22:46](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1366s)
**Mike:** wanted to discuss today is this coming of timle you like where do you see it of timle you like where do you see it what do you see that its benefits are what do you see that its benefits are better than the previous Enterprise better than the previous Enterprise workflows that are out there where does workflows that are out there where does tablet still fit in or where I guess tablet still fit in or where I guess timle would not necessarily compete with timle would not necessarily compete with and then how do we see this coming into and then how do we see this coming into the future where do I need to know both the future where do I need to know both and like how the skill and like how the skill levels are do they split up the type of levels are do they split up the type of person so really how are they person so really how are they going to play together so I think it's

### [00:23:18](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1398s)
**Mike:** going to play together so I think it's really due time to talk about automation really due time to talk about automation with the two coding or tools that we with the two coding or tools that we now have available to us timle and now have available to us timle and preview and tablet editor preview and tablet editor three or two as well but CP macros three or two as well but CP macros yeah I'm going to be honest with yeah I'm going to be honest with you Tommy I don't like writing C just you Tommy I don't like writing C just point blank like if you think point blank like if you think about the accessibility of these two about the accessibility of these two different tools like tmdl easy to read I different tools like tmdl easy to read I can clearly understand what's happening can clearly understand what's happening in the semantic model with timle so

### [00:23:48](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1428s)
**Mike:** in the semantic model with timle so already to me I'm already putting in the already to me I'm already putting in the camp of timle editor or timle view it's camp of timle editor or timle view it's already got a win in my book it's already got a win in my book it's timle editor is made for easy use timle editor is made for easy use with the semantic model and where do with the semantic model and where do I use a semantic model I'm using it in I use a semantic model I'm using it in desktop I'm building things directly desktop I'm building things directly there I'm making changes to things I got there I'm making changes to things I got to be honest I was I've been teaching to be honest I was I've been teaching this class this this class this week and we've had dax's quer week and we've had dax's quer riew for a while now but I am heavily riew for a while now but I am heavily jumping into the D

### [00:24:21](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1461s)
**Mike:** heavily jumping into the D query view I'm writing queries I'm query view I'm writing queries I'm actually finding I like the experience actually finding I like the experience of teaching new users about dimensions of teaching new users about dimensions and facts and making it easier for and facts and making it easier for people to use that information to write people to use that information to write out the measure in the evaluate out the measure in the evaluate statement now it's again it's a little statement now it's again it's a little bit different right but I can right bit different right but I can right click on an item in the click on an item in the scen scen navigation and then automatically I get navigation and then automatically I get the definition of the measure I can the definition of the measure I can right click and have a dummy measure right click and have a dummy measure populated for me that I can go modify

### [00:24:52](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1492s)
**Mike:** populated for me that I can go modify just change the name of things which is just change the name of things which is awesome but then I was moving awesome but then I was moving measures between data models and if you measures between data models and if you if your movie measures between models if your movie measures between models that's a pain it's a big pain but now that's a pain it's a big pain but now you can do it with a couple clicks you you can do it with a couple clicks you can script everything out from one from can script everything out from one table all the measures copy the code one table all the measures copy the code go to a different model paste the code go to a different model paste the code and then with a one button press update and then with a one button press update it this is changing my workflow it this is changing my workflow on how I do things with writing measures on how I do things with writing measures so that's this interesting place that so that's this interesting place that you start right off the bat right when

### [00:25:24](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1524s)
**Mike:** you start right off the bat right when it comes to like copying things over it comes to like copying things over because that is available in the tablet because that is available in the tablet editor 3 interface just it's not we'll editor 3 interface just it's not we'll say as straightforward you can you say as straightforward you can you can actually create a Dax script yes can actually create a Dax script yes where that's copy paste and then find where that's copy paste and then find room place if you have table name you room place if you have table name you can click on the measures and say script can click on the measures and say script measures or script table right and measures or script table right and it does its version of like hey here's it does its version of like hey here's how to define this but again my argument how to define this but again my argument here is they're not using yaml they're here is they're not using yaml they're not using like a an easy to read not using like a an easy to read structure it's whatever

### [00:25:55](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1555s)
**Mike:** structure it's whatever Tabler editor's language is but again Tabler editor's language is but again I'll argue if you if the let's talk I'll argue if you if the let's talk about this the 30 million users that are about this the 30 million users that are showing up to powerbi to use it every showing up to powerbi to use it every day from Microsoft's earnings call right day from Microsoft's earnings call right if we have 30 million users what do you if we have 30 million users what do you think the portion of those users who think the portion of those users who know C are I would argue most of this is know C are I would argue most of this is business users so that's a very I don't business users so that's a very I don't know 5% 1% I don't know some small know 5% 1% I don't know some small number right it's not a line number right it's not a line share of those 30 million users people share of those 30 million users people are just showing up because they're are just showing up because they're trying to build reports connect to us

### [00:26:26](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1586s)
**Mike:** trying to build reports connect to us Excel files connect to things SharePoint Excel files connect to things SharePoint get it into reports get it in power.com get it into reports get it in power.com that's the majority of people I that's the majority of people I think are doing that work so if think are doing that work so if I look at that and say okay which tool I look at that and say okay which tool is easier for that is easier for that user Point Blank easier it's going to be user Point Blank easier it's going to be the timle view or the it's going to be the timle view or the Dax query view it's going to be easier I Dax query view it's going to be easier I don't want to write C so I think that to don't want to write C so I think that to me that's just a big ding against tab Ed me that's just a big ding against tab Ed at this point not that it isn't powerful at this point not that it isn't powerful listen yeah if you learn C and you can

### [00:26:57](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1617s)
**Mike:** listen yeah if you learn C and you can use it T editor yeah you're going to use it T editor yeah you're going to save a lot of time 100% no question save a lot of time 100% no question there it's just a matter of is the there it's just a matter of is the learning curve now too Steep and do I learning curve now too Steep and do I just want to use the actual desktop just want to use the actual desktop program and I think we're getting to a program and I think we're getting to a place where desktop's getting pretty place where desktop's getting pretty good so let's pause here because I good so let's pause here because I think the big focus is and I'm with think the big focus is and I'm with right with you with the c scripts I right with you with the c scripts I actually have always followed I want to actually have always followed I want to give a shout out to Bernard ago who give a shout out to Bernard ago who is maybe one of the coolest people in

### [00:27:29](https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1649s)
**Mike:** is maybe one of the coolest people in terms of writing CP scripts and I've terms of writing CP scripts and I've tried diving into him and replicating tried diving into him and replicating what he's done and like he said he what he's done and like he said he had to set up his own environment Visual had to set up his own environment Visual Studio I'm like I want to actually get Studio I'm like I want to actually get really good at this really good at this because what that would be basically be because what that would be basically be able to do for me but it's not easy able to do for me but it's not easy especially if like again especially if like again learning C is such a in a sense learning C is such a in a sense Advanced language as it is it's like

<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1677s" target="_blank">27:57</a> Advanced language as it is it's like that a lot of the stuff that I've done is quick modifications there's been a lot of times I've come on this podcast over the years where I'm was need deep into a c script and the podcast had to start and I'm like I just need to finish how to do this yeah and so yeah.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1695s" target="_blank">28:15</a> But a lot of people don't have that time well just simple things like let's let's just say I'm gonna I want to script out all my measures from the table and just see what the formatting of every measure is just look at it.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1706s" target="_blank">28:26</a> Do that in desktop right now you can't do it that only appears years in timle editor and it's literally again again it's the point of like the which where's the friction coming from right.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1716s" target="_blank">28:36</a> So on one hand if I am going to pay for tablet editor 3 I have to pay for it right on the other hand if I'm using tablet editor 2 it's free right but now I have to go into desktop I have to click on external tool I have to get the the tool open right okay not super friction filled but those are like three or four extra clicks yeah.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1736s" target="_blank">28:56</a> Now timle editor I just go to timle editor drag the table drop it in the window boom it just shows up ruie Ru is the PM for the Tim timle editing stuff and dude he's killing it.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1749s" target="_blank">29:09</a> He's he is a developer he knows what to build everything in that tool is just right it's done correctly so good I can't speak highly enough about it.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1759s" target="_blank">29:19</a> And it's interesting you talk about the replication right and because I'm going to share something about my own tablet editor environment and again I love it I use magros and everything all the time but it's important to note they're not synced anywhere.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1776s" target="_blank">29:36</a> Anywhere like I actually take my tablet or environment and basically have a g repo of it that I have a and again you want to talk about convoluted mic what I have to do because if I lost my macros I would I would lose myself.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1793s" target="_blank">29:53</a> I actually created a dang script and this was one of those like two in the morning things where it will actually look at the tablet edor macros copy them put them in a repo and then zip it up push it to a a private repo so just in case something were to happen I can always be in sync.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1809s" target="_blank">30:09</a> But that's it's very convoluted to do that because those macros I could not replicate because I don't know C now that I have them they're great but now to your point with timle you you got those scripts from like is that from Bernat that you got them from or you just found them from on the Internet or how' you get them.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1826s" target="_blank">30:26</a> One started as inspiration but this was my this was like a two-day three-day thing where I just didn't check email and I'm like I just wanted to get this it's actually really cool but yeah this was this was Tommy learning C which would meant Tommy was having a hard time learning C but it works.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1845s" target="_blank">30:45</a> But it's still eluded because but I don't understand you made these from you said you you made them some you you made them then I guess is what I'm asking yeah so someone had a script where they could just basically copy like macros from the like the local file I'm like I wonder if I could create something that would basically okay take all my settings yeah configured in a zip file so I have the latest date backup thing and so.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1870s" target="_blank">31:10</a> Then I can push that up and I can also use that same script if I go to another T like computer it will then push it to the like wherever TBL editor reads from so it's cool seamless but again it's the only thing that really table editor 3 is if you don't have those macros right like having the macros it's amazing the workflow without them it makes it really hard.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1901s" target="_blank">31:41</a> Compare that let's compare that to timle what you're saying here with the environment anyone can download vs code in that environment is pretty easy because that's when I'm using timle Mike where are you going to recommend people to go powerbi desktop in that view or the T the okay okay let's dive into that one.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1921s" target="_blank">32:01</a> So here's what here's what's happening desktop is eating into that Pro developer space a lot more than it used to be right these are things other I've heard the complaint from other companies right hey our company will allow us to use powerbi because Microsoft made it great we won't let you use third party tools because it's not sanctioned by Microsoft it's not secure we don't know who they are.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1941s" target="_blank">32:21</a> Right there's all kinds of reasons behind this right that's not our policy whatever fine that meant all the people who were using powerbi had their hand strapped to agree it it was a little bit less efficient for them to automate or do automation or repetitive things right.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1974s" target="_blank">32:54</a> I'm telling everyone right now when I used to communicate about powerb desktop I used to think about two different windows I don't really use the data view very much the table view is interesting but I don't really use it very much it's like looking at the information I couldn't write dacks on it I couldn't manipulate anything it didn't really do much right.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=1997s" target="_blank">33:17</a> So table view was in my opinion okay but I would talk about power VI desktop top as being here's the there's there's two things the desktop builds it builds the report side and it builds the semantic model that's and we can see that when we publish things to the service.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2009s" target="_blank">33:29</a> So I'd always communicate to people look desktop is building a single PB file but it's actually two components it's the semantic model and the report before I would only communicate about the model view about this is how we look at and view the model that's where we do most of our model work now well now we have Dax qu review and timle editor so now I have three Windows to help me design build shape look at the information that's there.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2029s" target="_blank">33:49</a> It's so much easier to read it's just it's much clearer everything is clearer and so and this also I think is an advantage for us as as powerbi developers any new feature Microsoft builds if they add something let's let's say they add this new cool feature inside the semantic model maybe they embed co-pilot as part of like I don't know configuring co-pilot inside the semantic model.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2051s" target="_blank">34:11</a> Any new feature they come up with can automatically be accessed through the timle editor the feature is there I'm not waiting on I don't have to wait on other tools like tab editor or yeah other like Bravo like they all these other tools you have to rely upon them to update themselves so they can use the latest features of the semantic model.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2064s" target="_blank">34:24</a> Well because timle is built into the tool as new features are released Microsoft themselves will make sure that that part of the tool is always going to work with these latest semantic model features or if they're building new semantic model features they're going to make sure that it works inside the timle editor because it's part of their tool.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2084s" target="_blank">34:44</a> So for that reason I think like it's it's going to be I'm I'm I'm finding as me personally I think desktop is becoming more and more the pro developer tool and not a beginner tool I think you're going to be able to start really pushing on people to build reports in the surface at a much higher rate I don't think you're going to need desktop as much anymore.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2111s" target="_blank">35:11</a> And again just all the things that I've seen from the product team almost all the things that are coming to desktop they're almost all going to make it to the service as well which is interesting to me that they're they're building these features in desktop first like timle editor you can use that in desktop but you can't use it the service there's no timle editor equivalent in the service yet I have suspicions that that will probably be a thing at some point in the future.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2137s" target="_blank">35:37</a> So as it seems as we transitioned into timle because again has the timle scripting it's we know it's going to be more collaborative I guess are you finding yourself really not opening Taver editor as much anymore.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2150s" target="_blank">35:50</a> I wasn't opening a ton to begin with I used it a couple times for some certain things like when I like where was I using T editor right I've got a really old analysis Services model that I've got to move into powerbi right I've got to script it out and figure out how to make like that's when I would use it I'd go after the Bim I could see the whole Bim everything was formatted very well great.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2170s" target="_blank">36:10</a> Let's imagine I wanted to to go to a semantic model and I wanted to get all the little tiny files out of it right I want to take the model and not have it just become a single Bim a Json file I want it broken out into small Json files that's what I would use Tabler editor for.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2187s" target="_blank">36:27</a> But now a lot of those very basic features I don't use it anymore unless you're so in tab editor if you're not doing Advanced things like writing scripts and consuming scripts and heavy automation I don't what else are you using in it no what what are you doing in there that you can't do in desktop so.
<a href="https://www.youtube.com/watch?v=AIjYRO4RdTI&t=2206s" target="_blank">36:46</a> So here's here's one of the arguments that I think I would make as much as the timle environment much more readable some people still like a user interface and I know you say powerbi desktop has one but let me let me make an argument here the ability to quickly edit items create items in a user interface is more efficient in table editor I would argue to quickly create a measure to quickly go through the properties I think.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
