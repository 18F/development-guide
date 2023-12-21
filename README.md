**⚠️ This guide has moved to the [consolidated 18F guides repository](https://github.com/18F/guides).**

# Technology Transformation Services (TTS) Engineering Practices

[TTS](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) offices and programs — including [18F](https://18f.gsa.gov), [Centers of Excellence](https://coe.gsa.gov) (CoE), [Presidential Innovation Fellows](https://presidentialinnovationfellows.gov) (PIF), and [Solutions](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services/tts-solutions) — promote team best practices across specialty areas through guilds. These guilds support their members in whatever way deemed most appropriate by those members themselves.

This repo is where the TTS Engineering Practices Guild keeps its guide to best practices and resources for software development. Documentation is written using [Markdown](https://kramdown.gettalong.org/quickref.html) syntax and published as HTML using the [Jekyll](https://jekyllrb.com) static site generator.

## Quicklinks

- Published guide: [engineering.18f.gov](https://engineering.18f.gov)
- Content: [_pages](_pages)
- [CONTRIBUTING.md](CONTRIBUTING.md) on how to build this guide locally and submitting PRs/issues.

## Our mission
We believe that government-developed software products should be functional, maintainable, and thoughtfully designed. Our guild helps TTS promote the adoption and advancement of software engineering best practices. In this way, TTS can lead by example while providing effective services that help our partners and customers fulfill their missions.
To achieve our vision, the Engineering Practices Guild works to:
- Support the continuous learning necessary for successful software engineering work.
- Provide TTS developers with easy-to-understand, actionable guidance around software engineering best practices.
- Promote a central knowledge base of shared tools, common patterns, tutorials, and exemplary source code repositories, to help build technical capacity at our partner agencies so that they might better govern their software development efforts.
- Create a robust and supportive internal environment so that we can, in turn, bolster healthy external communities related to our work.

## How to track what we're doing, and how you can be involved!

We use issues in this repo to track work. If you'd like to suggest a new topic or flag an issue, please [file an issue](https://github.com/18F/development-guide/issues/new/).

The software development industry is ever-changing, and our guide is a living document. Please suggest edits or changes via pull request.

Getting new practices into the guide is pretty light on process. Feel free to raise a topic in Slack or at a guild meeting and drive to some consensus. Once you've done that, document your findings, submit a PR, and ask in #dev for a quick review. If you think a proposal might be controversial after getting some consensus prior, please post the draft PR to #dev (and elsewhere if you don’t think target audience is in that channel) and solicit feedback.

## Development

To run the site locally, we recommend using:
- [`git`](https://git-scm.com)
- `docker` and `docker-compose` (included in [Docker Desktop](https://www.docker.com/products/docker-desktop))

1. Clone the repository:

   ```sh
   git clone https://github.com/18F/development-guide.git
   ```
1. From within the repository directory, run:

   ```sh
   docker-compose up --build
   ```

1. Open http://localhost:4000


To check if the links referenced in the site content are valid, run:

   ```sh
   docker-compose run web bundle exec rake test
   ```

To only check internal links, run:
   ```sh
   docker-compose run web bundle exec rake ci_test
   ```

Note that the automated CircleCI integration process will only check internal links, as many websites will generate spurious errors.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain
> dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
