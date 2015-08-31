---
title: Recommended dependencies
permalink: /css-coding-styleguide/recommended-dependencies/
parent: CSS coding styleguide
---
If you're building a web site or application from scratch, you're probably doing it wrong. There are an uncountable number of open source tools at your disposal, from ready-to-use style frameworks to expansive code libraries, that can help you get your job done more easily while also serving as a common ground for other designers and developers.

## Principles
The opinions in this guide attempt to reflect 18f's core development principals of:

- **Accessibility**, for users first, developers as well.
- **Open source**, for transparency and contribution.
(need more)

## Frameworks and Libraries
The terms "framework" and "library" (and even "tool") are sometimes used interchangeably, but there is a not-so-subtle difference. Here's what these words mean when we use them at 18F:

* **Frameworks** are collections of code that provide off-the-shelf building blocks (either visual components at the CSS level or feature-rich JavaScript objects). For instance, [Foundation] and [Bootstrap] are CSS frameworks, and [Backbone] is a JavaScript framework.
* **Libraries** consist of the lower-level "helpers" that may serve as building blocks for custom components. [jQuery] and [Underscore] are JavaScript libraries; [Bourbon] provides both an overall structure for [Sass] projects and a slew of style helpers that can be mixed and matched.

## Choosing a Tool
Picking the right tool for the job can be tricky. We're working on a list of recommended tools for certain uses, but if your needs outgrow this list, here are some criteria that you can use to judge:

1. **Popularity**: A project's GitHub star count can sometimes be a reliable indicator of whether other people have found this tool useful. More popular projects are usually a good pick because they're better documented, and people on your team are more likely to be familiar with them.
1. **Examples & Documentation**: Speaking of which, does the project have up-to-date documentation? Are there clear and concise examples of how to use it? If not, it might be best to steer clear.
1. **Community**: try searching for the tool's name on [stackoverflow.com](http://stackoverflow.com/) and looking for signs of a user community around it. Do questions get answered quickly?
1. **Maintenance**: Is the project actively maintained? You can usually answer this question by looking at its GitHub stats (where applicable):
  - When was the last release, and/or the last commit?
  - Are there lots of open issues, and have they been commented on by the maintainer(s)? The number of open pull requests may also be an indicator of whether a project has been abandoned.
