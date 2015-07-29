---
permalink: /css-coding-styleguide/specificity/
layout: default
title: Specificity
parent: CSS Coding Styleguide
---
- IDs should be reserved for JavaScript. Don’t use IDs for styles.

```scss
// Bad
#component { }

// Good
.component { }
```

- Don't nest more than 3 layers deep.
- Do not fix problems with ```!important```. Use ```!important``` purposefully.

```scss
// Bad
.component {
  width: 37.4% !important;
}

// Good
.hidden {
  display: none !important
}
```

- Keep specificity low and trend upwards in specificity as you move further down file. See Specificity graph.
- Don't use unnecessary tag selectors.

```scss
// Bad
p.body_text { }

// Good
.body_text
```

- If you have to hack specificity, use a safe hack: the multi class.

```scss
// multi-class hack
.component.component { }
```

### Specificity graph
An easy rule to use when dealing with specificity is to start from a low specificity and curve to higher specificity as you move towards the bottom of the output file. Since CSS rules get replaced by rules further down in the file, you'll override rules in an expected way.

There’s a tool that can graph your files’ specificity, [CSS specificity graph](http://jonassebastianohlsson.com/specificity-graph/). Run your final output file through this tool and strive for a curve trending upwards.

#### Resources
* [CSS specificity graph](http://jonassebastianohlsson.com/specificity-graph/)
* [Explanation](http://csswizardry.com/2014/10/the-specificity-graph/)


### Rationale
With specificity comes great responsibility. Broad selectors allow us to be efficient, yet can have adverse consequences if not tested. Location-specific selectors can save us time, but will quickly lead to a cluttered stylesheet. Exercise your best judgement to create selectors that find the right balance between contributing to the overall style and layout of the DOM.

When modifying an existing element for a specific use, try to use specific class names. Instead of `.listings-layout.bigger` use rules like `.listings-layout.listings-bigger`. Think about ack/grepping your code in the future.

Use lowercase and separate words with hyphens when naming selectors. Avoid camelcase and underscores. Use human-readable selectors that describe what element(s) they style.

Attribute selectors should use double quotes around values. Refrain from using over-qualified selectors; `div.container` can simply be stated as `.container`.

IDs should be reserved for JavaScript. Unless you have a very good reason, all CSS should be attached to classes rather than IDs. When in doubt, use a class name. This prevents target confusion and allows CSS devs and JS devs to co-exist in the same code in peace. If you must use an id selector (`#id`) make sure that you have no more than one in your rule declaration.


<a id="variables"></a>
## Variables
- Create new variables in the following circumstances:
  - the value is repeated twice;
  - the value is likely to be updated at least once;
  - all occurrences of the value are tied to the variable (i.e. not by coincidence).
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