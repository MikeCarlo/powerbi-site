---
title: "UI For Easy Ingestion Leads to Issues – Ep. 448"
date: "2025-08-08"
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
  - "Copy Job"
  - "Data Ingestion"
  - "CI/CD"
  - "Report Design"
excerpt: "Mike and Tommy discuss how simplified data ingestion UIs in Microsoft Fabric can lead to unexpected issues, plus Mike previews his upcoming conference talks on report visualization and CI/CD."
featuredImage: "./assets/featured.png"
---

Easy-to-use data ingestion UIs are great—until they're not. Mike and Tommy explore how Copy Job's simplified experience can lead to unexpected issues, and discuss the balance between ease of use and proper data engineering practices.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/gyLLmYXGcfQ" 
  title="UI For Easy Ingestion Leads to Issues – Ep. 448"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Main Discussion: Copy Job and Data Ingestion

### Copy Job Updates

Microsoft announced several improvements to Copy Job in Fabric:
- **Incremental Copy is now GA** — Only transfers new or changed data, saving time and resources
- **Lakehouse Upserts** — Insert, update, and delete operations for lakehouse tables
- **New Connectors** — Expanding the sources you can pull from

### The UI Trap

The core discussion centers on a common pattern:
- Simplified UIs make it easy to set up data ingestion quickly
- But "easy" doesn't always mean "correct"
- Teams can end up with ingestion patterns that work initially but cause problems at scale
- Understanding what's happening under the hood matters

### Conference Preview

Mike previews two talks he's giving at the DevOps conference in St. Louis:

**Report Visualization Workshop:**
- Building backgrounds with tools you already own (Paint, PowerPoint, Figma)
- Focus on templates over one-off reports
- Building flexible designs that teams can reuse

**CI/CD for Power BI:**
- Different approaches based on license tier (Pro vs. PPU vs. Capacity)
- Git integration maturity levels
- Matching CI/CD complexity to organizational readiness

### Report Design Philosophy

- Build templates, not individual reports
- Invest time in reusable designs that scale across the organization
- Balance visual polish against maintenance burden
- 180 objects on a single page is too many

## Resources

