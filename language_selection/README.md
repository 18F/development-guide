# Language selection guidance

Many factors should influence how 18F engineers make technology selections
for their projects. Here, we discuss recommendations on how to select the
_language_ used in your projects. This document doesn't offer hard-and-fast
rules, focusing instead on several language aspects<sup>[1](#aspect)</sup>
which should be balanced against each other. Also, we explicitly note that
language selection is ultimately the decision (and responsibility) of the
project team. The guidance below is meant to _assist_ your team make this
decision.

This is a living document<sup>[2](#doctype)</sup>. After looking at [existing
tickets](https://github.com/18F/development-guide/issues), [start an
issue](https://github.com/18F/development-guide/issues/new) or pull request in
GitHub to suggest changes to these standards.

## Our strongest languages

18F has historically worked in three **primary** languages: JavaScript,
Python, and Ruby. While we certainly have a healthy smattering of other odds
and ends, these three are our primary strength<sup>[3](#strong)</sup> as
indicated by data from past projects, engineer skill sets, and billable hours.
These languages are generally a safe bet as we know we can support them and be
productive with them.

Looking at this same data and applying preferences from the guiding factors
below, we also see a **second tier** of familiarity around Go, Java, and PHP.
These languages may be good fits depending on the project at hand. In
particular, domain<sup>[4](#dsl)</sup> preference and client familiarity may
be major reasons to select one of these languages for your project. We feel
relatively comfortable supporting these languages, but if all other factors
are equal, we encourage selecting from our first tier.

## Project scope

Perhaps the most important factor<sup>[5](#factor)</sup> to weigh when
considering languages is the estimated project scope. If we anticipate a
large, long-standing project which will be handed off to our agency partners,
we should be conservative in our language selection. These projects warrant
our most standard approach, which generally translates to the selection of one
of our primary languages.  On the other hand, if writing a one-off script or
small internal project, we have significantly more latitude to try
experimental languages. 

Let's consider some examples for reference<sup>[6](#reference)</sup>. As a
reminder, in almost all situations, selecting one of our primary languages is
a viable option.

* Scrape GitHub statistics one-shot - R would be a fine solution. Due to the
  small scope<sup>[7](#scope)</sup> of the project, we get much more value
  from R than we lose due to risk of unmaintainability, etc.
* Integration tests for an internal app - Here, we've
  ratcheted<sup>[8](#racket)</sup> up risk: a team will need to maintain these
  tests in the future. However, if the team were so inclined, using something
  like Perl might still be a viable option due to the limited impact of these
  tests.
* Agency-centric open<sup>[9](#open)</sup> data API - Given the public-facing
  project scope and assuming other factors are equal, we should write this in
  one of our primary languages. We can be confident we'll do the best job,
  most efficiently with this approach.

## Factors

Languages are not all equal<sup>[10](#triple-equal)</sup>. We next consider a
handful of factors to weigh when selecting a language for a project. In no
particular order:

* Open source - 18F is a strong proponent of open source; we want our language
  selection<sup>[11](#select)</sup> to reflect that. We want open APIs, open
  source binaries, and community participation.
* Domain preference - certain problem domains emphasize particular languages.
  For example, the Cloud Foundry community has a preference for Go, while
  SOAP-heavy specs<sup>[12](#specs)</sup> are more friendly in Java, and Rails
  projects promote CoffeeScript. We want to use the tools appropriate for the
  job.
* Team familiarity - avoid the bus problem. The more 18F engineers who are
  comfortable with a language, the safer<sup>[13](#safe)</sup> it is to use.
  We want our project to be accessible to many both within 18F and without.
* Stability - bleeding edge languages are more risky. If the standard API is
  changing every few months, we aren't going to be able to maintain the
  project. Try to fathom<sup>[14](#fantom)</sup> how this bodes when we're
  handing this project off.
* Active ecosystem - some languages are on the rise while others are falling
  or never gained traction. We will be leaning<sup>[15](#lein)</sup> on the
  community for support and potentially to hire contractors and vendors. Less
  active communities make this more difficult.
* Inclusive communities - 18F promotes welcoming cultures and we want to see
  that reflected in our language selection. We want to reward language leaders
  who promote diverse opinions and have open standards processes. We see
  languages led by cabals<sup>[16](#cabal)</sup> as risks.
* Library support - we don't want to reinvent the wheel<sup>[17](#ring)</sup>
  (or the database adapter). Languages with a thriving library ecosystem will
  be easier and most cost effective to work with.
* Hand-off considerations - is our agency partner comfortable with a
  particular framework? If they already know how to deploy
  XYZ<sup>[18](#yapc)</sup> apps (and hire XYZ developers), it behooves us to
  write an XYZ app. 

## Other impact

By setting forth<sup>[19](#forth)</sup> the above, we can imagine potential
impact on our hiring, project selection, and larger processes. The progression
is logical and we may want to use this document as evidence when deciding how
to iterate those systems. Concrete details are outside the scope of this
document, however, and we anticipate (and proclaim) no immediate changes.

---
* <a name="aspect">1</a>: Not to be confused with [AspectJ](https://en.wikipedia.org/wiki/AspectJ)
* <a name="doctype">2</a>: Not to be confused with [DOCTYPEs](https://en.wikipedia.org/wiki/Document_type_declaration)
* <a name="strong">3</a>: Not to be confused with [strong params](https://github.com/rails/strong_parameters)
* <a name="dsl">6</a>: Not to be confused with [domain specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)
* <a name="factor">5</a>: Not to be confused with [Factor](https://en.wikipedia.org/wiki/Factor_(programming_language))
* <a name="reference">6</a>: Not to be confused with [references](https://en.wikipedia.org/wiki/Reference_%28computer_science%29)
* <a name="scope">7</a>: Not to be confused with [variable scoping](https://en.wikipedia.org/wiki/Scope_%28computer_science%29)
* <a name="racket">8</a>: Not to be confused with [Racket](https://en.wikipedia.org/wiki/Racket_%28programming_language%29)
* <a name="open">9</a>: Not to be confused with [OpenJDK](http://openjdk.java.net/)
* <a name="triple-equal">10</a>: Not to be confused with [JavaScript equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
* <a name="select">11</a>: Not to be confused with [SELECT](https://en.wikipedia.org/wiki/Select_%28SQL%29)
* <a name="specs">12</a>: Not to be confused with [rspec](http://rspec.info/)
* <a name="safe">13</a>: Not to be confused with [type safety](https://en.wikipedia.org/wiki/Type_safety)
* <a name="fantom">14</a>: Not to be confused with [Fantom](https://en.wikipedia.org/wiki/Fantom_%28programming_language%29)
* <a name="lein">15</a>: Not to be confused with [*lein*](http://leiningen.org/)
* <a name="cabal">16</a>: Not to be confused with [*cabal*](https://www.haskell.org/cabal/)
* <a name="ring">17</a>: Not to be confused with [ring](https://github.com/ring-clojure/ring)
* <a name="yapc">18</a>: Not to be confused with [YAPC](http://www.yapc.org/)
* <a name="forth">19</a>: Not to be confused with [Forth](https://en.wikipedia.org/wiki/Forth_%28programming_language%29)
