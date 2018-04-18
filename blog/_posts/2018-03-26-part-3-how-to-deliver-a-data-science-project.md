---
title: 'Part 3: How to deliver a data science project'
author:
  - joy_bonaguro
  - kim_hicks
  - blake_valenta
image:
  thumb:
  feature:
  caption:
  source:
    title:
    author:
    source_link:
    author_link:
    license:
    license_link:
description:
date: 2018-03-26 00:00:00
categories:
  - blog
---

---

*This is the 3rd of a 4 part series on managing data science projects in government.*

1. [*Part 1: How to solicit and select data science projects*](/blog/part-1-how-to-solicit-and-select-data-science-projects/)
2. [*Part 2: How to scope data science projects*](/blog/part-2-how-to-scope-data-science-projects/)
3. *Part 3: How to deliver a data science project*
4. [*Part 4: How to tell your data science story*](/blog/part-4-how-to-tell-your-data-science-story/)

---

You need to deliver implementable data insights to your client. This article describes how to deliver the most value and ensure that your insights are understood and get used.

## How to execute your data science project

#### **Define and communicate the phases of analysis**

Each data science project moves through analytical phases. You need to communicate these phases to your client, including what to expect. For example, at DataSF, each project includes an exploratory analysis (EA) phase. We communicate that the purpose of the EA is to:

* Build a shared understanding of the datasets
* Confirm that we are looking at the data correctly
* Confirm the data inputs and assumptions
* Identify data gaps or quality issues
* Inform and steer the analysis given high level trends

Communicating the purpose of each phase is essential. You can get side tracked. For example, during the EA phase, your client may see their data in a new way. This could introduce new questions or lines of inquiry. Keep everyone focused by referencing the charter if necessary.

Other project phases typically include:

* Individual or unit analysis: Better understand individual or unit trends and typical pathways; start grouping similar profiles.
* Modeling: Identify predictors or indicators; develop profiles of groups or categories; measure likelihood of an outcome.

#### **Deliver a "product" at every meeting**

For each project, we schedule a recurring project meeting ahead of time. We then come to each of those with a deliverable, usually a slidedeck. These briefings are tied to the phases of analysis and milestones in the project charter. That also means you need to budget time to not just do the analysis - but to translate it into a slidedeck.

Each briefing has a specific goal and usually involves a "blessing" from the client to move to the next step. Often your client will have to digest or respond to questions afterwards.

Briefings are essential for bringing the client along this data journey with you. Do not disappear into a data science cave and pop out later with some "magical" model. If your clients make this journey with you, they are more likely to:

* Help you course correct if you get off track
* Understand and accept your eventual insights
* Identify opportunities for further exploration
* Identify implementation concerns or issues early

#### **Squeeze don't wring the data**

You love data. And now you get to dig into a new fun dataset from your client. But this is when you need to restrain yourself. Your client gave you this data to support a specific question. While you don't want to close off important insights, do not pursue every modeling idea you dream up.

If you maintain an attitude of being client-centered, you'll focus on the most efficient analytical path to answering their question. Find opportunities to play with new tools or techniques on your own time.

## How to ensure your data science insights are implemented

#### **Do implementation research**

At DataSF, we develop a user and context research plan for each project. The goal of this research is to ensure that our algorithms and outputs meet the needs, requirements, and constraints of our clients and users. An algorithm without useful implementation is just academic.

Our [handbook on user and context research](https://docs.google.com/document/d/1sF3BwH4Z6yDZMoK-bAJ4CnopdmZ_TgdmqqBysHMAFCw/edit?usp=sharing) borrows heavily from the field of user-centered design. At a minimum, we exit the research phase understanding:

* How the current service or business process works and its pluses and minuses
* What data tools are feasible to deploy, both from the end user and technical perspective

#### **Discover with statistics but deploy a practical tool**

You may use a variety of modeling and statistical techniques to answer your client's question. However, you may not be able to deploy those models in real or quasi realtime. Based on your implementation research, you'll understand what technical resources and analytical capacity exists to manage the tool going forward.

For example, some of our clients don't have the statistical expertise to interpret ongoing model output. Or there may not be a way to deploy the algorithm in their technical environment. As a result, sometimes you may have to provide your client with a simpler tool. In one project, we used a variety of modeling techniques but ultimately delivered a workbook that extracted the key metrics in a variety of useful views. The client uses the workbook in their ongoing work.

If you do deploy a model, make sure that the client can manage it over time. You need to balance operational sustainability with the sophistication of the end product. If you deliver something with overhead, you'll find yourself losing future analytical time to maintaining old projects.

#### **Budget time for follow ups**

Lastly, budget time for follow ups, including user testing the tool, training, potential fixes and changes and any additional briefings to new stakeholders. These follow ups help drive user adoption and buy-in.