- [Simplifying Data Ingestion with Copy Job — Fabric Blog](https://blog.fabric.microsoft.com/en-US/blog/simplifying-data-ingestion-with-copy-job-incremental-copy-ga-lakehouse-upserts-and-new-connectors/?WT.mc_id=DP-MVP-5002621)

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=0s" target="_blank">0:00</a> [Music] Get out. Get out. [Music] Good morning and welcome back to the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=36s" target="_blank">0:36</a> Explicit Measures podcast with Tommy and Mike. Good morning, Tommy.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=40s" target="_blank">0:40</a> 4:48, my friend. That is crazy.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=43s" target="_blank">0:43</a> We're getting stinking close to 4:50 at this point in time. It's been a lot of fun. fun.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=48s" target="_blank">0:48</a> Fun. Yeah. How you doing, my friend?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=50s" target="_blank">0:50</a> Doing well. This week's been a busy week. It seems like a lot of things are going on. just to be very clear on this episode, this episode is a recorded episode.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=59s" target="_blank">0:59</a> Episode. If you are in person, I will be at the DevOp conference in St. Louis, Missouri. So I'll be traveling there. Well, I'll be there now actually at this time. So definitely doing a conference going to be talking about two main conversations at the conference. We'll be doing one around visualization. So just I'm not going to talk about like gestalt principles. I'm not going to talk about other things. I'm going to actually sit down and build stuff. The whole the whole session is building background background images and making templates and reports live inside the session. It's going to just

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=91s" target="_blank">1:31</a> Be a bunch of building. We're going to start with some building things with tools you already own. For example, like how would you build a background with Paint? How would you build a background with PowerPoint? Those are things you can build backgrounds with currently. and then we're going to go up to like the let's call it the pro tools, right? Then we'll get into Figma and we'll build some stuff with Figma and show you some techniques and tricks that I use there and then from the output of this we'll just build a bunch of visuals. The second talk I'm going to be talking about is CI/CD for your organization. So a lot this is a hot topic right now.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=122s" target="_blank">2:02</a> Everyone wants to know how to build continuous integration, continuous deployment. What does this look like for your organization? I'm trying to do examples around there's different levels of this pro if you have a pro license

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=135s" target="_blank">2:15</a> Versus if you have premium per user and something that's capacity driven what do you what happens when you use a pipeline do you need to use a pipeline every single time so we'll talk a little bit more about that as well go through examples in different places I think really ultimately CI/CD is what how mature is your organization how comfortable are you working in git and gitl like things and then you can conform a process that fits that that can form a process that fits to like whatever your comfort is based on the skills of your organization.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=166s" target="_blank">2:46</a> Mike, I got thoughts on I got a few thoughts on what you're going to be speaking about. One, let's talk about the visual side. One,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=173s" target="_blank">2:53</a> Yeah,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=173s" target="_blank">2:53</a> Yeah, if I signed up for that, I think you'd have to charge extra because if I if you're going to try to get me to do paint effectively,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=180s" target="_blank">3:00</a> I've gotten a lot better in my design, but this the wrist drawing

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=184s" target="_blank">3:04</a> No still tough. But two, would you consider that like an old school training class now? Because it's still relevant, but as you were talking about them like, oh, legacy, like you're talking about building backgrounds and everything. Maybe it's just because we've been doing those trainings for so long already. They're still relevant, but it almost feels like it's an old school course.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=207s" target="_blank">3:27</a> Yes and no. Oh, I think I think a lot of people again my feeling is a lot of people know how to build reports.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=212s" target="_blank">3:32</a> Mhm.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=213s" target="_blank">3:33</a> Mhm. But there's a less of an audience that knows how to build goodlooking reports. Yeah. Yeah.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=217s" target="_blank">3:37</a> Yeah. Right. So there's this what what are you going to do? And for me it's a matter of like where do you where do you do the work? Right. So there's a little bit of like nuances around okay how do you build the theme theme file right? How do you stylize the visuals correctly? And , it's this idea of well, does the background image become extremely plain and you drop a bunch of visuals on it or do you make the background a little bit more elaborate and put some text on it that you can't have in the report, right?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=246s" target="_blank">4:06</a> Or like so what are the what are the to me it's like what are the break points like what are the different options you could get building one way or another? And so I built a lot of backgrounds and I've built probably hundreds of them now at this point. , I'm trying to consolidate that experience down and say, "Look, here's what I have found." Like, here's things that you want to build a good-looking report that is flexible enough for people to use it as a template. Cuz sometimes people build a good-looking report template that's so narrow that no one can use it. Like, you have to have three boxes across the top for KPIs. Well, I don't know if I'm

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=278s" target="_blank">4:38</a> Going to have three KPI boxes across the top. Like, how how do you build it so it's flexible? Like, you can get as many as you want. So, it's those like very nuanced things that I feel like people aren't really talking about and that's what I'm going to try and spend a little time on.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=293s" target="_blank">4:53</a> Are you going to be talking because you mentioned something called breakpoints and I'm intrigued. Are you going to be talking about the course when to stop? Because I've seen greatl looking reports that had a single page 180 objects on it and my immediate thought is that's not worth it. And I think what we're always trying to do is how well can I make this look with the least amount of effort so to speak, right? Because you can build something looking great,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=317s" target="_blank">5:17</a> But if no one cares about the extra design, well then how how worth it does that actually make your time?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=325s" target="_blank">5:25</a> You make it. It's really interesting Tommy that you bring that point up because that's where most of this talk is coming from at some level. Right. So,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=333s" target="_blank">5:33</a> Right,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=333s" target="_blank">5:33</a> Right, I really do focus on the idea of if you're going to spend a day building a report, don't build a single report. Build the template of the report. Right? So if I'm an organization who wants some consistency across the reports, it really is how do you go to market with these templates and build them in a way that everyone could use them so that way when you build stuff everything looks like it and has a similar feel has a similar style and vibe and like things look consistent coming out of like a singular team the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=365s" target="_blank">6:05</a> Entire company from business intelligence team like I don't know what your what your organization structure looks like But it makes a lot more sense to let someone or designer or work with someone to say this is our style of our company or organization and build only one of those. To your point, Tommy, it doesn't make sense for us to build a single page with 180 things on it that will render slowly and isn't the best and it's only maintainable by that one person. We want to build things that are

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=396s" target="_blank">6:36</a> Highly maintainable by across a lot of people. So all those extra elements you put on the page that are like text or images or backgrounds like how do you decide which of those pieces are going to live on the report side where you're in desktop or live on the the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=415s" target="_blank">6:55</a> Background or the page side or if I build you a template that only has two pages that might not be enough for you to actually build the report that you want to build

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=425s" target="_blank">7:05</a> Right

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=426s" target="_blank">7:06</a> Right like 30 pages or 10 pages. So, how quickly can we get those popped out? And, , across all 30 pages, do I want to be clicking? And this is where I feel like I spend a lot of time. I spent a lot of time just clicking on visuals and like, okay, click on this visual. What does it look like? Click on this visual. Change the styling. Okay, now I've styled this bar chart. I've got to change the style of all the other charts to match.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=451s" target="_blank">7:31</a> To match. Yeah.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=452s" target="_blank">7:32</a> How do you get all that to be consistent across? Like if I'm centering the title of visuals, I shouldn't have to go through every visual and center the title. That's so wasteful. I should go to the theme file and center all titles at one time. Like so there's just things like that that I don't think people are realizing. And , desktop is when you're doing the stylizing of visuals, it's just a ton of clicks. And so I'm just trying to remove that or reduce that down to a smaller amount.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=476s" target="_blank">7:56</a> This is a huge point. I I know my complexity of how I think has forced me to think simply. to the point now we had a we report I was working for a client like hey can you take this template build adjust it open it up and had the 180 I'm like no starting over starting over not not even worth worth

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=495s" target="_blank">8:15</a> Worth not even not even worth my time to adjust that existing report because there's too much stuff on the page

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=499s" target="_blank">8:19</a> Right

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=500s" target="_blank">8:20</a> Right yeah it's it's also a fine line balance of like what style do people like as well. I've been showing some people some internal reporting that we have for our customers. And so my reporting tend to again in general tend to go on the air on the simpler side. Most of my reporting is like a gray page

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=517s" target="_blank">8:37</a> With visuals with white backgrounds on them. simple spacing things equally up. There's a lot of data.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=523s" target="_blank">8:43</a> Yeah. Tell me when I focus

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=525s" target="_blank">8:45</a> I focus a lot on like there's different roles, right? There's I'm the analyst. I'm the one who's going to be analyzing the data. So, I'm going to be very careful or comfortable with lots of lines of code, like lots of visuals, lots of and maybe u I've been building out a lot of reports that scroll. So, the way

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=543s" target="_blank">9:03</a> The way really what? No, you're not.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=545s" target="_blank">9:05</a> No, you're not.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=546s" target="_blank">9:06</a> Totally.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=547s" target="_blank">9:07</a> Why? Oh, no. That's one that's one of the cardinal sins.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=551s" target="_blank">9:11</a> I don't I don't think it is. If you're doing an analyst level report and you're starting with highlevel detail summary stuff at the top of the page and then you want to go deeper and deeper and so sometimes pages don't fit all the things you need. So it's it's not a one-pager per se but it's an analyst heavy report.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=568s" target="_blank">9:28</a> I can design the width as large as I want. it fits on the page and then I leave a little again this is a design judgment call I guess right

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=578s" target="_blank">9:38</a> Narrow down

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=579s" target="_blank">9:39</a> There's a little right hand side that and the whole page is like gradient right so this is where some of the backgrounds inform I think some of how you you build the report right so there's a gradient across the entire page of the report you can you can see that with your eyes and like there's it's darker and there's a scroll bar so like there's like a little bit of a mental picture here that like maybe I should go further down the page page. , but then as you scroll further on the page, you can see different things. There's there's some very unique, I think, elements or visual elements. You can start designing and stylizing so people can start interacting with your

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=610s" target="_blank">10:10</a> Reports differently than you're used to. Anyways, just some fun things.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=614s" target="_blank">10:14</a> Listen, I'm already putting that in the parking lot. Should we build scrolling reports? Because I would love to hear the arguments there because my first report I ever built had three sections on a single page. And I loved it. I loved I loved that report. My first report, I still remember what it looks like. no one else did because of how much we had to scroll. So that was the first time and that was this. So I'm intrigued to hear or actually I want to see what you do to make a single page scrollable report effective.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=643s" target="_blank">10:43</a> And again it's it's I think a lot of this is personal preference, right? There's my my report is not a large audience. It's just me. I'm looking at it and I don't want to jump between pages. I want the context of this page to be on one page. So it's it's it's more of like what I find very functional. Well, it's a very functional report for me. Other people looking at it would be like, "There's too much going on here." Well, that's okay because you didn't build it, right? I built it for me. So, this is my my report. So, it works well for what I'm doing.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=668s" target="_blank">11:08</a> I'm doing. Actually, I may adjust some of my own reports because I'm like, "Wait, why can't I scroll? It's mine. I'm the only one looking at it,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=674s" target="_blank">11:14</a> Right? The same design principles." That's actually not a bad idea.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=677s" target="_blank">11:17</a> What do there's things there that I think think

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=679s" target="_blank">11:19</a> Think the podcast? Yeah,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=680s" target="_blank">11:20</a> Exactly. Just keep keep pushing on the ideas. All right. , that's enough of a opener there, I guess. Let's jump into our main topic today. Our main topic today is about the easier it is is the worse it becomes, right? So it's is it is it always easier or are we actually adding more challenges by adding this easy everything experience? So let's give let me give a little context here. So in PowerBI, when PowerBI came out, a lot of this was making visualization building or report

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=712s" target="_blank">11:52</a> Building much more accessible to the business, right? Here's here's PowerBI desktop. There's this free desktop application and with that desktop application, it's free. Anyone can get it. Anyone can build a data model. Anyone can build a report. Anyone can publish something back to the service. So and the the initial days of PowerBI it was all about making reports and data modeling accessible to everyone.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=740s" target="_blank">12:20</a> Mhm.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=740s" target="_blank">12:20</a> Mhm. So here we are many many years later 10 years later and we're now looking at fabric and we're doing the same thing. It feels like the same pattern is happening again but this time it's not just with report building. It's with data engineering and pipelines and copy data and data storage and SQL servers and now Cosmos DB and custo like all these other tools are now being brought to our disposal and there's a lot of experiences are trying to be built that are going to try to make the UI extremely easy to use. But whenever and

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=772s" target="_blank">12:52</a> And this Tommy when you take something complex and try to distill it down to something easy, you lose something along that route.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=783s" target="_blank">13:03</a> Mhm.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=784s" target="_blank">13:04</a> Mhm. There there's you lose a little bit of technical. The prodeveloper is getting pushed out every time a little bit when you do those experiences. Now maybe the prodeveloper would like to use these easier experiences. They they don't mind it, right? Maybe it's it saves them a little bit. But I feel like sometimes when I when I look at these experiences, and this is maybe my impression, when you get to the prodeveloper and they are trying to use these simpler experiences, they're increasing their number of clicks and they're losing the ability for them to just to type out or copy paste or edit what they

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=816s" target="_blank">13:36</a> Want in code to build what they need. And so I feel like sometimes you get the prode prodeveloper a little bit frustrated by removing their core tooling, right? It's it's in some of these experiences we're talking about it's it's built on top of really technical pieces,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=838s" target="_blank">13:58</a> Right?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=839s" target="_blank">13:59</a> Right? But the UI and the way that the UI is built, we're not ever we're not always giving access to the technical side. We're sometimes hiding the technical side and only giving you the simple side of things. Like does that make sense what I'm describing there?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=850s" target="_blank">14:10</a> Oh, you're hitting close to home, my friend. And I think let's take a step back too because I think for both of us when we started with PowerBI, I know we had a different stories getting there, but we have to understand where we are with fabric and the tooling that we have available that these are not things Microsoft just developed for fabric. They have been around for a very long time. time.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=872s" target="_blank">14:32</a> Time. That's a very true point. Yes.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=873s" target="_blank">14:33</a> Yeah. And like when you think of the data factory which is the data pipelines when you think of not just data flows but Jupyter notebooks right that's not something Microsoft thought of two years ago these are all built on very heavy devbased products and all of these if you actually went into them in their original tooling Mike the first time I ever went into data factory after working with PowerBI said I'm an engineer years ago the amount of settings configurations based on the source let me put it this way, there's a lot of my mouth open and

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=904s" target="_blank">15:04</a> Just staring at the screen because there's a lot of things that go into the different sources and these products and you have to know it. You have to know that as the developer, you have to know that as from the source both from like you talk about different we talk about delta tables all the time, right? In fabric. Well, there's a lot more that goes into a spark table or delta table. Is it mappable? does it actually have a schema around this? And these are things that usually in the original products you had to configure yourself

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=935s" target="_blank">15:35</a> Or there was a setting for it. So these are all these different tools real time analytics. Each of the ones that are in fabric have these again background in history of configuration and of careers. The the thing I like to say is fabric's taking six careers and smashing them to one. However, Microsoft has understood that you can't take six careers and put them into one and put all these configurations each product. So, one of the blogs that came out I believe

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=967s" target="_blank">16:07</a> Just a few weeks ago or on July 1 talks about the easier UI and this has been a big theme of Microsoft around well we have an easier user interface for you to do a copy job. we have an easier user interface you for you to do your notebooks but you're missing what we're missing is a lot of these additional configurations that unfortunately are still part of the product right and this is the thing I think a lot of people if you're just diving into this are unaware of and

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=998s" target="_blank">16:38</a> There's a lot of gotchas here and I think for us the conversations today the conversation I want to have with you today Mike and with everyone else who's listening is have you felt this pain or this conflict and is this a problem or not?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1017s" target="_blank">16:57</a> Oh, I think I've definitely have felt the pain and conflict of this this dichotomy of

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1023s" target="_blank">17:03</a> Again I think I heer on the side and Tommy I guess we would both air on the side of we're on the side of the prodeveloper side a little bit more.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1029s" target="_blank">17:09</a> We we are on the side of we want all the technical tools. We want to have no holes barred. We don't want the UI to come on top of this technical piece and then have it, , let me remove functions and features and capabilities that we would normally use. So, some context here too, right? Azure data factory came out in 2015. Like it was initially pre-released in 2014, came out officially in 2015 as a product. And I remember working in an IT organization around that time. I'm trying to roughly put my timeline of like when I started working for things

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1061s" target="_blank">17:41</a> But like 2014 15 16 that that sounds about the time when I remember start seeing Azure data factory appearing

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1070s" target="_blank">17:50</a> Appearing and so there's a lot of concepts like what is it how does it run what's a pipeline like all these different things that came out in that early stages of Azure data factory but that was again a tool built for data engineers and it was all built in Azure and so most of the Azure space was like IT professionals developers space to compete with AWS. And so here we are now at PowerBI and fabric which is more of a g a business-based tool, right? It's it's geared towards the business. So if I look at the spectrum of time when this this article started, you

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1102s" target="_blank">18:22</a> Know, when these tools came out, I I like the fact that things get easier. I like the fact that they're getting simpler for more people to use. My challenge I think becomes when the UI doesn't necessarily support all the things I want and I know that the code or underneath the hood it should do like I'm I'm coming from a reference point of Azure data factory from Azure and I go use pipelines in fabric and they're not exactly the same. Now there's things now that have been added the gaps when they were initially

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1133s" target="_blank">18:53</a> Released it's like it's gotten closer. They've made it more efficient. It's it's gotten all the features that I think I need from Azure data factory in Azure side now all exist and I have a couple new ones, right? So, they added some new things that make me want to use pipelines better. Send a team's message, send something to SharePoint. Like there's some there's some other integrations that they're giving me that I think are easier to utilize when I'm using the pipelines in fabric. So, for that reason, I like it. but it took them a little while to mature the product. And so I think here Tommy is

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1164s" target="_blank">19:24</a> Where the rub is for me when we look at brand new products like one copy job right right

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1170s" target="_blank">19:30</a> Right copy job I've been a little bit annoyed with cuz it's it's it's in preview so there's there's room for it to be built better and be refined but just two quick observations around what I was doing in copy job in the copy job experience you can connect to some database my SQL SQL servers whatever that is and you and copy from that source location into a lakehouse table. And the challenge for me was when I tried to add so I had a lakehouse with a schema attached to it.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1204s" target="_blank">20:04</a> Mhm.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1205s" target="_blank">20:05</a> Mhm. And the schema was dbo by default.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1208s" target="_blank">20:08</a> And so when you selected the tables, it automatically gave me dbo and then the table names that it was trying to translate and copy into. Great. , nice. Thank you for doing that. But I wanted a different schema to put all the data in and I couldn't like easily go through. And if you had three or four tables, it wouldn't be a problem. Not an issue. But when you've got 75 tables and you have to go through every single table and change the the schema of where the thing's going to, there's no like bulk edit. There's no bulk add. Now again,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1241s" target="_blank">20:41</a> Again, why am I why, Michael, why are you complaining about this UI, right? Why is this a a complicated thing? Well, I know for a fact that all these things in fabric live in JSON. There's a backend behind all these things and everything has a a schema to how it's being built. And dog on it, when you go into the coffee job and you run it, you go look at the JSON code for it and I can see, look, here's all the tables. They're all right there. No problem. But the downside is I can't edit it.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1271s" target="_blank">21:11</a> I don't have the ability,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1273s" target="_blank">21:13</a> Right? So my downside here is I can't go in and edit

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1278s" target="_blank">21:18</a> The the schema. And if I wanted to add more tables or change all the schemas at once, I would have thought it would have been as easy as like find and replace, find dbo, replace all the instances using Monaco, the code editor, and then hit save and it would just absorb the changes. Right? That's what I want. But that's again back to our point Tommy this is where the UI of the simple things was abstracting some of the technical pieces I need to do as a professional the prodeveloper got left behind and we were only focusing on the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1310s" target="_blank">21:50</a> Brand new beginning basic user and the the UI or the the tooling doesn't support the prodeveloper level things like like

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1321s" target="_blank">22:01</a> Like how Microsoft how do you want me to manage 75 tables in a copy job I'll pause right there. No, this is a huge point. First off, before I go to my point, I love when you say dog on it because it always makes me think if I was talking to Fogghorn Legghorn on a podcast about PowerBI. I said, boy, if I didn't have no copy job, dog on it.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1337s" target="_blank">22:17</a> Dog on it.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1338s" target="_blank">22:18</a> I don't know. I don't I could if I were one Looney Tunes character I would want to talk PowerBI with, it would be Fogghorn Lakeorn. Anyway,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1345s" target="_blank">22:25</a> That's funny. No, but you're you're you're you're speaking about something where I think ma PowerBI or Microsoft is assuming they put in a standard implementation and they've added standard features. And I think that's the biggest thing is all the easy UI. If you have a standard implementation, you have quick DBO 12 tables from this to this, it's going to work pretty well. However, I think the problem is Mike, how many of our things are just plain standard where m for me may again anywhere from maybe 20 to 30% would you

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1380s" target="_blank">23:00</a> Go under the standard category. It's go from this to this to this. It's the Microsoft story. And if you want to know what the Microsoft story is, create a new lakehouse, see the options available to you, click on that available option, and just keep going through that process. Microsoft's trying to drive you down a standard route for your data and that's fine. There's no issue with that. I have no issue with that at all. However, most of our data doesn't fall into that nice little road that they're driving for us. And to your point, Mike,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1412s" target="_blank">23:32</a> I had the same issue where I had to get data into a lakehouse, but I had to do additional transformations. Well, those transformations modify the schema of the data and not necessarily the column types but some of the table metadata which you would have no idea.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1430s" target="_blank">23:50</a> So then it gives you this nice hey add this to a SQL database super standard implementation.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1436s" target="_blank">23:56</a> Well immediately came back with an error even though we went through the nice UI. The error was a very odd error code said could not do this mapping error. Mapping error what these are new tables. What's a mapping error? Well, hey, thank you chat GPT and co-pilot for your great answers and searching the web. But it turned out to be when those transformations happened, those tables had enabled mapping which is unavailable for SQL database, which is nowhere available in the UI to change, nowhere available in the errors to change. So, but those types of problems are not few

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1468s" target="_blank">24:28</a> And far between. they're abound in the back end of the types of configurations a table or whatever honestly whatever product or data you're using. So Microsoft works really well with the standard implementation and it's added the standard features but we're not the real world is not dealing with that all the time. We're dealing with data from marketing. We're dealing data not just JSON all these different things in order to get into the place that we want. Microsoft's assuming it's standard. it's easy features but that's not the case.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1500s" target="_blank">25:00</a> It's interesting that you me make that I think initially Microsoft wants to be able to let make it easy for every single thing

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1509s" target="_blank">25:09</a> Or all the things. So I also think here this is also a product maturity challenge a little bit too right when you get to a place where things are so brand new. You can't again in one who does software development like you can't assume everyone's going to land

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1526s" target="_blank">25:26</a> Oh I see where you're going with

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1527s" target="_blank">25:27</a> Data or or the solution like all the features in the bells and whistles day one right so day one when a product comes out it's going to meet again Microsoft has to make the decision there's got to be a cut off point right when we go from someone's working on a project behind the scenes to announcing it to getting it out the door you need it to be enough there to see if people are going to like it and use the experience. Once you get beyond that, then I think Microsoft does a lot of like this testing phase. I'm going to call it testing, but like it things are in preview, but even though they're in

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1559s" target="_blank">25:59</a> Preview, they're they're not necessarily going to get finished. And I think this is one of the reasons why we see a lot of things in PowerBI, there's a lot of things in preview right now. So, I think there's been a little bit of a backlash from the community around, hey, there's so much stuff that's out in the world in the wild that is feeling like it's in preview. How do we know what to trust? what will actually become a production element? Will will we always get this 80% working thing or is Microsoft going to come in and like officially finish it and make it completed and move on? And I think this is really been challenging

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1592s" target="_blank">26:32</a> For Microsoft to go transitioning from PowerBI which had like a really core set of tools, right? Power Query analysis services, the models and the reports. Like that was like all we had to build initially was these three things. and data flows was in there as well with with Power Query, right? So, if we only had like three or four things we're building and now we open this up to like, okay, now we've got this entire data team that's all trying to build experiences,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1618s" target="_blank">26:58</a> You need to be able to show progress on all of them at at the same time. So, yes, the team has grown in size. People that were working in Azure now are coming over to fabric and they're still doing the same things over here in fabric now. So yes, probably there's more people to work on the team stuff, but at the end of the day, you still need to release a lot of features. You still got to get a lot of different tools out. And I can't assume with all these new products. We went from Azure to Fabric in like two years. It's been 2 years in Fabric at this point. So we're just starting this game out. Like we're

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1649s" target="_blank">27:29</a> Just starting and there's a a lot of new things. So some of these parts of the product are much more mature. Some of them are not as mature yet. But imagine what it's going to look like in 2 years from now.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1659s" target="_blank">27:39</a> From now. Yeah. what what will that look like? A lot more hardening, a lot more features, all these little

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1664s" target="_blank">27:44</a> Creature comforts are going to get solved. So, I again I I have sentiment here. This is where I relate back to Microsoft side. You want to build enough software that it's usable, get it out the door and meet the 80% need and then you figure out the last 20% as you go and you chip out, okay, what is the most important features that people need? Because what you thought as a as a developer of software that may have not been the actual need of the customer

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1689s" target="_blank">28:09</a> Once you get them the software. They may have totally different requirements or different needs and you don't want to build this really polished 100% done product before getting feedback from the customers and saying what does it look like? What do you need? What are we missing? And then after they tell you then you go back and finish those features. So there there's one hitch in the story I just want to make sure that we understand too and it's not going to be all doom and gloom for the podcast for those listening because we'll definitely come solutions that power query and DAX who built that who was the who's the originator it's Microsoft

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1720s" target="_blank">28:40</a> Microsoft is the one who created those tool that language right so they already had the control and they could build it and have that comprehensive but notebooks even pipelines too right I believe that was more of a data bricks thing too originally they were all bought from another company. So the language and the products themselves

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1740s" target="_blank">29:00</a> Microsoft not that they don't know all the ins and bounds but everything with Power Query and DAX and PowerBI was all Microsoft in-house. So if they wanted to expand on it they could

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1751s" target="_blank">29:11</a> But now you're dealing with notebooks which have been around a long time. Well, it's interesting, Tommy, that you bring this. I like this I like this point that you're bringing up here because part of this is ,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1760s" target="_blank">29:20</a> Microsoft definitely put their own flare on top of notebooks, right? It's not it's not like a standard Jupyter notebook that you would normally use. But to your point,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1768s" target="_blank">29:28</a> The concept of a notebook has been like the idea of it has been worked out through the community

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1774s" target="_blank">29:34</a> Through open source projects for multiple years before Microsoft integrated. to your point, right, there's this idea of like the the initial run version of this notebook experience was like someone's built one and was like, "Oh, this is interesting." And then, , built a little bit more on it and then added some more. Oh, let's let's add markdown in here. Let's add this thing. Let's add this other stuff. Like

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1793s" target="_blank">29:53</a> The the idea of a notebook has already been around for a while and Microsoft just took that and said, "Okay, we're going to make our own Flare version, right? The specification is already there. The , how you save it is already been defined." To your point, Tommy, all the other things had to be built from scratch from Microsoft's mind. Like they knew it needed to be developed, right?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1814s" target="_blank">30:14</a> But they were building like Azure Data Factory from scratch.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1818s" target="_blank">30:18</a> Already existed. Yeah.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1819s" target="_blank">30:19</a> Yes. Exactly. So like I really like your point there because I think that does really resonate with me about the the ability for the the Microsoft to be able to some of the tools we're looking at now are coming from the community. like it was it was already out there. It was it was open source and now they're just bringing part of that in and leveraging it. And this is maybe why

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1843s" target="_blank">30:43</a> This is maybe also why Tony I really like the Spark and the notebook experiences because they have been around a lot longer and Microsoft is just integrating with them as opposed to having to build brand new net new experiences on top of them. Maybe that's also why that notebook experience feels like it's a lot more mature than other parts of the products that come like copy job, right? It feels very new. It feels very simplified, very boiled down for that new user. I do like it. I think it's the right approach. I just still feel like there's a lot of like rough edges. Like I can't go in, you can see a copy job and you can see the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1874s" target="_blank">31:14</a> JSON, but you're unable to edit it. And I'm like

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1881s" target="_blank">31:21</a> I'm like that that's like a simple miss to me. Like why would you not let me edit the JSON? Other experiences I think in I think it's also in pipelines as well. you can see the JSON in the pipeline and you can even edit it. So like if you if you knew what you were looking for in the JSON that those power users can go in and modify something like if there's something you're going to replace. Oh no, I named this variable the wrong thing. I want to replace it. You could go to the advanced code and just do a find and replace on multiple things.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1910s" target="_blank">31:50</a> I think that's a lot more useful to me.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1912s" target="_blank">31:52</a> So you keep saying the power users and I would argue with you it has less to do with the power users and more it's it's wholly data dependent right now. Whether or not how to do that is based on the power user and the and the skill of the user. But

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1926s" target="_blank">32:06</a> Help me help me unpack what you mean by data dependent. What do you what do you mean by that?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1931s" target="_blank">32:11</a> So if if I'm using the sample Microsoft data, I don't I'm probably not going to have to go and edit the JSON. I'm not going to have to go into any of the power feature type fe tooling, right? Because everything's just going to work with the normal UI. But depending on the data that you're using, where it's coming from, the back end of that, that's going to really dictate if you're going to need those power tool- like features. And I think that's the argument. Now, whether or not how to or where to look is based on whether you're a power user or not.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1962s" target="_blank">32:42</a> Okay. Yeah.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1964s" target="_blank">32:44</a> But it's the gap to me. It's the gap of that stuff, though. it what I'm look what I'm so I understand your point Tommy but like the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1972s" target="_blank">32:52</a> I feel like sometimes in this fabric world we're focusing so hard on the the users that are new to this experience right we have a lot of PowerBI users there's a ton of people there there

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=1984s" target="_blank">33:04</a> There they're PowerBI people and they're thinking about should I come over to fabric and so we're trying to build these like simplified experiences for PowerBI users are not comfortable in a notebook they're not comfortable writing a lots of lines of code at least initially. Now your more advanced PowerBI users probably no problem they'll they'll get it. What what I'm having an issue here with Tommy is it's the the reason you give a power user capabilities in these tools is because there's a lot of repetitive stuff that potentially you're doing

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2015s" target="_blank">33:35</a> Right like for example if I'm let me give you another example I'm doing like a copy job. , let's talk about a poppy. A pipeline. It's a pipeline. Not a puppy. Not a puppy. A pipeline.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2031s" target="_blank">33:51</a> Pipeline. Let's talk about a pipeline. In a pipeline, we have a copy job that we're going to be running, grabbing data from some some database, and putting it into some lake house. Okay, fine. You could copy one table and have that table mapped automatically for you. But if what you're doing, the pattern to build the mappings is easily known in the JSON object. And so, okay, there's two ways to handle this problem, right? I have two tables that I'm going to copy in, or I have 30 tables that I'm going to copy in,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2063s" target="_blank">34:23</a> Right?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2063s" target="_blank">34:23</a> Right? Right. Or 100 tables I'm going to copy in. So to me, this is where I start thinking about this going, okay, I could one continue to use the UI and for every number of clicks, add a bunch of extra clicks to like add a new row. Here's the source table name, here's the destination table name, and like do a lot of extra renaming of things, but that's to me that's very timeconuming. So, it's the advantage of giving you access to the protoolers or the pro the the code behind the UI that's there is it's just enabling that pro user to say,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2097s" target="_blank">34:57</a> "Oh, I can make multiple changes quickly and instead of having to take all these clicks in the UI, you could still do the same thing. It's nothing good. you're still making it happen, but it's it's the prouser that comes in and says, "Look, I need to do things at scale much faster or copy paste or edit lots of things all at once." That's the stuff that's like, "Okay, yes, there are less users that are going to need that feature, but that's really what makes the prodeveloper like shine in these areas,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2127s" target="_blank">35:27</a> Areas, right?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2128s" target="_blank">35:28</a> Because they can get through this stuff and build it faster." And so I think as we again this is probably a a life cycle of fabric right we're going to build a lot of fabric things initially we're going to see what's used what needs to be used out there in the ecosystem but there's going to be a lot more again another story around this one is continuous integration continuous deployment same thing

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2150s" target="_blank">35:50</a> We haven't really had a compelling story for this yet we've had like small artifacts it's a simplified pipeline data pip deployment pipeline that we can use that gets the story done. It's continuous integration, continuous deployment, but it doesn't have all the bells and whistles that I think we need. And so, here we go. This is a nice UI. It's good for simple users, but we don't have all the prodeveloper tools that we need to handle versions of data by environment. It just doesn't happen. I don't have any actions to like load data. When you're talking about a process to develop and

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2183s" target="_blank">36:23</a> Deploy data processing systems, you need some way of like doing checks and tests and being able to like run data as as you're deploying the code. This doesn't exist today. And so that's like my rub right now is we're getting a lot of tools that are simple and easy to use with lots of clicks potentially, but some of the prodeveloper tools don't have those clicks. It has more code writing things. And that's what I like to be in because I've gotten through the simple stage and I want to be more efficient.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2214s" target="_blank">36:54</a> And I think it's it's the the argument now this un agreed upon argument on who are the personas. It's almost like how do I make all my kids happy at once, so to speak. And I have an 8-year-old, six-year-old, four-year-old, and if I were to say, okay,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2228s" target="_blank">37:08</a> Give them ice cream,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2229s" target="_blank">37:09</a> Right? Well, no.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2230s" target="_blank">37:10</a> Just give them ice cream. That makes everyone happy.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2233s" target="_blank">37:13</a> But if I'm going to give them to play with, right? And I think we'll see how an analogy is. Well, if I give him one that my eight-year-old will be really stimulated with, my four-year-old won't be able to catch on.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2243s" target="_blank">37:23</a> Yeah, correct.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2244s" target="_blank">37:24</a> And it's not because he's four, it's because he's dumb. No, he's he's four. But thing. Well,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2249s" target="_blank">37:29</a> It's just different maturity levels.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2250s" target="_blank">37:30</a> Well, , you haven't met my son yet. So, but

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2253s" target="_blank">37:33</a> You're not going to play You're not going to play Settlers of Can with your four-year-old because you're like, they won't even know what to do.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2258s" target="_blank">37:38</a> Right. Exactly. So if I try to find and I think right now Microsoft has that age range or they're not sure those age ranges go how do we make all the kids happy right now at once and unfortunately or I don't want to say

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2271s" target="_blank">37:51</a> What's the largest pool of age ranges right exactly do we have a we have a whole bunch of foury olds let's build something for four-y olds

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2278s" target="_blank">37:58</a> We're not just yet

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2280s" target="_blank">38:00</a> You and I unfortunately are the outliers here and I think they're

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2284s" target="_blank">38:04</a> We're the old men

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2285s" target="_blank">38:05</a> We're the old

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2286s" target="_blank">38:06</a> We're the grandpas we're the old kids don't present we it gets weird. , but we're probably the the older ones there. And there are we are there are more than just the two of us. But I think when you look at who Microsoft is trying to market to and more importantly who they're where the audience is, you and I are the outliers. We are probably the 5% of asking for these things. Now, does that make that right?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2311s" target="_blank">38:31</a> Well, so I I'm not sure if I agree with that. I think they're they're marketing towards the earlier stages of people to get started, right? It's easy. Get started. Use this thing. Like you need to start there, but I think there's this idea of like a growth pattern, right? You you start easy, but you have a lot of other features that let you build more complicated systems as you go along. So, I I definitely think it's there's there's an on-ramp to like fabric. What's the easy on-ramp into fabric? And then from there, where do we take you? like what what type of and then you need multiple directions to go

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2342s" target="_blank">39:02</a> To like technical solutions

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2346s" target="_blank">39:06</a> That are easy to maintain and effective and cost effective to run. I think that's what they're trying to do here. So again, this is where I'm just trying to sift out in the sand here.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2357s" target="_blank">39:17</a> Why are these things like what's what's easy to use? What's not easy to use? Where are they going with a lot of these features?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2362s" target="_blank">39:22</a> Features? Let's dive into that because I think like I said, I don't want to be all doom and gloom again. , and maybe it's an Italian thing. , my grandmother's favorite game. It was Guess Who died. So, thing. So, , we can all be a little little negative, but let's try to be a little positive here and also talk about if for someone listening or for someone who's starting in fabric. Obviously, we know it's not a straightforward journey, whether you're a prodeveloper, mid developer, or just starting off from PowerBI. But, how do you navigate the waters then with where we're at? If we know these complexities, if we know that

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2394s" target="_blank">39:54</a> The UI can be deceiving with, , not a standard implementation, let's go through I I want to hear Mike, how would you recommend fabric then for those different users, right? You have the basic user or new user to a lot of these toolings to a prouser. How do you navigate the waters here? I guess I guess my story here around a little bit of the the navigation element is I think I tend to think about projects is you just got to build it so

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2426s" target="_blank">40:26</a> It works first. So build it so it works and then you can always come back and optimize it later, right? So sometimes I think I prioritize a little bit of speed to market faster than I prioritize super efficient and highly tuned solutions cuz I think sometimes you don't know what users are going to really want at the end of the day. I think one of the advantages of PowerBI is being able to move fast and build things quickly. a lot of this is like hey let's work with the business. if they need semantic models let's

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2457s" target="_blank">40:57</a> Just get them one. Let's not polish it up all the way. Let's just get them a semantic model that is good enough that they could potentially use it. And then to what Microsoft's doing as well. I talked a little earlier about like Microsoft's just giving you some stuff. It's like an 80% rule, right? Here's 80% of what I think you need. Tell me what the last 20% is and help me refine the idea. But I think I think that's how I would approach things. I would talk about like easy to get going fast initially and then you can tune and optimize later. And the reason I bring this up is when I think about the users that are showing up to

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2490s" target="_blank">41:30</a> PowerBI, when we look at them, we're looking at a user that was using PowerBI desktop, probably comfortable with Power Query, maybe using some data flows gen one, right? And now they're showing up to fabric, and now, okay, what's most comfortable? Well, the same tools you were just using. I really want to use dataf flows gen 2 cuz now I can write to a lakehouse. Great. I still want to use semantic models and reports. So I think those initial users are starting with the concept of okay I'm doing models it's going to be import it's going to

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2521s" target="_blank">42:01</a> Come from the lakehouse. So instead of replacing replacing like with pipelines and notebooks your dataf flows gen 2 you start with well I'm just going to start with gender flow gen 2 add a lakehouse and then from there I'm going to get my semantic model and my reports. I think that's your easiest starting point for this. And then I think that the story becomes okay well now that you have the dataf flow gen 2 working that's not the most efficient thing in the system. Again this is going back to our point

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2552s" target="_blank">42:32</a> Here today which is dataf flows gen 2 when you run the same job in a dataf flow gen two transform some data copy it you shape it a little bit make some tables if you ran that same job in a notebook you're going to find the notebook is going to be highly more efficient. it's going to take a lot less cues to run the job. So I think every time we move more towards this code and technical experience, things become cheaper to some degree. It runs more efficiently. You have a bit more control

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2584s" target="_blank">43:04</a> About how many machines you're running, how big the machine is. You can tune the machine a bit more to the job. you can use a Python notebook versus a Spark. You have a lot more control around what you can build or not build. And so now you can you can start tuning and not in removing waste basically. So I'm saying sometimes those early dataf fo gen 2 experiences are quite wasteful potentially. They're slow. They can't handle a lot of data. And when you need more scale, you're looking at different tools or different solutions to do the same thing. And that's where you get to get more technical to do them. You have

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2615s" target="_blank">43:35</a> To know more about the technology to implement that solution. And that's when we're doing the optimization step. Does that make sense? what I'm describing there is like start easy

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2626s" target="_blank">43:46</a> Is build it and then two is come back and optimize

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2629s" target="_blank">43:49</a> And I think that's what I wanted to clarify with you if I'm hearing you correctly is what we're basically in so many words saying that when you get started get started on straight more straightforward projects off the bat get used to the workflow and that's the gist I'm getting a little with what you're saying is if you have some simple semantic models you want to migrate great let's start there understand the workflow understand the tooling a bit and then you can understand where there's bumps in the road. If you're used to your data flows, you'll see those bumps in the road early. And so, how close is

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2661s" target="_blank">44:21</a> That to a bit of what you're saying? I understand the other areas, but to me, the assumption I'm making from what you're saying is, okay, you want to regardless of your level is start on some more straightforward projects if that's how you want to get into fabric so you can get your feet wet, so to speak. Would that be a logical assumption from what you're saying?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2684s" target="_blank">44:44</a> I think I think you're going to want some push to get you into like why would I use fabrics? I think what you're describing there is like what is the push to get you into? So if I didn't need I but it what are the features that I'm looking at from a fabric standpoint that's going to get me to that next level that's going to help me to say okay I can use PowerBI but I actually need to spend some again you're usually spending a little bit more money at some degree some more money to get to the lakehouse to get to the other side of things. What is the in what is the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2716s" target="_blank">45:16</a> Incentive? I guess what is the incentive that pulls me over? And I I say the incentive for me right now is things like okay in the PowerBI world you're always importing data always. It's always happening. And so sometimes that takes that requires your semantic model to load a long time. it can it can be timing out. It could have that import experience experience has to grab the data from where it's coming from. If it's a SQL server, it's like rowle data. It has to look at the rowle table data re and analyze it. And

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2748s" target="_blank">45:48</a> This is the vertipac engine with take that data and then serve it as a columner store and then compress it and save it.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2757s" target="_blank">45:57</a> Save it. What you're doing with fabric is you're able to take some of those

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2760s" target="_blank">46:00</a> Heavy experiences like those those consuming time things and I can remove that. I can pre I call it like pre-calculating. So instead of letting the semantic model do an import and calculate the recompaction of the Vertipac stuff, I can move that upstream and say I'm going to have the pipeline do it. I'm going to have the notebook do it. I'm going to have a table a a delta table turned on with vorder on it. So by doing that I'm actually spending compute in a different place that allows me to save tables in the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2791s" target="_blank">46:31</a> Right format already ready to go for the semantic model

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2797s" target="_blank">46:37</a> 100%. But but this is again you need to understand like

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2800s" target="_blank">46:40</a> That

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2801s" target="_blank">46:41</a> Technical this is that again it's like that technical hurdle that takes you to the next level for those things. So what what I'm hearing and what I where I'm leaning towards I'm not going to make all the assumptions that you're saying but based on what you're saying which I do agree with is if I'm getting someone started in fabric or a team started in fabric I'm also putting in the budget that we're going to be making some mistakes and not necessarily the people because they're not skilled but because we know that there are these added complexities that there's a lot of known

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2833s" target="_blank">47:13</a> Unknowns so to speak right where We know there are things that are going to happen. Maybe I understand that I want to do a delta table. , but I don't know, like I said, how it also works with fabric. All the things that I need to make sure that that actually happens correctly. Maybe I want to do the copy job and do a SQL database in fabric. But there are going to be hiccups under the way. I feel like what we're saying or at least part of the conversation here is getting started in fabric. You have to you really have to almost start with a pilot or quick a few and not few and far

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2865s" target="_blank">47:45</a> Between but some small projects to be aware of hiccups down the line of forks in the road that are probably going to occur and they will occur regardless of your skill level. There'll probably be more if you're a basic user, but even if you're a pro developer, you don't have a lot of again your normal configuration available to you that you're going to want to recommend or we're going to recommend. Hey, you want to do the SQL database and you want to do the whole

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2896s" target="_blank">48:16</a> Database. Let's start with a few of our tables, your main tables. Let's see how that goes. And we're going to do this in almost iterations because right now as great as fabric is, and let me tell you again, no pandering here, it is great. Is it perfect? No. And that's okay. So, let's be aware that there are things that are things unseen that we cannot see that may just pop up. I am not going to recommend someone does their full migration right now just off the bat right away. But I would recommend that

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2929s" target="_blank">48:49</a> Let's start some primary things and break it down into iterative projects because there are going to be things down the line that we want to be aware of and the sooner we can be aware of those things the sooner we can tackle them before they happen on a larger scale. That is just the nature of all these preview features too. Again you made a really good point. A lot of these things are still in preview too. So that which means at your own risk Mike a lot of things that used to be in preview and PowerBI we wouldn't recommend to a client we would say it means at your own

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2961s" target="_blank">49:21</a> Risk it can break or stop at any moment how is that different from fabric or anything in fabric. So if we have all these new fe fabric features in preview if we have all these things that are not totally for the prodeveloper but are still prodeveloper tools. Well let's break it down. Let's break any project that we have down into smaller pieces.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2987s" target="_blank">49:47</a> Yeah, go ahead.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=2988s" target="_blank">49:48</a> Yeah, I want to jump in here a little bit and I want to what you're describing or what you're talking through here sounds like if I if I had to take a step back and really look high level what you're doing is how do you do anything new

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3000s" target="_blank">50:00</a> Like like this? Let's this is just introducing fabric as a new thing.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3004s" target="_blank">50:04</a> Yeah.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3005s" target="_blank">50:05</a> Yeah. And I'm I'm going to step back and say okay, you're an organization and I've seen this a number of times. you're an organization, you have a number of people using just Excel to do all of their analysis. That's it. That's all we've got. So in that world, what I see happening is a lot of organizations send there is a data system somewhere. People go into that data system, they export the data they need to Excel, they go back to Excel, they do the analysis there, which is fine. What is if I'm going to ever push the organization to go further beyond just doing all the analysis inside Excel, which is good.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3038s" target="_blank">50:38</a> It's definitely again the reason why you use Excel is it's a hyperflexible tool. You can do so much with it. It's great. That's what that's what it's there for. But to say you're going to stay inside Excel forever seems to me like a miss because because your competitors are going to be innovating above that. They're going to be doing things in a more automated way. So the the business, the organization has to sit back and say, "How do we do anything new? What does this look like for us? And so to me, I look at this

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3070s" target="_blank">51:10</a> Going, , does the risk of these new things to use the new tool, to use the new fabric, is is the risk so high that you won't do it right. If there's too much risk to go to the next step of things, then the organization has to make the decision to say, "No, we're not going to do that. We're going to continue to stay with our current process." And so I think another part of this is one that the organization has to decide is there a better way. And I think people like him or hate him.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3101s" target="_blank">51:41</a> Elon Musk has like a really interesting process on how he runs his companies. He's always deleting things from his companies. Like if you're not deleting things, if you're not removing complexity, look at what he's done with like the Raptor engine for his space shuttles. It was, if you look at version one versus version three, it look it looked like a totally different thing. Version three doesn't even look like it should run. There's so much less stuff on it. So, every time he's doing design, it's like we just need to how can we simplify? How can we get rid of

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3133s" target="_blank">52:13</a> More things? How can we remove stuff? And so, one thing I think I think sometimes organizations fall into a trap a lot of times is they're like, "Wow, we found this really neat software. Wow, we found this other really neat software." And there's all these different products from different companies like it's a collection of just variety of solutions. Now they all might be in their own right meeting this the needs in that particular area but at the end of the day you now got seven different programs from seven different companies all doing different things or slightly different

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3165s" target="_blank">52:45</a> Things and now how do you move data between all them and it gets it gets complex. So

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3170s" target="_blank">52:50</a> I like to air on the side of like what can we do to simplify? How can we make it easier? How can we bring everything together? And to your back to the Azure thing, right? Why do I need to do data engineering and go to Azure and buy a key vault? I got to go buy an Azure data factory. I got to go buy a lakehouse. I got to go buy some like there's all these things in Azure you need you needed to learn how to stitch together to get the right solution.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3193s" target="_blank">53:13</a> Well, fabric is that one-stop shop. It gives you everything. Is it all perfect? No. But is it better than what it was? Yes. And so

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3201s" target="_blank">53:21</a> I'm going to hit one more point here, Tommy, before we

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3203s" target="_blank">53:23</a> Yeah. Yeah.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3204s" target="_blank">53:24</a> Yeah. Before I toss it back, I know you're getting amped up here about your your comment here.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3207s" target="_blank">53:27</a> You're making good points. You're making good points.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3209s" target="_blank">53:29</a> Well, I'm trying. the last thing I would note here is when you're going into these risky situations, one you need to identify what is the cost of doing that that risk. The other thing I would want to say is what is your measurement of success? What does it look like when this thing is done? How do we say is this something we should implement and pursue? And I think of things like is it a faster time to build the solution? Is it easier to maintain the solution? Is distribution of the content reports content that you build. Is that easier? Are you taking the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3243s" target="_blank">54:03</a> Number of tools you were using and simplifying them? Are you removing extra tools that you just don't need? One one of them is a good example here. I see a lot of organizations moving their on-prem SQL databases to Azure using them there because then they don't need the gateway. they could just go as your SQL right to fabric or right to PowerBI like so that's already something I'm seeing people try to simplify is okay we have on-prem databases they're old they're getting outdated we need to move them or migrate them to somewhere else let's move them to the cloud and when they do that they now have all this new

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3275s" target="_blank">54:35</a> Experience where they can build these simpler easier to use experiences here so anyways I'll just pause there I said a lot of things

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3282s" target="_blank">54:42</a> I I love it I love it and I'm going to break down just two of the things that you said that I think are hyper important important is we already getting near time already with this one. You brought the Elon Musk and the constant iterations. A lot of companies they can't afford to make those types I'll call them mistakes or iterations over their projects. But I think they also think of it differently. And I think when a company used to think of buying a product or service, they thought of buying it whole, so to speak. And hear me out here. If I were to buy SMS or buy SQL Server back in the day, I

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3314s" target="_blank">55:14</a> Got the license and I had to move my whole machine to it. And I think I'm hearing from a lot of clients now that they don't want to jump all into fabric. Well, it's like, well, , we it's still in preview, so we don't want to migrate everything over to that. I think that's the wrong way of looking at it because honestly, Mike, I think with most companies now, most technology companies like Microsoft, that's no longer how things work. It's no longer the lay of the land to jump all into a product. We're seeing this not just with

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3345s" target="_blank">55:45</a> Microsoft and Microsoft Fabric, but take a look at all Google's tools. Take a look at evolve AWS and their their iterations on things. It's okay to and I think if as a company that you're eventually going to do fabric, that that's the direction you're going. Microsoft shop. That doesn't mean you have to wait till it's perfect because it's not going to be perfect because whatever they work on now that you see like the copy job, well, guess what? They're going to have 20 other features that are in preview two years from now

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3377s" target="_blank">56:17</a> Anyways. That's just the way I think the world works right now where we're no longer doing everything all at once. And if I know I'm a long-term Microsoft shop, then there should be nothing stopping me right now to beginning to get my feet wet with fabric. Is it a cost? Sure. But guess what? I used to be able to buy an app and just buy it once and now everything's a subscription. So things are different now than they used to be. Everything's a subscription for the consumer. And I think we're finding that now the cost of doing business around a lot of these tools is no longer a annual

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3410s" target="_blank">56:50</a> License. it is going to be these perpetual capacities, these perpetual licenses. So, and that's a long roundabout way of simply saying that what's stopping a company from going into fabric even with these preview features, even with what we talked about in the beginning here. Well, unfortunately, I think it's the trepidation around it not being perfect. And that's just not going to be the case. Maybe ever, maybe ever with any service that you buy online either. you're everyone's wanting an AI product.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3442s" target="_blank">57:22</a> They ain't perfect and they're not going to be for a long time. That doesn't mean it should stop us and or stop us from understanding the features are there. It really goes back to one of the big things that you said in the beginning. Is the cost worth the benefit at the end of the day for some of these features? Yeah, we're going to be spending money and we're probably going to be spending time or and people for learning these new skills, learning some gotchas, but to get your data into a single source that all the other issues with you're

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3474s" target="_blank">57:54</a> Having with Excel, I think to me that's easily worth it. And I think that's going I think there's a mind shift or or a shift of way of thinking that a lot of organizations are going to need to have to dive into fabric because it's never going to be in this perfect state. They're never going to buy in a sense fabric and get it shipped to them so they can install it. That's just not how that's not the world we live in anymore. And like you said, they may they might not be installing PowerBI soon enough either. That doesn't mean these toolings are

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3505s" target="_blank">58:25</a> Bad. It's just the way we're going.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3507s" target="_blank">58:27</a> Yeah. I think I'll also echo here something as well. I did a little bit of googling here on the side around like, , the five-step process here and I put those in the chat so you can see what I'm going to talk through here, Tommy. So, I'm going to end on this one. I think this is really important. I think you should question every requirement.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3522s" target="_blank">58:42</a> I think a lot of times we have a lot of requirements on things that are because someone thought it was a good idea and we don't question them and delete them. , if there's a requirement that does not exist, get rid of it. if if it doesn't make sense. I think a lot of when I look at data engineering projects, there's a lot of requirements that are not really necessary to get the product done. And if we remove some of those requirements, we actually increase the ability for us to be creative with our solutions and make it cheaper, faster, better. The next one he says is delete everything that can be deleted. This is this is my story around like the

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3553s" target="_blank">59:13</a> Gateways. Like gateways are nice. They let you get on-rem data to the cloud, but is there a really a hard requirement to keep the database on prem and then anyways like that's the issue. Let's get let's get the database out of onrem. Let's get it into the cloud anyways and let's start there. Like that makes a lot more sense. Simplify and optimize, right? Is there better ways? We've been doing things with data flows gen 2. Is there a way to do this faster, quicker with notebooks, right? He talks about accelerating the cycle time. If it took

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3585s" target="_blank">59:45</a> You two hours, two hours to load something, can you load it in 15 minutes? What what does that do? How can we make that work? And the last step here he talks about is automate. Add automation to things. And I think this is really a good good approach, a a good guideline to follow when you're talking about data engineering projects is you got to have good requirements up front and then you've got to just get rid of all the waste you can and get down to what is really required. And I think that will help you if you're using these guidelines, I think will help you focus on as an organization, where do we take risks? What is adding real value to our

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3618s" target="_blank">60:18</a> Organization by doing these data engineering experiences? But anyways, that's all I'm going to say. I'm going to wrap there. Tommy, any final words for you?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3626s" target="_blank">60:26</a> I say, boy, I couldn't say it better myself.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3630s" target="_blank">60:30</a> Myself. All right. Sounds good.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3631s" target="_blank">60:31</a> Terrible fog horn. Gosh. Okay.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3634s" target="_blank">60:34</a> Nice try. It was It was a good effort. It was a good effort. Okay,

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3637s" target="_blank">60:37</a> There there might have been a bit of too high a risk on you trying something new there.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3640s" target="_blank">60:40</a> There. We might have to simplify and optimize my endings here. So, actually, I'm going to take rule three there.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3644s" target="_blank">60:44</a> Yeah. So, with that, I'll say thank you all for listening to the podcast. We appreciate your time today. We know you could have spent your time doing a lot of other things. We do appreciate you spending the time with us. Hopefully, you found some time or some valuable insights as we're thinking about these new experiences. And what does it look like for your organization? Are you willing to take some risks? Have you measured what risks look like for your organization? , we would encourage you to think about those things. Tommy, , where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3669s" target="_blank">61:09</a> Oh my gosh, Mike, you can find us everywhere. You can find us on Apple and Spotify or wherever you get your podcast. Make sure to subscribe and leave a rating. It really helps us out a ton. And share with a friend, a colleague. We do this for free. Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/mpodcast. Leave your name and a great question and we might get to it. And join us live every Tuesday and Thursday 7:30 a.m. Central and join the conversation on all PowerB.tips social media channels.

<a href="https://www.youtube.com/watch?v=gyLLmYXGcfQ&t=3701s" target="_blank">61:41</a> Thank you all so much and we'll see you next time. you you you [Music] down. down. down. [Music]
