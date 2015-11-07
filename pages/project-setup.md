---
permalink: /project-setup/
title: Project Setup
---

## Project Setup

While the specific setup for each 18F project varies widely, there are certain
elements that should be present on every project. This document aims to detail
those elements and provide suggested tools and resources.

### Project Management Tool

Every project, no matter the size, should use a project management tool to keep
track of ongoing tasks and to do items. The project management tool should be
linked to somewhere in the project's GitHub repository so that others can find
it easily.

Commonly used project management tools:

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
