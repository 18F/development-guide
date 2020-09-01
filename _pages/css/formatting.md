---
title: Formatting
layout: post
sidenav: css
---

We recommend using [Prettier](https://prettier.io), and enabling it in your
editor by default. Prettier is an automatic code formatter that will make your
code format consistent. This way we don't have to argue over how to format our
code - we just let the tools enforce something! Prettier works with both plain
CSS and SCSS.

Do not use shorthand declarations unless you need to explicitly set all the
available values.

```scss
// Bad
margin: inherit 3em;

// Good
margin-bottom: 3em;
margin-top: 3em;

margin: 3em 4em 2em 1em;
```

Avoid arbitrary numbers that are repeated, or linked, or dependent on other
parts of the code, (aka “magic numbers”).

```scss
// Bad
.component {
  top: 0.327em;
}

// Better
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.foo` with its parent. Ideally, we should fix it properly.
 */
.component {
  top: 0.327em;
}

// Good
$align_top: 100%;
.component {
  top: $align_top;
}
```

## Order

- Use the following ordering:

  1. variables
  2. @extend directives
  3. @include directives
  4. declaration list (`property: name;`)
  5. media queries
  6. pseudo-states (`:checked`, `:target`, etc.) and pseudo-elements
     (`::after`, `::selection`, etc.)
  7. nested elements
  8. nested classes

- Use alphabetical order or type order for declarations. Pick one to keep the
  whole project consistent.
- Place a new line before nested selectors unless they are after the first
  selector.
- Treat nested includes, such as Neat's media includes –
  `@include media($small-screen)` — as a standard media query, rather than a
  Sass @include. So they would be sorted directly after the declaration list.
- Place mixin calls with `@content` after nested selectors.
- You may deviate the sorting order to better suit your project's needs, as
  long as it's consistent throughout the project.

```scss
// Bad
.module {

  .module-element {
    color: #fff932;
  }
}

// Good
.module {
  .module-element {
    color: #fff932;
  }
}

// Good
.module {
  $amount = 3;
  @extend .component;
  @include sizing($amount);
  margin-top: $amount * 1em;
  text-align: center;

  @include media($small-screen) {
    margin-top: ($amount + 10em);
  }

  &::before {
    content: "hello";
  }

  .module__ele {
    color: #fff932;
  }
}
```
