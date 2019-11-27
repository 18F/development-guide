---
title: Python Development Guide
---
# Python Development Guide

This is a **WORK IN PROGRESS**. Help us make it better by [submitting an
issue](https://github.com/18F/development-guide) or joining us in the
[#python](https://gsa-tts.slack.com/messages/C02ES0C3R) channel!

This document is structured by topic; under each, we include “Standards”,
“Defaults”, and “Suggestions”.

**Standards** are practices that have a strong consensus across 18F; they
should generally be followed to ease the ATO process and make on-boarding
simpler.

**Defaults** are safe selections that tend to be used by a large number of our
projects; you may find yourself with a better or more tailored solution,
however.

**Suggestions** contain examples that have worked well on a project or two;
they're not widely used enough to be defaults, but are worth considering.

## Versions

We've **standardized** on Python 3.x over 2.x. All new projects should begin
their life in 3.x, though legacy libraries can continue to support 2.x (in
addition to 3.x) through [tox](https://tox.readthedocs.io/en/latest/). When
starting a Python project, select the [latest Python
release](https://github.com/cloudfoundry/python-buildpack/releases) available
on cloud.gov and incrementally update as new releases are issued.

When using [Django], we **default** to starting with the most recent [Long Term
Support](https://www.djangoproject.com/download/#supported-versions) release.
This will give your project the most runway of support after 18F finishes its
work. If a second LTS becomes available while building the project, upgrade at
the earliest convenience. Devs that follow will thank you.

Otherwise, our **standard** practice is to use the latest release of our
libraries when first installing. Security updates (as indicated by GitHub or
Snyk) should be applied ASAP, but all libs should be updated at some routine
interval (e.g. quarterly).

Finally, in an effort to ensure our deployments are repeatable, our code
**standards** require all dependencies (including dependencies' dependencies)
be pinned to specific versions. This should also apply to the development
environment (e.g. linters, testing tools, etc.) **Suggestions** for
implementing that include
* [pip-tools](https://github.com/jazzband/pip-tools)'s `pip-sync`
* [pipenv](https://github.com/pypa/pipenv)'s `Pipfile.lock`
* [vendoring
  dependencies](https://docs.cloudfoundry.org/buildpacks/python/index.html#vendoring)
  (though this is only a partial solution)

## Style

Our **standard** tool for ensuring consistency across Python code bases is
[flake8](http://flake8.pycqa.org/en/latest/). Its **default** settings are a
good first step, as is using its [integration with
isort](https://pypi.python.org/pypi/flake8-isort) for import order. We
**suggest** investigating flake8's [plugin
ecosystem](https://pypi.python.org/pypi?%3Aaction=search&term=flake8&submit=search)
for more functionality.

Using Code Climate to measure complexity scores (by way of
[radon](https://pypi.python.org/pypi/radon)) is also a reasonable **default**
to ensure you see potentially confounding functions and classes.

## Libraries

The Python ecosystem is large and full of alternative solutions to similar
problems. Here we document a few common use cases and the libraries we
recommend when trying to solve them.

| Purpose | Library | Conviction |
| --- | --- | --- |
| Test Runner | [py.test](https://docs.pytest.org/en/latest/) | Standard |
| Web framework | [Django] | Default |
| ORM | [Django] | Default |
| API | [Django Rest Framework](http://www.django-rest-framework.org/) | Default |
| HTTP Client | [Requests](http://docs.python-requests.org/en/master/) | Default |
| Task Queue | [Celery](http://www.celeryproject.org/) | Suggestion |
 
## Type support

Python 3.5 and beyond have had partial support for static type hints. Static
typing can both make code authors' intent clearer and reduce the number of
bugs through static analysis. It's also notorious for slowing down the pace of
prototyping and requiring a great deal of boiler-plate.

Given this state, we believe it's reasonable to **default** to using type
annotations when they make your intent clearer (i.e. as a form of
documentation). We **suggest** using a static analysis tool (such as
[mypy](http://mypy.readthedocs.io/en/latest/)) to catch logic bugs, but only
where it's practical. Consider a white-list of files to run against.

[Django]: https://www.djangoproject.com/
