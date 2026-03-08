---
title: "Journey of a Citizen Developer – Ep. 402"
date: "2025-02-28"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Citizen Developer"
  - "Career Growth"
  - "Power BI"
  - "Microsoft Fabric"
excerpt: "Mike and Tommy reflect on the journey of a citizen developer growing with Power BI. They share practical advice on leveling up from self-taught report builder to trusted data professional."
featuredImage: "./assets/featured.png"
---

Mike and Tommy reflect on the journey of a citizen developer growing with Power BI. They share practical advice on leveling up from self-taught report builder to trusted data professional.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/QtK5tZPy5UU" 
  title="Journey of a Citizen Developer - Ep.402"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- **[Fabric February 2025 Feature Summary | Microsoft Fabric Blog | Microsoft Fabric](https://blog.fabric.microsoft.com/en-US/blog/fabric-february-2025-feature-summary/)** — Welcome to the Fabric 2025 update There are a lot of exciting features for you this month! Here are some highlights: In Power BI, Explore from Copilot visual answers which lets you do easy ad-hoc exploration. In Data...

## Main Discussion

Mike and Tommy dive into what it means to grow as a citizen developer in the Power BI ecosystem — someone who didn't start in IT or data engineering but found their way into building reports and solutions for their team.

### Starting Out — The Accidental Analyst

Many citizen developers stumble into Power BI because they were the "Excel person" on their team. They start building reports out of necessity, not because it was in their job description. Mike and Tommy discuss how this organic path is actually one of the most common entry points into the data world.

### Leveling Up — From Reports to Data Models

The real growth happens when a citizen developer moves beyond dragging fields onto a canvas and starts thinking about data modeling, DAX, and reusable datasets. Tommy and Mike talk about the inflection point where you stop copying and pasting visuals and start designing proper star schemas and measures.

### Building Trust and Credibility

A big part of the citizen developer journey is earning credibility within your organization. Mike emphasizes that it's not just about technical skills — it's about understanding the business, communicating insights clearly, and becoming the go-to person that leadership trusts with data-driven decisions.

### The Path Forward — Community and Continuous Learning

Mike and Tommy encourage citizen developers to engage with the community, attend events like FabCon, pursue certifications, and keep pushing their skills forward. The Power BI ecosystem rewards curiosity and persistence, and there's never been a better time to grow your career in data.

## Looking Forward

The citizen developer path continues to expand as Microsoft Fabric brings more tools within reach of business users. Mike and Tommy encourage listeners to keep experimenting, stay connected with the community, and not be afraid to step outside their comfort zone — whether that's learning DAX, exploring Fabric notebooks, or presenting at a local user group.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=29s" target="_blank">0:29</a> Good morning and welcome back to the Explicit Measure podcast with Tommy and Mike. Hello everyone and good morning, oh my gosh we're back, we are back yet again.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=39s" target="_blank">0:39</a> So sorry for the slight delay today, technical issues all over the place. Couldn't get into the app, couldn't get my headphones working, had to use a backup pair. So hopefully everything will run smoothly for the rest of the episode, we'll see what happens, who knows.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=51s" target="_blank">0:51</a> I'm going to blame the weather in the midwest right now. So I don't know if you've heard of this before but there's actually six seasons in the Midwest and they're all around spring.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=64s" target="_blank">1:04</a> Yeah so there's winter, then there's winter, almost winter, cold winter and summer. The one we're in right now is called the Spring of Deception.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=81s" target="_blank">1:21</a> I could see that, I've never heard that before. It's warm but it's not going to be warm for long, right? It's going to drop back down. So that's what I'm going to blame any technological issues on, wires just can't handle the changes.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=96s" target="_blank">1:36</a> Yes, true statement, that's funny. All right well jumping in, today's topic is a really good mailbag that came from our audience. So we really appreciate the questions or the comments that are coming from our audience, thank you very much.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=106s" target="_blank">1:46</a> Keep supplying us with great content, this is wonderful. We're really happy to talk about this one, it's all about the citizen developer. I don't think we got a name on this one but just talk through things that they have done as a citizen developer.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=118s" target="_blank">1:58</a> Where they start, what projects do they move into, and how they've grown in their company. So we're going to unpack that a little bit, maybe Tommy and I will share some of our journeys as well around how we have learned things, where there are challenge points, and other areas around that as well.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=133s" target="_blank">2:13</a> But before we get into that let's do some news. There is a new update from the Microsoft Fabric blog which just came out which is awesome. Let's dive into that one, I'll go grab the link here, I'll put that in the chat window for those who want to check out the most recent blog.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=148s" target="_blank">2:28</a> But the Fabric blog was just posted. Anything out to you Tommy? Yeah there's a few I'm going to quickly touch on. One that I'm liking to see, I don't think it's a major major feature but I think it's really important where we're getting with AI.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=161s" target="_blank">2:41</a> There's a section now with Copilot when you're in reporting for Power BI where it's actually going to show you how Copilot arrived at its answer or its response. This is really important to me because I think a lot of times when I want to say hey give me a summary, what was the order quantity last year, it shows you a number.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=181s" target="_blank">3:01</a> And I think from a trust point of view, if we struggle with getting people to trust data and that's a constant battle, a constant uphill battle, that's exponential with AI. And I think the fact that this is coming where it's going to show you, hey we used the subcategory and we used the metric order quantity and here's the filters we applied.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=203s" target="_blank">3:23</a> Because if I don't know what that number is or I can't trust it, I'm not going to use Copilot ever. Or worse, if I think it's right, tell someone that number, they're like that's not what our quantity was last year. I'll never go back to it, I don't care what features update, I'm never going to go back to it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=220s" target="_blank">3:40</a> So giving someone the context of here's the filters we applied, here's the metric that we used, and allowing people to have confidence here. I know it's not a major feature but to me I think this is very significant for the trust and the actual use of it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=235s" target="_blank">3:55</a> This is interesting that you bring this up Tommy. I'm just trying to unpack this a little bit around Copilot. So let me just give you some context, like when you use a Copilot, there's been a couple Copilots I've used over the years and it's been very like not Copilot per se but just general AI things in general.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=254s" target="_blank">4:14</a> There's always this moment of like aha or like wow that really impressed me, like I didn't think it was going to do that. And I had another one of those moments, I just have been playing with the new Grok AI which is out there. They just released their Grok 3, I believe it has this now voice thing that you can talk to it with voice and it reads things back to you.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=274s" target="_blank">4:34</a> It's almost like talking to someone as opposed to just randomly chatting away to the chatbot. But in lieu of that I was extremely impressed with there's this feature that says think or thinking.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=289s" target="_blank">4:49</a> So you give it a topic and say think about this, and it has some pre-prompted things. Again the pre-prompt things that they give you, they're like here's examples of what you could make it do. But you sit there and watch it think through things and it was very interesting on how it unpacked stuff.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=311s" target="_blank">5:11</a> I basically told it, so for example I said hey let's try and find a side job, a side gig right. So I said imagine I'm a person who lives in Wisconsin who needs to make X number of dollars per month. I want to find a side job or gig that I could do that would not include weekends and just list out a couple criteria.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=332s" target="_blank">5:32</a> Oh I like that. I said think about this and it thought about the answer and then what it did, it walked through and said well okay here's my reasoning for this. They mentioned non-technical skills so I wasn't going to push you into a technology job, here are some interesting jobs that seem lucrative in your area.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=347s" target="_blank">5:47</a> But that didn't really fit what you were asking for initially and went through a whole bunch of things and then came up with an answer that I thought was really reasonable. And it could see it reasoning its way through and said here are some options, here's a price range of what you could expect if you're going to do a side job or gig or something.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=362s" target="_blank">6:02</a> I was very impressed with how well it was. But that's the moment though, like when you use something new like this you have a very small window to impress somebody with what the AI can do. Because if the AI gives you just crap results you'll try it once or twice and then you'll never touch it again.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=382s" target="_blank">6:22</a> Like if it doesn't really wow you or bring that aha moment right away at the very beginning, I'm not going to touch it again. Yeah and I think that's a really big point because with any technology and I think especially in the space we're in now, there's a difference between the random browsing and finding something interesting or putting your money where your mouth is so to speak.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=402s" target="_blank">6:42</a> Where you're actually going to then actually apply that and trust that technology so to speak to use it. Just like with this Copilot feature where okay I found the number but am I gonna email someone that number, say our number is this, and am I going to trust that that's right.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=416s" target="_blank">6:56</a> Because I don't want to come back and go actually that number is completely off, where'd you get that from. Because now that looks bad on me and I'm not going to blame Copilot, that's my chair on the line right. Exactly right.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=430s" target="_blank">7:10</a> So yeah I also saw something recently show up. Copilot is just riddled all over Fabric and Power BI at this point. And again I'll just keep saying it, I don't know who's listening to this podcast. Microsoft if you're even listening, I don't even know anymore.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=445s" target="_blank">7:25</a> Like I really don't like the fact that Copilot is only available at F64. You put it everywhere in the product and people want to use it. I'm even actually having customers now asking me like how could we use Copilot, what's the threshold, what's the barrier to get in. And I said it's an F64 and they're like yeah that's out, we can't use it, we're not going to put it in places.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=462s" target="_blank">7:42</a> But it's incredibly powerful and I'm now actively seeking ways to use other Copilots that are free or ones that I could actually pay for that are not linked to Fabric anymore. Like I'm actively seeking how can I pull all of my notebooks out to my VS Code and use the GitHub Copilot that I already paid for.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=485s" target="_blank">8:05</a> Like why can't you, me as a user, why not give me the option to get into Fabric and sign in with GitHub Copilot and then let me use that everywhere I want to use it. Everywhere, yeah. Yeah I could be as heavy and intensive if I want to with that too, which is crazy, there's no limit.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=498s" target="_blank">8:18</a> I know Microsoft, I'm gonna second this. Yes, it's super helpful for me. You own them Microsoft and yet I can't use them in the product. So I'm actively trying to get my stuff out of Fabric a little bit to some degree, especially when I'm doing very heavy code because it's just so helpful to me to have that co-programmer with you to work through things.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=517s" target="_blank">8:37</a> I need a function that does this, no I don't like that, reformat it. Just a lot of extra help there. The reason I bring this up is I also saw this show up in a SQL data warehouse. SQL data warehouse was asking Copilot, you could talk to Copilot in line with the SQL engine and ask it to build this table, group by this.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=534s" target="_blank">8:54</a> Like you could just tell it to write the code for you. And it had a little message at the top that said hey just FYI Copilots are not always right all the time, you still need to check your code, don't trust all the time. Like I understand, I think that's going to be a disclaimer they're going to have to put on top of everything.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=548s" target="_blank">9:08</a> But at the end of the day I was like I can't use this feature, it's not useful to me if I don't get it all the way down to the F2 level. Yeah so anyway it's the same like the egg epidemic that we have, guess what I'm eating bacon. If eggs are gonna be $12 I'm eating Cheerios.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=567s" target="_blank">9:27</a> So I want to use it man, I want to apply it to every client but it's not even an option or a consideration at this point. But I agree, I still think it's great what they're doing with the product, I think we'll eventually get there where it's going to be accessible to more people.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=583s" target="_blank">9:43</a> Just to make it an add-on for sure. I'm not gonna rant on that. Yeah I don't know, it's just not cool the way it is right now. You're pushing it so hard yet it's so limited to what people can access. It really feels like you're trying to just get people to pay more for Copilot to get you up to the F64 level. Hot take.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=601s" target="_blank">10:01</a> I guess it is what it is. If I'm Microsoft that's what I'm doing right, here's a really cool feature, look you need to get to F64 to use it. But I just don't like the fact that, let me decide as the user how much to throttle this by. They could put controls in there right, limit Copilot by user, how many prompts you get a month or something.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=625s" target="_blank">10:25</a> Something like that, it's got to be in there somewhere. And that way I can reasonably use it because it's not like I'm using Copilot all the time anyways. I'm using it in bursts right, I'm in this notebook, I'm doing this work, I'm trying to figure something out, that's what I need a little bit of assistance.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=638s" target="_blank">10:38</a> And so now what I find myself doing is literally copying the code out, moving it to a different notebook, using a different Copilot on it, get the answers I want and then bring the code back. Just a whole bunch of steps that are just not useful. Yeah so that's my feature pick.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=652s" target="_blank">10:52</a> Yeah so that's mine, feature thing. So Mike do you have anything that stands out for you from the blog?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=656s" target="_blank">10:56</a> Yeah I'm always happy, this is a very minor thing but I'm always happy when they start saying full CI/CD support for T-SQL notebooks.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=670s" target="_blank">11:10</a> GitHub integration aren't perfect but it does a lot of work for me when I need to move things between environments. I'm more and more becoming a fan of using CI/CD patterns more and more around Git and integration with Git.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=701s" target="_blank">11:41</a> I just think it's very relevant for me so that's one I really enjoy. Some things that have been helpful for me, again I spent a lot of time in notebooks in general.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=729s" target="_blank">12:09</a> So there's been a little bit more around notebook snapshots enhancements. Oh yeah so that's another one, when you run a notebook and the notebook fails or doesn't run correctly or the cell fails in the notebook, it's very difficult for me to go back and retroactively debug what happened.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=766s" target="_blank">12:46</a> What was the problem, was there a data issue in one of the cells of the notebook, and what was the error message that came out from that. So now what we're able to see is we're seeing better snapshotting of the notebooks.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=782s" target="_blank">13:02</a> And let me just read the note here real quick. Snapshot tree Explorer now gives you a hierarchical view making it easier to understand the parent child relationships and track parent notebooks and triggered child notebooks through the utilities.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=813s" target="_blank">13:33</a> They're also having snapshots for running notebooks. Users can now access snapshots and runs of a pipeline or the direct schedule when they are still in progress.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=845s" target="_blank">14:05</a> So this is also something that I think is incredibly important. When the notebook is running or when it's doing its job, if you hit run or a scheduled job is running, I want to drop into the notebook and watch the notebook do its work like right there. That's very common, a lot of other Spark tools do this already.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=883s" target="_blank">14:43</a> So to have that availability to me is great. My only gripe still with the reporting or analytics or metrics around the notebook experience, there's still a bit of a, in my opinion, it's a weakness around I need to know the network traffic, the compute consumption, and the memory consumption.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=919s" target="_blank">15:19</a> This is something that's probably just very specific to me at this point. Because well here's what, let me tell you, no no I agree I think it's more common than you think.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=928s" target="_blank">15:28</a> Well I think people need to see this because if I'm on a small cluster, fine, but I need to understand what's going on at the cluster level. Am I compute constrained, am I memory constrained?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=963s" target="_blank">16:03</a> But the options here when you go into Fabric, you don't really get any other option than a memory optimized virtual machine. I don't get a compute optimized virtual machine. If I go over to Databricks I have the ability to do a memory optimized, a compute optimized, I can do some caching they have on there, some extra bits there that are around caching things, you can even get a graphics processor unit.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1007s" target="_blank">16:47</a> So if you need a GPU enabled cluster you can get that too. So I understand that Microsoft's trying to simplify the experience but I feel like I get more options other places.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1038s" target="_blank">17:18</a> And so if I'm really tuning my notebook to run correctly through my jobs, I really do need to understand am I using a pure Python notebook on a single node cluster, maybe I should be using a Spark notebook, maybe the T-SQL is more efficient. I don't know, these are, I think they're literally switching different compute engines behind the scenes for these different processes.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1078s" target="_blank">17:58</a> Do that make funny? No it's funny you say that because they give you the all or nothing approach. I don't remember exactly how to get there but in a given notebook run you can actually go to the Spark portal and it's a whole different website.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1109s" target="_blank">18:29</a> Have you done this before? Yeah that's the Ganglia UI, I believe. Yeah the Ganglia UI, they don't even have all of it. Like if I go to other Spark instances, again I'm running Databricks, clear I'm not gonna be bashful, but I run Databricks, I go to Ganglia, I have a very clear view. Here's all the clusters, all the machines running.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1148s" target="_blank">19:08</a> I can see the nodes turn on, I can see the memory ramp up when they go bigger or the machine scales up. Right, what I want to see, that's what I use as my barometer of hey is this cluster running well. And they give me some level of that but it's not all the way there.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1184s" target="_blank">19:44</a> So I'm happy to see any improvements around visibility, what's going on in the Spark engine. I've been getting a lot of feedback from other people saying the Fabric experience is just so much in there, there's so many things to know how to do.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1221s" target="_blank">20:21</a> It's very rare to find someone who's built solutions in all the areas inside Fabric. And I would agree, you're either the Power BI expert, you know what's going on there, you need to have experts in notebooks and data engineering, and now you're going to have to have experts in real time event hubs, all this other stuff that's in there as well.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1257s" target="_blank">20:57</a> So there's a lot of things to get your head around. Which is nice, it is the Swiss Army of data right now. But is it really easy for people to get started? No I don't think so, people just gonna need more time to get used to it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1291s" target="_blank">21:31</a> Yeah and I love it, I love, I see where they're trying to go with a lot of those. Into your point there's some incremental updates here or features that you're like we're getting there, we're getting there.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1321s" target="_blank">22:01</a> Well I think we should, the last one I just want to touch on because I think it's personally, I think it's you and I's favorite feature right now, and it's the OneLake catalog. They are doing some awesome things here and I gotta give some love here man because I am really really enjoying the experience and using it in a very actionable way in my daily routine.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1365s" target="_blank">22:45</a> So the update they have is govern your individual data state and catalog. And oh we are getting somewhere stupendous here. This is the thing that Purview promised but never delivered on. And now we're getting a better view of it inside Power BI only or Fabric only, this is really what we want.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1402s" target="_blank">23:22</a> Yeah I just had a conversation with a client and they were asking about Purview. And I literally said hey if you're looking to get Microsoft, or if you're going to be in a Fabric space, you should look into the OneLake catalog and what they're doing there. If you're going to jump into Fabric, that's going to give you a lot of what you need.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1444s" target="_blank">24:04</a> Yeah there's another option here right. The feature right above the one you're discussing is permissions tab in the OneLake, adding a lot of things here. So again my opinion here is if you have things that are in the OneLake catalog, right, it's this place to be discoverable, what things are out there and which things do I have access to.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1485s" target="_blank">24:45</a> And I think it should really be the authority of the owner of that item. Right so Tommy, you make a lakehouse, you put some stuff in there, Tommy you should be able to say is this lakehouse discoverable to non-users of the lakehouse, do you want other people to see it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1525s" target="_blank">25:25</a> That should be an option that you allow. And what that does is it puts it in OneLake, you can see that the item exists, you could maybe even, again to your point Tommy, or my point to you would be, maybe Tommy would want to say look you can see even the column names, you can even see a description of every column.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1558s" target="_blank">25:58</a> Like you can see information about that lakehouse, what types of information would you allow people to discover. And then when they see it, if they think they need access to it they could actually request access.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1590s" target="_blank">26:30</a> Yeah, hey the owner of this data said is Tommy, submit a request and then Tommy will get a little message. Hey Mike shows up, he found your really cool baseball data set, he wants to go look at it, he wants to make sure the Yankees are still losing this year.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1626s" target="_blank">27:06</a> So has started, has whatever, whenever they start I don't know in the spring again sometimes it already hurts. But that way I can look at the data sets that you're publishing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1654s" target="_blank">27:34</a> And the idea here is we're not, this starts to break down data silos. We need to be able to have an easy way for people to go in and discover where data exists and see what's being built off of it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1686s" target="_blank">28:06</a> If you already have access to reports that are using this Lakehouse, I should be able to go see the report and see the lineage of it. And I potentially could ask for other things upstream to use those items.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1714s" target="_blank">28:34</a> Mike I'll do you one better, even for the individual developer. I've been using the OneLake catalog because I wanted to do some spring cleaning. I hate and I love the fact that if I say create a notebook it saves it automatically, notebook one, notebook two, notebook three.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1748s" target="_blank">29:08</a> Yeah that's true. But and I wanted to go through all the notebooks I've created because I know I'm only using so many. And there's a lot that I don't need. So rather than going to every workspace and filtering, I have that ability in the OneLake catalog to go through and say where are all the notebooks, in what workspaces, I can filter based on where I've had it in a task flow.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1790s" target="_blank">29:50</a> I have all these features available and I've been actually doing my organization through the OneLake catalog and it's been incredible. So it really really has a potential for both I think organizations but also the individual developer.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1825s" target="_blank">30:25</a> Yeah agree. All right I want to jump on, I think that's enough for the preview. So definitely read through the features here, I will argue there's probably more features that are being hidden. This is actually okay, we're at the end of February, this was the work done in February, this is a pretty good roll out of features.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1864s" target="_blank">31:04</a> And things even though we're coming up to Fabric conference here in March. Typically what happens, what I find is Microsoft holds back a lot of announcements for the Fabric conferences that are coming out. So I really anticipate a lot of really big announcements in Fabric conference which I'm very excited about.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1895s" target="_blank">31:35</a> That'll be in Las Vegas this year. If you want a discount code FYI there's one in the description of this video and I will throw it down here in the chat window just in case. Yeah if you want to get $200 off your ticket, the discount code is in the chat in case you'd like to use it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1931s" target="_blank">32:11</a> Yeah usually February is "we change an icon in Power Query for the transform use first row of headers, the icon has a different color." That's the February update. Yeah exactly.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1942s" target="_blank">32:22</a> Yeah so but my point is they're actually giving some really good features out here in February. In addition to there's probably more coming out here in March as well that they're going to announce and let you know about as well.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1971s" target="_blank">32:51</a> This is exciting, there's just so much going on anyways. I have to imagine the Power BI and Fabric team now is maybe not the Power BI team but more the collective data team between Fabric and Power BI is now probably massive.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2007s" target="_blank">33:27</a> I mean imagine all the people, each one of these has a different team. The Fabric platform, the OneLake team, the data engineering team, the data science team, data warehousing team, real-time intelligence team, database team, and now data Factory team. Like all these teams, there's a whole bunch, this is a huge team now.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2042s" target="_blank">34:02</a> So very excited, very happy to see that one. Happy to have all the big updates. All right anyways, anything else you wanted to cover on the blog? Maybe we jump into the actual topic now. Let's dive in.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2058s" target="_blank">34:18</a> Okay so our main topic, oh I do see the name here, it's Jake. Tommy you...

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1300s" target="_blank">21:40</a> The name here it's Jake. Tommy you want to give us a read through on our topic for today? Hi guys I'm Jake and I am in purchasing at my company. I am a citizen developer but also a citizen report builder, citizen data modeler and citizen data engineer.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1318s" target="_blank">21:58</a> I love that already. Agree with Mike 100% we're done here, this is it, thank you for the episode. Just over 400 episodes I agree with Mike, we're done, this is it, we've reached the top. That's the same, how do you feel with Mike on his views on notebooks and Python?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1337s" target="_blank">22:17</a> Yes we're done here, sorry Ian go back to... we're good. My company doesn't have a great data culture. I started building tools and the reports for myself and my team for what local data I could access.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1353s" target="_blank">22:33</a> After success with that I built reports for other teams. After that I was given access to the data warehouse and built a semantic model that could be used throughout the company. So there's a question, there's not so much a direct question here but I want to focus this main topic on he's a citizen developer.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1370s" target="_blank">22:50</a> Yes but he calls himself also the report builder, citizen data modeler, which is what the organization has called him, not what he's really doing. He's probably actually a developer, yes but his company also has a low data culture. Oh my gosh how much is this such a common problem, so let's dive in, Mike what's your first thought here?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1389s" target="_blank">23:09</a> Well this is, you describe my journey directly honestly. This was my journey with Power BI. I was in a department, I was working on just Power BI desktop in a very small fashion just building a couple little simple reports. Actually I started noodling around a lot more with power query inside Excel.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1407s" target="_blank">23:27</a> That's actually where I really started my journey and then Power BI designer came out way back in 2015. I was like ooh this is interesting. This is not BI online or BI in SharePoint which is what I think originally things started out as. It's this online interactive thing and the power query portion caught my eye as far as the data engineering.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1428s" target="_blank">23:48</a> Because I was in mechanical engineering at the time. I did a lot of data analysis off of machines that would generate data. So I was constantly building statistical analysis, constantly pulling data off of machines and analyzing it like are we in tolerance, are we not, what are our tests doing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1446s" target="_blank">24:06</a> So I was constantly dealing with lots of flat files that were given to me and manipulating the data. And I did what every other great Excel developer does, you build your template Excel file where you copy your data into and you literally go open up your data, copy paste it and then all of your formulas just light up and work and you get your analysis done.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1466s" target="_blank">24:26</a> So that was the efficient way to do it because you didn't have any other better tools. For me I started out as the citizen report builder, the citizen power query builder inside Excel. And then I moved into okay well now I got to start learning how to do data modeling because I started using these visuals.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1484s" target="_blank">24:44</a> And I was making interactive visuals between two things. That was really intriguing, I got my mind lit on fire with all the things you could do there. And then I really went deep on building reports and what that meant. And in doing that when you get better at building reports you instinctively have to get better at being a better data modeler.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1503s" target="_blank">25:03</a> Then my DAX got hard, then it got really complex. I'm like what's wrong with me, then you realize oh the shape of your data is all wrong. You actually need to shape your data differently and then you start learning about facts and dimensions and then real star schemas. Oh look at this, there's this Kimball methodology I should probably learn about that.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1519s" target="_blank">25:19</a> So it turns into this snowball of things you learn and all of a sudden boom, now I'm taking my masters in data science. I'm all in Spark, I'm doing the data engineering route, trying to figure out where AI and ML lives inside the business. And here I am many many many years later and I'm running this for other companies and other people.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1538s" target="_blank">25:38</a> That was my progression, that was how I started in a simple easy to use UI way and it kept growing. The nice part was I felt like for me it was whatever rock I was standing on there was another challenge or rock just far enough away I could toe out and make a step towards the next thing to learn.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1562s" target="_blank">26:02</a> And I can just keep making the next thing to learn. Then when you look back you've made this really long trail of all these really rich things you've learned over the time. I didn't plan it out, I wasn't like oh I'm going to be a consultant and I'm going to own my own company, I'm going to build software. It was maybe a dream of mine but it wasn't my main objective or goal with the data stuff.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1584s" target="_blank">26:24</a> No and we have some overlap in our own journeys. The overlap is definitely on some of that journey but the only difference for me was when I started out I was hired to be in business intelligence to do reporting. But it was more for a team and it wasn't considered a developer at all.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1604s" target="_blank">26:44</a> Yeah Power BI came out and at the same time my organization was asking we need a better tool for reporting. Tommy can you dive in, take a look at this and Power BI was the one that I really focused on. Yeah and we immediately started building models and we immediately started building reports.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1621s" target="_blank">27:01</a> But it was different because the way I was perceived at the organization was I was still like marketing, more business. The people who were developers were only those who had SSMS or SSAS and SSIS installed on your machine. Yeah everyone else was not data even though I was doing all the data things.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1646s" target="_blank">27:26</a> SSMS, SQL Server Management Studio, SQL Server Integration Studio, SQL Server Analysis Services. So yeah I still got it. But the idea here is I was treated as the business guy even though I was already knee deep in it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1668s" target="_blank">27:48</a> A year or later I was still knee deep in DAX, building models the right way, working on the best practices. But it was still not considered part of business intelligence even though I was doing business intelligence things. Power BI, even though all the stuff that was going on behind the scenes, well you're chart building, you're the visual report building.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1689s" target="_blank">28:09</a> Correct. And as things continue to expand and mature, data flows came out and all these things. It took a long time for the organization to realize that you needed dedicated people in Power BI because I was still pulled in other directions.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1705s" target="_blank">28:25</a> And it's funny you say all the things you did because this is still occurring. One of the pleasures I have now is I get to train a lot and I always pull the attendees, what department are you in, why are you here. Sure and it's amazing how many, I am positive you hear the same thing I do.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1727s" target="_blank">28:47</a> It's eclectic, it's from every department. Sure and one of the big things is no one there is directly in the business intelligence space. They are that pseudo hybrid to the citizen point of view because a lot of times the organization, I don't want to say they don't have a high culture but they don't know what they need.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1749s" target="_blank">29:09</a> They don't know what it looks like, they don't know what Power BI is supposed to look like from a hierarchy and organizational point of view. And this is, I don't want to say it's a problem, I'm not going straight negative but it's a miss I think for a lot of organizations.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1764s" target="_blank">29:24</a> I want to unpack what you just said there because I think your observation, and maybe this is also it is the people who are asking for training so it is a very specific group of users. Right, if you already understand how to model data and SSMS you're probably not going to go ask Tommy hey how do I use Power BI. Right you're just going to go figure it out.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1786s" target="_blank">29:46</a> On the other hand though when you look at this one I think this really affirms your experience and mine as well. A lot of people, we've heard about Power BI, we do things in Excel, we have other things maybe like SmartSheets or something else. We're looking at a better way, we know there's a better way to do data.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1802s" target="_blank">30:02</a> We've heard that it potentially could be Power BI, let's learn about it and see if that actually would fit our needs. And then to me I'm looking at this going this is a business user, this is a person who's in the business that says I have desktop, I can get it for free, how can I use that to get my reporting needs met.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1818s" target="_blank">30:18</a> As opposed to the business going to IT and saying hey I need this data in this way for me to be able to use it. So I think when Seth and I would go out and sell Power BI to different organizations we always pitched it in the idea that this is the first tool where pure IT, SSMS people, SQL Server Analysis Services, the very technical people and the business people could come to the same product which is Power BI.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1853s" target="_blank">30:53</a> And both could find very great benefits from using that tool. Business could go build reports, business can go build simple models, they may not be performant yet but at least it explains where did the data come from, how did I transform it, what works in my reporting.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1869s" target="_blank">31:09</a> So I really think this whole idea or concept of building a proof of concept or prototype around a report, does it find value, then handing it over to someone to make sure that it's sustainable, add more data and can be managed by a bigger team. I think that works, I think you need a lot of experimentation on the data to figure out what parts of reports are working well for your organization.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1890s" target="_blank">31:30</a> And I think it can't go understated here, what you said is a very foreign concept for a lot of organizations. The fact that Power BI can be for both people. One thing that I found in my own journey is the Golden Rule: Whoever has the gold owns the rules. Whatever the tools that you own, those people own the flow of the data.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1912s" target="_blank">31:52</a> I had a training with a team of Snowflake and they were very resistant to doing anything modeling wise in Power BI because they want to model. Because again that team in Snowflake controlled everything, all the permissions, all the tables, all the design, even though they don't understand the shape of the tables that need to be there for the Power BI report.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1932s" target="_blank">32:12</a> Right, I have never been on a project where anyone has had a data warehouse, like a true SQL Server, where the data was in perfect form and ready to be used in Power BI. Because the visuals need the data to be shaped a certain way to get it to work correctly and you need different levels.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1950s" target="_blank">32:30</a> Correctly and you need different levels of aggregation, the granularity is different. You may need to make that the same or you may need to take things that were detailed in version and roll them up to higher level. All these things considered, unless you're actually in there building reports you don't know exactly the shape of the data you're going to need until you get down to this page needs to look like this with these visuals on it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1972s" target="_blank">32:52</a> So let me tell you what happens to Jake in this situation because I bet you it's very similar. Jake is asked to do a ton of things without the resources needed, where it's like hey we need you to build these data but no one's going to give them access.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=1987s" target="_blank">33:07</a> Or at least let's say there's a Snowflake team or data engineering team, not anymore. Probably in the initial stages that was the point, low data culture. And that's one of the things Jake said, well yes but at the end he says after that I've been given access to the data warehouse and now I build some semantic models through that for that company.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2004s" target="_blank">33:24</a> So this is an area of trust right. So what I just see here also is describing his career of trust. You built some reports on your own, it worked for you, you started building semantic models for your team, it worked for you, now you're building entire semantic models for the entire organization.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2021s" target="_blank">33:41</a> To me that is a common path I see when I engage with customers, when I work with them. Oh yeah Ty, the people I engage with, as they learn more, as they self-educate across the space, they get more and more responsibility. They become a bigger and bigger player in the organization and more other teams realize they can leverage this experience of this individual to build better stuff.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2042s" target="_blank">34:02</a> But I'll still argue though the amount of work Jake has to do just to get the access to local warehouses, he's already got to sell baby sell all of those local data even just to get access to say hey this works, this works. And I bet you the data flows, the integration to actually show that this is a successful product and this is a successful workflow, the amount of up work to just get to the point of can I get access, that is always the struggle.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2073s" target="_blank">34:33</a> Because I want to ask you, what does that tell you about a lot of people's struggles where the amount of hey let me show you all these proof of concepts, or I have to go from the ground up. Why is that a struggle for a lot of organizations, that bottom-up approach so to speak?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2090s" target="_blank">34:50</a> Well I think traditionally there are arguments that are used to keep people out of the data spaces right. So one of the arguments is it's not secure, we don't have a way of controlling it. I really believe that's a moot point when you talk about Fabric because Entra ID is across everything. You can't access things you're not supposed to have access to.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2111s" target="_blank">35:11</a> A lot of this comes out of the security portion of this. One is people don't understand their security models nor do they understand the actual controls that are given to Power BI and Fabric around who has access to what things.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2128s" target="_blank">35:28</a> Another thing that hasn't been done very well by Microsoft I think is the visibility of what's going on. So I think OneLake catalog with seeing there are data sets and who has access to those data sets I think is very relevant honestly. You should be able to have a single selection or somewhere in the tool that says we know exactly who has permissions to all the data sets.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2148s" target="_blank">35:48</a> And if you're an admin of that data set or owner or whatever, you should be able to immediately remove access to all things. There's an API in the Fabric or Power BI, I'm not sure what, it's called overly shared assets. Yeah so there's so much, the scanner API. There's so little visibility to what has been shared to what people across your organization.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2174s" target="_blank">36:14</a> They made a dedicated API that said if anything has been shared to the entire organization, here's a single API to give you the details of all the things that are shared to everyone.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2186s" target="_blank">36:26</a> The reason I say this is because without someone watching this to some degree, Tommy you could make a report, you could build an app and you could share that app to the entire organization. That app and what's in that data, if you're sharing to the total organization, is there sensitive data in there? Has someone else reviewed it or looked at it or had a certain set of eyes? There was no control like that.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2214s" target="_blank">36:54</a> There's not that visibility that's immediately alerting people about what's going on. So this is a need that I think customers asked Microsoft, hey look we need to know what's being shared to the entire organization. Someone needs to be tracking this, we at minimum need at least an API that we can go hit, that we can go access what that is doing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2227s" target="_blank">37:07</a> Yeah I'm gonna make an argument here, I think a lot of things you're saying are Power BI issues, they're not Fabric issues. To me, and the reason why is you have to have a Fabric capacity to do much of the things. A lot of organizations either give the Pro out, which then you can share Pro with other Pros, which you lead into these problems.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2247s" target="_blank">37:27</a> The Power BI methodology or structure from a financial license point of view allows the bottom-up approach to work. Because I can download Desktop and I can start building, I can share my own workspace and I can still share. Again because usually at this point low data culture, IT already hasn't set all the restrictions down.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2266s" target="_blank">37:46</a> Fabric by design, and it makes sense by design though, again it's very much more restrictive because you have to have a Fabric workspace to play in. I can't download Fabric and start building something without someone knowing and show how cool it is. I have to be given direct access.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2281s" target="_blank">38:01</a> Well yes I agree with you but I think the reason why that exists is because you're talking about a Power BI Desktop application. It's much harder to restrict access to something when it's a desktop application, and especially when you're giving the desktop application away for free.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2299s" target="_blank">38:19</a> I've seen people in organizations say they build a Power BI report and they email or put on a share drive the Power BI report, give it to somebody else so they can open it up in their version of Desktop. That still happens. Not saying it's going to be, but my point though is Fabric is so big that you can't fit it on a single machine, that's the point of Fabric.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2324s" target="_blank">38:44</a> So the Fabric has to be a cloud service that you use. And not arguing that, and I think that's really to me that's the breakpoint of why you're not seeing, that's why Desktop and Power BI is harder to control because it's easier for people to get it on their own machines.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2343s" target="_blank">39:03</a> And so in order to restrict that you need to have security controls like Intune on your machine that says you can't install it. You need other security controls like you're not admin on the machine, and that happens in organizations, I get that, that's out there. But most organizations give you laptops and you have the ability to install software, you have the ability to go get things from the Microsoft Store.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2362s" target="_blank">39:22</a> And doing that makes your team more productive, but now you're not restricted to the Power BI service experience. Carve people out and cut people out of like hey you just can't use this stuff.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2374s" target="_blank">39:34</a> If I'm a little hot right now about this topic, I think it's because I realized I really do have an issue with Jake's comment that he's the citizen developer, citizen report builder, citizen data modeler, citizen data engineer, and he's in purchasing at the company.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2390s" target="_blank">39:50</a> Because I can feel for him and this is what happens all too often. These type of people are asked to do so much and usually not getting compensated for it. And this is just what I found through conversations, this was my own story.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2403s" target="_blank">40:03</a> Where you, this role, this is your title, this is why you got hired, but now all of a sudden we realize you have the set of skills. And not realizing until way too late or past the due that this person should be compensated or in a different role.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2420s" target="_blank">40:20</a> This is something that just fires me up. I see, I yes I get what you're doing there.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2435s" target="_blank">40:35</a> Let me give you some thoughts on this one. Okay so I think there's something, there's an opportunity here right. So one, this is more data culture and more company culture as well. I have seen instances where individuals were in the business, right now you're in purchasing and you're doing these things and you're building, you're getting access to data that is being supplied by IT.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2458s" target="_blank">40:58</a> But then you're supporting with modeling and reporting that you're distributing to a wider audience. You really are playing that role as part of the center of excellence. At some point in time you need to drop the term citizen. Yes, because you are doing the thing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2474s" target="_blank">41:14</a> At this point I would also argue if you've got this much time under your belt and you're now building reports that are being consumed by a larger audience, I think I would just stop, I would just start dropping the name citizen. And you are the report builder, you are the data modeler, and you are the lightweight data engineering, you're doing it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2493s" target="_blank">41:33</a> You're already doing those roles and you're providing value with it, so much so that people are now used to you being part of that solution. Where I hesitate here a little bit is the new role comment that you made, because I've seen people go from the business side where they were given leeway, they were able to just ask data questions of the IT group.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2514s" target="_blank">41:54</a> Hey give me access to the server, great here you go, you'll build models on it, no problem, you own that right from the business perspective. But as soon as that person moves into the IT organization, you turn into a ticketing person. You turn into a culture that is not healthy in the data team, in the IT team, which really is like we don't give access to anyone.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2535s" target="_blank">42:15</a> You are now focusing on all these random issues from tickets from other people. And what I find is sometimes moving roles out of the business and into the IT space is detrimental to your career. And what I find, sometimes this doesn't happen all the time, people, the IT group squelches that person and turns them into someone that they're not happy about.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2560s" target="_blank">42:40</a> And then what winds up happening is they either leave the company and go find another company that allows them to build creatively, make models, do reporting. Or that business person leaves the IT organization and goes back to the business.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2577s" target="_blank">42:57</a> And so what happens now is that business says look, we're actually ready to be innovative and push our team to build these great models. Even though we know our team is going to serve data to the broader part of the organization, that's totally acceptable. So they're not building shadow IT per se but they're operating in their own department in a way that is useful to that employee.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2602s" target="_blank">43:22</a> To summarize here, I would really hesitate to say look you're doing all these things, stay with where you're at. If you like your boss, if you like what you're doing in this role, in this position, and you've been given access to the data warehouse, great, keep doing that. I would even argue think about what you could do working with your manager to formalize some of these terms. You're calling yourself citizen developer, you're calling yourself citizen report builder.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2632s" target="_blank">43:52</a> Go ask your boss, say hey I'm going to study up, I want to take some Microsoft certified exams. Put some exams on your list, get those on your plate. Ask for dedicated training to go to a conference or go online and learn something specific. Go get SQLBI training, right, get a certification from them. Go to the experts who know what they're doing and then add that to your resume.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2655s" target="_blank">44:15</a> Hey I've gone through these classes through SQLBI, found them really useful, and now you've got all this great rich knowledge around what they're doing. Nothing about that I really can argue because when we say role here I think that's a really important distinction because that is the other side of the coin my friend.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2675s" target="_blank">44:35</a> That is the other extreme. What you said at the very end is I think the golden avenue — that's the golden brick road to go down. Okay let's formalize what I'm doing here, and I think that's the biggest thing because too often people in these roles they are tasked with their still daily things that they're getting paid for technically, and they're asked to do all these other things because this is so great, it's awesome.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2702s" target="_blank">45:02</a> So they are pulled in a lot of directions and they're working more hours on things that they're not in a sense getting rewarded for, or what they're valued for, because everyone's getting paid for something right. And that's usually on your resume or it's usually on your job description. So if I'm going to be this role for purchasing, can we formalize this, which usually means you have to relieve some of those other responsibilities.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2726s" target="_blank">45:26</a> Because I'm already doing all these other things. If that's the way we want to go, because there's burnout — I cannot tell you from my own journey and how many other people from user groups that I've talked to that have experienced that same burnout because they took up Power BI. It was an organic thing that happened and that citizen developer label always just leaned with them, like well you do all these things and Power BI.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2753s" target="_blank">45:53</a> Where that's more when they tell me like but that's what I do more, that's the majority of my day is working in Power BI even though that's considered by the team the side gig so to speak. Like on top, just like if I worked in Excel, when we know that's not the case. So for a lot of these people, a lot of these roles, let's formalize it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2776s" target="_blank">46:16</a> I agree with you, I want to make it clear too. The idea of okay I need to go on the BI team, I'm moving departments — that's hard. The success of there usually is pretty tough. But can we at least relieve things and have that conversation so this can be my dedicated role, which is not just a compensation thing, it's also me working closely with those data engineers so I can get the access quicker, I can get the permissions that I need to be successful.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2804s" target="_blank">46:44</a> Yeah I think at some level when I was in some departments very early on in this data BI space of things, it was very helpful for the business to pay for a salary. And this is a weird way of thinking about this, but it's nice to have the business pay for the salary of a headcount in IT where the person reports to IT but is being paid for by the business.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2832s" target="_blank">47:12</a> So the idea here is when you have commitment like that from two different teams, the headcount means the IT person then has access to all the things that IT does because they're reporting up through IT, all the security pieces are there. On the other hand since the business is paying for that headcount person, having that direct link — inherently the business always pays for IT to show up right. If the business didn't sell the products there would be no IT to support the products that they're selling.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2866s" target="_blank">47:46</a> That's how it goes, but there's not this direct financial tie. And so sometimes the missions or objectives of IT don't necessarily align with what the business wants to do. The priorities of the business aren't always the same level of effort that the IT organization may be focused on. Hey we're doing these really big things like building a new CRM, migrating data platforms, really big things that they need people for.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2892s" target="_blank">48:12</a> But the business sits on the side saying well now what about us, where do we get help from? We can't, to your point Tommy, we can't get access to that database or data warehouse where we need to build, shape, model data and get it into our report so we can actually make decisions on that data. So I really find what worked for our team was the IT individual was hired on, the business literally paid for that position, but the person reported directly into IT.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2920s" target="_blank">48:40</a> And so there was a little bit of headbutting every so often, but when it came down to brass tacks, when the individual in IT needed to get pulled off to do some other random IT-based project, there's an initiative, the business can say stop — you have your other people for that, we need this person to build this or fix this or modify that in our existing thing. And there was enough authority there because we pay their salary. If we don't pay, that person disappears.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2949s" target="_blank">49:09</a> So this is very interesting to me. I don't know how you handle it very well. I think it's a leadership issue, it's a culture issue what you're stepping into here. And there's only two ways you solve that. You either just deal with the culture that is there and you try to influence the culture as much as you possibly can by giving good reports, good models, good Center of Excellence. You can lead by example but it's a very uphill path and sometimes leadership is just resistant.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=2980s" target="_blank">49:40</a> The second option is you leave. You go find another company that has the data culture in place that you want — they're innovative, they're thinking well, they're giving you the time to do that. And again for better or for worse Tommy, to your point, people get overwhelmed. If you don't move or switch between roles or jobs, it's hard to offload those other tasks onto other people. You don't really ever leave your last job unless you're physically moving to another job.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3012s" target="_blank">50:12</a> In my career I was in a very large organization and I moved between business units. And that was great because all the responsibility of that last business unit, I was able to have a time period, have a full handoff in a period of time, and I left it. I was able to say I'm done now, I'm moving on to the new thing. They would maybe ask me some questions later on but I was pretty much out of that department and doing a new thing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3038s" target="_blank">50:38</a> And so when I had those very large movements between departments I was able to remove the old responsibilities and focus on the new responsibilities that I was very excited about. And the reason I left my company was because I was tired. I was getting pushed into a management role and not a Power BI developer, builder, modeler role. And I felt like my career could go either way, I could do well in both areas, but I didn't want to spend more time if it wasn't in Power BI.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3065s" target="_blank">51:05</a> And I said I'm going to double down and just do Power BI full time. I remember having a conversation with my family and my family was like, are you sure? Is Power BI gonna be a thing? And I said that's a really good question. Is it gonna fizzle out? Will Microsoft screw up the product and then in two years it's dead? Is it going to go by way of the dodo bird? Is it going to turn into Business Objects? Are you putting your eggs in a basket that's not going to be sustainable long term?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3096s" target="_blank">51:36</a> So I really had to contemplate that. Is this something that I really want to tie myself to? Because my success as a now business owner around Power BI really hinges on making sure Microsoft builds a product that's listening to the customers and building innovative things. If they're not doing that — I mean thank goodness man. Yeah, thank you for making the licensing so complicated because that gives me hours of time to talk with my customers about how to optimize pricing on things.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3127s" target="_blank">52:07</a> Realizing Microsoft wants to inherently make pricing easy to understand but it's not — that's why I'm here. So you have to make that decision. And Tommy you made a similar decision, right? You had to say I'm at where I'm at in my companies, I have to decide if I'm going to put all of my eggs into this Microsoft Power BI and Fabric basket. And do I trust them enough to keep this product moving forward such that I can build an entire career around what that's doing?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3157s" target="_blank">52:37</a> Totally, and even the fear like is it going to go the way of Tableau eventually? Like what's 20 years out? And I love that Mike. We're getting awfully close to becoming an old married couple because I have a question for you that I literally thought how do I phrase this so one of his answers is not "leave." Oh and there it was! So I have this question for you and I'm like but I got to phrase it because I know that's one of the answers.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3188s" target="_blank">53:08</a> Listen, for what it's worth it's a valid consideration for people to think about, especially sometimes. What did you tell me Mike? You told me when I started my consulting, I said you outgrew the company. You're doing things more advanced than the company's allowing you to do them and they're literally saying don't do this, tying your hands. And to your point Tommy, also sometimes companies don't make the commitment.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3218s" target="_blank">53:38</a> To your point as well earlier with what Jake is describing, right? Jake's doing more and more and more. So as he's adding more to his plate, what are they taking away from his plate to allow him to focus on these new things? Hopefully the management is understanding enough to say we've added three or four new things all around Power BI and development of things that is a higher priority than these other tasks you have, so either offloading those tasks to other individuals on the team or hiring someone else to backfill some of those roles. And that's an expensive proposition.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3251s" target="_blank">54:11</a> You're not doing it but you have to really weigh that. That's a very strategic decision. A lot of companies don't take headcount lightly and I do as well. It's very important for me to bring on headcount in a very careful way because what I don't want to do is bring on a lot of people and have to let them all go because I mismanaged or don't have enough work to keep everyone busy.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3272s" target="_blank">54:32</a> So all that being said, the question I actually want to propose and I'll start here. If you were to be brought into Jake's company and the question really, your service that they want you to provide is we want to improve the data culture. We don't want what happened to Jake to continue to occur in other departments. What's the strategy, what's the tactics, what's the project to get us to that point?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3298s" target="_blank">54:58</a> To me it's very clear and this is something you did mention briefly but I think this is the really good go-to and it's the center of excellence. So if, and this is something even Jake or people in this position, I would be pushing if I was in Jake's position. I'm talking to my boss repetitively on this idea of the center of excellence to structure this up.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3321s" target="_blank">55:21</a> Well yes, it's the center of excellence is the linchpin for all this. That's where data culture is developed. You mature it there, you work on it inside the center of excellence and you also build into the center of excellence. You just do it. Honestly, my customers ask me to build things for Power BI with them.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3341s" target="_blank">55:41</a> We don't ask them do you want a center of excellence, we just do it. I just show up and say where's your SharePoint page, where can we put the documentation, the literature, the information around what you're doing. I just build the works. I build the SharePoint site or the Juice site or whatever. I build it as if I'm running the center of excellence.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3360s" target="_blank">56:00</a> And what happens? But that's why you do this because that is where culture begins. And as you develop and add more things to that area, more of the company will start adopting it. More of the company will grow and I can't tell you the number of people I work with in companies where they've done this. They just are given Power BI, they start out real small.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3380s" target="_blank">56:20</a> And I say look, you're getting to a point where you are going to have to hand this off to other people. Let's make sure you start building the center of excellence now. That way it grows with you and then if you bring on more people, great, you have a framework to start them on. And the center of excellence shows what you're doing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3398s" target="_blank">56:38</a> Because when people say well Tommy what have you been doing with your models? Well great that you asked. Here's the inventory of the reports that I've built, I've built some very lightweight documentation, here's the terms and terminologies that we're using for Power BI. You want to go search for them, search from here. Here's a list of all reports, here's the changes, here's a semantic model, here's diagrams and how to explain how to use it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3417s" target="_blank">56:57</a> If you put that stuff down those are physical tangible items to show your company. One, you know what you're doing and you're now onboarding. And you have to think like an educator. To some degree I think you really have to have that training mindset on you if you're going to be part of the COE. Because you're going to build stuff but you have to think of it, how do I teach people that I'm building my stuff for how to use it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3445s" target="_blank">57:25</a> So I'll go do you one better here because this was the calling card. Where if people in Jake's position, rather than saying oh this is a shame, that's sad, this is an opportunity. Because you can be proactive and create that SharePoint site. One of my biggest calling cards and my war cries at my first organization was let's make Power BI act as if it's a department on its own.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3469s" target="_blank">57:49</a> Where it's established as an entity within the organization. That was not the case, there were those random Power BI people doing things. Where let's act as if business intelligence is its own entity within the department. We created an email, we had the SharePoint site, we started building that up trying to do what we could.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3488s" target="_blank">58:08</a> Where if you were on our marketing team or you're in sales, you had some great resources to learn about Power BI. And that's where it only existed because that's where we were. But all of a sudden we're like hey, we have this SharePoint set, we have this training. The next thing the Power BI team, which there wasn't a team, was giving keynotes during the sales quarterly meetings.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3515s" target="_blank">58:35</a> And this became a thing where they knew and could recognize us as the Power BI people. The brand, honestly it was a brand thing. But do not underestimate what that can do rather than you're doing Power BI on the side. So there's a great opportunity here to your point Mike where you don't have to wait for someone to come in.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3529s" target="_blank">58:49</a> Yeah this is gonna be a lot of extra work for you on not when you're getting paid time. Personally I would say do this after hours because no one's expecting this. And but once you get this established and it takes time and being consistent communication. Hey we're going to communicate with people when we create a new report and we're going to do it this way.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3549s" target="_blank">59:09</a> All of a sudden people get used to a groove, they get used to a rhythm. We're hearing from the Power BI team, oh there's a new report I want to learn how to use it. Okay well that's Jake, that's Tommy, that's Mike. Oh look, Jake, Tom and Mike are doing a keynote on new things. Where I can get my sales quota or whatever the purchasing information.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3570s" target="_blank">59:30</a> This becomes a common thread, it becomes a brand, it becomes an entity. And all of a sudden the recognition is there and that citizen label becomes erased. So it's a great opportunity and honestly I don't think I can do much better than a closing on that.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3586s" target="_blank">59:46</a> So for, I agree. I'm gonna close here as well and I would also argue I think a lot of this, there's a very similar pattern here. I've seen a lot of organizations win when organizations embrace the center of excellence. That is a leadership decision. An executive sponsor is always important in all these situations.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3600s" target="_blank">60:00</a> The exec, you're playing the balance between the value of Power BI and the cost of the employees to learn and or build in that solution or tool. So if you can find that sweet spot between we need two people, we need three people. If you're getting so much value out of the product itself, now you can justify a higher cost to then keep building it.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3622s" target="_blank">60:22</a> Because you're saving yourself time, the data is coming in incorrectly. And a lot of these are fluffy things you're trying to measure like customer satisfaction. Do you send out surveys, how do people feel about your data? Like are you really improving the data culture quality by employing Power BI as a solution?

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3640s" target="_blank">60:40</a> How are you measuring that? Do you send out a survey? Simple things like that could really improve your messaging to leadership and say we should continue investing in this. So at the end of the day I'll say this, the center of excellence is very pivotal for what you're doing.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3655s" target="_blank">60:55</a> I believe you're spending a lot of time Jake just building great stuff. You're making impacts, you've been gaining influence by just by your comment here, by getting access to the warehouse. People are trusting you. Take the trust, take that value equity that you've been doing. Really start focusing on with your management and your leadership on emphasizing the importance of the center of excellence.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3678s" target="_blank">61:18</a> Emphasize the importance of measuring. Add maybe a couple surveys in there of people who are using your content. What do you wish you would do better? How are you feeling about the data, do you trust it? Start communicating those things and then potentially you can send those same surveys out to other data products that the team produces. Things coming from Salesforce, things coming from other products you have in your company and see how those compare.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3699s" target="_blank">61:39</a> Then you can take that back to leadership and say look, we're doing something good here. Give me more time to keep building the center of excellence. If I had to put either, this is either my crystal ball or predicting what Jake would do. Jake, if you can do this and then add the ability for you to really push into the center of excellence, one of two things will happen.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3720s" target="_blank">62:00</a> First thing, you will be the leader of the center of excellence. You will lead that home. You will find other like-minded Power BI people across your company and you'll invest in them and you'll build great things for the company. That's the first option, it goes off and it starts thriving. That only happens with buy-in by leadership.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3736s" target="_blank">62:16</a> The second thing is leadership doesn't understand, you get squelched. And this is as far as you're going to go. And either you decide that's the cap of what I want to be living with and that's okay. It's a decision you can make. If that's where you want to be, sit there and realize there's a ceiling.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3755s" target="_blank">62:35</a> If you don't like that then it's time to look for other opportunities and take the skills that you've learned and apply them to companies that do have the right leadership buy-in towards the data culture. They may not have the data culture yet but the leadership is at least buying into the direction of that.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3770s" target="_blank">62:50</a> And so maybe there's a third option. You potentially wait it out until leadership rolls over. Until a new leadership person comes in because someone always comes in with a new idea. Every time I've seen leadership show up at a different company they're always like well this new tool that we used in our last company is great, we should just use it everywhere because they had success in the past. So they typically bring in their knowledge to what you're trying to do in your company.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3793s" target="_blank">63:13</a> So maybe wait it out. Maybe if you're not finding that the data culture that the COE is building, just hunker down, keep doing amazing things, rock it out. And then as leadership changes maybe you move up into those roles or maybe you become that executive leader that understands the value of data and the center of excellence.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3809s" target="_blank">63:29</a> Oh Mike, to be 28 again and be in that position. Oh this is bringing back, this was a good passionate time. Angry young man trying to with something to prove. When, he was a lifetime ago man, that's crazy.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3823s" target="_blank">63:43</a> Anyways, thank you very much for listening to the podcast today. I hope you found this conversation around Jake as a citizen developer resonating with you. Hopefully you are part of that citizen developer, keep pushing into it. Keep adding value to your companies. I think that's really the end game here is to keep pushing in adding more value, delivering great valued products to your companies.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3842s" target="_blank">64:02</a> With that being said we really appreciate your ears. We know your time is valuable, thank you so much for listening to us today. If you wouldn't mind please share the podcast with somebody else, another citizen developer if you don't mind. And let them know we've unpacked it and we've given you the road map for your career here. This is how you could move forward with your career.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3860s" target="_blank">64:20</a> If you'd like, that being said Tommy, where else can you find the podcast? Hey, just like ChatGPT, please check your answers before you apply them. But you can find us on Apple, Spotify, or wherever at your podcast. Make sure to subscribe and leave a rating, it helps us out a ton.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3875s" target="_blank">64:35</a> And as Mike said please share with a friend since we do this for free. Do you have a question, idea, or topic that you want us to talk about in a future episode? Head over to powerbi.tips, leave your name and a great question. And finally join us live every Tuesday and Thursday 7:30 a.m. Central and join the conversation on all powerbi.tips social media channels.

<a href="https://www.youtube.com/watch?v=QtK5tZPy5UU&t=3896s" target="_blank">64:56</a> Thank you all so much, appreciate your time. Have a great week and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
