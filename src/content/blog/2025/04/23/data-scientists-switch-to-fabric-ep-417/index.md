---
title: "Is Now the Time for Data Scientists to Switch to Fabric? – Ep. 417"
date: "2025-04-23"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
  - "Microsoft Fabric"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Microsoft Fabric"
  - "Data Science"
  - "Direct Lake"
excerpt: "Mike, Tommy, and guest Ginger Grant explore whether now is the right time for data scientists to make the switch to Microsoft Fabric. They dive into the evolving data platform landscape and what a Director of Data should consider when adopting Fabric."
featuredImage: "./assets/featured.png"
---

Mike, Tommy, and guest Ginger Grant explore whether now is the right time for data scientists to make the switch to Microsoft Fabric. They dive into the evolving data platform landscape and what a Director of Data should consider when adopting Fabric.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/iL03t9i3gqE" 
  title="Is Now the Time for Data Scientists to Switch to Fabric? - Ep. 417"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Deep dive into Direct Lake on OneLake and creating Direct Lake semantic models in Power BI Desktop | Microsoft Power BI Blog | Microsoft Power BI](https://powerbi.microsoft.com/en-us/blog/deep-dive-into-direct-lake-on-onelake-and-creating-direct-lake-semantic-models-in-power-bi-desktop/?WT.mc_id=DP-MVP-5002621)** — Microsoft Fabric’s OneLake data can be visualized and analyzed in Power BI without moving any data using the new Direct Lake storage mode. . Power BI Desktop users can now create these just like any Power BI...

## Main Discussion: Is It Time for Data Scientists to Move to Fabric?

With Microsoft Fabric maturing as a unified data platform, the team tackles the big question: should data scientists and data leaders be making the switch now? Guest Ginger Grant brings a Director of Data perspective to the conversation.

### The Case for Fabric

Microsoft Fabric brings together data engineering, data science, and BI under one roof. For data scientists who have been working across disconnected tools — Databricks, Azure ML, Synapse, and Power BI — Fabric promises a more integrated experience. The lakehouse architecture means data scientists can work closer to the same data that feeds Power BI reports, reducing friction and duplication.

### What a Director of Data Should Consider

Ginger shares practical insights on what it takes to get an organization onto Fabric. It's not just a technical migration — it's about change management, skill development, and understanding where Fabric fits alongside existing investments. The conversation covers how to evaluate readiness and build a business case for the transition.

### The Evolving Microsoft Data Platform

The team discusses how the opinion of the Microsoft data platform has shifted with Fabric's introduction. What was once a fragmented ecosystem of Azure services is consolidating, and the implications for data teams are significant. They explore what's working well, what's still rough around the edges, and where the platform is headed.

## Looking Forward

As Fabric continues to evolve with features like Direct Lake on OneLake in Desktop, the platform is becoming increasingly accessible. The team encourages data professionals to start experimenting with Fabric now, even if a full migration isn't immediate — building familiarity today will pay off as the platform matures.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=32s" target="_blank">0:32</a> Welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone. Welcome back to another Tuesday. Is it Tuesday? Yes, it's Tuesday. We're still on Tuesday. Oh boy. The weekend messed me up. I just couldn't figure out who was working when, what day it was. Welcome back, Tommy. Your face, Mike.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=49s" target="_blank">0:49</a> Oh man. A lot has happened in a week. Just jumping in today, we have our main topic today is we're still talking on the topic of data scientist. Is now the time for a data scientist to switch to Fabric? Are we hitting that threshold?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=64s" target="_blank">1:04</a> I guess we've been talking about Fabric for a number of years now. It's been released. There's been a persona of a data scientist pretty much from day one, but I think the features initially were just not quite there. Are we tipping over the edge here? Are we on the cusp of this could be a really great program for data scientists to use and it will simplify what they do yet.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=86s" target="_blank">1:26</a> So that's going to be our main topic for today. That being said, Tommy, you've got a quick personal bit here and then we'll hit some news. No, I just want to give a shout out to my sister Mike. I don't know if you had any sisters growing up or — Did you lose a bet? You lost a bet. That's what it was.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=101s" target="_blank">1:41</a> No, no, I'm trying to embarrass her as much as possible. But that's what brings her for though, too. And here's the thing, she's coming up this weekend, and I am stoked to see her. She lives out of town. And I'm automatically going into terrible brother mode.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=120s" target="_blank">2:00</a> And this is when I give my son a little more leeway on how he treats his sisters. It's like, oh, it's just a brother thing. So, I'm already planning like, where can I bruise her? I already texted him. There's no way you walk out of here with no less than two bruises.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=136s" target="_blank">2:16</a> Oh my gosh. You're going to fight her? Oh my gosh. Tommy, hold on. I have this great picture. We were on vacation, Wisconsin, and she's a personal trainer, so she's in shape. And I can't say the same for myself, but it's just me flipping her in the water. And it's just she's flying.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=153s" target="_blank">2:33</a> And I want to frame it. I'll put it in the back here so everyone can see it, too. But I don't know. Something about being a brother, it just brings out the worst and the best in you. Most creative ideas by far, the creative ideas come out because the theme of a brother is I don't care if I win, it only matters that you lose.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=174s" target="_blank">2:54</a> I watch a lot of YouTube and YouTube shorts and one of the shorts that always come up is the theme is why women live longer than men. And it's men just doing dumb things like they're jumping off of cliffs. They're shooting random things that shouldn't be shot at. They're lighting fires with gasoline to burn the burn pile down. And these things just go kabush, right?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=199s" target="_blank">3:19</a> Yes, Tommy. We don't think things through all the way all the time. So, no, it's very impulsive. That's funny. It reminds me the phrase, hold my beer, right? Watch this. Hold my beer thing. Hold my drink. Oh my. That's great. All right. Well, let's jump into some news items.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=222s" target="_blank">3:42</a> Tommy, what did you find across the worldwide internet? I'll grab the link here and copy it and put it in the chat as well. Equally as excited for this, too. So, as much as I am on the plane of family matters, Zoe, who's been on the podcast, released a great Power BI Pacific blog and it's about a deep dive into Direct Lake and editing models in Power BI Desktop.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=248s" target="_blank">4:08</a> And I know you also just did something about this and what a perfect time to have this article out here because Mike, I've been diving into this myself, seeing this on both the preview, trying it out and just testing the waters out here.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=264s" target="_blank">4:24</a> But this is something that I'm not going to put in the game changer category. Again, we save that for very, very rare gems, but this is the tier below to me. This is just a tier down. Still really significant to me. What's your thought?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=278s" target="_blank">4:38</a> Very significant. Well, I like what they're doing here. So, one thing, there's a couple things that are happening in this blog post. You'll notice one that Zoe is connecting directly to OneLake. Traditionally when you create a semantic model, you go into the SQL analytics endpoint and you would create a semantic model which would talk OneLake through the SQL endpoint directly to the OneLake tables.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=302s" target="_blank">5:02</a> What this is doing is something slightly different. It's directly connecting the semantic model to the OneLake tables and skipping the SQL Server analytics endpoint which is very interesting. You don't get some — there's some interesting things like if the model gets too large or there's too many data columns requested you run out of memory.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=324s" target="_blank">5:24</a> Sometimes your direct tables will fall back to direct query which could slow down the report but it's supposed to happen temporarily and then as the model reduces in size it could speed back up later on because it can cache the data again.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=338s" target="_blank">5:38</a> So this is a very interesting feature. I really like the idea of this one. Tommy to your credit here, this is a major — I don't think you can do this build of this type of model inside the service at this point. You can't edit it there, you can only do this exclusively in Desktop for now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=358s" target="_blank">5:58</a> Maybe at some point we'll get a TMDL editor in the web where we could actually do the change over to this thing but for now this is a pure Desktop only type feature. I really like it and it's efficient and I think this is the big part of this — this is why I still harp on desktop applications because the browser, listen Mike I'm with you, the majority of builds I do on not just Power BI but other things are web based.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=387s" target="_blank">6:27</a> Also and I get it but here's the thing, when you have a desktop application the reason why it's so efficient is because it's devoted to one purpose. It's devoted to, in a sense of Power BI Desktop, building reports, building semantic models. And man, I was just cruising through this and to me this is a big win for people who are just devoted to Power BI.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=408s" target="_blank">6:48</a> Because this allows them — it's like well I don't have to worry about it but the whole build that has to happen in the web, well I can be in a familiar area and environment and I can be just as efficient and I can build these semantic models that again also have that same life cycle.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=427s" target="_blank">7:07</a> So, there's a lot of big wins here that to me if I'm building a team and once this goes out of GA, this would absolutely be part of my process. Yeah, I would definitely test this out. This is a feature that I think you're going to want to use or leverage a little bit. Zoe also talks about how you can transition between using Direct Lake on SQL Server versus the Direct Lake on OneLake in the steps.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=463s" target="_blank">7:43</a> Which is really important because you're going to have a lot of models out there if you've been testing this already with Direct Lake. I think Direct Lake is the right approach, I think it's very efficient. I really like the idea of not having to import data for my semantic models. I like doing that compression mode or compressing the data before it gets to the semantic model and that's really what this whole Direct Lake really is doing.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=493s" target="_blank">8:13</a> It's basically letting the semantic model read directly the lakehouse data but having to read it row by row, recompress it, and put it back in the import model. So there's probably a lot of people doing import right now today. This is definitely something you're going to want to put in your toolbox in the future.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=501s" target="_blank">8:21</a> So that I was going right there. Mike, put your HR hat on. You're interviewing people. At what point does this feature become something if you don't hear it from a candidate, you're going, I don't know there yet, but I don't think we're there right now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=518s" target="_blank">8:38</a> Yeah, I agree with you. We're getting there. If someone said, "Hey, I've been dabbling with Direct Lake. I know how to create Direct Lake models." This also speaks to a little bit to if you're hiring someone, do they listen to the blogs? Do they understand the value of what's coming down? Are they getting information from sources that are helping them decide what is important and what is not important?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=539s" target="_blank">8:59</a> To the end of the degree, Microsoft builds a lot of features. There's a lot of things sitting in preview. Which ones are really going to be impactful for you long term, right? I think this feature is one that's very impactful. I think TMDL editor is incredibly impactful. There's a lot of things that are coming out that Microsoft's producing, especially in the Fabric space that I feel are major game changers.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=561s" target="_blank">9:21</a> One of them being materialized views. I think that's a really big win for us here in the Fabric space, but I've gotten a little bit of pushback from people who don't understand what the feature is and they're like, "This is not — we're not gonna be talking about this in a year." I'm like, "Yeah, we are. This is going to change how you build things."

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=576s" target="_blank">9:36</a> So, if I'm hiring someone, to your point, Tommy, I'm going to listen to what they know and are they keeping on track of the current trends and features that are coming out and do they really understand what features are going to be a big win for Power BI developers. They may be harping on something that's very minor and a very edge case space.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=597s" target="_blank">9:57</a> Then I might say, well, maybe you're not really grasping, you're not really doing the work and figuring out what features are being built that really help you make your day-to-day job easier. Does that make sense what I'm communicating there?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=607s" target="_blank">10:07</a> I agree. And I think I possibly have a slightly warmer take than you on this because we know this is the way the direction we're going and it's very equivalent to when Power BI came out. It's like, well, you could use Excel and Power BI, that's fine, but that's the only thing you're working on.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=624s" target="_blank">10:24</a> I want to see a little more and to your point Mike, for me I'm looking at this now and if I'm hiring and I'm hiring an expert in Power BI, in three months from now I'm expecting them to say

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=638s" target="_blank">10:38</a> now I'm expecting them to say this is the preferred way to go like this is the preferred method it's not we can't use it universally for everything now we understand that but I want to hear I'm going to want to hear this is the preferred method of getting data into PowerBI desktop I'd agree. Again, this is this is also still bringing there's a lot of things that are getting fixed here as well. Like so within this direct lake mode, you can pick different tables from different lakehouses and it all acts like the same island. I'm going to use some terms that's sign there's some terms I'm going to use here that are very spec

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=669s" target="_blank">11:09</a> PowerBI specific if you really if things. but the idea of like these islands inside the data model and anytime you have to span between two different data islands, basically a data source inside the semantic model, things can get really slow and there's just some friction there of how the semantic model needs to talk to these different islands of information. The fact that I can have seven different lakehouses and seven different tables and all of it acts like it's a strong relationship in one island, that's incredibly powerful. And I think also, I'm not sure if this

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=701s" target="_blank">11:41</a> feature is out yet, but they're going to start announcing like import mode with all the direct link tables as well, which is another big win. So again, the feature gaps getting are closing and closing and closing between the direct link experience and desktop. And that's just in my opinion that is the right direction to be moving. We're going the right way. Quickly, I want you to repeat that too because I think that's the feature here that is probably the most underrated, but I think it's going to honestly have the biggest impact and that's the fact that I can

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=732s" target="_blank">12:12</a> connect to multiple lakehouses and the tables there. So, repeat that again because this is important. Yeah. So, imagine you had two different lakehouses. Maybe one is just a bunch of dimensions that you're building from somewhere and a separate organization had maybe some factual data or maybe it's HR or sales operations, right? These two lakehouses can be two totally different environments. They could even be two two different workspaces for all I care. Right? If I build a semantic model, I can now grab data from both lakehouses separately. And then inside the semantic model, it loads the

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=765s" target="_blank">12:45</a> data using direct link and it hashes the information and it runs everything just as fast if it if it was all in one place. That's a major win for us. And for those like Donald who's on the chat here as well talks an immense amount about building like that data warehouse of the common dimensions the the dimension for product the dimension for time like there's some common pieces you're going to want to reuse over and over again. Now you can make a single lakehouse that has some of those common dimensions in it and you can just pick and choose what you want

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=796s" target="_blank">13:16</a> and add it to other lakeouses or other areas where you want to have fabric fact tables in them coming all from fabric. So that again really big shift here I think is coming and I think it's going to really change how you are able to build models is going to give you a lot more flexibility which is great. That's what we want options. I'm already adding this to as a new ep as a another episode idea, but to me, this is going to change how we build lakeouses or the concept of our design for a lot of workspaces. So, we'll we'll

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=827s" target="_blank">13:47</a> save that for another episode, but dude, that feature is awesome. I do enjoy it. Also, that being said, let's jump in to our main topic for today. Oh, there we go. We have another call-in today. our callin today is, "Welcome back, Ginger. We're happy to have you back on the podcast again this week." Great. This was a lot of fun last week. Really happy to come back again this week? Well, we're extending the topic again. You heard as we were kind

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=857s" target="_blank">14:17</a> of noodling out the topic for today. Is now the time for a data scientist to start switching to fabric? Do we have enough features? has fabric become enticing enough for that external user to show up and get that same rich experience they were building in other places that they'll now see in fabric. So Tommy, kick us off. Any other key thoughts or or notes here you want to just get us started with the topic and then we'll take it from there. And I think this is a great segue from our previous episode because we talked about should data scientists in our last

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=887s" target="_blank">14:47</a> episode we talked about should data scientists look at PowerBI. Correct. And we're focusing, we're shifting now to is now that time for really organizations to start moving data scientists into fabric. We've talked about a lot of the features, but I think to your point with a lot of the advancements around the lakehouse around one lake to get data in. The way that I would like to propose this to you guys and how the conversation goes is what I like to bring up is what I call the data zar. If you're in charge of the company, you're

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=918s" target="_blank">15:18</a> in charge of the data. Well, how would you actually get data scientists to start using fabric? We know there's a culture thing. We know, we've talked about already, we've hammered on the behavior. We've hammered on their academia. We've hammered on their preferred method of tooling and choice and process. But I would venture to say and I'll venture to say for this episode too that there are more than enough features from a data storing snapshot point of view right now in fabric that a company can

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=951s" target="_blank">15:51</a> make the shift to getting their team to get on board with data data science and fabric. How do you do that? Like and how do we if we're going to get them on board? What's that look like? And I that's really how I want to frame the conversation today. So I'll open it up there. Just the initial thoughts on how do you see the perception right now of fabric and data scientist that overlap because we know it's still in a very early stage. Ginger maybe you should take from here a

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=982s" target="_blank">16:22</a> couple your spot. One thing that data scientists are are continually struggling with is getting all of the data. And so basically one lake is really I think the biggest thing that Microsoft tried to do with fabric one place the one place to rule them all as it were but seriously trying to find all the data and then making sure that the data is getting there because data scientists are oftent times they have a very small part of the whole world. They tend not to be very

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1015s" target="_blank">16:55</a> well from what I've seen they're not very politically connected unlike say Excel jockeyies who are the most politically connected group within the organization because yeah I'd agree with that. Yeah. And I'd also argue who who has the ear of those executives right? It's it's usually people that are doing some fairly heavily analytical things maybe at the top and maybe there's a data scientist attached to a seale individual who's doing some maybe experimentation on things or but usually that's those data scientists are attached further down the

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1044s" target="_blank">17:24</a> organization they're not up at that higher level and to your point Ginger a lot of those upper echelon individuals right that are feeding data and information to executives they're all living in Excel at this point right they're not necessarily jumping into PowerBI I think let's I'm going to pull a a little bit of my experience like when I worked with some some data teams really it it leads it hinges on that leader level right that second layer beneath that executive sea level branch right our

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1074s" target="_blank">17:54</a> directors our VPs pushing for an analytical culture that's going to drive for hey we need some power reports around this hey we want to do some test or experiments for data scientists I think that layer of political power can start drawing the data scientists into the fabric experience. So, let me just give you quickly, Tommy, to answer your question directly around what entices the data scientist to get here. I think Jinger, you're spot on. The the lakehouse is a great point to say, hey, you guys need

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1106s" target="_blank">18:26</a> this thing right here. the first question should be, hey, we need to get data to the data scientist. The first question should be, how can we bring it to the lakehouse first? That's that's the first question. And if it doesn't get there, we don't report on it historically and we don't give it to data scientists to do their other stuff as well. I'd also argue here in other pre fabric spaces, right? We would have this like SQL serveresque thing you had to pull stuff from. And sometimes those SQL servers have raw data in them. Some of them didn't. Some of it already

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1136s" target="_blank">18:56</a> pre-formulated. It' be aggregated. Maybe it's in staging tables and they don't live on a long time. And you get the data warehouse. And I think to your point Ginger, we made this I think note last week sometime which was we want that raw data for data scientists. So I think this whole story of the medallion architecture and what I like to draw out is okay team here's our standard reporting. It goes from bronze to gold. Gold is curated and we're ready to give that out to external users. But data scientists don't necessarily want to hook into gold. They maybe want to hook

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1166s" target="_blank">19:26</a> into maybe some stuff in silver but ideally it's probably more in the bronze layer. Just give me the raw data. Let me filter out what I don't need. Keep in what I want. Give me the closest amount of data that is where it's originally generated from. I think that's the opportunity here. I draw the medallion architecture and then I draw other little items or lines off of that and say we can actually have a separate workspace that pulls data specifically from shortcuts that go to the bronze layer, shortcuts that go to the silver

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1197s" target="_blank">19:57</a> layer. And you really do want the data scientist building something in a vacuum until they get to a point where this is operational or we want to bring it back into the normal pipeline and then you hand off their work to a data engineer and the data engineer says, "Oh, I understand what they're doing. I'm now going to implement that into my normal pipeline." And so I really do think this we call it data science cuz there is a level of experimentation and I have found there are you you walk into it like a science experiment. I have a hypothesis. I theorize that

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1230s" target="_blank">20:30</a> if we did this this output would come out of it. And so then you go find the data for it. You shape the data. You play with it. You do things. And sometimes you come out and say okay my hypothesis was right. I'm able to actually predict or forecast or do something with the data. And other times you'll find your hypothesis was not right and you may have to spend a week or two getting through a project and realizing we have to rule this out. We're either missing data, it's not working, the correlation that we thought we had isn't actually there and actually lean into the data. So sometimes we have

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1262s" target="_blank">21:02</a> to throw away some of this work that's on the side that the data scientists do. It's not going to always be 100% spoton every time. At least in in my experience. Ginger, what do what do you think? Have you seen that as well? Well, definitely because I actually was at an insurance company and I was

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1276s" target="_blank">21:16</a> I was at an insurance company and I was analyzing their data and they had this hypothesis that if you had an insurance writer, then you would be less likely to move insurance if they raised rates. Well, that turned out to be wrong because if you're smart enough to know that you need an insurance writer, you're also smart enough to go fishing for better rates.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1298s" target="_blank">21:38</a> They did not like that. But I challenged with data their existing supposition and so many reports were generated in addition to the ones I initially created because they're like no it doesn't work like that.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1314s" target="_blank">21:54</a> But here's the thing too, one of the things is that I also used data science on streaming data. So I had data from delivery trucks and they're delivering concrete. They got positional and a text stream every 10 seconds.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1335s" target="_blank">22:15</a> Well, where's that gonna live? It should live in the cloud because otherwise what are you gonna do with that? Now, most of the time they don't need that data. But let's just say hypothetically speaking that there is an accident. Well, you may not hear from the lawyers until 120 days. It's a lot of data.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1358s" target="_blank">22:38</a> So where's that data live? And then the data scientists would need to go analyze a lot of that. Then you statistical analysis, all sorts of things, but they have to go get the data to find it.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1367s" target="_blank">22:47</a> And that's one thing that's cool about the whole including SQL DB inside of Fabric because they're encouraging app devs to write stuff there. And when people ask data scientists, okay, go get the data, they're like, but if it's more like, hey, we know what's in here somewhere, that's much better. Go for it.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1387s" target="_blank">23:07</a> Yeah. Then it's all a matter of just getting permissions to it. I feel like the data scientists were going to have the hardest time getting on board though.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1394s" target="_blank">23:14</a> And Ginger, tell me how much this resonates with you. Actually, Mike, too. One of my first jobs, I coined a term called the spectrum of light. And it seemed to be the farther you got from the C-level suite from a technology point of view, the darker those offices got.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1412s" target="_blank">23:32</a> To the point where the IT room was you didn't know if anyone was in there. You're like, "Hi. Did anyone see if the website?" "Oh, you're here. I didn't see that." And the technology and the computers they were using were so, I mean, no one knew what it was, but no one cared because it worked, right?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1426s" target="_blank">23:46</a> Compared to the business analysts who maybe were next to, by the hip with the C-level. Well, they had to use the right technology because that's what the C-level was using. That's what the company was using.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1438s" target="_blank">23:58</a> But the farther you got from the business, for whatever reason, it just seemed like those rooms were dimmer and the technology was more foreign. But no one could complain because that's what worked.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1451s" target="_blank">24:11</a> I swear they were using MS-DOS in the IT room and it was something that looked like the Matrix, but no one cared because well, they were the only ones that knew that.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1460s" target="_blank">24:20</a> And in the data science world, well, I feel like they're the darkest room out of all the personas that we've talked about because I don't know what language you're using. I don't know even what tool you use. Is it that notebook thing or is it some weird Python or R?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1475s" target="_blank">24:35</a> That's still, but you give me the results that I need so it's fine. So they live really can and have lived in their own process because no one's really fighting back or pushing them to say I know you've been using X, Y, and Z.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1489s" target="_blank">24:49</a> But new person came in and they're telling you to use this. How much does that resonate with you still today?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1496s" target="_blank">24:56</a> Well definitely the C-suite says what tools you're using. I mean, I was recently at a customer and they were ticked because the data scientists were told they had to use Fabric and the reason that they had to use Fabric is because they didn't want to deal with multiple bills and they wanted everything in their Fabric tenant.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1516s" target="_blank">25:16</a> So, they were trying to figure out how they could not use it, but they were going to use where all the data was because they didn't have a choice.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1525s" target="_blank">25:25</a> So again, I think a lot of the times when I'm trying to convince people of going to Fabric or using Power BI or these other experiences, I think it's a lot around showing people what their current process looks like and then showing them the reduction in friction when you go to the new system.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1539s" target="_blank">25:39</a> And I think we're finally at a point where we're starting to get the whole materialized views coming out. I think that's a major win for us just in general.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1549s" target="_blank">25:49</a> Let me say this way, the pipeline of information, how easy is it for me to bolt on features or things that make this easier for us to use and consume as a pipeline? The thing a lot of times that I've experienced was when data scientists were doing things they would go in a vacuum.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1568s" target="_blank">26:08</a> We had one that was building R inside a SQL server which it could run on but it just became like that one machine had to be, let's call it, a failure point, right? If that machine didn't run, the predictions couldn't do their job and it was a single machine somewhere in one area and only one person was able to have the knowledge of that item.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1587s" target="_blank">26:27</a> Right? I think the idea here is whenever I've worked in either heavy data engineering or data science like things, it's always in a cloud tool. Everything seems to be moving, that whole ecosystem is moving cloud. Less and less is being done on my local machine, which is great because I don't need a bigger machine now locally. I can just go use something from the cloud.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1608s" target="_blank">26:48</a> But do you think, let me just add another side note here, Jinger, do you think data scientists are going to like these new AI functions that are coming out there?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1616s" target="_blank">26:56</a> My hesitation is I think they're not going to like them because there's no way to tune them or tweak them or adjust them a lot. I think those are more for business users. So, I don't think that's going to be an attractive piece of this for data scientists. What are your thoughts on that one?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1629s" target="_blank">27:09</a> I totally agree. They're not going to look at the AI features at all because in their mind that has nothing to do with what they're trying to do. Even some simple data prep stuff though, like if there was some simple things they could just whip out like, hey, sentiment analysis, just use this function, just do it and just have it there and have it be a supporting element.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1647s" target="_blank">27:27</a> Or sentence model. No. Okay. All right.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1651s" target="_blank">27:31</a> Mike, real quickly, there is the Azure OpenAI that you can tune yourself but I don't know if those worlds are overlapping yet, the AI Foundry and the data scientist.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1663s" target="_blank">27:43</a> Well AI Foundry is coming from Azure Data Studio. There's still features there that I think exist that don't exist in Fabric yet, right? There's still a big feature gap at this point but I think we're starting to see Azure ML Studio, what do they call it now? They keep changing the name on me at this point. Azure Foundry now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1684s" target="_blank">28:04</a> So it feels like they're trying to bring more of those features to Fabric to bring that audience over which does make sense I think.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1692s" target="_blank">28:12</a> Sorry Jinger, go ahead. I was going to say definitely it's something that they want to do. But one thing that data scientists have always in my mind fallen down on is the "all right I have this thing, now let's put this in production." Let's analyze our customers nightly or monthly or whatever and then it's like, how's that gonna happen?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1714s" target="_blank">28:34</a> And I do think that actually Azure ML has a better solution for that than Fabric does. You can create a module inside of Fabric but oh by the way it's not in source control because source control doesn't support experiments or store models.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1732s" target="_blank">28:52</a> Does Fabric have, so there's MLflow. Right. So that's the new technology, but isn't MLflow an open-source library anyways? Yes. So how does that help me understand? I haven't played with MLflow a lot. I just know of it, but how does MLflow work with Azure Data Studio and do you see this coming forward and maybe that comes over to Fabric as well? It feels like that would be a good fit honestly.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1760s" target="_blank">29:20</a> Well, Azure ML Studio has always been an interesting product that has had different directions. When it first came out, it was to help people learn data science and machine learning and then it was no no we want it to be where everything is managed. Now I don't see a lot of the management that's still there inside of Fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1789s" target="_blank">29:49</a> And MLflow basically allows people to do a lot of things. You can do MLflow inside of any notebook. All you got to do is write the code for it. That's not a thing. And the libraries are good. So all the extra libraries that Microsoft has created, those are getting use, but they existed in some sense before Fabric, they just moved them to Fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1826s" target="_blank">30:26</a> But Fabric's not supporting models because there's no support for them. They can't even be in source control. Yeah. And this is the idea, when I was working on a data science project recently, they were talking about the idea that we need to snapshot the data. We need to know what time and date that data was created and then we need to know what parameters were used to train that model.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1846s" target="_blank">30:46</a> Because if they were doing additional changes or they wanted to revert or retrain based on some new information or new data, they needed to know all the snapshot in time of that trained model so they could rebuild it again.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1858s" target="_blank">30:58</a> Yeah, there's a lot of things. So the question is will Fabric adopt the additional elements that are needed for data science? Because right now I can put the code in there and once I've got a model yes I can deploy it but am I managing the model? Yes you can snapshot data anywhere but it doesn't contain anything other than yes you can write the code here, you can connect to it here.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1886s" target="_blank">31:26</a> That's a really good point. Yeah, I'm looking at the docs on this one. It looks like there's a run that corresponds to a single execution of the model code in MLflow. Your tracking is based on your experiments and the runs. It looks like you can pull that forward and you can use it inside your notebook experience. So the code exists, you can use it but to your point once the model's done...

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1913s" target="_blank">31:53</a> To your point, once the model's done and completed there's no "hey I'm going to punch this one out, I'm going to create the pickle file." You create the pickle file of the model, save it somewhere, snap a version to it and say okay this is what we're going to save on as a version.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1928s" target="_blank">32:08</a> Right now all that to your point, all that has to be managed on your own. You'd have to create your own repo, put a place where all the models live, store the metadata yourself. I guess it's technically possible, but you have to know what you're doing and you have to build your own process around all the model management, which one's in production, which one's not.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1949s" target="_blank">32:29</a> And then I guess you could also hot swap out because they do things where if you're doing real-time training on data, what is it, challenge master version of this, right? You have a single model that's running and you run new data on the side and if the new model performs better, then you switch out the models or not.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1965s" target="_blank">32:45</a> There's all this other tuning and performance there as well. Yeah, you always look at data direct. And I think the big rule of thumb is one, nothing data scientists do is just out of the box. It's all custom.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1976s" target="_blank">32:56</a> And then two, could you pay someone right now to be a data scientist only in fabric? And we're probably not there yet. You could do data science things in fabric, but you're not going to be paid full-time just to be a data scientist in fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=1991s" target="_blank">33:11</a> I think we're getting closer to that moment though. I think we're not maybe 100% of the way there, but if you're doing some maybe lighter weight things, maybe yes. But if you're doing anything with GPUs, fabric's not going to be your cup of tea because there is no ability to turn on a GPU and do anything with GPU level training at this point.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2019s" target="_blank">33:39</a> Yeah. So there's a big gap between that. If you're doing image processing, transcript extraction, those things are not yet existing today. You can't get those out and use them inside fabric today.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2031s" target="_blank">33:51</a> This is a good segue — oh go ahead Ginger. I was going to say you just end up with a model and you can deploy, you can use the model in fabric. Okay. Yes. You're not managing it, you're using it. Yeah. Okay. I see what you're saying. Makes total sense.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2045s" target="_blank">34:05</a> I think it's a good segue. I want to propose to you guys a little exercise. And to your point Mike, this is something I brought up before but we're all going to be data and we're at a pretty big company and your task is to get our data scientists to work full-time in fabric and to get paid for working in fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2065s" target="_blank">34:25</a> So this is dealing with the people, dealing with the process, dealing with the technology, our core sweet spot here. So what I want to propose to you is being the data czar at this company, Contoso or Van Arcel, wherever you want to be. How do we start this process, get the ball rolling to be successful with data science and fabric?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2089s" target="_blank">34:49</a> So Ginger I'm going to kick it off to you and I'm going to say where's that first step and what's that strategy look like that you're proposing? Here's how we're going to get data science and adopt fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2100s" target="_blank">35:00</a> Well basically, I'm going back to the thing that the data scientists like the most, is one lake. And they spend a lot of time gathering and finding data. It's like look, all the data is going to be here. And so you can access the data here.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2118s" target="_blank">35:18</a> So that is every single data scientist because it's like cool, I've got access to the data that I need to do my job. And then it's like okay you can write notebooks but you see, you can't do everything a data scientist needs to do inside of fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2133s" target="_blank">35:33</a> You can be dictatorial and say okay well you're going to only write code here because I'm not going to let you, I lock down your machine. And this happens in corporations and so you can't use any tools, so they're like okay fine.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2146s" target="_blank">35:46</a> But I can tell you they use open source stuff to do modeling. If they don't, they won't like it. And then you get a model, you're like okay but this doesn't meet any of our security requirements, right? Because I have to do something outside of fabric because I can't put this in source control. You want source control, right?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2168s" target="_blank">36:08</a> And so it's not — you can make it happen but it's extra steps that you're going to need to do that are not in fabric yet. And I don't know if they're going to be either. I heard that yes, we realize that they're missing from Microsoft, but what else?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2186s" target="_blank">36:26</a> Yeah. Mike, let me shift it to you. What's your first plan? What's your presentation say? How we're going to get the ball rolling with data scientists and fabric, that we're going to make them start using the fabric platform.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2197s" target="_blank">36:37</a> Yeah, I think we're going to start things off slowly. My approach here is going to probably just roll people with a look — the data engineering team or the other teams are going to work extra hard to get all the data to the lakehouse, right? The one lake.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2209s" target="_blank">36:49</a> So I think we're really going to focus down and double down on we're going to try and make it easier for you to consume data from us, right? I think the idea here is we're going to encourage as much as possible and show patterns around removing friction for any data scientist or data scientist team.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2224s" target="_blank">37:04</a> Look, we're going to need you to connect to at least the one lake. That's a strategy I think we can win and stand behind. From there, I'm less inclined to hold people's hands. I really want to have people have the ability or the flexibility to build what they need to build at scale and whatever works with their system.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2242s" target="_blank">37:22</a> I would really encourage the use of Azure based products as much as I can. Azure ML Studio would probably connect to lakehouses. It's like a storage account anyways. So if nothing else, if we can't get people to really jump in and just solely use the fabric experience yet for training models, seeing recent runs, all that extra niceness that's there.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2268s" target="_blank">37:48</a> If we're not quite dialed yet on that and it's not quite existing in the platform today, I'm going to try and keep people in Azure as close as I can to where the data exists. I would really discourage using local machines for doing a lot of data manipulation, transform, flat files.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2280s" target="_blank">38:00</a> I've seen a lot of people just pull CSVs, do a bunch of work, and then spit out a model from there. I get it, it works. But I'd really encourage the team to hey, try and do more of your data engineering in the notebooks, in the Spark space at scale inside fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2298s" target="_blank">38:18</a> And then maybe the last mile thing is, okay, there's a couple features that don't exist. Let's just jump over to ML Studio and Azure ML and work on some things there. So I'd really try and encourage the team as much as I can to use as many parts of it. And the education thing as well — people just need to get comfortable with this.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2317s" target="_blank">38:37</a> And I think the broader story here is there's multiple personas that are all trying to work together here. We have the data engineer which I do think fabric's a great fit for data engineering. We have the semantic model and reporting layers — so I think fabric and Power BI is a great opportunity for that as well.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2335s" target="_blank">38:55</a> It's this middle valley, I guess, that's just a little bit maybe not refined yet. And I do think my opinion here is I think fabric is very compelling for Power BI users, the analysts of the world. Super compelling, especially ones that are advanced and need SQL to go run tables against tables. Awesome. I think it's a great platform for it.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2355s" target="_blank">39:15</a> I think even a bit further than that, the data engineering persona has gotten really good. I think that persona is very well filled out inside fabric. And I think I feel confident now with the things that are coming out from pipelines, copy job features that are coming out now. Now I can run a copy job from a pipeline, or it's recently been announced at Fabcon that you can do that.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2375s" target="_blank">39:35</a> These are big wins in my opinion. This is just going to make it easier for me to bring the data to the lakehouse. That's the right mode. And so the story here that I think continually needs to be refined a bit is okay, how do we bring those data scientists directly into it and where do we bring all of that good richness that we've already used in other platforms directly to fabric now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2397s" target="_blank">39:57</a> So I think the story will get there. It's probably just time needed to get it completed, is where I would sit on this point. Does that make sense, Tommy?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2407s" target="_blank">40:07</a> No, those are essential points. Because honestly Mike, to your point, we almost want to use the darker room to our advantage here because it doesn't have the same light or the same headway in a business — who data scientists are and more importantly what they do, that's not seen by the entire business the same way what the analyst does because it's the report, they're much more visible.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2430s" target="_blank">40:30</a> So for me, I'm using that point Mike to my advantage where I'm taking a chapter out of the Power BI adoption. And I'm taking the point where I have a little more leeway in terms of that unknown of what they do. So really, I have to sell it to two audiences. I need to sell it to the business that we're going to use fabric for data scientists, but more importantly, I need to sell it to the data scientist.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2456s" target="_blank">40:56</a> And what I'm going to do is I would put together a pilot. I'm gonna identify, obviously one lake's going to be that first step. I think we're all in agreement there. And to say hey, 90% of what you do is cleaning data. How can we alleviate that for you? What can we clean just to get you a little farther there?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2476s" target="_blank">41:16</a> I know you want the raw data but what can we do because we have the ability now to quickly get you the right data. And then honestly because we don't have the user story yet with data scientists, not nearly as mature as the data engineer, the analyst, I'm going to identify a champion, someone on the data scientist team.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2494s" target="_blank">41:34</a> Say look, I'm giving you and your team ten hours, five hours a week to find me the best process, what works best in fabric. You're the person going to know. I'm not telling you you have to use all the fabric features or you can only work in fabric, but I'm asking you to try to work that into your process and your workflow and you tell me what works best.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2516s" target="_blank">41:56</a> Hey, those notebooks actually, because now maybe it's available in git, it works great for you. So I want the champion, someone from the data sciences team to tell me all the features with data scientists that work the best and that's what we'll start implementing.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2530s" target="_blank">42:10</a> Because honestly we don't have a mature story yet. So I'm going to want to hear from the source. I'm going to want to hear from the expert on, these four pieces of data science and fabric are actually powerful. They're really helpful. They are better than before.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2543s" target="_blank">42:23</a> I'm a huge proponent — in any product that comes out, technology or your phone, it has to do something better than the

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2550s" target="_blank">42:30</a> Has to do something better than the other thing before or has no reason to exist. Just like my iPad's better on reading than my phone is, that's why the iPad exists. So with data science, tell me data scientist champion, what does this do better?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2565s" target="_blank">42:45</a> And that's where we're going to push for. Let's be real, Tommy. Your iPad exists so you can play Block Blast, not for reading. I'm not on the — I have two fat fingers for gaming on a touch screen.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2580s" target="_blank">43:00</a> My iPhone and my iPad are made for my children who always ask me, "Dad, can I play on your iPad for a little bit today? Can we play some Block Blast today?" I'm like, "Oh my gosh, this is absolutely not made for Italian hands. Way too greasy."

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2611s" target="_blank">43:31</a> It just does not work. So, there's pasta all over your screen on your iPad. Yeah. Is that what you're saying to me? Oh my goodness. Your iPad smells like oregano. Okay, I got it. Rosemary.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2645s" target="_blank">44:05</a> Excellent. Well, let me add another note here, Tommy. You're saying things and Jinger, I think you're also saying some really interesting things here as well. One area that I'm very much familiar with here is this idea of a custom workload.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2676s" target="_blank">44:36</a> So there is workloads that now exists inside Fabric. And so Jinger maybe to your point here is the story of the data scientist — and Microsoft has their version of how they want the data scientist to work with Fabric, but there's other programs too. There's open-source programs. There's SPSS, right, that's one of the other data science or machine learning type programs that are out there.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2701s" target="_blank">45:01</a> What's to stop them from building their own custom workloads that you can bolt on their products, their experiences directly into Fabric? And that way you get all the richness that you had as a workload.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2716s" target="_blank">45:16</a> So I'm thinking here, I'm taking what you guys are saying and I'm trying to extrapolate forward. Okay well if Microsoft is not going to build it as fast as we want, there's probably an opportunity for a third party company to come in and say, hey, we will build our data scientist solution inside Fabric and then you can bolt on what you need from these other proven, well-known, common data science tools, right?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2745s" target="_blank">45:45</a> So, I think there's an opportunity here. Yeah. So, SAS — Donald, yeah, another one. There's SAS is another one. And Jinger, you said was the other one you said? Data Robot. Data Robot. So, there's other things.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2757s" target="_blank">45:57</a> So, I think there are potentially opportunities for these other solutions to come in and say, look, we know you need to do some data scientist work. We already have a solution that is a standalone product, but let's integrate that product directly into Fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2771s" target="_blank">46:11</a> Now what you can do is you can bring this rich understood tool into the context of a user and now it's seamless. The data just shows up. It's a one button click. Go grab your data from the lakehouse.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2786s" target="_blank">46:26</a> So if you're a developer of things, I would actually encourage you to look at workloads if you are a data scientist person or developer because I think there's actually a gap here that you potentially could fill and potentially fill it faster than Microsoft does.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2798s" target="_blank">46:38</a> Sorry, I didn't mean to riff on a tangent there. I didn't even think about that. But if Microsoft really wanted to encourage data scientists to use Fabric, if they worked with a known third-party tool company that does AI to say, "Here, we're working with Microsoft on this." That would go a long way in solidifying their experience for that.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2822s" target="_blank">47:02</a> Just like I think that adding Databricks really helped Microsoft's story — like no, we incorporate everything. So, we've got Databricks, we got Snowflake. Where's the third party data science tool?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2837s" target="_blank">47:17</a> Yes, libraries, but libraries is like no effort. Yeah, you can do Hugging Face. But something more tailored to data scientists would really, I think, show Microsoft's commitment to that community inside of Fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2854s" target="_blank">47:34</a> That'd be a great idea. Mike, not only do I love that idea, but I'm gonna sign off early so I can do some vibe coding with Cursor to see if I can build a workflow to do something like that. This is phenomenal.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2867s" target="_blank">47:47</a> And man, what a good segue too, just all the products here. But to your point Tommy, why wouldn't there be — like to Jinger, I love your point here. We're actually noodling out the features and I know some Microsoft people listen to, so Arun if you're on the call here — how can we vibe code Hugging Face into a workload?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2887s" target="_blank">48:07</a> So for those who don't know, Hugging Face is an amazing library of just trained models on things. Microsoft has them, Google — that's easy. And then the idea is how quickly can I get from there into Fabric, that's the challenge, right?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2904s" target="_blank">48:24</a> So, does someone think about what does that experience look like? How can we get a workload created that would help assist with that? So, the data is already in Fabric. We just need the workload to bring these other technology pieces closer to where the data lives. So, that's an opportunity there, I think.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2922s" target="_blank">48:42</a> And I'll put for those who don't know what Hugging Face is, I'll put the link out here for that as well. Weird name and a lot of llamas. That's the best way to explain Hugging Face.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2930s" target="_blank">48:50</a> So, but I still think no one knows what you're talking about. It's the new Apache — you can get in there, the dumb name, right? It's the AI for GitHub. But no, Mike, there's a lot to be said about this because listen, we know that not every persona is going to get the same love at Microsoft. That's just how it is.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2954s" target="_blank">49:14</a> And it's because resources, time, but also to your point, you're dealing with a persona that's very custom. Nothing that they touch — and every data scientist I've dealt with and every project I've dealt with, it was never like, "Oh I'm gonna open it and use it as is." No, gotta tinker — it's got to be my model, our model, our team.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2974s" target="_blank">49:34</a> And so that's especially in that Fabric workspace not an appealing story, but this workload idea too — like Mike, I love what you've done. I use the theme generator in the workloads a lot. It's cool and then that integration is a huge part.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=2996s" target="_blank">49:56</a> So, and it doesn't have to be your entire workload in a workload so to speak, or your entire process, but you would give the data scientists in that team just a piece of it or a good portion of their product or their process in a workload.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3012s" target="_blank">50:12</a> Yes. Jinger, do you still see people going, "No, no, even if there's a stop gap, if you were to give them 50-60% of their tooling in a workload, what do you think the reaction is?"

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3026s" target="_blank">50:26</a> Great. But a lot of them think, well, I don't need a workload because I know this already. But I do think that it would show — again, we're going back to the data. I think it would show a level of commitment to data science in Fabric that may not exist at this point.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3047s" target="_blank">50:47</a> And so it's not just, oh, will it help out the data scientist, because they would argue — like for example, you can never do the data engineering for me because nobody else wants the data like I want it. One hot coding doesn't help anybody's report.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3063s" target="_blank">51:03</a> But I think it would show that Microsoft is more than surface level interested in data science. And to be honest, right now that's what I see. I see it's very surface level. Yes, you can make it work, but it's a minimal effort and you probably are better off using something else.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3083s" target="_blank">51:23</a> All right. So let's go six feet into the water then. What area from the data science point of view and even a little technical here — where would a workload be the most impactful? Like what type of workload would be the most impactful for a data scientist right now? If they saw X in the workload feature, where would they go? That's awesome.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3103s" target="_blank">51:43</a> If it made it easier for them, if it was brainless for them to deploy it. If deploying was a walk in the park, deploying really, that would be the one.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3111s" target="_blank">51:51</a> Interesting. I think I would agree with you on that one too, Jinger. I think there's a lot of friction with getting something tested and started. And I would also maybe add to not only deploying but the running multiple models at the same time and discerning which one is performing better than the other one, right? Getting scores, having analytics against that.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3134s" target="_blank">52:14</a> So yes, getting one into production. It's a one button press, we're into production, but we're not going to stop data science. The data is going to change. It's going to drift. If you're doing fraud detection, right, fraudsters are smart. They're going to move locations. They're going to do something different, right?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3157s" target="_blank">52:37</a> So the data will need to change. Therefore, your models are going to need to be continually updated and retrained on net new data about what is fraud and what is not a fraud. To do that, you need a data pipeline not only just of the data, but you need a pipeline of the models and how you're continually updating them and moving them through and testing them.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3176s" target="_blank">52:56</a> I think yes, deployment is definitely the part, but I would also say having ample records and the process to bring in other net new models and then easily swap them out for the best performing model at runtime would be something that I think would be also very relevant there as well.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3195s" target="_blank">53:15</a> I still think we're at — to some degree we're still trying to get some of the basics figured out. We still don't have GPU level machines and some of these things from Hugging Face are going to require a GPU cluster. So that's something else that I think Fabric needs to bring.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3215s" target="_blank">53:35</a> Right now we have a memory optimized cluster from Spark. That's all we get. I think we need a bit more options, especially for those data scientists, right? GPU clusters, we need compute optimized clusters and we need memory optimized clusters. I think we need multiple elements of this that have to be brought into Fabric as well.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3233s" target="_blank">53:53</a> So I think there's stuff that's starting to appear. But I think there needs to be more. We need more investment. But again, I'm of the chicken and egg standpoint. If you can't get the analysts and the data engineers happy first, you're not going to want —

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3187s" target="_blank">53:07</a> First, you're not going to get the data scientist happy because if everyone starts moving to the platform, you can't start building those data science level features until all the data is there and it's running smoothly and you've got the pipelines established.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3197s" target="_blank">53:17</a> I think we're still trying to figure out some of that data engineering stuff as well. Well, to your point, Mike, don't you dare touch your data science GPUs with my fabric capacity. Don't you touch it.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3208s" target="_blank">53:28</a> Talk about CPU usage. I think we could go through the roof if we had some of those showing up. I guess we found something worse than data flows right now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3218s" target="_blank">53:38</a> I don't know, man. Microsoft has got Spark, you can do Spark specific pay as you go model. So, actually I think they've started that. That's a start. That's a good point.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3232s" target="_blank">53:52</a> So, Ginger, that's a great point. It's called Autoscale for Spark. Totally wrong name. It should just be pay-go for Spark. That's the right name for this. Hopefully they rebrand a little bit.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3242s" target="_blank">54:02</a> Spark, yeah. So it's so bad. But you're right, Ginger. I think that does solve that problem, right? That way you can peel out the Spark element and say, "Look, everything else in Power BI or Fabric can run just as normal."

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3253s" target="_blank">54:13</a> You can beat it up with data flows all you want, no problem. But then you pull out the Spark component and it just gets built separately. Which means you can also have much higher clusters running with much more machines and it doesn't impact.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3265s" target="_blank">54:25</a> You don't need this egregious F 512 skew. You can just go, you can use a smaller skew for Fabric still and then get all the compute power that you need from Spark.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3277s" target="_blank">54:37</a> So, I think it's a very wise moment for them to just peel out the Spark piece and just change the billing so it just matches and the price is the same. If you used Spark outside of Fabric anyways, it's the same cost as you would see if you just do Spark for Autoscale.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3293s" target="_blank">54:53</a> But I think that's also a brilliant move on their point is they're already giving you the same price point. So then why would you not just use Spark inside Fabric? I think it also makes more sense there as well.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3304s" target="_blank">55:04</a> Mike, I'm still holding out hope there's Tommy's computer for Spark so that if I can connect to my GPU. But no, I don't think it's ever coming. Tommy, I know.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3314s" target="_blank">55:14</a> Yeah, Tommy's PC for Spark now available to all Microsoft customers. And we're going to need the world's largest gateway to support Tommy's GPU on his local machine.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3325s" target="_blank">55:25</a> Yeah, Tommy's Surface. No, honestly, and I know we're getting near the end, but I think we touched on some pretty significant features where we know right now, and this may be close to my closing thoughts.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3341s" target="_blank">55:41</a> We know we're at a point now with data scientists, and it's like, yeah, it doesn't have the whole shebang. You're gonna have a data scientist who's going to be okay with some features, but we know there's still a lot of things and maybe forever too.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3355s" target="_blank">55:55</a> There's a lot of custom open-source custom modeling that's really only going to exist in the data scientist world because honestly at that point if it was all in Fabric, Fabric would look a lot different and I think that's just going to be the story.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3371s" target="_blank">56:11</a> But there are a lot of opportunities with workloads, with just even OneLake 2 where just to get everyone in the ecosystem, just to get people started in the ecosystem, that's going to be really significant.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3384s" target="_blank">56:24</a> Because I know we touched on the OneLake side of just getting them touching the OneLake data and it's like okay that's great, but I don't think there's ever been in our world that process where the data scientists were also touching the same data the data engineer was and it was following the same stream.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3402s" target="_blank">56:42</a> And this really changes data governance in a really positive way. There's a lot of positives here even on the things we're touching that are available today.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3411s" target="_blank">56:51</a> I agree. I think that's the right story. I think the story is going to continually get better. If anything, I see just from my lens right as being an MVP who's close to Microsoft, they are regularly investing this one and I do think the Spark team is listening really really well right now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3428s" target="_blank">57:08</a> They're listening to the features. They're listening to the pain points. They're listening to where we're having issues. And I feel like just right now from what I see on the road map, a lot of the features are just bolstering the story around data engineering for now.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3438s" target="_blank">57:18</a> I think once the voice of data engineering starts calming down a bit — "I can't see this, I can't do that, I can't, I can't" — once those voices get squelched a bit and then we have the ability for people to start thinking about okay what does the next wave of data science look like.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3459s" target="_blank">57:39</a> What have we done in machine learning across other places in Azure and what of those can we bring to the platform? I think that's really interesting and will be very useful as well.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3469s" target="_blank">57:49</a> All right I think we're going to wrap it here so Ginger thank you very much for your time, I really appreciate all the experience you bring to this conversation. Yeah, let's do a quick final thoughts and then we'll wrap it up.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3478s" target="_blank">57:58</a> Ginger, final thoughts on this topic for data scientists being brought into Fabric. I think that OneLake is really what data scientists are very happy to see. The rest of it, well, I hope that to your point that Microsoft develops a tool set so that they can be fully incorporated inside of Fabric. I don't see that that's there today.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3499s" target="_blank">58:19</a> Okay. Excellent. Let me ask a bit more on your final thoughts. What would you say if you were going to say how long should you wait till you revisit again? What do you think? Are we talking six months, a year? Should we keep tabs on it?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3516s" target="_blank">58:36</a> What's your time frame you think? I'm waiting to see what the focus is on machine learning and Fabric. I would need to see more of a commitment on the road map for features that matter to data scientists and right now to your point it's primarily data engineering. Yeah, I agree.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3536s" target="_blank">58:56</a> Okay, excellent. Tommy, final thoughts. No, I think I put it pretty well, but I think right now even with what we have today, we're getting on the right steps for the integration and the ecosystem where all these different personas are really playing in the same place.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3551s" target="_blank">59:11</a> And I think this is really significant for if you're the data or just an analyst or working with Fabric from an adoption point of view. This is a significant feature that honestly our industry's never had where they're all playing the same data pool and this is important for really all of us to keep in mind.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3568s" target="_blank">59:28</a> I'm going to probably echo some of this. I think my final thought here is look there's a lot of good things that are happening inside Fabric. I really want to encourage other software vendors, ClickHouse, Hugging Face or something else, open source, maybe Tommy can vibe code something together here.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3584s" target="_blank">59:44</a> I don't know. We'll see what happens. But I think workloads is a really interesting gateway to any of these other providers to bring your customer base. Again Ginger to your point, right, let's marry the lake, data lakehouse, all the richness that is already there.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3602s" target="_blank">1:00:02</a> Let's marry that with the best tools that are data science driven already. Let's bring them into the fold and then Microsoft I think will eventually become more competitive in this space. I think that's on the road map.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3611s" target="_blank">1:00:11</a> I think if you look at everything where Copilot's getting stuck all over the ecosystem, they're going to be doing more data science. It's going to be coming — you're going to have more AI and data science all over the product. So I think that's a direction they're heading, but right now it feels like the focus is more on data engineering at this point.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3626s" target="_blank">1:00:26</a> So I'd love to see DataRobot come over. I'd love to see Hugging Face get it integrated somehow. I'd like to see some of the Azure ML Studio stuff just get bolted in as a workload. I'd love to see some of those integration points become a little bit tighter integrated with the ecosystem.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3645s" target="_blank">1:00:45</a> Maybe something where we could have a UI, but it feels like Autoscale for Spark, right? You have other things that are running in Azure that you just get a window to. You have a window into those experiences that are just brought to Fabric.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3656s" target="_blank">1:00:56</a> So, not quite sure how this will all play out in the long term. I know Microsoft's probably got some big visions for this, but I think the conversation is at least starting down more that direction.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3665s" target="_blank">1:01:05</a> I would to answer my own question, I'll give it a good let's revisit this in 6 months. I think in 6 months we should take another look at this again and say where did we land on data science? What features are being added and are there things that we see on the road map in 6 months from now where we really do feel like this could be a compelling story for data scientists to feel more confident?

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3688s" target="_blank">1:01:28</a> I think the confidence level is low right now but maybe it'll get better in 6 months. Awesome. That being said, just thank you very much for your time, we know your time is valuable and I hope this data science conversation didn't bore the snot out of your ears.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3701s" target="_blank">1:01:41</a> Because we have a lot of Power BI people in the Power BI stack and space but we do think this is a very relevant topic and honestly the world's moving more towards data science, big data, Spark. It's going to be part of our worlds moving forward.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3713s" target="_blank">1:01:53</a> So, very pleased that Microsoft Fabric is taking very large investments to make this easier for us. And maybe you are that citizen data scientist that's coming into the space. I think Power BI and Fabric would be a great place for you to begin part of your journey.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3729s" target="_blank">1:02:09</a> And I think it will be a great opportunity long term because I believe this is going to continue to get better. So again, I think this was how I looked at my career when I started with Power BI and Power Query. I thought, "Oh man, I don't know if this is going to be a thing."

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3742s" target="_blank">1:02:22</a> And then it kept becoming bigger and bigger and bigger and it kept growing and growing and growing and I feel like this is potentially the same momentum we're seeing around Fabric and data science.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3753s" target="_blank">1:02:33</a> With that being said, if you love this podcast or even just mediocre like it decently, please share it with somebody else. We really appreciate the feedback and let somebody else know that you enjoyed the topic for today and found some insightful pieces from it.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3765s" target="_blank">1:02:45</a> Tommy, where else can you find the podcast? Well, as Mike said, if you don't hate it, you can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. Share with a friend since we do this for free.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3776s" target="_blank">1:02:56</a> If you have a question, an idea, or a topic that you want us to talk about on future episodes, well, head over to powerbi.tips/mpodcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. and join the conversation on all Power BI Tips social media channels.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3794s" target="_blank">1:03:14</a> Thank you all for such a good discussion. I'm going to be reeling about this now for hours thinking about what can we do here? Maybe workloads is a thing. Maybe Tommy and I should do a live vibe code session.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3808s" target="_blank">1:03:28</a> Can you even co-vibe-code together with something? I don't even know if that works yet. Can Cursor let you? That'd be amazing. This goes on Twitch, I think.

<a href="https://www.youtube.com/watch?v=iL03t9i3gqE&t=3820s" target="_blank">1:03:40</a> So, awesome. Thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
