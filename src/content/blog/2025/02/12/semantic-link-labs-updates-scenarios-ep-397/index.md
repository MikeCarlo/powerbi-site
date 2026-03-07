---
title: "Semantic Link Labs Updates & Scenarios – Ep. 397"
date: "2025-02-12"
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
  - "Semantic Link"
  - "Semantic Link Labs"
  - "Notebooks"
  - "Workspace Monitoring"
  - "Data Warehouse"
excerpt: "Mike and Tommy break down what’s new in Semantic Link Labs and why it’s becoming a go-to toolkit for automating Fabric and semantic model workflows with notebooks. They share practical scenarios—from incremental refresh policy updates to operational monitoring—so you can move faster while keeping governance in mind."
featuredImage: "./assets/featured.png"
---

Mike and Tommy break down what’s new in Semantic Link Labs and why it’s becoming a go-to toolkit for automating Fabric and semantic model workflows with notebooks. They share practical scenarios—from incremental refresh policy updates to operational monitoring—so you can move faster while keeping governance in mind.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/bOVBPAk-d24" 
  title="Semantic Link Labs Updates & Scenarios - Ep.397 - Power BI tips"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- [Introducing template dashboards for Workspace Monitoring](https://blog.fabric.microsoft.com/blog/introducing-template-dashboards-for-workspace-monitoring/?WT.mc_id=DP-MVP-5002621#) — Microsoft shared community-built, open-source template reports (Power BI and real-time dashboards) designed to plug into Fabric Workspace Monitoring. The goal is faster troubleshooting by starting from pre-built patterns for things like long-running queries, refresh operations, and ingestion delays instead of building every monitoring report from scratch.

- [Private Preview of Migration assistant for Fabric Data Warehouse](https://blog.fabric.microsoft.com/blog/private-preview-of-migration-assistant-for-fabric-datawarehouse/?WT.mc_id=DP-MVP-5002621#) — The Fabric team opened a private preview of a migration assistant intended to accelerate moving to Fabric Data Warehouse from sources like SQL Server and Synapse dedicated SQL pools. It focuses on converting schema/code, supporting data migration, and adding AI-assisted guidance—worth tracking if you have legacy warehouse workloads you’re planning to modernize.

- [Introducing ownership takeover for Fabric items](https://blog.fabric.microsoft.com/blog/introducing-ownership-takeover-for-fabric-items/?WT.mc_id=DP-MVP-5002621#) — Fabric now supports “take over” (ownership takeover) for many non-Power BI Fabric items when the original owner leaves, loses access, or credentials expire. This is a key business-continuity feature for keeping pipelines, lakehouses, and endpoints functioning without needing to rebuild assets from scratch.

- [Submit a topic idea / mailbag](https://bit.ly/3i8LdBo) — Have a question you want covered on the show? Drop it in the mailbag form—episodes are best when they start with real-world scenarios.

- [Subscribe to the podcast](https://powerbi.tips/podcast/) — One hub page to catch the live stream and find Spotify/Apple links to listen later.

- [Tips+ Theme Generator](https://bit.ly/3Ymso48) — Generate consistent Power BI themes quickly so your team can stop hand-tweaking colors and fonts across reports.

## Main Discussion: Semantic Link Labs Updates & Scenarios

Semantic Link Labs is quickly becoming a “power user’s automation layer” for Fabric and Power BI semantic models—especially if you’re already living in notebooks.

In this episode, Mike and Tommy talk through the practical reality of where Fabric is heading:

- **More operations are moving into the service and APIs.** If you can script it, you can standardize it.
- **Notebooks are the control plane.** Not just for data engineering, but for managing semantic models, governance workflows, and operational hygiene.

### What Semantic Link Labs is (and why it matters)

At a high level, Semantic Link Labs is a community-driven toolkit (published by Microsoft) that extends Semantic Link patterns—helping you automate tasks that historically required a mix of manual steps, Desktop work, or niche tools.

A few themes that come up repeatedly:

- **Repeatability:** turn “tribal knowledge” model operations into code.
- **Scale:** apply the same patterns across many workspaces/models.
- **Governance:** make “safe defaults” the easiest defaults.

### Scenario 1: Automating incremental refresh policy changes

One of the standout real-world scenarios discussed is updating incremental refresh policies as time moves forward—especially when your business logic doesn’t match the out-of-the-box policy behavior.

A concrete example is covered here:

- [Semantic-Link-Labs – Automate updating your Incremental Refresh Policy for your Semantic Model](https://www.fourmoo.com/2024/07/10/semantic-link-labs-automate-updating-your-incremental-refresh-policy-for-your-semantic-model/) — Shows how to programmatically adjust incremental refresh settings so you keep exactly the rolling window you intend (for example, aligning to a fiscal year start) instead of over-retaining data “just to be safe.” The big win is controlling model size and data exposure while still keeping refresh behavior correct.

### Scenario 2: Keeping up with the rapid release cadence

Semantic Link Labs is moving fast, and tracking releases is part of using it effectively:

- [Releases · microsoft/semantic-link-labs](https://github.com/microsoft/semantic-link-labs/releases) — New and updated functions are frequently added across areas like semantic model operations, Direct Lake utilities, and broader Fabric admin/ops scenarios. If you’re building notebook-based automation, skimming the release notes regularly can surface new capabilities you can immediately fold into your standard workflows.

### Practical takeaway: treat notebook automation like production code

Mike and Tommy emphasize a pattern that more teams are going to need as Fabric expands:

- Put notebook-driven admin/model changes behind **process** (reviews, owners, environments).
- Prefer repeatable scripts over “clickops.”
- Build guardrails early so “self-serve” doesn’t turn into “wild west.”

## Looking Forward

Semantic Link Labs is a signal of where the Fabric ecosystem is going: more programmatic management, more automation, and more “data + BI + ops” converging in one platform. If you invest a little time now in notebook-based workflows (and governance around them), you’ll be in a much better place as your tenant, capacity, and semantic model estate grows.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

# Transcript (clean)

Video: https://www.youtube.com/watch?v=bOVBPAk-d24

- [00:00:32](https://www.youtube.com/watch?v=bOVBPAk-d24&t=32s) **Tommy:** good morning and welcome back to the explicit measures podcast with Tommy and Mike good morning everyone welcome
- [00:00:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=37s) **Mike:** good morning everyone welcome back good morning Mike how was your weekend it went very quickly been very busy with software and Building Things and lots of projects going on but I took a little bit of time to relax I have for whatever reason reinvigorated a nice good old cold or flu or something on me oh no I am just feeling congested so I did a lot of lay and low a lot of we are doing a larger kitchen remodel in our kitchen doing some refacing we're leaving the cabinets alone but we're doing new countertops
- [00:01:07](https://www.youtube.com/watch?v=bOVBPAk-d24&t=67s) **Mike:** alone but we're doing new countertops some big things that my wife has won and so it's been very exciting to see that come along but needless to say we've been eating out a lot because we don't have a kitchen there's no sink it's it's out of commission right now for a little bit dude is it a we're doing a full revamp or we're just doing like cabinets like a little little I gu you you would call it like refacing the cabinets so the cabinets are getting refaced so they're and all new doors and handles we are adding some pull out
- [00:01:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=97s) **Mike:** handles we are adding some pull out drawers inside the cabinets and then new countertops so we're not like going down to like studs we're not going down to like like drywall we're just using what's already there the the structure is not changing there's nothing we're not adding new cabinets we're not moving things around it's it's all the same stuff so okay needless to say you can't use it well it's been nice because while we've been having worked done on the cabinets we've been able to use the kitchen but now we just we're at the very end and at the very end they have to take out the plumbing they
- [00:02:08](https://www.youtube.com/watch?v=bOVBPAk-d24&t=128s) **Mike:** they have to take out the plumbing they put new countertops in and that's when you lose like the sink so hopefully today we get the use of our sink back and we can start reusing her kitchen we got now the hard decision what backsplash do you want oh you should call my wife she was in a previous life a interior designer oh excellent what she and she married me the non interor designer no no colors are are not a thing did that like I
- [00:02:39](https://www.youtube.com/watch?v=bOVBPAk-d24&t=159s) **Mike:** not a thing did that like I think a lot of people depending on the colors that you learned those are the colors that you actually see so my wife tested me out on this and she's like what color is it I'm like well you didn't learn mauve I know the Rainbo and I know that variations teal yes slightly more teal yeah but very teal yeah I think my wife has 50 colors she knows wow and so like I was looking at something oh
- [00:03:09](https://www.youtube.com/watch?v=bOVBPAk-d24&t=189s) **Mike:** so like I was looking at something oh it's blue she like no it's acrylic da d d du yeah like I couldn't see it but I also never learn what th those colors are so it's amazing at least for an interior designer interesting I I don't know how to I don't I'm not sure if I would be able to pick out or describe multiple colors for people I could probably tell you like what some general colors are to your point Tommy but I couldn't be all all these nuanced colors like green you
- [00:03:40](https://www.youtube.com/watch?v=bOVBPAk-d24&t=220s) **Mike:** know seafoam green all these other like I wouldn't know I would not know these things I would just yeah it's I'm very simple in that regard it's interesting I'm not good at yeah I'm not at making designs but I'm really good at like looking at other things and being able to say oh I like that oh this is a good design so I'll I'll tie this back here to powerbi a little bit when I look at colors or color pettes I'm probably not the best on knowing how to create something from scratch but I can do a
- [00:04:11](https://www.youtube.com/watch?v=bOVBPAk-d24&t=251s) **Mike:** something from scratch but I can do a really dang good job of going into figma and finding a different report that I like and copying it or bringing down the colors or like building a style that looks similar to that object and that's what a lot of what I do when I build reports I'll go find an image a picture or someone's mockup of a dashboard and I'll say oh that looks interesting and then I'll go Riff on that design make it my own and then build a lot of extra features and pages and backgrounds for it so a lot of times I'll do that I'll take inspiration from other other
- [00:04:42](https://www.youtube.com/watch?v=bOVBPAk-d24&t=282s) **Mike:** I'll take inspiration from other other people's works I think it's like the phrase phrase great artists no what is it great artists borrow or something like that or steal I don't remember that phrase is great good artist borrow great artist steal or copy that's yeah I think Ste job said it so can you articulate oh great arst steel is I think is the the phrase well at least that's what Chad gpg
- [00:05:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=314s) **Mike:** that's what Chad gpg says can you articulate when you see something like what you like about it or is it more the I just like that where even when it comes to design or your kitchen oh good question yeah I would I'd say I can probably pick up on pieces of it I can articulate what pieces of the design that I really like and that's usually what I spend my time on mimicking I'll give you just a really weird I maybe history I guess previously I was well not previously when we first got married we didn't have much monies and so year we wanted to do
- [00:05:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=345s) **Mike:** much monies and so year we wanted to do Christmas cards and so my wife would go online and she'd see all these Christmas cards and she like oh that's an interesting Christmas card and she would show me the picture of the Christmas card and I took it as a challenge to go into like a computer program and like mimic that card like look at the details figure out how to make it replicate it and I would replicate these Christmas cards by making my own design and I would make it entirely out of like illustrator and then we'd go to the store and we'd print off a bunch of pictures or or im images off of
- [00:06:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=375s) **Mike:** pictures or or im images off of like Walmart or whatever and then we would set out a bunch of photos basically but it was of an image that I had designed now granted in the early days I had nothing but time it was just time computer building so I had there was not as many kids I could spend you was not as many kids I could spend four hours just trying to figure know four hours just trying to figure out how to get the design of the thing to work I'm Googling things I'm I'm learning about illustrator and Adobe products and maybe I'm using some photoshop in there a little bit too so I'm doing all this work with this program just to make these good-looking images I think that helped a lot because
- [00:06:47](https://www.youtube.com/watch?v=bOVBPAk-d24&t=407s) **Mike:** images I think that helped a lot because now I can look at other images and know how they're built it's like a skill it's a little bit it's something you have to like learn how to do and this is I think one of the things that is difficult for people in powerbi is we're really good at data modeling and bringing together the data structure I think the majority of the people building reports don't have the eye or the visual or the aesthetic side of things and that's where people need a little bit of help like and and you could could probably you could easily spend as much
- [00:07:17](https://www.youtube.com/watch?v=bOVBPAk-d24&t=437s) **Mike:** probably you could easily spend as much time doing the data modeling double that time and you could do all the report visual styling right you could e so where do you cut Corners we've had this discussion a long time ago of like what what's the right balance of that inside you're reporting anyways no no I I'm honestly the same thing for me the design side took a long time for me to actually so to speak understand what I was trying to do or actually put a design together that someone make sense because I was analytical I didn't know what I was supposed to build I just had
- [00:07:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=468s) **Mike:** what I was supposed to build I just had things that I thought looked good but I think it books help the biggest thing that actually helped me was asking someone else who had no stake in those in the data like a friend or spouse like hey what is this telling you yeah so I like it awesome let's Jo let's before we jump into our news topic today we just start a little rambling here at the beginning so we'll we'll stop rambling here for a moment today we're going to talk about semantic link
- [00:08:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=500s) **Mike:** we're going to talk about semantic link Labs what updates have recently been coming out this tool Is Amazing by the way this is incredible tool it does so many different things and then what are different scenarios or patterns on when you use semantic link labs to work inside your tenant now to be very clear semantic link Labs is a python Library based on another Library called Senpai which I had to really think about this was so it's Senpai because semantic link semantic models right semantic models is the first part
- [00:08:50](https://www.youtube.com/watch?v=bOVBPAk-d24&t=530s) **Mike:** right semantic models is the first part of it and then py as python so it's like spark Pi spark right so it be Pi spark or or the other languages spark SQL right so those are the things that are relating to that Library the library semantic link or semantic yeah semantic link is directly built from microsofts maintained by them and allows you direct access to the semantic models in your tenant but does a lot
- [00:09:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=560s) **Mike:** in your tenant but does a lot more of that semantic link Labs extends this heavily and so we're going to unpack a little bit more of semetic Link Labs where to use it where we're finding with it right now and jumping in there that'll be our for today all right Tommy give us some news so there's a few
- [00:09:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=577s) **Tommy:** give us some news so there's a few things with that actually went under the radar that and because we didn't talk about it didn't mean no one read it but I think a few articles if we didn't say it then not important not don't talk about in the podcast did the feature actually get released that's that's what we're talking talking about I'm actually surprised we haven't talked about this so the first one I want to bring up is the template dashboard for workspace modering which I thought was huh maybe I don't know why
- [00:10:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=610s) **Tommy:** thought was huh maybe I don't know why the immediate interest wasn't there but these real time dashboards work with your workspace monitor that you're used to and they're actually Community built they're open sourced and they can download through GitHub and really what they help

through GitHub and really what they help you allow you to do is go through your
you allow you to do is go through your environment
environment um and like basically the templates that
um and like basically the templates that we're used to when it comes to
we're used to when it comes to monitoring that Microsoft does that we'd
monitoring that Microsoft does that we'd have to then like live connect if we
have to then like live connect if we wanted to modify this um they're all
wanted to modify this um they're all this community build and you can edit
this community build and you can edit the desktop version and have it to
the desktop version and have it to your to your customization which is
your to your customization which is really neat so so this is this is a tool
really neat so so this is this is a tool that Microsoft has built to enable users
that Microsoft has built to enable users to get better analytics about their
to get better analytics about their workspaces and it's using in a
workspaces and it's using in a monitoring event house so this is
monitoring event house so this is streaming analytics directly into a
streaming analytics directly into a collection an area or you know store
collection an area or you know store basically and then from that store
basically and then from that store they're giving you some reporting kind
they're giving you some reporting kind of off the shelf out of the box tooling
of off the shelf out of the box tooling inside their fabric toolbox on GitHub so
inside their fabric toolbox on GitHub so fabric toolbox is the GitHub repo and
fabric toolbox is the GitHub repo and I'll make sure I put both of these links
I'll make sure I put both of these links down here below um in the in the chat
down here below um in the in the chat windows for everyone to kind of see how
windows for everyone to kind of see how that works let me uh get those over here
that works let me uh get those over here to the chat window if you want go check
to the chat window if you want go check those out we'd highly recommend it
those out we'd highly recommend it really good tools um yeah be curious if
really good tools um yeah be curious if anyone else is using these or seeing
anyone else is using these or seeing them one thing I will caution you here I
them one thing I will caution you here I believe my understanding this I haven't
believe my understanding this I haven't played with it so I got to be I've read
played with it so I got to be I've read the documentation on it but I haven't
the documentation on it but I haven't really gone into turning it on yet my
really gone into turning it on yet my understanding is this is the same thing
understanding is this is the same thing as turning on like log analytics for
as turning on like log analytics for your workspace so this could get very
your workspace so this could get very noisy or there could be a lot of of
noisy or there could be a lot of of large volume of data coming over to your
large volume of data coming over to your fabric workspace anytime you send more
fabric workspace anytime you send more things like this or turn on any kind of
things like this or turn on any kind of real time Eventing you're immediately
real time Eventing you're immediately going to consume more capacity workspace
going to consume more capacity workspace so just my big caution with this is you
so just my big caution with this is you can turn this on it's a good solution it
can turn this on it's a good solution it is
is streaming however just be cautious
streaming however just be cautious because when you turn it on it will send
because when you turn it on it will send a lot of data potentially every
a lot of data potentially every interaction every query all the details
interaction every query all the details from the workspace that's happening will
from the workspace that's happening will be sent directly to the stream good but
be sent directly to the stream good but I would probably recommend don't turn it
I would probably recommend don't turn it on and forget it I would definitely
on and forget it I would definitely recommend turn it on and just watch it
recommend turn it on and just watch it make sure you turn it off um because it
make sure you turn it off um because it could potentially add a lot of costs or
could potentially add a lot of costs or a a lot of additional compute units to
a a lot of additional compute units to your your skew so just be aware of that
your your skew so just be aware of that as as you use the
as as you use the tool so just a point out there that's
tool so just a point out there that's probably a really good thing because uh
probably a really good thing because uh people might not know how much data is
people might not know how much data is actually going in and yeah I thought it
actually going in and yeah I thought it would be through the normal monitoring
would be through the normal monitoring that you get with um the admin but no
that you get with um the admin but no interesting all it's a different
interesting all it's a different solution so they're trying to be more
solution so they're trying to be more transparent uh I was talking with um oh
transparent uh I was talking with um oh shoot I forgot his name uh he works um
shoot I forgot his name uh he works um for Microsoft and he just did a you he
for Microsoft and he just did a you he just did our Milwaukee User Group area
just did our Milwaukee User Group area recently um the name will come to me
recently um the name will come to me like literally halfway through the
like literally halfway through the podcast but anyways uh we had the the PM
podcast but anyways uh we had the the PM speaking to all admin monitoring and
speaking to all admin monitoring and going through the details there Tommy he
going through the details there Tommy he spoke at your user group too oh um
spoke at your user group too oh um Gil revie no after Gil that was the same
Gil revie no after Gil that was the same session it was after Gil was doing his
session it was after Gil was doing his oh our main
oh our main speaker forgot his name Milwaukee I I
speaker forgot his name Milwaukee I I remember used to work in Milwaukee tool
remember used to work in Milwaukee tool sounds like I don't even know anyways
sounds like I don't even know anyways we'll figure it out later I'll go get
we'll figure it out later I'll go get the name Tommy will go look up his um
the name Tommy will go look up his um his user group session and he'll go get
his user group session and he'll go get the name anyways um Tim Bendis there it
the name anyways um Tim Bendis there it is someone in the
is someone in the chat Tim Bendis is um Microsoft employee
chat Tim Bendis is um Microsoft employee and went through all the details of the
and went through all the details of the monitoring app there's a lot of things
monitoring app there's a lot of things coming and Microsoft is trying to make
coming and Microsoft is trying to make the the entire modeling experience
the the entire modeling experience easier to understand thanks Dan while I
easier to understand thanks Dan while I stumbled around there for a bit
stumbled around there for a bit appreciate it all right let's move on to
appreciate it all right let's move on to the next one what's our next uh news
the next one what's our next uh news item Tommy uh another just kind of
item Tommy uh another just kind of announcement I guess there's really no
announcement I guess there's really no feature coming out but uh it came out on
feature coming out but uh it came out on January 29th the private preview private
January 29th the private preview private preview of everyone can't get to it
preview of everyone can't get to it quite yet yeah of the migration
quite yet yeah of the migration assistant for fabric data
assistant for fabric data warehouse uh so basically ancy and
warehouse uh so basically ancy and Microsoft were letting know that there
Microsoft were letting know that there would be a migration assistant last year
would be a migration assistant last year uh they're currently running a priview
uh they're currently running a priview uh assistant or a private preview with
uh assistant or a private preview with the migration assistant uh they're
the migration assistant uh they're looking for
looking for participants um and they're look you can
participants um and they're look you can complete a form and you can actually uh
complete a form and you can actually uh get access to the Mig migration
get access to the Mig migration assistant and again that migration
assistant and again that migration assistant is help accelerate
assistant is help accelerate your SQL Server syap other warehouses uh
your SQL Server syap other warehouses uh to fabric data
to fabric data warehouse and I think the idea here is
warehouse and I think the idea here is they're they're trying
they're they're trying so the reason they go to private preview
so the reason they go to private preview is they think they've got the tool or
is they think they've got the tool or the migration solution complete but
the migration solution complete but they're testing out with the first
they're testing out with the first couple customers so while we can't
couple customers so while we can't necessarily always access these private
necessarily always access these private previews just be mindful of that means
previews just be mindful of that means usually behind the private preview is
usually behind the private preview is actually will release something fairly
actually will release something fairly shortly that means we're we're at the
shortly that means we're we're at the very last stages of bug fixing feature
very last stages of bug fixing feature refinement and then there will be a tool
refinement and then there will be a tool or a repo or GitHub or something that
or a repo or GitHub or something that will tell you how to leverage this
will tell you how to leverage this migration so I guess the point here is
migration so I guess the point here is if you want to migrate SQL Server SQL
if you want to migrate SQL Server SQL dedicated pools or other warehouses to a
dedicated pools or other warehouses to a fabric data warehouse you should now be
fabric data warehouse you should now be able to soon go through a migration
able to soon go through a migration process for that so anyways there is a
process for that so anyways there is a form on this page so if you would like
form on this page so if you would like to participate in this one you can apply
to participate in this one you can apply to be part of the private preview um
to be part of the private preview um it's a form on the page that I just sent
it's a form on the page that I just sent out in the chat window so check that out
out in the chat window so check that out um you can go see the form there if you
um you can go see the form there if you would like to try and get involved um
would like to try and get involved um there I'll actually just see if I can
there I'll actually just see if I can link to the form
link to the form directly in case you want to go try this
directly in case you want to go try this out anything else Tommy one last thing
out anything else Tommy one last thing that I'm surprised hasn't been um one of
that I'm surprised hasn't been um one of our major topics January 28th fabric
our major topics January 28th fabric update this is big I think this is the
update this is big I think this is the biggest one of the of the newest items
biggest one of the of the newest items here yeah ownership takeover for fabric
here yeah ownership takeover for fabric items and what this feature is is really
items and what this feature is is really uh allows fabric users with the right
uh allows fabric users with the right permissions to take ownership at an
permissions to take ownership at an individual fabric item um and the since
individual fabric item um and the since if you remember the same experience in
if you remember the same experience in data flows gen one because you couldn't
data flows gen one because you couldn't collaborate the only way you had
collaborate the only way you had actually take over to edit um and so you
actually take over to edit um and so you can actually take over as a user in
can actually take over as a user in individual fabric item um and then the
individual fabric item um and then the users so basically some of the
users so basically some of the limitations there are does not support
limitations there are does not support mirrored database items but this is
mirrored database items but this is pretty cool because we've talked about
pretty cool because we've talked about ownership and governance and security
ownership and governance and security here in a workspace yes
here in a workspace yes and I'm really excited to see this
and I'm really excited to see this because I hope what I I first I hope
because I hope what I I first I hope it's not the same experience as data
it's not the same experience as data flows gen one takeover which was just
flows gen one takeover which was just can I edit but at the same time this is
can I edit but at the same time this is a big deal because we want to have some
a big deal because we want to have some some ownership of more than just a
some ownership of more than just a folder more than just a workspace on
folder more than just a workspace on particular items now I don't think this
particular items now I don't think this umed modifies your ability to edit if
umed modifies your ability to edit if you already could edit it like let's say
you already could edit it like let's say a particular item let's say if I'm in a
a particular item let's say if I'm in a Lakehouse and I had permissions to write
Lakehouse and I had permissions to write nothing
nothing changes I'm just the owner of that set
changes I'm just the owner of that set artifact
artifact well I mean this is the issue around
well I mean this is the issue around like if someone leaves your organization
like if someone leaves your organization and they own something like a Lakehouse
and they own something like a Lakehouse so this is solving a direct problem
so this is solving a direct problem where you had a lake house previously if
where you had a lake house previously if I created it and moved on or let the
I created it and moved on or let the company or
company or whatever that item would be linked to me
whatever that item would be linked to me it would be have the owner would be my
it would be have the owner would be my name and in order to switch that
name and in order to switch that ownership from me to Tommy it was
ownership from me to Tommy it was requiring a help desk ticket you needed
requiring a help desk ticket you needed a help desk ticket to physically change
a help desk ticket to physically change the item The Lakehouse from my name to
the item The Lakehouse from my name to Tommy's name this is like basic
Tommy's name this is like basic featuring right this is basic features
featuring right this is basic features you can't you can't let people create
you can't you can't let people create things and not be able to switch
things and not be able to switch ownership of them especially if if all
ownership of them especially if if all the items in the workspace are attached
the items in the workspace are attached to people one of the things I'd like to
to people one of the things I'd like to see here with this one I don't know if
see here with this one I don't know if they've talked about in this one
they've talked about in this one specifically um but I think they're not
specifically um but I think they're not talking about service principles or
talking about service principles or workspace principles yet no right so the
workspace principles yet no right so the one thing here to consider it's in the
one thing here to consider it's in the limitation of this feature it says
limitation of this feature it says fabric item takeover does not cover
fabric item takeover does not cover ownership takeover as a service
ownership takeover as a service principle so if you have a service
principle so if you have a service principle or a workspace identity those
principle or a workspace identity those do not work with this takeover
do not work with this takeover experience and there are some other
experience and there are some other things here that don't support changes
things here that don't support changes right mirrored Cosmos database mirrored
right mirrored Cosmos database mirrored SQL databases mirrored snowflake um
SQL databases mirrored snowflake um these are other features that are not
these are other features that are not quite there yet I would imagine
quite there yet I would imagine eventually they're going to close the
eventually they're going to close the gap on these things but yeah they have
gap on these things but yeah they have to this this was a big gap in my mind
to this this was a big gap in my mind like I can't tell you the number of
like I can't tell you the number of people that had pain around trying to
people that had pain around trying to move lake houses between users and we
move lake houses between users and we were just stuck and we're like the best
were just stuck and we're like the best thing to do is a help desk ticket that
thing to do is a help desk ticket that that's absurd like this is very basic
that's absurd like this is very basic function so it's it's good that they're
function so it's it's good that they're cleaning this up this is definitely a
cleaning this up this is definitely a pain point of my own I've gone through a
pain point of my own I've gone through a number of projects where this was quite
number of projects where this was quite painful I'm very happy to see this one
painful I'm very happy to see this one being resolved yeah and I think there's
being resolved yeah and I think there's um planned to have API support so you
um planned to have API support so you can actually just kind of bulk edit and
can actually just kind of bulk edit and take over from a user which will be
take over from a user which will be really nice right now everything's just
really nice right now everything's just the UI still I'll take it yeah I mean I
the UI still I'll take it yeah I mean I think the API stuff is going to be
think the API stuff is going to be really good and apis I feel like are
really good and apis I feel like are required for more of the continuous
required for more of the continuous integration continuous deployment the
integration continuous deployment the cicd type things where you're going to
cicd type things where you're going to need to programmatically like publish an
need to programmatically like publish an item let's say a lake house and you want
item let's say a lake house and you want to regularly publish who has access to
to regularly publish who has access to that item because when you think about
that item because when you think about like continuous integration continuous
like continuous integration continuous deployment a lot of people think it's
deployment a lot of people think it's deployment pipelines which it is it does
deployment pipelines which it is it does some of that but there's a lot of other
some of that but there's a lot of other things that you need in addition to that
things that you need in addition to that like who's the owner of this item uh
like who's the owner of this item uh who's the owner or members of the
who's the owner or members of the workspace did people accidentally add
workspace did people accidentally add themselves to those workspaces and when
themselves to those workspaces and when you go redeploy the items you want to
you go redeploy the items you want to again update the permissions to the

### Transcript (verbatim-clean)

**00:20:49 — Mike:** Again, update the permissions to the workspace so that’s always consistent, and you have the exact right access to the items in the workspace.

**00:20:55 — Mike:** There’s a lot more things that can go on when you deploy things, which the API will be, I think, very useful for assisting with that.

**00:21:03 — Mike:** Okay, that’s it for news. Anything else we should talk about?

**00:21:06 — Tommy:** I think that’s good from a news… and you got anything else?

**00:21:08 — Mike:** Nope, that’s good for me. That’s all the fun things that I think I want to talk about for now.

**00:21:16 — Mike:** All right, let’s jump into our main topic today. Tommy, give us an overview.

**00:21:18 — Mike:** We’re going to talk about Semantic Link Labs. Let’s get a little bit of an overview of what that tool is.

**00:21:25 — Tommy:** Yeah—so Semantic Link Labs is a Python package, part of SemPy in Fabric notebooks, that really allows you to do a ton of administration, governance, querying, and analytics on all of your Fabric items.

**00:21:43 — Tommy:** There’s a huge part of this when it comes to administration—getting groups—so all of your API calls that you normally do (for those old-school folks who had a PowerShell script from Rui Romano— that old package), all those calls are available in this Python package.

**00:22:00 — Tommy:** So I don’t have to worry about all those additional configurations, but it does a ton more.

**00:22:10 — Tommy:** Really, any artifact that I want to actually go through—like a semantic model—and I wanted to pull a table or a column, and make a DataFrame…

**00:22:20 — Tommy:** If I want to get deployment pipeline information, I can. It’s really the full stack in terms of helping me manage my Fabric tenant.

**00:22:31 — Tommy:** I feel like Semantic Link Labs requires a nice acronym.

**00:22:35 — Mike:** Acronym.

**00:22:35 — Tommy:** SL.

**00:22:38 — Mike:** SL.

**00:22:38 — Tommy:** S… Semantic Link Labs. Anyways—

**00:22:42 — Tommy:** That being said, I wanted you to check it out, so I’m going to put a link in the description here.

**00:22:48 — Tommy:** Semantic Link Labs is an extension of the SemPy library. The SemPy library is Semantic Link, which allows the Python notebook to connect—or attach—to semantic models.

**00:23:00 — Tommy:** Semantic Link Labs extends this. It goes way beyond just the semantic model.

**00:23:05 — Tommy:** It adds things like touching the Best Practice Analyzer, or automation around that. So BPA is a really great tool—that’s something that came from Tabular Editor—where you could make rules and test rules about your semantic model.

**00:23:23 — Tommy:** Right? “This column name is incorrect.” You know, “there’s a relationship in this model that seems inappropriate.” There’s a many-to-many relationship—right? It can detect those kinds of things.

**00:23:35 — Tommy:** It touches other things like the VertiPaq Analyzer—that’s now been integrated into the tool.

**00:23:39 — Tommy:** You can do other things—check things for Direct Lake; make sure your model is within the guardrails of what Direct Lake can do or not do.

**00:23:49 — Tommy:** Refresh; clear your cache; run DAX queries. You can manage query scaling out on your different models.

**00:23:57 — Tommy:** Visualize what happens during a refresh cycle. You could look at the measure dependency tree—so basically you could pick a measure in the model and see all the other measures that depend on that measure, inside a tree diagram.

**00:24:11 — Tommy:** It’s just amazing. It has a whole bunch of reporting things.

**00:24:14 — Tommy:** And this is one of the parts of why I think I’m so excited about Semantic Link Labs—because we’re talking about semantic model things, but then when we transition over to Semantic Link Labs, it can do things in the report.

**00:24:28 — Tommy:** The report has a best report analyzer—report best practice analyzer—and that runs also in Semantic Link Labs.

**00:24:36 — Tommy:** You can get report metadata. You can view broken reports. You can set a report theme. Migrate things about reports. Rebind reports.

**00:24:44 — Tommy:** This is stuff that doesn’t have any capability inside Tabular Editor—Tabular Editor has no capability for you to do these things out of the box.

**00:24:51 — Tommy:** And Michael Kovalsky is the one who’s kind of building this project.

**00:24:55 — Tommy:** It does a ton of other stuff around capacities, lakehouses, notebooks… it talks to all of the APIs for Fabric.

**00:25:02 — Tommy:** It talks to all the Power BI APIs, all the Fabric APIs, all the Azure APIs, and now Microsoft Graph APIs.

**00:25:09 — Tommy:** And it also now supports service principals for using it to talk to things.

**00:25:13 — Tommy:** I mean, this is like your Swiss Army knife. It does everything.

**00:25:18 — Mike:** Yeah. And I believe, Kurt—we talked about this before with… because he had an article about going through your entire report just using SemPy—like actually updating the theme, updating visual properties, or updating broken visuals.

**00:25:33 — Tommy:** Yeah—he has done demos of this.

**00:25:36 — Tommy:** And then Kurt kind of picked up on it and also wrote through and did some talking about that as well.

**00:25:42 — Tommy:** But I mean, when you think about Semantic Link Labs, you’re thinking only semantic model.

**00:25:46 — Tommy:** I want you to open your mind up and say: this has way more features than just the semantic model. It’s bigger than that.

**00:25:55 — Mike:** Yeah—no, exactly. I mean, one of the things too: they have Direct Lake migration for any of your models, which is absolutely insane.

**00:26:04 — Mike:** So a few other things—just to make sure that we’re kind of covering all the things that it can actually do—this is just this Python package.

**00:26:13 — Mike:** It can: report metadata (you said), the report analyzer, view the measure dependency tree, visualize a refresh, auto-generate descriptions or measures in bulk…

**00:26:23 — Mike:** Lakehouse—optimize lakehouse tables; vacuum lakehouse tables… migrate Power BI… capacity… so it’s absolutely insane in regards to all the scenarios here.

**00:26:40 — Mike:** It’s like you said: it’s much more than just your Power BI model that we’re used to being the only thing we can actually do something with.

**00:26:45 — Mike:** It was the XMLA endpoint back in the day, which was awesome, but this really opens up all the Fabric artifacts—and also what you can do.

**00:26:58 — Tommy:** So I was talking with Michael Kovalsky recently about this exact tool, and he’s explaining a little bit.

**00:27:06 — Tommy:** He was also talking about this in a speaking engagement he did over at the Fabric conference—I believe it was over in Stockholm.

**00:27:15 — Tommy:** He came over and talked about it.

**00:27:17 — Tommy:** But Michael Kovalsky is on the CAT team—he’s the one who kind of originated Semantic Link Labs.

**00:27:22 — Tommy:** And while he was on the CAT team—he deals directly with Customer Advisory Team—that’s what that is.

**00:27:26 — Tommy:** CAT team is the Customer Advisory Team, so he deals directly with big customers (or all customers).

**00:27:31 — Tommy:** Initially, he built a couple Python libraries, picked it up, thought, “Oh my gosh, this is easy,” learned Python.

**00:27:38 — Tommy:** He wasn’t really a Python writer to begin with—he knew programming, but it wasn’t really his forte.

**00:27:44 — Tommy:** And in about a year, he had started building all these helpful tools and producing a lot of things that made things easier.

**00:27:51 — Tommy:** Well, now his full-time job is basically maintaining, supporting, and building more features through Semantic Link Labs—because by him solving a problem with this tool, he’s able to solve not just one customer problem; he’s solving a multitude of customers’ problems all at the same time.

**00:28:11 — Tommy:** So one thing I’m really excited about is when you go to the GitHub repo and look at all the releases—the release list is incredible on this tool.

**00:28:20 — Tommy:** He is chunking out releases multiple times per month.

**00:28:28 — Tommy:** So in 2024, he had four updates—one per week in December. In November, he had three per week through December.

**00:28:36 — Tommy:** And he’s already had two in January and one in February. I mean, they’re making a ton of stuff in here that’s adding a bunch of really neat features.

**00:28:45 — Tommy:** So it’s almost hard to keep up with the tool because it’s moving so fast. It’s doing so many things. I really, really like it.

**00:28:52 — Mike:** And we should give a shout-out—real shout-out—to our friend Gilbert. That’s actually where the idea to really dive into this a little more came from.

**00:29:04 — Mike:** One of the cool scenarios that I saw was what Gilbert did: basically, he looked to automate updating incremental refresh policy.

**00:29:13 — Mike:** And he was able to do that with Semantic Link Labs, which is insane.

**00:29:20 — Tommy:** Yeah.

**00:29:20 — Mike:** But this is the kind of stuff we’re talking about—like, it’s heavy automation.

**00:29:27 — Mike:** This is for professional developers. These are for users who are very, very much in the weeds and the code of things.

**00:29:41 — Mike:** So let me just give you my perspective on this one. There’s a couple things here.

**00:29:43 — Mike:** The combination of Semantic Link Labs, in concert with Tabular Editor, in concert with DAX Query View—those three tools (for lack of a better term)…

**00:29:58 — Mike:** Those three tools replace almost every single other external tool that’s out there that’s talking about the semantic models.

**00:30:06 — Mike:** I think these tools can do everything else—everything other tools can do—and more.

**00:30:11 — Mike:** And the bonus here is: as I compare this to Tabular Editor, I don’t have to learn C# just to write a script or an automation. I can just write it in Python—which, in my opinion, is much easier to write.

**00:30:25 — Tommy:** So here’s a question—because you actually brought up something very intriguing.

**00:30:28 — Tommy:** If you think about all of the current API or developer ways to modify/read your Fabric tenant—you talk about the XMLA endpoint, Power BI REST APIs, and now there’s really SemPy Labs.

**00:30:48 — Tommy:** If you are the data czar of an organization, do you care how people are actually…

**00:30:52 — Tommy:** Let’s take it first with the heavy developer—the people who actually do need to automate their Power BI items or Fabric items using some custom endpoint.

**00:31:10 — Tommy:** Would you push everyone to only use Semantic Link Labs, or…

**[00:31:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1875s)**

link Labs or Senpai compared to API xmla endpoint Powershell I think those are the really three ways that you can actually in a sense connect or talk to powerbi well let's also talk about other external tools right there's D Studio yeah also tabular editor right so let's look at all the tools and say okay which ones provide the highest level of automation right Tabler editor and semantic link Labs provide high levels of automation

**[00:31:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1905s)**

I have really struggled just me personally I've tried to get Tabler Editor to to run in some sort of deployment pipeline where the deployment pipeline runs something and Tabler editor like recompiles the code or deploys something it's difficult and I couldn't get it to work correctly and the documentation is okay but tabular editor wasn't really the right tool like a CLI command line interface right I want a CLI to be able to say look yeah this is where my model lives

**[00:32:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1935s)**

I want to package my model and deploy it to this workspace well it doesn't it it works but you have to be like really in the weeds of things it's just more difficult I'd rather I'd rather write a python notebook and use that to make a sequence of cells that does what I want so if I think about like so that's one difference there right I've already ran into other problems with other tools

**[00:32:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1965s)**

that is difficult to write code for or it's different difficult to write you know command line interface type actions right the centic L Labs makes this much easier also I'm writing just pure Python and the functions there are way more functions in centic link Labs like refresh your semantic model optimize things get this measure run this SQL query I mean it just there's just a lot of like nice features around it

**[00:33:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1995s)**

the functions are easy to understand it's easy to run those it just makes a lot more sense to me so now let's compare the pricing of all these tools right so Tabo editor if you're going to go professional with this one it's going to cost you a little bit of money to get the tool it is a premium level tool it is for the developer when you need to start manipulating like partitions and going deep on the tables and the models

**[00:33:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2025s)**

get really large you're not going to want to edit a model like using desktop you're just not going to want to there's thing it's going to you're going to outgrow desktop very quickly now when I have semantic link so now that I have timle editor and now that I have Dax query viw and semantic link Labs these are all free tools doesn't cost me a dime now then I might be writing a bit more code I might have to write a bit more you know cells inside my python notebook in some inic link Labs

**[00:34:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2055s)**

but I'm willing to learn that in exchange for free right so like it may not be like the most optimized tool out there but there's I don't have to learn c i it's a free tool and I can do way more things not only just at the semantic model level but also at the report level to me I'm sold and when I was watching Michael kovalski talk about this he did a demo where he went to I think it was I don't know if it was a lakeh house I can't remember exactly what he was doing

**[00:34:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2085s)**

he went somewhere to a lake house he read the metadata from the lake house he then created his own tables I think it was his best business sorry let me let me step back here yeah he was using best business practice analyzer BPA he went to a workspace he said this is my workspace run the BPA tool on every model in a workspace he ran every model he got all the rules back he wrote the tables to a lakeh house once the tables were written to the lake house he made a semantic model programmatically albeit it was he made it from scratch using code

**[00:35:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2115s)**

and then he made the report programmatically he connected the semantic model to the tables he connected the report to the semantic model and everything just worked and he had a from a single notebook he had run all the tools for best practice analyzer made the semantic model and made the report all within one a couple lines of code that that's an automation like that can't be done in any other tool and I looked at that and I said this single tool cemented link Labs just killed every single external tool that's out there de with semantic models and even some lightweight report editing stuff as well I mean this is incredible it does so many things yeah

**[00:35:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2145s)**

my Powershell scripts had their day in the sun back in the day it could do some crazy things but it's it's interesting with the cementing link Labs the official documentation because is obviously coming from cementing link which is kind of the actual package and Microsoft actually developed then the the official documentation actually says that the cementing link is a feature to establish connection between models and data science yes right so and it's funny that it was only really kind of initially built for just the data science side because they're thinking hey python notebooks Jupiter notebooks that's data science that's GNA really just be that data science spere cool awesome so that's just that's just a semantic model I mean that's just semantic that's Senpai that's all that that is the labs part of this makes it really rich

**[00:36:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2175s)**

because now this is including like a whole bunch of other things at like it has a ton of administration level features in it that's awesome like it's just absolutely incredible and that for me I'm like oh yeah so again if if you're a new user you're thinking like what should I be learning now you guys are talking about timle view you're talking about Dax Dax query view you're talking now about semantic link Labs dude if you have Fabric in your tenant 100% you should be learning semantic link labs immediately it will make your life way easier now it's very code Centric it's very detailed but if you want to be work smarter not harder it this is the tool for you

**[00:36:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2205s)**

so man this interesting because yeah I think we still know and I'm still on the the side that most data professionals or powerbi professionals probably hav't by now maybe have you know like open a Jupiter notebook or done a notebook but that's probably not been their Forte right so if I'm if there if we're introducing fabric to my organization let's say yep and up until this point the business intelligence team has been powerbi all powerbi okay H much more likely to been doing like to take ruy Romano's Power Cell script to actually do some automation to get workspace modit during an activity than I ever were was to touch python or spark

**[00:37:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2235s)**

so if you are with that kind of in mind again data Engineers people in data science definitely obviously this is like well at home this is nothing new but a lot of if you're a data scientist You're Gonna Know Pyon like that's gonna be a given if you're a data engineer you may or may not know python you probably will know like I think you would know more of like a sequel right you'd be more of like I think of dat a little bit of DBA but a lot more data engineering there's other tools that are a lot more graphical interface so you you don't have to actually know actual code you could use things like talend or other data engineering type programs that do all the work for you but I'd argue like python is becoming a very common language any of the new computer science Majors that I'm talking to nowadays they all know it they all know python coming out they're not saying you have to buer computer science major to do this kind of stuff but like it's taught everywhere it's G be it's going to be like the language that everyone knows

**[00:37:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2265s)**

so let me ask you who are you teaching then if you had a team of just powerbi right because we're still in this migration period we're still introducing fabric to an organization that might have previously be just powerbi if I'm listening to this podcast right now and I still don't have fabric but we're we're potentially going to introduce it at my organization and I've been the powerbi pro and Dax and power query yada yada yada are you how long is it going to take for you to expect someone in that space that Persona to start using spenting Li Labs

**[00:38:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2295s)**

say that again when do when do you want to you're asking like when's the right time to use yeah so if I'm at an organization that we're maybe about to introduce fabric don't have it I'm listening to this podcast from the day that my organization opens up the fabric to the organization how long or what would you expect that person to begin to start using L Labs yeah this is a good question so let's talk about the maturity or of your organization right so just because you're turning on fabric doesn't necessarily mean your organization is immature in powerbi right if your team is larger if you have rigor around using best practice analyzer on your semantic models or you're looking to tune or optimize your models right that that that right there already tells me that your your company's maturing right

**[00:38:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2325s)**

when you're getting to the place where you're optimizing models and making them more performant to to make sure that they're not bigger what happen how how the progression typically goes here is users start with powerbi they build models at the pro level their models get larger they absorb more data at some point they outgrow the pro licensing and they move into potentially premium per user licensing which gives you much larger semantic models at some point you run into problems the model runs slow the visuals aren't working right and you need to start analyzing what's going on in the model your model design now needs to get better so I mean this is my progression too right I started making crappy models at the beginning just because it it worked and I okay it works let's move on I got more mature and then as I developed better models I got better at making those models more efficient okay so where does centic link Labs fit here now right if your company is in a place where your organization is mature around optimizing tuning building best practices in your models in your organization you may want to regularly review those things if you have a larger team building models there's going to be people regularly reviewing or should be



## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

# Transcript (clean)

Video: https://www.youtube.com/watch?v=bOVBPAk-d24

- [00:00:32](https://www.youtube.com/watch?v=bOVBPAk-d24&t=32s) **Tommy:** good morning and welcome back to the explicit measures podcast with Tommy and Mike good morning everyone welcome
- [00:00:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=37s) **Mike:** good morning everyone welcome back good morning Mike how was your weekend it went very quickly been very busy with software and Building Things and lots of projects going on but I took a little bit of time to relax I have for whatever reason reinvigorated a nice good old cold or flu or something on me oh no I am just feeling congested so I did a lot of lay and low a lot of we are doing a larger kitchen remodel in our kitchen doing some refacing we're leaving the cabinets alone but we're doing new countertops
- [00:01:07](https://www.youtube.com/watch?v=bOVBPAk-d24&t=67s) **Mike:** alone but we're doing new countertops some big things that my wife has won and so it's been very exciting to see that come along but needless to say we've been eating out a lot because we don't have a kitchen there's no sink it's it's out of commission right now for a little bit dude is it a we're doing a full revamp or we're just doing like cabinets like a little little I gu you you would call it like refacing the cabinets so the cabinets are getting refaced so they're and all new doors and handles we are adding some pull out
- [00:01:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=97s) **Mike:** handles we are adding some pull out drawers inside the cabinets and then new countertops so we're not like going down to like studs we're not going down to like like drywall we're just using what's already there the the structure is not changing there's nothing we're not adding new cabinets we're not moving things around it's it's all the same stuff so okay needless to say you can't use it well it's been nice because while we've been having worked done on the cabinets we've been able to use the kitchen but now we just we're at the very end and at the very end they have to take out the plumbing they
- [00:02:08](https://www.youtube.com/watch?v=bOVBPAk-d24&t=128s) **Mike:** they have to take out the plumbing they put new countertops in and that's when you lose like the sink so hopefully today we get the use of our sink back and we can start reusing her kitchen we got now the hard decision what backsplash do you want oh you should call my wife she was in a previous life a interior designer oh excellent what she and she married me the non interor designer no no colors are are not a thing did that like I
- [00:02:39](https://www.youtube.com/watch?v=bOVBPAk-d24&t=159s) **Mike:** not a thing did that like I think a lot of people depending on the colors that you learned those are the colors that you actually see so my wife tested me out on this and she's like what color is it I'm like well you didn't learn mauve I know the Rainbo and I know that variations teal yes slightly more teal yeah but very teal yeah I think my wife has 50 colors she knows wow and so like I was looking at something oh
- [00:03:09](https://www.youtube.com/watch?v=bOVBPAk-d24&t=189s) **Mike:** so like I was looking at something oh it's blue she like no it's acrylic da d d du yeah like I couldn't see it but I also never learn what th those colors are so it's amazing at least for an interior designer interesting I I don't know how to I don't I'm not sure if I would be able to pick out or describe multiple colors for people I could probably tell you like what some general colors are to your point Tommy but I couldn't be all all these nuanced colors like green you
- [00:03:40](https://www.youtube.com/watch?v=bOVBPAk-d24&t=220s) **Mike:** know seafoam green all these other like I wouldn't know I would not know these things I would just yeah it's I'm very simple in that regard it's interesting I'm not good at yeah I'm not at making designs but I'm really good at like looking at other things and being able to say oh I like that oh this is a good design so I'll I'll tie this back here to powerbi a little bit when I look at colors or color pettes I'm probably not the best on knowing how to create something from scratch but I can do a
- [00:04:11](https://www.youtube.com/watch?v=bOVBPAk-d24&t=251s) **Mike:** something from scratch but I can do a really dang good job of going into figma and finding a different report that I like and copying it or bringing down the colors or like building a style that looks similar to that object and that's what a lot of what I do when I build reports I'll go find an image a picture or someone's mockup of a dashboard and I'll say oh that looks interesting and then I'll go Riff on that design make it my own and then build a lot of extra features and pages and backgrounds for it so a lot of times I'll do that I'll take inspiration from other other
- [00:04:42](https://www.youtube.com/watch?v=bOVBPAk-d24&t=282s) **Mike:** I'll take inspiration from other other people's works I think it's like the phrase phrase great artists no what is it great artists borrow or something like that or steal I don't remember that phrase is great good artist borrow great artist steal or copy that's yeah I think Ste job said it so can you articulate oh great arst steel is I think is the the phrase well at least that's what Chad gpg
- [00:05:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=314s) **Mike:** that's what Chad gpg says can you articulate when you see something like what you like about it or is it more the I just like that where even when it comes to design or your kitchen oh good question yeah I would I'd say I can probably pick up on pieces of it I can articulate what pieces of the design that I really like and that's usually what I spend my time on mimicking I'll give you just a really weird I maybe history I guess previously I was well not previously when we first got married we didn't have much monies and so year we wanted to do
- [00:05:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=345s) **Mike:** much monies and so year we wanted to do Christmas cards and so my wife would go online and she'd see all these Christmas cards and she like oh that's an interesting Christmas card and she would show me the picture of the Christmas card and I took it as a challenge to go into like a computer program and like mimic that card like look at the details figure out how to make it replicate it and I would replicate these Christmas cards by making my own design and I would make it entirely out of like illustrator and then we'd go to the store and we'd print off a bunch of pictures or or im images off of
- [00:06:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=375s) **Mike:** pictures or or im images off of like Walmart or whatever and then we would set out a bunch of photos basically but it was of an image that I had designed now granted in the early days I had nothing but time it was just time computer building so I had there was not as many kids I could spend you was not as many kids I could spend four hours just trying to figure know four hours just trying to figure out how to get the design of the thing to work I'm Googling things I'm I'm learning about illustrator and Adobe products and maybe I'm using some photoshop in there a little bit too so I'm doing all this work with this program just to make these good-looking images I think that helped a lot because
- [00:06:47](https://www.youtube.com/watch?v=bOVBPAk-d24&t=407s) **Mike:** images I think that helped a lot because now I can look at other images and know how they're built it's like a skill it's a little bit it's something you have to like learn how to do and this is I think one of the things that is difficult for people in powerbi is we're really good at data modeling and bringing together the data structure I think the majority of the people building reports don't have the eye or the visual or the aesthetic side of things and that's where people need a little bit of help like and and you could could probably you could easily spend as much
- [00:07:17](https://www.youtube.com/watch?v=bOVBPAk-d24&t=437s) **Mike:** probably you could easily spend as much time doing the data modeling double that time and you could do all the report visual styling right you could e so where do you cut Corners we've had this discussion a long time ago of like what what's the right balance of that inside you're reporting anyways no no I I'm honestly the same thing for me the design side took a long time for me to actually so to speak understand what I was trying to do or actually put a design together that someone make sense because I was analytical I didn't know what I was supposed to build I just had
- [00:07:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=468s) **Mike:** what I was supposed to build I just had things that I thought looked good but I think it books help the biggest thing that actually helped me was asking someone else who had no stake in those in the data like a friend or spouse like hey what is this telling you yeah so I like it awesome let's Jo let's before we jump into our news topic today we just start a little rambling here at the beginning so we'll we'll stop rambling here for a moment today we're going to talk about semantic link
- [00:08:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=500s) **Mike:** we're going to talk about semantic link Labs what updates have recently been coming out this tool Is Amazing by the way this is incredible tool it does so many different things and then what are different scenarios or patterns on when you use semantic link labs to work inside your tenant now to be very clear semantic link Labs is a python Library based on another Library called Senpai which I had to really think about this was so it's Senpai because semantic link semantic models right semantic models is the first part
- [00:08:50](https://www.youtube.com/watch?v=bOVBPAk-d24&t=530s) **Mike:** right semantic models is the first part of it and then py as python so it's like spark Pi spark right so it be Pi spark or or the other languages spark SQL right so those are the things that are relating to that Library the library semantic link or semantic yeah semantic link is directly built from microsofts maintained by them and allows you direct access to the semantic models in your tenant but does a lot
- [00:09:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=560s) **Mike:** in your tenant but does a lot more of that semantic link Labs extends this heavily and so we're going to unpack a little bit more of semetic Link Labs where to use it where we're finding with it right now and jumping in there that'll be our for today all right Tommy give us some news so there's a few
- [00:09:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=577s) **Tommy:** give us some news so there's a few things with that actually went under the radar that and because we didn't talk about it didn't mean no one read it but I think a few articles if we didn't say it then not important not don't talk about in the podcast did the feature actually get released that's that's what we're talking talking about I'm actually surprised we haven't talked about this so the first one I want to bring up is the template dashboard for workspace modering which I thought was huh maybe I don't know why
- [00:10:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=610s) **Tommy:** thought was huh maybe I don't know why the immediate interest wasn't there but these real time dashboards work with your workspace monitor that you're used to and they're actually Community built they're open sourced and they can download through GitHub and really what they help

through GitHub and really what they help you allow you to do is go through your
you allow you to do is go through your environment
environment um and like basically the templates that
um and like basically the templates that we're used to when it comes to
we're used to when it comes to monitoring that Microsoft does that we'd
monitoring that Microsoft does that we'd have to then like live connect if we
have to then like live connect if we wanted to modify this um they're all
wanted to modify this um they're all this community build and you can edit
this community build and you can edit the desktop version and have it to
the desktop version and have it to your to your customization which is
your to your customization which is really neat so so this is this is a tool
really neat so so this is this is a tool that Microsoft has built to enable users
that Microsoft has built to enable users to get better analytics about their
to get better analytics about their workspaces and it's using in a
workspaces and it's using in a monitoring event house so this is
monitoring event house so this is streaming analytics directly into a
streaming analytics directly into a collection an area or you know store
collection an area or you know store basically and then from that store
basically and then from that store they're giving you some reporting kind
they're giving you some reporting kind of off the shelf out of the box tooling
of off the shelf out of the box tooling inside their fabric toolbox on GitHub so
inside their fabric toolbox on GitHub so fabric toolbox is the GitHub repo and
fabric toolbox is the GitHub repo and I'll make sure I put both of these links
I'll make sure I put both of these links down here below um in the in the chat
down here below um in the in the chat windows for everyone to kind of see how
windows for everyone to kind of see how that works let me uh get those over here
that works let me uh get those over here to the chat window if you want go check
to the chat window if you want go check those out we'd highly recommend it
those out we'd highly recommend it really good tools um yeah be curious if
really good tools um yeah be curious if anyone else is using these or seeing
anyone else is using these or seeing them one thing I will caution you here I
them one thing I will caution you here I believe my understanding this I haven't
believe my understanding this I haven't played with it so I got to be I've read
played with it so I got to be I've read the documentation on it but I haven't
the documentation on it but I haven't really gone into turning it on yet my
really gone into turning it on yet my understanding is this is the same thing
understanding is this is the same thing as turning on like log analytics for
as turning on like log analytics for your workspace so this could get very
your workspace so this could get very noisy or there could be a lot of of
noisy or there could be a lot of of large volume of data coming over to your
large volume of data coming over to your fabric workspace anytime you send more
fabric workspace anytime you send more things like this or turn on any kind of
things like this or turn on any kind of real time Eventing you're immediately
real time Eventing you're immediately going to consume more capacity workspace
going to consume more capacity workspace so just my big caution with this is you
so just my big caution with this is you can turn this on it's a good solution it
can turn this on it's a good solution it is
is streaming however just be cautious
streaming however just be cautious because when you turn it on it will send
because when you turn it on it will send a lot of data potentially every
a lot of data potentially every interaction every query all the details
interaction every query all the details from the workspace that's happening will
from the workspace that's happening will be sent directly to the stream good but
be sent directly to the stream good but I would probably recommend don't turn it
I would probably recommend don't turn it on and forget it I would definitely
on and forget it I would definitely recommend turn it on and just watch it
recommend turn it on and just watch it make sure you turn it off um because it
make sure you turn it off um because it could potentially add a lot of costs or
could potentially add a lot of costs or a a lot of additional compute units to
a a lot of additional compute units to your your skew so just be aware of that
your your skew so just be aware of that as as you use the
as as you use the tool so just a point out there that's
tool so just a point out there that's probably a really good thing because uh
probably a really good thing because uh people might not know how much data is
people might not know how much data is actually going in and yeah I thought it
actually going in and yeah I thought it would be through the normal monitoring
would be through the normal monitoring that you get with um the admin but no
that you get with um the admin but no interesting all it's a different
interesting all it's a different solution so they're trying to be more
solution so they're trying to be more transparent uh I was talking with um oh
transparent uh I was talking with um oh shoot I forgot his name uh he works um
shoot I forgot his name uh he works um for Microsoft and he just did a you he
for Microsoft and he just did a you he just did our Milwaukee User Group area
just did our Milwaukee User Group area recently um the name will come to me
recently um the name will come to me like literally halfway through the
like literally halfway through the podcast but anyways uh we had the the PM
podcast but anyways uh we had the the PM speaking to all admin monitoring and
speaking to all admin monitoring and going through the details there Tommy he
going through the details there Tommy he spoke at your user group too oh um
spoke at your user group too oh um Gil revie no after Gil that was the same
Gil revie no after Gil that was the same session it was after Gil was doing his
session it was after Gil was doing his oh our main
oh our main speaker forgot his name Milwaukee I I
speaker forgot his name Milwaukee I I remember used to work in Milwaukee tool
remember used to work in Milwaukee tool sounds like I don't even know anyways
sounds like I don't even know anyways we'll figure it out later I'll go get
we'll figure it out later I'll go get the name Tommy will go look up his um
the name Tommy will go look up his um his user group session and he'll go get
his user group session and he'll go get the name anyways um Tim Bendis there it
the name anyways um Tim Bendis there it is someone in the
is someone in the chat Tim Bendis is um Microsoft employee
chat Tim Bendis is um Microsoft employee and went through all the details of the
and went through all the details of the monitoring app there's a lot of things
monitoring app there's a lot of things coming and Microsoft is trying to make
coming and Microsoft is trying to make the the entire modeling experience
the the entire modeling experience easier to understand thanks Dan while I
easier to understand thanks Dan while I stumbled around there for a bit
stumbled around there for a bit appreciate it all right let's move on to
appreciate it all right let's move on to the next one what's our next uh news
the next one what's our next uh news item Tommy uh another just kind of
item Tommy uh another just kind of announcement I guess there's really no
announcement I guess there's really no feature coming out but uh it came out on
feature coming out but uh it came out on January 29th the private preview private
January 29th the private preview private preview of everyone can't get to it
preview of everyone can't get to it quite yet yeah of the migration
quite yet yeah of the migration assistant for fabric data
assistant for fabric data warehouse uh so basically ancy and
warehouse uh so basically ancy and Microsoft were letting know that there
Microsoft were letting know that there would be a migration assistant last year
would be a migration assistant last year uh they're currently running a priview
uh they're currently running a priview uh assistant or a private preview with
uh assistant or a private preview with the migration assistant uh they're
the migration assistant uh they're looking for
looking for participants um and they're look you can
participants um and they're look you can complete a form and you can actually uh
complete a form and you can actually uh get access to the Mig migration
get access to the Mig migration assistant and again that migration
assistant and again that migration assistant is help accelerate
assistant is help accelerate your SQL Server syap other warehouses uh
your SQL Server syap other warehouses uh to fabric data
to fabric data warehouse and I think the idea here is
warehouse and I think the idea here is they're they're trying
they're they're trying so the reason they go to private preview
so the reason they go to private preview is they think they've got the tool or
is they think they've got the tool or the migration solution complete but
the migration solution complete but they're testing out with the first
they're testing out with the first couple customers so while we can't
couple customers so while we can't necessarily always access these private
necessarily always access these private previews just be mindful of that means
previews just be mindful of that means usually behind the private preview is
usually behind the private preview is actually will release something fairly
actually will release something fairly shortly that means we're we're at the
shortly that means we're we're at the very last stages of bug fixing feature
very last stages of bug fixing feature refinement and then there will be a tool
refinement and then there will be a tool or a repo or GitHub or something that
or a repo or GitHub or something that will tell you how to leverage this
will tell you how to leverage this migration so I guess the point here is
migration so I guess the point here is if you want to migrate SQL Server SQL
if you want to migrate SQL Server SQL dedicated pools or other warehouses to a
dedicated pools or other warehouses to a fabric data warehouse you should now be
fabric data warehouse you should now be able to soon go through a migration
able to soon go through a migration process for that so anyways there is a
process for that so anyways there is a form on this page so if you would like
form on this page so if you would like to participate in this one you can apply
to participate in this one you can apply to be part of the private preview um
to be part of the private preview um it's a form on the page that I just sent
it's a form on the page that I just sent out in the chat window so check that out
out in the chat window so check that out um you can go see the form there if you
um you can go see the form there if you would like to try and get involved um
would like to try and get involved um there I'll actually just see if I can
there I'll actually just see if I can link to the form
link to the form directly in case you want to go try this
directly in case you want to go try this out anything else Tommy one last thing
out anything else Tommy one last thing that I'm surprised hasn't been um one of
that I'm surprised hasn't been um one of our major topics January 28th fabric
our major topics January 28th fabric update this is big I think this is the
update this is big I think this is the biggest one of the of the newest items
biggest one of the of the newest items here yeah ownership takeover for fabric
here yeah ownership takeover for fabric items and what this feature is is really
items and what this feature is is really uh allows fabric users with the right
uh allows fabric users with the right permissions to take ownership at an
permissions to take ownership at an individual fabric item um and the since
individual fabric item um and the since if you remember the same experience in
if you remember the same experience in data flows gen one because you couldn't
data flows gen one because you couldn't collaborate the only way you had
collaborate the only way you had actually take over to edit um and so you
actually take over to edit um and so you can actually take over as a user in
can actually take over as a user in individual fabric item um and then the
individual fabric item um and then the users so basically some of the
users so basically some of the limitations there are does not support
limitations there are does not support mirrored database items but this is
mirrored database items but this is pretty cool because we've talked about
pretty cool because we've talked about ownership and governance and security
ownership and governance and security here in a workspace yes
here in a workspace yes and I'm really excited to see this
and I'm really excited to see this because I hope what I I first I hope
because I hope what I I first I hope it's not the same experience as data
it's not the same experience as data flows gen one takeover which was just
flows gen one takeover which was just can I edit but at the same time this is
can I edit but at the same time this is a big deal because we want to have some
a big deal because we want to have some some ownership of more than just a
some ownership of more than just a folder more than just a workspace on
folder more than just a workspace on particular items now I don't think this
particular items now I don't think this umed modifies your ability to edit if
umed modifies your ability to edit if you already could edit it like let's say
you already could edit it like let's say a particular item let's say if I'm in a
a particular item let's say if I'm in a Lakehouse and I had permissions to write
Lakehouse and I had permissions to write nothing
nothing changes I'm just the owner of that set
changes I'm just the owner of that set artifact
artifact well I mean this is the issue around
well I mean this is the issue around like if someone leaves your organization
like if someone leaves your organization and they own something like a Lakehouse
and they own something like a Lakehouse so this is solving a direct problem
so this is solving a direct problem where you had a lake house previously if
where you had a lake house previously if I created it and moved on or let the
I created it and moved on or let the company or
company or whatever that item would be linked to me
whatever that item would be linked to me it would be have the owner would be my
it would be have the owner would be my name and in order to switch that
name and in order to switch that ownership from me to Tommy it was
ownership from me to Tommy it was requiring a help desk ticket you needed
requiring a help desk ticket you needed a help desk ticket to physically change
a help desk ticket to physically change the item The Lakehouse from my name to
the item The Lakehouse from my name to Tommy's name this is like basic
Tommy's name this is like basic featuring right this is basic features
featuring right this is basic features you can't you can't let people create
you can't you can't let people create things and not be able to switch
things and not be able to switch ownership of them especially if if all
ownership of them especially if if all the items in the workspace are attached
the items in the workspace are attached to people one of the things I'd like to
to people one of the things I'd like to see here with this one I don't know if
see here with this one I don't know if they've talked about in this one
they've talked about in this one specifically um but I think they're not
specifically um but I think they're not talking about service principles or
talking about service principles or workspace principles yet no right so the
workspace principles yet no right so the one thing here to consider it's in the
one thing here to consider it's in the limitation of this feature it says
limitation of this feature it says fabric item takeover does not cover
fabric item takeover does not cover ownership takeover as a service
ownership takeover as a service principle so if you have a service
principle so if you have a service principle or a workspace identity those
principle or a workspace identity those do not work with this takeover
do not work with this takeover experience and there are some other
experience and there are some other things here that don't support changes
things here that don't support changes right mirrored Cosmos database mirrored
right mirrored Cosmos database mirrored SQL databases mirrored snowflake um
SQL databases mirrored snowflake um these are other features that are not
these are other features that are not quite there yet I would imagine
quite there yet I would imagine eventually they're going to close the
eventually they're going to close the gap on these things but yeah they have
gap on these things but yeah they have to this this was a big gap in my mind
to this this was a big gap in my mind like I can't tell you the number of
like I can't tell you the number of people that had pain around trying to
people that had pain around trying to move lake houses between users and we
move lake houses between users and we were just stuck and we're like the best
were just stuck and we're like the best thing to do is a help desk ticket that
thing to do is a help desk ticket that that's absurd like this is very basic
that's absurd like this is very basic function so it's it's good that they're
function so it's it's good that they're cleaning this up this is definitely a
cleaning this up this is definitely a pain point of my own I've gone through a
pain point of my own I've gone through a number of projects where this was quite
number of projects where this was quite painful I'm very happy to see this one
painful I'm very happy to see this one being resolved yeah and I think there's
being resolved yeah and I think there's um planned to have API support so you
um planned to have API support so you can actually just kind of bulk edit and
can actually just kind of bulk edit and take over from a user which will be
take over from a user which will be really nice right now everything's just
really nice right now everything's just the UI still I'll take it yeah I mean I
the UI still I'll take it yeah I mean I think the API stuff is going to be
think the API stuff is going to be really good and apis I feel like are
really good and apis I feel like are required for more of the continuous
required for more of the continuous integration continuous deployment the
integration continuous deployment the cicd type things where you're going to
cicd type things where you're going to need to programmatically like publish an
need to programmatically like publish an item let's say a lake house and you want
item let's say a lake house and you want to regularly publish who has access to
to regularly publish who has access to that item because when you think about
that item because when you think about like continuous integration continuous
like continuous integration continuous deployment a lot of people think it's
deployment a lot of people think it's deployment pipelines which it is it does
deployment pipelines which it is it does some of that but there's a lot of other
some of that but there's a lot of other things that you need in addition to that
things that you need in addition to that like who's the owner of this item uh
like who's the owner of this item uh who's the owner or members of the
who's the owner or members of the workspace did people accidentally add
workspace did people accidentally add themselves to those workspaces and when
themselves to those workspaces and when you go redeploy the items you want to
you go redeploy the items you want to again update the permissions to the

### Transcript (verbatim-clean)

**00:20:49 — Mike:** Again, update the permissions to the workspace so that’s always consistent, and you have the exact right access to the items in the workspace.

**00:20:55 — Mike:** There’s a lot more things that can go on when you deploy things, which the API will be, I think, very useful for assisting with that.

**00:21:03 — Mike:** Okay, that’s it for news. Anything else we should talk about?

**00:21:06 — Tommy:** I think that’s good from a news… and you got anything else?

**00:21:08 — Mike:** Nope, that’s good for me. That’s all the fun things that I think I want to talk about for now.

**00:21:16 — Mike:** All right, let’s jump into our main topic today. Tommy, give us an overview.

**00:21:18 — Mike:** We’re going to talk about Semantic Link Labs. Let’s get a little bit of an overview of what that tool is.

**00:21:25 — Tommy:** Yeah—so Semantic Link Labs is a Python package, part of SemPy in Fabric notebooks, that really allows you to do a ton of administration, governance, querying, and analytics on all of your Fabric items.

**00:21:43 — Tommy:** There’s a huge part of this when it comes to administration—getting groups—so all of your API calls that you normally do (for those old-school folks who had a PowerShell script from Rui Romano— that old package), all those calls are available in this Python package.

**00:22:00 — Tommy:** So I don’t have to worry about all those additional configurations, but it does a ton more.

**00:22:10 — Tommy:** Really, any artifact that I want to actually go through—like a semantic model—and I wanted to pull a table or a column, and make a DataFrame…

**00:22:20 — Tommy:** If I want to get deployment pipeline information, I can. It’s really the full stack in terms of helping me manage my Fabric tenant.

**00:22:31 — Tommy:** I feel like Semantic Link Labs requires a nice acronym.

**00:22:35 — Mike:** Acronym.

**00:22:35 — Tommy:** SL.

**00:22:38 — Mike:** SL.

**00:22:38 — Tommy:** S… Semantic Link Labs. Anyways—

**00:22:42 — Tommy:** That being said, I wanted you to check it out, so I’m going to put a link in the description here.

**00:22:48 — Tommy:** Semantic Link Labs is an extension of the SemPy library. The SemPy library is Semantic Link, which allows the Python notebook to connect—or attach—to semantic models.

**00:23:00 — Tommy:** Semantic Link Labs extends this. It goes way beyond just the semantic model.

**00:23:05 — Tommy:** It adds things like touching the Best Practice Analyzer, or automation around that. So BPA is a really great tool—that’s something that came from Tabular Editor—where you could make rules and test rules about your semantic model.

**00:23:23 — Tommy:** Right? “This column name is incorrect.” You know, “there’s a relationship in this model that seems inappropriate.” There’s a many-to-many relationship—right? It can detect those kinds of things.

**00:23:35 — Tommy:** It touches other things like the VertiPaq Analyzer—that’s now been integrated into the tool.

**00:23:39 — Tommy:** You can do other things—check things for Direct Lake; make sure your model is within the guardrails of what Direct Lake can do or not do.

**00:23:49 — Tommy:** Refresh; clear your cache; run DAX queries. You can manage query scaling out on your different models.

**00:23:57 — Tommy:** Visualize what happens during a refresh cycle. You could look at the measure dependency tree—so basically you could pick a measure in the model and see all the other measures that depend on that measure, inside a tree diagram.

**00:24:11 — Tommy:** It’s just amazing. It has a whole bunch of reporting things.

**00:24:14 — Tommy:** And this is one of the parts of why I think I’m so excited about Semantic Link Labs—because we’re talking about semantic model things, but then when we transition over to Semantic Link Labs, it can do things in the report.

**00:24:28 — Tommy:** The report has a best report analyzer—report best practice analyzer—and that runs also in Semantic Link Labs.

**00:24:36 — Tommy:** You can get report metadata. You can view broken reports. You can set a report theme. Migrate things about reports. Rebind reports.

**00:24:44 — Tommy:** This is stuff that doesn’t have any capability inside Tabular Editor—Tabular Editor has no capability for you to do these things out of the box.

**00:24:51 — Tommy:** And Michael Kovalsky is the one who’s kind of building this project.

**00:24:55 — Tommy:** It does a ton of other stuff around capacities, lakehouses, notebooks… it talks to all of the APIs for Fabric.

**00:25:02 — Tommy:** It talks to all the Power BI APIs, all the Fabric APIs, all the Azure APIs, and now Microsoft Graph APIs.

**00:25:09 — Tommy:** And it also now supports service principals for using it to talk to things.

**00:25:13 — Tommy:** I mean, this is like your Swiss Army knife. It does everything.

**00:25:18 — Mike:** Yeah. And I believe, Kurt—we talked about this before with… because he had an article about going through your entire report just using SemPy—like actually updating the theme, updating visual properties, or updating broken visuals.

**00:25:33 — Tommy:** Yeah—he has done demos of this.

**00:25:36 — Tommy:** And then Kurt kind of picked up on it and also wrote through and did some talking about that as well.

**00:25:42 — Tommy:** But I mean, when you think about Semantic Link Labs, you’re thinking only semantic model.

**00:25:46 — Tommy:** I want you to open your mind up and say: this has way more features than just the semantic model. It’s bigger than that.

**00:25:55 — Mike:** Yeah—no, exactly. I mean, one of the things too: they have Direct Lake migration for any of your models, which is absolutely insane.

**00:26:04 — Mike:** So a few other things—just to make sure that we’re kind of covering all the things that it can actually do—this is just this Python package.

**00:26:13 — Mike:** It can: report metadata (you said), the report analyzer, view the measure dependency tree, visualize a refresh, auto-generate descriptions or measures in bulk…

**00:26:23 — Mike:** Lakehouse—optimize lakehouse tables; vacuum lakehouse tables… migrate Power BI… capacity… so it’s absolutely insane in regards to all the scenarios here.

**00:26:40 — Mike:** It’s like you said: it’s much more than just your Power BI model that we’re used to being the only thing we can actually do something with.

**00:26:45 — Mike:** It was the XMLA endpoint back in the day, which was awesome, but this really opens up all the Fabric artifacts—and also what you can do.

**00:26:58 — Tommy:** So I was talking with Michael Kovalsky recently about this exact tool, and he’s explaining a little bit.

**00:27:06 — Tommy:** He was also talking about this in a speaking engagement he did over at the Fabric conference—I believe it was over in Stockholm.

**00:27:15 — Tommy:** He came over and talked about it.

**00:27:17 — Tommy:** But Michael Kovalsky is on the CAT team—he’s the one who kind of originated Semantic Link Labs.

**00:27:22 — Tommy:** And while he was on the CAT team—he deals directly with Customer Advisory Team—that’s what that is.

**00:27:26 — Tommy:** CAT team is the Customer Advisory Team, so he deals directly with big customers (or all customers).

**00:27:31 — Tommy:** Initially, he built a couple Python libraries, picked it up, thought, “Oh my gosh, this is easy,” learned Python.

**00:27:38 — Tommy:** He wasn’t really a Python writer to begin with—he knew programming, but it wasn’t really his forte.

**00:27:44 — Tommy:** And in about a year, he had started building all these helpful tools and producing a lot of things that made things easier.

**00:27:51 — Tommy:** Well, now his full-time job is basically maintaining, supporting, and building more features through Semantic Link Labs—because by him solving a problem with this tool, he’s able to solve not just one customer problem; he’s solving a multitude of customers’ problems all at the same time.

**00:28:11 — Tommy:** So one thing I’m really excited about is when you go to the GitHub repo and look at all the releases—the release list is incredible on this tool.

**00:28:20 — Tommy:** He is chunking out releases multiple times per month.

**00:28:28 — Tommy:** So in 2024, he had four updates—one per week in December. In November, he had three per week through December.

**00:28:36 — Tommy:** And he’s already had two in January and one in February. I mean, they’re making a ton of stuff in here that’s adding a bunch of really neat features.

**00:28:45 — Tommy:** So it’s almost hard to keep up with the tool because it’s moving so fast. It’s doing so many things. I really, really like it.

**00:28:52 — Mike:** And we should give a shout-out—real shout-out—to our friend Gilbert. That’s actually where the idea to really dive into this a little more came from.

**00:29:04 — Mike:** One of the cool scenarios that I saw was what Gilbert did: basically, he looked to automate updating incremental refresh policy.

**00:29:13 — Mike:** And he was able to do that with Semantic Link Labs, which is insane.

**00:29:20 — Tommy:** Yeah.

**00:29:20 — Mike:** But this is the kind of stuff we’re talking about—like, it’s heavy automation.

**00:29:27 — Mike:** This is for professional developers. These are for users who are very, very much in the weeds and the code of things.

**00:29:41 — Mike:** So let me just give you my perspective on this one. There’s a couple things here.

**00:29:43 — Mike:** The combination of Semantic Link Labs, in concert with Tabular Editor, in concert with DAX Query View—those three tools (for lack of a better term)…

**00:29:58 — Mike:** Those three tools replace almost every single other external tool that’s out there that’s talking about the semantic models.

**00:30:06 — Mike:** I think these tools can do everything else—everything other tools can do—and more.

**00:30:11 — Mike:** And the bonus here is: as I compare this to Tabular Editor, I don’t have to learn C# just to write a script or an automation. I can just write it in Python—which, in my opinion, is much easier to write.

**00:30:25 — Tommy:** So here’s a question—because you actually brought up something very intriguing.

**00:30:28 — Tommy:** If you think about all of the current API or developer ways to modify/read your Fabric tenant—you talk about the XMLA endpoint, Power BI REST APIs, and now there’s really SemPy Labs.

**00:30:48 — Tommy:** If you are the data czar of an organization, do you care how people are actually…

**00:30:52 — Tommy:** Let’s take it first with the heavy developer—the people who actually do need to automate their Power BI items or Fabric items using some custom endpoint.

**00:31:10 — Tommy:** Would you push everyone to only use Semantic Link Labs, or…

**[00:31:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1875s)**

link Labs or Senpai compared to API xmla endpoint Powershell I think those are the really three ways that you can actually in a sense connect or talk to powerbi well let's also talk about other external tools right there's D Studio yeah also tabular editor right so let's look at all the tools and say okay which ones provide the highest level of automation right Tabler editor and semantic link Labs provide high levels of automation

**[00:31:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1905s)**

I have really struggled just me personally I've tried to get Tabler Editor to to run in some sort of deployment pipeline where the deployment pipeline runs something and Tabler editor like recompiles the code or deploys something it's difficult and I couldn't get it to work correctly and the documentation is okay but tabular editor wasn't really the right tool like a CLI command line interface right I want a CLI to be able to say look yeah this is where my model lives

**[00:32:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1935s)**

I want to package my model and deploy it to this workspace well it doesn't it it works but you have to be like really in the weeds of things it's just more difficult I'd rather I'd rather write a python notebook and use that to make a sequence of cells that does what I want so if I think about like so that's one difference there right I've already ran into other problems with other tools

**[00:32:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1965s)**

that is difficult to write code for or it's different difficult to write you know command line interface type actions right the centic L Labs makes this much easier also I'm writing just pure Python and the functions there are way more functions in centic link Labs like refresh your semantic model optimize things get this measure run this SQL query I mean it just there's just a lot of like nice features around it

**[00:33:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1995s)**

the functions are easy to understand it's easy to run those it just makes a lot more sense to me so now let's compare the pricing of all these tools right so Tabo editor if you're going to go professional with this one it's going to cost you a little bit of money to get the tool it is a premium level tool it is for the developer when you need to start manipulating like partitions and going deep on the tables and the models

**[00:33:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2025s)**

get really large you're not going to want to edit a model like using desktop you're just not going to want to there's thing it's going to you're going to outgrow desktop very quickly now when I have semantic link so now that I have timle editor and now that I have Dax query viw and semantic link Labs these are all free tools doesn't cost me a dime now then I might be writing a bit more code I might have to write a bit more you know cells inside my python notebook in some inic link Labs

**[00:34:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2055s)**

but I'm willing to learn that in exchange for free right so like it may not be like the most optimized tool out there but there's I don't have to learn c i it's a free tool and I can do way more things not only just at the semantic model level but also at the report level to me I'm sold and when I was watching Michael kovalski talk about this he did a demo where he went to I think it was I don't know if it was a lakeh house I can't remember exactly what he was doing

**[00:34:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2085s)**

he went somewhere to a lake house he read the metadata from the lake house he then created his own tables I think it was his best business sorry let me let me step back here yeah he was using best business practice analyzer BPA he went to a workspace he said this is my workspace run the BPA tool on every model in a workspace he ran every model he got all the rules back he wrote the tables to a lakeh house once the tables were written to the lake house he made a semantic model programmatically albeit it was he made it from scratch using code

**[00:35:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2115s)**

and then he made the report programmatically he connected the semantic model to the tables he connected the report to the semantic model and everything just worked and he had a from a single notebook he had run all the tools for best practice analyzer made the semantic model and made the report all within one a couple lines of code that that's an automation like that can't be done in any other tool and I looked at that and I said this single tool cemented link Labs just killed every single external tool that's out there de with semantic models and even some lightweight report editing stuff as well I mean this is incredible it does so many things yeah

**[00:35:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2145s)**

my Powershell scripts had their day in the sun back in the day it could do some crazy things but it's it's interesting with the cementing link Labs the official documentation because is obviously coming from cementing link which is kind of the actual package and Microsoft actually developed then the the official documentation actually says that the cementing link is a feature to establish connection between models and data science yes right so and it's funny that it was only really kind of initially built for just the data science side because they're thinking hey python notebooks Jupiter notebooks that's data science that's GNA really just be that data science spere cool awesome so that's just that's just a semantic model I mean that's just semantic that's Senpai that's all that that is the labs part of this makes it really rich

**[00:36:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2175s)**

because now this is including like a whole bunch of other things at like it has a ton of administration level features in it that's awesome like it's just absolutely incredible and that for me I'm like oh yeah so again if if you're a new user you're thinking like what should I be learning now you guys are talking about timle view you're talking about Dax Dax query view you're talking now about semantic link Labs dude if you have Fabric in your tenant 100% you should be learning semantic link labs immediately it will make your life way easier now it's very code Centric it's very detailed but if you want to be work smarter not harder it this is the tool for you

**[00:36:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2205s)**

so man this interesting because yeah I think we still know and I'm still on the the side that most data professionals or powerbi professionals probably hav't by now maybe have you know like open a Jupiter notebook or done a notebook but that's probably not been their Forte right so if I'm if there if we're introducing fabric to my organization let's say yep and up until this point the business intelligence team has been powerbi all powerbi okay H much more likely to been doing like to take ruy Romano's Power Cell script to actually do some automation to get workspace modit during an activity than I ever were was to touch python or spark

**[00:37:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2235s)**

so if you are with that kind of in mind again data Engineers people in data science definitely obviously this is like well at home this is nothing new but a lot of if you're a data scientist You're Gonna Know Pyon like that's gonna be a given if you're a data engineer you may or may not know python you probably will know like I think you would know more of like a sequel right you'd be more of like I think of dat a little bit of DBA but a lot more data engineering there's other tools that are a lot more graphical interface so you you don't have to actually know actual code you could use things like talend or other data engineering type programs that do all the work for you but I'd argue like python is becoming a very common language any of the new computer science Majors that I'm talking to nowadays they all know it they all know python coming out they're not saying you have to buer computer science major to do this kind of stuff but like it's taught everywhere it's G be it's going to be like the language that everyone knows

**[00:37:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2265s)**

so let me ask you who are you teaching then if you had a team of just powerbi right because we're still in this migration period we're still introducing fabric to an organization that might have previously be just powerbi if I'm listening to this podcast right now and I still don't have fabric but we're we're potentially going to introduce it at my organization and I've been the powerbi pro and Dax and power query yada yada yada are you how long is it going to take for you to expect someone in that space that Persona to start using spenting Li Labs

**[00:38:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2295s)**

say that again when do when do you want to you're asking like when's the right time to use yeah so if I'm at an organization that we're maybe about to introduce fabric don't have it I'm listening to this podcast from the day that my organization opens up the fabric to the organization how long or what would you expect that person to begin to start using L Labs yeah this is a good question so let's talk about the maturity or of your organization right so just because you're turning on fabric doesn't necessarily mean your organization is immature in powerbi right if your team is larger if you have rigor around using best practice analyzer on your semantic models or you're looking to tune or optimize your models right that that that right there already tells me that your your company's maturing right

**[00:38:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2325s)**

when you're getting to the place where you're optimizing models and making them more performant to to make sure that they're not bigger what happen how how the progression typically goes here is users start with powerbi they build models at the pro level their models get larger they absorb more data at some point they outgrow the pro licensing and they move into potentially premium per user licensing which gives you much larger semantic models at some point you run into problems the model runs slow the visuals aren't working right and you need to start analyzing what's going on in the model your model design now needs to get better so I mean this is my progression too right I started making crappy models at the beginning just because it it worked and I okay it works let's move on I got more mature and then as I developed better models I got better at making those models more efficient okay so where does centic link Labs fit here now right if your company is in a place where your organization is mature around optimizing tuning building best practices in your models in your organization you may want to regularly review those things if you have a larger team building models there's going to be people regularly reviewing or should be

### [00:41:38](https://youtu.be/bOVBPAk-d24?t=2498)
People regularly reviewing your models to make sure you're not building stuff that's going to abuse your capacity.

### [00:42:08](https://youtu.be/bOVBPAk-d24?t=2528)
When you go over to Fabric, if your organization is at that level of maturity where you're tuning, driving for optimization, Semantic Link Labs will be a great free tool. I'm free to help you automate more of that.

Here's an example. I have a deployment process. We're going to deploy some kind of reports. Part of your deployment process will likely be running best business practice analyzer on your model in either test or maybe you run it in all your production models once a month, something along those lines.

### [00:42:38](https://youtu.be/bOVBPAk-d24?t=2558)
That's the kind of stuff you're going to need to do when your models get really large in size. You're going to have lots of partition management to handle. You're going to need other tooling to help you adjust, manipulate, and then as your models get larger you're not going to want to just flat load all the tables.

Another thought here: users who start with Power BI, they typically load the entire table all the time. When you start, just load the whole table. Eventually you learn that not all data is changing from the source system.

### [00:43:08](https://youtu.be/bOVBPAk-d24?t=2588)
Maybe I should be smarter about how I incrementally load the data. As your data grows in volume you also don't want to loow load a 100 million records every night. That's inefficient. It's wasteful at that point.

Then you start thinking about, okay, how can I, in the best way possible, only load the data that I care about, only load the data that's changing.

### [00:43:38](https://youtu.be/bOVBPAk-d24?t=2618)
Right now you have to do more things around partition management, incremental refresh, but you've got to think about that. That's where the heavy automation of Semantic Link Labs supports this.

It supports it, but man, that is actually a harder sell for me if I'm going to do the partition management, because odds are I've been doing this with a UI for a long time, whether it's actually an SSMS or Tabular Editor 3.

### [00:44:08](https://youtu.be/bOVBPAk-d24?t=2648)
I'm sure it's faster in Semantic Link Labs, but to sell someone who has to then ramp up or create all these notebooks is, okay, where's the value-add for that case?

To me, I'm thinking Semantic Link Labs is not for everyone. Every single Power BI developer or heavy Power BI developer is going to want to get their hands-on Semantic Link Labs. If anything, it's probably one or two people creating them that are going to help manage a lot of other things.

### [00:44:38](https://youtu.be/bOVBPAk-d24?t=2678)
Most of what I'm seeing around Semantic Link Labs is, Greg asks a great question in the chat here. He says, do you start, are you at the place right now where you're going to recommend or start recommending building greenfield, brand new semantic models using only Semantic Link Labs?

Let me just say it's possible to do that, but I would also argue that you may not want to start with that.

### [00:45:08](https://youtu.be/bOVBPAk-d24?t=2708)
Bringing, building brand new models probably not the best opportunity for this one. It looks like a lot of the features around Semantic Link Labs are focusing, at least initially, on debugging, best business practice analyzer, incremental refresh, partition pieces.

There's a whole bunch of Power BI API stuff that you need to do as an admin or an expert you're going to need to use, period. You don't have to use PowerShell now. You don't have to use other tools. It just handles all the authentication for you, so a lot of these other things that are used, it just makes everything so much easier.

### [00:45:38](https://youtu.be/bOVBPAk-d24?t=2738)
So I guess in that regard.

No, so my question was about the people using Semantic Labs. I think there's the misconception is it's not going to be for every Power BI developer. Not every single heavy enterprise developer is going to be needing to use Semantic Labs.

To your point, there's probably an admin or someone setting it up on behalf of the team or on behalf of a department, because is everyone going in to utilize Sy Labs? Probably not.

### [00:46:08](https://youtu.be/bOVBPAk-d24?t=2768)
But some, if you're a professional, yes you are.

How many Power BI professionals should be using VertiPaq Analyzer? How many? All of them. Yes. If you're doing any kind of, if you're professional in Power BI analyzing, every single one of you should be using VertiPaq Analyzer.

It tells you how many columns there are, what's the size of those columns, which columns are most wasteful or not. If you are any kind of professional, everyone should be.

### [00:46:38](https://youtu.be/bOVBPAk-d24?t=2798)
That's already built into Semantic Link Labs. Right there, it's a single function that says, "Semantic Link Labs VertiPaq Analyzer," send it the data set, boom, done. VertiPaq answer comes back.

I don't need a third party to connect to a tool. I don't need to do other stuff. It's just literally right there. Boom, done.

I think I disagree with your statement, should any Power BI professional be using this? Yeah, they all should be using it if you're professional, if you know what you're doing around semantic models and you have access to Fabric, 100%, you should be learning about and using different modules from Semantic Link Labs. It will make you more efficient. Yeah, you should absolutely be using that.

### [00:47:08](https://youtu.be/bOVBPAk-d24?t=2828)
But here's the thing: if every single individual is creating their own notebook, right, and then just kind of, from a wild west point of view, the run the BPA, so are we pushing the data somewhere, or do we have just a thousand notebooks right now?

No. There's, again, if you're a professional developer, I'm already assuming you're going to be starting to pull some of the stuff together and centralize it, the same way that you're centralizing lakehouses and notebooks already in your data engineering.

### [00:47:38](https://youtu.be/bOVBPAk-d24?t=2858)
You're going to start making workspaces. Your professionals should all be working together, and hopefully people are sharing notebooks between each other as well.

I think there's a lot of this where I think, from an overlap point of view, where that BPA, there's even a run bulk BPA. Why can't you, hey, I'm going to be the one creating these notebooks on behalf of the team that just run.

I'm not saying you're not doing that. That's not what you're describing has nothing to do with using Semantic Link Labs. That is all to do with your company's internal process.

### [00:48:08](https://youtu.be/bOVBPAk-d24?t=2888)
Do you have people smart enough to build things that everyone can reuse? That's your process. That has nothing to do with the Semantic Link Labs itself.

I think you're arguing for something that is just a totally different scenario. You're arguing for, does your company have process.

No. So here's my worry: all the things in here are great for the individual. You take 10 people, let's take 10 people that are now all running Semantic Labs on the wild, some of these are really powerful.

### [00:48:38](https://youtu.be/bOVBPAk-d24?t=2918)
We're still dealing with APIs, and this is the argument here. You're still dealing with the APIs that require some permissions, that can do a lot here, especially from an automation point of view. If you are not careful, everyone's running through this.

What are you so worried about? I don't understand. I do not, I literally do not understand your question here.

Yes, there are some modifying things, but if you don't have access to the workspace or don't have access to the items in that workspace, you can't touch them, you can't modify things you don't have access to.

### [00:49:08](https://youtu.be/bOVBPAk-d24?t=2948)
So it's not like this is ripping across parts of workspaces that are giving you more access to things you couldn't have before.

Service principle, that's a moot point. There's no point in my mind.

What I will argue though is you're right, but once someone has figured out a pattern here, these patterns get set. They just run and you just move on.

For example, you're talking about running VertiPaq Analyzer on all your models. Maybe that's something you decide is a tool or an automation you want to run every night.

### [00:49:38](https://youtu.be/bOVBPAk-d24?t=2978)
Load your models. At the end of loading your model, maybe in the morning or maybe even in the evening, run VertiPaq Analyzer on all your models and store the data of the lakehouse.

That's the point. Someone says, I'm going to do this. These are the workspaces that are important to me, and they just build the automation and walk away.

Now the notebook can be scheduled with a pipeline. Now you can have all this extra data coming off of your semantic models, the metadata stuff, and you can just capture that all away into lakehouse.

### [00:50:08](https://youtu.be/bOVBPAk-d24?t=3008)
This provides one huge, huge layer of automation going back to your organization.

Now you can say, we've run BPA on all our models, we've run VertiPaq Analyzer on all our models, and by the way, we're already funneling all the data to a lakehouse in a common data structure format.

Now you can be reporting on that. Instead of having everyone going in and finding problems with models, you can be more proactive.

Hey, this column is really small, it dropped a lot one night. What happened? There was a data load issue.

### [00:50:38](https://youtu.be/bOVBPAk-d24?t=3038)
Okay, now we can go look at it.

This model is getting extremely large in size for some reason. It's been rapidly growing over the last couple weeks. What's going on? What's happening? Did something change?

These are all the signals and things that you're going to want to administrate and monitor as your professional, and in the Power BI and Fabric space, this tool just gives you the capability to do this at a much higher degree.

### [00:51:08](https://youtu.be/bOVBPAk-d24?t=3068)
I completely agree with that.

Honestly, a lot of the things too, what I would love to see is someone who's a Python champion or who already has that experience, a lot of these could be made into, I don't want to use the word templates, but for anyone who's using Power BI, it's, hey, you want to view your measure dependencies, I've created that notebook for the team.

All you have to do is just plug in your workspace, plug in your semantic model, and it will run.

### [00:51:38](https://youtu.be/bOVBPAk-d24?t=3098)
Rather than taking someone who has to try to, in a sense, install, create their own notebook.

A lot of these could be, not even from a governance or security point of view, from just an adoption point of view.

So I believe Cen L Labs is in preview or not in preview. It's neither. It's just a project that Microsoft has built and supports it. So it's a, it's a wheel.

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

# Transcript (clean)

Video: https://www.youtube.com/watch?v=bOVBPAk-d24

- [00:00:32](https://www.youtube.com/watch?v=bOVBPAk-d24&t=32s) **Tommy:** good morning and welcome back to the explicit measures podcast with Tommy and Mike good morning everyone welcome
- [00:00:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=37s) **Mike:** good morning everyone welcome back good morning Mike how was your weekend it went very quickly been very busy with software and Building Things and lots of projects going on but I took a little bit of time to relax I have for whatever reason reinvigorated a nice good old cold or flu or something on me oh no I am just feeling congested so I did a lot of lay and low a lot of we are doing a larger kitchen remodel in our kitchen doing some refacing we're leaving the cabinets alone but we're doing new countertops
- [00:01:07](https://www.youtube.com/watch?v=bOVBPAk-d24&t=67s) **Mike:** alone but we're doing new countertops some big things that my wife has won and so it's been very exciting to see that come along but needless to say we've been eating out a lot because we don't have a kitchen there's no sink it's it's out of commission right now for a little bit dude is it a we're doing a full revamp or we're just doing like cabinets like a little little I gu you you would call it like refacing the cabinets so the cabinets are getting refaced so they're and all new doors and handles we are adding some pull out
- [00:01:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=97s) **Mike:** handles we are adding some pull out drawers inside the cabinets and then new countertops so we're not like going down to like studs we're not going down to like like drywall we're just using what's already there the the structure is not changing there's nothing we're not adding new cabinets we're not moving things around it's it's all the same stuff so okay needless to say you can't use it well it's been nice because while we've been having worked done on the cabinets we've been able to use the kitchen but now we just we're at the very end and at the very end they have to take out the plumbing they
- [00:02:08](https://www.youtube.com/watch?v=bOVBPAk-d24&t=128s) **Mike:** they have to take out the plumbing they put new countertops in and that's when you lose like the sink so hopefully today we get the use of our sink back and we can start reusing her kitchen we got now the hard decision what backsplash do you want oh you should call my wife she was in a previous life a interior designer oh excellent what she and she married me the non interor designer no no colors are are not a thing did that like I
- [00:02:39](https://www.youtube.com/watch?v=bOVBPAk-d24&t=159s) **Mike:** not a thing did that like I think a lot of people depending on the colors that you learned those are the colors that you actually see so my wife tested me out on this and she's like what color is it I'm like well you didn't learn mauve I know the Rainbo and I know that variations teal yes slightly more teal yeah but very teal yeah I think my wife has 50 colors she knows wow and so like I was looking at something oh
- [00:03:09](https://www.youtube.com/watch?v=bOVBPAk-d24&t=189s) **Mike:** so like I was looking at something oh it's blue she like no it's acrylic da d d du yeah like I couldn't see it but I also never learn what th those colors are so it's amazing at least for an interior designer interesting I I don't know how to I don't I'm not sure if I would be able to pick out or describe multiple colors for people I could probably tell you like what some general colors are to your point Tommy but I couldn't be all all these nuanced colors like green you
- [00:03:40](https://www.youtube.com/watch?v=bOVBPAk-d24&t=220s) **Mike:** know seafoam green all these other like I wouldn't know I would not know these things I would just yeah it's I'm very simple in that regard it's interesting I'm not good at yeah I'm not at making designs but I'm really good at like looking at other things and being able to say oh I like that oh this is a good design so I'll I'll tie this back here to powerbi a little bit when I look at colors or color pettes I'm probably not the best on knowing how to create something from scratch but I can do a
- [00:04:11](https://www.youtube.com/watch?v=bOVBPAk-d24&t=251s) **Mike:** something from scratch but I can do a really dang good job of going into figma and finding a different report that I like and copying it or bringing down the colors or like building a style that looks similar to that object and that's what a lot of what I do when I build reports I'll go find an image a picture or someone's mockup of a dashboard and I'll say oh that looks interesting and then I'll go Riff on that design make it my own and then build a lot of extra features and pages and backgrounds for it so a lot of times I'll do that I'll take inspiration from other other
- [00:04:42](https://www.youtube.com/watch?v=bOVBPAk-d24&t=282s) **Mike:** I'll take inspiration from other other people's works I think it's like the phrase phrase great artists no what is it great artists borrow or something like that or steal I don't remember that phrase is great good artist borrow great artist steal or copy that's yeah I think Ste job said it so can you articulate oh great arst steel is I think is the the phrase well at least that's what Chad gpg
- [00:05:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=314s) **Mike:** that's what Chad gpg says can you articulate when you see something like what you like about it or is it more the I just like that where even when it comes to design or your kitchen oh good question yeah I would I'd say I can probably pick up on pieces of it I can articulate what pieces of the design that I really like and that's usually what I spend my time on mimicking I'll give you just a really weird I maybe history I guess previously I was well not previously when we first got married we didn't have much monies and so year we wanted to do
- [00:05:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=345s) **Mike:** much monies and so year we wanted to do Christmas cards and so my wife would go online and she'd see all these Christmas cards and she like oh that's an interesting Christmas card and she would show me the picture of the Christmas card and I took it as a challenge to go into like a computer program and like mimic that card like look at the details figure out how to make it replicate it and I would replicate these Christmas cards by making my own design and I would make it entirely out of like illustrator and then we'd go to the store and we'd print off a bunch of pictures or or im images off of
- [00:06:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=375s) **Mike:** pictures or or im images off of like Walmart or whatever and then we would set out a bunch of photos basically but it was of an image that I had designed now granted in the early days I had nothing but time it was just time computer building so I had there was not as many kids I could spend you was not as many kids I could spend four hours just trying to figure know four hours just trying to figure out how to get the design of the thing to work I'm Googling things I'm I'm learning about illustrator and Adobe products and maybe I'm using some photoshop in there a little bit too so I'm doing all this work with this program just to make these good-looking images I think that helped a lot because
- [00:06:47](https://www.youtube.com/watch?v=bOVBPAk-d24&t=407s) **Mike:** images I think that helped a lot because now I can look at other images and know how they're built it's like a skill it's a little bit it's something you have to like learn how to do and this is I think one of the things that is difficult for people in powerbi is we're really good at data modeling and bringing together the data structure I think the majority of the people building reports don't have the eye or the visual or the aesthetic side of things and that's where people need a little bit of help like and and you could could probably you could easily spend as much
- [00:07:17](https://www.youtube.com/watch?v=bOVBPAk-d24&t=437s) **Mike:** probably you could easily spend as much time doing the data modeling double that time and you could do all the report visual styling right you could e so where do you cut Corners we've had this discussion a long time ago of like what what's the right balance of that inside you're reporting anyways no no I I'm honestly the same thing for me the design side took a long time for me to actually so to speak understand what I was trying to do or actually put a design together that someone make sense because I was analytical I didn't know what I was supposed to build I just had
- [00:07:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=468s) **Mike:** what I was supposed to build I just had things that I thought looked good but I think it books help the biggest thing that actually helped me was asking someone else who had no stake in those in the data like a friend or spouse like hey what is this telling you yeah so I like it awesome let's Jo let's before we jump into our news topic today we just start a little rambling here at the beginning so we'll we'll stop rambling here for a moment today we're going to talk about semantic link
- [00:08:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=500s) **Mike:** we're going to talk about semantic link Labs what updates have recently been coming out this tool Is Amazing by the way this is incredible tool it does so many different things and then what are different scenarios or patterns on when you use semantic link labs to work inside your tenant now to be very clear semantic link Labs is a python Library based on another Library called Senpai which I had to really think about this was so it's Senpai because semantic link semantic models right semantic models is the first part
- [00:08:50](https://www.youtube.com/watch?v=bOVBPAk-d24&t=530s) **Mike:** right semantic models is the first part of it and then py as python so it's like spark Pi spark right so it be Pi spark or or the other languages spark SQL right so those are the things that are relating to that Library the library semantic link or semantic yeah semantic link is directly built from microsofts maintained by them and allows you direct access to the semantic models in your tenant but does a lot
- [00:09:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=560s) **Mike:** in your tenant but does a lot more of that semantic link Labs extends this heavily and so we're going to unpack a little bit more of semetic Link Labs where to use it where we're finding with it right now and jumping in there that'll be our for today all right Tommy give us some news so there's a few
- [00:09:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=577s) **Tommy:** give us some news so there's a few things with that actually went under the radar that and because we didn't talk about it didn't mean no one read it but I think a few articles if we didn't say it then not important not don't talk about in the podcast did the feature actually get released that's that's what we're talking talking about I'm actually surprised we haven't talked about this so the first one I want to bring up is the template dashboard for workspace modering which I thought was huh maybe I don't know why
- [00:10:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=610s) **Tommy:** thought was huh maybe I don't know why the immediate interest wasn't there but these real time dashboards work with your workspace monitor that you're used to and they're actually Community built they're open sourced and they can download through GitHub and really what they help

through GitHub and really what they help you allow you to do is go through your
you allow you to do is go through your environment
environment um and like basically the templates that
um and like basically the templates that we're used to when it comes to
we're used to when it comes to monitoring that Microsoft does that we'd
monitoring that Microsoft does that we'd have to then like live connect if we
have to then like live connect if we wanted to modify this um they're all
wanted to modify this um they're all this community build and you can edit
this community build and you can edit the desktop version and have it to
the desktop version and have it to your to your customization which is
your to your customization which is really neat so so this is this is a tool
really neat so so this is this is a tool that Microsoft has built to enable users
that Microsoft has built to enable users to get better analytics about their
to get better analytics about their workspaces and it's using in a
workspaces and it's using in a monitoring event house so this is
monitoring event house so this is streaming analytics directly into a
streaming analytics directly into a collection an area or you know store
collection an area or you know store basically and then from that store
basically and then from that store they're giving you some reporting kind
they're giving you some reporting kind of off the shelf out of the box tooling
of off the shelf out of the box tooling inside their fabric toolbox on GitHub so
inside their fabric toolbox on GitHub so fabric toolbox is the GitHub repo and
fabric toolbox is the GitHub repo and I'll make sure I put both of these links
I'll make sure I put both of these links down here below um in the in the chat
down here below um in the in the chat windows for everyone to kind of see how
windows for everyone to kind of see how that works let me uh get those over here
that works let me uh get those over here to the chat window if you want go check
to the chat window if you want go check those out we'd highly recommend it
those out we'd highly recommend it really good tools um yeah be curious if
really good tools um yeah be curious if anyone else is using these or seeing
anyone else is using these or seeing them one thing I will caution you here I
them one thing I will caution you here I believe my understanding this I haven't
believe my understanding this I haven't played with it so I got to be I've read
played with it so I got to be I've read the documentation on it but I haven't
the documentation on it but I haven't really gone into turning it on yet my
really gone into turning it on yet my understanding is this is the same thing
understanding is this is the same thing as turning on like log analytics for
as turning on like log analytics for your workspace so this could get very
your workspace so this could get very noisy or there could be a lot of of
noisy or there could be a lot of of large volume of data coming over to your
large volume of data coming over to your fabric workspace anytime you send more
fabric workspace anytime you send more things like this or turn on any kind of
things like this or turn on any kind of real time Eventing you're immediately
real time Eventing you're immediately going to consume more capacity workspace
going to consume more capacity workspace so just my big caution with this is you
so just my big caution with this is you can turn this on it's a good solution it
can turn this on it's a good solution it is
is streaming however just be cautious
streaming however just be cautious because when you turn it on it will send
because when you turn it on it will send a lot of data potentially every
a lot of data potentially every interaction every query all the details
interaction every query all the details from the workspace that's happening will
from the workspace that's happening will be sent directly to the stream good but
be sent directly to the stream good but I would probably recommend don't turn it
I would probably recommend don't turn it on and forget it I would definitely
on and forget it I would definitely recommend turn it on and just watch it
recommend turn it on and just watch it make sure you turn it off um because it
make sure you turn it off um because it could potentially add a lot of costs or
could potentially add a lot of costs or a a lot of additional compute units to
a a lot of additional compute units to your your skew so just be aware of that
your your skew so just be aware of that as as you use the
as as you use the tool so just a point out there that's
tool so just a point out there that's probably a really good thing because uh
probably a really good thing because uh people might not know how much data is
people might not know how much data is actually going in and yeah I thought it
actually going in and yeah I thought it would be through the normal monitoring
would be through the normal monitoring that you get with um the admin but no
that you get with um the admin but no interesting all it's a different
interesting all it's a different solution so they're trying to be more
solution so they're trying to be more transparent uh I was talking with um oh
transparent uh I was talking with um oh shoot I forgot his name uh he works um
shoot I forgot his name uh he works um for Microsoft and he just did a you he
for Microsoft and he just did a you he just did our Milwaukee User Group area
just did our Milwaukee User Group area recently um the name will come to me
recently um the name will come to me like literally halfway through the
like literally halfway through the podcast but anyways uh we had the the PM
podcast but anyways uh we had the the PM speaking to all admin monitoring and
speaking to all admin monitoring and going through the details there Tommy he
going through the details there Tommy he spoke at your user group too oh um
spoke at your user group too oh um Gil revie no after Gil that was the same
Gil revie no after Gil that was the same session it was after Gil was doing his
session it was after Gil was doing his oh our main
oh our main speaker forgot his name Milwaukee I I
speaker forgot his name Milwaukee I I remember used to work in Milwaukee tool
remember used to work in Milwaukee tool sounds like I don't even know anyways
sounds like I don't even know anyways we'll figure it out later I'll go get
we'll figure it out later I'll go get the name Tommy will go look up his um
the name Tommy will go look up his um his user group session and he'll go get
his user group session and he'll go get the name anyways um Tim Bendis there it
the name anyways um Tim Bendis there it is someone in the
is someone in the chat Tim Bendis is um Microsoft employee
chat Tim Bendis is um Microsoft employee and went through all the details of the
and went through all the details of the monitoring app there's a lot of things
monitoring app there's a lot of things coming and Microsoft is trying to make
coming and Microsoft is trying to make the the entire modeling experience
the the entire modeling experience easier to understand thanks Dan while I
easier to understand thanks Dan while I stumbled around there for a bit
stumbled around there for a bit appreciate it all right let's move on to
appreciate it all right let's move on to the next one what's our next uh news
the next one what's our next uh news item Tommy uh another just kind of
item Tommy uh another just kind of announcement I guess there's really no
announcement I guess there's really no feature coming out but uh it came out on
feature coming out but uh it came out on January 29th the private preview private
January 29th the private preview private preview of everyone can't get to it
preview of everyone can't get to it quite yet yeah of the migration
quite yet yeah of the migration assistant for fabric data
assistant for fabric data warehouse uh so basically ancy and
warehouse uh so basically ancy and Microsoft were letting know that there
Microsoft were letting know that there would be a migration assistant last year
would be a migration assistant last year uh they're currently running a priview
uh they're currently running a priview uh assistant or a private preview with
uh assistant or a private preview with the migration assistant uh they're
the migration assistant uh they're looking for
looking for participants um and they're look you can
participants um and they're look you can complete a form and you can actually uh
complete a form and you can actually uh get access to the Mig migration
get access to the Mig migration assistant and again that migration
assistant and again that migration assistant is help accelerate
assistant is help accelerate your SQL Server syap other warehouses uh
your SQL Server syap other warehouses uh to fabric data
to fabric data warehouse and I think the idea here is
warehouse and I think the idea here is they're they're trying
they're they're trying so the reason they go to private preview
so the reason they go to private preview is they think they've got the tool or
is they think they've got the tool or the migration solution complete but
the migration solution complete but they're testing out with the first
they're testing out with the first couple customers so while we can't
couple customers so while we can't necessarily always access these private
necessarily always access these private previews just be mindful of that means
previews just be mindful of that means usually behind the private preview is
usually behind the private preview is actually will release something fairly
actually will release something fairly shortly that means we're we're at the
shortly that means we're we're at the very last stages of bug fixing feature
very last stages of bug fixing feature refinement and then there will be a tool
refinement and then there will be a tool or a repo or GitHub or something that
or a repo or GitHub or something that will tell you how to leverage this
will tell you how to leverage this migration so I guess the point here is
migration so I guess the point here is if you want to migrate SQL Server SQL
if you want to migrate SQL Server SQL dedicated pools or other warehouses to a
dedicated pools or other warehouses to a fabric data warehouse you should now be
fabric data warehouse you should now be able to soon go through a migration
able to soon go through a migration process for that so anyways there is a
process for that so anyways there is a form on this page so if you would like
form on this page so if you would like to participate in this one you can apply
to participate in this one you can apply to be part of the private preview um
to be part of the private preview um it's a form on the page that I just sent
it's a form on the page that I just sent out in the chat window so check that out
out in the chat window so check that out um you can go see the form there if you
um you can go see the form there if you would like to try and get involved um
would like to try and get involved um there I'll actually just see if I can
there I'll actually just see if I can link to the form
link to the form directly in case you want to go try this
directly in case you want to go try this out anything else Tommy one last thing
out anything else Tommy one last thing that I'm surprised hasn't been um one of
that I'm surprised hasn't been um one of our major topics January 28th fabric
our major topics January 28th fabric update this is big I think this is the
update this is big I think this is the biggest one of the of the newest items
biggest one of the of the newest items here yeah ownership takeover for fabric
here yeah ownership takeover for fabric items and what this feature is is really
items and what this feature is is really uh allows fabric users with the right
uh allows fabric users with the right permissions to take ownership at an
permissions to take ownership at an individual fabric item um and the since
individual fabric item um and the since if you remember the same experience in
if you remember the same experience in data flows gen one because you couldn't
data flows gen one because you couldn't collaborate the only way you had
collaborate the only way you had actually take over to edit um and so you
actually take over to edit um and so you can actually take over as a user in
can actually take over as a user in individual fabric item um and then the
individual fabric item um and then the users so basically some of the
users so basically some of the limitations there are does not support
limitations there are does not support mirrored database items but this is
mirrored database items but this is pretty cool because we've talked about
pretty cool because we've talked about ownership and governance and security
ownership and governance and security here in a workspace yes
here in a workspace yes and I'm really excited to see this
and I'm really excited to see this because I hope what I I first I hope
because I hope what I I first I hope it's not the same experience as data
it's not the same experience as data flows gen one takeover which was just
flows gen one takeover which was just can I edit but at the same time this is
can I edit but at the same time this is a big deal because we want to have some
a big deal because we want to have some some ownership of more than just a
some ownership of more than just a folder more than just a workspace on
folder more than just a workspace on particular items now I don't think this
particular items now I don't think this umed modifies your ability to edit if
umed modifies your ability to edit if you already could edit it like let's say
you already could edit it like let's say a particular item let's say if I'm in a
a particular item let's say if I'm in a Lakehouse and I had permissions to write
Lakehouse and I had permissions to write nothing
nothing changes I'm just the owner of that set
changes I'm just the owner of that set artifact
artifact well I mean this is the issue around
well I mean this is the issue around like if someone leaves your organization
like if someone leaves your organization and they own something like a Lakehouse
and they own something like a Lakehouse so this is solving a direct problem
so this is solving a direct problem where you had a lake house previously if
where you had a lake house previously if I created it and moved on or let the
I created it and moved on or let the company or
company or whatever that item would be linked to me
whatever that item would be linked to me it would be have the owner would be my
it would be have the owner would be my name and in order to switch that
name and in order to switch that ownership from me to Tommy it was
ownership from me to Tommy it was requiring a help desk ticket you needed
requiring a help desk ticket you needed a help desk ticket to physically change
a help desk ticket to physically change the item The Lakehouse from my name to
the item The Lakehouse from my name to Tommy's name this is like basic
Tommy's name this is like basic featuring right this is basic features
featuring right this is basic features you can't you can't let people create
you can't you can't let people create things and not be able to switch
things and not be able to switch ownership of them especially if if all
ownership of them especially if if all the items in the workspace are attached
the items in the workspace are attached to people one of the things I'd like to
to people one of the things I'd like to see here with this one I don't know if
see here with this one I don't know if they've talked about in this one
they've talked about in this one specifically um but I think they're not
specifically um but I think they're not talking about service principles or
talking about service principles or workspace principles yet no right so the
workspace principles yet no right so the one thing here to consider it's in the
one thing here to consider it's in the limitation of this feature it says
limitation of this feature it says fabric item takeover does not cover
fabric item takeover does not cover ownership takeover as a service
ownership takeover as a service principle so if you have a service
principle so if you have a service principle or a workspace identity those
principle or a workspace identity those do not work with this takeover
do not work with this takeover experience and there are some other
experience and there are some other things here that don't support changes
things here that don't support changes right mirrored Cosmos database mirrored
right mirrored Cosmos database mirrored SQL databases mirrored snowflake um
SQL databases mirrored snowflake um these are other features that are not
these are other features that are not quite there yet I would imagine
quite there yet I would imagine eventually they're going to close the
eventually they're going to close the gap on these things but yeah they have
gap on these things but yeah they have to this this was a big gap in my mind
to this this was a big gap in my mind like I can't tell you the number of
like I can't tell you the number of people that had pain around trying to
people that had pain around trying to move lake houses between users and we
move lake houses between users and we were just stuck and we're like the best
were just stuck and we're like the best thing to do is a help desk ticket that
thing to do is a help desk ticket that that's absurd like this is very basic
that's absurd like this is very basic function so it's it's good that they're
function so it's it's good that they're cleaning this up this is definitely a
cleaning this up this is definitely a pain point of my own I've gone through a
pain point of my own I've gone through a number of projects where this was quite
number of projects where this was quite painful I'm very happy to see this one
painful I'm very happy to see this one being resolved yeah and I think there's
being resolved yeah and I think there's um planned to have API support so you
um planned to have API support so you can actually just kind of bulk edit and
can actually just kind of bulk edit and take over from a user which will be
take over from a user which will be really nice right now everything's just
really nice right now everything's just the UI still I'll take it yeah I mean I
the UI still I'll take it yeah I mean I think the API stuff is going to be
think the API stuff is going to be really good and apis I feel like are
really good and apis I feel like are required for more of the continuous
required for more of the continuous integration continuous deployment the
integration continuous deployment the cicd type things where you're going to
cicd type things where you're going to need to programmatically like publish an
need to programmatically like publish an item let's say a lake house and you want
item let's say a lake house and you want to regularly publish who has access to
to regularly publish who has access to that item because when you think about
that item because when you think about like continuous integration continuous
like continuous integration continuous deployment a lot of people think it's
deployment a lot of people think it's deployment pipelines which it is it does
deployment pipelines which it is it does some of that but there's a lot of other
some of that but there's a lot of other things that you need in addition to that
things that you need in addition to that like who's the owner of this item uh
like who's the owner of this item uh who's the owner or members of the
who's the owner or members of the workspace did people accidentally add
workspace did people accidentally add themselves to those workspaces and when
themselves to those workspaces and when you go redeploy the items you want to
you go redeploy the items you want to again update the permissions to the

[00:20:49](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1249s)Mike: again update the permissions to the workspace so that's always consistent and you have the exact right access to the items in the workspace[00:21:01](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1261s)Mike: be I think very useful for assisting with that okay that's it for news anything else we should talk about[00:21:08](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1268s)Tommy: nope that's good for me I'm that's all the the fun things that I think I want to talk about for now[00:21:16](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1276s)Mike: all right let's jump into our main topic today Tommy give us an overview we're g to talk about semantic link Labs[00:21:25](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1285s)Tommy: semantic link Labs is a python package part of Pi in fabric notebooks that really allows you to do a ton of Administration governance querying analytics on all of your fabric items[00:21:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1305s)Tommy: there's a huge parts of this with when it comes to Administration getting groups so all of your API calls that you normally do for those old school who had a Powershell script from ruy Romano that old package, all those calls are available in this python package so I don't have to worry about all those additional configurations but it does a ton more[00:22:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1330s)Tommy: really any artifact that I want to actually go through like a semantic model and I wanted to pull a table or a column and make a data frame that I can if I want to get deployment pipeline information I can I it's a really the full stack in terms of help me manage my fabric tenant[00:22:31](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1351s)Tommy: I feel like semantic link Labs requires a nice acronym[00:22:38](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1358s)Tommy: SL s semantic link Labs anyways that being said I wanted you check out so I'm put in a link in the in the description here[00:22:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1368s)Tommy: semantic link Labs is an extension of the Senpai Library, the Senpai library is semantic link which allows the python notebook to connect or attach to semantic models[00:23:03](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1383s)Tommy: semantic link Labs extends this semantic link Labs goes Way Beyond just the the semantic model it adds things like touching the best business practice analyzer or automation around that so BPA is a really great tool[00:23:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1394s)Tommy: that's something that came from tabular that's an idea that came from tabular editor where you could make rules and and test rules about labs and libraries about your semantic model right this column name is incorrect there's a relationship in this model that seems inappropriate right there's a many to many relationship right it it can detect those things[00:23:35](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1415s)Tommy: it touches other things like the vertac analyzer that's now been integrated into the tool you can do other things check things for direct Lake, make sure your model is within the guard rails of what direct Lake can do or not do[00:23:49](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1429s)Tommy: refresh clear your cache run Dax queries you can manage query scaling out on your different models visualize a refresh what happens during a refresh cycle[00:24:03](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1443s)Tommy: you could do look at the measure dependency tree so basically you could pick a measure in the model and see all the other measures that depend on that measure inside a tree diagram it's just amazing[00:24:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1454s)Tommy: it has a whole bunch of reporting things and this is this is one of the parts of where I think this is why I'm so excited about semantic link Labs[00:24:23](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1463s)Tommy: we're talking about semantic model things but then when we transition over to semantic link Labs can do things in the report[00:24:28](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1468s)Tommy: the report has a best report analyzer report best practice analyzer and that runs also in semantic link Labs, you can get report metadata you can view broken reports you can set a report theme migrate things about reports rebind reports[00:24:44](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1484s)Tommy: this is stuff that doesn't have any capability inside tblo editor, tblo editor has no capability for you to do these things out of the box[00:24:52](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1492s)Tommy: and Michael kosi is the the one who's building this project it does a ton of other stuff around like capacities lake houses notebooks[00:25:00](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1500s)Tommy: it talks to all of the apis for fabric so it talks to all the powerbi apis all the fabric apis all the Azure apis and now Microsoft graft apis[00:25:11](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1511s)Tommy: and it also now supports service service principles for using it to talk to things this is like your Swiss army knife if it does everything[00:25:21](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1521s)Mike: and I I believe Kurt we talked about this before with KT bu because he had an article about going through your entire report just using senpai like actually updating the theme updating visual Properties or updating broken visuals[00:25:36](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1536s)Tommy: yeah has done demos of this and then Kur picked up on it and also written through and and did some talking about that as well[00:25:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1545s)Tommy: when you think about semantic link Labs you're thinking only semantic model, I want you to open your mind up and say this is way more has way more features than just the semantic model it's bigger than that[00:25:57](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1557s)Mike: yeah and no exact one of the things to they have direct Lake migration for any of your models which is absolutely insane[00:26:04](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1564s)Mike: a few other things just to make sure that we're covering all the things that it can actually do[00:26:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1570s)Mike: this is just this python package it can you report metadata you said the report analyzer view measure the dependency tree visualize and refresh[00:26:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1580s)Mike: autogenerate descriptions or measures in bulk lake house is optimize lake house tables vacuum lakes lake house table[00:26:29](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1589s)Mike: migr Power BM PR capacity so it's absolutely insane in regards to all the scenarios here[00:26:40](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1600s)Mike: it's like you said it's much more than just your powerbi model that we're used to being the only thing we can actually do something it was the XML unpo back in the day which was the only was awesome but this really opens up all the fabric artifacts and also what you can do[00:27:00](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1620s)Mike: so I was talking with Michael kovalski recently about this exact tool and it's you he's explaining a little bit and he was also talking about this in a an speaking engagement[00:27:07](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1627s)Mike: he did over in the fabric conference in I believe it was fabric conference over in Stockholm is where he was talking about this one[00:27:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1635s)Mike: he came over and talked about it but Michael kovos is on the cat team he's the one who originated semantic link labs[00:27:22](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1642s)Mike: while he was on the cat team he he deals directly with customer advisory team that's what that is, cat team is the customer advisory team[00:27:31](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1651s)Mike: so he deals directly with big customers or all customers and initially he built a couple like python libraries[00:27:34](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1654s)Mike: picked it up thought oh my gosh this is easy learned python basically he wasn't really a python writer to begin with he knew programming but it wasn't really his Forte[00:27:44](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1664s)Mike: learned Python and in about a year he had like started building all these helpful tools and producing a lot of things that was in like making things easier[00:27:55](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1675s)Mike: well now he's like his full-time job is only like maintaining support Ing and building more features through semantic link Labs[00:28:02](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1682s)Mike: because by him solving a problem with this tool he's able to solve not just one customer problem he's solving like a multitude of customers problems all at the same time[00:28:13](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1693s)Mike: so one thing one thing I'm really excited about is when you go to the GitHub repo and look at all the releases the release list is incredible[00:28:24](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1704s)Mike: on this tool he is chunking out releases like multiple times per month[00:28:28](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1708s)Mike: so in 2014 he had four updates one per week in December in November he had three per week through December and he's already had two in January and one in February[00:28:40](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1720s)Mike: they're making a ton of stuff in here that's adding a bunch of really neat features so it's almost hard to keep up with the tool because it's moving so fast it's doing so many things[00:28:52](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1732s)Mike: really really like it so and U I should we should give a shout out real shout out to our cheran friend Gilbert[00:29:00](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1740s)Mike: from for movies that's actually where the idea to really dive into this a little more came from one of the cool scenarios that I saw was what Gilbert did[00:29:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1750s)Mike: was basically looked to automate updating incremental refresh policy and he was able to do that with the semantic link Labs which is insane[00:29:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1760s)Tommy: yeah[00:29:22](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1762s)Mike: this but this is what this is the this is the stuff we're talking about though like it's it's this stuff it's like heavy automation[00:29:27](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1767s)Mike: so this is like for professional developers these are for users who are very very much in the weeds and the code of things[00:29:41](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1781s)Mike: well let me just I'm going to give you my perspective on this one there's a couple things here[00:29:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1788s)Mike: the combination of semantic link labs in concert with kimle editor in concert with dax's query view, those three tools let's call them tools I guess for like a better term[00:29:58](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1798s)Mike: those three tools replace every single I think almost every single other external tool that's out there that's talking about the semantic models[00:30:06](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1806s)Mike: I think these tools can do everything else everything other other tools can do and more[00:30:11](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1811s)Mike: and the bonus here is like as I compare this compared to tabal editor I don't have to learn C just to write a scripting or an automation[00:30:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1820s)Mike: I can just write it in Python which in my opinion is much easier to write[00:30:26](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1826s)Mike: so here's a question because you actually brought up something very intriguing[00:30:29](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1829s)Mike: because if you think about all of the current API or developer ways to modify read your fabric tenant[00:30:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1837s)Mike: you talk about xmla end point power BRS apis and then now there's really Senpai Labs[00:30:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1848s)Mike: if you are the data Zar or an organ organization do you care how people are actually[00:30:52](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1852s)Mike: if you if let's say let's take it first with the heavy developer the people who actually do need to automate their powerbi items or fabric items using some again custom endpoint[00:31:10](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1870s)Mike: are you going to would you push everyone to only use the SE semantic link Labs or

**[00:31:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1875s)**

link Labs or Senpai compared to API xmla endpoint Powershell I think those are the really three ways that you can actually in a sense connect or talk to powerbi well let's also talk about other external tools right there's D Studio yeah also tabular editor right so let's look at all the tools and say okay which ones provide the highest level of automation right Tabler editor and semantic link Labs provide high levels of automation

**[00:31:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1905s)**

I have really struggled just me personally I've tried to get Tabler Editor to to run in some sort of deployment pipeline where the deployment pipeline runs something and Tabler editor like recompiles the code or deploys something it's difficult and I couldn't get it to work correctly and the documentation is okay but tabular editor wasn't really the right tool like a CLI command line interface right I want a CLI to be able to say look yeah this is where my model lives

**[00:32:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1935s)**

I want to package my model and deploy it to this workspace well it doesn't it it works but you have to be like really in the weeds of things it's just more difficult I'd rather I'd rather write a python notebook and use that to make a sequence of cells that does what I want so if I think about like so that's one difference there right I've already ran into other problems with other tools

**[00:32:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1965s)**

that is difficult to write code for or it's different difficult to write you know command line interface type actions right the centic L Labs makes this much easier also I'm writing just pure Python and the functions there are way more functions in centic link Labs like refresh your semantic model optimize things get this measure run this SQL query I mean it just there's just a lot of like nice features around it

**[00:33:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=1995s)**

the functions are easy to understand it's easy to run those it just makes a lot more sense to me so now let's compare the pricing of all these tools right so Tabo editor if you're going to go professional with this one it's going to cost you a little bit of money to get the tool it is a premium level tool it is for the developer when you need to start manipulating like partitions and going deep on the tables and the models

**[00:33:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2025s)**

get really large you're not going to want to edit a model like using desktop you're just not going to want to there's thing it's going to you're going to outgrow desktop very quickly now when I have semantic link so now that I have timle editor and now that I have Dax query viw and semantic link Labs these are all free tools doesn't cost me a dime now then I might be writing a bit more code I might have to write a bit more you know cells inside my python notebook in some inic link Labs

**[00:34:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2055s)**

but I'm willing to learn that in exchange for free right so like it may not be like the most optimized tool out there but there's I don't have to learn c i it's a free tool and I can do way more things not only just at the semantic model level but also at the report level to me I'm sold and when I was watching Michael kovalski talk about this he did a demo where he went to I think it was I don't know if it was a lakeh house I can't remember exactly what he was doing

**[00:34:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2085s)**

he went somewhere to a lake house he read the metadata from the lake house he then created his own tables I think it was his best business sorry let me let me step back here yeah he was using best business practice analyzer BPA he went to a workspace he said this is my workspace run the BPA tool on every model in a workspace he ran every model he got all the rules back he wrote the tables to a lakeh house once the tables were written to the lake house he made a semantic model programmatically albeit it was he made it from scratch using code

**[00:35:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2115s)**

and then he made the report programmatically he connected the semantic model to the tables he connected the report to the semantic model and everything just worked and he had a from a single notebook he had run all the tools for best practice analyzer made the semantic model and made the report all within one a couple lines of code that that's an automation like that can't be done in any other tool and I looked at that and I said this single tool cemented link Labs just killed every single external tool that's out there de with semantic models and even some lightweight report editing stuff as well I mean this is incredible it does so many things yeah

**[00:35:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2145s)**

my Powershell scripts had their day in the sun back in the day it could do some crazy things but it's it's interesting with the cementing link Labs the official documentation because is obviously coming from cementing link which is kind of the actual package and Microsoft actually developed then the the official documentation actually says that the cementing link is a feature to establish connection between models and data science yes right so and it's funny that it was only really kind of initially built for just the data science side because they're thinking hey python notebooks Jupiter notebooks that's data science that's GNA really just be that data science spere cool awesome so that's just that's just a semantic model I mean that's just semantic that's Senpai that's all that that is the labs part of this makes it really rich

**[00:36:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2175s)**

because now this is including like a whole bunch of other things at like it has a ton of administration level features in it that's awesome like it's just absolutely incredible and that for me I'm like oh yeah so again if if you're a new user you're thinking like what should I be learning now you guys are talking about timle view you're talking about Dax Dax query view you're talking now about semantic link Labs dude if you have Fabric in your tenant 100% you should be learning semantic link labs immediately it will make your life way easier now it's very code Centric it's very detailed but if you want to be work smarter not harder it this is the tool for you

**[00:36:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2205s)**

so man this interesting because yeah I think we still know and I'm still on the the side that most data professionals or powerbi professionals probably hav't by now maybe have you know like open a Jupiter notebook or done a notebook but that's probably not been their Forte right so if I'm if there if we're introducing fabric to my organization let's say yep and up until this point the business intelligence team has been powerbi all powerbi okay H much more likely to been doing like to take ruy Romano's Power Cell script to actually do some automation to get workspace modit during an activity than I ever were was to touch python or spark

**[00:37:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2235s)**

so if you are with that kind of in mind again data Engineers people in data science definitely obviously this is like well at home this is nothing new but a lot of if you're a data scientist You're Gonna Know Pyon like that's gonna be a given if you're a data engineer you may or may not know python you probably will know like I think you would know more of like a sequel right you'd be more of like I think of dat a little bit of DBA but a lot more data engineering there's other tools that are a lot more graphical interface so you you don't have to actually know actual code you could use things like talend or other data engineering type programs that do all the work for you but I'd argue like python is becoming a very common language any of the new computer science Majors that I'm talking to nowadays they all know it they all know python coming out they're not saying you have to buer computer science major to do this kind of stuff but like it's taught everywhere it's G be it's going to be like the language that everyone knows

**[00:37:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2265s)**

so let me ask you who are you teaching then if you had a team of just powerbi right because we're still in this migration period we're still introducing fabric to an organization that might have previously be just powerbi if I'm listening to this podcast right now and I still don't have fabric but we're we're potentially going to introduce it at my organization and I've been the powerbi pro and Dax and power query yada yada yada are you how long is it going to take for you to expect someone in that space that Persona to start using spenting Li Labs

**[00:38:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2295s)**

say that again when do when do you want to you're asking like when's the right time to use yeah so if I'm at an organization that we're maybe about to introduce fabric don't have it I'm listening to this podcast from the day that my organization opens up the fabric to the organization how long or what would you expect that person to begin to start using L Labs yeah this is a good question so let's talk about the maturity or of your organization right so just because you're turning on fabric doesn't necessarily mean your organization is immature in powerbi right if your team is larger if you have rigor around using best practice analyzer on your semantic models or you're looking to tune or optimize your models right that that that right there already tells me that your your company's maturing right

**[00:38:45](https://www.youtube.com/watch?v=bOVBPAk-d24&t=2325s)**

when you're getting to the place where you're optimizing models and making them more performant to to make sure that they're not bigger what happen how how the progression typically goes here is users start with powerbi they build models at the pro level their models get larger they absorb more data at some point they outgrow the pro licensing and they move into potentially premium per user licensing which gives you much larger semantic models at some point you run into problems the model runs slow the visuals aren't working right and you need to start analyzing what's going on in the model your model design now needs to get better so I mean this is my progression too right I started making crappy models at the beginning just because it it worked and I okay it works let's move on I got more mature and then as I developed better models I got better at making those models more efficient okay so where does centic link Labs fit here now right if your company is in a place where your organization is mature around optimizing tuning building best practices in your models in your organization you may want to regularly review those things if you have a larger team building models there's going to be people regularly reviewing or should be

### [00:41:30](https://youtu.be/bOVBPAk-d24?t=2490)
people regularly reviewing or should be regularly reviewing your models to make sure you're not building stuff that's going to abuse Your Capacity so that being said when you go over to fabric if your organization is at that level of maturity where you're tuning driving for optimization cemented link Labs will be a great free tool and again I'm like free to help you automate

### [00:42:00](https://youtu.be/bOVBPAk-d24?t=2520)
again I'm like free to help you automate more of that here's like let me give you an example right I have a deployment process we're going to deploy some kind process we're going to deploy some reports part of your deployment of reports part of your deployment process will likely be running best business practice analyzer on your model in either test or maybe you run it in all your production models once a month something along those lines right that's the stuff you're going to need to do when you when your models get really large in size you're going to have lots of partition management to handle you're going to need other tooling to help you adjust

### [00:42:30](https://youtu.be/bOVBPAk-d24?t=2550)
need other tooling to help you adjust manipulate and then as your models get larger you're not going to want to just flat load all the tables sorry another thought here yeah users who start with powerbi they typically load the entire table all the time like when you start just load the whole table well eventually you learn that well not all data is changing from The Source system maybe I should be smarter about how I incrementally load the data and as your data grows in volume you also don't want to loow load like a 100 million records every night that's inefficient it's just wasteful at that point so then you start

### [00:43:00](https://youtu.be/bOVBPAk-d24?t=2580)
wasteful at that point so then you start thinking about okay how can I in the best way possible only load the data that I care about only load the data that's changing right now you have to do more things around partition management incremental refresh yeah but you've got to think about that's this is where the heavy automation of centic Link Labs supports this no so it supports it but man so that is actually a harder sell for me if I'm going to do the from the partition management because odds are

### [00:43:30](https://youtu.be/bOVBPAk-d24?t=2610)
partition management because odds are I've been doing this with a UI whether it's actually an SS SMS or tabl editor 3 for a long time if that's the case I'm sure it's faster in cementing link Labs but again to sell someone who has to then ramp up or create all these notebooks is like okay like where's the value ad for that case I to me I'm thinking really semantic link labs is not for everyone like every single

### [00:44:00](https://youtu.be/bOVBPAk-d24?t=2640)
is not for everyone like every single powerbi developer or heavy powerbi developer is going to want to get their Hands-On cementing Labs if anything it's probably one or two people creating them that are going to help manage a lot of other things I think I think most of what I'm seeing around semantic link Labs is around like so Greg asks a great question in the chat here he says do you start like are you at the place right now where you're going to recommend or start recommending building

### [00:44:30](https://youtu.be/bOVBPAk-d24?t=2670)
recommend or start recommending building Green Field brand new semantic models using only semantic link Labs is that what is that what you're saying let me just say it's possible to do that but I would also I would also argue that you may not want to start with that like it's bringing building brand new models probably not the best opportunity for this one it looks like a lot of the features around centic link labs are focusing at least initially on debugging

### [00:45:00](https://youtu.be/bOVBPAk-d24?t=2700)
focusing at least initially on debugging best business practice analyzer incremental refresh partition pieces there's a whole bunch of powerbi API stuff that you need to do that as an admin or a expert you're going to need to use period and you don't have to use Powershell now you don't have to use other tools yeah it just handles all the authentication for you so a lot of these other things that are used it just makes everything so much easier so I guess in that

### [00:45:30](https://youtu.be/bOVBPAk-d24?t=2730)
so I guess in that regard no so what so my question was about the people using cementing Labs I think there's the misconception is it's not going to be for every powerbi developer not every single heavy Enterprise developer is going to be needing to use cementing labs to your point there's probably an admin or someone setting it up for the on behalf of the team or on behalf of a department right because is everyone going in to

### [00:46:00](https://youtu.be/bOVBPAk-d24?t=2760)
right because is everyone going in to utilize Sy Labs probably not but some if you're a professional yes you are right if you how many how many powerbi professionals should be using verac analyzer are how many all of them yes if you're doing any if you're professional in powerbi analyzing every single one of you should be using vert pack analyzer it tells you how many columns there are what's the size of those columns which columns are most wasteful or not if you are any professional everyone should be that's

### [00:46:30](https://youtu.be/bOVBPAk-d24?t=2790)
professional everyone should be that's already built into Semitic link Labs so right there it's a single function that says Senpai Labs vertac analyzer send it the data set boom done verac answer comes back I don't need a third party to connect to a tool I don't need to do other stuff it's just literally right there boom done so like I think I disagree with your statement should any powerbi professional be using sub yeah they all should be using it if you're professional if you if what you're doing around semantic models

### [00:47:00](https://youtu.be/bOVBPAk-d24?t=2820)
what you're doing around semantic models and you have access to fabric 100% you should be learning about and using different modules from semantic link Labs it will make you more efficient yeah you should absolutely be using that but here's the thing if every single individual is creating their own notebook right and then just kind notebook right and then just from a wild West Point of View like of from a wild West Point of View like the run the BPA so are we pushing the data somewhere or do we have just a thousand notebooks right now like no there's again this if you're if you're a professional developer I'm already

### [00:47:30](https://youtu.be/bOVBPAk-d24?t=2850)
professional developer I'm already assuming you're going to be starting to pull some of the stuff together and centralize it right the same way that you're centralizing like lake houses and notebooks already in your data engineering right you're going to you're going to start making workspaces your professionals should all be working together and hopefully people are sharing notebooks between each other as well too and I think that's I think there's a lot of this where I think from an overlap point of view where like that BPA there's even a run bulk BPA why can't like hey I'm going to be the one creating these notebooks on

### [00:48:00](https://youtu.be/bOVBPAk-d24?t=2880)
the one creating these notebooks on behalf of the team that just run so I'm not saying you're not doing that's that's not what you're describing has nothing to do with using semantic link laps that is all to do with your company's internal process do you have people smart enough to build things that everyone can reuse that's your process that has nothing to do with the centic link lap itself so and I think I think you're arguing for something that is just a totally different scenario like you're arguing for does your company have

### [00:48:30](https://youtu.be/bOVBPAk-d24?t=2910)
arguing for does your company have process no so here's my worry all the things in here are great for the individual you take 10 people let's take 10 people that are now all running submitting Labs on the wild right like some of these are really powerful we're still dealing with apis and this is the argument here you're still dealing with the like the apis that require some permissions that can do a lot here especially from an automation point of view if you are not

### [00:49:00](https://youtu.be/bOVBPAk-d24?t=2940)
point of view if you are not careful everyone's running through this what are you so worried about I don't understand I don't I do not I literally do not understand your question here like how yes there are some modifying things but if you if you don't have access to the workspace or don't have access to the items in that workspace you can't touch them you can't modify things you don't have access to so it's not like it's it's not like this is ripping across parts of workspaces that are giving you more access to things you couldn't have before like so service

### [00:49:30](https://youtu.be/bOVBPAk-d24?t=2970)
couldn't have before like so service principle that's a moot point like it's not g that's no point in my mind now what I will argue though is you're you are right but once someone has figured out a pattern here these patterns get set they just run and you just move on like right for example like you're talking about running verac analyzer on all your models maybe that's something you decide is a tool or an automation you want to run every night this so yeah load your models at the end of loading your model maybe like in the morning or maybe even in the evening run verac

### [00:50:00](https://youtu.be/bOVBPAk-d24?t=3000)
maybe even in the evening run verac analyzer on all your models and store the data of the lake house that's this is the point someone says I'm going to do this these are the workspaces that are important to me and they just build the Automation and walk away now the notebook can be scheduled with a pipeline now you can have all this extra data coming off of your semantic models the metadata stuff and you can just capture that all away into Lakehouse and this provides one huge layer of automation going back to your organization so now you can say we've run BPA on all our models we've run vertec analyzer on all our models and by

### [00:50:30](https://youtu.be/bOVBPAk-d24?t=3030)
vertec analyzer on all our models and by the way we're already funneling all the data to a Lakehouse in a common data structure format and now you can be reporting on that and so now instead of having everyone going in and finding problems with models you can be more proactive hey this column is really small it dropped a lot one night what happened there was a data load issue okay now we can go look at it right the this model is getting extremely large in size for some reason it's been rapidly growing over the last couple weeks what's going on what's happening did something change these are all the signals and things that you're going to

### [00:51:00](https://youtu.be/bOVBPAk-d24?t=3060)
signals and things that you're going to want to administrate and monitor as your professional and in the powerbi and fabric space this tool just gives you the capability to do this at a much higher degree and I completely agree with that honestly a lot of the things too what I would love to see is someone who's a python Champion or who already has that experience a lot of these could be made into not I don't want to use the word templates but for anyone who's using powerbi it's like hey you want to view your measure dependencies I've created

### [00:51:30](https://youtu.be/bOVBPAk-d24?t=3090)
your measure dependencies I've created that notebook for the team right all you have to do is just plug in your workspace plug in your semantic model and it will run rather than taking someone who has to try to in a sense install create their own notebook a lot of these could be not even from a governance or security point of view from just an adoption point of view so I believe Cen L Labs is in preview or not in preview it's it's neither it's just a glass it's just a project that Microsoft has built

### [00:52:00](https://youtu.be/bOVBPAk-d24?t=3120)
just a project that Microsoft has built and supports it so it's a it's a wheel

**Speaker 1** [00:52:04](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3124s): and supports it so it's a it's a wheel it's a package that you import or you install into your notebooks okay so my understanding is semantic link is by default installed with all your python so that's already part of the image of all your of your all your items the semantic link Labs is not installed by default so you have to install this package and into the notebook you can even set up a custom environment in spark that says hey we're going to just use this I will argue though I have tested semantic Link in both Python and in fabric notebooks so when I've done that it works really well for both of them so the python notebook only and the spark notebooks in Python py spark cemented link labs and semantic link both seem to work in both of them very well which is awesome that makes everything incredibly easy for me

**Speaker 1** [00:53:02](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3182s): so as we get near the end and I think we've talked about from the user point of view the capabilities I don't think either of us are going to argue in terms of how much better this is than Powershell or even some of the the old Solutions Mike if if I if you took a team today and there are you implementing cementing link Labs across the board and what would be the top three things you're going to migrate from the old apis or xmla to your point you talked about we talked about incremental refresh we've talked about the activity log what would be the top three things that you think cementing link Labs could automate or from a priority point of view

**Speaker 1** [00:53:44](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3224s): yeah if if I'm looking at the things that are the best opportunities in semantic link Labs it's all around the vertac analyzer so that's really a good useful tool I'm also thinking that it is a lot of the automation things around getting data out you know verac analyzers there breast bu practice those are available to us doing things in bulk there super useful I'm finding a lot of value in complex refresh patterns inside semantic models so which which partition to refresh when your models get really large I like using centic link to automate more of the model experiences and automate more of the how how to very strategically refresh these models

**Speaker 1** [00:54:27](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3267s): typically this is all done in Powershell or other scripting things if I can just so think of it this way I have a pipeline I'm going to load some data into a table that data is now being loaded into semantic models but if that data is really large if we talking about Big Data stuff you don't want to refresh the whole thing it it's just too much so what you can do now in the pipeline is run your loading process copy the data and then at the end of it you can execute a notebook that then does the fancy refreshing policy that you may need again you're you're now at the place where you're optimizing your model you're bringing cost down because I don't want to refresh the entire model all the time there's a whole bunch of automation things here that I think really make this incredibly powerful

**Speaker 1** [00:55:13](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3313s): so it's it's to me if you're an admin of anything powerbi 100% you better be learning CTIC link Labs it will make your life 100% easier it will simplify a lot of the mundane tasks you've already been doing and I think you know Jake in in the comments here is making a really good point this semantic link Labs is like that stick sometimes that you need to beat the developers over the head with hey you're not doing this right right either either you you automate this and you start sucking out the data in mass and then you can now go back and have the conversation with hey your model doesn't conform to our best business practice analyzer hey your model is getting too large hey these are proactive things you could use that's going to help you make everything easier to work with in powerbi or even fabric for that matter

**Speaker 2** [00:56:02](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3362s): anyway yeah no I I love it I think for me the the best practice analyzer obviously is a gold standard and be able to push that data in I was trying to look does this can you connect and actually do the activity log with the smiting Labs or no yes yeah

**Speaker 1** [00:56:18](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3378s): activity log you can do activities based on a workspace you can do activ you can do the artifacts there's a cat there's a a cataloging API that it hits as well so it could also do again these are API calls that would have been three or four calls in a row right to get the data out what this thing does is it just Waits

**Speaker 1** [00:56:36](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3396s): so to do the cataloging calls of a workspace geez you could I'm just telling you this this is my point Tommy the the the fact that this tool has so many functions in here it does so many things it's just incredible how capable this is and this is where I'm like I don't okay fine it may be a little bit harder to do some of these things that I used to do in tab your editor or Dack Studio maybe right but now that I have all these really rich things in a notebook why would I want to use other tools instead now I can just use this notebook to automate things

**Speaker 1** [00:57:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3434s): let's let me give you another example Dax Studio why do I use Dax Studio I use Dax Studio to write and execute Dax queries well I can write them now in a notebook I can have multiple cells to me the experience of writing multiple deck statements inside a notebook is actually much better honestly another reason you well I mean think of it right if I have a cell and I need to copy the cell again multiple times I can just take my Dax code and write a different evaluate statement and I can see the results of the prior statement and the new one right side by side I would prefer to write dacks in notebooks honestly

**Speaker 1** [00:57:47](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3467s): so that that's bet to me that's a better experience I want to track all my changes in different cells and compare them love that experience so you can also do timings with things so if you you know Dax Studio does a good job of timing how long a query will run and we all know you can write Dax multiple different ways why not write a notebook that accepts a Dax statement and then runs all the tests you need to do right now in tab in Dax Studio there's no automation around okay I'm going to run this Dax query three times clear the cache each time all that can now be automated in a notebook so now you can do DAC Studio level things with Automation and repeatedly doing automated runs on things without having without requiring Dex dud anymore

**Speaker 1** [00:58:33](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3513s): this is where I'm like your mind is now the limit of your creativity it's not the tools anymore that then that's may be my point Sorry I'm getting really excited about this

**Speaker 2** [00:58:46](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3526s): one awesome well dude I I hope for a lot of people if you were hesitant on starting with notebook and starting with python you're like I really don't have a good reason this is probably the the most perfect reason to start learning and dive in I agree I regardless I think this is a a tool in Your Arsenal that you will need like it's it's definitely frir now has it caught up to all the other Rich tools that are out there Maybe not maybe not quite yet but based on the capabilities it can do now and the things that the semantic link Labs can do that other tools cannot I I think I'm I have my I have my I I'm making a bet I think this tool is going to continue to get better and I think it's going to continually close the gap more and more and more between all the other tools that you have out there and you know for the companies that complain like there's various companies that complain like well we can't use these other tools because you know it's a third party tool and Microsoft should just support it and all this stuff now it's supported right a lot of the tools other tools that are out there you don't need them now I don't think you need to use ta editor I don't think you need Dex studio anymore I think this closes the gap on a lot of those things so anyways that's where I stand on this

**Speaker 2** [01:00:03](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3603s): one awesome well this has been wonderful I hope people who are just diving into Fabric or just getting started and just to make sure for those who are still on powerbi premium this is a fabric only correct

**Speaker 1** [01:00:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3615s): this is a fac only feature so this is you know we're talking notebooks centic link Labs only works in a notebook experience so you have to turn on fabric to get this working but you can go check it out in a trial you can get them Microsoft fabric trial on your users if that is allowed by your admin so you can go check things out this is a great place to get started I think this makes a lot of the admin stuff or API pieces that you normally couldn't touch it makes it way easier way easier to get into touching these apis for both Fabric and powerbi the authentication stuff is just handled

**Speaker 1** [01:00:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3648s): so I'm I'm super pro this tool is amazing I should probably do an entire YouTube series on different patterns that this thing can do and how amazing it is because I think there's there's there's a number of fundamental features that have come out for powerbi in this year this is one of these fundamental features that people will need to learn it will change how you build stuff moving forward it will make you more efficient so I you've got to learn it I think it's just a yeah it's a given

**Speaker 2** [01:01:17](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3677s): anyways any other final thoughts Tommy for you

**Speaker 1** [01:01:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3680s): no I think this is perfect I think for a lot of people who are not sure how to get started this is what a more what a better or what a perfect way to get started with all the things that you're already doing from an automation point of view and just getting started with python notebooks

**Speaker 2** [01:01:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3697s): excellent with that we just want to say thank you very much for all the time you spent on the podcast today I thank you for just checking out us and looking around semantic link Labs I think you're going to love it it's a great feature if you like this discussion if you didn't know about semantic link labs and you want others to kind of see the surface area of what surf link semantic link Labs can do please share the podcast other people I think it's a great a great opportunity just to kind of get yourself exposure to things you're not used to

**Speaker 2** [01:02:04](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3724s): so that being said we really really appreciate it if you would share the podcast with other people we don't advertise we just do this for fun and if you found value from this we'd love it if you'd share it to somebody else

**Speaker 2** [01:02:13](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3733s): Tom me where else can you find the podcast

**Speaker 1** [01:02:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3735s): you can find us on Apple Spotify wherever your podcast make sure to subscribe and leave a rating it helps us out a ton share with a friends since we do this for free you have a question idea or a topic that you want us to talk about a future episode head over to powerbi.com

## Episode Transcript

Full verbatim transcript — click any timestamp to jump to that moment:

<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=32s" target="_blank">0:32</a> good morning and welcome back to the explicit measures podcast with Tommy and Mike good morning everyone welcome back
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=40s" target="_blank">0:40</a> good morning Mike how was your weekend
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=44s" target="_blank">0:44</a> it went very quickly been very busy with software and Building Things and lots of projects going on but I took a little bit of time to relax
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=52s" target="_blank">0:52</a> I have for whatever reason reinvigorated a nice good old cold or flu or something on me oh no I am just feeling congested so I did a lot of lay and low
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=62s" target="_blank">1:02</a> a lot of we are doing a larger kitchen remodel in our in our kitchen doing some refacing we're leaving the cabinets alone but we're doing new countertops
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=72s" target="_blank">1:12</a> some big things that my wife has won and so it's been very exciting to see that come along but needless to say we've been eating out a lot because we don't have a kitchen there's no sink it's it's out of it's out of commission right now for a little bit
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=82s" target="_blank">1:22</a> dude is it a we're doing a full revamp or we're just doing like cabinets like a little little
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=89s" target="_blank">1:29</a> I gu you you would call it like refacing the cabinets so the cabinets are getting refaced so they're and all new doors and handles
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=97s" target="_blank">1:37</a> we are adding some pull out drawers inside the cabinets and then new countertops so we're not like going down to like studs we're not going down to like drywall
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=107s" target="_blank">1:47</a> we're just using what's already there the the structure is not changing there's nothing we're not adding new cabinets we're not moving things around it's it's all the same stuff
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=114s" target="_blank">1:54</a> okay needless to say you can't use it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=119s" target="_blank">1:59</a> well it's been nice because while we've been having worked done on the cabinets we've been able to use the use the kitchen but now we just we're at the very end
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=128s" target="_blank">2:08</a> and at the very end they have to take out the plumbing they put new countertops in and that's when you lose like the sink so hopefully today we get the use of our sink back
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=139s" target="_blank">2:19</a> we got now the hard decision what backsplash do you want
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=142s" target="_blank">2:22</a> oh you should call my wife she was in a previous life a interior designer
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=149s" target="_blank">2:29</a> oh excellent
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=153s" target="_blank">2:33</a> what she and she married me the non interor designer no no colors are are not a thing did that like I think a lot of people depending on the colors that you learned those are the colors that you actually see
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=168s" target="_blank">2:48</a> so my wife tested me out on this and she's like what color is it I'm like well you didn't learn you didn't learn mauve I know the Rainbo and I know that variations teal yes slightly more teal yeah but very teal
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=187s" target="_blank">3:07</a> yeah I think I think my wife has 50 colors she knows wow and so like I was looking at something oh it's blue she like no it's acrylic da d d du yeah like I couldn't see it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=198s" target="_blank">3:18</a> but I also never learn what th those colors are so it's amazing at least for an interior designer
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=204s" target="_blank">3:24</a> an interior designer interesting I I don't know how to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=211s" target="_blank">3:31</a> I don't I'm not sure if I would be able to pick out or describe multiple colors for people I could I could probably tell you like what some general colors are to your point Tommy but I couldn't be all all these nuanced colors like green
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=221s" target="_blank">3:41</a> seafoam green all these other like I wouldn't know I would not know these things I would just yeah it's I'm very simple in that regard
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=232s" target="_blank">3:52</a> it's interesting I'm not good at yeah I'm not at making designs but I'm really good at like looking at other things and being able to say oh I like that oh this is a good design
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=242s" target="_blank">4:02</a> so I'll I'll tie this back here to powerbi a little bit when I look at colors or color pettes I'm probably not the best on knowing how to create something from scratch but I can do a really dang good job of going into figma and finding a different report that I like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=258s" target="_blank">4:18</a> and copying it or bringing down the colors or like building a style that looks similar to that object and that's what a lot of what I do when I build reports
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=274s" target="_blank">4:34</a> I'll go find an image a picture or someone's mockup of a dashboard and I'll say oh that looks interesting and then I'll go Riff on that design make it my own and then build a lot of extra features and pages and backgrounds for it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=292s" target="_blank">4:52</a> so a lot of times I'll do that I'll take inspiration from other other people's works I think it's like the phrase great artists no what is it great artists borrow or something like that or steal I don't remember that phrase is great
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=305s" target="_blank">5:05</a> good artist borrow great artist steal or copy that's yeah I think Ste job said it so can you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=309s" target="_blank">5:09</a> articulate oh great arst steel is I think is the the phrase well at least that's what Chad gpg says can you articulate when you see something like what you like about it or is it more the I just like that where even when it comes to design or your kitchen
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=325s" target="_blank">5:25</a> oh good question yeah I would I'd say I can probably pick up on pieces of it I can articulate what pieces of the design that I really like and that's usually what I spend my time on mimicking
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=339s" target="_blank">5:39</a> I'll give you just a really weird I maybe history I guess previously I was well not previously when we first got married we didn't have much monies and and so year we wanted to do Christmas cards
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=348s" target="_blank">5:48</a> and and so my wife would go online and she'd see all these Christmas cards and she like oh that's an interesting Christmas card and she would show me the picture of the Christmas card
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=356s" target="_blank">5:56</a> and I took it as a challenge to go into like a computer program and like mimic that card like look at the details figure out how to make it replicate it and I would replicate these Christmas cards by making my own design
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=370s" target="_blank">6:10</a> and I would make it entirely out of like illustrator and then we'd go to the store and we'd print off a bunch of pictures or or im images off of like Walmart or whatever
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=383s" target="_blank">6:23</a> and then we would set out a bunch of photos basically but it was of an image that I had designed now granted in the early days I had nothing but time it was just time computer building
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=400s" target="_blank">6:40</a> so I had there was not as many kids I could spend four hours just trying to figure out how to get the design of the thing to work I'm Googling things I'm I'm learning about illustrator and Adobe products and maybe I'm using some photoshop in there a little bit too
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=422s" target="_blank">7:02</a> so I'm doing all this work with this program just to make these good-looking images I think that helped a lot because now I can look at other images and know how they're built it's like a skill
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=432s" target="_blank">7:12</a> it's a little bit it's something you have to like learn how to do and this is I think one of the things that is difficult for people in powerbi is we're really good at data modeling and bringing together the data structure
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=445s" target="_blank">7:25</a> I think the majority of the people building reports don't have the eye or the visual or the aesthetic side of things and that's where people need a little bit of help like and and you could probably you could easily spend as much time doing the data modeling double that time and you could do all the report visual styling right you could e so where do you cut Corners we've had this discussion a long time ago of like what what's the right balance of that inside you're reporting anyways
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=452s" target="_blank">7:32</a> no no I I'm honestly the same thing for me the design side took a long time for me to actually so to speak understand what I was trying to do or actually put a design together that someone make sense because I was analytical I didn't know what I was supposed to build I just had things that I thought looked good but I think it books help
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=477s" target="_blank">7:57</a> the biggest thing that actually helped me was asking someone else who had no stake in those in the data like a friend or spouse like hey what is this telling you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=491s" target="_blank">8:11</a> yeah so I like it awesome let's Jo let's before we jump into our news topic today we just start a little rambling here at the beginning so we'll we'll stop rambling here for a moment today we're going to talk about semantic link Labs what updates have recently been coming out
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=506s" target="_blank">8:26</a> this tool Is Amazing by the way this is incredible tool it does so many different things and then what are different scenarios or patterns on when you use semantic link labs to work inside your tenant now to be very clear semantic link Labs is a python Library based on another Library called Senpai
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=526s" target="_blank">8:46</a> which I had to really think about this was so it's Senpai because semantic link semantic models right semantic models is the first part of it and then py as python so it's like spark Pi spark right so it be Pi spark or or the other languages spark SQL right
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=554s" target="_blank">9:14</a> so those are the things that are relating to that Library the library semantic link or semantic yeah semantic link is directly built from microsofts maintained by them and allows you direct access to the semantic models in your in your tenant but does a lot more of that semantic link Labs extends this heavily
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=575s" target="_blank">9:35</a> and so we're going to unpack a little bit more of semetic Link Labs where to use it where we're finding with it right now and jumping in there that'll be our for today all right Tommy give us some news
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=577s" target="_blank">9:37</a> so there's a few things with that actually went under the radar that and because we didn't talk about it didn't mean no one read it but I think a few articles if we didn't say it then not important not don't talk about in the podcast did the feature actually get released that's that's what we're talking about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=599s" target="_blank">9:59</a> I'm actually surprised we haven't talked about this so the first one I want to bring up is the template dashboard for workspace modering which I thought was huh maybe I don't know why the immediate interest wasn't there but these real time dashboards work with your workspace monitor that you're used to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=620s" target="_blank">10:20</a> and they're actually Community built they're open sourced and they can download through GitHub and really what they help

<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=626s" target="_blank">10:26</a> through GitHub and really what they help you allow you to do is go through your environment and like basically the templates that we're used to when it comes to monitoring that Microsoft does that we'd have to then like live connect if we wanted to modify this they're all this community build and you can edit the desktop version and have it to your to your customization which is really neat so this is this is a tool that Microsoft has built to enable users
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=656s" target="_blank">10:56</a> that Microsoft has built to enable users to get better analytics about their workspaces and it's using in a monitoring event house so this is streaming analytics directly into a collection an area or store basically and then from that store they're giving you some reporting kind they're giving you some reporting off the shelf out of the box tooling of off the shelf out of the box tooling inside their fabric toolbox on GitHub so fabric toolbox is the GitHub repo and I'll make sure I put both of these links down here below in the in the chat windows for everyone to see how that works let me get those over here
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=688s" target="_blank">11:28</a> that works let me get those over here to the chat window if you want go check those out we'd highly recommend it really good tools yeah be curious if anyone else is using these or seeing them one thing I will caution you here I believe my understanding this I haven't played with it so I got to be I've read the documentation on it but I haven't really gone into turning it on yet my understanding is this is the same thing as turning on like log analytics for your workspace so this could get very noisy or there could be a lot of large volume of data coming over to your fabric workspace anytime you send more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=720s" target="_blank">12:00</a> fabric workspace anytime you send more things like this or turn on any real time Eventing you're immediately going to consume more capacity workspace so just my big caution with this is you can turn this on it's a good solution it is streaming however just be cautious because when you turn it on it will send a lot of data potentially every interaction every query all the details from the workspace that's happening will be sent directly to the stream good but I would probably recommend don't turn it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=750s" target="_blank">12:30</a> I would probably recommend don't turn it on and forget it I would definitely recommend turn it on and just watch it make sure you turn it off because it could potentially add a lot of costs or a lot of additional compute units to your skew so just be aware of that as you use the tool so just a point out there that's probably a really good thing because people might not know how much data is actually going in and yeah I thought it would be through the normal monitoring that you get with the admin but no
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=782s" target="_blank">13:02</a> that you get with the admin but no interesting all it's a different solution so they're trying to be more transparent I was talking with oh shoot I forgot his name he works for Microsoft and he just did a you he just did our Milwaukee User Group area recently the name will come to me like literally halfway through the podcast but anyways we had the PM speaking to all admin monitoring and going through the details there Tommy he spoke at your user group too oh Gil revie no after Gil that was the same
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=813s" target="_blank">13:33</a> Gil revie no after Gil that was the same session it was after Gil was doing his oh our main speaker forgot his name Milwaukee I remember used to work in Milwaukee tool sounds like I don't even know anyways we'll figure it out later I'll go get the name Tommy will go look up his user group session and he'll go get the name anyways Tim Bendis there it is someone in the chat Tim Bendis is Microsoft employee and went through all the details of the monitoring app there's a lot of things coming and Microsoft is trying to make
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=844s" target="_blank">14:04</a> coming and Microsoft is trying to make the entire modeling experience easier to understand thanks Dan while I stumbled around there for a bit appreciate it all right let's move on to the next one what's our next news item Tommy another just announcement I guess there's really no feature coming out but it came out on January 29th the private preview private preview of everyone can't get to it quite yet yeah of the migration assistant for fabric data warehouse so basically ancy and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=876s" target="_blank">14:36</a> warehouse so basically ancy and Microsoft were letting know that there would be a migration assistant last year they're currently running a priview assistant or a private preview with the migration assistant they're looking for participants and they're look you can complete a form and you can actually get access to the Mig migration assistant and again that migration assistant is help accelerate your SQL Server syap other warehouses to fabric data warehouse and I think the idea here is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=907s" target="_blank">15:07</a> warehouse and I think the idea here is they're they're trying so the reason they go to private preview is they think they've got the tool or the migration solution complete but they're testing out with the first couple customers so while we can't necessarily always access these private previews just be mindful of that means usually behind the private preview is actually will release something fairly shortly that means we're we're at the very last stages of bug fixing feature refinement and then there will be a tool
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=938s" target="_blank">15:38</a> refinement and then there will be a tool or a repo or GitHub or something that will tell you how to leverage this migration so I guess the point here is if you want to migrate SQL Server SQL dedicated pools or other warehouses to a fabric data warehouse you should now be able to soon go through a migration process for that so anyways there is a form on this page so if you would like to participate in this one you can apply to be part of the private preview it's a form on the page that I just sent
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=968s" target="_blank">16:08</a> it's a form on the page that I just sent out in the chat window so check that out you can go see the form there if you would like to try and get involved there I'll actually just see if I can link to the form directly in case you want to go try this out anything else Tommy one last thing that I'm surprised hasn't been one of our major topics January 28th fabric update this is big I think this is the biggest one of the of the newest items here yeah ownership takeover for fabric items and what this feature is really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1001s" target="_blank">16:41</a> items and what this feature is really allows fabric users with the right permissions to take ownership at an individual fabric item and the since if you remember the same experience in data flows gen one because you couldn't collaborate the only way you had actually take over to edit and so you can actually take over as a user in individual fabric item and then the users so basically some of the limitations there are does not support mirrored database items but this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1031s" target="_blank">17:11</a> mirrored database items but this is pretty cool because we've talked about ownership and governance and security here in a workspace yes and I'm really excited to see this because I hope what I first I hope it's not the same experience as data flows gen one takeover which was just can I edit but at the same time this is a big deal because we want to have some ownership of more than just a folder more than just a workspace on particular items now I don't think this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1064s" target="_blank">17:44</a> particular items now I don't think this umed modifies your ability to edit if you already could edit it like let's say a particular item let's say if I'm in a Lakehouse and I had permissions to write nothing changes I'm just the owner of that set artifact well this is the issue around like if someone leaves your organization and they own something like a Lakehouse so this is solving a direct problem where you had a lake house previously if I created it and moved on or let the company or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1094s" target="_blank">18:14</a> company or whatever that item would be linked to me it would be have the owner would be my name and in order to switch that ownership from me to Tommy it was requiring a help desk ticket you needed a help desk ticket to physically change the item The Lakehouse from my name to Tommy's name this is like basic featuring right this is basic features you can't you can't let people create things and not be able to switch ownership of them especially if all the items in the workspace are attached
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1124s" target="_blank">18:44</a> the items in the workspace are attached to people one of the things I'd like to see here with this one I don't know if they've talked about in this one specifically but I think they're not talking about service principles or workspace principles yet no right so the one thing here to consider it's in the limitation of this feature it says fabric item takeover does not cover ownership takeover as a service principle so if you have a service principle or a workspace identity those do not work with this takeover experience and there are some other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1154s" target="_blank">19:14</a> experience and there are some other things here that don't support changes right mirrored Cosmos database mirrored SQL databases mirrored snowflake these are other features that are not quite there yet I would imagine eventually they're going to close the gap on these things but yeah they have to this was a big gap in my mind like I can't tell you the number of people that had pain around trying to move lake houses between users and we were just stuck and we're like the best thing to do is a help desk ticket that's absurd like this is very basic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1184s" target="_blank">19:44</a> that's absurd like this is very basic function so it's it's good that they're cleaning this up this is definitely a pain point of my own I've gone through a number of projects where this was quite painful I'm very happy to see this one being resolved yeah and I think there's planned to have API support so you can actually just bulk edit and take over from a user which will be really nice right now everything's just the UI still I'll take it yeah I think the API stuff is going to be really good and apis I feel like are required for more of the continuous
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1214s" target="_blank">20:14</a> required for more of the continuous integration continuous deployment the cicd type things where you're going to need to programmatically like publish an item let's say a lake house and you want to regularly publish who has access to that item because when you think about like continuous integration continuous deployment a lot of people think it's deployment pipelines which it is it does some of that but there's a lot of other things that you need in addition to that like who's the owner of this item who's the owner or members of the workspace did people accidentally add themselves to those workspaces and when
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1245s" target="_blank">20:45</a> themselves to those workspaces and when you go redeploy the items you want to again update the permissions to the

<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1249s" target="_blank">20:49</a> again update the permissions to the workspace so that's always consistent
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1250s" target="_blank">20:50</a> workspace so that's always consistent and you have the exact right access to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1253s" target="_blank">20:53</a> and you have the exact right access to the items in the workspace there's a lot
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1255s" target="_blank">20:55</a> the items in the workspace there's a lot more things that can go on when you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1256s" target="_blank">20:56</a> more things that can go on when you deploy things which the API will will
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1258s" target="_blank">20:58</a> deploy things which the API will will be I think very useful for assisting
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1261s" target="_blank">21:01</a> be I think very useful for assisting with that okay that's it for news
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1263s" target="_blank">21:03</a> with that okay that's it for news anything else we should talk about I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1266s" target="_blank">21:06</a> anything else we should talk about I think that's good from a news and you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1268s" target="_blank">21:08</a> think that's good from a news and you got anything else nope that's good for
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1270s" target="_blank">21:10</a> got anything else nope that's good for me I'm that's all the the fun things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1272s" target="_blank">21:12</a> me I'm that's all the the fun things that I think I want to talk about for
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1273s" target="_blank">21:13</a> that I think I want to talk about for now all right let's jump into our main
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1276s" target="_blank">21:16</a> now all right let's jump into our main topic today Tommy give us an overview
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1278s" target="_blank">21:18</a> topic today Tommy give us an overview we're g to talk about semantic link Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1281s" target="_blank">21:21</a> we're g to talk about semantic link Labs Let's let's get a little bit of an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1283s" target="_blank">21:23</a> Let's let's get a little bit of an overview of what that tool is yeah so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1285s" target="_blank">21:25</a> overview of what that tool is yeah so semantic link Labs is a python package
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1287s" target="_blank">21:27</a> semantic link Labs is a python package part of Pi in fabric notebooks that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1291s" target="_blank">21:31</a> part of Pi in fabric notebooks that really allows you to do a ton of
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1296s" target="_blank">21:36</a> really allows you to do a ton of Administration governance querying
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1299s" target="_blank">21:39</a> Administration governance querying analytics on all of your fabric items
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1303s" target="_blank">21:43</a> analytics on all of your fabric items there's a huge parts of this with when
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1305s" target="_blank">21:45</a> there's a huge parts of this with when it comes to Administration getting
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1307s" target="_blank">21:47</a> it comes to Administration getting groups so all of your API calls that you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1309s" target="_blank">21:49</a> groups so all of your API calls that you normally do for those old school who had
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1311s" target="_blank">21:51</a> normally do for those old school who had a Powershell script from ruy Romano
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1315s" target="_blank">21:55</a> a Powershell script from ruy Romano that old package all those calls are
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1318s" target="_blank">21:58</a> that old package all those calls are available in this python package so I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1319s" target="_blank">21:59</a> available in this python package so I don't have to worry about all those
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1323s" target="_blank">22:03</a> don't have to worry about all those additional configurations but it does a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1326s" target="_blank">22:06</a> additional configurations but it does a ton more really any artifact that I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1330s" target="_blank">22:10</a> ton more really any artifact that I want to actually go through like a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1332s" target="_blank">22:12</a> want to actually go through like a semantic model and I wanted to pull a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1335s" target="_blank">22:15</a> semantic model and I wanted to pull a table or a column and make a data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1337s" target="_blank">22:17</a> table or a column and make a data frame that I can if I want to get
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1340s" target="_blank">22:20</a> frame that I can if I want to get deployment pipeline information I can I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1343s" target="_blank">22:23</a> deployment pipeline information I can I it's a really the full stack in terms of
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1347s" target="_blank">22:27</a> it's a really the full stack in terms of help me manage my fabric
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1349s" target="_blank">22:29</a> help me manage my fabric tenant I feel like this I feel like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1351s" target="_blank">22:31</a> tenant I feel like this I feel like semantic link Labs requires a nice
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1354s" target="_blank">22:34</a> semantic link Labs requires a nice acronym
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1355s" target="_blank">22:35</a> acronym SL
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1358s" target="_blank">22:38</a> SL s semantic link Labs anyways that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1362s" target="_blank">22:42</a> s semantic link Labs anyways that being said I wanted you check out so I'm
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1364s" target="_blank">22:44</a> being said I wanted you check out so I'm put in a link in the in the description
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1365s" target="_blank">22:45</a> put in a link in the in the description here semantic link Labs is an extension
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1368s" target="_blank">22:48</a> here semantic link Labs is an extension of the Senpai Library the Senpai library
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1372s" target="_blank">22:52</a> of the Senpai Library the Senpai library is semantic link which allows the python
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1375s" target="_blank">22:55</a> is semantic link which allows the python notebook to connect or attach to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1378s" target="_blank">22:58</a> notebook to connect or attach to semantic models semantic link Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1380s" target="_blank">23:00</a> semantic models semantic link Labs extends this semantic link Labs goes Way
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1383s" target="_blank">23:03</a> extends this semantic link Labs goes Way Beyond just the the semantic model it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1385s" target="_blank">23:05</a> Beyond just the the semantic model it adds things like touching the best
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1388s" target="_blank">23:08</a> adds things like touching the best business practice analyzer or automation
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1390s" target="_blank">23:10</a> business practice analyzer or automation around that so BPA is a really great
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1392s" target="_blank">23:12</a> around that so BPA is a really great tool that's something that came from
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1394s" target="_blank">23:14</a> tool that's something that came from tabular that's an idea that came
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1395s" target="_blank">23:15</a> tabular that's an idea that came from tabular editor where you could make
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1397s" target="_blank">23:17</a> from tabular editor where you could make rules and and test rules about labs and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1400s" target="_blank">23:20</a> rules and and test rules about labs and libraries about your semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1403s" target="_blank">23:23</a> libraries about your semantic model right this column name is incorrect
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1406s" target="_blank">23:26</a> right this column name is incorrect there's a relationship in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1409s" target="_blank">23:29</a> there's a relationship in this model that seems inappropriate
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1410s" target="_blank">23:30</a> this model that seems inappropriate right there's a many to many
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1411s" target="_blank">23:31</a> right there's a many to many relationship right it it can detect
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1413s" target="_blank">23:33</a> relationship right it it can detect those things it touches other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1415s" target="_blank">23:35</a> those things it touches other things like the vertac analyzer that's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1417s" target="_blank">23:37</a> things like the vertac analyzer that's now been integrated into the tool you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1419s" target="_blank">23:39</a> now been integrated into the tool you can do other things check things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1423s" target="_blank">23:43</a> can do other things check things for direct Lake figure out make sure
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1425s" target="_blank">23:45</a> for direct Lake figure out make sure your model is within the guard rails of
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1427s" target="_blank">23:47</a> your model is within the guard rails of what direct Lake can do or not do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1429s" target="_blank">23:49</a> what direct Lake can do or not do refresh clear your cache run Dax queries
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1433s" target="_blank">23:53</a> refresh clear your cache run Dax queries you can manage query scaling out on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1435s" target="_blank">23:55</a> you can manage query scaling out on your different models visualize a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1437s" target="_blank">23:57</a> your different models visualize a refresh what happens during a refresh
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1439s" target="_blank">23:59</a> refresh what happens during a refresh cycle you could do look at the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1443s" target="_blank">24:03</a> cycle you could do look at the measure dependency tree so basically you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1445s" target="_blank">24:05</a> measure dependency tree so basically you could pick a measure in the model and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1446s" target="_blank">24:06</a> could pick a measure in the model and see all the other measures that depend
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1448s" target="_blank">24:08</a> see all the other measures that depend on that measure inside a tree diagram
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1451s" target="_blank">24:11</a> on that measure inside a tree diagram it's just amazing it has a whole bunch
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1453s" target="_blank">24:13</a> it's just amazing it has a whole bunch of reporting things and this is this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1454s" target="_blank">24:14</a> of reporting things and this is this is one of the parts of where I think this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1457s" target="_blank">24:17</a> one of the parts of where I think this is why I'm so excited about semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1459s" target="_blank">24:19</a> is why I'm so excited about semantic link Labs because it we're talking about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1461s" target="_blank">24:21</a> link Labs because it we're talking about semantic model things but then when we
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1463s" target="_blank">24:23</a> semantic model things but then when we transition over to semantic link Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1465s" target="_blank">24:25</a> transition over to semantic link Labs can do things in the report the report
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1468s" target="_blank">24:28</a> can do things in the report the report has a best report analyzer report best
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1471s" target="_blank">24:31</a> has a best report analyzer report best practice analyzer and that runs also in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1474s" target="_blank">24:34</a> practice analyzer and that runs also in semantic link Labs you can get report
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1476s" target="_blank">24:36</a> semantic link Labs you can get report metadata you can view broken reports you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1478s" target="_blank">24:38</a> metadata you can view broken reports you can set a report theme migrate things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1481s" target="_blank">24:41</a> can set a report theme migrate things about reports rebind reports this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1484s" target="_blank">24:44</a> about reports rebind reports this is stuff that doesn't have any capability
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1485s" target="_blank">24:45</a> stuff that doesn't have any capability inside tblo editor tblo editor has no
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1487s" target="_blank">24:47</a> inside tblo editor tblo editor has no capability for you to do these things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1489s" target="_blank">24:49</a> capability for you to do these things out of the box and Michael kosi is the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1492s" target="_blank">24:52</a> out of the box and Michael kosi is the the one who's building this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1493s" target="_blank">24:53</a> the one who's building this project it does a ton of other stuff
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1495s" target="_blank">24:55</a> project it does a ton of other stuff around like capacities lake houses
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1497s" target="_blank">24:57</a> around like capacities lake houses notebooks it talks to all of the apis
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1500s" target="_blank">25:00</a> notebooks it talks to all of the apis for fabric so it talks to all the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1502s" target="_blank">25:02</a> for fabric so it talks to all the powerbi apis all the fabric apis all the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1505s" target="_blank">25:05</a> powerbi apis all the fabric apis all the Azure apis and now Microsoft graft apis
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1509s" target="_blank">25:09</a> Azure apis and now Microsoft graft apis and it also now supports service service
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1511s" target="_blank">25:11</a> and it also now supports service service principles for using it to talk to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1513s" target="_blank">25:13</a> principles for using it to talk to things this is like your Swiss
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1515s" target="_blank">25:15</a> things this is like your Swiss army knife if it does everything yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1518s" target="_blank">25:18</a> army knife if it does everything yeah and I I believe Kurt we talked about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1521s" target="_blank">25:21</a> and I I believe Kurt we talked about this before with KT bu because he had an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1523s" target="_blank">25:23</a> this before with KT bu because he had an article about going through your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1526s" target="_blank">25:26</a> article about going through your entire report just using senpai like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1528s" target="_blank">25:28</a> entire report just using senpai like actually updating the theme updating
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1531s" target="_blank">25:31</a> actually updating the theme updating visual Properties or updating broken
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1533s" target="_blank">25:33</a> visual Properties or updating broken visuals yeah has done demos of this and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1536s" target="_blank">25:36</a> visuals yeah has done demos of this and then Kur picked up on it and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1537s" target="_blank">25:37</a> then Kur picked up on it and also written through and and did some
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1539s" target="_blank">25:39</a> also written through and and did some talking about that as well but I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1542s" target="_blank">25:42</a> talking about that as well but I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1542s" target="_blank">25:42</a> talking about that as well but when you think about semantic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1545s" target="_blank">25:45</a> mean when you think about semantic link Labs you're thinking only semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1546s" target="_blank">25:46</a> Labs you're thinking only semantic model I want you to open your mind up and say
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1548s" target="_blank">25:48</a> I want you to open your mind up and say this is way
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1549s" target="_blank">25:49</a> this is way more has way more features than just the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1552s" target="_blank">25:52</a> more has way more features than just the semantic model it's bigger than
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1554s" target="_blank">25:54</a> semantic model it's bigger than that yeah and no exact one of the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1557s" target="_blank">25:57</a> that yeah and no exact one of the things to they have direct Lake
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1559s" target="_blank">25:59</a> things to they have direct Lake migration for any of your models
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1562s" target="_blank">26:02</a> migration for any of your models which is absolutely insane so a few
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1564s" target="_blank">26:04</a> which is absolutely insane so a few other things just to make sure that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1566s" target="_blank">26:06</a> other things just to make sure that we're covering all the things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1568s" target="_blank">26:08</a> we're covering all the things that it can actually do this is just
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1570s" target="_blank">26:10</a> that it can actually do this is just this python package it can you report
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1573s" target="_blank">26:13</a> this python package it can you report metadata you said the report
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1575s" target="_blank">26:15</a> metadata you said the report analyzer view measure the dependency
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1578s" target="_blank">26:18</a> analyzer view measure the dependency tree visualize and refresh
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1580s" target="_blank">26:20</a> tree visualize and refresh autogenerate descriptions or measures in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1583s" target="_blank">26:23</a> autogenerate descriptions or measures in bulk lake house is optimize lake house
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1586s" target="_blank">26:26</a> bulk lake house is optimize lake house tables vacuum lakes lake house table
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1589s" target="_blank">26:29</a> tables vacuum lakes lake house table migr Power BM PR capacity so it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1594s" target="_blank">26:34</a> migr Power BM PR capacity so it's absolutely
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1595s" target="_blank">26:35</a> absolutely insane in regards to all the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1597s" target="_blank">26:37</a> insane in regards to all the scenarios here it's like you said it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1600s" target="_blank">26:40</a> scenarios here it's like you said it's much more than just your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1601s" target="_blank">26:41</a> much more than just your powerbi model that we're used to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1604s" target="_blank">26:44</a> powerbi model that we're used to being the only thing we can actually do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1605s" target="_blank">26:45</a> being the only thing we can actually do something it was the XML unpo back in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1608s" target="_blank">26:48</a> something it was the XML unpo back in the day which was the only was awesome
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1611s" target="_blank">26:51</a> the day which was the only was awesome but this really opens up all the fabric
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1614s" target="_blank">26:54</a> but this really opens up all the fabric artifacts and also what you can do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1618s" target="_blank">26:58</a> artifacts and also what you can do so I was talking with Michael kovalski
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1620s" target="_blank">27:00</a> so I was talking with Michael kovalski recently about this exact tool and it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1621s" target="_blank">27:01</a> recently about this exact tool and it's you he's explaining a little bit
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1623s" target="_blank">27:03</a> you he's explaining a little bit and he was also talking about this in a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1626s" target="_blank">27:06</a> and he was also talking about this in a an speaking engagement he did over in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1627s" target="_blank">27:07</a> an speaking engagement he did over in the fabric conference in I believe it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1629s" target="_blank">27:09</a> the fabric conference in I believe it was fabric conference over
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1632s" target="_blank">27:12</a> was fabric conference over in Stockholm is where he was talking
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1634s" target="_blank">27:14</a> in Stockholm is where he was talking about this one he came over and talked
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1635s" target="_blank">27:15</a> about this one he came over and talked about it but Michael kovos is on the cat
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1638s" target="_blank">27:18</a> about it but Michael kovos is on the cat team he's the one who originated
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1640s" target="_blank">27:20</a> team he's the one who originated semantic link labs and while he was on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1642s" target="_blank">27:22</a> semantic link labs and while he was on the cat team he he deals directly with
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1644s" target="_blank">27:24</a> the cat team he he deals directly with customer advisory team that's what that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1646s" target="_blank">27:26</a> customer advisory team that's what that is cat team is the customer advisory
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1647s" target="_blank">27:27</a> is cat team is the customer advisory team so he deals directly with big
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1648s" target="_blank">27:28</a> team so he deals directly with big customers or all customers and initially
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1651s" target="_blank">27:31</a> customers or all customers and initially he built a couple like python libraries
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1654s" target="_blank">27:34</a> he built a couple like python libraries picked it up thought oh my gosh this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1655s" target="_blank">27:35</a> picked it up thought oh my gosh this is easy learned python basically he wasn't
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1658s" target="_blank">27:38</a> easy learned python basically he wasn't really a python writer to begin with he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1660s" target="_blank">27:40</a> really a python writer to begin with he knew programming but it wasn't really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1661s" target="_blank">27:41</a> knew programming but it wasn't really his Forte learned Python and in about a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1664s" target="_blank">27:44</a> his Forte learned Python and in about a year he had like started building all
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1666s" target="_blank">27:46</a> year he had like started building all these helpful tools and producing a lot
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1669s" target="_blank">27:49</a> these helpful tools and producing a lot of things that was in like making things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1671s" target="_blank">27:51</a> of things that was in like making things easier well now he's like his full-time
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1675s" target="_blank">27:55</a> easier well now he's like his full-time job is only like maintaining support Ing
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1678s" target="_blank">27:58</a> job is only like maintaining support Ing and building more features through
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1679s" target="_blank">27:59</a> and building more features through semantic link Labs because by him
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1682s" target="_blank">28:02</a> semantic link Labs because by him solving a problem with this tool he's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1684s" target="_blank">28:04</a> solving a problem with this tool he's able to solve not just one customer
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1686s" target="_blank">28:06</a> able to solve not just one customer problem he's solving like a multitude of
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1688s" target="_blank">28:08</a> problem he's solving like a multitude of customers problems all at the same time
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1691s" target="_blank">28:11</a> customers problems all at the same time so one thing one thing I'm really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1693s" target="_blank">28:13</a> so one thing one thing I'm really excited about is when you go to the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1694s" target="_blank">28:14</a> excited about is when you go to the GitHub repo and look at all the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1696s" target="_blank">28:16</a> GitHub repo and look at all the releases the release list is incredible
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1700s" target="_blank">28:20</a> releases the release list is incredible on this tool he is chunking out releases
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1704s" target="_blank">28:24</a> on this tool he is chunking out releases like multiple times per month so in 2014
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1708s" target="_blank">28:28</a> like multiple times per month so in 2014 he had four updates one per week in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1711s" target="_blank">28:31</a> he had four updates one per week in December in November he had three per
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1714s" target="_blank">28:34</a> December in November he had three per week through December and he's already
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1716s" target="_blank">28:36</a> week through December and he's already had two in January and one in February I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1718s" target="_blank">28:38</a> had two in January and one in February I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1718s" target="_blank">28:38</a> had two in January and one in February they're making a ton of stuff in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1720s" target="_blank">28:40</a> mean they're making a ton of stuff in here that's adding a bunch of really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1722s" target="_blank">28:42</a> here that's adding a bunch of really neat features so it's almost hard to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1725s" target="_blank">28:45</a> neat features so it's almost hard to keep up with the tool because it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1726s" target="_blank">28:46</a> keep up with the tool because it's moving so fast it's doing so many things
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1729s" target="_blank">28:49</a> moving so fast it's doing so many things really really like it so and U I should
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1732s" target="_blank">28:52</a> really really like it so and U I should we should give a shout out real
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1735s" target="_blank">28:55</a> we should give a shout out real shout out to our cheran friend Gilbert
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1737s" target="_blank">28:57</a> shout out to our cheran friend Gilbert from for movies that's actually where
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1740s" target="_blank">29:00</a> from for movies that's actually where the idea to really dive into this a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1741s" target="_blank">29:01</a> the idea to really dive into this a little more came from one of the cool
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1744s" target="_blank">29:04</a> little more came from one of the cool scenarios that I saw was what Gilbert
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1746s" target="_blank">29:06</a> scenarios that I saw was what Gilbert did was basically looked to automate
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1750s" target="_blank">29:10</a> did was basically looked to automate updating incremental refresh policy
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1753s" target="_blank">29:13</a> updating incremental refresh policy and he was able to do that with the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1756s" target="_blank">29:16</a> and he was able to do that with the semantic link Labs which is insane yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1760s" target="_blank">29:20</a> semantic link Labs which is insane yeah this but this is what this is the this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1762s" target="_blank">29:22</a> this but this is what this is the this is the stuff we're talking about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1763s" target="_blank">29:23</a> is the stuff we're talking about though like it's it's this stuff
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1765s" target="_blank">29:25</a> though like it's it's this stuff it's like heavy automation so this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1767s" target="_blank">29:27</a> it's like heavy automation so this is like for professional developers these
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1770s" target="_blank">29:30</a> like for professional developers these are for users who are
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1774s" target="_blank">29:34</a> are for users who are very very much in the weeds and the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1777s" target="_blank">29:37</a> very very much in the weeds and the code of things and so well let me just
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1781s" target="_blank">29:41</a> code of things and so well let me just I'm going to give you my perspective on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1782s" target="_blank">29:42</a> I'm going to give you my perspective on this one there's a couple things here
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1783s" target="_blank">29:43</a> this one there's a couple things here the combination of semantic link labs in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1788s" target="_blank">29:48</a> the combination of semantic link labs in concert with kimle editor in concert
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1792s" target="_blank">29:52</a> concert with kimle editor in concert with dax's query view those three let's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1795s" target="_blank">29:55</a> with dax's query view those three let's call them tools I guess for like a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1797s" target="_blank">29:57</a> call them tools I guess for like a better term
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1798s" target="_blank">29:58</a> better term those three tools replace every single I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1800s" target="_blank">30:00</a> those three tools replace every single I think almost every single other external
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1802s" target="_blank">30:02</a> think almost every single other external tool that's out there that's talking
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1804s" target="_blank">30:04</a> tool that's out there that's talking about the semantic models I think these
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1806s" target="_blank">30:06</a> about the semantic models I think these tools can do everything else everything
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1808s" target="_blank">30:08</a> tools can do everything else everything other other tools can do and more and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1811s" target="_blank">30:11</a> other other tools can do and more and the bonus here is like as I compare this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1814s" target="_blank">30:14</a> the bonus here is like as I compare this compared to tabal editor I don't have to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1816s" target="_blank">30:16</a> compared to tabal editor I don't have to learn C just to write a scripting or an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1818s" target="_blank">30:18</a> learn C just to write a scripting or an automation I can just write it in Python
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1820s" target="_blank">30:20</a> automation I can just write it in Python which in my opinion is much easier to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1823s" target="_blank">30:23</a> which in my opinion is much easier to write so here's a question because you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1826s" target="_blank">30:26</a> write so here's a question because you actually brought up something very
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1828s" target="_blank">30:28</a> actually brought up something very intriguing because if you think about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1829s" target="_blank">30:29</a> intriguing because if you think about all of the current API or developer ways
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1832s" target="_blank">30:32</a> all of the current API or developer ways to modify read your fabric tenant you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1837s" target="_blank">30:37</a> to modify read your fabric tenant you talk about xmla end point power BRS apis
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1842s" target="_blank">30:42</a> talk about xmla end point power BRS apis the and then now there's really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1844s" target="_blank">30:44</a> the and then now there's really Senpai Labs if you are the data Zar or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1848s" target="_blank">30:48</a> Senpai Labs if you are the data Zar or an organ organization do you care how
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1850s" target="_blank">30:50</a> an organ organization do you care how people are actually if you if let's say
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1852s" target="_blank">30:52</a> people are actually if you if let's say let's take it first with the heavy
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1854s" target="_blank">30:54</a> let's take it first with the heavy developer the people who actually do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1856s" target="_blank">30:56</a> developer the people who actually do need to automate
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1859s" target="_blank">30:59</a> need to automate their powerbi items or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1861s" target="_blank">31:01</a> their powerbi items or fabric items using some again custom
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1867s" target="_blank">31:07</a> fabric items using some again custom endpoint are you going to would you push
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1870s" target="_blank">31:10</a> endpoint are you going to would you push everyone to only use the SE semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1873s" target="_blank">31:13</a> everyone to only use the SE semantic link Labs or

<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1875s" target="_blank">31:15</a> link Labs or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1875s" target="_blank">31:15</a> link Labs or Senpai compared to API xmla endpoint
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1880s" target="_blank">31:20</a> Senpai compared to API xmla endpoint
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1880s" target="_blank">31:20</a> Senpai compared to API xmla endpoint Powershell I think those are the really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1882s" target="_blank">31:22</a> Powershell I think those are the really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1882s" target="_blank">31:22</a> Powershell I think those are the really three ways that you can actually in a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1884s" target="_blank">31:24</a> three ways that you can actually in a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1884s" target="_blank">31:24</a> three ways that you can actually in a sense connect or talk to powerbi
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1888s" target="_blank">31:28</a> sense connect or talk to powerbi
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1888s" target="_blank">31:28</a> sense connect or talk to powerbi well let's also talk about other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1889s" target="_blank">31:29</a> well let's also talk about other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1889s" target="_blank">31:29</a> well let's also talk about other external tools right there's D Studio
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1892s" target="_blank">31:32</a> external tools right there's D Studio
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1892s" target="_blank">31:32</a> external tools right there's D Studio yeah also tabular editor right so let's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1895s" target="_blank">31:35</a> yeah also tabular editor right so let's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1895s" target="_blank">31:35</a> yeah also tabular editor right so let's look at like so I'm going to look at all
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1896s" target="_blank">31:36</a> look at like so I'm going to look at all
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1896s" target="_blank">31:36</a> look at like so I'm going to look at all the tools and say okay which ones
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1899s" target="_blank">31:39</a> the tools and say okay which ones
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1899s" target="_blank">31:39</a> the tools and say okay which ones provide the highest level of automation
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1900s" target="_blank">31:40</a> provide the highest level of automation
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1900s" target="_blank">31:40</a> provide the highest level of automation right Tabler editor and semantic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1902s" target="_blank">31:42</a> right Tabler editor and semantic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1902s" target="_blank">31:42</a> right Tabler editor and semantic link Labs provide high levels of automation I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1905s" target="_blank">31:45</a> Labs provide high levels of automation I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1905s" target="_blank">31:45</a> Labs provide high levels of automation I have really struggled just me personally
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1907s" target="_blank">31:47</a> have really struggled just me personally
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1907s" target="_blank">31:47</a> have really struggled just me personally I've tried to get Tabler Editor to to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1910s" target="_blank">31:50</a> I've tried to get Tabler Editor to to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1910s" target="_blank">31:50</a> I've tried to get Tabler Editor to to run in some deployment pipeline
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1912s" target="_blank">31:52</a> run in some deployment pipeline
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1912s" target="_blank">31:52</a> run in some deployment pipeline where the deployment pipeline runs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1913s" target="_blank">31:53</a> where the deployment pipeline runs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1913s" target="_blank">31:53</a> where the deployment pipeline runs something and Tabler editor like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1915s" target="_blank">31:55</a> something and Tabler editor like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1915s" target="_blank">31:55</a> something and Tabler editor like recompiles the code or deploys something
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1918s" target="_blank">31:58</a> recompiles the code or deploys something
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1918s" target="_blank">31:58</a> recompiles the code or deploys something it's difficult and I couldn't get it to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1919s" target="_blank">31:59</a> it's difficult and I couldn't get it to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1919s" target="_blank">31:59</a> it's difficult and I couldn't get it to work correctly and the documentation is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1921s" target="_blank">32:01</a> work correctly and the documentation is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1921s" target="_blank">32:01</a> work correctly and the documentation is okay but tabular editor wasn't really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1924s" target="_blank">32:04</a> okay but tabular editor wasn't really
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1924s" target="_blank">32:04</a> okay but tabular editor wasn't really the right tool like a CLI command
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1927s" target="_blank">32:07</a> the right tool like a CLI command
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1927s" target="_blank">32:07</a> the right tool like a CLI command line interface right I want a CLI to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1929s" target="_blank">32:09</a> line interface right I want a CLI to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1929s" target="_blank">32:09</a> line interface right I want a CLI to be able to say look yeah this is where my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1931s" target="_blank">32:11</a> able to say look yeah this is where my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1931s" target="_blank">32:11</a> able to say look yeah this is where my model lives I want to package my model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1933s" target="_blank">32:13</a> model lives I want to package my model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1933s" target="_blank">32:13</a> model lives I want to package my model and deploy it to this workspace well it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1936s" target="_blank">32:16</a> and deploy it to this workspace well it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1936s" target="_blank">32:16</a> and deploy it to this workspace well it doesn't it it works but you have to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1937s" target="_blank">32:17</a> doesn't it it works but you have to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1937s" target="_blank">32:17</a> doesn't it it works but you have to be like really in the weeds of things it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1939s" target="_blank">32:19</a> like really in the weeds of things it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1939s" target="_blank">32:19</a> like really in the weeds of things it's just more difficult I'd rather I'd
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1942s" target="_blank">32:22</a> just more difficult I'd rather I'd
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1942s" target="_blank">32:22</a> just more difficult I'd rather I'd rather write a python notebook and use
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1944s" target="_blank">32:24</a> rather write a python notebook and use
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1944s" target="_blank">32:24</a> rather write a python notebook and use that to make a sequence of cells that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1946s" target="_blank">32:26</a> that to make a sequence of cells that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1946s" target="_blank">32:26</a> that to make a sequence of cells that does what I want so if I think about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1949s" target="_blank">32:29</a> does what I want so if I think about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1949s" target="_blank">32:29</a> does what I want so if I think about like so that's one difference there
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1951s" target="_blank">32:31</a> like so that's one difference there
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1952s" target="_blank">32:32</a> like so that's one difference there right I've already ran into other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1953s" target="_blank">32:33</a> right I've already ran into other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1953s" target="_blank">32:33</a> right I've already ran into other problems with other tools that is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1956s" target="_blank">32:36</a> problems with other tools that is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1956s" target="_blank">32:36</a> problems with other tools that is difficult to write code for or it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1957s" target="_blank">32:37</a> difficult to write code for or it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1957s" target="_blank">32:37</a> difficult to write code for or it's different difficult to write
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1959s" target="_blank">32:39</a> different difficult to write
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1959s" target="_blank">32:39</a> different difficult to write command line interface
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1961s" target="_blank">32:41</a> command line interface
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1961s" target="_blank">32:41</a> command line interface type actions right the centic L Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1964s" target="_blank">32:44</a> type actions right the centic L Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1964s" target="_blank">32:44</a> type actions right the centic L Labs makes this much easier also I'm writing
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1967s" target="_blank">32:47</a> makes this much easier also I'm writing
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1967s" target="_blank">32:47</a> makes this much easier also I'm writing just pure Python and the functions there
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1969s" target="_blank">32:49</a> just pure Python and the functions there
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1969s" target="_blank">32:49</a> just pure Python and the functions there are way more functions in centic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1972s" target="_blank">32:52</a> are way more functions in centic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1972s" target="_blank">32:52</a> are way more functions in centic link Labs like refresh your semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1974s" target="_blank">32:54</a> Labs like refresh your semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1974s" target="_blank">32:54</a> Labs like refresh your semantic model optimize things get this measure run
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1976s" target="_blank">32:56</a> optimize things get this measure run
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1976s" target="_blank">32:56</a> optimize things get this measure run this SQL query it just there's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1978s" target="_blank">32:58</a> this SQL query it just there's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1978s" target="_blank">32:58</a> this SQL query it just there's just a lot of like nice features around
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1980s" target="_blank">33:00</a> just a lot of like nice features around
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1980s" target="_blank">33:00</a> just a lot of like nice features around it the functions are easy to understand
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1982s" target="_blank">33:02</a> it the functions are easy to understand
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1982s" target="_blank">33:02</a> it the functions are easy to understand it's easy to run those it just makes a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1984s" target="_blank">33:04</a> it's easy to run those it just makes a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1984s" target="_blank">33:04</a> it's easy to run those it just makes a lot more sense to me so now let's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1986s" target="_blank">33:06</a> lot more sense to me so now let's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1986s" target="_blank">33:06</a> lot more sense to me so now let's compare the pricing of all these tools
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1988s" target="_blank">33:08</a> compare the pricing of all these tools
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1988s" target="_blank">33:08</a> compare the pricing of all these tools right so Tabo editor if you're going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1991s" target="_blank">33:11</a> right so Tabo editor if you're going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1991s" target="_blank">33:11</a> right so Tabo editor if you're going to go professional with this one it's going
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1992s" target="_blank">33:12</a> go professional with this one it's going
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1992s" target="_blank">33:12</a> go professional with this one it's going to cost you a little bit of money to get
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1994s" target="_blank">33:14</a> to cost you a little bit of money to get
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1994s" target="_blank">33:14</a> to cost you a little bit of money to get the tool it is a premium level tool it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1995s" target="_blank">33:15</a> the tool it is a premium level tool it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1996s" target="_blank">33:16</a> the tool it is a premium level tool it is for the developer when you need to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1997s" target="_blank">33:17</a> is for the developer when you need to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=1997s" target="_blank">33:17</a> is for the developer when you need to start manipulating like partitions and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2000s" target="_blank">33:20</a> start manipulating like partitions and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2000s" target="_blank">33:20</a> start manipulating like partitions and going deep on the tables and the models
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2001s" target="_blank">33:21</a> going deep on the tables and the models
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2002s" target="_blank">33:22</a> going deep on the tables and the models get really large you're not going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2003s" target="_blank">33:23</a> get really large you're not going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2003s" target="_blank">33:23</a> get really large you're not going to want to edit a model like using desktop
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2006s" target="_blank">33:26</a> want to edit a model like using desktop
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2006s" target="_blank">33:26</a> want to edit a model like using desktop you're just not going to want to there's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2008s" target="_blank">33:28</a> you're just not going to want to there's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2008s" target="_blank">33:28</a> you're just not going to want to there's thing it's going to you're going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2009s" target="_blank">33:29</a> thing it's going to you're going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2009s" target="_blank">33:29</a> thing it's going to you're going to outgrow desktop very
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2010s" target="_blank">33:30</a> outgrow desktop very
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2010s" target="_blank">33:30</a> outgrow desktop very quickly now when I have semantic link so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2013s" target="_blank">33:33</a> quickly now when I have semantic link so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2013s" target="_blank">33:33</a> quickly now when I have semantic link so now that I have timle editor and now
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2015s" target="_blank">33:35</a> now that I have timle editor and now
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2015s" target="_blank">33:35</a> now that I have timle editor and now that I have Dax query viw and semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2017s" target="_blank">33:37</a> that I have Dax query viw and semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2017s" target="_blank">33:37</a> that I have Dax query viw and semantic link Labs these are all free tools
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2020s" target="_blank">33:40</a> link Labs these are all free tools
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2020s" target="_blank">33:40</a> link Labs these are all free tools doesn't cost me a dime now then I might
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2023s" target="_blank">33:43</a> doesn't cost me a dime now then I might
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2023s" target="_blank">33:43</a> doesn't cost me a dime now then I might be writing a bit more code I might have
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2024s" target="_blank">33:44</a> be writing a bit more code I might have
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2024s" target="_blank">33:44</a> be writing a bit more code I might have to write a bit more cells
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2026s" target="_blank">33:46</a> to write a bit more cells
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2026s" target="_blank">33:46</a> to write a bit more cells inside my python notebook in some inic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2027s" target="_blank">33:47</a> inside my python notebook in some inic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2028s" target="_blank">33:48</a> inside my python notebook in some inic link Labs but I'm willing to learn that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2031s" target="_blank">33:51</a> link Labs but I'm willing to learn that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2031s" target="_blank">33:51</a> link Labs but I'm willing to learn that in exchange for free right so like it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2033s" target="_blank">33:53</a> in exchange for free right so like it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2033s" target="_blank">33:53</a> in exchange for free right so like it may not be like the most optimized tool
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2036s" target="_blank">33:56</a> may not be like the most optimized tool
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2036s" target="_blank">33:56</a> may not be like the most optimized tool out there but there's I don't have to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2038s" target="_blank">33:58</a> out there but there's I don't have to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2039s" target="_blank">33:59</a> out there but there's I don't have to learn c i it's a free tool and I can do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2043s" target="_blank">34:03</a> learn c i it's a free tool and I can do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2043s" target="_blank">34:03</a> learn c i it's a free tool and I can do way more things not only just at the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2045s" target="_blank">34:05</a> way more things not only just at the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2045s" target="_blank">34:05</a> way more things not only just at the semantic model level but also at the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2047s" target="_blank">34:07</a> semantic model level but also at the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2047s" target="_blank">34:07</a> semantic model level but also at the report level to me I'm sold and when I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2050s" target="_blank">34:10</a> report level to me I'm sold and when I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2050s" target="_blank">34:10</a> report level to me I'm sold and when I was watching Michael kovalski talk about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2052s" target="_blank">34:12</a> was watching Michael kovalski talk about
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2052s" target="_blank">34:12</a> was watching Michael kovalski talk about this he did a demo where he went to I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2055s" target="_blank">34:15</a> this he did a demo where he went to I
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2055s" target="_blank">34:15</a> this he did a demo where he went to I think it was I don't know if it was a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2056s" target="_blank">34:16</a> think it was I don't know if it was a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2056s" target="_blank">34:16</a> think it was I don't know if it was a lakeh house I can't remember exactly
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2058s" target="_blank">34:18</a> lakeh house I can't remember exactly
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2058s" target="_blank">34:18</a> lakeh house I can't remember exactly what he was doing he went somewhere to a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2060s" target="_blank">34:20</a> what he was doing he went somewhere to a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2060s" target="_blank">34:20</a> what he was doing he went somewhere to a lake house he read the metadata from the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2063s" target="_blank">34:23</a> lake house he read the metadata from the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2063s" target="_blank">34:23</a> lake house he read the metadata from the lake house he then created his own
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2066s" target="_blank">34:26</a> lake house he then created his own
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2066s" target="_blank">34:26</a> lake house he then created his own tables I think it was his best business
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2068s" target="_blank">34:28</a> tables I think it was his best business
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2068s" target="_blank">34:28</a> tables I think it was his best business sorry let me let me step back here yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2070s" target="_blank">34:30</a> sorry let me let me step back here yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2070s" target="_blank">34:30</a> sorry let me let me step back here yeah he was using best business practice
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2071s" target="_blank">34:31</a> he was using best business practice
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2071s" target="_blank">34:31</a> he was using best business practice analyzer BPA he went to a workspace he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2075s" target="_blank">34:35</a> analyzer BPA he went to a workspace he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2075s" target="_blank">34:35</a> analyzer BPA he went to a workspace he said this is my workspace run the BPA
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2078s" target="_blank">34:38</a> said this is my workspace run the BPA
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2078s" target="_blank">34:38</a> said this is my workspace run the BPA tool on every model in a workspace he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2081s" target="_blank">34:41</a> tool on every model in a workspace he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2081s" target="_blank">34:41</a> tool on every model in a workspace he ran every model he got all the rules
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2083s" target="_blank">34:43</a> ran every model he got all the rules
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2083s" target="_blank">34:43</a> ran every model he got all the rules back he wrote the tables to a lakeh
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2087s" target="_blank">34:47</a> back he wrote the tables to a lakeh
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2087s" target="_blank">34:47</a> back he wrote the tables to a lakeh house once the tables were written to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2089s" target="_blank">34:49</a> house once the tables were written to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2089s" target="_blank">34:49</a> house once the tables were written to the lake house he made a semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2091s" target="_blank">34:51</a> the lake house he made a semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2091s" target="_blank">34:51</a> the lake house he made a semantic model programmatically albeit it was he made
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2093s" target="_blank">34:53</a> programmatically albeit it was he made
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2094s" target="_blank">34:54</a> programmatically albeit it was he made it from scratch using code and then he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2096s" target="_blank">34:56</a> it from scratch using code and then he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2096s" target="_blank">34:56</a> it from scratch using code and then he made the report programmatically he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2099s" target="_blank">34:59</a> made the report programmatically he
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2099s" target="_blank">34:59</a> made the report programmatically he connected the semantic model to the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2100s" target="_blank">35:00</a> connected the semantic model to the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2100s" target="_blank">35:00</a> connected the semantic model to the tables he connected the report to the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2102s" target="_blank">35:02</a> tables he connected the report to the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2102s" target="_blank">35:02</a> tables he connected the report to the semantic model and everything just
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2105s" target="_blank">35:05</a> semantic model and everything just
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2105s" target="_blank">35:05</a> semantic model and everything just worked and he had a from a single
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2108s" target="_blank">35:08</a> worked and he had a from a single
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2108s" target="_blank">35:08</a> worked and he had a from a single notebook he had run all the tools for
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2110s" target="_blank">35:10</a> notebook he had run all the tools for
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2110s" target="_blank">35:10</a> notebook he had run all the tools for best practice analyzer made the semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2113s" target="_blank">35:13</a> best practice analyzer made the semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2113s" target="_blank">35:13</a> best practice analyzer made the semantic model and made the report all within one
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2115s" target="_blank">35:15</a> model and made the report all within one
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2115s" target="_blank">35:15</a> model and made the report all within one a couple lines of code that that's an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2117s" target="_blank">35:17</a> a couple lines of code that that's an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2117s" target="_blank">35:17</a> a couple lines of code that that's an automation like that can't be done in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2120s" target="_blank">35:20</a> automation like that can't be done in
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2120s" target="_blank">35:20</a> automation like that can't be done in any other tool and I looked at that and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2121s" target="_blank">35:21</a> any other tool and I looked at that and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2121s" target="_blank">35:21</a> any other tool and I looked at that and I said this single tool cemented link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2124s" target="_blank">35:24</a> I said this single tool cemented link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2124s" target="_blank">35:24</a> I said this single tool cemented link Labs just killed every single external
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2126s" target="_blank">35:26</a> Labs just killed every single external
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2126s" target="_blank">35:26</a> Labs just killed every single external tool that's out there de with semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2129s" target="_blank">35:29</a> tool that's out there de with semantic
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2129s" target="_blank">35:29</a> tool that's out there de with semantic models and even some lightweight report
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2131s" target="_blank">35:31</a> models and even some lightweight report
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2131s" target="_blank">35:31</a> models and even some lightweight report editing stuff as well this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2132s" target="_blank">35:32</a> editing stuff as well this is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2132s" target="_blank">35:32</a> editing stuff as well this is incredible it does so many things yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2136s" target="_blank">35:36</a> incredible it does so many things yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2136s" target="_blank">35:36</a> incredible it does so many things yeah my Powershell scripts had their
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2139s" target="_blank">35:39</a> my Powershell scripts had their
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2139s" target="_blank">35:39</a> my Powershell scripts had their day in the sun back in the day it could
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2141s" target="_blank">35:41</a> day in the sun back in the day it could
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2141s" target="_blank">35:41</a> day in the sun back in the day it could do some crazy things but it's it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2145s" target="_blank">35:45</a> do some crazy things but it's it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2145s" target="_blank">35:45</a> do some crazy things but it's it's interesting with the cementing link Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2147s" target="_blank">35:47</a> interesting with the cementing link Labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2147s" target="_blank">35:47</a> interesting with the cementing link Labs the official documentation because is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2150s" target="_blank">35:50</a> the official documentation because is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2150s" target="_blank">35:50</a> the official documentation because is obviously coming from cementing link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2152s" target="_blank">35:52</a> obviously coming from cementing link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2152s" target="_blank">35:52</a> obviously coming from cementing link which is the actual package and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2155s" target="_blank">35:55</a> which is the actual package and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2155s" target="_blank">35:55</a> which is the actual package and Microsoft actually developed then the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2157s" target="_blank">35:57</a> Microsoft actually developed then the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2157s" target="_blank">35:57</a> Microsoft actually developed then the the official
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2159s" target="_blank">35:59</a> the official
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2159s" target="_blank">35:59</a> the official documentation actually says that the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2161s" target="_blank">36:01</a> documentation actually says that the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2161s" target="_blank">36:01</a> documentation actually says that the cementing link is a feature to establish
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2163s" target="_blank">36:03</a> cementing link is a feature to establish
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2163s" target="_blank">36:03</a> cementing link is a feature to establish connection between models and data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2164s" target="_blank">36:04</a> connection between models and data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2164s" target="_blank">36:04</a> connection between models and data science yes right so and it's funny that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2168s" target="_blank">36:08</a> science yes right so and it's funny that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2168s" target="_blank">36:08</a> science yes right so and it's funny that it was only really initially
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2171s" target="_blank">36:11</a> it was only really initially
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2171s" target="_blank">36:11</a> it was only really initially built for just the data science side
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2173s" target="_blank">36:13</a> built for just the data science side
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2173s" target="_blank">36:13</a> built for just the data science side because they're thinking hey python
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2175s" target="_blank">36:15</a> because they're thinking hey python
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2175s" target="_blank">36:15</a> because they're thinking hey python notebooks Jupiter notebooks that's data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2177s" target="_blank">36:17</a> notebooks Jupiter notebooks that's data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2177s" target="_blank">36:17</a> notebooks Jupiter notebooks that's data science that's GNA really just be that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2179s" target="_blank">36:19</a> science that's GNA really just be that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2179s" target="_blank">36:19</a> science that's GNA really just be that data science spere cool awesome so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2183s" target="_blank">36:23</a> data science spere cool awesome so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2183s" target="_blank">36:23</a> data science spere cool awesome so that's just that's just a semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2184s" target="_blank">36:24</a> that's just that's just a semantic model
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2184s" target="_blank">36:24</a> that's just that's just a semantic model that's just semantic that's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2185s" target="_blank">36:25</a> that's just semantic that's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2185s" target="_blank">36:25</a> that's just semantic that's Senpai that's all that that is the labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2188s" target="_blank">36:28</a> Senpai that's all that that is the labs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2188s" target="_blank">36:28</a> Senpai that's all that that is the labs part of this makes it really rich
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2189s" target="_blank">36:29</a> part of this makes it really rich
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2189s" target="_blank">36:29</a> part of this makes it really rich because now this is including like a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2190s" target="_blank">36:30</a> because now this is including like a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2190s" target="_blank">36:30</a> because now this is including like a whole bunch of other things at like it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2193s" target="_blank">36:33</a> whole bunch of other things at like it
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2193s" target="_blank">36:33</a> whole bunch of other things at like it has a ton of administration level
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2195s" target="_blank">36:35</a> has a ton of administration level
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2195s" target="_blank">36:35</a> has a ton of administration level features in it that's awesome like it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2197s" target="_blank">36:37</a> features in it that's awesome like it's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2197s" target="_blank">36:37</a> features in it that's awesome like it's just absolutely incredible and that for
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2199s" target="_blank">36:39</a> just absolutely incredible and that for
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2199s" target="_blank">36:39</a> just absolutely incredible and that for me I'm like oh yeah so again if if
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2201s" target="_blank">36:41</a> me I'm like oh yeah so again if if
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2201s" target="_blank">36:41</a> me I'm like oh yeah so again if if you're a new user you're thinking like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2202s" target="_blank">36:42</a> you're a new user you're thinking like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2202s" target="_blank">36:42</a> you're a new user you're thinking like what should I be learning now you guys
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2203s" target="_blank">36:43</a> what should I be learning now you guys
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2203s" target="_blank">36:43</a> what should I be learning now you guys are talking about timle view you're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2205s" target="_blank">36:45</a> are talking about timle view you're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2205s" target="_blank">36:45</a> are talking about timle view you're talking about Dax Dax query view
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2208s" target="_blank">36:48</a> talking about Dax Dax query view
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2208s" target="_blank">36:48</a> talking about Dax Dax query view you're talking now about semantic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2210s" target="_blank">36:50</a> you're talking now about semantic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2210s" target="_blank">36:50</a> you're talking now about semantic link Labs dude if you have Fabric in your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2212s" target="_blank">36:52</a> Labs dude if you have Fabric in your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2212s" target="_blank">36:52</a> Labs dude if you have Fabric in your tenant 100% you should be learning
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2216s" target="_blank">36:56</a> tenant 100% you should be learning
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2216s" target="_blank">36:56</a> tenant 100% you should be learning semantic link labs immediately it will
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2218s" target="_blank">36:58</a> semantic link labs immediately it will
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2218s" target="_blank">36:58</a> semantic link labs immediately it will make your life way easier now it's very
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2220s" target="_blank">37:00</a> make your life way easier now it's very
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2220s" target="_blank">37:00</a> make your life way easier now it's very code Centric it's very detailed but if
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2223s" target="_blank">37:03</a> code Centric it's very detailed but if
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2223s" target="_blank">37:03</a> code Centric it's very detailed but if you want to be work smarter not
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2225s" target="_blank">37:05</a> you want to be work smarter not
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2225s" target="_blank">37:05</a> you want to be work smarter not harder it this is the tool for you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2230s" target="_blank">37:10</a> harder it this is the tool for you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2230s" target="_blank">37:10</a> harder it this is the tool for you so man this interesting because yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2233s" target="_blank">37:13</a> so man this interesting because yeah
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2233s" target="_blank">37:13</a> so man this interesting because yeah I think we still know and I'm still on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2236s" target="_blank">37:16</a> I think we still know and I'm still on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2236s" target="_blank">37:16</a> I think we still know and I'm still on the the side that most data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2239s" target="_blank">37:19</a> the the side that most data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2239s" target="_blank">37:19</a> the the side that most data professionals or powerbi professionals
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2241s" target="_blank">37:21</a> professionals or powerbi professionals
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2242s" target="_blank">37:22</a> professionals or powerbi professionals probably hav't by now maybe have you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2244s" target="_blank">37:24</a> probably hav't by now maybe have you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2244s" target="_blank">37:24</a> probably hav't by now maybe have like open a Jupiter notebook or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2247s" target="_blank">37:27</a> know like open a Jupiter notebook or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2247s" target="_blank">37:27</a> know like open a Jupiter notebook or done a notebook but that's probably not
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2249s" target="_blank">37:29</a> done a notebook but that's probably not
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2249s" target="_blank">37:29</a> done a notebook but that's probably not been their Forte right so if
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2252s" target="_blank">37:32</a> been their Forte right so if
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2252s" target="_blank">37:32</a> been their Forte right so if I'm if there if we're introducing fabric
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2255s" target="_blank">37:35</a> I'm if there if we're introducing fabric
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2255s" target="_blank">37:35</a> I'm if there if we're introducing fabric to my organization let's say yep and up
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2258s" target="_blank">37:38</a> to my organization let's say yep and up
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2258s" target="_blank">37:38</a> to my organization let's say yep and up until this point the business
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2260s" target="_blank">37:40</a> until this point the business
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2260s" target="_blank">37:40</a> until this point the business intelligence team has been powerbi all
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2263s" target="_blank">37:43</a> intelligence team has been powerbi all
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2263s" target="_blank">37:43</a> intelligence team has been powerbi all powerbi okay H much more likely to been
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2266s" target="_blank">37:46</a> powerbi okay H much more likely to been
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2266s" target="_blank">37:46</a> powerbi okay H much more likely to been doing like to take ruy Romano's Power
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2268s" target="_blank">37:48</a> doing like to take ruy Romano's Power
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2268s" target="_blank">37:48</a> doing like to take ruy Romano's Power Cell script to actually do some
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2270s" target="_blank">37:50</a> Cell script to actually do some
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2270s" target="_blank">37:50</a> Cell script to actually do some automation to get workspace modit
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2273s" target="_blank">37:53</a> automation to get workspace modit
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2273s" target="_blank">37:53</a> automation to get workspace modit during an activity than I ever were was
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2275s" target="_blank">37:55</a> during an activity than I ever were was
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2275s" target="_blank">37:55</a> during an activity than I ever were was to touch python or spark so if you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2281s" target="_blank">38:01</a> to touch python or spark so if you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2282s" target="_blank">38:02</a> to touch python or spark so if you are with that in mind again data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2284s" target="_blank">38:04</a> are with that in mind again data
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2284s" target="_blank">38:04</a> are with that in mind again data Engineers people in data science
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2287s" target="_blank">38:07</a> Engineers people in data science
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2287s" target="_blank">38:07</a> Engineers people in data science definitely obviously this is like well
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2290s" target="_blank">38:10</a> definitely obviously this is like well
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2290s" target="_blank">38:10</a> definitely obviously this is like well at home this is nothing new but a lot of
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2294s" target="_blank">38:14</a> at home this is nothing new but a lot of
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2294s" target="_blank">38:14</a> at home this is nothing new but a lot of if you're a data scientist You're Gonna
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2295s" target="_blank">38:15</a> if you're a data scientist You're Gonna
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2295s" target="_blank">38:15</a> if you're a data scientist You're Gonna Know Pyon like that's gonna be a given
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2297s" target="_blank">38:17</a> Know Pyon like that's gonna be a given
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2297s" target="_blank">38:17</a> Know Pyon like that's gonna be a given if you're a data engineer you may or may
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2299s" target="_blank">38:19</a> if you're a data engineer you may or may
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2299s" target="_blank">38:19</a> if you're a data engineer you may or may not know python you probably will know
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2301s" target="_blank">38:21</a> not know python you probably will know
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2301s" target="_blank">38:21</a> not know python you probably will know like I think you would know more of like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2303s" target="_blank">38:23</a> like I think you would know more of like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2303s" target="_blank">38:23</a> like I think you would know more of like a sequel right you'd be more of like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2306s" target="_blank">38:26</a> a sequel right you'd be more of like
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2306s" target="_blank">38:26</a> a sequel right you'd be more of like I think of dat a little bit of DBA but a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2308s" target="_blank">38:28</a> I think of dat a little bit of DBA but a
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2308s" target="_blank">38:28</a> I think of dat a little bit of DBA but a lot more data engineering there's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2310s" target="_blank">38:30</a> lot more data engineering there's
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2310s" target="_blank">38:30</a> lot more data engineering there's other tools that are a lot more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2312s" target="_blank">38:32</a> other tools that are a lot more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2312s" target="_blank">38:32</a> other tools that are a lot more graphical interface so you you don't
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2314s" target="_blank">38:34</a> graphical interface so you you don't
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2314s" target="_blank">38:34</a> graphical interface so you you don't have to actually know actual code you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2316s" target="_blank">38:36</a> have to actually know actual code you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2316s" target="_blank">38:36</a> have to actually know actual code you could use things like talend or other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2317s" target="_blank">38:37</a> could use things like talend or other
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2317s" target="_blank">38:37</a> could use things like talend or other data engineering type programs that do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2320s" target="_blank">38:40</a> data engineering type programs that do
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2320s" target="_blank">38:40</a> data engineering type programs that do all the work for you but I'd argue
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2322s" target="_blank">38:42</a> all the work for you but I'd argue
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2322s" target="_blank">38:42</a> all the work for you but I'd argue like python is becoming a very common
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2324s" target="_blank">38:44</a> like python is becoming a very common
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2324s" target="_blank">38:44</a> like python is becoming a very common language any of the new computer science
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2327s" target="_blank">38:47</a> language any of the new computer science
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2327s" target="_blank">38:47</a> language any of the new computer science Majors that I'm talking to nowadays they
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2328s" target="_blank">38:48</a> Majors that I'm talking to nowadays they
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2328s" target="_blank">38:48</a> Majors that I'm talking to nowadays they all know it they all know python coming
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2330s" target="_blank">38:50</a> all know it they all know python coming
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2330s" target="_blank">38:50</a> all know it they all know python coming out they're not saying you have to buer
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2331s" target="_blank">38:51</a> out they're not saying you have to buer
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2331s" target="_blank">38:51</a> out they're not saying you have to buer computer science major to do this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2333s" target="_blank">38:53</a> computer science major to do this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2333s" target="_blank">38:53</a> computer science major to do this stuff but like it's taught
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2335s" target="_blank">38:55</a> stuff but like it's taught
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2335s" target="_blank">38:55</a> stuff but like it's taught everywhere it's G be it's going to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2336s" target="_blank">38:56</a> everywhere it's G be it's going to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2337s" target="_blank">38:57</a> everywhere it's G be it's going to be like the language that everyone knows so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2339s" target="_blank">38:59</a> like the language that everyone knows so
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2340s" target="_blank">39:00</a> like the language that everyone knows so let me ask you who are you teaching then
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2342s" target="_blank">39:02</a> let me ask you who are you teaching then
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2342s" target="_blank">39:02</a> let me ask you who are you teaching then if you had a team of just powerbi right
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2345s" target="_blank">39:05</a> if you had a team of just powerbi right
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2345s" target="_blank">39:05</a> if you had a team of just powerbi right because we're still in this migration
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2347s" target="_blank">39:07</a> because we're still in this migration
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2347s" target="_blank">39:07</a> because we're still in this migration period we're still introducing fabric to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2349s" target="_blank">39:09</a> period we're still introducing fabric to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2349s" target="_blank">39:09</a> period we're still introducing fabric to an organization that might have
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2350s" target="_blank">39:10</a> an organization that might have
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2351s" target="_blank">39:11</a> an organization that might have previously be just powerbi if I'm
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2353s" target="_blank">39:13</a> previously be just powerbi if I'm
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2353s" target="_blank">39:13</a> previously be just powerbi if I'm listening to this podcast right now and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2356s" target="_blank">39:16</a> listening to this podcast right now and
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2356s" target="_blank">39:16</a> listening to this podcast right now and I still don't have fabric but we're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2358s" target="_blank">39:18</a> I still don't have fabric but we're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2358s" target="_blank">39:18</a> I still don't have fabric but we're we're potentially going to introduce
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2360s" target="_blank">39:20</a> we're potentially going to introduce
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2360s" target="_blank">39:20</a> we're potentially going to introduce it at my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2361s" target="_blank">39:21</a> it at my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2361s" target="_blank">39:21</a> it at my organization and I've been the powerbi
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2364s" target="_blank">39:24</a> organization and I've been the powerbi
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2364s" target="_blank">39:24</a> organization and I've been the powerbi pro and Dax and power query yada yada
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2366s" target="_blank">39:26</a> pro and Dax and power query yada yada
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2366s" target="_blank">39:26</a> pro and Dax and power query yada yada yada are you how long is it going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2370s" target="_blank">39:30</a> yada are you how long is it going to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2370s" target="_blank">39:30</a> yada are you how long is it going to take for you to expect someone in that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2372s" target="_blank">39:32</a> take for you to expect someone in that
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2372s" target="_blank">39:32</a> take for you to expect someone in that space that Persona to start using
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2375s" target="_blank">39:35</a> space that Persona to start using
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2375s" target="_blank">39:35</a> space that Persona to start using spenting Li
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2377s" target="_blank">39:37</a> spenting Li
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2377s" target="_blank">39:37</a> spenting Li Labs say that again when do when do you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2379s" target="_blank">39:39</a> Labs say that again when do when do you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2379s" target="_blank">39:39</a> Labs say that again when do when do you want to you're asking like when's the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2381s" target="_blank">39:41</a> want to you're asking like when's the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2381s" target="_blank">39:41</a> want to you're asking like when's the right time to use yeah so if I'm at an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2385s" target="_blank">39:45</a> right time to use yeah so if I'm at an
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2385s" target="_blank">39:45</a> right time to use yeah so if I'm at an organization that we're maybe about to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2386s" target="_blank">39:46</a> organization that we're maybe about to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2386s" target="_blank">39:46</a> organization that we're maybe about to introduce fabric don't have it I'm
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2388s" target="_blank">39:48</a> introduce fabric don't have it I'm
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2388s" target="_blank">39:48</a> introduce fabric don't have it I'm listening to this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2389s" target="_blank">39:49</a> listening to this
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2389s" target="_blank">39:49</a> listening to this podcast from the day that my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2392s" target="_blank">39:52</a> podcast from the day that my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2392s" target="_blank">39:52</a> podcast from the day that my organization opens up the fabric to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2395s" target="_blank">39:55</a> organization opens up the fabric to
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2395s" target="_blank">39:55</a> organization opens up the fabric to the organization how long or what would
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2398s" target="_blank">39:58</a> the organization how long or what would
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2398s" target="_blank">39:58</a> the organization how long or what would you expect that person to begin to start
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2403s" target="_blank">40:03</a> you expect that person to begin to start
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2403s" target="_blank">40:03</a> you expect that person to begin to start using L Labs yeah this is a good
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2405s" target="_blank">40:05</a> using L Labs yeah this is a good
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2405s" target="_blank">40:05</a> using L Labs yeah this is a good question so let's talk about the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2407s" target="_blank">40:07</a> question so let's talk about the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2407s" target="_blank">40:07</a> question so let's talk about the maturity or of your organization right
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2409s" target="_blank">40:09</a> maturity or of your organization right
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2409s" target="_blank">40:09</a> maturity or of your organization right so just because you're turning on fabric
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2411s" target="_blank">40:11</a> so just because you're turning on fabric
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2412s" target="_blank">40:12</a> so just because you're turning on fabric doesn't necessarily mean your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2412s" target="_blank">40:12</a> doesn't necessarily mean your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2412s" target="_blank">40:12</a> doesn't necessarily mean your organization is immature in powerbi
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2415s" target="_blank">40:15</a> organization is immature in powerbi
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2415s" target="_blank">40:15</a> organization is immature in powerbi right if your team is larger if you have
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2419s" target="_blank">40:19</a> right if your team is larger if you have
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2419s" target="_blank">40:19</a> right if your team is larger if you have rigor around using best practice
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2421s" target="_blank">40:21</a> rigor around using best practice
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2421s" target="_blank">40:21</a> rigor around using best practice analyzer on your semantic models or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2423s" target="_blank">40:23</a> analyzer on your semantic models or
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2423s" target="_blank">40:23</a> analyzer on your semantic models or you're looking to tune or optimize your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2425s" target="_blank">40:25</a> you're looking to tune or optimize your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2425s" target="_blank">40:25</a> you're looking to tune or optimize your models right that that that right there
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2429s" target="_blank">40:29</a> models right that that that right there
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2429s" target="_blank">40:29</a> models right that that that right there already tells me that your your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2430s" target="_blank">40:30</a> already tells me that your your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2430s" target="_blank">40:30</a> already tells me that your your company's maturing right when you're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2431s" target="_blank">40:31</a> company's maturing right when you're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2431s" target="_blank">40:31</a> company's maturing right when you're getting to the place where you're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2432s" target="_blank">40:32</a> getting to the place where you're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2432s" target="_blank">40:32</a> getting to the place where you're optimizing models and making them more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2434s" target="_blank">40:34</a> optimizing models and making them more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2434s" target="_blank">40:34</a> optimizing models and making them more performant to to make sure that they're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2435s" target="_blank">40:35</a> performant to to make sure that they're
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2435s" target="_blank">40:35</a> performant to to make sure that they're not bigger what happen how how the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2437s" target="_blank">40:37</a> not bigger what happen how how the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2437s" target="_blank">40:37</a> not bigger what happen how how the progression typically goes here is users
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2440s" target="_blank">40:40</a> progression typically goes here is users
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2440s" target="_blank">40:40</a> progression typically goes here is users start with powerbi they build models at
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2443s" target="_blank">40:43</a> start with powerbi they build models at
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2443s" target="_blank">40:43</a> start with powerbi they build models at the pro level their models get larger
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2446s" target="_blank">40:46</a> the pro level their models get larger
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2446s" target="_blank">40:46</a> the pro level their models get larger they absorb more data at some point they
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2448s" target="_blank">40:48</a> they absorb more data at some point they
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2448s" target="_blank">40:48</a> they absorb more data at some point they outgrow the pro licensing and they move
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2452s" target="_blank">40:52</a> outgrow the pro licensing and they move
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2452s" target="_blank">40:52</a> outgrow the pro licensing and they move into potentially premium per user
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2453s" target="_blank">40:53</a> into potentially premium per user
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2453s" target="_blank">40:53</a> into potentially premium per user licensing which gives you much larger
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2455s" target="_blank">40:55</a> licensing which gives you much larger
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2455s" target="_blank">40:55</a> licensing which gives you much larger semantic models at some point you run
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2459s" target="_blank">40:59</a> semantic models at some point you run
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2459s" target="_blank">40:59</a> semantic models at some point you run into problems the model runs slow the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2461s" target="_blank">41:01</a> into problems the model runs slow the
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2461s" target="_blank">41:01</a> into problems the model runs slow the visuals aren't working right and you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2462s" target="_blank">41:02</a> visuals aren't working right and you
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2462s" target="_blank">41:02</a> visuals aren't working right and you need to start analyzing what's going on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2464s" target="_blank">41:04</a> need to start analyzing what's going on
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2464s" target="_blank">41:04</a> need to start analyzing what's going on in the model your model design now needs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2466s" target="_blank">41:06</a> in the model your model design now needs
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2466s" target="_blank">41:06</a> in the model your model design now needs to get better so this is my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2468s" target="_blank">41:08</a> to get better so this is my
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2468s" target="_blank">41:08</a> to get better so this is my progression too right I started making
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2469s" target="_blank">41:09</a> progression too right I started making
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2469s" target="_blank">41:09</a> progression too right I started making crappy models at the beginning just
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2471s" target="_blank">41:11</a> crappy models at the beginning just
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2471s" target="_blank">41:11</a> crappy models at the beginning just because it it worked and I okay it works
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2472s" target="_blank">41:12</a> because it it worked and I okay it works
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2472s" target="_blank">41:12</a> because it it worked and I okay it works let's move on I got more mature and then
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2476s" target="_blank">41:16</a> let's move on I got more mature and then
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2476s" target="_blank">41:16</a> let's move on I got more mature and then as I developed better models I got
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2478s" target="_blank">41:18</a> as I developed better models I got
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2478s" target="_blank">41:18</a> as I developed better models I got better at making those models more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2479s" target="_blank">41:19</a> better at making those models more
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2479s" target="_blank">41:19</a> better at making those models more efficient okay so where does centic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2482s" target="_blank">41:22</a> efficient okay so where does centic link
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2482s" target="_blank">41:22</a> efficient okay so where does centic link Labs fit here now right if your company
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2484s" target="_blank">41:24</a> Labs fit here now right if your company
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2484s" target="_blank">41:24</a> Labs fit here now right if your company is in a place where your organization is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2486s" target="_blank">41:26</a> is in a place where your organization is
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2486s" target="_blank">41:26</a> is in a place where your organization is mature around optimizing tuning building
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2489s" target="_blank">41:29</a> mature around optimizing tuning building
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2489s" target="_blank">41:29</a> mature around optimizing tuning building best practices in your models in your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2491s" target="_blank">41:31</a> best practices in your models in your
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2491s" target="_blank">41:31</a> best practices in your models in your organization you may want to regularly
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2493s" target="_blank">41:33</a> organization you may want to regularly
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2493s" target="_blank">41:33</a> organization you may want to regularly review those things if you have a larger
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2495s" target="_blank">41:35</a> review those things if you have a larger
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2495s" target="_blank">41:35</a> review those things if you have a larger team building models there's going to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2496s" target="_blank">41:36</a> team building models there's going to be
<a href="https://www.youtube.com/watch?v=bOVBPAk-d24&t=2496s" target="_blank">41:36</a> team building models there's going to be people regularly reviewing or should be

### [00:41:30](https://youtu.be/bOVBPAk-d24?t=2490)
people regularly reviewing or should be regularly reviewing your models to make sure you're not building stuff that's going to abuse Your Capacity so that being said when you go over to fabric if your organization is at that level of maturity where you're tuning driving for optimization cemented link Labs will be a great free tool and again I'm like free to help you automate

### [00:42:00](https://youtu.be/bOVBPAk-d24?t=2520)
again I'm like free to help you automate more of that here's like let me give you an example right I have a deployment process we're going to deploy some kind process we're going to deploy some reports part of your deployment of reports part of your deployment process will likely be running best business practice analyzer on your model in either test or maybe you run it in all your production models once a month something along those lines right that's the stuff you're going to need to do when you when your models get really large in size you're going to have lots of partition management to handle you're going to need other tooling to help you adjust

### [00:42:30](https://youtu.be/bOVBPAk-d24?t=2550)
need other tooling to help you adjust manipulate and then as your models get larger you're not going to want to just flat load all the tables sorry another thought here yeah users who start with powerbi they typically load the entire table all the time like when you start just load the whole table well eventually you learn that well not all data is changing from The Source system maybe I should be smarter about how I incrementally load the data and as your data grows in volume you also don't want to loow load like a 100 million records every night that's inefficient it's just wasteful at that point so then you start

### [00:43:00](https://youtu.be/bOVBPAk-d24?t=2580)
wasteful at that point so then you start thinking about okay how can I in the best way possible only load the data that I care about only load the data that's changing right now you have to do more things around partition management incremental refresh yeah but you've got to think about that's this is where the heavy automation of centic Link Labs supports this no so it supports it but man so that is actually a harder sell for me if I'm going to do the from the partition management because odds are

### [00:43:30](https://youtu.be/bOVBPAk-d24?t=2610)
partition management because odds are I've been doing this with a UI whether it's actually an SS SMS or tabl editor 3 for a long time if that's the case I'm sure it's faster in cementing link Labs but again to sell someone who has to then ramp up or create all these notebooks is like okay like where's the value ad for that case I to me I'm thinking really semantic link labs is not for everyone like every single

### [00:44:00](https://youtu.be/bOVBPAk-d24?t=2640)
is not for everyone like every single powerbi developer or heavy powerbi developer is going to want to get their Hands-On cementing Labs if anything it's probably one or two people creating them that are going to help manage a lot of other things I think I think most of what I'm seeing around semantic link Labs is around like so Greg asks a great question in the chat here he says do you start like are you at the place right now where you're going to recommend or start recommending building

### [00:44:30](https://youtu.be/bOVBPAk-d24?t=2670)
recommend or start recommending building Green Field brand new semantic models using only semantic link Labs is that what is that what you're saying let me just say it's possible to do that but I would also I would also argue that you may not want to start with that like it's bringing building brand new models probably not the best opportunity for this one it looks like a lot of the features around centic link labs are focusing at least initially on debugging

### [00:45:00](https://youtu.be/bOVBPAk-d24?t=2700)
focusing at least initially on debugging best business practice analyzer incremental refresh partition pieces there's a whole bunch of powerbi API stuff that you need to do that as an admin or a expert you're going to need to use period and you don't have to use Powershell now you don't have to use other tools yeah it just handles all the authentication for you so a lot of these other things that are used it just makes everything so much easier so I guess in that

### [00:45:30](https://youtu.be/bOVBPAk-d24?t=2730)
so I guess in that regard no so what so my question was about the people using cementing Labs I think there's the misconception is it's not going to be for every powerbi developer not every single heavy Enterprise developer is going to be needing to use cementing labs to your point there's probably an admin or someone setting it up for the on behalf of the team or on behalf of a department right because is everyone going in to

### [00:46:00](https://youtu.be/bOVBPAk-d24?t=2760)
right because is everyone going in to utilize Sy Labs probably not but some if you're a professional yes you are right if you how many how many powerbi professionals should be using verac analyzer are how many all of them yes if you're doing any if you're professional in powerbi analyzing every single one of you should be using vert pack analyzer it tells you how many columns there are what's the size of those columns which columns are most wasteful or not if you are any professional everyone should be that's

### [00:46:30](https://youtu.be/bOVBPAk-d24?t=2790)
professional everyone should be that's already built into Semitic link Labs so right there it's a single function that says Senpai Labs vertac analyzer send it the data set boom done verac answer comes back I don't need a third party to connect to a tool I don't need to do other stuff it's just literally right there boom done so like I think I disagree with your statement should any powerbi professional be using sub yeah they all should be using it if you're professional if you if what you're doing around semantic models

### [00:47:00](https://youtu.be/bOVBPAk-d24?t=2820)
what you're doing around semantic models and you have access to fabric 100% you should be learning about and using different modules from semantic link Labs it will make you more efficient yeah you should absolutely be using that but here's the thing if every single individual is creating their own notebook right and then just kind notebook right and then just from a wild West Point of View like of from a wild West Point of View like the run the BPA so are we pushing the data somewhere or do we have just a thousand notebooks right now like no there's again this if you're if you're a professional developer I'm already

### [00:47:30](https://youtu.be/bOVBPAk-d24?t=2850)
professional developer I'm already assuming you're going to be starting to pull some of the stuff together and centralize it right the same way that you're centralizing like lake houses and notebooks already in your data engineering right you're going to you're going to start making workspaces your professionals should all be working together and hopefully people are sharing notebooks between each other as well too and I think that's I think there's a lot of this where I think from an overlap point of view where like that BPA there's even a run bulk BPA why can't like hey I'm going to be the one creating these notebooks on

### [00:48:00](https://youtu.be/bOVBPAk-d24?t=2880)
the one creating these notebooks on behalf of the team that just run so I'm not saying you're not doing that's that's not what you're describing has nothing to do with using semantic link laps that is all to do with your company's internal process do you have people smart enough to build things that everyone can reuse that's your process that has nothing to do with the centic link lap itself so and I think I think you're arguing for something that is just a totally different scenario like you're arguing for does your company have

### [00:48:30](https://youtu.be/bOVBPAk-d24?t=2910)
arguing for does your company have process no so here's my worry all the things in here are great for the individual you take 10 people let's take 10 people that are now all running submitting Labs on the wild right like some of these are really powerful we're still dealing with apis and this is the argument here you're still dealing with the like the apis that require some permissions that can do a lot here especially from an automation point of view if you are not

### [00:49:00](https://youtu.be/bOVBPAk-d24?t=2940)
point of view if you are not careful everyone's running through this what are you so worried about I don't understand I don't I do not I literally do not understand your question here like how yes there are some modifying things but if you if you don't have access to the workspace or don't have access to the items in that workspace you can't touch them you can't modify things you don't have access to so it's not like it's it's not like this is ripping across parts of workspaces that are giving you more access to things you couldn't have before like so service

### [00:49:30](https://youtu.be/bOVBPAk-d24?t=2970)
couldn't have before like so service principle that's a moot point like it's not g that's no point in my mind now what I will argue though is you're you are right but once someone has figured out a pattern here these patterns get set they just run and you just move on like right for example like you're talking about running verac analyzer on all your models maybe that's something you decide is a tool or an automation you want to run every night this so yeah load your models at the end of loading your model maybe like in the morning or maybe even in the evening run verac

### [00:50:00](https://youtu.be/bOVBPAk-d24?t=3000)
maybe even in the evening run verac analyzer on all your models and store the data of the lake house that's this is the point someone says I'm going to do this these are the workspaces that are important to me and they just build the Automation and walk away now the notebook can be scheduled with a pipeline now you can have all this extra data coming off of your semantic models the metadata stuff and you can just capture that all away into Lakehouse and this provides one huge layer of automation going back to your organization so now you can say we've run BPA on all our models we've run vertec analyzer on all our models and by

### [00:50:30](https://youtu.be/bOVBPAk-d24?t=3030)
vertec analyzer on all our models and by the way we're already funneling all the data to a Lakehouse in a common data structure format and now you can be reporting on that and so now instead of having everyone going in and finding problems with models you can be more proactive hey this column is really small it dropped a lot one night what happened there was a data load issue okay now we can go look at it right the this model is getting extremely large in size for some reason it's been rapidly growing over the last couple weeks what's going on what's happening did something change these are all the signals and things that you're going to

### [00:51:00](https://youtu.be/bOVBPAk-d24?t=3060)
signals and things that you're going to want to administrate and monitor as your professional and in the powerbi and fabric space this tool just gives you the capability to do this at a much higher degree and I completely agree with that honestly a lot of the things too what I would love to see is someone who's a python Champion or who already has that experience a lot of these could be made into not I don't want to use the word templates but for anyone who's using powerbi it's like hey you want to view your measure dependencies I've created

### [00:51:30](https://youtu.be/bOVBPAk-d24?t=3090)
your measure dependencies I've created that notebook for the team right all you have to do is just plug in your workspace plug in your semantic model and it will run rather than taking someone who has to try to in a sense install create their own notebook a lot of these could be not even from a governance or security point of view from just an adoption point of view so I believe Cen L Labs is in preview or not in preview it's it's neither it's just a glass it's just a project that Microsoft has built

### [00:52:00](https://youtu.be/bOVBPAk-d24?t=3120)
just a project that Microsoft has built and supports it so it's a it's a wheel

**Speaker 1** [00:52:04](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3124s): and supports it so it's a it's a wheel it's a package that you import or you install into your notebooks okay so my understanding is semantic link is by default installed with all your python so that's already part of the image of all your of your all your items the semantic link Labs is not installed by default so you have to install this package and into the notebook you can even set up a custom environment in spark that says hey we're going to just use this I will argue though I have tested semantic Link in both Python and in fabric notebooks so when I've done that it works really well for both of them so the python notebook only and the spark notebooks in Python py spark cemented link labs and semantic link both seem to work in both of them very well which is awesome that makes everything incredibly easy for me

**Speaker 1** [00:53:02](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3182s): so as we get near the end and I think we've talked about from the user point of view the capabilities I don't think either of us are going to argue in terms of how much better this is than Powershell or even some of the the old Solutions Mike if if I if you took a team today and there are you implementing cementing link Labs across the board and what would be the top three things you're going to migrate from the old apis or xmla to your point you talked about we talked about incremental refresh we've talked about the activity log what would be the top three things that you think cementing link Labs could automate or from a priority point of view

**Speaker 1** [00:53:44](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3224s): yeah if if I'm looking at the things that are the best opportunities in semantic link Labs it's all around the vertac analyzer so that's really a good useful tool I'm also thinking that it is a lot of the automation things around getting data out you know verac analyzers there breast bu practice those are available to us doing things in bulk there super useful I'm finding a lot of value in complex refresh patterns inside semantic models so which which partition to refresh when your models get really large I like using centic link to automate more of the model experiences and automate more of the how how to very strategically refresh these models

**Speaker 1** [00:54:27](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3267s): typically this is all done in Powershell or other scripting things if I can just so think of it this way I have a pipeline I'm going to load some data into a table that data is now being loaded into semantic models but if that data is really large if we talking about Big Data stuff you don't want to refresh the whole thing it it's just too much so what you can do now in the pipeline is run your loading process copy the data and then at the end of it you can execute a notebook that then does the fancy refreshing policy that you may need again you're you're now at the place where you're optimizing your model you're bringing cost down because I don't want to refresh the entire model all the time there's a whole bunch of automation things here that I think really make this incredibly powerful

**Speaker 1** [00:55:13](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3313s): so it's it's to me if you're an admin of anything powerbi 100% you better be learning CTIC link Labs it will make your life 100% easier it will simplify a lot of the mundane tasks you've already been doing and I think you know Jake in in the comments here is making a really good point this semantic link Labs is like that stick sometimes that you need to beat the developers over the head with hey you're not doing this right right either either you you automate this and you start sucking out the data in mass and then you can now go back and have the conversation with hey your model doesn't conform to our best business practice analyzer hey your model is getting too large hey these are proactive things you could use that's going to help you make everything easier to work with in powerbi or even fabric for that matter

**Speaker 2** [00:56:02](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3362s): anyway yeah no I I love it I think for me the the best practice analyzer obviously is a gold standard and be able to push that data in I was trying to look does this can you connect and actually do the activity log with the smiting Labs or no yes yeah

**Speaker 1** [00:56:18](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3378s): activity log you can do activities based on a workspace you can do activ you can do the artifacts there's a cat there's a a cataloging API that it hits as well so it could also do again these are API calls that would have been three or four calls in a row right to get the data out what this thing does is it just Waits

**Speaker 1** [00:56:36](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3396s): so to do the cataloging calls of a workspace geez you could I'm just telling you this this is my point Tommy the the the fact that this tool has so many functions in here it does so many things it's just incredible how capable this is and this is where I'm like I don't okay fine it may be a little bit harder to do some of these things that I used to do in tab your editor or Dack Studio maybe right but now that I have all these really rich things in a notebook why would I want to use other tools instead now I can just use this notebook to automate things

**Speaker 1** [00:57:14](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3434s): let's let me give you another example Dax Studio why do I use Dax Studio I use Dax Studio to write and execute Dax queries well I can write them now in a notebook I can have multiple cells to me the experience of writing multiple deck statements inside a notebook is actually much better honestly another reason you well I mean think of it right if I have a cell and I need to copy the cell again multiple times I can just take my Dax code and write a different evaluate statement and I can see the results of the prior statement and the new one right side by side I would prefer to write dacks in notebooks honestly

**Speaker 1** [00:57:47](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3467s): so that that's bet to me that's a better experience I want to track all my changes in different cells and compare them love that experience so you can also do timings with things so if you you know Dax Studio does a good job of timing how long a query will run and we all know you can write Dax multiple different ways why not write a notebook that accepts a Dax statement and then runs all the tests you need to do right now in tab in Dax Studio there's no automation around okay I'm going to run this Dax query three times clear the cache each time all that can now be automated in a notebook so now you can do DAC Studio level things with Automation and repeatedly doing automated runs on things without having without requiring Dex dud anymore

**Speaker 1** [00:58:33](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3513s): this is where I'm like your mind is now the limit of your creativity it's not the tools anymore that then that's may be my point Sorry I'm getting really excited about this

**Speaker 2** [00:58:46](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3526s): one awesome well dude I I hope for a lot of people if you were hesitant on starting with notebook and starting with python you're like I really don't have a good reason this is probably the the most perfect reason to start learning and dive in I agree I regardless I think this is a a tool in Your Arsenal that you will need like it's it's definitely frir now has it caught up to all the other Rich tools that are out there Maybe not maybe not quite yet but based on the capabilities it can do now and the things that the semantic link Labs can do that other tools cannot I I think I'm I have my I have my I I'm making a bet I think this tool is going to continue to get better and I think it's going to continually close the gap more and more and more between all the other tools that you have out there and you know for the companies that complain like there's various companies that complain like well we can't use these other tools because you know it's a third party tool and Microsoft should just support it and all this stuff now it's supported right a lot of the tools other tools that are out there you don't need them now I don't think you need to use ta editor I don't think you need Dex studio anymore I think this closes the gap on a lot of those things so anyways that's where I stand on this

**Speaker 2** [01:00:03](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3603s): one awesome well this has been wonderful I hope people who are just diving into Fabric or just getting started and just to make sure for those who are still on powerbi premium this is a fabric only correct

**Speaker 1** [01:00:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3615s): this is a fac only feature so this is you know we're talking notebooks centic link Labs only works in a notebook experience so you have to turn on fabric to get this working but you can go check it out in a trial you can get them Microsoft fabric trial on your users if that is allowed by your admin so you can go check things out this is a great place to get started I think this makes a lot of the admin stuff or API pieces that you normally couldn't touch it makes it way easier way easier to get into touching these apis for both Fabric and powerbi the authentication stuff is just handled

**Speaker 1** [01:00:48](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3648s): so I'm I'm super pro this tool is amazing I should probably do an entire YouTube series on different patterns that this thing can do and how amazing it is because I think there's there's there's a number of fundamental features that have come out for powerbi in this year this is one of these fundamental features that people will need to learn it will change how you build stuff moving forward it will make you more efficient so I you've got to learn it I think it's just a yeah it's a given

**Speaker 2** [01:01:17](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3677s): anyways any other final thoughts Tommy for you

**Speaker 1** [01:01:20](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3680s): no I think this is perfect I think for a lot of people who are not sure how to get started this is what a more what a better or what a perfect way to get started with all the things that you're already doing from an automation point of view and just getting started with python notebooks

**Speaker 2** [01:01:37](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3697s): excellent with that we just want to say thank you very much for all the time you spent on the podcast today I thank you for just checking out us and looking around semantic link Labs I think you're going to love it it's a great feature if you like this discussion if you didn't know about semantic link labs and you want others to kind of see the surface area of what surf link semantic link Labs can do please share the podcast other people I think it's a great a great opportunity just to kind of get yourself exposure to things you're not used to

**Speaker 2** [01:02:04](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3724s): so that being said we really really appreciate it if you would share the podcast with other people we don't advertise we just do this for fun and if you found value from this we'd love it if you'd share it to somebody else

**Speaker 2** [01:02:13](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3733s): Tom me where else can you find the podcast

**Speaker 1** [01:02:15](https://www.youtube.com/watch?v=bOVBPAk-d24&t=3735s): you can find us on Apple Spotify wherever your podcast make sure to subscribe and leave a rating it helps us out a ton share with a friends since we do this for free you have a question idea or a topic that you want us to talk about a future episode head over to powerbi.com

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
