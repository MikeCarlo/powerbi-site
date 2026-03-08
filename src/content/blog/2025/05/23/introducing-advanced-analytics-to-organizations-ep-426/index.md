---
title: "Introducing Advanced Analytics to Organizations – Ep. 426"
date: "2025-05-23"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Advanced Analytics"
  - "Pareto Analysis"
  - "Data Culture"
excerpt: "Mike and Tommy discuss how BI teams can move beyond basic bar and line charts into advanced analytics like Pareto analysis. They explore strategies for introducing these techniques to organizations and getting stakeholders to adopt more sophisticated analytical approaches."
featuredImage: "./assets/featured.png"
---

Mike and Tommy discuss how BI teams can move beyond basic bar and line charts into advanced analytics like Pareto analysis. They explore strategies for introducing these techniques to organizations and getting stakeholders to adopt more sophisticated analytical approaches.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/Ev8OfQWG4VU" 
  title="Introducing Advanced Analytics to Organizations - Ep. 426"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

This week's scenario: You work for Jamie Dimon at Chase, and he insists every month on 50 printed P&L statements. Do you push back and tell him to use Power BI instead? Mike and Tommy debate when it's appropriate to challenge executive preferences on report delivery — and when it's smarter to just print the reports.

## Main Discussion

The core question this episode tackles is one many BI professionals face: how does a BI team begin to move past basic bar charts and line charts into more advanced analytics like Pareto analysis, statistical distributions, and other sophisticated visualizations?

### Starting with the Right Foundation

Before jumping into advanced chart types, Mike and Tommy emphasize the importance of having clean, reliable data and a solid reporting foundation. Organizations that haven't mastered the basics of data modeling and standard KPI reporting aren't ready for advanced analytics. The foundation has to be solid before you build up.

### Pareto Analysis and Beyond

Pareto charts — the classic 80/20 analysis — serve as a great gateway into advanced analytics. They're visually intuitive and immediately actionable: showing which 20% of products, customers, or issues drive 80% of results. This makes them an easy sell to business stakeholders who may be skeptical of more complex visualizations.

### Getting Stakeholders to Adopt

The adoption challenge is real. Mike and Tommy discuss practical strategies for getting business users comfortable with advanced analytics:

- **Start with a business question**, not a chart type — let the problem dictate the visualization
- **Show the insight first**, then explain the method — lead with the "so what?"
- **Use familiar contexts** — apply advanced techniques to data stakeholders already understand
- **Iterate gradually** — don't overhaul dashboards overnight; introduce one new element at a time

### Building a Data-Driven Culture

Ultimately, introducing advanced analytics is about culture change. It requires BI teams to act as educators and consultants within their organizations, not just report builders. The teams that succeed are the ones that pair technical skills with strong communication and change management.

## Looking Forward

