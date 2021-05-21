---
title: Releasing Software
sidenav: approach
sticky_sidenav: true
---

Releasing software is hard. Over time, we have developed strategies that can help reduce risk and uncertainity in the release process.

## Small, iterative releases

We recommend on all projects to get into the habit of releasing software as early and often as possible. The first
iteration of your software should not aim to have full functionality; a better goal for the very first release is to have as [little
functionality as possible](https://18f.gsa.gov/2017/01/11/the-best-way-to-build-big-is-to-start-small/#start-small-make-it-end-to-end). 
A small-and-quick first release can help you [test your deployment pipeline and environments, while setting expectations for a rapid,
iterative release cadence](https://blog.thepete.net/blog/2019/10/04/hello-production/).

## Big Bang Releases

We do not recommend "big bang releases," defined here as when a team works many months on some code with the expectation that it will be
"turned on" in a big release event. We recommend, whenever it's possible,  rapid release cycles and iteration, coupled with usability research.

However, many times we are working on projects that, for reasons we cannot control, are scheduled for this kind of waterfall, big bang release,
and our partners are unable or unwilling to take our advice around an iterative rollout.  While releasing a lot of software into the wild all
at once is inherently more risky than an iterative roll-out, we have identified ways that may help you mitigate this risk. And even if you're
already practicing rapid, iterative releases, the tips here may offer ways you can improve your releases.

### When a Big Bang release is necessary

#### Give your team a lot of time

Recommendation: Give yourselves *at least* a month to address issues that may be hard to predict before the release deadline.

Big bang releases heighten the risk of unknowns that can crop up as the release date looms closer. Estimate your time very conservatively
and set expectations with your partner to allow space and time for your team, leading up to the release date, to address unexpected critical
issues. 

#### Release to different user groups at different times

Recommendation: Release to a subset of users at a time. This lets you test, creates a better user experience for them, and a better time
post-release for your team. 

There are always going to be immediate bug fixes and customer asks in the aftermath of a release. 
Initally scoping a big release to a subset of user types at a time will narrow the developer and customer success team's focus, making
debugging and prioritizing fixes easier.

#### Practice data migrations often

Recommendation: Do dry runs of any critical data or infrastructure migrations.

Practice makes perfect! Try out your migrations regularly in the months leading up to the release so that everyone feels very comfortable 
with how they work and what to expect. 

#### Develop mature incident response practices

Recommendation: Build [Incident Response practices and run drills](/security/incident-response-drills/) before releasing.

It's impossible to completely de-risk a release. Developing a plan ahead of time addressing how you will approach an incident will
enable your team to focus on fixing the issue as soon as possible. Once you have a response plan, you should conduct 
[incident type drills](/security/incident-response-drills/#example-incident-response-drills) so that your team is well-practiced in
what do if something goes wrong.

#### Develop training strategies in advance

Recommendation: Conduct usability research and develop training strategies ahead of time to help users ease into the new system.  

It can be jarring as a user to be surprised by a completely new system. Spending some time before release working with critical users of the
system to understand the common pitfalls a user may experience or uncover will help you develop training materials to address those issues 
(or make the system more intuitive.) Releasing training materials for users to look at before the release will create better familiarity and
make users less wary or uncomfortable with the big change. Your critical users can then become effective evangelists and trainers post-release
for others suddenly learning the new system.

#### Prepare customer support response templates

Recommendation: Develop templates and scripts so that expected support requests have consistent messaging and advice.

Launches often have predictable support requests, such as: 
* "Why doesn't the system do X?"
* "This is broken."
* "I can't find Z."

Preparing responses ahead of time allows the customer support team to give the same suppport to anyone facing a predictable issue, allowing them
to focus their energies on unexpected support needs. It also helps ensure a better, customer experience as users are consistently given
thorough and well-thought-out answers to these common problems.

### Pushing back against Big Bang Release releases

Partners are often deeply attached to big bang releases, but there are strategies you can deploy to try to convince partners to pivot to a
smaller, more iterative release strategy.

These factors are often project signs that a project may have some trouble brewing. If you are seeing any of these factors with your
partner, consider logging them as risks in your project health tracking.

#### The partner doesn't want to pick a cohort of controlled users

Understanding why a partner doesn't want to single out some controlled users is important. They may be nervous about creating inequity (or
a perception of inequity) that might have some political blowback. Perhaps they feel overwhelmed about the effort required to narrow down
to a subset of users, and so feel it's simpler to release to all users at once.

*Mitigation strategies:*
* Listen to and discuss fears with your partner to fully understand their reluctance. 
* Frame this step as the first of many interactions with their different user groups, and use that framing to help them better engage and 
understand their users. Having a more mature idea of their user groups will help them have confidence to stand behind their decisions better.

#### A long, arduous ATO process

Partners have a valid fear of the ATO process, and may be nervous that they must repeat the ATO process every time a change is made to the
system. That perspective easily lends itself to fear of iterative releases. 

*Mitigation strategies:*
* Engage security and ATO personnel early in the development process, or, ideally, embed someone onto the project team who can help advise. This strategy (among other improvements) helped GSA bring average ATO time from [six months to thirty days](https://18f.gsa.gov/2018/07/19/taking-the-ato-process-from-6-months-to-30-days/). 
* Familiarize yourself with 18F's [Before You Ship](https://before-you-ship.18f.gov/) guide so you can personally help alleviate some of their concerns.
* Teams at 18F have also found success in employing the "Walking Skeleton" technique, where the main architectural components of a system are
deployed early in a minumum viable way. Frontloading the infrastructure work creates an MVP for ATO work, and makes space for early
compliance and security oversight.

#### Legislative mandate

When the system is a byproduct of a legislative mandate, there can be political or legal implications if a deadline is missed.  A mandate 
for a specific type or level of service may make partners wary of more iterative work.

*Mitigation Strategies:*
* Explore options for beta or trial release of services. Sometimes releasing a website or digital service under the banner of
"beta" can provide needed flexibility for a rollout, making a big bang release less necessary.