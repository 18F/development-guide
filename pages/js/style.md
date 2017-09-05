---
title: Style / Linting
permalink: /javascript/style/
layout: docs
sidenav: js
---
# Style / Linting
We recommend adhering to the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript).

Maintaining stylistic consistency across 18F's code helps lower the barrier to jumping in and helping
with or reviewing other projects because we'll all be familiar with reading and working with code
that looks similar. Having consistent rules for styling also removes generally non-productive
discussions (aka bikeshedding) around personal code-formatting preferences.

[`eslint`](http://eslint.org/) is our preferred tool for analyzing and flagging (aka "linting")
JavaScript that is out of line with a set of stylistic rules. There are plugins to integrate
eslint with nearly every code editor and build system, as described at [http://eslint.org/docs/user-guide/integrations](http://eslint.org/docs/user-guide/integrations).
Using an eslint plugin with your editor makes it easier to quickly see non-conforming lines of
code on the spot, as shown below:

![Atom eslint plugin screenshot]({{ site.url }}//assets/images/atom-eslint-example.png)

Airbnb provides `npm` packages of `eslint` rules that implement their style guide.

- For projects using ES6/ES2015 (or above) and React: [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- For projects using ES6/ES2015 (or above) without React: [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- For projects using ES5 and below: [eslint-config-airbnb-base/legacy](https://www.npmjs.com/package/eslint-config-airbnb-base#eslint-config-airbnb-baselegacy)

Each link above has instructions for installing the required `npm` packages and configuring `eslint` to use the installed rules.
These should be installed for each project, and saved in each project's `package.json`.

Generally the process is to `npm install` the required modules and peer dependencies, for example:

```sh
# These version numbers will change so please follow the instructions at the
# linked packages for up-to-date instructions.
npm install --save-dev eslint@3.15.0 eslint-config-airbnb eslint-plugin-jsx-a11y@3.0.2 \
  eslint-plugin-import@2.2.0 eslint-plugin-react@6.9.0
```

and then create a local file configuration within your project called `.eslintrc` that looks like:

```txt
{
  "extends": "airbnb"
}
```

For more information on configuring `eslint`, see its documentation at [http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring).
