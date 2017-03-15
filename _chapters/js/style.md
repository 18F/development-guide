---
title: Style
slug: js-style
---
We recommend adhering to the [Airbnb](https://github.com/airbnb/javascript) JavaScript style guide.

Maintaining stylistic consistency across 18F's code helps lower the barrier to jumping in and helping
with or reviewing other projects because we'll all be familiar with reading and working with code
that looks similar. Having consistent rules for styling also removes generally non-productive
discussions (aka bikeshedding) around personal code-formatting preferences.

[`eslint`](http://eslint.org/) is our preferred tool for analyzing and flagging (aka "linting")
JavaScript that is out of line with a set of stylistic rules. There are plugins to integrate
eslint with nearly every code editor and build system, as described at http://eslint.org/docs/user-guide/integrations.
Using an eslint plugin with your editor makes it easier to quickly see non-conforming lines of
code on the spot, as shown below:

![Atom eslint plugin screenshot]({{ site.url }}/images/atom-eslint-example.png)

Airbnb provides `npm` packages of eslint rules that implement their style guide:

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for projects using ES2015 and React
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) for projects using ES2015 without React
- [eslint-config-airbnb-base/legacy](https://www.npmjs.com/package/eslint-config-airbnb-base#eslint-config-airbnb-baselegacy) for projects using ES5 and below

Each link above has instructions for installing the required `npm` packages and configuring `eslint` to use the installed rules.

Generally the process is to `npm install` the required modules and peer dependencies, for example:

```sh
npm install --save-dev eslint@3.15.0 eslint-config-airbnb eslint-plugin-jsx-a11y@3.0.2 eslint-plugin-import@2.2.0 eslint-plugin-react@6.9.0
```

and then create a local file configuration within your project called `.eslintrc` that looks like:

```txt
{
  "extends": "airbnb"
}
```

For more information on configuring eslint, see its documentation at http://eslint.org/docs/user-guide/configuring
