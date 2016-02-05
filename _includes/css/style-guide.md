## Purpose
The purpose of the CSS coding styleguide is to create consistent CSS or preprocessor CSS code across 18F. The styleguide should be treated as a guide &mdash; rules can be modified according to project needs.

## Linting
The styleguide provides a method of linting Sass (SCSS) code to ensure it conforms to the rules in the styleguide. This linting tool will go through all Sass code and issue warnings wherever the code differs from the styleguide. We've created a specific [`.scss-lint.yml` file](https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml) that's configured to work with the CSS coding styleguide. There are two ways to setup linting: linting on GitHub with Hound, or linting locally with the Ruby gem:

### On GitHub with Hound
1. Go to [Hound](https://houndci.com/).
2. Sign in with GitHub.
3. Activate the repository through [Hound](https://houndci.com/repos).
4. Add the [`.scss-lint.yml` file](https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml) to the base of your repository.

### Locally with the Ruby gem
1. Add the [`.scss-lint.yml` file](https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml) to the base of your repository.
2. Install the [SCSS-Lint](https://github.com/brigade/scss-lint) gem: `gem install scss_lint`
3. Run SCSS-Lint: `scss-lint app/assets/stylesheets/`

### Shortcomings
The SCSS-Lint tool currently lacks the functionality to check these rules in the CSS coding styleguide:

- Does not limit line width to 80 characters
- Does not check for numeric calculations in parentheses
- Does not sort properties in quite the order we want (defaults to alphabetical)
