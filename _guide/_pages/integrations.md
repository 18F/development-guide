---
title: Third-Party Integrations
---

Our software is built on the shoulders of giants. We use several third parties
to perform continuous monitoring, host our apps, etc.

## Standards

While we don’t formally recommend third-party services, a handful have been
[approved](https://handbook.tts.gsa.gov/software/#get-access-to-software-we-already-have), procured, and provide services which
are essential for attaining an [Authority-to-Operate (ATO)](https://atos.open-control.org). To get started quickly
and to ease the ATO burden, use these systems; pain awaits your project
otherwise.

| Purpose                            | Tool                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Back end Performance Monitoring    | [New Relic APM](https://newrelic.com/products/application-monitoring)                                                                                               |
| Continuous Integration             | [CircleCI](https://circleci.com) and/or [GitHub Actions](https://github.com/features/actions)                                                                       |
| Dependency Analysis                | [Snyk](https://snyk.io) and/or [GitHub](https://docs.github.com/en/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies) |
| Front end Performance Monitoring   | [Google Analytics](https://codelabs.developers.google.com/codelabs/performance-analytics/) (via [DAP][dap])<br/>Note: New Relic is not approved.                    |
| Infrastructure as a Service (IaaS) | [_See Before You Ship_](https://before-you-ship.18f.gov/infrastructure/#infrastructure-as-a-service-iaas)                                                           |
| Platform as a Service (PaaS)       | [cloud.gov](https://cloud.gov)                                                                                                                                      |
| Source Control                     | [GitHub](https://handbook.tts.gsa.gov/github/)                                                                                                                      |
| Static Site Hosting                | [Federalist](https://before-you-ship.18f.gov/infrastructure/federalist/)                                                                                            |
| Uptime Monitoring                  | [New Relic Synthetics](https://newrelic.com/products/synthetics)                                                                                                    |
| User Analytics                     | [Digital Analytics Program (DAP)][dap]                                                                                                                              |

[dap]: https://digital.gov/guides/dap/

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
