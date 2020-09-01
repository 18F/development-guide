---
title: Preprocessors
layout: post
sidenav: css
---

The most supported CSS preprocessor at TTS is [Sass](http://sass-lang.com/)
(SCSS). Using this pre-processor means you'll get supported resources such as
frameworks, libraries, tutorials, and a comprehensive styleguide as support.

In addition, TTS uses a [`.scss-lint.yml`
file](https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml)
to keep our CSS code compliant with our own styleguide.

_That being said, any preprocessor is allowed as long as it's a sound project
and has community support._

The recommended way to compile your Sass code is through
[node-sass](https://www.npmjs.com/package/node-sass), rather than Ruby Sass.
This allows eliminating the Ruby dependency for projects that don't already
require it and is the fastest method of compiling Sass.
