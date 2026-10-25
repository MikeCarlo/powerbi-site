---
title: "Ontology Agent - Ep.572"
date: "2026-10-15"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Ontology"
  - "Fabric IQ"
  - "Fabric apps"
  - "Materialized lake views"
excerpt: "The Fabric IQ ontology agent can draft an ontology from a lakehouse, and it still cannot finish the job it just offered to do. Tommy Puglia and Mike Carlo hold the preview out of any workspace a client depends on."
featuredImage: "./assets/featured.png"
---

Fabric IQ now has an ontology agent that can draft entities from a lakehouse and answer questions in natural language. Tommy Puglia and Mike Carlo ask whether that agent changes their mind about ontology, and both of them land in the same place: interesting, not ready.

<iframe
  width="100%"
  height="415"
  src="https://www.youtube.com/embed/3Tyy-ORNsA8"
  title="Ontology Agent - Ep.572 - Power BI tips"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## News & Announcements

- **[Fabric app functions for secure server-side custom logic (preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-app-functions-to-use-secure-server-side-custom-logic-preview/5368691)**. Tommy reads the Barcelona follow-up as the missing backend for Fabric apps: serverless TypeScript functions, built on user data functions, for business rules, external APIs, and calls that should not run in the browser. Mike calls functions the linchpin. Apps need functions and a place to keep secrets, or they are not useful for the things he wants to build. He likes that function secrets are separate from the Power BI connection manager, and he wants that connection experience to be a hub rather than a page buried in admin settings. Copilot instructions and skills that generate the components are part of the same story for Tommy.

- **[File data ingestion with materialized lake views (preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/file-data-ingestion-with-materialized-lake-views-in-microsoft-fabric-preview/5367801)**. A materialized lake view can now point at a OneLake folder and ingest CSV and Parquet straight into Delta, without a separate pipeline, notebook, or shortcut in front of it. Tommy has been using OneLake on Windows for client validation and historical files, so the shortcut matters to him. Mike hears a stored-procedure shape: pick up a file or a bronze table, select and aggregate in SQL, and let that statement land in the pipeline. The same data, with a different measure, still changes whether anyone acts on the report.

## Main Discussion

**Topic:** Does the ontology agent change the answer on ontology?

They use Microsoft's definition, not the dictionary. The [Learn tutorial](https://learn.microsoft.com/en-us/fabric/iq/ontology/tutorial-4-use-agent) opens the agent from the ontology ribbon. It starts in Plan mode, where it can query and explore and cannot make changes, and the sample questions are retail: frozen products, Tier 1 stores, safety stock, a refrigeration exception, the next inbound shipment. Tommy's summary of the product surface is four moves: discover data, draft the ontology, validate it, and apply it. Plan and Act are the two modes.

- **The agent can draft. That is the part that moved.** Tommy spun one up on a gold lakehouse, using a workspace of stadium-operations data (concessions, attendance, upcoming events) that he builds with Alex Powers' Fabric task flows. The agent produced a comprehensive ontology, which is further than he had seen before the agent existed. Mike, trying to see the cost, put the same kind of test on a trial F64 rather than a trial F2 so a question would not be free. Binding an entity to a relationship, and attaching PDFs, Word docs, and a data dictionary, is the part both of them can see a use for.

- **It offers work it cannot do.** Tommy's rules test is the one that sticks. The overview says to create a first rule. The agent says it can turn plain English into an ontology rule. He pastes the example it just gave him. The reply is that it cannot create rules with the tools available in the conversation. He tries again and gets the same sentence. Mike's parallel is an Outlook Copilot that could not make three calendar items from an email, next to a Grok bot or Claude Code that could. If the agent cannot do what he can do on the screen, he stops using it.

- **The workspace rules are easy to miss and expensive to ignore.** Tommy reads the guidance as closer to requirements than tips. The data sources and the ontology need to live in the same workspace or the agent does not work well. Mike's complaint is the mental model: he can see a card named Customer and still cannot tell what the ontology is for, beyond graphing entities and relationships that a semantic model already had a way to describe.

- **There is no undo.** A change that does not belong cannot be rolled back. There is no version history. That is a hard stop for Mike on any agent he points at a real workspace. Combined with a 24-hour conversation window and no chat history when the browser refreshes, the agent forgets the context that made the draft good.

- **UI first, agent second.** Mike's comparison is Skill Vault. Tommy built the CLI first, so the agent can do anything the screen can do. The ontology, as they are using it, feels like a UI that got an agent afterward. The goal of an ontology is to give agents a map of the business. Building that map in a pane, then discovering the agent cannot write the rule, is the wrong order. Mike would rather spend the time on a Microsoft MCP, which has been the path that actually builds things in Fabric for him.

- **Do not recommend it, and do not put it on a paid F2.** Both of them would let someone muck around on a trial. Neither would put it in front of a client or on a normal capacity. Tommy's closer is the same failure mode as narrative visuals, automated insights, and Q&A: a preview that is promoted as the primary way to work, and that breaks the user story, teaches people not to trust the next one. The human still has to be able to explain the ontology. If the agent cannot help with that explanation, the artifact does not belong in production.

## Looking Forward

If you want to see the agent, use a trial capacity and a throwaway workspace, and stop when it cannot do the next click you can do yourself.

## Episode Transcript

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=28s" target="_blank">0:28</a> Hello, everyone, and welcome back to the Explicit Measures podcast with Tommy and Mike. Tommy, good morning. How are you doing?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=36s" target="_blank">0:36</a> I am doing excellent, Mike. How are you doing?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=40s" target="_blank">0:40</a> I'm going to a chiropractor now. Yesterday was the first time doing that, so I can move my neck now.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=44s" target="_blank">0:44</a> It's pretty good. You can move your

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=48s" target="_blank">0:48</a> neck now. Interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=52s" target="_blank">0:52</a> i've never been to a chiropractor i've never i've never done one they align all your bones and yeah they

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=56s" target="_blank">0:56</a> do they do the next thing and i just like all you think is like knowing my luck like they're gonna go we're just gonna adjust your next snap and i'll be out

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=64s" target="_blank">1:04</a> so

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=64s" target="_blank">1:04</a> oh

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=65s" target="_blank">1:05</a> boy oh boy that's wild tommy oh craziness man But no,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=75s" target="_blank">1:15</a> I

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=75s" target="_blank">1:15</a> mean, I could probably do it. I don't know.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=78s" target="_blank">1:18</a> I think everybody needs it. I'm skeptical.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=80s" target="_blank">1:20</a> I'm glad you're feeling better, though. So it works for you. It works for you.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=83s" target="_blank">1:23</a> What I found out yesterday was the fact that it's not just about feeling better. It's that it's not just your spine, but all the spine nerves that connects to everything.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=90s" target="_blank">1:30</a> So immediately, I don't know if this is just me thinking, but I was breathing better. I was like, wow.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=97s" target="_blank">1:37</a> Yeah, thing, because it is aligned to everything. So

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=104s" target="_blank">1:44</a> that is pretty cool. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=110s" target="_blank">1:50</a> Some people swear by it. Yeah, it's interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=115s" target="_blank">1:55</a> I've never tried one. But if I do one, we should compare experiences at some point.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=121s" target="_blank">2:01</a> All right. Excellent.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=127s" target="_blank">2:07</a> Let's let's get on to some before we get into our news today. Let's talk about our main topic today.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=133s" target="_blank">2:13</a> So our main topic today is an addition that came out. This is a note that came out from the Barcelona conference out in FabCon sequel con over in Barcelona.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=138s" target="_blank">2:18</a> And it's talking about the ontology agent. So if you didn't love ontology before, now you get an agent to also use with it as well.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=144s" target="_blank">2:24</a> So there is a learned document around this one. We're probably going to unpack the learned document.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=150s" target="_blank">2:30</a> It's very new. This is in preview.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=155s" target="_blank">2:35</a> But we're going to unpack a little bit around what is the ontology agent? What is it designed to do?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=161s" target="_blank">2:41</a> How should we be using it? Does this close the gap for us, Tommy, around using agents with ontology pieces to help us build a better ontology around our business?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=167s" target="_blank">2:47</a> Actually, and there's probably even some words here around like what is an ontology and what should go even go in it? I think there's potentially some other side conversations we'll have just around the ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=173s" target="_blank">2:53</a> Yeah. All right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=178s" target="_blank">2:58</a> Jumping in, Tommy, that is the main topic. What do you have for us in the news section?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=185s" target="_blank">3:05</a> We've got two good articles, Mike, again, off the Fabric blog. The first one is Fabric app functions to use to secure server-side custom logic.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=196s" target="_blank">3:16</a> And this was also announced at FabCon Barcelona. And this is now just an article explaining a little more what it's capable of and what Fabric app functions.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=207s" target="_blank">3:27</a> Fabric app functions are simply serverless TypeScript functions that are alongside a Fabric app and are built on top of a Fabric user data functions. And they allow developers to implement backend logic that should not run the browser, including business rules and calculations, external API integrations, access to protected workspaces.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=219s" target="_blank">3:39</a> There's security on this for credentials and tokens, application level business logic, and to grant only minimum required permission to the application. The experience uses Azure Functions core tools.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=230s" target="_blank">3:50</a> The functions are out on top of Fabric App using the Raven tooling. And it should have co-pilot instructions and skills that generate components as well.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=241s" target="_blank">4:01</a> One of the things here as well that I want to talk about are examples that they had in here is You can use the assistant to pull requests from Azure DevOps, use an Azure AI Foundry agent to review things, post review comments automatically, and even have for authentication secure connectivity.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=253s" target="_blank">4:13</a> So Mike, love this. Pretty cool in terms of what it's capable of.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=264s" target="_blank">4:24</a> It just shows more on the extensiveness of what Fabric Act functions can do or Fabric apps can do.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=277s" target="_blank">4:37</a> This is major, in my opinion. This is what we really needed.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=287s" target="_blank">4:47</a> There's a lot of things that are coming out here that are useful to us, but the fabric app functions is really, to me, the linchpin of like, okay, this has to be here in order for the apps to really be useful to us., most of the things I would build inside these apps, you got to have functions, you have to have secrets, these things have to be stored, they just have to work.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=297s" target="_blank">4:57</a> One thing I really like here is in the secret management for these functions, I like how this secret management is happening independently of how you would use normal connections for Power BI. So in a data set, You have to go to the connections manager and build a connection there.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=308s" target="_blank">5:08</a> Or you could just build the data set, publish it, and then go configure the connection managed element there. The connection management experience, it's buried.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=318s" target="_blank">5:18</a> It's not easy to use. We get all these things like the database hub.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=328s" target="_blank">5:28</a> We have like the one late catalog. There's all these platform level tools that exist.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=338s" target="_blank">5:38</a> why are we burying the connections manager inside an admin page somewhere? I really feel like there should actually be like an entirely separate experience of like the connections hub, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=348s" target="_blank">5:48</a> That should be something that's a proper connections hub. We have all the hubs for everything, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=359s" target="_blank">5:59</a> We have to be more natural. So yeah, Aside from that, having functions be its own thing, having functions just work with secrets and API keys, being able to talk these, whatever you want to talk to inside there, I think makes a ton of sense.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=369s" target="_blank">6:09</a> This makes way more sense to have it just be standalone.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=379s" target="_blank">6:19</a> There's a concept,, back in the Power Apps or in the Common Data Service or the Dataverse now, there is a connections area where you can manage all the connections that will go to Power Apps, Power Automate, and anything else connected to the Power ecosystem. Yeah, I can totally see that.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=394s" target="_blank">6:34</a> However, it's so easy to do now in terms of using the agent to help build up those connections or wherever you need to connect to. If you want to connect to an API with credentials, how they're stored.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=408s" target="_blank">6:48</a> I see what you're saying, but then that almost takes away... a lot of what's available so i think there's a connection story there but to me i love the fact that you can easily build this also with ray finn like let's not let's not beat around the bush and i was looking up actually mike passed comments on our podcast back in may and i think that was really or i was actually back in march when we were really getting to the ai stuff and people were like You guys vibe code a lot, and I thought this was a Power BI podcast, but hopefully by now, you look at where we're at, and we're looking at what not just we're working on, Mike, but what Microsoft's providing for developers.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=423s" target="_blank">7:03</a> This is right now the current situation that we're all in. If you want to use Fabric apps, nobody's going to build this manually.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=437s" target="_blank">7:17</a> You're not going to get a team of developers in to build this. You're not.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=452s" target="_blank">7:32</a> You're not. And with what we're going to be talking about today, along with our own workflows, yes, we may talk about some, and maybe I'm going off a bit of a rant here, but yes, we may be doing our own side projects too that are really cool.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=467s" target="_blank">7:47</a> But our workflows are in a sense devoted to this because not only just because it's available, but Mike, it's also what's being given to us. What did we talk about on Tuesday?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=481s" target="_blank">8:01</a> The FNCK, which is all built for agents, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=498s" target="_blank">8:18</a> This is also, I believe, one of the reasons why I felt like Microsoft was so far behind in like March timeframe because I was building all of these applications and websites and I was doing a lot of vibe coding at the time. To me, that was like the aha moment.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=510s" target="_blank">8:30</a> I had a really big epiphany or really stepped into it. I said, look, this is going to greatly change my business.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=523s" target="_blank">8:43</a> I need to start stepping into this now, learn ahead of where we're going. Well, now we're at a place where a lot more agents exist.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=536s" target="_blank">8:56</a> And so I think, yeah, Tommy, no one's in the comments saying, well, you guys talk only about AI now. you're not talking about power bi and fabric everyone's now just trying to clamor around well how do i build with power bi and fabric like how would i use an agent to build the things i want to build the the story has totally i think flipped here a little bit no longer are we too early to the game we're now in the middle of the game i think it feels like to me

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=550s" target="_blank">9:10</a> Yeah. A hundred percent, a hundred percent.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=556s" target="_blank">9:16</a> But regardless, I think this is just a great article on this whole article and fabric apps in general are an agentic experience from start to finish and not just we're hacking it. And I think that's important.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=561s" target="_blank">9:21</a> It's not like, Oh, did you can build a fabric app with an agent? That's cool.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=567s" target="_blank">9:27</a> It's Microsoft going, no, the fabric app experience is agent first. You want to build this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=572s" target="_blank">9:32</a> We're not recommending you do this manually.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=580s" target="_blank">9:40</a> Agreed. So anyways, very good article.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=585s" target="_blank">9:45</a> The blog, I'll put the blog post here. It's a blog post that talks more about this new added feature from Rayfan apps, the functions that you can go use and some of the applications.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=590s" target="_blank">9:50</a> Put that here in the chat window in case you want to go look at it. Really good article.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=596s" target="_blank">9:56</a> Worth it. All right, what other news items do you have for us, Tommy?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=601s" target="_blank">10:01</a> The next one that we have is file data ingestion with materialized Lakeviews in Microsoft Fabric. What the heck

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=609s" target="_blank">10:09</a> does this mean?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=610s" target="_blank">10:10</a> I know. You want to talk about how many words here are, we'll say, ingestion, materialized Lakeviews.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=614s" target="_blank">10:14</a> This sounds like a word solids,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=619s" target="_blank">10:19</a> right? It does mean things. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=622s" target="_blank">10:22</a> But,, the nice thing is it has a preview at the end of it. So,, just to make it official.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=632s" target="_blank">10:32</a> And what it is, you can actually now do file ingestion directly into AMLV, Materialized Lakeview. So this eliminates the need for separate ingestion pipelines before building Medallion architecture.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=642s" target="_blank">10:42</a> Materialized Lakeview can now ingest CSV and Parquet files directly from OneLake folders. Before, you had to use other transformations and pipelines, notebooks, or shortcuts to load files in.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=651s" target="_blank">10:51</a> Now, an MLV can point directly to a file folder and automatically materialize the Delta tables. Mike, I've been using OneLake, especially on Windows, because I've been working with a lot of different clients, and either it's been for validation or historical data.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=661s" target="_blank">11:01</a> And I cannot tell you... How awesome One Lake is in terms of for like local files or like files that get synced up.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=671s" target="_blank">11:11</a> I use the One Lake Windows application. Yes.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=681s" target="_blank">11:21</a> Yeah. And I just like, OK, I'm going to add a folder here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=691s" target="_blank">11:31</a> I can add my own folders like, oh, we're going to recon here. And I can either point my notebook to it or my agent say, Hey, all the files that we're checking are here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=700s" target="_blank">11:40</a> And both from building, using them, like the like historical retroactive data or using it for validation., yeah. This is something I think we talked about when One Lake first came out.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=710s" target="_blank">11:50</a> But if I'm an organization, I'm getting some way for people to access One Lake. So all their files, things that are in SharePoint, I want to point it to One Lake. It's awesome.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=721s" target="_blank">12:01</a> Yeah, I definitely agree with this one. And there's unlimited amounts of storage.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=729s" target="_blank">12:09</a> Again, you pay for the storage costs. But like in SharePoint, there is a threshold, a limit on how much you can get after.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=738s" target="_blank">12:18</a> But in the OneLake, there is no limit there. You just keep paying for whatever you need to use in order to store more files, which is a very big advantage.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=746s" target="_blank">12:26</a> I have not,, I used initially the OneLake app. I actually use, I think it's a derivative of like the OneDrive application that you have for like SharePoint or other things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=754s" target="_blank">12:34</a> So it's like OneDrive, but it's basically designed for lakes. It feels like the same bits almost.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=763s" target="_blank">12:43</a> I just don't use that OneLake app very much. I typically put all my files in SharePoint, But again, I'm not doing a whole bunch of data-y things or needing no- I'm saying if you are

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=771s" target="_blank">12:51</a> doing data-y things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=773s" target="_blank">12:53</a> Yeah, if you have files or loading things, I think that makes sense. This particular blog post, though, I think is interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=784s" target="_blank">13:04</a> One thing that's interesting to note here is this idea or concept of a materialized lake view. This is really interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=796s" target="_blank">13:16</a> It's a- I don't know how to describe this. It's like a stored procedure that runs on top of your data, but automatically creates a table when it's done.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=807s" target="_blank">13:27</a> right, pick up this file, pick up this bronze table, you create this materialized view, and then it just figures out how to, like you described in SQL, I'm selecting these columns, I'm doing these SQL transformations, I'm summing here, I'm doing some aggregation or group by or filter by, and then that SQL statement just gets automatically added to the pipeline.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=818s" target="_blank">13:38</a> And the idea of the materialized view is you could have bronze, silver transformations, and then get the tables into gold. And then no matter what you create, if you update the bronze thing, downstream, everything just updates itself as needed.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=830s" target="_blank">13:50</a> And so I really like the materialized views. I think this is a great move for Microsoft.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=841s" target="_blank">14:01</a> It is in GA. So the materialized Lakeview in Fabric is already a GA feature, which is linked to in this article as well.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=852s" target="_blank">14:12</a> So I'll put the article here as well. I think this is another major win, a success.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=864s" target="_blank">14:24</a> One thing I will call out here that I found useful in this conversation is talking about these materialized views starting from a file. In the example they give here, they say the file type is a CSV, and then you give the file path of where you're consuming that CSV file from.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=875s" target="_blank">14:35</a> One thing that's interesting here is inside this, they're even saying the schema mode could be dynamic, meaning the CSV file could be adding columns. It'll try and add columns as necessary.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=886s" target="_blank">14:46</a> And then the refresh mode is append only. But it acts like the folder path I thought was interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=898s" target="_blank">14:58</a> You're not giving the individual file path for the folder. sorry, the file, you're giving a folder level path.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=909s" target="_blank">15:09</a> So that means if you have multiple CSV files showing up and you keep adding them into that folder, I would presume that it's gonna be smart enough to know which ones are new, pick up the new one and use the new one inside the materialized view. So I thought that was, it wasn't really explicitly called out inside this as pointing to a folder and picking up a bunch of files.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=920s" target="_blank">15:20</a> and then incrementally loading all those files as they show up. That was maybe hidden.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=932s" target="_blank">15:32</a> I had to read a little bit between the lines here, but I think that's really useful. This is what I would expect it to work like.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=944s" target="_blank">15:44</a> Because I think there's, yeah, you're right, actually, because I'm looking at here. Huh. Interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=952s" target="_blank">15:52</a> I'm shocked that you think I'm right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=955s" target="_blank">15:55</a> , sometimes every once in a while, you just hit a rock on my head. Even a blind squirrel

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=958s" target="_blank">15:58</a> can find a nut. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=960s" target="_blank">16:00</a> So this is your

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=961s" target="_blank">16:01</a> day. It's a full moon then.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=963s" target="_blank">16:03</a> It's a full moon day. Even

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=964s" target="_blank">16:04</a> though

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=966s" target="_blank">16:06</a> I haven't had my back chiropractically adjusted, I'm still able to get some. My

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=970s" target="_blank">16:10</a> head

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=970s" target="_blank">16:10</a> is so clear right now. So clear.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=973s" target="_blank">16:13</a> I got a stuffy nose. Maybe I should go to the chiropractor and get mine. You're going to see

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=976s" target="_blank">16:16</a> everything. You're going to see your ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=978s" target="_blank">16:18</a> All I know is I think materialistic view., I've been living my whole life black

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=981s" target="_blank">16:21</a> and white. I can now see in color, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=983s" target="_blank">16:23</a> Yeah. And all of these are not for

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=985s" target="_blank">16:25</a> the faint of

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=985s" target="_blank">16:25</a> heart.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=986s" target="_blank">16:26</a> And I think this is like, they are not just like ontologies. Like it's a very conceptual thing off the bat, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=993s" target="_blank">16:33</a> You're not going to just start with a materialized lake. And if you are using it, actually, let me ask you this, Mike.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1000s" target="_blank">16:40</a> the purposes of using a materialized Lakeview, right. Compared to just using a normal lake house or the normal architecture.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1008s" target="_blank">16:48</a> Yeah. From what, like what are the the better options of I'm going to use MLDs rather than the normal architecture?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1017s" target="_blank">16:57</a> When would I use them?, so yeah, Yeah, this is a lot of, this is a great question because there are so many different ways to move data through the lake house. Yes.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1025s" target="_blank">17:05</a> Right? You have lake house with bronze, silver, gold, or you could do, sometimes people just do raw,, curated data.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1034s" target="_blank">17:14</a> They don't need three layers. They just need two, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1043s" target="_blank">17:23</a> All kinds of things can be happening in this pattern. you can move the data through with a pipeline and a notebook, but the materialized view is still used as a notebook, but you're defining the steps only in SQL and only with a single notebook.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1051s" target="_blank">17:31</a> It's not running the notebook every time it's running the SQL code that is defined by the notebook. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1059s" target="_blank">17:39</a> And that's like a procedure that you set up. So,, When do you use which?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1068s" target="_blank">17:48</a> And I think, well, there's one when you have, I think, some more complex situations. And also, too, if you really have a real good idea of what you're going to be doing rather than doing manual ETL jobs.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1077s" target="_blank">17:57</a> If you are a developer, right, and exactly how you want the data to flow, like to your point, I don't have to discover in each step. You already know where the data is going to flow.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1086s" target="_blank">18:06</a> And you can go through and do your own custom validation, which is a huge part here. The data from a data quality and also monitor that.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1095s" target="_blank">18:15</a> But again, it's also very much talking about SQL statements that are a huge part of this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1105s" target="_blank">18:25</a> Right. Okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1114s" target="_blank">18:34</a> So my decision point for me was really around what can you do? You need to know enough about your data transformations to understand that you're using SQL in every step of the process.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1123s" target="_blank">18:43</a> You're going to use that to be able to define what the SQL things are. And again, this feels like a really good parallel between like, okay, there's this and then there's store procedures that are like all sequenced together to pick up some data, do something in the store procedure, and then write that data back down to the lake house.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1132s" target="_blank">18:52</a> That's the best equivalent I can think of.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1141s" target="_blank">19:01</a> Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1142s" target="_blank">19:02</a> But there are things you may want to do in a notebook that aren't really useful or useful to be used inside the SQL statements. Again, we're talking about like Spark SQL here to make this run.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1156s" target="_blank">19:16</a> So,, if you're trying to do something specific or need to bring in a custom package, if you're doing something very unique to notebooks and not just pure SQL, I'm less inclined to go use materialized Lakeviews. If I know I'm doing straight transformations, pick up data.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1170s" target="_blank">19:30</a> And I guess maybe the other thing I'll maybe point out here too, Tommy, is the materialized lake views feel a lot more structured data tables of data

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1184s" target="_blank">19:44</a> to me.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1185s" target="_blank">19:45</a> Yes.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1186s" target="_blank">19:46</a> Right. Yes. A hundred percent.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1187s" target="_blank">19:47</a> It's not like I'm, I don't think I could probably start with a Jason file and use it. It's definitely doable, but I think I'm really thinking through this as these are Delta.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1199s" target="_blank">19:59</a> These are Delta tables that are initially landing in raw and or bronze, and then you're moving them through into other Delta tables across the pipeline. So to me, that makes sense.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1211s" target="_blank">20:11</a> One thing I don't know, though, Tommy, is I don't understand the cost implications of this versus a pipeline and running the notebook separately. So that's one thing I haven't really run heavy analysis on my own.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1224s" target="_blank">20:24</a> And I haven't seen many people across the community say, look, here's me doing the transformation with the pipeline and a notebook. here's me doing the transformation with a materialized view and then comparing one the time and then to the cu consumptions right side note

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1237s" target="_blank">20:37</a> i just

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1237s" target="_blank">20:37</a> installed the new capacity app or the new monitoring isn't it great oh wow it's totally different yeah and it's showing you like way different stuff meaning much more insightful you're seeing smooth and unsmooth data by cu usage I really like the new app. The new app is really very different than what it does.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1249s" target="_blank">20:49</a> Similar things, but like the data that's in the app is very different or how it's being presented. Maybe you may say that way.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1260s" target="_blank">21:00</a> It's the same data presented different ways. It's really nice. But doesn't

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1272s" target="_blank">21:12</a> also change a report too, right? The same way we do it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1280s" target="_blank">21:20</a> When I'm building a report, it may be all the same data on the back end, but just a few different measures are the context that we're showing it completely changes whether people are going to act on it or not. That's the same thing? Why?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1288s" target="_blank">21:28</a> I don't think the Fabric Capacity apps is the same data in the back. I think they've been doing a lot of data engineering in the back end to make it capture the data that I care about.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1299s" target="_blank">21:39</a> I think that's the reason why we didn't get the actual number of CUs consumed previously because the new app needed different data structure in the back end to get. So I don't think that's what's happening with the new Capacity app. Do you

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1310s" target="_blank">21:50</a> think it's different data completely?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1312s" target="_blank">21:52</a> Not different data, it's just structure. I think there was missing information.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1324s" target="_blank">22:04</a> I think everything that was being sent back to the central hub of whatever they do for monitoring only was smooth data. And so every time you wanted to look at unsmooth data or data that was just pure consumption on CUs, you weren't able to see it because they didn't have it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1335s" target="_blank">22:15</a> So I think there was a physical limitation of like, how data we're sending data back to the central repository at least that's my understanding of the problem and that's why we always had this really weird smooth experience and then we started trying to build a bunch of reports like well okay i don't really want a smooth experience instead i want to go grab the individual items and figure out how much was being spent per minute or hour capturing that separately and then trying to reapply all the cus together because they had to like backwards calculate out the real sequel the cu as opposed to the smooth cu anyways it was a whole thing I like the new data structure.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1347s" target="_blank">22:27</a> I like the new table, the new view. Pretty awesome.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1358s" target="_blank">22:38</a> Much more intuitive. I think so. I agree.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1370s" target="_blank">22:50</a> Yeah. All right, Mike, it's time.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1375s" target="_blank">22:55</a> We address our favorite topic or one of our things that we have both been negative about. Mike, what are we talking about today?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1379s" target="_blank">22:59</a> Do you want me to do it or.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1385s" target="_blank">23:05</a> Yeah, I'll give a quick intro and you can correct me if I'm wrong. Cause I may, I may not get it exactly right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1393s" target="_blank">23:13</a> So,, We have in the past talked about the ontology. Tommy and I had a little bit of, I think this was back in like November, December, end of the year. Was it

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1402s" target="_blank">23:22</a> that long ago now?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1404s" target="_blank">23:24</a> We haven't talked about it in a while. We were trying to get people to line up with us to talk about it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1408s" target="_blank">23:28</a> We were excited about Ontology, I think, when it was announced. I think

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1412s" target="_blank">23:32</a> it was at Ignite.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1413s" target="_blank">23:33</a> Yeah, I think it was when it was announced there. And we just didn't quite understand why.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1420s" target="_blank">23:40</a> What is it there for? So now we get a new article here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1426s" target="_blank">23:46</a> So this is a learned document that came from Microsoft. And this is the Ontology preview.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1433s" target="_blank">23:53</a> It's talking about multiple sections here is you can use the ontology agent. So now there's an agent that goes along with this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1439s" target="_blank">23:59</a> Let's put this in the chat window here for people to use this. Maybe we should first define what is an ontology or how do you define it, Tommy?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1446s" target="_blank">24:06</a> Because I feel like the definition is still fluid. in what is an ontology and what does Microsoft let you build inside the concept of an ontology?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1452s" target="_blank">24:12</a> So let me just start there. Let's define, Tommy, to you, what does an ontology mean?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1460s" target="_blank">24:20</a> So we're going to give the fabric definition, not necessarily the Webster's Dictionary ontology definition here, Mike. Okay, that sounds fair.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1473s" target="_blank">24:33</a> Yeah, so ontology in Microsoft Fabric allows you to see based on any of your data in a lake house, in a database, or even in a semantic model, or semantic models are coming. Your ability defines a business concept, such as the properties of a concept, such as the relationships between them, business rules, what the metrics and calculations are.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1485s" target="_blank">24:45</a> So these would be tables or columns, but we're not thinking in the mode of a semantic model. We're thinking of things such as customer products, orders, assets, locations, and again, what those metadata is.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1498s" target="_blank">24:58</a> And what the goal of an ontology is to try to create a common business vocabulary that can be used across any analytics or operational systems or dashboards or even agents. So the goal of the ontology is probably a better place to really define it is the ontology is meant for agentic thinking around really, truly what, how do things relate?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1510s" target="_blank">25:10</a> The best way I can say this in layman's terms, Mike, is if you remember probably 20 years ago when Google started, if you would search for Christopher Columbus on Monday or the country of Italy, it wouldn't just show you search results. It would actually show you that little card on the right-hand side.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1523s" target="_blank">25:23</a> Hey, this is a country. This country is located here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1536s" target="_blank">25:36</a> Here's related items. That was this idea of graphing things together, conceptual search terms or terms that were actually, in a sense, a person, place, or thing.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1548s" target="_blank">25:48</a> That's the same idea of what we're thinking about when we're thinking about the ontology. Again, how it is actually outside of besides where it's stored and the structure of it, it's that business definition.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1561s" target="_blank">26:01</a> And it fits into Fabric IQ, the goal of ontology is Fabric IQ. So it can work with AI agents, analytical tools, dashboards, and operational systems.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1573s" target="_blank">26:13</a> So that is, I think, let me know if I'm missing anything there in terms of what its purpose is and how it works.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1587s" target="_blank">26:27</a> Yeah, and this is one thing I'm going to try and spin up one here on my own here. That way I have one I can play around with one and touch it directly here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1594s" target="_blank">26:34</a> My understanding also, Tommy, is that everything in the ontology must be attached to a real data set. So whenever you're building things in the ontology, it's like the ontology is connecting to a real data element, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1602s" target="_blank">26:42</a> There's a table in the lake house, right? that can be added to the ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1609s" target="_blank">26:49</a> And you're making a match up to that item inside the ontology. Now, they have been improving it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1616s" target="_blank">26:56</a> I really disliked the initial experience of building an ontology. I didn't understand how to build one with it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1623s" target="_blank">27:03</a> I didn't understand... It was very click-heavy to get anything done, and it was very unintuitive to me to understand, okay, once I've added some items to this ontology thing...

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1631s" target="_blank">27:11</a> Where do I start? What's the value of it?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1638s" target="_blank">27:18</a> What do I search for? What's helping me there?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1645s" target="_blank">27:25</a> And how do I, one, how do I use it in the UI? And then two, how would I give it to my agent for it to understand the ontology or how things relate?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1652s" target="_blank">27:32</a> It was very unclear to me what that pattern was going to look like. And I think this agent mode is supposed to help with that.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1660s" target="_blank">27:40</a> So I'm trying to spin one up here so I can actually get my hand around. And

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1669s" target="_blank">27:49</a> as you're doing that, previously back in the day when you would build ontology, you could either build it manually and connect to data and choose the tables, or you can use an existing semantic model and it'll build it for you. And to your point, not only was it a very clunky workflow, but The documentation at the time was very poor in terms of what's the goal of this?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1679s" target="_blank">27:59</a> And initially it was like, oh, use it in a data agent. Like, that's it?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1689s" target="_blank">28:09</a> The only point of this is just to build it for a data agent? So not only were you having a hard time with the feature side, but I think anything you build, right, Mike, you want to know what the vision of it is for.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1698s" target="_blank">28:18</a> So you're like, okay, I can build these relationships. What's an entity?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1708s" target="_blank">28:28</a> What's the relationship type? What are all these different fields that I don't know what's what the right thing to look at is.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1718s" target="_blank">28:38</a> So that was an ontology. And now we're seeing a better story of the goal and the role of an ontology in your ecosystem.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1728s" target="_blank">28:48</a> Fabric IQ, data agents, better analytics around it. Honestly, hey, again, for those who made those comments, this is agent heavy in terms of the role that it plays.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1738s" target="_blank">28:58</a> It's really graphing your information. And again, binding how things are related and what an entity actually is and can be defined that way outside of just a semantic model on I know this is a data type.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1748s" target="_blank">29:08</a> So, well, I know that, for example, if I was looking at where's my ontology agent here. I know that I may have a stadium.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1757s" target="_blank">29:17</a> And what is a stadium? A stadium can have many things in it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1767s" target="_blank">29:27</a> We can have people that sit in the stadium. These people can be a certain type of people.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1777s" target="_blank">29:37</a> Those people buy tickets, which relate to another thing. So in that case, we're getting a better idea.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1787s" target="_blank">29:47</a> But Mike, the hardest part that you and I found was the fact that creating one was a bore. It was, it was, it was almost like to a point of torture.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1797s" target="_blank">29:57</a> Like this is frustrating. And what happened two weeks ago was we had FabCon Barcelona and a FabCon Barcelona.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1807s" target="_blank">30:07</a> Not only do they really expand and tell a better story, what an ontology is meant to do and a better feature set, but they also introduced something called the ontology agent and The ontology agent is now available, if you're in the US, that lives in any ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1816s" target="_blank">30:16</a> So it's not separate from outside the ontology experience. The only way to see this is going to an ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1826s" target="_blank">30:26</a> And there's a thing, really, it's Microsoft's now preferred way. It's the first thing that shows up on a blank ontology page.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1836s" target="_blank">30:36</a> Say, create an ontology using an ontology agent. The ontology agent can do two things, Mike.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1846s" target="_blank">30:46</a> Well, it can do multiple things, but two main things. It can help plan out building an ontology, telling you,, you can tell what data to use and there's recommendations around what workspace, but basically planning out your ontology, clarifying it, looking at the data sets, help refine it, and then actually build it itself.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1856s" target="_blank">30:56</a> There's two features, plan and act. So you can start doing a planning.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1865s" target="_blank">31:05</a> And there's, I think, four areas here where it can discover data, draft the ontology, validate it, and apply. So that's building it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1875s" target="_blank">31:15</a> Outside of that, an ontology agent can also query the data, help explain things.,, and detects different changes, proposed updates. So this ontology agent uses a bunch of skills, but Mike, I've played with this and it's a pretty nifty experience.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1885s" target="_blank">31:25</a> There's a few things that recommend, but this, I feel like is required for what, how indefinite ontology is. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1895s" target="_blank">31:35</a> So I don't think I missed anything in terms of what the ontology does. Again, the big things are the plan and act mode, which can really help you plan out your ontology using the data that you tell it to and then help clarify with questions that it has.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1905s" target="_blank">31:45</a> The agents... It goes in from the experience, Mike, the agent side, pretty consistent.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1915s" target="_blank">31:55</a> What we'll use you with it. Most agents that do a planning mode, which I love, it's not just like build an agent with these specifications.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1924s" target="_blank">32:04</a> You can start with a very general query and get something pretty out there. So Mike, with all that in mind, We talked about our knock on ontologies initially.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1934s" target="_blank">32:14</a> From what you've seen already, from what their announcements are and your own playing around, how does an ontology agent really for you differ from what we had before? Is this a generally great idea or needed for ontologies?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1948s" target="_blank">32:28</a> I think we're getting much closer to what this thing should be doing. There is a lot of behind the scenes work that's making this thing useful.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1960s" target="_blank">32:40</a> So when you build an ontology, like you get an ontology, it's an it's an item in the workspace. But with the ontology, you get an event house, you get a KQL database, and you get a graph model.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1971s" target="_blank">32:51</a> So there's a lot of other supporting materials that go go along with the ontology. So I think they're just trying to make a really good experience around building these ontology like items that you can go query through.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1986s" target="_blank">33:06</a> One of the big, yeah, again, I

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1988s" target="_blank">33:08</a> was going to say, I'm, I'm in, I'm in one right now., I still feel like I don't have the buttons or the capabilities that I need on the ontology itself. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=1999s" target="_blank">33:19</a> So like, for example, right., It feels much better. The graphical interface of what they're doing looks way better than what it was when it initially came out.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2010s" target="_blank">33:30</a> You can actually drag and drop things. You can drag things around now. Which wasn't on availability before.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2014s" target="_blank">33:34</a> Yeah, and you've seen my tool for lineage, Tommy, which is like, that's like my standard for like... okay, this is much better and much more in alignment with my expectations for what a graph or a canvas would look like when working with items.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2023s" target="_blank">33:43</a> I don't think it saves the position of things because when you move around, it seems like the reset itself every time. So I don't love that.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2032s" target="_blank">33:52</a> But Adding additional items, I don't understand what it does. Like, for example, what's a namespace?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2041s" target="_blank">34:01</a> Manage your namespaces. What is that?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2049s" target="_blank">34:09</a> I do understand there's a new entity type or add a relationship to an entity type, right? That could be useful.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2058s" target="_blank">34:18</a> But again, to your point, Tommy, it's a lot of clicking around. There's a whole bunch of stuff that is in here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2067s" target="_blank">34:27</a> again it just doesn't seem to fit my mental model of like what are we what what are we doing like what's what are we making in here i don't understand like there's like what is the purpose

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2076s" target="_blank">34:36</a> agent or the ontology agent yet

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2080s" target="_blank">34:40</a> well again that's the part i'm now trying to get the ontology agent to like help me understand what things going on so i asked it a simple question all right I copilot's open. You think this would be a straightforward answer, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2085s" target="_blank">34:45</a> I go over to the agent. Again, I'm trying it out.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2090s" target="_blank">34:50</a> I'm playing with it, right? There's this idea of a namespace.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2095s" target="_blank">34:55</a> What is a namespace? What does that mean to me, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2100s" target="_blank">35:00</a> I just ask the agent, what is a namespace? I can help with Azure-related topics.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2105s" target="_blank">35:05</a> Please submit a new request. It doesn't tell you what it is.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2110s" target="_blank">35:10</a> The agent can't even tell you what the definition of the different things mean.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2120s" target="_blank">35:20</a> Because I, so I'm curious on what your act, what are you playing? Are you in planner act mode?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2128s" target="_blank">35:28</a> I'm in plan mode. But I asked it a question like a planning.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2131s" target="_blank">35:31</a> That's a basic question. What is a namespace?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2134s" target="_blank">35:34</a> How would I use it? I would expect the agent to know enough.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2136s" target="_blank">35:36</a> You said, what is a namespace?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2139s" target="_blank">35:39</a> Yeah, I said, what is namespace? I didn't even say, what is a namespace?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2144s" target="_blank">35:44</a> I went to complete SMS on that. Hey, he keeps names unique by grouping them under a shared prefix.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2149s" target="_blank">35:49</a> So for in simple terms, without a namespace, it would be like season year with a namespace. It'd be finance dot season year.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2154s" target="_blank">35:54</a> So why it matters, it lets you avoid duplicate names, tell similarly named objects apart. What?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2160s" target="_blank">36:00</a> Organize things by naming a source. In this ontology, you don't have one.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2165s" target="_blank">36:05</a> Do you want me to help create one? What?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2170s" target="_blank">36:10</a> My ontology agent likes me a lot better than he likes yours.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2177s" target="_blank">36:17</a> That's wild,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2178s" target="_blank">36:18</a> Tommy. So, okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2180s" target="_blank">36:20</a> I'm so happy. I don't know why.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2182s" target="_blank">36:22</a> I have like shot and fruit thing.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2185s" target="_blank">36:25</a> Well,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2186s" target="_blank">36:26</a> , I would have expected just...

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2190s" target="_blank">36:30</a> Part of the reason why the agents are there, I think, is to help you understand what it is and how to build things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2197s" target="_blank">36:37</a> Let me ask you about your workspace that you're working in. They're in the documentation.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2210s" target="_blank">36:50</a> They have some very clear... recommendations which may be basically not recommendations but requirements for your agent to work well so give me a check a yes or no on this in the workspace that you created this ontology and using the ontology agent yep are your data sources in the same workspace

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2225s" target="_blank">37:05</a> are my data sets and the

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2226s" target="_blank">37:06</a> ontology the ontology and the work data that you want to pull from is that in the same workspace

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2232s" target="_blank">37:12</a> No, I pulled in all the data from a star. I went, so how I built it, I started with a semantic model.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2238s" target="_blank">37:18</a> Cause I haven't,, that's makes the most sense to me in my mind. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2244s" target="_blank">37:24</a> Cause I want to be able to add things to this ontology around other elements. So I'm bringing this semantic model to the ontology and said, okay, great.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2250s" target="_blank">37:30</a> Here's a sample semantic model loaded. So it, it loads it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2256s" target="_blank">37:36</a> It put the data in it. That makes sense.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2262s" target="_blank">37:42</a> So I'm doing a one-time load. It built it from another location, but then brought it into the ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2268s" target="_blank">37:48</a> And again, it's in a different workspace, also in a different fabric capacity. So I put it on my trial F64 versus my trial F2 because I wanted to see how much, if I query it, if I ask questions about it, if I use the agent against it, I want to see like, what does it do?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2274s" target="_blank">37:54</a> And it's actually like, what's the capacity usage on this look like?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2280s" target="_blank">38:00</a> So that's one of the big ones they say, remove unrelated workspace clutter, ensure access, and then obviously using names. But the big thing they say is make sure that if you are building ontology in a workspace, if you don't have data in that workspace, create shortcuts to it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2289s" target="_blank">38:09</a> So it's all lives in the same workspace. So that's interesting, even though you can connect to it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2299s" target="_blank">38:19</a> In that what you did, it's giving you, it's bugging out on you because it's outside of your workspace. So Mike, there's actually, I do want to mention here as you're going along, you can actually provide the ontology agent outside of just the data that you have.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2308s" target="_blank">38:28</a> And I think this is one of the bigger impact things here. Let's say you're going off a gold lake house or a semantic model.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2318s" target="_blank">38:38</a> You're doing right. And that may help the ontology agent.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2327s" target="_blank">38:47</a> You can plan things out. But you can actually attach documents to your ontology agent to help build it out.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2337s" target="_blank">38:57</a> Data dictionaries, Excel files, business requirements and text, PDFs and images, and even matching documents. You can do up to 10 files and they have to be five megabytes, which is pretty generous.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2346s" target="_blank">39:06</a> So Mike, that ability, not just for me to randomly work separately, but what do we always talk about with agents? Mike, what is the biggest thing we talk about?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2356s" target="_blank">39:16</a> What makes an agent work skills and starting

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2365s" target="_blank">39:25</a> context

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2366s" target="_blank">39:26</a> context.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2367s" target="_blank">39:27</a> Yeah. Those are all the things you need to add to that. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2369s" target="_blank">39:29</a> And the fact that I can add context, PDFs and word documents and data dictionaries, which probably there's somewhere that they exist and I can attach that to help build that. Oh my goodness. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2381s" target="_blank">39:41</a> Sure. Your complaint is this copilot inside this experience doesn't have any ability for you.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2386s" target="_blank">39:46</a> No, it allows you to. By using the plus

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2391s" target="_blank">39:51</a> symbol? Yeah, you're trying to fix your ontology agent right now.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2395s" target="_blank">39:55</a> No, I'm in it. What button do you press

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2398s" target="_blank">39:58</a> to

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2398s" target="_blank">39:58</a> get that? The plus

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2399s" target="_blank">39:59</a> symbol.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2400s" target="_blank">40:00</a> And that's going to open File Explorer.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2402s" target="_blank">40:02</a> Oh, that's weird. That wasn't intuitive at all.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2406s" target="_blank">40:06</a> Mike is frustrated. I'm frustrated with

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2409s" target="_blank">40:09</a> this thing. Mike is not happy

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2410s" target="_blank">40:10</a> with this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2412s" target="_blank">40:12</a> Okay, I use a lot of agents. I've added a lot of context to things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2419s" target="_blank">40:19</a> I've added a lot of skill things. No, I know you have, yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2426s" target="_blank">40:26</a> That's what the plus sign is. So here's how I assume this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2433s" target="_blank">40:33</a> The plus sign is adding a single piece of information into the chat of that one session. right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2439s" target="_blank">40:39</a> That's not skills or context or things that I would want to like this ontology or this item has like this agent with it. There's a whole layer of like skills and memory and like other things you're going to bring to it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2446s" target="_blank">40:46</a> There's zero of that, but that's across the board on any of the agents that are inside fabric. And I think to me, that's a big miss on the, on the agent pieces of this, that might be more of a platform issue as opposed to just the ontology agent piece.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2453s" target="_blank">40:53</a> Oh man, Tommy, it's just, Let me give you another example here. Things are getting better in this agent world of Microsoft and using agents.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2460s" target="_blank">41:00</a> But it just, it's like we're so close to making a compelling experience, but we're just missing the mark at the last end of the game. It's like it's overly, I feel like a lot of the agents that Microsoft is building in their experiences are overly restrictive.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2467s" target="_blank">41:07</a> Things I want to do, which would make logical sense, it can't do. For example, let me give you one example.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2474s" target="_blank">41:14</a> A different agent, okay? Last night, I was in my Outlook app.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2480s" target="_blank">41:20</a> I had opened an email on my phone. This email was not being filtered correctly into the right folder.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2487s" target="_blank">41:27</a> So in my Outlook app, I went looking for the create a rule. So in Outlook, you create rules.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2494s" target="_blank">41:34</a> Those rules then move emails into a folder. And that way, you clean up your inbox.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2501s" target="_blank">41:41</a> And that way, only the important things are in your inbox. And,, other informational pieces can be auto-filtered out.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2508s" target="_blank">41:48</a> And you can deal with them later. Great.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2515s" target="_blank">41:55</a> Like that idea a lot. I went into the Outlook app on my phone, doesn't have that option.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2522s" target="_blank">42:02</a> There is no create rule on an email. Okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2528s" target="_blank">42:08</a> So then I brought up the copilot and said, make a rule for everything sent from this email address, filter it and put it in this folder. And it said, done.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2535s" target="_blank">42:15</a> I found the folder. I found it all worked.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2542s" target="_blank">42:22</a> Excellent. It made the rule even happier.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2549s" target="_blank">42:29</a> Then I said, run the rule. Sorry, I can't do that.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2556s" target="_blank">42:36</a> Like, if I'm getting an agent to do things, I'm expecting it to, like, do everything or do - like, wouldn't - the next logical step is I create the rule, the rule's made it, and then even in the Outlook application itself, like, you would run the rule.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2563s" target="_blank">42:43</a> Like, run the rule now. Like, why - But why, like, this is what I keep seeing.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2569s" target="_blank">42:49</a> I feel like every time I use an agent of Microsoft, it does like a little bit of something that's somewhat helpful. I'm like, great.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2576s" target="_blank">42:56</a> I like this. This is working the way I expected it to work.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2583s" target="_blank">43:03</a> And then the next thing I ask for, it doesn't do. And I'm like, well, why did we not just, what? Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2591s" target="_blank">43:11</a> So it's interesting. I don't get that experience

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2593s" target="_blank">43:13</a> when I'm in like rock bot. I don't get that.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2594s" target="_blank">43:14</a> Sure. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2596s" target="_blank">43:16</a> Well, so it is interesting to say that because I, so the back and whenever I'm doing testing now or on my own stuff, by the way, thanks again, Alex powers for the fab,, task flows. I use that to create basically Mike, Mike, a workshop or workspace of data that if I was the business manager at a stadium or for like a baseball team, not doing the baseball stats, but like concessions of attendance,, concerts that are coming up, what's being sold, all that like business information, but it's all.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2603s" target="_blank">43:23</a> Yeah. Anyways.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2610s" target="_blank">43:30</a> And I was going through and it's helped me before our podcast, helping me create the ontology and did a great job. But there's this area to your point.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2616s" target="_blank">43:36</a> There's an overview that says rules. Start creating your first rule.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2623s" target="_blank">43:43</a> So I asked the ontology agent, can you create rules? Yes, I can help create rules for this ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2630s" target="_blank">43:50</a> And it said, for example, tell me something like create a rule that flags this. And if you want to send me the rule in plain English, I'll turn it to an ontology rule.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2637s" target="_blank">43:57</a> So I literally copied and pasted the example that I gave. And then it said, I can't create rules with the tools available in this conversation.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2644s" target="_blank">44:04</a> I can help you draft the rules, but I can't create it. I can't.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2651s" target="_blank">44:11</a> And then I tried again. I can't create rules with the tools available in this conversation.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2657s" target="_blank">44:17</a> And to your point, this agent idea is,, it was able to create a pretty comprehensive ontology based on my gold lake house. It was great.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2664s" target="_blank">44:24</a> It was actually, I was impressed at that point. Like, so we're already at least moving.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2671s" target="_blank">44:31</a> The wheels are actually turning, which I do not think they were before the ontology agent. But then to your point, it just hallucinated on me where I said, I'll create the rule.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2678s" target="_blank">44:38</a> Yeah, here's a good rule. I'm like, cool, great.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2685s" target="_blank">44:45</a> I said, nope, can't do it. Can't actually help you.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2692s" target="_blank">44:52</a> One sentence, can't create rule. It's like, you just said you could.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2698s" target="_blank">44:58</a> So that immediately, and listen, okay, do I need to, I need to do it. So-, I need to do it for, for a rune and for Microsoft here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2705s" target="_blank">45:05</a> So just give me a second. I'll get the, all right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2712s" target="_blank">45:12</a> Which one is it? This one.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2719s" target="_blank">45:19</a> Okay. Oh, hi, Microsoft.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2726s" target="_blank">45:26</a> How you doing? So if you're going to have an agent or introduce an agent and you say it can do some things and then it can't, you have to kill it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2733s" target="_blank">45:33</a> You have to kill it. You have to think about it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2739s" target="_blank">45:39</a> You have to put it in training. You have to get it out of the ecosystem because someone sees this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2746s" target="_blank">45:46</a> And if that doesn't work, what is it someone else going to think? They're going to think, what else doesn't work? They're going to walk away.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2753s" target="_blank">45:53</a> They're going to

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2754s" target="_blank">45:54</a> walk away. So you can't have these situations.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2758s" target="_blank">45:58</a> I am sorry. I know it's a lot complex to credit an LLM.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2762s" target="_blank">46:02</a> I get it. However, you're not the only one trying to do this right now.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2765s" target="_blank">46:05</a> So just be careful. All right. That's there's my little,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2770s" target="_blank">46:10</a> that was your, that was your zoom in rant there.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2773s" target="_blank">46:13</a> So that needed to happen. And I, and I'm frustrated because I'm, I'm conflicted.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2782s" target="_blank">46:22</a> I'm not frustrated, Mike. I'm conflicted because on one hand here, I'm very impressed with what the rule, like the ontology agent was already able to do, explain it, provide suggestions, discover the data itself.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2791s" target="_blank">46:31</a> And it actually built an ontology. And I think this is a huge first step.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2800s" target="_blank">46:40</a> I am fearful, though, because if it says you can create a rule and can't, if I give a documentation, do I have trust right now that it's going to be able to actually read that PDF accurately and actually make sense out of it? Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2809s" target="_blank">46:49</a> Is that just a feature they added? Because most organizations have some schema mapping, not necessarily around their data, but just business definitions.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2817s" target="_blank">46:57</a> It may not be a one to one correlation between what's actually in my lake house. That's always the case., that's why we have jobs.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2826s" target="_blank">47:06</a> Right. We know,, I have all these sales regions that may not be directly,, with that,, equal search filter found in my fabric data, but it's there.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2835s" target="_blank">47:15</a> Right. And that's what I would expect the data agent to do.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2844s" target="_blank">47:24</a> Like if I can build a fabric app with TypeScript and secure functions, and I don't know what the heck TypeScript is, then this should be able to work too. And I think that's where the disconnect is.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2856s" target="_blank">47:36</a> Tommy, this is nothing but frustrating me. This ontology thing.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2863s" target="_blank">47:43</a> It's, this is just more of the same pretty, like they've, they've reskinned it. It has more of the same prettiness.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2871s" target="_blank">47:51</a> Tommy, this is just infuriating to me, infuriating to me. I'm looking at this right now and I'm trying to get,, I made, so I, I brought in my star model.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2878s" target="_blank">47:58</a> I added, I think what is what an entity into this graphy thing. And then I literally, it's, I can literally see on the page, the thing is named customer and, the card, I have a card on the page.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2886s" target="_blank">48:06</a> It's named customer. And I'm saying, connect the customer to the fact sales.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2893s" target="_blank">48:13</a> I can't connect customer to fact sales because it doesn't contain a customer entity. I'm looking at it right now.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2901s" target="_blank">48:21</a> What the heck is this thing doing? Like, it's just so broken, like not helpful.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2908s" target="_blank">48:28</a> Like this is absolutely useless to me if I can't even get it to do simple things like make relations between times. Now, I'm so frustrated with this experience already.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2916s" target="_blank">48:36</a> Even just now playing with this thing is slightly here. I can't even imagine.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2923s" target="_blank">48:43</a> I'm just flabbergasted. Let me give you some context to why I'm so flabbergasted.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2931s" target="_blank">48:51</a> Okay. Tommy, I've been talking a lot about this thing called the OC, the Ozzy spec.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2938s" target="_blank">48:58</a> So Ozzy is this concept around, it's an Apache group element. It has this semantic views type experience.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2946s" target="_blank">49:06</a> So what a semantic view is, it's basically describing the tables and general columns and names of things that are abstracted away from like a semantic model, a Databricks or a Snowflake. It's a way of describing a table, without actually having like directly connecting to the table.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2953s" target="_blank">49:13</a> It's the metadata. Okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2961s" target="_blank">49:21</a> Part of the Aussie project is they're building the thing called ontology. I'm like, Oh, interesting.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2968s" target="_blank">49:28</a> Let's see what they're doing. Okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2976s" target="_blank">49:36</a> Tommy, there is an example ontology that, inside the ozzy github experience i thought interesting this is all in yaml i don't understand it i don't know what's happening here okay so i'm just confused right so i go to my agent and say look we have this thing called an ontology here's the definition of the spec of the ontology here is an example of the ontology file i need you agent to build me a visualizer tool that will read this YAML file and draw all the items on a page.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2983s" target="_blank">49:43</a> Boom. It wrote me an entire HTML page that that used the ontology YAML file that was like describing all the no database, no graph, no all these other things that were being required.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2990s" target="_blank">49:50</a> It's literally a flat file being absorbed in and reading it real time. This is the definition of this schema.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=2998s" target="_blank">49:58</a> Boom. On the page.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3005s" target="_blank">50:05</a> Awesome. Thought that was really cool.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3013s" target="_blank">50:13</a> Then I'm looking around. I can drag elements around.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3020s" target="_blank">50:20</a> This is within like less than 15 minutes of me playing around with this. I built an entire visualization app.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3028s" target="_blank">50:28</a> I'm turning things on. I'm turning things off.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3035s" target="_blank">50:35</a> I have these things called entities and I have an entity type. Like so a type would be in this in this graph.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3043s" target="_blank">50:43</a> A type is like a data type. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3050s" target="_blank">50:50</a> This is a string, a number, whatever those things are. It describes things in there.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3058s" target="_blank">50:58</a> And I'm looking at this ontology that I just randomly picked up from the internet and vibe coded an entire visualization tool and it just works. And then here's the part that kicks me, Tommy.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3065s" target="_blank">51:05</a> I didn't understand how to write the YAML to make another relationship. So in order to get my head around what it was doing, I found, so in the example they give you, they give you an example with, it's like an airport.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3073s" target="_blank">51:13</a> And so they have airports, they have flights, and they tell you how this stuff relates, right? Here's a cancellation notice.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3080s" target="_blank">51:20</a> Where does the cancellation notice go? How does it relate to like the terminal?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3088s" target="_blank">51:28</a> How does it relate to the plane? What does all this mean, right?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3095s" target="_blank">51:35</a> Passengers and customers. So all of these terms and definitions are all part of this ontology.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3103s" target="_blank">51:43</a> Well, they have this one element on the graph that's called airport. And they have this one data type that is a string, or sorry, an integer, which is an airport ID.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3110s" target="_blank">51:50</a> There's no relationship. The airport ID did not have a relationship to the airport, which, okay, honestly, obviously that was a miss.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3118s" target="_blank">51:58</a> Someone didn't add the relationship from the airport into the airport ID. It just needed to be there.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3126s" target="_blank">52:06</a> So

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3126s" target="_blank">52:06</a> I go to my agent and say, literally, add the relationship between airport and airport ID. Boom, does it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3136s" target="_blank">52:16</a> I've already added the relationship. I've updated your ontology file.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3146s" target="_blank">52:26</a> Click here to reload the file and it just did it. So without any help, and just an agent and a flat file, I was able to do what I think ontology should be doing inside Microsoft.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3155s" target="_blank">52:35</a> And I just, it just, this feels like it's way overbuilt. Whoever's building this agent is not using it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3165s" target="_blank">52:45</a> They, it doesn't work. I can't find things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3175s" target="_blank">52:55</a> It doesn't let me add stuff the way I said I expected to,, I'm literally going to go right now. I'm going to, I'm going to go into it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3185s" target="_blank">53:05</a> Let's see how, let's see how good this agent, I'm going to go to another workspace and, and I'm gonna go find another semantic model. It should just do this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3194s" target="_blank">53:14</a> This is the information, it should just be able to handle this stuff. I should be able to grab, I should be able to say, here's the URL of another semantic model.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3204s" target="_blank">53:24</a> Please go add this into, I'm gonna go into this, I'm literally gonna go grab the URL here. grab the url of the i the item because it has the group name and it has the modeling id right i'm go back over to the ontology add this other semantic model into this ontology here is it's no i and i

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3214s" target="_blank">53:34</a> trust you like yes we okay so let's see if it even does it like i'm just

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3219s" target="_blank">53:39</a> yeah i'm just saying like It was useless before. It's even more useless and frustrating now.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3227s" target="_blank">53:47</a> It's even more useless and frustrating now because the agent is making it even worse, right? I can click buttons and add. That's a hot take.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3237s" target="_blank">53:57</a> Prove me wrong. Okay, hold on, hold on.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3239s" target="_blank">53:59</a> Let me make sure. What should this

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3240s" target="_blank">54:00</a> agent be doing?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3243s" target="_blank">54:03</a> Discovering, validating, and applying

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3245s" target="_blank">54:05</a> changes to an apology. why okay discovering it didn't discover the entity i just asked i just put in there can't find it so it doesn't do that right what was the other one that you said validating okay i didn't do any validation tests okay what was the third one

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3261s" target="_blank">54:21</a> okay let me okay so it is discover draft an ontology and then apply and publish the changes it can draft an ontology create an ontology from

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3276s" target="_blank">54:36</a> scratch okay so and that did it well

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3280s" target="_blank">54:40</a> for me okay it did okay

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3282s" target="_blank">54:42</a> dude i don't know i must be on different bits i must be the wrong zone or something like

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3286s" target="_blank">54:46</a> different bits that's a

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3287s" target="_blank">54:47</a> t-shirt there's like the experience you're getting is not my experience no this okay so i gave it the the answer i found the semantic model contoso 1000k but it exposes zero tables zero measures zero relationships So even like, what are you doing? This is insane.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3301s" target="_blank">55:01</a> I can literally open the model and see that it has tables in it. Like this is why

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3315s" target="_blank">55:15</a> Microsoft. So man, don't, don't do this.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3321s" target="_blank">55:21</a> Don't do us like this. So, okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3327s" target="_blank">55:27</a> As we sit here now, and we've worked with ontologies in the past, and we're looking at the data agent today, I was going to ask a question at the end of this. But I have this weird feeling I already know the answer, okay?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3333s" target="_blank">55:33</a> But I'm going to ask it anyways just for the humor of it. Let's see where we go with this one.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3339s" target="_blank">55:39</a> I have this in our notes as a question. So, Mike, I'm going to ask you like we don't know the answer.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3344s" target="_blank">55:44</a> So, do ontology agents change our minds about ontologies? No.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3350s" target="_blank">55:50</a> No. Not for me.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3356s" target="_blank">55:56</a> I think if this was called beta right now on the ontology beta agent

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3363s" target="_blank">56:03</a> I could maybe get past it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3364s" target="_blank">56:04</a> Right. And I know - here's the thing.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3370s" target="_blank">56:10</a> I know it says preview, okay? But here's what you can't do, and I need you to look at me on this, okay?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3375s" target="_blank">56:15</a> I might not even zoom in, but I'm not going to zoom in. But - Okay, that's good.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3381s" target="_blank">56:21</a> That's good. But I'm talking to you, Mike, and I'll talk to Microsoft too at the same time.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3387s" target="_blank">56:27</a> Camera too, please. I don't care if you call a preview.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3393s" target="_blank">56:33</a> If you call something, what? Sorry.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3398s" target="_blank">56:38</a> Okay. Hey, Microsoft, if you call something preview, you cannot also promote it in the product as the primary way to act on that artifact.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3404s" target="_blank">56:44</a> Fair.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3405s" target="_blank">56:45</a> Okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3406s" target="_blank">56:46</a> Fair.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3406s" target="_blank">56:46</a> You can have something called preview. Fine.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3414s" target="_blank">56:54</a> But when it's the top, the first thing on the left-hand side, if you're in an ontology, it says create an ontology using an agent. If it's preview, if it's not tested, if it doesn't work right, it should be something a little more hidden.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3423s" target="_blank">57:03</a> Like, do you want to try this? We're not sure of the results yet.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3431s" target="_blank">57:11</a> Don't act like this is the primary way to create an artifact. Like if notebooks were in preview, you wouldn't say you want to use a notebook.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3439s" target="_blank">57:19</a> By the way, we're not, it doesn't always work. You wouldn't promote it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3448s" target="_blank">57:28</a> Don't promote it. And I think that's the biggest frustration for both of us right now is the fact that okay it's in beta fine it's in preview but when i go to ontology and i create an ontology The first thing that smacks on the page is try creating one with the agent, which tells me that's what Microsoft recommends.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3456s" target="_blank">57:36</a> And

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3457s" target="_blank">57:37</a> I think that's the frustration. The concept here, and there's some workings here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3465s" target="_blank">57:45</a> I don't want to end on such a sour note, but there are things here that work really well from my own playing around. But if I am going to publish something for my organization that I'm going to be responsible for, And I think these here, Mike, I didn't even tell you some of the limitations that they actually document.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3474s" target="_blank">57:54</a> One, there's no rollback. If your ontology does something and you don't like it, too bad, so sad.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3483s" target="_blank">58:03</a> It's over. You cannot roll back. There's no version history

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3491s" target="_blank">58:11</a> there. Two, does does this link?, that's that's the data side of things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3498s" target="_blank">58:18</a> But that's means, oh, that's interesting. OK, that's a big no, no for me., usually anytime I'm applying agents to anything.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3505s" target="_blank">58:25</a> So this has been a rule from Tommy for a long time, which is anytime you involve an agent, it needs to be tracked by Git because it may do something that you didn't want. And if it deleted things, it gets rid of stuff.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3513s" target="_blank">58:33</a> Like you're in a world of hurt. So I agree with you on that one, Tommy.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3520s" target="_blank">58:40</a> It's also going to be a little bit tricky because we're actually manipulating data in databases and KQLs and things like there's stuff there that's going to make it like need to be used.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3527s" target="_blank">58:47</a> Okay. And number two, context history.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3534s" target="_blank">58:54</a> Let's say you're having this great old conversation with an agent, right? And you're working really hard on things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3541s" target="_blank">59:01</a> And let's say you close your browser, you leave, whatever. That browser refreshes.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3549s" target="_blank">59:09</a> There is no chat history. There is no history of any conversation you had, which to me I thought was also a big no-no because I may have this whole context with an agent, which as I was testing, not great.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3556s" target="_blank">59:16</a> For example, what do agents work well with? Apply these three things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3563s" target="_blank">59:23</a> Well, it still seems to forget what you said earlier in the conversation. Two, any chat, even if you're talking for it for 24 hours, it's over.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3570s" target="_blank">59:30</a> It only has a 24-hour window. So there's a lot of these things that from basic agentic development, and if you're working on an agent side, those best practices, just like we have with Power BI, don't create calculated columns, don't do direct query.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3577s" target="_blank">59:37</a> These are the same things for me that are also blocking it. I will say, though, at least, there is a road.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3585s" target="_blank">59:45</a> I do see the path that they're going here. This is working better at first than I thought, because it actually could create the ontology for me.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3592s" target="_blank">59:52</a> Yes. But there's

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3599s" target="_blank">59:59</a> some things that it's doing. Okay.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3606s" target="_blank">60:06</a> It seems like it's able to like at least read around the ontology. Like it's, it's able to, it seems like it's discovering some things inside here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3613s" target="_blank">60:13</a> Yeah. Some of it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3619s" target="_blank">60:19</a> Right., but again, there's just seems to be a copious amount of gaps of like, again, it feels like a lot of it. It feels like my same analogy of like the, like the outlook.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3626s" target="_blank">60:26</a> Right. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3633s" target="_blank">60:33</a> It does a little bit of what I think it should do. And then as soon as I start trying to like get it to be useful, that next step, we're just falling short.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3640s" target="_blank">60:40</a> Like we're not exposing everything. I want it to be able to manipulate anything.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3646s" target="_blank">60:46</a> Like my expectation in using other agents to do things is, Whenever I pull in, again, another similar agent, a conversation. I pulled in a co-pilot agent in Outlook a long time ago and I said, hey, create from this email, create three items on my calendar.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3653s" target="_blank">60:53</a> Nope, sorry, I can't do that. Well, what good are you?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3660s" target="_blank">61:00</a> I'm not going to use you now for another couple of months because the agent thing didn't do what I wanted to do. Meanwhile, I go add Grokbot or I go add Cloud Code and I say, from this email, make me three meetings.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3667s" target="_blank">61:07</a> Yep, I know how to do that. Let me just call this thing here.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3673s" target="_blank">61:13</a> If that wasn't the comparison I was looking at, I would probably be like, okay, fine, that is what it is, right? It'd be nice if it did these extra things.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3680s" target="_blank">61:20</a> But the fact that it doesn't just have full control of all the things, okay, if it does something destructive or mean or bad, just warn me. But it needs to be able to have all the control that I do.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3688s" target="_blank">61:28</a> I'm expecting it to do. No, a thousand percent, Mike.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3698s" target="_blank">61:38</a> All right. Well, I think that's any closing thoughts that you got for me here in terms of our goal today was to talk about what the ontology agent does to change our mind about ontologies in general.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3707s" target="_blank">61:47</a> Unfortunately, seems like you and I are both on the, the same thing here are, would you use right now in the current state that it's in for testing for beta for, for your pilot programs or anything like that?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3717s" target="_blank">61:57</a> It seems interesting to me, right? I like this idea of it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3724s" target="_blank">62:04</a> I do think this is useful. Can I use this at scale across my entire organization?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3731s" target="_blank">62:11</a> Can I use this to describe data items and non-data items together in the same space? I'm not sure I see the vision yet, Tommy.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3739s" target="_blank">62:19</a> I don't think I'm there yet., it's close. It's starting to get to what we want to be doing.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3746s" target="_blank">62:26</a> But I really do think the way this version of ontology is being rolled out, even with the agent, right? The agent needs way more capability.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3753s" target="_blank">62:33</a> I know it's in preview. I get it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3760s" target="_blank">62:40</a> Anything I can do as a human, the agent should be able to do. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3767s" target="_blank">62:47</a> I'll also bring up maybe another parallel here, Tommy. You just built your skills vault.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3775s" target="_blank">62:55</a> Everything you want to do in Skills Vault, you demoed this, was able to be handled also by your agent. Your agent had full context aware of Skills Vault.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3782s" target="_blank">63:02</a> And anything you wanted to build in there, agent was able to then manipulate, work with, change, edit, do whatever. That's because you built that whole system with the CLI first and then skinned it with a UI on top of the API layer.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3789s" target="_blank">63:09</a> Yeah. It still feels like this ontology thing was built UI first and not CLI and agent layer first.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3796s" target="_blank">63:16</a> Because again, the ontology, I think you're going to get really big and really crazy. And if the whole goal of an ontology is to give agents more knowledge of how the business runs and what data relates to each other, you should build that agent first.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3803s" target="_blank">63:23</a> And it just doesn't feel agent built first. And now we're slapping on an agent after the fact, it still doesn't work even more.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3811s" target="_blank">63:31</a> So like, I'm just so... disappointed is the wrong word i think that's the right word actually it's i i'm not disappointed because i came in with low expectations to begin with it met my low expectations so i i really am not loving the ontology experience i still don't think this is the right way to go about it for me it's still not jiving the right way to to build out an ontology for users across your organization and i think I think I need to build my own tool.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3818s" target="_blank">63:38</a> Okay. Time to build my own item.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3825s" target="_blank">63:45</a> Time to build your own. I love it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3832s" target="_blank">63:52</a> Anyways, we'll keep going down this one. I think this is making sense.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3839s" target="_blank">63:59</a> It's getting better. It definitely needs a lot more love.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3847s" target="_blank">64:07</a> We're not there yet. Yeah, I'm still not feeling the answer to this one yet.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3854s" target="_blank">64:14</a> We got to get better at this. Anyways, all that saying, interesting idea, neat concept.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3861s" target="_blank">64:21</a> I think this has a lot of potential. It still needs a lot of love and a lot more work on it to get it usable in the user experience area.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3868s" target="_blank">64:28</a> So we're not there yet. It's getting better.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3875s" target="_blank">64:35</a> Yeah, we'll get there, I think. I hope.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3883s" target="_blank">64:43</a> I hope. What do you think, Tommy?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3890s" target="_blank">64:50</a> What's your final words? What's your,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3897s" target="_blank">64:57</a> I agree. I think, like I said, there, you can see the vision that they have for this, but

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3902s" target="_blank">65:02</a> yeah,

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3902s" target="_blank">65:02</a> like I said, the biggest frustration here is don't have something in preview and then promote it as the primary way to use a certain tool. Right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3916s" target="_blank">65:16</a> And I think that if it doesn't work completely,, and I think that's the big thing. If you're going to promote an agent and, that has some capabilities but not all, or more importantly, those things that don't necessarily work can break the work stream of what someone would be expected to do, that user story, then I think that you're going to lead to people just not trusting it in general.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3929s" target="_blank">65:29</a> We saw that with narrative visuals. We saw that with the automated insights that happened in Fabric.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3943s" target="_blank">65:43</a> We saw that with Q&A. right those the reason they were not adopted was the same reasons i love that i was able to create it and draft and look it was a pretty neat experience but no one's going to stop there and more importantly the human and the team involved in this needs to intimately understand this ontology this is not just about the creation of an artifact or developer tool like an app where i don't, I don't have to know the TypeScript that was used.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3957s" target="_blank">65:57</a> This is aligning the human thinking of the business to the data. And if I can't accurately explain that or the agent can't help me with that, we're going to have some issues.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3970s" target="_blank">66:10</a> So I think there's a vision here, but right now I wouldn't, I wouldn't like recommend this to a client yet.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3985s" target="_blank">66:25</a> I would agree. This is something interesting to play with.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3992s" target="_blank">66:32</a> Maybe muck around with it. Definitely put this on your Fabric trial.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=3999s" target="_blank">66:39</a> Do not put this on a normal F2 workspace. I will have some more numbers here after I've been playing with this thing this morning around usage and how much usage this is acquiring inside my capacity monitoring.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4006s" target="_blank">66:46</a> So I'll have a little bit more information about that And I'm going to use the amazing enhanced new Fabric Capacity Monitoring app so I can actually see what CU usage is actually being consumed from this, which is absolutely amazing. So I'm definitely going to play with that one.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4014s" target="_blank">66:54</a> Yeah, it's definitely a preview feature. Hold off.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4021s" target="_blank">67:01</a> Do not implement this. It's not ready for prime time.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4028s" target="_blank">67:08</a> It still needs a lot of love. Potentially, the API service area of what ontologies are doing, you might be able to do a lot more work with it with your cloud agent. There's the outside of

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4035s" target="_blank">67:15</a> fabric. Yeah.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4036s" target="_blank">67:16</a> Right. So maybe the MCP gives me a bit more of what I, what I need to be able to do with it.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4044s" target="_blank">67:24</a> So in general, I have found the MCP servers that Microsoft builds much more successful when doing and building things inside fabric. So maybe that's the direction I need to take, but the current built in experience, not

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4053s" target="_blank">67:33</a> impressed.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4055s" target="_blank">67:35</a> Love it. All right.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4057s" target="_blank">67:37</a> That being said, Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4059s" target="_blank">67:39</a> You can find us on Apple, Spotify, wherever you get your podcasts. Make sure to subscribe and leave a rating.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4063s" target="_blank">67:43</a> It helps us out a ton. If you have a question, idea, or topic that you want us to talk about in a future episode, head over to powerby.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4067s" target="_blank">67:47</a> tips. com.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4070s" target="_blank">67:50</a> Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7.30 a.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4074s" target="_blank">67:54</a> m. Central on all of Power BI Tips' social media channels.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4079s" target="_blank">67:59</a> Thank you all so much. And I hope you enjoyed this, at least banter around us getting some frustration out about this ontology stuff.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4088s" target="_blank">68:08</a> So I think it will get better. I'm hoping we can funnel some of this feedback back to Microsoft to improve it and make these things smoother and easier to use.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4097s" target="_blank">68:17</a> So yeah, in general, hold off, wait for final preview. That being said, for something interesting for your ears, we're going to give you yet another brand new tune here from Power BI Tips and Carlos Solutions. Here we go.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4126s" target="_blank">68:46</a> I chased the series until the spot went dim Tried to build for everyone and lost the hymn Then I found the thing that made my chest feel alive And I built inside that joy until it felt right Don't wait for a brief that never seems to Joy and build, take what lights you up and let the canvas fill.

<a href="https://www.youtube.com/watch?v=3Tyy-ORNsA8&t=4234s" target="_blank">70:34</a> Joy and build, joy and build, in that sacred space the work becomes a thrill.

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/podcast](/podcast/) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast/id1568944083), or wherever you get your podcasts.
