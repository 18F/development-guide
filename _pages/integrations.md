---
title: Third-Party Integrations
layout: post
---

Our software is built on the shoulders of giants. We use several third parties
to perform continuous monitoring, host our apps, etc.; all should be approved
on the [GSA IT Standards
list](https://ea.gsa.gov/#!/itstandards). A public, but only periodically updated, [snapshot of the IT Standards](https://github.com/GSA/data/blob/master/enterprise-architecture/it-standards.csv) is also available.

## Standards

While we don’t formally recommend third-party services, a handful have been
approved by GSA IT (some we pay for collectively) and provide services which
are essential for attaining an [Authority-to-Operate (ATO)](https://atos.open-control.org). To get started quickly
and to ease the ATO burden, use these systems; pain awaits your project
otherwise.

| Purpose                            | Tool                                                                                                                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Back end Performance Monitoring    | [New Relic APM](https://newrelic.com/products/application-monitoring)                                                                                                |
| Continuous Integration             | [CircleCI](https://circleci.com) and/or [GitHub Actions](https://github.com/features/actions)                                                                        |
| Dependency Analysis                | [Snyk](https://snyk.io) and/or [GitHub](https://github.com)                                                                                                          |
| Front end Performance Monitoring   | [Google Analytics](https://marketingplatform.google.com/about/analytics/) (provided by [DAP](https://digital.gov/guides/dap/))<br />Note: New Relic is not approved. |
| Infrastructure as a Service (IaaS) | [Amazon Web Services GovCloud](https://aws.amazon.com/govcloud-us/) (provided by [cloud.gov](https://cloud.gov))                                                     |
| Platform as a Service (PaaS)       | [cloud.gov](https://cloud.gov)                                                                                                                                       |
| Source Control                     | [GitHub](https://github.com)                                                                                                                                         |
| Static Site Hosting                | [Federalist](https://federalist.18f.gov)                                                                                                                             |
| Uptime Monitoring                  | [New Relic Synthetics](https://newrelic.com/products/synthetics)                                                                                                     |
| User Analytics                     | [Digital Analytics Program (DAP)](https://digital.gov/guides/dap/)                                                                                                   |

## Defaults

We also track a second set of services that aren’t as essential as the above,
but which we provide for consistency and shared knowledge across projects.
These are good defaults should their need arise; you should generally think
twice before building these tools yourself.

| Purpose                | Tool                                                     |
| ---------------------- | -------------------------------------------------------- |
| API Analytics          | [api.data.gov](https://api.data.gov/about/)              |
| API Throttling         | [api.data.gov](https://api.data.gov/about/)              |
| Site Search            | [search.gov](https://search.gov/)                        |
| Static Code Analysis   | [Code Climate Quality](https://codeclimate.com/quality/) |
| Test Coverage Tracking | [Code Climate Quality](https://codeclimate.com/quality/) |
