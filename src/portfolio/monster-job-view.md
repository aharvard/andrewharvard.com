---
layout: 'layouts/work-item.njk'
title: 'Engineering the new Monster Job View'
date: 2023-04-04
displayOrder: 1
company: Monster
role: Principal UX Engineer
thumbnail:
  image: '/img/monster-job-view/thumb.jpg'
  imageAlt: ''
---

## Design Prototyping

After the Monster design and product teams validated a new direction for a "job view" refresh, I built a design prototype to discover and solidify technical requirements, break down the work, and deliver across two teams and two UI repos (our design system & the customer-facing website).

<div class="video-wrapper"><iframe style="aspect-ratio: 3508 / 1870" src="https://player.vimeo.com/video/814942505" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  title="job-view-scroll-proto.mov"></iframe></div>

## Technical Planning

The prototype helped me identify patterns and drive technical planning conversations, which helped us batch and sequence the work. I wrote some docs that outlined what we needed to execute in our design system:

1. Update the Tab component
2. Update the Horizontal Navigation component
3. Deliver new Scroll Navigation components

_Each work item mentioned here was a team effort! While I took point on execution, I collaborated with our designers, incorporated feedback from other devs after code reviews, and fixed bugs found by our QA folks._

![](/img/monster-job-view/01.jpg)

## Execution

### Tab Component Updates

I updated the Tab component with a new look and feel and fixed some accessibility issues. Additionally, with the new design, a Tab can have a light, dark, or dynamic background. When dynamic is configured, the color of the label is calculated at runtime to achieve sufficient color contrast.

![](/img/monster-job-view/02.jpg)

![](/img/monster-job-view/03.jpg)

### Horizontal Navigation Updates

Next, I refactored the Horizontal Navigation component to leverage the updated Tab component. Previously, this component lacked semantic markup and did not provide the most accessible UX. I maintained backwards compatibility while also extending this component to allow Tabs to be constructed from a single prop that expects an object.

![](/img/monster-job-view/04.jpg)

![](/img/monster-job-view/05.jpg)

### New Scroll Components

The trickiest part of this work was identifying how we would deliver the scrolling UX from the design system. Without prototyping, my team likely would have spent more time iterating during delivery cycles than we could afford.

I advocated for us to abstract away as many implementation details for developers so that our design system has more control over how this experience evolves. So, I developed two new components for this part of the work to deliver a scrolling navigational experience.

The Scroll Navigation component wraps all of the page content where we want to provide a scroll-based navigational experience. This component allows a developer to configure which nav element to display. Out of the box, this component renders the Horizontal Navigation. This means developers don't have to import and connect the Horizontal Navigation to the user's scroll.

The Scroll Navigation Section component wraps content sections within the parent and drives the Tabs' content in the Horizontal Navigation.

To make things work as intended, I used the Intersection Observer API and wrote a simple state-machine reducer to track the "active" section in view.

![](/img/monster-job-view/06.jpg)

<div class="video-wrapper">
<iframe style="aspect-ratio: 2638 / 1720" src="https://player.vimeo.com/video/814932791?h=37f3a79843" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="scroll-nav"></iframe>
</div>

## Ongoing Challenges

Due to browser performance issues and time constraints, we could not deliver the initial design ask — when a Tab overflows the Horizontal Navigation, it should scroll into view when it becomes active.

To drive conversations with our product and design partners, I put together the following deck to illustrate the issue and proposes alternative directions.

<div class="video-wrapper">
<iframe style="aspect-ratio: 3584 / 2240" src="https://player.vimeo.com/video/814932758?h=6c3c63fe02" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="horizontal-nav-overflow-issue"></iframe>
</div>

Currently, we're having conversations about how to meet the initial design ask and considering the following options:

1. Ship MVP and do nothing
2. Spend an unknown amount of time engineering a solution that meets the design while being performant in the browser
3. Spend a solid chunk of time delivering some new reusable components that we can use to make the responsive UX better

## Conclusion

I suspect we may resort to shipping the MVP. However, knowing that other options exist is valuable, and we will likely be able to fall back on them as we get real feedback from users.
