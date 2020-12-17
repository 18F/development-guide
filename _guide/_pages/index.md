---
title: About this guide
permalink: /
sidenav: about
sticky_sidenav: true
subnav:
  - text: How we classify best practices
    href: '#how-we-classify-best-practices'
---
*A set of guidelines and best practices for an awesome software engineering team.*

[Technology Transformation Services (TTS)](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) — which includes [18F](https://18f.gsa.gov/), [Centers of Excellence (CoE)](https://coe.gsa.gov/), [Presidential Innovation Fellows (PIF)](https://presidentialinnovationfellows.gov/), and [TTS Solutions](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services/tts-solutions) — promote best practices across specialty areas through guilds.

This guide is where the TTS Engineering Practices Guild collects its best practices and resources for software development at TTS, as well as on our partner engagements. Our focus is cloud-native digital services and our recommendations in this guide reflect the needs of that domain.

## How we classify best practices

These documents are structured by topic; under topics we have classified we indicate "Requirement",
"Standard", "Default", "Suggestion", and "Caution".

If a classification is not present on a topic or a reference to a tool or practice, it should be presumed
to be a {%include components/tag-suggestion.html %} and the decision is left at your discretion. If you are unsure, ask in #dev, as the topic or tool may be a good candidate for classification.

{%include components/tag-requirement.html %} indicates practices that *must* be done for
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
