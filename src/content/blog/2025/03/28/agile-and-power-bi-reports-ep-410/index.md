---
title: "Agile and Power BI Reports – Ep. 410"
date: "2025-03-28"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Agile"
  - "Power BI Reports"
  - "Project Management"
  - "Report Development"
excerpt: "Mike and Tommy explore how Agile methodology applies to Power BI report development. They discuss iterative design, stakeholder feedback loops, and why treating reports like software projects leads to better outcomes."
featuredImage: "./assets/featured.png"
---

Mike and Tommy explore how Agile methodology applies to Power BI report development. They discuss iterative design, stakeholder feedback loops, and why treating reports like software projects leads to better outcomes.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/BdBpk3Arxww" 
  title="Agile and Power BI Reports – Ep. 410"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Main Discussion

Mike and Tommy dive into the intersection of Agile project management and Power BI report development. The core idea: building reports iteratively rather than trying to deliver a perfect final product on day one.

### Why Agile Works for Reports

Traditional waterfall approaches to report building often fail because stakeholders don't truly know what they want until they see it. By delivering working reports in short sprints, developers get real feedback early and can course-correct before investing too much time in the wrong direction.

### Iterative Design and Feedback Loops

The guys discuss how breaking report development into smaller deliverables keeps stakeholders engaged and reduces the risk of building something nobody uses. Quick iterations mean faster time to value and reports that actually solve business problems.

### Treating Reports Like Software

Mike and Tommy make the case that Power BI reports deserve the same rigor as software development — version control, testing, deployment pipelines, and structured feedback cycles. This mindset shift elevates reporting from ad-hoc requests to a professional discipline.

## Looking Forward

