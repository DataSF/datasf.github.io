---
title: Streamlining Property Tax Appraisals
background_image_path: /uploads/architecture-sf.jpg
card_image_path: /uploads/architecture-sf-cropped.jpg
resources:
  - name: Powerpoint Presentation
    url: >-
      https://drive.google.com/file/d/0B3nQt7K8TDq0NnNqVHBUXzVta2M/view?usp=sharing
categories:
  - showcase
  - datascience
featured: true
excerpt: Imagine if a Ms. Jenkins sells her San Francisco home to a close friend at half the price ($500,000) of what she could have sold on the open market ($1 million). What would be the impact on property taxes?
---

Imagine if a Ms. Jenkins sells her San Francisco home to a close friend at half the price ($500,000) of what she could have sold on the open market ($1 million). What would be the impact on property taxes?

The Assessor’s Office must assess how much the new owner should pay in property taxes every time when there is a property transfer. But state law requires the office to accept the market value as the initial value for property taxes. Many times, the sale price reflects the market value but there are also exceptions, like Ms. Jenkins. So, how can you tell if a sale price is the market value of a property?

The difference between sale price and market value can affect City revenue. Property taxes are one of the most important revenue sources for local and state government. Nearly one-third of the City’s General Fund comes from property taxes, supporting City services, such as public safety, parks, libraries, health and neighborhood services. Using the example above, Ms. Jenkins’ friend should pay about $10,000 (assuming tax rate of 1% of $1M) not $5K (1% of $500K) in property taxes per year.

To assess a property at market value also ensures fairness. Imagine if Ms. Jenkins’ neighbor bought a similar home nearby at the same time. The neighbor would have paid twice as much in property taxes compared to Ms. Jenkins’ friend if the Assessor’s office accepted the sale price as the property’s new assessed value.

So here comes the challenge. When thousands of property transfers are processed in the Assessor’s Office every year, what is the best way to identify properties where the sale price does not reflect the market value?

## Background: Assessor resets property value at market rate after sale

Under Proposition 13 (1978), once a property changes hands, the Assessor must reset the property’s assessed value to market value. The process is called reassessment.

State certified appraisers in the Assessor’s Office are responsible for reassessing these properties after transfers. These appraisers have deep knowledge of the City’s real estate market. They use this expert knowledge combined with a slew of tools to conduct market analysis to determine:

1. The sale price is the market value; OR
2. The sale price is not market value and assigns a new value

During the process, appraisers carefully document their reasoning, so property owners can contest the value if they disagree. The work is time-consuming. Combined with the City’s active real estate market, the reassessment work queue has increased, creating a significant backlog of cases.

This backlog means taxpayers face uncertainty about how much they owe in taxes and if they’ll receive multiple years of catch-up bills. Delays also mean the City is not able to collect property taxes on time and may risk revenue if property ownership changes hands again before new bills are issued.

## Service Question: Can we streamline property appraisals while ensuring a fair process?

To help reduce their work queue, the Assessor’s Office needed to divide property sales into two buckets more efficiently:

1. Property transfers where the sale price represents the market value
2. Property transfers where the sale price does not represent the market value

This is more difficult than it looks. Properties are highly variable - two homes next to each other may have very different sales prices because of the history of the property, its characteristics, and many other factors.

![Price per square foot varies quite a bit - even in the same neighborhood](/uploads/asr-chart1.png)
<figcaption>Price per square foot varies quite a bit - even in the same neighborhood.</figcaption>
&nbsp;

## What we did: A statistical model creates a predicted price for each property sale

DataScienceSF developed three regression models that generate a “predicted price” based on many factors, starting with if it was a condominium, multi-family home, or single-family home. In each case, the model then uses data on when and where the property sold, and property details like the year built and square feet to generate a prediction.

![The predicted price of a home is affected by many factors](/uploads/asr-chart2-1.png)
<figcaption>The predicted price of a home is affected by many factors.</figcaption>
&nbsp;
## Implementation: Thresholds flag sales requiring a full appraisal

The models run on new data to generate price predictions on a bi-weekly basis. It then splits properties into two lists:

1. Sale prices that fit within a certain range of the predicted price
2. Sale prices that are very different from the predicted price.

The first list goes to a group of appraisers who conduct additional checks and quality assurance to determine if any properties should require additional analysis. Otherwise, the sale prices are accepted and enrolled as the new values. The second list gets divided up and assigned to appraisers for a full reassessment.

![The new process streamlines the assessment of sales that look typical](/uploads/asr-chart3-1.png)
<figcaption>The new process streamlines the assessment of sales that look typical</figcaption>
&nbsp;
<br>The new model resulted in over 250 cases removed from the work queue as of March 30, 2018. These cases represent approximately $407 million in pure roll value (not to be confused with additional value which still needs to be calculated).<br>

