---
title: Keeping Moms and Babies in Nutrition Program
background_image_path: /uploads/k-174-chim-3560-3.jpg
card_image_path: /uploads/k-174-chim-3560-3-1.jpg
resources:
  - name: Powerpoint Presentation
    url: >-
      https://drive.google.com/file/d/0B3nQt7K8TDq0NmZJeldWY3pwdzQ/view?usp=sharing
featured: true
---


Have you ever been hangry (so hungry, you find yourself angry)? If you’ve ever experienced hangriness, you know firsthand the importance of food and nutrition for health and well-being. Now imagine if you are a pregnant mother or a newborn: proper nutrition is essential.

That’s why the [San Francisco’s Women, Infants and Children nutrition program](https://www.sfdph.org/dph/comupg/oprograms/NutritionSvcs/WIC/WIClocations.asp) (WIC) provides not only nutritious foods, but also nutrition education, breastfeeding support, and referrals to health care and community services for thousands of low-income families.

But since 2011, moms and babies have been dropping out of the program at higher and higher rates. Who was dropping out, when and why?

## Background: San Francisco manages a federal nutrition program for moms and babies

As a County, San Francisco’s Department of Public Health administers WIC, a federal program. WIC provides supplemental income for healthy foods as well as nutritional education and counseling to low-income mothers from prenatal through the first 5 years of a child’s life.

Eligibility is based on federal rules for income as well as meeting certain conditions for ongoing eligibility. Mothers receive guidance and counseling as well as checks that can be used at particular groceries for specific types of food, such as produce or milk.

Use of WIC is associated with many beneficial outcomes, including improving school readiness, socioeconomic outcomes and lifetime health.

## Service Question: Despite being eligible, babies are dropping out at higher rates every year

WIC noticed that retention rates have been falling since 2011. Women who start on WIC, are staying on it for less time. Only 28% of babies who enroll before 6 months of age, stay on it through age 5, the end of the program.

![Line chart showing decreasing retention rates (% still in program at 1 year of age) from 2011-2017](/uploads/versions/wic-droppingretention---x----477-397x---.PNG)

<figcaption>Since 2011, fewer babies have stayed in the program at 1 year of age, resulting in a 16% drop in retention since 2011.</figcaption>

One explanation could be that the economic recovery meant that less people were eligible or needed the program. But the department had already determined that the size of the eligible population well exceeded who they were serving.If eligibility was not an issue, what else could be driving the drop off?

They had a few hypotheses: since WIC is a federal program, there are many rules and regulations for maintaining eligibility. Moms have to come in for recertification appointments and are required to participate in certain forms of counseling. These types of program rules can turn off mothers or be too inconvenient.

In addition, the paper check system can be cumbersome to use in line at the grocery store. The State of California will be moving to electronic payment cards (similar to debit cards) by 2020 but in the meantime, checks are the payment method.

## Analytics: English speakers, formula feeders and lower rates of prenatal activity predict dropout

To tease out these hypotheses, DataScienceSF explored more than 6 years of WIC program data that included who joined when, various program interactions, checks issued and more. The dataset also included demographic details like race/ethnicity, preferred language and age of the mother.

Three major insights emerged.

1. **English speakers were much more likely to drop out regardless of their race/ethnicity.** For example, an English speaking Asian mother is 90% more likely to drop out than an Asian mother speaking non-English within the first year of birth. This immediately led to hypotheses that English speakers may be more aware of perceptions of stigma when using the program, e.g. when using paper checks.
2. **Moms who formula fed drop out at higher rates.** In contrast, breastfeeding moms stayed in the program longer. This also generated some hypotheses about the differences in preferences for formula feeding versus breastfeeding mothers.
3. **Moms that engaged WIC intensively before birth, were more likely to stay on.** Moms who consecutively attended 4 plus sessions before giving birth, stuck with the program longer. This finding held regardless of when the mom had signed up (e.g. first trimester versus second). Did more intense use increase commitment or better demonstrate the program benefits to moms?

![Diagram of tree model used to identify the most important factors that predicted drop outs.](/uploads/versions/wic-treediagram---x----830-523x---.PNG)

<figcaption>Using a tree model, we are able to predict with 83% accuracy who is most likely to drop out. Three factors in the tree model were especially insightful to the WIC team: feeding choice, prenatal engagement, and English speaking.</figcaption>

## Implementation: From quantitative insight to qualitative explanation to new outreach plans

As already noted, the analytical insights led to more questions. We knew from the start that this project would require both a quantitative component (to answer who, when, where, how) and a qualitative component (to answer why). That’s why we teamed up with the [Mayor’s Office of Civic Innovation](http://www.innovation.sfgov.org/). Through their [Civic Bridge program](http://www.innovation.sfgov.org/civic-bridge), they bring in pro-bono consulting to help support civic challenges.

We handed off the quantitative analysis to a pro-bono team from Google that conducted a range of interviews, observations and other qualitative research that focused on the groups identified in our analysis. For example, they did indeed identify stigma as being an issue for English speakers.

WIC is now using the major insights to reshape their outreach and program messaging, including a campaign to reduce stigma associations. There is also a plan to use the analysis to highlight to physicians the benefits of targeted referrals early in pregnancy. This analysis is also feeding into a larger citywide discussion about food insecurity in San Francisco and WIC’s role in helping to eliminate food insecurity.

## Client Details:

### Client Team

* Magdalene Louie, WIC Program Coordinator, Department of Public Health WIC
* Alecia Martin, Quality Improvement and Integration Coordinato, MCAH, Department of Public Health
* Priti Rane, &nbsp;Director of Nutrition Services, Department of Public Health WIC
* Ameerah Thomas, Health Care Analyst, MCAH, Department of Public Health

### Testimonial

> Even without prior knowledge of the WIC program, once presented with the problem statement, the DataSF team, with their expertise in data analysis, provided us with valuable insights and findings regarding the retention trends among children participating in the WIC Program. &nbsp;The most impressive part of their work was the extremely accurate predictive model that they build to help identify children that were at risk for dropping off even before they were born! This model has helped us strategically plan interventions and target our retention efforts towards the most vulnerable families in San Francisco. The entire DataSF team was highly responsive, innovative with a service-change oriented mindset and we could not have asked for better data partners to collaborate with!
>
>
> ---Magdalene Louie