The conversation highlights how adopting Agile practices can transform the way teams approach Power BI development, making the process more collaborative and the results more impactful.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=35s" target="_blank">0:35</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everybody. Good morning, Mike. Tommy's got a little bit of a quick traveling going on here, so we'll see a couple episodes here with some traveling around.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=46s" target="_blank">0:46</a> This is a pre-recorded episode, just FYI, so you're aware. This might be a bit shorter than normal cuz again, traveling makes little things a little bit more challenging when we do recordings and things.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=56s" target="_blank">0:56</a> So that being said, we'll jump right in. No really news or announcements. We'll just jump into our main topic for today. Today's our topic is going to be around agile development or the process of agile development.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=87s" target="_blank">1:27</a> I guess you could say scrum or agile. It's a methodology and then using that to develop PowerBI reports. All right, Tommy, give us some context where we think we're going to take the conversation today.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=117s" target="_blank">1:57</a> Yeah. And for the record, I've seen TV shows that have worse interviews than this, so I think we're going to be fine here. Yeah, they're all including serial killers and things like that. That's why it looks shady, dude.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=131s" target="_blank">2:11</a> Two-hour difference, man. It's morning for you guys, but still excited to be here. But yeah, agile development. This was my life at one point. If you're not aware what agile development is, it's all around this concept of sprints.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=167s" target="_blank">2:47</a> So, we have a long project to work on. We know it's going to be, let's say, three, six months. So, it's really just broken down into different segments and rather than trying to work on everything at once, all the different parts are broken out and teams are usually broken into normally two week sprints.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=204s" target="_blank">3:24</a> So, hey, in the next two weeks, this is our focus. We're going to work on these things and it's very common in project development really software is a huge part of this, but I know marketing uses this. Some other data developments use this as well.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=242s" target="_blank">4:02</a> And usually they're all centered around projects. So things that are going to require longer periods of time which makes sense to break things down rather than boiling the ocean. But for the sake of argument today, Mike and this is actually I might have this mailbag in my sleep over restless nights I had.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=282s" target="_blank">4:42</a> We tried to implement PowerBI sprints at my first really gig in PowerBI and everything wasn't project based because we had a ticket system. So one of the ideas was we're going to break down our tickets. We're going to really break down everything you do in these two-week sprints.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=301s" target="_blank">5:01</a> And let me just start off. There's pros and cons and you can imagine the hurdles that you may have really focusing on trying to do a two-week sprint with a ticket based system, right? Because not everything we do is all project based.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=315s" target="_blank">5:15</a> Yeah. I agree with all the things you're saying and maybe let me give you my lens or my perspective on what sprints mean to me maybe a little bit and how I perceive them as well.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=347s" target="_blank">5:47</a> Sprints or this idea of agile development is really around you have a general guideline or goalpost on what you're trying to hit, right? Something that's larger and further out into the future. That is the main objective, right? We're going to build all of our reports for HR.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=382s" target="_blank">6:22</a> We're going to build all of our reports for sales team. But in lieu of that, it takes on this opportunity around where does all that live? How many cycles do we need to get through to develop this?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=402s" target="_blank">6:42</a> And I think the BI cycle tends to be much faster. And I also think sprint and agile require to have a good amount of planning. You know what the work looks like. So that is very interesting there as well when you talk about how much planning is able to be used inside sprint and agile systems.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=444s" target="_blank">7:24</a> So if you really don't know exactly what needs to be built every single time on every single report, it's much harder to sprint your way through the report because you're not able to really understand the requirements. And so you're basically saying I need to have two weeks of requirements set so I can develop the report for two weeks.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=467s" target="_blank">7:47</a> And what I find though is reports or the people asking for reports really don't know enough about their requirements. Let me say this very generally, right? There are teams that know really well on what they're trying to build for reporting or data modeling pieces.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=502s" target="_blank">8:22</a> But in general I find that the team just needs to see something, react to it, and then make adjustments to it. So the cycles are not two weeks in length. The last thing I'll just point out here is I look at sprinting in agile and think it's the idea that we have three or four team members and we need to keep them busy on work all the time.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=542s" target="_blank">9:02</a> There's so many things to do in our company that we can't do everything at once. So the sprint and agile process is also a way of saying look I need to prioritize my work, find the most important things I should be working on, put the most important things at the top and just keep my team busy because there's so much work to do.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=579s" target="_blank">9:39</a> That to me that's how I look at the agile process and yes the end goalpost is what you're marching towards but sometimes those posts move, sometimes your objectives change. In software development you're building the software, the feature, right? Hey the feature is going to be this new AI integrated thing whatever that may be.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=600s" target="_blank">10:00</a> That doesn't necessarily always convey the same message in reporting and I think report development cycles tend to be much smaller and there's a big critical factor that we're missing here that's really critical to agile development, that's usually a project manager. This is a huge aspect.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=638s" target="_blank">10:38</a> So if we let's say doing an implementation migrating PowerBI to Fabric, sprint makes sense at this point but you still want a project manager. To your point Mike, if I'm working directly with the stakeholder, well there's a lot of things that come up.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=655s" target="_blank">10:55</a> And if I get a ticket on Monday saying hey you're gonna work on these requests that come in. Well, at that time, to your point, big part here, I don't have the requirements. I still need to do discovery and that process can be a few days or it can be longer because the stakeholder again hasn't set the prereqs.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=694s" target="_blank">11:34</a> A good sprint and a good agile methodology has all the requirements from the gathering, from the get-go. So, you know what you're building.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=420s" target="_blank">7:00</a> So you know what you're going to be focused on. That's the goal of the project manager. Let's also the point around the backlog or the grooming, right? There's someone who's sitting down and saying, "I'm going to work with the stakeholders of this report or whatnot and figure out what do you really need."

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=435s" target="_blank">7:15</a> Tell me in detail what you want to build and then the idea would be is before that work comes over to the BI team, you would have a clear understanding of how many pages, what's on those pages, what data needs to be per visual, and where does those visuals come from.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=451s" target="_blank">7:31</a> My opinion, my impression here is this doesn't usually happen. There's not that level of clarity when we get reporting requirements. So, it's just very interesting to try to apply the agile method. It makes sense, right? The idea is you're regularly pumping out good content for your business team often.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=470s" target="_blank">7:50</a> That's really the goal here. And I would totally agree with that statement. That's exactly what the BI team should be doing or the reporting team or individual should be doing. One comment you make here around the project manager, Tommy. I find this role to be very interesting.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=488s" target="_blank">8:08</a> On one hand, I like the idea of having someone manage and groom down all the work. On the other hand, I don't like it because I find that project managers who aren't in the BI space don't know how to ask the right questions and get the right answers.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=502s" target="_blank">8:22</a> So, I really do feel like that for me or how I like to run projects is I think the architect or the one who's the most knowledgeable needs to regularly participate in working with the business, talking about questions, figuring out what they're going to build.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=517s" target="_blank">8:37</a> That person who's really going to be your senior BI developer needs to be involved in those conversations. Where I think the program manager really comes into play here, especially in the Power BI world, is let's imagine you have a larger team and you're trying to build things through development, test, and production.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=536s" target="_blank">8:56</a> Let's also imagine you have multiple projects you're working on. Well, how do you prioritize which project or which bundle of work are you going to be doing first? To me, that's where project management really shines is they're able to then work with leadership, executive members, VPs, whatever, and set the direction.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=554s" target="_blank">9:14</a> Okay, leadership, I'm going to block and tackle for my team here who's doing work in my BI development. What should we work on first? What's the most important thing? Where are we seeing the most amount of pain? And inevitably, there will be pivots in direction mid-sprint like it always seems to happen.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=572s" target="_blank">9:32</a> And so, who makes the decisions and when do you pull off of something to put on something else. Sorry, Tommy. Go ahead.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=577s" target="_blank">9:37</a> No, no, no, no. You're getting me fired up here because honestly there's two paths here. I think there's agile methodology with request-based projects where there's a ticket system where it's a little more flexible and then longer project-based things in Power BI.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=594s" target="_blank">9:54</a> But I do want to share something about that project manager only because I had an amazing one. I want to give a shout out here. I'm not going to provide names, but I don't know if they need to know all the things about Power BI, but they better well, if they're on your team or you work with them, they got to trust you.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=612s" target="_blank">10:12</a> So, the project manager for me, sure, that when it worked well, understood what the business needed and trusted what BI was doing. So, before we had the project manager, it was a wild west. And whoever yelled the loudest got what they needed, and that's a very common thing.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=634s" target="_blank">10:34</a> The first time my mind was blown to say there's a different way, my project manager came up to me, he's like so what are you working on, and I'm like I got to finish this for the operations because they've been asking for so long. And he first said what's the business value?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=651s" target="_blank">10:51</a> I'm like it's really not much, it's just they've been clamoring me for it. He's like but don't work on it. And I said you could do that. And so he became a block for unnecessary projects, unnecessary work.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=667s" target="_blank">11:07</a> And that rather than me getting the blame or saying I don't think the value is there compared to the other things. Well, if I tell the stakeholder that, it's not going to be receptive, but when the project manager comes in, they can actually take that brunt.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=681s" target="_blank">11:21</a> And that becomes a huge aspect because when I am at the service of my stakeholders or my customers, again, that can be when I say customers, I usually treat anyone internal, my people requesting, it's no different. And if I say no to them because you haven't provided the value here, well, I guarantee you there's going to be a follow-up conversation whether they have it with you or your boss.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=703s" target="_blank">11:43</a> So, the project manager here becomes a huge part because they are the ones deciding what things have the most value. So, I think that's a really critical part of this actually working.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=714s" target="_blank">11:54</a> But Mike, I want to propose to you or I want to ask you because again, usually agile methodology is implemented when it comes to we're going to be working on something for three months. It's again an app or we're going to migrate this data, longer things that maybe stakeholders usually aren't involved in or if they are it's one giant project.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=737s" target="_blank">12:17</a> And I think that makes sense because we can break it down. But a lot of teams also work with various stakeholders for various requests — I want to build this report, update this report, we want to add these metrics, etc. And this is where I've seen agile methodology fail or become like a round peg and a square hole.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=761s" target="_blank">12:41</a> And let me just pause there to see, have you dealt with this before trying to implement the agile methodology in a request-based system?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=771s" target="_blank">12:51</a> Yeah. No, I leave this up to what the customer basically owns or manages. Typically customers will have some methodology around how they want to use things, whether it's straight up an agile or scrum board, or usually the pattern that most customers fall into particularly for BI is around kanban.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=790s" target="_blank">13:10</a> That seems to be like the kanban board, right? So it's not really a formal process where we're having regular sprints and getting content out regularly. It's more the idea of we need to be a bit more flexible with what is the most important priorities we're working on right now and plucking some of those items off.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=808s" target="_blank">13:28</a> Now, again, other teams I've worked on where we're actually doing sprints and trying to do regular releases on things, those teams tend to have some cadence of a release cycle, usually weekly, something where people are being able to stage, update changes, and dev.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=825s" target="_blank">13:45</a> And this is where I think the dev test prod workspace environments really make sense from a sprinting standpoint because then we can actually have work that is queued up in test and then we can let that work throughout the week and pile up and then we can get sign off on those.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=840s" target="_blank">14:00</a> And then we can get sign off on those work items and then those can get pushed into production once a week. So, do we have anything to be released? But this at the end of the day though, when I'm trying to work on this with companies, there's a large emphasis on this individual.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=857s" target="_blank">14:17</a> And I'm going to call them the release manager. I could probably use the word release manager and project manager simultaneously. It's the same role, I think, in a lot of ways, right? The release manager is working with leadership to figure out what projects should be worked on.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=870s" target="_blank">14:30</a> The release manager is figuring out how to define requirements and give them to the team so that the team knows what is most important to be working on at this moment. The release manager is also focusing on working with people or even doing it himself or herself.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=884s" target="_blank">14:44</a> Moving development items from dev to test to production. So you're saying scrum and agile. I'm saying there's usually like an adopted form of that that feels a lot more like kanban.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=897s" target="_blank">14:57</a> Work comes in the front end, you prioritize it. On the other side we have a prioritized list of things we should be building — changes to reports, things in the semantic models, new semantic models, refactoring of old semantic models. All that work gets put in the pile there.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=930s" target="_blank">15:10</a> And the release manager is the one that's really acting as that PM, program manager or that scrum leader that's going to help move things through the system. At the end of the day, to your point Tommy, it's all got to get from an idea into something in people's hands they can go use.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=951s" target="_blank">15:31</a> And that makes a lot more sense because in the sprint methodology, the agile methodology, again if everything's in two week sprints and you submit something on the first of the month and I go, hey, this is going to be in our second sprint. Well, guess what? That's not getting done for a month because I got to work on everything for two weeks.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=986s" target="_blank">15:46</a> Correct. Then I don't start on that for another two weeks. And then I start working on it — to a stakeholder who just has a simple update. And again, if it's not prioritized on my end, first off, unless you're guaranteed you finish everything in your two weeks, which again, we know it's just not the same with Power BI.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1006s" target="_blank">16:06</a> Single requests where I have to work with the stakeholder. Sure. That leads to a lot of dissatisfaction because now all of a sudden I have all these minor requests that I'm not doing for another month until it's completed.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1038s" target="_blank">16:18</a> What you've done is you've just turned yourself back into the thing that we were trying to leave, right? We were trying to leave this slow data warehouse turn of large projects all the time that's constantly — any change you want to the data warehouse was like a two or three week exercise to get all the way through from dev to prod.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1079s" target="_blank">16:39</a> And so the whole promise with Power BI is faster development, quicker things, build what you want to build. So what I would argue here in some ways is what is that central team doing, what is the ticketing for the central team look like, because you probably need to rethink some of that.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1118s" target="_blank">16:58</a> What I mean by rethinking some of that central team elements — that central team is trying to turn out really good larger projects. The idea of these report-based tickets, right, there are companies that do centralize all that through a single team. But again, we run ourselves to your point Tommy, right?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1140s" target="_blank">17:20</a> If we can't get enough things done in a sprint we start slowing down and we add rigor, and which is all good. There's nothing wrong with slowing down and being more methodical with the process. However, because of that cadence that slows things down, you have the opportunity to dissatisfy business people.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1177s" target="_blank">17:37</a> So in this regard, I like to think about okay, what is the bare minimum or what is the element we can provide back to the business that helps them move quicker, right? Maybe I should build one or two reports that are centrally managed to give them an example of how this model might work.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1213s" target="_blank">17:53</a> But in reality I should actually be focusing on building the better model and bringing in the right data and giving that to the business. So to me, building a data model correctly with all the right tables and the data engineering that goes into it to make it usable for users, that is more of a sprinting type activity.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1235s" target="_blank">18:15</a> As opposed to maybe always building all the reports for the entire business side. And I would probably really focus on — if I'm leadership, right? If I'm executive leadership, I'm looking at my team and I'm saying I'm focusing on these people who are building models, these people are building reports.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1268s" target="_blank">18:28</a> I'm going to focus a lot of my time on the team that's building models. Try to build models that are reusable in mass for my consumption teams. And then working with the business teams and saying we're going to give you data models, this is how you connect to them, and this is how you build your own reports on top of them.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1311s" target="_blank">18:51</a> We're going to supply a handful of pre-built reports. You can start there but everything else is on your own. And so I think that accelerates a lot more of the need on the business side. And I really subscribe to this idea of trust between teams.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1350s" target="_blank">19:10</a> The report creators in the business have to trust that the semantic model is right. The semantic model people are delegating their responsibility to the business and saying you're going to build reports that are not lying about the data and the metrics and the analytics.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1387s" target="_blank">19:27</a> So someone needs to take ownership of those different elements. In an organization you can't have everything bottleneck by one single area. There's just too much data now and I think it's getting to be the point where there's too much going on that you have to distribute ownership across multiple teams now. That's what I'm basically trying to say.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1430s" target="_blank">19:50</a> Yeah. So, I like it, but you're venturing into the managed self-service realm. Well, of course, 100% I am. Yeah. I always will push organizations to that.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1443s" target="_blank">20:03</a> Yes. I'm exactly doing that. Yes. I'll just leave it there. And I think that's really the ideal approach, but I'm not going to say it's Willy Wonka dreaming, but in order to get there, that's going to take a transition with the organization because then you need to scale up every department where they need to have their representative.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1487s" target="_blank">20:27</a> So in so many words, it's a lot easier said than done and a lot of people in organizations on the BI side don't have that luxury, right? Where that has to come from the top. That's a top-down mandate.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1499s" target="_blank">20:39</a> That's why I call it consistent. That's why I called it as a leadership thing. Yeah. 100%. So, and I would agree and that would be one of the priorities. But again, I think there's a lot of people here, or maybe I'm just speaking to my 28-year-old self here who is on a centralized BI team.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1517s" target="_blank">20:57</a> And if you're on a centralized team, well, there would be dedicated time to do that.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1261s" target="_blank">21:01</a> Be dedicated time to do that. Again, if you have the okay and the go-ahead by the business, by the leadership, if that's not the case, Mike, does agile methodology work with the centralized BI team when I have many different stakeholders? And that BI team, my friend, runs the gamut of types of requests. It's model development, it's update this table in this report, it's build a new report.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1288s" target="_blank">21:28</a> So you have all these different things. And again, each one of those have stakeholders. Each one of those have people requesting that need it. So if that's the case where this is where we're at now, we want to get to managed self-service. Where do you see project management being really applied here? Can agile methodology actually work in that environment?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1310s" target="_blank">21:50</a> Well, I would argue, if you're not going to use some sort of agile methodology, what are you going to use instead? What's the replacement? What are you going to do? At the end of the day, regardless whether it's agile or not or something else, I don't know, make up a term. I don't care what it is, honestly.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1325s" target="_blank">22:05</a> You need a list of things you're going to work on. Regardless, it's got to be there somewhere. Someone's got to groom that down. Someone's got to prioritize work. The team will never be large enough unless you spend a proper amount of money to make the team large enough to do everyone's need or business requirement.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1344s" target="_blank">22:24</a> And so the whole story with Power BI is delegation of reporting, right? The whole "5 seconds to sign up, 5 minutes to wow" — that's the mantra of what Power BI is expected to do. So in lieu of that, you say it's hard to get all the business people working in Power BI. Yeah, I agree, but that is a hurdle the business must take on.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1372s" target="_blank">22:52</a> And if you decide Power BI is your reporting tool, why not maximize your investment? Why not run everyone through at least basic report building in the service? Here's models you can go access. Go here, click on these models, make tables, how to export data.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1387s" target="_blank">23:07</a> None of this stuff is rocket science. None of this is hard for people to learn. I think this is very easy. If you were able to learn Excel, you're able to learn this stuff in Power BI. It's not something that's so far away that you couldn't learn it.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1399s" target="_blank">23:19</a> So I think really my opinion here is leadership needs to take a stance on what do they want to do. What is the strategy for their company? And either they're going to make the decision to train the broader part of the organization to build their own reports on top of certified data models.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1414s" target="_blank">23:34</a> This is the whole reason why we have certified stuff. That's the approach. That's what Microsoft teaches. That's what Microsoft is built to. It's the expectation from their side that everyone's creating reports. That's the point.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1429s" target="_blank">23:49</a> So I think in my world I'm looking at myself going there's not a replacement for scrum or something else you're going to do. You're going to do some form of it regardless. The one thing I will note is there is a balance between creating net new content or creating content that people have requested versus support on existing content.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1449s" target="_blank">24:09</a> Because throughout the middle of the sprint there's always going to be a certain amount of churn or time or effort where people are just going to need fixes and updates and changes. Something's not working, it's not loading. You're going to need to stop what you're doing because I can't wait for two weeks while my main data set is broken.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1474s" target="_blank">24:34</a> To finish my other tickets to come back and just figure out why is my main semantic model not loading. If the sales team is using that to do operational daily level decision-making, I can't not have that running. So there has to be a portion of your time where the sprint or agile process needs to be able to absorb tickets in a fast way, apply some support because things will break and you're going to need to address them and fix them.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1492s" target="_blank">24:52</a> So again, back to your point, Tommy, is there a world where scrum and agile does not exist? Probably, but what do you replace it with? What's the alternative that you're going to put in place for those other tools?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1505s" target="_blank">25:05</a> And so whether it's Asana, Planner, Microsoft Project, Monday — all these different apps come out with just different tasking things of applying tasks, putting people to them, and seeing and tracking the progress of those tasks. And that's really what you have to do anyways. Regardless, any project, any team should be doing this regardless.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1528s" target="_blank">25:28</a> So I want to mention — I'm going to get into Fabric and I really see some synergy there. But I just want to touch on that point real quick because again, a lot of people that listen, a lot of people we talk to are still in that Power BI world.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1541s" target="_blank">25:41</a> One of the biggest things that transformed when we were a centralized BI team was the ticket system we used, but more importantly really how we categorize and organize that. So to your point, I have updates, I want to update a visual, something's broken, we have a model.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1560s" target="_blank">26:00</a> So rather than all these tickets just funneling in, we set up the categories. We used Jira and we can create our own help desk. Organized everything. So basically, hey, is this broken? Is it an update? Is it something new? And based on those requests, we had automation because if it was something broken, we needed to know.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1579s" target="_blank">26:19</a> We needed to go through that, and our team had daily communication on okay, what tickets are urgent, which ones are providing value based on our OKRs and the goals of the company. And that's how we prioritize. So that organization was the catalyst for what we worked on.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1596s" target="_blank">26:36</a> And that right there is exactly what I'm talking about. There's this constant communication around what work is coming in the door. We need to have a way of capturing all the work, whether it's a ticketing system, whether it's someone coming through one person and they're writing it down. Regardless, there's always some sort of capture of the requirements or capture of the needs.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1617s" target="_blank">26:57</a> Yeah. If anyone is still doing a request from an email, stop. That is the worst way. I remember I would start working on things because I would go get coffee in the lounge. So I was like, "Oh, hey, that report. Yeah, sure. I can work on that." And that's how requests happen at one point. You got to work in a ticket system.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1639s" target="_blank">27:19</a> So you got to work with some system like that. But I think there's enough free tools now, at least ones that Microsoft provides you, that you could probably get something that would work with your system.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1650s" target="_blank">27:30</a> But again, exactly. I'll go back to: great, you have a ticketing system. You're bringing in requests and you're asking people to go here. This is again, I'm going to lean back on the center of excellence. This is going to be an area where you're going to need to develop that.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1662s" target="_blank">27:42</a> So you don't just throw out "hey, there's a ticketing system, go fill out a ticket." Someone's going to be like, "How do I fill it out? Where do I go? What's the link for this?" So there better be a center of excellence set up or a publicly available page that describes here's our process, here's how we get things, here's how we bring things in.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1680s" target="_blank">28:00</a> To your point, Tommy, we're ticketing emergency items, things that are broken, things that are not refreshing, right? Those items came through as a fast track into the team. And when people categorize things at that, someone took notice and said, "Oh, this is important. Let's in the morning talk and sit down and say who's working on what, what are the most emergency items that we got to deal with this morning."

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1700s" target="_blank">28:20</a> We got to work on those first and then we can get back to the regular ticketed items and build you out your other work. So that whole situation, the process needs to be documented, developed, and put out on the center of excellence so people understand what's going on.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1715s" target="_blank">28:35</a> I'd also argue I found really good value in communicating back to people where their ticket sits in the queue. Right? So in the same way you're bringing tickets in, put those tickets into a Power BI report. Put the report, publish it back to the SharePoint page or wherever you're doing it, into Jira page, whatever that means.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1730s" target="_blank">28:50</a> And then from there you can then easily illuminate, okay here's what we're working on. These are the high priority tickets that we're currently active right now. We're working on those.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1741s" target="_blank">29:01</a> And then again this is a lot of process part, but when is it going to be done? Is it going to be done this week? Do we have an ETA on this one? Has someone actually looked at it yet? There's a lot of, especially in Jira, Jira has a lot of really automation stuff. You can move tickets across different types.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1757s" target="_blank">29:17</a> Hey, it's in the backlog. It's being reviewed. It's in process. It's being deployed and it can automatically move through the statuses for you. DevOps doesn't really seem to have as smooth of a transition system as Jira does, but at the end of the day it's the right approach. Huge. All right.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1779s" target="_blank">29:39</a> I know we got a little bit of time here, Tommy, but what happens? How do you deal with the tickets that just aren't important and never get worked on? This is something just nagging me in systems and in processes, but people would ask something like, "I need this brand new report. It's for this, but it's a very small use case, very edge case stuff."

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1802s" target="_blank">30:02</a> And you're like, leadership or the PM or whoever's driving the BI department doesn't prioritize that work. It just gets kicked off further and further and further. What do you see happening there and how do you handle that stuff? What do you think?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1815s" target="_blank">30:15</a> This one's really hard, Mike, because you're dealing with a few aspects here. Because every ticket has someone who either thinks they need it or actually need it regardless of the type of request. And a lot of times it just leads to disgruntled people who will find other avenues to do so. So they need to be recognized in some way.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1836s" target="_blank">30:36</a> And a lot of these things too aren't just a five minute quick thing, right? It's something tedious or something, to your point, it's irrelevant, but it's going to take time still to do regardless. Sure. So, this is a thing I'm bringing usually higher up to if I have a project manager or I'm bringing up to my boss to go, look, this request, they want to basically whatever the situation is, they want to see everything by day in an Excel file that's automated to them.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1862s" target="_blank">31:02</a> When it's something that they can easily go to the Power BI report, I'll say I can speak to them, but usually I want someone a little higher up. If I'm a data analyst, if I'm dealing with stakeholders, to really go to them and say, look, this is not providing any additional value. This is making it easier for your team. Sure.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1882s" target="_blank">31:22</a> But it also starts honestly when we put together our request system. We initially had it open for everyone and it was just request or name description. One of the biggest things we did is you had to fill in your department. You had to fill in what goal that was associated with for whatever your company goals were and what value that was going to bring.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1904s" target="_blank">31:44</a> And if you didn't fill those in, people knew after a while that they were going to get backlogged and it just was not going to provide the value. So the biggest item there is if you really do see and your team sees that this is just going to make a quick shortcut for them that they can still accomplish, it's a hard talk that you need to have with those stakeholders.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1927s" target="_blank">32:07</a> Now, I would not do this without working with your boss or your team before you get to that point. Because again, people are going to make noise. But if you have the backing of your team, this is just honestly communication with, hey, I know you want to see everything by hour and split up into 18 tables on the report. Sounds really cool, but let me show you a personal bookmark that can accomplish the same thing.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1954s" target="_blank">32:34</a> Or how you can quickly give them an alternative if it's something that can easily be done that they can do. And if it's not that case, say listen, right now that's not associated with the team's goals. You can please speak over here. But otherwise, it's just not worth it. Really, it's not worth the value of our time.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1974s" target="_blank">32:54</a> Because here's the thing. Yes, people are yelling for things, but at the end of the day, I have to go to my boss at the end of the year and say what I worked on. And if I just listened and did all the things that people yelled the loudest with, it's not going to show a lot of value for me for being there.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=1990s" target="_blank">33:10</a> So we have to have those conversations too where if they're tedious and they're really not providing the value, there has to be some form of push back. So that is probably where the PM I think does a lot. So I think this is a good idea of what the PM should be doing, right?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2008s" target="_blank">33:28</a> So to your point, Tommy, that PM is pushing back on business. You're asking for something. We don't have the bandwidth to build this right now. What you should be looking at is XYZ reports or other things elsewhere in the system, which is great. But that PM is important because now they're blocking and tackling away from the team that is doing the work.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2030s" target="_blank">33:50</a> And so that's where that PMing part comes into, is really saying do these requests align with the values and goals of my executive leadership that was expecting this team to do various tasks. And so I think that's really important right there, is just that concept of that there's a delegation of that management ownership and almost saying no. There's going to have to be some nos to things for things that are just not going to get done or not prioritized in this area.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2060s" target="_blank">34:20</a> And what I think will happen, and the reason I asked this question, is what inevitably will happen is those items just get built a different way. In those situations where you're not able to meet the demand or the need, or that request is not reasonable to really add value in a big way, we have to as a BI team or even as leadership think about, well how can we continue to add value to those individuals.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2087s" target="_blank">34:47</a> That person still feels like they need this thing to be more efficient in their job. We should encourage that. We should help them get to that level. So what does that look like? Is there a different data contract we should be doing? Should we actually be giving this person more access?

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2100s" target="_blank">35:00</a> Would we actually be giving this person more access to deeper things inside Power BI? This is maybe a great use case for saying maybe we should give this person access to semantic model. That might be something that they want to be using to help them build out what they're trying to accomplish with whatever reporting is.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2120s" target="_blank">35:20</a> So it's just a very hard problem to solve. I think the two areas that I've seen the most weakness in companies is dealing with issues quickly. How do you handle support items and how that takes away the work and the effort from central BI to build regular content or net new things or fix new things and move the company forward.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2142s" target="_blank">35:42</a> Someone's got to be able to have a clear vision of direction for the company and say no to some things and say yes to some things. And that has to get support all the way up through leadership.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2152s" target="_blank">35:52</a> A thousand percent, a thousand percent. And Mike, I know we're getting New York time and I think one thing I just want to add, my closing thought too, is maybe even a little bit of a hot take. But I believe as we go to Fabric, I think we still haven't seen a lot of best practices or case studies yet on project methodology in Fabric.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2180s" target="_blank">36:20</a> Microsoft I don't think has a lot of documentation there on how you set up the team, the system, the structure. There are some theoretical ways but it's still so new we don't have concrete examples compared to how you have a centralized team in Power BI, you have managed self-service in Power BI. We're still I think in the early stages.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2202s" target="_blank">36:42</a> So leading up to that, I think in Fabric the agile method is going to make a lot more sense. Because the things that we're working on are not going to be ticket request based items as much and it's really venturing into a different way where it's almost closer to application development than what we're doing now.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2220s" target="_blank">37:00</a> So I'm looking forward to that. But I'll end there on just talking about as we venture into Fabric. There's a lot of opportunity here for taking project management methodologies and skills and it's going to be I think really applied.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2235s" target="_blank">37:15</a> Yeah, I think in any way regardless of what you're working on, whether it's software development, BI development, data warehousing, data engineering, all these things that we're talking about, I think Fabric adds a lot more. There's a lot more lead time to building things in Fabric than there was in Power BI.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2248s" target="_blank">37:28</a> Power BI you can connect to an Excel file quickly, get some data together, smoosh a couple data sources, and you could stub together something fairly quickly and get some value out of it immediately, which is I think the design of Power BI.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2260s" target="_blank">37:40</a> I think to your point, Tommy, Fabric feels to me a little bit more of a longer lead time. I'm building notebooks. I'm building pipelines. It's a bit more intentional design upfront to get the output that you need for lakehouses and semantic models later on.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2276s" target="_blank">37:56</a> So the cycle is longer which I think definitely bodes well for data engineering teams who've traditionally done things in Azure or other places. Those teams already have likely a ticketing system. There's already some formalized process around how to get things through that content, how to get things up and refreshing.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2294s" target="_blank">38:14</a> So I really do think that the larger data engineering space that you're bringing now to Power BI with Fabric is already using agile or sprint or scrum in some other fashion. So I think that's a world that we're going to try and bring more into Power BI as we move forward.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2316s" target="_blank">38:36</a> And I would only argue with you just slightly in that I feel like the Fabric adoption roadmap does a really good job of outlining who people are, what are their roles, how to get stuff done, how to build things in a secure and governed way.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2331s" target="_blank">38:51</a> And I really do want to encourage companies to, if you evaluate, go to the Fabric adoption roadmap, evaluate where you are as a company and figure out if you are a centrally managed company or if you are a managed self-service or figure out if you're business-led.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2358s" target="_blank">39:18</a> Those three options depend on your threshold as a business, how comfortable you are on one end or the other end of that spectrum. That really tells you what you should be building and how you should be building things. That's your operation and you may not want to stay in centrally managed systems. You may want to move to managed self-service.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2379s" target="_blank">39:39</a> What does that look like? So the adoption roadmap I think gives you really good points and talking points around how to start thinking that direction. And I think Microsoft intentionally is pushing you to managed self-service. They want everyone building reports. They want everyone to have a copy of Desktop.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2399s" target="_blank">39:59</a> So they're intentionally trying to make this as easy as possible to go towards that direction so that everyone can get down to the reports and the models they need to build what they want effectively. So Fabric is just adding more of this.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2411s" target="_blank">40:11</a> I'm seeing now the ability to write SQL and notebooks and other things here too that also can hang off of lakehouses. So we're getting more exposure to data deeper in the system with Fabric.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2423s" target="_blank">40:23</a> All right, good topic. I don't think we really, I think we just literally talked in circles about this whole thing. So some considerations there. I don't know if we actually went anywhere. We'll probably have to add to the backlog and we'll have to discuss and review later for future episodes.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2438s" target="_blank">40:38</a> That being said, thank you all so much for listening. We really appreciate your ears for this short episode around agile and BI and the whole session. Yeah, no AI yet. Maybe the AI could just figure out all of our agile process for us. That would be helpful.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2456s" target="_blank">40:56</a> When does Jira come out with the AI that just automatically prioritizes things for us? That being said, we appreciate your time here. We thank you so much for listening. If you like this episode, if you like talking about this stuff or hearing topics around this, please share with somebody else.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2469s" target="_blank">41:09</a> Tommy, where else can you find the podcast? You can find on Apple, Spotify, or wherever to get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton.

<a href="https://www.youtube.com/watch?v=BdBpk3Arxww&t=2478s" target="_blank">41:18</a> Do you have a friend or do you have a topic, an idea, or question that you want us to talk about? Well, head over to PowerBI.tips podcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all Power BI Tips social media channels. Thank you all so much, and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
