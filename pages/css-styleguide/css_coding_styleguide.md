---
permalink: /css-coding-styleguide/
title: CSS coding styleguide
---

## Purpose
The purpose of the CSS coding styleguide is to create consistent CSS or preprocessor CSS code across 18F. The styleguide should be treated as a guide &mdash; rules can be modified according to project needs.

## Linting
The styleguide provides a method of linting SASS code to ensure it conforms to the rules in the styleguide. This linting tool will go through all SASS code and issue warnings wherever the code differs from the styleguide. We've created a specific [`.scss-lint.yml` file]({{ '/.scss-lint.yml' | prepend: site_baseurl }}) that's configured to work with the CSS coding styleguide. There are two ways to set up linting, linting on GitHub with Hound, or linting locally with Ruby:

### On GitHub with Hound
1. Go to [Hound](https://houndci.com/).
2. Sign in with GitHub.
3. Activate the respository through [Hound](https://houndci.com/repos).
4. Add the [`.scss-lint.yml` file]({{ '/.scss-lint.yml' | prepend: site_baseurl }}) to the base of your repository.

### Locally with Ruby
1. Add the [`.scss-lint.yml` file]({{ '/.scss-lint.yml' | prepend: site_baseurl }}) to the base of your repository.
2. Install the [sass-lint](https://github.com/brigade/scss-lint) gem: `gem install scss_lint`
3. Run sass-link: `scss-lint app/assets/stylesheets/`

### Shortcomings
The scss-lint tool currently lacks the functionality to check these rules in the CSS coding styleguide:
- Does not limit line width to 80 characters
- Does not check for numeric calculations in parentheses
- Does not sort properties in quite the order we want (defaults to alphabetical)
