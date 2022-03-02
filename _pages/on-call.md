---
title: On call recommendations 
sidenav: approach
sticky_sidenav: true
---
As 18F transforms into an organization that builds and supports products,
some of these products may need 24/7 availability. 18F is also an organization
that occasionally gets called on to develop emergent, urgent web applications
that need short-term 24/7 support.

The needs of those two different scenarios are different. Regardless of the
type of project, there are a number of things that could be considered at
different stages of development that would allow both types of teams and
products to be set up for on-call success.

## Staffing/resourcing phase
Resourcing is very important to the support success of a team.

For short, emergent projects, staffing *at least one* extra engineer than estimated,
without increasing scope will better allow:
 - opportunities for engineers to pair,
 - higher quality code review, and
 - dedicated time to creating comprehensive documentation.

Staffing an engineering role that has ownership over documentation and technical
writing will also ease some of this stress.

It should be clear from the beginning of staffing discussions for a project with
possible on-call expectations that providing out-of-regular hours support is a part
of the assignment.

The incentives for being on-call also need to be very clear. Will overtime be paid?
Is there a limit to the amount of hours staff can work? These incentives need to be
clearly defined and clarified for the team before anyone is expected to accept an
on-call shift. Some of the limitations like hour caps may be level-specific, and so
we will need to build an organizational fluency at the supervisory level to help
individual people navigate them.

### Start talking about support *now*
Support can look a lot of different ways. Will this be an ongoing, highly-available
product that needs ongoing 24-hour support? Will this be a short-term project that
needs 24-hour support for two weeks? Does it only need support during Eastern-time
work hours, or throughout-all-US-time-zone work hours? 

Discussion about what type of support the project may need, both in the short- and
long-term, should be inserted into the staffing/planning stage as soon as possible.
The shape of support may not be clear this early in the product life cycle, but
starting those conversations now will guide what kind of documentation and telemetry
needs to be built into the project.

## Development phase

### Documentation is part of the development cycle
Documentation makes it easier to onboard a new team member, explain and justify
historic decision-making, and ultimately ensure long-term on-call success. All team
members, from the product manager to the engineers, should be in alignment about the
importance of documentation.

This includes architectural decision records (ADRs), but it also includes details
that evolve as the system does such as:
- Setting up local development from zero,
  - Including what local config/variables are necessary, and
  - Who to contact to grant permissions to access various systems
- The entirety of the tech stack/dependencies,
- Runbooks of common problems,
- CI and deployment workflows,
- What external accounts are necessary, 
- How to read and interpret logging information and metrics,
- How to log into the production instance in case live debugging is necessary, and
- The human processes for getting code to production and how those might differ in an emergency situation

### Telemetry and monitoring is part of the product
As development proceeds, it is important to think about monitoring, alerts, and
telemetry into the system itself. Questions you should be thinking about from the
very first line of code:
- How will the application know when something goes wrong?
- How will we be alerted that something is going wrong?
- How will we debug or troubleshoot what’s going wrong?

Ensure that this is in place during development cycles will make it a lot easier to
transition to a live product needing support.

### Create a checklist for onboarding staff
As you add secrets, credentials, and third-party tools to the tech stack, you should
be documenting exactly what a new team member needs access to in order to be able to
provide support. Adding an onboarding checklist[^1] that you validate often makes it
easy not to overlook an important account or piece of information.

## Support phase
In an ideal world, the folks providing support will be the same folks who have been
working on the product. While we don’t often live in an ideal world, doing the work
to make support seamless for team members will also set external support people up
for success!

These recommendations will help reduce the cognitive load of your support staff. Even
developers deeply knowledgeable about the product may forget obvious things to check
if they are tired or stressed about a highly visible incident.

### Establish scope of support
Before the support phase begins, the team should align and document the scope of
support, and what responsibilities are expected of the support staff. The person
on-call should know definitively what is expected of them in different types of
scenarios, and whether they are in charge of troubleshooting, fully resolving or
escalating an incident. 

### Develop the infrastructure
18F should establish the go-to infrastructure for on-call support. This includes (but
is not limited to):
- An established alerting system with SMS, email, and (ideally) Slack integrations,
- A way for support staff and development team to manage on-call schedules,
- A way for support staff to be alerted and,
- A way for support staff to acknowledge an incident

### Making pairing a priority
Pairing in the development phase will make your code more robust and spread expertise
across the team. In the support phase, making time for pairing sessions for newer or
non team members will make it easier for everyone to understand how the code works as
well as surface gaps in understanding and access.

### Have easy entry-points for anyone
Developing a series of quick references for on-call staff will give them an entry
point into an incident. These can include:
- An incident response checklist,
- A quick reference troubleshooting guide that contains common/known issues and how to debug them,
- Timeline expectations (often defined in the compliance process), and
- An escalation chain so that the on-call staff knows who to contact if they need to;
  - Escalate the incident or,
  - Locate someone with specific area expertise

### Create an incident response guide
Quick references are not enough! Your on-call staff needs an in-depth incident response
guide that includes an incident response checklist as well as documenting likely
scenarios will give anyone on-call guardrails to be successful. The documentation that
is generated during development can be directly applied into this guide, so the more
up-front work you do, the easier it will be!

It is impossible to plan for every possible scenario[^2], but even common issues can
be difficult to keep top-of-mind if an incident happens in the middle of the night.
Creating step-by-step instructions will reduce cognitive load for the support staff,
reducing panic and allowing them to focus on the issue at hand.

The guide should be:
- Located somewhere easily accessible,
- Written in as plain language as possible,
- Tested by the team and,
- If support includes non-team members, validated by someone not familiar with the development cycle 

The shape of this guide is outside the scope of this recommendation document; however,
it would greatly benefit 18F to develop a template for this and the quick references.

The [login.gov guide](https://handbook.login.gov/articles/secops-incident-response-guide.html)
is a good starting place for thinking about what a guide can and should look like.

### Test and iterate your support guides with simulations
Running “chaos engineering” simulations of incidents will allow you to test the
efficacy of your guides and quick references. Chaos engineering is the practice of
“experimenting” on a system to test resiliency. These exercises should be performed
before the production system goes live to test team readiness, as well as periodically
after go-live to continue improving team practices.

The basic premise is to simulate an incident that could possibly occur in production,
and see how quickly and effectively the team can respond and resolve the issue.

These simulations:
- Mimic incidents and measure your system’s ability to be resilient, 
- Build confidence in the team’s ability to navigate and solve complex issues that may arise in production, and
- Expose systemic weaknesses that can be fixed

Prioritize events that are likely to happen within the context of your system and have outsized impacts. Incidents that may be relevant include (but are not limited to) massive spikes in traffic or network outages. 

[^1]: See data.gov’s [new member issue template](https://github.com/GSA/datagov-deploy/blob/master/.github/ISSUE_TEMPLATE/onboard-team-member.md) as an example.
[^2]: For more in-depth information about developing resilient systems, see Logan McDonald’s Introduction to Resilience Engineering. Presentation [here](https://drive.google.com/file/d/18edrkHIemf1gvcekZOklmZx5Rvj4SzLv/view?usp=sharing), deck [here](https://docs.google.com/presentation/d/1W9wKibgBvxCFpvLPNtGnkPiPDigAE1ih7MFFwTduLGI/edit#slide=id.g5ecdbbee9e_0_0).