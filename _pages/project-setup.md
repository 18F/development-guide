---
title: Project Setup
---
## Project Setup

While the specific setup for each TTS project varies widely, there are certain
elements that should be present in all source code repositories. This document
aims to detail those elements and suggest corresponding tools and resources.

At times, our guidance assumes the use of [GitHub](https://github.com), but
is in general transferrable to other source code management tools.

### Docker

We frequently use Docker as a dependency management solution so that all
developers can get started quickly. See our [Docker for development
recommendations](./docker/).

### Initialization Checklist

Below is an aspirational list of initial configuration and files for a source
code repository. Not all of these elements will apply to every project (e.g.
visual regression tests don't make sense for an API).

1. [Community profile](https://help.github.com/en/github/building-a-strong-community/about-community-profiles-for-public-repositories)
    - [`LICENSE.md`](https://github.com/18F/open-source-policy/blob/master/LICENSE.md) {%include components/tag-standard.html %}
    - [`CONTRIBUTING.md`](https://github.com/18F/open-source-policy/blob/master/CONTRIBUTING.md) {%include components/tag-standard.html %}
    - [`README.md`](https://github.com/18F/open-source-policy/blob/master/README_TEMPLATE.md) {%include components/tag-default.html %}
1. [`.gitignore`](https://github.com/github/gitignore) (though also consider a [global config](https://help.github.com/articles/ignoring-files/#create-a-global-gitignore))
1. Programming language version specifications (e.g., `.nvmrc`, `runtime.txt`, `Gemfile`)
1. Dependency version descriptions (e.g., `Gemfile`, `Pipfile`, `package.json`) — don't forget to
[pin](https://pages.18f.gov/before-you-ship/infrastructure/pinning-dependencies/)
them
1. Build scripts
1. Unit test setup for each programming language
1. Linter setup (e.g., [`flake8`](http://flake8.pycqa.org/en/latest/),
[`rubocop`](../ruby/.rubocop.yml),
[`eslint`](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc) {%include components/tag-suggestion.html %})
1. Docker
    - Dockerfiles
    - [Compose](https://docs.docker.com/compose/) files
    - [.dockerignore](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
1. cloud.gov/Cloud Foundry
    - [Manifests](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html), one per deployment environment (e.g., [18F/fec-cms](https://github.com/18F/fec-cms), [18F/culper](https://github.com/18F/culper/tree/develop/conf/manifests))
    - [`.cfignore`](https://docs.cloudfoundry.org/devguide/deploy-apps/prepare-to-deploy.html#-ignore-unnecessary-files-when-pushing) (can be a symlink to `.gitignore` to get started)
1. Deploy scripts
1. [Continuous Integration/Continuous Deployment](#continuous-integrationcontinuous-deployment)
1. [Code coverage metrics](#code-coverage-metrics)
1. [Static analysis for code quality](#static-analysis-for-code-quality)
1. [Static security analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/)
1. [Accessibility scanning](https://engineering.18f.gov/accessibility-scanning/) (e.g., [Pa11y](https://pa11y.org/) {%include components/tag-default.html %})
1. Integration test setup (e.g., [Selenium](https://www.selenium.dev/) {%include components/tag-suggestion.html %})
1. Visual regression setup (e.g., [Backstop](https://github.com/garris/BackstopJS) {%include components/tag-suggestion.html %})

### Project Management Tool

Every project, no matter the size, should use a project management tool to keep
track of ongoing tasks and to do items. The project management tool should be
linked to somewhere in the project's GitHub repository so that others can find
it easily.

* [GitHub Issues](https://guides.github.com/features/issues/) {%include components/tag-default.html %}
* [Trello](https://trello.com/) {%include components/tag-suggestion.html %}

### Continuous Integration/Continuous Deployment

Developers don't always remember to run the test suite. That's why we have
Continuous Integration services to run the tests automatically after each
commit. CI also helps ensure there's nothing specific to the developer's machine
that makes the tests pass.

A Continuous Deployment service allows a development team to receive rapid
feedback on new features or bug fixes. CD also helps ensure deployment and
infrastructure issues are identified earlier in a release process, and are
scoped to a smaller number of changes.

Pick a CI/CD service with a GitHub integration so that the build status can be seen
for each pull request.

* [CircleCI](https://circleci.com/) {%include components/tag-default.html %}
* [GitHub Actions](https://github.com/features/actions) {%include components/tag-suggestion.html %}

### Code coverage metrics

Aim for more than 90% of your source code to be covered by tests; worry if
coverage drops below 80%. For repositories with multiple programming
languages/components (e.g., front and back ends), ensure that coverage reports
are aggregated and reported on the entire project, in addition to reports on
individual components.

* [Code Climate Quality](https://codeclimate.com/quality/) {%include components/tag-suggestion.html %}
* [CodeCov](https://codecov.io/) {%include components/tag-suggestion.html %}


### Static analysis for code quality

A good [code review process](../code-review/) is essential to writing good code.
But certain code problems are difficult for humans to spot. Duplication, for
example: if new code is an exact duplicate of code from an existing file in a
project, that might not be caught in a code review. Static analysis tools catch
duplication, security concerns, and more. Also see [Static Security
Analysis](https://before-you-ship.18f.gov/security/static-analysis/).

* [Code Climate Quality](https://codeclimate.com/quality/) {%include components/tag-suggestion.html %}

### Sandboxing and security

Developers needing to test their code live should use a 
[cloud.gov sandbox](https://cloud.gov/docs/pricing/free-limited-sandbox/)
or a TTS-managed [AWS sandbox account](https://before-you-ship.18f.gov/infrastructure/sandbox/#aws-sandbox-accounts).

{%include components/tag-caution.html %} The use of tools such as `localtunnel`
and `ngrok`, which make your locally running services visible to the internet,
are not allowed because they present a large security concern. Consult
[`#infrastructure`](https://gsa-tts.slack.com/archives/C039MHHF8) on Slack for any questions.
