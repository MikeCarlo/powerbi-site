---
title: "Choose a Data Store - Fabric Decision Guide – Ep. 400"
date: "2025-02-21"
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
  - "Data Store"
  - "Decision Guide"
  - "Lakehouse"
  - "Warehouse"
  - "CI/CD"
excerpt: "Mike and Tommy celebrate episode 400 and dive into the Microsoft Fabric decision guide for choosing the right data store. They break down when to use a lakehouse, warehouse, eventhouse, SQL database, and more — helping you pick the right tool for the job."
featuredImage: "./assets/featured.png"
---

Mike and Tommy celebrate episode 400 and dive into the Microsoft Fabric decision guide for choosing the right data store. They break down when to use a lakehouse, warehouse, eventhouse, SQL database, and more — helping you pick the right tool for the job.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/394nijxbYLM" 
  title="Choose a Data Store - Fabric Decision Guide - Ep.400"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- [Introducing fabric-cicd Deployment Tool](https://blog.fabric.microsoft.com/blog/introducing-fabric-cicd-deployment-tool?ft=All&WT.mc_id=DP-MVP-5002621) — Microsoft has released a preview of the fabric-cicd Python library, an open-source, code-first solution for deploying Fabric items from a repository into a workspace. It supports notebooks, environments, data pipelines, semantic models, and reports with easy configuration and parameterization. This complements Fabric's built-in deployment pipelines and targets common enterprise CI/CD scenarios.

## Main Discussion: Fabric Data Store Decision Guide

Mike and Tommy reflect on reaching 400 episodes — a milestone that highlights just how much has changed in the Power BI and Fabric ecosystem over the past four years. The main topic dives into Microsoft's official decision guide for choosing the right data store in Fabric.

### The Data Store Options

Microsoft Fabric offers multiple data store options, each designed for specific workload patterns. The official decision guide lays out the ideal use cases:

- **Eventhouse** — Best for streaming event data and high-granularity interactive analytics (JSON/Text)
- **Cosmos DB in Fabric** — Ideal for AI, NoSQL, and vector search workloads
- **SQL Database in Fabric** — Purpose-built for operational transactional (OLTP) databases
- **Warehouse** — Enterprise data warehouse for SQL-based BI, OLAP, and full SQL transaction support
- **Lakehouse** — The go-to for data engineering, big data processing, and open-format analytics

### When to Use What

The key takeaway is that there's no single "right answer" — the best data store depends on your workload pattern. Mike and Tommy walk through the decision matrix and discuss real-world scenarios where each option shines, emphasizing that understanding your query patterns and data volume is critical to making the right choice.

### 400 Episodes — What's Changed?

Mike and Tommy take a moment to look back at how the data platform landscape has evolved since they started the podcast. From Power BI-only discussions to the full Microsoft Fabric platform, the breadth of topics they cover today reflects just how much the ecosystem has grown.

## Looking Forward

With 400 episodes in the books, Mike and Tommy show no signs of slowing down. The Fabric platform continues to expand, and the decision guide will likely evolve as new data store options and features are added. Stay tuned for more deep dives into the ever-growing Fabric ecosystem.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=31s" target="_blank">0:31</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone and welcome our very exciting 400th episode! Oh yeah, where's your sound effects man? I thought we had — yeah so yes, I don't know if anyone can hear that. Did you hear, Tommy?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=52s" target="_blank">0:52</a> I did, I did actually. Yes, so we've made it to 400 episodes. So thank you for those of you who have been participating and listening along and participating in the chat. We really appreciate you, we know it's been a long time, we know you haven't listened to every single episode, but we can reminisce here just for a little bit.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=69s" target="_blank">1:09</a> But before we do the reminiscing, let's talk about some of our main topic today. If we actually ever get to it, I don't know, the reminiscing may just take a long time here. We may not actually get to a real episode here at some point, but we do have one, we do have a topic, whether we'll get there that's debatable.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=87s" target="_blank">1:27</a> So we're going to talk about choosing a data store. There's now inside Fabric many places where you can store your information. And this is probably — I know we've been talking a lot about Fabric and not so much Power BI recently, but because Fabric enhances Power BI so much we feel like it's very worthy for us to continue talking about these intersections between Power BI and Fabric.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=108s" target="_blank">1:48</a> Then maybe it's also worthwhile here a little bit to talk about Power BI — where do you store things in just Power BI only? It's a much shorter conversation there, but there are places that we can talk about storing things in just pure Power BI as well. That'll be our main topic today.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=123s" target="_blank">2:03</a> Any other comments Tommy around 400 episodes? Wow, well I don't know if you want to get to the news first because I have a lot of comments about 400 episodes here. But all right dude, the first thing I want to ask you — well first, congratulations, 400 episodes!

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=140s" target="_blank">2:20</a> This is — we have done twice a week, thank you, thank you, thank you everyone. So now I know someone's listening — myself on my back. Yeah, well, and guys we've done two episodes a week, we have not stopped that cadence for four years.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=156s" target="_blank">2:36</a> I was wondering about that. I literally was walking downstairs this morning and I was trying to think of when was the last time we missed an episode. I don't think we've missed an episode in multiple years at this point. We've done a lot of planning ahead to pre-record things.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=175s" target="_blank">2:55</a> We had a couple people that were sick and we had to pre-record things last minute. We've also poorly planned things and had to record every day for two weeks straight. Yeah, we've definitely done more than two — we've done two and three episodes in a day. I think the most we ever done in one day was two episodes, I think that's all we've ever recorded in one day.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=195s" target="_blank">3:15</a> The only time we dropped the ball was my failure to publish sometimes on Anchor or our podcast thing, going "oh yeah I should do that." I've had a couple messages on Twitter — "Hey when's the next episode coming out on the podcast?" Well it is, it's done — oh it's not, we didn't hit go on the system.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=215s" target="_blank">3:35</a> Well Tommy, what would you say — what did you learn over 400 episodes? How did you do it, how did you get to 400? What was your motivation? What invigorates you to get to 400 and does that mean you're gonna be able to make it longer than 400?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=230s" target="_blank">3:50</a> Thanks for the question Mike — beyond that, sounds like a spring training question, like "you ready for the season?" So baseball's coming! But no, Mike, honestly we're keeping the heart of what the podcast was about. And for those who are maybe — you've listened to the last 100 let's say, you haven't heard all 400.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=249s" target="_blank">4:09</a> When we started the podcast and there were three of us, when we started the podcast it was very much like — what would the conversations be when we were just offline talking about Power BI, the things we were passionate about. And you, me, and Seth, we got into very passionate debates without even the idea of a podcast.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=268s" target="_blank">4:28</a> And really the idea was raised — well what if this was something? Because to me there are a thousand and one resources online to learn how to do Power BI. I agree, and that's great and it's wonderful and it's awesome. But there's not a lot about how do you actually apply that in the real world.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=286s" target="_blank">4:46</a> You can build the greatest report, here's how to do it, but will someone appreciate it? And I love getting into that space, that power behind the real world. So for me the last four years, this podcast has helped me really think about — especially with all the things happening with Fabric — really how is this actually going to be applied in an actual client's environment.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=309s" target="_blank">5:09</a> Or someone that doesn't have the skill, and again really putting that people, process, technology together. So I am absolutely all down for another 400 at least. So I'll throw that back to you my friend — what have you learned in 400 episodes and what's going to keep you going for another 400?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=328s" target="_blank">5:28</a> Well, I learned in the earlier episodes our audio wasn't so great. I remember we've had a lot of technology problems over the seasons of different podcast episodes. I started using OBS Studio, and I had all kinds of problems — my computer kept crashing, it kept causing problems.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=352s" target="_blank">5:52</a> So I just remember throughout the podcast we've had a substantial issue with technology as we've gone along. Internet has been an issue sometimes as well, it's been less of an issue recently. But sometimes someone's internet would go down, it would be difficult to get things started, we had to start late.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=368s" target="_blank">6:08</a> So that was one that stood out to me. I would say having people engage the community conversation has been very fun. I've really enjoyed other people being able to step in and make comments on the side here. I enjoy talking about this stuff.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=382s" target="_blank">6:22</a> If I had to summarize this, I just think it's been — I'd have to summarize the podcast as we're just stubborn. I think we're just really stubborn. Maybe we know what we're talking about a little bit, maybe we've got a lot of things — I think we're just incredibly stubborn just to keep going, just to keep doing it.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=404s" target="_blank">6:44</a> And there's times when this has been a grind and you're just trying to figure out what are we going to talk about. But with you, maybe if we were just talking about only Power BI we would have run out of topics, things have gotten a little thin. But with the addition of Fabric and how this is changing our whole world around data, business intelligence, there's no shortage of things to continue to talk about and discuss and review.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=428s" target="_blank">7:08</a> So yeah, I just would say be stubborn, stick with it. Insane consistency has been what got us I think here to 400. What is the one thing that maybe or few things that you've been most surprised about — whether it's the people's comments, about the topics that we've gone through, what has surprised you the most over the last four years?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=451s" target="_blank">7:31</a> How much you disagree with me, Tommy! I don't think that's — what is the one thing that most surprised me about the podcast? I don't know if I have one thing, that's a hard statement to make. Okay, general, or a few things, or the things that come to mind.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=470s" target="_blank">7:50</a> I think it's been a lot of — as I unpack, there's been moments when we've talked about things on the podcast, I've actually had new aha moments about "oh, I wasn't thinking about how to stitch this thing together." But I think there's an idea, there's this concept around community — that not everyone thinks exactly the same way that you do.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=492s" target="_blank">8:12</a> Which is fine, which is just probably what you want — you want some diverse thought. And so when you look at that, when you interact with people online and their different experiences, you're looking at a set of technology tools but not everyone has learned them, used them, and developed them the same way.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=506s" target="_blank">8:26</a> So it's really useful for you to get out of your bubble and talk and discuss things with other people and what's going on. This is also maybe an observation that I give around consulting — when you're at a company you only know what you know. The company does something a certain way, and if you are the Power BI person and you do the Power BI things, you only know what you've built or developed.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=527s" target="_blank">8:47</a> You haven't played with real-time intelligence, you haven't done extra things, you haven't added Databricks or added external tools to your Fabric environment, or even played with Fabric at all for that matter. So you only know what you know. And I think getting into a community of people that are talking, discussing, and opening your mind up to potentially other items and things I think is extremely helpful and useful.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=548s" target="_blank">9:08</a> So I think the podcast for me is that way of investing my time in learning new things, different perspectives, and just seeing how other people have utilized and built the tool. So that's encouraging to me because I like learning faster. And this is the same thing I would argue with consulting.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=564s" target="_blank">9:24</a> If you're a consultant you're going to experience a lot of variety of problems much faster than you would at a single company. So one company you'll have a limited set of experiences. When you start consulting for companies, the questions are slightly different, the problems are slightly unique, there's commonality across all those problems but you have much more exposure.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=584s" target="_blank">9:44</a> And I feel like I've learned or had to learn by necessity things at a much faster pace. And this is a pace of learning of which I like and I enjoy. I can definitely attest to that. I love that answer! So yeah, I think Tommy you would also argue the same similar concept, right? Going to consulting has really rounded out or broadened your breadth of things you need to know or talk about or discuss or communicate back to a client.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=621s" target="_blank">10:21</a> Because the variety of challenges is ever increasing. One thing that's definitely surprised me is one, how many more white hairs I was going to get on the sides, because that's new. This used to be all black when we started and now we have quite a few white hairs.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=636s" target="_blank">10:36</a> But honestly I thought about this question leading up to today. The one thing that's really honestly shocked me, Mike, is the technology's changed, the ease of use has changed, but yet people's problems and situations I feel haven't. People are still talking about the gold models and semantic models and the importance of that.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=660s" target="_blank">11:00</a> People are still dealing with the frustrations of "my company won't invest in X, therefore I'm stuck in this situation." These are situations even though we have gone

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=668s" target="_blank">11:08</a> Situations even though we have gone light years ahead of just what powerbi was I'm still hearing the same things that one I was dealing with five years ago and that's not to anyone's fault that's just the way I think culture and organizations are trying to adopt new things and in four years you can bring in our mailbag of people all the questions that people submit and you could plug them in and say it was 2021 and you wouldn't be shocked by it people are still dealing with the same situations in organizations because of

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=698s" target="_blank">11:38</a> Bosses and budget and willing to adopt and even if they did adopt Fabric or a new new skew whether or not people are actually using it people are still dealing with the same situations and to me that's I'm actually I'm that really shocked me and it's almost it it's almost Pleasant to hear and not in a bad way but like it really makes me feel like what we do even if the technology changes you're still dealing with a data culture you're

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=729s" target="_blank">12:09</a> Still dealing with in order for any of this to be successful it is not your skill alone it is not your technical prowess alone and the knowledge that you learned but how well you can actually apply that in a group of people yeah there is I would argue there's it's not purely technical it's not purely you talk about it a lot of this is what we do is I think just communication in general it's a lot about communicating well communicating expectations and

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=759s" target="_blank">12:39</a> Things along those lines but I I'm not going to shy away and say you don't need to be super technical on things no you need to be so I'm not gonna I'm not going to belittle that part of the top the topic but it it's definitely needed to be super technical in these spaces so regardless it's been a good decision career-wise to do this I think I've been very pleased with where we've been at and yeah we'll move on let's go on into a news article before we jump into our main topic today I want to point out this article today from

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=791s" target="_blank">13:11</a> Microsoft it is it is their cicd Tool It's called The introducing the fabric cicd deployment Tool this is really interesting so very fascinated to see what this is looking like it looks like a python notebook that is helping you build a deployment Pipeline and distribute Andor deploy items into various workspaces so what do you think about this Tommy what's your what's your read on this deployment cicd tool I'm I'm pleasantly surprised to see this so I've

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=822s" target="_blank">13:42</a> Been doing a lot of get deployments and I was using VSS code for a lot of it but with multiple workspaces it was getting frustrating trying to open a workspace in something like VSS code and that really bogged down your computer so I was using a lot of terminal I downloaded GitHub desk top because I I like to use GitHub de GitHub with workspaces and that was just seem to be the better way because if I make an update one you have to again reflect that everywhere else this new python code and a this is just

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=853s" target="_blank">14:13</a> A python script it's not even a notebook is it can have a lot more Automation in terms of being able to publish things The Works spaces so this is nice to see because odds are and just your normal workflow mic you're working in more than one workspace at a time so if I'm making updates right like I need to go to multiple places in on my local directory to see those changes reflected so it's nice to see something that can be a little more bulk rather than the

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=883s" target="_blank">14:43</a> Individualistic side of just one workspace one repository and I'll I'll go in here there's some items here we're talking about this one this is using a Microsoft python notebook that lets you deploy different items and if you read some of the documentation more more detailed here there's actually a link here the B at the end talking about the fabric cicd documentation they actually have an entire website it's microsoft. github.io and it's the the latest version of the bit of software here and

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=914s" target="_blank">15:14</a> I'll put this in the chat window as well in case for people want to see this one so here's the the docs for the cicd here put that control V drop that in the p in the window there when you go through this and you read through a bit more of what they're trying to accomplish with this one there so again it's very code Centric but they do have a git flow and the idea is you take a workspace and you synchronize your workspace between get some git in program either Azure devops or GitHub it doesn't really matter it's they're shown

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=945s" target="_blank">15:45</a> The icons for Azure devops but the icon forg on the branching of the the items so you have basically multiple branches feature branches you have your test branch and then you have your prod branch and what they're doing is they're allowing you to create and change your code so build the items in the workspace get a copy of those items synchronize them to GitHub or git that then defines all the different items in your workspace and then you use

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=975s" target="_blank">16:15</a> This command the script to then do a deployment and they're actually showing in the documentation they're doing these deployments with as your devops they're doing like an action based programed thing that can autod deploy these different artifacts from the branches so I like this diagram I think this makes a lot of sense there just needs to be more examples there's a lot of complicated things that link together notebooks use lake houses tables and things definitions are different and so they provide a lot of

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1007s" target="_blank">16:47</a> Code references to help you build that out and how to parameterize your pipeline and your deployment element but they have this thing called find and replace not very clear what they're trying to ask I get it in concept but I need to see an example I need to see like show me an example of like a Lakehouse moving from one place to another so it's a good start it's it is a community open source project so other people will be able to contribute or add things to it which is great the fact that they've open sourced it I think will mean this is actually going to have the potential to gain a lot of traction

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1038s" target="_blank">17:18</a> I find a lot of the Microsoft projects that they do if they don't open source or think Community First it adds value it does get things done in an efficient or or if it if feels like it does meet a need but at some point the the Microsoft team gets either distracted or another feature gets one gets a new project they're always onto a new project and I feel like nothing ever gets like completed or continues and maintains support long term the only product I guess I could feel like that feels like this in a community based way is like

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1069s" target="_blank">17:49</a> Semantic link Labs like that it's they've got like a dedicated Microsoft person on it they're continually building it it's getting better and better and better over time so I really like where the this is going very excited about seeing this and it's already a package you can already go to a notebook you just install it you go to your your notebook you do pip install Fabric cicd and boom you've got the library in your hands and you can go ahead and use it so very excited about that part well and there's one thing here also that I think is different than

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1100s" target="_blank">18:20</a> Really any right now even code or application is right now if I were to publish anything to a get repository or commit I also have to go to fabric and then also have those changes reflected in the workspace like that that is the workflow right no matter what I do in the repository I still have to go to powerbi.com or fabric.com go to that workspace and say oh these new changes I need to see those reflected this looks like it's also updating the workspace too which is different than

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1131s" target="_blank">18:51</a> Just publishing a repository what do you what do you mean by that Tommy so right now if I were to publish let's say I made a change on my local directory I commit those to the repository right and I say I'm going to commit these changes well that's updated in the repository but the workspace is not changed until I go to powerbi.com go to the service go to that workspace go to Source control and choose view updates and then I have to say what now I want to add these changes to

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1161s" target="_blank">19:21</a> The workspace even if they're in the repository it yes what I'm seeing here is since I have the workspace ID this is automatically gonna push this all the way to the workspace at least that's why I see the workspace ID here and the fabric cicd has something called fabric workspace which is nice yes I I agree I guess where I was thinking you were going with this one is the git is independent of the workspaces themselves and this is a wrapper around doing

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1192s" target="_blank">19:52</a> Deployments on making sure that the git or branches are up to date and correct from there you're then able to push or make sure basally command the syncing to happen I believe that this the syncing though is that's the word yeah that's like the sync option this is not talking about that this is actually talking about building so you're in the in the cicd documentation that they're talking about here the example they give is the very first workspace your feature branch is

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1223s" target="_blank">20:23</a> Synchronized to your G so you can build in the service and build things there but when you deoy them you're not touching the workspace at all you're not synchronizing anything so there's like think about three environments feature branch and then we have deploy and prod right yeah or or sorry test or quality QA QA and prod whatever that whatever you want to call that right those two other branches are not sinking between the workspace and you don't need to because this library is going to push the artifacts to your point Tommy it's

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1253s" target="_blank">20:53</a> Going to rub up the definition it's going to take the definition and then push those artifacts directly into the service which I think is the right approach what I don't see though and what I'd like to see in this part of the program is there's no way to define who are the users what is the fabric workspace settings is there different spark settings per environment through different elements throughout the different workspaces I believe there's a there's a limit to like what items can you modify right now you're only limited to notebooks data pipelines environments which would let you change

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1285s" target="_blank">21:25</a> Python libraries and things like that semantic model and reports so there's not there's there's a handful of things that are working however there's a whole bunch of other things that are not working yet and it said there needs to be more support over time yeah I'm having problems with environments in GitHub to publish those let me ask you a question about from the git environment are you using at all the structure of a single repository multiple workspaces using git

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1317s" target="_blank">21:57</a> Folders we yes I'm using all kinds of combinations of that so one combination of this is a single git repo multiple workspaces right and then each workspace becomes a folder in there I usually I design this around what the company needs when we're talking about get in get integration you can think of it this way if you have

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1335s" target="_blank">22:15</a> You can think of it this way. If you have a centralized team that is doing everything, a lot of centralized reports, but those centralized reports are living across multiple workspaces. The people doing the work are the same people. I have the one workspace for semantic models, I have a separate workspace for reports.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1355s" target="_blank">22:35</a> When I split the model apart like that across two different workspaces because of access issues, or I want to give certain people access to one workspace versus not another, if that team of people is spanning both of those areas, then I will 100% just build separate folders for each of the items.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1373s" target="_blank">22:53</a> And the folders become part of that same git repo. And if I want to split that for other teams, there may be other business teams or other parts of the company that are building things, I might give them just a whole separate their own repo. So I think about it like who are the people that need to work on things.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1398s" target="_blank">23:18</a> And then if they're the same people then I seriously consider using folders to separate workspaces as opposed to separate git repos for everything. I've enjoyed that myself, it has made things a ton easier. So yeah dude, guys if you're not doing git yet just get started.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1426s" target="_blank">23:46</a> It really, I don't want to say does it make life easier, it does if you know what you're doing. But I enjoy the experience and I just feel like I have more control over what's going on. I feel like there's something that's missing in the service. When you start getting a bigger environment you're starting to try to clean up everything, there's a lot of stuff all over the place.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1465s" target="_blank">24:25</a> And it's not very well displayed graphically as to what you're trying to show. I feel like there's an idea, so let me just give you some context. You can tag things, so things have tags on them. You can have domain which is a collection of workspaces, you can put things in folders. You could have a whole bunch of workspaces attached to a git repo.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1494s" target="_blank">24:54</a> You could have multiple workspaces in the same repo, you could have one workspace per repo, all these different permutations. I feel like I need a little bit more help discovering where does a holistic view of my company live. So think about this, what if you could have a view that said show me all the workspaces that have repos.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1511s" target="_blank">25:11</a> And then give me a lineage view of repo to workspace. So I could say these repos are attached to these workspaces. Just things like that, I want to see all the domains in my company and I want to see the list of domains as a lineage item and then how many workspaces live in that domain.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1530s" target="_blank">25:30</a> Here's all the tags I have, how many of those tags link to different items across my environment. So we really need a holistic view of what that's doing because right now it's quite challenging to unpack all these different elements.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1548s" target="_blank">25:48</a> And now that we're able to link basically anything to anything anymore, it gets dirty, it gets messy. It's hard to visualize what's going on and my mind just works in a very big visual space. I think you're on to something. This is Rule 171 of my Power BI Manifesto, and that's Beware of the Too Easy Setting.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1564s" target="_blank">26:04</a> Anything that's too easy to do, like changing a workspace or I can add a repo without understanding the implications, I need to be aware of that. And this is something that Microsoft's making incredibly easy to do — to add it, change a repository, change a branch. The ability to quickly make a new branch in workspace takes five seconds.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1586s" target="_blank">26:26</a> And a workspace, yep. But I would argue it shouldn't, because that has a lot of implications on a lot of dependencies, a lot of tangled webs. So to your point I completely agree, we don't have a holistic view yet. In five seconds I can change the branch, in 10 seconds I can change the repository it's on and break a lot of things.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1609s" target="_blank">26:49</a> I like that it's easy, but if you're in a bigger group you almost feel like you should have that popup beforehand to say hey, this is tied to this which is tied to this, just be careful what you're doing here. What you're about to do could break things for a lot of different people, a lot of different workspaces.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1631s" target="_blank">27:11</a> I would agree, and one other random side note here is you're talking about linking things, and things work really well until they don't. I've had a couple times where I've been trying to, sometimes the git will just fail in the syncing experience. If you're trying to sync something and deploy something it just doesn't work, it's not happy, it doesn't let you deploy things.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1656s" target="_blank">27:36</a> So I've had trouble with that. To your point Tommy, what happens when something doesn't work correctly? What happens when the workspace isn't operating correctly or something just doesn't communicate correctly back and forth? What do you do then, do you make another folder, do you delink it and then link it again and get a new clean synchronization?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1674s" target="_blank">27:54</a> And then compare the files and then remove it. There's a lot of weird things that can go on with the git integration pieces. I like it, I think it's definitely the right way to go, but it still feels a bit glitchy at this point. And there's certain parts of it that, while I believe the git integration is not in preview right, so git is out, they've GA'd git.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1694s" target="_blank">28:14</a> There seems to be parts of it that still feel a bit rough around the edges, and they're either working on bugs still or parts of it are still in preview. I believe the Azure DevOps is GA but GitHub is still preview. Yes correct, so important distinction. But that's my point though, some things work well and some things are not.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1717s" target="_blank">28:37</a> It's depending on what you pick. We think oh git is integrated, you can just use it — no, it's not the same as what you were thinking. It's somewhat there but not all the way there. So it'll be interesting. Anyways I like this, I like this feature. I think this Fabric CD thing is going to be useful. I'm going to go play with it.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1730s" target="_blank">28:50</a> I wish it would extend a little bit more into the workspace settings — which users have access to the workspace, which users have access to the different items or artifacts inside the workspace. If I'm publishing a semantic model from dev to prod, I'm going to want to change potentially who has access to build on top of that model over time.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1751s" target="_blank">29:11</a> So not only do I need to deploy the artifact, I need to deploy the artifact and give out permissions on that. That should be something that I'm regularly deploying and that should be part of my deployment script. So I feel like a lot of everyone's talking about the CI/CD that is at the item level, but there's another layer above the item and another layer above that, that's like proper CI/CD.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1773s" target="_blank">29:33</a> And the challenge I think we get a little bit here with CI/CD for things is we need to really think about where does the data live. I really want to be able to check out just the pipeline and build just the pipeline and put it back in.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1786s" target="_blank">29:46</a> Yeah I think we talked about this before Tom, we talked about like books on a shelf, like an encyclopedia. If you think about your data pipeline, all the things that touch your data — lake houses, data flows, pipelines, semantic models, reports — all these things are like books on a shelf in my mind.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1801s" target="_blank">30:01</a> And what I like to do sometimes is I want to pull out the book about the semantic model and I only want to work on that one item, fix it, adjust it, and then put it back into the solution. And right now it feels like we're taking the entire encyclopedia down, putting it on my desk and looking through the whole thing, and then putting the whole thing back all at once.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1822s" target="_blank">30:22</a> That's what we're doing right now with git integration, when you're copying things and doing workspace. I don't have the ability of being able to build a small thing. This is more relevant when you have data that you're trying to use. For example if I'm trying to copy a lake house and make some changes there, I can make a new definition of a Lakehouse in my feature branch but there's no data in it.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1844s" target="_blank">30:44</a> So I need to have the Lakehouse replicated in my environment but then a whole bunch of shortcuts back to the original thing, so then I don't have to copy or remake the data. And then I can make my changes and then I could blow away basically the lake house that I'm using locally and then just publish the pieces that I need back into the service.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1861s" target="_blank">31:01</a> So there's more to come. The fact that there's new items coming out about this makes me very happy because that means Microsoft's paying attention. We're getting the tooling and support that we need. This is going to get better. Anyways I'll just pause there.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1875s" target="_blank">31:15</a> Oh I can imagine you just shaking a bookshelf violently, like whatever falls out — that's give me my semantic model, give me my data! Well now again maybe I've been tainted with all the new internet of things. I'm still an avid Googler, I still Google everything. Sorry Microsoft I don't use Bing, it's not as useful for me.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1896s" target="_blank">31:36</a> But I'm getting more and more comfortable with using AI as my primary search. I'm going more frequently to other things. Tommy you were just talking about Cursor the other day. Yeah it's incredible what these AI things are doing. Oh man, and then you can give it the documentation too.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1912s" target="_blank">31:52</a> We could again, another story, but if I'm like I don't know what I'm doing here in this new Python notebook or this package, give it the documentation and it knows everything now. So yeah I'm getting more and more comfortable with just doing that.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1926s" target="_blank">32:06</a> I'm also saying when my experience when I work with Fabric notebooks, I honestly, when I have access to Copilot it's extremely useful. But not every environment I touch has Copilot in it, and it's so frustrating to me because I'm in the web experience, I've got the notebook right there, I want Copilot.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1946s" target="_blank">32:26</a> I want to say I want it to help me make functions and make code changes. I've been writing in a lot of notebooks recently and it's been bothering me. So what I've been finding I've been doing is I have GitHub Copilot, so I'm using that one. And so what I'm doing now is I'm taking my notebooks out of the service, I'm downloading them, connecting them, using them locally and I'm writing all my code locally.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1965s" target="_blank">32:45</a> And this is where it gets weird for me because the connection between, so you can have code in your local VS Code, it can run on the remote server, but you can't use mSpark utilities. There's a lot of packages you can't use. It's a little bit not quite right yet.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=1983s" target="_blank">33:03</a> And there's sometimes the connection drops and I lose things, and it doesn't quite — the notebook works just fine synchronizing, the notebook works great. It's the connection when I want to execute or run the Spark engine and get the results back, sometimes it doesn't work as expected. So that's a little bit dodgy for me at this point.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2000s" target="_blank">33:20</a> It feels without using Copilot or an AI assisted tool, it's like when you have to write something on paper, like you're writing a letter, and then you realize as you're writing in the card there's no spell check. Yep, that's what it feels like. Oh I'm not sure if that word's right and I can't right click on a piece of paper. There's a problem here.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2021s" target="_blank">33:41</a> So all right anyways, moving forward with that, enough of our initial topics. Let's go back into our main topic. Tommy give us the main topic here, let's go talk about what we were actually going to talk about in the podcast. We've been burning a lot of extra time here on intro, sorry about that for those who actually want to hear real information.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2037s" target="_blank">33:57</a> Yeah and I can see this being a series, something that is absolutely going to be something we're going to touch multiple times.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2004s" target="_blank">33:24</a> We're going to touch multiple times this is Fabric's Decision Guide. They have a ton of these and this one is around choose a data store. It's really this guide helps users choose a data store for their Microsoft Fabric workloads.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2036s" target="_blank">33:56</a> We obviously have more than one now. We have Fabric SQL databases, data marts, warehouses, lakehouses. And the Decision Guide goes through all the different settings and features and really a comparison of all the places I can store my data in Microsoft Fabric and really which ones look well and then they give a few scenarios.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2058s" target="_blank">34:18</a> So Mike diving in with two feet, let me get your initial thoughts here on documentation but also where you're storing your data and also going through how important is really where you store your data.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2074s" target="_blank">34:34</a> Yeah I think there's a lot of scenarios. I'm going to give you my world of what I understood about data. I came from a world of the business which meant I wasn't really a SQL DBA. I wasn't really in the SQL world a lot. I know how to write some SQL, the time I was in my class my masters for data science so I had a whole class on just writing SQL. So I was learning how to use the language and get around databases using SQL, great very useful.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2103s" target="_blank">35:03</a> But when you move from in that business world when I had been given Power BI originally I didn't really need SQL maybe a little bit just to go get data out of the SQL server. But I wasn't really thinking about table storage. I wasn't thinking about where I put things, it was either data flows or it was at the semantic model, very simple.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2123s" target="_blank">35:23</a> And then we get data marts which is now a bit more SQL Server-esque where you could store tables and it's on in the background so giving that SQL Server experience. When I was doing this that's the world I came from — I came from SQL servers hold the data and you basically load that into a semantic model and the semantic model then serves the reports.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2144s" target="_blank">35:44</a> At some point Microsoft and other tools like Databricks entered the space and started really shifting the mindset around how you store and do analytical reporting. And I think it was really around this idea of we can start throwing cheap commodity based compute at things and we could have a whole bunch of really cheap storage.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2164s" target="_blank">36:04</a> And so cheap storage for me was the linchpin of wow this is really interesting, it's really changing the game now. So when now I look at data and think oh my main mode of transportation is let's get everything as much as we can to a lakehouse. To me that's the most effective for reporting because a lot of your reporting is based in batches — load in batches, refresh the data in batches.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2189s" target="_blank">36:29</a> Keep it there but you want to keep it at a low cost. You don't want to have the continually spending compute to go access joint tables, all that extra stuff that you would normally get from a SQL Server. So for me when I started moving from on-prem systems to cloud I was optimizing more for the amount of compute I needed to run the reports.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2210s" target="_blank">36:50</a> I don't want to continually have a SQL server on all the time. I want to save more time here in doing a lot of these other experiences around loading data. So all this to say is my mindset right now is very focused on Lakehouse everything. I'm starting to get a glimmer of real-time analytics data becoming part of this story.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2228s" target="_blank">37:08</a> There's a couple scenarios — usually it was like if you're not in manufacturing or you're not doing something right now where you need answers immediately, real-time analytics is very not as useful for you. However one of the things that I'm very interested and passionate about right now is compute usage on your Fabric workspace which is very real time.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2250s" target="_blank">37:30</a> When something starts throttling itself and people stop getting reports I really need to know about whether or not that workspace is overwhelmingly getting hit by some query or some information that's causing my capacity to auto scale or not auto scale — it's smoothing right. You have a huge demand, the demand doesn't decrease and all of a sudden Fabric starts saying wait a minute you've run out of compute usage.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2279s" target="_blank">37:59</a> We're going to start throttling you and start burning things off. That's when I start needing to understand what's going on with the Fabric environment. So for that reason I'm standing back and saying I'm now more interested in some of the real-time analytics and that then changes where I put the data.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2296s" target="_blank">38:16</a> Putting real time or fast changes of data into a Lakehouse probably isn't the most efficient way of doing it, it's more for batching. Now you're looking at maybe like Kusto database or now that we have Fabric SQL, that's a transactional database — you should be able to update and modify individual records there very quickly without requiring a lot of extra overhead.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2317s" target="_blank">38:37</a> For the lakehouse, the tables, the storage modes, you can insert or update records a lot easier I think in the SQL side of things. So to me there's a lot of new moving parts now and changing what I think about storage modes. So I'll just pause right there, I said a lot.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2334s" target="_blank">38:54</a> No and I think one very clear thing you said — there's absolutely no one size fits all here, there's no one universal solution. I don't think so, yeah. And I think we're running to the — I'll refrain from the word problem — but I want to hang on your note. Should there be a one problem one solution fits all, right?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2355s" target="_blank">39:15</a> Well the one problem is where do I put all that data, right, that's the problem. But to your point Tommy, let's think about all the variables that are going into this right. How much does it cost to store it, how much does it cost to compute it, to bring it to that storage account — those are two considerations. How what's the volume of data, how much variety is coming through that data.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2376s" target="_blank">39:36</a> Right, what if there was just a service that didn't matter what it was — like the system made the decisions for you, what would it look like. Yeah what would it look like? Hey I don't really care where I put the data. Do I really need to make the decision between SQL Server, Lakehouse, or Kusto database? Like maybe I don't care about that.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2394s" target="_blank">39:54</a> Maybe I just throw tables at something and then the multiple compute environment just figures out the best way to store it and aggregate it for me. And what if you could have data coming into like a lakehouse and you define the schema — no let's say a storage account, a storage something right. I'm storing this data, here's how the data will change, here's how much I have.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2417s" target="_blank">40:17</a> And imagine a day where initially that data is stored in SQL server and it just runs and then at some point the SQL Server says hey I'm becoming inefficient to store this data. I'm going to offload the last 10 years of data and push that into a Lakehouse. And so now you have this Lakehouse thing that's storing longer historical records that are not changing but you have this SQL server at the front end that's doing faster changes.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2438s" target="_blank">40:38</a> Or maybe it's Kusto — I'm bringing in real-time data, we're going to land a lot of data in Kusto but then that's not efficient anymore and it decides oh I'm going to push a portion of that to SQL or I'm going to push a portion of that to Lakehouse. We don't really care. At the end of the day our needs are the same — store the information that I want in the way that I want it, that's it.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2454s" target="_blank">40:54</a> Microsoft should be figuring out how to make whatever compute engine in the back end just work for me. Does that make sense? Yeah but you said something that I just needed you to elaborate a little more on — you said we don't really care. Are you saying we don't really care where it's stored?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2466s" target="_blank">41:06</a> I don't think we do honestly. Like so if I give Microsoft the requirement of I need access to my data and it needs to be cheap to get it there and store it, those are my main requirements. I don't really care if it's in a SQL Server, if it's in a Kusto database, or if it's in a Lakehouse. All of those things are just storing the data different ways with different technologies or different compute engines.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2494s" target="_blank">41:34</a> At the end of the day let's imagine Microsoft eventually brings like Cosmos DB to Fabric, that could be a thing. So all these different systems have different ways of storing information. Let Microsoft optimize where to put it. I should be defining hey Microsoft I'm using this data flow, I'm making this table, and I'm either full refreshing it or I'm incrementally refreshing it and here's my keys I want to update on. Let Microsoft figure it out, let them optimize everything.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2521s" target="_blank">42:01</a> And it's their goal to keep the cost down as low as possible for whatever I want to store. Now that may be very idealistic though. That I was about to say — that's literally the word I was about to use, idealistic.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2530s" target="_blank">42:10</a> And here's the thing — unless that is a different product literally called the Microsoft black box data store — that's not something a lot of organizations or a lot of people are going to find attractive. But let me back up here because I'll take it from a different perspective.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2548s" target="_blank">42:28</a> Compared to where you had — we are dealing in a world with a lot of different choices. There's a lot of jars of jelly on the menu to choose from. Sure, and for a lot of organizations — and I'll rewind — even when we talked about people are still dealing with the same problems they were five years ago and one of them is just simply storing data.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2572s" target="_blank">42:52</a> Are there different solutions for these niche things especially when we want real time or I want people to use Spark on my SQL database? Sure but if we even rewind where we just want to store our data, like we just want something that we can have a source of truth that everyone can pick from — it gets a little simpler too.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2591s" target="_blank">43:11</a> Because I don't think a lot of organizations — to me I'm not starting with all the complexity needs. Because one thing I'm finding out very clearly with Fabric right now is it's pretty easy to migrate from one data store to another if I'm already in the Fabric environment. If I'm in a Lakehouse and I want to push that to SQL, that's not a hard thing to do compared to jumping a different platform.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2617s" target="_blank">43:37</a> So this is not one of those things to me right off the bat I better choose right or I'm gonna be in a world of hurt later on down the road. So I can start small, I can have segmented wins, I can have small milestones. And then as the complexity of the project or whatever the situation is then we can look at other options.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2639s" target="_blank">43:59</a> But to me Mike, I'm looking at this on a very simplistic point of view — very Tommy dum dum point of view — on let's just get our data stored simply, then we can talk about the scenarios that were needed. And I think for a lot of organizations as they're jumping into Fabric I see a lot of people jumping into that.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2660s" target="_blank">44:20</a> And so with all that being said I love the Lakehouse and I love the SQL database. Those two are the ones you have to make the options for because if I have data coming in from JSON files and raw data that's when obviously when I need the Lakehouse.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2671s" target="_blank">44:31</a> Raw data, that's when obviously when I want to do some additional transformations. But let's not underestimate here, just even having a SQL database and then we go from there. Because what type of win it is for so many people just to have their data in a single place.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2707s" target="_blank">45:07</a> So I can say I know where to locate where my marketing data is and I don't have to go to four different logins and I don't have to go to four different workspaces. Yes it's all in the marketing workspace and guess what the business has access to that. That can give you two quarters, half a year of wins, then you can deal with other complexities.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2729s" target="_blank">45:29</a> I think something that's very interesting to me the way you're describing this one because this is a mindset shift. That is what makes Fabric so appealing or attractive to me, is to your point Tommy, turning on a new storage is very easy, like click a button.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2746s" target="_blank">45:46</a> Great, KQL is on, click a button, right, get another Lakehouse, click a button, get a SQL database. Like that's unheard of in Azure world, deploying things in any world, resource groups, there's all these different things. It just doesn't really make sense.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2764s" target="_blank">46:04</a> So that being said, when I think about what Microsoft's doing here, there's this idea of Entra ID. The fact that there's this identity provider that is able to give me the very detailed workspace level access and you can't see things. I think that alone is the win in Fabric.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2783s" target="_blank">46:23</a> That you can have all these different data storage, compute, all these things together and that they can all be segmented or authorized or permissioned based on who the user is. I think that's really the right approach here, I think that's a lot of what people need moving forward.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2800s" target="_blank">46:40</a> Most organizations I work with that are coming from a traditional SQL background or an on-prem background, it's a lot harder to get access to the data because having this single permission layer across everything that tells what you have access to. I think that's what Microsoft is doing really well inside Fabric.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2817s" target="_blank">46:57</a> I just want to talk on that point there because I think that's a really different way of thinking than you have been in the past, right. Let's throw all the marketing data wherever that may come from into a single marketing workspace or Lakehouses or whatever the thing you need to do is, you can build it all so that everyone has access.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2836s" target="_blank">47:16</a> And you can very carefully with ease give access to the things that you need. And this is very powerful and I will say, potentially a hot take, you give me SQL databases and Lakehouses, you can take notebooks and every other feature. If I had the ability in Fabric like I do now to create SQL and Lakehouse, that is worth the price of admission.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2857s" target="_blank">47:37</a> Because to your point Mike, no other platform has that ease of ability to locate my data and have that ease of user access. If all I had was a simple single place where I can view my data, that's worth the price of Fabric to me. I would pay for Fabric just with that.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2873s" target="_blank">47:53</a> Now obviously it has every other option available and every other feature available. But the very fact that we can easily turn on something and easily push something there, whether it's mirroring, I could tell the marketing team all the places that you have to deal with your data, I've now got it in a single place.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2893s" target="_blank">48:13</a> We have put it based on tags and the right people, you don't have to worry about weird logins, it's all in a single place. And the fact, Mike, that we're not just talking about a Power BI semantic model. And to me this is the huge win here.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2909s" target="_blank">48:29</a> Where again the problem with Power BI, and that's going to sound terrible, but the limitation of Power BI semantic models is that's the last stop on the journey in terms of your data. Because you can't reconnect to that Power BI semantic model except in another report.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2928s" target="_blank">48:48</a> What we now have the ability — what are you gonna do with it? I'm gonna disagree with that statement because really what are you gonna do with a semantic model after, besides build other reports?

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2940s" target="_blank">49:00</a> I'm going to go use it in my Semantic Link Labs, I'm going to go use it in my Semantic Link, I'm going to integrate with it with my APIs. The semantic model is a place for many launching points of things that are data driven. There's going to be a plethora of experiences, all read.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2959s" target="_blank">49:19</a> Yes, where am I pushing that data? Well you're not, you're forgetting the translytical push now. So this is the new term for Microsoft, translytical. There is going to be — yeah I agree, but imagine how closely can — so yes I understand Tommy where we are right now.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2978s" target="_blank">49:38</a> Yes the buck stops at the semantic model right now, but what happens when we start adding the Fabric SQL databases next to the semantic model. And there's other — I'm going to just argue here just a little bit, like we're going to get to a place where the report feels less pure read-only.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=2998s" target="_blank">49:58</a> I'm seeing the vision and hearing the communication from Microsoft that the report will start to be two-way interactions. And it'll turn, you'll have the opportunity to build it more like a data app, an application that has a two-way communication, inputs and outputs.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3016s" target="_blank">50:16</a> For those models, so I think the semantic model supports a lot of this, but we're going to see a lot tighter coupling between storage, updating, modifying records next to that semantic model. So yes today it looks like that, I don't think we're going to stay there very long.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3033s" target="_blank">50:33</a> And my only argument there is, one, first off I await that day like a dry July day looking for water, I can't wait for that. But for that to be easy to do, you're telling me all the things with the Semantic Link Labs, you're telling me things with APIs, that's still developer based, right.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3050s" target="_blank">50:50</a> That's still very — that's what happens when another workload shows up and consumes data or a semantic model. And like it's just now a user interface, these are things that as your company gets more capable, so the same way that Microsoft has made reporting a commodity, data engineering is now a commodity, right.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3070s" target="_blank">51:10</a> Anyone can go in and build for free, download Desktop, do data engineering in Power Query, make tables and build them into a report. That's now a commodity, everyone can build it. So now we have a whole layer of — I'm going to say it anyways — now we have a whole layer of trash in our organization.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3088s" target="_blank">51:28</a> Like people are building things that are one time use things and we're going to throw them away later on. That's what happens when you build commodity things, everyone builds and there's more consumption, perfect, great. But the challenge is like what we talk about on the podcast, is now how do I get from that level, how do I start promoting the best stuff.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3108s" target="_blank">51:48</a> How do I know what's actually useful to my organization because everyone's creating things. And I think the same thing's happening now for these like beyond the scope of the semantic model, Fabric is now all these other tools, everyone's going to be able to create a lot of things.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3122s" target="_blank">52:02</a> We have to be very strategic on like what is creating real value for the organization and not just building things for the sake of building them, but building them with real value in mind. And there's not a lot I can disagree with, the only thing where I push back is what I call global or the universal features.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3141s" target="_blank">52:21</a> Right, where everything you're saying is — one, I know what's coming, I know not to doubt you since episode one about the semantic web. What good would I be if I didn't give some vision for the future, right. And I know it's coming but the only thing I argue is how easy is it gonna be for the common user, globally available.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3168s" target="_blank">52:48</a> That's the thing with semantic modeling, even now on the web I can build a Power BI report. I argued about this last week, yeah, that it's meant for like a business user, for a basic user. And yeah but is it though? I wouldn't argue that though, I don't agree it's such a friendly user interface. It's like come edit me, you don't know what you're doing but come here.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3190s" target="_blank">53:10</a> I agree but like when I look at models that people are giving out to other people, if you have a scrollable list of tables in the right hand side of your screen, there ain't no way an external user is going to be able to understand that and figure out how to build stuff on it.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3204s" target="_blank">53:24</a> So like I understand but I very quickly see that models get way too complex way too fast, right. And what people — and I've done a lot of embedding projects around this — everyone's asking for simplification. Simplify what I need to get access to, simplify how I make it easier.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3221s" target="_blank">53:41</a> And this is why Data Explorations showed up, this is why metric sets showed up, all these other tools that Microsoft are building are because the models are getting very complex and people still can't figure out how to work their way through them and build a visual on top of those models.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3235s" target="_blank">53:55</a> So hey by the way, here's a KPI measure, here's all the dimensions you should be using, like that's different. Now the whole experience of going from the model that has everything and building from that versus here's the metric that I care about, let's build from that. Like that's a totally different realm of what we're talking about.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3254s" target="_blank">54:14</a> What's the law you bring up all the time about the idea of light? When light became a commodity it started being used more than ever. It's a problem now, now we have light pollution. We're gonna have report pollution, we're gonna have — but I think in a good way.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3268s" target="_blank">54:28</a> No but hear me out on this, so we should absolutely be layering. Where from a data store point of view rather than having to be so selective about where my data store, like oh man these developers are going to want it so I should do it in a T-SQL database warehouse. But oh no we're also going to need real time.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3291s" target="_blank">54:51</a> Michael — we have this ability now to create — sorry, only my parents call me Michael! I'm just teasing. I have a good friend, when I'm really arguing it's Michael, so it's the full name. Sorry, in trouble Tommy.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3308s" target="_blank">55:08</a> But Mike, like we have this ability now where in a sense we can be a little rash and throw away things quickly. So why wouldn't I start with layering simply, starting simple every time? Why wouldn't I start with a quick Lakehouse or a SQL database and just simply build from there rather than always starting with the most complex.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3331s" target="_blank">55:31</a> Only because I have incredible ease of use, I'm not spending more initially for building another Lakehouse or building another SQL database. Yeah there may be some compute that goes on with that, but if I am doing a proof of concept or if I'm just trying to push data and get a win, why wouldn't I always start with the data store that's the simplest and then I can go from there. But at least just get the data in, why wouldn't I do that? Why wouldn't you, that's ground zero.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3338s" target="_blank">55:38</a> That's Ground Zero, you're going to be doing that. Yes I agree with that, but I think the choice here is like, are you right now Tommy, if I said look give me all the pros and cons for every different storage item that you have inside Fabric. Tell me what are the advantages of each one, what are the disadvantages of each one, and then give me all the pros and cons.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3358s" target="_blank">55:58</a> I'm just going to say I'm going to bring you data, so there's almost like a decision tree thing that needs to be made here for all the different data sources. I think to your point Tommy, yes it's very important to get the data down and probably to some degree it's probably not a really important thing in the early stages of a project or development. It's probably not as important that you optimize day one out of the gate.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3380s" target="_blank">56:20</a> So again I see a lot of this in projects and app development. Sometimes it's just best to build something and go. Even I have the prototype, even if I had the early version of a V1 of a report or a semantic model, it's very useful just to get the data there. And it might not be the most efficient way to get the data there initially because the idea is you need to prove out this concept.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3401s" target="_blank">56:41</a> Does this actually add value, do we like what's going on here? So instead of pulling in 10 years of data let's only pull in two years of data. If we're doing loads, if the data is coming in every hour maybe we only do that once a day. Just start somewhere to get something working.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3418s" target="_blank">56:58</a> And I see this a lot with Power BI and I saw a post yesterday which I'm really excited about. I've been seeing this a lot actually. Someone said hey I'm going to load this table of data from an on-prem SQL server and they're going to do timings of it. So they're timing it from data flows gen two, how many CUs were used, data flows gen one, and then copy data used in the pipeline.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3441s" target="_blank">57:21</a> So which feature was the most efficient for getting data from one place to another just copying the data in. Data flows Gen 2 by far was like double the expense of the data flows gen one, and was like four or five times more expensive than using the copy data activity.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3459s" target="_blank">57:39</a> Me as the user I may not understand what a copy data activity is, I'm not comfortable yet using it. So I may just use data flows gen one or gen two just to get the data in, just to get things moving. Once we have the data there then I can step back and say okay maybe this is not the most efficient way to do this.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3474s" target="_blank">57:54</a> Maybe I should go look at a Python notebook or a PySpark notebook that would do the same experience. So this is where I can then have the ability to make different choices around what I'm doing to optimize. So step one is make it work, step two I think is come back and optimize and that's when you start really needing to make the decision between which data store am I going to use.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3497s" target="_blank">58:17</a> How fast, what's the three V's of data? Velocity, volume, and variety. How different the data is, is it the same data every single time, does the data change every time you get it. Those influence how you store and get the data in.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3515s" target="_blank">58:35</a> And I'll agree with Donald Parish. Donald you are spot on man, nothing beats Power Query for the ease of use. It is the easiest tool to click on buttons and get the UI to just produce the data changes you want. I still find myself, I still even today Tommy I'll open up a file that I download from the internet and I still have to this moment have to go and say stop Michael, don't open that file.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3538s" target="_blank">58:58</a> Go to Excel, go to Power Query, and first go transform the data there. It is an elegant tool and it runs really really well on my machine because I have, and this is the point I think. Power Query is a compute intensive process, it's constantly refreshing, it's loading lots of tables, it's doing all these things. It is very compute intensive because it makes this very easy to use UI.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3564s" target="_blank">59:24</a> This is the challenge with Power Query. So on my machine locally when I have unlimited compute and it doesn't cost me anything from the cloud, use that all up dude. Run the machine, let the compute just go wild because it doesn't matter on this local machine.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3578s" target="_blank">59:38</a> I think the challenge now becomes when you go to the cloud, to optimize, to make things faster and more efficient in the cloud. You're now using a program that was meant to be on desktop which was using a lot of compute. Didn't matter because you had unlimited amounts, versus now in the cloud you're trying to conserve that compute. You want to do it efficiently.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3597s" target="_blank">59:57</a> And that's where the notebooks and the other experiences are a lot better because they're more efficient and they're not requiring you consume all that extra CU units. Especially when you have more niche problems, then the niche solution becomes much clearer.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3615s" target="_blank">1:00:15</a> Starting off, and this is going to be crazy that I'm saying this out of all people, the top down, but I want to give the data to as many people as possible in the beginning. Because the number one problem I've heard since I was a data analyst since 2016 or 2015 was we want to own our data. Data is siloed.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3638s" target="_blank">1:00:38</a> Still to this day there's still a whole bunch of data silos going on and we're trying to break that down a bit. So if I have a general problem of that, from a data store point of view it's very simple, it's very straightforward. I can deal with your other problems later, but can I get the first win of just storing your data in a place that we can all access, that you can touch and interact with.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3661s" target="_blank">1:01:01</a> Rather than you having seven different sources and then I have no idea what's happening on the other side of the fence. Let's break down that silo, then we can deal with your other problems if you need it right today or the next two minutes.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3674s" target="_blank">1:01:14</a> So that's I guess as we get near time, one thing I'm realizing more and more when it comes to a data store is can we start simple. Can we start with a SQL database or a Lakehouse and remove silos. You can still own your data but it's not in some foreign land where the rest of the organization can't see.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3697s" target="_blank">1:01:37</a> Then we can deal with your more niche problems and that's where we have the more niche solutions. Let me do my final thought here because we're at time at this point. So I'm going to do my wrap up of how am I choosing data sources, what does that look like right now based on the way the landscape of Fabric is today and even Power BI.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3715s" target="_blank">1:01:55</a> If I'm in pure Power BI I'm thinking about using data flows gen one to centralize tables into a common place. I'm not writing a data flow gen one with lots of tables in it, I'm trying to do very specific shorter smaller amounts of data flows gen one. It works, it stores tables for me in the service, I can then pick them up in semantic models and pull multiple tables together. Great, I'm happy.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3734s" target="_blank">1:02:14</a> So if I'm just pure Power BI I'm really am considering data flows gen one, it's a great tool, it works really well and I can store the data there. When I move into Fabric right now my mentality is bring everything to the lake. I really enjoy the experience of direct lake tables coming right into a semantic model.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3750s" target="_blank">1:02:30</a> I think there's a lot of improvements coming in that space. It is a little bit slower to load that first run of semantic models because it's evicting the data, it's loading a lot of table data in that single semantic model. But it's not so bad and I have found on some of my bigger tables it runs really well. And so I think as the technology improves it'll get better and better over time, and the query engine will get smarter about how to load the data from the Lakehouse.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3774s" target="_blank">1:02:54</a> So right now my mentality is bring everything to the lake, that's where to go for things. But a lot of what I do is in batch, I'm starting to explore real time things. Admittedly I haven't been using Kusto as much as I should. I need to start looking at Kusto a bit more, so Kusto is something I'm very interested in, definitely want to play with that a bit more.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3796s" target="_blank">1:03:16</a> And with that I've been very pleased with the performance of the SQL Server inside Fabric or the Fabric SQL. That's really interesting to me and it's not that expensive that I've observed on what the workloads that I'm doing inside that Fabric SQL. So again I'm basically storing data, I'm requesting data from there, I'm not doing a bunch of complicated joins, I'm not building a bunch of views, I'm not running procedures and doing lots of repetitive things.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3819s" target="_blank">1:03:39</a> I'm not using it as an operational database. I'm typically using it for storage, tables are smaller, and it's more of that when I need to change the data quickly it seems like the right solution to then store and quickly change information over and over again. There's a need for that, there's going to have to be a need for that when you run your pipeline and loading processes. It will serve a really good need there.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3843s" target="_blank">1:04:03</a> So all that's to say is there is tradeoffs and I think Greg was making a great point here in the chat. Every storage system no matter what you choose there's always pros and cons of each one. Each one uses a slightly different language, Python, Spark SQL, T-SQL, KQL. There's reasons why all those languages appeared because they all do things differently and they have their advantages and they have their weaknesses.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3878s" target="_blank">1:04:38</a> So for me what serves most of my needs, to your point Tommy earlier, we want to make the broadest access to the information that we need. One lake for me solves a lot of those problems. I get a lot of shortcuts, I can easily distribute that data out and not having to move it over and over and over again. I can literally make one copy of it and keep it in one place. That's very nice for me to see, I really like that experience.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3904s" target="_blank">1:05:04</a> For that I'm probably still spending most of my time developing or building things that are going to bring the data to the Lakehouse. These other tools I need to figure out more about where they fit into this experience here and when would I solely use a SQL server or when would I solely use a KQL database or Kusto database inside Fabric to serve those needs. So I think that's all I've got with that.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3928s" target="_blank">1:05:28</a> Thank you all very much, we appreciate you listening here on our episode 400. I hope this was a fun episode for you to listen to. Sorry for the longer intro today, we were gushing a bit about how a good milestone this was.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3940s" target="_blank">1:05:40</a> Thank you all so much, we really appreciate it. If you don't mind please share this podcast with somebody else if you found value in what we're discussing here. Tommy, where else can you find the podcast? You can find us on Apple, Spotify, or wherever you get your podcast. Make sure to subscribe and leave a rating, it helps us out a ton. And please share with a friend since we do this for free.

<a href="https://www.youtube.com/watch?v=394nijxbYLM&t=3959s" target="_blank">1:05:59</a> Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/podcast, leave your name and a great question. And finally join us live every Tuesday and Thursday 7:30 a.m. Central and join the conversation on all PowerBI.tips social media channels. Thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
