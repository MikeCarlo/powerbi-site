---
title: "Giving People Their Data - Subscriptions? – Ep. 412"
date: "2025-04-04"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Power BI"
  - "Subscriptions"
  - "Email"
  - "Data Delivery"
excerpt: "Mike and Tommy tackle the common request of getting report data delivered straight to users' inboxes via subscriptions. They explore the options, limitations, and best practices for giving people their data in Power BI."
featuredImage: "./assets/featured.png"
---

Mike and Tommy tackle the common request of getting report data delivered straight to users' inboxes via subscriptions. They explore the options, limitations, and best practices for giving people their data in Power BI.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/FK2T-kyRTsM" 
  title="Giving People Their Data - Subscriptions? - Ep. 412"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## Main Discussion: Giving People Their Data

Users frequently ask for report subscriptions — they want regular updates and insights delivered directly to their email. It's one of the most common requests in the Power BI world: "Can you just email me the report?"

### The Subscription Challenge

The desire is straightforward — people want both visual insights and raw data access sent to them on a schedule. They don't want to log in, navigate to a workspace, and find their report. They want it in their inbox, ready to go.

### Options and Approaches

Power BI offers built-in subscription functionality that lets users schedule email delivery of report pages. But the reality is more nuanced than just clicking "Subscribe." Mike and Tommy dig into what works, what doesn't, and where the gaps are when it comes to satisfying users who want their data handed to them.

### Balancing Access and Governance

There's a tension between making data accessible and maintaining governance. Emailing reports means data leaves the secure Power BI environment. The discussion covers how to think about this tradeoff and what guardrails to put in place.

## Looking Forward

