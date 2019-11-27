---
title: Third-Party Integrations
---
# Third-Party Integrations

Our software is built on the shoulders of giants. We use several third parties
to perform continuous monitoring, host our apps, etc.; all should be approved
on the [IT Standards
list](https://github.com/GSA/data/blob/gh-pages/enterprise-architecture/it-standards.csv).

## “Must”s

While we don’t formally recommend third-party services, a handful have been
approved by GSA IT (some we pay for collectively) and provide services which
are essential for attain an Authority-to-Operate (ATO). To get started quickly
and to ease the ATO burden, use these systems; pain awaits your project
otherwise.

| Purpose | Tool |
| --- | --- |
| Back end Performance Monitoring | New Relic APM |
| Continuous Integration | CircleCI |
| Dependency Analysis | Snyk and/or GitHub |
| Front end Performance Monitoring | Google Analytics (provided by DAP)<br />Note: New Relic is not approved. |
| Infrastructure as a Service (IaaS) | Amazon Web Services GovCloud (provided by cloud.gov) |
| Platform as a Service (PaaS) | cloud.gov |
| Source Control | GitHub |
| Static Site Hosting | Federalist |
| Uptime Monitoring | New Relic Synthetics |
| User Analytics | Digital Analytics Program (DAP) |

## Defaults

We also track a second set of services that aren’t as essential as the above,
but which we provide for consistency and shared knowledge across projects.
These are good defaults should their need arise; you should generally think
twice before building these tools yourself.

| Purpose | Tool |
| --- | --- |
| API Analytics | api.data.gov |
| API Throttling | api.data.gov |
| Site Search | DigitalGov Search |
| Static Code Analysis | Code Climate |
| Test Coverage Tracking | Code Climate |
