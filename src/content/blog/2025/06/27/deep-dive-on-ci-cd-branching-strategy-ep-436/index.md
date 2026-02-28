---
title: "Deep Dive on CI/CD Branching Strategy – Ep. 436"
date: "2025-06-27"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "CI/CD"
  - "Git"
  - "Branching Strategy"
  - "DevOps"
  - "Microsoft Fabric"
  - "Source Control"
excerpt: "Mike, Tommy, and guest Mathias Thierbach unpack CI/CD branching strategies — Git Flow, GitHub Flow, GitLab Flow, and trunk-based development — exploring how they apply to Microsoft Fabric, the tooling gaps that remain, and practical advice for teams just getting started with source control."
featuredImage: "./assets/featured.png"
---

In Episode 436 of Explicit Measures, Mike and Tommy welcome back Mathias Thierbach for the fourth and final installment of their DevOps deep-dive series. This time, the conversation zeroes in on branching strategies — the different patterns teams use to manage parallel development, resolve conflicts, and ship code to production. They compare Git Flow, GitHub Flow, GitLab Flow, and trunk-based development, debate Microsoft's CI/CD documentation for Fabric, and give honest assessments of the tooling landscape.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/vBHYAUN4hxo" 
  title="Deep Dive on CI/CD Branching Strategy – Ep. 436"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

Before the main topic, Tommy highlights a new community project from Santosh R. — a Fabric Analytics MCP (Model Context Protocol) server that lets AI tools like Claude, Cursor, and VS Code interact directly with your Fabric environment.

