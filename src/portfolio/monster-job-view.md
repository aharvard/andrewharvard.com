---
layout: 'layouts/work-item.njk'
title: 'Job View'
date: 2023-04-04
displayOrder: 1
company: Monster
role: Principal UX Engineer
thumbnail:
  image: '/img/monster-job-view/thumb.jpg'
  imageAlt: ''
---

## Design Prototyping

After the Monster design and product teams validated a new direction for a "job view" refresh, I built a design prototype to discover and solidify technical requirements, break down the work, and deliver across two teams and two UI repos (design system & the customer-facing website).

<div class="video-wrapper"><iframe style="aspect-ratio: 3508 / 1870" src="https://player.vimeo.com/video/814942505" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  title="job-view-scroll-proto.mov"></iframe></div>

## Technical Planning

I used Confluence to document and drive technical planning conversations, which helped us batch and sequence the work:

1. Update the Tab Component
2. Update the Horizontal Navigation Component
3. Deliver new Scroll Navigation Components

![](/img/monster-job-view/01.jpg)

## Execution

### Tab Component Updates

I updated the Tab component with a new look and feel and fixed some accessibility issues.

A Tab can have a light, dark, or dynamic background in this new design. When dynamic is configured, the color of the label is calculated at runtime to achieve sufficient color contrast.

![](/img/monster-job-view/02.jpg)

![](/img/monster-job-view/03.jpg)

### Horizontal Navigation Updates

Next, I refactored the Horizontal Navigation component to leverage the updated Tab component. Previously, this component lacked semantic markup and did not provide the most accessible UX. I maintained backwards compatibility while extending to allow Tabs to be constructed from a single prop that expects an object.

![](/img/monster-job-view/04.jpg)

![](/img/monster-job-view/05.jpg)

### New Scroll Components

Then, I developed two new components to deliver a scrolling navigational experience, as initially specified in the job view design concept. I used the Intersection Observer API to execute the interaction detail and wrote a reducer to track the "active" section in view.

These components abstract away the implementation details for developers so they don't have to import and connect the Horizontal Navigation to the user's scroll. Instead, a dev can import a Scroll Navigation component that acts as a wrapper and a Scroll Navigation Section component that drives the Tabs' content in the Horizontal Navigation.

![](/img/monster-job-view/06.jpg)

<div class="video-wrapper">
<iframe style="aspect-ratio: 2638 / 1720" src="https://player.vimeo.com/video/814932791?h=37f3a79843" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="scroll-nav"></iframe>
</div>

## Ongoing Challenges

Due to browser performance issues and resource constraints, we could not deliver the initial design ask — when a Tab overflows the Horizontal Navigation, it should scroll into view when it becomes active.

To drive conversations with our product and design partners, I put together the following deck to illustrate the issue and proposes alternative directions.

<div class="video-wrapper">
<iframe style="aspect-ratio: 3584 / 2240" src="https://player.vimeo.com/video/814932758?h=6c3c63fe02" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="horizontal-nav-overflow-issue"></iframe>
</div>

Currently, we're having conversations about how to complete the design work and considering the following:

1. Ship MVP and do nothing
2. Spend an unknown amount of time engineering a solution that meets the design while being performant in the browser
3. Spend a solid chunk of time delivering some new reusable components that we can use to make the responsive UX better

## Conclusion

I suspect we may resort to shipping the MVP. However, knowing that other options exist is valuable, and we will likely be able to fall back on the other ideas as we get real feedback from users.
