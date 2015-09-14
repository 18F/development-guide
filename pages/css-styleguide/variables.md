---
permalink: /css-coding-styleguide/variables/
layout: default
title: Variables
parent: CSS Coding Styleguide
---

- Create new variables in the following circumstances:
  - The value is repeated twice
  - The value is likely to be updated at least once
  - All occurrences of the value are tied to the variable (i.e. not by coincidence)
- When building scss that will be used across multiple projects use the `!default` flag to allow overriding.

```scss
$baseline: 1em !default;
```

- The `!global` flag should only be used when overriding a global variable from a local scope.
- Variables across the whole scss codebase should be placed in their own file.
- When declaring color variables, don't base the name on the color content.

```scss
// Bad
$light_blue: #18f;
$dark_green: #383;

// Good
$primary: #18f;
$secondary: #383;
$neutral: #ccc;
```

- Be careful when naming variables based on their context.

```scss
// Bad
$background_color
```

- Don't use the value of dimensional variables in the variable name.

```scss
// Bad
$width_100: 100em;

// Good
$width_lg: 100em;
```

- Name all used z-indexes with a variable.
- Have a z-index variable for each z-index used, and a separate variable, possibly aliased for where the z-index is used.

```scss
$z_index-neg_1: -100;
$z_index-neg_2: -200;
$z_index-1: 100;

$z_index-hide: $z_index-neg_2;
$z_index-bg: $z_index-neg_1;
$z_index-show: $z_index-1;
```

## Responsive Design & Breakpoints
- Set variables for breakpoints at the top of your stylesheet. This functionality is built into Bourbon.

```scss
$sm: new-breakpoint(min-width 0 max-width 40em $sm_cols);
```

- Use variables to set the queries throughout so they are easy to adapt if necessary.
- Place media queries nearest to the class they are affecting.
- Rather than focusing on devices when deciding where to put breakpoints, focus on content.

```scss
$iphone: new-breakpoint(min-width 0 max-width 640px 6);
$small: new-breakpoint(min-width 0 max-width 40em 6);
```

- Name breakpoint variables relative to each other, not based on devices.

```scss
// Bad
$mobile
// Good
$small
```
