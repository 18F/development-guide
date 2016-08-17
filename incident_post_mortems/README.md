# Incident post mortems
Though we fully expect to write dependable applications, every project will
experience service disruptions and other significant failings. In all cases,
we want to learn from our mistakes both within our projects and more broadly.
Post mortems, which detail the events and how they were resolved, are an
excellent mechanism for sharing this information.

Note that this document won't discuss what to do during a security incident,
if cloud.gov is having issues, what to report to your client, etc. For those,
see:
* https://github.com/18F/security-incidents
* https://cloudgov.statuspage.io/
* cloud-gov-support@gsa.gov
* Slack: #infrastructure, #incident-response, #cloud-gov-support

## Key components
Before any deep analysis we should write a **timeline**, beginning at the time
the incident was discovered and ending at the point the incident was declared
over. Events in this timeline include deploys, configuration changes, key
moments of discovery, client communications, and anything else that'd be
relevant to understanding the incident. If further analysis discovers that
certain events caused the incident, those events should also be added

Analyze the **factors** that contributed to the incident. Here it's important
to emphasize the [Retrospective Prime
Directive](http://www.retrospectives.com/pages/retroPrimeDirective.html);
paraphrased: everyone did their best; there should be no judgement of
individuals. If lucky, we will discover a single **root cause**, but often we
will find a sort-of comedy of errors or serious of unfortunate events that
collectively led to the incident.

Propose, discuss, and prioritize **preventative measures**. This is the key
outcome for the project team: we want to avoid these types of problems in the
future.

## Examples
* [C2](./C2)
* [Cloud.gov](./cloud_gov)

## Additional resources
* John Allspaw's [introduction](https://codeascraft.com/2012/05/22/blameless-postmortems/)
* This [great * presentation](http://www.slideshare.net/danmil30/how-to-run-a-postmortem-with-humans-not-robots-velocity-2013) by Dan Milstein