As organizations mature in their Power BI journey, the opportunity to introduce more sophisticated analytics grows. Mike and Tommy encourage BI professionals to keep pushing the boundaries of what their organizations expect from data — one chart at a time.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=36s" target="_blank">0:36</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning everyone. Welcome back. Good morning Mike. How you doing?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=44s" target="_blank">0:44</a> I'm doing well. Just clipping along. Things have been ramping up for us. I think it's been a slow part of the beginning of the year here for us just in general consulting, traveling. It's been just very busy already, but I'm liking where things are going and we've had some really interesting conversations around some stuff.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=61s" target="_blank">1:01</a> I'm excited. Next, this is actually a recorded episode, so I'm trying to get my weeks configured here. This is the week of Build. So I'm sure there'll be some announcements made at Build for Fabric and PowerBI.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=76s" target="_blank">1:16</a> We are pre-recording this episode because Michael is traveling. So, that's my fault here. But stay tuned. We will probably digest more of the Build activities throughout this week. And we will have some more episodes in the future talking about things that are happening at Build.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=91s" target="_blank">1:31</a> Wasn't Build the conference that Fabric was actually introduced? That's a great question, Tommy. It was because we did that live reaction. I'm pretty sure it was in May in the summer.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=104s" target="_blank">1:44</a> You might be right about that. Build is supposed to be more like developer centric and very technical-heavy. And one thing was I went to Build last year and some of the presentations just felt a little bit too fluffy for me. It was too salesy.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=120s" target="_blank">2:00</a> I wanted more like show me how to do it, open up code, write some stuff. Show me what are the new technologies that I should be interested about. I just have a creeping suspicion, Tommy, with all of the effort Microsoft is providing around data agents inside the Microsoft Fabric ecosystem.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=139s" target="_blank">2:19</a> You look at what Microsoft is doing, dude, there's co-piloty things everywhere. Everything's talking to AI anymore. And I think before we get to our main topic, I'll just have one thought here and we'll do the news here in a second.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=153s" target="_blank">2:33</a> I do think there's a level of whenever I'm using any program, any app that's on the web, I'm almost expecting AI to be part of it in some way. And my understanding of what AI can do has really changed my mindset honestly, Tommy.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=170s" target="_blank">2:50</a> Like the fact that I can generate images, it can rewrite words, it can rewrite text and things. Anytime I'm inputting text to various parts of programs, I'm just expecting the AI to be there to rewrite it for me. Like I'll put down my thoughts. But it's an expectation now.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=188s" target="_blank">3:08</a> And I think maybe this was what Microsoft saw earlier on by throwing Copilot at everything because every other program out there is going to do the same thing. And now here we are. If you have a product that doesn't have an AI in it, you're now behind.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=200s" target="_blank">3:20</a> Let me do you one better here. I think not only do we expect that, but Mike, I think we expect it to have some level of talent or some level of output that ChatGPT has. I'll give you an example.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=212s" target="_blank">3:32</a> Yeah, every tool has it. That's an expectation. But I use Confluence, build a lot of spaces for clients and they have an AI agent tool. Of course you do. I don't use it. I use ChatGPT in my other tooling and then I'll put into Confluence even though it has a tool because just because you have an AI tool doesn't mean it's going to be used.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=234s" target="_blank">3:54</a> So I'm 100% with you and honestly I'm not going to be impressed at Microsoft Build unless Arun's a data agent. Everything that's said is the data agent Arun thing. So that's going to be where I'm going to be the most impressed.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=248s" target="_blank">4:08</a> Yeah, we'll see what Arun comes out here. So I'm not sure what his analysis will be. I don't really know, but I just feel like we're at a tipping point right now where there are so many rich tools.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=262s" target="_blank">4:22</a> So I feel like also in my mind the idea of a single agent or a single AI to do everything is not what I thought that was going to do initially. I'm thinking now probably there's going to be multiple agents that are doing multiple different things.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=277s" target="_blank">4:37</a> And I think it's going to be more important for us to get access to a large library of multiple agents holistically as opposed to only focusing on just the OpenAI one. I think each agent or each model out there is going to have its own specialties and certain ones will do better than others in certain areas.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=295s" target="_blank">4:55</a> And we got to be able to customize them, we have to be able to weight them. And I think that's such a huge part now where that's true especially in software as a service for an organization. You can't just give me a model or an agent and say that's what the organization is going to use. It has to be custom regardless if it's the data or the instructions.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=315s" target="_blank">5:15</a> I think we're just getting to that point now where give me the default but it's got to be customizable. So anyways, I love that. Let's get into our main topic for today. I'll just give you the topic here and then we'll hit the news real quick.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=325s" target="_blank">5:25</a> So, our main topic is introducing advanced analytics to organizations. And already I disagree with the title here a little bit and I think we're going to have a good conversation today. Advanced analytics and how that fits inside your organization.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=339s" target="_blank">5:39</a> Now, I would maybe argue it's not advanced analytics. We're talking about data literacy, maybe that's what really the language I'm trying to use around this. A bit softer of a term because I really feel like there's people in your organization who know how to use analytics and there are others who don't quite understand it yet.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=353s" target="_blank">5:53</a> Oh, we're going to have fun with this. So, I think there's an educational component. As a company, as you're being a data driven company, if that's what you are or you're trying to strive to be, I think there are specific actions, trainings, conversations that need to be held to start bringing your team forward to be more analytical.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=374s" target="_blank">6:14</a> You're not just going to hire people and know they're analytical. They've got to be educated or trained in various ways to then help their minds think about the basic stuff, understand it and then move on to more advanced analytics or other things. So that's the topic. I've already got my boxing gloves on for that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=393s" target="_blank">6:33</a> So Mike, I'm realizing in my older age now, this is a scenario for you. I'm realizing first off I'm reading books now that you could not pay me 10 years ago to read where I had no interest in them. I would find it despicable.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=407s" target="_blank">6:47</a> You read books now? Yeah. Like, I just watch internet. I just watch YouTube and that's like my form of learning. Well, you're funny, Tommy, because a lot of the books that people have written, usually there's a podcast or some video content around parts of those books.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=424s" target="_blank">7:04</a> And I'm actually consuming the video side of those content pieces, not actually the book itself. Well, it's entertaining. Now, I'll give you an example. I read a book about the history of oil. 10 years ago I would not even pick it up or walk past. Page turner now at 37 where I'm like, "No way. General Patton said this." Just weird.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=445s" target="_blank">7:25</a> I'm reading a book about Jamie Diamond. He is the CEO of JP Morgan Chase. And this scenario, there's just a part of the story where I'm like, I need to bring this up to Mike and a data culture. So one of the things that he implemented was every month he insisted from each of his department heads he got 50 different profit and loss statements.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=466s" target="_blank">7:46</a> But they were all printed and he would dive through them as a CEO and I'm thinking about this, well it's all data and it could be

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=471s" target="_blank">7:51</a> This well it's all data and it could be a paginated report but the scenario I have for you, Jamie D, you work for Jamie Diamond and he wants all these printed data, these reports on a monthly basis. Do you push to say if we have Power BI, hey, all this is available anytime you want in Power BI, just take a look on your iPad or take a look on your laptop, or do we adhere to the printed side of things?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=500s" target="_blank">8:20</a> Because the theory with Power BI is rolled a no, like we don't do printed because we have the data in Power BI. But this goes back into that, but what actually happens in the real world? So that's the scenario for you. You're the data analyst for JP Morgan. Everything's printed. Do you push for this to get actually pushed to Power BI and focus there?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=520s" target="_blank">8:40</a> This is interesting, Tommy. So, I have a couple reactions to this one around this one. So, my first inclination is, right, it's a CEO. They're going to want to do things a certain way. Jamie Diamond is also more seasoned in his years. So, because of that, he's just used to seeing things a certain way, right? He wants that physical paper touch.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=543s" target="_blank">9:03</a> He wants that book of P&L statements, right? But when you look at someone who's in the financial industry, you live and die by the profit and loss of what's going on, right? What products are selling well? What products are not selling well? And at the end of the day, the bottom line is are you making more money than you're losing or you're spending to do the business, right?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=567s" target="_blank">9:27</a> So, I think this scenario is a special case because if you look at profit and loss statements, they're very not regulated, but they're very consistent and they have the very same information. Money coming in, money going out, money at the end of the day, like what does all that look like?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=584s" target="_blank">9:44</a> And so, I think when you are that level of CEO at that top of the top of the echelon, you're not, you should not be worried about the minutia of all the little details. You should really be focusing on, okay, what are our goals as a company? And again, at his level, he's interested in making sure shareholder value continues to go up.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=605s" target="_blank">10:05</a> So, whatever the teams beneath him are investing in, he needs profit and losses on those items. And so, he's looking at where we at right now and are we marching closer to what our year goals look like. So, I think this is a special case because of profit and loss. He's not the one going to be digging into those details.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=622s" target="_blank">10:22</a> And if one of those profit and loss statements is really off and not doing well, I guarantee you he's not going into, oh, let me drill through to the next page and see the answers. He's going to the individual who owns that area and says, "Your profit and loss is not where we need to be. This is not going to do what's right. Go tell me what's going on. You need to give me more information."

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=641s" target="_blank">10:41</a> So, I think he's really trying to figure out across the health of those 50 departments or 50 business units, which department is the one that he needs to focus his attention on. So all that to say, what do we do for Jamie Diamond in this situation? I would also argue here because the profit and loss and the financial side of things are very known quantities around what is expected.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=662s" target="_blank">11:02</a> Printed being a no-no like a we don't do that anymore with Power BI. We just build the reports. I'm of the opinion if I worked for him and I had to produce some of these reports, not all of them, but a portion of them, I would for sure go out and build a semantic model. I for sure would have what I would need for the next level of detail down on that profit and loss statement.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=685s" target="_blank">11:25</a> Maybe build reports, maybe build some other things, but I would for sure build that profit loss in a paginated report and I would just print it out for him. I'd have that whole sucker automated and just ready to go. I would not be messing around in Excel. I would have it all ready to go because that is every month or every week, right?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=701s" target="_blank">11:41</a> As fast as he needed it, I would make sure I have that information done and ready to go. I have worked in a company that takes the same approach. They would print everything out on Greenbar and had everything printed like all of their stuff, all their sales information would go up to upper leadership and they'd have these long printed reports.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=725s" target="_blank">12:05</a> That they would hand, think 150 pages of reporting, and the team beneath that person had to really figure out how to produce this stuff and there's a lot of waste and checking and making sure things were right at the lower levels because a lot of it was being done ad hoc in Excel.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=741s" target="_blank">12:21</a> All these other things. So, we came in and actually modernized a lot by just adding models, semantic models to aggregate and bring that data up to a higher level. We still gave them printed reports. We still printed out the information, but we were able to then automate more of that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=757s" target="_blank">12:37</a> And so, to your point, Tommy, right, depends on how Jamie Diamond is getting these reports. There's something to say for being efficient here and being able to produce that same report every single day of the week, right? Or you're producing that report after a week's work of time for someone to produce the report that you can then go give to Jamie Diamond.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=777s" target="_blank">12:57</a> So where I think the value here for this is right, give them what they want. I think Power BI is flexible enough to give users paginated reports or pretty interactive reports depending on your use case. This seems like it's a very specific use case around what they need but I would focus my attention on automating all of that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=796s" target="_blank">13:16</a> Now the idea here, why I want to automate, I think I want to automate because then I can explore other areas. I could say let's understand, let's start doing some waterfall statements. Where in this department are we making more money? What was the trend of things? Are we seeing something change in the interest rates area that's really impacting our bottom line?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=815s" target="_blank">13:35</a> Like I would be doing a lot more, after I give him the P&L statement, I would do a lot more work to figure out what's the reason why I'm not making my marks or why am I doing really well and trying to clearly communicate what that would be. I think as an employee, that's where the real value comes from is like you understand your area really well. You have to be able to articulate the why behind that P&L statement.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=838s" target="_blank">13:58</a> Yeah. No, I love that. And I think perhaps part of this too is unique for Jamie Diamond. First off, if I ever get hired somewhere where my CEO has a biography written about him, I'm not starting until I've read that book. That's probably a good idea.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=855s" target="_blank">14:15</a> But he was a number cruncher and his big thing was going through and cost cutting, slashing. So I think I really agree with you because maybe 10 years ago I would have said no we got to push Power BI because that's the data culture. But the thing is especially when you're dealing with the C-level, there is something you have to adhere to.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=877s" target="_blank">14:37</a> And say fine, the big thing here, the big win is the automation. You can have the conversation with him or with the CEO, go look, correct, I know you want this every month. We can print it out but guess what, we can do this every week. We have this automated. If you give whatever the resource and budget because you're obviously looking at this once a month, but do you need it more frequent?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=902s" target="_blank">15:02</a> Do you need this on a frequent basis? Would you like to search this rather than putting your finger and running through with a highlighter? These are all things that we can work on for you. Have it in the same format you want. Because the one thing that you don't want to do, I think as a data analyst going in anywhere, is trying to in a sense be like a bull in a china shop.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=922s" target="_blank">15:22</a> Like we're going to change the data culture and you come in guns blazing because people have an expected format that they've looked at and goes in our topic too today where there's a way people know how to look at data. And if you change that drastically that's going to do more harm than good. So to answer the question here, yeah, you're keeping the format. Anything you do would be gradual.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=941s" target="_blank">15:41</a> Anything that you do would be gradual. Anything that you go has to be an expectation that happens on a gradual basis. I'm not sure the profit and loss statement is really something where you put a lot of advanced analytics around things.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=952s" target="_blank">15:52</a> Anyways, I think that's also a very historical look on things as well. It's here's a table. Here's today and here's back in time, right? That's the historical look at things. Everyone knows how to look at a profit and loss to your point.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=966s" target="_blank">16:06</a> Well, it's also very regulated. So, this is also where I think regulation comes into place here because if Jamie Diamond starts lying about his numbers for whatever reason, his costs are not right or his profit isn't correct and someone's inappropriately out, it's his neck on the line. It's his job. He could go to jail for doing wrong things at that level of the company.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=988s" target="_blank">16:28</a> So, to that end, I think this is one of the reasons why you see a lot of the profit and loss thing. It's a known quantity. It's a communicated standard and everyone in that profit and loss space understands. And this is going to lead into our topic today.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1002s" target="_blank">16:42</a> There is a certain language you're communicating with the data and everyone knows how to talk the same language of that data. So with this I think we should really transition into our main topic today which is how do you introduce, and I'm going to call it analytics culture. Tommy's going to call it advanced analytics, into your organization.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1023s" target="_blank">17:03</a> And I think this is going to be a really good topic. So Tommy, let me stop talking here for a bit. Go ahead. Give us some more concept here on what do you mean by introducing advanced analytics to your organization? What does that look like for you?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1032s" target="_blank">17:12</a> Yeah, for context, me and Mike were already arguing about this before the podcast started. So I introduced this to Mike and I said, "Hey, how about this first topic? How does a BI team get past simple bar charts and line charts to more advanced analytics?"

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1045s" target="_blank">17:25</a> Actually part of this inspiration, Marco Russo wrote an article about Pareto charts and actually introducing more advanced analytics using DAX. My thought was how many people are wanting that? How many people are wanting the more advanced analytics, cumulative gain, six months rolling, or just custom visuals too that usually require what I would consider the advanced analytics.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1069s" target="_blank">17:49</a> And how do we get others to adopt this approach? Mike, you already had an opinion here. It's like well I don't call that advanced analytics, that's just a data literacy thing. So I think there's two areas here that we dive into: let's talk about data literacy and then let's talk about moving past that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1086s" target="_blank">18:06</a> Because to me a lot of organizations, they are either living in Excel or they expect and have that same assumption, just like what a profit and loss statement looks like, what a report should look like. And usually those are not what I would or what you would consider the advanced analytics. I'm not even talking key influencers, I'm just talking more than your simple volumes, more than simple rates.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1112s" target="_blank">18:32</a> I'll pause there. I'll let you talk here and just let me get your first take on this. Well, it's going to be a good episode when Tommy and I start arguing about the episode before we even get on air. And this is going to be a spark, so hopefully we'll fly. So, this will probably be good.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1125s" target="_blank">18:45</a> Well, let me stand back and say, so I'm going to give you a bit of my past experience of how I was trained to think analytically about some things. And I think this is a skill that is probably required by more people in your organization. I think the challenge is how do you get this skill into more people's heads? That's the issue that we're dealing with here, right?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1145s" target="_blank">19:05</a> So, there's a couple things that I think companies don't emphasize enough on, and some that do emphasize this well encourage their employees to really create value from their data. One of them is I like this idea of being able to have everyone thinking about analytics in a consistent way.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1163s" target="_blank">19:23</a> One of the things I like looking at is the IBCS standard. International Business Communication Standard. IBCS is the name of the standard and it's like a nonprofit organization I think that has set up this idea of here's how we should think about good reporting. So people have studied this.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1180s" target="_blank">19:40</a> I think a lot of times we build visuals, we build reports, we think you have to come up with everything from scratch. Actually the answer is no. There's people way smarter than me, way smarter than Tommy who've already thought about what's the best way to represent year-over-year change. What's the best way to represent comparison? What is the best way to represent a profit and loss statement graphically?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1201s" target="_blank">20:01</a> Right? We don't have to creatively come up with everything from scratch. So, one thing is where do your people go to learn this stuff? What does your company have in place? If someone desires to go a little bit further above this, where do they go? Do you have a class? Is there something you point people to? Can you run people through IBCS certification?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1224s" target="_blank">20:24</a> I think a lot of times we're just given Excel in a company and say here you go and then you learn on the fly as you go through things, like what is it, where's analytics come from. But instead I think pushing people more through these analytical spaces actually helps people think more critically around their analytics.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1241s" target="_blank">20:41</a> So one thing I'll point out is where are you getting your education from? People have made, built, and studied this. IBCS is one place you can do this. Another area that I think businesses are very weak, and this plays well into Power BI, is the level of automation of things.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1257s" target="_blank">20:57</a> Even though we're talking about communicating through analytics, advanced analytics, organizations, if you're spending all your time just pushing data between Excel files, when are you having time to spend any effort around learning advanced analytics? I would argue you're going to have less time regardless.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1275s" target="_blank">21:15</a> You're either going to spend more time outside of work to learn this stuff, you're going to spend more time here. And I like to think of this as a communication standard across two different people. Like if I know how to build this really cool IBCS chart and I give it to you, Tommy, if you can't read the information in there and understand what I've written, then I've failed. I'm talking a different language to you and you don't even understand the language I'm speaking.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1299s" target="_blank">21:39</a> So to me, there's that exchange there. And then automation is something that we need to put in place here to help people have space to go learn and educate themselves on these things. Those are my two initial points.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1311s" target="_blank">21:51</a> So, I'm not even trying to... I know when I'm ready to argue when I'm twirling my Surface Pen in my hand, and that is happening at a rapid rate right now. So, right off the bat, Mike, this is something... Yeah.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1323s" target="_blank">22:03</a> So, this is something that I realized very early on, and I don't remember if someone told me this, but it was very apparent to me. As much as I love analytics, and I think both you and I have a little warped view because Mike, you took the... What was the black belt course you took? I don't remember the name of it but it was a phenomenal course.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1343s" target="_blank">22:23</a> Yeah, on that and we've obviously both had our education, we both have our way of looking at data and also understand the impact of data. Well here's the reality of the situation: the sales manager, the marketing manager, their job is not to know advanced analytics. That's not their education, their job is focused on their sales reps to meet their quota or to have these campaigns be successful.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1370s" target="_blank">22:50</a> Data might be a part of that but their responsibility is not to understand that data literacy or have that advanced analytics by default. You can argue that most organizations should, but my counter to that would be that's such a small percentage of most organizations that have such a healthy data culture.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1388s" target="_blank">23:08</a> Like how many organizations do you walk into that have such a high and mature data culture there? To me it is very very low. More so in organizations, again my job as a sales manager or operations manager is the team I manage, the quota I'm supposed to do. Reports may be a part of that but advanced analytics is not. So with that in mind, I'm just going to...

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1413s" target="_blank">23:33</a> With that in mind I'm just going to say this advanced analytics thing and again I'm going to define it here and we can talk about that first. To me this definition of an advanced analytics, this whole concept here, to me this is a growth of the normal metrics that one would look at.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1432s" target="_blank">23:52</a> If I look at my sales quarter and I look at this in a bar chart, advanced analytics is simply looking at maybe a predicted outcome. It's something that's not just the visual itself, which is the cognitive load, but it's a way of looking at that same number.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1467s" target="_blank">24:27</a> If I look at call rate, if I look at my open rate, whatever that may be, it's something attached to that that again is going to take more effort and it's not part of that standard lexicon of the user. So that is going to be my definition of what we call advanced analytics.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1482s" target="_blank">24:42</a> It's not just the visual I use, but it's also how we're looking at that same metric. I'm looking at it from a different side of the box. For a lot of teams, you are now breaking their assumption of what a report's supposed to do.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1498s" target="_blank">24:58</a> Most organizations, and I'm gonna put a bucket here with most, most organizations expect a report to show me my number, where I'm at, where I'm going, and that's the default of a report. Anything past that is out of the norm. It's past the expectation.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1515s" target="_blank">25:15</a> Most people are not going to go, I'm gonna figure this out. I'm going to discover this. Most people are going to say, "No, I want to see this, know this, move on." Advanced analytics, it takes a little more effort.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1528s" target="_blank">25:28</a> So, that being said, Mike, this whole idea with advanced analytics, and maybe you may disagree on my definition, the idea here that we're taking your simple numbers and we're looking at them a different way or that's going to require a little more effort. How do you see that in organizations or in a sense people willing to do that?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1549s" target="_blank">25:49</a> So here's the thing, I'm going to go back to your example here. I'm going to unpack this again. So your example is I've got a sales manager. They're worried about the sales performance of their team and they're trying to figure out where is the best opportunity for them to spend their time.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1563s" target="_blank">26:03</a> Right? So I think of this as a problem of optimization in this situation. We have x number of sales representatives selling x number of products. There's two ways you can sell more things. You either take the existing sales team you have and have them sell more or you hire more salespeople and have them sell more.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1581s" target="_blank">26:21</a> There's only two solutions to this one. I don't think there's any another solution beyond what you have. You have a limited amount of resources on your team.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1589s" target="_blank">26:29</a> Now my thinking here around using that scenario, I'm thinking about okay you define advanced analytics as something that's maybe more predictive or something that's not necessarily a bar chart or a line chart. It's something else more complex in nature.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1603s" target="_blank">26:43</a> And I would argue your statement around that analytics leader or that sales leader of that team. He says they don't need to know advanced analytics. They just need to identify the outcomes and how they get the job done.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1618s" target="_blank">26:58</a> Right there I think is the miss. I think that's the missing data point here for me because even if I can communicate the most elaborate predictive cool interesting report, whatever that may be, let's just imagine theoretically if this report is so advanced that it basically tells you what to do next.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1640s" target="_blank">27:20</a> If I can't communicate that information to the person, if they can't read the visuals that are there, I've missed the mark. And so even back to your point here, you're saying the word advanced analytics. This is where I think I sorely disagree with your point on this one.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1655s" target="_blank">27:35</a> It's not advanced analytics. This is data literacy in your organization and is us as the team developing and making the information that could be in multiple forms. But even if it is or isn't in that form factor, I'm looking at it going, it's not predictive.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1676s" target="_blank">27:56</a> Even if you have just standard KPIs that are being built in front of people, again if they can't understand and interpret what we're trying to give them, you're basically missing it. The point isn't even being made at that point.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1693s" target="_blank">28:13</a> So I just feel like I'm trying to communicate numbers, analytical things, and if I don't have that same understanding with that leader then we've missed the mark. And that's not advanced analytics, that's just data literacy and that's what we need to address.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1724s" target="_blank">28:44</a> Your point blew me so away that my camera broke. That's how good your point was. Like I'm done. Tommy, my camera can't handle it. That information couldn't even process my computer.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1738s" target="_blank">28:58</a> No. So this data literacy thing and this is where I want to dive into because I really think you're hitting home here. A long time ago in a galaxy far away, we actually had this conversation about data literacy.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1751s" target="_blank">29:11</a> Yeah. Do you remember the three things? I don't, I wish I remember the author who talked about this, but there are three things that define a good data literacy in an organization. It's the ability for a team to listen to data or read data, to talk about data. Do you remember the last one?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1768s" target="_blank">29:28</a> I remember argue with data. So this author, the study basically looked at teams and said if we're going to define a healthy data literacy at an organization they need those three elements: to read data, to listen to data, to argue with data.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1786s" target="_blank">29:46</a> So to your point, and this is where I actually do agree with you, regardless if it's advanced analytics or your normal numbers, if you don't have a team who can look at their numbers or look at regardless if it's a pie chart or a spider chart, whichever one it is, if they don't have that ability to be able to talk with their team about it or again argue with it, it's a non-starter on whatever you try to do.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1815s" target="_blank">30:15</a> Let me just pause you right there real quick. I want to drop down on that point you're making. So break my camera again. No, no, I'm trying not to break your camera again.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1822s" target="_blank">30:22</a> But I agree with you Tommy and I think also to your point here, when we're talking about data literacy around I can send you information but even having the same mutual understanding of what is a customer, where do they come from? What do we define our products?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1840s" target="_blank">30:40</a> There's some simple understanding of just data literacy elements that if you don't put those in place, the organization just can't figure it out, you're not going to get anywhere. And so what happens is there is so much data coming in anymore from all the different tools. We have so much data.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1858s" target="_blank">30:58</a> The challenge has now become how do you discern which action should I take that is going to drive the right outcomes? There's so much data and so this is where I like your idea of arguing with data. A lot of times we show up to a data pile of information and say I have assumptions of what this may mean.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1877s" target="_blank">31:17</a> And you really do have to approach it with where I find this works well for me is approaching data projects like a hypothesis, a test, and then come back with the results. What does that mean? And we were doing a lot of hard things in my corporate job a while ago where we were really looking at sales of things and the market would shift.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1897s" target="_blank">31:37</a> The game would change underneath our feet. Someone would offer a discount. Someone would change a product. Someone would change the price on something. So it was constantly a game where we're trying to figure out what everyone's doing in the marketplace and figuring out where we fit and where our customers needed to position their products so that everyone gets maximum profit and we sell a lot of these things.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1917s" target="_blank">31:57</a> If you come in with those assumptions, you have to come in, this is my hypothesis. I'm going to test this.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1881s" target="_blank">31:21</a> Hypothesis. I'm going to test this and does the data support it. You have to be okay to argue with the data. Yeah, it may be wrong. You may have to adjust your mindset around the data.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1890s" target="_blank">31:30</a> And if your company doesn't have the culture or the rigor around being able to do this, then it falls apart. I'm getting goosebumps. This is so good.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1900s" target="_blank">31:40</a> So, I'm going to turn this on its head, Mike, because we're talking about the team not having the data literacy. And I think that really misses the mark here because here's the problem with that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1911s" target="_blank">31:51</a> We think because we have the semantic model and we have the metrics that we have the data literacy. I understand the sales. I understand their member count because I'm the one creating that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1921s" target="_blank">32:01</a> I think that's so wrong. That is so far off the mark because that has no impact on the decision making. Truly, let me give an example and I'll expand on this.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1933s" target="_blank">32:13</a> Disagree wholeheartedly. Disagree, but give me your example and maybe you can convince me.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1938s" target="_blank">32:18</a> Organizations on what actually impacts them and this is what I call the pain point or the pain thresholds. One of the workshops that I do with organizations when we are working on new reports or building their metrics is I ask them.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1954s" target="_blank">32:34</a> And this was a sales team of a certain region and I said if we were building their normal sales report and it was basic, the quota. And I asked them okay, for the next quarter if you had a million dollars and a thousand data analysts working for you, resources were unlimited, what would your report look like? What would you actually see on a screen?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1976s" target="_blank">32:56</a> Their answer was so far off anything that's been created or anything that they've ever asked for. And it was simply like, well, a big thing for us is actually we want to know who's no longer going to be a gold member.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=1988s" target="_blank">33:08</a> I was like, oh, okay. So, well, that's never come up before and a thousand of your tickets that have come in. And this whole idea here about something that was actually very easy to create and this exercise I've done many times.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2004s" target="_blank">33:24</a> Another example is I always go these pain points on what would keep you up at night. And there's a whole workshop around that. Yep. It's the same numbers, Mike. And this is we're dealing with the same numbers, but I'm understanding the data literacy in their world, not just in, hey, we're meeting 80% of goal.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2024s" target="_blank">33:44</a> That's fine, but that's not the data. That's not me understanding as the data analyst what's going to impact them and how they actually are interpreting the numbers because that's the big difference here. So, that's where I'm turning this on its head.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2040s" target="_blank">34:00</a> But I'd argue that conversation you're having, all you're doing is teasing out additional metrics that they don't even know they needed. Right? So in the first one you're talking about, how many of our members are going to downgrade from gold to silver? How many members are going to stop subscribing to whatever we're doing?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2059s" target="_blank">34:19</a> How many members are we going to gain each month based on whatever XYZ marketing activities, right? That's all churn analysis. This is all known stuff. And again, a lot of these things are like that keep people up. Okay?

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2069s" target="_blank">34:29</a> But again, I would go back to the fact that they're asking for just simple reports around what actually happened and what's an expected goal is not actually addressing the real problem.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2082s" target="_blank">34:42</a> It goes back to my point earlier which is that's a data literacy issue. We're not able to actually articulate the problem correctly so that we get the right metrics so we can actually look at it.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2094s" target="_blank">34:54</a> So what should be happening, and I'm going to keep expanding on your scenario and why you tease this out with them, is the churn analysis is a very well-known thing and that's a very great thing you could throw towards advanced analytics.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2108s" target="_blank">35:08</a> To get to the churn analysis, I would argue that's more of an advanced analytical thing, right? That is where the advanced analytics show up. You're doing heavy amounts of statistics. You're doing basket analysis.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2118s" target="_blank">35:18</a> You're doing who is like what are the characteristics of people that have left or not left. There's a whole bunch of features you need to supply to the statistics model to get that out.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2128s" target="_blank">35:28</a> And a lot of people will call this AI. People be like, "Oh, the AI will help." Like that's a machine learning project. Well, yeah, it is, but it's just heavy statistics done at scale, I think.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2137s" target="_blank">35:37</a> And a lot of times, all you need is a really good statistician to figure out the probability of someone leaving or not leaving. That's really what's happening here. We've just fancied it up with all these words.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2147s" target="_blank">35:47</a> So, for that churn analysis, they know they need it, but they're unable to articulate why, like the report and how it needs to be handled.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2157s" target="_blank">35:57</a> So my vision of this would be if you're talking about that with a company, let's put a score on every single individual you have across your whole company. Let's score them all as likelihood they'll churn and then produce a list of those items and then action on that.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2173s" target="_blank">36:13</a> So yeah, you have your standard goals and other things, but you need something in your hands that says this is the short list of people that we think will churn.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2185s" target="_blank">36:25</a> It's our opinion to go directly to them and give them the bonus, the extra thing, the free month, interact with them more because we know if we interact with them more and they open more of our newsletters, if they go to the website more, that means they're becoming more engaged.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2202s" target="_blank">36:42</a> So, I think you're saying the right thing, Tommy, but I would still argue it's a data literacy gap that you're addressing. But again, this goes back to my original point, though. It's not their job to come to me and say we need a churn analysis.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2215s" target="_blank">36:55</a> That's a culture. No, no, it is their job. That is smart as a sales manager. But that's the point though. They're not going to do that. They're not the analytics person.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2229s" target="_blank">37:09</a> If they don't even know what a churn analysis is, then we've got a problem. We've got a different problem because now the business is actually — this is again back to data literacy issues.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2240s" target="_blank">37:20</a> If you have a sales team that's not even thinking about these things and these aren't even the questions that are keeping them up at night, they're missing the mark. That's not the right person for that position in that role.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2248s" target="_blank">37:28</a> And what is going to happen, I'm going to guarantee you because I've seen it a number of times, they're going to focus on all the wrong KPIs. They're going to start hiring more people that produce less and not actually get real value from their team.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2262s" target="_blank">37:42</a> So what's going to happen is we're going to put false things in place because we're not actually looking at what's going to solve the problem.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2268s" target="_blank">37:48</a> If anyone's listening and you're a sales manager, ask for churn analysis. Stay there. You're in a good place. You're in a very healthy place.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2278s" target="_blank">37:58</a> But I think the point though is it was through our conversation that we grew to that. And I think again the data literacy — I didn't know that the churn analysis was important to them. It came from a conversation. Now I have that knowledge on what impacts them and I think that's part of the data analyst.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2297s" target="_blank">38:17</a> So I think the point I'm saying is a lot of times we blame the business for not having data literacy because we're the one building the semantic models but it's just numbers to us. Like that churn analysis, I don't know when a number is at 60% that someone is sick to their stomach because the number is at 60%.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2318s" target="_blank">38:38</a> That to me is data literacy. It's not just I know how this is calculated. That 60% makes someone sick to their stomach and I need to know. That's my point though. That's the point.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2329s" target="_blank">38:49</a> This company doesn't have the metrics they need to be able to do their job effectively. That's my point. That's the data literacy part.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2334s" target="_blank">38:54</a> Even if you communicated the churn analysis for a certain number or you communicated these in different ways, if that business leader can't communicate — again I think the argument here is a lot of business people understand what they need but they're not able to articulate it until they see it.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2352s" target="_blank">39:12</a> Such a good point. Stick on that. So they know what they want but they're not sure how to get the report or the results or get the information out.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2380s" target="_blank">39:40</a> So to your point, right, man, if we could just make sure we have more gold people in the level or we had more, if we could only take 5% of our silver and bump them up to gold and give them a value add that makes them want to purchase more.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2413s" target="_blank">40:13</a> Who is that person? What is their persona? How do we engage them? Those are the questions we should be asking. And again, I'd go back to this is all that data literacy. It's been able to tie what actions can we do right now to drive actual change in those numbers.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2393s" target="_blank">39:53</a> So let me go back one just quick note here real quick. If you go back to what I got formally trained on which started a lot of my analytics career. I went to this company called Delta Associates and it wasn't me.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2425s" target="_blank">40:25</a> It was somebody else who said everyone on the sales and marketing team will go through this one. And so this is where I form a lot of my opinion around this. Right. You need to come in and bring education to your team.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2458s" target="_blank">40:58</a> And to your point, Tommy, these are sales people that are directly talking to customers. We're doing analysis. And the sales team may not actually have the analytics background, but there's someone behind them, an analytics person that's building, grooming, curating the data for the sales team.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2495s" target="_blank">41:35</a> So, we had that front-facing person that's handling the relationship, which would then take needs requests from the customer and then bring that back to the analytics team, which is what I was on. But between the analytics team and the sales team, there had to be a really tight coupling of understanding of where the data came from.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2532s" target="_blank">42:12</a> And when something happened in the market and something was different and sales were down, the numbers were given back to us at the analytics team and we had to make the assumption of here's why your numbers were up or down.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2546s" target="_blank">42:26</a> We had to have this really tight understanding. So Delta Associates has this thing called business insights. It's called black belt level one certification. It wasn't called that initially when I started it, but essentially it's black belt level one certification on business insights.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2578s" target="_blank">42:58</a> And it was category management understanding how your company performs against other companies. And it opened my eyes to oh my gosh, there's people who are doing really good jobs winning in the category management space.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2614s" target="_blank">43:34</a> And there are metrics and KPIs that make sense that I didn't even understand existed. And so this is my point though. My point is there are systems out there in place that your team all needs to be able to communicate on that same standard, that same wavelength.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2653s" target="_blank">44:13</a> There needs to be something out there that everyone understands, hey we're having a problem with churn analysis. This is important to the business. There has to be a full education thing either internally or from an external company where you're saying churn is important. Here's the why. Here's why churn is important and here's what we're going to do about it.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2689s" target="_blank">44:49</a> And so by having that common understanding across all people on the team now you can set up a process that actually you can measure and then you can stand back and say okay after doing this process is this thing helping or hurting.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2704s" target="_blank">45:04</a> And I really think businesses are in this never-ending game scenario where you just need to try something. If you think something's not working come up with a good reason as to why you think it's not working. Build something new. Implement it. Roll with it for a number of months. See how it goes.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2739s" target="_blank">45:39</a> Come back, evaluate, did that work? Do we keep doing it or do we pivot to something else? And I think honestly, just keep trying more and more things until you get to something that is either working and the market will change out from underneath you.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2772s" target="_blank">46:12</a> What works today won't necessarily work 6 months from now. But going back to your Jamie Diamond problem earlier, right, I'm going to go back to this one.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2785s" target="_blank">46:25</a> There's some things that are so universal for years, 50 years, hundreds of years, I don't know. Everyone's been looking at this profit and loss thing. It's so universal. It's so fundamental to how businesses are working. It just has to be there.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2820s" target="_blank">47:00</a> So there's some things that again we need to have that basic level understanding of knowledge. We have to start with the very simple printed out profit and loss statement and then from there we can build the churn analysis.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2851s" target="_blank">47:31</a> Then from there we can build where's our pain thresholds, what's keeping us up at night, what are these other things that we need to then manage and we actually have to build out new business. We have to work that business intelligence muscle.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2886s" target="_blank">48:06</a> Right, we have to get to a point where we have to make the delivery become a part of our culture and then we can make the better KPIs and then we can make the better reports to make sure you move the needle.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2914s" target="_blank">48:34</a> I'm surprised that didn't break my camera. I know we're at time so I'm going to give a quick closing thought here. For me, Mike, I think for the data analyst or our role, it's not enough just to understand the language.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2946s" target="_blank">49:06</a> If I moved to another country, if I moved to Italy and I took Rosetta Stone, it's not enough just to know the words. I think our job is the interpretation of the slang as well. And I think a lot of organizations, they have ways they interpret things.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=2978s" target="_blank">49:38</a> To your point, Mike, there's a lot of things that we need to try. We need to ask different questions. It's not enough just to build reports and understand the data. I need to understand the person. This goes back the old adage about empathy.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3010s" target="_blank">50:10</a> Anything we're going to try, if it goes to advanced analytics or it's just building off the current reports, making the simple report impactful, if we don't have the literacy of the team or the business it's going to be a non-starter.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3045s" target="_blank">50:45</a> So that is my closing thought. Love the conversation today. I think when I focus on the communication of data between people and the team I think I would call that data literacy. That's what I would talk here.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3074s" target="_blank">51:14</a> When I think we talk about advanced analytics, advanced analytics to me are things that are not necessarily visual based. They're more tools, solutions, Python libraries, things that are more behind the scenes where I can take in, ingest lots of data, do advanced things with it, things that people just can't do normally.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3115s" target="_blank">51:55</a> And then again, it dovetails back into once the analysis of that is complete or that report is completed, then we have to step back into the data literacy conversation and say, look, these are the results and information.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3147s" target="_blank">52:27</a> Can we all understand the results and talk about them and have a mutual understanding of hey churn is down 3%, that's a good sign. Do we even understand that churn is up 10%? We should be nervous and sweating bullets about why this is happening. Let's understand the root cause as to why that is occurring.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3187s" target="_blank">53:07</a> So I think this is a really good conversation. I like the debate here between advanced analytics and data literacy. I think that's where we're going with this one. We'd love your comments and see where you think about data literacy and advanced analytics.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3218s" target="_blank">53:38</a> Where do those fit in your organization? Do you have it? Do you need more of it? Let us know in the comments down below. Tommy and I will react to the comments as well.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3247s" target="_blank">54:07</a> With that being said, we appreciate your listenership and we would love for you to share the podcast. Let other people know that you found this conversation valuable and interesting around what you're doing and how you're thinking about Power BI.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3277s" target="_blank">54:37</a> Tommy, where else can you find the podcast? You can find us in Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. It helps us out a ton. And please share with a friend since we do this for free.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3308s" target="_blank">55:08</a> Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips/mpodcast. Leave your name and a great question.

<a href="https://www.youtube.com/watch?v=Ev8OfQWG4VU&t=3337s" target="_blank">55:37</a> And finally, join us live every Tuesday and Thursday, 7:30 a.m. Central, and join the conversation on all PowerBI.tips social media channels. Thank you all so much, and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
