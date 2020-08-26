# Isildur's Bane

## Goals

This is a proof-of-concept template for 18F and TTS guides, built with the following goals and assumptions:
- Guides need no to minimal stylistic customization beyond the stock usdws-jekyll template.
- Guide maintainers want to focus on content, not servicing dependabot and Snyk PRs.
- Guides at 18F and TTS should have a similar layout/branding/functionality and be compliant with GSA policies.
- Guides can be well-served by a common set of Jekyll plug-ins, components, CircleCI test scripts, etc.

Some guides at 18F/TTS might be exceptions; e.g., the TTS handbook (large volume of content) and 18F Methods Guide (content demands different visual layout).

## Technical details

To achieve these goals, this template repository uses:
- usdws-jekyll
- a GitHub Action that downstream guides will (automatically) call to merge updates from this upstream repository
- separate file (`override.yml`), used along with `_config.yml`,  that simplifies the values a guide maintainer needs to set
- a separate `_data/override` subdirectory to further simplify the data files the guide maintainer has to understand
- a Jekyll generator to override values set from YAML files in `_data`
- Git attributes to help ensure this upstream repository does not affect downstream content in `_pages`, etc.

## Concept of operations

1. Use this repository as a template to create a new repository. Alternatively, merge its content into an existing repository.
1. Edit `override.yml`, `_data/override/navigation.yml`, `_data/override/header.yml`, `README.md`, and content under `_pages`.
1. Set up Federalist, CircleCI, Snyk, etc.
1. Register sitemap in search.gov.
1. Any security updates, configuration changes, style changes done by the template maintainer get automatically merged into the downstream guide (i.e., once a day).
1. Downstream guides are automatically redeployed with up-to-date dependencies.
1. It is anticipated that eventually there will be non-backwards compatible changes to Jekyll. At that point, some manual intervention might be required.

## Future possibilities

- Conditional 18F or TTS branding, controlled by value in `override.yml`.

## Development

Once you have instantiated a downstream guide repository and cloned it locally, use Docker to view your site:

1. Run:

   ```sh
   docker-compose up --build
   ```

1. Open http://localhost:4000

If you are running Jekyll directly, be sure to specify `overide.yml` in the `--config` option:
```sh
bundle exec jekyll serve --config _config.yml,override.yml
```
