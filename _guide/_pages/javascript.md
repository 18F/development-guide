---
title: JavaScript
sidenav: languages
sticky_sidenav: true
subnav:
  - text: Dependencies
    href: "#dependencies"
  - text: Framework Suggestions
    href: "#frameworks"
  - text: Style
    href: "#style"
  - text: Related Topics
    href: "#related-topics"
---

The purpose of the JavaScript coding styleguide is to create and utilize
consistent JS across TTS. The styleguide should be treated as a guide
&mdash; rules can be modified according to project needs.

# Dependencies

The word "dependency" refers to all of the frameworks, libraries, and other tools that your project relies on. *Dependency management* is the process by which tools are incorporated into your project, removed and updated (for instance, when you need a new version of [jQuery]). Here are the tools that we recommend for managing dependencies:

## Bower
{%include components/tag-caution.html %} __Do not use Bower.__

It's not needed and should be phased out and replaced by npm. More information can be found here: [Why We Should Stop Using Bower – And How to Do It](http://gofore.com/ohjelmistokehitys/stop-using-bower/).


## npm
{%include components/tag-default.html %} [npm] informally stands for *N*ode *P*ackage *M*anager, and is the package manager node uses. Its usage is very similar to Bower because the latter was inspired by the former.

### Install npm

{%include components/tag-standard.html %} 
We recommend installing both node and npm through a tool called nvm. nvm (which stands for Node version manager) is a software that allows you to run multiple versions of node in different projects on the same computer. Its benefits include

- Installs npm in a manner that doesn't require running sudo to install global packages.
- Easily be able to switch between multiple node versions with a project configuration file or command.

