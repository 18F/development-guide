---
title: Linting
slug: css-linting
---
The styleguide provides a method of linting [Sass] code to ensure it conforms
to the rules in the styleguide. This linting tool will go through all Sass code
and issue warnings wherever the code differs from the styleguide. We've created
a specific [`.scss-lint.yml` file][scss-lint yaml] that's configured to work
with the css coding styleguide. There are three ways to setup linting:

* on GitHub with Hound
* locally with ruby
* locally with node

## On GitHub with Hound
1. Go to [Hound](https://houndci.com/).
2. Sign in with GitHub.
3. Activate the respository through [Hound](https://houndci.com/repos).
4. Add the [`.scss-lint.yml` file][scss-lint yaml] to the base of your
   repository.

## Locally with ruby
1. Add the [`.scss-lint.yml` file][scss-lint yaml] to the base of your
   repository.
2. Install the [scss-lint] gem with `gem install scss_lint`
3. Run scss-lint: `scss-lint app/assets/stylesheets/`

## Locally with node (experimental!)
1. Run `npm install --save-dev @18f/stylelint-rules` to download the package and save it to your package.json
2. The package provides both a gulp task and a cli interface. Detailed usage instructions can be found in the [README](https://github.com/18F/stylelint-rules)

## Shortcomings

### scss-lint

The scss-lint tool currently lacks the functionality to check these rules in
the CSS coding styleguide:

- Does not limit line width to 80 characters
- Does not check for numeric calculations in parentheses
- Does not sort properties in quite the order we want (defaults to
  alphabetical)

### stylelint

This tool is still being evaluated, so not every rule in our current styleguide
is supported by stylelint. scss-lint is purpose built for SCSS and is therefore
a bit more feature rich. The following rules are currently not supported:

- PropertySpelling
- UnecessaryParentReference

That being said, if you want to avoid a dependency on ruby in your project and
still benefit from reliable SCSS linting, please test out this tool!


[Sass]: http://sass-lang.com/
[scss-lint]: https://github.com/brigade/scss-lint
[scss-lint yaml]: https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml
[stylelint-rules]: https://github.com/18F/stylelint-rules