1. **Size/Complexity**: some frameworks are large in footprint and/or file size. If adding a tool to your project dramatically affects the download time for your users, you may wish to reconsider its inclusion. For example, though [jQuery] is relatively small compared to some libraries, [you might not need it](http://youmightnotneedjquery.com/) if you're doing simple things in JavaScript.
1. **Open Source License**: Is this important? Probably. I *think* we prefer CC0.

## M**V Frameworks

### Angular
AngularJS (commonly referred to as "Angular") is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications ([Wikipedia](http://en.wikipedia.org/wiki/AngularJS)).

##### When to use:
- Sites with heavy Front end, Javascript UI interactions (single page apps) such as 
  - creating, updating, deleting of information without a server reload, 
  - real-time messaging platforms, such as chat or complex messaging such as email.
  - complex data visualization dashboards, 
  - lazy-loaded from the back end
- When the site's design specifies a single page app architecture over classic server request and response.
- When the whole site will be built with Angular to maintain front end code consistency.

##### When not to use:
- For a single or a few simple components (with the rest of the site not using Angular).
- Exporting a module that isn't an Angular module.
- If there is a strict requirement that the site should work for users that have JavaScript disabled.
- If there already is an active M**V framework (Backbone, ampersand, Ember) being used on the site.
- When the site's design doesn't benefit from a single page app architecture.
- When the long-term maintenance dev team is very unfamiliar with Angular and don't have the resources to learn or hire for it.

##### Pros:
- Takes care of a lot of boilerplate code for front end interactions.
- Attempts to extend HTML itself, and was designed so less experienced devs could use it.
- Being maintained and developed by Google generally means good support.

##### Cons:
- While open source, is maintained primarily by Google.
- Has been known to implement breaking changes in major version updates.
- Built with Typescript and Dart, both of which are not ECMA standardized (as opposed to vanilla JS or ES6).
- Has a steep learning curve and is very opinionated, meaning you learn Angular rather then JavaScript.


### Backbone
Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm([Wikipedia](http://en.wikipedia.org/wiki/Backbone.js)).

##### When to use:
- A page design that requires dynamic data manipulation on the front end without a server request response, such as a todo app.
- When a small front end framework is required due to performance constraints.
- When the long-term dev maintenance team is unfamiliar with any full frameworks, such as Angular.
- To use as a wrapper and rest data manipulation library around a view-only framework, such as React.
- When the dev team is familiar enough with Backbone to know how to write maintainable Backbone code.

##### When not to use:
- When the javascript components don't keep data or manipulate data, in which case Backbone's functionality is too heavy and not specific enough for just view rendering.
- If there is a strict requirement that the site should work for users that have JavaScript disabled.
- When another full javascript framework is already in use, such as Angular.
- When working with a data source that is NOT RESTful. Backbone was built for RESTful services.

##### Pros:
- Relatively un-opinionated, meaning a lot of freedom in development.
- Open source, and has an active, large community.

##### Cons:
- Still requires a lot of boilerplate code (this can be mitigated by pairing with a library like Marionette)
- Since it has very little structure, unexperienced programs can easily create unmaintainable code with Backbone.
- Designed primarily for REST data.


## Dependency Management
The word "dependency" refers to all of the frameworks, libraries and other tools that your project relies on. *Dependency management* is the process by which tools are incorporated into your project, removed and updated (for instance, when you need a new version of [jQuery]). Here are the tools that we recommend for managing dependencies:

### Bower
[Bower] is a command-line tool for managing browser-based JavaScript and CSS [packages](http://bower.io/search/). It relies on a `bower.json` file that lives in your project and can be used to download dependencies without having to include them in source control.

#### Bower Instructions
1. Get [Node.js].
2. In your terminal, run `npm install -g bower`.
3. In your project directory, run `bower init`. Answer the questions, and it will create a `bower.json` for you.
4. Install your dependencies with `bower install --save [name]`, for instance:
  - [jQuery]: `bower install --save jquery`
  - [Foundation]: `bower install --save foundation`
5. `git add bower.json` and commit it, then update your project's `README.md` noting the need to install Bower and run `bower install` to get the dependencies.

Bower installs dependencies in the `bower_components` directory alongside `bower.json`. You have the choice of whether or not to include this directory in source control. Here are some side effects to take under consideration:

* Including `bower_components` in source control may cause the size of your repo to balloon, though Bower package authors *should* know how to keep the size of their packages under control. Most notably, some projects include both their source (for instance, [Foundation] and [Bootstrap] CSS frameworks) and  "distribution" files (the CSS generated from their [Sass] or [Less] sources).
* Excluding `bower_components` (by adding it to the project's `.gitignore` file) means that every contributor needs to keep their dependencies up-to-date. If you're already juggling Python or Node dependencies, though, this may be second nature. Visit the #frontend channel in Slack if you need help with Bower.

### npm
[npm] informally stands for *N*ode *P*ackage *M*anager, and is to the [Node.js] environment as [Bower] is to browsers. Its usage is very similar to Bower because the latter was inspired by the former.

#### npm Instructions
1. Get [Node.js].
2. To initialize your project, run `npm init` in your project directory, which will create a `package.json`.
3. Install some dependencies with `npm install --save [name]`, e.g.
  - [jQuery]: `npm install --save jquery`
  - [D3]: `npm install --save d3@v3.5.5` (version 3.5.5)

npm installs its dependencies in the `node_modules` directory. Unlike [Bower](#bower-instructions), however, common conventions dictate that `node_modules` should be excluded from source control by adding it to your project's `.gitignore`, primarily because Node.js-friendly environments (such as 18F's deployment service, [Cloud Foundry], and other such as [Heroku]) recognize the existence of `package.json` and automatically install dependencies as needed.

#### Node and the Browser
Using [Node.js] modules in the browser can be either straightforward or convoluted, depending on the project. Some project packages come with browser-ready `.js` files, whereas others require build tools such as [Browserify] or [Webpack] to translate some Node-specific JavaScript so that it can be run in browsers. Visit the #javascript or #nodejs channels on Slack if you need help with these tools.

### Manual Dependency Management
Many dependencies consist of a single file and can be more easily incorporated simply by copying them into your project. We have some recommendations for how this should be done:

1. Establish a specific directory for 3rd-party assets, e.g. `js/vendor` for JavaScript or `assets/vendor` for frameworks that consist of CSS, images and/or JavaScript.
2. Download the assets to this directory, e.g. in your terminal:

  ```sh
  cd js/vendor
  curl -O http://code.jquery.com/jquery.min.js
  ```

3. Add these dependencies to version control.

[Bootstrap]: http://getbootstrap.com/
[Bourbon]: http://bourbon.io/
[Foundation]: http://foundation.zurb.com/
[Backbone]: http://backbonejs.org/
[Underscore]: http://underscorejs.org/
[Neat]: http://neat.bourbon.io/
[Jekyll]: http://jekyllrb.com/
[npm]: https://www.npmjs.com/
[Bower]: http://bower.io/
[jQuery]: http://jquery.com/
[Sass]: http://sass-lang.com/
[Stackoverflow]: http://stackoverflow.com/
[Node.js]: https://nodejs.org/
[D3]: http://d3js.org/
[Cloud Foundry]: http://cloudfoundry.org/about/index.html
[Heroku]: https://www.heroku.com/
[Browserify]: http://browserify.org/
[Webpack]: http://webpack.github.io/
