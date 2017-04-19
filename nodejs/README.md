# Node.js

> [Node.js](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8
> JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that
> makes it lightweight and efficient. Node.js' package ecosystem, npm, is the
> largest ecosystem of open source libraries in the world.

This is a living guide that describes some best practices around using Node.js
at 18F. For areas we don't have a specific recommendation, we try to document
what folks are currently using to help inform your decision.

This guide will also help facilitate discussions around these technologies so we
can identify where there is consensus and where there is disagreement.

For each area, we'll include Recommendations, Suggestions, or Considerations.
Recommendations are practices where there is a strong consensus on the team.
Suggestions are practices where there is some agreement but many reasons why you
might choose something different. Considerations are tips to help you decide for
yourself what is right for your project.

If you have any questions, hop into the
[#javascript](https://gsa-tts.slack.com/messages/javascript/) Slack channel.


## Twelve-factor web applications

[12factor.net](https://12factor.net/) describes a twelve-factor methodology for
building scalable web applications. By following the methodology, your
application implements a generic contract with the platform. This contract
allows it to be scaled and managed by the platform without intimate knowledge of
how the application works.

[cloud.gov](https://cloud.gov/) is the preferred platform at 18F. Building your
Node.js application with the Twelve-factor methodology in mind will ensure your
application is designed for cloud.gov.


### Best practices

#### Recommend

- Build your application on top of cloud.gov.
- Read the [Twelve-factor methodology](https://12factor.net/) and keep it in
  mind as you build your application.


## Choosing a version

### Node.js

Node.js supports certain versions as Long-term Support (LTS) versions. We
recommend the [current active LTS](https://github.com/nodejs/LTS#lts-schedule1)
version, currently v6.x.


### ECMAScript

ES5, ES6, ES7? JavaScript is an evolving language and is defined by
[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). Modern browsers support
ES5, but when writing code on the server, you don't have to write
browser-compatible code. With `--harmony`, Node.js [supports many ES6 and ES7
features](http://node.green/).

You can also use the same build tools that you use on the front end, like
webpack and browserify with babel, to transpile your code. This allows you to
fill in the feature gaps that are not yet supported by Node.js. This also means
your browser code and server code use the same ECMAScript features.


### Best practices


#### Recommend

- Use the [current active LTS](https://github.com/nodejs/LTS#lts-schedule1)
  version of Node.js.


#### Consider

- What syntax are you using on the front end? Consider using the same syntax and
  features for both the  front end and back end code.
- Many developers write JavaScript in the browser (ES5) even if they aren't
  a JavaScript developer. Using a syntax that many folks are familiar with
  allows more folks to jump in.
- Front end build tools make it easy to choose a syntax you want and polyfill
  the missing features in the browser.


## Frameworks

Frameworks provide a common baseline for your application. ATO requires
configurations that most frameworks provide out of the box, or make it very easy
to enable.

The most common framework at 18F is [Express][expressjs]. You don't have to
choose Express, but you should use an existing framework with an active
community for support.

Here are some existing projects at 18F using Express:

- [Federalist][github-federalist]
- [OMB eRegs][github-omb-eregs]
- [Analytics Reporter API][github-analytics-report]

You can [find many
more](https://github.com/search?q=org%3A18F+filename%3Apackage.json+express&type=Code&utf8=%E2%9C%93) internal and
external projects as well.


### Best practices


#### Recommend

- Use an existing framework with active community support.


#### Suggest

- Use [Express][expressjs].


## Scaffolding your application

Scaffolding tools can help take care of some of boiler plate of initializing
a project. Some scaffolds are generator tools, others are kits intended to be
forked. There are many available on Github. You might also choose one based on the
front end frameworks you want to use and then add the server-side pieces
yourself. You also don't have to use one at all.

Here's a list of scaffolds we've had success with:

- [express-generator](https://www.npmjs.com/package/express-generator)
- [express-babel](https://github.com/vmasto/express-babel)


### Best practices


#### Consider

- What front end frameworks do you plan to use? Maybe choose a generator based
  on those frameworks instead.
- Don't spend too much time finding the perfect generator. Once your application
  has been scaffolded, you're not going to scaffold it again.


## Authentication

For Express, [Passport](http://www.passportjs.org/) has many authentication
plugins including [OAuth2](https://www.npmjs.com/package/passport-oauth2) which
can be used with cloud.gov authentication.


### Best practices

#### Recommend

- Avoid writing your own authentication. Use an existing framework with an
  active development community.


#### Suggest

- Use [Passport](http://www.passportjs.org/) for your Express application.


## Security

You'll want some basic web application hardening.

[helmet](https://www.npmjs.com/package/helmet) includes several smaller
middleware functions to set secure HTTP headers on your application.

If you're using any kind of user sessions, use
[cookie-session](https://www.npmjs.com/package/cookie-session) for secure,
encrypted, signed session cookies.

When used with session middleware, [csurf](https://www.npmjs.com/package/csurf)
provides cross-site request forgery (CSRF) protection.

For database queries, use a library or ORM like
[sequelize](https://www.npmjs.com/package/sequelize) which will quote SQL values
for you. You shouldn't be writing SQL queries directly in your code unless you
are using a low-level database feature. Take special care when using
un-trusted user data within these scripts.

If you need to embed serialized JSON in an HTML script tag, use
[htmlescape](https://www.npmjs.com/package/htmlescape) instead of
`JSON.stringify`.


### Best practices

#### Recommend

- Use existing well-known libraries with an active development community.
- Use a library or ORM to avoid writing SQL commands directly.
- Take special care when embedding un-trusted user data in HTML or SQL.


[cloud-gov]: https://cloud.gov/
[expressjs]: https://expressjs.com/
[hapijs]: https://hapijs.com/
[github-federalist]: https://github.com/18F/federalist
[github-analytics-report]: https://github.com/18F/analytics-reporter-api
[github-omb-eregs]: https://github.com/18F/omb-eregs
