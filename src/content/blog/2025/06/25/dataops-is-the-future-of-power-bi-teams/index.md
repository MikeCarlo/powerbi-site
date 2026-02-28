---
title: "DataOps is the Future of Power BI Teams – Ep. 435"
date: "2025-06-25"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "DataOps"
  - "DevOps"
  - "Microsoft Fabric"
  - "Source Control"
  - "AI"
  - "Git"
excerpt: "Tommy, Mike, and guest Mathias Thierbach unpack what DataOps means for Power BI and Fabric teams — from source control and automated testing to scaling with junior developers. The trio debates whether AI is the key to rapid DataOps adoption and why the click-and-drag approach to Fabric projects won't survive long-term."
featuredImage: "./assets/featured.png"
---

Tommy, Mike, and guest Mathias Thierbach unpack what DataOps means for Power BI and Fabric teams — from source control and automated testing to scaling with junior developers. The trio debates whether AI is the key to rapid DataOps adoption and why the click-and-drag approach to Fabric projects won't survive long-term.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/g5AWZLBgVdI" 
  title="DataOps is the Future of Power BI Teams"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

No formal news segment this week — the hosts jumped straight into beat-from-the-street banter about introducing kids to Star Wars and debating the right age for Jurassic Park before diving into the main topic.

### Referenced Links

