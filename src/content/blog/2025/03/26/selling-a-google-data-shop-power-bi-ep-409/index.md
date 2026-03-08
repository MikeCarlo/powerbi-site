---
title: "Selling a Google Data Shop Power BI – Ep. 409"
date: "2025-03-26"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Google BigQuery"
  - "Data Platform"
  - "Power BI Adoption"
  - "Cross-Platform"
excerpt: "Mike and Tommy tackle how to sell Power BI into an organization already invested in the Google data stack. They break down the practical challenges and strategies for fitting Power BI into a BigQuery-centric environment."
featuredImage: "./assets/featured.png"
---

Mike and Tommy tackle how to sell Power BI into an organization already invested in the Google data stack. They break down the practical challenges and strategies for fitting Power BI into a BigQuery-centric environment.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/WouRMVAc5zk" 
  title="Selling a Google Data Shop Power BI – Ep. 409"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Main Discussion

This episode dives into a real-world scenario many consultants face — how do you pitch Power BI when the client is already deep in the Google ecosystem? Mike and Tommy share their perspectives on navigating this challenge.

### The Google Data Stack Reality

Many organizations run on Google Cloud Platform with BigQuery as their data warehouse. When these companies look at reporting and analytics, Looker is the natural default in the Google world. The question becomes: why would they consider Power BI instead?

### Making the Case for Power BI

Mike and Tommy discuss the strengths Power BI brings to the table even when the underlying data platform is Google-centric. Power BI's connectivity to BigQuery through DirectQuery and Import modes means the data platform choice doesn't have to dictate the BI tool. The conversation covers how Power BI's modeling layer, DAX, and the broader Microsoft ecosystem can provide advantages that are hard to replicate elsewhere.

### Fitting Power BI into a New Data Platform

The episode explores the practical side of integrating Power BI into an organization that wasn't built around Microsoft tooling. Topics include licensing considerations, how to handle authentication across platforms, and the change management required when introducing a new tool to teams already comfortable with their existing stack.

## Looking Forward

