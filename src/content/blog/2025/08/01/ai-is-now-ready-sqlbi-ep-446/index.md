---
title: "AI Is Now Ready – SQLBI – Ep. 446"
date: "2025-08-01"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "AI"
  - "MCP"
  - "SQLBI"
  - "Power BI"
  - "Copilot"
  - "Kurt Buhler"
excerpt: "Mike and Tommy discuss SQLBI's bold claim that AI in Power BI is ready to pay attention to—driven by MCP servers that let AI agents query and control Power BI. Plus the Fabric July 2025 feature summary."
featuredImage: "./assets/featured.png"
---

SQLBI says it's time to pay attention to AI in Power BI, and Mike and Tommy agree. The game-changer? MCP servers that let AI agents interact with Power BI programmatically. Plus a recap of the Fabric July 2025 feature summary.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/Zrce4z4ClMs" 
  title="AI Is Now Ready – SQLBI – Ep. 446"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News

### Fabric July 2025 Feature Summary

Key highlights from the monthly update:
- FabCon Vienna announced
- Power BI turns 10
- Domain tags and OneLake catalog updates
- Fabric Data Agent integration with Microsoft Copilot Studio
- Improved execution and streaming results in Data Agents

[Read the full summary →](https://blog.fabric.microsoft.com/blog/fabric-july-2025-feature-summary?ft=All&WT.mc_id=DP-MVP-5002621)

## Main Discussion: AI in Power BI — Time to Pay Attention

### The SQLBI Article

Kurt Buhler's article on SQLBI makes the case that AI in Power BI has crossed a threshold:
- Previous AI features haven't delivered transformative impact
- **MCP (Model Context Protocol) servers change everything**
- AI agents can now query workspaces, inspect visuals, diagnose issues, and retrieve files
- The demo shows Claude Desktop diagnosing a dashboard problem end-to-end

### Why MCP Matters

MCP servers give AI agents programmatic access to Power BI:
- Find workspaces, datasets, and reports
- Inspect visual configurations and DAX measures
- Diagnose issues like column misspellings
- Even interact with Power BI Desktop
- It's the bridge between natural language and real Power BI operations

### Kurt Buhler's Journey

Mike notes Kurt's move from Data Goblins to SQLBI:
- Now a full-time writer/contributor at SQLBI
- Deep expertise in the Power BI ecosystem
- His enthusiasm for MCP is a signal worth paying attention to

### The Bigger Picture

- AI copilots for Power BI were limited without programmatic access
- MCP gives agents the "hands" to actually do things
- Azure MCP items are now appearing in VS Code notifications
- This is the beginning of agent-driven BI development

## Resources

- [AI in Power BI: Time to Pay Attention — SQLBI](https://www.sqlbi.com/articles/ai-in-power-bi-time-to-pay-attention/)
- [Fabric July 2025 Feature Summary — Fabric Blog](https://blog.fabric.microsoft.com/blog/fabric-july-2025-feature-summary?ft=All&WT.mc_id=DP-MVP-5002621)

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=0s" target="_blank">0:00</a> Heat. Heat. [Music] Good morning everyone and welcome back

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=32s" target="_blank">0:32</a> To the explicit measures podcast with Tommy and Mike. Sorry, it's a little a little slow on the video there. What made it? What happened?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=40s" target="_blank">0:40</a> I don't know if we're going to join. Hello Mike. It's actually really good to see you.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=44s" target="_blank">0:44</a> See you. Oh, we made it. Good. Excellent. Technical hurdles over. All right, let's jump into our our topic today. our main topic for today where we're going to be talking about a Kurt Buer article that has come out from SQLBI. So Kurt has been spending a lot more time with SQLBI. It sounds like SQLBI has hired him on as either a full-time employee or a heavy writer on their on their website now. So Kurt was initially data goblins has now moved over to more of the SQLBI space. And I can definitely tell that Kurt is 100% enamored with this MCP land. he somehow found these MCPs.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=77s" target="_blank">1:17</a> These are for AI generated models that give you control to like run queries, do iterative calculations, all kinds of really fun things. But Kurt has been on a tear recently and

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=92s" target="_blank">1:32</a> Tommy whenever Kurt has been producing any comments or data around a or PowerBI in general, I've always loved to listen to what his thoughts are. He's very well thought out. He's very comprehensive in what he articulates around PowerBI. So to have him jump on so heavily to this MCP experience, it really has me wanting to listen and really to understand and the impact of this. Okay, that's our main topic for today. Let's jump into some news articles here. , we get a couple things. So, one thing I also kind

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=123s" target="_blank">2:03</a> Of point out here, Tommy, you're down in Chicago, right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=127s" target="_blank">2:07</a> I am in Chicago. Yeah. All the way down here in Chicago.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=129s" target="_blank">2:09</a> All the way down in Chicago. Way way down in Chicago.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=132s" target="_blank">2:12</a> I am super far up in Milwaukee. on the north side. Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=137s" target="_blank">2:17</a> I believe I believe our teams are having some some

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=143s" target="_blank">2:23</a> Some beef

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=144s" target="_blank">2:24</a> Fight to the finish. so I I don't know how this long this will last, but Tommy I the the Cubs have been trying to play the Brewers here for a while and they haven't been doing so hot. So I've got to give you a hard time. Your Cubs got to get it together.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=159s" target="_blank">2:39</a> Michael, you should know after four years I I they're probably the second team I support. But Michael, how old I'm a little offended actually still? Now, do I not talk about it enough? Maybe that's it. But yes, for everyone, I'm I do live in Chicago, but you can take someone out of New York. You can't take New York out of them.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=179s" target="_blank">2:59</a> That's true. It's not your home. The Yankees is Tommy's team.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=182s" target="_blank">3:02</a> That is where my heart is. But no,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=184s" target="_blank">3:04</a> That's where his heart is.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=184s" target="_blank">3:04</a> It's been fun to watch because here's the thing. When I moved here, I was like, I I got I got to like adopt a one Chicago team. And I'm like, well, just get rid of the Jets. Well, how bad can it be after that? And then we play you guys every year and wow, there's a complex there that I didn't know Chicago had about Green Bay. ,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=205s" target="_blank">3:25</a> Do the the question is like does do you actually watch the Cub games? Like do you go to them? Like is it or is it just like you maybe like catch a news article about them? Like it's not you don't follow them as religiously as like the New York Yankees.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=216s" target="_blank">3:36</a> I I know about what's going on with them about like other baseball. I only got so many games I can watch in a day. and my friend. So

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=222s" target="_blank">3:42</a> Friend. So that's true. That is true. Those baseball games are quite long to watch.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=226s" target="_blank">3:46</a> Well, they actually we get into this another day, but they got they brought his analyst on who basically was part of like the whole money ball and he became like this guy of making baseball better.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=236s" target="_blank">3:56</a> Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=237s" target="_blank">3:57</a> Yeah. They've gotten games down by like I think it was like 20%.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=240s" target="_blank">4:00</a> And now every game Yeah. Yeah. So it's actually not nearly as bad to watch.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=246s" target="_blank">4:06</a> So

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=246s" target="_blank">4:06</a> So

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=246s" target="_blank">4:06</a> So agree with that. That was one of my complaints with baseball or still is. It's just like a long game. When I was a kid, I used to play baseball and I would just be like, I'm sitting out in this outfield and there's nothing going on for like I run all the way out here, nothing happens the entire time and then I go back in I'm like and then I can't hit this dumb ball to get on first base. It was just Yeah. Wasn't really my sport. I think wasn't really my sport. Maybe had I got into more of the statistics, the numbers, the math behind all the the statistics that are captured from baseball, that might have been a bit more interesting to me then. but I never really got into the math.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=278s" target="_blank">4:38</a> Oh. Then you're then you're the nerd on the dugout and I've been that guy like he 20% of the time he's going to throw inside. Just letting . So, , can't do that.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=288s" target="_blank">4:48</a> Tommy's heckling with numbers. I think

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=294s" target="_blank">4:54</a> You don't know the square root of two.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=296s" target="_blank">4:56</a> Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=298s" target="_blank">4:58</a> Yeah. I'm making it my whole shift because I think there's statistical significance. This guy's like to hit it right. Anyways, all right, dude. There's

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=305s" target="_blank">5:05</a> If you tap the bat on your foot twice, you're 10 times more likely to hit the ball. ball. ball. This is why this is why these people in statistics baseball you cannot think what you think the best baseball players think when they're up see the ball hit the ball couldn't do that I like all right he just threw high so what's the likelihood of him throwing high again

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=323s" target="_blank">5:23</a> High again yeah right it's almost like it's almost like running like a blackjack table where you have like the this like the numbers like okay you have to count every card as it comes through so if the odds are slightly bent in your favor or not but it's so minimal like and you can't want the whole team to be like keeping track of like all the numbers all the time. Exactly. Oh, okay. Awesome. Let's move on. Sorry. I'm sorry. I'm going to I was just

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=345s" target="_blank">5:45</a> I appreciate that.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=346s" target="_blank">5:46</a> You're welcome, Tommy. I was

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=349s" target="_blank">5:49</a> Our our teams in Milwaukee are always competitive with teams down in Chicago.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=353s" target="_blank">5:53</a> Crazy. It is crazy you guys are always good. You guys are from a budget point of view, too. It's insane.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=358s" target="_blank">5:58</a> I I don't know if it's something to do with like just the the level of like the fact that we're in proximity. We're nearby. Maybe maybe there's something to the effect of like, , we want we're we're playing above our our pay grade because we're trying to keep up with the pay grades that Chicago can produce with their team. So maybe so maybe our teams are a little bit above average because we're playing with harder people. It's almost maybe speaks to the idea of like when I talk about building the team of people, right? I talk about building team people

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=389s" target="_blank">6:29</a> And I want to work with people that are smarter than me or know more than me or be around people in my learning spaces that are more narrowed in or or honed in on their particular skill. One of the people that I can clearly say is out of my league and I I'm just happy to know them is Daniel Marsh Patrick. I don't know if him from the project.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=409s" target="_blank">6:49</a> Project. We stayed together the MVP somewhere.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=412s" target="_blank">6:52</a> Yep. Yeah. So Daniel Marsh Patrick is the de is the developer for Danb which is a interpreter for Vega and Vega light inside PowerBI desktop and so I've had the privilege of working with him over the last couple months and he's one he's amazing

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=428s" target="_blank">7:08</a> Amazing incredibly intelligent understands things that I can't even comprehend and he's taking these two worlds like all the knowledge of like PowerBI desktop and how it like handles and passes data from desktop into a visual which is not simple in its own right and Then he takes this other complex thing like Vega and Vega light understands how it builds every visual and he's taking these two disperate worlds and merging them together into this product that is DAB does it all for free like it's it's one dude this this one visual I I guarantee you the number of visuals you

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=462s" target="_blank">7:42</a> See on the Microsoft fabric store the one visual called DB can likely replace 80 to 90% of all other visuals on the on the market on the Aza the app source marketplace the fact that it can do almost anything. So I'm so I'm very enamored by the DAB project. It's so incredibly powerful. Really like what it's doing there. And I I feel like Microsoft made a huge miss by not building all their visuals like on a DAB

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=489s" target="_blank">8:09</a> Vega and Vega light specification. Like there's probably a spec behind each of the visuals that Microsoft produces. But they should have stopped trying to like build every visual with a drag and drop feel. Yes. under the hood there's like a spec but the the surfacy part like the dragging this field dragging this data field here they should let you drag data fields into a pane and then hit like the code button right and then if you're a simple user you can just drag and drop fields in you get that simple user experience but then there should be like a behind the scenes look at the visual like here's all the

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=520s" target="_blank">8:40</a> Specification to build the the visual itself and then in there you could add all this extra code language syntax and then everything could be adjustable. So that to me I feel like it's just a big miss but whatever either here or there.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=536s" target="_blank">8:56</a> Dude, you're you're touching on two things. One, you're basically going on the conversation that we had on Tuesday at the end of the day when we were talking about hey you want to do really neat things. There is a technical side of this but not cool is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=550s" target="_blank">9:10</a> Okay that's got to be in episode two which is probably more we can talk offline about this but

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=555s" target="_blank">9:15</a> DAB is just JSON right it's simply JSON

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=559s" target="_blank">9:19</a> Yeah the DB is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=561s" target="_blank">9:21</a> What they would say it's a visual

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=563s" target="_blank">9:23</a> JSON language syntax

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=565s" target="_blank">9:25</a> Yeah it's a it's a grammatical language for building visuals basically it's it's a grammar language so you say I want to build a bar

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=574s" target="_blank">9:34</a> And then you say I'm going to on logic.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=576s" target="_blank">9:36</a> Yeah. Yeah. I'm going to I'm going to bind data to that. , and it's written in JSON, but it doesn't have to be, right? You could use YAML, you could use other types of language.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=583s" target="_blank">9:43</a> So, the reason I'm saying this is , I'm I'm sure Daniel's already thought about this, but do what all of our favorite tools of the day like to work with, right? And why

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=596s" target="_blank">9:56</a> And why our AI tools?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=598s" target="_blank">9:58</a> Oh, MCP.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=600s" target="_blank">10:00</a> No, any all of them like your any tooling that markdown

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=606s" target="_blank">10:06</a> And JSON it is it's like the language that's sent from the API of structure and also got the fields so and I think that's been the hardest thing with trying to generate visuals with AI it's just has not been easy because

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=620s" target="_blank">10:20</a> You're trying to get like to your point the even co-pilot struggles with it because it's trying to take a language or syntax of whatever those PowerBI visuals are built on which is probably not the most friendly for a computer is really friendly for the person and it's probably hard to understand all the different attributes there but if you can just simply I don't know man so

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=644s" target="_blank">10:44</a> Yeah I I don't know if we can get AI to build an entire application now now people are touting like they have AIs that can do like clawed code and other things here that can build entire applications with like a couple clicks I think Microsoft just released GitHub Spark and maybe it's been out for a little bit. Did you see that Tommy? Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=664s" target="_blank">11:04</a> Okay. So, GitHub Spark was really like this GitHub dream it, see it, ship it. That's their mantra on this one. And this is a GitHub enabled experience that you talk to VS Code and it builds you the app and then you tweak the app using your language and then you the idea is like you can easily deploy this app right into something that Microsoft's building. So, this if it can do if it can build an entire web application, why on earth can't we build a visual a good visual, right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=695s" target="_blank">11:35</a> That seems beyond me. Anyways, let's move on. We'll get to more of the AI pieces here in a bit. , the world is quickly changing around us. And so, , before we get into our main topic today, let's hit up some some key features. Tommy, there's an article from Microsoft here, the Fabric July feature summary. Let's go through and let's pick some of our favorite features here. We do this every time a release happens. We really like to have people pick out your favorite features. And if you're on the chat right now as well, please let us know what is your favorite feature that was just released from the Fabric July

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=727s" target="_blank">12:07</a> Feature summary that was just released by Patrick Leblanc. Anything that stood out to you, Tommy?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=734s" target="_blank">12:14</a> Yeah, , as always, there's a ton to dive into here. I I don't know if it's good or bad, and I'm just used to every blog update being 900 pages long.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=745s" target="_blank">12:25</a> , but I'm expecting it now, too. Like if you got one that was only just scrolled a little, I think I'd be a little disappointed, but that's the world we live in now. I'm going to start one off right off the bat. It's all around the data agents. one of the things they're highlighting off the bat, too, but there are some really important things that we've talked about, not just when we say a developer, but really if you're going to work with these large language models, you're going to work with these agents. If you were going to do a good job of in a sense getting the desired output, it's

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=776s" target="_blank">12:56</a> Not sending it to the world and hoping for the best. It's not just understanding, hey, it get it has a good answer, but why? So, one of the big things here is this idea about run execution where we can actually see the steps it's taking and to come up with a certain answer or deliver the results. And to me like this is just this is very important because a part of that a life cycle piece is saying hey you this person asked this question this is how I interpreted it and then this is what I looked at so you can

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=808s" target="_blank">13:28</a> Identify right away oh they're right they don't understand what table we're even wanting or whatever that query is what step that is the process so it's just going to help us revise what we're trying to do because again right now data agents it's only through a conversational piece that someone can create or update them, which yes, yeah,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=830s" target="_blank">13:50</a> This is also going to play in, I think, to some of our conversation today around like MCPS, the article that Kurt's writing, like what's going on here. , and and one of the things that I don't really love about data agents, it doesn't really feel like I get to pick like the model that it's using. It just is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=846s" target="_blank">14:06</a> Is maybe there's more coming.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=847s" target="_blank">14:07</a> Yeah. Yeah. Actually, it's I think it's the the section above that about choose your data sources. Choose your data source. That's instructions. But are you picking like quad code or like rock or

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=861s" target="_blank">14:21</a> Oh, I'm sorry. I thought you meant like the table. No, no,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=864s" target="_blank">14:24</a> No. I'm I'm with you on the idea of picking the picking the kinds of tables and what data is supposed to be used for. I think that's good, but there's it it still seems a little bit it's rudimentary. I think maybe a bit. It's a good starting point, but I think there's going to be more features here. But like what about the actionbased things, right? What about talking to the co-pilot and and having it do things for you or run multiple queries and then analyze the results and then come back with a think like deep thinking thing. It seems like this new many of the main models now are doing this deep think

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=896s" target="_blank">14:56</a> Right you're letting it spend more time thinking and actually I enjoy

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=901s" target="_blank">15:01</a> Reasoning right so I enjoy standing back and letting people just like asking a model question and say deep think on this and then you'll actually you can watch it to open up the little thinking box and it'll write down okay the requirement is this the requirement is that I found in researching this website page I found this information. So when you start giving the the language model like okay, it doesn't think it knows enough information. It can go to find sources of information, draw them in, it's quite interesting. Okay. Yeah, a really good point. there's a there's not a to be

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=934s" target="_blank">15:34</a> Honest, Tommy, when I look at the fabric blog, usually the fabric blog list of items is actually quite large. Yeah,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=942s" target="_blank">15:42</a> I would say this time it feels a little bit light in general just from the items here. So I don't necessarily see this on the list here. , one thing, one thing I will say is there are some improvements coming for domain tags. So, I really like domain tags. , domains are awesome,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=962s" target="_blank">16:02</a> But now you can add tags to a domain as well, which I think also seems to be pretty interesting as in in addition to this. So, tagging basically helps you expose different items. So, let me step back here for a second. A tag could be added to an item in a workspace, right? So, I have a semantic model. Well, I may want to tag it with something. Put a tag around the content that's in it, who should use it, it's sales, it's ops, like something like that. And then the idea is when you go back to the one lake catalog, tagging is just something you search for. It's something you can come

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=993s" target="_blank">16:33</a> Back and reference later. So, it helps you like group down items at the tag level. Not quite sure which tags you should use yet. , I don't think I would use dev test prod as tags, but like other things, but yeah. No, you should just create a tag for what the artifact you're creating. Lakehouse notebook.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1011s" target="_blank">16:51</a> Notebook. Oh my gosh. Please don't do that.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1013s" target="_blank">16:53</a> I know. We're just like your naming conventions. We know it's a notebook. I can see the icon. But you bring up a good point with the tagging. So, because Mike, I'm still I'm I'm trying to test tags a different way. And I'm honestly still like, is this a governancebased tool or is this a productive based tool? Like, is this something? And I don't know where I'm leaning.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1034s" target="_blank">17:14</a> I don't think this is governance yet. I don't think it's governance. I I think this is more of a

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1040s" target="_blank">17:20</a> Well, Tommy, , when we started doing let's learn fabric series initially, we had made a ton of items in a very short amount of time.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1048s" target="_blank">17:28</a> Would have been nice to like, okay, here's all the data sets that we were building around baseball, right? Having a baseball tag on them. So, like there's a lot of other things. We had like New York taxi data, we had baseball data, we had some lakeouses. And so, , when you start looking at like the chain of things that you're building inside a workspace, it's actually pretty easy to build a pipeline.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1069s" target="_blank">17:49</a> Sure.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1070s" target="_blank">17:50</a> Sure. A lakehouse, a semantic model, and a report all inside the chain that's all related to a particular tag or topic. So, that's that's interesting to me there. But this is all this is doing is extending the tagging experience into domains, which I think as a governance thing, every workspace should be at least attached to a domain. I I think that should be a rule and you should really consider focusing on what are the domains my organization needs and if every workspace was had to get shoved into a

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1102s" target="_blank">18:22</a> Single domain what does that look like for your organization cuz I think that really especially for me I'm an admin when I go and look at my list of domains it's a scrollable list at this point right and having the ability to click or select different domains a handful of them 5 6 7 8 9 10 domains that's really helpful to see all the workspaces that are attached to those areas. So, I think that's actually really important. , I'm going to give you just a bonus one here as well, Tommy. One thing that has really frustrated me when I'm working in pipelines

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1133s" target="_blank">18:53</a> Pipelines is the ability there's the auto refresh of pipelines. So, what does this mean? The feature talks about auto refreshing when you hit run. when you run the pipeline down in the window that shows you like how far along the pipeline has completed its jobs. If you have a lot of short running tasks that take a couple seconds to run, the window that is doing the approvals of like all the items that are getting completed successfully,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1160s" target="_blank">19:20</a> It just auto it's it's real time. Every time it gets another date, it just updates updates updates. And so sometimes you're looking at something or maybe a failure occurred and other things are still running or something happened and you're trying to look at what did it do or how much data was being copied and when you're doing that the the window continues to move on you. And so I have experienced the the pain of like ah stop moving stop moving. And so what they've done now is there is a turn off auto refresh on just the the window that shows you the progress of

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1191s" target="_blank">19:51</a> All the pipeline runs, all the actions in the pipeline. And I actually think that's really very useful because now I can run the pipeline, turn off auto refresh, watch some things go. I can click the refresh when I want. It'll then get the latest data, bring that in,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1206s" target="_blank">20:06</a> And then I can just watch what's left there. Okay, now I can see, okay, okay, this is how far along we are. Click the refresh button again. Nothing moves. I can go look at the different pipelines, the inputs and the outputs, and it's not constantly moving the screen around that I can't see things. So, I think that's a a good workaround for that system. So, it makes it easier for you to use the the output of a pipeline run when you're using testing. So, I think I think that's fun.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1234s" target="_blank">20:34</a> Sometimes it is the little things, too. It's just that

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1237s" target="_blank">20:37</a> That's a paper cut.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1238s" target="_blank">20:38</a> I know, but makes a difference, man. So,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1241s" target="_blank">20:41</a> All right. Good. Any other any final items you'd like to point out, Tommy, that are going to make your life easier? Any paper cuts that you found from this update?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1249s" target="_blank">20:49</a> Update? , honestly, a lot of things we're going to be talking about, too, in future episodes, but nothing nothing that stuck out where it's like, whoa, they haven't talked about this yet. It's just much more of a summary. like that it's just like the data integrations with the copilot studio that's that's the big one I think that's the big focus that they've had

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1267s" target="_blank">21:07</a> Yeah the only other thing I would maybe point out here is Microsoft is bringing a lot of transactional data systems directly into fabric one of such system is Azure Cosmos DB

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1277s" target="_blank">21:17</a> Is now in preview inside a fabric workspace so now you can build a Cosmos database directly inside fabric and I feel like this speaks I think I feel like SQL server being available inside the workspace and now Cosmos DB. These are two very transactionalbased databases that live inside fabric. , and my only hesitation with this one and give me just give a quick thought here and then we'll move on to the main topic here. My quick thought about this one is I like Cosmos DB. It's super flexible, very

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1308s" target="_blank">21:48</a> Fast response time and if you design your system well, Cosmos DB is great for like doing like point lookups. find this record, open up this one thing super fast getting data out. I don't feel like Cosmos DB is very efficient when you're aggregating a lot of data through the Cosmos DB like aggregations on lots of records or small things. It does do a good job. It's very fast, but it's very parallel processing like it can do a lot of things quickly. What I will say though is the billing model of Spark like you have the auto billing or

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1339s" target="_blank">22:19</a> Autoscale billing for Spark where you can turn on Spark and you can let the the Spark compute basically be built through Azure but you can run it inside Fabric that pricing model for things that are let's call it operational that works for me like that's what I would like to see for like SQL databases Cosmos DB and Spark because then I'm paying for fabric to be there. But when I use the Cosmos DB and when I use the the the

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1371s" target="_blank">22:51</a> SQL database, right, if it's if those things are truly operational, I can't have those machines go down when there's just for whatever reason a high demand on users showing up to an application, right? Some, , whatever. So, I'd rather be notifi I'd rather not start throttling my SQL server and start throwing 500 errors or whatever 400 errors. Hey, I can't access the data. You've run out of capacity. I'd rather not do that on Spark SQL and now Cosmos DB. So if those

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1403s" target="_blank">23:23</a> Things could be like auto build or auto billing applied to that directly into Azure and so there's like a a line item on my bill that says hey this is this is auto build through the fabric piece but it's going to be a separate cost to you. I actually would be very much pro using these tools a lot more in fabric and feeling comfortable actually building the data system like build the transactional system using the back end of the SQL server or the Cosmos DB. That makes a lot of sense to me. So I I don't know if we're ever going to get there. I think we're doing it for Spark. I think

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1435s" target="_blank">23:55</a> It's a good pattern to follow. I'd like to see that pattern also evolve to SQL and also into Cosmos DB from a operational or transaction system. That way there's no thresholds. I'm not going to get throttled.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1447s" target="_blank">24:07</a> , I don't know if how profound I honestly think what you're saying. You're making me think, Mike, because what would be the worst thing you could tell your boss if something went down in fabric, but you're using it as critical. It's like, well, does it have all the features? Does it have a self? No, it's just the standard out of the box. It's like why would you do that thing. So, and I think that's a lot of

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1468s" target="_blank">24:28</a> Lot of for organizations who again some people are they're getting their data and the first time they're going to really be able to see it is in fabric and it's amazing. But a lot of organizations too have an infrastructure set up and they're going to be looking at everything going well does it have like whatever zones or like a a sales a fail safe is it it's going to go through all the technical things that it's in a sense requires for their own data it's like oh and also it could fail if if someone has a really bad semantic model or data flow

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1499s" target="_blank">24:59</a> They're like that there's no point so I I think that's a very interesting point as we continue to dive in with with where the like that role of this particular data. I want all my data in fabric but

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1515s" target="_blank">25:15</a> Yes

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1516s" target="_blank">25:16</a> Yes I do too and I want it to be like the reporting side is what I really need it there. So, so yes, I I do want all the data there, but my barrier to entry right now is I don't want to build a transactional system there because I'm worried that if I build a transactional system directly inside fabric,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1531s" target="_blank">25:31</a> Do I get myself captured? Like, is it

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1534s" target="_blank">25:34</a> Am I going to hit a ceiling, right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1536s" target="_blank">25:36</a> Yeah. I don't want to be able to I don't want to be able to hit a ceiling. I want to be pay per use, right? If I use a little bit, I pay a little bit. If I if I use a lot of bit, I'll pay a lot of bit. Like, it's fair, right? I use more, I'll pay more. That seems balanced with what we want to produce here. So that mentality, I really would like to have that that be how we handle working with fabric now, especially with these transactional systems we're trying to put in place here. Okay. Anyways, that being said, let's move on to our main topic. Tommy, give us an introduction here. This is a SQLBI

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1568s" target="_blank">26:08</a> Article. We love everything that comes from SQLBI. The team is always extremely well thought out. and now this is coming directly from Kurt on the SQLBI channel. So give us an introduction. What is Kurt talking about here, Tommy? And where should we take this conversation?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1583s" target="_blank">26:23</a> So, I think over time maybe some of you have heard of these MCPs and you saw on GitHub or Twitter like, "Oh, they've changed my life." Like, sounds like a developer thing. And it did start out that way and we have been talking about it before on the podcast, but never in the world of fabric. Let's take a step back before we dive into the whole article here. We're dealing with something that incur is showcasing the ability to use what's a concept in a lot of AI tooling called MCPS or model context protocols. What

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1614s" target="_blank">26:54</a> These are are simply ways for allowing you to communicate with other services to do tooling resources or in a sense prompting. very popular like model MCPs right now are simply notion, excel, , GitHub information. There's also ones that make your whatever agent you're or host AI you're working with think differently. It's going to task plan. It's going to always ask questions

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1645s" target="_blank">27:25</a> Back. So, it will basically shape and provide more enhancements to whatever AI that you're working with. This is very built by anthropic who does claude and it works in the cloud desktop. It also works in VS code and in actually a ton of other in a sense applications that support it. Now anyone can build them. These are completely open source. If you wanted to build one for example I can there's an MCP if I want to execute commands on my computer. Why would I

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1676s" target="_blank">27:56</a> Then have this MCP? It's like well AI is already good and I have these things. Well, the difference is I can go into and in this case claude and I'm going to go into this conversational piece and rather than having always upload a document or then have to do the command says like hey can you look at this directory find any files that are like this and what let's rename everything and as you're doing that tell me yada yada yada and do I have anything from notion that would be helpful. So it can basically take all these enhancements again not just a connection

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1707s" target="_blank">28:27</a> To something but

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1711s" target="_blank">28:31</a> Really providing the capabilities with certain keywords that will trigger it. for example when I want my AI to to take a step back if I needed to do a lot of in a sense step by steps

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1723s" target="_blank">28:43</a> There's a protocol to do that. Now that's the AI side of it. These are open source and what Curt has found out here is there's been some developments here for us for us the data people in the PowerBI world where okay let's take this concept let's just plug it into a lot of the common fabric API rest APIs and let's see what happens and that's really what this article is introducing and going oh my goodness

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1753s" target="_blank">29:13</a> Yeah so it also sounds like this is another way of again this is another call it maybe an abstraction an interface. It's like an API for the API thing. It's the idea that you can talk to a large language model using natural English language whatever you talk to a large language model and then the large language model has information about different APIs that it can use to go talk to something else. Right? So this is all built on the backbone that like every app that we have nowadays has its own API

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1784s" target="_blank">29:44</a> Layer. Right? there's an API layer in front of it and so you can the the the a the large language model is informed of hey did you could run a DAX query by using this execute DAX query API here's here's how the syntax of that works so that way the AI could when you ask a question like

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1803s" target="_blank">30:03</a> Hey large language model I I'm looking for something specific around this data in the sales table right it can then figure that out it can then understand okay if I want to write a DAX query this is what I would need to write against this table let me go figure out what DAX is okay now I understand how to write a DAX query and then it tries a DAX query against that table right

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1828s" target="_blank">30:28</a> And when I think later on in the article they actually has there's a really good diagram here that I really want to highlight later on Kurt goes through and says how does an MPC server compare to conversational PowerBI tools

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1841s" target="_blank">30:41</a> So in in traditional he basically compares co-pilot against the MCP and he's calling it the host app and I think he's even using like the clawed the clawed host app like icon for name yeah yeah icon there but basically he's comparing like co-pilot versus an MCP and co-pilot says it's you ask the co-pilot a question copilot figures out some things it has no context to other documents other configuration other things and it goes right to the data digs around the data and returns one

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1873s" target="_blank">31:13</a> Result with one query.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1876s" target="_blank">31:16</a> Mhm.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1876s" target="_blank">31:16</a> Mhm. The difference here is with the MCP items, you're able to add other enrichment enrichment elements, right? I can add other documents. I can add documentation. I can add common questions that users may answer. And here's an approved or an acceptable answer to that. All that's used as like context, additional information,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1895s" target="_blank">31:35</a> Right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1895s" target="_blank">31:35</a> Right? And then his diagram is awesome here because it's not just one query back to the model. He's actually showing like multiple queries. the the the the MCP can test multiple queries to figure things out. I ran that test. That wasn't one that I wanted. That's a different table. Let's let's look for a different table. Okay, here. That's not what I wanted. Let's try a third table. So, it can actually run multiple queries, bring all the data back, and then from the context of documentation, the data returning, then it can come back and produce visual tables back to the user. So, this is a totally different

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1927s" target="_blank">32:07</a> Experience than we're used to using AI with. Well, and honestly, Mike, it will feel seamless. And I think that the one thing that cannot be emphasized enough on why is this important if you're doing it even if you're just dealing with a lot of these chat agents in general is it's not just again a connection to it, but it is still the that whole large language model with that new capability. So, it however that large language model already reasons. Now Now

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1956s" target="_blank">32:36</a> Now it's not like hey you can only do the rest API command get table. Well it's going to do it in a way that it sees fit in terms of diving through it. So you are allowing the tool to or the AI to already act as it's going to

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1971s" target="_blank">32:51</a> Going to and simply now giving them more capability. which again is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1976s" target="_blank">32:56</a> You you can see very quickly how much this can affect us.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=1981s" target="_blank">33:01</a> So my my concern here is Tommy so I have a concern around this one. Right. And so when we talk about these things, you're this is where I'm I struggle a little bit in this space, right? There's a there's a balance between how much do we how much instructions do I give to the AI in order to get the output that I want I desire, right? So a lot of these things are things are whenever I go into a data model or I'm trying to get information, there's like an expectation, right? I have an expectation of like what the results should be or I'm either doing

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2012s" target="_blank">33:32</a> Like again maybe I'm doing the same thing the MCP is doing here a little bit. I have a hypothesis about what I want to answer from the data. I state my question. I go in the data. I dig around a bit and then try and have an open mind because sometimes you can make the data do whatever you want for your hypothesis. But like you try and come back and say, "Okay, here's the resultant information." And when you're doing this, you're you're running multiple queries. you're testing the information out and it sounds like you're able to exchange some of this. My concern here is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2043s" target="_blank">34:03</a> How how consistent can we get the results to come out from the from the from the language MCP servers? Like if I if I ask a question and you ask the same question, Tommy, and someone else asks the same question,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2058s" target="_blank">34:18</a> Are are we guaranteed to get the same result back? maybe the words are slightly different or maybe it's maybe how it phrases like the statement of like I found the summary to be this and and I may not say that for me it may say something slightly different but at the end of the day like it can't be wrong. I don't want it to give me the wrong SQL or DAX statement or the wrong table of data back from what I was asking it. So, like there's some things there that like I can let it do things, but I'm always somewhat skeptical of is it actually

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2089s" target="_blank">34:49</a> Right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2092s" target="_blank">34:52</a> Right? Can I really trust the results? So, how does that work with this Tommy? Like what where do I don't think Kurt really addresses the concept? This is an important concept because speaking of which, I did break Gemini the other day. I was really because here's a few things on what you said. I would just want to break it down because

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2111s" target="_blank">35:11</a> One the nice thing about LLMs and AI they are very good with coding which means they're very good with Python which means they're very good when it comes to data analysis actually one of the easier things so in so many way in so many concepts that they work is being able to be able to analyze a data set you go through it etc. Now, in terms of are you guys going to pull the same metric for me with the same filters, that's up to the AI unless it's in, , explicitly given.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2141s" target="_blank">35:41</a> Yes.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2142s" target="_blank">35:42</a> Yes. More importantly about this, Mike, is again, this is why where we're starting off here, , Kurt brings up this idea of this conversational piece. If you want a tool just to retrieve a a given metric for you, then that's not what this is. Unless you have that , , agent so to speak with that has those restrictions on here are your tables, here are your particular things that you're you're, , you're wanting to do back. If we're just having a conversation and saying, "Hey, what are my sales for or whatever you

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2173s" target="_blank">36:13</a> Actually asking to do, it's going to reason. It's going to take the instructions that was g given but no there's really no there's no like in a sense overage that you can have to ensure that it's going to return the same thing to a point I was testing claude Google and AI with a data set and I wanted to see how well could it think of new metrics if I had a report

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2200s" target="_blank">36:40</a> And data and

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2203s" target="_blank">36:43</a> Yeah and it's actually that's worth a whole conversation because I'm like these metrics are fine but what else could we do with this like what would be something that could be and it was I'm actually already incorporated them however Google because I kept I didn't like their answers it broke and it start it kept telling me every time I responded that chat I am an agent from Google I like I've been instructed to help you in any way how can I help I'm an agent from Google it's almost like it had to remind itself of what it was like that's not but no but the point being Mike is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2235s" target="_blank">37:15</a> Interesting but there's a few things before we go into even the the governance thing here too is it going to or it's not a simple and this is the concept it's not a simple do a request get the same result protocol

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2250s" target="_blank">37:30</a> Because yeah and I we have to understand right off the bat it has that ability but how it's going to interpret that and what it's going to do with that it should be smart enough but obviously we know now here's the thing the difference though we've never talked about this with conversational data we've always been talking about about reports and the visual side of it and hey how well can I do how well can I be my own data scientist for me

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2277s" target="_blank">37:57</a> But Kurt doesn't start off with that which I thought was very interesting his first example is for a author a a PowerBI PowerBI creator go something doesn't look right in this report I think one of the metrics is off not hey give me the ever is is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2297s" target="_blank">38:17</a> Is yes he lands with that he lands with that analogy

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2300s" target="_blank">38:20</a> This is very different I think we've t honestly even the way you and I have thought about AI's role in terms of for the the

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2308s" target="_blank">38:28</a> The okay all right let's let's unpack this concept so what you're describing here is more like a a pair programmer right you build something in the so okay let me couple context pieces here I'm adding I'm adding model context to our conversation okay halfway down the artic actually not even a quarter the way down the article the very beginning portion does this little section called AI in PowerBI the story so far and it shows you two worlds there's a creator experience world and then there's the

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2339s" target="_blank">38:59</a> Consumer experiences so do I create things with PowerBI or I'm consuming content from PowerBI with the with the consumer side on the creator side you have co-pilot DAX queries or DAX query view editor edtor, right? You have generate a measure description, you have generate report page, you have suggest synonyms and suggest queries or steps, right? So there's a lot of AI slightly incorporated features there. And then now there's the MCP land where you can

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2370s" target="_blank">39:30</a> Incorporate your own thirdparty tools with it as well. So third-party tools could build things for you using the MCPS. On the consumer side, we have other things like okay, I'm going to ask questions about the data. I can use co-pilot. I could summarize my report. I could ask data questions. I could use chat with my data. These are all legacy features of PowerBI already. And now you have fabric data agents which is trying to build that more catered, , AI experience to those users. You have a PowerBI report Q&A which no one

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2402s" target="_blank">40:02</a> Uses. It's not even it's on there but no one uses it. And now there's a PowerBI MCP server that can be on the viewer that can be used for the viewer of the report. So, I think it's really important here, Tommy, what you're going into right now is you're we're talking about two worlds, and we're going to focus our attention right now on the creator world. That's the the team that is building the reports, building the semantic models.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2426s" target="_blank">40:26</a> And this I like cuz Kurt seemed to be very impressed by the fact that the AI was able to scrape through the model, find a inappropriately named column, and solve some problems and suggest some information about it. So, it almost feels like to me like I'm doing like a code review. Hey, I built something AI. This number looks off to me for some reason. Can you help me figure out why this number looks off based on my expectation and let it think a bit around why that is happening and see

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2457s" target="_blank">40:57</a> What it can come up with? Does that make sense?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2461s" target="_blank">41:01</a> Sense? No, Mike. And I think that's the biggest part here is we've the way that Curt's in a sense showing casing you is it's like a message you would send to your colleague in on teams.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2472s" target="_blank">41:12</a> Yeah, exactly. Hey Tommy, I'm finished my can you just take a look at this? Like give me a second set of eyes. I want to make sure I'm doing or hey I'm about ready to roll this to production. Can you just take another gaze at this? Does it look right? Or maybe you're the QA person. This this this table this visual doesn't really match my expectations what the data is saying. Is there something wrong here? And the model, the MCP can, oh, there's an extra filter, right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2496s" target="_blank">41:36</a> Oh, there's a there's a really outlier piece of data on this particular customer or, , maybe that should be fixed. And then you can and you can step back and say, oh, is it really a problem or is that actually what the data is really saying,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2508s" target="_blank">41:48</a> Right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2509s" target="_blank">41:49</a> Right? And this is that's such a big piece here because that simple conversation just asking it. I don't have to have 18 lines of code to say here's what this context is. It's like, hey, this report doesn't look good. Since it's an MCP, it all Anthropic knows, okay, use this tool, do use the list by workspace, etc. And Mike, it I loved what it even gave back here, too, because it really allows

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2536s" target="_blank">42:16</a> I really for the first time, , not just the automation side of it, but I'm in Claude, like I'm just in my normal chat thing. I'm going to do that and search for best ways to make pizza after that. Like that's the really cool part of this as well.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2551s" target="_blank">42:31</a> And this Oh my gosh. I I think this is to me Mike

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2555s" target="_blank">42:35</a> To me Mike actually before I say I'm not gonna say game changer because I have learned my lesson there. before we

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2562s" target="_blank">42:42</a> I think I think

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2564s" target="_blank">42:44</a> Well Tommy I would argue with you. I think this I think what we're walking into I don't think it's finished yet. I think we're very early in the stage of what this is going to be able to do. And one of again I'll give you just some of my hesitation here. Yeah. This is this is I think I think this is game changer. I think Curt's if Kurt is so enamored by this I should be paying attention 100%. , another thing I'll I'll pick your brain on here, Tommy. Like, , I know this is an early adoption. You, Tommy, are very comfortable with, , oh, it's MCP. Yeah, I'm going to stand up this MCP server, right? It's

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2595s" target="_blank">43:15</a> It's a bit of code you have to run locally on your machine. Average users, I don't think, are going to be right. So, there's there's a barrier to entry here. like an average user, there's a lot of people talking about it until this becomes stupid simple or even built into the desktop application,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2615s" target="_blank">43:35</a> Right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2616s" target="_blank">43:36</a> Right? Right. It doesn't really make sense to run an MPC server.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2621s" target="_blank">43:41</a> Like I had to go get code and download something and like Kurt's even talking about how to build your own MPC servers and I'm like

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2627s" target="_blank">43:47</a> I want the benefits of it. I don't want to build all that. like I'm I don't want to spend the effort or time or maybe it's worthwhile my time but it just seems like a new shiny toy right now and I'm a little hesitant to go out and spend a lot of effort or time trying to figure out I don't want to run a lot of things locally on machine and as I look at the landscape of what PowerBI is doing more and more and more experiences are happening in the web we were we had desktop but even just this just just last week I saw Tom I don't know if you saw this Tommy if you go into the power.com service and you go edit semantic model.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2660s" target="_blank">44:20</a> Mhm.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2661s" target="_blank">44:21</a> Mhm. In the edit semantic model, there's the model view with all the tables.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2666s" target="_blank">44:26</a> And now at the bottom, there's a brand new ribbon that appeared recently that's like, hey, here's now the new ribbon to switch between model view and now

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2676s" target="_blank">44:36</a> View. Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2677s" target="_blank">44:37</a> Did you see that? Okay.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2678s" target="_blank">44:38</a> Yeah, I've been using it a ton.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2680s" target="_blank">44:40</a> And again, all in the service. You don't need to have desktop for this. It's just one more of these experiences that are all living inside like the cloud. And so when I look at this and say I feel like it's backward because now I had to run the MCP locally to talk to the cloud. Like why doesn't this just exist somewhere in the cloud for me? This is where I'm like I have a little hesitation because I'm like it feels like we're taking a slight step backwards from where I run the MCP standpoint.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2710s" target="_blank">45:10</a> All that I would be okay with. And honestly, it is a very good point, but to me, where the problem still we are at with MCPs and all these other column third party AI tools is

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2723s" target="_blank">45:23</a> Sure it

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2723s" target="_blank">45:23</a> Sure it and this is the thing and I've said before it's not just MCPs, but Mike, they all work for the individual incredibly well, right? But I have to set it up like there is no and that's fine. fine.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2735s" target="_blank">45:35</a> Fine. You got to know what you're doing,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2736s" target="_blank">45:36</a> Doing, right? Right. But even if I worked with a marketing company, if I was in marketing, right, and I wanted to use a lot of these tools, well, the best ones I'm going to have to stand up myself thing or, , utilize that in the world. There's no rolling it out, rolling it out,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2751s" target="_blank">45:51</a> Much less , , getting everyone to whatever download, install, and that's I think where the biggest hurdle is for a lot of this stuff. Is this really cool? You bet. Will your IT department let you do this? , yes. yes.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2765s" target="_blank">46:05</a> Yes. Yeah. , and that's so that's one thing. Yeah. So, there's a whole

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2769s" target="_blank">46:09</a> There's a huge amount of risk with letting someone take control,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2772s" target="_blank">46:12</a> Right? Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2773s" target="_blank">46:13</a> Your computer like it's it's doing things on behalf of you on your machine. Like, I think that's a huge risk to IT people

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2778s" target="_blank">46:18</a> People and but not just that, it's also well, if I get it, well then what about the other people on my team? Am I the only one talking to AI? Because, and this is where I I think the frustration is because

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2790s" target="_blank">46:30</a> Because we have co-pilot,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2791s" target="_blank">46:31</a> Right? We have co-pilot that sh Mike I think what I'm not going to say what Kurt was thinking because I I don't know it but what I read from this article is we have proven here today what AI is capable of why co-pilot doesn't have this ability right now because it it shouldn't have to talk to an MCP because it's freaking co-pilot in Microsoft is beyond us and I think I am I am seeing lately Mike and the capabil ilities we have with Copilot right now in fabric are

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2823s" target="_blank">47:03</a> Are wanting right and it's because it I can't do the conversational thing like I can it's I'm still asking like I can only ask general questions and I can only get general answers back

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2837s" target="_blank">47:17</a> And but because you don't it doesn't feel like you're talking to Claude or chat GPT does it correct it doesn't to me me

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2844s" target="_blank">47:24</a> Me no again this is where I'm like things get very gray here and again

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2849s" target="_blank">47:29</a> I like the idea And my other hesitation here it feels like as well Tommy every every month or two we're talking another model's released someone else there's a new player in the game someone's got this new revolutionary thing I also feel like to some degree if I'm going to spend money on Claude or Grock or Open AI or what every every other month there's some other team leaprogging a different team building a whole bunch more things I know you spend a lot of money on a lot of different AIs to test them all out and figure out which one's

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2880s" target="_blank">48:00</a> And I look at this going like, do I I don't think we've settled enough. I I think we're we're in a place here where it's it's all so new. There's too many moving pieces at this point. Like it probably doesn't even make sense to get locked down. Yeah, it's it's fun to experiment with. Maybe can add a little bit of value here and there. But will if I if I if I jump into an MCP today, will that MCP even be around in a month or two from here?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2905s" target="_blank">48:25</a> Will something else have come out that's even better than that? So, like, do I spend the time now to learn it or should I just wait a little bit more and like just be familiar with it

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2914s" target="_blank">48:34</a> And wait until they a better thing comes out in another month or two?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2918s" target="_blank">48:38</a> Honestly, Mike, is there something else that's probably come out and we're not talking about MCPS next year? Probably. But however, however, I I would I think I'm going to say one thing in favor of it, but then really hamper on the point where the from an individual's productivity point of view, time being saved or just more you can do is incredible, but again, unfortunately, that's only for the individual who's using it, right? So, this is not for a team of users unless they all have it. I can improve my workflow and the things I

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2949s" target="_blank">49:09</a> Need to get done whether it's going to be straight through PowerBI and I'm working on a pipeline and I'm trying to figure out the right mapping and what needs to happen on the back end to hey I'm writing out this document and I want to this thesis on X Y and Z let's work on this and it works great for me it works because I the tools are set up for me

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2972s" target="_blank">49:32</a> But this has not and there is no model yet to how you roll that out to a team of BI people, much less a team of developers. That's the problem. And I think where honestly, Mike, like Yeah. All these tools, they're meant for the individual. Like they will save you a ton of time.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2990s" target="_blank">49:50</a> Yes.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=2991s" target="_blank">49:51</a> Yes. I like let's say let's say you started using the MCPS today and you're like, what, this is pretty awesome. And then someone on your team's like, "Hey, Mike, that looks pretty cool. Well, how do I do that?" There's no just straight link. It's like, "Well, you got to install this. Make sure you configure this." and they they have to do their own setup

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3008s" target="_blank">50:08</a> Own setup and that's where the it's making it very hard hard hard this this

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3013s" target="_blank">50:13</a> This any little friction like that is going to just slow people down. Oh yeah, any little friction you can't afford that now rather than on whether or not this can be adopted. I think I I don't know if you had anything else on that. because I wanted Yeah,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3027s" target="_blank">50:27</a> I have one more thought on like Sam Alman. So Sam Alman recently was talking talking about his kids, right? often Tommy we talk about our kids and how they're going to interact with computers on the podcast like what is it going to look like for your sons and daughters as as like you as you age and like they start using computers right they're my son's in high school he's going through some he's going to go through some like Microsoft Office class training thing there's like some certification things that can happen there really cool interesting stuff but I'm looking at this going already they're changing things so my son was doing some video editing for school and

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3059s" target="_blank">50:59</a> He went through a program and he was like cutting the cuts and changing the words and he didn't like how he said it here. So, he like cut that part of the video out and would snip it and bring it back together. A lot of editing needed like a very slow tedious process, right?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3074s" target="_blank">51:14</a> The normal thing.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3075s" target="_blank">51:15</a> Well, I showed him what I do editing for video shorts. He's like, "Oh, this is way different." And then I showed him like how to auto AI generate B-roll and how you're, , using a prompt to generate an image that you can then snip in to the video. Like this is really interesting. So he really liked this new way of editing things. And he was like, "Wow, had I had this tool instead of doing what I did at school with editing already." He's seen the shift of like that was way more

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3106s" target="_blank">51:46</a> Enjoyable. I could do a lot more high level thinking of the content of the video and like making sure that it like is interesting and engaging content versus actually like doing the the the nitty-gritty like the work of the thing. So I I think when Sam Alman was talking about this, he basically said, "Look, my kids are going to have access to computers that have more knowledge than they ever will. it'll be smarter than them in all areas

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3137s" target="_blank">52:17</a> For everything. that again this is maybe 5 6 10 years from now but like I would agree with him like the AI already knows all the languages all the syntaxes for every like I could ask it build this function inn net it'll do it now translate it to Ruby done make it in JavaScript done make it in Python done like it knows every language so it doesn't really matter what I program in it's more of along the lines of can I can I correctly give instructions to the AI and Tommy me.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3168s" target="_blank">52:48</a> This is This is sad. Maybe not. Maybe it is. I don't know. We'll see. , in my conversations with my family now, I'm now asking for I need more I need more model context. Like, you asked me a thing I don't understand. Please provide more context is what you're speaking about and my family is starting to figure this out and they're like, "Oh, okay. I'll give you some more instructions or some more additional."

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3193s" target="_blank">53:13</a> It's it's really weird because when you talk with other people, you're you're doing the exact same thing. Now this is this is maybe my epiphany a bit is before you could never do that with a computer. I could never add context to get a result different from the computer. I had to like

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3209s" target="_blank">53:29</a> Physically write out the code to get stuff done like never before. Now I can give it context and that can be used and informed in the same way I would talk with another person. And that's really different than what we've been used to doing. And so I think we have to come into this world thinking like, okay, from the creator side of things, the AI experiences are going to be really well done because it's going to know how to do everything. And we can sit back and almost direct and guide a bit more. I I feel like at some level there's going to

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3241s" target="_blank">54:01</a> Be a huge lull in the job market for entrylevel app developers

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3246s" target="_blank">54:06</a> Because no one's going to want to hire them. Like, who who would want to hire a brand new appdev that starts from nothing at this point? Why not just go buy a $200 AI agent to assist an already medium to professional level developer to make them more effective? Why not add co-pilot to do code reviews before you get to the leader of your team to do code reviews? Right? There's a whole bunch of like lowhanging fruit here pieces that it's going to be very difficult for like the job market for that entrylevel app developer. It's not

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3278s" target="_blank">54:38</a> Power Apps. Microsoft had the right idea. Everyone wants to build lots of apps, but Power Apps is not the solution. It was MCP and large language models. So, they had the right idea. They had they didn't have the technology in place to actually make it a real a reality. And I think smartly Microsoft has very heavily pivoted towards AI and that's where they're at right now.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3299s" target="_blank">54:59</a> Yeah. No, Power Apps was one of the first ones and I think one with dude, your son's mind is going to be blown once all the he could see all the other stuff. I don't know how much he learned about the AI stuff, but again and and I think that I think you're you were saying where what I wanted to say too where what the article is going to show and I think Kurt says at the end they're actually going to be doing a series on this. This is not because we want everyone to use this today. no, you could. This is all available online. So, if you're like, what, I want to

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3330s" target="_blank">55:30</a> Do this. I have the access. Knock yourself out. You got the you got your weekend plans and it will work just as well. well.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3337s" target="_blank">55:37</a> Well. But here's the thing is what I think this is more showing because yeah, we know there's going to be steps for this to be on a wider scale. But let's just let's just appreciate here what's now actually capable because I think to your point, Mike, the difference here is not simply that I can have a tool talk to another tool. It's like when there's natural language in Q&A like yeah it's natural language but I still have to ask it exactly the way that it wants like buy this or so it was natural language with

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3369s" target="_blank">56:09</a> In their language

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3372s" target="_blank">56:12</a> But this is all about if AI doesn't even know the answer or has never done it will look at the set of tools and it will try to reason to figure it out it's so I can

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3383s" target="_blank">56:23</a> So I can the reasoning part is weird that's the part that's different it feels like yeah I agree with on that one,

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3387s" target="_blank">56:27</a> Right? So, so and this is the big jump here. So whatever capabilities and there's going to be more I think that right now I believe I've seen three major MCPs around that connective fabric in some way and again some of those are what you're going to be the person for helping people view reports there's the one that's going to admin PowerBI it's like what hey I got a lot of notebooks can you help me move them around and organize them done I don't have to give them more context and these are the types of things my so yeah from our role in this it just goes

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3419s" target="_blank">56:59</a> Back to the this idea of the conductor area the the conductor's era. Now what I'm hoping Mike this is going to be as we continue to see what's capable I really hope that this also changes or enhances the current what should already work I think just as well. I the co-pilots in fabric they're good but again you can ask a general question get a general answer if I could do this and what I'm sure there's a lot of

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3451s" target="_blank">57:31</a> Security on on their end but we are now seeing that it's available and that it's capable and it it just takes a normal cloud or your normal chat LLM this is not anything completely unique Mike besides just say chat GPT give it a little more information and this is what it can do and so we're actually let's appreciate what how well these things work now actually that they're going into our space.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3484s" target="_blank">58:04</a> I totally agree with that one. So I'm I'm going to like start wrapping here Tommy. This this is this is a very cool new world. I think this article is really good from Kurt. I think everyone should definitely take a look at it. , I think it adds a lot of context as to where these MCP things are sitting inside the fabric ecosystem and where where where we might want to look at this from like a creators perspective and a consumer experience perspective. , good article. Really like it. Very well written. Again, Kurt is on point. I do miss I do miss some of the little

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3515s" target="_blank">58:35</a> Goblins throughout the article. It's a little

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3518s" target="_blank">58:38</a> Little Yeah. Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3519s" target="_blank">58:39</a> Kurt, I understand. And this is this is a message directly to Kurt. Kurt, a great article, but the goblins are very interesting. There's a lot of words you wrote here.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3528s" target="_blank">58:48</a> I now need to go to co-pilot and summarize this article and like, , other things, but it would be really nice to have a couple extra like , goblins show up here or there on the the SQL BI. I'm going to miss that if you do more blog posts directly on the Microsoft or the the SQLBI website. Anyways, really good idea. the conclusion here I think Kurt is like spot on point. The MCP MCP server provides a great way for large language models to integrate with exter external services and information.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3559s" target="_blank">59:19</a> He's going to go a bit deeper in this a little bit more. really interested to see how this is going to form and and play out here. I just don't want to install them. I I I'm I'm resistant here. I'm going to probably have to just jump in and do it. I don't want to install the MCP server. I just don't want to have to stall one more thing on my machine to get it to work. I want it to just be built as a part of the pro, the tools, the products.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3585s" target="_blank">59:45</a> Products. But maybe I'm just being dragging my feet a bit too much here, Tommy.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3588s" target="_blank">59:48</a> Mike, do you have node on your computer?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3591s" target="_blank">59:51</a> Node.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3592s" target="_blank">59:52</a> Node. Node mpm.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3593s" target="_blank">59:53</a> Oh, node. I do have node on my computer.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3595s" target="_blank">59:55</a> And you're done. That's you're good. There's defin I know. I know, Mike. I get it. I love this. I love local stuff, but but

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3601s" target="_blank">60:01</a> But Yeah, but every time I run node, it's like, you're out of date. Update to the new one. Like, oh my gosh. How many you guys make? Yeah.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3607s" target="_blank">60:07</a> Oh my gosh. I got to keep downloading, updating things. Like this is like I don't I shouldn't be having to update things anymore. It should just figure itself out and update itself anymore. Anyways, thank you all so much for listening today. I hope you found this conversation around AI, this new thing called MCP very informative. Definitely go check out the article from SQLBI. It's worth your time to go read. The link of the the article is in the description below. Definitely check it out. It'll be there as well. With that being said, if you like this conversation, if you found everything that we hear fun, interesting, engaging, as well, we'd really appreciate you

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3638s" target="_blank">60:38</a> Letting other people know you found this content enjoyable. Please share on social medias. Let them know you were learning or playing around with MCPs and maybe this article pushed you that way. Maybe our our talk here pushed you more towards trying out an MCP. That being said, Tommy, where else can you find the podcast?

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3655s" target="_blank">60:55</a> Mike, just wait till we bring out the EMP MCP. So, , you can find us on Apple, Spotify, wherever you get your podcast, make sure to subscribe and leave a rating. It helps us out a ton. And make sure if you have a question, if you have an idea or topic you want us to keep talking about this or there's something else that you we haven't talked about yet, well, you can ask us and for free. We don't charge. , head over to powerb.tipsodcast. Leave your name and a great question. And finally, join us live every Tuesday

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3686s" target="_blank">61:26</a> And Thursday, 7:30 a.m. Central, and join the conversation on all power. Tips social media channels.

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3694s" target="_blank">61:34</a> I will say this though, if you ask us questions, we're not as good as a large language model. And if you do ask us questions through the the podcast, you can actually request topics or questions as there as well. feel free to do so, but be aware your responses may be hallucinating. Like your mileage, , you get what you pay for. So, if it's free, you might not like the answer. So, that being said, thank you all so much and we'll see you next time on the podcast. you

<a href="https://www.youtube.com/watch?v=Zrce4z4ClMs&t=3736s" target="_blank">62:16</a> You you [Music] down. down. down. [Music]
