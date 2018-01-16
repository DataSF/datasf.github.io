---
title: Preserving Art for the Future
background_image_path: /uploads/sculpture-palace-of-fine-arts-2.jpg
card_image_path: /uploads/sculpture-palace-of-fine-arts-4.jpg
resources:
  - name: Powerpoint Presentation
    url: 'https://datasf.org'
  - name: GitHub Repo
    url: 'https://datasf.org'
---


Have you ever looked at a work of public art and wondered - will that always be here? Will it be around for future generations? The San Francisco Arts Commission asks the same question because their job is to ensure that the city’s Civic Art Collection is preserved for current and future residents and visitors.

![](/uploads/versions/sculpture-palace-of-fine-arts-5---x----1920-1281x---.jpg)This is a caption

But there’s something tricky about public art preservation: every single piece is unique.

So how can you estimate the costs to preserve pieces that are by nature non-standard? Compare public art care to budgeting for roads and bridges. Infrastructure estimates can rely on a vast repository of historical and cross-jurisdictional maintenance costs, as well as careful modeling of material decay. Public art assets have historically been excluded from infrastructure analysis and therefore don’t have this rich discipline and data to draw on.

## Background: The Arts Commission must forecast art preservation needs 10-20 years out

Public art enriches public spaces, our cultural landscape, and supports our local art community. As part of the City’s 10 year capital plan, the Arts Commission must generate 10-20 year estimates of the cost to maintain the City’s public art collection. This ensures sufficient funds will be on hand to preserve art as the need arises.

The collection is extensive and growing. As part of every new City construction project, 2% of the budget is allocated to public art. So the City is always acquiring more public art in need of long-term budget plans and annual preservation priorities.

## Service Question: Estimating art preservation costs is complicated by the very nature of art: uniqueness

Each art piece is unique as a creative piece but also for practical reasons:

* **Material used.** Maintaining marble, a very robust material, is different than paper or aluminum.
* **Location.** Some pieces are easy to access, while others are in remote locations - like on a hiking trail.
* **Size and scale.** Some pieces can fit in a briefcase, while others require scaffolding and ladders to even touch the top.
* **San Francisco microclimates.** Some pieces are located in the sunny Mission while others face the wind and sea breeze of the Pacific Ocean.

Other factors include historical sensitivity and the starting condition of the piece. For example, a piece in poor condition will cost more to stabilize and move into preservation status.

## What We Did: Revised cost formula and forecasting improves estimates and helps prioritize pieces

Fortunately, the Arts Commission had already taken significant steps to pin down this tricky estimate. Using their expert knowledge of art preservation they had identified the core factors listed above, and had already developed the foundation of a formula to estimate the costs. However, they lacked the expertise to capture the often tricky interactions among the factors.They needed DataScienceSF’s help to put those factors together in the right sequence, accommodate interaction effects, and add key elements like forecasting, frequency, and other multipliers, such as dynamic condition ratings.

The original formula first took into account size and scale and then used a stability score (a function of material, microclimate, historical sensitivity and condition) to estimate costs. But the formula was leading to some strange cost estimates. For example, it was estimating the same costs to preserve a piece in good condition with mildly robust materials as a piece in very poor condition.

The revised formula also starts with size and scale, but then uses condition to generate an initial estimate. The estimate is then updated based on material sensitivity and a factor for frequency based on both microclimate and material sensitivity. The long-range projections then incorporate the treatment frequency schedule, interest, fixed costs and dynamic condition scores.

## Implementation: Easy tool generates updated forecasts with the push of a button

The Arts Commission is already using the new cost formula in the capital planning process and to prioritize preservation work this year.

To make it as easy as possible to use, DataScienceSF built an Excel based tool that allows them to:

* Easily drop in fresh data from their database
* Revise estimates at the push of a button
* Adjust assumptions built into the model

They’ve already made changes to some of the starting assumptions and are hearing significant interest from other jurisdictions hoping to improve their planning process for public art!