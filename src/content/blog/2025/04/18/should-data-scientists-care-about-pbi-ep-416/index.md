---
title: "Should Data Scientists Care about PBI? – Ep. 416"
date: "2025-04-18"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Data Science"
  - "Vibe Coding"
  - "Microsoft Fabric"
  - "User Data Functions"
  - "VS Code"
  - "Custom Instructions"
excerpt: "Mike and Tommy tackle whether data scientists should pay attention to Power BI, featuring a lively discussion on the intersection of data science and business intelligence. Plus, news on Fabric User Data Functions and VS Code custom instructions for Copilot."
featuredImage: "./assets/featured.png"
---

Mike and Tommy tackle whether data scientists should pay attention to Power BI, featuring a lively discussion on the intersection of data science and business intelligence. Plus, news on Fabric User Data Functions and VS Code custom instructions for Copilot.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/yUTOvIDn1M4" 
  title="Should Data Scientists Care about PBI? - Ep.416"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Common use cases for building solutions with Microsoft Fabric User data functions (UDFs) | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/common-use-cases-for-building-solutions-with-microsoft-fabric-user-data-functions-udfs//)** — Data engineering often presents challenges with data quality or complex data analytics processing that requires custom logic. This is where Fabric User data functions can be used to implement custom logic into your...

