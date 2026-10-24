---
title: "Fabric Notebook Toolkit - Ep.571"
date: "2026-10-13"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Fabric Notebook Toolkit"
  - "Notebooks"
  - "Capacity metrics"
  - "Agent skills"
excerpt: "Microsoft's Fabric Notebook Toolkit lets an agent you already pay for drive notebooks from a CLI. Tommy Puglia and Mike Carlo treat the preview as a tool to learn, not a pattern to hand to every workspace."
featuredImage: "./assets/featured.png"
---

Notebooks are where a lot of Fabric work already happens, and agents are getting better at writing them. Tommy Puglia and Mike Carlo look at the Fabric Notebook Toolkit, a pre-release Python library that lets GitHub Copilot, Codex, or Claude Code run that work from the command line.

<iframe
  width="100%"
  height="415"
  src="https://www.youtube.com/embed/eH2NZRZHBuY"
  title="Fabric Notebook Toolkit - Ep.571 - Power BI tips"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## News & Announcements

- **[All About the Power BI / Fabric MCP](https://www.meetup.com/chicagolandpowerbi/events/316158533/?eventOrigin=group_upcoming_events)**. The Chicago user group on October 22 is still the MCP night: install the Fabric remote server and the local Power BI semantic-modeling MCP, then use them. Tommy's point on air is that the same MCP should show up in Claude Desktop, a Claude terminal, Copilot, and VS Code. RSVP with a full name.

- **[Why I built Skill Vault](https://promptingbi.com/2026/10/08/why-i-built-skill-vault/)**. Tommy's post is the origin of Skill Vault, the open-source app he built because skills were drifting. His desktop had 257 skills, his Dell 160, and his Surface 158, and he could not say which copy of a semantic-model skill was current. The app keeps one vault and links it into Claude Code, Cursor, Copilot, and project repos, with a zip path for Claude Desktop and a Notion skills API for machines that do not share a folder. He built the CLI first so an agent can do anything the UI can do. On the episode he describes adopt, push, and the worry that an upstream skill (Fabric's, or Kurt Buhler's) changes while a local copy stays frozen.

- **[A new look and new capabilities in the capacity metrics app (preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/a-new-look-and-new-capabilities-in-the-capacity-metrics-app-preview/5374114)**. Tommy's read of the preview is a monitor that can say which jobs ran off the reservation, and when. The old smoothing view told you something was hot without telling a new client what the number meant. He wants the app to be explainable to someone who is not already an expert in capacity metrics, because the first reaction he sees is "what does that mean?"

## Main Discussion

**Topic:** What the Fabric Notebook Toolkit is for, and who should run it

The library is `fabric-notebook-toolkit` on PyPI, shortened to FNTK on the show. The Microsoft post they read describes end-to-end agentic notebook work from GitHub Copilot CLI, OpenAI Codex, and Claude Code. Mike flags it as pre-release before the news is even finished. The interesting part, for him, is bringing an agent he already pays for, over a CLI, instead of hoping the in-product notebook copilot is the only door.

- **A CLI is the harness they already trust.** Mike's comparison is the work he has been doing in VS Code with GitHub Copilot: one agent inside the editor is fine, and a team of specialized agents that can talk to each other is better. Tommy's Skill Vault writeup makes the same bet. Distill the process in commands first, then put a UI on it. If a desktop app such as Claude, Codex, or VS Code is open, the practical hack they offer is to tell it to install the Python package and then write a skill around the commands.

- **The toolkit is a library of notebook actions, not a new notebook product.** The shape they describe is command-shaped: say "run a notebook" and the agent calls the notebook command, instead of inventing a Fabric API dance with an app registration and a downloaded `.ipynb`. Mike had been doing that download-and-edit loop by hand. He reads FNTK as the precursor to a closer loop, where Claude, Copilot, or VS Code can create and run notebooks against the service. He also says the docs need a Learn path. Two methods and a paragraph are not enough to know whether you are supposed to live in the command line.

- **Preview means play with it, not hand it out.** Tommy's governance line is awareness for users, and a sandbox for the people who will actually run it. He would not let a random person in the workspace build notebooks this way yet. Mike agrees from the leadership seat: a CTO, CIO, or the BI lead monitors a preview. They do not release it into the wild. General availability and preview are different promises, and the person who owns the platform has to keep them apart.

- **Standards have to move into the prompt.** Tommy's client story is a team that asked whether AI was allowed. His answer was yes, with a reason: he can cover more ground than a room of developers, at lower cost, if the engagement includes the tooling. The failure mode he has already seen is code that runs and is not written the way a developer would write it. Their fix is to give the writing agent the team's standards, and to give a second agent the job of reviewing the output.

- **Hiring changes at the edges, not in the core.** Mike still wants a data engineer who understands notebooks, Fabric, and why bronze, silver, and gold look the way they do. There is real disagreement right now about what those layers even are. He would still take a meeting with a novice who can explain medallion design, MCP, and FNTK and has not yet run it. Tommy brings back Kurt Buhler's three Cs from the recent episode: creative, curious, and critical. Critical means asking whether the new feature adds value or only smoke.

- **The quick start should say where it runs.** Near the end they get stuck on the install path. If the intent is the GitHub Copilot CLI or the Claude CLI, the quick start should be the CLI commands, not a tour of the portal. Mike's closing read is that Microsoft is finally putting agent experiences on top of Fabric things he already wants to use. Tommy's is that this is another tool in the hardware store: new, useful, and not a replacement for knowing what you are building.

## Looking Forward

Install the preview in a workspace you can throw away, have the agent write a skill for the commands you actually run, and read the output before you trust it.

## Episode Transcript

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=0s" target="_blank">0:00</a> Explicit Measures pumpin' up, be it high. Tommy and Mike lighting up the sky.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=6s" target="_blank">0:06</a> Dance to the data, laughs in the mix. Fabric and AI get your fix.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=11s" target="_blank">0:11</a> Explicit Measures, drop the beat now. Pump as kings feel the crowd.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=17s" target="_blank">0:17</a> Explicit Measures. Explicit Measures.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=22s" target="_blank">0:22</a> Drop it loud. Whoo

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=28s" target="_blank">0:28</a> Hello everyone, and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning, Tommy, how are you doing?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=35s" target="_blank">0:35</a> Good morning, Mike. what? Episode 571, not too bad.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=40s" target="_blank">0:40</a> Not too bad. We're clipping along.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=42s" target="_blank">0:42</a> We're almost to,, 600. Another even number here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=45s" target="_blank">0:45</a> I know, I

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=45s" target="_blank">0:45</a> You like it? Moving along?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=46s" target="_blank">0:46</a> We were just talking about how fast things are going, and I'm like, I think, didn't we just celebrate 500?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=52s" target="_blank">0:52</a> Yeah. It's, it's,, w- we do roughly around, I guess it would be like 100 episodes a year

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=59s" target="_blank">0:59</a> A year

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=59s" target="_blank">0:59</a> ... ish, just a little over.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=65s" target="_blank">1:05</a> So,, we just broke 500. It'll be about a year since we get another hundred in the list, so here we go.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=71s" target="_blank">1:11</a> Anyways, awesome. Very cool.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=76s" target="_blank">1:16</a> Good to get going here. We've got some interesting topics today.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=82s" target="_blank">1:22</a> So our main topic for today will be around this new thing called the Fabric Notebook Toolkit. So for those of you who have played with it, please let us know in the chat.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=88s" target="_blank">1:28</a> Be,, let us know what you find about it. Do you like it?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=93s" target="_blank">1:33</a> Are you using it?, are you finding this to be somewhat useful? We'd be curious to see your opinion on this one, but this seems like this is gonna be a great,, addition to be able to getting,, notebooks inside Fabric more capable.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=99s" target="_blank">1:39</a> There's a l- there's a lot more, more CLI tools, more,,, session management, your code management

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=105s" target="_blank">1:45</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=106s" target="_blank">1:46</a> ... Spark pieces, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=109s" target="_blank">1:49</a> So a lot more things here that are gonna be,, more helpful for us as we get into notebooks. And again, I absolutely love notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=112s" target="_blank">1:52</a> Notebooks are very cool. Really like it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=114s" target="_blank">1:54</a> I will also note this is a pre-release, so it's not

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=117s" target="_blank">1:57</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=117s" target="_blank">1:57</a> ... stable enough yet for production use.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=122s" target="_blank">2:02</a> They're still trying to refine and clean things up, but that being said, that was what we'll be talking about today. All right, Tommy, give us some news.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=128s" target="_blank">2:08</a> Mike, we got a few things on the docket today. First, the next Chicago user group is happening next week, next Thursday, the 22nd of October, 3:00 PM, downtown Chicago, and it's all about,, the Power BI and Fabric MCPs.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=146s" target="_blank">2:26</a> We're gonna walk through how to install it,, both the local semantic model,, Power BI authoring one, and then also the Fabric Remote MCP. We're gonna showcase what capabilities it has, and we're gonna build both using the design of,, building out semantic,, models and measures and relationships, while also

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=165s" target="_blank">2:45</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=165s" target="_blank">2:45</a> ... managing everything that we have, doing a recon session in Fabric.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=172s" target="_blank">2:52</a> So we'd love to have you. Make sure to RSVP before Wednesday of next week to make sure that you're in with your full name in your Meetup username, or p- just provide it when you actually sign up, because that's very important.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=180s" target="_blank">3:00</a> And we're really excited to keep going on on our monthly cadence.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=190s" target="_blank">3:10</a> You're gonna enjoy this one. I will make a note around

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=193s" target="_blank">3:13</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=193s" target="_blank">3:13</a> ... some experiences that I've been having inside VS Code with GitHub Copilot and trying to get my agents to do what I want inside VS Code.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=200s" target="_blank">3:20</a> It's been a little bit of a trickier,, I'll just share with people 'cause I'm finding it

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=207s" target="_blank">3:27</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=207s" target="_blank">3:27</a> ... challenging.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=213s" target="_blank">3:33</a> One of the things I've been trying to do in VS Code is,, there has been the Power BI modeling MCP server. And so there is the extension on how you build it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=219s" target="_blank">3:39</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=219s" target="_blank">3:39</a> I believe there's also now a plugin that they're moving towards, and so I've-- So a couple things. First things first, when I've been using VS Code, I'm like, "What happened to the chat window?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=225s" target="_blank">3:45</a> The chat window's all different now."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=233s" target="_blank">3:53</a> Well, for whatever reason, when, for some reason, the VS Code has now changed its default interaction, and this is something I didn't, I wasn't aware of. When you go into VS Code and you open the chat window, previously it was always set to local mode. Local mode

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=249s" target="_blank">4:09</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=249s" target="_blank">4:09</a> ... had different ways of turning servers on, MCP servers, all kinds of things.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=257s" target="_blank">4:17</a> So it did its own version of how it handled extensions, essentially. Then, I don't know, last week sometime, they dec- they decided to change the default to not be local anymore. It's now cloud

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=267s" target="_blank">4:27</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=267s" target="_blank">4:27</a> ... version of whatever the thing runs as.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=273s" target="_blank">4:33</a> Which is fine, it just now means I'm very confused as to, like, what's going on. I didn't understand the UI, the whole chat window experience

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=278s" target="_blank">4:38</a> The agent window that they have now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=279s" target="_blank">4:39</a> Yeah. It changed a lot more now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=285s" target="_blank">4:45</a> The agent window's what they're using to, to use this new,, how to get your plugins working or whatnot. It just looked very different to me and I was like, "What'd they do?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=291s" target="_blank">4:51</a> They changed everything. I can't find anything now." Well, I was on the wrong mode.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=298s" target="_blank">4:58</a> So odds are, if you're using VS Code and you're playing around with it, you may have seen that it changes it. You just have to change your VS Code back to local only and not cloud mode, and then you'll get all the original stuff that you were familiar with and you've been using for months now, you'll get it all back.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=304s" target="_blank">5:04</a> So just FYI, I just wanted

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=310s" target="_blank">5:10</a> Yeah, for Cursor, by the way

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=311s" target="_blank">5:11</a> ... I wanted to point that out.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=313s" target="_blank">5:13</a> Yeah, those things have been out for Cursor for a while. But no, I, it isn't-- VS Code's becoming -- I still, I know we had this conversation, and I even looked it up after, that it's not an IDE, but what are we doing here?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=323s" target="_blank">5:23</a> If it's not an IDD,, it's closer to an IDE than it is closer to a text editor or, or whatever they called it, a hypertext editor.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=335s" target="_blank">5:35</a> Yeah,, I

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=337s" target="_blank">5:37</a> If you

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=337s" target="_blank">5:37</a> I understand your, I understand your point, Tommy

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=339s" target="_blank">5:39</a> ... Nope, but I

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=341s" target="_blank">5:41</a> But an IDE is super bloated, and there's a lot of extra stuff that comes with it., even just the size of the programs,, I get the fact that there's extensions.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=350s" target="_blank">5:50</a> Totally.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=351s" target="_blank">5:51</a> But when I look at it, it's just,, w- I'll say this. On our social medias, when we started talking about whether or not VS Code was an IDE or not, everyone had an opinion on this one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=361s" target="_blank">6:01</a> So there's definitely, this is a hotly debated topic. No one really knows what it is. It's, it, but

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=367s" target="_blank">6:07</a> No

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=367s" target="_blank">6:07</a> NoTechnically

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=368s" target="_blank">6:08</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=368s" target="_blank">6:08</a> ... it's a text editor with a lot of extra bells and whistles, but

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=372s" target="_blank">6:12</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=372s" target="_blank">6:12</a> ... it feels, to your point, a lot like an IDE.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=376s" target="_blank">6:16</a> Yeah, so but no, we're really excited for that user group. And yeah, it's interesting with the...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=384s" target="_blank">6:24</a> We are gonna show a VS Code as well, but I, I do wanna make sure during the user group... And by the way too, if you have anything you wanna share, any wins or things you've been working on that are cool, we're gonna have time for that too.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=392s" target="_blank">6:32</a> We're gonna show it in Claude Desktop, we're gonna show it in Claude Terminal, we're gonna sh- or,,, get a Copilot. We're gonna show it in VS Code just to show that you can use the MCP anywhere, and I think that's also an important thing.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=401s" target="_blank">6:41</a> You don't need to use VS Code to do so, and it works just as fine as long as you have an agent and skills.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=409s" target="_blank">6:49</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=409s" target="_blank">6:49</a> That being said, it is a lot easier to install in VS Code than it is on any other tooling.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=417s" target="_blank">6:57</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=417s" target="_blank">6:57</a> But that's- But because there is, like you said, just the extension or really the plugin rather than actually having to go in and,, edit a JSON file.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=426s" target="_blank">7:06</a> Yes. And I'm, a- again, I'm gonna go back to like this,, I watched the doc- the documentary.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=430s" target="_blank">7:10</a> Tommy, will you watch the documentary around VS Code and

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=434s" target="_blank">7:14</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=435s" target="_blank">7:15</a> ... and did a, a show about that one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=443s" target="_blank">7:23</a> VS Code traditionally has been very well known. Like, it's been sh- Up until this point, VS Code has had a clear developer path.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=451s" target="_blank">7:31</a> They knew what they were building, they knew how to build it, they knew what the developers wanted. AI is a brand-new world for developers, and it's also a brand-new world for the developers of VS Code, and there's a lot of things here that they're not sure about yet.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=459s" target="_blank">7:39</a> We're still trying to figure it out, understand what is happening inside VS Code and what does it actually mean to be a developer with AI moving forward?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=467s" target="_blank">7:47</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=468s" target="_blank">7:48</a> There's a lot of stuff changing here, so I think this, we're entering a new era of VS- The, the developers of VS Code don't really know what is the right level of experience they should provide to people who are writing code now moving forward with agents, and this is why I think you see all these things shifting and changing and,, as soon as one company comes out with something, another company's immi- immediately copying it and making it a d- a version of it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=482s" target="_blank">8:02</a> I will say this: The new version of Cursor and GroqBot, favorite.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=497s" target="_blank">8:17</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=497s" target="_blank">8:17</a> Like, it's so capable. It's automating so many of my tasks., agents and AI are good at single tasks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=507s" target="_blank">8:27</a> I would say, like, it's the inside VS Code doing something there to help you build something. But really where it excels is it is doing a way better job when I have a team of them and they're specialized and they can talk to each other and I can get multiple agents to do a specific thing for me.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=516s" target="_blank">8:36</a> Man, I really like that experience.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=526s" target="_blank">8:46</a> Yeah. And by the way, another reason why it's closer to an IDE than Notepad or a text editor, I'll hold my breath until Microsoft releases their documentary on the creation of Notepad.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=539s" target="_blank">8:59</a> Notepad?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=540s" target="_blank">9:00</a> No- Note Editor, Text Editor, the Notepad app on Windows.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=544s" target="_blank">9:04</a> Yeah?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=545s" target="_blank">9:05</a> They're not gonna make a documentary about that, so I'm gonna hold my breath.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=548s" target="_blank">9:08</a> Oh, I see what you're saying.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=549s" target="_blank">9:09</a> So just to say

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=549s" target="_blank">9:09</a> You're basically saying like

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=550s" target="_blank">9:10</a> ... the fact that they made a documentary about VS Code and all the intricacies

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=554s" target="_blank">9:14</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=554s" target="_blank">9:14</a> ... the documentary for Notepad would be five minutes long., we create a program and you could enter text.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=558s" target="_blank">9:18</a> Ta-da. And that would be it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=561s" target="_blank">9:21</a> That would be the documentary at this point.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=565s" target="_blank">9:25</a> Yeah, but it's not as a... Yeah, but it's not, it's just not a,, Notepad isn't, like, impactful for every...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=571s" target="_blank">9:31</a> It's not used by..., it's used by a lot of people, but it's not like billions of users building new things in it. It's not as

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=576s" target="_blank">9:36</a> I know

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=576s" target="_blank">9:36</a> ... exciting as

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=577s" target="_blank">9:37</a> Which sounds

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=577s" target="_blank">9:37</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=577s" target="_blank">9:37</a> ... like an IDE to me. Yeah, so.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=580s" target="_blank">9:40</a> Okay. Agree to disagree.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=581s" target="_blank">9:41</a> All right, so that's our first one. Mike, I have a new article on promptingbi.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=595s" target="_blank">9:55</a> com. This is based on our meeting, or not meeting, our live event that we did on SkillVault.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=608s" target="_blank">10:08</a> So in case you're not aware,, there is a open source application available on GitHub called SkillVault, and the general gist of it is it's an ability to sync, manage, adopt all agent skills from acro- across the land, manage your own skills, and make sure they're synced across not just devices, but also harnesses.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=621s" target="_blank">10:21</a> I built this because this was one of the more frustrating things as I was building skills and managing skills, going, "Well, how do I know the skill's fabric updated? I wanna make sure that all my harnesses are updated., what's the right version?" Or if I'm creating my own skill or edited it, I wanna make sure it's the same skill in Claude Desktop as it is in VS Code, as it is in Claude Code.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=636s" target="_blank">10:36</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=636s" target="_blank">10:36</a> And this is not easy to do. So SkillVault is a way to actually manage,, create a skill repository, so to speak,, look for stale clones if you are adopting it or cloning from, like, skills for fabric, the Microsoft repo, or anywhere else you get your skills.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=647s" target="_blank">10:47</a> You can also use an AI assistant that allows you to push skills to the right harness, find skills that are stale, or even just discover new skills entirely saying... I, what, what did we do for the video, Mike?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=657s" target="_blank">10:57</a> What was it called? HV,, on the demo? The

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=668s" target="_blank">11:08</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=668s" target="_blank">11:08</a> ... the thing that...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=670s" target="_blank">11:10</a> Yeah. So you're like, "Hey, I need skills that do X, Y, and Z," and it's gonna find the top

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=673s" target="_blank">11:13</a> Yes

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=673s" target="_blank">11:13</a> ... rated skills or the top part.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=674s" target="_blank">11:14</a> Hyperframes, I think is what it

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=675s" target="_blank">11:15</a> Hyperframe

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=676s" target="_blank">11:16</a> ... what we used

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=676s" target="_blank">11:16</a> That's it, Hyperframe.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=677s" target="_blank">11:17</a> What we were trying to... Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=677s" target="_blank">11:17</a> Wasn't terribly off. Hyperframe, and it, and the my, the agent that's created underneath it using skills that are

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=685s" target="_blank">11:25</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=685s" target="_blank">11:25</a> ... from SkillVault, so it's a, a redundancy there.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=693s" target="_blank">11:33</a> But it was able to find everything, and then just adopt in the SkillVault and then push it to wherever you need it to. And using that with Notion's,, skills API, you can push that to Claude Desktop really easily too if you need to.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=700s" target="_blank">11:40</a> So that article's out on Prompting BI as well, and just basically why I built it, and showcases really how to use it along with the video that we did.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=711s" target="_blank">11:51</a> All right, excellent.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=712s" target="_blank">11:52</a> And then

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=713s" target="_blank">11:53</a> So that's one out there is what... That's the why I built SkillVault.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=717s" target="_blank">11:57</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=718s" target="_blank">11:58</a> , collect your skills, get them all into..., it's like Pokemon now. I feel like I'm, I'm always running around., I feel like for a while, Tommy, when,, early on in the AI space, it was- I literally felt like I was trying just to keep pace of like, "Oh, that's a good skill."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=734s" target="_blank">12:14</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=734s" target="_blank">12:14</a> "Oh, that's a good skill. Oh, this is interesting.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=736s" target="_blank">12:16</a> Oh look, here's a library of 150 skills. Oh, here's 300 skills."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=740s" target="_blank">12:20</a> How similar are these skills? I don't even know.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=748s" target="_blank">12:28</a> I just kept running around trying to collect more and more things thinking, like, I would lose them and, and I would be uneffective or inefficient if I didn't have all these skills attached. So I definitely feel like it was like a,, Pokemon collect-them-all a challenge for me

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=755s" target="_blank">12:35</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=755s" target="_blank">12:35</a> ... initially to get all the skills together. And then you

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=758s" target="_blank">12:38</a> And then you feel there's almost, like, FOMO for not finding out new skills that are out there. Like, "Oh, how did I not know about this one?" And it could be har- like, overwhelming.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=767s" target="_blank">12:47</a> Well, yes, but I think it's even more than that. I felt, I feel like it was even more, like, impactful in that,, if you didn't find that skill, you were wasting tokens. Like it was

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=779s" target="_blank">12:59</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=779s" target="_blank">12:59</a> ... almost like a, an efficiency gain too.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=783s" target="_blank">13:03</a> Like I, I was trying to prompt my AI to do something. It doesn't quite do what I want.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=787s" target="_blank">13:07</a> I want better performance from it. So if I have these secret skills or learn these skills or give skills

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=791s" target="_blank">13:11</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=791s" target="_blank">13:11</a> ... to my agents, they're able to become more capable by default.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=795s" target="_blank">13:15</a> And so I look at this going, "Oh my gosh, this feels like a hack to me," right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=801s" target="_blank">13:21</a> And so maybe that's why I'm going around, like, trying to collect all these things, 'cause I'm like, if I don't collect all these little pebbles a- and bre- and put them in my repertoire or don't have them, I'm gonna lose those efficiencies. I'm gonna lose,, the ability to be,, token-wise based on these other tools.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=810s" target="_blank">13:30</a> So that's why I was maybe, like, paranoid a bit

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=819s" target="_blank">13:39</a> ... initially

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=820s" target="_blank">13:40</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=820s" target="_blank">13:40</a> ... at the beginning.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=821s" target="_blank">13:41</a> Do what you're describing to me? You're describing to me...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=827s" target="_blank">13:47</a> Remember when, like, you download a game when they first came online, and then you could add the option to, like, download the content pack or like

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=832s" target="_blank">13:52</a> Sure

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=832s" target="_blank">13:52</a> ... you used to.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=836s" target="_blank">13:56</a> So it had, like, the default adventure, but you're like, oh, if you want you can actually open up a new road this way, and it's a whole

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=839s" target="_blank">13:59</a> Yes

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=839s" target="_blank">13:59</a> ... new thing.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=844s" target="_blank">14:04</a> And for me s- I th- for skills, for me you're, like, installing new applications in terms of, like, what their capabilities are. It's not just a nice way to do it or a better way.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=850s" target="_blank">14:10</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=850s" target="_blank">14:10</a> It changes how the harness I am is working, and I think that's why s- I see them as so powerful. So a- and not just so powerful, but th- there are some of the skills that I have right now that I would not be able to do what I do today without them.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=860s" target="_blank">14:20</a> So it's, yeah, you're like you wanna know all the top skills and what they can do, but that's hard to manage.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=871s" target="_blank">14:31</a> I 100% agree with this. And then,, maybe you use them, maybe you don't.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=878s" target="_blank">14:38</a> Hmm. Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=880s" target="_blank">14:40</a> Right? Now, that's a whole different problem, 'cause once you have too many skills, you're like, which one do I use?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=884s" target="_blank">14:44</a> What happens when there's duplicate skills? Which one fits better with your workflow?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=888s" target="_blank">14:48</a> Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=888s" target="_blank">14:48</a> All kinds of problems come along with this one. But anyways, regardless, you still need a skills vault to collect them all, put them together, and then you can figure out what to do with them after you have them.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=896s" target="_blank">14:56</a> So regardless, it's still a good, a good feature there. All right,, let's talk about one more other item here, Tommy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=905s" target="_blank">15:05</a> Yep.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=905s" target="_blank">15:05</a> I think you found an article here around,, there are new capabilities in the Fabric Capac- Capacities Metrics app.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=913s" target="_blank">15:13</a> Yes. So we have

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=914s" target="_blank">15:14</a> I wanna not only go there

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=915s" target="_blank">15:15</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=915s" target="_blank">15:15</a> ... but I...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=919s" target="_blank">15:19</a> Yes, this is what I wanna talk about. I wanna also, Tommy, have you recently gone into the admin portal of Power BI?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=923s" target="_blank">15:23</a> I have.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=923s" target="_blank">15:23</a> And looked at the capacities in there?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=926s" target="_blank">15:26</a> Yes. Is there something that I'm missing now?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=929s" target="_blank">15:29</a> Maybe.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=931s" target="_blank">15:31</a> Okay. The capacity settings, you mean?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=934s" target="_blank">15:34</a> So if you go into your admin tenant settings now

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=937s" target="_blank">15:37</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=937s" target="_blank">15:37</a> ... I'm just curious if you have, have you been in there recently?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=939s" target="_blank">15:39</a> The capacity settings on your tenant.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=942s" target="_blank">15:42</a> Try... -huh, huh. Oh, yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=945s" target="_blank">15:45</a> These

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=945s" target="_blank">15:45</a> I see this now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=947s" target="_blank">15:47</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=948s" target="_blank">15:48</a> The c

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=948s" target="_blank">15:48</a> There's a

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=948s" target="_blank">15:48</a> Are you talking about

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=948s" target="_blank">15:48</a> There's, there's a s

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=949s" target="_blank">15:49</a> ... the manage capacities?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=951s" target="_blank">15:51</a> Yeah. Well, there's a, an option there.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=956s" target="_blank">15:56</a> There is,, y- you need to investigate a capacity s- you can try capacity monitoring inside the admin portal.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=961s" target="_blank">16:01</a> I saw that, mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=962s" target="_blank">16:02</a> And then if you click on that, and in the capacity monitoring pieces, when you try that, you get this really beautiful new grid view of your capacities. So it's a little bit, it's, like, a little bit hidden in there, but it's inside the portal, and it's slick.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=983s" target="_blank">16:23</a> Oh. what, Mike?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=985s" target="_blank">16:25</a> It's not just that, but there's also this OneLake catalog for governance that you can do.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=989s" target="_blank">16:29</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=990s" target="_blank">16:30</a> So the new monitor experience, yeah, I see the new monitor experience. Look at, hey, this is looking a little fancy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=997s" target="_blank">16:37</a> There's a little bit more around, like, seeing your health over time and figuring out when your capacity is overrun or when it's not, or when it's being throttled or if it's not., so there's a lot, there's a, there's a lot of really, I think, better messaging

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1012s" target="_blank">16:52</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1012s" target="_blank">16:52</a> ... and easier to drill into the new capacity pieces.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1018s" target="_blank">16:58</a> So anyways, I just wanna point this out, that there are some new features coming even in the monitoring side of things. So you have,, job runs

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1025s" target="_blank">17:05</a> Oh

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1025s" target="_blank">17:05</a> ... you have capacity

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1026s" target="_blank">17:06</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1026s" target="_blank">17:06</a> ... management.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1028s" target="_blank">17:08</a> It's all coming to the admin portal., it's, it's really pretty slick. I'm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1031s" target="_blank">17:11</a> Well

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1031s" target="_blank">17:11</a> ... I'm liking this new

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1032s" target="_blank">17:12</a> I like the job runs, yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1034s" target="_blank">17:14</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1034s" target="_blank">17:14</a> I like the run history too.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1036s" target="_blank">17:16</a> Yep.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1036s" target="_blank">17:16</a> That shows... Yeah, I like just, again, conveniency.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1038s" target="_blank">17:18</a> We were just talking about that offline.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1041s" target="_blank">17:21</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1041s" target="_blank">17:21</a> This makes conveniency. Oh, look, agents are in here too.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1045s" target="_blank">17:25</a> Yep, applications.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1046s" target="_blank">17:26</a> Applications. Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1047s" target="_blank">17:27</a> Yep, exactly right. So it's giving you s- like s- more of a central place to manage some more of these, like, critical things,, which I think is very useful here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1055s" target="_blank">17:35</a> Anyways, all this to say is that I'm liking these changes that I'm starting to see in the new monitoring hub for admins.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1063s" target="_blank">17:43</a> Hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1064s" target="_blank">17:44</a> Pretty cool.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1064s" target="_blank">17:44</a> Have you seen the new OneLake catalog, the governance too? That's the new thing they've been promoting.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1069s" target="_blank">17:49</a> I haven't played with it as much as I should have, Tommy, but yes

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1072s" target="_blank">17:52</a> Okay

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1072s" target="_blank">17:52</a> ... I am, I'm aware that it's existing.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1077s" target="_blank">17:57</a> I haven't, I don't have enough the time and seat on it to give an opinion about it yet. But it's getting...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1082s" target="_blank">18:02</a> I think I've, I think this is reaffirming my point, which is, look, I don't wanna go over to Purview to go do stuff, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1089s" target="_blank">18:09</a> All, all, all of or most of my data is now going to reside in Fabric anyways. Fabric is becoming the back end-...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1093s" target="_blank">18:13</a> for what I wanna use, period.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1098s" target="_blank">18:18</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1098s" target="_blank">18:18</a> This is what I wanna do now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1100s" target="_blank">18:20</a> Dude, very

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1100s" target="_blank">18:20</a> So having a OneLake that has, like, a better visibility to all the items that are in my lakehouse and in my reports and all that, that makes a lot more sense to me.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1110s" target="_blank">18:30</a> This is interesting. I like this a lot, and they even have now,, like a Power BI OneLake catalog report to say, like, data freshness, item curation.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1120s" target="_blank">18:40</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1120s" target="_blank">18:40</a> This was definitely... Oh, I love this. I

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1123s" target="_blank">18:43</a> Okay

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1123s" target="_blank">18:43</a> ... and here, here's where we need to go.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1127s" target="_blank">18:47</a> This is the type of report, Mike, that I wanna s- go in my weekly meetings with my BI team and to make sure that we're all on the same page.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1133s" target="_blank">18:53</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1133s" target="_blank">18:53</a> Like, this is what I want on the screen during the agenda. Oh, man.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1136s" target="_blank">18:56</a> Yep.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1136s" target="_blank">18:56</a> That is great.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1137s" target="_blank">18:57</a> If, if nothing else, it's, it's at least an awareness part of this, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1140s" target="_blank">19:00</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1140s" target="_blank">19:00</a> "Hey, here's how we're doing on performance. Here's what's going on.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1146s" target="_blank">19:06</a> We had a couple jobs run off the reservation. Here's where they are and when they happened." Like, just be aware what you do impacts the broader part of the organization, and we're watching this.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1151s" target="_blank">19:11</a> We can help you. Like, reach out if you need assistance, but, like, you just can't just go build whatever the heck you want

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1157s" target="_blank">19:17</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1158s" target="_blank">19:18</a> ... and hope it all works.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1160s" target="_blank">19:20</a> Dude, and that goes along with the new Capacity Metrics app, and

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1164s" target="_blank">19:24</a> Yes

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1165s" target="_blank">19:25</a> ... there's a few main things here that, and this is, again, on the blog, along with this that

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1170s" target="_blank">19:30</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1170s" target="_blank">19:30</a> ... just makes me happy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1175s" target="_blank">19:35</a> I love the governance side. I love the, the, the, our data governance, man.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1180s" target="_blank">19:40</a> But so there's some main goals here that, and main feature updates that we're able to see. First, it's a completely redesigned interface.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1185s" target="_blank">19:45</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1185s" target="_blank">19:45</a> A better navigation, and different, new metrics focus on helping administrators m-, understand their capacity health. They have, apparently the redesign and the updates were trying to accomplish three main goals: detect issues as they occur, investigate problems for the previous 14 days, and identify capacity risk before in- the, the throttling impacts users.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1201s" target="_blank">20:01</a> There's a health page to see cross capacity to identify which capacities need attention. These include metrics that are easier to understand, such as indicators of percentages of time spent in throttling.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1217s" target="_blank">20:17</a> So rather than those weird CU ones, you're like, "I know that's the most, but I don't know what the most means," which a lot of times when you're dealing with,, new clients, Mike, I'm sure you see this the first time they see the, the report. They're like, "What does that mean?" They're like, "All right, how do I explain this?" It's like, that just means a lot.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1232s" target="_blank">20:32</a> It's the mo- it has the most of a lot, and that's the best way to explain it, so yeah, we needs a little more layman terms metrics here. There's a better compute page with,, several capabilities, a utilization graph, shows consumptions in CUs by seconds instead of percentages.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1248s" target="_blank">20:48</a> So scaling changes m- are easier to understand. A heat map visualization for things that are, are utilized or over-utilized hours, and in a CU consumption table identifies that item's contributing.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1265s" target="_blank">21:05</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1265s" target="_blank">21:05</a> There's a details page, and then also this is,, being released alongside the GA Capacity Metrics app. So this allows customers and organizations to evaluate the new one while keeping the old one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1273s" target="_blank">21:13</a> They don't have to upgrade their existing one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1280s" target="_blank">21:20</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1280s" target="_blank">21:20</a> So Mike, I, I love every single part of this. I love making this easier, I love the design.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1288s" target="_blank">21:28</a> Because again, not everyone has that IT background to look at, or more importantly, is an expert in Fabric capacity metrics.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1295s" target="_blank">21:35</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1296s" target="_blank">21:36</a> Which you had

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1297s" target="_blank">21:37</a> This

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1297s" target="_blank">21:37</a> ... to be back in the day.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1299s" target="_blank">21:39</a> And, and there, they're, they're, they're getting to the point where it's like we're actually able to detect, like, where there's problems. The smoothing thing was good, but the smoothing thing was also difficult to understand.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1309s" target="_blank">21:49</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1309s" target="_blank">21:49</a> I understand why they were doing it, but also there, it came with a lot of headaches, I think in general

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1314s" target="_blank">21:54</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1314s" target="_blank">21:54</a> ... of just being able to like, okay, you're giving me this stuff, things.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1322s" target="_blank">22:02</a> I just don't understand how to get back to like, okay, what individual item is ripping through my capacity and overusing something? That, that's the part I really needed, and sometimes you needed this unsmooth amount of, like, what jobs were occurring on my tenant.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1331s" target="_blank">22:11</a> And I think this, we're getting much closer to better diagnosis of, like, why things are falling apart.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1339s" target="_blank">22:19</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1339s" target="_blank">22:19</a> Anyways.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1340s" target="_blank">22:20</a> 100%. Dude, I'm very excited about this.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1343s" target="_blank">22:23</a> Just again, just make things easier, please. That's all I'm asking, so awesome.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1346s" target="_blank">22:26</a> Anything else with the Capacity Metrics app?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1350s" target="_blank">22:30</a> No, I think those are the two main updates I think were coming out. Both of those I believe were announced in Barcelona.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1356s" target="_blank">22:36</a> They were touting these things there. They're now starting to show up in your tenants, so go check them out.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1362s" target="_blank">22:42</a> Go download the nos- most recent version of the Capacity Metrics app. I think you'll be pleasantly surprised.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1367s" target="_blank">22:47</a> Feels a lot cleaner, feels a lot better, so I can't tout how much benefit that these new features have been coming out with. Like, it, I just...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1373s" target="_blank">22:53</a> The team has been working hard, I'll say that.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1379s" target="_blank">22:59</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1379s" target="_blank">22:59</a> And it, it shows, I think. I think this really shows that they've been working hard on this, and it is, they're doing a really good job of getting this stuff like knocked out.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1386s" target="_blank">23:06</a> So anyways, all that to say is check it out, go look at the new workspace. I think you're gonna like it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1394s" target="_blank">23:14</a> All right. So Mike, I think it's time then, let's dive into our main topic today, because there's a lot going on.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1404s" target="_blank">23:24</a> There's this new CLI tool. This is not necessarily, and I think this is important here, this is not necessarily meant for the,, Pyth- or the n- in your Fabric environment.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1413s" target="_blank">23:33</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1413s" target="_blank">23:33</a> You can run this in your terminal anywhere, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1417s" target="_blank">23:37</a> Yep.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1417s" target="_blank">23:37</a> This is a command line tool for Windows or,, believe it w- it work with Linux. But it's important here because up until now, most of the packages that have been around the notebooks were things like the,, the notebook helper or what was it called?, the no- the Fabric helper library

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1437s" target="_blank">23:57</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1437s" target="_blank">23:57</a> ... which is basically, but can only be run in a Fabric environment.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1441s" target="_blank">24:01</a> It can only be actually run if you were using VS Code that had the extension

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1445s" target="_blank">24:05</a> Yes

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1445s" target="_blank">24:05</a> ... or in the actual UI of a Fabric notebook.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1449s" target="_blank">24:09</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1449s" target="_blank">24:09</a> What was been released last week, or we talked about it last week, is this new Python library called Fabric Notebook Toolkit, FNTK is their shortcut for short. And the f- Do, how, how are we gonna refer to this so I don't have to say the whole thing the whole time?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1458s" target="_blank">24:18</a> 'Cause even FNTK is a lot.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1467s" target="_blank">24:27</a> , yeah. No, I would just call it,, the, the, the Notebook Toolkit is what I think

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1474s" target="_blank">24:34</a> Okay, let's call it the Notebook... Let's just call it the toolkit for today. So

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1478s" target="_blank">24:38</a> Let's, yeah. So when we

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1479s" target="_blank">24:39</a> I'm already struggling to remember my word. Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1481s" target="_blank">24:41</a> Right, exactly. So we're talking about this toolkit.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1483s" target="_blank">24:43</a> We're gonna, we're just gonna call it the toolkit.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1485s" target="_blank">24:45</a> Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1485s" target="_blank">24:45</a> But it's actually the Fabric Notebooks Toolkit

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1488s" target="_blank">24:48</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1488s" target="_blank">24:48</a> ... that we're actually gonna be communicating about. Okay.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1490s" target="_blank">24:50</a> So if you skip

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1491s" target="_blank">24:51</a> I think that's good because

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1492s" target="_blank">24:52</a> Just go back

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1492s" target="_blank">24:52</a> ... it's a lot of things going on here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1494s" target="_blank">24:54</a> Yeah. So the toolkit here is, one, can be run on any machine that, as long as it can connect to a Fabric capacity, but it doesn't have to be

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1503s" target="_blank">25:03</a> Yes

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1503s" target="_blank">25:03</a> ... in a Fabric environment. So that's the first

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1505s" target="_blank">25:05</a> Correct

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1505s" target="_blank">25:05</a> ... distinction.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1515s" target="_blank">25:15</a> Two, it can manage and run notebooks, but also execute code from your Fabric capacity in its own environment, in its own environment. And I really, the third one, Mike, is this library is meant to support end-to-end agen- agentic development of Fabric no-, notebooks

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1526s" target="_blank">25:26</a> See

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1526s" target="_blank">25:26</a> ... possible from GitHub Copilot and Codex and Cloud Code. So it is

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1531s" target="_blank">25:31</a> That's, that's the part

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1532s" target="_blank">25:32</a> ... a model agnostic, harness agnostic here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1536s" target="_blank">25:36</a> That, to me, is really the big part here. So Mike, there's a lot of things I think unpack with this. Where do you wanna start?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1543s" target="_blank">25:43</a> , well, I th- I think this is a pretty big shift in notebooks just in general.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1548s" target="_blank">25:48</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1548s" target="_blank">25:48</a> The fact that there's now a, like, the idea is bring your agent to notebooks, I think this is a pretty big shift in general. Up until this point, we really haven't had anything really useful other than Copilot and the service maybe to help you out with some notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1563s" target="_blank">26:03</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1563s" target="_blank">26:03</a> But I've also found like for me personally, like, I don't really like to use the GitHub Copilot or the, the Copilot that was coming with Fabric to work on notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1571s" target="_blank">26:11</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1571s" target="_blank">26:11</a> It wasn't really able to read the notebook instructions. It didn't seem to have a really good understanding of, like, when you ran a cell and it failed, what was the failure? Like

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1579s" target="_blank">26:19</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1579s" target="_blank">26:19</a> ... those are the activities that I wish that the Copilot inside Fabric would use.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1585s" target="_blank">26:25</a> The rub for me is I'm already paying for an agent somewhere else in my environment. So why do I need

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1592s" target="_blank">26:32</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1592s" target="_blank">26:32</a> ... to go pay more CUs to go talk to a notebook when I already have an ample subscription that I'm going to be using anyway?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1602s" target="_blank">26:42</a> So I wanna be able to bring my own agent to, like, the work that I'm doing in notebooks, and this to me feels like a bit more of a release to that, where I'm able to bring whatever agent I already have or I'm paying for, show up with it, and then have the agent talk with this u- using the CLI, which I think many people would argue CLI is extremely powerful.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1612s" target="_blank">26:52</a> Some don't love it, but some, some others really think this is the way to go. Anyways.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1622s" target="_blank">27:02</a> We know people who do. We know people who swear by it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1629s" target="_blank">27:09</a> Kurt. So thank you.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1635s" target="_blank">27:15</a> Which and I agree, but, and I think, Mike, this is... I think we need to talk about the fundamental shift here because to me it almost feels like the Fabric Notebook UI, the default way you manage notebooks, is almost becoming optional at this point, which is crazy when you think about that.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1642s" target="_blank">27:22</a> So at least in my opinion here, again, I'll say that again, the notebook UI, going to app. fabric.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1648s" target="_blank">27:28</a> powerbi. com or whatever it was

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1655s" target="_blank">27:35</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1655s" target="_blank">27:35</a> ... and you manage notebooks there, okay, you really had no other choice besides VS Code, which was already a lot.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1665s" target="_blank">27:45</a> But now that notebook UI to me almost feels like like again, this is gonna be a hot take or a hot initial take is, it may, at this point it's like you're a beginner if you're going to the notebook UI because you don't know about these other tooling here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1674s" target="_blank">27:54</a> Then so I guess let me s- ask you that. What's your take on, do you think that the UI is optional now?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1688s" target="_blank">28:08</a> I'm gonna, I'm gonna go back to what I think we talked about, Tommy, earlier, which was,, how do you devel- how do you develop apps anymore? Right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1696s" target="_blank">28:16</a> When my, my traditional method of building an application was like, okay, let's think about the user, the person involved with building something. I want the user involved., what UI do they need to land on?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1705s" target="_blank">28:25</a> What's the home screen? What does the educational path look like?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1714s" target="_blank">28:34</a> And just walking the user through screen one, screen two, screen three. So a lot of my initial app design was really centered around how can I bring a user interface in front of the user so that they're comfortable and they know what to click on, when to click on things to get things done, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1722s" target="_blank">28:42</a> That, that was the mentality of which I was building. Tommy, you were just talking about it for Skills Vault.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1730s" target="_blank">28:50</a> You started with the CLI. You started building the agent side of things.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1739s" target="_blank">28:59</a> How would I... What, what workflows would need to be written out in code first?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1748s" target="_blank">29:08</a> And then you wrapped around a UI around it and said, "Okay, well, now, now that I have it working, I can actually move in and out-"

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1756s" target="_blank">29:16</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1757s" target="_blank">29:17</a> ... "the skills that I need." You, you basically distilled the process down in code first and then built the UI around it. Now

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1767s" target="_blank">29:27</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1767s" target="_blank">29:27</a> ... I don't know if this is

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1768s" target="_blank">29:28</a> This is a big point. Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1770s" target="_blank">29:30</a> Right? So the, how I've traditionally built apps was focused on the people first and then the process and weaving that together.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1780s" target="_blank">29:40</a> The n- this new world, I believe, is because the agents are so much better at using tools than I am, and the fact that I need to have my agents and me use the tools, you should probably start with the thing that's common across both surface areas, which is

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1791s" target="_blank">29:51</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1791s" target="_blank">29:51</a> ... an agent.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1797s" target="_blank">29:57</a> And the interesting thing is it's easier, Tommy, I think, to build a CLI tool for an agent, right? I can give the agent

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1802s" target="_blank">30:02</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1802s" target="_blank">30:02</a> ... a single markdown file.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1803s" target="_blank">30:03</a> Well

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1803s" target="_blank">30:03</a> Here's what this project does, and then here's all the tools you need, and here's what they do. You, you now know when to use the tools at the right time.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1815s" target="_blank">30:15</a> And, and when you describe it that way, you're now focusing only on the process, the workflow, giving the agent exactly what it needs to be able to do the job. And I think that's much more efficient because you can always come back and build a UI later on. But

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1828s" target="_blank">30:28</a> Well, and yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1829s" target="_blank">30:29</a> ... the agent needs to understand what the process is.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1831s" target="_blank">30:31</a> Well, let's be clear here. Most of the action that are happening that you think are so cool on your machine if you use Claude Cowork, which has now gone away, it's just Claude now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1841s" target="_blank">30:41</a> But if you're running on Claude Desktop or VS Code, their CL, it,, every session has a terminal running in the background, a console that really your harness is operating on.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1852s" target="_blank">30:52</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1852s" target="_blank">30:52</a> And this is again, whether it's Notion that doesn't have a machine, but it's still executing Python scripts that's coming from a CLI, right? It's running from a console, be it Linux or Windows.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1861s" target="_blank">31:01</a> Most of them have like a Linux,, environment. You just don't know that, and you, most of the times, Mike, you don't need to know that, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1870s" target="_blank">31:10</a> It's not really essential, but knowing that and knowing that that is the integral part of how these machines look in an Excel file, right? They're not just reading an Excel file and changing it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1880s" target="_blank">31:20</a> It's all through scripts and co-, commands. Also, the, the commands help an agent understand the actions, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1890s" target="_blank">31:30</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1890s" target="_blank">31:30</a> That's basically what commands are. It is what actions do you wanna take?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1905s" target="_blank">31:45</a> For example, with the toolkit, I almost said the whole thing, it has a bunch of different main commands or domains. Discover, find notebooks, notebooks, lakehouses, and capacities, notebooks, manage notebooks, sessions, and lakehouses, code, submit code, retrieve re- results, and request cancellation,, cells, read and edit notebook cells, monitor, logs, resources, server,, initiation, or,, install or update skills, and inspect the built-in skill content.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1920s" target="_blank">32:00</a> So those actions allow it to, in a sense, run a lot easier because it knows if you say, "I wanna run a notebook," okay, it's gonna use the notebook command, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1936s" target="_blank">32:16</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1936s" target="_blank">32:16</a> And it's like, can we check what's actually what the data is for this lake house? It knows to use the code command, and it'll build the code and run those actions.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1948s" target="_blank">32:28</a> So we're getting to this point now where m- I'm finding, Mike, for the first time, a lot of what Microsoft is building for Fabric and Power BI are very Copi- or A- AI agnostic. I think initially it was like, "We're building everything for Copilot." It's the Copilot UI in the Fabric UI.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1960s" target="_blank">32:40</a> That's how you were gonna build. That's the gonna b- And we complained about this., what, I know last year, the beginning of this year, we're, Copilot's fine, but I like using my harness.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1973s" target="_blank">32:53</a> And you're seeing both Power BI Desktop Bridge, Skills for Fabric, and now the FNTK or the toolkit.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1986s" target="_blank">33:06</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1986s" target="_blank">33:06</a> They're, you don't have to use Copilot. You don't have to use your Copilot capacity to do so.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=1996s" target="_blank">33:16</a> And I think it, be clear, you can run this yourself, but if you are using the toolkit, you are using this specifically or 99% of the time with an agent. That's the intention.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2005s" target="_blank">33:25</a> Oh, yeah. I think that's the point, yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2006s" target="_blank">33:26</a> Right? Not just our recommendation, that's the intention of why it was built.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2010s" target="_blank">33:30</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2011s" target="_blank">33:31</a> And I guess with that in mind, are we really moving to this phase where... I, I was on a call last week, and they asked me during the call, it was a prospective call,, and they were like, "Are you gonna use it?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2031s" target="_blank">33:51</a> Would you use AI to help develop?" So I said, "Absolutely." And I said, ", if that's okay with,,, with you if, if we were to engage together or have a partnership," but, and my reasons were, "Look, I can help you out a heck of a lot more than an individual or team of developers at a lesser cost." More importantly, I've been u- using these A, these AI toolings for now the past three years and trying to make sure how it works and spending a lot of time not being billed, just making sure that I know how these skills and harnesses work.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2050s" target="_blank">34:10</a> You can run this yourself if you're just getting started. But Mike, the, find those errors and revisions, you gotta know about this stuff.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2069s" target="_blank">34:29</a> So I'll, I will land the question to you about you as a consultant, or it's easier even if you as a professional, right, being posed the question with all these tools out there, they say, "Are you gonna use AI?" What's your, I don't wanna say how do you justify that, but how do you respond in, I think, the right way?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2092s" target="_blank">34:52</a> ,, if, if a c- if a client, if I walk into a client and they say, "Hey, we wanna work with you," and they say, "Well, we're, we don't allow the use of AI," immediately it's like, "No, thanks. I'm not wor-"

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2105s" target="_blank">35:05</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2105s" target="_blank">35:05</a> There's enough

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2105s" target="_blank">35:05</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2106s" target="_blank">35:06</a> ... there's enough, there's enough companies out there right now that are interested in using AI.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2115s" target="_blank">35:15</a> To me, it's a non-negotiable at this point. Everyone should be using it and needs to be using it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2125s" target="_blank">35:25</a> Now, the question I think becomes like, okay, well, whose information or where does that information go?, my recommendation on this one is,, make sure there's some company policy around the AI that the, the com- the client is providing. And the safest way is the client provides you a license to whatever AI they're using, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2134s" target="_blank">35:34</a> Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2135s" target="_blank">35:35</a> , a lot of our clients use GitHub Copilot. Great.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2145s" target="_blank">35:45</a> Easy, easy way to license. Here's my user ID, here's my user information.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2156s" target="_blank">35:56</a> You, you create a user account around that, and then anything you use or do with that agent is all now stored, used inside the client's environment, which I think that's actually the right approach, right? Companies need to approach this with, we have AI, we're going to be using it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2167s" target="_blank">36:07</a> May not be effective, but,, what I will so that-- Well, what I will say though is,, the outputs of the AIs, I think there's a lot of hesitation from companies to let it just build. And,, I continually see, Tommy, I continually see a lot of, every time I see someone saying, "Man, we just built this new app," or, "We're building things with AI now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2177s" target="_blank">36:17</a> Look how fast it's making us go," there's so much messaging on the internet around, well, how do I maintain it? What does support look like?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2187s" target="_blank">36:27</a> And I think that is a concern, but I also want people to be very aware that the ease in which it was used to build the AI to begin with

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2198s" target="_blank">36:38</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2198s" target="_blank">36:38</a> ... is also the same ease and ability for you to update it and create tests around it, and actually have it become more robust.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2210s" target="_blank">36:50</a> So I think we've hit a point, Tommy, where, and, and this is maybe a general concept. Previously, I would use AI, and I would give it some code, and it maybe would write

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2221s" target="_blank">37:01</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2221s" target="_blank">37:01</a> ... code as good as I was writing, but over time, the code would, like, start to degrade, and we'd get

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2228s" target="_blank">37:08</a> Deteriate, yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2228s" target="_blank">37:08</a> ... repeated functions.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2239s" target="_blank">37:19</a> We'd get,, things that were not designed well., it, it would make it work, but the code wasn't written, like, in a developer fashioned way. What we've been doing internally for us has been developing standards around, okay, well, we have these standards on how we would write code.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2250s" target="_blank">37:30</a> We have principles we use to dev- design those. We're now giving those principles to the AI that writes the code, and we have a separate AI that reviews the output of the code.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2261s" target="_blank">37:41</a> And so one of the big checks that we're doing is if anything is this new pull request or any- if any of this new code is coming in that is a copy of existing code, reject the pull request. Go back and say

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2272s" target="_blank">37:52</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2272s" target="_blank">37:52</a> ... "This is something that should be a function.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2275s" target="_blank">37:55</a> You should have made this a component. You should, like, adjust the code

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2278s" target="_blank">37:58</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2278s" target="_blank">37:58</a> ... so it actually has, like, if not the same level of standard, but slightly better standards as we go." And I think we're getting to the point where if you have good enough instructions and you have a good enough process in place, you can get code that actually retains its quality over time.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2292s" target="_blank">38:12</a> And if you work really hard, I think you're even making code that's better every time you touch it or ev- better every time a round of agents is using it. And I think that's where I'm at right now is I'm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2305s" target="_blank">38:25</a> Do you

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2305s" target="_blank">38:25</a> ... getting to the point of

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2306s" target="_blank">38:26</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2306s" target="_blank">38:26</a> ... it's getting better every time we touch it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2308s" target="_blank">38:28</a> I,, I, I would feel that's even being very conservative. Do you remember when you started first using AI around developing?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2317s" target="_blank">38:37</a> Like, I remember the try- doing with notebooks, and at the time, it was much more you would select the code you want changed and say what you would want the update to be.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2326s" target="_blank">38:46</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2326s" target="_blank">38:46</a> It was very micro, right? You're like, "Change this so I can return this."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2330s" target="_blank">38:50</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2330s" target="_blank">38:50</a> And that worked really well, but you couldn't really productionalize that, nor did you feel comfortable trying to do a whole project that way, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2337s" target="_blank">38:57</a> You, you were babysitting the entire time that you were using anything.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2339s" target="_blank">38:59</a> You're, yeah, you're babysitting the whole time, and it was much more likely that you would run into an error over a long period of things. Like, I need an,, create an AP-, a connection to this API.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2352s" target="_blank">39:12</a> Okay, now it has that. Now what do I have to do?, there's still a lot of time, but with the,, really the, I think the rise of skills and the rise of harnesses that can take advantage of them, and al- and also really the rise of MCPs.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2365s" target="_blank">39:25</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2365s" target="_blank">39:25</a> We're at this point now where I, and I mentioned this on LinkedIn and Twitter too, Mike, I said I'm, I'm more and more resolved right now that what we're gonna define as our skills or the agent skills or even the skills that we have

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2381s" target="_blank">39:41</a> Mm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2381s" target="_blank">39:41</a> ... the user skills should be referred to as conductor skills.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2386s" target="_blank">39:46</a> I read this 2023, and someone said, "We are in, welcome to the conductor's era." And I'm gonna keep

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2391s" target="_blank">39:51</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2391s" target="_blank">39:51</a> ... saying that because

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2392s" target="_blank">39:52</a> Yep, I think you're right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2392s" target="_blank">39:52</a> ... the whole, the premise there was you are now the conductor in the orchestra.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2401s" target="_blank">40:01</a> And guess what? That person needs experience and the skill to lead that team.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2409s" target="_blank">40:09</a> And I am more and more resolved that where we're at now, me as a professional, as an individual, and then you can add consultant and whatever you wanna on top of that, that my ability, you have to trust someone that they know what they're doing with all these agents.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2419s" target="_blank">40:19</a> Sure.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2419s" target="_blank">40:19</a> Because anyone can tell an agent to build a notebook and a pipeline and use skills.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2424s" target="_blank">40:24</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2424s" target="_blank">40:24</a> But how do you verify? How do you make sure things are running?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2427s" target="_blank">40:27</a> Do you do know how to do recon? How are your prompts coming in?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2430s" target="_blank">40:30</a> How is that context flowing throughout the duration of a project?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2434s" target="_blank">40:34</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2434s" target="_blank">40:34</a> To me, that's where the secret sauce is, and you look at what's happening with the toolkit, it's phenomenal, and I think it also opens up a lot more, but you can't just run it and say, "Okay, I connect,", like, "I installed FNTK, update something."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2452s" target="_blank">40:52</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2452s" target="_blank">40:52</a> Mike, there's a few things in the toolkit that I really love, and I think the biggest one to hear for me is the code command because this is the first time now outside of the MCP, because it does not require the MCP to run, that you can execute your code in Fabric without having connected to a notebook.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2466s" target="_blank">41:06</a> It's gonna use a Spark runtime, but it's not in a notebook.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2484s" target="_blank">41:24</a> , are you sure about that?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2486s" target="_blank">41:26</a> I'm sure about that. Take a look, my friend.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2493s" target="_blank">41:33</a> There is the code,, code run, where you can simply submit code, use the execution ID to return the polling command. And the code run is a workspace I- ID, and you simply put the code, it will return it back in JSON.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2499s" target="_blank">41:39</a> You can get the result of that. It does not have to run in a notebook.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2508s" target="_blank">41:48</a> It doesn't have to, but wouldn't you wanna use this in a notebook?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2511s" target="_blank">41:51</a> You could, but what if you wanna do, "Hey, give me the results of a current lake house. What's the data set?" Right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2517s" target="_blank">41:57</a> M- And again, I, for me, as I've talked about reconning,, my Fabric environment, what a great way to do so.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2525s" target="_blank">42:05</a> But is this, is all the code, like in the-- So this is, this is one area that I'm a little bit more leery on in this package.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2531s" target="_blank">42:11</a> Mm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2531s" target="_blank">42:11</a> So this is a, so to be clear

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2533s" target="_blank">42:13</a> Let's get into this

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2534s" target="_blank">42:14</a> ... this package we're talking about is a Fabric notebook package, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2538s" target="_blank">42:18</a> So it's Fabric notebook toolkit, which how are you running this? So, so this is the thing I'm, so two, two parts.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2542s" target="_blank">42:22</a> Let me, let me put some links here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2546s" target="_blank">42:26</a> I remember where we were with this, yep.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2547s" target="_blank">42:27</a> Yeah. So I, I think it's some worthy to add some clarity to this one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2553s" target="_blank">42:33</a> All right, so first things first- There is a Fabric Notebook toolkit that's there. So I'm gonna click on this link here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2558s" target="_blank">42:38</a> This is the Fabric Notebook toolkit documentation that we're aware of, that we've been given, right? This is coming from,, Fabric...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2564s" target="_blank">42:44</a> Well, let's just... I'll just use the, the acronym here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2570s" target="_blank">42:50</a> Fabric Notebook toolkit. All right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2575s" target="_blank">42:55</a> So this is the actual documentation that came out from the Microsoft blog that was the community saying, "Hey, there's this new thing. The Notebook toolkit is now available."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2582s" target="_blank">43:02</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2582s" target="_blank">43:02</a> In the link of that it talks about, okay, agents rely on Spark., this closes the gap. You can now s- use supported large, large language models in a safe way.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2588s" target="_blank">43:08</a> All those things are there. Oops, it said it can't post the message here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2594s" target="_blank">43:14</a> Let me try that again. Okay, trying one more time to post the message. All right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2600s" target="_blank">43:20</a> Why don't you ask the notebook to do it?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2602s" target="_blank">43:22</a> Right? At the end of this it says, "To learn more, refer to the Fabric Notebook toolkit documentation." Oh.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2608s" target="_blank">43:28</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2608s" target="_blank">43:28</a> Interesting. I'd like to learn more about this one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2611s" target="_blank">43:31</a> When you click that, it takes you directly to the pre-release,

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2617s" target="_blank">43:37</a> The pipeline

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2617s" target="_blank">43:37</a> ... pypi.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2623s" target="_blank">43:43</a> org release of it, and it just basically says... There's very little instructions.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2629s" target="_blank">43:49</a> It says, "Here's the Fabric Notebook toolkit, here's how you install it, and here's your quick start." And there's not much else to it. It's basically, that's it., couple of examples, that's probably it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2636s" target="_blank">43:56</a> Where do you run this, Tommy? Where's the instructions of, like, getting started with... Is this all

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2642s" target="_blank">44:02</a> Oh, there's no, no instructions here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2644s" target="_blank">44:04</a> Yeah. This is where I'm, I'm trying to unpack.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2649s" target="_blank">44:09</a> Like, it needs a little bit more... Like, I understand you built the tool, I understand that it's out there.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2654s" target="_blank">44:14</a> Are you supposed to run this from the command line? Are, like, what are, what are we trying to do to run or execute this?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2660s" target="_blank">44:20</a> How do I give this to my agent so it can run these things and use... Like, how do I, how am I using this with the agent?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2665s" target="_blank">44:25</a> So that's where I'm, like, a little bit, like, confused as to, like, where does this package fit in my workflow?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2671s" target="_blank">44:31</a> So naturally there needs to be a skill here. And when I was testing, Mike, was I was in my harness and was like, I want you to...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2680s" target="_blank">44:40</a> Because again, this is the cool thing, by the way, if you're listening, one of those hacks. If you're in a, a desktop application such as Claude, Codex, or VS Code, just tell it to install Python package or an application that's a CLI tool, and then from that you can ask it to develop a skill.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2689s" target="_blank">44:49</a> And that's what I did where we say, "Hey, install the FNTK. Here's the link, and tell me what you can do with it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2697s" target="_blank">44:57</a> What do we need to do to get set up?"

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2706s" target="_blank">45:06</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2706s" target="_blank">45:06</a> And generally speaking, if it doesn't have great documentation, like this does

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2710s" target="_blank">45:10</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2711s" target="_blank">45:11</a> ... it can go, "Let's try this." All right, we can log in, and once we start trying a few things, then I wanna say, "Let's start creating a skill around this." And this is really, that's usually the best way to start up because you're right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2721s" target="_blank">45:21</a> There's... I would hope, I was hoping that on micro- the Microsoft Learn there would be some documentation. Nada.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2732s" target="_blank">45:32</a> That's, that's like what I w-... So maybe that's my gap in my mo- my knowledge, Tommy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2736s" target="_blank">45:36</a> There needs to be, like, some Learn documentation of, like, "Here's how you can use this. These, there's two methods.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2741s" target="_blank">45:41</a> You can use this in a notebook, or you can just use this straight running Python on your machine."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2746s" target="_blank">45:46</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2746s" target="_blank">45:46</a> Or having your agent run Python

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2748s" target="_blank">45:48</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2748s" target="_blank">45:48</a> ... on your machine using these commands.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2751s" target="_blank">45:51</a> Like, but to your point, Tommy, there needs to be a paired skill with this

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2755s" target="_blank">45:55</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2755s" target="_blank">45:55</a> ... which I think is much more relevant to this whole story, which is, okay, there's a skill now that lets me manipulate, or the, the skill turns into here's all the things I would do with the CLI and this Python library that can now go manipulate and do things in this notebook.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2763s" target="_blank">46:03</a> That makes a lot more sense to me now.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2772s" target="_blank">46:12</a> So, and again, I, I hate that's where the community comes in, right? I'm sure hopefully this will be part of skills for Fabric.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2783s" target="_blank">46:23</a> Just like most of the skills right now with MCP, like, it's hard to use the MCP without the skills for Fabric. But Mike, let's go real world here.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2794s" target="_blank">46:34</a> You got your team, and,, actually let's do the data czar because, like, I think, again, consultants can be different. You're in an organization right now and you guys are semi-adopted to AI.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2806s" target="_blank">46:46</a> Are you tell-, is this a command for people to do, or is this optional, the FNTK, as we look at what it is right now? Is it like, "Hey, we encourage you to use it," or is it mandated, or is this for beta testing only right now?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2822s" target="_blank">47:02</a> I don't know, Tommy. Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2824s" target="_blank">47:04</a> Well, one that... So first, first and foremost, it's in pre-release.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2828s" target="_blank">47:08</a> This is... Tha- thank you. Yep.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2830s" target="_blank">47:10</a> S- so I'm gonna say,, if we're talking about, like, who needs to be using this one, I think users need to have awareness of this. But I think at the end of the day, it's in pre-release, it's something just to play around with.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2843s" target="_blank">47:23</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2843s" target="_blank">47:23</a> It's just gonna provide some assistance or help with you.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2845s" target="_blank">47:25</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2845s" target="_blank">47:25</a> We're not in a place where this is like, we're talking this is hot off the gate, just barely getting started.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2850s" target="_blank">47:30</a> It's alpha.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2851s" target="_blank">47:31</a> It's probably gonna, it's gonna probably be shaping and changing and doing things differently,, over and over. So it's going to be fluid here for these first couple months., so I think it's a, a, for lack of a better term, I think right now it's a toy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2860s" target="_blank">47:40</a> It's discovery. It's figuring out does this work well for your workflow.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2869s" target="_blank">47:49</a> I would not rely on it to be there for long-term experiences with notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2878s" target="_blank">47:58</a> Mm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2878s" target="_blank">47:58</a> However, it does feel like this is really closing the gap where,, let's talk about, let's not talk about this tool specifically, but let's talk about Fabric and notebooks in general. I don't want to have to do a lot of work with notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2887s" target="_blank">48:07</a> I don't want to have to do a lot of work inside that code with Spark.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2896s" target="_blank">48:16</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2897s" target="_blank">48:17</a> I want my agents and I to collaborate on them together. So I think what we're desiring here is an easy way to get my agent, Claude, GitHub Copilot, VS Code, right next to downloading, using, creating notebooks right from this service, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2912s" target="_blank">48:32</a> So,, - There's, there's a lot of th- the idea... So the point here is in the latter part, why is the toolkit critical for an agentic workflow, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2926s" target="_blank">48:46</a> Without your toolkit, you have to write a prompt, generate some code, and then there's usually a developer in the loop which is copy said code over or go over to this notebook and then do some manual step

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2941s" target="_blank">49:01</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2941s" target="_blank">49:01</a> ... to get the code into the notebook and do something.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2955s" target="_blank">49:15</a> Inside this toolkit, the new workflow is write a prompt, the agent is able to describe and understand context about your notebook, then look at said notebook, generate some code, find a section of code to make the change, execute, do diagnostics, and then correct its behavior.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2968s" target="_blank">49:28</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2968s" target="_blank">49:28</a> So we're actually trying to create more of like a loop for the agent to see more of what's happening in the notebook.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2974s" target="_blank">49:34</a> Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2974s" target="_blank">49:34</a> And I think that's why this exists, right? This exists so that I'm not using an agent on the side asking it to write a Python function or something in a notebook function and drop it in.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2983s" target="_blank">49:43</a> I actually need the agent to run the notebook and see the output of, of, of that cell, right? "Hey, agent, I'm having trouble on cell three.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=2992s" target="_blank">49:52</a> Help me come fix this." Okay, when I say that, that's my prompt, it- the agent is then able to use this tool to go get context about

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3001s" target="_blank">50:01</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3001s" target="_blank">50:01</a> ... the cell, the error message, inspect, figure out, let me propose some changes, immediately update the cell for you, and then have the things work that way.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3006s" target="_blank">50:06</a> So I think that's where this is trying to go.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3012s" target="_blank">50:12</a> And I, and I think this is, this is an important part too, because we've talked about this with the MCPs where who do you give it to? I still think we're s- this is an ongoing conversation in terms of is this just your developers?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3023s" target="_blank">50:23</a> Is it just a set of developers? Can your managed self-service side have access to the MCP?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3033s" target="_blank">50:33</a> And I think we're looking at all these agent tools and that's great, that's super cool. However,, we have to be very careful in terms of all the different access that people have.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3045s" target="_blank">50:45</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3046s" target="_blank">50:46</a> With the toolkit then, to me, this definitely seems that this is more of your developers, right? This is really gonna be my BI team that's gonna be using this.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3052s" target="_blank">50:52</a> I'm not going to allow,, just a random Joe Schmo to build their notebooks this way. There may be a flow there.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3058s" target="_blank">50:58</a> Oh, no. Oh, no. I, you are

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3065s" target="_blank">51:05</a> I don't know, Tommy

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3065s" target="_blank">51:05</a> ... if you're just listening, Mike's face is g- contorting.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3068s" target="_blank">51:08</a> I'm sighing. I'm, I'm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3069s" target="_blank">51:09</a> Okay

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3070s" target="_blank">51:10</a> ... what I'm thinking about your comment there, Tommy, like in some, in some directions, yes, I agree with you, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3080s" target="_blank">51:20</a> This is for the developer of notebooks, but this is also trying to allow you to prompt with it. And anytime I'm seeing an agent showing up with prompting, the agent showing up with prompting is trying to then democratize that build experience to, like, business users.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3089s" target="_blank">51:29</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3089s" target="_blank">51:29</a> So I, I do understand your point, Tommy. It is for a developer, but is the intent of this package to open up more developers to notebooks?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3097s" target="_blank">51:37</a> I think the answer is yes. It's

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3105s" target="_blank">51:45</a> Okay

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3105s" target="_blank">51:45</a> ... it's making it easier for you, the developer, to work with it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3113s" target="_blank">51:53</a> But it's like if I'm reducing the barrier, if I can have agents help me build things inside notebooks, all that's doing is it's bringing more novice or n-, an opening of that experience to bring more people to the, to the data engineering space, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3122s" target="_blank">52:02</a> And you want that?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3123s" target="_blank">52:03</a> You, you do want that.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3124s" target="_blank">52:04</a> I'm not saying I don't. Yeah, okay.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3125s" target="_blank">52:05</a> No.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3125s" target="_blank">52:05</a> So

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3127s" target="_blank">52:07</a> Right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3129s" target="_blank">52:09</a> Yes., but here's the thing. Without without any very...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3140s" target="_blank">52:20</a> This goes back to our raise the floor,, or,, lower the ceiling argument. So yeah, I'm gonna bring people who take someone who is just a Power BI pro, which we know they're still out there, and we're like, "You gotta build notebooks now." Am I giving them the toolkit and saying, "This is your, your introduction to notebooks and what they are and what they're supposed to do"?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3150s" target="_blank">52:30</a> Are you nodding or are you not sure there? Because

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3162s" target="_blank">52:42</a> Is this the introduction for notebooks? No, I, I don't think it is.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3166s" target="_blank">52:46</a> I don- I don't think this is the introduction part. I do think this...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3170s" target="_blank">52:50</a> So how do I say this, Tommy? It's like I've just gone to the hardware store

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3174s" target="_blank">52:54</a> Oh, boy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3176s" target="_blank">52:56</a> ... and I just found another better drill.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3183s" target="_blank">53:03</a> Like, I've been using drills my whole life, right? Regular just drills.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3190s" target="_blank">53:10</a> It has the little knob on the front that tells the,, when it starts ratcheting, right? Simple, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3197s" target="_blank">53:17</a> And I just went to the hardware store and I found, oh, there's this thing called an impact wrench, right? Oh, this is a tool that does this other thing, and it does the normal thing and something else that's new, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3203s" target="_blank">53:23</a> I feel like this is another tool in our toolbox. I just walked into the hardware store and I found a brand-new tool I didn't know existed but will help me get my work done.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3210s" target="_blank">53:30</a> So that still means I need to understand how to be like the carpenter or builder or the whatever. Like, I still have to have skills around using notebooks already.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3217s" target="_blank">53:37</a> So I'm not going into someone and saying... I'm not bringing a brand-new person to this and saying, "Start here with this tool." That's not what I'm trying to say.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3224s" target="_blank">53:44</a> Okay.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3224s" target="_blank">53:44</a> I'm trying to say that this is a tool for developers,, but it's, it's only after you have some fundamentals of notebooks, clusters, how they run, what they do, then do you step into like this other world of like, okay, this is a tool that will then help you direct better on top of your notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3242s" target="_blank">54:02</a> Okay. So let me...

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3250s" target="_blank">54:10</a> I'm gonna expand on your analogy, or I'm gonna modify it a bit because to me it's not so much like you have now upgraded your toolkit., you got something for Father's Day, which by the way, I've never gotten equipment for Father's Day. My wife knows me very well because it would not be useful to anyone.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3257s" target="_blank">54:17</a> So, but it... I, I think it's more than just getting a, a better drill or drill kit.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3265s" target="_blank">54:25</a> So you never walk into a, a hardware store and that's not you, Tommy?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3268s" target="_blank">54:28</a> I walk in there when she tells me to, to get a piece to tell me what bay and aisle it's in

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3273s" target="_blank">54:33</a> ... and I walk out, hopefully I got the right piece.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3275s" target="_blank">54:35</a> All right. That sounds good.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3276s" target="_blank">54:36</a> There are good... There are things I'm okay at, that is not one of them., is, is

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3280s" target="_blank">54:40</a> Gotcha.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3281s" target="_blank">54:41</a> But I would, I would say the analogy, it would be more akin to I wanna start building something, my neighbor comes over, who can build anything, goes, "What are you trying to do?", I wanna build a wall downstairs. Like, I can help, and they do basically take over.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3294s" target="_blank">54:54</a> I just go, "Yeah, okay, I can do that." It's like, "Well, I do want a sliding door, not a normal door." I can do that. And they're basically building it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3308s" target="_blank">55:08</a> You're just there watching, going, "That's so cool. Why are they doing that?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3321s" target="_blank">55:21</a> What's the frame for? Okay, where is the piece of wood there?" And I think,, because Mike, the, the upgraded,,, idea is nice, but again, I can take someone, like with, with little to no skill in building a wall and ask my neighbor, and I can have it built for me in my house, and I think we're looking at all this F&TK and the toolkits., again, I, at this point, we could literally get someone on the phone ca- on the phone right now who has never touched notebooks in their life, but saying they need to connect to some random API and put it into a semantic model.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3334s" target="_blank">55:34</a> I can give them this toolkit, and they could probably get some semblance of it, right? Not necessarily validated or, or all the way, but they're gonna have some artifacts and some data in their lakehouse.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3348s" target="_blank">55:48</a> So that to me is a lot more than just getting a better drill kit.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3363s" target="_blank">56:03</a> I feel like this is a precursor to something else that's coming that we're not ready to see yet.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3369s" target="_blank">56:09</a> That's a good point too.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3371s" target="_blank">56:11</a> Right?, when I look at this, it's going,, so th- thinking about the things, so I'm, I'm having my agent here on the side like interact with this a little bit on the side here., there is,, there's no... Again, this is where the documentation I think for me falls short here this.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3381s" target="_blank">56:21</a> You don't really know what it can do, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3391s" target="_blank">56:31</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3392s" target="_blank">56:32</a> They're, they're, for ea- this, this toolkit is designed to make multiple actions with these notebooks: data, notebooks, the source, outputs, and logs. It's extending the experience of what the agent can see inside a notebook, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3402s" target="_blank">56:42</a> Notebooks r- revel in like there's a data portion of this, right? The, the notebook has a definition.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3413s" target="_blank">56:53</a> The notebook has an output. There might be a log that this notebook is doing or a log of the tool.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3423s" target="_blank">57:03</a> The agents cannot see this stuff. It does- they don't, they don't appear.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3433s" target="_blank">57:13</a> And so having something like this in a tool is extending this experience for the agent. And so, again, I'm still, I'm still tr- I'm, I'm where I'm torn, Tommy, on this one is how do we use this effectively?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3444s" target="_blank">57:24</a> I think this is going to push us into a place where we're gonna do a lot less notebook writing

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3455s" target="_blank">57:35</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3455s" target="_blank">57:35</a> ... and we're gonna do a lot more directing around, "I have this table in the b- bronze layer.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3460s" target="_blank">57:40</a> I wanna do this, this, and this to it. Help me run some data quality on this one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3464s" target="_blank">57:44</a> I need you to develop a notebook that does the work." And I know, Tommy, we've been talking about this a lot on the podcast

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3469s" target="_blank">57:49</a> Yeah

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3469s" target="_blank">57:49</a> ... which is we don't-- agents or agentic experiences shouldn't be used to get you the answer about the data.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3475s" target="_blank">57:55</a> Agent sessions or agents should be used to build the system that can be p

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3482s" target="_blank">58:02</a> Mm-hmm

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3482s" target="_blank">58:02</a> ... repeatedly run over and over again to get you the answer, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3491s" target="_blank">58:11</a> And I feel like this is development on top of that system that's helping me, helping our teams become more capable to build the system. This is, this is the agent being used to build the machine that makes the machine.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3500s" target="_blank">58:20</a> The mach-, the machine in this example is like I want a data pipeline, right? Bronze, silver, gold.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3510s" target="_blank">58:30</a> That's what I wanna do. This is giving the agents more,, visibility, assistance, helping to see what's inside those notebooks so I can describe more things at a high level.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3519s" target="_blank">58:39</a> Because what I had to do in the past, which was, "Hey agent, go use the Fabric API. Here's an app registration. Go pull down this notebook."

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3528s" target="_blank">58:48</a> All the thing, yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3529s" target="_blank">58:49</a> Right? Load it on my computer, look at what the code is doing, make your changes, and then go publish it, and then I could run it, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3539s" target="_blank">58:59</a> So I think this is trying to really adjust or give that agent more capability to do, not have to do all those manual steps all the time. At least that's how I'm perceiving it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3548s" target="_blank">59:08</a> Puts that barrier a lot l- lower than it already was.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3552s" target="_blank">59:12</a> Yes.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3552s" target="_blank">59:12</a> Mike, and it's funny because I was gonna ask you initially, w- would, does this change how you would hire a data engineer,, in 2026, '27?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3560s" target="_blank">59:20</a> No, not yet.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3561s" target="_blank">59:21</a> Not yet.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3562s" target="_blank">59:22</a> Not yet.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3562s" target="_blank">59:22</a> But, and I think to your, to your point a little and what, what I'm hearing just from what you just mentioned is this by itself is not like the,, game changer, but w- all these little steps and building blocks and stones that Microsoft is doing around the agentic developer for Fabric, F&TK, the MCPs, the skills that they have, they all work together, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3575s" target="_blank">59:35</a> You're not gonna use one of these by themselves to like, in a sense, complete the, the whole agentic experience. You do need all three., you're, or at least you do need MCPs, you need skills at this point.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3588s" target="_blank">59:48</a> They are just continuing to bring it forward. And to me, is it the main thing, the future of Fabric development are gonna be things like F&TK?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3601s" target="_blank">60:01</a> Probably not, but I think it's gonna be an essential part of the ingredients, right? If, if Mike, I know my next article actually.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3614s" target="_blank">60:14</a> It's gonna be what is the Fabric recipe? What, if I was making a meal, the Fabric agentic meal, what would be in the ingredients, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3627s" target="_blank">60:27</a> And I think obviously there'd be a hefty dose of the skills,,, with a large meat of MCPs. And F&TK is just like all the necessary sauces or spices and spices there that are just gonna be just as essential to the final product.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3640s" target="_blank">60:40</a> That's what we're seeing more and more of today. I look at this and yes, by itself I would agree with you.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3653s" target="_blank">60:53</a> This is not gonna change how I'd hire someone. But if I met someone who's like, "I wanna get in data engineering, I'm pretty novice, but man, do I know MCPs, and have I been learn- learning the theory of data engineering, and,, I know about F&TK and I'm really good with,, the harnesses, but I've never actually executed it myself.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3666s" target="_blank">61:06</a> But I can tell you everything to know about Medallion." I wanna, I wanna be serious about having that conversation with them on hiring them, because that's the elements that they need to know to execute.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3681s" target="_blank">61:21</a> I think, I think in this new era when we're trying to talk about who we're hiring and what skills should they know,,, first and foremost for me, I'm making sure I'm hiring individuals that are very curious.,, Kurt gave... And we talked to Kurt Bueller on the podcast recently, and he gave the three Cs that I think are very relevant, right?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3694s" target="_blank">61:34</a> You need to be creative, right? Think about ways creatively.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3707s" target="_blank">61:47</a> You need to be curious,, willing to learn, willing to, again, 'cause everything is changing so fast, you're gonna ha- that's gonna have to be part of a core part of who you are, and you're gonna have to be very critical, right? Critical meaning does this new feature, function, value add value for me at the end of the day, or is it, or is it just blowin' smoke?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3720s" target="_blank">62:00</a> So I don't f- I still think I'm hiring a data engineer that understands notebooks, that understands Fabric, that understands, like, a lot of the core aspects of, like, why we design things the way we design them.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3733s" target="_blank">62:13</a> Mm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3733s" target="_blank">62:13</a> , there's a lot of,, I wanna say maybe friction, but maybe it's not... Maybe friction's not the right word right now, Tommy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3743s" target="_blank">62:23</a> There's a lot of,, opinions, I'll say it that way. There's a lot of opinions right now on what does bronze, silver, and gold look like.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3754s" target="_blank">62:34</a> Oh, yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3754s" target="_blank">62:34</a> I think it's pretty clear in my mind. But how, how do you define that at scale?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3760s" target="_blank">62:40</a> And I think there's a lot of organizations that are still resistant to moving into a world where they're doing data contracts and handing off from one team to the next. Like, this is your responsibility.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3767s" target="_blank">62:47</a> I'm gonna give you a Lakehouse table.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3773s" target="_blank">62:53</a> Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3773s" target="_blank">62:53</a> What you do with it after the fact, that's on you, right?, a- and th- that's, that's the stuff that I think I look at this going, it's we have to evaluate where do people sit in these roles.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3792s" target="_blank">63:12</a> Mm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3792s" target="_blank">63:12</a> And as these tools come out, you have to have the fundamental knowledge. You're the data engineer.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3796s" target="_blank">63:16</a> You're going to be using these things. This is one more thing in your toolbox.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3800s" target="_blank">63:20</a> You've gotta be curious about it. You've gotta figure how it works.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3804s" target="_blank">63:24</a> But then you have to e- evaluate, does this actually fit your better s- your, your larger plan for the organization?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3808s" target="_blank">63:28</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3809s" target="_blank">63:29</a> Are we g- like, are we even a company, as a company, are we even comfortable letting people build notebooks with agents? I think you should be.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3818s" target="_blank">63:38</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3819s" target="_blank">63:39</a> This is a step in the right direction to get you closer to that. I think you're already seeing this in Databricks., Databricks has their Genie capability, and their Genie is basically the GitHub Copilot equivalent, and inside that tool you're editing and manipulating and working with things with notebooks.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3834s" target="_blank">63:54</a> It, it depends on what you... And I think as we get near the end, I would add on to that, I think you as that data czar or the leadership point of view, you have to be aware of things that are preview, general, available, and you have to be very conscious of that.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3843s" target="_blank">64:03</a> I think you mentioned this just about the,, toolkit. It's pretty powerful.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3853s" target="_blank">64:13</a> It's really cool, but it's alpha. Like, we're, it's so early, and I think you, just like we know right now, the whole bigger story around AI in general is it's moving fast.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3862s" target="_blank">64:22</a> It's moving faster than some people would like, than most people would like at this point. I think, too, both on even things that are being developed in Fabric as well, you have to be conscious of that because there are capabilities here, we're not sure how it works, works.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3872s" target="_blank">64:32</a> It looks really cool. It's really great.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3881s" target="_blank">64:41</a> But I think if I'm a CTO or CIO or a developer BI at my organization, am I gonna release this in the wild right now? I'm gonna be monitoring it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3890s" target="_blank">64:50</a> I'm gonna have a sandbox for it. But I'm gonna be very careful with that, especially as we have something that's just in alpha.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3900s" target="_blank">65:00</a> And this is all well and great, but I think part of the responsibility, and I know Kurt was mentioning this too, you have to be responsible around what you actually in a sense allow out there. I think a lot of these things too, once you allow it, you can't really put it back in the box.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3909s" target="_blank">65:09</a> Again, what we talked about the other day, if MCPs went away right now and your ability to use them with Fabric went away, holy crap, there's a lot of relearning we're gonna have to do. And I think we just have to be aware of what we start allowing.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3919s" target="_blank">65:19</a> I don't wanna end on such a sour note. I love this tool.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3928s" target="_blank">65:28</a> I love where this is going, and I think we're gonna see such a powerful impact here. So that's my thoughts, Mike.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3938s" target="_blank">65:38</a> Mike, w- where do you wanna end us?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3947s" target="_blank">65:47</a> I think I wanna end this one on, I, so I liked this, the conceptually I think this is in the right direction. The i- the execution of this one is right now, the way it stands today is poor, right? There's not clear documentation.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3961s" target="_blank">66:01</a> Mm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3961s" target="_blank">66:01</a> ,, looking at their document, it's like they literally have an article and say, "Here, go read it up on PyPi." That, that's not documentation for users to understand. Like, I'm reading this documentation, I'm confused.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3969s" target="_blank">66:09</a> Where do I start with it? How do I install it?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3977s" target="_blank">66:17</a> So I have to go into Python. I have to install the, the packaged library.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3984s" target="_blank">66:24</a> But then I believe in your quick start, that's all CLI code. You should be running this all in your CLI.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=3992s" target="_blank">66:32</a> So I'm confused as to, like, the code they g- even the code examples they give you, they're not really telling you where to run and execute them on inside this code base. So I'm, I'm a little confused here as to, like, what should I be doing with it? Where do I run it?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4000s" target="_blank">66:40</a> Mm.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4000s" target="_blank">66:40</a> And what's the value of where I'm running things in? So,, if this, if the intent of this is to run this from the GitHub Copilot CLI or the Claude CLI, make it clear.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4010s" target="_blank">66:50</a> Make it clear what we're trying to do here,, and making sure that you go, "Okay, for Python you must install this library. For the quick start-"

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4020s" target="_blank">67:00</a> Right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4020s" target="_blank">67:00</a> "... here's what you're doing." And so to me, I look at this going, it feels like they're mixing Python with s- with,, command line interface code, and in their documentation I'm not clear And so I think, again, it's alpha.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4035s" target="_blank">67:15</a> This is super hot off the press. So again, very, very new., and I'm hoping-- but we'll see.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4050s" target="_blank">67:30</a> And w- I'm, I'm hoping in the next couple months, Tommy, or maybe even a couple weeks, we'll see an update to this or an update from an official Microsoft Learn documentation that shows you step-by-step how to use this and where it's tended to be used. Right now, to me, it's unclear, and even my agent's unclear because when I ask my agent to go build something around this one, it's trying to build a full Python notebook around everything that is, that is the,, the toolkit.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4065s" target="_blank">67:45</a> Cool.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4066s" target="_blank">67:46</a> I actually don't think that's the right-- I don't think that's the right approach.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4068s" target="_blank">67:48</a> Oh.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4068s" target="_blank">67:48</a> I think it's actually wrong.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4069s" target="_blank">67:49</a> No.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4070s" target="_blank">67:50</a> Like, it-- If my agent can't read the instructions on that information page and know that it is a CLI that we're trying to build this from, and which commands to run on the CLI versus in the notebook, that's a problem. So to me, I look at this going, there's an issue here with this one because the documentation isn't matching

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4088s" target="_blank">68:08</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4089s" target="_blank">68:09</a> ... my understanding.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4092s" target="_blank">68:12</a> And that's my only feedback on this one. I like the idea of this one.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4096s" target="_blank">68:16</a> This will be a good product eventually. I just need s- a little bit more love on the documentation side. That's my, my hesitation.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4100s" target="_blank">68:20</a> I love it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4101s" target="_blank">68:21</a> That's okay for alpha, though.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4102s" target="_blank">68:22</a> That's not-- what? This-- A whole conversation on alpha, not bad. You're welcome, man.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4106s" target="_blank">68:26</a> Yeah. This, this is the right dir-- The-- So I will say this, mad kudos for Microsoft to start to recognize,, most of what they're building nowadays is all around building tools that build the machine

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4121s" target="_blank">68:41</a> Right

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4121s" target="_blank">68:41</a> ... and not requiring your agents to be daily running to answer questions, or daily running to do data transformations, or daily running to do notebook execution that should be just happening through the Fabric system.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4129s" target="_blank">68:49</a> So I think this creator agent experience or the agent developer is really good.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4139s" target="_blank">68:59</a> Yeah.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4139s" target="_blank">68:59</a> Like this-- We're getting-- We're f- we're finally getting to the place where I feel like Microsoft is listening, and we're getting real creative experiences with our agents that are on top of all the Fabric things.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4149s" target="_blank">69:09</a> Hundred percent.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4149s" target="_blank">69:09</a> And that I do like.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4151s" target="_blank">69:11</a> Hundred percent. Dude, love it.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4152s" target="_blank">69:12</a> All right. That being said, Tommy, where else can we find the podcast?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4156s" target="_blank">69:16</a> You can find us on Apple, Spotify, wherever you get your podcasts. Make sure to subscribe and leave a rating.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4160s" target="_blank">69:20</a> It helps us out a ton. Do you have a question, idea, or topic that you want us to talk about on a future episode?

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4163s" target="_blank">69:23</a> Maybe you're using the toolkit, FNTK. That's right.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4167s" target="_blank">69:27</a> And you wanna--, maybe something we wanna discover more. Well, head over to powerbi.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4171s" target="_blank">69:31</a> tips/podcast. Leave your name and a great question.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4175s" target="_blank">69:35</a> And finally, join us live every Tuesday and Thursday, 7:30 a. m.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4178s" target="_blank">69:38</a> Central on all powerbi. tips social media channels.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4183s" target="_blank">69:43</a> Thank you all so much, and we'll leave you with another earworm. Here we go.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4186s" target="_blank">69:46</a> Oh, boy.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4186s" target="_blank">69:46</a> I used to chase the moment when they stared for hours. Thinking longer glances meant I had the powers.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4197s" target="_blank">69:57</a> Then I learned the quiet wind that changes everything. The dashboard wins when they barely need to cling.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4208s" target="_blank">70:08</a> Barely look, barely look. If the answer finds him, you already took.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4220s" target="_blank">70:20</a> Barely look, barely look. A glance is enough when the truth is booked.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4231s" target="_blank">70:31</a> Barely look, that's the victory. Information landing with such clarity.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4242s" target="_blank">70:42</a> Barely look. Barely look.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4253s" target="_blank">70:53</a> Nobody wants a maze dressed up as art. They want the signal singing to the heart.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4264s" target="_blank">71:04</a> If they skim and know, you did the sacred part. Beauty is the speed of understanding stars.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4275s" target="_blank">71:15</a> Barely look, barely look. If the answer finds him, you already took.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4286s" target="_blank">71:26</a> Barely look, barely look. A glance is enough when the truth is booked.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4298s" target="_blank">71:38</a> Barely look, that's the victory. Information landing with such clarity.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4309s" target="_blank">71:49</a> Barely look. Barely look.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4320s" target="_blank">72:00</a> I used to feel ignored when the eyes moved on. Now I feel successful when the need is gone.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4331s" target="_blank">72:11</a> They came for the knowing, not the show I made. Barely look means the message stayed.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4342s" target="_blank">72:22</a> Designed for the skim, designed for the breath. Designed for the person who has nothing left.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4354s" target="_blank">72:34</a> If they barely look and still they understand. You held the whole festival in one soft hand.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4365s" target="_blank">72:45</a> Every pageant river on a desert rise. I built for the glance beneath the open skies.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4376s" target="_blank">72:56</a> Power BI quiet as a winning horse. The best report is one they barely look.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4387s" target="_blank">73:07</a> Barely look, barely look. If the answer finds him, you already took.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4398s" target="_blank">73:18</a> Barely look, barely look. A glance is enough when the truth is booked.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4409s" target="_blank">73:29</a> Barely look, that's the victory. Information landing with such clarity.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4420s" target="_blank">73:40</a> Barely look. Barely look.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4432s" target="_blank">73:52</a> Barely look. That's the victory.

<a href="https://www.youtube.com/watch?v=eH2NZRZHBuY&t=4443s" target="_blank">74:03</a> Barely look. That's the victory

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/podcast](/podcast/) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