Mike and Tommy encourage listeners to think about BI tool selection as a separate decision from data platform choice. The two don't have to be locked together, and understanding that flexibility opens up better options for organizations.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=36s" target="_blank">0:36</a> Good morning and welcome back to the Explicit Message podcast with Tommy and Mike. Good morning everyone. Good morning Mike. Good morning everyone, feels like a good day today. It is a good day.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=46s" target="_blank">0:46</a> Just be aware that this is our episode 409. We're going to go through this episode here, however this is a pre-recorded episode. Tommy and I are traveling, we're doing some events around, so we won't be able to do this one live at this point.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=59s" target="_blank">0:59</a> But that being said we can still talk about our topic. Yeah, I don't think we have any really news or topical, let's just get right into the main topic. Yeah let's do it.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=69s" target="_blank">1:09</a> All right so this comes from a mailbag item. Tommy's going to read us our topic here today. This is an interesting thing that has come up a couple times in my consulting and I'd like to unpack this a little bit and see what this looks like for other organizations.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=81s" target="_blank">1:21</a> Typically we do Power BI. Power BI is usually given to organizations who already own Microsoft products. You're an Azure suite, you're Microsoft 365 products suite. And this would be what happens if you have a Google shop using Google and all their products.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=99s" target="_blank">1:39</a> How does Power BI fit in, or does it even fit in into your organization? Give us some question here, and I want to say keep your mailbags coming because we love the questions and the ideas that you have for us.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=113s" target="_blank">1:53</a> So this one's pretty straightforward. Mike and Tommy, how can we sell Power BI to a Google shop company? How easy can Power BI fit into a new data platform in an organization?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=128s" target="_blank">2:08</a> This is going to be interesting. I think this will be a good one. So I've had a couple experiences with this one. Well let's just kick things off to begin with, right?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=139s" target="_blank">2:19</a> So if you're using, depends on what kind of Google shop you are, right? If you're a Google shop that's using just Google Sheets and email, it's probably not too big of a gap for you to use the web version, right? App.powerbi.com and do most of your things in the web.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=153s" target="_blank">2:33</a> Which I'd argue right now, if you asked me this 200 episodes ago, might be a bit more difficult to get this done. But now I think you can pretty much do anything you need to using the web, to a degree.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=168s" target="_blank">2:48</a> There may be some more advanced features you may need to use with Tabular Editor or some scripting things. But my goodness, I'm really impressed by Semantic Link Labs. And that's a notebook, and a notebook can be run in the service.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=180s" target="_blank">3:00</a> So a lot of those other automation things that you need to do are now accessible via the service. So let me ask you, I'm going to ask you to take a step back here because obviously from the technological migration, yeah, we know it's a lot easier.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=193s" target="_blank">3:13</a> But I want to break down here the type of person we're dealing with. Because he said how do we actually sell this, right? Because it's not just can we migrate over. I think that question is straightforward. Right, true. I think the answer to that question would be probably yes.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=209s" target="_blank">3:29</a> Right, that's probably a good answer. Yes, yes, really from any data platform. But the idea here is let's break down the person, and we can start with Google and talk about other platforms. But we have to sell this, right?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=221s" target="_blank">3:41</a> Because there's also a user experience and what people are used to, and the skills that people have that are building those products in the Google data platform. You have to go over that. You may get the technology over fine, but we still have to deal with people and process.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=236s" target="_blank">3:56</a> I agree with that one. So maybe I'm going to find there's probably a couple personas here of how different organizations work with Google.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=245s" target="_blank">4:05</a> Right, for example, I started with the idea of do you just own the Google Suite, right? It's just their business products. And I would say if you're just a business product person, it's probably not too big of a jump to load Google Sheets.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=260s" target="_blank">4:20</a> There is network drives you can go use to store things in, that you could have files that are pulled from. I would not assume you have SharePoint lists because that's not a Google product, that's a Microsoft product.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=271s" target="_blank">4:31</a> So I think in that regard it's not probably as seamless as you would like. There is some friction around where do you store files, how do you get access to information. But PBI can talk to any data source system.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=283s" target="_blank">4:43</a> So if you're using things like SQL servers or have some SQL or Oracle or other servers that are writing SQL, you can easily connect to them and load that data directly into your semantic model. So that's not an issue.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=296s" target="_blank">4:56</a> I would say though, typically in Google shops there are usually more Mac users in general. So in lieu of that, I would say Power BI Desktop is going to be much more difficult for you to get your hands on. Or you'll be using a VM to spin up a VM to put a desktop on.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=313s" target="_blank">5:13</a> And to be honest I don't really love that experience. It feels just slow and clunky. So in that regard I would say there is some friction around building reports and semantic models if you are expecting to use Power BI Desktop.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=326s" target="_blank">5:26</a> No, and I think that's a big point. I haven't seen as much with the Mac users. I was going a different route where usually most organizations that at least I've dealt with that are dealing with Google data, like BigQuery, they're also very heavily invested in the other products.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=345s" target="_blank">5:45</a> And not just Gmail and Google Sheets, but they're probably using Google Ad Studio, they're probably doing Google Analytics, Ad Studio, Google YouTube Analytics. So because of the seamless integration there, they're probably already dealing with Google products.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=364s" target="_blank">6:04</a> So to sell them like, hey we're going to use a new report visualization platform. But it's seamless for me in Google Data Studio. So what I would argue though is I think you just jumped into persona number two.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=382s" target="_blank">6:22</a> Right, so if you have the very, again, persona number one maybe is like hey just very basic Google Suite products. I'm also assuming you're on a Mac potentially, because you're using a browser for basically everything you're doing.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=395s" target="_blank">6:35</a> There's really not a lot of programs you need on the Mac that are what you need. So again no issues. This is not true for all organizations, but why would you be buying a Windows computer if you're going to be using the Google platform system? It's all in the browser.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=412s" target="_blank">6:52</a> Yeah, right. Maybe I haven't seen organizations use Chromebooks because that typically feels like that's too lightweight of a computer, right? I see people using Macs, machines to talk to their Google products.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=427s" target="_blank">7:07</a> So that being said, that's a friction point there. But I think what you're introducing Tommy though is the right second persona, which is okay, we're doing more than just, we're heavily Google Analytics, we're doing a lot of marketing, we've got that platform.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=439s" target="_blank">7:19</a> And Google does make it very easy for you to use Google Analytics and get the data into BigQuery. I was reading an article recently that was talking about Google BigQuery and the promise initially at Google BigQuery was all around massive scale at any query capabilities, all this really cool stuff.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=458s" target="_blank">7:38</a> And yes it is true you can do massive scale queries on top of Google BigQuery. However what they were finding was, in order to keep cost down, nobody likes to write big massive queries across a lot of data over and over again because that's expensive. It costs compute to do that.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=478s" target="_blank">7:58</a> So in Google BigQuery, my understanding is, and tell me if I'm wrong, Google BigQuery charges you per query. It's a query-based charge system. So it's like a consumption model, how much you consume is how much you're paying for.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=495s" target="_blank">8:15</a> So if your queries are really large and require a lot of data, they charge you per gigabyte of data access. Is that right? I believe so. Okay, so in lieu of this, if you think about their pricing model, let's just imagine, dream with me here for a bit.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=515s" target="_blank">8:35</a> Right, if I have a one terabyte set of files that I've been storing to Google Analytics in, and I need to run a query, do I want to run a query across all one terabyte of data and I'm charged basically for accessing a terabyte of data to do the query?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=532s" target="_blank">8:52</a> Or would it be smarter for me to make a view or a materialized view where I could just query only the last day and then add that information to a smaller table that aggregates everything up to a monthly or weekly or some smaller term? Right, so if I can take that one terabyte file and figure out.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=549s" target="_blank">9:09</a> That one terabyte file and figure out what are my aggregations of data and build smaller tables that aggregate that data up to a higher level. Then as the new data comes in I can automatically aggregate it as I go, the queries get smaller and now I'm touching like a couple gigabyte file as opposed to a terabyte file which I think saves me money in the long term.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=568s" target="_blank">9:28</a> So the article that I was reading was just talking about, right, even though we have this capability the technology is at scale, can do these massive things for us. You wanted those to be the edge cases, the ones that are more random I would say. And the common scenario is you want to continually be querying the same data in small form, aggregate it and then only pull from that.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=594s" target="_blank">9:54</a> So the reason I'm bringing this up is it becomes a cost game and then you say well where do you want to fit Power BI, where does Power BI fit in that architecture. And it's interesting too because the mailbag was just around Power BI but when you think of the Google data platform it really has the equivalent of what's in Fabric.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=615s" target="_blank">10:15</a> Because it really is more closer to the Azure data platform than I guess Fabric. You have pipelines, it's a very developer centric tooling, especially the querying it's a different language of course. And so there's all those really big aspects there from the engineering point of view that I think there's a selling point there.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=641s" target="_blank">10:41</a> I want to at least touch on this, we could put this on the parking lot but I think we also need to obviously sell the actual visualization side, the more to your point business user leadership. How do you sell that? But I think those are really the two areas that you have to sell this to, it's the engineering life and it's the business life.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=660s" target="_blank">11:00</a> I'm agreeing with you on those two points Tommy but I think the ultimate note here for me, I'm looking at this going where is the strength of Power BI come from. I think that really the strength of it comes from the ease of sharability and the cost effectiveness of the semantic model and how fast it can run to produce queries for reports.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=681s" target="_blank">11:21</a> I don't see Google doing the same thing. They have, I think it's Looker, is there a version of it, Data Studio. Now yeah so they have a visualization and it's, I mean it's good, fine. I have found it extremely difficult to work in it honestly. I'm coming from the Power BI world, it feels like Power BI is much easier to get started.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=702s" target="_blank">11:42</a> The learning curve on Data Studio is much sharper compared to what I feel like just getting Power BI is. Now I'll be it, say this, because Power BI has DAX queries, because Power BI has a lot more you can do in the DAX space, the analysis engine, Power BI I think has a lot more difficulty long term to become a master of the tool.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=725s" target="_blank">12:05</a> Right, maybe there's a steep learning curve right now in Google analytics or let's call it Looker versus Power BI. But you may be able to master Looker much easier or much faster than Power BI because of all the semantic modeling that's occurring.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=739s" target="_blank">12:19</a> Well it's a limited platform, it does fine for basic visualizations and yeah you can connect to your data. But in terms of the longevity of a semantic model in Power BI it's completely almost really a different concept. Your data model in both platforms, right, you don't have any equivalent of a semantic model in Google Data Studio.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=762s" target="_blank">12:42</a> It's connect to your data, put these visualizations on from a query. And sure in a sense of recreating that, having the managed self-service, none of that exists in the data platform. Yeah you don't have managed self-service.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=777s" target="_blank">12:57</a> But back to your point though, you're building SQL queries, you're building queries that support the visual and it's continually querying those visuals behind the scenes. Every time you click on something or you change something or filter something, that's different than Power BI because Power BI is technically taking a copy of the data, right, caching it and then you're hitting the cache quickly to return the results.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=800s" target="_blank">13:20</a> There's no concept of refreshing right in a Looker report that I'm aware of. You're just looking at all the data whenever you need it. And that's why on the visualization side of it they're just different concepts, there's really no comparison between the life cycle of a model in Power BI compared to that even as an idea in Google Data Studio or Looker.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=821s" target="_blank">13:41</a> And but here's the thing though too, you may say, and obviously we'd both argue that yeah the Power BI model in the sense of the conceptual model is much more long lasting, it's better for data culture. Sure, we may say that to a Google Data Studio client or a Google analytics platform client.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=842s" target="_blank">14:02</a> But they've also been dealing with this for a while and then you go into the culture thing where they're just used to it and they are fine with the basic visualizations because they've been dealing with that. Their pain points are probably around the culture thing because again the only place I can view the data information is in Data Studio.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=865s" target="_blank">14:25</a> I don't have this full, in a sense, from a corporate metric point of view. I've actually found a lot of people who are more advanced on the visualization side, teams building more complex reports, are not using Data Studio with their Google data platform. They're using Tableau.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=883s" target="_blank">14:43</a> Oh interesting, so a Google shop would use advanced tooling for visual building in Tableau. Yeah because Data Studio doesn't really accomplish that. Okay, I have, while I had a project, I had only one project that worked with, I've had multiple projects working with Google but had one project working with Tableau.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=904s" target="_blank">15:04</a> And again I wasn't on that project part of it but yes the company had done that, they were paying for that. Pay for Tableau and pay for all the Google Looker Studio information as well, Data Studio as well, because to your point it didn't have that rich experience that you needed. It couldn't connect and do what it wanted to do visually, to build more complex visuals.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=925s" target="_blank">15:25</a> And I think this is your point though Tommy, I think your point is Power BI is a bit more of a refined tool from building visuals. There's a whole app studio that goes with it, you have things like Vega or the Deneb visual that enhance that substantially. You can build a lot more customized visuals using those tooling pieces.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=942s" target="_blank">15:42</a> Yeah and to me this goes to the selling point where to a shop that's not using Power BI, it's not enough to say well Power BI has a great visualization and metric-based platform. To me the selling point of Google is you have to do the full migration because the model, the long-lasting product, the life cycle of the model, how it can live with other users, how you can build off of that, more than just the consumer based view.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=975s" target="_blank">16:15</a> More than that I can just view the report, right. Because to me I'm not selling someone that's using Tableau right off the bat just because of how you can view the report. I could argue that the Power BI experience is better but well again if I have to use Power BI, if I'm a Tableau shop or a Google shop, well I have to now have a Microsoft Office credential.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=997s" target="_blank">16:37</a> I'm in this Power BI ecosystem so now you're telling someone the thing that they don't want to hear the most. I have to go to four technologies to jump to see each of my data points. That's the hardest selling point I found with any organization, it's like we're already using this, now I have to log in here, now I have to log in here, now I have to go here to get the data. It's painful.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1024s" target="_blank">17:04</a> Yeah I would agree and I think if I had to look at the different, when I look at other platforms that need or require tooling, right, it always feels like there's a little bit more of a bolt-on experience to them. It does a lot of what you need but then it needs a little bit more.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1039s" target="_blank">17:19</a> Even looking at Tableau, Tableau has the visualization program dialed in but then there's Tableau Data Prep. It's like Google, it does have query in it. Yeah so the Tableau, not power query, basically yes it's the Tableau version of power query.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1054s" target="_blank">17:34</a> I'm gonna try and Google here, Data Studio or something like that. Tableau Data Prep I think is what it's called. Prep, so it's their equivalent version of combining, shaping. I mean a lot of these other tools if you look at them they're all doing the same thing, right.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1080s" target="_blank">18:00</a> We've got these and I think in my opinion Power BI blazed the trail with this one. I don't think Tableau Prep was out before Power Query was out. That was a response to Power BI. Agree, and I think also Tableau Public was a response for Power BI launching Power BI Desktop with free, like Power BI Desktop was free for everyone. So not having these other tools.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1100s" target="_blank">18:20</a> Not having these other tools, other programs have had to adapt and catch up to where Power BI is. So I think now with Fabric as part of your solution inside Power BI, you can't touch it. There's not another tool out there that has all the encompassing data products in one single solution.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1119s" target="_blank">18:39</a> So if you were talking to leadership at this scenario, where do you think the most attractive points would be? And again I'm gonna challenge you to say not the engineering side because I think we can well establish that. But if you're talking to leadership who may not have that same technology background, what do you think would be the most attractive points that you would approach this with?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1142s" target="_blank">19:02</a> Well I think if you look at leadership, at the end of the day leadership wants to get the results they need at the price they want, right? And so they're always going to try to minimize price compared to what they can deliver with the same result.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1158s" target="_blank">19:18</a> So when you look at a project like Tableau or you look at a project like Looker, there's always this time to develop and then there's the cost to maintain and run the solution, right? So I think I'm going to try my best to really do a fair apples to apples comparison of price between the two different products.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1176s" target="_blank">19:36</a> Right, especially if you're going to leave the data inside Google and not migrate it over to Power BI. So if that's your plan, right, we're going to keep it in Data Studio because that's where the data is generated. Google has their clause in you to some degree because you're not going to want to move the data because that potentially could get really expensive to move the data to a different platform.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1200s" target="_blank">20:00</a> So that being said, you have to make a decision point of how much data can you move over to Power BI, what kind of licensing do you need for powerbi.com. Because you're going to have to use that, I'm assuming that is also going to be there. Do you need to share data with your clients externally? What's that cost to you?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1216s" target="_blank">20:16</a> Can you add the Looker or Tableau experience into your solution to get those needs met? I think if you look at total cost of ownership between Power BI, Looker, Tableau, the combination of things, right, depending on what you want to do with the data.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1233s" target="_blank">20:33</a> If you're a shop that is we're going to build data, we're going to have dashboards and we're going to embed them, I don't think you're going to get a cheaper solution or more cost-effective solution than Power BI. Because I don't think you're going to want to take Looker and embed it, yeah it has a limited amount of visual stuff.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1250s" target="_blank">20:50</a> Right, you're going to want to pair that with what you're saying Tommy is Tableau. So the Tableau picks up for the weakness that Looker has. So you pair that, so now you're buying two products, you're buying the Google product and you're buying Tableau.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1264s" target="_blank">21:04</a> Okay well Tableau doesn't cost you $10 per user for one, so that's expensive, it's more expensive there. And then on the flip side of this, what if you're trying to give it to your customers? How do you embed it?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1276s" target="_blank">21:16</a> And everything I've read and done some research on for Tableau, published to web or they're basically their equivalent, Tableau's embedded solution is actually quite expensive. It's not very cheap, it's almost in my experience been 2x the cost to do Tableau embedding than it has been to do Power BI embedding.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1296s" target="_blank">21:36</a> And now that we can go down to the F CU that are very small in size, you can build a really good data model and do embedding at a much cheaper price point. Yeah, so I'm probably always going to try and figure out what is the price story that we're trying to sell to that because it's a better value, bang for your buck at the end of the day.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1316s" target="_blank">21:56</a> And then this is where you tag team me and then I would come in here because first just to respond to what you said, the cost thing is such a big deal here and cannot be underrated on what you're doing in Google BigQuery. Just purchasing Tableau alone, you're already at a cost point where it's comparable or more than Power BI or even a Fabric F1 SKU. It is still insane what they're charging for Tableau.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1346s" target="_blank">22:26</a> And the barrier to adoption there is still so high. I'm coming in about the bottlenecks that I guarantee that they have from a process point of view. If you're using BigQuery and if you're a Google analytics platform, you have very niche players at your organization who know how to use and use it well, the tooling.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1366s" target="_blank">22:46</a> Right, this is not any business user or any self-service going into BigQuery and this tool and getting their data. All this is relying on the data engineers more than I, geez, maybe comparable, but it's a very niche tooling with a very niche language, meaning there's very niche players.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1389s" target="_blank">23:09</a> Which then equals that you want data in, you need to change it, it has to rely on those few players. This almost becomes a better selling point with Fabric because we say well we can get your data to more people, we can remove a ton of bottlenecks for you.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1403s" target="_blank">23:23</a> Because the ability to get your data into not just a Power BI model but into this platform for us to do reporting is near seamless. You can have your marketing team do this, it's not this terrible language adoption or this barrier of tooling and language. We know the UI is incredibly easy in Microsoft Fabric.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1425s" target="_blank">23:45</a> Further, all your reporting in the metrics, and I guarantee you because again no one else really has this concept of the semantic model that lives across workspaces and across reports. We can remove, which again I guarantee another pain point, is the reuse or the overlapping of the same reports which we would see a ton.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1451s" target="_blank">24:11</a> Because again you have the purview or the idea of lineage doesn't exist in that robust view. So let's get your data to more people, let's get the right data to people, and then we can also adopt that self-service where you need your marketing team, you need this business team to quickly create a report for your email campaigns.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1469s" target="_blank">24:29</a> Well you can see what's in the workspace or you can quickly build off something existing. And once you have that set up, once you have that semantic model and the self-service set up, obviously we know that takes time. Oh my gosh what that does for organizations to quickly build.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1485s" target="_blank">24:45</a> Yes we know there's an uptake time, there's a build time, but once you actually have your models established, nothing in the industry compares to that.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1497s" target="_blank">24:57</a> I'd also point out here too, I think what we're talking about, what you're speaking to, is there is some more upfront building time. But it's the cost of the effort of the design cost, right? So it's the time and materials costs that go along with this.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1512s" target="_blank">25:12</a> Right, once you have something established, once you have some semantic models that are there and working, now you've cached the data. It's incredibly efficient to run from that cache. And so if we're talking pure report building, the semantic model requires modeling up front, but once you've defined some basic relationships and some tables and brought them in, you're caching the data and now you can build a lot more from that stack of tables essentially.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1538s" target="_blank">25:38</a> Yeah and I think that's a big misconception a lot of people have, is that's not available. Well yes I agree with you, but I would also add a point here. My point was really around there's a hidden cost to doing that, right? There's a man-hours cost to doing that stuff and that's the part that's very hard to and difficult to measure.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1560s" target="_blank">26:00</a> Like how do you measure how much time, how you save me based on doing a build of report? That's the part there that's even again going back to my earlier point, it's all about price. And if I can do more things in the same amount of time, that's much harder to quantify.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1578s" target="_blank">26:18</a> And again you don't know how fast it will take you until you've actually done it. And so this is one of these things where the sell is a chicken and the egg standpoint, right? It could save you money, it could go faster, but my team doesn't know how to do it, right?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1592s" target="_blank">26:32</a> Yeah right, a lot of people look at price per bar chart basically. It boils down to that to some right, price per report page. Like what does that look like, how quickly can we get through that?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1603s" target="_blank">26:43</a> And here's something, and this is not specific to just Tableau or Looker or anything. If your team is not dedicated and has someone you can bring on that is going to be the knowledge expert around Power BI, you really do need to go hire someone who's a Power BI person or dedicated someone on your team to be that Power BI individual.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1623s" target="_blank">27:03</a> In the past I've seen organizations adopt Power BI, find some immediate success with my team building them reports, and then they're like okay well it's easy, Mike and the team did it. We're just going to go hire some person who says they know how to do Power BI. They don't consult with me, they don't ask me what I think about their skills.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1643s" target="_blank">27:23</a> And so it's someone who knows how to build some visuals in a Power BI report but don't understand how to model.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1647s" target="_blank">27:27</a> Report but don't understand how to model things, they don't understand how to do updates and the administration part of this. So they under-hire the talent for Power BI and then they become disillusioned with the program and say well Power BI doesn't do what we want, it doesn't have the features we need.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1664s" target="_blank">27:44</a> And I said it's more about expectation, right? Their expectation wasn't aligned with the talents they brought on board. And so therefore they actually abandoned Power BI, they went back to their old tools. I've seen this happen a number of times where if you don't get the right skills in on those first couple people you hire, you're going to be in a world of hurt.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1683s" target="_blank">28:03</a> And it will probably make the old tools look more cost efficient because it's faster, you know how to do it, it's already knowledge on your team. So there's something to say here — if you're going to make the jump or you're going to sell Power BI into an organization that is already using things, you better come in with a really solid plan for what problem are you solving.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1702s" target="_blank">28:22</a> And the problem you're solving can be cheaper if you solve it with Power BI versus solving it with what the other tools you have are. Let me pick up what you're putting down there because I love this point. I'll take it a step slightly further here where I'm more and more coming to my own opinion that in order to really call yourself a Power BI pro, it's more than just your individual skill building a semantic model and doing all the things in Desktop.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1730s" target="_blank">28:50</a> You really have to know at this point how that model lives in the ecosystem and the longevity of a model. Because I can create myself in my own silo the best semantic model with the best DAX measures, again all subjective there, but in a sense it could be phenomenal, perfect, best processing time.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1751s" target="_blank">29:11</a> But if I'm publishing this and I have no idea how it works in terms of the greater organization, if it's in self-service, if all those other parts that make up a model living well — to me then you've lost half the battle or more.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1769s" target="_blank">29:29</a> And we're just at a point now too with Power BI that the data analyst has to know this, has to be aware of the consumer interaction with it. And if it's the thinking with the ability that we can build off of this, because this is also the selling point too on Power BI, any platform.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1790s" target="_blank">29:50</a> Google Data Studio, it's siloed. Even Tableau to a degree, the modeling is siloed in terms of not just what you see but everything in the back end. Which Power BI really has a selling point too — to your point, you can hire someone who's great at semantic modeling, phenomenal DAX, they can compete with Marco Russo with DAX.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1814s" target="_blank">30:14</a> But if they're just publishing models and there's not really a cultural point of view, organizational understanding there, you're going to still deal with problems. You're going to deal with siloing, you're going to deal with pain points.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1829s" target="_blank">30:29</a> Yeah I would agree with that. I'm also just trying to get my head around your point there. If you don't take the time to invest in the skills, you're not going to be able to bring the cost down basically. It's a skills investment and again, my experience has been development teams that come from the Google platform, they have hired intentionally, rightfully so, people that know the Google platform, that GCP is what they hire.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1862s" target="_blank">31:02</a> That's fine, they've worked on setting their people to training, they've gotten skills around that platform, totally fine. In my mind there is no issue with what we're doing there. You're hiring for the tools that you need to use. The same needs to be applied to Power BI. If you're going to bring in the tool, the organization has to make a commitment to dedicating time from internal people to either learn it or go hire the talent that they're going to need to use it to be an effective project.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1891s" target="_blank">31:31</a> And that's — this is regarding all migrations to Power BI regardless, which is funny because Microsoft's selling point — I can't tell you how many times I've seen shops try to do Power BI in the cheapest way possible. Because to them it is a bar chart based tool.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1910s" target="_blank">31:50</a> I love Marco Russo's article years ago that he had to specify that Power BI is not a report based tool, it's a modeling based tool. This is the biggest misconception even still today — Power BI is the equivalent, like let's compare bar chart to bar chart and other tooling. And everything else they figure we don't need the whole Azure stack or the GCP stack because it's Power BI, it's a report tool.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1934s" target="_blank">32:14</a> And a lot of companies fall into that trap. Mike, I completely agree with that, where they need to hire that but they're like well we just need people who can design reports. I would agree, and I think the article that Marco was referring to — Power BI is a modeling based tool — I think it's totally agreed upon that one.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1949s" target="_blank">32:29</a> Right, you're taking data, you're caching it. If you didn't have the Analysis Services engine in the middle — so raw data, Analysis Services, and then you have reporting pieces — if you didn't have the Analysis Services engine, it probably falls apart.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1966s" target="_blank">32:46</a> And again, for shops that already have Excel and the Analysis Services engine in Excel already, because that's also there as well — this is the Holy Grail of really good reporting. Nothing is faster. Microsoft touts this — nothing is faster than the query engine inside Analysis Services.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1985s" target="_blank">33:05</a> Nothing else can return a query faster than that engine. It's super fast, but it's been very tuned over years, multiple years, 10 plus years of just designing an amazing engine that can quickly go grab and aggregate your data.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=1999s" target="_blank">33:19</a> So really, if I had to go very technical here, the power of the Analysis Services engine comes from the fact that it can do its analysis, run the numbers from the model while the data is still in a compressed format. And then it can return the results in a somewhat uncompressed format for your visuals.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2018s" target="_blank">33:38</a> That's the point there, right? Compress the data, make it highly efficient to store, and then do the analytics on the data while it's compressed. That's the big key difference here. And other platforms I think are doing something similar, and I've heard some rumblings that Google's doing some sort of caching in-memory query experience as well.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2039s" target="_blank">33:59</a> It's going to be the way I think companies are going to continue to move forward towards. But to your point Tommy, if you look at Power BI purely as a visualization tool, you're missing a lot of the performance or impact of that tool to your organization.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2061s" target="_blank">34:21</a> Let me ask you — unless you had anything else on that — the question early went here. If your goal, which I love, is we got to start with a cost comparison, right? We got to start with the price.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2075s" target="_blank">34:35</a> Yeah, I think that talking point drives everything else that you're working on honestly. The talking point of price — price is handled two ways. Price is like how much am I paying for the software to run it, and the second part of the price is how much am I spending on my resources to run it. So those are the two, and one of them is very easy to quantify, the other one I think is a little bit more dodgy to quantify.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2101s" target="_blank">35:01</a> You could use it like head count — how many more head counts do I need to use Power BI, or do I need to reduce a head count and replace with a Power BI head count? That is maybe something that's quantifiable there. But if you're just talking about man-hours, the amount of time it takes people to learn things and do something new, that's much more difficult to quantify.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2124s" target="_blank">35:24</a> Yeah, but it's funny though — you say that even though I think that's Microsoft's biggest selling point, it's harder to quantify. But we all know that in this tooling, from the gold model, reusing it, self-service, and just the power of the user interface in general, we know that there's going to be less man-hours and with less skill at least on the initial build. But yet it is also the hardest to quantify, so you're put in a predicament.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2151s" target="_blank">35:51</a> So let me ask you — early wins. If someone wanted to say let's do a POC, let's initially test Power BI and we're a Google data shop, we're interested, we're hearing you Mike. So what early wins could you show to demonstrate Power BI value in that environment, whether maybe in Google or in Tableau? Where would you start focusing on what can I do in the first two months?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2182s" target="_blank">36:22</a> Oh that's a really good question. I think part of the strengths would be — do you have any issues joining data together with various sources of information? So I would start looking at hey, you have Google Analytics data, what data needs to be joined to the Google Analytics data, are there any opportunities for you to start...

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2198s" target="_blank">36:38</a> Are there any opportunities for you to start merging multiple locations together? That would be one area. I would also look for other — in most of my projects there's always some third-party API you need to go hit and go grab data from.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2213s" target="_blank">36:53</a> Companies are finding that it's very easy to go purchase a bunch of software but that software doesn't necessarily integrate very well with your current data structure. So hey, I need to join internal company data with the Google Analytics data because Google Analytics is going to sit in Google Data Studio.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2229s" target="_blank">37:09</a> What does that join of information look like? How are you going to do that, right? We need to tie our call center data to our leads data — is that helping? Or we need to tie our Google Analytics information to help us project and forecast more in our manufacturing area.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2247s" target="_blank">37:27</a> I don't know what that correlation there looks like, but usually I find when organizations start trying to join data together there's a little bit less friction if you're going to use Fabric and Power BI. That's one of the angles I would start attacking from — what data do we need to join together.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2265s" target="_blank">37:45</a> Let's start talking about — I like to step back and talk about the organizational data structure. What do we have in our organization, right? Do we have users? What do users do? What products do they buy? How do we sell things?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2282s" target="_blank">38:02</a> If we step back and say where does the source of data or source of truth live on these various topics — even just very simply you can break down any business and just say what do you do, right? I'm an airline, right? What are the things that you govern in your airline?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2297s" target="_blank">38:17</a> We have people that travel on us, okay so there's customers that travel. We have planes that we manage, we have fuel and all these other costs and things. So if you just draw on the diagram what are the key things that you do as a business and then define the relationships between those things.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2313s" target="_blank">38:33</a> People sit on an airplane, right? Management costs at the terminal — when you draw these things out on a diagram you'll notice that each of these sources typically come from different places. So having a centralized Lakehouse or common area becomes incredibly important.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2331s" target="_blank">38:51</a> So you have to figure out how long will it take me to build a solution that lands the data in a common area, make tables of it, join those tables together and ultimately get your reporting. I think that's the situation I start with — I start with that story.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2346s" target="_blank">39:06</a> Because if you're just trying to do one data source — Google Analytics — okay fine, just use Looker and just keep moving on, right? There's not a lot of extra value there. That's one of my stories. I'll let you give a story Tommy, and I have a second story that I'm going to tee up here after you.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2366s" target="_blank">39:26</a> You slightly got mine but it's funny — all the things that you said, I just want to respond to what you said because gosh it's so true. You never said the word data culture and it's really a hard selling word to say, but at the same time everything you said is about data culture.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2383s" target="_blank">39:43</a> Those are the outputs of what the data culture would do, right? So the data culture would say look, we're going to sit back and we're not going to just focus on hey we just bought Salesforce, we're only focusing on Salesforce. You're going to step back and say okay, Salesforce is serving a part of our data need.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2401s" target="_blank">40:01</a> When you step back and look at the big picture, Salesforce is part of it, some of these SQL servers on prem are part of it, some of this API stuff and this other platform is part of it, this marketing initiative is part of it. When you step back and say what are all the things we're doing as an organization to sell things, the story becomes much bigger.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2417s" target="_blank">40:17</a> That story is what I want to talk about — why we want to use Fabric and Power BI. All of a sudden then you have ownership, you have the people's KPIs built towards those things. I think that's a big point.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2429s" target="_blank">40:29</a> My story would be focusing on what I think would be one of their largest pain points — that source of truth. It's building those gold models, focusing on what are those corporate or universal models or data that they may have, and showing how that can be reused.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2445s" target="_blank">40:45</a> It's like we're going to create this metric, we're going to create your metrics once, we're going to create these relationships and define this once in a single model. And yet you have your 10 reports that you can build off of that, and your entire team now and other people who were never part of Looker can just drag and drop off that model.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2464s" target="_blank">41:04</a> But to me it would be over those gold semantic models and having that lineage. Because that to me would be — look, we took the ramp up time but now we have a single definition and a single place where this is refreshed. I think that would be my goal — if I could do that in those first two months, that's where I feel I would get to the wow.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2482s" target="_blank">41:22</a> That's interesting you say that Tommy, because that really feels like you're tackling that first heavy unknown item for the customer — which is yeah, I'm not quite sure what a semantic model is. You're approaching with like if we can get a decent semantic model in front of people, once that model exists it's much easier for people to go build reports on top of it.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2507s" target="_blank">41:47</a> I would agree with you, right — that is the easier experience there. And I think the price point — again I'm just pulling up the Tableau pricing here. For Tableau, if you're going to build anything, a creator of content, if you're creating the report — there's probably other ways to get this a bit cheaper.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2529s" target="_blank">42:09</a> In the Tableau area it's a viewer is $15 a month per person just to view the report. An Explorer — you get Tableau Pulse — editing is $42 a month and then the Creator is $75 a month. Whoa! And that's on the basic Tableau and it goes up even higher for Tableau Enterprise.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2550s" target="_blank">42:30</a> So the price point — if I'm looking at these things, a Creator creating with Tableau Desktop, you have Tableau Prep Builder — that's their version of Power Query — Tableau Pulse which is their AI generated stuff, and then they have one Creator license of Tableau Cloud. So that all comes with the $75.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2566s" target="_blank">42:46</a> But by comparison with Power BI I get all that for $10 a month, and people who need to view things at the same price — $10 a month for the viewer as well. But even if we are doing an apples to apples comparison, viewer — the price of Power BI to view a report is the same price as their Creator price.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2591s" target="_blank">43:11</a> Their Creator price is like seven or eight times bigger than the price of just viewing the report for Power BI. So already you're at a point — again talking back to my earlier point — let's talk about cost, right?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2602s" target="_blank">43:22</a> Already we're in a place where okay, maybe it does make sense for us to just go buy Pro licenses for everyone and just start there. Or even if let's just say okay we're all going to be Premium Per User — Premium Per User gives you huge size models, all the premium features that you need in Power BI — that's $20 per month.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2622s" target="_blank">43:42</a> And that's still cheaper than one of their Creators, right? It's also cheaper than their Explorer — half as cheap as that. So now when I look at the solution I'm going my gosh, this is a very compelling story with a lot less cost.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2633s" target="_blank">43:53</a> And now I can have people — when you get to Power BI Premium Per User you've got data flows, you've got storage of data, you've got all these semantic models, you go to 100 gig model size. The model becomes a non-issue, you can build basically whatever you want at that point.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2648s" target="_blank">44:08</a> Maybe your selling point in the beginning is you buy everyone in leadership a steak dinner and you say I bought the steak dinner between the price difference between Tableau and Power BI. Oh my goodness dude! A surf and turf thing!

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2665s" target="_blank">44:25</a> Yeah, that's interesting. So again, very compelling to see the pricing — just purely just to buy the software is way different. That's my point there. But the trick of this whole thing is can you understand the data well enough? Can you shape the data quickly enough to get a semantic model that is useful to the organization?

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2690s" target="_blank">44:50</a> I'm going to go on a limb here based on what you said Tommy, and this is a challenge I see in every organization — not just Tableau. I think the issue is access to data. If you just said team, what is your challenge — my guess is there's going to be issues with individuals just not having access to the information.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2729s" target="_blank">45:29</a> So how can we securely give you flexibility to build whatever you need to build to get your reporting done? Now I know Tommy, this is going to rub you the wrong way because you love the enterprise-down approach, you love the certified level of things. And we're going to give it out to the organization, but if we truly want the organization to build whatever they feel like they need.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2746s" target="_blank">45:46</a> Build whatever they feel like they need to run their daily jobs. They're going to copy data out of the systems, they're going to put it in Google Sheets, they're going to transform the data and they're going to use it in whatever reports or visual things are going to build in eventually.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2762s" target="_blank">46:02</a> So if we want to give the company more capabilities, I really feel like desktop is the solution, or Power BI is the solution. It really gives them a lot more capability and you're not really throttled by do I have access to the information. So I'm more of the hybrid approach, right? It should be focusing on how can I get you access to data in a secure way and let you build what you want.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2789s" target="_blank">46:29</a> That's to your point earlier Tommy, let's build a semantic model, here you go, build whatever you want. Now you understand how to make this stuff work. That's getting access to the data faster than having to wait for some team to build a Looker report, to build the next Tableau report and all these other things.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2807s" target="_blank">46:47</a> Yeah, you use the word "feel" a lot and this is what we feel we want to do. Mike, if I did everything off what someone felt like they wanted to do, my daughter would never do homework. So first off, I do agree to a point to what you're saying, and it is true. I've definitely adopted more because of this podcast and the conversations, much more of the primary approach would be a managed self-service or something like that to really give access.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2838s" target="_blank">47:18</a> I've definitely leaned and converted to that type of stance. And that's not to say that there's not still some central, very regulated data. It doesn't have to be mutually exclusive. I don't have to have one and one of these things. You can still have very governed, hey look, you only get access to these reports, you're not touching these models that are enterprise. That's okay, that's part of the plan.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2857s" target="_blank">47:37</a> But what I'm trying to illuminate is there are a certain amount of questions I can ask about data that support that enterprise centralized model. But then there's also a lot of peripheral needs, the questions change, we really don't know what we're looking for, we're just trying to hunt and peck and explore.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2875s" target="_blank">47:55</a> It's those exploration needs that I think that's a lot of what organizations are doing. And so Power BI serves that as well, where you can build a central model and give access to teams to explore things.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2888s" target="_blank">48:08</a> One thing I want to point out here Tommy that I've been generally observing from power.com. Power.com has a lot of new features that are very different than other platforms. Like an exploration, right? Yeah, it's interesting. It's purely a "I'm exploring some data" and I'm trying to figure out what the data is doing.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2917s" target="_blank">48:37</a> But the data explorations are something that can only be created in the service, built in the service, saved in the service. And explorations are only part of Fabric. So if you can look at them, you can use them in Power BI Pro, but if you want to save them or turn them into a report, that's a Fabric-based experience.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2934s" target="_blank">48:54</a> So you're starting to see a lot more of these metric sets. I was going to bring that up — scorecards. But these are the things that when I look at the service now I'm thinking, oh man, yeah we have these really strong things called semantic models. But now we're getting a lot of rich other features that are only service-based.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2971s" target="_blank">49:31</a> I can't build a metric set in desktop, you just go to the service and do it. So even just turning on Power BI, you're getting more capability to govern, administer that data in a centralized way. And so maybe the selling point here is, look, Tableau is just doing reporting, Looker is just doing a page of reports, they don't have any concept of a metric set.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=2992s" target="_blank">49:52</a> Let's talk about our KPIs, let's build those things into enterprise. So I think if you think about the analytics platform as Power BI as a whole, that analytics platform is becoming much richer compared to these other tools.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3007s" target="_blank">50:07</a> So now maybe the selling point is, hey, going back to the question, how do I sell this to a Google company? Talk on the features that they don't have. Hey look at this exploration thing, hey look at this KPI metrics, or this metric sets. These are other aspects of Power BI that you just don't get in these other tools. There's no concept of them at all.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3030s" target="_blank">50:30</a> So I think in that regard maybe you focus a bit more on these other features that are directly there. And maybe the story around data science is somewhat compelling, I'm not sure how strong it is yet in Fabric. But we talk about that on Q2.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3048s" target="_blank">50:48</a> But maybe the idea here is you can do data engineering right alongside your analytics. And so you can bring these two teams or these two worlds together in a much more centralized way. And I don't see — if I think about what happens in AWS and Looker and Google, those teams are still two very distinctly different teams. There's not a lot of joining of the person could be doing both those activities together in the same tool.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3075s" target="_blank">51:15</a> And the metric set thing here Mike is where I'm going to be slightly closing thoughts because you got me super excited. You could tell the organization, you want to build a bar chart and that's your focus? Yeah, choose your tool, doesn't really matter, they're all going to have nice sparkly features and comparable.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3094s" target="_blank">51:34</a> But you talk to a data engineer and their focus is the table and that's the source of truth. You talk to business, their source of truth is the number, the overall what number we're aggregating. So if you're trying to do some definitions, if you're trying to have security and self-service at the same time, oh my gosh, these metric sets.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3113s" target="_blank">51:53</a> Right now, what a great place, because guess what you can do in a metric set besides just view it? I can go to a metric set and I can explore the data, or I can build off of that. I can do the managed self-service off the metric set, not the semantic model, which makes a ton more sense to a business user.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3132s" target="_blank">52:12</a> Rather than "hey, build a model" — you're like, I don't know what that is. So you build these metric sets, which again no tooling has. Yeah, and then you can see pretty bar charts, but the fact that we have these definitions here, and to me that's my biggest concern with any access, is making sure there's clear definitions and everyone knows where to go for the right thing.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3153s" target="_blank">52:33</a> Yes, that's a great place where metric sets are. And again, those other little features we haven't talked about are wonderful selling points. Yeah, I think that's maybe an opportunity where you can really leverage the advantage of Power BI to do that.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3167s" target="_blank">52:47</a> It has to be doing something. I remember recently on a sales call that Microsoft gave at the end of one of their quarters, they said there's over 30 million active users in Power BI every day. And I think they said over 190,000 Fabric organizations or Fabric users and growing quickly.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3187s" target="_blank">53:07</a> So I think Microsoft is taking the right approach here of taking a lot of the other data products that they have and then joining them with Power BI, because Power BI is a winner. It's clearly a winner, it's a good product, it resonates with people, it solves problems basically at the right price.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3200s" target="_blank">53:20</a> So I think that's the reason why people are flocking to it, is it solves good problems at the right price point. And oh by the way, we get all these extra Fabric things that enhance the experience. And so now a lot of the other Fabric products we had across the organization, we now don't need to go back to Azure to go build more data factories, we don't need to go back to Azure to go build Synapse, we don't need to go back to Azure to go build data science things.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3222s" target="_blank">53:42</a> We can start bringing those workloads directly inside Fabric. And now with one button press I can turn these other things on and it's easy. And that to me is the selling point there, is it's the integration of all the different systems which is really making this seamless and much easier to manage and configure.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3241s" target="_blank">54:01</a> Awesome, well I thought this was going to be a short episode, I didn't think we were going to do a full-on episode on just a mailbag. But thank you very much for your question, really appreciate it. We love doing these, make sure you find more of those and submit those on our website.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3254s" target="_blank">54:14</a> But I just want to wrap here and say thank you very much for listening, we really appreciate your listenership. If you like this conversation and hopefully maybe some of these talking points resonated to you about selling to or adopting Power BI, if you're an AWS or Google shop, we would encourage you to look at Power BI as well.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3273s" target="_blank">54:33</a> That being said, make sure you follow us. We don't do any other promotion other than word of mouth. So if you wouldn't mind, share with somebody else that you like the podcast, you found something useful here. And with that, Tommy, where else can you find the podcast? You can find us in Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating, it helps us out a ton. And please share with friends since we do this for free.

<a href="https://www.youtube.com/watch?v=WouRMVAc5zk&t=3295s" target="_blank">54:55</a> Do you have a question, idea, or a topic that you want us to talk about in a future episode? Head over to powerbi.com. Thank you so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
