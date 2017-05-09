# Tech Leads

Whereas facilitators, the diversity lead, etc. are primarily focused on our
developers and their needs, tech leads focus on qualities of our technical
work. 


## Responsibilities

Technical leads are primarily charged with improving and maintaining the
technical quality of our projects. These qualities include high-level topics
such as system architectures and deployment strategies, frequent tasks like
library selection and developer work-flow, down to line-level style guides.
Best practices may arise from each lead's experience, but more often come from
aggregating knowledge across 18F projects. Leads should therefore have a good
sense of what problems are recurring across teams and be prepared to ensure
solutions propagate.

The leads also serve as point people around engineering-wide issues that arise
within their domains. These include tracking down security advisories,
ensuring the maintenance of shared libraries, pinch-hitting when teams are
missing specific skill-sets, and so forth. Leads should therefore be generally
available to address these concerns directly or indirectly.

We should emphasize that while technical leads are ultimately responsible for
these tasks, they will most certainly delegate to subject matter experts,
working groups, and others where appropriate.


## Current roster

* Backend - [CM Lubinski](https://gsa-tts.slack.com/messages/@cm)
* Data - [Tony Garvan](https://gsa-tts.slack.com/messages/@tony)
* DevOps - [Adam Kendall](https://gsa-tts.slack.com/messages/@adamkendall)
* Frontend - [Marco Segreto](https://gsa-tts.slack.com/messages/@marco)
* Security - [DKP](https://gsa-tts.slack.com/messages/@dkp)


## The Leads API

Below we describe several of the methods technical leads may use to achieve
their objectives as well as what to expect from them in these activities.
Combined, this creates a sort of "Leads API".

### Office hours

Leads generally set aside some time on a routine basis to act as "office
hours". During this time, the lead is explicitly available for discussing
architectures, rubber duck-ing solutions, and other point-to-point
conversations. Be aware that leads will generally charge time to projects if
the topics warrant a deep discussion. See the "18F Engineering" calendar to
review upcoming sessions.

Leads are often available outside of this block for similar conversations, but
may require additional scheduling.

### Project reviews

Reviewing project-specific practices also allows leads to share knowledge
across teams. These reviews can be quite encompassing (see our [architecture
reviews](../architecture_reviews/)) or focused on particular concerns, leading
to a range of time investment. It is wise to rope technical leads in as early
in a project's life cycle as possible so that they might provide insight
around likely issues and solutions others have developed. Leads may suggest
developers with more subject matter expertise hold this review. In most cases,
time spent on project reviews will be billed to that project.

Here we should emphasize that project reviews are *not* a gate; they are
non-binding and exist to aid the individual project and give the leads insight
into that project's strategies.

### Engineering-wide discussions

When higher-level decision making needs to take place, leads will organize and
invite the whole chapter to discuss. These may be through a video conference
or asynchronously through #dev and surveys. Most often, the relevant leads
have a suggested course of action and are seeking input (particularly negative
input), such as whether or not to move towards Docker-centric standardization
or if there's a strong preference around branching-vs-forks. Time spent here
should be billed to "General".

### Guides

Leads, along with any relevant working groups, try to document learnings and
best practices through developer guides. These cover a wide range of topics
from recommended libraries, to linter setup, to tooling setup. They include
warnings around potential pain points from projects of the past and strong
recommendations for the purpose of standardization. Guides should be seen as
references; use them when you don't have a specific preference or when you
need to bolster a technical argument.

All of our guides are living documents. Please make suggestions via pull
requests, issues, or the relevant slack channel.

### Other

Technical leads have many more levers to achieve their objects. These include:

* hosting *tutorials*, book clubs, and other educational presentations
* maintaining specific *projects* like scaffold generators and gitsecrets
  rules
* performing ad hoc *code review* for developers who request it

That said, this Leads API is not set in stone. Please reach out to share
suggestions on how they can best serve 18F's needs.
