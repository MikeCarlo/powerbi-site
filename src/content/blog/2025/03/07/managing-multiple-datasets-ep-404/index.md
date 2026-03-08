---
title: "Managing Multiple Datasets – Ep. 404"
date: "2025-03-07"
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
  - "Composite Models"
  - "Data Modeling"
  - "Best Practices"
excerpt: "Mike and Tommy tackle a mailbag question from Mehmet about best practices for managing multiple datasets in Power BI. They dive into whether composite models are the right approach for joining data across models."
featuredImage: "./assets/featured.png"
---

Mike and Tommy tackle a mailbag question from Mehmet about best practices for managing multiple datasets in Power BI. They dive into whether composite models are the right approach for joining data across models.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/IGRfC4Ar-yA" 
  title="Managing Multiple Datasets - Ep. 404"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Mailbag Question

This episode centers on a great mailbag question from listener Mehmet, who asks: what's the best practice when working with multiple semantic models in Power BI? Specifically, should you use composite models to join data across different models?

## Main Discussion

### When to Use Multiple Models

Mike and Tommy discuss the scenarios where organizations end up with multiple datasets — whether it's different departments owning their own models, separate subject areas like finance vs. sales, or simply organic growth over time. The key question is how to bring these together without creating a maintenance nightmare.

### Composite Models: The Right Tool?

The guys break down composite models and when they make sense. Composite models allow you to connect to an existing published semantic model and extend it with additional data — but that doesn't mean you should use them to stitch together every dataset in your organization. There's an important distinction between extending a model with supplementary data and trying to use composite models as a data integration layer.

### Best Practices for Multi-Model Architecture

Mike and Tommy share their recommendations for structuring your Power BI environment when you have multiple datasets. They talk about the importance of shared dimensions, having a clear strategy for what belongs in which model, and when it makes more sense to consolidate into a single model versus keeping things separate. The conversation touches on performance considerations, governance, and the practical realities of managing models at scale.

### When to Consolidate vs. Keep Separate

The discussion covers the trade-offs between having one large model versus multiple focused models. Factors like refresh schedules, data ownership, row-level security requirements, and model size all play into this decision. Mike and Tommy offer practical guidance for making this architectural choice.

## Looking Forward

