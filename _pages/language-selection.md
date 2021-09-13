---
title: Languages & Runtimes
sidenav: languages
sticky_sidenav: true
---

Many factors should influence how TTS engineers make technology selections
for their projects. Here, we discuss recommendations on how to select the
_language_ used in your projects. This document doesn't offer hard-and-fast
rules, focusing instead on several language aspects
which should be balanced against each other. Also, we explicitly note that
language selection is ultimately the decision (and responsibility) of the
project team. The guidance below is meant to _assist_ your team make this
decision.

This is a living document. After looking at [existing
tickets](https://github.com/18F/development-guide/issues), [start an
issue](https://github.com/18F/development-guide/issues/new) or pull request in
GitHub to suggest changes to these standards.

## Our strongest languages

TTS has historically worked in three **primary** languages: JavaScript,
Python, and Ruby. While we certainly have a healthy smattering of other odds
and ends, these three are our primary strength as
indicated by data from past projects, engineer skill sets, and billable hours.
These languages are generally a safe bet as we know we can support them and be
productive with them.

Looking at this same data and applying preferences from the guiding factors
below, we also see a **second tier** of familiarity around Go, Java, and PHP.
These languages may be good fits depending on the project at hand. In
particular, domain preference and client familiarity may
be major reasons to select one of these languages for your project. We feel
relatively comfortable supporting these languages, but if all other factors
are equal, we encourage selecting from our first tier.

## Frequently-used frameworks

The following are used widely in TTS:

| Purpose                              | Tool                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| CSS framework                        | [_More info_]({{site.baseurl}}/css/#frameworks)                                                              |
| Infrastructure/configuration as code | [Terraform](https://www.terraform.io/)                                                                       |
| Static site generator                | [Jekyll](https://jekyllrb.com/) (with the [uswds-jekyll](https://github.com/18F/uswds-jekyll) theme) or Hugo |

## Project scope

Perhaps the most important factor to weigh when
considering languages is the estimated project scope. If we anticipate a
large, long-standing project which will be handed off to our agency partners,
we should be conservative in our language selection. These projects warrant
our most standard approach, which generally translates to the selection of one
of our primary languages.  On the other hand, if writing a one-off script or
small internal project, we have significantly more latitude to try
experimental languages. 

Let's consider some examples for reference. As a
reminder, in almost all situations, selecting one of our primary languages is
a viable option.

* Scrape GitHub statistics one-shot - R would be a fine solution. Due to the
  small scope of the project, we get much more value
  from R than we lose due to risk of unmaintainability, etc.
* Integration tests for an internal app - Here, we've
  ratcheted up risk: a team will need to maintain these
  tests in the future. However, if the team were so inclined, using something
  like Perl might still be a viable option due to the limited impact of these
  tests.
* Agency-centric open data API - Given the public-facing
  project scope and assuming other factors are equal, we should write this in
  one of our primary languages. We can be confident we'll do the best job,
  most efficiently with this approach.

## Factors

Languages are not all equal. We next consider a
handful of factors to weigh when selecting a language for a project. In no
particular order:

* Open source - TTS is a strong proponent of open source; we want our language
  selection to reflect that. We want open APIs, open
  source binaries, and community participation.
* Domain preference - certain problem domains emphasize particular languages.
  For example, the Cloud Foundry community has a preference for Go, while
  SOAP-heavy specs are more friendly in Java, and Rails
  projects promote CoffeeScript. We want to use the tools appropriate for the
  job.
* Team familiarity - The more TTS engineers who are
  comfortable with a language, the safer it is to use.
  We want our project to be accessible to many, both within TTS and without.
* Stability - bleeding edge languages are more risky. If the standard API is
  changing every few months, we aren't going to be able to maintain the
  project. Try to fathom how this bodes when we're
  handing this project off.
* Active ecosystem - some languages are on the rise while others are falling
  or never gained traction. We will be leaning on the
  community for support and potentially to hire contractors and vendors. Less
  active communities make this more difficult.
* Inclusive communities - TTS promotes welcoming cultures and we want to see
  that reflected in our language selection. We want to reward language leaders
  who promote diverse opinions and have open standards processes. We see
  languages led by cabals as risks.
* Library support - we don't want to reinvent the wheel
  (or the database adapter). Languages with a thriving library ecosystem will
  be easier and most cost effective to work with.
* Hand-off considerations - is our agency partner comfortable with a
  particular framework? If they already know how to deploy
  XYZ apps (and hire XYZ developers), it behooves us to
  write an XYZ app. 

## Other impact

By setting forth the above, we can imagine potential
impact on our hiring, project selection, and larger processes. The progression
is logical and we may want to use this document as evidence when deciding how
to iterate those systems. Concrete details are outside the scope of this
document, however, and we anticipate (and proclaim) no immediate changes.