- [Santosh R. – Fabric Analytics MCP on LinkedIn](https://www.linkedin.com/posts/thisissanthoshr_githubcopilot-microsoftfabric-analytics-activity-7343922198954356739-3dyR/) — Santosh shares his weekend vibe-coding project built with GitHub Copilot: a full MCP server for Microsoft Fabric. It offers CRUD operations for Fabric items, Livy API integration for Spark session management, real-time monitoring across workspaces, and enterprise authentication via MSAL (bearer tokens, service principals, device code flow). Tommy walks through the key features — plug-and-play Claude Desktop integration, comprehensive testing, and automatic token management. Mike breaks down his mental model of how MCPs work: you talk to Claude in natural language, Claude talks to the MCP running locally, and the MCP translates requests into Fabric API calls. The result? You can create lakehouses, manage notebooks, and monitor Spark jobs without leaving your AI tool of choice. Tommy adds examples from his own MCP toolkit — Windows CLI, sequential thinking, and Taskmaster — showing how MCPs extend agent capabilities beyond just API calls.

## Main Discussion: CI/CD Branching Strategies

The heart of the episode tackles a topic the hosts have received tons of questions about: what branching strategy should my team use? Mathias brings 20 years of development experience to the table, and the conversation moves from fundamentals to Fabric-specific challenges.

### What Is a Branch and Why Should You Care?

Mathias offers a memorable analogy: imagine a team of painters working on a massive mural. If you're solo, you paint directly on the main wall — every stroke is a commit to main. But with a team, each painter takes a complete copy of the painting into a separate room (a branch), makes their changes, then walks back to merge their work into the hallway painting everyone can see. Conflicts arise when two painters repaint the same corner — one using oil, the other watercolors. Someone has to decide which medium wins. Mike and Tommy riff on this, landing on three core reasons branching matters: collaboration, conflict detection, and resolution. Mathias adds that branching strategy is really about how many parallel rooms you allow, how long people stay isolated, and how often they come back to coordinate.

### Mike's Journey into Branching

Mike shares his evolution from solo PowerBI consultant to leading a team of app developers at Carlo Solutions. Starting with just main, he graduated to Azure Static Web Apps (where every branch gets its own build), then discovered the pain of integration testing across multiple developers. Mathias introduced him to the four major strategies — Git Flow, GitHub Flow, GitLab Flow, and trunk-based development — and Mike landed on trunk-based as his preference for Fabric work. He notes Microsoft's CI/CD documentation shows these patterns without naming them, which creates a knowledge gap for teams trying to learn.

### The Four Branching Strategies

Mathias positions the strategies on a complexity spectrum:

- **Git Flow** (most complex) — The 2010 classic with multiple permanent branches (develop, release, hotfix, main). Heavily overengineered by modern standards, requiring constant merging between branches. Mathias is glad the industry has moved on.
- **GitHub Flow** — Simpler: main branch plus short-lived feature branches, merged via pull requests. A good middle ground for many teams.
- **GitLab Flow** — Adds environment branches (staging, production) to the GitHub Flow model, bridging the gap between branching and deployment environments.
- **Trunk-based Development** (simplest) — In its strictest form, everyone commits directly to main. Viable only with robust CI/CD automation that catches problems before they hit production. In practice, most teams use short-lived feature branches that merge back quickly.

### Branches vs. Environments — Don't Mix Them Up

A critical distinction Mathias emphasizes: git branches and deployment environments are different things. Your branching strategy should align with your environments, but they don't have to mirror each other one-to-one. He recommends thinking backwards from production: How many environments do you need? What's your release cadence? What guardrails exist before something goes live? The answers determine your branching strategy, not the other way around.

For Fabric specifically, since you can't clone the platform locally, every developer needs at minimum a feature workspace. A typical enterprise setup might include: feature workspaces (private per developer) → dev workspace (integration) → staging (stakeholder review) → production.

### The Tooling Gap

The conversation gets candid about Fabric's CI/CD tooling. Mike describes what he wants: create a branch in GitHub and have everything — workspace, artifacts, data, pipeline wiring — automatically provisioned in the correct order. What he gets instead: a patchwork of PowerShell scripts, Python notebooks, and manual steps. Key frustrations include:

- **No diff visibility** — Fabric's git integration only tells you "this item changed," not what changed. You can't review before committing.
- **No deployment ordering** — Creating a workspace from a branch deploys items in arbitrary order, breaking dependencies (e.g., sub-pipelines needing parent GUIDs).
- **No data provisioning** — Microsoft's documentation says nothing about automatically loading data into feature environments.
- **No branch policies** — No native way to prevent direct pushes to main or enforce PR workflows within Fabric.

Mathias teases that his Navigator tool from Navadata addresses many of these gaps — automating workspace creation, artifact deployment, data loading, and testing from a single GitHub action.

### Minimum Viable Tooling (MVT)

For teams just getting started, the hosts recommend a crawl-walk-run approach:

1. **Start with backups** — Connect your workspace to git purely for version history. Just having a copy of your changes is a massive unlock.
2. **Set up dev and prod** — Use deployment pipelines for the simplest two-environment setup. Get comfortable with commits, reverts, and basic git operations.
3. **Get proper tooling** — VS Code or GitHub Desktop is essential. Don't rely solely on Fabric's web UI for source control management.
4. **Graduate to feature branches** — Once comfortable, adopt short-lived feature branches with pull requests for code review.
5. **Automate** — As your team matures, invest in CI/CD automation for workspace provisioning, testing, and deployment.

Tommy emphasizes learning the principles first — even just understanding the GitHub Flow pattern of dev and prod with feature branches will get you 80% of the way there.

## Looking Forward

Mathias announces a demo-heavy user group presentation on Fabric and PowerBI branching strategies at the PowerBI User Group Turkey on July 3rd, 2025 at 5:00 PM BST — showing what each strategy looks and feels like in practice. The hosts agree this topic needs at least two more hours and will return in future episodes. Their parting advice: start somewhere, define your environments and release cadence first, and don't let perfect be the enemy of good. As Mike puts it — every Fabric workspace of any importance should be attached to git, period.

## Transcript

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=0s" target="_blank">0:00</a> Welcome back everyone to the Explicit Measures podcast with Tommy and Mike. We're excited to have you all here.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=33s" target="_blank">0:33</a> We've got some great topics today. Our main topic — we even debated the title. We're going to talk about a deep dive on continuous integration, continuous deployment, CI/CD branching strategies. I know, riveting. We've gotten so many questions around what is a branching strategy and how does this fit my organization. I will admit when Tommy and I were working on this initially, I didn't realize there were different strategies or branching patterns you could use with CI/CD. Now that I know a little bit more, I can recognize these patterns and put a name to them.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=97s" target="_blank">1:37</a> This morning I was telling my wife about the idea of Git. It takes skill to explain it to someone who is not a developer. It's like okay, your Word file — what if you want to make a change and you didn't want that to go immediately to save for everyone? We have this idea called a commit. And I said, "After coffee, we'll talk about branches." And she's like, I'm good. We're done.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=161s" target="_blank">2:41</a> It's tough to find a real world analogy that works well inside the git branching space. It's a more advanced concept but very much needed in what we're doing.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=195s" target="_blank">3:15</a> Let's do a couple quick news items. Today Santosh, who's the gentleman working on top of the Fabric Spark experience, has announced something on LinkedIn. Oh man, we got some more MCPs — Model Context Protocol. This is another huge thing around the AI space. What Santosh has been able to develop is this Fabric Analytics MCP which allows Claude or those other tools to understand what's going on in your Fabric environment.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=296s" target="_blank">4:56</a> The tagline is chat with your Fabric's data and engineering workload. It's using APIs in the background, but for you, I can be in my AI tool of choice and say what's going on right now, or let's create a notebook. It's not going to pull up Fabric — it all happens through the interface you're in. I can be in Claude, in VS Code in a Git environment, and create something real time that shows up in your environment.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=364s" target="_blank">6:04</a> Key features: Complete CRUD for Fabric items. Livy API integration for Spark session and batch job management. Spark application monitoring across all workspaces. Claude Desktop ready with plug-and-play integration. Enterprise authentication via MSAL. Analytics and insights for monitoring dashboards. And automatic token management.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=429s" target="_blank">7:09</a> He started it as a weekend project with GitHub Copilot — vibe coded. I'm impressed. With vibe coding, we're going to see a lot more of these projects just turn into part of the actual product.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=495s" target="_blank">8:15</a> The fact that we're making headways with open authentication cannot be understated. If you've not heard of the Model Context Protocol or are still wary, this is the time to look into it.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=562s" target="_blank">9:22</a> In this whole MCP language, you're sending a prompt to an AI and the AI has context awareness of an API layer behind the scenes. The MCP runs on my local machine. We're giving control through the MCP to Claude — I talk to Claude, Claude talks to the MCP, MCP translates into API calls to the backend. To me as the front end observer, I'm just talking in natural language but it's getting translated a couple times.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=658s" target="_blank">10:58</a> Examples I use: Windows CLI MCP that runs command line operations on my behalf. Sequential Thinking that changes how the agent processes requests. Taskmaster that breaks work into tasks first. I can say "hey Taskmaster, create a notebook for X, Y, and Z" and it creates the task before doing anything.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=758s" target="_blank">12:38</a> We got to cut the AI conversation there. Let's get into our main topic — deep diving on CI/CD branching strategies.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=790s" target="_blank">13:10</a> Welcome back Mathias. We've gotten the most positive feedback for these last couple episodes around DevOps, data ops, and CI/CD. People are engaging with it. We've struck a chord — people want to learn more. They're being told they need to be using this and no one really has real information.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=856s" target="_blank">14:16</a> We've been looking at this for the last three episodes — data ops, DevOps, source control and how it mixes with development in Fabric and PowerBI. For a lot of you, maybe you're finally converted or maybe you just didn't have the knowledge on where to start.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=923s" target="_blank">15:23</a> It's not always the best idea to do everything in your main branch. Some of you have laughed. Today we're unpacking the technical process specifically around CI/CD branches and how it works from global universal best practices. Is there a different process around PowerBI and Fabric?

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=989s" target="_blank">16:29</a> Mathias, what the heck's a branch and why should I care? Good question. When I was listening to you earlier, I felt a challenge because you failed to come up with a good analogy for branching. I think I came up with one.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1022s" target="_blank">17:02</a> Imagine you're a painter rocking on a massive painting. If you're on your own, you're working directly on the final piece — every new stroke is basically a commit on main. Now if you want to collaborate with a team of painters, everyone has to work in a separate room where they take a complete clone of the current state of the painting.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1120s" target="_blank">18:40</a> At some point they walk back to the main hallway and replicate everything to the main one everyone can see. Those rooms are branches. What if two painters decided to repaint the roof at the same time? They'll have difficulties — that's how we get conflicts and need to resolve them.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1189s" target="_blank">19:49</a> Tommy's using oil paints, I'm using water-based. These will not mix. Someone's got to decide we all use the right paint together. The crucial aspects are conflict, collaboration, and resolution — those are the three things that make source control what it is.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1255s" target="_blank">20:55</a> Branching strategy is all about how many parallel rooms do I have, how long someone stays in isolation, how often they come out to coordinate. Do I have a staging area where changes are collated before going public?

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1293s" target="_blank">21:33</a> Every repository has a central or main branch — the public facing one. The problem is we paint on top of the wall everyone can see. What we're introducing today is no, go in your room — those are the other branches.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1359s" target="_blank">22:39</a> My company does a mix of app development and PowerBI consulting. We're moving more to app-based development. We started with a small team and grew. Now we have multiple people — multiple painters trying to create amazing applications.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1426s" target="_blank">23:46</a> We have to figure out how to work together. Who's building on what, how can someone jump in for a week or two then move to another project. I understood main being attached to your app — that's production. That's what we started with.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1461s" target="_blank">24:21</a> I got into Azure Static Web Apps where every branch gets a build. Do we need a permanent dev branch? You only get burned so many times. When you've got three or four people adding code, one person's work may conflict with another's.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1524s" target="_blank">25:24</a> Mathias introduced me to Git Flow, GitHub Flow, GitLab Flow, and trunk-based development. They all make sense when you look at them. Even Microsoft has a great page on CI/CD workflow options in Fabric, but nowhere do they call out these standardized workflows by name.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1621s" target="_blank">27:01</a> I feel like trunk-based development works best for my team inside Fabric. But you have to figure out for your team — understand what's out there, pick what makes sense. This is a maturity level too.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1653s" target="_blank">27:33</a> Git Flow is arguably the most complicated. Going back to 2010, there's a famous blog post — heavily overengineered with permanent branches and constant merging. I'm glad the world has moved on.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1720s" target="_blank">28:40</a> Git Flow on the complex end, trunk-based on the simple end — where you only have main and everyone commits directly. That's viable but only with really good CI/CD automation in place.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1790s" target="_blank">29:50</a> There's a difference between git branches and deployment environments — it's really important not to mix those up. You may use a branching strategy where a branch mirrors an environment, but you don't have to.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1821s" target="_blank">30:21</a> I like having main attached to dev. Everyone builds branches separately, puts everything back in main, then uses deployment pipelines to move through environments.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1852s" target="_blank">30:52</a> The forefather in PowerBI — we had a dev workspace and production workspace. We didn't want to push everything right away. Before deployment pipelines, we worked in development, showed stakeholders, then published to production. And it worked.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1920s" target="_blank">32:00</a> A lot of people could create two workspaces — development and production. That straightforward way is in its simplest sense what we're trying to do with branches. Whenever I kick off a new project, I always start thinking about environments — how many do we want to maintain?

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=1988s" target="_blank">33:08</a> Once we know the environments, then it follows which branching strategy we use. Branching strategy needs to align with environments. Think backwards — engineers build something that goes into production and adds value.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2054s" target="_blank">34:14</a> Two points: What's my release cadence? And what guardrails do I have for something to become production? If you're very agile with small frequent changes and low guardrails, you need production and maybe dev, nothing else.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2153s" target="_blank">35:53</a> But if you've got a product with huge financial impact needing thorough QA and stakeholder sign off, you need a staging environment. With Fabric, you can't clone it on your laptop — every developer needs a private workspace. Feature workspace, dev workspace, staging, then production.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2254s" target="_blank">37:34</a> It all depends on the type of project, how many parallel work streams, and whether you need external sign off.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2349s" target="_blank">39:09</a> The skill level in the BI space — not a lot of people know this stuff. There's a lot of education that has to happen. It feels very daunting for organizations. But it shouldn't be rocket science. We need to take the time to slow down to speed up.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2417s" target="_blank">40:17</a> If you explain the goals and define OKRs — like a release every week, 52 releases a year — that trickles down into how we do development.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2516s" target="_blank">41:56</a> We're not at a point yet where the failure to do git is like the failure to build a semantic model with facts and dimensions. This is still very niche. Should it be part of the universal workflow is a different question.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2620s" target="_blank">43:40</a> It's complicated because there are so many different ways to use Git. Git is just a really low-level toolbox — you can build a tiny toy or a mega city with not a lot of guardrails. Deciding how you collaborate as a team isn't something where you can just follow a textbook.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2724s" target="_blank">45:24</a> It's a space that's constantly evolving. Git Flow was the hot thing 15 years ago — now it's probably the last choice. If tooling doesn't support your process choices well, it's going to be a burden. Which is why I'm making a massive investment with Navigator to tackle exactly that.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2824s" target="_blank">47:04</a> Microsoft's option one — a separate branch for every environment. A permanent dev branch, test branch, prod branch with constant merging. That feels like Git Flow with multiple permanent branches.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2888s" target="_blank">48:08</a> Tooling today in the community is a collection of Python, notebooks, and PowerShell. If you just use what's in Fabric, you have nothing. If you want a prayer of managing branches, you need VS Code and an extension. There is no good interface to manage any of this.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=2954s" target="_blank">49:14</a> When I mentioned tooling, I was thinking about helping team members follow the process — creating branches, creating PRs. Fabric's git integration only tells you "this item has had changes." There's no diff. You won't see what's changed until after you've committed and pushed.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3061s" target="_blank">51:01</a> Good git practices are about meaningful, small, granular commits with good commit messages. If you can't even tell what the change is, things have broken down quite badly.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3160s" target="_blank">52:40</a> I want tooling for every aspect of managing my project. Plan environments at the beginning — what are they called, who has access, are they permanent or temporary. Then decide the branching strategy. In an ideal world, branching policies ensure your CI server rejects pushes to certain branches.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3226s" target="_blank">53:46</a> For each new piece of work, create a feature branch and keep it short-lived. Good naming conventions are part of the tooling. Clean up after yourself once a feature is merged — that branch gets removed everywhere. Without good tooling, you accrue lots of mess.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3327s" target="_blank">55:27</a> In Fabric you can click "create new workspace from branch." It creates the branch, creates a workspace, and tries to deploy everything — but there's no ordering, little to no control as a developer.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3426s" target="_blank">57:06</a> There are missing pieces causing friction. What's being used to solve it is PowerShell scripts and Python things mushed together. I want one tool — create a branch in GitHub and everything gets made, copied, wired correctly.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3521s" target="_blank">58:41</a> I want it like a microwave — put my branch in, set the timer, it dings when done and I have everything ready. Do I want virtualized data through shortcuts? Maybe I need real data — run this pipeline, copy last 3 months. We don't have that yet.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3624s" target="_blank">60:24</a> What's the MVP? The easiest place to get started is just backups — have a backup of your workspace. This is an unblocker for organizations. I need to be able to make changes and get a copy of whatever that change is.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3719s" target="_blank">61:59</a> Now with Git integration, just by turning on synchronization, I can easily get in and out of that workspace. Step one is the synchronization piece, then use deployment pipelines to go from dev to prod. Start easy.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3785s" target="_blank">63:05</a> Then there's another realm when you start getting into git. Mathias has built stuff in Navadata where you go to GitHub, create the branch, and everything's built for you — automation kicks off, deploys things, loads data, does tests.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3850s" target="_blank">64:10</a> The MVP is understand the principles and get your environment set up right the first time. Have GitHub Desktop or VS Code. Even just knowing GitHub Flow of dev and prod will get you understanding PR principles and concepts.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3918s" target="_blank">65:18</a> Get core principles down, do a test with dev and prod, get comfortable with commits and reverting. It's like getting ready for a marathon — focus on running, get the right shoes, then get into advanced features.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=3952s" target="_blank">65:52</a> Microsoft's CI/CD documentation — I don't really like any of those options. I don't want to write a lot of PowerShell or Python. I want the easy ability of saying this is my main branch, I can release with tags, push to production when I want, and developers can build environments with minimal friction.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=4052s" target="_blank">67:32</a> My final thought — just start somewhere. Talk about how many environments you need, what team functions you have, and what's your release cadence. Answer those questions first and it will help you align on process.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=4123s" target="_blank">68:43</a> In a week's time I'm doing a user group presentation on Fabric and PowerBI branching strategies — one hour, very demo-heavy. It's the PowerBI User Group Turkey, 5:00 PM GMT on Thursday the 3rd of July.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=4160s" target="_blank">69:20</a> Someone said in the chat this needs at least two hours. Couldn't be more true. Hopefully people found it thought-provoking and have some pointers for taking this further.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=4225s" target="_blank">70:25</a> If you're starting this journey, it was intimidating for me. Just get comfortable with the basics. Download VS Code, create a repository or clone one. It's so easy to get started. You don't have to be an expert — get started.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=4291s" target="_blank">71:31</a> You should not be standing up a Fabric workspace of any importance without attaching to git, period. From a career point of view, get yourself ahead. Thank you all very much for listening.

<a href="https://www.youtube.com/watch?v=vBHYAUN4hxo&t=4358s" target="_blank">72:38</a> You can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. If you have a question, head to powerbi.tips/podcast. Join us live every Tuesday and Thursday, 7:30 a.m. Central. We'll see you next time.

## Resources

- [pbi.tools — Release Branching Model for Power BI](https://pbi.tools/devops/release-branching-model/) — A detailed guide on applying release branching models specifically to Power BI projects, covering how git workflows map to report and dataset deployments.

- [AB Tasty — Git Branching Strategies](https://www.abtasty.com/blog/git-branching-strategies/) — A comprehensive overview comparing Git Flow, GitHub Flow, GitLab Flow, and trunk-based development with visual diagrams and pros/cons for each approach.

- [Merapar — Hello Serverless, Goodbye Git Flow](https://articles.merapar.com/hello-serverless-goodbye-git-flow) — An article exploring why modern serverless and cloud-native development patterns make Git Flow obsolete, advocating for simpler trunk-based approaches.

- [Santosh R. — Fabric Analytics MCP on LinkedIn](https://www.linkedin.com/posts/thisissanthoshr_githubcopilot-microsoftfabric-analytics-activity-7343922198954356739-3dyR/) — Santosh's announcement of the Fabric Analytics MCP server — a vibe-coded weekend project enabling Claude, Cursor, and VS Code to interact with Fabric environments via natural language.