If you have your own questions about data modeling, semantic models, or anything Power BI — send them in! The mailbag episodes are driven by listener questions, and Mike and Tommy love tackling real-world scenarios.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=36s" target="_blank">0:36</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and cold-filled Mike. I still have a cold, my nose is still congested. I'm sorry it's going to sound a bit funny the podcast, the best I can.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=48s" target="_blank">0:48</a> Well it's good to see your face. I'm here, I made it, just gonna sound funny. Jumping in today for our topic, we have a mailbag. This is a recorded episode, for those of you who are listening online, sorry this is not a live episode.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=63s" target="_blank">1:03</a> We're going through managing multiple data sets in Power BI. This is a mailbag topic that came in. We'll unpack this concept, they've got some really very well written questions. So thank you question writer, I don't know if I have a name on this one but very well written, really like this one.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=82s" target="_blank">1:22</a> This will be good to unpack what's going on here and thinking through the different aspects of how do you manage multiple data sets and potentially even multiple data sources for those data sets all in one environment.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=94s" target="_blank">1:34</a> All right Tommy, want to read us the question and we'll go from there? Yeah I am excited for this. And Mike we made it overseas, that's also super exciting and it's not just Lake Michigan.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=106s" target="_blank">1:46</a> Hello guys, first of all good job on the podcast, keep it up. This is Mehmet from Turkey. So shout out to Turkey here, my gosh that's amazing!

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=117s" target="_blank">1:57</a> I'm not sure which category this fits in so I'll just go ahead and shoot it. In our organization we have many reports in Power BI, one for product, one for sales and opportunity, one for price data, collected stock levels, discounts, etc.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=133s" target="_blank">2:13</a> I guess it's like this in pretty much all organizations. First question: all of these reports have their own data sets. Date, product, consumer are all common fields in all of them. Of course discount reports have some different measures and stock level reports have its own and so on.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=154s" target="_blank">2:34</a> Is it the best practice to have all these reports have their own data sets? If not, what is? By the way, data sources for all these reports are different. Some are Excel files, some are SAP, some are survey, etc.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=170s" target="_blank">2:50</a> Second question: I need a report with certain items, surveys and sales info. Currently I connect to each data set with direct query and use the measures, or I need to create new ones if I need them. Thank you for your time.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=185s" target="_blank">3:05</a> Awesome, two great questions. And I think this is actually very common. As organizations grow in size this typically becomes a talking point, figure out how this works inside your organization.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=196s" target="_blank">3:16</a> What's your initial reaction Tommy? You think there's a one size fits all here but there's a lot of variables at play. Obviously you go right off the bat, ideally we have one data set, multiple reports. But you're dealing with a few barriers for that to be easy to do.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=214s" target="_blank">3:34</a> One of them being it's multiple sources here. So this is one that you really do have to unpack and honestly see what the best solution is here.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=223s" target="_blank">3:43</a> Yeah I think I found there comes a point when a model gets too large. So I think there's a balancing act here a little bit between is the model large enough but is the model too large. You're trying to play a happy medium between these two.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=236s" target="_blank">3:56</a> Because I've also seen organizations have made this monolithic model where every single page of the report comes from one big semantic model. And while that makes sense in some cases, it gets very difficult to manage that model unless you're very organized with what is in the model, how you make it, what are all the different dimensions.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=257s" target="_blank">4:17</a> And are there factual tables that do well inside that model? I think less about the size of the model, I would even more pick on what is the structure of your model. Is there a lot of opportunity in the model for snowflaking? Do you have lots of tables referring to tables in a sequence?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=275s" target="_blank">4:35</a> Like dim user hangs on dim region which hangs on the fact table. If there's a lot of snowflaking or chains of tables, I'm a little less inclined to say it's easy to use that model.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=286s" target="_blank">4:46</a> There's another problem where you have the detail and the invoice header and the invoice details. There's invoice header that has all the summarized information of the invoice and then you have all the detail like the line items of the invoice. But those two typically are not in the same table, sometimes they're stored separately just because of the way the data is stored.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=306s" target="_blank">5:06</a> So there's a lot of what I would say after doing this for so long, I feel there's a lot of common patterns I've observed and see over and over again. And I guess my rule of thumb is I'd like to have one or two, maybe three or four reports hanging off of the same data set.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=322s" target="_blank">5:22</a> If you can think about combining them that large. But if you get like 50 reports hanging off a data set, that means the data set is doing a lot of different things and that might be too unwieldy to manage.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=334s" target="_blank">5:34</a> Especially when you have people building and developing them, you want to think about the developer pattern. If you have six developers and you have one model, how do you merge all your changes together? How can anyone do changes on the same model? It also makes it a bit challenging.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=354s" target="_blank">5:54</a> And I'm gonna, let's have fun. A little exercise here because obviously there's the technical best practices, but what I would like to do Mike is how do you attack these situations? Especially when there's a lot of unknowns, you may not know how many reports are hanging on.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=374s" target="_blank">6:14</a> You may not know how the report may be, you may be building this for the first time. So when you have a lot of unknowns, I would love to know your methodology on attacking this type of situation.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=385s" target="_blank">6:25</a> So I'll jump in right away. Just honestly when I, if I were to deal with this situation when I don't have all of the factors at play, I don't have all the answers on the cheat sheet. Sure, there's really two ways that I start and it's really downstream, upstream. I will write it out and I am considering a few major items before I start even building.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=405s" target="_blank">6:45</a> To your point, everything you just said about how many sources are we dealing with and what is the complexity to get the model in the shape we need it. How many steps does that take? Can I do that all in the semantic model? Is it coming from multiple data flows to get there?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=425s" target="_blank">7:05</a> But I'm also dealing with the downstream. And it's not just the number of reports, but odds are when you're in this complex of an organization, you probably have to manage self-service. So that's another critical factor for me, are how many other people are touching that.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=447s" target="_blank">7:27</a> So yeah, before I have all my answers, those are my two main priorities: the complexity to get to the right shape, and what are we going to be doing with this afterwards.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=457s" target="_blank">7:37</a> Oh I think those are really good talking points. So the complexity I think is one. You asked what are some things that I do when I walk into this situation. A lot of times I like to sit back and say what does your business do, and take a really high level picture.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=475s" target="_blank">7:55</a> Mapping out all the visual things that you do in your company. For example, I'm looking at a list of reports here. We have one for product age, we have one for sales, one for opportunities.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=490s" target="_blank">8:10</a> Here he's also talking about some come from Excel, some come from SAP. So I'm looking at this and going, in my experience when you build a fact table inside a semantic model, typically that fact table and its associated dimensions are used on a single page.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=508s" target="_blank">8:28</a> There's occasions where you want to have two fact tables reporting a single page of reporting. But I don't really find that there's like 10 fact tables reporting a single page in a report. So let's take, I think about breaking down the reports into pages almost.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=527s" target="_blank">8:47</a> And start saying okay, well let me step back again, I'm going down to the weeds too quick. I'm looking at my organization, I'm thinking about the high level items. We have sales team, we have opportunities, what do we sell, making the big diagram.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=538s" target="_blank">8:58</a> And just making some general associations like the sales team sells these products, the manufacturing team makes these products, what kind of products do we sell, who's the customer, just mapping out the very big blocks of things that are important to us.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=553s" target="_blank">9:13</a> Bill of materials, vendors, suppliers. Are we reporting on all those things or are we reporting on a subset of that? So having just a general organization diagram.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=567s" target="_blank">9:27</a> We sell to government, we sell to businesses, we sell direct to consumer. Some of those things change how the data comes into your system. Is that a different arm? Is the data coming in differently because it's from a different area of the business? You're selling to a different customer.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=585s" target="_blank">9:45</a> That helps me understand where the things should be related because odds are your manufacturing data is sitting in SAP, some of your customer data is sitting in some other system, a customer relationship program. And then the budgeting and the sales stuff typically sits in Excel.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=601s" target="_blank">10:01</a> It seems like for me those are things that are sitting somewhere else. So if you look at the different pieces of who's using what data you can map out a rough data map of where the organization has information.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=612s" target="_blank">10:12</a> Where the organization has information and what is useful to you in reporting. From that we can then talk about what I was alluding to earlier, which is look at the pages, figure out what fact tables are used to support those pages.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=626s" target="_blank">10:26</a> Are you doing summary pages, right? Is it a summary of all things around sales and opportunities? Because that's focusing on that topic. When you start spanning these two different topics, the reason you have multiple models built out is because people are asking questions around that particular thing.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=646s" target="_blank">10:46</a> Where things get impactful in reporting is when you say oh I could go to this sales opportunity and I can correlate some of that data to a different semantic model and a different area of our business. This sale turned into these products which turned into those whatever other data points you have around that customer.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=664s" target="_blank">11:04</a> Now you're having to bring other data sets together to build something new that you didn't necessarily have before. And that's really hard because you have to have those identifiers of the product in multiple systems and how are you managing that.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=679s" target="_blank">11:19</a> I want to hyperfocus on how you started your conversation here and I think this cannot be left unsaid. Honestly I think what people struggle the most with — you started that whole workflow with a fundamental thing that was a question or multiple questions.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=698s" target="_blank">11:38</a> I think a lot of people in our space struggle with not the build and technical side but they struggle with asking the right questions right off the bat. Yes, and for anyone listening to me, this is why I love what we do. Because all the tech in the world, you work with Microsoft, is great, but if you cannot ask the right question.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=722s" target="_blank">12:02</a> Yes, and understand the situation before you need to get the right answers. So you got to ask the right questions. To your point, that's going to dictate the work tree and the decision tree from here. Just the fundamentals — how large are we building, who is this for, how far downstream is this going to go.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=742s" target="_blank">12:22</a> Even before you get to the data sources my friend. This is such a fundamental skill that I think a lot of us need to work on and attune and always build on. It changes with every project.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=754s" target="_blank">12:34</a> Yeah and I agree, you're always getting better at this, asking the right questions. But I think taking sometimes this high level picture, because sometimes people get so focused on I need this table, I need this visual this way, I need these data sources brought together, that you lose the bigger picture of what's really actionable, what's really important to the business longer term.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=776s" target="_blank">12:56</a> I also liked your question Tommy. We're talking about reports that are being served to the organization. In this question, especially question part one, which is do we have multiple data sets or not. There's two things that stick out in my mind — how big are these individual data sets, right?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=793s" target="_blank">13:13</a> Are they all within one gig of size, smaller than one gig? Because then you can set everyone at a pro level and you save money. But as soon as you start making these larger semantic models, yes they're great, but do you add extra compute because the model is now larger, meaning the model is now 3 gigs in size.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=814s" target="_blank">13:34</a> Well if the model's 3 gig in size, now we have a different problem. A 3 gig size model now means we can't put it in a pro user anymore. We have to go to something else — premium per user is usually the next option, or we start going up to a premium P skew.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=830s" target="_blank">13:50</a> Great, gives us more opportunity, but now we're spending substantially more money than what we were before, potentially at a pro user level. So if you're a big organization, likely you have F skews already. If you're in a smaller organization and you're growing, you probably don't have the budget to go out and spend five grand a month, that's 60 grand a year just on reporting.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=856s" target="_blank">14:16</a> So most smaller organizations don't have the stomach to really — they don't have that many people needing data. Yeah, and I guess maybe my really weird opinion on this is I think about what's the price per user, right? If you have a 10,000 user organization and you're turning on a P1, every month that's like 50 cents per user to use the P1 to do things.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=878s" target="_blank">14:38</a> That's aside from the cost per month for the creators of content. But consumers of content, right? That makes a lot more sense when you have that scale, versus when you have a 10 or 100 user organization. $5,000 to do reporting for that organization now becomes much more prohibitive.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=898s" target="_blank">14:58</a> Because well now you're at $50 per user, well then that doesn't make sense. So it really depends on the scale of your business, and those larger businesses are able to swallow those costs more because you're actually bringing the price per user way down at that higher level.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=914s" target="_blank">15:14</a> Yeah, and I think that's a good point because a lot of those are going to be questions that those answers answer a lot of additional questions later down the road. Because obviously you need to know your constraints. Yes, agree.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=930s" target="_blank">15:30</a> So I think that's really important there, just how you distribute the reports, where they're coming from. I really don't love — every time someone says oh one of my tables is sourced from Excel, I just can't stand that. It's so prone to error.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=944s" target="_blank">15:44</a> It's going to happen, I can't avoid it. It's not something I'm going to avoid. I'm just going to be like every time I hear that I put up my red flags, I put bells and whistles. And I just have reflections of just feelings of like this is going to be a pain.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=963s" target="_blank">16:03</a> A lot of stories from the trenches, and some of them have been quite painful to get through, to get to the right answers, to get a solution that's reliably refreshing. Well and it wasn't the problem with the data initially, it was the data drift of that Excel file over time, that was the problem.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=983s" target="_blank">16:23</a> That's usually — I'm gonna give you a scenario with that, a little off topic here. But honestly though the Excel thing, I think we know as part of our world. If I had to give you one of two bowls — one is data with Excel and that's just part of the company, or the other is we want paginated reports but we just need data dumps. Which one do we want to work on?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1002s" target="_blank">16:42</a> Which one is going to be more successful down the road? Are you talking about outputs of information or are you asking about your preference to work with inputs of information?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1032s" target="_blank">17:12</a> Well I think what I prefer is machine generated data, that's what I prefer, which I think errs on the side of not Excel. It errs on the side of paginated reports or data extracts that come from a system. Those are my preferences because it's very consistent.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1049s" target="_blank">17:29</a> The only thing that really changes is when someone goes back into the source system and adds a new column or renames something. Sometimes those source systems or the computer generated code or data sometimes comes out in a weird way. I can easily absorb flat files into any system — doesn't matter, Power Query, notebooks, it doesn't really matter. That structured data is very easy to get into other systems.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1074s" target="_blank">17:54</a> So I'm not actually too worried about it. So my preference would probably be that structured stuff. Now I love Excel for the flexibility of it, and I think that's why — it's a huge tool, over 800 million people use Excel every day, or monthly active users. So there's so much of it out there, you're going to run into it, it's going to be a thing.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1093s" target="_blank">18:13</a> What I wish would happen, and this is just my wishing here right, I wish we had a better way to control a table definition inside Excel. So Excel does a great job with table definition, does a great job with making formulas, all the things. I really wish there was a way to have some advanced controls and passwords potentially, not on the Excel sheets, but on the table of Excel.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1123s" target="_blank">18:43</a> So these columns are defined as these names — this is the name of these columns: ID, name, first name, email. And I lock it in and you can't add new columns. Or if you did, the data I'm loading out of the table doesn't get affected by those new columns. And again I'm less inclined about new columns, it's not my problem — it's when you change the existing columns.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1147s" target="_blank">19:07</a> I'd also like Excel in the table definitions to give me a data quality metric. Like hey, this column requires a number, and if anyone enters a non-number into this column of this table, it throws an error and says this is not a number, fix it.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1164s" target="_blank">19:24</a> The point is you can do these things with Excel but it's much more difficult to lock down that cell with a data validation in a way that forces people to make it correct. So you call it challenge, I call it opportunity.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1177s" target="_blank">19:37</a> First I want to say one thing though — anytime you tell me the frustrations you have with Excel, in my head I hear "yeah I would like to eat ice cream and not gain weight." Listen, I know there's fundamentals in life. If I have Ben and Jerry's, I got to get another pair of pants.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1196s" target="_blank">19:56</a> Exactly, and that's just the world we live in, with Excel being a critical part of a lot of organizations when it comes to their data. But to your point, if Excel is going to be part of our lives whether we like it or not, honestly where I call opportunity is if I'm ever part of these projects, this is a great opportunity to me always for Power Apps.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1219s" target="_blank">20:19</a> Because I cannot tell you the amount of projects I've worked on where it started with Excel.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1224s" target="_blank">20:24</a> I've worked on where started with Excel as a critical data source and we started going through the same question like what are we using Excel for, who touches it, how many hands does it go through, is it just an export. And what we found out was this is just an application waiting to happen, this is an application in a cocoon waiting to flutter its wings.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1246s" target="_blank">20:46</a> Yes and so if you do have Excel that's a critical source, because one thing we both agree on, an Excel data source touching any semantic model can never become certified. That is very hard, you have to move that into something else more reliable. So if you want it to be great but let's put it to your point, what you're looking for is something with allowed values, a drop down so I can only choose one of these four options.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1276s" target="_blank">21:16</a> I have to fill in these things, those are the common issues with Excel. That's why we don't like Excel, it's because I cannot control the inputs. And to be clear all these things can be controlled, they can be, this is my point, it can be developed. It's just not to build and develop and now you're relying on this Excel sheet.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1296s" target="_blank">21:36</a> I have built some of the most egregious Excel files, this is part of the reason why I can speak to this because I've done this. I've made the not mistake but I've done the work to make a really complicated Excel file. To the tune of I had a list of users who could access the file and who could edit it and who could not.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1315s" target="_blank">21:55</a> I had security on it, if you tried to touch something you couldn't it would pop up a menu would say hey you're not allowed to access or edit this thing, don't do this. I had a data validator and it would rip through all the data and it had standard tables of every single column that I needed to data validate against.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1332s" target="_blank">22:12</a> It would go through, it would highlight, it would go through and literally change colors of cells of things that were incorrect. We built a data application inside Excel and it worked, it did its job. But on the other hand it was like what should we have been building, to your point Tommy, it should have been a Power App, it should have been something else.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1356s" target="_blank">22:36</a> The only downside of Power Apps I do not like around using it as a data source. Power Apps are really good for manipulating data on a row by row basis. The one thing I find that's weak about a Power App is if I want to have a formula across multiple rows that I'm editing or modifying or doing something, or I want to copy paste 30 rows in at a time because it's coming from somewhere else.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1381s" target="_blank">23:01</a> That's just one area that I don't think does very well, it gets more complex at that point. Doesn't do a great job with table level experiencing, it manages really well a row of data. This is the record I'm going to pull out, or even multiple like so this one row points to these other data tables, it can pull multiple tables together into one common structure, no problem, I'm totally happy with it, it does a great job.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1405s" target="_blank">23:25</a> But that's where I think why people don't use Power Apps or go learn it, because they had to now fall back to like yeah but I just really want my big table where I can just edit a lot of things at once. And that's what Power Apps doesn't do a great job of, it gets more complex.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1419s" target="_blank">23:39</a> Honestly man I am more and more feeling that every Excel file is a Power App waiting to spread its wings. That's really where it can do it, but yeah to your point it's a very pointed statement. I wouldn't say everyone, a lot of them are, I could probably agree with that, but everyone I think it's a bit aggressive.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1439s" target="_blank">23:59</a> Every Excel file could become a Power App, because I think Power Apps has its own weaknesses in its own way. But no you're right, there's obviously a lot of other factors that play. But I think what we're trying to say here, the bigger picture here is when you deal with Excels you have to understand there are going to be complications there.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1461s" target="_blank">24:21</a> And I think if someone's tasking me, let's put this all together and we've identified that Excel as a critical source, I am being very vocal in an email so it's documented. We can do this, we can build this, you being very vocal to me, never. Yeah, what happens is actually a thing people say about me, surprisingly enough.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1483s" target="_blank">24:43</a> But no, you have to be though, you have to be vocal. We can build this, we can build a semantic model that's going to have multiple reports, but let's also identify the issue that there's going to be issues that arise because we're dealing with Excel here.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1501s" target="_blank">25:01</a> There's a clear, I'm writing out risks and rewards of this a little bit to some degree as well. So I'm always very clear with like hey, we can do it, 100% not an issue for me, I'm all on board for doing whatever we need to do, pull this data out of Excel.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1516s" target="_blank">25:16</a> Here's what I'm going to say, it's going to be like here's some requirements, this this this and this. And again I have seen Excel files that are complete databases. I have seen Excel files that have the right controls, that have been the right amount of lock down, you can't add columns, you can't do things where you shouldn't be doing them.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1535s" target="_blank">25:35</a> I've seen really well-designed Excel files that have data validation. So all this is not to rag on Excel and say Excel can't do what I'm describing, it most certainly can. But I think if you tell me we have to use Excel, I'm going to pull all of my Excel tools out of my toolbox and I'm going to work very hard on that Excel file.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1553s" target="_blank">25:53</a> To make sure that it's giving me as clean of data as it possibly can every single time, and there's almost minimal to no risk of anyone modifying it so it breaks things, especially if it's on critical reporting. I get it and I might even do some data validation checks when I load it into Power Query for the first time.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1573s" target="_blank">26:13</a> I may check data types of columns and check to make sure this column has no nulls on it. I might build extra data quality checking on that Excel file so that way I know immediately to fail that file and not load it. There is fail on error type things you can do where if it can't load a file, if I can't read the data correctly or can't find a column, you can just not have it load at all so it doesn't break your downstream processes.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1597s" target="_blank">26:37</a> You touched the nerve here, not in a very positive way. I think something that is worthy of a discussion. So we know that there's certain sources that have their problems, but critical reporting to me is a major factor here. Because if I'm dealing with the marketing department or sales department, we just need to build something, this might come up, I'll let them know.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1618s" target="_blank">26:58</a> But we can build, build build baby and keep it going. But as soon as we start getting to larger reporting that's more critical for the organization, what's your take on this? And this is something I've done in the past but I want to get your take.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1634s" target="_blank">27:14</a> Critical reporting for the organization, it's going to be seen for higher level ups and it is dealing with unworthy sources, be it Excel or other things that are just not something we'd have in mind before we start building those semantic models. I've gotten guarantees like we can build it now but I need a guarantee, or I'm copying my boss, that there is a plan to migrate those sources to something more structured before we start building and letting everyone know.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1663s" target="_blank">27:43</a> What's your take on getting that as a guarantee beforehand? Because I know we can't control everything. In my world I would say my word is my bond, right, if I said I'm going to migrate that like I would be the commitment there. But I think what you're maybe pointing on a little bit more is you are really trying to handle data ownership, data stewardship of that source.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1685s" target="_blank">28:05</a> I think I had to really put my hand on this one, it's like what I'm really trying to negotiate is I'm trying to do a data contract. You say the only way I can get the data is through Excel, fine. It will come to me like this every single time and if it breaks you're going to be the one to fix it, it's not going to be me.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1701s" target="_blank">28:21</a> Because I can't tell you the number of times where someone says oh the data comes from Excel, I'm the one picking up their data and lifting it to our data platform. It's hey I'm going to a SharePoint page and I'm reading your data in from someplace, I'm making it either a Lakehouse table or I'm directly bringing it in with Power Query right to the model, that's okay.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1724s" target="_blank">28:44</a> All these things are acceptable but if the data somehow fails, there's an obligation on me to say Michael do you know why the data set did not load. I have to be at a very quick glance understand what failed in the process, immediately be able to identify oh it was or was not the Excel file. So that's the data handoff right, the responsibility of them starting the table and me loading the table, those are two different teams of responsibility.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1754s" target="_blank">29:14</a> That data contract is being handled and so when they break their data contract, not if, when they break their data contract, I need to have something in place that says hey I will send you an email when something breaks. And I would also extend this a little bit Tommy too, right, for mission critical things you're talking about.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1776s" target="_blank">29:36</a> High level C-level people in the organization, most people start understanding when reporting gets to that level, if something fails people stop their daily job and jump to go fix the problem. So I just want to make sure at the beginning of the project I have in writing, this data will be correct, there's a turnaround time that you're guaranteeing me.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1794s" target="_blank">29:54</a> If there's a problem there's a contact person, there's a backup person, these are the things I'm thinking about. If Joe's on vacation and the CEO is trying to do something and their Excel file's junked and I can't fix it and I'm technically not the owner of their data.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1815s" target="_blank">30:15</a> I shouldn't be going in and writing new Power Query to fix the data loading, I should be going back to the Excel file and saying fix your bad data. And this is not just Excel, this happens in all different systems, even structured systems like Salesforce. Same problem, people put in random weirdo data there all the time, like why didn't you fill out the customer's email address, I'm getting all these blanks in the report because there's no email addresses in here.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1836s" target="_blank">30:36</a> There's no email addresses in here, it's on my miss as the data engineer to say the quality of my data coming into the system is not clean enough. So I need to kick this back to the source team and say look, you guys need to stop sending us junk data, you own the Salesforce data, go in and fill out this data on these records because it's missing.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1858s" target="_blank">30:58</a> It's just being more thoughtful and again, I think we're on the same page here but I'm really trying to say there's lots of different teams working together to build parts of this data pipeline. And if any parts of those pipeline fail we need to be able to identify what failed, who's responsible for it, and that responsible entity or person needs to own it.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1878s" target="_blank">31:18</a> And this is a lot of the people and process side of Power BI that's not in the tool. You have to write this process down. You struck a nerve with me here on this one because this is a really important note that we are doing here where it's a lot about data stewardship. I'm going to use this term very generously in this conversation.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1900s" target="_blank">31:40</a> Data stewardship, it's a lot of data stewardship. Who owns it, where do we go when there's problems with it? And as you pass that data downstream, what are we doing to monitor it so that way when something goes bad there's reporting that has immediate effects.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1916s" target="_blank">31:56</a> We're missing, something's wrong, something in the process is not right. We did refresh but the record count did not change, or we were trying to load 15 files we only loaded 14. It's that stuff you need to check for when you get to that certified really important level of reporting to make sure you're not losing data.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1936s" target="_blank">32:16</a> And that erodes the confidence in what you're building as a data product. And I'm telling you, preach man, because it cannot be understated here, it is unavoidable. I feel like a gospel jumping up in here and be like, data culture for the win!

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1956s" target="_blank">32:36</a> Yeah well, if you could find one, I know we got some sound effects now. Yes, so that's our preach, that's our amen. But it is unavoidable in the long term. If you're building any model that's going to be downstream or has multiple data sources that go across departments, for this not to be an issue.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=1983s" target="_blank">33:03</a> We've talked about technical debt in the past but honestly if you're building a model like the mailback question is asking and you're not talking to anyone, that's to me data culture debt. Because eventually you're gonna have to pay the piper at some point if you're not having these conversations off the bat.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2004s" target="_blank">33:24</a> And I think this is the curse and the blessing of Power BI, right? Because it's so easy to build. I can sit on my desk, I can use a single monitor, it is so easy. I could build this all in a single day without talking to a soul. But that's not the point here, if I want this to be longstanding I have to have these conversations, I have to have these agreements if I'm going to be successful.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2029s" target="_blank">33:49</a> First off yeah, and if the report's going to be successful. I want to state too, to your point, this is not just for the BI team to CYA, to make sure that they're not in trouble. Correct, right.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2042s" target="_blank">34:02</a> Yeah you're right, I think what I'm describing here sounds a lot like CYA for the data, my fault, it's somebody else. But I think there's a bigger issue here. If your data culture is only focusing on CYA level activities, which is where you're going with this Tommy, that's the wrong approach.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2062s" target="_blank">34:22</a> We really should be thinking about here is the data is transitioning ownership between multiple hands within the company. Are we having a healthy contract related to the data as we pass this data from one team to the next team to the next team? And that's really what we're doing.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2081s" target="_blank">34:41</a> All the way through the process we're trying to instill confidence everywhere we go. And I think that's the biggest point, really the fundamental thing that we're trying to do with those data contracts is can we, the organization and the people, trust the data? Yes, and trust our process to how to fix it.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2099s" target="_blank">34:59</a> It's going to go bad at some point. That situation happens, someone's going to ask me why are there all blanks or why did it error out. And if I can't answer that, that's a loss of trust. But if I could say oh well, operations yada yada, at least we know where to go and we know what occurred.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2117s" target="_blank">35:17</a> Yeah that's a huge point and I'm glad that we harped on this. I want to just reiterate the question so we can answer question number one about what's going, because I want to give this an ample answer.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2140s" target="_blank">35:40</a> So the question here is, is it best practice to have all the reports have their own data sets? If not, what is? And then by the way, all the source of data for those reports are different, some are Excel files and some are SAP.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2155s" target="_blank">35:55</a> Let me answer the question directly. Is it best practice to have all the reports have their own data sets? If you have a one report, one data set for every single thing that you build, that is wrong. I would say that is not an efficient use of your time.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2174s" target="_blank">36:14</a> Yes you can do that in certain occasions, there will likely be certain data sets that will only have one report in them ever, that's okay. And you may be building the model with one report that's being published to the customer, but the customer may build a lot of other reports on top of the data set.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2191s" target="_blank">36:31</a> So that's to your point, your earlier question Tommy was like how are people expected to consume this? What are you doing with the data? Are you just dumping the data out or you actually looking at a report, seeing the numbers and then walking away and saying I'm going to go take action on this page of data?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2207s" target="_blank">36:47</a> That's a different pattern here, right? When I'm managing my consulting business I'm looking at all the employees and saying who's working on what and if I need to pivot people from different projects or work, I'm looking at that page. I don't need to download the Excel sheets to figure out who's doing what.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2224s" target="_blank">37:04</a> I have the page of data, I'm looking purely at the data page and that's where I make my decisions from. So I would say it's not best practice to have a one-to-one relationship for everything you design. I'm looking for a one to a few or one to many relationship, one data set, a couple reports that are answering the questions.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2247s" target="_blank">37:27</a> And I even think of this sometimes in the same way. If you think about what the report is serving, you could answer like when you think about the questions, let me unpack a little bit more. One of the data sources they talked about was sales and opportunities.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2262s" target="_blank">37:42</a> What questions are you answering about sales and opportunity? Is there trending that you're looking at? If you're looking at comparisons over time, are you really focusing on this month's sales versus all sales? Is there compensation that's going from sales? There's a lot of aspects that go around sales and opportunities for the sales team.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2285s" target="_blank">38:05</a> And I really want to hone in to your point earlier Tommy, what, why do they need this report? What questions are we answering? And then grouping those questions together to form, okay if we're talking about sales compensation, that might be its own report that we give to everyone so that way they can see how many sales they've made and what's their compensation towards those sales so they know how much their bonus is going to look like.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2309s" target="_blank">38:29</a> Right, that's a driver. You're giving people those metrics to drive them to a certain action. You want money, I want to give you money, I want more sales in my business. Let's align our goals here so that way you see what your reward's going to look like so you work harder towards your goals. Right, that's great, let's do that.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2328s" target="_blank">38:48</a> So that's the stuff that I'm talking about there. That makes more sense to me, to break those things out. And so in that vein, I take all these insights, these are questions. I group them together into common topics and then I figure out, do all these, like if I have 30 questions, does that become an entire report with multiple pages?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2351s" target="_blank">39:11</a> Or is 30 questions too much information to be given in one report? Because you build a Power BI report for a specific purpose, there's usually a reason why you're trying to get to that report. There's a main goal, a main theme of that report. And so if you try to put too many main themes together the story gets jumbled, you don't know where to look.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2377s" target="_blank">39:37</a> And there may be new questions that are coming about the data. You're looking at sales and opportunity and all of a sudden you have a manufacturing issue. Okay well how does that impact all your sales and opportunity? Is that changing things? Or if you're deprecating a product, we're doing market research to figure out what new product should we be building.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2396s" target="_blank">39:56</a> Those are all things that might be separate reports and you may need to do explorations or figuring out what's in the data. That doesn't belong in your main report. So if your data report is trying to tell you something versus explore the data, those are two different worlds of how you think about using data.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2413s" target="_blank">40:13</a> And so in the exploration world you're using other things like Analyze in Excel, you're dropping the data down. Again we harp on Excel but we use it everywhere. You're using exploration in powerbi.com, you use a metric set to go explore a particular measure to figure out what makes sense with that part of data.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2432s" target="_blank">40:32</a> Those are the things I'm going to be using more of, the tools that are at my disposal in powerbi.com. If we're really trying to measure goals and expectations, maybe I should be using scorecards that pull data out from an actual report every time it's refreshed. There's a lot of other opportunities here in the service that would make this easier for us.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2448s" target="_blank">40:48</a> I'll pause, I said a lot there, I'm sorry Tommy. Yeah and I think we eventually get to the same place but I think we have actually very different approaches. So I used to write in college a ton of skits and one of the questions we'd always ask anytime we had a joke was does this have legs, how long can that joke or that skit go.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2467s" target="_blank">41:07</a> That's a good question to ask with reporting. Does this report have legs? And this is what I mean, so really my fundamental rule of thumb that I do, and again without the one size fits all thing, is even if I'm not doing managed self-service, if I were, who would be touching this?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2486s" target="_blank">41:26</a> That is usually the logical approach I have to how much we're building, how complex the model is. Because there are some organizations you can build a single model and it could cover everybody's reporting, but that doesn't make any sense if other people want to build off of that because there's just too many tables, it's too complex for a power user or someone to actually build off of that.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2509s" target="_blank">41:49</a> It could cover technically all of my data or a few models but it doesn't make sense if I were to build. So the idea is yes, 100% agree. If I were to build a report here, who logically would touch it from marketing? Say okay, these people, so why would it have all this sales data, why would it have all this operations data?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2530s" target="_blank">42:10</a> Would they ever need this, would that get too complex? Yes, and typically there may not even be a logical join between the two things. There might not be a good connection between the two because hey, we have to match on email address. Well that's not a good match, we actually need a customer key but where does that come from? Well it's a system we can't get access to.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2551s" target="_blank">42:31</a> This is where now you're jumping into the world of this should be data engineered. We need to get the data down to a common place from all these different sources and start figuring how to massage and play with the data.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2565s" target="_blank">42:45</a> Right, and this is where I'm going to maybe link a little bit more on the second question. A little bit to your point, I think when you're going with this Tommy, bit too is right now he's talking about reports and models. Fabric opens up a lot more of this for data discovery, for data engineering, for predictive things that we haven't even talked about yet.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2584s" target="_blank">43:04</a> So in order to prepare ourselves for this next level of analytics you're trying to get yourself to, you don't just build reports just to build reports. You want to be strategic about building reports. Build reports and put the data in a place where you can reuse the data and think about okay, once we pile up the data into a central Lakehouse, can we then start utilizing that Lakehouse element to start doing other new analytics?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2614s" target="_blank">43:34</a> Everyone's talking about AI on top of something somewhere. So are you putting your data in a place that's ready and usable for AI? That's another question. So you want to build in a way that's going to be future proof to some degree. You can't 100% do it but this is an area we want to focus on, build it in a way that I could use it in other ways in the future.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2636s" target="_blank">43:56</a> Right, and again I think the critical thing is that usually when I'm coming into situations like this, what I find when I take a new client is I'm always backtracking. I'm never expanding on a model that they have. A lot of times I go in, it's always usually too complex and we have to downsize a lot of the models.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2658s" target="_blank">44:18</a> That's usually where complexity happens because yeah, you could think about AI, you could think about scorecards or how wide it can go. And a model can have a lot of legs, but to your point, we also don't want it too complex for the organization where I'm the only one who understands it and I can apply it everywhere.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2679s" target="_blank">44:39</a> And I think this is a big part here too, we need it to be human readable or understandable for people where I may not be the only one looking at it. I think that's a design criteria that you're looking at. I think very early in this situation, if you have a data set and it's to this example, first question, I have one data set, one report for multiple things.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2700s" target="_blank">45:00</a> I'm not afraid to have 30 models. 30 models is fine, yeah, as long as you can manage them and you know the scope of what's inside them. Not a problem. As soon as you start making larger monolithic models of everything, you have to know that it's a balancing act. You increase the size of the model which increases the weight and it starts reducing the number of people that are going to be able to use and look at it and understand it.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2727s" target="_blank">45:27</a> So if you're building just reports and you're not going to expect people to build on top of the semantic model, fine, build a big model, put all the tables together, not a problem. However if you're going to build where you want people to start self-servicing and doing a managed self-service environment where some of the data comes from it and some of the reports come from the business, now you're looking at a model that should be probably simpler.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2758s" target="_blank">45:58</a> And not to say that if your data culture supports complicated models, great, good on you, you've done the training, you've taught people how to use Power BI and there's no issue figuring out how to use measures and make things work. Wonderful. That I find is very rare, that the entirety of the company understands what a semantic model is, how relationships work and DAX measures.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2780s" target="_blank">46:20</a> So there's just things in there that are like, you probably should start with a simpler model and as people get comfortable with it and as they learn it, yeah, then you can start growing these models to more complicated solutions.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2791s" target="_blank">46:31</a> So MT, I think that second question may be another topic but there's a critical elephant in the room here and I need to ask you this because it has been bugging me this whole conversation. There are really two different areas here that I think are left unexplored. There is model creation where we are building from the ground up this new approach and design, and then there's model migration where we already have these existing models already in the ecosystem.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2822s" target="_blank">47:02</a> And this is bugging me because we have to talk about this. Odds are a lot of people are like, it's not like they're going from nothing to something, there's already something that's already in place, in dependency. So what's your approach and how do you approach migration? Because I think we've talked more about creation than actually migrating models into one and blending together.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2845s" target="_blank">47:25</a> Yeah, and this is a really good question because the second question here is like hey, I do have, I need a report with stock levels and some sales information. So now we're going to say I need some information from one model but other information from a different model. So this is where I'm going to start really pointing on, this is where Fabric I think really shines.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2865s" target="_blank">47:45</a> Fabric excels, that's funny, good pun! I think this is where Fabric really shines is because when I'm starting to join different tables from different sources, I need a place to put those tables to potentially continue shaping them for the final report.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2879s" target="_blank">47:59</a> Now what you're doing here currently is if you're using direct query to Analysis Services. So what you're doing is you're building a composite model where you have two existing models and you're building a third that relies upon the prior two models. Now I have found really good performance in those models if you're just using the measures and the dimensions just side by side.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2905s" target="_blank">48:25</a> If you're not trying to join dimensions between, so Microsoft has a term for this. The model is an island. So every model you build is an island. And so when you're building a composite model, you're combining multiple islands. We have the island of sales, we have the island of stock levels, these are two different semantic models that are separate.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2925s" target="_blank">48:45</a> They called them islands because they're all their own. If you pull a measure from each of those islands and put it on the same report page, no issue, not a problem. But as soon as you try to have a dimension that spans both islands, that's when we start getting complication.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2942s" target="_blank">49:02</a> And Microsoft has admittedly said you have to test the performance of composite models when you're jumping dimensions between models. Because what has to happen is island number one has to pull together a list of unique values and send it to model island number two. You say hey, I'm interested in these categories, these regions, these product numbers.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2965s" target="_blank">49:25</a> That list can get really long and very large because it has to send it as text between one model to the other model. There's no inter-model communication that's happening here other than this is the filtered list of parameters.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2979s" target="_blank">49:39</a> So to answer question two, yeah, keep your islands separate and use only the measures together on the report, probably fine, probably not a big deal. As soon as you start having common dimensions, now I'm going to be saying I probably should be looking at bringing the loading of those tables into a common place.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=2999s" target="_blank">49:59</a> Again I would argue bring those tables to the Lakehouse. Once the tables are in the Lakehouse you can build a common dimension for dates or products or whatever. And now you build a brand new semantic model that has the two fact tables from the prior data sets but now has a new combined unique dimension area that actually spans both tables and you physically need new relationships between spanning those models.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3023s" target="_blank">50:23</a> That's what you're building, in a sense a mental Venn diagram in your head. And I have two of them, usually it's the technical overlap and the people overlap. For both of those, how many of the same people are looking at this and how much of the data is the same?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3042s" target="_blank">50:42</a> And honestly, once there's a certain threshold you go okay, now it makes more logical sense in the long term for this to be in a single model compared to them being separate. But it has to have, and again I wish I had a number like 84% overlap, where that's when we start building. But there's a number there, there's something there that tells you.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3059s" target="_blank">50:59</a> There that tells you is that experience, or would you say where would it be that cut off. I think this is all going to boil down to what are you comfortable in, right.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3089s" target="_blank">51:29</a> I'm assuming based on the question here, you're probably comfortable in building Power BI reports, you're probably comfortable in making semantic models. If that's been your world, you're just doing that, then if what I'm saying now is yeah just go to Fabric and just load everything there, you're like well how do I have to go to Dataflow Gen 2, how does that get run, what's a pipeline.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3119s" target="_blank">51:59</a> So when I say just do it in Fabric, there's a lot of other technical pieces that need to come together to make the Fabric thing work well for what you're trying to build. And that's okay. What I will say though is the need still exists. How you solve that need will probably vary depending on what you build inside Power BI and/or Fabric.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3147s" target="_blank">52:27</a> So I'm going to look at this feature here. Is this feature that, and I haven't played with it enough, and this is to me, look at this. Going, let's imagine I have two semantic models that are loading data every whatever the cadence is. Why don't I just turn on the feature to store that semantic model data in the lakehouse and get tables there.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3175s" target="_blank">52:55</a> And then I can just build a new semantic model on top of it with new relationships. The challenge of this, the principle of the challenge here is I already have tables being loaded somewhere. I don't want to reload them again. I don't want to hit the data source again. I'm trying to be efficient, right. I don't want to duplicate my data multiple times.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3213s" target="_blank">53:33</a> That's what I'm trying to avoid with this. Why would you do shortcuts? Like to me the design, really the challenge, the approach completely changes with Fabric. Because yes, shortcuts are my jam at this point because I can have everything structured, all these fact tables and just a shortcut to my date table, a shortcut to my product table.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3235s" target="_blank">53:55</a> And a lot of these, where that also eliminates the problem of redoing a query and making sure everything's aligned. And it really does challenge how we build that semantic model too. It's a big point, this is a really good point.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3248s" target="_blank">54:08</a> So to me, I'm looking at the tools that I have in Power BI, I'm limited, right. I'm using composite models, we've been dealing with that. Yes, I'm looking at what I'm in the Power BI realm to solve question number two is one or two options. As soon as I introduce Fabric, the amount of features that get available to me and allow me to expand my thinking of what this looks like.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3272s" target="_blank">54:32</a> As soon as I say Fabric is an option, again that's a big if right here because not every organization is there yet, not every organization wants to use it, which is okay. I'm totally cool with that. But as soon as I see Fabric is an option to me, I need to rethink a lot of what I'm doing. Does all of my data get loaded to the lakehouse? Should I be pulling data in from into that place first and then building my semantic models?

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3315s" target="_blank">55:15</a> Because now in the same way I was building a semantic model with multiple reports, I can now build tables that make multiple semantic models that build multiple reports. So the whole data strategy I think changes with Fabric. And to me it's a much better story and it's a much more effective usage of your time to build common tables and data stuff as well. So I really like that story.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3342s" target="_blank">55:42</a> So the short answer to your question here is, if your direct query is still giving you the performance you want and the report is not super laggy or slow, keep doing it. It should work just fine, right. Monitor your usage, if you're using Premium Per User you probably have plenty of compute laying around that it's not going to be a big issue. Just make sure it's fast.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3382s" target="_blank">56:22</a> My only caveat with the question would be if your reports or clicking on things gets too slow, like one or two seconds every time you click on something, users will start getting unhappy and they'll be like this is not helpful to me, I don't like waiting. So then you need to, when it gets slow, then we need to rethink our steps and maybe rebuild something a little bit differently.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3407s" target="_blank">56:47</a> Yeah, and just I'll touch on that real quick as well. Usually anytime I've been brought to a project like this, it's always measures that are going to have the problem first. Obviously there's performance issues, but we're probably dealing with something people are trying to do with DAX that they can't do in the model the way it's structured.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3427s" target="_blank">57:07</a> But usually when I see the really first issue, yeah I'm like your model is not structured right, that the model needs to be fixed. Which means you need to do more table manipulation upstream. And if you're only in Power BI core, do you have enough compute, is your compute strong enough to change the data? I know you love having 15 filters nested within each other, but there's a better way.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3451s" target="_blank">57:31</a> So I can always rank how good one of our episodes is by how many new topics come from that. Just so you know, we got three awesome ideas from here because this is something, honestly this will be my closing thought. We're awesome, we're at time.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3469s" target="_blank">57:49</a> Great mailbag. This is something that a lot of people are always going to be the constant battle, right. Because I think we touched on really three aspects here that are part of our job. And it is the technical skill, it's a huge part in how we design, not just being able to build it but can we build it for a long time.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3506s" target="_blank">58:26</a> It's asking the right questions and approaching those situations off the bat with the right people in the right way. And that's the people part of this thing. So the technical part was, technical, can we do it, and the people part is like are we asking questions, we understand why, we're asking the right question. The process means the data contracts, it's making sure we have that agreement.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3528s" target="_blank">58:48</a> And that's, if you want it to be longstanding, you want to have, if you want something to have a long life cycle, you have to have all three components squared away. Yeah I agree, I like this topic.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3538s" target="_blank">58:58</a> So my final thought here would be, it's a balancing act. It's going to be a balance between the value, the number of people building your semantic models to start centralizing them and bring them together. I think if you're in a pure Power BI world, keep doing what you're doing, you're doing the right thing.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3554s" target="_blank">59:14</a> You want to maximize your effort for reuse. If you're spending too much time working in too many small models, it might be time to join some of them together. A lot of times I'll go into a project and I will just write down every table name and draw out, or just even take a screenshot of all the diagrams in each of the models.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3575s" target="_blank">59:35</a> So I've done this before, I go to Miro. If I have three or four models, I'll put all the tables in the model, make it nice and clean so I can see everything in one page. Take a screenshot, put it in Miro, and I will draw colored squares around everything that is common.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3592s" target="_blank">59:52</a> And then I'll stand back and look at it and say okay, which tables are, which models are most similar, which ones have the most common stuff. Those are the models I potentially would join. You don't need to join everything. I wouldn't make a monolithic model for everything.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3604s" target="_blank">1:00:04</a> I've also seen the problem on the other end where everyone throws every table into one single model. Also not helpful, wouldn't do it, don't recommend it. So I would, it's a balance between making the models large enough that it's easy to manipulate but not so large that no one understands what you're trying to build in it. That's the balancing act.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3626s" target="_blank">1:00:26</a> That would be one I would put there. And then my other final thought here around multiple models together, I'm going to say it a thousand times and I just love how it works right now. Fabric is incredible. The ease of feature, the ease of moving from the lakehouse into the models, it's so good. Direct Lake models, the data engineering tools that I get, the Python notebooks, PySpark, man.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3659s" target="_blank">1:00:59</a> I have so many more tools. I feel so confident coming to any project, like if you give me Fabric I can solve any problem. There hasn't been a single thing I've walked into like I can't figure it out. And so that's really rich, I like that experience. I like having a tool, like I like walking in with a Swiss army knife that can do almost anything I needed to do.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3675s" target="_blank">1:01:15</a> So yes you have to know the tech really well, yes you have to performance tune to know what's going on. But you're not going to stump me. I'm going to have unlimited scale at my fingertips. You want to do a billion row table, no problem, Fabric can handle it. You want to do real-time data, Fabric can handle it. It's got tools for these things that make it easy for me to work with this data and make it work well for whatever you're building.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3700s" target="_blank">1:01:40</a> And I feel like at a reasonable cost. Yes you pay for what you use, but it's not like this egregious expense. You can build things in a very lean way if you need to. Anyways, that being said, thank you very much for watching the podcast or listening to it.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3716s" target="_blank">1:01:56</a> We hope you had a good exercise, run, jog, whatever thing you're doing, or biking. I guess I got to throw biking, Tommy's a big biker so I got to throw biking in there as well. Hope you had a good exercise with us on the podcast.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3726s" target="_blank">1:02:06</a> We hope you're talking along with us, we hope we're saying things, and I've had people tell me they go for their walk and they're laughing and they're talking, like that's a stupid idea, we should never do that, oh yeah yeah this makes a lot of sense. So we hope you're engaging with the conversation either in the chat or just on your own.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3744s" target="_blank">1:02:24</a> But that being said, if you like this podcast, if you like the content that we're generating here, we really appreciate your ears and your time. We know your time is valuable. Please share it with somebody else if you found value in this, let somebody else know you found some value as well.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3757s" target="_blank">1:02:37</a> With that being said, Tommy, where else can you find the podcast? You can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating, it helps us out a ton. And please share with a friend, we do this for free, we love having you guys around.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3771s" target="_blank">1:02:51</a> Do you have a question, idea, or a topic that you want us to talk about in a future episode like today? Head over to powerbi.tips/podcast, leave your name and a great question. And finally join us live every Tuesday and Thursday at 7:30 a.m. and join the conversation on all PowerBI.tips social media channels.

<a href="https://www.youtube.com/watch?v=IGRfC4Ar-yA&t=3788s" target="_blank">1:03:08</a> Awesome, thank you all so much and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
