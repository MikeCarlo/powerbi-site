---
title: "Translytical Is So Much More – Ep. 447"
date: "2025-08-06"
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
  - "Translytical"
  - "Task Flows"
  - "OneLake"
  - "SQL Database"
  - "Warehouse"
excerpt: "Mike and Tommy unpack translytical task flows in Power BI—a feature that goes far beyond the Gartner buzzword. Plus news on OneLake as a source for COPY INTO and a new Fabric Notebooks competition."
featuredImage: "./assets/featured.png"
---

Translytical task flows are more than just a fancy Gartner term. Mike and Tommy explore how this Power BI feature connects reports to Fabric functions for real write-back capabilities, plus they cover new SQL enhancements and a community notebooks competition.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/kXzMW3s6Ie8" 
  title="Translytical Is So Much More – Ep. 447"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News

### OneLake as a Source for COPY INTO and OPENROWSET

Now in preview for Fabric Data Warehouse—load and query files directly from Lakehouse folders without external staging:
- SQL-based read and write access to lakehouse files
- No SAS tokens, IAM, or external storage needed
- True SaaS-native experience secured by Entra ID

[Read the announcement →](https://blog.fabric.microsoft.com/en-US/blog/announcing-public-preview-onelake-as-a-source-for-copy-into-and-openrowset/)

### Fabric Notebooks Competition

The first-ever Fabric Notebooks Competition for Power BI:
- Opens August 4, closes August 29
- Build reusable, insightful notebooks for the Power BI Notebooks Gallery
- Winners announced at FabCon Vienna

[Learn more →](https://powerbi.microsoft.com/en-us/blog/introducing-the-first-ever-fabric-notebooks-competition-for-power-bi/)

## Main Discussion: Translytical Task Flows

### What Is Translytical?

A Gartner-coined term that Microsoft adopted for task flows in Power BI:
- Connect reports to user data functions in Fabric
- Enable write-back capabilities directly from reports
- Go beyond read-only analytics into actionable workflows

### Use Cases

Tommy and Mike discuss practical applications:
- **Data entry** — Write data back to SQL Database from a report
- **Approvals and workflows** — Trigger actions from report interactions
- **User data functions** — The bridge between reports and Fabric compute

### SQL Database vs. Warehouse

Tommy shares his current workflow preference:
- Lakehouse for the SQL Analytics Endpoint
- SQL Database in Fabric for write-back scenarios
- The overlap between Warehouse and Lakehouse creates some confusion
- Both have their place depending on the use case

## Resources

- [Translytical Task Flows Overview — Microsoft Learn](https://learn.microsoft.com/en-us/power-bi/create-reports/translytical-task-flow-overview)
- [OneLake as a Source for COPY INTO — Fabric Blog](https://blog.fabric.microsoft.com/en-US/blog/announcing-public-preview-onelake-as-a-source-for-copy-into-and-openrowset/)
- [Fabric Notebooks Competition — Power BI Blog](https://powerbi.microsoft.com/en-us/blog/introducing-the-first-ever-fabric-notebooks-competition-for-power-bi/)

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=0s" target="_blank">0:00</a> [Music] Good morning and welcome. Welcome back to the Explicit Measures podcast with

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=31s" target="_blank">0:31</a> Tommy and Mike. Good morning everyone and welcome back to the show. No audio, Tommy.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=38s" target="_blank">0:38</a> Good morning, Mike.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=40s" target="_blank">0:40</a> There we go. Now we got audio from Tommy. Tommy. How's everybody doing?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=45s" target="_blank">0:45</a> Not too bad, my friend. It's another week. We are in the week of the month of school's coming back. My kids only have two weeks left until they get into their next grades. It's been nice. Do you do you get to a point in the summer where everyone's home and you get a little little ready for everyone to get back?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=69s" target="_blank">1:09</a> , yes and no. , I enjoy them being around. I work at home all the time, so it's nice being able to see them around the house throughout the day. I don't see that during the school year. , but believe it or not, Tommy, like we so up here in the north, the old north, I guess, the great white north, whatever you want, the Canada basically. , we're up here so far north, we extend our summers much longer than other parts of the US. We have some friends who live down in Atlanta and apparently this was this was like their first week of school, like this week.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=97s" target="_blank">1:37</a> Oh, wow.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=99s" target="_blank">1:39</a> Well, they get out a lot earlier, too. So, they get out earlier, but they start a lot earlier. , so it it sounds like we're like one of the last groups to go back to school in this time frame, which I like because then we have a little bit longer summer. We can enjoy a little bit more here. , I think it's intentionally because for us in Wisconsin, I think they try and keep tourism going around a little bit longer later into the year where we still have some good warm weather here. , and this is our best time of our year. August, September is like it's starting to turn into fall. It's very pretty. , comfortable weather, temperatures, it's pretty nice.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=131s" target="_blank">2:11</a> Very nice.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=134s" target="_blank">2:14</a> Very nice. Let's jump into our main topic today. Our main topic is translitical is so much more. If you've heard the word translitical before, it's a word made up by Gartner a while ago. Microsoft has adopted this for a translitical task flow, which is a feature of building reports and connecting them to functions inside fabric and then also inside being able to do actions with those functions. You can do a lot of different things. So, I think we're going to unpack a little bit. What does Transitical look like? What are the

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=165s" target="_blank">2:45</a> Different use cases for it? , and where potentially you could use this. All right, that being said, let's jump into the news. Tommy, kick us off with some news.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=173s" target="_blank">2:53</a> Some news. All right, we have a bunch here. So, let's jump into just a good one for our general one lake now available as a source for copy into an open row set which are SQL statements is one lake pass. So it just enhances the ability if you're ever copying data into if you've done your SQL statements before it just making lakehouse that much more flexible and robust and really in terms of being a source where you can push your data into.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=204s" target="_blank">3:24</a> So this is these are two functions that are and and these are just these are SQL like functions. These are SQL functions that are part of TSQL. And the reason these are important is because this is coming from the SQL Microsoft fabric data warehouse. So you can you can read and write directly to the lake and do copy into or you can do open row sets or similar functions with other tooling pieces but this is the first time you're going to start seeing a preview around the warehouse. So the warehouse is getting more capabilities and I'm I'm enjoying the

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=236s" target="_blank">3:56</a> Warehouse. Tommy, just out of curiosity, when do you use the warehouse? Like when are you observing or working on the warehouse or when are you most are you building them a lot? Are you using just a what's going on with you?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=250s" target="_blank">4:10</a> Really right now my my general flow is it's a lakehouse to for the SQL analytics endpoint and if I need to push that into a database, I'm using SQL database and fabric. I'm loving me some SQL database.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=264s" target="_blank">4:24</a> Interesting. I know you were a big fan of SQL databases outside of fabric and you like those as well. And so why choose a SQL database over over the SQL of the data warehouse? Is there a difference there that you are needing to see versus one over the other?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=281s" target="_blank">4:41</a> Other? Well, we'll be talking about a little today, but in terms of for user data functions, you can actually write into a SQL database. it just allows a little more editing modifications. You have your normal SQL queries. Honestly, the SQL warehouse and the one lake there's a lot of overlap or I think that's perception.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=303s" target="_blank">5:03</a> Okay.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=305s" target="_blank">5:05</a> Okay. Yeah, I I think I think there's a lot of overlap between SQL and warehouses. I'm not exactly sure which one to choose now, but I I do like the fact that both of them exist. I will say from my experience, the things that I'm using warehouse for the most are I've built a bunch of tables in the lakehouse and I quickly need to query them or filter some records down or see what's inside the tables. And so I'm too lazy to go build another whole item. I just go to the warehouse that exists on top of the, , the the automatically built SQL warehouse or SQL analytics endpoint, which I think is SQL warehouse. I'm not sure if it's 100% different, but I go

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=336s" target="_blank">5:36</a> There and I quickly query those lakehouse tables so I can get some answers out, figure out what's going on and then, , just do a couple quick queries and then I'm off to the races. I'm usually somewhere else.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=347s" target="_blank">5:47</a> That's how I use it.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=349s" target="_blank">5:49</a> That's a great topic. Other news items, Tommy.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=352s" target="_blank">5:52</a> Oh, it's going to keep coming. So the next thing we have is there is a competition for notebooks in the PowerBI blog which simply allows you to there's competition that's going to start on August 4th so just a few days yesterday close on August 29th and you can go to the notebooks gallery on the PowerBI blog to see about using reus reusable insightful innovative notebooks and prizes

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=383s" target="_blank">6:23</a> And prizes and recognition at Fabcon Vienna. Don't want to miss all, contest details are coming soon. They didn't really add in like what the contest details are, yada yada yada, but sounds like fun, especially to show your skills.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=401s" target="_blank">6:41</a> Yeah, it it it's a good competition to have. There's a lot of going to be, I think, like little tiny simple tools that pop out of this, right? , if I'm looking at different things here, but Tommy, most the notebooks that exist inside the notebook gallery are all from Michael Kowalsski, which one I love his tool. Like, great. I'm very happy that it's there, but that's really the only tool that's out there really is Michael Kowalsski's tool with Semantic Link Labs and a lot of examples there. They're starting to to become some other tools. I see some report analysis, some SQL

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=432s" target="_blank">7:12</a> Server agent against warehouse or lakehouse. I'm starting to see some other notebooks appear here. this could be a mixed bag in my opinion, right? There could be a lot of things going on in this in these notebooks and the downside of this is in order to get these notebooks on the gallery to put them on GitHub like they're not on the gallery itself. So it's like

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=454s" target="_blank">7:34</a> Me it's it's good but it's like halfhearted effort in my opinion right it's like we can we get the way there we don't have the full like it should be like easier to get it into my fabrics I got to go download it find on GitHub anyways it just is a little bit extra friction filled but I'll be interested to see what the community is coming up with u there's probably going to be a lot of really interesting ideas this is what we need a bit more of like a like opensource community gallery something that's a little bit more like

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=485s" target="_blank">8:05</a> Know

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=485s" target="_blank">8:05</a> Know it's hard

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=485s" target="_blank">8:05</a> Developer centric. Yeah. Well, look at look at other tools, Tommy. Like when you look at other tools that have notebooks attached to them, you can run the notebook or do the notebook in whatever tool you're looking at. I think I remember I don't remember what program it was. something was trying a notebook and it just it just ran me into a notebook for free. Give me a notebook, let me run it up, spin it up. I could just start running the notebook immediately. , I think we need some little level of that as well in this in this arena as well. So we could not only see these code pieces but actually look at them and run them in real time and

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=516s" target="_blank">8:36</a> Not actually go and download them to my own tenant.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=519s" target="_blank">8:39</a> Anyways,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=520s" target="_blank">8:40</a> I Jupiter the Jupiter company has a feature like that where you can run it. Google Collab is another thing that you can run.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=528s" target="_blank">8:48</a> Can run. That's what I've seen it in. Google Collab was one I saw. It's it's basically hey here's a notebook. You can just go to the notebook and just run it there and see exactly how it runs. So Google Collab is actually a really interesting experience around the notebooks. I feel like we we're missing that in fabric. I feel like that's something we don't technically have.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=546s" target="_blank">9:06</a> Yeah, there is Python notebook. So it wouldn't be PI Spark because I don't know you can install Spark on the collab. You could pretty much do anything. But I'm thinking Mike, it would be great with any fabric example notebook where if you spun it up, it would always use an example database though we're globally available for every tenant. So that way you don't have to configure anything and just say, okay, what does this do?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=570s" target="_blank">9:30</a> , Microsoft already gives away some lakeouses that already have like standard data already built into them. So maybe start there. Maybe start with some example sample data that's you could already get and download in your existing lakehouse. That way if you did want to use the notebook or pull it into your environment, you could easily do it. So like the competition, happy to see what's going on here. I'm a little skeptical on how much traction it's going to get. We'll see what happens. I'm I'm interested to see where this will go. So good idea. Let's let's watch the execution, I guess, is what I'm trying to say. All right,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=601s" target="_blank">10:01</a> Tommy, what's next? The next thing we have is autoscale billing for spark in Microsoft fabric is generally available. So So So finally right serverless billing model designed for flexibility and cost efficiency. So what this means is simply that spark jobs can run independently of your fabric capacity and are bait on a pay as you go very similar how it works in Azure synapse. So really any computes

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=632s" target="_blank">10:32</a> That you want to do all the if you want have a large job you want to do in just spark you don't want that to interfere with your normal fabric capacity you're good

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=644s" target="_blank">10:44</a> Boom this is this is one of the features here I like this feature a lot this is awesome I don't use enough Spark in my demo environments to really turn this on but I have customers who do need this and want to turn this on so they don't kill their capacity just because they're running a notebook this makes a lot of sense it pulls the billing out of Microsoft soft fabric. It puts it into another location. If you have high spikes, high demands, it's all separate. Now, this makes sense. The feature is named totally wrong, Tommy. It's called autoscale billing for Spark. It's totally wrong. It should just be pay as

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=675s" target="_blank">11:15</a> You go Spark. That's what it is. So, I'm going to rename the feature for you. So, pay as you go Spark is now generally available. ,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=685s" target="_blank">11:25</a> Tommy, I would also echo here too. So Spark, this makes sense because we have all the billing mechanisms for Azure. It's already there. It's the same. It's basically the same price. If you ran Spark inside Synapse or Fabric, it's the same, , dollars per compute units or whatever they're billing you for. for. for. This is something I feel like needs to be needs to exist for other operational data sets like when I when I'm talking about like Cosmos DB that's coming out of fabric talking about SQL databases coming to fabric these are two things

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=717s" target="_blank">11:57</a> That I'm like I really like this ability of like I can still pay for fabric and get fabric usage but the consumption of that particular machine or units right that gets build back towards Azure Because in some regards, if I have a SQL transactional system inside fabric, like the database that I need is actually in fabric, I don't really want that to ever time out or have a threshold or have or or ramp out of CU usage. I just want it to be working all the time. And so I may

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=751s" target="_blank">12:31</a> Have a a time of a period of time that has high demand that I don't want to consume all my CUS for. I want to just have that be like an an auto, , auto billing or pay as you go for other resources as well. What is your thoughts on this, Tommy? Does this make sense to you? you?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=769s" target="_blank">12:49</a> You? It's interesting because the SQL is the SQL database is going to be having a billing for storage, not for computation, I believe, but that's not out yet.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=779s" target="_blank">12:59</a> Out yet. To a point though, right? , they're going to bill you for the SQL database. Yeah, they're going to bill you for the SQL database for you storing the data, but not for necessarily you moving things back and forth. So that's going to be separate billing.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=791s" target="_blank">13:11</a> I don't understand.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=793s" target="_blank">13:13</a> So I consumption, it's consumptionbased billing.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=796s" target="_blank">13:16</a> Billing. Consumption based billing. And that's just for storage, right? Not just for

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=800s" target="_blank">13:20</a> No, I don't think so. I don't think they're going to they Microsoft has never given any compute away for free. That's the most expensive thing that they have on their books. It may be it may be free for now for a trial, but I think I don't think they're giving away free compute for SQL servers.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=815s" target="_blank">13:35</a> No, no, they're not giving away for free, but there's two separate billings. There's any things like CUS or anything you're actually doing on the capacity, which is actually moving data in, moving data out.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=826s" target="_blank">13:46</a> Yeah, there's a separate billing for storage.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=829s" target="_blank">13:49</a> Storage. Well, that's how it works right now for Lakeouses, too. , Lighouses is charged by the gig

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=835s" target="_blank">13:55</a> Right now today currently. So like I I don't see why that's any different.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=838s" target="_blank">13:58</a> Okay. I honestly I really think a lot of organizations are going to be frustrated if every service has the separate billing or autoscale billing. The goal like the idea with the fabric capacity, right? If I'm already paying for the capacity, why would I then want like the autoscale? Sure makes sense. But if you have all these separate billings plans that are in Azure that are not visible in fabric, I think it gets a little convoluted on

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=870s" target="_blank">14:30</a> What you're actually paying for the capacity, how many things you actually need for in in Azure or in other billing plans, right?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=881s" target="_blank">14:41</a> Well, I' I'd be actually curious what the chat thinks about this. So chat, if you are interested in these features, let us know in the chat right now what you think about these features. Would you want autoscale billing or pay as you go billing for like other services other than just spark or just is spark okay? I would maybe tend to agree with you Tommy like you can it's on a per workspace level right so you don't have to have it not separate billing for spark you can do it I think on a workspace by workspace level for the spark auto billing so in a work in a workspace that has a high load for spark you can turn

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=914s" target="_blank">15:14</a> That workspace on

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=917s" target="_blank">15:17</a> For pay as you go billing I think I'm thinking the same thing right if if it's a workspace by workspace demand right I may have a single database it's just a warehouse and that's fine. I'll keep that one inside fabric. No problem. I can let that one sit there because I I don't really need to go pay more money for something separate. But in the situations where I'm building like an operational database

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=940s" target="_blank">15:40</a> Or I'm building an operational database that I'm going to be doing dev test prod environments of, dev and test might be fine. They'll sit inside their fabric skew. No problem. Not an issue. But when I get to production and I have this transactional database there, that's the one that I'm like maybe we need to think about that auto billing and have that being paid as you go in certain workspaces for certain use cases. And I I think this is a very I'm probably speaking about the edge cases here, but I would be remiss if I didn't say I don't want my SQL server to start

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=972s" target="_blank">16:12</a> Throttling queries because someone did something silly with an export of a data somewhere just be and now the SQL server is saying I'm going to reject all transactional information like that. You can't have that. So to me there's like certain priorities of things and like I see there are certain workloads that are higher priorities than others and that's what I'm trying to accomplish with this autoscale billing just prioritizing some of those workloads above others.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=999s" target="_blank">16:39</a> So get could we get autoscale on data flows gen two then?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1003s" target="_blank">16:43</a> Why would you want to waste the money on doing that?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1009s" target="_blank">16:49</a> No, I do not want that. Make sure you have a goodness me.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1014s" target="_blank">16:54</a> Do not want that.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1015s" target="_blank">16:55</a> Well, I am happy that that's there. I know it's more niche, but I know for a lot of people coming into fabric, that's going to be really important.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1024s" target="_blank">17:04</a> I would agree, Tommy. , our last comment here or last news article here just came out recently. It was interesting. Expanded data agent support for large data sources. So, we had challenges like when you the data agents came out. if there was a large data set attached to it or had lots of tables in it, you were limited in what you could do on data agents. It sounds like right now there they have lifted some of these requirements. You can now have much larger data sets and also point at custo semantic models, lakeouses and warehouse

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1057s" target="_blank">17:37</a> Data sets with over a,000 tables and more than 100 columns and measures inside the agent. That's crazy. But that that's let's think about it, Tommy. Where do you want agents to be living? You want them to live in a place that has lots of things, right? It's overwhelming for a user to go through and dig through all the information to find what you're looking for or do some analysis or or rip or put some stuff together. I'm This is great. I think this is a really good move here. I think it makes sense to open these

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1089s" target="_blank">18:09</a> Limits up a bit more and give more context to what is happening under the hood here. So, what are your thoughts on this one, Tommy? the a thousand tables that seems like a bit excessive but the 100 columns believe it or not especially when you're dealing with if you want to connect it to your dynamics you want to connect to your data versse or any a lot of raw data

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1111s" target="_blank">18:31</a> The 100 columns is a limitation a lot of people probably got flusher with now that being said I would argue regardless of now that there's the larger data support or the larger schema sizes they did say in the blog, we want to be transparent about performance. The reliability of results may vary. Also, this goes back to what

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1135s" target="_blank">18:55</a> With bigger schemas comes slower slower results.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1138s" target="_blank">18:58</a> Results. Yeah. And this goes back to where we're trying to get a hold on data agents doing exactly what we want on a few tables. So I think this still remains to be seen on a single data agent and how wide or breath the data sources that it should have right because I think a thousand data sources and all I have is a prompt to control it and I've given it

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1161s" target="_blank">19:21</a> That's going to make it a little tough I think for it to get exactly what I want but I guess this has been a request from others but honestly my my push and my recommendation is keep your data aces data agent simple straightforward with your data sources. Don't worry about trying to add a thousand sources or a hundred tables and then if you need to expand expand from there make sure can do the little things and then grow it from there.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1189s" target="_blank">19:49</a> I have one slight so for not the news Tommy I have one like maybe beat from the street here a little bit that I can can talk about here recently.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1199s" target="_blank">19:59</a> Oh

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1201s" target="_blank">20:01</a> Oh

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1201s" target="_blank">20:01</a> Oh yeah. So I found I

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1203s" target="_blank">20:03</a> Okay, so one slight beat to the street and this is came up in the last day or two when I was working on some notebooks. So Tommy, have you ever have you been working in notebooks and using data wrangler? I'm just start there.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1214s" target="_blank">20:14</a> There. Yes.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1215s" target="_blank">20:15</a> Okay. When you build a notebook and you may be aware of the feature, I'm just going to confirm with you. When you're working in the notebook, there is in the data wrangler. So you you make a a Spark data frame. You can see those data frames in data wrangler and then you click a button that says okay, I'm going to open this data frame. It could be DF, it could be named, , initial load, like whatever the data frame you make in the notebook is. If you're in the Spark dataf frame area and you go to data wrangler, data wrangler seems to like pandas for whatever reason.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1246s" target="_blank">20:46</a> Reason. It does.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1246s" target="_blank">20:46</a> It it favors pandas. Okay. When I do that, it makes a simple pandas data frame for me during the time while I'm working in data wrangler. And then you can build your transformations. You can make some edits. And then what you can do is you can then push the code from data wrangler back into your notebook.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1266s" target="_blank">21:06</a> Mhm.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1267s" target="_blank">21:07</a> Mhm. Have you noticed any issues getting the code from data wrangler back into notebooks? Have you had any issues there recently? Honestly, what my workflow has been just copy and paste the code rather than doing the push because it does seem to be a little buggy, but I always take whatever the code is generating. I'm going to copy that. I'm going to add that to my own cell. Thank you. Just like I like manual relationship. Yeah.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1293s" target="_blank">21:33</a> So, you don't like the fact that it's doing like a define a function and then run the code and then a return statement at the end of it. Correct.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1299s" target="_blank">21:39</a> I don't know where the cell's going. Yeah. And but I do know what you're talking about. data English does like pandas a little better.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1305s" target="_blank">21:45</a> It does. So, one thing two two observations that I have found just just want to make people aware of things. , I have found a timestamp past error. So, for example, I'm in pandas. I had a timestamp that was unknown to the power semantic model. So, what I needed to do is I need to go in and change the the data type of the column. So I found an edge case where the date format that I had in pandas right I was

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1336s" target="_blank">22:16</a> Able to right click on the column say change data type from a a string into a a date time and when I did it in pandas the video the the rendering window which is great I do love this as you make changes it gives you like a green column or a red column when you use data wrangler it's either rowby row or it does a column so what I was doing was I was changing column. So, it deleted the old column, made us a new column that was green again, same name, just was green, and showed me the dates.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1368s" target="_blank">22:48</a> I was like, wonderful. This solved my problem. I click add code to notebook, it goes back to the notebook. I run my cell. Nothing but nulls. So there is something there's a bug in how the code is interpreting the panda's transformation of timestamp into the spark version of time stamps cuz it's it's basically similar functions but they don't do exactly the same thing. So, for whatever reason, the date time stamp that I was using, it was

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1399s" target="_blank">23:19</a> Something like the the day of the week, the number of the day, the month in like three letters, and then the year, and then it had some time stamp stuff at the end of it. So, it's just it was just what I've seen, right?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1412s" target="_blank">23:32</a> It just didn't return results. And so, there was a bit of a bug between the translation between the Panda's way of doing it and the Spark way of doing it. Okay, so it sounds like Michael Fortman is also in the chat is having similar challenges as well. So I just wanted to point this out. It sounds like Microsoft has recognized this as a bug or I'm filing bugs around this one. So hopefully it becomes resolved. So that's number one was this translation. You're going to see a little bit of interesting difference between data wrangler and it's still fixing some issues. The other thing I found was if

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1443s" target="_blank">24:03</a> You use columns with special characters, pandas seems to be able to handle that correctly. The spark data frames do not. So for example, I was loading data in using what was I use? Oh, I was using API. So I was using an API in a pipeline. I was copying data in and this is something to note right in a pipeline when you copy things in an API sometimes the API returns JSON or XMLA or other

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1474s" target="_blank">24:34</a> Things. If you write that data down to a table the names of the table columns will have dots in them. It'll be like the nested data structure of XML it get every time you go into a nested section it'll give you like a dot. So it would be like tablet column dot subsection dots subsection dot subsection whatever the thing is.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1499s" target="_blank">24:59</a> Yes

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1500s" target="_blank">25:00</a> Yes the it was nice that it did it for me on the front end in the pipeline side but when I got to the data tables when I was trying to do transformations in a notebook all the dots in the name of columns

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1512s" target="_blank">25:12</a> Columns were not being handled correctly. And so instead of when it came out of data wrangler back into my notebook I ran I tried to run the code it just failed immediately. I was like what's going on? and it's saying it can't find the column. Like no, the column's there. What's going on? And so there's a there's a syntax issue where it comes out of pandas back into the notebook. If there are special characters, you need to use like these back ticks in order to get it to properly grab the the the title of things. So just FYI, these are two buggy things that I found in notebooks in

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1543s" target="_blank">25:43</a> Working with data wrangler and getting from data wrangler back to notebooks. So the first one really was this timestamp conversion data type issue. So sometimes you'll convert things and it won't come in correctly. And the second thing is you you need to be very mindful of what your columns are named. I'm more and more using all lowercase column names with any spaces being represented as an underscore. That's more of what I'm going to I'm getting to a point where like I'm finding so many little edge cases around

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1574s" target="_blank">26:14</a> Little things about different Python functions are some are case sensitive, some are not.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1580s" target="_blank">26:20</a> I just don't do anymore. Everything is all lowercase with underscores in the middle. It seems to be safer and I'm getting better results using notebooks. I'll just pause right there. Tommy, any comments from us?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1590s" target="_blank">26:30</a> Oh my gosh. And the date time, not only the You're lucky you at least solved the nulls, so you need to stop what you're doing there. I I had the worst issue with the pandas datetime need to convert it to to date. Well, pandas made it a datetime Z or whatever a different data type which was not did not work with spark when you wanted to write back to the table. So all these areas like what what the heck what I use data wrangler man I changed this to date type why

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1621s" target="_blank">27:01</a> Isn't it working? So honestly man I have a fabric or or I have a project in chat GPT for called the fabric guru

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1633s" target="_blank">27:13</a> That helps me it's basically its focus is the conversion between spark and pandas and notebook and fabric and the gotchas because yeah the the date type or the data type conversions are hard or rough especially if you want to go back to spark they may not work or they may right to spark. , honestly with the data wrangler, I've been just really using more chat GPT on what I want to do and I'll give it the code from data

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1664s" target="_blank">27:44</a> Wrangler, but I say make sure this is this works with spark and I won't insert that into my notebook just because too many issues, man. Like yeah, so completely that is a big gotcha if you're doing things in pandas and you're going to need to bring that to spark. Oof, I feel sorry for you. , there are are

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1689s" target="_blank">28:09</a> Are It's not bad. , it's just a little bit. , just be aware of it. Like, it's not like the world's it's not the world's ending. A lot of it does work. So, these are I've just found two small edge cases that I think don't work. So, I'm just going to point it out. I don't I don't think I wouldn't go like your world's going to end. I wouldn't worry about it. Like, it's this is not something like you need to freak out about. But I would say it would be worthwhile for you to spend some time and note that if it doesn't work correctly, it's it's likely a translation between pandas and going

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1720s" target="_blank">28:40</a> Back to your spark notebook. Another way you could resolve this too would be is to not use spark dataf frames and instead just use pandas dataf frames initially. So in your notebook before you get the data wrangler, you could just convert your data frames right to pandas initially. go into doing data wrangler come out use pandas but as I have learned as well when you get doing really big data or you start doing large things pandas isn't the most performant thing either if you listen do you listen to mim at all Tommy on the social media platforms

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1752s" target="_blank">29:12</a> Yes yes he has maybe the greatest GitHub following or repository yes

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1759s" target="_blank">29:19</a> Yes okay so mim on the social media platforms I think he's on LinkedIn and x right now, but Mim will greatly talk about the the the powers of duck DB and how duck DB is like this amazing super fast, highly performant at large scale data stuff. So, while I do like pandas, it sounds like pandas is like the slowest of the bunch, right? It's it's the most widely used, but it's the slowest of the bunch. If you really want to do things, you're using duct DB and other things as well. Anyways,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1791s" target="_blank">29:51</a> Anyways, just wanted to throw that out there as well. well. well. Anyways, I don't have any other items. T Tom Tommy, that's about it for our announcements. We've been doing a lot of a lot of intro stuff,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1801s" target="_blank">30:01</a> Dude. I I think we need it's time for Transolitical.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1805s" target="_blank">30:05</a> Let's do it. All right, let's jump into transitical topics and Tommy, give us an overview here. What's What is Transolitical? Why do we want to talk about this? And like what's going on here? So, I'll let you kick it off here, Tommy.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1818s" target="_blank">30:18</a> Oh my gosh. I Where to begin? Transolitical tax flows is a new concept. It's a new word Microsoft came up with I believe last year Ignite if I'm not mistaken

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1832s" target="_blank">30:32</a> And obviously it combines two things transactional and analytical and really the gist of it is the really the ability to enable users to automate actions directly in the report. We've talked about rightback. It's so much more than that, but it simply allows us custom to be able to do actions on data in a PowerBI report. Obviously, this works with fabric

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1858s" target="_blank">30:58</a> And this all goes through a nice user data functions, but simply put, analytical task flows allow us to add data, delete data, call an external API, all within a PowerBI report. And the actions are all customized by the report author.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1876s" target="_blank">31:16</a> So I want to just deep dive on this a little bit and I'll put the the the article here in the chat window as well just for those who want to follow along is understanding what a translitical task flow is and how you can learn more about them. I've been doing a little bit of playing around with these things and whenever I talk to people about Transitical, people immediately think, "Oh, it's right back." And and this is I think maybe a little bit of a misconception. That's one of maybe like three or four or five other use cases around what you can do with it. And I think this is maybe maybe

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1908s" target="_blank">31:48</a> This is and again Tommy, I'd be curious your thought here as well. It feels like this translitical thing is stepping on the toes of Power Apps lightly or

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1923s" target="_blank">32:03</a> Power Automate as well.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1925s" target="_blank">32:05</a> Yes.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1926s" target="_blank">32:06</a> Yes. Yeah. Yeah. So I think it's definitely the advanced version. So for those who are unaware in PowerBI there are two visuals, a Power Apps and Power Automate visual which allows you to connect to your app or to your to one of your flows and simply kick off or do something within that. It's fine but it's very it's not flexible in terms of it's that app or that flow but this is really so much more Mike. Yes. And I I think this is the idea here is when we talk about reports,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1958s" target="_blank">32:38</a> This has been asked for like what Tommy since day one initially when power like soon as there was data in PowerBI and we could interact with it. People wanted to update records and like and from that even in the early days Tommy there was like a whole bunch of companies trying to build custom visuals that would do exactly this.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=1975s" target="_blank">32:55</a> Oh the amount of custom visuals is insane. So I feel like to some degree this move by Microsoft on Transitical really has cut at the knees a lot of these other companies that are doing interactive report data changes thing. There there's there's some there's definitely some nuance to this like it's not ex it's not like I have a table matrix where I can go in and edit a single cell in the table and then the table automatically updates itself. It's not it's not something like that at this point. But we can do a lot of

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2006s" target="_blank">33:26</a> Interesting things with right back there as well. I'm also thinking here too Tommy like this is let's talk about the architecture of this right.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2016s" target="_blank">33:36</a> Yeah. This is

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2017s" target="_blank">33:37</a> This is a button that's inside a report that is able to put context. Like when I do when I press go on this button or this text box, it will read information in and it's passing text or whatever's in the slicer or this is like a text slicer. So the text slicer is part of this solution as well. you can pick up information inside that text slicer and as long as there's data on the page, you can pass all the information into the button press. And so when you do this is where I think the

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2049s" target="_blank">34:09</a> The hooks of this really make sense to me. The the components of of this solution are the report, some form of a button, and then an fabric data function, a UDF. Those are the main components of this. And then what you do after the user data function is like whatever you want like you want to send a like the examples are send a team's message call an API

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2078s" target="_blank">34:38</a> Write data down to a lakehouse or put it in a warehouse or stick it in like the the possibilities are endless because the user data function while it isn't a power app it does let you write Python and you can do anything you want there

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2092s" target="_blank">34:52</a> And and that's the big difference here because I think everyone's just thinking oh translitical task test flows is just right back on your the data in that source. Not at all. Since it is a user data function in Python, you're you're free towards any Python package or really any Python function you want to create. And to example, right, the example of there's a button and there's a text slicer. Well, depending how you create that function,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2123s" target="_blank">35:23</a> It may be a text slicer that you type in text for a description. It may come from a table of , , selected record, but it can be multiple objects on the PowerBI report that's going to send that data or that information to that translitical task flow, that user data function.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2142s" target="_blank">35:42</a> It doesn't have to necessarily be data in that report, which is an very important aspect here. M

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2149s" target="_blank">35:49</a> You may so you may have

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2151s" target="_blank">35:51</a> Give you a use case here. Yeah one here. What are you thinking?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2154s" target="_blank">35:54</a> So you may have a PowerBI report that's looking at all the customer sales orders and you want to add a description on the customer information but the report doesn't have anything about customer tables or customer descriptions. Well, the data your task translitical action button however we want to put it may have that text slice to say add a description for the selected company. Your function is going to get the whatever that customer ID is for that order and can send an annotation to a customer table in your

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2186s" target="_blank">36:26</a> Fabric SQL database.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2189s" target="_blank">36:29</a> It can be completely outside of whatever data is in that PowerBI report. But again, it's more than just write back too. You can modify the records. You can add annotations. You can even get data like get contact info from an a CRM or whatever data source based on the button send or even do AI suggestions or kick off an approval. So all these things are available because of the user data functions that you've written. So it's really important to note that

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2220s" target="_blank">37:00</a> Whatever you selected in your report or in that visual is not what's going to be written back. right back is probably a little misleading almost.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2231s" target="_blank">37:11</a> Yeah. , it's again I feel like the right back is just a small portion of what you can do. Like that's that's my point here. It's like it's just there's so much more to do just beyond that.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2239s" target="_blank">37:19</a> I just recently did a workshop around setting this up. Have you set up one yet, Tommy? From scratch?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2244s" target="_blank">37:24</a> Yes. So I took the example from the guest page, all the examples, and it was like okay, I would love to see a visual here. here. here. So, so level of difficulty like so if I if again I'm also thinking about where do we put this? Yeah, again there's so much more potential here. We can open up people's mind around there's a lot more to go on with translitical and I was so a couple things. First thing I was thinking was man this is pretty neat.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2271s" target="_blank">37:51</a> If you're ever doing like a workshop or something like where you're doing like a a full precon day or something like that, you could totally make a transitical app that would be like your help support desk. You could literally have, hey, I'm going to build this report. I'm going to have a chat chat message thing. , you could literally do build like a chat messenger inside of this thing. I I'm trying to on the side trying to build like a little simple chatty system here where you can go into a report page and have a bunch of people submitting comments or things and it all gets sent into a

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2306s" target="_blank">38:26</a> Central database which then now becomes like an interactive chat experience around different people and how they can interact with these chat things. So that's interesting. and it can be a real-time thing. It'll happen as soon as people submit messages, which would be fun watching the system actually update and do those things in real time.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2325s" target="_blank">38:45</a> Yeah, honestly it's not entire terribly complex in terms of writing the function. However, I think the only confusing or difficult barrier is all the examples that they have. it's hard to see what that actually correlates to or the visual because there's some syntax

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2346s" target="_blank">39:06</a> That you need to be aware of in terms of like a function. So if you actually want to add a variable for something you're plugging in from the PowerBI report, use this question mark

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2357s" target="_blank">39:17</a> And then you feed that in later.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2359s" target="_blank">39:19</a> It's a bit new. They don't really explain that in the documentation. They just show it.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2364s" target="_blank">39:24</a> Which side are you talking about? You're talking on the PowerBI side or you're talking on the function side? function. Yeah, because you cannot. So, and this is an important note too. You want to get started with translocal task flows, you have to have a user data function, which means you have to have Python code that you are writing or have written

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2382s" target="_blank">39:42</a> And so that Python code is going to tell you the input. You can do some calculation and then it's going to do eventually what whatever that output or action is. But based on the documentation for some the annotations there it's like okay it looks pretty simple because you can get a JSON response you can do a a SQL read command but there's this weird there's some weird syntaxes that you're if you didn't not know how it correlates to PowerBI for example there's a select from company status where company equals question mark and then you're like okay how do I get that variable in there

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2416s" target="_blank">40:16</a> That's a Python function there's also So this new actions called C cursor execute. So basically when you actually click on the button.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2427s" target="_blank">40:27</a> Yeah.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2428s" target="_blank">40:28</a> Yeah. But I think for a lot of people it's like can I see more visuals of the power beta report correlated to that function just so if I want to add a text slicer and a table I think that makes it a little confusing. Just taking the example code you can see in PowerBI you add a button and you got have to have new update. And even if you just take some of the example code that Microsoft has, one of them has for a text slicer and like a conditional formatted or like the selected value. Okay. Well, I add the

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2460s" target="_blank">41:00</a> Button. I say data action, choose a workspace, choose the UDF, and it's like, oh, I can choose this text slicer. Cool. A nice drop down. It basically gives you all the parameters of what that UDF needs. Mhm.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2475s" target="_blank">41:15</a> So it's pretty easy to get that sample getting u started but I think for the really the realm of what's possible I actually let me ask you so your your workshop that you did with this what did you show did you use a Microsoft samples or do you like okay

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2499s" target="_blank">41:39</a> So yeah so let me let me get you like where do I think the hard part of this solution is right so I I don't think the hard part is setting up the powerbay report. The report report the powerbay report is pretty straightforward. that doesn't seem to be the issue for me. The issue is even like the UI that makes sense like it makes sense what's coming out of the report. How do you bind different data from the report into what's going into the the function? There's a little bit of wonkiness around like how do you select certain items, right? If if something is selected, how do you get the data out of the report? So, you have to be a little bit careful there like what you're

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2531s" target="_blank">42:11</a> Selecting and how do you wire up the function? I surely think the most difficult part of this is writing the function right so it's it's writing the function that is the most difficult part of this because you have to understand the connection between what is coming out of the report data wise and what is coming into the the function and so in the examples that are given I actually put another link here different examples of translitical task flows the one that I am looking at here is the add data annotation So adding an annotation, add a annotation. And so

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2565s" target="_blank">42:45</a> In this example,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2569s" target="_blank">42:49</a> There's a couple things the function does that I think is easy, right? It says, hey, look, I'm going to make a connection. The connection will be SQL database, the type of it, and then it will be what is the alias or the database you're going to be talking to. So there is the at symbol, and you're defining I'm going to make a connection. The nice part of this function is it just knows what you're trying to connect to. As long as you call off the right SQL database and it's in the right location with proper permissions for the user creating it, great. It just works. And so that's a lot of connection string

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2600s" target="_blank">43:20</a> Things we don't have to save in our code. It just works. And that's really nice. So from that perspective, that part of the function I think seems to be very easy. But to your point, Tommy,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2609s" target="_blank">43:29</a> Tommy, I really had to read very slowly because I was not very familiar with this SQL DB connect SQLBD connection.cursor. What is it doing? It's inserting queries into something and then it's executing the query. So it's it's writing the statement in one line and then it's injecting the SQL in it using a data function. So it was a little bit hard to digest for me. Okay, I'm going to be entering this data in here. How does the data object in these functions match what's being built when you insert

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2643s" target="_blank">44:03</a> Data using the insert query function as well? So there's this cursor.execute execute function. We're using the insert into item. And so it it just was a little bit like I was confused. I didn't quite understand it. To your point, Tommy, there was four question marks that were inputting the data. And there is a again with Python, there's an order to things, right? If you have an object with three different variables in it, a list basically, every single question mark becomes an item in that list. It just was a little bit again not

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2675s" target="_blank">44:35</a> Familiar. if you're not if you're not familiar with Python, it'll feel a bit strange and awkward. So, from that perspective, that was interesting there. , I would definitely say the most challenging part is getting comfortable with what the Python Python function is doing. Now, I'll also argue this. I do have Edge and Edge does have a little

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2699s" target="_blank">44:59</a> Little co-pilot or I have Grock or I have whatever other AI thing. Python's a very well-known language. So I can go ask some help. I don't need to know all the syntax of the Python. I can actually borrow from Microsoft or these agents to have them help me build it out a little bit. So in that regard, I think it's a little bit nice.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2718s" target="_blank">45:18</a> It's nice. Yeah. So and Mike, it's pretty powerful. How many people did you have in the class? And I I really want to know what was their reaction to transolitical task force.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2729s" target="_blank">45:29</a> I think the reaction which is pretty they they liked it. I think it but again I think a lot of the questions came back was well how is this different than power automate what is why would I use this versus the other solution like well this only uses fabric elements you get a bit more control I think about what happens in the python but it's definitely not power automate it doesn't have the graphical interface of doing this deciding that you can do the same it's it's the same logic could be built into python not problem you're just writing code versus having a graphical interface so to that point.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2760s" target="_blank">46:00</a> Tommy, we've talked a lot about where does Microsoft make things easy. Well, a lot of what they've built in the Power Platform as well has built these graphical interfaces that write that you use block diagrams to generate code that you can then use. The hesitation here was, well, why don't I just use that? And my my main argument was, well, it's a license you don't have to pay for, right? You have to go get Power Automate. It's not really integrated deeply into the product. , , it doesn't quite do everything that you want. it felt like there was a bit more flexibility in like what information you

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2792s" target="_blank">46:32</a> Could send into the function and the function could handle like multiple variables getting sent in at the same time whereas Power Automate doesn't seem to be as flexible about getting the data in and my experience anytime I put Power Automate in a report it was just really clunky it just never seemed to and it never seemed to wire up correctly or it was just very hard to wire up correctly at least that's my opinion

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2816s" target="_blank">46:56</a> Yeah and I think the toughest thing too is again this this idea right back or pushing data. With both power apps and power power automate, you send it and hope that everything occurred. With translitical task flows, you do get that feedback as well. Like one of the cool examples that they have here is the ability to actually do an AI s suggestions for proposals.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2842s" target="_blank">47:22</a> That was interesting. Yes, that's a cool one. one.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2843s" target="_blank">47:23</a> One. Yeah. Yeah. So, and I think that it's so much again I think just saying right back here is just it's not giving it a stew. Mike, do you think the way they've set up translitical task flows with the user data functions is almost like a canvas too bear. So, this is my one

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2868s" target="_blank">47:48</a> Saying. Yeah, keep going down this path. I like this. My one concern and at least with the documentation they have now and the examples is you can do anything. Okay. Well, where do I even start? I know the the annotations, but this it almost makes my mind like it almost makes me go into overdrive trying to think of the first example I want to do or the actions I want to do because if I can do anything, well, there must be a hundred different use cases for this, right? However, I I think that it's very bare right now

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2899s" target="_blank">48:19</a> In terms of what's possible. So, yeah, what do you think about how they've set it up and for those who are just like, I want to get started. I see the examples, but there's got to be other things, right?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2914s" target="_blank">48:34</a> Yeah. I I I would argue Tommy to your point here, this is not for the faint of heart, right? The translitical is not going to be your beginner users. You're not going to give this to wide open to your organization. This is very purpose-built, very specific interactions with reports and data systems or data things behind the scenes. So, I really think you need a strong use case cuz it takes a little bit of time to set it up. You're going to make an investment to do something like this and there's a lot of little pieces to figure out here. , so I I would argue to your point Tommy, this is prodev. Like this is all prodev in my

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2946s" target="_blank">49:06</a> Mind. This is not a beginner user thing. I would encourage people to if you're interested in translitical go to the gist GitHub from Microsoft here and I put that in the link the chat as well. So Sununjada has got this really great example user data functions markdown file. you can go grab all the custom code that comes directly from there. Go there first. go through the Microsoft tutorials around translitical because that's

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=2979s" target="_blank">49:39</a> Really good starting points what's going on and I think that's a great understanding of what is capable and I think you can get really creative with it. Now the downside of this is I'm not really sure again this has been out for a couple months now. I'm not seeing a lot of people building other example notebooks around translitical things. So again, going back to like the notebook experience, like there's a notebook competition. I don't want , I think there's competitions exist for people to build stuff or create things on their own time and then leverage it for the community.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3011s" target="_blank">50:11</a> It's the encouragement of the community to do these bigger things. And I'd like to see more creativity. I'd like to see more creativity around what translitable test flows are doing. my only other rub on this one is in the AI suggestion example when it talks about using a different AI model. Wonderful. In the middle of the AI example, it talks about making your own prompt. Write whatever you want.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3036s" target="_blank">50:36</a> And then it says deployment using GPT40. GPT40. So you can pick your model which is nice. That's something you can't do typically with co-pilot. but the downside of this is and again this is for example purposes only inside the code they threw down the API key directly in the code inside the the the the function the user data function. So I don't really love that but other than that you could use an open AI client to go get a real model and write your own custom prompt on things. So this is yeah

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3067s" target="_blank">51:07</a> There's some really interesting things you could do there

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3070s" target="_blank">51:10</a> Man that that like the AI suggestions one too is one too is where does someone get started then because if I can write back if I can get and return back AI suggestions if I can add annotations if I can return data from another database where would you recommend someone starting because for me rather than again trying to do all the examples like hey you can actually do a dynamic marketing email or get contact info. I would start I think the example that you did in your workshop is a SQL table

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3102s" target="_blank">51:42</a> Is annotations is a great place to start just to add add a description or add a comment to a record in a table. But I would say honestly just if you really want to see the power of the the transolical task flows is going to be that get the contact info and the AI suggestions are pretty neat because that allow again because that allows you to say okay I'm looking at an order. Oh well what else has this person done this

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3133s" target="_blank">52:13</a> Contact? Well, I can just click on that button and I can get all that contact info from a fabric SQL database or from really any particular source and see basically what their status is, see different information that's going to get returned in the report.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3153s" target="_blank">52:33</a> Again, that's data that exists outside where where would you recommend someone just getting started

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3159s" target="_blank">52:39</a> For for what? I think I disagree that recommendation

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3162s" target="_blank">52:42</a> With if you were to say I want to create my first task flow. I want to create my first transital data action button.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3167s" target="_blank">52:47</a> Were you listening? Because I just said go to go to go to GitHub.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3171s" target="_blank">52:51</a> Is there any other ones that you have? Yeah. Yeah. Yeah.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3174s" target="_blank">52:54</a> Okay. That's your question. Okay. Not found.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3176s" target="_blank">52:56</a> Found. Yes. I'm looking at the G. Yeah. Yeah. Yeah. Yeah.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3179s" target="_blank">52:59</a> The only one that I have found is the one from Microsoft that has like the five or six examples. I have not found any additional ones above this. And so that's where I you it's going to be

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3189s" target="_blank">53:09</a> Here's a starting point. Figure out what you want to do from there. after outside of this then I don't know I haven't seen any other guests or any other community based projects around task translitical task flows yet.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3202s" target="_blank">53:22</a> Flows yet. So let's assume that they're going to add the documentation is going to be featurerich in terms of this the samples as we look forward to what this will mean. Yes, we know it's not for the faint of heart. We know this is someone who needs to have that Python experience and call more or less a developer. If this is what we think it is, is this something that you see as being considered considered whether or not a game changer or something to consider for your every

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3234s" target="_blank">53:54</a> Report that you do whether or not you actually add it? No.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3238s" target="_blank">53:58</a> No, it's report. Yes, this is a very very specific use case. I'm not task transitical task flows is a very specific use case. again I would I would echo on if if one of your use cases doesn't fit one of the examples that Microsoft gives. There could be other things here like call a random API, send data to the cloud, make a request to get data from an API. Those would be things that would be good opportunities to do this stuff. So I do think that's important. , okay. I'm going to give you one that's

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3271s" target="_blank">54:31</a> That's near and dear to my heart right now, which is there's a lot of websites that supply data to you like Twitter or X or , podcasters, what we do for Spotify, but those APIs are hidden. They're behind a payw wall and you need to like hack the APIs to get your data out of it. How nice would it be to make a report where you could submit your own little like, , cookie into it and have the here's the cookie, Mr. function in the user data function, go hit this API call and get the data out that I need and save it to this table. Like you could do

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3303s" target="_blank">55:03</a> Things like that. You could actually do a bit more complicated things to help yourself eat to go get the data on demand. You could go require the information when you need it. That seems like a good use case for these situations, right? When it's very specific. I'm in the report. I don't want to leave the context report. I need to do something else and either return or modify or or manipulate some data or APIs outside of my report, I can get data back. And the other thing I think it's also neat here too is

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3333s" target="_blank">55:33</a> The user data functions supply data back to your report. So for example,

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3338s" target="_blank">55:38</a> I don't know Power Automate does a good job of like responding back to you when you completed a call.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3343s" target="_blank">55:43</a> It does not. It does not.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3345s" target="_blank">55:45</a> Okay. Okay. So if you in a power automate example you would say submit data or do you send this data here whatever you want to do it just works and says success and is done in the user data functions you could say in this example here for the AI suggestions you can submit something and then it can actually respond back in a little message box in the upper right hand corner your function is being run here's the answer here's some response there's there's other feedback that comes back from the function so the function actually has a response mechanism that

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3376s" target="_blank">56:16</a> You can give back to the reporting thing as well. So I think that's again it's it's much more refined of an experience than it would be just a power automate inside things. Yeah, honestly I'm thinking about this more and more and I think with the really allowing the custom functions I think about all the times people want to comment on the report right or there's a record there's a right all those different things and comments are available but usually it's like hey

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3407s" target="_blank">56:47</a> That's not the sales manager or

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3411s" target="_blank">56:51</a> I cannot the amount of scenarios where this little button that could easily send an approval or an email over without having a whole power automate

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3422s" target="_blank">57:02</a> Would be huge and also people can add their descriptions. So there it this does to me at least not necessarily the full shebang of the right back but just adding those actions that can go to teams or send notifications for data that people are unsure of man this almost feels like it's going to be it's building up PowerBI to be that app rather than that report. Well, it's it's already been a data app all along. It's just this to me solidifies more of

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3453s" target="_blank">57:33</a> That, right? I I think just my hesitation here is make sure you apply it where it makes the most sense. Don't just throw like with every new feature that comes out from PowerBI, this feels like the early days, right? Anytime something, oh look, there's a new setting on a bar chart, there's a new setting on a table or matrix or whatever, I'm like, quick, let's build a report that uses this new feature, we need to add it immediately. Look, bookmarks are here. Let's make a bunch of bookmarks. And so again, I think about now more strategically like is this going to be hard to maintain? Is the lemon worth a squeeze? Do we really

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3484s" target="_blank">58:04</a> Want to spend, , a half a day working on building this thing out, this feature out and then, , not using it? Like if I only want to build things that are going to be heavily used, right? I don't want to just build stuff just because it looks cool or it's a new feature. So I'm trying to be a bit more strategic around when we apply these things. And this feels to me as one of these ones to be be more strategic around when to apply translitical task flows.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3509s" target="_blank">58:29</a> Awesome.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3510s" target="_blank">58:30</a> Awesome. With that about it, I think we're about done. Let's do a quick wrap here. So, thank you all for listening to Transitical Task Flows. Hope you enjoyed this conversation. Go check out the documentation from Microsoft. These are very powerful. They can really open you up into doing a lot of additional things here around reports and having interactions outside of the report. So really taking action on things after you have looked at the report and done some analysis. You can directly interact with other data pieces which is what which is a lot really fun. That being said, we do appreciate you listening. We know you

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3541s" target="_blank">59:01</a> Can spend your time anywhere else. Please if you like this conversation or felt this was good, give us a share or share on social media. Let us other people know that you like the podcast. With that being said, Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3554s" target="_blank">59:14</a> You can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. And share with a friend since we do this for free. Do you have a question idea or a topic that you want us to talk about in a future episode? Well, head over to PowerBI.tipsodcast. Leave your name and a great question. And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all of PowerBI. Tips social media channels.

<a href="https://www.youtube.com/watch?v=kXzMW3s6Ie8&t=3584s" target="_blank">59:44</a> Awesome. Thank you all so much and we'll see you next time. [Music]