As Power BI and Microsoft Fabric continue to evolve, the ways users consume and receive their data will keep expanding. Subscriptions are just one piece of the puzzle — the broader goal is meeting users where they are.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=37s" target="_blank">0:37</a> good morning and welcome back to the exclusive MERS podcast with Tommy and Mike good morning everyone and welcome back to the show good morning Mike I guess we could probably drop the good morning piece because that's it's like literally morning for us but not necessarily for everyone else who's listening it would it would be weirder if we said good afternoon or good night I think good listen Midwest time ah dude it's been 400 we're just trying to be nice I think that's that's true so ever

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=69s" target="_blank">1:09</a> since Seth left it's been a little bit hard with figuring out what's the what's the right intro here we let Seth we have no tag line yeah we have no tag line in the morning we have pick up the mantle yes exactly so well that being said couple items for today so today our main topic will be around giving people their data we're thinking through subscriptions and how that interacts with the system and and what can we do there and maybe what's the right positioning or place or

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=99s" target="_blank">1:39</a> location to place your subscriptions for this for your powerbi reporting all right any other news or things that are coming up Tommy we are recording this episode it's kind of the only early news item I can think of here for today we are coming back from fabric conference this is actually during the time of fabric conference so I hope if you were there at the fabric conference you're enjoying yourself having a good time I'm going to assume it's a great conference cuz I was there last year and this is recorded early so we hope everyone who's attending or is watching online if there's any online sessions

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=131s" target="_blank">2:11</a> is enjoying the conference any other news items Tommy you'd come up with no I think I realized that our busy season is spring that's when all like all the conferences are going on we oh my word man and just to keep with the amount of recordings we've done I've seen you more than want to so it always been fun we we have all the conferences all the things going on it just seems that's when things really pick up is in March yeah it's been very busy for us this year just all the

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=162s" target="_blank">2:42</a> conferences and everything that's happening with traveling a little bit Tommy you've been over to all across the us at this point so I've been out to I've been over to the Netherlands for conference and then back and then just it's just been busy just feels like this part of the year is very busy part of the year I don't know what it is but all the conferences seem to kind of pile up around the same time which is kind of crazy but anyways it is what it is we're going to get through it and then we're going to hit summertime at some point so that'll be fun all right let's dive into

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=194s" target="_blank">3:14</a> our main topic today Tommy give us an introduction like where are you thinking this is going to go we're talking about subscriptions either for power AI reports or even I guess pin reports as well there's multiple places where you can subscribe to what content is coming out of power.com let's unpack this a little bit yes we we have not given email subscriptions a ton of Love on our podcast yet honestly for a lot of organizations a lot of people the let me say actually say this the way I want to the perception of email subscriptions

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=225s" target="_blank">3:45</a> are critically important and okay that may be the angle I'm actually going to be taking whether it's true or not but really the idea is this email subscriptions are something that Microsoft's put a lot of effort in and has a lot of features now both for passionated but even just stand reporting has more than just we're going to send you a nice picture once a day with all that in mind this is still a question that I get from teams organizations that are starting off at least initially with powerbi is well what about this tool it gave us an email

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=256s" target="_blank">4:16</a> that had y y every day can powerbi do that can we get our new subscriptions now we're gonna tie in a little extra with fabric is there a better way is there a different way with either The Lakehouse or some other automation are still email subscriptions the standard for consumers to get their data on a daily basis yeah that's a good question this is an area Tommy where I'm really torn a little bit about this one I have a lot of like thoughts on does it make sense for us to automate the pushing of

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=288s" target="_blank">4:48</a> reports to people or or does it not necessarily I don't I'm going to tell you this is a topic that I I explain that how it works I can show people in powerbi service like how to get scheduling reports there's even this thing now I think it's inside pading reports you can do Dynamic standard reporting too a St report you can do Dynamic subscriptions which basically means you can apply a filter to the data the report can filter down by a particular user those users need to be part of the data set so once you are filtering the

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=320s" target="_blank">5:20</a> data by their username or their email address the report can change the context and then it sent out so here here's my on this one Tommy my thought on this is I subscriptions I understand but I feel like having something sent to your inbox your email inbox where it's a static item it's a PDF or images of the report that that to me is like okay I understand but that just Feats the

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=351s" target="_blank">5:51</a> purpose of having live data in a report on in the service always up to date like every day it's always up to date so I understand you you're maybe reducing a couple extra clicks but what is the purpose like what I can't get my head around is like what's what's the downstream effect of this that you require every day a report to show up and I feel like I'm arguing here when this happens it feels like people use those reports for the first month couple

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=381s" target="_blank">6:21</a> months maybe more I don't know but at some point it just becomes this hum drum like oh that's the email I just make a rule in my inbox to automatically file it away into a folder or automatically mark it as red because I it's just the data and to me it's it it feels I'm gonna say this word but it's it's not going to be right it feels old school and not

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=413s" target="_blank">6:53</a> how my my opinion on that one so Tomy honestly I'll say right off the bat there's a lot I agree with that but I want to take it a step back and there's still the idea here Mike that I I want to kind of unbox is okay why do people want data that way still because this is still a question I get regardless if it's an email subscription or a different way and again from the the tool and the practicality I think we're same on the same page but there's still this innate desire this some type of nature where people are still wanting

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=444s" target="_blank">7:24</a> this or Desiring this in this way and that's where I want to start because I agree with you everything about it is like okay it goes in an email folder there's nothing you can interact with it it's a picture and if you're f is a CSV what are you gonna do with that every day or every week yes but to your but again I think there's a bigger question here because I get this all the time still Mike is about this why do you think this is still critical for people or really important that they get data

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=474s" target="_blank">7:54</a> sent to them and I again this is maybe where I'm again I'm I'm lacking a little bit of understanding here on like maybe the use case behind this but I really feel like the use case of this should be like to explore some of the data and you maybe adjust some of the filters yeah how how many reports have you built Tommy that you can immediately look at a screen shot of the report and immediately know what to do for the rest of your day I'm not going to say none it's not it's not going to be that Stark but like

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=504s" target="_blank">8:24</a> very few I would say right you're going to need to do like a little like the whole idea of building aort in powerbi so let's talk about just reports let's talk let's not talk about pagein or CSV I think that serves a whole different purpose but we're talking about the report like the idea here is hey we are trying to build an experience for you to look at some of your data dive into the information and potentially go from page one to page two here's some summary information and here's some detail information if you can build a report that's immediately actionable off of that one screenshot of that homepage of

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=536s" target="_blank">8:56</a> the main report good on you because that that's that's quite challenging to do because you have to really understand the business use case and you have to be able to provide exactly the right visuals so that that user can look at the report and immediately leave and go do something ma maybe this is something where I can see

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=553s" target="_blank">9:13</a> maybe this is something where I can see a use case around the reason why we're doing this is because we want to show you the report does it look interesting to you and if it looks interesting then go to par.com and then interact with the report maybe it's something along those lines you're like just trying to be notified about like what it is it's very passive maybe in that regard but I don't feel like it's the right experience so first you said my trigger word and that's interesting which is the worst word of in analytics by bar nun

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=583s" target="_blank">9:43</a> know why it's the worst word in analytics because does do anything's notion to it a dead end it's a dead end and here's the thing if someone finds your email interesting on a report they're not going to click into it maybe but you people have things to do to me the reason why this is still something a question that I still get are there's two critical factors here that go into this it's Legacy thinking to your point it's that was the best way at the time or whatever tooling they're

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=613s" target="_blank">10:13</a> coming from that would get their Data before I would have to click on 18 filters go to an Internet site the process was a long time to get just a of that so the Legacy thing and and also if you think about maybe reporting tools before powerbi it took a long time for it to even get you the data the first time so like right when like I'm thinking again back to my old days right I'm dating myself here a bit thinking about business objects right when I like let's imagine I had to go get data from there there was a report

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=643s" target="_blank">10:43</a> the report would have to take time to render and go get the data at the time of rendering and so even if it was a table I would go on I would log on online I would go to like my business objects reports and I would log in and then even when you click the report the report wasn't ready to go meaning like the data wasn't prepared I had to like click run and it maybe would shoot for like a minute or two and and in that situation like when we're talking about when a report takes a minute or two or three to render to get the data together

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=674s" target="_blank">11:14</a> and then hey now you can download it or export it okay that makes more sense right that to me that was a reason why you'd want to email to you right okay you go prepare the report in front of me somewhere else three or four minutes before I need it and then just email me the results just tell me when it's done right that that makes sense for your legacy thinking but we don't do that anymore that's not a thing you just hit the report within hopefully less than a second the report renders and there's data in it so that's changed the

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=704s" target="_blank">11:44</a> experience other tooling still their navigation compared to powerbi and and I'm I'm speaking more spef migration here it's still I don't I want to say not the best experience subar for some other bi tools out there where there's folders it's really hard to get to what you want so that the email subscription still plays a role because true send me the most important report that I need to see so I don't have to try to find it because guess what Pro yeah or the I'm not the expert

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=736s" target="_blank">12:16</a> yeah so or or it's like you've got 30 reports and you need you need report number one that's the data you got to get every day all the other reports are just you exploring and trying to figure out so there's this there's this really interesting game between yeah there's this interesting game between like data that's actionable and data that's Explorations right so there's this exploration piece of this world that's like I don't really know what I want to do with the data yet but I want something's wrong in the data and I'm just G to hunt through it to try and find what I'm looking for yeah right okay sorry that was your

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=768s" target="_blank">12:48</a> first part you said Legacy part two was what part two is really I think we need to put ourselves in the the shoes of certain positions in companies you talk to a regional sales manager and yeah this is going to be pretty essential to them or at least the perception of that but it's also because what that report is I think a lot of times when we get asked for subscriptions we think just that general report like the sales report and we're going to send that which yeah doesn't tell you anything it's impossible for that to actually be

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=799s" target="_blank">13:19</a> actionable but the types of email subscriptions based on the roles usually in those Legacy things were a little more customized but for different positions it's pretty essential because it's going to show for that day or for that week what the new leads are and how they're doing for that week which it becomes much of a different experience or value to the user or you tell me like hey I I'm the sales rep and this is my last month of quota for the quarter

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=832s" target="_blank">13:52</a> yeah every day I'm going to want to see either every day I'm going to want to see where I'm at if any new people have called and if is that in the report or whatever that situation is I'm using sales as the most General one but that becomes much more critical because again that's the first thing that happens when I open up my computer is I check Outlook that's everyone that's never going away but in the first thing I see is here are my leads I didn't have to find it I didn't have to apply the right filters to make sure that I'm looking at it the right way here's where we're at

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=862s" target="_blank">14:22</a> here's what I am at or my team's at compared to a specific goal now this is much different again I I I think if we just think in terms of the report of a general report we're missing the Mark H interesting okay I'm I'm going to react a little bit I'm letting let that simmer let me let me marinate yeah right nice marinate right okay so so you talked about the second

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=894s" target="_blank">14:54</a> note here around empathy right what is what is the user story and how they interact with the data and so I I think I understand I didn't quite grasp your story at the very beginning but I think as you explained it a little bit more to me I was able to unpack it a bit more so I'm in the sales lead team I want to understand where what my performance is right now how does that link back to other performance areas of this let me let me Let me give a bit more context to some of this right so I think I understand the empathy side right I do

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=925s" target="_blank">15:25</a> think I understand like people on mobile devices reports maybe aren't built rate for mobile devices or I'm traveling or I'm on the go people are very familiar with the interface of Microsoft Outlook or Outlook your email server right whatever that is but I would argue here what you're really trying to do is you're trying to go to a tool that already has an interface and see reports that you should be interacting with inside power.com so let in lie of subscriptions

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=957s" target="_blank">15:57</a> what if I taught your team a little bit more around data culture that the data tooling is changing in this world and no longer are we doing as we're not relying as heavily on emailed subscriptions instead what we're doing is we're going to embed powerbi in teams so when you go to teams there were reports automatically inside teams or shortcuts to team channels or team teams areas where you can immediately click a link and go right to the report I feel like again this is a to me this is a bit of a

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=988s" target="_blank">16:28</a> culture shift here I understand the empathy part but how hard is it to go to the Outlook app versus the powerbi app and click on what you want there you're doing the same thing I'm still going to the app I'm finding the email that is relevant to me and it just so happens that that email is next to all the other patterns that I'm used to in my normal life right I get up I wake I look I see the little red dot okay look there's three notifications in email in in my Outlook click on the Outlook I read through my messages anything that I need to take action on okay done move on next task

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1019s" target="_blank">16:59</a> right so maybe part of this is just data culture education and say look we're not going to do this we're not going to encourage this piece rather we're going to push you to go to the powerbi app get notifications when data alerts from there and then that app notifies you and then you go directly into the powerbi app and use it there a couple other things I'm just going to point out here I did a little Googling here on the side one is you get powerbi in teams directly that I spent a lot of time in teams I'm always chatting

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1049s" target="_blank">17:29</a> and looking at messages in there so in lie of subscriptions I would encourage teams to use Microsoft teams and add the powerbi plugin there because that puts powerbi right next to all of the other conversations you're having throughout your day and I think that's a better place to put reporting also I just Googled you can even add powerbi into your outlook online website or the new modern Outlook so the icons on the left hand and navigation can also

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1080s" target="_blank">18:00</a> be teams to-do lists and then you can add powerbi as another item an action item right inside Outlook and I would also argue this is another one teach people how to favorite the reports highlight the ones they want and put it right inside Outlook like done now you don't need to email anyone and then it's up to date and then you

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1103s" target="_blank">18:23</a> And then it's up to date and then in your reports just add a little flag that says here's the last updated date time of report and done.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1112s" target="_blank">18:32</a> So I understand your point around empathy Tommy but I'm going to push back here just a bit because I feel like that's also going back to this legacy thinking right. If I can build you better information, if I can build you better data, what is the point of sending you the data in an email form?

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1127s" target="_blank">18:47</a> It's not dynamic, it doesn't update. You're now proliferating a snapshot in time of some data. And yes there are use cases where people just want to see a snapshot of the information over time, I get that.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1143s" target="_blank">19:03</a> And so sometimes reporting doesn't contain that or the data design of the semantic models don't retain snapshots of information. Okay, to me that's one of the only use cases I could see around emailing or even sending your report to a SharePoint page.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1159s" target="_blank">19:19</a> I'd rather send the report to SharePoint than just to start junking up a bunch of email boxes. Okay I'm done, I'm done rant on that one, go ahead.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1165s" target="_blank">19:25</a> So in the distance if you listen quietly you can hear the silent cry of people pushing back. I didn't think I was going to be on the other side of this but hold on, let me react to your pushing back. People will push back, yeah.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1180s" target="_blank">19:40</a> But just because you're used to doing something the way you are and you're resistant to change, is that right? I don't think that's right anymore. No no no, this has nothing to do about used to doing it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1191s" target="_blank">19:51</a> Again what is data supposed to be? If you at the very rawest form is supposed to be just another way to convey information. There are a lot of positions, a lot of roles where I don't need most things in Power BI, sorry that's just the situation.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1209s" target="_blank">20:09</a> I do need something, I do need a little but enough for the app and to go there and to find it and is everything already pre-filtered for me. I'm a busy person, I got things to do, I just want to know snapshot where am I at today, what do I need, what is a quick bit of information.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1223s" target="_blank">20:23</a> I don't need to explore and I don't need to dive into other reports. And I know that sounds maybe super elitist but this is a lot of roles, a lot of people. I would wish everyone loved reports and loved diving into data, that's just not the use case.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1241s" target="_blank">20:41</a> Now just sending a picture of a general report, again I completely agree with you we're on the same page. Minimal usage, if any it probably hurts more than actually helps. I think it makes it more difficult to manage data than it helps.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1255s" target="_blank">20:55</a> But you have to consider there are some types of, again if all reporting is information it's just email and number form. That's really what it is, that's what reports are supposed to be, help you convey some information.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1271s" target="_blank">21:11</a> There are some types of email subscriptions and I've dealt with it and I still to this day, it was, I don't want to say not just the easiest but it was probably the most impactful because of what the information conveyed.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1285s" target="_blank">21:25</a> Because here's the thing, let's take your situation. You just tell that team, you guys are outdid here, we're going to put this email or the Power BI in Outlook, which I need to be an admin of my organization to do in order for that to work, or in Teams.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1300s" target="_blank">21:40</a> Which again unless I can add it to the channel. And hold on, why do you need to be an admin of that? I don't, there's no admin of that. I think in order to enable the feature, no I don't think so, you can just add it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1310s" target="_blank">21:50</a> I think I'm thinking if you want an app in Teams, if I want that to show on my global side, maybe there. But there shouldn't, personal per user, yeah. If you have access to Power BI as a license, you do need a pro license to do it right, so that's one thing.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1326s" target="_blank">22:06</a> That's there but you can just click the app, you click the Power BI, there's no admin privileges to this. I'm thinking in Teams if you want it to show up for everyone on the sidebar. But anyways, regardless though, in both situations.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1342s" target="_blank">22:22</a> Yeah well sorry, but to your point, in both situations though, whether it's Outlook or Teams, this is a decision made by the BI and leadership that says you're going to use less printable reports, we're going to turn on these features for you.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1355s" target="_blank">22:35</a> And if your motive is to not email stuff out as much, you want people to just learn how to use Power BI, learn how to go use the data. For sure, I'm bolting on those applications right into Teams, I'm turning on Teams for everyone.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1369s" target="_blank">22:49</a> I'm going to have it just there for people and then because it's there people will use it. Sorry I didn't mean to interrupt, keep going your point.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1376s" target="_blank">22:56</a> And for those types of people where again it's just quick information that they need, there are a lot of types of reports for a lot of different types of roles at companies where that snapshot of data that is contextualized is more impactful.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1397s" target="_blank">23:17</a> Than if I were to go to Power BI, find that report, hopefully they already have the dynamic role level security, whatever I need to do, it's the right page, everything's already there for me to show me here are the leads that came in, here are the things that came out. Cool, and now I can move on.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1412s" target="_blank">23:32</a> Now it's really hard to argue that though Mike, for a lot of people, a lot of teams. I would love to bring everyone to Power BI, that's my number one goal. Listen, based on Carlo's BI, I'm not the data god of data culture for nothing.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1428s" target="_blank">23:48</a> But there, you gotta understand though, I'm gonna argue, I'm still gonna argue, even if you're looking at just a single report page, there's no advantage to getting it in your email box. There's no advantage.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1440s" target="_blank">24:00</a> I still don't think, the only thing I can really think of that makes sense to have data emailed to you, there's already some security implications as well. If you let users or you're teaching your users to subscribe to things and they're getting subscriptions of stuff.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1457s" target="_blank">24:17</a> Fine, let them, I'll teach you how to do it, it's part of the system, no big deal. But if you don't have information protection policies on your data, there's nothing that says people can't be emailing this information out of your company immediately to somewhere else.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1472s" target="_blank">24:32</a> So totally yes, I could post it on Twitter just like I take a snapshot of it. Totally agree, but the idea is that if it gets to your, when you talk about security pieces, your biggest security weakness is your people internally not adhering to your company policies.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1488s" target="_blank">24:48</a> Like this data is confidential, don't email it out to anyone, and here we go, we find people emailing out files and forms and whatever. So do we really know the use case for these data, why are they getting sent an email to us?

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1501s" target="_blank">25:01</a> There's a security loophole here that if you get emailed it and you don't have Power BI information protection turned on, you're going to get data and reports that don't have that information protection piece added to it, therefore it will get emailed out and it could leave.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1515s" target="_blank">25:15</a> So again if you're thinking about your reporting, I think in some situations you're not going to want to turn this on for those reasons. Sorry, keep going. That's it, that's if you don't have information protection on. If you do, it follows through the email.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1529s" target="_blank">25:29</a> So and that's my point, when I step into organizations with Power BI, most of them are not thinking about information protection. And so that's something I'm usually helping them either set up or turn on, or we're trying to work with.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1539s" target="_blank">25:39</a> Again, information protection is more than just Power BI, it's actually an Outlook, Excel, it is a Microsoft Office 365 information protection feature and Power BI adheres to it when you're using it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1553s" target="_blank">25:53</a> So if you don't have that on for the rest of your Office products, one that's a miss, you should start really seriously thinking about it. There's a bigger problem here than Power BI, correct.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1566s" target="_blank">26:06</a> So here's the thing Mike, again the situation here is, it's really honestly shifting the idea from we're emailing someone a report to these types of reports, just like we talked about with pie charts too.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1579s" target="_blank">26:19</a> Honestly it's about the context, it really is. And there are types of information, and all data is supposed to be is information. It's supposed to be just information, it's in number form, just like if I read an email that was two sentences long.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1593s" target="_blank">26:33</a> Or actually to your preference, bullet points, and had the right information. I like bullet points, yep right. And for a lot of people too, their version of bullet points is not going to the Power BI to look at a single report, right.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1606s" target="_blank">26:46</a> Because it's the quick, the right information, the quick information of this week, something that has to be pre-filtered. Because here's the thing, email subscriptions will never work if it's not something that's dynamic or just a general report.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1621s" target="_blank">27:01</a> And that situation, every single time 10 out of 10, we're pushing them to Power BI. That's part of the data culture thing. But then there's a lot of these, I don't want to even call them niche because they're not niche, because they happen all the time and there's so many situations.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1639s" target="_blank">27:19</a> That something like this makes sense, especially if you're starting out, especially if you are just starting with Power BI and you're going to tell everyone, again unless you're the data czar and what you say goes, and if that's your role great. But here's the thing, you can't force your

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1655s" target="_blank">27:35</a> Here's the thing, you can't force the sales manager or their manager right off the bat to start using Power BI. You can try, and if everyone says great, great. But there's a lot of people that have to come for the long ride.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1670s" target="_blank">27:50</a> I don't remember the philosophy but there's always like a 60/20/20 split. 40% of the people will go right away when anything shifts, 20% will lag, and then there's the rest just stay for a lot longer.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1687s" target="_blank">28:07</a> Anytime you were trying to shift into a new tool, you're speaking to the adoption curve. And I think it's actually much less than that. I think you're going to have of your organization 10 to 20% right quickly adopts the new technology and they're like oh yeah this is cool, I'll try the new thing.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1704s" target="_blank">28:24</a> Let's do it and they learn it and they do it, and then you need to get to as you adopt the new tool, when you get to around 40% or a little bit around that 40 to 60% ratio, at that time now you have enough ratio where you're saying you've now gained critical mass.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1725s" target="_blank">28:45</a> And now people are regularly investing, getting into the tools. So yeah, I see what your point is there Tommy. But on the other hand too, if your company is starting from whatever, people migrate from other tools all the time, right?

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1737s" target="_blank">28:57</a> And where I see this coming from, this has been bad habits or this is bad thinking from other tools. It's coming from Qlik or Tableau or other reports, any visualization tool that you're using nowadays.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1751s" target="_blank">29:11</a> There usually is some aspect of them being able to email reports out because that's what a feature people ask for. But my argument would be, you don't really want that. What you really want is concise information shown to you on a single page that you can look at and leave.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1770s" target="_blank">29:30</a> So the only situation I can see here where emailing yourself information or reporting pieces is coming from paginated reports. Paginated reports feels to me like that's the only thing I would really want to email to people.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1783s" target="_blank">29:43</a> Because what happens is we're taking a large semantic model or a semantic model that has information specific to you, Tommy, going back to your example earlier around sales leads, right? There's a larger pool of information, all the sales information.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1795s" target="_blank">29:55</a> I'm catering the information to just you Tommy, and then I'm going to send you the email link of a little bit of data, enough information that you can then go through that list, import it to Excel, open up the CSV file, open up the Excel file, whatever the thing is.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1811s" target="_blank">30:11</a> And then just say okay, I've gone through each one of these leads and I'm making comments or information against them. And I'm taking data that I'm getting from the model and I'm doing something else with it, something else ad hoc.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1823s" target="_blank">30:23</a> So whenever I got data emailed to me from systems, it was always to get an email to me in summary form so I could then pick it up and do my own data analysis with it after the fact. To me that's the only use case that I see here to put data.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1838s" target="_blank">30:38</a> And again if I had to rank or prioritize things, I would prioritize less of getting the data emailed to me because again I just don't want to junk up the email inboxes. Again a lot of this is online right, so in the old day there were servers in the organization and those servers would fill up because the emails take up space.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1861s" target="_blank">31:01</a> Now it's all in the cloud so it's a lot less of an informational effort. But in my opinion I'd rather have that report push the data or the CSV file into like a SharePoint page, and then if I'm building downstream processes on that I could get the data into SharePoint.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1882s" target="_blank">31:22</a> I can point my other Power BI semantic models or whatever my local analysis done in Excel or Power BI, I can point to that SharePoint drive. I can immediately pick up the information and now I can build automation loading of that data that comes out of the semantic model in a subset or pre-filtered view.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1897s" target="_blank">31:37</a> So to me that's the only solid use case here of why you would want to email people. And even then I would argue there's this data shift culture here of like when you move from these other tools you have the opportunity of setting the culture for your company.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1911s" target="_blank">31:51</a> And I think the culture here is I need to show you we're making the migration, this is the way we will do things. And then you do a heavy amount of education around making it easy for people to use these new techniques.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1927s" target="_blank">32:07</a> So it's funny you say about shifting from a different product because to be very fair there's a lot of organizations who have had Power BI for years and they still haven't adopted it from a data culture point of view.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1938s" target="_blank">32:18</a> And so to me, there are people who are in the same boat as anyone who's just coming from a new tool because they're coming from something. That's what I'm trying to say, but if they even if they've had Power BI for four years, they're still doing something with whatever.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1955s" target="_blank">32:35</a> The reason they're not adopting is because they're still just using Excel or Access databases, there's something else that's supporting the reporting that they need to do anyway.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1971s" target="_blank">32:51</a> So regardless of whatever you're doing there, even if you had Power BI for a number of years and the company hasn't fully adopted it, I find the issue here is it's less about the person asking for something to be emailed to them and it's more about data culture.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=1987s" target="_blank">33:07</a> It's more about no one has spent the time to understand the use case and actually articulated back to the business here's what we should be doing. This is what Power BI can do. By the way for everyone, your reports will be driven to you via powerbi.com, go to Outlook here's how you get to it, go to Teams here's how you get it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2007s" target="_blank">33:27</a> To me there's an education and that should be again as the central BI team, the center of excellence, these are things that they decide of how as an organization we want to behave and then that gets pushed.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2021s" target="_blank">33:41</a> Fine, but again if they already don't have, if they've been four years and they haven't adopted Power BI yet, they probably don't have a center of excellence. So someone making decisions about data, yeah someone, but if they're not it just speaks to the effect.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2039s" target="_blank">33:59</a> If you don't have some thought or forethought around a centralized team thinking about what your data needs are, or there's not a person doing this or building centralized things out to the organization, already you've told me what your data culture is like.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2051s" target="_blank">34:11</a> I already know it's immature, you're not doing the right things, it's not mature enough on the scale. And when I go to the Power BI adoption road map you would score very low on that. That means they're not adopted, we know that.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2065s" target="_blank">34:25</a> Well, and that just means in general your data culture needs growth. So no amount of tooling, no matter what you provide — Qlik, Tableau, whatever — no amount of tooling is going to fix that problem. That's a core different problem you're trying to solve for.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2079s" target="_blank">34:39</a> So to me, I'm looking at going, if you're at that level and you're saying we're just now trying to adopt Power BI, it's still not even getting out to the organization, and you're pushing for "I just need you to email everything to me," that just tells me we're very low on the data culture scale.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2098s" target="_blank">34:58</a> I agree with that, but let me see if I can make a compromise with you, at least for the time being. I'm still waiting to hear an example of something that's useful in emailing stuff yet. You sent some examples here, I get your examples, but to me they're still like why can't I just use a report?

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2117s" target="_blank">35:17</a> Because you love Power BI, you live in Power BI. I bet you 80% of your day there's a tab open that has Power BI on it every day. If you had a tracking tool, whether or not you're on it — I said pinned tab.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2133s" target="_blank">35:33</a> Well, there's a bookmark for it in every browser that I have, I'll give you that. Every browser, if I'm working on a client, I start a browser for every single client, the very first bookmark in every single one.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2147s" target="_blank">35:47</a> Every single Edge that I have has the very first bookmark is always powerbi.com for every tenant that I'm in. So yeah I'm with you. Let me break your heart — not everyone feels the same way about Power BI.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2161s" target="_blank">36:01</a> I know and it hurts me too, it hurts me. Grow up, people, grow up. And again I agree with you, I was trying to think of examples pertinent to you that would have been nice for an email in a day, but I'm like Mike's never gonna — it would never work.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2178s" target="_blank">36:18</a> I was trying to set you up but it's not gonna work. To be clear I'm not against it, it's more along the line of I don't see any reason why I couldn't just replace it with an equivalent report. You could, of course you could.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2191s" target="_blank">36:31</a> But that's my point though, my point is any argument made against these things, it's easily replaceable. Just because you can create it doesn't mean for certain situations, people who don't bookmark Power BI and when the first thing they do when they get a new browser, who maybe forget to do it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2208s" target="_blank">36:48</a> They forget to do it or again they only have very specific information out of all of your semantic models and all the data culture land. There's only a little bit that's important to them but that's essential to what they do.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2221s" target="_blank">37:01</a> Right, of course there is a report that they can see, there is a report that they can dive in, but there's a lot of information from supply chain again to sales to what are my top product or what broke last night or whatever the situation was that maybe occurred in the last 16 hours.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2239s" target="_blank">37:19</a> Where I'm already checking email and I guess what, I live in so many other technologies and products that I could go to Power BI but is it already filtered, where that quick bit of information is. Again this is where the shifting where this email subscription is no longer about sending a report.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2259s" target="_blank">37:39</a> Because if that's the perception then we're thinking about this wrong. It's taking all the data that you've created and all the structured and semantic modeling and using semantic in the context of what it actually means and providing the right bit of information to the right people.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2275s" target="_blank">37:55</a> Again of course all of it can be done in report. There's a lot of people who were simply taking all this work that we've did and bite sizing it down to two bullet points. And man those two bullet points are essential to them and that's all they'll ever need.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2291s" target="_blank">38:11</a> And that has nothing to do with the data culture, that's a lot of roles and it almost feels frustrating to say that too because of all the work we've done. But that's the job at the end of the day is to take all this raw data, give it a schema, give it semantics and make it just information that people all walks of life can understand in my organization.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2317s" target="_blank">38:37</a> What's the difference between getting an emailed report and analyzing Excel?

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2323s" target="_blank">38:43</a> Oh you are shifting gears! But I would, you ready Tommy? You ready? I'm gonna attack. Okay you have an argument and I'm going after the foundation here. All right so what is the, those are completely different situations, two different people, tell me how it's different.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2341s" target="_blank">39:01</a> I want to hurt my brain so I go to analyze in Excel. So I want to get a headache so I go to analyze in Excel. No, analyzing Excel is I'm looking at something already in Power BI and I want to dive in further with my own context.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2356s" target="_blank">39:16</a> I want to take the data that I'm seeing, I know the data to have, I want to provide my own formulas and see in a different way. We use analyzing Excel for business analysts usually, only that's the when our adoption, actually just a project I worked on last year.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2374s" target="_blank">39:34</a> The analyzing Excel was not for the consumer, it was available but we pushed it for the business associates who already lived in Excel. Correct, and that's different because I'm probably someone who already has Excel open more often than not.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2390s" target="_blank">39:50</a> Okay so let me hang on that point right there. So there's a couple use cases I see here right. The reason I'm seeing the two arguments I'm hearing you say is one is page reports are for those users or those teams that just need data that's just sent to them.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2404s" target="_blank">40:04</a> It's a glance, look at some information and then I'm moving on to my day. It's something that's just available to me in my inbox, I look at it, move on. The other hand of this one, I'm looking at this going there's another use case specifically for these users that are getting CSV files given to them.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2422s" target="_blank">40:22</a> And what they're asking for is they're asking for up-to-date data in the most recent version of the semantic model. So I think where I'm formulating some thoughts here is my argument is as I look at all the effort that we're doing to build semantic models.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2440s" target="_blank">40:40</a> As to look at all the effort we're doing, this cost, the investment of our company, we've already made the committed decision to say we're going to spend time with a consultant, with some other people, we're going to learn how to semantic model data.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2454s" target="_blank">40:54</a> And maybe even get to the point of we're going to make sure that some of the stuff is certified. We're going to build things that multiple teams need to use and consume. That's going to cost companies money and time, that's things they have to build and then in lieu of doing something else.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2470s" target="_blank">41:10</a> So my argument would be here is why spend all that time, money, effort to build this more modern thing and then just go back to habits of emailing it out to everyone, right. The other part here too it's like what are the use cases of what we're talking about here for emailing.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2485s" target="_blank">41:25</a> I would argue it's just look at the report quickly and then it's I need to have that data or export it to CSV so I can then do further analysis with it. Well in that situation I would just push people towards okay well you don't even need to go to Power BI, here's an Excel file connected with analyze in Excel to your semantic model.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2503s" target="_blank">41:43</a> We've already invested the money, the time, the effort into the semantic model, therefore here you go, here's the solution that you need and it's better than what you've been doing previously. Oh and also not only is it better, you can also get refresh data throughout the day because maybe we're refreshing the model every hour.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2524s" target="_blank">42:04</a> Right, you get people to adopt your new way of thinking by making their life easier, whatever that may be. And so if you can't provide more story to the actions and the features of why Power BI exists now for your organization, it's going to be much harder for them.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2549s" target="_blank">42:29</a> I am with you, they're going to migrate to this new thing. So going back to your point here, again I know Tommy you're still working on this thought here around this one. I think this is just purely a data culture move around what is really valuable to the organization and just really evaluating where is your effort coming from.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2567s" target="_blank">42:47</a> And again since you've already spent the effort to make semantic models and the investment of time and money there, you just got to finish out the story. You've got to complete it and make sure that you have the rest of it done and let people use it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2579s" target="_blank">42:59</a> So when I'm doing training and introducing Power BI to an organization, and I do this dashboard in a day and other ones, the wow factor that I do that says hey we're about to spend eight hours together, or hey you're about to invest all this money in Power BI.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2596s" target="_blank">43:16</a> Is we show them a report in Power BI, show how it works. But what when I then show them is oh look I can now analyze in Excel, I can use it in PowerPoint, it can be used in Teams as well. And the point that I always try to convey, the pressing point is this was all a report.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2618s" target="_blank">43:38</a> When you think of a report this is a single model of data that is now living across Microsoft and is now your source of truth. And I honestly, the analyze in Excel, there's a reason why it's there and Microsoft has not taken it away.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2635s" target="_blank">43:55</a> It's because there's 700 million monthly users in Excel. And on the most recent sales call from Microsoft they said there's 30 million monthly active users for Power BI and there's like 700 million users monthly for Excel.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2653s" target="_blank">44:13</a> You're talking about like a 10x, over 10, 20, 200x increase. The truth is you have to integrate with Excel, Excel is the business tool that everyone uses. They're almost at a billion users, that's almost one-seventeenth of the entire world population.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2671s" target="_blank">44:31</a> That's, Tommy I can't even fathom building software for a million users a month. That team must be massive inside Microsoft because the amount of revenue that thing's pulling in, bringing back, that's crazy big dude.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2689s" target="_blank">44:49</a> So to me looking at this you've got to bolt into where the people are, for sure. Yeah so honestly and I think that's a nice wrap here because I'll steer near closing thoughts.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2704s" target="_blank">45:04</a> But honestly Mike when it comes to if I'm sending out emails to everyone and I'm just sending them the reports that I have, it's going to do more harm than good. Everything you said I agree with, I completely agree with that.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2715s" target="_blank">45:15</a> I want to push, you have to push people to Power BI that way. But just like there are situations with Excel, with analyzing Excel where I can give them the source of truth. Again there are pieces of information that we need to bite size into bullet points for people.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2732s" target="_blank">45:32</a> It may be the whole world in a semantic model, in an ocean that someone just needs to see in a cup so to speak. And if I can do that where I'm meeting them where they're at, well there are good situations.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2745s" target="_blank">45:45</a> Now if we can eventually move everyone to Power BI and we can give them more things to look at in Power BI, great. But to me email subscriptions is one of those features in Power BI that it should not allow you to do it. It's one of those, it's almost a case of...

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2759s" target="_blank">45:59</a> It's one of those, it's almost a case of really it's too easy to create, like just everything in Power, which is awesome. I can create a database in two minutes or less. But there are some things that are just too easy to create because of the implications of it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2775s" target="_blank">46:15</a> To me, email subscriptions should say wait, you're just sending a general report to a team, are you sure you want to do that? Where it needs to have predefined filters, it should be something much more specific to actually have any impact.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2791s" target="_blank">46:31</a> Regardless Tommy, people are going to ask for this. They're going to request the ability to email things. It's just again, to me it's a feature that every other tool has. Power BI also has it as well. They've done some really interesting things around dynamic subscriptions which I think is very useful.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2811s" target="_blank">46:51</a> You can then dynamically create filters for reports that give you narrowed down information. Awesome, do agree. I also think that the Microsoft product team has done a really concerted effort to make sure Power BI is as close as possible.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2824s" target="_blank">47:04</a> I remember when Power BI came to Teams, everyone was really excited about it. Like wow, it's in Teams, we can have conversations, I can email you reports, all these things. Where Power BI becomes this much closer aligned object to what's happening in Teams.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2838s" target="_blank">47:18</a> I think it came in with a lot of fanfare, but in practice do a lot of people actually use that over and over again? Probably not a ton. I do think there are habits that need to change.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2854s" target="_blank">47:34</a> I do think people are going to go with this. I think what we're really addressing here is a data culture challenge. As we look at this experience of getting into using Power BI versus having everything emailed out to you.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2868s" target="_blank">47:48</a> I think if you understand that and you are a leader in your organization, you really want to focus on what can I do to help users understand. How can I make your life easier by giving you more capabilities inside powerbi.com, right?

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2885s" target="_blank">48:05</a> And showing you how to do the things you need to do. At the end of the day there will be people that need subscriptions. I think what I would put as my final thought here is, if someone is going to ask me to show them that feature, I'm going to clearly say I will show you this feature, there are better ways.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2901s" target="_blank">48:21</a> So I will teach you this feature only if you allow me to teach you a couple other things as well, right? Rightfully so, I want to make sure people experience the full capabilities of what the program is for.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2915s" target="_blank">48:35</a> And then I made a note here that said, if you are getting requests to do that, I really wish there was a closed loop here to some degree, right? The subscription would turn on, the subscription would then send you emails, and if those emails never got opened for like a month, then it just turns off the subscriptions automatically.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2933s" target="_blank">48:53</a> So maybe the subscriptions could be like a short-lived something, right? They should maybe live on for a period, subscribe to it, give you the subscriptions for a period of time, and at some point the subscription just says look, I'm smart enough to be aware that you're not actually opening these emails anymore. I'm just going into a folder, and it just turns off the subscriptions.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2955s" target="_blank">49:15</a> Realistically, that could be a thing. I would even argue, if you want snapshots of reports in time, okay fine, we will email you them, but we will no longer send it to your email. Instead we'll put it to a SharePoint drive.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=2984s" target="_blank">49:44</a> So I think there's also some progressions here. I think emailing things is like the lowest bar of the ladder, and then as we work our way up we start talking about okay, the next bar of the ladder would be let's push things to SharePoint pages so you can have a tracked record of every day when this report came out.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3001s" target="_blank">50:01</a> You're not junking up your inbox and you have a record of those things. And oh by the way, when you move on from your organization and you're no longer here with the company anymore because you've gotten a promotion or you've moved on, where did all those reports go? Who's using them? Are you going to forward all those emails to someone? It's now just wasted information.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3021s" target="_blank">50:21</a> That next level up of push things to SharePoint I think is a better solution, because then when you move on, that record of information could still live on in your organization. So that's next level.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3029s" target="_blank">50:29</a> And then I think your third level on the rung is let's start integrating the Power BI experience closer to where you're already using other tools like Outlook and Teams. Let's teach people how to use the product as it's intended and build a bridge.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3044s" target="_blank">50:44</a> So I think that's to me, I'm not going to stop you, but I'm also going to say look, there are better ways. And somewhere on that ladder maybe between rung two and three is like Analyze in Excel, that's somewhere in there as well.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3056s" target="_blank">50:56</a> Because you need access to the data. At some point you're going to get people smart enough or comfortable enough to be their own analysts. And they're going to be an advanced analyst, so you're going to give them direct access to a semantic model and say go build your own stuff, you understand the information enough.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3071s" target="_blank">51:11</a> Or hey, here's a bunch of lakehouse tables, go build your own semantic model on top of the lakehouse. So there's going to come a point in time where the adoption or certain teams are going to understand the system better, and you're going to give them deeper access all the way down to table level at some point in the future.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3088s" target="_blank">51:28</a> So that's the progression I see, and that's what I teach to people, to let them know that's what I'm trying to get them towards. Anyways, lots of thoughts. I'm sorry I'm so opinionated on this one.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3100s" target="_blank">51:40</a> Honestly, two funny things that you said that I can't let go. First off, the idea of I'll teach you email subscriptions but I'll teach you the better way, is the same as saying I'll show you where McDonald's is but only if you let me show you where Smashburger is too.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3117s" target="_blank">51:57</a> Sorry, that's the Milwaukee thing. Yes, that's the Milwaukee version. Actually we did a burger test, our family did. Yeah, so it was like one of those cold, not snowing days. That's a fun idea. Oh it was phenomenal, we went to I think like six different fast foods, just cheeseburger, no ingredients, blindfolded.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3144s" target="_blank">52:24</a> Yep, I think I put Culver's two out of, it's pretty up there. Not bad. Well I've heard people, we don't have In-N-Out. Insane, yes. And there is In-N-Out Burger like down south. And I've heard a lot of people like In-N-Out Burger, so we took my family there, we had some animal fries one time and they were loving it.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3161s" target="_blank">52:41</a> They were like oh this is so good. I'm like, this is way better than Culver's. I'm like, ah I'm not sure about that guys. And I've even seen influencers on the internet going, well Culver's is almost the same level of goodness as In-N-Out.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3176s" target="_blank">52:56</a> So I think there's a level there that we're talking. Yeah, here's the difference though, because again, not coming from the Midwest initially, my brain explodes every time I go into Culver's and I see the thing called cheese curds. Like yes, the idea of that's so insane, it's amazing. Fried cheese, it's crazy, just incredible.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3196s" target="_blank">53:16</a> So yeah, awesome. So in your test, you were finishing your story there Tommy, I didn't mean to derail you. Go ahead. Oh no no, I was saying that we put Culver's up there, I think I ranked it two or three out of all. What was number one though, that's the most important thing, do you remember? Portillo's.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3212s" target="_blank">53:32</a> Portillo's, interesting. Dude, they got burger too. Okay, I did not know that. Their burger was so good. Excellent. Well other than that, I don't have anything else. That's a good wrap up for this episode.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3224s" target="_blank">53:44</a> So if we ever, if data ever goes south and people really decide to email everything and the reports and they're no longer needing Tommy or I to help them build reporting anymore, we will go do a food taste testing across the nation. We'll take it on the road, we're gonna go find the best burgers in the US.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3243s" target="_blank">54:03</a> Awesome, so Tommy's already hungry, he's going to go have a burger now for breakfast. Oh that's hilarious. All right, that being said, thank you all so much for your time listening to this podcast. We know your ears are valuable, there's a lot of things you could be listening or watching or entertaining yourself with, so thank you for spending time with us.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3256s" target="_blank">54:16</a> We hope you found some value and what we were communicating to you about Power BI subscriptions, the things that we're learning in our consulting and daily jobs around Power BI things as well. Hopefully you'll take some of these things away and think about them.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3269s" target="_blank">54:29</a> The whole goal here is to just get you thinking about this topic, this area, and how does this fit in your data culture inside your organization. Maybe you like some of my points, maybe you're on Tommy's side a bit more of like there are use cases and you're just going to stick with paginated reports. So that's okay, I just won't talk to you.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3289s" target="_blank">54:49</a> So that being said, if you like this podcast please share with somebody else. Let somebody else know this was a topic that you were interested in, it was useful and it helped you unpack a little bit more about understanding subscriptions to some degree.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3300s" target="_blank">55:00</a> Tommy, where else can you find the podcast? You can find us Apple, Spotify, wherever your podcasts. Make sure to subscribe and leave a rating, it helps us out a ton. Share with a friend since we do this for free. Do you have a question, idea, or a topic that you want us to talk about a future episode? Head over to powerbi.tips/podcast, leave your name and a great question.

<a href="https://www.youtube.com/watch?v=FK2T-kyRTsM&t=3317s" target="_blank">55:17</a> And finally, join us live every Tuesday and Thursday 7:30 a.m. Central and join the conversation on all powerbi.tips social media channels. Awesome, thank you all so much, we appreciate you, and we'll see you next time.



## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
