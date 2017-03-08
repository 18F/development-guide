## Project Setup

While the specific setup for each 18F project varies widely, there are certain
elements that should be present on every project. This document aims to detail
those elements and provide suggested tools and resources.

### Docker

We're piloting Docker as a dependency management solution so that all
developers can get started quickly. See our [initial
recommendations](./docker/) for using Docker for development.

### Initialization Checklist

This list is aspirational, but a good place to start. Not all of these
elements will apply to every project (e.g. visual regression tests don't make
sense for an API). We will try to include all in upcoming project templates;
until then, do your best! 

1. Standard project files (consider using [`18f init`](https://github.com/18F/18f-cli#18f-init)):
    1. `LICENSE.md`
    1. `CONTRIBUTING.md`
    1. `README.md`
    1. `.about.yml`
1. `.gitignore` for your languages (though also consider a [global config](https://help.github.com/articles/ignoring-files/#create-a-global-gitignore)])
1. Language version specification (e.g. `.nvmrc`, `runtime.txt`, `Gemfile`)
1. Backend project files (e.g. `setup.py`, `package.json`, `.gemspec`) if
creating a library
1. `package.json` for frontend apps
1. Build scripts (e.g. `grunt`, `rake`, `manage.py`)
1. Dependency descriptions (e.g. `Gemfile`, `requirements.txt`). Don't forget to
[pin](https://pages.18f.gov/before-you-ship/infrastructure/pinning-dependencies/)
them
1. Cloud.gov manifests (one per environment.) See the `manifest_*.yml` files
in [fec-cms](https://github.com/18F/fec-cms) for a great example
1. `.cfignore` (can be a sym link to `.gitignore` to get started)
1. Linter setup (straight [`flake8`](http://flake8.pycqa.org/en/latest/),
[`rubocop`](https://github.com/18F/development-guide/blob/master/ruby/.rubocop.yml),
[`eslint`](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc))
1. Unit test setup for each language
1. Integration test setup (e.g. Selenium, Phantom)
1. [Pa11y](https://github.com/18F/development-guide/tree/master/accessibility_scanning) setup
1. Visual regression setup (e.g. [Backstop](https://github.com/garris/BackstopJS))
1. Continuous integration/testing (e.g. Travis, CircleCI)
1. Code coverage metrics (e.g. CodeClimate, CodeCov, Coveralls). Aim for 90+%,
worry if it drops below 80%.
1. Static code quality tool (e.g. CodeClimate)
1. [Static security analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/) as
part of CI

### Project Management Tool

Every project, no matter the size, should use a project management tool to keep
track of ongoing tasks and to do items. The project management tool should be
linked to somewhere in the project's GitHub repository so that others can find
it easily.

Commonly used project management tools:

* [GitHub Issues](https://guides.github.com/features/issues/) (built-in to your repo)
* [Trello](https://trello.com/)
* [Waffle.io](https://waffle.io/)
* [Pivotal Tracker](https://www.pivotaltracker.com)

### Continuous Integration Service

Developers don't always remember to run the test suite. That's why we have
continuous integration services to run the tests automatically after each
commit. CI also helps ensure there's nothing specific to the developer's machine
that makes the tests pass.

Pick a CI service with a GitHub integration so that the build status can be seen
for each pull request.

Commonly used CI services:

* [CircleCI](https://circleci.com/)
* [Travis CI](https://travis-ci.org/)

### Static Analysis Tool

A good code review process is essential to writing good code. But certain code
problems are difficult for humans to spot. Duplication, for example. If new code
is an exact duplicate of code from an existing file in a project, that might not
be caught in a code review. Static analysis tools catch duplication, security
concerns, and more.

Commonly used static analysis tools:

* [Code Climate](https://codeclimate.com/)