To install on MacOSX or linux, follow the instructions on the [nvm site](https://github.com/creationix/nvm#installation). If you system has a c++ compiler setup, you'll likely be able to install it with this simple script:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.6/install.sh | bash
```

### npm instructions

{%include components/tag-caution.html %} If you can't use nvm, you can install node and npm globally.

1. Get [Node.js].
2. To initialize your project, run `npm init` in your project directory, which will create a `package.json`.
3. Install some dependencies with `npm install --save [name]`, e.g.
  - [jQuery](https://npm.im/jquery): `npm install --save jquery`
  - [D3](https://npm.im/d3): `npm install --save d3@v3.5.5` (version 3.5.5)

npm installs its dependencies in the `node_modules` directory. Common conventions dictate that `node_modules` should be excluded from source control by adding it to your project's `.gitignore`, primarily because Node.js-friendly environments (such as [Cloud Foundry] and [Heroku]) recognize the existence of `package.json` and automatically install dependencies as needed.

### Configuring git and GitHub

The npm `package-lock.json` is a big, gnarly file and it changes a lot. Because it's a generated file, there's not really any value or purpose in manually reviewing it. You can tell git to treat it like a binary file to remove it from diff results by creating a `.gitattributes` file. This file can also include a hint to GitHub to collapse the file in diff view:

```
package-lock.json -diff -merge
package-lock.json linguist-generated=true
```

When git notices a difference during a merge, it will tenatively accept the current version of the file, but it will fail the merge with a message along the lines of "binary files differ." To manage merge conflicts in `package-lock.json` files, consider installing [npm-merge-driver](https://www.npmjs.com/package/npm-merge-driver), which will automatically resolve those conflicts.

### Safely installing packages from npm
While npm is generally a safe environment to install code from, there are certain aspects of the system that are vulnerable to dangerous script execution. Luckily there are steps that can be taken to minimize these risks.

It's recommended that developers at TTS follow these guidelines when installing unknown or new packages.

npm allows various hooks to be executed during the install process. These scripts are where potential dangerous scripts can be executed. To limit this it's recommended to:

1. install npm in a manner so sudo is never required. The TTS recommended way of doing this is to [install with nvm](#install-npm).
1. check which scripts will be run on install by running `npm show $module scripts`.
  - Each script under `preinstall`, `install`, `postinstall` will be run when installing.
  - Each script under `postuninstall`, `preuninstall`, `uninstall` will be run on uninstall.
1. Pull a tarball of the whole package down to check that any scripts run during those steps are safe, `wget http://registry.npmjs.org/$module/-/$module-version.tgz`.
  - Check any files that are being run as part of the install scripts.
  - Check that the file in the package are generally what they are supposed to be.
1. If unsure, install the packages without running any scripts with `npm install $module --ignore-scripts`.

### Publishing
#### Scoping a package to the 18F npm org
18F has an npm organization called [18f](https://www.npmjs.com/org/18f) that is meant to organize permissions and packages related to 18F. As an 18F developer, when publishing a package, you have the choice whether to scope a package to the 18F org or not. Scoped packages will always be prefixed with `@18f/` before their package name and can have their permissions managed by people in the org. More information about scoped packages can be found on the [npm documentation](https://docs.npmjs.com/misc/scope).

##### Guidance on when to scope a package or not
- A package *should not* be scoped to 18F if it is not necessary for consumers (either gov or non-gov) of the package to be aware of 18F in order to use it.
  - Example: The Draft US Web Design Standards are used by many entities outside of 18f and government. A user does not need to know anything about 18F to use the Web Design Standards package.
- A package *should* be scoped to 18F if its use cases fall mainly inside of 18F.
  - Example: [@18f/stylelint-rules](https://github.com/18F/stylelint-rules) is scoped to 18f because it's an 18F specific linting configuration that's directly linked to the 18F guides site.
- A package *should* be scoped to 18f to avoid naming conflicts.
  - Example: If 18F made a generic front-end accordion to use across 18F sites, it should probably be scoped to `@18f/accordion` to avoid conflicts with all other accordions out there.

##### How to scope a package to 18F
- Ensure you are part of the 18f npm org and have at least developer rights. This can be found on the [18f org team page](https://www.npmjs.com/org/18f/members).
  - If you don't have the proper access, ask in #g-frontend or #javascript slack channels and an admin will add you.
- If the package has not been published to 18f yet, follow the [instructions on npm](https://docs.npmjs.com/getting-started/scoped-packages) for scoped packages.
- If the package has already been published, it currently cannot be scoped, so may need to be renamed. See the [npm documentation on existing packages](https://docs.npmjs.com/orgs/preexisting-packages) for more information.

##### General tips for publishing
- Use [semver](http://semver.org/).
- Include instructions on how to use the modules in the README.md. Start from `npm install`, as this is generally a convention on npm.
- Test to ensure that your package works with any required versions of node and works on Windows.

### Node and the browser
Using [Node.js] modules in the browser can be either straightforward or convoluted, depending on the project. Some project packages come with browser-ready `.js` files, whereas others require build tools such as [Browserify] or [Webpack] to translate some Node-specific JavaScript so that it can be run in browsers. Visit the #javascript channel on Slack if you need help with these tools.

## Manual dependency management
Many dependencies consist of a single file and can be more easily incorporated simply by copying them into your project. We have some recommendations for how this should be done:

1. Establish a specific directory for 3rd-party assets, e.g. `js/vendor` for JavaScript or `assets/vendor` for frameworks that consist of CSS, images and/or JavaScript.
2. Download the assets to this directory, e.g. in your terminal:

  ```sh
  cd js/vendor
  curl -O http://code.jquery.com/jquery.min.js
  ```

3. Add these dependencies to version control.

[jQuery]: http://jquery.com/
[npm]: https://www.npmjs.com/
[Node.js]: https://nodejs.org/
[D3]: http://d3js.org/
[Browserify]: http://browserify.org/
[Webpack]: http://webpack.github.io/
[Cloud Foundry]: https://www.cloudfoundry.org/
[Heroku]: https://www.heroku.com/

# Frameworks
When choosing a JavaScript web framework, also consider if vanilla JavaScript would satisfy your project needs. "Vanilla JavaScript" (or "vanilla JS") refers to using just JavaScript and the [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) provided natively by web browsers. For simpler project, vanilla JavaScript helps avoid overengineering, can reduce security and compliance complexity, and may reduce maintenance costs by making it possible for any JavaScript developer to work on it. However, vanilla JavaScript can be unwieldy in complex applications.

## React
{%include components/tag-default.html %}
[React](https://reactjs.org/) (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications ([Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library))).

#### When to use:
- Single page apps that requires data manipulation on the front end without a server side request/response architecture.
- When there's a strong need to render JavaScript based UI on the server due to performance or accessibility reasons.
- JavaScript UI that incorperates many nested components.
- A UI with many components and updates that needs to be performance conscious.
- When only a "view" framework is desired/required.
- To ensure all front-end components conform to a single standard.

#### When not to use:
- When a complex build process is not feasible. React requires transforming "jsx" files to regular JavaScript.
- When developers unfamiliar with JSX and don't have time to learn.
- While open source, is maintained primarily by Facebook.

#### Goes well with:
- [Redux](https://redux.js.org/) - An application state management library.
  - **When to use:**
    - When an application has complex internal state that affects how the site is rendered in realtime.
    - When one-way data flow is desired for performance.
  - **When not to use:**
    - When application internal state is simple
    - When all state changes result in cheap re-rendering

## Angular
{%include components/tag-suggestion.html %}
[Angular](https://angular.io/) (sometimes styled Angular 2+) is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications ([Wikipedia](https://en.wikipedia.org/wiki/Angular_(web_framework))

We don't work with Angular a lot ourselves, but it is a well-maintained, highly-used modern framework and we should not discourage or frown on its use by our partners. In our consulting and acquisition work, we view Angular as a solid choice for a frontend web framework, given the considerations below.

#### When to use:
- Sites with heavy front end, JavaScript UI interactions (single page apps) such as:
  - creating, updating, deleting of information without a server reload
  - real-time messaging platforms, such as chat or complex messaging such as email
  - complex data visualization dashboards
  - lazy-loaded from the back end
- When the site's design specifies a single page app architecture over classic server request and response.
- When the whole site will be built with Angular to maintain front-end code consistency.

#### When not to use:
- For a single or a few simple components (with the rest of the site not using Angular), instead see React or Web Components.
- Exporting a module that isn't an Angular module.
- If there is a strict requirement that the site should work for users that have JavaScript disabled.
- If there already is an active M**V framework (Backbone, ampersand, Ember) being used on the site.
- When the site's design doesn't benefit from a single page app architecture.
- When the long-term maintenance dev team is very unfamiliar with Angular and don't have the resources to learn or hire for it.

#### Pros:
- Takes care of a lot of boilerplate code for front-end interactions.
- Attempts to extend HTML itself, and was designed so less experienced devs could use it.
- Being maintained and developed by Google generally means good support.

#### Cons:
- While open source, is maintained primarily by Google.
- Has been known to implement breaking changes in major version updates.
- Built with Typescript, which is not ECMA standardized (as opposed to vanilla JS or ES6).
- Has a steep learning curve and is very opinionated, meaning you learn Angular rather than JavaScript.

# Deprecated

## AngularJS

{%include components/tag-caution.html %}
AngularJS is the legacy version of Angular and is not actively developed. Maintenance will be discontinued on July 21, 2021. New projects should not use AngularJS.

([Wikipedia](http://en.wikipedia.org/wiki/AngularJS)).

# Style
{%include components/tag-standard.html %}
We recommend combining [Prettier](https://prettier.io) with the
[Airbnb JavaScript style guide](https://github.com/airbnb/javascript) plugins
for [eslint](https://eslint.org).

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
}

# Related topics
* [Node.js]({{site.baseurl}}/nodejs)