---
title: Incident Reports
---
# Incident Reports
Though we fully expect to write dependable applications, every project will
experience service disruptions and other significant failings. In all cases,
we want to learn from our mistakes both within our projects and more broadly.
Incident reports, which detail the events and how they were resolved, are an
excellent mechanism for sharing this information.

Note that this document won't discuss what to do during a security incident,
if cloud.gov is having issues, what to report to your client, etc. For those,
see:
* https://github.com/18F/security-incidents
* https://cloudgov.statuspage.io/
* cloud-gov-support@gsa.gov
* Slack: #infrastructure, #incident-response, #cloud-gov-support

## Key components
At the high level, we want to follow Mark Imbriaco's [formula for writing a great post-mortem report](https://www.digitalocean.com/company/blog/inside-digitalocean-mark-imbriaco/#departing-from-github):
1. Apologize for what happened.
1. Demonstrate you understand what happened.
1. Explain what you will do to reduce the likelihood of it happening again.

Before any deep analysis we should write a **timeline**, beginning at the time
the incident was discovered and ending at the point the incident was declared
over. Events in this timeline include deploys, configuration changes, key
moments of discovery, client communications, and anything else that'd be
relevant to understanding the incident. If further analysis discovers that
certain events caused the incident, those events should also be added

Analyze the **factors** that contributed to the incident. Here it's important
to emphasize the [Retrospective Prime
Directive](http://www.retrospectives.com/pages/retroPrimeDirective.html);
paraphrased: everyone did their best; there should be no judgment of
individuals. If lucky, we will discover a single **root cause**, but often we
will find a sort-of comedy of errors or serious of unfortunate events that
collectively led to the incident.

Propose, discuss, and prioritize **preventative measures**. This is the key
outcome for the project team: we want to avoid these types of problems in the
future.

Define a single place to put these artifacts and be consistent. It doesn't
matter if it's GitHub issues, Google Docs, a wiki, etc. so long as it's kept
together and easy to reference by both the team and interested stakeholders.
Don't make folks search for the information.

## Examples
* [C2](./C2/c2-outage-report-2016-08-10.pdf)
* [Cloud.gov](./cloud-gov)

## Additional resources
* John Allspaw's [introduction](https://codeascraft.com/2012/05/22/blameless-postmortems/)
* This [great * presentation](http://www.slideshare.net/danmil30/how-to-run-a-postmortem-with-humans-not-robots-velocity-2013) by Dan Milstein
* Mark Imbriaco's [formula for writing a great post-mortem report](https://www.digitalocean.com/company/blog/inside-digitalocean-mark-imbriaco/#departing-from-github),
  and [an example with some commentary](https://medium.com/@faruque/post-mortem-communication-789f396c7dd6#.t1u4ziduf)
* @peculiaire's [template for retrospective meetings](https://github.com/peculiaire/incident-lifecycle/blob/master/retrotemplate.md)
  (adapted from what Heroku uses)
* Allspaw's article on [Infinite How's](https://www.oreilly.com/ideas/the-infinite-hows)
  - an alternative to Five Whys (that arguably works better)
* @danluu's [collection of post-mortems](https://github.com/danluu/post-mortems)
