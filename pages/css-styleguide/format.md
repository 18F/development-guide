---
permalink: /css-coding-styleguide/format/
title: Format
parent: CSS coding styleguide
---

## Spacing
- Where possible, limit CSS files’ width to 80 characters. See [notes](#format_notes) to see how to configure your text editor to 80 characters.
  - There will be unavoidable exceptions to this rule, such as URLs, or gradient syntax. Don’t worry.
- Use soft-tabs with a two space indent.
- Put one space after : in property declarations.
- Put spaces before { in rule declarations.
- Put a blank line between each selector block.
- To close a selector block, put an unindented closing curly brace on a separate line.
- Each declaration should appear on its own line for more accurate error reporting.
- Do not indent selectors.

```scss
// Good
.rule {
  margin: 3px;
  text-align: center;
}

.another_rule {
  margin: 3px;
}

// Bad
.rule{
    margin:3px;text-align:center;}
```

- Multiple selectors should each be on a single line, with no space after each comma, unless they selector is less than five chars.

```scss
// Good
selector1,
selector2,
selector3 {
}

// Good
h1, h2 {
}

// Bad
selector1, selector2 {
}
```

## Property-value pairs
- Put each pair on its own line.
- Indent each pair one level.
- End in a semicolon.

```scss
selector {
  name: value;
  name: value;
}
```

- Spaces should separate values and operators in Sass expressions.

```scss
// Bad
selector {
  font-size: ($font-size+2em);
  font-size: ($font-size +2em);
}

// Good
selector {
  font-size: ($font-size + 2em);
}

```

- Do not use shorthand declarations unless you need to explicitly set all the available values.

```scss
// Bad
margin: inherit 3em;

// Good
margin-bottom: 3em;
margin-top: 3em;

margin: 3em 4em 2em 1em;
```

- Single-quote URLs and string values.

```scss
  background-image: url('/images/kittens.jpg');
  font-family: 'Helvetica', sans-serif;
  font-family: 'Lucida Grande', 'Helvetica', sans-serif;
```

- Wrap numeric calculations in parentheses.

```scss
// Good
.component {
  width: (100% / 3);
}

// Bad
.component {
  width: 100% / 3;
}
```

- Avoid arbitrary numbers that are repeated, or linked, or dependent on other parts of the code, (aka “magic numbers”).

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
* Use the following ordering:
  1. variables
  2. @extend directives
  3. @include directives
  4. declaration list (property name and value)
  5. media queries
  6. pseudo-states and pseudo-elements
  7. nested elements
  8. nested classes

- Use alphabetical order or type order for declarations. Pick one to keep the whole project consistent.
- Place a new line before nested selectors unless they are after the first selector.
- Treat nested includes, such as Neat's media includes — `@include media($small-screen)` — as a standard media query, rather than a Sass @include. So they would be sorted directly after the declaration list.
- Place mixin calls with @content after nested selectors.
- You may deviate the sorting order to better suit your project's needs, as long as it's consistent throughout the project.

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

  @include media($sm) {
    margin-top: ($amount + 10em);
  }

  .module__ele {
    color: #fff932;
  }
}
```

<a id="format_notes"></a>

## Notes
### How to set text editors to 80 characters
- Sublime: Add a `rulers` setting with 80 as the value.
  - ```"rulers": [80]```
- Atom: Set the `preferredLineLength` setting to 80.
  - `preferredLineLength: 80`
- Vim: Set two options in your .vimrc to wrap lines at 80 characters.
  - ```set formatoptions+=w```
  - ```set tw=80```
