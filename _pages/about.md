---
title: About this guide
sidenav: about
sticky_sidenav: true
subnav:
  - text: How we classify best practices
    href: "#how-we-classify-best-practices"
---

[Technology Transformation Services (TTS)](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) — which includes [18F](https://18f.gsa.gov/), [Centers of Excellence (CoE)](https://coe.gsa.gov/), [Presidential Innovation Fellows (PIF)](https://presidentialinnovationfellows.gov/), and [TTS Solutions](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services/tts-solutions) — promote best practices across specialty areas through guilds.

Getting new practices into the guide is pretty light on process. Feel free to raise a topic in Slack or at a guild meeting and drive to some consensus. Once you've done that, document your findings, submit a PR, and ask in #dev for a quick review. If you think a proposal might be controversial after getting some consensus prior, please post the draft PR to #dev (and elsewhere if you don’t think target audience is in that channel) and solicit feedback.

## How we classify best practices

These documents are structured by topic; under topics we have classified we indicate "Requirement",
"Standard", "Default", "Suggestion", and "Caution".

If a classification is not present on a topic or a reference to a tool or practice, it should be presumed
to be a {%include components/tag-suggestion.html %} and the decision is left at your discretion. If you are unsure, ask in #dev, as the topic or tool may be a good candidate for classification.

{%include components/tag-requirement.html %} indicates practices that _must_ be done for
regulatory, legal, compliance, or other reasons.

{%include components/tag-standard.html %} signifies practices that have a strong consensus across TTS; they
should generally be followed to ease the ATO process and make on-boarding
simpler.

{%include components/tag-default.html %} practices are safe selections that tend to be used by a large number of our
projects; you may find yourself with a better or more tailored solution,
however.

{%include components/tag-suggestion.html %} indicates examples that have worked well on a project or two;
they're not widely used enough to be defaults, but are worth considering.

{%include components/tag-caution.html %} marks approaches that have significant pitfalls or should not be used for
security/compliance reasons.

If a specific classification is not present on a topic or reference to a tool or practice, it should be presumed
to be a {%include components/tag-suggestion.html %}.
