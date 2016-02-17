---
permalink: /recommendations/
title: Recommendations
---

If you're building a web site or application from scratch, you're probably doing it wrong. There are an uncountable number of open source tools at your disposal, from ready-to-use style frameworks to expansive code libraries, that can help you get your job done more easily while also serving as a common ground for other designers and developers.

## Principles
The opinions in this guide attempt to reflect 18f's core development principles of:

- **Accessibility**, for users first, developers as well.
- **Open source**, for transparency and contribution.

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
  - Are there lots of open issues and have they been commented on by the maintainer(s)? The number of open pull requests may also be an indicator of whether a project has been abandoned.
1. **Size/Complexity**: some frameworks are large in footprint and/or file size. If adding a tool to your project dramatically affects the download time for your users, you may wish to reconsider its inclusion. For example, though [jQuery] is relatively small compared to some libraries, [you might not need it](http://youmightnotneedjquery.com/) if you're doing simple things in JavaScript.
1. **Open Source License**: Is this important? Probably. I *think* we prefer CC0.

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
