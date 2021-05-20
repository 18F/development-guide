---
title: Releasing Software
sidenav: approach
sticky_sidenav: true
---

Releasing software is hard. Over time, we have developed strategies that can help reduce risk and uncertainity in the release process.

## Small, Iterative Releases

We recommend on all projects to get into the habit of releasing software as early and often as possible. The first
iteration of your software should not aim to have full functionality; a better goal for the very first release is to have as little
functionality as possible.

## Big Bang Releases

We do not recommend "big bang releases," defined here as when a team works many months on some code with the expectation that it will be
"turned on" in a big release event. 

However! There are many circumstances in which we are working on projects that, for reasons we cannot control, are scheduled for this kind
of big bang release, and our partners are unable or unwilling to take our advice around a slower rollout. 
While releasing a lot of software into the wild all at once is inherently more risky than a slower roll-out, we have identified ways that 
may help you mitigate this risk!

### When A Big Bang Release is Necessary

#### Give Your Team a Lot of Time

Recommendation: Give yourselves *at least* a month to address issues that may be hard to predict before the release deadline.

Big bang releases heighten the risk of unknowns that can crop up as the release date looms closer. Estimate your time very conservatively,
and set expectations with your partner to allow space and time close to release date to give your team room to address unexpected critical
issues. 

#### Release to Different User Groups at Different Times

Recommendation: Releasing to a subset of users at a time, creating a better user experience for them and a better time post-release for
your team. 

There are always going to be immediate bug fixes and customer asks in the aftermath of a release. 
Initally scoping a big release to a subset of user types at a time will narrow the developer and customer success team's focus, making
debugging and prioritizing fixes easier.

#### Practice Data Migrations Often

Recommendation: Do dry runs of any critical data or infrastructure migrations.

Practice makes perfect! Try out your migrations regularly in the months leading up to the release so that everyone feels very comfortable 
with how they work and what to expect. 

#### Develop Mature Incident Response Practices

Recommendation: Build [Incident Response practices and run drills](/security/incident-response-drills/) before releasing.

It's impossible to completely de-risk a release. Developing a plan ahead of time addressing how you will approach fan incident will
enable your team to focus on fixing the issue as soon as possible. Once you have a response plan, you should conduct 
[incident type drills](/security/incident-response-drills/#example-incident-response-drills) so that your team is well-practiced in
what do if something goes wrong.

#### Develop Training Strategies in Advance

Recommendation: Do user research and develop training strategies ahead of time to help users ease into the new system.  

It can be jarring as a user to one day have a completely new system. Spending some time before release working with critical users of the
system to understand the common pitfalls a user may experience or uncover will help you develop training materials to address those issues 
(or make the system more intuitive.) Releasing training materials for users to look at before the release will create better familiarity and
make users less wary or uncomfortable with the big change.

#### Prepare Customer Support Response Templates

Recommendation: Develop templates for expected support requests to have consistent messaging and advice to users.

Launches often have expected support requests, such as: 
* "Why doesn't the system do X?"
* "This is broken."
* "I can't find Z."

Preparing responses ahead of time allows the customer support team to give the same suppport to anyone who a predictable issue, allowing them
to focus their energies on unexpected support needs. It also helps unsure a better customer experience for users.
