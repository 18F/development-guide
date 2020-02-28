---
title: Style / Linting
sidenav: js
---

# Style / Linting

{%include components/tag-standard.html %}
We recommend combining [Prettier](https://prettier.io) with the
[Airbnb JavaScript style guide](https://github.com/airbnb/javascript) plugins
for [eslint](https://eslint.org).

Maintaining stylistic consistency across 18F's code helps lower the barrier to
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

![Atom eslint plugin screenshot]({{ site.baseurl }}/assets/images/atom-eslint-example.png)

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

## How to set it up

Prettier has a few [configurable options](https://prettier.io/docs/en/options.html).
Generally we recommend going with its defaults for simplicity, but the
important thing is to pick something and use it consistently.

eslint is configured with rules, but rather than write all our own rules we
recommend using the rules defined by the [Airbnb Javascript style guide](https://github.com/airbnb/javascript)
and Prettier. Both Prettier and Airbnb provide their rules as sets of npm
modules, depending on your needs:

- For all projects
  - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- For React projects:
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- For ES6/2015 projects that don't use React:
  - [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- For ES5 or below:
  - [eslint-config-airbnb-base/legacy](https://www.npmjs.com/package/eslint-config-airbnb-base#eslint-config-airbnb-baselegacy))

Each link above has instructions for installing the required `npm` packages and
configuring `eslint` to use the installed rules. These should be installed for
each project, and saved in each project's `package.json`.

Generally the process is to `npm install` the required modules and peer
dependencies, for example:

```sh
npm install --save-dev \
  eslint \
  eslint-config-airbnb \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  eslint-plugin-react
```

and then create a local file configuration within your project called
`.eslintrc.json` that looks like:

```txt
{
  "extends": ["airbnb", "prettier"]
}
```

For more information on configuring `eslint`, see its documentation at
[http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring).