- [Ahmad Chamy's Hot Take on DataOps](https://www.linkedin.com/posts/ahmadchamy_%F0%9D%97%9B%F0%9D%97%BC%F0%9D%98%81-%F0%9D%97%A7%F0%9D%97%AE%F0%9D%97%B8%F0%9D%97%B2-%F0%9D%97%97%F0%9D%97%AE%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%A2%F0%9D%97%BD%F0%9D%98%80-%F0%9D%97%B6%F0%9D%98%80-%F0%9D%98%81%F0%9D%97%B5%F0%9D%97%B2-activity-7331363250787233795-tfKF/) — Ahmad Chamy shares his take that DataOps addresses the hardest challenges data teams face, increasing productivity while balancing stability and accuracy. He argues that with Fabric tooling coming together, there's a massive opportunity to accelerate data team performance in a developer and end-user centric way.

- [DevOps for Power BI Development by Ahmad Chamy](https://www.linkedin.com/pulse/devops-power-bi-development-ahmad-chamy-10v1c/) — Ahmad's longer-form article exploring how DevOps principles apply specifically to Power BI development workflows. The piece covers practical approaches to source control, CI/CD, and team collaboration for data professionals transitioning from traditional Power BI workflows.

## Main Discussion: DataOps is the Future of Power BI Teams

Mathias Thierbach from Navata joins Mike and Tommy to break down what DataOps actually means and why it matters for Power BI and Fabric teams. The conversation spans from foundational concepts to the role of AI in accelerating adoption.

### What Is DataOps?

Mathias defines DataOps as taking all the learnings, patterns, and practices from DevOps and applying them to data analytics. The core pillars include automation, breaking down barriers, better communication, and CI/CD — all concepts familiar from traditional DevOps. However, two big elephants make DataOps uniquely challenging: data containers (databases, lakehouses) are massive and not easily movable, and the skills gap in the data world is even wider than in software development. Most Power BI practitioners have never used Git, let alone set up automated testing pipelines.

### The Click-and-Drag Paradox

One of the episode's sharpest points comes from Mathias: embracing DataOps ironically means *not* doing a lot of what Fabric keynote demos show you. The ease of creating a lakehouse in four clicks flies directly in the face of proper development practices. Mike agrees but offers a pragmatic middle ground — click your way to a V1 that solves an immediate business need, but when it's time for V2, step back and apply DevOps and DataOps principles. Don't mistake a quick prototype for a production-ready architecture.

### Scaling Teams with DataOps

Mathias makes a critical organizational argument: if you want to delegate important projects to more junior developers, you absolutely need the tooling and automation that DataOps provides. Senior people can build V1 quickly, but organizations can't have only senior people running projects day-to-day. DataOps provides the guardrails — source control, automated tests, rollback capabilities — that let junior team members maintain quality standards set by expert builders.

### The Security and Multi-Environment Challenge

Mike highlights an often-overlooked aspect of DataOps: security across environments. Production data in healthcare and financial spaces contains PII that can't exist in dev or test. This means data engineering teams must obfuscate production data or generate representative mock data for non-production environments. Test environments might only need 6 months of data refreshed weekly, while dev might only need a month refreshed daily — and Fabric doesn't yet have an easy button for this kind of data subsetting and security masking.

### AI as the DataOps Accelerator

The conversation takes a turn when Mathias points out that AI tools are fundamentally text-based — text in, text out. If your project is just a UI you click through, AI can't help much. But once your project lives in source control as text files — definitions, metadata, logic, code, scripts — you're in a perfect position to leverage AI for improvements, testing, and code generation. Tommy coins it "the conductor's era" where practitioners orchestrate rather than execute, and AI handles the implementation. Mike shares that ChatGPT went from zero website referrals to second only behind Google in under a year, signaling a fundamental shift in how knowledge flows.

### Can We Adopt DataOps Without AI?

Tommy poses the big question: can we rapidly adopt DevOps and DataOps without AI? Mathias rejects the premise entirely — "We've got the AI, why would you not use it? It would be silly not to." Mike agrees that AI will 100% accelerate adoption, noting that Copilot already generates better commit message summaries than he could write himself. The consensus: the future of engineering will increasingly focus on formalizing requirements and writing tests, while delegating code generation to AI.

## Looking Forward

The trio agrees that DataOps is not a hot take — it's the only take. Tommy argues that if you're still resistant toward DevOps, DataOps, and source control, now is the time for conversion. Mike acknowledges that Microsoft's Fabric suite is underdeveloped in the DataOps space today, but predicts the community will build the tools needed, and Microsoft will follow in 3-5 years. Mathias emphasizes that investing in DataOps now is crucial for organizations that want to scale, delegate to junior resources, and maintain quality assurance in what they ship.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=0s" target="_blank">0:00</a> Good morning and welcome back to the Explicit Measures podcast. It's Tommy and Mike. Good morning, Mike.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=34s" target="_blank">0:34</a> Good morning. How's it going today, dude? It's going pretty good, it's going actually it's going great. Good to hear. We are just clipping along the summer. We've got some more great conversations today. The main topic is DataOps is the future of Power BI teams. We're just going to unpack what is the word DataOps? Data operations. How does this impact our workflow? What do we do with it today? How does this work between different environments?

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=69s" target="_blank">1:09</a> I think this is more of a complex concept. If you have any concept of multiple environments or deploying things in dev, test, into prod, you'll have been experiencing this pain that is DataOps. How do we build this? How do we make sure we have quality in our data and what techniques have we done to start leveraging the ability for us to test and make sure that data operations becomes part of our team.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=102s" target="_blank">1:42</a> Anyways that's our intro. Tommy, what's your beat from the street today? This is actually a little personal here. I just want to say how some things just hold up over time. For Father's Day, one of the things I wanted to do for the kids — I have an 8-year-old, six-year-old, four-year-old. I'm like, I think they're at their ripe age to see one of the classics. I think it's time for them to see Star Wars.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=135s" target="_blank">2:15</a> And guess what? It holds up. We watched the original A New Hope and I wasn't sure because of how graphics are and all these kids today with all the movies and all these CGI stuff. I'm like I wonder how this is going to hold up. It holds up better than I remember. The kids were the whole time just watching it with eyes open, mouth open.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=168s" target="_blank">2:48</a> I'm just thinking to myself as they're watching Darth Vader, their minds are going to be blown in the next one. Are you starting them at the very beginning? In the order in which they came out? I'm one of those — I watched the first, those other three prequels, I don't know if I count those terribly. It's part of the story, but there's a lot of story that goes along with all these episodes. This is going to open up a can of worms because now you watch this and then you watch The Mandalorian.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=202s" target="_blank">3:22</a> The universe of Star Wars is quite large. I had that same joy and moment letting my kids watch the movies as well. And I'm not even a huge Star Wars person. I know they're good movies and they're classics. They're well made, but I'm definitely not in the universe. These are ones that are going to have some reaction for the first time watcher.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=234s" target="_blank">3:54</a> That actually leads me to a question — I cannot wait to show my daughter the oldest Jurassic Park. But what age? What's the age where it's not abuse? Because I don't want her in our bed. My kids are older and my oldest is 15 and we still haven't watched Jurassic Park yet. Oh my gosh. That's a to-do today.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=266s" target="_blank">4:26</a> Those early ones are pretty scary. I remember those being pretty intense scenes. The one I get a little bit more excited about was jumping into Harry Potter. That one was a little more tame. There's a lot of them and we really got into that series and that was also super fun.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=300s" target="_blank">5:00</a> I watch Jurassic Park again and there's maybe 10 minutes of dinosaurs in the whole movie but a well-made movie. Something well made holds up. Even with Jurassic Park where the CGI was okay from 93, there's only 10 minutes of dinosaurs but you will imagine a velociraptor coming in your room and you will turn the lights on.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=334s" target="_blank">5:34</a> Those are good times to start sharing those moments with your kids. I also note the amount of movies that come out nowadays are not as good. The storyline just seems like a repeat of everything else. The plot line and the things going on in Star Wars was just really good. Good things hold up. Good storylines hold up.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=367s" target="_blank">6:07</a> All right, let's jump into our main topic for today. DataOps. Oh, do you hear something? We have our caller back again. Welcome back, Mathias. Hello and good morning. Good evening to you as well. We figured we'd bring in the expert here to talk about DataOps.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=401s" target="_blank">6:41</a> Today purely is what are we doing in DataOps? We've heard this term a couple times. You're starting to hear this at conferences a little bit more. Mathias, give us a quick overview of what is DataOps and why is this fitting with our series of CI/CD and DevOps?

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=434s" target="_blank">7:14</a> In a nutshell, DataOps is basically trying to take all the learnings and all the patterns and practices from DevOps and applying it to data analytics. That's the one-liner. Obviously we've talked about DevOps for a bit now. It's all about automation, breaking down barriers, better communication, CI/CD. Those are the key ones really.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=468s" target="_blank">7:48</a> If I want to apply this to data analytics, there are two big elephants that stand out. One is in data analytics you have data containers — databases, lakehouses — those are big chunks. They're normally not easily movable. You can't easily recreate them. You might have petabytes of data sitting somewhere. Unlike in software development where you just put the whole thing on your laptop and rebuild your solution, you can't easily do that with petabytes of data.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=501s" target="_blank">8:21</a> The other one is, as much as in the software world DevOps is quite advanced in terms of skills, in the data world it's even more so. From a skills and even acceptance perspective, there's a bigger challenge here. We have to deal with people who are maybe not very familiar with using Git even. There's a lot more to do in terms of training and upskilling.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=538s" target="_blank">8:58</a> Definitely an interesting space. Whilst I've focused on the challenges, the big benefits ultimately would be you can rely a lot more on automation. You can scale better. You can rely on higher quality because you've got automated tests. You probably have a system where you can roll back if someone pushed a faulty notebook. Those are all the good things you want to get out of it, but in terms of getting there, particularly when you have an existing brownfield project, you need to go through a few steps.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=604s" target="_blank">10:04</a> I like these points. My reports, my semantic model, the metadata that goes along with those things, aside from refreshing data, all that can be checked into Git fairly easily and the file sizes are relatively small. With PBIP format, we get a nice little small metadata layer that describes the information in the data.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=638s" target="_blank">10:38</a> Microsoft wants the big clouds. They want to hold your data because they realize there's a strategic advantage for them to make it easy for you to store data cheaply in their storage accounts. Once you start accruing a mass of data, people aren't going to move between Fabric and AWS and Google. I've seen customers who are heavily Microsoft Products but already have a lot of data built inside AWS. It's really expensive to move it out.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=704s" target="_blank">11:44</a> I also feel like there's a trend around lakehouses and this new delta parquet format of tables. There's been a shift in mentality. When I bought the SQL server, compute was cheap because I paid for the machine. The storage was expensive. I'm bringing in data, quickly aggregating it, making staging tables, only keeping them long enough to update actual records. I didn't bring down a full copy of my operational system every day because I was worried about storage being filled up.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=738s" target="_blank">12:18</a> The flip side now in the cloud is storage is almost cheap. So now you just throw everything in there. A lot of developers moving into Fabric are still in that SQL mindset of not storing a lot of information. Actually in the cloud, we want to optimize for how little can I compute the data to get the answers I want. There's a mindset shift occurring here.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=771s" target="_blank">12:51</a> Tommy, what are your thoughts around DataOps? What are your experiences or friction points, maybe even with Fabric? First off, Mike, I want to briefly touch on what you said about where data is stored. DataOps and DevOps are independent of the platform. Whether you're using AWS, Google, or your own custom-built in-house data operation, you don't necessarily need to worry about whether it's Fabric or not.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=839s" target="_blank">13:59</a> The last two episodes, some people may have felt that I'm more adverse to this. I've taken more of the devil's advocate side. That's really because I'm trying to think of the general audience. A lot of people are not used to this. For myself personally, with teams that I work on, we're all in DataOps. We're all in using source control. Even just the basics, making sure that's part of the conversation.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=874s" target="_blank">14:34</a> I'm working with a client right now and they are not a Power BI shop. They want to be. The conversation I had was they wanted a lakehouse, they wanted all the things, and I basically said we don't even have a database. All your data is in Excel. We're not even at a database yet. But the technologies really move so fast with things being GA. Especially as a consultant, we don't push preview. You're at a place where we can actually push Fabric right now for an organization starting from an Excel background.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=907s" target="_blank">15:07</a> I think we're moving to a point where the future of really development teams, whether you like it or not, is going to be in DataOps. I don't think a lot of organizations are going to survive doing the SharePoint approach, the old way towards Power BI development.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=939s" target="_blank">15:39</a> This is from Ahmad Chamy, he's a consultant. He's been fascinated with the topic and the potential of DevOps and DataOps for data folks. It increases team and developer productivity with balancing stability and accuracy. It seems like an oxymoron, but he really believes DataOps is the solution. With all the tooling in Fabric coming together, there's a massive opportunity to accelerate data teams performance.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1006s" target="_blank">16:46</a> If you're working in Power BI or Fabric, it's going to be a necessity, a prerequisite skill to do DataOps or at least know the basics if you want a job. That's a good point.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1041s" target="_blank">17:21</a> Embracing DataOps ironically means to not do a lot of things that you're being shown or told when it comes to Fabric. The keynote demo where everything is super quick and easy, you open a browser, click around, and suddenly have a massive warehouse or lakehouse and run Python scripts from a notebook — sadly that's the polar opposite of how you actually want to think about a DataOps project.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1076s" target="_blank">17:56</a> That's one of the challenges in terms of bringing those ideas out there and convincing people. Particularly with projects that have already started, you're going to have to rethink and undo a lot of stuff just to make it possible for automation to kick in.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1109s" target="_blank">18:29</a> I don't think you're wrong at all. A lot of teams in the data space are not thinking about this DataOps mentality. How do I make sure that the data coming through my pipeline is high quality? We have some tests, some metrics. A lot of the data projects we work on in companies are reactionary — something bad happens and then we go try to solve where the problem came from.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1141s" target="_blank">19:01</a> The DataOps mentality is the opposite — we understand what the data should look like and we apply expectations to the data and our process. Through that, DataOps allows us to be proactive. We know this table didn't load. We know these records didn't show up where they should have. We know someone's putting text into a numerical column that's breaking our downstream pipeline.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1174s" target="_blank">19:34</a> There's actually a security element to DataOps as well. Especially in healthcare and financial spaces, production data has potentially secure information — PII. You can't have that in test or dev. Someone in the data engineering team has to take data from prod and either obfuscate it or mock up new data that's representative of what's happening in production.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1241s" target="_blank">20:41</a> DataOps is trying to consider this multi-environment reality. The data is not the same in every environment. How do you build tests around this stuff? We've been doing extensive testing with automated pipeline runs. A lot of examples I see are companies that do data for many customers. Each customer gets their own lakehouse.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1276s" target="_blank">21:16</a> When you have hundreds of customers, you start seeing patterns in bad data. Smart companies start thinking about how to solve alerts and produce this as a full product where we're no longer throwing people at every single customer to test their data. This is where DevOps really starts applying a lot of good help when you scale out with larger teams.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1311s" target="_blank">21:51</a> Tommy, SharePoint doesn't really fit the large team data sharing space here. It does to a point but falls apart. The operative word there is smart companies, which is also interchangeable for rare. The companies that don't have these issues probably aren't calling me. When there are challenges, that's when consultants get brought in.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1379s" target="_blank">22:59</a> I think a lot of people get frustrated hearing this conversation about DataOps when it's so easy to create things in Fabric. It takes three clicks to create a notebook, four clicks to create a lakehouse, which was previously nowhere near what it took. But that completely flies in the face of building a real project. It's almost too easy to create and do things in data, especially in Fabric.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1449s" target="_blank">24:09</a> Maybe 15% of people who work in Power BI know what Git is. The numbers are probably less. There's a lot more preaching we have to do. There's a lot of frustration that's going to happen between now and then.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1485s" target="_blank">24:45</a> Let me come back on the opposition we seem to have against click-and-drag. It's not all bad. There's a lot of value in getting something out there quickly. But the real question comes — how long does that solution last? What I would propose is it's absolutely fine to click your way through a browser workspace to get a V1 out there and solve an immediate business problem.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1522s" target="_blank">25:22</a> But the big caveat is if you want to go from V1 to V2, this is when you have to think about what it takes to automate and scale and divide between different team members. Step back and think about these artifacts you've created. What do they look like in terms of code? How can I store this in source control? And most importantly, how can I define additional non-production environments?

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1589s" target="_blank">26:29</a> Click as much as you want to get that urgent report or metric out there, but don't think that this is the ultimate final way this project is going to live and scale and iterate.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1621s" target="_blank">27:01</a> Tommy and I debate this a lot. It's a fuzzy line between just build it to get it working and then polish it to make it reliable. I don't want to spend months building something that's just not going to be used by the business. That's a waste of money. That's a pure requirements miss.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1654s" target="_blank">27:34</a> I'm a firm believer of having the business out in front of the IT organization experimenting and building version one of things. If this fast-moving project turns into something adding real value and gains interest from VPs, then say okay, let's take a V2 look at this and start applying DevOps and DataOps principles on top.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1721s" target="_blank">28:41</a> There's a huge organizational component here. The people who would initiate a project from scratch and do that first V1 — those would be your most senior people. Are you going to want only those people running your projects daily with more iterations? No. Organizationally you will want to delegate future iterations as much as possible to more junior people.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1755s" target="_blank">29:15</a> DevOps and DataOps are crucially important if you want that organizational scale. If you want to give really important projects into the hands of more junior people, you absolutely require all the tooling and automation in place that you get from DevOps and DataOps.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1788s" target="_blank">29:48</a> 100% agree. This is how organizations actually scale themselves. Experts build the pattern, but if they're not building on top of DevOps or DataOps, how do you hand that to somebody more junior? They need rules and structure to follow so their quality meets the standard of the expert builders.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1854s" target="_blank">30:54</a> I want to ask — does the technology change process principles? I've said this around the medallion approach. Traditional processes have been dictated by the technology. We have technology that's so easy to use right now. Does the rapid technology growth change some of the principal processes we have in DataOps?

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1920s" target="_blank">32:00</a> Absolutely. Yes. You can dream up the most perfect processes, but if you don't have the right tooling available to implement them, there's no worth to it. It goes that way as well. Something I really love about Power BI is the power of Power Query — the fact that you have extremely easy accessibility to hundreds of external data sources.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=1984s" target="_blank">33:04</a> Provided you've got credentials, you can just connect to anything, even SharePoint, and immediately see your data in the Power Query window. It doesn't take very long to turn it into a semantic model and then a report. What would we do without that piece of kit? You'd have to study APIs for whatever obscure data source you want to connect to.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2056s" target="_blank">34:16</a> The same applies to your team workflow and how far you can go in terms of automation and automated testing. I think we'll have some more limits nowadays and some scope for better tooling to come out.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2090s" target="_blank">34:50</a> Inside Excel, you're already doing data engineering. You're just doing it manually — cleaning out files, removing columns, parsing data. You already understand the process to clean up stuff so you can put it into a bar chart. What we're doing now is making this a commodity. Everyone can start doing it. We're going to bring this down even further.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2124s" target="_blank">35:24</a> These things called MCPs, the large language models, are changing how I think about what I do as my work. I can focus less on the syntax and more on the process and concepts. That barrier of studying APIs and writing all the JavaScript or Python or SQL scripts — I can now talk to an AI and say I'm looking to get this information, give me a starting point.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2159s" target="_blank">35:59</a> I was using a Python function the other day called melt. I didn't know what it meant. I asked the AI what this function does and to give me another example. The learning is happening right in line with actual development in a faster way. The iterations and cycles are going faster and faster.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2229s" target="_blank">37:09</a> You should understand what your process should be and then pick the technology that makes it as easy as possible to follow your process. If I have data in production, test, and dev, I don't need every single record from production. Production may have 5 or 10 years of data. Test once a week gets the last 6 months from production. In dev, you may only grab a month.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2296s" target="_blank">38:16</a> Does Fabric give you an easy copy, replace, security roll? Where's the easy button that Power Queries this type of experience? There's not. The technology has not made my process any easier. So I'm going to spend more effort in this DataOps process.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2328s" target="_blank">38:48</a> Navata, Mathias's company, is aiming to look at problems like this. While the Microsoft tool doesn't solve the friction, we have really smart people like Mathias thinking through how this works better. Every time you're building technology, if you're not building it to solve a specific problem, why are you doing it? This DataOps space is very greenfield.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2394s" target="_blank">39:54</a> Microsoft's not doing a really rich job of making this as clicky-draggy-droppy as we'd like. We're going to have to rely on the community to build tools and solutions. Microsoft right now is dealing with a lot of paper cuts at the Fabric level. In 3 to 5 years, maybe they'll start adding interesting DataOps processes. But right now, the friction around DataOps and Fabric is fairly medium to high.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2457s" target="_blank">40:57</a> Let me make the point for DataOps once more. AI tools today are largely text-based — text input and text output. If your project is merely visual, merely a UI you click through, somehow that doesn't go together with AI. But with DevOps and DataOps, you've got source control, which means you actually have a text representation of the essence of your project — definitions, metadata, logic, code, scripts.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2525s" target="_blank">42:05</a> Once your project is basically just a bunch of text files, you're in a perfect position to make the most of AI. You can feed AI this snippet and get the intelligence of the whole world in terms of adding new things, improving, commenting, rewriting. That's yet another reason why it's worth investing into DataOps and particularly into source control.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2561s" target="_blank">42:41</a> I'm literally having a light bulb moment. Mathias brought up the idea that once your project becomes fully text, you can really leverage AI. Tommy brought up that AI feature where Microsoft can change your data wrangler scripts from Pandas to PySpark. Code — it's all just code. It's text. Everything is text.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2630s" target="_blank">43:50</a> There is this idea with AI and they're calling it the conductor's era. You're not doing the execution a lot. You're orchestrating what needs to get done. I don't need to know what that melted Python function is. I just know I need it. I am conducting a lot of the code, a lot of the process. And the fact that I don't need to actually be the executioner of it — the AI is.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2696s" target="_blank">44:56</a> The skill set we're looking for is not so much the hard skill but more of a cultural skill. What Copilot does for me when I do changes to Fabric — the outline of all the changes I've already made and the bullet points, it's better than I could do. We're getting there where the average user just needs to know the principles around what used to be hard code things. AI is going to co-pilot our applications.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2762s" target="_blank">46:02</a> Understanding the concepts of good data processing, good data engineering — why can't I point an AI at a table and say here's the table in bronze, I need it to have these characteristics, and write these tests about these columns? There's going to come a day where I can just speak to it and it's going to get the majority of the way there.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2831s" target="_blank">47:11</a> Then my mind goes to how do we know it's right? We can't trust it blindly. Discernment is going to be incredibly important when we work with AI. Better prompt engineering, better planning, thinking conceptually, then letting the AI go to town and coming back to verify — did it do what we want?

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2864s" target="_blank">47:44</a> At the very least, we can bring people rapidly into the development process even with introductory knowledge where they didn't have to previously know all these principles.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2899s" target="_blank">48:19</a> In the age of AI where more and more code generation is delegated to AI, what will future engineers do? From my point of view, they're going to be more involved in testing. One key skill is prompt engineering. But the other thing — and this is going to be bigger and bigger — is to actually formalize the requirements and turn them into tests. You can afford to delegate as much as possible to AI because you've got the security of your own tests being run against this before production.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2965s" target="_blank">49:25</a> It'd be nice if we had better tools for testing. Whether it's testing the semantic model or the report side of things. Even just the idea of did I make a change on my semantic model and break a visual because I renamed something. People have built solutions — John Kerski taking images of reports, Michael Kvolskis with Semantic Link Labs. There's a lot of things out there but it's not easy yet and it's not scalable.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=2998s" target="_blank">49:58</a> Until the Power BI file changes, you can't render a report in any of your IDEs. Unlike any other tooling where you can see the output in that tool, I still have to open up the binary file. Our output is also still the .exe, that binary file. With code, with notebooks, with pipelines, there's much more — we have APIs to actually test that.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3063s" target="_blank">51:03</a> I think AI is going to get us there. We're not too far away from "hey Mr. AI, open up this URL, log in with these credentials, click on these things in the report." Real-time Intelligence already has MCPs attached to it. Take Playwright, marry it with AI, and now we're getting scarily close.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3129s" target="_blank">52:09</a> We're getting to the point where we just need good prompt engineering and really detailed requirements back to the AI. The more I can articulate the words explicitly, step-based — like teaching a junior — the better its output becomes. I can think about that process, walk away, and it just does stuff.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3163s" target="_blank">52:43</a> I hate writing tests. I never like writing tests. If anything I want AI to do, please AI write the tests for me. That's the one thing I don't want to do.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3196s" target="_blank">53:16</a> Gentlemen, I need to ask a question. Can we rapidly adopt DevOps and DataOps without AI? If we're saying the majority of people are not doing DevOps but we want them to, can we do that without AI as an assistant?

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3229s" target="_blank">53:49</a> I'm going to reject the question. We've got the AI, so why would you not be using it? It would be silly not to use it. Well played. Mathias called your bluff.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3266s" target="_blank">54:26</a> To answer your question directly, Tommy — will AI accelerate this? 100% it will. The scary thing right now is users don't understand how AI is changing how they're going to be doing work. People are scared about it taking their jobs. AI is making code generation a commodity, the same way that Power Query changed my work in Excel into a commodity.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3333s" target="_blank">55:33</a> ChatGPT in July of last year had zero hits on my website. Now it's above every other channel except Google and it's aggressively attacking. Google's going to struggle here. ChatGPT and AI and large language models are scraping websites and becoming knowledge experts based on existing knowledge.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3367s" target="_blank">56:07</a> AI is here. Our challenge is to figure out how to use it to help us with DataOps. What tooling is the community going to build to use AI to help us build DevOps? Things are very quickly moving. We're not going to see the realization of what impact AI is really doing for like another 6 months to a year.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3434s" target="_blank">57:14</a> DataOps is incredibly important to your organization. I do think you should start learning about it now. Check out the article from Ahmad. Go look at DataOps. If you don't know what it is, I think you need to be learning about it. Research it. Figure out how you can work it into your organization, because there's nothing better than having good clean data and being able to leverage this across larger teams.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3467s" target="_blank">57:47</a> The Microsoft suite is very underdeveloped in this space but it will get there likely. Stay tuned, follow Mathias, check out what he's doing. I'm pretty sure there'll be some revelations coming through Navata as well.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3502s" target="_blank">58:22</a> It was a great chat, absolutely enjoyed it. Key thing from my point of view — DataOps is crucial even if there's a bit of a learning curve. It's crucial if you want to scale organizationally, delegate crucial projects to more junior resources, and still have absolute assurance about quality.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3534s" target="_blank">58:54</a> Some people may think that DataOps is the future of Power BI is a hot take. To me, that is the only take. With what we have available from the technology to the resources and where Fabric's heading — if you are still resistant towards DevOps and DataOps and source control, this is the time to have your conversion. This is where we're going. This is where the technology is going. DataOps is the future of Power BI development.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3568s" target="_blank">59:28</a> Thank you all very much for listening. We do appreciate your ears for today. You spent a nice long hour with us. We really appreciate you listening to us talk about DataOps, which we think is going to be very impactful for your business.

<a href="https://www.youtube.com/watch?v=g5AWZLBgVdI&t=3600s" target="_blank">60:00</a> You can find us on Apple, Spotify, wherever you get your podcast. Make sure to subscribe and leave a rating. Share with a friend. Do you have a question, idea, or topic for a future episode? Head over to powerbi.tips/empodcast. Join us live every Tuesday and Thursday, 7:30 AM Central, and join the conversation on all of PowerBI.tips social media channels. Thank you all and we'll see you next time.

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
