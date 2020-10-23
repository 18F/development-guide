---
title: Style / Linting
sidenav: js
sticky_sidenav: true
---

{%include components/tag-standard.html %}
We recommend combining [Prettier](https://prettier.io) with the
[eslint preconfigured with 18F's rules](https://github.com/18F/18f-eslint).

Maintaining stylistic consistency across TTS code helps lower the barrier to
jumping in and helping with or reviewing other projects because we'll all be
familiar with reading and working with code that looks similar. Having
consistent rules for styling also removes generally non-productive discussions
(aka bikeshedding) around personal code-formatting preferences.

[Prettier](https://prettier.io) is an automatic code formatter that will handle
converting between tabs and spaces, moving brackets onto the appropriate line,
removing excess whitespace, and other stylistic . Using an automatic formatter
makes it easier to keep code consistent while also freeing us from having to
make arbitrary choices on which styles we prefer. It can
[integrate with your code editor](https://prettier.io/docs/en/editors.html) to
apply styles on save automatically.

[`eslint`](http://eslint.org/) is our preferred tool for analyzing and flagging
(aka "linting") JavaScript that is out of line with a set of stylistic and
semantic rules. There are plugins to integrate eslint with nearly every code
editor and build system, as described at
[http://eslint.org/docs/user-guide/integrations](http://eslint.org/docs/user-guide/integrations).
Using an eslint plugin with your editor makes it easier to quickly see
non-conforming lines of code on the spot, as shown below:

![Atom eslint plugin screenshot]({{ site.baseurl }}/javascript/atom-eslint-example.png)

## Why both?

Prettier and eslint address an overlapping but different set of concerns.
Prettier is _just_ a formatter. It will adjust your whitespace, add or remove
parentheses, add semicolons, etc., but it has nothing to say about the
semantics of your code. eslint, meanwhile, parsers your code into an abstract
syntax tree to fully understand what it's doing and warns you about unusual
patterns and common errors. For example, it can tell you if you reference an
undefined variable, define a variable that never gets used, and even warn you
about accessibility issues such as leaving an `alt` attribute out of `<img>`
tags in JSX.

## How to set it up locally

Prettier has a few [configurable options](https://prettier.io/docs/en/options.html).
Generally we recommend going with its defaults for simplicity, but the
important thing is to pick something and use it consistently.

eslint is configured with rules, but rather than use eslint directly, we
recommend using the [18F eslint wrapper](https://github.com/18F/18f-eslint),
which includes all of our recommended rules and plugins by default.

```sh
npm install --save-dev \
  prettier \
  @18f/18f-eslint
```

If the standard 18F eslint wrapper isn't quite right for you, you can tweak it
with your own `.eslintrc.json` configuration file, which will overwrite the base
settings provided by the wrapper. For example:

```json
{
  "rules": {
    "semi": "never"
  }
}
```

...would disable the requirement that all statements terminate with a semicolon.
(Don‘t do this one, please, it's just an example.)

For more information on configuring `eslint`, see its documentation at
[http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring).

## GitHub Action

If you're using GitHub Actions (or are willing to use them in addition to your
regular CI/CD pipeline), there's a handy action already written to make this
simple. See the [18F eslint action](https://github.com/18F/18f-eslint-action)
repo for more details.

Currently, this action only runs the eslint portion of this recommendation. If
you also want to test that `prettier` has been run, you can add something like
this as a job in your GitHub workflows file:

```yml
prettier:
  name: prettier has been run on compatible files
  runs-on: ubuntu-latest
  container: node:14
  steps:
    - uses: actions/checkout@af513c7a
    - name: check that modified files are prettier
      run: npx prettier
```
