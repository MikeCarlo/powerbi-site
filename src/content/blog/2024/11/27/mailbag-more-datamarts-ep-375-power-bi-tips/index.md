---
title: "Mailbag! More Datamarts – Ep. 375"
date: "2024-11-27"
authors:
  - "Mike Carlo"
  - "Tommy Puglia"
  - "Seth Bauer"
categories:
  - "Podcast"
  - "Power BI"
tags:
  - "Explicit Measures"
  - "Podcast"
  - "Power BI"
  - "Datamarts"
  - "Microsoft Fabric"
  - "Mailbag"
  - "Governance"
excerpt: "It’s a mailbag episode focused on Datamarts—where they fit (and don’t fit) as the Power BI + Fabric story keeps evolving. Mike, Tommy, and Seth break down practical guidance on when Datamarts make sense, what to watch out for, and what to consider as alternatives like Lakehouse and Warehouse mature."
featuredImage: "./assets/featured.png"
---

It’s a mailbag episode focused on **Datamarts**—where they fit (and don’t fit) as the Power BI + Fabric story keeps evolving. Mike, Tommy, and Seth break down practical guidance on when Datamarts make sense, what to watch out for, and what to consider as alternatives like **Lakehouse** and **Warehouse** mature.

<iframe 
  width="100%" 
  height="415" 
  src="https://www.youtube.com/embed/ZaKHMZiv-3Y" 
  title="Mailbag! More Datamarts - Ep.375 - Power BI tips"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

## News & Announcements

- [Chicago Microsoft Fabric User Group - November 2024 Meetup](https://www.meetup.com/chicagolandpowerbi/events/304507048) — If you’re in the Chicagoland area, this in-person meetup is a great way to connect with other Fabric/Power BI practitioners. The session focus is Fabric admin & governance analytics (monitoring, capacity metrics, and usage/engagement data) and where that telemetry comes from.

- [Subscribe / listen to the Explicit Measures Podcast](https://powerbi.tips/podcast) — The home base for the show: where to listen, how to catch episodes live, and links to podcast platforms.

- [Join Tips+ (Theme Generator)](https://bit.ly/3Ymso48) — Build and manage consistent Power BI themes faster with the PowerBI.tips Theme Generator experience.

- [Got an idea or topic for a future episode?](https://bit.ly/3i8LdBo) — Submit your mailbag questions and topic ideas for future episodes.

- Follow us: [Mike](https://www.linkedin.com/in/michaelcarlo) · [Seth](https://www.linkedin.com/in/seth-bauer) · [Tommy](https://www.linkedin.com/in/tommypuglia)

## Main Discussion: Mailbag — Making sense of Datamarts in the Fabric era

This episode is structured as a mailbag conversation, using Datamarts as the anchor topic and pulling on the broader thread many teams are feeling right now: *the platform is moving fast, and you need a simple set of rules for what to build where.*

Key themes from the discussion:

### What a Datamart is *good at*

Datamarts can be a productive “middle layer” when you want a managed, approachable experience for:

- bringing in data quickly,
- modeling in a familiar Power BI-friendly way, and
- getting to a semantic model/report with less engineering overhead.

In other words: Datamarts can be useful when speed-to-value matters and you’re solving a relatively bounded BI problem.

### Where teams run into friction

The mailbag questions get into the practical realities—where Datamarts can become limiting depending on your requirements:

- **Governance & ownership:** Who manages the data layer long-term, and how do you prevent “shadow data products” from multiplying?
- **Scale & architecture:** As requirements grow (larger data volumes, more complex transformations, more consumers), you may outgrow the Datamart experience.
- **Standardization:** If you’re trying to enforce consistent data patterns across a program (naming, domains, lineage, deployment), you may want a more explicit platform approach.

### Alternatives to consider (and how to choose)

Mike, Tommy, and Seth point to the broader Fabric toolkit as the way to think about next steps. A helpful decision point is: **Are you building a reusable data product, or a single BI solution?**

- If you’re building a reusable data foundation, teams often gravitate toward **Lakehouse/Warehouse patterns** (and the engineering practices that go with them).
- If you’re delivering a focused reporting outcome and need to move quickly, Datamarts can still be a pragmatic choice—as long as you’re clear about what happens when the solution grows.

## Looking Forward

If your team is evaluating Datamarts (or re-evaluating them), treat the decision like an architecture choice, not a feature toggle:

1) define who the data product is for and how many downstream consumers you expect,
2) write down the governance plan (ownership, refresh, documentation, support), and
3) choose the simplest tool that still fits the “year 2” version of the solution.

## Episode Transcript

[TRANSCRIPT_PLACEHOLDER]

## Thank You

Want to catch us live? Join every Tuesday and Thursday at 7:30 AM Central on YouTube and LinkedIn.

Got a question? Head to [powerbi.tips/empodcast](https://powerbi.tips/empodcast) and submit your topic ideas.

Listen on [Spotify](https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv), [Apple Podcasts](https://podcasts.apple.com/us/podcast/explicit-measures-podcast-power-bi-podcast/id1534447935), or wherever you get your podcasts.
