---
title: "Semantic Models on the Web – Ep. 398"
date: "2025-02-14"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Semantic Models"
  - "Microsoft Fabric"
  - "Direct Lake"
  - "OneLake"
  - "SQL Database"
  - "Workspace Monitoring"
excerpt: "Mike and Tommy dig into what it means for Power BI semantic models to move ‘onto the web’, from editing models directly in the service to live editing Direct Lake models from Desktop. They also connect the dots on governance, versioning, and cost—so you can adopt the new workflows without breaking your production reporting."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dig into what it means for Power BI semantic models to move ‘onto the web’, from editing models directly in the service to live editing Direct Lake models from Desktop. They also connect the dots on governance, versioning, and cost—so you can adopt the new workflows without breaking your production reporting.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/9LyiYSDax54" 
  title="Semantic Models on the Web - Ep.398 - Power BI tips"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Announcing billing for Workspace monitoring | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/announcing-activation-of-billing-for-workspace-monitoring/)** — Workspace Monitoring, currently in preview is an observability feature within Fabric that enables monitoring capabilities across two key areas:&nbsp; Workspace monitoring allows Fabric developers and admins to access...

- **[Edit semantic models in the Power BI service - Power BI | Microsoft Learn](https://learn.microsoft.com/en-us/power-bi/transform-model/service-edit-data-models?WT.mc_id=DP-MVP-5002621)** — Learn how to edit semantic models in the Power BI service, including editing relationships, creating DAX measures, managing RLS, and more.

- **[Learn About Editing Semantic Models in Direct Lake in Power BI Desktop - Microsoft Fabric | Microsoft Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-power-bi-desktop?WT.mc_id=DP-MVP-5002621)** — Describes using Power BI Desktop to edit semantic models in Power BI Desktop.


- **[PowerBI.tips Podcast](https://powerbi.tips/podcast/)** — Subscribe and listen to the Explicit Measures podcast episodes and related content.

- **[Power BI Theme Generator](https://themes.powerbi.tips/?utm_source=videoDesc&utm_medium=post&utm_campaign=tips%2B&utm_id=podcast)** — Power BI.tips - The worlds best theme generator for Power BI reports. Increase your speed to develop stunning reports using this free theme generator. Themes are essential for any report developer's tool belt. Visit...

## Main Discussion

The big theme of this episode is that the semantic model is no longer something you only shape inside a PBIX on your laptop—it’s increasingly something you **build, edit, and govern in the service**.

Mike and Tommy walk through how this changes the day-to-day workflow for BI teams:

- **Modeling is becoming a shared, service-first experience.** Editing models in the Power BI service (and live editing Direct Lake models from Desktop) moves you toward a world where the workspace is the “source of truth,” not a single PBIX file sitting on someone’s machine.

- **Version history and change control matter more than ever.** When the model is accessible and editable in the service, you need stronger guardrails: versioning, validation, and a clear path to roll back accidental changes.

- **The definition of “production-ready” shifts.** It’s easier to make small iterative updates, but that convenience can also increase the risk of unreviewed edits making it into critical models—especially if you don’t separate dev/test/prod workflows.

### Practical takeaway: Treat semantic models like a product

If your semantic model is reused across many reports (or is certified/promoted), treat it like a product:

- Use **deployment pipelines** (or a clear workspace promotion process).
- Turn on **Git integration** where it makes sense.
- Limit who can edit production models, and use **version history** as your “undo safety net.”

### Where this intersects with Fabric (and the data layer)

Even though the episode centers on semantic models, the same pressure shows up in the data layer: once more people can build in Fabric, you need intentional decisions about where shared tables live (and who owns them).

Mike and Tommy discuss the growing set of options—like Fabric SQL databases, Direct Lake, and OneLake-connected workflows—and why the “best” choice is usually the one that makes governance and reuse easiest for your organization.

## Looking Forward

Semantic models are trending toward a web-first, collaborative workflow—more like software development than “one person owns the PBIX.” The teams that win with this shift are the ones that pair the new editing experiences with the boring-but-essential stuff: environments, versioning, ownership, and a clear change process.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

Mike: Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone and welcome to the podcast.

Podcast 398. We are cusping on a threshold here. I didn't think we'd ever make it to it, but wow, we've made it up to almost 400 episodes. This is going to be exciting. I don't know what we're going to do on the 400th episode. I have to figure something fun out.

There is this, the equivalent. I know Saturday Night Live this week is doing their SNL 50. They're doing this.

Yeah, yeah.

Lame. 400, 50, 309 ago. 50 years of Saturday Night Live.

It's, this is, this is as significant and culturally impactful as Saturday—double, triple impactful because this is working with your career and helping you make more money and become advantaging you in many other ways.

No, the Power Man podcast does not endorse money or in any way will help you with your income. This is night Financial advice. Sorry. B included.

Yeah.

Excellent. So jumping in today, our main topic for today will'll be talking about, or unpacking, semantic models on the web. There are some features here, and this is what I was touting since episode number one: we're going to move to the web. It's going to be based in the web, so here we are talking about it again, unpacking what happens when you model semantic models inside har.com. That will be our main topic.

With that, we have a bunch of news and items from Beat from the Street. So, Tommy, you've got a Beat from the Street here. Give us some, what are you learning these days? You got some information here, I think around SQL databases. You want to kind of just, yeah, just touch on again.

Yeah, so when the Fabric SQL database were introduced, I was absolutely stoked. I use databases all the time, both with client and personally, and I wanted to test out not just obviously collecting the data, but really the the transformative feature of SQL databases is that ability really to write back or R like it's some, you know, places to where the data, but it can go in other. It's a transaction datab, and it's most universally known. We've talked about that, and U be able to connect.

So I wanted to see if I could use it in a Power App in the same way that I'm using databases now. So I replicated one of my databases, and then I basically said like, okay, how's the connection since there's no like Fabric connector in Power Apps or the Power Platform, but it's just a SQL database.

Mhm.

So interestingly enough, I didn't really, I didn't have to put in even the server name or the database name. I just said SQL database through Azure. I already knew, you know, all the databases available.

Yep.

And the connection was fine. I could read, I could see everything. It worked with the app. But when I was going through to try to actually modify a row, because I have one that basically will collect a bunch of rows, either remove it or push it somewhere else, yes, I was getting this network error. I'm like, oh, this is strange.

Strange.

And I'm like, oh. I had first a word like, oh no, SQL databases are limited, and we didn't know that there's these other, you know, limitations, and which would have been—I would have ranted about quite, quite essentially otherwise. What's the point of having SQL databases and lake houses?

Well, I had to remember with SQL databases in something like Power Apps, in order for it to write back or modify a record, you need to have two types of columns in that database. You need version row history and a sequence row, which you have to add through actually writing the like—and there's no like UI to do that. There's just simply a SQL query to actually, in a sense, write those two rows.

So I open it up in aure data Studio. This database I basically modified, added those to all the tables, went back to Power Apps, pretty seamless, man. Pretty crazy. Like I'm now be able to write back and just all modifying a Fabric SQL database. Nothing was created in Azure. Nothing was created in any other system.

Yeah, that is really—and it's pretty, it's pretty freaking awesome.

So I also saw, I think, another announcement here recently that they're retiring Azure Data Factory. That's going to get retired here pretty soon. Did you hear—did you see that one, Tommy, across the internet?

I mean, I'm not surprised because—no, not, sorry, not Azure Data Factory. Azure what? It's Data Studio.

Oh, the Data Studio.

Yeah, there's like SS SMS and there's data is be retired soon.

Are they just switching all their focus ons then? I don't know what they're doing.

So on February 28th, 2026, they're going to be retiring as your data studio, and they're going to actually—they're not—they're moving it over to Visual Studio Code, which actually kind that makes a lot of sense. They already have sense.

Yeah.

So it's not like going away. It's just going to be moving to someplace else. But I honestly think it's makes a lot more sense for them to go only to VS Code because that's where all the plugins and app stuff is as well.

So Data—sorry.

Yes.

Correct, everyone. Thank you, thank you, Donald. It is Data Studio. It is not Azure data fac around. I misspoke there. It is only Azure Data Studio, which is a separate application used to talk to things.

And Tommy, when you were connecting to your SQL database in Fabric, you were using SS SMS, right?

Yes.

So I, I, we'll go back and forth with Data Studio now. I can uninstall it, but yeah, either one works totally fine.

Okay, so I just want to point that out as well.

So this is a—I think this is a big moment, right? Power BI, and particularly Fabric, has traditionally been all around the reporting read-only side of things, right? You had collection of data, correct? Collect the data, and then shape it, and then report on it. So there's data engineering and then reporting sort of it.

Now we're seeing a whole bunch of other use cases really apply here that I think make a lot of sense, specifically around now we're able to use the operational datab base built it right into Fabric, and now we don't need to involve the IT group again.

This is, this is potentially—so, as an admin, I'm a little bit cautious here because this means potentially business units with access to Fabric can build their own databases. We can build our own islands of information, which again may not be wrong, but it also means you need a better data culture in your company to be able to handle these type of situations.

I don't think you turn it off. I think you just limit the availability of it, and you slowly roll out with working with those teams to build those items.

Well, the—there are, there are obviously the limitations, I think. Right now, in tenant, is only allowed—you can create three SQL databases, at least I got that prompt when I tried to create my fourth. It said, you've reached the limit of number of databases you can create in, in Fabric.

How many can you create?

Apparently, for just me, three. And I didn't say user, and because I was creating different work workspaces. So that's interesting.

Is it all on the same Fabric skew?

Yeah, it's all in the same license. So inter—is it, is it on on a trial, or is it on a—it's an F1 or F2?

F2.

Okay. That's odd that you would—that they would limit you in the number of databases you could put on an—still, it's still preview.

And again, also what hasn't come out yet is the billing for storing data. That was also the new thing too. Not only is this transformative, well, you're going to need that budget because unlike the other—like you, you know, can go crazy with the amount of lake houses you want to create, which is not necessarily going to increase your cost. Well, there's this separate billing that will happen for the storage of SQL databases and Fabric.

Mhm.

So yes. Right. All right. Let's jump into some more items here. So let's go from SQL databases—you had another item here for using deep research for Fabric learning. What do you mean by that, Tommy?

Yeah, man. So our, our favorite AI tools, particularly right now, OpenAI and Google have introduced two pretty neat features called deep—and again, they're both called Deep Research. No relation, but they do the same thing.

What you can actually do is, let's say you wanted to learn about a particular topic, or you wanted to, you know, like, just not just learn about it, but get all the information available on the web or whatever examples.

And what I've done is, when Fabric databases came out, I was like, all right, well who's talking about it? What are some of the examples of how they're using it?

And, and obviously, you could do all your Google searches. I am a huge proponent of another tool called Perplexity, which is just a better search engine. We could talk about that another day. But I wanted to test it out on these tools, and it takes a long time when you actually use this deep research feature.

Basically, you give it the prompt of, let's say you want to learn all the examples on the web or from people about examples of using F Python notebooks and Fabric. That's what I want to see, not just news articles from Microsoft Learn; what people have done, yada yada yada.

And you basically write, this is like, I want to see examples of people using Python notebooks. I want to see how they're applying it, whatever your context is, and it probably takes a quite a, quite a few minutes.

Google will say, hey, here's what I'm going to research. Is this cool with you? It kind of gives you what its research is g to be, then you just sit back and you just kind of let it run and

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=595s" target="_blank">9:55</a> back and you just let it run and I I have to admit it it's so much better just than normal Google search or even things like perplexity because it takes a while you can Google actually give you a doc with all the links you can say okay let's learn more about that so from a fast track I just more than I'm just gonna find a bunch of Articles it's pretty awesome and with open AI you can actually make a task out of that so what go do that every Monday and it'll do it for me kind every Monday and it'll do it for me see all the latest news so this is

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=626s" target="_blank">10:26</a> see all the latest news so this is good I like what you're doing here Tommy because because I I'm starting to learn how to better articulate things for AI and I was actually working on a pro problem recently I was trying to do something in Python and I was like ah I can't figure out how to do this thing and I asked one of my developers I said hey how would you do this and they're like have you asked AI yet I was like oh dang it I even forgot like my my go-to still again I'm breaking my old habits to some degree I need to find which co-pilots

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=657s" target="_blank">10:57</a> degree I need to find which co-pilots that I really like and I'm overwhelmed by how many co-pilots are out there there's like cursor there's GitHub co-pilot there's U regular co-pilot there is open AI deep seek all these different model programs that are out there all over the place now and so I I'm not quite sure where to go first it would be nice to have like a collection of all those items together in one place where you could send one prompt and see which which which AI gives you the best results I don't know something along those lines but I my first go-to is not necessarily to ask AI

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=690s" target="_blank">11:30</a> first go-to is not necessarily to ask AI initially so I'm still learning to do that become that it's becoming my go-to item that I need to start using more frequently at the very beginning of my question because I I keep thinking in Google questions still I'm still I'm asking Google questions hey Google how do I do XYZ thing how do I write this class inside python or how do I talk this API or in an aure data Factory how do I build this this copy activity the correct way right I get some help but

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=720s" target="_blank">12:00</a> some help but basically shortcuts that and does a much better job of getting me directly to the answer and what's really cool is if you're just using it like search then it's it's still fine but just a little little nuggets you can add to that prompt transforms the whole thing so I'm using one right now I I found this online and it's like you're gonna be given various plans you got and it's like hey before you actually give me your answer in all the notes clarify the research methods provide your evaluation criteria and you

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=750s" target="_blank">12:30</a> evaluation criteria and specify the expected outcomes that know specify the expected outcomes that you're going to have and you have to say you need to write that plan for me first which yes and it just changes in terms of why it's actually outputting that but also the reason that's the whole you're actually adding the reasoning in front of the response and having it produce that and then it's interesting because the computer doesn't know anything it's not doesn't have like neurons in its head or anything like that but it it's thinking things through the way other most common humans would think through that same reasoning and leverages that

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=780s" target="_blank">13:00</a> that same reasoning and leverages that and then using that it helps itself give a bner answer again these are the techniques that I just don't know yet I'm still just trying to learn them you I'm still just trying to learn them in a year or two from now I'll know in a year or two from now I'll probably be using it a lot more I'll be doing better job asking the prompts in a way that gives me better reasoning I will say this one thing I don't love is if I go to Google I can literally type the shortest phrase I need to the information I want when I write prompts the prompts are much longer now I'm I'm giving it a lot more like almost like a

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=811s" target="_blank">13:31</a> giving it a lot more like almost like a conversation a little bit at the beginning and it it feels more like I'm talking to like a cooworker than I would be just Google searching because you would never talk to anyone and be like function P function class case like you would never talk to someone like that yeah you wouldn't you wouldn't be like example example API call CS in in what's the other one Powershell right you wouldn't just say the words out loud and expect it to return an answer to you this is this is

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=842s" target="_blank">14:02</a> return an answer to you this is this is a whole conversational piece and that's there's a moment in time here that I'm starting to think this is different like this feels totally different now and I don't love typing a lot of extra things I want the answer as quickly as I can but as I I have to be willing to make the trade-off between writing more text and getting a better answer with more text in it back right so that that's just a trade-off I think we had to make and start learning how to do it thousand perc

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=869s" target="_blank">14:29</a> thousand perc excellent really good items here love

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=871s" target="_blank">14:31</a> excellent really good items here love those two beat from the streets I do have one news item here that I'd like to point out here there's an article that was just recently posted there is the announcement of the activation of billing for workspace monitoring I think this is going to be important honestly I think this is a feature that many customers that I've heard have been asking for imagine you have a fabric skew it's on the larger end and you have many different workspaces that are consuming various compute us uses this is going to allow you to

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=903s" target="_blank">15:03</a> you to it's going to show you the billing for the workspace monitoring activities right so later on down the article talks about activation of building for workspace monitoring building under the underlining components for event stream and event house and workspace monitoring will will consume on March 10th so there's some expenses coming with this event stream and event house are native items in Fabric and it uses the fabric units so an event stream cost.22 compute units

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=933s" target="_blank">15:33</a> an event stream cost.22 compute units per hour the event stream data traffic data traffic per gigabyte will cost you 324 cus per hour and the event house uptime costs one CU per hour per active core so if you're hitting it very hard and you're running it a lot you're going to consume more cus so the mean these are not big numbers right you mean even on an F2 you get like somewhere on the order of like 4 million cus a month so like this is going to slowly trickle away or eat away A Little Bit of Your

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=964s" target="_blank">16:04</a> away or eat away A Little Bit of Your Capacity but I think the value of the data that you get out of this thing is going to be very useful to you and so having a monitoring workspace activity is going to be very useful it also comes with the monitoring usage metrics app and then it'll give you other details around that as well so just be aware that they're announcing this I think this is really useful you now have workspace level monitoring with realtime analytics which streams data into an event house which I think is brilliant this is what this is the only

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=995s" target="_blank">16:35</a> brilliant this is what this is the only thing I can think of for most companies that would want to see any real-time data right easy use case people are hitting models people are writing ex analyzing Excel queries we need that data somewhere landed in a Lakehouse at some point so this makes sense to me I wonder how that correlates with what we talked about on Tuesday with the template dashboards for workspace monitoring so if you create your own in a sense Dash board right now the Microsoft open source a few created by the community that when that calls the monitoring if that's

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1026s" target="_blank">17:06</a> calls the monitoring if that's additional cost as well so there's the normal so we talked about Tuesday this was another thing on the blog the introduced template dashboards for workspace monitoring those are template dashboards those are just consuming this feed of data so the event the event Hub ising data through those template reports are bolted onto the custo database or the The Lakehouse events and it consumes those events and builds a report for you so it's a it's a pairing right those reports pair with this feature to stream the data in so my

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1058s" target="_blank">17:38</a> feature to stream the data in so my question is if you created a say a really extensive workspace monitoring dashboard since it's calling custo whenever you open it like let's say you made it whatever you made it terrible you made it heavy would that do an additional cost too every time it calls no you're you're absorbing the

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1075s" target="_blank">17:55</a> calls no you're you're absorbing the well depends if you're in the in the

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1076s" target="_blank">17:56</a> well depends if you're in the in the model and you're using the report that is directly accessing that data in custo it's going to always cost something I it's going to always cost something you're not going to get the data mean you're not going to get the data for free there's going to be some level of compute to get those things created now if you change over to like an import mode like so if you did like a semantic model importing from custo then you're only paying for the load event of that custo and then you're only paying for the compute units and the cus required to run the report so it's going to depend what you want I think honestly when I look at the stream of data that comes from the workspace there's a lot of trash in there that you just don't

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1107s" target="_blank">18:27</a> trash in there that you just don't care about like hey some Adit report don't care hey someone viewed a report edited a page added a visual like these are things I just don't care about what I care about is like the really big things like hey this MDX query came through and it came from Excel and it took 34 seconds to run and by the way it ate this much CU for that period of time that's the stuff I care about right when I start seeing events that come up to the monitoring and I see 64 cus used in like a single second

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1138s" target="_blank">18:58</a> see 64 cus used in like a single second oh oh my goodness now I need to start paying attention like that's what I need to look at so it's that stuff that I really care about and those events that are going to be important to me because now I have to figure out why is my capacity overloading and correlating that to what queries came in in the interactive side that made the the machine tip over a bit right so there's two there's two there's probably more but there's really two lenses to what's going on here you have backend processes pipelines notebooks things that regul low data those

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1170s" target="_blank">19:30</a> things that regul low data those activities are much more consistent and even they're very it's it's not really it doesn't go up and down very much it's the user interactions that really cause hemorrhaging or issues or volatility whatever you want to call it within the tenant because during the work hours people are going to do random things they're going to go hit those models and

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1191s" target="_blank">19:51</a> they're going to go hit those models and so the interactive side of things is really where you get a lot a wide variety of variability and that's what's hard to plan for how do you plan for the hu huge spikes right and and those low lows so shifting through all the the muck so to speak yeah exactly

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1224s" target="_blank">20:24</a> so this is where in in my mind through Auto scale is really needed right I don't need an f128 very often I may need it for like two hours in the middle of the day great just give me it for the two hours that I need it and then bring it back down to like my normal f8 or what like whatever the thing is right I want it to handle the spikes of stuff just automatically anyways good stuff to talk about there

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1255s" target="_blank">20:55</a> anything else Tommy before we want to jump in

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1285s" target="_blank">21:25</a> I think that's good that's good on my end

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1315s" target="_blank">21:55</a> okay I'll make sure I grab this link here quickly for everyone just so everyone can see the U billing for workspaces I'll put that here in the chat just in case you want to check it out here's the link for that topic as well a lot of news and announcements today a lot of lot of things going on January is and moving into February is now quite a busy month with that being said Tommy kick us off on our main topic here let's talk about edit data models in the powerbi service now you can edit models on Mac Linux whatever the heck you want if it has a like I don't even know what iPads iPads whatever you is if you have a browser you can edit semantic models this is cool anyways Tommy go ahead kick us off a bit more of the topic I I almost feel we should have waited till episode 400 to do this just to really put a nice little bow tie on this says we won't do it again I don't know we're definitely going to talk about it again

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1343s" target="_blank">22:23</a> if you recall for those of our frequent followers our very first episode Mike made a bold prediction that we're going to edit and we're going to focus on editing models on the web which was a ridiculous statement for 2021 or 2022 and here we are now with two ways in Microsoft fabric to go in in your browser and go ahead and modify one of your already existing semantic models that you maybe published however you got it into a Microsoft Fabric in a workspace I can enable a feature in that workspace to gohe and and modify that semantic model not power query it's really just from the Dax relationships yes measures I can do all those things and I have that full editability but there's also a different there's another side of the coin as well there's also the ability and the default way if I'm creating a a lake house and I want to create a default centic model or create centic models off of that which is direct link both of these have a very similar experience but the main point here is we now have the ability Mike to circumvent powerbi desktop and be able to modify any existing models both from the Dax measures the relationships the show and hide and this is pretty incredible and I think for our conversation today is now that these features are available SL preview at least the one for editing existing models well let's talk about what does that mean not just for an individual but if I have a whole set up in a workspace with teams am I using this should I use this and when are the times to use it so let's start with just really that ability here that is pretty extensive and let's get your thoughts on what do you think of being able to edit semantic models on the web

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1406s" target="_blank">23:26</a> yeah I want to talk about a couple things here so in the p asked how are we able to edit models that lived in the service right so there's I want to maybe go do a little bit of History around some of this as well when we first got premium per user that was like the first entry into this point right so you're talking about the the UI that lets you edit the model in the web right perfectly if I'm wrong Tommy the UI to edit the model in the web that doesn't NE that doesn't only exist in fabric that exists in Pro and premium per user as well available in all of them that's what I don't remember at the top of my head while you check that out look like you're looking in your computer so so you go check it out and see works on Pro and a pro workspace but if I wanted to edit any model in the service everything had to be edited in in desktop and so I see a trend here where Microsoft is giving us hooks deeper and deeper into the service that is allowing us to get experiences when we can edit the model add a table add a measure put measures in folders like all of this feels really natural to me and a lot of it is exposing those two windows the modeling View and the Dax query view directly in the service and in desktop so it feels like the same experience in both places which is great

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1493s" target="_blank">24:53</a> sorry Tom you gonna say something

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1524s" target="_blank">25:24</a> no I was gonna say as the as you said the history of this as well not all before fabric the one feature that was available to people with a premium or premium per user was the xmla endpoint which allowed us to modify so let's let's not let's give credit there as well so for the past five years if I wanted to modify a existing model that's been published I didn't have to open up power Bay Des up per se I could used tools like tabl editor 3 and I could modify that model to the hearts content and all connected to the service through an XM endpoint and so that's what that was my point where I was walking towards was the xmla endpoint was like the key to let us touch anything in the server so everything had to be edited in desktop unless you had premium somewhere and then you'd get this URL the xmla endpoint which then other thirdparty tools could read down the definition of the model make changes and push those changes up however you you typically got locked into like I could only edit in the service it doesn't let me do anything like once you've modified the service you're done yeah so once you mod one to5 so the one limitation that a lot of people found out the hard way was if I were to modify a model on the web using the xmla endpoint yes well that ability when something happens and I need to download that Power with model locked done so you're stuck now that's less of an issue right much less of an issue now you could still modify some things and still download stuff but also now that you have the ability to edit these models right you can go get those models and if you're using like the pbir format or the pbip format now you can publish the file like the collection of files that make up a report directly to a git integrate that directly with pb.com and now you can edit in the service you can you get your changes commit to the git repo and then you can download the repo locally to your desktop and then just open up in power desktop this whole Cod they've done a huge amount of like code refactoring to make it much more inter interoperable between the service and desktop so that's where we were yeah and now where are we now but now we have all the same great desktop let's call it modeling tools right the modeling view with the model tab or the model pane on the the right hand side now is there we now have Dax query view in desktop we have timle editor great I think actually timle editor fixes a lot of my major issues with being able to manipulate and talk to the model however we don't have timle view currently in the power.com service so that's one thing I think is a little bit missing but again I'll give timle some Grace here because it just timle view just showed up like in January so I would expect some time before timl viw would actually appear inside pb.com the service

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1673s" target="_blank">27:53</a> you made it a really important note just now I think that can't be left unsaid okay before even with the xmla endpoint and when the feature came out to edit models in the web but really both scenarios there's a common issue when you were to if you were to do that really in the last few years and I want to see if you can identify that if I edited something in xmla endpoint it'll say prefabric well what's the issue what direct issu is that going to cause what direct issue is what going to cause if I were to modify something not in desktop but on the web or using the XML endpoint

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1703s" target="_blank">28:23</a> oh I see you're saying and now I understand your question it's it's it's when things get out of sync

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1731s" target="_blank">28:51</a> right yeah there's a syncing problem like if if Tommy's in the web editing things and I go to the GitHub or I go locally and try and make changes to something there's nothing that rectifies the changes between what I'm making Lo locally on my machine what Tommy's doing so Tommy could physically be changing the model while I'm also changing the model at the same time there's no co-authoring experience at this point

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1761s" target="_blank">29:21</a> this is why if you're ever if you're my guidance here would be is if you're ever thinking about allowing anyone to edit in the service now this is a setting so in order to edit the model in the service you have to go to the workspace settings and adjust that property U there's a link I just put in the description here about how to edit models in web so click on that link in the service here and you'll see there's a setting underneath the workspace settings it's going to be called data model set settings you'll need to tick this on and enable users can edit the models with the powerbi service this is also a setting in the admin portal so if admins turn this off it'll be disabled for everyone this feature is in preview so it's not fully released yet but it is out in preview so just be careful with that but you can you you lose this syncing item therefore you need to use get like if that's exactly where I was going yeah so like if you're going to turn on this feature if you're going to let people in edit models in the service that workspace better have get integration turned on because it makes things much more error safe oh yeah you have to now Tommy can edit make edits now the web can make edits and we can now have two different



## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

Mike: Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone and welcome to the podcast.

Podcast 398. We are cusping on a threshold here. I didn't think we'd ever make it to it, but wow, we've made it up to almost 400 episodes. This is going to be exciting. I don't know what we're going to do on the 400th episode. I have to figure something fun out.

There is this, the equivalent. I know Saturday Night Live this week is doing their SNL 50. They're doing this.

Yeah, yeah.

Lame. 400, 50, 309 ago. 50 years of Saturday Night Live.

It's, this is, this is as significant and culturally impactful as Saturday—double, triple impactful because this is working with your career and helping you make more money and become advantaging you in many other ways.

No, the Power Man podcast does not endorse money or in any way will help you with your income. This is night Financial advice. Sorry. B included.

Yeah.

Excellent. So jumping in today, our main topic for today will'll be talking about, or unpacking, semantic models on the web. There are some features here, and this is what I was touting since episode number one: we're going to move to the web. It's going to be based in the web, so here we are talking about it again, unpacking what happens when you model semantic models inside har.com. That will be our main topic.

With that, we have a bunch of news and items from Beat from the Street. So, Tommy, you've got a Beat from the Street here. Give us some, what are you learning these days? You got some information here, I think around SQL databases. You want to kind of just, yeah, just touch on again.

Yeah, so when the Fabric SQL database were introduced, I was absolutely stoked. I use databases all the time, both with client and personally, and I wanted to test out not just obviously collecting the data, but really the the transformative feature of SQL databases is that ability really to write back or R like it's some, you know, places to where the data, but it can go in other. It's a transaction datab, and it's most universally known. We've talked about that, and U be able to connect.

So I wanted to see if I could use it in a Power App in the same way that I'm using databases now. So I replicated one of my databases, and then I basically said like, okay, how's the connection since there's no like Fabric connector in Power Apps or the Power Platform, but it's just a SQL database.

Mhm.

So interestingly enough, I didn't really, I didn't have to put in even the server name or the database name. I just said SQL database through Azure. I already knew, you know, all the databases available.

Yep.

And the connection was fine. I could read, I could see everything. It worked with the app. But when I was going through to try to actually modify a row, because I have one that basically will collect a bunch of rows, either remove it or push it somewhere else, yes, I was getting this network error. I'm like, oh, this is strange.

Strange.

And I'm like, oh. I had first a word like, oh no, SQL databases are limited, and we didn't know that there's these other, you know, limitations, and which would have been—I would have ranted about quite, quite essentially otherwise. What's the point of having SQL databases and lake houses?

Well, I had to remember with SQL databases in something like Power Apps, in order for it to write back or modify a record, you need to have two types of columns in that database. You need version row history and a sequence row, which you have to add through actually writing the like—and there's no like UI to do that. There's just simply a SQL query to actually, in a sense, write those two rows.

So I open it up in aure data Studio. This database I basically modified, added those to all the tables, went back to Power Apps, pretty seamless, man. Pretty crazy. Like I'm now be able to write back and just all modifying a Fabric SQL database. Nothing was created in Azure. Nothing was created in any other system.

Yeah, that is really—and it's pretty, it's pretty freaking awesome.

So I also saw, I think, another announcement here recently that they're retiring Azure Data Factory. That's going to get retired here pretty soon. Did you hear—did you see that one, Tommy, across the internet?

I mean, I'm not surprised because—no, not, sorry, not Azure Data Factory. Azure what? It's Data Studio.

Oh, the Data Studio.

Yeah, there's like SS SMS and there's data is be retired soon.

Are they just switching all their focus ons then? I don't know what they're doing.

So on February 28th, 2026, they're going to be retiring as your data studio, and they're going to actually—they're not—they're moving it over to Visual Studio Code, which actually kind that makes a lot of sense. They already have sense.

Yeah.

So it's not like going away. It's just going to be moving to someplace else. But I honestly think it's makes a lot more sense for them to go only to VS Code because that's where all the plugins and app stuff is as well.

So Data—sorry.

Yes.

Correct, everyone. Thank you, thank you, Donald. It is Data Studio. It is not Azure data fac around. I misspoke there. It is only Azure Data Studio, which is a separate application used to talk to things.

And Tommy, when you were connecting to your SQL database in Fabric, you were using SS SMS, right?

Yes.

So I, I, we'll go back and forth with Data Studio now. I can uninstall it, but yeah, either one works totally fine.

Okay, so I just want to point that out as well.

So this is a—I think this is a big moment, right? Power BI, and particularly Fabric, has traditionally been all around the reporting read-only side of things, right? You had collection of data, correct? Collect the data, and then shape it, and then report on it. So there's data engineering and then reporting sort of it.

Now we're seeing a whole bunch of other use cases really apply here that I think make a lot of sense, specifically around now we're able to use the operational datab base built it right into Fabric, and now we don't need to involve the IT group again.

This is, this is potentially—so, as an admin, I'm a little bit cautious here because this means potentially business units with access to Fabric can build their own databases. We can build our own islands of information, which again may not be wrong, but it also means you need a better data culture in your company to be able to handle these type of situations.

I don't think you turn it off. I think you just limit the availability of it, and you slowly roll out with working with those teams to build those items.

Well, the—there are, there are obviously the limitations, I think. Right now, in tenant, is only allowed—you can create three SQL databases, at least I got that prompt when I tried to create my fourth. It said, you've reached the limit of number of databases you can create in, in Fabric.

How many can you create?

Apparently, for just me, three. And I didn't say user, and because I was creating different work workspaces. So that's interesting.

Is it all on the same Fabric skew?

Yeah, it's all in the same license. So inter—is it, is it on on a trial, or is it on a—it's an F1 or F2?

F2.

Okay. That's odd that you would—that they would limit you in the number of databases you could put on an—still, it's still preview.

And again, also what hasn't come out yet is the billing for storing data. That was also the new thing too. Not only is this transformative, well, you're going to need that budget because unlike the other—like you, you know, can go crazy with the amount of lake houses you want to create, which is not necessarily going to increase your cost. Well, there's this separate billing that will happen for the storage of SQL databases and Fabric.

Mhm.

So yes. Right. All right. Let's jump into some more items here. So let's go from SQL databases—you had another item here for using deep research for Fabric learning. What do you mean by that, Tommy?

Yeah, man. So our, our favorite AI tools, particularly right now, OpenAI and Google have introduced two pretty neat features called deep—and again, they're both called Deep Research. No relation, but they do the same thing.

What you can actually do is, let's say you wanted to learn about a particular topic, or you wanted to, you know, like, just not just learn about it, but get all the information available on the web or whatever examples.

And what I've done is, when Fabric databases came out, I was like, all right, well who's talking about it? What are some of the examples of how they're using it?

And, and obviously, you could do all your Google searches. I am a huge proponent of another tool called Perplexity, which is just a better search engine. We could talk about that another day. But I wanted to test it out on these tools, and it takes a long time when you actually use this deep research feature.

Basically, you give it the prompt of, let's say you want to learn all the examples on the web or from people about examples of using F Python notebooks and Fabric. That's what I want to see, not just news articles from Microsoft Learn; what people have done, yada yada yada.

And you basically write, this is like, I want to see examples of people using Python notebooks. I want to see how they're applying it, whatever your context is, and it probably takes a quite a, quite a few minutes.

Google will say, hey, here's what I'm going to research. Is this cool with you? It kind of gives you what its research is g to be, then you just sit back and you just kind of let it run and

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=595s" target="_blank">9:55</a> back and you just let it run and I I have to admit it it's so much better just than normal Google search or even things like perplexity because it takes a while you can Google actually give you a doc with all the links you can say okay let's learn more about that so from a fast track I just more than I'm just gonna find a bunch of Articles it's pretty awesome and with open AI you can actually make a task out of that so what go do that every Monday and it'll do it for me kind every Monday and it'll do it for me see all the latest news so this is

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=626s" target="_blank">10:26</a> see all the latest news so this is good I like what you're doing here Tommy because because I I'm starting to learn how to better articulate things for AI and I was actually working on a pro problem recently I was trying to do something in Python and I was like ah I can't figure out how to do this thing and I asked one of my developers I said hey how would you do this and they're like have you asked AI yet I was like oh dang it I even forgot like my my go-to still again I'm breaking my old habits to some degree I need to find which co-pilots

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=657s" target="_blank">10:57</a> degree I need to find which co-pilots that I really like and I'm overwhelmed by how many co-pilots are out there there's like cursor there's GitHub co-pilot there's U regular co-pilot there is open AI deep seek all these different model programs that are out there all over the place now and so I I'm not quite sure where to go first it would be nice to have like a collection of all those items together in one place where you could send one prompt and see which which which AI gives you the best results I don't know something along those lines but I my first go-to is not necessarily to ask AI

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=690s" target="_blank">11:30</a> first go-to is not necessarily to ask AI initially so I'm still learning to do that become that it's becoming my go-to item that I need to start using more frequently at the very beginning of my question because I I keep thinking in Google questions still I'm still I'm asking Google questions hey Google how do I do XYZ thing how do I write this class inside python or how do I talk this API or in an aure data Factory how do I build this this copy activity the correct way right I get some help but

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=720s" target="_blank">12:00</a> some help but basically shortcuts that and does a much better job of getting me directly to the answer and what's really cool is if you're just using it like search then it's it's still fine but just a little little nuggets you can add to that prompt transforms the whole thing so I'm using one right now I I found this online and it's like you're gonna be given various plans you got and it's like hey before you actually give me your answer in all the notes clarify the research methods provide your evaluation criteria and you

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=750s" target="_blank">12:30</a> evaluation criteria and specify the expected outcomes that know specify the expected outcomes that you're going to have and you have to say you need to write that plan for me first which yes and it just changes in terms of why it's actually outputting that but also the reason that's the whole you're actually adding the reasoning in front of the response and having it produce that and then it's interesting because the computer doesn't know anything it's not doesn't have like neurons in its head or anything like that but it it's thinking things through the way other most common humans would think through that same reasoning and leverages that

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=780s" target="_blank">13:00</a> that same reasoning and leverages that and then using that it helps itself give a bner answer again these are the techniques that I just don't know yet I'm still just trying to learn them you I'm still just trying to learn them in a year or two from now I'll know in a year or two from now I'll probably be using it a lot more I'll be doing better job asking the prompts in a way that gives me better reasoning I will say this one thing I don't love is if I go to Google I can literally type the shortest phrase I need to the information I want when I write prompts the prompts are much longer now I'm I'm giving it a lot more like almost like a

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=811s" target="_blank">13:31</a> giving it a lot more like almost like a conversation a little bit at the beginning and it it feels more like I'm talking to like a cooworker than I would be just Google searching because you would never talk to anyone and be like function P function class case like you would never talk to someone like that yeah you wouldn't you wouldn't be like example example API call CS in in what's the other one Powershell right you wouldn't just say the words out loud and expect it to return an answer to you this is this is

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=842s" target="_blank">14:02</a> return an answer to you this is this is a whole conversational piece and that's there's a moment in time here that I'm starting to think this is different like this feels totally different now and I don't love typing a lot of extra things I want the answer as quickly as I can but as I I have to be willing to make the trade-off between writing more text and getting a better answer with more text in it back right so that that's just a trade-off I think we had to make and start learning how to do it thousand perc

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=869s" target="_blank">14:29</a> thousand perc excellent really good items here love

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=871s" target="_blank">14:31</a> excellent really good items here love those two beat from the streets I do have one news item here that I'd like to point out here there's an article that was just recently posted there is the announcement of the activation of billing for workspace monitoring I think this is going to be important honestly I think this is a feature that many customers that I've heard have been asking for imagine you have a fabric skew it's on the larger end and you have many different workspaces that are consuming various compute us uses this is going to allow you to

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=903s" target="_blank">15:03</a> you to it's going to show you the billing for the workspace monitoring activities right so later on down the article talks about activation of building for workspace monitoring building under the underlining components for event stream and event house and workspace monitoring will will consume on March 10th so there's some expenses coming with this event stream and event house are native items in Fabric and it uses the fabric units so an event stream cost.22 compute units

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=933s" target="_blank">15:33</a> an event stream cost.22 compute units per hour the event stream data traffic data traffic per gigabyte will cost you 324 cus per hour and the event house uptime costs one CU per hour per active core so if you're hitting it very hard and you're running it a lot you're going to consume more cus so the mean these are not big numbers right you mean even on an F2 you get like somewhere on the order of like 4 million cus a month so like this is going to slowly trickle away or eat away A Little Bit of Your

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=964s" target="_blank">16:04</a> away or eat away A Little Bit of Your Capacity but I think the value of the data that you get out of this thing is going to be very useful to you and so having a monitoring workspace activity is going to be very useful it also comes with the monitoring usage metrics app and then it'll give you other details around that as well so just be aware that they're announcing this I think this is really useful you now have workspace level monitoring with realtime analytics which streams data into an event house which I think is brilliant this is what this is the only

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=995s" target="_blank">16:35</a> brilliant this is what this is the only thing I can think of for most companies that would want to see any real-time data right easy use case people are hitting models people are writing ex analyzing Excel queries we need that data somewhere landed in a Lakehouse at some point so this makes sense to me I wonder how that correlates with what we talked about on Tuesday with the template dashboards for workspace monitoring so if you create your own in a sense Dash board right now the Microsoft open source a few created by the community that when that calls the monitoring if that's

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1026s" target="_blank">17:06</a> calls the monitoring if that's additional cost as well so there's the normal so we talked about Tuesday this was another thing on the blog the introduced template dashboards for workspace monitoring those are template dashboards those are just consuming this feed of data so the event the event Hub ising data through those template reports are bolted onto the custo database or the The Lakehouse events and it consumes those events and builds a report for you so it's a it's a pairing right those reports pair with this feature to stream the data in so my

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1058s" target="_blank">17:38</a> feature to stream the data in so my question is if you created a say a really extensive workspace monitoring dashboard since it's calling custo whenever you open it like let's say you made it whatever you made it terrible you made it heavy would that do an additional cost too every time it calls no you're you're absorbing the

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1075s" target="_blank">17:55</a> calls no you're you're absorbing the well depends if you're in the in the

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1076s" target="_blank">17:56</a> well depends if you're in the in the model and you're using the report that is directly accessing that data in custo it's going to always cost something I it's going to always cost something you're not going to get the data mean you're not going to get the data for free there's going to be some level of compute to get those things created now if you change over to like an import mode like so if you did like a semantic model importing from custo then you're only paying for the load event of that custo and then you're only paying for the compute units and the cus required to run the report so it's going to depend what you want I think honestly when I look at the stream of data that comes from the workspace there's a lot of trash in there that you just don't

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1107s" target="_blank">18:27</a> trash in there that you just don't care about like hey some Adit report don't care hey someone viewed a report edited a page added a visual like these are things I just don't care about what I care about is like the really big things like hey this MDX query came through and it came from Excel and it took 34 seconds to run and by the way it ate this much CU for that period of time that's the stuff I care about right when I start seeing events that come up to the monitoring and I see 64 cus used in like a single second

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1138s" target="_blank">18:58</a> see 64 cus used in like a single second oh oh my goodness now I need to start paying attention like that's what I need to look at so it's that stuff that I really care about and those events that are going to be important to me because now I have to figure out why is my capacity overloading and correlating that to what queries came in in the interactive side that made the the machine tip over a bit right so there's two there's two there's probably more but there's really two lenses to what's going on here you have backend processes pipelines notebooks things that regul low data those

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1170s" target="_blank">19:30</a> things that regul low data those activities are much more consistent and even they're very it's it's not really it doesn't go up and down very much it's the user interactions that really cause hemorrhaging or issues or volatility whatever you want to call it within the tenant because during the work hours people are going to do random things they're going to go hit those models and

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1191s" target="_blank">19:51</a> they're going to go hit those models and so the interactive side of things is really where you get a lot a wide variety of variability and that's what's hard to plan for how do you plan for the hu huge spikes right and and those low lows so shifting through all the the muck so to speak yeah exactly

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1224s" target="_blank">20:24</a> so this is where in in my mind through Auto scale is really needed right I don't need an f128 very often I may need it for like two hours in the middle of the day great just give me it for the two hours that I need it and then bring it back down to like my normal f8 or what like whatever the thing is right I want it to handle the spikes of stuff just automatically anyways good stuff to talk about there

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1255s" target="_blank">20:55</a> anything else Tommy before we want to jump in

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1285s" target="_blank">21:25</a> I think that's good that's good on my end

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1315s" target="_blank">21:55</a> okay I'll make sure I grab this link here quickly for everyone just so everyone can see the U billing for workspaces I'll put that here in the chat just in case you want to check it out here's the link for that topic as well a lot of news and announcements today a lot of lot of things going on January is and moving into February is now quite a busy month with that being said Tommy kick us off on our main topic here let's talk about edit data models in the powerbi service now you can edit models on Mac Linux whatever the heck you want if it has a like I don't even know what iPads iPads whatever you is if you have a browser you can edit semantic models this is cool anyways Tommy go ahead kick us off a bit more of the topic I I almost feel we should have waited till episode 400 to do this just to really put a nice little bow tie on this says we won't do it again I don't know we're definitely going to talk about it again

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1343s" target="_blank">22:23</a> if you recall for those of our frequent followers our very first episode Mike made a bold prediction that we're going to edit and we're going to focus on editing models on the web which was a ridiculous statement for 2021 or 2022 and here we are now with two ways in Microsoft fabric to go in in your browser and go ahead and modify one of your already existing semantic models that you maybe published however you got it into a Microsoft Fabric in a workspace I can enable a feature in that workspace to gohe and and modify that semantic model not power query it's really just from the Dax relationships yes measures I can do all those things and I have that full editability but there's also a different there's another side of the coin as well there's also the ability and the default way if I'm creating a a lake house and I want to create a default centic model or create centic models off of that which is direct link both of these have a very similar experience but the main point here is we now have the ability Mike to circumvent powerbi desktop and be able to modify any existing models both from the Dax measures the relationships the show and hide and this is pretty incredible and I think for our conversation today is now that these features are available SL preview at least the one for editing existing models well let's talk about what does that mean not just for an individual but if I have a whole set up in a workspace with teams am I using this should I use this and when are the times to use it so let's start with just really that ability here that is pretty extensive and let's get your thoughts on what do you think of being able to edit semantic models on the web

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1406s" target="_blank">23:26</a> yeah I want to talk about a couple things here so in the p asked how are we able to edit models that lived in the service right so there's I want to maybe go do a little bit of History around some of this as well when we first got premium per user that was like the first entry into this point right so you're talking about the the UI that lets you edit the model in the web right perfectly if I'm wrong Tommy the UI to edit the model in the web that doesn't NE that doesn't only exist in fabric that exists in Pro and premium per user as well available in all of them that's what I don't remember at the top of my head while you check that out look like you're looking in your computer so so you go check it out and see works on Pro and a pro workspace but if I wanted to edit any model in the service everything had to be edited in in desktop and so I see a trend here where Microsoft is giving us hooks deeper and deeper into the service that is allowing us to get experiences when we can edit the model add a table add a measure put measures in folders like all of this feels really natural to me and a lot of it is exposing those two windows the modeling View and the Dax query view directly in the service and in desktop so it feels like the same experience in both places which is great

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1493s" target="_blank">24:53</a> sorry Tom you gonna say something

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1524s" target="_blank">25:24</a> no I was gonna say as the as you said the history of this as well not all before fabric the one feature that was available to people with a premium or premium per user was the xmla endpoint which allowed us to modify so let's let's not let's give credit there as well so for the past five years if I wanted to modify a existing model that's been published I didn't have to open up power Bay Des up per se I could used tools like tabl editor 3 and I could modify that model to the hearts content and all connected to the service through an XM endpoint and so that's what that was my point where I was walking towards was the xmla endpoint was like the key to let us touch anything in the server so everything had to be edited in desktop unless you had premium somewhere and then you'd get this URL the xmla endpoint which then other thirdparty tools could read down the definition of the model make changes and push those changes up however you you typically got locked into like I could only edit in the service it doesn't let me do anything like once you've modified the service you're done yeah so once you mod one to5 so the one limitation that a lot of people found out the hard way was if I were to modify a model on the web using the xmla endpoint yes well that ability when something happens and I need to download that Power with model locked done so you're stuck now that's less of an issue right much less of an issue now you could still modify some things and still download stuff but also now that you have the ability to edit these models right you can go get those models and if you're using like the pbir format or the pbip format now you can publish the file like the collection of files that make up a report directly to a git integrate that directly with pb.com and now you can edit in the service you can you get your changes commit to the git repo and then you can download the repo locally to your desktop and then just open up in power desktop this whole Cod they've done a huge amount of like code refactoring to make it much more inter interoperable between the service and desktop so that's where we were yeah and now where are we now but now we have all the same great desktop let's call it modeling tools right the modeling view with the model tab or the model pane on the the right hand side now is there we now have Dax query view in desktop we have timle editor great I think actually timle editor fixes a lot of my major issues with being able to manipulate and talk to the model however we don't have timle view currently in the power.com service so that's one thing I think is a little bit missing but again I'll give timle some Grace here because it just timle view just showed up like in January so I would expect some time before timl viw would actually appear inside pb.com the service

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1673s" target="_blank">27:53</a> you made it a really important note just now I think that can't be left unsaid okay before even with the xmla endpoint and when the feature came out to edit models in the web but really both scenarios there's a common issue when you were to if you were to do that really in the last few years and I want to see if you can identify that if I edited something in xmla endpoint it'll say prefabric well what's the issue what direct issu is that going to cause what direct issue is what going to cause if I were to modify something not in desktop but on the web or using the XML endpoint

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1703s" target="_blank">28:23</a> oh I see you're saying and now I understand your question it's it's it's when things get out of sync

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1731s" target="_blank">28:51</a> right yeah there's a syncing problem like if if Tommy's in the web editing things and I go to the GitHub or I go locally and try and make changes to something there's nothing that rectifies the changes between what I'm making Lo locally on my machine what Tommy's doing so Tommy could physically be changing the model while I'm also changing the model at the same time there's no co-authoring experience at this point

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1761s" target="_blank">29:21</a> this is why if you're ever if you're my guidance here would be is if you're ever thinking about allowing anyone to edit in the service now this is a setting so in order to edit the model in the service you have to go to the workspace settings and adjust that property U there's a link I just put in the description here about how to edit models in web so click on that link in the service here and you'll see there's a setting underneath the workspace settings it's going to be called data model set settings you'll need to tick this on and enable users can edit the models with the powerbi service this is also a setting in the admin portal so if admins turn this off it'll be disabled for everyone this feature is in preview so it's not fully released yet but it is out in preview so just be careful with that but you can you you lose this syncing item therefore you need to use get like if that's exactly where I was going yeah so like if you're going to turn on this feature if you're going to let people in edit models in the service that workspace better have get integration turned on because it makes things much more error safe oh yeah you have to now Tommy can edit make edits now the web can make edits and we can now have two different

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=32s" target="_blank">0:32</a>
Mike good morning everyone and welcome to the explicit measures podcast with Tommy and Mike.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=40s" target="_blank">0:40</a>
Podcast 398 we are cusping on a threshold here I didn't think we'd ever make it to it but wow we've made it up to almost 400 episodes this is going to be exciting I don't know what we're going to do on the 400th episode I have to figure something fun out.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=53s" target="_blank">0:53</a>
Is this the equivalent I know Saturday Night Live this week is doing their SNL 50 they're doing this yeah yeah lame 400 50 309 ago 50 years of Saturday Night Live.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=69s" target="_blank">1:09</a>
It's this is this as significant and culturally impactful as Saturday.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=73s" target="_blank">1:13</a>
Double triple impactful because this is working with your career and helping you make more money and become advantaging you in many other ways.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=83s" target="_blank">1:23</a>
No the Power Man podcast does not endorse money or in any way will help you with your income this is night Financial advice sorry B included yeah excellent.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=93s" target="_blank">1:33</a>
So jumping in today our main topic for today will'll be talking about or unpacking semantic models on the web there are some features here and this is what this is what I was touting since episode number one we're going to move to the web it's going to be based in the web so here we are talking about it again unpacking what happens when you model semantic models inside har.com that will be our main topic.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=118s" target="_blank">1:58</a>
With that we have a bunch of news and items from beat from the street so Tommy youve got a Beat from the street here give us some what are you learning these days you got some information here I think around SQL databases you want to just yeah just touch on again yeah.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=132s" target="_blank">2:12</a>
Tommy so when the fabric SQL database were introduced I was absolutely stoked I use databases all the time both with client and personally and I wanted to test out not just obviously collecting the data but really the the transformative feature of SQL databases is that ability really to write back or R like it's some places to where the data but it can go in other it's a transaction datab and it's most universally known we've talked about that and U be able to connect so I wanted to see if I could use it in a power app in the same way that I'm using databases now.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=168s" target="_blank">2:48</a>
So I replicated one of my databases and then I basically said like okay how's the connection since there's no like fabric connector in power apps or the Power Platform but it's just a SQL database mhm so interestingly enough I didn't really I didn't have to put in the even the server name or the database name I just said SQL database through Azure it I already knew all the databases available yep and the connection was fine I could read I could see everything it worked with the app.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=199s" target="_blank">3:19</a>
But when I was going through to try to actually modify a row because I have one that basically will collect a bunch of rows either remove it or push it somewhere else yes I was getting this network error I'm like oh this is strange.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=210s" target="_blank">3:30</a>
And I'm like oh I had first a word like oh no SQL databases are limited and we didn't know that there's these other limitations and which would have been I would have ranted about quite quite essentially otherwise what's the point of having SQL databases and lake houses.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=229s" target="_blank">3:49</a>
Well I had to remember with SQL databases in something like power apps in order for it to write back or modify a record you need to have two types of columns in that database you need version row history and a sequence row which you have to add through actually writing the like and there's no like UI to do that there's just simply a SQL query to actually in a sense write those two rows.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=256s" target="_blank">4:16</a>
So I open it up in aure data Studio this database I basically modified added those to all the tables went back to power apps pretty seamless man pretty crazy like I'm now be able to write back and just all modifying a fabric SQL database nothing was created in Azure nothing was created in any other system yeah that is really and it's pretty it's pretty freaking awesome.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=280s" target="_blank">4:40</a>
Mike so I also saw I think another announcement here recently that they're retiring Azure data Factory that's going to get retired here pretty soon did you hear did you see that one Tommy on across the internet.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=289s" target="_blank">4:49</a>
Tommy I'm not surprised because no not sorry not Azure data Factory Azure what it's data Studio oh the data Studio yeah there's like SS SMS and there's data is be retired soon are they just switching all their focus ons then I don't know what they're doing.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=307s" target="_blank">5:07</a>
Mike so on February 28th 2026 they're going to be retiring as your data studio and they're going to actually they're not they're moving it over to visual studio code.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=315s" target="_blank">5:15</a>
Which actually kind that makes a lot of sense they already have sense yeah so it's not like going away it's just going to be moving to someplace else but I honestly think it's makes a lot more sense for them to go only to vs code because that's where all the plugins and app stuff is as well so data sorry yes correct everyone thank you thank you Donald it is Data Studio it is not Azure data fac around I misspoke there it is only Azure data Studio.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=338s" target="_blank">5:38</a>
Which is a separate application used to talk to things and Tommy when you were connecting to your SQL database in fabric you were using SS SMS right yes.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=347s" target="_blank">5:47</a>
Tommy so I I we'll go back and forth with data studio now I can uninstall it but yeah either one works totally fine.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=354s" target="_blank">5:54</a>
Mike okay so I just want to point that out as well so this is a I think this is a big moment right powerbi and particularly fabric has traditionally been all around the reporting read only side of things right you had collection of data correct collect the data and then shape it and then report on it so there's data engineering and then reporting it now we're seeing a whole bunch of other use cases really apply here that I think make a lot of sense specifically around now we're able to use the operational datab base build it right into Fabric and now we don't need to involve the it group again this is this is potentially.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=392s" target="_blank">6:32</a>
So as an admin I'm a little bit cautious here because this means potentially business units with access to fabric can build their own databases we can build our own islands of information which again may not be wrong but it also means you need a better data culture in your company to be able to handle these type of situations.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=409s" target="_blank">6:49</a>
I don't think you turn it off I think you just limit the availability of it and you slowly roll out with working with those teams to build those items well the there are there are obviously the limitations I think right now in tenant is only allowed you can create three SQL databases at least I got that prompt when I tried to create my fourth it said you've reached the limit of number of databases you can create in in fabric.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=434s" target="_blank">7:14</a>
Tommy how many can you create apparently for just me three and I didn't say user and because I was creating different work workspaces so that's interesting is it all on the same fabric skew.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=448s" target="_blank">7:28</a>
Mike yeah it's all in the same license so inter is it is it on on a trial or is it on a it's an F1 or F2 F2 okay that's odd that you would that they would limit you in the number of databases you could put on an still it's still preview and again also what hasn't come out yet is the billing for storing data that was also the new thing too not only is this transformative well you're going to need that budget because unlike the other like you Cate go crazy with the amount of lake houses you want to create which is not necessarily going to increase your cost well there's this separate billing that will happen for the storage of SQL databases and fabric.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=493s" target="_blank">8:13</a>
So yes right all right let's jump into some more items here so let's go from SQL databases you had another item here for using deep research for fabric learning what do you what do you mean by that Tommy.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=502s" target="_blank">8:22</a>
Tommy Yeah man so our our favorite a AI tools particularly right now open Ai and Google have introduced two pretty neat features called deep and again they're both called Deep research no relation but they do the same thing what you can actually do is let's say you wanted to learn about a particular topic or you wanted to like just not just learn about it but get all the information available on the web or whatever examples.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=531s" target="_blank">8:51</a>
And what I've done is when fabric databases came out I was like all right well who's talking about it what are some of the examples of how they're using it and and obviously you could do all your Google searches I am a huge proponent of another tool called perplexity which is just a better search engine we could talk about that another day but I wanted to test it out on these tools and it takes a long time when you actually use this deep research feature.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=556s" target="_blank">9:16</a>
Basically you give it the prompt of let's say you want to learn all the examples on the web or from people about examples of using F python notebooks and fabric that's what I want to see not just news articles from Microsoft learn what people have done yada yada yada and you basically write this is like I want to see examples of people using python notebooks I want to see how they're applying it whatever your context is and it probably takes a quite a quite a few minutes.

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=586s" target="_blank">9:46</a>
Google will say hey here's what I'm going to research is this cool with you it gives you what its research is g to be then you just sit back and you just let it run and

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=595s" target="_blank">9:55</a> back and you just let it run and I I have to admit it it's so much better just than normal Google search or even things like perplexity because it takes a while you can Google actually give you a doc with all the links you can say okay let's learn more about that so from a fast track I just more than I'm just gonna find a bunch of Articles it's pretty awesome and with open AI you can actually make a task out of that so what go do that every Monday and it'll do it for me see all the latest news so this is

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=626s" target="_blank">10:26</a> see all the latest news so this is good I like what you're doing here Tommy because because I I'm starting to learn how to better articulate things for AI and I was actually working on a pro problem recently I was trying to do something in Python and I was like ah I can't figure out how to do this thing and I asked one of my developers I said hey how would you do this and they're like have you asked AI yet I was like oh dang it I even forgot like my my go-to still again I'm breaking my old habits to some degree I need to find which co-pilots

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=657s" target="_blank">10:57</a> degree I need to find which co-pilots that I really like and I'm overwhelmed by how many co-pilots are out there there's like cursor there's GitHub co-pilot there's U regular co-pilot there is open AI deep seek all these different model programs that are out there all over the place now and so I I'm not quite sure where to go first it would be nice to have like a collection of all those items together in one place where you could send one prompt and see which which which AI gives you the best results I don't know something along those lines but I my first go-to is not necessarily to ask AI

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=690s" target="_blank">11:30</a> first go-to is not necessarily to ask AI initially so I'm still learning to do that become that it's becoming my go-to item that I need to start using more frequently at the very beginning of my question because I I keep thinking in Google questions still I'm asking Google questions hey Google how do I do XYZ thing how do I write this class inside python or how do I talk this API or in an aure data Factory how do I build this this copy activity the correct way right I get some help but

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=720s" target="_blank">12:00</a> some help but basically shortcuts that and does a much better job of getting me directly to the answer and what's really cool is if you're just using it like search then it's still fine but just a little little nuggets you can add to that prompt transforms the whole thing so I'm using one right now I I found this online and it's like you're gonna be given various plans you got and it's like hey before you actually give me your answer in all the notes clarify the research methods provide your evaluation criteria and you

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=750s" target="_blank">12:30</a> evaluation criteria and specify the expected outcomes that know specify the expected outcomes that you're going to have and you have to say you need to write that plan for me first which yes and it just changes in terms of why it's actually outputting that but also the reason that's the whole you're actually adding the reasoning in front of the response and having it produce that and then it's interesting because the computer doesn't know anything it's not doesn't have like neurons in its head or anything like that but it it's thinking things through the way other most common humans would think through that same reasoning and leverages that

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=780s" target="_blank">13:00</a> that same reasoning and leverages that and then using that it helps itself give a bner answer again these are the techniques that I just don't know yet I'm still just trying to learn them you I'm still just trying to learn them in a year or two from now I'll know in a year or two from now I'll probably be using it a lot more I'll be doing better job asking the prompts in a way that gives me better reasoning I will say this one thing I don't love is if I go to Google I can literally type the shortest phrase I need to the information I want when I write prompts the prompts are much longer now I'm giving it a lot more like almost like a

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=811s" target="_blank">13:31</a> giving it a lot more like almost like a conversation a little bit at the beginning and it it feels more like I'm talking to like a cooworker than I would be just Google searching because you would never talk to anyone and be like function P function class case like you would never talk to someone like that yeah you wouldn't be like example example API call CS in in what's the other one Powershell right you wouldn't just say the words out loud and expect it to return an answer to you this is this is

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=842s" target="_blank">14:02</a> return an answer to you this is a whole conversational piece and that's there's a moment in time here that I'm starting to think this is different like this feels totally different now and I don't love typing a lot of extra things I want the answer as quickly as I can but as I I have to be willing to make the trade-off between writing more text and getting a better answer with more text in it back right so that that's just a trade-off I think we had to make and start learning how to do it thousand perc

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=869s" target="_blank">14:29</a> thousand perc excellent really good items here love

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=871s" target="_blank">14:31</a> excellent really good items here love those two beat from the streets I do have one news item here that I'd like to point out here there's an article that was just recently posted there is the announcement of the activation of billing for workspace monitoring I think this is going to be important honestly I think this is a feature that many customers that I've heard have been asking for imagine you have a fabric skew it's on the larger end and you have many different workspaces that are consuming various compute us uses this is going to allow you to

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=903s" target="_blank">15:03</a> you to it's going to show you the billing for the workspace monitoring activities right so later on down the article talks about activation of building for workspace monitoring building under the underlining components for event stream and event house and workspace monitoring will will consume on March 10th so there's some expenses coming with this event stream and event house are native items in Fabric and it uses the fabric units so an event stream cost.22 compute units

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=933s" target="_blank">15:33</a> an event stream cost.22 compute units per hour the event stream data traffic per gigabyte will cost you 324 cus per hour and the event house uptime costs one CU per hour per active core so if you're hitting it very hard and you're running it a lot you're going to consume more cus so the mean these are not big numbers right you mean even on an F2 you get like somewhere on the order of like 4 million cus a month so like this is going to slowly trickle away or eat away A Little Bit of Your

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=964s" target="_blank">16:04</a> away or eat away A Little Bit of Your Capacity but I think the value of the data that you get out of this thing is going to be very useful to you and so having a monitoring workspace activity is going to be very useful it also comes with the monitoring usage metrics app and then it'll give you other details around that as well so just be aware that they're announcing this I think this is really useful you now have workspace level monitoring with realtime analytics which streams data into an event house which I think is brilliant this is what this is the only

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=995s" target="_blank">16:35</a> brilliant this is what this is the only thing I can think of for most companies that would want to see any real-time data right easy use case people are hitting models people are writing ex analyzing Excel queries we need that data somewhere landed in a Lakehouse at some point so this makes sense to me I wonder how that correlates with what we talked about on Tuesday with the template dashboards for workspace monitoring so if you create your own in a sense Dash board right now the Microsoft open source a few created by the community that when that calls the monitoring if that's

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1026s" target="_blank">17:06</a> calls the monitoring if that's additional cost as well so there's the normal so we talked about Tuesday this was another thing on the blog the introduced template dashboards for workspace monitoring those are template dashboards those are just consuming this feed of data so the event Hub ising data through those template reports are bolted onto the custo database or the The Lakehouse events and it consumes those events and builds a report for you so it's a pairing right those reports pair with this feature to stream the data in so my

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1058s" target="_blank">17:38</a> feature to stream the data in so my question is if you created a say a really extensive workspace monitoring dashboard since it's calling custo whenever you open it like let's say you made it whatever you made it terrible you made it heavy would that do an additional cost too every time it calls no you're absorbing the

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1075s" target="_blank">17:55</a> calls no you're absorbing the well depends if you're in the in the

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1076s" target="_blank">17:56</a> well depends if you're in the model and you're using the report that is directly accessing that data in custo it's going to always cost something I it's going to always cost something you're not going to get the data mean you're not going to get the data for free there's going to be some level of compute to get those things created now if you change over to like an import mode like so if you did like a semantic model importing from custo then you're only paying for the load event of that custo and then you're only paying for the compute units and the cus required to run the report so it's going to depend what you want I think honestly when I look at the stream of data that comes from the workspace there's a lot of trash in there that you just don't

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1107s" target="_blank">18:27</a> trash in there that you just don't care about like hey some Adit report don't care hey someone viewed a report edited a page added a visual like these are things I just don't care about what I care about is like the really big things like hey this MDX query came through and it came from Excel and it took 34 seconds to run and by the way it ate this much CU for that period of time that's the stuff I care about right when I start seeing events that come up to the monitoring and I see 64 cus used in like a single second

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1138s" target="_blank">18:58</a> see 64 cus used in like a single second oh oh my goodness now I need to start paying attention like that's what I need to look at so it's that stuff that I really care about and those events that are going to be important to me because now I have to figure out why is my capacity overloading and correlating that to what queries came in in the interactive side that made the the machine tip over a bit right so there's two there's probably more but there's really two lenses to what's going on here you have backend processes pipelines notebooks things that regul low data those

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1170s" target="_blank">19:30</a> things that regul low data those activities are much more consistent and even they're very it's not really it doesn't go up and down very much it's the user interactions that really cause hemorrhaging or issues or volatility whatever you want to call it within the tenant because during the work hours people are going to do random things they're going to go hit those models and

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1191s" target="_blank">19:51</a> they're going to go hit those models and so the interactive side of things is really where you get a lot a wide variety of variability and that's what's hard to plan for how do you plan for the hu huge spikes right and and those low lows so shifting through all the the muck so to speak yeah exactly

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1224s" target="_blank">20:24</a> so this is where in in my mind through Auto scale is really needed right I don't need an f128 very often I may need it for like two hours in the middle of the day great just give me it for the two hours that I need it and then bring it back down to like my normal f8 or what like whatever the thing is right I want it to handle the spikes of stuff just automatically anyways good stuff to talk about there

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1255s" target="_blank">20:55</a> anything else Tommy before we want to jump in

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1285s" target="_blank">21:25</a> I think that's good that's good on my end

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1315s" target="_blank">21:55</a> okay I'll make sure I grab this link here quickly for everyone just so everyone can see the U billing for workspaces I'll put that here in the chat just in case you want to check it out here's the link for that topic as well a lot of news and announcements today a lot of lot of things going on January is and moving into February is now quite a busy month with that being said Tommy kick us off on our main topic here let's talk about edit data models in the powerbi service now you can edit models on Mac Linux whatever the heck you want if it has a like I don't even know what iPads iPads whatever you is if you have a browser you can edit semantic models this is cool anyways Tommy go ahead kick us off a bit more of the topic I I almost feel we should have waited till episode 400 to do this just to really put a nice little bow tie on this says we won't do it again I don't know we're definitely going to talk about it again

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1343s" target="_blank">22:23</a> if you recall for those of our frequent followers our very first episode Mike made a bold prediction that we're going to edit and we're going to focus on editing models on the web which was a ridiculous statement for 2021 or 2022 and here we are now with two ways in Microsoft fabric to go in in your browser and go ahead and modify one of your already existing semantic models that you maybe published however you got it into a Microsoft Fabric in a workspace I can enable a feature in that workspace to gohe and and modify that semantic model not power query it's really just from the Dax relationships yes measures I can do all those things and I have that full editability but there's also a different there's another side of the coin as well there's also the ability and the default way if I'm creating a a lake house and I want to create a default centic model or create centic models off of that which is direct link both of these have a very similar experience but the main point here is we now have the ability Mike to circumvent powerbi desktop and be able to modify any existing models both from the Dax measures the relationships the show and hide and this is pretty incredible and I think for our conversation today is now that these features are available SL preview at least the one for editing existing models well let's talk about what does that mean not just for an individual but if I have a whole set up in a workspace with teams am I using this should I use this and when are the times to use it so let's start with just really that ability here that is pretty extensive and let's get your thoughts on what do you think of being able to edit semantic models on the web

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1406s" target="_blank">23:26</a> yeah I want to talk about a couple things here so in the p asked how are we able to edit models that lived in the service right so there's I want to maybe go do a little bit of History around some of this as well when we first got premium per user that was like the first entry into this point right so you're talking about the the UI that lets you edit the model in the web right perfectly if I'm wrong Tommy the UI to edit the model in the web that doesn't NE that doesn't only exist in fabric that exists in Pro and premium per user as well available in all of them that's what I don't remember at the top of my head while you check that out look like you're looking in your computer so so you go check it out and see works on Pro and a pro workspace but if I wanted to edit any model in the service everything had to be edited in in desktop and so I see a trend here where Microsoft is giving us hooks deeper and deeper into the service that is allowing us to get experiences when we can edit the model add a table add a measure put measures in folders like all of this feels really natural to me and a lot of it is exposing those two windows the modeling View and the Dax query view directly in the service and in desktop so it feels like the same experience in both places which is great

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1493s" target="_blank">24:53</a> sorry Tom you gonna say something

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1524s" target="_blank">25:24</a> no I was gonna say as the as you said the history of this as well not all before fabric the one feature that was available to people with a premium or premium per user was the xmla endpoint which allowed us to modify so let's let's not let's give credit there as well so for the past five years if I wanted to modify a existing model that's been published I didn't have to open up power Bay Des up per se I could used tools like tabl editor 3 and I could modify that model to the hearts content and all connected to the service through an XM endpoint and so that's what that was my point where I was walking towards was the xmla endpoint was like the key to let us touch anything in the server so everything had to be edited in desktop unless you had premium somewhere and then you'd get this URL the xmla endpoint which then other thirdparty tools could read down the definition of the model make changes and push those changes up however you you typically got locked into like I could only edit in the service it doesn't let me do anything like once you've modified the service you're done yeah so once you mod one to5 so the one limitation that a lot of people found out the hard way was if I were to modify a model on the web using the xmla endpoint yes well that ability when something happens and I need to download that Power with model locked done so you're stuck now that's less of an issue right much less of an issue now you could still modify some things and still download stuff but also now that you have the ability to edit these models right you can go get those models and if you're using like the pbir format or the pbip format now you can publish the file like the collection of files that make up a report directly to a git integrate that directly with pb.com and now you can edit in the service you can you get your changes commit to the git repo and then you can download the repo locally to your desktop and then just open up in power desktop this whole Cod they've done a huge amount of like code refactoring to make it much more inter interoperable between the service and desktop so that's where we were yeah and now where are we now but now we have all the same great desktop let's call it modeling tools right the modeling view with the model tab or the model pane on the the right hand side now is there we now have Dax query view in desktop we have timle editor great I think actually timle editor fixes a lot of my major issues with being able to manipulate and talk to the model however we don't have timle view currently in the power.com service so that's one thing I think is a little bit missing but again I'll give timle some Grace here because it just timle view just showed up like in January so I would expect some time before timl viw would actually appear inside pb.com the service

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1673s" target="_blank">27:53</a> you made it a really important note just now I think that can't be left unsaid okay before even with the xmla endpoint and when the feature came out to edit models in the web but really both scenarios there's a common issue when you were to if you were to do that really in the last few years and I want to see if you can identify that if I edited something in xmla endpoint it'll say prefabric well what's the issue what direct issu is that going to cause what direct issue is what going to cause if I were to modify something not in desktop but on the web or using the XML endpoint

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1703s" target="_blank">28:23</a> oh I see you're saying and now I understand your question it's it's it's when things get out of sync

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1731s" target="_blank">28:51</a> right yeah there's a syncing problem like if if Tommy's in the web editing things and I go to the GitHub or I go locally and try and make changes to something there's nothing that rectifies the changes between what I'm making Lo locally on my machine what Tommy's doing so Tommy could physically be changing the model while I'm also changing the model at the same time there's no co-authoring experience at this point

<a href="https://www.youtube.com/watch?v=9LyiYSDax54&t=1761s" target="_blank">29:21</a> this is why if you're ever if you're my guidance here would be is if you're ever thinking about allowing anyone to edit in the service now this is a setting so in order to edit the model in the service you have to go to the workspace settings and adjust that property U there's a link I just put in the description here about how to edit models in web so click on that link in the service here and you'll see there's a setting underneath the workspace settings it's going to be called data model set settings you'll need to tick this on and enable users can edit the models with the powerbi service this is also a setting in the admin portal so if admins turn this off it'll be disabled for everyone this feature is in preview so it's not fully released yet but it is out in preview so just be careful with that but you can you you lose this syncing item therefore you need to use get like if that's exactly where I was going yeah so like if you're going to turn on this feature if you're going to let people in edit models in the service that workspace better have get integration turned on because it makes things much more error safe oh yeah you have to now Tommy can edit make edits now the web can make edits and we can now have two different

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
