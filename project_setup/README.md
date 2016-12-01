## Project Setup

While the specific setup for each 18F project varies widely, there are certain
elements that should be present on every project. This document aims to detail
those elements and provide suggested tools and resources.

### Initialization Checklist

This list is aspirational, but a good place to start. We will try to include
all in upcoming project templates; until then, do your best!

1. Common project files (consider using [`18f init`](https://github.com/18F/18f-cli#18f-init)):
    1. LICENSE.md
    1. CONTRIBUTING.md
    1. README.md
    1. .about.yml
1. Cloud.gov manifests (one per environment) if applicable. See [fec-cms](https://github.com/18F/fec-cms) for a great example
1. Linter setup (straight [flake8](http://flake8.pycqa.org/en/latest/), [rubocop](https://github.com/18F/development-guide/blob/master/ruby/.rubocop.yml), [eslint](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc))
1. Unit test setup for each applicable language
1. Integration test setup (e.g. Selenium, Phantom) if applicable
1. [Pa11y](https://github.com/18F/development-guide/tree/master/accessibility_scanning) setup, if applicable
1. Visual regression setup, if applicable
1. Continuous integration/testing (e.g. Travis, CircleCI)
1. Code coverage metrics (e.g. CodeClimate, CodeCov, Coveralls)
1. Static analysis tool (e.g. CodeClimate)

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
