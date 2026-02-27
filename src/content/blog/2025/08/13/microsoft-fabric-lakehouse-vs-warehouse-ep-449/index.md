---
title: "Microsoft Fabric Lakehouse vs. Warehouse – Ep. 449"
date: "2025-08-13"
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
  - "Lakehouse"
  - "Warehouse"
  - "Data Architecture"
excerpt: "Mike and Tommy explore the design considerations between Microsoft Fabric's Lakehouse and Warehouse—when to use each, where they overlap, and how to think about the decision for your organization."
featuredImage: "./assets/featured.png"
---

Lakehouse or Warehouse? It's one of the most common questions in Microsoft Fabric. Mike and Tommy break down the decision guide, share their real-world experiences, and discuss where the two workloads overlap and diverge.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/gHllYC3Fcn0" 
  title="Microsoft Fabric Lakehouse vs. Warehouse – Ep. 449"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Main Discussion: Lakehouse vs. Warehouse

### The Core Decision

Microsoft provides a [decision guide for choosing between Lakehouse and Warehouse](https://learn.microsoft.com/fabric/fundamentals/decision-guide-lakehouse-warehouse?WT.mc_id=DP-MVP-5002621), but Mike and Tommy go beyond the docs to share practical experience:

- **Lakehouse** — Best for data engineering workflows, Spark-based processing, and flexible file + table storage
- **Warehouse** — Best for SQL-heavy workloads, T-SQL familiarity, and traditional data warehousing patterns
- **SQL Analytics Endpoint** — The automatic SQL layer on top of the Lakehouse blurs the line

### Where They Overlap

Tommy and Mike discuss the growing overlap between the two:
- Both support SQL querying
- Both can serve as sources for semantic models
- The SQL Analytics Endpoint gives Lakehouse users a SQL experience
- COPY INTO and OPENROWSET are expanding Warehouse capabilities

### Beat from the Street

Tommy shares insights from a large data governance project:
- Building a "data inventory" starting from metrics and working backward
- Reverse-engineering from business KPIs to source systems
- A fresh approach to data discovery that resonates with organizations

### Practical Guidance

- Start with your team's skillset—SQL-heavy teams may prefer Warehouse
- Consider your data engineering patterns—Spark users lean Lakehouse
- The overlap is intentional—Microsoft is converging capabilities
- Don't overthink it early—you can query across both

## Resources

- [Decision Guide: Lakehouse vs. Warehouse — Microsoft Learn](https://learn.microsoft.com/fabric/fundamentals/decision-guide-lakehouse-warehouse?WT.mc_id=DP-MVP-5002621)

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=0s" target="_blank">0:00</a> [Music] Good morning and welcome back to the

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=31s" target="_blank">0:31</a> Explicit Measures podcast with Tommy and Mike. Welcome everyone. Tommy, good morning.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=38s" target="_blank">0:38</a> Morning. Good morning, Mike. How you doing?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=40s" target="_blank">0:40</a> I'm doing well. I'm trying to get some sleep these days. There is We're in the I'm in the Milwaukee area, Tommy. I didn't actually talk to you about this beforehand, but I was wondering, did you have a lot of thunderstorms rolling through your area in the last couple days? Maybe not. It just started last night and then they wake up and you're like, "Guys, I am so tired.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=58s" target="_blank">0:58</a> I'm so tired. I just want to go to bed.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=60s" target="_blank">1:00</a> They stop coming in your house." Yeah. So, So,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=62s" target="_blank">1:02</a> So, we had a chaotic time. We had wild weather this weekend. On Sunday, it was raining like cats and dogs. And you, , you say it rains heavy. Okay, fine. We had some areas around where we live, we had 11 in of rain in a 24-hour span. Yes. There was one place, I think, that got like 14 in of rain. It was crazy amounts of rain. So, if you can imagine, all that rain's got to go. That water's got to go somewhere. People's basement were flooded all over the place. It was utter chaos this weekend. Weird weekend for us. So, helping

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=93s" target="_blank">1:33</a> Friends and family out trying to get everything like dried out. Insurance claims are going to be had. Wild weekend for us. Anyways, no more storms, please. Just give me like a week of like regular rest for a little bit here.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=108s" target="_blank">1:48</a> Do you guys flood at all?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=110s" target="_blank">1:50</a> Thankfully, we did not. We have a very we're up on a we're near a rock quarry so our ground is very not permeable. I guess it runs off and also we're at a bit of a top of a hill and so there's a lot of sloping away from our house. So we actually are very fortunate. when we bought our house, believe it or not, our sump pump was broken. Like it didn't even wasn't even like run it. The sump pump well it never needed to. I think what happened it just sat there for all the years and it never ran to actually do anything. So, the sump pump just broke and it didn't need it. So, we've had ever had any water, knock on wood,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=143s" target="_blank">2:23</a> , in our basement. So, so far so good. I keep all the gutters clear. Our first house was like a magnet for water. , so I had to make sure I had to keep all the drains clean on the house. Every time before it would rain, I'd go up and I'd like blow off all the leaves on the roof to make sure everything was clear and like wide open. , I'd have down spouts like 30 ft away from the house. I'd put the water as far as I could away. It was just crazy. , I remember one time in our old house, it had rained so hard. The backyard filled up with water and there were like bubbles coming through the ground because the water was

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=176s" target="_blank">2:56</a> Trying to sink into the ground so fast. I was like, "What is going on?" Anyways,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=182s" target="_blank">3:02</a> I'm glad you're you're dry, Tommy, and things are well in your area.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=185s" target="_blank">3:05</a> Yeah, I

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=187s" target="_blank">3:07</a> Yeah, I go ahead.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=188s" target="_blank">3:08</a> No, you go ahead.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=189s" target="_blank">3:09</a> No, I was just going to say just thinking about the weather like that. Our house has many problems. Luckily, flooding is not one of them. You're in Chicago and there's a lot of You don't have a big yard either, right?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=200s" target="_blank">3:20</a> No, we don't have a big yard, but it happens a lot for we see a lot of the neighbors too, but our the way they developed our house, like I said, there's a lot of problems. Like we found when we when we were unveiling some of the ceiling in the basement, like they wrapped newspaper over the pipes.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=216s" target="_blank">3:36</a> Oh, interesting.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=217s" target="_blank">3:37</a> And we haven't touched that because we're like, I don't know why they did this. I know it's terrible, but I know if I touch this, something bad is gonna happen.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=225s" target="_blank">3:45</a> Happen. It's going to disintegrate into a million pieces all over the place.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=228s" target="_blank">3:48</a> So, we got problems, but luckily flooding is not one of them.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=232s" target="_blank">3:52</a> When was your house built, Tommy?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=233s" target="_blank">3:53</a> Oh, if old house.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=235s" target="_blank">3:55</a> 1732. It's like 1956, but

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=238s" target="_blank">3:58</a> 56. Okay. We have a friend of ours who had a house. So, again, a lot of houses flooding. We're always comparing like who had houses where when. , one of our family members has a house built in like the 1950s, 1940s, somewhere around there, but they don't even have a sump pump. They have a different way of Yeah. I was like, wild. There's no sump pump here. This is crazy to me. So, , some of these older houses don't even have the ability to pump the water out from the basement. I'm like, and they're still just dry as a bone. Like,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=266s" target="_blank">4:26</a> Wild that that can actually happen.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=268s" target="_blank">4:28</a> Yeah. Anyways, interesting things. No one cares about our houses, our basements, or flooding. So, let's get on to the actual topic today. Tommy, do you have any beat from the streets for us today talking around things you're learning or you're working through with fabric these days?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=282s" target="_blank">4:42</a> , actually I do, Mike, and it has to do with we're we're I'm going into a big project and we're doing this discovery on there's a lot of big projects that we're planning. It's a data governance project and it's come out with we're going to do master data platform. We want to do AI. We want to do more reporting, get a tiger team developed for this for the organization. But one of the things that we have found out is this idea that we're calling the data inventory. And we're really changing this for the organization because like well we have

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=314s" target="_blank">5:14</a> Applications. We know all the applications and systems we're using, but Mike, we're going into this a little differently. We've decided to take this from we call it like the reverse engineering but we're taking this from the metric and we're doing the Indiana Jones way out so to speak and this has been a new concept for them but Mike have you ever done anything like this and let me get your opinion on have you seen what have you seen people's initials reactions to so if I need to explain a little more on what we're doing let me know

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=345s" target="_blank">5:45</a> Yeah so I'm going to maybe articulate your question how I understood it and maybe you can correct me if I'm wrong so you're starting from the KPI side of things. You have key metrics you want to start from and then work your way back into, do we have the data that's that can support this metric or KPI, something along those lines. So, I'm going to assume maybe one of my KPIs is revenue or it could be revenue per employee or it could be revenue per customer something along those lines. There could be other like maybe subscriber based metrics, metrics around how many subscribers are we

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=376s" target="_blank">6:16</a> Getting per month or something or a ratio of spend in marketing to number of new subscribers each month right there's something there's a probably a metric there that you're looking for and that's what you're starting with those pieces and then working your way back up. Okay.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=392s" target="_blank">6:32</a> So yes I don't know if a lot of organizations are mature enough to think that way through all the way. , I also when we've listened to like Microsoft talk about this as well, Microsoft has they've got

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=404s" target="_blank">6:44</a> They had like 35 key metrics that they care about. , but I think sometimes organizations think they're measuring a lot of good things and the volume of metrics, the number of them, there's too many things to really like hone in on, right? It's it's like like the story too many cooks in the kitchen spoil the soup or something like that, right? So if there's if there's too many directions we're all trying to run, no one's ever running the direction. If there's too many leaders, who's really leading? No one. No one's leading,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=435s" target="_blank">7:15</a> Right? So I think it's important to boil boil down like what are your main key drivers of success because once you measure those things, people operate in a way that focuses their attention on those metrics, making those things achievable. , one other thought around this one. I heard someone on a podcast or a YouTube short was talking about , when I work with my team, they have only I think they said like we need one number and a goal.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=467s" target="_blank">7:47</a> That's it. Like I give every person a number and a goal. The number is okay, your your objective is to bring in, , $300,000 of revenue this quarter. That's the goal. like and you just give them that number and it's up to them to figure out okay you need to work towards getting to that goal that is your objective and I think having people with a singular focus around a particular thing if we can make this number or we can make this objective or key metric we can win so that's is that where yes

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=498s" target="_blank">8:18</a> Yes

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=498s" target="_blank">8:18</a> Yes so it's it's been interesting go ahead keep going Tommy what do you think

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=500s" target="_blank">8:20</a> No I was going to say it if these are the projects when I realized Mike that we're going to have a job forever whatever that capacity is because it's even more So Mike, just defining these things where you may have a company like yeah we well we have a PowerBI report with our t-shirt sales like okay well do you have a business definition? No we just know what that means. All of a sudden you start asking different people they're like well no that's only medium t-shirts long sleeves we don't count. Someone goes no we do count that. Okay so what's the actual calculation?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=530s" target="_blank">8:50</a> Yes cables do you use? Who owns the product information? And you you find out very early that way that there's a lot of rocks to uncover a lot of things that people don't realize even today on we're in the age of AI, we're the conductors era. We have all the amazing stuff in Microsoft fabric and people still don't have a good grasp on their definitions which is insane to me. And is it funny how people try to go forward where they want to go, well, we want to do lake houses. We want to do

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=561s" target="_blank">9:21</a> Warehouses. We want to do all this great things. It's like, yeah, we don't know how we calculate our t-shirt sales yet. We we don't even not everyone has a universal agreement on that. And I am such a huge proponent on starting there. As frivolous and as mundane as that process may be, if you can't do that in an organization, how is anything else going to be successful?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=587s" target="_blank">9:47</a> Yes, I I I agree with this one. If again, I think it's this volume of communication. I think we I think we underestimate the volume of communication that needs to be held in order to get people on the same page around various metrics.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=599s" target="_blank">9:59</a> Well, cool. I'm glad you're having a good project around that time. That sounds like a really interesting project. It's nice that you're able to sit back and work with leadership to define what success, what metrics mean, what they need to mean. And so now comes the hard part of well we now we once we agree upon kind what are the key metrics those may be the right metrics but now is do we even have the right data to support those? And sometimes I have found we know what the metric is on the front side like we know what we need to measure.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=628s" target="_blank">10:28</a> Measure. The challenge is the data is all over different systems. How do we get all the data together? And this is where I think I think this is where it actually lends very well to our conversation today.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=638s" target="_blank">10:38</a> Do we put it all in the lakehouse? Should we put it all in the warehouse? So, , with that being said, I think it's a good transition to move into our our main topic today. , we have a phone call today. So, I'd like to welcome to the podcast, , from the Microsoft team, Brad. Brad, welcome to the podcast today. U, Brad is our expert. You work on the data warehouse side of things at inside Microsoft.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=663s" target="_blank">11:03</a> I sure do. Thank you guys for having me. yeah, I work on the data warehouse. So I think I can answer the question that I think you guys are asking. The answer is just put in the data warehouse and and and I think we're we're done for the day.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=677s" target="_blank">11:17</a> Yeah,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=677s" target="_blank">11:17</a> Yeah, that's it. That's it. Ship it. It's the shortest episode ever. We've we've completed the mission.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=682s" target="_blank">11:22</a> Yes.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=684s" target="_blank">11:24</a> Yes. Brad, how long have you been working on Well, , obviously Fabric's only been out for a couple years, but have you been on the warehouse project since Fabric's inception?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=693s" target="_blank">11:33</a> Yeah, I I moved over to the product team probably 2020. , and so that was like right before like right at the end of Synapse, right when we were getting started with Fabric. So, like I did like APS installations and PDW and all that stuff. So I like I've always been interested in the like the data warehouse MPP space and all that. So

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=718s" target="_blank">11:58</a> Yeah. So I've been working with fabric since the beginning. So it's been it's been a wild journey.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=722s" target="_blank">12:02</a> I'm going to pick on you for a little bit here. You said MP for some for for some of our team from our users who don't understand what MP is. MPP what does that stand for?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=732s" target="_blank">12:12</a> MPP massively parallel processing. So it's essentially scale out dataware database infrastructure as opposed to SMP symmetric multipprocessing. I think it is like single computer versus multicomput.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=747s" target="_blank">12:27</a> Yes.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=748s" target="_blank">12:28</a> Yes. So

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=749s" target="_blank">12:29</a> So

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=749s" target="_blank">12:29</a> So and and let me give you a bit of my impression here. So background was a little bit around data warehousing. Didn't do a ton of data engineering but I got into data science and data science was all about parallelize everything. you can put everything in Spark. You can you can run a single query and that query can be divided across many workers and you can search this huge volume of data and that's where there was a there was a an an ecosystem change and so inside fabric we get the data warehouse but it wasn't always the data warehouse it was thin

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=780s" target="_blank">13:00</a> Originally right that was this

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=784s" target="_blank">13:04</a> Massive parallel processing well multiparallel processing massive parallel I don't know whatever

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=789s" target="_blank">13:09</a> MPPP massive it's the MPPP architecture you're pre-built and I remember I think initially a lot of people were frustrated with the solution. It was expensive inside Synapse. It didn't quite wasn't quite at the expense. It was very you got a lot of machines all the time whenever you needed them. And it feels like fabric has very much shifted that mentality to more of like a job based system where I can ex I can store things in a lake and then I can run a query against it and I'm charged just for the query. I'm not sitting there burning CU units all the time for having

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=821s" target="_blank">13:41</a> That MPPP system up and running all the time. Is that the correct architecture? Is that the right mental model I should be thinking about here?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=829s" target="_blank">13:49</a> No, 100%. There there's a couple things I'll say because there there's a bit of a misconception and I'll be honest. I think we did this to ourselves a little bit with the fact that when we launched fabric, the first thing that you saw when you you logged into the fabric UX, I don't if you guys probably remember this or I assume you remember this, was there was a section at the section there that said Synapse and then said lakehouse and warehouse data engineer

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=854s" target="_blank">14:14</a> And so like all these things that you're talking about like if you go to synapse which is still out there today like dedicated SQL pools and like you had to you had to determine the size compute that you wanted like you said it was always running no matter how many nodes you needed. It was always a fixed size, but and then you had to do like these data distributions and if you got the wrong distribution, then you had to go change like reload the table and like it and it wasn't you're right. It it's

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=880s" target="_blank">14:40</a> It works really well if you've got the skill set to go out there and do that. And so,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=886s" target="_blank">14:46</a> And so, bingo.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=887s" target="_blank">14:47</a> I think when we launched Fabric and we had that Synapse logo in there next to that, we were like, oh well, we're bringing the branding over. But I think we misunderestimated the backlash that we would get from having that branding in there because the re the reality is and the interesting part of the the data warehouse and fabric is

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=903s" target="_blank">15:03</a> It's actually a very different architecture than what we've got inside of Synapse Gen 2. It's actually more like the serverless engine in over there than it is the dedicated SQL pool engine. So, like you said, all the

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=917s" target="_blank">15:17</a> Good all that fixed size and that that stuff like it's now like you pay exactly for like I ran this query, it used this many CPU cycles like that's what I'm paying for.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=927s" target="_blank">15:27</a> , so it's a lot more straightforward. It's a lot better from a pricing perspective too.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=932s" target="_blank">15:32</a> I absolutely like this new pricing model. I really like this pay for what you use type mentality or type model. And one of the things so this also I think maybe I don't know it felt like the initial architectures of so to your point right I think a lot of people shied away this is actually a really good conversation around I like this one the Synapse part of this you're right I think it came with some bit of a disdain to it to the fabric world and you saw the Synapse logo everywhere and you're like oh gez now we've just moved Synapse into fabric but I think to your point since the architecture was so different the Billy

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=963s" target="_blank">16:03</a> Method was so different would have made more sense to lead with and now we've since kind like dulged all that away. We're now focusing solely on fabric elements, fabric items. So, now that we're a year removed from the the initial stages, it feels a lot more proper, right? It feels like this is a fabric system and it is uniquely different than Synapse, which it is. , it is it functions differently.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=986s" target="_blank">16:26</a> But here's where I think I got a little bit of anxiety when I saw this stuff show up to fabric. I to your point was very hesitant of I don't want to I don't want to do the synapse stuff. It's it's expensive. That's the that's the the baggage that I brought with me and I immediately went over to lakehouses. So everything again coming from the data science world I was like yes lakeouses spark that's notebooks this is where we should be playing this is the world we should be living in and so I immediately went over to build everything with lakehouses and more recently I've been discovering there is a couple of use

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1017s" target="_blank">16:57</a> Cases I feel like where the warehouse or SQL databases would make more sense than just having the lakehouse available to you. , and it it feels a lot more when I'm when I'm moving a bit way a bit bit more away from like large table writes or daily batch loading things and I'm doing more transactional type pieces. I'm interested in editing or adding individual rows very quickly into a database. That seems like a better situation for fitting with SQL and data warehousing. So maybe with there Brad

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1049s" target="_blank">17:29</a> I'm guessing you get a lot of questions around which one do I choose? How do we pick the lakehouse or the warehouse? You have some decision points. Are there some things that we should be thinking about mentally as which way would I want to push myself towards in a design or an architectural solution? How do I know which one I need to pick from?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1070s" target="_blank">17:50</a> And and as you answer that question, keep in mind that if you did a keyword search on our podcast, let's just say, put it nicely, warehouse has not got as much love as a lakehouse.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1081s" target="_blank">18:01</a> Yeah, we're going to say we we talk a lot about lakeouses. We don't talk a lot about data house data warehouse.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1085s" target="_blank">18:05</a> In mind, I get these questions.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1087s" target="_blank">18:07</a> Not yet. It could change. This might just this might be the question. This is the answer that will change the course of the podcast.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1093s" target="_blank">18:13</a> Well, so it's it's funny like I remember Oh, jeez. This this might have been about a year ago actually at this point. you guys did an did an episode here on the podcast where you were talking about the decision guides that we have.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1107s" target="_blank">18:27</a> We have. Oh, somebody listens. Yeah. Okay.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1110s" target="_blank">18:30</a> And so I was I was watching that one. and you guys started talking about like some of the scenarios and like all the things in the grid and everything and I was like like as you guys were were talking about it I was like man this would have been really because like I if you go back and listen to that podcast I was sitting there listening to it thinking unfortunately I helped create that thing that they're in the process of ripping apart right now but they're making some really good points about the things that we probably should have clarified or not put in there. So that was very helpful. So thank you guys for that by the way. , but no, you're

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1141s" target="_blank">19:01</a> Right. It the the decision point like the first place I always start because the the first most common question I got at FabCon in Vegas this past year

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1155s" target="_blank">19:15</a> Earlier this year was, "What's the difference between the lakehouse and the warehouse?"

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1160s" target="_blank">19:20</a> And then the next question was, "I already built a warehouse. I'm being told I need to add a lakehouse. Do I need to do it?"

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1167s" target="_blank">19:27</a> Oh, interesting. Wow.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1169s" target="_blank">19:29</a> Yeah. So I the the conversation about lick house warehouse like the very first question that I always ask people is what is your skill set because

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1182s" target="_blank">19:42</a> It's at its core and of course like we're not there completely at this point but at its core it we we would like it to be that you can be successful with either of these things depending on what your skill set is. And if you've got a team that's mixed skill sets, then you can you can all work out there and be successful together.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1202s" target="_blank">20:02</a> , and of course there's some rough edges on there that obviously we need to to work on and everything. , but that's always the place you start because like the last thing that I want to do is go talk to a customer and and they say, "Look, my entire team, they were full stack developers or they're bunch of people that know Pythons and PhD candidates like all that stuff. all they do is data science. Like, I'm not going to go in there and tell them, "All right, well, let's go talk about foreign keys and primary keys and TSQL and all this stuff."

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1233s" target="_blank">20:33</a> Like, it's just not the world they come from from

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1236s" target="_blank">20:36</a> From anymore than I would expect you to go into a customer that says, "Look, my entire team, we've been working with SQL Server since SQL Server 65 or whatever. , but we're now like the industry's moved to this lakehouse model. So, do I have to reskill my entire team?" Like, no. just the starting point is always use whichever one you have the skill set for. And then there's of course like there's nuance all over the place outside of that like which one's better to do different types of processing and that stuff. But that's a I think that's always a downstream decision at that point. It's always got to be skill

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1268s" target="_blank">21:08</a> Set first. That way you can be the you're you're going to set yourself up for the most success if you don't have to take on yet another project and learn yet another language at the same time. This is something that we've talked about a lot in the podcast recently in a couple conversations was some organizations prioritize hiring people with certain skill sets. I was working in an organization where one of the first things they had to do is one you had to come in with some level of SQL skills to begin with but also they would run everyone through dedicated SQL training and get a really everyone

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1299s" target="_blank">21:39</a> Really good on SQL. And so they were unwilling to give you access to the actual database. So therefore we had access databases like appearing all over the organization like there was there was like

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1311s" target="_blank">21:51</a> Was like actual access like Microsoft.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1314s" target="_blank">21:54</a> Yeah. Microsoft access. So so yeah everyone knew SQL but everyone was writing SQL in like these local pockets like on their machines with these little tiny databases pulling big data down from the warehouse sticking in these access databases and then landing it in Excel so they can do some analysis. So you you get what you pay for when you like centralize on a certain skill but don't give them the tools they want. And I really like the fact that you're giving like enterprise full IT level great stuff at the warehouse level. So if your team is comfortable in SQL, you don't have to stop doing what you're doing or

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1346s" target="_blank">22:26</a> What you're good at there. You can keep using that that space. So I'm going to pause right there. Tommy, did you have a comment before I next question?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1354s" target="_blank">22:34</a> Question? Very interesting points, Mike, that that you made, especially when we're talking about the language and where you come from, which has been a very contentious thing that Mike and I have talked about. To your point, I had an interview once when PowerBI first came out and they're like, ", do you you need two years of SSRS?" I'm like, "Am I doing SSRS?" Like, "Well, no, but we would like you to have it." It's like,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1374s" target="_blank">22:54</a> It's got to be in the job description, right?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1375s" target="_blank">22:55</a> Right? Yeah. It's got to be this has got to be in the job description. But Mike and I and it's not going to be a bone to pick with with what you said, but

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1382s" target="_blank">23:02</a> Mike and I have talked for a while now about not just the developer teams coming to fabric, but what we hear a lot is also the PowerBI teams coming to fabric. Mike,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1394s" target="_blank">23:14</a> I was gonna ask I was gonna ask this one. This is where I was gonna go.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1397s" target="_blank">23:17</a> And this is what I hear more often from clients and from other people I talk to. It's great that you already have the technology for those big developer teams that can transition over, but there's this weird area for the persona that I think there's we're still trying to figure out where Mike has convinced me. We like, "No, we're we're doing Lakeous's notebooks." I said, "Okay, but I I initially thought that that's not it would didn't make sense for a PowerBI developer, PowerBI focused person or

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1428s" target="_blank">23:48</a> Team to go to lakehouses, but I I I've converted. I I I've seen the light, so to speak. But now we're speaking about what language you are most familiar with. But now now we're bringing in a whole other mix here, right? And so I I want to ask when we're dealing with PowerBI ccentric teams because a big part of fabric is for the business user that everyone can use the data which means I probably don't have TSQL or don't know what MP is right and so for those users then where does how does

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1459s" target="_blank">24:19</a> That question or how does the answer change about which one to use? Well, I I think there there's a couple things here. Like we don't ever want things like MP and all this stuff like it scares business users. Like the the cool thing about what we've done with the warehouse actually compared to to Synapse is we've built it in such a way that a lot of those a lot of these rough edge things that you have to

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1490s" target="_blank">24:50</a> Figure out aren't aren't there anymore. like we'll actually we will actually run a single node SMP SQL plan if we think the query like we do calculations everything we think the query is small enough and it's going to run more efficiently on a single node so like that was a big problem in in the Synapse days even was you'd go from like DW500 to a thousand and somehow you double your size but the performance actually went down well it went down because now we got to move data between nodes and it takes time to do that and all that stuff

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1521s" target="_blank">25:21</a> Of stuff and so now we'll just be like okay doesn't matter if you're at F2 or F2048. We see you only need one node. We're only going to run it on one node. Like so we don't have to make these decisions and and things like that. But I I do think that the most common or one of the most common skill sets out there even for the the BI professionals is still SQL. Like you go look, I think Stack Overflow released their like language list that they do annually recently and I was actually surprised SQL was actually higher than Python on the list of of

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1553s" target="_blank">25:53</a> Search terms and things like that in there. but I think the other thing to to enabling all these these business users and everything like everything that you would do against a a warehouse or a lakehouse also works against a warehouse. all the stuff that they're used to doing like data flows for instance that'll still work against your warehouse. So if they want to use that stuff then then use it. there there's a I think there's a a bigger disagreement between the the big technology professionals like

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1586s" target="_blank">26:26</a> Everybody that we sit down and we actually do this on a daily basis and and go build these things like the end user doesn't care nor should they care about this decision like as we as architects make that decision what we think is best for the the organization and then PowerBI people should just be successful on it no matter what from that point is my my thought there. The good news with the lakehouse and the warehouse though is like if they do have SQL skills and you guys want to standardize on the lakehouse then we can go use SQL. It's not TSQL but it's you

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1617s" target="_blank">26:57</a> Know we can go use SQL in a notebook out there. So they can still use it's not like if you go I I say hey we should go to warehouse like you're you're stuck down that path and nobody else is going to be able to use it. , and we can certainly talk about like how we enable all these teams to work together here, , later as well. But, , I I don't think it's as as big of an issue for the PowerBI folks as as we think it is sometimes like most of the things just work between both of them. It's maybe a little nuance of how you do it though.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1649s" target="_blank">27:29</a> I feel like when I would interact with teams and this is maybe Tommy your impression as well. I'd be curious your thoughts on this one and how your experience here as well. Most of my business users are comfortable with Power Query like M, but usually there's this like little bit of a threshold between okay, I've got to get data out from something else. And usually in particularly in Power Query or an M, I'm usually connecting to like a database, some SQL server or SQL something. Doesn't have to be MySQL, it could be anything really at this point, right? They're connecting to something. So I feel like most users have a little bit of knowledge around I

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1682s" target="_blank">28:02</a> Know I need to go hit this view. I know I got to hit this table. And so there's that little bit of like select from where where where I can get that part done. And so if I'm thinking about like the Power Query M world of things, yes, a lot of users are just liking the clicking buttons and having the M just autogenerate. But there's a very low barrier I think between what you're doing in Power Query with M and then going into the SQL space. And now there's, , those those initial M users or Power Query users, there's there was this, oh, we should we should learn about folding

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1713s" target="_blank">28:33</a> Back. What does a what does a foldback query look like? How does that work? And oh, did we know? Oh, now it's just writing SQL. Oh, okay. I'm I'm connecting to a SQL server. It's going to fold these different operations back to make my Power Query more efficient. You got even the Power Query team was like l like giving us visible acknowledgement in the UI. These three steps or these four steps query fold back to the source. Oh, look, I can look at the SQL. So, like even our own tooling is starting to produce this general SQL. And Brad, you're going to be ashamed of me. My my way of learning

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1745s" target="_blank">29:05</a> SQL when I started was going to access database and like wiring things together and grabbing columns and making the table of stuff down below and then seeing what SQL produced behind the scenes. So that graphical to SQL like interpretation, I think it's an easy method for a lot of business users to start learning about this other query language. And I think I don't know if it was Tommy, it was you and I. I was maybe talking to a data scientist back in my old consulting days, a different company, and we were arguing about well, it's going to be what's the language of

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1777s" target="_blank">29:37</a> These different things. I'm like, dude, SQL runs the world. Like everything runs a SQL. It doesn't matter where you are. There's like some query language like SQL that's just everywhere. And so, back to your point here, Brad, I was able to find the Stack Overflow survey, most popular technologies here. I put it in the chat window. , number one is JavaScript, number two was HTML, and number three was SQL, followed by Python. They're almost neck andneck. Now, it would be interesting to see this trending over time if the

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1808s" target="_blank">30:08</a> Popularity of Python has increased closer to what SQL is doing with the advent of notebooks and things, but , sorry, I didn't know where I was going with that. That's this is totally a rabbit trail. I just really ran off the trail.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1820s" target="_blank">30:20</a> Trail. On that rabbit trail, it makes me sad that Java people have to go search for JavaScript so much. like right

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1826s" target="_blank">30:26</a> I don't I don't ever want to have to deal with JavaScript ever again.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1830s" target="_blank">30:30</a> Tell me about it. So

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1831s" target="_blank">30:31</a> And also HTML it's interesting

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1833s" target="_blank">30:33</a> Right? Yes. HTML runs the world but like who's really writing HTML anymore? Isn't it like React or like is there some other like TypeScript that you're like using on anyways it seems interesting to me as well.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1844s" target="_blank">30:44</a> I do think but Python I think for the last couple years has been the most popular programming language in the world for couple years running. So I was actually surprised actually to see move up on there a little bit. Yeah.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1858s" target="_blank">30:58</a> Well, speaking of AI, right, now that we're getting warehouses and anywhere that where basically SQL experiences live, we now get this great co-pilot experience. So, one of the things that I'm I'm leveraging here, and I'll argue this one, I think all day long, Tommy, you probably would as well. If I'm in a warehouse or an experience where I'm using SQL, Copilot has a ton of history to build like language experiences. Like you just tell Copilot what you want around SQL, it's dang good at like helping you write

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1890s" target="_blank">31:30</a> Out the code or the syntax. Hey, this line's not working or this SQL is not working. You can talk to C-pilot right in line with the data warehouse. Correct me if I'm wrong, Brad. That's part of the the ecosystem now.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1901s" target="_blank">31:41</a> Yeah. And before I comment on the copio thing, I'll one other thing that you mentioned there like the folks coming from M and Power Query and and all that that world

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1910s" target="_blank">31:50</a> Like and this is true of Lakehouse and the warehouse, but one thing that we've we've done in the UX is there's a graphical query builder that's inside of there there

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1919s" target="_blank">31:59</a> There and looks very similar to the the Power Query type experience to an extent. Yes. , I'm I will stop short of commenting on the quality of the sequel that it it maybe generates. I haven't I'll just say I haven't done enough research to form a a good opinion on that.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1938s" target="_blank">32:18</a> But like it's at least something to get people started. Like you said it's a good way to learn learn some of the syntax and that stuff like to to do it that way.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1947s" target="_blank">32:27</a> No the login.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1950s" target="_blank">32:30</a> I was say the co-pilot experience for for SQL is like it's very good. There's a a huge history. it was funny. when we we first were building the co-pilot for it, we did one of the bug bashes and it started like I asked it create a table and it actually gave me like a table with the data distribution on it and come to find out like some of the code that it had it looked at early on was like was Synapse code and so that had taken out of there. But it's interesting times but that has

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=1981s" target="_blank">33:01</a> Since been been fixed. But but no you're right you can go in there and you say hey write me a query that aggregates my t-shirt sales by by month and it's really good at writing any of that stuff. You can have it write insert statements for TSQL that we don't have compatibility for at this point in time. Like if you say hey I've got a merge statement here. Convert this convert this merge statement for me. then like it'll actually help you again with some of the rough edges that are in there because of TSQL compatibility like how do I generate an identity field while

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2012s" target="_blank">33:32</a> That's in the process of getting rolled out like it'll generate some code for you to to do that stuff and and then like you said for for folks that just want to either learn the SQL or or don't ne necessarily know exactly how to what's the right order to do my joins in or that stuff like it's it'll do all that and then fix your code for you out the other end if if you need to. So like honestly that's one way that I I've actually gone about learning Python a bit on the the lakehouse side is using copilot to say well how do I

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2045s" target="_blank">34:05</a> Clean up this like I know what I would do in TSQL but how do I go clean up this column and remove the null values or something out of my dataf frame and just have it generate. It's excellent learning path.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2058s" target="_blank">34:18</a> So I I'm going to Tom I know you have something to say here so I apologize. I'm going to jump in here on the co-pilot thing one more time because I am wearing the co-pilot shirt. I'm allowed to say

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2065s" target="_blank">34:25</a> I feel like yeah, you do have precedent here. So,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2068s" target="_blank">34:28</a> Here. So, all right. , so I really like how you're approaching this. So, this thought around co-pilot, and I really want to double down on this idea of like the co-pilot thing doesn't know your business logic. It doesn't understand how your business runs, but it's like this hyper knowledgeable like intern that knows everything about every language that I cannot I could read a million books and still not know as much as all the AIs know about all the different languages things. To your point, Brad, like I was trying to do something in Python and I didn't know

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2099s" target="_blank">34:59</a> What to do, but there's this feature called MEL. I didn't know it existed. I just asked I wanted to take this and this and describe the data and here's the data coming in and here's the data I want coming out and I just said oh yeah use this MEL thing and here's an example here's some dummy data like to your point like the co-pilot experiences are great at leveling up your knowledge cuz I love working with the tool typing it out myself learn like when I do that that's what really solidifies the learning for me so I feel like co-pilot while it may not understand what I want

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2131s" target="_blank">35:31</a> To do business-wise it's great at like educating me on these functions, how to run it, , things feel feel slow. Is there anything I can do to optimize this? There's like little nuggets here that it's extremely good on. And I'm going to also throw a note here. This may throw Tommy for a tizzy here. , we'll see what what Tommy says on this one. But Tommy tizzies, I guess that's maybe a new thing. Maybe it's a new segment of the show. I don't know. ,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2156s" target="_blank">35:56</a> We will names. Yeah,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2158s" target="_blank">35:58</a> Of the two experiences, co-pilot in notebooks versus co-pilot in warehouse, I prefer the co-pilot in warehouse. It feels like it's a bit better, more refined of an experience. Easier to like have it help me with things in line with what I'm writing inside TSQL or SQL in inside the the warehouse versus when I'm in notebooks. It just still feels a bit disjointed and it's on the right hand side. and it's not as in line as I would like. , again, from a code perspective, I'm trying to get

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2190s" target="_blank">36:30</a> It to feel like VS Code to some degree. I can ask it about a line. I can highlight some text and say, "Help me with this chunk of of of code that I'm trying to work on." And when it keeps flying out from the window, it doesn't quite feel as natural. I don't know, Tom. What do you think? Do you feel warehouses a bit more natural than notebooks at this point?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2209s" target="_blank">36:49</a> Warehouses and claw and notebooks. So,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2213s" target="_blank">36:53</a> And notebooks. I I I this AI conversation one me and Mike have had a talk offline like we're a PowerBI podcast. We're not an AI one because we both love the tooling and the language barrier is

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2226s" target="_blank">37:06</a> Barrier is just so much regardless of the tool. But I'm going to I'm going to put a wrench into this because honestly I'm having a hard time reconciling one of the initial things that you said as we continue this conversation that well you start with what you're comfortable with and again taking all the different teams together. It's not just about their skill set. It's very much about the data. And I'm also looking at the decision guide for the lakehouse and warehouse and it talks about whether or not what language . But the big thing especially where

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2257s" target="_blank">37:37</a> The lakehouse to us has at least where we put more of our investment in in terms of at least on the podcast is the data that you have. And a big part here is what again what we're seeing or at least what I'm seeing with organization is their data is not in SQL. their data is very unstructured and it's taking all these things that we try to do in Power Query and it took a very convoluted steps and 18 merges and yeah maybe you had a native query in the first five steps but what I'm trying to say here to boil this down is a big part

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2289s" target="_blank">38:09</a> Where we're seeing the selling point with fabric is around the unstructured data in storing that for the very first time in a Microsoft in the Microsoft fabric platform which was previously had to go through something convol oluted in synapse, but now we can easily get a JSON or a weird a API or even an Excel into a lakehouse which then becomes your your at least your SQL analytics endpoint. So as much as we're talking about the languages here and the

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2320s" target="_blank">38:40</a> Previous skill set of the user the data still to me trumps regardless of the skill set especially if we're saying well I can learn a lot with AI or AI can do a lot of this. So, if you can Brad, I would love to hear your opinion on how does the warehouse now in fabric, not the Synapse warehouse, but the warehouse in Fabric handle that in terms of that decision guide on where do I go?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2348s" target="_blank">39:08</a> Man, I got to get that decision guide taken down anytime I go talk about lake house warehouse because people are just going to bring up all the lakehouse points and make good points and then I have to defend it. And no, you're you're 100% right. it. So there's the the warehouse does not handle the unstructured data.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2367s" target="_blank">39:27</a> You got the CSV files and the JSON files and then if you want to go do all these AI or ML use cases, you might have photos and all that stuff that are out there. Like admittedly the the warehouse is not the place to put those things. I I talked to a ton of folks that just say look all of our data sitting in in SQL Server or Access or whatever it happens to be. It's all in a very structured format. And they're like, "So, I don't need the the lakehouse. I don't care about storing all this history, or if I do, I can put it into a table." Like, "For it, fine. Go put it all in in the warehouse.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2399s" target="_blank">39:59</a> Everything's great." But the reality behind the world is that all data is not pretty and formatted and structured. And I have no problem whatsoever with with customers sitting down saying, "All right, well, we got to store this stuff. We want to keep history." We did this 10 years ago when we were doing the modern data warehouse architecture in Azure. Like what did you do? You built a a SQL server for your your gold layer, your data warehouse, and then where'd you put all the data before that? All landed

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2430s" target="_blank">40:30</a> Into an ADLS Gen 2 account, and you you archived it it there. So, , if you're looking at you say, look, I'm a SQL shop, but I know I've got all these other things. I've got to be able to to handle this data. Put it into a lakehouse. Use lakeouses. maybe your bronze layer or even your silver layer to an extent and then if you your skill sets in in SQL build your warehouse out of the out of the gold layer and do your analytics off of there. I think this conversation actually is is getting a lot easier too here really within the last 10 days

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2462s" target="_blank">41:02</a> Because what we used to do like when we first launched fabric we said all right well make your lakehouse can be your your bronze make that your storage location but then how do I get the data into my warehouse all I can do is run a TSQL query against the SQL endpoint on the lakehouse I can't run like copy into or anything like that because it won't won't read from one Well, like 10 days ago or so, we released the ability to do copy into from a one lake location. So now you can

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2493s" target="_blank">41:33</a> Make put all your CSV files into your lakehouse and then copy into the warehouse and use it downstream. Now I'm not going to sit here and pretend that SQL is going to be the best processing engine for all of this stuff. , and that's certainly where the lakehouse I think in these architectures still comes into play. But like for instance geospatial data like are you going to use TSQL to do geospatial analysis and like figure out distance between two like no you're not going to do you can

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2524s" target="_blank">42:04</a> Do some of that stuff in like SQL server but we don't even have the geospatial functions inside of the the fabric warehouse but you can do it in Python and Python's really really good at that. Same thing with like shredding JSON apart. But like if you go back and look at some of the stuff we announced at at Fabcon in in April of this year, like imagine the power of these the fabric functions like being able to call a fabric function from TSQL and say, "All right, well I I may not have as a TSQL

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2557s" target="_blank">42:37</a> Person, I may not have the skill sets to do all this geospatial stuff, but you guys might have the ability to do that. you can write me a little Python script and I can just call that Python code from a fabric function. Now all of a sudden we're both using our skill sets. We're putting the data exactly where it best fits whether it's lakehouse or warehouse and I can leverage the work that you guys are doing, push some of the stuff out to the Python engine and do it that way. And so I think we're at a an interesting inflection point with fabric where like we're really starting to be able to

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2589s" target="_blank">43:09</a> Bring some of these these different features and functionality together so that we don't have to just say all right what's my skill set and then just make that my default decision from that point on. on.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2600s" target="_blank">43:20</a> On. This is probably the wrong word. I don't even know if this is the right how to say the word but the interoper interoperability of of

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2607s" target="_blank">43:27</a> Of right is that so going between things I think has been brilliant like this is this is this is the point here I think and again I'm not sure if this is exactly the right way of saying this the one of the reasons why I went again I'm going way back to synapse one of the reasons why I love synapse so much was it would read my lakehouse tables that I was able to produce with a notebook so I can make a delta table drop it down to the lakehouse and to your point. I might have some bronze silver stuff that is somewhat unstructured, but at the end of the day, everything needs to be

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2638s" target="_blank">43:58</a> Structured. Like I'm not I'm never going to a place where like what I'm ready to report on some this I'm not going to build a report on top of the unstructured data. That just doesn't happen, right? So at the end of the day, at the the the latter part of my pipeline, the the serving layer, whether I'm serving it to users using direct SQL statements, letting them build their own things, using their own SQL experiences, or I'm going right to a semantic model, defining relationships between things, and then building that metadata in for reports and now pageionate reports, it's always going to be tables. Like I'm at the end, I'm

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2670s" target="_blank">44:30</a> Going to be there at the table pieces. And so I really like your transition comments here around you might not land your first JSON files inside the lakehouse or the sorry inside the warehouse. You might do a little bit of shaping of things earlier. And to your point the user data functions I think that's what they're called. There's userdefined functions user data functions. I think it's a user data function fabric right now. The UDFs there this makes a ton of sense to me right? it makes 100% sense to be inside that SQL server and fire off these

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2701s" target="_blank">45:01</a> Specific function queries to be very lightweight, super efficient and do these other additional calculations on top of my table like data. This this is where I get really excited and now I can start looking at this and saying okay the architecture for me shifted when we had Synapse I was shifting everything towards Delta and lakehouses and now that we've moved back to fabric I'm now having a bit more of the aha moments of like the the experiences around SQL and warehousing has changed for me and I'm getting more comfortable saying okay

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2733s" target="_blank">45:33</a> Maybe not everything needs to land back into the lakehouse I'm doing a lot more table building and I really love the experience of going from lakehouse to now again this is another maybe a technical question here that Brad maybe you can help me answer if I'm building the lakehouse on top of that I get the SQL analytics endpoint

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2754s" target="_blank">45:54</a> Is that is the data warehouse it might be simplified slightly I have all the bells and whistles but is that the same thing as building the warehouse

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2763s" target="_blank">46:03</a> Yeah so essentially the the SQL analytics endpoint is the same engine that we use for the warehouse.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2770s" target="_blank">46:10</a> We essentially take your Yeah, that's that the whole metadata sync process that is a very hot topic on Reddit from time to time.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2779s" target="_blank">46:19</a> Don't worry, it's getting faster. We're going to quick That's true. That's true. , but yes, so we essentially take the the Delta files and and say, "Hey, we're going to make a a data warehouse out of it." and originally the name actually was like lake warehouse or something like that. It was a little bit too confusing for for folks because then it was am I using the lake warehouse or the warehouse warehouse and

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2805s" target="_blank">46:45</a> So then we went to SQL analytics endpoint. , but yes, that's essentially the same thing. And

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2812s" target="_blank">46:52</a> But there's there's a couple of interesting differences there, though. Like Like

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2817s" target="_blank">46:57</a> Like because the not to get sidetracked on a technical rant here, but

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2822s" target="_blank">47:02</a> Please do this is what this is for.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2823s" target="_blank">47:03</a> , yeah, you're at the right you're in the right place.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2826s" target="_blank">47:06</a> I think the the interesting thing about this from a like where's your deep technical skill set lie? Is it Spark or SQL? This is another one of those like the reason why I always start with that is because the SQL analytics endpoint is the warehouse engine. The warehouse engine is built and optimized for certain things like it wants files that are of a certain size and a certain row count and it tends to favor like if you go look at the files in one lake behind the warehouse they tend to be larger. They're like two

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2857s" target="_blank">47:37</a> Gigs or so in size and a couple million records that that size. Whereas if you go to the lakehouse and you just use like the Spark defaults, Spark tends to favor some larger number of smaller files at least comparatively. It's not like doing kilobyte size, , it's like that. But

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2875s" target="_blank">47:55</a> And so as a result of that,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2878s" target="_blank">47:58</a> We when we write the data with the SQL engine through the warehouse, we optimize the file size appropriately. And if you're doing like trickle inserts throughout the, , throughout the day, we've got a a thing that runs in the background called automatic data compaction. And what it'll do is it'll say, "Hey, you've got all these really small files." So, we're essentially going to go do a vacuum and optimize on a table and say get rid of the old stuff and optimize the current stuff. So, like we would we're able to take care of all that stuff and

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2909s" target="_blank">48:29</a> Abstract that from the users and they don't ever have to worry about that stuff. So again, they're the SQL person. They don't know about Delta and how it works and all the intricacies. But on the lakehouse side, , you're going to do whatever you need to to optimize for the Spark experience there. But if you're also then going to use the SQL Analytics endpoint to do your downstream reporting because that's where the final tabular data is,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2935s" target="_blank">48:55</a> You now as a Spark expert also do need to have a little bit of knowledge about the way the SQL engine works. So that you don't go out there and you just write things to optimize for Spark, but you ignore the downstream enduser experience that's going to come off of that. because like we won't go into the spark engine and optimize like do optimize on it and make them the right size for the warehouse engine for instance. So

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2958s" target="_blank">49:18</a> Sure

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2959s" target="_blank">49:19</a> Sure just something to to consider. Yes, the warehouse the the SQL endpoint is the warehouse engine, but there's some interesting nuances in there that maybe make the warehouse automatically optimized a little bit better for those downstream consumptions where if you're the Spark person and you're going to use the the SQL endpoint as your gold layer or your warehouse, which a lot of people do, do,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=2982s" target="_blank">49:42</a> Do, you do want to know that stuff and take that into account. Mike, I'm hearing almost a maturity curve here when we're talking about the lakehouse and warehouse where I think the whole conversation's always been, at least for us, is which one do you choose? Like it's like your Bama or Auburn, are are you roll tide or or war eagle thing for those college football fans out there? where you only had to choose one, so to speak. But there is it sounds a little different to me here as we have this conversation where it's almost yeah we probably going to start

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3014s" target="_blank">50:14</a> With the lakehouse especially with your own structured data but that doesn't mean that there's no room for the warehouse and I think that's always been where at least I've stood is if you're going to choose the lakehouse then you don't need a warehouse but it almost sounds to me now it's like well you may have to start with the lakehouse you may have to start with that unstructured data but the benefits of the warehouse especially and I think the big part that you said I real key word here the operative word the end users and this whole conversation or at least the

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3047s" target="_blank">50:47</a> Conversation we've had about the lakehouse has been about the developer the architect building everything out but obviously this whole goal of all of this is who's going to be consuming this whether it's going to be the consu consumption in a powerbi report as building it or utilizing that in another application and that's where I'm seeing now. Okay, this is where the warehouse really stands out. Is is that a fair statement?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3076s" target="_blank">51:16</a> Statement? Yeah, I I think so. , you're right. , as technologists who just like building like we like writing code and doing all this stuff like

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3083s" target="_blank">51:23</a> You we focus a lot on all right, well, how do I get the data into bronze and move it to silver and move it to gold? But the reality, like you said, is that that gold layer does need to be optimized for the end user. And I I talked to a lot of organizations where they say, "Look, we've got a there's like a a central repository or a central data lakeink that we're going to put all this stuff into. Maybe it's multiple lakeouses or whatever, but , they're going to have a central thing that we manage. And then

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3111s" target="_blank">51:51</a> The the reporting piece is actually built by these business units." and like they've got some technical people, but they may not be nearly as technical as the folks that are like the enterprise architects and and that stuff. And so, , in those scenarios, yeah, I think it makes there's a lot of room for those folks to say, we're going to build our enterprise data lake in Lakehouse and we're going to build a bunch of corporate reporting maybe even in the lakehouse because we know how to optimize and all this. But those those folks that are going to do their departmental BI solutions or the self-s served BI solutions, let them build

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3143s" target="_blank">52:23</a> Their warehouse and just pull the data in in that way and do it in the warehouse where we'll take care of the file sizes and the the data compaction and fixing delta to make sure it's optimized for direct lake and all that stuff and then they don't have to worry about all that.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3162s" target="_blank">52:42</a> Right.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3162s" target="_blank">52:42</a> Right. This is the point though. So there's this is I really so the massive parallel processing the MPP side of things and the idea that you're now using the same format that I would be using in notebooks to me this is the unlock moment for me like this is where I'm like wow this is now a gamechanging moment for me that way all the different tools can now talk and read the same stuff back and forth to your point there's there's the ability to go way technical on this one so I really liked your point around and I'm I'm going to I'm going to pressure on this one Brad a bit do you have an article around this the SQL optimization of the lakehouse

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3195s" target="_blank">53:15</a> Delta tables versus the SQL analytics endpoint or the warehouse compaction of tables. Is that something that exists today? Cuz you're explaining something that I think is so important for users to understand. Right. So in your in your early stages with playing with the stuff, everything just works together. You're happy. Great. We just move on. No big deal. Right. But later on when we start looking at okay, the solution works, we're looking at optimizing. And what I'm learning now with Santosh from the Spark team a little bit as well is hey you can actually build re read favored

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3227s" target="_blank">53:47</a> Tables and write favored tables inside the lakehouse right what tables do you need to build do you need to build it with vorder packing on it or not like your bronze and silver probably don't need vorder sorting on top of the tables if you're going to use a lakehouse you want to do that later on and I would assume as well there's probably like knobs hubs we can turn here in the warehouse, it's doing very similar things, right? If I'm coming from the lakehouse and I want to go get it into semantic models, it would make sense if there's some vordering on stuff

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3259s" target="_blank">54:19</a> At those ladder layers inside the gold and beyond whatever tool you're using. So, I really like that all this is becoming an unlock for me now that everything can read and write in the same format. And the moment I saw SQL being able to read and write delta formats, that that was to me was like, again, this was back in the Synapse days. I was like, this is the unlock moment. Like, I want this feature everywhere. And now that you've brought this all again, reimagine this experience with warehouses, it's now here. It's in fabric. Fabric does this

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3292s" target="_blank">54:52</a> Stuff. So, I'm just going to pause right there. , any any reaction thoughts, Brad, around like that? Yeah.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3298s" target="_blank">54:58</a> And that's been intentional. That that's been an intentional move to pull you that direction. Yeah. So, I think like it's a it's a good point around the the fact that we need to have some guidance for people to be able to optimize this. I actually was talking with a co-orker of mine who's a peer on the Spark side. , he was doing some benchmark stuff recently and he was like, "Well, my performance on the the SQL Analytics endpoint isn't performing as fast as what you're getting on the warehouse." There was like one query in there that actually just wouldn't even run for him. And so, we did some investigating. We,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3330s" target="_blank">55:30</a> , we tweaked a couple things and it started to run fine and everything fell in line. And so we actually started talking about that like, okay, well, this is clearly a thing that people run into. Clearly somebody sitting in Spark World over here or that's his focus. He didn't know about these things. So we actually started talking about like how do we how do we get some of this information out there and talk to folks about how do we optimize Spark for the SQL analytics endpoint. So,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3355s" target="_blank">55:55</a> Yes,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3355s" target="_blank">55:55</a> Yes, nothing out there right now,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3357s" target="_blank">55:57</a> But absolutely needed and something that's likely going to be forthcoming. , and you make some there's some interesting points in there, too, like there are some some of those same things that you need to do or not need to do, but you can take into consideration for the warehouse side as well, like vauorder, for instance, but our granularity for vauorder is a our guidance there is a little bit different because granularity for vauorder on the warehouse side is actually at the warehouse level. So, it's not like you can turn off the order for staging tables and then turn it on for the rest of them. Like, you can, but then you've

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3389s" target="_blank">56:29</a> Got to split them up into two different warehouses into cross warehouse joints, which is fine,

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3394s" target="_blank">56:34</a> But , it's just another consideration. So, we do have a best practices page out there with some of that stuff on it. But, , to your point, and to be to be fair, we we do have some work that we need to do on that front to be able to say, "Hey, look, these are really the the ways that we can we can probably use this a little bit more effectively."

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3413s" target="_blank">56:53</a> Love it.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3414s" target="_blank">56:54</a> Hey, not to use a few puns here, but the last five minutes, my synapses are sparking from what we're talking about here because I'm hearing for the first time. Yeah, you like that one. I know my

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3424s" target="_blank">57:04</a> Tommy. Use all the buzzwords at once. Please use all the buzzwords

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3428s" target="_blank">57:08</a> For the algorithm, right?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3429s" target="_blank">57:09</a> My TSQL sparking synapses are warehousing.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3433s" target="_blank">57:13</a> My synapses are sparking as I have I'm vindexing all this in my mind thing. But no, but I think there's a big thing here we're talking about that a big part for me as I've looked at all the products in fabric is how does this all work in an organization when you have especially of the hub and spoke approach. You may have that central BI team. You may have the business users going in. you're going to have this whole set of skills coming from different areas and especially with that we talked about that announcement 10

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3465s" target="_blank">57:45</a> Days ago but to be honest I don't think we understood the impact that you're saying here about the copy into and I'm hearing now that is actually really exciting is an approach an organization could take is yeah a centralized team may start with lakeouses because most things are unstructured but what they give to the business team is that cleaned area. I think we've always talked lake house to another lakehouse, lake house to another lakehouse, but

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3493s" target="_blank">58:13</a> Hey man, like we're talking now where I can give the marketing team this nice clean warehouse. Everything may be coming from the lakehouse and we've had to do all the synapse and every or or the spark and notebooks, but the cleaned version that we give people is this warehouse where and again the beauty of this, the thing I love the most, it's not just for a PowerBI report. My favorite part of fabric is honestly that we've almost devalued the PowerBI report and we've just elevated everything else where the end of the

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3525s" target="_blank">58:45</a> Road is not PowerBI and what I can do with the semantic model this tabular data and I can do this all in the fabric platform. So, one thing and I know we're getting close on time already, but I guess one of the things I'm hearing from this and honestly has really changed my mind and I need to I'm going to dive into more is this idea of hey, we can do the notebook still, but the warehouse has this great capability, this great feature set for teams who again, they

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3557s" target="_blank">59:17</a> Don't need to know Spark, they may be coming from SQL, they may be coming from PowerBI, but we can give them a familiar their experience for their consumption. And I think to me that is a huge difference than the conversations you and Mike and have had.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3574s" target="_blank">59:34</a> So I'm going to wrap here with some final thoughts and Brad I'll kick it over to you for some final thoughts as we wrap this topic lakehouse or warehouse. I think Brad this conversation has blurred much has been blurring the line much more between which one should I choose and where. I really liked your points around where are you comfortable? Let's talk about that. I definitely resonate very much with the what data you're bringing in. and I think actually lattered towards the end of the consumption mechanism Tommy to your point here just the end. It's not just let's make a report and be done with it. It's now let's make a report. there

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3607s" target="_blank">60:07</a> May be some users in certain departments. We can't assume every department or every user in a department is always just going to need the report. There's more experiences at our disposal here. And we can secure all this stuff. We can secure tables. We can secure shortcuts. We can do all these really interesting things that say, "Okay, if we need the warehouse to exist for a team, we can land that in a workspace that's dedicated for you and give you only the tables you want, have at it. It's it's it's at your disposal." And so, I really like this Lego brick. I love Lego. So, I'm just going to go down

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3639s" target="_blank">60:39</a> The Lego analogy. I love this Lego brick approach here of being able to swap out what we need based on the best use case for the user. So, very happy to hear that. love this is going to this is going to actually push me a lot more to deeper dive my knowledge into the warehouse. Brad, any final thoughts you want to wrap here before we call it a day today?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3658s" target="_blank">60:58</a> Day today? Yeah, no, I I agree. , I think the exciting thing the exciting thing for for me in all this really is like you said the blurring of the lines. It's the fact that I can read the the warehouse with Spark. We got the Synapse connector in in the Spark engine where I can write the data back into the warehouse even like we're talking about with the user functions being able to pull those out. Like I think something else that's going to come in a bit that's going to help this even more is like when I do want to do that hub and spoke I still got to have this weird lakehouse

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3690s" target="_blank">61:30</a> Thing in the middle because that's where all the shortcuts feed through. Well, we're going to hopefully knock that barrier down. So let's just be able to do the shortcut directly inside the warehouse. Like so we want to there's all kinds of things that we'd love to do to make this experience a bit more seamless and just a bit more integrated so that

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3706s" target="_blank">61:46</a> So that it really can be I don't care what step of the process I'm at. If you're a SQL person go to the warehouse. If not go to the lakehouse use the right thing. We'll make it as easy as possible and next time we can just complicate this entire conversation and we'll start talking about the the SQL database in here too because that hasn't now we're going to introduce that into it. So that's a conversation for a future day but I love it. Awesome. Well, I want to say thank you everyone for for hanging with us. Brad, thank you so much for your time today. We really do appreciate you showing up and talking to us more about things Tommy and I have some knowledge

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3738s" target="_blank">62:18</a> Around but not expert knowledge on. So, this is great. It's going to push us audience. We really appreciate you your comments, your your notes here in the chat. We really thank you as well. If you like this conversation, if you learn something more about data warehousing here, please share this with somebody else. other people need to hear this information and unpack these thoughts around. We're now blurring the lines a bit more. With that being said, Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3763s" target="_blank">62:43</a> Podcast? Hey, you can find us on Apple, Spotify, or wherever you get your podcast. And make sure to subscribe, leave leave a rating, whether it's on YouTube or your favorite podcast platform because it really helps us out a ton. And share with a friend since we do this for free. do you have a question, idea, or topic that you want us to talk about on a future episode? Well, head over to powerbi.tipsodcast. Leave your name and a great question. And finally, you can join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all of

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3794s" target="_blank">63:14</a> PowerB. Tips social media channels. Thank you all so much, and we'll see you next time. Let's [Music] [Music] go down.

<a href="https://www.youtube.com/watch?v=gHllYC3Fcn0&t=3825s" target="_blank">63:45</a> [Music]
