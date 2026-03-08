---
title: "Pie Charts Are Not The End Of The World – Ep. 407"
date: "2025-03-19"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Pie Charts"
  - "Data Visualization"
  - "SQLBI"
  - "OneLake"
  - "OBSTORE"
excerpt: "Mike and Tommy dive into the controversial world of pie charts, inspired by a SQLBI article arguing they're not always bad. They also cover using OBSTORE to load arbitrary files into OneLake."
featuredImage: "./assets/featured.png"
---

Mike and Tommy dive into the controversial world of pie charts, inspired by a SQLBI article arguing they're not always bad. They also cover using OBSTORE to load arbitrary files into OneLake.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/_M76iPs9MtE" 
  title="Pie Charts Are Not The End Of The World - Ep.407"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements


- **[Using pie charts is not the end of the world - SQLBI](https://www.sqlbi.com/articles/using-pie-charts-is-not-the-end-of-the-world/)** — This article is about how rules like “avoid pie charts” can be useful for beginners, but also unhelpful in real-world scenarios with more nuance. Instea

## Main Discussion

The centerpiece of this episode is a deep dive into the SQLBI article about pie charts. Mike and Tommy unpack the long-standing debate in the data visualization community about whether pie charts should be avoided entirely or if there's room for nuance.

### The Case Against Pie Charts

The guys discuss why pie charts have earned such a bad reputation among data professionals. The core issue is that humans are notoriously bad at comparing angles and areas — we're much better at comparing lengths (like bar charts). When you have more than a few slices, pie charts become nearly impossible to read accurately.

### When Pie Charts Actually Work

Despite the general rule to avoid them, there are legitimate use cases. When you have just two or three categories and want to show a simple part-of-whole relationship, pie charts can be intuitive and immediately understandable. The key is knowing when the rule applies and when it's okay to break it.

### Rules vs. Dogma in Data Visualization

Mike and Tommy explore the broader theme of how best practices can become rigid dogma. The SQLBI article makes an important point: rules are guidelines, not laws. Understanding the *why* behind a rule is more valuable than blindly following it. This applies not just to pie charts but to data visualization and reporting in general.

## Looking Forward

The conversation reinforces the importance of thinking critically about visualization choices rather than following rules blindly. As Power BI continues to evolve with new visual types and AI-assisted recommendations, understanding the fundamentals of what makes a chart effective becomes even more important.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=32s" target="_blank">0:32</a> Good morning and welcome back to the Explicit Measures podcast with Tommy and Mike. Good morning Tommy. Good morning Mike, how are you doing these days?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=40s" target="_blank">0:40</a> Oh it's already near the end of March which is something I don't believe in. It's crazy right now, actually it is going by extremely fast and we're coming up on a couple major events for us as MVPs and as the Microsoft Fabric community.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=60s" target="_blank">1:00</a> So stay tuned, there's going to be — well this week will be the last week of live episodes, then we'll head out to some conferences. There's the Microsoft MVP Summit that we Microsoft MVPs go back to Microsoft and talk to them, hang out, have a good time with the Microsoft product team, learn what's going on on the product.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=98s" target="_blank">1:38</a> And then we go right from there, we go right over to Las Vegas and then that's Fabric Conference for 2025, the first one of the year. That's absolutely insane that everything's already starting up.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=128s" target="_blank">2:08</a> There we go, are you excited? You were in Las Vegas last year right? I did, it was a pretty big conference last year. It was a lot of fun, lots of things to do. It was in a very big building, I think it was the MGM Grand area.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=163s" target="_blank">2:43</a> So it had a lot of conference centers and Las Vegas are just huge. I think they're even looking to go bigger this year. I think last year they said they roughly had around 4,000 attendees. This year they're going to more than double that, so we'll see what happens.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=197s" target="_blank">3:17</a> That's wow. Even Ignite had how many people did Ignite have in Chicago? Ignite was pretty packed actually. You and I went to Chicago and the Ignite conference, that was actually a really fun conference. I've never been to Ignite before, that was the first time I was there.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=217s" target="_blank">3:37</a> And it was much — it was a lot less technical, it was a lot more marketing it felt like to me for Ignite. And boy there was Copilot everywhere, everywhere you look there was something about Copilot.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=247s" target="_blank">4:07</a> So you can tell that that's the advantage Microsoft is leaning on right now, the AIs and Copilots. And that's the space that they're really investing a lot of time on because there's a lot of features coming out from it right now.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=281s" target="_blank">4:41</a> And I was speaking to someone at Microsoft, like how is this a pretty big conference, and I think it was about 20,000 people. Like yeah, we want to go back to San Francisco because that's when we were able to get 40,000. I'm like oh my goodness.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=315s" target="_blank">5:15</a> Wow that's a huge conference. Yeah so how many people were in Chicago? I think it was something like 18,000. Wow that's still a pretty good number.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=337s" target="_blank">5:37</a> Yeah but the nice thing about FabCon is it hearkens back to our old days of the Data Insight Summit, when there was a conference and it was just for us. Well I felt like in the conference trend of things, we started out with the Data Insight Summit initially which felt like an Excel and Power BI conference — that's what it was about.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=387s" target="_blank">6:27</a> And then it turned into like this dynamic took over a bit and it felt very Dynamics-centric, which Dynamics is a really big community as well. Yeah it's another really great product that Microsoft produces but it's just not in the same vein as Power BI and data.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=424s" target="_blank">7:04</a> And now that they've moved all the Azure features, pipelines, notebooks, a lot of data engineering things to Fabric, it now feels like we have a proper data conference again. And there's a lot of learning happening, there's a lot of education on best practices, how to do things, how to skill up.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=456s" target="_blank">7:36</a> And I really like that about these conferences. Yes there's definitely some marketing pieces of things that are new and coming out, but it's more about engaging with the product and figuring out how to build things with it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=494s" target="_blank">8:14</a> I was just talking with someone the other day about where Microsoft could probably do better. Microsoft is really good at building tools and products, but sometimes applying those tools into your daily workload, or how do I learn how to use those tools but then apply them with a direct application to what I want to build today right now in my company — sometimes there's a little bit of a gap there.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=536s" target="_blank">8:56</a> And I think the community, the experts, the MVPs really fill in that gap of hey, you are using these tools, here's how these tools can be leveraged to fill those solid use cases. Or when new things come out, like this new thing around translytical that's coming out now, and Microsoft's going to be speaking on it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=571s" target="_blank">9:31</a> Like where does it fit, what are good use cases for it, is someone going to find something impactful to do with a translytical workload? I think that has to be chewed on a bit until someone figures out okay here's some solid use cases, or I'm applying that technology to my problem and here's how it solved it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=610s" target="_blank">10:10</a> So I'm really looking forward to the community stepping in here and grabbing more of the tool, understanding it, building things with it and then coming out with examples and tutorials on how to build these things. That's what I'm excited about.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=640s" target="_blank">10:40</a> You're speaking at FabCon right? Yes I am, I'm going to be speaking with Matias and we're going to talk a lot about CI/CD, so continuous integration continuous deployment. And we're going to talk about just the patterns, like what is it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=677s" target="_blank">11:17</a> I think there's a misnomer by businesses that don't really understand the value of that in general. So we're going to talk about the process, how important the process is, and how it speeds up your development by using something like a CI/CD process.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=710s" target="_blank">11:50</a> That's awesome. And this is — I'm assuming PBI Tools is going to be part of this? Yes, so we're doing two major announcements. My company is — we're announcing our new product called OS which is a Power BI embedded solution. We're going to be launching a program that we built to help companies accelerate their BI department to start embedding reports for external organizations.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=744s" target="_blank">12:24</a> So that's one, we're going public with that at the conference. We're trying to get ourselves into — there's an accelerator program Microsoft has, a Go Big program, Go Big initiative. It's a program where multiple companies have developed embedded software or embedded accelerators all around Power BI, and each company has their own flavor of how it works.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=782s" target="_blank">13:02</a> So we're going to be joining the Go Big program and developing our software through that. You'll be able to see and purchase our embedded accelerator directly through the Azure Marketplace pretty soon. So hopefully we're going to have that landed in the next couple days and we'll have that on the store.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=816s" target="_blank">13:36</a> You'll be able to download it and try it for free for 30 days and then you'll be able to use it. And the other one we're releasing Tommy is the theme generator. We're going a little bit larger with it — it's already out right? It's already out, we're going GA by Fabric Conference.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=851s" target="_blank">14:11</a> So we're currently in preview and we've gotten the last bit of features I think rounded out that we're going to go general availability with it. Everyone can still use it for free for 30 days. We're going to let you have the tool for free, go try it for free now.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=884s" target="_blank">14:44</a> It's in the workloads area of powerbi.com, so if you go find workloads, you go look up Power Designer, you can get the full theme generator experience directly inside powerbi.com. And then you'll be able to try it free for 30 days and if you like all the premium features you can purchase and keep it for long term.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=923s" target="_blank">15:23</a> So anyways, another really interesting product that we're trying to develop. Yeah, a lot of announcements coming for us at Fabric Conference as well. Very nice my friend, that's awesome.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=957s" target="_blank">15:57</a> So let's move over to our main topic, and maybe we'll dip back here to the news. The main topic for today is — Tommy this is a really funny title, I think you did a good job, you outdone yourself on this title. Well I can't take credit for the title — "Pie Charts Are Not the End of the World."

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=991s" target="_blank">16:31</a> So we rag on pie charts quite a lot. Where are good use cases of where to place a pie chart? Do we see good examples Tommy of where we have seen people leverage and use a pie chart? When would be a good opportunity to use it?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1025s" target="_blank">17:05</a> A lot of times when you listen to the community almost everyone's like yeah you probably shouldn't use a pie chart, instead you should go get a bar chart or something else equivalent, a lot more intuitive as to what's going on and you can do a lot better comparing the data. So we'll come back to that topic in a bit.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1063s" target="_blank">17:43</a> Tommy you found a news item here, let's go — what did you find? Yeah so this is from a Data Monkey site, by the way love everyone's blog article names. What we're talking about here is just more ways we can push data to Fabric outside of just the user interface.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1093s" target="_blank">18:13</a> And it's using object store to load arbitrary files into OneLake. And really what this is, is having a few things on your computer, on your terminal — the Azure command line tool and having a Python package for getting your object store created. And what's neat is what Data Monkey has been able to do is simply get the URL for where the storage would be.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1130s" target="_blank">18:50</a> In fact, sure you can list out the files all in the Jupyter notebook or even your terminal if you wanted to.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=577s" target="_blank">9:37</a> Even your terminal if you wanted to, and then uploading your local files to OneLake pretty quickly. This is going from your local machine, basically using the URL of where the OneLake lives, authenticating and then automatically uploading files for yourself.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=594s" target="_blank">9:54</a> That's what the so you don't have to go look at the UI, you can just use code to quickly push files up to the lakehouse, right. Yeah and there's a sample notebook so you can see exactly how it works.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=606s" target="_blank">10:06</a> Especially if you're trying to automate a lot of things. This is when you got to love when people are finding out different ways to connect. Because I think one of the big things that we talked about too was the need for being able to touch Fabric outside of just app.powerbi.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=626s" target="_blank">10:26</a> I think you're very much right on that one Tommy, I would agree with you. Tommy also, this is what I was talking about earlier, the community just figures out really interesting things to build and stitch solutions together.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=640s" target="_blank">10:40</a> It's okay if you're uploading a couple files to OneLake to use the UI, but the power of this command is you can now just with code upload hundreds of files quickly to OneLake and use it there. So I really like this.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=657s" target="_blank">10:57</a> How'd you find this Tommy, is this like a feed that you follow? Yeah just all the normal needs that I have. So we know that the Fabric blog, they're going a little quiet until probably till FabCon.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=689s" target="_blank">11:29</a> Unfortunately which is gonna actually give us a nice little break. Yes, but they're holding back right, they're keeping all the announcements for Fabric. Our announcements for the last nine months have literally been a new thing on the Microsoft blog. Yes, correct.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=692s" target="_blank">11:32</a> Awesome, anything else that you found that's relevant? I think there's a few API changes coming to the admin with Fabric but I think we might have already talked about that. Yeah I saw something from MIM show up.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=704s" target="_blank">11:44</a> So Tommy have you heard about this thing called DuckDB? Oh yeah, I'm not sure what it is and where it's coming from, but MIM is like so MIM is now a Microsoft employee I believe. He was originally from I think New Zealand or Australia area, somewhere down under.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=724s" target="_blank">12:04</a> But he's very vocal about tools and technology and lots of things around Spark and optimization and running things fast. And I've been very impressed with his posts and blogs that have came out.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=736s" target="_blank">12:16</a> He just posted something on Twitter about some other efficient methods to upload files and use DuckDB and it's really becoming quite impressive. I think he was uploading a lot of files on a very small machine, very efficient though.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=750s" target="_blank">12:30</a> Anyways I'm just very excited to see things that other individuals are publishing across the community on how they're using Fabric. Feel like a lot more is coming from notebooks. Yeah that's everything I'm seeing.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=771s" target="_blank">12:51</a> I'm seeing okay, just making sure it feels the same way to you. Oh no no no, yeah yeah yeah. I thought you'd see more especially now with CI/CD with the semantic models, people would be sharing more of their models that way online but no, it's notebooks. Notebooks and still a little PowerShell. I would agree on that as well.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=789s" target="_blank">13:09</a> Anyways I just found that very interesting. Additionally around what other people are trying to find with these things. Anyways moving on, let's go into our main topic today.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=799s" target="_blank">13:19</a> So with that being said, let's jump over to our main topic, an article by SQLBI written by Kurt Bauer. It's also been interesting Tommy, there's a number of community members that are consolidating. Have you seen this?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=813s" target="_blank">13:33</a> Well no, just in general like I'm thinking okay SQLBI is typically Marco Russo and Alberto Ferrari. I don't see much Alberto on the internets these days, a lot of Marco Russo. So maybe Alberto's taking a step back.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=828s" target="_blank">13:48</a> But in replacing him it looks like Kurt Bauer is stepping into the space here and writing some more articles around SQLBI. There's a little bit of a change of wind there around the SQLBI space.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=840s" target="_blank">14:00</a> That's crazy, Kurt continues to write for the Microsoft adoption guide of the road map, he's doing a ton here. Yes, I don't know if he's updating his old blog Data Goblins but man, what some rich resources.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=855s" target="_blank">14:15</a> If anything I would love to dive into his brain on his writing process because he writes a lot. Every time I'm gonna just double check when his last article was written. I think he's slowed down on Data Goblins, I don't think I've seen much in there.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=878s" target="_blank">14:38</a> I don't know how to sort his thing by lists of items, I'll dig around here a little bit. Anyways let's get into the article. Tommy what's the article talk through? Why pie charts are very controversial.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=903s" target="_blank">15:03</a> And why is this so? One little neat fact, I'm going to give you an over under on what year the first pie chart was actually documented that we have known of. Give me a year that you think the pie chart was at least written into the world.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=924s" target="_blank">15:24</a> I read the article Tommy so I know. Ah, I know maybe you missed that part. So no, 1801 is the first time that there's a first use of a pie chart.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=937s" target="_blank">15:37</a> So the gist of it is we've said our things about pie charts. They are one of the most quickly used tools I think by beginners in Power BI and just data visualization in general. And they can be the hardest to understand for users or don't say anything at all.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=960s" target="_blank">16:00</a> And I think that's why the controversy is, even though it looks nice and you see pie charts usually in news articles, you see pie charts in various summaries, but for whatever reason they don't work in Power BI. Kurt goes through that a little but there is a movement online in Power BI around never use pie charts.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=978s" target="_blank">16:18</a> I'd agree, there's other options that you can use instead of a pie chart and I think they actually convey the information much better. I've definitely ragged on pie charts incredibly hard a couple times and I don't really love them. I don't think they're really effective.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=995s" target="_blank">16:35</a> It's funny to me though, I feel sometimes they're very flashy though, like they take up a lot of space on the white page or white canvas of the report. And so sometimes people ask for pie charts to make the page more colorful or impactful.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1013s" target="_blank">16:53</a> But you're not conveying information, but you are making the report look more like a report. Does that make sense? It's more like a visual aspect as opposed to maybe conveying information.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1029s" target="_blank">17:09</a> It's not just that too, it's for most people the pie chart is one of the most common visuals that they've ever seen. So when we talk about that cognitive load, it's probably an easy one to do.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1039s" target="_blank">17:19</a> My gosh, I remember to today my first report I ever built in Power BI and the amount of pie charts and donut charts I had in it. Because you can also consolidate space a bit in terms of your real estate.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1052s" target="_blank">17:32</a> Sure, but yeah and I think for a lot of people there is some commonality or some familiarity with looking at a pie chart. But a lot of people in data visualization feel hey, this doesn't explain anything, it's actually harder to convey what's doing better than what's doing worse.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1072s" target="_blank">17:52</a> And I think the misconception is it's not that never use pie charts. It's as easy as pie charts are to use, they really should only be used in a few situations. Yeah I think Kurt does outline in this article, he's neither promoting pie charts or telling people to not use them either.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1090s" target="_blank">18:10</a> So he's trying to give you an objective view. I think his response really more is around this article particularly, let's talk about what does it mean to not use pie charts, or why is there a phrase in the Power BI community to say let's steer away from pie charts. There's better areas where we can compare numbers or information against bar charts.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1111s" target="_blank">18:31</a> Even in his example that he gives, so at the very top of the article there's a nice KPI card combination with a report. So he's got a KPI card, he has a pie chart at the beginning here and it just shows you some retail and online things.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1129s" target="_blank">18:49</a> It gives you the name of the dimension, retail or online, and then it has 5,000 and 9,000 and then it gives you the percentages, 37% and 63%. Interestingly enough when you look at this chart, all the information you need is written out in text form. Did you notice that?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1146s" target="_blank">19:06</a> So like yes, I can see the comparison of the two pieces of pie on the pie chart, but all the information you're given or that you actually use are the names of the different areas, the number that it actually is, and the percentages.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1161s" target="_blank">19:21</a> And so this is almost the same level of like oh you're just writing out in a matrix or a table, or you're just telling people what the numbers are. The pie chart piece is just some flare that helps you describe between the two areas.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1154s" target="_blank">19:14</a> You describe between the two areas and this is a very simple pie chart. There's only two categories. When there's like eight, nine, ten categories things just get a lot harder to read.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1183s" target="_blank">19:43</a> And it's funny because where did you find yourself? Did you go through a career journey of using the pie chart and then going on the path of the other MVPs and saying I'm done with pie charts?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1219s" target="_blank">20:19</a> No, I think I started down studying what was going on with pie charts. Visualizations in general, I think maybe a lot of times Tommy when I'm throwing down a pie chart on a report I'm not really thinking about what I'm doing to make insights of the information. I'm just trying to put down something that looked good, something that made the page have a bit more color, had a bit more flare to it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1243s" target="_blank">20:43</a> And honestly I'd argue, how I would initially build a pie chart, I would put a pie chart down and not put any text on it. It would just be two colors, right? Maybe a pie chart is something that you use to select a portion of the screen.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1278s" target="_blank">21:18</a> I do think the donut chart is quite interesting. The donut chart is interesting where you have ratios of things that you can use, but it's more like a ring that you're filling or completing. I do think sometimes if you have a donut chart and then you have many, like let's imagine you have like an SVG doughnut chart that's on every row of a table and there's every row of a table is getting a zero to 100% filled out portion. Something like that, right?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1306s" target="_blank">21:46</a> Another one that I've used a lot in some visualizations, is have you heard about the Harvey balls? It's not the Sunburst one, is it? No, no. I think the Harvey balls visualization is like five different circles. One circle is totally empty, one circle is like a quarter filled out, one circle is fully filled out and others.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1328s" target="_blank">22:08</a> So it's when I used to read consumer reports for like, and I don't know if you ever did this Tommy, but I would read consumer reports for like a product, a dishwasher, a washing machine, what score does it get. And it would give all these products and then across all the products it would rank them as far as like quality, efficiency, price, and it would give you rankings on them.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1368s" target="_blank">22:48</a> And they would use these Harvey ball indicators to give you like a visual. When you stand back and all, there basically it's like a pie part. Anyways, but it's like a star rating. Yeah James, thanks. It's like a star rating on something, but then you can see like a one to five scale on a particular topic.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1409s" target="_blank">23:29</a> You know what I'm talking about now? Okay, yes. So to me that's like a pie chart but distilled down to like a matrix of pie charts. And then when I'm comparing across different pieces of pies across the table, that makes a bit more sense because then I can see visually at the color, is it more filled out, is it less filled out, is it 100% or not 100%.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1450s" target="_blank">24:10</a> So to me like parts of a whole make a lot of sense here in my mind when I'm using zero to 100% as success on something. To me that really feels like a good place because then I don't need any numbers. I immediately don't need to know what information is there. It's either a single color that I'm looking at and then the grayed out non-colored areas, the part that's the no. Right, yes versus no, or percent of a whole.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1475s" target="_blank">24:35</a> So that's an area that I like to talk about. Oh yeah, and even with just choosing the pie chart too, and I think what you're talking about too is more, look it looks great on a dashboard. I was beginning to use the pie chart for, and for the sake of just changing up the visuals, had a few bar charts and it's also again from the consulting space.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1498s" target="_blank">24:58</a> But I think where a lot of people actually fall into a trap with pie charts. One, they're not doing anything that you said in terms of giving you the context. Usually they're having just the pie chart out in the Power BI canvas sphere with your line charts, your bar charts.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1535s" target="_blank">25:35</a> And the problem is that they have multiple categories. And this is I think the biggest trap because anytime you're just orbitally showing data with the pie chart it's not going to help anyone. So unless you have some story to tell.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1553s" target="_blank">25:53</a> I was going to save this little nugget but I actually have, for my training with Chuck Sterling, we did an Academy years ago on visualization theory. And we talked about pie charts, it came up, and one of the things that we showed that really in the circumstance of trying to highlight one versus the others.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1595s" target="_blank">26:35</a> So to speak, yeah small amount of category comparison, exactly. Or you just have one to highlight. The example at the time was the data was Apple product sales. So obviously the iPhone was like 60%, so that would be something you want to track. Compared, the others don't matter.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1630s" target="_blank">27:10</a> The other thing too is people try to use the pie chart for precision. And this is something that Kurt also puts out there too. It's like we're gonna have the pie chart so people can see their data, they're not going to be able to see their numbers that way or understand them. Yeah it's true.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1664s" target="_blank">27:44</a> So that's where a pie chart is much different than normal. Yeah, some of the, again with Kurt's articles I just can't speak highly enough of them. When he starts talking about the problems of pie charts he starts going through examples of like hey if you're comparing two categories, let's look at different options you have.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1704s" target="_blank">28:24</a> And so again my opinion here is if you're ever using a bar chart or a donut chart, I'm probably immediately going right to a bar chart or column chart. That immediately makes more sense to me right away, especially if you're comparing two items.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1737s" target="_blank">28:57</a> His scatter chart or the scatter plot that he's using here, I'm not sure if I resonate as well with the scatter chart that he's highlighting there in the first section. So I'd get that, an okay for me, it makes sense.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1752s" target="_blank">29:12</a> But I think scatter charts are really, yes they are showing comparison between two different items, but I really feel like the scatter chart, the scatter plot is really designed for like X and Y correlation. And you're trying to show like a two-dimensional correlation between different metrics, you're trying to find correlation between the X and the Y and is there any trending going on there.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1790s" target="_blank">29:50</a> So I understand what he's doing when he talks about the scatter plot and it, yes it does convey the message of which bubble is larger or not larger. But I tend to start wanting to see in a scatter chart more information than just a single item plotted on a horizontal axis.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1808s" target="_blank">30:08</a> Yeah, and I know the Power BI used, you remember when they used to push the scatter chart with the timeline? You can play, move, they love, they love that. Very not helpful. Interesting capability but I didn't really find much use from building in every dashboard in a day.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1843s" target="_blank">30:43</a> It was in every module and I always skipped it with my training because I'm like we're not doing that. So but the scatter chart is one I think we'll table here. But yeah, no, to your point, my other visuals too. And I've just seen this over and over again where okay so the pie chart's not right.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1868s" target="_blank">31:08</a> Then so you're trying to show, compare. Okay if you're going with the standard visuals in Power BI you're stuck with two types of visuals, at least if you're doing everything without the custom visuals. If I want to show things by category I'm either doing a bar or column chart if I'm just using the standard visuals.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1891s" target="_blank">31:31</a> Now I could use the tree map, but that doesn't seem to have a lot of love either. And you could do a table or a matrix, but that's really what you're stuck with the standard. So I see where some people can have an inclination to go to a different visual just to change it up.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1910s" target="_blank">31:50</a> Yeah, do you see that? I think you're right Tommy. I actually think that's one of the major pushes why to go towards a pie chart to begin with. Is I'm tired of seeing column charts, I'm tired of seeing bar charts. It's the same information over and over again.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1944s" target="_blank">32:24</a> I think but you also have to be very careful. I think you have to really decide what is the insights, what are you trying to produce with these visuals themselves. Right. You could easily replace a pie chart with just an ordered table, a matrix or a table, and just have the information laid out there in table form. And then add a little bit of color or flare, or even like a stacked bar chart or some conditional formatting that shows you how to compare those numbers as well.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1973s" target="_blank">32:53</a> So further on down the article, Kurt goes through and he starts adding like more categories, like hey let's compare more than just three categories. And that's where I think the pie chart really starts falling apart, or the donut chart starts falling apart, because having too many categories on the chart itself it just gets so jumbled. It's a lot harder to read.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2016s" target="_blank">33:36</a> One thing I potentially would throw out here though Tommy, is when we build things in Power BI there is, we're building a data application to some degree, right? So we're trying to think about what's the user experience on how they interact with the report.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2035s" target="_blank">33:55</a> And so sometimes the donut chart or pie chart is a way that you can put colors on the page and use it as a selection tool. So click the color you want and then that can be used to filter other items in the page. So in some cases I think potentially you could use it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1729s" target="_blank">28:49</a> I think potentially you could look at the pie chart or the donut chart as a way of like it's a different slicer. It's a way of selecting things from the page and there are a lot of slices to the pie, right. You can then pick the color that you want and yes that one slice may be larger than the other ones, you really don't know a lot of information about it but you're using it as a slicer basically to help the user pick things on the page.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1752s" target="_blank">29:12</a> I do think that's interesting as a use case. If I'm using that as a use case I'm probably not putting the labels of every item on the pie. I'm probably not putting the numbers down for each item on the pie. You'll get feedback from that, well I would encourage people to use other visuals to convey the information.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1770s" target="_blank">29:30</a> So have you heard what a rainbow chart is? Yeah so it's like a bar chart but then the legend is the same number of dimensions that are actually on the chart. So take a bar chart and then in the bar chart each bar becomes a different color, right. Then you can pair that with okay I have the pie chart that has the different colors in array.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1795s" target="_blank">29:55</a> The pie chart legend is the same as the bar chart legend. So the bar chart carries the naming of each color, what each color means — cell phones, computers, games and toys, whatever the example is. So the bar chart can carry the coloring but then the pie chart can carry proportions and you can select on that and that then lets you select everything on the page.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1813s" target="_blank">30:13</a> Now again people might argue like oh well you already have the bar chart, you could just select the item in the bar chart and the same effect happens. But sometimes you can use a tree map. I've done that a couple times in visuals where the tree map is used to be different sections of colors and you pick the color you want and then that lets you select everything on the page based on that color.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1833s" target="_blank">30:33</a> So that's something I've used a couple times. I think it's a design technique I find interesting as well. One of the best ones I used for marketing was the Sunburst chart, because there was always a campaign, a medium, and a source — or a campaign, a type, and a subtype. Taking the pie chart and grouping down categories all the way down. Yeah, have all those filters in one.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1858s" target="_blank">30:58</a> It's like okay our biggest campaign was campaign A, okay out of those which was the biggest proportion. And that worked really well. You're talking about a decomposition tree though, right? Well that wasn't available when I created it. No no I understand, I'm saying it's doing similar functionality — very similar, parts of a whole broken down. Exactly, makes sense.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1881s" target="_blank">31:21</a> So you brought up something that I find very much the crux of this conversation because it's more than really just pie charts. You can either build a report for the storytelling because people are going to interact with the report, and to your point have a pie chart for the sake of someone selecting something on it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1903s" target="_blank">31:43</a> But too often the reason why people have problems with pie charts, and really to be very frank, the problem I have with a lot of visuals that I see on other people's reports is the lack of context. And so this is something that because I made myself pretty well versed at data visualization in terms of the amount of research — it wasn't my forte when I started but I realized very quickly it wasn't about choosing always the right visual.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1938s" target="_blank">32:18</a> You could have the right numbers and the right colors but if you don't have a context or a threshold on that visual — for example if I'm going to just throw a bar chart out there, well there's got to be something that someone who wants to look at. They're just not looking at all the countries, there's a cutoff point, there's a good or bad.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1957s" target="_blank">32:37</a> And so things like the constant lines, things like conditional formatting — that's honestly something that is a prerequisite for me to add to any visual. Because if I don't have something for that I'm going to work with the stakeholder to talk about where some cutoff is, otherwise that's a visual that you look at once and does not change much.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=1980s" target="_blank">33:00</a> Very often for you to go back next week to monitor that — there's no monitoring that. So sure, to your point, if I build — and Kurt talks about this too — if I build some visuals with that context in mind, it falls apart once people start clicking on and interacting with the report. So if I have certain things for highlighting a color or a line, but a lot of times what happens is once I select something on the report, that context, that visual falls apart.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2014s" target="_blank">33:34</a> It just becomes that one gray color that he talks about. Yeah and so I think that's really the dance that we are doing with Power BI because it's not just an application — you could build it completely like an application, sure. But then you're sacrificing the context side, you're sacrificing the threshold because again it's going to be a little wonky. I think that's the give and take that we really do have.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2041s" target="_blank">34:01</a> I like what you're talking about there. He's also talking about some comparison pieces as well, like when you do year-over-year comparisons. Back to his example, Kurt's doing this online and retail comparison in the article here. The pie chart can only show one period of time. He's alluding to there's only two colors, it's only a portion of a whole.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2064s" target="_blank">34:24</a> When you're talking about retail and online there's less availability for you to show what was it last year in 2018, what is it this year 2019, how do we compare between the two different years. You can put the two pie charts side by side — his example here is I have two pie charts side by side, one showing the prior year and one showing the current year.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2083s" target="_blank">34:43</a> But the charts are so similar in nature, like you can barely even tell there's any difference. They almost look the same — the shape of them, in my eyes, can't tell the difference between the two items. So this is where again going back to like he falls back to bar charts again. And bar charts are great, I think bar charts are an incredible replacement for anything pie chart related or donut chart related.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2108s" target="_blank">35:08</a> He also highlights on this one as well. He also shows you year-over-year comparisons, right. What was the year 2019, 2018, where are you at in your percentages. And you can use conditional formatting like a bullet chart that shows you here's the entire bar for online sales, right. And then with online sales he can then show you a bullet or an item on the list that says how far complete are we, are we behind or ahead of schedule.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2138s" target="_blank">35:38</a> I think that's incredibly impactful on how he handles that. And again to me it just throws one more vote to having just switch it to a bar chart. The information is just so much clearer — there's just so many things that are going against it at this point. I'm like why would we ever build with it, let's just convert them over.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2160s" target="_blank">36:00</a> If you want your report to look a little bit better or more styled or have more flare to it, maybe don't use the donut or pie charts but instead think about how can you enhance the capability of the bar chart. Make the bar chart better, make that pop a little bit better. I think that people would find it's much more satisfactory.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2182s" target="_blank">36:22</a> So here's the question then, because I think in order to take away — again you don't want the report to look weird if someone selects a month and then that pie chart falls apart because it was really context. So that leads me to what about your editing interactions? How often are you doing that? Because I find myself doing that a lot more, actually configuring individual interactions.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2208s" target="_blank">36:48</a> That's a good question Tommy. I gotta be honest, I don't do as much building direct reports myself anymore. My team of people do a lot more directly with the report building. We do a lot more modeling and data engineering now than we have ever before. So we're a lot more on the data side as opposed to building the report side of things.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2228s" target="_blank">37:08</a> But I would say, I know of edit interactions. Sometimes people get questions about it but I don't spend a lot of time modifying the edit interactions between visuals very much. This is something I don't spend — it's probably I know about the feature but I don't use it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2245s" target="_blank">37:25</a> Okay, not very frequently. So I'm finding in order to really — man it's always that tagline "five minutes to wow." Sure, like you can absolutely put something together in five minutes but I'm realizing now that if you really want to have a report that someone's going to go back to again — and I think this is my hill that I will die on when it comes to report building — is anyone can make a report look nice.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2280s" target="_blank">38:00</a> However I think that's a skill of itself too. But more or less, I'm gonna stick to it — hot take. So anyone can align the visuals, choose a theme, make it look nice. But the challenge which is not usually where we get feedback from is are people wanting to go back to that, is there a reason for them to monitor it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2308s" target="_blank">38:28</a> Is there a reason for them to monitor that report? And if you just have bar charts and line charts over the last two years, there's nothing in there for me to go back to. Do you know why I know that? Because my own reports I've looked at that I've built for myself, I realized that I always wanted to filter.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2324s" target="_blank">38:44</a> I'm like well how is the last two weeks doing, how is that compared to two weeks. Now I edit my own reports more than anyone else's, right? And because it's the context. So anyone could put a bar chart there but the challenge, where people don't give you feedback, where they go "oh that bar chart's great because we see our sales by territory."

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2345s" target="_blank">39:05</a> Well would be great if you could actually show the quota on that line as a constant line and darker colors. No one's gonna say that. They're gonna say thanks but it's really hard for them to actually see that.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2358s" target="_blank">39:18</a> And I think Kurt talks about this, the three seconds, 30 seconds, three minutes so to speak. That glance, and that's the challenge that we have to do. And I think that takes a lot more configuration than just putting things on the page.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2372s" target="_blank">39:32</a> I think you have to really digest what you're doing on the report and trying to figure out what you're trying to accomplish. All report visuals should be really focusing on what are you going to do to look at this report and then walk away from it and take action on what you need to do next.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2389s" target="_blank">39:49</a> Right, what is the actionable things you need to walk away from. I think if you start there a little bit with that question — I know it's a bit more of a high level question about what the report's doing — but I think when you look at that lens you can assume with the data that you're getting from whatever system, there's an expectation and there's the actuals.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2407s" target="_blank">40:07</a> Right, so I think a lot of visuals that I'm building more now are really trying to incorporate how do we absorb the expectation of the data and put that right next to where we think we actually are in presenting the data. There's forecast, there's budgets, there's plans.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2424s" target="_blank">40:24</a> To me that's when reporting gets very impactful because I can see if I'm ahead or behind. And then when I'm at a high level trying to understand why we're ahead or behind in a certain area, I want to dive into the particular topic or subject matter or go into the details and understand okay, where are we really behind, what can I do right now.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2445s" target="_blank">40:45</a> Do I need to tell people to go sell more, do I need to reduce costs in certain areas, do we have a shipping issue or manufacturing problem that caused my numbers to go down. Those are the things that I'm looking for because at the end of the day we're in business, businesses are trying to make money on stuff.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2461s" target="_blank">41:01</a> So there's something we're producing, whether it's data or information or products or shipping. All that has to get done and so as the orders come in we're always looking to see how much can we fulfill. Order fulfillment is like a really big item in a lot of companies.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2475s" target="_blank">41:15</a> What's the percentage fill that we're doing on all of our orders — huge. That's a very key KPI that people need to look at by customer, by product, by manufacturing plant, whatever you want to call it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2491s" target="_blank">41:31</a> But I think when you step back and you look at the bigger picture of what we're trying to measure, now you have to go to the next level of this which is I think where Kurt's spending a lot of time here — how do you convey that information on visuals.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2506s" target="_blank">41:46</a> And I think to me there's this moment of when people know what they want, you can give them a report. But if people don't know what they want, it's a lot harder to give them a report.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2518s" target="_blank">41:58</a> Yeah, oh my God, right. I feel like I'm doing a lot more of building a table in Paginated Report Builder to let people export data so they can just get access to information, as opposed to looking at how insightful the information is.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2531s" target="_blank">42:11</a> How do I walk away from this report and take action? Sometimes you don't have that. Sometimes you have people that are consuming your data that they're not there yet. I think there's also a part of this that's a bit of a data culture thing, right?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2542s" target="_blank">42:22</a> If you gave — like Kurt halfway down the article here starts showing you waterfall charts. Which, one, I really like waterfall charts, I think they're pretty cool. Tommy, if you started giving your customers waterfall charts, how many people do you think would immediately — oh no, no one.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2560s" target="_blank">42:40</a> Well not no one, but I think it's a bit more of a learning curve compared to other charts. So I think in the financial world, waterfall charts are very well used. I think it's just about literacy, right? We're trying to communicate to another team of people about data or things that are about data.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2579s" target="_blank">42:59</a> One thing I like about — we've talked about this a lot, a number of times, Tommy, on the podcast — it's the IBCS, International Business Communication Standard. IBCS is a standard by which you can use to communicate data to other people.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2595s" target="_blank">43:15</a> And the neat thing about this is it's like a known quantity. You can train people on the IBCS standard and say here's what this means, here's how to interpret these visuals. And so a lot of times I think we throw visuals and reports to people and they don't have any background as to what you're trying to do.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2612s" target="_blank">43:32</a> So we as report builders are trying to build all the information around what does this chart mean, here's the visual, here's how to read this chart. If it's doing this shape or pattern it means this, if it does this shape or pattern it means that. So you're trying to explain what the data is doing by the visual.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2629s" target="_blank">43:49</a> And so sometimes that story or what you're trying to convey isn't directly related to the customer. No, it's up to them to understand it. Anyways, very random tangent there around that. That's usually when people do pie charts because they're not sure what to do.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2644s" target="_blank">44:04</a> And again, to me, with this whole debacle and these arguments that everyone has with pie charts — it's really because I just don't think people are putting the context in them. Nothing's wrong with a pie chart. What's wrong is really thinking that it's a solution for most — it has more uses than people think.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2666s" target="_blank">44:26</a> I will argue, when I go to the IBCS standard and start looking at all the images or diagrams on there, are they all pie charts? Oh, there's not a single one. That's my point. They don't use any pie charts. They're looking at clear, how do you communicate clearly to other people.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2682s" target="_blank">44:42</a> It's all about bar charts, a lot of gray and black numbers. And then it's all about are we performing above or below our standards. So we have a single line and there's red or green. So it's very — maybe not simplified, but I think it's a really clear way of seeing information conveyed.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2705s" target="_blank">45:05</a> And I really like the IBCS standard, I think it's actually very solid. It makes a lot of sense to me. And I think if you spend the effort, if you're going to spend the investment of using Power BI and put it across your company, I think you would want to spend some time with your people consuming reports and running them through some training like this.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2723s" target="_blank">45:23</a> There's actually IBCS certification. So there's standard business practice you would want to use to learn this stuff. I know someone on GitHub who's actually created a template and a theme off of that. There's actually a whole company that's run off of it I believe, right? On Power BI theme and template, they've taken the IBCS and made a theme out of it and a template that you can use on GitHub.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2752s" target="_blank">45:52</a> Well I've seen some people do native visuals, on Reddit I've seen some people doing IBCS standards with SVGs or other visuals there as well. People look at Deneb — the Deneb custom visual does a great job using IBCS standard type things as well.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2770s" target="_blank">46:10</a> I would argue, if you don't know what IBCS standards are, go look at them, go read about them. Learn up on what they are, it's a very well documented area. You can go get training in it if you want. I highly recommend anyone who's interested in upping their game in visualizations or upping their team — this is a great way of just saying here's a program, run people through the program.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2794s" target="_blank">46:34</a> I think in general you would raise the analytical knowledge of the team up substantially by just understanding how to use this tool to your advantage. Dude, I cannot agree more.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2807s" target="_blank">46:47</a> So there's IBCS. I guess with other visuals then, so I'm going to slightly zag here. We've talked about pie charts pretty in depth and I think we could obviously go through each and every use case that Kurt put on here, but the bigger thing is the visuals that we choose — there's some ones that are more widely accepted by people in Power BI.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2835s" target="_blank">47:15</a> And also there's some that work better because we have to account for the fact that you can interact with the report. I think that's just a big factor. How, where do custom visuals come in? Because there are a few that do have that pie chart or that type of functionality or that type of look.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2854s" target="_blank">47:34</a> You mean would I build a custom visual that uses a pie chart? No, would you use a custom visual — like if you want to in a sense show your data in a different way, you want to get away from bar charts, where are you going?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2872s" target="_blank">47:52</a> I think in general I'm trying to find visuals that I'm using. Again, I'll always start with —

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2882s" target="_blank">48:02</a> I'm using, I again I'll always start with common standard visuals first. One of my rubs around Power BI right now is there's a lot of great people teaching how to make really stylized visuals or visuals on a report page, but it takes a lot of time to click all the buttons and you got to know where all the settings are and you have to really adjust the bar chart a lot.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2902s" target="_blank">48:22</a> So if you want to create a highly stylized bar chart with a lot of extra features on it and maybe some conditional formatting, you've got to know how to write DAX in a conditional formatted way. You've got to be able to use all the features of it and there's just a lot of clicks.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2922s" target="_blank">48:42</a> One of my pushbacks or friction areas that I think I see is anytime you want to make a bar chart look better, immediately I'm spending a lot of time trying to dial in the style of that thing and I'm taking a lot of extra effort. There's nothing easy about it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2955s" target="_blank">49:15</a> I can look at people building things online but there's no way to get that pre-built styled thing into my report. That's a problem for me, I don't like that. So am I using other custom visuals? I'm going to try to start with the standard visuals first.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2970s" target="_blank">49:30</a> I'm going to try to customize them as much as I can to get it to do what I want, and then only after that then I go onto the marketplace. And usually I'm looking for visuals that are useful or that I can understand.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=2985s" target="_blank">49:45</a> I can't tell you the number of times I've downloaded a visual from the Marketplace and I don't understand how to use it. I put data on it, I do what I think it should be working and it doesn't graphically show what I want. So I've wasted a lot of time just digging through visuals on the marketplace trying to use them and not understanding how they work.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3024s" target="_blank">50:24</a> To me it's a miss. So I typically default to like if I know what I want to build, I usually default to using Deneb. It's certified, it has really big flexibility, and I'm comfortable writing code and writing JSON. So I like that aspect of it and I feel like that's a visual that I can style anything I want.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3059s" target="_blank">50:59</a> Let's say you have a bar chart and you want the top left corner of the bar to be rounded. Yeah you can do that and you can drive that based on a formula if you wanted. There's so much flexibility in that visual. If I can dream it I can pretty much come up to it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3075s" target="_blank">51:15</a> Now that also invokes another area of frustration, is like I don't know what I'm doing sometimes. I know it can do it, I just don't know how to make it work. So that's another part that I have a problem with. Really nice to have a copilot within Deneb especially.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3091s" target="_blank">51:31</a> Or if there is an interactive, because it's built off of Vega right. Deneb, Vega and Vega Lite, there's two different specifications. So Vega Lite is a simpler version of Vega but it's all built off of Vega which is an open source grammar language for building visuals. You just define what you want the visual to look like and bind data to it basically.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3113s" target="_blank">51:53</a> Remember I think you guys built the Charticulator live visual that you could actually build online. Well Charticulator was made by Microsoft Research. It has since been unsupported by Microsoft so they don't support it anymore. The community has since picked it up and Ilfat is a community member who's building the Charticulator app right now, currently actively adding to it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3138s" target="_blank">52:18</a> We host a version of it so on PBI Tips you can go to charts.powerbi.tips and we host a version where you can build visuals online. You can download it and you can upload them to your desktop and use them in Power BI Desktop.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3151s" target="_blank">52:31</a> We're really committed to making the styling of things easier for users to build, and we're continually trying to invest more into helping users build better and better visual styles on top of things.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3164s" target="_blank">52:44</a> I'll tell you what, it would be amazing if, I need to look for a Vega tool out there because I've been using Deneb more but the problem is it has pretty good IntelliSense in terms of the different things, but oh my gosh if there are terms you don't know, like blocks or modules, and I'm like what is this, why can't it go here.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3190s" target="_blank">53:10</a> So stay tuned to that one Tommy because one thing that we're doing at PowerBI Tips is we're actually developing an open source web editor for Deneb. We're really pushing into this one. I'm investing a lot of effort and working directly with Daniel Marsh-Patrick who's the developer of Deneb.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3209s" target="_blank">53:29</a> He's taken the Vega spec and the Vega Lite spec and pushed it into the Power BI Desktop application. But we want to grow the surface area of Deneb, what it can do, where it can be used.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3219s" target="_blank">53:39</a> So we're actively trying to build, and Tommy imagine this right, Deneb is a great tool, you're getting stuck on, man I really wish I had an example of how that code worked, or I wish I had an example of how to build this thing. So we're trying to build a full community around a gallery of Deneb templates that you can go use and pull them in.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3236s" target="_blank">53:56</a> Make it easier for you to build those custom visuals on the fly with examples to start from. So that is exactly what I want because then I could just basically get my copilot right next to me, go I don't know what a block is or module.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3255s" target="_blank">54:15</a> Well why not, being the editor in Deneb, if we're building a web application why not let you bring your own Cursor or OpenAI or ChatGPT, o3, right? Why not let you bring those to the tool and let you just add them in. Hey link your API key here, boom it just starts talking to the engine for you.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3276s" target="_blank">54:36</a> So we're thinking about those things already. We're trying to build things that are going to be useful there. So just stay tuned, there's going to be more things coming out from PowerBI Tips that will hopefully increase your expertise around building custom visuals.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3289s" target="_blank">54:49</a> I do know that Deneb can build IBCS standards right, people have already been doing that. So there's actually examples out there. Deneb IBCS standards, but you can go build those things right into the tool.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3305s" target="_blank">55:05</a> The reason why I like this is you don't need to, when you do this, if you build IBCS type standards into Deneb, it's a free visual. You don't need to pay for it. How great is that?

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3319s" target="_blank">55:19</a> No it's amazing because I look at Kelly Kosco right, and Daniel Marsh-Patrick does an amazing job on his site expanding all the resources and examples people have written online.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3335s" target="_blank">55:35</a> But yeah as much as Deneb is cool and I like Deneb, we cannot expect everyone to... But that's my point though, my point is the tooling of Deneb needs to evolve to be more like what Kurt's describing in his article here.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3350s" target="_blank">55:50</a> Right, look we need examples to start from. And even looking what Kurt's been doing, in the examples that he's been providing here, he's provided some great examples of bar charts and waterfall charts and there's a lot of other things. He's already styled these visuals heavily to get them to be used in this article so they look good, the color palettes, the borders, the edges.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3376s" target="_blank">56:16</a> Nothing wrong with that, it's just like I want my visuals to look like that as fast as possible with not a lot of clicks. How do I do that? And so to me that's where I struggle a little bit, the standard visuals and the speed in which I can develop and build out things. It's just not very useful.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3393s" target="_blank">56:33</a> So I think this article is incredibly important. I really like what Kurt's doing here, he's got some very great examples. Towards the end he starts doing some really cool examples of like an all black visual so the text is white, the doughnut chart is white and gray, and he's got on a black card. It looks really good.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3412s" target="_blank">56:52</a> So I think the ability here for you to make some pretty cool looking stuff. And maybe when you're moving away from bar charts and conveying information and you need just some flare, some pizzazz to the report, I think the bar chart, the column charts and the donut charts are an area where you can add a little bit of flare to your report.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3437s" target="_blank">57:17</a> So anyways, yeah I like that. Those charts are good types there as well. Anyways great article, I'd highly recommend everyone to read it. It's a good article to chew through here. I think Kurt gives us a lot of things to think about and I don't think it's changed my mind. I still think I'm not going to use pie charts and donut charts as much as possible. I'm going to stay away from it.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3459s" target="_blank">57:39</a> All right, that being said, we thank you very much for listening today. We hope you found this conversation interesting. A whole hour on pie charts, wow, who would have thought.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3469s" target="_blank">57:49</a> But that being said, where else would you like to get this podcast? You can get it here right on PowerBI Tips. We're trying to do great content, things that you might want to share with other people. So if you like this content, if you felt this was valuable to you, please go share it with somebody else. Let them know that you also found this content engaging.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3487s" target="_blank">58:07</a> Tommy, where else can you find the podcast? You can find us on Apple, Spotify, or wherever you get your podcasts. Make sure to subscribe and leave a rating, it helps us out a ton. You have a question, an idea, or a topic that you want us to talk about in a future episode, head over to powerbi.tips/podcast, leave your name and a great question.

<a href="https://www.youtube.com/watch?v=_M76iPs9MtE&t=3504s" target="_blank">58:24</a> And finally join us live every Tuesday and Thursday 7:30 AM on all PowerBI Tips social media channels. Awesome, thank you all so much. We appreciate you and your listenership. For today have a great week and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
