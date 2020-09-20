---
title: Node.js
sidenav: languages
---

## Related topics
* [JavaScript]({{site.baseurl}}/javascript)

## Introduction

This is a **WORK IN PROGRESS**. Help us make it better by [submitting an
issue](https://github.com/18F/development-guide) or joining us in the
[#javascript](https://gsa-tts.slack.com/messages/C032KSPPQ) channel!

This document is structured by topic; under each, we include “Standards”,
“Defaults”, and “Suggestions”.

**Standards** are practices that have a strong consensus across TTS; they
should generally be followed to ease the ATO process and make on-boarding
simpler.

**Defaults** are safe selections that tend to be used by a large number of our
projects; you may find yourself with a better or more tailored solution,
however.

**Suggestions** contain examples that have worked well on a project or two;
they're not widely used enough to be defaults, but are worth considering.


## Versions

Node.js supports certain versions as Long-term Support (LTS) versions. We have
**standardized** to using the [current active
LTS](https://github.com/nodejs/LTS#lts-schedule1) version, currently v8.x.


JavaScript is an evolving language defined by
[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). Modern browsers
support ES5, but when writing code on the server, you don't have to write
browser-compatible code. With `--harmony`, Node.js [supports many ES6 and ES7
features](http://node.green/). Similarly, on both the front end _and_ back end,
you can use webpack, browserify, babel, etc. to transpile your code. This
allows you to fill in the feature gaps that are not yet supported by Node.js.
This also means your browser code and server code use the same ECMAScript
features. Given these capabilities, we recommend **default**ing to using a
transpiler and targeting the same ES version for back end and front end code.
Be sure to always polyfill missing features in the browser. We **suggest**
using ES6 as your source language.

For libraries, our **standard** practice is to use the latest release when
first installing. Security updates (as indicated by GitHub or Snyk) should be
applied ASAP, but all libs should be updated at some routine interval (e.g.
quarterly).

Finally, in an effort to ensure our deployments are repeatable, our code
**standards** require all dependencies (including dependencies' dependencies)
be pinned to specific versions. This should also apply to the development
environment (e.g. linters, testing tools, etc.) **Suggestions** for
implementing that include
* npm's [package-lock.json](https://docs.npmjs.com/files/package-lock.json)
  (npm &gt;= 5)
* npm's [npm-shrinkwrap.json](https://docs.npmjs.com/files/shrinkwrap.json)
  (npm &lt; 5)
* yarn's [yarn.lock](https://yarnpkg.com/lang/en/docs/yarn-lock/)
* [vendoring
  dependencies](http://docs.cloudfoundry.org/buildpacks/node/index.html#vendoring)
  (though this is only a partial solution)

## Style

Our **standard** tool for ensuring consistency across Node code bases is
[eslint](http://eslint.org/), using the [AirBnB style
guide](https://github.com/airbnb/javascript) as a **default** configuration.
See the [Front End Guide](https://frontend.18f.gov/javascript/style/) for
installation instructions.

## Libraries

Frameworks provide a common baseline for your application. ATO requires
configurations that most frameworks provide out of the box, or make it very easy
to enable. Here, we document a few common use cases and the libraries we
recommend when trying to solve them.

| Purpose | Library | Conviction |
| --- | --- | --- |
| Test Runner | [Mocha](https://mochajs.org/) | Default |
| Test Spies, Stubs, etc. | [Sinon](https://www.npmjs.com/package/sinon) | Default |
| Test assertions | [Chai](https://www.npmjs.com/package/chai) | Default |
| Web framework | [Express](https://expressjs.com) | Default |
| Authentication | [Passport](http://www.passportjs.org/) | Default |
| Security Headers | [Helmet](https://www.npmjs.com/package/helmet) | Default |
| Embedded JSON | [htmlescape](https://www.npmjs.com/package/htmlescape) | Default |
| ORM | [sequelize](https://www.npmjs.com/package/sequelize) | Suggestion |
| Sessions | [cookie-session](https://www.npmjs.com/package/cookie-session) | Suggestion |
| CSRF | [csurf](https://www.npmjs.com/package/csurf) | Suggestion |

## Scaffolding your application

Scaffolding tools can help take care of some of boilerplate of initializing a
project. Some scaffolds are generator tools, others are kits intended to be
forked. There are many available on GitHub. You might also choose one based on
the front end frameworks you want to use and then add the server-side pieces
yourself. You also don't have to use one at all. That said, don't spend too
much time finding the perfect generator. Once your application has been
scaffolded, you're not going to scaffold it again.

We **suggest** using one of the following scaffolds:

- [express-generator](https://www.npmjs.com/package/express-generator)
- [express-babel](https://github.com/vmasto/express-babel)

## Type support

Static typing can both make code authors' intent clearer and reduce the number
of bugs through static analysis. It's also notorious for slowing down the pace
of prototyping and requiring a great deal of boiler-plate. Some TTS
projects are using [TypeScript](https://www.typescriptlang.org/)
to add static typing, while a handful are testing out
[Flow](https://flow.org/).

At this time, we **suggest** considering a static type-checker, and using
TypeScript if it'd aid your project's workflow.