- **[Context is all you need: Better AI results with custom instructions](https://code.visualstudio.com/blogs/2025/03/26/custom-instructions)** — Announcing the general availability of custom instructions for VS Code.

## Beat from the Street

Mike and Tommy pose the question to the audience: Have you ever been vibe coding? The trend of using AI to generate code conversationally is picking up steam, and the hosts want to know if their community has jumped in.

## Main Discussion

### The Core Question

The episode dives into whether data scientists — traditionally focused on Python, R, notebooks, and statistical modeling — should invest time learning Power BI. Mike and Tommy explore the growing overlap between data science workflows and the BI layer, especially as Microsoft Fabric brings these worlds closer together.

### Where Data Science Meets Power BI

With Fabric unifying lakehouses, notebooks, and Power BI under one platform, the line between data engineering, data science, and business intelligence is blurring. Data scientists who understand how their models and outputs get consumed by business users through Power BI dashboards have a significant advantage. The semantic model layer in Power BI becomes the bridge between raw analytical output and actionable business insights.

### The Practical Argument

For data scientists working in Microsoft shops, Power BI literacy isn't optional anymore — it's how stakeholders actually interact with data. Understanding DAX, data modeling, and report design means data scientists can ensure their work lands effectively rather than sitting in a notebook nobody opens. The discussion highlights that the most impactful data scientists are the ones who can close the loop from analysis to decision-making.

### Vibe Coding and the AI Angle

The conversation also touches on how AI-assisted development (vibe coding) is changing the game for both data scientists and BI developers. With tools like GitHub Copilot and custom instructions in VS Code, the barrier to crossing between Python and DAX is lower than ever.

## Looking Forward

As Fabric continues to mature, expect the data science and Power BI communities to converge further. Mike and Tommy encourage data scientists to invest in understanding the BI layer — not as a distraction from their core work, but as a force multiplier for impact.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=32s" target="_blank">0:32</a> Welcome back again to another Explicit Measures podcast with Tommy, Ginger, and Mike. Hello everyone. Welcome back to the podcast. We have another caller in today. Ginger's with us. Ginger, welcome back to the podcast.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=44s" target="_blank">0:44</a> Thanks for— We're just going to kick you off here right from the very beginning. Ginger has joined us for this. This is our second episode with Ginger. We're going through things about data science.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=51s" target="_blank">0:51</a> So our main topic today is around should the data scientist actually care about Power BI? Maybe the question is really even did they even care about Power BI before we had Fabric? What does this new world look like for a data scientist and the intersection between that and Power BI?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=69s" target="_blank">1:09</a> But before we get into our main topic today, let's jump over to some of the news articles for today. All right, Tommy, what do you have for us here? What news are you bringing to us?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=78s" target="_blank">1:18</a> We got a few, we got another great article on the Fabric blog about user data functions. Not to be confused with defined functions. User data functions are in Fabric. And this article is simply about some common use cases for building solutions.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=93s" target="_blank">1:33</a> And just talks about different ways that you can implement it. I think for a lot of people right now user data functions are a bit— it's a bit of a black box, still a little ambiguous in terms of application for it. Where can I use it?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=106s" target="_blank">1:46</a> So the article tries to outline all the different areas that you can use it. I went through this. I'm intrigued to hear you guys' thoughts before I jump in, but after reading this, Mike, what do you think of this?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=119s" target="_blank">1:59</a> Well, let me just give you my impression of user data functions. Okay, first off, the naming is ridiculously confusing. These things are called UDFs which is the same thing as what's in now Power BI or coming to Power BI which will be user defined functions.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=137s" target="_blank">2:17</a> I already messed it up. See this is already tripping me up. User defined functions is inside DAX. User data functions are basically Azure functions that have been brought to Microsoft Fabric which is like a software as a service for a function.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=155s" target="_blank">2:35</a> So my initial impression here, Tommy, is I really like this one. I am also very maybe not miffed, but I'm a little bit more curious as to why the graphic they showed on this page has a lakehouse.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=170s" target="_blank">2:50</a> Okay, I understand what that is. It has a pipeline. Got it. Know what's going on. These little effects functions. Okay, fine. Maybe the functions are replacing like a notebook that I would do data transformations or something like that.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=180s" target="_blank">3:00</a> This is pure coding of stuff, right? And then we get to this very end of this diagram and they got this weird new shape and they're saying API for GraphQL endpoint and then they're saying land your data in an internal web application.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=197s" target="_blank">3:17</a> And I'm like okay wait a minute, time out. All right we're talking about user data functions here and all of a sudden we're now talking about web apps and GraphQL things. I really like those. I think they're really strong and powerful tools.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=215s" target="_blank">3:35</a> But to me it's missing the whole audience of what we're talking to Fabric here and the Power BI audience. Where's the semantic model? Where's the report? What's the value being added to this thing?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=225s" target="_blank">3:45</a> This feels like we're trying to really shift the story away from hey this is a Power BI reporting space to this is an app build. I'm looking at this going this is totally app building.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=237s" target="_blank">3:57</a> And maybe that is the story here with UDFs for Fabric. Maybe we are talking a lot more data apps with APIs, access endpoints, all the other things that go on top of it. So that was one of the things here.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=251s" target="_blank">4:11</a> I really like them. The other impression I have is do you guys follow Mim on Twitter? Mim is just Mim. It's Mim DJ O. I don't remember Mim's last name, but Mim has been talking a lot about UDFs.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=273s" target="_blank">4:33</a> And he said I saved a lot of consumption today just by moving down his logic into UDFs. He made 288 calls per day across four different data sources. And he substantially reduced his consumption on the Fabric.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=290s" target="_blank">4:50</a> And I think he's showing you numbers by day. He was doing like 4,500 CUs per day of consumption. And he basically shaved off like a third of that in one day just by transferring over to UDFs.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=303s" target="_blank">5:03</a> So I do know that Azure functions are extremely cheap to run. They're extremely efficient from that perspective. So I like this a lot because this is another tool in our arsenal, in our toolbox to make an efficient data pipeline.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=320s" target="_blank">5:20</a> And we can probably bring data to bronze easier and cheaper. But this is a holistic— this is a full code option, all code. So I don't think it's going to be used for your average everyday user.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=334s" target="_blank">5:34</a> Maybe data engineers, data scientists will like it but I don't think it's something that an average user is going to use. Sorry I'll pause there. Ginger, what's your impression?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=343s" target="_blank">5:43</a> I can't tell what by this article that they're for or what they do. I know what Medallion Architecture is. But the how they're integrating, I don't get this. But I really am going to be looking at Mim's stuff because that sounds very interesting.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=358s" target="_blank">5:58</a> I think that— well, so let me give you some more context of where I think this is going to fit, right? We're going to do the work in notebooks. It's just going to happen. We're going to do the work in pipelines. It's just going to happen.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=371s" target="_blank">6:11</a> But there are certain things like API calls or talking to a web service— like yeah I can build a pipeline to do that stuff. But it might actually be easier or I might be able to find a pattern if I'm just making an API call, getting a JSON object and then saving that back down to the lakehouse.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=388s" target="_blank">6:28</a> That's a perfect use case to replace your pipeline with something cheaper to run which would potentially just be a UDF, user data function. So I think there's a really great opportunity here and a lot of these diagrams they show in this article are all around interacting with a web app, sending data to and from an actual web application.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=409s" target="_blank">6:49</a> One thing I think you'll also notice as well, the user data functions are also used in the translytical workloads. So translytical is this other term that Microsoft is trying to work on where they say look we have a Power BI report, you can select some data from that and then you can physically send that data to a UDF, user data function, which can then update a record, put it in a SQL table, insert something.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=437s" target="_blank">7:17</a> Right, it can actually— you can actually take some information in, add or write the data immediately as soon as you press the data. So I do think I see Lumel having something as a workload inside Microsoft Fabric and I think they're going to take advantage of this, software as a service functions and databases and SQL databases.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=458s" target="_blank">7:38</a> I think they're going to be able to leverage this to allow people to make tables of data super editable or dynamic all inside Fabric but you're going to be using the UDF as the main workhorse— to when an event occurs do something with it. Does that make sense?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=476s" target="_blank">7:56</a> That's a completely different data paradigm though. That's basically it— this may be a mini rant so bear with me here but Mike your comment about how much this saves compared to using a normal pipeline.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=491s" target="_blank">8:11</a> I'm fine with the UDFs here, the user data functions, especially if it's more for the developer role. But if the fact here that compared to a pipeline this saves more consumption, then who is this for, right? Because if we already know that Power Query is something available but we know how much CU use that consumes.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=509s" target="_blank">8:29</a> Okay well don't use Power Query, use notebooks. Oh wait, now UDFs are here and they're better than notebooks or better than pipelines. Well I'm not a fan of all these products being one-size-fits-all where they can do everything, right?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=526s" target="_blank">8:46</a> I'm more on the thing where some things are better than others. Around for web applications, yeah, user data functions. But if I can do the same thing here, well then Fabric completely changes for who it's for. And there's a thought here because all of a sudden the business user, well they're going to naturally go to Power Query.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=547s" target="_blank">9:07</a> It's just the natural thing for a business user to do. I'm not gonna expect, right? But so if this can do everything up into the notebook or up into the database that a notebook can, but it can do it better. Well, all of a sudden all those other things, why would I want to have anyone using those CUs?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=565s" target="_blank">9:25</a> Let's even talk about our Fabric leaders at this point. Like let's talk about the leaders in our organization. We now have so many choices and this is great, right? I love choices. But Tommy, all this is doing, this is securing our jobs for years now.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=581s" target="_blank">9:41</a> Because now, so here's the pecking order. How I see it, it starts with data flows gen two, most expensive thing you're going to run. Data flows gen one, cheaper, but can't use a lake. Boo. Then we see pipelines and copy activities. Cheaper still, better, right?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=597s" target="_blank">9:57</a> Notebooks, better, cheaper, right? I would put notebooks and pipelines at the same level as far as efficiency, right? And now we've just added another item which is now UDFs, even cheaper, more efficient. But it's the pricing model.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=612s" target="_blank">10:12</a> So if we as we look at each of these tools all of them have a quote unquote different pricing model on how many CUs you can use and consume. So I really think to your point, Tommy, all this is doing is it's accelerating the story for data engineers and potentially data scientists to use these things, right?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=631s" target="_blank">10:31</a> Because they're already used to writing lines of code in either Python or something else, right? They're comfortable with that. I would also argue I don't think this feature is—

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=638s" target="_blank">10:38</a> I don't think this feature is really geared towards the business user at this point. No, but go ahead, Ginger. Up to you.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=646s" target="_blank">10:46</a> Well, one thing too is they're trying to push this towards, this is really easy to debug. This is basically one of those things that's like the guy who you come up after because he was the best guy who did this thing in Excel and nobody knows it. This has the potential of being that one guy.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=667s" target="_blank">11:07</a> Nobody else knows how to maintain it. Once you start using it, you have built the barrier to entry. You've made it more inaccessible for the common user. And if part of my process when I'm talking to clients is, "What? You can use Fabric, you can actually have a lakehouse now because you can use data flows, you don't have to be an engineer to start getting your data in."

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=689s" target="_blank">11:29</a> Sure. But you do need an F64 compared if you look at the skew because you're using data flows, right? Yeah. Well, if we come in and we start putting in UDFs and notebooks, well, I've closed now how many people can use Fabric.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=702s" target="_blank">11:42</a> And to Ginger's point, exactly. Well, it's only available for people who know that language. Yes. Again, we already know, we've already talked about notebooks and now we're adding another layer here where if a consultant came in or one of us nerds came in and started using UDFs, well, guess what? Only that person or that type of person can go in.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=728s" target="_blank">12:08</a> And now for the business user, where does Fabric fit? Yeah. And I think it's going to be interesting to see where this place moves. I think I do like the idea, right? So, I'm not going to poo poo this idea. I like the fact that I get another option to pick something that I'm doing here.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=741s" target="_blank">12:21</a> Again to your point, for larger organizations where they have multiple scales across multiple team members, this makes sense. This is definitely like when writing Python UDFs or user-defined functions, that makes sense to me. We should do that.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=754s" target="_blank">12:34</a> And I also think writing sometimes just pure Python and getting an API call completed, token request, sometimes token handling things are very complex to get a token. The function can do really complex things, like have all these different items in them.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=770s" target="_blank">12:50</a> What will need to be delivered at some point will be a tight integration between these user-defined functions and something like a key vault because what I don't want to do is store my secrets or my secret elements inside the function itself. Rather I need something somewhere to store those secrets somewhere else that's not inside the function, which then is not inside the code that doesn't get checked into git.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=795s" target="_blank">13:15</a> So to me, I'm looking at this going, I like the idea. This is really cool. Definitely love the idea that we can replace our notebooks, or like once you know the data engineering you're doing. Yeah, you could probably, you might even be able to go into your notebook and say, "Hey, I'm taking this cell or this notebook, talk to the Copilot and say take what this notebook is doing."

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=818s" target="_blank">13:38</a> Here's the defined data frame or the files where I'm picking them up from. Create me a UDF function written in Python that does the same things. And you might be able to get pretty close to the answer you need. And then the AI of this, to your point Tommy, right, you need to have people who know how to write this code.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=838s" target="_blank">13:58</a> AI is making the barrier to entry for these things getting much lower. This is another good point, Ginger. Yeah, you were gonna say something? I was gonna say I just agree with you because I forgot about AI. AI is so new and I still don't see people adopting it at the rate that I think that they should.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=854s" target="_blank">14:14</a> But you're right. If you could just go to the code and say, "What is it doing?" Problem solved. So AI is really good when it has an example to work from. And if you have a notebook that's done, that's a great example to feed into the AI. It can read the Python. It knows the data frames. It can see what's going.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=876s" target="_blank">14:36</a> Okay, this is going to go into our next topic. So, let's go on to our next topic because I have another whole — Michael has gone down a tangent. I was up extremely late last night. So, let's get on to our next topic and I think we'll have more conversation around large language models and where they fit inside the context of coding.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=892s" target="_blank">14:52</a> Tommy, you found another topic for us. Give us our second news article of the day. Well, I'm interested to hear about what you have to say. So, there I think they go very well together and it's custom instructions. Oh, should I do mine first? Yeah, I want to hear about what you got? Okay.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=905s" target="_blank">15:05</a> All right, ladies and gentlemen. I'll give you a quick story and then I'll actually talk about my item here. This is a beat from the street. Basically, I have been working on websites. I've been doing a lot of app development and building.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=920s" target="_blank">15:20</a> At Fabric Conference, I just released the Microsoft Intellexos application, which is an embedded application for users to get embedding their reports in Power BI. So, Power BI embedded for your organization. You can start in hours and not have to worry about doing that in months of time at development. So really rich experience.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=937s" target="_blank">15:37</a> No UDFs needed. It's all user friendly. Go to the Azure marketplace. You can download it. So in doing that there's a lot of these other things you need to build that go along with that, like update your documentation. You got to build these other things.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=951s" target="_blank">15:51</a> Well, okay, introduce Michael's problem. Yesterday I was looking at our code and we had a documentation page. On our docs page we have — I don't have any Google Analytics. So, I'm using a program called Astro.build, which is an open-source templating type program that uses TypeScript, TSX I think is what it is.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=975s" target="_blank">16:15</a> Anyways, we're using it so you can write Markdown files of the documentation and then from there you can just read about the product, right? I can add more pages. It's just simple markdown. I write Markdown and the website's built and compiled. Great.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=989s" target="_blank">16:29</a> Well, I could not figure out for the life of me how to add Google Analytics to this thing and I was getting so angry and I was getting so frustrated. I'm like, "This is ridiculous." So, I just so happened to have installed Cursor on my computer.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1001s" target="_blank">16:41</a> Yeah. And so, I said, "Okay." After probably about three to four hours of just mucking around with building or trying to at least add Google Analytics into this website, and I couldn't do it. It still wouldn't work. Nothing was sending any data anywhere. I didn't know where to put the code. It didn't look like my other sites that we had built previously.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1020s" target="_blank">17:00</a> No. So, I'm frustrated. So, I went over to Cursor and I said, "Hey, Cursor, using Astro.build as a template, build me a documentation page that has this kind of navigation menu, that the menu feature options look like this. Has a search bar, has all these things." So, I just started stubbing things out.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1040s" target="_blank">17:20</a> And I'll be doggone if I didn't have Google Analytics added, a brand new website made with new logos, all new menu items, and not even that, I had stubbed out pages with the folder structure completed in less time than it took me to beat my head on the wall to figure out how to put Google Analytics the first time.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1062s" target="_blank">17:42</a> So, this was — I think they call this vibe coding, right? You talk to a large language model. It does some things on the page. It makes some pages. It does some code. Holy cow, I was floored.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1074s" target="_blank">17:54</a> And so whenever I hear about AI or Copilot showing up to something, this is the kind of experience — like this is the aha moment that I want to have when I interact with Copilot or other AI experiences. I do something and it almost shocks me how good it is. It's like, wait a minute — it feels like my mental model was changing about this Cursor program.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1099s" target="_blank">18:19</a> Halfway through my vibe coding experience with this, I'm starting to like — it's communicating to me. It says not only will I ask it to do something, it'll say, "Let me think about that. Let me read your code." It will go through. It'll then read the code. And then it would come back and say, "Okay, I think I know what to do." And it would rewrite the whole code section.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1117s" target="_blank">18:37</a> And it would describe to me, "Okay, I'm doing this. I removed this. I've added this. I've changed the formatting of this. And here's the property that I'm changing." So you could read it in easy to understand terms. It literally — I have like a coding buddy next to me and they're helping me learn the code right alongside me. I was blown away. This is crazy cool. This is amazing what's happening here.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1142s" target="_blank">19:02</a> So anyways, I'll just pause right there. Tommy, have you vibe coded and is this the same experience that you've had with it? So there's two big things that are what this vibe coding is and what's making it actually possible.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1155s" target="_blank">19:15</a> Now, Cursor introduced it and VS Code just announced it as well. So, there's two big things here. There's this idea of custom instructions and agents that are making vibe coding possible. And again, the definition here of vibe coding is really just building applications simply through using your AI and letting it do it, letting it do its thing.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1176s" target="_blank">19:36</a> So this idea with agents, we've been used to Copilot in VS Code where here's a page, make some edits to this page. The difference with agents is I may have a project — for your example, I have a site with multiple pages and multiple files. Each page is a separate file.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1194s" target="_blank">19:54</a> Right. What agents actually do is rather than, "Hey, I'm going to just edit this one page," it can look at the whole codebase and basically make all the edits. Create pages. It's creating files, creating the right script necessary.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1207s" target="_blank">20:07</a> Right, with Cursor they have also the reasoning one, so Claude and Google, which will actually say, "Here's all my instructions," it's going to reason and actually make the steps then do the coding. You can grab coffee, your application's built. It's so fast.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1222s" target="_blank">20:22</a> And it does this other weird thing too where not only was it writing the code for me, it was then even getting the feedback of the error messages that the code it wrote was doing. And it would read it.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1234s" target="_blank">20:34</a> Sometimes it would write a section of code and it thought it did it right and then it would read back the window of where the code lives and says, "Oh, I see there's an error on line two. Let me look at that a little bit closer. Oh, I see. I didn't quite add the references the way I should have." And it says, "Let me try a different approach." And it would try a different approach. It would rewrite it and it would work.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1257s" target="_blank">20:57</a> And I'm like, "What the heck?" And then it started talking to me like, "We just did this. We just did that." And after it did something hard, I was like, "Good job." I almost — I typed it into the window. "Good job. I think we got it." And I'm like, "Wait a minute. It's a computer. It doesn't have a clue what we're talking about. It has no emotion." Like I was floored on how good this was.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1277s" target="_blank">21:17</a> And I thought I knew it was good. I knew people were raving about it. But oh my goodness, I did not know it was this good. And this is fundamentally shifting how I'm perceiving what is the expectation for where we put co-pilot to things.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1294s" target="_blank">21:34</a> This raised the bar tenfold for me here on especially in writing code and this is what gives me hope for things like user data functions which is like all right put a great vibe coding experience next to that and done, we're complete.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1307s" target="_blank">21:47</a> Here hey cursor here's my notebook from spark, from my spark notebook, rewrite this whole thing and make it just a single function. That could be possible now.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1316s" target="_blank">21:56</a> A lot of people fall into the trap with AI that they take it in the lazy approach where I'm just going to ask it with a sentence and expect it to fix it all. But it does take a little, the more effective you are with these AI agents, the more effective it's going to be.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1332s" target="_blank">22:12</a> So one is understanding the right agent to use. But what VS Code just introduced and cursor's had it is this concept of custom instructions around a project. I'll give you a good example that would be completely relevant to PowerBI.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1345s" target="_blank">22:25</a> I have a git repo with a bunch of TMDL files. I can write in that repo and in a certain folder a semantic model. In copilot I think it's like custom copilot instructions that has all the instructions that I want it to behave, act and understand before I ask it anything.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1365s" target="_blank">22:45</a> Such as I want you to only write code back, I don't want you to ask me questions, I want you to do it yourself. This is a PowerBI model, here's the objective. So it's basically the instructions you're going to give it before you start actually prompting it.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1378s" target="_blank">22:58</a> This is essential and that changes how it's going to write. So really any project that I'm doing in VS Code has that type of file or multiple files. For example, I'm going to ask it if it's a PowerBI, I give all the instructions.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1396s" target="_blank">23:16</a> This is a PowerBI TMDL model. Do not edit any of the definition files until I approve it. So it's not like please take a look at this report folder, this is connected to this, here are the things that I want and then you can start asking it questions and that's really where you see the effectiveness.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1414s" target="_blank">23:34</a> So these custom instructions if you're using VS Code or any of these tools they're a game changer, you have to really start using them. And they're written in markdown. You can reference files and folders.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1430s" target="_blank">23:50</a> So I put the article here too. Visual Studio Code now has custom AI instructions and you'll see in the article here there's some coding standards they have. So basically you can set your coding standards, right? Use camel case for variable and function names, use Pascal case for component names, use single quote for strings, use two spaces for your indentation.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1454s" target="_blank">24:14</a> So all the things that you would set up with a new user, like here's our standards of what we would use. This is how you would leverage these common design patterns. So that way don't edit the code until I do this, or use the latest JavaScript features ES6 plus where possible.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1474s" target="_blank">24:34</a> Wow you can get really specific with this to get exactly what you want out of it. Four areas I always add custom instructions. I say context, what it's about, objective for the overall project and then the coding standards. Those three things are always part of the custom instructions.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1493s" target="_blank">24:53</a> And it's really Mike to your point, people need to get started in this. And it works with PowerBI too. It works with TMDL. It works with the coding language that we have in Fabric.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1500s" target="_blank">25:00</a> Oh, so yesterday in my middle of my vibe code session when it asked me, hey, do you want to add this file to something to help the copilot? I'm like, what is that doing? I don't even know what that means. I think the little VS Code was prompting me with a little message to make the copilot-instructions markdown file in the GitHub folder.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1520s" target="_blank">25:20</a> So where this lives is if you're in VS Code and you're using copilot there is a .github file folder that's made and then under there this is just a markdown file that you write and then from there you put the instructions inside that. That's really cool. Wow. This is amazing.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1539s" target="_blank">25:39</a> So anyways, I was floored. I was very impressed and I'm still so the website sadly the website is not published. It's not out. I haven't done anything with that. But this was just a very big exploration for me.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1553s" target="_blank">25:53</a> We still have the old documentation site up and running and we'll figure out how to get Google Analytics on it eventually. But I was just taking a very big rabbit trail tangent and it was doing other things like I was doing crazy stuff like add a search bar at the top of the header.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1568s" target="_blank">26:08</a> And then when the page size shrinks below 700 pixels take the search bar and make it very small and just an icon and not a search bar. Crazy weird things. You could get very hyper specific.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1582s" target="_blank">26:22</a> And one thing, let me give you the dark side of this. The dark side that I saw was when I asked it to write the navigation menu on the left side and then the actual content on the main page, it coded the entire navigation menu.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1596s" target="_blank">26:36</a> And again, you have to do this anyways when you're building apps regardless, but it wrote a lot of redundant lists of HTML, right? So the menu on the left hand side is a bunch of lists. Here's a list for all of the main headers, and there's a list for every page under any of the subheadings.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1615s" target="_blank">26:55</a> So it did a lot of extra work and it wrote a lot of just verbose HTML instead of, again this is probably my lousy prompting at this point, right? I probably should have said make a component for a navigation menu.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1627s" target="_blank">27:07</a> Okay, now in that component make a component for a header. A header does these things and then under the header make these pages and then make this all component-based. So I think I could have prompted a little bit better, but it just built the HTML straight up.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1642s" target="_blank">27:22</a> It worked just fine. My challenge now becomes that if I wanted to add new pages or add new things, I'm copying a lot of HTML over and over and over again. So what I'm starting to do now is I'm starting to go back to sections of code inside this and say, okay, this bit of code is repeated multiple times.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1662s" target="_blank">27:42</a> Highlight the code, tell cursor, here's the bit of code I'm talking about. This code looks like it's repeated multiple times for every single page in this navigation menu. Make this a component and add this and this and this as parameters.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1675s" target="_blank">27:55</a> And then the code gets much shorter and it basically makes a new file. It makes a component. It builds what I need for that interaction of that element, but it doesn't make me have repeating code over and over again.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1688s" target="_blank">28:08</a> So I think this is something that you as the user writing or talking to the LLM, you must understand the code structure. What is, again talking about website development, what is a component on a website, how is that component reused multiple times.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1706s" target="_blank">28:26</a> In each of these code blocks that you're building, where is the uniqueness coming from and how can you communicate to the AI what are the input properties that you need for it to work correctly or successfully.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1719s" target="_blank">28:39</a> Does that make sense? Yeah. I totally think it makes sense. And also, I think that Jack Herby had a great point. So you can tell it what it should be doing.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1731s" target="_blank">28:51</a> Well, yes. Let me blow your mind one last time and then I'll be done. Keep going, Tommy. Keep going. Tommy loves AI.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1739s" target="_blank">28:59</a> This is going to blow your mind. You have two custom instruction pages, two different agents. You do your normal one. The other one is your point deduction editor which you simply tell it go through the code after your first co-pilot or agent goes through and does everything.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1755s" target="_blank">29:15</a> The other one deducts points from the first agent. You basically tell it I want you to go through the code. Agent one did X Y and Z, apply best practices and wherever this agent did not, such as redundant code, deduct points and then go through and apply the best practices according to X Y and Z.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1771s" target="_blank">29:31</a> So there's basically two different custom instructions, two different agents that are reviewing each other. This is and it's completely easy.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1780s" target="_blank">29:40</a> Oh, no. So you really don't have to know what you're doing. You have the other agent who knows what it's doing. Well, yeah, but somebody has to tell the supervisor agent, hey, these are the rules.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1799s" target="_blank">29:59</a> And Jinger, I want to echo your same point there as well. There's this idea of you need to step back and know what the vision is. So one of the things that I really liked about this vibe coding experience was I was able to step back a bit.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1812s" target="_blank">30:12</a> I was able to step back from like I need code to do this accordion menu thing. That's one thing you could get really deep into the technical side. But when I let the co-pilot just own that, that junior developer standpoint, and could step back, I could say make a menu, make a nav menu, do this.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1831s" target="_blank">30:31</a> And then I actually found it was teaching me a little bit, right? About like okay I didn't really like the style of that. And one thing I really like about this cursor app was you would give it a prompt, it would do a bunch of code manipulation and then you could always, if it did something that you're like whoa whoa that was really not right, you could always go back and say revert to this step.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1852s" target="_blank">30:52</a> So that's something I've never seen before which is the ability of letting the co-pilot do a bunch of code generation for you and then you were able to like yeah I didn't like that step and you could walk it all the way back to where you were previously and it would restore the files to where it was.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1865s" target="_blank">31:05</a> So that was a big win for me but I could stop thinking about the code and how the code interacts with the page. I could start thinking about the structure of the page, where does the navbar go, what does the spacing look like, and I could literally let it run its code.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1881s" target="_blank">31:21</a> And then meanwhile, I'm on a different page here looking at inspect the page elements, looking at the padding and the margins and like hmm that looks a little bit too far apart. So I really felt like I was able to take on more of the role of a program manager or a PM.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1896s" target="_blank">31:36</a> I could take the lens of where I'm used to looking at is in the code. I could step back a step and get a higher picture of what was happening. And I could architect and design at a higher level, which was very refreshing.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1910s" target="_blank">31:50</a> And after my four hour Google Analytics head bashing episode, it, I was like, this is why I

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1915s" target="_blank">31:55</a> I was like, this is why I stayed up till 2 a.m. doing this, because I was so excited about like, oh my gosh, this is making so much progress. Oh my gosh, I'm almost there. I'm getting close to getting a finished product here. This is something that could be real.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1928s" target="_blank">32:08</a> So now my next step is to figure out is this something I could actually get into a deployable solution or how can I leverage this somewhere else. This should make it really easy for anyone to go out and build a GitHub pages experience.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1950s" target="_blank">32:30</a> This reduces the barrier to building your own website for you, your resume or whatever. Like zero. If you spent four to eight hours in one day just asking it to build you a website, you could probably knock this thing out in less time than that and have it automatically deployed and done running on GitHub for free.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1973s" target="_blank">32:53</a> It's going to reduce the barrier for people to get into the marketplace for building apps, dev things, and all this other stuff. And I'm very excited about this because this is good now, dude. Wait until a year from now. What's this gonna look like in a year from now? It's going to be insane.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=1993s" target="_blank">33:13</a> So anyways, let me recap things. Mike and Tommy and Jinger, we've all been very excited about this vibe coding experience. This first 30 minutes of the episode of the podcast has been nothing about Power BI other than the user data functions. But let's kill that conversation.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2009s" target="_blank">33:29</a> How about we move back over to our main session because we're already 30 minutes deep and we've just been talking about this weird vibe coding experience and how this is going to change everything we do. So let's move back over to data science now, which is related to this vibe coding experience here as well. But let's jump into our main topic now.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2026s" target="_blank">33:46</a> We'll talk about should a data scientist actually care about Power BI. All right, Tommy, let me kick it over to you. Give me some initial thoughts, Tommy. Where do you think data scientists fit in this world and then we'll discuss from there.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2038s" target="_blank">33:58</a> Oh, well, this is a conversation we've had multiple times over the last five years of doing this podcast and something that was really brought up our last episode with Ginger where we've found a problem for business intelligence people to get data scientists actively and volunteering involved with Power BI.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2059s" target="_blank">34:19</a> And we're talking about the Power BI platform not just Fabric where there's been push back, there's been "I want to use my own tooling." I personally found it incredibly difficult for them to buy in with "we're gonna use Power BI." They talked about it being a different world.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2077s" target="_blank">34:37</a> And at the state of where we are now with Fabric and the state where we are with Power BI being so across what we do around data, for a data scientist or for anyone in the data science area, where does Power BI have any value to them? Should they care? Should they actually look into using it at all?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2098s" target="_blank">34:58</a> Because right now a lot of the times we see where they want to use their own tooling, their own platform. So really the questions are here, is should a data scientist really look for it? From the center of excellence push, should we push data scientists into Power BI? And if we want to, how can we?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2118s" target="_blank">35:18</a> So let me kick the question over to you Jinger as well. In light of those framing points around what is the lens in which data scientists look at Power BI and Fabric, and what are they interested in or not interested in there? What's going on from your perspective?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2134s" target="_blank">35:34</a> Well from my perspective they used to want to visualize the results but they backed off of that and just said nah I'm not going to play in that world. It's too much of a leap. But what I think is that they just want to not have to deal with the implementation.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2149s" target="_blank">35:49</a> Yes. So not do anything with Power BI per se, but their goal is to have somebody — we all want somebody to use the work that we've done, right? Yes. So it's more like I want to create a module and then we'll put that in the process so that you can get the data out of it and then we're done. I'm out.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2172s" target="_blank">36:12</a> So is that completely? So I do not see a demand. Back in the day I did know some people that were playing around with R because they could get the cool visuals in, but with things like Deneb you don't really need that. And they never really adapted it for their visuals.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2188s" target="_blank">36:28</a> So I think that they used to care more and now they care even less. Wow. I would agree with you Jinger. I think a lot of this is, if you think about the presentation layer or the consumption layer of what the data scientist is doing, there seems to be a handoff that tries to occur somewhere in here.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2205s" target="_blank">36:45</a> And I think if I think about where data scientists enjoy or where I've seen them working to use their skills the best, their skills best are served in loading the different data, shaping data. It's in weird, really weird formats. We've got images, we've got to pull text out of things, we got to do a lot of text analytics.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2225s" target="_blank">37:05</a> There's other things like how do we know which variables are correlated, correlation matrix stuff, doing very heavy analysis. And what I have found is data scientists like to stay in their Python, they like to stay in their notebooks and they just build what they need to build.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2243s" target="_blank">37:23</a> And I had a developer, a data scientist, who was writing a whole bunch of R inside a SQL server and using the SQL server to run the R to produce the data science results that we could then regularly kick out. So where I find is data scientists are really good at figuring out how to solve the problems, really able to figure out what analytics we need around the data.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2274s" target="_blank">37:54</a> What we lack I think though is the polish on the presentation side. And there's this idea of a data pipeline. Now again I'm just very much generalizing my experiences with data scientists that I have. This is not to put all data scientists in a box. Some are great at making a pipeline.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2292s" target="_blank">38:12</a> But I have found the data scientists that I have worked with, they are not interested in doing the data ops or the data pipeline of things. They want to solve the problem. They want to look at the technology. They want to write Python however they want to write it. They're going to use random SQL. They may use some R. They may use notebooks. They may use local machine stuff.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2308s" target="_blank">38:28</a> But they're not thinking about how do I productionalize what I built into a system. That seems like that's a different persona or user. And so where I think pairing this really well was bring the data scientist in to work in the medallion architecture and then once we get to gold, bring in that data engineer.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2328s" target="_blank">38:48</a> And say okay what did the data scientist produce? How do we join their results back to our normal star schemas and models and then pull in that to our reporting so we can actually see the predictions, the forecasting? I'll pause right there.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2347s" target="_blank">39:07</a> Tommy, you're nodding your head here. Looks like you got something to say. Well, I think it's important to take a few steps back even before you get to the pipeline because for the data scientists, I think the difference between us and data scientists is the product life cycle or how long it is, really what their objectives are there.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2367s" target="_blank">39:27</a> And correct me if I'm wrong, but there's really two project based initiatives that data scientists are going to do. It's going to be systematic where something like the credit card fraud where it doesn't really live in a report. It's a module or model that's actually living in the system itself that's manipulating the system through data.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2386s" target="_blank">39:46</a> Or it's project based one off types of reports where we're going to present something that was asked of us but it's not meant to be viewed for a long time after. We want to see the results of this. Both of those don't fit well with how we develop in Power BI.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2401s" target="_blank">40:01</a> Our objective usually with Power BI is a semantic model. Usually that's going to live longer than a week or longer than a day. It's going to have a longer product life cycle. So when you split that up, you have the data scientist who's systematically changing data in the back end or a single presentation.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2422s" target="_blank">40:22</a> Which again would be pretty difficult to do once in Power BI or for a data scientist. I can easily just visualize this in a notebook or visualize this in PowerPoint for my consumers. But I really don't have consumers. I have project based presentations or everything's systematic. So, they're really different worlds even before you get to the pipeline.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2444s" target="_blank">40:44</a> I don't know how accurate that's still the case, but Ginger, I'll drop it to you, how close is that? I think you're right, but there's one thing that you haven't mentioned — it's technically more a Fabric thing than it is in Power BI, but I really see that there's probably more of a use of data scientists if you're talking about streaming.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2470s" target="_blank">41:10</a> I would agree with this one. I like where you're going with it. Yeah. And so I think that where I would see that they would be more likely to be involved in a Fabric environment because to your point, here's just one answer. I don't really need to be involved with what is going on here. But if you're doing real-time analysis of streaming data, different story.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2496s" target="_blank">41:36</a> Yeah, I like that point as well. I think Jinger, when we start moving to delta tables, parquet — it's not difficult for people to understand, but I think when I came from the business intelligence world and I started doing data science, data scientists were already on this bandwagon of lakehouses and delta tables.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2517s" target="_blank">41:57</a> And then Delta Lake came out and that was a game changer for me. I was like wow, Delta Lake is really nice, it solves a lot of my normal SQL warehouse ACID transactions problems. But that was a data science thing. I understood it. I took classes on it. I studied this in school.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2534s" target="_blank">42:14</a> Most of my business intelligence people didn't. Maybe they did if they were like a DBA on a SQL database. There was a whole storage engine inside SQL and indexing and all this other really interesting things for SQL to make it performant. Right? We have these two worlds that are very different. We had the SQL DBA traditional business intelligence.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2552s" target="_blank">42:32</a> Traditional business intelligence and then we have this new data science realm here that's really shaking the game up and now we're blending those two worlds. I think a lot more so because when you look at what features were added to fabric.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2566s" target="_blank">42:46</a> Fabric originally came out with the lakehouse and the notebooks first. They always had real-time analytics to your point Ginger, like that's a very data sciency thing right there. But then only just recently have we just gotten SQL Server.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2579s" target="_blank">42:59</a> So, I think the DBAs felt like they got left out of fabric for a little bit here and now we're just starting to incorporate them. And so, I agree with you. Real time analytics is interesting. How do you stream data into tables?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2594s" target="_blank">43:14</a> Will Thompson does the real-time analytics or has been doing things there. He's doing a great job, by the way. The product's getting better. It's getting easier to use the real-time analytics of things.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2604s" target="_blank">43:24</a> One thing I will observe, though, is he made a comment that resonated with me. He goes, "Very rarely is your data static. Is it sitting in one place and not doing anything?" And what he meant by that was you're getting emails in your inbox. It's event driven.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2620s" target="_blank">43:40</a> Most of things you're doing are event driven things. So now it becomes our team's need in the business intelligence and central BI. We have to not only do historical reporting of what happened in the past, we now need to be mindful of what parts of our data is actually streaming and what would we care about that is streaming.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2644s" target="_blank">44:04</a> So again, I think we're in an era here. We're either in the middle of it or we're getting to the mature side of it where everything comes with an API. Everything does. So before we had APIs to talk to applications, everything was siloed.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2660s" target="_blank">44:20</a> But I think now that APIs exist and we have all these web hooks and APIs and every app that you see come out now has a data layer that you can talk to and communicate with. And I'm going to go back to the large language models.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2672s" target="_blank">44:32</a> Now we have these model communication protocols, MCPs, that can talk to these APIs for you on behalf of you. And then I can just talk to the software. Right? I saw a demo on X last night when I was scrolling after I got done vibe coding.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2689s" target="_blank">44:49</a> Apparently Twitter is so smart. It could see me just screaming at the computer through my phone and like oh this is amazing. This is so good. And so now my feed is inundated with all 20 people you didn't know about.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2700s" target="_blank">45:00</a> Yeah, exactly. There's inundation of just constant large language model stuff. Anyways, so someone was showing me there's a model communication protocol for Figma where you could run the model protocol language.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2714s" target="_blank">45:14</a> You could talk to it and say, "Hey, make me a frame that is of this size, add these things on it, add this coloring to it, and have these features to it." And it would go out. And again, if you know the words of the program, frame, square, diagram, whatever this thing is, you can start again talking.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2735s" target="_blank">45:35</a> I just talk to it. I don't need to know where all the buttons are. My kids are younger. They're 15 down to 11. This is going to change how they do things. Like my son and I recently just programmed Pong inside Scratch.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2750s" target="_blank">45:50</a> So, we did the Pong game with the little paddles and such. We reprogrammed it inside Scratch and he was okay. And then we started adding funny things like every time you hit the paddle, he was making fart sounds and like, "Oh, yeah, it's funny. Haha."

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2762s" target="_blank">46:02</a> So, very immature for me and my son. Like I thought it was funny. I thought it was hilarious. But this is going to fundamentally change how we do things. And we are in — I knew we were in it before, but after last night and my experimentation, I think we're even more so the world is changing before our eyes right here.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2780s" target="_blank">46:20</a> Here's the problem though, Mike. None of that has to do with PowerBI. Like, and I agree with you completely and I'm a thousand percent with you. Yeah. But that almost makes PowerBI less relevant to a data scientist, right? Because all those things live in fabric or are much upstream than PowerBI.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2802s" target="_blank">46:42</a> Yes, correct. I've already like I said, I've tried multiple ways. I've had quite a few experiences trying to sell PowerBI or at that point in the stream to data scientists where we have the semantic model now you can connect to that and it's completely irrelevant.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2819s" target="_blank">46:59</a> Forget the tooling itself, forget just hey download PowerBI desktop, data scientist that's already a non-starter. Just at that point you're still dealing with one, I think data scientists are a bit academia so there's a lot of they're going to follow best practices or white papers that have already been followed before.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2840s" target="_blank">47:20</a> They're going to just use a random tool and dude when I was in academia we were constantly five years behind the industry. Like I'm in the data community I know what's going on, the things I was learning in college or for my data science stuff. We were 5 years behind.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2855s" target="_blank">47:35</a> We were, I was still building Hive and building Hadoop and things. I was like I'm not, I don't — that was already by the time I got to that step they had already, it's already a service that's built into fabric.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2866s" target="_blank">47:46</a> So to me, academia, something to your point I agree with you, academia is going to do their thing but I think right now they're constantly 5 years behind where we are right now in the technology space. And us, we're in the tech space right now. We're seeing it change before our eyes.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2880s" target="_blank">48:00</a> I hope that school and academia stuff catches up and so their best practice becomes what we're building right now. Right. Is there Ginger? Is there any argument that can be had with data scientists about PowerBI and any relevancy?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2899s" target="_blank">48:19</a> Because the way we're putting it right now there's basically a complete cut, a complete bridge or the bridge is broken between both. Is there any...

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2907s" target="_blank">48:27</a> Yeah. The only way that I can see them doing anything in PowerBI unless somebody makes it because they want to do a wide distribution. Because as much as they like to talk about the fact that they can just do their thing and do their stuff, it has a limited visualization aspect because it doesn't distribute.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2929s" target="_blank">48:49</a> So if they want to really distribute their information widely, then PowerBI can offer that for them. But how many people find that useful? Yeah, not so many.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2941s" target="_blank">49:01</a> So I want to tag on your comment there, Ginger, because I do know something. I feel like there's something, a hidden feature inside fabric that we're not actually tapping into yet. This is a fabric thing. So pure PowerBI, will data scientists come to it? Probably not.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2955s" target="_blank">49:15</a> I think we're all talking about like look, it's going to be the fabric world has really enticed that data scientist person. And I even think my mentality of what a data scientist is is substantially changing now. Because we're giving, now we're going to have the term citizen — I'm going to coin it right here guys — citizen data scientists.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2971s" target="_blank">49:31</a> Right, I don't know if it's been out in the world yet but we have citizen data engineers, we have citizen BI professionals or citizen modelers. What now there's going to be a citizen data scientist but we're trying to commoditize what the data scientist does.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=2985s" target="_blank">49:45</a> And I just did a podcast episode with Irin from Microsoft, the PM team. He has brought AI functions now to notebooks and that's going to be coming to data flows and it's going to come other places as well. It's going to be in the warehouse, the SQL data warehouse.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3002s" target="_blank">50:02</a> So, you haven't checked out that video, definitely watch it. It's very informative. He does a lot of preview features that you can't see out today but you can get an early preview of what AI functions are doing inside the context of Microsoft fabric. So just want to highlight that as well.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3019s" target="_blank">50:19</a> Going back to your point Ginger where the data scientists might want to start playing the visualization side is limited. I think there's an opportunity for us to build notebooks in view mode in org apps.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3031s" target="_blank">50:31</a> So in an organizational app, you can put a notebook in that's in view mode only. You're not running the cells. So you have to run the notebook, right? And once the notebook has been executed, you can hide things and then you can put the notebook into view only mode and then you can attach the notebook to an org app.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3049s" target="_blank">50:49</a> And I think Ginger this is a great balance between look I need to get data from the data scientist into the hands of decision makers and business people in the organization and so I really like what this is doing. I wish there was more here in features.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3067s" target="_blank">51:07</a> And this is maybe where workloads or custom workloads that third party ISVs can build and add to the experience where we can get a richer experience for that data scientist really building highly customized very interactive visuals and bringing them into these org apps.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3087s" target="_blank">51:27</a> Where you can now have a Power report, a PDF, an Excel file and now we have the notebook that the data scientist has built to show you some more elaborate visualizations or even tell a story with data. It's almost like a white paper, I'm thinking, right?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3098s" target="_blank">51:38</a> Here's some text and then there's a visual and here's some more text and another visual. You can really guide the user through. That's something that PowerBI does not do well with is copious amounts of text formatting and then a visual intermingled with more text and more visuals. It's just visualization side of things.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3116s" target="_blank">51:56</a> And you can even embed PowerBI reports into the notebook. So maybe you can do a view only notebook with an embedded PowerBI report in the middle of it and then now you can get the data stuff done and the report can just show up and be there. Like there's some really potentially interesting relationships between these elements here that could be really useful for the data scientist.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3137s" target="_blank">52:17</a> Yeah, I've not seen this feature but they do a lot of visualizations. They write them all in R and Python. So yes, you could if there was a way of basically hiding all of the code and just making a narrative and here's my visuals and I'll hide the code so you don't see the stuff that generates that visual to provide.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3161s" target="_blank">52:41</a> And now they do a lot of cut and paste to take the — you could actually run and have more interactivity. That would be of value, that would be useful but be widely used at all.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3178s" target="_blank">52:58</a> And I think there's the two barriers Ginger, I completely agree because I think we're getting closer to what the actual user story or the grow-up story for data science in the PowerBI or Microsoft fabric is. And I think there's...

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3189s" target="_blank">53:09</a> Microsoft Fabric is, and I think there's really two critical functions that need to happen. I think the One Lake is going to be a critical part. I think if we can't get data scientists, or if the One Lake can't play nicely with data scientists, we're at a non-starter.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3208s" target="_blank">53:28</a> So I think that's the first critical junction that has to be passed. I think once we're able to get there, Mike, to your point, that's the grow-up story with notebooks and the organizational apps. I think yes, we're gonna cut the bridge with Power BI.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3222s" target="_blank">53:42</a> We understand they're really, and it's not because one doesn't do the things it needs to do. It's just they're for two different use cases at the end of the day. Data scientists in what Power BI is meant to do.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3236s" target="_blank">53:56</a> So I think the first critical junction that we have to cross is can we get them at least use a snapshot of One Lake? Can we get them rather than connecting farther upstream, can we get them to be okay with One Lake? Great.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3248s" target="_blank">54:08</a> Yeah, we can do that. Well, to your point, Mike, we can have a citizen developer and dare I say a vibe data scientist.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3255s" target="_blank">54:15</a> Oh, man. Now we're talking. Let's go. Vibe data scientist. Like I'm all in this vibe scientist thing. I don't know what the verbiage — how do you verb it? But how do you vibe it?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3267s" target="_blank">54:27</a> Well, you're vibe coding, right? Is that the verb? Vibe. Vibe scientist. So, I'm a vibe scientist. Yeah. Which maybe we got to work on it. The marketing is not there yet.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3281s" target="_blank">54:41</a> Let's go back to Microsoft and their marketing team so they can ruin the name of this one for us. Let's — user-defined scientist. Yeah. So, UDS — user defined scientist.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3292s" target="_blank">54:52</a> But I think the idea is those are the critical junctions for data scientists, or that world to say, there's actually value for us here to not just be okay with this, but it makes a lot of sense.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3307s" target="_blank">55:07</a> We're again organizational apps and playing the One Lane. And do you think I'm missing anything here for those — what would that barrier to entry be?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3315s" target="_blank">55:15</a> I think you pretty much nailed it right there. Seriously, they want the data. Yes, absolutely. Give me that. Data scientists want all the data.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3323s" target="_blank">55:23</a> But after that, and I really am intrigued by this vibe scientist thing because here's the thing. Business users — I'm always intrigued by, and there's always this group of people who just answer the questions for the executives and they want all the weird wacky stuff and they're dumping everything in Excel.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3342s" target="_blank">55:42</a> Yes. Instead move to vibe sciencing, then they would really be able to provide the answers execs are looking for. Actually this is — what if we could vibe an Excel document? What if we vibed Excel? Vibe coded Excel?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3362s" target="_blank">56:02</a> Now we're talking. Talk about a large audience. I don't know how many users are of Microsoft Excel. I don't know if I've actually heard an official number but I'm guessing it's between — what Microsoft says, one out of every six people on the planet.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3374s" target="_blank">56:14</a> Okay. So one out of every six — that would mean over a billion. I've always been saying the number of 750 to 800 million monthly active users use Excel. But Ginger, if you say one out of six, that's well over a billion users of Excel a year.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3394s" target="_blank">56:34</a> So that's a huge number. That could be a major audience for — well, let's — okay, I'm going to put my sarcastic hat on here. That's a major number for Microsoft to make sure that every Excel user in the world is using AI and charging CUs back to the organization because then Microsoft can make more money because you're consuming all this CU.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3411s" target="_blank">56:51</a> But I don't know. I think this could really be a potential here. So let me actually give you a personal workflow of this citizen data scientist or this vibe data scientist.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3426s" target="_blank">57:06</a> This is actually from real life, not even a scenario. Had some basic data, 10,000 data points, not a lot. The only value rating was a one to five rating on these points.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3438s" target="_blank">57:18</a> I made a paginated report, exported a CSV, fed it to ChatGPT or local model. I said, I want you to come up with some advanced analytics here. Tell me potentials, tell me the elites, yada yada yada. And it generated the numbers, but it also had all the Python behind it.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3454s" target="_blank">57:34</a> I put that in a notebook and I was actually able to dive in to say okay, all these new metrics it created, how did it create it? And basically fed this to Fabric, created this Fabric notebook. Mike, to your point, created a view only, and all of a sudden this simple data set that I had that was one to five average ratings, all of a sudden I had numbers like the elite index, potentials, and all these things.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3478s" target="_blank">57:58</a> That I didn't write myself, I didn't generate, and guess what happened — they were so effective that we actually rewrote all those metrics into the semantic model. Right? So, and all this was done through the vibe coding, or really me being a citizen data scientist.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3496s" target="_blank">58:16</a> All this was — you look at the formulas, it was square roots, standard deviations, and so on. And I just got to translate them back to DAX. But there's a big use case here.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3508s" target="_blank">58:28</a> And it's — we're slightly moving gears here, but to our point here, Mike and Ginger, it's not just the data scientist who's going to do data science in Fabric. Just like right now it's not just an engineer who's doing engineering in Fabric.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3524s" target="_blank">58:44</a> I would agree with you, Tommy. When I look at this, everything is becoming more of a commodity. And I'm thinking about it going like, this is continually becoming more and more of an accessibility option for anyone to use and play with. So I'm very excited about this.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3544s" target="_blank">59:04</a> Wow. Okay. Well, this was an amazing topic today. This was heavily large language models, AI, vibe, everything, right? There's probably a shirt out there somewhere like "I vibe everything."

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3557s" target="_blank">59:17</a> Thank you all very much for listening to the podcast today. Let's quickly go through some final thoughts here. Ginger, what is your final thought on this topic for data scientists and Power BI? Where does this fit for you?

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3570s" target="_blank">59:30</a> I think that there's not necessarily anything in Power BI — in Fabric models, that's where I see it doing it. But to Tommy's point, I see there's a giant possibility for vibe data sciencing, and I see that is where it's going to be using Power BI. And I think that is a huge potential right there.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3594s" target="_blank">59:54</a> Tommy, what do you think? Last final thoughts here for your side. And it's super quick. I think just like everything with Fabric, we have to change our mindsets around who is it for and how's it going to work because the technology — agree, as I've been saying and beating my chest on — is changing our processes and changing the audience.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3615s" target="_blank">1:00:15</a> And I think we're seeing now finally where Fabric is changing that around data science. And Microsoft is a big ship. So one thing I'll say here is I think the industry of AI, vibe coding, this whole experience — it's very ahead of its time. And Microsoft is like a large ship, right? It's going to take them some time to steer the ship towards what's out there.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3638s" target="_blank">1:00:38</a> And I also think there's a lot of gimmicky things right now in this whole vibe coding space. There's a lot of things that aren't maybe really polished yet. But I think we're on the edge. I haven't seen this level of excitement for myself until I saw Power Query inside Excel and I saw the original Power BI Power Designer before it was Power BI Desktop.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3657s" target="_blank">1:00:57</a> Like this is the same level of — oh, this is going to change things. This is going to really — that just that moment there was this moment where you look at the industry and you say something's different here. The velocity of what we're doing is substantially changing based on some new technology.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3677s" target="_blank">1:01:17</a> I think this is one of those moments. I'm having that moment right now. Mark 2025, early 2025. This is a moment where we're going to start seeing this whole agents area is going to become incredibly important. And you're going to need to be able to talk to everything. It's going to be an expectation on every single program.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3698s" target="_blank">1:01:38</a> I was just making some social media marketing things and I was in a program that does distribution of those elements, right? It was allowing me to communicate to another program and talk to it and ask what I wanted.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3711s" target="_blank">1:01:51</a> So I was in — I think I was in Canva maybe. Canva's announcement recently was just absurd. I don't know if you guys follow Canva at all. They just had a crazy AI announcement for their program. But they're doing this stuff and now you can jump over to other programs and extract things into it.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3730s" target="_blank">1:02:10</a> Like, hey, I can embed — oh, I was in Miro, another one, a program that I use a lot. You can go into Miro and then you can embed Figma. You can embed other objects right into it and you can communicate and move things between apps almost seamlessly now. This is crazy. Like we're getting to a really interesting world now.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3746s" target="_blank">1:02:26</a> And I'm very excited and I'm very happy we're in this space. So anyways, very fun. Good things to talk about there. With that being said, thank you all for listening. This has been a great episode.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3755s" target="_blank">1:02:35</a> Thank you for all the ears on this podcast. We've had a record number of people listening to the podcast. So thank you. Ginger, you're bringing in the large numbers here. We appreciate you being on the podcast. Awesome. Thank you so much.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3766s" target="_blank">1:02:46</a> But we wanted to say if you like this episode, if you just love vibe data sciencing, we'll go with it. If you just love it, please share this episode with somebody else. Let them know on social media or just talk about it at work. We really do appreciate it.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3780s" target="_blank">1:03:00</a> We don't advertise. We don't really push the podcast at all though. But we really do want to get it out to more ears and more listeners because we think this is a fun way to interact and talk about the expert area here according to the podcast.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3794s" target="_blank">1:03:14</a> With that being said, Tommy, where else can you find the podcast? You can find us on Apple, Spotify, or wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3805s" target="_blank">1:03:25</a> And share with a friend since we do this for free. If you have a question, an idea, or a topic that you want us to talk about in a future episode, well, head over to powerbi.tips/podcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all Power BI Tips social media channels.

<a href="https://www.youtube.com/watch?v=yUTOvIDn1M4&t=3827s" target="_blank">1:03:47</a> Excellent. Thank you all very much, and we will see you next time. Cheers.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
