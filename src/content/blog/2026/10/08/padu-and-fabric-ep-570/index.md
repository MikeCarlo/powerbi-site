---
title: "PADU and Fabric - Ep.570"
date: "2026-10-08"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "PADU"
  - "Fabric governance"
  - "Lakehouse"
  - "DAX contracts"
excerpt: "Tommy Puglia borrows a four-bucket scale from Fatal Risk and asks where Fabric patterns land: preferred, accepted, discouraged, or unacceptable. Mike Carlo keeps the answer tied to the job, not the artifact."
featuredImage: "./assets/featured.png"
---

Fabric gives a team several ways to store data, ship a change, and let an agent touch production. Tommy Puglia and Mike Carlo sort those choices with PADU: preferred, accepted, discouraged, and unacceptable.

<iframe
  width="100%"
  height="415"
  src="https://www.youtube.com/embed/6w8E-5SwvoQ"
  title="PADU and Fabric - Ep.570 - Power BI tips"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## News & Announcements

- **[All About the Power BI / Fabric MCP](https://www.meetup.com/chicagolandpowerbi/events/316158533/?eventOrigin=group_upcoming_events)**. The next Chicago Fabric and Power BI user group is October 22. Tommy's session installs the Fabric remote MCP and the local Power BI semantic-modeling MCP, then walks through what each one can do. RSVP with a first and last name. A handle is not enough for the ID check at the door. The same morning they also have a 10 a.m. Central live stream on Skill Vault, Tommy's app for moving agent skills between tools.

- **[Trusted AI starts with Microsoft Fabric, Real-Time Intelligence, and IQ](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/trusted-ai-starts-with-microsoft-fabric-real-time-intelligence-and-iq/5369528)**. Tommy reads the post as Microsoft placing Fabric inside a wider IQ story: Web IQ, Work IQ, Foundry IQ, and Fabric IQ. The line he pulls is Fabric as the operational nervous system: observe signals through OneLake and Real-Time Intelligence, analyze them with Fabric IQ's business context, decide with AI-assisted reasoning, and act through people and agents. Mike hears event-driven work, not a truck streaming GPS all day, and he does not want an IQ brand on every surface. He wants an agent that can reach the data. Tommy's counter is enterprise permission: a governed bot is not the same as a consumer connector. Tommy also counts the word ontology 14 times and finds an ontology MCP mentioned without a clear install path.

- **[Understanding DAX contracts when using AI](https://www.sqlbi.com/articles/understanding-dax-contracts-when-using-ai/)**. Marco Russo and Alberto Ferrari argue that the important artifact is not the DAX. It is the contract: a structured description of the business rules the code must follow, sitting between a vague model sketch and the measure itself. Their customer-ranking example starts by asking what the rank means (who competes, which filters count, how ties break) and only then asks the agent to write the measure. Mike takes that as confirmation that business logic buried in DAX, SQL, and Power Query has to live one layer higher, in a file both people and agents can read. He suspects semantic views are what pushed the article into the open. Tommy calls the skill a conductor's skill: move context to the right tool, check the output, and keep the token bill honest.

## Main Discussion

**Topic:** A PADU scale for Fabric, three years in

Tommy found the scale in *Fatal Risk* by Roddy Boyd, in the section on AIG. A preferred practice might be quarterly statements online. An accepted one might add a printed annual report. Defaulting to paper was discouraged. Paper only was unacceptable, and it was removed. Unacceptable, as he reads the book, was close to a firing offense. Preferred is not a mandate. It is the pattern that gets people hired and promoted.

- **The first weight is cost, and the cloud flipped it.** Mike's high-level cut is that storage is cheap and compute is expensive. On premises, the machine was the expensive purchase and idle CPU was waste. Drives were the hard part to add. In Fabric, a gigabyte for a year is close to nothing, so the design computes once, stores the result, and reads it back. Bronze, silver, and gold, notebooks that land a table, and in-memory semantic models all follow from that. Tommy agrees on capacity, then refuses to let CU be the only weight. Customer experience and trust in the data sit beside it. A cheap pattern that nobody trusts still fails.

- **AI is an organizational problem, not a COE sidebar.** Mike's third weight is that employees will use agents whether or not the company buys the seats. The old shadow-IT complaint about Excel is the same pattern: people use the tool they have. He is wary of backends that have not been through Fabric's compliance story, because the security surface just got larger. Tommy's list for the rest of the hour is customer experience, capacity, and AI integration.

- **Storage does not get one grade.** Both put the lakehouse at preferred for batch analytics: SQL analytics endpoint, notebooks, and agents that can build on the pattern. SharePoint lands at accepted, especially with OneLake mirroring. A personal gateway pulling files off a laptop is on the low end, discouraged and close to unacceptable. A Fabric SQL database is preferred when the job is an app or a form that writes in the moment, and only accepted when the job is analytics. Mike notes a floor: even an F2 feels the database. He has heard of on-demand billing and has not seen the numbers or a blog post.

- **Git is preferred. Publishing around the pipeline is not.** Mike lives in GitHub now because an agent can write the README that tells the next person, or the next agent, why the project exists. Deployment pipelines and the deployment planner are accepted, with the open question of how data moves from dev to test to prod. Publishing a report straight into production, outside the pipeline, is discouraged. It can break the link between the report and the semantic model. Developers should live in dev. An agent on a live XMLA endpoint can delete a table before anyone says stop, which is why version control is no longer optional.

- **The lightning round splits them in a few places.** Export to Excel is discouraged for both. Analyze in Excel is accepted. Paginated reports are accepted for Mike, and only discouraged-with-exceptions for Tommy (invoices, email, automation), because the UI does not match the engine. Dataflows Gen2 are accepted for Mike, as the path most Power BI people already know, and discouraged for Tommy on cost. Spark environments are preferred. Data agents are discouraged for Mike, because he would rather have an agent call the APIs or a Fabric app, and accepted for Tommy when they are used with care. User data functions are accepted, and preferred once Fabric apps need them. Fabric apps themselves are preferred.

- **Ontology is not ready to be self-service.** As of October 8, Tommy puts the ontology item at unacceptable until there is a plan. He does not want marketing to create one on a whim, and he is explicit that this is not a forever ban. Mike puts it at discouraged. The message is not clear, he does not see how the agent uses it to get a better answer, and he would rather call the thing a knowledge graph: business terms bound to tables and relationships. They leave the argument for another episode.

## Looking Forward

Write the four buckets down for one workflow you already run, including the use case, before you grade the artifact.

## Episode Transcript

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=0s" target="_blank">0:00</a> Dance to the day to laugh in the mix. Fabric and A. I get your feels. Explicit measures. Drop the beat now. Kings feel the crowd. Explicit measures. Explicit measures.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=28s" target="_blank">0:28</a> Hello, everyone, and welcome back to the explicit measures podcast with Tommy and Mike. Hello, everybody. How you

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=33s" target="_blank">0:33</a> doing? Dude, I'm doing OK., this is that time of year.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=38s" target="_blank">0:38</a> Baseball playoffs. Yankees just got eliminated yesterday, Mike.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=42s" target="_blank">0:42</a> So let's talk power behind fabric because you don't want to talk about you don't talk about the Brewers,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=47s" target="_blank">0:47</a> Tommy.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=48s" target="_blank">0:48</a> Not really. It's always October when I question the morality of sports.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=54s" target="_blank">0:54</a> Like, why should I care about a uniform and someone hitting a ball with a bat? Does it affect my life?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=59s" target="_blank">0:59</a> Does it save my soul or change if I have to pay taxes? It doesn't.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=64s" target="_blank">1:04</a> And I always question that now, especially when the Yankees get eliminated in three games. But yeah, good on the Brewers. Good on you guys.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=70s" target="_blank">1:10</a> , Tommy, I'm sorry for you, but the Brewers made it through. The Brewers made it through.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=74s" target="_blank">1:14</a> Yeah. and then maybe actually do something with your first

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=79s" target="_blank">1:19</a> place record so

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=82s" target="_blank">1:22</a> we should try we should come on team keep it together here we did it in four so that was usually they drag this on to like every single game in the series so i'm actually shocked they were like oh got it done in in four games so all good on you yeah I don't get to say this very often because very rarely do I make it farther than the Yankees or the Brewers make it farther than the Yankees anyways.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=96s" target="_blank">1:36</a> So,, we're also like the underdog. We're a very small team compared. You guys are.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=111s" target="_blank">1:51</a> You have the best record in the major leagues.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=114s" target="_blank">1:54</a> That's not my record. We're talking about money per like money per franchise.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=116s" target="_blank">1:56</a> All right. Tommy knows this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=119s" target="_blank">1:59</a> I also know what the most wins out of 30 teams means.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=124s" target="_blank">2:04</a> Again, every time, even a squirrel can find a nut. Even a blind squirrel can find a nut, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=133s" target="_blank">2:13</a> We've done well this year. So anyways, we'll take the wins when we get them because most other years we're losing., that being said, let's move on to our main topic today.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=142s" target="_blank">2:22</a> Our main topic looks like it has an acronym in it. It is.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=151s" target="_blank">2:31</a> So let's explain that. Cause I had to look it up myself before we get going here, Purdue and fabric., what does that even mean?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=160s" target="_blank">2:40</a> So,, P stands for preferred a is accepted. D is discouraged and U is unacceptable.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=168s" target="_blank">2:48</a> So defining what we want to be able to do or not do in our organization,, how does a center of excellence define these standards, patterns on how you want to work with Fabric and or Power BI? What does that look like for your organization?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=177s" target="_blank">2:57</a> So I think these buckets will help us to categorize patterns or behaviors that we're doing now. And what does that look like inside?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=186s" target="_blank">3:06</a> Potentially, it might even change a little bit between a small and large organization. So we'll try to unpack some of these concepts around Power BI and Fabric and unpacking these acceptable or not acceptable patterns.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=195s" target="_blank">3:15</a> Cool. Tommy, you want to kick us off with your first announcement or news item?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=205s" target="_blank">3:25</a> Yes. So we actually have October 22nd is going to be the next Chicago Power BI and Fabric meetup.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=218s" target="_blank">3:38</a> It's all MCPs all the time. We're going to help users install it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=231s" target="_blank">3:51</a> If you can join, we're going to actually work through what it looks like to set up both the Fabric remote server and the Power BI local semantic modeling MCP server. and then actually how to use it the best ways to apply it what capabilities it has and that's going to be our session so make sure the meetup link is on youtube in the description of the podcast make sure to rsvp before you got rsvp or you cannot come in so it's your full name yeah

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=245s" target="_blank">4:05</a> it's not your name that's you've got to be your full name on the rsvp because you've got to be let in the building so just fyi about those things

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=250s" target="_blank">4:10</a> yeah So we're really excited about that. So again, make sure to RSVP coming up in a few weeks, two weeks.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=256s" target="_blank">4:16</a> And you and I are talking today, aren't we? On the podcast, we are.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=262s" target="_blank">4:22</a> No, yes, after the podcast. The live event.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=268s" target="_blank">4:28</a> So we're going to showcase Skill Vault.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=275s" target="_blank">4:35</a> Yes, correct. Sorry.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=277s" target="_blank">4:37</a> There's another live stream coming. There's another

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=278s" target="_blank">4:38</a> live stream. Yeah, we've

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=279s" target="_blank">4:39</a> got it scheduled. What time are we talking about that one?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=283s" target="_blank">4:43</a> 10 a. m.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=287s" target="_blank">4:47</a> Central. 10 a.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=291s" target="_blank">4:51</a> m. Central.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=295s" target="_blank">4:55</a> So we're doing an early podcast now, but Tommy's got a skill vault that he's been working on with some AI solutions, pieces that you can go use to help move your skills between different environments, between different agents. We're going to live demo that as well. Awesome.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=300s" target="_blank">5:00</a> All right, so let's get to some news news. And what we have here, the first one is from the Microsoft blog.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=318s" target="_blank">5:18</a> This is one of those conceptual ones. And it is about trusted AI starts with Microsoft Fabric.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=336s" target="_blank">5:36</a> real-time intelligence and IQ. And what the main article is really saying, Mike, is really positioning where Microsoft's overall plan, not just Fabric, play in their idea for really intelligence for organizations.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=353s" target="_blank">5:53</a> They're really putting this together in the whole context of the umbrella of Microsoft IQ, which has four main components in it. Web IQ, Work IQ, Foundry IQ, and and Fabric IAQ.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=371s" target="_blank">6:11</a> And where they're positioning Fabric, and I want to get your take on this, is Fabric is positioned as the operational nervous system to observe business signals through OneLake and real-time intelligence, to analyze them using Fabric's IQ business context, decide with ai assisted reasoning and govern policies and act through people work through an agents and a big focus that i'm seeing here is about the real-time intelligence and that's where they see fabric iq playing a role some of the so let me stop there so because again a lot of this is about the streaming connectors schema where event streams it's really putting the money on hey fabric is for real time for your overall iq scheme What's your take on that?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=392s" target="_blank">6:32</a> , I think there's a lot of data that comes into the system here. I think a lot of this is very relevant.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=399s" target="_blank">6:39</a> There are organizations that are finding value in real-time analytics, but less than, I think maybe there's a misnomer around what real-time analytics means, right? I think real-time analytics means doing things in real time, like meaning a file shows up and then you process the file as it occurs, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=406s" target="_blank">6:46</a> You may not run that process all day long and it may not even run until tomorrow's file show up, right? Something like that, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=413s" target="_blank">6:53</a> So I'm looking at this going, I think they're trying to move a bit more of the ecosystem more towards an event driven action based system, right? That makes more sense to me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=420s" target="_blank">7:00</a> When I think people think about real time, they're thinking like, oh, I'm going to have a stream of data coming from a truck that's delivering packages, and I'm going to get the GPS location, and it's going to constantly send data. I know when you process that data in real time, it's expensive.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=427s" target="_blank">7:07</a> The more you process data, the more compute you're going to incur. So one, I just want to preface this with, I think they're trying to talk about here event-driven data.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=434s" target="_blank">7:14</a> I think that's really the point. They're trying to make the system be better for that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=441s" target="_blank">7:21</a> And then when something shows up, you're able to evaluate and pull in agents when needed. So I'm going to choose to interpret it that way.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=448s" target="_blank">7:28</a> There's so many IQ things that they're throwing at us now. I feel like when I buy a Claude or I feel like when I buy a Grokbot or..., an open AI dot, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=455s" target="_blank">7:35</a> If I'm buying a system, I don't care about work IQ and web IQ and foundry IQ and fabric. I don't care about any of that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=462s" target="_blank">7:42</a> I care that my agent. whatever that may be, a bot or a dot, can just access the information.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=469s" target="_blank">7:49</a> So to me, this is a lot of fanfare around these IQ systems that are like, we're going to put IQ on everything. I don't really care about any of that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=476s" target="_blank">7:56</a> I care that I can get some agent to talk to the data in the easiest way possible. And I feel like there's just so much friction right now inside the Microsoft ecosystem to get anything to talk to each other.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=483s" target="_blank">8:03</a> I can't work with this. It's just hard.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=490s" target="_blank">8:10</a> I look at comparatively... I look at, I'm all in on Grokbot.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=496s" target="_blank">8:16</a> It's so cool, Tommy. I'm automating a lot of my workflow with this thing.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=503s" target="_blank">8:23</a> It handles things for me. It's doing reasonable stuff.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=510s" target="_blank">8:30</a> It's at a good price point. It's getting things accomplished for me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=517s" target="_blank">8:37</a> So when I look at that Grokbot system, I'm able to give it. And when I looked at it initially, it was, hey, I want to have a calendar.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=524s" target="_blank">8:44</a> Great. Sign into Google Calendar.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=531s" target="_blank">8:51</a> It just works. It can read my calendar.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=538s" target="_blank">8:58</a> Hey, I wanted to go handle emails in my Gmail. Great.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=545s" target="_blank">9:05</a> Sign into Gmail. It works.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=552s" target="_blank">9:12</a> There's all these MCP hooks that make these agents work on top of the actual data. None of that requires me to have Google IQ or Google email IQ or search the web IQ from Google.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=559s" target="_blank">9:19</a> Like the bot just figures it out, knows how to do it. So I think this is a lot of fanfare and marketing material on top of this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=566s" target="_blank">9:26</a> That's just not needed for me. I literally, all I care about is M365 agents.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=573s" target="_blank">9:33</a> Do I have an agent? Can I know what they're doing?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=580s" target="_blank">9:40</a> Can I treat them like an employee? Period.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=587s" target="_blank">9:47</a> All this IQ stuff is not helpful to me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=594s" target="_blank">9:54</a> Well, I'm curious if the devil's advocate or the other side of the argument here to me, Mike, is with the Googles or the other connectors, right? They're not, and I know you can say this about Google, but they're not necessarily enterprise tools.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=604s" target="_blank">10:04</a> And when you think about the Microsoft ecosystem or the Office 365 ecosystem, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=615s" target="_blank">10:15</a> Yes.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=616s" target="_blank">10:16</a> You just don't also want an MCP to be able to do whatever it can if you're not an admin, right? different roles and departments are going to have different permissions or capabilities.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=626s" target="_blank">10:26</a> So that to me is where the IQ makes sense. Now, why there has to be a web IQ, that makes sense.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=637s" target="_blank">10:37</a> Like you don't want your, your bot just running the web and an organization pulling data in that could be malicious or wrong. So having that governed by, but again, but it isn't, that would be the argument. However, like I understand,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=647s" target="_blank">10:47</a> I understand your point. But I'm also at a miss at for, why do I need a thing called WebIQ to do it?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=656s" target="_blank">10:56</a> Aren't I just governing the bot that does the thing? Or I'm setting a policy around, hey, here's a policy.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=665s" target="_blank">11:05</a> Everyone can use these agents. And here's places where we let agents search the web on or not search the web on or use it like...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=675s" target="_blank">11:15</a> I'm thinking about it less about the IQ surface area and more about the user and the user groups and the interest surface area. To me, that's where it makes the most sense here because the story here is still, to me, it still seems disjointed at this point.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=684s" target="_blank">11:24</a> A hundred percent. Speaking of MCPs, Mike, I was going through the article and like, they got to talk about ontology somewhere in this article. How many times do they

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=693s" target="_blank">11:33</a> refer to that?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=695s" target="_blank">11:35</a> Oh, more than once. That's for sure.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=698s" target="_blank">11:38</a> And 14 times I searched for the word. It's 14 times in the article.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=702s" target="_blank">11:42</a> Yeah. And talking about disjointed, if you look, you can also search ontology MCP.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=713s" target="_blank">11:53</a> There's now apparently an ontology MCP, which has a direct link to defining business rules, but it doesn't talk about at all a link to installing the ontology MCP. which I find this very strange.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=723s" target="_blank">12:03</a> So below in the trusted or shared context for operations and AI underneath one of the graphics, it says create ontology MCP tools. When I click on that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=735s" target="_blank">12:15</a> It just takes you to the ontology agent.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=737s" target="_blank">12:17</a> Yeah. So, okay. There is another

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=739s" target="_blank">12:19</a> article. They actually missed the article because right beneath that, there is another one that says consume the ontology preview as an MPC server. So

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=746s" target="_blank">12:26</a> yeah,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=747s" target="_blank">12:27</a> there is an MPC something coming out. Now, one of these questions I'm worried about, like concerned about here, Tommy, is when I think when I see this thing, MCP server things, I'm hoping that that is using an API call to do things, to do actions on the data inside Fabric or getting things in and out of the ontology.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=760s" target="_blank">12:40</a> I'm hoping this is not like call the MCP server and then I'm calling more CUs because I'm now using an agent to do something My impression of the MCP servers are, yes, it's a library of tools. It has a handful of API calls.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=773s" target="_blank">12:53</a> And I'm not spending money on using an MCP thing to go spin up another agent to go talk to the ontology. That doesn't seem right to me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=786s" target="_blank">13:06</a> That's not my understanding of how other systems work with MCPs.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=800s" target="_blank">13:20</a> A hundred percent. And here's the crazy thing.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=804s" target="_blank">13:24</a> You're not creating MCP for your ontology items. You would have to create an MCP per ontology.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=808s" target="_blank">13:28</a> Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=809s" target="_blank">13:29</a> So how you actually install, which is insane to me to think about what, I don't know. You can't use a service principle to access it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=825s" target="_blank">13:45</a> I don't like that either. So yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=841s" target="_blank">14:01</a> I'm sure there's some restrictions on here. I think the overall picture, Mike, or the bigger picture here is they're trying to fit where Fabric and the Fabric tools fit in Microsoft's IQ and Microsoft's overall vision for artificial intelligence.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=856s" target="_blank">14:16</a> That's what we're looking at here. And I don't think that's really...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=872s" target="_blank">14:32</a> It's getting more defined, but I still think there's still very... we're in pangea now of you can tell i've been watching dinosaur movies with the kids but we're i think still the tectonic plates are still moving to me so it's not super clear so that is that article and mike i got one from an old friend someone we have actually haven't done an article on in a while and this is mr marco russo in alberta ferrari okay And this is a great article that I think is going to be upgraded to an entire episode.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=888s" target="_blank">14:48</a> But their article here is understanding DAX contracts when using AI. And the idea here, the central argument is that when we use AI to build DAX measures, The most important artifact is not the DAX code or the function itself, but is what they call the contract that defines the business rules and the code must follow.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=904s" target="_blank">15:04</a> So the contract is a structured description of how the calculation would be within the semantic model. It sits between technical code and high-level business documentations.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=920s" target="_blank">15:20</a> And Marco and Alberto are arguing that historically business logic was buried in DAX, SQL and Power Query and Excel formulas. But AI can change that workflow.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=936s" target="_blank">15:36</a> So rather than writing,, create a customer ranking measure, basically,, start by asking what questions need to be answered to define customer rating. so i love this idea i love this idea there's a few thoughts i had on top of it but i love this idea this is things we've talked about too with doing recons first but i think especially with dax i was mike i was literally talking to a team team yesterday that are you going to be using ai i said yeah if that's okay i said and then we went on a conversation about The fact that anyone can use AI and get somewhat good results with Fabric and semantic modeling.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=951s" target="_blank">15:51</a> But there is, to me, a experience, a skill on providing the right prompts and context using the MCP servers. to make it work, and I think this is showcasing it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=967s" target="_blank">16:07</a> So, Mike, looking at this article, talking, and also talking more about your experience prompting and context engineering, does this just show you more and more how important that element is to really just using AI?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=986s" target="_blank">16:26</a> There's two thoughts that come to mind. My first thought really stems around, wow, have the tides have changed.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=995s" target="_blank">16:35</a> I really distinctly remember a very pessimistic view of AI earlier in the year from both tabular editor and SQL BI. Don't use it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1005s" target="_blank">16:45</a> That makes a bunch of mistakes and they weren't wrong. They weren't wrong about it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1014s" target="_blank">16:54</a> However, I do believe if you were a good prompter of things, if you had a good knowledge about how to use AI systems, you got decent results out of the AI with DAX. And I was disagreeing with these opinions of don't use AI.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1023s" target="_blank">17:03</a> You still need to have your hands on the code. You still need to write code on everything.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1033s" target="_blank">17:13</a> nope, you guys were wrong. And, and you guys, I think that the message really wasn't like, don't use AI.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1042s" target="_blank">17:22</a> It was use it very cautiously. I think that was the message there.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1051s" target="_blank">17:31</a> So to be very clear, SQL BI and tablet editor, we're not like, don't use AI. It's awful.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1061s" target="_blank">17:41</a> But actually when I look at what they were doing, these were two companies that were talking technically about the language itself. They're there to deal with the Timdal.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1070s" target="_blank">17:50</a> They're there to deal with semantic models. They're there to deal with DAX specifically.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1079s" target="_blank">17:59</a> And so their businesses have been built around writing code, basically. And so when you have this new AI thing comes in that's basically attacking the core of their business, why would I need a book about DAX anymore when I could just go ask an agent about it, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1088s" target="_blank">18:08</a> So... while I do think they have pivoted very well, this to me, the messaging they're giving out now feels much more in alignment with what's going on, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1098s" target="_blank">18:18</a> We're seeing Tabular Editor build CLI interactions to an agent that can then use AI to help them build, right?, I feel like I'm actually physically seeing both of these companies embracing the creator agent. We've been saying this for months now, Tommy, creator agent or the agent dev.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1107s" target="_blank">18:27</a> I don't know how you want to spin the name here. I don't know what name was going to stick.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1116s" target="_blank">18:36</a> But the creator agent is the thing that helps you build a repeatable system that is deterministic. It is written in a report, it's written in DAX, it's written in something else.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1126s" target="_blank">18:46</a> You use the agent to help you build the system initially, but once the system is built, you don't use the agent anymore. The agent goes away.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1135s" target="_blank">18:55</a> And we're starting to really see, even in Microsoft's development cycles, you're getting Raytheon, you're getting all these other tools that are using AI systems right alongside building real solutions. And so I think what this is doing here is this is just one more step of, well, there's a lot of business knowledge and context in your head.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1144s" target="_blank">19:04</a> And Tommy, I'll give you another example here. I'm actively working on this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1154s" target="_blank">19:14</a> My second thought is all the code that we've written already to date for DAX for data engineering, for M code. That is the business logic and rules that we use to get to where we are right now.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1163s" target="_blank">19:23</a> Right. The business logic is already buried inside the code.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1172s" target="_blank">19:32</a> It's it's the code is a realization of conversations with team leaders. how the data fits together, what relationships we have.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1182s" target="_blank">19:42</a> And I'm more keenly aware to this than ever before, Tommy, because I'm actively really pushing my mind around, there's this concept of cataloging items.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1192s" target="_blank">19:52</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1193s" target="_blank">19:53</a> And then there's this ontology thing. And then there's this thing, what I think we actually really want is a knowledge graph.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1203s" target="_blank">20:03</a> I think the knowledge graph is what people are actually striving for, where you can link tables together and you can have descriptions of relationships. And we need all of these systems to work. Why do I

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1212s" target="_blank">20:12</a> sound like another work stream's coming? Workload.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1216s" target="_blank">20:16</a> Listen, I can't, I can't catch you now. It's been 600 episodes.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1220s" target="_blank">20:20</a> I know the way you pitch things down. Like that's not just an idea.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1224s" target="_blank">20:24</a> It is. It

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1228s" target="_blank">20:28</a> is just an idea, but it's turning into software because it, it makes sense to like, again, I don't want

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1235s" target="_blank">20:35</a> to,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1236s" target="_blank">20:36</a> no one wants to manually build all this stuff. I need to be able to, I need to be able to go into an agent and then just go play with it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1247s" target="_blank">20:47</a> I need to tell the agent, okay, go visualize this stuff, go make these things, go create the thing that I need. Right.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1258s" target="_blank">20:58</a> So there is a whole realm of other information here. That's that we have to get our hand around.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1268s" target="_blank">21:08</a> And what I think is what's occurring here is. There is a new world, and we talked about this before in the podcast previously, Tommy.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1279s" target="_blank">21:19</a> Monthly active agents needs to be a metric. If you are building software, that needs to be a metric that has to be part of your design plan.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1290s" target="_blank">21:30</a> What does it look like for your software to be accessed by agents? not just an MCP server where you're wrapping up some other large language model behind it, but like really thinking through, okay, I now have two types of users that need to access my information, a person on a screen that needs to be able to click and add and edit things, but then also I need some agentic system behind it that can then read the same information, understand the same data structures, get the information out.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1301s" target="_blank">21:41</a> And while I disagree with how Microsoft has implemented ontology, because that prior article you were talking about, Tommy, which is Trust in the Fabric IQ, the article was written by, I believe, the gentleman who's actually in charge of all of the ontology pieces, They're missing the mark.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1312s" target="_blank">21:52</a> Microsoft's missing the mark on ontology. You don't know what we need as business users, I don't think.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1323s" target="_blank">22:03</a> You have something, it's out there, but no one understands how to use it. It's difficult to work with.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1333s" target="_blank">22:13</a> And it's not meeting the needs, I think, of what people are actually trying to accomplish with what an ontology, or actually, I would actually argue, ontology is not what we want. actually is we want a knowledge graph.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1344s" target="_blank">22:24</a> We want to be able to mix terms of the business, how they work together. And this goes right back to Marco Russo's comment in his article, which is your team understands your business. where does that code go?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1356s" target="_blank">22:36</a> So I don't know what the name is officially going to be, but to me, this just confirms more and more and everything you're talking about too, along with how Margaret Russo's really framed. This is, we've talked right about the conductors era, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1371s" target="_blank">22:51</a> Like that's the world we live where we're conducting the orchestra to me, like to be very honest, to be very frank, Mike, I think my greatest skill right now that I can provide is the conductor skill. How do you orchestrate all these different systems flow context to an execution to actually apply, generate,, understand, and then get that context back in the right place with prop from a token optimization to making sure there's no hallucination.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1386s" target="_blank">23:06</a> And so you also can understand that flow as well. Not just the agent, but, what tools and system to use creating skills and creating agents, your own custom agents, be it Grokbot or in Cloud, and not just a session.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1402s" target="_blank">23:22</a> To me, this is where I think you're looking at Power BI and Fabric that there's this layer above on the skill. Because to your point, I'm not really writing a lot of DAX, but I guarantee you, you could take- I'm reviewing it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1417s" target="_blank">23:37</a> I'm looking at it. I'm looking at the output of it. Some of the- I'm

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1433s" target="_blank">23:53</a> telling my agents, build tests around this. Hey, I want this dimension.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1437s" target="_blank">23:57</a> I want that dimension with this measure. Go write a test on it. Like, go build

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1441s" target="_blank">24:01</a> it. All the business rules, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1445s" target="_blank">24:05</a> How do you actually provide that? Especially not just for a single measure, but across the board.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1450s" target="_blank">24:10</a> So who knows the semantic model- it knows properly. And again, Marco and Alberto speaking right to it properly.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1454s" target="_blank">24:14</a> What's the functions meant to do to me? This is, and again, I don't know how to measure this skill or how to define it, but this is why I think we're a lot of people are missing the boat.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1459s" target="_blank">24:19</a> And again, commercials aren't helping because chat GPTs, great commercials, like,, make a summary of the page and it makes this nice slides. Great.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1463s" target="_blank">24:23</a> Cool. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1468s" target="_blank">24:28</a> Ad hoc task, right? Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1472s" target="_blank">24:32</a> It is. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1477s" target="_blank">24:37</a> So I, I look, we may have to talk with that one more detail. That may be an episode.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1482s" target="_blank">24:42</a> There's this world of information that's happening, and this is where I'm going to push on. Ontology isn't the answer.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1491s" target="_blank">24:51</a> It's actually something more like knowledge graph. And the more I push in Tommy to this thing called semantic views that Microsoft is making, I think it makes sense to me because there's a there's a whole handful of things of like what tables are doing, what measures do you have, what relationships are there?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1499s" target="_blank">24:59</a> Those same tables measures and relationships, those are the same types of things I need to use in SQL. Those are the same things I need to use in KQL.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1508s" target="_blank">25:08</a> Those are the same things I need to use in a semantic model. And those are the same types of systems or those same pieces that I'm trying to use in Databricks or Snowflake or some other system, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1517s" target="_blank">25:17</a> They're all there. They all exist.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1525s" target="_blank">25:25</a> It's just we haven't had a good way of describing them, right? And again, as we think about what agents are able to do, I think what we're having to do is we have to rethink what we build because the speed in which we can build things is now faster than ever.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1534s" target="_blank">25:34</a> It's so fast. We can create a lot.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1543s" target="_blank">25:43</a> And the problem I think that's going to exist now is our creation side is going to be able to get immensely, we're able to build a lot of stuff. The question becomes, what are you building and is it valuable?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1551s" target="_blank">25:51</a> And does it align to these,, the contracts? And again, also, Tommy, I'll put out here, this contract concept is not new.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1560s" target="_blank">26:00</a> We've been talking about data contracts between departments for years. That's been always a point of contention.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1569s" target="_blank">26:09</a> Who owns what data? How are you going to hand it off to the next team?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1578s" target="_blank">26:18</a> A data contract is the same thing. These are the columns.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1586s" target="_blank">26:26</a> We define what data is in them and we tell you when it's going to get there, right? There's a refresh cycle or how the data stays fresh.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1595s" target="_blank">26:35</a> Those are important topics to hand off to the next team as you build a gold layer of tables to the next team and you hand it to them. What's their responsibility?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1604s" target="_blank">26:44</a> What are you gonna let the next team do? So that's where things get really interesting here.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1612s" target="_blank">26:52</a> So I really liked this article, Tommy. I think this is very good.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1621s" target="_blank">27:01</a> I believe this is articulating the concepts really, really well. And all of this information that Marco is describing here, I believe needs to land inside a Markdown file or information directly inside the specification, something that both the people and the agents can go look at it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1630s" target="_blank">27:10</a> And I don't think, Tommy, all this agent, all this information here needs to live solely in a semantic model. I think this information that Marco is building here should live one layer up higher than just the semantic model.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1638s" target="_blank">27:18</a> Yeah. I also suspect that the reason this article came out from Marco is because of semantic views.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1647s" target="_blank">27:27</a> I think semantic views came out and this is shifting his mindset around what this means. He's already preparing for what a semantic view will be doing and how it will impact the business because a semantic view is this information.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1656s" target="_blank">27:36</a> It's a combination of files. It's a combination of other information.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1664s" target="_blank">27:44</a> It's that's, that's the, I think the missing link, a lot of this is the missing link to give proper agent access to like what's going on inside your model. A

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1674s" target="_blank">27:54</a> hundred percent, a hundred percent

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1675s" target="_blank">27:55</a> or inside your business, not even the

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1676s" target="_blank">27:56</a> model,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1677s" target="_blank">27:57</a> right? It's bigger than that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1679s" target="_blank">27:59</a> Dude, I love it. All right, dude.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1684s" target="_blank">28:04</a> Well, hey, I think that's going to be... I cannot wait just to talk about Semantic Views.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1689s" target="_blank">28:09</a> I think that's going to be a series at some point that we're probably going to do. We haven't done a series in a long time on the podcast.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1695s" target="_blank">28:15</a> We have not. So that may be one.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1700s" target="_blank">28:20</a> I think especially once those things start getting released. But let's jump into the main topic if you feel so ready to.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1705s" target="_blank">28:25</a> I'm done beating up these news items. We'd spend 20 minutes here.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1707s" target="_blank">28:27</a> Let's go. Let's go right into the main topic now, I guess.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1710s" target="_blank">28:30</a> So, Mike, what I want to do today is and what we want to do is there's this concept and I was reading this in a book and it was actually about the rise and fall of AIG. back when they were really good at what they did.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1723s" target="_blank">28:43</a> And then obviously when they really were not as great as what they did and failed massively. But the idea here really struck me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1737s" target="_blank">28:57</a> And I thought we can really connect this to technology governance and Microsoft Fabric. To me, this was a perfect layaway that we are now at the point how three years into Microsoft Fabric officially, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1750s" target="_blank">29:10</a> I think it actually was officially announced in 2023. I think we are now at the point where we can actually look at what's going on in Microsoft Fabric and actually really understand what is best to use, what are things from a governance point of view, what are things that we want people to do, what are things that are unacceptable.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1763s" target="_blank">29:23</a> from a best practices point of view, the lay of the land, she is clear now or clear. And what I want to do, I want to read to you from the art, from the book.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1777s" target="_blank">29:37</a> And then again, how we can tie this to Microsoft fabric and power BI from practices process and artifacts and technology. Before you do that,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1790s" target="_blank">29:50</a> do you have the name of the book? Yes, it is.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1796s" target="_blank">29:56</a> I

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1796s" target="_blank">29:56</a> believe I'm looking at the topic and the context here, but anywhere in your description here, I do not see the name of the book that you're referring to.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1802s" target="_blank">30:02</a> Yep. It is called,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1806s" target="_blank">30:06</a> I should know this, but Fatal Risk. Okay.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1809s" target="_blank">30:09</a> Gotcha. I'm going to go find that on Google and put that out here for people.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1812s" target="_blank">30:12</a> Do who it's by? Yes.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1816s" target="_blank">30:16</a> The book is by... Roddy Boyd.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1822s" target="_blank">30:22</a> Okay. Boyd.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1827s" target="_blank">30:27</a> Got it. Yep.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1831s" target="_blank">30:31</a> Got it here. I will pass a link to people if you want.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1835s" target="_blank">30:35</a> So the book that Tommy's reading here is Fatal Risk. There's an excerpt from it that's resonating with you.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1839s" target="_blank">30:39</a> And then I'll put that link here in the chat window just in case someone wants to see it. Yes, from

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1843s" target="_blank">30:43</a> the article. So AIG introduced a scale used by other companies that placed every service into one of four buckets, preferred, accepted, discouraged, and unacceptable, or PADU.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1856s" target="_blank">30:56</a> A preferred practice might be delivering customers quarterly statements online, eliminating paper mailings entirely, while online reports accompanied by a printed annual report was deemed acceptable. Defaulting customer statements to paper copies were discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1869s" target="_blank">31:09</a> Sending only print statements were unacceptable and thus eliminated. So, Mike, we have this element here.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1883s" target="_blank">31:23</a> And I really do love this framework because prefer does not mean necessarily mandatory. And while unacceptable, usually in the book, they went on to say more or less if it's continued by a team, it was a fireable offense.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1896s" target="_blank">31:36</a> So unacceptable is really that bottom here. And I think when we look at the process that we have, the workflow that we're using, the tools that we're using in Microsoft Fabric, I think we can really begin to have this conversation of could we put together a padu framework, preferred acceptable, discouraged, and unacceptable, around what teams or individuals can do and what they should do in Fabric.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1909s" target="_blank">31:49</a> And I, again, I don't think this exists today. There are, if you look at Microsoft documentation, they do have workflows, but there's ones that are not necessarily highly discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1922s" target="_blank">32:02</a> And I think now we've been in this long enough to actually see what works, what are the things that are okay? We'd rather you not do it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1936s" target="_blank">32:16</a> And what are the things that,, don't touch it. And again, that's not just the technology, but it could also be a workflow.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1949s" target="_blank">32:29</a> So Mike, just from that perspective, blurb from the book and you think about this and where we're at with microsoft fabric what do you see as you've learned in the last few years on really framing because i'm sure you've had a mental model of this already

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1966s" target="_blank">32:46</a> there's a

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1967s" target="_blank">32:47</a> lot to unpack here

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1970s" target="_blank">32:50</a> i'm trying to summarize to a very large level what we're doing in fabric think i'm going to argue to the point of whatever you're doing in fabric at a very high level storage is cheap compute is expensive that's different than what we used to be building when we had servers on premise yeah where compute was cheap but storage was expensive so we've flipped on the head of the system we've reversed how we've traditionally thought about building systems, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1982s" target="_blank">33:02</a> When you're on premise, when you've bought the hardware, when you've capital expensed the computers that live there, right? Once the computers show up, you're just paying for electricity and the people to maintain them.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=1994s" target="_blank">33:14</a> It's not just,, you are paying for them. But at that point, you want to use the max.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2006s" target="_blank">33:26</a> If you don't use all the compute on those machines, you're leaving money on the table every day, right? You don't want to buy a computer that's 10 times larger than you need and never use half of it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2018s" target="_blank">33:38</a> Right? Yes, you're growing for some capacity.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2030s" target="_blank">33:50</a> You'll potentially grow into that because it's expensive to get another one of those compute units, more compute on-premise to make it all happen. It's expensive.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2042s" target="_blank">34:02</a> You're physically in a building, you're doing all these things, right? So the compute is expensive initially, but then once you have it, you wanna use it to the max capability.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2055s" target="_blank">34:15</a> On the flip side, your storage on-prem, you have to keep buying more drives and these drives are not cheap and you gotta buy a lot of them and you could have a whole, someone maintaining this. So there's a lot of like, yes, the storage part is like more expensive there because it's hard to acquire the storage capacity.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2067s" target="_blank">34:27</a> Flip that now to cloud, it almost feels like in cloud, they're saying you can store anything you want, almost nothing, right? Store a gig for a year for 25 cents.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2079s" target="_blank">34:39</a> That's incredible. That's a lot of free storage that you're,, almost cheap, nothing storage that's there.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2091s" target="_blank">34:51</a> So that is happening in the cloud. And so because the storage cost has dropped down so low, you're optimizing, you're building systems that compute things one time and try and save the results.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2103s" target="_blank">35:03</a> And then you capture those results and you read from those results. And so most of what's happening inside the cloud world is you're optimizing, you're designing around how can I compute as little data as possible so that way my systems don't fall over. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2116s" target="_blank">35:16</a> Well, I would argue, first, I agree with everything you just said, how the tables have flipped and how budget conscious we have to be of capacity. I would argue in the framework of today, though, that is one of the elements we're going to use, but not the only, in a sense, variable that matters to deem something to prefer acceptable or discouraging.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2140s" target="_blank">35:40</a> yeah understood but i'm just saying i'm trying to roll up a very big concept when you think with that mindset if you start with that pillar first then you go into like why does that why are you building things the way you build them well okay now it makes sense why i have bronze silver gold now it makes sense why i'm picking up a table in a notebook and dropping it back down into storage now it makes sense why i'm using semantic models to in memory grab the data out because it can serve queries faster than having to go back to a sql database and continue querying and computing every time right so Everything at the cloud level is about speed.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2164s" target="_blank">36:04</a> And when I'm using compute, I want to use as little amount of compute as possible. And so that I think that overriding principle defines most of your experience and why you design what you design.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2192s" target="_blank">36:32</a> Again, from a technology-only point of view, I would agree. The thing I do want to make an argument, though, of is the fact that I would also lean heavily towards the customer and the developer experience, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2204s" target="_blank">36:44</a> If the only thing you're... And again, I know you're not saying this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2215s" target="_blank">36:55</a> I'm talking in general here. Sure.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2226s" target="_blank">37:06</a> If the only thing you're concerned about is the CEUs that you're using, at the expense of the organization's experience around data and quality... then obviously you're missing the boat.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2238s" target="_blank">37:18</a> There may be things that are going to take more compute than you would like or that some other ways could not or be less capacity. However, the goal of this, again, and what I love from the article or from the book is it's all about that customer experience.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2250s" target="_blank">37:30</a> What's best for the customer? What's best for how we are delivering our services to them?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2261s" target="_blank">37:41</a> And again, one of our services or products Things that we need that we have to take account for is our consumption of our capacity to make sure we're staying within that budget. But again, the other side is that data quality and the reporting to make sure that we're actually flowing things the right way and people can get what they need.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2272s" target="_blank">37:52</a> At that point, if that is wrong, no one's going to care about the CEUs. The first element to me is always going to be about making sure that I can have a repeatable process that other teams can use that can be at scale.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2284s" target="_blank">38:04</a> But more importantly, there's going to be trust in the data. And whatever that flow is, for me, it would be the primary, or at least 50-50 when it comes to CU.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2296s" target="_blank">38:16</a> So is there anything else that would be, in a sense, be a weight for you when you think of Padu and things in Microsoft Fabric? a weight just like monitoring or valuing the how much cus are being used for a particular workflow or

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2308s" target="_blank">38:28</a> tool do i have to just go around cus or do i have to do

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2312s" target="_blank">38:32</a> whatever you want so we define two we define our consumption and how we're consuming based on our capacity i'm trying to not

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2321s" target="_blank">38:41</a> answer based on that comment i'm trying i'm trying to think of other things that are like

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2330s" target="_blank">38:50</a> And we have that and we have customer or consumer experience.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2337s" target="_blank">38:57</a> I, again, more recently now, I think,, as I'm looking at where organizations need to push themselves, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2344s" target="_blank">39:04</a> Mm-hmm.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2347s" target="_blank">39:07</a> I believe we are entering a new era where we need to educate not only, and this is spanning more than just the center of excellence for the business intelligence, right? It's more than the COE for Fabric and Power BI.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2356s" target="_blank">39:16</a> This is an organizational problem. This is at the entire company level, challenges that are beginning to arise.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2365s" target="_blank">39:25</a> Organizations need to understand what is AI, What is an agent? And this spans every part of the business, all the way across it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2373s" target="_blank">39:33</a> What are you spending on and how are your employees going to use it? Because they're going to use it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2383s" target="_blank">39:43</a> Right.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2384s" target="_blank">39:44</a> Whether you give them a subscription or they go off on their own and buy a $40 subscription on their own, on their other computer and use it separately to do things, right? We had, Tommy, we've had this complaint from people using Excel and calling them shadow IT, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2393s" target="_blank">39:53</a> Well, they're only shadow IT-ing because you haven't given them the tools that they need to do their job.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2403s" target="_blank">40:03</a> And they're just

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2403s" target="_blank">40:03</a> going to go take data and go do something with it. So at the end of the day, the requirement for the business is still get stuff done, still sell products, still do the job you're meant to do.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2412s" target="_blank">40:12</a> That doesn't change. If you don't give people the tools, they're going to build massive Excel documents because that's the tool they have.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2421s" target="_blank">40:21</a> And that's what they're going to do to manage this data and information because they don't have the tools they need at their disposal to build what they want. And you can talk all about security and these other things.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2430s" target="_blank">40:30</a> Sure, fine. If anything, you're going to need to be more integrated with AI agents because they're going to need to help you build stuff that's even more secure.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2438s" target="_blank">40:38</a> The surface area of what means security now has just greatly increased with agents. against your organization.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2447s" target="_blank">40:47</a> And if you're not thinking about security as a paramount solution for what needs to be happening in your company, you're in a world of trouble. I get really nervous when you start using other backends other than Fabric because Fabric's been battle tested.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2456s" target="_blank">40:56</a> I know it, it works well. It has access to the things I want.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2465s" target="_blank">41:05</a> You can go build things on

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2466s" target="_blank">41:06</a> Airtable. You can go build backend systems on other solutions, but I feel like those are additional weak points.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2473s" target="_blank">41:13</a> Isn't one of your favorite points if you're talking to a client or a potential customer and they're like, yeah, we're going to use an obscure warehousing tool you've never heard of. You're like,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2484s" target="_blank">41:24</a> why?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2485s" target="_blank">41:25</a> Why would you go build that from scratch? Right, right.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2489s" target="_blank">41:29</a> Or why would you go use some other tool that's, okay, it's got a couple interesting features on it. Understood, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2497s" target="_blank">41:37</a> But you've already got this Microsoft tested system that has all the compliance pieces that they're trying to make it as secure as they possibly can. Why are we not just using the system that's already there in place?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2505s" target="_blank">41:45</a> What if you need support? Who are you going to go to?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2511s" target="_blank">41:51</a> You can hire people or get a consultant in the Microsoft space. But that's my own tangent.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2517s" target="_blank">41:57</a> I always love hearing that. So, Mike, what I want to do with you, I think we define the consumer experience or experience overall, capacity, usage, and consumption, and AI capabilities and integration.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2523s" target="_blank">42:03</a> What I'd like to do is go through a couple things in the fabric world, in the ecosystem, and I want to see where they land for you in the pato thing. So let's define again.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2529s" target="_blank">42:09</a> Preferred, this is the recommended approach. We need everyone to do this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2535s" target="_blank">42:15</a> We obviously can't force them, but this is where people get hired and promoted because they're implementing this. Accept it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2541s" target="_blank">42:21</a> It's fine. It's okay.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2548s" target="_blank">42:28</a> No one's going to make a big stink of it. We'd like you to do the preferred approach, but it's fine.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2554s" target="_blank">42:34</a> It's cool. It's good.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2560s" target="_blank">42:40</a> Discouraged is if we see it, it's something that we need to make a note of it. We're going to talk to you.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2566s" target="_blank">42:46</a> And we're going to say, Hey, we gotta, we gotta get to something else. And, but, and so it is, it's not just a, we'd rather you not it's listen, let's not do this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2572s" target="_blank">42:52</a> We got to move on. And unacceptable is a fireball fence.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2578s" target="_blank">42:58</a> Unacceptable is you need tomorrow. This is your priority. If this is going on.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2584s" target="_blank">43:04</a> Yeah. So

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2585s" target="_blank">43:05</a> would you agree with those four levels of how for Padu? All right.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2591s" target="_blank">43:11</a> Yep. So let's dive in Mike.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2598s" target="_blank">43:18</a> We have lake houses. We have warehouses.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2604s" target="_blank">43:24</a> We have data flows, gen two. We have for let's start with the storage areas, SQL databases, warehouses and lake houses.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2610s" target="_blank">43:30</a> Obviously I would say a lake house is obviously the preferred as what I am seeing out of those three. Absolutely what lake houses capabilities are sequel analytics endpoint.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2617s" target="_blank">43:37</a> It's really just the bet to me the best way I'm putting lake houses at preferred, and there's no question there.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2626s" target="_blank">43:46</a> I agree, and I am debating in my head about the SQL database. That's the one that I'm

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2632s" target="_blank">43:52</a> debating. I was going to ask you

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2634s" target="_blank">43:54</a> about that one next. So I think for storage systems, you can store things in SharePoint.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2642s" target="_blank">44:02</a> Acceptable is a preferred no. I'd rather you get it right to the lake house.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2649s" target="_blank">44:09</a> The lake house has been getting better at storing files and things. SharePoint, everyone uses it everywhere.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2657s" target="_blank">44:17</a> It's one of these, it's going to be all over the place. And now with SharePoint integration to OneLake with mirroring, it's gotten a lot better, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2664s" target="_blank">44:24</a> So the whole pattern of using it is pretty decent. I'm not opposed to it, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2672s" target="_blank">44:32</a> So it's,, I'll put SharePoint in an accepted. Discouraged would be making a bunch of files on your computer and trying to gateway your way into your computer.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2680s" target="_blank">44:40</a> Maybe that's even unacceptable, right? That might be to the level of like, hey, you can't be putting files on your local machine and using a Power BI gateway, personal gateway to synchronize that data with the service.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2687s" target="_blank">44:47</a> That's very much on the lower end of the spectrum for me. So that is definitely not acceptable.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2695s" target="_blank">44:55</a> SharePoint is on there accepted. Lakehouse is definitely in preferred.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2703s" target="_blank">45:03</a> And I think it depends on what data. Yes.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2710s" target="_blank">45:10</a> Go ahead. If the data is batch, Lakehouse all day long.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2718s" target="_blank">45:18</a> Lakehouse and notebooks love it. Great pattern.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2725s" target="_blank">45:25</a> Seems to be reasonably cheap to get moving. I like it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2733s" target="_blank">45:33</a> It's easy to work with as a developer. AI and agents are getting much better at building on top of that pattern.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2741s" target="_blank">45:41</a> happy when it comes to SQL databases. I still think you need them, but when you're talking about like the expansion into fabric apps now and real time data, and I want to have a form and I need something that's going back and forth in real time, it doesn't really make a lot of sense to now have a lake house.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2748s" target="_blank">45:48</a> It becomes a lot more data management. I think where a traditional database is, in this case, T-SQL database, that's from the Fabric SQL database, makes a lot of sense.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2756s" target="_blank">45:56</a> Now, I will say there is a trade-off for using these two approaches. The trade-off is the SQL database does come with a higher capacity unit cost than using, I think, notebooks and lake houses to do batching.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2764s" target="_blank">46:04</a> If your data is really large, you're going to consume more CUs. But in large data with big notebooks...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2771s" target="_blank">46:11</a> you would assume big data, lots of compute, you need it. The parallel, the more you use, the more you pay.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2779s" target="_blank">46:19</a> There seems to be a minimum threshold for the SQL database that if you're even on an F2, just running the SQL database will just take half of your capacity immediately. It'll just eat it right away.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2786s" target="_blank">46:26</a> So even on the F2 level, the SQL database will consume some of that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2795s" target="_blank">46:35</a> Now,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2795s" target="_blank">46:35</a> interesting, Tommy, there is now a pay-as-you-go, they call it on-demand billing, I haven't seen the numbers yet. There is no blog post around this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2801s" target="_blank">46:41</a> I do not know. But I have to imagine that the Fabric SQL database will be on that F0 or the non, I guess it's an F0.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2807s" target="_blank">46:47</a> I don't know. I think that's what they're calling it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2814s" target="_blank">46:54</a> It's going to be a pay-as-you-go licensing for Fabric.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2820s" target="_blank">47:00</a> Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2821s" target="_blank">47:01</a> Which that does make sense to me because now my SQL database doesn't have to eat my normal capacity. And if the SQL database gets hit harder or not as hard in certain situations, I still get to use it and I just get paid for what I use inside the database.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2833s" target="_blank">47:13</a> So that to me makes a lot more sense to have that actually on-demand bill me when I use the database because I may have a lot of them.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2845s" target="_blank">47:25</a> I'm okay if they call it F0 as long as they end in X at the end of

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2850s" target="_blank">47:30</a> it. I'm going to get the Fox subscription.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2853s" target="_blank">47:33</a> No, no, no. Do you not remember the game? F zero X.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2858s" target="_blank">47:38</a> , I remember the, I remember the Nintendo game. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2861s" target="_blank">47:41</a> Yeah. Anyway, I love it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2863s" target="_blank">47:43</a> It was called. I was better than it did.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2866s" target="_blank">47:46</a> Sorry. I was worried about it. I

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2868s" target="_blank">47:48</a> was actually looking at the word F O X thinking Fox, like Fox is in the woods.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2873s" target="_blank">47:53</a> Yeah, I think it was

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2874s" target="_blank">47:54</a> F-Zero. Star Fox?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2875s" target="_blank">47:55</a> Star Fox was also a fun one. No, this was a racing game.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2885s" target="_blank">48:05</a> Anyway, we'll put that in the parking lot. I want to go back to the main...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2895s" target="_blank">48:15</a> I should have landed better. The bigger point that you were saying, so I want to back up when you're talking about the databases.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2905s" target="_blank">48:25</a> You were making a very important concept change here that I think is very important for those listening. You cannot put these tooling in an isolated category.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2915s" target="_blank">48:35</a> Or rather, a better way of saying that is it's really important, be it lake houses or databases, you can't say the preferred, accepted, discouraged, isolated from the work stream it's going to be in. Because this is really important, Mike, where a database, if I am doing application development and I need that application to talk to other systems, The preferred is the way to go for a SQL database or SQL database is preferred.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2925s" target="_blank">48:45</a> But if I'm doing analytics at this point in Fabric and Power BI, then it's probably accepted. It's not the preferred way.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2935s" target="_blank">48:55</a> And I think there's a lot of these different toolings, though, that you can't just say, oh, is a lake house preferred or accepted? It's like, well, what are you using it for?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2945s" target="_blank">49:05</a> What's the workflow of this that's also going to dictate where does it actually land? I don't know, actually, if any.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2955s" target="_blank">49:15</a> There's only a few things on the list that by itself you could put in a category. Would you agree or disagree with that?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2967s" target="_blank">49:27</a> You mean without, like, a bunch of caveats? Like, if you're doing this and this and this, then it's

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2971s" target="_blank">49:31</a> this. Yeah,, this is...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2974s" target="_blank">49:34</a> The database was a perfect example.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2977s" target="_blank">49:37</a> Yes, I think this is really around, like, use cases. Because you can't...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2986s" target="_blank">49:46</a> there's so many different use cases of what you're trying to do. Like it's the three Vs of data, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=2994s" target="_blank">49:54</a> If you don't evaluate the three Vs of data, that does change what tool and technology that you do, because not one tool does everything exactly right. And what we're seeing, I think a lot in the Spark engine, the Spark engine is, it came out,, when I look at the progression of things here, Spark came out, We were learning languages to run it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3003s" target="_blank">50:03</a> We were learning Scala. We were trying to use that to make it very fast and proficient.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3012s" target="_blank">50:12</a> But then someone at Facebook said, hey, Spark should just run on SQL. And so they made Spark SQL.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3021s" target="_blank">50:21</a> And so there's a language that's something we already know. And we brought all these developers in who know SQL.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3029s" target="_blank">50:29</a> It can also write things in Spark. Slightly different, but yet mostly the same language.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3038s" target="_blank">50:38</a> And so as we kept doing this, we keep going back to this like SQL language on top of different technologies. So while the technologies are shifting, they're good in their own right in different ways.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3047s" target="_blank">50:47</a> they all have that their strengths and that you wouldn't get many languages of databases and data queries if one just did everything perfectly. People are continually evolving technology to do data storage different ways because of the way they need to access the information or how to get it in or how to get it out, how you optimize it, how you make it fast.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3055s" target="_blank">50:55</a> Those are consistently the problems. And so people are trying to design systems around them to make it easier to use.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3064s" target="_blank">51:04</a> Well, then I think that brings up a good point, though, because you can't expect, obviously, you'd want everything to be preferred for all the languages, SQL, PySpark, DAX, Git, Power Query, if we're still doing that at this point. All those different languages, obviously, we'd want preferred, but I don't think that's a realistic expectation for a single person.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3077s" target="_blank">51:17</a> Now, going off of that, Mike, if you even look at, let me ask about Git integration, for example. That's when most developers are still getting into source control, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3090s" target="_blank">51:30</a> I would agree. So where would that land for you for Git integration and deployment pipelines?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3107s" target="_blank">51:47</a> And this is the,, we're talking about Padu stuff, right? So we're saying, like, where does Git fall?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3112s" target="_blank">51:52</a> Exactly. I would probably maybe even go further than that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3118s" target="_blank">51:58</a> I would say the topic is continuous integration, continuous deployment, CICD. And one of the topics of this is, so where do we fit on these things, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3123s" target="_blank">52:03</a> Deployment pipelines. Where do those fit?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3129s" target="_blank">52:09</a> This new thing called the deployment pipeline scheduler. Is that what it is?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3134s" target="_blank">52:14</a> Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3135s" target="_blank">52:15</a> Planner. Deployment pipeline planner, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3145s" target="_blank">52:25</a> So how do you deploy that? Where does that fit?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3155s" target="_blank">52:35</a> I need a little bit more time with that before I can really maybe give a really good analogy on that one, but I like where it's going. And then you also argued around Git.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3165s" target="_blank">52:45</a> So my preference, I think, Tommy, in this one is I live on GitHub now. So it has become, GitHub has become my social media platform for better or worse.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3175s" target="_blank">52:55</a> When agents started writing their own README files and having really good descriptions of what a project is and images and like, we could build projects before, but like any project that had like three sentences and like, this is my project. And then a sentence that this does database.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3185s" target="_blank">53:05</a> like there's zero information. I don't understand why this project exists, how to get started with it, what code I should run.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3195s" target="_blank">53:15</a> Like none of that stuff exists, but you, now it's a one line command, update the read me for this project. And it goes through and it goes, and it writes,, hundreds of lines of information so that another agent or another person can just show up and understand why it's there.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3205s" target="_blank">53:25</a> Right. So to me,, get and get hub is, are essential for me anymore.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3215s" target="_blank">53:35</a> So I'm going to put that under like that for me, I'm going to definitely put that in my preferred area, fully realizing that not every team understands how to properly use Git and branching and making all the code changes happen. This is a language that comes from the app development world.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3225s" target="_blank">53:45</a> that comes from software development. And I think many data teams, even in the SQL database world, we would use Git.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3235s" target="_blank">53:55</a> So let's say you're coming from more of a legacy SQL world. We have a lot of really smart people who've been doing SQL for many, many years, and they maybe conceptually understand Git, but they don't actually use it in a continuous integration, continuous deployment way.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3245s" target="_blank">54:05</a> We're not actually automating, unless you really get pushed, your team in the data world is not fully automating I make a change here in the code. I commit to dev, and then everything builds, and the code and or the data just gets built in the next system.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3255s" target="_blank">54:15</a> So I think we're seeing a lot more of this integration across companies now moving forward. So I would probably put in accepted would be the deployment pipelines that already exist.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3265s" target="_blank">54:25</a> There are some weaknesses there. And then I'd probably also put in accepted is this new deployment pipeline.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3275s" target="_blank">54:35</a> The deployment planning, right? So I think that's also one that I would put in accepted.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3285s" target="_blank">54:45</a> One of those may move to the top depending on how good they work. It's going to really depend on does it have the features I need to properly deploy things?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3295s" target="_blank">54:55</a> And my biggest hangup right now is how do I move the data from dev to test to prod? How do I preload or not preload or clean up or not clean up data throughout this pipeline?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3305s" target="_blank">55:05</a> And I think that deployment plan will help with that.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3315s" target="_blank">55:15</a> Well, it's interesting, though, too, because what would be the layer underneath it, then? If Git would be preferred, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3322s" target="_blank">55:22</a> Or at least in Git, that's what we would rather you do for an enterprise. It gives you the most

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3329s" target="_blank">55:29</a> flexibility. But what would be underneath it?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3332s" target="_blank">55:32</a> but what would be accepted if you that's preferred then what's under what's accepted

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3337s" target="_blank">55:37</a> accepted is deployment pipelines and deployment plans right and then what i would this is going to debate for me whether it's discouraged or unacceptable i think discouraged is making is publishing anything into prod so you have like a dev qa prod type environments

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3352s" target="_blank">55:52</a> wow what world we live in today

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3355s" target="_blank">55:55</a> Well, it's a process, Tommy. What people are doing, and they're breaking things.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3369s" target="_blank">56:09</a> If you use a deployment pipeline and then you go publish a new report into production without using the deployment pipeline, you break the connection between the semantic model and the report, potentially. That's totally unacceptable.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3383s" target="_blank">56:23</a> That's taking things down. So letting people publish across different environments...

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3398s" target="_blank">56:38</a> discouraged right and i'd maybe even argue like not having a proper segmentation of which users can access not having a deployment manager right there's there's there is an individual a persona here that is looking at okay we need to get changes into qa and into production we need a deployment person that says i have the ability to move things through the environments but you're blocking many of your developers your developers should live in dev only They should have one workspace that they're looking at.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3412s" target="_blank">56:52</a> And if they can't fix it there, they can look at, they can observe, run things from the other environments, but they shouldn't be able to deploy to them. And so I really think these production environments, when we're talking about databases, really need to be in lockdown. So it's crazy that you're

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3426s" target="_blank">57:06</a> right. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3428s" target="_blank">57:08</a> it's not crazy. This is logic. I'm not saying you're crazy.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3433s" target="_blank">57:13</a> You're crazy that it's right where three years ago. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3439s" target="_blank">57:19</a> Now,, wasn't the case and how quickly you're going to not only say that's acceptable and good, but it's like, no, if you're doing what you did three years ago, you're absolutely wrong. Like that's discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3444s" target="_blank">57:24</a> That's crazy to me. That's how quickly things change.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3451s" target="_blank">57:31</a> All right. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3457s" target="_blank">57:37</a> Add to that mix here. Also, Tommy and another one here too.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3463s" target="_blank">57:43</a> I'll, I'll throw in this mix, which I think is important. Add to this the additional agent space, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3469s" target="_blank">57:49</a> Now we're hearing everyone talk about, look at me build a report with an agent. Look at me build my model with an MCP server.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3475s" target="_blank">57:55</a> Look at me. Awesome.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3482s" target="_blank">58:02</a> Great. but agents can greatly screw up your stuff.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3488s" target="_blank">58:08</a> And the idea is it can screw up your stuff so fast. And so for me, it's a speed thing.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3494s" target="_blank">58:14</a> It's the speed in which it can build good things really fast, but it also can break things really fast. And so when I'm in that break things really fast stage, like if you're building something with an agent, it may delete an entire table for you.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3500s" target="_blank">58:20</a> Oh, yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3501s" target="_blank">58:21</a> Whoops. If you're working on a live XMLA endpoint inside the service and the agent says, oh, I don't think I need this table anymore.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3507s" target="_blank">58:27</a> And you're too slow to say, stop, wait, don't do that. And the agent deletes a fact table that you've loaded.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3512s" target="_blank">58:32</a> Potentially. Those model changes are live.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3517s" target="_blank">58:37</a> It saves the changes as soon as the model's going. So what are you saying

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3523s" target="_blank">58:43</a> about where does that fit then? Do you discourage to build a report from an agentic tooling?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3529s" target="_blank">58:49</a> No, no. I'm saying this is adding to the CICD part of things, right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3537s" target="_blank">58:57</a> So I'm adding to this the idea of if you're not doing some version control, agents just add so much more potential for big failures and big mistakes. knowing that you have to have some Git.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3546s" target="_blank">59:06</a> And again, at this point, it's not rocket science. There's a very easy place to get started with Git.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3554s" target="_blank">59:14</a> You can even do Git locally on your computer and not even connect it to GitHub or Azure DevOps. So you don't need to go full bore on the whole system, but even having a local version on understanding what does it mean to build and edit files with a Git system in place, like that's paramount to me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3563s" target="_blank">59:23</a> Like you have to know this anymore. 100%.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3571s" target="_blank">59:31</a> Mike- What I want to do, I'm going to be- Sorry, I'm

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3574s" target="_blank">59:34</a> getting really passionate about this. No, no, I

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3575s" target="_blank">59:35</a> love it. We're both excited.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3582s" target="_blank">59:42</a> What I'm going to do is I'm going to be a complete hypocrite because at the beginning of the Padu explanation, and I mentioned that, you can't take the artifacts in fabric and isolate them. And that's exactly what we're going to do.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3590s" target="_blank">59:50</a> Mike, what I would like to do with you is a lightning round. I am going to list an artifact or tool or feature, and we're going to quickly give our area where does it fit in the Padu scale.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3597s" target="_blank">59:57</a> Okay. So I think we'll have a little fun with this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3605s" target="_blank">60:05</a> Obviously, again, the caveat is what the environment is, but just by itself. So first what I'm going to do is export to Excel.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3616s" target="_blank">60:16</a> Analyze in Excel or export to Excel? Export to Excel.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3618s" target="_blank">60:18</a> Two different things. Discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3622s" target="_blank">60:22</a> Discouraged for me as well. Analyze in Excel.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3625s" target="_blank">60:25</a> Encouraged. Accepted.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3628s" target="_blank">60:28</a> Accepted. Accepted, yes.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3632s" target="_blank">60:32</a> I would agree with that. Paginated reports in Power BI Fabric.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3638s" target="_blank">60:38</a> Accepted. It's almost preferred to me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3645s" target="_blank">60:45</a> The UI is not good enough to get exactly what you want. But it's definitely in the accepted range for me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3652s" target="_blank">60:52</a> Paginated reports are very powerful. The UI that Microsoft gives you is not powerful enough to wield what is really happening inside paginated reports.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3659s" target="_blank">60:59</a> So I think it's definitely for me in the accepted range. It could be preferred if there is a better UI to make it easier to build paginated reports. It's just not.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3666s" target="_blank">61:06</a> I'm the other way. I'm discouraged unless of unique circumstances for paginated.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3674s" target="_blank">61:14</a> I think unless you are sending invoices or,, you're using that for email or automation, then I'm putting a discourage. All right, Mike data flows. Gen two.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3685s" target="_blank">61:25</a> Accepted. Accepted?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3689s" target="_blank">61:29</a> They're killing Gen 1. I get it. Gen 1's not

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3692s" target="_blank">61:32</a> on my list, so don't worry.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3694s" target="_blank">61:34</a> , Tommy, I'm leaning on the hope that agents will be able to take a Dataflow's Gen 2 and rip it out and put it into a notebook at some point. right?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3699s" target="_blank">61:39</a> I'm fine. Business build, build what you want.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3704s" target="_blank">61:44</a> It's accepted. It's, it's a good solution.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3709s" target="_blank">61:49</a> It's solid. It's powerful.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3715s" target="_blank">61:55</a> People know and understand it. It's, it's the biggest, you're not going to push.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3720s" target="_blank">62:00</a> You can push for it to go into notebooks and do other things, but it's by far the most versatile tool that most people know in the power BI world. Everyone will be comfortable going to data flows, gen two from power BI.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3725s" target="_blank">62:05</a> And you have to take that as a, as a stepping stone into something that's better designed.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3731s" target="_blank">62:11</a> I could not disagree more with that. I love the data flow to experience, but until the cost goes down, again, if that's one of our elements, capacity,, what are we doing here?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3737s" target="_blank">62:17</a> It's discouraged. It's not unacceptable.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3744s" target="_blank">62:24</a> If they are using it, we're going to talk to them and say, what can we do here? I believe I could be

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3750s" target="_blank">62:30</a> swayed to be discouraged on that one. It is slower and more expensive than I think the other tools that are out there.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3756s" target="_blank">62:36</a> but I, there's just so much of people that need it. I'm going to say accepted.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3763s" target="_blank">62:43</a> Okay. All

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3764s" target="_blank">62:44</a> right. I'm very, I'm very much on the line on that one.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3766s" target="_blank">62:46</a> You, if we, if we talked about this for a whole episode,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3769s" target="_blank">62:49</a> it's way to be

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3770s" target="_blank">62:50</a> discouraged on this one.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3771s" target="_blank">62:51</a> Give me two and a half minutes. And I think I can make you discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3774s" target="_blank">62:54</a> Yeah. All right.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3777s" target="_blank">62:57</a> Having environments in your workspace. Environments. You

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3781s" target="_blank">63:01</a> mean the spark environments? Shared libraries.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3785s" target="_blank">63:05</a> Yeah., I think that's encouraged for me.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3789s" target="_blank">63:09</a> Encouraged? Preferred. Sorry,

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3790s" target="_blank">63:10</a> preferred. Sorry, preferred.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3795s" target="_blank">63:15</a> Okay. Preferred.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3800s" target="_blank">63:20</a> I think you're going to need to have some of those established and set up. I think you're going to want to have environments, particularly when you're talking about environments for Spark.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3806s" target="_blank">63:26</a> Those are things that you're going to want to have inside there. I think it's a better way to control what's happening inside your workspace by having some environments show up.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3812s" target="_blank">63:32</a> I would completely agree with that. We really prefer that you're not just using the default data agents.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3821s" target="_blank">63:41</a> Ooh, data agents. I don't think the lemon is worth the squeeze on this one.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3825s" target="_blank">63:45</a> I'm going to say that's discouraged right now.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3828s" target="_blank">63:48</a> Wow. Okay.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3831s" target="_blank">63:51</a> Wow. I think data agents is consuming too much to you.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3837s" target="_blank">63:57</a> I think data agents is only wrapping around some of the API layer that is actually already there, which you could use for free. You don't need a data agent to go talk to it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3843s" target="_blank">64:03</a> Data agents does give you the MCP server experience, but if you look at what... Kurt Buehler and Maxim are building.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3849s" target="_blank">64:09</a> There are CLIs, there's other, like at this point anymore, you can build the CLI or things that you need to go make the stuff that you want, right? So like, I'm also like, if you don't have, if there's not something Microsoft's providing you, there's a whole bunch of APIs, just go build what you need.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3855s" target="_blank">64:15</a> Like spend a little time with the agent. Hey, I need an agent that does this, this, and this.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3861s" target="_blank">64:21</a> How do I build this with just API calls? Then there's no MCP.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3867s" target="_blank">64:27</a> Then you don't need an agent. You can just build whatever.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3873s" target="_blank">64:33</a> And this is, we've talked about this before in the podcast, Tommy. There's this idea or concept around a custom harness.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3879s" target="_blank">64:39</a> You're going to use a large language model. You need it to do something.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3885s" target="_blank">64:45</a> You build a process and the process and the combination of your custom process and the LLM is your custom harness. It's a CLI.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3891s" target="_blank">64:51</a> It's a tool. It's a UI.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3897s" target="_blank">64:57</a> It's now a fabric app, right? Build a fabric app that does the things you need.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3903s" target="_blank">65:03</a> It can talk to all the APIs for you. you don't need to go grab something else that's more expensive.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3909s" target="_blank">65:09</a> So I'm going to say discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3916s" target="_blank">65:16</a> I, I would say, unless it's to be, if you're using a data. Yeah.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3919s" target="_blank">65:19</a> I, what? I want to say it's accepted.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3922s" target="_blank">65:22</a> It's fine. thing, but because I think it can be used the right way.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3926s" target="_blank">65:26</a> All right. User data functions.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3932s" target="_blank">65:32</a> While there won't be many people that know how to use them, I do think this is an accepted way. I think especially when you're talking about Fabric apps, definitely preferred.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3944s" target="_blank">65:44</a> Again, talking about some items there, right? I think I'm going to push Fabric user-defined functions as preferred just because you need to have them in Fabric apps.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3957s" target="_blank">65:57</a> really oh yeah yeah because i'm thinking of that more in terms of for trans analytical task flows but fabric apps are you going to put that as preferred as well because again heck yes okay and i think that's all i got here so what i'm gonna give you can i give you one more time please please

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3980s" target="_blank">66:20</a> metric ontology item

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3985s" target="_blank">66:25</a> , as of today, October 8th, where a lot of these features are still waiting to come out, I'm going to put these at discouraged. Close to unacceptable.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=3998s" target="_blank">66:38</a> in terms of not a lot of companies have really started using them and even consultants and then applying them at scale on what they're used for. I know this is going to change, but I'm saying as of right now, I don't want a bunch of these ontologies that are ill defined out there.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4010s" target="_blank">66:50</a> So this is one of, I'm going to put my governance hat on and say, yep, not yet. We are waiting.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4024s" target="_blank">67:04</a> So you're saying discouraged.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4026s" target="_blank">67:06</a> I'm saying unacceptable. Until now, because again, I do not want this until we have a good grasp on its capabilities and how we're going to do it.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4037s" target="_blank">67:17</a> We need a plan for this. No one's going in.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4048s" target="_blank">67:28</a> No one should be going in. You're going to get me on my soapbox.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4060s" target="_blank">67:40</a> No one should be going in randomly and marketing going, I'm going to create an ontology today and just starting creating whatever they want. ontologies are going to be this core component of how analytics and ai are flowing through your organization so this is not a managed self-service type of feature if we're just just willy-nilly creating these then it's unacceptable that being said i know it's going to be preferred i just don't think we're there yet we don't have the proper i think framework in in place yet

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4073s" target="_blank">67:53</a> Ooh, I have thoughts on this. We'll have to save this for another day.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4081s" target="_blank">68:01</a> I would probably put it in discouraged or I'm not sure if I would put it in unacceptable, but I think I would put it in the discouraged bucket for now. I don't see the value for the ontology piece at this point that the message from Microsoft has not been clear.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4090s" target="_blank">68:10</a> I don't understand how it clearly, I don't understand how the ontology easily relates to an agent and how the agent is using it to get better answers or help you build better things, right? Right.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4099s" target="_blank">68:19</a> The agent should use the ontology. And I would argue it's not an ontology.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4107s" target="_blank">68:27</a> That's not what we're talking about. We're talking about a knowledge graph.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4115s" target="_blank">68:35</a> That's the word that we should be using here because it's it's a mix of business logic and physical items that exist in fabric or tables that exist or concepts that exist in fabric. That's what we're talking about that those things need to be a knowledge graph, which I think is more comprehensive than just the ontology.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4124s" target="_blank">68:44</a> And I also want everyone to understand, too, Microsoft, if you're listening, I'm not saying ontologies forever are going to be unacceptable. I'm saying organizations, when they start creating them, they better do it right from the onset.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4131s" target="_blank">68:51</a> That's why I'm saying unacceptable as of right now.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4139s" target="_blank">68:59</a> Yes, agreed. All right, Tommy.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4141s" target="_blank">69:01</a> That being said, let's give me a wrap up here. Let's go ahead.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4143s" target="_blank">69:03</a> And where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4146s" target="_blank">69:06</a> Oh, my goodness. You can find it everywhere.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4149s" target="_blank">69:09</a> Apple, Spotify, wherever your podcast. Make sure to subscribe and leave a rating.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4153s" target="_blank">69:13</a> It helps us out a ton. Do you have a question, idea, or topic that you want us to talk about in a future episode?

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4156s" target="_blank">69:16</a> Head over to PowerBeat. tips slash podcast.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4159s" target="_blank">69:19</a> Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 730 a.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4163s" target="_blank">69:23</a> m. Central on all PowerBeat. tips social media channels.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4167s" target="_blank">69:27</a> Awesome. Thank you all so much for listening and participating in this conversation.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4170s" target="_blank">69:30</a> This has been super useful. Hope you found this valuable as well.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4173s" target="_blank">69:33</a> And as we've been doing here recently, here's your treat of the day.

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4196s" target="_blank">69:56</a> An agent draws a chart before I take a breath Tailored to the prompt like he can guess what's next Sounds like freedom when the old walls fall away Then the open field shows a different day When the sandbox has no lid Useful needs a user and a job it did If

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4351s" target="_blank">72:31</a> it

<a href="https://www.youtube.com/watch?v=6w8E-5SwvoQ&t=4351s" target="_blank">72:31</a> doesn't serve them better It has no right to stay Freedom without purpose is a pretty lie Keep a little railing when you're handing the keys Design systems matter more than infinite degrees Choose a slice that serves and leave the rest unsaid The fence was never prison, it was focus instead Standing in the desert with the whole sky lit I still need a compass for the choice I make

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/podcast](/podcast/) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast/id1568944083), or wherever you get your podcasts.
