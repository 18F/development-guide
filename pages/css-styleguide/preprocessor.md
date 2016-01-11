---
permalink: /css-coding-styleguide/preprocessor/
title: Preprocessor
parent: CSS coding styleguide
---

The most supported CSS preprocessor at 18F is Sass/SCSS. Using this pre-processor means you'll get supported resources such as frameworks, libraries, tutorials, and a comprehensive styleguide as support.

In addition, 18F uses a [`.scss-lint.yml` file](https://raw.githubusercontent.com/18F/frontend/18f-pages-staging/.scss-lint.yml) to keep our CSS code compliant with our own styleguide.

That being said, any preprocessor is allowed as long as it's a sound project and has community support.

The recommended way to compile your Sass code is through [node-sass](https://www.npmjs.com/package/node-sass) (rather than Ruby Sass). This allows eliminating the dependency on Ruby for projects that don't already require it and is the fastest method of compiling Sass.
